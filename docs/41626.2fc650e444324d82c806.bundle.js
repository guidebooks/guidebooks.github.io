"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[41626],{99620:(e,n,t)=>{t.d(n,{Z:()=>o});const o="github.com/kui-shell/plugin-kubectl/v1alpha1"},41626:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var o=t(21030),a=t(99620);function l(e){return e.apiVersion===a.Z&&"HelmRelease"===e.kind}const m={when:l,mode:{mode:"hooks",label:(0,o.i18n)("plugin-kubectl","helm")("Hooks"),content:(e,n)=>({contentFrom:`helm get hooks ${n.metadata.name}`,contentType:"yaml"})}},u={when:l,mode:{mode:"manifest",label:(0,o.i18n)("plugin-kubectl","helm")("Manifest"),content:(e,n)=>({contentFrom:`helm get manifest ${n.metadata.name}`,contentType:"yaml"})}},c={when:l,mode:{mode:"values",label:(0,o.i18n)("plugin-kubectl","helm")("Values"),content:(e,n)=>({contentFrom:`helm get values ${n.metadata.name}`,contentType:"json"})}},i={when:l,mode:{mode:"notes",label:(0,o.i18n)("plugin-kubectl","helm")("Notes"),content:(e,n)=>({contentFrom:`helm get notes ${n.metadata.name}`,contentType:"text/markdown"})}},s={when:l,mode:{mode:"status",label:(0,o.i18n)("plugin-kubectl","helm")("Show Status"),kind:"drilldown",command:(e,n)=>`helm status ${n.metadata.name}`}};var d=function(e,n,t,o){return new(t||(t=Promise))((function(a,l){function m(e){try{c(o.next(e))}catch(e){l(e)}}function u(e){try{c(o.throw(e))}catch(e){l(e)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(m,u)}c((o=o.apply(e,n||[])).next())}))};const h=e=>d(void 0,void 0,void 0,(function*(){yield e.registerModes(m,u,c,i,s)}))}}]);