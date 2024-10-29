"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[4552],{7604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),o=n(8453);const i={sidebar_position:4,title:"\ud83d\uded1 Limitations"},r=void 0,a={id:"devdocs/Fhenix Testnet/Details/Limitations",title:"\ud83d\uded1 Limitations",description:"Decryption Key",source:"@site/docs/devdocs/Fhenix Testnet/Details/Limitations.md",sourceDirName:"devdocs/Fhenix Testnet/Details",slug:"/devdocs/Fhenix Testnet/Details/Limitations",permalink:"/docs/devdocs/Fhenix Testnet/Details/Limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Fhenix Testnet/Details/Limitations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\uded1 Limitations"},sidebar:"docsSidebar",previous:{title:"\ud83c\udd95 Changelog",permalink:"/docs/devdocs/Fhenix Testnet/Details/Changelog"},next:{title:"\ud83d\udd00 Fhenix Differences For Developers",permalink:"/docs/devdocs/Fhenix Testnet/Details/Fhenix-Differences"}},d={},c=[{value:"Decryption Key",id:"decryption-key",level:2},{value:"Security",id:"security",level:2},{value:"Randomness",id:"randomness",level:2},{value:"Gas Costs",id:"gas-costs",level:2},{value:"Stability",id:"stability",level:2},{value:"Integer Bit Sizes",id:"integer-bit-sizes",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"decryption-key",children:"Decryption Key"}),"\n",(0,s.jsx)(t.p,{children:"Decryption key is stored locally on each node - until the addition of a more complete solution which will be a part of\nfuture versions, the decryption keys are stored by the node for ease of use. This means that (obviously), you shouldn't store any\nreal sensitive data or private keys on the testnet."}),"\n",(0,s.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(t.p,{children:["The current iteration of the network does not include multiple components (such as input knowledge proofs, threshold decryption, execution proofs, etc.) that are critical for the security of data and network keys.\nThese features will be added iteratively as we move towards full release - this should be obvious, but please ",(0,s.jsx)(t.strong,{children:"do not store any valuable information on the network as long as it is in the testnet phase"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"randomness",children:"Randomness"}),"\n",(0,s.jsxs)(t.p,{children:["Randomness as a service is planned as a future addition. Until we can guarantee a secure source of randomness, we do not\nwant to make such a function available as a network service. For demos and development that require a source of randomness, we encourage\nthe use of external oracles, or usage of a ",(0,s.jsx)(t.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Useful-Tips#randomness",children:"mock random number generator"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"gas-costs",children:"Gas Costs"}),"\n",(0,s.jsx)(t.p,{children:"All gas costs are subject to change, and are being evaluated for optimization. The current gas costs are not final, and may change."}),"\n",(0,s.jsx)(t.h2,{id:"stability",children:"Stability"}),"\n",(0,s.jsx)(t.p,{children:"The network is still in a beta phase, and may be subject to instability. Please do not rely on the network to store your contracts or data forever, or for any period of time.\nExpect that we might have to reboot the network and wipe everything on it at any time."}),"\n",(0,s.jsx)(t.h2,{id:"integer-bit-sizes",children:"Integer Bit Sizes"}),"\n",(0,s.jsxs)(t.p,{children:["At the moment all integer bit sizes are supported, as well as ",(0,s.jsx)(t.code,{children:"eaddress"}),", a 160-bit size for addresses. However, the instruction set is limited to a subset of operations for performance reasons.\nWhen we move to full public testnet and mainnet we expect to be able to support a wider range of operations. See ",(0,s.jsx)(t.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Types-and-Operators",children:"Types and Operators"})," for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);