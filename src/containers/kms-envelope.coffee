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
      {lockedKey, envelope} =
        if hint == "utf8"
          fromJSON value
        else
          fromJSON convert from: hint, to: "utf8", value

      new KMSEnvelope(
        Envelope.from "base64", envelope
        Ciphertext.from "base64", lockedKey
      )

    @isType: isType @

export default Container
