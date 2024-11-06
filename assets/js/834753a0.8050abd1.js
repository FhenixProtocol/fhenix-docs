"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[2176],{7618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(4848),r=s(8453);const t={},d="Permissioned.Sol",o={id:"devdocs/Solidity API/Permissioned",title:"Permissioned.Sol",description:"Permission",source:"@site/versioned_docs/version-Helium/devdocs/Solidity API/Permissioned.md",sourceDirName:"devdocs/Solidity API",slug:"/devdocs/Solidity API/Permissioned",permalink:"/docs/devdocs/Solidity API/Permissioned",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Solidity API/Permissioned.md",tags:[],version:"Helium",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FHE.sol",permalink:"/docs/devdocs/Solidity API/FHE"},next:{title:"\ud83d\udd10 Fhenix Encryption UI",permalink:"/docs/devdocs/Tools and Utilities/Fhenix-Encryption-UI"}},c={},l=[{value:"Permission",id:"permission",level:3},{value:"SignerNotMessageSender",id:"signernotmessagesender",level:3},{value:"SignerNotOwner",id:"signernotowner",level:3},{value:"constructor",id:"constructor",level:3},{value:"onlySender",id:"onlysender",level:3},{value:"Parameters",id:"parameters",level:4},{value:"onlyPermitted",id:"onlypermitted",level:3},{value:"Parameters",id:"parameters-1",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"permissionedsol",children:"Permissioned.Sol"}),"\n",(0,i.jsx)(n.h3,{id:"permission",children:"Permission"}),"\n",(0,i.jsx)(n.p,{children:"Used to pass both the public key and signature data within transactions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Should be used with Signature-based modifiers for access control"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"struct Permission {\n  bytes32 publicKey;\n  bytes signature;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Abstract contract that provides EIP-712 based signature verification for access control. To learn more about why this can be important, and what EIP712 is, refer to our ",(0,i.jsx)(n.a,{href:"/docs/devdocs/Encryption%20and%20Privacy/Permits-Access-Control",children:"Permits & Access Control"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This contract should be inherited by other contracts to provide EIP-712 signature validated access control"})}),"\n",(0,i.jsx)(n.h3,{id:"signernotmessagesender",children:"SignerNotMessageSender"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"error SignerNotMessageSender()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Emitted when the signer is not the message sender"}),"\n",(0,i.jsx)(n.h3,{id:"signernotowner",children:"SignerNotOwner"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"error SignerNotOwner()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Emitted when the signer is not the specified owner"}),"\n",(0,i.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"constructor() internal\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Constructor that initializes EIP712 domain separator with a name and version\nsolhint-disable-next-line func-visibility, no-empty-blocks"})}),"\n",(0,i.jsx)(n.h3,{id:"onlysender",children:"onlySender"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"modifier onlySender(struct Permission permission)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by the message sender"}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"permission"}),(0,i.jsx)(n.td,{children:"struct Permission"}),(0,i.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"onlypermitted",children:"onlyPermitted"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"modifier onlyPermitted(struct Permission permission, address owner)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Modifier that requires the provided signature to be signed by a specific owner address"}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"permission"}),(0,i.jsx)(n.td,{children:"struct Permission"}),(0,i.jsx)(n.td,{children:"Data structure containing the public key and the signature to be verified"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"owner"}),(0,i.jsx)(n.td,{children:"address"}),(0,i.jsx)(n.td,{children:"The expected owner of the public key to match against the recovered signer"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);