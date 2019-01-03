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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _managing_works_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managing/works/works.component */ "./src/app/managing/works/works.component.ts");
/* harmony import */ var _content_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/projects/projects.component */ "./src/app/content/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'managing', component: _managing_works_works_component__WEBPACK_IMPORTED_MODULE_3__["WorksComponent"] },
    { path: 'projects', component: _content_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_projects_project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/projects/project/project.component */ "./src/app/content/projects/project/project.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _services_work_works_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/work/works-service.service */ "./src/app/services/work/works-service.service.ts");
/* harmony import */ var _content_projects_project_add_work_form_add_work_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/projects/project/add-work-form/add-work-form.component */ "./src/app/content/projects/project/add-work-form/add-work-form.component.ts");
/* harmony import */ var _content_managing_create_work_form_create_work_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/managing/create-work-form/create-work-form.component */ "./src/app/content/managing/create-work-form/create-work-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _managing_works_works_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./managing/works/works.component */ "./src/app/managing/works/works.component.ts");
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var _managing_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./managing/create-category/create-category.component */ "./src/app/managing/create-category/create-category.component.ts");
/* harmony import */ var _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pop_up/pop-up.service */ "./src/app/services/pop_up/pop-up.service.ts");
/* harmony import */ var _managing_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./managing/edit-category-form/edit-category-form.component */ "./src/app/managing/edit-category-form/edit-category-form.component.ts");
/* harmony import */ var _managing_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./managing/nav-bar/nav-bar.component */ "./src/app/managing/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _content_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content/projects/projects.component */ "./src/app/content/projects/projects.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_project_project_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/project/project.service */ "./src/app/services/project/project.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/crud-service */ "./src/app/services/crud-service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _content_projects_project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
                _content_projects_project_add_work_form_add_work_form_component__WEBPACK_IMPORTED_MODULE_6__["AddWorkFormComponent"],
                _content_managing_create_work_form_create_work_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateWorkFormComponent"],
                _managing_works_works_component__WEBPACK_IMPORTED_MODULE_9__["WorksComponent"],
                _managing_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_11__["CreateCategoryComponent"],
                _managing_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_13__["EditCategoryFormComponent"],
                _managing_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                _content_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [
                _services_work_works_service_service__WEBPACK_IMPORTED_MODULE_5__["WorksService"],
                _services_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"],
                _services_crud_service__WEBPACK_IMPORTED_MODULE_19__["CrudService"],
                _services_project_project_service__WEBPACK_IMPORTED_MODULE_18__["ProjectService"],
                _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_12__["PopUpService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-project></app-project>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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


var ContentComponent = /** @class */ (function () {
    function ContentComponent(httpClient) {
        this.httpClient = httpClient;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/managing/create-work-form/create-work-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/content/managing/create-work-form/create-work-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#create-button {\r\n  display: block;\r\n  margin-top: 10px;\r\n  width: 10rem;\r\n  float: right;\r\n}\r\n.form-input-light {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/managing/create-work-form/create-work-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/managing/create-work-form/create-work-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form (submit)=\"work ? updateWork() : createWork()\">\r\n    <h2>\r\n      {{work ? 'Редактировать работу' : 'Добавить работу'}}\r\n    </h2>\r\n\r\n    <div class=\"form-input-light\">\r\n      <label for=\"work-title\">название работы<span>{{viewWork.title}}</span></label>\r\n      <input type=\"text\"\r\n             name='work-title'\r\n             [(ngModel)]=\"viewWork.title\">\r\n    </div>\r\n\r\n    <div class=\"form-input-light\">\r\n      <label for=\"work-price\">цена <span>{{viewWork.price}}</span></label>\r\n      <input type=\"text\"\r\n             name='work-price'\r\n             [(ngModel)]=\"viewWork.price\">\r\n    </div>\r\n    <button type=\"submit\"\r\n            id=\"create-button\"\r\n            class=\"light-button\">\r\n      {{work ? 'Сохранить': 'Создать'}}\r\n    </button>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/content/managing/create-work-form/create-work-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/managing/create-work-form/create-work-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateWorkFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkFormComponent", function() { return CreateWorkFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/work */ "./src/app/models/work.ts");
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/pop_up/pop-up.service */ "./src/app/services/pop_up/pop-up.service.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/category */ "./src/app/models/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateWorkFormComponent = /** @class */ (function () {
    function CreateWorkFormComponent(categoryService, popUpService) {
        this.categoryService = categoryService;
        this.popUpService = popUpService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.work) {
            this.viewWork = this.work;
        }
        else {
            this.viewWork = new _models_work__WEBPACK_IMPORTED_MODULE_1__["Work"]('', 0);
        }
    }
    CreateWorkFormComponent.prototype.ngOnInit = function () {
        this.popUpService.initPopup();
    };
    CreateWorkFormComponent.prototype.createWork = function () {
        this.categoryService.createWorkForCategory(this.viewWork, this.category);
        this.viewWork = new _models_work__WEBPACK_IMPORTED_MODULE_1__["Work"]('', 0.00);
        this.close.emit();
    };
    CreateWorkFormComponent.prototype.updateWork = function () {
        this.work = this.viewWork;
        this.categoryService.updateWork(this.work);
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_work__WEBPACK_IMPORTED_MODULE_1__["Work"])
    ], CreateWorkFormComponent.prototype, "work", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_category__WEBPACK_IMPORTED_MODULE_4__["Category"])
    ], CreateWorkFormComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateWorkFormComponent.prototype, "close", void 0);
    CreateWorkFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-work-form',
            template: __webpack_require__(/*! ./create-work-form.component.html */ "./src/app/content/managing/create-work-form/create-work-form.component.html"),
            styles: [__webpack_require__(/*! ./create-work-form.component.css */ "./src/app/content/managing/create-work-form/create-work-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_3__["PopUpService"]])
    ], CreateWorkFormComponent);
    return CreateWorkFormComponent;
}());



