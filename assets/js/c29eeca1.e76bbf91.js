"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[9648],{7826:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=n(4848),s=n(8453);const r={sidebar_position:3,title:"\ud83e\udd32 3rd party Integrations"},o=void 0,d={id:"devdocs/Fhenix Testnet/Integration",title:"\ud83e\udd32 3rd party Integrations",description:"Are you a developer looking to integrate Fhenix into your project, or support Fhenix with your app? This section is for you!",source:"@site/versioned_docs/version-Helium/devdocs/Fhenix Testnet/Integration.md",sourceDirName:"devdocs/Fhenix Testnet",slug:"/devdocs/Fhenix Testnet/Integration",permalink:"/docs/devdocs/Fhenix Testnet/Integration",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Fhenix Testnet/Integration.md",tags:[],version:"Helium",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83e\udd32 3rd party Integrations"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 Connecting to Fhenix Helium Testnet",permalink:"/docs/devdocs/Fhenix Testnet/Connecting-To"},next:{title:"\ud83e\uddee FHE Schemes Overview",permalink:"/docs/devdocs/Fhenix Testnet/FHE-Overview"}},c={},h=[{value:"Things to Know",id:"things-to-know",level:2},{value:"APIs, RPCs and general compatibility",id:"apis-rpcs-and-general-compatibility",level:3},{value:"EVM Compatibility",id:"evm-compatibility",level:3},{value:"Public Endpoints",id:"public-endpoints",level:3},{value:"Cross Chain Messaging Contracts",id:"cross-chain-messaging-contracts",level:2}];function a(e){const i={a:"a",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Are you a developer looking to integrate Fhenix into your project, or support Fhenix with your app? This section is for you!"}),"\n",(0,t.jsx)(i.h2,{id:"things-to-know",children:"Things to Know"}),"\n",(0,t.jsx)(i.h3,{id:"apis-rpcs-and-general-compatibility",children:"APIs, RPCs and general compatibility"}),"\n",(0,t.jsx)(i.p,{children:"Fhenix is based on Arbitrum, with the Helium Testnet based on Arbitrum Nitro version 2.3.4 (ArbOS 20). This means that everything that is natively supported\nby Arbitrum Nitro is also supported by Fhenix (rpc calls, ABI, etc)."}),"\n",(0,t.jsxs)(i.p,{children:["Please refer to the ",(0,t.jsx)(i.a,{href:"https://docs.arbitrum.io/build-decentralized-apps/arbitrum-vs-ethereum/comparison-overview",children:"Arbitrum documentation"})," for more information and specifics."]}),"\n",(0,t.jsx)(i.h3,{id:"evm-compatibility",children:"EVM Compatibility"}),"\n",(0,t.jsx)(i.p,{children:"Fhenix is fully EVM compatible, up to and including the Cancun Upgrade.\nThis means that any contract that runs on Ethereum should run on Fhenix as well. We support Solidity compiler 0.8.26."}),"\n",(0,t.jsx)(i.h3,{id:"public-endpoints",children:"Public Endpoints"}),"\n",(0,t.jsx)(i.p,{children:"We have public endpoints available for the Helium Testnet, which can be used:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{width:"222",children:"Type"}),(0,t.jsx)("th",{children:"API"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"JSON-RPC"}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"https://api.helium.fhenix.zone",children:(0,t.jsx)("strong",{children:(0,t.jsx)(i.a,{href:"https://api.helium.fhenix.zone",children:"https://api.helium.fhenix.zone"})})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Chain ID"}),(0,t.jsx)("td",{children:"8008135"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Websocket"}),(0,t.jsx)("td",{children:"wss://api.helium.fhenix.zone:8548"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["If you require specialized endpoints, or higher rate limits than the default please reach out to us on ",(0,t.jsx)(i.a,{href:"https://discord.gg/FuVgxrvJMY",children:"Discord"})," or ",(0,t.jsx)(i.a,{href:"mailto://info@fhenix.io",children:"email"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"cross-chain-messaging-contracts",children:"Cross Chain Messaging Contracts"}),"\n",(0,t.jsx)(i.p,{children:"The following contracts are deployed on Ethereum Sepolia and may be used by developers that wish to interact with Fhenix in a similar way to Arbitrum"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Delayed Inbox"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"0xf993E10C83Fe26DddFc6cb5E82444C44201e8a9C"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Bridge"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"0xBAE4d0f2b685452450bfC29a920A82e1DBdcFdD1"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Outbox"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"0x2635a570f9ae308618D0A340DCd1118fBF73B2E8"})})]})]})]})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);