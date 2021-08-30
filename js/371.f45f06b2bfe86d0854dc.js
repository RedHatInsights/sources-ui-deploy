"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[371],{66974:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),s=a(45697),i=a.n(s),l=a(86896),o=a(44012),c=a(80708),u=a(69957),m=function(e){var t=e.onExit,a=e.onStay,s=e.title,i=e.exitTitle,o=e.stayTitle,m=e.description,d=(0,l.Z)(),f=(0,n.useRef)(!1);return r().createElement(c.Modal,{onEscapePress:function(e){f.current&&a(e),f.current=!0},className:"sources",variant:"small",title:s,"aria-label":d.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:r().createElement(c.Title,{headingLevel:"h1",size:"2xl"},r().createElement(u.ZP,{size:"sm",className:"ins-c-source__warning-icon"}),s),isOpen:!0,onClose:a,actions:[r().createElement(c.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},i),r().createElement(c.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:a},o)]},m)};m.propTypes={onExit:i().func.isRequired,onStay:i().func.isRequired,title:i().node,exitTitle:i().node,stayTitle:i().node,description:i().node},m.defaultProps={title:r().createElement(o.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:r().createElement(o.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:r().createElement(o.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:r().createElement(o.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const d=m},98824:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(92950),r=a.n(n),s=a(45697),i=a.n(s),l=a(86896),o=a(80708),c=a(68778),u=function(e){var t=e.href,a=e.children;return r().createElement(r().Fragment,null,r().createElement(c.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),r().createElement(o.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},a))};u.propTypes={href:i().string.isRequired,children:i().node.isRequired};var m=insights.chrome.isBeta()?"beta/":"",d="/".concat(m,"subscriptions"),f="/".concat(m,"insights"),p="/".concat(m,"cost-management"),g=function(e){var t=e.onClose,a=(0,l.Z)();return r().createElement(n.Fragment,null,r().createElement(o.Alert,{variant:"info",isInline:!0,title:a.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},a.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),r().createElement(o.Bullseye,null,r().createElement(o.EmptyState,{variant:o.EmptyStateVariant.full,className:"pf-u-mt-md"},r().createElement(o.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),r().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),r().createElement(o.EmptyStateBody,null,a.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),r().createElement(o.Grid,{hasGutter:!0,className:"ins-c-source__aws-grid pf-u-mt-md"},r().createElement(o.GridItem,{md:"6"},r().createElement(u,{href:"https://access.redhat.com/management/cloud"},a.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS gold images"}))),r().createElement(o.GridItem,{md:"6"},r().createElement(u,{href:d},a.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),r().createElement(o.GridItem,{md:"6"},r().createElement(u,{href:f},a.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),r().createElement(o.GridItem,{md:"6"},r().createElement(u,{href:p},a.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),r().createElement(o.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a.formatMessage({id:"exit",defaultMessage:"Exit"})),r().createElement(o.EmptyStateSecondaryActions,null,r().createElement(o.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},a.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};g.propTypes={onClose:i().func.isRequired};const E=g},50063:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),s=a(45697),i=a.n(s),l=a(44012),o=a(80708),c=a(68778),u=a(24160),m=function(e){var t=e.onClose,a=e.successfulMessage,n=e.hideSourcesButton,s=e.returnButtonTitle,i=e.title,l=e.linkText,m=e.secondaryActions;return r().createElement(o.Bullseye,null,r().createElement(o.EmptyState,{variant:o.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(o.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),r().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(o.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},a),r().createElement(o.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},s),!n&&r().createElement(o.EmptyStateSecondaryActions,null,r().createElement(o.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,u.Z)()},l)),m&&r().createElement(o.EmptyStateSecondaryActions,null,m)))};m.propTypes={onClose:i().func.isRequired,successfulMessage:i().node.isRequired,hideSourcesButton:i().bool,returnButtonTitle:i().node.isRequired,title:i().node,linkText:i().node,secondaryActions:i().node},m.defaultProps={title:r().createElement(l.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:r().createElement(l.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const d=m},4435:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),s=a(45697),i=a.n(s),l=a(86896),o=a(44012),c=a(80708),u=a(5913),m=function(e){var t=e.onClose,a=e.returnButtonTitle,n=e.title,s=e.secondaryActions,i=(0,l.Z)();return r().createElement(c.Bullseye,null,r().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),r().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),r().createElement(c.EmptyStateBody,null,i.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:r().createElement("br",{key:"br"})})),r().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a),s&&r().createElement(c.EmptyStateSecondaryActions,null,s)))};m.propTypes={onClose:i().func.isRequired,returnButtonTitle:i().node.isRequired,title:i().node,secondaryActions:i().node},m.defaultProps={title:r().createElement(o.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const d=m},5746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(e,t){var a,n,r,s,i,l;return(null===(a=e.applications)||void 0===a||null===(n=a.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===n?void 0:n.availability_status_error)||(null===(r=e.endpoint)||void 0===r||null===(s=r.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===s?void 0:s.availability_status_error)||(null===(i=e.authentications)||void 0===i||null===(l=i.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===l?void 0:l.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},24160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"}}}]);
//# sourceMappingURL=../sourcemaps/371.fee73022d013a9f429a7c10fbf933ee4.js.map