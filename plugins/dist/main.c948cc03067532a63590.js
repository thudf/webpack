/*! For license information please see main.c948cc03067532a63590.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/heading/heading.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://plugins/./src/components/heading/heading.css?")},"./src/components/heading/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ \"./src/components/heading/heading.css\");\n\n\nclass Heading {\n\n  create(title) {\n    const h1 = document.createElement('h1');\n    h1.innerText = title;\n    h1.classList.add('title');\n    document.querySelector('body').appendChild(h1);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://plugins/./src/components/heading/index.js?")},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading */ "./src/components/heading/index.js");\n\n\nconst heading = new _components_heading__WEBPACK_IMPORTED_MODULE_0__["default"]();\nheading.create("Página principal");\n\nconsole.log("1.0.2");\nconsole.log("8080");\nconsole.log("124V12498EJKBASERTG");\n\n//# sourceURL=webpack://plugins/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(_,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(_,n)&&Object.defineProperty(_,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();