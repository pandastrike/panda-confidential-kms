# Tests
import {print, test} from "amen"
import symmetricKMS from "./symmetric-encryption-kms"

# Used to extend the confidential interface.
import {confidential} from "panda-confidential"
import KMS from "../../src/index"


Tests = (sundog) ->
  kms = KMS confidential(), sundog.KMS()
  await print await test "Panda Confidential with KMS", [
    test
      description: "Host-Proof Symmetric Encryption"
      wait: false,
      symmetricKMS kms
  ]

export default Tests
