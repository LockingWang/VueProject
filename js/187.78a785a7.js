"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[187],{4187:function(e,t,s){s.r(t),s.d(t,{default:function(){return ke}});var a=s(3396),l=s(9242),r=s(7139);const i={class:"container-fluid"},d={class:"row g-3 mt-3 justify-content-end"},n={class:"col-sm-4"},o={class:"input-group"},c=(0,a.uE)('<option value="" selected>搜尋條件</option><option value="id" selected>訂單編號</option><option value="name" selected>姓名</option><option value="tel" selected>電話</option><option value="email" selected>Email</option>',5),p=[c],h=["disabled"],u={class:"col-sm-3"},g={class:"overflow-auto"},m={class:"table mt-4 text-nowrap"},_=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"訂單編號"),(0,a._)("th",null,"訂單成立時間"),(0,a._)("th",null,"訂購人"),(0,a._)("th",null,"訂單金額"),(0,a._)("th",null,"付款狀態"),(0,a._)("th",null,"編輯")])],-1),O={key:0},b={key:0,class:"text-success"},f={key:1,class:"text-muted"},w={class:"btn-group w-100"},x=["onClick"],v=["onClick"],y={key:1},M=(0,a._)("tr",null,[(0,a._)("td",{colspan:"6",class:"text-center text-secondary"},"歐歐~ 我們查不到有相關的訂單內 !")],-1),k=[M];function $(e,t,s,c,M,$){const D=(0,a.up)("LoadingOverlay"),T=(0,a.up)("PaginationModel"),L=(0,a.up)("OrderModal"),U=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(D,{active:M.isLoading},null,8,["active"]),(0,a._)("div",i,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a._)("div",o,[(0,a.wy)((0,a._)("select",{class:"form-select","aria-label":"Category","onUpdate:modelValue":t[0]||(t[0]=e=>M.filter=e),onChange:t[1]||(t[1]=e=>$.filtOrders(1))},p,544),[[l.bM,M.filter]]),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"搜尋關鍵字","aria-label":"serach text","aria-describedby":"serach order","onUpdate:modelValue":t[2]||(t[2]=e=>M.searchText=e),onChange:t[3]||(t[3]=e=>$.textCheck()),disabled:""===this.filter},null,40,h),[[l.nr,M.searchText]])]),(0,a._)("span",{class:"text-danger d-block text-end mb-3",style:(0,r.j5)({opacity:M.specialText})},"請勿輸入特殊字元",4)]),(0,a._)("div",u,[(0,a._)("button",{type:"button",class:"btn btn-danger w-100",onClick:t[4]||(t[4]=e=>$.openDelModal("all"))},"刪除全部訂單")])]),(0,a._)("div",g,[(0,a._)("table",m,[_,0!==M.filtedOrders.length?((0,a.wg)(),(0,a.iD)("tbody",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(M.filtedOrders,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,r.zw)(t.id),1),(0,a._)("td",null,(0,r.zw)(e.$filters.inputDateType(t.create_at)),1),(0,a._)("td",null,(0,r.zw)(t.user.name),1),(0,a._)("td",null,(0,r.zw)(e.$filters.currency(t.total)),1),(0,a._)("td",null,[t.is_paid?((0,a.wg)(),(0,a.iD)("span",b,"已付款")):((0,a.wg)(),(0,a.iD)("span",f,"未付款"))]),(0,a._)("td",null,[(0,a._)("div",w,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm text-nowrap",onClick:e=>$.openModal(t)},"編輯",8,x),(0,a._)("button",{class:"btn btn-outline-danger btn-sm text-nowrap",onClick:e=>$.openDelModal(t)},"刪除",8,v)])])])))),128))])):((0,a.wg)(),(0,a.iD)("tbody",y,k))])]),(0,a.Wm)(T,{pages:M.pagination,onEmitPages:$.filtOrders},null,8,["pages","onEmitPages"]),(0,a.Wm)(L,{ref:"orderModal",order:M.tempOrder,onUpdateOrder:$.updateOrder},null,8,["order","onUpdateOrder"]),(0,a.Wm)(U,{ref:"delModal",item:M.delOrder,onDelItem:$.deleteOrder,onDelAll:$.deleteAll},null,8,["item","onDelItem","onDelAll"])])],64)}s(7658);var D=s(5239);const T={class:"modal fade",ref:"modal"},L={class:"modal-dialog modal-xl",role:"document"},U={class:"modal-content border-0"},C={class:"modal-header bg-danger text-white"},S={class:"modal-title",id:"exampleModalLabel"},z=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),V={class:"modal-body"},A={class:"row gy-3 gy-lg-1"},P={class:"col-lg-4 border-end"},j=(0,a._)("h5",{class:"text-danger"},"訂購人資訊",-1),E={for:"user-name",class:"form-label w-100"},W={for:"user-tel",class:"form-label w-100"},Z={for:"user-address",class:"form-label w-100"},q={for:"user-email",class:"form-label w-100"},H={class:"col-lg-8"},Y=(0,a._)("h5",{class:"text-danger"},"訂單資訊",-1),I={class:"row"},K={class:"col-lg-6"},N={for:"order-time",class:"form-label w-100"},B={class:"col-lg-6"},F=(0,a._)("p",null,"付款狀態",-1),G={class:"d-flex"},J={class:"form-check form-switch"},Q={class:"form-check-label",for:"order_paid"},R={key:0,class:"text-success"},X={key:1,class:"text-danger"},ee={key:0,class:"text-success"},te={class:"col-lg-12"},se=(0,a._)("p",{class:"mb-0"},"訂單內容",-1),ae={class:"overflow-auto border border-3 border-danger rounded mb-3"},le={class:"table text-nowrap"},re=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"商品名稱"),(0,a._)("th",{width:"120px"},"數量")])],-1),ie={class:"input-group input-group-sm",style:{width:"120px"}},de=["onUpdate:modelValue"],ne={class:"input-group-text"},oe={class:"col-lg-6"},ce=(0,a._)("p",{class:"mb-0"},"買家留言",-1),pe={class:"border bg-white rounded p-2 mb-3"},he={class:"col-lg-6"},ue={class:"text-center"},ge={class:"modal-footer"},me=(0,a._)("button",{type:"button",class:"btn btn-lg btn-outline-secondary d-block","data-bs-dismiss":"modal"},"取消 ",-1);function _e(e,t,s,i,d,n){const o=(0,a.up)("LoadingOverlay");return(0,a.wg)(),(0,a.iD)("div",T,[(0,a.Wm)(o,{active:d.isLoading},null,8,["active"]),(0,a._)("div",L,[(0,a._)("div",U,[(0,a._)("div",C,[(0,a._)("h5",S,[(0,a._)("span",null,"編輯訂單 ( 訂單編號: "+(0,r.zw)(d.tempOrder.id)+" )",1)]),z]),(0,a._)("div",V,[(0,a._)("div",A,[(0,a._)("div",P,[j,(0,a._)("label",E,[(0,a.Uk)("姓名 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"user-name","onUpdate:modelValue":t[0]||(t[0]=e=>d.tempOrder.user.name=e)},null,512),[[l.nr,d.tempOrder.user.name]])]),(0,a._)("label",W,[(0,a.Uk)("電話 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"user-tel","onUpdate:modelValue":t[1]||(t[1]=e=>d.tempOrder.user.tel=e)},null,512),[[l.nr,d.tempOrder.user.tel]])]),(0,a._)("label",Z,[(0,a.Uk)("地址 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"user-address","onUpdate:modelValue":t[2]||(t[2]=e=>d.tempOrder.user.address=e)},null,512),[[l.nr,d.tempOrder.user.address]])]),(0,a._)("label",q,[(0,a.Uk)("電子信箱 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"user-email","onUpdate:modelValue":t[3]||(t[3]=e=>d.tempOrder.user.email=e)},null,512),[[l.nr,d.tempOrder.user.email]])])]),(0,a._)("div",H,[Y,(0,a._)("div",I,[(0,a._)("div",K,[(0,a._)("label",N,[(0,a.Uk)("訂單建立時間 "),(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"order-time","onUpdate:modelValue":t[4]||(t[4]=e=>d.tempOrder.create_at=e),disabled:""},null,512),[[l.nr,d.tempOrder.create_at]])])]),(0,a._)("div",B,[F,(0,a._)("div",G,[(0,a._)("div",J,[(0,a._)("label",Q,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"order_paid","aria-checked":"check","onUpdate:modelValue":t[5]||(t[5]=e=>d.tempOrder.is_paid=e)},null,512),[[l.e8,d.tempOrder.is_paid]])])]),(0,a._)("div",null,[(0,a._)("div",null,[d.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("span",R,"已付款")):((0,a.wg)(),(0,a.iD)("span",X,"尚未付款"))]),d.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",ee," 付款日 "+(0,r.zw)(e.$filters.date(1e3*d.tempOrder.paid_date)),1)):(0,a.kq)("",!0)])])]),(0,a._)("div",te,[se,(0,a._)("div",ae,[(0,a._)("table",le,[re,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.tempOrder.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,r.zw)(e.product.title),1),(0,a._)("td",null,[(0,a._)("div",ie,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control","aria-label":"buy number","onUpdate:modelValue":t=>e.qty=t,min:"1",disabled:""},null,8,de),[[l.nr,e.qty,void 0,{number:!0}]]),(0,a._)("div",ne," / "+(0,r.zw)(e.product.unit),1)])])])))),128))])])])]),(0,a._)("div",oe,[ce,(0,a._)("div",pe,[(0,a._)("p",null,(0,r.zw)(d.tempOrder.message),1)])]),(0,a._)("div",he,[(0,a._)("h5",ue," 總金額 "+(0,r.zw)(e.$filters.currency(d.tempOrder.total))+" NTD ",1)])])])])]),(0,a._)("div",ge,[me,(0,a._)("button",{type:"button",class:"btn btn-lg btn-danger w-50",onClick:t[6]||(t[6]=(...e)=>n.emitOrder&&n.emitOrder(...e))},"確認")])])])],512)}var Oe=s(1339),be={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{},tempOrder:{products:{},user:{}},isLoading:!1,is_paid:""}},watch:{order(){this.tempOrder=this.order,this.tempOrder.create_at=this.$filters.inputDateType(this.tempOrder.create_at)}},methods:{emitOrder(){const e=new Date(this.tempOrder.create_at).getTime();this.tempOrder.create_at=e/1e3,this.$emit("update-order",this.tempOrder)}},mixins:[Oe.Z],inject:["$httpMessageState"]},fe=s(89);const we=(0,fe.Z)(be,[["render",_e]]);var xe=we,ve=s(4798),ye={components:{PaginationModel:D.Z,OrderModal:xe,DelModal:ve.Z},data(){return{orders:[],allOrders:[],filtedOrders:[],pageOrders:10,tempOrder:{},delOrder:{},isLoading:!1,pagination:{total_pages:"",current_page:1,has_pre:!1,has_next:!1},filter:"",searchText:"",specialText:0}},methods:{getTotalPages(e=1){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/cong-ren/admin/orders";this.$http.get(t).then((t=>{this.isLoading=!1,this.allOrders=[],this.getAllOrders(t.data.pagination.total_pages,e,1)})).catch((e=>{console.log("err",e)}))},async getAllOrders(e,t,s){this.isLoading=!0;const a=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/orders?page=${s}`;await this.$http.get(a).then((a=>{this.allOrders=this.allOrders.concat(a.data.orders),a.data.pagination.current_page<e?this.getAllOrders(e,t,s+1):(this.isLoading=!1,this.filtOrders(t))}))},filtOrders(e=1){"id"===this.filter?this.filtedOrders=this.allOrders.filter((e=>e.id.match(this.searchText))):"name"===this.filter?this.filtedOrders=this.allOrders.filter((e=>e.user.name.match(this.searchText))):"tel"===this.filter?this.filtedOrders=this.allOrders.filter((e=>e.user.tel.match(this.searchText))):"email"===this.filter?this.filtedOrders=this.allOrders.filter((e=>e.user.email.match(this.searchText))):(this.filtedOrders=this.allOrders,this.searchText=""),"previous"===e?this.pagination.current_page-=1:"next"===e?this.pagination.current_page+=1:this.pagination.current_page=1===e?1:e,this.pagination.total_pages=Math.ceil(this.filtedOrders.length/this.pageOrders),1===this.pagination.current_page?(this.pagination.has_pre=!1,this.pagination.has_next=!0,1===this.pagination.total_pages&&(this.pagination.has_next=!1)):this.pagination.current_page===this.pagination.total_pages?(this.pagination.has_next=!1,this.pagination.has_pre=!0):(this.pagination.has_next=!0,this.pagination.has_pre=!0);const t=[],s=this.pagination.current_page;this.filtedOrders.forEach(((e,a)=>{a<=s*this.pageOrders-1&&a>=s*this.pageOrders-this.pageOrders&&t.push(e)})),this.filtedOrders=t},openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},updateOrder(e){const t=this.$refs.orderModal,s=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/order/${e.id}`;this.isLoading=!0,this.$http.put(s,{data:this.tempOrder}).then((e=>{this.isLoading=!1,e.data.success?(t.hideModal(),this.$httpMessageState("success","更新成功",e.data.message),this.allOrders=[],this.getAllOrders(this.pagination.total_pages,this.pagination.current_page,1)):this.$httpMessageState("warning","更新失敗","請重新檢查內容，並再次嘗試。")})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},openDelModal(e){"all"===e?this.delOrder={title:"全部訂單"}:(this.delOrder=e,this.delOrder.title=`訂單${e.id}`);const t=this.$refs.delModal;t.showModal()},deleteOrder(){const e=this.$refs.delModal,t=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/order/${this.delOrder.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{this.isLoading=!1,t.data.success?(this.getTotalPages(this.pagination.current_page),e.hideModal(),this.$httpMessageState("success","刪除訂單成功",t.data.message)):this.$httpMessageState("warning","刪除訂單失敗",t.data.message)})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},deleteAll(){const e="https://vue3-course-api.hexschool.io/api/cong-ren/admin/orders/all",t=this.$refs.delModal;this.$http.delete(e).then((e=>{t.hideModal(),e.data.success?(this.$httpMessageState("success","成功清空訂單","讓我們重新開始吧 !"),this.getTotalPages(this.pagination.current_page)):this.$httpMessageState("warning","刪除全部訂單失敗",e.data.message)})).catch((()=>{t.hideModal(),this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},textCheck(){const e=this.searchText.replace(/[`~!#$%^&*()+=<>?:"{}|,./;'\\[\]·~！#￥%……&*（）——+={}|《》？：“”【】、；‘’，。、]/g,"");e!==this.searchText?this.specialText=1:(this.specialText=0,this.filtOrders(1))}},created(){this.getTotalPages(1)},inject:["emitter","$httpMessageState"]};const Me=(0,fe.Z)(ye,[["render",$]]);var ke=Me}}]);
//# sourceMappingURL=187.78a785a7.js.map