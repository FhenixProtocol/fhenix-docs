"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3046],{5652:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(4848),o=i(8453);const s={},r=void 0,l={id:"devdocs/Writing Smart Contracts/Debug-Logging",title:"Debug-Logging",description:"Console.log in Fhenix's Localfhenix Environment",source:"@site/docs/devdocs/Writing Smart Contracts/Debug-Logging.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Debug-Logging",permalink:"/docs/devdocs/Writing Smart Contracts/Debug-Logging",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Debug-Logging.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udcaf Useful Tips",permalink:"/docs/devdocs/Writing Smart Contracts/Useful-Tips"},next:{title:"\ud83d\udd25 Gas and Benchmarks",permalink:"/docs/devdocs/Writing Smart Contracts/Gas-and-Benchmarks"}},c={},a=[{value:"Console.log in Fhenix&#39;s Localfhenix Environment",id:"consolelog-in-fhenixs-localfhenix-environment",level:3},{value:"Public Functions",id:"public-functions",level:4},{value:"Usage Examples",id:"usage-examples",level:4},{value:"Usefulness in Encrypted Number Handling",id:"usefulness-in-encrypted-number-handling",level:3},{value:"Viewing Logs in the Localfhenix Docker Container",id:"viewing-logs-in-the-localfhenix-docker-container",level:3}];function d(n){const e={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"consolelog-in-fhenixs-localfhenix-environment",children:"Console.log in Fhenix's Localfhenix Environment"}),"\n",(0,t.jsxs)(e.p,{children:["In Fhenix's Localfhenix environment, the ",(0,t.jsx)(e.code,{children:"console.log"})," function and its variants serve as essential debugging tools for Solidity developers. These logs are directed to the Docker log output, aiding in monitoring and troubleshooting smart contract execution in real-time."]}),"\n",(0,t.jsx)(e.h4,{id:"public-functions",children:"Public Functions"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"Console"})," library provides two primary public logging functions:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"log(int256 p0)"}),": Logs an integer value."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"logBytes(bytes memory p0)"}),": Logs a byte array."]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsx)(e.p,{children:"Here is how you can use these logging functions in your smart contracts:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Logging an Integer:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-solidity",children:'import "./Console.sol";\n\ncontract ExampleContract {\n    function logIntExample() public pure {\n        Console.log(123);  // Logs: "123"\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Logging a Byte Array:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-solidity",children:'import "./Console.sol";\n\ncontract ExampleContract {\n    function logBytesExample() public pure {\n        bytes memory data = "Hello, Fhenix!";\n        Console.logBytes(data);  // Logs: "Hello, Fhenix!"\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"usefulness-in-encrypted-number-handling",children:"Usefulness in Encrypted Number Handling"}),"\n",(0,t.jsxs)(e.p,{children:["When working with encrypted numbers in smart contracts, having robust logging mechanisms is indispensable. Encrypted computations can be complex and opaque, making it difficult to trace issues or verify the correctness of computations. Here's how the logging functions provided by the ",(0,t.jsx)(e.code,{children:"Console"})," library can be particularly useful:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Transparency and Debugging:"}),"\nEncrypted numbers typically undergo various transformations and operations. Logging these values at different stages helps verify that transformations are accurate and that no data corruption occurs. For instance, if an encrypted number is not decrypting correctly, logs can help trace back to the point where an issue might have arisen."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Validation:"}),"\nSmart contracts that operate with encryption often involve sensitive data and critical operations. Logging intermediate values ensures that all operations are performed correctly, and their outcomes match expected results, providing an additional layer of validation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Here's an example demonstrating how logging might be used in the context of encrypted number operations:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-solidity",children:'import "@fhenixprotocol/contracts/util/debug/Console.sol";\nimport { FHE } from "@fhenixprotocol/contracts/FHE.sol";\n\ncontract EncryptedNumberContract {\n    using EncryptedNumberLibrary for EncryptedNumber;\n\n    function computeWithEncryptedNumbers(inEuint64 encryptedA, inEuint64 encryptedB) public {\n\n        // Perform some operations\n        euint64 result = FHE.asEuint64(encryptedA) + FHE.asEuint64(encryptedB);\n\n        // DEBUG: Log the intermediate result\n        uint256 debug_Result = FHE.decrypt(result);\n        // Log the result\n        Console.log(result);\n\n        // Perform more operations\n        euint64 finalResult = result * FHE.asEuint64(encryptedA);\n       \n        return finalResult;\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"By strategically placing logs, developers can gain insights into the operations and transformations performed on encrypted numbers, greatly simplifying debugging and ensuring the integrity of computations."}),"\n",(0,t.jsx)(e.h3,{id:"viewing-logs-in-the-localfhenix-docker-container",children:"Viewing Logs in the Localfhenix Docker Container"}),"\n",(0,t.jsx)(e.p,{children:"Logging in the Localfhenix environment is directed to the Docker log output. To view these logs, follow these steps:"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"Logging is not available on the Fhenix Testnet or Mainnet. It is only available in the Localfhenix development environment."})}),"\n",(0,t.jsx)(e.p,{children:"If you are running Localfhenix using the Hardhat plugin, you can view the logs by running the following command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:'docker logs localfhenix_hh_plugin | grep "<TODO>"\n'})}),"\n",(0,t.jsxs)(e.p,{children:["If you are running LocalFhenix using the Docker image directly, you must first identify the container name using the ",(0,t.jsx)(e.code,{children:"docker ps"})," command and then view the logs:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:'docker logs <container_name> | grep "<TODO>"\n'})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);