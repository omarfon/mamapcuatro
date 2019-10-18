(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		"./src/app/pages/chat/chat.module.ts",
		"default~pages-chat-chat-module~pages-home-home-module",
		"pages-chat-chat-module"
	],
	"../pages/controles/controles.module": [
		"./src/app/pages/controles/controles.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"common",
		"pages-controles-controles-module"
	],
	"../pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"default~pages-chat-chat-module~pages-home-home-module",
		"common",
		"pages-home-home-module"
	],
	"./pages/chat/chat.module": [
		"./src/app/pages/chat/chat.module.ts",
		"default~pages-chat-chat-module~pages-home-home-module",
		"pages-chat-chat-module"
	],
	"./pages/citas-pendientes/citas-pendientes.module": [
		"./src/app/pages/citas-pendientes/citas-pendientes.module.ts",
		"common",
		"pages-citas-pendientes-citas-pendientes-module"
	],
	"./pages/citas/citas.module": [
		"./src/app/pages/citas/citas.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"common",
		"pages-citas-citas-module"
	],
	"./pages/code/code.module": [
		"./src/app/pages/code/code.module.ts",
		"pages-code-code-module"
	],
	"./pages/controles/controles.module": [
		"./src/app/pages/controles/controles.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"common",
		"pages-controles-controles-module"
	],
	"./pages/detail-week/detail-week.module": [
		"./src/app/pages/detail-week/detail-week.module.ts",
		"common",
		"pages-detail-week-detail-week-module"
	],
	"./pages/detailcontrol/detailcontrol.module": [
		"./src/app/pages/detailcontrol/detailcontrol.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"common",
		"pages-detailcontrol-detailcontrol-module"
	],
	"./pages/detailpage/detailpage.module": [
		"./src/app/pages/detailpage/detailpage.module.ts",
		"common",
		"pages-detailpage-detailpage-module"
	],
	"./pages/detailrecipe/detailrecipe.module": [
		"./src/app/pages/detailrecipe/detailrecipe.module.ts",
		"pages-detailrecipe-detailrecipe-module"
	],
	"./pages/evolucion/evolucion.module": [
		"./src/app/pages/evolucion/evolucion.module.ts",
		"pages-evolucion-evolucion-module"
	],
	"./pages/financer/financer.module": [
		"./src/app/pages/financer/financer.module.ts",
		"common",
		"pages-financer-financer-module"
	],
	"./pages/graficas/graficas.module": [
		"./src/app/pages/graficas/graficas.module.ts",
		"pages-graficas-graficas-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"default~pages-chat-chat-module~pages-home-home-module",
		"common",
		"pages-home-home-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"common",
		"pages-login-login-module"
	],
	"./pages/modal-no-service/modal-no-service.module": [
		"./src/app/pages/modal-no-service/modal-no-service.module.ts",
		"pages-modal-no-service-modal-no-service-module"
	],
	"./pages/recetas/recetas.module": [
		"./src/app/pages/recetas/recetas.module.ts",
		"common",
		"pages-recetas-recetas-module"
	],
	"./pages/recoverycode/recoverycode.module": [
		"./src/app/pages/recoverycode/recoverycode.module.ts",
		"common",
		"pages-recoverycode-recoverycode-module"
	],
	"./pages/register/register.module": [
		"./src/app/pages/register/register.module.ts",
		"default~pages-citas-citas-module~pages-controles-controles-module~pages-detailcontrol-detailcontrol-~99f98cdc",
		"pages-register-register-module"
	],
	"./pages/resumen/resumen.module": [
		"./src/app/pages/resumen/resumen.module.ts",
		"common",
		"pages-resumen-resumen-module"
	],
	"./pages/start/start.module": [
		"./src/app/pages/start/start.module.ts",
		"pages-start-start-module"
	],
	"./tab1/tab1.module": [
		"./src/app/tab1/tab1.module.ts",
		"tab1-tab1-module"
	],
	"./tabs/tabs.module": [
		"./src/app/tabs/tabs.module.ts",
		"tabs-tabs-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		3
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		4
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		5
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		6
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		8
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		9
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		10
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		11
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		0,
		"common",
		12
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		0,
		"common",
		13
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		14
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		15
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		16
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		17
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		18
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		19
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		20
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		21
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		22
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		23
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		24
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		25
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		26
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		27
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		28
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		29
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		30
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		33
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		34
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		35
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		36
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		37
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		0,
		"common",
		38
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		0,
		"common",
		39
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		40
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		41
	],
	"./ion-nav_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_4.entry.js",
		"common",
		42
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		43
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		45
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		46
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		47
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		48
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		49
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		54
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		55
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		56
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		57
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		58
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		59
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		60
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		61
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		62
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		"common",
		63
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		"common",
		64
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		65
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		66
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		67
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		68
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		69
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		70
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <!-- <ion-router-outlet></ion-router-outlet> -->\n  \n      <ion-menu toggle=\"true\" side=\"start\" menuId=\"first\" contentId=\"content1\" >\n        <!--   <ion-header>\n            <ion-toolbar>\n              <ion-title>Menu</ion-title>\n            </ion-toolbar>\n          </ion-header> -->\n          <ion-content>\n            <div class=\"cabecera\" >\n              <div class=\"circulo\"></div>\n              <h3 class=\"nombre\">{{nombre}}</h3>\n              <!-- <p class=\"correo\">juana.perez@aviva.pe</p>  -->\n            </div>\n            <ion-list >\n              <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let pages of navigate\">\n                <ion-item [routerLink]=\"pages.url\" [routerDirection]=\"'root'\">\n                  <ion-icon menu-close [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n                  {{pages.title}}\n                </ion-item>\n              </ion-menu-toggle>\n                  <ion-item (click)=\"closeSession()\" routerDirection=\"forward\">\n                    <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n                    Cerrar Sesión\n                </ion-item>\n            </ion-list>\n          </ion-content>\n        </ion-menu>\n    <ion-router-outlet id=\"content1\"></ion-router-outlet>\n  \n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/calc/calc.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/calc/calc.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n    <h3>Cálculo de semanas de embarazo</h3>\n    <p>En este momento no tienes en tu historia clínica una fecha de concepción, ingresa una manualmente, por favor...</p>\n  \n    <ion-list lines=\"none\" padding>\n        <ion-item>\n          <ion-label position=\"floating\">Ingresa un nombre</ion-label>\n          <ion-input type=\"text\" #nombre></ion-input>\n        </ion-item>\n      \n      <ion-item >\n        <ion-label position=\"floating\">Fecha de concepción</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2019-01-01\" pickerFormat=\"DD MM YYYY\"  #fechaManual></ion-datetime>\n      </ion-item>\n    </ion-list>\n  \n    <ion-button  size=\"block\" color=\"rosado\" (click)=\"saveDate(nombre , fechaManual)\">\n      ingresa los datos\n    </ion-button>\n  \n  \n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/fecha-pregnancy/fecha-pregnancy.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/fecha-pregnancy/fecha-pregnancy.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content >\n  <h2>Entrar como Invitado</h2>\n  <p> Para continuar como invitado debes ingresar tu nombre y una fecha probable de concepción</p>\n\n  <ion-list lines=\"none\" padding>\n      <ion-item>\n        <ion-label position=\"floating\">Ingresa un nombre</ion-label>\n        <ion-input type=\"text\" #nombre></ion-input>\n      </ion-item>\n    \n    <ion-item >\n      <ion-label position=\"floating\">Fecha de concepción</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2019-01-01\" pickerFormat=\"DD MM YYYY\"  #fechaManual></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-button  size=\"block\" color=\"rosado\" (click)=\"saveDate(nombre , fechaManual)\">\n    ingresa la fecha\n  </ion-button>\n\n\n</ion-content>\n  \n\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/fiter/fiter.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/fiter/fiter.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list >\n      <ion-item   \n      outline  \n      (click)=\"goToHomePastilla()\">\n      pastillas\n        <ion-button slot=\"end\" fill=\"clear\">\n         <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n    </ion-item>\n    \n    <ion-item\n      (click)=\"goToHomeComparativa()\">\n        Comparativas\n        <ion-button slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"arrow-dropright\"></ion-icon>\n           </ion-button>\n</ion-item>\n\n<ion-item\n  outline\n  (click)=\"goToHomeDesarrollo()\">\nDesarrollo Bebe\n<ion-button slot=\"end\" fill=\"clear\">\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n   </ion-button>\n</ion-item>\n\n<ion-item\n  outline\n  (click)=\"goToHomeCambios()\">\nCambios en mi cuerpo\n<ion-button slot=\"end\" fill=\"clear\">\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n   </ion-button>\n</ion-item>\n\n<ion-item\n  outline\n  (click)=\"goToHomeNutricion()\">\n  Tips nutricion\n  <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon name=\"arrow-dropright\"></ion-icon>\n     </ion-button>\n</ion-item>\n\n\n<ion-item\n  outline\n  (click)=\"getAll()\">\n  Todas las notas\n  <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon name=\"arrow-dropright\"></ion-icon>\n     </ion-button>\n</ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/infonopago/infonopago.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/infonopago/infonopago.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p class=\"textoNoPago\">Posiblemente haya un problema con las cuotas pendientes, reserva tu cita con pago en el local o comunicate con la central de pagos...</p> \n  <ion-button (click)=\"back()\"\n              size=\"block\"\n              color=\"rosado\">\n    entiendo\n  </ion-button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-code/modal-code.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-code/modal-code.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <p class=\"codigoValida\">hemos enviado al correo el código de validación , ingresalo y listo....</p>\n  <p *ngIf=\"message\" class=\"errorMessage\">{{message}}</p>\n    <ion-row>\n      <div col-2></div>\n      <div col-8>\n         <form  novalidate>\n        <ion-row class=\"contenedorInputs\">\n            <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                           minlength=\"1\"\n                           maxlength=\"1\"\n                          #primero\n                           ></ion-input>\n             </ion-col>\n            <ion-col class=\"rectanguloInput\">\n               <ion-input  type=\"tel\"\n                           minlength=\"1\"\n                           maxlength=\"1\"\n                           #segundo\n                           ></ion-input>\n             </ion-col>\n            <ion-col class=\"rectanguloInput\">\n              <ion-input type=\"tel\"\n                         minlength=\"1\"\n                         maxlength=\"1\"\n                         #tercero\n                         ></ion-input>\n             </ion-col>\n             <ion-col class=\"rectanguloInput\">\n                 <ion-input type=\"tel\"\n                         minlength=\"1\"\n                         maxlength=\"1\"\n                            #cuarto\n                            ></ion-input>\n                </ion-col> \n                </ion-row>\n               <div class=\"center\">\n                 <ion-button\n                          (click)=\"saveData(primero.value, segundo.value, tercero.value, cuarto.value)\"\n                          size=\"block\"\n                          color=\"rosado\">\n                    Completar Registro\n                 </ion-button>\n               </div>\n       </form>\n      </div>\n      <div col-2></div>\n    </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    /* { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)}, */
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
    { path: 'evolucion', loadChildren: './pages/evolucion/evolucion.module#EvolucionPageModule' },
    { path: 'controles/:c', loadChildren: './pages/controles/controles.module#ControlesPageModule' },
    { path: 'citas-pendientes', loadChildren: './pages/citas-pendientes/citas-pendientes.module#CitasPendientesPageModule' },
    { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
    { path: 'detail-week', loadChildren: './pages/detail-week/detail-week.module#DetailWeekPageModule' },
    { path: 'citas', loadChildren: './pages/citas/citas.module#CitasPageModule' },
    { path: 'financer', loadChildren: './pages/financer/financer.module#FinancerPageModule' },
    { path: 'financer/:datosObj', loadChildren: './pages/financer/financer.module#FinancerPageModule' },
    { path: 'detailcontrol/:encuentroObj', loadChildren: './pages/detailcontrol/detailcontrol.module#DetailcontrolPageModule' },
    { path: 'recoverycode/:dataObj', loadChildren: './pages/recoverycode/recoverycode.module#RecoverycodePageModule' },
    { path: 'recetas', loadChildren: './pages/recetas/recetas.module#RecetasPageModule' },
    { path: 'detailpage/:datosObj', loadChildren: './pages/detailpage/detailpage.module#DetailpagePageModule' },
    { path: 'graficas', loadChildren: './pages/graficas/graficas.module#GraficasPageModule' },
    { path: 'resumen', loadChildren: './pages/resumen/resumen.module#ResumenPageModule' },
    { path: 'resumen/:datosObj', loadChildren: './pages/resumen/resumen.module#ResumenPageModule' },
    { path: 'detailrecipe/:datosObj', loadChildren: './pages/detailrecipe/detailrecipe.module#DetailrecipePageModule' },
    { path: 'start', loadChildren: './pages/start/start.module#StartPageModule' },
    { path: 'code', loadChildren: './pages/code/code.module#CodePageModule' },
    { path: 'modal-no-service', loadChildren: './pages/modal-no-service/modal-no-service.module#ModalNoServicePageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#FFA28C!important;\n  --color:#fff;\n}\n\n.cabecera {\n  height: 200px;\n  text-align: center;\n}\n\n.circulo {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  background: #fff;\n  margin-top: 20px;\n  margin-left: calc( 50% - 50px);\n}\n\n.nombre {\n  color: #000;\n}\n\n.correo {\n  color: #000;\n  margin-top: -10px;\n}\n\n.list-md, .item {\n  background: transparent !important;\n}\n\nion-item {\n  --background: transparent!important;\n  color: #fff;\n}\n\nion-item ion-icon {\n  color: #fff !important;\n  margin-left: 20px;\n  font-size: 1.6em;\n}\n\n.nombre {\n  color: #fff;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0FDTEo7O0FET0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNISjs7QURLQTtFQUNBLFdBQUE7QUNGQTs7QURJQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURFQTtFQUNJLG1DQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREFJO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2UgXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIFxuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZCBcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiNGRkEyOEMhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6I2ZmZjtcbn1cbi5jYWJlY2VyYXtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaXJjdWxve1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyggNTAlIC0gNTBweCk7XG59XG4ubm9tYnJle1xuY29sb3I6IzAwMDtcbn1cbi5jb3JyZW97XG4gICAgY29sb3I6IzAwMDtcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xufVxuLmxpc3QtbWQsIC5pdGVte1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6I2ZmZiFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxLjZlbTtcbiAgICB9XG59XG4gICAgICAgIC5ub21icmV7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOjEuMmVtO1xuICAgICAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I0ZGQTI4QyFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6I2ZmZjtcbn1cblxuLmNhYmVjZXJhIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2lyY3VsbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyggNTAlIC0gNTBweCk7XG59XG5cbi5ub21icmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmNvcnJlbyB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmxpc3QtbWQsIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4ubm9tYnJlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, routes, menu) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.routes = routes;
        this.menu = menu;
        this.sideMenu();
        this.initializeApp();
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.nombre = localStorage.getItem('patientName');
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Home",
                    url: "/tabs",
                    icon: "home"
                },
                {
                    title: "Mis Citas",
                    url: "/citas-pendientes",
                    icon: "alarm"
                },
                /*  {
                   title : "Graficas",
                   url   : "/graficas",
                   icon  : "analytics"
                 }, */
                {
                    title: "Recetas",
                    url: "/recetas",
                    icon: "clipboard"
                } /* ,
                {
                  title : "Cerrar sesión",
                  url   : "/recetas",
                  icon  : "recipes"
                }, */
            ];
    }
    closeSession() {
        /* localStorage.clear(); */
        localStorage.removeItem('role');
        localStorage.removeItem('authorization');
        localStorage.removeItem('id');
        localStorage.removeItem('photoUrl');
        localStorage.removeItem('name');
        localStorage.removeItem('startPregnancy');
        localStorage.removeItem('email');
        localStorage.removeItem('usuario');
        localStorage.removeItem('patientName');
        localStorage.removeItem('token');
        this.routes.navigate(['/login']);
        this.menu.close('start');
        console.log('cerrar sesión');
    }
    goToDetailDatos() {
        this.routes.navigate(['datos-personales']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");























Object(_angular_common__WEBPACK_IMPORTED_MODULE_19__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_18___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["firebaseConfig"]),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_21__["FCM"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "es" },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/calc/calc.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/calc/calc.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  font-size: 0.9em;\n  color: grey;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 40px;\n}\n\nion-content {\n  height: 58vh;\n  padding-bottom: 10px;\n}\n\nh3 {\n  width: 90%;\n  margin-left: 5%;\n  text-align: center;\n  color: #FFA28C;\n}\n\nion-label {\n  color: grey !important;\n}\n\nion-button {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL2NvbXBvbmVudHMvY2FsYy9jYWxjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhbGMvY2FsYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWxjL2NhbGMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTouOWVtO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6NDBweDtcbiAgICB9XG5pb24tY29udGVudHtcbiAgICBoZWlnaHQ6IDU4dmg7XG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcbn1cbmgze1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDo1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6I0ZGQTI4Qztcbn1cbmlvbi1sYWJlbHtcbiAgICBjb2xvcjpncmV5IWltcG9ydGFudDtcbn1cbmlvbi1idXR0b257XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufSIsInAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiA1OHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaDMge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkEyOEM7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/calc/calc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/calc/calc.component.ts ***!
  \***************************************************/
/*! exports provided: CalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcComponent", function() { return CalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let CalcComponent = class CalcComponent {
    constructor(router, popoverCtrl) {
        this.router = router;
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
    saveDate(nombre, fechaManual) {
        localStorage.setItem('patientName', nombre.value);
        localStorage.setItem('startPregnancy', fechaManual.value);
        this.popoverCtrl.dismiss();
        this.router.navigate(['tabs']);
        console.log(fechaManual, fechaManual.value);
    }
};
CalcComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
CalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc',
        template: __webpack_require__(/*! raw-loader!./calc.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/calc/calc.component.html"),
        styles: [__webpack_require__(/*! ./calc.component.scss */ "./src/app/components/calc/calc.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], CalcComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fecha-pregnancy/fecha-pregnancy.component */ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts");
/* harmony import */ var _modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-code/modal-code.component */ "./src/app/components/modal-code/modal-code.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fiter_fiter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fiter/fiter.component */ "./src/app/components/fiter/fiter.component.ts");
/* harmony import */ var _infonopago_infonopago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infonopago/infonopago.component */ "./src/app/components/infonopago/infonopago.component.ts");
/* harmony import */ var _calc_calc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calc/calc.component */ "./src/app/components/calc/calc.component.ts");









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_3__["FechaPregnancyComponent"],
            _modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_4__["ModalCodeComponent"],
            _fiter_fiter_component__WEBPACK_IMPORTED_MODULE_6__["FiterComponent"],
            _infonopago_infonopago_component__WEBPACK_IMPORTED_MODULE_7__["InfonopagoComponent"],
            _calc_calc_component__WEBPACK_IMPORTED_MODULE_8__["CalcComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _fecha_pregnancy_fecha_pregnancy_component__WEBPACK_IMPORTED_MODULE_3__["FechaPregnancyComponent"],
            _modal_code_modal_code_component__WEBPACK_IMPORTED_MODULE_4__["ModalCodeComponent"],
            _fiter_fiter_component__WEBPACK_IMPORTED_MODULE_6__["FiterComponent"],
            _infonopago_infonopago_component__WEBPACK_IMPORTED_MODULE_7__["InfonopagoComponent"],
            _calc_calc_component__WEBPACK_IMPORTED_MODULE_8__["CalcComponent"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/fecha-pregnancy/fecha-pregnancy.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  font-size: 0.9em;\n  color: grey;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 40px;\n}\n\nion-content {\n  height: 58vh;\n  padding-bottom: 10px;\n}\n\nh2 {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  color: #FFA28C;\n}\n\nion-label {\n  color: grey !important;\n}\n\nion-button {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL2NvbXBvbmVudHMvZmVjaGEtcHJlZ25hbmN5L2ZlY2hhLXByZWduYW5jeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWNoYS1wcmVnbmFuY3kvZmVjaGEtcHJlZ25hbmN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWNoYS1wcmVnbmFuY3kvZmVjaGEtcHJlZ25hbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6LjllbTtcbiAgICBjb2xvcjpncmV5O1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XG4gICAgfVxuaW9uLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiA1OHZoO1xuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XG59XG5oMntcbiAgICB3aWR0aDo4MCU7XG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjojRkZBMjhDO1xufVxuaW9uLWxhYmVse1xuICAgIGNvbG9yOmdyZXkhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59IiwicCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDU4dmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5oMiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkEyOEM7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/fecha-pregnancy/fecha-pregnancy.component.ts ***!
  \*************************************************************************/
/*! exports provided: FechaPregnancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FechaPregnancyComponent", function() { return FechaPregnancyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let FechaPregnancyComponent = class FechaPregnancyComponent {
    constructor(router, popoverCtrl) {
        this.router = router;
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
    saveDate(nombre, fechaManual) {
        localStorage.setItem('patientName', nombre.value);
        localStorage.setItem('startPregnancy', fechaManual.value);
        this.popoverCtrl.dismiss();
        this.router.navigate(['tabs']);
        console.log(fechaManual, fechaManual.value);
    }
};
FechaPregnancyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
FechaPregnancyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fecha-pregnancy',
        template: __webpack_require__(/*! raw-loader!./fecha-pregnancy.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/fecha-pregnancy/fecha-pregnancy.component.html"),
        styles: [__webpack_require__(/*! ./fecha-pregnancy.component.scss */ "./src/app/components/fecha-pregnancy/fecha-pregnancy.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], FechaPregnancyComponent);



/***/ }),

