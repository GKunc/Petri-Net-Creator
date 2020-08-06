(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/helpers/ArcHelper.ts":
/*!******************************************!*\
  !*** ./src/app/api/helpers/ArcHelper.ts ***!
  \******************************************/
/*! exports provided: ArcHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcHelper", function() { return ArcHelper; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ArcHelper {
    static moveArrow(id) {
        ArcHelper.getConnectedArrowsIDs(id).forEach(arrowID => {
            let startID = arrowID.split(":")[0];
            let endID = arrowID.split(":")[1];
            let [x1, y1] = this.getCoorinatesOfElement(startID);
            let [x2, y2] = this.getCoorinatesOfElement(endID);
            [x1, y1, x2, y2] = this.connectToNearestEnd(startID, x1, y1, x2, y2);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("x1", x1);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("y1", y1);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("x2", x2);
            jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementById(arrowID)).attr("y2", y2);
        });
    }
    static getConnectedArrowsIDs(id) {
        let allArrows = Array.from(document.getElementsByClassName("arc"));
        let connectedElementsIDs = [];
        allArrows.forEach(arrow => {
            let arrowID = arrow.getAttribute('id');
            let startID = arrowID.split(":")[0];
            let endID = arrowID.split(":")[1];
            if (startID === id || endID === id) {
                connectedElementsIDs.push(arrowID);
            }
        });
        return connectedElementsIDs;
    }
    static getCoorinatesOfElement(id) {
        let x, y;
        let element = document.getElementById(id);
        if (element.getAttribute("id").includes("place")) {
            x = parseInt(element.getAttribute('cx'));
            y = parseInt(element.getAttribute('cy'));
        }
        else {
            x = parseInt(element.getAttribute('x'));
            y = parseInt(element.getAttribute('y'));
        }
        return [x, y];
    }
    static connectToNearestEnd(start_id, start_x, start_y, end_x, end_y) {
        if (start_id.includes('place')) {
            [start_x, start_y, end_x, end_y] =
                this.adjustArrowPosition('place', start_x, start_y, end_x, end_y);
        }
        else if (start_id.includes('transition')) {
            [start_x, start_y, end_x, end_y] =
                this.adjustArrowPosition('transition', start_x, start_y, end_x, end_y);
        }
        return [start_x, start_y, end_x, end_y];
    }
    static adjustArrowPosition(start_id, start_x, start_y, end_x, end_y) {
        if (start_x - end_x > -80 && start_x - end_x < 100) {
            if (start_y - end_y < 0) {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceTop(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionTop(start_x, start_y, end_x, end_y);
                }
            }
            else {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceBottom(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionBottom(start_x, start_y, end_x, end_y);
                }
            }
        }
        else if (start_y - end_y > -80 && start_y - end_y < 100) {
            if (start_x - end_x < 0) {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceLeft(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionLeft(start_x, start_y, end_x, end_y);
                }
            }
            else {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceRight(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionRight(start_x, start_y, end_x, end_y);
                }
            }
        }
        else if (start_x - end_x < -80) {
            if (start_y - end_y < 50) {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceTopLeft(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionTopLeft(start_x, start_y, end_x, end_y);
                }
            }
            else {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceBottomLeft(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionBottomLeft(start_x, start_y, end_x, end_y);
                }
            }
        }
        else if (start_x - end_x > 100) {
            if (start_y - end_y < 50) {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceTopRight(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionTopRight(start_x, start_y, end_x, end_y);
                }
            }
            else {
                if (start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceBottomRight(start_x, start_y, end_x, end_y);
                }
                else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionBottomRight(start_x, start_y, end_x, end_y);
                }
            }
        }
        else {
            alert('Unhandled position');
        }
        return [start_x, start_y, end_x, end_y];
    }
    ///////////////////////
    // Place Adjustments //
    ///////////////////////
    static adjustPlaceTop(start_x, start_y, end_x, end_y) {
        return [start_x, start_y + 30, end_x + 35, end_y - 3];
    }
    static adjustPlaceTopLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 21.2, start_y + 21.2, end_x + 25, end_y - 3];
    }
    static adjustPlaceTopRight(start_x, start_y, end_x, end_y) {
        return [start_x - 21.2, start_y + 21.2, end_x + 45, end_y - 3];
    }
    static adjustPlaceBottom(start_x, start_y, end_x, end_y) {
        return [start_x, start_y - 30, end_x + 35, end_y + 25];
    }
    static adjustPlaceBottomLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 21.2, start_y - 21.2, end_x + 25, end_y + 23];
    }
    static adjustPlaceBottomRight(start_x, start_y, end_x, end_y) {
        return [start_x - 21.2, start_y - 21.2, end_x + 45, end_y + 25];
    }
    static adjustPlaceLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 30, start_y, end_x - 8, end_y + 12];
    }
    static adjustPlaceRight(start_x, start_y, end_x, end_y) {
        return [start_x - 30, start_y, end_x + 75, end_y + 10];
    }
    ////////////////////////////
    // Transition Adjustments //
    ////////////////////////////
    static adjustTransitionTop(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y + 20, end_x, end_y - 39];
    }
    static adjustTransitionTopLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y + 20, end_x - 30, end_y - 25];
    }
    static adjustTransitionTopRight(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y + 20, end_x + 30, end_y - 25];
    }
    static adjustTransitionBottom(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y, end_x, end_y + 35];
    }
    static adjustTransitionBottomLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y, end_x - 30, end_y + 25];
    }
    static adjustTransitionBottomRight(start_x, start_y, end_x, end_y) {
        return [start_x + 35, start_y, end_x + 30, end_y + 25];
    }
    static adjustTransitionLeft(start_x, start_y, end_x, end_y) {
        return [start_x + 70, start_y + 10, end_x - 39, end_y];
    }
    static adjustTransitionRight(start_x, start_y, end_x, end_y) {
        return [start_x, start_y + 10, end_x + 39, end_y];
    }
}


/***/ }),

