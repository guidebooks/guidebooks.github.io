"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[3814],{72442:(t,e,n)=>{n.d(e,{O:()=>o});var r=n(21030),i=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};function o(t,{REPL:e},n=!1){return i(this,void 0,void 0,(function*(){try{if(/^https:/.test(t))return(yield e.rexec(`_fetchfile ${(0,r.encodeComponent)(t)}`)).content[0];{const n=r.Util.absolute(r.Util.expandHomeDir(t)),i=(yield e.rexec(`vfs fstat ${(0,r.encodeComponent)(n)} --with-data`)).content;if(i.isDirectory)throw new Error("Invalid filepath");return i.data}}catch(t){if(n)return;throw t}}))}},23814:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Y});var r=n(21030);function i({argvNoOptions:t}){return t.slice(1).join(" ")||!0}const o=({REPL:t})=>t.qexec("tab close"),s=t=>{var e;r.Capabilities.inBrowser()||t.listen("/window/close",(()=>{const{getCurrentWindow:t}=n(67657);return t().close(),!0})),t.listen("/exit",o,{usage:(e="exit",{command:e,strict:e,docs:"Quit the program"})})},a=({tab:t})=>(r.Capabilities.isHeadless()||setTimeout((()=>{r.Events.eventChannelUnsafe.emit(`/terminal/clear/${(0,r.getTabId)(t)}`),r.Events.eventChannelUnsafe.emit(`/close/views/${(0,r.getTabId)(t)}`)})),!0),c=t=>{t.listen("/clear",a)};var u=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};function l(t){return u(this,void 0,void 0,(function*(){const{N:e=10}=t.parsedOptions,n=t.command.replace(/-N\s+\d+/g,""),r=n.substring(n.indexOf("dopar ")+"dopar ".length);return yield Promise.all(Array(e).fill(0).map((()=>t.REPL.qexec(r)))),!0}))}var d=n(11227),h=n.n(d),p=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const m=h()("plugins/plugin-core-support/watch");class f{constructor(t,e,n,r,i){this.args=t,this.command=e,this.interval=n,this.watchState=r,this.until=i}poll(){return p(this,void 0,void 0,(function*(){const t=yield this.args.REPL.qexec(this.command,void 0,void 0,{watch:{iteration:this.watchState.iteration++,accumulator:this.watchState.accumulator}});(0,r.isTable)(t)?(this.pusher.header(t.header),this.pusher.setBody(t.body)):this.abort()}))}init(t){return p(this,void 0,void 0,(function*(){let e=!1;this.pusher=t,this.timeout=setInterval((()=>p(this,void 0,void 0,(function*(){if(!e){if(e=!0,yield this.poll(),this.until)try{(yield this.args.REPL.qexec(this.until))&&(yield this.poll(),this.abort())}catch(t){m(`watch-until failed exeuting ${this.until}`,t)}e=!1}}))),this.interval)}))}abort(){return p(this,void 0,void 0,(function*(){clearInterval(this.timeout),this.pusher.done()}))}}function v(t){t.listen("/watch",(t=>p(this,void 0,void 0,(function*(){const e=t.parsedOptions.until,n=e?t.command.indexOf("--until"):t.command.length,i=t.command.slice(t.argvNoOptions[0].length+1,n),o={accumulator:{},iteration:1},s=yield t.REPL.qexec(i,void 0,void 0,{watch:o}),a=t.parsedOptions.n||t.parsedOptions.interval||2e3;if((0,r.isTable)(s))return Object.assign(s,{watch:new f(t,i,a,o,e)});{const n=()=>t.REPL.reexec(t.command,{execUUID:t.execOptions.execUUID}),r=setTimeout((()=>p(this,void 0,void 0,(function*(){if(yield n(),e)try{(yield t.REPL.qexec(e))&&(yield n(),clearTimeout(r))}catch(t){m(`watch-until failed exeuting ${e}`,t)}}))),a);return{response:s,abort:()=>{clearTimeout(r)}}}}))),{flags:{boolean:["t","no-title"]}})}var y=n(48764).Buffer;const g=h()("plugins/core-support/base64"),w={command:"base64",strict:"base64",hidden:!0,required:[{name:"string",docs:"The string to encode or decode"}],optional:[{name:"--decode",alias:"-d",boolean:!0,docs:"Decode the given string"},{name:"--break",alias:"-b",numeric:!0,docs:"break encoded string into num character lines"}]},b=(t,e)=>{if(e.break>0){let n="";for(let r=0;r<t.length;r+=e.break)n=n+t.slice(r,Math.min(t.length,r+e.break))+"\n";return n}return t},x=t=>{g("init"),t.listen("/base64",(({argvNoOptions:t,parsedOptions:e})=>{const n=t[1];return g("str",n,t),e.decode?(g("decoding"),b(y.from(n,"base64").toString(),e)):(g("encoding"),b(y.from(n).toString("base64"),e))}),{usage:w})},O={command:"tab edit toggle",strict:"tab edit toggle",optional:[{name:"--current-tab",alias:"-c",boolean:!0,docs:"Toggle edit mode on current tab"}]};function P(t){(0,r.isReadOnlyClient)()||(0,r.isOfflineClient)()||t.listen("/tab/edit/toggle",(({tab:t,argvNoOptions:e,parsedOptions:n})=>{if(!n.c&&e.length<4)throw new Error("Not enough arguments. Expected: tab edit toggle tabIndexNum");if(e.length>4)throw new Error("Too many arguments. Expected: tab edit toggle tabIndexNum");return n.c?r.Events.eventBus.emitWithTabId("/kui/tab/edit/toggle",(0,r.getPrimaryTabId)(t)):r.Events.eventBus.emit("/kui/tab/edit/toggle/index",function(t){const e=parseInt(t[t.length-1],10);if(isNaN(e))throw new Error("4th argument is not a number. Expected type number");return e}(e)-1),"Successfully toggled edit mode"}),{usage:O,flags:{alias:{"current-tab":["c"]},boolean:["c"]}})}const E={command:"prompt",strict:"prompt",hidden:!0,optional:[{name:"promptString",positional:!0,docs:"The prompt string"}]},k=t=>{t.listen("/prompt",(()=>{throw new Error("Unsupported at the moment")}),{usage:E})};var T=n(72442),C=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const N={usage:{strict:"replay",required:[{name:"<filepath>",docs:"path to saved snapshot"}],optional:[{name:"--new-window",alias:"-w",boolean:!0,docs:"Replay in a new window (Electron only)"},{name:"--replace-current-tab",alias:"-r",boolean:!0,docs:"Replace the content of the current tab"},{name:"--status-stripe",docs:"Modify status stripe",allowed:["default","blue","yellow","red"]}]},flags:{alias:{"new-window":["w"],"replace-current-tab":["r"]},boolean:["new-window","w","replace-current-tab","r"]}};function S(t){t.listen("/replay",(({argvNoOptions:t,parsedOptions:e,REPL:i})=>C(this,void 0,void 0,(function*(){const o=t.slice(1).map((t=>r.Util.expandHomeDir(t)));if(e["new-window"]&&r.Capabilities.inElectron())return i.qexec(`replay-electron ${o}`);{const t=t=>`commentary --readonly -f ${(0,r.encodeComponent)(t)}`;yield Promise.all([!e.r||i.pexec(t(o[0]),{noHistory:!0}),...o.slice(e.r?1:0).map((o=>C(this,void 0,void 0,(function*(){const s=yield(0,T.O)(o,{REPL:i}),a="string"==typeof s?s:JSON.stringify(s),c=yield Promise.all([n.e(3320),n.e(1186)]).then(n.t.bind(n,21186,23)).then((t=>t.default(a))),u=`**Now Playing**: ${c.attributes.title||"a snapshot"}`;const l=c.attributes.title?`--title ${(0,r.encodeComponent)(c.attributes.title)}`:"",d=e.r?"--bg":"";yield i.qexec(`tab new ${d} --cmdline "${t(o)}" ${l} --status-stripe-type ${e["status-stripe"]||"blue"}`,void 0,void 0,{data:{"status-stripe-message":u}})}))))])}return!0}))),N),t.listen("/snapshot",(t=>C(this,void 0,void 0,(function*(){return yield r.Events.eventBus.emitSnapshotRequest({},t.tab.uuid),!0}))))}const I={command:"sleep",strict:"sleep",required:[{name:"sleepTime",number:!0,docs:"The number of seconds to sleep"}]},q=t=>{t.listen("/sleep",(({argvNoOptions:t})=>new Promise((e=>{const n=parseInt(t[1],10);setTimeout((()=>e("")),1e3*n)}))),{usage:I})};var H=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const R=h()("plugins/core-support/history"),_={history:{command:"history",strict:"history",docs:"List current command history, optionally filtering by a given string",example:"history 100 filterString",optional:[{name:"N",positional:!0,docs:"list the most recent N commands"},{name:"filterString",positional:!0,docs:"filter command history"},{name:"--clear",alias:"-c",docs:"clear your command history"}]},again:t=>({command:t,strict:t,docs:"Re-execute a given command index",example:`${t} 50`,optional:[{name:"N",positional:!0,docs:"re-execute the given history index N"}]})},$=({tab:t,argv:e,parsedOptions:n})=>H(void 0,void 0,void 0,(function*(){const i=yield(0,r.History)(t);if(n.c)return R("clearing command history"),i.wipe();const o=e.indexOf("history"),s=e.length-o-1,a=(t=>{try{return parseInt(t,10)}catch(t){}})(e[o+1]),c=2===s||a?o+1:-1,u=c>0?a:20,l=2===s?o+2:a?-1:o+1,d=l>0&&e[l],h=d?t=>t.raw.indexOf(d)>=0:()=>!0,p=Math.max(0,i.cursor-u-1),m=i.cursor-1,f=i.slice(p,m);R("argv",e),R("Nargs",s),R("Nidx",c),R("N",u),R("filterIdx",l),R("filterStr",d),R("got",f.length,p,m);const v=f.map(((t,e)=>{if(!h(t))return;const n=t.raw.substring(0,t.raw.indexOf(" ="))||t.raw,i=n.indexOf(" "),o=document.createElement("strong"),s=document.createElement("span");return o.innerText=n.substring(0,-1===i?n.length:i),-1!==i&&(s.innerText=n.substring(i)),new r.Row({attributes:[{key:"N",value:`${p+e}`}],fullName:t.raw,name:t.raw,onclick:t.raw})})).filter((t=>t));return new r.Table({noSort:!0,body:v})})),A=t=>{R("init"),t.listen("/history",$,{usage:_.history});const e=()=>t=>H(void 0,void 0,void 0,(function*(){const e=yield(0,r.History)(t.tab),n=t.argv[1]?parseInt(t.argv[1],10):e.cursor-2;return R("againCmd",t.execOptions),(({tab:t,REPL:e},n,i)=>H(void 0,void 0,void 0,(function*(){R("again",n,i);const o=yield(0,r.History)(t);if(o.line(n))return o.update(i,(t=>{t.raw=o.line(n).raw})),e.qexec(o.line(n).raw);throw new Error("Could not find the command to re-execute")})))(t,n,t.execOptions&&t.execOptions.history)})),n=t.listen("/!!",e(),{usage:_.again("!!")});t.synonym("/again",e(),n,{usage:_.again("again")})},L="kui-shell/v1/kui-config";function F(){const t=localStorage.getItem(L);return t?JSON.parse(t):{}}function j(t){localStorage.setItem(L,JSON.stringify(t))}function B(t){t.listen("/kuiconfig/set",(t=>(function(t,e){j(Object.assign(F(),{[t]:e}))}(t.argvNoOptions[2],t.argvNoOptions[3]||"true"),!0))),t.listen("/kuiconfig/get",(t=>{const e=t.argvNoOptions[2];return F()[e]||""})),t.listen("/kuiconfig/unset",(t=>(function(t){const e=F();delete e[t],j(e)}(t.argvNoOptions[2]),!0))),t.listen("/kuiconfig/is/set",(t=>{const e=t.argvNoOptions[3];return void 0!==F()[e]})),t.listen("/kuiconfig/not/set",(t=>{const e=t.argvNoOptions[3];return void 0===F()[e]}))}var M=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const U=(0,r.i18n)("plugin-core-support"),D={strict:"switch",command:"switch",required:[{name:"tabIndex",numeric:!0,docs:"Switch to the given tab index"}]};function J(t){t.listen("/tab/switch",(({argvNoOptions:t})=>{const e=parseInt(t[t.length-1],10);return r.Events.eventBus.emit("/tab/switch/request",e-1),!0}),{usage:D}),t.listen("/tab/new",(t=>M(this,void 0,void 0,(function*(){if(t.parsedOptions.if){if(!(yield t.REPL.qexec(t.parsedOptions.if)))return!0}if(t.parsedOptions.ifnot){if(yield t.REPL.qexec(t.parsedOptions.ifnot))return!0}const e=t.parsedOptions["status-stripe-message"]||(t.execOptions.data?t.execOptions.data["status-stripe-message"]:void 0),n=(Array.isArray(e)?e:[e]).map((e=>({type:t.parsedOptions["status-stripe-type"],message:e}))),i=t.parsedOptions.title?t.parsedOptions.title.split(/,/):void 0,o={content:i?Array.isArray(i)&&i.length>1?U("Created new tabs",t.parsedOptions.title):U("Created a new tab named X",Array.isArray(i)?i[0]:i):U("Created a new tab"),contentType:"text/markdown"};return t.parsedOptions.cmdline?new Promise((e=>{r.Events.eventBus.emit("/tab/new/request",{background:t.parsedOptions.bg,tabs:(i||[""]).map(((e,r)=>({title:e,statusStripeDecoration:n[r],cmdline:t.parsedOptions.cmdline,exec:t.parsedOptions.quiet?"qexec":"pexec",onClose:t.parsedOptions.onClose})))}),e(o)})):(r.Events.eventBus.emit("/tab/new/request",{background:t.parsedOptions.bg,tabs:n.map(((e,n)=>({statusStripeDecoration:e,title:i?i[n]:void 0,onClose:t.parsedOptions.onClose})))}),o)}))),{usage:{optional:[{name:"--cmdline",alias:"-c",docs:"Invoke a command in the new tab"},{name:"--quiet",alias:"-q",boolean:!0,docs:"Execute the given command line quietly"},{name:"--bg",alias:"-b",boolean:!0,docs:"Create, but do not switch to this tab"},{name:"--status-stripe-type",docs:"Desired status stripe coloration",allowed:["default","blue"]},{name:"--status-stripe-message",docs:"Desired status stripe message"},{name:"--title",alias:"-t",docs:"Title to display in the UI"}]},flags:{boolean:["bg","b","quiet","q"]}}),t.listen("/tab/close",(({tab:t,parsedOptions:e})=>function(t,e){const n=e?(0,r.getPrimaryTabId)(t):t.uuid;return r.Events.eventBus.emitWithTabId("/tab/close/request",n,t),!0}(t,e.A)),{flags:{boolean:["A"]}})}var W=n(46146),G=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const K=(0,r.i18n)("plugin-core-support"),Q={command:"grammy",strict:"grammy",example:"grammy filepath",docs:"Grammy",optional:[{name:"--color",alias:"-c",boolean:!0}]};function X(t){return G(this,void 0,void 0,(function*(){const{REPL:e,argvNoOptions:n}=t,i=n[1];if(i){const n={},o=(yield e.rexec(`vfs ls -l ${e.encodeComponent(i)}`)).content,s=t=>{t&&t.split("\n").map((t=>{const e=t.trim(),r=e.indexOf(" ");if(-1!==r){const t=e.slice(0,r),i=e.replace(t,"").trim(),o=parseInt(t);t&&!isNaN(o)&&i&&(n[i]?n[i]+=o:n[i]=o)}})).filter((t=>t))},a=(t,e)=>`${t}-${e}`,c=t=>G(this,void 0,void 0,(function*(){return(yield e.rexec(`vfs fslice ${(0,r.encodeComponent)(t)} 0`)).content})),u=(e,n)=>G(this,void 0,void 0,(function*(){const r=yield c(e);return t.execOptions.watch&&(t.execOptions.watch.accumulator[a(e,n)]={data:r}),r})),l=(e,n)=>G(this,void 0,void 0,(function*(){return t.execOptions.watch&&t.execOptions.watch.accumulator[a(e,n)]?t.execOptions.watch.accumulator[a(e,n)].data:yield u(e,n)}));yield W.PromisePool.withConcurrency(1024).for(o).process((({path:t,stats:e})=>G(this,void 0,void 0,(function*(){s(yield l(t,e.mtimeMs))}))));return{body:Object.entries(n).map((([t,e])=>({rowKey:t,name:t,attributes:[{key:"Count",value:e.toString()}]}))),header:{name:"Name",attributes:[{key:"Count",value:"Count"}]},title:K("Histogram"),defaultPresentation:"histogram",colorBy:t.parsedOptions.color?"default":void 0}}throw new Error("grammy: file not provided")}))}const z=t=>G(void 0,void 0,void 0,(function*(){t.listen("/grammy",X,{usage:Q,flags:{boolean:["color","c"]}})}));var V=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};const Y=t=>V(void 0,void 0,void 0,(function*(){var e;yield Promise.all([(e=t,e.listen("/kuiecho",i),void(r.Capabilities.inBrowser()&&!r.Capabilities.hasProxy()&&e.listen("/echo",i))),s(t),c(t),t.listen("/dopar",l),v(t),x(t),P(t),k(t),S(t),q(t),A(t),B(t),z(t),J(t)]),r.Capabilities.isHeadless()||(yield Promise.all([n.e(3712).then(n.bind(n,93712)).then((e=>e.plugin(t))),n.e(257).then(n.bind(n,20257)).then((e=>e.plugin(t)))]))}))},46146:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0});const o=n(55473);e.default=o.PromisePool,i(n(55473),e),i(n(83495),e),i(n(98374),e),i(n(77001),e),i(n(32081),e)},83495:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PromisePoolError=void 0;class n extends Error{constructor(t,e){super(),this.raw=t,this.item=e,this.name=this.constructor.name,this.message=this.messageFrom(t),Error.captureStackTrace(this,this.constructor)}static createFrom(t,e){return new this(t,e)}messageFrom(t){return t instanceof Error||"object"==typeof t?t.message:"string"==typeof t||"number"==typeof t?t.toString():""}}e.PromisePoolError=n},20976:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PromisePoolExecutor=void 0;const r=n(83495),i=n(32081);e.PromisePoolExecutor=class{constructor(){this.meta={tasks:[],items:[],errors:[],results:[],stopped:!1,concurrency:10},this.handler=()=>{},this.errorHandler=void 0}withConcurrency(t){return this.meta.concurrency=t,this}concurrency(){return this.meta.concurrency}for(t){return this.meta.items=t,this}items(){return this.meta.items}tasks(){return this.meta.tasks}results(){return this.meta.results}errors(){return this.meta.errors}withHandler(t){return this.handler=t,this}hasErrorHandler(){return!!this.errorHandler}handleError(t){return this.errorHandler=t,this}hasReachedConcurrencyLimit(){return this.activeTasks()>=this.concurrency()}activeTasks(){return this.meta.tasks.length}stop(){throw this.markAsStopped(),new i.StopThePromisePoolError}markAsStopped(){return this.meta.stopped=!0,this}isStopped(){return this.meta.stopped}async start(){return await this.validateInputs().process()}validateInputs(){if("function"!=typeof this.handler)throw new Error("The first parameter for the .process(fn) method must be a function");if(!("number"==typeof this.concurrency()&&this.concurrency()>=1))throw new TypeError(`"concurrency" must be a number, 1 or up. Received "${this.concurrency()}" (${typeof this.concurrency()})`);if(!Array.isArray(this.items()))throw new TypeError('"items" must be an array. Received '+typeof this.items());if(this.errorHandler&&"function"!=typeof this.errorHandler)throw new Error("The error handler must be a function. Received "+typeof this.errorHandler);return this}async process(){for(const[t,e]of this.items().entries()){if(this.isStopped())break;this.hasReachedConcurrencyLimit()&&await this.waitForTaskToFinish(),this.startProcessing(e,t)}return await this.drained()}async waitForTaskToFinish(){await Promise.race(this.tasks())}startProcessing(t,e){const n=this.createTaskFor(t,e).then((t=>{this.removeActive(n).save(t)})).catch((async e=>this.removeActive(n).handleErrorFor(e,t)));this.tasks().push(n)}async createTaskFor(t,e){return this.handler(t,e,this)}save(t){return this.results().push(t),this}removeActive(t){return this.tasks().splice(this.tasks().indexOf(t),1),this}async handleErrorFor(t,e){if(!this.isStoppingThePool(t))return this.hasErrorHandler()?await this.runErrorHandlerFor(t,e):this.saveErrorFor(t,e)}isStoppingThePool(t){return t instanceof i.StopThePromisePoolError}async runErrorHandlerFor(t,e){var n;try{return await(null===(n=this.errorHandler)||void 0===n?void 0:n.call(this,t,e,this))}catch(t){this.rethrowIfNotStoppingThePool(t)}}rethrowIfNotStoppingThePool(t){if(!this.isStoppingThePool(t))throw t}saveErrorFor(t,e){this.errors().push(r.PromisePoolError.createFrom(t,e))}async drained(){return await this.drainActiveTasks(),{errors:this.errors(),results:this.results()}}async drainActiveTasks(){await Promise.all(this.tasks())}}},55473:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PromisePool=void 0;const r=n(20976);class i{constructor(t){this.concurrency=10,this.items=null!=t?t:[],this.errorHandler=void 0}withConcurrency(t){return this.concurrency=t,this}static withConcurrency(t){return(new this).withConcurrency(t)}for(t){return new i(t).withConcurrency(this.concurrency)}static for(t){return(new this).for(t)}handleError(t){return this.errorHandler=t,this}async process(t){return(new r.PromisePoolExecutor).withConcurrency(this.concurrency).withHandler(t).handleError(this.errorHandler).for(this.items).start()}}e.PromisePool=i},98374:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},32081:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StopThePromisePoolError=void 0;class n extends Error{}e.StopThePromisePoolError=n},77001:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})}}]);