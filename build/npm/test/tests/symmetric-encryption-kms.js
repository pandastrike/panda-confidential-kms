"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _keyName = _interopRequireDefault(require("../key-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symmetric;

symmetric = function ({
  key,
  encrypt,
  decrypt
}) {
  return async function () {
    var cipher, keyID, message, output; // Create our custom key class to pass into Confidential.

    keyID = key.KMS(_keyName.default);
    (0, _assert.default)(keyID && key.isKMSKeyID(keyID), "bad key"); // Person A symmetrically encrypts their data.

    message = "Hello World!";
    cipher = await encrypt(keyID, message);
    (0, _assert.default)(cipher && message !== cipher, "must create a ciphertext"); // Person A later decrypts that ciphertext.

    output = await decrypt(keyID, cipher);
    return _assert.default.equal(message, output, "failed to decrypt");
  };
};

var _default = symmetric;
exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL3N5bW1ldHJpYy1lbmNyeXB0aW9uLWttcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBREEsSUFBQSxTQUFBOztBQUdBLFNBQUEsR0FBWSxVQUFDO0FBQUEsRUFBQSxHQUFBO0FBQUEsRUFBQSxPQUFBO0FBQUQsRUFBQTtBQUFDLENBQUQsRUFBQTtTQUE2QixrQkFBQTtBQUV2QyxRQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsQ0FGdUMsQzs7QUFFdkMsSUFBQSxLQUFBLEdBQVEsR0FBRyxDQUFILEdBQUEsQ0FBQSxnQkFBQSxDQUFSO0FBQ0EseUJBQVEsS0FBQSxJQUFTLEdBQUcsQ0FBSCxVQUFBLENBQWpCLEtBQWlCLENBQWpCLEVBREEsU0FDQSxFQUh1QyxDOztBQU12QyxJQUFBLE9BQUEsR0FBVSxjQUFWO0FBQ0EsSUFBQSxNQUFBLEdBQVMsTUFBTSxPQUFBLENBQUEsS0FBQSxFQUFOLE9BQU0sQ0FBZjtBQUNBLHlCQUFRLE1BQUEsSUFBVSxPQUFBLEtBQWxCLE1BQUEsRUFOQSwwQkFNQSxFQVJ1QyxDOztBQVd2QyxJQUFBLE1BQUEsR0FBUyxNQUFNLE9BQUEsQ0FBQSxLQUFBLEVBQU4sTUFBTSxDQUFmO1dBQ0EsZ0JBQUEsS0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsbUJBQUEsQztBQVp1QyxHO0FBQTdCLENBQVo7O2VBY2UsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXG5pbXBvcnQga21zS2V5TmFtZSBmcm9tIFwiLi4va2V5LW5hbWVcIlxuXG5zeW1tZXRyaWMgPSAoe2tleSwgZW5jcnlwdCwgZGVjcnlwdH0pIC0+IC0+XG4gICMgQ3JlYXRlIG91ciBjdXN0b20ga2V5IGNsYXNzIHRvIHBhc3MgaW50byBDb25maWRlbnRpYWwuXG4gIGtleUlEID0ga2V5LktNUyBrbXNLZXlOYW1lXG4gIGFzc2VydCAoa2V5SUQgJiYga2V5LmlzS01TS2V5SUQga2V5SUQpLCBcImJhZCBrZXlcIlxuXG4gICMgUGVyc29uIEEgc3ltbWV0cmljYWxseSBlbmNyeXB0cyB0aGVpciBkYXRhLlxuICBtZXNzYWdlID0gXCJIZWxsbyBXb3JsZCFcIlxuICBjaXBoZXIgPSBhd2FpdCBlbmNyeXB0IGtleUlELCBtZXNzYWdlXG4gIGFzc2VydCAoY2lwaGVyICYmIG1lc3NhZ2UgIT0gY2lwaGVyKSwgXCJtdXN0IGNyZWF0ZSBhIGNpcGhlcnRleHRcIlxuXG4gICMgUGVyc29uIEEgbGF0ZXIgZGVjcnlwdHMgdGhhdCBjaXBoZXJ0ZXh0LlxuICBvdXRwdXQgPSBhd2FpdCBkZWNyeXB0IGtleUlELCBjaXBoZXJcbiAgYXNzZXJ0LmVxdWFsIG1lc3NhZ2UsIG91dHB1dCwgXCJmYWlsZWQgdG8gZGVjcnlwdFwiXG5cbmV4cG9ydCBkZWZhdWx0IHN5bW1ldHJpY1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=tests/symmetric-encryption-kms.coffee