import{a7 as S,s as w,bV as C,g as f,i as c,an as x,j as h,d as k,h as o,bf as $,as as N,u as T,w as v,z as j,aD as R,c as m,r as B,bW as I,aM as O,B as V,ae as W}from"./index-DXdFuH5K.js";function K(){const e=w(C,null);return e===null&&S("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const P=f([f("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",`
 position: relative;
 `,[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[x()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),E={small:20,medium:18,large:16},M=Object.assign(Object.assign({},v.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),_=k({name:"Spin",props:M,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=T(e),t=v("Spin","-spin",P,I,e,r),d=m(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:a},self:p}=t.value,{opacitySpinning:g,color:y,textColor:b}=p,z=typeof n=="number"?O(n):p[V("size",n)];return{"--n-bezier":a,"--n-opacity-spinning":g,"--n-size":z,"--n-color":y,"--n-text-color":b}}),i=s?j("spin",m(()=>{const{size:n}=e;return typeof n=="number"?String(n):n[0]}),d,e):void 0,u=W(e,["spinning","show"]),l=B(!1);return R(n=>{let a;if(u.value){const{delay:p}=e;if(p){a=window.setTimeout(()=>{l.value=!0},p),n(()=>{clearTimeout(a)});return}}l.value=u.value}),{mergedClsPrefix:r,active:l,mergedStrokeWidth:m(()=>{const{strokeWidth:n}=e;if(n!==void 0)return n;const{size:a}=e;return E[typeof a=="number"?"medium":a]}),cssVars:s?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,r;const{$slots:s,mergedClsPrefix:t,description:d}=this,i=s.icon&&this.rotate,u=(d||s.description)&&o("div",{class:`${t}-spin-description`},d||((e=s.description)===null||e===void 0?void 0:e.call(s))),l=s.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:s.default?"":this.cssVars},s.icon()),u):o("div",{class:[`${t}-spin-body`,this.themeClass]},o($,{clsPrefix:t,style:s.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),u);return(r=this.onRender)===null||r===void 0||r.call(this),s.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`,this.contentClass],style:this.contentStyle},s),o(N,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{_ as N,K as u};
