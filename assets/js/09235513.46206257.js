"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[6717],{3851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(4848),o=t(8453);const s={sidebar_position:7,title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types"},r="Converting Between Types",c={id:"devdocs/Writing Smart Contracts/Converting-between-Types",title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types",source:"@site/docs/devdocs/Writing Smart Contracts/Converting-between-Types.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Converting-between-Types",permalink:"/docs/./devdocs/Writing Smart Contracts/Converting-between-Types",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Converting-between-Types.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\ud83e\uddd9 Type Conversions",description:"Converting between different FHE types"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd75\ufe0f Permissions",permalink:"/docs/./devdocs/Writing Smart Contracts/Permissions"},next:{title:"\ud83e\udeb5 Console.log",permalink:"/docs/./devdocs/Writing Smart Contracts/Debug-Logging"}},a={},l=[{value:"Using Conversion Functions",id:"using-conversion-functions",level:2},{value:"\u26a0\ufe0f Important Security Note",id:"warning-important-security-note",level:3},{value:"Final Tips\u200b",id:"final-tips",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"converting-between-types",children:"Converting Between Types"}),"\n",(0,i.jsxs)(n.p,{children:["Conversion between various encrypted types or from plaintext to encrypted within contracts is frequently required. This section covers procedures for leveraging type conversion functions in ",(0,i.jsx)(n.code,{children:"FHE.sol"})," to manipulate encrypted data effectively."]}),"\n",(0,i.jsx)(n.h2,{id:"using-conversion-functions",children:"Using Conversion Functions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Converting Encrypted to Other Encrypted Types:"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following code shows conversion of an encrypted Boolean vote to an encrypted integer before tallying in a voting smart contract."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contract Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Javascript",children:"contract Voting { \n    function convertVote(ebool encryptedVote) public {\n        // Convert the encrypted boolean vote to an encrypted 32-bit integer\n        euint32 encryptedVoteInt = encryptedVote.toU32();\n        // Further processing with encryptedVoteInt\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Converting from Plaintext to Encrypted Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following code shows initializing an encrypted counter in a smart contract, starting from a plaintext value that needs to be encrypted."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contract Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Javascript",children:"contract Counter {\n    euint32 private encryptedCount;\n\n    function initializeCount(uint256 initialCount) public {\n        // Convert a plaintext count to an encrypted count\n        encryptedCount = FHE.asEuint32(initialCount);\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"warning-important-security-note",children:["\u26a0\ufe0f"," Important Security Note"]}),"\n",(0,i.jsxs)(n.p,{children:["When converting from plaintext to encrypted (also called ",(0,i.jsx)(n.a,{href:"/docs/./devdocs/Writing%20Smart%20Contracts/Useful-Tips#trivial-encryption",children:(0,i.jsx)(n.strong,{children:"Trivial Encryption"})}),", the value is still in plaintext and exposed to the contract, as well as on the public blockchain. This type of conversion should only be used when plaintext data is not sensitive, and it is safe to expose on a public blockchain."]}),"\n",(0,i.jsx)(n.h2,{id:"final-tips",children:"Final Tips\u200b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Understand the Data Types"}),": Know the data types that you are working with and the implications of converting between them. Ensure that the conversion is logical and secure."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Monitor Gas Usage"}),": Be aware of the gas costs associated with specific types of conversions, especially when functions are frequently called."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Test Thoroughly"}),": Always test contracts with various scenarios to ensure that type conversions are behaving as expected."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);