(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailpage-detailpage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detailpage/detailpage.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detailpage/detailpage.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Detalle Cita</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n        <img id=\"profile-image\" src=\"http://dappapache02.eastus.cloudapp.azure.com:4200/img/professionals/{{dataArmada.professional.id}}.png\">\n        <h3 class=\"nombreDoctor\" text-center>{{ dataArmada.professional.fullName }} </h3>\n\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Sede:</ion-label>\n            <ion-label class=\"blue\"> {{ dataArmada.service.center.name | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Especialidad:</ion-label>\n            <ion-label class=\"blue\"> {{ dataArmada.service.basicService.description | lowercase }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Fecha:</ion-label>\n            <ion-label class=\"blue\"> {{ dataArmada.appointmentDateTime | date:'EEEE d , MMMM ' : 'es' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Hora:</ion-label>\n            <ion-label class=\"blue\"> {{ dataArmada.appointmentDateTime | date: 'HH:mm' }}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-start><i class=\"fa fa-universal-access\" aria-hidden=\"true\"></i></ion-icon>\n            <ion-label class=\"heightNoventa\">Seguro:</ion-label>\n            <ion-label class=\"blue\"> {{ dataArmada.plan.description | lowercase }}</ion-label>\n        </ion-item>\n    </ion-list>\n        \n            <ion-row>\n                <ion-col >\n                    <ion-button color=\"primary\" \n                                (click)='desactivateTask(date)'\n                                expand=\"full\">ELIMINAR</ion-button>\n                </ion-col>\n                <ion-col >\n                    <ion-button  \n                                (click)=\"dismiss()\" \n                                color=\"rosado\"\n                                expand=\"full\">VOLVER</ion-button>\n                </ion-col>\n            </ion-row>\n        \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detailpage/detailpage.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailpage/detailpage.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpagePageModule", function() { return DetailpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detailpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailpage.page */ "./src/app/pages/detailpage/detailpage.page.ts");







const routes = [
    {
        path: '',
        component: _detailpage_page__WEBPACK_IMPORTED_MODULE_6__["DetailpagePage"]
    }
];
let DetailpagePageModule = class DetailpagePageModule {
};
DetailpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detailpage_page__WEBPACK_IMPORTED_MODULE_6__["DetailpagePage"]]
    })
], DetailpagePageModule);



/***/ }),

