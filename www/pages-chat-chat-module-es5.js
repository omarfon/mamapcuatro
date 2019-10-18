(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"rosado\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n    <ion-title>chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngIf=\"conversacion\">\n        <ion-row *ngFor=\"let mensaje of conversacion.messages\">\n          <ion-col size=\"8\"  *ngIf=\"currentUser === mensaje.user\" class=\"message other-message\">\n            <b>{{mensaje.user}}</b> <br>\n            <span>{{mensaje.content}}</span>\n            <div class=\"time\" text-right>\n              {{mensaje.date.toDate() | date:'short'}}\n            </div> \n          </ion-col>  \n\n          <ion-col offset=\"4\" size=\"8\"   *ngIf=\"mensaje.user !== currentUser \" class=\"message my-message\">\n            <b>{{mensaje.user}}</b> <br>\n            <span>{{mensaje.content}}</span>\n            <div class=\"time\" text-right>\n              {{mensaje.date.toDate() | date:'short'}}\n            </div> \n          </ion-col>  \n        </ion-row >\n        \n        <!-- <ion-row *ngFor=\"let mensaje of conversacion.messages\" >\n          </ion-row >  -->\n\n      </div>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"msg\" autosize class=\"message-input\" value=\"ingresa tu mensaje\">\n    </ion-textarea>\n    <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" class=\"msg-btn\" (click)=\"sendMessage()\">\n      <ion-icon name=\"send\" ></ion-icon>\n    </ion-button>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content #areaMensajes {\n  background: #f3f3f3 !important;\n  min-height: 85vh;\n  height: auto;\n}\nion-content ion-card {\n  background: #fff !important;\n}\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n.other-message {\n  background: #FFC839;\n  color: #fff;\n}\n.my-message {\n  background: #26baf5;\n  color: #fff;\n}\n.time {\n  color: #ebe9e9;\n  float: right;\n  font-size: small;\n}\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n  font-size: 1em;\n}\n.message-input {\n  height: 40px;\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n#positionFixed {\n  position: fixed !important;\n  left: 67%;\n}\n.mamas {\n  color: var(--ion-color-primary);\n  text-align: center;\n}\nion-footer {\n  margin: 0;\n  padding: 0;\n  padding-bottom: 5px;\n}\nion-footer ion-item {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSwyQkFBQTtBQ0FSO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBQTtFQUNJLDBCQUFBO0VBQ0EsU0FBQTtBQ0dKO0FEREE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURGQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREpJO0VBQ0ksbUJBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAjYXJlYU1lbnNhamVze1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNDMsIDI0MywgMjQzKSFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6ODV2aDtcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcbiAgICB9XG59XG4ubWVzc2FnZXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm90aGVyLW1lc3NhZ2V7XG4gICAgYmFja2dyb3VuZDogI0ZGQzgzOTtcbiAgICBjb2xvcjojZmZmO1xufVxuXG4ubXktbWVzc2FnZXtcbiAgICBiYWNrZ3JvdW5kOiAjMjZiYWY1O1xuICAgIGNvbG9yOiNmZmY7XG59XG5cbi50aW1le1xuICAgIGNvbG9yOiNlYmU5ZTk7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgZm9udC1zaXplOnNtYWxsO1xufVxuLm1zZy1idG57XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbiAgICBmb250LXNpemU6MWVtO1xufVxuLm1lc3NhZ2UtaW5wdXR7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuI3Bvc2l0aW9uRml4ZWR7XG4gICAgcG9zaXRpb246IGZpeGVkIWltcG9ydGFudDtcbiAgICBsZWZ0OiA2NyU7XG59XG4ubWFtYXN7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1mb290ZXJ7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHBhZGRpbmctYm90dG9tOjVweDtcbiAgICBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIH1cbn1cblxuIiwiaW9uLWNvbnRlbnQgI2FyZWFNZW5zYWplcyB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjMgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogODV2aDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0ZGQzgzOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5teS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzI2YmFmNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICNlYmU5ZTk7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4jcG9zaXRpb25GaXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiA2NyU7XG59XG5cbi5tYW1hcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1mb290ZXIgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/chat.service */ "./src/app/service/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ChatPage = /** @class */ (function () {
    function ChatPage(chatSrv) {
        this.chatSrv = chatSrv;
        this.currentUser = 'Claudia';
    }
    ChatPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') && !localStorage.getItem('uid')) {
            this.chatSrv.registerForCustom();
        }
        else {
            this.obtenerConversacion();
        }
    };
    ChatPage.prototype.obtenerConversacion = function () {
        var _this = this;
        console.log(this.conversacion);
        var uid = localStorage.getItem('uid');
        this.chatSrv.getChatRoom(uid).subscribe(function (room) {
            _this.conversacion = room;
            console.log('this.conversacion:', _this.conversacion);
        });
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 300);
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        var mensaje = {
            content: this.msg,
            type: 'text',
            date: new Date(),
            user: localStorage.getItem('name'),
        };
        var id = localStorage.getItem('uid');
        this.chatSrv.sendMessageToFirebase(mensaje, id);
        this.msg = "";
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 500);
    };
    ChatPage.ctorParameters = function () { return [
        { type: _service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module-es5.js.map