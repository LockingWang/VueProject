"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[538],{3538:function(s,e,t){t.r(e),t.d(e,{default:function(){return v}});var n=t(3396),o=t(9242);const a={class:"container mt-5"},r={class:"col-md-6"},i=(0,n._)("div",{class:"text-center mb-5"},[(0,n._)("img",{class:"img-fluid",src:"https://storage.googleapis.com/vue-course-api.appspot.com/cong-ren/1683082602645.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BCYzXPtK8OCGLNLZh2BHGdZ74Vlx04qpqSFQbmmsnLDY4IrqtfBQupiPSTm8I9cSDgDjot6y6A6BaGNrFZxT%2FRnxw1HDCKyU%2BjBSCbvqf3EAu78K4da4ldoHhGzWOxRDBCqm1ZQfuS4FEzY5KIgsjq7DHlfIHTKxGcpwzwVp4%2FGKCKdekqcUSN8yLt31QzC3orS5h8ZGA2WqfPHHLI6%2FTGJ9ZhJmYbZorKAcI%2BpDCXo6ScyQ98IbGRWQjD3NTEmAYapTcA9yPDoRUXhz86rrNWuRKTx8vctF5PfHeR3UkXJOvN15i8Rmw%2B%2F5zAGslc2OqTnKCgdShTjNmU7jy1sjHQ%3D%3D",alt:"logo"})],-1),c=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal text-center"},"管理員登入",-1),l={class:"mb-2"},u={for:"inputEmail",class:"sr-only w-100"},d={class:"mb-2"},p={for:"inputPassword",class:"sr-only w-100"},m=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-danger btn-block w-100",type:"submit"}," 登入")],-1);function h(s,e,t,h,g,b){const f=(0,n.up)("LoadingOverlay");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(f,{active:g.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,o.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,n._)("div",r,[i,c,(0,n._)("div",l,[(0,n._)("label",u,[(0,n.Uk)("電子郵箱 Email address "),(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"請輸入您的email帳號",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>g.user.username=s)},null,512),[[o.nr,g.user.username]])])]),(0,n._)("div",d,[(0,n._)("label",p,[(0,n.Uk)("密碼 Password "),(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>g.user.password=s)},null,512),[[o.nr,g.user.password]])])]),m])],32)])],64)}t(7658);var g={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.isLoading=!0,this.$http.post(s,this.user).then((s=>{if(this.isLoading=!1,s.data.success){const{token:e,expired:t}=s.data;document.cookie=`userToken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}})).catch((()=>{this.isLoading=!1}))}}},b=t(89);const f=(0,b.Z)(g,[["render",h]]);var v=f}}]);
//# sourceMappingURL=538.8b2c29f0.js.map