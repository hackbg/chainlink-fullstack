(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{325:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});n(7294);var r=n(1213),s=n(5893);function i(e){var t=e.message;return(0,s.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,s.jsx)(r.zM,{}),(0,s.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,s.jsx)(r.X,{children:t})]})}},8821:function(e,t,n){"use strict";n.d(t,{Ar:function(){return R},$0:function(){return H}});var r=n(5115),s=n(4651),i=n(5419),c=n(5193),o=n(1213),a=n(7495),l=n(6977),u=n(7809),d=n.n(u),h=n(1664),x=n(7294),f=n(2020),j=n(1277),p=n(8360),m=n(1744),g=n(5893);function b(){var e=(0,a.K)().account,t=(0,p.M)(e),n=t?m.dF(t):"";return(0,g.jsxs)(r.xv,{children:[n," ETH"]})}var y=n(7375),v=n(4023),w=n(3929),k="7b516e5f9bca4abc8f07170d1f0a6cae",O={1:"https://mainnet.infura.io/v3/".concat(k),4:"https://rinkeby.infura.io/v3/".concat(k),42:"https://kovan.infura.io/v3/".concat(k)},C=new w.zw({rpc:{1:O[1],4:O[4],42:O[42]},qrcode:!0});function P(){var e=(0,a.K)(),t=e.activate,n=e.activateBrowserWallet,i=(0,y.qY)(),o=i.onOpen,l=i.isOpen,u=i.onClose;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,g.jsx)(c.zx,{colorScheme:"teal",variant:"outline",onClick:o,children:"Connect to a wallet"})}),(0,g.jsxs)(v.u_,{isOpen:l,onClose:u,children:[(0,g.jsx)(v.ZA,{}),(0,g.jsxs)(v.hz,{children:[(0,g.jsx)(v.xB,{children:"Connect to a wallet"}),(0,g.jsx)(v.ol,{}),(0,g.jsxs)(v.fe,{children:[(0,g.jsx)(c.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),u()},children:"MetaMask"}),(0,g.jsx)(c.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(C)},children:"WalletConnect"})]})]})]})]})}var E=n(4942),D=n(9008),z=n(1163);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var _="https://chainlink-fullstack.demo.hack.bg/",S=function(e){var t=e.customMeta,n=(0,z.useRouter)(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Chainlink Demo App",description:"Full stack starter project showcasing Chainlink products on Ethereum",image:"".concat(_,"/images/chainlink-logo.png"),type:"website"},t);return(0,g.jsxs)(D.default,{children:[(0,g.jsx)("title",{children:r.title}),(0,g.jsx)("meta",{content:r.description,name:"description"}),(0,g.jsx)("meta",{property:"og:url",content:"".concat(_).concat(n.asPath)}),(0,g.jsx)("link",{rel:"canonical",href:"".concat(_).concat(n.asPath)}),(0,g.jsx)("meta",{property:"og:type",content:r.type}),(0,g.jsx)("meta",{property:"og:site_name",content:"Chainlink Demo App"}),(0,g.jsx)("meta",{property:"og:description",content:r.description}),(0,g.jsx)("meta",{property:"og:title",content:r.title}),(0,g.jsx)("meta",{property:"og:image",content:r.image}),(0,g.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,g.jsx)("meta",{name:"twitter:site",content:"@chainlink"}),(0,g.jsx)("meta",{name:"twitter:title",content:r.title}),(0,g.jsx)("meta",{name:"twitter:description",content:r.description}),(0,g.jsx)("meta",{name:"twitter:image",content:r.image})]})},W=n(325),A={transactionStarted:"Started",transactionSucceed:"Completed"};function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var R=function(e){var t,n=e.children,u=e.customMeta,p=(0,a.K)(),m=p.account,y=p.deactivate,v=p.error,w=p.setError,k=(0,l.z)().notifications;return(0,x.useEffect)((function(){v&&w(v)}),[v,w]),t=d().create({seed:m}).toDataURL(),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S,{customMeta:u}),(0,g.jsx)("header",{children:(0,g.jsx)(r.W2,{maxWidth:"container.xl",children:(0,g.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,g.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,g.jsx)(h.default,{href:"/",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,g.jsx)(h.default,{href:"/feeds",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,g.jsx)(h.default,{href:"/vrf",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,g.jsx)(h.default,{href:"/external-api",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),m?(0,g.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,g.jsx)(b,{}),(0,g.jsx)(s.Ee,{ml:"4",src:t,alt:"blockie"}),(0,g.jsxs)(i.v2,{placement:"bottom-end",children:[(0,g.jsx)(i.j2,{as:c.zx,ml:"4",children:F(m)}),(0,g.jsx)(i.qy,{children:(0,g.jsx)(i.sN,{onClick:function(){y()},children:"Disconnect"})})]})]}):(0,g.jsx)(P,{})]})})}),(0,g.jsx)("main",{children:(0,g.jsxs)(r.W2,{maxWidth:"container.xl",children:[v&&(0,g.jsx)(W.j,{message:(0,f.e$)(v)}),n,k.map((function(e){return"walletConnected"===e.type?null:(0,g.jsxs)(o.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,g.jsx)(o.zM,{}),(0,g.jsxs)(r.xu,{children:[(0,g.jsxs)(o.Cd,{children:[e.transactionName," ",A[e.type]]}),(0,g.jsxs)(o.X,{overflow:"hidden",children:["Transaction Hash:"," ",F(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,g.jsx)("footer",{children:(0,g.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,g.jsxs)(r.rU,{href:"https://github.com/hackbg/chainlink-fullstack",children:["GitHub ",(0,g.jsx)(j.h0,{mx:"2px"})]})})})]})};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var H=function(e){return(0,g.jsx)(r.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({maxWidth:"container.sm",p:"8",mt:"8",bg:"gray.100"},e))}},2020:function(e,t,n){"use strict";n.d(t,{e$:function(){return o},Sx:function(){return a},jl:function(){return u},gC:function(){return h},Yg:function(){return x}});var r=n(2236),s=n(157),i=n(950),c=n(3929);function o(e){return e instanceof i.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof s.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof i.ab||e instanceof c.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}function a(e){return e.includes("The execution failed due to an exception.")?"".concat(e," Please check if the contract has enough LINK to pay the oracle."):e}var l=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),u=function(e){return l.format(e.toString())},d=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),h=function(e){return d.format(e.toString())},x=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},2119:function(e,t,n){"use strict";n.r(t);var r=n(1664),s=n(5115),i=n(1277),c=n(8821),o=n(5893);t.default=function(){return(0,o.jsxs)(c.Ar,{children:[(0,o.jsx)(s.X6,{as:"h1",mb:"4",children:"Welcome to the Chainlink Demo App"}),(0,o.jsx)(s.xv,{fontSize:"xl",children:"Full stack starter project showcasing Chainlink products on Ethereum (EVM)."}),(0,o.jsxs)(c.$0,{children:[(0,o.jsx)(s.X6,{as:"h2",size:"md",mb:"2",children:"Data Feeds"}),(0,o.jsx)(s.xv,{mb:"4",children:"Retrieve the latest prices and data points of assets in your smart contracts."}),(0,o.jsx)(r.default,{href:"/feeds",passHref:!0,children:(0,o.jsxs)(s.rU,{children:["Go to Demo ",(0,o.jsx)(i.mr,{})]})})]}),(0,o.jsxs)(c.$0,{children:[(0,o.jsx)(s.X6,{as:"h2",size:"md",mb:"2",children:"Randomness (VRF)"}),(0,o.jsx)(s.xv,{mb:"4",children:"Use VRF (Verifiable Random Function) to consume randomness in your smart contracts."}),(0,o.jsx)(r.default,{href:"/vrf",passHref:!0,children:(0,o.jsxs)(s.rU,{children:["Go to Demo ",(0,o.jsx)(i.mr,{})]})})]}),(0,o.jsxs)(c.$0,{children:[(0,o.jsx)(s.X6,{as:"h2",size:"md",mb:"2",children:"Call External API"}),(0,o.jsx)(s.xv,{mb:"4",children:"Request & Receive data from any API in your smart contracts."}),(0,o.jsx)(r.default,{href:"/external-api",passHref:!0,children:(0,o.jsxs)(s.rU,{children:["Go to Demo ",(0,o.jsx)(i.mr,{})]})})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2119)}])}},function(e){e.O(0,[593,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);