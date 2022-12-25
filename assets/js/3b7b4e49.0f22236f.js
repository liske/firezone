"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[1234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Local Authentication",sidebar_position:1},i="Local authentication (username & password)",c={unversionedId:"authenticate/local-auth",id:"authenticate/local-auth",title:"Local Authentication",description:"By default, Firezone will use local email / password for authenticating users to",source:"@site/docs/authenticate/local-auth.mdx",sourceDirName:"authenticate",slug:"/authenticate/local-auth",permalink:"/authenticate/local-auth",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/local-auth.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Local Authentication",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authenticate",permalink:"/authenticate/"},next:{title:"Multi-Factor Authentication",permalink:"/authenticate/multi-factor"}},l={},u=[{value:"Disabling local authentication",id:"disabling-local-authentication",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-authentication-username--password"},"Local authentication (username & password)"),(0,r.kt)("p",null,"By default, Firezone will use local email / password for authenticating users to\nthe Firezone portal. Administrators can add users and assign their passwords on\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"/users")," page. See ",(0,r.kt)("a",{parentName:"p",href:"/user-guides/add-users/"},"Add users")," for more details."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For production installations, we highly recommend ",(0,r.kt)("a",{parentName:"p",href:"/authenticate/multi-factor/"},"enabling TOTP-based MFA"),"\nfor any accounts using the local authentication method.")),(0,r.kt)("h2",{id:"disabling-local-authentication"},"Disabling local authentication"),(0,r.kt)("p",null,"If you wish to completely disable local authentication in favor of an SSO-only\napproach, see our ",(0,r.kt)("a",{parentName:"p",href:"/authenticate/oidc/"},"OIDC")," or ",(0,r.kt)("a",{parentName:"p",href:"/authenticate/saml/"},"SAML")," guides."))}p.isMDXComponent=!0}}]);