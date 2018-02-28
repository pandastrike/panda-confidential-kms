import Sundog from "sundog"
import {isString} from "fairmont-helpers"
import {Method} from "fairmont-multimethods"
import {isKMSKeyID, kmsKeyID} from "./kms-key"

# Extend Confidential with KMS via sundog.
KMSExtension = (confidential, SDK) ->
  # Access to the AWS API through the Sundog helper layer.
  {AWS:KMS:{randomKey, encrypt:kmsEncrypt, decrypt:kmsDecrypt}} = Sundog SDK

  # Override TweetNaCl's local randomBytes method with KMS
  confidential.randomBytes = (length) -> await randomKey length, "buffer"

  # Extend the key-type interface
  confidential.key.KMS = kmsKeyID
  confidential.key.isKMSKeyID = isKMSKeyID

  {utils:{encode, decode, isData}, randomBytes, nacl} = confidential

  # Extension to Symmetric Encryption that encrypts the key with KMS.
  Method.define confidential.encrypt, isKMSKeyID, isData,
    ({id}, plaintext) ->
      length = nacl.secretbox.nonceLength + nacl.secretbox.keyLength
      r = await randomBytes length
      key = r.slice 0, nacl.secretbox.keyLength
      nonce = r.slice nacl.secretbox.keyLength

      ciphertext = nacl.secretbox plaintext, nonce, key
      lockedKey = await kmsEncrypt id, key, "buffer"
      encode
        lockedKey: lockedKey # Already base64
        ciphertext: encode "base64", ciphertext
        nonce: encode "base64", nonce

  Method.define confidential.encrypt, isKMSKeyID, isString, isString,
    (key, plaintext, encoding) ->
      confidential.encrypt key, decode(encoding, plaintext)
  Method.define confidential.encrypt, isKMSKeyID, isString,
    (key, plaintext) ->
      confidential.encrypt key, decode("utf8", plaintext)

  # Extension to Symmetric Decryption that encrypts the key with KMS.
  Method.define confidential.decrypt, isKMSKeyID, isData, isString,
    ({id}, blob, encoding) ->
      {ciphertext, nonce, lockedKey} = JSON.parse encode "utf8", blob
      ciphertext = decode "base64", ciphertext
      nonce = decode "base64", nonce
      key = await kmsDecrypt lockedKey, "buffer"
      encode encoding, nacl.secretbox.open ciphertext, nonce, key
  Method.define confidential.decrypt, isKMSKeyID, isData,
    (key, blob) ->
      confidential.decrypt key, blob, "utf8"
  Method.define confidential.decrypt, isKMSKeyID, isString, isString,
    (key, blob, encoding) ->
      confidential.decrypt key, decode("base64", blob), encoding
  Method.define confidential.decrypt, isKMSKeyID, isString,
    (key, blob) ->
      confidential.decrypt key, decode("base64", blob), "utf8"

  confidential

export default KMSExtension