/***/ }),

/***/ "./src/app/content/projects/project/add-work-form/add-work-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/content/projects/project/add-work-form/add-work-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/projects/project/add-work-form/add-work-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/projects/project/add-work-form/add-work-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/content/projects/project/add-work-form/add-work-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/projects/project/add-work-form/add-work-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddWorkFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkFormComponent", function() { return AddWorkFormComponent; });
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

var AddWorkFormComponent = /** @class */ (function () {
    function AddWorkFormComponent() {
    }
    AddWorkFormComponent.prototype.ngOnInit = function () {
    };
    AddWorkFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-work-form',
            template: __webpack_require__(/*! ./add-work-form.component.html */ "./src/app/content/projects/project/add-work-form/add-work-form.component.html"),
            styles: [__webpack_require__(/*! ./add-work-form.component.css */ "./src/app/content/projects/project/add-work-form/add-work-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddWorkFormComponent);
    return AddWorkFormComponent;
}());



/***/ }),

/***/ "./src/app/content/projects/project/project.component.css":
/*!****************************************************************!*\
  !*** ./src/app/content/projects/project/project.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/projects/project/project.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/content/projects/project/project.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let work of works\">\r\n    {{work.title}}\r\n  </li>\r\n</ul>\r\n\r\n<button (click)=\"openAddWorkForm()\">\r\n  Add work\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/content/projects/project/project.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/projects/project/project.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_work_works_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/work/works-service.service */ "./src/app/services/work/works-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(worksService) {
        this.worksService = worksService;
        this.works = this.worksService.getWorksForProject();
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.openAddWorkForm = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/content/projects/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/content/projects/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_services_work_works_service_service__WEBPACK_IMPORTED_MODULE_1__["WorksService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/content/projects/projects.component.css":
/*!*********************************************************!*\
  !*** ./src/app/content/projects/projects.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projects-list {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.project {\r\n  width: 100%;\r\n}\r\n\r\n.project-toggle {\r\n  width: 100%;\r\n  background-color: #CED6E5;\r\n  box-shadow: none;\r\n  border: none;\r\n  border-bottom: 1px solid #666e7f;\r\n  height: 4rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/projects/projects.component.html":
/*!**********************************************************!*\
  !*** ./src/app/content/projects/projects.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"projects-list\">\r\n  <li class=\"project\"\r\n      *ngFor=\"let project of projects\">\r\n    <button type=\"button\"\r\n            class=\"project-toggle\"\r\n            data-toggle=\"collapse\"\r\n            [attr.data-target]=\"'#collapse' + project.id\"\r\n            aria-expanded=\"false\"\r\n            [attr.aria-controls]=\"'collapse' + project.id\">\r\n      {{project.title}}\r\n    </button>\r\n    <div class=\"collapse\" id=\"collapse{{project.id}}\">\r\n      <div class=\"card card-body\">\r\n        {{project.title}}\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/content/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project/project.service */ "./src/app/services/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        projectService.projects.subscribe(function (prs) { return _this.projects = prs; });
    }
    ProjectsComponent.prototype.ngOnInit = function () { };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/content/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/content/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/managing/create-category/create-category.component.css":
