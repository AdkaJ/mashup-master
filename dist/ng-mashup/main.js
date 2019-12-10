(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div id=\"page-middle-wrapper\">\n    <app-map></app-map>\n  </div>\n  <div id=\"page-right-wrapper\">\n    <div id=\"page-left-weather-wrapper\">\n      <h2>What is Växjö weather forecast?</h2>\n      <p>Here is the local weather forecast for the next couple of days.</p>\n      <hr />\n      <app-weather></app-weather>\n      <app-daylight></app-daylight>\n    </div>\n    <app-career></app-career>\n    \n  </div>\n\n  <div id=\"page-left-wrapper\">\n    <div id=\"page-left-disqus-wrapper\">\n      <h2>Do you have something you want to discuss?</h2>\n      <p>This discussion thread is open for discussion.</p>\n      <hr />\n      <div id=\"disqus_thread\"></div>\n    </div>\n\n    <app-news></app-news>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-mashup';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./career/career-result/career-result.component */ "./src/app/career/career-result/career-result.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./news/news-dialog/news-dialog.component */ "./src/app/news/news-dialog/news-dialog.component.ts");
/* harmony import */ var _daylight_daylight_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./daylight/daylight.component */ "./src/app/daylight/daylight.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_12__["WeatherComponent"],
                _career_career_component__WEBPACK_IMPORTED_MODULE_13__["CareerComponent"],
                _career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_14__["CareerResultComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_15__["NewsComponent"],
                _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NewsDialogComponent"],
                _daylight_daylight_component__WEBPACK_IMPORTED_MODULE_17__["DaylightComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ],
            providers: [],
            entryComponents: [_career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_14__["CareerResultComponent"], _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NewsDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/career/career-result/career-result.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href={{url}} target=\"_blank\" style=\"display: block; text-decoration: none; margin-bottom: 20px;\">\n  <h3>{{company}}</h3>\n  <h4 style=\"margin-top: 5px; margin-bottom: 10px; font-style: italic;\">{{title}}</h4>\n  <p [innerHTML]=\"description\" ></p>\n</a>\n"

/***/ }),

/***/ "./src/app/career/career-result/career-result.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXItcmVzdWx0L2NhcmVlci1yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/career/career-result/career-result.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: CareerResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerResultComponent", function() { return CareerResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerResultComponent = /** @class */ (function () {
    function CareerResultComponent() {
    }
    CareerResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "url", void 0);
    CareerResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-result',
            template: __webpack_require__(/*! ./career-result.component.html */ "./src/app/career/career-result/career-result.component.html"),
            styles: [__webpack_require__(/*! ./career-result.component.scss */ "./src/app/career/career-result/career-result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CareerResultComponent);
    return CareerResultComponent;
}());



/***/ }),

/***/ "./src/app/career/career.component.html":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: rgba(255, 255, 255, 0.85098); border: 1px solid rgb(219, 219, 219); padding: 25px; margin-bottom: 25px;\">\n  <h2>Looking for a job in Växjö?</h2>\n  <p>We help you to search for jobs in Vaxjo. Enter a job title, and click on the search button to find your dream job.</p>\n  <hr>\n  <input #careerInput placeholder=\"Web developer\" style=\"padding: 10px 5px; width: 100%;\">\n  <button (click)=\"onSearch(careerInput)\">Search</button>\n  <div #target style=\"margin-top: 20px;\">\n\n    <h3 *ngIf=\"noResult\" style=\"margin-bottom: 15px;\">No job listing found...</h3>\n    <p *ngIf=\"noResult\" > Try a different job title and see if you have better luck.</p>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/career/career.component.scss":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_career_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/career.service */ "./src/app/services/career.service.ts");
/* harmony import */ var _career_result_career_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./career-result/career-result.component */ "./src/app/career/career-result/career-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CareerComponent = /** @class */ (function () {
    function CareerComponent(careerService, resolver) {
        this.careerService = careerService;
        this.resolver = resolver;
        this.cmpArray = [];
        this.cmpRefArray = [];
        this.noResult = false;
    }
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent.prototype.onSearch = function (input) {
        var _this = this;
        var title = input.value || input.placeholder;
        this.careerService.getJobs(title)
            .subscribe(function (response) {
            console.log(response);
            _this.onSearchResultsComplete(response);
        }, function (error) { return console.error(error); });
    };
    CareerComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArray; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response.jobs == undefined) {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var i = 0; i < response.jobs.length; i++) {
                var c = response.jobs[i].company;
                var t = response.jobs[i].title;
                var d = response.jobs[i].description;
                var l = response.jobs[i].url;
                this.createComponent(c, t, d, l);
            }
        }
    };
    CareerComponent.prototype.createComponent = function (c, t, d, l) {
        var newComp = this.resolver.resolveComponentFactory(_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_2__["CareerResultComponent"]);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.company = c;
        cmp.title = t;
        cmp.description = d;
        cmp.url = l;
        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], CareerComponent.prototype, "target", void 0);
    CareerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career',
            template: __webpack_require__(/*! ./career.component.html */ "./src/app/career/career.component.html"),
            styles: [__webpack_require__(/*! ./career.component.scss */ "./src/app/career/career.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_career_service__WEBPACK_IMPORTED_MODULE_1__["CareerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/daylight/daylight.component.html":
/*!**************************************************!*\
  !*** ./src/app/daylight/daylight.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-left-weather-forecast-wrapper\">\n  <img class=\"logo-image\" src=\"assets/sunrise.png\"> \n  <p style=\"position: absolute;top: 420px;left: 90px;\">{{sunrise | date:'hh:mm:ss'}}am</p>\n  <img class=\"logo-image\" src=\"assets/sunset.png\" style=\"position: absolute;top: 384px;left: 180px;\">\n  <p style=\"position: absolute;top: 420px;left: 250px;\">{{sunset | date:'hh:mm:ss'}}pm</p>\n</div>\n"

/***/ }),

