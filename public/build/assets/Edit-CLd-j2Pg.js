import{k as y,o as n,f as d,a,u as o,w as s,F as f,b as t,e as g,i as _,l as b,t as x,g as h}from"./app-Bwiy7obe.js";import{_ as k}from"./AuthenticatedLayout-BM_gHPWl.js";import{u as v,H as w}from"./index-DAkDzHkl.js";import"./ApplicationLogo-CVMilIUd.js";import"./logo-horizontal-11rXcX34.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C=t("div",{class:"flex justify-between"},[t("h2",{class:"font-semibold text-xl text-primary-500 leading-tight"},"Edit Category")],-1),D={class:"py-12 overflow-auto"},S={class:"bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]"},E={class:"w-full text-gray-700 text-xl font-semibold p-5"},N={class:"mt-4"},V=t("label",{for:"nama_kategori",class:"block font-medium text-sm text-gray-700"},"Nama Kategori",-1),j={key:0,class:"text-red-600",role:"alert"},q=t("button",{type:"submit",class:"px-3 py-2 bg-primary-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-primary-600 focus:outline-none focus:bg-primary-600"},"Save",-1),T={__name:"Edit",props:{category:{type:Array,required:!0},data:{type:Object,required:!0}},setup(l){const r=l,e=v({nama_kategori:r.data.nama_kategori}),c=()=>{e.put(route("category.update",r.data.id),e.data,{onSuccess:()=>{alert("Data updated successfully.")}})},u=()=>{confirm("Are you sure you want to delete this category?")&&e.delete(route("category.destroy",r.data.id),{onSuccess:()=>{alert("Data deleted successfully.")}})};return(B,i)=>{const m=y("n-card");return n(),d(f,null,[a(o(w),{title:"Edit Category"}),a(k,null,{header:s(()=>[C]),default:s(()=>[t("div",D,[a(m,{class:"bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]",hoverable:""},{default:s(()=>[t("div",S,[t("div",E,[t("form",{onSubmit:g(c,["prevent"])},[t("div",N,[V,_(t("input",{id:"nama_produk","onUpdate:modelValue":i[0]||(i[0]=p=>o(e).nama_kategori=p),type:"text",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50",required:"",autofocus:"",autocomplete:"nama_kategori"},null,512),[[b,o(e).nama_kategori]]),o(e).errors.nama_kategori?(n(),d("span",j,x(o(e).errors.nama_kategori),1)):h("",!0)]),t("div",{class:"flex items-center justify-end mt-6"},[t("button",{type:"button",onClick:u,class:"px-3 py-2 bg-red-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3"},"Delete"),q])],32)])])]),_:1})])]),_:1})],64)}}};export{T as default};
