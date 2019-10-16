/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/components/list.js");



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let data = this.props.data || [];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.map((attr, dex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: dex,
      title: attr.image
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class List extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  click() {
    console.log(this.props.title);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: this.click.bind(this)
    }, this.props.title);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support */ "source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app */ "./src/components/app.js");
 // Instead of:


source_map_support__WEBPACK_IMPORTED_MODULE_1___default.a.install();




 // import log from './log'

const app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // 静态资源

app.use(`/static/`, express__WEBPACK_IMPORTED_MODULE_2___default.a.static('./static'));
app.get('/', async (req, res) => {
  let [err, data] = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://web-dev.d.bigfunapp.cn/api/client/web?method=getHomeBanner').then(r => [null, r.data]).catch(e => [e, null]);

  if (err) {
    return res.send('error!');
  } // try{
  //   throw new Error('xxx')
  // }catch(e){
  //   // let stack = `[time:] at: ${e.stack.split('at ')[2].replace('\n','')}`
  //   console.log(e.stack)
  //   console.log('data')
  // }


  console.trace('Show me');
  let content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.data
  }));
  let html = `
  <html>
    <head>
      <title>ssr react</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.store = {state:${JSON.stringify(data.data)}}
      </script>
      <script src="/static/js/index.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});
app.listen(2333, () => {
  console.log('run');
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb3VyY2UtbWFwLXN1cHBvcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkYXRhIiwicHJvcHMiLCJtYXAiLCJhdHRyIiwiZGV4IiwiaW1hZ2UiLCJMaXN0IiwiY2xpY2siLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJiaW5kIiwic291cmNlTWFwU3VwcG9ydCIsImluc3RhbGwiLCJhcHAiLCJleHByZXNzIiwidXNlIiwic3RhdGljIiwiZ2V0IiwicmVxIiwicmVzIiwiZXJyIiwiYXhpb3MiLCJ0aGVuIiwiciIsImNhdGNoIiwiZSIsInNlbmQiLCJ0cmFjZSIsImNvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsImh0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NB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RyxDQUFDTyxJQUFKLENBQVNJLElBQVQ7QUFDRCxDQWpDRDtBQW1DQWpCLEdBQUcsQ0FBQ29CLE1BQUosQ0FBVyxJQUFYLEVBQWdCLE1BQUk7QUFDbEIxQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7OztBQ3JEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YSB8fCBbXVxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhLm1hcCgoYXR0cixkZXgpPT48TGlzdCBrZXk9e2RleH0gdGl0bGU9e2F0dHIuaW1hZ2V9PjwvTGlzdD4pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY2xpY2soKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudGl0bGUpXHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLmNsaWNrLmJpbmQodGhpcyl9PlxyXG4gICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0IiwiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXHJcbi8vIEluc3RlYWQgb2Y6XHJcbmltcG9ydCBzb3VyY2VNYXBTdXBwb3J0IGZyb20gJ3NvdXJjZS1tYXAtc3VwcG9ydCdcclxuc291cmNlTWFwU3VwcG9ydC5pbnN0YWxsKClcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtyZW5kZXJUb1N0cmluZ30gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCdcclxuLy8gaW1wb3J0IGxvZyBmcm9tICcuL2xvZydcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5cclxuLy8g6Z2Z5oCB6LWE5rqQXHJcbmFwcC51c2UoYC9zdGF0aWMvYCwgZXhwcmVzcy5zdGF0aWMoJy4vc3RhdGljJykpXHJcblxyXG5hcHAuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICBsZXQgW2VycixkYXRhXSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL3dlYi1kZXYuZC5iaWdmdW5hcHAuY24vYXBpL2NsaWVudC93ZWI/bWV0aG9kPWdldEhvbWVCYW5uZXInKS50aGVuKHI9PltudWxsLHIuZGF0YV0pLmNhdGNoKGU9PltlLG51bGxdKVxyXG4gIGlmKGVycil7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoJ2Vycm9yIScpXHJcbiAgfVxyXG5cclxuICAvLyB0cnl7XHJcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ3h4eCcpXHJcbiAgLy8gfWNhdGNoKGUpe1xyXG4gIC8vICAgLy8gbGV0IHN0YWNrID0gYFt0aW1lOl0gYXQ6ICR7ZS5zdGFjay5zcGxpdCgnYXQgJylbMl0ucmVwbGFjZSgnXFxuJywnJyl9YFxyXG4gIC8vICAgY29uc29sZS5sb2coZS5zdGFjaylcclxuICAvLyAgIGNvbnNvbGUubG9nKCdkYXRhJylcclxuICAvLyB9XHJcblxyXG4gIGNvbnNvbGUudHJhY2UoJ1Nob3cgbWUnKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyg8QXBwIGRhdGE9e2RhdGEuZGF0YX0gLz4pXHJcbiAgbGV0IGh0bWwgPSBgXHJcbiAgPGh0bWw+XHJcbiAgICA8aGVhZD5cclxuICAgICAgPHRpdGxlPnNzciByZWFjdDwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiLz5cclxuICAgIDwvaGVhZD5cclxuICAgIDxib2R5PlxyXG4gICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgPHNjcmlwdD5cclxuICAgICAgICB3aW5kb3cuc3RvcmUgPSB7c3RhdGU6JHtKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEpfX1cclxuICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9qcy9pbmRleC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuICBgXHJcbiAgcmVzLnNlbmQoaHRtbClcclxufSlcclxuXHJcbmFwcC5saXN0ZW4oMjMzMywoKT0+e1xyXG4gIGNvbnNvbGUubG9nKCdydW4nKVxyXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=