/***/ "./src/app/components/fiter/fiter.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/fiter/fiter.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZml0ZXIvZml0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/fiter/fiter.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/fiter/fiter.component.ts ***!
  \*****************************************************/
/*! exports provided: FiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiterComponent", function() { return FiterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FiterComponent = class FiterComponent {
    constructor(routes, popover) {
        this.routes = routes;
        this.popover = popover;
    }
    ngOnInit() { }
    goToHomePastilla() {
        console.log('pastilla');
        this.popover.dismiss();
    }
    goToHomeComparativa() {
        console.log('comparativa');
        this.popover.dismiss();
    }
    goToHomeDesarrollo() {
        console.log('evobebe');
        this.popover.dismiss();
    }
    goToHomeCambios() {
        console.log('cambio');
        this.popover.dismiss();
    }
    goToHomeNutricion() {
        console.log('nutricion');
        this.popover.dismiss();
    }
    goToHomeSemana() {
        console.log('nota 3');
        this.popover.dismiss();
    }
    selectedDay(dia) {
        console.log('selectedDay');
        this.popover.dismiss();
    }
    getAll() {
        console.log('todo');
        this.popover.dismiss();
    }
};
FiterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"] }
];
FiterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-fiter',
        template: __webpack_require__(/*! raw-loader!./fiter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/fiter/fiter.component.html"),
        styles: [__webpack_require__(/*! ./fiter.component.scss */ "./src/app/components/fiter/fiter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
], FiterComponent);



