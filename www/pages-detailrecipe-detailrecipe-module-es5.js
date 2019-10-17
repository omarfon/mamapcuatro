(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailrecipe-detailrecipe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detailrecipe/detailrecipe.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detailrecipe/detailrecipe.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n    <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>detalle receta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"contenedorDatos\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"iconoReceta\">\n                  <p class=\"dia\">{{date.inicio_prescripcion | date:'dd'}}</p>\n                  <p class=\"mes\">{{date.inicio_prescripcion | date:'MMMM'}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <p class=\"especialidad\">Especialidad:</p>\n                <p class=\"resultado\">{{date.servicio}}</p>\n                <p class=\"especialidad\">Doctor:</p>\n                <p class=\"resultado\">{{date.apellidop_personal}} {{date.apellidom_personal}}</p>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n      </div>\n    \n        <div *ngIf=\"recetas\">\n            <div *ngFor=\"let recipe of recetas\">\n              <ion-card>\n                <ion-card-header text-wrap>\n                    <ion-row>\n                        <ion-col size=\"3\"\n                              class=\"containerIconAndDays\">\n                            <img src=\"assets/imgs/recipes/{{recipe.formasfar_pk}}.png\" alt=\"\">\n                            <p class=\"cantidadDeDias\">{{recipe.dias_duracion_prescripcion}}</p>\n                            <p class=\"dias\">días</p>\n                        </ion-col>\n                        <ion-col size=\"9\"\n                                 class=\"containerDatosPastilla\">\n                            <h3 class=\"nombrePastilla\"\n                               *ngIf=\"recipe.nombre_generico\">\n                               {{recipe.nombre_generico}}\n                        </h3>\n                            <p class=\"textoAlternativo\"\n                            *ngIf=\"recipe.marca_comercial\">\n                            o puedes encontrarlo como:\n                            </p>\n                            <p class=\"nombrePastilla\"\n                              *ngIf=\"recipe.marca_comercial\">\n                              {{recipe.marca_comercial}}\n                            </p>\n                              <p class=\"inicio\">Inicio: {{recipe.inicio_prescripcion | date: \"dd MMMM yyyy\"}}</p>\n                        </ion-col>\n                      </ion-row>\n                </ion-card-header>\n                \n                <ion-card-content>\n                    <div *ngIf=\"recetas && recipe.cada_x_horas == 8\"\n                    class=\"down\">\n                <h4 class=\"tituloDeLasTomas\"> tomas de 3 veces por día</h4>\n                <ion-row padding>\n                  <ion-col class=\"cuadrados\">\n                    <p> 6-9 am</p>\n                    <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                    </ion-col>\n                  <ion-col class=\"cuadrados\">\n                    <p> 2-4 pm</p>\n                    <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                  <ion-col class=\"cuadrados\">\n                    <p>10-12 m</p>\n                    <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                </ion-row>\n            </div>\n    \n            <div *ngIf=\"recetas && recipe.cada_x_horas == 12 || recetas && recipe.cada_x_horas == 13\"\n                  class=\"down\">\n              <p class=\"tituloDeLasTomas\"> tomas de 2 veces por día</p>\n              <ion-row padding>\n                <ion-col class=\"cuadrados\">\n                  <p> 6-9 am</p>\n                  <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                </ion-col>\n                <ion-col class=\"cuadrados\">\n                  <p>6-9 pm</p>\n                  <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                </ion-col>\n              </ion-row>\n            </div>\n    \n            <div *ngIf=\"recetas && recipe.cada_x_horas == 6\"\n            class=\"down\">\n                <p class=\"tituloDeLasTomas\"> tomas de 4 veces por día</p>\n                <ion-row padding>\n                  <ion-col class=\"cuadrados\">\n                    <p> 6-8 am</p>\n                    <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                  </ion-col>\n                  <ion-col class=\"cuadrados\">\n                      <p> 12-2 pm</p>\n                      <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                    </ion-col>\n                    <ion-col class=\"cuadrados\">\n                        <p> 6-8 pm</p>\n                        <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                      </ion-col>\n                  <ion-col class=\"cuadrados\">\n                    <p>12-2 m</p>\n                    <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                  </ion-col>\n                </ion-row>\n              </div>\n    \n              <div *ngIf=\"recetas && recipe.cada_x_horas == 24\"\n              class=\"down\">\n                  <p class=\"tituloDeLasTomas\"> toma de 1 vez por día</p>\n                  <ion-row padding>\n                    <ion-col class=\"cuadrados\">\n                      <p> 6-8 am</p>\n                      <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                    </ion-col>\n    \n                  </ion-row>\n                </div>\n                </ion-card-content>\n              </ion-card>\n          </div>\n        </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detailrecipe/detailrecipe.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/detailrecipe/detailrecipe.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailrecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailrecipePageModule", function() { return DetailrecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detailrecipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailrecipe.page */ "./src/app/pages/detailrecipe/detailrecipe.page.ts");







var routes = [
    {
        path: '',
        component: _detailrecipe_page__WEBPACK_IMPORTED_MODULE_6__["DetailrecipePage"]
    }
];
var DetailrecipePageModule = /** @class */ (function () {
    function DetailrecipePageModule() {
    }
    DetailrecipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detailrecipe_page__WEBPACK_IMPORTED_MODULE_6__["DetailrecipePage"]]
        })
    ], DetailrecipePageModule);
    return DetailrecipePageModule;
}());



