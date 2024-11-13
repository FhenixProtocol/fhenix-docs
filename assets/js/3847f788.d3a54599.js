"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[3376],{7748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(4848),a=n(8453),o=n(1470),i=n(9365);const s={sidebar_position:5},l=void 0,c={id:"devdocs/FhenixJS/Network Keys",title:"Network Keys",description:"Network Encryption Key",source:"@site/docs/devdocs/FhenixJS/Network Keys.mdx",sourceDirName:"devdocs/FhenixJS",slug:"/devdocs/FhenixJS/Network Keys",permalink:"/docs/devdocs/FhenixJS/Network Keys",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/FhenixJS/Network Keys.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"End-to-End Example",permalink:"/docs/devdocs/FhenixJS/Sending-a-Transaction"},next:{title:"Catching Errors",permalink:"/docs/devdocs/FhenixJS/Catching Errors"}},u={},d=[{value:"Network Encryption Key",id:"network-encryption-key",level:4},{value:"Fetching the Public Key Manually",id:"fetching-the-public-key-manually",level:5}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h4:"h4",h5:"h5",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"network-encryption-key",children:"Network Encryption Key"}),"\n",(0,r.jsx)(t.p,{children:"Each Fhenix instance uses its own Encryption Key. This key is special, and allows users to encrypt their data in such a way that will match the encryption of all the other data on the network."}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.strong,{children:"Did You Know?"})}),(0,r.jsxs)(t.p,{children:["The public key we refer to here is a ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"global key"})})," that is used to encrypt data being sent to the network. It is not the same as the ",(0,r.jsx)(t.em,{children:"transactional public key"})," that is used by fhenix.js to unseal data!"]})]}),"\n",(0,r.jsx)(t.p,{children:"If you're using fhenix.js you don't need to worry about this, as the public key fetching is already done automatically by the library."}),"\n",(0,r.jsx)(t.h5,{id:"fetching-the-public-key-manually",children:"Fetching the Public Key Manually"}),"\n",(0,r.jsxs)(t.p,{children:["However, if you're using interfacing with Fhenix directly, you'll need to fetch the public key from the network you're connecting to. This can be done by calling the ",(0,r.jsx)(t.code,{children:"getNetworkPublicKey"})," function on the network you're connecting to."]}),"\n",(0,r.jsx)(t.p,{children:"The Public Key is constant for the lifetime of the network, but still has to be fetched once by the user to be able to encrypt data. To do this, we use a special precompiled function that can be accessed programmatically in the following way:"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"ethers.js",label:"ethers.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const networkPkAbi = new Interface(["function getNetworkPublicKey()"])\nlet result = await provider.call({\n  to: "0x0000000000000000000000000000000000000080",\n  data: networkPkAbi.encodeFunctionData("getNetworkPublicKey");\n});\n'})})}),(0,r.jsx)(i.A,{value:"web3.js",label:"Web3.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const networkPkSig = web3.eth.abi.encodeFunctionSignature("getNetworkPublicKey()");\nlet result = await web3.eth.call({\n  to: "0x0000000000000000000000000000000000000080",\n  data: networkPkSig\n});\n'})})}),(0,r.jsx)(i.A,{value:"cast (Foundry)",label:"cast (Foundry)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'cast call 0x0000000000000000000000000000000000000080 --rpc-url "https://api.nitrogen.fhenix.zone" "getNetworkPublicKey()"\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),o=n(3104),i=n(6347),s=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);