/***/ }),

/***/ "./src/app/components/infonopago/infonopago.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/infonopago/infonopago.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textoNoPago {\n  text-align: center;\n  color: grey;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL2NvbXBvbmVudHMvaW5mb25vcGFnby9pbmZvbm9wYWdvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZm9ub3BhZ28vaW5mb25vcGFnby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb25vcGFnby9pbmZvbm9wYWdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvTm9QYWdve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjpncmV5O1xuICAgIHBhZGRpbmc6MjBweDtcbn0iLCIudGV4dG9Ob1BhZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBncmV5O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/infonopago/infonopago.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/infonopago/infonopago.component.ts ***!
  \***************************************************************/
/*! exports provided: InfonopagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfonopagoComponent", function() { return InfonopagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let InfonopagoComponent = class InfonopagoComponent {
    constructor(popover) {
        this.popover = popover;
    }
    ngOnInit() { }
    back() {
        this.popover.dismiss();
    }
};
InfonopagoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
InfonopagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-infonopago',
        template: __webpack_require__(/*! raw-loader!./infonopago.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/infonopago/infonopago.component.html"),
        styles: [__webpack_require__(/*! ./infonopago.component.scss */ "./src/app/components/infonopago/infonopago.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], InfonopagoComponent);



/***/ }),

