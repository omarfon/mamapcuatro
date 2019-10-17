(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding id=\"fondo\">\n  <div class=\"contenedorImagen\">\n    <img src=\"assets/imgs/logoCuidaBlanco.png\" alt=\"\">\n  </div>\n  <div class=\"contenedorBotones\">\n      <!-- <p class=\"tituloLogin\">Ingresa tu dni y contraseña para poder iniciar sesión</p> -->\n      <span>{{ msgError | json }}</span>\n\n          <ion-list>\n              <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\"\n                              #email></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Contraseña</ion-label>\n                  <ion-input type=\"password\"\n                             #password></ion-input>\n              </ion-item>\n              <div class=\"contenedorBotonIngresar\">\n                <ion-button\n                        size=\"full\"\n                        class=\"buttonIngresar\"\n                        submit\n                        color=\"tertiary\"\n                        (click)=\"doSignIn(email.value , password.value)\">\n              Ingresar\n            </ion-button>\n              </div>\n          </ion-list>\n        </div>\n            <ion-row>\n                <ion-col col-12>\n                    <ion-button\n                            (click)=\"goToRecovery()\"\n                            fill=\"clear\"\n                            class=\"contraseñaolvidada\">\n                          Olvidé la contraseña\n                    </ion-button>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-button\n                            block\n                            (click)=\"goToRegister()\"\n                            small\n                            class=\"botonRegister\">\n                          Registrarme\n                    </ion-button>\n                </ion-col>\n\n                <ion-col col-12>\n                    <ion-button\n                            color=\"secondary\"\n                            block\n                            (click)=\"goTohome()\"\n                            small\n                            class=\"botonRegister\">\n                            Ingresar como Invitado\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/fecha-pregnancy/fecha-pregnancy.component */ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts");
/* harmony import */ var src_app_components_calc_calc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/calc/calc.component */ "./src/app/components/calc/calc.component.ts");










