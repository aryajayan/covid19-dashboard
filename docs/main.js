(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/ksZ":
/*!**************************************!*\
  !*** ./src/app/shared/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(username, _token) {
        this.username = username;
        this._token = _token;
    }
    get token() {
        return this._token;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aryak\learning\angular\covid19-dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "DDww":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/store/dashboard.effect.ts ***!
  \*****************************************************/
/*! exports provided: DashboardEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffect", function() { return DashboardEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.action */ "wwtL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class DashboardEffect {
    constructor(actions$, router, http) {
        this.actions$ = actions$;
        this.router = router;
        this.http = http;
        this.loadDashboard$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["LoadDashboard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.http.get('https://corona.lmao.ninja/v2/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                return _dashboard_action__WEBPACK_IMPORTED_MODULE_1__["FetchTotal"]({
                    totaldata: {
                        cases: result['cases'],
                        todayCases: result['todayCases'],
                        deaths: result['deaths'],
                        todayDeaths: result['todayDeaths'],
                        recovered: result['recovered'],
                        todayRecovered: result['todayRecovered'],
                    },
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        })));
        this.loadCountryDashboard$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["LoadCountryDashboard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.http.get('https://corona.lmao.ninja/v2/countries').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                let countries = Object.values(result).map((item) => {
                    return {
                        country: item['country'],
                        id: item['countryInfo']['_id'],
                        cases: item['cases'],
                        deaths: item['deaths'],
                        recovered: item['recovered'],
                        tests: item['tests'],
                        population: item['population'],
                        flagImage: item['countryInfo']['flag'],
                    };
                });
                return _dashboard_action__WEBPACK_IMPORTED_MODULE_1__["FetchCountryList"]({
                    countryData: countries,
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        })));
    }
}
DashboardEffect.ɵfac = function DashboardEffect_Factory(t) { return new (t || DashboardEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
DashboardEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DashboardEffect, factory: DashboardEffect.ɵfac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.pipe */ "ZPLk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchPipe"]] }); })();


/***/ }),

/***/ "PtV+":
/*!******************************************************!*\
  !*** ./src/app/dashboard/store/dashboard.reducer.ts ***!
  \******************************************************/
/*! exports provided: dashboardReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardReducer", function() { return dashboardReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.action */ "wwtL");


const initialState = {
    totalData: null,
    countryData: null,
};
const dashboardReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["FetchTotal"], (state, action) => (Object.assign(Object.assign({}, state), { totalData: action.totaldata }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["FetchCountryList"], (state, action) => (Object.assign(Object.assign({}, state), { countryData: action.countryData }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["SaveEdittedDetails"], (state, action) => {
    let index = state.countryData.findIndex((a) => a.id === action.country.id);
    return Object.assign(Object.assign({}, state), { countryData: [
            ...state.countryData.slice(0, index),
            action.country,
            ...state.countryData.slice(index + 1),
        ] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["LogoutDashboard"], (state, action) => (Object.assign(Object.assign({}, state), { totalData: null, countryData: null }))));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'covid19-dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.reducer */ "a318");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _login_store_auth_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/store/auth.effect */ "owvN");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "X3zk");
/* harmony import */ var _dashboard_store_dashboard_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/store/dashboard.effect */ "DDww");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_login_store_auth_effect__WEBPACK_IMPORTED_MODULE_7__["AuthEffect"], _dashboard_store_dashboard_effect__WEBPACK_IMPORTED_MODULE_9__["DashboardEffect"]]),
            _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "ZPLk":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(items, searchText, filterMetadata) {
        filterMetadata.count = items.length;
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        let filtered = items.filter((a) => a.country.toLowerCase().includes(searchText.toLowerCase()));
        filterMetadata.count = filtered.length;
        return filtered;
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ "a318":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _login_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/store/auth.reducer */ "oEHs");
/* harmony import */ var _dashboard_store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/store/dashboard.reducer */ "PtV+");


const appReducer = {
    auth: _login_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    dashboard: _dashboard_store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["dashboardReducer"],
};


/***/ }),

/***/ "eqOo":
/*!********************************************!*\
  !*** ./src/app/login/store/auth.action.ts ***!
  \********************************************/
/*! exports provided: LOGIN_START, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL, LOGOUT, LoginStart, AuthenticateSuccess, AuthenticateFail, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_SUCCESS", function() { return AUTHENTICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_FAIL", function() { return AUTHENTICATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStart", function() { return LoginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateSuccess", function() { return AuthenticateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateFail", function() { return AuthenticateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const LOGIN_START = '[Auth] Login Start';
const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
const LOGOUT = '[Auth] Logout';
const LoginStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AuthenticateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AUTHENTICATE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AuthenticateFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AUTHENTICATE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const Logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT);


/***/ }),

