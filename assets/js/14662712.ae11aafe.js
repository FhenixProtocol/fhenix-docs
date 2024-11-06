"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3416],{3342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(4848),a=t(8453),o=t(1470),s=t(9365);const l={sidebar_position:5},i="Deploying",c={id:"devdocs/Tutorials/Basic/Deploying",title:"Deploying",description:"Now that we have our completed WrappingERC20 token, the next step is to see if our code actually works!",source:"@site/docs/devdocs/Tutorials/Basic/Deploying.mdx",sourceDirName:"devdocs/Tutorials/Basic",slug:"/devdocs/Tutorials/Basic/Deploying",permalink:"/docs/./devdocs/Tutorials/Basic/Deploying",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Tutorials/Basic/Deploying.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Adding View Functions",permalink:"/docs/./devdocs/Tutorials/Basic/Adding View Functions"},next:{title:"Testing on Fhenix",permalink:"/docs/./devdocs/Tutorials/Basic/Testing"}},d={},u=[{value:"Compiling the Contract",id:"compiling-the-contract",level:3},{value:"Compiling your contracts",id:"compiling-your-contracts",level:4},{value:"Deploying the Contract",id:"deploying-the-contract",level:3},{value:"Tasks",id:"tasks",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploying",children:"Deploying"}),"\n",(0,r.jsx)(n.p,{children:"Now that we have our completed WrappingERC20 token, the next step is to see if our code actually works!"}),"\n",(0,r.jsxs)(n.p,{children:["To do this, we'll be writing tests in typescript using hardhat, and deploying them on our ",(0,r.jsx)(n.a,{href:"/docs/./devdocs/Setting%20Up%20Your%20Environment/Hardhat#start-localfhenix",children:"LocalFhenix"})," environment which we set up earlier."]}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,r.jsx)(n.p,{children:"At this stage, using hardhat network is not supported, as Fhenix uses custom extensions to the EVM that enable FHE operations"})}),"\n",(0,r.jsx)(n.h3,{id:"compiling-the-contract",children:"Compiling the Contract"}),"\n",(0,r.jsx)(n.h4,{id:"compiling-your-contracts",children:"Compiling your contracts"}),"\n",(0,r.jsx)(n.p,{children:"First, let's see that our current contract is even valid. Let's run the following:"}),"\n",(0,r.jsxs)(o.A,{groupId:"package-managers",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run compile\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn compile\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm compile\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"This will compile our Solidity contract into bytecode, and generate helper components that we'll be able to use for testing and deployment. If everything works, you should see something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"> cross-env TS_NODE_TRANSPILE_ONLY=true hardhat compile\n\nGenerating typings for: 5 artifacts in dir: types for target: ethers-v6\nSuccessfully generated 28 typings!\nCompiled 5 Solidity files successfully\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploying-the-contract",children:"Deploying the Contract"}),"\n",(0,r.jsx)(n.h4,{id:"tasks",children:"Tasks"}),"\n",(0,r.jsxs)(n.p,{children:["To help us deploy and perform actions you can make use of tasks. We'll add deployment and usage tasks for our new contract. We'll replace the deployment of the default contract with our WrappedERC20. Notice that the differences are mostly just the naming and constructor arguments that are different. Replace the ",(0,r.jsx)(n.code,{children:"deploy/deploy.ts"})," with the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import { DeployFunction } from "hardhat-deploy/types";\nconst hre = require("hardhat");\n\nconst func: DeployFunction = async function () {\n  const { ethers } = hre;\n  const { deploy } = hre.deployments;\n  const [signer] = await ethers.getSigners();\n\n  const counter = await deploy("WrappingERC20", {\n    from: signer.address,\n    args: ["Test Token", "TST"],\n    log: true,\n    skipIfAlreadyDeployed: false\n  });\n\n  console.log(`Counter contract: `, counter.address);\n};\n\nexport default func;\nfunc.id = "deploy_counter";\nfunc.tags = ["WrappingERC20"];\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we can use this task to deploy our contract to either LocalFhenix, or the Devnet chain."}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"localfhenix",label:"LocalFhenix",default:!0,children:(0,r.jsxs)(o.A,{groupId:"package-managers",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# get tokens from localfhenix faucet\nnpm run faucet\n# if this doesn\'t work, try running it directly\n# with "node getFromFaucet"\n# deploy the contract\nnpm run deploy:contracts\n'})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# get tokens from localfhenix faucet\nyarn faucet\n# if this doesn\'t work, try running it directly\n# with "node getFromFaucet"\n# deploy the contract\nyarn deploy:contracts\n'})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# get tokens from localfhenix faucet\npnpm faucet\n# if this doesn\'t work, try running it directly\n# with "node getFromFaucet"\n# deploy the contract\npnpm deploy:contracts\n'})})})]})}),(0,r.jsxs)(s.A,{value:"fhenix-frontier",label:"Fhenix Frontier",children:[(0,r.jsx)(n.p,{children:"Make sure your deployer address has some tokens, which you can get from []"}),(0,r.jsxs)(o.A,{groupId:"package-managers",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run deploy:contracts --network devnet\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn deploy:contracts --network devnet\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm deploy:contracts --network devnet\n"})})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Okay, now we know how to create programmatic actions. You can find a few other examples of tasks that interact with the deployed contract in the ",(0,r.jsxs)(n.a,{href:"https://github.com/FhenixProtocol/werc20-example/tree/main/tasks",children:[(0,r.jsx)(n.code,{children:"tasks"})," "]}),"folder."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Making Changes?",type:"tip",children:[(0,r.jsx)(n.p,{children:"When deploying a contract hardhat creates a static deployment. If you want to make changes and redeploy using this method run"}),(0,r.jsxs)(o.A,{groupId:"package-managers",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"npm run clean"})})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"yarn clean"})})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"pnpm clean"})})})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Let's move on to writing a few unit tests!"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),o=t(3104),s=t(6347),l=t(205),i=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),x=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);