"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[610],{610:(e,t,s)=>{s.r(t),s.d(t,{default:()=>B});var o=s(791),n=s(101),r=s(788);const i="Users_content__FGj+2",l="Users_item__kkcPx",a="Users_userPhoto__3gcY3",c="Users_right__4tL+b",u="Users_userInfo__LH+So",p="Users_fullname__onl2Q",d="Users_unfollow__bFDhZ",f="Paginator_pagesList__WJWBz",g="Paginator_buttonPage__bBWMb",h="Paginator_selectedPage__OovYi";var m=s(184);const v=()=>(0,m.jsxs)("svg",{width:"1.5rem",height:"1.5rem",viewBox:"0 0 1024 1024",className:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",transform:"rotate(180)",children:[(0,m.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,m.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,m.jsx)("path",{d:"M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z",fill:"#fff"})})]}),w=()=>(0,m.jsxs)("svg",{width:"1.5rem",height:"1.5rem",viewBox:"0 0 1024 1024",className:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",children:[(0,m.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,m.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,m.jsx)("path",{d:"M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z",fill:"#ffffff"})})]}),j=e=>{let{totalItemsCount:t,pageSize:s,currentPage:n,onPageChanged:r,portionSize:i=6}=e,l=Math.ceil(t/s),a=[];for(let o=1;o<=l;o++)a.push(o);const c=Math.ceil(l/i),[u,p]=(0,o.useState)(1),d=(u-1)*i+1,j=u*i;return(0,m.jsxs)("div",{className:f,children:[u>1&&(0,m.jsx)("div",{className:g,onClick:()=>p(u-1),children:(0,m.jsx)(v,{})}),a.filter((e=>e>=d&&e<=j)).map((e=>(0,m.jsx)("span",{onClick:t=>{r(e)},className:n===e?h:null,children:e},e))),u<c&&(0,m.jsx)("div",{className:g,onClick:()=>p(u+1),children:(0,m.jsx)(w,{})})]})};var x=s(87),y=s(353);const _=e=>{let{user:t,followingInProgress:s,unfollow:o,follow:n}=e;return(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)(x.OL,{to:"/profile/".concat(t.id),children:(0,m.jsx)("img",{src:null!=t.photos.small?t.photos.small:y,className:a,alt:""})}),(0,m.jsxs)("div",{className:c,children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("p",{className:p,children:t.name}),(0,m.jsx)("p",{children:t.status&&t.status.length>35?t.status.slice(0,35)+"...":t.status})]}),(0,m.jsx)("div",{children:t.followed?(0,m.jsx)("button",{className:d,disabled:s.some((e=>e===t.id)),onClick:()=>{o(t.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,m.jsx)("button",{disabled:s.some((e=>e===t.id)),onClick:()=>{n(t.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})]})},P=e=>(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)(j,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((t=>(0,m.jsx)(_,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)))]});var C=s(904);s(572);function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(t)}var k=e=>Array.isArray(e)?e:[e];function S(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const s=e.map((e=>"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e)).join(", ");throw new TypeError("".concat(t,"[").concat(s,"]"))}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var z="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},R=0,U=1;function N(){return{s:R,v:void 0,o:null,p:null}}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=N();const{resultEqualityCheck:o}=t;let n,r=0;function i(){let t=s;const{length:i}=arguments;for(let e=0,s=i;e<s;e++){const s=arguments[e];if("function"===typeof s||"object"===typeof s&&null!==s){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(s);void 0===o?(t=N(),e.set(s,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(s);void 0===o?(t=N(),e.set(s,t)):t=o}}const l=t;let a;if(t.s===U?a=t.v:(a=e.apply(null,arguments),r++),l.s=U,o){var c,u,p;const e=null!==(c=null===(u=n)||void 0===u||null===(p=u.deref)||void 0===p?void 0:p.call(u))&&void 0!==c?c:n;null!=e&&o(e,a)&&(a=e,0!==r&&r--);n="object"===typeof a&&null!==a||"function"===typeof a?new z(a):a}return l.v=a,a}return i.clearCache=()=>{s=N(),i.resetResultsCount()},i.resultsCount=()=>r,i.resetResultsCount=()=>{r=0},i}function M(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),o=1;o<t;o++)s[o-1]=arguments[o];const n="function"===typeof e?{memoize:e,memoizeOptions:s}:e,r=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let o,r=0,i=0,l={},a=t.pop();"object"===typeof a&&(l=a,a=t.pop()),b(a,"createSelector expects an output function after the inputs, but received: [".concat(typeof a,"]"));const c={...n,...l},{memoize:u,memoizeOptions:p=[],argsMemoize:d=L,argsMemoizeOptions:f=[],devModeChecks:g={}}=c,h=k(p),m=k(f),v=S(t),w=u((function(){return r++,a.apply(null,arguments)}),...h);const j=d((function(){i++;const e=function(e,t){const s=[],{length:o}=e;for(let n=0;n<o;n++)s.push(e[n].apply(null,t));return s}(v,arguments);return o=w.apply(null,e),o}),...m);return Object.assign(j,{resultFunc:a,memoizedResultFunc:w,dependencies:v,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>o,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:u,argsMemoize:d})};return Object.assign(r,{withTypes:()=>r}),r}var O=M(L),I=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));const s=Object.keys(e),o=t(s.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(((e,t,o)=>(e[s[o]]=t,e)),{})}));return o}),{withTypes:()=>I});const F=O((e=>e.usersPage.users),(e=>e.filter((e=>!0)))),W=e=>e.usersPage.pageSize,A=e=>e.usersPage.totalUsersCount,G=e=>e.usersPage.currentPage,V=e=>e.usersPage.isFetching,D=e=>e.usersPage.followingInProgress;class T extends o.Component{constructor(){super(...arguments),this.onPageChanged=e=>{this.props.setCurrentPage(e),this.props.requestUsers(e,this.props.pageSize)}}componentDidMount(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}render(){return(0,m.jsxs)(m.Fragment,{children:[this.props.isFetching&&(0,m.jsx)(C.Z,{}),(0,m.jsx)(P,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}let q={setCurrentPage:r.D4,requestUsers:r.D7,follow:r.ZN,unfollow:r.fv};const B=(0,n.$j)((e=>({users:F(e),pageSize:W(e),totalUsersCount:A(e),currentPage:G(e),isFetching:V(e),followingInProgress:D(e)})),q)(T)}}]);
//# sourceMappingURL=610.dab917e5.chunk.js.map