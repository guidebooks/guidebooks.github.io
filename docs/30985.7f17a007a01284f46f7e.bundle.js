(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[30985,41369],{61508:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var i=t(41833),o=t(186),u=function(n,e,t,i){return new(t||(t=Promise))((function(o,u){function r(n){try{s(i.next(n))}catch(n){u(n)}}function l(n){try{s(i.throw(n))}catch(n){u(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(r,l)}s((i=i.apply(n,e||[])).next())}))};function r(n){return u(this,void 0,void 0,(function*(){const{commandToPlugin:e,flat:t,usage:u,docs:r}=(0,i.prescanModel)(),l=[];if(!!!t.find((({route:e})=>e===n))){const e=new Error(`Plugin ${n} is not installed`);throw e.code=404,e}for(const t in e){const i=e[t];n&&i===n&&l.push(t)}function s(n,e=n.split("/"),t=2,i=`/${e[1]}`,o=u[i]){if(o){if(e.length-t==0)return o.usage;if(o.children){const u=`${i}/${e[t]}`;return s(n,e,t+1,u,o.children[u])}}}return l.sort(((n,e)=>-n.localeCompare(e))),{header:{name:"command",attributes:[{value:"About"}]},body:l.map((n=>({command:n,usage:s(n),name:n.replace(/^\//,"").replace(/\//g," ")}))).filter((n=>!n.usage||!n.usage.synonymFor&&!n.usage.children)).map((({command:n,name:e})=>({type:"command",name:o.env.KUI_BIN_PREFIX_FOR_COMMANDS?`${o.env.KUI_BIN_PREFIX_FOR_COMMANDS} ${e}`:e,attributes:[{key:"about",value:r[n]}],onclick:e})))}}))}},67329:n=>{function e(n){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=67329,n.exports=e},80534:(n,e,t)=>{var i={"./plugin-bash-like/fs/mdist/plugin":[10987,10987],"./plugin-bash-like/mdist/plugin":[30890,8575,79267,29224,79083],"./plugin-client-common/mdist/plugin":[18890,18890],"./plugin-core-support/about/mdist/plugin":[33244,33244],"./plugin-core-support/mdist/plugin":[23814,23814],"./plugin-core-support/up/mdist/plugin":[66136,8575,79267,29224,66136,56621],"./plugin-example/mdist/plugin":[41303,41303],"./plugin-kubectl/helm/mdist/plugin":[86208,58853,54527],"./plugin-kubectl/krew/mdist/plugin":[83836,58853,72032],"./plugin-kubectl/logs/mdist/plugin":[94640,58853,8942],"./plugin-kubectl/mdist/plugin":[5787,58853,91562],"./plugin-kubectl/oc/mdist/plugin":[58719,58853,53245],"./plugin-kubectl/odo/mdist/plugin":[65148,58853,38840],"./plugin-kubectl/view-utilization/mdist/plugin":[72195,58853,72828]};function o(n){if(!t.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],o=e[0];return Promise.all(e.slice(1).map(t.e)).then((()=>t(o)))}o.keys=()=>Object.keys(i),o.id=80534,n.exports=o},8176:(n,e,t)=>{var i={"./plugin-bash-like/fs/mdist/preload":[7191,7191],"./plugin-bash-like/mdist/preload":[54047,54047],"./plugin-core-support/mdist/preload":[13412,13412],"./plugin-example/mdist/preload":[98163,58853,1272,90270],"./plugin-kubectl/helm/mdist/preload":[11778,11778],"./plugin-kubectl/mdist/preload":[71055,71055]};function o(n){if(!t.o(i,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[n],o=e[0];return Promise.all(e.slice(1).map(t.e)).then((()=>t(o)))}o.keys=()=>Object.keys(i),o.id=8176,n.exports=o},82302:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var i=function(n,e,t,i){return new(t||(t=Promise))((function(o,u){function r(n){try{s(i.next(n))}catch(n){u(n)}}function l(n){try{s(i.throw(n))}catch(n){u(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(r,l)}s((i=i.apply(n,e||[])).next())}))};const o=()=>i(void 0,void 0,void 0,(function*(){}))}}]);