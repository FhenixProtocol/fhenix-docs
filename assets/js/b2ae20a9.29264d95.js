"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[8737],{9119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(4848),s=t(8453),i=t(1470),a=t(9365);const o={sidebar_position:1,description:"Installation of contracts and creation of a basic contract"},c="\ud83d\udc24 Getting Started",d={id:"devdocs/Writing Smart Contracts/FHE-sol",title:"\ud83d\udc24 Getting Started",description:"Installation of contracts and creation of a basic contract",source:"@site/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/FHE-sol.mdx",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/FHE-sol",permalink:"/docs/Helium/devdocs/Writing Smart Contracts/FHE-sol",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Writing Smart Contracts/FHE-sol.mdx",tags:[],version:"Helium",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Installation of contracts and creation of a basic contract"},sidebar:"docsSidebar",previous:{title:"FHE Contracts",permalink:"/docs/Helium/category/fhe-contracts"},next:{title:"\ud83d\udc49 Inputs",permalink:"/docs/Helium/devdocs/Writing Smart Contracts/User-Inputs"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Key Concepts and Types",id:"key-concepts-and-types",level:3},{value:"<code>euintxx</code> - Encrypted Unsigned Integers",id:"euintxx---encrypted-unsigned-integers",level:3},{value:"<code>ebool</code> - Encrypted Boolean",id:"ebool---encrypted-boolean",level:3},{value:"<code>eaddress</code> - Encrypted Address",id:"eaddress---encrypted-address",level:3},{value:"<code>inEuintxx</code> - Input Encrypted Unsigned Integers",id:"ineuintxx---input-encrypted-unsigned-integers",level:3},{value:"<code>inEbool</code> - Input Encrypted Boolean",id:"inebool---input-encrypted-boolean",level:3},{value:"<code>inEaddress</code> - Input Encrypted Address",id:"ineaddress---input-encrypted-address",level:3},{value:"Core Functions of FHE.sol",id:"core-functions-of-fhesol",level:2},{value:"<code>asEuint</code> - Convert to Encrypted Unsigned Integer",id:"aseuint---convert-to-encrypted-unsigned-integer",level:3},{value:"<code>asEbool</code> - Convert to Encrypted Unsigned Integer",id:"asebool---convert-to-encrypted-unsigned-integer",level:3},{value:"<code>asEaddress</code> - Convert to Encrypted Unsigned Integer",id:"aseaddress---convert-to-encrypted-unsigned-integer",level:3},{value:"<code>decrypt</code> - Decrypt Encrypted Data",id:"decrypt---decrypt-encrypted-data",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:3},{value:"Comparison Operations",id:"comparison-operations",level:3},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Encrypting a Value",id:"encrypting-a-value",level:3},{value:"Decrypting a Value",id:"decrypting-a-value",level:3},{value:"Performing Encrypted Arithmetic",id:"performing-encrypted-arithmetic",level:3},{value:"Conditional Logic with Encrypted Values",id:"conditional-logic-with-encrypted-values",level:3},{value:"Integrating FHE into Smart Contracts",id:"integrating-fhe-into-smart-contracts",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-getting-started",children:"\ud83d\udc24 Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["A core component of the Fhenix ecosystem is the ",(0,r.jsx)(n.code,{children:"FHE.sol"})," Solidity library."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"FHE.sol"})," is a Solidity library designed to facilitate the use of Fully Homomorphic Encryption (FHE) within Ethereum smart contracts. FHE enables computations to be performed on encrypted data (ciphertexts) without needing to decrypt them first. The results of such computations, when decrypted, are identical to what would have been obtained if the operations had been performed on the unencrypted data (plaintexts)."]}),"\n",(0,r.jsxs)(n.p,{children:["A full list and description of Fhenix functions is provided in ",(0,r.jsx)(n.a,{href:"/docs/Helium/devdocs/Solidity%20API/FHE",children:"FHE.sol documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["To get started with ",(0,r.jsx)(n.code,{children:"FHE.sol"}),", first install FHE.sol as a dependency in your Solidity project. Do this using npm, yarn or pnpm. Open the terminal and navigate to the project's directory. Now, run one of the following:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @fhenixprotocol/contracts;\n"})})}),(0,r.jsx)(a.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install @fhenixprotocol/contracts;\n"})})}),(0,r.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install @fhenixprotocol/contracts;\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"key-concepts-and-types",children:"Key Concepts and Types"}),"\n",(0,r.jsxs)(n.h3,{id:"euintxx---encrypted-unsigned-integers",children:[(0,r.jsx)(n.code,{children:"euintxx"})," - Encrypted Unsigned Integers"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Represents an encrypted unsigned integer. This type is used for encrypted variables within smart contracts.\nThe currently supported types are: ",(0,r.jsx)(n.code,{children:"euint8"}),", ",(0,r.jsx)(n.code,{children:"euint16"}),", ",(0,r.jsx)(n.code,{children:"euint32"}),", ",(0,r.jsx)(n.code,{children:"euint64"}),", ",(0,r.jsx)(n.code,{children:"euint128"})," & ",(0,r.jsx)(n.code,{children:"euint256"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Store and manipulate encrypted values within smart contracts."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ebool---encrypted-boolean",children:[(0,r.jsx)(n.code,{children:"ebool"})," - Encrypted Boolean"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Represents an encrypted boolean value. This type can be used as an encrypted variable and for encrypted logical\noperations upon other encrypted variables e.g. by using ",(0,r.jsx)(n.code,{children:"select"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Store and manipulate encrypted values within smart contracts. Use in encrypted conditional statements."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"eaddress---encrypted-address",children:[(0,r.jsx)(n.code,{children:"eaddress"})," - Encrypted Address"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Represents an encrypted address. This type can be used to hide the address variables within contracts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Store and compare encrypted addresses."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ineuintxx---input-encrypted-unsigned-integers",children:[(0,r.jsx)(n.code,{children:"inEuintxx"})," - Input Encrypted Unsigned Integers"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": A type used for passing encrypted values as function arguments. It's the format in which encrypted data is input into the smart contract functions that process encrypted values.\nThe currently supported types are ",(0,r.jsx)(n.code,{children:"inEuint8"}),", ",(0,r.jsx)(n.code,{children:"inEuint16"}),", ",(0,r.jsx)(n.code,{children:"inEuint32"}),", ",(0,r.jsx)(n.code,{children:"inEuint64"}),", ",(0,r.jsx)(n.code,{children:"inEuint128"})," & ",(0,r.jsx)(n.code,{children:"inEuint256"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Pass typed encrypted values as function arguments."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"inebool---input-encrypted-boolean",children:[(0,r.jsx)(n.code,{children:"inEbool"})," - Input Encrypted Boolean"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Similarly as with ",(0,r.jsx)(n.code,{children:"inEuint"})," the ",(0,r.jsx)(n.code,{children:"inEbool"})," type is used for passing encrypted boolean values as function arguments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Pass typed encrypted boolean values as function arguments."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ineaddress---input-encrypted-address",children:[(0,r.jsx)(n.code,{children:"inEaddress"})," - Input Encrypted Address"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Similarly as with ",(0,r.jsx)(n.code,{children:"inEuint"})," the ",(0,r.jsx)(n.code,{children:"inEaddress"})," type is used for passing encrypted address values as function arguments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"}),": Pass typed encrypted address values as function arguments."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"core-functions-of-fhesol",children:"Core Functions of FHE.sol"}),"\n",(0,r.jsxs)(n.h3,{id:"aseuint---convert-to-encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"asEuint"})," - Convert to Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Converts a plaintext number, encrypted variable or an ",(0,r.jsx)(n.code,{children:"inEuint"})," encrypted input into an ",(0,r.jsx)(n.code,{children:"euint"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"asebool---convert-to-encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"asEbool"})," - Convert to Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Converts a plaintext number, encrypted variable or an ",(0,r.jsx)(n.code,{children:"inEbool"})," encrypted input into an ",(0,r.jsx)(n.code,{children:"ebool"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"aseaddress---convert-to-encrypted-unsigned-integer",children:[(0,r.jsx)(n.code,{children:"asEaddress"})," - Convert to Encrypted Unsigned Integer"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Converts a plaintext number, encrypted variable or an ",(0,r.jsx)(n.code,{children:"inEaddress"})," encrypted input into an ",(0,r.jsx)(n.code,{children:"eaddress"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"decrypt---decrypt-encrypted-data",children:[(0,r.jsx)(n.code,{children:"decrypt"})," - Decrypt Encrypted Data"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Decrypts ",(0,r.jsx)(n.code,{children:"euint"}),", ",(0,r.jsx)(n.code,{children:"ebool"})," or ",(0,r.jsx)(n.code,{children:"eaddress"})," encrypted value back to its plaintext form. If the value should only be revealed to a specific address, the ",(0,r.jsx)(n.code,{children:"sealoutput"})," function should be used instead. Learn more abut sealing ",(0,r.jsx)(n.a,{href:"/docs/Helium/devdocs/Writing%20Smart%20Contracts/Returning-Data",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"arithmetic-operations",children:"Arithmetic Operations"}),"\n",(0,r.jsxs)(n.p,{children:["FHE.sol supports encrypted arithmetic operations like addition and subtraction. These operations can be performed directly on ",(0,r.jsx)(n.code,{children:"euint"})," types, enabling encrypted computations."]}),"\n",(0,r.jsx)(n.h3,{id:"comparison-operations",children:"Comparison Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Perform comparisons between encrypted values (e.g., greater than, less than)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage Example"}),": Make decisions based on encrypted values without revealing their contents."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,r.jsx)(n.h3,{id:"encrypting-a-value",children:"Encrypting a Value"}),"\n",(0,r.jsxs)(n.p,{children:["To encrypt a value, convert a plaintext ",(0,r.jsx)(n.code,{children:"uint32"})," into an ",(0,r.jsx)(n.code,{children:"euint32"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"uint32 plaintextValue = 123;\neuint32 encryptedValue = FHE.asEuint32(plaintextValue);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"decrypting-a-value",children:"Decrypting a Value"}),"\n",(0,r.jsx)(n.p,{children:"To decrypt an encrypted value back to plaintext, use the following syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"uint32 decryptedValue = FHE.decrypt(encryptedValue);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Decrypt data with caution. Be careful not to expose decrypted data to unauthorized parties."})}),"\n",(0,r.jsx)(n.h3,{id:"performing-encrypted-arithmetic",children:"Performing Encrypted Arithmetic"}),"\n",(0,r.jsx)(n.p,{children:"You can perform arithmetic operations directly on encrypted values. For example, adding two encrypted values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"euint32 sum = encryptedValue1 + encryptedValue2;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"conditional-logic-with-encrypted-values",children:"Conditional Logic with Encrypted Values"}),"\n",(0,r.jsx)(n.p,{children:"Use a comparison operation to implement logic based on encrypted values. Consider the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"euint32 result = FHE.select(encryptedValue1.gt(encryptedValue2), encryptedValue1, encryptedValue2);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This example chooses between encryptedValue1 and encryptedValue2 by comparing their encrypted values with the ",(0,r.jsx)(n.code,{children:"gt"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"integrating-fhe-into-smart-contracts",children:"Integrating FHE into Smart Contracts"}),"\n",(0,r.jsxs)(n.p,{children:["When incorporating ",(0,r.jsx)(n.code,{children:"FHE.sol"})," into your smart contracts, consider the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Privacy vs. Gas Cost"}),": FHE provides strong privacy guarantees but is computationally intensive and can lead to high gas costs. Balance the need for privacy with its cost."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Types"}),": Ensure that your use cases are compatible with the data types and operations supported by FHE.sol."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security"}),": Understand the security model of FHE and how it fits into the overall security posture of your application."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>E});var r=t(6540),s=t(4164),i=t(3104),a=t(6347),o=t(205),c=t(7485),d=t(1682),l=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=p(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:t,groupId:s}),[y,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,l.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=d??y;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:l,...i,className:(0,s.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=y(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function E(e){const n=(0,g.A)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);