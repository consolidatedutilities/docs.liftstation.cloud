(self.webpackChunkdocs_liftstation_cloud=self.webpackChunkdocs_liftstation_cloud||[]).push([[330],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2616:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],l={},s={unversionedId:"get-wells",id:"version-1/get-wells",isDocsHomePage:!1,title:"Get Wells",description:"Description",source:"@site/api_versioned_docs/version-1/get-wells.md",sourceDirName:".",slug:"/get-wells",permalink:"/api/get-wells",version:"1",frontMatter:{},sidebar:"version-1/tutorialOperator",previous:{title:"LiftStation.cloud API Documentation",permalink:"/api/intro"},next:{title:"Add a Well Reading",permalink:"/api/add-well-reading"}},c=[{value:"Description",id:"description",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[{value:"Status Code: <code>200</code>",id:"status-code-200",children:[]}]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This request will retrieve a list of the wells of your organization. It is used so that\nyou can get the well IDs, which you will need to enter a reading. Wells are grouped by the route that they belong to."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type / Endpoint:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.liftstation.cloud/v1/wells")),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("h3",{id:"status-code-200"},"Status Code: ",(0,i.kt)("inlineCode",{parentName:"h3"},"200")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Request was successful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "routes": [\n            {\n                "name": "Downtown Savannah",\n                "wells": [\n                    {\n                        "id": 13,\n                        "name": "Six Pence"\n                    },\n                    {\n                        "id": 14,\n                        "name": "Civic Center"\n                    },\n                    {\n                        "id": 15,\n                        "name": "Mrs. Wilkes"\n                    },\n                    {\n                        "id": 16,\n                        "name": "Fiddler\'s"\n                    }\n                ]\n            },\n            {\n                "name": "Southside Savannah",\n                "wells": [\n                    {\n                        "id": 17,\n                        "name": "Georgia Southern"\n                    },\n                    {\n                        "id": 18,\n                        "name": "Hirano\'s"\n                    },\n                    {\n                        "id": 19,\n                        "name": "Portman\'s Music"\n                    }\n                ]\n            },\n            {\n                "name": "Tybee Island",\n                "wells": [\n                    {\n                        "id": 20,\n                        "name": "Bernie\'s"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')))}p.isMDXComponent=!0}}]);