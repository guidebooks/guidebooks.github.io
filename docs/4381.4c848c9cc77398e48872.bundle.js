(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[4381],{94879:(e,t,n)=>{"use strict";t.enable=t.initialize=void 0;var o=n(82186);Object.defineProperty(t,"initialize",{enumerable:!0,get:function(){return o.initialize}}),Object.defineProperty(t,"enable",{enumerable:!0,get:function(){return o.enable}})},90869:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=(e,t)=>`${e.id}-${t}`;t.default=new class{constructor(){this.nextId=0,this.storage={},this.owners={},this.electronIds=new WeakMap}add(e,t,o){const r=this.saveToStorage(o),i=n(e,t);let s=this.owners[i];return s||(s=this.owners[i]=new Map,this.registerDeleteListener(e,t)),s.has(r)||(s.set(r,0),this.storage[r].count++),s.set(r,s.get(r)+1),r}get(e){const t=this.storage[e];if(null!=t)return t.object}remove(e,t,o){const r=n(e,t),i=this.owners[r];if(i&&i.has(o)){const e=i.get(o)-1;e<=0?(i.delete(o),this.dereference(o)):i.set(o,e)}}clear(e,t){const o=n(e,t),r=this.owners[o];if(r){for(const e of r.keys())this.dereference(e);delete this.owners[o]}}saveToStorage(e){let t=this.electronIds.get(e);return t||(t=++this.nextId,this.storage[t]={count:0,object:e},this.electronIds.set(e,t)),t}dereference(e){const t=this.storage[e];null!=t&&(t.count-=1,0===t.count&&(this.electronIds.delete(t.object),delete this.storage[e]))}registerDeleteListener(e,t){const n=t.split("-")[0],o=(r,i)=>{i&&i.toString()===n&&(e.removeListener("render-view-deleted",o),this.clear(e,t))};e.on("render-view-deleted",o)}}},82186:function(e,t,n){"use strict";var o=n(186),r=n(48764).Buffer,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.initialize=t.enable=t.isRemoteModuleEnabled=void 0;const s=n(17187),l=i(n(90869)),a=n(50897),c=n(7676),u=n(64222).getElectronBinding("v8_util"),d=(()=>{var e,t;const n=Number(null===(t=null===(e=o.versions.electron)||void 0===e?void 0:e.split("."))||void 0===t?void 0:t[0]);return Number.isNaN(n)||n<14})(),f=["length","name","arguments","caller","prototype"],h=new Map,m=new FinalizationRegistry((e=>{const t=e.id[0]+"~"+e.id[1],n=h.get(t);if(void 0!==n&&void 0===n.deref()&&(h.delete(t),!e.webContents.isDestroyed()))try{e.webContents.sendToFrame(e.frameId,"REMOTE_RENDERER_RELEASE_CALLBACK",e.id[0],e.id[1])}catch(e){console.warn(`sendToFrame() failed: ${e}`)}}));function p(e){const t=e[0]+"~"+e[1],n=h.get(t);if(void 0!==n){const e=n.deref();if(void 0!==e)return e}}const b=new WeakMap,w=function(e){let t=Object.getOwnPropertyNames(e);return"function"==typeof e&&(t=t.filter((e=>!f.includes(e)))),t.map((t=>{const n=Object.getOwnPropertyDescriptor(e,t);let o,r=!1;return void 0===n.get&&"function"==typeof e[t]?o="method":((n.set||n.writable)&&(r=!0),o="get"),{name:t,enumerable:n.enumerable,writable:r,type:o}}))},g=function(e){const t=Object.getPrototypeOf(e);return null===t||t===Object.prototype?null:{members:w(t),proto:g(t)}},v=function(e,t,n,o=!1){let i;switch(typeof n){case"object":i=n instanceof r?"buffer":n&&n.constructor&&"NativeImage"===n.constructor.name?"nativeimage":Array.isArray(n)?"array":n instanceof Error?"error":a.isSerializableObject(n)?"value":a.isPromise(n)?"promise":Object.prototype.hasOwnProperty.call(n,"callee")&&null!=n.length?"array":o&&u.getHiddenValue(n,"simple")?"value":"object";break;case"function":i="function";break;default:i="value"}return"array"===i?{type:i,members:n.map((n=>v(e,t,n,o)))}:"nativeimage"===i?{type:i,value:a.serialize(n)}:"object"===i||"function"===i?{type:i,name:n.constructor?n.constructor.name:"",id:l.default.add(e,t,n),members:w(n),proto:g(n)}:"buffer"===i?{type:i,value:n}:"promise"===i?(n.then((function(){}),(function(){})),{type:i,then:v(e,t,(function(e,t){n.then(e,t)}))}):"error"===i?{type:i,value:n,members:Object.keys(n).map((o=>({name:o,value:v(e,t,n[o])})))}:{type:"value",value:n}},E=function(e){const t=new Error(e);throw t.code="EBADRPC",t.errno=-72,t},y=(e,t)=>{let n=`Attempting to call a function in a renderer window that has been closed or released.\nFunction provided here: ${b.get(t)}`;if(e instanceof s.EventEmitter){const o=e.eventNames().filter((n=>e.listeners(n).includes(t)));o.length>0&&(n+=`\nRemote event names: ${o.join(", ")}`,o.forEach((n=>{e.removeListener(n,t)})))}console.warn(n)},O=function(e,t,n,o){const i=function(o){switch(o.type){case"nativeimage":return a.deserialize(o.value);case"value":return o.value;case"remote-object":return l.default.get(o.id);case"array":return O(e,t,n,o.value);case"buffer":return r.from(o.value.buffer,o.value.byteOffset,o.value.byteLength);case"promise":return Promise.resolve({then:i(o.then)});case"object":{const e="Object"!==o.name?Object.create({constructor:(s=o.name,new Proxy(Object,{get:(e,t,n)=>"name"===t?s:Reflect.get(e,t,n)}))}):{};for(const{name:t,value:n}of o.members)e[t]=i(n);return e}case"function-with-return-value":{const e=i(o.value);return function(){return e}}case"function":{const r=[n,o.id],i=p(r);if(void 0!==i)return i;const s=function(...r){let i=!1;if(!e.isDestroyed())try{i=!1!==e.sendToFrame(t,"REMOTE_RENDERER_CALLBACK",n,o.id,v(e,n,r))}catch(e){console.warn(`sendToFrame() failed: ${e}`)}i||y(this,s)};return b.set(s,o.location),Object.defineProperty(s,"length",{value:o.length}),function(e,t,n,o){const r=new WeakRef(o),i=e[0]+"~"+e[1];h.set(i,r),m.register(o,{id:e,webContents:t,frameId:n})}(r,e,t,s),s}default:throw new TypeError(`Unknown type: ${o.type}`)}var s};return o.map(i)},R=new WeakMap;t.isRemoteModuleEnabled=function(e){return d&&!R.has(e)&&R.set(e,function(e){const t=e.getLastWebPreferences()||{};return null!=t.enableRemoteModule&&!!t.enableRemoteModule}(e)),R.get(e)},t.enable=function(e){R.set(e,!0)};const _=function(e,n){c.ipcMain.on(e,((e,o,...r)=>{let i;if(t.isRemoteModuleEnabled(e.sender)){try{i=n(e,o,...r)}catch(t){i={type:"exception",value:v(e.sender,o,t)}}void 0!==i&&(e.returnValue=i)}else e.returnValue={type:"exception",value:v(e.sender,o,new Error('@electron/remote is disabled for this WebContents. Call require("@electron/remote/main").enable(webContents) to enable it.'))}}))},C=function(e,t,...n){const o={sender:e,returnValue:void 0,defaultPrevented:!1};return c.app.emit(t,o,e,...n),e.emit(t,o,...n),o},I=function(e,t,n){n&&console.warn(`WebContents (${e.id}): ${t}`,n)};let T=!1;t.initialize=function(){if(T)throw new Error("@electron/remote has already been initialized");T=!0,_("REMOTE_BROWSER_WRONG_CONTEXT_ERROR",(function(e,t,n,o){const r=p([n,o]);void 0!==r&&y(e.sender,r)})),_("REMOTE_BROWSER_REQUIRE",(function(e,t,n,r){I(e.sender,`remote.require('${n}')`,r);const i=C(e.sender,"remote-require",n);if(void 0===i.returnValue){if(i.defaultPrevented)throw new Error(`Blocked remote.require('${n}')`);i.returnValue=o.mainModule.require(n)}return v(e.sender,t,i.returnValue)})),_("REMOTE_BROWSER_GET_BUILTIN",(function(e,t,o,r){I(e.sender,`remote.getBuiltin('${o}')`,r);const i=C(e.sender,"remote-get-builtin",o);if(void 0===i.returnValue){if(i.defaultPrevented)throw new Error(`Blocked remote.getBuiltin('${o}')`);i.returnValue=n(7676)[o]}return v(e.sender,t,i.returnValue)})),_("REMOTE_BROWSER_GET_GLOBAL",(function(e,t,o,r){I(e.sender,`remote.getGlobal('${o}')`,r);const i=C(e.sender,"remote-get-global",o);if(void 0===i.returnValue){if(i.defaultPrevented)throw new Error(`Blocked remote.getGlobal('${o}')`);i.returnValue=n.g[o]}return v(e.sender,t,i.returnValue)})),_("REMOTE_BROWSER_GET_CURRENT_WINDOW",(function(e,t,n){I(e.sender,"remote.getCurrentWindow()",n);const o=C(e.sender,"remote-get-current-window");if(void 0===o.returnValue){if(o.defaultPrevented)throw new Error("Blocked remote.getCurrentWindow()");o.returnValue=e.sender.getOwnerBrowserWindow()}return v(e.sender,t,o.returnValue)})),_("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS",(function(e,t,n){I(e.sender,"remote.getCurrentWebContents()",n);const o=C(e.sender,"remote-get-current-web-contents");if(void 0===o.returnValue){if(o.defaultPrevented)throw new Error("Blocked remote.getCurrentWebContents()");o.returnValue=e.sender}return v(e.sender,t,o.returnValue)})),_("REMOTE_BROWSER_CONSTRUCTOR",(function(e,t,n,o){o=O(e.sender,e.frameId,t,o);const r=l.default.get(n);return null==r&&E(`Cannot call constructor on missing remote object ${n}`),v(e.sender,t,new r(...o))})),_("REMOTE_BROWSER_FUNCTION_CALL",(function(e,t,n,o){o=O(e.sender,e.frameId,t,o);const r=l.default.get(n);null==r&&E(`Cannot call function on missing remote object ${n}`);try{return v(e.sender,t,r(...o),!0)}catch(e){const t=new Error(`Could not call remote function '${r.name||"anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}\nUnderlying stack: ${e.stack}\n`);throw t.cause=e,t}})),_("REMOTE_BROWSER_MEMBER_CONSTRUCTOR",(function(e,t,n,o,r){r=O(e.sender,e.frameId,t,r);const i=l.default.get(n);return null==i&&E(`Cannot call constructor '${o}' on missing remote object ${n}`),v(e.sender,t,new i[o](...r))})),_("REMOTE_BROWSER_MEMBER_CALL",(function(e,t,n,o,r){r=O(e.sender,e.frameId,t,r);const i=l.default.get(n);null==i&&E(`Cannot call method '${o}' on missing remote object ${n}`);try{return v(e.sender,t,i[o](...r),!0)}catch(e){const t=new Error(`Could not call remote method '${o}'. Check that the method signature is correct. Underlying error: ${e.message}\nUnderlying stack: ${e.stack}\n`);throw t.cause=e,t}})),_("REMOTE_BROWSER_MEMBER_SET",(function(e,t,n,o,r){r=O(e.sender,e.frameId,t,r);const i=l.default.get(n);return null==i&&E(`Cannot set property '${o}' on missing remote object ${n}`),i[o]=r[0],null})),_("REMOTE_BROWSER_MEMBER_GET",(function(e,t,n,o){const r=l.default.get(n);return null==r&&E(`Cannot get property '${o}' on missing remote object ${n}`),v(e.sender,t,r[o])})),_("REMOTE_BROWSER_DEREFERENCE",(function(e,t,n){l.default.remove(e.sender,t,n)})),_("REMOTE_BROWSER_CONTEXT_RELEASE",((e,t)=>(l.default.clear(e.sender,t),null)))}},68539:(e,t,n)=>{e.exports=n(94879)},85131:(e,t,n)=>{"use strict";n.d(t,{N:()=>p});var o=n(68680),r=n(7676),i=n(60599),s=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};const l=[{name:"Kui snapshot",extensions:["md"]}];var a=n(93364),c=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};function u(){return c(this,void 0,void 0,(function*(){(0,a.Z)("snapshot","pexec")}))}var d=n(21030),f=n(186);const h=()=>(0,a.Z)("tab close -A"),m="darwin"===f.platform?"Command+W":"Control+Shift+W",p=e=>{{const t=i.openNotebook.bind(void 0,e),c=(0,i.clientNotebooksDefinitionToElectron)((0,i.loadClientNotebooksMenuDefinition)(),t),p=[{label:"New Split",click:()=>(0,a.Z)("split"),accelerator:"CommandOrControl+Y"},{label:"New Tab",click:()=>(0,a.Z)("tab new"),accelerator:"CommandOrControl+T"},{label:"New Window",click:()=>e(),accelerator:"CommandOrControl+N"},{label:"Open",click:()=>function(e){return s(this,void 0,void 0,(function*(){const{app:t,dialog:o}=yield Promise.resolve().then(n.t.bind(n,7676,23)),r=yield o.showOpenDialog({title:"Select a Kui snapshot",filters:l});r.canceled||r.filePaths.forEach((n=>{t.addRecentDocument(n),(0,i.replay)(n,e)}))}))}(e),accelerator:"CommandOrControl+O"},{label:"Open Recent",role:"recentdocuments",submenu:[{label:"Clear Recent",role:"clearrecentdocuments"}]},{type:"separator"},{label:"Toggle Edit Mode",enabled:!((0,d.isReadOnlyClient)()||(0,d.isOfflineClient)()),click:()=>(0,a.Z)("tab edit toggle --current-tab")},{label:"Save as Notebook...",click:u,accelerator:"CommandOrControl+S"},{type:"separator"},{label:"Close Tab",click:h,accelerator:m},{role:"close",accelerator:void 0}];"darwin"!==f.platform&&(p.push({type:"separator"}),p.push({role:"quit"}));const b={label:"Choose a Theme",click:()=>{try{(0,a.Z)("themes","pexec")}catch(e){console.log(e)}}},w=[{label:`Getting Started with ${o.productName}`,click:()=>{try{(0,a.Z)("getting started","pexec")}catch(e){console.log(e)}}},{type:"separator"},{label:"Report Issue...",click(){n(7676).shell.openExternal("https://github.com/IBM/kui/issues/new")}}],g=[{label:"File",submenu:p},{label:"Edit",submenu:[{role:"undo"},{role:"redo"},{type:"separator"},{role:"cut"},{role:"copy"},{role:"paste"},{role:"pasteAndMatchStyle"},{role:"delete"},{role:"selectAll"}]}],v=[{label:"View",submenu:[b,{type:"separator"},{accelerator:"darwin"===f.platform?"Meta+R":"Shift+CmdOrCtrl+R",role:"reload"},{role:"toggleDevTools"},{type:"separator"},{role:"resetZoom"},{role:"zoomIn"},{role:"zoomOut"},{type:"separator"},{role:"togglefullscreen"}]}],E=[{role:"window",submenu:[{role:"minimize"},{role:"close",accelerator:m}]},{role:"help",submenu:w}],y=g.concat(v).concat(c?[c]:[]).concat(E),O={label:`About ${o.productName}`,click:()=>{try{(0,a.Z)("about","pexec")}catch(e){console.log(e)}}},R={type:"separator"},_=[O,R,{role:"services",submenu:[]},R,{role:"hide"},{role:"hideOthers"},{role:"unhide"},R,{role:"quit"}];"darwin"===f.platform?y.unshift({label:o.productName,submenu:_}):(w.push({type:"separator"}),w.push(O));const C=r.Menu.buildFromTemplate(y);r.Menu.setApplicationMenu(C)}}},60599:(e,t,n)=>{"use strict";n.r(t),n.d(t,{replay:()=>s,openNotebook:()=>l,clientNotebooksDefinitionToElectron:()=>a,loadClientNotebooksMenuDefinition:()=>c});var o=n(7676),r=n(93364),i=n(5379);function s(e,t){try{0===o.webContents.getAllWebContents().length?t(["replay",e]):(0,r.Z)(`replay ${(0,i.Z)(e)}`,"pexec")}catch(e){console.log(e)}}function l(e,t,n){return{label:t,click:()=>s(n,e)}}function a(e,t){if(e)return Object.assign({},{label:e.label,submenu:e.submenu.map((e=>function(e){const t=e;return"string"==typeof t.label&&Array.isArray(t.submenu)}(e)?a(e,t):function(e){const t=e;return"string"==typeof t.notebook&&"string"==typeof t.filepath}(e)?t(e.notebook,e.filepath):e))})}function c(){try{return n(3836)}catch(e){return}}},74381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createWindow:()=>v,getCommand:()=>E,initElectron:()=>y});var o=n(11227),r=n.n(o),i=n(26470);const s=1200,l=800,a=900,c=675;var u=n(79895),d=n(186),f=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};const h=r()("main/spawn-electron");h("loading");let m,p=0,b=[],w=!0;function g(e){v(!0,e)}function v(e=!1,t,o,r,a=!1,c=!1){if(h("createWindow",t),r&&r.bringYourOwnWindow)return void r.bringYourOwnWindow();let E=r&&r.width||1280,O=r&&r.height||960;d.env.WINDOW_WIDTH&&(E=parseInt(d.env.WINDOW_WIDTH,10),isNaN(E)&&(console.error("Cannot parse WINDOW_WIDTH "+d.env.WINDOW_WIDTH),E=1280)),d.env.WINDOW_HEIGHT&&(O=parseInt(d.env.WINDOW_HEIGHT,10),isNaN(O)&&(console.error("Cannot parse WINDOW_HEIGHT "+d.env.WINDOW_HEIGHT),O=960));let R=Promise.resolve();m||(h("we need to spawn electron",o,r),delete r.synonymFor,R=y(["--"].concat(t),{},o,r,c).then((()=>f(this,void 0,void 0,(function*(){m=(yield Promise.resolve().then(n.t.bind(n,7676,23))).app})))).catch((e=>{h("not ready for graphics",e)}))),R.then((()=>f(this,void 0,void 0,(function*(){const{productName:c}=yield Promise.resolve().then(n.t.bind(n,68680,19)),{filesystem:m}=yield n.e(8055).then(n.t.bind(n,38055,19)),{screen:y,BrowserWindow:R,app:_}=yield Promise.resolve().then(n.t.bind(n,7676,23)),C=r&&r.position?yield r.position():function({screen:e,BrowserWindow:t}){if(e){const n=t.getAllWindows().length,{bounds:o}=e.getPrimaryDisplay(),r=40*n;return{x:Math.round((o.width-s)/2)+r,y:Math.round((o.height-l)/2)+r}}}({screen:y,BrowserWindow:R}),I=Object.assign({title:c,width:E,height:O,webPreferences:{enableRemoteModule:!0,backgroundThrottling:!1,contextIsolation:!1,nodeIntegration:!0}},C);I.webPreferences.zoomFactor=1;const T=_.getAppPath(),W=(0,i.join)(T,/dist\/headless$/.test(T)?"../../":"","node_modules/@kui-shell");if("linux"===d.platform){const e=(0,i.join)(W,"build",m.linux);I.icon=e}else if("win32"===d.platform){const e=(0,i.join)(W,"build",m.win32);I.icon=e}o&&(I.useContentSize=!0),w&&(n(68539).initialize(),w=!1),d.env.KUI_POSITION_X&&(I.x=parseInt(d.env.KUI_POSITION_X,10)),d.env.KUI_POSITION_Y&&(I.y=parseInt(d.env.KUI_POSITION_Y,10)),h("createWindow::new BrowserWindow");const N=new R(I);n(68539).enable(N.webContents),p++,h("createWindow::new BrowserWindow success"),N.once("ready-to-show",(()=>{N.setVisibleOnAllWorkspaces(!0),N.show(),N.setVisibleOnAllWorkspaces(!1)}));const P={};N.webContents.on("did-finish-load",(()=>f(this,void 0,void 0,(function*(){})))),N.webContents.on("will-navigate",((e,t)=>f(this,void 0,void 0,(function*(){/kui-shell\/build\/index.html/.test(t)||(e.preventDefault(),(yield Promise.resolve().then(n.t.bind(n,7676,23))).shell.openExternal(t))})))),N.webContents.on("new-window",((e,t,o,r,i)=>f(this,void 0,void 0,(function*(){t.startsWith("https://youtu.be")?(e=>{const{type:t,event:n,url:o,size:r=N.getBounds(),position:i=N.getBounds()}=e,s=P[t]||{},{window:l,url:a}=s;if(!l||l.isDestroyed()){const e=new R({width:r.width,height:r.height,frame:!0});P[t]={window:e,url:o},e.setPosition(i.x+62,i.y+62),e.loadURL(o)}else a!==o&&(l.loadURL(o),s.url=o),l.focus();n.preventDefault()})({type:"videos",event:e,url:t,options:i,size:{width:800,height:600}}):(e.preventDefault(),(yield Promise.resolve().then(n.t.bind(n,7676,23))).shell.openExternal(t))}))));let k=t&&t.find((e=>/--command-context/.test(e)));k&&(t=t.filter((e=>!e.match(/--command-context/))),k=k.replace(/^--/,"")),!0===e&&t&&(h("setting argv",t),N.executeThisArgvPlease=t),h("subwindowPrefs",r),r&&Object.keys(r).length>0&&(N.subwindow=r);const S={pathname:(0,i.join)(W,"build","index.html"),protocol:"file:",search:k?`?${k}`:"",slashes:!0};h("mainWindow::loadURL",S);try{N.loadURL(n(8575).format(S))}catch(e){const t=e.message.includes("Inspected target navigated or closed")||e.message.includes("cannot determine loading status")||e.message.includes("Inspected target navigated or closed");if(!d.env.TRAVIS_JOB_ID||!t)throw e}if(h("install menus"),n(85131).N(g),N.once("closed",(function(){0==--p&&(b.forEach((e=>e())),b=[])})),!a&&0===b.length){const{ipcMain:e}=yield Promise.resolve().then(n.t.bind(n,7676,23));h("ipc registration");const t=(e,t,o)=>f(this,void 0,void 0,(function*(){try{const{clipboard:r,nativeImage:i,webContents:s}=yield Promise.resolve().then(n.t.bind(n,7676,23)),l=yield s.fromId(parseInt(t,10)).capturePage(o);try{const t=l.toPNG();r.writeImage(i.createFromBuffer(t)),e.sender.send("capture-page-to-clipboard-done",t)}catch(t){console.log(t),e.sender.send("capture-page-to-clipboard-done")}}catch(t){console.log(t),e.sender.send("capture-page-to-clipboard-done")}})),o=(e,t)=>{const n=JSON.parse(t);switch(n.operation){case"quit":_.quit();break;case"new-window":v(!0,n.argv,void 0,{initialTabTitle:n.title,quietExecCommand:void 0!==n.quietExecCommand&&n.quietExecCommand},!0);break;case"open-graphical-shell":v(!0);break;case"enlarge-window":N.setContentSize(1400,1050,!0);break;case"reduce-window":N.setContentSize(1024,768,!0);break;case"maximize-window":N.maximize();break;case"unmaximize-window":N.unmaximize()}e.returnValue="ok"},r=(e,t)=>f(this,void 0,void 0,(function*(){const o=JSON.parse(t),r=`/exec/response/${o.hash}`;h("invoke",o);try{const t=yield n(24992)("./plugin-"+(0,u.u)(o.module)+"/mdist/electron-main.js");h("invoke got module");const i=yield t[o.main||"main"](o.args,e.sender);h("invoke got returnValue",i),e.sender.send(r,JSON.stringify({success:!0,returnValue:i}))}catch(t){h("error in exec",t),e.sender.send(r,JSON.stringify({success:!1,error:t}))}}));e.on("/exec/invoke",r),e.on("synchronous-message",o),e.on("capture-page-to-clipboard",t),b.push((()=>e.off("/exec/invoke",r))),b.push((()=>e.off("synchronous-message",o))),b.push((()=>e.off("capture-page-to-clipboard",t)))}h("createWindow done")}))))}const E=(e,t)=>{h("getCommand",e);const n=e.lastIndexOf("--");e=(e=-1===n?e.slice(1):e.slice(n+1)).filter((e=>"--ui"!==e&&"--no-color"!==e&&!e.match(/^-psn/)));const o=!d.env.KUI_POPUP&&(0===e.length||e.find((e=>"shell"===e))||d.env.RUNNING_SHELL_TEST&&!d.env.KUI_TEE_TO_FILE);h("isShell",e,o);let r=!0,i={fullscreen:!0,width:s,height:l};return o?(e=["shell"],r=!1,i={}):d.env.KUI_POPUP&&(e=JSON.parse(d.env.KUI_POPUP)),d.env.KUI_POPUP_WINDOW_RESIZE&&(i={fullscreen:!0,position:()=>f(void 0,void 0,void 0,(function*(){return function({screen:e,BrowserWindow:t}){if(e){const n=t.getAllWindows().length,{bounds:o}=e.getPrimaryDisplay();return{x:o.width-a-50,y:Math.round((o.height-c)/4+40*(n-1))}}}(yield t())})),width:a,height:c}),h("using args",e,i),{argv:e,subwindowPlease:r,subwindowPrefs:i}};function y(e=[],{isRunningHeadless:t=!1}={},o,r,i=!1){return f(this,void 0,void 0,(function*(){if(h("initElectron",e,o,r),d.env.KUI_HEADLESS){if(!d.env.KUI_ELECTRON_HOME)throw new Error("Unable to locate graphics components");{const t=n.e(6161).then(n.t.bind(n,96161,23)),s=[".","--",...e];h("spawning electron",d.env.KUI_ELECTRON_HOME,s);const l={};o&&(h("passing through subwindowPlease",o),l.subwindowPlease=o.toString()),r&&Object.keys(r).length>0&&(h("passing through subwindowPrefs",r),l.subwindowPrefs=JSON.stringify(r));const a=Object.assign({},d.env,l);delete a.KUI_GRAPHICS,delete a.KUI_HEADLESS,delete a.ELECTRON_RUN_AS_NODE;const c=(yield t).spawn(d.env.KUI_ELECTRON_HOME,s,{stdio:h.enabled?"inherit":"ignore",env:a,detached:!0});h.enabled||c.unref(),h("spawning electron done, this process will soon exit"),i||d.exit(0)}}else{h("loading electron");const e=yield Promise.resolve().then(n.t.bind(n,7676,23));m=e.app}if(!d.env.RUNNING_SHELL_TEST){const e=r&&r.width,t=r&&r.height;if(m.on("second-instance",((o,r)=>{const{argv:i,subwindowPlease:s,subwindowPrefs:l}=E(r,(()=>f(this,void 0,void 0,(function*(){return Promise.resolve().then(n.t.bind(n,7676,23))}))));e&&(l.width=e),t&&(l.height=t),h("opening window for second instance",r,s,l),v(!0,i,s,l)})),!m.requestSingleInstanceLock())return h("exiting, since we are not the first instance"),m.exit(0)}m.on("open-file",((e,t)=>f(this,void 0,void 0,(function*(){const{replay:e}=yield Promise.resolve().then(n.bind(n,60599));e(t,g)})))),m.once("ready",(()=>{h("opening primary window",e),v(!0,e.length>0&&e,o,r)})),m.on("window-all-closed",(function(){"darwin"!==d.platform||t?m.quit():m.hide()})),m.on("activate",(function(){0===p&&v()}))}))}},93364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};const r=(e,t="qexec")=>o(void 0,void 0,void 0,(function*(){const{webContents:o}=yield Promise.resolve().then(n.t.bind(n,7676,23)),r=o.getFocusedWebContents()||o.getAllWebContents()[0];if(o.getAllWebContents().map((e=>e.devToolsWebContents)).filter((e=>e)).find((e=>e.id===r.id))){const e=o.getAllWebContents().find((e=>e.devToolsWebContents&&e.devToolsWebContents.id===r.id));e&&e.closeDevTools()}else r.send(`/repl/${t}`,{command:e})}))}}]);