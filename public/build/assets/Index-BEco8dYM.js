import{_ as u}from"./AuthenticatedLayout-uih4CKc5.js";import{u as x,H as y}from"./index-BGf8_dd-.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{k as f,o as s,f as a,a as d,u as w,w as c,F as i,b as e,m as g,t as r,p as k,q as v}from"./app-DjTz81bF.js";import"./ApplicationLogo-Bwj_jaFn.js";import"./logo-horizontal-11rXcX34.js";const n=t=>(k("data-v-a99dac60"),t=t(),v(),t),F=n(()=>e("div",{class:"flex justify-between"},[e("h2",{class:"font-semibold text-xl text-primary-500 leading-tight"},"Feedback")],-1)),I={class:"py-12 overflow-auto"},S={class:"bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]"},C={class:"w-full text-gray-700 text-xl font-semibold"},N={class:"table-auto w-full border border-collapse border-primary-300 rounded-lg overflow-hidden"},A=n(()=>e("thead",{class:"bg-primary"},[e("tr",{class:"text-left"},[e("th",{class:"px-4 py-2 text-white font-bold whitespace-nowrap"},"Nama"),e("th",{class:"px-4 py-2 text-white font-bold whitespace-nowrap"},"Email"),e("th",{class:"px-4 py-2 text-white font-bold whitespace-nowrap"},"No. Handphone"),e("th",{class:"px-4 py-2 text-white font-bold whitespace-nowrap"},"Pesan"),e("th",{class:"px-4 py-2 text-white font-bold whitespace-nowrap"},"Actions")])],-1)),B={class:"px-4 py-2"},D={class:"px-4 py-2"},H={class:"px-4 py-2"},q={class:"px-4 py-2"},E={class:"px-4 py-2"},V=["onClick"],$={key:1},j=n(()=>e("td",{colspan:"5",class:"text-center py-5 text-gray-700"},"Tidak ada data Feedback.",-1)),L=[j],P={__name:"Index",props:{feedback:{type:Array,required:!0}},setup(t){const p=x(),_=l=>{confirm("Are you sure you want to delete this feedback?")&&p.delete(route("feedback.destroy",l),{onSuccess:()=>{alert("Data deleted successfully.")}})};return(l,T)=>{const h=f("n-card");return s(),a(i,null,[d(w(y),{title:"Feedback"}),d(u,null,{header:c(()=>[F]),default:c(()=>[e("div",I,[d(h,{class:"bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]",hoverable:""},{default:c(()=>[e("div",S,[e("div",C,[e("table",N,[A,e("tbody",null,[t.feedback.length>0?(s(!0),a(i,{key:0},g(t.feedback,(o,m)=>(s(),a("tr",{key:m,class:"border border-primary-300"},[e("td",B,r(o.name),1),e("td",D,r(o.email),1),e("td",H,r(o.phone),1),e("td",q,r(o.message),1),e("td",E,[e("button",{type:"button",onClick:z=>_(o.id),class:"px-3 py-2 bg-red-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3"},"Delete",8,V)])]))),128)):(s(),a("tr",$,L))])])])])]),_:1})])]),_:1})],64)}}},R=b(P,[["__scopeId","data-v-a99dac60"]]);export{R as default};