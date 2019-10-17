(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-week-detail-week-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-week/detail-week.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-week/detail-week.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n    </ion-buttons> \n    <ion-title *ngIf=\"evolution\"> detalle semana {{evolution[0].semana}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"evolution\">\n        <!-- aqui el contenido de bebe -->\n          <div  class=\"datosBebe\">\n            <ion-row>\n              <ion-col size=\"2\">\n                <ion-avatar>\n                  <img class=\"iconBebe\" src=\"assets/imgs/icons/evobaby.png\" alt=\"\">\n                </ion-avatar>\n              </ion-col>\n              <ion-col size=\"10\"\n                        class=\"contenedorTitulo\">\n                <p class=\"tituloBebe\">¿Como esta mi bebe?</p>\n              </ion-col>\n            </ion-row>\n              <div *ngIf=\"evolution[1].texto\">\n                <ion-row >\n                  <ion-col size=\"7\" class=\"textoCompara\">\n                    <p>\n                      {{evolution[1].texto}}\n                    </p>\n                  </ion-col>\n                  <ion-col size=\"5\" >\n                      <img src=\"{{evolution[1].imagenUrl}}\" alt=\"\">\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <div *ngIf=\"evolution[3]\" padding>\n                        <p class=\"contenidoCambiosMama\">{{evolution[3].texto}}</p>\n                      </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n  \n  \n          <!-- aqui el contenido de mama -->\n          <div>\n            <ion-row>\n              <ion-col size=\"2\">\n                <ion-avatar>\n                  <img src=\"assets/imgs/icons/evomama.png\" alt=\"\">\n                </ion-avatar>\n              </ion-col>\n              <ion-col size=\"10\"\n                        class=\"contenedorTitulo\">\n                <p class=\"tituloMama\">¿Que me pasa esta semana?</p>\n              </ion-col>\n            </ion-row>\n            <div *ngIf=\"evolution[4]\" padding>\n              <p class=\"contenidoCambiosMama\">{{evolution[4].texto}}</p>\n            </div>\n          </div>\n  \n  \n        <!-- aqui el contenido de nutricion -->\n          <div>\n            <ion-row *ngIf=\"evolution[2]\">\n                <ion-col size=\"2\">\n                  <ion-avatar>\n                    <img src=\"assets/imgs/icons/nutricion.png\" alt=\"\">\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size=\"10\"\n                          class=\"contenedorTitulo\">\n                  <p class=\"tituloNutricion\">Nutrición</p>\n                </ion-col>\n              </ion-row>\n              <div *ngIf=\"evolution[2].texto\" padding>\n                  <p class=\"textoEvoBebe\">\n                    {{evolution[2].texto}}\n                  </p>\n              </div>\n          </div>\n      </ion-card>\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail-week/detail-week.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-week/detail-week.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailWeekPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWeekPageModule", function() { return DetailWeekPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_week_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-week.page */ "./src/app/pages/detail-week/detail-week.page.ts");







var routes = [
    {
        path: '',
        component: _detail_week_page__WEBPACK_IMPORTED_MODULE_6__["DetailWeekPage"]
    }
];
var DetailWeekPageModule = /** @class */ (function () {
    function DetailWeekPageModule() {
    }
    DetailWeekPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_week_page__WEBPACK_IMPORTED_MODULE_6__["DetailWeekPage"]]
        })
    ], DetailWeekPageModule);
    return DetailWeekPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detail-week/detail-week.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-week/detail-week.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentText {\n  text-align: justify;\n  width: 90%;\n  margin-left: 5%;\n  color: #808080;\n}\n\n.tituloEvoBebe {\n  margin-left: 5%;\n  color: #57c789;\n  font-weight: 600;\n}\n\nmat-expansion-panel {\n  margin-bottom: 15px !important;\n}\n\nmat-expansion-panel-header {\n  height: 100px !important;\n  margin-bottom: 1em !important;\n  background: #57c789 !important;\n}\n\nmat-expansion-panel-header mat-panel-title {\n  color: #fff !important;\n  font-size: 1.3em;\n}\n\n.bebeCard {\n  background: #9483c8 !important;\n  background-image: url \"https://eresmama.com/wp-content/uploads/2016/09/black-friday-productos-bebes-2016.jpg\" !important;\n  width: 100%;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nmat-expansion-panel-header {\n  margin-bottom: 0 !important;\n}\n\nion-avatar {\n  margin-left: 10px;\n}\n\nion-avatar img {\n  height: 40px;\n  width: 40px;\n}\n\n.contenedorTitulo {\n  text-align: left;\n}\n\n.tituloBebe {\n  color: #a4a3a3;\n  font-size: 1.4em;\n  font-weight: 600;\n  text-align: left;\n}\n\n.tituloMama {\n  color: #a4a3a3;\n  font-size: 1.4em;\n  font-weight: 600;\n  text-align: left;\n}\n\n.contenidoEvoBebe {\n  color: #808080;\n}\n\nul {\n  padding-left: 20px !important;\n}\n\nul li {\n  margin-bottom: 0.3em;\n}\n\n.containerImagenEvo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.imagenComparativa {\n  width: 220px;\n  height: 140px;\n  text-align: center;\n}\n\n.contenidoCambiosMama {\n  color: #808080;\n  text-align: justify;\n}\n\n.tituloEvoBebe {\n  color: #a4a3a3;\n  text-align: left;\n  font-size: 1.4em;\n  font-weight: 600;\n  margin-top: 1.2em;\n  margin-bottom: 1em;\n}\n\n.textoEvoBebe {\n  color: #808080;\n  text-align: justify;\n}\n\n.textoCompara {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.textoCompara p {\n  font-size: 1em;\n  margin-left: 20px;\n  color: #808080;\n}\n\n.tituloNutricion {\n  color: #a4a3a3;\n  font-size: 1.4em;\n  line-height: 1.1em;\n  text-align: left;\n  font-weight: 600;\n}\n\n.datosBebe {\n  margin-top: 20px;\n}\n\n.datosBebe ion-avatar img {\n  width: 40px !important;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2RldGFpbC13ZWVrL2RldGFpbC13ZWVrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWlsLXdlZWsvZGV0YWlsLXdlZWsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QURIRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURGQTtFQUNFLDhCQUFBO0VBQ0Esd0hBQUE7RUFJQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLDJCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBREZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNJSjs7QUREQTtFQUNFLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FETEE7RUFDRSw2QkFBQTtBQ1FGOztBRFBFO0VBQ0Usb0JBQUE7QUNTSjs7QUROQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ1dGOztBRFRBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ2FGOztBRFhBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNjRjs7QURiRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNlSjs7QURaQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsZ0JBQUE7QUNnQkY7O0FEZkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWwtd2Vlay9kZXRhaWwtd2Vlay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuLnRpdHVsb0V2b0JlYmUge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjNTdjNzg5O1xuICBmb250LXdlaWdodDogNjAwO1xufVxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzU3Yzc4OSAhaW1wb3J0YW50O1xuICBtYXQtcGFuZWwtdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxufVxuLmJlYmVDYXJkIHtcbiAgYmFja2dyb3VuZDogIzk0ODNjOCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmxcbiAgICAoXG4gICAgICBcImh0dHBzOi8vZXJlc21hbWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA5L2JsYWNrLWZyaWRheS1wcm9kdWN0b3MtYmViZXMtMjAxNi5qcGdcIlxuICAgICkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLy8gc3RpbG9zIGNhcmQgZXZvbHVjaW9uIGJlYmVcbmlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cbi5jb250ZW5lZG9yVGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50aXR1bG9CZWJlIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGl0dWxvTWFtYSB7XG4gIGNvbG9yOiAjYTRhM2EzO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbmlkb0V2b0JlYmUge1xuICBjb2xvcjogIzgwODA4MDtcbn1cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbiAgfVxufVxuLmNvbnRhaW5lckltYWdlbkV2byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmltYWdlbkNvbXBhcmF0aXZhIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVuaWRvQ2FtYmlvc01hbWEge1xuICBjb2xvcjogIzgwODA4MDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi50aXR1bG9Fdm9CZWJlIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4udGV4dG9Fdm9CZWJlIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4udGV4dG9Db21wYXJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICB9XG59XG4udGl0dWxvTnV0cmljaW9uIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kYXRvc0JlYmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBpb24tYXZhdGFyIGltZyB7XG4gICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbiIsIi5jb250ZW50VGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi50aXR1bG9Fdm9CZWJlIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogIzU3Yzc4OTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNTdjNzg5ICFpbXBvcnRhbnQ7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBtYXQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uYmViZUNhcmQge1xuICBiYWNrZ3JvdW5kOiAjOTQ4M2M4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCBcImh0dHBzOi8vZXJlc21hbWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA5L2JsYWNrLWZyaWRheS1wcm9kdWN0b3MtYmViZXMtMjAxNi5qcGdcIiAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uY29udGVuZWRvclRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXR1bG9CZWJlIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXR1bG9NYW1hIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250ZW5pZG9Fdm9CZWJlIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG51bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uY29udGFpbmVySW1hZ2VuRXZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZW5Db21wYXJhdGl2YSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuaWRvQ2FtYmlvc01hbWEge1xuICBjb2xvcjogIzgwODA4MDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnRpdHVsb0V2b0JlYmUge1xuICBjb2xvcjogI2E0YTNhMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnRleHRvRXZvQmViZSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG9Db21wYXJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dG9Db21wYXJhIHAge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4udGl0dWxvTnV0cmljaW9uIHtcbiAgY29sb3I6ICNhNGEzYTM7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRhdG9zQmViZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZGF0b3NCZWJlIGlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detail-week/detail-week.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-week/detail-week.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailWeekPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWeekPage", function() { return DetailWeekPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_notas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notas.service */ "./src/app/service/notas.service.ts");




var DetailWeekPage = /** @class */ (function () {
    function DetailWeekPage(routes, route, notaSrv) {
        this.routes = routes;
        this.route = route;
        this.notaSrv = notaSrv;
    }
    DetailWeekPage.prototype.ngOnInit = function () {
        var _this = this;
        this.evo = this.route.snapshot.paramMap.get("evo");
        this.notaSrv.getNota(this.evo).subscribe(function (data) {
            _this.evolution = data;
            console.log('this.evolution:', _this.evolution);
        });
    };
    DetailWeekPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_notas_service__WEBPACK_IMPORTED_MODULE_3__["NotasService"] }
    ]; };
    DetailWeekPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-week',
            template: __webpack_require__(/*! raw-loader!./detail-week.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-week/detail-week.page.html"),
            styles: [__webpack_require__(/*! ./detail-week.page.scss */ "./src/app/pages/detail-week/detail-week.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_notas_service__WEBPACK_IMPORTED_MODULE_3__["NotasService"]])
    ], DetailWeekPage);
    return DetailWeekPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-week-detail-week-module-es5.js.map