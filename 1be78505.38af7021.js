(window.webpackJsonp=window.webpackJsonp||[]).push([[17,40,142],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(212),r=a(22),o=a(27),s=a(226),i=a(3),u=a(213),m=a(219),b=a(216),d=a(269),h=a(270),p=a(268),O=a(215),f=a(228),j=a(315),E=a(81),v=a.n(E);const k=(e,t)=>"link"===e.type?Object(m.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t)));function C({item:e,onItemClick:t,collapsible:a,activePath:c,...r}){const{items:o,label:s}=e,m=k(e,c),b=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[d,h]=Object(n.useState)((()=>!!a&&(!m&&e.collapsed))),p=Object(n.useRef)(null),[O,f]=Object(n.useState)(void 0),j=(e=!0)=>{var t;f(e?`${null===(t=p.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!b&&d&&h(!1)}),[m,b,d]);const E=Object(n.useCallback)((e=>{e.preventDefault(),O||j(),setTimeout((()=>h((e=>!e))),100)}),[O]);return 0===o.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[v.a.menuLinkText]:!a}),onClick:a?E:void 0,href:a?"#!":void 0},r),s),l.a.createElement("ul",{className:"menu__list",ref:p,style:{height:O},onTransitionEnd:()=>{d||j(!1)}},o.map((e=>l.a.createElement(y,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c})))))}function g({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:r,label:o}=e,s=k(e,a);return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(O.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:r},Object(f.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),o))}function y(e){switch(e.item.type){case"category":return l.a.createElement(C,e);case"link":default:return l.a.createElement(g,e)}}var N=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:c,isHidden:r}){const[o,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:O}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:f}=Object(b.a)(),{scrollY:E}=Object(p.a)();Object(d.a)(o);const k=Object(h.a)();return Object(n.useEffect)((()=>{k===h.b.desktop&&s(!1)}),[k]),l.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:i,[v.a.sidebarHidden]:r})},i&&l.a.createElement(j.a,{tabIndex:-1,className:v.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",v.a.menu,{"menu--show":o,[v.a.menuWithAnnouncementBar]:!f&&0===E})},l.a.createElement("button",{"aria-label":o?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!o)}},o?l.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(y,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),O&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",v.a.collapseSidebarButton),onClick:c}))},S=a(240),_=a(265),w=a(222),M=a(87),P=a.n(M);function I({currentDocRoute:e,versionMetadata:t,children:a}){var o,i;const{siteConfig:b,isClient:d}=Object(r.default)(),{pluginId:h,permalinkToSidebar:p,docsSidebars:O,version:f}=t,j=p[e.path],E=O[j],[v,k]=Object(n.useState)(!1),[C,g]=Object(n.useState)(!1),y=Object(n.useCallback)((()=>{C&&g(!1),k(!v)}),[C]);return l.a.createElement(s.a,{key:d,searchMetadatas:{version:f,tag:Object(m.docVersionSearchTag)(h,f)}},l.a.createElement("div",{className:P.a.docPage},E&&l.a.createElement("div",{className:Object(u.a)(P.a.docSidebarContainer,{[P.a.docSidebarContainerHidden]:v}),onTransitionEnd:e=>{e.currentTarget.classList.contains(P.a.docSidebarContainer)&&v&&g(!0)},role:"complementary"},l.a.createElement(N,{key:j,sidebar:E,path:e.path,sidebarCollapsible:null===(o=null===(i=b.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===o||o,onCollapse:y,isHidden:C}),C&&l.a.createElement("div",{className:P.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:y,onClick:y})),l.a.createElement("main",{className:P.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",P.a.docItemWrapper,{[P.a.docItemWrapperEnhanced]:v})},l.a.createElement(c.MDXProvider,{components:S.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(w.matchPath)(n.pathname,e)));return c?l.a.createElement(I,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):l.a.createElement(_.default,e)}},227:function(e,t,a){"use strict";var n=a(3),l=a(0),c=a.n(l),r=a(24),o=a(22),s=a(222),i=a(218),u=a(215),m=a(23),b=a(225),d=a(472),h=a(473),p=a(231);let O=null;function f({hit:e,children:t}){return c.a.createElement(u.a,{to:e.url},t)}function j({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(b.a)();return c.a.createElement(u.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function E({contextualSearch:e,...t}){var u,b;const{siteMetadata:E}=Object(o.default)(),v=Object(p.a)(),k=null!==(u=null===(b=t.searchParameters)||void 0===b?void 0:b.facetFilters)&&void 0!==u?u:[],C=e?[...v,...k]:k,g={...t.searchParameters,facetFilters:C},{withBaseUrl:y}=Object(i.b)(),N=Object(s.useHistory)(),S=Object(l.useRef)(null),[_,w]=Object(l.useState)(!1),[M,P]=Object(l.useState)(null),I=Object(l.useCallback)((()=>O?Promise.resolve():Promise.all([a.e(143).then(a.bind(null,230)),Promise.all([a.e(0),a.e(144)]).then(a.bind(null,229)),a.e(0).then(a.t.bind(null,54,7))]).then((([{DocSearchModal:e}])=>{O=e}))),[]),x=Object(l.useCallback)((()=>{I().then((()=>{w(!0)}))}),[I,w]),R=Object(l.useCallback)((()=>{w(!1)}),[w]),T=Object(l.useCallback)((e=>{I().then((()=>{w(!0),P(e.key)}))}),[I,w,P]),H=Object(l.useRef)({navigate({suggestionUrl:e}){N.push(e)}}).current,D=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:y(`${t.pathname}${t.hash}`)}})))).current,F=Object(l.useMemo)((()=>e=>c.a.createElement(j,Object(n.a)({},e,{onClose:R}))),[R]),L=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e)),[E.docusaurusVersion]);return Object(d.a)({isOpen:_,onOpen:x,onClose:R,onInput:T,searchButtonRef:S}),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),c.a.createElement(h.a,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:x,ref:S}),_&&Object(r.createPortal)(c.a.createElement(O,Object(n.a)({onClose:R,initialScrollY:window.scrollY,initialQuery:M,navigator:H,transformItems:D,hitComponent:f,resultsFooterComponent:F,transformSearchClient:L},t,{searchParameters:g})),document.body))}t.a=function(){const{siteConfig:e}=Object(o.default)();return c.a.createElement(E,e.themeConfig.algolia)}},265:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(226);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);