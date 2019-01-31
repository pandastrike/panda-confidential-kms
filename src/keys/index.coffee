import {include} from "panda-parchment"
import KMSKey from "./kms"

keys = (confidential) ->
  include confidential, KMSKey: KMSKey confidential

export default keys
