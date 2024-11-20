"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[4552],{7604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={sidebar_position:4,title:"\ud83d\uded1 Limitations"},r=void 0,a={id:"devdocs/Fhenix Testnet/Details/Limitations",title:"\ud83d\uded1 Limitations",description:"Decryption Key",source:"@site/docs/devdocs/Fhenix Testnet/Details/Limitations.md",sourceDirName:"devdocs/Fhenix Testnet/Details",slug:"/devdocs/Fhenix Testnet/Details/Limitations",permalink:"/docs/devdocs/Fhenix Testnet/Details/Limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Fhenix Testnet/Details/Limitations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\uded1 Limitations"},sidebar:"docsSidebar",previous:{title:"\ud83c\udd95 Changelog",permalink:"/docs/devdocs/Fhenix Testnet/Details/Changelog"},next:{title:"\ud83d\udd00 Fhenix Differences For Developers",permalink:"/docs/devdocs/Fhenix Testnet/Details/Fhenix-Differences"}},d={},c=[{value:"Decryption Key",id:"decryption-key",level:2},{value:"Security",id:"security",level:2},{value:"Gas Costs",id:"gas-costs",level:2},{value:"Stability",id:"stability",level:2},{value:"Integer Bit Sizes",id:"integer-bit-sizes",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"decryption-key",children:"Decryption Key"}),"\n",(0,i.jsx)(t.p,{children:"Decryption key is stored locally on each node - until the addition of a more complete solution which will be a part of\nfuture versions, the decryption keys are stored by the node for ease of use. This means that (obviously), you shouldn't store any\nreal sensitive data or private keys on the testnet."}),"\n",(0,i.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(t.p,{children:["The current iteration of the network does not include multiple components (such as input knowledge proofs, threshold decryption, execution proofs, etc.) that are critical for the security of data and network keys.\nThese features will be added iteratively as we move towards full release - this should be obvious, but please ",(0,i.jsx)(t.strong,{children:"do not store any valuable information on the network as long as it is in the testnet phase"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"gas-costs",children:"Gas Costs"}),"\n",(0,i.jsx)(t.p,{children:"All gas costs are subject to change, and are being evaluated for optimization. The current gas costs are not final, and may change."}),"\n",(0,i.jsx)(t.h2,{id:"stability",children:"Stability"}),"\n",(0,i.jsx)(t.p,{children:"The network is still in a beta phase, and may be subject to instability. Please do not rely on the network to store your contracts or data forever, or for any period of time.\nExpect that we might have to reboot the network and wipe everything on it at any time."}),"\n",(0,i.jsx)(t.h2,{id:"integer-bit-sizes",children:"Integer Bit Sizes"}),"\n",(0,i.jsxs)(t.p,{children:["At the moment all integer bit sizes are supported, as well as ",(0,i.jsx)(t.code,{children:"eaddress"}),", a 160-bit size for addresses. However, the instruction set is limited to a subset of operations for performance reasons.\nWhen we move to full public testnet and mainnet we expect to be able to support a wider range of operations. See ",(0,i.jsx)(t.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Types-and-Operators",children:"Types and Operators"})," for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);