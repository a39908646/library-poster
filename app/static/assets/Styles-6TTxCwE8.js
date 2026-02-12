import{j as u,k as z,l as M,g as E,aj as ya,d as Ie,h as k,s as xa,z as ze,u as Ge,B as _a,C as Me,c as T,E as Le,aq as ka,ar as Sa,as as Je,n as za,q as Ca,at as Ra,au as Na,av as Ta,aw as $a,ax as Ba,ay as Fe,az as Da,a as Oa,r as y,b as Va,aA as Ke,o as Ma,aB as Fa,f as me,w as pe,aC as ge,aD as Be,t as Ia,Z as A,_ as Se,$ as m,aE as Ua,I as Aa,a2 as oe,a3 as c,a4 as o,a5 as ne,a6 as X,a7 as s,a8 as Ea,ae as Ye,af as Xe,aF as Ha,ad as re,ah as De,ab as we,ac as se,a9 as Oe,ag as ja}from"./index-DiTpEquh.js";import{N as Pa,a as de,b as ye,c as La,S as Ja}from"./SaveOutline-C8yjYDHD.js";import{s as Ka,a as Ya,r as Xa}from"./use-radio-B3VQhmNM.js";import{A as Wa}from"./AddOutline-D0gGP4lJ.js";import{u as qa}from"./use-message-BBE4zWLb.js";import{a as xe,b as V,c as _e,N as Ga}from"./FormItem-BZWvGllE.js";import{N as Ve}from"./Select-DGavfstS.js";const Za=u("radio",`
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
`,[z("checked",[M("dot",`
 background-color: var(--n-color-active);
 `)]),M("dot-wrapper",`
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
 `),M("dot",`
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
 `,[E("&::before",`
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
 `),z("checked",{boxShadow:"var(--n-box-shadow-active)"},[E("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),M("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),ya("disabled",`
 cursor: pointer;
 `,[E("&:hover",[M("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),z("focus",[E("&:not(:active)",[M("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),z("disabled",`
 cursor: not-allowed;
 `,[M("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[E("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),z("checked",`
 opacity: 1;
 `)]),M("label",{color:"var(--n-text-color-disabled)"}),u("radio-input",`
 cursor: not-allowed;
 `)])]),Qa=Object.assign(Object.assign({},ze.props),Xa),el=Ie({name:"Radio",props:Qa,setup(t){const r=Ka(t),x=ze("Radio","-radio",Za,Ya,t,r.mergedClsPrefix),p=T(()=>{const{mergedSize:{value:P}}=r,{common:{cubicBezierEaseInOut:g},self:{boxShadow:h,boxShadowActive:R,boxShadowDisabled:L,boxShadowFocus:H,boxShadowHover:W,color:j,colorDisabled:$,colorActive:G,textColor:ie,textColorDisabled:Z,dotColorActive:B,dotColorDisabled:Q,labelPadding:F,labelLineHeight:I,labelFontWeight:J,[Le("fontSize",P)]:q,[Le("radioSize",P)]:ee}}=x.value;return{"--n-bezier":g,"--n-label-line-height":I,"--n-label-font-weight":J,"--n-box-shadow":h,"--n-box-shadow-active":R,"--n-box-shadow-disabled":L,"--n-box-shadow-focus":H,"--n-box-shadow-hover":W,"--n-color":j,"--n-color-active":G,"--n-color-disabled":$,"--n-dot-color-active":B,"--n-dot-color-disabled":Q,"--n-font-size":q,"--n-radio-size":ee,"--n-text-color":ie,"--n-text-color-disabled":Z,"--n-label-padding":F}}),{inlineThemeDisabled:f,mergedClsPrefixRef:w,mergedRtlRef:O}=Ge(t),S=_a("Radio",O,w),_=f?Me("radio",T(()=>r.mergedSize.value[0]),p,t):void 0;return Object.assign(r,{rtlEnabled:S,cssVars:f?void 0:p,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender})},render(){const{$slots:t,mergedClsPrefix:r,onRender:x,label:p}=this;return x==null||x(),k("label",{class:[`${r}-radio`,this.themeClass,this.rtlEnabled&&`${r}-radio--rtl`,this.mergedDisabled&&`${r}-radio--disabled`,this.renderSafeChecked&&`${r}-radio--checked`,this.focus&&`${r}-radio--focus`],style:this.cssVars},k("div",{class:`${r}-radio__dot-wrapper`}," ",k("div",{class:[`${r}-radio__dot`,this.renderSafeChecked&&`${r}-radio__dot--checked`]}),k("input",{ref:"inputRef",type:"radio",class:`${r}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),xa(t.default,f=>!f&&!p?null:k("div",{ref:"labelRef",class:`${r}-radio__label`},f||p)))}});function al(t){const r="rgba(0, 0, 0, .85)",x="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:p,primaryColor:f,baseColor:w,cardColor:O,modalColor:S,popoverColor:_,borderRadius:P,fontSize:g,opacityDisabled:h}=t;return Object.assign(Object.assign({},Sa),{fontSize:g,markFontSize:g,railColor:p,railColorHover:p,fillColor:f,fillColorHover:f,opacityDisabled:h,handleColor:"#FFF",dotColor:O,dotColorModal:S,dotColorPopover:_,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:r,indicatorBoxShadow:x,indicatorTextColor:w,indicatorBorderRadius:P,dotBorder:`2px solid ${p}`,dotBorderActive:`2px solid ${f}`,dotBoxShadow:""})}const ll={common:ka,self:al},tl=E([u("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[z("reverse",[u("slider-handles",[u("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),u("slider-dots",[u("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),z("vertical",[u("slider-handles",[u("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),u("slider-marks",[u("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),u("slider-dots",[u("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),z("vertical",`
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
 `,[M("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),z("with-mark",`
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
 `)])]),z("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[u("slider-handle",`
 cursor: not-allowed;
 `)]),z("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),E("&:hover",[u("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[M("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),u("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),z("active",[u("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[M("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),u("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),u("slider-marks",`
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
 `,[M("fill",`
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
 `,[E("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),E("&:focus",[u("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[E("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),u("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[z("transition-disabled",[u("slider-dot","transition: none;")]),u("slider-dot",`
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
 `,[z("active","border: var(--n-dot-border-active);")])])]),u("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Je()]),u("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[z("top",`
 margin-bottom: 12px;
 `),z("right",`
 margin-left: 12px;
 `),z("bottom",`
 margin-top: 12px;
 `),z("left",`
 margin-right: 12px;
 `),Je()]),za(u("slider",[u("slider-dot","background-color: var(--n-dot-color-modal);")])),Ca(u("slider",[u("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function We(t){return window.TouchEvent&&t instanceof window.TouchEvent}function qe(){const t=new Map,r=x=>p=>{t.set(x,p)};return Ra(()=>{t.clear()}),[t,r]}const ol=0,nl=Object.assign(Object.assign({},ze.props),{to:Fe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),ke=Ie({name:"Slider",props:nl,slots:Object,setup(t){const{mergedClsPrefixRef:r,namespaceRef:x,inlineThemeDisabled:p}=Ge(t),f=ze("Slider","-slider",tl,ll,t,r),w=y(null),[O,S]=qe(),[_,P]=qe(),g=y(new Set),h=Oa(t),{mergedDisabledRef:R}=h,L=T(()=>{const{step:e}=t;if(Number(e)<=0||e==="mark")return 0;const a=e.toString();let l=0;return a.includes(".")&&(l=a.length-a.indexOf(".")-1),l}),H=y(t.defaultValue),W=Ia(t,"value"),j=Va(W,H),$=T(()=>{const{value:e}=j;return(t.range?e:[e]).map(Ee)}),G=T(()=>$.value.length>2),ie=T(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),Z=T(()=>{const{marks:e}=t;return e?Object.keys(e).map(Number.parseFloat):null}),B=y(-1),Q=y(-1),F=y(-1),I=y(!1),J=y(!1),q=T(()=>{const{vertical:e,reverse:a}=t;return e?a?"top":"bottom":a?"right":"left"}),ee=T(()=>{if(G.value)return;const e=$.value,a=ue(t.range?Math.min(...e):t.min),l=ue(t.range?Math.max(...e):e[0]),{value:v}=q;return t.vertical?{[v]:`${a}%`,height:`${l-a}%`}:{[v]:`${a}%`,width:`${l-a}%`}}),Ce=T(()=>{const e=[],{marks:a}=t;if(a){const l=$.value.slice();l.sort((D,N)=>D-N);const{value:v}=q,{value:b}=G,{range:C}=t,U=b?()=>!1:D=>C?D>=l[0]&&D<=l[l.length-1]:D<=l[0];for(const D of Object.keys(a)){const N=Number(D);e.push({active:U(N),key:N,label:a[D],style:{[v]:`${ue(N)}%`}})}}return e});function d(e,a){const l=ue(e),{value:v}=q;return{[v]:`${l}%`,zIndex:a===B.value?1:0}}function n(e){return t.showTooltip||F.value===e||B.value===e&&I.value}function i(e){return I.value?!(B.value===e&&Q.value===e):!0}function ae(e){var a;~e&&(B.value=e,(a=O.get(e))===null||a===void 0||a.focus())}function K(){_.forEach((e,a)=>{n(a)&&e.syncPosition()})}function Ue(e){const{"onUpdate:value":a,onUpdateValue:l}=t,{nTriggerFormInput:v,nTriggerFormChange:b}=h;l&&me(l,e),a&&me(a,e),H.value=e,v(),b()}function Ae(e){const{range:a}=t;if(a){if(Array.isArray(e)){const{value:l}=$;e.join()!==l.join()&&Ue(e)}}else Array.isArray(e)||$.value[0]!==e&&Ue(e)}function Re(e,a){if(t.range){const l=$.value.slice();l.splice(a,1,e),Ae(l)}else Ae(e)}function Ne(e,a,l){const v=l!==void 0;l||(l=e-a>0?1:-1);const b=Z.value||[],{step:C}=t;if(C==="mark"){const N=ce(e,b.concat(a),v?l:void 0);return N?N.value:a}if(C<=0)return a;const{value:U}=L;let D;if(v){const N=Number((a/C).toFixed(U)),Y=Math.floor(N),Te=N>Y?Y:Y-1,$e=N<Y?Y:Y+1;D=ce(a,[Number((Te*C).toFixed(U)),Number(($e*C).toFixed(U)),...b],l)}else{const N=Qe(e);D=ce(e,[...b,N])}return D?Ee(D.value):a}function Ee(e){return Math.min(t.max,Math.max(t.min,e))}function ue(e){const{max:a,min:l}=t;return(e-l)/(a-l)*100}function Ze(e){const{max:a,min:l}=t;return l+(a-l)*e}function Qe(e){const{step:a,min:l}=t;if(Number(a)<=0||a==="mark")return e;const v=Math.round((e-l)/a)*a+l;return Number(v.toFixed(L.value))}function ce(e,a=Z.value,l){if(!(a!=null&&a.length))return null;let v=null,b=-1;for(;++b<a.length;){const C=a[b]-e,U=Math.abs(C);(l===void 0||C*l>0)&&(v===null||U<v.distance)&&(v={index:b,distance:U,value:a[b]})}return v}function He(e){const a=w.value;if(!a)return;const l=We(e)?e.touches[0]:e,v=a.getBoundingClientRect();let b;return t.vertical?b=(v.bottom-l.clientY)/v.height:b=(l.clientX-v.left)/v.width,t.reverse&&(b=1-b),Ze(b)}function ea(e){if(R.value||!t.keyboard)return;const{vertical:a,reverse:l}=t;switch(e.key){case"ArrowUp":e.preventDefault(),ve(a&&l?-1:1);break;case"ArrowRight":e.preventDefault(),ve(!a&&l?-1:1);break;case"ArrowDown":e.preventDefault(),ve(a&&l?1:-1);break;case"ArrowLeft":e.preventDefault(),ve(!a&&l?1:-1);break}}function ve(e){const a=B.value;if(a===-1)return;const{step:l}=t,v=$.value[a],b=Number(l)<=0||l==="mark"?v:v+l*e;Re(Ne(b,v,e>0?1:-1),a)}function aa(e){var a,l;if(R.value||!We(e)&&e.button!==ol)return;const v=He(e);if(v===void 0)return;const b=$.value.slice(),C=t.range?(l=(a=ce(v,b))===null||a===void 0?void 0:a.index)!==null&&l!==void 0?l:-1:0;C!==-1&&(e.preventDefault(),ae(C),la(),Re(Ne(v,$.value[C]),C))}function la(){I.value||(I.value=!0,t.onDragstart&&me(t.onDragstart),pe("touchend",document,be),pe("mouseup",document,be),pe("touchmove",document,fe),pe("mousemove",document,fe))}function he(){I.value&&(I.value=!1,t.onDragend&&me(t.onDragend),ge("touchend",document,be),ge("mouseup",document,be),ge("touchmove",document,fe),ge("mousemove",document,fe))}function fe(e){const{value:a}=B;if(!I.value||a===-1){he();return}const l=He(e);l!==void 0&&Re(Ne(l,$.value[a]),a)}function be(){he()}function ta(e){B.value=e,R.value||(F.value=e)}function oa(e){B.value===e&&(B.value=-1,he()),F.value===e&&(F.value=-1)}function na(e){F.value=e}function ra(e){F.value===e&&(F.value=-1)}Ke(B,(e,a)=>void Be(()=>Q.value=a)),Ke(j,()=>{if(t.marks){if(J.value)return;J.value=!0,Be(()=>{J.value=!1})}Be(K)}),Ma(()=>{he()});const je=T(()=>{const{self:{markFontSize:e,railColor:a,railColorHover:l,fillColor:v,fillColorHover:b,handleColor:C,opacityDisabled:U,dotColor:D,dotColorModal:N,handleBoxShadow:Y,handleBoxShadowHover:Te,handleBoxShadowActive:$e,handleBoxShadowFocus:ia,dotBorder:sa,dotBoxShadow:da,railHeight:ua,railWidthVertical:ca,handleSize:va,dotHeight:ha,dotWidth:fa,dotBorderRadius:ba,fontSize:ma,dotBorderActive:pa,dotColorPopover:ga},common:{cubicBezierEaseInOut:wa}}=f.value;return{"--n-bezier":wa,"--n-dot-border":sa,"--n-dot-border-active":pa,"--n-dot-border-radius":ba,"--n-dot-box-shadow":da,"--n-dot-color":D,"--n-dot-color-modal":N,"--n-dot-color-popover":ga,"--n-dot-height":ha,"--n-dot-width":fa,"--n-fill-color":v,"--n-fill-color-hover":b,"--n-font-size":ma,"--n-handle-box-shadow":Y,"--n-handle-box-shadow-active":$e,"--n-handle-box-shadow-focus":ia,"--n-handle-box-shadow-hover":Te,"--n-handle-color":C,"--n-handle-size":va,"--n-opacity-disabled":U,"--n-rail-color":a,"--n-rail-color-hover":l,"--n-rail-height":ua,"--n-rail-width-vertical":ca,"--n-mark-font-size":e}}),le=p?Me("slider",void 0,je,t):void 0,Pe=T(()=>{const{self:{fontSize:e,indicatorColor:a,indicatorBoxShadow:l,indicatorTextColor:v,indicatorBorderRadius:b}}=f.value;return{"--n-font-size":e,"--n-indicator-border-radius":b,"--n-indicator-box-shadow":l,"--n-indicator-color":a,"--n-indicator-text-color":v}}),te=p?Me("slider-indicator",void 0,Pe,t):void 0;return{mergedClsPrefix:r,namespace:x,uncontrolledValue:H,mergedValue:j,mergedDisabled:R,mergedPlacement:ie,isMounted:Fa(),adjustedTo:Fe(t),dotTransitionDisabled:J,markInfos:Ce,isShowTooltip:n,shouldKeepTooltipTransition:i,handleRailRef:w,setHandleRefs:S,setFollowerRefs:P,fillStyle:ee,getHandleStyle:d,activeIndex:B,arrifiedValues:$,followerEnabledIndexSet:g,handleRailMouseDown:aa,handleHandleFocus:ta,handleHandleBlur:oa,handleHandleMouseEnter:na,handleHandleMouseLeave:ra,handleRailKeyDown:ea,indicatorCssVars:p?void 0:Pe,indicatorThemeClass:te==null?void 0:te.themeClass,indicatorOnRender:te==null?void 0:te.onRender,cssVars:p?void 0:je,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender}},render(){var t;const{mergedClsPrefix:r,themeClass:x,formatTooltip:p}=this;return(t=this.onRender)===null||t===void 0||t.call(this),k("div",{class:[`${r}-slider`,x,{[`${r}-slider--disabled`]:this.mergedDisabled,[`${r}-slider--active`]:this.activeIndex!==-1,[`${r}-slider--with-mark`]:this.marks,[`${r}-slider--vertical`]:this.vertical,[`${r}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},k("div",{class:`${r}-slider-rail`},k("div",{class:`${r}-slider-rail__fill`,style:this.fillStyle}),this.marks?k("div",{class:[`${r}-slider-dots`,this.dotTransitionDisabled&&`${r}-slider-dots--transition-disabled`]},this.markInfos.map(f=>k("div",{key:f.key,class:[`${r}-slider-dot`,{[`${r}-slider-dot--active`]:f.active}],style:f.style}))):null,k("div",{ref:"handleRailRef",class:`${r}-slider-handles`},this.arrifiedValues.map((f,w)=>{const O=this.isShowTooltip(w);return k(Na,null,{default:()=>[k(Ta,null,{default:()=>k("div",{ref:this.setHandleRefs(w),class:`${r}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":f,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(f,w),onFocus:()=>{this.handleHandleFocus(w)},onBlur:()=>{this.handleHandleBlur(w)},onMouseenter:()=>{this.handleHandleMouseEnter(w)},onMouseleave:()=>{this.handleHandleMouseLeave(w)}},$a(this.$slots.thumb,()=>[k("div",{class:`${r}-slider-handle`})]))}),this.tooltip&&k(Ba,{ref:this.setFollowerRefs(w),show:O,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(w),teleportDisabled:this.adjustedTo===Fe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>k(Da,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(w),onEnter:()=>{this.followerEnabledIndexSet.add(w)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(w)}},{default:()=>{var S;return O?((S=this.indicatorOnRender)===null||S===void 0||S.call(this),k("div",{class:[`${r}-slider-handle-indicator`,this.indicatorThemeClass,`${r}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(f):f)):null}})})]})})),this.marks?k("div",{class:`${r}-slider-marks`},this.markInfos.map(f=>k("div",{key:f.key,class:`${r}-slider-mark`,style:f.style},typeof f.label=="function"?f.label():f.label))):null))}}),rl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},il=Ie({name:"CheckmarkOutline",render:function(r,x){return A(),Se("svg",rl,x[0]||(x[0]=[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M416 128L192 384l-96-96"},null,-1)]))}}),sl={class:"style-cards"},dl=["onClick"],ul=["src","alt"],cl={class:"style-label"},vl={style:{"margin-left":"12px","min-width":"40px"}},hl={style:{"margin-left":"12px","min-width":"40px"}},fl={style:{"margin-left":"12px","min-width":"40px"}},bl={style:{"margin-left":"12px","min-width":"40px"}},ml={__name:"Styles",setup(t){const r=qa(),x=y(!1),p=y(!1),f=y(!1),w=y([]),O=y([]),S=y(null),_=y([]),P=[{value:"single_1",label:"单图 1",image:"/images/single_1.jpg"},{value:"single_2",label:"单图 2",image:"/images/single_2.jpg"},{value:"multi_1",label:"多图 1",image:"/images/multi_1.jpg"}],g=y({style:"single_1",sort_by:"Random",save_to_local:!1,output_dir:"covers_output"}),h=y({single:{blur_size:50,color_ratio:.8,use_primary:!1},multi_1:{blur:!1,blur_size:50,color_ratio:.8,use_primary:!0}}),R=y([]),L=y(null),H=y(null),W=y(null),j=T(()=>JSON.stringify(g.value)!==JSON.stringify(L.value)||JSON.stringify(h.value)!==JSON.stringify(H.value)||JSON.stringify(R.value)!==JSON.stringify(W.value)),$=[{label:"随机",value:"Random"},{label:"最新入库",value:"DateCreated"},{label:"名称",value:"SortName"}],G=T(()=>w.value.map(d=>({label:d.name,value:d.name}))),ie=T(()=>O.value.map(d=>({label:d.Name,value:d.Name}))),Z=T(()=>_.value.length===0?"应用到全部媒体库":`应用到 ${_.value.length} 个媒体库`);function B(){R.value.push({key:"",zh:"",en:""})}function Q(d){R.value.splice(d,1)}function F(d){return!d||typeof d!="object"?[]:Object.entries(d).map(([n,i])=>({key:n,zh:i.zh||"",en:i.en||""}))}function I(d){const n={};for(const i of d)i.key.trim()&&(n[i.key.trim()]={zh:i.zh,en:i.en});return n}async function J(){try{const[d,n]=await Promise.all([X.getFullConfig(),X.getServers()]);w.value=n.servers||[],d.cover&&(g.value={style:d.cover.style||"single_1",sort_by:d.cover.sort_by||"Random",save_to_local:d.cover.save_to_local||!1,output_dir:d.cover.output_dir||"covers_output"}),d.style_params&&(h.value={single:{...h.value.single,...d.style_params.single},multi_1:{...h.value.multi_1,...d.style_params.multi_1}}),R.value=F(d.titles),L.value=JSON.parse(JSON.stringify(g.value)),H.value=JSON.parse(JSON.stringify(h.value)),W.value=JSON.parse(JSON.stringify(R.value))}catch(d){r.error("加载数据失败: "+d.message)}}async function q(){if(!S.value){O.value=[];return}f.value=!0;try{const d=await X.getServerLibraries(S.value);O.value=d.libraries||[],_.value=[]}catch(d){r.error("加载媒体库失败: "+d.message),O.value=[]}finally{f.value=!1}}async function ee(){x.value=!0;try{const d=await X.getFullConfig();d.cover={...d.cover,...g.value},d.style_params={...d.style_params,single:{...h.value.single},multi_1:{...h.value.multi_1}},d.titles=I(R.value),await X.saveConfig(d),r.success("配置已保存"),L.value=JSON.parse(JSON.stringify(g.value)),H.value=JSON.parse(JSON.stringify(h.value)),W.value=JSON.parse(JSON.stringify(R.value))}catch(d){r.error("保存失败: "+d.message)}finally{x.value=!1}}async function Ce(){if(!S.value){r.warning("请选择服务器");return}j.value&&await ee(),p.value=!0;try{if(_.value.length===0)await X.generateCover(S.value,null),r.success("已启动全部媒体库封面生成");else if(_.value.length===1)await X.generateCover(S.value,_.value[0]),r.success("封面生成任务已启动");else{const d=_.value.map(n=>({server_name:S.value,library_name:n}));await X.createBatch(d),r.success(`已启动 ${d.length} 个媒体库封面生成`)}}catch(d){r.error("启动生成任务失败: "+d.message)}finally{p.value=!1}}return Aa(()=>{J()}),(d,n)=>(A(),oe(o(ne),{vertical:"",size:24},{default:c(()=>[s(o(Ea),null,{header:c(()=>[s(o(ne),{justify:"space-between",align:"center"},{default:c(()=>[n[14]||(n[14]=m("span",null,"风格配置",-1)),s(o(ne),null,{default:c(()=>[j.value?(A(),oe(o(ja),{key:0,type:"warning"},{default:c(()=>[...n[12]||(n[12]=[se("有未保存的更改",-1)])]),_:1})):De("",!0),s(o(we),{type:"primary",onClick:ee,loading:x.value,disabled:!j.value},{icon:c(()=>[s(o(Oe),{component:o(Ja)},null,8,["component"])]),default:c(()=>[n[13]||(n[13]=se(" 保存配置 ",-1))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),default:c(()=>[s(o(Pa),{type:"line",animated:""},{default:c(()=>[s(o(de),{name:"style",tab:"封面风格"},{default:c(()=>[s(o(ne),{vertical:"",size:16},{default:c(()=>[m("div",sl,[(A(),Se(Ye,null,Xe(P,i=>m("div",{key:i.value,class:Ha(["style-card",{active:g.value.style===i.value}]),onClick:ae=>g.value.style=i.value},[m("img",{src:i.image,alt:i.label,class:"style-image"},null,8,ul),m("div",cl,[s(o(el),{checked:g.value.style===i.value,"onUpdate:checked":ae=>g.value.style=i.value},null,8,["checked","onUpdate:checked"]),m("span",null,re(i.label),1)])],10,dl)),64))]),s(o(xe),{"label-placement":"left","label-width":"120",style:{"max-width":"500px"}},{default:c(()=>[s(o(V),{label:"排序方式"},{default:c(()=>[s(o(Ve),{value:g.value.sort_by,"onUpdate:value":n[0]||(n[0]=i=>g.value.sort_by=i),options:$},null,8,["value"])]),_:1}),s(o(V),{label:"保存到本地"},{default:c(()=>[s(o(ye),{value:g.value.save_to_local,"onUpdate:value":n[1]||(n[1]=i=>g.value.save_to_local=i)},null,8,["value"])]),_:1}),g.value.save_to_local?(A(),oe(o(V),{key:0,label:"输出目录"},{default:c(()=>[s(o(_e),{value:g.value.output_dir,"onUpdate:value":n[2]||(n[2]=i=>g.value.output_dir=i),placeholder:"covers_output"},null,8,["value"])]),_:1})):De("",!0)]),_:1})]),_:1})]),_:1}),s(o(de),{name:"titles",tab:"封面标题"},{default:c(()=>[s(o(ne),{vertical:"",size:16},{default:c(()=>[n[18]||(n[18]=m("p",{style:{color:"#999"}},"为每个媒体库设置自定义中英文标题，留空则使用媒体库名称作为标题。",-1)),s(o(we),{onClick:B,type:"primary",dashed:"",size:"small"},{icon:c(()=>[s(o(Oe),{component:o(Wa)},null,8,["component"])]),default:c(()=>[n[15]||(n[15]=se(" 添加标题 ",-1))]),_:1}),R.value.length>0?(A(),oe(o(La),{key:0,bordered:!1,"single-line":!1,size:"small"},{default:c(()=>[n[17]||(n[17]=m("thead",null,[m("tr",null,[m("th",{style:{width:"25%"}},"媒体库名称"),m("th",{style:{width:"30%"}},"中文标题"),m("th",{style:{width:"30%"}},"英文标题"),m("th",{style:{width:"15%"}},"操作")])],-1)),m("tbody",null,[(A(!0),Se(Ye,null,Xe(R.value,(i,ae)=>(A(),Se("tr",{key:ae},[m("td",null,[s(o(_e),{value:i.key,"onUpdate:value":K=>i.key=K,placeholder:"媒体库名称",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[s(o(_e),{value:i.zh,"onUpdate:value":K=>i.zh=K,placeholder:"中文标题",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[s(o(_e),{value:i.en,"onUpdate:value":K=>i.en=K,placeholder:"ENGLISH TITLE",size:"small"},null,8,["value","onUpdate:value"])]),m("td",null,[s(o(we),{size:"small",type:"error",quaternary:"",onClick:K=>Q(ae)},{default:c(()=>[...n[16]||(n[16]=[se("删除",-1)])]),_:1},8,["onClick"])])]))),128))])]),_:1})):(A(),oe(o(Ga),{key:1,description:"暂无自定义标题，将使用媒体库名称"}))]),_:1})]),_:1}),s(o(de),{name:"single_params",tab:"单图风格设置"},{default:c(()=>[s(o(xe),{"label-placement":"left","label-width":"140",style:{"max-width":"500px"}},{default:c(()=>[s(o(V),{label:"背景模糊程度"},{default:c(()=>[s(o(ke),{value:h.value.single.blur_size,"onUpdate:value":n[3]||(n[3]=i=>h.value.single.blur_size=i),min:0,max:100,step:5},null,8,["value"]),m("span",vl,re(h.value.single.blur_size),1)]),_:1}),s(o(V),{label:"背景颜色比例"},{default:c(()=>[s(o(ke),{value:h.value.single.color_ratio,"onUpdate:value":n[4]||(n[4]=i=>h.value.single.color_ratio=i),min:0,max:1,step:.1},null,8,["value"]),m("span",hl,re(h.value.single.color_ratio),1)]),_:1}),s(o(V),{label:"优先使用海报图"},{default:c(()=>[s(o(ye),{value:h.value.single.use_primary,"onUpdate:value":n[5]||(n[5]=i=>h.value.single.use_primary=i)},null,8,["value"]),n[19]||(n[19]=m("span",{style:{"margin-left":"8px",color:"#999","font-size":"13px"}},"关闭则优先使用背景图",-1))]),_:1})]),_:1})]),_:1}),s(o(de),{name:"multi_params",tab:"多图风格设置"},{default:c(()=>[s(o(xe),{"label-placement":"left","label-width":"140",style:{"max-width":"500px"}},{default:c(()=>[s(o(V),{label:"启用背景模糊"},{default:c(()=>[s(o(ye),{value:h.value.multi_1.blur,"onUpdate:value":n[6]||(n[6]=i=>h.value.multi_1.blur=i)},null,8,["value"])]),_:1}),h.value.multi_1.blur?(A(),oe(o(V),{key:0,label:"背景模糊程度"},{default:c(()=>[s(o(ke),{value:h.value.multi_1.blur_size,"onUpdate:value":n[7]||(n[7]=i=>h.value.multi_1.blur_size=i),min:0,max:100,step:5},null,8,["value"]),m("span",fl,re(h.value.multi_1.blur_size),1)]),_:1})):De("",!0),s(o(V),{label:"背景颜色比例"},{default:c(()=>[s(o(ke),{value:h.value.multi_1.color_ratio,"onUpdate:value":n[8]||(n[8]=i=>h.value.multi_1.color_ratio=i),min:0,max:1,step:.1},null,8,["value"]),m("span",bl,re(h.value.multi_1.color_ratio),1)]),_:1}),s(o(V),{label:"优先使用海报图"},{default:c(()=>[s(o(ye),{value:h.value.multi_1.use_primary,"onUpdate:value":n[9]||(n[9]=i=>h.value.multi_1.use_primary=i)},null,8,["value"]),n[20]||(n[20]=m("span",{style:{"margin-left":"8px",color:"#999","font-size":"13px"}},"关闭则优先使用背景图",-1))]),_:1})]),_:1})]),_:1}),s(o(de),{name:"apply",tab:"应用封面"},{default:c(()=>[s(o(ne),{vertical:"",size:16},{default:c(()=>[s(o(xe),{"label-placement":"left","label-width":"120",style:{"max-width":"600px"}},{default:c(()=>[s(o(V),{label:"选择服务器"},{default:c(()=>[s(o(Ve),{value:S.value,"onUpdate:value":[n[10]||(n[10]=i=>S.value=i),q],options:G.value,placeholder:"请选择服务器"},null,8,["value","options"])]),_:1}),s(o(V),{label:"选择媒体库"},{default:c(()=>[s(o(Ve),{value:_.value,"onUpdate:value":n[11]||(n[11]=i=>_.value=i),options:ie.value,placeholder:"留空表示全部媒体库",multiple:"",clearable:"",loading:f.value},null,8,["value","options","loading"])]),_:1})]),_:1}),s(o(we),{type:"success",onClick:Ce,loading:p.value,disabled:!S.value},{icon:c(()=>[s(o(Oe),{component:o(il)},null,8,["component"])]),default:c(()=>[se(" "+re(Z.value),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Sl=Ua(ml,[["__scopeId","data-v-c99c5625"]]);export{Sl as default};