/***/ "./src/app/api/helpers/BoardHelper.ts":
/*!********************************************!*\
  !*** ./src/app/api/helpers/BoardHelper.ts ***!
  \********************************************/
/*! exports provided: BoardHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardHelper", function() { return BoardHelper; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class BoardHelper {
    static setDefualtCursor() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.getBoard()).off('click');
        let classList = this.getBoard().classList;
        if (classList.contains('cursor-place')) {
            this.getBoard().classList.remove('cursor-place');
        }
        else if (classList.contains('cursor-transition')) {
            this.getBoard().classList.remove('cursor-transition');
        }
        else if (classList.contains('cursor-arc')) {
            this.getBoard().classList.remove('cursor-arc');
        }
    }
    static getSelectedElements() {
        return document.getElementsByClassName('selected');
    }
    static getSelectedElementsWithoutLabels() {
        return Array.from(this.getSelectedElements()).filter(selectedEelemnt => {
            return !selectedEelemnt.getAttribute('id').startsWith('label');
        });
    }
    static removeSelection() {
        Array.from(this.getSelectedElements()).forEach(element => {
            element.classList.remove('selected');
            if (!element.getAttribute('id').includes('label')) {
                element.setAttribute('stroke', 'black');
            }
        });
        this.selectedElements = [];
    }
    static getBoard() {
        return document.getElementById('svg-board');
    }
    static removeSelectionOfLabel(element) {
        element.addEventListener('mousedown', function (e) {
            if (e.detail > 1) {
                e.preventDefault();
            }
        });
    }
    static addArrowHeadMarker() {
        let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        let marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
        marker.setAttribute("id", "arrow");
        marker.setAttribute("viewBox", "0 0 10 10");
        marker.setAttribute("refX", "1");
        marker.setAttribute("refY", "5");
        marker.setAttribute("markerWidth", "10");
        marker.setAttribute("markerHeight", "10");
        marker.setAttribute("orient", "auto");
        let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
        path.setAttribute("fill", "black;");
        marker.appendChild(path);
        defs.appendChild(marker);
        this.getBoard().appendChild(defs);
    }
    static removeSelectedElementFromListByID(id) {
        let index = this.selectedElements.indexOf(id);
        if (index !== -1) {
            this.selectedElements.splice(index, 1);
        }
    }
}
BoardHelper.selectedElements = [];


/***/ }),

/***/ "./src/app/api/helpers/PlaceHelper.ts":
/*!********************************************!*\
  !*** ./src/app/api/helpers/PlaceHelper.ts ***!
  \********************************************/
/*! exports provided: PlaceHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHelper", function() { return PlaceHelper; });
/* harmony import */ var _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/shared/constants */ "./src/app/app/shared/constants.ts");
/* harmony import */ var _BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");


class PlaceHelper {
    static getAll() {
        return document.getElementsByClassName('place');
    }
    static createPlaceWtihLabel(id, x_position, y_position) {
        let place = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        place.setAttribute("id", "place-" + id);
        place.setAttribute("class", "net-element place");
        place.setAttribute("cx", x_position.toString());
        place.setAttribute("cy", y_position.toString());
        place.setAttribute("r", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["place_radius"].toString());
        place.setAttribute("stroke", "black");
        place.setAttribute("stroke-width", '2');
        place.setAttribute("fill", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["place_fill_color"]);
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("id", "label-place-" + id);
        text.setAttribute("x", x_position.toString());
        text.setAttribute("y", y_position.toString());
        text.setAttribute("fill", "black");
        text.setAttribute("dy", ".3em");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20px");
        text.innerHTML = 'p' + id;
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].getBoard().append(place);
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].getBoard().append(text);
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectionOfLabel(place);
    }
    static movePlaceWithLabel(place, label, x_position, y_position) {
        const x = (x_position - 200);
        const y = (y_position - 15);
        place.setAttribute('cx', x.toString());
        place.setAttribute('cy', y.toString());
        label.setAttribute('x', x.toString());
        label.setAttribute('y', y.toString());
    }
    static getPlacePositionByID(id) {
        let domID = "place-" + id;
        let domElement = document.getElementById(domID);
        return [parseInt(domElement.getAttribute('cx')), parseInt(domElement.getAttribute('cy'))];
    }
}


/***/ }),

/***/ "./src/app/api/helpers/TransitionHelper.ts":
/*!*************************************************!*\
  !*** ./src/app/api/helpers/TransitionHelper.ts ***!
  \*************************************************/
/*! exports provided: TransitionHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHelper", function() { return TransitionHelper; });
/* harmony import */ var _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/shared/constants */ "./src/app/app/shared/constants.ts");
/* harmony import */ var _BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");


