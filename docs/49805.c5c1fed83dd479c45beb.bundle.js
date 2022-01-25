/*! For license information please see 49805.c5c1fed83dd479c45beb.bundle.js.LICENSE.txt */
(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[49805],{49805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(11227),i=n.n(r),o=n(67953),u=n(80226),a=n(186),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))};const l=i()("plugins/bash-like/pty/prefetch");function s(){return new Promise(((e,t)=>c(this,void 0,void 0,(function*(){if(a.env.TERM||"win32"===a.platform)return l("skipping prefetchEnv"),e();l("prefetchEnv");const{getLoginShell:r}=yield Promise.all([n.e(8575),n.e(79267),n.e(29224),n.e(10561)]).then(n.bind(n,29224)),i=yield r();l("prefetchEnv got shell",i),(0,o.exec)(`${i} -l -c printenv`,((n,r,i)=>{try{if(i&&l(i),n)l("error in prefetchEnv 1",n),t(n);else{const t=u.parse(r.toString());l("got env",t);for(const e in t)"_"!==e&&(a.env[e]=t[e]);e()}}catch(n){console.error("error in prefetchEnv 2",n),t(n)}}))}))))}function p(){return new Promise(((e,t)=>c(this,void 0,void 0,(function*(){if(a.env.HOME)return l("skipping prefetchHome"),e();(0,o.exec)("eval echo ~",((n,r,i)=>{try{if(i&&l(i),n)l("Error retrieving HOME",n);else{const e=r.toString();l("got HOME",e),a.env._HOME=e}}catch(n){t(n)}finally{e()}}))}))))}const f=()=>Promise.all([s(),p()]).then((()=>{a.env._HOME&&!a.env.HOME&&(a.env.HOME=a.env._HOME,delete a.env._HOME)})).catch((e=>{console.error("error prefetching state",e)}))},80226:(e,t,n)=>{n(24191);var r=n(59676);function i(e){var t=0,n=e.length;this.peek=function(r){return t+(r=r||0)>=n?null:e.charAt(t+r)},this.next=function(r){return r=r||1,t>=n?null:e.charAt((t+=r)-r)},this.pos=function(){return t}}var o=/\s/;function u(e){return o.test(e)}function a(e){for(var t=e.pos();u(e.peek());)e.next();return{type:"whitespace",start:t,end:e.pos()}}function c(e){return"!"===e||"#"===e}function l(e){return null==e||"\n"===e||"\r"===e}function s(e){for(var t=e.pos();!l(e.peek());)e.next();return{type:"comment",start:t,end:e.pos()}}function p(e){return"\\"===e}function f(e){var t=e.pos();return e.next(),"u"===e.next()&&e.next(4),{type:"escaped-value",start:t,end:e.pos()}}function h(e){for(var t,n,r=e.pos(),i=[];null!==(t=e.peek())&&"="!==(n=t)&&":"!==n&&!u(n);)p(t)?i.push(f(e)):e.next();return{type:"key",start:r,end:e.pos(),children:i}}function v(e){for(var t,n=e.pos(),r=!1;null!==(t=e.peek())&&!l(t);)if(u(t))e.next();else{if(r)break;if(!(r=":"===t||"="===t))break;e.next()}return{type:"key-value-separator",start:n,end:e.pos()}}function d(e){return"\\"===e.peek()&&l(e.peek(1))}function y(e){var t,n=e.pos();for(e.next(),"\r"===e.peek()&&e.next(),e.next();null!==(t=e.peek())&&!l(t)&&u(t);)e.next();return{type:"line-break",start:n,end:e.pos()}}function g(e){for(var t,n=e.pos(),r=[];null!==(t=e.peek());)if(d(e))r.push(y(e));else if(p(t))r.push(f(e));else{if(l(t))break;e.next()}return{type:"value",start:n,end:e.pos(),children:r}}function k(e){return{type:"key-value",start:e.pos(),children:[h(e),v(e),g(e)],end:e.pos()}}var x={"escaped-value":function(e,t){var n=t.charAt(e.start+1);return"t"===n?"\t":"r"===n?"\r":"n"===n?"\n":"f"===n?"\f":"u"!==n?n:String.fromCharCode(parseInt(t.substr(e.start+2,4),16))},"line-break":function(e,t){return""}};function b(e,t){for(var n=e.start,r=[],i=0;i<e.children.length;i++){var o=e.children[i];r.push(t.substring(n,o.start)),r.push(x[o.type](o,t)),n=o.end}return r.push(t.substring(n,e.end)),r}function w(e,t){for(var n=Object.create(null),r=0;r<e.length;r++){var i=e[r];if("key-value"===i.type){var o=b(i.children[0],t).join(""),u=b(i.children[2],t).join("");n[o]=u}}return n}function m(e){for(var t,n,r=new i(e),o=[];null!==(t=r.peek());)if(u(t))o.push(a(r));else if(c(t))o.push(s(r));else{if(u(n=t)||c(n))throw Error("Something crazy happened. text: '"+e+"'; curChar: '"+t+"'");o.push(k(r))}return o}function E(e){return!!e&&("whitespace"===e.type||"literal"===e.type&&(u(e.text)&&e.text.indexOf("\n")>-1))}function S(e){return function(t){for(var n=["","0","00","000"],r=[],i=0;i<t.length;i++){var o=t.charAt(i);if(e[o])r.push(e[o]);else{var u=o.codePointAt(0);if(u<=127)r.push(o);else{var a=u.toString(16);r.push("\\u"),r.push(n[4-a.length]),r.push(a)}}}return r.join("")}}var O=S({" ":"\\ ","\n":"\\n",":":"\\:","=":"\\="}),A=S({"\n":"\\n"});function H(e,t){"object"==typeof e&&(t=e,e=null),e=e||"";for(var n=t.path,i=t.separator||"=",o=m(e),u=w(o,e),a=Object.create(null),c=0;c<o.length;c++){var l=o[c];if("key-value"===l.type){var s=b(l.children[0],e).join("");a[s]=l}}this.addHeadComment=function(e){null!=e&&o.unshift({type:"literal",text:"# "+e.replace(/\n/g,"\n# ")+"\n"})},this.get=function(e){return u[e]},this.set=function(e,t,n){if(null!=t){u[e]=t;var r=O(e),c=A(t),l=a[e];if(!l){a[e]=l={type:"literal",text:r+i+c};var s=o[o.length-1];null==s||E(s)||o.push({type:"literal",text:"\n"}),o.push(l)}if(void 0!==n&&(l.comment=n&&"# "+n.replace(/\n/g,"\n# ")+"\n"),"literal"===l.type)l.text=r+i+c,null!=l.comment&&(l.text=l.comment+l.text);else{if("key-value"!==l.type)throw"Unknown node type: "+l.type;l.children[2]={type:"literal",text:c}}}else this.unset(e)},this.unset=function(e){if(e in u){var t=a[e],n=o.indexOf(t);o.splice(n,E(o[n+1])?2:1),delete a[e],delete u[e]}},this.valueOf=this.toString=function(){for(var t,n=[],r=[].concat(o);null!=(t=r.shift());)switch(t.type){case"literal":n.push(t.text);break;case"key":case"value":case"comment":case"whitespace":case"key-value-separator":case"escaped-value":case"line-break":n.push(e.substring(t.start,t.end));break;case"key-value":Array.prototype.unshift.apply(r,t.children),t.comment&&r.unshift({type:"literal",text:t.comment})}return n.join("")},this.save=function(e,t){if("function"==typeof e&&(t=e,e=n),!(e=e||n)){if(t)return t("Unknown path");throw new Error("Unknown path")}t?r.writeFile(e,this.toString(),t):r.writeFileSync(e,this.toString())}}function j(e){return w(m(e=e.toString()),e)}e.exports={parse:j,read:function(e,t){return t?r.readFile(e,(function(e,n){return e?t(e,null):t(null,j(n))})):j(r.readFileSync(e))},createEditor:function(){for(var e,t,n,i=Array.prototype.slice.call(arguments),o=0;o<i.length;o++){var u=i[o];e||"string"!=typeof u?t||"object"!=typeof u?n||"function"!=typeof u||(n=u):t=u:e=u}return t=t||{},e=e||t.path,n=n||t.callback,t.path=e,e?n?r.readFile(e,(function(e,r){return e?n(e,null):(r=r.toString(),n(null,new H(r,t)))})):new H(r.readFileSync(e).toString(),t):new H(t)}}},24191:()=>{String.prototype.codePointAt||function(){"use strict";var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),t=function(e){if(null==this)throw TypeError();var t=String(this),n=t.length,r=e?Number(e):0;if(r!=r&&(r=0),!(r<0||r>=n)){var i,o=t.charCodeAt(r);return o>=55296&&o<=56319&&n>r+1&&(i=t.charCodeAt(r+1))>=56320&&i<=57343?1024*(o-55296)+i-56320+65536:o}};e?e(String.prototype,"codePointAt",{value:t,configurable:!0,writable:!0}):String.prototype.codePointAt=t}()},67953:()=>{},59676:()=>{}}]);