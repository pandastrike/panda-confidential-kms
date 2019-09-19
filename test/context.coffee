import SDK from "aws-sdk"
import Sundog from "sundog"

context = ({region="us-east-1", profile="default"}) ->

  Sundog
    credentials: new SDK.SharedIniFileCredentials {profile}
    region: region
    sslEnabled: true

export default context
