(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailcontrol-detailcontrol-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detailcontrol/detailcontrol.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detailcontrol/detailcontrol.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n    </ion-buttons> \n    <ion-title>Detalle de Control</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div>\n            <ion-segment [(ngModel)]=\"control\">\n                <ion-segment-button\n                            value=\"parametros\">Parametros</ion-segment-button>\n                <ion-segment-button\n                            value=\"receta\">receta</ion-segment-button>\n            </ion-segment>\n          </div>\n            <div [ngSwitch]=\"control\">\n              <div *ngSwitchCase=\"'parametros'\">\n                  <h2  class=\"titulo\">Parametros Clínicos</h2>\n                  <ion-row>\n                    <ion-grid>\n                      <ion-row *ngFor=\"let parametro of parametros; let i = index\">\n                        <ion-col col-2 class=\"imagen\"><img src=\"./assets/imgs/{{i}}.png\" ></ion-col>\n                        <ion-col col-5 class=\"descripcion\">{{ parametro.descripcion}}</ion-col>\n                        <ion-col col-5 class=\"valor\">{{ parametro.valor }}   <span> {{ parametro.unidad}} </span></ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-row>\n      \n                  <ion-card class=\"cardRecomendaciones\">\n                    <ion-card-header>\n                      <p class=\"tituloRecomendaciones\">Recomendaciones del Doctor</p>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <p class=\"textoRecomendaciones\">\n                       {{notas}}\n                      </p>\n                    </ion-card-content>\n                  </ion-card>\n              </div>\n      \n              <div *ngSwitchCase=\"'receta'\"\n                   (click)=\"goToDetailRecipe()\">\n                <div padding *ngIf=\"recetas\">\n                  <div *ngFor=\"let recipe of recetas\">\n                    <ion-row>\n                      <ion-col col-3>\n                          <img src=\"./assets/imgs/recipes/{{recipe.formasfar_pk}}.png\" alt=\"\">\n                      </ion-col>\n                      <ion-col col-9>\n                          <p class=\"nombrePastilla\">{{recipe.nombre_generico}}</p>\n                      </ion-col>\n                    </ion-row>\n                       <!-- inicio de los datos de la pastilla -->\n                    <p class=\"cantidadDeDias\">Tratamiento de {{recipe.dias_duracion_prescripcion}} dias - {{recipe.nombre_via |lowercase }}</p>\n                    <p class=\"inicio\">primera {{recipe.formasfar_nom}} - {{recipe.inicio_prescripcion | date: \"dd MMMM yyyy\"}}</p>\n                     <!-- fin de los datos de la pastilla -->\n      \n                   <!-- inicio de los cuadros para las toma de pastilla -->\n                    <div *ngIf=\"recipes && recipe.cada_x_horas == 8\">\n                      <h4 class=\"tituloDeLasTomas\"> tomas de 3 veces por día</h4>\n                      <ion-row padding>\n                        <ion-col class=\"cuadrados\">\n                          <p> 6am - 9am</p>\n                          <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                          </ion-col>\n                        <ion-col class=\"cuadrados\">\n                          <p> 2pm - 4pm</p>\n                          <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                        </ion-col>\n                        <ion-col class=\"cuadrados\">\n                          <p>10pm - 12m</p>\n                          <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                        </ion-col>\n                      </ion-row>\n                  </div>\n      \n                  <div *ngIf=\"recipes && recipe.cada_x_horas == 12\">\n                    <p class=\"tituloDeLasTomas\"> tomas de 2 veces por día</p>\n                    <ion-row padding>\n                      <ion-col class=\"cuadrados\">\n                        <p> 6am-9am</p>\n                        <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                      </ion-col>\n                      <ion-col class=\"cuadrados\">\n                        <p>6pm-9m</p>\n                        <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n\n                  <div *ngIf=\"recipes && recipe.cada_x_horas == 13\">\n                    <p class=\"tituloDeLasTomas\"> tomas de 2 veces por día</p>\n                    <ion-row padding>\n                      <ion-col class=\"cuadrados\">\n                        <p> 6am-9am</p>\n                        <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                      </ion-col>\n                      <ion-col class=\"cuadrados\">\n                        <p>6pm-9m</p>\n                        <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n      \n                  <div *ngIf=\"recipes && recipe.cada_x_horas == 6\">\n                      <p class=\"tituloDeLasTomas\"> tomas de 4 veces por día</p>\n                      <ion-row padding>\n                        <ion-col class=\"cuadrados\">\n                          <p> 6am-8am</p>\n                          <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                        </ion-col>\n                        <ion-col class=\"cuadrados\">\n                            <p> 12m-2pm</p>\n                            <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                          </ion-col>\n                          <ion-col class=\"cuadrados\">\n                              <p> 6pm-8pm</p>\n                              <p class=\"cantidad\">{{recipe.cantidad_dosis}}</p>\n                            </ion-col>\n                        <ion-col class=\"cuadrados\">\n                          <p>12m-2am</p>\n                          <p class=\"cantidad\"> {{recipe.cantidad_dosis}} </p>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n      \n                </div>\n              </div>\n              <div *ngIf=\"!recetas\">\n                <p class=\"noRecipes\">No hay recetas para este control.</p>\n              </div>\n      \n                 <!-- fin de los cuadros para las toma de la pastilla -->\n                 <!-- inicio de los datos del doctor -->\n      \n                 <!-- fin de los datos del doctor -->\n              </div>\n            </div>\n          </ion-card>\n            <!-- receta si la hubiera -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detailcontrol/detailcontrol.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detailcontrol/detailcontrol.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailcontrolPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailcontrolPageModule", function() { return DetailcontrolPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detailcontrol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailcontrol.page */ "./src/app/pages/detailcontrol/detailcontrol.page.ts");







var routes = [
    {
        path: '',
        component: _detailcontrol_page__WEBPACK_IMPORTED_MODULE_6__["DetailcontrolPage"]
    }
];
var DetailcontrolPageModule = /** @class */ (function () {
    function DetailcontrolPageModule() {
    }
    DetailcontrolPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detailcontrol_page__WEBPACK_IMPORTED_MODULE_6__["DetailcontrolPage"]]
        })
    ], DetailcontrolPageModule);
    return DetailcontrolPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detailcontrol/detailcontrol.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/detailcontrol/detailcontrol.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background: #F5F5F5 !important;\n}\n\nul {\n  width: 100%;\n}\n\nli {\n  list-style-type: none;\n}\n\n.izquierda {\n  font-weight: 600;\n  font-size: 1.2em;\n}\n\n.derecha {\n  color: grey;\n  text-align: center;\n  margin-right: 20px;\n}\n\n.tituloControl {\n  color: #9483C8;\n  text-align: center;\n  margin-bottom: 2em;\n}\n\n.imagen img {\n  width: 25px !important;\n  height: auto !important;\n}\n\nion-col {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 15px !important;\n  height: 40px;\n}\n\n.titulo {\n  text-align: center;\n  color: #9483C8;\n  margin-top: 1em;\n}\n\n.descripcion {\n  text-align: center !important;\n  color: #444D4D;\n  font-size: 0.9em;\n}\n\n.valor {\n  text-align: right !important;\n}\n\n.valor span {\n  font-size: 0.8em;\n  color: #444D4D;\n  margin-left: 5px;\n  text-transform: lowercase;\n}\n\nh4 {\n  font-size: 1em !important;\n}\n\nion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.parametro {\n  color: #9483C8;\n  font-weight: 400;\n}\n\nion-card {\n  height: 100vh;\n  height: auto;\n  border-radius: 5px !important;\n}\n\n.cuadrados {\n  height: 80px;\n  background: #F5F5F5;\n  width: 95%;\n  margin-left: 5%;\n  color: #444D4D;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.cuadrados p {\n  font-size: 0.8em;\n}\n\n.cuadrados .cantidad {\n  color: #9483C8;\n  font-size: 1.8em;\n  margin-top: 10px;\n}\n\n.nombrePastilla {\n  color: #9483C8;\n  font-size: 1.1em;\n  font-weight: 400;\n  margin-top: 10px;\n  text-align: right;\n}\n\n.cantidadDeDias {\n  color: #444D4D;\n  margin-top: 40px;\n}\n\n.inicio {\n  color: #444D4D;\n  margin-top: 10px;\n}\n\n.tituloDeLasTomas {\n  color: #9483C8;\n  font-size: 1.2em !important;\n  font-weight: 600;\n  text-align: center;\n}\n\nimg {\n  width: 50px !important;\n  height: auto;\n}\n\n.cardRecomendaciones {\n  background: #F1F6F6;\n}\n\n.tituloRecomendaciones {\n  text-align: center;\n  font-size: 1.2em;\n  color: #9483C8;\n}\n\n.textoRecomendaciones {\n  font-size: 0.9em;\n  color: #A7A9AC;\n}\n\n.noRecipes {\n  color: #9483C8;\n  font-size: 1.2em;\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 10vh;\n  margin-bottom: 10vh;\n}\n\n.subituloCambio {\n  color: #A7A9AC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2RldGFpbGNvbnRyb2wvZGV0YWlsY29udHJvbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbGNvbnRyb2wvZGV0YWlsY29udHJvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtBQ0VSOztBREFJO0VBQ0kscUJBQUE7QUNHUjs7QURESTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FERkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0tSOztBREhJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ01OOztBREpJO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDT047O0FESkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDT047O0FETEk7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1FOOztBRE5JO0VBQ0UsNEJBQUE7QUNTTjs7QURSTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNVUjs7QURQSTtFQUNFLHlCQUFBO0FDVU47O0FEUkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1dOOztBRFRJO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0FDV047O0FEVEk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDWU47O0FEVEk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1lOOztBRFhRO0VBRUUsZ0JBQUE7QUNZVjs7QURWUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWVY7O0FEVE07RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNZTjs7QURWSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2FOOztBRFhJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDY047O0FEWkk7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZU47O0FEYkk7RUFDRyxzQkFBQTtFQUNBLFlBQUE7QUNnQlA7O0FEZEk7RUFDRSxtQkFBQTtBQ2lCTjs7QURmSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDa0JOOztBRGhCSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ21CTjs7QURqQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDb0JOOztBRGxCSTtFQUNFLGNBQUE7QUNxQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxjb250cm9sL2RldGFpbGNvbnRyb2wucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDojRjVGNUY1IWltcG9ydGFudDtcbiAgfVxuICAgIHVse1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgICAuaXpxdWllcmRhe1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuICAgIC5kZXJlY2hhe1xuICAgICAgICBjb2xvcjpncmV5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gICAgLnRpdHVsb0NvbnRyb2x7XG4gICAgICAgIGNvbG9yOiM5NDgzQzg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyZW07XG4gICAgfVxuICAgIC5pbWFnZW4gaW1ne1xuICAgICAgd2lkdGg6MjVweCFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY29se1xuICAgICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOjE1cHghaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgfVxuICAgIC50aXR1bG97XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjojOTQ4M0M4O1xuICAgICAgbWFyZ2luLXRvcDoxZW07XG4gICAgfVxuICAgIC5kZXNjcmlwY2lvbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjojNDQ0RDREO1xuICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgfVxuICAgIC52YWxvcntcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgICAgICBjb2xvcjojNDQ0RDREO1xuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGg0e1xuICAgICAgZm9udC1zaXplOjFlbSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnBhcmFtZXRyb3tcbiAgICAgIC8vIGZsb2F0OiBsZWZ0IWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiM5NDgzQzg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tY2FyZHtcbiAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC8vIGFxdWkgY29taWVuemFuIGxvcyBlc3RpbG9zIHBhcmEgbGEgdG9tYSBkZSBsYSBtZWRpY2luYVxuICAgIC5jdWFkcmFkb3N7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiNGNUY1RjU7XG4gICAgICB3aWR0aDo5NSU7XG4gICAgICBtYXJnaW4tbGVmdDo1JTtcbiAgICAgIGNvbG9yOiM0NDRENEQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBwe1xuICAgICAgICAgIC8vIG1hcmdpbi10b3A6LTVweDtcbiAgICAgICAgICBmb250LXNpemU6LjhlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2FudGlkYWR7XG4gICAgICAgICAgY29sb3I6Izk0ODNDODtcbiAgICAgICAgICBmb250LXNpemU6MS44ZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubm9tYnJlUGFzdGlsbGF7XG4gICAgICBjb2xvcjojOTQ4M0M4O1xuICAgICAgZm9udC1zaXplOjEuMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAuY2FudGlkYWREZURpYXN7XG4gICAgICBjb2xvcjojNDQ0RDREO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gICAgLmluaWNpb3tcbiAgICAgIGNvbG9yOiM0NDRENEQ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAudGl0dWxvRGVMYXNUb21hc3tcbiAgICAgIGNvbG9yOiM5NDgzQzg7XG4gICAgICBmb250LXNpemU6MS4yZW0haW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgd2lkdGg6NTBweCFpbXBvcnRhbnQ7XG4gICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAuY2FyZFJlY29tZW5kYWNpb25lc3tcbiAgICAgIGJhY2tncm91bmQ6ICNGMUY2RjY7XG4gICAgfVxuICAgIC50aXR1bG9SZWNvbWVuZGFjaW9uZXN7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICAgIGNvbG9yOiAjOTQ4M0M4O1xuICAgIH1cbiAgICAudGV4dG9SZWNvbWVuZGFjaW9uZXN7XG4gICAgICBmb250LXNpemU6LjllbTtcbiAgICAgIGNvbG9yOiNBN0E5QUM7XG4gICAgfVxuICAgIC5ub1JlY2lwZXN7XG4gICAgICBjb2xvcjojOTQ4M0M4O1xuICAgICAgZm9udC1zaXplOjEuMmVtO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OjE1JTtcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICBtYXJnaW4tYm90dG9tOjEwdmg7XG4gICAgfVxuICAgIC5zdWJpdHVsb0NhbWJpb3tcbiAgICAgIGNvbG9yOiNBN0E5QUM7XG4gICAgfSIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xufVxuXG51bCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLml6cXVpZXJkYSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5kZXJlY2hhIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udGl0dWxvQ29udHJvbCB7XG4gIGNvbG9yOiAjOTQ4M0M4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmltYWdlbiBpbWcge1xuICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk0ODNDODtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NDRENEQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi52YWxvciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4udmFsb3Igc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjNDQ0RDREO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcmFtZXRybyB7XG4gIGNvbG9yOiAjOTQ4M0M4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdWFkcmFkb3Mge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICM0NDRENEQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmN1YWRyYWRvcyBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jdWFkcmFkb3MgLmNhbnRpZGFkIHtcbiAgY29sb3I6ICM5NDgzQzg7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ub21icmVQYXN0aWxsYSB7XG4gIGNvbG9yOiAjOTQ4M0M4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhbnRpZGFkRGVEaWFzIHtcbiAgY29sb3I6ICM0NDRENEQ7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5pbmljaW8ge1xuICBjb2xvcjogIzQ0NEQ0RDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdHVsb0RlTGFzVG9tYXMge1xuICBjb2xvcjogIzk0ODNDODtcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNhcmRSZWNvbWVuZGFjaW9uZXMge1xuICBiYWNrZ3JvdW5kOiAjRjFGNkY2O1xufVxuXG4udGl0dWxvUmVjb21lbmRhY2lvbmVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk0ODNDODtcbn1cblxuLnRleHRvUmVjb21lbmRhY2lvbmVzIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNBN0E5QUM7XG59XG5cbi5ub1JlY2lwZXMge1xuICBjb2xvcjogIzk0ODNDODtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLnN1Yml0dWxvQ2FtYmlvIHtcbiAgY29sb3I6ICNBN0E5QUM7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/detailcontrol/detailcontrol.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/detailcontrol/detailcontrol.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailcontrolPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailcontrolPage", function() { return DetailcontrolPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/recipes.service */ "./src/app/service/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





