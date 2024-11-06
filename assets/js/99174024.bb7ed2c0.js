"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[1231],{2121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(4848),i=n(8453);const r={},s="\ud83d\udee0\ufe0f Foundry",a={id:"devdocs/Setting Up Your Environment/Foundry",title:"\ud83d\udee0\ufe0f Foundry",description:"This tool will allow you to simulate development on the Fhenix network including Solidity native testing.",source:"@site/versioned_docs/version-Helium/devdocs/Setting Up Your Environment/Foundry.md",sourceDirName:"devdocs/Setting Up Your Environment",slug:"/devdocs/Setting Up Your Environment/Foundry",permalink:"/docs/devdocs/Setting Up Your Environment/Foundry",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Setting Up Your Environment/Foundry.md",tags:[],version:"Helium",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u2601\ufe0f Gitpod",permalink:"/docs/devdocs/Setting Up Your Environment/Gitpod"},next:{title:"\ud83d\udc77 Hardhat",permalink:"/docs/devdocs/Setting Up Your Environment/Hardhat"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Features",id:"features",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Define a new Forge Test Contract",id:"define-a-new-forge-test-contract",level:4},{value:"Add support for FHE operations",id:"add-support-for-fhe-operations",level:4},{value:"Permissions",id:"permissions",level:2},{value:"Differences from Real FHE Operations",id:"differences-from-real-fhe-operations",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\ufe0f-foundry",children:"\ud83d\udee0\ufe0f Foundry"}),"\n",(0,o.jsx)(t.p,{children:"This tool will allow you to simulate development on the Fhenix network including Solidity native testing.\nThe tool uses Foundry Cheatcodes to represent the execution of our Fhenix native precompiles.\nPlease be aware that the operations performed by using this template only simulate the behavior of real FHE operations, and will probably not be a good representation of performance, gas, etc."}),"\n",(0,o.jsxs)(t.p,{children:["The code is pretty new, and may contain bugs or edge-cases that we have not tested, so your feedback is very important for us! If you have any issues, comments or requests please open an issue\nin the Fhenix Foundry Template ",(0,o.jsx)(t.a,{href:"https://github.com/FhenixProtocol/fhenix-foundry-template",children:"Repository"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.p,{children:["To create a new repository using our ",(0,o.jsx)(t.a,{href:"https://github.com/FhenixProtocol/fhenix-foundry-template",children:"Fhenix Foundry Template"}),", click the\n",(0,o.jsx)(t.a,{href:"https://github.com/fhenixprotocol/fhenix-foundry-template/generate",children:(0,o.jsx)(t.code,{children:"Use this template"})})," button.\nAlternatively, install the template manually as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ mkdir my-project\n$ cd my-project\n$ forge init --template fhenixprotocol/fhenix-foundry-template\n$ bun install # install Solhint, Prettier, and other Node.js deps\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If this is your first time using Foundry, refer to the\n",(0,o.jsx)(t.a,{href:"https://github.com/foundry-rs/foundry#installation",children:"installation"})," instructions for guidance."]}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Simulated FHE Operations: All FHE operations, including encryption, decryption, and encrypted data handling, are\nsimulated to replicate their behavior in a network environment. This approach facilitates seamless development and\ntesting without requiring a fully operational FHE network."}),"\n",(0,o.jsxs)(t.li,{children:["Permissions: The template includes utilities (",(0,o.jsx)(t.code,{children:"PermissionHelper.sol"}),") for creating permissions related to FHE\noperations. These utilities enable users to test and verify that contracts correctly implement access-controlled\nactions, such as viewing balances of encrypted tokens. For more about permissions, see ",(0,o.jsx)(t.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Permissions",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,o.jsx)(t.h4,{id:"define-a-new-forge-test-contract",children:"Define a new Forge Test Contract"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Start by importing ",(0,o.jsx)(t.code,{children:"Test"})," from ",(0,o.jsx)(t.code,{children:"forge-std"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Inherit the test contract."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Note that: Forge Std comes with a pre-instantiated ",(0,o.jsx)(t.a,{href:"https://book.getfoundry.sh/cheatcodes/",children:"cheatcodes"})," environment,\nwhich is accessible via the vm property. To view the logs in the terminal output, add the -vvv flag and use\n",(0,o.jsx)(t.a,{href:"https://book.getfoundry.sh/faq?highlight=console.log#how-do-i-use-consolelog",children:"console.log"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"add-support-for-fhe-operations",children:"Add support for FHE operations"}),"\n",(0,o.jsxs)(t.p,{children:["This template includes an example test contract ",(0,o.jsx)(t.a,{href:"https://github.com/FhenixProtocol/fhenix-foundry-template/blob/main/test/FHERC20.t.sol",children:"FHERC20.t.sol"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["For contracts utilizing FHE operations, insert FHE mock operations using the ",(0,o.jsx)(t.code,{children:"FheEnabled"})," contract. By inheriting the\n",(0,o.jsx)(t.code,{children:"FheEnabled"})," contract in the test contract, you gain access to FHE operations. The following code demonstrates this."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'import { FheEnabled } from "./util/FheHelper.sol";\n\ncontract MyTestContract is Test, FheEnabled {\n    // Your test contract code here\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["During test setup, ",(0,o.jsx)(t.code,{children:"initializeFhe"})," the FHE environment using the initializeFhe function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"function setUp() public {\n    initializeFhe();\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For a complete example, including mocked encryption, decryption, sealing and permission usage, refer to the example\n",(0,o.jsx)(t.strong,{children:"tests"})," provided in the tests directory of the repository."]}),"\n",(0,o.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"PermissionHelper"})," contract provides utilities for managing permissions related to FHE operations. These utilities\nenable users to test and verify that contracts correctly implement access-controlled actions, such as viewing balances\nof encrypted tokens."]}),"\n",(0,o.jsxs)(t.p,{children:["Consider using the following code as an example for a ",(0,o.jsx)(t.strong,{children:"PermissionHelper"})," contract in a test contract:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'import { Test } from "forge-std/src/Test.sol";\n\nimport { ContractWeAreTesting } from "./src/ContractWeAreTesting.sol";\nimport { PermissionHelper } from "./util/PermissionHelper.sol";\n\ncontract MyContract is Test {\n    ContractWeAreTesting private contractToTest;\n    PermissionHelper private permitHelper;\n\n    function setUp() public {\n        // The contract we are testing must be deployed first\n        contractToTest = new ContractWeAreTesting();\n\n        // The PermissionHelper contract must be deployed with the address of the contract we are testing\n        // otherwise the permission generated will not match the address of the contract being tested\n        permitHelper = new PermissionHelper(address(contractToTest));\n    }\n\n    function testOnlyOwnerCanViewBalance() public {\n        // Owner key and address\n        uint256 ownerPrivateKey = 0xA11CE;\n        address owner = vm.addr(ownerPrivateKey);\n\n        // Generate a permission for the owner using the permitHelper and the private key\n        Permission memory permission = permitHelper.generatePermission(ownerPrivateKey);\n\n        // Call function with permission\n        uint256 result = permissions.someFunctionWithOnlyPermitted(owner, permission);\n    }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Note that the ",(0,o.jsx)(t.code,{children:"PermissionHelper"})," contract is initialized only after we know the address of the contract being tested.\nThe reason is that the permission generated by the ",(0,o.jsx)(t.code,{children:"PermissionHelper"})," contract is tied to the address of the contract\nthat is being tested."]}),"\n",(0,o.jsx)(t.h2,{id:"differences-from-real-fhe-operations",children:"Differences from Real FHE Operations"}),"\n",(0,o.jsx)(t.p,{children:"FHE operations in this template simulate the behavior of a real FHE network. Instead of processing encrypted data,\noperations are performed on plaintext data, which enables seamless development and testing without the need for a fully\noperational FHE network. However, there are important differences between these mocked FHE operations and actual FHE\noperations:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Gas Costs \u2013 Gas costs associated with the mocked FHE operations do not accurately reflect those of real FHE\noperations. Instead, they are based on gas costs of equivalent non-FHE operations."}),"\n",(0,o.jsx)(t.li,{children:"Security Zones \u2013 In this mocked environment, security zones are not enforced. Thus, any user can perform operations\nbetween ciphertexts, which would otherwise fail in a real FHE setting."}),"\n",(0,o.jsx)(t.li,{children:'Ciphertext Access \u2013 The mocked FHE operations do not enforce access control restrictions on ciphertexts, which allows\nany user to access any mocked "ciphertext." On a real network, such operations could fail.'}),"\n",(0,o.jsx)(t.li,{children:"Decrypts during Gas Estimations: When performing a decrypt (or other data revealing operations) during gas estimation\non the Helium testnet or Localfhenix, the operation returns a default value, as the gas estimation process does not\nhave access to the precise decrypted data. This can cause the transaction to fail at this stage, if the decrypted data\nis used in a way that would trigger a transaction revert (e.g., when a require statement depends on it)."}),"\n",(0,o.jsx)(t.li,{children:"Security \u2013 The security provided by the mocked FHE operations does not represent the high level of security offered by\nreal FHE operations. The mocked operations do not involve actual encryption or decryption."}),"\n",(0,o.jsx)(t.li,{children:"Performance \u2013 The performance of mocked FHE operations is not indicative of the real FHE operation speed. Mocked\noperations will be significantly faster due to their simplified nature."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);