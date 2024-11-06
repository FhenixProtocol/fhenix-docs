"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7336],{5196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(4848),o=t(8453);const s={},r="\ud83d\udd10 Fhenix Encryption UI",c={id:"devdocs/Tools and Utilities/Fhenix-Encryption-UI",title:"\ud83d\udd10 Fhenix Encryption UI",description:"Fhenix encryption UI can be found in the following link",source:"@site/docs/devdocs/Tools and Utilities/Fhenix-Encryption-UI.md",sourceDirName:"devdocs/Tools and Utilities",slug:"/devdocs/Tools and Utilities/Fhenix-Encryption-UI",permalink:"/docs/./devdocs/Tools and Utilities/Fhenix-Encryption-UI",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Tools and Utilities/Fhenix-Encryption-UI.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Permissioned.Sol",permalink:"/docs/./devdocs/Solidity API/Permissioned"},next:{title:"\ud83d\udc77 Fhenix Hardhat Plugin",permalink:"/docs/./devdocs/Tools and Utilities/Fhenix-Hardhat-Plugin"}},a={},l=[{value:"Encryption",id:"encryption",level:4},{value:"Unsealing",id:"unsealing",level:4},{value:"Permit Generation",id:"permit-generation",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-fhenix-encryption-ui",children:"\ud83d\udd10 Fhenix Encryption UI"}),"\n",(0,i.jsxs)(n.p,{children:["Fhenix encryption UI can be found in the following ",(0,i.jsx)(n.a,{href:"https://encrypt.fhenix.zone/",children:"link"}),"\nThis UI is useful for those who are not using remix or using remix without using the ",(0,i.jsx)(n.a,{href:"/docs/./devdocs/Tools%20and%20Utilities/Fhenix-Remix-Plugin",children:"plugin"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6199).A+"",width:"2065",height:"709"})}),"\n",(0,i.jsx)(n.h4,{id:"encryption",children:"Encryption"}),"\n",(0,i.jsx)(n.p,{children:'In order to encrypt a number you can simply write the number you want to encrypt instead of the "Enter a number" text.\nYou can choose what Euint* type you want as an output and eventually you can choose one of the two options:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Encrypt (Plain) - Will output hex encoded bytes (",(0,i.jsx)(n.code,{children:"0x04000..."}),') that can be used as "bytes calldata" input or as the input for the remix plugin']}),"\n",(0,i.jsxs)(n.li,{children:["Encrypt (InEuint) - Will output hex encoded bytes in square brackets (",(0,i.jsx)(n.code,{children:"[0x04000...]"}),") that can be used in remix (not with the plugin) for function that receive inEuint*"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All output will be copied to your clipboard and a notification will pop up telling you that the output was copied."}),"\n",(0,i.jsx)(n.h4,{id:"unsealing",children:"Unsealing"}),"\n",(0,i.jsx)(n.p,{children:'You can only unseal data that was sealed using your wallet public encryption key.\nIn order to get your wallets public encryption key you can click on "Get Public Key" that will use metamask in order to retrieve the key. The key will be shown as a notification on which you can click in order to copy the value to your clipboard.'}),"\n",(0,i.jsx)(n.p,{children:'Decryption can be done by simply pasting the encrypted value instead of the "Enter sealed value" text and clicking on the Unseal button which will use metamask to decrypt the value.'}),"\n",(0,i.jsx)(n.h4,{id:"permit-generation",children:"Permit Generation"}),"\n",(0,i.jsxs)(n.p,{children:["This tool can also be used to generate a permit for a contract. Enter a contract address, and click generate permit.\nThe permit will be generated and copied to your clipboard. You can save the permit to fhenix.js, or use the signature field to interact with contracts using the ",(0,i.jsx)(n.a,{href:"/docs/./devdocs/Writing%20Smart%20Contracts/Permissions",children:"Permission structure"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6199:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/encui-992c99d20e9600e679edfffe56a38768.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);