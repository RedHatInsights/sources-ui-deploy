(self.webpackChunksources=self.webpackChunksources||[]).push([[593,5467],{84414:(e,t,a)=>{"use strict";a.d(t,{a:()=>l});var s=a(48947),r=a(78116);const l=()=>{const e=(0,s.useNavigate)();return(t,a)=>e((0,r.n)(t,r.d),a)}},86479:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Oe});var s=a(28416),r=a.n(s),l=a(86706),i=a(31055),o=a(50247),n=a(25387),c=a(96380),d=a(22663),u=a(31611),m=a(7876),p=a(46639),f=a(78596),g=a(11549),v=a(35240),y=a(46818),b=a(7732),E=a(21081),h=a(49004),M=a(34844),S=a(31665),T=a(63663),k=a(2012),C=a(74503),w=a(95376),_=a(72232),N=a(58826),B=a.n(N);const z=()=>{const e=(0,n.YB)(),t=(0,l.I0)();return r().createElement(C.Bullseye,null,r().createElement(w.EmptyState,{variant:w.EmptyStateVariant.small},r().createElement(w.EmptyStateIcon,{icon:B()}),r().createElement(_.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),r().createElement(w.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),r().createElement(i.Button,{variant:"link",onClick:()=>t((0,S.K5)())},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var A=a(15185),x=a(82866),I=a(87281),L=a(42399),R=a(84414);const Z=(e,t,a,s)=>t.filter((e=>e.title||e.hidden)).map((t=>({title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:a,appTypes:s}):e[t.value]||""}))),F=(e,t,a,s,r)=>e.filter((({hidden:e})=>!e)).reduce(((e,l)=>{const i=r.includes(l.id);return[...e,{...l,originalName:l.name,isOpen:!!l.expanded,cells:Z(l,t,a,s),disableActions:i,isDeleting:i}]}),[]),D=e=>e.filter((e=>e.title||e.hidden)).map((e=>({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[y.WT],...e.sortable&&{transforms:[b.p,y.WT]}}))),O=(e,t)=>({...e,...t,key:e.key+1}),j=(e,t,a,s,r)=>l=>{const i=(0,L.Z)(e,r),o=[];return l.paused_at?o.push({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:(t,a,{id:r})=>s((0,S.AX)(r,l.originalName,e)),...a?{component:"button"}:i}):o.push({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:(t,a,{id:r})=>s((0,S.xz)(r,l.originalName,e)),...a?{component:"button"}:i}),o.push({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:(e,a,{id:s})=>t((0,I.yS)(I._j.sourcesRemove.path,s)),...a?{component:"button"}:i}),o.push({title:l.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:(e,a,{id:s})=>t((0,I.yS)(I._j.sourcesDetail.path,s)),...a?{component:"button"}:i}),o},V=()=>{const e=(0,R.a)(),t=(0,n.YB)(),a=(0,A.W)(),i=(0,x.E)(),o=(0,l.v9)((({user:e})=>e.isOrgAdmin)),{appTypes:c,entities:d,sourceTypes:u,sourceTypesLoaded:m,appTypesLoaded:p,sortBy:f,sortDirection:g,numberOfEntities:v,removingSources:y}=(0,l.v9)((({sources:e})=>e),l.wU),b=(0,l.I0)(),C=0===v||!a,[w,_]=(0,s.useReducer)(O,(N=(0,k.E)(t,C),{rows:[],sortBy:{},isLoaded:!1,cells:D(N),key:0}));var N;const B=()=>{const e=(0,k.E)(t,C);return _({rows:F(d,e,u,c,y),cells:D(e)})};(0,s.useEffect)((()=>{a&&m&&p?(_({isLoaded:!0}),B()):(_({isLoaded:!1}),(()=>{const e=(0,k.E)(t,C);_({cells:D(e)})})())}),[a,m,p]),(0,s.useEffect)((()=>{w.isLoaded&&B()}),[d,y]);let I=w.rows;return 0===v&&w.isLoaded?I=[{heightAuto:!0,cells:[{props:{colSpan:k.W},title:r().createElement(z,null)}]}]:a&&p&&m||(I=[{heightAuto:!0,cells:[{props:{colSpan:k.W,className:"sources-placeholder-row"},title:r().createElement(T.mI,null)}]}]),r().createElement(E.i,{gridBreakPoint:"grid-lg","aria-label":t.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:(e,t,a)=>b((0,S.Bb)(w.cells[t].value,a)),sortBy:{index:w.cells.map((e=>e.hidden?"hidden":e.value)).indexOf(f),direction:g},key:w.key,rows:I,cells:w.cells,actionResolver:a&&v>0?j(t,e,i,b,o):void 0,rowWrapper:T.sk,className:0===v&&w.isLoaded?"ins-c-table-empty-state":""},r().createElement(h.x,null),r().createElement(M.R,null))};var W=a(99166),P=a(5904),H=a(63367),U=a(16872),K=a(32321);const Y=(0,W.Z)((e=>e()),500),G={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},q=e=>e.map((({id:e,product_name:t})=>({label:t,value:e}))).sort(((e,t)=>e.label.localeCompare(t.label))),X=e=>e.map((({id:e,display_name:t})=>({label:t,value:e}))).sort(((e,t)=>e.label.localeCompare(t.label))),$=(e,t,a)=>a((0,S.OU)({[e]:t})),J=(e,t,a,s)=>Object.keys(e).map((r=>e[r]&&e[r].length>0?((e,t,a,s,r)=>({name:()=>({name:t[e],key:e}),source_type_id:()=>({category:"Source Type",key:e,chips:t[e].map((e=>{const t=a.find((t=>t.id===e));return{name:t?t.product_name:e,value:e}}))}),applications:()=>({category:"Application",key:e,chips:t[e].map((e=>{const t=s.find((t=>t.id===e));return{name:t?t.display_name:e,value:e}}))}),availability_status:()=>({category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===H.Rl?r.formatMessage({id:"sources.available",defaultMessage:"Available"}):r.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]})}[e]||(()=>({name:e}))))(r,e,t,a,s)():void 0)).filter(Boolean),Q=(e,t)=>t&&e.length>0?e:void 0;var ee=a(39911),te=a(75614),ae=a(45697),se=a.n(ae),re=a(88094),le=a(64380);const ie=({src:e,...t})=>{const[a,l]=(0,s.useState)(!1);return r().createElement(r().Fragment,null,!a&&r().createElement(T.aN,{height:"40px",width:"110px",...t}),r().createElement("img",{src:e,"data-testid":"ImageWithPlaceholder",onLoad:()=>l(!0),style:{display:a?"initial":"none"},...t}))};ie.propTypes={src:se().string.isRequired};const oe=ie;var ne=a(39159);const ce=e=>{const t=(0,n.YB)(),a=(0,l.v9)((({user:e})=>e.isOrgAdmin)),s=(0,L.$)(t,a);return r().createElement(o.Tooltip,{content:s},r().createElement("div",{className:"disabled-tile-with-tooltip"},r().createElement(ne.Tile,{...e,isDisabled:!0})))};var de=a(31379);const ue=({setSelectedType:e,mapper:t})=>{const a=(0,l.v9)((({sources:e})=>e.sourceTypes),l.wU),s=(0,l.v9)((({sources:e})=>e.activeCategory)),r=(0,R.a)(),i=(0,x.E)(),o=t=>{e(t),r(I._j.sourcesNew.path)},n=i?ne.Tile:ce;return a.filter((0,de.j)(s)).sort(((e,t)=>e.product_name.localeCompare(t.product_name))).map((({name:e})=>t(e,o,n)))};ue.propTypes={setSelectedType:se().func.isRequired,mapper:se().func.isRequired};const me=ue,pe=(e,t,a)=>({amazon:r().createElement(a,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:()=>t("amazon"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:r().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:r().createElement(a,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",onClick:()=>t("google"),icon:r().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:r().createElement(a,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:()=>t("azure"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:r().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})}),ibm:r().createElement(a,{isStacked:!0,key:e,title:"IBM Cloud",onClick:()=>t("ibm"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:r().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/ibm-cloud.svg",alt:"ibm logo"})}),"oracle-cloud-infrastructure":r().createElement(a,{isStacked:!0,key:e,title:"Oracle Cloud Infrastructure",onClick:()=>t("oracle-cloud-infrastructure"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:r().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/oracle-short.svg",alt:"oracle logo"})})}[e]),fe=e=>r().createElement(me,{...e,mapper:pe}),ge=({setSelectedType:e})=>{const t=(0,n.YB)();return r().createElement(re.Card,{className:"src-c-card__cloud-empty-state pf-v5-u-mt-md pf-v5-u-mt-0-on-md"},r().createElement(re.CardTitle,null,t.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),r().createElement(re.CardBody,null,r().createElement(le.Text,null,t.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),r().createElement("div",{className:"provider-tiles pf-v5-u-mt-md pf-v5-u-mb-lg"},r().createElement(fe,{setSelectedType:e}))),r().createElement(re.CardFooter,{className:"cloud-footer"},r().createElement(le.Text,{className:"catalog-link pf-v5-u-mt-lg"},t.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:e=>r().createElement(le.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}))))};ge.propTypes={setSelectedType:se().func.isRequired};const ve=ge,ye=r().createElement(oe,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),be=(e,t,a)=>({openshift:r().createElement(a,{isStacked:!0,key:e,title:"OpenShift Container Platform",className:"tile pf-v5-u-mr-md-on-md pf-v5-u-mt-md pf-v5-u-mt-0-on-md",onClick:()=>t("openshift"),icon:ye})}[e]),Ee=e=>r().createElement(me,{...e,mapper:be}),he=({setSelectedType:e})=>{const t=(0,n.YB)();return r().createElement(re.Card,{className:"src-c-card__cloud-empty-state pf-v5-u-mt-md pf-v5-u-mt-0-on-md"},r().createElement(re.CardTitle,null,t.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),r().createElement(re.CardBody,null,r().createElement(le.Text,null,t.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),r().createElement("div",{className:"provider-tiles pf-v5-u-mt-md pf-v5-u-mb-lg"},r().createElement(Ee,{setSelectedType:e}))))};he.propTypes={setSelectedType:se().func.isRequired};const Me=he;var Se=a(12567),Te=a(63456),ke=a(39173),Ce=a(91397),we=a(22236),_e=a.n(we),Ne=a(57105),Be=a.n(Ne),ze=a(65220),Ae=a(55140);const xe=e=>{const{isBeta:t,getEnvironment:a}=(0,Ae.Z)(),s=(0,ze.useFlag)(e);return("prod"!==a()||!1!==t())&&s},Ie=()=>{const e=(0,n.YB)(),t=(0,l.I0)(),a=(0,l.v9)((({sources:e})=>e.activeCategory)),s=(0,ze.useFlag)("platform.sources.integrations"),i=xe("platform.sources.integrations.breakdown");return r().createElement(Ce.Tabs,{activeKey:a,onSelect:(e,a)=>t((0,S.Qr)(a)),className:"pf-v5-u-mt-md"},r().createElement(Ce.Tab,{eventKey:te.JL,title:r().createElement(r().Fragment,null,r().createElement(Ce.TabTitleIcon,null,r().createElement(Be(),{"aria-label":"Cloud Icon"})),r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:s?"Cloud":"Cloud sources"})))}),r().createElement(Ce.Tab,{eventKey:te.B0,title:r().createElement(r().Fragment,null,r().createElement(Ce.TabTitleIcon,null,r().createElement(_e(),{"aria-label":"Red Hat Icon"})),r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:s?"Red Hat":"Red Hat sources"})))}),(s||i)&&(i?r().createElement(r().Fragment,null,r().createElement(Ce.Tab,{eventKey:te.Q9,title:r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.communications",defaultMessage:"Communications"}))}),r().createElement(Ce.Tab,{eventKey:te._Z,title:r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.reporting",defaultMessage:"Reporting"}))}),r().createElement(Ce.Tab,{eventKey:te.XA,title:r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.webhooks",defaultMessage:"Webhooks"}))})):r().createElement(Ce.Tab,{eventKey:te.Du,title:r().createElement(Ce.TabTitleText,null,e.formatMessage({id:"sources.integrations",defaultMessage:"Integrations"}))})))},Le=r().memo((()=>{const e=(0,n.YB)(),t=(0,ze.useFlag)("platform.sources.integrations")||xe("platform.sources.breakdown");return r().createElement(Te.Z,{className:"pf-v5-u-pb-0"},r().createElement(ke.Z,{title:e.formatMessage(t?{id:"sources.integrations",defaultMessage:"Integrations"}:{id:"sources.sources",defaultMessage:"Sources"})}),r().createElement(Ie,null))})),Re=(e,t,a,s)=>{switch(e){case"applications":return t.map((({application_type_id:e})=>a.find((({id:t})=>t===e))?.display_name)).join(",");case"source_type_id":return s.find((({id:e})=>e===t))?.product_name;default:return t}};var Ze=a(48947);const Fe={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},De=(e,{type:t,value:a,selectedType:s,initialValues:r,initialState:l})=>{switch(t){case"setFilterValue":return{...e,filter:a};case"setSelectedType":return{...e,selectedType:s};case"retryWizard":return{...e,wizardInitialState:l,wizardInitialValues:r};case"closeWizard":return{...e,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0}}},Oe=()=>{const[{filter:e,selectedType:t,wizardInitialState:a,wizardInitialValues:y},b]=(0,s.useReducer)(De,Fe),E=(0,A.W)(),h=(0,x.E)(),M=(0,l.v9)((({user:e})=>e.isOrgAdmin)),C=(0,ze.useFlag)("platform.sources.integrations")||xe("platform.sources.breakdown"),w=(0,R.a)(),_=(0,n.YB)(),N=(0,f.Z)(),B=(0,l.v9)((({sources:e})=>e),l.wU),{filterValue:z,numberOfEntities:L,appTypes:Z,pageSize:F,pageNumber:D,fetchingError:O,sourceTypes:j,paginationClicked:W,appTypesLoaded:ae,sourceTypesLoaded:se,activeCategory:re,entities:le}=B,ie=E&&se&&ae,oe=(0,l.I0)();(0,s.useEffect)((()=>{e!==z.name&&b({type:"setFilterValue",value:z.name})}),[z.name]);const ne=(e,t)=>oe((0,S.zm)(t,F)),ce=Math.ceil(L/F);(0,s.useEffect)((()=>{ie&&L>0&&D>Math.max(ce,1)&&ne(0,ce)}));const ue={itemCount:L,page:D,perPage:F,onSetPage:ne,onPerPageSelect:(e,t)=>oe((0,S.zm)(1,t)),className:"top-pagination"},me={...ue,dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"},pe=!(ie&&ae&&se||W),fe=j.filter((0,de.j)(re,!0)),ge=_.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),ye=M?_.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must add Sources Administrator permissions to your user."}):_.formatMessage({id:"sources.notPermissionsAddButton",defaultMessage:"To add a source, your Organization Administrator must grant you Sources Administrator permissions."});let be;(0,g.Z)(N)&&(be={dropdownProps:{position:"right"},actions:h?[{label:ge,props:{to:I._j.sourcesNew.path,component:c.Z}}]:[{label:ge,props:{component:"button",isDisabled:!0,tooltip:ye,tooltipProps:{content:ye},className:"src-m-dropdown-item-disabled"}}]});const Ee=Object.entries(z).map((([e,t])=>t&&(!Array.isArray(t)||Array.isArray(t)&&t.length>0))).filter(Boolean).length>0,he=ie&&0===L&&!Ee,Te=re===te.JL&&!he,ke=e=>b({type:"setSelectedType",selectedType:e}),Ce=[te.Du,te.Q9,te._Z,te.XA].includes(re)&&C?r().createElement(d.Z,{appName:"notifications",module:"./IntegrationsTable",activeCategory:re}):O||he?null:r().createElement(r().Fragment,null,r().createElement(u.Z,{pagination:pe?r().createElement(T.Xf,null):L>0?ue:void 0,actionsConfig:be||{dropdownProps:{position:"right"},actions:h?[r().createElement(c.Z,{to:I._j.sourcesNew.path,key:"addSourceButton"},r().createElement(i.Button,{"data-hcc-index":"true","data-hcc-title":ge,"data-hcc-alt":"create source;add cloud provider",variant:"primary",id:"addSourceButton"},ge))]:[r().createElement(o.Tooltip,{content:ye,key:"addSourceButton"},r().createElement("span",{tabIndex:"0"},r().createElement(i.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},ge)))]},filterConfig:{items:[{type:"text",label:_.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":_.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:(e,t)=>{b({type:"setFilterValue",value:t}),Y((()=>$("name",t,oe)))},value:e||""}},{label:_.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:(e,t)=>$("source_type_id",t,oe),items:q(fe),value:z.source_type_id??[]}},{label:_.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:(e,t)=>$("applications",t,oe),items:X(Z?.filter((0,Se.W)(fe,re))||[]),value:z.applications}},{label:_.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:(e,t,a)=>$("availability_status",e.target.checked?[a]:[],oe),items:[{label:_.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:H.Rl},{label:_.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:H.nZ}],value:z.availability_status}}]},activeFiltersConfig:{filters:J(z,j,Z,_),onDelete:(e,t,a)=>{oe((0,S.OU)(((e,t,a)=>{if(a)return Object.keys(t).reduce(((e,t)=>({...e,[t]:void 0})),{});const s=e[0];return{...t,[s.key]:s.chips?t[s.key].filter((e=>e!==s.chips[0].value)):void 0}})(t,z,a)))}},exportConfig:{...g.Z&&{position:"right"},isDisabled:!ie,onSelect:(e,t)=>{const a="csv"===t?((e,t,a,s)=>{const r=(0,k.E)(t).filter((({hidden:e})=>!e));return[r.map((({title:e})=>e)),...e.map((e=>r.map((({value:t})=>Re(t,e[t],a,s))).map((e=>e?.includes(",")?`"${e}"`:e))))].map((e=>e.join(","))).join("\n")})(le,_,Z,j):((e,t,a,s)=>{const r=(0,k.E)(t).filter((({hidden:e})=>!e)),l=e.map((e=>((e,t,a,s)=>e.reduce(((e,r)=>({...e,[r.title]:Re(r.value,t[r.value],a,s)})),{}))(r,e,a,s)));return JSON.stringify(l,null,2)})(le,_,Z,j);(0,v.Sv)(a,`sources-${(new Date).toISOString()}`,t)}}}),r().createElement(V,null),r().createElement(u.Z,{pagination:pe?r().createElement(T.Xf,null):L>0?me:void 0}));return r().createElement(r().Fragment,null,r().createElement(s.Suspense,{fallback:null},r().createElement(Ze.Outlet,{context:{sourceTypes:Q(j,se),applicationTypes:Q(Z,ae),isOpen:!0,onClose:()=>{b({type:"closeWizard"}),w(I._j.sources.path)},afterSuccess:e=>(e=>e((0,S.il)(G)))(oe),hideSourcesButton:!0,selectedType:t,submitCallback:e=>((e,t,a,s,l)=>{const i=`sources-wizard-notification-${Date.now()}`;if(location.pathname.split("/").filter(Boolean).pop()!==I._j.sourcesNew.path.split("/").pop())if(e.isErrored){const{activeStep:o,activeStepIndex:n,maxStepIndex:c,prevSteps:d,registeredFieldsHistory:u}=e.wizardState;t((0,S.Hz)({title:s.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:s.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:r().createElement("b",null,e.values.source.name)}),variant:"danger",id:i,actionLinks:r().createElement(P.AlertActionLink,{onClick:()=>{l({type:"retryWizard",initialValues:e.values,initialState:{activeStep:o,activeStepIndex:n,maxStepIndex:c,prevSteps:d,registeredFieldsHistory:u}}),t((0,S.Gd)(i)),a(I._j.sourcesNew.path)}},s.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,U.Z)(e.createdSource)){case"unavailable":t((0,S.Hz)({title:s.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:s.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:e.createdSource.applications?.[0]?.availability_status_error||e.createdSource.endpoint?.[0]?.availability_status_error||s.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:K.S}),variant:"danger",id:i,actionLinks:r().createElement(P.AlertActionLink,{onClick:()=>{t((0,S.Gd)(i)),a((0,I.yS)(I._j.sourcesDetail.path,e.createdSource.id))}},s.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,S.Hz)({title:s.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:s.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:r().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,S.Hz)({title:s.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:e.sourceTypes.find((({id:t})=>t===e.createdSource.source_type_id))?.product_name}),description:s.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:r().createElement("b",null,e.createdSource.name)}),variant:"success",id:i,actionLinks:r().createElement(P.AlertActionLink,{onClick:()=>{t((0,S.Gd)(i)),a((0,I.yS)(I._j.sourcesDetail.path,e.createdSource.id))}},s.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}})(e,oe,w,_,b),initialValues:y,initialWizardState:a,activeCategory:re}})),r().createElement(Le,null),r().createElement(m.Z,{type:"content"},Te&&r().createElement(ee.Z,null),O&&r().createElement(p.Z,null),!O&&he&&re===te.JL&&r().createElement(ve,{setSelectedType:ke}),!O&&he&&re===te.B0&&r().createElement(Me,{setSelectedType:ke}),Ce))}},16872:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s=e=>{const t=[...e.applications?.filter(Boolean).map((({availability_status:e})=>e||"timeout"))||[],...e.endpoint?.filter(Boolean).map((({availability_status:e})=>e||"timeout"))||[],...e.authentications?.filter(Boolean).map((({availability_status:e})=>e||"timeout"))||[]];return t.includes("unavailable")?"unavailable":t.length>0&&t.every((e=>"available"===e))?"available":t.includes("timeout")?"timeout":"finished"}},12567:(e,t,a)=>{"use strict";a.d(t,{W:()=>r,Z:()=>l});var s=a(75614);const r=(e,t)=>({supported_source_types:a})=>a.find((a=>e.find((({name:e})=>a===e))?.category===t)),l=e=>e.name!==s.M$},31379:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,j:()=>l});var s=a(75614);const r=[s.OH,s.N9],l=(e,t)=>({category:a,name:s})=>t?a===e:a===e&&!r.includes(s),i=e=>e.schema},45467:()=>{},32857:()=>{},28992:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},44690:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.ff1e1f792754b65454bf838db3535134.js.map