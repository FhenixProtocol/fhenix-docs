"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[6947],{6459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var i=t(5893),r=t(1151);const c={sidebar_position:2},o="Encryption",s={id:"devdocs/FhenixJS/Encryption",title:"Encryption",description:"fhenix.js provides an easy-to-use function to encrypt your inputs before sending them to the Fhenix blockchain.",source:"@site/docs/devdocs/FhenixJS/Encryption.md",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Encryption",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Encryption.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Installation & Basics",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Fhenix-JS"},next:{title:"(Un)Sealing",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Decryption"}},d={},p=[];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"encryption",children:"Encryption"}),"\n",(0,i.jsx)(n.p,{children:"fhenix.js provides an easy-to-use function to encrypt your inputs before sending them to the Fhenix blockchain."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Encryption in Fhenix is done using the global chain key. This key is loaded when you create a fhenix.js client automatically"})}),"\n",(0,i.jsxs)(n.p,{children:["When we perform encryption, we specify the type of ",(0,i.jsx)(n.code,{children:"euint"})," (Encrypted Integer) we want to create. This should match the expected type in the Solidity contract we are working with."]}),"\n",(0,i.jsx)(n.p,{children:"First, initialize the library -"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:"import { FhenixClient } from 'fhenixjs';\nimport { BrowserProvider } from \"ethers\";\n\nconst provider = new BrowserProvider(window.ethereum);\n\nconst client = new FhenixClient({provider});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, you can use the created client to encrypt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:"\nimport { FhenixClient, EncryptedType, EncryptedUint8 } from 'fhenixjs';\n\nconst result: EncryptedUint8 = await client.encrypt(number, EncryptionTypes.uint8);\nconst result: EncryptedUint16 = await client.encrypt(number, EncryptionTypes.uint16);\nconst result: EncryptedUint32 = await client.encrypt(number, EncryptionTypes.uint32);\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or, we can use the lower-level type specific functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const resultUint8 = await client.encrypt_uint8(number);\nconst resultUint16 = await client.encrypt_uint16(number);\nconst resultUint32 = await client.encrypt_uint32(number);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The returned types from the encrypt function will be of the type ",(0,i.jsx)(n.code,{children:"EncryptedUint8"}),", ",(0,i.jsx)(n.code,{children:"EncryptedUint16"})," or ",(0,i.jsx)(n.code,{children:"EncryptedUint32"})," depending on the type you specified."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EncryptedUint"})," type sound scary, but are actually pretty simple. It's just a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface EncryptedNumber {\n  data: Uint8Array;\n}\n\nexport interface EncryptedUint8 extends EncryptedNumber {}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These types exist in order to enable type checking when interacting with Solidity contracts, and to make it easier to work with encrypted data.\nHowever, feel free to use the ",(0,i.jsx)(n.code,{children:"data"})," field directly if you prefer."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);