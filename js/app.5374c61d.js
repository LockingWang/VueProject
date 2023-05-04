(function(){"use strict";var e={828:function(e,n,t){var r=t(9242),o=t(4161),i=t(6423),a=t(6216),c=t(5708),u=t(3990),d=t(579),f=t(2389),l=t(3396);function s(e,n){const t=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(t)}var p=t(89);const h={},m=(0,p.Z)(h,[["render",s]]);var b=m,v=t(2483);const g=[{path:"",component:()=>t.e(393).then(t.bind(t,4393))},{path:"/login",component:()=>t.e(538).then(t.bind(t,3538))},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(988),t.e(85)]).then(t.bind(t,2085)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(56),t.e(718)]).then(t.bind(t,7718))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(56),t.e(731)]).then(t.bind(t,3731))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(56),t.e(635)]).then(t.bind(t,6635))}]},{path:"/user",component:()=>Promise.all([t.e(746),t.e(988),t.e(933)]).then(t.bind(t,1933)),children:[{path:"home",component:()=>Promise.all([t.e(534),t.e(387)]).then(t.bind(t,7387))},{path:"products",component:()=>Promise.all([t.e(746),t.e(856),t.e(662)]).then(t.bind(t,4662))},{path:"product/:productId",component:()=>Promise.all([t.e(746),t.e(856),t.e(534),t.e(315)]).then(t.bind(t,9315))},{path:"favorite",component:()=>Promise.all([t.e(746),t.e(856),t.e(528)]).then(t.bind(t,9528))},{path:"searchOrder",component:()=>t.e(11).then(t.bind(t,3011))},{path:"userCheckout",component:()=>t.e(710).then(t.bind(t,4710)),children:[{path:"cart",component:()=>t.e(150).then(t.bind(t,1150))},{path:"userInfo",component:()=>t.e(509).then(t.bind(t,1509))},{path:"order/:orderId",component:()=>t.e(549).then(t.bind(t,8549))},{path:"payment",component:()=>t.e(660).then(t.bind(t,1660))}]}]},{path:"/:pathMatch(.*)*",component:()=>t.e(208).then(t.bind(t,4208))}],y=(0,v.p7)({history:(0,v.r5)(),scrollBehavior(){return{top:0}},routes:g});var O=y;function j(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function w(e){const n=new Date(e);return n.toLocaleDateString()}function P(e){const n=new Date(1e3*e),t=n.getFullYear();let r=n.getMonth()+1,o=n.getDate();o<10&&(o=0+o.toString()),r<10&&(r=0+r.toString());const i=`${t}-${r}-${o}`;return i}Object.keys(u.ZP).forEach((e=>{(0,c.aH)(e,u.ZP[e])})),(0,c.jQ)({generateMessage:(0,d.NC)({zh_TW:f}),validateOnInput:!0}),(0,d.i_)("zh_TW");const k=(0,r.ri)(b);k.config.globalProperties.$filters={currency:j,date:w,inputDateType:P},k.use(i.Z,o.Z),k.use(O),k.component("LoadingOverlay",a.Z),k.component("VForm",c.l0),k.component("VField",c.gN),k.component("ErrorMessage",c.Bc),k.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var d=o();void 0!==d&&(n=d)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{11:"4adba976",56:"6d140258",85:"69700127",150:"5718035c",208:"10c144de",315:"c440b14f",387:"bfac7971",393:"29643980",509:"c2d05f5f",528:"e33310d1",534:"4a4a00fe",538:"6b11e0b8",549:"5741b171",635:"7c21bf2c",660:"53d440e1",662:"b56266cc",710:"04dc3df0",718:"0e6f8fc8",731:"3aa9e322",746:"5bba00f4",856:"490734c3",933:"155a35ea",988:"8bcfb3e6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".702d8df6.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-project:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var l=d[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var s=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/VueProject/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),c=t.p+a;if(n(a,c))return o();e(r,c,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={534:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],d=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var f=u(t)}for(n&&n(r);d<a.length;d++)i=a[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(828)}));r=t.O(r)})();
//# sourceMappingURL=app.5374c61d.js.map