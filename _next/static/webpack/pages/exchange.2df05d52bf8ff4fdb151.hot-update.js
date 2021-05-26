self["webpackHotUpdate_N_E"]("pages/exchange",{

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_receiveLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/receiveLists */ "./src/config/receiveLists.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/bitmars-client/src/components/Nav/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var menus = [{
  t: "Home",
  l: "/"
}, {
  t: "Exchange",
  l: "/exchange"
}, {
  t: "Staking",
  l: "/staking"
}];

var Nav = function Nav() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleOnClick = function handleOnClick() {
    setOpen(!open);
  };

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(router);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xl py-8 flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/coins/bitmars-gold.png",
              alt: "",
              className: "w-16 h-16 rounded-full"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ml-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-4xl text-primary font-medium",
                children: "Bitmars"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-secondary text-sm text-right",
                children: "Exchange"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hidden lg:block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ml-16 flex space-x-8",
            children: [menus.map(function (val, key) {
              var className = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                "hover:text-primary font-medium": true,
                "text-primary": router.asPath == val.l,
                "text-secondary": router.asPath != val.l
              });
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: val.l,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: className,
                  children: val.t
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 21
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this);
            }), _config_receiveLists__WEBPACK_IMPORTED_MODULE_5__.default.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://bscscan.com/token/".concat(val.contractAddress[Number("97")]),
                className: "text-secondary hover:text-primary",
                target: "_blank",
                children: [val.name, " Contract"]
              }, key, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "fixed right-4 top-12 z-50",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-8 h-8 bg-primary rounded flex items-center justify-center text-white cursor-pointer",
            onClick: handleOnClick,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrMenu, {
              className: "w-6 h-6 text-white "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), open && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "fixed inset-0 z-40 bg-white bg-opacity-90 flex items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative z-30",
            children: [menus.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: val.l,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block text-center text-secondary font-medium text-2xl",
                  children: val.t
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 23
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 21
              }, _this);
            }), _config_receiveLists__WEBPACK_IMPORTED_MODULE_5__.default.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://bscscan.com/token/".concat(val.contractAddress[Number("97")]),
                className: "text-secondary hover:text-primary block text-center font-medium text-2xl",
                target: "_blank",
                children: [val.name, " Contract"]
              }, key, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Nav, "yV6DxSubyy4ZmDiTQIQFSXuuW1o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwidCIsImwiLCJOYXYiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT25DbGljayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2YWwiLCJrZXkiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwiYXNQYXRoIiwicmVjZWl2ZUxpc3RzIiwiY29udHJhY3RBZGRyZXNzIiwiTnVtYmVyIiwicHJvY2VzcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsR0FBQyxFQUFFLE1BREw7QUFFRUMsR0FBQyxFQUFFO0FBRkwsQ0FEWSxFQUtaO0FBQ0VELEdBQUMsRUFBRSxVQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBTFksRUFTWjtBQUNFRCxHQUFDLEVBQUUsU0FETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQVRZLENBQWQ7O0FBY0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNELEdBRlEsQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFD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QURGO0FBT0QsYUFSQSxDQURILEVBVUdJLDZEQUFBLENBQWlCLFVBQUNMLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlCLGtDQUNFO0FBQ0Usb0JBQUksc0NBQ0ZELEdBQUcsQ0FBQ00sZUFBSixDQUNFQyxNQUFNLENBQUNDLElBQUQsQ0FEUixDQURFLENBRE47QUFNRSx5QkFBUyxFQUFDLDBFQU5aO0FBUUUsc0JBQU0sRUFBQyxRQVJUO0FBQUEsMkJBVUdSLEdBQUcsQ0FBQ1MsSUFWUDtBQUFBLGlCQU9PUixHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFjRCxhQWZBLENBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThGRCxDQXZHRDs7R0FBTVosRztVQUtXTSxrRDs7O0tBTFhOLEc7QUF5R04sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhjaGFuZ2UuMmRmMDVkNTJiZjhmZjRmZGIxNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyQ2xvc2UsIEdyTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHJlY2VpdmVMaXN0cyBmcm9tIFwiLi4vLi4vY29uZmlnL3JlY2VpdmVMaXN0c1wiO1xuY29uc3QgbWVudXMgPSBbXG4gIHtcbiAgICB0OiBcIkhvbWVcIixcbiAgICBsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIHQ6IFwiRXhjaGFuZ2VcIixcbiAgICBsOiBcIi9leGNoYW5nZVwiLFxuICB9LFxuICB7XG4gICAgdDogXCJTdGFraW5nXCIsXG4gICAgbDogXCIvc3Rha2luZ1wiLFxuICB9LFxuXTtcbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICB9O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBweS04IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvY29pbnMvYml0bWFycy1nb2xkLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW1cIj5CaXRtYXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXNtIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIEV4Y2hhbmdlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xNiBmbGV4IHNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgICB7bWVudXMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgXCJob3Zlcjp0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1wcmltYXJ5XCI6IHJvdXRlci5hc1BhdGggPT0gdmFsLmwsXG4gICAgICAgICAgICAgICAgICBcInRleHQtc2Vjb25kYXJ5XCI6IHJvdXRlci5hc1BhdGggIT0gdmFsLmwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbC5sfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57dmFsLnR9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7cmVjZWl2ZUxpc3RzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnNjc2Nhbi5jb20vdG9rZW4vJHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwuY29udHJhY3RBZGRyZXNzW1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dmFsLm5hbWV9IENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHJpZ2h0LTQgdG9wLTEyIHotNTBcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCBiZy1wcmltYXJ5IHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHck1lbnUgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlIFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei00MCBiZy13aGl0ZSBiZy1vcGFjaXR5LTkwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0zMFwiPlxuICAgICAgICAgICAgICAgIHttZW51cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWwubH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IGZvbnQtbWVkaXVtIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsLnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtyZWNlaXZlTGlzdHMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9ic2NzY2FuLmNvbS90b2tlbi8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmNvbnRyYWN0QWRkcmVzc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtcHJpbWFyeSBibG9jayB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LTJ4bFwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWwubmFtZX0gQ29udHJhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==