"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7499],{42:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var r=n(4848),l=n(8453);const s={sidebar_position:100,title:"\ud83e\uddd1\u200d\u2695\ufe0f Types and Operations",description:"List of supported types and different operations"},i="Supported Types and Operations",d={id:"devdocs/Writing Smart Contracts/Types-and-Operators",title:"\ud83e\uddd1\u200d\u2695\ufe0f Types and Operations",description:"List of supported types and different operations",source:"@site/docs/devdocs/Writing Smart Contracts/Types-and-Operators.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Types-and-Operators",permalink:"/docs/nitrogen/devdocs/Writing Smart Contracts/Types-and-Operators",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Types-and-Operators.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"\ud83e\uddd1\u200d\u2695\ufe0f Types and Operations",description:"List of supported types and different operations"},sidebar:"docsSidebar",previous:{title:"\ud83c\udfb2 Randomness",permalink:"/docs/nitrogen/devdocs/Writing Smart Contracts/Randomness"},next:{title:"\ud83d\udee1\ufe0f Security Zones",permalink:"/docs/nitrogen/devdocs/Writing Smart Contracts/Security-Zones"}},c={},x=[{value:"Types",id:"types",level:2},{value:"Operations",id:"operations",level:2},{value:"Using Direct Function Calls",id:"using-direct-function-calls",level:3},{value:"Using Library Bindings",id:"using-library-bindings",level:3},{value:"Utilizing Operator Overloading",id:"utilizing-operator-overloading",level:3},{value:"Comparisons",id:"comparisons",level:2},{value:"Supported Operations",id:"supported-operations",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"supported-types-and-operations",children:"Supported Types and Operations"}),"\n",(0,r.jsx)(t.p,{children:"The library exposes utility functions for FHE operations. The goal of the library is to provide a seamless developer experience for writing smart contracts that can operate on confidential data."}),"\n",(0,r.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.p,{children:"The library provides a type system that is checked both at compile time and at run time. The structure and operations related to these types are described in this sections."}),"\n",(0,r.jsxs)(t.p,{children:["We currently support encrypted integers of bit length up to 256 bits and special types such as ",(0,r.jsx)(t.code,{children:"ebool"})," and ",(0,r.jsx)(t.code,{children:"eaddress"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['The encrypted integers behave as much as possible as Solidity\'s integer types. However, behavior such as "revert on overflow" is not supported as this would leak some information of the encrypted integers. Therefore, arithmetic on ',(0,r.jsx)(t.code,{children:"euint"})," types is ",(0,r.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic",children:"unchecked"}),", i.e. there is wrap-around on overlow."]}),"\n",(0,r.jsxs)(t.p,{children:["In the back-end, encrypted integers are FHE ciphertexts. The library abstracts away the ciphertexts and presents pointers to ciphertexts, or ciphertext handles, to the smart contract developer. The ",(0,r.jsx)(t.code,{children:"euint"}),", ",(0,r.jsx)(t.code,{children:"ebool"})," and ",(0,r.jsx)(t.code,{children:"eaddress"})," types are ",(0,r.jsx)(t.em,{children:"wrappers"})," over these handles."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("th",{colspan:"2",children:" Supported types "})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"name"}),(0,r.jsx)(t.th,{children:"Bit Size"}),(0,r.jsx)(t.th,{children:"Usage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint8"})}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint16"})}),(0,r.jsx)(t.td,{children:"16"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint32"})}),(0,r.jsx)(t.td,{children:"32"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint64"})}),(0,r.jsx)(t.td,{children:"64"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint128"})}),(0,r.jsx)(t.td,{children:"128"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"euint256"})}),(0,r.jsx)(t.td,{children:"256"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ebool"})}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"Compute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"eaddress"})}),(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"Compute"})]})]})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"name"}),(0,r.jsx)(t.th,{children:"Bit Size"}),(0,r.jsx)(t.th,{children:"Usage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint8"})}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint16"})}),(0,r.jsx)(t.td,{children:"16"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint32"})}),(0,r.jsx)(t.td,{children:"32"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint64"})}),(0,r.jsx)(t.td,{children:"64"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint128"})}),(0,r.jsx)(t.td,{children:"128"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEuint256"})}),(0,r.jsx)(t.td,{children:"256"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEbool"})}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"Input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inEaddress"})}),(0,r.jsx)(t.td,{children:"160"}),(0,r.jsx)(t.td,{children:"Input"})]})]})]})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"operations",children:"Operations"}),"\n",(0,r.jsx)(t.p,{children:"There are three ways to perform operations with FHE.sol:"}),"\n",(0,r.jsx)(t.h3,{id:"using-direct-function-calls",children:"Using Direct Function Calls"}),"\n",(0,r.jsx)(t.p,{children:"Direct function calls are the most straightforward way to perform operations with FHE.sol. For example, if you want to add two encrypted 8-bit integers (euint8), you can do so as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"euint8 result = FHE.add(lhs, rhs);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Here, lhs and rhs are your euint8 variables, and result will store the outcome of the addition."}),"\n",(0,r.jsx)(t.h3,{id:"using-library-bindings",children:"Using Library Bindings"}),"\n",(0,r.jsx)(t.p,{children:"FHE.sol also provides library bindings, allowing for a more natural syntax. To use this, you first need to include the library for your specific data type. For euint8, the usage would look like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"euint8 result = lhs.add(rhs);\n"})}),"\n",(0,r.jsx)(t.p,{children:"In this example, lhs.add(rhs) performs the addition, using the library function implicitly."}),"\n",(0,r.jsx)(t.h3,{id:"utilizing-operator-overloading",children:"Utilizing Operator Overloading"}),"\n",(0,r.jsxs)(t.p,{children:["For an even more intuitive approach, FHE.sol supports operator overloading. This means you can use standard arithmetic operators like ",(0,r.jsx)(t.code,{children:"+"}),", ",(0,r.jsx)(t.code,{children:"-"}),", ",(0,r.jsx)(t.code,{children:"*"}),", etc., directly on encrypted types. Here's how you can use it for adding two ",(0,r.jsx)(t.code,{children:"euint8"})," values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"euint8 result = lhs + rhs;\n"})}),"\n",(0,r.jsx)(t.p,{children:"With operator overloading, lhs + rhs performs the addition seamlessly."}),"\n",(0,r.jsx)(t.h2,{id:"comparisons",children:"Comparisons"}),"\n",(0,r.jsxs)(t.p,{children:["Unlike other operations in FHE.sol, comparison operations do not support their respective operators (e.g. ",(0,r.jsx)(t.code,{children:">"}),", ",(0,r.jsx)(t.code,{children:"<"})," etc.).\nThis is because solidity expects these operators to return a boolean value, which is not possible with FHE.\nIntuitively, this is because returning a boolean value would leak information about the encrypted data."]}),"\n",(0,r.jsxs)(t.p,{children:["Instead, comparison operations are implemented as functions that return an ",(0,r.jsx)(t.code,{children:"ebool"})," type."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ebool"})," type is not a real boolean type. It is implemented as a ",(0,r.jsx)(t.code,{children:"euint8"})]})}),"\n",(0,r.jsx)(t.h2,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["A documentation of every function in FHE.sol (including inputs and outputs) can be found in ",(0,r.jsx)(t.a,{href:"/docs/nitrogen/devdocs/Solidity%20API/FHE",children:"FHE.sol"})]})}),"\n",(0,r.jsx)(t.p,{children:"All operations supported by FHE.sol are listed in the table below. For performance reasons, not all operations are supported for all types."}),"\n",(0,r.jsx)(t.p,{children:"Please refer to the table below for a comprehensive list of supported operations. This list will evolve as the network matures."}),"\n",(0,r.jsx)(t.p,{children:"Note that all functions are supported in both direct function calls and library bindings. However, operator overloading is only supported for the operations listed in the table (solidity please support operator overloading for boolean return types!)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"FHE.sol function"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Operator"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint8"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint16"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint32"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint64"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint128"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"euint256"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"ebool"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"eaddress"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Addition"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"add"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"+"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subtraction"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sub"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Multiplication"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mul"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"*"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bitwise And"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"and"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"&"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bitwise Or"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"or"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"|"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bitwise Xor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"xor"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"^"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Division"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"div"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"/"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Remainder"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"rem"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"%"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Square"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"square"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift Right"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"shr"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shift Left"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"shl"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rotate Right"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ror"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rotate Left"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"rol"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Equal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"eq"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Not equal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ne"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Greater than or equal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gte"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Greater than"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gt"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Less than or equal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lte"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Less than"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lt"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Min"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"min"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Max"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"max"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Not"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"not"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("r",{children:"\u2718"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Select"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"select"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Require"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"req"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Decrypt"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"decrypt"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Seal Output"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sealOutput"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"n/a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("g",{children:"\u2714"})})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Caveat",type:"danger",children:(0,r.jsxs)(t.p,{children:["At the moment it is not possible to do ",(0,r.jsx)(t.code,{children:"ebool result = (lhs == rhs)"})," and others that return a boolean result. This is because FHE.sol expects a ",(0,r.jsx)(t.code,{children:"ebool"}),", while Solidity only allows overloading to return a regular boolean.\nInstead, we recommend ",(0,r.jsx)(t.code,{children:"ebool result = lhs.eq(rhs)"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["Using require and decrypt in a TX is dangerous as it can break the confidentiality of the data. Please refer to ",(0,r.jsx)(t.a,{href:"/docs/nitrogen/devdocs/Writing%20Smart%20Contracts/Useful-Tips",children:"Useful-Tips"})," to read some more"]})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Division and Remainder by ",(0,r.jsx)(t.code,{children:"0"})," will output with an encrypted representation of the maximal value of the uint that is used (Ex. encrypted 255 for euint8)"]})})]})}function j(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const l={},s=r.createContext(l);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);