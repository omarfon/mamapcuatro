(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{ydiJ:function(t,e,s){"use strict";s.r(e),s.d(e,"ShadowCss",function(){return o}),s.d(e,"scopeCss",function(){return k});class o{constructor(){this.strictStyling=!0}shimCssText(t,e,s="",o="",r=!1){const n=R(t);t=y(t);const c=[];if(r){const e=t=>{const e=`/*!@___${c.length}___*/`;return c.push({placeholder:e,comment:`/*!@${t.selector}*/`}),t.selector=e+t.selector,t};t=b(t,t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=b(t.content,e),t):t)}const l=this._scopeCssText(t,e,s,o,r);return t=[l,...n].join("\n"),r&&c.forEach(({placeholder:e,comment:s})=>{t=t.replace(e,s)}),t}_scopeCssText(t,e,s,o,r){return t=this._insertPolyfillHostInCssText(t),t=this._convertColonHost(t),t=this._convertColonHostContext(t),t=this._convertColonSlotted(t,o),t=this._convertShadowDOMSelectors(t),e&&(t=this._scopeSelectors(t,e,s,o,r)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()}_convertColonHost(t){return this._convertColonRule(t,a,this._colonHostPartReplacer)}_convertColonSlotted(t,e){return t.replace(_,(...t)=>{if(t[2]){const s=t[2].trim();return"."+e+" > "+s+t[3]}return d+t[3]})}_convertColonHostContext(t){return this._convertColonRule(t,u,this._colonHostContextPartReplacer)}_convertColonRule(t,e,s){return t.replace(e,(...t)=>{if(t[2]){const e=t[2].split(","),o=[];for(let r=0;r<e.length;r++){const n=e[r].trim();if(!n)break;o.push(s(d,n,t[3]))}return o.join(",")}return d+t[3]})}_colonHostContextPartReplacer(t,e,s){return e.indexOf(l)>-1?this._colonHostPartReplacer(t,e,s):t+e+s+", "+e+" "+t+s}_colonHostPartReplacer(t,e,s){return t+e.replace(l,"")+s}_convertShadowDOMSelectors(t){return S.reduce((t,e)=>t.replace(e," "),t)}_scopeSelectors(t,e,s,o,r){return b(t,t=>{let c=t.selector,l=t.content;return"@"!==t.selector[0]?c=this._scopeSelector(t.selector,e,s,o,this.strictStyling):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(l=this._scopeSelectors(t.content,e,s,o,r)),c=c.replace(/\s{2,}/g," ").trim(),new n(c,l)})}_scopeSelector(t,e,s,o,r){return t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():this._selectorNeedsScoping(t,e)?r?this._applyStrictSelectorScope(t,e,s).trim():this._applySelectorScope(t,e,s).trim():t.trim()).join(", ")}_selectorNeedsScoping(t,e){return!this._makeScopeMatcher(e).test(t)}_makeScopeMatcher(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")"+m,"m")}_applySelectorScope(t,e,s){return this._applySimpleSelectorScope(t,e,s)}_applySimpleSelectorScope(t,e,s){if(x.lastIndex=0,x.test(t)){const o=this.strictStyling?`.${s}`:e;return t.replace(g,(t,e)=>e.replace(/([^:]*)(:*)(.*)/,(t,e,s,r)=>e+o+s+r)).replace(x,o+" ")}return e+" "+t}_applyStrictSelectorScope(t,e,s){const o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(t,...e)=>e[0])),n=t=>{let r=t.trim();if(!r)return"";if(t.indexOf(d)>-1)r=this._applySimpleSelectorScope(t,e,s);else{const e=t.replace(x,"");if(e.length>0){const t=e.match(/([^:]*)(:*)(.*)/);t&&(r=t[1]+o+t[2]+t[3])}}return r},c=new r(t);let l,i="",p=0;const h=/( |>|\+|~(?!=))\s*/g;let a=!((t=c.content()).indexOf(d)>-1);for(;null!==(l=h.exec(t));){const e=l[1],s=t.slice(p,l.index).trim();i+=`${(a=a||s.indexOf(d)>-1)?n(s):s} ${e} `,p=h.lastIndex}const u=t.substring(p);return i+=(a=a||u.indexOf(d)>-1)?n(u):u,c.restore(i)}_insertPolyfillHostInCssText(t){return t.replace(f,p).replace(w,l).replace(C,i)}}class r{constructor(t){this.placeholders=[],this.index=0,t=t.replace(/(\[[^\]]*\])/g,(t,e)=>{const s=`__ph-${this.index}__`;return this.placeholders.push(e),this.index++,s}),this._content=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,e,s)=>{const o=`__ph-${this.index}__`;return this.placeholders.push(s),this.index++,e+o})}restore(t){return t.replace(/__ph-(\d+)__/g,(t,e)=>this.placeholders[+e])}content(){return this._content}}class n{constructor(t,e){this.selector=t,this.content=e}}class c{constructor(t,e){this.escapedString=t,this.blocks=e}}const l="-shadowcsshost",i="-shadowcssslotted",p="-shadowcsscontext",h=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+l+h,"gim"),u=new RegExp("("+p+h,"gim"),_=new RegExp("("+i+h,"gim"),d=l+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,S=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",x=/-shadowcsshost/gim,w=/:host/gim,C=/::slotted/gim,f=/:host-context/gim,$=/\/\*\s*[\s\S]*?\*\//g,y=t=>t.replace($,""),O=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,R=t=>t.match(O)||[],v=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,H=/([{}])/g,b=(t,e)=>{const s=W(t);let o=0;return s.escapedString.replace(v,(...t)=>{const r=t[2];let c="",l=t[4],i="";l&&l.startsWith("{%BLOCK%")&&(c=s.blocks[o++],l=l.substring("%BLOCK%".length+1),i="{");const p=e(new n(r,c));return`${t[1]}${p.selector}${t[3]}${i}${p.content}${l}`})},W=t=>{const e=t.split(H),s=[],o=[];let r=0,n=[];for(let c=0;c<e.length;c++){const t=e[c];"}"===t&&r--,r>0?n.push(t):(n.length>0&&(o.push(n.join("")),s.push("%BLOCK%"),n=[]),s.push(t)),"{"===t&&r++}return n.length>0&&(o.push(n.join("")),s.push("%BLOCK%")),new c(s.join(""),o)},k=(t,e,s)=>(new o).shimCssText(t,e,e+"-h",e+"-s",s)}}]);