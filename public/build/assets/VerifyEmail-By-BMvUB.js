import{T as m,h as f,o as a,c as p,w as s,a as o,u as e,Z as g,f as y,g as h,b as i,d as n,n as _,j as v,e as b}from"./app-DLipwTqR.js";import{_ as x}from"./GuestLayout-DZCBh2Gv.js";import{P as k}from"./PrimaryButton-DsJYns1F.js";import"./ApplicationLogo-BHFQQyHS.js";import"./logo-horizontal-11rXcX34.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B={class:"mt-4 flex items-center justify-between"},P={__name:"VerifyEmail",props:{status:{type:String}},setup(r){const c=r,t=m({}),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(u,E)=>(a(),p(x,null,{default:s(()=>[o(e(g),{title:"Email Verification"}),w,l.value?(a(),y("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:b(d,["prevent"])},[i("div",B,[o(k,{class:_({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(v),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}};export{P as default};