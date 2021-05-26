self["webpackHotUpdate_N_E"]("pages/exchange",{

/***/ "./src/components/Exchange/index.js":
/*!******************************************!*\
  !*** ./src/components/Exchange/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _config_buylist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/buylist */ "./src/config/buylist.js");
/* harmony import */ var _config_receiveLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/receiveLists */ "./src/config/receiveLists.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Select */ "./src/components/Select/index.js");
/* harmony import */ var _libs_format_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/format-number */ "./src/libs/format-number.js");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useContract */ "./src/hooks/useContract.js");
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/notify */ "./src/libs/notify.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../stores/common-slice */ "./src/stores/common-slice.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Countdown */ "./src/components/Countdown/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/bitmars-client/src/components/Exchange/index.js",
    _this = undefined,
    _s = $RefreshSig$();


















var Exchange = function Exchange() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isReceiveOpen = _useState2[0],
      setIsReceiveOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_config_buylist__WEBPACK_IMPORTED_MODULE_5__.default[0]),
      buyMethod = _useState3[0],
      setBuyMethod = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      successApprove = _useState4[0],
      setSuccessApprove = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_config_receiveLists__WEBPACK_IMPORTED_MODULE_6__.default[0]),
      receiveMethod = _useState5[0],
      setReceiveMethod = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_config_buylist__WEBPACK_IMPORTED_MODULE_5__.default[0].minBuy || 0.01),
      buyValue = _useState6[0],
      setBuyValue = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      receiveValue = _useState7[0],
      setReceiveValue = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_10__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(_stores_common_slice__WEBPACK_IMPORTED_MODULE_14__.addressSelector);
  var balance = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(_stores_common_slice__WEBPACK_IMPORTED_MODULE_14__.balanceSelector);
  var web3 = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_9__.connect)();

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_16__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();

  var handleOpenMethod = function handleOpenMethod() {
    setIsOpen(true);
  };

  var handleBuy = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(buyValue < buyMethod.minBuy)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Min buy: ".concat(buyMethod.minBuy, " ").concat(buyMethod.sym)));

            case 2:
              setLoading(true);
              _context.next = 5;
              return web3.buySaleWithBnb(refer, buyValue, receiveMethod.contractAddress[Number("97")]);

            case 5:
              setLoading(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleBuy() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleApprove = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading(true);

              if (!(buyValue < buyMethod.minBuy)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Min buy: ".concat(buyMethod.minBuy, " ").concat(buyMethod.sym)));

            case 4:
              _context2.next = 6;
              return web3.approve(buyMethod.contractAddress[Number("97")], buyValue);

            case 6:
              setSuccessApprove(true);
              setLoading(false);
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              setLoading(false);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function handleApprove() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchBalance = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var bl, _bl;

      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (web3__WEBPACK_IMPORTED_MODULE_15___default().utils.isAddress(account)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              if (!buyMethod.contractAddress) {
                _context3.next = 9;
                break;
              }

              _context3.next = 5;
              return web3.getTokenBalance(account, buyMethod.contractAddress[Number("97")]);

            case 5:
              bl = _context3.sent;
              dispatch((0,_stores_common_slice__WEBPACK_IMPORTED_MODULE_14__.setBalance)(bl));
              _context3.next = 13;
              break;

            case 9:
              _context3.next = 11;
              return web3.getBnbBalance(account);

            case 11:
              _bl = _context3.sent;
              dispatch((0,_stores_common_slice__WEBPACK_IMPORTED_MODULE_14__.setBalance)(_bl));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchBalance() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleBuySaleWithToken = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(buyValue < buyMethod.minBuy)) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Min buy: ".concat(buyMethod.minBuy, " ").concat(buyMethod.sym)));

            case 2:
              _context4.next = 4;
              return web3.buySaleWithToken(refer, buyValue, buyMethod.contractAddress[Number("97")], receiveMethod.contractAddress[Number("97")]);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleBuySaleWithToken() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleClaim = /*#__PURE__*/function () {
    var _ref5 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setLoading(true);
              _context5.next = 3;
              return web3.claimAirdrop(refer);

            case 3:
              setLoading(false);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleClaim() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleChangeValue = function handleChangeValue(value) {
    setBuyValue(value);

    if (!buyMethod.contractAddress) {
      setReceiveValue(value * receiveMethod.bnbPrice);
    } else {
      setReceiveValue(value * receiveMethod.stablePrice);
    }
  };

  var handleConnect = /*#__PURE__*/function () {
    var _ref6 = (0,_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
      return _home_kaliz_dev_tantranlee_bitmars_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return web3.connect();

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleConnect() {
      return _ref6.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchBalance();
  }, [account, buyMethod]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBuyValue(buyMethod.minBuy);
  }, [buyMethod]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (!buyMethod.contractAddress) {
      setReceiveValue(buyMethod.minBuy * receiveMethod.bnbPrice);
    } else {
      setReceiveValue(buyMethod.minBuy * receiveMethod.stablePrice);
    }
  }, [buyMethod, receiveMethod]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    style: {
      minHeight: "calc(100vh - 128px)"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4 pt-8 pb-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-4xl font-bold text-center text-secondary mb-4",
        children: "Bitmars Public Sale"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_17__.default, {
          time: Number("1627193894385")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-full max-w-3xl px-4 py-8 rounded-lg border border-gray-200 bg-white mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-8 flex flex-wrap -mx-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full lg:w-1/2 px-4 mb-4 lg:mb-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-between text-lg mb-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "You Pay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "Balance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "border rounded-md p-2 flex shadow-md relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center cursor-pointer",
                onClick: handleOpenMethod,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/coins/".concat(buyMethod.img, ".png"),
                  className: "w-8 h-8 rounded-fulf"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "ml-2 font-bold",
                  children: buyMethod.sym
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_18__.IoMdArrowDropdown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex-1 text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-sm",
                  children: balance ? (0,_libs_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(balance) : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "w-full p-2 focus:outline-none text-right font-medium text-xl",
                  value: buyValue,
                  onChange: function onChange(e) {
                    return handleChangeValue(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_7__.default, {
                isOpen: isOpen,
                data: _config_buylist__WEBPACK_IMPORTED_MODULE_5__.default,
                onChange: function onChange(val) {
                  return setBuyMethod(val);
                },
                onClose: function onClose() {
                  return setIsOpen(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full lg:w-1/2 px-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-lg mb-2",
              children: "You Receive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "border rounded-md p-2 flex shadow-md relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center cursor-pointer",
                onClick: function onClick() {
                  return setIsReceiveOpen(true);
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/coins/".concat(receiveMethod.img, ".png"),
                  className: "w-8 h-8 rounded-full"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "ml-2 font-bold",
                  children: receiveMethod.sym
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_18__.IoMdArrowDropdown, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex-1 text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "",
                  children: "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "w-full p-2 focus:outline-none text-right bg-white cursor-not-allowed font-medium text-xl",
                  value: (0,_libs_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(receiveValue),
                  disabled: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_7__.default, {
                isOpen: isReceiveOpen,
                data: _config_receiveLists__WEBPACK_IMPORTED_MODULE_6__.default,
                onChange: function onChange(val) {
                  return setReceiveMethod(val);
                },
                onClose: function onClose() {
                  return setIsReceiveOpen(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center mb-4",
          children: buyMethod.contractAddress && !successApprove ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            text: "Approve",
            onClick: handleApprove,
            loading: loading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, _this) : buyMethod.contractAddress ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            onClick: handleBuySaleWithToken,
            text: "Buy",
            loading: loading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            onClick: handleBuy,
            text: "Buy",
            loading: loading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center mb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            onClick: handleClaim,
            text: "Claim Airdrop",
            loading: loading,
            none: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "break-all max-w-full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-2xl text-center mb-2",
            children: "Referral Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "p-2 border rounded mb-4 cursor-pointer break-all",
            onClick: function onClick() {
              return cp("".concat("http://ahaha.com", "?address=").concat(account));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-xl inline-block break-all",
              children: "".concat("http://ahaha.com", "?address=").concat(account)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_19__.RiFileCopyFill, {
              className: "inline-block ml-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 15
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "p-2 border rounded mb-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-xl invisible",
              children: "0x0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
            text: "Connect Wallet",
            onClick: handleConnect
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, _this);
};

_s(Exchange, "TvY+xpleVZuQwQqRdE/cbgjQ8bo=", false, function () {
  return [_hooks_useRefer__WEBPACK_IMPORTED_MODULE_10__.default, react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector, _hooks_useCopy__WEBPACK_IMPORTED_MODULE_16__.default, react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch];
});

_c = Exchange;
/* harmony default export */ __webpack_exports__["default"] = (Exchange);

var _c;

$RefreshReg$(_c, "Exchange");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjaGFuZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiRXhjaGFuZ2UiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlzUmVjZWl2ZU9wZW4iLCJzZXRJc1JlY2VpdmVPcGVuIiwiYnV5TGlzdHMiLCJidXlNZXRob2QiLCJzZXRCdXlNZXRob2QiLCJzdWNjZXNzQXBwcm92ZSIsInNldFN1Y2Nlc3NBcHByb3ZlIiwicmVjZWl2ZUxpc3RzIiwicmVjZWl2ZU1ldGhvZCIsInNldFJlY2VpdmVNZXRob2QiLCJidXlWYWx1ZSIsInNldEJ1eVZhbHVlIiwicmVjZWl2ZVZhbHVlIiwic2V0UmVjZWl2ZVZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VSZWZlciIsInJlZmVyIiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWRkcmVzc1NlbGVjdG9yIiwiYmFsYW5jZSIsImJhbGFuY2VTZWxlY3RvciIsIndlYjMiLCJjb25uZWN0IiwidXNlQ29weSIsImNwIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZU9wZW5NZXRob2QiLCJoYW5kbGVCdXkiLCJtaW5CdXkiLCJlcnJvck5vdGlmeSIsInN5bSIsImJ1eVNhbGVXaXRoQm5iIiwiY29udHJhY3RBZGRyZXNzIiwiTnVtYmVyIiwicHJvY2VzcyIsImhhbmRsZUFwcHJvdmUiLCJhcHByb3ZlIiwiY29uc29sZSIsImxvZyIsImZldGNoQmFsYW5jZSIsIldlYjMiLCJnZXRUb2tlbkJhbGFuY2UiLCJibCIsInNldEJhbGFuY2UiLCJnZXRCbmJCYWxhbmNlIiwiaGFuZGxlQnV5U2FsZVdpdGhUb2tlbiIsImJ1eVNhbGVXaXRoVG9rZW4iLCJoYW5kbGVDbGFpbSIsImNsYWltQWlyZHJvcCIsImhhbmRsZUNoYW5nZVZhbHVlIiwidmFsdWUiLCJibmJQcmljZSIsInN0YWJsZVByaWNlIiwiaGFuZGxlQ29ubmVjdCIsInVzZUVmZmVjdCIs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QUFBLG1CQWJKLGVBaUJFLDhEQUFDLDZDQUFEO0FBQVEsZ0JBQUksRUFBQyxnQkFBYjtBQUE4QixtQkFBTyxFQUFFc0M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErSEQsQ0FuT0Q7O0dBQU01RCxRO1VBU1lvQixxRCxFQUNBRyxxRCxFQUNBQSxxRCxFQUVITSxvRCxFQUNJRyxxRDs7O0tBZGJoQyxRO0FBcU9OLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4Y2hhbmdlLjY5YjA3YmJlMjA5NDMxYjkxOGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJb01kQXJyb3dEcm9wZG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IGJ1eUxpc3RzIGZyb20gXCIuLi8uLi9jb25maWcvYnV5bGlzdFwiO1xuaW1wb3J0IHJlY2VpdmVMaXN0cyBmcm9tIFwiLi4vLi4vY29uZmlnL3JlY2VpdmVMaXN0c1wiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vU2VsZWN0XCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vbGlicy9mb3JtYXQtbnVtYmVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbnRyYWN0XCI7XG5pbXBvcnQgdXNlUmVmZXIgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVJlZmVyXCI7XG5pbXBvcnQgeyBlcnJvck5vdGlmeSB9IGZyb20gXCIuLi8uLi9saWJzL25vdGlmeVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIGFkZHJlc3NTZWxlY3RvcixcbiAgYmFsYW5jZVNlbGVjdG9yLFxuICBzZXRCYWxhbmNlLFxufSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCB1c2VDb3B5IGZyb20gXCIuLi8uLi9ob29rcy91c2VDb3B5XCI7XG5pbXBvcnQgeyBSaUZpbGVDb3B5RmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IENvdW50IGZyb20gXCIuLi9Db3VudGRvd25cIjtcblxuY29uc3QgRXhjaGFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JlY2VpdmVPcGVuLCBzZXRJc1JlY2VpdmVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2J1eU1ldGhvZCwgc2V0QnV5TWV0aG9kXSA9IHVzZVN0YXRlKGJ1eUxpc3RzWzBdKTtcbiAgY29uc3QgW3N1Y2Nlc3NBcHByb3ZlLCBzZXRTdWNjZXNzQXBwcm92ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWNlaXZlTWV0aG9kLCBzZXRSZWNlaXZlTWV0aG9kXSA9IHVzZVN0YXRlKHJlY2VpdmVMaXN0c1swXSk7XG4gIGNvbnN0IFtidXlWYWx1ZSwgc2V0QnV5VmFsdWVdID0gdXNlU3RhdGUoYnV5TGlzdHNbMF0ubWluQnV5IHx8IDAuMDEpO1xuICBjb25zdCBbcmVjZWl2ZVZhbHVlLCBzZXRSZWNlaXZlVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlZmVyXSA9IHVzZVJlZmVyKCk7XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhZGRyZXNzU2VsZWN0b3IpO1xuICBjb25zdCBiYWxhbmNlID0gdXNlU2VsZWN0b3IoYmFsYW5jZVNlbGVjdG9yKTtcbiAgY29uc3Qgd2ViMyA9IGNvbm5lY3QoKTtcbiAgY29uc3QgW2NwXSA9IHVzZUNvcHkoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoYW5kbGVPcGVuTWV0aG9kID0gKCkgPT4ge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQnV5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChidXlWYWx1ZSA8IGJ1eU1ldGhvZC5taW5CdXkpIHtcbiAgICAgIHJldHVybiBlcnJvck5vdGlmeShgTWluIGJ1eTogJHtidXlNZXRob2QubWluQnV5fSAke2J1eU1ldGhvZC5zeW19YCk7XG4gICAgfVxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgYXdhaXQgd2ViMy5idXlTYWxlV2l0aEJuYihcbiAgICAgIHJlZmVyLFxuICAgICAgYnV5VmFsdWUsXG4gICAgICByZWNlaXZlTWV0aG9kLmNvbnRyYWN0QWRkcmVzc1tOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpXVxuICAgICk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBpZiAoYnV5VmFsdWUgPCBidXlNZXRob2QubWluQnV5KSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShgTWluIGJ1eTogJHtidXlNZXRob2QubWluQnV5fSAke2J1eU1ldGhvZC5zeW19YCk7XG4gICAgICB9XG4gICAgICBhd2FpdCB3ZWIzLmFwcHJvdmUoXG4gICAgICAgIGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3NbTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKV0sXG4gICAgICAgIGJ1eVZhbHVlXG4gICAgICApO1xuICAgICAgc2V0U3VjY2Vzc0FwcHJvdmUodHJ1ZSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZldGNoQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIVdlYjMudXRpbHMuaXNBZGRyZXNzKGFjY291bnQpKSByZXR1cm47XG4gICAgaWYgKGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3MpIHtcbiAgICAgIGNvbnN0IGJsID0gYXdhaXQgd2ViMy5nZXRUb2tlbkJhbGFuY2UoXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3NbTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKV1cbiAgICAgICk7XG4gICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKGJsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJsID0gYXdhaXQgd2ViMy5nZXRCbmJCYWxhbmNlKGFjY291bnQpO1xuICAgICAgZGlzcGF0Y2goc2V0QmFsYW5jZShibCkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQnV5U2FsZVdpdGhUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoYnV5VmFsdWUgPCBidXlNZXRob2QubWluQnV5KSB7XG4gICAgICByZXR1cm4gZXJyb3JOb3RpZnkoYE1pbiBidXk6ICR7YnV5TWV0aG9kLm1pbkJ1eX0gJHtidXlNZXRob2Quc3ltfWApO1xuICAgIH1cbiAgICBhd2FpdCB3ZWIzLmJ1eVNhbGVXaXRoVG9rZW4oXG4gICAgICByZWZlcixcbiAgICAgIGJ1eVZhbHVlLFxuICAgICAgYnV5TWV0aG9kLmNvbnRyYWN0QWRkcmVzc1tOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpXSxcbiAgICAgIHJlY2VpdmVNZXRob2QuY29udHJhY3RBZGRyZXNzW051bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRCldXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xhaW0gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBhd2FpdCB3ZWIzLmNsYWltQWlyZHJvcChyZWZlcik7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0QnV5VmFsdWUodmFsdWUpO1xuICAgIGlmICghYnV5TWV0aG9kLmNvbnRyYWN0QWRkcmVzcykge1xuICAgICAgc2V0UmVjZWl2ZVZhbHVlKHZhbHVlICogcmVjZWl2ZU1ldGhvZC5ibmJQcmljZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFJlY2VpdmVWYWx1ZSh2YWx1ZSAqIHJlY2VpdmVNZXRob2Quc3RhYmxlUHJpY2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmNvbm5lY3QoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEJhbGFuY2UoKTtcbiAgfSwgW2FjY291bnQsIGJ1eU1ldGhvZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJ1eVZhbHVlKGJ1eU1ldGhvZC5taW5CdXkpO1xuICB9LCBbYnV5TWV0aG9kXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFidXlNZXRob2QuY29udHJhY3RBZGRyZXNzKSB7XG4gICAgICBzZXRSZWNlaXZlVmFsdWUoYnV5TWV0aG9kLm1pbkJ1eSAqIHJlY2VpdmVNZXRob2QuYm5iUHJpY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRSZWNlaXZlVmFsdWUoYnV5TWV0aG9kLm1pbkJ1eSAqIHJlY2VpdmVNZXRob2Quc3RhYmxlUHJpY2UpO1xuICAgIH1cbiAgfSwgW2J1eU1ldGhvZCwgcmVjZWl2ZU1ldGhvZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDBcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDEyOHB4KVwiIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB0LTggcGItMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgbWItNFwiPlxuICAgICAgICAgIEJpdG1hcnMgUHVibGljIFNhbGVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgIDxDb3VudCB0aW1lPXtOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09VTlRET1dOX1RJTUUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctM3hsIHB4LTQgcHktOCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IGZsZXgtd3JhcCAtbXgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNCBtYi00IGxnOm1iLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LWxnIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPllvdSBQYXk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPkJhbGFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbWQgcC0yIGZsZXggc2hhZG93LW1kIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk1ldGhvZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9jb2lucy8ke2J1eU1ldGhvZC5pbWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZm9udC1ib2xkXCI+e2J1eU1ldGhvZC5zeW19PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8SW9NZEFycm93RHJvcGRvd24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAge2JhbGFuY2UgPyBmb3JtYXROdW1iZXIoYmFsYW5jZSkgOiBcIi0tXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtcmlnaHQgZm9udC1tZWRpdW0gdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidXlWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICAgICAgZGF0YT17YnV5TGlzdHN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0QnV5TWV0aG9kKHZhbCl9XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBweC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi0yXCI+WW91IFJlY2VpdmU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1tZCBwLTIgZmxleCBzaGFkb3ctbWQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1JlY2VpdmVPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2NvaW5zLyR7cmVjZWl2ZU1ldGhvZC5pbWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZm9udC1ib2xkXCI+e3JlY2VpdmVNZXRob2Quc3ltfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPElvTWRBcnJvd0Ryb3Bkb3duIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj4tLTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1yaWdodCBiZy13aGl0ZSBjdXJzb3Itbm90LWFsbG93ZWQgZm9udC1tZWRpdW0gdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXIocmVjZWl2ZVZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc1JlY2VpdmVPcGVufVxuICAgICAgICAgICAgICAgICAgZGF0YT17cmVjZWl2ZUxpc3RzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldFJlY2VpdmVNZXRob2QodmFsKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzUmVjZWl2ZU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICB7YnV5TWV0aG9kLmNvbnRyYWN0QWRkcmVzcyAmJiAhc3VjY2Vzc0FwcHJvdmUgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiQXBwcm92ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQXBwcm92ZX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3MgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXlTYWxlV2l0aFRva2VufVxuICAgICAgICAgICAgICAgIHRleHQ9XCJCdXlcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eX0gdGV4dD1cIkJ1eVwiIGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFpbX1cbiAgICAgICAgICAgICAgdGV4dD1cIkNsYWltIEFpcmRyb3BcIlxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBub25lXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWstYWxsIG1heC13LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgbWItMlwiPlJlZmVycmFsIExpbms8L2Rpdj5cbiAgICAgICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTQgY3Vyc29yLXBvaW50ZXIgYnJlYWstYWxsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgY3AoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9P2FkZHJlc3M9JHthY2NvdW50fWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGlubGluZS1ibG9jayBicmVhay1hbGxcIj57YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9P2FkZHJlc3M9JHthY2NvdW50fWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPFJpRmlsZUNvcHlGaWxsIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtbC0yXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGludmlzaWJsZVwiPjB4MDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDb25uZWN0IFdhbGxldFwiIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=