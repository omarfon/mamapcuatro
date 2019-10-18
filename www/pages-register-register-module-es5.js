(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"contenedorTextoInicial\">\n        <h4 class=\"registroDeUsuarioTitulo\">Completa tu registro para obtener una cuenta...así de facil..</h4>\n      </div>\n    \n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"openPopover()\" novalidate padding class=\"formulario\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Nombres\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"registerForm.get('name').errors && registerForm.get('name').dirty || registerForm.get('name').touched\" no-lines>\n                <p *ngIf=\"registerForm.get('name').hasError('required')\" class=\"error\">el nombre es requerido</p>\n            </div>\n            <!-- <div *ngIf=\"registerForm.get('name').errors && registerForm.get('name').touched\" no-lines>\n                <p *ngIf=\"registerForm.get('name').hasError('required')\" class=\"error\">el nombre es requerido</p>\n            </div> -->\n          </ion-col>\n    \n          <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-input type=\"text\" formControlName=\"surname1\" name=\"surname1\" placeholder=\"Apellido Paterno\"></ion-input> \n            </ion-item>\n            <div *ngIf=\"registerForm.get('surname1').errors && registerForm.get('surname1').dirty || registerForm.get('surname1').touched\" no-lines>\n                    <p *ngIf=\"registerForm.get('surname1').hasError('required')\" class=\"error\">Apellido Paterno requerido</p>\n            </div>\n          </ion-col>\n    \n          <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-input type=\"text\" formControlName=\"surname2\" name=\"surname1\" placeholder=\"Apellido Materno\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"registerForm.get('surname2').errors && registerForm.get('surname2').dirty || registerForm.get('surname2').touched\" no-lines>\n                    <p *ngIf=\"registerForm.get('surname2').hasError('required')\" class=\"error\">Apellido Materno  requerido</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-item no-lines>\n                <ion-input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Email:\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"registerForm.get('email').errors && registerForm.get('email').dirty || registerForm.get('email').touched\" no-lines>\n                  <p *ngIf=\"registerForm.get('email').hasError('required')\" class=\"error\">Email requerido</p>\n                  <p *ngIf=\"registerForm.get('email').hasError('email')\" class=\"error\">El correo no puede tener puntos o comas</p> \n                  <p *ngIf=\"registerForm.get('email').hasError('email')\" class=\"error\">El correo electronico no es valido</p> \n              </div>\n            </ion-col>\n    \n            <ion-col size=\"12\">\n                <ion-item class=\"outpadding\" no-lines>\n                  <!-- <ion-label floating>Fecha de nacimiento:</ion-label> -->\n                  <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"birthdate\" name=\"birthdate\" placeholder=\"Fecha de nacimiento\"></ion-datetime>\n                  <!-- <ion-input type=\"date\" formControlName=\"birthdate\" name=\"date_of_birth\" placeholder=\"Fecha de nacimiento\"></ion-input> -->\n                </ion-item>\n                <div *ngIf=\"registerForm.get('birthdate').errors && registerForm.get('birthdate').dirty || registerForm.get('birthdate').touched\" no-lines>\n                      <p *ngIf=\"registerForm.get('birthdate').hasError('required')\" class=\"error\">Fecha de Nacimiento requerido</p>\n                </div>\n              </ion-col>\n    \n          <!-- <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-select formControlName=\"gender\" name=\"gender\" placeholder=\"Sexo\" [(ngModel)]=\"gender\" (ionChange)=\"cambiogenero($event)\">\n                <ion-select-option *ngFor=\"let gender of genders\" [value]=\"gender\" >{{gender.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n                <div *ngIf=\"registerForm.get('gender').errors && registerForm.get('gender').dirty || registerForm.get('gender').touched\" no-lines>\n                  <p *ngIf=\"registerForm.get('gender').hasError('required')\" class=\"error\">Genero requerido</p>\n                </div>\n          </ion-col> -->\n    \n          <ion-col size=\"12\">\n              <ion-item no-lines>\n                <ion-input type=\"tel\" formControlName=\"phone\" name=\"phone\" placeholder=\"Telefono\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"registerForm.get('phone').errors && registerForm.get('phone').dirty || registerForm.get('phone').touched\" no-lines>\n                  <p *ngIf=\"registerForm.get('phone').hasError('required')\" class=\"error\">Teléfono requerido</p>\n                  <p *ngIf=\"registerForm.get('phone').hasError('minLength')\" class=\"error\">Mínimo 9 caracteres</p>\n              </div>\n            </ion-col>\n        \n          <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-select  formControlName=\"documentType\" name=\"documentType\" [(ngModel)]=\"document\" (ionChange)=\"cambioDocumento($event)\"  placeholder=\"Tipo de documento\">\n                <ion-select-option *ngFor=\"let document of documents\" [value]=\"document\" >{{document.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div *ngIf=\"registerForm.get('documentType').errors && registerForm.get('documentType').dirty || registerForm.get('documentType').touched\" no-lines>\n                <p  *ngIf=\"registerForm.get('documentType').hasError('required')\" class=\"error\">Tipo de documento requerido</p>\n            </div>\n          </ion-col>\n    \n          <ion-col size=\"12\">\n            <ion-item no-lines>\n              <ion-input *ngIf=\"!_documenType\"></ion-input> \n              <ion-input *ngIf=\"_documenType && _documenType.id == 3\" placeholder=\"Nº de Carne\" type=\"tel\"   formControlName=\"documentNumber\" name=\"documentNumber\"\n              minlength=12 maxlength=12 stacked></ion-input>\n              <ion-input *ngIf=\"_documenType && _documenType.id == '1'\" placeholder=\"Nº de Dni\" type=\"number\" formControlName=\"documentNumber\" name=\"documentNumber\"\n                minlength=8 maxlength=8  stacked></ion-input>\n              <ion-input *ngIf=\"_documenType &&_documenType.id == 2\" placeholder=\"Nº de Pasaporte\" type=\"number\" formControlName=\"documentNumber\" name=\"documentNumber\"\n                minlength=12 maxlength=12 stacked></ion-input>\n              <!-- <p color=\"danger\" ion-text *ngIf=\"registerForm.get('dni').hasError('required')\">DNI requerido</p> -->\n            </ion-item>\n            <div *ngIf=\"registerForm.get('documentNumber').errors && registerForm.get('documentNumber').dirty || registerForm.get('documentNumber').touched\" no-lines>\n                <p  *ngIf=\"registerForm.get('documentNumber').hasError('required')\" class=\"error\">Tipo de documento requerido</p>\n            </div>\n          </ion-col>\n    \n          \n        <ion-col size=\"12\">\n          <ion-item no-lines>\n            <ion-input type=\"password\" required name=\"password\" formControlName=\"password\" placeholder=\"Contraseña\"></ion-input>\n          </ion-item >\n          <div *ngIf=\"registerForm.get('password').errors && registerForm.get('password').dirty || registerForm.get('password').touched\" no-lines>\n              <p *ngIf=\"registerForm.get('password').hasError('required')\" class=\"error\">Contraseña requerida</p>\n              <p *ngIf=\"registerForm.get('password').hasError('minLength')\" class=\"error\">Minimo 8 caracteres</p>\n            </div> \n        </ion-col>\n    \n    \n        <ion-col size=\"12\">\n          <ion-item no-lines>\n            <ion-input type=\"password\" formControlName=\"password_confirmation\" name=\"password_confirmation\" placeholder=\"repetir contraseña\"></ion-input>\n            <div *ngIf=\"registerForm.get('password_confirmation').errors && registerForm.get('password_confirmation').dirty || registerForm.get('password_confirmation').touched\">\n                <p *ngIf=\"registerForm.get('password_confirmation').hasError('required')\" class=\"error\">Contraseña requerida</p>\n            </div>\n          </ion-item>\n        </ion-col>\n    \n        <ion-col size=\"12\">\n          <ion-item no-lines>\n            <ion-label class=\"terminosyCondiciones\">Acepto los términos y condiciones</ion-label>\n            <ion-checkbox formControlName=\"aprobed\" name=\"aprobed\" [(ngModel)]=\"aprobed\" (ionChange)=\"aceptaCondiciones(aprobed)\"></ion-checkbox>\n          </ion-item>\n        </ion-col> \n     \n      </ion-row>\n    \n        <ion-button type=\"submit\" [disabled]=\"!registerForm.valid || !validacion()\" size=\"full\" color=\"rosado\" class=\"alto50\">Registro</ion-button>\n        <!-- <ion-button type=\"submit\" size=\"full\" color=\"rosado\" class=\"alto50\">Registro</ion-button> -->\n      </form>\n    \n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"izquierda\">\n              <ion-button fill=\"clear\" class=\"bajas\" color=\"rosado\" (click)=\"seeConditions()\">terminos y condiciones</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"derecha \">\n              <ion-button fill=\"clear\" class=\"bajas derecha\" color=\"rosado\" (click)=\"goToLogin() \">Tengo una cuenta</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modal-code/modal-code.component */ "./src/app/components/modal-code/modal-code.component.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _components_modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_8__["ModalCodeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registroDeUsuarioTitulo {\n  color: #ffffff;\n  text-align: center;\n  width: 80%;\n  margin-left: 10%;\n  font-size: 1.1em;\n  font-weight: 200;\n  padding-top: 30px;\n}\n\nion-content {\n  --background:#F7FAFC!important;\n}\n\nion-item {\n  background: transparent !important;\n}\n\nion-input {\n  background: #fff;\n  height: 50px;\n  /*     border-radius:10px;*/\n  border-bottom: none !important;\n}\n\n.contenedorTextoInicial {\n  background: #FFA28C;\n  height: 100px;\n  margin-top: -16px !important;\n  color: #fff;\n  /* border-bottom-left-radius: 15px; */\n  border-bottom-right-radius: 55px;\n}\n\nion-label {\n  font-size: 0.8em;\n}\n\n.formulario {\n  margin-top: -10px !important;\n}\n\n.alto50 {\n  height: 50px;\n  margin-top: 15px;\n}\n\n.bajas {\n  text-transform: lowercase;\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #fff;\n  margin-top: -5px;\n}\n\n.izquierda {\n  text-align: left !important;\n}\n\n.derecha {\n  text-align: right !important;\n}\n\ninput::-webkit-input-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput::-moz-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput:-ms-input-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput::-ms-input-placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\ninput::placeholder {\n  font-size: 0.8em;\n  color: #B6BFBF !important;\n}\n\nion-select {\n  width: 100% !important;\n  min-width: 100%;\n  background: #fff;\n  font-size: 0.8em;\n  color: #a1a1a1 !important;\n  height: 50px;\n}\n\n.select-text {\n  min-width: 80px;\n  color: #000 !important;\n  font-size: 1em;\n}\n\nion-datetime {\n  font-size: 0.8em;\n}\n\nion-datetime placeholder {\n  color: #B6BFBF !important;\n}\n\n.error {\n  font-size: 0.7em;\n  color: #fff;\n  background: red;\n  margin-top: 2px;\n  margin-left: 20px;\n  width: 90%;\n}\n\n.error:before {\n  content: \"*\";\n  margin-right: 5px;\n}\n\n.terminosyCondiciones {\n  color: #287195;\n}\n\n.outpadding {\n  width: 92%;\n  margin-left: 5%;\n  height: 50px;\n  background: #fff !important;\n  font-size: 1.3em;\n  text-align: left;\n}\n\n.datetime-md .datetime-placeholder {\n  margin-left: -15px;\n  font-size: 0.9em;\n  color: #B6BFBF;\n}\n\n.select-text {\n  color: #9da3a3 !important;\n}\n\n.item-datetime {\n  width: 100%;\n  margin-left: 0 !important;\n}\n\n.datetime-text {\n  padding-left: 0 !important;\n}\n\nion-datetime, ion-select {\n  padding-left: 0 !important;\n}\n\nion-select {\n  color: #000 !important;\n  font-size: 1em;\n}\n\nion-select .select-placeholder {\n  color: #a0a5a5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBREFBO0VBQ0Usa0NBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0FDTUY7O0FESkE7RUFDRSw0QkFBQTtBQ09GOztBRExBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDUUY7O0FETkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLDJCQUFBO0FDVUY7O0FEUkE7RUFDRSw0QkFBQTtBQ1dGOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRGRBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRGRBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRGRBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRGRBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFZBO0VBQ00sc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2FOOztBRFhBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2NGOztBRFpBO0VBQ0UsZ0JBQUE7QUNlRjs7QURkRTtFQUNFLHlCQUFBO0FDZ0JKOztBRGJFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNnQko7O0FEZEU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNpQko7O0FEZkU7RUFDRSxjQUFBO0FDa0JKOztBRGhCRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURsQkU7RUFDRSx5QkFBQTtBQ3FCSjs7QURuQkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNzQko7O0FEcEJFO0VBQ0csMEJBQUE7QUN1Qkw7O0FEckJFO0VBQ0UsMEJBQUE7QUN3Qko7O0FEdEJFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDeUJKOztBRHhCTTtFQUNFLHlCQUFBO0FDMEJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJvRGVVc3VhcmlvVGl0dWxve1xuICBjb2xvcjojZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOjgwJTtcbiAgbWFyZ2luLWxlZnQ6MTAlO1xuICBmb250LXNpemU6MS4xZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmctdG9wOjMwcHg7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiNGN0ZBRkMhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXR7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICAvKiAgICAgYm9yZGVyLXJhZGl1czoxMHB4OyovXG4gIGJvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnQ7IFxufVxuLmNvbnRlbmVkb3JUZXh0b0luaWNpYWx7XG4gIGJhY2tncm91bmQ6ICNGRkEyOEM7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6LTE2cHghaW1wb3J0YW50O1xuICBjb2xvcjojZmZmO1xuICAvKiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4OyAqL1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTVweDtcbn1cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOi44ZW07XG59XG4uZm9ybXVsYXJpb3tcbiAgbWFyZ2luLXRvcDotMTBweCFpbXBvcnRhbnQ7XG59XG4uYWx0bzUwe1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6MTVweDtcbn1cbi5iYWphc3tcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC1zaXplOi45ZW07XG4gIGZvbnQtd2VpZ2h0OjQwMDtcbiAgY29sb3I6I2ZmZjtcbiAgbWFyZ2luLXRvcDotNXB4O1xufVxuLml6cXVpZXJkYXtcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG59XG4uZGVyZWNoYXtcbiAgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgIGNvbG9yOiNCNkJGQkYhaW1wb3J0YW50O1xufVxuaW9uLXNlbGVjdHtcbiAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDoxMDAlO1xuICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgZm9udC1zaXplOi44ZW07XG4gICAgICBjb2xvcjpyZ2IoMTYxLCAxNjEsIDE2MSkhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OjUwcHg7XG59XG4uc2VsZWN0LXRleHR7XG4gIG1pbi13aWR0aDo4MHB4O1xuICBjb2xvcjojMDAwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOjFlbTtcbn1cbmlvbi1kYXRldGltZXtcbiAgZm9udC1zaXplOi44ZW07XG4gIHBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiNCNkJGQkYhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuZXJyb3J7XG4gICAgZm9udC1zaXplOi43ZW07XG4gICAgY29sb3I6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kOnJlZDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5lcnJvcjpiZWZvcmV7XG4gICAgY29udGVudDonKic7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnRlcm1pbm9zeUNvbmRpY2lvbmVze1xuICAgIGNvbG9yOiMyODcxOTU7XG4gIH1cbiAgLm91dHBhZGRpbmd7XG4gICAgd2lkdGg6OTIlO1xuICAgIG1hcmdpbi1sZWZ0OjUlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZToxLjNlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5kYXRldGltZS1tZCAuZGF0ZXRpbWUtcGxhY2Vob2xkZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbTsgIFxuICAgIGNvbG9yOiNCNkJGQkY7XG4gIH1cbiAgLnNlbGVjdC10ZXh0IHtcbiAgICBjb2xvcjpyZ2IoMTU3LCAxNjMsIDE2MykhaW1wb3J0YW50O1xuICB9XG4gIC5pdGVtLWRhdGV0aW1le1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6MCFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRhdGV0aW1lLXRleHR7XG4gICAgIHBhZGRpbmctbGVmdDowIWltcG9ydGFudDtcbiAgfVxuICBpb24tZGF0ZXRpbWUsIGlvbi1zZWxlY3R7XG4gICAgcGFkZGluZy1sZWZ0OjAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1zZWxlY3R7XG4gICAgY29sb3I6IzAwMCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICAgIC5zZWxlY3QtcGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiNhMGE1YTUhaW1wb3J0YW50O1xuICAgICAgfVxuICB9IiwiLnJlZ2lzdHJvRGVVc3VhcmlvVGl0dWxvIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGN0ZBRkMhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgLyogICAgIGJvcmRlci1yYWRpdXM6MTBweDsqL1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yVGV4dG9JbmljaWFsIHtcbiAgYmFja2dyb3VuZDogI0ZGQTI4QztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7ICovXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1NXB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hbHRvNTAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5iYWphcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjQjZCRkJGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjYTFhMWExICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbmlvbi1kYXRldGltZSBwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQjZCRkJGICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5lcnJvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIipcIjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50ZXJtaW5vc3lDb25kaWNpb25lcyB7XG4gIGNvbG9yOiAjMjg3MTk1O1xufVxuXG4ub3V0cGFkZGluZyB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXRldGltZS1tZCAuZGF0ZXRpbWUtcGxhY2Vob2xkZXIge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjQjZCRkJGO1xufVxuXG4uc2VsZWN0LXRleHQge1xuICBjb2xvcjogIzlkYTNhMyAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1kYXRldGltZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUsIGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuaW9uLXNlbGVjdCAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhMGE1YTUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/crud.service */ "./src/app/service/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modal-code/modal-code.component */ "./src/app/components/modal-code/modal-code.component.ts");









var RegisterPage = /** @class */ (function () {
    function RegisterPage(fb, crudSrv, routes, dataSvr, alertCtrl, popoverCtrl) {
        this.fb = fb;
        this.crudSrv = crudSrv;
        this.routes = routes;
        this.dataSvr = dataSvr;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.cambio = false;
        this.aprobed = false;
        this.gender = {
            id: 0,
            name: ""
        };
        this.document = {
            id: 0,
            name: ""
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actual = moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-DD");
        this.dataSvr.getGenders().subscribe(function (datagenders) {
            _this.genders = datagenders;
            /* console.log("this.genders:", this.genders); */
        });
        this.dataSvr.getDocuments().subscribe(function (documents) {
            _this.documents = documents;
            /* console.log("this.documents:", this.documents); */
        });
        this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            surname1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            surname2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            /* gender: ['',  [ Validators.required ]], */
            birthdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            aprobed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    RegisterPage.prototype.validacion = function () {
        var valid = this.registerForm.value;
        if (valid.password == valid.password_confirmation && valid.aprobed == true) {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterPage.prototype.cambiogenero = function ($event) {
        this._gender = this.gender;
        /* console.log('this.gender:', this._gender); */
    };
    RegisterPage.prototype.cambioDocumento = function ($event) {
        this._documenType = this.document;
        /*  console.log('this.document', this._documenType); */
    };
    RegisterPage.prototype.aceptaCondiciones = function (aprobed) {
        /* console.log('aprobed', aprobed); */
    };
    RegisterPage.prototype.seeConditions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var terminos;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'TÉRMINOS Y CONDICIONES',
                            message: 'Los siguientes términos y condiciones de uso (en adelante, "Términos") son un acuerdo legal entre el usuario y Centros de Salud Peruanos S.A.C., RUC N° con RUC N°20602393934, con domicilio en Jirón Carlos Villarán N°611, Urbanización Santa Catalina, Distrito de La Victoria, Provincia y Departamento de Lima, Perú (en adelante "CSP" o "nosotros", " nos” o "nuestro "), para establecer el marco legal y contractual aplicable al registro, uso, baja o interacción en la plataforma ofrecida por CSP para el acceso a los servicios que presta CLÍNICA AVIVA y todas las aplicaciones móviles o sitios web que pertenecen, operan, tienen licencia o están bajo el control de CSP (en adelante, “Aplicación móvil”, “Aplicaciones móviles”, “Sitio Web” o "Sitios Web"). AL ACCEDER O UTILIZAR LAS APLICACIONES O SITIOS WEB, EL USUARIO SE COMPROMETE A RESPETAR ESTOS TÉRMINOS Y NUESTRA POLÍTICA DE PRIVACIDAD. SI NO ESTÁ DE ACUERDO CON ESTOS TÉRMINOS, NO ACCEDA NI UTILICE LAS APLICACIONES O LOS SITIOS WEB  Al utilizar el Sitio Web o Aplicaciones Móviles, usted declara y garantiza que: usted tiene el poder legal y la autoridad para aceptar y estar sujeto a estos Términos; y, si nos ha proporcionado información como consecuencia del uso del Sitio Web, dicha información es verdadera y precisa. Facilitar información falsa, engañosa o incorrecta puede dar lugar a responsabilidades tanto civiles como penales. Si tienes dudas al respecto, te recomendamos que consultes con tu asesor legal. El acceso y utilización del Sitio Web y Aplicaciones Móviles implica la declaración expresa del usuario de conocer y aceptar plenamente todas las disposiciones, normas, instrucciones, responsabilidades y políticas contenidas en los presentes Términos. En consecuencia, el usuario debe leer detenidamente los presentes Términos cada vez que acceda al Sitio Web, Aplicaciones Móviles y Servicios, pues podrían sufrir variaciones o actualizaciones sin previo aviso, en atención a nuevos requerimientos legales o por necesidades internas para cumplir con las mejores prácticas de negocio. Finalidad de la Aplicación o el Sitio Web La finalidad de las Aplicaciones Móviles o del Sitio Web y es proporcionar a nuestros pacientes, usuarios y al público en general (en adelante, los “Usuarios” o el “Usuario”), una plataforma de acceso a los servicios médicos que presta CLÍNICA AVIVA, así como a información de salud, propia o suministrada por CSP o sus empresas relacionadas relevantes para el usuario.La información suministrada de naturaleza médica tiene fines informativos y no sustituye el asesoramiento médico profesional, la ayuda, el diagnóstico o el tratamiento. Condiciones de uso de la Aplicación o Sitio Web Los Usuarios aceptan que el uso de la Aplicación o Sitio Web requiere de conectividad a Internet. En ese sentido, los Usuarios aceptan que CSP no se hace responsable por problemas de conectividad que limiten, restrinjan o impidan el uso. Los Usuarios entienden que la Aplicación o el Sitio Web podrá ser usado por todo el público en general que tenga una conexión web. Sin embargo, CSP recomienda su uso sólo a personas mayores de dieciocho (18) años de edad. Se encuentra prohibido el uso del Sitio Web o Aplicaciones Móviles por parte de los Usuarios para fines contrarios a las normas vigentes, el orden público y las buenas costumbres. CSP podrá enviar avisos de servicio, mensajes administrativos y otro tipo de información para la adecuada conectividad. Será responsabilidad de los Usuarios mantener actualizados sus datos registrados en el Sitio Web y Aplicaciones Móviles, así como ejecutar las actualizaciones disponibles. En el supuesto que alguna de las disposiciones contenidas en los presentes Términos y Condiciones de Uso sea declarado ilegal, inválido o nulo, el resto de términos quedará vigente y aplicable para cualquier supuesto. Para acceder a los servicios, el usuario creará una cuenta de acceso con nombre de usuario y contraseña, por tanto, deberá mantener la confidencialidad de la contraseña pues el Usuario es responsable de la información personal y actividad que se desarrolle en su cuenta o a través de ella. Si el Usuario debe cuidar de cerrar siempre la sesión a fin de evitar accesos indebidos por parte de terceros. Para asegurar la disponibilidad de las Aplicaciones móviles y Sitio Web, así como la ausencia de errores en cualquier transmisión de información que pudiera tener lugar; CSP cuenta con el soporte necesario y adecuado. Sin perjuicio de ello, CSP no garantiza que el contenido del Sitio Web, Aplicaciones Móviles o Servicios será ininterrumpido o libre de errores, que los defectos serán corregidos, o que los servicios o los servidores que hacen que el uso esté disponible, se encuentren libre de virus u otros componentes dañinos. El Sitio Web y Aplicaciones Móviles pueden incluir inexactitudes técnicas o errores tipográficos, y CSP puede hacer cambios o mejoras en cualquier momento. Asimismo, CSP no garantiza que el uso del Sitio Web, Aplicaciones móviles y Servicios no infringirá los derechos de terceros y no asume ninguna responsabilidad o responsabilidad por errores u omisiones en el contenido provisto. Limitación de Responsabilidad En la medida en que la legislación aplicable lo permita, CSP o cualquiera de sus gerentes, funcionarios, profesionales de salud, colaboradores, representantes, no serán responsables ante el usuario o ante cualquier tercero por cualquier daño que surja de o en relación con el uso del Sitio Web y Aplicación Móvil. La Aplicación o el sitio Web pueden contener enlaces a otros sitios Web controlados u ofrecidos por terceras personas. CSP declara que no se hace responsable en relación a ninguna información, materiales, productos o servicios que aparezcan o que se ofrezcan en cualquiera de los sitios pertenecientes a terceras personas con enlaces a este sitio Web.  Derechos de Autor y Propiedad Intelectual El usuarios acepta que CSP es la única y exclusiva titular sobre todas sus marcas registradas en el Perú, así como cualquier otra marca registrada, marcas de servicio y/o logotipos contenidos en la Aplicación o el Sitio Web. En tal sentido, se encuentra expresamente prohibido que dichas marcas y/o logotipos sean copiadas, reproducidas, modificadas o utilizadas de cualquier manera sin autorización expresa de CSP.  Política de Protección de Datos Personales:Al momento de registrarse en la Aplicación o Sitio Web, el usuario deberá registrar sus datos personales. Los datos personales que proporcione a CSP podrían contener datos sensibles. En vista de ello, el usuario autoriza a CSP a recopilar y dar tratamiento (por sí mismo o a través de terceros) a sus datos personales, para que incluso pueda elaborar bases de datos con información sobre su nombre, apellido, edad, nacionalidad, estado civil, documento de identidad, ocupación, domicilio, correo electrónico, teléfono celular, estado de salud, afecciones, preexistencias, que sean proporcionados por el usuario y/o sean recopilados o generados por CSP y/o cualquier tercero, como consecuencia de la utilización de la Aplicación o Sitio Web, o como consecuencia de alguna otra relación comercial que el usuario mantenga y/o haya mantenido con CSP. En ese sentido, a fin de dar tratamiento a la información conforme se indica en este documento, el usuario otorga a CSP su consentimiento libre, previo, expreso, inequívoco e informado, para que (por sí mismo o a través de terceros) pueda: recopilar, registrar, organizar, almacenar, conservar, elaborar, modificar, bloquear, suprimir, extraer, consultar, utilizar, transferir, exportar, importar o procesar (tratar) de cualquier otra forma sus datos personales, conforme a Ley. El usuario declara conocer que los datos pueden ser alojados en plataformas cuyos servidores se encuentren en el extranjero, consintiendo el flujo transfronterizo de sus datos. Esta autorización es indefinida y estará vigente hasta que el usuario la revoque. El usuario tiene derecho a revocar en cualquier momento su consentimiento, comunicando su decisión por escrito a CSP quien podrá informarle a través de cualquier medio de comunicación, sobre otros canales para que puedan hacer efectiva la revocatoria. Asimismo, el usuario declara haber sido informado que podrán ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación y oposición de sus datos de acuerdo a la legislación vigente. Para ello efectuará su solicitud por escrito a CSP, quien podrá informarle a través de cualquier medio de comunicación, sobre otros canales para que pueda hacer efectivo el ejercicio de sus derechos. CSP es titular y responsable de las bases de datos originadas por el tratamiento de los Datos Personales que recopile, los mismos que considerará como fidedignos, dado que el usuario los otorga en calidad de Declaración Jurada. Asimismo, CSP declara que ha adoptado los niveles de seguridad apropiados para el resguardo de la información, respetando las medidas de seguridad técnica aplicables a cada categoría y tipo de tratamiento de las Bases de Datos; asimismo, declara que respeta los principios de legalidad, consentimiento, finalidad, proporcionalidad, calidad, disposición de recurso, nivel de protección adecuado, conforme a las disposiciones de la Ley de Protección de Datos vigente en Perú. El usuario acepta y da su consentimiento a fin de que CSP le envíe por medios electrónicos ofertas, promociones, comunicados, u otros análogos sobre los servicios de salud que ofrece. Asimismo, declara conocer y acepta que algunos datos sean compartidos con otras empresas del Grupo INTERCORP y Grupo NEXUS, integrantes del mismo grupo empresarial de CSP, para efectos de ofrecerle beneficios, promociones y publicidad de los servicios que presten o bienes que ofrezcan. Ley Aplicable Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República del Perú. Asimismo, el Usuario declara su conformidad de someter cualquier discrepancia a la jurisdicción de los  jueces y tribunales de la Corte Superior de Justicia de Lima Norte. Modificaciones Los presentes Términos han sido actualizados a JUNIO 2019 y podrán ser modificados por CSP en cualquier momento.',
                            buttons: ['OK']
                        })];
                    case 1:
                        terminos = _a.sent();
                        return [4 /*yield*/, terminos.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.changue = function () {
        this.cambio = true;
    };
    RegisterPage.prototype.openPopover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, email;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = this.registerForm.value;
                email = data.email;
                this.crudSrv.validateEmail(email).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var popover;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.popoverCtrl.create({
                                    component: _components_modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_8__["ModalCodeComponent"],
                                    componentProps: {
                                        data: data
                                    }
                                })];
                            case 1:
                                popover = _a.sent();
                                return [4 /*yield*/, popover.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    header: "Error",
                                    subHeader: "Posiblemente el correo ya ha sido registrado",
                                    buttons: [
                                        {
                                            text: 'Reintentar',
                                            role: 'Cancel'
                                        }
                                    ]
                                })];
                            case 1:
                                alert = _a.sent();
                                /* console.log(err); */
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                /* console.log(err); */
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.routes.navigate(['login']);
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiUrl = this.SERVER + "users/";
    }
    DataService.prototype.getGenders = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'genders', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }) /* .catch(e =>{
          return Observable.of(e)
        }); */);
    };
    DataService.prototype.getDocuments = function () {
        var authorization = localStorage.getItem('authorization');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": authorization });
        return this.http.get(this.apiUrl + 'documenttypes', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }) /* .catch(e =>{
          return Observable.of(e)
        }); */);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map