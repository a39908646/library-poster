import{d as F,h as t,u as de,a as ze,r as I,b as Re,c as P,e as Ye,p as Je,t as pe,f as T,g as O,i as p,j as A,k as L,l as Ze,m as Qe,n as er,o as te,N as rr,q as tr,s as or,v as nr,w as ee,x as lr,y as Ne,z as ge,A as ar,B as ce,C as _e,I as Be,W as Pe,E as je,S as Me,D as ir,F as Z,G as sr,H as cr,J as W,K as J,L as X,M as De,O as dr,P as ur,Q as H,R as a,T as r,U as Q,V as Y,X as i,Y as ue,Z as E,_ as ve,$ as K,a0 as M,a1 as G,a2 as be,a3 as me,a4 as fe,a5 as re,a6 as ke}from"./index-DXdFuH5K.js";import{u as fr,N as hr}from"./Spin-DElXLdiL.js";import{N as pr,a as ae}from"./Grid-hgsWcss3.js";import{R as xe,N as gr,a as vr}from"./RefreshOutline-DC7m93qa.js";import{N as ye,a as we,b as br}from"./Thing-DskFXyIs.js";import{N as mr,a as kr,b as Ce,c as xr}from"./FormItem-jJsAIIqM.js";import{N as yr}from"./Select-DpgfFTgQ.js";import{N as wr,a as ie,b as he}from"./text-CMTz8ZZs.js";const Ie=Ye("n-checkbox-group"),Cr={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Sr=F({name:"CheckboxGroup",props:Cr,setup(e){const{mergedClsPrefixRef:n}=de(e),d=ze(e),{mergedSizeRef:S,mergedDisabledRef:m}=d,f=I(e.defaultValue),o=P(()=>e.value),c=Re(o,f),w=P(()=>{var x;return((x=c.value)===null||x===void 0?void 0:x.length)||0}),h=P(()=>Array.isArray(c.value)?new Set(c.value):new Set);function C(x,l){const{nTriggerFormInput:g,nTriggerFormChange:v}=d,{onChange:s,"onUpdate:value":R,onUpdateValue:N}=e;if(Array.isArray(c.value)){const $=Array.from(c.value),_=$.findIndex(D=>D===l);x?~_||($.push(l),N&&T(N,$,{actionType:"check",value:l}),R&&T(R,$,{actionType:"check",value:l}),g(),v(),f.value=$,s&&T(s,$)):~_&&($.splice(_,1),N&&T(N,$,{actionType:"uncheck",value:l}),R&&T(R,$,{actionType:"uncheck",value:l}),s&&T(s,$),f.value=$,g(),v())}else x?(N&&T(N,[l],{actionType:"check",value:l}),R&&T(R,[l],{actionType:"check",value:l}),s&&T(s,[l]),f.value=[l],g(),v()):(N&&T(N,[],{actionType:"uncheck",value:l}),R&&T(R,[],{actionType:"uncheck",value:l}),s&&T(s,[]),f.value=[],g(),v())}return Je(Ie,{checkedCountRef:w,maxRef:pe(e,"max"),minRef:pe(e,"min"),valueSetRef:h,disabledRef:m,mergedSizeRef:S,toggleCheckbox:C}),{mergedClsPrefix:n}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),$r=()=>t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),zr=()=>t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Rr=O([p("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[A("show-label","line-height: var(--n-label-line-height);"),O("&:hover",[p("checkbox-box",[L("border","border: var(--n-border-checked);")])]),O("&:focus:not(:active)",[p("checkbox-box",[L("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[p("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[p("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[p("checkbox-icon",[O(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[p("checkbox-box",[p("checkbox-icon",[O(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),O(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[O("&:focus:not(:active)",[p("checkbox-box",[L("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),p("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[L("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[p("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[L("border",{border:"var(--n-border-disabled-checked)"}),p("checkbox-icon",[O(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),p("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[L("border",`
 border: var(--n-border-disabled);
 `),p("checkbox-icon",[O(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),L("label",`
 color: var(--n-text-color-disabled);
 `)]),p("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),p("checkbox-box",`
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
 `,[L("border",`
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
 `),p("checkbox-icon",`
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
 `),Ze({left:"1px",top:"1px"})])]),L("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[O("&:empty",{display:"none"})])]),Qe(p("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),er(p("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Nr=Object.assign(Object.assign({},ee.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Se=F({name:"Checkbox",props:Nr,setup(e){const n=or(Ie,null),d=I(null),{mergedClsPrefixRef:S,inlineThemeDisabled:m,mergedRtlRef:f}=de(e),o=I(e.defaultChecked),c=pe(e,"checked"),w=Re(c,o),h=nr(()=>{if(n){const b=n.valueSetRef.value;return b&&e.value!==void 0?b.has(e.value):!1}else return w.value===e.checkedValue}),C=ze(e,{mergedSize(b){const{size:j}=e;if(j!==void 0)return j;if(n){const{value:B}=n.mergedSizeRef;if(B!==void 0)return B}if(b){const{mergedSize:B}=b;if(B!==void 0)return B.value}return"medium"},mergedDisabled(b){const{disabled:j}=e;if(j!==void 0)return j;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:B},checkedCountRef:V}=n;if(B!==void 0&&V.value>=B&&!h.value)return!0;const{minRef:{value:k}}=n;if(k!==void 0&&V.value<=k&&h.value)return!0}return b?b.disabled.value:!1}}),{mergedDisabledRef:x,mergedSizeRef:l}=C,g=ee("Checkbox","-checkbox",Rr,lr,e,S);function v(b){if(n&&e.value!==void 0)n.toggleCheckbox(!h.value,e.value);else{const{onChange:j,"onUpdate:checked":B,onUpdateChecked:V}=e,{nTriggerFormInput:k,nTriggerFormChange:u}=C,y=h.value?e.uncheckedValue:e.checkedValue;B&&T(B,y,b),V&&T(V,y,b),j&&T(j,y,b),k(),u(),o.value=y}}function s(b){x.value||v(b)}function R(b){if(!x.value)switch(b.key){case" ":case"Enter":v(b)}}function N(b){switch(b.key){case" ":b.preventDefault()}}const $={focus:()=>{var b;(b=d.value)===null||b===void 0||b.focus()},blur:()=>{var b;(b=d.value)===null||b===void 0||b.blur()}},_=Ne("Checkbox",f,S),D=P(()=>{const{value:b}=l,{common:{cubicBezierEaseInOut:j},self:{borderRadius:B,color:V,colorChecked:k,colorDisabled:u,colorTableHeader:y,colorTableHeaderModal:oe,colorTableHeaderPopover:ne,checkMarkColor:le,checkMarkColorDisabled:z,border:q,borderFocus:Te,borderDisabled:Oe,borderChecked:We,boxShadowFocus:Ae,textColor:Le,textColorDisabled:Ue,checkMarkColorDisabledChecked:Fe,colorDisabledChecked:Ge,borderDisabledChecked:Ve,labelPadding:qe,labelLineHeight:Ee,labelFontWeight:He,[ce("fontSize",b)]:Ke,[ce("size",b)]:Xe}}=g.value;return{"--n-label-line-height":Ee,"--n-label-font-weight":He,"--n-size":Xe,"--n-bezier":j,"--n-border-radius":B,"--n-border":q,"--n-border-checked":We,"--n-border-focus":Te,"--n-border-disabled":Oe,"--n-border-disabled-checked":Ve,"--n-box-shadow-focus":Ae,"--n-color":V,"--n-color-checked":k,"--n-color-table":y,"--n-color-table-modal":oe,"--n-color-table-popover":ne,"--n-color-disabled":u,"--n-color-disabled-checked":Ge,"--n-text-color":Le,"--n-text-color-disabled":Ue,"--n-check-mark-color":le,"--n-check-mark-color-disabled":z,"--n-check-mark-color-disabled-checked":Fe,"--n-font-size":Ke,"--n-label-padding":qe}}),U=m?ge("checkbox",P(()=>l.value[0]),D,e):void 0;return Object.assign(C,$,{rtlEnabled:_,selfRef:d,mergedClsPrefix:S,mergedDisabled:x,renderedChecked:h,mergedTheme:g,labelId:ar(),handleClick:s,handleKeyUp:R,handleKeyDown:N,cssVars:m?void 0:D,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender})},render(){var e;const{$slots:n,renderedChecked:d,mergedDisabled:S,indeterminate:m,privateInsideTable:f,cssVars:o,labelId:c,label:w,mergedClsPrefix:h,focusable:C,handleKeyUp:x,handleKeyDown:l,handleClick:g}=this;(e=this.onRender)===null||e===void 0||e.call(this);const v=te(n.default,s=>w||s?t("span",{class:`${h}-checkbox__label`,id:c},w||s):null);return t("div",{ref:"selfRef",class:[`${h}-checkbox`,this.themeClass,this.rtlEnabled&&`${h}-checkbox--rtl`,d&&`${h}-checkbox--checked`,S&&`${h}-checkbox--disabled`,m&&`${h}-checkbox--indeterminate`,f&&`${h}-checkbox--inside-table`,v&&`${h}-checkbox--show-label`],tabindex:S||!C?void 0:0,role:"checkbox","aria-checked":m?"mixed":d,"aria-labelledby":c,style:o,onKeyup:x,onKeydown:l,onClick:g,onMousedown:()=>{tr("selectstart",window,s=>{s.preventDefault()},{once:!0})}},t("div",{class:`${h}-checkbox-box-wrapper`}," ",t("div",{class:`${h}-checkbox-box`},t(rr,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${h}-checkbox-icon`},zr()):t("div",{key:"check",class:`${h}-checkbox-icon`},$r())}),t("div",{class:`${h}-checkbox-box__border`}))),v)}}),_r={success:t(Me,null),error:t(je,null),warning:t(Pe,null),info:t(Be,null)},Br=F({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:n}){const d=P(()=>{const f="gradient",{fillColor:o}=e;return typeof o=="object"?`${f}-${ir(JSON.stringify(o))}`:f});function S(f,o,c,w){const{gapDegree:h,viewBoxWidth:C,strokeWidth:x}=e,l=50,g=0,v=l,s=0,R=2*l,N=50+x/2,$=`M ${N},${N} m ${g},${v}
      a ${l},${l} 0 1 1 ${s},${-R}
      a ${l},${l} 0 1 1 ${-s},${R}`,_=Math.PI*2*l,D={stroke:w==="rail"?c:typeof e.fillColor=="object"?`url(#${d.value})`:c,strokeDasharray:`${Math.min(f,100)/100*(_-h)}px ${C*8}px`,strokeDashoffset:`-${h/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:$,pathStyle:D}}const m=()=>{const f=typeof e.fillColor=="object",o=f?e.fillColor.stops[0]:"",c=f?e.fillColor.stops[1]:"";return f&&t("defs",null,t("linearGradient",{id:d.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},t("stop",{offset:"0%","stop-color":o}),t("stop",{offset:"100%","stop-color":c})))};return()=>{const{fillColor:f,railColor:o,strokeWidth:c,offsetDegree:w,status:h,percentage:C,showIndicator:x,indicatorTextColor:l,unit:g,gapOffsetDegree:v,clsPrefix:s}=e,{pathString:R,pathStyle:N}=S(100,0,o,"rail"),{pathString:$,pathStyle:_}=S(C,w,f,"fill"),D=100+c;return t("div",{class:`${s}-progress-content`,role:"none"},t("div",{class:`${s}-progress-graph`,"aria-hidden":!0},t("div",{class:`${s}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},t("svg",{viewBox:`0 0 ${D} ${D}`},m(),t("g",null,t("path",{class:`${s}-progress-graph-circle-rail`,d:R,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:N})),t("g",null,t("path",{class:[`${s}-progress-graph-circle-fill`,C===0&&`${s}-progress-graph-circle-fill--empty`],d:$,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:_}))))),x?t("div",null,n.default?t("div",{class:`${s}-progress-custom-content`,role:"none"},n.default()):h!=="default"?t("div",{class:`${s}-progress-icon`,"aria-hidden":!0},t(_e,{clsPrefix:s},{default:()=>_r[h]})):t("div",{class:`${s}-progress-text`,style:{color:l},role:"none"},t("span",{class:`${s}-progress-text__percentage`},C),t("span",{class:`${s}-progress-text__unit`},g))):null)}}}),Pr={success:t(Me,null),error:t(je,null),warning:t(Pe,null),info:t(Be,null)},jr=F({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:n}){const d=P(()=>Z(e.height)),S=P(()=>{var o,c;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(o=e.fillColor)===null||o===void 0?void 0:o.stops[0]} , ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[1]})`:e.fillColor}),m=P(()=>e.railBorderRadius!==void 0?Z(e.railBorderRadius):e.height!==void 0?Z(e.height,{c:.5}):""),f=P(()=>e.fillBorderRadius!==void 0?Z(e.fillBorderRadius):e.railBorderRadius!==void 0?Z(e.railBorderRadius):e.height!==void 0?Z(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:o,railColor:c,railStyle:w,percentage:h,unit:C,indicatorTextColor:x,status:l,showIndicator:g,processing:v,clsPrefix:s}=e;return t("div",{class:`${s}-progress-content`,role:"none"},t("div",{class:`${s}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${s}-progress-graph-line`,{[`${s}-progress-graph-line--indicator-${o}`]:!0}]},t("div",{class:`${s}-progress-graph-line-rail`,style:[{backgroundColor:c,height:d.value,borderRadius:m.value},w]},t("div",{class:[`${s}-progress-graph-line-fill`,v&&`${s}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:S.value,height:d.value,lineHeight:d.value,borderRadius:f.value}},o==="inside"?t("div",{class:`${s}-progress-graph-line-indicator`,style:{color:x}},n.default?n.default():`${h}${C}`):null)))),g&&o==="outside"?t("div",null,n.default?t("div",{class:`${s}-progress-custom-content`,style:{color:x},role:"none"},n.default()):l==="default"?t("div",{role:"none",class:`${s}-progress-icon ${s}-progress-icon--as-text`,style:{color:x}},h,C):t("div",{class:`${s}-progress-icon`,"aria-hidden":!0},t(_e,{clsPrefix:s},{default:()=>Pr[l]}))):null)}}});function $e(e,n,d=100){return`m ${d/2} ${d/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Mr=F({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:n}){const d=P(()=>e.percentage.map((f,o)=>`${Math.PI*f/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*o)-e.circleGap*o)*2}, ${e.viewBoxWidth*8}`)),S=(m,f)=>{const o=e.fillColor[f],c=typeof o=="object"?o.stops[0]:"",w=typeof o=="object"?o.stops[1]:"";return typeof e.fillColor[f]=="object"&&t("linearGradient",{id:`gradient-${f}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":c}),t("stop",{offset:"100%","stop-color":w}))};return()=>{const{viewBoxWidth:m,strokeWidth:f,circleGap:o,showIndicator:c,fillColor:w,railColor:h,railStyle:C,percentage:x,clsPrefix:l}=e;return t("div",{class:`${l}-progress-content`,role:"none"},t("div",{class:`${l}-progress-graph`,"aria-hidden":!0},t("div",{class:`${l}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${m} ${m}`},t("defs",null,x.map((g,v)=>S(g,v))),x.map((g,v)=>t("g",{key:v},t("path",{class:`${l}-progress-graph-circle-rail`,d:$e(m/2-f/2*(1+2*v)-o*v,f,m),"stroke-width":f,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:h[v]},C[v]]}),t("path",{class:[`${l}-progress-graph-circle-fill`,g===0&&`${l}-progress-graph-circle-fill--empty`],d:$e(m/2-f/2*(1+2*v)-o*v,f,m),"stroke-width":f,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:d.value[v],strokeDashoffset:0,stroke:typeof w[v]=="object"?`url(#gradient-${v})`:w[v]}})))))),c&&n.default?t("div",null,t("div",{class:`${l}-progress-text`},n.default())):null)}}}),Dr=O([p("progress",{display:"inline-block"},[p("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),A("line",`
 width: 100%;
 display: block;
 `,[p("progress-content",`
 display: flex;
 align-items: center;
 `,[p("progress-graph",{flex:1})]),p("progress-custom-content",{marginLeft:"14px"}),p("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[A("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),A("circle, dashboard",{width:"120px"},[p("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p("progress-text",`
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
 `),p("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),A("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[p("progress-text",`
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
 `)]),p("progress-content",{position:"relative"}),p("progress-graph",{position:"relative"},[p("progress-graph-circle",[O("svg",{verticalAlign:"bottom"}),p("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[A("empty",{opacity:0})]),p("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),p("progress-graph-line",[A("indicator-inside",[p("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[p("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),p("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),A("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[p("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),p("progress-graph-line-indicator",`
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
 `)]),p("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[p("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[A("processing",[O("&::after",`
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
 `)]),Ir=Object.assign(Object.assign({},ee.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Tr=F({name:"Progress",props:Ir,setup(e){const n=P(()=>e.indicatorPlacement||e.indicatorPosition),d=P(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:S,inlineThemeDisabled:m}=de(e),f=ee("Progress","-progress",Dr,sr,e,S),o=P(()=>{const{status:w}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:C,fontSizeCircle:x,railColor:l,railHeight:g,iconSizeCircle:v,iconSizeLine:s,textColorCircle:R,textColorLineInner:N,textColorLineOuter:$,lineBgProcessing:_,fontWeightCircle:D,[ce("iconColor",w)]:U,[ce("fillColor",w)]:b}}=f.value;return{"--n-bezier":h,"--n-fill-color":b,"--n-font-size":C,"--n-font-size-circle":x,"--n-font-weight-circle":D,"--n-icon-color":U,"--n-icon-size-circle":v,"--n-icon-size-line":s,"--n-line-bg-processing":_,"--n-rail-color":l,"--n-rail-height":g,"--n-text-color-circle":R,"--n-text-color-line-inner":N,"--n-text-color-line-outer":$}}),c=m?ge("progress",P(()=>e.status[0]),o,e):void 0;return{mergedClsPrefix:S,mergedIndicatorPlacement:n,gapDeg:d,cssVars:m?void 0:o,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:n,indicatorTextColor:d,showIndicator:S,status:m,railColor:f,railStyle:o,color:c,percentage:w,viewBoxWidth:h,strokeWidth:C,mergedIndicatorPlacement:x,unit:l,borderRadius:g,fillBorderRadius:v,height:s,processing:R,circleGap:N,mergedClsPrefix:$,gapDeg:_,gapOffsetDegree:D,themeClass:U,$slots:b,onRender:j}=this;return j==null||j(),t("div",{class:[U,`${$}-progress`,`${$}-progress--${e}`,`${$}-progress--${m}`],style:n,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":w,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Br,{clsPrefix:$,status:m,showIndicator:S,indicatorTextColor:d,railColor:f,fillColor:c,railStyle:o,offsetDegree:this.offsetDegree,percentage:w,viewBoxWidth:h,strokeWidth:C,gapDegree:_===void 0?e==="dashboard"?75:0:_,gapOffsetDegree:D,unit:l},b):e==="line"?t(jr,{clsPrefix:$,status:m,showIndicator:S,indicatorTextColor:d,railColor:f,fillColor:c,railStyle:o,percentage:w,processing:R,indicatorPlacement:x,unit:l,fillBorderRadius:v,railBorderRadius:g,height:s},b):e==="multiple-circle"?t(Mr,{clsPrefix:$,strokeWidth:C,railColor:f,fillColor:c,railStyle:o,viewBoxWidth:h,percentage:w,showIndicator:S,circleGap:N},b):null)}}),Or=p("statistic",[L("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),p("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[L("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[p("icon",{verticalAlign:"-0.125em"})]),L("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),L("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[p("icon",{verticalAlign:"-0.125em"})])])]),Wr=Object.assign(Object.assign({},ee.props),{tabularNums:Boolean,label:String,value:[String,Number]}),se=F({name:"Statistic",props:Wr,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:d,mergedRtlRef:S}=de(e),m=ee("Statistic","-statistic",Or,cr,e,n),f=Ne("Statistic",S,n),o=P(()=>{const{self:{labelFontWeight:w,valueFontSize:h,valueFontWeight:C,valuePrefixTextColor:x,labelTextColor:l,valueSuffixTextColor:g,valueTextColor:v,labelFontSize:s},common:{cubicBezierEaseInOut:R}}=m.value;return{"--n-bezier":R,"--n-label-font-size":s,"--n-label-font-weight":w,"--n-label-text-color":l,"--n-value-font-weight":C,"--n-value-font-size":h,"--n-value-prefix-text-color":x,"--n-value-suffix-text-color":g,"--n-value-text-color":v}}),c=d?ge("statistic",void 0,o,e):void 0;return{rtlEnabled:f,mergedClsPrefix:n,cssVars:d?void 0:o,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{mergedClsPrefix:n,$slots:{default:d,label:S,prefix:m,suffix:f}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),t("div",{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},te(S,o=>t("div",{class:`${n}-statistic__label`},this.label||o)),t("div",{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},te(m,o=>o&&t("span",{class:`${n}-statistic-value__prefix`},o)),this.value!==void 0?t("span",{class:`${n}-statistic-value__content`},this.value):te(d,o=>o&&t("span",{class:`${n}-statistic-value__content`},o)),te(f,o=>o&&t("span",{class:`${n}-statistic-value__suffix`},o))))}}),Ar={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Lr=F({name:"CheckmarkCircleOutline",render:function(n,d){return W(),J("svg",Ar,d[0]||(d[0]=[X("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),X("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 176L217.6 336L160 272"},null,-1)]))}}),Ur={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fr=F({name:"HardwareChipOutline",render:function(n,d){return W(),J("svg",Ur,d[0]||(d[0]=[De('<rect x="80" y="80" width="352" height="352" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="144" y="144" width="224" height="224" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 80V48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464v-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 256h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 336h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 176h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 336h32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 176h32"></path>',14)]))}}),Gr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vr=F({name:"LayersOutline",render:function(n,d){return W(),J("svg",Gr,d[0]||(d[0]=[X("path",{d:"M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),X("path",{d:"M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),X("path",{d:"M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),qr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Er=F({name:"PlayCircleOutline",render:function(n,d){return W(),J("svg",qr,d[0]||(d[0]=[X("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),X("path",{d:"M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",fill:"currentColor"},null,-1)]))}}),Hr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Kr=F({name:"SpeedometerOutline",render:function(n,d){return W(),J("svg",Hr,d[0]||(d[0]=[De('<path d="M326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14z" fill="currentColor"></path><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 288h-32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 288H96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M165.49 197.49l-22.63-22.63"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M346.51 197.49l22.63-22.63"></path>',7)]))}}),ot={__name:"Dashboard",setup(e){const n=fr(),d=I(!1),S=I(!1),m=I(!1),f=I(!1),o=I(!1),c=I(!1),w=I({memory_mb:0,cpu_percent:0}),h=I([]),C=I(null),x=I(""),l=I([]),g=I(null);let v=null;const s=P(()=>h.value.map(k=>({label:k.name,value:k.name})));function R(k){k?l.value=h.value.map(u=>u.name):l.value=[]}function N(k){return{pending:"default",running:"info",canceling:"warning",canceled:"warning",completed:"success",failed:"error"}[k]||"default"}function $(k){return{pending:"等待中",running:"运行中",canceling:"取消中",canceled:"已取消",completed:"已完成",failed:"有失败"}[k]||k}async function _(){d.value=!0;try{const[k,u]=await Promise.all([Y.getStatus(),Y.getServers()]);w.value=k,h.value=u.servers||[]}catch(k){n.error("加载数据失败: "+k.message)}finally{d.value=!1}}async function D(){S.value=!0;try{await Y.reloadConfig(),n.success("配置已重新加载"),await _()}catch(k){n.error("重新加载配置失败: "+k.message)}finally{S.value=!1}}async function U(){if(!C.value){n.warning("请选择服务器");return}m.value=!0;try{await Y.generateCover(C.value,x.value||null),n.success("封面生成任务已启动"),o.value=!1,C.value=null,x.value=""}catch(k){n.error("启动生成任务失败: "+k.message)}finally{m.value=!1}}async function b(){if(l.value.length===0){n.warning("请选择至少一个服务器");return}try{const k=l.value.map(y=>({server_name:y,library_name:null})),u=await Y.createBatch(k);g.value=u.job,c.value=!0,j(u.job.job_id),n.success("批量任务已创建")}catch(k){n.error("创建批量任务失败: "+k.message)}}function j(k){B(),v=setInterval(async()=>{try{const u=await Y.getBatchStatus(k);g.value=u.job,["completed","failed","canceled"].includes(u.job.status)&&B()}catch(u){console.error("Failed to poll batch status:",u)}},3e3)}function B(){v&&(clearInterval(v),v=null)}async function V(){if(g.value){f.value=!0;try{const k=await Y.cancelBatch(g.value.job_id);g.value=k.job,n.success("任务已取消")}catch(k){n.error("取消任务失败: "+k.message)}finally{f.value=!1}}}return dr(()=>{_()}),ur(()=>{B()}),(k,u)=>(W(),H(r(Q),{vertical:"",size:24},{default:a(()=>[i(r(ue),{title:"系统状态"},{default:a(()=>[i(r(hr),{show:d.value},{default:a(()=>[i(r(pr),{cols:4,"x-gap":16},{default:a(()=>[i(r(ae),null,{default:a(()=>[i(r(se),{label:"内存占用",value:w.value.memory_mb,suffix:"MB"},{prefix:a(()=>[i(r(E),{component:r(Fr)},null,8,["component"])]),_:1},8,["value"])]),_:1}),i(r(ae),null,{default:a(()=>[i(r(se),{label:"CPU 使用率",value:w.value.cpu_percent,suffix:"%"},{prefix:a(()=>[i(r(E),{component:r(Kr)},null,8,["component"])]),_:1},8,["value"])]),_:1}),i(r(ae),null,{default:a(()=>[i(r(se),{label:"服务器数量",value:h.value.length},{prefix:a(()=>[i(r(E),{component:r(ve)},null,8,["component"])]),_:1},8,["value"])]),_:1}),i(r(ae),null,{default:a(()=>[i(r(se),{label:"运行状态",value:"正常"},{prefix:a(()=>[i(r(E),{component:r(Lr),color:"green"},null,8,["component"])]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1}),i(r(ue),{title:"快速操作"},{default:a(()=>[i(r(Q),null,{default:a(()=>[i(r(K),{type:"primary",onClick:u[0]||(u[0]=y=>o.value=!0)},{icon:a(()=>[i(r(E),{component:r(Er)},null,8,["component"])]),default:a(()=>[u[8]||(u[8]=M(" 立即生成封面 ",-1))]),_:1}),i(r(K),{type:"info",onClick:b,disabled:l.value.length===0},{icon:a(()=>[i(r(E),{component:r(Vr)},null,8,["component"])]),default:a(()=>[M(" 批量生成 "+G(l.value.length>0?`(${l.value.length})`:""),1)]),_:1},8,["disabled"]),i(r(K),{onClick:D,loading:S.value},{icon:a(()=>[i(r(E),{component:r(xe)},null,8,["component"])]),default:a(()=>[u[9]||(u[9]=M(" 重新加载配置 ",-1))]),_:1},8,["loading"]),i(r(K),{onClick:_},{icon:a(()=>[i(r(E),{component:r(xe)},null,8,["component"])]),default:a(()=>[u[10]||(u[10]=M(" 刷新数据 ",-1))]),_:1})]),_:1})]),_:1}),i(r(ue),{title:"服务器列表"},{"header-extra":a(()=>[h.value.length>0?(W(),H(r(Se),{key:0,checked:l.value.length===h.value.length,indeterminate:l.value.length>0&&l.value.length<h.value.length,"onUpdate:checked":R},{default:a(()=>[...u[11]||(u[11]=[M(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])):re("",!0)]),default:a(()=>[i(r(Sr),{value:l.value,"onUpdate:value":u[1]||(u[1]=y=>l.value=y)},{default:a(()=>[i(r(ye),{bordered:""},{default:a(()=>[(W(!0),J(be,null,me(h.value,y=>(W(),H(r(we),{key:y.name},{prefix:a(()=>[i(r(Se),{value:y.name,style:{"margin-right":"12px"}},null,8,["value"]),i(r(E),{component:r(ve),size:"24"},null,8,["component"])]),default:a(()=>[i(r(br),{title:y.name,description:`类型: ${y.type.toUpperCase()} | URL: ${y.url}`},{"header-extra":a(()=>[i(r(fe),{type:y.type==="emby"?"success":"info"},{default:a(()=>[M(G(y.type.toUpperCase()),1)]),_:2},1032,["type"])]),_:2},1032,["title","description"])]),_:2},1024))),128)),h.value.length===0?(W(),H(r(mr),{key:0,description:"暂无服务器配置"})):re("",!0)]),_:1})]),_:1},8,["value"])]),_:1}),i(r(ke),{show:o.value,"onUpdate:show":u[5]||(u[5]=y=>o.value=y),preset:"dialog",title:"生成封面"},{action:a(()=>[i(r(Q),null,{default:a(()=>[i(r(K),{onClick:u[4]||(u[4]=y=>o.value=!1)},{default:a(()=>[...u[12]||(u[12]=[M("取消",-1)])]),_:1}),i(r(K),{type:"primary",onClick:U,loading:m.value},{default:a(()=>[...u[13]||(u[13]=[M(" 开始生成 ",-1)])]),_:1},8,["loading"])]),_:1})]),default:a(()=>[i(r(kr),null,{default:a(()=>[i(r(Ce),{label:"选择服务器"},{default:a(()=>[i(r(yr),{value:C.value,"onUpdate:value":u[2]||(u[2]=y=>C.value=y),options:s.value,placeholder:"请选择服务器"},null,8,["value","options"])]),_:1}),i(r(Ce),{label:"媒体库（可选）"},{default:a(()=>[i(r(xr),{value:x.value,"onUpdate:value":u[3]||(u[3]=y=>x.value=y),placeholder:"留空则生成所有媒体库"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["show"]),i(r(ke),{show:c.value,"onUpdate:show":u[7]||(u[7]=y=>c.value=y),preset:"card",title:"批量生成进度",style:{width:"600px"}},{footer:a(()=>[i(r(Q),{justify:"end"},{default:a(()=>[g.value&&!["completed","failed","canceled"].includes(g.value.status)?(W(),H(r(K),{key:0,type:"error",onClick:V,loading:f.value},{default:a(()=>[...u[14]||(u[14]=[M(" 取消任务 ",-1)])]),_:1},8,["loading"])):re("",!0),i(r(K),{onClick:u[6]||(u[6]=y=>c.value=!1)},{default:a(()=>[...u[15]||(u[15]=[M("关闭",-1)])]),_:1})]),_:1})]),default:a(()=>[i(r(Q),{vertical:"",size:16},{default:a(()=>{var y,oe,ne,le;return[i(r(wr),{bordered:"",column:2},{default:a(()=>[i(r(ie),{label:"状态"},{default:a(()=>{var z;return[i(r(fe),{type:N((z=g.value)==null?void 0:z.status)},{default:a(()=>{var q;return[M(G($((q=g.value)==null?void 0:q.status)),1)]}),_:1},8,["type"])]}),_:1}),i(r(ie),{label:"进度"},{default:a(()=>{var z,q;return[M(G(((z=g.value)==null?void 0:z.completed)||0)+" / "+G(((q=g.value)==null?void 0:q.total)||0),1)]}),_:1}),i(r(ie),{label:"成功"},{default:a(()=>[i(r(he),{type:"success"},{default:a(()=>{var z;return[M(G(((z=g.value)==null?void 0:z.completed)||0),1)]}),_:1})]),_:1}),i(r(ie),{label:"失败"},{default:a(()=>[i(r(he),{type:"error"},{default:a(()=>{var z;return[M(G(((z=g.value)==null?void 0:z.failed)||0),1)]}),_:1})]),_:1})]),_:1}),i(r(Tr),{type:"line",percentage:((y=g.value)==null?void 0:y.progress)||0,status:((oe=g.value)==null?void 0:oe.failed)>0?"warning":"success","indicator-placement":"inside"},null,8,["percentage","status"]),(le=(ne=g.value)==null?void 0:ne.results)!=null&&le.length?(W(),H(r(gr),{key:0},{default:a(()=>[i(r(vr),{title:"任务详情",name:"details"},{default:a(()=>[i(r(ye),{bordered:"",size:"small"},{default:a(()=>[(W(!0),J(be,null,me(g.value.results,(z,q)=>(W(),H(r(we),{key:q},{default:a(()=>[i(r(Q),{justify:"space-between",align:"center",style:{width:"100%"}},{default:a(()=>[X("span",null,G(z.target.server_name)+G(z.target.library_name?"/"+z.target.library_name:""),1),i(r(fe),{type:z.status==="success"?"success":z.status==="failed"?"error":"warning",size:"small"},{default:a(()=>[M(G(z.status==="success"?"成功":z.status==="failed"?"失败":"已取消"),1)]),_:2},1032,["type"])]),_:2},1024),z.message&&z.status!=="success"?(W(),H(r(he),{key:0,type:"error",depth:"3",style:{"font-size":"12px"}},{default:a(()=>[M(G(z.message),1)]),_:2},1024)):re("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):re("",!0)]}),_:1})]),_:1},8,["show"])]),_:1}))}};export{ot as default};
