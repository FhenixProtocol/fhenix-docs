"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[2982],{7334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(5893),r=n(1151);const s={sidebar_position:3,title:"(Un)Sealing"},a=void 0,o={id:"devdocs/FhenixJS/Decryption",title:"(Un)Sealing",description:"When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app or user can read.",source:"@site/docs/devdocs/FhenixJS/Decryption.md",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Decryption",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Decryption",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Decryption.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"(Un)Sealing"},sidebar:"docsSidebar",previous:{title:"Encryption",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Encryption"},next:{title:"Permits",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Permits"}},c={},d=[{value:"Encrypted Values &amp; Permits",id:"encrypted-values--permits",level:3},{value:"1. Creating a Permit",id:"1-creating-a-permit",level:4},{value:"2. Querying the Contract",id:"2-querying-the-contract",level:4},{value:"3. Unsealing the Data",id:"3-unsealing-the-data",level:4},{value:"Putting it all Together",id:"putting-it-all-together",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app or user can read."}),"\n",(0,i.jsxs)(t.p,{children:["The process of taking an FHE-encrypted ciphertext and converting it to standard encryption is called ",(0,i.jsx)(t.strong,{children:"sealing."})]}),"\n",(0,i.jsxs)(t.p,{children:["The data is returned to the user using ",(0,i.jsx)(t.a,{href:"https://bitbeans.gitbooks.io/libsodium-net/content/public-key_cryptography/sealed_boxes.html",children:"sealed box encryption "}),"from NaCL. The gist of it is that the user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data in such a way that only the owner of the private key associated with the provided public key can decrypt and read the data."]}),"\n",(0,i.jsx)(t.admonition,{title:"Don't Want to Seal?",type:"tip",children:(0,i.jsxs)(t.p,{children:["Fhenix supports standard decryption as well. Mostly suited for public data, an unsealed plaintext value can be returned from a contract.\nYou can read more about how to do this ",(0,i.jsx)(t.a,{href:"#../",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"encrypted-values--permits",children:"Encrypted Values & Permits"}),"\n",(0,i.jsx)(t.p,{children:"When reading encrypted values we can do one of two things:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Receiving it as bytes calldata: 0x04000...."}),"\n",(0,i.jsx)(t.li,{children:'RECOMENDED: Receiving it as inEuint*: ["0x04000"]'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The main difference with inEuint* is that you can be explicit with what is the exact parameter that you are looking for."}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Permit"})," is a data structure that helps contracts know who is trying to call a specific function."]}),"\n",(0,i.jsx)(t.p,{children:"The fhenix.js Javascript library includes methods to support creating parameters for values that require [Permits & Access Control](../Encryption and Privacy/Permits-Access-Control.md). These methods can help creating ephemeral transaction keys, which are used by the smart contract to create a secure encryption channel to the caller.\nSimilarly to decryption, this usage can be implemented by any compliant library, but we include direct support in fhenix.js. "}),"\n",(0,i.jsx)(t.p,{children:"This is done in 3 steps: generating a permit, querying the contract and unsealing the data."}),"\n",(0,i.jsx)(t.h4,{id:"1-creating-a-permit",children:"1. Creating a Permit"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { FhenixClient, getPermit } from 'fhenixjs';\n\nconst provider = new ethers.JsonRpcProvider('https://test01.fhenix.zone/evm');\nconst client = new FhenixClient({ provider });\n\n\nconst permit = await getPermit(contractAddress, provider);\nclient.storePermit(permit);\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Did you know?",type:"tip",children:(0,i.jsxs)(t.p,{children:["When you create a permit it gets stored in ",(0,i.jsx)(t.code,{children:"localstorage"}),". This makes permits easily reusable and transferable"]})}),"\n",(0,i.jsx)(t.h4,{id:"2-querying-the-contract",children:"2. Querying the Contract"}),"\n",(0,i.jsx)(t.p,{children:"We recommend that contracts implement the Permit/Permission interfaces (though this is not strictly required!).\nIn this case, we can easily inject our permit into the function call."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const permission = client.extractPermitPermission(permit);\nconst response = await contract.balanceOf(permission);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"3-unsealing-the-data",children:"3. Unsealing the Data"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we have the response data, we can use the ",(0,i.jsx)(t.code,{children:"unseal"})," function to decipher the data"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"client.unseal(contractAddress, response)\n"})}),"\n",(0,i.jsx)(t.p,{children:"We have to provide the contract address so the fhenix client knows which permit to use for the unsealing function."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Permits are currently limited to support a single contract"})}),"\n",(0,i.jsx)(t.h4,{id:"putting-it-all-together",children:"Putting it all Together"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import { FhenixClient, getPermit } from 'fhenixjs';\nimport { JsonRpcProvider } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://test01.fhenix.zone/evm');\nconst client = new FhenixClient({provider});\n\nconst permit = await getPermit(contractAddress, provider);\nclient.storePermit(permit);\n\nconst permission = client.extractPermitPermission(permit);\nconst response = await contract.balanceOf(permission);\n\nconst plaintext = client.unseal(contractAddress, response);\n\nconsole.log(`My Balance: ${plaintext}`)\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Did you know?",type:"tip",children:(0,i.jsxs)(t.p,{children:["You have tools that can ease the process of interacting with the contract and decrypting values. If you want to use them please refer to\n",(0,i.jsx)(t.a,{href:"../Tools%20and%20Utilities/Fhenix-Encryption-UI",children:"Tools and Utilities"})]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);