"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _amen = require("amen");

var _symmetricEncryption = _interopRequireDefault(require("./symmetric-encryption"));

var _symmetricEncryptionKms = _interopRequireDefault(require("./symmetric-encryption-kms"));

var _asymmetricEncryption = _interopRequireDefault(require("./asymmetric-encryption"));

var _signature = _interopRequireDefault(require("./signature"));

var _hash = _interopRequireDefault(require("./hash"));

var _pandaConfidential = require("panda-confidential");

var _index = _interopRequireDefault(require("../../src/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Tests
var Tests;

Tests = async function (SDK) {
  var kms;
  kms = (0, _index.default)((0, _pandaConfidential.confidential)(), SDK);
  return await (0, _amen.print)((await (0, _amen.test)("Panda Confidential with KMS", [(0, _amen.test)({
    description: "Symmetric Encryption",
    wait: false
  }, (0, _symmetricEncryption.default)(kms)), (0, _amen.test)({
    description: "Symmetric Encryption with KMS",
    wait: false
  }, (0, _symmetricEncryptionKms.default)(kms)), (0, _amen.test)({
    description: "Public Key Encryption",
    wait: false
  }, (0, _asymmetricEncryption.default)(kms)), (0, _amen.test)({
    description: "Digital Signature",
    wait: false
  }, (0, _signature.default)(kms)), (0, _amen.test)({
    description: "SHA-512 Hash",
    wait: false
  }, (0, _hash.default)(kms))])));
};

var _default = Tests;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFWQTtBQUFBLElBQUEsS0FBQTs7QUFhQSxLQUFBLEdBQVEsZ0JBQUEsR0FBQSxFQUFBO0FBQ04sTUFBQSxHQUFBO0FBQUEsRUFBQSxHQUFBLEdBQU0sb0JBQUEsc0NBQUEsRUFBQSxHQUFBLENBQU47QUFDQSxTQUFBLE1BQU0sa0JBQU0sTUFBTSxnQkFBQSw2QkFBQSxFQUFvQyxDQUNwRCxnQkFDRTtBQUFBLElBQUEsV0FBQSxFQUFBLHNCQUFBO0FBQ0EsSUFBQSxJQUFBLEVBQU07QUFETixHQURGLEVBR0Usa0NBSmtELEdBSWxELENBSEYsQ0FEb0QsRUFNcEQsZ0JBQ0U7QUFBQSxJQUFBLFdBQUEsRUFBQSwrQkFBQTtBQUNBLElBQUEsSUFBQSxFQUFNO0FBRE4sR0FERixFQUdFLHFDQVRrRCxHQVNsRCxDQUhGLENBTm9ELEVBV3BELGdCQUNFO0FBQUEsSUFBQSxXQUFBLEVBQUEsdUJBQUE7QUFDQSxJQUFBLElBQUEsRUFBTTtBQUROLEdBREYsRUFHRSxtQ0Fka0QsR0FjbEQsQ0FIRixDQVhvRCxFQWdCcEQsZ0JBQ0U7QUFBQSxJQUFBLFdBQUEsRUFBQSxtQkFBQTtBQUNBLElBQUEsSUFBQSxFQUFNO0FBRE4sR0FERixFQUdFLHdCQW5Ca0QsR0FtQmxELENBSEYsQ0FoQm9ELEVBcUJwRCxnQkFDRTtBQUFBLElBQUEsV0FBQSxFQUFBLGNBQUE7QUFDQSxJQUFBLElBQUEsRUFBTTtBQUROLEdBREYsRUFHRSxtQkF4QmtELEdBd0JsRCxDQUhGLENBckJvRCxDQUFwQyxDQUFaLEVBQU47QUFGTSxDQUFSOztlQTZCZSxLIiwic291cmNlc0NvbnRlbnQiOlsiIyBUZXN0c1xuaW1wb3J0IHtwcmludCwgdGVzdH0gZnJvbSBcImFtZW5cIlxuaW1wb3J0IHN5bW1ldHJpYyBmcm9tIFwiLi9zeW1tZXRyaWMtZW5jcnlwdGlvblwiXG5pbXBvcnQgc3ltbWV0cmljS01TIGZyb20gXCIuL3N5bW1ldHJpYy1lbmNyeXB0aW9uLWttc1wiXG5pbXBvcnQgYXN5bW1ldHJpYyBmcm9tIFwiLi9hc3ltbWV0cmljLWVuY3J5cHRpb25cIlxuaW1wb3J0IHNpZ25hdHVyZSBmcm9tIFwiLi9zaWduYXR1cmVcIlxuaW1wb3J0IGhhc2ggZnJvbSBcIi4vaGFzaFwiXG5cbiMgVXNlZCB0byBleHRlbmQgdGhlIGNvbmZpZGVudGlhbCBpbnRlcmZhY2UuXG5pbXBvcnQge2NvbmZpZGVudGlhbH0gZnJvbSBcInBhbmRhLWNvbmZpZGVudGlhbFwiXG5pbXBvcnQgS01TIGZyb20gXCIuLi8uLi9zcmMvaW5kZXhcIlxuXG5cblRlc3RzID0gKFNESykgLT5cbiAga21zID0gS01TIGNvbmZpZGVudGlhbCgpLCBTREtcbiAgYXdhaXQgcHJpbnQgYXdhaXQgdGVzdCBcIlBhbmRhIENvbmZpZGVudGlhbCB3aXRoIEtNU1wiLCBbXG4gICAgdGVzdFxuICAgICAgZGVzY3JpcHRpb246IFwiU3ltbWV0cmljIEVuY3J5cHRpb25cIlxuICAgICAgd2FpdDogZmFsc2UsXG4gICAgICBzeW1tZXRyaWMga21zXG5cbiAgICB0ZXN0XG4gICAgICBkZXNjcmlwdGlvbjogXCJTeW1tZXRyaWMgRW5jcnlwdGlvbiB3aXRoIEtNU1wiXG4gICAgICB3YWl0OiBmYWxzZSxcbiAgICAgIHN5bW1ldHJpY0tNUyBrbXNcblxuICAgIHRlc3RcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBLZXkgRW5jcnlwdGlvblwiXG4gICAgICB3YWl0OiBmYWxzZSxcbiAgICAgIGFzeW1tZXRyaWMga21zXG5cbiAgICB0ZXN0XG4gICAgICBkZXNjcmlwdGlvbjogXCJEaWdpdGFsIFNpZ25hdHVyZVwiXG4gICAgICB3YWl0OiBmYWxzZSxcbiAgICAgIHNpZ25hdHVyZSBrbXNcblxuICAgIHRlc3RcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNIQS01MTIgSGFzaFwiXG4gICAgICB3YWl0OiBmYWxzZSxcbiAgICAgIGhhc2gga21zXG4gIF1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=tests/index.coffee