import {Method} from "panda-generics"

Encrypt = ({encrypt, KMSKey, Message, SymmetricKey,
  Ciphertext, kms, KMSEnvelope}) ->

  Method.define encrypt, KMSKey.isType, Message.isType,
    (kmsKey, message) ->
      key = await SymmetricKey.create()
      envelope = await encrypt key, message

      lockedKey = Ciphertext.from "base64",
        await kms.encrypt(
          kmsKey.to "utf8"
          key.to "bytes"
          "buffer"
        )

      KMSEnvelope.create {envelope, lockedKey}

  encrypt

export default Encrypt
