"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3187],{459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const o={sidebar_position:4,title:"\ud83c\udf34 Select vs If...else",description:"Why if..else is not possible and what are the alternatives"},a=void 0,r={id:"devdocs/Writing Smart Contracts/Select",title:"\ud83c\udf34 Select vs If...else",description:"Why if..else is not possible and what are the alternatives",source:"@site/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/Select.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Select",permalink:"/docs/Helium/devdocs/Writing Smart Contracts/Select",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/Select.md",tags:[],version:"Helium",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83c\udf34 Select vs If...else",description:"Why if..else is not possible and what are the alternatives"},sidebar:"docsSidebar",previous:{title:"\ud83d\udc48 Outputs",permalink:"/docs/Helium/devdocs/Writing Smart Contracts/Returning-Data"},next:{title:"\ud83d\udea6Require Statements",permalink:"/docs/Helium/devdocs/Writing Smart Contracts/Requires"}},c={},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Writing code with Fully Homomorphic Encryption (FHE) introduces a fundamental shift in how we handle conditionals or branches in our code. As you already know, with FHE, we're operating on encrypted data. This means we can't use typical ",(0,i.jsx)(t.code,{children:"if...else"})," branching structures, because we don't have visibility into the actual values we're comparing."]}),"\n",(0,i.jsx)(t.p,{children:"For example, this will not work:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Javascript",children:"euint32 a = FHE.asEuint32(10);\neuint32 b = FHE.asEuint32(20);\nif (a.lt(b)) {\n   return FHE.decrypt(a);\n} else {\n   return FHE.decrypt(b);\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"When writing Solidity contracts for our blockchain, you'll need to consider all possible branches of a conditional at the same time. It's somewhat akin to writing constant-time cryptographic code, where you want to avoid timing attacks that could leak information about secret data."}),"\n",(0,i.jsx)(t.p,{children:'To handle these conditionals, we use a concept called a "selector".\nA selector is a function that takes in a control and two branches, and returns the result of the branch that corresponds to the condition. A selector is like a traffic signal that decides which traffic to let through based on the color of the light (control signal).'}),"\n",(0,i.jsxs)(t.p,{children:["In Fhenix, we utilize this by calling the ",(0,i.jsx)(t.code,{children:"select"})," function. It's a function that takes in a condition and two inputs, and returns the input that corresponds to the state of the condition. You can think of this like a ternary boolean conditional (",(0,i.jsx)(t.code,{children:'condition ? "yes" : "no"'}),"), but for encrypted data."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's take a look at an example of ",(0,i.jsx)(t.code,{children:"select"})," usage from a Blind Auction Smart Contract: TBD(ADD LINK):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Javascript",children:"ebool isHigher = existingBid.lt(value);\nbids[msg.sender] = FHE.select(isHigher, value, existingBid);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In this snippet, the bidder is trying to place a new bid that is higher than their existing one. The ",(0,i.jsx)(t.code,{children:"lt"})," function checks if the existing bid is less than the new value and assigns the result to ",(0,i.jsx)(t.code,{children:"isHigher"})," (the result is of type ",(0,i.jsx)(t.code,{children:"ebool"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Then ",(0,i.jsx)(t.code,{children:"FHE.select"})," takes over. If ",(0,i.jsx)(t.code,{children:"isHigher"})," is true (remember, this is still an encrypted boolean, not a plaintext one), it returns the ",(0,i.jsx)(t.code,{children:"value"})," (the new bid), otherwise, it returns ",(0,i.jsx)(t.code,{children:"existingBid"}),". This gets assigned to ",(0,i.jsx)(t.code,{children:"bids[msg.sender]"}),", effectively replacing the old bid with the new one if the new one is higher."]}),"\n",(0,i.jsx)(t.p,{children:"The crucial part here is that all these operations take place on encrypted data, so the actual value of the bids and the result of the comparison stay concealed. It's a powerful pattern to handle conditional execution in the context of FHE data, maintaining privacy without sacrificing functionality."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);