"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3215],{3551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(4848),o=t(8453);const r={sidebar_position:3,title:"\ud83c\udd95 Changelog"},s=void 0,d={id:"devdocs/Fhenix Testnet/Details/Changelog",title:"\ud83c\udd95 Changelog",description:"Here you can find a list of changes between different versions of the Fhenix Testnet(s) as we evolve and grow.",source:"@site/docs/devdocs/Fhenix Testnet/Details/Changelog.md",sourceDirName:"devdocs/Fhenix Testnet/Details",slug:"/devdocs/Fhenix Testnet/Details/Changelog",permalink:"/docs/devdocs/Fhenix Testnet/Details/Changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Fhenix Testnet/Details/Changelog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83c\udd95 Changelog"},sidebar:"docsSidebar",previous:{title:"\ud83d\udcd0 Fhenix Architecture",permalink:"/docs/devdocs/Fhenix Testnet/Details/Architecture"},next:{title:"\ud83d\uded1 Limitations",permalink:"/docs/devdocs/Fhenix Testnet/Details/Limitations"}},l={},a=[{value:"Nitrogen",id:"nitrogen",level:3},{value:"Helium",id:"helium",level:3},{value:"Frontier",id:"frontier",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here you can find a list of changes between different versions of the Fhenix Testnet(s) as we evolve and grow."}),"\n",(0,i.jsx)(n.h3,{id:"nitrogen",children:"Nitrogen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed casts between eaddress and different euints"}),"\n",(0,i.jsx)(n.li,{children:"Introduced Security zones"}),"\n",(0,i.jsx)(n.li,{children:"Introduced Threshold Network as default for security zone 0"}),"\n",(0,i.jsx)(n.li,{children:"Introduced Parallel decryptions"}),"\n",(0,i.jsx)(n.li,{children:"Introduced new precompiles for operations with encrypted uints: random, rotate right, rotate left, square"}),"\n",(0,i.jsx)(n.li,{children:"General bug fixes and stability improvements"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"helium",children:"Helium"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"eaddress"})," as a native type that can be found in FHE.sol directly"]}),"\n",(0,i.jsxs)(n.li,{children:["Added support for large integer sizes: ",(0,i.jsx)(n.code,{children:"euint64"}),", ",(0,i.jsx)(n.code,{children:"euint128"}),", ",(0,i.jsx)(n.code,{children:"euint256"}),". Not all operations are supported for each type\nat this time. See ",(0,i.jsx)(n.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Types-and-Operators",children:"Types and Operators"})," for more information."]}),"\n",(0,i.jsx)(n.li,{children:"Added support for solidity compiler version 0.8.25 and up"}),"\n",(0,i.jsx)(n.li,{children:"Performance has been greatly increased for all data types"}),"\n",(0,i.jsx)(n.li,{children:"Performance has been greatly increased for select operations"}),"\n",(0,i.jsx)(n.li,{children:"All client-side libraries and toolkits have been upgraded and will require an update to version 0.2 to work with Helium - FhenixJS, Remix plugin & hardhat plugins."}),"\n",(0,i.jsxs)(n.li,{children:["Refactored gas prices for FHE operations to better reflect the operational cost of the operation. See ",(0,i.jsx)(n.a,{href:"/docs/devdocs/Writing%20Smart%20Contracts/Gas-and-Benchmarks",children:"Gas and Benchmarks"})," for more information."]}),"\n",(0,i.jsx)(n.li,{children:"Blocks are now posted to the Sepolia Testnet with support for EIP-4844 blobs."}),"\n",(0,i.jsx)(n.li,{children:"Refactored gas cost for transaction data to be more in line with Ethereum."}),"\n",(0,i.jsxs)(n.li,{children:["LocalFhenix - Added support for ",(0,i.jsx)(n.code,{children:"Console.log"})," functionality to allow debug logs during contract execution."]}),"\n",(0,i.jsx)(n.li,{children:"Many bug fixes and other improvements."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"frontier",children:"Frontier"}),"\n",(0,i.jsx)(n.p,{children:"Initial limited release!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);