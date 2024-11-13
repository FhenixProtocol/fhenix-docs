"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[2576],{5203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453),a=t(403);const s={sidebar_position:3,title:"\u2601\ufe0f Gitpod"},r=" Gitpod",c={id:"devdocs/Setting Up Your Environment/Gitpod",title:"\u2601\ufe0f Gitpod",description:"If you're more of a cloud-based developer, you can skip all the installation steps and work directly with our Gitpod environment. This environment includes a LocalFhenix instance and all the tools you need to dive in.",source:"@site/docs/devdocs/Setting Up Your Environment/Gitpod.mdx",sourceDirName:"devdocs/Setting Up Your Environment",slug:"/devdocs/Setting Up Your Environment/Gitpod",permalink:"/docs/devdocs/Setting Up Your Environment/Gitpod",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Setting Up Your Environment/Gitpod.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u2601\ufe0f Gitpod"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/devdocs/Setting Up Your Environment/intro"},next:{title:"\ud83d\udee0\ufe0f Foundry",permalink:"/docs/devdocs/Setting Up Your Environment/Foundry"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Deploy a contract",id:"deploy-a-contract",level:2},{value:"Interact with a contract",id:"interact-with-a-contract",level:2},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"View Functions",id:"view-functions",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"-gitpod",children:[(0,o.jsx)(a.A,{width:"40",height:"40"})," Gitpod"]}),"\n",(0,o.jsx)(n.p,{children:"If you're more of a cloud-based developer, you can skip all the installation steps and work directly with our Gitpod environment. This environment includes a LocalFhenix instance and all the tools you need to dive in."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["You can run an instance of LocalFhenix in Gitpod by ",(0,o.jsx)(n.a,{href:"https://gitpod.io/#https://github.com/fhenixprotocol/fhenix-hardhat-example",children:"clicking here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"After opening the Gitpod container and starting up the instance, you will be greeted with the following terminal:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(2432).A+"",width:"839",height:"544"})}),"\n",(0,o.jsxs)(n.p,{children:["Please wait for about 60 seconds for the image to be downloaded and ",(0,o.jsx)(n.code,{children:"localfhenix"})," to be started. Once the container is ready, you will see the following message:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7467).A+"",width:"804",height:"589"})}),"\n",(0,o.jsxs)(n.p,{children:["Now that we are ready, you can use the pre-configured contract to interact with the LocalFhenix instance. You can find the contract in the ",(0,o.jsx)(n.code,{children:"contracts"})," folder."]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-a-contract",children:"Deploy a contract"}),"\n",(0,o.jsx)(n.p,{children:"To deploy a contract, you can use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx hardhat deploy\n"})}),"\n",(0,o.jsx)(n.h2,{id:"interact-with-a-contract",children:"Interact with a contract"}),"\n",(0,o.jsx)(n.h3,{id:"send-a-transaction",children:"Send a transaction"}),"\n",(0,o.jsx)(n.p,{children:"To interact with our counter contract, you can use the predefined hardhat tasks:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx hardhat task:addCount --amount 10\n"})}),"\n",(0,o.jsx)(n.h3,{id:"view-functions",children:"View Functions"}),"\n",(0,o.jsx)(n.p,{children:"To view the current count, you can use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx hardhat task:getCount\n"})}),"\n",(0,o.jsx)(n.p,{children:"If everything was successful, you should see output similar to the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gitpod /workspace/fhenix-hardhat-example (master) $ npx hardhat task:getCount\nRunning getCount, targeting contract at: 0xbeb4eF1fcEa618C6ca38e3828B00f8D481EC2CC2\ngot count: 10\ngot unsealed result: 10\n"})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about the Fhenix Hardhat Plugin, please visit the ",(0,o.jsx)(n.a,{href:"/docs/devdocs/Tools%20and%20Utilities/Fhenix-Hardhat-Plugin",children:"Fhenix Hardhat Plugin"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},403:(e,n,t)=>{t.d(n,{A:()=>r});var o,i,a=t(6540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(null,arguments)}const r=e=>{let{title:n,titleId:t,...r}=e;return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:90,height:100,fill:"none",viewBox:"0 0 189 208","aria-labelledby":t},r),n?a.createElement("title",{id:t},n):null,o||(o=a.createElement("path",{fill:"url(#a)",fillRule:"evenodd",d:"M112.287 10.358c5.613 9.855 2.2 22.409-7.623 28.04L43.586 73.41a5.2 5.2 0 0 0-2.614 4.51V132.9c0 1.864.997 3.584 2.614 4.511l48.326 27.703a5.2 5.2 0 0 0 5.176 0l48.326-27.703a5.2 5.2 0 0 0 2.614-4.511v-34.19l-43.461 24.6c-9.854 5.577-22.35 2.085-27.909-7.8-5.56-9.885-2.079-22.42 7.775-27.997l62.187-35.2C165.563 41.592 189 55.322 189 77.14v59.926c0 14.036-7.497 26.996-19.645 33.96l-55.511 31.821a38.88 38.88 0 0 1-38.688 0l-55.51-31.821C7.496 164.062 0 151.102 0 137.066V73.754c0-14.036 7.497-26.996 19.645-33.96L84.336 2.712c9.823-5.63 22.337-2.207 27.951 7.647",clipRule:"evenodd"})),i||(i=a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:142.253,x2:44.805,y1:31.454,y2:184.17,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#FFB45B"}),a.createElement("stop",{offset:1,stopColor:"#FF8A00"})))))}},2432:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/gitpod-ss1-6a40ee7599c603333f58ab9344dbce38.png"},7467:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/gitpod-ss2-abd7fc082038b9939535143ac8070f39.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);