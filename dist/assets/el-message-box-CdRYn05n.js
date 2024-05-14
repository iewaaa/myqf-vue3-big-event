import{aA as ne,s as Ce,Q as ve,ai as we,R as pe,I as ae,$ as F,S as Be,_ as Me,d as Te,D as Se,aZ as ke,a_ as Ie,z as T,r as $,aa as Ae,a$ as le,w as re,az as Le,X as O,o as f,c as E,a as g,ac as J,e as S,j as b,G as u,B as ie,a5 as Y,A as x,C as q,a3 as V,am as D,aM as G,F as $e,h as _,ad as ee,T as Oe,aE as Ve,H as ge,b0 as be,b1 as ye,b2 as ue,aj as ze,aF as Re,b3 as de}from"./index-BrK2nRcc.js";import{E as Pe,u as ce}from"./_plugin-vue_export-helper-CHYzevpX.js";import{E as De}from"./el-input-DGwWbuLA.js";import{e as Fe,d as He,i as Ne,h as Ue}from"./el-overlay-AZnusUWX.js";const Xe='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Ke=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,fe=e=>Array.from(e.querySelectorAll(Xe)).filter(n=>je(n)&&Ke(n)),je=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},fn=function(e,n,...o){let s;n.includes("mouse")||n.includes("click")?s="MouseEvents":n.includes("key")?s="KeyboardEvent":s="HTMLEvents";const a=document.createEvent(s);return a.initEvent(n,...o),e.dispatchEvent(a),e},mn=(...e)=>n=>{e.forEach(o=>{ne(o)?o(n):o.value=n})},Ye=e=>["",...Ce].includes(e),qe=(e,n,o,s)=>{let a={offsetX:0,offsetY:0};const l=m=>{const t=m.clientX,R=m.clientY,{offsetX:C,offsetY:r}=a,I=e.value.getBoundingClientRect(),N=I.left,v=I.top,U=I.width,w=I.height,A=document.documentElement.clientWidth,X=document.documentElement.clientHeight,W=-N+C,Z=-v+r,Q=A-N-U+C,B=X-v-w+r,P=j=>{let p=C+j.clientX-t,M=r+j.clientY-R;s!=null&&s.value||(p=Math.min(Math.max(p,W),Q),M=Math.min(Math.max(M,Z),B)),a={offsetX:p,offsetY:M},e.value&&(e.value.style.transform=`translate(${ae(p)}, ${ae(M)})`)},K=()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",K)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",K)},d=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",l)},c=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",l)};ve(()=>{we(()=>{o.value?d():c()})}),pe(()=>{c()})},te="_trap-focus-children",k=[],me=e=>{if(k.length===0)return;const n=k[k.length-1][te];if(n.length>0&&e.code===Be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,s=e.target===n[0],a=e.target===n[n.length-1];s&&o&&(e.preventDefault(),n[n.length-1].focus()),a&&!o&&(e.preventDefault(),n[0].focus())}},Ge={beforeMount(e){e[te]=fe(e),k.push(e),k.length<=1&&document.addEventListener("keydown",me)},updated(e){F(()=>{e[te]=fe(e)})},unmounted(){k.shift(),k.length===0&&document.removeEventListener("keydown",me)}},We=Te({name:"ElMessageBox",directives:{TrapFocus:Ge},components:{ElButton:Pe,ElFocusTrap:Fe,ElInput:De,ElOverlay:He,ElIcon:Se,...ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Ye},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:o,zIndex:s,ns:a,size:l}=Ie("message-box",T(()=>e.buttonSize)),{t:d}=o,{nextZIndex:c}=s,m=$(!1),t=Ae({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),R=T(()=>{const i=t.type;return{[a.bm("icon",i)]:i&&le[i]}}),C=ce(),r=ce(),I=T(()=>t.icon||le[t.type]||""),N=T(()=>!!t.message),v=$(),U=$(),w=$(),A=$(),X=$(),W=T(()=>t.confirmButtonClass);re(()=>t.inputValue,async i=>{await F(),e.boxType==="prompt"&&i!==null&&M()},{immediate:!0}),re(()=>m.value,i=>{var y,L;i&&(e.boxType!=="prompt"&&(t.autofocus?w.value=(L=(y=X.value)==null?void 0:y.$el)!=null?L:v.value:w.value=v.value),t.zIndex=c()),e.boxType==="prompt"&&(i?F().then(()=>{var se;A.value&&A.value.$el&&(t.autofocus?w.value=(se=Ee())!=null?se:v.value:w.value=v.value)}):(t.editorErrorMessage="",t.validateError=!1))});const Z=T(()=>e.draggable),Q=T(()=>e.overflow);qe(v,U,Z,Q),ve(async()=>{await F(),e.closeOnHashChange&&window.addEventListener("hashchange",B)}),pe(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",B)});function B(){m.value&&(m.value=!1,F(()=>{t.action&&n("action",t.action)}))}const P=()=>{e.closeOnClickModal&&p(t.distinguishCancelAndClose?"close":"cancel")},K=Ue(P),j=i=>{if(t.inputType!=="textarea")return i.preventDefault(),p("confirm")},p=i=>{var y;e.boxType==="prompt"&&i==="confirm"&&!M()||(t.action=i,t.beforeClose?(y=t.beforeClose)==null||y.call(t,i,t,B):B())},M=()=>{if(e.boxType==="prompt"){const i=t.inputPattern;if(i&&!i.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;const y=t.inputValidator;if(typeof y=="function"){const L=y(t.inputValue);if(L===!1)return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;if(typeof L=="string")return t.editorErrorMessage=L,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ee=()=>{const i=A.value.$refs;return i.input||i.textarea},oe=()=>{p("close")},he=()=>{e.closeOnPressEscape&&oe()};return e.lockScroll&&Ne(m),{...Le(t),ns:a,overlayEvent:K,visible:m,hasMessage:N,typeClass:R,contentId:C,inputId:r,btnSize:l,iconComponent:I,confirmButtonClasses:W,rootRef:v,focusStartRef:w,headerRef:U,inputRef:A,confirmRef:X,doClose:B,handleClose:oe,onCloseRequested:he,handleWrapperClick:P,handleInputEnter:j,handleAction:p,t:d}}}),Ze=["aria-label","aria-describedby"],Qe=["aria-label"],Je=["id"];function xe(e,n,o,s,a,l){const d=O("el-icon"),c=O("close"),m=O("el-input"),t=O("el-button"),R=O("el-focus-trap"),C=O("el-overlay");return f(),E(Oe,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=r=>e.$emit("vanish")),persisted:""},{default:g(()=>[J(S(C,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:g(()=>[b("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:u(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...r)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...r)),onMousedown:n[9]||(n[9]=(...r)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...r)),onMouseup:n[10]||(n[10]=(...r)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...r))},[S(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:g(()=>[b("div",{ref:"rootRef",class:u([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ie(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=Y(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),x("div",{key:0,ref:"headerRef",class:u([e.ns.e("header"),{"show-close":e.showClose}])},[b("div",{class:u(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),E(d,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(f(),E(q(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),b("span",null,D(e.title),1)],2),e.showClose?(f(),x("button",{key:0,type:"button",class:u(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=G(Y(r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[S(d,{class:u(e.ns.e("close"))},{default:g(()=>[S(c)]),_:1},8,["class"])],42,Qe)):V("v-if",!0)],2)):V("v-if",!0),b("div",{id:e.contentId,class:u(e.ns.e("content"))},[b("div",{class:u(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),E(d,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(f(),E(q(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),e.hasMessage?(f(),x("div",{key:1,class:u(e.ns.e("message"))},[$e(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),E(q(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),E(q(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:g(()=>[_(D(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):V("v-if",!0)],2),J(b("div",{class:u(e.ns.e("input"))},[S(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=r=>e.inputValue=r),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:u({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),b("div",{class:u(e.ns.e("errormsg")),style:ie({visibility:e.editorErrorMessage?"visible":"hidden"})},D(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],10,Je),b("div",{class:u(e.ns.e("btns"))},[e.showCancelButton?(f(),E(t,{key:0,loading:e.cancelButtonLoading,class:u([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=r=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=G(Y(r=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:g(()=>[_(D(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):V("v-if",!0),J(S(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:u([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=r=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=G(Y(r=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:g(()=>[_(D(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ze)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var _e=Me(We,[["render",xe],["__file","index.vue"]]);const H=new Map,en=e=>{let n=document.body;return e.appendTo&&(ge(e.appendTo)&&(n=document.querySelector(e.appendTo)),de(e.appendTo)&&(n=e.appendTo),de(n)||(n=document.body)),n},nn=(e,n,o=null)=>{const s=S(_e,e,ne(e.message)||be(e.message)?{default:ne(e.message)?e.message:()=>e.message}:null);return s.appContext=o,ye(s,n),en(e).appendChild(n.firstElementChild),s.component},tn=()=>document.createElement("div"),on=(e,n)=>{const o=tn();e.onVanish=()=>{ye(null,o),H.delete(a)},e.onAction=l=>{const d=H.get(a);let c;e.showInput?c={value:a.inputValue,action:l}:c=l,e.callback?e.callback(c,s.proxy):l==="cancel"||l==="close"?e.distinguishCancelAndClose&&l!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const s=nn(e,o,n),a=s.proxy;for(const l in e)ue(e,l)&&!ue(a.$props,l)&&(a[l]=e[l]);return a.visible=!0,a};function z(e,n=null){if(!Ve)return Promise.reject();let o;return ge(e)||be(e)?e={message:e}:o=e.callback,new Promise((s,a)=>{const l=on(e,n??z._context);H.set(l,{options:e,callback:o,resolve:s,reject:a})})}const sn=["alert","confirm","prompt"],an={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};sn.forEach(e=>{z[e]=ln(e)});function ln(e){return(n,o,s,a)=>{let l="";return ze(o)?(s=o,l=""):Re(o)?l="":l=o,z(Object.assign({title:l,message:n,type:"",...an[e]},s,{boxType:e}),a)}}z.close=()=>{H.forEach((e,n)=>{n.doClose()}),H.clear()};z._context=null;const h=z;h.install=e=>{h._context=e._context,e.config.globalProperties.$msgbox=h,e.config.globalProperties.$messageBox=h,e.config.globalProperties.$alert=h.alert,e.config.globalProperties.$confirm=h.confirm,e.config.globalProperties.$prompt=h.prompt};const vn=h;export{vn as E,mn as c,fn as t,qe as u};