/***/ "./src/app/daylight/daylight.component.scss":
/*!**************************************************!*\
  !*** ./src/app/daylight/daylight.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-image {\n  height: 70px;\n  width: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5bGlnaHQvQzpcXFVzZXJzXFxqYW5vc2Npa292YVxcc291cmNlXFxyZXBvc1xcbWFzaHVwLW1hc3RlclxcbWFzaHVwLW1hc3Rlci9zcmNcXGFwcFxcZGF5bGlnaHRcXGRheWxpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBWTtFQUNaLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2RheWxpZ2h0L2RheWxpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvLWltYWdlIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/daylight/daylight.component.ts":
/*!************************************************!*\
  !*** ./src/app/daylight/daylight.component.ts ***!
  \************************************************/
/*! exports provided: DaylightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaylightComponent", function() { return DaylightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_daylight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/daylight.service */ "./src/app/services/daylight.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DaylightComponent = /** @class */ (function () {
    function DaylightComponent(dayLightService) {
        this.dayLightService = dayLightService;
    }
    DaylightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dayLightService.getData().subscribe(function (res) {
            console.log(res);
            _this.sunrise = Date.parse(res[3]['sunrise']);
            _this.sunset = Date.parse(res[1]['sunset']);
        });
    };
    DaylightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daylight',
            template: __webpack_require__(/*! ./daylight.component.html */ "./src/app/daylight/daylight.component.html"),
            styles: [__webpack_require__(/*! ./daylight.component.scss */ "./src/app/daylight/daylight.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_daylight_service__WEBPACK_IMPORTED_MODULE_1__["DayLightService"]])
    ], DaylightComponent);
    return DaylightComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"DEFAULT_MAP_LAT\" [longitude]=\"DEFAULT_MAP_LNG\" [zoom]=\"DEFAULT_MAP_ZOOM\">\n\n  <agm-marker *ngFor=\"let marker of markers; let i = index\"\n                          [latitude]=\"marker.lat\"\n                          [longitude]=\"marker.lang\"\n                          [title]=\"marker.title\"\n                          [visible]=\"true\">\n\n    <agm-info-window>\n      <img src=\"{{marker.img}}\" alt=\"flickr img\">\n    </agm-info-window>\n  </agm-marker>\n  \n  <agm-marker *ngFor=\"let bikePin of bikePins; let i = index\"\n    [latitude]=\"bikePin.lat\"\n    [longitude]=\"bikePin.lng\"\n    [title]=\"bikePin.station\"\n    [iconUrl]=\"bikePin.pinIcon\"\n    [visible]=\"true\">\n<agm-info-window>\n   <span><label>Available parking slots: {{bikePin.free}}</label></span> \n    <span><label>Available bikes to get: {{bikePin.bikes}}</label></span>\n</agm-info-window>\n</agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcamFub3NjaWtvdmFcXHNvdXJjZVxccmVwb3NcXG1hc2h1cC1tYXN0ZXJcXG1hc2h1cC1tYXN0ZXIvc3JjXFxhcHBcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flickr.service */ "./src/app/services/flickr.service.ts");
