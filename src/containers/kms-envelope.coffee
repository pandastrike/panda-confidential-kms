import {isType, toJSON, fromJSON} from "panda-parchment"

Container = ({Envelope, Ciphertext, convert}) ->

  class KMSEnvelope
    constructor: (@envelope, @lockedKey) ->

    to: (hint) ->
      output =
        lockedKey: @lockedKey.to "base64"
        envelope: @envelope.to "base64"

      if hint == "utf8"
        toJSON output
      else
        convert from: "utf8", to: hint, toJSON output

    @create: (envelope, lockedKey) -> new KMSEnvelope envelope, lockedKey

    @from: (hint, value) ->
      new KMSEnvelope do ->
        {lockedKey, envelope} =
          if hint == "utf8"
            fromJSON value
          else
            fromJSON convert from: hint, to: "utf8", value

        lockedKey: Ciphertext.from "base64", lockedKey
        envelope: Envelope.from "base64", envelope

    @isType: isType @

export default Container