/***/ "./src/app/components/modal-code/modal-code.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-code/modal-code.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  border-radius: 20px;\n  height: auto;\n  text-align: center;\n  padding: 10px;\n}\n\n.codigoValida {\n  color: #062F51;\n  text-align: center;\n  margin-bottom: 2em;\n  font-size: 1em;\n  font-weight: 300;\n  padding-top: 1em;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.rectanguloInput {\n  border: 2px solid #90A8BE;\n  height: 60px;\n  margin: 2px;\n  border-radius: 5px;\n}\n\n.center {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 0 !important;\n}\n\n.codigoreen {\n  color: #062F51;\n  font-size: 1em;\n  text-transform: lowercase;\n  font-size: 1.2em;\n  font-weight: lighter;\n  border: 1px solid #062F51;\n  border-radius: 10px;\n}\n\n.newCode {\n  color: #062F51;\n  font-size: 1.1em;\n  width: 90%;\n  margin-left: 5%;\n  margin-top: 80px;\n}\n\n.contenedorInputs {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.errorMessage {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWMvRG9jdW1lbnRzL2Rldi9nZXN0YW50ZU5ldy9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY29kZS9tb2RhbC1jb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWNvZGUvbW9kYWwtY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkU7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDT047O0FETEU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtY29kZS9tb2RhbC1jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuLmNvZGlnb1ZhbGlkYXtcbiAgICBjb2xvcjogIzA2MkY1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAucmVjdGFuZ3Vsb0lucHV0e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5MEE4QkU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjoycHg7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTowIWltcG9ydGFudDtcbiAgfVxuICAuY29kaWdvcmVlbntcbiAgICBjb2xvcjojMDYyRjUxO1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBmb250LXNpemU6MS4yZW07XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwNjJGNTE7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICB9XG4gIC5uZXdDb2Rle1xuICAgIGNvbG9yOiMwNjJGNTE7XG4gICAgZm9udC1zaXplOjEuMWVtO1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDo4MHB4O1xuICB9XG4gIC5jb250ZW5lZG9ySW5wdXRze1xuICAgICAgbWFyZ2luLWxlZnQ6MjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDoyNXB4O1xuICB9XG4gIC5lcnJvck1lc3NhZ2V7XG4gICAgY29sb3I6cmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb2RpZ29WYWxpZGEge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5yZWN0YW5ndWxvSW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTBBOEJFO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmNvZGlnb3JlZW4ge1xuICBjb2xvcjogIzA2MkY1MTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDYyRjUxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubmV3Q29kZSB7XG4gIGNvbG9yOiAjMDYyRjUxO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5jb250ZW5lZG9ySW5wdXRzIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmVycm9yTWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/modal-code/modal-code.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/modal-code/modal-code.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCodeComponent", function() { return ModalCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/crud.service */ "./src/app/service/crud.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ModalCodeComponent = class ModalCodeComponent {
    constructor(crudSrv, alertCtrl, form, loadingCtrl, events, routes) {
        this.crudSrv = crudSrv;
        this.alertCtrl = alertCtrl;
        this.form = form;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.routes = routes;
    }
    ngOnInit() {
        const email = this.data.email;
        this.crudSrv.validateEmail(email).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.result = data;
            console.log('this.data', this.data);
            this.datos = this.data;
        }));
    }
    saveData(primero, segundo, tercero, cuarto) {
        console.log(primero);
        let uno = primero;
        let dos = segundo;
        let tres = tercero;
        let cuatro = cuarto;
        let code = uno + dos + tres + cuatro;
        console.log(code);
        this.datos.code = code;
        this.datos.gender = "MUJER";
        console.log('this.datos: ', this.datos);
        this.datos.id = this.result.id;
        console.log('data armada:', this.datos);
        this.crudSrv.createNewUser(this.datos).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.createOk = data;
            console.log('la vuelta de this.createOK:', this.createOk);
            if (this.createOk.ok == false) {
                const alert = yield this.alertCtrl.create({
                    header: 'Error en el envio del código',
                    message: `${this.createOk.error.message}`,
                    buttons: [{
                            text: 'Intentar de nuevo',
                            role: 'cancel'
                        }]
                });
                yield alert.present();
            }
            else {
                const loading = yield this.loadingCtrl.create({
                    message: "eniando código..."
                });
                yield loading.present();
                this.createOk = data;
                console.log('datos que vienen del logueo: por registro:', this.createOk);
                localStorage.setItem('idTokenUser', this.createOk.patientId);
                localStorage.setItem('emailUser', this.createOk.userEmail);
                localStorage.setItem('authorization', this.createOk.authorization);
                localStorage.setItem('role', this.createOk.role);
                localStorage.setItem('patientName', this.createOk.patientName);
                this.events.publish('user:logged', 'logged');
                this.routes.navigate(['/login']);
                console.log("pasó!!!");
                // console.log('pasó logeado', this.createOk);
                loading.dismiss();
            }
        }), err => {
            this.message = "El código no es valido";
        });
    }
    sendCode() {
        let email = { email: this.datos.email };
        this.crudSrv.validateEmail(email).subscribe(data => {
            this.code = data;
            console.log('lo que me llega del vaildate:', this.code);
        });
    }
};
ModalCodeComponent.ctorParameters = () => [
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalCodeComponent.prototype, "data", void 0);
ModalCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-code',
        template: __webpack_require__(/*! raw-loader!./modal-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-code/modal-code.component.html"),
        styles: [__webpack_require__(/*! ./modal-code.component.scss */ "./src/app/components/modal-code/modal-code.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ModalCodeComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");


/* import { MatMomentDateModule } from '@angular/material-moment-adapter'; */
/* import {MatExpansionModule} from '@angular/material/expansion'; */

let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
        ],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/service/crud.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/crud.service.ts ***!
  \*****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let CrudService = class CrudService {
    constructor(http) {
        this.http = http;
        this.SERVER = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        this.apiValidate = `${this.SERVER}users/validate-email/register`;
        this.apiCreate = `${this.SERVER}users/register/`;
    }
    createNewUser(datos) {
        // console.log('los datos de register:', datos)
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = datos;
        // console.log('los datos de register:', datos)
        // params.provisions = [{"tipoPrestacion":"CONSULTA", "instructions":"", "name":"CONSULTA AMBULATORIA POR MEDICO ESPECIALISTA", "default":false, "id":44}]
        return this.http.post(this.apiCreate, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
    validateEmail(email) {
        const authorization = localStorage.getItem('authorization');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": authorization });
        let params = { email };
        return this.http.post(this.apiValidate, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            return resp;
        }));
    }
};
CrudService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CrudService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, API_ENDPOINT, API_NOTAS, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NOTAS", function() { return API_NOTAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Mac/Documents/dev/gestanteNew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map