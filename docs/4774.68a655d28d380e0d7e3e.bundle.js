"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[4774],{14774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),s=n(26470),r=n(21030);const o=a.lazy((()=>n.e(8758).then(n.bind(n,78758)))),c=a.lazy((()=>Promise.all([n.e(176),n.e(9747),n.e(8544)]).then(n.bind(n,6487))));class i extends a.PureComponent{sourceRefContent(e,t){return()=>a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement(c,{tabUUID:(0,r.getPrimaryTabId)(this.props.tab),content:e.replace(/\n$/,""),contentType:t,className:"kui--source-ref-editor",fontSizeAdjust:12/14,simple:!0}))}render(){const{response:e}=this.props;if(e&&(0,r.isTable)(e)&&(0,r.hasSourceReferences)(e)){const t=e.kuiSourceRef,n=t.templates.concat(t.customization||[]).map((e=>(0,s.basename)(e.filepath))),r=t.templates.map((e=>this.sourceRefContent(e.data,e.contentType))).concat(t.customization?this.sourceRefContent(t.customization.data,"yaml"):[]);return a.createElement("div",{className:"repl-input-sourceref"},a.createElement("div",{className:"repl-context"}),a.createElement(o,{names:n,isWidthConstrained:this.props.isWidthConstrained||!1,tab:this.props.tab,content:r,className:"no-padding"}))}return a.createElement(a.Fragment,null)}}}}]);