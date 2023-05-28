"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[537],{4612:function(t,e,a){a(7658);e["Z"]={data(){return{filtedProducts:[],pagination:{total_pages:"",current_page:1,has_pre:!1,has_next:!1},filter:"",searchText:""}},methods:{filtProducts(t=1){""===this.filter?this.filtedProducts=this.products.filter((t=>t.title.match(this.searchText))):(this.filtedProducts=this.products.filter((t=>t.category===this.filter)),this.filtedProducts=this.filtedProducts.filter((t=>t.title.match(this.searchText)))),"previous"===t?this.pagination.current_page-=1:"next"===t?this.pagination.current_page+=1:this.pagination.current_page=1===t?1:t,this.pagination.total_pages=Math.ceil(this.filtedProducts.length/this.pageItems),1===this.pagination.current_page?(this.pagination.has_pre=!1,this.pagination.has_next=!0,1===this.pagination.total_pages&&(this.pagination.has_next=!1)):this.pagination.current_page===this.pagination.total_pages?(this.pagination.has_next=!1,this.pagination.has_pre=!0):(this.pagination.has_next=!0,this.pagination.has_pre=!0);const e=[],a=this.pagination.current_page;this.filtedProducts.forEach(((t,s)=>{s<=a*this.pageItems-1&&s>=a*this.pageItems-this.pageItems&&e.push(t)})),this.filtedProducts=e}}}},4798:function(t,e,a){a.d(e,{Z:function(){return U}});var s=a(3396),l=a(7139),i=a(9242);const o={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog",role:"document"},r={class:"modal-content border-0"},c={class:"modal-header bg-danger text-white"},d={class:"modal-title"},p=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},h={class:"text-danger"},m=(0,s._)("br",null,null,-1),g={key:0,class:"mt-3"},_={for:"delPassword"},b={key:0,class:"text-danger mb-0"},f={class:"modal-footer"},w=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function y(t,e,a,y,v,P){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("h5",d,[(0,s._)("span",null,"刪除 "+(0,l.zw)(a.item.title),1)]),p]),(0,s._)("div",u,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",h,(0,l.zw)(a.item.title),1),(0,s.Uk)(),m,(0,s.Uk)("(刪除後將無法恢復)。 "),"全部訂單"===a.item.title?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("label",_,[(0,s.Uk)(" 請輸入 [ delete1314 ] ，確認刪除所有訂單。 "),(0,s.wy)((0,s._)("input",{id:"delPassword",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>v.delKey=t)},null,512),[[i.nr,v.delKey]]),v.wrongKey?((0,s.wg)(),(0,s.iD)("p",b,"輸入錯誤，請謹慎輸入 !")):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)]),(0,s._)("div",f,[w,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...t)=>P.deleteTarget&&P.deleteTarget(...t))},"確認刪除 ")])])])],512)}var v=a(1339),P={props:{item:{}},data(){return{modal:{},delKey:"",wrongKey:!1}},methods:{deleteTarget(){"全部訂單"===this.item.title?"delete1314"===this.delKey?this.$emit("del-all"):this.wrongKey=!0:this.$emit("del-item")}},mixins:[v.Z]},x=a(89);const k=(0,x.Z)(P,[["render",y]]);var U=k},5239:function(t,e,a){a.d(e,{Z:function(){return b}});var s=a(3396),l=a(7139),i=a(9242);const o={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r=(0,s._)("span",{"aria-hidden":"true"},"«",-1),c=[r],d=["onClick"],p=(0,s._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function h(t,e,a,r,p,h){return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("ul",n,[(0,s._)("li",{class:(0,l.C_)(["page-item",{"page-link-disabled":!a.pages.has_pre}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,i.iM)((t=>h.updatePage("previous")),["prevent"]))},c)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:(0,l.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((e=>h.updatePage(t)),["prevent"])},(0,l.zw)(t),9,d)],2)))),128)),(0,s._)("li",{class:(0,l.C_)(["page-item",{"page-link-disabled":!a.pages.has_next}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,i.iM)((t=>h.updatePage("next")),["prevent"]))},u)],2)])])}var m={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=a(89);const _=(0,g.Z)(m,[["render",h]]);var b=_},8537:function(t,e,a){a.r(e),a.d(e,{default:function(){return It}});var s=a(3396),l=a(7139),i=a(9242);const o={class:"row g-3 mt-3 justify-content-end"},n={class:"col-sm-2"},r=(0,s._)("option",{value:"",selected:""},"全部",-1),c=["value"],d={class:"col-sm-2 ms-3"},p={class:"col-sm-3"},u=(0,s._)("i",{class:"bi bi-plus"},null,-1),h=(0,s._)("h2",{class:"text-center d-sm-none mt-3"},"產品列表",-1),m={class:"overflow-auto"},g={class:"table mt-3"},_=(0,s._)("thead",{class:"text-nowrap"},[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"分類"),(0,s._)("th",null,"產品名稱"),(0,s._)("th",{width:"120"},"原價"),(0,s._)("th",{width:"120"},"售價"),(0,s._)("th",{width:"100"},"商品狀態"),(0,s._)("th",{width:"200"},"編輯")])],-1),b={class:"text-right"},f={class:"text-right"},w={key:0,class:"text-success"},y={key:1,class:"text-danger"},v={class:"btn-group w-100"},P=["onClick"],x=["onClick"];function k(t,e,a,k,U,M){const $=(0,s.up)("LoadingOverlay"),C=(0,s.up)("PaginationModel"),D=(0,s.up)("ProductModal"),L=(0,s.up)("DelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)($,{active:U.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",n,[(0,s.wy)((0,s._)("select",{class:"form-select w-100","aria-label":"Category","onUpdate:modelValue":e[0]||(e[0]=e=>t.filter=e),onChange:e[1]||(e[1]=e=>t.filtProducts(1))},[r,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.category,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,l.zw)(t),9,c)))),128))],544),[[i.bM,t.filter]])]),(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"搜尋商品名稱","aria-label":"serach text","aria-describedby":"serach product","onUpdate:modelValue":e[2]||(e[2]=e=>t.searchText=e),onChange:e[3]||(e[3]=t=>M.textCheck())},null,544),[[i.nr,t.searchText]]),(0,s._)("span",{class:"text-danger d-block text-center mb-3",style:(0,l.j5)({opacity:U.specialText})},"請勿輸入特殊字元",4)]),(0,s._)("div",p,[(0,s._)("button",{type:"button",class:"btn btn-primary w-100",onClick:e[4]||(e[4]=t=>M.openModal(!0))},[u,(0,s.Uk)("新增產品")])])]),h,(0,s._)("div",m,[(0,s._)("table",g,[_,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.filtedProducts,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,l.zw)(e.category),1),(0,s._)("td",null,(0,l.zw)(e.title),1),(0,s._)("td",b,(0,l.zw)(t.$filters.currency(e.origin_price)),1),(0,s._)("td",f,(0,l.zw)(t.$filters.currency(e.price)),1),(0,s._)("td",null,[e.is_enabled?((0,s.wg)(),(0,s.iD)("span",w,"上架")):((0,s.wg)(),(0,s.iD)("span",y,"未上架"))]),(0,s._)("td",null,[(0,s._)("div",v,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm text-nowrap",onClick:t=>M.openModal(!1,e)},"編輯",8,P),(0,s._)("button",{class:"btn btn-outline-danger btn-sm text-nowrap",onClick:t=>M.openDelModal(e)},"刪除",8,x)])])])))),128))])])]),(0,s.Wm)(C,{pages:t.pagination,onEmitPages:t.filtProducts},null,8,["pages","onEmitPages"]),(0,s.Wm)(D,{ref:"productModal",product:U.tempProduct,onUpdateProduct:M.updateProduct},null,8,["product","onUpdateProduct"]),(0,s.Wm)(L,{ref:"delModal",item:U.delItem,onDelItem:M.deleteProduct},null,8,["item","onDelItem"])],64)}a(7658);const U={class:"modal fade",ref:"modal"},M={class:"modal-dialog modal-xl",role:"document"},$={class:"modal-content border-0"},C={class:"modal-header bg-danger text-white"},D={class:"modal-title",id:"exampleModalLabel"},L=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},S={class:"row"},T={class:"col-sm-4"},V=(0,s._)("h5",null,"商品封面",-1),j={key:0,class:"mb-3 img-box"},Z={class:"form-label w-100",for:"img-url"},F={class:"mb-3"},K={for:"customFile",class:"form-label w-100"},z=(0,s._)("i",{class:"fas fa-spinner fa-spin"},null,-1),O={class:"my-3"},H=(0,s._)("h5",null,"商品參考圖",-1),W={class:"input-group mb-3"},Y=["disabled"],E={class:"input-group mb-3"},N={type:"file",class:"form-control","aria-label":"imageFile",ref:"otherFile"},q={class:"row g-2 justify-content-center"},B={class:"img-box"},A=["onClick"],G=(0,s._)("i",{class:"bi bi-x"},null,-1),J=[G],Q={class:"col-sm-8"},R={for:"title",class:"form-label w-100"},X={class:"row gx-2"},tt={class:"col-md-6"},et={for:"category",class:"form-label w-100"},at={class:"col-md-6"},st={for:"price",class:"form-label w-100"},lt={class:"row gx-2"},it={class:"col-md-6"},ot={for:"origin_price",class:"form-label w-100"},nt={class:"col-md-6"},rt={for:"price",class:"form-label w-100"},ct=(0,s._)("hr",null,null,-1),dt={for:"description",class:"form-label w-100"},pt={for:"content",class:"form-label w-100"},ut={class:"mb-3 d-flex"},ht=(0,s._)("div",null,[(0,s._)("p",{class:"mb-0"},"商品狀態 : ")],-1),mt={class:"form-check form-switch ms-2"},gt={class:"form-check-label",for:"flexSwitchCheckDefault"},_t={key:0,class:"text-success"},bt={key:1,class:"text-danger"},ft={class:"modal-footer"},wt=(0,s._)("button",{type:"button",class:"btn btn-lg btn-outline-secondary d-block","data-bs-dismiss":"modal"},"取消 ",-1);function yt(t,e,a,o,n,r){const c=(0,s.up)("LoadingOverlay");return(0,s.wg)(),(0,s.iD)("div",U,[(0,s.Wm)(c,{active:n.isLoading},null,8,["active"]),(0,s._)("div",M,[(0,s._)("div",$,[(0,s._)("div",C,[(0,s._)("h5",D,[(0,s._)("span",null,(0,l.zw)(n.tempProduct.header),1)]),L]),(0,s._)("div",I,[(0,s._)("div",S,[(0,s._)("div",T,[V,n.tempProduct.imageUrl?((0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("div",{class:"bg-img",style:(0,l.j5)({"background-image":"url("+n.tempProduct.imageUrl+")"})},null,4)])):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s._)("label",Z,[(0,s.Uk)("圖片網址 : "),(0,s.wy)((0,s._)("input",{class:"form-control",type:"text",id:"img-url","onUpdate:modelValue":e[0]||(e[0]=t=>n.tempProduct.imageUrl=t)},null,512),[[i.nr,n.tempProduct.imageUrl]])])]),(0,s._)("div",F,[(0,s._)("label",K,[z,(0,s._)("input",{type:"file",id:"customFile",class:"form-control",ref:"mainFile",onChange:e[1]||(e[1]=t=>r.uploadFile())},null,544)])]),(0,s._)("div",O,[H,(0,s._)("div",W,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片網址","aria-label":"imageUrl","onUpdate:modelValue":e[2]||(e[2]=t=>n.tempImagesUrl=t)},null,512),[[i.nr,n.tempImagesUrl]]),(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e[3]||(e[3]=t=>r.uploadOthers("url")),disabled:!n.tempImagesUrl},"新增參考圖",8,Y)]),(0,s._)("div",E,[(0,s._)("input",N,null,512),(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[4]||(e[4]=t=>r.uploadOthers("file"))},"上傳參考圖")]),(0,s._)("div",q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tempProduct.imagesUrl,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-6 col-lg-4 position-relative",key:t},[(0,s._)("div",B,[(0,s._)("div",{class:"bg-img",style:(0,l.j5)({"background-image":"url("+t+")"})},null,4)]),(0,s._)("button",{type:"button",class:"btn btn-danger position-absolute p-0 img-del-btn",onClick:t=>r.delImages(e)},J,8,A)])))),128))])])]),(0,s._)("div",Q,[(0,s._)("div",null,[(0,s._)("label",R,[(0,s.Uk)("標題 (Title) "),(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=t=>n.tempProduct.title=t)},null,512),[[i.nr,n.tempProduct.title]])])]),(0,s._)("div",X,[(0,s._)("div",tt,[(0,s._)("label",et,[(0,s.Uk)("分類 (Category) "),(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=t=>n.tempProduct.category=t)},null,512),[[i.nr,n.tempProduct.category]])])]),(0,s._)("div",at,[(0,s._)("label",st,[(0,s.Uk)("單位 (Unit) "),(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=t=>n.tempProduct.unit=t)},null,512),[[i.nr,n.tempProduct.unit]])])])]),(0,s._)("div",lt,[(0,s._)("div",it,[(0,s._)("label",ot,[(0,s.Uk)("原價 (Origin Price) "),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=t=>n.tempProduct.origin_price=t)},null,512),[[i.nr,n.tempProduct.origin_price]])])]),(0,s._)("div",nt,[(0,s._)("label",rt,[(0,s.Uk)("售價 (Price) "),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=t=>n.tempProduct.price=t)},null,512),[[i.nr,n.tempProduct.price]])])])]),ct,(0,s._)("div",null,[(0,s._)("label",dt,[(0,s.Uk)("產品描述 "),(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=t=>n.tempProduct.description=t)},null,512),[[i.nr,n.tempProduct.description]])])]),(0,s._)("div",null,[(0,s._)("label",pt,[(0,s.Uk)("說明內容 "),(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[11]||(e[11]=t=>n.tempProduct.content=t)},null,512),[[i.nr,n.tempProduct.content]])])]),(0,s._)("div",ut,[ht,(0,s._)("div",mt,[(0,s._)("label",gt,[n.tempProduct.is_enabled?((0,s.wg)(),(0,s.iD)("span",_t,"上架")):((0,s.wg)(),(0,s.iD)("span",bt,"未上架")),(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","aria-checked":"",role:"switch",id:"flexSwitchCheckDefault","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=t=>n.tempProduct.is_enabled=t)},null,512),[[i.e8,n.tempProduct.is_enabled]])])])])])])]),(0,s._)("div",ft,[wt,(0,s._)("button",{type:"button",class:"btn btn-lg btn-danger w-50",onClick:e[13]||(e[13]=e=>t.$emit("update-product",n.tempProduct))},"確認")])])])],512)}var vt=a(1339),Pt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{},tempImagesUrl:"",isLoading:!1}},methods:{uploadFile(){const t=this.$refs.mainFile.files[0],e=new FormData;e.append("file-to-upload",t),this.isLoading=!0;const a="https://vue3-course-api.hexschool.io/api/cong-ren/admin/upload";this.$http.post(a,e).then((t=>{this.isLoading=!1,t.data.success?(this.tempProduct.imageUrl=t.data.imageUrl,this.$httpMessageState("success","主商品圖上傳成功","新增參考圖，可以提升消費者的購買意願喔 !")):this.$httpMessageState("warning","主商品圖上傳失敗","檔案必須小於 1MB 且為圖片格式")})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},uploadOthers(t){if(this.tempProduct.imagesUrl.length>=5)this.$httpMessageState("warning","參考圖數量限制","商品參考圖最多5張，請刪除先刪除不要的圖片。");else if("url"===t)this.tempProduct.imagesUrl.push(this.tempImagesUrl),this.tempImagesUrl="";else{const t=this.$refs.otherFile.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/cong-ren/admin/upload";this.isLoading=!0,this.$http.post(a,e).then((t=>{this.isLoading=!1,t.data.success?(this.tempProduct.imagesUrl.push(t.data.imageUrl),this.$httpMessageState("success","上傳參考圖成功","繼續新增完善商品吧 !")):this.$httpMessageState("warning","上傳參考圖失敗","檔案必須小於 1MB 且為圖片格式")})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))}},delImages(t){this.tempProduct.imagesUrl.splice(t,1)}},mixins:[vt.Z],inject:["$httpMessageState"]},xt=a(89);const kt=(0,xt.Z)(Pt,[["render",yt]]);var Ut=kt,Mt=a(4798),$t=a(5239),Ct=a(4612),Dt={data(){return{products:[],category:[],pageItems:10,tempProduct:{},isNew:!1,delItem:{},isLoading:!1,specialText:0}},components:{ProductModal:Ut,DelModal:Mt.Z,PaginationModel:$t.Z},inject:["emitter","$httpMessageState"],watch:{products(){this.products.forEach((t=>{this.category.includes(t.category)||this.category.push(t.category)}))}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/cong-ren/admin/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.products=Object.values(t.data.products),this.filtProducts(this.pagination.current_page))})).catch((t=>{console.log(t)}))},openModal(t,e){t?this.tempProduct={imagesUrl:[],header:"新增產品"}:(this.tempProduct={...e},this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.header="編輯產品"),this.isNew=t;const a=this.$refs.productModal;a.showModal()},openDelModal(t){this.delItem=t;const e=this.$refs.delModal;e.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/cong-ren/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/product/${t.id}`,a="put");const s=this.$refs.productModal;this.isLoading=!0,this.$http[a](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,t.data.success?(s.hideModal(),this.$httpMessageState("success","更新成功",t.data.message),this.getProducts()):this.$httpMessageState("warning","更新失敗",t.data.message)})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},deleteProduct(){const t=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/product/${this.delItem.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{if(this.isLoading=!1,t.data.success){const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState("success","刪除成功",t.data.message),this.getProducts()}else this.$httpMessageState("warning","刪除失敗",t.data.message)})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},textCheck(){const t=this.searchText.replace(/[`~!@#$%^&*()+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"");t!==this.searchText?this.specialText=1:(this.specialText=0,this.filtProducts(1))}},created(){this.getProducts()},mixins:[Ct.Z]};const Lt=(0,xt.Z)(Dt,[["render",k]]);var It=Lt}}]);
//# sourceMappingURL=537.b48e5274.js.map