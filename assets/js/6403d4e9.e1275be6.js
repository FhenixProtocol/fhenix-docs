"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[8172],{5371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(4848),r=t(8453);const s={sidebar_position:2,displayed_sidebar:"docsSidebar"},o="Your First FHE Contract",c={id:"devdocs/Tutorials/Your-First-FHE-Contract",title:"Your First FHE Contract",description:"In this short guide, we'll demonstrate how simple it is to enable confidentiality in your smart contracts using Fhenix.",source:"@site/versioned_docs/version-Helium/devdocs/Tutorials/Your-First-FHE-Contract.md",sourceDirName:"devdocs/Tutorials",slug:"/devdocs/Tutorials/Your-First-FHE-Contract",permalink:"/docs/helium/devdocs/Tutorials/Your-First-FHE-Contract",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Tutorials/Your-First-FHE-Contract.md",tags:[],version:"Helium",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"docsSidebar"},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/docs/helium/category/tutorials"},next:{title:"Shielded ERC20 Token",permalink:"/docs/helium/category/shielded-erc20-token"}},l={},a=[{value:"Code Walkthrough",id:"code-walkthrough",level:2},{value:"Step By Step",id:"step-by-step",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Have Questions?",id:"have-questions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"your-first-fhe-contract",children:"Your First FHE Contract"}),"\n",(0,i.jsx)(n.p,{children:"In this short guide, we'll demonstrate how simple it is to enable confidentiality in your smart contracts using Fhenix."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.17;\n\nimport "@fhenixprotocol/contracts/FHE.sol";\n\ncontract EarlyWin {\n    uint8 _plaintext;\n    euint8 public _cipherText;\n\n    function setCipherText(inEuint8 calldata _encryptedNumber) public {\n        // convert inEuint8 type structure to euint8\n        _cipherText = FHE.asEuint8(_encryptedNumber);\n    }\n\n    function setPlainText(uint8 _number) public {\n        // set standard plaintext\n        _plaintext = _number;\n    }\n\n    function decrypt() public view returns (uint8) {\n        return FHE.decrypt(_cipherText);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"code-walkthrough",children:"Code Walkthrough"}),"\n",(0,i.jsxs)(n.p,{children:["First, FHE is imported directly into your contract with a single line of code. Next, we establish two unsigned integers, with ",(0,i.jsx)(n.code,{children:"_cipherText"})," being encrypted. This means it will not be publicly accessible by anyone other than the intended viewer. The standard ",(0,i.jsx)(n.code,{children:"_plaintext"})," ",(0,i.jsx)(n.code,{children:"uint8"})," represents a number that is public for all to view."]}),"\n",(0,i.jsx)(n.h3,{id:"step-by-step",children:"Step By Step"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Importing FHE"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import "@fhenixprotocol/contracts/FHE.sol";\n'})}),"\n",(0,i.jsx)(n.p,{children:"We can import the FHE precompiles directly into the smart contract with a single line of code. The power of FHE in one single line of copy-paste."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Declaring Variables"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"uint8 _plaintext;\neuint8 public _cipherText;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Line 8 is a familiar way of setting a number in Solidity. However, this unsigned integer will be publicly queryable by everyone with access to the network. The number set on line 9 as the encrypted unsigned integer will not be."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Setting the Encrypted Number"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function setCipherText(inEuint8 calldata _encryptedNumber) public {\n    // convert inEuint8 type structure to euint8\n    _cipherText = FHE.asEuint8(_encryptedNumber);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we set the encrypted number via the setter function. We pass an ",(0,i.jsx)(n.code,{children:"inEuint8"})," as the ciphertext, which represents the number we want to set."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Setting the Plaintext Number"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function setPlainText(uint8 _number) public {\n    // set standard plaintext\n    _plaintext = _number;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is the standard way of setting a number via a function call in plaintext Solidity."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Decrypting the Encrypted Number"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function decrypt() public view returns (uint8) {\n    return FHE.decrypt(_cipherText);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, we call the decrypt function to convert the private number to a public one. The method on line 21 represents an example of synchronous decryption. Fhenix will eventually move to an asynchronous decryption call. Don't worry, it will still be possible, and we will update you when the implementation is ready."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to learn more about working with Fhenix, please check out ",(0,i.jsx)(n.a,{href:"../Tutorials/Basic/intro",children:"docs for a development tutorial"}),". Here, you will learn how to set up your local dev environment and create an encrypted ERC-20 token!"]}),"\n",(0,i.jsx)(n.h3,{id:"have-questions",children:"Have Questions?"}),"\n",(0,i.jsxs)(n.p,{children:["Hop into our ",(0,i.jsx)(n.a,{href:"https://discord.gg/FuVgxrvJMY",children:"Discord"})," and ask questions in the ",(0,i.jsx)(n.code,{children:"#dev-general"})," or ",(0,i.jsx)(n.code,{children:"#tech-questions"})," channels!"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);