class TransitionHelper {
    static getAll() {
        return document.getElementsByClassName('transition');
    }
    static createTransitionWithLabel(id, x_position, y_position) {
        let transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        transition.setAttribute("id", "transition-" + id);
        transition.setAttribute("class", "net-element transition");
        transition.setAttribute("x", x_position.toString());
        transition.setAttribute("y", y_position.toString());
        transition.setAttribute("width", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["transition_width"].toString());
        transition.setAttribute("height", _app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["transition_height"].toString());
        transition.setAttribute("stroke", 'black');
        transition.setAttribute("stroke-width", '2');
        transition.setAttribute("fill", 'white');
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("id", "label-transition-" + id);
        text.setAttribute("x", (x_position + 35).toString());
        text.setAttribute("y", (y_position + 10).toString());
        text.setAttribute("fill", "black");
        text.setAttribute("dy", ".3em");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20px");
        text.innerHTML = 't' + id;
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].getBoard().append(transition);
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].getBoard().append(text);
        _BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectionOfLabel(transition);
    }
    static moveTransitionWithLabel(transition, label, x_position, y_position) {
        transition.setAttribute('x', (x_position - 235).toString());
        transition.setAttribute('y', (y_position - 35).toString());
        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 25).toString());
    }
    static getPlaceTransitionByID(id) {
        let domID = "transition-" + id;
        let domElement = document.getElementById(domID);
        return [parseInt(domElement.getAttribute('x')), parseInt(domElement.getAttribute('y'))];
    }
}


/***/ }),

/***/ "./src/app/api/models/Arc.ts":
/*!***********************************!*\
  !*** ./src/app/api/models/Arc.ts ***!
  \***********************************/
/*! exports provided: Arc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony import */ var _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/ArcHelper */ "./src/app/api/helpers/ArcHelper.ts");
/* harmony import */ var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



const arc_id_prefix = 'arc-';
class Arc {
    constructor() {
        this.color = "black";
        this.id =
            document.getElementById(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0]).getAttribute('id') +
                ':' +
                document.getElementById(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[1]).getAttribute('id');
    }
    getID() {
        return this.id;
    }
    create() {
        let [start_x, start_y] = _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].getCoorinatesOfElement(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0]);
        let [end_x, end_y] = _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].getCoorinatesOfElement(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[1]);
        [start_x, start_y, end_x, end_y] =
            _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].connectToNearestEnd(_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements[0], start_x, start_y, end_x, end_y);
        let arc = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arc.setAttribute("id", this.id);
        arc.setAttribute("class", "net-element arc");
        arc.setAttribute("x1", start_x.toString());
        arc.setAttribute("y1", start_y.toString());
        arc.setAttribute("x2", end_x.toString());
        arc.setAttribute("y2", end_y.toString());
        arc.setAttribute("stroke", "black");
        arc.setAttribute("stroke-width", "1");
        arc.setAttribute("marker-end", "url(#arrow)");
        document.getElementById("svg-board").append(arc);
        this.selectedElementEvents();
    }
    move() {
        throw new Error("Method not implemented.");
    }
    selectedElementEvents() {
        let arc = document.getElementById(this.getDomID());
        jquery__WEBPACK_IMPORTED_MODULE_2__(arc).off('dblclick');
        jquery__WEBPACK_IMPORTED_MODULE_2__(arc).on('dblclick', () => {
            if (arc.classList.contains('selected')) {
                this.unselect(arc);
            }
            else {
                this.select(arc);
            }
        });
    }
    select(arc) {
        arc.classList.add('selected');
        arc.setAttribute('stroke', 'red');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements.push(arc.getAttribute('id'));
    }
    unselect(arc) {
        arc.classList.remove('selected');
        arc.setAttribute('stroke', 'black');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectedElementFromListByID(arc.getAttribute('id'));
    }
    getDomID() {
        return arc_id_prefix + this.id;
    }
}


/***/ }),

/***/ "./src/app/api/models/Place.ts":
/*!*************************************!*\
  !*** ./src/app/api/models/Place.ts ***!
  \*************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
/* harmony import */ var _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/ArcHelper */ "./src/app/api/helpers/ArcHelper.ts");
/* harmony import */ var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");
/* harmony import */ var _helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/PlaceHelper */ "./src/app/api/helpers/PlaceHelper.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




const place_id_prefix = 'place-';
class Place {
    constructor(id) {
        this.color = 'white';
        this.id = id;
    }
    getID() {
        return this.id;
    }
    create(x, y) {
        _helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_2__["PlaceHelper"].createPlaceWtihLabel(this.id, x - 170, y);
        this.attachListeners();
    }
    selectedElementEvents() {
        let place = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        jquery__WEBPACK_IMPORTED_MODULE_3__(place).off('dblclick');
        jquery__WEBPACK_IMPORTED_MODULE_3__(place).on('dblclick', () => {
            if (place.classList.contains('selected')) {
                this.unselect(place, label);
            }
            else {
                this.select(place, label);
            }
        });
    }
    select(place, label) {
        place.classList.add('selected');
        label.classList.add('selected');
        place.setAttribute('stroke', 'red');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements.push(place.getAttribute('id'));
    }
    unselect(place, label) {
        place.classList.remove('selected');
        label.classList.remove('selected');
        place.setAttribute('stroke', 'black');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectedElementFromListByID(place.getAttribute('id'));
    }
    move() {
        let place = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        let board = document.getElementById('svg-board');
        jquery__WEBPACK_IMPORTED_MODULE_3__(place).off('mousedown');
        jquery__WEBPACK_IMPORTED_MODULE_3__(place).on('mousedown', () => {
            place.classList.add('active');
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).off('mousemove');
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).on('mousemove', (event) => {
                _helpers_PlaceHelper__WEBPACK_IMPORTED_MODULE_2__["PlaceHelper"].movePlaceWithLabel(place, label, event.pageX, event.pageY);
                _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].moveArrow(this.getDomID());
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).off('mouseup');
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).on('mouseup', () => {
                jquery__WEBPACK_IMPORTED_MODULE_3__(board).off('mousemove');
                place.classList.remove('active');
            });
        });
    }
    // probably should move to upper class and use this method
    connect() {
        throw new Error("Method not implemented.");
    }
    attachListeners() {
        this.selectedElementEvents();
        this.move();
    }
    getDomID() {
        return place_id_prefix + this.id;
    }
}


