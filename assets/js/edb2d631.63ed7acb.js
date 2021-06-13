(self.webpackChunkdocs_liftstation_cloud=self.webpackChunkdocs_liftstation_cloud||[]).push([[590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1460:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={},c={unversionedId:"intro",id:"version-1/intro",isDocsHomePage:!1,title:"LiftStation.cloud API Documentation",description:"Base URL//api.liftstation.cloud/v1/",source:"@site/api_versioned_docs/version-1/intro.md",sourceDirName:".",slug:"/intro",permalink:"/api/intro",version:"1",frontMatter:{},sidebar:"version-1/tutorialOperator",next:{title:"Get Wells",permalink:"/api/get-wells"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Common Responses",id:"common-responses",children:[{value:"Status Code <code>401</code>",id:"status-code-401",children:[]},{value:"Status Code <code>500</code>",id:"status-code-500",children:[]}]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Base URL:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.liftstation.cloud/v1/")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The LiftStation.cloud API can be used to enter well and lift station readings. This can be used to integrate your\nSCADA System."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"The API authenticates requests with an API Key and an API Secret. These should be passed as URL params for each\nrequest you make. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://api.liftstation.cloud/v1/wells?api_key=e42cac9f3f8810e0b17560992f259c11&api_secret=ed7b8cf594881af664f350d380851ace")),(0,a.kt)("h2",{id:"common-responses"},"Common Responses"),(0,a.kt)("h3",{id:"status-code-401"},"Status Code ",(0,a.kt)("inlineCode",{parentName:"h3"},"401")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The request cannot be authenticated. Please refer to the message for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "You need to provide \'api_key\' and \'api_secret\' as URL params."\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false,\n    "message": "The API Secret you provided is not valid."\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "message": "The API Key you provided is not valid"\n}\n')),(0,a.kt)("h3",{id:"status-code-500"},"Status Code ",(0,a.kt)("inlineCode",{parentName:"h3"},"500")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The server encountered an error. We have a system in place to notify us when this happens. Please try your request\nagain later."))}p.isMDXComponent=!0}}]);