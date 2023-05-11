"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[133],{4612:function(t,e,s){s(7658);e["Z"]={data(){return{filtedProducts:[],pagination:{total_pages:"",current_page:1,has_pre:!1,has_next:!1},filter:"",searchText:""}},methods:{filtProducts(t=1){""===this.filter?this.filtedProducts=this.products.filter((t=>t.title.match(this.searchText))):(this.filtedProducts=this.products.filter((t=>t.category===this.filter)),this.filtedProducts=this.filtedProducts.filter((t=>t.title.match(this.searchText)))),"previous"===t?this.pagination.current_page-=1:"next"===t?this.pagination.current_page+=1:this.pagination.current_page=1===t?1:t,this.pagination.total_pages=Math.ceil(this.filtedProducts.length/this.pageItems),1===this.pagination.current_page?(this.pagination.has_pre=!1,this.pagination.has_next=!0,1===this.pagination.total_pages&&(this.pagination.has_next=!1)):this.pagination.current_page===this.pagination.total_pages?(this.pagination.has_next=!1,this.pagination.has_pre=!0):(this.pagination.has_next=!0,this.pagination.has_pre=!0);const e=[],s=this.pagination.current_page;this.filtedProducts.forEach(((t,a)=>{a<=s*this.pageItems-1&&a>=s*this.pageItems-this.pageItems&&e.push(t)})),this.filtedProducts=e}}}},133:function(t,e,s){s.r(e),s.d(e,{default:function(){return It}});var a=s(3396),l=s(7139),i=s(9242);const o={class:"row g-3 mt-3 justify-content-end"},c={class:"col-sm-2"},n=(0,a._)("option",{value:"",selected:""},"全部",-1),r=["value"],d={class:"col-sm-2 ms-3"},p={class:"col-sm-3"},u=(0,a._)("i",{class:"bi bi-plus"},null,-1),h=(0,a._)("h2",{class:"text-center d-sm-none mt-3"},"產品列表",-1),m={class:"overflow-auto"},g={class:"table mt-3"},_=(0,a._)("thead",{class:"text-nowrap"},[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",null,"產品名稱"),(0,a._)("th",{width:"120"},"原價"),(0,a._)("th",{width:"120"},"售價"),(0,a._)("th",{width:"100"},"商品狀態"),(0,a._)("th",{width:"200"},"編輯")])],-1),b={class:"text-right"},f={class:"text-right"},w={key:0,class:"text-success"},y={key:1,class:"text-danger"},P={class:"btn-group w-100"},v=["onClick"],x=["onClick"];function k(t,e,s,k,U,M){const $=(0,a.up)("LoadingOverlay"),D=(0,a.up)("PaginationModel"),C=(0,a.up)("ProductModal"),L=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)($,{active:U.isLoading},null,8,["active"]),(0,a._)("div",o,[(0,a._)("div",c,[(0,a.wy)((0,a._)("select",{class:"form-select w-100","aria-label":"Category","onUpdate:modelValue":e[0]||(e[0]=e=>t.filter=e),onChange:e[1]||(e[1]=e=>t.filtProducts(1))},[n,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(U.category,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:t},(0,l.zw)(t),9,r)))),128))],544),[[i.bM,t.filter]])]),(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"搜尋商品名稱","aria-label":"serach text","aria-describedby":"serach product","onUpdate:modelValue":e[2]||(e[2]=e=>t.searchText=e),onChange:e[3]||(e[3]=t=>M.textCheck())},null,544),[[i.nr,t.searchText]]),(0,a._)("span",{class:"text-danger d-block text-center mb-3",style:(0,l.j5)({opacity:U.specialText})},"請勿輸入特殊字元",4)]),(0,a._)("div",p,[(0,a._)("button",{type:"button",class:"btn btn-primary w-100",onClick:e[4]||(e[4]=t=>M.openModal(!0))},[u,(0,a.Uk)("新增產品")])])]),h,(0,a._)("div",m,[(0,a._)("table",g,[_,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.filtedProducts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,l.zw)(e.category),1),(0,a._)("td",null,(0,l.zw)(e.title),1),(0,a._)("td",b,(0,l.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",f,(0,l.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",w,"上架")):((0,a.wg)(),(0,a.iD)("span",y,"未上架"))]),(0,a._)("td",null,[(0,a._)("div",P,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm text-nowrap",onClick:t=>M.openModal(!1,e)},"編輯",8,v),(0,a._)("button",{class:"btn btn-outline-danger btn-sm text-nowrap",onClick:t=>M.openDelModal(e)},"刪除",8,x)])])])))),128))])])]),(0,a.Wm)(D,{pages:t.pagination,onEmitPages:t.filtProducts},null,8,["pages","onEmitPages"]),(0,a.Wm)(C,{ref:"productModal",product:U.tempProduct,onUpdateProduct:M.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(L,{ref:"delModal",item:U.delItem,onDelItem:M.deleteProduct},null,8,["item","onDelItem"])],64)}s(7658);const U={class:"modal fade",ref:"modal"},M={class:"modal-dialog modal-xl",role:"document"},$={class:"modal-content border-0"},D={class:"modal-header bg-danger text-white"},C={class:"modal-title",id:"exampleModalLabel"},L=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},S={class:"row"},T={class:"col-sm-4"},V=(0,a._)("h5",null,"商品封面",-1),j={key:0,class:"mb-3 img-box"},F={class:"form-label w-100",for:"img-url"},O={class:"mb-3"},Z={for:"customFile",class:"form-label w-100"},z=(0,a._)("i",{class:"fas fa-spinner fa-spin"},null,-1),W={class:"my-3"},E=(0,a._)("h5",null,"商品參考圖",-1),H={class:"input-group mb-3"},Y=["disabled"],K={class:"input-group mb-3"},N={type:"file",class:"form-control","aria-label":"imageFile",ref:"otherFile"},B={class:"row g-2 justify-content-center"},q={class:"img-box"},A=["onClick"],G=(0,a._)("i",{class:"bi bi-x"},null,-1),J=[G],Q={class:"col-sm-8"},R={for:"title",class:"form-label w-100"},X={class:"row gx-2"},tt={class:"col-md-6"},et={for:"category",class:"form-label w-100"},st={class:"col-md-6"},at={for:"price",class:"form-label w-100"},lt={class:"row gx-2"},it={class:"col-md-6"},ot={for:"origin_price",class:"form-label w-100"},ct={class:"col-md-6"},nt={for:"price",class:"form-label w-100"},rt=(0,a._)("hr",null,null,-1),dt={for:"description",class:"form-label w-100"},pt={for:"content",class:"form-label w-100"},ut={class:"mb-3 d-flex"},ht=(0,a._)("div",null,[(0,a._)("p",{class:"mb-0"},"商品狀態 : ")],-1),mt={class:"form-check form-switch ms-2"},gt={class:"form-check-label",for:"flexSwitchCheckDefault"},_t={key:0,class:"text-success"},bt={key:1,class:"text-danger"},ft={class:"modal-footer"},wt=(0,a._)("button",{type:"button",class:"btn btn-lg btn-outline-secondary d-block","data-bs-dismiss":"modal"},"取消 ",-1);function yt(t,e,s,o,c,n){const r=(0,a.up)("LoadingOverlay");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(r,{active:c.isLoading},null,8,["active"]),(0,a._)("div",M,[(0,a._)("div",$,[(0,a._)("div",D,[(0,a._)("h5",C,[(0,a._)("span",null,(0,l.zw)(c.tempProduct.header),1)]),L]),(0,a._)("div",I,[(0,a._)("div",S,[(0,a._)("div",T,[V,c.tempProduct.imageUrl?((0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",{class:"bg-img",style:(0,l.j5)({"background-image":"url("+c.tempProduct.imageUrl+")"})},null,4)])):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a._)("label",F,[(0,a.Uk)("圖片網址 : "),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",id:"img-url","onUpdate:modelValue":e[0]||(e[0]=t=>c.tempProduct.imageUrl=t)},null,512),[[i.nr,c.tempProduct.imageUrl]])])]),(0,a._)("div",O,[(0,a._)("label",Z,[z,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"mainFile",onChange:e[1]||(e[1]=t=>n.uploadFile())},null,544)])]),(0,a._)("div",W,[E,(0,a._)("div",H,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片網址","aria-label":"imageUrl","onUpdate:modelValue":e[2]||(e[2]=t=>c.tempImagesUrl=t)},null,512),[[i.nr,c.tempImagesUrl]]),(0,a._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e[3]||(e[3]=t=>n.uploadOthers("url")),disabled:!c.tempImagesUrl},"新增參考圖",8,Y)]),(0,a._)("div",K,[(0,a._)("input",N,null,512),(0,a._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[4]||(e[4]=t=>n.uploadOthers("file"))},"上傳參考圖")]),(0,a._)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.tempProduct.imagesUrl,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-6 col-lg-4 position-relative",key:t},[(0,a._)("div",q,[(0,a._)("div",{class:"bg-img",style:(0,l.j5)({"background-image":"url("+t+")"})},null,4)]),(0,a._)("button",{type:"button",class:"btn btn-danger position-absolute p-0 img-del-btn",onClick:t=>n.delImages(e)},J,8,A)])))),128))])])]),(0,a._)("div",Q,[(0,a._)("div",null,[(0,a._)("label",R,[(0,a.Uk)("標題 (Title) "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=t=>c.tempProduct.title=t)},null,512),[[i.nr,c.tempProduct.title]])])]),(0,a._)("div",X,[(0,a._)("div",tt,[(0,a._)("label",et,[(0,a.Uk)("分類 (Category) "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=t=>c.tempProduct.category=t)},null,512),[[i.nr,c.tempProduct.category]])])]),(0,a._)("div",st,[(0,a._)("label",at,[(0,a.Uk)("單位 (Unit) "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=t=>c.tempProduct.unit=t)},null,512),[[i.nr,c.tempProduct.unit]])])])]),(0,a._)("div",lt,[(0,a._)("div",it,[(0,a._)("label",ot,[(0,a.Uk)("原價 (Origin Price) "),(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=t=>c.tempProduct.origin_price=t)},null,512),[[i.nr,c.tempProduct.origin_price]])])]),(0,a._)("div",ct,[(0,a._)("label",nt,[(0,a.Uk)("售價 (Price) "),(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=t=>c.tempProduct.price=t)},null,512),[[i.nr,c.tempProduct.price]])])])]),rt,(0,a._)("div",null,[(0,a._)("label",dt,[(0,a.Uk)("產品描述 "),(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=t=>c.tempProduct.description=t)},null,512),[[i.nr,c.tempProduct.description]])])]),(0,a._)("div",null,[(0,a._)("label",pt,[(0,a.Uk)("說明內容 "),(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[11]||(e[11]=t=>c.tempProduct.content=t)},null,512),[[i.nr,c.tempProduct.content]])])]),(0,a._)("div",ut,[ht,(0,a._)("div",mt,[(0,a._)("label",gt,[c.tempProduct.is_enabled?((0,a.wg)(),(0,a.iD)("span",_t,"上架")):((0,a.wg)(),(0,a.iD)("span",bt,"未上架")),(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","aria-checked":"",role:"switch",id:"flexSwitchCheckDefault","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=t=>c.tempProduct.is_enabled=t)},null,512),[[i.e8,c.tempProduct.is_enabled]])])])])])])]),(0,a._)("div",ft,[wt,(0,a._)("button",{type:"button",class:"btn btn-lg btn-danger w-50",onClick:e[13]||(e[13]=e=>t.$emit("update-product",c.tempProduct))},"確認")])])])],512)}var Pt=s(1339),vt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{},tempImagesUrl:"",isLoading:!1}},methods:{uploadFile(){const t=this.$refs.mainFile.files[0],e=new FormData;e.append("file-to-upload",t),this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/api/cong-ren/admin/upload";this.$http.post(s,e).then((t=>{this.isLoading=!1,t.data.success?(this.tempProduct.imageUrl=t.data.imageUrl,this.$httpMessageState("success","主商品圖上傳成功","新增參考圖，可以提升消費者的購買意願喔 !")):this.$httpMessageState("warning","主商品圖上傳失敗","檔案必須小於 1MB 且為圖片格式")})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},uploadOthers(t){if(this.tempProduct.imagesUrl.length>=5)this.$httpMessageState("warning","參考圖數量限制","商品參考圖最多5張，請刪除先刪除不要的圖片。");else if("url"===t)this.tempProduct.imagesUrl.push(this.tempImagesUrl),this.tempImagesUrl="";else{const t=this.$refs.otherFile.files[0],e=new FormData;e.append("file-to-upload",t);const s="https://vue3-course-api.hexschool.io/api/cong-ren/admin/upload";this.isLoading=!0,this.$http.post(s,e).then((t=>{this.isLoading=!1,t.data.success?(this.tempProduct.imagesUrl.push(t.data.imageUrl),this.$httpMessageState("success","上傳參考圖成功","繼續新增完善商品吧 !")):this.$httpMessageState("warning","上傳參考圖失敗","檔案必須小於 1MB 且為圖片格式")})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))}},delImages(t){this.tempProduct.imagesUrl.splice(t,1)}},mixins:[Pt.Z],inject:["$httpMessageState"]},xt=s(89);const kt=(0,xt.Z)(vt,[["render",yt]]);var Ut=kt,Mt=s(4798),$t=s(5239),Dt=s(4612),Ct={data(){return{products:[],category:[],pageItems:10,tempProduct:{},isNew:!1,delItem:{},isLoading:!1,specialText:0}},components:{ProductModal:Ut,DelModal:Mt.Z,PaginationModel:$t.Z},inject:["emitter","$httpMessageState"],watch:{products(){this.products.forEach((t=>{this.category.includes(t.category)||this.category.push(t.category)}))}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/cong-ren/admin/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.products=Object.values(t.data.products),this.filtProducts())})).catch((t=>{console.log(t)}))},openModal(t,e){t?this.tempProduct={imagesUrl:[],header:"新增產品"}:(this.tempProduct={...e},this.tempProduct.header="編輯產品"),this.isNew=t;const s=this.$refs.productModal;s.showModal()},openDelModal(t){this.delItem=t;const e=this.$refs.delModal;e.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/cong-ren/admin/product",s="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/product/${t.id}`,s="put");const a=this.$refs.productModal;this.isLoading=!0,this.$http[s](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,t.data.success?(a.hideModal(),this.$httpMessageState("success","更新成功",t.data.message),this.getProducts()):this.$httpMessageState("warning","更新失敗",t.data.message)})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},deleteProduct(){const t=`https://vue3-course-api.hexschool.io/api/cong-ren/admin/product/${this.delItem.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{if(this.isLoading=!1,t.data.success){const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState("success","刪除成功",t.data.message),this.getProducts()}else this.$httpMessageState("warning","刪除失敗",t.data.message)})).catch((()=>{this.isLoading=!1,this.$httpMessageState("danger","發生錯誤","請洽工程師。")}))},textCheck(){const t=this.searchText.replace(/[`~!@#$%^&*()+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"");t!==this.searchText?this.specialText=1:(this.specialText=0,this.filtProducts(1))}},created(){this.getProducts()},mixins:[Dt.Z]};const Lt=(0,xt.Z)(Ct,[["render",k]]);var It=Lt}}]);
//# sourceMappingURL=133.f85038f6.js.map