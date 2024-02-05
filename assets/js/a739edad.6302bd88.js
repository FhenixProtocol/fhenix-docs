"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7413],{3941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(5893),i=t(1151);const r={sidebar_position:4,title:"Permits"},o="Permits & Permissions",a={id:"devdocs/FhenixJS/Permits",title:"Permits",description:"Overview",source:"@site/docs/devdocs/FhenixJS/Permits.md",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Permits",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Permits",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Permits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Permits"},sidebar:"docsSidebar",previous:{title:"(Un)Sealing",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Decryption"},next:{title:"End-to-End Example",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Sending-a-Transaction"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced Access Control",id:"advanced-access-control",level:4},{value:"Standardization",id:"standardization",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"permits--permissions",children:"Permits & Permissions"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Permits are a mechanism that allows the contract to cryptographically verify that the caller is who he says he is."}),"\n",(0,s.jsx)(n.p,{children:"Simply, they are a signed message that contains the caller's public key, which the contract can then use to verify that the caller is who he says he is."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Permits are meant to be used together with the interfaces exposed by ",(0,s.jsx)(n.a,{href:"../Solidity%20API/Permissioned",children:(0,s.jsx)(n.code,{children:"Permissioned.Sol"})}),". If a contract expects a ",(0,s.jsx)(n.code,{children:"Signature"}),"\nparameter, that's a good sign that we should use a ",(0,s.jsx)(n.code,{children:"permit"})," to manage and create user permissions."]}),"\n",(0,s.jsx)(n.p,{children:"Out-of-the-box, Fhenix Solidity libraries come with a basic access control scheme. This helps contracts perform a basic check for ownership of an account."}),"\n",(0,s.jsx)(n.p,{children:"To confirm whether the recipient is authorized, EIP712 signatures are employed. EIP712 is a standard for Ethereum signed messages that makes it easier to understand the information being signed. This allows us to verify that the signer of a given piece of data is the owner of the account they claim to be."}),"\n",(0,s.jsx)(n.admonition,{title:"Did You Know?",type:"tip",children:(0,s.jsx)(n.p,{children:"When signing EIP712 typed data, wallets such as MetaMask provide a more transparent, safe interface for users to understand what they are signing"})}),"\n",(0,s.jsx)(n.p,{children:"Let's see this concept in action using an example. In an encrypted ERC20 token contract, a user would want to query their token balance. Since the balance is stored as encrypted data, the contract must first verify that the query is indeed from the token owner before revealing the information. This is where the EIP712 signatures step in."}),"\n",(0,s.jsx)(n.p,{children:"Below is a function from an EncryptedERC20 contract:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function balanceOf(\n    Permission calldata perm\n)\n    public\n    view\n    onlySender(perm)\n    returns (bytes memory)\n{\n    return FHE.sealoutput(balances[msg.sender], perm.publicKey);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this function, ",(0,s.jsx)(n.code,{children:"onlySender"})," is a modifier that verifies if the EIP712 signature is valid. If the signature corresponds to the account that is making the call (",(0,s.jsx)(n.code,{children:"msg.sender"}),"), then the function will execute. If not, it will revert."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's what the ",(0,s.jsx)(n.code,{children:"onlySender"})," modifier looks like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'struct Permission {\n    bytes32 publicKey;\n    bytes signature;\n}\n\nmodifier onlySender(Permission memory permission) {\n    bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\n        keccak256("Permissioned(bytes32 publicKey)"),\n        permission.publicKey\n    )));\n    address signer = ECDSA.recover(digest, permission.signature);\n    if (signer != msg.sender)\n        revert SignerNotMessageSender();\n    _;\n    }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"onlySender"})," modifier takes a ",(0,s.jsx)(n.code,{children:"Permission"}),". It then calculates the ",(0,s.jsx)(n.code,{children:"digest"})," from the ",(0,s.jsx)(n.code,{children:"publicKey"}),". The signer's address is recovered from the ",(0,s.jsx)(n.code,{children:"digest"})," using the ",(0,s.jsx)(n.code,{children:"ECDSA.recover"})," function. If the recovered address matches ",(0,s.jsx)(n.code,{children:"msg.sender"}),", it means that the caller is indeed the owner of the account and is allowed to access the data."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use this helpful contract out-of-the-box by importing it from ",(0,s.jsx)(n.code,{children:"@fhenixprotocol/contracts/access"})," and can be easily imported to integrate into your contracts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\nimport "@fhenixprotocol/contracts/Fhe.sol";\nimport { Permissioned } from "@fhenixprotocol/contracts/access/Permissioned.sol";\n\ncontract WrappingERC20 is Permissioned, ERC20 {\n    \n    function balanceOfEncrypted(Permission memory perm) \n    public \n    view  \n    onlySender(perm)\n    returns (bytes memory) {\n        return FHE.sealoutput(_encBalances[msg.sender], perm.publicKey);\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a full example what this looks like - see ",(0,s.jsx)(n.a,{href:"https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol",children:"EncryptedERC20.sol"})," or our ",(0,s.jsx)(n.a,{href:"/fhenix-docs/docs/tutorial/intro",children:"getting started tutorial"})," for a full example, including client-side integration."]}),"\n",(0,s.jsx)(n.h4,{id:"advanced-access-control",children:"Advanced Access Control"}),"\n",(0,s.jsx)(n.p,{children:"While the above-mentioned access control scheme leveraging EIP712 signatures provides a robust mechanism for verifying the identity of users querying encrypted data, it does have some limitations. One of the primary missing pieces is the absence of roles and permissions associated with those roles. The scheme as described validates that a user querying a balance, for example, is indeed the owner of that account, but it doesn't provide a mechanism for defining different levels of access or permissions."}),"\n",(0,s.jsx)(n.p,{children:"For instance, in more complex scenarios, you might want to allow certain users to only view specific pieces of data, or perhaps perform certain actions based on their role (admin, user, auditor, etc.). Moreover, there's no provision for dynamic access control in which permissions could be granted or revoked at runtime."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, this scheme doesn't cover collective authority, where, for example, an action might require the approval of multiple participants to be executed. Such advanced access control mechanisms are not built into this scheme and would need to be implemented separately based on specific application needs."}),"\n",(0,s.jsx)(n.p,{children:"Lastly, the EIP-712 standard mostly considers messages targeted at a single smart contract. Some use-cases, however, benefit from allowing the user to provide access to multiple contracts concurrently. For example, consider a DeX (decentralized exchange). Allowing such an app to be able to display the balances of all the user's different tokens would be a UX challenge if the user had to approve each one individually.   "}),"\n",(0,s.jsx)(n.h3,{id:"standardization",children:"Standardization"}),"\n",(0,s.jsx)(n.p,{children:"While we recommend and provide Permits as a basic access control mechanism, we do not enforce any particular standard for them.\nWe feel that as the ecosystem evolves, different standards will emerge and we do not want to limit the ecosystem by enforcing a particular standard at this stage."}),"\n",(0,s.jsx)(n.p,{children:"In other words, if you think there is a better way to do it, feel free to do so!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);