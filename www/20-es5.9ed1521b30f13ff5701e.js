(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{O685:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),o=e("+JMX"),r=e("ZZ/e"),i=function(){function l(l,n,e,t,u,o){this.form=l,this.routes=n,this.crudSrv=e,this.alertCtrl=t,this.loadingCtrl=u,this.events=o}return l.prototype.ngOnInit=function(){this.formCode=this.form.group({primero:[],segundo:[],tercero:[],cuarto:[]})},l.prototype.saveData=function(){var l=this,n=this.formCode.value,e=n.primero+n.segundo+n.tercero+n.cuarto;console.log(e),this.datos.code=e,this.datos.id=this.result.id,console.log("data armada:",this.datos),this.crudSrv.createNewUser(this.datos).subscribe((function(n){return u.__awaiter(l,void 0,void 0,(function(){var l;return u.__generator(this,(function(e){switch(e.label){case 0:return this.createOk=n,0!=this.createOk.ok?[3,3]:[4,this.alertCtrl.create({header:"Error en el envio del c\xf3digo",message:""+this.createOk.error.message,buttons:[{text:"Intentar de nuevo",role:"cancel"}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[3,6];case 3:return[4,this.loadingCtrl.create({message:"eniando c\xf3digo..."})];case 4:return[4,(l=e.sent()).present()];case 5:e.sent(),this.createOk=n,localStorage.setItem("idTokenUser",this.createOk.patientId),localStorage.setItem("emailUser",this.createOk.userEmail),localStorage.setItem("authorization",this.createOk.authorization),localStorage.setItem("role",this.createOk.role),localStorage.setItem("patientName",this.createOk.patientName),this.events.publish("user:logged","logged"),this.routes.navigate(["tabs"]),console.log("pas\xf3!!!"),l.dismiss(),e.label=6;case 6:return[2]}}))}))}))},l.prototype.sendCode=function(){var l=this;this.crudSrv.validateEmail({email:this.datos.email}).subscribe((function(n){l.code=n}))},l}(),a=function(){return function(){}}(),s=e("pMnS"),c=e("oBZk"),b=e("gIcY"),d=e("ZYCi"),g=t.sb({encapsulation:0,styles:[[".codigoValida[_ngcontent-%COMP%]{color:#062f51;text-align:center;margin-bottom:2em;font-size:1.1em;font-weight:300;padding-top:1em;width:90%;margin-left:5%}.rectanguloInput[_ngcontent-%COMP%]{border:2px solid #96999c;height:60px;margin:2px;border-radius:5px}.center[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.codigoreen[_ngcontent-%COMP%]{color:#062f51;text-transform:lowercase;font-size:1.2em;font-weight:lighter;border:1px solid #062f51;border-radius:10px}.newCode[_ngcontent-%COMP%]{color:#062f51;font-size:1.1em;width:90%;margin-left:5%;margin-top:80px}"]],data:{}});function h(l){return t.Pb(0,[(l()(),t.ub(0,0,null,null,6,"ion-header",[],null,null,null,c.fb,c.q)),t.tb(1,49152,null,0,r.D,[t.h,t.k,t.A],null,null),(l()(),t.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.Db,c.O)),t.tb(3,49152,null,0,r.Eb,[t.h,t.k,t.A],null,null),(l()(),t.ub(4,0,null,0,2,"ion-title",[],null,null,null,c.Cb,c.N)),t.tb(5,49152,null,0,r.Cb,[t.h,t.k,t.A],null,null),(l()(),t.Nb(-1,0,["code"])),(l()(),t.ub(7,0,null,null,16,"ion-content",[],null,null,null,c.Z,c.k)),t.tb(8,49152,null,0,r.w,[t.h,t.k,t.A],null,null),(l()(),t.ub(9,0,null,0,1,"p",[["class","codigoValida"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["hemos enviado al correo el c\xf3digo de validaci\xf3n , ingresalo y listo...."])),(l()(),t.ub(11,0,null,0,7,"ion-row",[],null,null,null,c.qb,c.B)),t.tb(12,49152,null,0,r.lb,[t.h,t.k,t.A],null,null),(l()(),t.ub(13,0,null,0,0,"div",[["col-2",""]],null,null,null,null,null)),(l()(),t.ub(14,0,null,0,3,"div",[["col-8",""]],null,null,null,null,null)),(l()(),t.ub(15,0,null,null,2,"div",[["class","center"]],null,null,null,null,null)),(l()(),t.ub(16,0,null,null,1,"button",[["ion-button",""],["type","submit"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" registrarme "])),(l()(),t.ub(18,0,null,0,0,"div",[["col-2",""]],null,null,null,null,null)),(l()(),t.ub(19,0,null,0,4,"div",[["class","center"]],null,null,null,null,null)),(l()(),t.ub(20,0,null,null,1,"p",[["class","newCode"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Si no recibiste o caduco tu codigo puedes solicitar uno nuevo."])),(l()(),t.ub(22,0,null,null,1,"button",[["class","codigoreen"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.sendCode()&&t),t}),null,null)),(l()(),t.Nb(-1,null,["reenviar c\xf3dido "]))],null,null)}function p(l){return t.Pb(0,[(l()(),t.ub(0,0,null,null,1,"app-code",[],null,null,null,h,g)),t.tb(1,114688,null,0,i,[b.b,d.m,o.a,r.a,r.Ib,r.f],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.qb("app-code",i,p,{},{},[]),f=e("Ip0R");e.d(n,"CodePageModuleNgFactory",(function(){return v}));var v=t.rb(a,[],(function(l){return t.Db([t.Eb(512,t.j,t.db,[[8,[s.a,m]],[3,t.j],t.y]),t.Eb(4608,f.o,f.n,[t.v,[2,f.E]]),t.Eb(4608,b.s,b.s,[]),t.Eb(4608,r.b,r.b,[t.A,t.g]),t.Eb(4608,r.Kb,r.Kb,[r.b,t.j,t.r]),t.Eb(4608,r.Ob,r.Ob,[r.b,t.j,t.r]),t.Eb(4608,b.b,b.b,[]),t.Eb(1073742336,f.b,f.b,[]),t.Eb(1073742336,b.r,b.r,[]),t.Eb(1073742336,b.e,b.e,[]),t.Eb(1073742336,r.Gb,r.Gb,[]),t.Eb(1073742336,b.o,b.o,[]),t.Eb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Eb(1073742336,a,a,[]),t.Eb(1024,d.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);