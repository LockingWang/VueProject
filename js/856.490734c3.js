(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[856],{4032:function(t,e,s){
/*!
  * Bootstrap offcanvas.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(1884),s(4130),s(7317),s(632),s(9069),s(5160),s(1437),s(7547))})(0,(function(t,e,s,i,n,a,o,l){"use strict";const r="offcanvas",c="bs.offcanvas",h=`.${c}`,d=".data-api",u=`load${h}${d}`,f="Escape",_="show",g="showing",p="hiding",m="offcanvas-backdrop",b=".offcanvas.show",v=`show${h}`,w=`shown${h}`,y=`hide${h}`,k=`hidePrevented${h}`,A=`hidden${h}`,x=`resize${h}`,C=`click${h}${d}`,E=`keydown.dismiss${h}`,$='[data-bs-toggle="offcanvas"]',D={backdrop:!0,keyboard:!0,scroll:!1},L={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class I extends t{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return D}static get DefaultType(){return L}static get NAME(){return r}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const s=e.trigger(this._element,v,{relatedTarget:t});if(s.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new l).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(g);const i=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_),this._element.classList.remove(g),e.trigger(this._element,w,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=e.trigger(this._element,y);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(p),this._backdrop.hide();const s=()=>{this._element.classList.remove(_,p),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new l).reset(),e.trigger(this._element,A)};this._queueCallback(s,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{"static"!==this._config.backdrop?this.hide():e.trigger(this._element,k)},s=Boolean(this._config.backdrop);return new i({className:m,isVisible:s,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:s?t:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){e.on(this._element,E,(t=>{t.key===f&&(this._config.keyboard?this.hide():e.trigger(this._element,k))}))}static jQueryInterface(t){return this.each((function(){const e=I.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return e.on(document,C,$,(function(t){const i=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),o.isDisabled(this))return;e.one(i,A,(()=>{o.isVisible(this)&&this.focus()}));const n=s.findOne(b);n&&n!==i&&I.getInstance(n).hide();const a=I.getOrCreateInstance(i);a.toggle(this)})),e.on(window,u,(()=>{for(const t of s.find(b))I.getOrCreateInstance(t).show()})),e.on(window,x,(()=>{for(const t of s.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&I.getOrCreateInstance(t).hide()})),n.enableDismissTrigger(I),o.defineJQueryPlugin(I),I}))},632:function(t,e,s){
/*!
  * Bootstrap backdrop.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(4130),s(2166),s(1437))})(0,(function(t,e,s){"use strict";const i="backdrop",n="fade",a="show",o=`mousedown.bs.${i}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},r={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class c extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return r}static get NAME(){return i}show(t){if(!this._config.isVisible)return void s.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&s.reflow(e),e.classList.add(a),this._emulateAnimation((()=>{s.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(a),this._emulateAnimation((()=>{this.dispose(),s.execute(t)}))):s.execute(t)}dispose(){this._isAppended&&(t.off(this._element,o),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(n),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,o,(()=>{s.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){s.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return c}))},5160:function(t,e,s){
/*!
  * Bootstrap focustrap.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(4130),s(7317),s(2166))})(0,(function(t,e,s){"use strict";const i="focustrap",n="bs.focustrap",a=`.${n}`,o=`focusin${a}`,l=`keydown.tab${a}`,r="Tab",c="forward",h="backward",d={autofocus:!0,trapElement:null},u={autofocus:"boolean",trapElement:"element"};class f extends s{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return d}static get DefaultType(){return u}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,a),t.on(document,o,(t=>this._handleFocusin(t))),t.on(document,l,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,a))}_handleFocusin(t){const{trapElement:s}=this._config;if(t.target===document||t.target===s||s.contains(t.target))return;const i=e.focusableChildren(s);0===i.length?s.focus():this._lastTabNavDirection===h?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===r&&(this._lastTabNavDirection=t.shiftKey?h:c)}}return f}))},7547:function(t,e,s){
/*!
  * Bootstrap scrollbar.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(6221),s(7317),s(1437))})(0,(function(t,e,s){"use strict";const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",a="padding-right",o="margin-right";class l{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,(e=>e+t)),this._setElementAttributes(i,a,(e=>e+t)),this._setElementAttributes(n,o,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(i,a),this._resetElementAttributes(n,o)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${s(Number.parseFloat(n))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(e,s){const i=e.style.getPropertyValue(s);i&&t.setDataAttribute(e,s,i)}_resetElementAttributes(e,s){const i=e=>{const i=t.getDataAttribute(e,s);null!==i?(t.removeDataAttribute(e,s),e.style.setProperty(s,i)):e.style.removeProperty(s)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(t,i){if(s.isElement(t))i(t);else for(const s of e.find(t,this._element))i(s)}}return l}))},943:function(t,e){"use strict";e["Z"]={data(){return{cart:{carts:[]}}},methods:{addToCart(t,e=1){const s="https://vue3-course-api.hexschool.io/api/cong-ren/cart",i={product_id:t,qty:e};this.isLoading=!0,this.$http.post(s,{data:i}).then((t=>{this.isLoading=!1,t.data.success?(this.$httpMessageState("success","成功加入購物車","繼續購物吧 ~"),this.getCart()):this.$httpMessageState("warning","加入失敗","請再試一次")})).catch((t=>{console.log(t),this.$httpMessageState("danger","發生問題","請聯繫工程師。")}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/cong-ren/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1}))}},created(){this.getCart()}}},4351:function(t,e,s){"use strict";s.d(e,{Z:function(){return B}});var i=s(3396),n=s(7139),a=s(9242);const o={class:"fixed-cart d-none d-md-block"},l={class:"btn","data-bs-toggle":"offcanvas",href:"#offcanvasWithBothOptions",role:"button","aria-controls":"offcanvasExample"},r=(0,i._)("img",{src:"https://img-bsy.txrpic.com/preview/Element/00/00/96/60/E-966041-F44B8F15.png?imageMogr2/quality/90/thumbnail/!800x%3E",alt:"cart",class:"img-fluid"},null,-1),c={class:"position-absolute start-50 translate-middle badge rounded-pill bg-info",style:{top:"10%"}},h={class:"offcanvas offcanvas-end","data-bs-scroll":"true",tabindex:"-1",id:"offcanvasWithBothOptions",ref:"offCanvas"},d=(0,i._)("div",{class:"offcanvas-header bg-danger text-white"},[(0,i._)("h5",{class:"offcanvas-title",id:"offcanvasWithBothOptionsLabel"},"我的購物車"),(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),u={class:"offcanvas-body p-0"},f={class:"table align-middle"},_=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{style:{width:"48px"}},"刪除"),(0,i._)("th",null,"品名"),(0,i._)("th",{style:{width:"120px"}},"數量"),(0,i._)("th",null,"單價")])],-1),g=["onClick"],p=(0,i._)("i",{class:"bi bi-x"},null,-1),m=[p],b={key:0,class:"text-success"},v={class:"input-group input-group-sm"},w=["onUpdate:modelValue","onChange","disabled"],y={class:"input-group-text"},k={class:"text-end"},A={key:0,class:"text-success"},x={key:1},C=(0,i._)("td",{colspan:"4",class:"text-center"},"尚未加入任何商品",-1),E=[C],$={colspan:"2"},D=["disabled"],L=(0,i._)("td",{colspan:"1",class:"text-end"},"總計",-1),I={class:"text-end"},M={key:0},N=(0,i._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),S={class:"text-end text-success"},T=(0,i._)("i",{class:"bi bi-coin mx-3"},null,-1),W=(0,i._)("i",{class:"bi bi-coin mx-3"},null,-1);function O(t,e,s,p,C,O){const q=(0,i.up)("LoadingOverlay"),z=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i._)("a",l,[r,(0,i._)("span",c,(0,n.zw)(s.cart.carts.length),1)])]),(0,i._)("div",h,[(0,i.Wm)(q,{active:C.isLoading},null,8,["active"]),d,(0,i._)("div",u,[(0,i._)("table",f,[_,(0,i._)("tbody",null,[s.cart.carts.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(s.cart.carts,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",null,[(0,i._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>O.removeCartItem(e.id)},m,8,g)]),(0,i._)("td",null,[(0,i.Uk)((0,n.zw)(e.product.title)+" ",1),e.coupon?((0,i.wg)(),(0,i.iD)("div",b," 已套用優惠券 ")):(0,i.kq)("",!0)]),(0,i._)("td",null,[(0,i._)("div",v,[(0,i.wy)((0,i._)("input",{type:"number",class:"form-control","aria-label":"buy number","onUpdate:modelValue":t=>e.qty=t,min:"1",onChange:t=>O.updateCart(e),disabled:this.status.loadingItem===e.id},null,40,w),[[a.nr,e.qty,void 0,{number:!0}]]),(0,i._)("div",y,"/ "+(0,n.zw)(e.product.unit),1)])]),(0,i._)("td",k,[s.cart.final_total!==s.cart.total?((0,i.wg)(),(0,i.iD)("small",A,"折扣價：")):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,n.zw)(t.$filters.currency(e.final_total)),1)])])))),128)):((0,i.wg)(),(0,i.iD)("tr",x,E))]),(0,i._)("tfoot",null,[(0,i._)("tr",null,[(0,i._)("td",$,[(0,i._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[0]||(e[0]=t=>O.removeCartItem("all")),disabled:0===s.cart.carts.length},"清空購物車",8,D)]),L,(0,i._)("td",I,(0,n.zw)(t.$filters.currency(s.cart.total)),1)]),s.cart.final_total!==s.cart.total?((0,i.wg)(),(0,i.iD)("tr",M,[N,(0,i._)("td",S,(0,n.zw)(t.$filters.currency(s.cart.final_total)),1)])):(0,i.kq)("",!0)])]),(0,i._)("div",null,[(0,i.Wm)(z,{class:"btn btn-warning w-50 shadow-sm d-block mx-auto go-checkout-btn",to:"/user/userCheckout/cart",onClick:e[1]||(e[1]=t=>C.offCanvas.hide())},{default:(0,i.w5)((()=>[T,(0,i.Uk)("我要結帳"),W])),_:1})])])],512)],64)}var q=s(4032),z=s.n(q),F={props:["cart"],emits:["change-cart"],data(){return{isLoading:!1,status:{loadingItem:""},offCanvas:{}}},inject:["$httpMessageState"],methods:{updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/cong-ren/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:s}).then((()=>{this.isLoading=!1,this.status.loadingItem="",this.$emit("change-cart")})).catch((t=>{console.log(t.response)}))},removeCartItem(t){let e="carts";"all"!==t&&(e=`cart/${t}`);const s=`https://vue3-course-api.hexschool.io/api/cong-ren/${e}`;this.isLoading=!0,this.$http.delete(s).then((()=>{this.isLoading=!1,this.$httpMessageState("success","刪除商品成功","快去尋找更適合的商品吧 ~ !"),this.$emit("change-cart")})).catch((t=>{console.log(t.response),this.$httpMessageState("danger","發生錯誤","請聯繫工程師。")}))},toggleCanvas(){this.offCanvas.show()}},mounted(){this.offCanvas=new(z())(this.$refs.offCanvas)}},V=s(89);const P=(0,V.Z)(F,[["render",O]]);var B=P}}]);
//# sourceMappingURL=856.490734c3.js.map