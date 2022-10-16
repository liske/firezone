(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[6545],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},170:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var o=n(87462),r=n(67294),s=n(72389),a=n(86010),c=n(66412),l=n(35281),i=n(37016);const u="codeBlockContainer_Ckt0";function d(e){let{as:t,...n}=e;const s=(0,c.p)(),d=(0,i.QC)(s);return r.createElement(t,(0,o.Z)({},n,{style:d,className:(0,a.Z)(n.className,u,l.k.common.codeBlock)}))}const m={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function p(e){let{children:t,className:n}=e;return r.createElement(d,{as:"pre",tabIndex:0,className:(0,a.Z)(m.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:m.codeBlockLines},t))}var f=n(86668),g=n(85448),h=n(23746);const v="codeLine_lJS_",b="codeLineNumber_Tfdd",y="codeLineContent_feaV";function k(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,a.Z)(n,s&&v)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,s?r.createElement(r.Fragment,null,r.createElement("span",{className:b}),r.createElement("span",{className:y},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var E=n(95999);const C={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function P(e){let{code:t,className:n}=e;const[o,s]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const s=document.getSelection();let a=!1;s.rangeCount>0&&(a=s.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),a&&(s.removeAllRanges(),s.addRange(a)),r&&r.focus()}(t),s(!0),c.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,C.copyButton,o&&C.copyButtonCopied),onClick:l},r.createElement("span",{className:C.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:C.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:C.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const N="wordWrapButtonIcon_Bwma",L="wordWrapButtonEnabled_EoeP";function S(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&L),"aria-label":s,title:s},r.createElement("svg",{className:N,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function B(e){let{children:t,className:n="",metastring:s,title:l,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:v,magicComments:b}}=(0,f.L)(),y=p??(0,i.Vo)(n)??v,E=(0,c.p)(),C=(0,g.F)(),N=(0,i.bc)(s)||l,{lineClassNames:L,code:B}=(0,i.nZ)(t,{metastring:s,language:y,magicComments:b}),w=u??(0,i.nt)(s);return r.createElement(d,{as:"div",className:(0,a.Z)(n,y&&!n.includes(`language-${y}`)&&`language-${y}`)},N&&r.createElement("div",{className:m.codeBlockTitle},N),r.createElement("div",{className:m.codeBlockContent},r.createElement(h.ZP,(0,o.Z)({},h.lG,{theme:E,code:B,language:y??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return r.createElement("pre",{tabIndex:0,ref:C.codeBlockRef,className:(0,a.Z)(t,m.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(m.codeBlockLines,w&&m.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(k,{key:t,line:e,getLineProps:o,getTokenProps:s,classNames:L[t],showLineNumbers:w})))))})),r.createElement("div",{className:m.buttonGroup},(C.isEnabled||C.isCodeScrollable)&&r.createElement(S,{className:m.codeButton,onClick:()=>C.toggle(),isEnabled:C.isEnabled}),r.createElement(P,{className:m.codeButton,code:B}))))}function w(e){let{children:t,...n}=e;const a=(0,s.Z)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof c?B:p;return r.createElement(l,(0,o.Z)({key:String(a)},n),c)}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(67294),r=n(86010);const s="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,a),hidden:n},t)}},65130:(e,t,n)=>{"use strict";n.d(t,{b:()=>a,k:()=>c});var o=n(67294),r=n(902);const s=o.createContext(null);function a(e){let{children:t,content:n}=e;const r=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return o.createElement(s.Provider,{value:r},t)}function c(){const e=(0,o.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}},14353:(e,t,n)=>{"use strict";n.d(t,{D:()=>c,f:()=>l});var o=n(67294),r=n(902);const s=Symbol("EmptyContext"),a=o.createContext(s);function c(e){let{children:t}=e;const[n,r]=(0,o.useState)(null),s=(0,o.useMemo)((()=>({expandedItem:n,setExpandedItem:r})),[n]);return o.createElement(a.Provider,{value:s},t)}function l(){const e=(0,o.useContext)(a);if(e===s)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var o=n(67294),r=n(12466),s=n(85936);function a(e){let{threshold:t}=e;const[n,a]=(0,o.useState)(!1),c=(0,o.useRef)(!1),{startScroll:l,cancelScroll:i}=(0,r.Ct)();return(0,r.RF)(((e,n)=>{let{scrollY:o}=e;const r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:o>=r?(i(),a(!1)):o<t?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,s.S)((e=>{e.location.hash&&(c.current=!0,a(!1))})),{shown:n,scrollToTop:()=>l(0)}}},85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>c});var o=n(67294),r=n(902);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[n,a]=(0,o.useState)(),c=(0,o.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=s);const a=(0,r.zX)(t),c=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,c),()=>t.disconnect()}),[e,a,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),s=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");r(n)}),[s]);return a(s,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:c}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var o=n(92949),r=n(86668);function s(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},96841:(e,t,n)=>{"use strict";n.d(t,{S:()=>l});var o=n(67294),r=n(86668);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>s(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function l(e){const t=(0,o.useRef)(void 0),n=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:c}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:c}),i=a(l,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}},4368:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AnnouncementBarProvider:()=>O.pl,BlogPostProvider:()=>T,Collapsible:()=>l.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>s.HX,DocProvider:()=>S.b,DocSidebarItemsExpandedStateProvider:()=>P.D,DocsPreferredVersionContextProvider:()=>C.L5,DocsSidebarProvider:()=>L.b,DocsVersionProvider:()=>N.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>$.V,NavbarSecondaryMenuFiller:()=>p.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>V.OC,TabGroupChoiceProvider:()=>j.z,ThemeClassNames:()=>i.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>M.nt,createStorageSlot:()=>r.W,docVersionSearchTag:()=>s.os,duplicates:()=>k.l,filterDocCardListItems:()=>a.MN,findFirstCategoryLink:()=>a.Wl,findSidebarCategory:()=>a.em,getPrismCssVariables:()=>M.QC,isActiveSidebarItem:()=>a._F,isDocsPluginEnabled:()=>a.cE,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>y.F,isSamePath:()=>z.Mg,keyboardFocusedClassName:()=>q.h,listStorageKeys:()=>r._,listTagsByLetters:()=>v,parseCodeBlockTitle:()=>M.bc,parseLanguage:()=>M.Vo,parseLines:()=>M.nZ,splitNavbarItems:()=>$.A,translateTagsPageTitle:()=>h,uniq:()=>k.j,useAlternatePageUtils:()=>H.l,useAnnouncementBar:()=>O.nT,useBackToTopButton:()=>K.a,useBlogPost:()=>x,useCodeWordWrap:()=>U.F,useCollapsible:()=>l.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>s._q,useCurrentSidebarCategory:()=>a.jA,useDoc:()=>S.k,useDocById:()=>a.xz,useDocRouteMetadata:()=>a.hI,useDocSidebarItemsExpandedState:()=>P.f,useDocsPreferredVersion:()=>C.J,useDocsPreferredVersionByPluginId:()=>C.Oh,useDocsSidebar:()=>L.V,useDocsVersion:()=>N.E,useDocsVersionCandidates:()=>a.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>R.b,useHideableNavbar:()=>G.c,useHistoryPopHandler:()=>Z.R,useHomePageRoute:()=>z.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>q.t,useLayoutDoc:()=>a.vY,useLayoutDocsSidebar:()=>a.oz,useLocalPathname:()=>_.b,useLocationChange:()=>F.S,useLockBodyScroll:()=>Y.N,useNavbarMobileSidebar:()=>I.e,useNavbarSecondaryMenu:()=>D.Y,usePluralForm:()=>c.c,usePrevious:()=>u.D9,usePrismTheme:()=>E.p,useScrollController:()=>V.sG,useScrollPosition:()=>V.RF,useScrollPositionBlocker:()=>V.o5,useSearchPage:()=>Q.O,useSidebarBreadcrumbs:()=>a.s1,useSkipToContent:()=>X.a,useSmoothScrollTo:()=>V.Ct,useTOCHighlight:()=>W.S,useTabGroupChoice:()=>j.U,useThemeConfig:()=>o.L,useTitleFormatter:()=>A.p,useTreeifiedTOC:()=>R.a,useWindowSize:()=>f.i});var o=n(86668),r=n(50012),s=n(43320),a=n(53438),c=n(88824),l=n(86043),i=n(35281),u=n(902),d=n(10833),m=n(92949),p=n(13102),f=n(87524),g=n(95999);const h=()=>(0,g.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function v(e){const t={};return Object.values(e).forEach((e=>{const n=function(e){return e[0].toUpperCase()}(e.label);t[n]??=[],t[n].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[o]=t;return n.localeCompare(o)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var b=n(42489),y=n(98022),k=n(67392),E=n(66412),C=n(60373),P=n(14353),N=n(74477),L=n(1116),S=n(65130),B=n(67294);const w=B.createContext(null);function T(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const r=function(e){let{content:t,isBlogPostPage:n}=e;return(0,B.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return B.createElement(w.Provider,{value:r},t)}function x(){const e=(0,B.useContext)(w);if(null===e)throw new u.i6("BlogPostProvider");return e}var O=n(59689),j=n(7094),I=n(93163),D=n(76857),H=n(94711),M=n(37016),A=n(82128),F=n(85936),_=n(51753),Z=n(91980),R=n(39665),V=n(12466),z=n(48596),$=n(58978),W=n(96841),G=n(99445),q=n(19727),Y=n(69800),Q=n(66177),U=n(85448),X=n(68721),K=n(2730)},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>d,bc:()=>i,nZ:()=>m,nt:()=>u});var o=n(87594),r=n.n(o);const s=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){var t;return(null==e||null==(t=e.match(s))?void 0:t.groups.title)??""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function m(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:i}=t;if(i&&a.test(i)){const e=i.match(a).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(c),t)}}(o,s),d=n.split("\n"),m=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),g=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?m[p[t]].range+=`${r},`:f[t]?m[f[t]].start=r:g[t]&&(m[g[t]].range+=`${m[g[t]].start}-${r-1},`),d.splice(r,1)}n=d.join("\n");const h={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}},39665:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>c});var o=n(67294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function s(e){return(0,o.useMemo)((()=>r(e)),[e])}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,o.useMemo)((()=>a({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}},88824:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var o=n(67294),r=n(52263);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return o[Math.min(s,o.length-1)]}(n,t,e)}}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>a});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var s=n(67294),a={Prism:o.Z,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r};function p(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,s=l({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(s.style=a.plain),void 0!==r&&(s.style=void 0!==s.style?l({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return s[n[0]];var a=o?{display:"inline-block"}:{},c=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[a].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,s=e.token,a=l({},p(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var s=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,s=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],s=0,a=0,c=[],l=[c];a>-1;){for(;(s=o[a]++)<r[a];){var m=void 0,p=t[a],f=n[a][s];if("string"==typeof f?(p=a>0?p:["plain"],m=f):(p=d(p,f.type),f.alias&&(p=d(p,f.alias)),m=f.content),"string"==typeof m){var g=m.split(i),h=g.length;c.push({types:p,content:g[0]});for(var v=1;v<h;v++)u(c),l.push(c=[]),c.push({types:p,content:g[v]})}else a++,t.push(p),n.push(m),o.push(0),r.push(m.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return u(c),l}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component)}}]);