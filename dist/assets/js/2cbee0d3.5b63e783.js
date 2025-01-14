"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[874],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},p="Deploying your contract on chain",c={unversionedId:"create/guides/my-first-dapp/deploy",id:"create/guides/my-first-dapp/deploy",isDocsHomePage:!1,title:"Deploying your contract on chain",description:"Before starting, make sure that Docker is installed and running on your system.",source:"@site/docs/create/guides/my-first-dapp/deploy.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/deploy",permalink:"/docs/create/guides/my-first-dapp/deploy",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/deploy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Producing Wasm executables",permalink:"/docs/create/guides/my-first-dapp/wasm"},next:{title:"Interacting with your contract",permalink:"/docs/create/guides/my-first-dapp/interact"}},l=[],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-your-contract-on-chain"},"Deploying your contract on chain"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before starting, make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker is installed and running")," on your system."))),(0,o.kt)("p",null,"When you're ready to deploy an on-chain build, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"archway deploy")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway deploy\n")),(0,o.kt)("p",null,"To skip the CLI asking for default values required by your dApp, include constructor arguments using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," parameter. Format your constructor parameters as a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," encoded string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway deploy --args \'{"my_key":"my value"}\'\n')),(0,o.kt)("p",null,"Since we cloned the ",(0,o.kt)("inlineCode",{parentName:"p"},"Increment")," starter template, try deploying with your ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," argument set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway deploy --args '{\"count\":0}'\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you deploy without using ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," you'll be prompted by the CLI to enter that information. If your dApp contract doesn't take any constructor arguments use ",(0,o.kt)("inlineCode",{parentName:"p"},"'{}'")," to denote ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," arguments."))),(0,o.kt)("p",null,"So why are we sending our constructor as ",(0,o.kt)("inlineCode",{parentName:"p"},'{"count":0}')," and how can we verify it's correct?"),(0,o.kt)("p",null,"From your project files open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/contract.rs"),". Near the top, you'll see the function ",(0,o.kt)("inlineCode",{parentName:"p"},"pub fn instantiate"),", which works as a constructor and sets the initial state of the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn instantiate(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n  let state = State {\n    count: msg.count, // Here's our count declaration\n    owner: info.sender.clone(), // Contract owner is wallet that sent tx\n  };\n  STATE.save(deps.storage, &state)?; // Save the state\n  // More code...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"archway deploy")," is a developer super command that produces a lot of output. It doesn't make sense to list all of it here, instead let's look at a step-by-step anatomy of what the command does."),(0,o.kt)("p",null,"There are 5 steps in total:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"MAKE WASM")," - ",(0,o.kt)("em",{parentName:"li"},"Produces ",(0,o.kt)("inlineCode",{parentName:"em"},"wasm")," executable optimized and compressed with ",(0,o.kt)("inlineCode",{parentName:"em"},"cosmwasm/rust-optimizer"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"CREATE ON CHAIN WASM")," - ",(0,o.kt)("em",{parentName:"li"},"Uploads ",(0,o.kt)("inlineCode",{parentName:"em"},"wasm")," executable on chain")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"VERIFY UPLOAD INTEGRITY")," - ",(0,o.kt)("em",{parentName:"li"},"Downloads the uploaded ",(0,o.kt)("inlineCode",{parentName:"em"},"wasm")," and verifies on chain version matches checksum of local build")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"INSTANTIATE CONTRACT")," - ",(0,o.kt)("em",{parentName:"li"},"Creates an instance of the uploaded contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"STORE DEPLOYMENT LOG")," - ",(0,o.kt)("em",{parentName:"li"},"Creates log entries for steps 2 (upload) and 4 (instantiation) in ",(0,o.kt)("inlineCode",{parentName:"em"},"config.json")))),(0,o.kt)("p",null,"If you deployed successfully now you can query and transact with your dApp."),(0,o.kt)("p",null,"If you're unsure, or suspect something may have gone wrong, you can always check your deployments history using the ",(0,o.kt)("inlineCode",{parentName:"p"},"archway history")," command, or by opening ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," at the root of the project and looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployments")," array."),(0,o.kt)("p",null,"In your history you should see 2 transactions were created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"create")," transaction when it was uploaded to the chain"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"instantiate")," transaction which made it possible to be queried and transacted with")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway history\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Printing deployments...\n\n[\n  {\n    type: 'instatiate',\n    address: 'archway1rfa3scumm5y2lt6jku49hg52y2tk06pnsm9p6w',\n    chainId: 'constantine-1',\n    data: '{...}'\n  },\n  {\n    type: 'create',\n    codeId: '84',\n    chainId: 'constantine-1',\n    data: '{...}'\n  }\n]\n")))}u.isMDXComponent=!0}}]);