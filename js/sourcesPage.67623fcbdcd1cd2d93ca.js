(self.webpackChunksources=self.webpackChunksources||[]).push([[593],{84414:(e,t,a)=>{"use strict";a.d(t,{a:()=>s});var n=a(48947),i=a(78116);const s=()=>{const e=(0,n.useNavigate)();return(t,a)=>e((0,i.n)(t,i.d),a)}},6229:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_t});var n=a(66029),i=a.n(n),s=a(86706),r=a(46665),o=a(42309),l=a(25387),c=a(96380),d=a(22663),m=a(31611),u=a(7876),g=a(46639),p=a(78596),f=a(11549),v=a(35240),h=a(46818),y=a(7732),E=a(21081),b=a(49004),M=a(34844),_=a(31665),T=a(63663),k=a(2012),w=a(67187),C=a(15256),S=a(62345),L=a(2596),x=a.n(L);const I=()=>{const e=(0,l.YB)(),t=(0,s.I0)();return i().createElement(w.Bullseye,null,i().createElement(C.EmptyState,{variant:C.EmptyStateVariant.small},i().createElement(C.EmptyStateIcon,{icon:x()}),i().createElement(S.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),i().createElement(C.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),i().createElement(r.Button,{variant:"link",onClick:()=>t((0,_.K5)())},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var N=a(15185),A=a(82866),B=a(87281),D=a(42399),R=a(84414);const z=(e,t,a,n)=>t.filter((e=>e.title||e.hidden)).map((t=>({title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:a,appTypes:n}):e[t.value]||""}))),P=(e,t,a,n,i)=>e.filter((({hidden:e})=>!e)).reduce(((e,s)=>{const r=i.includes(s.id);return[...e,{...s,originalName:s.name,isOpen:!!s.expanded,cells:z(s,t,a,n),disableActions:r,isDeleting:r}]}),[]),F=e=>e.filter((e=>e.title||e.hidden)).map((e=>({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[h.WT],...e.sortable&&{transforms:[y.p,h.WT]},props:e.title?{"aria-label":e.title}:{"aria-label":"Column without title"}}))),O=(e,t)=>({...e,...t,key:e.key+1}),H=(e,t,a,n,i)=>s=>{const r=(0,D.Z)(e,i),o=[];return s.paused_at?o.push({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this integration"}),onClick:(t,a,{id:i})=>n((0,_.AX)(i,s.originalName,e)),...a?{component:"button"}:r}):o.push({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:(t,a,{id:i})=>n((0,_.xz)(i,s.originalName,e)),...a?{component:"button"}:r}),o.push({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this integration and all collected data"}),onClick:(e,a,{id:n})=>t((0,B.yS)(B._j.sourcesRemove.path,n)),...a?{component:"button"}:r}),o.push({title:s.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:(e,a,{id:n})=>t((0,B.yS)(B._j.sourcesDetail.path,n)),...a?{component:"button"}:r}),o},V=()=>{const e=(0,R.a)(),t=(0,l.YB)(),a=(0,N.W)(),r=(0,A.E)(),o=(0,s.v9)((({user:e})=>e.isOrgAdmin)),{appTypes:c,entities:d,sourceTypes:m,sourceTypesLoaded:u,appTypesLoaded:g,sortBy:p,sortDirection:f,numberOfEntities:v,removingSources:h}=(0,s.v9)((({sources:e})=>e),s.wU),y=(0,s.I0)(),w=0===v||!a,[C,S]=(0,n.useReducer)(O,(L=(0,k.E)(t,w),{rows:[],sortBy:{},isLoaded:!1,cells:F(L),key:0}));var L;const x=()=>{const e=(0,k.E)(t,w);return S({rows:P(d,e,m,c,h),cells:F(e)})};(0,n.useEffect)((()=>{a&&u&&g?(S({isLoaded:!0}),x()):(S({isLoaded:!1}),(()=>{const e=(0,k.E)(t,w);S({cells:F(e)})})())}),[a,u,g]),(0,n.useEffect)((()=>{C.isLoaded&&x()}),[d,h]);let B=C.rows;return 0===v&&C.isLoaded?B=[{heightAuto:!0,cells:[{props:{colSpan:k.W},title:i().createElement(I,null)}]}]:a&&g&&u||(B=[{heightAuto:!0,cells:[{props:{colSpan:k.W,className:"sources-placeholder-row"},title:i().createElement(T.mI,null)}]}]),i().createElement(E.i,{gridBreakPoint:"grid-lg","aria-label":t.formatMessage({id:"sources.list",defaultMessage:"List of Integrations"}),onSort:(e,t,a)=>y((0,_.Bb)(C.cells[t].value,a)),sortBy:{index:C.cells.map((e=>e.hidden?"hidden":e.value)).indexOf(p),direction:f},key:C.key,rows:B,cells:C.cells,actionResolver:a&&v>0?H(t,e,r,y,o):void 0,rowWrapper:T.sk,className:0===v&&C.isLoaded?"ins-c-table-empty-state":""},i().createElement(b.x,null),i().createElement(M.R,null))};var W=a(99166),Z=a(10431),j=a(63367),G=a(16872),q=a(32321);const Q=(0,W.Z)((e=>e()),500),J={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},Y=e=>e.map((({id:e,product_name:t})=>({label:t,value:e}))).sort(((e,t)=>e.label.localeCompare(t.label))),X=e=>e.map((({id:e,display_name:t})=>({label:t,value:e}))).sort(((e,t)=>e.label.localeCompare(t.label))),K=(e,t,a)=>a((0,_.OU)({[e]:t})),U=(e,t,a,n)=>Object.keys(e).map((i=>e[i]&&e[i].length>0?((e,t,a,n,i)=>({name:()=>({name:t[e],key:e}),source_type_id:()=>({category:"Integration Type",key:e,chips:t[e].map((e=>{const t=a.find((t=>t.id===e));return{name:t?t.product_name:e,value:e}}))}),applications:()=>({category:"Application",key:e,chips:t[e].map((e=>{const t=n.find((t=>t.id===e));return{name:t?t.display_name:e,value:e}}))}),availability_status:()=>({category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===j.Rl?i.formatMessage({id:"sources.available",defaultMessage:"Available"}):i.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]})}[e]||(()=>({name:e}))))(i,e,t,a,n)():void 0)).filter(Boolean),$=(e,t)=>t&&e.length>0?e:void 0;var ee=a(39911),te=a(75614),ae=a(45697),ne=a.n(ae),ie=a(2387),se=a(82793);const re=({src:e,...t})=>{const[a,s]=(0,n.useState)(!1);return i().createElement(i().Fragment,null,!a&&i().createElement(T.aN,{height:"40px",width:"110px",...t}),i().createElement("img",{src:e,"data-testid":"ImageWithPlaceholder",onLoad:()=>s(!0),style:{display:a?"initial":"none"},...t}))};re.propTypes={src:ne().string.isRequired};const oe=re;var le=a(82387);const ce=e=>{const t=(0,l.YB)(),a=(0,s.v9)((({user:e})=>e.isOrgAdmin)),n=(0,D.$)(t,a);return i().createElement(o.Tooltip,{content:n},i().createElement("div",{className:"disabled-tile-with-tooltip"},i().createElement(le.Tile,{...e,isDisabled:!0})))};var de=a(31379);const me=({setSelectedType:e,mapper:t})=>{const a=(0,s.v9)((({sources:e})=>e.sourceTypes),s.wU),n=(0,s.v9)((({sources:e})=>e.activeCategory)),i=(0,R.a)(),r=(0,A.E)(),o=t=>{e(t),i(B._j.sourcesNew.path)},l=r?le.Tile:ce;return a.filter((0,de.j)(n)).sort(((e,t)=>e.product_name.localeCompare(t.product_name))).map((({name:e})=>t(e,o,l)))};me.propTypes={setSelectedType:ne().func.isRequired,mapper:ne().func.isRequired};const ue=me,ge=(e,t,a)=>({amazon:i().createElement(a,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:()=>t("amazon"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:i().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:i().createElement(a,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",onClick:()=>t("google"),icon:i().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:i().createElement(a,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:()=>t("azure"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:i().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})}),ibm:i().createElement(a,{isStacked:!0,key:e,title:"IBM Cloud",onClick:()=>t("ibm"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:i().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/ibm-cloud.svg",alt:"ibm logo"})}),"oracle-cloud-infrastructure":i().createElement(a,{isStacked:!0,key:e,title:"Oracle Cloud Infrastructure",onClick:()=>t("oracle-cloud-infrastructure"),className:"tile pf-v5-u-mr-md pf-v5-u-mt-md",icon:i().createElement(oe,{className:"provider-icon pf-v5-u-mb-sm",src:"/apps/frontend-assets/partners-icons/oracle-short.svg",alt:"oracle logo"})})}[e]),pe=e=>i().createElement(ue,{...e,mapper:ge}),fe=({setSelectedType:e})=>{const t=(0,l.YB)();return i().createElement(ie.Card,{className:"src-c-card__cloud-empty-state pf-v5-u-mt-md pf-v5-u-mt-0-on-md"},i().createElement(ie.CardTitle,null,t.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),i().createElement(ie.CardBody,null,i().createElement(se.Text,null,t.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),i().createElement("div",{className:"provider-tiles pf-v5-u-mt-md pf-v5-u-mb-lg"},i().createElement(pe,{setSelectedType:e}))),i().createElement(ie.CardFooter,{className:"cloud-footer"},i().createElement(se.Text,{className:"catalog-link pf-v5-u-mt-lg"},t.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:e=>i().createElement(se.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}))))};fe.propTypes={setSelectedType:ne().func.isRequired};const ve=fe,he=i().createElement(oe,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),ye=(e,t,a)=>({openshift:i().createElement(a,{isStacked:!0,key:e,title:"OpenShift Container Platform",className:"tile pf-v5-u-mr-md-on-md pf-v5-u-mt-md pf-v5-u-mt-0-on-md",onClick:()=>t("openshift"),icon:he})}[e]),Ee=e=>i().createElement(ue,{...e,mapper:ye}),be=({setSelectedType:e})=>{const t=(0,l.YB)();return i().createElement(ie.Card,{className:"src-c-card__cloud-empty-state pf-v5-u-mt-md pf-v5-u-mt-0-on-md"},i().createElement(ie.CardTitle,null,t.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),i().createElement(ie.CardBody,null,i().createElement(se.Text,null,t.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),i().createElement("div",{className:"provider-tiles pf-v5-u-mt-md pf-v5-u-mb-lg"},i().createElement(Ee,{setSelectedType:e}))))};be.propTypes={setSelectedType:ne().func.isRequired};const Me=be;var _e=a(12567),Te=a(67866),ke=a(76678),we=a(17579),Ce=a.n(we),Se=a(13233),Le=a.n(Se),xe=a(79083);const Ie=()=>{const e=(0,l.YB)(),t=(0,s.I0)(),a=(0,s.v9)((({sources:e})=>e.activeCategory)),n=(0,xe.useFlag)("platform.sources.integrations"),r=(0,xe.useFlag)("platform.sources.integrations.breakdown"),o=(0,xe.useFlag)("platform.integrations.overview"),c=(0,s.v9)((({user:e})=>e.isOrgAdmin)),d=(0,s.v9)((({user:e})=>e?.integrationsEndpointsPermissions)),m=(c||d)&&(n||r)&&(r?i().createElement(i().Fragment,null,i().createElement(ke.Tab,{eventKey:te.Q9,title:i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.communications",defaultMessage:"Communications"}))}),i().createElement(ke.Tab,{eventKey:te._Z,title:i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.reportingAutomation",defaultMessage:"Reporting & Automation"}))}),i().createElement(ke.Tab,{eventKey:te.XA,title:i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.webhooks",defaultMessage:"Webhooks"}))})):i().createElement(ke.Tab,{eventKey:te.Du,title:i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.integrations",defaultMessage:"Integrations"}))})),u=i().createElement(i().Fragment,null,i().createElement(ke.Tab,{eventKey:te.JL,title:i().createElement(i().Fragment,null,o?"":i().createElement(ke.TabTitleIcon,null,i().createElement(Le(),{"aria-label":"Cloud Icon"})),i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:n?"Cloud":"Cloud sources"})))}),i().createElement(ke.Tab,{eventKey:te.B0,title:i().createElement(i().Fragment,null,o?"":i().createElement(ke.TabTitleIcon,null,i().createElement(Ce(),{"aria-label":"Red Hat Icon"})),i().createElement(ke.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:n?"Red Hat":"Red Hat sources"})))}));return i().createElement(Te.PageSection,{type:"tabs",variant:Te.PageSectionVariants.light,isWidthLimited:!0},i().createElement(ke.Tabs,{activeKey:a||(o?te.mD:te.JL),onSelect:(e,a)=>t((0,_.Qr)(a)),className:"pf-v5-u-mt-md",inset:{default:"insetNone",md:"insetSm",xl:"insetLg","2xl":"inset2xl"}},o?i().createElement(i().Fragment,null,i().createElement(ke.Tab,{eventKey:te.mD,title:i().createElement(ke.TabTitleText,null," ",e.formatMessage({id:"sources.overview",defaultMessage:"Overview"}))}),u,m):i().createElement(i().Fragment,null,u,m)))};var Ne=a(63456),Ae=a(39173),Be=a(20206),De=a(16477),Re=a(60266),ze=a(29061);const Pe=[{title:"Cloud",description:"Amazon Web Services, Google Cloud Platform, Microsoft Azure, Oracle Cloud Platform",value:te.JL},{title:"Red Hat",description:"Red Hat OpenShift Container Platform, Red Hat Satellite, Red Hat Ansible Automation Platform",value:te.B0},{title:"Communications",description:"Google Chat, Microsoft Office Teams, Slack",value:te.Q9},{title:"Reporting & Automation",description:"Event-Driven Ansible, ServiceNow, Splunk",value:te._Z},{title:"Webhooks",description:"",value:te.XA}],Fe=e=>{const[t,a]=(0,n.useState)(!1),[s,r]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!1),[c,m]=(0,n.useState)(null);return i().createElement("div",{className:"integrations-dropdown"},[te.B0,te.JL].includes(c)&&i().createElement(ze.default,{isOpen:o,onClose:()=>{l(!1),m(null)},activeCategory:c}),[te.Q9,te._Z,te.XA].includes(c)&&i().createElement(d.Z,{appName:"notifications",module:"./IntegrationsWizard",isOpen:s,category:c,closeModal:()=>{r(!1),m(null)},fallback:i().createElement("div",{id:"fallback-modal"})}),i().createElement(De.Dropdown,{isOpen:t,onSelect:(e,t)=>{a(!1),m(t),[te.B0,te.JL].includes(t)?l(!0):[te.Q9,te._Z,te.XA].includes(t)&&r(!0)},onOpenChange:a,toggle:n=>i().createElement(Re.MenuToggle,{ref:n,onClick:()=>a(!t),isExpanded:t,isDisabled:e.isDisabled,variant:"primary"},"Create Integration"),...e},i().createElement(De.DropdownList,null,Pe.map((({title:e,value:t,description:a})=>i().createElement(De.DropdownItem,{key:e,value:t,description:a},e))))))};Fe.propTypes={isDisabled:ae.checkPropTypes.bool};const Oe=Fe;var He=a(36279),Ve=a.n(He),We=a(41564);const Ze=i().memo((()=>{const e=(0,l.YB)(),t=(0,xe.useFlag)("platform.integrations.overview"),a=(0,s.v9)((({user:e})=>e?.writePermissions)),n=(0,s.v9)((({user:e})=>e?.integrationsEndpointsPermissions));return i().createElement(i().Fragment,null,t?i().createElement(i().Fragment,null,i().createElement(Be.yW,{ouiaId:"sources-header",title:e.formatMessage({id:"sources.integrations",defaultMessage:"Integrations"}),subtitle:e.formatMessage({id:"sources.integrations.subtitle",defaultMessage:"Integrating third-party applications expands the scope of notifications beyond emails and messages, so that you can view and manage Hybrid Cloud Console events from your preferred platform dashboard."}),icon:i().createElement("img",{src:"/apps/frontend-assets/sources-integrations/integrations-icon.svg",alt:"integrations-header-icon"}),linkProps:{label:e.formatMessage({id:"integrations.overview.learnMore",defaultMessage:"Learn more"}),isExternal:!0,target:"_blank",component:"a",href:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/integrating_the_red_hat_hybrid_cloud_console_with_third-party_applications/index"},actionMenu:a||n?i().createElement(Oe,{isDisabled:!a&&!n,popperProps:{appendTo:document.body,position:"right"}}):i().createElement(We.Popover,{triggerAction:"hover",alertSeverityVariant:"info",minWidth:"450px","aria-label":"Popover with icon in the title example",headerContent:e.formatMessage({id:"sources.integrations.popoverHeader",defaultMessage:"Access needed"}),headerIcon:i().createElement(Ve(),null),bodyContent:i().createElement(se.TextContent,null,i().createElement(se.Text,{component:se.TextVariants.p},e.formatMessage({id:"integrations.overview.popoverBody",defaultMessage:"You do not the permissions for integration management. Contact your organization admin if you need these permissions updated."})," ",i().createElement(r.Button,{component:"a",href:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/getting_started_with_the_red_hat_hybrid_cloud_console/hcc-help-options_getting-started#virtual-assistant_getting-started",isInline:!0,target:"_blank",variant:"link"},e.formatMessage({id:"integrations.overview.popoverLink",defaultMessage:"Learn about requesting access via the Virtual Assistant"})))),position:"left",appendTo:document.body},i().createElement(Oe,{isDisabled:!a&&!n,popperProps:{appendTo:document.body,position:"right"}}))}),i().createElement(Ie,null)):i().createElement(Ne.Z,{className:"pf-v5-u-pb-0"},i().createElement(Ae.Z,{title:e.formatMessage({id:"sources.integrations",defaultMessage:"Integrations"})}),i().createElement(Ie,null)))})),je=(e,t,a,n)=>{switch(e){case"applications":return t.map((({application_type_id:e})=>a.find((({id:t})=>t===e))?.display_name)).join(",");case"source_type_id":return n.find((({id:e})=>e===t))?.product_name;default:return t}};var Ge=a(48947),qe=a(55140),Qe=a(52889),Je=a(5521),Ye=a(33659),Xe=a(85964),Ke=a(58709),Ue=a(5697),$e=a(75521),et=a(8128),tt=a(64249),at=a(82010),nt=a.n(at),it=a(94313),st=a.n(it),rt=a(86906),ot=a.n(rt),lt=a(89703),ct=a.n(lt),dt=a(86172),mt=a.n(dt);const ut=({className:e})=>i().createElement("svg",{width:"22",height:"20",className:e},i().createElement("image",{xlinkHref:"/apps/frontend-assets/integrations-landing/integrations-landing-webhook-icon.svg",width:"22",height:"20"}));ut.propTypes={className:ne().string};const gt=ut;var pt=a(72219),ft=a(83233),vt=a(82001);const ht=({initialExpanded:e,icon:t,title:a,actionTitle:s,action:o,content:c,learnMoreLink:m})=>{const[u,g]=(0,n.useState)(e),[p,f]=(0,n.useState)(!1),[v,h]=(0,n.useState)(!1),[y,E]=(0,n.useState)(null),b=(0,l.YB)();return i().createElement(i().Fragment,null,i().createElement(Qe.DataListItem,{"aria-labelledby":"item1",isExpanded:u,className:u&&"active-item"},i().createElement(Qe.DataListItemRow,{className:"pf-v5-u-align-items-center"},i().createElement(Qe.DataListToggle,{isExpanded:u,id:"toggle1","aria-controls":"expand1",onClick:()=>g((e=>!e))}),i().createElement(Qe.DataListItemCells,{dataListCells:[i().createElement(Qe.DataListCell,{key:`cell-${t.toString().toLowerCase()}`},i().createElement("div",null,i().createElement(ft.Flex,{className:"pf-v5-u-flex-nowrap"},i().createElement(ft.FlexItem,{className:"pf-v5-u-align-self-center"},i().createElement(vt.Icon,{size:"lg",className:"pf-v5-u-primary-color-100"},t)),i().createElement(pt.Divider,{orientation:{default:"vertical"}}),i().createElement(ft.FlexItem,{className:"pf-v5-u-align-self-center"},i().createElement(S.Title,{headingLevel:"h4"},a)))))]}),s&&o&&i().createElement(Qe.DataListAction,{"aria-labelledby":"item1 action1",id:"action1","aria-label":"Actions",isPlainButtonAction:!0},i().createElement(r.Button,{variant:"link",onClick:e=>{e.preventDefault(),E(o),[te.B0,te.JL].includes(o)?h(!0):[te.Q9,te._Z,te.XA].includes(o)&&f(!0)}},s))),i().createElement(Qe.DataListContent,{"aria-label":`${a} - Detailed Explanation`,id:"expand1",isHidden:!u},i().createElement(se.TextContent,null,i().createElement(se.Text,{component:se.TextVariants.p,className:"pf-v5-u-mb-lg"},c)),i().createElement(r.Button,{isInline:!0,component:"a",href:m,target:"_blank",variant:"link",icon:i().createElement(ct(),null),iconPosition:"end"},b.formatMessage({id:"integrations.overview.dataListItemLearnMore",defaultMessage:"Learn more"})))),[te.Q9,te._Z,te.XA].includes(y)&&i().createElement(d.g,{appName:"notifications",module:"./IntegrationsWizard",isOpen:p,category:y,closeModal:()=>{f(!1),E(null)},fallback:i().createElement("div",{id:"fallback-modal"})}),[te.B0,te.JL].includes(y)&&i().createElement(ze.default,{isOpen:v,onClose:()=>{h(!1),E(null)},activeCategory:y}))};ht.propTypes={initialExpanded:ne().bool.isRequired,icon:ne().element.isRequired,title:ne().string.isRequired,actionTitle:ne().string.isRequired,action:ne().string.isRequired,content:ne().string.isRequired,learnMoreLink:ne().string.isRequired};const yt=ht,Et=i().memo((()=>{const{quickStarts:e}=(0,qe.Z)(),t=(0,Ge.useNavigate)(),a=(0,l.YB)(),n=(0,s.v9)((({user:e})=>e?.writePermissions)),o=(0,s.v9)((({user:e})=>e?.integrationsEndpointsPermissions)),c=[{isExpanded:!0,icon:i().createElement(mt(),{className:"pf-v5-u-primary-color-100"}),title:a.formatMessage({id:"integrations.overview.dataListItemTitle1",defaultMessage:"<b>Communication integrations</b> (Microsoft Teams, Google Chat, Slack)"},{b:q.S}),actionTitle:a.formatMessage({id:"integrations.overview.dataListItemActionTitle1",defaultMessage:"Set up communication integration"}),action:te.Q9,content:a.formatMessage({id:"integrations.overview.dataListItemContent1",defaultMessage:"Receive event notifications in your preferred communications application by connecting the Hybrid Cloud Console with Microsoft Teams, Google Chat, or Slack."}),learnMoreLink:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/integrating_the_red_hat_hybrid_cloud_console_with_third-party_applications/index"},{isExpanded:!1,icon:i().createElement(st(),{className:"pf-v5-u-primary-color-100"}),title:a.formatMessage({id:"integrations.overview.dataListItemTitle2",defaultMessage:"<b>Reporting and automation integrations</b> (Event-Driven Ansible, PagerDuty, ServiceNow, Splunk) "},{b:q.S}),actionTitle:a.formatMessage({id:"integrations.overview.dataListItemActionTitle2",defaultMessage:"Set up reporting and automation integration"}),action:te._Z,content:a.formatMessage({id:"integrations.overview.dataListItemContent2",defaultMessage:"Receive and manage event notifications where you manage other sources of data by connecting the Hybrid Cloud Console with Splunk, ServiceNow, or Event-Driven Ansible."}),learnMoreLink:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/integrating_the_red_hat_hybrid_cloud_console_with_third-party_applications/index"},{isExpanded:!1,icon:i().createElement(gt,{className:"pf-v5-u-primary-color-100"}),title:a.formatMessage({id:"integrations.overview.dataListItemTitle3",defaultMessage:"<b>Webhook integrations</b>"},{b:q.S}),actionTitle:a.formatMessage({id:"integrations.overview.dataListItemActionTitle3",defaultMessage:"Set up webhook integration"}),action:te.XA,content:a.formatMessage({id:"integrations.overview.dataListItemContent3",defaultMessage:"Receive Hybrid Cloud Console event notifications in third-party applications where native integration is not available by configuring a webhook integration."}),learnMoreLink:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html-single/integrating_the_red_hat_hybrid_cloud_console_with_third-party_applications/index#assembly-configuring-integration-with-webhooks_integrations"},{isExpanded:!1,icon:i().createElement(Le(),{className:"pf-v5-u-primary-color-100"}),title:a.formatMessage({id:"integrations.overview.dataListItemTitle4",defaultMessage:"<b>Cloud provider integrations</b> (Amazon Web Services, Azure, Google Cloud Platform, Oracle)"},{b:q.S}),actionTitle:a.formatMessage({id:"integrations.overview.dataListItemActionTitle4",defaultMessage:"Configure cloud provider integration"}),action:te.JL,content:a.formatMessage({id:"integrations.overview.dataListItemContent4",defaultMessage:"To use public cloud provider data with Hybrid Cloud Console services, connect your Amazon Web Services (AWS), Google Cloud, Microsoft Azure, or Oracle Cloud account to the Hybrid Cloud Console."}),learnMoreLink:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/configuring_cloud_integrations_for_red_hat_services/about-cloud-integrations_crc-cloud-integrations"},{isExpanded:!1,icon:i().createElement(Ce(),{className:"pf-v5-u-primary-color-100"}),title:a.formatMessage({id:"integrations.overview.dataListItemTitle5",defaultMessage:"<b>Red Hat integrations</b> (OpenShift Container Platform)"},{b:q.S}),actionTitle:a.formatMessage({id:"integrations.overview.dataListItemActionTitle5",defaultMessage:"Configure Red Hat integration"}),action:te.B0,content:a.formatMessage({id:"integrations.overview.dataListItemContent5",defaultMessage:"Manage your cloud costs with Hybrid Cloud Console services by connecting your Red Hat OpenShift Container Platform environment."}),learnMoreLink:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/configuring_cloud_integrations_for_red_hat_services/redhat-cloud-integrations_crc-cloud-integrations"}];return i().createElement(i().Fragment,null,i().createElement(ie.Card,{className:"pf-v5-u-mb-lg"},i().createElement(Je.Grid,{hasGutter:!0},i().createElement(Je.GridItem,{sm:12,md:6,lg:8},i().createElement(ie.CardTitle,null,i().createElement(S.Title,{headingLevel:"h2"},a.formatMessage({id:"integrations.overview.heroTitle",defaultMessage:"Get started with Integrations"}))),i().createElement(ie.CardBody,null,i().createElement(se.TextContent,null,i().createElement(se.Text,{component:se.TextVariants.p,className:"pf-v5-u-mb-md"},a.formatMessage({id:"integrations.overview.heroParagraph",defaultMessage:"Notifications and integrations services work together to transmit messages to third-party application endpoints, such as instant messaging platforms and external ticketing systems, when triggering events occur."}))),i().createElement(S.Title,{headingLevel:"h4",className:"pf-v5-u-mb-sm"},a.formatMessage({id:"integrations.overview.heroListTitle",defaultMessage:"Key features"})),i().createElement(Ke.List,{isPlain:!0},i().createElement(Ke.ListItem,{icon:i().createElement(ot(),null)},a.formatMessage({id:"integrations.overview.heroListItem1",defaultMessage:"Create integrations and configure notifications to integrate with third-party applications"})),i().createElement(Ke.ListItem,{icon:i().createElement(ot(),null)},a.formatMessage({id:"integrations.overview.heroListItem2",defaultMessage:"Manage your integrations and troubleshoot broken connections"})))),i().createElement(ie.CardFooter,null,n||o?i().createElement(Oe,{popperProps:{appendTo:document.body,position:"left"}}):i().createElement(Z.Alert,{customIcon:i().createElement(Ve(),null),variant:"info",isInline:!0,isExpandable:!0,title:a.formatMessage({id:"integrations.overview.alertTitle",defaultMessage:"Need to create an integration?"}),actionLinks:i().createElement(i().Fragment,null,i().createElement(Z.AlertActionLink,{component:"a",href:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/getting_started_with_the_red_hat_hybrid_cloud_console/hcc-help-options_getting-started#virtual-assistant_getting-started",target:"_blank"},a.formatMessage({id:"integrations.overview.alertLink",defaultMessage:"Learn about requesting access via the Virtual Assistant"})))},i().createElement(se.TextContent,null,i().createElement(se.Text,{component:se.TextVariants.p},a.formatMessage({id:"integrations.overview.alertParagraph",defaultMessage:"You do not have the permissions for integration management. Contact your organization administrator if you need these permissions updated."})))))),i().createElement(Je.GridItem,{md:6,lg:4,className:"pf-v5-u-display-none pf-v5-u-display-block-on-md pf-c-card__cover-image"}))),n||o?i().createElement(Ye.Hint,{className:"pf-v5-u-mb-lg"},i().createElement(Ye.HintBody,null,i().createElement("span",{className:"pf-v5-u-font-weight-bold"},a.formatMessage({id:"integrations.overview.hintTextBold",defaultMessage:"Already set up your integrations?"}))," ",a.formatMessage({id:"integrations.overview.hintText1",defaultMessage:"As a next step, you can"})," ",i().createElement(r.Button,{variant:"link",onClick:e=>{e.preventDefault(),t("/settings/notifications/configure-events")},isInline:!0},a.formatMessage({id:"integrations.overview.hintLink",defaultMessage:"enable the notifications"}))," ",a.formatMessage({id:"integrations.overview.hintText2",defaultMessage:"of your choice to alert you via integrations."}))):null,i().createElement(S.Title,{headingLevel:"h2",className:"pf-v5-u-mb-md"},a.formatMessage({id:"integrations.overview.titleIntegrationTypes",defaultMessage:"Integration types"})),i().createElement(Qe.DataList,{"aria-label":"Integration types",className:"pf-v5-u-mb-lg"},c.map(((e,t)=>i().createElement(yt,{key:t,initialExpanded:e.isExpanded,icon:e.icon,title:e.title,actionTitle:n||o?e.actionTitle:null,action:e.action,content:e.content,learnMoreLink:e.learnMoreLink})))),i().createElement(S.Title,{headingLevel:"h2",className:"pf-v5-u-mb-md"},a.formatMessage({id:"integrations.overview.titleRecommendedContent",defaultMessage:"Recommended content"})),i().createElement(Ue.i,{"aria-label":"Recommended content",className:"pf-v5-u-mb-lg"},i().createElement($e.p,null,i().createElement(et.Tr,null,i().createElement(tt.Td,null,a.formatMessage({id:"integrations.overview.recommendedContentTableTitle1",defaultMessage:"Configuring notifications and integrations"})),i().createElement(tt.Td,null,i().createElement(Xe.Label,{color:"orange"},a.formatMessage({id:"integrations.overview.recommendedContentTableLabel1",defaultMessage:"Documentation"}))),i().createElement(tt.Td,{className:"pf-v5-u-text-align-right"},i().createElement(r.Button,{component:"a",href:"https://docs.redhat.com/en/documentation/red_hat_hybrid_cloud_console/1-latest/html/configuring_notifications_on_the_red_hat_hybrid_cloud_console/assembly-intro_notifications",target:"_blank",variant:"link",icon:i().createElement(ct(),null),iconPosition:"end"},a.formatMessage({id:"integrations.overview.recommendedContentTableLink1",defaultMessage:"View documentation"})))),i().createElement(et.Tr,null,i().createElement(tt.Td,null,a.formatMessage({id:"integrations.overview.recommendedContentTableTitle2",defaultMessage:"Configuring console notifications in Slack"})),i().createElement(tt.Td,null,i().createElement(Xe.Label,{color:"green"},a.formatMessage({id:"integrations.overview.recommendedContentTableLabel2",defaultMessage:"Quick start"}))),i().createElement(tt.Td,{className:"pf-v5-u-text-align-right"},i().createElement(r.Button,{variant:"link",onClick:()=>{e.activateQuickstart("integrations-slack-notifs-qs")},isInline:!0},a.formatMessage({id:"integrations.overview.recommendedContentTableLink2",defaultMessage:"Begin Quick start"})," ",i().createElement(nt(),null)))))),i().createElement(Ge.Link,{to:"/settings/learning-resources"},i().createElement(r.Button,{variant:"link",className:"pf-v5-u-mb-lg",isInline:!0},a.formatMessage({id:"integrations.overview.viewAllLearningResources",defaultMessage:"View all Settings learning resources"}))))})),bt={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},Mt=(e,{type:t,value:a,selectedType:n,initialValues:i,initialState:s})=>{switch(t){case"setFilterValue":return{...e,filter:a};case"setSelectedType":return{...e,selectedType:n};case"retryWizard":return{...e,wizardInitialState:s,wizardInitialValues:i};case"closeWizard":return{...e,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0}}},_t=()=>{const[{filter:e,selectedType:t,wizardInitialState:a,wizardInitialValues:h},y]=(0,n.useReducer)(Mt,bt),E=(0,N.W)(),b=(0,A.E)(),M=(0,s.v9)((({user:e})=>e.isOrgAdmin)),w=(0,xe.useFlag)("platform.sources.integrations")||(0,xe.useFlag)("platform.sources.breakdown"),C=(0,xe.useFlag)("platform.integrations.overview"),S=(0,R.a)(),L=(0,l.YB)(),x=(0,p.Z)(),I=(0,s.v9)((({sources:e})=>e),s.wU),{filterValue:D,numberOfEntities:z,appTypes:P,pageSize:F,pageNumber:O,fetchingError:H,sourceTypes:W,paginationClicked:ae,appTypesLoaded:ne,sourceTypesLoaded:ie,activeCategory:se,entities:re}=I,oe=E&&ie&&ne,le=(0,s.I0)();i().useEffect((()=>{null===se&&le((0,_.Qr)(C?te.mD:te.JL))}),[C,se]),(0,n.useEffect)((()=>{e!==D.name&&y({type:"setFilterValue",value:D.name})}),[D.name]);const ce=(e,t)=>le((0,_.zm)(t,F)),me=Math.ceil(z/F);(0,n.useEffect)((()=>{oe&&z>0&&O>Math.max(me,1)&&ce(0,me)}));const ue={itemCount:z,page:O,perPage:F,onSetPage:ce,onPerPageSelect:(e,t)=>le((0,_.zm)(1,t)),className:"top-pagination"},ge={...ue,dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"},pe=!(oe&&ne&&ie||ae),fe=W.filter((0,de.j)(se,!0)),he=L.formatMessage({id:"sources.addSource",defaultMessage:"Add integration"}),ye=M?L.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must add Cloud Administrator permissions to your user."}):L.formatMessage({id:"sources.notPermissionsAddButton",defaultMessage:"To add a source, your Organization Administrator must grant you Cloud Administrator permissions."});let Ee;(0,f.Z)(x)&&(Ee={dropdownProps:{position:"right"},actions:b?[{label:he,props:{to:B._j.sourcesNew.path,component:c.Z}}]:[{label:he,props:{component:"button",isDisabled:!0,tooltip:ye,tooltipProps:{content:ye},className:"src-m-dropdown-item-disabled"}}]});const be=Object.entries(D).map((([e,t])=>t&&(!Array.isArray(t)||Array.isArray(t)&&t.length>0))).filter(Boolean).length>0,Te=oe&&0===z&&!be,ke=(0,n.useMemo)((()=>C&&[null,te.mD].includes(se)),[se]),we=(0,n.useMemo)((()=>!C&&[null,te.JL].includes(se)&&!Te),[se,Te]),Ce=e=>y({type:"setSelectedType",selectedType:e}),Se=[te.Du,te.Q9,te._Z,te.XA].includes(se)&&w?i().createElement(d.Z,{appName:"notifications",module:"./IntegrationsTable",activeCategory:se}):H||Te?null:i().createElement(i().Fragment,null,i().createElement(m.Z,{pagination:pe?i().createElement(T.Xf,null):z>0?ue:void 0,actionsConfig:Ee||{dropdownProps:{position:"right"},actions:b?[i().createElement(c.Z,{to:B._j.sourcesNew.path,key:"addSourceButton"},i().createElement(r.Button,{"data-hcc-index":"true","data-hcc-title":he,"data-hcc-alt":"create source;add cloud provider",variant:"primary",id:"addSourceButton"},he))]:[i().createElement(o.Tooltip,{content:ye,key:"addSourceButton"},i().createElement("span",{tabIndex:"0"},i().createElement(r.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},he)))]},filterConfig:{items:[{type:"text",label:L.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":L.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:(e,t)=>{y({type:"setFilterValue",value:t}),Q((()=>K("name",t,le)))},value:e||""}},{label:L.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:(e,t)=>K("source_type_id",t,le),items:Y(fe),value:D.source_type_id??[]}},{label:L.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:(e,t)=>K("applications",t,le),items:X(P?.filter((0,_e.W)(fe,se))||[]),value:D.applications}},{label:L.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:(e,t,a)=>K("availability_status",e.target.checked?[a]:[],le),items:[{label:L.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:j.Rl},{label:L.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:j.nZ}],value:D.availability_status}}]},activeFiltersConfig:{filters:U(D,W,P,L),onDelete:(e,t,a)=>{le((0,_.OU)(((e,t,a)=>{if(a)return Object.keys(t).reduce(((e,t)=>({...e,[t]:void 0})),{});const n=e[0];return{...t,[n.key]:n.chips?t[n.key].filter((e=>e!==n.chips[0].value)):void 0}})(t,D,a)))}},exportConfig:{...f.Z&&{position:"right"},isDisabled:!oe,onSelect:(e,t)=>{const a="csv"===t?((e,t,a,n)=>{const i=(0,k.E)(t).filter((({hidden:e})=>!e));return[i.map((({title:e})=>e)),...e.map((e=>i.map((({value:t})=>je(t,e[t],a,n))).map((e=>e?.includes(",")?`"${e}"`:e))))].map((e=>e.join(","))).join("\n")})(re,L,P,W):((e,t,a,n)=>{const i=(0,k.E)(t).filter((({hidden:e})=>!e)),s=e.map((e=>((e,t,a,n)=>e.reduce(((e,i)=>({...e,[i.title]:je(i.value,t[i.value],a,n)})),{}))(i,e,a,n)));return JSON.stringify(s,null,2)})(re,L,P,W);(0,v.Sv)(a,`sources-${(new Date).toISOString()}`,t)}}}),i().createElement(V,null),i().createElement(m.Z,{pagination:pe?i().createElement(T.Xf,null):z>0?ge:void 0}));return i().createElement(i().Fragment,null,i().createElement(n.Suspense,{fallback:null},i().createElement(Ge.Outlet,{context:{sourceTypes:$(W,ie),applicationTypes:$(P,ne),isOpen:!0,onClose:()=>{y({type:"closeWizard"}),S(B._j.sources.path)},afterSuccess:e=>(e=>e((0,_.il)(J)))(le),hideSourcesButton:!0,selectedType:t,submitCallback:e=>((e,t,a,n,s)=>{const r=`sources-wizard-notification-${Date.now()}`;if(location.pathname.split("/").filter(Boolean).pop()!==B._j.sourcesNew.path.split("/").pop())if(e.isErrored){const{activeStep:o,activeStepIndex:l,maxStepIndex:c,prevSteps:d,registeredFieldsHistory:m}=e.wizardState;t((0,_.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Error adding integration"}),description:n.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add integration {name}. Please try again. If the error persists, open a support case."},{name:i().createElement("b",null,e.values.source.name)}),variant:"danger",id:r,actionLinks:i().createElement(Z.AlertActionLink,{onClick:()=>{s({type:"retryWizard",initialValues:e.values,initialState:{activeStep:o,activeStepIndex:l,maxStepIndex:c,prevSteps:d,registeredFieldsHistory:m}}),t((0,_.Gd)(r)),a(B._j.sourcesNew.path)}},n.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,G.Z)(e.createdSource)){case"unavailable":t((0,_.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:n.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:e.createdSource.applications?.[0]?.availability_status_error||e.createdSource.endpoint?.[0]?.availability_status_error||n.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:q.S}),variant:"danger",id:r,actionLinks:i().createElement(Z.AlertActionLink,{onClick:()=>{t((0,_.Gd)(r)),a((0,B.yS)(B._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit integration"}))}));break;case"timeout":t((0,_.Hz)({title:n.formatMessage({id:"alert.timeout.title",defaultMessage:"Integration configuration in progress"}),description:n.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for integration {name}. To track progress, check the Status column in the Integrations table."},{name:i().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,_.Hz)({title:n.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:e.sourceTypes.find((({id:t})=>t===e.createdSource.source_type_id))?.product_name}),description:n.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:i().createElement("b",null,e.createdSource.name)}),variant:"success",id:r,actionLinks:i().createElement(Z.AlertActionLink,{onClick:()=>{t((0,_.Gd)(r)),a((0,B.yS)(B._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}})(e,le,S,L,y),initialValues:h,initialWizardState:a,activeCategory:se}})),i().createElement(Ze,null),i().createElement(u.Z,{type:"content"},ke&&i().createElement(Et,null),we&&i().createElement(ee.Z,null),H&&i().createElement(g.Z,null),!H&&Te&&se===te.JL&&i().createElement(ve,{setSelectedType:Ce}),!H&&Te&&se===te.B0&&i().createElement(Me,{setSelectedType:Ce}),!ke&&Se))}},58392:()=>{},8572:()=>{},98379:()=>{},92084:()=>{},91993:()=>{},44690:()=>{},38299:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.472f266664821ad986e813b9e46cc900.js.map