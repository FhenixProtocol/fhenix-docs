"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[8935],{6419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),r=n(8453);const s={sidebar_position:5,title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data"},o="Require Statement",a={id:"devdocs/Writing Smart Contracts/Requires",title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data",source:"@site/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/Requires.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Requires",permalink:"/docs/devdocs/Writing Smart Contracts/Requires",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/Requires.md",tags:[],version:"Helium",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data"},sidebar:"docsSidebar",previous:{title:"\ud83c\udf34 Select vs If...else",permalink:"/docs/devdocs/Writing Smart Contracts/Select"},next:{title:"\ud83d\udd75\ufe0f Permissions",permalink:"/docs/devdocs/Writing Smart Contracts/Permissions"}},c={},d=[{value:"Example",id:"example",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"require-statement",children:"Require Statement"}),"\n",(0,i.jsxs)(t.p,{children:["Encrypted require statements (",(0,i.jsx)(t.code,{children:"req"}),") are analogous to standard Solidity require statements. Given an encrypted Boolean predicate, the statement forces the transaction execution to halt if the predicate evaluates to false. Evaluating the encrypted Boolean predicate implies a (threshold) decryption."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"In the following code, the function failingRequire is intended to revert the transaction if the equality condition between val and val2 is not met."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Javascript",children:"// A transaction calling this function will revert.\nfunction failingRequire(euint8 a) public {\n    euint8 val = FHE.asEuint8(4);\n    euint8 val2 = FHE.asEuint8(5);\n    FHE.req(FHE.eq(val, val2));\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);