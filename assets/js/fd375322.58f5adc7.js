"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[9413],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},N="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),N=p(n),u=r,s=N["".concat(d,".").concat(u)]||N[u]||k[u]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[N]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4523:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Environment Variables",sidebar_position:1},i="Docker environment variables",o={unversionedId:"reference/env-vars",id:"reference/env-vars",title:"Environment Variables",description:"Most day-to-day config of Firezone can (and should) be done via the",source:"@site/docs/reference/env-vars.mdx",sourceDirName:"reference",slug:"/reference/env-vars",permalink:"/reference/env-vars",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/www/docs/reference/env-vars.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Environment Variables",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/reference/"},next:{title:"Configuration File",permalink:"/reference/configuration-file"}},d={},p=[{value:"Environment Variable Listing",id:"environment-variable-listing",level:2}],m={toc:p},N="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-environment-variables"},"Docker environment variables"),(0,r.kt)("p",null,"Most day-to-day config of Firezone can (and should) be done via the\nFirezone Web UI."),(0,r.kt)("p",null,"For Docker-based deployments, deployment-related or infrastructure-related\nconfig of Firezone is done through environment variables passed to the\nFirezone image upon launch."),(0,r.kt)("p",null,"Read more about configuring Firezone in our ",(0,r.kt)("a",{parentName:"p",href:"/deploy/configure"},"configure guide"),"."),(0,r.kt)("h2",{id:"environment-variable-listing"},"Environment Variable Listing"),(0,r.kt)("p",null,"We recommend setting these in your Docker ENV file (",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.firezone/.env")," by\ndefault). Required fields in ",(0,r.kt)("strong",{parentName:"p"},"bold"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"EXTERNAL_URL"))),(0,r.kt)("td",{parentName:"tr",align:null},"The external URL the web UI will be accessible at. Must be a valid FQDN for ACME SSL issuance to function."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ADMIN_EMAIL"))),(0,r.kt)("td",{parentName:"tr",align:null},"Primary administrator email."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DEFAULT_ADMIN_PASSWORD"))),(0,r.kt)("td",{parentName:"tr",align:null},"Default password that will be used for creating or resetting the primary administrator account."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DATABASE_PASSWORD"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password used to connect to the DB."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"DATABASE_ENCRYPTION_KEY"))),(0,r.kt)("td",{parentName:"tr",align:null},"The base64-encoded symmetric encryption key used to encrypt and decrypt sensitive fields."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"GUARDIAN_SECRET_KEY"))),(0,r.kt)("td",{parentName:"tr",align:null},"Secret key used for signing JWTs."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"COOKIE_ENCRYPTION_SALT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Encryption salt for cookies issued by the Phoenix web application."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"COOKIE_SIGNING_SALT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Signing salt for cookies issued by the Phoenix web application."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LIVE_VIEW_SIGNING_SALT"))),(0,r.kt)("td",{parentName:"tr",align:null},"Signing salt for Phoenix LiveView connection tokens."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SECRET_KEY_BASE"))),(0,r.kt)("td",{parentName:"tr",align:null},"Primary secret key base for the Phoenix application."),(0,r.kt)("td",{parentName:"tr",align:null},"base64-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated upon install with ",(0,r.kt)("inlineCode",{parentName:"td"},"docker run firezone/firezone bin/gen-env"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESET_ADMIN_ON_BOOT")),(0,r.kt)("td",{parentName:"tr",align:null},"Set this variable to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to create or reset the admin with email specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"ADMIM_EMAIL")," to password ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ADMIN_PASSWORD")," on boot. Note: This ",(0,r.kt)("strong",{parentName:"td"},"will not")," change the status of local authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOCAL_AUTH_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable the local authentication method for all users."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SAML_ENTITY_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"SAML Entity ID."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"urn:firezone.dev:firezone-app"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SAML_KEYFILE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the SAML keyfile inside the container."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/var/firezone/saml.key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SAML_CERTFILE_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the SAML certificate file inside the container."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/var/firezone/saml.crt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"Database host."),(0,r.kt)("td",{parentName:"tr",align:null},"IP or hostname"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgres"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Database port."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5432"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of database."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"firezone"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"Database user."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgres"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_POOL")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the Firezone connection pool."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_SSL")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to connect to the database over SSL"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_SSL_OPTS")),(0,r.kt)("td",{parentName:"tr",align:null},"Map of options to send to the ",(0,r.kt)("inlineCode",{parentName:"td"},":ssl_opts")," option when connecting over SSL. See ",(0,r.kt)("a",{parentName:"td",href:"https://hexdocs.pm/ecto_sql/Ecto.Adapters.Postgres.html#module-connection-options"},"Ecto.Adapters.Postgres documentation")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_PARAMETERS")),(0,r.kt)("td",{parentName:"tr",align:null},"Map of parameters to send to the ",(0,r.kt)("inlineCode",{parentName:"td"},":parameters")," option when connecting to the database. See ",(0,r.kt)("a",{parentName:"td",href:"https://hexdocs.pm/ecto_sql/Ecto.Adapters.Postgres.html#module-connection-options"},"Ecto.Adapters.Postgres documentation"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HTTP_CLIENT_SSL_OPTS")),(0,r.kt)("td",{parentName:"tr",align:null},"Map of options to use for outbound SSL connections for OIDC document retrieval and Connectivity Checks."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded String, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'{"verify": "verify_none", "cacertfile": "/etc/ssl/cacerts.pem"}'),". See ",(0,r.kt)("a",{parentName:"td",href:"https://www.erlang.org/doc/man/ssl.html#type-client_option"},"Erlang's SSL options")," for a full list of client options."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONNECTIVITY_CHECKS_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable periodic checking for egress connectivity. Determines the instance's public IP to populate ",(0,r.kt)("inlineCode",{parentName:"td"},"Endpoint")," fields."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONNECTIVITY_CHECKS_INTERVAL")),(0,r.kt)("td",{parentName:"tr",align:null},"Periodicity in seconds to check for egress connectivity."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3600"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_TRUSTED_PROXIES")),(0,r.kt)("td",{parentName:"tr",align:null},"List of trusted reverse proxies."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MAX_DEVICES_PER_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of devices to allow per user."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OUTBOUND_EMAIL_FROM")),(0,r.kt)("td",{parentName:"tr",align:null},"From address to use for sending outbound emails. If not set, sending email will be disabled (default)."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OUTBOUND_EMAIL_PROVIDER")),(0,r.kt)("td",{parentName:"tr",align:null},"Method to use for sending outbound email. If not set, will default to ",(0,r.kt)("inlineCode",{parentName:"td"},"sendmail"),". See the list of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/swoosh/swoosh#adapters"},"Swoosh Adapters"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OUTBOUND_EMAIL_CONFIGS")),(0,r.kt)("td",{parentName:"tr",align:null},"Email provider-specific config."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded String E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'{"gmail": {"access_token": "..."}, "smtp": {"relay": "smtp.example.com"}}'),". See the ",(0,r.kt)("a",{parentName:"td",href:"https://hexdocs.pm/swoosh/"},"swoosh docs"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PHOENIX_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Internal port to listen on for the Phoenix web server."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"13000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRIVATE_CLIENTS")),(0,r.kt)("td",{parentName:"tr",align:null},"List of IPs / CIDRs to consider trusted for purposes of correctly parsing the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Forwarded-For")," header."),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded list of IPs / CIDRs."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_IPV4_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable tunnel-side IPv4 connectivity."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_IPV4_MASQUERADE")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable IPv4 masquerade."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_IPV6_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable tunnel IPv6 addresses."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_IPV6_MASQUERADE")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable IPv6 masquerade."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_MTU")),(0,r.kt)("td",{parentName:"tr",align:null},"MTU to use for the server-side WireGuard MTU interface."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1280"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WIREGUARD_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Port to listen on for WireGuard connections."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"51820"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SECURE_COOKIES")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable requiring secure cookies. Required for HTTPS."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TELEMETRY_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / disable product telemetry. Read more about ",(0,r.kt)("a",{parentName:"td",href:"/reference/telemetry"},"what that means here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))))}k.isMDXComponent=!0}}]);