(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Wrxl:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),u=t("mrSG"),o=t("jHPu"),i=t("ZZ/e"),r=t("YCZo"),s=t("5+tZ");class a{constructor(n,l,t,e,u,o){this.chatSrv=n,this.alert=l,this.router=t,this.toast=e,this.afm=u,this.fcm=o,this.currentUser="Claudia"}ngOnInit(){return u.__awaiter(this,void 0,void 0,(function*(){localStorage.getItem("token")?(this.chatSrv.registerDb(),this.obtenerConversacion()):this.obtenerConversacion(),this.fcm.onNotification().subscribe(n=>{console.log("data e onNotification:",n),n.wasTapped?console.log("tapped"):console.log("tap")})}))}makeToast(){return u.__awaiter(this,void 0,void 0,(function*(){(yield this.toast.create({message:"has habilitado las notificaciones de tu coach",duration:5e3,position:"top",showCloseButton:!0,closeButtonText:"Entiendo"})).present()}))}requestPushNotificationsPermission(){const n=localStorage.getItem("uid");this.afm.requestToken.subscribe(l=>{this.makeToast(),console.log("Permission granted! Save to the server!",l),this.chatSrv.registerToken(l,n)},n=>{console.error(n)})}deleteToken(){this.afm.getToken.pipe(Object(s.a)(n=>this.afm.deleteToken(n))).subscribe(n=>{console.log("Deleted!")})}listen(){console.log("escuchando"),this.afm.messages.subscribe(n=>{console.log("m",n)})}obtenerConversacion(){console.log(this.conversacion);const n=localStorage.getItem("uid");this.chatSrv.getChatRoom(n).subscribe(n=>{this.conversacion=n,console.log("this.conversacion:",this.conversacion)}),setTimeout(()=>{this.content.scrollToBottom(300)},300)}sendMessage(){const n={content:this.msg,type:"text",date:new Date,user:localStorage.getItem("name")},l=localStorage.getItem("uid");this.chatSrv.sendMessageToFirebase(n,l),this.msg="",setTimeout(()=>{this.content.scrollToBottom(300)},500)}}class c{}var b=t("pMnS"),g=t("oBZk"),m=t("SVse"),d=t("s7LF"),h=t("iInd"),p=t("XBYw"),f=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   #areaMensajes[_ngcontent-%COMP%]{background:#f3f3f3!important;min-height:85vh;height:auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{background:#fff!important}.message[_ngcontent-%COMP%]{padding:10px;border-radius:10px;margin-bottom:4px;white-space:pre-wrap}.other-message[_ngcontent-%COMP%]{background:#ffc839;color:#fff}.my-message[_ngcontent-%COMP%]{background:#26baf5;color:#fff}.time[_ngcontent-%COMP%]{color:#ebe9e9;float:right;font-size:small}.msg-btn[_ngcontent-%COMP%]{--padding-start:0.5em;--padding-end:0.5em;font-size:1em}.message-input[_ngcontent-%COMP%]{height:40px;width:100%;border:1px solid var(--ion-color-medium);border-radius:10px;background:#fff;resize:none;padding-left:10px;padding-right:10px}#positionFixed[_ngcontent-%COMP%]{position:fixed!important;left:67%}.mamas[_ngcontent-%COMP%]{color:var(--ion-color-primary);text-align:center}ion-footer[_ngcontent-%COMP%]{margin:0;padding:0 0 5px}ion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:none}.proximamente[_ngcontent-%COMP%]{text-align:center;font-size:1.4em}"]],data:{}});function k(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,10,"ion-col",[["class","message other-message"],["size","8"]],null,null,null,g.Y,g.j)),e.qb(1,49152,null,0,i.v,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.rb(2,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),e.Kb(3,null,["",""])),(n()(),e.rb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.rb(5,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),(n()(),e.rb(7,0,null,0,3,"div",[["class","time"],["text-right",""]],null,null,null,null,null)),e.qb(8,16384,null,0,i.e,[e.k],null,null),(n()(),e.Kb(9,null,[" "," "])),e.Gb(10,2)],(function(n,l){n(l,1,0,"8")}),(function(n,l){n(l,3,0,l.parent.context.$implicit.user),n(l,6,0,l.parent.context.$implicit.content);var t=e.Lb(l,9,0,n(l,10,0,e.Db(l.parent.parent.parent,0),l.parent.context.$implicit.date.toDate(),"short"));n(l,9,0,t)}))}function v(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,10,"ion-col",[["class","message my-message"],["offset","4"],["size","8"]],null,null,null,g.Y,g.j)),e.qb(1,49152,null,0,i.v,[e.h,e.k,e.x],{offset:[0,"offset"],size:[1,"size"]},null),(n()(),e.rb(2,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),e.Kb(3,null,["",""])),(n()(),e.rb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.rb(5,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),(n()(),e.rb(7,0,null,0,3,"div",[["class","time"],["text-right",""]],null,null,null,null,null)),e.qb(8,16384,null,0,i.e,[e.k],null,null),(n()(),e.Kb(9,null,[" "," "])),e.Gb(10,2)],(function(n,l){n(l,1,0,"4","8")}),(function(n,l){n(l,3,0,l.parent.context.$implicit.user),n(l,6,0,l.parent.context.$implicit.content);var t=e.Lb(l,9,0,n(l,10,0,e.Db(l.parent.parent.parent,0),l.parent.context.$implicit.date.toDate(),"short"));n(l,9,0,t)}))}function x(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,5,"ion-row",[],null,null,null,g.qb,g.B)),e.qb(1,49152,null,0,i.lb,[e.h,e.k,e.x],null,null),(n()(),e.hb(16777216,null,0,1,null,k)),e.qb(3,16384,null,0,m.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,0,1,null,v)),e.qb(5,16384,null,0,m.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,t.currentUser===l.context.$implicit.user),n(l,5,0,l.context.$implicit.user!==t.currentUser)}),null)}function C(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,x)),e.qb(2,278528,null,0,m.l,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.conversacion.messages)}),null)}function q(n){return e.Mb(0,[e.Eb(0,m.d,[e.s]),e.Ib(671088640,1,{content:0}),(n()(),e.rb(2,0,null,null,10,"ion-header",[],null,null,null,g.fb,g.q)),e.qb(3,49152,null,0,i.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(4,0,null,0,8,"ion-toolbar",[["color","rosado"]],null,null,null,g.Db,g.O)),e.qb(5,49152,null,0,i.Eb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.rb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.T,g.e)),e.qb(7,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(8,0,null,0,1,"ion-menu-button",[],null,null,null,g.lb,g.x)),e.qb(9,49152,null,0,i.T,[e.h,e.k,e.x],null,null),(n()(),e.rb(10,0,null,0,2,"ion-title",[],null,null,null,g.Cb,g.N)),e.qb(11,49152,null,0,i.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["chat"])),(n()(),e.rb(13,0,null,null,10,"ion-content",[["padding",""]],null,null,null,g.Z,g.k)),e.qb(14,49152,[[1,4]],0,i.w,[e.h,e.k,e.x],null,null),e.qb(15,16384,null,0,i.e,[e.k],null,null),(n()(),e.hb(16777216,null,0,1,null,C)),e.qb(17,16384,null,0,m.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(18,0,null,0,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.requestPushNotificationsPermission()&&e),e}),null,null)),(n()(),e.Kb(-1,null,[" Enable notifications! "])),(n()(),e.rb(20,0,null,0,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteToken()&&e),e}),null,null)),(n()(),e.Kb(-1,null,[" Delete my token plz "])),(n()(),e.rb(22,0,null,0,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.listen()&&e),e}),null,null)),(n()(),e.Kb(-1,null,[" Get notified! "])),(n()(),e.rb(24,0,null,null,15,"ion-footer",[["padding",""]],null,null,null,g.db,g.o)),e.qb(25,49152,null,0,i.B,[e.h,e.k,e.x],null,null),e.qb(26,16384,null,0,i.e,[e.k],null,null),(n()(),e.rb(27,0,null,0,12,"ion-item",[],null,null,null,g.ib,g.t)),e.qb(28,49152,null,0,i.J,[e.h,e.k,e.x],null,null),(n()(),e.rb(29,0,null,0,6,"ion-textarea",[["autosize",""],["class","message-input"],["value","ingresa tu mensaje"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Db(n,30)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Db(n,30)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.msg=t)&&u),u}),g.Bb,g.M)),e.qb(30,16384,null,0,i.Sb,[e.k],null,null),e.Hb(1024,null,d.i,(function(n){return[n]}),[i.Sb]),e.qb(32,671744,null,0,d.n,[[8,null],[8,null],[8,null],[6,d.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,d.j,null,[d.n]),e.qb(34,16384,null,0,d.k,[[4,d.j]],null,null),e.qb(35,49152,null,0,i.Ab,[e.h,e.k,e.x],{value:[0,"value"]},null),(n()(),e.rb(36,0,null,0,3,"ion-button",[["class","msg-btn"],["color","primary"],["expand","block"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sendMessage()&&e),e}),g.S,g.d)),e.qb(37,49152,null,0,i.m,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),e.rb(38,0,null,0,1,"ion-icon",[["name","send"]],null,null,null,g.gb,g.r)),e.qb(39,49152,null,0,i.E,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,5,0,"rosado"),n(l,17,0,t.conversacion),n(l,32,0,t.msg),n(l,35,0,"ingresa tu mensaje"),n(l,37,0,"primary","block","clear"),n(l,39,0,"send")}),(function(n,l){n(l,29,0,e.Db(l,34).ngClassUntouched,e.Db(l,34).ngClassTouched,e.Db(l,34).ngClassPristine,e.Db(l,34).ngClassDirty,e.Db(l,34).ngClassValid,e.Db(l,34).ngClassInvalid,e.Db(l,34).ngClassPending)}))}function M(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"app-chat",[],null,null,null,q,f)),e.qb(1,114688,null,0,a,[o.a,i.a,h.m,i.Tb,p.a,r.a],null,null)],(function(n,l){n(l,1,0)}),null)}var B=e.nb("app-chat",a,M,{},{},[]);t.d(l,"ChatPageModuleNgFactory",(function(){return P}));var P=e.ob(c,[],(function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[b.a,B]],[3,e.j],e.v]),e.Bb(4608,m.o,m.n,[e.s,[2,m.E]]),e.Bb(4608,d.s,d.s,[]),e.Bb(4608,i.b,i.b,[e.x,e.g]),e.Bb(4608,i.Kb,i.Kb,[i.b,e.j,e.p]),e.Bb(4608,i.Ob,i.Ob,[i.b,e.j,e.p]),e.Bb(1073742336,m.b,m.b,[]),e.Bb(1073742336,d.r,d.r,[]),e.Bb(1073742336,d.e,d.e,[]),e.Bb(1073742336,i.Gb,i.Gb,[]),e.Bb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.Bb(1073742336,c,c,[]),e.Bb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);