/***/ }),

/***/ "./src/app/api/models/Transition.ts":
/*!******************************************!*\
  !*** ./src/app/api/models/Transition.ts ***!
  \******************************************/
/*! exports provided: Transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony import */ var _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/ArcHelper */ "./src/app/api/helpers/ArcHelper.ts");
/* harmony import */ var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");
/* harmony import */ var _helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/TransitionHelper */ "./src/app/api/helpers/TransitionHelper.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




const transition_id_prefix = 'transition-';
class Transition {
    constructor(id) {
        this.color = "white";
        this.id = id;
    }
    getID() {
        return this.id;
    }
    create(x_position, y_position) {
        _helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_2__["TransitionHelper"].createTransitionWithLabel(this.id, x_position - 200, y_position - 25);
        this.attachListeners();
    }
    selectedElementEvents() {
        let transition = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        jquery__WEBPACK_IMPORTED_MODULE_3__(transition).off('dblclick');
        jquery__WEBPACK_IMPORTED_MODULE_3__(transition).on('dblclick', () => {
            if (transition.classList.contains('selected')) {
                this.unselect(transition, label);
            }
            else {
                this.select(transition, label);
            }
        });
    }
    select(transition, label) {
        transition.classList.add('selected');
        label.classList.add('selected');
        transition.setAttribute('stroke', 'red');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].selectedElements.push(transition.getAttribute('id'));
    }
    unselect(transition, label) {
        transition.classList.remove('selected');
        label.classList.remove('selected');
        transition.setAttribute('stroke', 'black');
        _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_1__["BoardHelper"].removeSelectedElementFromListByID(transition.getAttribute('id'));
    }
    move() {
        let transition = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        let board = document.getElementById('svg-board');
        jquery__WEBPACK_IMPORTED_MODULE_3__(transition).off('mousedown');
        transition.addEventListener('mousedown', () => {
            transition.classList.add('active');
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).on('mousemove', (event) => {
                _helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_2__["TransitionHelper"].moveTransitionWithLabel(transition, label, event.pageX, event.pageY);
                _helpers_ArcHelper__WEBPACK_IMPORTED_MODULE_0__["ArcHelper"].moveArrow(this.getDomID());
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(board).on('mouseup', () => {
                jquery__WEBPACK_IMPORTED_MODULE_3__(board).off('mousemove');
                transition.classList.remove('active');
            });
        });
    }
    attachListeners() {
        this.selectedElementEvents();
        this.move();
    }
    getDomID() {
        return transition_id_prefix + this.id;
    }
}


/***/ }),

/***/ "./src/app/api/repositories/ArcRepository.ts":
/*!***************************************************!*\
  !*** ./src/app/api/repositories/ArcRepository.ts ***!
  \***************************************************/
/*! exports provided: ArcRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcRepository", function() { return ArcRepository; });
/* harmony import */ var _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Arc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/Arc */ "./src/app/api/models/Arc.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





class ArcRepository {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    create() {
        let selectedElements = _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].getSelectedElementsWithoutLabels();
        let isValid = this.validateConnection(selectedElements);
        if (isValid) {
            let arc = new _models_Arc__WEBPACK_IMPORTED_MODULE_2__["Arc"](); // id of start and end element
            arc.create();
            _helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_0__["BoardHelper"].removeSelection();
        }
    }
    validateConnection(selectedElements) {
        if (!this.validateNumberOfElements(selectedElements) ||
            !this.validateObjectsType(selectedElements) ||
            !this.validateIfElementIsArc(selectedElements)) {
            return false;
        }
        return true;
    }
    validateNumberOfElements(selectedElements) {
        if (selectedElements.length !== 2) {
            this.snackBar.open("Bad number of elements selected. Please select exactly 2 elements!", "Got it!", { panelClass: ['error'] });
            return false;
        }
        return true;
    }
    validateObjectsType(selectedElements) {
        if (selectedElements[0].getAttribute('class') === selectedElements[1].getAttribute('class')) {
            this.snackBar.open("Cannot connect two elements of same type!", "Got it!", { panelClass: ['error'] });
            return false;
        }
        return true;
    }
    validateIfElementIsArc(selectedElements) {
        if (selectedElements[0].getAttribute('class').includes('arc') || selectedElements[1].getAttribute('class').includes('arc')) {
            this.snackBar.open("Cannot connect two elements of same type!", "Got it!", { panelClass: ['error'] });
            return false;
        }
        return true;
    }
}
ArcRepository.ɵfac = function ArcRepository_Factory(t) { return new (t || ArcRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ArcRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArcRepository, factory: ArcRepository.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArcRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/api/repositories/NetRepository.ts":
/*!***************************************************!*\
  !*** ./src/app/api/repositories/NetRepository.ts ***!
  \***************************************************/
/*! exports provided: NetRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetRepository", function() { return NetRepository; });
/* harmony import */ var _ArcRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArcRepository */ "./src/app/api/repositories/ArcRepository.ts");
/* harmony import */ var _TransitionRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransitionRepository */ "./src/app/api/repositories/TransitionRepository.ts");
/* harmony import */ var _PlaceRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceRepository */ "./src/app/api/repositories/PlaceRepository.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








