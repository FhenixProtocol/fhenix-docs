"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[1285],{9055:(d,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>e,metadata:()=>c,toc:()=>h});var t=s(5893),r=s(1151);const e={},i="\ud83d\udd25 Gas and Banchmarks",c={id:"devdocs/Writing Smart Contracts/Gas-and-Banchmarks",title:"\ud83d\udd25 Gas and Banchmarks",description:"This section will list the gas costs for every operation based on it's inputs.",source:"@site/docs/devdocs/Writing Smart Contracts/Gas-and-Banchmarks.md",sourceDirName:"devdocs/Writing Smart Contracts",slug:"/devdocs/Writing Smart Contracts/Gas-and-Banchmarks",permalink:"/docs/devdocs/Writing Smart Contracts/Gas-and-Banchmarks",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Writing Smart Contracts/Gas-and-Banchmarks.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udcaf Useful Tips",permalink:"/docs/devdocs/Writing Smart Contracts/Useful-Tips"},next:{title:"Overview",permalink:"/docs/devdocs/Setting Up Your Environment/intro"}},l={},h=[];function x(d){const n={admonition:"admonition",h1:"h1",p:"p",...(0,r.a)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-gas-and-banchmarks",children:"\ud83d\udd25 Gas and Banchmarks"}),"\n",(0,t.jsx)(n.p,{children:"This section will list the gas costs for every operation based on it's inputs.\nThe gas prices are a subject to change based on usage and performance."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The current gas limit for a tranasaction is set to be 50 million"})}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"FHE.sol function"}),(0,t.jsx)("th",{children:"Input"}),(0,t.jsx)("th",{children:"Time in Query (ms)"}),(0,t.jsx)("th",{children:"Gas Units "})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"add"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"35"}),(0,t.jsx)("td",{children:"7,315"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"73"}),(0,t.jsx)("td",{children:"15,275"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"163"}),(0,t.jsx)("td",{children:"34,067"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"asEuint"}),(0,t.jsx)("td",{children:"inEuint"}),(0,t.jsx)("td",{children:"44"}),(0,t.jsx)("td",{children:"9,196"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint"}),(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"1,045"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"uint"}),(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{children:"1,045"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sealOutput"}),(0,t.jsx)("td",{children:"*"}),(0,t.jsx)("td",{children:"23"}),(0,t.jsx)("td",{children:"2,507"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"decrypt"}),(0,t.jsx)("td",{children:"*"}),(0,t.jsx)("td",{children:"18"}),(0,t.jsx)("td",{children:"3,762"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"lte"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"18"}),(0,t.jsx)("td",{children:"3,762"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"29"}),(0,t.jsx)("td",{children:"6,061"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"43"}),(0,t.jsx)("td",{children:"8,987"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"sbb"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"35"}),(0,t.jsx)("td",{children:"7,315"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"73"}),(0,t.jsx)("td",{children:"15,275"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"163"}),(0,t.jsx)("td",{children:"34,067"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"mul"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"94"}),(0,t.jsx)("td",{children:"19,646"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"311"}),(0,t.jsx)("td",{children:"64,999"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"1127"}),(0,t.jsx)("td",{children:"235,543"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"lt"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"22"}),(0,t.jsx)("td",{children:"4,598"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"36"}),(0,t.jsx)("td",{children:"7,524"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"60"}),(0,t.jsx)("td",{children:"12,540"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"select"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"214"}),(0,t.jsx)("td",{children:"44,726"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"316"}),(0,t.jsx)("td",{children:"66,044"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"549"}),(0,t.jsx)("td",{children:"114,741"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"require"}),(0,t.jsx)("td",{children:"*"}),(0,t.jsx)("td",{children:"65"}),(0,t.jsx)("td",{children:"13,585"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"div"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"447"}),(0,t.jsx)("td",{children:"93,423"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"1310"}),(0,t.jsx)("td",{children:"273,790"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"4800"}),(0,t.jsx)("td",{children:"1,003,200"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"gt"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"21"}),(0,t.jsx)("td",{children:"4,389"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"29"}),(0,t.jsx)("td",{children:"6,061"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"45"}),(0,t.jsx)("td",{children:"9,405"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"gte"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"21"}),(0,t.jsx)("td",{children:"4,389"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"29"}),(0,t.jsx)("td",{children:"6,061"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"45"}),(0,t.jsx)("td",{children:"9,405"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"rem"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"447"}),(0,t.jsx)("td",{children:"93,423"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"1310"}),(0,t.jsx)("td",{children:"273,790"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"4800"}),(0,t.jsx)("td",{children:"1,003,200"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"or"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"13"}),(0,t.jsx)("td",{children:"2,717"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"21"}),(0,t.jsx)("td",{children:"4,389"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"38"}),(0,t.jsx)("td",{children:"7,942"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"xor"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"13"}),(0,t.jsx)("td",{children:"2,717"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"21"}),(0,t.jsx)("td",{children:"4,389"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"38"}),(0,t.jsx)("td",{children:"7,942"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"eq"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"18"}),(0,t.jsx)("td",{children:"3,762"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"25"}),(0,t.jsx)("td",{children:"5,225"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"50"}),(0,t.jsx)("td",{children:"10,450"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"ne"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"18"}),(0,t.jsx)("td",{children:"3,762"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"25"}),(0,t.jsx)("td",{children:"5,225"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"50"}),(0,t.jsx)("td",{children:"10,450"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"min"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"41"}),(0,t.jsx)("td",{children:"8,569"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"75"}),(0,t.jsx)("td",{children:"15,675"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"135"}),(0,t.jsx)("td",{children:"28,215"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"max"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"41"}),(0,t.jsx)("td",{children:"8,569"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"75"}),(0,t.jsx)("td",{children:"15,675"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"135"}),(0,t.jsx)("td",{children:"28,215"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"shl"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"82"}),(0,t.jsx)("td",{children:"17,138"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"190"}),(0,t.jsx)("td",{children:"39,710"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"422"}),(0,t.jsx)("td",{children:"88,198"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"shr"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"82"}),(0,t.jsx)("td",{children:"17,138"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"190"}),(0,t.jsx)("td",{children:"39,710"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"422"}),(0,t.jsx)("td",{children:"88,198"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"not"}),(0,t.jsx)("td",{children:"euint8"}),(0,t.jsx)("td",{children:"12"}),(0,t.jsx)("td",{children:"2,508"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint16"}),(0,t.jsx)("td",{children:"22"}),(0,t.jsx)("td",{children:"4,598"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"euint32"}),(0,t.jsx)("td",{children:"36"}),(0,t.jsx)("td",{children:"7,524"})]})]})]})]})}function j(d={}){const{wrapper:n}={...(0,r.a)(),...d.components};return n?(0,t.jsx)(n,{...d,children:(0,t.jsx)(x,{...d})}):x(d)}},1151:(d,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(7294);const r={},e=t.createContext(r);function i(d){const n=t.useContext(e);return t.useMemo((function(){return"function"==typeof d?d(n):{...n,...d}}),[n,d])}function c(d){let n;return n=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:i(d.components),t.createElement(e.Provider,{value:n},d.children)}}}]);