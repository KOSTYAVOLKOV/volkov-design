"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project-details-zuid",{

/***/ "./src/components/imagegallery/ImageGallery.js":
/*!*****************************************************!*\
  !*** ./src/components/imagegallery/ImageGallery.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.modern.mjs\");\n/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-gesture */ \"./node_modules/react-use-gesture/dist/reactusegesture.esm.js\");\n/* harmony import */ var _ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageGallery.module.css */ \"./src/components/imagegallery/ImageGallery.module.css\");\n/* harmony import */ var _ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// src/components/imagegallery/ImageGallery.js\n\n\n\n // Импорт CSS модулей\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar ImageGallery = function(param1) {\n    var images = param1.images;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), zoom = ref1[0], setZoom = ref1[1];\n    var ref2 = _slicedToArray((0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)(function() {\n        return {\n            x: 0\n        };\n    }), 2), x = ref2[0].x, set = ref2[1];\n    var bind = (0,react_use_gesture__WEBPACK_IMPORTED_MODULE_3__.useGesture)({\n        onDrag: function(param) {\n            var down = param.down, _movement = _slicedToArray(param.movement, 1), mx = _movement[0], _direction = _slicedToArray(param.direction, 1), xDir = _direction[0], distance = param.distance, cancel = param.cancel;\n            if (down && distance > window.innerWidth / 2) {\n                cancel();\n                setIndex(function(state) {\n                    return (state + (xDir > 0 ? -1 : 1) + images.length) % images.length;\n                });\n            }\n            set({\n                x: down ? mx : 0\n            });\n        }\n    });\n    var toggleZoom = function() {\n        return setZoom(!zoom);\n    };\n    // Проверка наличия изображений\n    if (!images || images.length === 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n                lineNumber: 27,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"No images available\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().galleryContainer),\n        __source: {\n            fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, _objectSpread({\n            }, bind(), {\n                style: {\n                    x: x\n                },\n                className: \"\".concat((_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContainer), \" \").concat(zoom ? (_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContainerZoom) : ''),\n                onClick: toggleZoom,\n                __source: {\n                    fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: images[index],\n                    alt: \"Image \".concat(index + 1),\n                    __source: {\n                        fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            })),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"\".concat((_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().nextButton)),\n                onClick: function() {\n                    return setIndex((index + 1) % images.length);\n                },\n                __source: {\n                    fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Next\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"\".concat((_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_ImageGallery_module_css__WEBPACK_IMPORTED_MODULE_4___default().prevButton)),\n                onClick: function() {\n                    return setIndex((index - 1 + images.length) % images.length);\n                },\n                __source: {\n                    fileName: \"/Users/volkov/Documents/volkov-design-site/src/components/imagegallery/ImageGallery.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Prev\"\n            })\n        ]\n    }));\n};\n_s1(ImageGallery, \"QWR2fr6e2KUiBKBdb40E9JYaVv0=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_use_gesture__WEBPACK_IMPORTED_MODULE_3__.useGesture\n    ];\n});\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\nvar _c;\n$RefreshReg$(_c, \"ImageGallery\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbWFnZWdhbGxlcnkvSW1hZ2VHYWxsZXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBOEM7QUFDUDtBQUNXO0FBQ0o7QUFDRSxDQUFxQixFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsR0FBUixDQUFDTSxZQUFZLEdBQUcsUUFBUSxTQUFRLENBQUM7UUFBZEMsTUFBTSxVQUFOQSxNQUFNOztJQUM1QixHQUFLLENBQXFCTixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCUSxRQUFRLEdBQUlSLEdBQVc7SUFDckMsR0FBSyxDQUFtQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0JTLElBQUksR0FBYVQsSUFBZSxLQUExQlUsT0FBTyxHQUFJVixJQUFlO0lBRXZDLEdBQUssQ0FBZ0JDLElBQTJCLGtCQUEzQkEsdURBQVMsQ0FBQyxRQUFRO1FBQUYsTUFBTSxDQUFMLENBQUM7WUFBQ1UsQ0FBQyxFQUFFLENBQUM7UUFBQyxDQUFDO1lBQXJDQSxDQUFDLEdBQVdWLElBQTJCLElBQXZDVSxDQUFDLEVBQUlDLEdBQUcsR0FBSVgsSUFBMkI7SUFFaEQsR0FBSyxDQUFDWSxJQUFJLEdBQUdWLDZEQUFVLENBQUMsQ0FBQztRQUN2QlcsTUFBTSxFQUFFLFFBQVEsUUFBMkQsQ0FBQztnQkFBakVDLElBQUksU0FBSkEsSUFBSSxtQ0FBRUMsUUFBUSxNQUFHQyxFQUFFLG1EQUFHQyxTQUFTLE1BQUdDLElBQUksa0JBQUdDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxNQUFNLFNBQU5BLE1BQU07WUFDbEUsRUFBRSxFQUFFTixJQUFJLElBQUlLLFFBQVEsR0FBR0UsTUFBTSxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDRixNQUFNO2dCQUNOYixRQUFRLENBQUNnQixRQUFRLENBQVJBLEtBQUs7b0JBQUksTUFBTSxFQUFMQSxLQUFLLElBQUlMLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSWIsTUFBTSxDQUFDbUIsTUFBTSxJQUFJbkIsTUFBTSxDQUFDbUIsTUFBTTs7WUFDakYsQ0FBQztZQUNEYixHQUFHLENBQUMsQ0FBQztnQkFBQ0QsQ0FBQyxFQUFFSSxJQUFJLEdBQUdFLEVBQUUsR0FBRyxDQUFDO1lBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ1MsVUFBVSxHQUFHLFFBQVE7UUFBRmhCLE1BQU0sQ0FBTkEsT0FBTyxFQUFFRCxJQUFJOztJQUV0QyxFQUErQjtJQUMvQixFQUFFLEdBQUdILE1BQU0sSUFBSUEsTUFBTSxDQUFDbUIsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sc0VBQUVFLENBQUc7Ozs7Ozs7c0JBQUMsQ0FBbUI7O0lBQ2pDLENBQUM7SUFFRCxNQUFNLHVFQUNIQSxDQUFHO1FBQUNDLFNBQVMsRUFBRXhCLGtGQUF1Qjs7Ozs7Ozs7aUZBQ3BDRixzREFBWTtlQUNQVyxJQUFJO2dCQUNSaUIsS0FBSyxFQUFFLENBQUM7b0JBQUNuQixDQUFDLEVBQURBLENBQUM7Z0JBQUMsQ0FBQztnQkFDWmlCLFNBQVMsRUFBRyxHQUEyQm5CLE1BQXFDLENBQTlETCxnRkFBcUIsRUFBQyxDQUFDLElBQXdDLE9BQXRDSyxJQUFJLEdBQUdMLG9GQUF5QixHQUFHLENBQUU7Z0JBQzVFNkIsT0FBTyxFQUFFUCxVQUFVOzs7Ozs7OytGQUVsQlEsQ0FBRztvQkFBQ0MsR0FBRyxFQUFFN0IsTUFBTSxDQUFDQyxLQUFLO29CQUFHNkIsR0FBRyxFQUFHLENBQU0sUUFBWSxPQUFWN0IsS0FBSyxHQUFHLENBQUM7Ozs7Ozs7OztpRkFFakQ4QixDQUFNO2dCQUNMVCxTQUFTLEVBQUcsR0FBbUJ4QixNQUFpQixDQUFsQ0Esd0VBQWEsRUFBQyxDQUFDLElBQW9CLE9BQWxCQSw0RUFBaUI7Z0JBQ2hENkIsT0FBTyxFQUFFLFFBQVE7b0JBQUZ6QixNQUFNLENBQU5BLFFBQVEsRUFBRUQsS0FBSyxHQUFHLENBQUMsSUFBSUQsTUFBTSxDQUFDbUIsTUFBTTs7Ozs7Ozs7MEJBQ3BELENBRUQ7O2lGQUNDWSxDQUFNO2dCQUNMVCxTQUFTLEVBQUcsR0FBbUJ4QixNQUFpQixDQUFsQ0Esd0VBQWEsRUFBQyxDQUFDLElBQW9CLE9BQWxCQSw0RUFBaUI7Z0JBQ2hENkIsT0FBTyxFQUFFLFFBQVE7b0JBQUZ6QixNQUFNLENBQU5BLFFBQVEsRUFBRUQsS0FBSyxHQUFHLENBQUMsR0FBR0QsTUFBTSxDQUFDbUIsTUFBTSxJQUFJbkIsTUFBTSxDQUFDbUIsTUFBTTs7Ozs7Ozs7MEJBQ3BFLENBRUQ7Ozs7QUFHTixDQUFDO0lBL0NLcEIsWUFBWTs7UUFJS0osbURBQVM7UUFFakJFLHlEQUFVOzs7S0FObkJFLFlBQVk7QUFpRGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VnYWxsZXJ5L0ltYWdlR2FsbGVyeS5qcz81OTYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL2ltYWdlZ2FsbGVyeS9JbWFnZUdhbGxlcnkuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWFnZUdhbGxlcnkubW9kdWxlLmNzcyc7IC8vINCY0LzQv9C+0YDRgiBDU1Mg0LzQvtC00YPQu9C10LlcblxuY29uc3QgSW1hZ2VHYWxsZXJ5ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgW3sgeCB9LCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHg6IDAgfSkpO1xuXG4gIGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKHtcbiAgICBvbkRyYWc6ICh7IGRvd24sIG1vdmVtZW50OiBbbXhdLCBkaXJlY3Rpb246IFt4RGlyXSwgZGlzdGFuY2UsIGNhbmNlbCB9KSA9PiB7XG4gICAgICBpZiAoZG93biAmJiBkaXN0YW5jZSA+IHdpbmRvdy5pbm5lcldpZHRoIC8gMikge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgc2V0SW5kZXgoc3RhdGUgPT4gKHN0YXRlICsgKHhEaXIgPiAwID8gLTEgOiAxKSArIGltYWdlcy5sZW5ndGgpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBzZXQoeyB4OiBkb3duID8gbXggOiAwIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlWm9vbSA9ICgpID0+IHNldFpvb20oIXpvb20pO1xuXG4gIC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsNC70LjRh9C40Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjQuVxuICBpZiAoIWltYWdlcyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm8gaW1hZ2VzIGF2YWlsYWJsZTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5Q29udGFpbmVyfT5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgey4uLmJpbmQoKX1cbiAgICAgICAgc3R5bGU9e3sgeCB9fVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0gJHt6b29tID8gc3R5bGVzLmltYWdlQ29udGFpbmVyWm9vbSA6ICcnfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVpvb219XG4gICAgICA+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaW5kZXhdfSBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfSAvPlxuICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMubmV4dEJ1dHRvbn1gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbmRleCgoaW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGgpfVxuICAgICAgPlxuICAgICAgICBOZXh0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5wcmV2QnV0dG9ufWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KChpbmRleCAtIDEgKyBpbWFnZXMubGVuZ3RoKSAlIGltYWdlcy5sZW5ndGgpfVxuICAgICAgPlxuICAgICAgICBQcmV2XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeTsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInVzZUdlc3R1cmUiLCJzdHlsZXMiLCJJbWFnZUdhbGxlcnkiLCJpbWFnZXMiLCJpbmRleCIsInNldEluZGV4Iiwiem9vbSIsInNldFpvb20iLCJ4Iiwic2V0IiwiYmluZCIsIm9uRHJhZyIsImRvd24iLCJtb3ZlbWVudCIsIm14IiwiZGlyZWN0aW9uIiwieERpciIsImRpc3RhbmNlIiwiY2FuY2VsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0YXRlIiwibGVuZ3RoIiwidG9nZ2xlWm9vbSIsImRpdiIsImNsYXNzTmFtZSIsImdhbGxlcnlDb250YWluZXIiLCJzdHlsZSIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2VDb250YWluZXJab29tIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm5leHRCdXR0b24iLCJwcmV2QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/imagegallery/ImageGallery.js\n");

/***/ })

});