"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[5300],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?i.createElement(m,s(s({ref:n},c),{},{components:t})):i.createElement(m,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8542:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],o={title:"Reverse Tunnel",sidebar_position:2},l=void 0,u={unversionedId:"user-guides/use-cases/reverse-tunnel",id:"user-guides/use-cases/reverse-tunnel",title:"Reverse Tunnel",description:"This guide will walk through using Firezone as a relay to connect",source:"@site/docs/user-guides/use-cases/reverse-tunnel.md",sourceDirName:"user-guides/use-cases",slug:"/user-guides/use-cases/reverse-tunnel",permalink:"/user-guides/use-cases/reverse-tunnel",draft:!1,editUrl:"https://github.com/firezone/firezone/docs/user-guides/use-cases/reverse-tunnel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Reverse Tunnel",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Split Tunnel VPN",permalink:"/user-guides/use-cases/split-tunnel"},next:{title:"NAT Gateway",permalink:"/user-guides/use-cases/nat-gateway"}},c={},d=[{value:"General Case - Node to Node",id:"general-case---node-to-node",level:2},{value:"Admin Case - One to Many Nodes",id:"admin-case---one-to-many-nodes",level:2},{value:"Related Guides",id:"related-guides",level:3}],p={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will walk through using Firezone as a relay to connect\ntwo devices. A typical use case for this configuration is to enable an\nadministrator to access a server, container, or machine that is normally\nbehind a NAT or firewall."),(0,a.kt)("h2",{id:"general-case---node-to-node"},"General Case - Node to Node"),(0,a.kt)("p",null,"This example demonstrates a simple scenario where a tunnel is established\nbetween Device A and Device B."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/155856835-2ad1f686-d894-43d1-8862-e3a8fcccee5c.png",alt:"node-to-node"}),"\nStart by creating Device A and Device B by navigating to ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/[user_id]/new_device"),".\nIn the settings for each device, ensure the following parameters are set to the\nvalues listed below. You can set device settings when creating the device config\n(see ",(0,a.kt)("a",{parentName:"p",href:"../add-devices"},"Add Devices"),").\nIf you need to update settings on an existing device, you can do so by generating\na new device config."),(0,a.kt)("p",null,"Note ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentKeepalive")," can also be set in on the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/settings/defaults")," page for all devices."),(0,a.kt)("p",null,"Device A"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.2/32"),": This is the IP or range of IPs of Device B"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25")," If the device is behind a NAT, this ensures the\ndevice is able to keep the tunnel alive and continue to receive packets from\nthe WireGuard interface. Usually a value of ",(0,a.kt)("inlineCode",{parentName:"li"},"25")," is sufficient, but you may\nneed to decrease this value depending on your environment.")),(0,a.kt)("p",null,"Device B"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.3/32"),": This is the IP or range of IPs of Device A"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25"))),(0,a.kt)("h2",{id:"admin-case---one-to-many-nodes"},"Admin Case - One to Many Nodes"),(0,a.kt)("p",null,"This example demonstrates a scenario where Device A can communicate\nbi-directionally with Devices B through D. This configuration could represent an\nadministrator or engineer accessing multiple resources\n(servers, containers, or machines) in different networks."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/155856838-03e968d9-bc1e-46ce-a32f-9f53f3566526.png",alt:"node-to-multiple-nodes"})),(0,a.kt)("p",null,"In the settings for each device, ensure the following parameters are set to the\nvalues listed below. You can set device settings when creating the device config\n(see ",(0,a.kt)("a",{parentName:"p",href:"../add-devices"},"Add Devices"),").\nIf you need to update settings on an existing device, you can do so by generating\na new device config."),(0,a.kt)("p",null,"Device A (Administrator Node)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.3/32, 10.3.2.4/32, 10.3.2.5/32"),": This is the IP of\ndevices B through D. Optionally you could set a range of IPs as long as it\nincludes the IPs of Devices B through D."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25")," If the device is behind a NAT, this ensures the\ndevice is able to keep the tunnel alive and continue to receive packets from\nthe WireGuard interface. Usually a value of ",(0,a.kt)("inlineCode",{parentName:"li"},"25")," is sufficient, but you may\nneed to decrease this value depending on your environment.")),(0,a.kt)("p",null,"Device B"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.2/32"),": This is the IP or range of IPs of Device A"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25"))),(0,a.kt)("p",null,"Device C"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.2/32"),": This is the IP or range of IPs of Device A"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25"))),(0,a.kt)("p",null,"Device D"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowedIPs = 10.3.2.2/32"),": This is the IP or range of IPs of Device A"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PersistentKeepalive = 25"))),(0,a.kt)("h3",{id:"related-guides"},"Related Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./nat-gateway"},"NAT Gateway"))))}f.isMDXComponent=!0}}]);