/*!************************************************************************!*\
  !*** ./src/app/managing/create-category/create-category.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-button {\r\n  display: inline-block;\r\n  margin: auto;\r\n  width: 10rem;\r\n}\r\n\r\n.form-input-light {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/managing/create-category/create-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/managing/create-category/create-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pop-up-background\" (click)=\"emitClose()\">\r\n  <form (submit)=\"createCategory()\"\r\n        id=\"container\"\r\n        (click)=\"$event.stopPropagation()\">\r\n    <button (click)=\"emitClose()\"\r\n            id=\"close-button\">\r\n    </button>\r\n    <h2>Category</h2>\r\n    <label for=\"category-title\"\r\n           class=\"form-label-light\">Title</label>\r\n    <input type=\"text\"\r\n           class=\"form-input-light\"\r\n           name=\"category-title\"\r\n           autofocus\r\n           [(ngModel)]=\"category.title\">\r\n    <button type=\"submit\"\r\n            class=\"light-button category-button\">Create</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/managing/create-category/create-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/managing/create-category/create-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/category */ "./src/app/models/category.ts");
/* harmony import */ var _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pop_up/pop-up.service */ "./src/app/services/pop_up/pop-up.service.ts");
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category/category.service */ "./src/app/services/category/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(popUpService, categoryService) {
        this.popUpService = popUpService;
        this.categoryService = categoryService;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = new _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"]('', []);
    }
    CreateCategoryComponent.prototype.ngOnInit = function () {
        this.popUpService.initPopup();
    };
    CreateCategoryComponent.prototype.createCategory = function () {
        this.categoryService.createCategory(this.category);
        this.create.emit();
    };
    CreateCategoryComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateCategoryComponent.prototype, "create", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateCategoryComponent.prototype, "close", void 0);
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-category',
            template: __webpack_require__(/*! ./create-category.component.html */ "./src/app/managing/create-category/create-category.component.html"),
            styles: [__webpack_require__(/*! ./create-category.component.css */ "./src/app/managing/create-category/create-category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["PopUpService"], _services_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/managing/edit-category-form/edit-category-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/managing/edit-category-form/edit-category-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#save-button {\r\n  display: block;\r\n  margin-top: 10px;\r\n  width: 10rem;\r\n  float: right;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/managing/edit-category-form/edit-category-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/managing/edit-category-form/edit-category-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form (submit)=\"saveCategory()\">\r\n    <h2>Категория</h2>\r\n\r\n    <div class=\"form-input-light\" style=\"width: 100%;\">\r\n      <label for=\"category-title\">название категории <span>{{category.title}}</span></label>\r\n      <input type=\"text\"\r\n             name=\"category-title\"\r\n             [(ngModel)]=\"category.title\">\r\n    </div>\r\n\r\n    <button class=\"light-button\" type=\"submit\" id=\"save-button\">\r\n      Сохранить\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/managing/edit-category-form/edit-category-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/managing/edit-category-form/edit-category-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryFormComponent", function() { return EditCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/category */ "./src/app/models/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCategoryFormComponent = /** @class */ (function () {
    function EditCategoryFormComponent() {
    }
    EditCategoryFormComponent.prototype.ngOnInit = function () {
    };
    EditCategoryFormComponent.prototype.saveCategory = function () {
        console.log(this.category);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], EditCategoryFormComponent.prototype, "category", void 0);
    EditCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category-form',
            template: __webpack_require__(/*! ./edit-category-form.component.html */ "./src/app/managing/edit-category-form/edit-category-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-category-form.component.css */ "./src/app/managing/edit-category-form/edit-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditCategoryFormComponent);
    return EditCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/managing/nav-bar/nav-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/managing/nav-bar/nav-bar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#placeholder {\r\n  height: 5rem;\r\n}\r\n\r\n#navigation {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 5rem;\r\n  width: 100%;\r\n  background-color: #131419;\r\n  z-index: 4000;\r\n}\r\n\r\n.dropdown-toggle {\r\n  background-image: url(\"/assets/img/icons/nav-bar-button.png\");\r\n  width: 32px;\r\n  height: 32px;\r\n  background-color: transparent;\r\n  margin-top: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.dropdown-toggle:after {\r\n  content: none;\r\n}\r\n\r\n.dropdown-menu {\r\n  margin-top: -4.25rem;\r\n  margin-left: -4px;\r\n  height: 100vh;\r\n  width: 60vw;\r\n  background-color: #666e7f;\r\n  border: 1px solid rgba(242, 246, 255, 0.78);\r\n}\r\n\r\n.dropdown-item {\r\n  height: 4rem;\r\n  color: #CED6E5;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  line-height: 3.5rem;\r\n  border-bottom: 1px solid rgba(145, 150, 161, 0.84);\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: #666e7f;\r\n  color: #F2F6FF;\r\n  border-bottom: 1px solid #F2F6FF;\r\n}\r\n\r\n.nav-link {\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/managing/nav-bar/nav-bar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/managing/nav-bar/nav-bar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"placeholder\"></div>\r\n<div id=\"navigation\">\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n      <a class=\"dropdown-item\" routerLink=\"projects\">Projects</a>\r\n      <a class=\"dropdown-item\" routerLink=\"managing\">Managing</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/managing/nav-bar/nav-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/managing/nav-bar/nav-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/managing/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/managing/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/managing/works/works.component.css":
/*!****************************************************!*\
  !*** ./src/app/managing/works/works.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-category-button {\r\n  width: 25px;\r\n  height: 25px;\r\n  position: absolute;\r\n  margin: auto;\r\n  margin-top: 5px;\r\n  background-size: cover;\r\n  background-image: url('/assets/img/icons/category-add-button.png');\r\n}\r\n\r\n#headers {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 0 12px;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  background-color: #2F333F;\r\n  color: #CED6E5;\r\n  height: 3.5rem;\r\n  line-height: 4rem;\r\n  position: relative;\r\n}\r\n\r\nul {\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#category {\r\n  height: 4rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #666E7F;\r\n  color: #CED6E5;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.category-title {\r\n  font-size: 1.7rem;\r\n  font-weight: bold;\r\n  flex-grow: 1;\r\n}\r\n\r\n.create-work-button {\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n  background-image: url('/assets/img/icons/category-edit.png');\r\n  background-color: transparent;\r\n  background-size: cover;\r\n  border: none;\r\n}\r\n\r\n.work {\r\n  color: #2F333F;\r\n  background-color: #F2F6FF;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.work li {\r\n  width: 100%;\r\n  margin-bottom: 7px;\r\n  display: flex;\r\n  font-weight: bold;\r\n}\r\n\r\n#category-edition-form {\r\n  margin: auto;\r\n  height: 40%;\r\n}\r\n\r\n.hidden-delete {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  margin-right: 1rem;\r\n  margin-left: -2rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.hidden-delete:after {\r\n  border-left: 2px solid #2F333F;\r\n  height: 2.4rem;\r\n  display: inline-block;\r\n  margin-left: 1.5rem;\r\n  margin-top: -0.2rem;\r\n  content: '';\r\n  width: 1.5rem;\r\n  background-color: #F2F6FF;\r\n}\r\n\r\n.hidden-delete:hover {\r\n  margin-left: -1rem;\r\n  margin-right: 1rem;\r\n  opacity: 1;\r\n}\r\n\r\n.hidden-delete:hover:after {\r\n  margin-left: 2.2rem;\r\n  width: 0;\r\n}\r\n\r\n.delete-category {\r\n  background-image: url(\"/assets/img/icons/trash.png\");\r\n}\r\n\r\n.delete-category:after {\r\n  background-color: #666E7F;\r\n  border-left: 2px solid #F2F6FF;\r\n}\r\n\r\n.category-buttons {\r\n  display: flex;\r\n  width: 30%;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.category-buttons * {\r\n  margin-top: -3px;\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/managing/works/works.component.html":
/*!*****************************************************!*\
  !*** ./src/app/managing/works/works.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categoryEdition\" id=\"pop-up-background\" (click)=\"categoryEdition = false;\">\r\n  <div id=\"container\"\r\n       (click)=\"$event.stopPropagation()\">\r\n    <div id=\"pop-up-navigation\">\r\n      <ul>\r\n        <li *ngFor=\"let state of popUpService.currentStates\"\r\n            [style.width]=\"100/popUpService.currentStates.length + '%'\"\r\n            [class]=\"state.number == popUpService.currentState.number ? 'active' : ''\">\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div style=\"width: 95%; margin-left: 2.5%;\" ngSwitch=\"{{popUpService.currentState.title}}\">\r\n      <div *ngSwitchCase=\"'category'\">\r\n        <app-edit-category-form\r\n          [category]=\"selectedCategory\"></app-edit-category-form>\r\n      </div>\r\n      <div *ngSwitchCase=\"'create-work'\">\r\n        <app-create-work-form\r\n          [category]=\"selectedCategory\"></app-create-work-form>\r\n      </div>\r\n      <div *ngSwitchCase=\"'edit-work'\">\r\n        <app-create-work-form\r\n          [work]=\"selectedCategory.works[0]\"></app-create-work-form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [(ngModel)]=\"test.message\"></div>\r\n<app-create-category\r\n  *ngIf=\"categoryCreation\"\r\n  (close)=\"categoryCreation = false\"\r\n  (create)=\"categoryCreation=false\"></app-create-category>\r\n\r\n<div id=\"headers\">\r\n  <span style=\"width: 70%\">Title</span>\r\n  <div id='add-category-button' (click)=\"openCreateCategoryForm()\"></div>\r\n  <span style=\"width: 25%; text-align: end\">Price</span>\r\n</div>\r\n<ul id=\"accordion\">\r\n  <ul *ngFor=\"let category of categories\"\r\n      class=\"card\">\r\n\r\n    <div id=\"category\"\r\n         class=\"card-header\"\r\n         [attr.data-target]='\"#collapse\" + category.id'\r\n         data-toggle=\"collapse\">\r\n      <div class=\"remove-img hidden-delete delete-category\" (click)=\"deleteCategory(category)\"></div>\r\n      <div class=\"category-title\">{{category.title}}</div>\r\n\r\n      <div class=\"category-buttons\">\r\n        <button class=\"create-work-button\"\r\n                (click)=\"openCategoryEditForm(category)\"></button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"collapse{{category.id}}\"\r\n         class=\"collapse\"\r\n         data-parent=\"#accordion\">\r\n      <div class=\"card-body work\">\r\n        <li *ngFor=\"let work of category.works\">\r\n          <span (click)=\"deleteWork(work)\" class=\"hidden-delete remove-work remove-img\"></span>\r\n          <span style=\"flex-grow: 1\">{{work.title}}</span>\r\n          <span style=\"width: 25%; margin-right: 2px; text-align: end;\">{{work.price}} UAH</span>\r\n        </li>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/managing/works/works.component.ts":
/*!***************************************************!*\
  !*** ./src/app/managing/works/works.component.ts ***!
  \***************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pop_up/pop-up.service */ "./src/app/services/pop_up/pop-up.service.ts");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/state */ "./src/app/models/state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorksComponent = /** @class */ (function () {
    function WorksComponent(categoryService, popUpService) {
        var _this = this;
        this.categoryService = categoryService;
        this.popUpService = popUpService;
        this.categoryEdition = false;
        this.categoryCreation = false;
        this.test = { message: 'not READY' };
        categoryService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent.prototype.openCategoryEditForm = function (category) {
        this.selectedCategory = category;
        this.categoryEdition = true;
        event.stopPropagation();
        this.popUpService.initStates([
            new _models_state__WEBPACK_IMPORTED_MODULE_3__["State"](0, 'category'),
            new _models_state__WEBPACK_IMPORTED_MODULE_3__["State"](1, 'create-work'),
            new _models_state__WEBPACK_IMPORTED_MODULE_3__["State"](2, 'edit-work')
        ]);
    };
    WorksComponent.prototype.openCreateCategoryForm = function () {
        this.categoryCreation = true;
    };
    WorksComponent.prototype.deleteWork = function (work) {
        if (this.popUpService.confirm('Are you sure?')) {
            this.categoryService.deleteWork(work);
        }
    };
    WorksComponent.prototype.deleteCategory = function (category) {
        if (this.popUpService.confirm('Are you sure?')) {
            this.categoryService.deleteCategory(category);
        }
        event.stopPropagation();
    };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/managing/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/managing/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _services_pop_up_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["PopUpService"]])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(title, works) {
        this.title = title;
        this.works = works;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/state.ts":
/*!*********************************!*\
  !*** ./src/app/models/state.ts ***!
  \*********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State = /** @class */ (function () {
    function State(number, title) {
        this.number = number;
        this.title = title;
    }
    return State;
}());



/***/ }),

