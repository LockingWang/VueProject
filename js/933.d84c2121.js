(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[933],{434:function(e,t,s){s(7658),
/*!
  * Bootstrap collapse.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,i){e.exports=i(s(1884),s(4130),s(7317),s(1437))}(0,(function(e,t,s,i){"use strict";const n="collapse",l="bs.collapse",a=`.${l}`,r=".data-api",o=`show${a}`,c=`shown${a}`,g=`hide${a}`,h=`hidden${a}`,u=`click${a}${r}`,d="show",_="collapse",p="collapsing",m="collapsed",f=`:scope .${_} .${_}`,v="collapse-horizontal",k="width",C="height",w=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',b={parent:null,toggle:!0},A={parent:"(null|element)",toggle:"boolean"};class L extends e{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const i=s.find(y);for(const n of i){const e=s.getSelectorFromElement(n),t=s.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(n)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return b}static get DefaultType(){return A}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(w).filter((e=>e!==this._element)).map((e=>L.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const s=t.trigger(this._element,o);if(s.defaultPrevented)return;for(const t of e)t.hide();const i=this._getDimension();this._element.classList.remove(_),this._element.classList.add(p),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(_,d),this._element.style[i]="",t.trigger(this._element,c)},l=i[0].toUpperCase()+i.slice(1),a=`scroll${l}`;this._queueCallback(n,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=t.trigger(this._element,g);if(e.defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,i.reflow(this._element),this._element.classList.add(p),this._element.classList.remove(_,d);for(const t of this._triggerArray){const e=s.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const l=()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(_),t.trigger(this._element,h)};this._element.style[n]="",this._queueCallback(l,this._element,!0)}_isShown(e=this._element){return e.classList.contains(d)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=i.getElement(e.parent),e}_getDimension(){return this._element.classList.contains(v)?k:C}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(y);for(const t of e){const e=s.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=s.find(f,this._config.parent);return s.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const s of e)s.classList.toggle(m,!t),s.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const s=L.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof s[e])throw new TypeError(`No method named "${e}"`);s[e]()}}))}}return t.on(document,u,y,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of s.getMultipleElementsFromSelector(this))L.getOrCreateInstance(t,{toggle:!1}).toggle()})),i.defineJQueryPlugin(L),L}))},1933:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return W}});var i=s(3396);const n={style:{"margin-top":"55px"}},l=(0,i._)("p",{class:"text-center py-3 mb-0 bg-light"},[(0,i._)("i",{class:"bi bi-pencil"}),(0,i.Uk)(" 2023 by CongRen Wang 王琮仁. "),(0,i._)("br"),(0,i.Uk)(" created with Vue. ")],-1);function a(e,t,s,a,r,o){const c=(0,i.up)("UserNavBar"),g=(0,i.up)("router-view"),h=(0,i.up)("ToastMessages");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{class:"fixed-top"}),(0,i._)("div",n,[(0,i.Wm)(g),l]),(0,i.Wm)(h)],64)}var r=s(5820),o=s(6958),c=s(7587);const g={class:"navbar navbar-expand-lg shadow px-3 user-navbar"},h={class:"container-fluid"},u=(0,i._)("img",{class:"img-fluid",src:"https://storage.googleapis.com/vue-course-api.appspot.com/cong-ren/1682747176528.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E%2BMdiy13jV6qHkCRifNdi5Cwt5RBDIB0ZPrYWg72020rPNB6AEI4nI4P6xG1WI0j%2Bx7bnBQ99LmNqMoqc%2B8Q4Vur1vdo8PiOsf9FRXJtyVc8O0roF82HQKN9gWQgm0cYoRsrnildZsfudvwLiphyTI0dzdhiemBvUe43JAotEiQgZOHOvn7X4j02oakUNa0RuyDrBXtTjtizOAufPepvG45%2ByiwGUzlSb%2F50K2LZe%2BvPrTXOECtQ8isC7WTwkSOSN%2F043nCnBRT77BkB%2FlgAwT5%2Bc6CHh7kWu1DitSIiVw6CtUjhT%2Fo1e4UJFWV6x1QN%2FcEQI4G0HDJVPhsKF%2B5JIg%3D%3D",alt:"logo"},null,-1),d=(0,i._)("span",{class:"navbar-toggler-icon"},null,-1),_=[d],p={class:"collapse navbar-collapse pt-3",id:"navbarNav",ref:"collapse"},m={class:"navbar-nav ms-auto"},f={class:"nav-item nav-li text-center"},v={class:"nav-item nav-li text-center"},k={class:"nav-item nav-li text-center"},C={class:"nav-item nav-li text-center"},w={class:"nav-item nav-li text-center"};function y(e,t,s,n,l,a){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",g,[(0,i._)("div",h,[(0,i.Wm)(r,{class:"nav-link logo-indent",to:"/user/home",style:{width:"200px"}},{default:(0,i.w5)((()=>[u])),_:1}),(0,i._)("button",{class:"navbar-toggler",type:"button",onClick:t[0]||(t[0]=(...e)=>a.toggleCollapse&&a.toggleCollapse(...e))},_),(0,i._)("div",p,[(0,i._)("ul",m,[(0,i._)("li",f,[(0,i.Wm)(r,{class:"nav-link nav-link-style",to:"/user/home",onClick:a.activeLink},{default:(0,i.w5)((()=>[(0,i.Uk)("首頁")])),_:1},8,["onClick"])]),(0,i._)("li",v,[(0,i.Wm)(r,{class:"nav-link nav-link-style",to:"/user/products",onClick:a.activeLink},{default:(0,i.w5)((()=>[(0,i.Uk)("商品頁")])),_:1},8,["onClick"])]),(0,i._)("li",k,[(0,i.Wm)(r,{class:"nav-link nav-link-style",to:"/user/favorite",onClick:a.activeLink},{default:(0,i.w5)((()=>[(0,i.Uk)("我的最愛")])),_:1},8,["onClick"])]),(0,i._)("li",C,[(0,i.Wm)(r,{class:"nav-link nav-link-style",to:"/user/userCheckout/cart",onClick:a.activeLink},{default:(0,i.w5)((()=>[(0,i.Uk)("購物車")])),_:1},8,["onClick"])]),(0,i._)("li",w,[(0,i.Wm)(r,{class:"nav-link nav-link-style",to:"/user/searchOrder",onClick:a.activeLink},{default:(0,i.w5)((()=>[(0,i.Uk)("訂單查詢")])),_:1},8,["onClick"])])])],512)])])}var b=s(434),A=s.n(b),L={data(){return{collapse:{}}},methods:{toggleCollapse(){this.collapse=new(A())(this.$refs.collapse),this.collapse.toggle()},activeLink(e){const t=document.querySelectorAll(".nav-link");t.forEach((t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}))}}},T=s(89);const x=(0,T.Z)(L,[["render",y]]);var B=x,S={components:{ToastMessages:o.Z,UserNavBar:B},provide(){return{emitter:r.Z,$httpMessageState:c.Z}}};const F=(0,T.Z)(S,[["render",a]]);var W=F}}]);
//# sourceMappingURL=933.d84c2121.js.map