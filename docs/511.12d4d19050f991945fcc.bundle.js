(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[511,3296],{83137:(t,e,n)=>{"use strict";n.d(e,{w:()=>s,Z:()=>a});var i=n(26470),o=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function c(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}a((i=i.apply(t,e||[])).next())}))};function s(t,e,s={}){return o(this,void 0,void 0,(function*(){const{mkdir:o,writeFile:r,appendFile:c}=yield n.e(3296).then(n.t.bind(n,53296,23)),a=t.replace(/"/g,"");yield new Promise(((t,n)=>{const d=e=>{if(e)if("ENOENT"===e.code){const t=new Error(e.message);t.stack=e.stack,t.code=404,n(t)}else n(e);else t(!0)},u=(t,e)=>s.append?c(t,e,d):r(t,e,d),l=(0,i.dirname)(a);"."!==l?o(l,{recursive:!0},(()=>u(a,e))):u(a,e)}))}))}const r=({argvNoOptions:t,execOptions:e,parsedOptions:n})=>o(void 0,void 0,void 0,(function*(){const i=t[1],o=e.data,r=n&&(n.append||n.a);return yield s(i,o,{append:r}),!0}));function c(t){return o(this,void 0,void 0,(function*(){const{mkTemp:e}=yield n.e(1070).then(n.bind(n,51070)),i=t.execOptions.data,{content:o}=yield e();return yield s(o,i),{mode:"raw",content:o}}))}const a=t=>{t.listen("/fwrite",r,{hidden:!0,requiresLocal:!0}),t.listen("/fwriteTemp",c,{hidden:!0,requiresLocal:!0})}},40511:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>P});var i=n(42635),o=n(16575),s=n(42830),r=n(21030),c=n(42007),a=n(67435),d=n(53296),u=n(186),l=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function c(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}a((i=i.apply(t,e||[])).next())}))};const p=(0,r.i18n)("plugin-bash-like");function f(t,e,n,i){const{mode:o}=t;return`${n?"d":i?"l":e?"-":"s"}${o&d.constants.S_IRUSR?"r":"-"}${o&d.constants.S_IWUSR?"w":"-"}${o&d.constants.S_IXUSR?"x":"-"}${o&d.constants.S_IRGRP?"r":"-"}${o&d.constants.S_IWGRP?"w":"-"}${o&d.constants.S_IXGRP?"x":"-"}${o&d.constants.S_IROTH?"r":"-"}${o&d.constants.S_IWOTH?"w":"-"}${o&d.constants.S_IXOTH?"x":"-"}`}function h(t){return l(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{(0,d.stat)(t,((t,i)=>{t?"ENOENT"===t.code||"ENOTDIR"===t.code?e(void 0):n(t):e(i)}))}))}))}const v=()=>!1,m=()=>!0;var y=n(186),w=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function c(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}a((i=i.apply(t,e||[])).next())}))};function g(t){return new Promise(((e,n)=>{(0,d.readFile)(t,((t,i)=>{t?n(t):e(i.toString())}))}))}const O=({argvNoOptions:t,parsedOptions:e})=>{const n=t[1],i="open",o=r.Util.expandHomeDir(n),s=o.replace(new RegExp(`^${y.env.HOME}`),"~");return new Promise(((t,r)=>{(0,d.stat)(o,((c,a)=>w(void 0,void 0,void 0,(function*(){c?(o=>{if("ENOENT"===o.code){e["enoent-ok"]&&t({viewer:i,filepath:n,fullpath:s,isDirectory:!1,size:0,data:""});const c=new Error(o.message);c.stack=o.stack,c.code=404,r(c)}else r(o)})(c):t({viewer:i,filepath:n,fullpath:s,isDirectory:a.isDirectory(),size:a.size,data:!a.isDirectory()&&e["with-data"]&&!n.endsWith(".gz")&&a.size<10485760?yield g(o):""})}))))}))};var x=n(83137),b=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function c(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}a((i=i.apply(t,e||[])).next())}))};class S{constructor(){this.mountPath="/",this.isLocal=!0,this.isVirtual=!1}ls(t,e){return b(this,void 0,void 0,(function*(){return function(t,{tab:e,argvNoOptions:i,parsedOptions:o}){return l(this,void 0,void 0,(function*(){const s=n(95538),c=i.slice(i.indexOf("kuiglob")+1).map(r.Util.expandHomeDir).map((t=>t.replace(/([^\\])"/g,"$1"))),l=0===c.length?[]:yield Promise.all(c.map(h)),y=l.map((t=>t&&t.isDirectory())),w=c.filter(((t,e)=>!o.d||!y[e])).reduce(((t,e,n)=>{if(!o.d){if(y[n])return t.push(e.endsWith("/")?`${e}*`:`${e}/*`),t;if(e.endsWith("*"))return t.push(e),t.push(`${e}/*`),t}return t.push(e),t}),[]),g=o.l||o.C,O=0===w.length&&c.length>0?[]:yield s(0===w.length?["*"]:w,{onlyFiles:!1,suppressErrors:!0,expandDirectories:!1,followSymbolicLinks:!1,dot:o.a||o.all,stats:g,objectMode:!g,cwd:r.Capabilities.isHeadless()?u.cwd():e.state.getState("plugins/plugin-bash-like","v1","cwd")}),x=o.d?c.map(((t,e)=>y[e]?{name:t,path:t,dirent:{isFile:v,isSymbolicLink:v,isDirectory:m},stats:l[e]}:void 0)).filter((t=>t)):[],b=O.concat(x);if(0===b.length&&!c.some((t=>/\*/.test(t)))&&!y.some((t=>t))){const t=new Error(p("No such file or directory",c.join(" ")));throw t.code=404,t}const S=(0,a.userInfo)();return b.map((({name:e,path:n,dirent:i,stats:s})=>{const r=i.isFile(),c=i.isDirectory(),a=i.isSymbolicLink(),u=s&&!!(s.mode&(d.constants.S_IXUSR|d.constants.S_IXGRP|d.constants.S_IXOTH)),l=!r&&!c&&!a;return{name:e,path:n,nameForDisplay:w.length>1?n:e,stats:s,dirent:{isFile:r,isDirectory:c,isSymbolicLink:a,isExecutable:u,isSpecial:l,mount:{isLocal:t.isLocal,tags:t.tags,mountPath:t.mountPath},permissions:o.l?f(s,r,c,a):"",username:s&&S.uid===s.uid?S.username:""}}}))}))}(this,{tab:t.tab,argvNoOptions:["kuiglob",...e],parsedOptions:t.parsedOptions})}))}cp(t){return b(this,void 0,void 0,(function*(){return t.REPL.qexec(`sendtopty ${t.command.replace(/^vfs/,"")}`,void 0,void 0,Object.assign(t.execOptions,{quiet:!t.parsedOptions.i&&t.execOptions.quiet}))}))}rm(t){return b(this,void 0,void 0,(function*(){return yield t.REPL.qexec(`sendtopty ${t.command.replace(/^vfs/,"")}`,void 0,void 0,Object.assign(t.execOptions,{quiet:!1})),!0}))}fstat(t,e,n,i){return b(this,void 0,void 0,(function*(){return O({argvNoOptions:["fstat",e],parsedOptions:{"with-data":n,"enoent-ok":i}})}))}fwrite(t,e,n,i={}){return b(this,void 0,void 0,(function*(){return(0,x.w)(e,n,i)}))}pipe(t,e,n,s){const c=r.Util.expandHomeDir(t);return new Promise(((r,a)=>{t.endsWith(".gz")?(0,o.createReadStream)(c,{start:e,end:n?e+n-1:1/0}).pipe((0,i.createGunzip)()).pipe(s).on("error",(t=>{"Z_BUF_ERROR"===t.code?r():a(t)})).on("end",(()=>r())):(0,o.createReadStream)(c,{start:e,end:n?e+n-1:1/0}).pipe(s).on("error",a).on("end",r)}))}fslice(t,e,n){return b(this,void 0,void 0,(function*(){return new Promise(((i,o)=>b(this,void 0,void 0,(function*(){let r="";const c=new s.PassThrough;c.on("error",o),c.on("data",(t=>r+=t.toString()));try{yield this.pipe(t,e,n,c),i(r)}catch(t){o(t)}}))))}))}mkdir(t){return b(this,void 0,void 0,(function*(){yield t.REPL.qexec(`sendtopty ${t.command.replace(/^vfs/,"")}`,void 0,void 0,Object.assign(t.execOptions,{quiet:!1}))}))}rmdir(t){return b(this,void 0,void 0,(function*(){yield t.REPL.qexec(`sendtopty ${t.command.replace(/^vfs/,"")}`,void 0,void 0,Object.assign(t.execOptions,{quiet:!1}))}))}}const P=()=>b(void 0,void 0,void 0,(function*(){r.Capabilities.inBrowser()&&!r.Capabilities.hasProxy()||(0,c.LI)(new S)}))},53296:()=>{},16575:()=>{}}]);