class NetRepository {
    constructor(placeRepository, transitionRepository, arcRepository) {
        this.placeRepository = placeRepository;
        this.transitionRepository = transitionRepository;
        this.arcRepository = arcRepository;
        this.selectedElements = [];
    }
    createPlace(x, y) {
        this.placeRepository.create(x, y);
    }
    createTransition(x, y) {
        this.transitionRepository.create(x, y);
    }
    createArc() {
        this.arcRepository.create();
    }
    removeAllElements() {
        this.placeRepository.removeAll();
        this.transitionRepository.removeAll();
    }
}
NetRepository.ɵfac = function NetRepository_Factory(t) { return new (t || NetRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_PlaceRepository__WEBPACK_IMPORTED_MODULE_2__["PlaceRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_TransitionRepository__WEBPACK_IMPORTED_MODULE_1__["TransitionRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ArcRepository__WEBPACK_IMPORTED_MODULE_0__["ArcRepository"])); };
NetRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NetRepository, factory: NetRepository.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NetRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _PlaceRepository__WEBPACK_IMPORTED_MODULE_2__["PlaceRepository"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_PlaceRepository__WEBPACK_IMPORTED_MODULE_2__["PlaceRepository"]]
            }] }, { type: _TransitionRepository__WEBPACK_IMPORTED_MODULE_1__["TransitionRepository"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_TransitionRepository__WEBPACK_IMPORTED_MODULE_1__["TransitionRepository"]]
            }] }, { type: _ArcRepository__WEBPACK_IMPORTED_MODULE_0__["ArcRepository"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_ArcRepository__WEBPACK_IMPORTED_MODULE_0__["ArcRepository"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/api/repositories/PlaceRepository.ts":
/*!*****************************************************!*\
  !*** ./src/app/api/repositories/PlaceRepository.ts ***!
  \*****************************************************/
/*! exports provided: PlaceRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceRepository", function() { return PlaceRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/Place */ "./src/app/api/models/Place.ts");



class PlaceRepository {
    constructor() {
        this.places = [];
        this.current_id = 1;
    }
    create(x, y) {
        let place = new _models_Place__WEBPACK_IMPORTED_MODULE_1__["Place"](this.current_id);
        place.create(x, y);
        this.current_id++;
        this.places.push(place);
    }
    removeAll() {
        this.places = [];
        this.current_id = 1;
    }
    getAll() {
        return this.places;
    }
    getByID(id) {
        return this.places.find(place => place.getID() === id);
    }
    deleteElementByID(id) {
        let index = this.places.indexOf(this.getByID(id));
        if (index !== -1) {
            this.places.splice(index, 1);
        }
    }
}
PlaceRepository.ɵfac = function PlaceRepository_Factory(t) { return new (t || PlaceRepository)(); };
PlaceRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlaceRepository, factory: PlaceRepository.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/api/repositories/TransitionRepository.ts":
/*!**********************************************************!*\
  !*** ./src/app/api/repositories/TransitionRepository.ts ***!
  \**********************************************************/
/*! exports provided: TransitionRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionRepository", function() { return TransitionRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/Transition */ "./src/app/api/models/Transition.ts");



class TransitionRepository {
    constructor() {
        this.transitions = [];
        this.current_id = 1;
    }
    create(x, y) {
        let transition = new _models_Transition__WEBPACK_IMPORTED_MODULE_1__["Transition"](this.current_id);
        transition.create(x, y);
        this.current_id++;
        this.transitions.push(transition);
    }
    removeAll() {
        this.transitions = [];
        this.current_id = 1;
    }
    getAll() {
        return this.transitions;
    }
    getByID(id) {
        return this.transitions.find(transition => transition.getID() === id);
    }
    deleteElementByID(id) {
        let index = this.transitions.indexOf(this.getByID(id));
        if (index !== -1) {
            this.transitions.splice(index, 1);
        }
    }
}
TransitionRepository.ɵfac = function TransitionRepository_Factory(t) { return new (t || TransitionRepository)(); };
TransitionRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransitionRepository, factory: TransitionRepository.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransitionRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/components/dialogs/clear-board-dialog/clear-board-dialog.component */ "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/components/board/side-menu/menu-step-one/menu-step-one.component */ "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts");
/* harmony import */ var _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/components/board/side-menu/menu-step-two/menu-step-two.component */ "./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts");
/* harmony import */ var _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/components/board/side-menu/menu-step-three/menu-step-three.component */ "./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts");
/* harmony import */ var _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/components/board/board.component */ "./src/app/app/components/board/board.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"],
        _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__["MenuStepOneComponent"],
        _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__["MenuStepTwoComponent"],
        _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__["MenuStepThreeComponent"],
        _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"],
                    _app_components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_10__["MenuStepOneComponent"],
                    _app_components_board_side_menu_menu_step_two_menu_step_two_component__WEBPACK_IMPORTED_MODULE_11__["MenuStepTwoComponent"],
                    _app_components_board_side_menu_menu_step_three_menu_step_three_component__WEBPACK_IMPORTED_MODULE_12__["MenuStepThreeComponent"],
                    _app_components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
                ],
                providers: [],
                bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                entryComponents: [_app_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClearBoardDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api/helpers/TransitionHelper */ "./src/app/api/helpers/TransitionHelper.ts");
/* harmony import */ var _api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/repositories/NetRepository */ "./src/app/api/repositories/NetRepository.ts");
/* harmony import */ var _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/helpers/BoardHelper */ "./src/app/api/helpers/BoardHelper.ts");
/* harmony import */ var _components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dialogs/clear-board-dialog/clear-board-dialog.component */ "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/board/side-menu/menu-step-one/menu-step-one.component */ "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/app/components/board/board.component.ts");













