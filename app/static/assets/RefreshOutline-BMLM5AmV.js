import{d as R,h as n,j as f,k as x,l as s,g as $,bF as H,aj as V,u as D,r as W,b as K,z as T,bK as q,B,C as Z,c as N,e as G,p as J,f as P,bG as Q,b5 as X,bL as Y,t as j,v as ee,bv as z,bM as re,D as te,y as ae,x as le,ak as oe,be as _,P as se,bN as ne,Z as ie,_ as de,$ as A}from"./index-D9ClbKiL.js";const ce=R({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),pe=f("collapse","width: 100%;",[f("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[x("disabled",[s("header","cursor: not-allowed;",[s("header-main",`
 color: var(--n-title-text-color-disabled);
 `),f("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),f("collapse-item","margin-left: 32px;"),$("&:first-child","margin-top: 0;"),$("&:first-child >",[s("header","padding-top: 0;")]),x("left-arrow-placement",[s("header",[f("collapse-item-arrow","margin-right: 4px;")])]),x("right-arrow-placement",[s("header",[f("collapse-item-arrow","margin-left: 4px;")])]),s("content-wrapper",[s("content-inner","padding-top: 16px;"),H({duration:"0.15s"})]),x("active",[s("header",[x("active",[f("collapse-item-arrow","transform: rotate(90deg);")])])]),$("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),V("disabled",[x("trigger-area-main",[s("header",[s("header-main","cursor: pointer;"),f("collapse-item-arrow","cursor: default;")])]),x("trigger-area-arrow",[s("header",[f("collapse-item-arrow","cursor: pointer;")])]),x("trigger-area-extra",[s("header",[s("header-extra","cursor: pointer;")])])]),s("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[s("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),s("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),f("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),me=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),F=G("n-collapse"),xe=R({name:"Collapse",props:me,slots:Object,setup(e,{slots:i}){const{mergedClsPrefixRef:l,inlineThemeDisabled:o,mergedRtlRef:d}=D(e),t=W(e.defaultExpandedNames),h=N(()=>e.expandedNames),v=K(h,t),w=T("Collapse","-collapse",pe,q,e,l);function c(p){const{"onUpdate:expandedNames":a,onUpdateExpandedNames:m,onExpandedNamesChange:y}=e;m&&P(m,p),a&&P(a,p),y&&P(y,p),t.value=p}function g(p){const{onItemHeaderClick:a}=e;a&&P(a,p)}function r(p,a,m){const{accordion:y}=e,{value:k}=v;if(y)p?(c([a]),g({name:a,expanded:!0,event:m})):(c([]),g({name:a,expanded:!1,event:m}));else if(!Array.isArray(k))c([a]),g({name:a,expanded:!0,event:m});else{const C=k.slice(),I=C.findIndex(S=>a===S);~I?(C.splice(I,1),c(C),g({name:a,expanded:!1,event:m})):(C.push(a),c(C),g({name:a,expanded:!0,event:m}))}}J(F,{props:e,mergedClsPrefixRef:l,expandedNamesRef:v,slots:i,toggleItem:r});const u=B("Collapse",d,l),E=N(()=>{const{common:{cubicBezierEaseInOut:p},self:{titleFontWeight:a,dividerColor:m,titlePadding:y,titleTextColor:k,titleTextColorDisabled:C,textColor:I,arrowColor:S,fontSize:M,titleFontSize:L,arrowColorDisabled:U,itemMargin:O}}=w.value;return{"--n-font-size":M,"--n-bezier":p,"--n-text-color":I,"--n-divider-color":m,"--n-title-padding":y,"--n-title-font-size":L,"--n-title-text-color":k,"--n-title-text-color-disabled":C,"--n-title-font-weight":a,"--n-arrow-color":S,"--n-arrow-color-disabled":U,"--n-item-margin":O}}),b=o?Z("collapse",void 0,E,e):void 0;return{rtlEnabled:u,mergedTheme:w,mergedClsPrefix:l,cssVars:o?void 0:E,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),fe=R({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Y(j(e,"show"))}},render(){return n(Q,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:l,clsPrefix:o}=this,d=i==="show"&&l,t=n("div",{class:`${o}-collapse-item__content-wrapper`},n("div",{class:`${o}-collapse-item__content-inner`},this.$slots));return d?X(t,[[ee,e]]):e?t:null}})}}),ue={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ve=R({name:"CollapseItem",props:ue,setup(e){const{mergedRtlRef:i}=D(e),l=te(),o=ae(()=>{var r;return(r=e.name)!==null&&r!==void 0?r:l}),d=le(F);d||oe("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:t,props:h,mergedClsPrefixRef:v,slots:w}=d,c=N(()=>{const{value:r}=t;if(Array.isArray(r)){const{value:u}=o;return!~r.findIndex(E=>E===u)}else if(r){const{value:u}=o;return u!==r}return!0});return{rtlEnabled:B("Collapse",i,v),collapseSlots:w,randomName:l,mergedClsPrefix:v,collapsed:c,triggerAreas:j(h,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:r}=e;return r||h.displayDirective}),arrowPlacement:N(()=>h.arrowPlacement),handleClick(r){let u="main";_(r,"arrow")&&(u="arrow"),_(r,"extra")&&(u="extra"),h.triggerAreas.includes(u)&&d&&!e.disabled&&d.toggleItem(c.value,o.value,r)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:l,collapsed:o,mergedDisplayDirective:d,mergedClsPrefix:t,disabled:h,triggerAreas:v}=this,w=z(i.header,{collapsed:o},()=>[this.title]),c=i["header-extra"]||e["header-extra"],g=i.arrow||e.arrow;return n("div",{class:[`${t}-collapse-item`,`${t}-collapse-item--${l}-arrow-placement`,h&&`${t}-collapse-item--disabled`,!o&&`${t}-collapse-item--active`,v.map(r=>`${t}-collapse-item--trigger-area-${r}`)]},n("div",{class:[`${t}-collapse-item__header`,!o&&`${t}-collapse-item__header--active`]},n("div",{class:`${t}-collapse-item__header-main`,onClick:this.handleClick},l==="right"&&w,n("div",{class:`${t}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},z(g,{collapsed:o},()=>[n(se,{clsPrefix:t},{default:()=>this.rtlEnabled?n(ce,null):n(ne,null)})])),l==="left"&&w),re(c,{collapsed:o},r=>n("div",{class:`${t}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},r))),n(fe,{clsPrefix:t,displayDirective:d,show:!o},i))}}),he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},we=R({name:"RefreshOutline",render:function(i,l){return ie(),de("svg",he,l[0]||(l[0]=[A("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),A("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1)]))}});export{xe as N,we as R,ve as a};
