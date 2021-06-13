(self.webpackChunkdocs_liftstation_cloud=self.webpackChunkdocs_liftstation_cloud||[]).push([[5],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(h,l(l({ref:n},u),{},{components:t})):o.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7924:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),l=["components"],a={},s={unversionedId:"intro",id:"version-1.0.0/intro",isDocsHomePage:!1,title:"CLI Documentation",description:"Overview",source:"@site/cli_versioned_docs/version-1.0.0/intro.md",sourceDirName:".",slug:"/intro",permalink:"/cli/intro",version:"1.0.0",frontMatter:{},sidebar:"version-1.0.0/tutorialOperator",next:{title:"config",permalink:"/cli/config"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Windows Powershell Notes",id:"windows-powershell-notes",children:[]},{value:"Basics",id:"basics",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The LiftStation.cloud CLI is used to enter well and lift station data through a command line interface. This may\nbe preferred to sending API requests."),(0,i.kt)("p",null,"The CLI is written with Node.js. You will need to install Node.js and the NPM package manager to install this program\non your computer. Note that the CLI requires version 12 or greater of Node.js."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Once you have installed Node.js and npm for your operating system run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -g lscloud\n")),(0,i.kt)("p",null,"Once the installation completes run the following command to verify installation. Note that this screen lists the commands\nfor the CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ lscloud\nlscloud\n\nCommands:\n  lscloud config             Enter your API Credentials\n  lscloud get wells          Retrieve a list of wells. Used to retrieve the ID\n                             of a well to push readings to the cloud.\n  lscloud push well reading  Push a well reading to the cloud.\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n")),(0,i.kt)("h2",{id:"windows-powershell-notes"},"Windows Powershell Notes"),(0,i.kt)("p",null,"You may receive this a message that says lscloud cannot be loaded because running scripts is disabled on\nthis system. You have three options"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy RemoteSigned")," as an administrator. This command will allow you to run scripts. When you are\ndone you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy Restricted")," as an administrator to put things back the way they were."),(0,i.kt)("li",{parentName:"ol"},"If you prefer to use Powershell, and you don't want to change the settings for security purposes you can install the\nscript in the Windows Subsystem for Linux and call it from Powershell. You do this by prefacing commands with ",(0,i.kt)("inlineCode",{parentName:"li"},"wsl"),". So ",(0,i.kt)("inlineCode",{parentName:"li"},"wsl lscloud get wells"),".\nThe Windows Subsystem for Linux also provides a terminal that you could use if you don't need to use powershell.   "),(0,i.kt)("li",{parentName:"ol"},"You can run the script in cmd.")),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"You can use the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," with any command to find out more about it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ lscloud config --help\nlscloud config\n\nEnter your API Credentials\n\nOptions:\n  --help        Show help                                              [boolean]\n  --version     Show version number                                    [boolean]\n  --api_key     Your API Key                                 [string] [required]\n  --api_secret  Your API Secret                              [string] [required]\n\n")))}d.isMDXComponent=!0}}]);