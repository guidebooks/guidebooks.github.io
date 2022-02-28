"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[67940],{57629:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var o=n(67294),i=n(26470),M=n(27877),a=n(94523),r=n(91119),c=n(55080);const s=(0,r.i18n)("plugin-client-common","editor");function l(e,t){return{mode:"Clear",kind:"view",icon:o.createElement(c.default,{icon:"Clear"}),label:s("Clear"),command:()=>{e.setValue(""),t&&t()}}}var u=function(e,t,n,o){return new(n||(n=Promise))((function(i,M){function a(e){try{c(o.next(e))}catch(e){M(e)}}function r(e){try{c(o.throw(e))}catch(e){M(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const A=(0,r.i18n)("plugin-client-common","editor");var d=function(e,t,n,o){return new(n||(n=Promise))((function(i,M){function a(e){try{c(o.next(e))}catch(e){M(e)}}function r(e){try{c(o.throw(e))}catch(e){M(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const D=(0,r.i18n)("plugin-client-common","editor");var p=n(12079),w=n(36073),g=n(36483),j=function(e,t,n,o){return new(n||(n=Promise))((function(i,M){function a(e){try{c(o.next(e))}catch(e){M(e)}}function r(e){try{c(o.throw(e))}catch(e){M(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const I=(0,r.i18n)("plugin-client-common","editor");class T extends o.PureComponent{constructor(e){super(e),this.state={content:e.content,cleaners:[],editor:void 0,wrapper:void 0,catastrophicError:void 0}}static getDerivedStateFromError(e){return{catastrophicError:e}}componentDidCatch(e,t){console.error("catastrophic error in Editor",e,t)}static allClean(e){return{type:"info",text:I(e?"isUpToDateReadonly":"isUpToDate")}}static error(e,t,...n){return{type:"error",text:I(t,...n)}}static getDerivedStateFromProps(e,t){return!t.editor&&t.wrapper?T.initMonaco(e,t):t.content&&e.content.content===t.content.content&&e.content.contentType===t.content.contentType?t:{content:e.content,subscription:T.reinitMonaco(e,t,T.isReadOnly(e,t))}}componentWillUnmount(){this.destroyMonaco()}destroyMonaco(){this.state.cleaners.forEach((e=>e()))}static isClearable(e,t){return(0,a.zE)(e.response)&&!e.readOnly||!(0,a.zE)(e.response)&&t.spec&&!1!==t.spec.clearable}static onChange(e,t,n,i){let r;return s=>{if(2===s.versionId)return;r&&(i.deltaDecorations(r,[]),r=void 0);const p=T.isClearable(e,t),w=[];if((0,a.zE)(e.response)){const t=function(e,t,n,i){return{mode:"Save",kind:"view",label:A("saveLocalFile"),icon:o.createElement(c.default,{icon:"Save"}),command:()=>u(this,void 0,void 0,(function*(){try{yield t.rexec(`vfs fwrite ${t.encodeComponent(n.spec.fullpath)}`,{data:e.getValue()}),i(!0)}catch(e){i(!1)}}))}}(i,e.repl,e.response,(t=>{t?e.willUpdateToolbar(T.allClean(n),p?[l(i)]:void 0):e.willUpdateToolbar(T.error(e,"errorSaving"))}));w.push(t)}else if(t.spec&&t.spec.save){const{onSave:a}=t.spec.save;w.push({mode:"Save",label:t.spec.save.label||I("saveLocalFile"),kind:"drilldown",icon:o.createElement(c.default,{icon:"Save"}),inPlace:!0,command:()=>j(this,void 0,void 0,(function*(){try{const t=yield a(i.getValue());if(t&&t.noToolbarUpdate||e.willUpdateToolbar(t&&t.toolbarText||T.allClean(n),p?[l(i)]:void 0),t&&t.command)return t.command}catch(t){const n=t;n.revealLine&&(i.revealLineInCenter(n.revealLine),r=i.deltaDecorations(r||[],[{range:new M.Range(n.revealLine,1,n.revealLine,1),options:{isWholeLine:!0,className:"kui--editor-line-highlight",glyphMarginClassName:"kui--editor-line-glyph"}}]));const o={type:"warning",text:I("isModified"),alerts:[{type:"error",title:I("errorApplying"),body:n.message}]};e.willUpdateToolbar(o,w,void 0)}}))})}if((0,a.zE)(e.response)){const t=function(e,t,n,i){return{mode:"Revert",kind:"view",label:D("revert"),icon:o.createElement(c.default,{icon:"Revert"}),command:()=>d(this,void 0,void 0,(function*(){try{const e=(yield t.rexec(`vfs fstat ${t.encodeComponent(n.spec.fullpath)} --with-data --enoent-ok`)).content;i(!0,e.data)}catch(e){i(!1)}}))}}(0,e.repl,e.response,((t,o)=>{t?(i.setValue(o),e.willUpdateToolbar(T.allClean(n),p?[l(i)]:void 0)):e.willUpdateToolbar(T.error(e,"errorReverting"))}));w.push(t)}else if(t.spec&&t.spec.revert){const{onRevert:M}=t.spec.revert;w.push({mode:"Revert",label:t.spec.revert.label||I("revert"),kind:"view",icon:o.createElement(c.default,{icon:"Revert"}),command:()=>j(this,void 0,void 0,(function*(){try{const t=yield M();i.setValue(t),e.willUpdateToolbar(T.allClean(n),p?[l(i)]:void 0)}catch(t){console.error(t),e.willUpdateToolbar(T.error(e,"errorReverting"))}}))})}p&&w.push(l(i)),e.willUpdateToolbar({type:"warning",text:I("isModified")},w)}}static subscribeToChanges(e,t,n,o){if(e.willUpdateToolbar){const i=o&&e.response.toolbarText||!o&&T.allClean(o),M=e.response.toolbarText?[]:T.isClearable(e,t)?[l(n)]:void 0;return e.willUpdateToolbar(i,M),n.onDidChangeModelContent(T.onChange(e,t,o,n))}}static extractValue(e,t,n){return j(this,void 0,void 0,(function*(){try{return"string"==typeof e.content&&0!==e.content.length||!(0,a.zE)(t)?e.content:yield n.qexec(`vfs fslice ${(0,r.encodeComponent)(t.spec.fullpath)} 0 8192`)}catch(e){return console.error(e),e.message}}))}static reinitMonaco(e,t,n){return setTimeout((()=>j(this,void 0,void 0,(function*(){t.editor.setValue(yield T.extractValue(e.content,e.response,e.repl));const o=n&&e.response.toolbarText||!n&&T.allClean(n);e.willUpdateToolbar(o,T.isClearable(e,e.content)?[l(t.editor)]:void 0),t.subscription&&t.subscription.dispose()})))),T.subscribeToChanges(e,e.content,t.editor,T.isReadOnly(e,t))}static isReadOnly(e,t){return!(0,a.zE)(e.response)&&(!t.content.spec||!1!==t.content.spec.readOnly)&&(e.readOnly||!(0,a.zE)(e.response)||!1)}static initMonaco(e,t){const n=[];try{const o={value:"",showLineNumbers:!0,readOnly:T.isReadOnly(e,t),language:"text/plain"===t.content.contentType?(0,w.d)(t.content.contentType,(0,a.zE)(e.response)?(0,i.extname)(e.response.spec.filepath).slice(1):void 0):t.content.contentType||void 0},c={theme:e.light?"vs":"vs-dark"},s=Object.assign((0,g.Z)(o),o,c),l=M.editor.create(t.wrapper,s);setTimeout((()=>j(this,void 0,void 0,(function*(){l.setValue(yield T.extractValue(t.content,e.response,e.repl)),l.getAction("editor.foldLevel2").run()}))));const u=()=>{l.updateOptions({fontSize:(0,p.Z)()})};r.Events.eventChannelUnsafe.on("/zoom",u),n.push((()=>r.Events.eventChannelUnsafe.off("/zoom",u)));const A=e.sizeToFit?(e,n=Math.min(.4*window.innerHeight,Math.max(250,l.getContentHeight())))=>{t.wrapper.style.flexBasis=n+"px"}:()=>!0;A();const d=new ResizeObserver((e=>{A(e[0].contentRect.width,e[0].contentRect.height),l.layout()}));d.observe(t.wrapper),n.push((()=>d.disconnect()));const D=()=>{A(),l.layout()};r.Events.eventBus.onTabLayoutChange(e.tabUUID,D),n.push((()=>r.Events.eventBus.offTabLayoutChange(e.tabUUID,D))),l.clearDecorations=()=>{const e=[{range:new M.Range(1,1,1,1),options:{}}];l.__cloudshell_decorations=l.deltaDecorations(l.__cloudshell_decorations||[],e)},t.wrapper.getValueForTests=()=>l.getValue(),s.readOnly||setTimeout((()=>l.focus()));const I=T.subscribeToChanges(e,e.content,l,s.readOnly);return I&&n.push((()=>I.dispose())),n.push((()=>{l.dispose();const e=l.getModel();e&&e.dispose()})),{editor:l,cleaners:n,subscription:I}}catch(e){return console.error("Error initing Monaco: ",e),t.catastrophicError=e,t}}render(){return this.state.catastrophicError?o.createElement("div",{className:"oops"}," ",this.state.catastrophicError.toString()):o.createElement("div",{className:"code-highlighting"},o.createElement("div",{className:"monaco-editor-wrapper",ref:e=>this.setState({wrapper:e})}))}}},36073:(e,t,n)=>{n.d(t,{d:()=>M});var o=n(11227);const i=n.n(o)()("plugins/editor/file-types"),M=(e,t)=>{const n=t||e.substring(0,e.indexOf(":"))||e;return i("language",e,t,n),"nodejs"===n||"app"===n||"composition"===n||"sequence"===n||"js"===n?"javascript":"ts"===n?"typescript":"md"===n?"markdown":"sh"===n?"shell":"yml"===n?"yaml":n}},94748:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII="},6161:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},51096:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);