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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var HelloWorld=Clappr.UIContainerPlugin.extend({name:'hello_world',initialize:function(){this.render();},bindEvents:function(){this.listenTo(this.container,Clappr.Events.CONTAINER_PAUSE,this.show);this.listenTo(this.container,Clappr.Events.CONTAINER_PLAY,this.hide);},hide:function(){this.$el.hide();},show:function(){this.$el.show();},render:function(){this.$el.html('Hello World!');this.$el.css('font-size','100px');this.$el.css('color','white');this.$el.css('background-color','red');this.$el.css('position','relative');this.container.$el.append(this.$el);this.hide();return this;}});var player=new Clappr.Player({source:\"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4\",poster:\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HelloWorld.svg/512px-HelloWorld.svg.png\",parentId:\"#player\",plugins:[HelloWorld]});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS5qcz80MDVmIl0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJDbGFwcHIiLCJVSUNvbnRhaW5lclBsdWdpbiIsImV4dGVuZCIsIm5hbWUiLCJpbml0aWFsaXplIiwicmVuZGVyIiwiYmluZEV2ZW50cyIsImxpc3RlblRvIiwiY29udGFpbmVyIiwiRXZlbnRzIiwiQ09OVEFJTkVSX1BBVVNFIiwic2hvdyIsIkNPTlRBSU5FUl9QTEFZIiwiaGlkZSIsIiRlbCIsImh0bWwiLCJjc3MiLCJhcHBlbmQiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJzb3VyY2UiLCJwb3N0ZXIiLCJwYXJlbnRJZCIsInBsdWdpbnMiXSwibWFwcGluZ3MiOiJBQUNBLEdBQUlBLFlBQWFDLE9BQU9DLGlCQUFQLENBQXlCQyxNQUF6QixDQUFnQyxDQUM3Q0MsS0FBTSxhQUR1QyxDQUU3Q0MsV0FBWSxVQUFXLENBQ3JCLEtBQUtDLE1BQUwsR0FDRCxDQUo0QyxDQUs3Q0MsV0FBWSxVQUFXLENBQ3JCLEtBQUtDLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixDQUE4QlIsT0FBT1MsTUFBUCxDQUFjQyxlQUE1QyxDQUE2RCxLQUFLQyxJQUFsRSxFQUNBLEtBQUtKLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixDQUE4QlIsT0FBT1MsTUFBUCxDQUFjRyxjQUE1QyxDQUE0RCxLQUFLQyxJQUFqRSxFQUNELENBUjRDLENBUzdDQSxLQUFNLFVBQVcsQ0FDZixLQUFLQyxHQUFMLENBQVNELElBQVQsR0FDRCxDQVg0QyxDQVk3Q0YsS0FBTSxVQUFXLENBQ2YsS0FBS0csR0FBTCxDQUFTSCxJQUFULEdBQ0QsQ0FkNEMsQ0FlN0NOLE9BQVEsVUFBVyxDQUNqQixLQUFLUyxHQUFMLENBQVNDLElBQVQsQ0FBYyxjQUFkLEVBQ0EsS0FBS0QsR0FBTCxDQUFTRSxHQUFULENBQWEsV0FBYixDQUEwQixPQUExQixFQUNBLEtBQUtGLEdBQUwsQ0FBU0UsR0FBVCxDQUFhLE9BQWIsQ0FBc0IsT0FBdEIsRUFDQSxLQUFLRixHQUFMLENBQVNFLEdBQVQsQ0FBYSxrQkFBYixDQUFpQyxLQUFqQyxFQUNBLEtBQUtGLEdBQUwsQ0FBU0UsR0FBVCxDQUFhLFVBQWIsQ0FBeUIsVUFBekIsRUFDQSxLQUFLUixTQUFMLENBQWVNLEdBQWYsQ0FBbUJHLE1BQW5CLENBQTBCLEtBQUtILEdBQS9CLEVBQ0EsS0FBS0QsSUFBTCxHQUNBLE1BQU8sS0FBUCxDQUNELENBeEI0QyxDQUFoQyxDQUFqQixDQTBCRSxHQUFJSyxRQUFTLEdBQUlsQixRQUFPbUIsTUFBWCxDQUFrQixDQUM3QkMsT0FBUSxtREFEcUIsQ0FFN0JDLE9BQVEsbUdBRnFCLENBRzdCQyxTQUFVLFNBSG1CLENBSTdCQyxRQUFTLENBQUN4QixVQUFELENBSm9CLENBQWxCLENBQWIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIEhlbGxvV29ybGQgPSBDbGFwcHIuVUlDb250YWluZXJQbHVnaW4uZXh0ZW5kKHtcbiAgICBuYW1lOiAnaGVsbG9fd29ybGQnLFxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LFxuICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbnRhaW5lciwgQ2xhcHByLkV2ZW50cy5DT05UQUlORVJfUEFVU0UsIHRoaXMuc2hvdyk7XG4gICAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29udGFpbmVyLCBDbGFwcHIuRXZlbnRzLkNPTlRBSU5FUl9QTEFZLCB0aGlzLmhpZGUpO1xuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbC5oaWRlKCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsLnNob3coKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbC5odG1sKCdIZWxsbyBXb3JsZCEnKTtcbiAgICAgIHRoaXMuJGVsLmNzcygnZm9udC1zaXplJywgJzEwMHB4Jyk7XG4gICAgICB0aGlzLiRlbC5jc3MoJ2NvbG9yJywgJ3doaXRlJyk7XG4gICAgICB0aGlzLiRlbC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmVkJyk7XG4gICAgICB0aGlzLiRlbC5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci4kZWwuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9KTtcbiAgdmFyIHBsYXllciA9IG5ldyBDbGFwcHIuUGxheWVyKHtcbiAgICBzb3VyY2U6IFwiaHR0cDovL2NsaXBzLnZvcndhZXJ0cy1nbWJoLmRlL2JpZ19idWNrX2J1bm55Lm1wNFwiLFxuICAgIHBvc3RlcjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjgvSGVsbG9Xb3JsZC5zdmcvNTEycHgtSGVsbG9Xb3JsZC5zdmcucG5nXCIsXG4gICAgcGFyZW50SWQ6IFwiI3BsYXllclwiLFxuICAgIHBsdWdpbnM6IFtIZWxsb1dvcmxkXVxuICB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);