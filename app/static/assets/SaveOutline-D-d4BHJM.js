import{d as te,h as s,aQ as St,aR as Rt,r as L,aS as je,aT as zt,aU as ve,aV as $t,aq as kt,aW as Tt,aH as Pt,j as o,l as b,m as Fe,g as c,k as n,aj as ge,aX as Ce,s as G,N as Bt,aY as _t,u as We,z as ie,a as Wt,b as Ne,C as Ee,c as K,f as ee,E as _,F as Se,aZ as X,t as I,n as Et,q as At,a_ as Lt,B as jt,e as Ft,x as Ue,ak as Ot,H as Vt,ae as Ht,P as It,a$ as Mt,b0 as Dt,b1 as Nt,K as Re,V as ze,b2 as Ut,aA as $e,I as Xt,b3 as Kt,b4 as Yt,ao as Oe,b5 as Gt,v as qt,b6 as Zt,M as Jt,aD as ke,b7 as pe,p as Qt,Z as er,_ as tr,$ as rr}from"./index-D9ClbKiL.js";import{a as ar}from"./AddOutline-DxrtwUNI.js";const or=je(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[je("&::-webkit-scrollbar",{width:0,height:0})]),nr=te({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function a(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const i=St();return or.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rt,ssr:i}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...d){var R;(R=e.value)===null||R===void 0||R.scrollTo(...d)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ir=/\s/;function lr(e){for(var a=e.length;a--&&ir.test(e.charAt(a)););return a}var sr=/^\s+/;function dr(e){return e&&e.slice(0,lr(e)+1).replace(sr,"")}var Ve=NaN,cr=/^[-+]0x[0-9a-f]+$/i,br=/^0b[01]+$/i,fr=/^0o[0-7]+$/i,ur=parseInt;function He(e){if(typeof e=="number")return e;if(zt(e))return Ve;if(ve(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ve(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=dr(e);var i=br.test(e);return i||fr.test(e)?ur(e.slice(2),i?2:8):cr.test(e)?Ve:+e}var Te=function(){return $t.Date.now()},hr="Expected a function",pr=Math.max,vr=Math.min;function gr(e,a,i){var u,d,R,v,f,C,x=0,S=!1,k=!1,g=!0;if(typeof e!="function")throw new TypeError(hr);a=He(a)||0,ve(i)&&(S=!!i.leading,k="maxWait"in i,R=k?pr(He(i.maxWait)||0,a):R,g="trailing"in i?!!i.trailing:g);function y(h){var $=u,m=d;return u=d=void 0,x=h,v=e.apply(m,$),v}function z(h){return x=h,f=setTimeout(E,a),S?y(h):v}function T(h){var $=h-C,m=h-x,F=a-$;return k?vr(F,R-m):F}function W(h){var $=h-C,m=h-x;return C===void 0||$>=a||$<0||k&&m>=R}function E(){var h=Te();if(W(h))return P(h);f=setTimeout(E,T(h))}function P(h){return f=void 0,g&&u?y(h):(u=d=void 0,v)}function j(){f!==void 0&&clearTimeout(f),x=0,u=C=d=f=void 0}function A(){return f===void 0?v:P(Te())}function w(){var h=Te(),$=W(h);if(u=arguments,d=this,C=h,$){if(f===void 0)return z(C);if(k)return clearTimeout(f),f=setTimeout(E,a),y(C)}return f===void 0&&(f=setTimeout(E,a)),v}return w.cancel=j,w.flush=A,w}var mr="Expected a function";function xr(e,a,i){var u=!0,d=!0;if(typeof e!="function")throw new TypeError(mr);return ve(i)&&(u="leading"in i?!!i.leading:u,d="trailing"in i?!!i.trailing:d),gr(e,a,{leading:u,maxWait:a,trailing:d})}function yr(e){const{primaryColor:a,opacityDisabled:i,borderRadius:u,textColor3:d}=e;return Object.assign(Object.assign({},Tt),{iconColor:d,textColor:"white",loadingColor:a,opacityDisabled:i,railColor:"rgba(0, 0, 0, .14)",railColorActive:a,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:u,railBorderRadiusMedium:u,railBorderRadiusLarge:u,buttonBorderRadiusSmall:u,buttonBorderRadiusMedium:u,buttonBorderRadiusLarge:u,boxShadowFocus:`0 0 0 2px ${Pt(a,{alpha:.2})}`})}const wr={common:kt,self:yr},Cr=o("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[b("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),b("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),b("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),o("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Fe({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),b("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),b("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),b("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c("&:focus",[b("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),n("round",[b("rail","border-radius: calc(var(--n-rail-height) / 2);",[b("button","border-radius: calc(var(--n-button-height) / 2);")])]),ge("disabled",[ge("icon",[n("rubber-band",[n("pressed",[b("rail",[b("button","max-width: var(--n-button-width-pressed);")])]),b("rail",[c("&:active",[b("button","max-width: var(--n-button-width-pressed);")])]),n("active",[n("pressed",[b("rail",[b("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),b("rail",[c("&:active",[b("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),n("active",[b("rail",[b("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),b("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[b("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Fe()]),b("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),n("active",[b("rail","background-color: var(--n-rail-color-active);")]),n("loading",[b("rail",`
 cursor: wait;
 `)]),n("disabled",[b("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Sr=Object.assign(Object.assign({},ie.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ce;const Wr=te({name:"Switch",props:Sr,slots:Object,setup(e){ce===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ce=CSS.supports("width","max(1px)"):ce=!1:ce=!0);const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=We(e),u=ie("Switch","-switch",Cr,wr,e,a),d=Wt(e),{mergedSizeRef:R,mergedDisabledRef:v}=d,f=L(e.defaultValue),C=I(e,"value"),x=Ne(C,f),S=K(()=>x.value===e.checkedValue),k=L(!1),g=L(!1),y=K(()=>{const{railStyle:m}=e;if(m)return m({focused:g.value,checked:S.value})});function z(m){const{"onUpdate:value":F,onChange:Y,onUpdateValue:O}=e,{nTriggerFormInput:q,nTriggerFormChange:M}=d;F&&ee(F,m),O&&ee(O,m),Y&&ee(Y,m),f.value=m,q(),M()}function T(){const{nTriggerFormFocus:m}=d;m()}function W(){const{nTriggerFormBlur:m}=d;m()}function E(){e.loading||v.value||(x.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue))}function P(){g.value=!0,T()}function j(){g.value=!1,W(),k.value=!1}function A(m){e.loading||v.value||m.key===" "&&(x.value!==e.checkedValue?z(e.checkedValue):z(e.uncheckedValue),k.value=!1)}function w(m){e.loading||v.value||m.key===" "&&(m.preventDefault(),k.value=!0)}const h=K(()=>{const{value:m}=R,{self:{opacityDisabled:F,railColor:Y,railColorActive:O,buttonBoxShadow:q,buttonColor:M,boxShadowFocus:le,loadingColor:D,textColor:me,iconColor:xe,[_("buttonHeight",m)]:N,[_("buttonWidth",m)]:be,[_("buttonWidthPressed",m)]:fe,[_("railHeight",m)]:U,[_("railWidth",m)]:J,[_("railBorderRadius",m)]:ye,[_("buttonBorderRadius",m)]:ue},common:{cubicBezierEaseInOut:Z}}=u.value;let Q,re,se;return ce?(Q=`calc((${U} - ${N}) / 2)`,re=`max(${U}, ${N})`,se=`max(${J}, calc(${J} + ${N} - ${U}))`):(Q=Se((X(U)-X(N))/2),re=Se(Math.max(X(U),X(N))),se=X(U)>X(N)?J:Se(X(J)+X(N)-X(U))),{"--n-bezier":Z,"--n-button-border-radius":ue,"--n-button-box-shadow":q,"--n-button-color":M,"--n-button-width":be,"--n-button-width-pressed":fe,"--n-button-height":N,"--n-height":re,"--n-offset":Q,"--n-opacity-disabled":F,"--n-rail-border-radius":ye,"--n-rail-color":Y,"--n-rail-color-active":O,"--n-rail-height":U,"--n-rail-width":J,"--n-width":se,"--n-box-shadow-focus":le,"--n-loading-color":D,"--n-text-color":me,"--n-icon-color":xe}}),$=i?Ee("switch",K(()=>R.value[0]),h,e):void 0;return{handleClick:E,handleBlur:j,handleFocus:P,handleKeyup:A,handleKeydown:w,mergedRailStyle:y,pressed:k,mergedClsPrefix:a,mergedValue:x,checked:S,mergedDisabled:v,cssVars:i?void 0:h,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:i,mergedRailStyle:u,onRender:d,$slots:R}=this;d==null||d();const{checked:v,unchecked:f,icon:C,"checked-icon":x,"unchecked-icon":S}=R,k=!(Ce(C)&&Ce(x)&&Ce(S));return s("div",{role:"switch","aria-checked":i,class:[`${e}-switch`,this.themeClass,k&&`${e}-switch--icon`,i&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},s("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:u},G(v,g=>G(f,y=>g||y?s("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),g),s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),y)):null)),s("div",{class:`${e}-switch__button`},G(C,g=>G(x,y=>G(S,z=>s(Bt,null,{default:()=>this.loading?s(_t,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(y||g)?s("div",{class:`${e}-switch__button-icon`,key:y?"checked-icon":"icon"},y||g):!this.checked&&(z||g)?s("div",{class:`${e}-switch__button-icon`,key:z?"unchecked-icon":"icon"},z||g):null})))),G(v,g=>g&&s("div",{key:"checked",class:`${e}-switch__checked`},g)),G(f,g=>g&&s("div",{key:"unchecked",class:`${e}-switch__unchecked`},g)))))}}),Rr=c([o("table",`
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
 `,[c("th",`
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
 `,[c("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c("td",`
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
 `,[c("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[c("tr",[c("&:last-child",[c("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),n("single-line",[c("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),c("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("single-column",[c("tr",[c("&:not(:last-child)",[c("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),n("striped",[c("tr:nth-of-type(even)",[c("td","background-color: var(--n-td-color-striped)")])]),ge("bottom-bordered",[c("tr",[c("&:last-child",[c("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),Et(o("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[c("th",`
 background-color: var(--n-th-color-modal);
 `),c("td",`
 background-color: var(--n-td-color-modal);
 `)])),At(o("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[c("th",`
 background-color: var(--n-th-color-popover);
 `),c("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),zr=Object.assign(Object.assign({},ie.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Er=te({name:"Table",props:zr,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i,mergedRtlRef:u}=We(e),d=ie("Table","-table",Rr,Lt,e,a),R=jt("Table",u,a),v=K(()=>{const{size:C}=e,{self:{borderColor:x,tdColor:S,tdColorModal:k,tdColorPopover:g,thColor:y,thColorModal:z,thColorPopover:T,thTextColor:W,tdTextColor:E,borderRadius:P,thFontWeight:j,lineHeight:A,borderColorModal:w,borderColorPopover:h,tdColorStriped:$,tdColorStripedModal:m,tdColorStripedPopover:F,[_("fontSize",C)]:Y,[_("tdPadding",C)]:O,[_("thPadding",C)]:q},common:{cubicBezierEaseInOut:M}}=d.value;return{"--n-bezier":M,"--n-td-color":S,"--n-td-color-modal":k,"--n-td-color-popover":g,"--n-td-text-color":E,"--n-border-color":x,"--n-border-color-modal":w,"--n-border-color-popover":h,"--n-border-radius":P,"--n-font-size":Y,"--n-th-color":y,"--n-th-color-modal":z,"--n-th-color-popover":T,"--n-th-font-weight":j,"--n-th-text-color":W,"--n-line-height":A,"--n-td-padding":O,"--n-th-padding":q,"--n-td-color-striped":$,"--n-td-color-striped-modal":m,"--n-td-color-striped-popover":F}}),f=i?Ee("table",K(()=>e.size[0]),v,e):void 0;return{rtlEnabled:R,mergedClsPrefix:a,cssVars:i?void 0:v,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;const{mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("table",{class:[`${a}-table`,this.themeClass,{[`${a}-table--rtl`]:this.rtlEnabled,[`${a}-table--bottom-bordered`]:this.bottomBordered,[`${a}-table--bordered`]:this.bordered,[`${a}-table--single-line`]:this.singleLine,[`${a}-table--single-column`]:this.singleColumn,[`${a}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Ae=Ft("n-tabs"),Xe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ar=te({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Xe,slots:Object,setup(e){const a=Ue(Ae,null);return a||Ot("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),$r=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Nt(Xe,["displayDirective"])),_e=te({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:$r,setup(e){const{mergedClsPrefixRef:a,valueRef:i,typeRef:u,closableRef:d,tabStyleRef:R,addTabStyleRef:v,tabClassRef:f,addTabClassRef:C,tabChangeIdRef:x,onBeforeLeaveRef:S,triggerRef:k,handleAdd:g,activateTab:y,handleClose:z}=Ue(Ae);return{trigger:k,mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:T}=e;return T===void 0?d.value:T}),style:R,addStyle:v,tabClass:f,addTabClass:C,clsPrefix:a,value:i,type:u,handleClose(T){T.stopPropagation(),!e.disabled&&z(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){g();return}const{name:T}=e,W=++x.id;if(T!==i.value){const{value:E}=S;E?Promise.resolve(E(e.name,i.value)).then(P=>{P&&x.id===W&&y(T)}):y(T)}}}},render(){const{internalAddable:e,clsPrefix:a,name:i,disabled:u,label:d,tab:R,value:v,mergedClosable:f,trigger:C,$slots:{default:x}}=this,S=d??R;return s("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${a}-tabs-tab-pad`}):null,s("div",Object.assign({key:i,"data-name":i,"data-disabled":u?!0:void 0},Vt({class:[`${a}-tabs-tab`,v===i&&`${a}-tabs-tab--active`,u&&`${a}-tabs-tab--disabled`,f&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${a}-tabs-tab__label`},e?s(Ht,null,s("div",{class:`${a}-tabs-tab__height-placeholder`}," "),s(It,{clsPrefix:a},{default:()=>s(ar,null)})):x?x():typeof S=="object"?S:Mt(S??i)),f&&this.type==="card"?s(Dt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),kr=o("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[n("segment-type",[o("tabs-rail",[c("&.transition-disabled",[o("tabs-capsule",`
 transition: none;
 `)])])]),n("top",[o("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),n("left",[o("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),n("left, right",`
 flex-direction: row;
 `,[o("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),o("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),n("right",`
 flex-direction: row-reverse;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),o("tabs-bar",`
 left: 0;
 `)]),n("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),o("tabs-bar",`
 top: 0;
 `)]),o("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[o("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),o("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),c("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),n("flex",[o("tabs-nav",`
 width: 100%;
 position: relative;
 `,[o("tabs-wrapper",`
 width: 100%;
 `,[o("tabs-tab",`
 margin-right: 0;
 `)])])]),o("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[b("prefix, suffix",`
 display: flex;
 align-items: center;
 `),b("prefix","padding-right: 16px;"),b("suffix","padding-left: 16px;")]),n("top, bottom",[c(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[c("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),c("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),n("shadow-start",[c("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[c("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),n("left, right",[o("tabs-nav-scroll-content",`
 flex-direction: column;
 `),c(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[c("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),c("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),n("shadow-start",[c("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),n("shadow-end",[c("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),o("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[o("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),c("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),o("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),o("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),o("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),o("tabs-tab",`
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
 `,[n("disabled",{cursor:"not-allowed"}),b("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),b("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),o("tabs-bar",`
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
 `,[c("&.transition-disabled",`
 transition: none;
 `),n("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),o("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),o("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[c("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),c("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),c("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),c("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),c("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),o("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),n("line-type, bar-type",[o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[c("&:hover",{color:"var(--n-tab-text-color-hover)"}),n("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),n("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),o("tabs-nav",[n("line-type",[n("top",[b("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 bottom: -1px;
 `)]),n("left",[b("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 right: -1px;
 `)]),n("right",[b("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 left: -1px;
 `)]),n("bottom",[b("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 top: -1px;
 `)]),b("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-bar",`
 border-radius: 0;
 `)]),n("card-type",[b("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-tab",`
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
 `,[n("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[b("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ge("disabled",[c("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),n("closable","padding-right: 8px;"),n("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),n("disabled","color: var(--n-tab-text-color-disabled);")])]),n("left, right",`
 flex-direction: column; 
 `,[b("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),o("tabs-wrapper",`
 flex-direction: column;
 `),o("tabs-tab-wrapper",`
 flex-direction: column;
 `,[o("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),n("top",[n("card-type",[o("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-bottom: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),n("left",[n("card-type",[o("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-right: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),n("right",[n("card-type",[o("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-left: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),n("bottom",[n("card-type",[o("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[n("active",`
 border-top: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Pe=xr,Tr=Object.assign(Object.assign({},ie.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Lr=te({name:"Tabs",props:Tr,slots:Object,setup(e,{slots:a}){var i,u,d,R;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=We(e),C=ie("Tabs","-tabs",kr,Ut,e,v),x=L(null),S=L(null),k=L(null),g=L(null),y=L(null),z=L(null),T=L(!0),W=L(!0),E=Oe(e,["labelSize","size"]),P=Oe(e,["activeName","value"]),j=L((u=(i=P.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&u!==void 0?u:a.default?(R=(d=Re(a.default())[0])===null||d===void 0?void 0:d.props)===null||R===void 0?void 0:R.name:null),A=Ne(P,j),w={id:0},h=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});$e(A,()=>{w.id=0,O(),q()});function $(){var t;const{value:r}=A;return r===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${r}"]`)}function m(t){if(e.type==="card")return;const{value:r}=S;if(!r)return;const l=r.style.opacity==="0";if(t){const p=`${v.value}-tabs-bar--disabled`,{barWidth:B,placement:V}=e;if(t.dataset.disabled==="true"?r.classList.add(p):r.classList.remove(p),["top","bottom"].includes(V)){if(Y(["top","maxHeight","height"]),typeof B=="number"&&t.offsetWidth>=B){const H=Math.floor((t.offsetWidth-B)/2)+t.offsetLeft;r.style.left=`${H}px`,r.style.maxWidth=`${B}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width="8192px",l&&(r.style.transition="none"),r.offsetWidth,l&&(r.style.transition="",r.style.opacity="1")}else{if(Y(["left","maxWidth","width"]),typeof B=="number"&&t.offsetHeight>=B){const H=Math.floor((t.offsetHeight-B)/2)+t.offsetTop;r.style.top=`${H}px`,r.style.maxHeight=`${B}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height="8192px",l&&(r.style.transition="none"),r.offsetHeight,l&&(r.style.transition="",r.style.opacity="1")}}}function F(){if(e.type==="card")return;const{value:t}=S;t&&(t.style.opacity="0")}function Y(t){const{value:r}=S;if(r)for(const l of t)r.style[l]=""}function O(){if(e.type==="card")return;const t=$();t?m(t):F()}function q(){var t;const r=(t=y.value)===null||t===void 0?void 0:t.$el;if(!r)return;const l=$();if(!l)return;const{scrollLeft:p,offsetWidth:B}=r,{offsetLeft:V,offsetWidth:H}=l;p>V?r.scrollTo({top:0,left:V,behavior:"smooth"}):V+H>p+B&&r.scrollTo({top:0,left:V+H-B,behavior:"smooth"})}const M=L(null);let le=0,D=null;function me(t){const r=M.value;if(r){le=t.getBoundingClientRect().height;const l=`${le}px`,p=()=>{r.style.height=l,r.style.maxHeight=l};D?(p(),D(),D=null):D=p}}function xe(t){const r=M.value;if(r){const l=t.getBoundingClientRect().height,p=()=>{document.body.offsetHeight,r.style.maxHeight=`${l}px`,r.style.height=`${Math.max(le,l)}px`};D?(D(),D=null,p()):D=p}}function N(){const t=M.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:r}=e;if(typeof r=="string")t.style.cssText=r;else if(r){const{maxHeight:l,height:p}=r;l!==void 0&&(t.style.maxHeight=l),p!==void 0&&(t.style.height=p)}}}const be={value:[]},fe=L("next");function U(t){const r=A.value;let l="next";for(const p of be.value){if(p===r)break;if(p===t){l="prev";break}}fe.value=l,J(t)}function J(t){const{onActiveNameChange:r,onUpdateValue:l,"onUpdate:value":p}=e;r&&ee(r,t),l&&ee(l,t),p&&ee(p,t),j.value=t}function ye(t){const{onClose:r}=e;r&&ee(r,t)}function ue(){const{value:t}=S;if(!t)return;const r="transition-disabled";t.classList.add(r),O(),t.classList.remove(r)}const Z=L(null);function Q({transitionDisabled:t}){const r=x.value;if(!r)return;t&&r.classList.add("transition-disabled");const l=$();l&&Z.value&&(Z.value.style.width=`${l.offsetWidth}px`,Z.value.style.height=`${l.offsetHeight}px`,Z.value.style.transform=`translateX(${l.offsetLeft-X(getComputedStyle(r).paddingLeft)}px)`,t&&Z.value.offsetWidth),t&&r.classList.remove("transition-disabled")}$e([A],()=>{e.type==="segment"&&ke(()=>{Q({transitionDisabled:!1})})}),Xt(()=>{e.type==="segment"&&Q({transitionDisabled:!0})});let re=0;function se(t){var r;if(t.contentRect.width===0&&t.contentRect.height===0||re===t.contentRect.width)return;re=t.contentRect.width;const{type:l}=e;if((l==="line"||l==="bar")&&ue(),l!=="segment"){const{placement:p}=e;we((p==="top"||p==="bottom"?(r=y.value)===null||r===void 0?void 0:r.$el:z.value)||null)}}const Ke=Pe(se,64);$e([()=>e.justifyContent,()=>e.size],()=>{ke(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ue()})});const ae=L(!1);function Ye(t){var r;const{target:l,contentRect:{width:p,height:B}}=t,V=l.parentElement.parentElement.offsetWidth,H=l.parentElement.parentElement.offsetHeight,{placement:ne}=e;if(!ae.value)ne==="top"||ne==="bottom"?V<p&&(ae.value=!0):H<B&&(ae.value=!0);else{const{value:de}=g;if(!de)return;ne==="top"||ne==="bottom"?V-p>de.$el.offsetWidth&&(ae.value=!1):H-B>de.$el.offsetHeight&&(ae.value=!1)}we(((r=y.value)===null||r===void 0?void 0:r.$el)||null)}const Ge=Pe(Ye,64);function qe(){const{onAdd:t}=e;t&&t(),ke(()=>{const r=$(),{value:l}=y;!r||!l||l.scrollTo({left:r.offsetLeft,top:0,behavior:"smooth"})})}function we(t){if(!t)return;const{placement:r}=e;if(r==="top"||r==="bottom"){const{scrollLeft:l,scrollWidth:p,offsetWidth:B}=t;T.value=l<=0,W.value=l+B>=p}else{const{scrollTop:l,scrollHeight:p,offsetHeight:B}=t;T.value=l<=0,W.value=l+B>=p}}const Ze=Pe(t=>{we(t.target)},64);Qt(Ae,{triggerRef:I(e,"trigger"),tabStyleRef:I(e,"tabStyle"),tabClassRef:I(e,"tabClass"),addTabStyleRef:I(e,"addTabStyle"),addTabClassRef:I(e,"addTabClass"),paneClassRef:I(e,"paneClass"),paneStyleRef:I(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:I(e,"type"),closableRef:I(e,"closable"),valueRef:A,tabChangeIdRef:w,onBeforeLeaveRef:I(e,"onBeforeLeave"),activateTab:U,handleClose:ye,handleAdd:qe}),Kt(()=>{O(),q()}),Yt(()=>{const{value:t}=k;if(!t)return;const{value:r}=v,l=`${r}-tabs-nav-scroll-wrapper--shadow-start`,p=`${r}-tabs-nav-scroll-wrapper--shadow-end`;T.value?t.classList.remove(l):t.classList.add(l),W.value?t.classList.remove(p):t.classList.add(p)});const Je={syncBarPosition:()=>{O()}},Qe=()=>{Q({transitionDisabled:!0})},Le=K(()=>{const{value:t}=E,{type:r}=e,l={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[r],p=`${t}${l}`,{self:{barColor:B,closeIconColor:V,closeIconColorHover:H,closeIconColorPressed:ne,tabColor:de,tabBorderColor:et,paneTextColor:tt,tabFontWeight:rt,tabBorderRadius:at,tabFontWeightActive:ot,colorSegment:nt,fontWeightStrong:it,tabColorSegment:lt,closeSize:st,closeIconSize:dt,closeColorHover:ct,closeColorPressed:bt,closeBorderRadius:ft,[_("panePadding",t)]:he,[_("tabPadding",p)]:ut,[_("tabPaddingVertical",p)]:ht,[_("tabGap",p)]:pt,[_("tabGap",`${p}Vertical`)]:vt,[_("tabTextColor",r)]:gt,[_("tabTextColorActive",r)]:mt,[_("tabTextColorHover",r)]:xt,[_("tabTextColorDisabled",r)]:yt,[_("tabFontSize",t)]:wt},common:{cubicBezierEaseInOut:Ct}}=C.value;return{"--n-bezier":Ct,"--n-color-segment":nt,"--n-bar-color":B,"--n-tab-font-size":wt,"--n-tab-text-color":gt,"--n-tab-text-color-active":mt,"--n-tab-text-color-disabled":yt,"--n-tab-text-color-hover":xt,"--n-pane-text-color":tt,"--n-tab-border-color":et,"--n-tab-border-radius":at,"--n-close-size":st,"--n-close-icon-size":dt,"--n-close-color-hover":ct,"--n-close-color-pressed":bt,"--n-close-border-radius":ft,"--n-close-icon-color":V,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":ne,"--n-tab-color":de,"--n-tab-font-weight":rt,"--n-tab-font-weight-active":ot,"--n-tab-padding":ut,"--n-tab-padding-vertical":ht,"--n-tab-gap":pt,"--n-tab-gap-vertical":vt,"--n-pane-padding-left":pe(he,"left"),"--n-pane-padding-right":pe(he,"right"),"--n-pane-padding-top":pe(he,"top"),"--n-pane-padding-bottom":pe(he,"bottom"),"--n-font-weight-strong":it,"--n-tab-color-segment":lt}}),oe=f?Ee("tabs",K(()=>`${E.value[0]}${e.type[0]}`),Le,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:Z,tabsPaneWrapperRef:M,tabsElRef:x,barElRef:S,addTabInstRef:g,xScrollInstRef:y,scrollWrapperElRef:k,addTabFixed:ae,tabWrapperStyle:h,handleNavResize:Ke,mergedSize:E,handleScroll:Ze,handleTabsResize:Ge,cssVars:f?void 0:Le,themeClass:oe==null?void 0:oe.themeClass,animationDirection:fe,renderNameListRef:be,yScrollElRef:z,handleSegmentResize:Qe,onAnimationBeforeLeave:me,onAnimationEnter:xe,onAnimationAfterEnter:N,onRender:oe==null?void 0:oe.onRender},Je)},render(){const{mergedClsPrefix:e,type:a,placement:i,addTabFixed:u,addable:d,mergedSize:R,renderNameListRef:v,onRender:f,paneWrapperClass:C,paneWrapperStyle:x,$slots:{default:S,prefix:k,suffix:g}}=this;f==null||f();const y=S?Re(S()).filter(w=>w.type.__TAB_PANE__===!0):[],z=S?Re(S()).filter(w=>w.type.__TAB__===!0):[],T=!z.length,W=a==="card",E=a==="segment",P=!W&&!E&&this.justifyContent;v.value=[];const j=()=>{const w=s("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},P?null:s("div",{class:`${e}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),T?y.map((h,$)=>(v.value.push(h.props.name),Be(s(_e,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!P||P==="center"||P==="start"||P==="end")}),h.children?{default:h.children.tab}:void 0)))):z.map((h,$)=>(v.value.push(h.props.name),Be($!==0&&!P?De(h):h))),!u&&d&&W?Me(d,(T?y.length:z.length)!==0):null,P?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},W&&d?s(ze,{onResize:this.handleTabsResize},{default:()=>w}):w,W?s("div",{class:`${e}-tabs-pad`}):null,W?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},A=E?"top":i;return s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${R}-size`,P&&`${e}-tabs--flex`,`${e}-tabs--${A}`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${A}`,`${e}-tabs-nav`]},G(k,w=>w&&s("div",{class:`${e}-tabs-nav__prefix`},w)),E?s(ze,{onResize:this.handleSegmentResize},{default:()=>s("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},s("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},s("div",{class:`${e}-tabs-wrapper`},s("div",{class:`${e}-tabs-tab`}))),T?y.map((w,h)=>(v.value.push(w.props.name),s(_e,Object.assign({},w.props,{internalCreatedByPane:!0,internalLeftPadded:h!==0}),w.children?{default:w.children.tab}:void 0))):z.map((w,h)=>(v.value.push(w.props.name),h===0?w:De(w))))}):s(ze,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(A)?s(nr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:j}):s("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},j()))}),u&&d&&W?Me(d,!0):null,G(g,w=>w&&s("div",{class:`${e}-tabs-nav__suffix`},w))),T&&(this.animated&&(A==="top"||A==="bottom")?s("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,C]},Ie(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ie(y,this.mergedValue,this.renderedNames)))}});function Ie(e,a,i,u,d,R,v){const f=[];return e.forEach(C=>{const{name:x,displayDirective:S,"display-directive":k}=C.props,g=z=>S===z||k===z,y=a===x;if(C.key!==void 0&&(C.key=x),y||g("show")||g("show:lazy")&&i.has(x)){i.has(x)||i.add(x);const z=!g("if");f.push(z?Gt(C,[[qt,y]]):C)}}),v?s(Zt,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:R},{default:()=>f}):f}function Me(e,a){return s(_e,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function De(e){const a=Jt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Be(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Pr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},jr=te({name:"SaveOutline",render:function(a,i){return er(),tr("svg",Pr,i[0]||(i[0]=[rr("path",{d:"M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63zM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}});export{Lr as N,jr as S,Ar as a,Wr as b,Er as c};
