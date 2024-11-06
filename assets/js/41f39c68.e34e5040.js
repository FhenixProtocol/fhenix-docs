"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[5901],{8024:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(4848),s=i(8453);const r={sidebar_position:5,title:"\ud83d\udd00 Fhenix Differences For Developers"},c=void 0,o={id:"devdocs/Fhenix Testnet/Details/Fhenix-Differences",title:"\ud83d\udd00 Fhenix Differences For Developers",description:"You might be familiar with fhevm, which is a fork of the Ethereum Virtual Machine that supports homomorphic encryption by Zama.",source:"@site/docs/devdocs/Fhenix Testnet/Details/Fhenix-Differences.md",sourceDirName:"devdocs/Fhenix Testnet/Details",slug:"/devdocs/Fhenix Testnet/Details/Fhenix-Differences",permalink:"/docs/nitrogen/devdocs/Fhenix Testnet/Details/Fhenix-Differences",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Fhenix Testnet/Details/Fhenix-Differences.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\ud83d\udd00 Fhenix Differences For Developers"},sidebar:"docsSidebar",previous:{title:"\ud83d\uded1 Limitations",permalink:"/docs/nitrogen/devdocs/Fhenix Testnet/Details/Limitations"},next:{title:"FHE Contracts",permalink:"/docs/nitrogen/category/fhe-contracts"}},d={},a=[{value:"Differences",id:"differences",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You might be familiar with fhevm, which is a fork of the Ethereum Virtual Machine that supports homomorphic encryption by Zama."}),"\n",(0,t.jsx)(n.p,{children:"While Fhenix uses a similar FHE cryptography, it does not use fhevm.\nHowever, in order to make the FHE ecosystem as accessible as possible, we have chosen to maintain compatibility in most interfaces,\nexcept when we felt that the developer experience was significantly improved by making changes."}),"\n",(0,t.jsx)(n.p,{children:"In this page, we try and document the differences that developers should be aware of."}),"\n",(0,t.jsx)(n.h2,{id:"differences",children:"Differences"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"fhenix.js is the recommended Javascript library for interacting with Fhenix smart contracts."}),"\n",(0,t.jsxs)(n.li,{children:["FHE library is available at the npm repository ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@fhenixprotocol/contracts",children:"@fhenixprotocol/contracts"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cmux"})," is named ",(0,t.jsx)(n.code,{children:"select"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reencrypt"})," is named ",(0,t.jsx)(n.code,{children:"sealoutput"})," or ",(0,t.jsx)(n.code,{children:"seal"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Operations can be called directly as properties of encrypted types (e.g. ",(0,t.jsx)(n.code,{children:"euint32.add(euint32)"})," instead of ",(0,t.jsx)(n.code,{children:"FHE.add(euint32, euint32)"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Operations between encrypted types expect the types to match (e.g. ",(0,t.jsx)(n.code,{children:"euint32 + euint32"})," instead of ",(0,t.jsx)(n.code,{children:"euint32 + euint64)"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["In Fhenix, we recommend using the ",(0,t.jsx)(n.code,{children:"inEuintXX"})," input types instead of raw bytes when receiving encrypted data."]}),"\n",(0,t.jsxs)(n.li,{children:["Conversion to other encrypted types can be done using the ",(0,t.jsx)(n.code,{children:".toUxx"})," functions. E.g. ",(0,t.jsx)(n.code,{children:"euint32 b = a.toU32();"})]}),"\n",(0,t.jsxs)(n.li,{children:["Division by zero will return a ",(0,t.jsx)(n.code,{children:"MAX_UINT"})," value instead of throwing an error (e.g. ",(0,t.jsx)(n.code,{children:"euint8(1) / euint8(0)"})," will return ",(0,t.jsx)(n.code,{children:"euint8(255)"})," instead of throwing an error)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Permits"})," and ",(0,t.jsx)(n.code,{children:"Permissioned"})," contracts are the recommended way to handle access to sensitive data in Fhenix. To read more about permits and access control, see ",(0,t.jsx)(n.a,{href:"/docs/nitrogen/devdocs/Encryption%20and%20Privacy/Permits-Access-Control",children:"Access Control"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Sealing and Decryption can be accessed using ",(0,t.jsx)(n.code,{children:".seal"})," and ",(0,t.jsx)(n.code,{children:".decrypt"})," respectively."]}),"\n",(0,t.jsxs)(n.li,{children:["Large bit sizes are supported (including ",(0,t.jsx)(n.code,{children:"eaddress"}),"), with a limited instruction set"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);