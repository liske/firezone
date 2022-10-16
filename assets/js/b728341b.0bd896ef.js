"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[9955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"Multi-Factor Authentication",sidebar_position:2},a=void 0,l={unversionedId:"authenticate/multi-factor",id:"authenticate/multi-factor",title:"Multi-Factor Authentication",description:"You have two options for activating MFA with Firezone:",source:"@site/docs/authenticate/multi-factor.mdx",sourceDirName:"authenticate",slug:"/authenticate/multi-factor",permalink:"/authenticate/multi-factor",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/authenticate/multi-factor.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Multi-Factor Authentication",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Local Authentication",permalink:"/authenticate/local-auth"},next:{title:"OpenID Connect",permalink:"/authenticate/oidc/"}},c={},u=[{value:"MFA with Firezone",id:"mfa-with-firezone",level:2},{value:"MFA with Identity Provider",id:"mfa-with-identity-provider",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You have two options for activating MFA with Firezone:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable a TOTP-based second factor for the local email/password\nauthentication method."),(0,i.kt)("li",{parentName:"ol"},"Configure Firezone to SSO via one of our ",(0,i.kt)("a",{parentName:"li",href:"../#integrate-an-sso-provider"},"supported identity providers\n")," and enable MFA through the identity provider.")),(0,i.kt)("h2",{id:"mfa-with-firezone"},"MFA with Firezone"),(0,i.kt)("p",null,"Firezone currently supports using a time-based one time password\n(TOTP) as an additional factor. This is supported with the local authentication\nmethod only; for SSO authentication we recommend enabling your provider's MFA\nfunctionality ",(0,i.kt)("a",{parentName:"p",href:"#mfa-with-identity-provider"},"as described below"),"."),(0,i.kt)("p",null,"Admins can visit ",(0,i.kt)("inlineCode",{parentName:"p"},"/settings/account/register_mfa")," in the admin portal to\ngenerate a QR code to be scanned by your authenticator app."),(0,i.kt)("p",null,"Unprivileged users can visit ",(0,i.kt)("inlineCode",{parentName:"p"},"/user_account/register_mfa")," after logging into\nthe user portal."),(0,i.kt)("h2",{id:"mfa-with-identity-provider"},"MFA with Identity Provider"),(0,i.kt)("p",null,"Most identity providers support additional authentication factors in addition to\nemail/password. Consult your provider's documentation to enforce an\nadditional factor. We have included links to a few common providers below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.okta.com/en-us/Content/Topics/Security/mfa/mfa-home.htm"},"Okta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks"},"Azure AD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/a/answer/175197"},"Google")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.onelogin.com/getting-started/free-trial-plan/add-mfa"},"Onelogin"))))}s.isMDXComponent=!0}}]);