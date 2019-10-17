(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recoverycode-recoverycode-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/recoverycode/recoverycode.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/recoverycode/recoverycode.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recuperar cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <p class=\"codigoValida\">hemos enviado al correo el código de validación con el que podrás recuperar tu cuenta....</p>\n   <ion-row>\n     <form [formGroup]=\"formCode\" (ngSubmit)=\"saveData()\" novalidate>\n     <div col-12 padding >\n       <ion-row padding>\n           <ion-col class=\"rectanguloInput\">\n             <ion-input type=\"tel\"\n                          minlength=\"1\"\n                          maxlength=\"1\"\n                         formControlName=\"primero\"\n                          ></ion-input>\n            </ion-col>\n           <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                        minlength=\"1\"\n                        maxlength=\"1\"\n                          formControlName=\"segundo\"\n                          ></ion-input>\n            </ion-col>\n           <ion-col class=\"rectanguloInput\">\n             <ion-input type=\"tel\"\n                        minlength=\"1\"\n                        maxlength=\"1\"\n                        tercero=\"tercero\"\n                        formControlName=\"tercero\"\n                        ngModel></ion-input>\n            </ion-col>\n            <ion-col class=\"rectanguloInput\">\n                <ion-input type=\"tel\"\n                        minlength=\"1\"\n                        maxlength=\"1\"\n                           tercero=\"cuarto\"\n                           formControlName=\"cuarto\"\n                           ngModel></ion-input>\n               </ion-col>\n              </ion-row>\n              <div>\n                  <p class=\"tituloContraseña\">Cambia la contraseña</p>\n                   <ion-item>\n                       <ion-label position=\"floating\">contraseña nueva</ion-label>\n                       <ion-input type=\"password\"\n                                   formControlName=\"password\"\n                                   ngModel>\n                       </ion-input>\n                     </ion-item>\n\n                     <ion-item>\n                         <ion-label position=\"floating\">Repetir contraseña nueva</ion-label>\n                         <ion-input type=\"password\"\n                                     formControlName=\"passwordRepeat\"\n                                     ngModel>\n                         </ion-input>\n                       </ion-item>\n                </div>\n              <div class=\"center\">\n                <ion-button\n                        size=\"block\"\n                        color=\"rosado\"\n                         type=\"submit\"\n                         class=\"botonRecuperar\"\n                         [disabled]=\"!formCode.valid || !validacion()\">\n                   Recuperar\n                </ion-button>\n              </div>\n     </div>\n    </form>\n  </ion-row>\n   <div class=\"center\">\n     <p class=\"newCode\">Si no recibiste o caducó tu codigo puedes solicitar uno nuevo.</p>\n     <ion-button\n            class=\"codigoreen\"\n            fill=\"clear\"\n            (click)=\"sendCode()\">reenviar códido\n   </ion-button>\n   </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/recoverycode/recoverycode.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recoverycode/recoverycode.module.ts ***!
  \***********************************************************/
/*! exports provided: RecoverycodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverycodePageModule", function() { return RecoverycodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recoverycode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recoverycode.page */ "./src/app/pages/recoverycode/recoverycode.page.ts");







const routes = [
    {
        path: '',
        component: _recoverycode_page__WEBPACK_IMPORTED_MODULE_6__["RecoverycodePage"]
    }
];
let RecoverycodePageModule = class RecoverycodePageModule {
};
RecoverycodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_recoverycode_page__WEBPACK_IMPORTED_MODULE_6__["RecoverycodePage"]]
    })
], RecoverycodePageModule);



/***/ }),

