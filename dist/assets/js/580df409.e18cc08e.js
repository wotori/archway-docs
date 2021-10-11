"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[1189],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Installation",p={unversionedId:"create/getting-started/install",id:"create/getting-started/install",isDocsHomePage:!1,title:"Installation",description:"Make sure you've installed and configured a few dependencies.",source:"@site/docs/create/getting-started/install.md",sourceDirName:"create/getting-started",slug:"/create/getting-started/install",permalink:"/docs/create/getting-started/install",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/getting-started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/overview/glossary"},next:{title:"Setup",permalink:"/docs/create/getting-started/setup"}},c=[{value:"Rustc",id:"rustc",children:[]},{value:"Cargo",id:"cargo",children:[]},{value:"Wasmd",id:"wasmd",children:[{value:"Install Wasmd From Source",id:"install-wasmd-from-source",children:[]},{value:"Install Wasmd Using Docker",id:"install-wasmd-using-docker",children:[]}]},{value:"Npm",id:"npm",children:[]},{value:"Archway Developer CLI",id:"archway-developer-cli",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Make sure you've installed and configured a few dependencies."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install",title:"Install Rust"},"Rustc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",title:"Install Cargo"},"Cargo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd",title:"Install Wasmd"},"Wasmd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker",title:"Install Docker"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",title:"Install Node.js and NPM"},"Npm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/archway-network/archway-cli",title:"Install develolper CLI"},"Archway Developer CLI"))),(0,o.kt)("h2",{id:"rustc"},"Rustc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," is the compiler for the Rust programming language, provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/",title:"Rust Homepage"},"Rust")," project maintainers. It takes your Rust source code and produces binary code, either as a library or executable."),(0,o.kt)("p",null,"To install Rust follow the instructions for your operating system at ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install")),(0,o.kt)("h2",{id:"cargo"},"Cargo"),(0,o.kt)("p",null,"Cargo is Rust's package manager, like ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," for Golang or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," for JavaScript. It comes with Rust if you installed ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),". "),(0,o.kt)("p",null,"If you didn't install with ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),", or don't have ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," in your command line path, see the instructions for installing ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," at ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"https://doc.rust-lang.org/cargo/getting-started/installation.html")),(0,o.kt)("h2",{id:"wasmd"},"Wasmd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," is the first implementation of a cosmos zone with ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," smart contracts enabled."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," was originally forked from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"cosmos/gaia repository"),". It adds a new module called ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wasm"),", but the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," binary should otherwise function just like ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad"),"."),(0,o.kt)("p",null,"To build ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," you can either install it from source or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm/wasmd")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/",title:"Docker Homepage"},"Docker")," container."),(0,o.kt)("h3",{id:"install-wasmd-from-source"},"Install Wasmd From Source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Get source code\ngit clone git@github.com:CosmWasm/wasmd.git\ncd wasmd\n\n# Install\nmake install\nmake test\nmake proto-gen\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: building wasmd from source requires Go 1.16.8+")),(0,o.kt)("p",null,"For full installation and configuration parameters see: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd#readme"},"https://github.com/CosmWasm/wasmd#readme")),(0,o.kt)("h3",{id:"install-wasmd-using-docker"},"Install Wasmd Using Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t cosmwasm/wasmd:latest\n")),(0,o.kt)("p",null,"For more information on running ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm/wasmd")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/",title:"Docker Homepage"},"Docker")," container, see: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd#dockerized"},"https://github.com/CosmWasm/wasmd#dockerized")),(0,o.kt)("h2",{id:"npm"},"Npm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is a package manager for JavaScript and Node.js. In Archway it's used for installing and updating the developer CLI. "),(0,o.kt)("p",null,"For installing ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," see instructions for your operating system at: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm")),(0,o.kt)("h2",{id:"archway-developer-cli"},"Archway Developer CLI"),(0,o.kt)("p",null,"The Archway developer CLI can be installed from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway-cli"},"GitHub repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:archway-network/archway-cli.git\ncd archway-cli \nnpm install -g\n")))}m.isMDXComponent=!0}}]);