/***/ "./src/app/pages/detailpage/detailpage.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailpage/detailpage.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  position: relative;\n  margin-top: 15%;\n  background-color: white;\n  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.4);\n  padding-top: 2%;\n}\n\n#profile-info {\n  position: absolute;\n  top: -85px;\n  width: 100%;\n  z-index: 2;\n  height: auto;\n  text-align: center;\n}\n\n#profile-description {\n  font-size: 15px;\n  color: #888;\n}\n\n#profile-image {\n  display: block;\n  border-radius: 20px;\n  width: 128px;\n  height: 128px;\n  margin: 30px auto 0;\n  text-align: center;\n}\n\n.nombreDoctor {\n  color: #FFA28C;\n  font-weight: 400;\n  width: 90%;\n  margin-left: 5%;\n  font-size: 1.5em;\n  text-transform: capitalize;\n}\n\nion-label {\n  color: #4A4A4A;\n  font-size: 0.9em;\n  font-weight: 300;\n}\n\n.blue {\n  color: #062F51;\n  text-align: left;\n  font-size: 0.9em;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.fa {\n  color: #062F51;\n}\n\nion-navbar ion-icon {\n  color: #fff;\n}\n\nion-icon {\n  color: #A7A9AB;\n  font-size: 0.7em;\n}\n\n.toolbar-md-primary .bar-button-default-md {\n  color: #fff !important;\n}\n\n.toolbar-title,\n.toolbar-title-md {\n  font-size: 1.3em !important;\n  font-weight: 400;\n}\n\n.item-inner {\n  margin-left: 5px !important;\n}\n\n.heightNoventa {\n  margin-right: 0 !important;\n}\n\n.segment-md-secondary {\n  color: #fff !important;\n}\n\nion-segment-button .segment-activated {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2RldGFpbHBhZ2UvZGV0YWlscGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbHBhZ2UvZGV0YWlscGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ09KOztBRExBO0VBQ0UsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtBQ1NGOztBRFBBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxzQkFBQTtBQ1dKOztBRFRBOztFQUVJLDJCQUFBO0VBRUEsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLDJCQUFBO0FDWUo7O0FEVkE7RUFDSSwwQkFBQTtBQ2FKOztBRFhBO0VBQ0Msc0JBQUE7QUNjRDs7QURaQTtFQUNDLHNCQUFBO0FDZUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxwYWdlL2RldGFpbHBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuI3Byb2ZpbGUtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTg1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Byb2ZpbGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzg4ODtcbn1cbiNwcm9maWxlLWltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vbWJyZURvY3RvciB7XG4gICAgY29sb3I6ICNGRkEyOEM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ibHVlIHtcbiAgICBjb2xvcjogIzA2MkY1MTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmZhe1xuICBjb2xvcjojMDYyRjUxO1xufVxuaW9uLW5hdmJhciBpb24taWNvbntcbiAgY29sb3I6I2ZmZjtcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI0E3QTlBQjtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG4udG9vbGJhci1tZC1wcmltYXJ5IC5iYXItYnV0dG9uLWRlZmF1bHQtbWQge1xuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cbi50b29sYmFyLXRpdGxlLFxuLnRvb2xiYXItdGl0bGUtbWQge1xuICAgIGZvbnQtc2l6ZTogMS4zZW0haW1wb3J0YW50O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLml0ZW0taW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHghaW1wb3J0YW50O1xufVxuLmhlaWdodE5vdmVudGEge1xuICAgIG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7XG59XG4uc2VnbWVudC1tZC1zZWNvbmRhcnl7XG4gY29sb3I6I2ZmZiFpbXBvcnRhbnQ7XG59XG5pb24tc2VnbWVudC1idXR0b24gLnNlZ21lbnQtYWN0aXZhdGVke1xuIGNvbG9yOiNmZmYhaW1wb3J0YW50O1xufSIsIiNjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggLTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4jcHJvZmlsZS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwcm9maWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuI3Byb2ZpbGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub21icmVEb2N0b3Ige1xuICBjb2xvcjogI0ZGQTI4QztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMwNjJGNTE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZmEge1xuICBjb2xvcjogIzA2MkY1MTtcbn1cblxuaW9uLW5hdmJhciBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjQTdBOUFCO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4udG9vbGJhci1tZC1wcmltYXJ5IC5iYXItYnV0dG9uLWRlZmF1bHQtbWQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci10aXRsZSxcbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmhlaWdodE5vdmVudGEge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQtbWQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIC5zZWdtZW50LWFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/detailpage/detailpage.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/detailpage/detailpage.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpagePage", function() { return DetailpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/appointment.service */ "./src/app/service/appointment.service.ts");





let DetailpagePage = class DetailpagePage {
    constructor(alertCtrl, router, appointmentProvider, routes, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.appointmentProvider = appointmentProvider;
        this.routes = routes;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.data = this.routes.snapshot.paramMap.get('datosObj');
        this.dataArmada = JSON.parse(this.data);
        /* console.log(this.dataArmada); */
        this.date = this.dataArmada.appointmentId;
    }
    desactivateTask(date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*  console.log('el id a eliminar:',this.date); */
            const confirm = yield this.alertCtrl.create({
                header: 'ELMINAR',
                message: '¿Estas seguro de eliminar esta cita?',
                buttons: [
                    {
                        text: 'SI',
                        handler: data => {
                            this.appointmentProvider.destroyAppointment(this.date).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                this.router.navigate(['citas-pendientes']);
                                const alert = yield this.alertCtrl.create({
                                    header: 'cita eliminada',
                                    message: "se ha eliminado satisfactoriamente la cita",
                                    buttons: [
                                        {
                                            text: "ok",
                                            handler: () => {
                                                return true;
                                            }
                                        }
                                    ]
                                });
                                yield alert.present();
                            }));
                        }
                    },
                    {
                        text: 'NO',
                        handler: () => {
                            return true;
                        }
                    }
                ],
            });
            confirm.present();
        });
    }
    dismiss() {
        this.navCtrl.back();
    }
};
DetailpagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
DetailpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailpage',
        template: __webpack_require__(/*! raw-loader!./detailpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detailpage/detailpage.page.html"),
        styles: [__webpack_require__(/*! ./detailpage.page.scss */ "./src/app/pages/detailpage/detailpage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _service_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], DetailpagePage);



/***/ })

}]);
//# sourceMappingURL=pages-detailpage-detailpage-module-es2015.js.map