"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[9439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=s(r),u=a,d=f["".concat(c,".").concat(u)]||f[u]||p[u]||i;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),a=r(86010),i=r(53438),l=r(39960),o=r(13919),c=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",f="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:i,description:l}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),l&&n.createElement("p",{className:(0,a.Z)("text--truncate",f),title:l},l))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const l=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},84841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var n=r(87462),a=(r(67294),r(3905)),i=r(52991),l=r(53438);const o={title:"Firewall Templates",sidebar_position:9},c=void 0,s={unversionedId:"reference/firewall-templates/README",id:"reference/firewall-templates/README",title:"Firewall Templates",description:"Firewall templates to secure the Firezone server are available from here. If",source:"@site/docs/reference/firewall-templates/README.mdx",sourceDirName:"reference/firewall-templates",slug:"/reference/firewall-templates/",permalink:"/reference/firewall-templates/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/reference/firewall-templates/README.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Firewall Templates",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"HAProxy",permalink:"/reference/reverse-proxy-templates/haproxy"},next:{title:"nftables Firewall Template",permalink:"/reference/firewall-templates/nftables"}},m={},f=[],p={toc:f};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Firewall templates to secure the Firezone server are available from here. If\nthe server is not running any services other than Firezone, the firewall\ntemplate should work as-is."),(0,a.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);