/***/ "./src/app/pages/recoverycode/recoverycode.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/recoverycode/recoverycode.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.codigoValida {\n  color: #96999C;\n  text-align: center;\n  font-size: 1em;\n  font-weight: 300;\n  width: 90%;\n  margin-left: 5%;\n}\n.rectanguloInput {\n  border: 2px solid #96999C;\n  height: 70px;\n  margin: 2px;\n  border-radius: 5px;\n}\n.center {\n  text-align: center;\n  margin-top: 20px;\n}\n.codigoreen {\n  color: #00B6A3;\n  font-size: 1em;\n  text-transform: lowercase;\n  font-size: 1.2em;\n  font-weight: lighter;\n  border: 1px solid #062F51;\n  border-radius: 10px;\n}\n.botonRecuperar {\n  background: #062F51;\n  width: 100%;\n  height: 55px;\n}\n.newCode {\n  color: #062F51;\n  font-size: 0.9em;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.tituloContraseña {\n  width: 90%;\n  margin-left: 5%;\n  color: #062F51;\n  text-align: center;\n  font-size: 1.3em;\n  margin-top: 20px;\n  margin-bottom: 10 !important;\n}\n.text-input-md {\n  font-size: 2em;\n  color: #00B6A3;\n  text-align: center;\n  font-weight: 600;\n}\nion-input {\n  color: #062F51;\n  font-size: 1.3em;\n  text-align: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjb3Zlcnljb2RlL3JlY292ZXJ5Y29kZS5wYWdlLnNjc3MiLCIvVXNlcnMvTWFjL0RvY3VtZW50cy9kZXYvZ2VzdGFudGVOZXcvc3JjL2FwcC9wYWdlcy9yZWNvdmVyeWNvZGUvcmVjb3Zlcnljb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsZUFBQTtBREFKO0FDRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURDSjtBQ0NFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0RFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRElKO0FDRkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FES0o7QUNIRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FETUo7QUNKRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRE9KO0FDTEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNvdmVyeWNvZGUvcmVjb3Zlcnljb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb2RpZ29WYWxpZGEge1xuICBjb2xvcjogIzk2OTk5QztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucmVjdGFuZ3Vsb0lucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzk2OTk5QztcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29kaWdvcmVlbiB7XG4gIGNvbG9yOiAjMDBCNkEzO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNjJGNTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ib3RvblJlY3VwZXJhciB7XG4gIGJhY2tncm91bmQ6ICMwNjJGNTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5uZXdDb2RlIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRpdHVsb0NvbnRyYXNlw7FhIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogIzA2MkY1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbnB1dC1tZCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzAwQjZBMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufSIsIi5jb2RpZ29WYWxpZGF7XG4gICAgY29sb3I6ICM5Njk5OUM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLnJlY3Rhbmd1bG9JbnB1dHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTY5OTlDO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICB9XG4gIC5jb2RpZ29yZWVue1xuICAgIGNvbG9yOiMwMEI2QTM7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzA2MkY1MTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIH1cbiAgLmJvdG9uUmVjdXBlcmFye1xuICAgIGJhY2tncm91bmQ6IzA2MkY1MTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo1NXB4O1xuICB9XG4gIC5uZXdDb2Rle1xuICAgIGNvbG9yOiMwNjJGNTE7XG4gICAgZm9udC1zaXplOi45ZW07XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gIH1cbiAgLnRpdHVsb0NvbnRyYXNlw7Fhe1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgY29sb3I6ICMwNjJGNTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZToxLjNlbTtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMCFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRleHQtaW5wdXQtbWR7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6ICMwMEI2QTM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIGNvbG9yOiMwNjJGNTE7XG4gICAgZm9udC1zaXplOjEuM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/recoverycode/recoverycode.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recoverycode/recoverycode.page.ts ***!
  \*********************************************************/
/*! exports provided: RecoverycodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverycodePage", function() { return RecoverycodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RecoverycodePage = class RecoverycodePage {
    constructor(usrSrv, form, alertCtrl, router, routes, events) {
        this.usrSrv = usrSrv;
        this.form = form;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.routes = routes;
        this.events = events;
    }
    ngOnInit() {
        const dataObj = this.router.snapshot.paramMap.get('dataObj');
        this.datos = JSON.parse(dataObj);
        /* console.log('this.datos:', this.datos); */
        this.formCode = this.form.group({
            primero: [],
            segundo: [],
            tercero: [],
            cuarto: [],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    validacion() {
        const valid = this.formCode.value;
        if (valid.password == valid.passwordRepeat) {
            return true;
        }
        else {
            return false;
        }
    }
    saveData() {
        let codigo = this.formCode.value;
        // console.log('codigo:', codigo);
        let uno = codigo.primero;
        let dos = codigo.segundo;
        let tres = codigo.tercero;
        let cuatro = codigo.cuarto;
        let code = uno + dos + tres + cuatro;
        // console.log(code);
        this.datos.code = code;
        this.datos.password = this.formCode.value.password;
        /* console.log('datos.code:', this.datos); */
        // this.datos.id = this.code.id;
        // console.log('data armada:', this.datos);
        this.usrSrv.recoveryLogin(this.datos).subscribe(data => {
            this.logeo = data;
            if (this.logeo.ok == false) {
                /* console.log('el logeo:', this.logeo); */
                /* const alert = this.alertCtrl.create({
                  header:`Error en la recuperación`,
                  message:`${this.logeo.error.message}`,
                  buttons: ['volver a intentar']
                });
                alert.present(); */
            }
            else {
                localStorage.setItem('usuario', this.logeo.userEmail);
                localStorage.setItem('email', this.logeo.userEmail);
                localStorage.setItem('authorization', this.logeo.authorization);
                localStorage.setItem('id', this.logeo.patientId);
                localStorage.setItem('role', this.logeo.role);
                localStorage.setItem('photoUrl', this.logeo.photoUrl);
                localStorage.setItem('patientName', this.logeo.patientName);
                this.events.publish('user:logged', 'logged');
                /* console.log('this.logeo:', this.logeo); */
                /* let alert = this.alertCtrl.create({
                  header:"Cuenta recuperada",
                  message:"su cuenta se ha recuperado exitosamente",
                  buttons: [
                    {
                      text:'ok'
                    }
                  ]
                })
                alert.present(); */
                /* this.navCtrl.setRoot(LoginPage); */
                this.routes.navigate(['login']);
            }
        });
    }
    goToLogin() {
        /* this.navCtrl.setRoot(LoginPage); */
        this.routes.navigate(['login']);
    }
    sendCode() {
        console.log('enviar codigo');
    }
};
RecoverycodePage.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
RecoverycodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recoverycode',
        template: __webpack_require__(/*! raw-loader!./recoverycode.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/recoverycode/recoverycode.page.html"),
        styles: [__webpack_require__(/*! ./recoverycode.page.scss */ "./src/app/pages/recoverycode/recoverycode.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], RecoverycodePage);



/***/ })

}]);
//# sourceMappingURL=pages-recoverycode-recoverycode-module-es2015.js.map