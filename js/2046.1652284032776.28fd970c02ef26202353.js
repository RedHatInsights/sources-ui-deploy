"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[2046],{96845:(e,t,r)=>{r.d(t,{S:()=>o,Z:()=>s});var a=r(48815),n=r(27361),c=r.n(n),o=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return e||(t="Undefined error"),t||"string"!=typeof e||(t=e),t||(t=c()(e,"errors[0].detail",JSON.stringify(e,null,2))),r?(0,a.Rj)().deleteSource(r).then((function(){return t})).catch((function(e){var r=c()(e,"errors[0].detail",JSON.stringify(e,null,2));return"".concat(t,". The source was not removed, try remove it later: ").concat(r)})):t};const s=o},7995:(e,t,r)=>{r.d(t,{Z:()=>_,t:()=>E});var a=r(29439),n=r(92950),c=r.n(n),o=r(86896),s=r(89624),i=r(11306),u=r(63686),l=r(64408),d=r(4585),m=insights.chrome.isBeta()?"beta/":"",f="/".concat(m,"settings/connector"),p="/".concat(m,"insights/subscriptions/rhel"),E="ins-c-sources__cloud_cards_expanded",g=function(){var e=(0,n.useState)((function(){var e=sessionStorage.getItem(E);return!e||"true"===e})),t=(0,a.Z)(e,2),r=t[0],m=t[1],g=(0,o.Z)();return(0,n.useEffect)((function(){sessionStorage.setItem(E,r)}),[r]),c().createElement(s.Card,{isExpanded:r,className:"pf-u-mb-lg pf-u-mt-md pf-u-mt-0-on-md src-c-card-info"},c().createElement(s.CardHeader,{onExpand:function(){return m(!r)}},c().createElement(s.CardTitle,null,g.formatMessage({id:"cloud.nowWhat",defaultMessage:"I connected to cloud. Now what?"}))),c().createElement(s.CardExpandableContent,null,c().createElement(s.CardBody,null,c().createElement(s.TextContent,null,c().createElement(s.Grid,{hasGutter:!0},c().createElement(s.GridItem,{md:4},c().createElement(s.Stack,null,c().createElement(s.StackItem,{className:"pf-u-mb-sm"},c().createElement(s.Text,{className:"src-c-card-info__header"},c().createElement(u.ZP,{className:"pf-u-mr-sm",color:"#0066cc","aria-label":"Builder image icon"}),g.formatMessage({id:"cloud.goldImages",defaultMessage:"Use gold images"}))),c().createElement(s.StackItem,{isFilled:!0},c().createElement(s.Text,{className:"text pf-u-mb-sm"},g.formatMessage({id:"cloud.goldImages.description",defaultMessage:"Connecting to Amazon Web Services or Microsoft Azure unlocks automatic access to Red Hat gold images. View gold images in your provider console."})),c().createElement(s.Text,{className:"text",component:"a",href:"https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/red_hat_cloud_access_reference_guide/understanding-gold-images_cloud-access#using-gold-images-on-aws_cloud-access",target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.goldImages.awsLink",defaultMessage:"Use Red Hat gold images on AWS"})),c().createElement("br",null),c().createElement(s.Text,{className:"text",component:"a",href:"https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/red_hat_cloud_access_reference_guide/understanding-gold-images_cloud-access#using-gold-images-on-azure_cloud-access",target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.goldImages.azureLink",defaultMessage:"Use Red Hat gold images on Microsoft Azure"}))),c().createElement(s.StackItem,{className:"pf-u-mt-lg"},c().createElement(s.Text,{className:"text",component:"a",href:"https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/red_hat_cloud_access_reference_guide/understanding-gold-images_cloud-access",target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.goldImages.moreLink",defaultMessage:"Learn more about Red Hat gold images"}),c().createElement(i.ZP,{className:"pf-u-ml-sm"}))))),c().createElement(s.GridItem,{md:4},c().createElement(s.Stack,null,c().createElement(s.StackItem,{className:"pf-u-mb-sm"},c().createElement(s.Text,{className:"src-c-card-info__header"},c().createElement(l.ZP,{className:"pf-u-mr-sm",color:"#0066cc","aria-label":"Trend up icon"}),g.formatMessage({id:"cloud.insights",defaultMessage:"Explore Red Hat Insights"}))),c().createElement(s.StackItem,{isFilled:!0},c().createElement(s.Text,{className:"text pf-u-mb-sm"},g.formatMessage({id:"cloud.insights.description",defaultMessage:"Use RHEL instances in the cloud and gain other value-add services, such as predictive analytics."})),c().createElement(s.Text,{className:"text",component:"a",href:"https://www.redhat.com/en/technologies/management/insights",target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.insights.insightsLinkt",defaultMessage:"Learn more about Red Hat Insights"}))),c().createElement(s.StackItem,{className:"pf-u-mt-lg"},c().createElement(s.Text,{className:"text",component:"a",href:f,target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.insights.moreLink",defaultMessage:"Enable additional Insights services"}),c().createElement(i.ZP,{className:"pf-u-ml-sm"}))))),c().createElement(s.GridItem,{md:4},c().createElement(s.Stack,null,c().createElement(s.StackItem,{className:"pf-u-mb-sm"},c().createElement(s.Text,{className:"src-c-card-info__header"},c().createElement(d.ZP,{className:"pf-u-mr-sm",color:"#0066cc","aria-label":"List icon"}),g.formatMessage({id:"cloud.subwatch",defaultMessage:"Track usage with Subscriptions"}))),c().createElement(s.StackItem,{isFilled:!0},c().createElement(s.Text,{className:"text pf-u-mb-sm"},g.formatMessage({id:"cloud.subwatch.description",defaultMessage:"Use the Subscriptions service to monitor account-level summaries of your Red Hat subscription profile."})),c().createElement(s.Text,{className:"text",component:"a",href:"https://access.redhat.com/products/subscription-central",target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.subwatch.learnMore",defaultMessage:"Learn more about Subscriptions"}))),c().createElement(s.StackItem,{className:"pf-u-mt-lg"},c().createElement(s.Text,{className:"text",component:"a",href:p,target:"_blank",rel:"noopener noreferrer"},g.formatMessage({id:"cloud.subwatch.goTo",defaultMessage:"Go to Subscriptions"}),c().createElement(i.ZP,{className:"pf-u-ml-sm"}))))))))))};const _=c().memo(g)},13458:(e,t,r)=>{r.d(t,{$g:()=>p,BW:()=>d,Gs:()=>f,Q9:()=>l,aE:()=>m,aI:()=>o,dD:()=>i,ei:()=>s,lN:()=>u});var a=r(4942);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=["LOAD_ENTITIES","CREATE_SOURCE","REMOVE_SOURCE","LOAD_SOURCE_TYPES","LOAD_APP_TYPES","REMOVE_APPLICATION","RENAME_SOURCE"].reduce((function(e,t){var r;return c(c({},e),{},(r={},(0,a.Z)(r,t,t),(0,a.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,a.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,a.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{}),s="SORT_ENTITIES",i="PAGE_AND_SIZE",u="FILTER_SOURCES",l="ADD_APP_TO_SOURCE",d="SET_COUNT",m="ADD_HIDDEN_SOURCE",f="CLEAR_FILTERS",p="SET_CATEGORY"},11146:(e,t,r)=>{r.d(t,{AX:()=>C,Bb:()=>y,Gd:()=>P,Hz:()=>O,K5:()=>D,OU:()=>S,Qr:()=>R,WP:()=>h,Yn:()=>T,_B:()=>M,d4:()=>v,il:()=>_,qJ:()=>b,wZ:()=>N,xz:()=>L,zm:()=>I});var a=r(4942),n=r(92950),c=r.n(n),o=r(17546),s=r(27957),i=r(83215),u=r(13458),l=r(48815),d=r(2043),m=r(36488),f=r(96845),p=r(84569);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){return function(t,r){t({type:u.aI.LOAD_ENTITIES_PENDING,options:"function"==typeof e?e(r):e});var a=r().sources,n=a.pageSize,c=a.pageNumber,o=a.sortBy,s=a.sortDirection,i=a.filterValue,d=a.activeCategory;return(0,l.uc)({pageSize:n,pageNumber:c,sortBy:o,sortDirection:s,filterValue:i,activeCategory:d}).then((function(e){var r=e.sources,a=e.meta;return t({type:u.aI.LOAD_ENTITIES_FULFILLED,payload:{sources:r,meta:a}})})).catch((function(e){return t({type:u.aI.LOAD_ENTITIES_REJECTED,meta:{noError:!0},payload:{error:{detail:e.detail||e.data,title:e.title||"Fetching data failed, try refresh page"}}})}))}},h=function(){return function(e){return e({type:u.aI.LOAD_SOURCE_TYPES_PENDING}),(0,d.l)().then((function(t){return e({type:u.aI.LOAD_SOURCE_TYPES_FULFILLED,payload:t})})).catch((function(t){return e({type:u.aI.LOAD_SOURCE_TYPES_REJECTED,payload:{error:t},meta:{noError:!0}})}))}},b=function(){return function(e){return e({type:u.aI.LOAD_APP_TYPES_PENDING}),(0,l.M5)().then((function(t){return e({type:u.aI.LOAD_APP_TYPES_FULFILLED,payload:t.data})})).catch((function(t){return e({type:u.aI.LOAD_APP_TYPES_REJECTED,payload:{error:t},meta:{noError:!0}})}))}},y=function(e,t){return function(r){return r({type:u.ei,payload:{column:e,direction:t}}),r(_())}},I=function(e,t){return function(r){return r({type:u.dD,payload:{page:e,size:t}}),r(_({paginationClicked:!0}))}},S=function(e){return function(t){return t({type:u.lN,payload:{value:e}}),t(_())}},O=function(e){return function(t){return t({type:i.Dv,payload:g({dismissable:!0},e)})}},N=function(e,t){return function(r){return r({type:u.aI.REMOVE_SOURCE_PENDING,meta:{sourceId:e}}),(0,l.TA)(e).then((function(){return r(_({loaded:0}))})).then((function(){r({type:u.aI.REMOVE_SOURCE_FULFILLED,meta:{sourceId:e}}),r(O({title:t,variant:"success"}))})).catch((function(){return r({type:u.aI.REMOVE_SOURCE_REJECTED,meta:{sourceId:e}})}))}},P=function(e){return{type:i.Kf,payload:e}},T=function(e,t,r,a){return{type:u.aI.REMOVE_APPLICATION,payload:function(){return(0,l.rL)(e,a)},meta:{appId:e,sourceId:t,notifications:{fulfilled:{variant:"success",title:r,dismissable:!0}}}}},M=function(e){return{type:u.aE,payload:{source:e}}},D=function(){return function(e){return e({type:u.Gs}),e(_())}},v=function(e,t,r){return function(a,n){var c,o=null===(c=n().sources.entities.find((function(t){return t.id===e})))||void 0===c?void 0:c.name;return a({type:u.aI.RENAME_SOURCE_PENDING,payload:{id:e,name:t}}),(0,l.Rj)().updateSource(e,{name:t}).catch((function(t){var n,c;return a({type:u.aI.RENAME_SOURCE_REJECTED,payload:{error:{detail:(null===(n=t.errors)||void 0===n||null===(c=n[0])||void 0===c?void 0:c.detail)||t,title:r},id:e,name:o}})}))}},R=function(e){return function(t){return t({type:u.$g,payload:{category:e}}),t(_())}},L=function(e,t,r){return function(a){return(0,l.Rj)().pauseSource(e).then((function(){a(O({title:r.formatMessage({id:"source.paused.alert.title",defaultMessage:"Source paused"}),description:r.formatMessage({id:"source.paused.alert.description",defaultMessage:"Source <b>{ sourceName }</b> is now paused. Data collection for all connected applications will be disabled until the source is resumed."},{sourceName:t,b:m.S}),variant:"default",customIcon:c().createElement(o.ZP,null)})),a(_({loaded:0}))})).catch((function(e){a(O({title:r.formatMessage({id:"source.paused.alert.error",defaultMessage:"Source pause failed"}),description:(0,p.Z)(r,(0,f.Z)(e)),variant:"danger"}))}))}},C=function(e,t,r){return function(a){return(0,l.Rj)().unpauseSource(e).then((function(){a(O({title:r.formatMessage({id:"source.resumed.alert.title",defaultMessage:"Source resumed"}),description:r.formatMessage({id:"source.resumed.alert.description",defaultMessage:"Source <b>{ sourceName }</b> will recontinue data collection for connected applications."},{sourceName:t,b:m.S}),variant:"default",customIcon:c().createElement(s.ZP,null)})),a(_({loaded:0}))})).catch((function(e){a(O({title:r.formatMessage({id:"source.resume.alert.error",defaultMessage:"Source resume failed"}),description:(0,p.Z)(r,(0,f.Z)(e)),variant:"danger"}))}))}}},36488:(e,t,r)=>{r.d(t,{S:()=>o});var a=r(92950),n=r.n(a),c=0,o=function(e){return n().createElement("b",{key:"b-".concat(e.length,"-").concat(c++,"}")},e)}},84569:(e,t,r)=>{r.d(t,{Z:()=>a});const a=function(e,t){return e.formatMessage({id:"tryAgain.text",defaultMessage:"{ error }. Please try again."},{error:t})}}}]);