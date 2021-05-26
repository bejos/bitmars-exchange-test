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
              }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwidCIsImwiLCJOYXYiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT25DbGljayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2YWwiLCJrZXkiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwiYXNQYXRoIiwicmVjZWl2ZUxpc3RzIiwiY29udHJhY3RBZGRyZXNzIiwiTnVtYmVyIiwicHJvY2VzcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsR0FBQyxFQUFFLE1BREw7QUFFRUMsR0FBQyxFQUFFO0FBRkwsQ0FEWSxFQUtaO0FBQ0VELEdBQUMsRUFBRSxVQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBTFksRUFTWjtBQUNFRCxHQUFDLEVBQUUsU0FETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQVRZLENBQWQ7O0FBY0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNELEdBRlEsQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFD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QURGO0FBT0QsYUFSQSxDQURILEVBVUdJLDZEQUFBLENBQWlCLFVBQUNMLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlCLGtDQUNFO0FBQ0Usb0JBQUksc0NBQ0ZELEdBQUcsQ0FBQ00sZUFBSixDQUNFQyxNQUFNLENBQUNDLElBQUQsQ0FEUixDQURFLENBRE47QUFNRSx5QkFBUyxFQUFDLDBFQU5aO0FBT0Usc0JBQU0sRUFBQyxRQVBUO0FBQUEsMkJBU0dSLEdBQUcsQ0FBQ1MsSUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFhRCxhQWRBLENBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZGRCxDQXRHRDs7R0FBTXBCLEc7VUFLV00sa0Q7OztLQUxYTixHO0FBd0dOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4Y2hhbmdlLmFiOTEyNDJkMjMzMGZmZTg1YjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHckNsb3NlLCBHck1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCByZWNlaXZlTGlzdHMgZnJvbSBcIi4uLy4uL2NvbmZpZy9yZWNlaXZlTGlzdHNcIjtcbmNvbnN0IG1lbnVzID0gW1xuICB7XG4gICAgdDogXCJIb21lXCIsXG4gICAgbDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICB0OiBcIkV4Y2hhbmdlXCIsXG4gICAgbDogXCIvZXhjaGFuZ2VcIixcbiAgfSxcbiAge1xuICAgIHQ6IFwiU3Rha2luZ1wiLFxuICAgIGw6IFwiL3N0YWtpbmdcIixcbiAgfSxcbl07XG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKTtcbiAgfTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgcHktOCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NvaW5zL2JpdG1hcnMtZ29sZC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+Qml0bWFyczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1zbSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICBFeGNoYW5nZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTYgZmxleCBzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAge21lbnVzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgIFwiaG92ZXI6dGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInRleHQtcHJpbWFyeVwiOiByb3V0ZXIuYXNQYXRoID09IHZhbC5sLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNlY29uZGFyeVwiOiByb3V0ZXIuYXNQYXRoICE9IHZhbC5sLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWwubH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3ZhbC50fTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAge3JlY2VpdmVMaXN0cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JzY3NjYW4uY29tL3Rva2VuLyR7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsLmNvbnRyYWN0QWRkcmVzc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3ZhbC5uYW1lfSBDb250cmFjdFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCByaWdodC00IHRvcC0xMiB6LTUwXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggYmctcHJpbWFyeSByb3VuZGVkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R3JNZW51IGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZSBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNDAgYmctd2hpdGUgYmctb3BhY2l0eS05MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzBcIj5cbiAgICAgICAgICAgICAgICB7bWVudXMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsLmx9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSBmb250LW1lZGl1bSB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7cmVjZWl2ZUxpc3RzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnNjc2Nhbi5jb20vdG9rZW4vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5jb250cmFjdEFkZHJlc3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBob3Zlcjp0ZXh0LXByaW1hcnkgYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC0yeGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsLm5hbWV9IENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=