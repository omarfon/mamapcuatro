(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-code-code-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/code/code.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/code/code.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <p class=\"codigoValida\">hemos enviado al correo el código de validación , ingresalo y listo....</p>\n    <ion-row>\n      <div col-2></div>\n      <div col-8>\n       <!--   <form [formGroup]=\"formCode\" (ngSubmit)=\"saveData(formCode.value)\" novalidate>\n        <ion-row>\n            <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                           minlength=\"1\"\n                           maxlength=\"1\"\n                          [(ngModel)]=\"primero\"\n                          formControlName=\"primero\"\n                           ></ion-input>\n             </ion-col>\n            <ion-col class=\"rectanguloInput\">\n               <ion-input type=\"tel\"\n                         minlength=\"1\"\n                         maxlength=\"1\"\n                           [(ngModel)]=\"segundo\"\n                           formControlName=\"segundo\"\n                           ></ion-input>\n             </ion-col>\n            <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                         minlength=\"1\"\n                         maxlength=\"1\"\n                         tercero=\"tercero\"\n                         formControlName=\"tercero\"\n                         ngModel></ion-input>\n             </ion-col>\n             <ion-col class=\"rectanguloInput\">\n                 <ion-input type=\"tel\"\n                         minlength=\"1\"\n                         maxlength=\"1\"\n                            tercero=\"cuarto\"\n                            formControlName=\"cuarto\"\n                            ngModel></ion-input>\n                </ion-col> -->\n               <!-- </ion-row> -->\n               <div class=\"center\">\n                 <button ion-button\n                          type=\"submit\">\n                    registrarme\n                 </button>\n               </div>\n      \n      </div>\n      <div col-2></div>\n    </ion-row>\n   \n   \n    <div class=\"center\">\n      <p class=\"newCode\">Si no recibiste o caduco tu codigo puedes solicitar uno nuevo.</p>\n      <button ion-button\n             class=\"codigoreen\"\n             clear\n             (click)=\"sendCode()\">reenviar códido\n    </button>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/code/code.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.module.ts ***!
  \*******************************************/
/*! exports provided: CodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageModule", function() { return CodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.page */ "./src/app/pages/code/code.page.ts");







var routes = [
    {
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]
    }
];
var CodePageModule = /** @class */ (function () {
    function CodePageModule() {
    }
    CodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]]
        })
    ], CodePageModule);
    return CodePageModule;
}());



/***/ }),

/***/ "./src/app/pages/code/code.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".codigoValida {\n  color: #062F51;\n  text-align: center;\n  margin-bottom: 2em;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding-top: 1em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.rectanguloInput {\n  border: 2px solid #96999C;\n  height: 60px;\n  margin: 2px;\n  border-radius: 5px;\n}\n\n.center {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.codigoreen {\n  color: #062F51;\n  font-size: 1em;\n  text-transform: lowercase;\n  font-size: 1.2em;\n  font-weight: lighter;\n  border: 1px solid #062F51;\n  border-radius: 10px;\n}\n\n.newCode {\n  color: #062F51;\n  font-size: 1.1em;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29kZS9jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RpZ29WYWxpZGF7XG4gICAgY29sb3I6ICMwNjJGNTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAucmVjdGFuZ3Vsb0lucHV0e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5Njk5OUM7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjoycHg7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjMwcHg7XG4gIH1cbiAgLmNvZGlnb3JlZW57XG4gICAgY29sb3I6IzA2MkY1MTtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDYyRjUxO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgfVxuICAubmV3Q29kZXtcbiAgICBjb2xvcjojMDYyRjUxO1xuICAgIGZvbnQtc2l6ZToxLjFlbTtcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6ODBweDtcblxuICB9IiwiLmNvZGlnb1ZhbGlkYSB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucmVjdGFuZ3Vsb0lucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzk2OTk5QztcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29kaWdvcmVlbiB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNjJGNTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uZXdDb2RlIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/code/code.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/code/code.page.ts ***!
  \*****************************************/
/*! exports provided: CodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePage", function() { return CodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/crud.service */ "./src/app/service/crud.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var CodePage = /** @class */ (function () {
    function CodePage(form, routes, crudSrv, alertCtrl, loadingCtrl, events) {
        this.form = form;
        this.routes = routes;
        this.crudSrv = crudSrv;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
    }
    CodePage.prototype.ngOnInit = function () {
        this.formCode = this.form.group({
            primero: [],
            segundo: [],
            tercero: [],
            cuarto: []
        });
        /* console.log(this.formCode.value);
        console.log(this.formCode.value.primero); */
    };
    CodePage.prototype.saveData = function () {
        var _this = this;
        var codigo = this.formCode.value;
        var uno = codigo.primero;
        var dos = codigo.segundo;
        var tres = codigo.tercero;
        var cuatro = codigo.cuarto;
        var code = uno + dos + tres + cuatro;
        console.log(code);
        this.datos.code = code;
        this.datos.id = this.result.id;
        console.log('data armada:', this.datos);
        this.crudSrv.createNewUser(this.datos).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert_1, loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.createOk = data;
                        if (!(this.createOk.ok == false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Error en el envio del código',
                                message: "" + this.createOk.error.message,
                                buttons: [{
                                        text: 'Intentar de nuevo',
                                        role: 'cancel'
                                    }]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "eniando código..."
                        })];
                    case 4:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 5:
                        _a.sent();
                        this.createOk = data;
                        /* console.log('datos que vienen del logueo: por registro:', this.createOk); */
                        localStorage.setItem('idTokenUser', this.createOk.patientId);
                        localStorage.setItem('emailUser', this.createOk.userEmail);
                        localStorage.setItem('authorization', this.createOk.authorization);
                        localStorage.setItem('role', this.createOk.role);
                        localStorage.setItem('patientName', this.createOk.patientName);
                        this.events.publish('user:logged', 'logged');
                        /*  if(this.hora){
                           // console.log(this.hora, this.doctor, this.available);
                           this.routes.navigate(['financer'])
                           this.navCtrl.setRoot(FinancerPage, {
                             doctor: this.doctor,
                             available: this.available,
                             hora: this.hora
                           });
                         }else{
                             this.navCtrl.setRoot(HomePage)
                         } */
                        this.routes.navigate(['tabs']);
                        console.log("pasó!!!");
                        // console.log('pasó logeado', this.createOk);
                        loading.dismiss();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    CodePage.prototype.sendCode = function () {
        var _this = this;
        var email = { email: this.datos.email };
        this.crudSrv.validateEmail(email).subscribe(function (data) {
            _this.code = data;
            /* console.log('lo que me llega del vaildate:', this.code) */
        });
    };
    CodePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] }
    ]; };
    CodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! raw-loader!./code.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/code/code.page.html"),
            styles: [__webpack_require__(/*! ./code.page.scss */ "./src/app/pages/code/code.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]])
    ], CodePage);
    return CodePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-code-code-module-es5.js.map