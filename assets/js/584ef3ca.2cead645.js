(self.webpackChunkdocs_liftstation_cloud=self.webpackChunkdocs_liftstation_cloud||[]).push([[745],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1635:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},l={unversionedId:"routes",id:"routes",isDocsHomePage:!1,title:"Routes Screen",description:"Overview",source:"@site/technician/routes.md",sourceDirName:".",slug:"/routes",permalink:"/technician/routes",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/technician/login"},next:{title:"Lift Stations and Wells",permalink:"/technician/stations-and-wells"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Swipe to Refresh",id:"swipe-to-refresh",children:[]},{value:"Offline Mode",id:"offline-mode",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The routes screen displays the routes you have access to. Routes are also color coded,\nso you can check if they have been completed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"routes-online",src:n(7717).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Red:")," None of the items on this route have been completed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yellow:")," Some items on this route have been completed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Green:")," All the items on this route have been completed")),(0,i.kt)("h2",{id:"swipe-to-refresh"},"Swipe to Refresh"),(0,i.kt)("p",null,"If you would like to update the read status of the routes, you can swipe down on your phone\nto activate swipe to refresh."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"routes-swipe-to-refresh",src:n(6631).Z})),(0,i.kt)("h2",{id:"offline-mode"},"Offline Mode"),(0,i.kt)("p",null,"If an internet connection is not available, or if there is a problem with the server the\napp will go into offline mode. Route buttons will appear gray; the status indicator to the\nright of 'Your Routes' will say 'You are offline'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"routes-offline",src:n(8932).Z})))}p.isMDXComponent=!0},8932:function(e,t,n){"use strict";t.Z=n.p+"assets/images/routes-offline-a0ac80c79285eb901eb8a83f1641a42c.png"},7717:function(e,t,n){"use strict";t.Z=n.p+"assets/images/routes-online-0e8f0361511bfb83d635b7b93806f09c.png"},6631:function(e,t,n){"use strict";t.Z=n.p+"assets/images/routes-swipe-to-refresh-8df193c80f3137b3adcc64185f3b54ca.png"}}]);