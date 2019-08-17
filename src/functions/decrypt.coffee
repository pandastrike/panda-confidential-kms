import Method from "panda-generics"

Decrypt = ({decrypt, KMSKey, KMSEnvelope, SymmetricKey, kms}) ->

  Method.define decrypt, KMSKey.isType, KMSEnvelope.isType,
    (kmsKey, {envelope, lockedKey}) ->
      key = SymmetricKey.from "bytes",
        await kms.decrypt(
          lockedKey.to "base64"
          "buffer"
        )

      await decrypt key, envelope

  decrypt

export default Decrypt
