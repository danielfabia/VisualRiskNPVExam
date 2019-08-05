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

module.exports = "<div>    \r\n    <npv-list></npv-list>\r\n    <npv-form></npv-form>\r\n    <br/>\r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/form/form.component.html":
/*!*****************************************************************!*\
  !*** ../node_modules/raw-loader!./app/form/form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"form-group row\">\r\n        <label for=\"initialCost\" class=\"col-sm-3 col-form-label\">Initial Cost</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.initialCost\" type=\"number\" id=\"initialCost\" name=\"initialCost\" class=\"form-control form-control-sm\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"upperRate\" class=\"col-sm-3 col-form-label\">Lower Bound Discount Rate</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.lowerBoundRate\" type=\"number\" id=\"lowerRate\" name=\"lowerRate\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"upperRate\" class=\"col-sm-3 col-form-label\">Upper Bound Discount Rate</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.upperBoundRate\" type=\"number\" id=\"upperRate\" name=\"upperRate\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"increment\" class=\"col-sm-3 col-form-label\">Increment</label>\r\n        <div class=\"col-sm-5\">\r\n            <input [(ngModel)]=\"npvProfile.rateIncrement\" type=\"number\" id=\"increment\" name=\"increment\" class=\"form-control form-control-sm\" step=\"0.01\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"\" class=\"col-sm-3 col-form-label\">Cash Flows</label>\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"input-group mb-3\" *ngFor=\"let c of npvProfile.values; let i = index; trackBy:trackByFn\">\r\n                <input [(ngModel)]=\"npvProfile.values[i]\" type=\"number\" name=\"values{{i}}\" class=\"form-control form-control-sm\" />\r\n                <div class=\"input-group-append\">\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"removeCashFlow(i)\" title=\"Delete Cash Flow\">-</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm btn-cf-add\" (click)=\"addCashFlow()\">Add Cash Flow</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCalculate()\">Calculate</button>\r\n    </div>\r\n</form>\r\n<npv-table [npv]=\"npvProfile\"></npv-table>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/list/list.component.html":
/*!*****************************************************************!*\
  !*** ../node_modules/raw-loader!./app/list/list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\r\n    <div class=\"new form-group\">\r\n        <button (click)=\"onSave()\" type=\"button\" class=\"btn btn-primary btn-sm\" style=\"width:20%\">Save</button>\r\n        <button (click)=\"onNew()\" type=\"button\" class=\"btn btn-secondary btn-sm\" style=\"margin-left:10px;\">New</button>\r\n    </div>\r\n    <div class=\"select form-group row\">\r\n        <label for=\"npvProfileList\" class=\"col-form-label col-sm-5\" style=\"text-align: right\">Load Saved Profile</label>\r\n        <select [(ngModel)]=\"selectedNpvProfile\" (ngModelChange)=\"onProfileSelected($event)\" id=\"npvProfileList\" name=\"npvProfileList\" class=\"form-control col-sm-5\">\r\n            <option *ngFor=\"let n of npvProfileList\" [ngValue]=\"n\">{{n.name}}</option>\r\n        </select>\r\n    </div>\r\n</div>\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Save</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('x')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <div class=\"input-group\">\r\n                    <input [(ngModel)]=\"newNpvProfileName\" id=\"name\" class=\"form-control\" placeholder=\"Name of NPV Profile\" name=\"name\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('ok')\">Ok</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('cancel')\">Cancel</button>\r\n    </div>\r\n</ng-template>"

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

module.exports = "div:first-child {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5nQXBwL2FwcC9UOlxcUHJvamVjdHNcXFZpc3VhbFJpc2tcXFdlYkFwcC9OZ0FwcFxcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJOZ0FwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJOZ0FwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCJkaXY6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "../node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ "./app/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./app/form/form.component.ts");
/* harmony import */ var _npv_table_npv_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./npv-table/npv.table.component */ "./app/npv-table/npv.table.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./app/list/list.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
            _npv_table_npv_table_component__WEBPACK_IMPORTED_MODULE_11__["NpvTableComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
        ],
        providers: [
            _data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _data_npvProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/npvProfile */ "./app/data/npvProfile.ts");




