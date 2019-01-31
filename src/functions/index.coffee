import {include} from "panda-parchment"
import encrypt from "./encrypt"
import decrypt from "./decrypt"

functions = (confidential) ->
  include confidential, encrypt: encrypt confidential
  include confidential, decrypt: decrypt confidential

export default functions