/***/ "./src/app/models/work.ts":
/*!********************************!*\
  !*** ./src/app/models/work.ts ***!
  \********************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
var Work = /** @class */ (function () {
    function Work(title, price) {
        this.title = title;
        this.price = price;
    }
    return Work;
}());



/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        var categories = this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/categories');
        this.categories.subscribe(function (gr) { return _this.categoriesArr = gr; });
        categories.subscribe(function (ctgrs) {
            _this.categories.next(ctgrs);
        });
    }
    CategoryService.prototype.getCategories = function () {
        return this.categories;
    };
    CategoryService.prototype.createWorkForCategory = function (work, category) {
        category.works.push(work);
        this.categories.next(this.categoriesArr);
    };
    CategoryService.prototype.createCategory = function (category) {
        category.id = this.categoriesArr.length + 1;
        this.categoriesArr.push(category);
        this.categories.next(this.categoriesArr);
    };
    CategoryService.prototype.deleteWork = function (work) {
        var category = this.categoriesArr.find(function (gr) { return gr.works.indexOf(work) !== -1; });
        category.works = category.works.filter(function (wk) { return wk !== work; });
        this.categories.next(this.categoriesArr);
    };
    CategoryService.prototype.deleteCategory = function (category) {
        this.categoriesArr = this.categoriesArr.filter(function (cgr) { return cgr !== category; });
        this.categories.next(this.categoriesArr);
    };
    CategoryService.prototype.updateWork = function (work) {
        this.categories.next(this.categoriesArr);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/crud-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud-service.ts ***!
  \******************************************/
/*! exports provided: CrudService, crudObjects, crudUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudObjects", function() { return crudObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudUrl", function() { return crudUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Class that generates default crud operations:
// getAll, getById, create, delete, deleteById, update
// To use this class, create class that extends CrudService
// And create two variables:
// crudObjects - variable that refers to all your objects
// url - part of api that started after host
var CrudService = /** @class */ (function () {
    function CrudService(httpClient) {
        this.httpClient = httpClient;
    }
    CrudService.prototype.getAll = function () {
        var _this = this;
        var response = this.httpClient.get(this.url);
        response.subscribe(function (resObjects) { return _this.objects.next(resObjects); });
    };
    CrudService.prototype.getById = function (id) {
        return this.httpClient.get(this.url + id);
    };
    CrudService.prototype.create = function (obj) {
        return this.httpClient.post(this.url, obj);
    };
    CrudService.prototype.delete = function (obj) {
        return this.httpClient.delete(this.url + obj.id);
    };
    CrudService.prototype.deleteById = function (id) {
        return this.httpClient.delete(this.url + id);
    };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());

function crudObjects(target, key) {
    var val;
    return {
        set: function (value) {
            val = value;
            target.objects = val;
        },
        get: function () {
            return val;
        }
    };
}
function crudUrl(target, key) {
    var val;
    return {
        set: function (value) {
            val = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + '/' + value + '/';
            target.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + '/' + value + '/';
        },
        get: function () {
            return val;
        }
    };
}


/***/ }),