var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_8__["FechaPregnancyComponent"],
                src_app_components_calc_calc_component__WEBPACK_IMPORTED_MODULE_9__["CalcComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            exports: [_components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_8__["FechaPregnancyComponent"], src_app_components_calc_calc_component__WEBPACK_IMPORTED_MODULE_9__["CalcComponent"]],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-content {\n  --background: url('fondoLogin.png') 0 0/100% 100% no-repeat;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  /* --background: #FFA18B; */\n}\n.tituloLogin {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 15px !important;\n  color: #9F5AE5;\n  font-size: 1.2em;\n}\nion-content {\n  position: fixed !important;\n}\nbutton {\n  height: 50px !important;\n}\n.contenedorBotones {\n  margin-top: 16vh;\n  padding-top: 10px;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n}\n.contenedorBotones .buttonIngresar {\n  position: relative;\n  background: #9F5AE5;\n  font-size: 1em;\n  font-weight: 400;\n  color: #ffffff;\n  margin-top: 10px;\n  height: 50px;\n}\n.contraseñaolvidada {\n  color: #7044ff;\n  font-size: 1em;\n  margin-top: 10px;\n  font-weight: 800;\n  /*    text-transform: capitalize; */\n}\n.contenedorImagen img {\n  width: 60%;\n  margin-top: 5vh;\n}\n.item-md {\n  background: rgba(255, 255, 255, 0.8) !important;\n  color: #fff;\n  margin-bottom: 5px;\n}\n.label-md {\n  color: #FFA18B !important;\n  font-size: 0.9em;\n}\n.text-input-md {\n  color: #FFA18B !important;\n  font-size: 1.1em;\n}\n.botonRegister {\n  --background: #FFA18B;\n  color: #fff;\n  margin-top: 15px !important;\n  border-radius: 5px;\n}\n.list-md {\n  background: transparent !important;\n}\nion-item {\n  --background: rgba(255, 255, 255, 0.5);\n  margin-bottom: 10px;\n}\nion-item ion-label {\n  color: #9F5AE5;\n  font-size: 1.2em;\n}\nion-item .label-floating {\n  color: #7044ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL01hYy9Eb2N1bWVudHMvZGV2L2dlc3RhbnRlTmV3L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNNLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBREVOO0FDQUk7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERVI7QUNDSTtFQUNJLDBCQUFBO0FERVI7QUNBSTtFQUNJLHVCQUFBO0FER1I7QUNESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxlQUFBO0FER047QUNETTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FERVI7QUNJSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNILG1DQUFBO0FEREg7QUNTSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FETk47QUNRSTtFQUNFLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FETE47QUNPSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QURKTjtBQ01JO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBREhOO0FDS0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FERk47QUNJSTtFQUNFLGtDQUFBO0FERE47QUNHSTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QURBTjtBQ0NNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FEQ1I7QUNDTTtFQUNFLGNBQUE7QURDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG9Mb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIC0tYmFja2dyb3VuZDogI0ZGQTE4QjsgKi9cbn1cblxuLnRpdHVsb0xvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzlGNUFFNTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yQm90b25lcyB7XG4gIG1hcmdpbi10b3A6IDE2dmg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5jb250ZW5lZG9yQm90b25lcyAuYnV0dG9uSW5ncmVzYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICM5RjVBRTU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29udHJhc2XDsWFvbHZpZGFkYSB7XG4gIGNvbG9yOiAjNzA0NGZmO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLyogICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7ICovXG59XG5cbi5jb250ZW5lZG9ySW1hZ2VuIGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLml0ZW0tbWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgY29sb3I6ICNGRkExOEIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnRleHQtaW5wdXQtbWQge1xuICBjb2xvcjogI0ZGQTE4QiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uYm90b25SZWdpc3RlciB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQTE4QjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGlzdC1tZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogIzlGNUFFNTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbmlvbi1pdGVtIC5sYWJlbC1mbG9hdGluZyB7XG4gIGNvbG9yOiAjNzA0NGZmO1xufSIsImlvbi1jb250ZW50e1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG9Mb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLyogLS1iYWNrZ3JvdW5kOiAjRkZBMThCOyAqL1xuICAgIH1cbiAgICAudGl0dWxvTG9naW57XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDMwdmghaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6MTVweCFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiM5RjVBRTU7XG4gICAgICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICB9XG4gIFxuICAgIGlvbi1jb250ZW50e1xuICAgICAgICBwb3NpdGlvbjpmaXhlZCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRlbmVkb3JCb3RvbmVze1xuICAgICAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDo1JTtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAuYnV0dG9uSW5ncmVzYXJ7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOjIwcHghaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiM5RjVBRTU7XG4gICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgIC8vIHdpZHRoOjgwJTtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udHJhc2XDsWFvbHZpZGFkYXtcbiAgICAgIGNvbG9yOiM3MDQ0ZmY7XG4gICAgICBmb250LXNpemU6MWVtO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAvKiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgKi9cbiAgICB9XG4gICAgLy8gLmNvbnRlbmVkb3JCb3RvbntcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICAvLyB9XG4gICAgLy8gLmNvbnRlbmVkb3JCb3RvbkluZ3Jlc2Fye1xuICAgIC8vICAgcGFkZGluZy1ib3R0b206MTBweCFpbXBvcnRhbnQ7XG4gICAgLy8gfVxuICAgIC5jb250ZW5lZG9ySW1hZ2VuIGltZ3tcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tdG9wOjV2aDtcbiAgICB9XG4gICAgLml0ZW0tbWR7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC44KSFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjojZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuICAgIC5sYWJlbC1tZHtcbiAgICAgIGNvbG9yOiNGRkExOEIhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgfVxuICAgIC50ZXh0LWlucHV0LW1ke1xuICAgICAgY29sb3I6I0ZGQTE4QiFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6MS4xZW07XG4gICAgfVxuICAgIC5ib3RvblJlZ2lzdGVye1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZBMThCO1xuICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIG1hcmdpbi10b3A6MTVweCFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICB9XG4gICAgLmxpc3QtbWR7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOiM5RjVBRTU7XG4gICAgICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICAgIH0gXG4gICAgICAubGFiZWwtZmxvYXRpbmd7XG4gICAgICAgIGNvbG9yOiM3MDQ0ZmZcbiAgICAgIH1cbiAgICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_autho_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/autho.service */ "./src/app/service/autho.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_datos_control_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/datos-control.service */ "./src/app/service/datos-control.service.ts");
/* harmony import */ var _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/fecha-pregnancy/fecha-pregnancy.component */ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts");
/* harmony import */ var src_app_components_calc_calc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/calc/calc.component */ "./src/app/components/calc/calc.component.ts");










