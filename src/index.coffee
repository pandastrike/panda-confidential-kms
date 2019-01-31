import Sundog from "sundog"
import Containers from "./containers"
import Keys from "./keys"
import Functions from "./functions"

# Extend Confidential with KMS via sundog.
KMSExtension = (confidential, SDK) ->
  # Access to the AWS API through the Sundog helper layer.
  {AWS:{KMS}} = Sundog SDK
  confidential.kms = KMS()

  # Override TweetNaCl's local randomBytes method with KMS
  confidential.randomBytes = (length) ->
    await confidential.kms.randomKey length, "buffer"

  # Extend the type system
  Containers confidential
  Keys confidential

  # Extend Confidential's encrypt and decrypt generics
  Functions confidential

  confidential

export default KMSExtension
