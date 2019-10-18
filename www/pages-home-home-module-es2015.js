(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button slot=\"end\"\n                  clear>\n                {{name}}\n      </ion-button>\n        <!-- <ion-button icon-only (click)=\"openFilters($event)\">\n            <ion-icon name=\"wine\"></ion-icon>\n        </ion-button> -->\n      <!--<ion-button color=\"secondary\"\n                  [routerLink]=\"'/chat'\"\n                  color=\"light\">\n        <ion-icon slot=\"end\" name=\"chatbubbles\"></ion-icon>\n      </ion-button>-->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-row>\n                <!-- card para las semanas de embarazo -->\n                <ion-col size=\"6\" (click)=\"goToEvolution()\">\n                    <ion-card >\n                        <div class=\"cuadrado top10\">\n                          <div class=\"marginTop10\">\n                          <ion-row *ngIf=\"totaldias\">\n                            <ion-col size=\"12\">\n                              <p class=\"textoNombre\"> {{nombre}} hoy tienes:</p>\n                            </ion-col>\n\n                              <ion-col size=\"1\">\n                              </ion-col>\n                                <ion-col size=\"7\"  >\n                                    <p class=\"nSemanas\">{{ totaldias |slice:0:2 }}</p>\n                                    <p class=\"pSemanas\">Semanas</p>\n                                </ion-col>\n                                <ion-col size=\"4\" >\n                                  <div class=\"blanco\">\n                                    <p  class=\"nDias\">{{ diasPendientes }}</p>\n                                    <p class=\"pDias\">dias</p>\n                                  </div>\n                                </ion-col>\n                              </ion-row>\n                            </div>\n    \n                        </div>\n                    </ion-card>\n                </ion-col>\n    \n                <!-- card para el calculo manual de embarazo, sino tienes cuenta , este es el que debería usarse -->\n                <ion-col size=\"6\" >\n                <ion-card class=\"contenedorFechas\" >\n                  <div class=\"margenTexto\">\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <p class=\"textoFalta\">solo faltan:</p>\n                        <ion-row>\n                          <ion-col size=\"6\">\n                            <p class=\"semanasFaltantes\">{{fechaPosible }}</p>\n                            <p class=\"textoSemanasFaltantes\">semanas</p>\n                          </ion-col>\n                          <ion-col size=\"6\">\n                            <p class=\"diasFaltantes\">{{diasFaltantes}}</p>\n                            <p class=\"textoDiasFaltantes\">dias</p>\n                          </ion-col>\n                          <ion-col size=\"12\">\n                            <p class=\"textoFechaPosible\">fecha probable de parto:</p>\n                            <p class=\"posibleDate\">{{posible | date }}</p>  \n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                <!-- <ng-template #xhis>\n                        <ion-card\n                          class=\"sinFecha\">\n                                <p class=\"tituloSemanas\">¿Cálcula cuantas semanas tienes?</p>\n                                        <ion-row>\n                                            <mat-form-field\n                                                  class=\"inputFecha\">\n                                                <input matInput [matDatepicker]=\"picker\"\n                                                      placeholder=\"seleccione el día\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                                                <mat-datepicker touchUi=\"true\" #picker ></mat-datepicker>\n                                              </mat-form-field>\n                                              <button ion-button\n                                                      color=\"rosado\"\n                                                      block\n                                                      class=\"calcularFecha\"\n                                                      center\n                                                      (click)=\"catchToPick(picker)\">\n                                                    calcular\n                                              </button>\n                                        </ion-row>\n                                      </ng-template> -->\n                  </ion-card>\n            </ion-col>\n          </ion-row >\n    \n          <div *ngFor=\"let nota of notas\">\n            <div *ngIf=\"nota.semana < cantidad + 1\" >\n             <!--  <div> -->\n                <!-- cuerpo para las pastillas -->\n                <div *ngIf=\"nota.tipo == 'pastilla'\" class=\"animated bounceInLeft\">\n                  <ion-card class=\"pastilla gris\" id=\"pastilla\" padding>\n                    <ion-col size=\"12\">\n                      <ion-row>\n                        <ion-col size=\"2\" >\n                          <img src=\"assets/imgs/icons/pastillas.png\" alt=\"\">\n                        </ion-col>\n                        <ion-col size=\"8\">\n                                  <p class=\"tituloPastilla\">Crecimiento para la semana</p>\n                                  <!-- <p class=\"pastillasemana\">18 semanas</p> -->\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <p\n                            class=\"numeroSemana\">{{nota.semana}}</p>\n                        </ion-col>\n                        <ion-col size=\"12\">\n                          <p class=\"contenidoPastilla\">\n                            Tu bebé pesa esta semana alrededor de {{nota.peso}} y mide {{nota.talla}}\n                          </p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col> \n                    </ion-card>\n                </div>\n    \n                    <!-- cuerpo para la comparativa bebe -->\n                    <div *ngIf=\"nota.tipo == 'comparativa'\" class=\"animated bounceInRight\">\n                      <ion-card class=\"comparativaBebe\" id=\"comparativaBebe\">\n                          <div padding>\n                            <ion-row>\n                              <ion-col size=\"12\"\n                                        class=\"containerTexto\">\n                                <ion-row>\n                                  <ion-col size=\"2\" class=\"containerImagenCompa\">\n                                    <img src=\"assets/imgs/icons/iconComparativa.png\" alt=\"\">\n                                  </ion-col>\n                                  <ion-col size=\"8\">\n                                    <p class=\"tituloComparativa\"> Mi bebé es como...</p>\n                                  </ion-col>\n                                  <ion-col size=\"2\">\n                                    <p class=\"numeroSemanaComparativa\">{{nota.semana}}</p>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-col>\n    \n                              <ion-col size=\"12\">\n                                  <ion-row>\n                                    <ion-col size=\"9\">\n                                        <p class=\"textoComparativa\">{{nota.texto}}</p>\n                                    </ion-col>\n                                    <ion-col size=\"3\" class=\"containerImageComparativa\">\n                                      <img src=\"{{nota.imagenUrl}}\">\n                                    </ion-col>\n                                  </ion-row>\n                              </ion-col>\n    \n                            </ion-row>\n                          </div>\n                        </ion-card>\n                    </div>\n    \n                    <div *ngIf=\"nota.tipo == 'nutricion'\" class=\"animated bounceInLeft\">\n                      <ion-card class=\"nutricionTips\" id=\"nutricionTips\">\n                       <div padding>\n                         <ion-row>\n                           <ion-col size=\"12\">\n                             <ion-row>\n                               <ion-col size=\"2\"\n                                         class=\"containerNutricionIcon\">\n                                 <img src=\"assets/imgs/icons/nutricion.png\" alt=\"\">\n                               </ion-col>\n                               <ion-col size=\"8\">\n                                 <p class=\"tituloNutricion\">{{nota.titulo}}</p>\n                               </ion-col>\n                               <ion-col size=\"2\">\n                                <p\n                                class=\"numeroSemanaNutricion\">{{nota.semana}}</p>\n                               </ion-col>\n                             </ion-row>\n                           </ion-col>\n                           <ion-col size=\"12\">\n                             <p class=\"contenidoNutricion\">\n                                 {{nota.resumen}}\n                             </p>\n                           </ion-col>\n                          <mat-accordion class=\"accordionNutrition\">\n                            <mat-expansion-panel >\n                              <mat-expansion-panel-header>\n                                  <mat-panel-title>\n                                  </mat-panel-title>\n                              </mat-expansion-panel-header>\n                              <p class=\"textoCompletoNutricion\">\n                                {{nota.texto}}\n                              </p>\n                            </mat-expansion-panel>\n                          </mat-accordion>\n                         </ion-row>\n                       </div>\n                     </ion-card>\n                    </div>\n                  <div *ngIf=\"nota.tipo == 'evobebe'\" class=\"animated bounceInRight\">\n                    <ion-card class=\"evoBebe\" id=\"evoBebe\" >\n                      <div padding>\n                        <ion-row>\n                          <ion-col size=\"2\">\n                              <div>\n                                  <!-- <img class=\"imagenBebe\" src=\"{{nota.url_imagen}}\" alt=\"\"> -->\n                                  <img  class=\"iconoEvoBebe\" src=\"assets/imgs/icons/evobebe.png\" alt=\"\">\n                                </div>\n                          </ion-col>\n                          <ion-col size=\"8\">\n                              <p class=\"tituloEvoBebe\">\n                                  {{nota.titulo}}\n                              </p>\n                          </ion-col>\n                          <ion-col size=\"2\">\n                            <p class=\"numeroSemanaEvoBebe\">{{nota.semana}}</p>\n                          </ion-col>\n                          <ion-col size=\"12\">\n                            <p class=\"contenidoEvoBebe\">{{nota.resumen}}</p>\n                          </ion-col>\n                          <!-- <ion-col col-12>\n                              <button ion-button\n                                      clear\n                                      class=\"botonvermasbebe\"\n                                      (click)=\"goToDetailEvoBebe(nota)\">\n                                      <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                              </button>\n                          </ion-col> -->\n                          <mat-accordion class=\"accordionEvobebe\">\n                              <mat-expansion-panel >\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n                                <p class=\"textoCompletoNutricion\">\n                                  {{nota.texto}}\n                                </p>\n                              </mat-expansion-panel>\n                            </mat-accordion>\n                        </ion-row>\n                      </div>\n                    </ion-card>\n                  </div>\n    \n                  <div *ngIf=\"nota.tipo == 'cambios'\" class=\"animated bounceInLeft\">\n                    <!-- cuerpo para cambios mama -->\n                 <ion-card class=\"cambiosMama\" id=\"cambiosMama\">\n                     <div padding>\n                       <ion-row>\n                         <ion-col size=\"12\">\n                           <ion-row>\n                             <ion-col size=\"2\"\n                                      class=\"containerCambiosMamaIcon\">\n                              <img src=\"assets/imgs/icons/cambiosmama.png\" alt=\"\">\n                             </ion-col>\n                             <ion-col size=\"8\">\n                               <p class=\"tituloCambiosMama\">{{nota.titulo}}</p>\n                               <!-- <p class=\"tituloCambiosMama\">Cambios Mamá</p> -->\n                               <p class=\"textocambiosemanamama\">cambios en la semana {{nota.semana}}</p>\n                             </ion-col>\n                             <ion-col>\n                                <p class=\"numeroSemanaCambiosMama\">{{nota.semana}}</p>\n                             </ion-col>\n                           </ion-row>\n                         </ion-col>\n                         <ion-col size=\"12\">\n                           <p class=\"contenidoCambiosMama\">{{nota.resumen}}</p>\n                          </ion-col>\n                          <!-- <ion-col col-12>\n                              <button ion-button\n                                     clear\n                                     class=\"botonvermascambios\"\n                                     (click)=\"goToDetailCambiosMama(nota)\">\n                                     <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                             </button>\n                         </ion-col> -->\n                         <mat-accordion class=\"accordionCambiosMama\">\n                            <mat-expansion-panel >\n                              <mat-expansion-panel-header>\n                                  <mat-panel-title>\n                                  </mat-panel-title>\n                              </mat-expansion-panel-header>\n                              <p class=\"textoCompletoNutricion\">\n                                {{nota.texto}}\n                              </p>\n                            </mat-expansion-panel>\n                          </mat-accordion>\n                       </ion-row>\n                     </div>\n                 </ion-card>\n                  </div>\n    \n    \n                    <!-- cuerpo para las actividades -->\n                    <!-- <ion-card class=\"actividades\" id=\"actividades\">\n                      <div padding>\n                        <ion-row>\n                          <ion-col col-9>\n                            <ion-row>\n                              <ion-col col-3\n                                      class=\"iconoActividades\">\n                                <img src=\"assets/imgs/icons/actividades.png\" alt=\"\">\n                              </ion-col>\n                              <ion-col col-9>\n                                <p class=\"tituloActivides\">Actividades</p>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                        <ion-col col-12>\n                          <img src=\"assets/imgs/actividades.png\" alt=\"\">\n                        </ion-col>\n                        <p class=\"textoActividades\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod </p>\n                      </div>\n                    </ion-card> -->\n    \n                    <!-- <ion-card class=\"articulos\" id=\"articulos\">\n                      <div>\n                        <img class=\"imagenArticulo\" src=\"assets/imgs/imagenArticulo.png\" alt=\"\">\n                        <img class=\"iconoArticulo\" src=\"assets/imgs/icons/articulo.png\" alt=\"\">\n                      </div>\n                      <div padding>\n                        <p class=\"tituloArticulo\">\n                          18 semanas de desarrollo del bebe\n                        </p>\n                        <p class=\"contenidoArticulo\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod </p>\n                        <button ion-button clear class=\"botonArticulo\"> leer mas</button>\n                      </div>\n                    </ion-card>\n                    -->\n                  </div>\n              </div>\n    \n    \n                 <!-- cuerpo par la eboBebe -->\n    \n                <!-- <ion-card class=\"blog\" id=\"blog\">\n                    <div>\n                        <img class=\"imagenBlog\" src=\"assets/imgs/blog.png\" alt=\"\">\n                        <img class=\"iconoBlog\" src=\"assets/imgs/icons/blog.png\" alt=\"\">\n                      </div>\n                      <div padding>\n                        <p class=\"tituloBlog\">\n                          18 semanas de desarrollo del bebe\n                        </p>\n                        <p class=\"contenidoBlog\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod </p>\n                        <button ion-button clear class=\"botonBlog\"> leer mas</button>\n                      </div>\n                </ion-card> -->\n    \n    \n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/fecha-pregnancy/fecha-pregnancy.component */ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_fiter_fiter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/fiter/fiter.component */ "./src/app/components/fiter/fiter.component.ts");











const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_8__["FechaPregnancyComponent"],
            _components_fiter_fiter_component__WEBPACK_IMPORTED_MODULE_10__["FiterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background: #F5F5F5 !important;\n}\n\n.cuadrado {\n  height: 180px;\n  border-radius: 0 !important;\n  background: #7A57D1;\n}\n\n.marginTop10 {\n  padding-top: 60px;\n}\n\n.nSemanas {\n  font-size: 70px;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: right;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: -1em;\n}\n\n.pSemanas {\n  margin-top: -15px;\n  text-align: right;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: 200;\n}\n\n.nDias {\n  margin-top: 25px;\n  margin-bottom: 0;\n  font-size: 40px;\n  color: #fff;\n  text-align: left;\n  font-weight: 600;\n  margin-left: 9px;\n}\n\n.pDias {\n  margin-top: -3px;\n  color: #fff;\n  font-weight: 200;\n  font-size: 1.2em;\n  text-align: left;\n  margin-left: 9px;\n}\n\n.blanco {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.dControl {\n  color: #fff;\n  text-align: center;\n  padding-top: 20px;\n  margin: 0;\n}\n\n.fControl {\n  color: #fff;\n  text-align: center;\n  width: 80%;\n  margin-left: 10%;\n  font-weight: 400;\n  margin-top: 10px;\n}\n\n.tituloConsejos {\n  color: #FF634C;\n  padding-top: 5px;\n}\n\n.parrafoConsejos,\n.parrafoDesarrollo {\n  font-size: 0.9em;\n  color: #444D4D;\n}\n\n.tituloDesarrollo {\n  color: #FF634C;\n  font-size: 1.2em;\n}\n\nion-row {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\nion-col {\n  margin: 0 !important;\n  padding: 0 !important;\n  height: auto !important;\n}\n\n.tituloSemanas {\n  text-align: center;\n  color: #444D4D;\n  font-size: 1.2em;\n  margin-top: 10px;\n  flex-wrap: wrap;\n  width: 90%;\n  margin-left: 5%;\n  font-weight: 600;\n}\n\n.contenedorFechas {\n  height: 180px;\n  background: #FFA28C;\n  text-align: left;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.contenedorFechas p {\n  color: #fff;\n}\n\n.contenedorFechas .tituloControl {\n  margin-top: 30px;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 1.2em;\n  line-height: 1.1em !important;\n}\n\n.contenedorFechas .margenTexto {\n  width: 90%;\n  margin: 10px;\n  margin-left: 25px;\n}\n\n.inputFecha {\n  width: 90% !important;\n  margin-left: 5%;\n  margin-top: 5px;\n}\n\n.calcularFecha {\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n.sinFecha {\n  height: 180px;\n  text-align: center;\n}\n\n.fechaControl {\n  font-size: 1.1em;\n  text-align: center;\n}\n\n.pastilla {\n  background: #fff;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  border-radius: 0;\n  border-left: 10px solid #019FE0;\n  border-top-right-radius: 25px;\n}\n\n.pastilla img {\n  width: 40px;\n  margin-top: 10px;\n}\n\n.pastilla .numeroSemana {\n  color: #019FE0;\n  font-size: 2.5em;\n  font-weight: 600;\n  text-align: right;\n  margin: 0 !important;\n}\n\n.pastilla .pastillasemana {\n  color: #444D4D;\n  margin-top: -20px;\n}\n\n.pastilla .tituloPastilla {\n  color: #019FE0;\n  text-align: left;\n  font-size: 1.2em;\n  /* margin-top: 10px; */\n}\n\n.pastilla .contenidoPastilla {\n  margin-top: 10px;\n  color: #9B9B9B;\n  margin-left: 10px;\n  font-size: 0.9em;\n}\n\n.containerIconoPastilla {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.evoBebe {\n  border-left: 10px solid #66CBEC;\n  border-radius: 0;\n  background: #fff;\n  border-top-right-radius: 25px;\n}\n\n.evoBebe .iconoEvoBebe {\n  width: 40px;\n  z-index: 1000;\n}\n\n.evoBebe .tituloEvoBebe {\n  color: #66CBEC;\n  font-size: 1.3em;\n}\n\n.evoBebe .contenidoEvoBebe {\n  color: #9B9B9B;\n  margin-top: 10px;\n  font-size: 0.9em;\n}\n\n.evoBebe .imagenBebe {\n  padding-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n\n.evoBebe button {\n  margin-top: 10px;\n  float: right;\n  text-transform: lowercase;\n  padding-bottom: 1.5em;\n  color: #66CBEC;\n}\n\n.comparativaBebe {\n  background: #fff;\n  border-left: 10px solid #00BCD3;\n  border-radius: 0;\n  border-top-right-radius: 25px;\n}\n\n.comparativaBebe .containerImagenCompa img {\n  width: 40px;\n}\n\n.comparativaBebe .tituloComparativa {\n  color: #00BCD3;\n  font-size: 1.2em;\n  line-height: 1em;\n  text-align: left;\n}\n\n.comparativaBebe .textoComparativa {\n  color: #9B9B9B;\n  margin-top: 10px;\n  font-size: 0.9em;\n}\n\n.containerImageComparativa img {\n  width: 70px !important;\n  height: auto;\n  margin-left: 10px;\n  margin-top: -20px;\n}\n\n.numeroSemanaComparativa {\n  color: #F2F0F0;\n  font-size: 2.5em;\n  font-weight: 600;\n  text-align: right;\n  margin-top: -8px;\n  margin-bottom: 10px;\n}\n\n.numeroSemanaEvoBebe {\n  color: #F2F0F0;\n  font-size: 2.5em;\n  font-weight: 600;\n  text-align: right;\n  margin-top: -8px;\n  margin-bottom: 10px;\n}\n\n.cambiosMama {\n  background: #fff;\n  margin-top: 10px;\n  border-left: 10px solid #FFA28C;\n  border-radius: 0;\n  border-top-right-radius: 25px;\n}\n\n.cambiosMama .containerCambiosMamaIcon img {\n  width: 40px;\n}\n\n.cambiosMama .tituloCambiosMama {\n  text-align: left;\n  color: #FF634C;\n  font-size: 1.3em;\n  margin-top: -10px;\n}\n\n.cambiosMama .contenidoCambiosMama {\n  color: #9B9B9B;\n  margin-top: 10px;\n  font-size: 0.9em;\n}\n\n.cambiosMama .textocambiosemanamama {\n  color: grey;\n  font-size: 0.9em;\n  margin-top: -3px;\n}\n\n.cambiosMama .botonvermascambios {\n  color: #FFA28C;\n  float: right;\n}\n\n.cambiosMama .numeroSemanaCambiosMama {\n  color: #F2F0F0;\n  font-size: 2.5em;\n  font-weight: 600;\n  text-align: right;\n  margin-top: -8px;\n  margin-bottom: 10px;\n}\n\n.nutricionTips {\n  background: #fff;\n  margin-top: 10px;\n  border-left: 10px solid #7A57D1;\n  border-radius: 0;\n  border-top-right-radius: 25px;\n}\n\n.nutricionTips .containerNutricionIcon img {\n  width: 40px;\n}\n\n.nutricionTips .tituloNutricion {\n  color: #7A57D1;\n  font-size: 1.2em;\n  line-height: 1.1em;\n}\n\n.nutricionTips .contenidoNutricion {\n  color: #9B9B9B;\n  margin-top: 10px;\n  font-size: 0.9em;\n}\n\n.nutricionTips .numeroSemanaNutricion {\n  color: #F2F0F0;\n  font-size: 2.5em;\n  font-weight: 600;\n  text-align: right;\n  margin-top: -8px;\n  margin-bottom: 10px;\n}\n\n.nutricionTips .botonvermasnutrition {\n  color: #7A57D1;\n  float: right;\n}\n\n.articulos {\n  background: #fff;\n  margin-top: 10px;\n  border-left: 10px solid #57C789;\n  border-top-right-radius: 25px;\n}\n\n.articulos .iconoArticulo {\n  width: 40px;\n  z-index: 1000;\n  position: absolute;\n  margin-top: -150px;\n  margin-left: 16px;\n}\n\n.articulos .tituloArticulo {\n  color: #57C789;\n  font-size: 1.3em;\n  margin-top: 0;\n}\n\n.articulos .contenidoArticulo {\n  color: #9B9B9B;\n  margin-top: 10px;\n}\n\n.articulos button {\n  float: right;\n  margin-top: -10px;\n  text-transform: lowercase;\n  padding-bottom: 1.5em;\n  color: #57C789;\n}\n\n.blog {\n  background: #fff;\n  margin-top: 10px;\n  border-left: 10px solid #279558;\n  border-top-right-radius: 25px;\n}\n\n.blog .iconoBlog {\n  width: 40px;\n  z-index: 1000;\n  position: absolute;\n  margin-top: -150px;\n  margin-left: 16px;\n}\n\n.blog .tituloBlog {\n  color: #279558;\n  font-size: 1.3em;\n  margin-top: 0;\n}\n\n.blog .contenidoBlog {\n  color: #9B9B9B;\n  margin-top: 10px;\n}\n\n.blog button {\n  float: right;\n  margin-top: -10px;\n  text-transform: lowercase;\n  padding-bottom: 1.5em;\n  color: #279558;\n}\n\n.actividades {\n  background: #fff;\n  margin-top: 10px;\n  border-left: 8px solid #FF634C;\n  border-top-right-radius: 25px;\n}\n\n.actividades .iconoActividades img {\n  width: 40px;\n  margin-bottom: 10px;\n}\n\n.actividades .tituloActivides {\n  color: #FF634C;\n  font-size: 1.3em;\n  text-align: left;\n}\n\n.actividades .textoActividades {\n  color: #9B9B9B;\n  margin-top: 10px;\n}\n\n.textoNombre {\n  color: #fff;\n  margin-top: -40px !important;\n  margin-left: 10%;\n  text-align: left;\n  width: 80%;\n  font-size: 0.95em;\n}\n\n.botonvermasbebe {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none !important;\n}\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) .mat-content {\n  text-align: right;\n}\n\n.mat-expansion-panel-header {\n  height: 20px !important;\n  padding: 0 !important;\n}\n\n.mat-expansion-panel-body {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  /*     padding-right: 0 !important; */\n}\n\n.nutritionTitle {\n  float: right !important;\n  color: #7A57D1;\n  text-align: right !important;\n}\n\n.accordionNutrition {\n  width: 100%;\n}\n\n.accordionNutrition mat-panel-description p {\n  margin-left: 60% !important;\n  font-size: 0.7em;\n}\n\n.textoCompletoNutricion {\n  color: #9B9B9B;\n  font-size: 0.9em;\n  text-align: justify;\n  width: 97%;\n}\n\n.deberia {\n  font-size: 0.95em;\n}\n\n.fechaLlegada {\n  font-size: 1.4em;\n  text-align: center;\n  color: #FF634C !important;\n}\n\n.textoFalta {\n  font-size: 1.2em;\n  text-align: right;\n  margin-right: 26px;\n  margin-top: 20px;\n}\n\n.semanasFaltantes {\n  font-size: 2.8em;\n  font-weight: 600;\n  text-align: right;\n  color: #7A57D1 !important;\n  margin-top: -10px;\n  margin-bottom: 5px;\n}\n\n.diasFaltantes {\n  font-size: 2.8em;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 26px;\n  color: #7A57D1 !important;\n  margin-top: -10px;\n  margin-bottom: 5px;\n}\n\n.textoSemanasFaltantes {\n  text-align: right;\n  margin-top: -10px;\n  color: #7A57D1 !important;\n}\n\n.textoDiasFaltantes {\n  text-align: right;\n  margin-right: 26px;\n  margin-top: -10px;\n  color: #7A57D1 !important;\n  font-weight: lighter;\n}\n\n.mat-expansion-indicator {\n  color: #d0d0d0 !important;\n}\n\n.textoFechaPosible {\n  font-size: 0.8em;\n  font-weight: 200;\n  text-align: right;\n  margin-right: 20px;\n  margin-top: -5px;\n  margin-bottom: -5px;\n}\n\n.posibleDate {\n  font-size: 1.1em;\n  text-align: right;\n  margin-right: 22px;\n  color: #7A57D1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsK0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7O0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFD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QUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDOUVKOztBRGlGRTtFQUNFLHlCQUFBO0FDOUVKOztBRGlGRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzlFSjs7QURpRkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQzlFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmN1YWRyYWRvIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzdBNTdEMTtcbiAgfVxuXG4gIC5tYXJnaW5Ub3AxMCB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cblxuICAublNlbWFuYXMge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xuICB9XG5cbiAgLnBTZW1hbmFzIHtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICAubkRpYXMge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWxlZnQ6OXB4O1xuICB9XG5cbiAgLnBEaWFzIHtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgfVxuXG4gIC5ibGFuY28ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cblxuICAuZENvbnRyb2wge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZkNvbnRyb2wge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLnRpdHVsb0NvbnNlam9zIHtcbiAgICBjb2xvcjogI0ZGNjM0QztcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG5cbiAgLnBhcnJhZm9Db25zZWpvcyxcbiAgLnBhcnJhZm9EZXNhcnJvbGxvIHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgY29sb3I6ICM0NDRENEQ7XG4gIH1cblxuICAudGl0dWxvRGVzYXJyb2xsbyB7XG4gICAgY29sb3I6ICNGRjYzNEM7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuXG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aXR1bG9TZW1hbmFzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NDRENEQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmNvbnRlbmVkb3JGZWNoYXMge1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGQTI4QztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAudGl0dWxvQ29udHJvbCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1hcmdlblRleHRvIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OjUlO1xuICAgICAgLy8gbWFyZ2luLXRvcDoxNXB4O1xuXG4gICAgfVxuICB9XG5cbiAgLmlucHV0RmVjaGEge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLmNhbGN1bGFyRmVjaGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5zaW5GZWNoYSB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZmVjaGFDb250cm9sIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIC8vIHdpZHRoOiA5MCU7XG4gICAgLy8gbWFyZ2luLXRvcDo1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAvLyB0ZW1wbGF0ZSBkZSBwYXN0aWxsYXNcbiAgLnBhc3RpbGxhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czowO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMwMTlGRTA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG5cbiAgICAvLyBtYXJnaW4tbGVmdDoxMnB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDoxMnB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLm51bWVyb1NlbWFuYSB7XG4gICAgICBjb2xvcjogIzAxOUZFMDtcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW46MCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBhc3RpbGxhc2VtYW5hIHtcbiAgICAgIGNvbG9yOiAjNDQ0RDREO1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsb1Bhc3RpbGxhIHtcbiAgICAgIGNvbG9yOiAjMDE5RkUwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xuICAgIH1cblxuICAgIC5jb250ZW5pZG9QYXN0aWxsYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVySWNvbm9QYXN0aWxsYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC8vIGVzdGlsb3MgZXZvIGJlYmVcbiAgLmV2b0JlYmUge1xuICAgIC8vIG1hcmdpbi10b3A6MTBweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjNjZDQkVDO1xuICAgIC8vIG1hcmdpbi1sZWZ0OjE2cHghaW1wb3J0YW50O1xuICAgIC8vIG1hcmdpbi1yaWdodDoxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuXG4gICAgLmljb25vRXZvQmViZSB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAvLyBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIC8vIG1hcmdpbi10b3A6LTIwMHB4O1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6MTZweDtcbiAgICAgIC8vIG1hcmdpbi10b3A6MTZweDtcbiAgICB9XG5cbiAgICAudGl0dWxvRXZvQmViZSB7XG4gICAgICBjb2xvcjogIzY2Q0JFQztcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAvLyBtYXJnaW4tbGVmdDoxNnB4O1xuICAgIH1cblxuICAgIC5jb250ZW5pZG9Fdm9CZWJlIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxuXG4gICAgLmltYWdlbkJlYmUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgICBjb2xvcjogIzY2Q0JFQztcbiAgICB9XG4gIH1cblxuICAvLyBlc3RpbG9zIGRlIGxhIGNvbXBhcmF0aXZhIGJlYmVcbiAgLmNvbXBhcmF0aXZhQmViZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzAwQkNEMztcbiAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG5cbiAgICAvLyBtYXJnaW4tbGVmdDoxNnB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDoxNnB4O1xuICAgIC5jb250YWluZXJJbWFnZW5Db21wYSBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsb0NvbXBhcmF0aXZhIHtcbiAgICAgIGNvbG9yOiAjMDBCQ0QzO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC50ZXh0b0NvbXBhcmF0aXZhIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVySW1hZ2VDb21wYXJhdGl2YSBpbWcge1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICB9XG5cbiAgLm51bWVyb1NlbWFuYUNvbXBhcmF0aXZhIHtcbiAgICBjb2xvcjogI0YyRjBGMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLm51bWVyb1NlbWFuYUV2b0JlYmUge1xuICAgIGNvbG9yOiAjRjJGMEYwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAvLyBlc3RpbG9zIGNhbWJpb3MgbWFtw6FcbiAgLmNhbWJpb3NNYW1hIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI0ZGQTI4QztcbiAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6MTZweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6MTZweDtcbiAgICAuY29udGFpbmVyQ2FtYmlvc01hbWFJY29uIGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG5cbiAgICAudGl0dWxvQ2FtYmlvc01hbWEge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAjRkY2MzRDO1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC5jb250ZW5pZG9DYW1iaW9zTWFtYSB7XG4gICAgICBjb2xvcjogIzlCOUI5QjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBmb250LXNpemU6IC45ZW07XG5cbiAgICB9XG5cbiAgICAudGV4dG9jYW1iaW9zZW1hbmFtYW1hIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICB9XG5cbiAgICAuYm90b252ZXJtYXNjYW1iaW9zIHtcbiAgICAgIGNvbG9yOiAjRkZBMjhDO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5udW1lcm9TZW1hbmFDYW1iaW9zTWFtYSB7XG4gICAgICBjb2xvcjogI0YyRjBGMDtcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAvLyBlc3RpbG9zIG51dHJpY2lvblxuICAubnV0cmljaW9uVGlwcyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM3QTU3RDE7XG4gICAgYm9yZGVyLXJhZGl1czowO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OjE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjE2cHg7XG4gICAgLmNvbnRhaW5lck51dHJpY2lvbkljb24gaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgIC50aXR1bG9OdXRyaWNpb24ge1xuICAgICAgY29sb3I6ICM3QTU3RDE7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgIH1cblxuICAgIC5jb250ZW5pZG9OdXRyaWNpb24ge1xuICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgIH1cblxuICAgIC5udW1lcm9TZW1hbmFOdXRyaWNpb24ge1xuICAgICAgY29sb3I6ICNGMkYwRjA7XG4gICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmJvdG9udmVybWFzbnV0cml0aW9uIHtcbiAgICAgIGNvbG9yOiAjN0E1N0QxO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzdGlsb3MgZGUgbG9zIGFydGljdWxvc1xuICAuYXJ0aWN1bG9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzU3Qzc4OTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcblxuICAgIC8vIG1hcmdpbi1sZWZ0OjE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjE2cHg7XG4gICAgLmljb25vQXJ0aWN1bG8ge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLnRpdHVsb0FydGljdWxvIHtcbiAgICAgIGNvbG9yOiAjNTdDNzg5O1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRlbmlkb0FydGljdWxvIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgY29sb3I6ICM1N0M3ODk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXN0aWxvcyBkZSBsb3MgYXJ0aWN1bG9zIGJsb2dcbiAgLmJsb2cge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMjc5NTU4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OjE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjE2cHg7XG4gICAgLmljb25vQmxvZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAudGl0dWxvQmxvZyB7XG4gICAgICBjb2xvcjogIzI3OTU1ODtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIC5jb250ZW5pZG9CbG9nIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgY29sb3I6ICMyNzk1NTg7XG4gICAgfVxuICB9XG5cbiAgLy8gZXN0aWxvcyBkZSBsYXMgYWN0aXZpZGFkZXNcbiAgLmFjdGl2aWRhZGVzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjRkY2MzRDO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OjE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjE2cHg7XG4gICAgLmljb25vQWN0aXZpZGFkZXMgaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAudGl0dWxvQWN0aXZpZGVzIHtcbiAgICAgIGNvbG9yOiAjRkY2MzRDO1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLnRleHRvQWN0aXZpZGFkZXMge1xuICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0b05vbWJyZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogLTQwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IC45NWVtO1xuICB9XG5cbiAgLmJvdG9udmVybWFzYmViZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gYXF1aSBjb21pZW56YW4gbG9zIGVzdGlsb3MgZGUgbG9zIGFjb3JkZW9uZXNcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxuICAgIC5tYXQtY29udGVudCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6MCFpbXBvcnRhbnQ7XG4vKiAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgLm51dHJpdGlvblRpdGxlIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzdBNTdEMTtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjY29yZGlvbk51dHJpdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXQtcGFuZWwtZGVzY3JpcHRpb24gcCB7XG4gICAgICBtYXJnaW4tbGVmdDogNjAlICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IC43ZW07XG4gICAgfVxuICB9XG5cbiAgLnRleHRvQ29tcGxldG9OdXRyaWNpb24ge1xuICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHdpZHRoOiA5NyU7XG4gIH1cblxuICAvLyBlc3RpbG9zIGRlIGVsIGNhcmQgbGxlZ2FkYSBiZWJlXG4gIC5kZWJlcmlhIHtcbiAgICBmb250LXNpemU6IC45NWVtO1xuICB9XG5cbiAgLmZlY2hhTGxlZ2FkYSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRjYzNEMgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0b0ZhbHRhIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIH1cblxuICAuc2VtYW5hc0ZhbHRhbnRlcyB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjN0E1N0QxICFpbXBvcnRhbnQ7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OjE2cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gIH1cblxuICAuZGlhc0ZhbHRhbnRlcyB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjZweDtcbiAgICBjb2xvcjogIzdBNTdEMSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICB9XG5cbiAgLnRleHRvU2VtYW5hc0ZhbHRhbnRlcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgY29sb3I6ICM3QTU3RDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0b0RpYXNGYWx0YW50ZXMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBjb2xvcjogIzdBNTdEMSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgICBjb2xvcjogcmdiKDIwOCwgMjA4LCAyMDgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dG9GZWNoYVBvc2libGUge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIG1hcmdpbi1ib3R0b206LTVweDtcbiAgfVxuXG4gIC5wb3NpYmxlRGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM3QTU3RDEgIWltcG9ydGFudDtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xufVxuXG4uY3VhZHJhZG8ge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM3QTU3RDE7XG59XG5cbi5tYXJnaW5Ub3AxMCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4ublNlbWFuYXMge1xuICBmb250LXNpemU6IDcwcHg7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTFlbTtcbn1cblxuLnBTZW1hbmFzIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLm5EaWFzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLnBEaWFzIHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5ibGFuY28ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uZENvbnRyb2wge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZkNvbnRyb2wge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGl0dWxvQ29uc2Vqb3Mge1xuICBjb2xvcjogI0ZGNjM0QztcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnBhcnJhZm9Db25zZWpvcyxcbi5wYXJyYWZvRGVzYXJyb2xsbyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNDQ0RDREO1xufVxuXG4udGl0dWxvRGVzYXJyb2xsbyB7XG4gIGNvbG9yOiAjRkY2MzRDO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvU2VtYW5hcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NDRENEQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGVuZWRvckZlY2hhcyB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkEyOEM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5jb250ZW5lZG9yRmVjaGFzIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250ZW5lZG9yRmVjaGFzIC50aXR1bG9Db250cm9sIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMWVtICFpbXBvcnRhbnQ7XG59XG4uY29udGVuZWRvckZlY2hhcyAubWFyZ2VuVGV4dG8ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaW5wdXRGZWNoYSB7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYWxjdWxhckZlY2hhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uc2luRmVjaGEge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWNoYUNvbnRyb2wge1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXN0aWxsYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMDE5RkUwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cbi5wYXN0aWxsYSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wYXN0aWxsYSAubnVtZXJvU2VtYW5hIHtcbiAgY29sb3I6ICMwMTlGRTA7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5wYXN0aWxsYSAucGFzdGlsbGFzZW1hbmEge1xuICBjb2xvcjogIzQ0NEQ0RDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG4ucGFzdGlsbGEgLnRpdHVsb1Bhc3RpbGxhIHtcbiAgY29sb3I6ICMwMTlGRTA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXG59XG4ucGFzdGlsbGEgLmNvbnRlbmlkb1Bhc3RpbGxhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uY29udGFpbmVySWNvbm9QYXN0aWxsYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXZvQmViZSB7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM2NkNCRUM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuLmV2b0JlYmUgLmljb25vRXZvQmViZSB7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmV2b0JlYmUgLnRpdHVsb0V2b0JlYmUge1xuICBjb2xvcjogIzY2Q0JFQztcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5ldm9CZWJlIC5jb250ZW5pZG9Fdm9CZWJlIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uZXZvQmViZSAuaW1hZ2VuQmViZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmV2b0JlYmUgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIGNvbG9yOiAjNjZDQkVDO1xufVxuXG4uY29tcGFyYXRpdmFCZWJlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzAwQkNEMztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4uY29tcGFyYXRpdmFCZWJlIC5jb250YWluZXJJbWFnZW5Db21wYSBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cbi5jb21wYXJhdGl2YUJlYmUgLnRpdHVsb0NvbXBhcmF0aXZhIHtcbiAgY29sb3I6ICMwMEJDRDM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29tcGFyYXRpdmFCZWJlIC50ZXh0b0NvbXBhcmF0aXZhIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5jb250YWluZXJJbWFnZUNvbXBhcmF0aXZhIGltZyB7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubnVtZXJvU2VtYW5hQ29tcGFyYXRpdmEge1xuICBjb2xvcjogI0YyRjBGMDtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5udW1lcm9TZW1hbmFFdm9CZWJlIHtcbiAgY29sb3I6ICNGMkYwRjA7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FtYmlvc01hbWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjRkZBMjhDO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cbi5jYW1iaW9zTWFtYSAuY29udGFpbmVyQ2FtYmlvc01hbWFJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuLmNhbWJpb3NNYW1hIC50aXR1bG9DYW1iaW9zTWFtYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjRkY2MzRDO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jYW1iaW9zTWFtYSAuY29udGVuaWRvQ2FtYmlvc01hbWEge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5jYW1iaW9zTWFtYSAudGV4dG9jYW1iaW9zZW1hbmFtYW1hIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG4uY2FtYmlvc01hbWEgLmJvdG9udmVybWFzY2FtYmlvcyB7XG4gIGNvbG9yOiAjRkZBMjhDO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2FtYmlvc01hbWEgLm51bWVyb1NlbWFuYUNhbWJpb3NNYW1hIHtcbiAgY29sb3I6ICNGMkYwRjA7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubnV0cmljaW9uVGlwcyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM3QTU3RDE7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuLm51dHJpY2lvblRpcHMgLmNvbnRhaW5lck51dHJpY2lvbkljb24gaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4ubnV0cmljaW9uVGlwcyAudGl0dWxvTnV0cmljaW9uIHtcbiAgY29sb3I6ICM3QTU3RDE7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbn1cbi5udXRyaWNpb25UaXBzIC5jb250ZW5pZG9OdXRyaWNpb24ge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5udXRyaWNpb25UaXBzIC5udW1lcm9TZW1hbmFOdXRyaWNpb24ge1xuICBjb2xvcjogI0YyRjBGMDtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubnV0cmljaW9uVGlwcyAuYm90b252ZXJtYXNudXRyaXRpb24ge1xuICBjb2xvcjogIzdBNTdEMTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYXJ0aWN1bG9zIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzU3Qzc4OTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4uYXJ0aWN1bG9zIC5pY29ub0FydGljdWxvIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5hcnRpY3Vsb3MgLnRpdHVsb0FydGljdWxvIHtcbiAgY29sb3I6ICM1N0M3ODk7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uYXJ0aWN1bG9zIC5jb250ZW5pZG9BcnRpY3VsbyB7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmFydGljdWxvcyBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIGNvbG9yOiAjNTdDNzg5O1xufVxuXG4uYmxvZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMyNzk1NTg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuLmJsb2cgLmljb25vQmxvZyB7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uYmxvZyAudGl0dWxvQmxvZyB7XG4gIGNvbG9yOiAjMjc5NTU4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmJsb2cgLmNvbnRlbmlkb0Jsb2cge1xuICBjb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ibG9nIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgY29sb3I6ICMyNzk1NTg7XG59XG5cbi5hY3RpdmlkYWRlcyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI0ZGNjM0QztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4uYWN0aXZpZGFkZXMgLmljb25vQWN0aXZpZGFkZXMgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWN0aXZpZGFkZXMgLnRpdHVsb0FjdGl2aWRlcyB7XG4gIGNvbG9yOiAjRkY2MzRDO1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFjdGl2aWRhZGVzIC50ZXh0b0FjdGl2aWRhZGVzIHtcbiAgY29sb3I6ICM5QjlCOUI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0b05vbWJyZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAtNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDAuOTVlbTtcbn1cblxuLmJvdG9udmVybWFzYmViZSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIC5tYXQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgLyogICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgKi9cbn1cblxuLm51dHJpdGlvblRpdGxlIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjN0E1N0QxO1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkaW9uTnV0cml0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWNjb3JkaW9uTnV0cml0aW9uIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiBwIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4udGV4dG9Db21wbGV0b051dHJpY2lvbiB7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogOTclO1xufVxuXG4uZGViZXJpYSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuXG4uZmVjaGFMbGVnYWRhIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGNjM0QyAhaW1wb3J0YW50O1xufVxuXG4udGV4dG9GYWx0YSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZW1hbmFzRmFsdGFudGVzIHtcbiAgZm9udC1zaXplOiAyLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjN0E1N0QxICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kaWFzRmFsdGFudGVzIHtcbiAgZm9udC1zaXplOiAyLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjZweDtcbiAgY29sb3I6ICM3QTU3RDEgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRleHRvU2VtYW5hc0ZhbHRhbnRlcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgY29sb3I6ICM3QTU3RDEgIWltcG9ydGFudDtcbn1cblxuLnRleHRvRGlhc0ZhbHRhbnRlcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBjb2xvcjogIzdBNTdEMSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgY29sb3I6ICNkMGQwZDAgIWltcG9ydGFudDtcbn1cblxuLnRleHRvRmVjaGFQb3NpYmxlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLnBvc2libGVEYXRlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbiAgY29sb3I6ICM3QTU3RDEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_notas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notas.service */ "./src/app/service/notas.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_datos_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/datos-control.service */ "./src/app/service/datos-control.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_fiter_fiter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/fiter/fiter.component */ "./src/app/components/fiter/fiter.component.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var src_app_service_estado_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/estado.service */ "./src/app/service/estado.service.ts");
/* harmony import */ var src_app_service_register_fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/register-fcm.service */ "./src/app/service/register-fcm.service.ts");
/* harmony import */ var src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/chat.service */ "./src/app/service/chat.service.ts");












