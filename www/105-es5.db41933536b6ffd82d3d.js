(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{ZyW4:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_tab",function(){return s}),i.d(e,"ion_tabs",function(){return a});var n=i("mrSG"),o=i("24pd"),r=(i("lSdy"),i("6WfQ")),s=function(){function t(t){Object(o.m)(this,t),this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){},t.prototype.setActive=function(){return n.__awaiter(this,void 0,void 0,function(){return n.__generator(this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return n.__awaiter(this,void 0,void 0,function(){return n.__generator(this,function(t){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return[2,Object(r.a)(this.delegate,this.el,this.component,["ion-page"])]}catch(e){console.error(e)}}return[2,void 0]})})},t.prototype.hostData=function(){var t=this.active;return{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-"+this.tab,class:{"ion-page":void 0===this.component,"tab-hidden":!t}}},t.prototype.__stencil_render=function(){return Object(o.i)("slot",null)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o.i)(o.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host(.tab-hidden){display:none!important}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t){var e=this;Object(o.m)(this,t),this.transitioning=!1,this.tabs=[],this.useRouter=!1,this.onTabClicked=function(t){var i=t.detail,n=i.href,o=i.tab,r=e.tabs.find(function(t){return t.tab===o});if(e.useRouter&&void 0!==n){var s=document.querySelector("ion-router");s&&s.push(n)}else r&&e.select(r)},this.ionNavWillLoad=Object(o.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(o.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(o.d)(this,"ionTabsDidChange",3)}return t.prototype.componentWillLoad=function(){var t=this;this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.initSelect().then(function(){t.ionNavWillLoad.emit(),t.componentWillUpdate()})},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.componentWillUpdate=function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.select=function(t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(i){switch(i.label){case 0:return[4,this.getTab(t)];case 1:return e=i.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 2:return i.sent(),[4,this.notifyRouter()];case 3:return i.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.getTab=function(t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(i){return(e="string"==typeof t?this.tabs.find(function(e){return e.tab===t}):t)||console.error('tab with id: "'+e+'" does not exist'),[2,e]})})},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.setRouteId=function(t){return n.__awaiter(this,void 0,void 0,function(){var e,i=this;return n.__generator(this,function(n){switch(n.label){case 0:return[4,this.getTab(t)];case 1:return e=n.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 2:return n.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){return n.__awaiter(this,void 0,void 0,function(){var t;return n.__generator(this,function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]})})},t.prototype.initSelect=function(){return n.__awaiter(this,void 0,void 0,function(){return n.__generator(this,function(t){switch(t.label){case 0:return this.useRouter?[2]:[4,Promise.all(this.tabs.map(function(t){return t.componentOnReady()}))];case 1:return t.sent(),[4,this.select(this.tabs[0])];case 2:return t.sent(),[2]}})})},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.setActive())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},t.prototype.render=function(){return Object(o.i)(o.a,{onIonTabButtonClick:this.onTabClicked},Object(o.i)("slot",{name:"top"}),Object(o.i)("div",{class:"tabs-inner"},Object(o.i)("slot",null)),Object(o.i)("slot",{name:"bottom"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"},enumerable:!0,configurable:!0}),t}()}}]);