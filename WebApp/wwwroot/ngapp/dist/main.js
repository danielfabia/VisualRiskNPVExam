(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/*!*******************************************************!*\
  !*** ../$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************/
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/app.component.html":
/*!***********************************************************!*\
  !*** ../node_modules/raw-loader!./app/app.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>    \r\n    <npv-form></npv-form>\r\n    <br/>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/form/form.component.html":
/*!*****************************************************************!*\
  !*** ../node_modules/raw-loader!./app/form/form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"form-group row\">\r\n        <label for=\"initialCost\" class=\"col-sm-3 col-form-label\">Initial Cost</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.initialCost\" type=\"number\" id=\"initialCost\" name=\"initialCost\" class=\"form-control form-control-sm\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"upperRate\" class=\"col-sm-3 col-form-label\">Upper Bound Discount Rate</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.upperBoundRate\" type=\"number\" id=\"upperRate\" name=\"upperRate\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"upperRate\" class=\"col-sm-3 col-form-label\">Lower Bound Discount Rate</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.lowerBoundRate\" type=\"number\" id=\"lowerRate\" name=\"lowerRate\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"increment\" class=\"col-sm-3 col-form-label\">Increment</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.rateIncrement\" type=\"number\" id=\"increment\" name=\"increment\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"\" class=\"col-sm-3 col-form-label\">Cash Flows</label>\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"form-group\" *ngFor=\"let c of npvProfile.values; let i = index\">\r\n                <input [(ngModel)]=\"npvProfile.values[i]\" type=\"number\" name=\"values{{i}}\" class=\"form-control form-control-sm\" />\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"removeCashFlow(i)\" title=\"Delete Cash Flow\">-</button>\r\n                <!--<i class=\"fa fa-minus-square\"></i>-->\r\n            </div>            \r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm btn-cf-add\" (click)=\"addCashFlow()\" >Add Cash Flow</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCalculate()\">Calculate</button>\r\n    </div>\r\n</form>\r\n<npv-table [npv]=\"npvProfile\"></npv-table>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/npv-table/npv.table.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/npv-table/npv.table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"npvProfile && npvProfile.profiles && npvProfile.profiles.length > 0\">\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <!--<th>Cash Flow</th>\r\n                <th>Initial Value</th>-->\r\n                <th>Discount Rate</th>\r\n                <th>Net Present Value</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let p of npvProfile.profiles\">\r\n                <!--<td>{{ npvProfile.values }}</td>\r\n                <td>{{ npvProfile.initialCost | number:'1.2-4' }}</td>-->\r\n                <td>{{ p.rate | percent:'1.2-3' }}</td>\r\n                <td>{{ p.npv | number:'1.2-2' }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJOZ0FwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./app/data.service.ts");



let AppComponent = class AppComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./app/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./app/form/form.component.ts");
/* harmony import */ var _npv_table_npv_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./npv-table/npv.table.component */ "./app/npv-table/npv.table.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _npv_table_npv_table_component__WEBPACK_IMPORTED_MODULE_9__["NpvTableComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./app/data.service.ts":
/*!*****************************!*\
  !*** ./app/data.service.ts ***!
  \*****************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _data_npvProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/npvProfile */ "./app/data/npvProfile.ts");






let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.npvProfileShared = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _data_npvProfile__WEBPACK_IMPORTED_MODULE_5__["NpvProfile"]());
        this.obsNpvProfile = this.npvProfileShared.asObservable();
        let npvProfile = new _data_npvProfile__WEBPACK_IMPORTED_MODULE_5__["NpvProfile"]();
        npvProfile.initialCost = 10000;
        npvProfile.upperBoundRate = 2.00;
        npvProfile.lowerBoundRate = 1.00;
        npvProfile.rateIncrement = 0.25;
        //npvProfile.values.push(1000);
        //npvProfile.values.push(2000);
        //npvProfile.values.push(3000);
        //npvProfile.values.push(1000);
        //npvProfile.values.push(5000);
        //npvProfile.values.push(3000);
        //npvProfile.values.push(1000);
        //npvProfile.values.push(2000);
        //npvProfile.values.push(3000);
        this.syncCurrentNpvProfile(npvProfile);
    }
    computeNpvProfiles(np) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append("InitialCost", np.initialCost.toString())
            .append("UpperBoundRate", np.upperBoundRate.toString())
            .append("LowerBoundRate", np.lowerBoundRate.toLocaleString())
            .append("RateIncrement", np.rateIncrement.toString());
        np.values.forEach((v) => { params = params.append("Values", v.toString()); });
        return this.http.get(this.url + "/Compute/npv-profile", { params: params });
    }
    syncCurrentNpvProfile(np) {
        this.npvProfileShared.next(np);
    }
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./app/data/npvProfile.ts":
/*!********************************!*\
  !*** ./app/data/npvProfile.ts ***!
  \********************************/
