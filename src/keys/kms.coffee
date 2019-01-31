import {isType} from "panda-parchment"

kmsKey = ({convert}) ->

  class KMSKey
    constructor: (@id) ->

    to: (hint) ->
      if hint == "utf8"
        @id
      else
        convert from: "utf8", to: hint, @id

    @from: (hint, value) ->
      new KMSKey do ->
        if hint == "utf8"
          value
        else
          convert from: hint, to: "utf8", value

    @isType: isType @

export default kmsKey
