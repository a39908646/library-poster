import{i as ft,c as B,o as pt,r as I,v as je,d as L,h as o,u as se,a as Ie,b as Te,e as Ge,p as Oe,t as ae,f as G,g as O,j as y,k as E,l as V,m as ht,n as gt,q as vt,s as le,N as bt,w as mt,x as Ae,y as ie,z as re,A as kt,B as Ee,C as xe,D as xt,E as ge,F as te,G as yt,H as ye,V as wt,I as Le,J as Ct,K as St,L as $t,M as we,O as Rt,P as Ve,Q as We,W as Fe,R as Ue,S as qe,T as _t,U as J,X as zt,Y as Nt,Z as A,_ as Q,$ as Y,a0 as He,a1 as Bt,a2 as H,a3 as p,a4 as a,a5 as Z,a6 as K,a7 as h,a8 as ve,a9 as q,aa as Ce,ab as X,ac as T,ad as F,ae as Se,af as $e,ag as be,ah as oe,ai as Re}from"./index-D9ClbKiL.js";import{u as Pt}from"./use-message-COH_f0X2.js";import{N as Dt}from"./Spin-QnsRd-BB.js";import{R as _e,N as Mt,a as jt}from"./RefreshOutline-BMLM5AmV.js";import{N as ze,a as Ne,b as It}from"./Thing-B_cl8MzG.js";import{N as Tt,a as Gt,b as Be,c as Ot}from"./FormItem-C1ZGp56x.js";import{N as At}from"./Select-BrvHvnHV.js";import{N as Et,a as fe,b as me}from"./text-_LmCWHMF.js";function Lt(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(n=>{if(n==="")return;const[f,c]=n.split(":");c===void 0?t[""]=f:t[f]=c}),t}function ee(e,t){var n;if(e==null)return;const f=Lt(e);if(t===void 0)return f[""];if(typeof t=="string")return(n=f[t])!==null&&n!==void 0?n:f[""];if(Array.isArray(t)){for(let c=t.length-1;c>=0;--c){const l=t[c];if(l in f)return f[l]}return f[""]}else{let c,l=-1;return Object.keys(f).forEach(r=>{const i=Number(r);!Number.isNaN(i)&&t>=i&&i>=l&&(l=i,c=f[r])}),c}}const Vt={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Wt(e){return`(min-width: ${e}px)`}const ne={};function Ft(e=Vt){if(!ft)return B(()=>[]);if(typeof window.matchMedia!="function")return B(()=>[]);const t=I({}),n=Object.keys(e),f=(c,l)=>{c.matches?t.value[l]=!0:t.value[l]=!1};return n.forEach(c=>{const l=e[c];let r,i;ne[l]===void 0?(r=window.matchMedia(Wt(l)),r.addEventListener?r.addEventListener("change",k=>{i.forEach(d=>{d(k,c)})}):r.addListener&&r.addListener(k=>{i.forEach(d=>{d(k,c)})}),i=new Set,ne[l]={mql:r,cbs:i}):(r=ne[l].mql,i=ne[l].cbs),i.add(f),r.matches&&i.forEach(k=>{k(r,c)})}),pt(()=>{n.forEach(c=>{const{cbs:l}=ne[e[c]];l.has(f)&&l.delete(f)})}),B(()=>{const{value:c}=t;return n.filter(l=>c[l])})}function Ut(e){var t;const n=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:f})=>f===je);return!!(n&&n.value===!1)}const Xe=Ge("n-checkbox-group"),qt={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ht=L({name:"CheckboxGroup",props:qt,setup(e){const{mergedClsPrefixRef:t}=se(e),n=Ie(e),{mergedSizeRef:f,mergedDisabledRef:c}=n,l=I(e.defaultValue),r=B(()=>e.value),i=Te(r,l),k=B(()=>{var C;return((C=i.value)===null||C===void 0?void 0:C.length)||0}),d=B(()=>Array.isArray(i.value)?new Set(i.value):new Set);function $(C,s){const{nTriggerFormInput:v,nTriggerFormChange:m}=n,{onChange:u,"onUpdate:value":_,onUpdateValue:S}=e;if(Array.isArray(i.value)){const g=Array.from(i.value),z=g.findIndex(P=>P===s);C?~z||(g.push(s),S&&G(S,g,{actionType:"check",value:s}),_&&G(_,g,{actionType:"check",value:s}),v(),m(),l.value=g,u&&G(u,g)):~z&&(g.splice(z,1),S&&G(S,g,{actionType:"uncheck",value:s}),_&&G(_,g,{actionType:"uncheck",value:s}),u&&G(u,g),l.value=g,v(),m())}else C?(S&&G(S,[s],{actionType:"check",value:s}),_&&G(_,[s],{actionType:"check",value:s}),u&&G(u,[s]),l.value=[s],v(),m()):(S&&G(S,[],{actionType:"uncheck",value:s}),_&&G(_,[],{actionType:"uncheck",value:s}),u&&G(u,[]),l.value=[],v(),m())}return Oe(Xe,{checkedCountRef:k,maxRef:ae(e,"max"),minRef:ae(e,"min"),valueSetRef:d,disabledRef:c,mergedSizeRef:f,toggleCheckbox:$}),{mergedClsPrefix:t}},render(){return o("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Xt=()=>o("svg",{viewBox:"0 0 64 64",class:"check-icon"},o("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Yt=()=>o("svg",{viewBox:"0 0 100 100",class:"line-icon"},o("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Kt=O([y("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[E("show-label","line-height: var(--n-label-line-height);"),O("&:hover",[y("checkbox-box",[V("border","border: var(--n-border-checked);")])]),O("&:focus:not(:active)",[y("checkbox-box",[V("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),E("inside-table",[y("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),E("checked",[y("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[y("checkbox-icon",[O(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),E("indeterminate",[y("checkbox-box",[y("checkbox-icon",[O(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),O(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),E("checked, indeterminate",[O("&:focus:not(:active)",[y("checkbox-box",[V("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),y("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[V("border",{border:"var(--n-border-checked)"})])]),E("disabled",{cursor:"not-allowed"},[E("checked",[y("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[V("border",{border:"var(--n-border-disabled-checked)"}),y("checkbox-icon",[O(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),y("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[V("border",`
 border: var(--n-border-disabled);
 `),y("checkbox-icon",[O(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),V("label",`
 color: var(--n-text-color-disabled);
 `)]),y("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),y("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[V("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),y("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[O(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ht({left:"1px",top:"1px"})])]),V("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[O("&:empty",{display:"none"})])]),gt(y("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),vt(y("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Qt=Object.assign(Object.assign({},re.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Pe=L({name:"Checkbox",props:Qt,setup(e){const t=Ae(Xe,null),n=I(null),{mergedClsPrefixRef:f,inlineThemeDisabled:c,mergedRtlRef:l}=se(e),r=I(e.defaultChecked),i=ae(e,"checked"),k=Te(i,r),d=ie(()=>{if(t){const x=t.valueSetRef.value;return x&&e.value!==void 0?x.has(e.value):!1}else return k.value===e.checkedValue}),$=Ie(e,{mergedSize(x){const{size:M}=e;if(M!==void 0)return M;if(t){const{value:j}=t.mergedSizeRef;if(j!==void 0)return j}if(x){const{mergedSize:j}=x;if(j!==void 0)return j.value}return"medium"},mergedDisabled(x){const{disabled:M}=e;if(M!==void 0)return M;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:j},checkedCountRef:W}=t;if(j!==void 0&&W.value>=j&&!d.value)return!0;const{minRef:{value:w}}=t;if(w!==void 0&&W.value<=w&&d.value)return!0}return x?x.disabled.value:!1}}),{mergedDisabledRef:C,mergedSizeRef:s}=$,v=re("Checkbox","-checkbox",Kt,kt,e,f);function m(x){if(t&&e.value!==void 0)t.toggleCheckbox(!d.value,e.value);else{const{onChange:M,"onUpdate:checked":j,onUpdateChecked:W}=e,{nTriggerFormInput:w,nTriggerFormChange:b}=$,R=d.value?e.uncheckedValue:e.checkedValue;j&&G(j,R,x),W&&G(W,R,x),M&&G(M,R,x),w(),b(),r.value=R}}function u(x){C.value||m(x)}function _(x){if(!C.value)switch(x.key){case" ":case"Enter":m(x)}}function S(x){switch(x.key){case" ":x.preventDefault()}}const g={focus:()=>{var x;(x=n.value)===null||x===void 0||x.focus()},blur:()=>{var x;(x=n.value)===null||x===void 0||x.blur()}},z=Ee("Checkbox",l,f),P=B(()=>{const{value:x}=s,{common:{cubicBezierEaseInOut:M},self:{borderRadius:j,color:W,colorChecked:w,colorDisabled:b,colorTableHeader:R,colorTableHeaderModal:ce,colorTableHeaderPopover:de,checkMarkColor:ue,checkMarkColorDisabled:N,border:U,borderFocus:Je,borderDisabled:Ze,borderChecked:et,boxShadowFocus:tt,textColor:rt,textColorDisabled:ot,checkMarkColorDisabledChecked:nt,colorDisabledChecked:lt,borderDisabledChecked:it,labelPadding:at,labelLineHeight:st,labelFontWeight:ct,[ge("fontSize",x)]:dt,[ge("size",x)]:ut}}=v.value;return{"--n-label-line-height":st,"--n-label-font-weight":ct,"--n-size":ut,"--n-bezier":M,"--n-border-radius":j,"--n-border":U,"--n-border-checked":et,"--n-border-focus":Je,"--n-border-disabled":Ze,"--n-border-disabled-checked":it,"--n-box-shadow-focus":tt,"--n-color":W,"--n-color-checked":w,"--n-color-table":R,"--n-color-table-modal":ce,"--n-color-table-popover":de,"--n-color-disabled":b,"--n-color-disabled-checked":lt,"--n-text-color":rt,"--n-text-color-disabled":ot,"--n-check-mark-color":ue,"--n-check-mark-color-disabled":N,"--n-check-mark-color-disabled-checked":nt,"--n-font-size":dt,"--n-label-padding":at}}),D=c?xe("checkbox",B(()=>s.value[0]),P,e):void 0;return Object.assign($,g,{rtlEnabled:z,selfRef:n,mergedClsPrefix:f,mergedDisabled:C,renderedChecked:d,mergedTheme:v,labelId:xt(),handleClick:u,handleKeyUp:_,handleKeyDown:S,cssVars:c?void 0:P,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:f,indeterminate:c,privateInsideTable:l,cssVars:r,labelId:i,label:k,mergedClsPrefix:d,focusable:$,handleKeyUp:C,handleKeyDown:s,handleClick:v}=this;(e=this.onRender)===null||e===void 0||e.call(this);const m=le(t.default,u=>k||u?o("span",{class:`${d}-checkbox__label`,id:i},k||u):null);return o("div",{ref:"selfRef",class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,n&&`${d}-checkbox--checked`,f&&`${d}-checkbox--disabled`,c&&`${d}-checkbox--indeterminate`,l&&`${d}-checkbox--inside-table`,m&&`${d}-checkbox--show-label`],tabindex:f||!$?void 0:0,role:"checkbox","aria-checked":c?"mixed":n,"aria-labelledby":i,style:r,onKeyup:C,onKeydown:s,onClick:v,onMousedown:()=>{mt("selectstart",window,u=>{u.preventDefault()},{once:!0})}},o("div",{class:`${d}-checkbox-box-wrapper`}," ",o("div",{class:`${d}-checkbox-box`},o(bt,null,{default:()=>this.indeterminate?o("div",{key:"indeterminate",class:`${d}-checkbox-icon`},Yt()):o("div",{key:"check",class:`${d}-checkbox-icon`},Xt())}),o("div",{class:`${d}-checkbox-box__border`}))),m)}}),De=1,Ye=Ge("n-grid"),Ke=1,Jt={span:{type:[Number,String],default:Ke},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},pe=L({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Jt,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:f,layoutShiftDisabledRef:c}=Ae(Ye),l=yt();return{overflow:f,itemStyle:n,layoutShiftDisabled:c,mergedXGap:B(()=>te(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:r=Ke,privateShow:i=!0,privateColStart:k=void 0,privateOffset:d=0}=l.vnode.props,{value:$}=t,C=te($||0);return{display:i?"":"none",gridColumn:`${k??`span ${r}`} / span ${r}`,marginLeft:d?`calc((100% - (${r} - 1) * ${C}) / ${r} * ${d} + ${C} * ${d})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:n,offset:f,mergedXGap:c}=this;return o("div",{style:{gridColumn:`span ${n} / span ${n}`,marginLeft:f?`calc((100% - (${n} - 1) * ${c}) / ${n} * ${f} + ${c} * ${f})`:""}},this.$slots)}return o("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),Zt={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Qe=24,ke="__ssr__",er={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Qe},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},tr=L({name:"Grid",inheritAttrs:!1,props:er,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=se(e),f=/^\d+$/,c=I(void 0),l=Ft((n==null?void 0:n.value)||Zt),r=ie(()=>!!(e.itemResponsive||!f.test(e.cols.toString())||!f.test(e.xGap.toString())||!f.test(e.yGap.toString()))),i=B(()=>{if(r.value)return e.responsive==="self"?c.value:l.value}),k=ie(()=>{var S;return(S=Number(ee(e.cols.toString(),i.value)))!==null&&S!==void 0?S:Qe}),d=ie(()=>ee(e.xGap.toString(),i.value)),$=ie(()=>ee(e.yGap.toString(),i.value)),C=S=>{c.value=S.contentRect.width},s=S=>{Rt(C,S)},v=I(!1),m=B(()=>{if(e.responsive==="self")return s}),u=I(!1),_=I();return Le(()=>{const{value:S}=_;S&&S.hasAttribute(ke)&&(S.removeAttribute(ke),u.value=!0)}),Oe(Ye,{layoutShiftDisabledRef:ae(e,"layoutShiftDisabled"),isSsrRef:u,itemStyleRef:ae(e,"itemStyle"),xGapRef:d,overflowRef:v}),{isSsr:!Ct,contentEl:_,mergedClsPrefix:t,style:B(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:te(e.xGap),rowGap:te(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${k.value}, minmax(0, 1fr))`,columnGap:te(d.value),rowGap:te($.value)}),isResponsive:r,responsiveQuery:i,responsiveCols:k,handleResize:m,overflow:v}},render(){if(this.layoutShiftDisabled)return o("div",ye({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,n,f,c,l,r,i;this.overflow=!1;const k=St($t(this)),d=[],{collapsed:$,collapsedRows:C,responsiveCols:s,responsiveQuery:v}=this;k.forEach(g=>{var z,P,D,x,M;if(((z=g==null?void 0:g.type)===null||z===void 0?void 0:z.__GRID_ITEM__)!==!0)return;if(Ut(g)){const w=we(g);w.props?w.props.privateShow=!1:w.props={privateShow:!1},d.push({child:w,rawChildSpan:0});return}g.dirs=((P=g.dirs)===null||P===void 0?void 0:P.filter(({dir:w})=>w!==je))||null,((D=g.dirs)===null||D===void 0?void 0:D.length)===0&&(g.dirs=null);const j=we(g),W=Number((M=ee((x=j.props)===null||x===void 0?void 0:x.span,v))!==null&&M!==void 0?M:De);W!==0&&d.push({child:j,rawChildSpan:W})});let m=0;const u=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(u!=null&&u.props){const g=(n=u.props)===null||n===void 0?void 0:n.suffix;g!==void 0&&g!==!1&&(m=Number((c=ee((f=u.props)===null||f===void 0?void 0:f.span,v))!==null&&c!==void 0?c:De),u.props.privateSpan=m,u.props.privateColStart=s+1-m,u.props.privateShow=(l=u.props.privateShow)!==null&&l!==void 0?l:!0)}let _=0,S=!1;for(const{child:g,rawChildSpan:z}of d){if(S&&(this.overflow=!0),!S){const P=Number((i=ee((r=g.props)===null||r===void 0?void 0:r.offset,v))!==null&&i!==void 0?i:0),D=Math.min(z+P,s);if(g.props?(g.props.privateSpan=D,g.props.privateOffset=P):g.props={privateSpan:D,privateOffset:P},$){const x=_%s;D+x>s&&(_+=s-x),D+_+m>C*s?S=!0:_+=D}}S&&(g.props?g.props.privateShow!==!0&&(g.props.privateShow=!1):g.props={privateShow:!1})}return o("div",ye({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[ke]:this.isSsr||void 0},this.$attrs),d.map(({child:g})=>g))};return this.isResponsive&&this.responsive==="self"?o(wt,{onResize:this.handleResize},{default:e}):e()}}),rr={success:o(qe,null),error:o(Ue,null),warning:o(Fe,null),info:o(We,null)},or=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const n=B(()=>{const l="gradient",{fillColor:r}=e;return typeof r=="object"?`${l}-${_t(JSON.stringify(r))}`:l});function f(l,r,i,k){const{gapDegree:d,viewBoxWidth:$,strokeWidth:C}=e,s=50,v=0,m=s,u=0,_=2*s,S=50+C/2,g=`M ${S},${S} m ${v},${m}
      a ${s},${s} 0 1 1 ${u},${-_}
      a ${s},${s} 0 1 1 ${-u},${_}`,z=Math.PI*2*s,P={stroke:k==="rail"?i:typeof e.fillColor=="object"?`url(#${n.value})`:i,strokeDasharray:`${Math.min(l,100)/100*(z-d)}px ${$*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:r?"center":void 0,transform:r?`rotate(${r}deg)`:void 0};return{pathString:g,pathStyle:P}}const c=()=>{const l=typeof e.fillColor=="object",r=l?e.fillColor.stops[0]:"",i=l?e.fillColor.stops[1]:"";return l&&o("defs",null,o("linearGradient",{id:n.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},o("stop",{offset:"0%","stop-color":r}),o("stop",{offset:"100%","stop-color":i})))};return()=>{const{fillColor:l,railColor:r,strokeWidth:i,offsetDegree:k,status:d,percentage:$,showIndicator:C,indicatorTextColor:s,unit:v,gapOffsetDegree:m,clsPrefix:u}=e,{pathString:_,pathStyle:S}=f(100,0,r,"rail"),{pathString:g,pathStyle:z}=f($,k,l,"fill"),P=100+i;return o("div",{class:`${u}-progress-content`,role:"none"},o("div",{class:`${u}-progress-graph`,"aria-hidden":!0},o("div",{class:`${u}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},o("svg",{viewBox:`0 0 ${P} ${P}`},c(),o("g",null,o("path",{class:`${u}-progress-graph-circle-rail`,d:_,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:S})),o("g",null,o("path",{class:[`${u}-progress-graph-circle-fill`,$===0&&`${u}-progress-graph-circle-fill--empty`],d:g,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:z}))))),C?o("div",null,t.default?o("div",{class:`${u}-progress-custom-content`,role:"none"},t.default()):d!=="default"?o("div",{class:`${u}-progress-icon`,"aria-hidden":!0},o(Ve,{clsPrefix:u},{default:()=>rr[d]})):o("div",{class:`${u}-progress-text`,style:{color:s},role:"none"},o("span",{class:`${u}-progress-text__percentage`},$),o("span",{class:`${u}-progress-text__unit`},v))):null)}}}),nr={success:o(qe,null),error:o(Ue,null),warning:o(Fe,null),info:o(We,null)},lr=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const n=B(()=>J(e.height)),f=B(()=>{var r,i;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(r=e.fillColor)===null||r===void 0?void 0:r.stops[0]} , ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[1]})`:e.fillColor}),c=B(()=>e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):""),l=B(()=>e.fillBorderRadius!==void 0?J(e.fillBorderRadius):e.railBorderRadius!==void 0?J(e.railBorderRadius):e.height!==void 0?J(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:r,railColor:i,railStyle:k,percentage:d,unit:$,indicatorTextColor:C,status:s,showIndicator:v,processing:m,clsPrefix:u}=e;return o("div",{class:`${u}-progress-content`,role:"none"},o("div",{class:`${u}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${u}-progress-graph-line`,{[`${u}-progress-graph-line--indicator-${r}`]:!0}]},o("div",{class:`${u}-progress-graph-line-rail`,style:[{backgroundColor:i,height:n.value,borderRadius:c.value},k]},o("div",{class:[`${u}-progress-graph-line-fill`,m&&`${u}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:f.value,height:n.value,lineHeight:n.value,borderRadius:l.value}},r==="inside"?o("div",{class:`${u}-progress-graph-line-indicator`,style:{color:C}},t.default?t.default():`${d}${$}`):null)))),v&&r==="outside"?o("div",null,t.default?o("div",{class:`${u}-progress-custom-content`,style:{color:C},role:"none"},t.default()):s==="default"?o("div",{role:"none",class:`${u}-progress-icon ${u}-progress-icon--as-text`,style:{color:C}},d,$):o("div",{class:`${u}-progress-icon`,"aria-hidden":!0},o(Ve,{clsPrefix:u},{default:()=>nr[s]}))):null)}}});function Me(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ir=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const n=B(()=>e.percentage.map((l,r)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*r)-e.circleGap*r)*2}, ${e.viewBoxWidth*8}`)),f=(c,l)=>{const r=e.fillColor[l],i=typeof r=="object"?r.stops[0]:"",k=typeof r=="object"?r.stops[1]:"";return typeof e.fillColor[l]=="object"&&o("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},o("stop",{offset:"0%","stop-color":i}),o("stop",{offset:"100%","stop-color":k}))};return()=>{const{viewBoxWidth:c,strokeWidth:l,circleGap:r,showIndicator:i,fillColor:k,railColor:d,railStyle:$,percentage:C,clsPrefix:s}=e;return o("div",{class:`${s}-progress-content`,role:"none"},o("div",{class:`${s}-progress-graph`,"aria-hidden":!0},o("div",{class:`${s}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${c} ${c}`},o("defs",null,C.map((v,m)=>f(v,m))),C.map((v,m)=>o("g",{key:m},o("path",{class:`${s}-progress-graph-circle-rail`,d:Me(c/2-l/2*(1+2*m)-r*m,l,c),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[m]},$[m]]}),o("path",{class:[`${s}-progress-graph-circle-fill`,v===0&&`${s}-progress-graph-circle-fill--empty`],d:Me(c/2-l/2*(1+2*m)-r*m,l,c),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:n.value[m],strokeDashoffset:0,stroke:typeof k[m]=="object"?`url(#gradient-${m})`:k[m]}})))))),i&&t.default?o("div",null,o("div",{class:`${s}-progress-text`},t.default())):null)}}}),ar=O([y("progress",{display:"inline-block"},[y("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),E("line",`
 width: 100%;
 display: block;
 `,[y("progress-content",`
 display: flex;
 align-items: center;
 `,[y("progress-graph",{flex:1})]),y("progress-custom-content",{marginLeft:"14px"}),y("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[E("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),E("circle, dashboard",{width:"120px"},[y("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),y("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),y("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),E("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[y("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),y("progress-content",{position:"relative"}),y("progress-graph",{position:"relative"},[y("progress-graph-circle",[O("svg",{verticalAlign:"bottom"}),y("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[E("empty",{opacity:0})]),y("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),y("progress-graph-line",[E("indicator-inside",[y("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[y("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),y("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),E("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[y("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),y("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),y("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[y("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[E("processing",[O("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),O("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),sr=Object.assign(Object.assign({},re.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),cr=L({name:"Progress",props:sr,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),n=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:f,inlineThemeDisabled:c}=se(e),l=re("Progress","-progress",ar,zt,e,f),r=B(()=>{const{status:k}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:$,fontSizeCircle:C,railColor:s,railHeight:v,iconSizeCircle:m,iconSizeLine:u,textColorCircle:_,textColorLineInner:S,textColorLineOuter:g,lineBgProcessing:z,fontWeightCircle:P,[ge("iconColor",k)]:D,[ge("fillColor",k)]:x}}=l.value;return{"--n-bezier":d,"--n-fill-color":x,"--n-font-size":$,"--n-font-size-circle":C,"--n-font-weight-circle":P,"--n-icon-color":D,"--n-icon-size-circle":m,"--n-icon-size-line":u,"--n-line-bg-processing":z,"--n-rail-color":s,"--n-rail-height":v,"--n-text-color-circle":_,"--n-text-color-line-inner":S,"--n-text-color-line-outer":g}}),i=c?xe("progress",B(()=>e.status[0]),r,e):void 0;return{mergedClsPrefix:f,mergedIndicatorPlacement:t,gapDeg:n,cssVars:c?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:n,showIndicator:f,status:c,railColor:l,railStyle:r,color:i,percentage:k,viewBoxWidth:d,strokeWidth:$,mergedIndicatorPlacement:C,unit:s,borderRadius:v,fillBorderRadius:m,height:u,processing:_,circleGap:S,mergedClsPrefix:g,gapDeg:z,gapOffsetDegree:P,themeClass:D,$slots:x,onRender:M}=this;return M==null||M(),o("div",{class:[D,`${g}-progress`,`${g}-progress--${e}`,`${g}-progress--${c}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":k,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(or,{clsPrefix:g,status:c,showIndicator:f,indicatorTextColor:n,railColor:l,fillColor:i,railStyle:r,offsetDegree:this.offsetDegree,percentage:k,viewBoxWidth:d,strokeWidth:$,gapDegree:z===void 0?e==="dashboard"?75:0:z,gapOffsetDegree:P,unit:s},x):e==="line"?o(lr,{clsPrefix:g,status:c,showIndicator:f,indicatorTextColor:n,railColor:l,fillColor:i,railStyle:r,percentage:k,processing:_,indicatorPlacement:C,unit:s,fillBorderRadius:m,railBorderRadius:v,height:u},x):e==="multiple-circle"?o(ir,{clsPrefix:g,strokeWidth:$,railColor:l,fillColor:i,railStyle:r,viewBoxWidth:d,percentage:k,showIndicator:f,circleGap:S},x):null)}}),dr=y("statistic",[V("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),y("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[V("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[y("icon",{verticalAlign:"-0.125em"})]),V("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),V("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[y("icon",{verticalAlign:"-0.125em"})])])]),ur=Object.assign(Object.assign({},re.props),{tabularNums:Boolean,label:String,value:[String,Number]}),he=L({name:"Statistic",props:ur,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:f}=se(e),c=re("Statistic","-statistic",dr,Nt,e,t),l=Ee("Statistic",f,t),r=B(()=>{const{self:{labelFontWeight:k,valueFontSize:d,valueFontWeight:$,valuePrefixTextColor:C,labelTextColor:s,valueSuffixTextColor:v,valueTextColor:m,labelFontSize:u},common:{cubicBezierEaseInOut:_}}=c.value;return{"--n-bezier":_,"--n-label-font-size":u,"--n-label-font-weight":k,"--n-label-text-color":s,"--n-value-font-weight":$,"--n-value-font-size":d,"--n-value-prefix-text-color":C,"--n-value-suffix-text-color":v,"--n-value-text-color":m}}),i=n?xe("statistic",void 0,r,e):void 0;return{rtlEnabled:l,mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t,$slots:{default:n,label:f,prefix:c,suffix:l}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},le(f,r=>o("div",{class:`${t}-statistic__label`},this.label||r)),o("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},le(c,r=>r&&o("span",{class:`${t}-statistic-value__prefix`},r)),this.value!==void 0?o("span",{class:`${t}-statistic-value__content`},this.value):le(n,r=>r&&o("span",{class:`${t}-statistic-value__content`},r)),le(l,r=>r&&o("span",{class:`${t}-statistic-value__suffix`},r))))}}),fr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pr=L({name:"CheckmarkCircleOutline",render:function(t,n){return A(),Q("svg",fr,n[0]||(n[0]=[Y("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 176L217.6 336L160 272"},null,-1)]))}}),hr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gr=L({name:"HardwareChipOutline",render:function(t,n){return A(),Q("svg",hr,n[0]||(n[0]=[He('<rect x="80" y="80" width="352" height="352" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="144" y="144" width="224" height="224" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 256h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 336h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 176h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 336h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 176h32"></path>',14)]))}}),vr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},br=L({name:"LayersOutline",render:function(t,n){return A(),Q("svg",vr,n[0]||(n[0]=[Y("path",{d:"M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Y("path",{d:"M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Y("path",{d:"M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),mr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},kr=L({name:"PlayCircleOutline",render:function(t,n){return A(),Q("svg",mr,n[0]||(n[0]=[Y("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Y("path",{d:"M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",fill:"currentColor"},null,-1)]))}}),xr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yr=L({name:"SpeedometerOutline",render:function(t,n){return A(),Q("svg",xr,n[0]||(n[0]=[He('<path d="M326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14z" fill="currentColor"></path><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 288h-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 288H96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M165.49 197.49l-22.63-22.63"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M346.51 197.49l22.63-22.63"></path>',7)]))}}),Br={__name:"Dashboard",setup(e){const t=Pt(),n=I(!1),f=I(!1),c=I(!1),l=I(!1),r=I(!1),i=I(!1),k=I({memory_mb:0,cpu_percent:0}),d=I([]),$=I(null),C=I(""),s=I([]),v=I(null);let m=null;const u=B(()=>d.value.map(w=>({label:w.name,value:w.name})));function _(w){w?s.value=d.value.map(b=>b.name):s.value=[]}function S(w){return{pending:"default",running:"info",canceling:"warning",canceled:"warning",completed:"success",failed:"error"}[w]||"default"}function g(w){return{pending:"等待中",running:"运行中",canceling:"取消中",canceled:"已取消",completed:"已完成",failed:"有失败"}[w]||w}async function z(){n.value=!0;try{const[w,b]=await Promise.all([K.getStatus(),K.getServers()]);k.value=w,d.value=b.servers||[]}catch(w){t.error("加载数据失败: "+w.message)}finally{n.value=!1}}async function P(){f.value=!0;try{await K.reloadConfig(),t.success("配置已重新加载"),await z()}catch(w){t.error("重新加载配置失败: "+w.message)}finally{f.value=!1}}async function D(){if(!$.value){t.warning("请选择服务器");return}c.value=!0;try{await K.generateCover($.value,C.value||null),t.success("封面生成任务已启动"),r.value=!1,$.value=null,C.value=""}catch(w){t.error("启动生成任务失败: "+w.message)}finally{c.value=!1}}async function x(){if(s.value.length===0){t.warning("请选择至少一个服务器");return}try{const w=s.value.map(R=>({server_name:R,library_name:null})),b=await K.createBatch(w);v.value=b.job,i.value=!0,M(b.job.job_id),t.success("批量任务已创建")}catch(w){t.error("创建批量任务失败: "+w.message)}}function M(w){j(),m=setInterval(async()=>{try{const b=await K.getBatchStatus(w);v.value=b.job,["completed","failed","canceled"].includes(b.job.status)&&j()}catch(b){console.error("Failed to poll batch status:",b)}},3e3)}function j(){m&&(clearInterval(m),m=null)}async function W(){if(v.value){l.value=!0;try{const w=await K.cancelBatch(v.value.job_id);v.value=w.job,t.success("任务已取消")}catch(w){t.error("取消任务失败: "+w.message)}finally{l.value=!1}}}return Le(()=>{z()}),Bt(()=>{j()}),(w,b)=>(A(),H(a(Z),{vertical:"",size:24},{default:p(()=>[h(a(ve),{title:"系统状态"},{default:p(()=>[h(a(Dt),{show:n.value},{default:p(()=>[h(a(tr),{cols:4,"x-gap":16},{default:p(()=>[h(a(pe),null,{default:p(()=>[h(a(he),{label:"内存占用",value:k.value.memory_mb,suffix:"MB"},{prefix:p(()=>[h(a(q),{component:a(gr)},null,8,["component"])]),_:1},8,["value"])]),_:1}),h(a(pe),null,{default:p(()=>[h(a(he),{label:"CPU 使用率",value:k.value.cpu_percent,suffix:"%"},{prefix:p(()=>[h(a(q),{component:a(yr)},null,8,["component"])]),_:1},8,["value"])]),_:1}),h(a(pe),null,{default:p(()=>[h(a(he),{label:"服务器数量",value:d.value.length},{prefix:p(()=>[h(a(q),{component:a(Ce)},null,8,["component"])]),_:1},8,["value"])]),_:1}),h(a(pe),null,{default:p(()=>[h(a(he),{label:"运行状态",value:"正常"},{prefix:p(()=>[h(a(q),{component:a(pr),color:"green"},null,8,["component"])]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1}),h(a(ve),{title:"快速操作"},{default:p(()=>[h(a(Z),null,{default:p(()=>[h(a(X),{type:"primary",onClick:b[0]||(b[0]=R=>r.value=!0)},{icon:p(()=>[h(a(q),{component:a(kr)},null,8,["component"])]),default:p(()=>[b[8]||(b[8]=T(" 立即生成封面 ",-1))]),_:1}),h(a(X),{type:"info",onClick:x,disabled:s.value.length===0},{icon:p(()=>[h(a(q),{component:a(br)},null,8,["component"])]),default:p(()=>[T(" 批量生成 "+F(s.value.length>0?`(${s.value.length})`:""),1)]),_:1},8,["disabled"]),h(a(X),{onClick:P,loading:f.value},{icon:p(()=>[h(a(q),{component:a(_e)},null,8,["component"])]),default:p(()=>[b[9]||(b[9]=T(" 重新加载配置 ",-1))]),_:1},8,["loading"]),h(a(X),{onClick:z},{icon:p(()=>[h(a(q),{component:a(_e)},null,8,["component"])]),default:p(()=>[b[10]||(b[10]=T(" 刷新数据 ",-1))]),_:1})]),_:1})]),_:1}),h(a(ve),{title:"服务器列表"},{"header-extra":p(()=>[d.value.length>0?(A(),H(a(Pe),{key:0,checked:s.value.length===d.value.length,indeterminate:s.value.length>0&&s.value.length<d.value.length,"onUpdate:checked":_},{default:p(()=>[...b[11]||(b[11]=[T(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])):oe("",!0)]),default:p(()=>[h(a(Ht),{value:s.value,"onUpdate:value":b[1]||(b[1]=R=>s.value=R)},{default:p(()=>[h(a(ze),{bordered:""},{default:p(()=>[(A(!0),Q(Se,null,$e(d.value,R=>(A(),H(a(Ne),{key:R.name},{prefix:p(()=>[h(a(Pe),{value:R.name,style:{"margin-right":"12px"}},null,8,["value"]),h(a(q),{component:a(Ce),size:"24"},null,8,["component"])]),default:p(()=>[h(a(It),{title:R.name,description:`类型: ${R.type.toUpperCase()} | URL: ${R.url}`},{"header-extra":p(()=>[h(a(be),{type:R.type==="emby"?"success":"info"},{default:p(()=>[T(F(R.type.toUpperCase()),1)]),_:2},1032,["type"])]),_:2},1032,["title","description"])]),_:2},1024))),128)),d.value.length===0?(A(),H(a(Tt),{key:0,description:"暂无服务器配置"})):oe("",!0)]),_:1})]),_:1},8,["value"])]),_:1}),h(a(Re),{show:r.value,"onUpdate:show":b[5]||(b[5]=R=>r.value=R),preset:"dialog",title:"生成封面"},{action:p(()=>[h(a(Z),null,{default:p(()=>[h(a(X),{onClick:b[4]||(b[4]=R=>r.value=!1)},{default:p(()=>[...b[12]||(b[12]=[T("取消",-1)])]),_:1}),h(a(X),{type:"primary",onClick:D,loading:c.value},{default:p(()=>[...b[13]||(b[13]=[T(" 开始生成 ",-1)])]),_:1},8,["loading"])]),_:1})]),default:p(()=>[h(a(Gt),null,{default:p(()=>[h(a(Be),{label:"选择服务器"},{default:p(()=>[h(a(At),{value:$.value,"onUpdate:value":b[2]||(b[2]=R=>$.value=R),options:u.value,placeholder:"请选择服务器"},null,8,["value","options"])]),_:1}),h(a(Be),{label:"媒体库（可选）"},{default:p(()=>[h(a(Ot),{value:C.value,"onUpdate:value":b[3]||(b[3]=R=>C.value=R),placeholder:"留空则生成所有媒体库"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["show"]),h(a(Re),{show:i.value,"onUpdate:show":b[7]||(b[7]=R=>i.value=R),preset:"card",title:"批量生成进度",style:{width:"600px"}},{footer:p(()=>[h(a(Z),{justify:"end"},{default:p(()=>[v.value&&!["completed","failed","canceled"].includes(v.value.status)?(A(),H(a(X),{key:0,type:"error",onClick:W,loading:l.value},{default:p(()=>[...b[14]||(b[14]=[T(" 取消任务 ",-1)])]),_:1},8,["loading"])):oe("",!0),h(a(X),{onClick:b[6]||(b[6]=R=>i.value=!1)},{default:p(()=>[...b[15]||(b[15]=[T("关闭",-1)])]),_:1})]),_:1})]),default:p(()=>[h(a(Z),{vertical:"",size:16},{default:p(()=>{var R,ce,de,ue;return[h(a(Et),{bordered:"",column:2},{default:p(()=>[h(a(fe),{label:"状态"},{default:p(()=>{var N;return[h(a(be),{type:S((N=v.value)==null?void 0:N.status)},{default:p(()=>{var U;return[T(F(g((U=v.value)==null?void 0:U.status)),1)]}),_:1},8,["type"])]}),_:1}),h(a(fe),{label:"进度"},{default:p(()=>{var N,U;return[T(F(((N=v.value)==null?void 0:N.completed)||0)+" / "+F(((U=v.value)==null?void 0:U.total)||0),1)]}),_:1}),h(a(fe),{label:"成功"},{default:p(()=>[h(a(me),{type:"success"},{default:p(()=>{var N;return[T(F(((N=v.value)==null?void 0:N.completed)||0),1)]}),_:1})]),_:1}),h(a(fe),{label:"失败"},{default:p(()=>[h(a(me),{type:"error"},{default:p(()=>{var N;return[T(F(((N=v.value)==null?void 0:N.failed)||0),1)]}),_:1})]),_:1})]),_:1}),h(a(cr),{type:"line",percentage:((R=v.value)==null?void 0:R.progress)||0,status:((ce=v.value)==null?void 0:ce.failed)>0?"warning":"success","indicator-placement":"inside"},null,8,["percentage","status"]),(ue=(de=v.value)==null?void 0:de.results)!=null&&ue.length?(A(),H(a(Mt),{key:0},{default:p(()=>[h(a(jt),{title:"任务详情",name:"details"},{default:p(()=>[h(a(ze),{bordered:"",size:"small"},{default:p(()=>[(A(!0),Q(Se,null,$e(v.value.results,(N,U)=>(A(),H(a(Ne),{key:U},{default:p(()=>[h(a(Z),{justify:"space-between",align:"center",style:{width:"100%"}},{default:p(()=>[Y("span",null,F(N.target.server_name)+F(N.target.library_name?"/"+N.target.library_name:""),1),h(a(be),{type:N.status==="success"?"success":N.status==="failed"?"error":"warning",size:"small"},{default:p(()=>[T(F(N.status==="success"?"成功":N.status==="failed"?"失败":"已取消"),1)]),_:2},1032,["type"])]),_:2},1024),N.message&&N.status!=="success"?(A(),H(a(me),{key:0,type:"error",depth:"3",style:{"font-size":"12px"}},{default:p(()=>[T(F(N.message),1)]),_:2},1024)):oe("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):oe("",!0)]}),_:1})]),_:1},8,["show"])]),_:1}))}};export{Br as default};
