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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNvbnRyYWN0LmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzcyIsInByb2Nlc3MiLCJyZWdleCIsIkJOIiwiV2ViMyIsInRvTnVtYmVyU3RyaW5nIiwiYW1vdW50IiwiZGVjIiwibXVsIiwicG93IiwidG9TdHJpbmciLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyT3B0aW9ucyIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJycGMiLCJuZXR3b3JrIiwiY2hhaW5JZCIsIk51bWJlciIsIndpbmRvdyIsImNvbnRyYWN0Iiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY2xlYXJDYWNoZWRQcm92aWRlciIsInByb3ZpZGVyIiwid2ViMyIsImV0aCIsImdldENoYWluSWQiLCJlcnJvck5vdGlmeSIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJDb250cmFjdCIsImNvbnRyYWN0SnNvbiIsInNldEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY2xhaW1BaXJkcm9wIiwicmVmZXIiLCJtZXRob2RzIiwiZ2V0QWlyZHJvcCIsInNlbmQiLCJmcm9tIiwiYnV5U2FsZVdpdGhCbmIiLCJ0b2tlbkFkZHJlc3MiLCJ0ZXN0IiwiYnV5UHVibGljU2FsZVdpdGhCbmIiLCJ2YWx1ZSIsImdldFRva2VuQmFsYW5jZSIsImFjY291bnQiLCJhZGRyZXNzIiwidG9rZW5Db250cmFjdCIsImJlcDIwSnNvbiIsImJhbGFuY2VPZiIsImNhbGwiLCJibCIsImRlY2ltYWxzIiwiZ2V0Qm5iQmFsYW5jZSIsImdldEJhbGFuY2UiLCJ1dGlscyIsImZyb21XZWkiLCJhcHByb3ZlIiwiYnV5U2FsZVdpdGhUb2tlbiIsImJ1eVdpdGhBZGRyZXNzIiwicmVjZWl2ZUFkZHJlc3MiLCJidXlQdWJsaWNTYWxlV2l0aFN0YWJsZVRva2VuIl0s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QUdMbkMsV0FBTyxFQUFQQSxPQUhLO0FBSUxzRCxvQkFBZ0IsRUFBaEJBLGdCQUpLO0FBS0xELFdBQU8sRUFBUEEsT0FMSztBQU1MYixtQkFBZSxFQUFmQSxlQU5LO0FBT0xTLGlCQUFhLEVBQWJBO0FBUEssR0FBUDtBQVNELENBMUlNOztHQUFNakQsTztVQUNNRSxvRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGNoYW5nZS45NmYwZTlkY2M1YjkzOTYzZTdhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IGNvbnRyYWN0SnNvbiBmcm9tIFwiLi4vY29udHJhY3RzL2NvbnRyYWN0Lmpzb25cIjtcbmltcG9ydCBiZXAyMEpzb24gZnJvbSBcIi4uL2NvbnRyYWN0cy9iZXAyMC5qc29uXCI7XG5pbXBvcnQgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIGZyb20gXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBlcnJvck5vdGlmeSB9IGZyb20gXCIuLi9saWJzL25vdGlmeVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEFjY291bnQgfSBmcm9tIFwiLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUztcbmNvbnN0IHJlZ2V4ID0gL15cXGQrKFxcLlxcZHswLDZ9KT8kLztcbmNvbnN0IEJOID0gV2ViMy51dGlscy5CTjtcblxuY29uc3QgdG9OdW1iZXJTdHJpbmcgPSAoYW1vdW50LCBkZWMpID0+IHtcbiAgcmV0dXJuIG5ldyBCTihhbW91bnQpLm11bChuZXcgQk4oMTApLnBvdyhuZXcgQk4oZGVjKSkpLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY29ubmVjdCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBsZXQgcHJvdmlkZXJPcHRpb25zID0ge1xuICAgIHdhbGxldGNvbm5lY3Q6IHtcbiAgICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlcixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaW5mdXJhSWQ6IFwiODA0M2JiMmNmOTkzNDdiMWJmYWRmYjIzM2M1MzI1YzBcIixcbiAgICAgICAgcnBjOiB7XG4gICAgICAgICAgNTY6IFwiaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvXCIsXG4gICAgICAgICAgOTc6IFwiaHR0cHM6Ly9kYXRhLXNlZWQtcHJlYnNjLTEtczEuYmluYW5jZS5vcmc6ODU0NVwiLFxuICAgICAgICB9LFxuICAgICAgICBuZXR3b3JrOiBcImJpbmFuY2VcIixcbiAgICAgICAgY2hhaW5JZDogTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHdpbmRvdy5jb250cmFjdCkgcmV0dXJuO1xuICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwiYmluYW5jZVwiLFxuICAgICAgICBjaGFpbklkOiBOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpLFxuICAgICAgICBwcm92aWRlck9wdGlvbnMsXG4gICAgICB9KTtcbiAgICAgIHdlYjNNb2RhbC5jbGVhckNhY2hlZFByb3ZpZGVyKCk7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuICAgICAgY29uc3QgY2hhaW5JZCA9IGF3YWl0IHdlYjMuZXRoLmdldENoYWluSWQoKTtcbiAgICAgIGlmIChjaGFpbklkICE9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIlBsZWFzZSBzZWxlY3QgQmluYW5jZSBTbWFydCBDaGFpblwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNvbnRyYWN0SnNvbiwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgIHdpbmRvdy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgICAgd2luZG93LnByb3ZpZGVyID0gd2ViMztcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnQoYWNjb3VudHNbMF0pKTtcbiAgICAgIHJldHVybiBhY2NvdW50c1swXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGFpbUFpcmRyb3AgPSBhc3luYyAocmVmZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzXG4gICAgICAgIC5nZXRBaXJkcm9wKHJlZmVyKVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnV5U2FsZVdpdGhCbmIgPSBhc3luYyAocmVmZXIsIGFtb3VudCwgdG9rZW5BZGRyZXNzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgICAgaWYgKCFyZWdleC50ZXN0KGFtb3VudCkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiSW52YWxpZCBpbnB1dCBhbW91bnRcIik7XG4gICAgICB9IC8vIGludmFsZCBhbW91bnRcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgICAgLmJ1eVB1YmxpY1NhbGVXaXRoQm5iKHJlZmVyLCB0b2tlbkFkZHJlc3MpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICB2YWx1ZTogYW1vdW50ICogMTAgKiogMTgsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFRva2VuQmFsYW5jZSA9IGFzeW5jIChhY2NvdW50LCBhZGRyZXNzKSA9PiB7XG4gICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3aW5kb3cucHJvdmlkZXIuZXRoLkNvbnRyYWN0KGJlcDIwSnNvbiwgYWRkcmVzcyk7XG4gICAgY29uc3QgYmwgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKGFjY291bnQpLmNhbGwoKTtcbiAgICBjb25zdCBkZWMgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKCk7XG4gICAgcmV0dXJuIE51bWJlcihibC50b1N0cmluZygpKSAvIDEwICoqIE51bWJlcihkZWMudG9TdHJpbmcoKSk7XG4gIH07XG4gIGNvbnN0IGdldEJuYkJhbGFuY2UgPSBhc3luYyAoYWNjb3VudCkgPT4ge1xuICAgIGNvbnN0IGJsID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRCYWxhbmNlKGFjY291bnQpO1xuICAgIHJldHVybiB3aW5kb3cucHJvdmlkZXIudXRpbHMuZnJvbVdlaShibC50b1N0cmluZygpLCBcImV0aGVyXCIpO1xuICB9O1xuICBjb25zdCBhcHByb3ZlID0gYXN5bmMgKGFkZHJlc3MsIGFtb3VudCkgPT4ge1xuICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICBpZiAoIXJlZ2V4LnRlc3QoYW1vdW50KSkge1xuICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiSW52YWxpZCBpbnB1dCBhbW91bnRcIik7XG4gICAgfVxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgd2luZG93LnByb3ZpZGVyLmV0aC5Db250cmFjdChiZXAyMEpzb24sIGFkZHJlc3MpO1xuICAgIGNvbnN0IGRlY2ltYWxzID0gYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzLmRlY2ltYWxzKCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKGRlY2ltYWxzLCB0b051bWJlclN0cmluZyhhbW91bnQsIGRlY2ltYWxzKSk7XG4gICAgYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzXG4gICAgICAuYXBwcm92ZShcbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYW1vdW50ICogMTAgKiogTnVtYmVyKGRlY2ltYWxzKVxuICAgICAgKVxuICAgICAgLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBidXlTYWxlV2l0aFRva2VuID0gYXN5bmMgKFxuICAgIHJlZmVyLFxuICAgIGFtb3VudCxcbiAgICBidXlXaXRoQWRkcmVzcyxcbiAgICByZWNlaXZlQWRkcmVzc1xuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocmVmZXIsIGFtb3VudCwgYnV5V2l0aEFkZHJlc3MsIHJlY2VpdmVBZGRyZXNzKTtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3aW5kb3cucHJvdmlkZXIuZXRoLkNvbnRyYWN0KFxuICAgICAgICBiZXAyMEpzb24sXG4gICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICApO1xuICAgICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKCk7XG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuYnV5UHVibGljU2FsZVdpdGhTdGFibGVUb2tlbihcbiAgICAgICAgICByZWZlcixcbiAgICAgICAgICBhbW91bnQgKiAxMCAqKiBOdW1iZXIoZGVjaW1hbHMpLFxuICAgICAgICAgIHJlY2VpdmVBZGRyZXNzLFxuICAgICAgICAgIGJ1eVdpdGhBZGRyZXNzXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNsYWltQWlyZHJvcCxcbiAgICBidXlTYWxlV2l0aEJuYixcbiAgICBjb25uZWN0LFxuICAgIGJ1eVNhbGVXaXRoVG9rZW4sXG4gICAgYXBwcm92ZSxcbiAgICBnZXRUb2tlbkJhbGFuY2UsXG4gICAgZ2V0Qm5iQmFsYW5jZSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9