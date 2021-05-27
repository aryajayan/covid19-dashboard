(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "/vFh":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/total-dashboard/total-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: TotalDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDashboardComponent", function() { return TotalDashboardComponent; });
/* harmony import */ var _store_dashboard_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/dashboard.action */ "wwtL");
/* harmony import */ var _store_dashboard_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/dashboard.selector */ "k3YW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TotalDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TotalDashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Total Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Total Deaths");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Total Recovered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, ctx_r1.totalData.cases), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 5, ctx_r1.totalData.deaths), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 7, ctx_r1.totalData.recovered), " ");
} }
function TotalDashboardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TotalDashboardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Deaths");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Recovered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, ctx_r3.totalData.todayCases), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 5, ctx_r3.totalData.todayDeaths), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 7, ctx_r3.totalData.todayRecovered), " ");
} }
class TotalDashboardComponent {
    constructor(store) {
        this.store = store;
        this.totalData = null;
    }
    ngOnInit() {
        this.subscription = this.store.select(_store_dashboard_selector__WEBPACK_IMPORTED_MODULE_1__["selectTotalList"]).subscribe((data) => {
            this.totalData = data;
            if (this.totalData == null) {
                this.store.dispatch(_store_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["LoadDashboard"]());
            }
        }, (error) => {
            alert('Unable to fetch data. Please try again after sometime');
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
TotalDashboardComponent.ɵfac = function TotalDashboardComponent_Factory(t) { return new (t || TotalDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TotalDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TotalDashboardComponent, selectors: [["app-total-dashboard"]], decls: 15, vars: 4, consts: [[1, "total_dashboard_container", "dashboard_content"], [1, "count_section"], [1, "header_section"], [1, "sub_header"], [1, "border_line"], ["class", "spinner align-center", 4, "ngIf"], ["class", "tile_container", 4, "ngIf"], [1, "spinner", "align-center"], [1, "fa", "fa-spinner", "fa-pulse", "fa-3x", "fa-fw"], [1, "sr-only"], [1, "tile_container"], [1, "card_content"], [1, "tile", "count_tile"], [1, "count"]], template: function TotalDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TotalDashboardComponent_div_6_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TotalDashboardComponent_div_7_Template, 22, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TotalDashboardComponent_div_13_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TotalDashboardComponent_div_14_Template, 22, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalData == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalData !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalData == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalData !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".border_line[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.tile_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n}\n\n.count_section[_ngcontent-%COMP%] {\n  height: 45%;\n  display: flex;\n  flex-direction: column;\n}\n\n.count_tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n@media screen and (max-width: 800px) {\n  .tile_container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3RhbC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VDV0UsYUFBQTtFQUNBLG1CRFhrQjtFQUNsQixZQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUNFRSxhQUFBO0VBQ0Esc0JERmtCO0VBQ2xCLHVCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJ0b3RhbC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiL3NyYy9zYXNzL21peGluc1wiO1xyXG5cclxuLmJvcmRlcl9saW5lIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi50aWxlX2NvbnRhaW5lciB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3gocm93KTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLmNvdW50X3NlY3Rpb24ge1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uY291bnRfdGlsZSB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3goY29sdW1uKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudGlsZV9jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiQG1peGluIGZvcm0tY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1ncmV5O1xyXG4gIHBhZGRpbmc6IDNlbTtcclxufVxyXG5AbWl4aW4gZm9ybS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbkBtaXhpbiBncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCkge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG59XHJcbkBtaXhpbiBmbGV4LWJveCgkZGlyZWN0aW9uKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5AbWl4aW4gZmxleC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gZmxleC1hbGlnbigkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuQG1peGluIGZsZXgtc3RyZXRjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gYm94LWJvcmRlcigkY29sb3IpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgYm94LXNoYWRvdzogMGVtIDBlbSAwLjNlbSAwLjAxZW0gJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1idXR0b24oJGJnY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC4ycmVtICNjY2M7XHJcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAkdGV4dC1zaXplO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "1naw":
/*!*********************************!*\
  !*** ./src/app/app.selector.ts ***!
  \*********************************/
/*! exports provided: selectAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAppState", function() { return selectAppState; });
const selectAppState = (state) => state;


/***/ }),

/***/ "6MEF":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/country-dashboard/edit-country/edit-country.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCountryComponent", function() { return EditCountryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_dashboard_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/dashboard.action */ "wwtL");
/* harmony import */ var _store_dashboard_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/dashboard.selector */ "k3YW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EditCountryComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter valid number of cases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditCountryComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter valid number of deaths ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditCountryComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter valid number of recovered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditCountryComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter valid number of tests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class EditCountryComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.showErrors = false;
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((params) => params['id']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((data) => {
            return this.store.select(Object(_store_dashboard_selector__WEBPACK_IMPORTED_MODULE_3__["selectCountryById"])(parseInt(data)));
        }))
            .subscribe((country) => {
            this.countryDetails = country;
            this.createFormGroup();
        });
        this.countryForm.valueChanges.subscribe(() => {
            this.showErrors = false;
        });
    }
    createFormGroup() {
        this.countryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            cases: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.countryDetails.cases, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            deaths: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.countryDetails.deaths, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            recovered: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.countryDetails.recovered, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            tests: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.countryDetails.tests, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    onCancelClick() {
        this.router.navigate(['country-list'], { relativeTo: this.route.parent });
    }
    onSaveClick() {
        if (this.validateForm()) {
            let country = Object.assign(Object.assign({}, this.countryDetails), { cases: this.countryForm.get('cases').value, deaths: this.countryForm.get('deaths').value, recovered: this.countryForm.get('recovered').value, tests: this.countryForm.get('tests').value });
            this.store.dispatch(_store_dashboard_action__WEBPACK_IMPORTED_MODULE_2__["SaveEdittedDetails"]({ country }));
            this.router.navigate(['country-list'], { relativeTo: this.route.parent });
        }
    }
    validateForm() {
        if (this.countryForm.invalid) {
            this.showErrors = true;
            return false;
        }
        this.showErrors = false;
        return true;
    }
    validateNumber(event) {
        let inputChar = event.key;
        const pattern = /[\.-]/;
        if (pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
EditCountryComponent.ɵfac = function EditCountryComponent_Factory(t) { return new (t || EditCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
EditCountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditCountryComponent, selectors: [["app-edit-country"]], decls: 25, vars: 5, consts: [[1, "country_dashboard_container", "dashboard_content"], [1, "header_section"], [1, "sub_header"], [1, "border_line"], [1, "form_section"], [3, "formGroup"], [1, "form_data"], [1, "input_group"], ["type", "number", "formControlName", "cases", "placeholder", "Cases", 1, "input_text", 3, "keydown"], ["class", "error_text", 4, "ngIf"], ["type", "number", "formControlName", "deaths", "placeholder", "Deaths", 1, "input_text", 3, "keydown"], ["type", "number", "formControlName", "recovered", "placeholder", "Recovered", 1, "input_text", 3, "keydown"], ["type", "number", "formControlName", "tests", "placeholder", "Tests", 1, "input_text", 3, "keydown"], [1, "buttons"], [1, "button_white", 3, "click"], [1, "button_blue", 3, "click"], [1, "error_text"]], template: function EditCountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function EditCountryComponent_Template_input_keydown_9_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EditCountryComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function EditCountryComponent_Template_input_keydown_12_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, EditCountryComponent_span_13_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function EditCountryComponent_Template_input_keydown_15_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, EditCountryComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function EditCountryComponent_Template_input_keydown_18_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EditCountryComponent_span_19_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditCountryComponent_Template_button_click_21_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditCountryComponent_Template_button_click_23_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.countryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.countryForm.get("cases").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.countryForm.get("deaths").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.countryForm.get("recovered").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors && ctx.countryForm.get("tests").invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".form_section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.form_data[_ngcontent-%COMP%] {\n  box-shadow: 0rem 0rem 0.4rem 0.2rem #e0e0e0;\n  padding: 3em;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-around;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.input_group[_ngcontent-%COMP%] {\n  width: 45%;\n  margin: 0em 0 2em 0;\n}\n\n.input_text[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  margin: 1em 0;\n  width: 92%;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2em 0;\n  justify-content: flex-end;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14%;\n  margin-left: 1em;\n}\n\n@media screen and (max-width: 800px) {\n  .form_section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .form_data[_ngcontent-%COMP%] {\n    padding: 0.8em;\n    flex-direction: column;\n  }\n\n  .input_group[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0em 0 0em 0;\n  }\n\n  .input_text[_ngcontent-%COMP%] {\n    margin: 0.5em 0;\n    width: 83%;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 45%;\n    padding: 0.5em;\n    margin-left: 0em;\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQ2NBLGFBQUE7RUFDQSxzQkRka0I7QUFEcEI7O0FBR0E7RUNORSwyQ0NDZ0I7RURBaEIsWUFBQTtFQUdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQVVBLGFBQUE7RUFDQSxtQkRUa0I7RUFDbEIsZUFBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBSkE7RUNMRSxhQUFBO0VBQ0Esc0JES2tCO0FBUXBCOztBQU5BO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVNGOztBQVJFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUEE7RUFDRTtJQUNFLFVBQUE7RUFVRjs7RUFSQTtJQUNFLGNBQUE7SUFDQSxzQkFBQTtFQVdGOztFQVRBO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBWUY7O0VBVkE7SUFDRSxlQUFBO0lBQ0EsVUFBQTtFQWFGOztFQVhBO0lBQ0UsOEJBQUE7RUFjRjtFQWJFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBZUo7QUFDRiIsImZpbGUiOiJlZGl0LWNvdW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Fzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uZm9ybV9zZWN0aW9uIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3goY29sdW1uKTtcclxufVxyXG4uZm9ybV9kYXRhIHtcclxuICBAaW5jbHVkZSBmb3JtLWNvbnRhaW5lcjtcclxuICBAaW5jbHVkZSBmb3JtLWJveDtcclxuICBAaW5jbHVkZSBmbGV4LWJveChyb3cpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uaW5wdXRfZ3JvdXAge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luOiAwZW0gMCAyZW0gMDtcclxufVxyXG4uaW5wdXRfdGV4dCB7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3goY29sdW1uKTtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybV9zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5mb3JtX2RhdGEge1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuaW5wdXRfZ3JvdXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBlbSAwIDBlbSAwO1xyXG4gIH1cclxuICAuaW5wdXRfdGV4dCB7XHJcbiAgICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgICB3aWR0aDogODMlO1xyXG4gIH1cclxuICAuYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGZvcm0tY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1ncmV5O1xyXG4gIHBhZGRpbmc6IDNlbTtcclxufVxyXG5AbWl4aW4gZm9ybS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbkBtaXhpbiBncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCkge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG59XHJcbkBtaXhpbiBmbGV4LWJveCgkZGlyZWN0aW9uKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5AbWl4aW4gZmxleC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gZmxleC1hbGlnbigkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuQG1peGluIGZsZXgtc3RyZXRjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWl4aW4gYm94LWJvcmRlcigkY29sb3IpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgYm94LXNoYWRvdzogMGVtIDBlbSAwLjNlbSAwLjAxZW0gJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1idXR0b24oJGJnY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC4ycmVtICNjY2M7XHJcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAkdGV4dC1zaXplO1xyXG59XHJcbiIsIiRiYXNlLWNvbG9yOiAjNDI2YmZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmO1xyXG4kYm94LXNoYWRvdy1ncmV5OiAwcmVtIDByZW0gMC40cmVtIDAuMnJlbSAjZTBlMGUwO1xyXG4kdGV4dC1zaXplOiAxZW07XHJcbiRjb2xvci1saXN0OiAjMDBkY2QyLCAjNDE0MWZiO1xyXG4kZXJyb3ItY29sb3I6IHJlZDtcclxuJGJhc2UtZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiRjb2xvci1ncmVlbjogIzAwZmZkMDtcclxuJG5hdi1ib3JkZXI6IDAuNGVtIHNvbGlkICRjb2xvci1ncmVlbjtcclxuJHRleHQtZ3JleTogIzllOWU5ZTtcclxuJGNvbG9yLWdyZXk6ICNjY2M7XHJcbiRjb2xvci1saWdodDogI2Y5ZjlmOTtcclxuIl19 */"] });


/***/ }),

/***/ "72v+":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/country-dashboard/country-list/country-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/dashboard.action */ "wwtL");
/* harmony import */ var _store_dashboard_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/dashboard.selector */ "k3YW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/search.pipe */ "ZPLk");









const _c0 = ["tileContainer"];
function CountryListComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", opt_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r4);
} }
function CountryListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CountryListComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "figure", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Deaths");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Recovered");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Population");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryListComponent_div_22_div_1_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.onCountryEdit(item_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r6.flagImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, item_r6.cases));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 9, item_r6.deaths));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 11, item_r6.recovered));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 13, item_r6.tests));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 15, item_r6.population));
} }
function CountryListComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CountryListComponent_div_22_div_1_Template, 41, 17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, ctx_r3.countryList, ctx_r3.filterForm.get("searchText").value, ctx_r3.filterMetadata), ctx_r3.startCount, ctx_r3.endCount));
} }
const _c1 = function (a0) { return { "disabled_arrow": a0 }; };
class CountryListComponent {
    constructor(store, detectChangeRef, router, route) {
        this.store = store;
        this.detectChangeRef = detectChangeRef;
        this.router = router;
        this.route = route;
        this.countryList = null;
        this.filterMetadata = { count: 0 };
        this.startCount = 0;
        this.endCount = 30;
        this.endDisplayCount = 30;
        this.totalDisplayCount = 0;
        this.editMode = false;
        this.sortByList = [
            'Country',
            'Cases',
            'Deaths',
            'Recovered',
            'Tests',
            'Population',
        ];
    }
    ngOnInit() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            sortBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Country'),
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.subscription1 = this.store.select(_store_dashboard_selector__WEBPACK_IMPORTED_MODULE_2__["selectCountryList"]).subscribe((data) => {
            this.countryList = data;
            if (this.countryList == null) {
                this.store.dispatch(_store_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["LoadCountryDashboard"]());
            }
            else {
                this.filterMetadata.count = this.countryList.length;
            }
        }, (error) => {
            alert('Unable to fetch data. Please try again after sometime');
        });
        this.subscription2 = this.filterForm
            .get('searchText')
            .valueChanges.subscribe((value) => {
            this.startCount = 0;
            this.endCount = 30;
            this.endDisplayCount = 30;
        });
        this.subscription3 = this.filterForm
            .get('sortBy')
            .valueChanges.subscribe((item) => {
            this.onFilterChanged(item);
        });
    }
    nextClicked() {
        if (this.endCount < this.filterMetadata.count) {
            this.startCount += 30;
            this.endCount += 30;
            this.endDisplayCount = this.endCount;
            if (this.endCount > this.filterMetadata.count) {
                this.endDisplayCount = this.filterMetadata.count;
            }
            this.tileContainer.nativeElement.scrollTop = 0;
        }
    }
    previousClicked() {
        if (this.startCount > 0) {
            this.startCount -= 30;
            this.endCount -= 30;
            this.endDisplayCount = this.endCount;
            this.tileContainer.nativeElement.scrollTop = 0;
        }
    }
    onFilterChanged(item) {
        item = item.toLowerCase();
        this.countryList = [...this.countryList].sort((a, b) => a[item] > b[item] ? 1 : a[item] < b[item] ? -1 : 0);
    }
    ngAfterContentChecked() {
        this.detectChangeRef.detectChanges();
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
    onCountryEdit(countryId) {
        this.router.navigate(['edit-country', countryId], {
            relativeTo: this.route.parent,
        });
    }
}
CountryListComponent.ɵfac = function CountryListComponent_Factory(t) { return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["app-country-list"]], viewQuery: function CountryListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tileContainer = _t.first);
    } }, decls: 23, vars: 13, consts: [[1, "country_dashboard_container", "dashboard_content"], [1, "header_section", 3, "formGroup"], [1, "sub_header"], [1, "text_box_section"], [1, "inputContainer"], ["aria-hidden", "true", 1, "fa", "fa", "fa-search"], ["type", "text", "formControlName", "searchText", "placeholder", "Search Country", 1, "box_input", "search_input"], ["name", "", "formControlName", "sortBy", 1, "box_input", "sort_select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "pagination_section"], [1, "page_count_span"], [1, "navigation_section"], [3, "click"], [1, "fa", "fa-chevron-circle-left", 3, "ngClass"], [1, "fa", "fa-chevron-circle-right", 3, "ngClass"], [1, "country_data_section"], ["tileContainer", ""], ["class", "spinner align-center", 4, "ngIf"], ["class", "tile_container", 4, "ngIf"], [3, "ngValue"], [1, "spinner", "align-center"], [1, "fa", "fa-spinner", "fa-pulse", "fa-3x", "fa-fw"], [1, "sr-only"], [1, "tile_container"], ["class", "card_content", 4, "ngFor", "ngForOf"], [1, "card_content"], [1, "tile", "count_tile"], [1, "flex_item"], [1, "country_flag_container"], [1, "flag_image", 3, "src"], [1, "flex_item", "country_count_row"], [1, "country_count_item"], [1, "edit_icon", 3, "click"], [1, "fa", "fa-edit"]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CountryListComponent_option_10_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryListComponent_Template_span_click_15_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CountryListComponent_Template_span_click_17_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "section", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CountryListComponent_div_21_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CountryListComponent_div_22_Template, 4, 9, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sortByList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx.startCount, " to ", ctx.filterMetadata.count > 30 ? ctx.endDisplayCount : ctx.filterMetadata.count, " of ", ctx.filterMetadata.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx.startCount == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c1, ctx.filterMetadata.count < 30 || ctx.endDisplayCount == ctx.filterMetadata.count));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.countryList == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.countryList !== null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".dashboard_content[_ngcontent-%COMP%] {\n  padding: 2em 3em;\n}\n\n.country_data_section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.header_section[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n\n.text_box_section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70%;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.fa-search[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2%;\n  top: 23%;\n  color: #ccc;\n}\n\n.inputContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30%;\n  margin-right: 1em;\n}\n\n.box_input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box_input.search_input[_ngcontent-%COMP%] {\n  padding-left: 2em;\n}\n\n.box_input.sort_select[_ngcontent-%COMP%] {\n  padding: 0.47em;\n}\n\n.pagination_section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.pagination_section[_ngcontent-%COMP%]   .page_count_span[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 1em;\n  width: 50%;\n}\n\n.navigation_section[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 0 0.5em;\n  color: blue;\n}\n\n.navigation_section[_ngcontent-%COMP%]   .disabled_arrow[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.tile_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card_content[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n\n.count_tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.6em;\n  width: 80%;\n  position: relative;\n}\n\n.edit_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n}\n\n.edit_icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #426bff;\n}\n\n.flex_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 100%;\n}\n\n.flex_item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0 1em;\n}\n\n.country_flag_container[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 2.5em;\n}\n\n.country_flag_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.country_count_row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.country_count_item[_ngcontent-%COMP%] {\n  color: #000;\n  width: 33%;\n  padding: 0.4em 0;\n}\n\n.country_count_item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n}\n\n.country_count_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\n@media screen and (max-width: 1200px) {\n  .country_count_item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n  .country_count_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.6em;\n  }\n\n  .pagination_section[_ngcontent-%COMP%]   .page_count_span[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n\n  .dashboard_content[_ngcontent-%COMP%] {\n    padding: 2em 2em;\n  }\n\n  .text_box_section[_ngcontent-%COMP%] {\n    width: 62%;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .country_count_item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .country_count_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .text_box_section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .inputContainer[_ngcontent-%COMP%] {\n    width: 46%;\n    margin: 0;\n  }\n\n  .text_box_section[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .country_count_item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n  .country_count_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n\n  .country_data_section[_ngcontent-%COMP%]   .count_tile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .country_data_section[_ngcontent-%COMP%]   .count_tile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .country_flag_container[_ngcontent-%COMP%] {\n    width: 3em;\n    height: 2em;\n  }\n\n  .pagination_section[_ngcontent-%COMP%] {\n    padding: 0.5em 0 0.2em 0;\n  }\n  .pagination_section[_ngcontent-%COMP%]   .page_count_span[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n  .pagination_section[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n  }\n\n  .inputContainer[_ngcontent-%COMP%] {\n    width: 46%;\n    margin: 0;\n  }\n\n  .text_box_section[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .dashboard_content[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n  }\n\n  .box_input[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFIRTtFQUNFLGlCQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0FBS0o7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFLRjs7QUFKRTtFQUNFLGNDcENRO0VEcUNSLGNDM0NRO0VENENSLFVBQUE7QUFNSjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIRTtFQUNFLFdDL0NTO0FEb0RiOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFRWpERSxhQUFBO0VBQ0Esc0JGaURrQjtFQUNsQixjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUkU7RUFDRSxjQzlFUztBRHdGYjs7QUFQQTtFRXRERSxhQUFBO0VBQ0EsbUJGc0RvQjtFRXJEcEIsb0JGcUQ0QjtFQUM1QixXQUFBO0FBWUY7O0FBWEU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVZBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFhRjs7QUFaRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWEE7RUUvRUUsYUFBQTtFQUNBLG1CRitFa0I7QUFlcEI7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBZUY7O0FBZEU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQWdCSjs7QUFkRTtFQUNFLGdCQUFBO0FBZ0JKOztBQWJBO0VBRUk7SUFDRSxnQkFBQTtFQWVKO0VBYkU7SUFDRSxnQkFBQTtFQWVKOztFQVhFO0lBQ0UsZ0JBQUE7RUFjSjs7RUFYQTtJQUNFLGdCQUFBO0VBY0Y7O0VBWkE7SUFDRSxVQUFBO0VBZUY7QUFDRjs7QUFiQTtFQUVJO0lBQ0UsY0FBQTtFQWNKO0VBWkU7SUFDRSxjQUFBO0VBY0o7O0VBWEE7SUFDRSxXQUFBO0VBY0Y7O0VBWkE7SUFDRSxVQUFBO0lBQ0EsU0FBQTtFQWVGOztFQWJBO0lBQ0UsV0FBQTtJQUNBLDhCQUFBO0VBZ0JGO0FBQ0Y7O0FBZEE7RUFFSTtJQUNFLGdCQUFBO0VBZUo7RUFiRTtJQUNFLGdCQUFBO0VBZUo7O0VBWEU7SUFDRSxXQUFBO0VBY0o7RUFiSTtJQUNFLGNBQUE7RUFlTjs7RUFYQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBY0Y7O0VBWkE7SUFDRSx3QkFBQTtFQWVGO0VBZEU7SUFDRSxnQkFBQTtFQWdCSjtFQWRFO0lBQ0UsZ0JBQUE7RUFnQko7O0VBYkE7SUFDRSxVQUFBO0lBQ0EsU0FBQTtFQWdCRjs7RUFkQTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtFQWlCRjs7RUFmQTtJQUNFLGdCQUFBO0VBa0JGOztFQWhCQTtJQUNFLGdCQUFBO0VBbUJGO0FBQ0YiLCJmaWxlIjoiY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zYXNzL21peGluc1wiO1xyXG4uZGFzaGJvYXJkX2NvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDJlbSAzZW07XHJcbn1cclxuXHJcbi5jb3VudHJ5X2RhdGFfc2VjdGlvbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5oZWFkZXJfc2VjdGlvbiB7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuLnRleHRfYm94X3NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZhLXNlYXJjaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIlO1xyXG4gIHRvcDogMjMlO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5pbnB1dENvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLmJveF9pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJi5zZWFyY2hfaW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgfVxyXG4gICYuc29ydF9zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMC40N2VtO1xyXG4gIH1cclxufVxyXG4ucGFnaW5hdGlvbl9zZWN0aW9uIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIC5wYWdlX2NvdW50X3NwYW4ge1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyZXk7XHJcbiAgICBmb250LXNpemU6ICR0ZXh0LXNpemU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4ubmF2aWdhdGlvbl9zZWN0aW9uIHtcclxuICAuZmEge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAuZGlzYWJsZWRfYXJyb3cge1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmV5O1xyXG4gIH1cclxufVxyXG4udGlsZV9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5jYXJkX2NvbnRlbnQge1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxufVxyXG4uY291bnRfdGlsZSB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3goY29sdW1uKTtcclxuICBwYWRkaW5nOiAwLjZlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZWRpdF9pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFlbTtcclxuICBib3R0b206IDFlbTtcclxuICAuZmEge1xyXG4gICAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIH1cclxufVxyXG4uZmxleF9pdGVtIHtcclxuICBAaW5jbHVkZSBmbGV4LWFsaWduKGNlbnRlciwgZW5kKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoNCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICB9XHJcbn1cclxuLmNvdW50cnlfZmxhZ19jb250YWluZXIge1xyXG4gIHdpZHRoOiA0ZW07XHJcbiAgaGVpZ2h0OiAyLjVlbTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5jb3VudHJ5X2NvdW50X3JvdyB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3gocm93KTtcclxufVxyXG5cclxuLmNvdW50cnlfY291bnRfaXRlbSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBwYWRkaW5nOiAwLjRlbSAwO1xyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb3VudHJ5X2NvdW50X2l0ZW0ge1xyXG4gICAgaDUge1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uX3NlY3Rpb24ge1xyXG4gICAgLnBhZ2VfY291bnRfc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kYXNoYm9hcmRfY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMmVtO1xyXG4gIH1cclxuICAudGV4dF9ib3hfc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNjIlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb3VudHJ5X2NvdW50X2l0ZW0ge1xyXG4gICAgaDUge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHRfYm94X3NlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbnB1dENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAudGV4dF9ib3hfc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY291bnRyeV9jb3VudF9pdGVtIHtcclxuICAgIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY291bnRyeV9kYXRhX3NlY3Rpb24ge1xyXG4gICAgLmNvdW50X3RpbGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb3VudHJ5X2ZsYWdfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcbiAgLnBhZ2luYXRpb25fc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDAuMmVtIDA7XHJcbiAgICAucGFnZV9jb3VudF9zcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuICAgIC5mYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAudGV4dF9ib3hfc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmRhc2hib2FyZF9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgfVxyXG4gIC5ib3hfaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6ICM0MjZiZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7XHJcbiRib3gtc2hhZG93LWdyZXk6IDByZW0gMHJlbSAwLjRyZW0gMC4ycmVtICNlMGUwZTA7XHJcbiR0ZXh0LXNpemU6IDFlbTtcclxuJGNvbG9yLWxpc3Q6ICMwMGRjZDIsICM0MTQxZmI7XHJcbiRlcnJvci1jb2xvcjogcmVkO1xyXG4kYmFzZS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuJGNvbG9yLWdyZWVuOiAjMDBmZmQwO1xyXG4kbmF2LWJvcmRlcjogMC40ZW0gc29saWQgJGNvbG9yLWdyZWVuO1xyXG4kdGV4dC1ncmV5OiAjOWU5ZTllO1xyXG4kY29sb3ItZ3JleTogI2NjYztcclxuJGNvbG9yLWxpZ2h0OiAjZjlmOWY5O1xyXG4iLCJAbWl4aW4gZm9ybS1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWdyZXk7XHJcbiAgcGFkZGluZzogM2VtO1xyXG59XHJcbkBtaXhpbiBmb3JtLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuQG1peGluIGdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbn1cclxuQG1peGluIGZsZXgtYm94KCRkaXJlY3Rpb24pIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcbkBtaXhpbiBmbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBmbGV4LWFsaWduKCRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5AbWl4aW4gZmxleC1zdHJldGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBib3gtYm9yZGVyKCRjb2xvcikge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBib3gtc2hhZG93OiAwZW0gMGVtIDAuM2VtIDAuMDFlbSAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWJ1dHRvbigkYmdjb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjJyZW0gI2NjYztcclxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICBmb250LXNpemU6ICR0ZXh0LXNpemU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "N/0t":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/country-dashboard/country-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: CountryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDashboardComponent", function() { return CountryDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CountryDashboardComponent {
    constructor() {
        this.editMode = false;
    }
    ngOnInit() { }
}
CountryDashboardComponent.ɵfac = function CountryDashboardComponent_Factory(t) { return new (t || CountryDashboardComponent)(); };
CountryDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryDashboardComponent, selectors: [["app-country-dashboard"]], decls: 1, vars: 0, template: function CountryDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _login_store_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/store/auth.action */ "eqOo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DashboardComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() { }
    onLogout() {
        this.store.dispatch(_login_store_auth_action__WEBPACK_IMPORTED_MODULE_0__["Logout"]());
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 10, vars: 0, consts: [[1, "dashboard_container"], [1, "left_nav_bar"], ["routerLink", "/dashboard/total-dashboard", "routerLinkActive", "active", 1, "nav_item"], ["aria-hidden", "true", 1, "fa", "fa-dashboard", "fa-2x"], ["routerLink", "/dashboard/country-dashboard", "routerLinkActive", "active", 1, "nav_item"], ["aria-hidden", "true", 1, "fa", "fa-flag", "fa-2x"], [1, "nav_item", "logout_icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-power-off", "fa-2x"], [1, "right_section"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_6_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".dashboard_container {\n  display: flex;\n  height: 100%;\n  padding: 0.2em;\n}\n\n.right_section {\n  flex-grow: 1;\n}\n\n.left_nav_bar {\n  display: flex;\n  flex-direction: column;\n  background-color: #426bff;\n  flex-basis: 4%;\n  border-radius: 0.34em;\n  box-shadow: 0rem 0rem 0.4rem 0.2rem #e0e0e0;\n}\n\n.nav_item {\n  cursor: pointer;\n  padding: 0.9em 0.7em;\n  margin: 0.5em 0;\n  border-left: 0.4em solid transparent;\n}\n\n.nav_item.active {\n  border-left: 0.4em solid #00ffd0;\n}\n\n.fa {\n  color: #fff;\n}\n\n.logout_icon {\n  margin-top: auto;\n}\n\n.card_content {\n  width: 33%;\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n}\n\n.count_tile {\n  border: 1px solid #426bff;\n  border-radius: 0.5em;\n  box-shadow: 0em 0em 0.3em 0.01em #426bff;\n  color: #426bff;\n  width: 85%;\n}\n\n.count_tile h4 {\n  font-size: 1.5vw;\n  font-family: \"Cop_light\";\n  margin: 0.3em 0;\n}\n\n.count_tile .count {\n  font-size: 3vw;\n}\n\n.fa-spinner {\n  color: #426bff;\n}\n\n.dashboard_content {\n  display: flex;\n  flex-direction: column;\n  padding: 3em;\n  height: 100%;\n  justify-content: space-between;\n}\n\n.header_section {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.box_input {\n  padding: 0.5em;\n  border: 1px solid #ccc;\n  box-shadow: 0em 0em 0.1em 0.1em #ccc;\n  border-radius: 0.2em;\n  box-sizing: border-box;\n}\n\n.box_input:focus-visible {\n  outline: #a5a5a5 auto 1px;\n}\n\n@media screen and (max-width: 480px) {\n  .dashboard_container {\n    flex-direction: column;\n  }\n\n  .left_nav_bar {\n    flex-direction: row;\n    padding: 0.5em 0 0 0;\n  }\n\n  .left_nav_bar .fa {\n    font-size: 1.2em;\n    margin: 0 0.2em;\n  }\n\n  .nav_item {\n    padding: 0.1em 0.7em;\n    margin: 0;\n    border-left: 0;\n    border-bottom: 0.4em solid transparent;\n  }\n  .nav_item.active {\n    border-left: 0;\n    border-bottom: 0.4em solid #00ffd0;\n  }\n\n  .dashboard_content {\n    padding: 2em;\n  }\n\n  .tile_container {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .card_content {\n    width: 100%;\n  }\n\n  .count_tile {\n    padding: 0.5em 0;\n  }\n  .count_tile h4 {\n    font-size: 0.8em;\n  }\n  .count_tile .count {\n    font-size: 1em;\n  }\n\n  .sub_header {\n    font-size: 1em;\n    text-align: center;\n  }\n\n  .header_section {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQ1FFLGFBQUE7RUFDQSxzQkRSa0I7RUFDbEIseUJFWlc7RUZhWCxjQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0ViZ0I7QUZlbEI7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFHRjs7QUFGRTtFQUNFLGdDRWZTO0FGbUJiOztBQURBO0VBQ0UsV0UxQmdCO0FGOEJsQjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VDREEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QURRRjs7QUFOQTtFQ0NFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtFRERBLGNFdENXO0VGdUNYLFVBQUE7QUFXRjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkU7RUFDRSxjQUFBO0FBWUo7O0FBVEE7RUFDRSxjRWxEVztBRjhEYjs7QUFWQTtFQ2xDRSxhQUFBO0VBQ0Esc0JEa0NrQjtFQUNsQixZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBY0Y7O0FBWkE7RUN4Q0UsYUFBQTtFQUNBLG1CRHdDa0I7RUFDbEIsbUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFpQkY7O0FBaEJFO0VBQ0UseUJBQUE7QUFrQko7O0FBZkE7RUFDRTtJQUNFLHNCQUFBO0VBa0JGOztFQWhCQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUFtQkY7O0VBZkU7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFrQko7O0VBZkE7SUFDRSxvQkFBQTtJQUNBLFNBQUE7SUFDQSxjQUFBO0lBQ0Esc0NBQUE7RUFrQkY7RUFqQkU7SUFDRSxjQUFBO0lBQ0Esa0NBQUE7RUFtQko7O0VBaEJBO0lBQ0UsWUFBQTtFQW1CRjs7RUFqQkE7SUFDRSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUFvQkY7O0VBbEJBO0lBQ0UsV0FBQTtFQXFCRjs7RUFuQkE7SUFDRSxnQkFBQTtFQXNCRjtFQXJCRTtJQUNFLGdCQUFBO0VBdUJKO0VBckJFO0lBQ0UsY0FBQTtFQXVCSjs7RUFwQkE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUF1QkY7O0VBckJBO0lBQ0Usc0JBQUE7RUF3QkY7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiL3NyYy9zYXNzL21peGluc1wiO1xyXG4uZGFzaGJvYXJkX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbn1cclxuLnJpZ2h0X3NlY3Rpb24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4ubGVmdF9uYXZfYmFyIHtcclxuICBAaW5jbHVkZSBmbGV4LWJveChjb2x1bW4pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZsZXgtYmFzaXM6IDQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzRlbTtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1ncmV5O1xyXG59XHJcbi5uYXZfaXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuOWVtIDAuN2VtO1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxuICBib3JkZXItbGVmdDogMC40ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6ICRuYXYtYm9yZGVyO1xyXG4gIH1cclxufVxyXG4uZmEge1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcbi5sb2dvdXRfaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG4uY2FyZF9jb250ZW50IHtcclxuICB3aWR0aDogMzMlO1xyXG4gIEBpbmNsdWRlIGZsZXgtc3RyZXRjaDtcclxufVxyXG4uY291bnRfdGlsZSB7XHJcbiAgQGluY2x1ZGUgYm94LWJvcmRlcigkYmFzZS1jb2xvcik7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvcF9saWdodFwiO1xyXG4gICAgbWFyZ2luOiAwLjNlbSAwO1xyXG4gIH1cclxuICAuY291bnQge1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG59XHJcbi5mYS1zcGlubmVyIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuLmRhc2hib2FyZF9jb250ZW50IHtcclxuICBAaW5jbHVkZSBmbGV4LWJveChjb2x1bW4pO1xyXG4gIHBhZGRpbmc6IDNlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkZXJfc2VjdGlvbiB7XHJcbiAgQGluY2x1ZGUgZmxleC1ib3gocm93KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ib3hfaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNoYWRvdzogMGVtIDBlbSAwLjFlbSAwLjFlbSAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6ICNhNWE1YTUgYXV0byAxcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmRhc2hib2FyZF9jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmxlZnRfbmF2X2JhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwIDA7XHJcbiAgfVxyXG5cclxuICAubGVmdF9uYXZfYmFyIHtcclxuICAgIC5mYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIG1hcmdpbjogMCAwLjJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdl9pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDAuN2VtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNGVtIHNvbGlkICRjb2xvci1ncmVlbjtcclxuICAgIH1cclxuICB9XHJcbiAgLmRhc2hib2FyZF9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbiAgLnRpbGVfY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb3VudF90aWxlIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgICAuY291bnQge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLnN1Yl9oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5oZWFkZXJfc2VjdGlvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZm9ybS1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWdyZXk7XHJcbiAgcGFkZGluZzogM2VtO1xyXG59XHJcbkBtaXhpbiBmb3JtLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuQG1peGluIGdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbn1cclxuQG1peGluIGZsZXgtYm94KCRkaXJlY3Rpb24pIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcbkBtaXhpbiBmbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBmbGV4LWFsaWduKCRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5AbWl4aW4gZmxleC1zdHJldGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtaXhpbiBib3gtYm9yZGVyKCRjb2xvcikge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBib3gtc2hhZG93OiAwZW0gMGVtIDAuM2VtIDAuMDFlbSAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBmb3JtLWJ1dHRvbigkYmdjb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjJyZW0gI2NjYztcclxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICBmb250LXNpemU6ICR0ZXh0LXNpemU7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6ICM0MjZiZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7XHJcbiRib3gtc2hhZG93LWdyZXk6IDByZW0gMHJlbSAwLjRyZW0gMC4ycmVtICNlMGUwZTA7XHJcbiR0ZXh0LXNpemU6IDFlbTtcclxuJGNvbG9yLWxpc3Q6ICMwMGRjZDIsICM0MTQxZmI7XHJcbiRlcnJvci1jb2xvcjogcmVkO1xyXG4kYmFzZS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuJGNvbG9yLWdyZWVuOiAjMDBmZmQwO1xyXG4kbmF2LWJvcmRlcjogMC40ZW0gc29saWQgJGNvbG9yLWdyZWVuO1xyXG4kdGV4dC1ncmV5OiAjOWU5ZTllO1xyXG4kY29sb3ItZ3JleTogI2NjYztcclxuJGNvbG9yLWxpZ2h0OiAjZjlmOWY5O1xyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _total_dashboard_total_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total-dashboard/total-dashboard.component */ "/vFh");
/* harmony import */ var _country_dashboard_country_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-dashboard/country-dashboard.component */ "N/0t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/auth-guard.service */ "pbGZ");
/* harmony import */ var _country_dashboard_edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country-dashboard/edit-country/edit-country.component */ "6MEF");
/* harmony import */ var _country_dashboard_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./country-dashboard/country-list/country-list.component */ "72v+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                    canActivate: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]],
                    children: [
                        { path: '', redirectTo: 'total-dashboard', pathMatch: 'full' },
                        { path: 'total-dashboard', component: _total_dashboard_total_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TotalDashboardComponent"] },
                        {
                            path: 'country-dashboard',
                            component: _country_dashboard_country_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["CountryDashboardComponent"],
                            children: [
                                { path: '', redirectTo: 'country-list' },
                                { path: 'country-list', component: _country_dashboard_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_9__["CountryListComponent"] },
                                {
                                    path: 'edit-country/:id',
                                    component: _country_dashboard_edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_8__["EditCountryComponent"],
                                },
                            ],
                        },
                    ],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        _total_dashboard_total_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TotalDashboardComponent"],
        _country_dashboard_country_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["CountryDashboardComponent"],
        _country_dashboard_edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_8__["EditCountryComponent"],
        _country_dashboard_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_9__["CountryListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "k3YW":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/store/dashboard.selector.ts ***!
  \*******************************************************/
/*! exports provided: selectTotalList, selectCountryList, selectCountryById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalList", function() { return selectTotalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryList", function() { return selectCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryById", function() { return selectCountryById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.selector */ "1naw");


const selectTotalList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectAppState"], (state) => state.dashboard.totalData);
const selectCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_app_selector__WEBPACK_IMPORTED_MODULE_1__["selectAppState"], (state) => state.dashboard.countryData);
const selectCountryById = (id) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCountryList, (state) => {
    let c = state.find((item) => item.id === id);
    return c;
});


/***/ }),

/***/ "pbGZ":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuardService {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((authData) => {
            if (authData.user) {
                return true;
            }
            else {
                this.router.navigate(['login']);
                return false;
            }
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map