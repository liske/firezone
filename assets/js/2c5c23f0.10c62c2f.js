"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[2065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Deploy",sidebar_position:2,description:"Install Firezone's WireGuard\xae-based secure access platform on a support host using our Docker (recommended) or Omnibus deployment methods."},a="Deploy Firezone",l={unversionedId:"deploy/README",id:"deploy/README",title:"Deploy",description:"Install Firezone's WireGuard\xae-based secure access platform on a support host using our Docker (recommended) or Omnibus deployment methods.",source:"@site/docs/deploy/README.mdx",sourceDirName:"deploy",slug:"/deploy/",permalink:"/deploy/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/README.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy",sidebar_position:2,description:"Install Firezone's WireGuard\xae-based secure access platform on a support host using our Docker (recommended) or Omnibus deployment methods."},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Docker",permalink:"/deploy/docker/"}},s={},p=[{value:"Deployment methods",id:"deployment-methods",level:2},{value:"Prepare to deploy",id:"prepare-to-deploy",level:2},{value:"Create a DNS record",id:"create-a-dns-record",level:3},{value:"Set up SSL",id:"set-up-ssl",level:3},{value:"Setting up ACME for Docker-based deployments",id:"setting-up-acme-for-docker-based-deployments",level:4},{value:"Open required firewall ports",id:"open-required-firewall-ports",level:3},{value:"Resource requirements",id:"resource-requirements",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-firezone"},"Deploy Firezone"),(0,o.kt)("p",null,"Firezone can be deployed on most Docker-supported platforms in about a minute.\nRead more below to get started."),(0,o.kt)("h2",{id:"deployment-methods"},"Deployment methods"),(0,o.kt)("p",null,"You have two options for deploying Firezone:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"docker"},"Docker")," (recommended)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"omnibus"},"Omnibus"))),(0,o.kt)("p",null,"Docker is the easiest way to install, manage, and upgrade Firezone and is the\npreferred method of deployment."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Chef Infra Client, the configuration system Chef Omnibus relies on, has been\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.chef.io/versions/"},"scheduled for End-of-Life in 2024"),". As such,\nsupport for Omnibus-based deployments will be removed in a future version of\nFirezone. To transition to Docker from Omnibus today, follow our ",(0,o.kt)("a",{parentName:"p",href:"../administer/migrate"},"migration guide\n"),".")),(0,o.kt)("h2",{id:"prepare-to-deploy"},"Prepare to deploy"),(0,o.kt)("p",null,"Regardless of which deployment method you choose, you'll need to follow the\npreparation steps below before deploying Firezone to production."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-dns-record"},"Create a DNS record")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#set-up-ssl"},"Set up SSL")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#open-required-firewall-ports"},"Open required firewall ports"))),(0,o.kt)("h3",{id:"create-a-dns-record"},"Create a DNS record"),(0,o.kt)("p",null,"Firezone requires a fully-qualified domain name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"firezone.company.com"),")\nfor production use. You'll need to create the appropriate DNS record at your\nregistrar to achieve this. Typically this is either an A, CNAME, or AAAA record\ndepending on your requirements."),(0,o.kt)("h3",{id:"set-up-ssl"},"Set up SSL"),(0,o.kt)("p",null,"You'll need a valid SSL certificate to use Firezone in a production capacity.\nFirezone supports ACME for automatic provisioning of SSL certificates for both\nDocker-based and Omnibus-based installations. This is recommended in most cases."),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(c,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,o.kt)("h4",{id:"setting-up-acme-for-docker-based-deployments"},"Setting up ACME for Docker-based deployments"),(0,o.kt)("p",null,"For Docker-based deployments, the simplest way to provision an SSL\ncertificate is to use our Caddy service example in docker-compose.yml.\nCaddy uses ACME to automatically provision SSL certificates as long as\nit's available on port 80/tcp and the DNS record for the server is valid."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"docker"},"Docker deployment guide")," for more info.")),(0,o.kt)(c,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,o.kt)("p",null,"For Omnibus-based deployments, ACME is disabled by default to maintain\ncompatibility with existing installations."),(0,o.kt)("p",null,"To enable ACME, ensure the following conditions are met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"80/tcp")," is allow inbound"),(0,o.kt)("li",{parentName:"ul"},"The bundled Firezone ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," service is enabled and functioning"),(0,o.kt)("li",{parentName:"ul"},"You have a valid DNS record assigned to this instance's public IP"),(0,o.kt)("li",{parentName:"ul"},"The following 3 settings are configured in the ",(0,o.kt)("a",{parentName:"li",href:"../reference/configuration-file"},"configuration file"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['external_url']"),": The FQDN for the server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['ssl']['email_address']"),": The email that will be used\nfor the issued certificates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default['firezone']['ssl']['acme']['enabled']"),": Set this to true to enable it.")))))),(0,o.kt)("h3",{id:"open-required-firewall-ports"},"Open required firewall ports"),(0,o.kt)("p",null,"By default, Firezone requires ports ",(0,o.kt)("inlineCode",{parentName:"p"},"443/tcp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"51820/udp")," to be\naccessible for HTTPS and WireGuard traffic respectively.\nThese ports can change based on what you've configured in the configuration file.\nSee the\n",(0,o.kt)("a",{parentName:"p",href:"../reference/configuration-file"},"configuration file reference"),"\nfor details."),(0,o.kt)("h3",{id:"resource-requirements"},"Resource requirements"),(0,o.kt)("p",null,"We recommend ",(0,o.kt)("strong",{parentName:"p"},"starting with 1 vCPU and 1 GB of RAM and scaling up")," as the\nnumber of users and devices grows."),(0,o.kt)("p",null,"For Omnibus-based deployments on servers with less than 1GB of memory, we\nrecommend turning on swap to prevent the Linux kernel from killing\nFirezone processes unexpectedly. When this happens, it's often difficult to\ndebug and results in strange, unpredictable failure modes."),(0,o.kt)("p",null,"For the VPN tunnels themselves, Firezone uses in-kernel WireGuard, so its\nperformance should be very good. 1 vCPU should be more than enough to saturate\na 1 Gbps link."))}f.isMDXComponent=!0}}]);