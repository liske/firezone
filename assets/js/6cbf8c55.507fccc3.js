"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[513],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,m=f["".concat(l,".").concat(u)]||f[u]||c[u]||a;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93942:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={title:"Traefik",sidebar_position:2},i=void 0,s={unversionedId:"reference/reverse-proxy-templates/traefik",id:"reference/reverse-proxy-templates/traefik",title:"Traefik",description:"The following are examples for configuring the Traefik",source:"@site/docs/reference/reverse-proxy-templates/traefik.mdx",sourceDirName:"reference/reverse-proxy-templates",slug:"/reference/reverse-proxy-templates/traefik",permalink:"/reference/reverse-proxy-templates/traefik",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/reference/reverse-proxy-templates/traefik.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Traefik",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache",permalink:"/reference/reverse-proxy-templates/apache"},next:{title:"HAProxy",permalink:"/reference/reverse-proxy-templates/haproxy"}},l={},p=[{value:"Without SSL termination",id:"without-ssl-termination",level:2},{value:"<code>docker-compose.yml</code>",id:"docker-composeyml",level:3},{value:"<code>rules.yml</code>",id:"rulesyml",level:3},{value:"With SSL termination",id:"with-ssl-termination",level:2},{value:"SSL <code>docker-compose.yml</code>",id:"ssl-docker-composeyml",level:3},{value:"SSL <code>rules.yml</code>",id:"ssl-rulesyml",level:3}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following are examples for configuring the ",(0,o.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),"\nproxy as a reverse proxy for Firezone."),(0,o.kt)("p",null,"In these examples, we assume Traefik is deployed using Docker on the same host\nas Firezone. For this to work, you'll need to make sure\n",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_TRUSTED_PROXIES")," is set to include the Docker address of the Traefik\nservice."),(0,o.kt)("h2",{id:"without-ssl-termination"},"Without SSL termination"),(0,o.kt)("p",null,"Since Firezone requires HTTPS for the web portal, please bear in mind a\ndownstream proxy will need to terminate SSL connections in this scenario."),(0,o.kt)("p",null,"Use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rules.yml")," files as a starting\npoint for your own Firezone config:"),(0,o.kt)("h3",{id:"docker-composeyml"},(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\n\nx-deploy: &default-deploy\n  restart_policy:\n    condition: on-failure\n    delay: 5s\n    max_attempts: 3\n    window: 120s\n  update_config:\n    order: start-first\n\nnetworks:\n  app:\n    enable_ipv6: true\n    ipam:\n      config:\n        - subnet: 172.28.0.0/16\n        - subnet: 2001:3990:3990::/64\n\nservices:\n  firezone:\n    image: firezone/firezone\n    ports:\n      - 51820:51820/udp\n    volumes:\n      # IMPORTANT: Persists WireGuard private key and other data. If\n      # /var/firezone/private_key exists when Firezone starts, it is\n      # used as the WireGuard private. Otherwise, one is generated.\n      - /data/firezone/firezone:/var/firezone\n    environment:\n      EXTERNAL_URL: ${EXTERNAL_URL:?err}\n      ADMIN_EMAIL: ${ADMIN_EMAIL:?err}\n      DEFAULT_ADMIN_PASSWORD: ${DEFAULT_ADMIN_PASSWORD:?err}\n      GUARDIAN_SECRET_KEY: ${GUARDIAN_SECRET_KEY:?err}\n      SECRET_KEY_BASE: ${SECRET_KEY_BASE:?err}\n      LIVE_VIEW_SIGNING_SALT: ${LIVE_VIEW_SIGNING_SALT:?err}\n      COOKIE_SIGNING_SALT: ${COOKIE_SIGNING_SALT:?err}\n      COOKIE_ENCRYPTION_SALT: ${COOKIE_ENCRYPTION_SALT:?err}\n      DATABASE_ENCRYPTION_KEY: ${DATABASE_ENCRYPTION_KEY:?err}\n\n      # Ensure this includes the traefik service IP.\n      EXTERAL_TRUSTED_PROXIES: [\'\']\n    networks:\n      - app\n    cap_add:\n      - NET_ADMIN\n      - SYS_MODULE\n    sysctls:\n      - net.ipv6.conf.all.disable_ipv6=0\n      - net.ipv4.ip_forward=1\n      - net.ipv6.conf.all.forwarding=1\n    depends_on:\n      - postgres\n  traefik:\n    deploy:\n      <<: *default-deploy\n    # The official v2 Traefik docker image\n    image: traefik:v2.8\n    # Enables the web UI and tells Traefik to listen to docker\n    command:\n    - "--providers.docker"\n    - "--providers.file.filename=rules.yml"\n    - "--entrypoints.web.address=:80"\n    - "--entrypoints.web.forwardedHeaders.insecure"\n    - "--log.level=DEBUG"\n    extra_hosts:\n    - "host.docker.internal:host-gateway"\n    ports:\n      # The HTTP port\n      - "80:80"\n    volumes:\n      # So that Traefik can listen to the Docker events\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./rules.yml:/rules.yml\n    # make the IP of this service deterministic\n    networks:\n      app:\n        ipv4_address: 172.28.0.99\n        ipv6_address: 2001:3990:3990::99\n  postgres:\n    image: postgres:13\n    volumes:\n      - /data/firezone/postgres:/var/lib/postgresql/data\n    environment:\n      # same value as ## DB section above\n      POSTGRES_DB: ${DATABASE_NAME:-firezone}\n      POSTGRES_USER: ${DATABASE_USER:-postgres}\n      POSTGRES_PASSWORD: ${DATABASE_PASSWORD:?err}\n    deploy:\n      <<: *default-deploy\n      update_config:\n        order: stop-first\n')),(0,o.kt)("h3",{id:"rulesyml"},(0,o.kt)("inlineCode",{parentName:"h3"},"rules.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'http:\n  routers:\n    test:\n      entryPoints:\n              - "web"\n      service: test\n      rule: "Host(`44.200.42.78`)"\n  services:\n    test:\n      loadBalancer:\n        servers:\n        - url: "http://firezone:13000"\n')),(0,o.kt)("p",null,"Now you should be able to start the Traefik proxy with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."),(0,o.kt)("h2",{id:"with-ssl-termination"},"With SSL termination"),(0,o.kt)("p",null,"This configuration uses Firezone's auto-generated self-signed certificates."),(0,o.kt)("h3",{id:"ssl-docker-composeyml"},"SSL ",(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\n\nx-deploy: &default-deploy\n  restart_policy:\n    condition: on-failure\n    delay: 5s\n    max_attempts: 3\n    window: 120s\n  update_config:\n    order: start-first\n\nnetworks:\n  app:\n    enable_ipv6: true\n    ipam:\n      config:\n        - subnet: 172.28.0.0/16\n        - subnet: 2001:3990:3990::/64\n\nservices:\n  firezone:\n    image: firezone/firezone\n    ports:\n      - 51820:51820/udp\n    volumes:\n      # IMPORTANT: Persists WireGuard private key and other data. If\n      # /var/firezone/private_key exists when Firezone starts, it is\n      # used as the WireGuard private. Otherwise, one is generated.\n      - /data/firezone/firezone:/var/firezone\n    environment:\n      EXTERNAL_URL: ${EXTERNAL_URL:?err}\n      ADMIN_EMAIL: ${ADMIN_EMAIL:?err}\n      DEFAULT_ADMIN_PASSWORD: ${DEFAULT_ADMIN_PASSWORD:?err}\n      GUARDIAN_SECRET_KEY: ${GUARDIAN_SECRET_KEY:?err}\n      SECRET_KEY_BASE: ${SECRET_KEY_BASE:?err}\n      LIVE_VIEW_SIGNING_SALT: ${LIVE_VIEW_SIGNING_SALT:?err}\n      COOKIE_SIGNING_SALT: ${COOKIE_SIGNING_SALT:?err}\n      COOKIE_ENCRYPTION_SALT: ${COOKIE_ENCRYPTION_SALT:?err}\n      DATABASE_ENCRYPTION_KEY: ${DATABASE_ENCRYPTION_KEY:?err}\n\n      # Ensure this includes the traefik service IP.\n      EXTERAL_TRUSTED_PROXIES: [\'\']\n    networks:\n      - app\n    cap_add:\n      - NET_ADMIN\n      - SYS_MODULE\n    sysctls:\n      - net.ipv6.conf.all.disable_ipv6=0\n      - net.ipv4.ip_forward=1\n      - net.ipv6.conf.all.forwarding=1\n    depends_on:\n      - postgres\n  traefik:\n    deploy:\n      <<: *default-deploy\n    # The official v2 Traefik docker image\n    image: traefik:v2.8\n    # Enables the web UI and tells Traefik to listen to docker\n    command:\n    - "--providers.docker"\n    - "--providers.file.filename=rules.yml"\n    - "--entrypoints.web.address=:443"\n    - "--entrypoints.web.forwardedHeaders.insecure"\n    - "--log.level=DEBUG"\n    extra_hosts:\n    - "host.docker.internal:host-gateway"\n    ports:\n      # The HTTP port\n      - "443:443"\n    volumes:\n      # So that Traefik can listen to the Docker events\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./rules.yml:/rules.yml\n    # make the IP of this service deterministic\n    networks:\n      app:\n        ipv4_address: 172.28.0.99\n        ipv6_address: 2001:3990:3990::99\n  postgres:\n    image: postgres:13\n    volumes:\n      - /data/firezone/postgres:/var/lib/postgresql/data\n    environment:\n      # same value as ## DB section above\n      POSTGRES_DB: ${DATABASE_NAME:-firezone}\n      POSTGRES_USER: ${DATABASE_USER:-postgres}\n      POSTGRES_PASSWORD: ${DATABASE_PASSWORD:?err}\n    deploy:\n      <<: *default-deploy\n      update_config:\n        order: stop-first\n')),(0,o.kt)("h3",{id:"ssl-rulesyml"},"SSL ",(0,o.kt)("inlineCode",{parentName:"h3"},"rules.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'http:\n  routers:\n    test:\n      entryPoints:\n        - "web"\n      service: test\n      rule: "Host(`44.200.42.78`)"\n      tls: {}\n  services:\n    test:\n      loadBalancer:\n        servers:\n        - url: "http://firezone:13000"\ntls:\n  stores:\n    default:\n      defaultCertificate:\n        certFile: /path/to/your/cert.crt\n        keyFile: /path/to/your/key.key\n')))}c.isMDXComponent=!0}}]);