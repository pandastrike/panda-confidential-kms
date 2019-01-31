import SDK from "aws-sdk"
import Sundog from "sundog"

context = ({region="us-east-1", profile="default"}) ->
  SDK.config =
    credentials: new SDK.SharedIniFileCredentials {profile}
    region: region
    sslEnabled: true

  {SDK, Sundog: Sundog(SDK).AWS}

export default context
