import assert from "assert"
import kmsKeyName from "../key-name"

symmetric = ({KMSKey, Message, KMSEnvelope, encrypt, decrypt}) -> ->
  # Create our custom key class to pass into Confidential.
  kmsKey = KMSKey.from "utf8", kmsKeyName
  assert (KMSKey.isType kmsKey), "bad key"

  # Person A symmetrically encrypts their data.
  string = "Hello World!"
  message = Message.from "utf8", string
  envelope = await encrypt kmsKey, message
  assert (KMSEnvelope.isType envelope), "bad envelope"

  # Person A later decrypts that ciphertext.
  message = await decrypt kmsKey, envelope
  assert.equal (message.to "utf8"), string, "failed to decrypt"

export default symmetric
