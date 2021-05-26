self["webpackHotUpdate_N_E"]("pages/exchange",{

/***/ "./src/hooks/useContract.js":
/*!**********************************!*\
  !*** ./src/hooks/useContract.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": function() { return /* binding */ connect; }
/* harmony export */ });
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contracts_contract_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/contract.json */ "./src/contracts/contract.json");
/* harmony import */ var _contracts_bep20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/bep20.json */ "./src/contracts/bep20.json");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/web3-provider */ "./node_modules/@walletconnect/web3-provider/dist/cjs/index.js");
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/notify */ "./src/libs/notify.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/common-slice */ "./src/stores/common-slice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();









var contractAddress = "0xf22C5f06e53E5cb03B0b53DC4Cf453A357A9D2cC";
var regex = /^\d+(\.\d{0,6})?$/;
var BN = (web3__WEBPACK_IMPORTED_MODULE_3___default().utils.BN);

var toNumberString = function toNumberString(amount, dec) {
  return new BN(amount).mul(new BN(10).pow(new BN(dec))).toString();
};

var connect = function connect() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var providerOptions = {
    walletconnect: {
      "package": _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__.default,
      options: {
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545"
        },
        network: "binance",
        chainId: Number("97")
      }
    }
  };

  var connect = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var web3Modal, provider, web3, chainId, accounts, contract;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!window.contract) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({
                network: "binance",
                chainId: Number("97"),
                providerOptions: providerOptions
              });
              web3Modal.clearCachedProvider();
              _context.next = 7;
              return web3Modal.connect();

            case 7:
              provider = _context.sent;
              web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);
              _context.next = 11;
              return web3.eth.getChainId();

            case 11:
              chainId = _context.sent;

              if (!(chainId != "97")) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_7__.errorNotify)("Please select Binance Smart Chain"));

            case 14:
              _context.next = 16;
              return web3.eth.getAccounts();

            case 16:
              accounts = _context.sent;
              contract = new web3.eth.Contract(_contracts_contract_json__WEBPACK_IMPORTED_MODULE_4__, contractAddress);
              window.contract = contract;
              window.provider = web3;
              dispatch((0,_stores_common_slice__WEBPACK_IMPORTED_MODULE_9__.setAccount)(accounts[0]));
              return _context.abrupt("return", accounts[0]);

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              console.log("err", _context.t0);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 24]]);
    }));

    return function connect() {
      return _ref.apply(this, arguments);
    };
  }();

  var claimAirdrop = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(refer) {
      var accounts;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return connect();

            case 3:
              _context2.next = 5;
              return window.provider.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return window.contract.methods.getAirdrop(refer).send({
                from: accounts[0]
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function claimAirdrop(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var buySaleWithBnb = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(refer, amount, tokenAddress) {
      var accounts;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return connect();

            case 3:
              if (regex.test(amount)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_7__.errorNotify)("Invalid input amount"));

            case 5:
              _context3.next = 7;
              return window.provider.eth.getAccounts();

            case 7:
              accounts = _context3.sent;
              _context3.next = 10;
              return window.contract.methods.buyPublicSaleWithBnb(refer, tokenAddress).send({
                from: accounts[0],
                value: amount * Math.pow(10, 18)
              });

            case 10:
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function buySaleWithBnb(_x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getTokenBalance = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(account, address) {
      var tokenContract, bl, dec;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              tokenContract = new window.provider.eth.Contract(_contracts_bep20_json__WEBPACK_IMPORTED_MODULE_5__, address);
              _context4.next = 3;
              return tokenContract.methods.balanceOf(account).call();

            case 3:
              bl = _context4.sent;
              _context4.next = 6;
              return tokenContract.methods.decimals().call();

            case 6:
              dec = _context4.sent;
              return _context4.abrupt("return", Number(bl.toString()) / Math.pow(10, Number(dec.toString())));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getTokenBalance(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getBnbBalance = /*#__PURE__*/function () {
    var _ref5 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(account) {
      var bl;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return window.provider.eth.getBalance(account);

            case 2:
              bl = _context5.sent;
              return _context5.abrupt("return", window.provider.utils.fromWei(bl.toString(), "ether"));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getBnbBalance(_x7) {
      return _ref5.apply(this, arguments);
    };
  }();

  var approve = /*#__PURE__*/function () {
    var _ref6 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(address, amount) {
      var accounts, tokenContract, decimals;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return connect();

            case 2:
              if (regex.test(amount)) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_7__.errorNotify)("Invalid input amount"));

            case 4:
              _context6.next = 6;
              return window.provider.eth.getAccounts();

            case 6:
              accounts = _context6.sent;
              tokenContract = new window.provider.eth.Contract(_contracts_bep20_json__WEBPACK_IMPORTED_MODULE_5__, address);
              _context6.next = 10;
              return tokenContract.methods.decimals().call();

            case 10:
              decimals = _context6.sent;
              console.log(decimals, toNumberString(amount, decimals));
              _context6.next = 14;
              return tokenContract.methods.approve("0xf22C5f06e53E5cb03B0b53DC4Cf453A357A9D2cC", toNumberString(amount, decimals)).send({
                from: accounts[0]
              });

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function approve(_x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }();

  var buySaleWithToken = /*#__PURE__*/function () {
    var _ref7 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(refer, amount, buyWithAddress, receiveAddress) {
      var accounts, tokenContract, decimals;
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              console.log(refer, amount, buyWithAddress, receiveAddress);
              _context7.next = 4;
              return connect();

            case 4:
              _context7.next = 6;
              return window.provider.eth.getAccounts();

            case 6:
              accounts = _context7.sent;
              tokenContract = new window.provider.eth.Contract(_contracts_bep20_json__WEBPACK_IMPORTED_MODULE_5__, buyWithAddress);
              _context7.next = 10;
              return tokenContract.methods.decimals().call();

            case 10:
              decimals = _context7.sent;
              _context7.next = 13;
              return window.contract.methods.buyPublicSaleWithStableToken(refer, amount * Math.pow(10, Number(decimals)), receiveAddress, buyWithAddress).send({
                from: accounts[0]
              });

            case 13:
              _context7.next = 18;
              break;

            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 15]]);
    }));

    return function buySaleWithToken(_x10, _x11, _x12, _x13) {
      return _ref7.apply(this, arguments);
    };
  }();

  return {
    claimAirdrop: claimAirdrop,
    buySaleWithBnb: buySaleWithBnb,
    connect: connect,
    buySaleWithToken: buySaleWithToken,
    approve: approve,
    getTokenBalance: getTokenBalance,
    getBnbBalance: getBnbBalance
  };
};

_s(connect, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNvbnRyYWN0LmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzcyIsInByb2Nlc3MiLCJyZWdleCIsIkJOIiwiV2ViMyIsInRvTnVtYmVyU3RyaW5nIiwiYW1vdW50IiwiZGVjIiwibXVsIiwicG93IiwidG9TdHJpbmciLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyT3B0aW9ucyIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJycGMiLCJuZXR3b3JrIiwiY2hhaW5JZCIsIk51bWJlciIsIndpbmRvdyIsImNvbnRyYWN0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY2xlYXJDYWNoZWRQcm92aWRlciIsInByb3ZpZGVyIiwid2ViMyIsImV0aCIsImdldENoYWluSWQiLCJlcnJvck5vdGlmeSIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJDb250cmFjdCIsImNvbnRyYWN0SnNvbiIsInNldEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY2xhaW1BaXJkcm9wIiwicmVmZXIiLCJtZXRob2RzIiwiZ2V0QWlyZHJvcCIsInNlbmQiLCJmcm9tIiwiYnV5U2FsZVdpdGhCbmIiLCJ0b2tlbkFkZHJlc3MiLCJ0ZXN0IiwiYnV5UHVibGljU2FsZVdpdGhCbmIiLCJ2YWx1ZSIsImdldFRva2VuQmFsYW5jZSIsImFjY291bnQiLCJhZGRyZXNzIiwidG9rZW5Db250cmFjdCIsImJlcDIwSnNvbiIsImJhbGFuY2VPZiIsImNhbGwiLCJibCIsImRlY2ltYWxzIiwiZ2V0Qm5iQmFsYW5jZSIsImdldEJhbGFuY2UiLCJ1dGlscyIsImZyb21XZWkiLCJhcHByb3ZlIiwiYnV5U2FsZVdpdGhUb2tlbiIsImJ1eVdpdGhBZGRyZXNzIiwicmVjZWl2ZUFkZHJlc3MiLCJidXlQdWJsaWNTYWxlV2l0aFN0YWJsZVRva2VuIl0s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LE9BSEs7QUFJTHNELG9CQUFnQixFQUFoQkEsZ0JBSks7QUFLTEQsV0FBTyxFQUFQQSxPQUxLO0FBTUxiLG1CQUFlLEVBQWZBLGVBTks7QUFPTFMsaUJBQWEsRUFBYkE7QUFQSyxHQUFQO0FBU0QsQ0ExSU07O0dBQU1qRCxPO1VBQ01FLG9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4Y2hhbmdlLjFlMTIxYzE1NjVmYWQyMDRmZWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQgY29udHJhY3RKc29uIGZyb20gXCIuLi9jb250cmFjdHMvY29udHJhY3QuanNvblwiO1xuaW1wb3J0IGJlcDIwSnNvbiBmcm9tIFwiLi4vY29udHJhY3RzL2JlcDIwLmpzb25cIjtcbmltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIjtcbmltcG9ydCB7IGVycm9yTm90aWZ5IH0gZnJvbSBcIi4uL2xpYnMvbm90aWZ5XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWNjb3VudCB9IGZyb20gXCIuLi9zdG9yZXMvY29tbW9uLXNsaWNlXCI7XG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTO1xuY29uc3QgcmVnZXggPSAvXlxcZCsoXFwuXFxkezAsNn0pPyQvO1xuY29uc3QgQk4gPSBXZWIzLnV0aWxzLkJOO1xuXG5jb25zdCB0b051bWJlclN0cmluZyA9IChhbW91bnQsIGRlYykgPT4ge1xuICByZXR1cm4gbmV3IEJOKGFtb3VudCkubXVsKG5ldyBCTigxMCkucG93KG5ldyBCTihkZWMpKSkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGxldCBwcm92aWRlck9wdGlvbnMgPSB7XG4gICAgd2FsbGV0Y29ubmVjdDoge1xuICAgICAgcGFja2FnZTogV2FsbGV0Q29ubmVjdFByb3ZpZGVyLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpbmZ1cmFJZDogXCI4MDQzYmIyY2Y5OTM0N2IxYmZhZGZiMjMzYzUzMjVjMFwiLFxuICAgICAgICBycGM6IHtcbiAgICAgICAgICA1NjogXCJodHRwczovL2JzYy1kYXRhc2VlZC5iaW5hbmNlLm9yZy9cIixcbiAgICAgICAgICA5NzogXCJodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG5ldHdvcms6IFwiYmluYW5jZVwiLFxuICAgICAgICBjaGFpbklkOiBOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93LmNvbnRyYWN0KSByZXR1cm47XG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJiaW5hbmNlXCIsXG4gICAgICAgIGNoYWluSWQ6IE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRCksXG4gICAgICAgIHByb3ZpZGVyT3B0aW9ucyxcbiAgICAgIH0pO1xuICAgICAgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgd2ViMy5ldGguZ2V0Q2hhaW5JZCgpO1xuICAgICAgaWYgKGNoYWluSWQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBCaW5hbmNlIFNtYXJ0IENoYWluXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RKc29uLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgd2luZG93LmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgICB3aW5kb3cucHJvdmlkZXIgPSB3ZWIzO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudChhY2NvdW50c1swXSkpO1xuICAgICAgcmV0dXJuIGFjY291bnRzWzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsYWltQWlyZHJvcCA9IGFzeW5jIChyZWZlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgICAgLmdldEFpcmRyb3AocmVmZXIpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidXlTYWxlV2l0aEJuYiA9IGFzeW5jIChyZWZlciwgYW1vdW50LCB0b2tlbkFkZHJlc3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgICBpZiAoIXJlZ2V4LnRlc3QoYW1vdW50KSkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJJbnZhbGlkIGlucHV0IGFtb3VudFwiKTtcbiAgICAgIH0gLy8gaW52YWxkIGFtb3VudFxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYnV5UHVibGljU2FsZVdpdGhCbmIocmVmZXIsIHRva2VuQWRkcmVzcylcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICAgIHZhbHVlOiBhbW91bnQgKiAxMCAqKiAxOCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0VG9rZW5CYWxhbmNlID0gYXN5bmMgKGFjY291bnQsIGFkZHJlc3MpID0+IHtcbiAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IHdpbmRvdy5wcm92aWRlci5ldGguQ29udHJhY3QoYmVwMjBKc29uLCBhZGRyZXNzKTtcbiAgICBjb25zdCBibCA9IGF3YWl0IHRva2VuQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoYWNjb3VudCkuY2FsbCgpO1xuICAgIGNvbnN0IGRlYyA9IGF3YWl0IHRva2VuQ29udHJhY3QubWV0aG9kcy5kZWNpbWFscygpLmNhbGwoKTtcbiAgICByZXR1cm4gTnVtYmVyKGJsLnRvU3RyaW5nKCkpIC8gMTAgKiogTnVtYmVyKGRlYy50b1N0cmluZygpKTtcbiAgfTtcbiAgY29uc3QgZ2V0Qm5iQmFsYW5jZSA9IGFzeW5jIChhY2NvdW50KSA9PiB7XG4gICAgY29uc3QgYmwgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEJhbGFuY2UoYWNjb3VudCk7XG4gICAgcmV0dXJuIHdpbmRvdy5wcm92aWRlci51dGlscy5mcm9tV2VpKGJsLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XG4gIH07XG4gIGNvbnN0IGFwcHJvdmUgPSBhc3luYyAoYWRkcmVzcywgYW1vdW50KSA9PiB7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuICAgIGlmICghcmVnZXgudGVzdChhbW91bnQpKSB7XG4gICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJJbnZhbGlkIGlucHV0IGFtb3VudFwiKTtcbiAgICB9XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKCk7XG4gICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3aW5kb3cucHJvdmlkZXIuZXRoLkNvbnRyYWN0KGJlcDIwSnNvbiwgYWRkcmVzcyk7XG4gICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coZGVjaW1hbHMsIHRvTnVtYmVyU3RyaW5nKGFtb3VudCwgZGVjaW1hbHMpKTtcbiAgICBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgIC5hcHByb3ZlKFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICB0b051bWJlclN0cmluZyhhbW91bnQsIGRlY2ltYWxzKVxuICAgICAgKVxuICAgICAgLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBidXlTYWxlV2l0aFRva2VuID0gYXN5bmMgKFxuICAgIHJlZmVyLFxuICAgIGFtb3VudCxcbiAgICBidXlXaXRoQWRkcmVzcyxcbiAgICByZWNlaXZlQWRkcmVzc1xuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocmVmZXIsIGFtb3VudCwgYnV5V2l0aEFkZHJlc3MsIHJlY2VpdmVBZGRyZXNzKTtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3aW5kb3cucHJvdmlkZXIuZXRoLkNvbnRyYWN0KFxuICAgICAgICBiZXAyMEpzb24sXG4gICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICApO1xuICAgICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKCk7XG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYnV5UHVibGljU2FsZVdpdGhTdGFibGVUb2tlbihcbiAgICAgICAgICByZWZlcixcbiAgICAgICAgICBhbW91bnQgKiAxMCAqKiBOdW1iZXIoZGVjaW1hbHMpLFxuICAgICAgICAgIHJlY2VpdmVBZGRyZXNzLFxuICAgICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNsYWltQWlyZHJvcCxcbiAgICBidXlTYWxlV2l0aEJuYixcbiAgICBjb25uZWN0LFxuICAgIGJ1eVNhbGVXaXRoVG9rZW4sXG4gICAgYXBwcm92ZSxcbiAgICBnZXRUb2tlbkJhbGFuY2UsXG4gICAgZ2V0Qm5iQmFsYW5jZSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9