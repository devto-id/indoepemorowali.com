import{k as _,o,f as i,a as n,u as r,w as l,F as g,b as e,e as f,g as c,t as x}from"./app-DNw2sNeV.js";import{_ as h}from"./AuthenticatedLayout-DJu6cT4_.js";import{u as b,H as w}from"./index-M_ENctAu.js";import"./ApplicationLogo-BLXMzutV.js";import"./logo-horizontal-11rXcX34.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y=e("div",{class:"flex justify-between"},[e("h2",{class:"font-semibold text-xl text-primary-500 leading-tight"},"Partner")],-1),v={class:"py-12 overflow-auto"},P={class:"bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]"},k={class:"w-full text-gray-700 text-xl font-semibold p-5"},C={class:"mt-4"},F=e("label",{for:"image",class:"block font-medium text-sm text-gray-700"},"Gambar Partner",-1),B=["src"],N={key:1,class:"text-red-600",role:"alert"},S=e("div",{class:"flex items-center justify-end mt-6"},[e("button",{type:"submit",class:"px-3 py-2 bg-primary-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-primary-600 focus:outline-none focus:bg-primary-600"},"Submit")],-1),G={__name:"Form",setup(V){const t=b({image:null,imagePreview:null}),d=()=>{t.post(route("partner.store"))},u=m=>{const a=m.target.files[0];if(a){const s=new FileReader;s.onload=p=>{t.imagePreview=p.target.result},s.readAsDataURL(a),t.image=a}else t.imagePreview=null};return(m,a)=>{const s=_("n-card");return o(),i(g,null,[n(r(w),{title:"Partner"}),n(h,null,{header:l(()=>[y]),default:l(()=>[e("div",v,[n(s,{class:"bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]",hoverable:""},{default:l(()=>[e("div",P,[e("div",k,[e("form",{onSubmit:f(d,["prevent"])},[e("div",C,[F,e("input",{type:"file",id:"image",name:"image",class:"mt-1 block w-full max-h-14",accept:"image/*",onChange:u},null,32),r(t).imagePreview?(o(),i("img",{key:0,src:r(t).imagePreview,alt:"Preview",class:"mt-2 max-w-full h-auto"},null,8,B)):c("",!0),r(t).errors.image?(o(),i("span",N,x(r(t).errors.image),1)):c("",!0)]),S],32)])])]),_:1})])]),_:1})],64)}}};export{G as default};