let HomePage = class HomePage {
    constructor(router, notasServ, datosPvr, popover, fcm, estado, alert, modalCtrl, registerFcm, chat) {
        this.router = router;
        this.notasServ = notasServ;
        this.datosPvr = datosPvr;
        this.popover = popover;
        this.fcm = fcm;
        this.estado = estado;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.registerFcm = registerFcm;
        this.chat = chat;
        this.mostrar = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.name = localStorage.getItem('patientName');
            this.estado.actualMomento().subscribe((data) => {
                this.actualMomento = data;
                console.log(data);
                this.estadoActual();
            });
            this.fcm.getToken().then(data => {
                console.log(data);
                const token = data;
                if (token) {
                    this.chat.registerToken(token);
                }
            });
            this.fcm.onNotification().subscribe(data => {
                console.log('data e onNotification:', data);
                if (data.wasTapped) {
                    console.log('tapped');
                }
                else {
                    console.log('tap');
                }
            });
            let cargaPublic = localStorage.getItem('role');
            /* const start = localStorage.getItem('startPregnancy') */
            if (cargaPublic == 'user') {
                this.datosPvr.getStartPregnacy().subscribe(data => {
                    this.params = data;
                });
                this.calculoFecha();
            }
            else {
                /* const popover = await this.popover.create({
                  component:FechaPregnancyComponent,
                  backdropDismiss: false
                });
                await popover.present(); */
                this.calculoFecha();
            }
        });
    }
    estadoActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.actualMomento && this.actualMomento.status !== 'active') {
                const alert = yield this.alert.create({
                    header: "Tenemos Inconvenientes",
                    subHeader: "En estos momentos tenemos algunos inconvenientes con la aplicaciòn, mil disculpas..., prueba en unos minutos mas, por favor!!...",
                    backdropDismiss: false
                });
                yield alert.present();
            }
        });
    }
    calculoFecha() {
        /* console.log('parametros:', this.params); */
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem('startPregnancy')).clone();
        this.today = moment__WEBPACK_IMPORTED_MODULE_4__();
        // aqui calcula la cantidad de semanas transcurridas
        const totalDays = this.today.diff(this.fecha, 'days');
        this.total = this.today.diff(this.fecha, 'weeks');
        /* aqui calculo el dia pendiente */
        this.diasPendientes = totalDays - (this.total * 7);
        this.totaldias = this.total.toString();
        /* cuanto tiempo ha pasado desde la concepcion */
        const start = moment__WEBPACK_IMPORTED_MODULE_4__(this.fecha);
        const cuanto = start.fromNow(true);
        /* console.log('cuanto', cuanto); */
        /*   aqui les sumamos las 40 semanas a la fecha inicial para poder tener el ultimo dia de parto */
        const posible = start.add(40, 'w');
        this.posible = posible;
        const posibleDays = posible.diff(this.today, 'd');
        /* console.log('posibleDays:', posibleDays); */
        this.fechaPosible = posible.diff(this.today, 'w');
        const diasFaltantes = posibleDays - (this.fechaPosible * 7);
        this.diasFaltantes = diasFaltantes;
        /* console.log('diasFaltantes:', diasFaltantes); */
        this.cantidad = this.total;
        this.mostrar = true;
        if (!this.notasFiltro) {
            this.notasServ.getNotes().subscribe(data => {
                this.notas = data;
                /* console.log('todas las notas:', this.notas); */
            });
        }
        else {
            let elfilter = this.notasFiltro;
            this.notasServ.getNotesFilter(elfilter).subscribe(data => {
                /* console.log('lo que me llega del filtro:', data); */
                this.notas = data;
                // console.log(this.notas);
            });
            this.notasFiltro = this.notas;
        }
        ;
    }
    goToChat() {
        this.router.navigateByUrl('/evolucion');
    }
    goToEvolution() {
        console.log('me llevara a evolución');
    }
    doRefresh(refresher) {
        this.notasServ.getNotes().subscribe(data => {
            this.notas = data;
            refresher.complete();
        });
    }
    openFilters(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* console.log('abrir filtros'); */
            const popover = yield this.popover.create({
                component: _components_fiter_fiter_component__WEBPACK_IMPORTED_MODULE_7__["FiterComponent"],
                event: ev,
                animated: true
            });
            yield popover.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_notas_service__WEBPACK_IMPORTED_MODULE_3__["NotasService"] },
    { type: _service_datos_control_service__WEBPACK_IMPORTED_MODULE_5__["DatosControlService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
    { type: src_app_service_estado_service__WEBPACK_IMPORTED_MODULE_9__["EstadoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_service_register_fcm_service__WEBPACK_IMPORTED_MODULE_10__["RegisterFcmService"] },
    { type: src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _service_notas_service__WEBPACK_IMPORTED_MODULE_3__["NotasService"],
        _service_datos_control_service__WEBPACK_IMPORTED_MODULE_5__["DatosControlService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
        src_app_service_estado_service__WEBPACK_IMPORTED_MODULE_9__["EstadoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_service_register_fcm_service__WEBPACK_IMPORTED_MODULE_10__["RegisterFcmService"],
        src_app_service_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]])
], HomePage);



/***/ }),

