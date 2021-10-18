"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[4373],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4367:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},s="Architectural Overview",l={unversionedId:"overview/technology/architecture/overview",id:"overview/technology/architecture/overview",isDocsHomePage:!1,title:"Architectural Overview",description:"The network starts with a vanilla Proof-of-Stake (PoS) network, with modified Minting, CosmWasm, Distribution, Staking, Group, and Governance Cosmos modules that manage the Archway inflation and rewards system.",source:"@site/docs/overview/technology/architecture/overview.md",sourceDirName:"overview/technology/architecture",slug:"/overview/technology/architecture/overview",permalink:"/docs/overview/technology/architecture/overview",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/overview/technology/architecture/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Participate in Governance",permalink:"/docs/overview/governance"},next:{title:"Module Specifications",permalink:"/docs/overview/technology/architecture/module-specs"}},m=[{value:"Smart Contracts",id:"smart-contracts",children:[{value:"Difference Between Smart Contracts and Cosmos Zones",id:"difference-between-smart-contracts-and-cosmos-zones",children:[]}]}],d={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architectural-overview"},"Architectural Overview"),(0,o.kt)("p",null,"The network starts with a vanilla Proof-of-Stake (PoS) network, with modified Minting, CosmWasm, Distribution, Staking, Group, and Governance Cosmos modules that manage the Archway inflation and rewards system. "),(0,o.kt)("p",null,"Archway creates a Cosmos SDK-based chain with support for WASM smart contract execution that rewards developers for the usage of said smart contracts deployed."),(0,o.kt)("p",null,"Desired functionalities to achieve above objective:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/technology/economics/overview"},"Fee reward to the developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/technology/economics/gas-rebates"},"Gas rebate to end users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/technology/economics/smart-contracts-fees"},"Smart contract premium fee")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/technology/economics/inflation"},"Inflation rewards"))),(0,o.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"The Archway protocol uses CosmWasm, WebAssembly (Wasm), and Rust. Over 40 high-level programming languages support Wasm, including C and C++, Python, Go, Rust, Java, and PHP."),(0,o.kt)("h3",{id:"difference-between-smart-contracts-and-cosmos-zones"},"Difference Between Smart Contracts and Cosmos Zones"),(0,o.kt)("p",null,"While the ethos of Cosmos is to create your own self-sovereign chain, in many cases, it makes sense for a project to first deploy as a dApp. There is a lot of overhead in launching and maintaining a standalone chain. While the Cosmos SDK simplifies much of the technical effort, a developer still needs to attract and sufficiently incentivize a strong community of validators to run the network, which can be a daunting endeavor for early projects."),(0,o.kt)("p",null,"Consider the following tradeoffs between building your core logic as a smart contract versus building your logic as an independent Cosmos blockchain."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Cosmos Chain"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Smart Contract"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Speed of development"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ease of development"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Complexity of logic"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Mantenance overhead"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Level of customization"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Strict resource control"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Native chain features"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Scalability"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"+")))))}p.isMDXComponent=!0}}]);