/***/ }),

/***/ "./src/app/pages/detailrecipe/detailrecipe.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/detailrecipe/detailrecipe.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuadrados {\n  height: 60px;\n  background: #F5F5F5;\n  width: 90%;\n  margin-left: 5%;\n  color: #444D4D;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.cuadrados p {\n  font-size: 0.8em;\n  color: #BABCC2;\n  margin-bottom: 5px;\n}\n.cuadrados .cantidad {\n  color: #444D4D;\n  font-size: 1.8em;\n  margin-top: 0;\n}\n.nombrePastilla {\n  color: #007198;\n  font-size: 0.9em;\n  font-weight: 400;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  text-align: right;\n  margin-right: 10px;\n}\n.cantidadDeDias, .inicio {\n  color: #444D4D;\n}\n.tituloDeLasTomas {\n  color: #00B6A3;\n  font-size: 1.1em !important;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0;\n}\nimg {\n  width: 50px !important;\n  height: auto;\n  margin-top: 10px;\n}\n.down {\n  margin-bottom: 10px;\n}\n.contenedorDatos {\n  height: 120px;\n  margin-bottom: 2em;\n}\n.especialidad {\n  margin-right: 20px;\n  color: #BABCC2;\n  font-weight: 600;\n  font-size: 1.1em;\n  margin-left: 10px;\n}\n.resultado {\n  color: #BABCC2;\n  font-weight: 200;\n  font-size: 1em;\n  margin-top: -5px;\n  margin-left: 10px;\n}\n.iconoReceta {\n  text-align: center;\n  border-right: 0.2px solid #444D4D;\n  height: 100px;\n}\n.iconoReceta h4 {\n  color: grey;\n  text-align: center;\n  margin-top: 10px;\n}\n.iconoReceta ion-icon {\n  color: #007198;\n  font-size: 3em;\n}\n.dia {\n  margin-top: 20px;\n  font-size: 3.5em;\n  font-weight: 600;\n  color: #BABCC2;\n}\n.mes {\n  color: #BABCC2;\n  margin-top: -60px;\n  font-size: 1.1em;\n}\n.cantidadDeDias {\n  margin-top: 20px;\n  font-size: 3.5em;\n  font-weight: 600;\n  color: #BABCC2;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.textoAlternativo {\n  color: #BABCC2;\n  font-size: 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: right;\n  margin-right: 10px;\n}\n.containerIconAndDays {\n  text-align: center;\n}\n.dias {\n  margin-top: -15px;\n  color: #BABCC2;\n}\n.inicio {\n  color: #444D4D;\n  text-align: right;\n  margin-top: 10px;\n  margin-right: 10px;\n}\nion-card-header {\n  padding: 0 16px !important;\n  box-sizing: border-box !important;\n}\n.containerDatosPastilla {\n  box-sizing: border-box;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2RldGFpbHJlY2lwZS9kZXRhaWxyZWNpcGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWxyZWNpcGUvZGV0YWlscmVjaXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURBTTtFQUVFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDUjtBREdJO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQ0o7QURDRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNFSjtBREFFO0VBQ0csc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHTDtBRERFO0VBQ0UsbUJBQUE7QUNJSjtBRERFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDSUo7QURGRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0tKO0FESEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ09KO0FETkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1FOO0FETkk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ1FOO0FETEU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUo7QURORTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDU0o7QURQRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNVSjtBRFJFO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDV047QURURTtFQUVJLGtCQUFBO0FDV047QURURTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1lKO0FEVkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDYUo7QURYRTtFQUNFLDBCQUFBO0VBQ0EsaUNBQUE7QUNjSjtBRFpFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxyZWNpcGUvZGV0YWlscmVjaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdWFkcmFkb3N7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6I0Y1RjVGNTtcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgY29sb3I6IzQ0NEQ0RDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgcHtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDotNXB4O1xuICAgICAgICBmb250LXNpemU6LjhlbTtcbiAgICAgICAgY29sb3I6I0JBQkNDMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgICB9XG4gICAgICAuY2FudGlkYWR7XG4gICAgICAgIGNvbG9yOiM0NDRENEQ7XG4gICAgICAgIGZvbnQtc2l6ZToxLjhlbTtcbiAgICAgICAgbWFyZ2luLXRvcDowO1xuXG4gICAgICB9XG4gICAgfVxuICAgIC5ub21icmVQYXN0aWxsYXtcbiAgICBjb2xvcjojMDA3MTk4O1xuICAgIGZvbnQtc2l6ZTouOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cbiAgLmNhbnRpZGFkRGVEaWFzLCAuaW5pY2lve1xuICAgIGNvbG9yOiM0NDRENEQ7XG4gIH1cbiAgLnRpdHVsb0RlTGFzVG9tYXN7XG4gICAgY29sb3I6IzAwQjZBMztcbiAgICBmb250LXNpemU6MS4xZW0haW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICAgIG1hcmdpbi10b3A6MDtcbiAgfVxuICBpbWd7XG4gICAgIHdpZHRoOjUwcHghaW1wb3J0YW50O1xuICAgICBoZWlnaHQ6IGF1dG87XG4gICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfVxuICAuZG93bntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI0RGREZERjtcbiAgfVxuICAuY29udGVuZWRvckRhdG9ze1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToyZW07XG4gIH1cbiAgLmVzcGVjaWFsaWRhZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6I0JBQkNDMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZToxLjFlbTtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICB9XG4gIC5yZXN1bHRhZG97XG4gICAgY29sb3I6I0JBQkNDMjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgbWFyZ2luLXRvcDotNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIH1cbiAgLmljb25vUmVjZXRhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IC4ycHggc29saWQgIzQ0NEQ0RDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGg0e1xuICAgICAgY29sb3I6Z3JleTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICBjb2xvcjojMDA3MTk4O1xuICAgICAgZm9udC1zaXplOjNlbTtcbiAgICB9XG4gIH1cbiAgLmRpYXtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZm9udC1zaXplOjMuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6I0JBQkNDMjtcbiAgfVxuICAubWVze1xuICAgIGNvbG9yOiNCQUJDQzI7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgZm9udC1zaXplOjEuMWVtO1xuICB9XG4gIC5jYW50aWRhZERlRGlhc3tcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZm9udC1zaXplOjMuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6I0JBQkNDMjtcbiAgICBtYXJnaW4tdG9wOjA7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIC50ZXh0b0FsdGVybmF0aXZve1xuICAgICAgY29sb3I6I0JBQkNDMjtcbiAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuY29udGFpbmVySWNvbkFuZERheXN7XG4gICAgICAvLyBib3JkZXI6MXB4IHNvbGlkICM0NDRENEQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmRpYXN7XG4gICAgbWFyZ2luLXRvcDotMTVweDtcbiAgICBjb2xvcjojQkFCQ0MyO1xuICB9XG4gIC5pbmljaW97XG4gICAgY29sb3I6IzQ0NEQ0RDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlcntcbiAgICBwYWRkaW5nOjAgMTZweCFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lckRhdG9zUGFzdGlsbGF7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICB9IiwiLmN1YWRyYWRvcyB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogIzQ0NEQ0RDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY3VhZHJhZG9zIHAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI0JBQkNDMjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmN1YWRyYWRvcyAuY2FudGlkYWQge1xuICBjb2xvcjogIzQ0NEQ0RDtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5vbWJyZVBhc3RpbGxhIHtcbiAgY29sb3I6ICMwMDcxOTg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNhbnRpZGFkRGVEaWFzLCAuaW5pY2lvIHtcbiAgY29sb3I6ICM0NDRENEQ7XG59XG5cbi50aXR1bG9EZUxhc1RvbWFzIHtcbiAgY29sb3I6ICMwMEI2QTM7XG4gIGZvbnQtc2l6ZTogMS4xZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kb3duIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRlbmVkb3JEYXRvcyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmVzcGVjaWFsaWRhZCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICNCQUJDQzI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucmVzdWx0YWRvIHtcbiAgY29sb3I6ICNCQUJDQzI7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmljb25vUmVjZXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDAuMnB4IHNvbGlkICM0NDRENEQ7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uaWNvbm9SZWNldGEgaDQge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmljb25vUmVjZXRhIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDcxOTg7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uZGlhIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNCQUJDQzI7XG59XG5cbi5tZXMge1xuICBjb2xvcjogI0JBQkNDMjtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5jYW50aWRhZERlRGlhcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjQkFCQ0MyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGV4dG9BbHRlcm5hdGl2byB7XG4gIGNvbG9yOiAjQkFCQ0MyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbnRhaW5lckljb25BbmREYXlzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlhcyB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBjb2xvcjogI0JBQkNDMjtcbn1cblxuLmluaWNpbyB7XG4gIGNvbG9yOiAjNDQ0RDREO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyRGF0b3NQYXN0aWxsYSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detailrecipe/detailrecipe.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/detailrecipe/detailrecipe.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailrecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailrecipePage", function() { return DetailrecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetailrecipePage = /** @class */ (function () {
    function DetailrecipePage(routes, router) {
        this.routes = routes;
        this.router = router;
    }
    DetailrecipePage.prototype.ngOnInit = function () {
        this.data = this.router.snapshot.paramMap.get('datosObj');
        this.datosObj = JSON.parse(this.data);
        this.recetas = this.datosObj.prescripciones;
        this.date = this.datosObj.prescripciones[0];
        /* console.log(this.datosObj); */
    };
    DetailrecipePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DetailrecipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailrecipe',
            template: __webpack_require__(/*! raw-loader!./detailrecipe.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detailrecipe/detailrecipe.page.html"),
            styles: [__webpack_require__(/*! ./detailrecipe.page.scss */ "./src/app/pages/detailrecipe/detailrecipe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailrecipePage);
    return DetailrecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detailrecipe-detailrecipe-module-es5.js.map