function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api/helpers/ArcHelper.ts":
  /*!******************************************!*\
    !*** ./src/app/api/helpers/ArcHelper.ts ***!
    \******************************************/

  /*! exports provided: ArcHelper */

  /***/
  function srcAppApiHelpersArcHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcHelper", function () {
      return ArcHelper;
    });
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

    var ArcHelper = /*#__PURE__*/function () {
      function ArcHelper() {
        _classCallCheck(this, ArcHelper);
      }

      _createClass(ArcHelper, null, [{
        key: "moveArrow",
        value: function moveArrow() {}
      }, {
        key: "moveArrowWithElement",
        value: function moveArrowWithElement(id) {
          var _this = this;

          ArcHelper.getConnectedArrowsIDs(id).forEach(function (arrowID) {
            var startID = arrowID.split(":")[0];
            var endID = arrowID.split(":")[1];

            var _this$getCoorinatesOf = _this.getCoorinatesOfElement(startID),
                _this$getCoorinatesOf2 = _slicedToArray(_this$getCoorinatesOf, 2),
                x1 = _this$getCoorinatesOf2[0],
                y1 = _this$getCoorinatesOf2[1];

            var _this$getCoorinatesOf3 = _this.getCoorinatesOfElement(endID),
                _this$getCoorinatesOf4 = _slicedToArray(_this$getCoorinatesOf3, 2),
                x2 = _this$getCoorinatesOf4[0],
                y2 = _this$getCoorinatesOf4[1];

            var _this$connectToNeares = _this.connectToNearestEnd(startID, x1, y1, x2, y2);

            var _this$connectToNeares2 = _slicedToArray(_this$connectToNeares, 4);

            x1 = _this$connectToNeares2[0];
            y1 = _this$connectToNeares2[1];
            x2 = _this$connectToNeares2[2];
            y2 = _this$connectToNeares2[3];
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("x1", x1);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("y1", y1);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("x2", x2);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("y2", y2);
          });
        }
      }, {
        key: "getConnectedArrowsIDs",
        value: function getConnectedArrowsIDs(id) {
          var allArrows = Array.from(document.getElementsByClassName("arc"));
          var connectedElementsIDs = [];
          allArrows.forEach(function (arrow) {
            var arrowID = arrow.getAttribute('id');
            var startID = arrowID.split(":")[0];
            var endID = arrowID.split(":")[1];

            if (startID === id || endID === id) {
              connectedElementsIDs.push(arrowID);
            }
          });
          return connectedElementsIDs;
        }
      }, {
        key: "getCoorinatesOfElement",
        value: function getCoorinatesOfElement(id) {
          var x, y;
          var element = document.getElementById(id);

          if (element.getAttribute("id").includes("place")) {
            x = parseInt(element.getAttribute('cx'));
            y = parseInt(element.getAttribute('cy'));
          } else {
            x = parseInt(element.getAttribute('x'));
            y = parseInt(element.getAttribute('y'));
          }

          return [x, y];
        }
      }, {
        key: "connectToNearestEnd",
        value: function connectToNearestEnd(start_id, start_x, start_y, end_x, end_y) {
          if (start_id.includes('place')) {
            var _this$adjustArrowPosi = this.adjustArrowPosition('place', start_x, start_y, end_x, end_y);

            var _this$adjustArrowPosi2 = _slicedToArray(_this$adjustArrowPosi, 4);

            start_x = _this$adjustArrowPosi2[0];
            start_y = _this$adjustArrowPosi2[1];
            end_x = _this$adjustArrowPosi2[2];
            end_y = _this$adjustArrowPosi2[3];
          } else if (start_id.includes('transition')) {
            var _this$adjustArrowPosi3 = this.adjustArrowPosition('transition', start_x, start_y, end_x, end_y);

            var _this$adjustArrowPosi4 = _slicedToArray(_this$adjustArrowPosi3, 4);

            start_x = _this$adjustArrowPosi4[0];
            start_y = _this$adjustArrowPosi4[1];
            end_x = _this$adjustArrowPosi4[2];
            end_y = _this$adjustArrowPosi4[3];
          }

          return [start_x, start_y, end_x, end_y];
        }
      }, {
        key: "adjustArrowPosition",
        value: function adjustArrowPosition(start_id, start_x, start_y, end_x, end_y) {
          if (start_x - end_x > -80 && start_x - end_x < 100) {
            if (start_y - end_y < 0) {
              if (start_id === 'place') {
                var _this$adjustPlaceTop = this.adjustPlaceTop(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceTop2 = _slicedToArray(_this$adjustPlaceTop, 4);

                start_x = _this$adjustPlaceTop2[0];
                start_y = _this$adjustPlaceTop2[1];
                end_x = _this$adjustPlaceTop2[2];
                end_y = _this$adjustPlaceTop2[3];
              } else {
                var _this$adjustTransitio = this.adjustTransitionTop(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio2 = _slicedToArray(_this$adjustTransitio, 4);

                start_x = _this$adjustTransitio2[0];
                start_y = _this$adjustTransitio2[1];
                end_x = _this$adjustTransitio2[2];
                end_y = _this$adjustTransitio2[3];
              }
            } else {
              if (start_id === 'place') {
                var _this$adjustPlaceBott = this.adjustPlaceBottom(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceBott2 = _slicedToArray(_this$adjustPlaceBott, 4);

                start_x = _this$adjustPlaceBott2[0];
                start_y = _this$adjustPlaceBott2[1];
                end_x = _this$adjustPlaceBott2[2];
                end_y = _this$adjustPlaceBott2[3];
              } else {
                var _this$adjustTransitio3 = this.adjustTransitionBottom(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio4 = _slicedToArray(_this$adjustTransitio3, 4);

                start_x = _this$adjustTransitio4[0];
                start_y = _this$adjustTransitio4[1];
                end_x = _this$adjustTransitio4[2];
                end_y = _this$adjustTransitio4[3];
              }
            }
          } else if (start_y - end_y > -80 && start_y - end_y < 100) {
            if (start_x - end_x < 0) {
              if (start_id === 'place') {
                var _this$adjustPlaceLeft = this.adjustPlaceLeft(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceLeft2 = _slicedToArray(_this$adjustPlaceLeft, 4);

                start_x = _this$adjustPlaceLeft2[0];
                start_y = _this$adjustPlaceLeft2[1];
                end_x = _this$adjustPlaceLeft2[2];
                end_y = _this$adjustPlaceLeft2[3];
              } else {
                var _this$adjustTransitio5 = this.adjustTransitionLeft(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio6 = _slicedToArray(_this$adjustTransitio5, 4);

                start_x = _this$adjustTransitio6[0];
                start_y = _this$adjustTransitio6[1];
                end_x = _this$adjustTransitio6[2];
                end_y = _this$adjustTransitio6[3];
              }
            } else {
              if (start_id === 'place') {
                var _this$adjustPlaceRigh = this.adjustPlaceRight(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceRigh2 = _slicedToArray(_this$adjustPlaceRigh, 4);

                start_x = _this$adjustPlaceRigh2[0];
                start_y = _this$adjustPlaceRigh2[1];
                end_x = _this$adjustPlaceRigh2[2];
                end_y = _this$adjustPlaceRigh2[3];
              } else {
                var _this$adjustTransitio7 = this.adjustTransitionRight(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio8 = _slicedToArray(_this$adjustTransitio7, 4);

                start_x = _this$adjustTransitio8[0];
                start_y = _this$adjustTransitio8[1];
                end_x = _this$adjustTransitio8[2];
                end_y = _this$adjustTransitio8[3];
              }
            }
          } else if (start_x - end_x <= -80) {
            if (start_y - end_y < 50) {
              if (start_id === 'place') {
                var _this$adjustPlaceTopL = this.adjustPlaceTopLeft(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceTopL2 = _slicedToArray(_this$adjustPlaceTopL, 4);

                start_x = _this$adjustPlaceTopL2[0];
                start_y = _this$adjustPlaceTopL2[1];
                end_x = _this$adjustPlaceTopL2[2];
                end_y = _this$adjustPlaceTopL2[3];
              } else {
                var _this$adjustTransitio9 = this.adjustTransitionTopLeft(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio10 = _slicedToArray(_this$adjustTransitio9, 4);

                start_x = _this$adjustTransitio10[0];
                start_y = _this$adjustTransitio10[1];
                end_x = _this$adjustTransitio10[2];
                end_y = _this$adjustTransitio10[3];
              }
            } else {
              if (start_id === 'place') {
                var _this$adjustPlaceBott3 = this.adjustPlaceBottomLeft(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceBott4 = _slicedToArray(_this$adjustPlaceBott3, 4);

                start_x = _this$adjustPlaceBott4[0];
                start_y = _this$adjustPlaceBott4[1];
                end_x = _this$adjustPlaceBott4[2];
                end_y = _this$adjustPlaceBott4[3];
              } else {
                var _this$adjustTransitio11 = this.adjustTransitionBottomLeft(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio12 = _slicedToArray(_this$adjustTransitio11, 4);

                start_x = _this$adjustTransitio12[0];
                start_y = _this$adjustTransitio12[1];
                end_x = _this$adjustTransitio12[2];
                end_y = _this$adjustTransitio12[3];
              }
            }
          } else if (start_x - end_x >= 100) {
            if (start_y - end_y < 50) {
              if (start_id === 'place') {
                var _this$adjustPlaceTopR = this.adjustPlaceTopRight(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceTopR2 = _slicedToArray(_this$adjustPlaceTopR, 4);

                start_x = _this$adjustPlaceTopR2[0];
                start_y = _this$adjustPlaceTopR2[1];
                end_x = _this$adjustPlaceTopR2[2];
                end_y = _this$adjustPlaceTopR2[3];
              } else {
                var _this$adjustTransitio13 = this.adjustTransitionTopRight(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio14 = _slicedToArray(_this$adjustTransitio13, 4);

                start_x = _this$adjustTransitio14[0];
                start_y = _this$adjustTransitio14[1];
                end_x = _this$adjustTransitio14[2];
                end_y = _this$adjustTransitio14[3];
              }
            } else {
              if (start_id === 'place') {
                var _this$adjustPlaceBott5 = this.adjustPlaceBottomRight(start_x, start_y, end_x, end_y);

                var _this$adjustPlaceBott6 = _slicedToArray(_this$adjustPlaceBott5, 4);

                start_x = _this$adjustPlaceBott6[0];
                start_y = _this$adjustPlaceBott6[1];
                end_x = _this$adjustPlaceBott6[2];
                end_y = _this$adjustPlaceBott6[3];
              } else {
                var _this$adjustTransitio15 = this.adjustTransitionBottomRight(start_x, start_y, end_x, end_y);

                var _this$adjustTransitio16 = _slicedToArray(_this$adjustTransitio15, 4);

                start_x = _this$adjustTransitio16[0];
                start_y = _this$adjustTransitio16[1];
                end_x = _this$adjustTransitio16[2];
                end_y = _this$adjustTransitio16[3];
              }
            }
          }

          return [start_x, start_y, end_x, end_y];
        } ///////////////////////
        // Place Adjustments //
        ///////////////////////

      }, {
        key: "adjustPlaceTop",
        value: function adjustPlaceTop(start_x, start_y, end_x, end_y) {
          return [start_x, start_y + 25, end_x + 35, end_y - 3];
        }
      }, {
        key: "adjustPlaceTopLeft",
        value: function adjustPlaceTopLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 25, start_y, end_x + 25, end_y - 3];
        }
      }, {
        key: "adjustPlaceTopRight",
        value: function adjustPlaceTopRight(start_x, start_y, end_x, end_y) {
          return [start_x - 25, start_y, end_x + 45, end_y - 3];
        }
      }, {
        key: "adjustPlaceBottom",
        value: function adjustPlaceBottom(start_x, start_y, end_x, end_y) {
          return [start_x, start_y - 25, end_x + 35, end_y + 25];
        }
      }, {
        key: "adjustPlaceBottomLeft",
        value: function adjustPlaceBottomLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 25, start_y, end_x + 25, end_y + 23];
        }
      }, {
        key: "adjustPlaceBottomRight",
        value: function adjustPlaceBottomRight(start_x, start_y, end_x, end_y) {
          return [start_x - 25, start_y, end_x + 45, end_y + 25];
        }
      }, {
        key: "adjustPlaceLeft",
        value: function adjustPlaceLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 25, start_y, end_x - 8, end_y + 12];
        }
      }, {
        key: "adjustPlaceRight",
        value: function adjustPlaceRight(start_x, start_y, end_x, end_y) {
          return [start_x - 25, start_y, end_x + 75, end_y + 10];
        } ////////////////////////////
        // Transition Adjustments //
        ////////////////////////////

      }, {
        key: "adjustTransitionTop",
        value: function adjustTransitionTop(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y + 20, end_x, end_y - 30];
        }
      }, {
        key: "adjustTransitionTopLeft",
        value: function adjustTransitionTopLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y + 20, end_x - 20, end_y - 20];
        }
      }, {
        key: "adjustTransitionTopRight",
        value: function adjustTransitionTopRight(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y + 20, end_x + 20, end_y - 20];
        }
      }, {
        key: "adjustTransitionBottom",
        value: function adjustTransitionBottom(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y, end_x, end_y + 30];
        }
      }, {
        key: "adjustTransitionBottomLeft",
        value: function adjustTransitionBottomLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y, end_x - 20, end_y + 20];
        }
      }, {
        key: "adjustTransitionBottomRight",
        value: function adjustTransitionBottomRight(start_x, start_y, end_x, end_y) {
          return [start_x + 35, start_y, end_x + 20, end_y + 20];
        }
      }, {
        key: "adjustTransitionLeft",
        value: function adjustTransitionLeft(start_x, start_y, end_x, end_y) {
          return [start_x + 70, start_y + 10, end_x - 30, end_y];
        }
      }, {
        key: "adjustTransitionRight",
        value: function adjustTransitionRight(start_x, start_y, end_x, end_y) {
          return [start_x, start_y + 10, end_x + 30, end_y];
        }
      }]);

      return ArcHelper;
    }();
    /***/

  },

  /***/
  "./src/app/api/helpers/BoardHelper.ts":
  /*!********************************************!*\
    !*** ./src/app/api/helpers/BoardHelper.ts ***!
    \********************************************/

  /*! exports provided: BoardHelper */

  /***/
  function srcAppApiHelpersBoardHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardHelper", function () {
      return BoardHelper;
    });
    /* harmony import */


    var _TransitionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TransitionHelper */
    "./src/app/api/helpers/TransitionHelper.ts");
    /* harmony import */


    var _ArcHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ArcHelper */
    "./src/app/api/helpers/ArcHelper.ts");
    /* harmony import */


    var _PlaceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./PlaceHelper */
    "./src/app/api/helpers/PlaceHelper.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

    var BoardHelper = /*#__PURE__*/function () {
      function BoardHelper() {
        _classCallCheck(this, BoardHelper);
      }

      _createClass(BoardHelper, null, [{
        key: "getAll",
        value: function getAll() {
          return document.getElementsByClassName('net-element');
        }
      }, {
        key: "getSelectedElements",
        value: function getSelectedElements() {
          return document.getElementsByClassName('selected');
        }
      }, {
        key: "getSelectedElementsWithoutLabels",
        value: function getSelectedElementsWithoutLabels() {
          return Array.from(this.getSelectedElements()).filter(function (selectedEelemnt) {
            return !selectedEelemnt.getAttribute('id').startsWith('label');
          });
        }
      }, {
        key: "removeSelection",
        value: function removeSelection() {
          Array.from(this.getSelectedElements()).forEach(function (element) {
            element.classList.remove('selected');

            if (!element.getAttribute('id').includes('label')) {
              element.setAttribute('stroke', 'black');
            }
          });
          this.selectedElements = [];
        }
      }, {
        key: "getBoard",
        value: function getBoard() {
          return document.getElementById('svg-board');
        }
      }, {
        key: "getCursorSvgElement",
        value: function getCursorSvgElement() {
          return document.getElementById('cursors');
        }
      }, {
        key: "addArrowHeadMarker",
        value: function addArrowHeadMarker() {
          var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
          var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
          marker.setAttribute("id", "arrow");
          marker.setAttribute("viewBox", "0 0 10 10");
          marker.setAttribute("refX", "1");
          marker.setAttribute("refY", "5");
          marker.setAttribute("markerWidth", "10");
          marker.setAttribute("markerHeight", "10");
          marker.setAttribute("orient", "auto");
          var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
          path.setAttribute("fill", "black;");
          marker.appendChild(path);
          defs.appendChild(marker);
          this.getBoard().insertBefore(defs, this.getCursorSvgElement());
        }
      }, {
        key: "removeSelectedElementFromListByID",
        value: function removeSelectedElementFromListByID(id) {
          var index = this.selectedElements.indexOf(id);

          if (index !== -1) {
            this.selectedElements.splice(index, 1);
          }
        }
      }, {
        key: "moveElementEvent",
        value: function moveElementEvent() {
          var _this2 = this;

          Array.from(this.getAll()).forEach(function (element) {
            jquery__WEBPACK_IMPORTED_MODULE_3__(element).off('mousedown');
            jquery__WEBPACK_IMPORTED_MODULE_3__(element).on('mousedown', function () {
              var elementID = element.getAttribute('id');
              var label = document.getElementById('label-' + elementID);
              element.classList.add('active');
              jquery__WEBPACK_IMPORTED_MODULE_3__(_this2.getBoard()).off('mousemove');
              jquery__WEBPACK_IMPORTED_MODULE_3__(_this2.getBoard()).on('mousemove', function (event) {
                if (element.classList.contains('place')) {
                  _PlaceHelper__WEBPACK_IMPORTED_MODULE_2__["PlaceHelper"].movePlaceWithLabel(element, label, event.pageX, event.pageY);
                } else if (element.classList.contains('transition')) {
                  _TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].moveTransitionWithLabel(element, label, event.pageX, event.pageY);
                }

                _ArcHelper__WEBPACK_IMPORTED_MODULE_1__["ArcHelper"].moveArrowWithElement(elementID);
              });
              jquery__WEBPACK_IMPORTED_MODULE_3__(_this2.getBoard()).off('mouseup');
              jquery__WEBPACK_IMPORTED_MODULE_3__(_this2.getBoard()).on('mouseup', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(_this2.getBoard()).off('mousemove');
                element.classList.remove('active');
              });
            });
          });
        }
      }, {
        key: "selectedElementEvent",
        value: function selectedElementEvent() {
          var _this3 = this;

          Array.from(this.getAll()).forEach(function (element) {
            jquery__WEBPACK_IMPORTED_MODULE_3__(element).off('dblclick');
            jquery__WEBPACK_IMPORTED_MODULE_3__(element).on('dblclick', function () {
              var label = document.getElementById('label-' + element.getAttribute('id'));

              if (element.classList.contains('selected')) {
                _this3.unselect(element, label);
              } else {
                _this3.select(element, label);
              }
            });
          });
        }
      }, {
        key: "select",
        value: function select(element, label) {
          element.classList.add('selected');
          label.classList.add('selected');
          element.setAttribute('stroke', 'red');
          BoardHelper.selectedElements.push(element.getAttribute('id'));
        }
      }, {
        key: "unselect",
        value: function unselect(element, label) {
          element.classList.remove('selected');
          label.classList.remove('selected');
          element.setAttribute('stroke', 'black');
          BoardHelper.removeSelectedElementFromListByID(element.getAttribute('id'));
        }
      }]);

      return BoardHelper;
    }();

    BoardHelper.selectedElements = [];
    /***/
  },

  /***/
  "./src/app/api/helpers/PlaceHelper.ts":
  /*!********************************************!*\
    !*** ./src/app/api/helpers/PlaceHelper.ts ***!
    \********************************************/

  /*! exports provided: PlaceHelper */

  /***/
  function srcAppApiHelpersPlaceHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceHelper", function () {
      return PlaceHelper;
    });
    /* harmony import */


    var _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../app/shared/constants */
    "./src/app/app/shared/constants.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var PlaceHelper = /*#__PURE__*/function () {
      function PlaceHelper() {
        _classCallCheck(this, PlaceHelper);
      }

      _createClass(PlaceHelper, null, [{
        key: "getAll",
        value: function getAll() {
          return document.getElementsByClassName('place');
        }
      }, {
        key: "setDisabledCursor",
        value: function setDisabledCursor() {
          Array.from(this.getAll()).forEach(function (place) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(place).off('dblclick');
            place.setAttribute("style", "cursor: not-allowed");
          });
        }
      }, {
        key: "setPointerCursor",
        value: function setPointerCursor() {
          Array.from(this.getAll()).forEach(function (place) {
            place.setAttribute("style", "cursor: pointer");
          });
        }
      }, {
        key: "createPlaceWtihLabel",
        value: function createPlaceWtihLabel(id, x_position, y_position) {
          var place = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          var cursors = document.getElementById('cursors');
          place.setAttribute("id", "place-" + id);
          place.setAttribute("class", "net-element place");
          place.setAttribute("cx", x_position.toString());
          place.setAttribute("cy", y_position.toString());
          place.setAttribute("r", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["place_radius"].toString());
          place.setAttribute("stroke", "black");
          place.setAttribute("stroke-width", '2');
          place.setAttribute("fill", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["place_fill_color"]);
          place.setAttribute("style", "cursor: pointer");
          var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("id", "label-place-" + id);
          text.setAttribute("x", x_position.toString());
          text.setAttribute("y", y_position.toString());
          text.setAttribute("fill", "black");
          text.setAttribute("dy", ".3em");
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("font-size", "20px");
          text.setAttribute("style", "cursor: pointer");
          text.innerHTML = 'p' + id;
          var board = document.getElementById('svg-board');
          board.insertBefore(place, cursors);
          board.insertBefore(text, cursors);
          place.addEventListener('mousedown', function (e) {
            if (e.detail > 1) {
              e.preventDefault();
            }
          });
        }
      }, {
        key: "movePlaceWithLabel",
        value: function movePlaceWithLabel(place, label, x_position, y_position) {
          var x = x_position - 200;
          var y = y_position - 15;
          place.setAttribute('cx', x.toString());
          place.setAttribute('cy', y.toString());
          label.setAttribute('x', x.toString());
          label.setAttribute('y', y.toString());
        }
      }, {
        key: "getPlacePositionByID",
        value: function getPlacePositionByID(id) {
          var domID = "place-" + id;
          var domElement = document.getElementById(domID);
          return [parseInt(domElement.getAttribute('cx')), parseInt(domElement.getAttribute('cy'))];
        }
      }]);

      return PlaceHelper;
    }();
    /***/

  },

  /***/
  "./src/app/api/helpers/TokenHelper.ts":
  /*!********************************************!*\
    !*** ./src/app/api/helpers/TokenHelper.ts ***!
    \********************************************/

  /*! exports provided: TokenHelper */

  /***/
  function srcAppApiHelpersTokenHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenHelper", function () {
      return TokenHelper;
    });
    /* harmony import */


    var _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../app/shared/constants */
    "./src/app/app/shared/constants.ts");

    var TokenHelper = /*#__PURE__*/function () {
      function TokenHelper() {
        _classCallCheck(this, TokenHelper);
      }

      _createClass(TokenHelper, null, [{
        key: "getAll",
        value: function getAll() {
          return document.getElementsByClassName('token');
        }
      }, {
        key: "createToken",
        value: function createToken(id, x_position, y_position) {
          var token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          var cursors = document.getElementById('cursors');
          token.setAttribute("id", "token-" + id);
          token.setAttribute("class", "net-element token");
          token.setAttribute("cx", x_position.toString());
          token.setAttribute("cy", y_position.toString());
          token.setAttribute("r", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["token_radius"].toString());
          token.setAttribute("stroke", "black");
          token.setAttribute("stroke-width", '2');
          token.setAttribute("fill", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["token_fill_color"]);
          token.setAttribute("style", "cursor: pointer");
          var board = document.getElementById('svg-board');
          board.insertBefore(token, cursors);
        }
      }]);

      return TokenHelper;
    }();
    /***/

  },

  /***/
  "./src/app/api/helpers/TransitionHelper.ts":
  /*!*************************************************!*\
    !*** ./src/app/api/helpers/TransitionHelper.ts ***!
    \*************************************************/

  /*! exports provided: TransitionHelper */

  /***/
  function srcAppApiHelpersTransitionHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionHelper", function () {
      return TransitionHelper;
    });
    /* harmony import */


    var _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../app/shared/constants */
    "./src/app/app/shared/constants.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var TransitionHelper = /*#__PURE__*/function () {
      function TransitionHelper() {
        _classCallCheck(this, TransitionHelper);
      }

      _createClass(TransitionHelper, null, [{
        key: "getAll",
        value: function getAll() {
          return document.getElementsByClassName('transition');
        }
      }, {
        key: "setPointerCursor",
        value: function setPointerCursor() {
          Array.from(this.getAll()).forEach(function (transition) {
            transition.setAttribute("style", "cursor: pointer");
          });
        }
      }, {
        key: "setDisabledCursor",
        value: function setDisabledCursor() {
          Array.from(this.getAll()).forEach(function (transition) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(transition).off('dblclick');
            transition.setAttribute("style", "cursor: not-allowed");
          });
        }
      }, {
        key: "createTransitionWithLabel",
        value: function createTransitionWithLabel(id, x_position, y_position) {
          var transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          var cursors = document.getElementById('cursors');
          transition.setAttribute("id", "transition-" + id);
          transition.setAttribute("class", "net-element transition");
          transition.setAttribute("x", x_position.toString());
          transition.setAttribute("y", y_position.toString());
          transition.setAttribute("width", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["transition_width"].toString());
          transition.setAttribute("height", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["transition_height"].toString());
          transition.setAttribute("stroke", 'black');
          transition.setAttribute("stroke-width", '2');
          transition.setAttribute("fill", 'white');
          transition.setAttribute("style", "cursor: pointer");
          var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("id", "label-transition-" + id);
          text.setAttribute("x", (x_position + 35).toString());
          text.setAttribute("y", (y_position + 10).toString());
          text.setAttribute("fill", "black");
          text.setAttribute("dy", ".3em");
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("font-size", "20px");
          text.setAttribute("style", "cursor: pointer");
          text.innerHTML = 't' + id;
          var board = document.getElementById('svg-board');
          board.insertBefore(transition, cursors);
          board.insertBefore(text, cursors);
          transition.addEventListener('mousedown', function (e) {
            if (e.detail > 1) {
              e.preventDefault();
            }
          });
        }
      }, {
        key: "moveTransitionWithLabel",
        value: function moveTransitionWithLabel(transition, label, x_position, y_position) {
          transition.setAttribute('x', (x_position - 235).toString());
          transition.setAttribute('y', (y_position - 35).toString());
          label.setAttribute('x', (x_position - 200).toString());
          label.setAttribute('y', (y_position - 25).toString());
        }
      }, {
        key: "getPlaceTransitionByID",
        value: function getPlaceTransitionByID(id) {
          var domID = "transition-" + id;
          var domElement = document.getElementById(domID);
          return [parseInt(domElement.getAttribute('x')), parseInt(domElement.getAttribute('y'))];
        }
      }]);

      return TransitionHelper;
    }();
    /***/

  },

  /***/
  "./src/app/api/models/Arc.ts":
  /*!***********************************!*\
    !*** ./src/app/api/models/Arc.ts ***!
    \***********************************/

  /*! exports provided: Arc */

  /***/
  function srcAppApiModelsArcTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Arc", function () {
      return Arc;
    });
    /* harmony import */


    var _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../helpers/ArcHelper */
    "./src/app/api/helpers/ArcHelper.ts");
    /* harmony import */


    var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../helpers/BoardHelper */
    "./src/app/api/helpers/BoardHelper.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var arc_id_prefix = 'arc-';

    var Arc = /*#__PURE__*/function () {
      function Arc() {
        _classCallCheck(this, Arc);

        this.color = "black";
        this.id = document.getElementById(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0]).getAttribute('id') + ':' + document.getElementById(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[1]).getAttribute('id');
      }

      _createClass(Arc, [{
        key: "getID",
        value: function getID() {
          return this.id;
        }
      }, {
        key: "create",
        value: function create() {
          var _helpers_ArcHelper__W = _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].getCoorinatesOfElement(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0]),
              _helpers_ArcHelper__W2 = _slicedToArray(_helpers_ArcHelper__W, 2),
              start_x = _helpers_ArcHelper__W2[0],
              start_y = _helpers_ArcHelper__W2[1];

          var _helpers_ArcHelper__W3 = _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].getCoorinatesOfElement(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[1]),
              _helpers_ArcHelper__W4 = _slicedToArray(_helpers_ArcHelper__W3, 2),
              end_x = _helpers_ArcHelper__W4[0],
              end_y = _helpers_ArcHelper__W4[1];

          var _helpers_ArcHelper__W5 = _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].connectToNearestEnd(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0], start_x, start_y, end_x, end_y);

          var _helpers_ArcHelper__W6 = _slicedToArray(_helpers_ArcHelper__W5, 4);

          start_x = _helpers_ArcHelper__W6[0];
          start_y = _helpers_ArcHelper__W6[1];
          end_x = _helpers_ArcHelper__W6[2];
          end_y = _helpers_ArcHelper__W6[3];
          var arc = document.createElementNS("http://www.w3.org/2000/svg", "line");
          var cursors = document.getElementById('cursors');
          arc.setAttribute("id", this.id);
          arc.setAttribute("class", "net-element arc");
          arc.setAttribute("x1", start_x.toString());
          arc.setAttribute("y1", start_y.toString());
          arc.setAttribute("x2", end_x.toString());
          arc.setAttribute("y2", end_y.toString());
          arc.setAttribute("stroke", "black");
          arc.setAttribute("stroke-width", "1");
          arc.setAttribute("marker-end", "url(#arrow)");
          document.getElementById("svg-board").insertBefore(arc, cursors);
          this.selectedElementEvents();
        }
      }, {
        key: "move",
        value: function move() {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "selectedElementEvents",
        value: function selectedElementEvents() {
          var _this4 = this;

          var arc = document.getElementById(this.getDomID());
          jquery__WEBPACK_IMPORTED_MODULE_2__(arc).off('dblclick');
          jquery__WEBPACK_IMPORTED_MODULE_2__(arc).on('dblclick', function () {
            if (arc.classList.contains('selected')) {
              _this4.unselect(arc);
            } else {
              _this4.select(arc);
            }
          });
        }
      }, {
        key: "select",
        value: function select(arc) {
          arc.classList.add('selected');
          arc.setAttribute('stroke', 'red');

          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements.push(arc.getAttribute('id'));
        }
      }, {
        key: "unselect",
        value: function unselect(arc) {
          arc.classList.remove('selected');
          arc.setAttribute('stroke', 'black');

          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectedElementFromListByID(arc.getAttribute('id'));
        }
      }, {
        key: "getDomID",
        value: function getDomID() {
          return arc_id_prefix + this.id;
        }
      }]);

      return Arc;
    }();
    /***/

  },

  /***/
  "./src/app/api/models/Place.ts":
  /*!*************************************!*\
    !*** ./src/app/api/models/Place.ts ***!
    \*************************************/

  /*! exports provided: Place */

  /***/
  function srcAppApiModelsPlaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Place", function () {
      return Place;
    });
    /* harmony import */


    var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../helpers/BoardHelper */
    "./src/app/api/helpers/BoardHelper.ts");
    /* harmony import */


    var _helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../helpers/PlaceHelper */
    "./src/app/api/helpers/PlaceHelper.ts");

    var place_id_prefix = 'place-';

    var Place = /*#__PURE__*/function () {
      function Place(id) {
        _classCallCheck(this, Place);

        this.color = 'white';
        this.id = id;
      }

      _createClass(Place, [{
        key: "getID",
        value: function getID() {
          return this.id;
        }
      }, {
        key: "create",
        value: function create(x, y) {
          _helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_1__["PlaceHelper"].createPlaceWtihLabel(this.id, x - 205, y - 25);

          this.attachListeners();
        }
      }, {
        key: "attachListeners",
        value: function attachListeners() {
          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].selectedElementEvent();

          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].moveElementEvent();
        }
      }, {
        key: "getDomID",
        value: function getDomID() {
          return place_id_prefix + this.id;
        }
      }]);

      return Place;
    }();
    /***/

  },

  /***/
  "./src/app/api/models/Token.ts":
  /*!*************************************!*\
    !*** ./src/app/api/models/Token.ts ***!
    \*************************************/

  /*! exports provided: Token */

  /***/
  function srcAppApiModelsTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Token", function () {
      return Token;
    });
    /* harmony import */


    var _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../helpers/TokenHelper */
    "./src/app/api/helpers/TokenHelper.ts");

    var place_id_prefix = 'token-';

    var Token = /*#__PURE__*/function () {
      function Token(id) {
        _classCallCheck(this, Token);

        this.id = id;
      }

      _createClass(Token, [{
        key: "getID",
        value: function getID() {
          return this.id;
        }
      }, {
        key: "create",
        value: function create(x, y) {
          _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__["TokenHelper"].createToken(this.id, x - 170, y); // this.attachListeners();

        }
      }, {
        key: "attachListeners",
        value: function attachListeners() {// BoardHelper.selectedElementEvent();
          // BoardHelper.moveElementEvent();
        }
      }, {
        key: "getDomID",
        value: function getDomID() {
          return place_id_prefix + this.id;
        }
      }]);

      return Token;
    }();
    /***/

  },

  /***/
  "./src/app/api/models/Transition.ts":
  /*!******************************************!*\
    !*** ./src/app/api/models/Transition.ts ***!
    \******************************************/

  /*! exports provided: Transition */

  /***/
  function srcAppApiModelsTransitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transition", function () {
      return Transition;
    });
    /* harmony import */


    var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../helpers/BoardHelper */
    "./src/app/api/helpers/BoardHelper.ts");
    /* harmony import */


    var _helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../helpers/TransitionHelper */
    "./src/app/api/helpers/TransitionHelper.ts");

    var transition_id_prefix = 'transition-';

    var Transition = /*#__PURE__*/function () {
      function Transition(id) {
        _classCallCheck(this, Transition);

        this.color = "white";
        this.id = id;
      }

      _createClass(Transition, [{
        key: "getID",
        value: function getID() {
          return this.id;
        }
      }, {
        key: "create",
        value: function create(x_position, y_position) {
          _helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_1__["TransitionHelper"].createTransitionWithLabel(this.id, x_position - 240, y_position - 40);

          this.attachListeners();
        }
      }, {
        key: "attachListeners",
        value: function attachListeners() {
          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].selectedElementEvent();

          _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].moveElementEvent();
        }
      }, {
        key: "getDomID",
        value: function getDomID() {
          return transition_id_prefix + this.id;
        }
      }]);

      return Transition;
    }();
    /***/

  },

  /***/
  "./src/app/api/repositories/ArcRepository.ts":
  /*!***************************************************!*\
    !*** ./src/app/api/repositories/ArcRepository.ts ***!
    \***************************************************/

  /*! exports provided: ArcRepository */

  /***/
  function srcAppApiRepositoriesArcRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcRepository", function () {
      return ArcRepository;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/Arc */
    "./src/app/api/models/Arc.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var ArcRepository = /*#__PURE__*/function () {
      function ArcRepository(snackBar) {
        _classCallCheck(this, ArcRepository);

        this.snackBar = snackBar;
      }

      _createClass(ArcRepository, [{
        key: "create",
        value: function create() {
          // let selectedElements: Element[] = BoardHelper.getSelectedElementsWithoutLabels();
          // let isValid = this.validateConnection(selectedElements);
          // if(isValid) {
          var arc = new _models_Arc__WEBPACK_IMPORTED_MODULE_1__["Arc"](); // id of start and end element

          arc.create(); // BoardHelper.removeSelection();
          // }
        }
      }, {
        key: "validateConnection",
        value: function validateConnection(selectedElements) {
          if (!this.validateNumberOfElements(selectedElements) || !this.validateObjectsType(selectedElements) || !this.validateIfElementIsArc(selectedElements)) {
            return false;
          }

          return true;
        }
      }, {
        key: "validateNumberOfElements",
        value: function validateNumberOfElements(selectedElements) {
          if (selectedElements.length !== 2) {
            this.snackBar.open("Bad number of elements selected. Please select exactly 2 elements!", "Got it!", {
              panelClass: ['error']
            });
            return false;
          }

          return true;
        }
      }, {
        key: "validateObjectsType",
        value: function validateObjectsType(selectedElements) {
          if (selectedElements[0].getAttribute('class') === selectedElements[1].getAttribute('class')) {
            this.snackBar.open("Cannot connect two elements of same type!", "Got it!", {
              panelClass: ['error']
            });
            return false;
          }

          return true;
        }
      }, {
        key: "validateIfElementIsArc",
        value: function validateIfElementIsArc(selectedElements) {
          if (selectedElements[0].getAttribute('class').includes('arc') || selectedElements[1].getAttribute('class').includes('arc')) {
            this.snackBar.open("Cannot connect two elements of same type!", "Got it!", {
              panelClass: ['error']
            });
            return false;
          }

          return true;
        }
      }]);

      return ArcRepository;
    }();

    ArcRepository.ɵfac = function ArcRepository_Factory(t) {
      return new (t || ArcRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    ArcRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArcRepository,
      factory: ArcRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArcRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/repositories/NetRepository.ts":
  /*!***************************************************!*\
    !*** ./src/app/api/repositories/NetRepository.ts ***!
    \***************************************************/

  /*! exports provided: NetRepository */

  /***/
  function srcAppApiRepositoriesNetRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetRepository", function () {
      return NetRepository;
    });
    /* harmony import */


    var _TokenRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TokenRepository */
    "./src/app/api/repositories/TokenRepository.ts");
    /* harmony import */


    var _ArcRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ArcRepository */
    "./src/app/api/repositories/ArcRepository.ts");
    /* harmony import */


    var _TransitionRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./TransitionRepository */
    "./src/app/api/repositories/TransitionRepository.ts");
    /* harmony import */


    var _PlaceRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./PlaceRepository */
    "./src/app/api/repositories/PlaceRepository.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NetRepository = /*#__PURE__*/function () {
      function NetRepository(placeRepository, transitionRepository, arcRepository, tokenRepository) {
        _classCallCheck(this, NetRepository);

        this.placeRepository = placeRepository;
        this.transitionRepository = transitionRepository;
        this.arcRepository = arcRepository;
        this.tokenRepository = tokenRepository;
        this.selectedElements = [];
      }

      _createClass(NetRepository, [{
        key: "createPlace",
        value: function createPlace(x, y) {
          this.placeRepository.create(x, y);
        }
      }, {
        key: "createTransition",
        value: function createTransition(x, y) {
          this.transitionRepository.create(x, y);
        }
      }, {
        key: "createArc",
        value: function createArc() {
          this.arcRepository.create();
        }
      }, {
        key: "createToken",
        value: function createToken(id, x, y) {
          this.tokenRepository.create(id, x, y);
        }
      }, {
        key: "removeAllElements",
        value: function removeAllElements() {
          this.placeRepository.removeAll();
          this.transitionRepository.removeAll();
        }
      }]);

      return NetRepository;
    }();

    NetRepository.ɵfac = function NetRepository_Factory(t) {
      return new (t || NetRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_PlaceRepository__WEBPACK_IMPORTED_MODULE_3__["PlaceRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_TransitionRepository__WEBPACK_IMPORTED_MODULE_2__["TransitionRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ArcRepository__WEBPACK_IMPORTED_MODULE_1__["ArcRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_TokenRepository__WEBPACK_IMPORTED_MODULE_0__["TokenRepository"]));
    };

    NetRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: NetRepository,
      factory: NetRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NetRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _PlaceRepository__WEBPACK_IMPORTED_MODULE_3__["PlaceRepository"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_PlaceRepository__WEBPACK_IMPORTED_MODULE_3__["PlaceRepository"]]
          }]
        }, {
          type: _TransitionRepository__WEBPACK_IMPORTED_MODULE_2__["TransitionRepository"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_TransitionRepository__WEBPACK_IMPORTED_MODULE_2__["TransitionRepository"]]
          }]
        }, {
          type: _ArcRepository__WEBPACK_IMPORTED_MODULE_1__["ArcRepository"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ArcRepository__WEBPACK_IMPORTED_MODULE_1__["ArcRepository"]]
          }]
        }, {
          type: _TokenRepository__WEBPACK_IMPORTED_MODULE_0__["TokenRepository"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_TokenRepository__WEBPACK_IMPORTED_MODULE_0__["TokenRepository"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/repositories/PlaceRepository.ts":
  /*!*****************************************************!*\
    !*** ./src/app/api/repositories/PlaceRepository.ts ***!
    \*****************************************************/

  /*! exports provided: PlaceRepository */

  /***/
  function srcAppApiRepositoriesPlaceRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceRepository", function () {
      return PlaceRepository;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/Place */
    "./src/app/api/models/Place.ts");

    var PlaceRepository = /*#__PURE__*/function () {
      function PlaceRepository() {
        _classCallCheck(this, PlaceRepository);

        this.places = [];
        this.current_id = 1;
      }

      _createClass(PlaceRepository, [{
        key: "create",
        value: function create(x, y) {
          var place = new _models_Place__WEBPACK_IMPORTED_MODULE_1__["Place"](this.current_id);
          place.create(x, y);
          this.current_id++;
          this.places.push(place);
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.places = [];
          this.current_id = 1;
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.places;
        }
      }, {
        key: "getByID",
        value: function getByID(id) {
          return this.places.find(function (place) {
            return place.getID() === id;
          });
        }
      }, {
        key: "deleteElementByID",
        value: function deleteElementByID(id) {
          var index = this.places.indexOf(this.getByID(id));

          if (index !== -1) {
            this.places.splice(index, 1);
          }
        }
      }]);

      return PlaceRepository;
    }();

    PlaceRepository.ɵfac = function PlaceRepository_Factory(t) {
      return new (t || PlaceRepository)();
    };

    PlaceRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlaceRepository,
      factory: PlaceRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/repositories/TokenRepository.ts":
  /*!*****************************************************!*\
    !*** ./src/app/api/repositories/TokenRepository.ts ***!
    \*****************************************************/

  /*! exports provided: TokenRepository */

  /***/
  function srcAppApiRepositoriesTokenRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenRepository", function () {
      return TokenRepository;
    });
    /* harmony import */


    var _models_Token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../models/Token */
    "./src/app/api/models/Token.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenRepository = /*#__PURE__*/function () {
      function TokenRepository() {
        _classCallCheck(this, TokenRepository);

        this.tokens = [];
      }

      _createClass(TokenRepository, [{
        key: "create",
        value: function create(id, x, y) {
          var token = new _models_Token__WEBPACK_IMPORTED_MODULE_0__["Token"](id);
          token.create(x, y);
          this.tokens.push(token);
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.tokens = [];
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.tokens;
        }
      }, {
        key: "getByID",
        value: function getByID(id) {
          return this.tokens.find(function (place) {
            return place.getID() === id;
          });
        }
      }, {
        key: "deleteElementByID",
        value: function deleteElementByID(id) {
          var index = this.tokens.indexOf(this.getByID(id));

          if (index !== -1) {
            this.tokens.splice(index, 1);
          }
        }
      }]);

      return TokenRepository;
    }();

    TokenRepository.ɵfac = function TokenRepository_Factory(t) {
      return new (t || TokenRepository)();
    };

    TokenRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TokenRepository,
      factory: TokenRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/repositories/TransitionRepository.ts":
  /*!**********************************************************!*\
    !*** ./src/app/api/repositories/TransitionRepository.ts ***!
    \**********************************************************/

  /*! exports provided: TransitionRepository */

  /***/
  function srcAppApiRepositoriesTransitionRepositoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionRepository", function () {
      return TransitionRepository;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/Transition */
    "./src/app/api/models/Transition.ts");

    var TransitionRepository = /*#__PURE__*/function () {
      function TransitionRepository() {
        _classCallCheck(this, TransitionRepository);

        this.transitions = [];
        this.current_id = 1;
      }

      _createClass(TransitionRepository, [{
        key: "create",
        value: function create(x, y) {
          var transition = new _models_Transition__WEBPACK_IMPORTED_MODULE_1__["Transition"](this.current_id);
          transition.create(x, y);
          this.current_id++;
          this.transitions.push(transition);
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.transitions = [];
          this.current_id = 1;
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.transitions;
        }
      }, {
        key: "getByID",
        value: function getByID(id) {
          return this.transitions.find(function (transition) {
            return transition.getID() === id;
          });
        }
      }, {
        key: "deleteElementByID",
        value: function deleteElementByID(id) {
          var index = this.transitions.indexOf(this.getByID(id));

          if (index !== -1) {
            this.transitions.splice(index, 1);
          }
        }
      }]);

      return TransitionRepository;
    }();

    TransitionRepository.ɵfac = function TransitionRepository_Factory(t) {
      return new (t || TransitionRepository)();
    };

    TransitionRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TransitionRepository,
      factory: TransitionRepository.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransitionRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app/components/dialogs/clear-board-dialog/clear-board-dialog.component */
    "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app/app.component */
    "./src/app/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app/components/board/side-menu/menu-step-one/menu-step-one.component */
    "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts");
    /* harmony import */


    var _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app/components/board/side-menu/menu-step-two/menu-step-two.component */
    "./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts");
    /* harmony import */


    var _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app/components/board/side-menu/menu-step-three/menu-step-three.component */
    "./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts");
    /* harmony import */


    var _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app/components/board/board.component */
    "./src/app/app/components/board/board.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"], _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__["MenuStepOneComponent"], _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__["MenuStepTwoComponent"], _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__["MenuStepThreeComponent"], _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"], _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__["MenuStepOneComponent"], _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__["MenuStepTwoComponent"], _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__["MenuStepThreeComponent"], _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]],
          providers: [],
          bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          entryComponents: [_app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/app.component.ts":
  /*!**************************************!*\
    !*** ./src/app/app/app.component.ts ***!
    \**************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../api/helpers/TransitionHelper */
    "./src/app/api/helpers/TransitionHelper.ts");
    /* harmony import */


    var _api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api/repositories/NetRepository */
    "./src/app/api/repositories/NetRepository.ts");
    /* harmony import */


    var _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/helpers/BoardHelper */
    "./src/app/api/helpers/BoardHelper.ts");
    /* harmony import */


    var _api_helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/helpers/PlaceHelper */
    "./src/app/api/helpers/PlaceHelper.ts");
    /* harmony import */


    var _components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dialogs/clear-board-dialog/clear-board-dialog.component */
    "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/board/side-menu/menu-step-one/menu-step-one.component */
    "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts");
    /* harmony import */


    var _components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/board/side-menu/menu-step-two/menu-step-two.component */
    "./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts");
    /* harmony import */


    var _components_board_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/board/board.component */
    "./src/app/app/components/board/board.component.ts");

    function AppComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Create");
      }
    }

    function AppComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Net");
      }
    }

    function AppComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Sim");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dialog, snackBar, netRepository) {
        _classCallCheck(this, AppComponent);

        this.dialog = dialog;
        this.snackBar = snackBar;
        this.title = 'Petri Nets Creator';
        this.netRepository = netRepository;
        this.setDefaultCursor();
        this.keyPressEventsHandler();
        this.cursorImageMove();
      }

      _createClass(AppComponent, [{
        key: "setDefaultCursor",
        value: function setDefaultCursor() {
          jquery__WEBPACK_IMPORTED_MODULE_6__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).off('click');
          this.placeCursor = false;
          this.transitionCursor = false;
          this.arcCursor = false;
          this.tokenCursor = false;
          this.deleteCursor = false;
          this.cursorImageMove();
        }
      }, {
        key: "cursorImageMove",
        value: function cursorImageMove() {
          jquery__WEBPACK_IMPORTED_MODULE_6__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).on('mousemove', function (event) {
            var element = document.getElementById('cursor-image');

            if (element.classList.contains('cursor-place')) {
              jquery__WEBPACK_IMPORTED_MODULE_6__(element).attr('cx', event.pageX - 200);
              jquery__WEBPACK_IMPORTED_MODULE_6__(element).attr('cy', event.pageY - 20);
            } else if (element.classList.contains('cursor-transition') || element.classList.contains('cursor-arc') || element.classList.contains('cursor-token') || element.classList.contains('cursor-delete')) {
              jquery__WEBPACK_IMPORTED_MODULE_6__(element).attr('x', event.pageX - 235);
              jquery__WEBPACK_IMPORTED_MODULE_6__(element).attr('y', event.pageY - 35);
            }
          });
        }
      }, {
        key: "addPlace",
        value: function addPlace() {
          var _this5 = this;

          this.setDefaultCursor();
          this.placeCursor = true;
          jquery__WEBPACK_IMPORTED_MODULE_6__('.net-element').off('dblclick');
          jquery__WEBPACK_IMPORTED_MODULE_6__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).on('click', function (event) {
            _this5.netRepository.createPlace(event.pageX, event.pageY);
          });
        }
      }, {
        key: "addTransition",
        value: function addTransition() {
          var _this6 = this;

          this.setDefaultCursor();
          this.transitionCursor = true;
          jquery__WEBPACK_IMPORTED_MODULE_6__('.net-element').off('dblclick');
          jquery__WEBPACK_IMPORTED_MODULE_6__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).on('click', function (event) {
            _this6.netRepository.createTransition(event.pageX, event.pageY);
          });
        }
      }, {
        key: "addArc",
        value: function addArc() {
          var _this7 = this;

          // when label clicked select element
          // align items 
          this.setDefaultCursor();
          this.arcCursor = true;
          jquery__WEBPACK_IMPORTED_MODULE_6__('.net-element').off('click');
          Array.from(document.getElementsByClassName('net-element')).forEach(function (element) {
            jquery__WEBPACK_IMPORTED_MODULE_6__(element).on('dblclick', function () {
              jquery__WEBPACK_IMPORTED_MODULE_6__(element).off('dblclick');

              _this7.cursorImageMove();

              if (element.classList.contains('place')) {
                _api_helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_3__["PlaceHelper"].setDisabledCursor();

                Array.from(_api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].getAll()).forEach(function (transition) {
                  jquery__WEBPACK_IMPORTED_MODULE_6__(transition).on('dblclick', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_6__(transition).off('dblclick');

                    _this7.netRepository.createArc();

                    _this7.resetArcCreation();
                  });
                });
              } else if (element.classList.contains('transition')) {
                _api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].setDisabledCursor();

                Array.from(_api_helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_3__["PlaceHelper"].getAll()).forEach(function (place) {
                  jquery__WEBPACK_IMPORTED_MODULE_6__(place).on('dblclick', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_6__(place).off('dblclick');

                    _this7.netRepository.createArc();

                    _this7.resetArcCreation();
                  });
                });
              }
            });
          });
        }
      }, {
        key: "addToken",
        value: function addToken() {
          var _this8 = this;

          this.setDefaultCursor();
          this.tokenCursor = true;
          jquery__WEBPACK_IMPORTED_MODULE_6__('.net-element').off('click');
          jquery__WEBPACK_IMPORTED_MODULE_6__('.place').on('click', function (event) {
            var id = parseInt(event.target.getAttribute('id').split('-')[1]);
            var x = parseInt(event.target.getAttribute('cx'));
            var y = parseInt(event.target.getAttribute('cy'));

            if (document.getElementById("token-" + id) === null) {
              _this8.netRepository.createToken(id, x + 170, y);
            } else {
              _this8.snackBar.open("Cannot create second token in the same place!", "Got it!", {
                panelClass: ['error']
              });
            }

            _this8.cursorImageMove();
          });
        }
      }, {
        key: "deleteElement",
        value: function deleteElement() {
          var _this9 = this;

          this.setDefaultCursor();
          this.deleteCursor = true;
          jquery__WEBPACK_IMPORTED_MODULE_6__('.net-element').on('click', function (event) {
            var elementID = event.target.getAttribute('id');

            var _elementID$split = elementID.split('-'),
                _elementID$split2 = _slicedToArray(_elementID$split, 2),
                elementType = _elementID$split2[0],
                ID = _elementID$split2[1];

            var labelID = 'label-' + elementID;

            var board = _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard();

            board.removeChild(event.target);
            board.removeChild(document.getElementById(labelID));

            if (elementType === 'place') {
              _this9.netRepository.placeRepository.deleteElementByID(parseInt(ID));
            } else if (elementType === 'transition') {
              _this9.netRepository.transitionRepository.deleteElementByID(parseInt(ID));
            }

            _this9.cursorImageMove();
          });
        }
      }, {
        key: "justifyElements",
        value: function justifyElements() {
          this.snackBar.open("Justify Elements!", "close", {
            duration: 2000
          });
        }
      }, {
        key: "resetArcCreation",
        value: function resetArcCreation() {
          _api_helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_3__["PlaceHelper"].setPointerCursor();

          _api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].setPointerCursor();

          _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].removeSelection();

          _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].selectedElementEvent();

          this.addArc();
        }
      }, {
        key: "keyPressEventsHandler",
        value: function keyPressEventsHandler() {
          var _this10 = this;

          jquery__WEBPACK_IMPORTED_MODULE_6__(document).off('keypress');
          jquery__WEBPACK_IMPORTED_MODULE_6__(document).on('keydown', function (event) {
            if (event.keyCode === 27) {
              _this10.setDefaultCursor();

              Array.from(document.getElementsByClassName('net-element')).forEach(function (element) {
                jquery__WEBPACK_IMPORTED_MODULE_6__(element).off('dblclick');
              });
              jquery__WEBPACK_IMPORTED_MODULE_6__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).off('mousemove');

              _api_helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_3__["PlaceHelper"].setPointerCursor();

              _api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].setPointerCursor();

              _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].removeSelection();

              _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].moveElementEvent();

              _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].selectedElementEvent();
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_6__(document).on('keypress', function (event) {
            if (event.which === 65 || event.which == 97) {
              // a/A
              _this10.addArc();
            } else if (event.which === 80 || event.which == 112) {
              // p/P
              _this10.addPlace();
            } else if (event.which === 84 || event.which == 116) {
              // t/T
              _this10.addTransition();
            } else if (event.which === 83 || event.which == 115) {
              // s/S
              _this10.addToken();
            } else if (event.which === 8 || event.which === 100) {
              // d/D
              _this10.deleteElement();
            }
          });
        }
      }, {
        key: "undo",
        value: function undo() {
          this.snackBar.open("Undo operation has been performed!", "close", {
            duration: 2000
          });
        }
      }, {
        key: "saveNet",
        value: function saveNet() {
          this.snackBar.open("Net Model saved!", "close", {
            duration: 2000
          });
        }
      }, {
        key: "createPdf",
        value: function createPdf() {
          this.snackBar.open("PDF Created!", "close", {
            duration: 2000
          });
        }
      }, {
        key: "openClearBoardDialog",
        value: function openClearBoardDialog() {
          var _this11 = this;

          this.clearBoardDialogRef = this.dialog.open(_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ClearBoardDialogComponent"]);
          this.clearBoardDialogRef.afterClosed().subscribe(function (shouldClearBoard) {
            if (shouldClearBoard) {
              _this11.clear();

              _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].addArrowHeadMarker();

              _this11.netRepository.removeAllElements();
            }
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          var board = _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard();

          while (board.firstChild) {
            board.removeChild(board.firstChild);
          }

          _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].selectedElements = [];
          this.snackBar.open("Board has been cleared!", "close", {
            duration: 2000
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 5,
      consts: [["id", "content"], ["id", "sidebar"], ["id", "stepper", "labelPosition", "bottom"], ["matStepLabel", ""], [3, "addPlace", "addTransition", "addArc", "addToken", "justifyElements", "deleteElement"], [3, "placeCursor", "transitionCursor", "arcCursor", "tokenCursor", "deleteCursor", "openClearBoardDialog", "saveNet", "createPdf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-horizontal-stepper", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-menu-step-one", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addPlace", function AppComponent_Template_app_menu_step_one_addPlace_5_listener() {
            return ctx.addPlace();
          })("addTransition", function AppComponent_Template_app_menu_step_one_addTransition_5_listener() {
            return ctx.addTransition();
          })("addArc", function AppComponent_Template_app_menu_step_one_addArc_5_listener() {
            return ctx.addArc();
          })("addToken", function AppComponent_Template_app_menu_step_one_addToken_5_listener() {
            return ctx.addToken();
          })("justifyElements", function AppComponent_Template_app_menu_step_one_justifyElements_5_listener() {
            return ctx.justifyElements();
          })("deleteElement", function AppComponent_Template_app_menu_step_one_deleteElement_5_listener() {
            return ctx.deleteElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 1, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-menu-step-two");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 1, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "app-board", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openClearBoardDialog", function AppComponent_Template_app_board_openClearBoardDialog_11_listener() {
            return ctx.openClearBoardDialog();
          })("saveNet", function AppComponent_Template_app_board_saveNet_11_listener() {
            return ctx.saveNet();
          })("createPdf", function AppComponent_Template_app_board_createPdf_11_listener() {
            return ctx.createPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeCursor", ctx.placeCursor)("transitionCursor", ctx.transitionCursor)("arcCursor", ctx.arcCursor)("tokenCursor", ctx.tokenCursor)("deleteCursor", ctx.deleteCursor);
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepLabel"], _components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__["MenuStepOneComponent"], _components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__["MenuStepTwoComponent"], _components_board_board_component__WEBPACK_IMPORTED_MODULE_12__["BoardComponent"]],
      styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  #sidebar[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 200px;\n    min-width: 200px;\n    height: 100vh;\n    overflow: auto;\n    background-color: #023E7D;\n  }\n\n  [_nghost-%COMP%]     .mat-horizontal-content-container {\n    padding:0 !important;\n  }\n\n    snack-bar-container.error {\n    background-color: red;\n    color: white;    \n  }\n\n    snack-bar-container.error button {\n      background-color:red;\n      color: white;\n  }\n\n  #stepper[_ngcontent-%COMP%] {\n    background-color: #023E7D;\n  }\n\n  .mat-step-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  \n\n    .mat-horizontal-stepper-header {\n  box-sizing: border-box;\n  flex-direction: column-reverse !important;\n  height: auto;\n  padding: 24px;\n}\n\n    .mat-horizontal-stepper-header .mat-step-label {\n  padding: 0px 0px 16px !important;\n}\n\n    .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,   .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after{\n  top: 68px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO01BQ0ksb0JBQW9CO01BQ3BCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUEsc0NBQXNDOztFQUN4QztFQUNFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGFBQWE7QUFDZjs7RUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjc2lkZWJhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyM0U3RDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTsgICAgXG4gIH1cblxuICA6Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5lcnJvciBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAjc3RlcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyM0U3RDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAvKiogY3VzdG9tIENTUyBhcyBwZXIgeW91ciA6cmVxdWlyZWQgKi9cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMTZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6bm90KDpmaXJzdC1jaGlsZCk6OmJlZm9yZSwgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVye1xuICB0b3A6IDY4cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: _api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/components/board/board.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/app/components/board/board.component.ts ***!
    \*********************************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppAppComponentsBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BoardComponent__svg_svg_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BoardComponent__svg_svg_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BoardComponent__svg_svg_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BoardComponent__svg_svg_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BoardComponent__svg_svg_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.createPdfEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveNetEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openClearBoardDialogEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPdf",
        value: function createPdf() {
          this.createPdfEmitter.emit();
        }
      }, {
        key: "saveNet",
        value: function saveNet() {
          this.saveNetEmitter.emit();
        }
      }, {
        key: "openClearBoardDialog",
        value: function openClearBoardDialog() {
          this.openClearBoardDialogEmitter.emit();
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)();
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      inputs: {
        placeCursor: "placeCursor",
        transitionCursor: "transitionCursor",
        arcCursor: "arcCursor",
        tokenCursor: "tokenCursor",
        deleteCursor: "deleteCursor"
      },
      outputs: {
        createPdfEmitter: "createPdf",
        saveNetEmitter: "saveNet",
        openClearBoardDialogEmitter: "openClearBoardDialog"
      },
      decls: 21,
      vars: 5,
      consts: [["id", "board"], ["id", "board-header"], ["matTooltip", "Create PDF", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["matTooltip", "Save Net", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["matTooltip", "Clear Board", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["id", "svg-board"], ["id", "cursors"], [4, "ngIf"], ["id", "cursor-image", "class", "cursor-arc", "x", "-100", "y", "-100", 4, "ngIf"], ["id", "cursor-image", "class", "cursor-token", "x", "-100", "y", "-100", 4, "ngIf"], ["id", "cursor-image", "class", "cursor-delete", "x", "-100", "y", "-100", 4, "ngIf"], ["id", "arrow", "viewBox", "0 0 10 10", "refX", "1", "refY", "5", "markerUnits", "strokeWidth", "markerWidth", "10", "markerHeight", "10", "orient", "auto"], ["d", "M 0 0 L 10 5 L 0 10 z", "fill", "black"], ["id", "cursor-image", "cx", "-100", "cy", "-100", "r", "25", "stroke", "black", "stroke-width", "2", "fill", "white", 1, "cursor-place"], ["id", "cursor-image", "x", "-100", "y", "-100", "width", "70", "height", "20", "stroke", "black", "stroke-width", "2", "fill", "white", 1, "cursor-transition"], ["id", "cursor-image", "x", "-100", "y", "-100", 1, "cursor-arc"], ["fill", "none", "height", "24", "width", "24"], ["d", "M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z"], ["id", "cursor-image", "x", "-100", "y", "-100", 1, "cursor-token"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["cx", "12", "cy", "12", "r", "10"], ["id", "cursor-image", "x", "-100", "y", "-100", 1, "cursor-delete"], ["d", "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_3_listener() {
            return ctx.createPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "picture_as_pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_6_listener() {
            return ctx.saveNet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "save_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_9_listener() {
            return ctx.openClearBoardDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BoardComponent__svg_svg_13_Template, 2, 0, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BoardComponent__svg_svg_14_Template, 2, 0, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BoardComponent__svg_svg_15_Template, 3, 0, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BoardComponent__svg_svg_16_Template, 3, 0, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BoardComponent__svg_svg_17_Template, 3, 0, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "marker", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.placeCursor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transitionCursor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arcCursor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenCursor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteCursor);
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["#board-header[_ngcontent-%COMP%] {\n    height: 30px;\n    display: flex; \n    justify-content: flex-end;\n    width: (100vw - 200px);\n    background-color: #0466C8;\n  }\n\n  #board[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: calc(100vw - 200px);\n    height: calc(100vh - 5px);\n  }\n\n  .board-button[_ngcontent-%COMP%] {\n    margin: 5px;\n    color: white;\n  }\n\n  .board-button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  #svg-board[_ngcontent-%COMP%] {\n    height: calc(100% - 30px);\n    width: calc(100%);\n  }\n\n  .net-element[_ngcontent-%COMP%]:hover {\n    cursor: move;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjYm9hcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogKDEwMHZ3IC0gMjAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDY2Qzg7XG4gIH1cblxuICAjYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXB4KTtcbiAgfVxuXG4gIC5ib2FyZC1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ib2FyZC1idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICNzdmctYm9hcmQge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gIH1cblxuICAubmV0LWVsZW1lbnQ6aG92ZXIge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.css']
        }]
      }], function () {
        return [];
      }, {
        createPdfEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["createPdf"]
        }],
        saveNetEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["saveNet"]
        }],
        openClearBoardDialogEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["openClearBoardDialog"]
        }],
        placeCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arcCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tokenCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MenuStepOneComponent */

  /***/
  function srcAppAppComponentsBoardSideMenuMenuStepOneMenuStepOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuStepOneComponent", function () {
      return MenuStepOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var MenuStepOneComponent = /*#__PURE__*/function () {
      function MenuStepOneComponent() {
        _classCallCheck(this, MenuStepOneComponent);

        this.addNewPlace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNewTransition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNewArc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNewToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNetElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.justifyNetElements = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenuStepOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addPlace",
        value: function addPlace() {
          this.addNewPlace.emit();
        }
      }, {
        key: "addTransition",
        value: function addTransition() {
          this.addNewTransition.emit();
        }
      }, {
        key: "addArc",
        value: function addArc() {
          this.addNewArc.emit();
        }
      }, {
        key: "addToken",
        value: function addToken() {
          this.addNewToken.emit();
        }
      }, {
        key: "deleteElement",
        value: function deleteElement() {
          this.deleteNetElement.emit();
        }
      }, {
        key: "justifyElements",
        value: function justifyElements() {
          this.justifyNetElements.emit();
        }
      }]);

      return MenuStepOneComponent;
    }();

    MenuStepOneComponent.ɵfac = function MenuStepOneComponent_Factory(t) {
      return new (t || MenuStepOneComponent)();
    };

    MenuStepOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuStepOneComponent,
      selectors: [["app-menu-step-one"]],
      outputs: {
        addNewPlace: "addPlace",
        addNewTransition: "addTransition",
        addNewArc: "addArc",
        addNewToken: "addToken",
        deleteNetElement: "deleteElement",
        justifyNetElements: "justifyElements"
      },
      decls: 41,
      vars: 0,
      consts: [[1, "card-container"], ["tabindex", "0", 1, "card", "card-small"], [1, "material-icons"], [1, "button-text"], ["matTooltip", "Create Place", "matTooltipPosition", "above", 1, "square-link", 3, "click"], [1, "material-icons", "net-elements-icons"], ["matTooltip", "Create Transition", "matTooltipPosition", "above", 1, "square-link", 3, "click"], [1, "net-elements-icons", "transition-icon"], ["matTooltip", "Create Arc", "matTooltipPosition", "above", 1, "square-link", 3, "click"], ["matTooltip", "Add Token", "matTooltipPosition", "above", 1, "square-link", 3, "click"], [1, "material-icons", "net-elements-icons", "token-icon"], ["matTooltip", "Delete Element", "matTooltipPosition", "above", 1, "square-link", 3, "click"], ["tabindex", "0", 1, "card", "card-small", 3, "click"]],
      template: function MenuStepOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "library_books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Saved Nets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create from Matrix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "remove_red_eye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show Net Matrix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_20_listener() {
            return ctx.addPlace();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "panorama_fish_eye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_23_listener() {
            return ctx.addTransition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_26_listener() {
            return ctx.addArc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "north_east");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_29_listener() {
            return ctx.addToken();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "brightness_1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_32_listener() {
            return ctx.deleteElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_div_click_36_listener() {
            return ctx.justifyElements();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "format_align_justify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Justify Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]],
      styles: ["#stepper[_ngcontent-%COMP%] {\n    background-color: #023E7D;\n  }\n\n  .button-text[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    justify-content: left !important;\n  }\n\n  .board-button[_ngcontent-%COMP%] {\n    margin: 5px;\n    color: white;\n  }\n\n  .board-button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .transition-icon[_ngcontent-%COMP%] {\n    background-color: black;\n    width: 36px;\n    height: 12px;\n  }\n\n  .net-elements-icons[_ngcontent-%COMP%] {\n    font-size: 36px;\n    color: black;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 36px;\n    width: 200px;\n    margin: 0 8px 8px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .square-link[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 36px;\n    width: 36px;\n    margin: 5px;\n    background-color: white !important;\n    background-size: 60%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .square-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n  }\n\n  .token-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvc2lkZS1tZW51L21lbnUtc3RlcC1vbmUvbWVudS1zdGVwLW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9zaWRlLW1lbnUvbWVudS1zdGVwLW9uZS9tZW51LXN0ZXAtb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICNzdGVwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzRTdEO1xuICB9XG5cbiAgLmJ1dHRvbi10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJvYXJkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmJvYXJkLWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnRyYW5zaXRpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG5cbiAgLm5ldC1lbGVtZW50cy1pY29ucyB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogMzZweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCA4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLmNhcmQtc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgfVxuXG5cbiAgLnNxdWFyZS1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3F1YXJlLWxpbms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAudG9rZW4taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-step-one',
          templateUrl: './menu-step-one.component.html',
          styleUrls: ['./menu-step-one.component.css']
        }]
      }], function () {
        return [];
      }, {
        addNewPlace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["addPlace"]
        }],
        addNewTransition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["addTransition"]
        }],
        addNewArc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["addArc"]
        }],
        addNewToken: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["addToken"]
        }],
        deleteNetElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["deleteElement"]
        }],
        justifyNetElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["justifyElements"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MenuStepThreeComponent */

  /***/
  function srcAppAppComponentsBoardSideMenuMenuStepThreeMenuStepThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuStepThreeComponent", function () {
      return MenuStepThreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuStepThreeComponent = /*#__PURE__*/function () {
      function MenuStepThreeComponent() {
        _classCallCheck(this, MenuStepThreeComponent);
      }

      _createClass(MenuStepThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuStepThreeComponent;
    }();

    MenuStepThreeComponent.ɵfac = function MenuStepThreeComponent_Factory(t) {
      return new (t || MenuStepThreeComponent)();
    };

    MenuStepThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuStepThreeComponent,
      selectors: [["app-menu-step-three"]],
      decls: 2,
      vars: 0,
      template: function MenuStepThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu-step-three works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3NpZGUtbWVudS9tZW51LXN0ZXAtdGhyZWUvbWVudS1zdGVwLXRocmVlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-step-three',
          templateUrl: './menu-step-three.component.html',
          styleUrls: ['./menu-step-three.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MenuStepTwoComponent */

  /***/
  function srcAppAppComponentsBoardSideMenuMenuStepTwoMenuStepTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuStepTwoComponent", function () {
      return MenuStepTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var MenuStepTwoComponent = /*#__PURE__*/function () {
      function MenuStepTwoComponent() {
        _classCallCheck(this, MenuStepTwoComponent);
      }

      _createClass(MenuStepTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuStepTwoComponent;
    }();

    MenuStepTwoComponent.ɵfac = function MenuStepTwoComponent_Factory(t) {
      return new (t || MenuStepTwoComponent)();
    };

    MenuStepTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuStepTwoComponent,
      selectors: [["app-menu-step-two"]],
      decls: 17,
      vars: 0,
      consts: [[1, "card-container"], ["tabindex", "0", 1, "card", "card-small"], [1, "material-icons"], [1, "button-text"], ["matTooltip", "Previous", "matTooltipPosition", "above", 1, "square-link"], [1, "material-icons", "net-elements-icons"], ["matTooltip", "Run Transition", "matTooltipPosition", "above", 1, "square-link"], [1, "material-icons", "net-elements-icons", "token-icon"], ["matTooltip", "Reset Simulation", "matTooltipPosition", "above", 1, "square-link"]],
      template: function MenuStepTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "fast_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Auto Simultaion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "fast_rewind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "play_arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "replay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]],
      styles: [".button-text[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n\n  .net-elements-icons[_ngcontent-%COMP%] {\n    font-size: 36px;\n    color: black;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    justify-content: left !important;\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .square-link[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 36px;\n    width: 36px;\n    margin: 5px;\n    background-color: white !important;\n    background-size: 60%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .square-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvc2lkZS1tZW51L21lbnUtc3RlcC10d28vbWVudS1zdGVwLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3NpZGUtbWVudS9tZW51LXN0ZXAtdHdvL21lbnUtc3RlcC10d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmJ1dHRvbi10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLm5ldC1lbGVtZW50cy1pY29ucyB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuc3F1YXJlLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5zcXVhcmUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-step-two',
          templateUrl: './menu-step-two.component.html',
          styleUrls: ['./menu-step-two.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ClearBoardDialogComponent */

  /***/
  function srcAppAppComponentsDialogsClearBoardDialogClearBoardDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearBoardDialogComponent", function () {
      return ClearBoardDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_prebuilt_themes_indigo_pink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/prebuilt-themes/indigo-pink.css */
    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ClearBoardDialogComponent = /*#__PURE__*/function () {
      function ClearBoardDialogComponent(dialogRef) {
        _classCallCheck(this, ClearBoardDialogComponent);

        this.dialogRef = dialogRef;
        this.deleteChanges = false;
      }

      _createClass(ClearBoardDialogComponent, [{
        key: "delete",
        value: function _delete() {
          this.deleteChanges = true;
          this.dialogRef.close(this.deleteChanges);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close(this.deleteChanges);
        }
      }]);

      return ClearBoardDialogComponent;
    }();

    ClearBoardDialogComponent.ɵfac = function ClearBoardDialogComponent_Factory(t) {
      return new (t || ClearBoardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    ClearBoardDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClearBoardDialogComponent,
      selectors: [["ng-component"]],
      decls: 10,
      vars: 0,
      consts: [["mat-dialog-title", ""], ["mat-raised-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function ClearBoardDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete all elements?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This will delete all elements that are currently on this page and cannot be undone.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearBoardDialogComponent_Template_button_click_6_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Keep Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearBoardDialogComponent_Template_button_click_8_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9jbGVhci1ib2FyZC1kaWFsb2cvY2xlYXItYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2RpYWxvZ3MvY2xlYXItYm9hcmQtZGlhbG9nL2NsZWFyLWJvYXJkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearBoardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './clear-board-dialog.component.html',
          styleUrls: ['./clear-board-dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/shared/constants.ts":
  /*!*****************************************!*\
    !*** ./src/app/app/shared/constants.ts ***!
    \*****************************************/

  /*! exports provided: place_radius, place_fill_color, token_radius, token_fill_color, transition_width, transition_height */

  /***/
  function srcAppAppSharedConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "place_radius", function () {
      return place_radius;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "place_fill_color", function () {
      return place_fill_color;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "token_radius", function () {
      return token_radius;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "token_fill_color", function () {
      return token_fill_color;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transition_width", function () {
      return transition_width;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transition_height", function () {
      return transition_height;
    });

    var place_radius = 25;
    var place_fill_color = "white";
    var token_radius = 10;
    var token_fill_color = "black";
    var transition_width = 70;
    var transition_height = 20;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/compiler */
    "./node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Grzegorz/Desktop/Petri-Net-Creator/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map