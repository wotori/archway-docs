"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[6397],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},c="Interacting with your dApp",u={unversionedId:"create/guides/my-first-dapp/interact",id:"create/guides/my-first-dapp/interact",isDocsHomePage:!1,title:"Interacting with your dApp",description:"Now it's possible to query and transact with your deployed instance.",source:"@site/docs/create/guides/my-first-dapp/interact.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/interact",permalink:"/docs/create/guides/my-first-dapp/interact",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/interact.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploying your dApp on chain",permalink:"/docs/create/guides/my-first-dapp/deploy"},next:{title:"Installation",permalink:"/docs/node/install"}},p=[{value:"Querying",id:"querying",children:[]},{value:"Transacting",id:"transacting",children:[{value:"Congrats, you built your first dApp!",id:"congrats-you-built-your-first-dapp",children:[]}]}],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interacting-with-your-dapp"},"Interacting with your dApp"),(0,i.kt)("p",null,"Now it's possible to query and transact with your deployed instance. "),(0,i.kt)("h2",{id:"querying"},"Querying"),(0,i.kt)("p",null,"Queries read from the blockchain. They don't modify anything stored on chain so they don't cost a fee."),(0,i.kt)("p",null,"There are several types of queries we could do, but a common type we're interested in is ",(0,i.kt)("inlineCode",{parentName:"p"},"contract-state"),", which we'll call in ",(0,i.kt)("inlineCode",{parentName:"p"},"smart")," mode. This lets us run queries with arguments, as opposed to dumping the entire contract data."),(0,i.kt)("p",null,"If we query the ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," before modifying any state, we get the value we set during deployment instantiation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archway query contract-state smart --args '{\"get_count\": {}}'\n")),(0,i.kt)("p",null,"Outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Attempting query...\n\n{"data":{"count":0}}\n\nOk!\n')),(0,i.kt)("p",null,"Why was the query argument ",(0,i.kt)("inlineCode",{parentName:"p"},"'{\"get_count\": {}}'"),"?"),(0,i.kt)("p",null,"If we open ",(0,i.kt)("inlineCode",{parentName:"p"},"src/contract.rs")," and inspect ",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn query")," we'll see the case matching statement that matches our JSON query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n  match msg {\n      QueryMsg::GetCount {} => to_binary(&query_count(deps)?), // Here it is\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: ",(0,i.kt)("inlineCode",{parentName:"strong"},"QueryMsg")," is an ",(0,i.kt)("inlineCode",{parentName:"strong"},"enum")," with the ",(0,i.kt)("inlineCode",{parentName:"strong"},"GetCount")," property. It's good to be aware of the format here, as the enum attribute is uppercase without spaces in Rust, but lowercase with snake case when converted to JSON arguments.")),(0,i.kt)("h2",{id:"transacting"},"Transacting"),(0,i.kt)("p",null,"Transactions write to the blockchain and cost a gas fee for modifying a contract's state securely."),(0,i.kt)("p",null,"By default gas estimatation mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", but you've got granular control. To modify gas settings edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," values inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"network")," object of your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),". However, for most cases the default gas settings are preferable."),(0,i.kt)("p",null,"To increment our counter value, we'll be executing a transaction that calls ",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn try_increment")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/contract.rs"),". This function is already public, but executing a transaction is handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn execute")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/contract.rs")," which does case matching to call ",(0,i.kt)("inlineCode",{parentName:"p"},"try_increment"),"."),(0,i.kt)("p",null,"Send an Increment transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archway tx --args '{\"increment\":{}}'\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Attempting transaction...\n\nSend tx from which wallet in your keychain? (e.g. "main" or crtl+c to quit): my-wallet\nEnter keyring passphrase:\ngas estimate: 115945\n{"body":{"messages":[{"@type":"/cosmwasm.wasm.v1.MsgExecuteContract","sender":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a","contract":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d","msg":"eyJpbmNyZW1lbnQiOnt9fQ==","funds":[]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"upebble","amount":"116"}],"gas_limit":"115945","payer":"","granter":""}},"signatures":[]}\n\nconfirm transaction before signing and broadcasting [y/N]: y\n{"height":"689581","txhash":"FE6CA15FB3B8295A7FFC0AA3FC307E6FE31E2AB606EB58774C2668CC1CACF6E8","data":"0A090A0765786563757465","raw_log":"[{\\"events\\":[{\\"type\\":\\"execute\\",\\"attributes\\":[{\\"key\\":\\"_contract_address\\",\\"value\\":\\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\\"}]},{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"execute\\"},{\\"key\\":\\"module\\",\\"value\\":\\"wasm\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a\\"}]},{\\"type\\":\\"wasm\\",\\"attributes\\":[{\\"key\\":\\"_contract_address\\",\\"value\\":\\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\\"},{\\"key\\":\\"method\\",\\"value\\":\\"try_increment\\"}]}]}]","logs":[{"events":[{"type":"execute","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"}]},{"type":"message","attributes":[{"key":"action","value":"execute"},{"key":"module","value":"wasm"},{"key":"sender","value":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"},{"key":"method","value":"try_increment"}]}]}],"gas_wanted":"115945","gas_used":"98755"}\n\nOk!\n')),(0,i.kt)("p",null,"To understand why the argument is ",(0,i.kt)("inlineCode",{parentName:"p"},"'{\"increment\":{}}'"),", if we open ",(0,i.kt)("inlineCode",{parentName:"p"},"src/contract.rs")," and inspect ",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn execute")," we'll see the case matching statement that matches our JSON argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"pub fn execute(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n  match msg {\n    ExecuteMsg::Increment {} => try_increment(deps), // Here it is\n    ExecuteMsg::Reset { count } => try_reset(deps, info, count),\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: ",(0,i.kt)("inlineCode",{parentName:"strong"},"enum")," attributes again are converted. ",(0,i.kt)("inlineCode",{parentName:"strong"},"ExecuteMsg::Increment {}")," becomes ",(0,i.kt)("inlineCode",{parentName:"strong"},'{"increment":{}}')," in the CLI.")),(0,i.kt)("p",null,"Provided our ",(0,i.kt)("inlineCode",{parentName:"p"},'{"increment":{}}')," transaction succeeded, if we query ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," again it will have increased by ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archway query contract-state smart --args '{\"get_count\": {}}'\n")),(0,i.kt)("p",null,"Now outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Attempting query...\n\n{"data":{"count":1}}\n\nOk!\n')),(0,i.kt)("h3",{id:"congrats-you-built-your-first-dapp"},"Congrats, you built your first dApp!"))}d.isMDXComponent=!0}}]);