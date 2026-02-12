import{j as u,k as x,l as $,g as I,aj as ya,d as Je,h as p,s as wa,z as be,u as Le,B as xa,C as Ce,c as D,E as Me,aq as _a,ar as ka,as as Fe,n as za,q as Sa,at as Ca,au as Ra,av as Na,aw as Ta,ax as Da,ay as Re,az as $a,a as Ba,r as R,b as Va,aA as Ie,o as Oa,aB as Ma,f as se,w as de,aC as ue,aD as xe,t as Fa,aE as Ia,I as Ua,a2 as J,a3 as f,a4 as d,a5 as Q,a6 as _e,Z as V,a7 as v,a8 as Ea,$ as m,_ as ke,ae as Ue,af as Ee,aF as Aa,ad as ee,ah as ae,ab as ze,ac as ce,a9 as Ae,ag as Ha}from"./index-BZvRV0hf.js";import{N as ja,a as He,b as ve,c as Pa,S as Ja}from"./SaveOutline-hsNit-HS.js";import{s as La,a as Ka,r as Ya}from"./use-radio-OFnNU8_2.js";import{A as Wa}from"./AddOutline-BSdGMRE3.js";import{u as Xa}from"./use-message-B96cpKcV.js";import{a as Se,b as F,c as he,N as qa}from"./FormItem-T9kAcPTf.js";import{N as Ga}from"./Select-D-vyXFA8.js";const Za=u("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[x("checked",[$("dot",`
 background-color: var(--n-color-active);
 `)]),$("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),u("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),$("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[I("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),x("checked",{boxShadow:"var(--n-box-shadow-active)"},[I("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),$("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),ya("disabled",`
 cursor: pointer;
 `,[I("&:hover",[$("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),x("focus",[I("&:not(:active)",[$("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),x("disabled",`
 cursor: not-allowed;
 `,[$("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[I("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),x("checked",`
 opacity: 1;
 `)]),$("label",{color:"var(--n-text-color-disabled)"}),u("radio-input",`
 cursor: not-allowed;
 `)])]),Qa=Object.assign(Object.assign({},be.props),Ya),et=Je({name:"Radio",props:Qa,setup(o){const i=La(o),_=be("Radio","-radio",Za,Ka,o,i.mergedClsPrefix),g=D(()=>{const{mergedSize:{value:O}}=i,{common:{cubicBezierEaseInOut:U},self:{boxShadow:H,boxShadowActive:j,boxShadowDisabled:Y,boxShadowFocus:L,boxShadowHover:G,color:K,colorDisabled:S,colorActive:h,textColor:r,textColorDisabled:l,dotColorActive:w,dotColorDisabled:B,labelPadding:E,labelLineHeight:A,labelFontWeight:W,[Me("fontSize",O)]:Z,[Me("radioSize",O)]:me}}=_.value;return{"--n-bezier":U,"--n-label-line-height":A,"--n-label-font-weight":W,"--n-box-shadow":H,"--n-box-shadow-active":j,"--n-box-shadow-disabled":Y,"--n-box-shadow-focus":L,"--n-box-shadow-hover":G,"--n-color":K,"--n-color-active":h,"--n-color-disabled":S,"--n-dot-color-active":w,"--n-dot-color-disabled":B,"--n-font-size":Z,"--n-radio-size":me,"--n-text-color":r,"--n-text-color-disabled":l,"--n-label-padding":E}}),{inlineThemeDisabled:s,mergedClsPrefixRef:n,mergedRtlRef:y}=Le(o),T=xa("Radio",y,n),N=s?Ce("radio",D(()=>i.mergedSize.value[0]),g,o):void 0;return Object.assign(i,{rtlEnabled:T,cssVars:s?void 0:g,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){const{$slots:o,mergedClsPrefix:i,onRender:_,label:g}=this;return _==null||_(),p("label",{class:[`${i}-radio`,this.themeClass,this.rtlEnabled&&`${i}-radio--rtl`,this.mergedDisabled&&`${i}-radio--disabled`,this.renderSafeChecked&&`${i}-radio--checked`,this.focus&&`${i}-radio--focus`],style:this.cssVars},p("div",{class:`${i}-radio__dot-wrapper`}," ",p("div",{class:[`${i}-radio__dot`,this.renderSafeChecked&&`${i}-radio__dot--checked`]}),p("input",{ref:"inputRef",type:"radio",class:`${i}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),wa(o.default,s=>!s&&!g?null:p("div",{ref:"labelRef",class:`${i}-radio__label`},s||g)))}});function at(o){const i="rgba(0, 0, 0, .85)",_="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:g,primaryColor:s,baseColor:n,cardColor:y,modalColor:T,popoverColor:N,borderRadius:O,fontSize:U,opacityDisabled:H}=o;return Object.assign(Object.assign({},ka),{fontSize:U,markFontSize:U,railColor:g,railColorHover:g,fillColor:s,fillColorHover:s,opacityDisabled:H,handleColor:"#FFF",dotColor:y,dotColorModal:T,dotColorPopover:N,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:i,indicatorBoxShadow:_,indicatorTextColor:n,indicatorBorderRadius:O,dotBorder:`2px solid ${g}`,dotBorderActive:`2px solid ${s}`,dotBoxShadow:""})}const tt={common:_a,self:at},ot=I([u("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[x("reverse",[u("slider-handles",[u("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),u("slider-dots",[u("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),x("vertical",[u("slider-handles",[u("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),u("slider-marks",[u("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),u("slider-dots",[u("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),x("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[u("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[u("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),u("slider-rail",`
 height: 100%;
 `,[$("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),x("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),u("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[u("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),u("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[u("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),x("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[u("slider-handle",`
 cursor: not-allowed;
 `)]),x("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),I("&:hover",[u("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[$("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),u("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),x("active",[u("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[$("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),u("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),u("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[u("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),u("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[$("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),u("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[u("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[u("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),I("&:focus",[u("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[I("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),u("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[x("transition-disabled",[u("slider-dot","transition: none;")]),u("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[x("active","border: var(--n-dot-border-active);")])])]),u("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Fe()]),u("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[x("top",`
 margin-bottom: 12px;
 `),x("right",`
 margin-left: 12px;
 `),x("bottom",`
 margin-top: 12px;
 `),x("left",`
 margin-right: 12px;
 `),Fe()]),za(u("slider",[u("slider-dot","background-color: var(--n-dot-color-modal);")])),Sa(u("slider",[u("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function je(o){return window.TouchEvent&&o instanceof window.TouchEvent}function Pe(){const o=new Map,i=_=>g=>{o.set(_,g)};return Ca(()=>{o.clear()}),[o,i]}const lt=0,nt=Object.assign(Object.assign({},be.props),{to:Re.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),fe=Je({name:"Slider",props:nt,slots:Object,setup(o){const{mergedClsPrefixRef:i,namespaceRef:_,inlineThemeDisabled:g}=Le(o),s=be("Slider","-slider",ot,tt,o,i),n=R(null),[y,T]=Pe(),[N,O]=Pe(),U=R(new Set),H=Ba(o),{mergedDisabledRef:j}=H,Y=D(()=>{const{step:e}=o;if(Number(e)<=0||e==="mark")return 0;const a=e.toString();let t=0;return a.includes(".")&&(t=a.length-a.indexOf(".")-1),t}),L=R(o.defaultValue),G=Fa(o,"value"),K=Va(G,L),S=D(()=>{const{value:e}=K;return(o.range?e:[e]).map($e)}),h=D(()=>S.value.length>2),r=D(()=>o.placement===void 0?o.vertical?"right":"top":o.placement),l=D(()=>{const{marks:e}=o;return e?Object.keys(e).map(Number.parseFloat):null}),w=R(-1),B=R(-1),E=R(-1),A=R(!1),W=R(!1),Z=D(()=>{const{vertical:e,reverse:a}=o;return e?a?"top":"bottom":a?"right":"left"}),me=D(()=>{if(h.value)return;const e=S.value,a=te(o.range?Math.min(...e):o.min),t=te(o.range?Math.max(...e):e[0]),{value:c}=Z;return o.vertical?{[c]:`${a}%`,height:`${t-a}%`}:{[c]:`${a}%`,width:`${t-a}%`}}),Ke=D(()=>{const e=[],{marks:a}=o;if(a){const t=S.value.slice();t.sort((C,z)=>C-z);const{value:c}=Z,{value:b}=h,{range:k}=o,M=b?()=>!1:C=>k?C>=t[0]&&C<=t[t.length-1]:C<=t[0];for(const C of Object.keys(a)){const z=Number(C);e.push({active:M(z),key:z,label:a[C],style:{[c]:`${te(z)}%`}})}}return e});function Ye(e,a){const t=te(e),{value:c}=Z;return{[c]:`${t}%`,zIndex:a===w.value?1:0}}function Ne(e){return o.showTooltip||E.value===e||w.value===e&&A.value}function We(e){return A.value?!(w.value===e&&B.value===e):!0}function Xe(e){var a;~e&&(w.value=e,(a=y.get(e))===null||a===void 0||a.focus())}function qe(){N.forEach((e,a)=>{Ne(a)&&e.syncPosition()})}function Te(e){const{"onUpdate:value":a,onUpdateValue:t}=o,{nTriggerFormInput:c,nTriggerFormChange:b}=H;t&&se(t,e),a&&se(a,e),L.value=e,c(),b()}function De(e){const{range:a}=o;if(a){if(Array.isArray(e)){const{value:t}=S;e.join()!==t.join()&&Te(e)}}else Array.isArray(e)||S.value[0]!==e&&Te(e)}function ge(e,a){if(o.range){const t=S.value.slice();t.splice(a,1,e),De(t)}else De(e)}function pe(e,a,t){const c=t!==void 0;t||(t=e-a>0?1:-1);const b=l.value||[],{step:k}=o;if(k==="mark"){const z=oe(e,b.concat(a),c?t:void 0);return z?z.value:a}if(k<=0)return a;const{value:M}=Y;let C;if(c){const z=Number((a/k).toFixed(M)),P=Math.floor(z),ye=z>P?P:P-1,we=z<P?P:P+1;C=oe(a,[Number((ye*k).toFixed(M)),Number((we*k).toFixed(M)),...b],t)}else{const z=Ze(e);C=oe(e,[...b,z])}return C?$e(C.value):a}function $e(e){return Math.min(o.max,Math.max(o.min,e))}function te(e){const{max:a,min:t}=o;return(e-t)/(a-t)*100}function Ge(e){const{max:a,min:t}=o;return t+(a-t)*e}function Ze(e){const{step:a,min:t}=o;if(Number(a)<=0||a==="mark")return e;const c=Math.round((e-t)/a)*a+t;return Number(c.toFixed(Y.value))}function oe(e,a=l.value,t){if(!(a!=null&&a.length))return null;let c=null,b=-1;for(;++b<a.length;){const k=a[b]-e,M=Math.abs(k);(t===void 0||k*t>0)&&(c===null||M<c.distance)&&(c={index:b,distance:M,value:a[b]})}return c}function Be(e){const a=n.value;if(!a)return;const t=je(e)?e.touches[0]:e,c=a.getBoundingClientRect();let b;return o.vertical?b=(c.bottom-t.clientY)/c.height:b=(t.clientX-c.left)/c.width,o.reverse&&(b=1-b),Ge(b)}function Qe(e){if(j.value||!o.keyboard)return;const{vertical:a,reverse:t}=o;switch(e.key){case"ArrowUp":e.preventDefault(),le(a&&t?-1:1);break;case"ArrowRight":e.preventDefault(),le(!a&&t?-1:1);break;case"ArrowDown":e.preventDefault(),le(a&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),le(!a&&t?1:-1);break}}function le(e){const a=w.value;if(a===-1)return;const{step:t}=o,c=S.value[a],b=Number(t)<=0||t==="mark"?c:c+t*e;ge(pe(b,c,e>0?1:-1),a)}function ea(e){var a,t;if(j.value||!je(e)&&e.button!==lt)return;const c=Be(e);if(c===void 0)return;const b=S.value.slice(),k=o.range?(t=(a=oe(c,b))===null||a===void 0?void 0:a.index)!==null&&t!==void 0?t:-1:0;k!==-1&&(e.preventDefault(),Xe(k),aa(),ge(pe(c,S.value[k]),k))}function aa(){A.value||(A.value=!0,o.onDragstart&&se(o.onDragstart),de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,re),de("mousemove",document,re))}function ne(){A.value&&(A.value=!1,o.onDragend&&se(o.onDragend),ue("touchend",document,ie),ue("mouseup",document,ie),ue("touchmove",document,re),ue("mousemove",document,re))}function re(e){const{value:a}=w;if(!A.value||a===-1){ne();return}const t=Be(e);t!==void 0&&ge(pe(t,S.value[a]),a)}function ie(){ne()}function ta(e){w.value=e,j.value||(E.value=e)}function oa(e){w.value===e&&(w.value=-1,ne()),E.value===e&&(E.value=-1)}function la(e){E.value=e}function na(e){E.value===e&&(E.value=-1)}Ie(w,(e,a)=>void xe(()=>B.value=a)),Ie(K,()=>{if(o.marks){if(W.value)return;W.value=!0,xe(()=>{W.value=!1})}xe(qe)}),Oa(()=>{ne()});const Ve=D(()=>{const{self:{markFontSize:e,railColor:a,railColorHover:t,fillColor:c,fillColorHover:b,handleColor:k,opacityDisabled:M,dotColor:C,dotColorModal:z,handleBoxShadow:P,handleBoxShadowHover:ye,handleBoxShadowActive:we,handleBoxShadowFocus:ra,dotBorder:ia,dotBoxShadow:sa,railHeight:da,railWidthVertical:ua,handleSize:ca,dotHeight:va,dotWidth:ha,dotBorderRadius:fa,fontSize:ba,dotBorderActive:ma,dotColorPopover:ga},common:{cubicBezierEaseInOut:pa}}=s.value;return{"--n-bezier":pa,"--n-dot-border":ia,"--n-dot-border-active":ma,"--n-dot-border-radius":fa,"--n-dot-box-shadow":sa,"--n-dot-color":C,"--n-dot-color-modal":z,"--n-dot-color-popover":ga,"--n-dot-height":va,"--n-dot-width":ha,"--n-fill-color":c,"--n-fill-color-hover":b,"--n-font-size":ba,"--n-handle-box-shadow":P,"--n-handle-box-shadow-active":we,"--n-handle-box-shadow-focus":ra,"--n-handle-box-shadow-hover":ye,"--n-handle-color":k,"--n-handle-size":ca,"--n-opacity-disabled":M,"--n-rail-color":a,"--n-rail-color-hover":t,"--n-rail-height":da,"--n-rail-width-vertical":ua,"--n-mark-font-size":e}}),X=g?Ce("slider",void 0,Ve,o):void 0,Oe=D(()=>{const{self:{fontSize:e,indicatorColor:a,indicatorBoxShadow:t,indicatorTextColor:c,indicatorBorderRadius:b}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":b,"--n-indicator-box-shadow":t,"--n-indicator-color":a,"--n-indicator-text-color":c}}),q=g?Ce("slider-indicator",void 0,Oe,o):void 0;return{mergedClsPrefix:i,namespace:_,uncontrolledValue:L,mergedValue:K,mergedDisabled:j,mergedPlacement:r,isMounted:Ma(),adjustedTo:Re(o),dotTransitionDisabled:W,markInfos:Ke,isShowTooltip:Ne,shouldKeepTooltipTransition:We,handleRailRef:n,setHandleRefs:T,setFollowerRefs:O,fillStyle:me,getHandleStyle:Ye,activeIndex:w,arrifiedValues:S,followerEnabledIndexSet:U,handleRailMouseDown:ea,handleHandleFocus:ta,handleHandleBlur:oa,handleHandleMouseEnter:la,handleHandleMouseLeave:na,handleRailKeyDown:Qe,indicatorCssVars:g?void 0:Oe,indicatorThemeClass:q==null?void 0:q.themeClass,indicatorOnRender:q==null?void 0:q.onRender,cssVars:g?void 0:Ve,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender}},render(){var o;const{mergedClsPrefix:i,themeClass:_,formatTooltip:g}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("div",{class:[`${i}-slider`,_,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},p("div",{class:`${i}-slider-rail`},p("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?p("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(s=>p("div",{key:s.key,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:s.active}],style:s.style}))):null,p("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((s,n)=>{const y=this.isShowTooltip(n);return p(Ra,null,{default:()=>[p(Na,null,{default:()=>p("div",{ref:this.setHandleRefs(n),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,n),onFocus:()=>{this.handleHandleFocus(n)},onBlur:()=>{this.handleHandleBlur(n)},onMouseenter:()=>{this.handleHandleMouseEnter(n)},onMouseleave:()=>{this.handleHandleMouseLeave(n)}},Ta(this.$slots.thumb,()=>[p("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&p(Da,{ref:this.setFollowerRefs(n),show:y,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(n),teleportDisabled:this.adjustedTo===Re.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>p($a,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(n),onEnter:()=>{this.followerEnabledIndexSet.add(n)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(n)}},{default:()=>{var T;return y?((T=this.indicatorOnRender)===null||T===void 0||T.call(this),p("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof g=="function"?g(s):s)):null}})})]})})),this.marks?p("div",{class:`${i}-slider-marks`},this.markInfos.map(s=>p("div",{key:s.key,class:`${i}-slider-mark`,style:s.style},typeof s.label=="function"?s.label():s.label))):null))}}),rt={class:"style-cards"},it=["onClick"],st=["src","alt"],dt={class:"style-label"},ut={style:{"margin-left":"12px","min-width":"40px"}},ct={style:{"margin-left":"12px","min-width":"40px"}},vt={style:{"margin-left":"12px","min-width":"40px"}},ht={style:{"margin-left":"12px","min-width":"40px"}},ft={__name:"Styles",setup(o){const i=Xa(),_=R(!1),g=[{value:"single_1",label:"单图 1",image:"/images/single_1.jpg"},{value:"single_2",label:"单图 2",image:"/images/single_2.jpg"},{value:"multi_1",label:"多图 1",image:"/images/multi_1.jpg"}],s=R({style:"single_1",sort_by:"Random",save_to_local:!1,output_dir:"covers_output"}),n=R({single:{blur_size:50,color_ratio:.8,use_primary:!1},multi_1:{blur:!1,blur_size:50,color_ratio:.8,use_primary:!0}}),y=R([]),T=R(null),N=R(null),O=R(null),U=D(()=>JSON.stringify(s.value)!==JSON.stringify(T.value)||JSON.stringify(n.value)!==JSON.stringify(N.value)||JSON.stringify(y.value)!==JSON.stringify(O.value)),H=[{label:"随机",value:"Random"},{label:"最新入库",value:"DateCreated"},{label:"名称",value:"SortName"}];function j(){y.value.push({key:"",zh:"",en:""})}function Y(h){y.value.splice(h,1)}function L(h){return!h||typeof h!="object"?[]:Object.entries(h).map(([r,l])=>({key:r,zh:l.zh||"",en:l.en||""}))}function G(h){const r={};for(const l of h)l.key.trim()&&(r[l.key.trim()]={zh:l.zh,en:l.en});return r}async function K(){try{const h=await _e.getFullConfig();h.cover&&(s.value={style:h.cover.style||"single_1",sort_by:h.cover.sort_by||"Random",save_to_local:h.cover.save_to_local||!1,output_dir:h.cover.output_dir||"covers_output"}),h.style_params&&(n.value={single:{...n.value.single,...h.style_params.single},multi_1:{...n.value.multi_1,...h.style_params.multi_1}}),y.value=L(h.titles),T.value=JSON.parse(JSON.stringify(s.value)),N.value=JSON.parse(JSON.stringify(n.value)),O.value=JSON.parse(JSON.stringify(y.value))}catch(h){i.error("加载数据失败: "+h.message)}}async function S(){_.value=!0;try{const h=await _e.getFullConfig();h.cover={...h.cover,...s.value},h.style_params={...h.style_params,single:{...n.value.single},multi_1:{...n.value.multi_1}},h.titles=G(y.value),await _e.saveConfig(h),i.success("配置已保存"),T.value=JSON.parse(JSON.stringify(s.value)),N.value=JSON.parse(JSON.stringify(n.value)),O.value=JSON.parse(JSON.stringify(y.value))}catch(h){i.error("保存失败: "+h.message)}finally{_.value=!1}}return Ua(()=>{K()}),(h,r)=>(V(),J(d(Q),{vertical:"",size:24},{default:f(()=>[v(d(Ea),null,{header:f(()=>[v(d(Q),{justify:"space-between",align:"center"},{default:f(()=>[r[12]||(r[12]=m("span",null,"风格配置",-1)),v(d(Q),null,{default:f(()=>[U.value?(V(),J(d(Ha),{key:0,type:"warning"},{default:f(()=>[...r[10]||(r[10]=[ce("有未保存的更改",-1)])]),_:1})):ae("",!0),v(d(ze),{type:"primary",onClick:S,loading:_.value,disabled:!U.value},{icon:f(()=>[v(d(Ae),{component:d(Ja)},null,8,["component"])]),default:f(()=>[r[11]||(r[11]=ce(" 保存配置 ",-1))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),default:f(()=>[v(d(ja),{type:"line",animated:""},{default:f(()=>[v(d(He),{name:"style",tab:"封面风格"},{default:f(()=>[v(d(Q),{vertical:"",size:16},{default:f(()=>[m("div",rt,[(V(),ke(Ue,null,Ee(g,l=>m("div",{key:l.value,class:Aa(["style-card",{active:s.value.style===l.value}]),onClick:w=>s.value.style=l.value},[m("img",{src:l.image,alt:l.label,class:"style-image"},null,8,st),m("div",dt,[v(d(et),{checked:s.value.style===l.value,"onUpdate:checked":w=>s.value.style=l.value},null,8,["checked","onUpdate:checked"]),m("span",null,ee(l.label),1)])],10,it)),64))]),s.value.style.startsWith("single")?(V(),J(d(Se),{key:0,"label-placement":"left","label-width":"140",style:{"max-width":"500px"}},{default:f(()=>[v(d(F),{label:"背景模糊程度"},{default:f(()=>[v(d(fe),{value:n.value.single.blur_size,"onUpdate:value":r[0]||(r[0]=l=>n.value.single.blur_size=l),min:0,max:100,step:5},null,8,["value"]),m("span",ut,ee(n.value.single.blur_size),1)]),_:1}),v(d(F),{label:"背景颜色比例"},{default:f(()=>[v(d(fe),{value:n.value.single.color_ratio,"onUpdate:value":r[1]||(r[1]=l=>n.value.single.color_ratio=l),min:0,max:1,step:.1},null,8,["value"]),m("span",ct,ee(n.value.single.color_ratio),1)]),_:1}),v(d(F),{label:"优先使用海报图"},{default:f(()=>[v(d(ve),{value:n.value.single.use_primary,"onUpdate:value":r[2]||(r[2]=l=>n.value.single.use_primary=l)},null,8,["value"]),r[13]||(r[13]=m("span",{style:{"margin-left":"8px",color:"#999","font-size":"13px"}},"关闭则优先使用背景图",-1))]),_:1})]),_:1})):ae("",!0),s.value.style==="multi_1"?(V(),J(d(Se),{key:1,"label-placement":"left","label-width":"140",style:{"max-width":"500px"}},{default:f(()=>[v(d(F),{label:"启用背景模糊"},{default:f(()=>[v(d(ve),{value:n.value.multi_1.blur,"onUpdate:value":r[3]||(r[3]=l=>n.value.multi_1.blur=l)},null,8,["value"])]),_:1}),n.value.multi_1.blur?(V(),J(d(F),{key:0,label:"背景模糊程度"},{default:f(()=>[v(d(fe),{value:n.value.multi_1.blur_size,"onUpdate:value":r[4]||(r[4]=l=>n.value.multi_1.blur_size=l),min:0,max:100,step:5},null,8,["value"]),m("span",vt,ee(n.value.multi_1.blur_size),1)]),_:1})):ae("",!0),v(d(F),{label:"背景颜色比例"},{default:f(()=>[v(d(fe),{value:n.value.multi_1.color_ratio,"onUpdate:value":r[5]||(r[5]=l=>n.value.multi_1.color_ratio=l),min:0,max:1,step:.1},null,8,["value"]),m("span",ht,ee(n.value.multi_1.color_ratio),1)]),_:1}),v(d(F),{label:"优先使用海报图"},{default:f(()=>[v(d(ve),{value:n.value.multi_1.use_primary,"onUpdate:value":r[6]||(r[6]=l=>n.value.multi_1.use_primary=l)},null,8,["value"]),r[14]||(r[14]=m("span",{style:{"margin-left":"8px",color:"#999","font-size":"13px"}},"关闭则优先使用背景图",-1))]),_:1})]),_:1})):ae("",!0),v(d(Se),{"label-placement":"left","label-width":"140",style:{"max-width":"500px"}},{default:f(()=>[v(d(F),{label:"排序方式"},{default:f(()=>[v(d(Ga),{value:s.value.sort_by,"onUpdate:value":r[7]||(r[7]=l=>s.value.sort_by=l),options:H},null,8,["value"])]),_:1}),v(d(F),{label:"保存到本地"},{default:f(()=>[v(d(ve),{value:s.value.save_to_local,"onUpdate:value":r[8]||(r[8]=l=>s.value.save_to_local=l)},null,8,["value"])]),_:1}),s.value.save_to_local?(V(),J(d(F),{key:0,label:"输出目录"},{default:f(()=>[v(d(he),{value:s.value.output_dir,"onUpdate:value":r[9]||(r[9]=l=>s.value.output_dir=l),placeholder:"covers_output"},null,8,["value"])]),_:1})):ae("",!0)]),_:1})]),_:1})]),_:1}),v(d(He),{name:"titles",tab:"封面标题"},{default:f(()=>[v(d(Q),{vertical:"",size:16},{default:f(()=>[r[18]||(r[18]=m("p",{style:{color:"#999"}},"为每个媒体库设置自定义中英文标题，留空则使用媒体库名称作为标题。",-1)),v(d(ze),{onClick:j,type:"primary",dashed:"",size:"small"},{icon:f(()=>[v(d(Ae),{component:d(Wa)},null,8,["component"])]),default:f(()=>[r[15]||(r[15]=ce(" 添加标题 ",-1))]),_:1}),y.value.length>0?(V(),J(d(Pa),{key:0,bordered:!1,"single-line":!1,size:"small"},{default:f(()=>[r[17]||(r[17]=m("thead",null,[m("tr",null,[m("th",{style:{width:"25%"}},"媒体库名称"),m("th",{style:{width:"30%"}},"中文标题"),m("th",{style:{width:"30%"}},"英文标题"),m("th",{style:{width:"15%"}},"操作")])],-1)),m("tbody",null,[(V(!0),ke(Ue,null,Ee(y.value,(l,w)=>(V(),ke("tr",{key:w},[m("td",null,[v(d(he),{value:l.key,"onUpdate:value":B=>l.key=B,placeholder:"媒体库名称",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[v(d(he),{value:l.zh,"onUpdate:value":B=>l.zh=B,placeholder:"中文标题",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[v(d(he),{value:l.en,"onUpdate:value":B=>l.en=B,placeholder:"ENGLISH TITLE",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[v(d(ze),{size:"small",type:"error",quaternary:"",onClick:B=>Y(w)},{default:f(()=>[...r[16]||(r[16]=[ce("删除",-1)])]),_:1},8,["onClick"])])]))),128))])]),_:1})):(V(),J(d(qa),{key:1,description:"暂无自定义标题，将使用媒体库名称"}))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},_t=Ia(ft,[["__scopeId","data-v-0482fdbf"]]);export{_t as default};
