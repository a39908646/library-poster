import{g as h,j as t,aj as K,k as g,l as V,n as G,q as W,d as _,K as q,h as l,am as J,L as Q,u as L,z as O,an as U,C as N,c as j,ao as F,E as B,ap as X}from"./index-D9ClbKiL.js";function E(e,d="default",a=[]){const{children:s}=e;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const i=s[d];if(typeof i=="function")return i()}return a}const Y=h([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),K("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[h("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),g("left-label-placement",[t("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),g("left-label-align",[h("th",{textAlign:"left"})]),g("center-label-align",[h("th",{textAlign:"center"})]),g("right-label-align",[h("th",{textAlign:"right"})]),g("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[h("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[V("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),V("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),G(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),W(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),H="DESCRIPTION_ITEM_FLAG";function Z(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[H]:!1}const ee=Object.assign(Object.assign({},O.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),le=_({name:"Descriptions",props:ee,slots:Object,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:a}=L(e),s=O("Descriptions","-descriptions",Y,U,e,d),i=j(()=>{const{size:c,bordered:b}=e,{common:{cubicBezierEaseInOut:m},self:{titleTextColor:v,thColor:w,thColorModal:n,thColorPopover:f,thTextColor:u,thFontWeight:x,tdTextColor:S,tdColor:T,tdColorModal:k,tdColorPopover:r,borderColor:z,borderColorModal:I,borderColorPopover:p,borderRadius:y,lineHeight:$,[B("fontSize",c)]:P,[B(b?"thPaddingBordered":"thPadding",c)]:C,[B(b?"tdPaddingBordered":"tdPadding",c)]:R}}=s.value;return{"--n-title-text-color":v,"--n-th-padding":C,"--n-td-padding":R,"--n-font-size":P,"--n-bezier":m,"--n-th-font-weight":x,"--n-line-height":$,"--n-th-text-color":u,"--n-td-text-color":S,"--n-th-color":w,"--n-th-color-modal":n,"--n-th-color-popover":f,"--n-td-color":T,"--n-td-color-modal":k,"--n-td-color-popover":r,"--n-border-radius":y,"--n-border-color":z,"--n-border-color-modal":I,"--n-border-color-popover":p}}),o=a?N("descriptions",j(()=>{let c="";const{size:b,bordered:m}=e;return m&&(c+="a"),c+=b[0],c}),i,e):void 0;return{mergedClsPrefix:d,cssVars:a?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender,compitableColumn:F(e,["columns","column"]),inlineThemeDisabled:a}},render(){const e=this.$slots.default,d=e?q(e()):[];d.length;const{contentClass:a,labelClass:s,compitableColumn:i,labelPlacement:o,labelAlign:c,size:b,bordered:m,title:v,cssVars:w,mergedClsPrefix:n,separator:f,onRender:u}=this;u==null||u();const x=d.filter(r=>Z(r)),S={span:0,row:[],secondRow:[],rows:[]},k=x.reduce((r,z,I)=>{const p=z.props||{},y=x.length-1===I,$=["label"in p?p.label:E(z,"label")],P=[E(z)],C=p.span||1,R=r.span;r.span+=C;const A=p.labelStyle||p["label-style"]||this.labelStyle,D=p.contentStyle||p["content-style"]||this.contentStyle;if(o==="left")m?r.row.push(l("th",{class:[`${n}-descriptions-table-header`,s],colspan:1,style:A},$),l("td",{class:[`${n}-descriptions-table-content`,a],colspan:y?(i-R)*2+1:C*2-1,style:D},P)):r.row.push(l("td",{class:`${n}-descriptions-table-content`,colspan:y?(i-R)*2:C*2},l("span",{class:[`${n}-descriptions-table-content__label`,s],style:A},[...$,f&&l("span",{class:`${n}-descriptions-separator`},f)]),l("span",{class:[`${n}-descriptions-table-content__content`,a],style:D},P)));else{const M=y?(i-R)*2:C*2;r.row.push(l("th",{class:[`${n}-descriptions-table-header`,s],colspan:M,style:A},$)),r.secondRow.push(l("td",{class:[`${n}-descriptions-table-content`,a],colspan:M,style:D},P))}return(r.span>=i||y)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),o!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},S).rows.map(r=>l("tr",{class:`${n}-descriptions-table-row`},r));return l("div",{style:w,class:[`${n}-descriptions`,this.themeClass,`${n}-descriptions--${o}-label-placement`,`${n}-descriptions--${c}-label-align`,`${n}-descriptions--${b}-size`,m&&`${n}-descriptions--bordered`]},v||this.$slots.header?l("div",{class:`${n}-descriptions-header`},v||Q(this,"header")):null,l("div",{class:`${n}-descriptions-table-wrapper`},l("table",{class:`${n}-descriptions-table`},l("tbody",null,o==="top"&&l("tr",{class:`${n}-descriptions-table-row`,style:{visibility:"collapse"}},J(i*2,l("td",null))),k))))}}),te={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},se=_({name:"DescriptionsItem",[H]:!0,props:te,slots:Object,render(){return null}}),oe=t("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[g("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("italic",{fontStyle:"italic"}),g("underline",{textDecoration:"underline"}),g("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),re=Object.assign(Object.assign({},O.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ie=_({name:"Text",props:re,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:a}=L(e),s=O("Typography","-text",oe,X,e,d),i=j(()=>{const{depth:c,type:b}=e,m=b==="default"?c===void 0?"textColor":`textColor${c}Depth`:B("textColor",b),{common:{fontWeightStrong:v,fontFamilyMono:w,cubicBezierEaseInOut:n},self:{codeTextColor:f,codeBorderRadius:u,codeColor:x,codeBorder:S,[m]:T}}=s.value;return{"--n-bezier":n,"--n-text-color":T,"--n-font-weight-strong":v,"--n-font-famliy-mono":w,"--n-code-border-radius":u,"--n-code-text-color":f,"--n-code-color":x,"--n-code-border":S}}),o=a?N("text",j(()=>`${e.type[0]}${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:d,compitableTag:F(e,["as","tag"]),cssVars:a?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,d,a;const{mergedClsPrefix:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=[`${s}-text`,this.themeClass,{[`${s}-text--code`]:this.code,[`${s}-text--delete`]:this.delete,[`${s}-text--strong`]:this.strong,[`${s}-text--italic`]:this.italic,[`${s}-text--underline`]:this.underline}],o=(a=(d=this.$slots).default)===null||a===void 0?void 0:a.call(d);return this.code?l("code",{class:i,style:this.cssVars},this.delete?l("del",null,o):o):this.delete?l("del",{class:i,style:this.cssVars},o):l(this.compitableTag||"span",{class:i,style:this.cssVars},o)}});export{le as N,se as a,ie as b};
