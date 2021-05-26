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
            children: [menus.map(function (val, key) {
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
            }), _config_receiveLists__WEBPACK_IMPORTED_MODULE_5__.default.map(function (val, key) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://bscscan.com/token/".concat(val.contractAddress[Number("97")]),
                className: "text-secondary hover:text-primary",
                target: "_blank",
                children: [val.name, " Contract"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbIm1lbnVzIiwidCIsImwiLCJOYXYiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT25DbGljayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2YWwiLCJrZXkiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwiYXNQYXRoIiwicmVjZWl2ZUxpc3RzIiwiY29udHJhY3RBZGRyZXNzIiwiTnVtYmVyIiwicHJvY2VzcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsR0FBQyxFQUFFLE1BREw7QUFFRUMsR0FBQyxFQUFFO0FBRkwsQ0FEWSxFQUtaO0FBQ0VELEdBQUMsRUFBRSxVQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBTFksRUFTWjtBQUNFRCxHQUFDLEVBQUUsU0FETDtBQUVFQyxHQUFDLEVBQUU7QUFGTCxDQVRZLENBQWQ7O0FBY0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNELEdBRlEsQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFD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QUFJLHNDQUNGRCxHQUFHLENBQUNNLGVBQUosQ0FDRUMsTUFBTSxDQUFDQyxJQUFELENBRFIsQ0FERSxDQUROO0FBTUUseUJBQVMsRUFBQyxtQ0FOWjtBQU9FLHNCQUFNLEVBQUMsUUFQVDtBQUFBLDJCQVNHUixHQUFHLENBQUNTLElBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBYUQsYUFkQSxDQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0FqR0Q7O0dBQU1wQixHO1VBS1dNLGtEOzs7S0FMWE4sRztBQW1HTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzM1ZWUwMWRkOGZkYWE2ZjYxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JDbG9zZSwgR3JNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcmVjZWl2ZUxpc3RzIGZyb20gXCIuLi8uLi9jb25maWcvcmVjZWl2ZUxpc3RzXCI7XG5jb25zdCBtZW51cyA9IFtcbiAge1xuICAgIHQ6IFwiSG9tZVwiLFxuICAgIGw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgdDogXCJFeGNoYW5nZVwiLFxuICAgIGw6IFwiL2V4Y2hhbmdlXCIsXG4gIH0sXG4gIHtcbiAgICB0OiBcIlN0YWtpbmdcIixcbiAgICBsOiBcIi9zdGFraW5nXCIsXG4gIH0sXG5dO1xuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3Blbighb3Blbik7XG4gIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHB5LTggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9jb2lucy9iaXRtYXJzLWdvbGQucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+Qml0bWFyczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtc20gdGV4dC1yaWdodFwiPkV4Y2hhbmdlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xNiBmbGV4IHNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgICB7bWVudXMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgXCJob3Zlcjp0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1wcmltYXJ5XCI6IHJvdXRlci5hc1BhdGggPT0gdmFsLmwsXG4gICAgICAgICAgICAgICAgICBcInRleHQtc2Vjb25kYXJ5XCI6IHJvdXRlci5hc1BhdGggIT0gdmFsLmwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbC5sfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57dmFsLnR9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7cmVjZWl2ZUxpc3RzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vYnNjc2Nhbi5jb20vdG9rZW4vJHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwuY29udHJhY3RBZGRyZXNzW1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGhvdmVyOnRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt2YWwubmFtZX0gQ29udHJhY3RcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcmlnaHQtNCB0b3AtMTIgei01MFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGJnLXByaW1hcnkgcm91bmRlZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyTWVudSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtd2hpdGUgXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTQwIGJnLXdoaXRlIGJnLW9wYWNpdHktOTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwXCI+XG4gICAgICAgICAgICAgICAge21lbnVzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbC5sfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW0gdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3JlY2VpdmVMaXN0cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JzY3NjYW4uY29tL3Rva2VuLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuY29udHJhY3RBZGRyZXNzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbC5uYW1lfSBDb250cmFjdFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9