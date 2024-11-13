"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[6297],{2030:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=a(4848),r=a(8453);const s={},c="\ud83d\udd0e Encrypted Variables - Preventing Exposure",i={id:"devdocs/Encryption and Privacy/Exposed-Encrypted-Variables",title:"\ud83d\udd0e Encrypted Variables - Preventing Exposure",description:"Ensuring that encrypted data and variables are not leaked is important when working with Fhenix. A common oversight when working with encrypted variables is revealing them to other contracts. Lets take a look at a scenario that leaks encrypted data:",source:"@site/docs/devdocs/Encryption and Privacy/Exposed-Encrypted-Variables.md",sourceDirName:"devdocs/Encryption and Privacy",slug:"/devdocs/Encryption and Privacy/Exposed-Encrypted-Variables",permalink:"/docs/nitrogen/devdocs/Encryption and Privacy/Exposed-Encrypted-Variables",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Encryption and Privacy/Exposed-Encrypted-Variables.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Examples & fheDapps",permalink:"/docs/nitrogen/devdocs/Examples and References/Examples-fheDapps"},next:{title:"\ud83d\udcdc Permits & Access Control",permalink:"/docs/nitrogen/devdocs/Encryption and Privacy/Permits-Access-Control"}},o={},d=[{value:"Hardhat Task",id:"hardhat-task",level:3},{value:"Task Example",id:"task-example",level:4},{value:"Output",id:"output",level:4},{value:"Manual Task Execution",id:"manual-task-execution",level:4}];function l(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-encrypted-variables---preventing-exposure",children:"\ud83d\udd0e Encrypted Variables - Preventing Exposure"}),"\n",(0,t.jsx)(n.p,{children:"Ensuring that encrypted data and variables are not leaked is important when working with Fhenix. A common oversight when working with encrypted variables is revealing them to other contracts. Lets take a look at a scenario that leaks encrypted data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"contract UserBalanceVulnerable {\n  mapping(address => euint64) public eUserBalances;\n\n  function addBalance(inEuint64 calldata _inBalance) public {\n    eUserBalances[msg.sender] = eUserBalances[msg.sender].add(\n      FHE.asEuint64(_inBalance)\n    );\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This seems secure enough and no decrypted data is directly exposed, however the ",(0,t.jsx)(n.code,{children:"public"})," access to ",(0,t.jsx)(n.code,{children:"eUserBalances"})," leaks sensitive data. A malicious contract is able to fetch this data and then decrypt it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"contract UserBalanceAttack {\n  address private vulnerableContract;\n\n  function revealUserBalance(address _user) public view returns (uint64) {\n    return UserBalanceVulnerable(vulnerableContract)\n      .eUserBalances(_user)\n      .decrypt();\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All contracts on the Fhenix network share an encryption key, therefore an encrypted variable in ",(0,t.jsx)(n.code,{children:"ContractA"})," could be decrypted in ",(0,t.jsx)(n.code,{children:"ContractB"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This is not inherently wrong, and many operations will require encrypted variables to be shared between contracts, but care must be taken to prevent open access to encrypted variables."}),"\n",(0,t.jsx)(n.h3,{id:"hardhat-task",children:"Hardhat Task"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fhenix-hardhat-plugin"})," package contains a task that checks your contracts for any exposed encrypted variables. This task is run automatically when your contracts are compiled, but can also be run manually."]}),"\n",(0,t.jsx)(n.h4,{id:"task-example",children:"Task Example"}),"\n",(0,t.jsx)(n.p,{children:"The following contract exposes encrypted variables in 3 ways."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:'pragma solidity >=0.8.13 <0.9.0;\n\nimport "@fhenixprotocol/contracts/FHE.sol";\n\ncontract ContractWithExposedVariables {\n  // Example 1\n  mapping(address => euint8) public eUserBalances;\n\n  // Example 2\n  mapping(address => euint8) private _eUserBalances;\n  function getUserBalance(address _user) public view returns (euint8) {\n    return _eUserBalances[_user];\n  }\n\n  // Example 3\n  struct Player {\n    address player;\n    euint8[] eCards;\n    uint256 chips;\n    uint256 bet;\n  }\n  struct Dealer {\n    uint256 pot;\n    euint8[] eFlopCards;\n  }\n  struct HoldEmGameState {\n    Player[] players;\n    Dealer dealer;\n  }\n\n  HoldEmGameState private gameState;\n  // Encrypted card values is the Player and Dealer structs are leaked and can be exploited\n  function getGameState() public view returns (HoldEmGameState memory) {\n    return gameState;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,t.jsxs)(n.p,{children:["Below is the output of the task when analyzing the above ",(0,t.jsx)(n.code,{children:"ContractWithExposedVariables.sol"})]}),"\n",(0,t.jsxs)("pre",{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsxs)("b",{children:["fhenix-hardhat-plugin",":CheckExposedEncryptedVars"]})," checking for exposed encrypted variables...."]}),(0,t.jsxs)("b",{style:{color:"orangered"},children:["contracts/ContractWithExposedVariables.sol",":ContractWithExposedVariables"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("b",{children:"eUserBalances(address)"})," exposes 1 encrypted variables:\npos-0 - ",(0,t.jsx)("b",{style:{color:"orangered"},children:"euint8"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("b",{children:"getUserBalance(address)"})," exposes 1 encrypted variables:\npos-0 - ",(0,t.jsx)("b",{style:{color:"orangered"},children:"euint8"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("b",{children:"getGameState()"})," exposes 1 encrypted variables:\npos-0 - struct ContractWithExposedVariables.HoldEmGameState\nplayers - struct ContractWithExposedVariables.Player[]\neCards - ",(0,t.jsx)("b",{style:{color:"orangered"},children:"euint8[]"}),"\ndealer - struct ContractWithExposedVariables.Dealer\neFlopCards - ",(0,t.jsx)("b",{style:{color:"orangered"},children:"euint8[]"})]})]}),"\n",(0,t.jsx)(n.h4,{id:"manual-task-execution",children:"Manual Task Execution"}),"\n",(0,t.jsx)(n.p,{children:"The task can be run manually with the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx hardhat task:fhenix:checkExposedEncryptedVars\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or as a part of a hardhat compilation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx hardhat compile\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var t=a(6540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);