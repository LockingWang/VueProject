"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[509],{1509:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});var l=a(3396),r=a(7139),t=a(9242);const o={class:"mt-5 row justify-content-center bg-light"},d=(0,l.uE)('<h5 class="text-center mt-3">訂購流程</h5><div class="row justify-content-center"><div class="col-sm-4 mt-3" style="max-width:200px;"><div class="border border-3 border-secondary rounded"><p class="text-center text-secondary mb-0">確認購物車</p></div></div><div class="col-sm-4 mt-3" style="max-width:200px;"><div class="border border-3 border-danger rounded"><p class="text-center text-danger mb-0">填寫訂購資訊</p></div></div><div class="col-sm-4 mt-3" style="max-width:200px;"><div class="border border-3 border-secondary rounded"><p class="text-center text-secondary mb-0">建立訂單</p></div></div></div>',2),i=(0,l._)("h5",{class:"text-center"},"收件人資訊",-1),c={class:"mb-3"},n={for:"email",class:"form-label"},m={class:"mb-3"},u={for:"name",class:"form-label"},b={class:"mb-3"},f={for:"tel",class:"form-label"},p={class:"mb-3"},v={for:"address",class:"form-label"},h={class:"mb-3"},g={for:"message",class:"form-label"},k={class:"text-end d-flex justify-content-between"},_=(0,l._)("i",{class:"bi bi-arrow-bar-left"},null,-1),x=(0,l._)("button",{class:"btn btn-danger w-50"},[(0,l.Uk)(" 建立訂單"),(0,l._)("i",{class:"bi bi-arrow-bar-right"})],-1);function y(e,s,a,y,w,V){const U=(0,l.up)("LoadingOverlay"),C=(0,l.up)("v-field"),W=(0,l.up)("ErrorMessage"),q=(0,l.up)("v-form");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(U,{active:w.isLoading},null,8,["active"]),(0,l._)("div",o,[d,(0,l.Wm)(q,{class:"col-md-6 bg-white mt-3 p-5",onSubmit:V.createOrder},{default:(0,l.w5)((({errors:e})=>[i,(0,l._)("div",c,[(0,l._)("label",n,[(0,l.Uk)("Email"),(0,l.kq)("",!0)]),(0,l.Wm)(C,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:w.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=e=>w.form.user.email=e)},null,8,["class","modelValue"]),(0,l.Wm)(W,{name:"email",class:"invalid-feedback"})]),(0,l._)("div",m,[(0,l._)("label",u,[(0,l.Uk)("收件人姓名"),(0,l.kq)("",!0)]),(0,l.Wm)(C,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:w.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=e=>w.form.user.name=e)},null,8,["class","modelValue"]),(0,l.Wm)(W,{name:"姓名",class:"invalid-feedback"})]),(0,l._)("div",b,[(0,l._)("label",f,[(0,l.Uk)("收件人電話"),(0,l.kq)("",!0)]),(0,l.Wm)(C,{id:"tel",name:"電話",type:"tel",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:w.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=e=>w.form.user.tel=e)},null,8,["class","modelValue"]),(0,l.Wm)(W,{name:"電話",class:"invalid-feedback"})]),(0,l._)("div",p,[(0,l._)("label",v,[(0,l.Uk)("收件人地址"),(0,l.kq)("",!0)]),(0,l.Wm)(C,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:w.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=e=>w.form.user.address=e)},null,8,["class","modelValue"]),(0,l.Wm)(W,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",h,[(0,l._)("label",g,[(0,l.Uk)("留言"),(0,l.kq)("",!0)]),(0,l.wy)((0,l._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=e=>w.form.message=e)},null,512),[[t.nr,w.form.message]])]),(0,l._)("div",k,[(0,l._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[5]||(s[5]=(...e)=>V.backToCart&&V.backToCart(...e))},[_,(0,l.Uk)("回到購物車 ")]),x])])),_:1},8,["onSubmit"])])],64)}a(7658);var w={data(){return{isLoading:!1,status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},inject:["$httpMessageState"],methods:{createOrder(){const e="https://vue3-course-api.hexschool.io/api/cong-ren/order",s=this.form;this.isLoading=!0,this.$http.post(e,{data:s}).then((e=>{this.isLoading=!1,e.data.success&&(this.$httpMessageState("success","建立訂單成功","感謝您的訂購 !"),this.$router.push(`/user/userCheckout/order/${e.data.orderId}`))})).catch((e=>{this.isLoading=!1,console.log(e),this.$httpMessageState("danger","發生錯誤","請聯繫工程師。")}))},backToCart(){this.$router.go(-1)}}},V=a(89);const U=(0,V.Z)(w,[["render",y]]);var C=U}}]);
//# sourceMappingURL=509.9df168e9.js.map