import{d as k,u as y,r as i,c as p,a,o as r,e as o,A as E,f as l,aT as d,h as _,bM as U,bN as w,E as A,D as b}from"./index-BrK2nRcc.js";import{E as x,_ as C}from"./_plugin-vue_export-helper-CHYzevpX.js";import{E as S}from"./el-progress-C5o6IifT.js";import{P as h}from"./PageContainer-DLmR2O10.js";import"./el-message-Kc6R7lWJ.js";import"./isEqual-_-sTB4rn.js";const B=["src"],R=k({__name:"UserAvatar",setup(L){const c=y(),t=i(c.user.user_pic),n=i(),f=s=>{const e=new FileReader;e.readAsDataURL(s.raw),e.onload=()=>{t.value=e.result}},m=async()=>{const s=await w(t.value);await c.getUser(),A.success(s.data.message)};return(s,e)=>{const v=b,g=S,u=x;return r(),p(h,{title:"更换头像"},{default:a(()=>[o(g,{ref_key:"upLoadRef",ref:n,"auto-upload":!1,class:"avatar-uploader","show-file-list":!1,"on-change":f},{default:a(()=>[t.value?(r(),E("img",{key:0,src:t.value,class:"avatar"},null,8,B)):(r(),p(v,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[o(l(d))]),_:1}))]),_:1},512),o(u,{type:"primary",icon:l(d),size:"large",onClick:e[0]||(e[0]=N=>n.value.$el.querySelector("input").click())},{default:a(()=>[_("选择图片")]),_:1},8,["icon"]),o(u,{type:"success",icon:l(U),size:"large",onClick:m},{default:a(()=>[_("上传图片")]),_:1},8,["icon"])]),_:1})}}}),T=C(R,[["__scopeId","data-v-fecedb5b"]]);export{T as default};