var LoginPage = /** @class */ (function () {
    function LoginPage(autho, userSrv, alertCtrl, router, events, datosSrv, popover) {
        this.autho = autho;
        this.userSrv = userSrv;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.events = events;
        this.datosSrv = datosSrv;
        this.popover = popover;
        var authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe(function (data) {
                localStorage.setItem('authorization', data.authorization);
                localStorage.setItem('role', data.role);
            });
        }
    }
    LoginPage.prototype.ngOnInit = function () {
        var authorization = localStorage.getItem('authorization');
        if (!authorization) {
            this.autho.getKey().subscribe(function (data) {
                localStorage.setItem('authorization', data.authorization);
                localStorage.setItem('role', data.role);
            });
        }
    };
    LoginPage.prototype.doSignIn = function (email, password) {
        var _this = this;
        /* console.log(email, password) */
        this.userSrv.doSignIn(email, password).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.data = response;
                        console.log('lo que me trae el login:', this.data);
                        if (!(this.data.sex == 'HOMBRE')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "LO SENTIMOS",
                                subHeader: "Esta aplicación es de uso exclusivo para pacientes de sexo femenino",
                                buttons: [
                                    {
                                        text: 'ok',
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
                        localStorage.setItem('usuario', this.data.userEmail);
                        localStorage.setItem('email', this.data.userEmail);
                        localStorage.setItem('authorization', this.data.authorization);
                        localStorage.setItem('id', this.data.patientId);
                        localStorage.setItem('role', this.data.role);
                        localStorage.setItem('photoUrl', this.data.photoUrl);
                        localStorage.setItem('patientName', this.data.patientName);
                        localStorage.setItem('token', this.data.firebaseToken);
                        /* localStorage.setItem('uid', this.data.userId); */
                        localStorage.setItem('name', this.data.name);
                        this.datosSrv.getStartPregnacy().subscribe(function (data) {
                            if (!data) {
                                /* localStorage.setItem('startPregnancy', '0');
                               console.log('no hay fecha de ultima regla');
                               this.router.navigateByUrl('/tabs'); */
                                _this.goToCalc();
                                return;
                            }
                            _this.startPregnancy = data.fecha_ultima_regla;
                            /* console.log('lo que devuelve el servicio startPregnancy:', this._startPregnancy); */
                            /* this.startPregnancy = this._startPregnancy; */
                            /* console.log('this.startPregnancy de login:', this.startPregnancy); */
                            if (_this.startPregnancy) {
                                localStorage.setItem('startPregnancy', _this.startPregnancy);
                                _this.router.navigateByUrl('/tabs');
                            }
                            // console.log('lo que me trae el login:', localStorage)
                            _this.events.publish('change:foto');
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '',
                            message: "Email o Password incorrecto",
                            buttons: [{
                                    text: "Volver a intentar",
                                    handler: function (data) {
                                        // console.log('intentar de nuevo');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    LoginPage.prototype.goToRecovery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Olvidaste la Contraseña?',
                            subHeader: 'Ingresa tu email para recuperar la contraseña',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'text',
                                    placeholder: 'Ingresa tu email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'enviar',
                                    cssClass: 'primary',
                                    handler: function (data) {
                                        /* this.router.navigate(['home']); */
                                        var email = data.email;
                                        _this.userSrv.sendValidation(email).subscribe(function (data) {
                                            _this.datos = data;
                                            if (_this.datos.result = 'ok') {
                                                var dataObj = JSON.stringify(_this.datos);
                                                _this.router.navigate(['recoverycode', dataObj]);
                                            }
                                            else {
                                                _this.message = _this.datos.error.message;
                                            }
                                        });
                                    }
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
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.goTohome = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: _components_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_7__["FechaPregnancyComponent"],
                            backdropDismiss: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.recoveryCode = function () {
        this.router.navigate(['/code']);
    };
    LoginPage.prototype.goToCalc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: src_app_components_calc_calc_component__WEBPACK_IMPORTED_MODULE_8__["CalcComponent"],
                            backdropDismiss: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _service_autho_service__WEBPACK_IMPORTED_MODULE_3__["AuthoService"] },
        { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"] },
        { type: _service_datos_control_service__WEBPACK_IMPORTED_MODULE_6__["DatosControlService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_autho_service__WEBPACK_IMPORTED_MODULE_3__["AuthoService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _service_datos_control_service__WEBPACK_IMPORTED_MODULE_6__["DatosControlService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/service/autho.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/autho.service.ts ***!
  \******************************************/
/*! exports provided: AuthoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoService", function() { return AuthoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AuthoService = /** @class */ (function () {
    function AuthoService(http) {
        this.http = http;
        /* private SERVER = Constants.API_ENDPOINT; */
        this.SERVER = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = this.SERVER + "users/public-authorization";
    }
    AuthoService.prototype.getKey = function () {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthoService);
    return AuthoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map