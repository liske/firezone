"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[6209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={title:"Authenticate",sidebar_position:3},a=void 0,l={unversionedId:"authenticate/README",id:"authenticate/README",title:"Authenticate",description:"Firezone supports the following authentication methods:",source:"@site/docs/authenticate/README.mdx",sourceDirName:"authenticate",slug:"/authenticate/",permalink:"/authenticate/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/authenticate/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Authenticate",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Reverse Proxy",permalink:"/deploy/advanced/reverse-proxy"},next:{title:"Local Authentication",permalink:"/authenticate/local-auth"}},s={},u=[{value:"Integrate an SSO Provider",id:"integrate-an-sso-provider",level:2},{value:"The OIDC Redirect URL",id:"the-oidc-redirect-url",level:3},{value:"Enforce Periodic Re-authentication",id:"enforce-periodic-re-authentication",level:2},{value:"Re-authentication",id:"re-authentication",level:3},{value:"VPN Connection Status",id:"vpn-connection-status",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Firezone supports the following authentication methods:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"local-auth"},"Local email/password (default)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"oidc"},"SSO authentication via OpenID Connect")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"saml"},"SSO authentication via SAML 2.0"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your Identity Provider doesn't work with the methods listed above,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.firezone.dev/contact/sales"},"contact us")," about custom integrations.")),(0,r.kt)("h2",{id:"integrate-an-sso-provider"},"Integrate an SSO Provider"),(0,r.kt)("p",null,"We've included instructions on how to set up Firezone with several popular\nidentity providers using our Generic OIDC integration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/okta"},"Okta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/azuread"},"Azure Active Directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/google"},"Google")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/onelogin"},"Onelogin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/zitadel"},"Zitadel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"oidc/auth0"},"Auth0"))),(0,r.kt)("p",null,"If your identity provider is not listed above, but has a generic OIDC or SAML\nconnector, please consult their documentation to find instructions on obtaining\nthe configuration settings required. Instructions for setting up Firezone with any\ngeneric OIDC provider can be found ",(0,r.kt)("a",{parentName:"p",href:"oidc"},"here"),"."),(0,r.kt)("p",null,"Open a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/issues"},"Github issue"),"\nto request documentation or submit a pull request to add documentation for your\nprovider."),(0,r.kt)("p",null,"Need help setting up SSO? Join our ",(0,r.kt)("a",{parentName:"p",href:"https://www.firezone.dev/slack"},"Firezone Slack group\n")," for community support or\n",(0,r.kt)("a",{parentName:"p",href:"https://www.firezone.dev/contact/sales"},"contact us for paid, hands-on support\n"),"."),(0,r.kt)("h3",{id:"the-oidc-redirect-url"},"The OIDC Redirect URL"),(0,r.kt)("p",null,"For each OIDC provider a corresponding URL is created for redirecting to\nthe configured provider's sign-in URL. The URL format is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://firezone.example.com/auth/oidc/PROVIDER"),"\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"PROVIDER")," is the OIDC key for that particular provider."),(0,r.kt)("p",null,"For example, the OIDC config below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "google": {\n    "client_id": "...",\n    "...": "..."\n  },\n  "okta": {\n    "client_id": "...",\n    "...": "..."\n  }\n}\n')),(0,r.kt)("p",null,"would generate the following URLs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/google")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/okta"))),(0,r.kt)("p",null,"These URLs could then be distributed to end users for direct navigation to\nthe identity provider's login portal for authentication to Firezone."),(0,r.kt)("h2",{id:"enforce-periodic-re-authentication"},"Enforce Periodic Re-authentication"),(0,r.kt)("p",null,"Periodic re-authentication can be enforced by changing the setting in\n",(0,r.kt)("inlineCode",{parentName:"p"},"settings/security"),". This can be used to ensure a user must sign in to Firezone\nperiodically in order to maintain their VPN session."),(0,r.kt)("p",null,"You can set the session length to a minimum of ",(0,r.kt)("strong",{parentName:"p"},"1 hour")," and maximum of ",(0,r.kt)("strong",{parentName:"p"},"90 days"),".\nSetting this to Never disables this setting, allowing VPN sessions indefinitely.\nThis is the default."),(0,r.kt)("h3",{id:"re-authentication"},"Re-authentication"),(0,r.kt)("p",null,"To re-authenticate an expired VPN session, a user will need to turn off their\nVPN session and sign in to the Firezone portal (URL specified during\n",(0,r.kt)("a",{parentName:"p",href:"../deploy#prepare-to-deploy"},"deployment"),")."),(0,r.kt)("p",null,"See detailed Client Instructions on how to re-authenticate your session\n",(0,r.kt)("a",{parentName:"p",href:"../user-guides/client-instructions"},"here"),"."),(0,r.kt)("h4",{id:"vpn-connection-status"},"VPN Connection Status"),(0,r.kt)("p",null,"A user's connection status is shown on the Users page under the table column\n",(0,r.kt)("inlineCode",{parentName:"p"},"VPN Connection"),". The connection statuses are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ENABLED - The connection is enabled."),(0,r.kt)("li",{parentName:"ul"},"DISABLED - The connection is disabled by an administrator or OIDC refresh failure."),(0,r.kt)("li",{parentName:"ul"},"EXPIRED - The connection is disabled due to authentication expiration or a user\nhas not signed in for the first time.")))}p.isMDXComponent=!0}}]);