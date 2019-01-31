import {include} from "panda-parchment"
import KMSEnvelope from "./kms-envelope"

containers = (confidential) ->
  include confidential, KMSEnvelope: KMSEnvelope confidential

export default containers
