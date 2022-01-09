"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[745],{79291:(t,o,e)=>{e.r(o),e.d(o,{default:()=>l});var r=e(67294),n=e(80236),a=e(47173);function l(t){return r.createElement(n.u,{id:t.id,isOpen:t.isOpen,title:t.title,titleIconVariant:t.titleIconVariant,variant:"small",onClose:t.onClose,actions:[r.createElement(a.zx,{key:"confirm",variant:"primary",className:"kui--modal-btn--primary",onClick:t.onSubmit},t.primaryButtonText),r.createElement(a.zx,{key:"cancel",variant:"link",className:"kui--modal-btn--secondary",onClick:t.onClose},t.secondaryButtonText)]},t.children)}},35224:(t,o,e)=>{e.d(o,{u:()=>d,D:()=>s});var r=e(70655),n=e(67294),a=e(16356),l=e(38296);const i=t=>{var{className:o,children:e,isLeftAligned:i}=t,p=(0,r.__rest)(t,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,l.i)(a.Z.tooltipContent,i&&a.Z.modifiers.textAlignLeft,o)},p),e)};i.displayName="TooltipContent";const p=t=>{var{className:o}=t,e=(0,r.__rest)(t,["className"]);return n.createElement("div",Object.assign({className:(0,l.i)(a.Z.tooltipArrow,o)},e))};p.displayName="TooltipArrow";var c=e(64190);const f={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var s,m=e(93020);!function(t){t.auto="auto",t.top="top",t.bottom="bottom",t.left="left",t.right="right"}(s||(s={}));let _=1;const d=t=>{var{content:o,position:e="top",trigger:s="mouseenter focus",isVisible:d=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:u="",entryDelay:b=300,exitDelay:v=0,appendTo:w=(()=>document.body),zIndex:y=9999,maxWidth:T=f.value,distance:x=15,aria:C="describedby",flipBehavior:k=["top","right","bottom","left","top","right","bottom"],id:E="pf-tooltip-"+_++,children:Z,animationDuration:P=300,reference:z,boundary:A,isAppLauncher:B,tippyProps:L}=t,R=(0,r.__rest)(t,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","boundary","isAppLauncher","tippyProps"]);const N=s.includes("mouseenter"),S=s.includes("focus"),I=s.includes("click"),M="manual"===s,[Y,O]=n.useState(!1),[X,W]=n.useState(0),D=n.useRef(null),F=n.useRef(null),V=n.useRef(null),j=t=>{t.forEach((t=>{t.current&&clearTimeout(t.current)}))};n.useEffect((()=>()=>{j([D,V,F])}),[]);n.useEffect((()=>{d?H():K()}),[d]);const H=()=>{j([D,V]),F.current=setTimeout((()=>{O(!0),W(1)}),b)},K=()=>{j([F]),V.current=setTimeout((()=>{W(0),D.current=setTimeout((()=>O(!1)),P)}),v)},U={top:a.Z.modifiers.top,bottom:a.Z.modifiers.bottom,left:a.Z.modifiers.left,right:a.Z.modifiers.right},$=T!==f.value,q=n.createElement("div",Object.assign({className:(0,l.i)(a.Z.tooltip,u),role:"tooltip",id:E,style:{maxWidth:$?T:null,opacity:X,transition:(0,m.K)(P)}},R),n.createElement(p,null),n.createElement(i,{isLeftAligned:g},o));return n.createElement(m.r,{trigger:"none"!==C&&Y?"describedby"===C&&Z&&Z.props&&!Z.props["aria-describedby"]?n.cloneElement(Z,{"aria-describedby":E}):"labelledby"===C&&Z.props&&!Z.props["aria-labelledby"]?n.cloneElement(Z,{"aria-labelledby":E}):Z:Z,reference:z,popper:q,popperMatchesTriggerWidth:!1,appendTo:w,isVisible:Y,positionModifiers:U,distance:x,placement:e,onMouseEnter:N&&H,onMouseLeave:N&&K,onFocus:S&&H,onBlur:S&&K,onDocumentClick:I&&((t,o)=>{Y?K():t.target===o&&H()}),onDocumentKeyDown:M?null:t=>{M||t.keyCode===c.nx.ESCAPE_KEY&&Y&&K()},onTriggerEnter:M?null:t=>{t.keyCode===c.nx.ENTER&&(Y?K():H())},enableFlip:h,zIndex:y,flipBehavior:k})};d.displayName="Tooltip"},68778:(t,o,e)=>{e.d(o,{rE:()=>r,ZP:()=>n});const r=(0,e(40400).IU)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0}),n=r},43047:(t,o,e)=>{e.d(o,{$O:()=>r,ZP:()=>n});const r=(0,e(40400).IU)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),n=r},69957:(t,o,e)=>{e.d(o,{LP:()=>r,ZP:()=>n});const r=(0,e(40400).IU)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),n=r},16356:(t,o,e)=>{e(82126),o.Z={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},tooltip:"pf-c-tooltip",tooltipArrow:"pf-c-tooltip__arrow",tooltipContent:"pf-c-tooltip__content"}},25687:(t,o,e)=>{e(47958),o.Z={bullseye:"pf-l-bullseye"}},1520:(t,o,e)=>{e.d(o,{Z:()=>i});var r=e(8081),n=e.n(r),a=e(23645),l=e.n(a)()(n());l.push([t.id,".pf-c-tooltip {\n  --pf-c-tooltip--MaxWidth: 18.75rem;\n  --pf-c-tooltip--BoxShadow: var(--pf-global--BoxShadow--md);\n  --pf-c-tooltip__content--PaddingTop: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingBottom: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--PaddingLeft: var(--pf-global--spacer--sm);\n  --pf-c-tooltip__content--Color: var(--pf-global--Color--light-100);\n  --pf-c-tooltip__content--BackgroundColor: var(--pf-global--BackgroundColor--dark-100);\n  --pf-c-tooltip__content--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-tooltip__arrow--Width: 0.5rem;\n  --pf-c-tooltip__arrow--Height: 0.5rem;\n  --pf-c-tooltip__arrow--m-top--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-top--TranslateY: 50%;\n  --pf-c-tooltip__arrow--m-top--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-right--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-right--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-right--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-bottom--TranslateX: -50%;\n  --pf-c-tooltip__arrow--m-bottom--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-bottom--Rotate: 45deg;\n  --pf-c-tooltip__arrow--m-left--TranslateX: 50%;\n  --pf-c-tooltip__arrow--m-left--TranslateY: -50%;\n  --pf-c-tooltip__arrow--m-left--Rotate: 45deg;\n  position: relative;\n  max-width: var(--pf-c-tooltip--MaxWidth);\n  box-shadow: var(--pf-c-tooltip--BoxShadow);\n}\n.pf-c-tooltip.pf-m-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-top--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-top--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-top--Rotate));\n}\n.pf-c-tooltip.pf-m-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  top: 0;\n  left: 50%;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-bottom--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-bottom--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-bottom--Rotate));\n}\n.pf-c-tooltip.pf-m-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  right: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-left--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-left--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-left--Rotate));\n}\n.pf-c-tooltip.pf-m-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: 50%;\n  left: 0;\n  transform: translateX(var(--pf-c-tooltip__arrow--m-right--TranslateX)) translateY(var(--pf-c-tooltip__arrow--m-right--TranslateY)) rotate(var(--pf-c-tooltip__arrow--m-right--Rotate));\n}\n.pf-c-tooltip.pf-m-left-top .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-top .pf-c-tooltip__arrow {\n  top: var(--pf-c-tooltip__arrow--Height);\n}\n.pf-c-tooltip.pf-m-left-bottom .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-right-bottom .pf-c-tooltip__arrow {\n  top: auto;\n  bottom: 0;\n}\n.pf-c-tooltip.pf-m-top-left .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-left .pf-c-tooltip__arrow {\n  left: var(--pf-c-tooltip__arrow--Width);\n}\n.pf-c-tooltip.pf-m-top-right .pf-c-tooltip__arrow, .pf-c-tooltip.pf-m-bottom-right .pf-c-tooltip__arrow {\n  right: 0;\n  left: auto;\n}\n\n.pf-c-tooltip__content {\n  position: relative;\n  padding: var(--pf-c-tooltip__content--PaddingTop) var(--pf-c-tooltip__content--PaddingRight) var(--pf-c-tooltip__content--PaddingBottom) var(--pf-c-tooltip__content--PaddingLeft);\n  font-size: var(--pf-c-tooltip__content--FontSize);\n  color: var(--pf-c-tooltip__content--Color);\n  text-align: center;\n  word-break: break-word;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}\n.pf-c-tooltip__content.pf-m-text-align-left {\n  text-align: left;\n}\n\n.pf-c-tooltip__arrow {\n  position: absolute;\n  width: var(--pf-c-tooltip__arrow--Width);\n  height: var(--pf-c-tooltip__arrow--Height);\n  pointer-events: none;\n  background-color: var(--pf-c-tooltip__content--BackgroundColor);\n}",""]);const i=l},78677:(t,o,e)=>{e.d(o,{Z:()=>i});var r=e(8081),n=e.n(r),a=e(23645),l=e.n(a)()(n());l.push([t.id,".pf-l-bullseye {\n  --pf-l-bullseye--Padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: var(--pf-l-bullseye--Padding);\n  margin: 0;\n}",""]);const i=l},82126:(t,o,e)=>{e.r(o),e.d(o,{default:()=>u});var r=e(93379),n=e.n(r),a=e(7795),l=e.n(a),i=e(90569),p=e.n(i),c=e(3565),f=e.n(c),s=e(19216),m=e.n(s),_=e(44589),d=e.n(_),g=e(1520),h={};h.styleTagTransform=d(),h.setAttributes=f(),h.insert=p().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m();n()(g.Z,h);const u=g.Z&&g.Z.locals?g.Z.locals:void 0},47958:(t,o,e)=>{e.r(o),e.d(o,{default:()=>u});var r=e(93379),n=e.n(r),a=e(7795),l=e.n(a),i=e(90569),p=e.n(i),c=e(3565),f=e.n(c),s=e(19216),m=e.n(s),_=e(44589),d=e.n(_),g=e(78677),h={};h.styleTagTransform=d(),h.setAttributes=f(),h.insert=p().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m();n()(g.Z,h);const u=g.Z&&g.Z.locals?g.Z.locals:void 0}}]);