"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={title:"Google",sidebar_position:5},a=void 0,l={unversionedId:"authenticate/google",id:"authenticate/google",title:"Google",description:"Firezone supports Single Sign-On (SSO) using Google Workspace and Cloud Identity",source:"@site/docs/authenticate/google.md",sourceDirName:"authenticate",slug:"/authenticate/google",permalink:"/authenticate/google",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/authenticate/google.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Google",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Azure Active Directory",permalink:"/authenticate/azuread"},next:{title:"Onelogin",permalink:"/authenticate/onelogin"}},c={},p=[{value:"Obtain Config Settings",id:"obtain-config-settings",level:2},{value:"Step 1 - OAuth Config Screen",id:"step-1---oauth-config-screen",level:3},{value:"Step 2 - Create OAuth Client IDs",id:"step-2---create-oauth-client-ids",level:3},{value:"Integrate With Firezone",id:"integrate-with-firezone",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firezone supports Single Sign-On (SSO) using Google Workspace and Cloud Identity\nthrough the generic OIDC connector. This guide will walk you through how to\nobtain the following config settings required for the integration:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"discovery_document_uri"),": The\n",(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),"\nwhich returns a JSON document used to construct subsequent requests to this\nOIDC provider."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),": The client ID of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),": The client secret of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri"),": Instructs OIDC provider where to redirect after authentication.\nThis should be your Firezone ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/<provider_key>/callback/"),"\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/google/callback/"),")."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"response_type"),": Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"scope"),": ",(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. This should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"openid email profile"),"\nto provide Firezone with the user's email in the returned claims."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": The button label text that shows up on your Firezone login screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/156853456-1ab3f041-1002-4c79-a266-82acb5802890.gif",alt:"Firezone Google SSO Login"})),(0,i.kt)("h2",{id:"obtain-config-settings"},"Obtain Config Settings"),(0,i.kt)("h3",{id:"step-1---oauth-config-screen"},"Step 1 - OAuth Config Screen"),(0,i.kt)("p",null,"If this is the first time you are creating a new OAuth client ID, you will\nbe asked to configure a consent screen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),": Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal")," for user type. This ensures only accounts\nbelonging to users in your Google Workspace Organization can create device configs.\nDO NOT select ",(0,i.kt)("inlineCode",{parentName:"p"},"External")," unless you want to enable anyone with a valid Google Account\nto create device configs."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/156853731-1e4ad1d4-c761-4a28-84db-cd880e3c46a3.png",alt:"OAuth Consent Internal"})),(0,i.kt)("p",null,"On the App information screen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"App name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Firezone")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"App logo"),": ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/52545545/156854754-da66a9e1-33d5-47f5-877f-eff8b330ab2b.png"},"Firezone logo"),"\n(save link as)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Application home page"),": the URL of your Firezone instance."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Authorized domains"),": the top level domain of your Firezone instance.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/156853737-211ab7de-4c8f-4104-b3e8-5586c7a2ce6e.png",alt:"OAuth Consent App Info"})),(0,i.kt)("p",null,"On the next step add the following scopes:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/168910904-57e86d71-b8ae-4b11-8b9c-bf8a19127065.png",alt:"OAuth Consent Scopes"})),(0,i.kt)("h3",{id:"step-2---create-oauth-client-ids"},"Step 2 - Create OAuth Client IDs"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This section is based off Google's own documentation on\n",(0,i.kt)("a",{parentName:"em",href:"https://support.google.com/cloud/answer/6158849"},"setting up OAuth 2.0"),".")),(0,i.kt)("p",null,"Visit the Google Cloud Console\n",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},"Credentials page"),"\npage, click ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Create Credentials")," and select ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth client ID"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/155904211-c36095b9-4bbd-44c1-95f8-bb165e314af3.png",alt:"Create OAuth Client ID"})),(0,i.kt)("p",null,"On the OAuth client ID creation screen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Type")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Web application")),(0,i.kt)("li",{parentName:"ol"},"Add your Firezone ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/google/callback/"),"\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/google/callback/"),") as an entry to\nAuthorized redirect URIs.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/168910923-819300d3-b0c2-49a6-81ee-884dce471362.png",alt:"Create OAuth client ID"})),(0,i.kt)("p",null,"After creating the OAuth client ID, you will be given a Client ID and Client Secret.\nThese will be used together with the redirect URI in the next step."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/168913326-10e694d2-cda0-4ed3-b401-2406b36af7c0.png",alt:"Copy Client ID and Secret"})),(0,i.kt)("h2",{id:"integrate-with-firezone"},"Integrate With Firezone"),(0,i.kt)("p",null,"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/firezone/firezone.rb")," to include the options below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'# Using Google as the SSO identity provider\ndefault[\'firezone\'][\'authentication\'][\'oidc\'] = {\n  google: {\n    discovery_document_uri: "https://accounts.google.com/.well-known/openid-configuration",\n    client_id: "<CLIENT_ID>",\n    client_secret: "<CLIENT_SECRET>",\n    redirect_uri: "https://firezone.example.com/auth/oidc/google/callback/",\n    response_type: "code",\n    scope: "openid email profile",\n    label: "Google"\n  }\n}\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"firezone-ctl reconfigure")," to update the application.\nYou should now see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign in with Google")," button at the root Firezone URL."))}u.isMDXComponent=!0}}]);