/* harmony import */ var src_app_services_city_bikes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/city-bikes.service */ "./src/app/services/city-bikes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(flickrService, cityBikesService) {
        this.flickrService = flickrService;
        this.cityBikesService = cityBikesService;
        this.DEFAULT_MAP_ZOOM = 12;
        this.DEFAULT_MAP_LAT = 56.8770413;
        this.DEFAULT_MAP_LNG = 14.8092744;
        this.markers = [];
        this.bikePins = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initFlickr();
        this.getCityBikesData();
    };
    MapComponent.prototype.initFlickr = function () {
        var _this = this;
        var args = { lat: 56.8770413, lon: 14.8092744, radius: 4, per_page: 10000, has_geo: true };
        this.flickrService.search(args)
            .subscribe(function (response) {
            var items = response['photos']['photo'];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _this.getLocationFromPhotos(item, item.id);
            }
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.getLocationFromPhotos = function (item, id) {
        var _this = this;
        this.flickrService.getLocation(id)
            .subscribe(function (response) {
            _this.appendToMap(item, response);
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.appendToMap = function (item, geoInfo) {
        var lati = Number(geoInfo.photo.location.latitude);
        var langi = Number(geoInfo.photo.location.longitude);
        var imgSrc = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
        var marker = { lat: lati, lang: langi, title: item.title, img: imgSrc };
        this.markers.push(marker);
    };
    MapComponent.prototype.getCityBikesData = function () {
        var _this = this;
        this.cityBikesService.getData().subscribe(function (locations) {
            locations.forEach(function (location) {
                _this.createBikePin(location);
            });
        });
    };
    MapComponent.prototype.createBikePin = function (location) {
        var pin = {
            lat: Number(location.lat / 1000000),
            lng: Number(location.lng / 1000000),
            station: location.name,
            pinIcon: 'assets/bike.png',
            free: location.free,
            bikes: location.bikes
        };
        this.bikePins.push(pin);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_flickr_service__WEBPACK_IMPORTED_MODULE_1__["FlickrService"], src_app_services_city_bikes_service__WEBPACK_IMPORTED_MODULE_2__["CityBikesService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/news/news-dialog/news-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/news/news-dialog/news-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  Current daily news\n</h1>\n\n<mat-tab-group>\n  <mat-tab label=\"Daily Top News\"> \n    \n        <mat-list *ngFor=\"let news of allNews\" style=\"position:absolute; left:10px;\">\n            <mat-list-item>\n                <a (href)=\"news.url\" mat-menu-item><mat-icon>home</mat-icon></a>\n            </mat-list-item>\n          </mat-list>\n            <mat-selection-list style=\"position:absolute; left:100px;\">\n                <mat-list-option *ngFor=\"let news of allNews\">\n                  {{news.title}}\n                </mat-list-option>\n      \n              </mat-selection-list>  \n    \n    \n  </mat-tab>\n  <mat-tab label=\"Saved News\"> todo </mat-tab>\n</mat-tab-group>\n\n\n<div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"onSaveClick()\">Save</button>\n    <button mat-raised-button (click)=\"onCloseClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/news/news-dialog/news-dialog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/news/news-dialog/news-dialog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy1kaWFsb2cvbmV3cy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/news/news-dialog/news-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/news-dialog/news-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDialogComponent", function() { return NewsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NewsDialogComponent = /** @class */ (function () {
    function NewsDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.allNews = [];
        this.savedNews = [];
        this.allNews = data.data;
    }
    NewsDialogComponent.prototype.ngOnInit = function () {
    };
    NewsDialogComponent.prototype.onCloseClick = function () {
        this.dialogRef.close('closing modal window');
    };
    NewsDialogComponent.prototype.onSaveClick = function () {
    };
    NewsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-dialog',
            template: __webpack_require__(/*! ./news-dialog.component.html */ "./src/app/news/news-dialog/news-dialog.component.html"),
            styles: [__webpack_require__(/*! ./news-dialog.component.scss */ "./src/app/news/news-dialog/news-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewsDialogComponent);
    return NewsDialogComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"showNews()\">Show Events in Växjö</button>\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-dialog/news-dialog.component */ "./src/app/news/news-dialog/news-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService, dialog) {
        this.newsService = newsService;
        this.dialog = dialog;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.showNews = function () {
        var _this = this;
        try {
            this.newsService.getData().subscribe(function (res) {
                console.log(res);
                _this.openNewsDialog(res['articles']);
            });
        }
        catch (_a) {
            console.log("Couldn't load eventbrite data.");
            this.openNewsDialog([]);
        }
    };
    NewsComponent.prototype.openNewsDialog = function (sourceData) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '900px';
        dialogConfig.height = '650px';
        dialogConfig.data = {
            data: sourceData
        };
        var dialogRef = this.dialog.open(_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewsDialogComponent"], dialogConfig);
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/services/career.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/career.service.ts ***!
  \********************************************/
/*! exports provided: CareerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerService", function() { return CareerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerService = /** @class */ (function () {
    function CareerService(http) {
        this.http = http;
    }
    CareerService.prototype.getJobs = function (title) {
        var url = 'https://ansion.lnu.se/mashup/php/CareerService.php?title=' + title;
        // let url = 'dist/php/CareerService.php?title=' + title;
        return this.http.get(url);
        // .map((res: Response) => res.json());
    };
    CareerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CareerService);
    return CareerService;
}());



/***/ }),

/***/ "./src/app/services/city-bikes.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/city-bikes.service.ts ***!
  \************************************************/
/*! exports provided: CityBikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityBikesService", function() { return CityBikesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CityBikesService = /** @class */ (function () {
    function CityBikesService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "x-rapidapi-host": "community-citybikes.p.rapidapi.com",
            "x-rapidapi-key": "0839111e8cmsh486281869134a8fp1eecd3jsn3a0eb6132322"
        });
        this.options = {
            "hostname": "community-citybikes.p.rapidapi.com",
            "path": "/lundahoj.json",
            headers: this.headers
        };
        this.bikesUrl = 'https://community-citybikes.p.rapidapi.com/lundahoj.json';
    }
    CityBikesService.prototype.getData = function () {
        return this.http.get(this.bikesUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CityBikesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    CityBikesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    CityBikesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityBikesService);
    return CityBikesService;
}());



/***/ }),

/***/ "./src/app/services/daylight.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/daylight.service.ts ***!
  \**********************************************/
/*! exports provided: DayLightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayLightService", function() { return DayLightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DayLightService = /** @class */ (function () {
    function DayLightService(http) {
        this.http = http;
        this.today = this.getDateFormat();
        this.dailightUrl = "https://sun.p.rapidapi.com/api/sun/";
        this.options = {
            query: {
                "latitude": "56.8790",
                "longitude": "14.8059",
                "date": this.today
            },
            headers: {
                "x-rapidapi-host": "sun.p.rapidapi.com",
                "x-rapidapi-key": "0839111e8cmsh486281869134a8fp1eecd3jsn3a0eb6132322"
            }
        };
    }
    DayLightService.prototype.getData = function () {
        return this.http.get(this.dailightUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DayLightService.prototype.getDateFormat = function () {
        var today = new Date();
        var month = (today.getMonth() < 9) ? "0" : '' + ("" + (today.getMonth() + 1));
        var day = '31'; //(this.today.getDay() < 9) ? `0` : '' + `${this.today.getDay()}`; 
        return today.getFullYear + "-" + month + "-" + day;
    };
    DayLightService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    DayLightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DayLightService);
    return DayLightService;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.APIKey = '373937260aa0697f912fe74d747c9201';
    }
    FlickrService.prototype.search = function (args) {
        var query = this.buildQueryString('flickr.photos.search', args);
        return this.http.get(query);
    };
    FlickrService.prototype.buildQueryString = function (method, args) {
        var URL = 'https://www.flickr.com/services/rest/?method=' + method + '&api_key=' + this.APIKey + '&format=json&nojsoncallback=?';
        for (var property in args) {
            URL += '&' + property + '=' + args[property];
        }
        return URL;
    };
    FlickrService.prototype.getLocation = function (id) {
        var object = { photo_id: id };
        var query = this.buildQueryString('flickr.photos.geo.getLocation', object);
        return this.http.get(query);
    };
    FlickrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getData = function () {
        return this.http.get("https://newsapi.org/v2/top-headlines?country=se&apiKey=a1d092c52a4a418eae52981fa1232264", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    NewsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://rapidapi.com/community/api/open-weather-map/endpoints
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWheather = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'f39e85f34bmsh7d71d4457c1b593p1aa362jsn35b5005904ee'
            })
        };
        var url = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=växjö&cnt=5&units=metric';
        return this.http.get(url, httpOptions);
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-left-weather-forecast-wrapper\">\n  <div *ngFor=\"let forecast of forecasts\" class=\"page-left-weather-forecast-day-wrapper\">\n    <h3>{{forecast.day}}</h3>\n    <!--<img src=\"{{forecast.icon}}\">-->\n    <p>Temperature: {{forecast.temp}}</p>\n    <p>{{forecast.description}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.scss":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.forecasts = [];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getWheather()
            .subscribe(function (data) {
            _this.createWeatherForecasts(data);
        }, function (err) { return console.error(err); });
    };
    WeatherComponent.prototype.createWeatherForecasts = function (data) {
        data = data.list;
        for (var i = 0; i < data.length; i++) {
            var dayStr = new Date(data[i].dt * 1000).getDay();
            var forecastObj = { day: this.formatDay(dayStr), temp: data[i].temp.day, description: data[i].weather[0].main };
            this.forecasts.push(forecastObj);
        }
    };
    WeatherComponent.prototype.formatDay = function (day) {
        var result = '';
        switch (day) {
            case 1:
                result = 'Mon';
                break;
            case 2:
                result = 'Tue';
                break;
            case 3:
                result = 'Wed';
                break;
            case 4:
                result = 'Thu';
                break;
            case 5:
                result = 'Fri';
                break;
            case 6:
                result = 'Sat';
                break;
            case 0:
                result = 'Sun';
                break;
        }
        return result;
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/weather/weather.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



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
var environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\janoscikova\source\repos\mashup-master\mashup-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map