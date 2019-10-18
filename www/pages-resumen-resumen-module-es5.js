(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resumen-resumen-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/resumen/resumen.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/resumen/resumen.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n        <ion-buttons slot=\"start\">\n                <ion-back-button></ion-back-button>\n          </ion-buttons>\n    <ion-title>Resumen y pago</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container-gris\">\n            <h3 class=\"titleCardPago\">Lo que has escogido hasta el momento</h3>\n          <div class=\"containerResumen\">\n            <ion-card class=\"CardDatosServicio\">\n                <div>\n                    <ion-row class=\"centrar\">\n                        <ion-col size=\"4\">\n                            <img id=\"profile-image\" src=\"http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{doctor.id}}.png\" > \n                        </ion-col>\n                        <ion-col size=\"8\">\n                            <h3 class=\"nombreDoctor\" text-center>\n                                {{ doctor.fullname }}\n                            </h3>\n                            <div class=\"sedeContainer\">\n                                <p class=\"sede\" type=\"text\" disabled=\"true\">Mendiola</p>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </div>\n                    <div  *ngIf=\"depe\"\n                        class=\"centrar\">\n                        <p class=\"izquierda\">Cita reservada para:</p>\n                        <p class=\"blue grande\" item-end type=\"text\" disabled=\"true\">\n                            {{ depe.name}}\n                        </p>\n                    </div>\n                    <div  class=\"centrar\">\n                        <p class=\"izquierda\">Especialidad:</p>\n                        <p item-end class=\"blue\" disabled=\"true\"> {{ doctor.service.description }}</p>\n                    </div>\n                    <div  class=\"centrar\">\n                        <p class=\"izquierda\">Fecha:</p>\n                        <p item-end class=\"blue altas\" disabled=\"true\">\n                            {{ available | date:'EEEE d De MMMM' : 'es' }}\n                        </p>\n                    </div>\n                    <div  class=\"centrar\">\n                        <p class=\"izquierda\">Hora:</p>\n                        <p class=\"blue\" type=\"text\" disabled=\"true\">\n                            {{ hora.hour | slice:0:5}}\n                        </p>\n                    </div>\n                    <div  class=\"centrar\">\n                        <p class=\"izquierda\">Costo:</p>\n                        <p class=\"blue\" item-end type=\"text\" disabled=\"true\">\n                            S/.{{ price }}\n                        </p>\n                    </div>\n                    \n            </ion-card> \n          </div>\n          \n        <hr class=\"linea\">\n        <div>\n                <h4 class=\"tituloPagos\">Escoge la forma en la que vas a pagar y listo...</h4>\n            <ion-row>\n                <ion-col size=\"6\">\n                                  <ion-button \n                                          ion-button color=\"primary\"\n                                          class=\"botonAccept\"\n                                          block\n                                          (click)=\"next()\"\n                                          >\n                                          <!--[disabled] = \"!desactivadoBotonLocal\" \n                                              [class.button-disabled]=\"true\" -->\n                                         <ion-row>\n                                             <ion-col size=\"12\" class=\"botonEfectivo\">\n                                                 <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/efectivo.png\" alt=\"\">\n                                             </ion-col>\n                                             <ion-col size=\"12\">\n                                                 <p>Pago en Local</p> \n                                             </ion-col>\n                                         </ion-row>\n                                        </ion-button>\n                              </ion-col>\n                              \n                <ion-col size=\"6\">\n                           <ion-button *ngIf=\"payCulqiCharges == true\"\n                                     color=\"secondary\" \n                                  class=\"botonAccept\" \n                                  block (click)=\"payCulqi()\" \n                                  >\n                                 <!-- [class.button-disabled]=\"true\" \n                                   [disabled] = \"desactivadoBoton == true\" -->\n                            <ion-row>\n                                    <ion-col size=\"12\" class=\"botonTarjeta\">\n                                        <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                                    </ion-col>\n                                    <ion-col col-12>\n                                        <p>Pago con tarjeta</p> \n                                    </ion-col>\n                                </ion-row> \n                            </ion-button>\n                            <ion-button *ngIf=\"retrying == true\"\n                                    ion-button color=\"secondary\" \n                                    class=\"botonAccept\" \n                                    block \n                                    >\n                                    <!--  [class.button-disabled]=\"true\" \n                                        (click)=\"retry()\" \n                                  [disabled] = \"!desactivadoBoton == true\" -->\n                            <ion-row>\n                                    <ion-col size=\"12\" class=\"botonTarjeta\">\n                                        <img class=\"iconosImagenes\" src=\"assets/imgs/cobro/tarjeta.png\" alt=\"\">\n                                    </ion-col>\n                                    <ion-col size=\"12\">\n                                        <p>Reintentar Pago</p> \n                                    </ion-col>\n                                </ion-row> \n                            </ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: API_ENDPOINT, IMAGESDOCTORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGESDOCTORS", function() { return IMAGESDOCTORS; });
var API_ENDPOINT = window['aviva'].baseUrl + '/api';
var IMAGESDOCTORS = window['aviva'].baseUrl + '/img/professionals/';
/* export const API_ENDPOINT= 'https://api.aviva.pe/middleware2/api'; */
/* export const IMAGESDOCTORS= 'https://api.aviva.pe/middleware2/api/img/professionals'; */
/* export const API_ENDPOINT= 'http://dappapache02.eastus.cloudapp.azure.com/middleware2/api';
export const IMAGESDOCTORS= 'http://dappapache02.eastus.cloudapp.azure.com/middleware2/api/img/professionals'; */