function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Create");
} }
function AppComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Inspect");
} }
function AppComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Simulate");
} }
class AppComponent {
    constructor(dialog, snackBar, netRepository) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.title = 'Petri Nets Creator';
        this.netRepository = netRepository;
        this.keyPressEventsHandler();
    }
    addPlace() {
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].setDefualtCursor();
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard().classList.add('cursor-place');
        jquery__WEBPACK_IMPORTED_MODULE_5__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).on('click', (event) => {
            this.netRepository.createPlace(event.pageX, event.pageY);
        });
    }
    addTransition() {
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].setDefualtCursor();
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard().classList.add('cursor-transition');
        jquery__WEBPACK_IMPORTED_MODULE_5__(_api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard()).on('click', (event) => {
            this.netRepository.createTransition(event.pageX, event.pageY);
        });
    }
    addArc() {
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].setDefualtCursor();
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard().classList.add('cursor-arc');
        let elements = document.getElementsByClassName('net-element');
        Array.from(elements).forEach(function (element) {
            element.addEventListener('dblclick', () => {
                if (element.classList.contains('place')) {
                    Array.from(_api_helpers_TransitionHelper__WEBPACK_IMPORTED_MODULE_0__["TransitionHelper"].getAll()).forEach(function (element) {
                        element.classList.add('disable-connection');
                    });
                    // get all transitions
                    // set cursor to disable
                    // when transition selected create arc
                }
                else if (element.classList.contains('transition')) {
                    alert('transition');
                }
            });
        });
        // this.netRepository.createArc();
    }
    keyPressEventsHandler() {
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).off('keypress');
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).on('keydown', (event) => {
            if (event.keyCode === 27) {
                _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].setDefualtCursor();
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).on('keypress', (event) => {
            if (event.which === 67 || event.which == 99) {
                this.addArc();
            }
            else if (event.which === 80 || event.which == 112) {
                this.addPlace();
            }
            else if (event.which === 84 || event.which == 116) {
                this.addTransition();
            }
            else if (event.which === 8 || event.which === 100) {
                this.deleteSelectedElements();
            }
        });
    }
    deleteSelectedElements() {
        let elements = _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getSelectedElements();
        let board = _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard();
        Array.from(elements).forEach(element => {
            board.removeChild(element);
            let id = element.getAttribute('id').split('-');
            if (id[0] === 'place') {
                this.netRepository.placeRepository.deleteElementByID(parseInt(id[1]));
            }
            else if (id[0] === 'transition') {
                this.netRepository.transitionRepository.deleteElementByID(parseInt(id[1]));
            }
        });
    }
    undo() {
        this.snackBar.open("Undo operation has been performed!", "close", {
            duration: 2000,
        });
    }
    saveNet() {
        this.snackBar.open("Net Model saved!", "close", {
            duration: 2000,
        });
    }
    createPdf() {
        this.snackBar.open("PDF Created!", "close", {
            duration: 2000,
        });
    }
    openClearBoardDialog() {
        this.clearBoardDialogRef = this.dialog.open(_components_dialogs_clear_board_dialog_clear_board_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ClearBoardDialogComponent"]);
        this.clearBoardDialogRef.afterClosed().subscribe(shouldClearBoard => {
            if (shouldClearBoard) {
                this.clear();
                _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].addArrowHeadMarker();
                this.netRepository.removeAllElements();
            }
        });
    }
    clear() {
        let board = _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].getBoard();
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        _api_helpers_BoardHelper__WEBPACK_IMPORTED_MODULE_2__["BoardHelper"].selectedElements = [];
        this.snackBar.open("Board has been cleared!", "close", {
            duration: 2000,
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["id", "content"], ["id", "sidebar"], ["id", "stepper", "labelPosition", "bottom"], ["matStepLabel", ""], [3, "addPlace", "addTransition", "addArc"], [3, "openClearBoardDialog", "saveNet", "createPdf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-horizontal-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-menu-step-one", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("addPlace", function AppComponent_Template_app_menu_step_one_addPlace_5_listener() { return ctx.addPlace(); })("addTransition", function AppComponent_Template_app_menu_step_one_addTransition_5_listener() { return ctx.addTransition(); })("addArc", function AppComponent_Template_app_menu_step_one_addArc_5_listener() { return ctx.addArc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AppComponent_ng_template_9_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-board", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openClearBoardDialog", function AppComponent_Template_app_board_openClearBoardDialog_10_listener() { return ctx.openClearBoardDialog(); })("saveNet", function AppComponent_Template_app_board_saveNet_10_listener() { return ctx.saveNet(); })("createPdf", function AppComponent_Template_app_board_createPdf_10_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _components_board_side_menu_menu_step_one_menu_step_one_component__WEBPACK_IMPORTED_MODULE_9__["MenuStepOneComponent"], _components_board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"]], styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  #sidebar[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 200px;\n    min-width: 200px;\n    height: 100vh;\n    background-color: #023E7D;\n  }\n\n  [_nghost-%COMP%]     .mat-horizontal-content-container {\n    padding:0 !important;\n  }\n\n    snack-bar-container.error {\n    background-color: red;\n    color: white;    \n  }\n\n    snack-bar-container.error button {\n      background-color:red;\n      color: white;\n  }\n\n  #stepper[_ngcontent-%COMP%] {\n    background-color: #023E7D;\n  }\n\n  .mat-step-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  \n\n    .mat-horizontal-stepper-header {\n  box-sizing: border-box;\n  flex-direction: column-reverse !important;\n  height: auto;\n  padding: 24px;\n}\n\n    .mat-horizontal-stepper-header .mat-step-label {\n  padding: 0px 0px 16px !important;\n}\n\n    .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,   .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after{\n  top: 68px !important;\n}\n\n  .net-element[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n  .disable-connection[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7TUFDSSxvQkFBb0I7TUFDcEIsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQSxzQ0FBc0M7O0VBQ3hDO0VBQ0Usc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osYUFBYTtBQUNmOztFQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztFQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjc2lkZWJhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyM0U3RDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTsgICAgXG4gIH1cblxuICA6Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5lcnJvciBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAjc3RlcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyM0U3RDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAvKiogY3VzdG9tIENTUyBhcyBwZXIgeW91ciA6cmVxdWlyZWQgKi9cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMTZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6bm90KDpmaXJzdC1jaGlsZCk6OmJlZm9yZSwgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVye1xuICB0b3A6IDY4cHggIWltcG9ydGFudDtcbn1cblxuLm5ldC1lbGVtZW50OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZS1jb25uZWN0aW9uOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_api_repositories_NetRepository__WEBPACK_IMPORTED_MODULE_1__["NetRepository"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/app/components/board/board.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/app/components/board/board.component.ts ***!
  \*********************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");



class BoardComponent {
    constructor() {
        this.createPdfEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveNetEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openClearBoardDialogEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    createPdf() {
        this.createPdfEmitter.emit();
    }
    saveNet() {
        this.saveNetEmitter.emit();
    }
    openClearBoardDialog() {
        this.openClearBoardDialogEmitter.emit();
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], outputs: { createPdfEmitter: "createPdf", saveNetEmitter: "saveNet", openClearBoardDialogEmitter: "openClearBoardDialog" }, decls: 15, vars: 0, consts: [["id", "board"], ["id", "board-header"], ["matTooltip", "Create PDF", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["matTooltip", "Save Net", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["matTooltip", "Clear Board", "matTooltipPosition", "below", 1, "material-icons", "board-button", 3, "click"], ["id", "svg-board"], ["id", "arrow", "viewBox", "0 0 10 10", "refX", "1", "refY", "5", "markerUnits", "strokeWidth", "markerWidth", "10", "markerHeight", "10", "orient", "auto"], ["d", "M 0 0 L 10 5 L 0 10 z", "fill", "black"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_3_listener() { return ctx.createPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_6_listener() { return ctx.saveNet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "save_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_span_click_9_listener() { return ctx.openClearBoardDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "marker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]], styles: ["#board-header[_ngcontent-%COMP%] {\n    height: 30px;\n    display: flex; \n    justify-content: flex-end;\n    width: (100vw - 200px);\n    background-color: #0466C8;\n  }\n\n  #board[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: calc(100vw - 200px);\n    height: calc(100vh - 5px);\n  }\n\n  .board-button[_ngcontent-%COMP%] {\n    margin: 5px;\n    color: white;\n  }\n\n  .board-button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  #svg-board[_ngcontent-%COMP%] {\n    height: calc(100% - 30px);\n    width: calc(100%);\n  }\n\n  .net-element[_ngcontent-%COMP%]:hover {\n    cursor: move;\n  }\n\n  .cursor-transition[_ngcontent-%COMP%] {\n    cursor: url('transitionCursor.ico'), auto;\n  }\n\n  .cursor-place[_ngcontent-%COMP%] {\n    cursor: url('placeCursor.ico'), auto;\n  }\n\n  .cursor-arc[_ngcontent-%COMP%] {\n    \n    cursor: url('arcCursor.ico') 10 10, auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUNBQTREO0VBQzlEOztFQUVBO0lBQ0Usb0NBQXVEO0VBQ3pEOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHdDQUEyRDtFQUM3RCIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI2JvYXJkLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6ICgxMDB2dyAtIDIwMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NkM4O1xuICB9XG5cbiAgI2JvYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDVweCk7XG4gIH1cblxuICAuYm9hcmQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYm9hcmQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAjc3ZnLWJvYXJkIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xuICB9XG5cbiAgLm5ldC1lbGVtZW50OmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cblxuICAuY3Vyc29yLXRyYW5zaXRpb24ge1xuICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvdHJhbnNpdGlvbkN1cnNvci5pY28nKSwgYXV0bztcbiAgfVxuXG4gIC5jdXJzb3ItcGxhY2Uge1xuICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGxhY2VDdXJzb3IuaWNvJyksIGF1dG87XG4gIH1cblxuICAuY3Vyc29yLWFyYyB7XG4gICAgLyogY3Vyc29yOiBncmFiOyAqL1xuICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYXJjQ3Vyc29yLmljbycpIDEwIDEwLCBhdXRvO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css']
            }]
    }], function () { return []; }, { createPdfEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["createPdf"]
        }], saveNetEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["saveNet"]
        }], openClearBoardDialogEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["openClearBoardDialog"]
        }] }); })();


