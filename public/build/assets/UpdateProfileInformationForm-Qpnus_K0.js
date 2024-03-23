import{Q as g,T as y,o as r,f as m,b as s,a,u as e,d as n,w as u,i as b,bw as w,g as h,J as x,e as _,j as V}from"./app-Bwiy7obe.js";import{a as d,b as c,_ as p}from"./TextInput-BTPtLPXc.js";import{P as N}from"./PrimaryButton-C620aUhy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),S={key:0},B={class:"text-sm mt-2 text-gray-800"},U={class:"mt-2 font-medium text-sm text-green-600"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},A={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(f){const i=g().props.auth.user,t=y({name:i.name,whatsappNumber:i.whatsappNumber,email:i.email});return(v,o)=>(r(),m("section",null,[k,s("form",{onSubmit:o[3]||(o[3]=_(l=>e(t).patch(v.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(p,{for:"name",value:"Name"}),a(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(c,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(p,{for:"whatsappNumber",value:"WhatsApp"}),a(d,{id:"whatsappNumber",type:"text",class:"mt-1 block w-full",modelValue:e(t).whatsappNumber,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).whatsappNumber=l),required:"",autofocus:"",autocomplete:"whatsappNumber"},null,8,["modelValue"]),a(c,{class:"mt-2",message:e(t).errors.whatsappNumber},null,8,["message"])]),s("div",null,[a(p,{for:"email",value:"Email"}),a(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(c,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),f.mustVerifyEmail&&e(i).email_verified_at===null?(r(),m("div",S,[s("p",B,[n(" Your email address is unverified. "),a(e(V),{href:v.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[n(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),b(s("div",U," A new verification link has been sent to your email address. ",512),[[w,f.status==="verification-link-sent"]])])):h("",!0),s("div",E,[a(N,{disabled:e(t).processing},{default:u(()=>[n("Save")]),_:1},8,["disabled"]),a(x,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[e(t).recentlySuccessful?(r(),m("p",P,"Saved.")):h("",!0)]),_:1})])],32)]))}};export{A as default};