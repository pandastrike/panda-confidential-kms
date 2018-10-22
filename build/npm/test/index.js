"use strict";

require("source-map-support/register");

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

var _context = _interopRequireDefault(require("./context"));

var _key = _interopRequireDefault(require("./key"));

var _tests = _interopRequireDefault(require("./tests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options;
// This grabs CLI arugments to allow the developer to configure the AWS context.
options = (0, _commandLineArgs.default)([{
  name: "profile",
  alias: "p",
  type: String
}, {
  name: "region",
  alias: "r",
  type: String
}]);

(async function () {
  var SDK, Sundog, e;

  try {
    console.error("Establishing AWS context...");
    ({
      Sundog,
      SDK
    } = (0, _context.default)(options));
    await (0, _key.default)(Sundog);
  } catch (error) {
    e = error;
    console.error("Failed to establish AWS SDK context.", e);
    process.exit();
  }

  return await (0, _tests.default)(SDK);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUpBOzs7O0FBQUEsSUFBQSxPQUFBOztBQVFBLE9BQUEsR0FBVSw4QkFBYSxDQUNyQjtBQUFFLEVBQUEsSUFBQSxFQUFGLFNBQUE7QUFBbUIsRUFBQSxLQUFBLEVBQW5CLEdBQUE7QUFBK0IsRUFBQSxJQUFBLEVBQU07QUFBckMsQ0FEcUIsRUFFckI7QUFBRSxFQUFBLElBQUEsRUFBRixRQUFBO0FBQWtCLEVBQUEsS0FBQSxFQUFsQixHQUFBO0FBQThCLEVBQUEsSUFBQSxFQUFNO0FBQXBDLENBRnFCLENBQWIsQ0FBVjs7QUFLRyxDQUFBLGtCQUFBO0FBQ0QsTUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLENBQUE7O0FBQUEsTUFBQTtBQUNFLElBQUEsT0FBTyxDQUFQLEtBQUEsQ0FBQSw2QkFBQTtBQUNBLEtBQUE7QUFBQSxNQUFBLE1BQUE7QUFBQSxNQUFBO0FBQUEsUUFBZ0Isc0JBQWhCLE9BQWdCLENBQWhCO0FBQ0EsVUFBTSxrQkFIUixNQUdRLENBQU47QUFIRixHQUFBLENBQUEsT0FBQSxLQUFBLEVBQUE7QUFJTSxJQUFBLENBQUEsR0FBQSxLQUFBO0FBQ0osSUFBQSxPQUFPLENBQVAsS0FBQSxDQUFBLHNDQUFBLEVBQUEsQ0FBQTtBQUNBLElBQUEsT0FBTyxDQU5ULElBTUU7OztBQUVGLFNBQUEsTUFBTSxvQkFBTixHQUFNLENBQU47QUFURixDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCJcbmltcG9ydCBwYXJzZUNMSUFyZ3MgZnJvbSBcImNvbW1hbmQtbGluZS1hcmdzXCJcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQgRXN0YWJsaXNoS2V5IGZyb20gXCIuL2tleVwiXG5pbXBvcnQgVGVzdHMgZnJvbSBcIi4vdGVzdHNcIlxuXG4jIFRoaXMgZ3JhYnMgQ0xJIGFydWdtZW50cyB0byBhbGxvdyB0aGUgZGV2ZWxvcGVyIHRvIGNvbmZpZ3VyZSB0aGUgQVdTIGNvbnRleHQuXG5vcHRpb25zID0gcGFyc2VDTElBcmdzIFtcbiAgeyBuYW1lOiBcInByb2ZpbGVcIiwgYWxpYXM6IFwicFwiLCB0eXBlOiBTdHJpbmcgfVxuICB7IG5hbWU6IFwicmVnaW9uXCIsIGFsaWFzOiBcInJcIiwgdHlwZTogU3RyaW5nIH1cbl1cblxuZG8gLT5cbiAgdHJ5XG4gICAgY29uc29sZS5lcnJvciBcIkVzdGFibGlzaGluZyBBV1MgY29udGV4dC4uLlwiXG4gICAge1N1bmRvZywgU0RLfSA9IENvbnRleHQgb3B0aW9uc1xuICAgIGF3YWl0IEVzdGFibGlzaEtleSBTdW5kb2dcbiAgY2F0Y2ggZVxuICAgIGNvbnNvbGUuZXJyb3IgXCJGYWlsZWQgdG8gZXN0YWJsaXNoIEFXUyBTREsgY29udGV4dC5cIiwgZVxuICAgIHByb2Nlc3MuZXhpdCgpXG5cbiAgYXdhaXQgVGVzdHMgU0RLXG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=index.coffee