/***/ "./src/app/services/pop_up/pop-up.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/pop_up/pop-up.service.ts ***!
  \***************************************************/
/*! exports provided: PopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpService", function() { return PopUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpService = /** @class */ (function () {
    function PopUpService() {
        var _this = this;
        this.states = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.switchTimestamp = 0;
        window.onresize = function () {
            var popUp = document.getElementById('pop-up-background');
            if (popUp) {
                popUp.style.width = document.documentElement.clientWidth + 'px';
                popUp.style.height = document.documentElement.clientHeight + 'px';
            }
        };
        this.state.subscribe(function (state) { return _this.currentState = state; });
        this.states.subscribe(function (states) { return _this.currentStates = states; });
    }
    PopUpService.prototype.initPopup = function () {
        var popUp = document.getElementById('pop-up-background');
        popUp.style.width = document.documentElement.clientWidth + 'px';
        popUp.style.height = document.documentElement.clientHeight + 'px';
    };
    PopUpService.prototype.initStates = function (states) {
        var _this = this;
        this.states.next(states);
        this.state.next(states[0]);
        setInterval(function () {
            var popUp = document.getElementById('pop-up-background');
            if (popUp) {
                _this.initScroll(popUp);
                clearInterval(0);
            }
        }, 10);
    };
    PopUpService.prototype.initScroll = function (popUp) {
        var _this = this;
        var self = this;
        popUp.addEventListener('wheel', function (event) {
            if ((event.timeStamp - _this.switchTimestamp > 20) && Math.abs(event.deltaX) + Math.abs(event.deltaY) > 100) {
                console.log(event.timeStamp - _this.switchTimestamp);
                _this.switchTimestamp = event.timeStamp;
                if (Math.abs(event.deltaY) * 2 > Math.abs(event.deltaX)) {
                    event.deltaY < 0 ? self.nextState() : self.previousState();
                }
                else {
                    event.deltaX > 0 ? self.nextState() : self.previousState();
                }
            }
        });
    };
    PopUpService.prototype.previousState = function () {
        var index = this.currentStates.indexOf(this.currentState);
        if (index > 0) {
            this.state.next(this.currentStates[index - 1]);
        }
    };
    PopUpService.prototype.nextState = function () {
        var index = this.currentStates.indexOf(this.currentState);
        if (index < this.currentStates.length - 1) {
            this.state.next(this.currentStates[index + 1]);
        }
    };
    PopUpService.prototype.stateByTitle = function (title) {
        var state = this.states.getValue().find(function (st) { return st.title === title; });
        return state;
    };
    PopUpService.prototype.confirm = function (text) {
        return confirm(text);
    };
    PopUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PopUpService);
    return PopUpService;
}());



