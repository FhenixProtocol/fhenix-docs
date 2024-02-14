"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[1491],{5006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(5893),s=n(1151);const i={sidebar_position:5,title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data"},o="Requires",a={id:"devdocs/Writing Smart Contracts/Requires",title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data",source:"@site/docs/devdocs/Writing Smart Contracts/Requires.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Requires",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Requires",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Requires.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\ud83d\udea6Require Statements",description:"How to perform assertions on Encrypted data"},sidebar:"docsSidebar",previous:{title:"\ud83c\udf34 Select vs If...else",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Select"},next:{title:"\ud83d\udd75\ufe0f Permissions",permalink:"/fhenix-docs/docs/devdocs/Writing Smart Contracts/Permissions"}},c={},d=[{value:"Examples",id:"examples",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"requires",children:"Requires"}),"\n",(0,r.jsxs)(t.p,{children:["Encrypted require statements (",(0,r.jsx)(t.code,{children:"req"}),") are analogous the usual Solidity ",(0,r.jsx)(t.code,{children:"require"})," statements: given an encrypted boolean predicate ",(0,r.jsx)(t.code,{children:"b"}),", the statement will force the transaction execution to halt if ",(0,r.jsx)(t.code,{children:"b"})," evaluates to false. Evaluating the encrypted boolean predicate implies a (threshold) decryption."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Javascript",children:"// A transcation calling this function will revert.\nfunction failingRequire(euint8 a) public {\n    euint8 val = FHE.asEuint8(4);\n    euint8 val2 = FHE.asEuint8(5);\n    FHE.req(FHE.eq(val, val2));\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);