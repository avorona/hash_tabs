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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _tabizator = __webpack_require__(2);\n\nvar _tabizator2 = _interopRequireDefault(_tabizator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar taba = new _tabizator2.default('.js-tabs', {\n\n  tab: '.js-tab',\n  content: '.js-content',\n  animate: false\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYml6YXRvciBmcm9tICcuL190YWJpemF0b3InO1xuXG5cbmxldCB0YWJhID1uZXcgVGFiaXphdG9yKCcuanMtdGFicycse1xuXG4gIHRhYjogJy5qcy10YWInLFxuICBjb250ZW50OiAnLmpzLWNvbnRlbnQnLFxuICBhbmltYXRlOiBmYWxzZVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tabizator = function () {\n  function Tabizator(target, settings) {\n    _classCallCheck(this, Tabizator);\n\n    this.config = settings;\n    this.tabParent = target;\n    this.tabs = {\n      all: [].slice.call(document.querySelectorAll(settings.tab)),\n      current: [],\n      data: []\n    };\n    this.content = {\n      all: [].slice.call(document.querySelectorAll(settings.content))\n\n    };\n    this._init();\n  }\n\n  _createClass(Tabizator, [{\n    key: '_init',\n    value: function _init() {\n\n      this._bindEvents();\n      this._onPageLoad();\n    }\n  }, {\n    key: '_bindEvents',\n    value: function _bindEvents() {\n\n      this._tabClick();\n      this._hashChanged();\n    }\n  }, {\n    key: '_onPageLoad',\n    value: function _onPageLoad() {\n\n      var self = this;\n\n      self._toggleState();\n      self._showContent();\n    }\n\n    /// EVENTS  START\n\n\n  }, {\n    key: '_tabClick',\n    value: function _tabClick() {\n\n      var self = this;\n      var tabs = self.tabs.all;\n\n      tabs.forEach(function (el) {\n\n        el.addEventListener('click', function (e) {\n\n          // e.preventDefault();\n\n          var t = e.currentTarget;\n          var data = t.getAttribute('data-href');\n\n          self.tabs.current = t;\n          self.tabs.data = data;\n\n          self._changeHash();\n          self._toggleState();\n        });\n      });\n    }\n  }, {\n    key: '_hashChanged',\n    value: function _hashChanged() {\n\n      var self = this;\n      // let all=self.tabs.all;\n      // let target=self.tabs.current;\n\n      window.addEventListener('hashchange', function (e) {\n\n        self._showContent();\n        self._toggleState();\n      });\n    }\n\n    /// EVENTS END\n\n\n  }, {\n    key: '_toggleState',\n    value: function _toggleState() {\n\n      // if (target === undefined || all === undefined) return false;\n\n      var self = this;\n      var hash = window.location.hash.replace('#', '');\n      var all = self.tabs.all;\n\n      var target = all.find(function (el) {\n\n        if (el.getAttribute('data-href') === hash) return el;\n      });\n\n      if (target) {\n        self.tabs.current = target;\n        all.forEach(function (el) {\n          el.classList.remove('is-active');\n        });\n        target.classList.add('is-active');\n        // console.log(hash, target);\n      } else {\n\n        return false;\n      }\n    }\n  }, {\n    key: '_changeHash',\n    value: function _changeHash() {\n      var self = this;\n      var newHash = self.tabs.data;\n\n      var location = window.location.href;\n\n      var hash = window.location.hash;\n\n      // console.log(hash);\n      if (hash.length === 0) {\n\n        var newLoc = location + '#' + newHash;\n\n        window.location.href = newLoc;\n      } else {\n\n        var hashIndex = location.indexOf('#', 0);\n        var _newLoc = location.slice(0, hashIndex) + '#' + newHash;\n        // console.log(newLoc);\n        window.location.href = _newLoc;\n      }\n\n      // console.log(a);\n    }\n  }, {\n    key: '_showContent',\n    value: function _showContent() {\n\n      var self = this;\n      var content = self.content.all;\n      var hash = window.location.hash.replace('#', '');\n\n      // console.log(content);\n      // console.log(hash);\n\n\n      content.forEach(function (e) {\n        e.classList.remove('is-active');\n      });\n\n      if (hash) {\n\n        var current = content.find(function (el) {\n          console.log(el);\n          if (el.getAttribute('data-content') === hash) return el;\n        });\n\n        current.classList.add('is-active');\n      } else {\n\n        var ph = content.find(function (el) {\n          console.log(el);\n          if (el.getAttribute('data-content') === 'ph') return el;\n        });\n\n        ph.classList.add('is-active');\n      }\n    }\n  }]);\n\n  return Tabizator;\n}();\n\nexports.default = Tabizator;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvX3RhYml6YXRvci5qcz9hZWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJpemF0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsc2V0dGluZ3MpIHtcclxuXHJcbiAgICB0aGlzLmNvbmZpZz1zZXR0aW5ncztcclxuICAgIHRoaXMudGFiUGFyZW50ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy50YWJzPXtcclxuICAgICAgYWxsOiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MudGFiKSksXHJcbiAgICAgIGN1cnJlbnQ6IFtdLFxyXG4gICAgICBkYXRhOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29udGVudD17XHJcbiAgICAgIGFsbDogW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmNvbnRlbnQpKSxcclxuXHJcbiAgICB9O1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG5cclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gXHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcbiAgICB0aGlzLl9vblBhZ2VMb2FkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgX2JpbmRFdmVudHMoKSB7XHJcblxyXG4gICAgdGhpcy5fdGFiQ2xpY2soKTtcclxuICAgIHRoaXMuX2hhc2hDaGFuZ2VkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgX29uUGFnZUxvYWQoKSB7XHJcblxyXG4gICAgbGV0IHNlbGY9dGhpcztcclxuXHJcbiAgICBzZWxmLl90b2dnbGVTdGF0ZSgpO1xyXG4gICAgc2VsZi5fc2hvd0NvbnRlbnQoKTtcclxuXHJcblxyXG4gIH1cclxuICBcclxuICAvLy8gRVZFTlRTICBTVEFSVFxyXG5cclxuXHJcbiAgX3RhYkNsaWNrKCkge1xyXG5cclxuICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICBsZXQgdGFicyA9IHNlbGYudGFicy5hbGw7XHJcblxyXG4gICAgdGFicy5mb3JFYWNoKGVsID0+IHtcclxuXHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID0gdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpO1xyXG5cclxuICAgICAgICBzZWxmLnRhYnMuY3VycmVudD10O1xyXG4gICAgICAgIHNlbGYudGFicy5kYXRhID1kYXRhO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBzZWxmLl9jaGFuZ2VIYXNoKCk7XHJcbiAgICAgICAgc2VsZi5fdG9nZ2xlU3RhdGUoKTsgXHJcblxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBfaGFzaENoYW5nZWQoKSB7XHJcblxyXG4gICAgbGV0IHNlbGY9dGhpcztcclxuICAgIC8vIGxldCBhbGw9c2VsZi50YWJzLmFsbDtcclxuICAgIC8vIGxldCB0YXJnZXQ9c2VsZi50YWJzLmN1cnJlbnQ7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgICAgc2VsZi5fc2hvd0NvbnRlbnQoKTtcclxuICAgICAgc2VsZi5fdG9nZ2xlU3RhdGUoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICAvLy8gRVZFTlRTIEVORFxyXG5cclxuICBcclxuXHJcbiAgX3RvZ2dsZVN0YXRlKCkge1xyXG5cclxuICAgIC8vIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCBhbGwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICBsZXQgYWxsID0gc2VsZi50YWJzLmFsbDtcclxuXHJcbiAgICBsZXQgdGFyZ2V0ID0gYWxsLmZpbmQoZWwgPT4ge1xyXG4gICAgXHJcbiAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpID09PSBoYXNoKSByZXR1cm4gZWw7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgc2VsZi50YWJzLmN1cnJlbnQgPSB0YXJnZXQ7XHJcbiAgICAgIGFsbC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coaGFzaCwgdGFyZ2V0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgXHJcblxyXG5cclxuIFxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgX2NoYW5nZUhhc2goKSB7XHJcbiAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgbGV0IG5ld0hhc2ggPSBzZWxmLnRhYnMuZGF0YTtcclxuXHJcbiAgIFxyXG4gICAgbGV0IGxvY2F0aW9uPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuXHJcbiAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGhhc2gpO1xyXG4gICAgaWYgKGhhc2gubGVuZ3RoPT09MCkge1xyXG4gXHJcbiAgICAgIGxldCBuZXdMb2MgPSBsb2NhdGlvbiArICcjJyArIG5ld0hhc2g7XHJcbiAgICAgIFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld0xvYztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbGV0IGhhc2hJbmRleCA9IGxvY2F0aW9uLmluZGV4T2YoJyMnLCAwKTtcclxuICAgICAgbGV0IG5ld0xvYyA9IGxvY2F0aW9uLnNsaWNlKDAsIGhhc2hJbmRleCkrJyMnICsgbmV3SGFzaDtcclxuICAgICAgLy8gY29uc29sZS5sb2cobmV3TG9jKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXdMb2M7XHJcblxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGEpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgX3Nob3dDb250ZW50KCkge1xyXG5cclxuICAgIGxldCBzZWxmPXRoaXM7XHJcbiAgICBsZXQgY29udGVudD1zZWxmLmNvbnRlbnQuYWxsO1xyXG4gICAgbGV0IGhhc2ggPXdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCcnKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhoYXNoKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnRlbnQuZm9yRWFjaChlID0+IHtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgXHJcblxyXG4gICAgaWYgKGhhc2gpIHtcclxuXHJcbiAgICAgIGxldCBjdXJyZW50ID0gY29udGVudC5maW5kKGVsID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbCk7XHJcbiAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgPT09IGhhc2gpIHJldHVybiBlbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBsZXQgcGggPSBjb250ZW50LmZpbmQoZWwgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsKTtcclxuICAgICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSA9PT0gJ3BoJykgcmV0dXJuIGVsO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHBoLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvX3RhYml6YXRvci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOzs7Ozs7QUF2TUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);