/***/ "./src/app/service/estado.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/estado.service.ts ***!
  \*******************************************/
/*! exports provided: EstadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoService", function() { return EstadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EstadoService = class EstadoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/status";
    }
    actualMomento() {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            return resp;
        }));
    }
};
EstadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EstadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EstadoService);



/***/ }),

/***/ "./src/app/service/register-fcm.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/register-fcm.service.ts ***!
  \*************************************************/
/*! exports provided: RegisterFcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFcmService", function() { return RegisterFcmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RegisterFcmService = class RegisterFcmService {
    constructor(http) {
        this.http = http;
        this.server = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["API_ENDPOINT"];
        this.apiUrl = `${this.server}auth/fcm-register`;
    }
    registerToken(token) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': authorization });
        let params = { token: token };
        return this.http.post(this.apiUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
};
RegisterFcmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegisterFcmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RegisterFcmService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment, API_ENDPOINT, API_NOTAS, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NOTAS", function() { return API_NOTAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const environment = {
    production: true
};
/* ENDPOINTS DESARROLLO */
const API_ENDPOINT = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
const API_NOTAS = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/mama/notas";
const firebaseConfig = {
    apiKey: "AIzaSyBMopx6KZ79wFANi2Yb6ysxvAIdRso96VY",
    authDomain: "aviva-mamapp-dev.firebaseapp.com",
    databaseURL: "https://aviva-mamapp-dev.firebaseio.com",
    projectId: "aviva-mamapp-dev",
    storageBucket: "aviva-mamapp-dev.appspot.com",
    messagingSenderId: "519988913097",
    appId: "1:519988913097:web:dca29f129d59cc0b"
};
/* ENDPOINTS PRODUCCION */
/* export const API_ENDPOINT = "https://api.aviva.pe/middleware2/api/v2/";
export const API_NOTAS = "https://api.aviva.pe/middleware2/api/v2/mama/notas";

export const firebaseConfig ={
  apiKey: "AIzaSyC79bO4W3NAW6tjRGe8Y-cx9bK2Nb5t760",
  authDomain: "aviva-mamapp-prod.firebaseapp.com",
  databaseURL: "https://aviva-mamapp-prod.firebaseio.com",
  projectId: "aviva-mamapp-prod",
  storageBucket: "aviva-mamapp-prod.appspot.com",
  messagingSenderId: "123950719277",
  appId: "1:123950719277:web:331d4e07590df134be73a4"
}  */


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map