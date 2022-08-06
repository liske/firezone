"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Custom Reverse Proxy",sidebar_position:4},l=void 0,p={unversionedId:"deploy/reverse-proxies/README",id:"deploy/reverse-proxies/README",title:"Custom Reverse Proxy",description:"This is an advanced configuration. The default bundled Nginx proxy",source:"@site/docs/deploy/reverse-proxies/README.md",sourceDirName:"deploy/reverse-proxies",slug:"/deploy/reverse-proxies/",permalink:"/deploy/reverse-proxies/",draft:!1,editUrl:"https://github.com/firezone/firezone/docs/deploy/reverse-proxies/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Custom Reverse Proxy",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install Server",permalink:"/deploy/install-server"},next:{title:"Apache",permalink:"/deploy/reverse-proxies/apache"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Firezone configuration requirements",id:"firezone-configuration-requirements",level:3},{value:"Proxy requirements",id:"proxy-requirements",level:3},{value:"Security considerations",id:"security-considerations",level:2},{value:"Example configurations",id:"example-configurations",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is an advanced configuration. The default bundled Nginx proxy\nis suitable for the vast majority of use cases and is recommended for most\nusers. There are important security risks if the Firezone reverse proxy is\nnot set up correctly. Use only if you know what you are doing."))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Firezone comes with a bundled ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," reverse proxy,\nhowever, in some cases you might want to deploy your own server such as when\nusing behind your own load balancer."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Below you will find the requirements in order to setup Firezone and the\nreverse-proxies."),(0,o.kt)("h3",{id:"firezone-configuration-requirements"},"Firezone configuration requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Disable the bundled Nginx by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['nginx']['enabled']"),"\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," in the config file."),(0,o.kt)("li",{parentName:"ul"},"If you have any immediate proxies between your primary reverse proxy and the\nFirezone web app, add their IPs to\n",(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['phoenix']['external_trusted_proxies']"),". Because of the\nway the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},"X-Forwarded-For header works"),",\nthis is needed to parse the actual client's IP address to prevent\nspoofing.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"external_trusted_proxies")," list automatically implicitly includes the\nfollowing private CIDR ranges, even if they're not specified in the\nconfiguration file:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"172.16.0.0/12")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1926.0.0/16")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"::1/128")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fc00::/7"))),(0,o.kt)("p",{parentName:"div"},"This means any web requests originating from these IPs are automatically ignored\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," headers. If you're accessing Firezone from any IPs in\nthis range (as seen by the Firezone web app), be sure to add them to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"default['firezone']['phoenix']['clients']")," configuration option."))),(0,o.kt)("p",null,"Read more about the configuration options\n",(0,o.kt)("a",{parentName:"p",href:"/reference/configuration-file"},"here"),"."),(0,o.kt)("h3",{id:"proxy-requirements"},"Proxy requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All your proxies need to configure the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For")," header as explained\n",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},"here")),(0,o.kt)("li",{parentName:"ul"},"Your proxy should also set the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,o.kt)("li",{parentName:"ul"},"Your proxy ",(0,o.kt)("strong",{parentName:"li"},"must")," terminate SSL since we enforce ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies"},"secure cookies"),"."),(0,o.kt)("li",{parentName:"ul"},"Firezone requires the use of WebSockets to establish realtime connections. We\nrecommended following your proxy's specific documentation for supporting\nWebSockets as each proxy varies. In general, your proxy needs to be able to\nproxy HTTP 1.1 connections, and the Firezone web app expects the following\nheaders to be set:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Connection: upgrade")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Upgrade: websocket"))))),(0,o.kt)("h2",{id:"security-considerations"},"Security considerations"),(0,o.kt)("p",null,"In addition to the headers above, we recommend adding the following headers for\nsecurity purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"X-XSS-Protection: 1; mode=block")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"X-Content-Type-Options nosniff")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Referrer-Policy no-referrer-when-downgrade")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Security-Policy: default-src 'self' ws: wss: http: https: data: blob:\n'unsafe-inline'; frame-ancestors 'self';")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Permissions-Policy: interest-cohort=()"))),(0,o.kt)("p",null,"Since the upstream Firezone web app expects plain HTTP traffic, any requests the\nproxy forwards is sent over HTTP and thus is ",(0,o.kt)("strong",{parentName:"p"},"not encrypted"),". In most cases,\nthe reverse proxy is installed in a trusted network, and this is not an issue.\nBut the connection between your trusted proxy and the Firezone web app spans\nan untrusted network (such as the Internet), you may want to leave the bundled\n",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," proxy enabled for SSL termination, and set up your custom\nreverse proxy to proxy to that instead."),(0,o.kt)("h2",{id:"example-configurations"},"Example configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deploy/reverse-proxies/apache"},"Apache")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deploy/reverse-proxies/traefik"},"Traefik")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deploy/reverse-proxies/haproxy"},"HAProxy"))),(0,o.kt)("p",null,"These configurations are written to be as simple as possible. They're designed\nto function as a simple template which you can customize further to suit your\nneeds."),(0,o.kt)("p",null,"If you have a working configuration for a different reverse proxy or a different\nversion of an existing one we appreciate any\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/"},"contribution")," to expand the examples for\nthe community."))}m.isMDXComponent=!0}}]);