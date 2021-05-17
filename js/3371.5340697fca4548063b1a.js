(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3371],{66974:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(92950),s=a.n(n),r=a(45697),i=a.n(r),l=a(86896),o=a(44012),c=a(92277),u=a(69957),m=function(e){var t=e.onExit,a=e.onStay,r=e.title,i=e.exitTitle,o=e.stayTitle,m=e.description,d=(0,l.Z)(),f=(0,n.useRef)(!1);return s().createElement(c.Modal,{onEscapePress:function(e){f.current&&a(e),f.current=!0},className:"sources",variant:"small",title:r,"aria-label":d.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:s().createElement(c.Title,{headingLevel:"h1",size:"2xl"},s().createElement(u.ZP,{size:"sm",className:"ins-c-source__warning-icon"}),r),isOpen:!0,onClose:a,actions:[s().createElement(c.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},i),s().createElement(c.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:a},o)]},m)};m.propTypes={onExit:i().func.isRequired,onStay:i().func.isRequired,title:i().node,exitTitle:i().node,stayTitle:i().node,description:i().node},m.defaultProps={title:s().createElement(o.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:s().createElement(o.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:s().createElement(o.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:s().createElement(o.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const d=m},98824:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(92950),s=a.n(n),r=a(45697),i=a.n(r),l=a(86896),o=a(92277),c=a(68778),u=function(e){var t=e.href,a=e.children;return s().createElement(s().Fragment,null,s().createElement(c.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),s().createElement(o.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},a))};u.propTypes={href:i().string.isRequired,children:i().node.isRequired};var m=insights.chrome.isBeta()?"beta/":"",d="/".concat(m,"subscriptions"),f="/".concat(m,"insights"),p="/".concat(m,"cost-management"),g=function(e){var t=e.onClose,a=(0,l.Z)();return s().createElement(n.Fragment,null,s().createElement(o.Alert,{variant:"info",isInline:!0,title:a.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},a.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),s().createElement(o.Bullseye,null,s().createElement(o.EmptyState,{variant:o.EmptyStateVariant.full,className:"pf-u-mt-md"},s().createElement(o.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),s().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),s().createElement(o.EmptyStateBody,null,a.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),s().createElement(o.Grid,{hasGutter:!0,className:"ins-c-source__aws-grid pf-u-mt-md"},s().createElement(o.GridItem,{md:"6"},s().createElement(u,{href:"https://access.redhat.com/management/cloud"},a.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS Gold images"}))),s().createElement(o.GridItem,{md:"6"},s().createElement(u,{href:d},a.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),s().createElement(o.GridItem,{md:"6"},s().createElement(u,{href:f},a.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),s().createElement(o.GridItem,{md:"6"},s().createElement(u,{href:p},a.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),s().createElement(o.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a.formatMessage({id:"exit",defaultMessage:"Exit"})),s().createElement(o.EmptyStateSecondaryActions,null,s().createElement(o.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},a.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};g.propTypes={onClose:i().func.isRequired};const E=g},50063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(92950),s=a.n(n),r=a(45697),i=a.n(r),l=a(44012),o=a(92277),c=a(68778),u=a(24160),m=function(e){var t=e.onClose,a=e.successfulMessage,n=e.hideSourcesButton,r=e.returnButtonTitle,i=e.title,l=e.linkText,m=e.secondaryActions;return s().createElement(o.Bullseye,null,s().createElement(o.EmptyState,{variant:o.EmptyStateVariant.full,className:"pf-u-mt-4xl"},s().createElement(o.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),s().createElement(o.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),s().createElement(o.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},a),s().createElement(o.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r),!n&&s().createElement(o.EmptyStateSecondaryActions,null,s().createElement(o.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,u.Z)()},l)),m&&s().createElement(o.EmptyStateSecondaryActions,null,m)))};m.propTypes={onClose:i().func.isRequired,successfulMessage:i().node.isRequired,hideSourcesButton:i().bool,returnButtonTitle:i().node.isRequired,title:i().node,linkText:i().node,secondaryActions:i().node},m.defaultProps={title:s().createElement(l.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:s().createElement(l.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const d=m},4435:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(92950),s=a.n(n),r=a(45697),i=a.n(r),l=a(86896),o=a(44012),c=a(92277),u=a(5913),m=function(e){var t=e.onClose,a=e.returnButtonTitle,n=e.title,r=e.secondaryActions,i=(0,l.Z)();return s().createElement(c.Bullseye,null,s().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},s().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),s().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),s().createElement(c.EmptyStateBody,null,i.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:s().createElement("br",{key:"br"})})),s().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a),r&&s().createElement(c.EmptyStateSecondaryActions,null,r)))};m.propTypes={onClose:i().func.isRequired,returnButtonTitle:i().node.isRequired,title:i().node,secondaryActions:i().node},m.defaultProps={title:s().createElement(o.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const d=m},5746:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=function(e,t){var a,n,s,r,i,l;return(null===(a=e.applications)||void 0===a||null===(n=a.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===n?void 0:n.availability_status_error)||(null===(s=e.endpoint)||void 0===s||null===(r=s.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===r?void 0:r.availability_status_error)||(null===(i=e.authentications)||void 0===i||null===(l=i.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===l?void 0:l.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},24160:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=function(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"}}}]);
//# sourceMappingURL=../sourcemaps/3371.5f0c6abae3e18f825b91.js.map