/* import {siwtchMap} from 'rxjs/operators'; */
var DetailcontrolPage = /** @class */ (function () {
    function DetailcontrolPage(recipeSrv, route, routes) {
        this.recipeSrv = recipeSrv;
        this.route = route;
        this.routes = routes;
        this.parametros = [];
        this.encuentros = [];
        this.datos = false;
    }
    DetailcontrolPage.prototype.ngOnInit = function () {
        var _this = this;
        this.control = 'parametros';
        var encuentroObj = this.route.snapshot.paramMap.get('encuentroObj');
        this.encuentro = JSON.parse(encuentroObj);
        /* console.log('this.encuentro en detalle control:', this.encuentro); */
        console.log(this.encuentro);
        if (!this.encuentro.notas[0]) {
            this.notas = "no hay notas del doctor en este momento";
        }
        else {
            this.notas = this.encuentro.notas[0].valor_campo;
            this.parametros = this.encuentro.parametros;
            /* console.log(this.parametros); */
        }
        var id = this.encuentro.encuentro;
        this.recipeSrv.getRecipes(id).subscribe(function (data) {
            _this.recipes = data;
            console.log(_this.recipes);
            if (!_this.recipes[0]) {
                console.log('no hay recetas para este control');
            }
            else {
                _this.recetas = _this.recipes[0].prescripciones;
            }
            _this.inicioPrescripcion = _this.recipes.inicio_prescripcion;
            for (var i = 0; i < _this.recipes.length; i++) {
                var dias = moment__WEBPACK_IMPORTED_MODULE_4__(_this.recipes.fin_prescripcion).diff(_this.recipes.inicio_prescripcion, 'days');
                _this.recipes[i].dias = dias;
            }
        });
    };
    DetailcontrolPage.prototype.goToCita = function (c) {
        this.routes.navigate(['citas', {
                c: c
            }]);
    };
    DetailcontrolPage.prototype.goToDetailRecipe = function () {
    };
    DetailcontrolPage.ctorParameters = function () { return [
        { type: _service_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DetailcontrolPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailcontrol',
            template: __webpack_require__(/*! raw-loader!./detailcontrol.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detailcontrol/detailcontrol.page.html"),
            styles: [__webpack_require__(/*! ./detailcontrol.page.scss */ "./src/app/pages/detailcontrol/detailcontrol.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailcontrolPage);
    return DetailcontrolPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detailcontrol-detailcontrol-module-es5.js.map