//import { catchError, map, tap } from 'rxjs/operators';



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl;
        this.npvProfileShared = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _data_npvProfile__WEBPACK_IMPORTED_MODULE_6__["NpvProfile"]());
        this.obsNpvProfile = this.npvProfileShared.asObservable();
        let npvProfile = new _data_npvProfile__WEBPACK_IMPORTED_MODULE_6__["NpvProfile"]();
        this.syncCurrentNpvProfile(npvProfile);
    }
    syncCurrentNpvProfile(np) {
        this.npvProfileShared.next(np);
    }
    computeNpvProfiles(np) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append("InitialCost", np.initialCost ? np.initialCost.toString() : null)
            .append("UpperBoundRate", np.upperBoundRate ? np.upperBoundRate.toString() : null)
            .append("LowerBoundRate", np.lowerBoundRate ? np.lowerBoundRate.toLocaleString() : null)
            .append("RateIncrement", np.rateIncrement ? np.rateIncrement.toString() : null);
        np.values.forEach((v) => { params = params.append("Values", v ? v.toString() : null); });
        return this.http.get(this.url + "/Compute/npv-profile", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getSavedNpvProfiles() {
        return this.http.get(this.url + "/NpvProfile/Names")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getNpvProfile(id) {
        return this.http.get(this.url + "/NpvProfile/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addNpvProfile(np) {
        return this.http.post(this.url + "/NpvProfile", np)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateNpvProfile(np) {
        return this.http.put(this.url + "/NpvProfile", np)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error); // log to console 
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            if (error.status == 400) {
                if (typeof error.error == "string")
                    errorMessage = error.error;
                else {
                    // parse the ModelState json
                    var errors = [];
                    for (let p in error.error) {
                        errors.push(...error.error[p]);
                    }
                    errorMessage = `Errors:\n${errors.join("\n")}`;
                }
            }
            else
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "../node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./app/data.service.ts");




let FormComponent = class FormComponent {
    constructor(data, spinner) {
        this.data = data;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    onCalculate() {
        this.spinner.show();
        this.data.computeNpvProfiles(this.npvProfile).subscribe((data) => {
            // computeNpvProfiles model do not have id and name props
            // copy id and name from current NpvProfile 
            data.id = this.npvProfile.id;
            data.name = this.npvProfile.name;
            this.data.syncCurrentNpvProfile(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    addCashFlow() {
        this.npvProfile.values.push(null);
        // TODO: focus to new field
    }
    removeCashFlow(i) {
        this.npvProfile.values.splice(i, 1);
    }
    trackByFn(index, item) {
        return index;
    }
};
FormComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npv-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "../node_modules/raw-loader/index.js!./app/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./app/form/form.component.scss")]
    })
], FormComponent);



/***/ }),

/***/ "./app/list/list.component.scss":
/*!**************************************!*\
  !*** ./app/list/list.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.list {\n  display: -webkit-box;\n  display: flex;\n}\ndiv.list > div {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5nQXBwL2FwcC9saXN0L1Q6XFxQcm9qZWN0c1xcVmlzdWFsUmlza1xcV2ViQXBwL05nQXBwXFxhcHBcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJOZ0FwcC9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURNQTtFQUNJLFVBQUE7QUNKSiIsImZpbGUiOiJOZ0FwcC9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lmxpc3QgeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnNlbGVjdCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5saXN0ID4gZGl2IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iLCJkaXYubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5kaXYubGlzdCA+IGRpdiB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./app/list/list.component.ts":
/*!************************************!*\
  !*** ./app/list/list.component.ts ***!
  \************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "../node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./app/data.service.ts");
/* harmony import */ var _data_npvProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/npvProfile */ "./app/data/npvProfile.ts");






let ListComponent = class ListComponent {
    constructor(data, modalService, spinner) {
        this.data = data;
        this.modalService = modalService;
        this.spinner = spinner;
        this.data.obsNpvProfile.subscribe(np => this.npvProfile = np);
    }
    ngOnInit() {
        this.spinner.show();
        this.data.getSavedNpvProfiles().subscribe((data) => {
            // TODO: sort list
            this.npvProfileList = data;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    onProfileSelected(value) {
        this.spinner.show();
        this.data.getNpvProfile(value.id).subscribe((data) => {
            this.data.syncCurrentNpvProfile(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
    onSave() {
        if (this.npvProfile.id) {
            this.spinner.show();
            // to UPDATE
            this.data.updateNpvProfile(this.npvProfile).subscribe((data) => {
                this.spinner.hide();
                window.alert("Profile successfully saved");
            }, (error) => {
                this.spinner.hide();
                window.alert(error); // TODO: replace with MessageBox component
            });
        }
        else {
            this.openSaveModal();
        }
    }
    onNew() {
        this.data.syncCurrentNpvProfile(new _data_npvProfile__WEBPACK_IMPORTED_MODULE_5__["NpvProfile"]());
        this.selectedNpvProfile = null;
    }
    openSaveModal() {
        this.newNpvProfileName = "";
        this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
            if (result == "ok") {
                this.saveNewProfile();
            }
        }, (reason) => { });
    }
    saveNewProfile() {
        // to INSERT
        this.npvProfile.name = this.newNpvProfileName;
        this.spinner.show();
        this.data.addNpvProfile(this.npvProfile).subscribe((data) => {
            this.npvProfile.id = data.id;
            this.data.syncCurrentNpvProfile(this.npvProfile);
            this.npvProfileList.push(data); // TODO: re-sort list
            this.selectedNpvProfile = data;
            this.spinner.hide();
            window.alert("Profile successfully saved");
        }, (error) => {
            this.spinner.hide();
            window.alert(error); // TODO: replace with MessageBox component
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ListComponent.prototype, "content", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'npv-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "../node_modules/raw-loader/index.js!./app/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./app/list/list.component.scss")]
    })
], ListComponent);



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