/***/ }),

/***/ "./src/app/pages/resumen/resumen.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/resumen/resumen.module.ts ***!
  \*************************************************/
/*! exports provided: ResumenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenPageModule", function() { return ResumenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resumen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resumen.page */ "./src/app/pages/resumen/resumen.page.ts");







var routes = [
    {
        path: '',
        component: _resumen_page__WEBPACK_IMPORTED_MODULE_6__["ResumenPage"]
    }
];
var ResumenPageModule = /** @class */ (function () {
    function ResumenPageModule() {
    }
    ResumenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resumen_page__WEBPACK_IMPORTED_MODULE_6__["ResumenPage"]]
        })
    ], ResumenPageModule);
    return ResumenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/resumen/resumen.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/resumen/resumen.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background-color: #F3F6F6!important;\n}\n\n.visa {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.mastercard {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.parrafoFinanciador {\n  color: #062F51;\n  text-align: center;\n  margin-bottom: 2em;\n  font-size: 1.2em;\n  font-weight: 300;\n  padding-top: 1em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.seguroList {\n  width: 90% !important;\n  margin-left: 5% !important;\n}\n\n.evaluate {\n  /*     background-color: #fff!important; */\n  width: 90%;\n  margin-left: 5%;\n  border: none !important;\n  border-bottom: 0.5px solid #D8D8D8 !important;\n  height: auto;\n}\n\n.evaluate p {\n  color: #00B6A3;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin-top: 8px;\n  text-transform: capitalize;\n}\n\n.item-md,\n.item-ios {\n  color: #9B9B9B;\n  font-size: 1em;\n  background: none;\n}\n\n.button.segment-activated {\n  border-bottom: 1px solid #979797;\n}\n\n.item-md-light,\n.item-divider-md-light,\n.item-ios-light,\n.item-divider-ios-light {\n  background-color: #fff;\n}\n\n.paymenyquestion {\n  margin-top: 3em;\n}\n\n.tiny {\n  font-size: 0.9em;\n}\n\n.cajagris {\n  background-color: #9B9B9B;\n  height: 100% !important;\n}\n\n.pagoEfectivo {\n  color: #9B9B9B;\n  font-size: 1em;\n  font-style: italic;\n  margin-bottom: 5em;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 1em;\n}\n\n.tituloPagos {\n  color: #062F51;\n  width: 80%;\n  text-align: center;\n  margin-left: 10%;\n  margin-top: 10px !important;\n  font-size: 1.2em;\n  padding-top: 1em;\n  font-weight: 200;\n}\n\n.tituloMetodos {\n  color: #9B9B9B;\n  padding-top: 1em;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 0 !important;\n}\n\n.container-gris {\n  background-color: #F3F6F6;\n  height: 100%;\n  padding-bottom: 1.5em;\n}\n\n.precio {\n  margin-right: 20px;\n  color: #062F51;\n  margin-bottom: 3em;\n  font-size: 1.1em;\n  font-weight: 500;\n}\n\n.list-ios > .item-block:last-child {\n  border-bottom: none;\n}\n\n.item-md.item-block .item-inner {\n  margin-bottom: 5px;\n}\n\n.item-md {\n  margin-bottom: 5px;\n}\n\n.list-md .item-block .item-inner,\n.item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.botonAccept {\n  height: 120px !important;\n  /* margin-top:-10px; */\n  width: 90%;\n  margin-left: 5%;\n}\n\n.segment-md .segment-button {\n  border-bottom: none;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated {\n  color: #00B6A3;\n  border-bottom: 1px solid #00B6A3;\n}\n\n.nombreDoctor {\n  color: #00B6A3;\n  font-size: 1.3em;\n  text-align: right !important;\n  margin-right: 20px;\n}\n\n.blue {\n  color: #979797;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 20px !important;\n}\n\nion-label {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n}\n\nimg {\n  width: 100px;\n  margin-left: calc( 50% - 50px);\n}\n\n.resumen {\n  padding-bottom: 1em;\n}\n\n.centrar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.centrar .izquierda {\n  color: #062F51;\n  margin-left: 20px;\n}\n\n.containerTextoPago {\n  background: #007198;\n}\n\n.containerTextoPago h3 {\n  color: #fff !important;\n  font-weight: 400;\n  padding: 10px 0;\n  margin-top: 0;\n  font-size: 1.1em;\n  text-align: center;\n}\n\n.sedeContainer {\n  text-align: right;\n}\n\n.sede {\n  color: #062F51;\n  font-size: 1.4em;\n  margin-right: 20px;\n}\n\n.containerResumen {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.altas {\n  text-transform: capitalize;\n}\n\n.grande {\n  font-size: 1.3em;\n  color: #00B6A3;\n}\n\n.CardDatosServicio {\n  border-top-right-radius: 25px;\n}\n\n.titleCardPago {\n  color: #062F51;\n  padding: 0.3em 0;\n  text-align: center;\n  font-size: 1.2em;\n  margin-bottom: -15px;\n}\n\n.linea {\n  border-style: double;\n  border-color: #007198;\n  border: 1px;\n  margin-top: 10px !important;\n}\n\n.iconosImagenes {\n  text-align: center;\n  width: 60px;\n  height: auto;\n}\n\n.botonTarjeta, .botonEfectivo {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL3Jlc3VtZW4vcmVzdW1lbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc3VtZW4vcmVzdW1lbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQ0FBQTtBQ0FSOztBREVFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQ0lKOztBREZBO0VBQ0EsMENBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0FDS0o7O0FESkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ01SOztBREhBOztFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURIQTtFQUNJLGdDQUFBO0FDTUo7O0FESkE7Ozs7RUFJSSxzQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURSQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDV0o7O0FEVEE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDYUo7O0FEWEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7QUNrQko7O0FEaEJBOztFQUVJLG1CQUFBO0FDbUJKOztBRGpCQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ29CSjs7QURsQkE7RUFDSSxtQkFBQTtBQ3FCSjs7QURuQkE7O0VBRUksY0FBQTtFQUNBLGdDQUFBO0FDc0JKOztBRHBCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUN1Qko7O0FEckJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FDeUJKOztBRHZCQTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQzBCSjs7QUR4QkE7RUFDSSxtQkFBQTtBQzJCSjs7QUR4QkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0FDMkJKOztBRDFCSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQzRCUjs7QUR6QkE7RUFDSSxtQkFBQTtBQzRCSjs7QUQzQkk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDNkJSOztBRDFCQTtFQUNFLGlCQUFBO0FDNkJGOztBRDNCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDOEJGOztBRDVCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0ksMEJBQUE7QUNnQ0o7O0FEOUJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDaUNKOztBRC9CQTtFQUNJLDZCQUFBO0FDa0NKOztBRGhDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ21DSjs7QURqQ0E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDb0NKOztBRGxDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNxQ0o7O0FEbkNBO0VBQ0ksNkJBQUE7QUNzQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN1bWVuL3Jlc3VtZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW9uLWNvbnRlbnR7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGNiFpbXBvcnRhbnQ7XG4gICAgfVxuICAudmlzYSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubWFzdGVyY2FyZCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucGFycmFmb0ZpbmFuY2lhZG9yIHtcbiAgICBjb2xvcjogIzA2MkY1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLnNlZ3Vyb0xpc3Qge1xuICAgIHdpZHRoOiA5MCUhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1JSFpbXBvcnRhbnQ7XG59XG4uZXZhbHVhdGUge1xuLyogICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50OyAqL1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjRDhEOEQ4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzAwQjZBMztcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG4uaXRlbS1tZCxcbi5pdGVtLWlvcyB7XG4gICAgY29sb3I6ICM5QjlCOUI7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5Nztcbn1cbi5idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xufVxuLml0ZW0tbWQtbGlnaHQsXG4uaXRlbS1kaXZpZGVyLW1kLWxpZ2h0LFxuLml0ZW0taW9zLWxpZ2h0LFxuLml0ZW0tZGl2aWRlci1pb3MtbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucGF5bWVueXF1ZXN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG4udGlueSB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuLmNhamFncmlzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG59XG4ucGFnb0VmZWN0aXZvIHtcbiAgICBjb2xvcjogIzlCOUI5QjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4udGl0dWxvUGFnb3N7XG4gIGNvbG9yOiMwNjJGNTE7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6MTAlO1xuICBtYXJnaW4tdG9wOjEwcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6MS4yZW07XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGZvbnQtd2VpZ2h0OjIwMDtcbn1cbi50aXR1bG9NZXRvZG9zIHtcbiAgICBjb2xvcjogIzlCOUI5QjtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MCFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyLWdyaXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2RjY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbn1cbi5wcmVjaW8ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBjb2xvcjogIzA2MkY1MTtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmxpc3QtaW9zPi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaXRlbS1tZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIsXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmJvdG9uQWNjZXB0IHtcbiAgICBoZWlnaHQ6IDEyMHB4IWltcG9ydGFudDtcbiAgICAvKiBtYXJnaW4tdG9wOi0xMHB4OyAqL1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDo1JTtcbn1cbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5hY3RpdmF0ZWQsXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xuICAgIGNvbG9yOiAjMDBCNkEzO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBCNkEzO1xufVxuLm5vbWJyZURvY3RvcntcbiAgICBjb2xvcjojMDBCNkEzO1xuICAgIGZvbnQtc2l6ZToxLjNlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG4uYmx1ZXtcbiAgICBjb2xvcjojOTc5Nzk3O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4IWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbHtcbiAgICBtYXJnaW4tdG9wOjVweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHghaW1wb3J0YW50O1xufVxuaW1ne1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSA1MHB4KTtcbn1cbi5yZXN1bWVue1xuICAgIHBhZGRpbmctYm90dG9tOjFlbTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNlbnRyYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICAuaXpxdWllcmRhe1xuICAgICAgICBjb2xvcjojMDYyRjUxO1xuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIH1cbn1cbi5jb250YWluZXJUZXh0b1BhZ297XG4gICAgYmFja2dyb3VuZDogIzAwNzE5ODtcbiAgICBoM3tcbiAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICBmb250LXNpemU6MS4xZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxufVxuLnNlZGVDb250YWluZXJ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNlZGV7XG4gIGNvbG9yOiMwNjJGNTE7XG4gIGZvbnQtc2l6ZToxLjRlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNvbnRhaW5lclJlc3VtZW57XG4gIG1hcmdpbi10b3A6MjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hbHRhc3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5ncmFuZGV7XG4gICAgZm9udC1zaXplOjEuM2VtO1xuICAgIGNvbG9yOiMwMEI2QTM7XG59XG4uQ2FyZERhdG9zU2VydmljaW97XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4udGl0bGVDYXJkUGFnb3tcbiAgICBjb2xvcjojMDYyRjUxO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206LTE1cHg7XG59XG4ubGluZWF7XG4gICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gICAgYm9yZGVyLWNvbG9yOiMwMDcxOTg7XG4gICAgYm9yZGVyOjFweDtcbiAgICBtYXJnaW4tdG9wOjEwcHghaW1wb3J0YW50O1xufVxuLmljb25vc0ltYWdlbmVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uYm90b25UYXJqZXRhLCAuYm90b25FZmVjdGl2b3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNkY2IWltcG9ydGFudDtcbn1cblxuLnZpc2Ege1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5tYXN0ZXJjYXJkIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ucGFycmFmb0ZpbmFuY2lhZG9yIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5zZWd1cm9MaXN0IHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbn1cblxuLmV2YWx1YXRlIHtcbiAgLyogICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50OyAqL1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRDhEOEQ4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbi5ldmFsdWF0ZSBwIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pdGVtLW1kLFxuLml0ZW0taW9zIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XG59XG5cbi5pdGVtLW1kLWxpZ2h0LFxuLml0ZW0tZGl2aWRlci1tZC1saWdodCxcbi5pdGVtLWlvcy1saWdodCxcbi5pdGVtLWRpdmlkZXItaW9zLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnBheW1lbnlxdWVzdGlvbiB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cblxuLnRpbnkge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uY2FqYWdyaXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCO1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhZ29FZmVjdGl2byB7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi50aXR1bG9QYWdvcyB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRpdHVsb01ldG9kb3Mge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXItZ3JpcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2RjY7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xufVxuXG4ucHJlY2lvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzA2MkY1MTtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLml0ZW0tbWQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyLFxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5ib3RvbkFjY2VwdCB7XG4gIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgLyogbWFyZ2luLXRvcDotMTBweDsgKi9cbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBCNkEzO1xufVxuXG4ubm9tYnJlRG9jdG9yIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzk3OTc5NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDUwcHgpO1xufVxuXG4ucmVzdW1lbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5jZW50cmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2VudHJhciAuaXpxdWllcmRhIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGFpbmVyVGV4dG9QYWdvIHtcbiAgYmFja2dyb3VuZDogIzAwNzE5ODtcbn1cbi5jb250YWluZXJUZXh0b1BhZ28gaDMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlZGVDb250YWluZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNlZGUge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29udGFpbmVyUmVzdW1lbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5hbHRhcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMwMEI2QTM7XG59XG5cbi5DYXJkRGF0b3NTZXJ2aWNpbyB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuXG4udGl0bGVDYXJkUGFnbyB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBwYWRkaW5nOiAwLjNlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuXG4ubGluZWEge1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MTk4O1xuICBib3JkZXI6IDFweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbm9zSW1hZ2VuZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib3RvblRhcmpldGEsIC5ib3RvbkVmZWN0aXZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/resumen/resumen.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/resumen/resumen.page.ts ***!
  \***********************************************/
