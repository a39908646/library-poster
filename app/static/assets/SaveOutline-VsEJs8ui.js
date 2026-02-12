import{aj as de,bd as ce,aS as ue,i as P,k as t,l as U,g as T,j as d,a9 as L,d as E,be as A,h as i,o as w,N as he,bf as be,u as fe,w as I,a as ve,r as D,b as ge,z as we,c as z,f as K,B as m,aM as W,b7 as c,t as me,J as pe,K as xe,L as ye}from"./index-DXdFuH5K.js";function ke(e){const{primaryColor:s,opacityDisabled:n,borderRadius:r,textColor3:l}=e;return Object.assign(Object.assign({},ce),{iconColor:l,textColor:"white",loadingColor:s,opacityDisabled:n,railColor:"rgba(0, 0, 0, .14)",railColorActive:s,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${ue(s,{alpha:.2})}`})}const Se={common:de,self:ke},Ce=P("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),P("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[U({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),L("disabled",[L("icon",[d("rubber-band",[d("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[T("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[T("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `,[t("button-icon",`
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
 `,[U()]),t("button",`
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
 `)]),d("active",[t("rail","background-color: var(--n-rail-color-active);")]),d("loading",[t("rail",`
 cursor: wait;
 `)]),d("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Be=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Ve=E({name:"Switch",props:Be,slots:Object,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=fe(e),r=I("Switch","-switch",Ce,Se,e,s),l=ve(e),{mergedSizeRef:y,mergedDisabledRef:v}=l,k=D(e.defaultValue),R=me(e,"value"),g=ge(R,k),S=z(()=>g.value===e.checkedValue),p=D(!1),a=D(!1),u=z(()=>{const{railStyle:o}=e;if(o)return o({focused:a.value,checked:S.value})});function h(o){const{"onUpdate:value":$,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:j}=l;$&&K($,o),_&&K(_,o),V&&K(V,o),k.value=o,F(),j()}function X(){const{nTriggerFormFocus:o}=l;o()}function Y(){const{nTriggerFormBlur:o}=l;o()}function J(){e.loading||v.value||(g.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue))}function q(){a.value=!0,X()}function G(){a.value=!1,Y(),p.value=!1}function Q(o){e.loading||v.value||o.key===" "&&(g.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue),p.value=!1)}function Z(o){e.loading||v.value||o.key===" "&&(o.preventDefault(),p.value=!0)}const H=z(()=>{const{value:o}=y,{self:{opacityDisabled:$,railColor:V,railColorActive:_,buttonBoxShadow:F,buttonColor:j,boxShadowFocus:ee,loadingColor:te,textColor:oe,iconColor:ae,[m("buttonHeight",o)]:b,[m("buttonWidth",o)]:ie,[m("buttonWidthPressed",o)]:ne,[m("railHeight",o)]:f,[m("railWidth",o)]:C,[m("railBorderRadius",o)]:re,[m("buttonBorderRadius",o)]:le},common:{cubicBezierEaseInOut:se}}=r.value;let N,M,O;return B?(N=`calc((${f} - ${b}) / 2)`,M=`max(${f}, ${b})`,O=`max(${C}, calc(${C} + ${b} - ${f}))`):(N=W((c(f)-c(b))/2),M=W(Math.max(c(f),c(b))),O=c(f)>c(b)?C:W(c(C)+c(b)-c(f))),{"--n-bezier":se,"--n-button-border-radius":le,"--n-button-box-shadow":F,"--n-button-color":j,"--n-button-width":ie,"--n-button-width-pressed":ne,"--n-button-height":b,"--n-height":M,"--n-offset":N,"--n-opacity-disabled":$,"--n-rail-border-radius":re,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":f,"--n-rail-width":C,"--n-width":O,"--n-box-shadow-focus":ee,"--n-loading-color":te,"--n-text-color":oe,"--n-icon-color":ae}}),x=n?we("switch",z(()=>y.value[0]),H,e):void 0;return{handleClick:J,handleBlur:G,handleFocus:q,handleKeyup:Q,handleKeydown:Z,mergedRailStyle:u,pressed:p,mergedClsPrefix:s,mergedValue:g,checked:S,mergedDisabled:v,cssVars:n?void 0:H,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:n,mergedRailStyle:r,onRender:l,$slots:y}=this;l==null||l();const{checked:v,unchecked:k,icon:R,"checked-icon":g,"unchecked-icon":S}=y,p=!(A(R)&&A(g)&&A(S));return i("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,n&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},w(v,a=>w(k,u=>a||u?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),a),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),u)):null)),i("div",{class:`${e}-switch__button`},w(R,a=>w(g,u=>w(S,h=>i(he,null,{default:()=>this.loading?i(be,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(u||a)?i("div",{class:`${e}-switch__button-icon`,key:u?"checked-icon":"icon"},u||a):!this.checked&&(h||a)?i("div",{class:`${e}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||a):null})))),w(v,a=>a&&i("div",{key:"checked",class:`${e}-switch__checked`},a)),w(k,a=>a&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}}),Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_e=E({name:"SaveOutline",render:function(s,n){return pe(),xe("svg",Re,n[0]||(n[0]=[ye("path",{d:"M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63zM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}});export{Ve as N,_e as S};