/***/ }),

/***/ "./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/app/components/board/side-menu/menu-step-one/menu-step-one.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MenuStepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStepOneComponent", function() { return MenuStepOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");



class MenuStepOneComponent {
    constructor() {
        this.addNewPlace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNewTransition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addNewArc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addPlace() {
        this.addNewPlace.emit();
    }
    addTransition() {
        this.addNewTransition.emit();
    }
    addArc() {
        this.addNewArc.emit();
    }
}
MenuStepOneComponent.ɵfac = function MenuStepOneComponent_Factory(t) { return new (t || MenuStepOneComponent)(); };
MenuStepOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuStepOneComponent, selectors: [["app-menu-step-one"]], outputs: { addNewPlace: "addPlace", addNewTransition: "addTransition", addNewArc: "addArc" }, decls: 34, vars: 0, consts: [[1, "card-container"], ["tabindex", "0", 1, "card", "card-small"], [1, "material-icons"], [1, "button-text"], ["matTooltip", "Create Place", "matTooltipPosition", "above", 1, "square-link", 3, "click"], [1, "material-icons", "net-elements-icons"], ["matTooltip", "Create Transition", "matTooltipPosition", "above", 1, "square-link", 3, "click"], [1, "net-elements-icons", "transition-icon"], ["matTooltip", "Create Arc", "matTooltipPosition", "above", 1, "square-link", 3, "click"]], template: function MenuStepOneComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Minimize Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_26_listener() { return ctx.addPlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "panorama_fish_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_29_listener() { return ctx.addTransition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuStepOneComponent_Template_a_click_31_listener() { return ctx.addArc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "north_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]], styles: ["#sidebar[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 200px;\n    min-width: 200px;\n    height: 100vh;\n    background-color: #023E7D;\n  }\n\n  #stepper[_ngcontent-%COMP%] {\n    background-color: #023E7D;\n  }\n\n  .button-text[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    justify-content: left !important;\n  }\n\n  .board-button[_ngcontent-%COMP%] {\n    margin: 5px;\n    color: white;\n  }\n\n  .board-button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .transition-icon[_ngcontent-%COMP%] {\n    background-color: black;\n    width: 36px;\n    height: 12px;\n  }\n\n  .net-elements-icons[_ngcontent-%COMP%] {\n    font-size: 36px;\n    color: black;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .square-link[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 36px;\n    width: 36px;\n    margin: 5px;\n    background-color: white !important;\n    background-size: 60%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .square-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvYm9hcmQvc2lkZS1tZW51L21lbnUtc3RlcC1vbmUvbWVudS1zdGVwLW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsMENBQTBDO0VBQzVDOztFQUdBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsMkNBQTJDO0lBQzNDLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29tcG9uZW50cy9ib2FyZC9zaWRlLW1lbnUvbWVudS1zdGVwLW9uZS9tZW51LXN0ZXAtb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICNzaWRlYmFyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzRTdEO1xuICB9XG5cbiAgI3N0ZXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjNFN0Q7XG4gIH1cblxuICAuYnV0dG9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAuY2FyZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYm9hcmQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYm9hcmQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAudHJhbnNpdGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cblxuICAubmV0LWVsZW1lbnRzLWljb25zIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLmNhcmQtc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgfVxuXG5cbiAgLnNxdWFyZS1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3F1YXJlLWxpbms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-step-one',
                templateUrl: './menu-step-one.component.html',
                styleUrls: ['./menu-step-one.component.css']
            }]
    }], function () { return []; }, { addNewPlace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["addPlace"]
        }], addNewTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["addTransition"]
        }], addNewArc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["addArc"]
        }] }); })();


