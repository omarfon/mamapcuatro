(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/start/start.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <div class=\"contenedorImagen\">\n        <img src=\"assets/imgs/logoCuida.png\" alt=\"\">\n      </div>\n        <p class=\"textofacil\">es muy fácil y rápido</p> \n        <ion-slides #slides [options]=\"slideOpts\">\n          <ion-slide>\n            <ion-row>\n              <ion-col size=\"12\">\n                  <img src=\"assets/imgs/slides/slideOne.png\" alt=\"\">\n                </ion-col>\n              <ion-col size=\"12\">\n                <p class=\"tituloSlide\">CONSEJOS UTILES</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                <p class=\"parrafoSlide\">consejos utiles semana a semana que te ayudarán en este dulce proceso</p>\n              </ion-col>\n            </ion-row>\n           \n          </ion-slide>\n          <ion-slide>\n                <ion-row>\n                  <ion-col size=\"12\">\n                      <img src=\"assets/imgs/slides/slideTwo.png\" alt=\"\">\n                  </ion-col>\n                  <ion-col size=\"12\">\n                      <p class=\"tituloSlide\">CONTROLES Y RESERVAS</p>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                      <p class=\"parrafoSlide\">Resultados de los controles en la palma de la mano, ademas puedes reservar tus citas en 3 simples pasos.</p>\n                  </ion-col>\n                </ion-row>\n             \n          </ion-slide>\n          <ion-slide>\n            <ion-row>\n              <ion-col size=\"12\">\n                  <img src=\"assets/imgs/slides/slideThree.png\" alt=\"\">\n              </ion-col>\n              <ion-col size=\"12\">\n                  <p class=\"tituloSlide\">COACH</p>\n              </ion-col>\n              <ion-col size=\"12\">\n                  <p class=\"parrafoSlide\">Te acompañamos en este dulce proceso de la mano de un coach que te guiará y brindará los tips necesarios.</p>\n              </ion-col>\n            </ion-row>\n          </ion-slide>\n        </ion-slides>\n        <div class=\"containerBotones\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-button outline small color=\"rosado\" (click)=\"goToLogin()\" class=\"botonLogin\"> login</ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n    \n            </ion-col>\n            <ion-col size=\"4\" class=\"containerButtonNext\">\n              <ion-button fill=\"clear\" small class=\"buttonNext\" (click)=\"nextSlide()\">Siguiente</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/start/start.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");







var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]
    }
];
var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedorImagen {\n  width: 50%;\n  margin-left: 20%;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.botonRegistro {\n  color: #fff;\n  font-size: 1em;\n  margin-top: 3vh;\n}\n\n.textofacil {\n  color: #fff;\n  font-size: 0.8em;\n  margin-top: -5px !important;\n}\n\nion-slides {\n  height: 70vh !important;\n}\n\nion-slides img {\n  width: 80%;\n  margin-left: 10%;\n}\n\n.tituloSlide {\n  color: #FFA18B;\n  font-size: 1em;\n}\n\n.parrafoSlide {\n  color: #A7A9AB;\n  font-size: 0.8em;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: -15px;\n  margin-bottom: -5px;\n  font-weight: 200;\n}\n\n.buttonNext {\n  float: right !important;\n  margin-right: 10px;\n  color: #FFA18B;\n  text-transform: capitalize;\n}\n\n.botonLogin {\n  border-radius: 20px;\n  font-size: 1em;\n}\n\n.containerBotones {\n  margin-top: 10px;\n}\n\n.containerBotones ion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0dKOztBRERFO0VBQ0UsdUJBQUE7QUNJSjs7QURITTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREZFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNLSjs7QURIRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDT0o7O0FETEU7RUFFRSxtQkFBQTtFQUVBLGNBQUE7QUNNSjs7QURKRTtFQUNFLGdCQUFBO0FDT0o7O0FETk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNRUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9ySW1hZ2Vue1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gIH1cbiAgLmJvdG9uUmVnaXN0cm97XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgfVxuICAudGV4dG9mYWNpbHtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgIG1hcmdpbi10b3A6LTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDcwdmghaW1wb3J0YW50O1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgIH1cbiAgfVxuICAudGl0dWxvU2xpZGV7XG4gICAgY29sb3I6I0ZGQTE4QjtcbiAgICBmb250LXNpemU6MWVtO1xuICB9XG4gIC5wYXJyYWZvU2xpZGV7XG4gICAgY29sb3I6I0E3QTlBQjtcbiAgICBmb250LXNpemU6LjhlbTtcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgbWFyZ2luLXRvcDotMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOi01cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICAuYnV0dG9uTmV4dCB7XG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6I0ZGQTE4QjtcbiAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xuICB9XG4gIC5ib3RvbkxvZ2lue1xuICAgIC8vIGNvbG9yOiNGRkEyOEM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvLyBtYXJnaW4tdG9wOi0xMHB4O1xuICAgIGZvbnQtc2l6ZToxZW07XG4gIH1cbiAgLmNvbnRhaW5lckJvdG9uZXN7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgaW9uLWNvbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgfSIsIi5jb250ZW5lZG9ySW1hZ2VuIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJvdG9uUmVnaXN0cm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuLnRleHRvZmFjaWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG59XG5pb24tc2xpZGVzIGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi50aXR1bG9TbGlkZSB7XG4gIGNvbG9yOiAjRkZBMThCO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnBhcnJhZm9TbGlkZSB7XG4gIGNvbG9yOiAjQTdBOUFCO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYnV0dG9uTmV4dCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZBMThCO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJvdG9uTG9naW4ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmNvbnRhaW5lckJvdG9uZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lckJvdG9uZXMgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/start/start.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var StartPage = /** @class */ (function () {
    function StartPage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slideShadows: true,
            startAutoplay: true
        };
    }
    StartPage.prototype.ngOnInit = function () {
    };
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.goToLogin = function () {
        /* this.navCtrl.push(LoginPage); */
        this.router.navigate(['login']);
    };
    StartPage.prototype.goToRegister = function () {
        /* this.navCtrl.push(RegisterPage); */
        this.router.navigate(['register']);
    };
    StartPage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    StartPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    StartPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], StartPage.prototype, "slides", void 0);
    StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/pages/start/start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es5.js.map