/***/ "oEHs":
/*!*********************************************!*\
  !*** ./src/app/login/store/auth.reducer.ts ***!
  \*********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.model */ "/ksZ");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.action */ "eqOo");



const initialState = {
    user: null,
    authError: null,
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_action__WEBPACK_IMPORTED_MODULE_2__["LoginStart"], (state, action) => (Object.assign(Object.assign({}, state), { user: null, authError: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_action__WEBPACK_IMPORTED_MODULE_2__["AuthenticateSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { user: new src_app_shared_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](action.username, action.token) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_action__WEBPACK_IMPORTED_MODULE_2__["AuthenticateFail"], (state, action) => (Object.assign(Object.assign({}, state), { user: null, authError: action.error }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_action__WEBPACK_IMPORTED_MODULE_2__["Logout"], (state, action) => (Object.assign(Object.assign({}, state), { user: null }))));


/***/ }),

/***/ "owvN":
/*!********************************************!*\
  !*** ./src/app/login/store/auth.effect.ts ***!
  \********************************************/
/*! exports provided: AuthEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffect", function() { return AuthEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.action */ "eqOo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dashboard_store_dashboard_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/store/dashboard.action */ "wwtL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");








class AuthEffect {
    constructor(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.loginStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_1__["LoginStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((authData) => {
            if (authData.username == 'fingent' && authData.password == 'fingent') {
                return _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthenticateSuccess"]({
                    username: authData.username,
                    token: 'fingent123',
                });
            }
            else {
                return _auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthenticateFail"]({
                    error: 'Incorrect username or password',
                });
            }
        })));
        this.authenticateSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_1__["AuthenticateSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.router.navigate(['/dashboard']);
        })), { dispatch: false });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_1__["Logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.router.navigate(['login']);
            this.store.dispatch(_dashboard_store_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["LogoutDashboard"]());
        })), { dispatch: false });
    }
}
AuthEffect.ɵfac = function AuthEffect_Factory(t) { return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
AuthEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthEffect, factory: AuthEffect.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((m) => m.DashboardModule),
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_store_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/store/auth.action */ "eqOo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(store) {
        this.store = store;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.subscription = this.store.select('auth').subscribe((authState) => {
            this.errorMessage = authState.authError;
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    onLogin() {
        let username = this.loginForm.get('username').value;
        let password = this.loginForm.get('password').value;
        this.store.dispatch(_login_store_auth_action__WEBPACK_IMPORTED_MODULE_1__["LoginStart"]({ username: username, password: password }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 3, consts: [[1, "login_container"], [1, "banner_section", "contents"], [1, "quarter-circle-top-left"], [1, "form_section", "contents"], ["role", "form", 1, "login_form", 3, "formGroup", "ngSubmit"], [1, "login_section"], ["formControlName", "username", "type", "text", "placeholder", "username", 1, "input_text"], ["formControlName", "password", "type", "text", "placeholder", "password", 1, "input_text"], ["class", "error_text", 4, "ngIf"], [1, "button_blue", 3, "disabled"], [1, "error_text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "COVID - 19");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginComponent_span_10_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".login_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n\n.banner_section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form_section[_ngcontent-%COMP%] {\n  padding: 6em 10em;\n}\n\n.login_form[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.login_section[_ngcontent-%COMP%] {\n  box-shadow: 0rem 0rem 0.4rem 0.2rem #e0e0e0;\n  padding: 3em;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.button_container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.quarter-circle-top-left[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #00dcd2, #4141fb);\n  width: 15em;\n  height: 15em;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 0 0 15em 0;\n  -moz-border-radius: 0 0 15em 0;\n  -webkit-border-radius: 0 0 15em 0;\n}\n\n@media screen and (max-width: 1200px) {\n  .form_section[_ngcontent-%COMP%] {\n    padding: 4em;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .contents[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .login_container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .quarter-circle-top-left[_ngcontent-%COMP%] {\n    width: 10em;\n    height: 10em;\n    z-index: -1;\n  }\n\n  .form_section[_ngcontent-%COMP%] {\n    padding: 3em;\n    flex-grow: 1;\n  }\n\n  .login_section[_ngcontent-%COMP%] {\n    padding: 2em;\n  }\n\n  .input_text[_ngcontent-%COMP%], .button_blue[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VDbEJFLDJDQ0NnQjtFREFoQixZQUFBO0VBR0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FEbUJGOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFKQTtFQ1pFLHdEQUFBO0VEY0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBVUY7O0FBUkE7RUFDRTtJQUNFLFlBQUE7RUFXRjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxXQUFBO0VBV0Y7O0VBVEE7SUFDRSxzQkFBQTtFQVlGOztFQVZBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBYUY7O0VBWEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQWNGOztFQVpBO0lBQ0UsWUFBQTtFQWVGOztFQWJBOztJQUVFLGdCQUFBO0VBZ0JGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Nhc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzcmMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJhbm5lcl9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvcm1fc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNmVtIDEwZW07XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9naW5fc2VjdGlvbiB7XHJcbiAgQGluY2x1ZGUgZm9ybS1jb250YWluZXI7XHJcbiAgQGluY2x1ZGUgZm9ybS1ib3g7XHJcbn1cclxuLmJ1dHRvbl9jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnF1YXJ0ZXItY2lyY2xlLXRvcC1sZWZ0IHtcclxuICBAaW5jbHVkZSBncmFkaWVudCh0byBib3R0b20sICRjb2xvci1saXN0KTtcclxuICB3aWR0aDogMTVlbTtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNWVtIDA7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgMTVlbSAwO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDE1ZW0gMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuZm9ybV9zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGVudHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbl9jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnF1YXJ0ZXItY2lyY2xlLXRvcC1sZWZ0IHtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5mb3JtX3NlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAubG9naW5fc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgfVxyXG4gIC5pbnB1dF90ZXh0LFxyXG4gIC5idXR0b25fYmx1ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZm9ybS1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWdyZXk7XHJcbiAgcGFkZGluZzogM2VtO1xyXG59XHJcbkBtaXhpbiBmb3JtLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuQG1peGluIGdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbn1cclxuQG1peGluIGZsZXgtYm94KCRkaXJlY3Rpb24pIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcbkBtaXhpbiBmbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBmbGV4LWFsaWduKCRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5AbWl4aW4gZmxleC1zdHJldGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBib3gtYm9yZGVyKCRjb2xvcikge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBib3gtc2hhZG93OiAwZW0gMGVtIDAuM2VtIDAuMDFlbSAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWJ1dHRvbigkYmdjb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjJyZW0gI2NjYztcclxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICBmb250LXNpemU6ICR0ZXh0LXNpemU7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6ICM0MjZiZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7XHJcbiRib3gtc2hhZG93LWdyZXk6IDByZW0gMHJlbSAwLjRyZW0gMC4ycmVtICNlMGUwZTA7XHJcbiR0ZXh0LXNpemU6IDFlbTtcclxuJGNvbG9yLWxpc3Q6ICMwMGRjZDIsICM0MTQxZmI7XHJcbiRlcnJvci1jb2xvcjogcmVkO1xyXG4kYmFzZS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuJGNvbG9yLWdyZWVuOiAjMDBmZmQwO1xyXG4kbmF2LWJvcmRlcjogMC40ZW0gc29saWQgJGNvbG9yLWdyZWVuO1xyXG4kdGV4dC1ncmV5OiAjOWU5ZTllO1xyXG4kY29sb3ItZ3JleTogI2NjYztcclxuJGNvbG9yLWxpZ2h0OiAjZjlmOWY5O1xyXG4iXX0= */"] });


/***/ }),

/***/ "wwtL":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/store/dashboard.action.ts ***!
  \*****************************************************/
/*! exports provided: FETCH_TOTAL, LOAD_DASHBOARD, LOAD_COUNTRY_DASHBOARD, FETCH_COUNTRY_LIST, SAVE_EDITTED_DETAILS, LOGOUT_DASHBOARD, LoadDashboard, FetchTotal, LoadCountryDashboard, FetchCountryList, SaveEdittedDetails, LogoutDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOTAL", function() { return FETCH_TOTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DASHBOARD", function() { return LOAD_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COUNTRY_DASHBOARD", function() { return LOAD_COUNTRY_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COUNTRY_LIST", function() { return FETCH_COUNTRY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_EDITTED_DETAILS", function() { return SAVE_EDITTED_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_DASHBOARD", function() { return LOGOUT_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDashboard", function() { return LoadDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTotal", function() { return FetchTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCountryDashboard", function() { return LoadCountryDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCountryList", function() { return FetchCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveEdittedDetails", function() { return SaveEdittedDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDashboard", function() { return LogoutDashboard; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const FETCH_TOTAL = '[Dashboard] Fetch Total';
const LOAD_DASHBOARD = '[Dashboard] Load ';
const LOAD_COUNTRY_DASHBOARD = '[Dashboard] Load Country Dashboard';
const FETCH_COUNTRY_LIST = '[Dashboard] Fetch Country List';
const SAVE_EDITTED_DETAILS = '[Dashboard] Save Editted Details';
const LOGOUT_DASHBOARD = '[Dashboard] Logout Dashboard';
const LoadDashboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_DASHBOARD);
const FetchTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FETCH_TOTAL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadCountryDashboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_COUNTRY_DASHBOARD);
const FetchCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FETCH_COUNTRY_LIST, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const SaveEdittedDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SAVE_EDITTED_DETAILS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LogoutDashboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT_DASHBOARD);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map