/*! exports provided: NpvProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpvProfile", function() { return NpvProfile; });
class NpvProfile {
    constructor() {
        this.values = new Array();
    }
}


/***/ }),

/***/ "./app/form/form.component.scss":
/*!**************************************!*\
  !*** ./app/form/form.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-cf-add {\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5nQXBwL2FwcC9mb3JtL1Q6XFxQcm9qZWN0c1xcVmlzdWFsUmlza1xcV2ViQXBwL05nQXBwXFxhcHBcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiLCJOZ0FwcC9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSiIsImZpbGUiOiJOZ0FwcC9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jZi1hZGQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn0iLCIuYnRuLWNmLWFkZCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./app/form/form.component.ts":
/*!************************************!*\
  !*** ./app/form/form.component.ts ***!
  \************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./app/data.service.ts");



let FormComponent = class FormComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    onCalculate() {
        //console.log(this.npvProfile);
        this.data.computeNpvProfiles(this.npvProfile).subscribe((data) => {
            //console.log(data);
            this.data.syncCurrentNpvProfile(data);
        });
    }
    addCashFlow() {
        this.npvProfile.values.push(null);
    }
};
FormComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npv-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "../node_modules/raw-loader/index.js!./app/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./app/form/form.component.scss")]
    })
], FormComponent);



/***/ }),

/***/ "./app/npv-table/npv.table.component.scss":
/*!************************************************!*\
  !*** ./app/npv-table/npv.table.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 70%;\n  margin-left: 10%;\n  margin-right: 15%;\n  text-align: right;\n}\ntable td, table th {\n  border: 1px solid #FFFFFF;\n  padding: 3px 6px;\n}\ntable tr:nth-child(even) {\n  background: #D0E4F5;\n}\ntable thead {\n  background: #0B6FA4;\n  border-bottom: 5px solid #FFFFFF;\n}\ntable thead th {\n  font-weight: bold;\n  color: #FFFFFF;\n  text-align: center;\n  border-left: 2px solid #FFFFFF;\n}\ntable thead th:first-child {\n  border-left: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5nQXBwL2FwcC9ucHYtdGFibGUvVDpcXFByb2plY3RzXFxWaXN1YWxSaXNrXFxXZWJBcHAvTmdBcHBcXGFwcFxcbnB2LXRhYmxlXFxucHYudGFibGUuY29tcG9uZW50LnNjc3MiLCJOZ0FwcC9hcHAvbnB2LXRhYmxlL25wdi50YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0FDRFI7QURHUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNEWjtBRElRO0VBQ0ksaUJBQUE7QUNGWiIsImZpbGUiOiJOZ0FwcC9hcHAvbnB2LXRhYmxlL25wdi50YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgIH1cclxuXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMEU0RjU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwQjZGQTQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGRkZGRkY7XHJcblxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgcGFkZGluZzogM3B4IDZweDtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNEMEU0RjU7XG59XG50YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICMwQjZGQTQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRkZGRkZGO1xufVxudGFibGUgdGhlYWQgdGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkZGRkZGO1xufVxudGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./app/npv-table/npv.table.component.ts":
/*!**********************************************!*\
  !*** ./app/npv-table/npv.table.component.ts ***!
  \**********************************************/
/*! exports provided: NpvTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpvTableComponent", function() { return NpvTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let NpvTableComponent = class NpvTableComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("npv")
], NpvTableComponent.prototype, "npvProfile", void 0);
NpvTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npv-table',
        template: __webpack_require__(/*! raw-loader!./npv.table.component.html */ "../node_modules/raw-loader/index.js!./app/npv-table/npv.table.component.html"),
        styles: [__webpack_require__(/*! ./npv.table.component.scss */ "./app/npv-table/npv.table.component.scss")]
    })
], NpvTableComponent);



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "http://localhost:51509/api"
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

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! T:\Projects\VisualRisk\WebApp\NgApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map