/***/ }),

/***/ "./src/app/services/project/project.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/project/project.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud-service */ "./src/app/services/crud-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function (_super) {
    __extends(ProjectService, _super);
    function ProjectService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.projects = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this.crudUrl = 'projects';
        return _this;
    }
    __decorate([
        _crud_service__WEBPACK_IMPORTED_MODULE_2__["crudObjects"],
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], ProjectService.prototype, "projects", void 0);
    __decorate([
        _crud_service__WEBPACK_IMPORTED_MODULE_2__["crudUrl"],
        __metadata("design:type", Object)
    ], ProjectService.prototype, "crudUrl", void 0);
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}(_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]));



/***/ }),

/***/ "./src/app/services/work/works-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/work/works-service.service.ts ***!
  \********************************************************/
/*! exports provided: WorksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksService", function() { return WorksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/work */ "./src/app/models/work.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksService = /** @class */ (function () {
    function WorksService() {
        this.works = [];
        var work = new _models_work__WEBPACK_IMPORTED_MODULE_1__["Work"]('title', 20);
        work.title = 'title';
        this.works.push(work);
    }
    WorksService.prototype.getWorksForProject = function () {
        return this.works;
    };
    WorksService.prototype.createWork = function (work) {
        this.works.push(work);
    };
    WorksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WorksService);
    return WorksService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    host: 'http://localhost:3000/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\prjcts\PM\PM.client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map