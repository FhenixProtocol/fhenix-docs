"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[8696],{7466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453);const r={},o="\ud83d\udcdc Permits & Access Control",a={id:"devdocs/Encryption and Privacy/Permits-Access-Control",title:"\ud83d\udcdc Permits & Access Control",description:"In a Fully Homomorphic Encryption (FHE) framework, all data stored in a contract's storage is encrypted. Access control involves granting selective access to data by authorized parties while restricting access to unauthorized users.",source:"@site/versioned_docs/version-Helium/devdocs/Encryption and Privacy/Permits-Access-Control.md",sourceDirName:"devdocs/Encryption and Privacy",slug:"/devdocs/Encryption and Privacy/Permits-Access-Control",permalink:"/docs/devdocs/Encryption and Privacy/Permits-Access-Control",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Encryption and Privacy/Permits-Access-Control.md",tags:[],version:"Helium",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Examples & fheDapps",permalink:"/docs/devdocs/Examples and References/Examples-fheDapps"},next:{title:"\ud83e\udd2b Development Tips \u2013 Ensuring Privacy",permalink:"/docs/devdocs/Encryption and Privacy/Privacy-Web3"}},c={},d=[{value:"Permits and Access Control",id:"permits-and-access-control",level:2},{value:"What is a Permit?",id:"what-is-a-permit",level:4},{value:"How to Generate a Permit",id:"how-to-generate-a-permit",level:4},{value:"What is a Permission?",id:"what-is-a-permission",level:4},{value:"How to Generate a Permission",id:"how-to-generate-a-permission",level:4},{value:"Using a Permission",id:"using-a-permission",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-permits--access-control",children:"\ud83d\udcdc Permits & Access Control"}),"\n",(0,i.jsx)(t.p,{children:"In a Fully Homomorphic Encryption (FHE) framework, all data stored in a contract's storage is encrypted. Access control involves granting selective access to data by authorized parties while restricting access to unauthorized users."}),"\n",(0,i.jsxs)(t.p,{children:["Solidity contracts generally expose their data using ",(0,i.jsx)(t.code,{children:"view"})," functions. However, permissioned data is a challenge, since Solidity ",(0,i.jsx)(t.code,{children:"view"})," functions do not come with any in-built mechanism to allow the contract to verify cryptographically that callers are who they say they are (for transactions, this is done by verifying the signature on the data).\nFhenix handles this issue by implementing a ",(0,i.jsx)(t.code,{children:"seal"})," function, which seals the data in a manner that only the intended recipient can decrypt and view (Fhenix uses the ",(0,i.jsx)(t.code,{children:"decrypt"})," function for less sensitive data). This approach ensures that encrypted data remains confidential and only accessible to authorized users."]}),"\n",(0,i.jsx)(t.h2,{id:"permits-and-access-control",children:"Permits and Access Control"}),"\n",(0,i.jsx)(t.p,{children:"Fhenix Solidity libraries (specifically, fhenix.js) are equipped with an in-built access control scheme.\nThis access control scheme enables contracts to perform a basic check of account ownership by adding authentication and authorization features to specific view functions.\n(An added benefit of the Fhenix Solidity libraries is that developers save coding effort each time a project has cryptographic access control requirements.)"}),"\n",(0,i.jsx)(t.h4,{id:"what-is-a-permit",children:"What is a Permit?"}),"\n",(0,i.jsx)(t.p,{children:"A permit is a mechanism that allows the contract to verify cryptographically the identity of callers, ensuring that they are who they claim to be."}),"\n",(0,i.jsx)(t.p,{children:"In Fhenix, a permit is a signed message that contains the caller's public key, which the contract can use to verify the caller. The permit is a signed JSON object that follows the EIP-712 standard.\nThe permit contains the necessary information, including a public key, which allows data re-sealing in a smart contract environment.\nThe inclusion of this public key into the permit enables a secure process of data re-sealing within a smart contract after the JSON object is signed by the user."}),"\n",(0,i.jsx)(t.h4,{id:"how-to-generate-a-permit",children:"How to Generate a Permit"}),"\n",(0,i.jsxs)(t.p,{children:["Permits are generated using the ",(0,i.jsx)(t.code,{children:"getPermit"})," method in ",(0,i.jsx)(t.code,{children:"fhenix.js"}),". This method requires the following parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"contractAddress"})," (required, string): The address of the contract."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"provider"})," (required): An ",(0,i.jsx)(t.code,{children:"ethers"})," (or compatible) object that can sign EIP-712 formatted data. (Note that if you want to unseal data using your wallet's encryption key you can't use \"JsonRpcProvider\")"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const permit = await getPermit(contractAddress);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"what-is-a-permission",children:"What is a Permission?"}),"\n",(0,i.jsxs)(t.p,{children:["In Fhenix, a permission is that part of a permit that supplies proof that callers are who they say they are.\nA permission contains the signature and corresponding public key.\nIn order to see how to verify a permission in a Solidity contract, please refer to our ",(0,i.jsx)(t.a,{href:"/docs/devdocs/Solidity%20API/Permissioned",children:"Permissioned"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"how-to-generate-a-permission",children:"How to Generate a Permission"}),"\n",(0,i.jsx)(t.p,{children:"The following is the syntax for generating a permission:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const permission = client.extractPermitPermissions(permit);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"using-a-permission",children:"Using a Permission"}),"\n",(0,i.jsxs)(t.p,{children:["Once generated, the permission can be used and sent to the contract. It can also be used to unseal the output of the ",(0,i.jsx)(t.code,{children:"sealoutput"})," function, assuming it was sealed using that same permission."]}),"\n",(0,i.jsx)(t.p,{children:"The following code snippet shows how to implement the added cryptographic functionality of Fhenix (specifically, permits and permissions) on Ethereum using the Fhenix library."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import { BrowserProvider } from "ethers";\nimport { FhenixClient, getPermit } from "fhenixjs";\n\nconst provider = new BrowserProvider(window.ethereum);\nconst client = new FhenixClient({ provider });\nconst permit = await getPermit(contractAddress, provider);\nconst permission = client.extractPemitPermissions(permit);\nclient.storePermit(permit); // Stores a permit for a specific contract address.\nconst response = await contract.connect(owner).getValue(permission); // Calling "getValue" which is a view function in "contract"\nconst plaintext = await client.unseal(contractAddress, response);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);