self["webpackHotUpdate_N_E"]("pages/index",{

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/coins/bitmars-gold.png",
            alt: "",
            className: "w-16 h-16 rounded-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ml-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-4xl text-primary font-medium",
              children: "Bitmars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-secondary text-sm text-right",
              children: "Exchange"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
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
                  lineNumber: 55,
                  columnNumber: 21
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this);
            }), _config_receiveLists__WEBPACK_IMPORTED_MODULE_5__.default.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://bscscan.com/token/".concat(val.contractAddress[Number("97")]),
                className: "text-secondary hover:text-primary",
                target: "_blank",
                children: [val.name, " Contract"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
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
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), open && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "fixed inset-0 z-40 bg-white bg-opacity-90 flex items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative z-30",
            children: menus.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: val.l,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block text-center text-secondary font-medium text-2xl",
                  children: val.t
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 23
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwidCIsImwiLCJOYXYiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT25DbGljayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2YWwiLCJrZXkiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwiYXNQYXRoIiwicmVjZWl2ZUxpc3RzIiwiY29udHJhY3RBZGRyZXNzIiwiTnVtYmVyIiwicHJvY2VzcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsR0FBQyxFQUFFLE1BREw7QUFFRUMsR0FBQyxFQUFFO0FBRkwsQ0FEWSxFQUtaO0FBQ0VELEdBQUMsRUFBRSxVQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBTFksRUFTWjtBQUNFRCxHQUFDLEVBQUUsU0FETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQVRZLENBQWQ7O0FBY0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNELEdBRlEsQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFD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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlFRCxDQWxGRDs7R0FBTVosRztVQUtXTSxrRDs7O0tBTFhOLEc7QUFvRk4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmJmNjBiNDJkN2QwYzVmYjUxZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyQ2xvc2UsIEdyTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHJlY2VpdmVMaXN0cyBmcm9tIFwiLi4vLi4vY29uZmlnL3JlY2VpdmVMaXN0c1wiO1xuY29uc3QgbWVudXMgPSBbXG4gIHtcbiAgICB0OiBcIkhvbWVcIixcbiAgICBsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIHQ6IFwiRXhjaGFuZ2VcIixcbiAgICBsOiBcIi9leGNoYW5nZVwiLFxuICB9LFxuICB7XG4gICAgdDogXCJTdGFraW5nXCIsXG4gICAgbDogXCIvc3Rha2luZ1wiLFxuICB9LFxuXTtcbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICB9O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBweS04IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvY29pbnMvYml0bWFycy1nb2xkLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtcHJpbWFyeSBmb250LW1lZGl1bVwiPkJpdG1hcnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXNtIHRleHQtcmlnaHRcIj5FeGNoYW5nZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTYgZmxleCBzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAge21lbnVzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgIFwiaG92ZXI6dGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInRleHQtcHJpbWFyeVwiOiByb3V0ZXIuYXNQYXRoID09IHZhbC5sLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNlY29uZGFyeVwiOiByb3V0ZXIuYXNQYXRoICE9IHZhbC5sLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWwubH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3ZhbC50fTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAge3JlY2VpdmVMaXN0cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JzY3NjYW4uY29tL3Rva2VuLyR7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsLmNvbnRyYWN0QWRkcmVzc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dmFsLm5hbWV9IENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHJpZ2h0LTQgdG9wLTEyIHotNTBcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCBiZy1wcmltYXJ5IHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHck1lbnUgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlIFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei00MCBiZy13aGl0ZSBiZy1vcGFjaXR5LTkwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0zMFwiPlxuICAgICAgICAgICAgICAgIHttZW51cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWwubH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IGZvbnQtbWVkaXVtIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsLnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9