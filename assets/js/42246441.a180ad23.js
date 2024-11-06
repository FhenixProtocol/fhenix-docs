"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7064],{2300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=n(4848),i=n(8453);const s={sidebar_position:100,title:"Catching Errors"},o=void 0,a={id:"devdocs/FhenixJS/Catching Errors",title:"Catching Errors",description:"Catching Errors in Hardhat",source:"@site/docs/devdocs/FhenixJS/Catching Errors.md",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Catching Errors",permalink:"/docs/nitrogen/devdocs/FhenixJS/Catching Errors",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Catching Errors.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Catching Errors"},sidebar:"docsSidebar",previous:{title:"Network Keys",permalink:"/docs/nitrogen/devdocs/FhenixJS/Network Keys"},next:{title:"Templates",permalink:"/docs/nitrogen/devdocs/Examples and References/Templates"}},c={},h=[{value:"Catching Errors in Hardhat",id:"catching-errors-in-hardhat",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"catching-errors-in-hardhat",children:"Catching Errors in Hardhat"}),"\n",(0,r.jsx)(t.p,{children:"There are some scenarios where handling errors in hardhat is not as straightforward as it seems."}),"\n",(0,r.jsx)(t.p,{children:"Generally this simple ethers client would suffice to catch errors inside a try block:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"try {\n    await contract.method(params);\n} catch (error) {\n    console.log(`error!`);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["However, if a contract calls a fails only on the ",(0,r.jsx)(t.em,{children:"commit"})," of a transaction and not in the preceding gas estimation, then this will not raise an error.\nThis is because the transaction will be successfully added on-chain, but the result will be a failure."]}),"\n",(0,r.jsx)(t.p,{children:"The reason this happens is that during gas estimation the FHE operations are not actually performed, but rather the gas is estimated based on the size of the encrypted data."}),"\n",(0,r.jsx)(t.p,{children:"Instead, when calling contracts that perform FHE operations, we recommend checking for the status of the transaction:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"try {\n    let tx = await contract.method(params);\n    let receipt = await tx.wait();\n    if (receipt?.status === 0) {\n        throw Error(`Transaction failed!`)\n    }\n} catch (error) {\n    console.log(`error!`);\n}\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsx)(t.p,{children:"This type of behaviour might be client and framework specific, and might change in the future - we're putting it here for now\nbecause we've seen this behaviour in hardhat. We'll update in the future if this is only hardhat specific, ethers specific, or if it's a general behaviour."})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);