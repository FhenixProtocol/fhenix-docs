"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[4500],{7941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(4848),o=t(8453);const a={sidebar_position:1},r="Overview",s={id:"devdocs/Tutorials/Basic/intro",title:"Overview",description:"In this guide, we'll be creating a shielded ERC20 token using Solidity. Our token will be unique in that it will offer encrypted token balances, thereby enhancing privacy for token holders.",source:"@site/versioned_docs/version-Helium/devdocs/Tutorials/Basic/intro.md",sourceDirName:"devdocs/Tutorials/Basic",slug:"/devdocs/Tutorials/Basic/intro",permalink:"/docs/devdocs/Tutorials/Basic/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/versioned_docs/version-Helium/devdocs/Tutorials/Basic/intro.md",tags:[],version:"Helium",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Shielded ERC20 Token",permalink:"/docs/category/shielded-erc20-token"},next:{title:"Setting Up",permalink:"/docs/devdocs/Tutorials/Basic/Setting Up"}},l={},c=[{value:"What We&#39;ll Be Building",id:"what-well-be-building",level:2},{value:"Why Is This Useful?",id:"why-is-this-useful",level:2}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we'll be creating a shielded ERC20 token using Solidity. Our token will be unique in that it will offer encrypted token balances, thereby enhancing privacy for token holders."}),"\n",(0,i.jsx)(n.p,{children:"We'll be making use of the FHE library and Fhenix Helium Testnet to enable this functionality - it allows us to perform computations on encrypted data without first having to decrypt it, which is vital for preserving privacy."}),"\n",(0,i.jsxs)(n.p,{children:["You can find all the completed code in our ",(0,i.jsx)(n.a,{href:"https://github.com/FhenixProtocol/erc20-tutorial-code",children:"example project repository"}),". You can just skip there if you just want to see the final code."]}),"\n",(0,i.jsx)(n.h2,{id:"what-well-be-building",children:"What We'll Be Building"}),"\n",(0,i.jsxs)(n.p,{children:["We'll be building a contract for a new token that ",(0,i.jsx)(n.em,{children:"extends"})," the standard ERC20 token functionality. Our contract will introduce an additional layer of privacy by encrypting token balances. This means that even though transactions are public on the blockchain, it will be impossible to know the balance of a user's account without having the corresponding decryption key."]}),"\n",(0,i.jsx)(n.p,{children:"Our token will offer the ability to 'wrap' and 'unwrap' tokens, where wrapping refers to the conversion of regular tokens into their encrypted form and unwrapping refers to the conversion back into regular tokens."}),"\n",(0,i.jsx)(n.p,{children:"In addition, our contract will also support the transfer of encrypted tokens from one account to another. The balance of encrypted tokens can also be queried by the token holder, keeping their balance private from others on the network."}),"\n",(0,i.jsx)(n.h2,{id:"why-is-this-useful",children:"Why Is This Useful?"}),"\n",(0,i.jsx)(n.p,{children:"Traditional ERC20 tokens operate transparently, meaning that balances and transactions are publicly visible on the blockchain. This transparency can lead to issues around privacy. For example, once an address is linked to an individual, anyone can view their token balance and see all incoming and outgoing transactions."}),"\n",(0,i.jsx)(n.p,{children:"By using encryption, we can offer the same functionality while greatly enhancing user privacy. Encrypted balances ensure that no one can determine a user's token balance without the appropriate decryption key. This type of token can be beneficial for users who want the benefits of transacting on the blockchain but with an additional layer of privacy."}),"\n",(0,i.jsx)(n.p,{children:"This could be particularly useful in a range of applications, from privacy-preserving DeFi applications to personal tokens where the individual does not want their total supply public."}),"\n",(0,i.jsx)(n.p,{children:"The shielded ERC20 token we will build offers the right balance between transparency, needed for the operation of the blockchain, and privacy, providing individuals the discretion they need over their own finances."}),"\n",(0,i.jsx)(n.p,{children:"By just extending (and not replacing) the basic functionality of the ERC20 standard we can also maintain compatibility with applications that support the ERC20 token, such as wallets and DeFi applications."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);