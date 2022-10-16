"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[8046],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(y,p(p({ref:r},s),{},{components:t})):n.createElement(y,p({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8460:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"HAProxy",sidebar_position:3},p=void 0,i={unversionedId:"reference/reverse-proxy-templates/haproxy",id:"reference/reverse-proxy-templates/haproxy",title:"HAProxy",description:"The following is an example reverse proxy configuration for [HAProxy](",source:"@site/docs/reference/reverse-proxy-templates/haproxy.mdx",sourceDirName:"reference/reverse-proxy-templates",slug:"/reference/reverse-proxy-templates/haproxy",permalink:"/reference/reverse-proxy-templates/haproxy",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/reference/reverse-proxy-templates/haproxy.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"HAProxy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Traefik",permalink:"/reference/reverse-proxy-templates/traefik"},next:{title:"Firewall Templates",permalink:"/reference/firewall-templates/"}},l={},c=[],s={toc:c};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following is an example reverse proxy configuration for ",(0,o.kt)("a",{parentName:"p",href:"https://www.haproxy.org/"},"HAProxy")," proxy. We assume\n",(0,o.kt)("inlineCode",{parentName:"p"},"default['firezone']['phoenix']['port']")," to be ",(0,o.kt)("inlineCode",{parentName:"p"},"13000")," and the proxy running on\nthe same host as the Firezone app."),(0,o.kt)("p",null,"Since Firezone requires HTTPS for the web portal, please bear in mind a\ndownstream proxy will need to terminate SSL connections in this scenario."),(0,o.kt)("p",null,"You can also configure HAProxy to handle the SSL termination as explained\n",(0,o.kt)("a",{parentName:"p",href:"https://www.haproxy.com/blog/haproxy-ssl-termination/"},"here")," but take into\naccount that the ",(0,o.kt)("inlineCode",{parentName:"p"},"pem")," file expected by ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl crt")," option needs to contain\nboth the ",(0,o.kt)("inlineCode",{parentName:"p"},"crt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"defaults\n    mode http\n\nfrontend app1\n    bind *:80\n    option forwardfor\n    default_backend             backend_app1\n\nbackend backend_app1\n    server mybackendserver 127.0.0.1:13000\n")))}f.isMDXComponent=!0}}]);