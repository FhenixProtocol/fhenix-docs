"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7456],{7649:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var t=r(4848),s=r(8453);const d={},c=void 0,a={id:"devdocs/Solidity API/Experimental/FHERC20",title:"FHERC20",description:"FHERC20",source:"@site/docs/devdocs/Solidity API/Experimental/FHERC20.md",sourceDirName:"devdocs/Solidity API/Experimental",slug:"/devdocs/Solidity API/Experimental/FHERC20",permalink:"/docs/nitrogen/devdocs/Solidity API/Experimental/FHERC20",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/tree/main/docs/devdocs/Solidity API/Experimental/FHERC20.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Testing on Fhenix",permalink:"/docs/nitrogen/devdocs/Tutorials/Basic/Testing"},next:{title:"IFHERC20",permalink:"/docs/nitrogen/devdocs/Solidity API/Experimental/IFHERC20"}},i={},l=[{value:"FHERC20",id:"fherc20",level:2},{value:"_encBalances",id:"_encbalances",level:3},{value:"constructor",id:"constructor",level:3},{value:"_allowanceEncrypted",id:"_allowanceencrypted",level:3},{value:"allowanceEncrypted",id:"allowanceencrypted",level:3},{value:"approveEncrypted",id:"approveencrypted",level:3},{value:"_approve",id:"_approve",level:3},{value:"_spendAllowance",id:"_spendallowance",level:3},{value:"transferFromEncrypted",id:"transferfromencrypted",level:3},{value:"transferFromEncrypted",id:"transferfromencrypted-1",level:3},{value:"wrap",id:"wrap",level:3},{value:"unwrap",id:"unwrap",level:3},{value:"_mintEncrypted",id:"_mintencrypted",level:3},{value:"transferEncrypted",id:"transferencrypted",level:3},{value:"transferEncrypted",id:"transferencrypted-1",level:3},{value:"_transferImpl",id:"_transferimpl",level:3},{value:"balanceOfEncrypted",id:"balanceofencrypted",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"fherc20",children:"FHERC20"}),"\n",(0,t.jsx)(n.h3,{id:"_encbalances",children:"_encBalances"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(address => euint32) _encBalances\n"})}),"\n",(0,t.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"constructor(string name, string symbol) public\n"})}),"\n",(0,t.jsx)(n.h3,{id:"_allowanceencrypted",children:"_allowanceEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _allowanceEncrypted(address owner, address spender) public view virtual returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"allowanceencrypted",children:"allowanceEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function allowanceEncrypted(address spender, struct Permission permission) public view virtual returns (bytes)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["_Returns the remaining number of tokens that ",(0,t.jsx)(n.code,{children:"spender"})," will be\nallowed to spend on behalf of ",(0,t.jsx)(n.code,{children:"owner"})," through ",(0,t.jsx)(n.a,{href:"#transferfromencrypted",children:"transferFromEncrypted"}),". This is\nzero by default."]}),"\n",(0,t.jsxs)(n.p,{children:["This value changes when ",(0,t.jsx)(n.a,{href:"#approveencrypted",children:"approveEncrypted"})," or ",(0,t.jsx)(n.a,{href:"#transferfromencrypted",children:"transferFromEncrypted"})," are called._"]}),"\n",(0,t.jsx)(n.h3,{id:"approveencrypted",children:"approveEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function approveEncrypted(address spender, struct inEuint32 value) public virtual returns (bool)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["_Sets a ",(0,t.jsx)(n.code,{children:"value"})," amount of tokens as the allowance of ",(0,t.jsx)(n.code,{children:"spender"})," over the\ncaller's tokens."]}),"\n",(0,t.jsx)(n.p,{children:"Returns a boolean value indicating whether the operation succeeded."}),"\n",(0,t.jsxs)(n.p,{children:["IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\n",(0,t.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729",children:"https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729"})]}),"\n",(0,t.jsxs)(n.p,{children:["Emits an ",(0,t.jsx)(n.code,{children:"ApprovalEncrypted"})," event._"]}),"\n",(0,t.jsx)(n.h3,{id:"_approve",children:"_approve"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _approve(address owner, address spender, euint32 value) internal\n"})}),"\n",(0,t.jsx)(n.h3,{id:"_spendallowance",children:"_spendAllowance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _spendAllowance(address owner, address spender, euint32 value) internal virtual returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transferfromencrypted",children:"transferFromEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function transferFromEncrypted(address from, address to, euint32 value) public virtual returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transferfromencrypted-1",children:"transferFromEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function transferFromEncrypted(address from, address to, struct inEuint32 value) public virtual returns (euint32)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["_Moves a ",(0,t.jsx)(n.code,{children:"value"})," amount of tokens from ",(0,t.jsx)(n.code,{children:"from"})," to ",(0,t.jsx)(n.code,{children:"to"})," using the\nallowance mechanism. ",(0,t.jsx)(n.code,{children:"value"})," is then deducted from the caller's\nallowance."]}),"\n",(0,t.jsx)(n.p,{children:"Returns a boolean value indicating whether the operation succeeded."}),"\n",(0,t.jsxs)(n.p,{children:["Emits a ",(0,t.jsx)(n.code,{children:"TransferEncrypted"})," event._"]}),"\n",(0,t.jsx)(n.h3,{id:"wrap",children:"wrap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function wrap(uint32 amount) public\n"})}),"\n",(0,t.jsx)(n.h3,{id:"unwrap",children:"unwrap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function unwrap(uint32 amount) public\n"})}),"\n",(0,t.jsx)(n.h3,{id:"_mintencrypted",children:"_mintEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _mintEncrypted(address to, struct inEuint32 encryptedAmount) internal\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transferencrypted",children:"transferEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function transferEncrypted(address to, struct inEuint32 encryptedAmount) public returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transferencrypted-1",children:"transferEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function transferEncrypted(address to, euint32 amount) public returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"_transferimpl",children:"_transferImpl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _transferImpl(address from, address to, euint32 amount) internal returns (euint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"balanceofencrypted",children:"balanceOfEncrypted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function balanceOfEncrypted(address account, struct Permission auth) public view virtual returns (bytes)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Returns the value of tokens owned by ",(0,t.jsx)(n.code,{children:"account"}),", sealed and encrypted for the caller."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(6540);const s={},d=t.createContext(s);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);