/***/ }),

/***/ "./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/app/components/board/side-menu/menu-step-three/menu-step-three.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MenuStepThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStepThreeComponent", function() { return MenuStepThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenuStepThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuStepThreeComponent.ɵfac = function MenuStepThreeComponent_Factory(t) { return new (t || MenuStepThreeComponent)(); };
MenuStepThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuStepThreeComponent, selectors: [["app-menu-step-three"]], decls: 2, vars: 0, template: function MenuStepThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu-step-three works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3NpZGUtbWVudS9tZW51LXN0ZXAtdGhyZWUvbWVudS1zdGVwLXRocmVlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-step-three',
                templateUrl: './menu-step-three.component.html',
                styleUrls: ['./menu-step-three.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/app/components/board/side-menu/menu-step-two/menu-step-two.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MenuStepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStepTwoComponent", function() { return MenuStepTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenuStepTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuStepTwoComponent.ɵfac = function MenuStepTwoComponent_Factory(t) { return new (t || MenuStepTwoComponent)(); };
MenuStepTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuStepTwoComponent, selectors: [["app-menu-step-two"]], decls: 2, vars: 0, template: function MenuStepTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu-step-two works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2JvYXJkL3NpZGUtbWVudS9tZW51LXN0ZXAtdHdvL21lbnUtc3RlcC10d28uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuStepTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-step-two',
                templateUrl: './menu-step-two.component.html',
                styleUrls: ['./menu-step-two.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/app/components/dialogs/clear-board-dialog/clear-board-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClearBoardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearBoardDialogComponent", function() { return ClearBoardDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_prebuilt_themes_indigo_pink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/prebuilt-themes/indigo-pink.css */ "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ClearBoardDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.deleteChanges = false;
    }
    delete() {
        this.deleteChanges = true;
        this.dialogRef.close(this.deleteChanges);
    }
    close() {
        this.dialogRef.close(this.deleteChanges);
    }
}
ClearBoardDialogComponent.ɵfac = function ClearBoardDialogComponent_Factory(t) { return new (t || ClearBoardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
ClearBoardDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClearBoardDialogComponent, selectors: [["ng-component"]], decls: 10, vars: 0, consts: [["mat-dialog-title", ""], ["mat-raised-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ClearBoardDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete all elements?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This will delete all elements that are currently on this page and cannot be undone.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearBoardDialogComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Keep Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClearBoardDialogComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9jbGVhci1ib2FyZC1kaWFsb2cvY2xlYXItYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2RpYWxvZ3MvY2xlYXItYm9hcmQtZGlhbG9nL2NsZWFyLWJvYXJkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearBoardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './clear-board-dialog.component.html',
                styleUrls: ['./clear-board-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app/shared/constants.ts":
/*!*****************************************!*\
  !*** ./src/app/app/shared/constants.ts ***!
  \*****************************************/
/*! exports provided: place_radius, place_fill_color, transition_width, transition_height */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "place_radius", function() { return place_radius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "place_fill_color", function() { return place_fill_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_width", function() { return transition_width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_height", function() { return transition_height; });
const place_radius = 25;
const place_fill_color = "white";
const transition_width = 70;
const transition_height = 20;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm2015/compiler.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Grzegorz/Desktop/Petri-Net-Creator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map