/*! exports provided: ResumenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenPage", function() { return ResumenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/appointment.service */ "./src/app/service/appointment.service.ts");
/* harmony import */ var _service_culqi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/culqi.service */ "./src/app/service/culqi.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/constants */ "./src/app/constants.ts");







var ResumenPage = /** @class */ (function () {
    function ResumenPage(loadCtrl, router, routes, appointmentProvider, alertCtrl, culqiPrv) {
        this.loadCtrl = loadCtrl;
        this.router = router;
        this.routes = routes;
        this.appointmentProvider = appointmentProvider;
        this.alertCtrl = alertCtrl;
        this.culqiPrv = culqiPrv;
        this.currentAppointment = null;
        this.SERVERImage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["IMAGESDOCTORS"];
        this.payCulqiCharges = true;
        this.retrying = false;
        this.nots = [
            { "id": "1", "name": "En local" },
            { "id": "2", "name": "Con tarjeta" },
        ];
        this.desactivadoBoton = false;
        this.desactivadoBotonLocal = false;
    }
    ResumenPage.prototype.ngOnInit = function () {
        this.pago = 'enLocal';
        window['culqi'] = this.culqi.bind(this);
        /* console.log('culqi en resumen:', window['culqi']); */
        this.culqiData = JSON.parse(localStorage.getItem('culqiData'));
        /* window['Culqi'].publicKey = 'pk_live_CyArY9ygzb0d7oZb'; */
        window['Culqi'].publicKey = 'pk_test_e85SD7RVrWlW0u7z';
        var data = this.routes.snapshot.paramMap.get('datosObj');
        this.dataArmada = JSON.parse(data);
        /* console.log('dataArmada en resumen:', this.dataArmada); */
        this.hora = this.dataArmada.hora;
        this.doctor = this.dataArmada.doctor;
        this.price = this.dataArmada.plan.precio[0].total;
        this.subida = this.dataArmada.hora.listjson;
        this.plan = this.dataArmada.plan;
        this.available = this.dataArmada.available;
    };
    ResumenPage.prototype.culqi = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getSettings, metadata, data, loading_1, self_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window['Culqi'].token) return [3 /*break*/, 3];
                        getSettings = window['Culqi'].getSettings;
                        metadata = {
                            patientId: this.currentAppointment.patient.id,
                            appointmentId: this.currentAppointment.appointmentId,
                            planId: this.plan.plan_pk,
                            precioSinIGV: this.plan.precio[0].prest_precio_val,
                            precioConIGV: this.plan.precio[0].total
                        };
                        data = {
                            amount: getSettings.amount,
                            currency_code: getSettings.currency,
                            email: window['Culqi'].token.email,
                            source_id: window['Culqi'].token.id,
                            metadata: metadata
                        };
                        return [4 /*yield*/, this.loadCtrl.create({
                                message: 'pagando cita'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        this.payCulqiCharges = true;
                        self_1 = this;
                        this.culqiPrv.charges(data).subscribe(function (vuelta) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert_1;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        /* console.log('data', vuelta); */
                                        loading_1.dismiss();
                                        this.payCulqiCharges = true;
                                        if (!(vuelta.message == "ok")) return [3 /*break*/, 3];
                                        this.router.navigate(['tabs']);
                                        return [4 /*yield*/, this.alertCtrl.create({
                                                header: "Creación de cita",
                                                subHeader: "la cita que reservaste ha sido creada satisfactoriamente.",
                                                buttons: [
                                                    {
                                                        text: "OK",
                                                        role: 'cancel'
                                                    }
                                                ]
                                            })];
                                    case 1:
                                        alert_1 = _a.sent();
                                        return [4 /*yield*/, alert_1.present()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        /* console.log('data', vuelta); */
                                        this.alertError = this.alertCtrl.create({
                                            header: 'error en tarjeta',
                                            subHeader: 'problema en el cargo en su tarjeta',
                                            buttons: [
                                                {
                                                    text: 'cerrar',
                                                    handler: function () {
                                                        _this.payCulqiCharges = true;
                                                        _this.desactivadoBoton = true;
                                                    }
                                                },
                                                {
                                                    text: 'ver mis citas',
                                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var alert;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    this.router.navigate(['tabs']);
                                                                    return [4 /*yield*/, this.alertCtrl.create({
                                                                            header: "Pago en Clínica",
                                                                            subHeader: 'Tu pago no pudo ser realizado pero no te preocupes paga en la clínica tu cita fue reservada ...',
                                                                            buttons: [
                                                                                {
                                                                                    text: 'ok'
                                                                                }
                                                                            ]
                                                                        })];
                                                                case 1:
                                                                    alert = _a.sent();
                                                                    return [4 /*yield*/, alert.present()];
                                                                case 2:
                                                                    _a.sent();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); }
                                                }
                                            ]
                                        });
                                        this.alertError.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*  dateValid(month: string, year: string) {
       return (group: FormGroup) => {
         let date = new Date();
         let monthInput = group.controls[month];
         let yearInput = group.controls[year];
   
         if (yearInput.value == date.getFullYear())
           if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
             return monthInput.setErrors({ notEquivalent: true })
       }
     } */
    ResumenPage.prototype.openCulqi = function () {
        var _this = this;
        /* const loadingPago = await this.loadCtrl.create({
          message: "Haciendo el cobro...",
        });
        await loadingPago.present(); */
        var appointment = this.currentAppointment;
        if (this.currentAppointment) {
            /*  console.log('this.plan', this.plan); */
            var settings = {
                title: this.plan.plan_desc,
                description: this.plan.precio[0].prest_item_desc,
                currency: "PEN",
                amount: this.price * 100
            };
            /* console.log('settings:', settings); */
            window['Culqi'].options({
                style: {
                    logo: 'https://api.aviva.pe/logo_aviva.png'
                }
            });
            window['Culqi'].settings(settings);
            /* console.log("open CUlqi", settings); */
            var metadata = {
                patientId: this.currentAppointment.patient.id,
                appointmentId: this.currentAppointment.appointmentId,
                planId: this.plan.plan_pk,
                precioSinIGV: this.plan.precio[0].prest_precio_val,
                precioConIGV: this.plan.precio[0].total
            };
            /* console.log('metadata:', metadata); */
            window['Culqi'].open();
            var i_1 = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var culqiObj, alert_2;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            culqiObj = window['Culqi'];
                            /* console.log(culqiObj); */
                            if (culqiObj['closeEvent'] != null) {
                                console.log('Formulario culqi cerrado', culqiObj['closeEvent']);
                                clearInterval(i_1);
                            }
                            if (!(culqiObj['error'] != undefined)) return [3 /*break*/, 3];
                            /* console.log('Formulario culqi error', culqiObj['error']); */
                            clearInterval(i_1);
                            return [4 /*yield*/, this.alertCtrl.create({
                                    header: 'error al hacer cargo',
                                    message: 'hubo un error alhacer cargo con la tarjeta',
                                    buttons: [
                                        {
                                            text: 'reintentar',
                                            handler: function () {
                                                _this.desactivadoBoton = true;
                                            }
                                        },
                                        {
                                            text: 'Pagar en Clínica',
                                            handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var alert;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                                header: "Pago en Clínica",
                                                                subHeader: 'Tu pago no pudo ser realizado pero no te preocupes paga en la clínica tu cita fue reservada ...',
                                                                buttons: [
                                                                    {
                                                                        text: 'ok'
                                                                    }
                                                                ]
                                                            })];
                                                        case 1:
                                                            alert = _a.sent();
                                                            return [4 /*yield*/, alert.present()];
                                                        case 2:
                                                            _a.sent();
                                                            this.router.navigate(['tabs']);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }
                                        }
                                    ]
                                })];
                        case 1:
                            alert_2 = _a.sent();
                            return [4 /*yield*/, alert_2.present()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }, 1000);
            /* loadingPago.dismiss();  */
        }
    };
    ResumenPage.prototype.payCulqi = function () {
        var _this = this;
        this.desactivadoBoton = false;
        /* console.log('this.price:', this.price); */
        if (this.currentAppointment) {
            /* console.log('this.currentAppoinment:', this.currentAppointment); */
            this.payCulqiCharges = true;
            this.openCulqi();
            return;
        }
        var provisionId = this.hora.params.provisionId;
        this.appointmentProvider.createAppointment(this.subida, provisionId)
            .subscribe(function (data) {
            _this.currentAppointment = data;
            /* console.log('currentAppointment:', this.currentAppointment); */
            _this.openCulqi();
        }, function (err) {
            if (_this.currentAppointment !== null) {
                _this.openCulqi();
                return;
            }
            console.log('err', err);
            if (!err) {
                return;
            }
            var code = err.error.data.errorCode;
            var alert;
            switch (code) {
                case 15006:
                    // case 15035:
                    alert = _this.alertCtrl.create({
                        header: 'Aviso al Cliente',
                        subHeader: 'Ya tienes una cita en una hora cercana a esta.',
                        buttons: [
                            {
                                text: 'Buscar otra hora',
                                handler: function (data) {
                                    _this.router.navigate(['tabs']);
                                }
                            }
                        ]
                    });
                    alert.present();
                    break;
                case 15009:
                case 15035:
                    alert = _this.alertCtrl.create({
                        header: 'Aviso al Cliente',
                        subHeader: 'El horario escogido ya fue tomado .',
                        buttons: [
                            {
                                text: 'Buscar otra hora',
                                handler: function (data) {
                                    _this.router.navigate(['tabs']);
                                }
                            }
                        ],
                    });
                    alert.present();
                    break;
                default:
                    break;
            }
        });
    };
    /* retry(){
      const settings = {
        title : this.plan.plan_desc,
        description:this.plan.precio[0].prest_item_desc,
        currency: "PEN",
        amount: this.price * 100
      };
  
      window['Culqi'].options({
        style:{
          logo: 'https://api.aviva.pe/logo_aviva.png'
        }
      });
  
    window['Culqi'].settings(settings);
  
    console.log("open CUlqi", settings);
    const metadata = {
      patientId:this.currentAppointment.patient.id,
      appointmentId:this.currentAppointment.appointmentId,
      planId:this.plan.plan_pk,
      precioSinIGV:this.plan.precio[0].prest_precio_val,
      precioConIGV:this.plan.precio[0].total
    }
    window['Culqi'].open();
    console.log('metadata:', metadata);
    console.log('culqi del componente', this);
    if(window['Culqi'].token){
      const getSettings = window['Culqi'].getSettings;
      const metadata = {
        patientId:this.currentAppointment.patient.id,
        appointmentId:this.currentAppointment.appointmentId,
        planId:this.plan.plan_pk,
        precioSinIGV:this.plan.precio[0].prest_precio_val,
        precioConIGV:this.plan.precio[0].total
      }
      const data = {
        amount : getSettings.amount,
        currency_code : getSettings.currency,
        email : window['Culqi'].token.email,
        source_id : window['Culqi'].token.id,
        metadata
      }
      console.log('data:', data);
        this.culqiPvr.charges(data).subscribe( vuelta =>{
          this.culqiReturn = vuelta;
        });
    }else{
      console.log('data', this.culqiReturn);
      let alert = this.alertCtrl.create({
          title:'error en tarjeta',
          subTitle: 'problema en el cargo en su tarjeta',
          buttons : [
            {
              text:'reintentar',
              handler:()=>{
                this.desactivadoBoton = true;
                this.retrying = true;
              }
            },
            {
              text:'pagar en local',
              handler: ()=>{
                this.navCtrl.push(MyDatesPage);
              }
            }
          ]
      })
      alert.present();
    }
  } */
    ResumenPage.prototype.next = function () {
        var _this = this;
        var provisionId = this.hora.params.provisionId;
        this.desactivadoBotonLocal = false;
        this.appointmentProvider.createAppointment(this.subida, provisionId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert_3, loading, alert_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data.ok == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Problema de reserva",
                                subHeader: "" + data.error.help,
                                buttons: [
                                    {
                                        text: 'Buscar otro horario',
                                        handler: function () {
                                            /* this.navCtrl.push(CardPage); */
                                            _this.router.navigate(['tabs']);
                                        }
                                    }, {
                                        text: 'cancelar',
                                        handler: function () {
                                            _this.router.navigate(['home']);
                                            /* this.navCtrl.push(HomePage); */
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        alert_3.present();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.loadCtrl.create({
                            message: "creando cita"
                        })];
                    case 3:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Creación de cita",
                                subHeader: "la cita que reservaste ha sido creada satisfactoriamente.",
                                buttons: [
                                    {
                                        text: "Ok",
                                        role: "Cancel"
                                    }
                                ]
                            })];
                    case 4:
                        alert_4 = _a.sent();
                        loading.dismiss();
                        return [4 /*yield*/, alert_4.present()];
                    case 5:
                        _a.sent();
                        /* this.navCtrl.setRoot(HomePage); */
                        this.router.navigate(['tabs']);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    ResumenPage.prototype.gotosave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var providerId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.desactivadoBotonLocal = false;
                providerId = this.hora.params.provisionId;
                /* console.log('this.providerId:', providerId); */
                this.appointmentProvider.createAppointment(this.subida, providerId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading, alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadCtrl.create({
                                    message: 'Creando cita...'
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                /* this.navCtrl.setRoot(TabsPage); */
                                this.router.navigate(['tabs']);
                                loading.dismiss();
                                return [4 /*yield*/, this.alertCtrl.create({
                                        header: 'Cita creada',
                                        subHeader: 'Su cita se ha creado satisfactoriamente',
                                        buttons: [
                                            {
                                                text: 'Ok',
                                                handler: function (data) {
                                                }
                                            }
                                        ]
                                    })];
                            case 2:
                                alert = _a.sent();
                                alert.present();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log('error de masterDetail:', err);
                    var code = err.error.data.errorCode;
                    var alert;
                    /* switch (code) {
                      case 15006:
                        // case 15035:
                        const alert = this.alertCtrl.create({
                          header: 'Aviso al Cliente',
                          subHeader: 'Ya tienes una cita en una hora cercana a esta.',
                          buttons: [
                            {
                              text: 'Buscar otra hora',
                              handler: data => {
                                this.router.navigate(['citas-pendientes']);
                              }
                            }
                          ]
                        });
                        const alert.present();
                        break;
            
                      case 15009:
                        const alert = await this.alertCtrl.create({
                          header: 'Aviso al Cliente',
                          subHeader: 'El horario escogido ya fue tomado .',
                          buttons: [
                            {
                              text: 'Buscar otra hora',
                              handler: data => {
                                this.router.navigate(['citas-pendientes']);
                              }
                            }
                          ]
                        });
                        alert.present();
                        break;
            
                      default:
                        break;
                    } */
                });
                return [2 /*return*/];
            });
        });
    };
    ResumenPage.prototype.goBack = function () {
        /* this.navCtrl.pop(); */
    };
    ResumenPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_culqi_service__WEBPACK_IMPORTED_MODULE_5__["CulqiService"] }
    ]; };
    ResumenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resumen',
            template: __webpack_require__(/*! raw-loader!./resumen.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/resumen/resumen.page.html"),
            styles: [__webpack_require__(/*! ./resumen.page.scss */ "./src/app/pages/resumen/resumen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_culqi_service__WEBPACK_IMPORTED_MODULE_5__["CulqiService"]])
    ], ResumenPage);
    return ResumenPage;
}());



/***/ }),

/***/ "./src/app/service/culqi.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/culqi.service.ts ***!
  \******************************************/
/*! exports provided: CulqiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulqiService", function() { return CulqiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var CulqiService = /** @class */ (function () {
    function CulqiService(http) {
        this.http = http;
        /* private apiUrlCulqi = 'https://api.aviva.pe/middleware2/api/v2/ebooking/culqi-charges'; */
        /* private apiUrlCulqi = 'https://api.aviva.pe/middleware2-copy/api/v2/ebooking/culqi-charges'; */
        this.apiUrlCulqi = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + "ebooking/culqi-charges";
    }
    CulqiService.prototype.charges = function (data) {
        var authorization = localStorage.getItem('authorization');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        var params = data;
        return this.http.post(this.apiUrlCulqi, params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    CulqiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CulqiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CulqiService);
    return CulqiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-resumen-resumen-module-es5.js.map