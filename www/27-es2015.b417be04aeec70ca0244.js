(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/yGZ":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=t("mrSG"),a=t("ZZ/e"),r=t("lJxs"),i=t("AytR"),u=t("IheW");let s=(()=>{class n{constructor(n){this.http=n,this.SERVER=i.a,this.apiUrl=`${this.SERVER}users/public-authorization`}getKey(){return this.http.get(this.apiUrl).pipe(Object(r.a)(n=>n))}}return n.ngInjectableDef=e.Pb({factory:function(){return new n(e.Qb(u.c))},token:n,providedIn:"root"}),n})();var c=t("Ouoq"),b=t("FkdA"),g=t("JQd6");class d{constructor(n,l,t,e,o,a,r){this.autho=n,this.userSrv=l,this.alertCtrl=t,this.router=e,this.events=o,this.datosSrv=a,this.popover=r,localStorage.getItem("authorization")||this.autho.getKey().subscribe(n=>{localStorage.setItem("authorization",n.authorization),localStorage.setItem("role",n.role)})}ngOnInit(){localStorage.getItem("authorization")||this.autho.getKey().subscribe(n=>{localStorage.setItem("authorization",n.authorization),localStorage.setItem("role",n.role)})}doSignIn(n,l){this.userSrv.doSignIn(n,l).subscribe(n=>o.__awaiter(this,void 0,void 0,function*(){if(this.data=n,console.log("lo que me trae el login:",this.data),"HOMBRE"==this.data.sex){const n=yield this.alertCtrl.create({header:"No puedes entrar",subHeader:"Solo pueden ingresar a la aplicaci\xf3n mujeres gestantes, intenta con una cuenta que si cumpla los requerimientos",buttons:[{text:"ok",role:"cancel"}]});yield n.present()}else localStorage.setItem("usuario",this.data.userEmail),localStorage.setItem("email",this.data.userEmail),localStorage.setItem("authorization",this.data.authorization),localStorage.setItem("id",this.data.patientId),localStorage.setItem("role",this.data.role),localStorage.setItem("photoUrl",this.data.photoUrl),localStorage.setItem("patientName",this.data.patientName),localStorage.setItem("token",this.data.firebaseToken),localStorage.setItem("name",this.data.name),this.datosSrv.getStartPregnacy().subscribe(n=>{this.startPregnancy=n.fecha_ultima_regla,this.startPregnancy?(localStorage.setItem("startPregnancy",this.startPregnancy),this.router.navigateByUrl("/tabs")):(console.log("no hay fecha de ultima regla"),this.router.navigateByUrl("/tabs")),this.events.publish("change:foto")})}),n=>o.__awaiter(this,void 0,void 0,function*(){const n=yield this.alertCtrl.create({header:"",message:"Email o Password incorrecto",buttons:[{text:"Volver a intentar",handler:n=>{}}]});yield n.present()}))}goToRecovery(){return o.__awaiter(this,void 0,void 0,function*(){const n=yield this.alertCtrl.create({header:"Olvidaste la Contrase\xf1a?",subHeader:"Ingresa tu email para recuperar la contrase\xf1a",inputs:[{name:"email",type:"text",placeholder:"Ingresa tu email"}],buttons:[{text:"enviar",cssClass:"primary",handler:n=>{this.userSrv.sendValidation(n.email).subscribe(n=>{if(this.datos=n,this.datos.result="ok"){let n=JSON.stringify(this.datos);this.router.navigate(["recoverycode",n])}else this.message=this.datos.error.message})}}]});yield n.present()})}goToRegister(){this.router.navigate(["register"])}goTohome(){return o.__awaiter(this,void 0,void 0,function*(){const n=yield this.popover.create({component:g.a,backdropDismiss:!0});yield n.present()})}recoveryCode(){this.router.navigate(["/code"])}}class h{}var p=t("pMnS"),m=t("oBZk"),f=t("SVse"),v=t("s7LF"),k=t("iInd"),y=e.pb({encapsulation:0,styles:[["@charset \"UTF-8\";ion-content[_ngcontent-%COMP%]{--background:url('fondoLogin.3a1b1bbdcb2d02fc1049.png') 0 0/100% 100% no-repeat;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;text-align:center;position:fixed!important}.tituloLogin[_ngcontent-%COMP%]{width:80%;margin-left:10%;text-align:center;padding-top:15px!important;color:#9f5ae5;font-size:1.2em}button[_ngcontent-%COMP%]{height:50px!important}.contenedorBotones[_ngcontent-%COMP%]{margin-top:22vh;padding-top:10px;text-align:center;width:90%;margin-left:5%}.contenedorBotones[_ngcontent-%COMP%]   .buttonIngresar[_ngcontent-%COMP%]{position:relative;background:#9f5ae5;font-size:1em;font-weight:400;color:#fff;margin-top:10px;height:50px}.contrase\xf1aolvidada[_ngcontent-%COMP%]{color:#7044ff;font-size:1em;margin-top:10px;font-weight:800}.contenedorImagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60%;margin-top:5vh}.item-md[_ngcontent-%COMP%]{background:rgba(255,255,255,.8)!important;color:#fff;margin-bottom:5px}.label-md[_ngcontent-%COMP%]{color:#ffa18b!important;font-size:.9em}.text-input-md[_ngcontent-%COMP%]{color:#ffa18b!important;font-size:1.1em}.botonRegister[_ngcontent-%COMP%]{--background:#FFA18B;color:#fff;margin-top:15px!important;border-radius:5px}.list-md[_ngcontent-%COMP%]{background:0 0!important}ion-item[_ngcontent-%COMP%]{--background:rgba(255, 255, 255, 0.5);margin-bottom:10px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#9f5ae5;font-size:1.2em}ion-item[_ngcontent-%COMP%]   .label-floating[_ngcontent-%COMP%]{color:#7044ff}"]],data:{}});function I(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,48,"ion-content",[["id","fondo"],["padding",""]],null,null,null,m.Z,m.k)),e.qb(1,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,1,"div",[["class","contenedorImagen"]],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,0,"img",[["alt",""],["src","assets/imgs/logoCuidaBlanco.png"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,0,27,"div",[["class","contenedorBotones"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Kb(6,null,["",""])),e.Eb(0,f.f,[]),(n()(),e.rb(8,0,null,null,23,"ion-list",[],null,null,null,m.kb,m.v)),e.qb(9,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(n()(),e.rb(10,0,null,0,8,"ion-item",[],null,null,null,m.ib,m.t)),e.qb(11,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.rb(12,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,m.jb,m.u)),e.qb(13,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Kb(-1,0,["Email"])),(n()(),e.rb(15,0,null,0,3,"ion-input",[["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0;return"ionBlur"===l&&(o=!1!==e.Db(n,18)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.Db(n,18)._handleInputEvent(t.target.value)&&o),o},m.hb,m.s)),e.Hb(5120,null,v.i,function(n){return[n]},[a.Qb]),e.qb(17,49152,[["email",4]],0,a.H,[e.h,e.k,e.x],{type:[0,"type"]},null),e.qb(18,16384,null,0,a.Qb,[e.k],null,null),(n()(),e.rb(19,0,null,0,8,"ion-item",[],null,null,null,m.ib,m.t)),e.qb(20,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.rb(21,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,m.jb,m.u)),e.qb(22,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Kb(-1,0,["Contrase\xf1a"])),(n()(),e.rb(24,0,null,0,3,"ion-input",[["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0;return"ionBlur"===l&&(o=!1!==e.Db(n,27)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.Db(n,27)._handleInputEvent(t.target.value)&&o),o},m.hb,m.s)),e.Hb(5120,null,v.i,function(n){return[n]},[a.Qb]),e.qb(26,49152,[["password",4]],0,a.H,[e.h,e.k,e.x],{type:[0,"type"]},null),e.qb(27,16384,null,0,a.Qb,[e.k],null,null),(n()(),e.rb(28,0,null,0,3,"div",[["class","contenedorBotonIngresar"]],null,null,null,null,null)),(n()(),e.rb(29,0,null,null,2,"ion-button",[["class","buttonIngresar"],["color","tertiary"],["size","full"],["submit",""]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.doSignIn(e.Db(n,17).value,e.Db(n,26).value)&&o),o},m.S,m.d)),e.qb(30,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"]},null),(n()(),e.Kb(-1,0,[" Ingresar "])),(n()(),e.rb(32,0,null,0,16,"ion-row",[],null,null,null,m.qb,m.B)),e.qb(33,49152,null,0,a.jb,[e.h,e.k,e.x],null,null),(n()(),e.rb(34,0,null,0,4,"ion-col",[["col-12",""]],null,null,null,m.Y,m.j)),e.qb(35,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.rb(36,0,null,0,2,"ion-button",[["class","contrase\xf1aolvidada"],["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToRecovery()&&e),e},m.S,m.d)),e.qb(37,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Kb(-1,0,[" Olvid\xe9 la contrase\xf1a "])),(n()(),e.rb(39,0,null,0,4,"ion-col",[["col-12",""]],null,null,null,m.Y,m.j)),e.qb(40,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.rb(41,0,null,0,2,"ion-button",[["block",""],["class","botonRegister"],["small",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToRegister()&&e),e},m.S,m.d)),e.qb(42,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,[" Registrarme "])),(n()(),e.rb(44,0,null,0,4,"ion-col",[["col-12",""]],null,null,null,m.Y,m.j)),e.qb(45,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(n()(),e.rb(46,0,null,0,2,"ion-button",[["block",""],["class","botonRegister"],["color","secondary"],["small",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goTohome()&&e),e},m.S,m.d)),e.qb(47,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Kb(-1,0,[" Ingresar como Invitado "]))],function(n,l){n(l,13,0,"floating"),n(l,17,0,"email"),n(l,22,0,"floating"),n(l,26,0,"password"),n(l,30,0,"tertiary","full"),n(l,37,0,"clear"),n(l,47,0,"secondary")},function(n,l){var t=l.component;n(l,6,0,e.Lb(l,6,0,e.Db(l,7).transform(t.msgError)))})}function x(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"app-login",[],null,null,null,I,y)),e.qb(1,114688,null,0,d,[s,c.a,a.a,k.m,a.e,b.a,a.Mb],null,null)],function(n,l){n(l,1,0)},null)}var S=e.nb("app-login",d,x,{},{},[]),B=t("qer4"),_=t("j1ZV");t.d(l,"LoginPageModuleNgFactory",function(){return C});var C=e.ob(h,[],function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[p.a,S,B.a]],[3,e.j],e.v]),e.Bb(4608,f.o,f.n,[e.s,[2,f.E]]),e.Bb(4608,v.s,v.s,[]),e.Bb(4608,a.b,a.b,[e.x,e.g]),e.Bb(4608,a.Ib,a.Ib,[a.b,e.j,e.p]),e.Bb(4608,a.Mb,a.Mb,[a.b,e.j,e.p]),e.Bb(4608,v.b,v.b,[]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,v.r,v.r,[]),e.Bb(1073742336,v.e,v.e,[]),e.Bb(1073742336,a.Eb,a.Eb,[]),e.Bb(1073742336,v.o,v.o,[]),e.Bb(1073742336,_.a,_.a,[]),e.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),e.Bb(1073742336,h,h,[]),e.Bb(1024,k.k,function(){return[[{path:"",component:d}]]},[])])})}}]);