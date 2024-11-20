"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[1302],{9227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const r={sidebar_position:200,title:"\ud83d\udee1\ufe0f Security Zones"},s=void 0,a={id:"devdocs/Writing Smart Contracts/Security-Zones",title:"\ud83d\udee1\ufe0f Security Zones",description:"Why we need Security Zones",source:"@site/docs/devdocs/Writing Smart Contracts/Security-Zones.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Security-Zones",permalink:"/docs/devdocs/Writing Smart Contracts/Security-Zones",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Security-Zones.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200,title:"\ud83d\udee1\ufe0f Security Zones"},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\u2695\ufe0f Types and Operations",permalink:"/docs/devdocs/Writing Smart Contracts/Types-and-Operators"},next:{title:"\ud83d\udd00 Parallel Decryptions",permalink:"/docs/devdocs/Writing Smart Contracts/Parallel-Decryptions"}},c={},l=[{value:"Why we need Security Zones",id:"why-we-need-security-zones",level:2},{value:"What are Security Zones",id:"what-are-security-zones",level:2},{value:"Security Zone in Nitrogen",id:"security-zone-in-nitrogen",level:2},{value:"Threshold Network (zone 0 - default)",id:"threshold-network-zone-0---default",level:3},{value:"Local (zone 1)",id:"local-zone-1",level:3},{value:"Code Example",id:"code-example",level:2},{value:"When can I specify a Security Zone?",id:"when-can-i-specify-a-security-zone",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"why-we-need-security-zones",children:"Why we need Security Zones"}),"\n",(0,i.jsx)(n.p,{children:"In various use cases, scenarios, and applications, different levels of security, trust, and performance may be required. However, it is preferable to have everything operate within a single blockchain, as deploying across multiple networks (blockchains) is cumbersome and has its own unique challenges, such as bridging, coordination and more. Furthermore, different parts of a single application may require unique combinations of various configurations. Settling on a single configuration would typically compromise overall security and performance\u2014leaving the application only as secure as its weakest or as fast as its slowest component."}),"\n",(0,i.jsx)(n.h2,{id:"what-are-security-zones",children:"What are Security Zones"}),"\n",(0,i.jsx)(n.p,{children:"Fhenix developed Security Zones to address this problem. With Fhenix, multiple encryption key sets (i.e., Security Zones) can coexist on a single network. Previously, we were limited to optimizing a single cryptographic key set to meet average security and performance needs. Now, with multiple Security Zones, Fhenix can tailor encryption configurations to specific use cases, eliminating the need to compromise on security, performance, or trust."}),"\n",(0,i.jsx)(n.p,{children:"For example, highly sensitive information can be protected with maximum security guarantees by using a Threshold Network for encryption. For less sensitive data, a local key set controlled by the sequencer may suffice, offering better performance with slightly lower but acceptable trust assumptions. Similarly, some applications may prefer an encryption scheme that specializes in small ciphertext sizes but slower computation, while apps may need to optimize for transaction price above everything else. Security zones will allow having different schemes with different configurations, all under one roof (or rather, one network - Fhenix)."}),"\n",(0,i.jsx)(n.admonition,{title:"Important Dev Hint",type:"warning",children:(0,i.jsxs)(n.p,{children:["An important nuance of Security Zones is that two ciphertexts that are encrypted using two different security zones are not compatible, since every Zone represents a different set of ",(0,i.jsx)(n.strong,{children:"FHE keys"}),". For example, we cannot compute enc(a) + enc(b), where a and b were encrypted using different Zones."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"info",children:(0,i.jsx)(n.p,{children:"Currently, creating new Security Zones is not dynamically supported, which means that users cannot implement this feature on their own. Rather, they must choose between the existing, pre-generated Security Zones available with Nitrogen on launch. However, we may add a dynamic Security Zones feature in the future."})}),"\n",(0,i.jsx)(n.h2,{id:"security-zone-in-nitrogen",children:"Security Zone in Nitrogen"}),"\n",(0,i.jsx)(n.p,{children:"In Nitrogen, we introduce two Security Zones to demonstrate the concept:"}),"\n",(0,i.jsx)(n.h3,{id:"threshold-network-zone-0---default",children:"Threshold Network (zone 0 - default)"}),"\n",(0,i.jsxs)(n.p,{children:["This zone uses a Threshold Network. The benefit of this approach is that it provides the end user with additional protection from malicious actors. For further reading on the Threshold network, ",(0,i.jsx)(n.a,{href:"/docs/devdocs/Fhenix%20Testnet/Threshold-Network",children:"see here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"local-zone-1",children:"Local (zone 1)"}),"\n",(0,i.jsx)(n.p,{children:"This zone uses a local key set held by the sequencer (this is how previous Fhenix testnets handled the decryption key). The intention of this zone is to offer faster decryption but require more trust from the user with the tradeoff of assuming a trusted sequencer."}),"\n",(0,i.jsx)(n.admonition,{title:"Dev Hint",type:"info",children:(0,i.jsx)(n.p,{children:"Whether you are porting a contract from a previous Fhenix version, or creating a new one - you don't have to do anything in particular to use the Threshold Network. Security Zone 0 is the default one - meaning that you don't need to modify your code to use it! See the code example below \ud83d\udc47"})}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sol",metastring:'title="Contract.sol"',children:"function addSecZone0(n1 inEuint32, n2 inEuint32) {\n    euint32 first = FHE.asEuint32(n1); // This implicitly uses Security Zone 0\n    euint32 second = FHE.asEuint32(n2, 0); // This also uses Security Zone 0\n\n    euint32 result = first + second; // `result` will be marked 'security zone 0' automatically\n}\n\nfunction addSecZone1(n1 inEuint32, n2 inEuint32) {\n    euint32 first = FHE.asEuint32(n1, 1); // To use a non-default SZ, you have to be explicit\n    euint32 second = FHE.asEuint32(n2, 1);\n\n    euint32 result = first + second; // `result` will be marked 'security zone 1' automatically\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"const client = new FhenixClient({ provider });\n\nlet first = await client.encrypt_uint32(5); // This implicitly uses Security Zone 0\nlet second = await client.encrypt_uint32(1332, 0); // This implicitly uses Security Zone 0\nawait contract.addSecZone0(first, second);\n\nfirst = await client.encrypt_uint32(5, 1); // To use a non-default SZ, you have to be explicit\necond = await client.encrypt_uint32(1332, 1);\nawait contract.addSecZone1(first, second);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"when-can-i-specify-a-security-zone",children:"When can I specify a Security Zone?"}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"Solidity"}),", you will notice that you can specify a Security Zone only when calling functions that are creating ",(0,i.jsx)(n.code,{children:"eunitX"})," types, meaning in ",(0,i.jsx)(n.code,{children:"FHE.asEuintX()"})," functions. This is because the ",(0,i.jsx)(n.code,{children:"euintX"})," types include metadata about the Security Zone that the ciphertext was encrypted with."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"fhenix.js"}),", you can specify a Security Zone only in the ",(0,i.jsx)(n.code,{children:"encrypt()"})," functions because you need to encrypt the data with the desired Security Zone's public key."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"info",children:(0,i.jsx)(n.p,{children:"The current security zones are implemented to demonstrate the concept with tradeoffs between security and performance. However, they are not indicative of a production deployment."})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);