import Containers from "./containers"
import Keys from "./keys"
import Functions from "./functions"

# Extend Confidential with KMS via sundog.
KMSExtension = (confidential, kms) ->
  # Override TweetNaCl's local randomBytes method with KMS
  confidential.kms = kms
  confidential.randomBytes = kms.randomBytes

  # Extend the type system
  Containers confidential
  Keys confidential

  # Extend Confidential's encrypt and decrypt generics
  Functions confidential

  confidential

export default KMSExtension
