"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[627],{627:function(e,t,o){o.r(t),o.d(t,{default:function(){return A}});var n=o(3396),s=o(7139);const a={class:"row g-3 mt-3 justify-content-end"},l={class:"col-sm-3"},i={class:"overflow-auto"},p={class:"table mt-4"},d=(0,n._)("thead",{class:"text-nowrap"},[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比(%)"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),u={key:0,class:"text-success"},c={key:1,class:"text-muted"},r={class:"btn-group w-100"},h=["onClick"],m=["onClick"];function g(e,t,o,g,_,b){const C=(0,n.up)("LoadingOverlay"),f=(0,n.up)("PaginationModel"),w=(0,n.up)("CouponModal"),v=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(C,{active:_.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("div",l,[(0,n._)("button",{type:"button",class:"btn btn-success w-100",onClick:t[0]||(t[0]=e=>b.openModal(!0))},"新增優惠券")])]),(0,n._)("div",i,[(0,n._)("table",p,[d,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.coupons,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,s.zw)(t.title),1),(0,n._)("td",null,(0,s.zw)(`${t.percent}%`),1),(0,n._)("td",null,(0,s.zw)(e.$filters.inputDateType(t.due_date/1e3)),1),(0,n._)("td",null,[t.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",c,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",r,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>b.openModal(!1,t)},"編輯",8,h),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>b.openDelModal(t)},"刪除",8,m)])])])))),128))])])]),(0,n.Wm)(f,{pages:_.pagination,onEmitPages:b.getCoupons},null,8,["pages","onEmitPages"]),(0,n.Wm)(w,{ref:"couponModal",coupon:_.tempCoupon,onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(v,{ref:"delModal",item:_.delItem,onDelItem:b.deleteCoupon},null,8,["item","onDelItem"])],64)}var _=o(9242);const b={class:"modal fade",ref:"modal"},C={class:"modal-dialog modal-sm",role:"document"},f={class:"modal-content border-0",style:{width:"300px"}},w=(0,n._)("div",{class:"modal-header bg-success text-white"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,n._)("span",null,"新增優惠券")]),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},M={class:"mb-3"},y={for:"title",class:"form-label w-100"},k={class:"mb-3"},$={for:"percent",class:"form-label w-100"},x={key:0,class:"text-danger"},D={class:"mb-3"},U={for:"due_date",class:"form-label w-100"},L={class:"mb-3"},W={for:"code",class:"form-label w-100"},S={class:"mb-3"},I={class:"form-check"},j={class:"form-check-label",for:"is_enabled"},V={class:"modal-footer"},Z=(0,n._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function P(e,t,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",C,[(0,n._)("div",f,[w,(0,n._)("div",v,[(0,n._)("div",M,[(0,n._)("label",y,[(0,n.Uk)("優惠券名稱 "),(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入名稱","onUpdate:modelValue":t[0]||(t[0]=e=>a.tempCoupon.title=e)},null,512),[[_.nr,a.tempCoupon.title]])])]),(0,n._)("div",k,[(0,n._)("label",$,[(0,n.Uk)("折扣百分比 "),a.percentWarning?((0,n.wg)(),(0,n.iD)("span",x,"(不能小於 1)")):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[1]||(t[1]=e=>a.tempCoupon.percent=e),onChange:t[2]||(t[2]=e=>a.percentWarning=!1),min:"1"},null,544),[[_.nr,a.tempCoupon.percent]])])]),(0,n._)("div",D,[(0,n._)("label",U,[(0,n.Uk)("到期日 "),(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":t[3]||(t[3]=e=>a.tempCoupon.due_date=e)},null,512),[[_.nr,a.tempCoupon.due_date]])])]),(0,n._)("div",L,[(0,n._)("label",W,[(0,n.Uk)("優惠碼 "),(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[4]||(t[4]=e=>a.tempCoupon.code=e)},null,512),[[_.nr,a.tempCoupon.code]])])]),(0,n._)("div",S,[(0,n._)("div",I,[(0,n._)("label",j,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[5]||(t[5]=e=>a.tempCoupon.is_enabled=e)},null,512),[[_.e8,a.tempCoupon.is_enabled]]),(0,n.Uk)(" 是否啟用 ")])])])]),(0,n._)("div",V,[Z,(0,n._)("button",{type:"button",class:"btn btn-success",onClick:t[6]||(t[6]=(...e)=>l.emitCoupon&&l.emitCoupon(...e))},"確認")])])])],512)}var z=o(1339),N={data(){return{modal:{},tempCoupon:{},percentWarning:!1}},props:{coupon:{type:Object,default(){return{}}}},watch:{coupon(){this.tempCoupon=this.coupon,this.tempCoupon.due_date=this.$filters.inputDateType(this.tempCoupon.due_date/1e3)}},mixins:[z.Z],methods:{emitCoupon(){if(this.tempCoupon.percent<1)return void(this.percentWarning=!0);const e=new Date(this.tempCoupon.due_date).getTime();this.tempCoupon.due_date=e,this.$emit("update-coupon",this.tempCoupon)}}},T=o(89);const E=(0,T.Z)(N,[["render",P]]);var H=E,O=o(4798),Y=o(5239),q={data(){return{coupons:[],pagination:{},tempCoupon:{},isNew:!1,delItem:{},isLoading:!1}},components:{CouponModal:H,DelModal:O.Z,PaginationModel:Y.Z},inject:["emitter","$httpMessageState"],methods:{getCoupons(e=1){let t="";t="previous"===e&&this.pagination.has_pre?this.pagination.current_page-1:"next"===e&&this.pagination.has_next?this.pagination.current_page+1:e;const o=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/coupons?page=${t}`;this.isLoading=!0,this.$http.get(o).then((e=>{this.isLoading=!1,e.data.success&&(this.coupons=e.data.coupons,this.pagination=e.data.pagination)})).catch((e=>{console.log(e.response)}))},openModal(e,t){this.tempCoupon=e?{is_enabled:0}:{...t},this.isNew=e;const o=this.$refs.couponModal;o.showModal()},openDelModal(e){this.delItem=e;const t=this.$refs.delModal;t.showModal()},updateCoupon(e){this.tempCoupon=e;let t="https://vue3-course-api.hexschool.io/api/cong-ren/admin/coupon",o="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/coupon/${e.id}`,o="put");const n=this.$refs.couponModal;this.isLoading=!0,this.$http[o](t,{data:this.tempCoupon}).then((e=>{this.isLoading=!1,e.data.success?(n.hideModal(),this.$httpMessageState("success","更新成功",e.data.message),this.getCoupons()):this.$httpMessageState("warning","更新失敗","請再檢查一次。")})).catch((()=>{this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},deleteCoupon(){const e=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/coupon/${this.delItem.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{if(this.isLoading=!1,e.data.success){const t=this.$refs.delModal;t.hideModal(),this.getCoupons(),this.$httpMessageState("success","成功刪除優惠券",e.data.message)}else this.$httpMessageState("warning","刪除優惠券失敗",e.data.message)})).catch((()=>{this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))}},created(){this.getCoupons()}};const K=(0,T.Z)(q,[["render",g]]);var A=K}}]);
//# sourceMappingURL=627.5614b883.js.map