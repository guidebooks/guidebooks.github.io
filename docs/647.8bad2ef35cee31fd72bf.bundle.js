"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[647],{50647:(e,r,t)=>{t.r(r),t.d(r,{setGraphicalShellIsOpen:()=>S,print:()=>M});var o=t(11227),n=t.n(o),a=t(42138),s=t.n(a),i=t(61284),l=t(67041),c=t(45061),d=t(3242),g=t(17803),p=t(23022),u=t(186);const h=n()("main/headless-pretty-print");h("loading");const m=console.log,y=console.error,f=u.argv.find((e=>"--color=always"===e)),b=u.argv.find((e=>"--no-color"===e||"--no-colors"===e)),v=u.argv.find((e=>"--raw-output"===e)),w="win32"!==u.platform&&u.stdout.isTTY;h("stdoutIsFIFO",w,b||w&&!f);const T={"var(--color-brand-01)":s().blue,"var(--color-brand-02)":s().blue,"var(--color-support-02)":s().blue,"var(--color-black)":s().black,"var(--color-red)":s().red,"var(--color-green)":s().green,"var(--color-yellow)":s().yellow,"var(--color-blue)":s().blue,"var(--color-magenta)":s().magenta,"var(--color-cyan)":s().cyan,"var(--color-white)":s().white,"var(--color-gray)":s().gray,"var(--color-light-red)":s().red,"var(--color-light-green)":s().green,"var(--color-light-yellow)":s().yellow};let k=!1,x=!1;const S=e=>(x=e,!k&&(k=!0,!0));class I{}let C=!0;const E=(e,r=m,t=u.stdout,o,{columnWidths:n,extraColor:a}=new I)=>{h("prettyDom");const i="h1"===e.nodeType||"h2"===e.nodeType||"h3"===e.nodeType||"h4"===e.nodeType,l=e.className.indexOf("bx--breadcrumb-item--slash")>=0||e.className.indexOf("left-pad")>=0||e.style.margin||e.style.padding;l&&t.write(" ");const c=i||e.hasStyle("fontWeight","bold")?s().bold:e.hasStyle("fontWeight",500)?s().green:e.hasStyle("fontSize","0.875em")?s().gray:a||s().reset,d=e.hasStyle("color")&&T[e.style.color]||o;if(i&&(C?C=!1:r()),e.innerText){const r=e.innerText;t.write(c(d(r)))}if(l&&t.write(" "),e.innerText&&("div"===e.nodeType||i)&&r(),e.children.forEach((e=>E(e,r,t,o,{extraColor:c}))),e.rows){const n=[];e.rows.forEach((e=>{e.cells&&e.cells.forEach(((e,r)=>{const t=e.recursiveInnerTextLength();n[r]?n[r]=Math.max(n[r],t):n[r]=t}))})),e.rows.forEach((e=>{E(e,r,t,o,{columnWidths:n}),r()}))}e.cells&&e.cells.forEach(((a,s)=>{if(E(a,r,t,o),n&&s<e.cells.length-1){const e=n[s]-a.recursiveInnerTextLength();for(let r=0;r<e;r++)t.write(" ");t.write("  ")}})),i&&!e.innerText&&r()},D=(e,r)=>s().dim(""+(r?r+"/":""))+s().blue(e),F=e=>{const r=new Date(e),t=new Date;return r.getUTCFullYear()===t.getUTCFullYear()&&r.getUTCMonth()===t.getUTCMonth()&&r.getUTCDate()===t.getUTCDate()?r.toLocaleTimeString():r.toLocaleString()},N=e=>s().dim(e?"public":"private"),O=({name:e,packageName:r,publish:t,annotations:o,version:n})=>{return{name:D(e,r),"published?":N(t),kind:(a=o,s().green(a.find((({key:e})=>"exec"===e)).value)),version:s().dim(n)};var a},_=({name:e,publish:r,binding:t})=>({name:D(e),"published?":N(r),binding:t}),L=({sessionId:e,name:r,success:t,status:o,start:n})=>({sessionId:e,app:D(r),start:s().dim(F(n)),status:"pending"===o?s().yellow(o):t?s().green(o):s().red(o)}),U={compositions:({name:e,packageName:r,prettyKind:t})=>({name:D(e,r),type:t}),session:L,activations:({activationId:e,name:r})=>({activationId:e,name:D(r)}),actions:O,triggers:({name:e,publish:r})=>({name:D(e),"published?":N(r)}),packages:_,plugins:({name:e,attributes:r})=>({name:D(e),version:s().dim(r.find((({key:e})=>"version"===e)).value)}),_default:({key:e,name:r,attributes:t})=>{const o={};return o[e||"name"]=D(r),t.forEach((e=>{e.placeholderValue||(o[e.key]=e.value)})),o},sequence:O,composer:O,binding:_,live:L},M=(e,r=m,o=u.stdout,n=s().reset,a="ok")=>{if("error"===a&&(n=s().red),e&&(!k||x))try{if(!0===e)h("printing plain true"),r(s().green(a));else if("string"==typeof e||"boolean"==typeof e||"number"==typeof e)o.write(e);else if(i.Z.isFakeDom(e))h("printing fake dom"),e.className.indexOf("usage-error-wrapper")>=0&&(o=u.stdout,r=m),E(e,r,o,n),r();else{if((0,p.t)(e))return h("printing promise"),e.then((e=>M(e,r,o,n,a)));if((0,l.wb)(e)){if(0===e.body.length)return;h("printing table");const o=e.header&&(e.header.prettyType||e.header.type)||e.body.length>0&&(e.body[0].prettyType||e.body[0].type),n=o&&U[o]||U._default;r(t(99295)(e.body.map(n),{headingTransform:e=>s().dim(e)}))}else{if((0,c.Bf)(e))return e.forEach((e=>{M(e),o.write("\n")})),r(s().green(a));if((0,d.a)(e)||(0,g.bI)(e))throw new Error("cannot format this response in headless mode");if(Array.isArray(e)){if(h("printing array"),e.length>0)try{if("string"==typeof e[0])return e.forEach((e=>{const t=e.split(/(stdout|stderr)/);if(t&&3===t.length&&!v){const e="stdout"===t[1]?s().reset:s().red;r(s().dim(new Date(t[0].trim()).toLocaleString())+e(t[2].replace(/^:/,"")))}else r(e)})),r(s().green(a))}catch(e){y(e)}}else(0,p.F)(e)?console.error("cannot format HTML message"):(0,c.v_)(e)?i.Z.isFakeDom(e.message)?(E(e.message,r,o,n),r()):r(e.message):(0,c.If)(e)?r(e.response):"object"==typeof e?((e,r=m)=>{r(JSON.stringify(e,void 0,2))})(e,r):r(n(e))}}}catch(t){h("got an error",t),r(s().red("object"==typeof e?JSON.stringify(e):e.toString()))}}}}]);