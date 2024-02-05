"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7844],{9861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(5893),o=t(1151);const r={sidebar_position:4},i="End-to-End Example",c={id:"devdocs/FhenixJS/Sending-a-Transaction",title:"End-to-End Example",description:"In this section, we'll explore how to use fhenix.js to send transactions on the Fhenix blockchain.",source:"@site/docs/devdocs/FhenixJS/Sending-a-Transaction.md",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Sending-a-Transaction",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Sending-a-Transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Sending-a-Transaction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Permits",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Permits"},next:{title:"Network Keys",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Network Keys"}},a={},d=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"end-to-end-example",children:"End-to-End Example"}),"\n",(0,s.jsx)(n.p,{children:"In this section, we'll explore how to use fhenix.js to send transactions on the Fhenix blockchain."}),"\n",(0,s.jsx)(n.p,{children:"To send transactions with fhenix.js, we'll first establish a connection to the blockchain, then interact with it using a contract method. For this process, we'll also need to encrypt the transaction data."}),"\n",(0,s.jsxs)(n.p,{children:["Here's a step-by-step explanation, using ",(0,s.jsx)(n.code,{children:"ethers"}),", though other libraries like ",(0,s.jsx)(n.code,{children:"web3"}),"can also be used in a similar way. "]}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume we have a deployed ERC20 contract, only this one uses encrypted inputs and outputs (you can find the solidity code ",(0,s.jsx)(n.a,{href:"/fhenix-docs/docs/devdocs/Examples%20and%20References/Examples-fheDapps",children:"here"}),". Let's see how we can transfer some of our tokens to another address, while keeping the amount hidden."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Import fhenixjs and ethers"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"OUTDATED"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { FhenixClient } from "fhenixjs";\nimport { BrowserProvider } from "ethers";\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Define the Smart Contract Address and Provider:"})," The smart contract address is the Ethereum address of the deployed contract. ",(0,s.jsx)(n.code,{children:"provider"})," allows you to interact with the Ethereum blockchain."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const CONTRACT_ADDRESS = "0x1c786b8ca49D932AFaDCEc00827352B503edf16c";\nconst provider = new BrowserProvider(window.ethereum);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a Client to Interact With Fhenix:"})," The constructor of FhenixClient is used to create an instance of the client with the given provider."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const client = new FhenixClient({ provider });\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create the Transfer Function:"})," The ",(0,s.jsx)(n.code,{children:"transfer"})," function is used to send a transaction on the blockchain. It requires the recipient address and the amount to be sent as parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const transfer = async (to, amount) => {\n  // Create client\n  const client = new FhenixClient({ provider });\n\n  // get contract\n  const contract = await ethers.getContractAt(CONTRACT_NAME, CONTRACT_ADDRESS);\n  const encryptedAmount = await client.encrypt(number, EncryptionTypes.uint32);\n\n  const response = await contract\n    .connect(SENDER_ACCOUNT)\n    .transfer(address, encryptedAmount);\n  return response;\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);