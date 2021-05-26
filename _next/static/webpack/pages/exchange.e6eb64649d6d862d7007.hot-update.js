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
  new BN(amount).mul(new BN(10).pow(new BN(dec))).toString();
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
              console.log(decimals);
              _context6.next = 14;
              return tokenContract.methods.approve("0xf22C5f06e53E5cb03B0b53DC4Cf453A357A9D2cC", amount * Math.pow(10, Number(decimals))).send({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNvbnRyYWN0LmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzcyIsInByb2Nlc3MiLCJyZWdleCIsIkJOIiwiV2ViMyIsInRvTnVtYmVyU3RyaW5nIiwiYW1vdW50IiwiZGVjIiwibXVsIiwicG93IiwidG9TdHJpbmciLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyT3B0aW9ucyIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJycGMiLCJuZXR3b3JrIiwiY2hhaW5JZCIsIk51bWJlciIsIndpbmRvdyIsImNvbnRyYWN0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY2xlYXJDYWNoZWRQcm92aWRlciIsInByb3ZpZGVyIiwid2ViMyIsImV0aCIsImdldENoYWluSWQiLCJlcnJvck5vdGlmeSIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJDb250cmFjdCIsImNvbnRyYWN0SnNvbiIsInNldEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY2xhaW1BaXJkcm9wIiwicmVmZXIiLCJtZXRob2RzIiwiZ2V0QWlyZHJvcCIsInNlbmQiLCJmcm9tIiwiYnV5U2FsZVdpdGhCbmIiLCJ0b2tlbkFkZHJlc3MiLCJ0ZXN0IiwiYnV5UHVibGljU2FsZVdpdGhCbmIiLCJ2YWx1ZSIsImdldFRva2VuQmFsYW5jZSIsImFjY291bnQiLCJhZGRyZXNzIiwidG9rZW5Db250cmFjdCIsImJlcDIwSnNvbiIsImJhbGFuY2VPZiIsImNhbGwiLCJibCIsImRlY2ltYWxzIiwiZ2V0Qm5iQmFsYW5jZSIsImdldEJhbGFuY2UiLCJ1dGlscyIsImZyb21XZWkiLCJhcHByb3ZlIiwiYnV5U2FsZVdpdGhUb2tlbiIsImJ1eVdpdGhBZGRyZXNzIiwicmVjZWl2ZUFkZHJlc3MiLCJidXlQdWJsaWNTYWxlV2l0aFN0YWJsZVRva2VuIl0s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TEQsV0FBTyxFQUFQQSxPQUxLO0FBTUxiLG1CQUFlLEVBQWZBLGVBTks7QUFPTFMsaUJBQWEsRUFBYkE7QUFQSyxHQUFQO0FBU0QsQ0ExSU07O0dBQU1qRCxPO1VBQ01FLG9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4Y2hhbmdlLmU2ZWI2NDY0OWQ2ZDg2MmQ3MDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQgY29udHJhY3RKc29uIGZyb20gXCIuLi9jb250cmFjdHMvY29udHJhY3QuanNvblwiO1xuaW1wb3J0IGJlcDIwSnNvbiBmcm9tIFwiLi4vY29udHJhY3RzL2JlcDIwLmpzb25cIjtcbmltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIjtcbmltcG9ydCB7IGVycm9yTm90aWZ5IH0gZnJvbSBcIi4uL2xpYnMvbm90aWZ5XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWNjb3VudCB9IGZyb20gXCIuLi9zdG9yZXMvY29tbW9uLXNsaWNlXCI7XG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTO1xuY29uc3QgcmVnZXggPSAvXlxcZCsoXFwuXFxkezAsNn0pPyQvO1xuY29uc3QgQk4gPSBXZWIzLnV0aWxzLkJOO1xuXG5jb25zdCB0b051bWJlclN0cmluZyA9IChhbW91bnQsIGRlYykgPT4ge1xuICBuZXcgQk4oYW1vdW50KS5tdWwobmV3IEJOKDEwKS5wb3cobmV3IEJOKGRlYykpKS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgbGV0IHByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgICB3YWxsZXRjb25uZWN0OiB7XG4gICAgICBwYWNrYWdlOiBXYWxsZXRDb25uZWN0UHJvdmlkZXIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGluZnVyYUlkOiBcIjgwNDNiYjJjZjk5MzQ3YjFiZmFkZmIyMzNjNTMyNWMwXCIsXG4gICAgICAgIHJwYzoge1xuICAgICAgICAgIDU2OiBcImh0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnL1wiLFxuICAgICAgICAgIDk3OiBcImh0dHBzOi8vZGF0YS1zZWVkLXByZWJzYy0xLXMxLmJpbmFuY2Uub3JnOjg1NDVcIixcbiAgICAgICAgfSxcbiAgICAgICAgbmV0d29yazogXCJiaW5hbmNlXCIsXG4gICAgICAgIGNoYWluSWQ6IE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRCksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh3aW5kb3cuY29udHJhY3QpIHJldHVybjtcbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImJpbmFuY2VcIixcbiAgICAgICAgY2hhaW5JZDogTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKSxcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zLFxuICAgICAgfSk7XG4gICAgICB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpO1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbiAgICAgIGNvbnN0IGNoYWluSWQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRDaGFpbklkKCk7XG4gICAgICBpZiAoY2hhaW5JZCAhPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRCkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJQbGVhc2Ugc2VsZWN0IEJpbmFuY2UgU21hcnQgQ2hhaW5cIik7XG4gICAgICB9XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb250cmFjdEpzb24sIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICB3aW5kb3cuY29udHJhY3QgPSBjb250cmFjdDtcbiAgICAgIHdpbmRvdy5wcm92aWRlciA9IHdlYjM7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50KGFjY291bnRzWzBdKSk7XG4gICAgICByZXR1cm4gYWNjb3VudHNbMF07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xhaW1BaXJkcm9wID0gYXN5bmMgKHJlZmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuZ2V0QWlyZHJvcChyZWZlcilcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1eVNhbGVXaXRoQm5iID0gYXN5bmMgKHJlZmVyLCBhbW91bnQsIHRva2VuQWRkcmVzcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICAgIGlmICghcmVnZXgudGVzdChhbW91bnQpKSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIkludmFsaWQgaW5wdXQgYW1vdW50XCIpO1xuICAgICAgfSAvLyBpbnZhbGQgYW1vdW50XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzXG4gICAgICAgIC5idXlQdWJsaWNTYWxlV2l0aEJuYihyZWZlciwgdG9rZW5BZGRyZXNzKVxuICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgdmFsdWU6IGFtb3VudCAqIDEwICoqIDE4LFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRUb2tlbkJhbGFuY2UgPSBhc3luYyAoYWNjb3VudCwgYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgd2luZG93LnByb3ZpZGVyLmV0aC5Db250cmFjdChiZXAyMEpzb24sIGFkZHJlc3MpO1xuICAgIGNvbnN0IGJsID0gYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50KS5jYWxsKCk7XG4gICAgY29uc3QgZGVjID0gYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzLmRlY2ltYWxzKCkuY2FsbCgpO1xuICAgIHJldHVybiBOdW1iZXIoYmwudG9TdHJpbmcoKSkgLyAxMCAqKiBOdW1iZXIoZGVjLnRvU3RyaW5nKCkpO1xuICB9O1xuICBjb25zdCBnZXRCbmJCYWxhbmNlID0gYXN5bmMgKGFjY291bnQpID0+IHtcbiAgICBjb25zdCBibCA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QmFsYW5jZShhY2NvdW50KTtcbiAgICByZXR1cm4gd2luZG93LnByb3ZpZGVyLnV0aWxzLmZyb21XZWkoYmwudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcbiAgfTtcbiAgY29uc3QgYXBwcm92ZSA9IGFzeW5jIChhZGRyZXNzLCBhbW91bnQpID0+IHtcbiAgICBhd2FpdCBjb25uZWN0KCk7XG4gICAgaWYgKCFyZWdleC50ZXN0KGFtb3VudCkpIHtcbiAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIkludmFsaWQgaW5wdXQgYW1vdW50XCIpO1xuICAgIH1cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IHdpbmRvdy5wcm92aWRlci5ldGguQ29udHJhY3QoYmVwMjBKc29uLCBhZGRyZXNzKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IGF3YWl0IHRva2VuQ29udHJhY3QubWV0aG9kcy5kZWNpbWFscygpLmNhbGwoKTtcbiAgICBjb25zb2xlLmxvZyhkZWNpbWFscyk7XG4gICAgYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzXG4gICAgICAuYXBwcm92ZShcbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYW1vdW50ICogMTAgKiogTnVtYmVyKGRlY2ltYWxzKVxuICAgICAgKVxuICAgICAgLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBidXlTYWxlV2l0aFRva2VuID0gYXN5bmMgKFxuICAgIHJlZmVyLFxuICAgIGFtb3VudCxcbiAgICBidXlXaXRoQWRkcmVzcyxcbiAgICByZWNlaXZlQWRkcmVzc1xuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocmVmZXIsIGFtb3VudCwgYnV5V2l0aEFkZHJlc3MsIHJlY2VpdmVBZGRyZXNzKTtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3aW5kb3cucHJvdmlkZXIuZXRoLkNvbnRyYWN0KFxuICAgICAgICBiZXAyMEpzb24sXG4gICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICApO1xuICAgICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKCk7XG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYnV5UHVibGljU2FsZVdpdGhTdGFibGVUb2tlbihcbiAgICAgICAgICByZWZlcixcbiAgICAgICAgICBhbW91bnQgKiAxMCAqKiBOdW1iZXIoZGVjaW1hbHMpLFxuICAgICAgICAgIHJlY2VpdmVBZGRyZXNzLFxuICAgICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNsYWltQWlyZHJvcCxcbiAgICBidXlTYWxlV2l0aEJuYixcbiAgICBjb25uZWN0LFxuICAgIGJ1eVNhbGVXaXRoVG9rZW4sXG4gICAgYXBwcm92ZSxcbiAgICBnZXRUb2tlbkJhbGFuY2UsXG4gICAgZ2V0Qm5iQmFsYW5jZSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9