"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[1060],{6482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),r=n(8453);const o={sidebar_position:2,displayed_sidebar:"tutorialSidebar"},s="Overview",a={id:"tutorial/earlyWin",title:"Overview",description:"In this short guide we\u2019ll encrypt plaintext to ciphertext using FHE, demonstrating how simple it is to enable confidentiality in your smart contracts with Fhenix.",source:"@site/docs/tutorial/earlyWin.md",sourceDirName:"tutorial",slug:"/tutorial/earlyWin",permalink:"/docs/tutorial/earlyWin",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/tutorial/earlyWin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Deploying (WIP)",permalink:"/docs/tutorial/Basic/Deploying"}},c={},l=[];function u(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"In this short guide we\u2019ll encrypt plaintext to ciphertext using FHE, demonstrating how simple it is to enable confidentiality in your smart contracts with Fhenix."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contract Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Javascript",children:'pragma solidity ^0.8.17;\n\nimport "@fhenixprotocol/contracts/FHE.sol";\n\ncontract EarlyWin {\n  \n   uint8 _plaintext;\n   euint8 public _cipherText;\n\n\n   function setCipherText(inEuint8 calldata _encryptedNumber) public  {\n       // convert inEuint8 type structure to euint8\n       _cipherText = FHE.asEuint8(_encryptedNumber);\n   }\n\n\n   function setPlainText(uint8 _number) public {\n       //set standard plaintext\n       _plaintext = _number;\n   }\n\n\n   function decrypt() public view returns (uint8) {\n       return FHE.decrypt(_cipherText);\n   }\n}\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"First, FHE is imported directly into your contract with a single line of code. Next we establish two numbers or unsigned integers, withhowever the _cipherText number beingwill be encrypted. This means that it will not be publicly accessible from anyone other than the intended viewer. The standard _plaintext unit8 represents a number that is public for all to view. On line 11 we have a setter function that allows us to pass in a new encrypted number that will stay private. On line 21 we have a decrypt function that allows us to view the number that was written to state in the setCipherText function. As you can see there is no requirement for off-chain proof generation or storage."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Javascript",children:'    import "@fhenixprotocol/contracts/FHE.sol";\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);