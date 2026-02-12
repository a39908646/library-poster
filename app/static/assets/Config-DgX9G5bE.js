import{d as de,h as v,aT as ea,aU as ta,r as L,aV as dt,s as ot,c as K,aW as aa,aX as ra,aY as je,aZ as na,aj as Rt,g as p,i,j as g,k as U,u as Oe,O as lt,av as he,w as ue,z as it,t as J,al as oa,a_ as la,o as Ie,a as ia,b as $t,v as ve,y as Tt,aC as ut,C as rt,a$ as ct,f as ae,aJ as Be,q as ft,b0 as sa,a9 as _t,m as da,n as ua,b1 as ca,B as X,e as fa,a7 as ba,aO as va,a2 as zt,b2 as pa,b3 as ha,b4 as ma,aa as He,aP as Ge,b5 as ga,b6 as xa,aD as ya,ae as bt,b7 as wa,aq as Ca,at as Sa,b8 as Ra,aQ as $a,b9 as _e,p as Ta,Q as pe,R as b,T as s,V as Je,J as se,X as c,U as ze,Y as _a,$ as Pe,a0 as te,Z as Xe,K as za,a3 as Pa,a5 as Ke,L as G,a4 as ka}from"./index-DXdFuH5K.js";import{a as Pt,A as Na,N as Ba}from"./AddOutline-Cdw8vucD.js";import{i as ja,c as re,u as Ia,a as me,b as F,N as Oa}from"./FormItem-jJsAIIqM.js";import{N as Ea,a as Va,R as La}from"./RefreshOutline-DC7m93qa.js";import{N as vt,S as Aa}from"./SaveOutline-VsEJs8ui.js";import{u as Wa,N as Ma}from"./Spin-DElXLdiL.js";import{N as pt}from"./Select-DpgfFTgQ.js";import{N as qe}from"./Divider-CM6gE9TA.js";const Fa=dt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[dt("&::-webkit-scrollbar",{width:0,height:0})]),Ua=de({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function t(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const d=ea();return Fa.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ta,ssr:d}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...n){var S;(S=e.value)===null||S===void 0||S.scrollTo(...n)}})},render(){return v("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function Da(e,t){const d=ot(aa,null);return K(()=>e.hljs||(d==null?void 0:d.mergedHljsRef.value))}var Ha=/\s/;function Ga(e){for(var t=e.length;t--&&Ha.test(e.charAt(t)););return t}var Ja=/^\s+/;function Xa(e){return e&&e.slice(0,Ga(e)+1).replace(Ja,"")}var ht=NaN,Ka=/^[-+]0x[0-9a-f]+$/i,qa=/^0b[01]+$/i,Ya=/^0o[0-7]+$/i,Qa=parseInt;function mt(e){if(typeof e=="number")return e;if(ra(e))return ht;if(je(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=je(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Xa(e);var d=qa.test(e);return d||Ya.test(e)?Qa(e.slice(2),d?2:8):Ka.test(e)?ht:+e}var Ye=function(){return na.Date.now()},Za="Expected a function",er=Math.max,tr=Math.min;function ar(e,t,d){var w,n,S,_,R,N,k=0,z=!1,V=!1,B=!0;if(typeof e!="function")throw new TypeError(Za);t=mt(t)||0,je(d)&&(z=!!d.leading,V="maxWait"in d,S=V?er(mt(d.maxWait)||0,t):S,B="trailing"in d?!!d.trailing:B);function h($){var O=w,D=n;return w=n=void 0,k=$,_=e.apply(D,O),_}function x($){return k=$,R=setTimeout(C,t),z?h($):_}function r($){var O=$-N,D=$-k,M=t-O;return V?tr(M,S-D):M}function u($){var O=$-N,D=$-k;return N===void 0||O>=t||O<0||V&&D>=S}function C(){var $=Ye();if(u($))return j($);R=setTimeout(C,r($))}function j($){return R=void 0,B&&w?h($):(w=n=void 0,_)}function I(){R!==void 0&&clearTimeout(R),k=0,w=N=n=R=void 0}function A(){return R===void 0?_:j(Ye())}function P(){var $=Ye(),O=u($);if(w=arguments,n=this,N=$,O){if(R===void 0)return x(N);if(V)return clearTimeout(R),R=setTimeout(C,t),h(N)}return R===void 0&&(R=setTimeout(C,t)),_}return P.cancel=I,P.flush=A,P}var rr="Expected a function";function nr(e,t,d){var w=!0,n=!0;if(typeof e!="function")throw new TypeError(rr);return je(d)&&(w="leading"in d?!!d.leading:w,n="trailing"in d?!!d.trailing:n),ar(e,t,{leading:w,maxWait:t,trailing:n})}const or=de({name:"Remove",render(){return v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},v("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function lr(e){const{textColor2:t,fontSize:d,fontWeightStrong:w,textColor3:n}=e;return{textColor:t,fontSize:d,fontWeightStrong:w,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:n}}const ir={common:Rt,self:lr},sr=p([i("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[g("show-line-numbers",`
 display: flex;
 `),U("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),g("word-wrap",[p("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),p("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),p("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),dr=Object.assign(Object.assign({},ue.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Qe=de({name:"Code",props:dr,setup(e,{slots:t}){const{internalNoHighlight:d}=e,{mergedClsPrefixRef:w,inlineThemeDisabled:n}=Oe(),S=L(null),_=d?{value:void 0}:Da(e),R=(h,x,r)=>{const{value:u}=_;return!u||!(h&&u.getLanguage(h))?null:u.highlight(r?x.trim():x,{language:h}).value},N=K(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),k=()=>{if(t.default)return;const{value:h}=S;if(!h)return;const{language:x}=e,r=e.uri?window.decodeURIComponent(e.code):e.code;if(x){const C=R(x,r,e.trim);if(C!==null){if(e.inline)h.innerHTML=C;else{const j=h.querySelector(".__code__");j&&h.removeChild(j);const I=document.createElement("pre");I.className="__code__",I.innerHTML=C,h.appendChild(I)}return}}if(e.inline){h.textContent=r;return}const u=h.querySelector(".__code__");if(u)u.textContent=r;else{const C=document.createElement("pre");C.className="__code__",C.textContent=r,h.innerHTML="",h.appendChild(C)}};lt(k),he(J(e,"language"),k),he(J(e,"code"),k),d||he(_,k);const z=ue("Code","-code",sr,ir,e,w),V=K(()=>{const{common:{cubicBezierEaseInOut:h,fontFamilyMono:x},self:{textColor:r,fontSize:u,fontWeightStrong:C,lineNumberTextColor:j,"mono-3":I,"hue-1":A,"hue-2":P,"hue-3":$,"hue-4":O,"hue-5":D,"hue-5-2":M,"hue-6":ne,"hue-6-2":q}}=z.value,{internalFontSize:Y}=e;return{"--n-font-size":Y?`${Y}px`:u,"--n-font-family":x,"--n-font-weight-strong":C,"--n-bezier":h,"--n-text-color":r,"--n-mono-3":I,"--n-hue-1":A,"--n-hue-2":P,"--n-hue-3":$,"--n-hue-4":O,"--n-hue-5":D,"--n-hue-5-2":M,"--n-hue-6":ne,"--n-hue-6-2":q,"--n-line-number-text-color":j}}),B=n?it("code",K(()=>`${e.internalFontSize||"a"}`),V,e):void 0;return{mergedClsPrefix:w,codeRef:S,mergedShowLineNumbers:N,lineNumbers:K(()=>{let h=1;const x=[];let r=!1;for(const u of e.code)u===`
`?(r=!0,x.push(h++)):r=!1;return r||x.push(h++),x.join(`
`)}),cssVars:n?void 0:V,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){var e,t;const{mergedClsPrefix:d,wordWrap:w,mergedShowLineNumbers:n,onRender:S}=this;return S==null||S(),v("code",{class:[`${d}-code`,this.themeClass,w&&`${d}-code--word-wrap`,n&&`${d}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},n?v("pre",{class:`${d}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function ur(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}const cr=oa({name:"InputNumber",common:Rt,peers:{Button:la,Input:ja},self:ur}),fr=p([i("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),i("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]);function br(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function vr(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^-?\d*$/.test(e))||e==="-"||e==="-0"}function Ze(e){return e==null?!0:!Number.isNaN(e)}function gt(e,t){return typeof e!="number"?"":t===void 0?String(e):e.toFixed(t)}function et(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const xt=800,yt=100,pr=Object.assign(Object.assign({},ue.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},round:{type:Boolean,default:void 0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),ke=de({name:"InputNumber",props:pr,slots:Object,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:d,mergedRtlRef:w}=Oe(e),n=ue("InputNumber","-input-number",fr,cr,e,d),{localeRef:S}=Ia("InputNumber"),_=ia(e),{mergedSizeRef:R,mergedDisabledRef:N,mergedStatusRef:k}=_,z=L(null),V=L(null),B=L(null),h=L(e.defaultValue),x=J(e,"value"),r=$t(x,h),u=L(""),C=l=>{const m=String(l).split(".")[1];return m?m.length:0},j=l=>{const m=[e.min,e.max,e.step,l].map(T=>T===void 0?0:C(T));return Math.max(...m)},I=ve(()=>{const{placeholder:l}=e;return l!==void 0?l:S.value.placeholder}),A=ve(()=>{const l=et(e.step);return l!==null?l===0?1:Math.abs(l):1}),P=ve(()=>{const l=et(e.min);return l!==null?l:null}),$=ve(()=>{const l=et(e.max);return l!==null?l:null}),O=()=>{const{value:l}=r;if(Ze(l)){const{format:m,precision:T}=e;m?u.value=m(l):l===null||T===void 0||C(l)>T?u.value=gt(l,void 0):u.value=gt(l,T)}else u.value=String(l)};O();const D=l=>{const{value:m}=r;if(l===m){O();return}const{"onUpdate:value":T,onUpdateValue:a,onChange:o}=e,{nTriggerFormInput:f,nTriggerFormChange:y}=_;o&&ae(o,l),a&&ae(a,l),T&&ae(T,l),h.value=l,f(),y()},M=({offset:l,doUpdateIfValid:m,fixPrecision:T,isInputing:a})=>{const{value:o}=u;if(a&&vr(o))return!1;const f=(e.parse||br)(o);if(f===null)return m&&D(null),null;if(Ze(f)){const y=C(f),{precision:E}=e;if(E!==void 0&&E<y&&!T)return!1;let W=Number.parseFloat((f+l).toFixed(E??j(f)));if(Ze(W)){const{value:H}=$,{value:ee}=P;if(H!==null&&W>H){if(!m||a)return!1;W=H}if(ee!==null&&W<ee){if(!m||a)return!1;W=ee}return e.validator&&!e.validator(W)?!1:(m&&D(W),W)}}return!1},ne=ve(()=>M({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),q=ve(()=>{const{value:l}=r;if(e.validator&&l===null)return!1;const{value:m}=A;return M({offset:-m,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),Y=ve(()=>{const{value:l}=r;if(e.validator&&l===null)return!1;const{value:m}=A;return M({offset:+m,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function oe(l){const{onFocus:m}=e,{nTriggerFormFocus:T}=_;m&&ae(m,l),T()}function ge(l){var m,T;if(l.target===((m=z.value)===null||m===void 0?void 0:m.wrapperElRef))return;const a=M({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(a!==!1){const y=(T=z.value)===null||T===void 0?void 0:T.inputElRef;y&&(y.value=String(a||"")),r.value===a&&O()}else O();const{onBlur:o}=e,{nTriggerFormBlur:f}=_;o&&ae(o,l),f(),Be(()=>{O()})}function Z(l){const{onClear:m}=e;m&&ae(m,l)}function xe(){const{value:l}=Y;if(!l){Ce();return}const{value:m}=r;if(m===null)e.validator||D(we());else{const{value:T}=A;M({offset:T,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function ye(){const{value:l}=q;if(!l){fe();return}const{value:m}=r;if(m===null)e.validator||D(we());else{const{value:T}=A;M({offset:-T,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Ee=oe,$e=ge;function we(){if(e.validator)return null;const{value:l}=P,{value:m}=$;return l!==null?Math.max(0,l):m!==null?Math.min(0,m):0}function Ve(l){Z(l),D(null)}function Le(l){var m,T,a;!((m=B.value)===null||m===void 0)&&m.$el.contains(l.target)&&l.preventDefault(),!((T=V.value)===null||T===void 0)&&T.$el.contains(l.target)&&l.preventDefault(),(a=z.value)===null||a===void 0||a.activate()}let ce=null,le=null,Q=null;function fe(){Q&&(window.clearTimeout(Q),Q=null),ce&&(window.clearInterval(ce),ce=null)}let be=null;function Ce(){be&&(window.clearTimeout(be),be=null),le&&(window.clearInterval(le),le=null)}function Ae(){fe(),Q=window.setTimeout(()=>{ce=window.setInterval(()=>{ye()},yt)},xt),ft("mouseup",document,fe,{once:!0})}function ie(){Ce(),be=window.setTimeout(()=>{le=window.setInterval(()=>{xe()},yt)},xt),ft("mouseup",document,Ce,{once:!0})}const We=()=>{le||xe()},Me=()=>{ce||ye()};function Fe(l){var m,T;if(l.key==="Enter"){if(l.target===((m=z.value)===null||m===void 0?void 0:m.wrapperElRef))return;M({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((T=z.value)===null||T===void 0||T.deactivate())}else if(l.key==="ArrowUp"){if(!Y.value||e.keyboard.ArrowUp===!1)return;l.preventDefault(),M({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&xe()}else if(l.key==="ArrowDown"){if(!q.value||e.keyboard.ArrowDown===!1)return;l.preventDefault(),M({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ye()}}function Se(l){u.value=l,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&M({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}he(r,()=>{O()});const Ue={focus:()=>{var l;return(l=z.value)===null||l===void 0?void 0:l.focus()},blur:()=>{var l;return(l=z.value)===null||l===void 0?void 0:l.blur()},select:()=>{var l;return(l=z.value)===null||l===void 0?void 0:l.select()}},De=Tt("InputNumber",w,d);return Object.assign(Object.assign({},Ue),{rtlEnabled:De,inputInstRef:z,minusButtonInstRef:V,addButtonInstRef:B,mergedClsPrefix:d,mergedBordered:t,uncontrolledValue:h,mergedValue:r,mergedPlaceholder:I,displayedValueInvalid:ne,mergedSize:R,mergedDisabled:N,displayedValue:u,addable:Y,minusable:q,mergedStatus:k,handleFocus:Ee,handleBlur:$e,handleClear:Ve,handleMouseDown:Le,handleAddClick:We,handleMinusClick:Me,handleAddMousedown:ie,handleMinusMousedown:Ae,handleKeyDown:Fe,handleUpdateDisplayedValue:Se,mergedTheme:n,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:K(()=>{const{self:{iconColorDisabled:l}}=n.value,[m,T,a,o]=sa(l);return{textColorTextDisabled:`rgb(${m}, ${T}, ${a})`,opacityDisabled:`${o}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,d=()=>v(ct,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ut(t["minus-icon"],()=>[v(rt,{clsPrefix:e},{default:()=>v(or,null)})])}),w=()=>v(ct,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ut(t["add-icon"],()=>[v(rt,{clsPrefix:e},{default:()=>v(Pt,null)})])});return v("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},v(re,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,round:this.round,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var n;return this.showButton&&this.buttonPlacement==="both"?[d(),Ie(t.prefix,S=>S?v("span",{class:`${e}-input-number-prefix`},S):null)]:(n=t.prefix)===null||n===void 0?void 0:n.call(t)},suffix:()=>{var n;return this.showButton?[Ie(t.suffix,S=>S?v("span",{class:`${e}-input-number-suffix`},S):null),this.buttonPlacement==="right"?d():null,w()]:(n=t.suffix)===null||n===void 0?void 0:n.call(t)}}))}}),hr=p([i("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[p("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[p("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),p("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[p("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),g("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[p("tr",[p("&:last-child",[p("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),g("single-line",[p("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),p("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),g("single-column",[p("tr",[p("&:not(:last-child)",[p("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),g("striped",[p("tr:nth-of-type(even)",[p("td","background-color: var(--n-td-color-striped)")])]),_t("bottom-bordered",[p("tr",[p("&:last-child",[p("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),da(i("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[p("th",`
 background-color: var(--n-th-color-modal);
 `),p("td",`
 background-color: var(--n-td-color-modal);
 `)])),ua(i("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[p("th",`
 background-color: var(--n-th-color-popover);
 `),p("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),mr=Object.assign(Object.assign({},ue.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),gr=de({name:"Table",props:mr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:d,mergedRtlRef:w}=Oe(e),n=ue("Table","-table",hr,ca,e,t),S=Tt("Table",w,t),_=K(()=>{const{size:N}=e,{self:{borderColor:k,tdColor:z,tdColorModal:V,tdColorPopover:B,thColor:h,thColorModal:x,thColorPopover:r,thTextColor:u,tdTextColor:C,borderRadius:j,thFontWeight:I,lineHeight:A,borderColorModal:P,borderColorPopover:$,tdColorStriped:O,tdColorStripedModal:D,tdColorStripedPopover:M,[X("fontSize",N)]:ne,[X("tdPadding",N)]:q,[X("thPadding",N)]:Y},common:{cubicBezierEaseInOut:oe}}=n.value;return{"--n-bezier":oe,"--n-td-color":z,"--n-td-color-modal":V,"--n-td-color-popover":B,"--n-td-text-color":C,"--n-border-color":k,"--n-border-color-modal":P,"--n-border-color-popover":$,"--n-border-radius":j,"--n-font-size":ne,"--n-th-color":h,"--n-th-color-modal":x,"--n-th-color-popover":r,"--n-th-font-weight":I,"--n-th-text-color":u,"--n-line-height":A,"--n-td-padding":q,"--n-th-padding":Y,"--n-td-color-striped":O,"--n-td-color-striped-modal":D,"--n-td-color-striped-popover":M}}),R=d?it("table",K(()=>e.size[0]),_,e):void 0;return{rtlEnabled:S,mergedClsPrefix:t,cssVars:d?void 0:_,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("table",{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),st=fa("n-tabs"),kt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ne=de({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:kt,slots:Object,setup(e){const t=ot(st,null);return t||ba("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return v("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),xr=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ma(kt,["displayDirective"])),nt=de({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:xr,setup(e){const{mergedClsPrefixRef:t,valueRef:d,typeRef:w,closableRef:n,tabStyleRef:S,addTabStyleRef:_,tabClassRef:R,addTabClassRef:N,tabChangeIdRef:k,onBeforeLeaveRef:z,triggerRef:V,handleAdd:B,activateTab:h,handleClose:x}=ot(st);return{trigger:V,mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:r}=e;return r===void 0?n.value:r}),style:S,addStyle:_,tabClass:R,addTabClass:N,clsPrefix:t,value:d,type:w,handleClose(r){r.stopPropagation(),!e.disabled&&x(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){B();return}const{name:r}=e,u=++k.id;if(r!==d.value){const{value:C}=z;C?Promise.resolve(C(e.name,d.value)).then(j=>{j&&k.id===u&&h(r)}):h(r)}}}},render(){const{internalAddable:e,clsPrefix:t,name:d,disabled:w,label:n,tab:S,value:_,mergedClosable:R,trigger:N,$slots:{default:k}}=this,z=n??S;return v("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?v("div",{class:`${t}-tabs-tab-pad`}):null,v("div",Object.assign({key:d,"data-name":d,"data-disabled":w?!0:void 0},va({class:[`${t}-tabs-tab`,_===d&&`${t}-tabs-tab--active`,w&&`${t}-tabs-tab--disabled`,R&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:N==="click"?this.activateTab:void 0,onMouseenter:N==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),v("span",{class:`${t}-tabs-tab__label`},e?v(zt,null,v("div",{class:`${t}-tabs-tab__height-placeholder`}," "),v(rt,{clsPrefix:t},{default:()=>v(Pt,null)})):k?k():typeof z=="object"?z:pa(z??d)),R&&this.type==="card"?v(ha,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:w}):null))}}),yr=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[g("segment-type",[i("tabs-rail",[p("&.transition-disabled",[i("tabs-capsule",`
 transition: none;
 `)])])]),g("top",[i("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),g("left",[i("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),g("left, right",`
 flex-direction: row;
 `,[i("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),i("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),g("right",`
 flex-direction: row-reverse;
 `,[i("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),i("tabs-bar",`
 left: 0;
 `)]),g("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[i("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),i("tabs-bar",`
 top: 0;
 `)]),i("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),p("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),g("flex",[i("tabs-nav",`
 width: 100%;
 position: relative;
 `,[i("tabs-wrapper",`
 width: 100%;
 `,[i("tabs-tab",`
 margin-right: 0;
 `)])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[U("prefix, suffix",`
 display: flex;
 align-items: center;
 `),U("prefix","padding-right: 16px;"),U("suffix","padding-left: 16px;")]),g("top, bottom",[p(">",[i("tabs-nav",[i("tabs-nav-scroll-wrapper",[p("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),p("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),g("shadow-start",[p("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-end",[p("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),g("left, right",[i("tabs-nav-scroll-content",`
 flex-direction: column;
 `),p(">",[i("tabs-nav",[i("tabs-nav-scroll-wrapper",[p("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),p("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),g("shadow-start",[p("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-end",[p("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[i("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[p("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),p("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("disabled",{cursor:"not-allowed"}),U("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[p("&.transition-disabled",`
 transition: none;
 `),g("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[p("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),p("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),p("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),p("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),p("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),g("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[p("&:hover",{color:"var(--n-tab-text-color-hover)"}),g("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),g("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[g("line-type",[g("top",[U("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 bottom: -1px;
 `)]),g("left",[U("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 right: -1px;
 `)]),g("right",[U("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 left: -1px;
 `)]),g("bottom",[U("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 top: -1px;
 `)]),U("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-bar",`
 border-radius: 0;
 `)]),g("card-type",[U("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[g("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[U("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),_t("disabled",[p("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 8px;"),g("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")])]),g("left, right",`
 flex-direction: column; 
 `,[U("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),i("tabs-wrapper",`
 flex-direction: column;
 `),i("tabs-tab-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),g("top",[g("card-type",[i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),U("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-bottom: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),g("left",[g("card-type",[i("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),U("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-right: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),g("right",[g("card-type",[i("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),U("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-left: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),g("bottom",[g("card-type",[i("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),U("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[g("active",`
 border-top: 1px solid #0000;
 `)]),i("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),tt=nr,wr=Object.assign(Object.assign({},ue.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Cr=de({name:"Tabs",props:wr,slots:Object,setup(e,{slots:t}){var d,w,n,S;const{mergedClsPrefixRef:_,inlineThemeDisabled:R}=Oe(e),N=ue("Tabs","-tabs",yr,ga,e,_),k=L(null),z=L(null),V=L(null),B=L(null),h=L(null),x=L(null),r=L(!0),u=L(!0),C=bt(e,["labelSize","size"]),j=bt(e,["activeName","value"]),I=L((w=(d=j.value)!==null&&d!==void 0?d:e.defaultValue)!==null&&w!==void 0?w:t.default?(S=(n=He(t.default())[0])===null||n===void 0?void 0:n.props)===null||S===void 0?void 0:S.name:null),A=$t(j,I),P={id:0},$=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});he(A,()=>{P.id=0,q(),Y()});function O(){var a;const{value:o}=A;return o===null?null:(a=k.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${o}"]`)}function D(a){if(e.type==="card")return;const{value:o}=z;if(!o)return;const f=o.style.opacity==="0";if(a){const y=`${_.value}-tabs-bar--disabled`,{barWidth:E,placement:W}=e;if(a.dataset.disabled==="true"?o.classList.add(y):o.classList.remove(y),["top","bottom"].includes(W)){if(ne(["top","maxHeight","height"]),typeof E=="number"&&a.offsetWidth>=E){const H=Math.floor((a.offsetWidth-E)/2)+a.offsetLeft;o.style.left=`${H}px`,o.style.maxWidth=`${E}px`}else o.style.left=`${a.offsetLeft}px`,o.style.maxWidth=`${a.offsetWidth}px`;o.style.width="8192px",f&&(o.style.transition="none"),o.offsetWidth,f&&(o.style.transition="",o.style.opacity="1")}else{if(ne(["left","maxWidth","width"]),typeof E=="number"&&a.offsetHeight>=E){const H=Math.floor((a.offsetHeight-E)/2)+a.offsetTop;o.style.top=`${H}px`,o.style.maxHeight=`${E}px`}else o.style.top=`${a.offsetTop}px`,o.style.maxHeight=`${a.offsetHeight}px`;o.style.height="8192px",f&&(o.style.transition="none"),o.offsetHeight,f&&(o.style.transition="",o.style.opacity="1")}}}function M(){if(e.type==="card")return;const{value:a}=z;a&&(a.style.opacity="0")}function ne(a){const{value:o}=z;if(o)for(const f of a)o.style[f]=""}function q(){if(e.type==="card")return;const a=O();a?D(a):M()}function Y(){var a;const o=(a=h.value)===null||a===void 0?void 0:a.$el;if(!o)return;const f=O();if(!f)return;const{scrollLeft:y,offsetWidth:E}=o,{offsetLeft:W,offsetWidth:H}=f;y>W?o.scrollTo({top:0,left:W,behavior:"smooth"}):W+H>y+E&&o.scrollTo({top:0,left:W+H-E,behavior:"smooth"})}const oe=L(null);let ge=0,Z=null;function xe(a){const o=oe.value;if(o){ge=a.getBoundingClientRect().height;const f=`${ge}px`,y=()=>{o.style.height=f,o.style.maxHeight=f};Z?(y(),Z(),Z=null):Z=y}}function ye(a){const o=oe.value;if(o){const f=a.getBoundingClientRect().height,y=()=>{document.body.offsetHeight,o.style.maxHeight=`${f}px`,o.style.height=`${Math.max(ge,f)}px`};Z?(Z(),Z=null,y()):Z=y}}function Ee(){const a=oe.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:o}=e;if(typeof o=="string")a.style.cssText=o;else if(o){const{maxHeight:f,height:y}=o;f!==void 0&&(a.style.maxHeight=f),y!==void 0&&(a.style.height=y)}}}const $e={value:[]},we=L("next");function Ve(a){const o=A.value;let f="next";for(const y of $e.value){if(y===o)break;if(y===a){f="prev";break}}we.value=f,Le(a)}function Le(a){const{onActiveNameChange:o,onUpdateValue:f,"onUpdate:value":y}=e;o&&ae(o,a),f&&ae(f,a),y&&ae(y,a),I.value=a}function ce(a){const{onClose:o}=e;o&&ae(o,a)}function le(){const{value:a}=z;if(!a)return;const o="transition-disabled";a.classList.add(o),q(),a.classList.remove(o)}const Q=L(null);function fe({transitionDisabled:a}){const o=k.value;if(!o)return;a&&o.classList.add("transition-disabled");const f=O();f&&Q.value&&(Q.value.style.width=`${f.offsetWidth}px`,Q.value.style.height=`${f.offsetHeight}px`,Q.value.style.transform=`translateX(${f.offsetLeft-wa(getComputedStyle(o).paddingLeft)}px)`,a&&Q.value.offsetWidth),a&&o.classList.remove("transition-disabled")}he([A],()=>{e.type==="segment"&&Be(()=>{fe({transitionDisabled:!1})})}),lt(()=>{e.type==="segment"&&fe({transitionDisabled:!0})});let be=0;function Ce(a){var o;if(a.contentRect.width===0&&a.contentRect.height===0||be===a.contentRect.width)return;be=a.contentRect.width;const{type:f}=e;if((f==="line"||f==="bar")&&le(),f!=="segment"){const{placement:y}=e;Se((y==="top"||y==="bottom"?(o=h.value)===null||o===void 0?void 0:o.$el:x.value)||null)}}const Ae=tt(Ce,64);he([()=>e.justifyContent,()=>e.size],()=>{Be(()=>{const{type:a}=e;(a==="line"||a==="bar")&&le()})});const ie=L(!1);function We(a){var o;const{target:f,contentRect:{width:y,height:E}}=a,W=f.parentElement.parentElement.offsetWidth,H=f.parentElement.parentElement.offsetHeight,{placement:ee}=e;if(!ie.value)ee==="top"||ee==="bottom"?W<y&&(ie.value=!0):H<E&&(ie.value=!0);else{const{value:Re}=B;if(!Re)return;ee==="top"||ee==="bottom"?W-y>Re.$el.offsetWidth&&(ie.value=!1):H-E>Re.$el.offsetHeight&&(ie.value=!1)}Se(((o=h.value)===null||o===void 0?void 0:o.$el)||null)}const Me=tt(We,64);function Fe(){const{onAdd:a}=e;a&&a(),Be(()=>{const o=O(),{value:f}=h;!o||!f||f.scrollTo({left:o.offsetLeft,top:0,behavior:"smooth"})})}function Se(a){if(!a)return;const{placement:o}=e;if(o==="top"||o==="bottom"){const{scrollLeft:f,scrollWidth:y,offsetWidth:E}=a;r.value=f<=0,u.value=f+E>=y}else{const{scrollTop:f,scrollHeight:y,offsetHeight:E}=a;r.value=f<=0,u.value=f+E>=y}}const Ue=tt(a=>{Se(a.target)},64);Ta(st,{triggerRef:J(e,"trigger"),tabStyleRef:J(e,"tabStyle"),tabClassRef:J(e,"tabClass"),addTabStyleRef:J(e,"addTabStyle"),addTabClassRef:J(e,"addTabClass"),paneClassRef:J(e,"paneClass"),paneStyleRef:J(e,"paneStyle"),mergedClsPrefixRef:_,typeRef:J(e,"type"),closableRef:J(e,"closable"),valueRef:A,tabChangeIdRef:P,onBeforeLeaveRef:J(e,"onBeforeLeave"),activateTab:Ve,handleClose:ce,handleAdd:Fe}),xa(()=>{q(),Y()}),ya(()=>{const{value:a}=V;if(!a)return;const{value:o}=_,f=`${o}-tabs-nav-scroll-wrapper--shadow-start`,y=`${o}-tabs-nav-scroll-wrapper--shadow-end`;r.value?a.classList.remove(f):a.classList.add(f),u.value?a.classList.remove(y):a.classList.add(y)});const De={syncBarPosition:()=>{q()}},l=()=>{fe({transitionDisabled:!0})},m=K(()=>{const{value:a}=C,{type:o}=e,f={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[o],y=`${a}${f}`,{self:{barColor:E,closeIconColor:W,closeIconColorHover:H,closeIconColorPressed:ee,tabColor:Re,tabBorderColor:Nt,paneTextColor:Bt,tabFontWeight:jt,tabBorderRadius:It,tabFontWeightActive:Ot,colorSegment:Et,fontWeightStrong:Vt,tabColorSegment:Lt,closeSize:At,closeIconSize:Wt,closeColorHover:Mt,closeColorPressed:Ft,closeBorderRadius:Ut,[X("panePadding",a)]:Te,[X("tabPadding",y)]:Dt,[X("tabPaddingVertical",y)]:Ht,[X("tabGap",y)]:Gt,[X("tabGap",`${y}Vertical`)]:Jt,[X("tabTextColor",o)]:Xt,[X("tabTextColorActive",o)]:Kt,[X("tabTextColorHover",o)]:qt,[X("tabTextColorDisabled",o)]:Yt,[X("tabFontSize",a)]:Qt},common:{cubicBezierEaseInOut:Zt}}=N.value;return{"--n-bezier":Zt,"--n-color-segment":Et,"--n-bar-color":E,"--n-tab-font-size":Qt,"--n-tab-text-color":Xt,"--n-tab-text-color-active":Kt,"--n-tab-text-color-disabled":Yt,"--n-tab-text-color-hover":qt,"--n-pane-text-color":Bt,"--n-tab-border-color":Nt,"--n-tab-border-radius":It,"--n-close-size":At,"--n-close-icon-size":Wt,"--n-close-color-hover":Mt,"--n-close-color-pressed":Ft,"--n-close-border-radius":Ut,"--n-close-icon-color":W,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":ee,"--n-tab-color":Re,"--n-tab-font-weight":jt,"--n-tab-font-weight-active":Ot,"--n-tab-padding":Dt,"--n-tab-padding-vertical":Ht,"--n-tab-gap":Gt,"--n-tab-gap-vertical":Jt,"--n-pane-padding-left":_e(Te,"left"),"--n-pane-padding-right":_e(Te,"right"),"--n-pane-padding-top":_e(Te,"top"),"--n-pane-padding-bottom":_e(Te,"bottom"),"--n-font-weight-strong":Vt,"--n-tab-color-segment":Lt}}),T=R?it("tabs",K(()=>`${C.value[0]}${e.type[0]}`),m,e):void 0;return Object.assign({mergedClsPrefix:_,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:Q,tabsPaneWrapperRef:oe,tabsElRef:k,barElRef:z,addTabInstRef:B,xScrollInstRef:h,scrollWrapperElRef:V,addTabFixed:ie,tabWrapperStyle:$,handleNavResize:Ae,mergedSize:C,handleScroll:Ue,handleTabsResize:Me,cssVars:R?void 0:m,themeClass:T==null?void 0:T.themeClass,animationDirection:we,renderNameListRef:$e,yScrollElRef:x,handleSegmentResize:l,onAnimationBeforeLeave:xe,onAnimationEnter:ye,onAnimationAfterEnter:Ee,onRender:T==null?void 0:T.onRender},De)},render(){const{mergedClsPrefix:e,type:t,placement:d,addTabFixed:w,addable:n,mergedSize:S,renderNameListRef:_,onRender:R,paneWrapperClass:N,paneWrapperStyle:k,$slots:{default:z,prefix:V,suffix:B}}=this;R==null||R();const h=z?He(z()).filter(P=>P.type.__TAB_PANE__===!0):[],x=z?He(z()).filter(P=>P.type.__TAB__===!0):[],r=!x.length,u=t==="card",C=t==="segment",j=!u&&!C&&this.justifyContent;_.value=[];const I=()=>{const P=v("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},j?null:v("div",{class:`${e}-tabs-scroll-padding`,style:d==="top"||d==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),r?h.map(($,O)=>(_.value.push($.props.name),at(v(nt,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:O!==0&&(!j||j==="center"||j==="start"||j==="end")}),$.children?{default:$.children.tab}:void 0)))):x.map(($,O)=>(_.value.push($.props.name),at(O!==0&&!j?St($):$))),!w&&n&&u?Ct(n,(r?h.length:x.length)!==0):null,j?null:v("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return v("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},u&&n?v(Ge,{onResize:this.handleTabsResize},{default:()=>P}):P,u?v("div",{class:`${e}-tabs-pad`}):null,u?null:v("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},A=C?"top":d;return v("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${S}-size`,j&&`${e}-tabs--flex`,`${e}-tabs--${A}`],style:this.cssVars},v("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${A}`,`${e}-tabs-nav`]},Ie(V,P=>P&&v("div",{class:`${e}-tabs-nav__prefix`},P)),C?v(Ge,{onResize:this.handleSegmentResize},{default:()=>v("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},v("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},v("div",{class:`${e}-tabs-wrapper`},v("div",{class:`${e}-tabs-tab`}))),r?h.map((P,$)=>(_.value.push(P.props.name),v(nt,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),P.children?{default:P.children.tab}:void 0))):x.map((P,$)=>(_.value.push(P.props.name),$===0?P:St(P))))}):v(Ge,{onResize:this.handleNavResize},{default:()=>v("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(A)?v(Ua,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:I}):v("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},I()))}),w&&n&&u?Ct(n,!0):null,Ie(B,P=>P&&v("div",{class:`${e}-tabs-nav__suffix`},P))),r&&(this.animated&&(A==="top"||A==="bottom")?v("div",{ref:"tabsPaneWrapperRef",style:k,class:[`${e}-tabs-pane-wrapper`,N]},wt(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):wt(h,this.mergedValue,this.renderedNames)))}});function wt(e,t,d,w,n,S,_){const R=[];return e.forEach(N=>{const{name:k,displayDirective:z,"display-directive":V}=N.props,B=x=>z===x||V===x,h=t===k;if(N.key!==void 0&&(N.key=k),h||B("show")||B("show:lazy")&&d.has(k)){d.has(k)||d.add(k);const x=!B("if");R.push(x?Ca(N,[[Sa,h]]):N)}}),_?v(Ra,{name:`${_}-transition`,onBeforeLeave:w,onEnter:n,onAfterEnter:S},{default:()=>R}):R}function Ct(e,t){return v(nt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function St(e){const t=$a(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function at(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Nr={__name:"Config",setup(e){const t=Wa(),d=L(!1),w=L(!1),n=L(k()),S=L(null),_=K(()=>JSON.stringify(n.value)!==JSON.stringify(S.value)),R=[{label:"DEBUG",value:"DEBUG"},{label:"INFO",value:"INFO"},{label:"WARNING",value:"WARNING"},{label:"ERROR",value:"ERROR"}],N=[{label:"Emby",value:"emby"},{label:"Jellyfin",value:"jellyfin"}];function k(){return{app:{timezone:"Asia/Shanghai",data_dir:"./data",log_level:"INFO"},servers:[],cover:{style:"single_1",sort_by:"Random",save_to_local:!1,output_dir:"covers_output",custom_images_dir:""},fonts:{main:{zh_url:"",en_url:"",zh_local:"",en_local:"",zh_size:1,en_size:1},multi_1:{zh_url:"",en_url:"",zh_local:"",en_local:"",zh_size:1,en_size:1,use_main_font:!1}},style_params:{single:{blur_size:50,color_ratio:.8,use_primary:!1},multi_1:{blur:!1,blur_size:50,color_ratio:.8,use_primary:!0}},titles:{},scheduler:{enabled:!1,cron:"0 2 * * *"},webhook:{enabled:!0,delay:60},network:{proxy:"",github_proxy:"",timeout:30,retries:3},performance:{max_concurrent:3}}}function z(){n.value.servers||(n.value.servers=[]),n.value.servers.push({name:"",type:"emby",url:"",api_key:"",exclude_libraries:[]})}function V(x){n.value.servers.splice(x,1)}async function B(){d.value=!0;try{const x=await Je.getFullConfig();n.value=JSON.parse(JSON.stringify(x)),S.value=JSON.parse(JSON.stringify(x))}catch(x){t.error("加载配置失败: "+x.message)}finally{d.value=!1}}async function h(){w.value=!0;try{const x=await Je.validateConfig(n.value);if(!x.valid){t.error("配置校验失败: "+x.errors.join(", "));return}await Je.saveConfig(n.value),t.success("配置已保存并生效"),S.value=JSON.parse(JSON.stringify(n.value))}catch(x){t.error("保存配置失败: "+x.message)}finally{w.value=!1}}return lt(()=>{B()}),(x,r)=>(se(),pe(s(Ma),{show:d.value},{default:b(()=>[c(s(ze),{vertical:"",size:16},{default:b(()=>[c(s(_a),null,{header:b(()=>[c(s(ze),{justify:"space-between",align:"center"},{default:b(()=>[r[15]||(r[15]=G("span",null,"配置管理",-1)),c(s(ze),null,{default:b(()=>[_.value?(se(),pe(s(ka),{key:0,type:"warning"},{default:b(()=>[...r[12]||(r[12]=[te("有未保存的更改",-1)])]),_:1})):Ke("",!0),c(s(Pe),{onClick:B,loading:d.value},{icon:b(()=>[c(s(Xe),{component:s(La)},null,8,["component"])]),default:b(()=>[r[13]||(r[13]=te(" 刷新 ",-1))]),_:1},8,["loading"]),c(s(Pe),{type:"primary",onClick:h,loading:w.value,disabled:!_.value},{icon:b(()=>[c(s(Xe),{component:s(Aa)},null,8,["component"])]),default:b(()=>[r[14]||(r[14]=te(" 保存配置 ",-1))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),default:b(()=>[c(s(Cr),{type:"line",animated:""},{default:b(()=>[c(s(Ne),{name:"app",tab:"应用设置"},{default:b(()=>[c(s(me),{"label-placement":"left","label-width":"120"},{default:b(()=>[c(s(F),{label:"时区"},{default:b(()=>[c(s(re),{value:n.value.app.timezone,"onUpdate:value":r[0]||(r[0]=u=>n.value.app.timezone=u),placeholder:"Asia/Shanghai"},null,8,["value"])]),_:1}),c(s(F),{label:"数据目录"},{default:b(()=>[c(s(re),{value:n.value.app.data_dir,"onUpdate:value":r[1]||(r[1]=u=>n.value.app.data_dir=u),placeholder:"./data"},null,8,["value"])]),_:1}),c(s(F),{label:"日志级别"},{default:b(()=>[c(s(pt),{value:n.value.app.log_level,"onUpdate:value":r[2]||(r[2]=u=>n.value.app.log_level=u),options:R},null,8,["value"])]),_:1})]),_:1})]),_:1}),c(s(Ne),{name:"servers",tab:"服务器"},{default:b(()=>[c(s(ze),{vertical:"",size:16},{default:b(()=>{var u;return[c(s(Pe),{onClick:z,type:"primary",dashed:""},{icon:b(()=>[c(s(Xe),{component:s(Na)},null,8,["component"])]),default:b(()=>[r[16]||(r[16]=te(" 添加服务器 ",-1))]),_:1}),(u=n.value.servers)!=null&&u.length?(se(),pe(s(Ea),{key:0},{default:b(()=>[(se(!0),za(zt,null,Pa(n.value.servers,(C,j)=>(se(),pe(s(Va),{key:j,title:C.name||"新服务器",name:j},{default:b(()=>[c(s(me),{"label-placement":"left","label-width":"100"},{default:b(()=>[c(s(F),{label:"名称"},{default:b(()=>[c(s(re),{value:C.name,"onUpdate:value":I=>C.name=I,placeholder:"我的服务器"},null,8,["value","onUpdate:value"])]),_:2},1024),c(s(F),{label:"类型"},{default:b(()=>[c(s(pt),{value:C.type,"onUpdate:value":I=>C.type=I,options:N},null,8,["value","onUpdate:value"])]),_:2},1024),c(s(F),{label:"URL"},{default:b(()=>[c(s(re),{value:C.url,"onUpdate:value":I=>C.url=I,placeholder:"http://localhost:8096"},null,8,["value","onUpdate:value"])]),_:2},1024),c(s(F),{label:"API Key"},{default:b(()=>[c(s(re),{value:C.api_key,"onUpdate:value":I=>C.api_key=I,type:"password","show-password-on":"click",placeholder:"留空不修改"},null,8,["value","onUpdate:value"])]),_:2},1024),c(s(F),{label:"排除媒体库"},{default:b(()=>[c(s(Ba),{value:C.exclude_libraries,"onUpdate:value":I=>C.exclude_libraries=I},null,8,["value","onUpdate:value"])]),_:2},1024),c(s(F),null,{default:b(()=>[c(s(Pe),{type:"error",onClick:I=>V(j)},{default:b(()=>[...r[17]||(r[17]=[te("删除此服务器",-1)])]),_:1},8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","name"]))),128))]),_:1})):(se(),pe(s(Oa),{key:1,description:"暂无服务器配置"}))]}),_:1})]),_:1}),c(s(Ne),{name:"scheduler",tab:"定时任务"},{default:b(()=>[c(s(me),{"label-placement":"left","label-width":"120"},{default:b(()=>[c(s(F),{label:"启用定时任务"},{default:b(()=>[c(s(vt),{value:n.value.scheduler.enabled,"onUpdate:value":r[3]||(r[3]=u=>n.value.scheduler.enabled=u)},null,8,["value"])]),_:1}),n.value.scheduler.enabled?(se(),pe(s(F),{key:0,label:"Cron 表达式"},{default:b(()=>[c(s(re),{value:n.value.scheduler.cron,"onUpdate:value":r[4]||(r[4]=u=>n.value.scheduler.cron=u),placeholder:"0 2 * * *"},null,8,["value"])]),_:1})):Ke("",!0)]),_:1}),c(s(qe),{"title-placement":"left"},{default:b(()=>[...r[18]||(r[18]=[te("Webhook",-1)])]),_:1}),c(s(me),{"label-placement":"left","label-width":"120"},{default:b(()=>[c(s(F),{label:"启用 Webhook"},{default:b(()=>[c(s(vt),{value:n.value.webhook.enabled,"onUpdate:value":r[5]||(r[5]=u=>n.value.webhook.enabled=u)},null,8,["value"])]),_:1}),n.value.webhook.enabled?(se(),pe(s(F),{key:0,label:"延迟时间（秒）"},{default:b(()=>[c(s(ke),{value:n.value.webhook.delay,"onUpdate:value":r[6]||(r[6]=u=>n.value.webhook.delay=u),min:0,max:600},null,8,["value"])]),_:1})):Ke("",!0)]),_:1}),c(s(qe)),c(s(gr),{bordered:!1,"single-line":!1,size:"small"},{default:b(()=>[r[25]||(r[25]=G("thead",null,[G("tr",null,[G("th",null,"表达式"),G("th",null,"说明")])],-1)),G("tbody",null,[G("tr",null,[G("td",null,[c(s(Qe),null,{default:b(()=>[...r[19]||(r[19]=[te("0 2 * * *",-1)])]),_:1})]),r[20]||(r[20]=G("td",null,"每天凌晨 2 点",-1))]),G("tr",null,[G("td",null,[c(s(Qe),null,{default:b(()=>[...r[21]||(r[21]=[te("0 */6 * * *",-1)])]),_:1})]),r[22]||(r[22]=G("td",null,"每 6 小时",-1))]),G("tr",null,[G("td",null,[c(s(Qe),null,{default:b(()=>[...r[23]||(r[23]=[te("0 0 * * 0",-1)])]),_:1})]),r[24]||(r[24]=G("td",null,"每周日凌晨",-1))])])]),_:1})]),_:1}),c(s(Ne),{name:"network",tab:"网络"},{default:b(()=>[c(s(me),{"label-placement":"left","label-width":"120"},{default:b(()=>[c(s(F),{label:"HTTP 代理"},{default:b(()=>[c(s(re),{value:n.value.network.proxy,"onUpdate:value":r[7]||(r[7]=u=>n.value.network.proxy=u),placeholder:"留空不使用"},null,8,["value"])]),_:1}),c(s(F),{label:"GitHub 代理"},{default:b(()=>[c(s(re),{value:n.value.network.github_proxy,"onUpdate:value":r[8]||(r[8]=u=>n.value.network.github_proxy=u),placeholder:"用于下载字体"},null,8,["value"])]),_:1}),c(s(F),{label:"超时时间（秒）"},{default:b(()=>[c(s(ke),{value:n.value.network.timeout,"onUpdate:value":r[9]||(r[9]=u=>n.value.network.timeout=u),min:5,max:300},null,8,["value"])]),_:1}),c(s(F),{label:"重试次数"},{default:b(()=>[c(s(ke),{value:n.value.network.retries,"onUpdate:value":r[10]||(r[10]=u=>n.value.network.retries=u),min:0,max:10},null,8,["value"])]),_:1})]),_:1}),c(s(qe),{"title-placement":"left"},{default:b(()=>[...r[26]||(r[26]=[te("性能",-1)])]),_:1}),c(s(me),{"label-placement":"left","label-width":"120"},{default:b(()=>[c(s(F),{label:"最大并发数"},{default:b(()=>[c(s(ke),{value:n.value.performance.max_concurrent,"onUpdate:value":r[11]||(r[11]=u=>n.value.performance.max_concurrent=u),min:1,max:10},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"]))}};export{Nr as default};
