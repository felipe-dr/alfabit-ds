"use strict";(self.webpackChunkalfabit_web_next=self.webpackChunkalfabit_web_next||[]).push([[982],{"./node_modules/@headlessui/react/dist/components/description/description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>b,f:()=>M});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),_utils_render_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===r){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function M(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((s=>(t((o=>[...o,s])),()=>t((o=>{let p=o.slice(),c=p.indexOf(s);return-1!==c&&p.splice(c,1),p}))))),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({register:i,slot:e.slot,name:e.name,props:e.props})),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:n},e.children)}),[t])]}let y=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.yV)((function h(r,t){let a=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.M)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.e)((()=>n.register(e)),[e,n.register]);let o={ref:s,...n.props,id:e};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.sY)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})})),b=Object.assign(y,{})},"./node_modules/@headlessui/react/dist/components/dialog/dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_t});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_server_handoff_complete=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_window_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-window-event.js"),use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});var use_is_mounted=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function E(n,e,a,t){let i=(0,use_latest_value.E)(a);(0,react.useEffect)((()=>{function r(o){i.current(o)}return(n=null!=n?n:window).addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)}),[n,e,t])}var micro_task=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js"),use_watch=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-watch.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js");function c(t){let r=(0,use_event.z)(t),e=(0,react.useRef)(!1);(0,react.useEffect)((()=>(e.current=!1,()=>{e.current=!0,(0,micro_task.Y)((()=>{e.current&&r()}))})),[r])}var console=__webpack_require__("./node_modules/console-browserify/index.js");function P(t){if(!t)return new Set;if("function"==typeof t)return new Set(t());let r=new Set;for(let e of t.current)e.current instanceof HTMLElement&&r.add(e.current);return r}var n,h=((n=h||{})[n.None=1]="None",n[n.InitialFocus=2]="InitialFocus",n[n.TabLock=4]="TabLock",n[n.FocusLock=8]="FocusLock",n[n.RestoreFocus=16]="RestoreFocus",n[n.All=30]="All",n);let z=(0,render.yV)((function X(t,r){let e=(0,react.useRef)(null),o=(0,use_sync_refs.T)(e,r),{initialFocus:u,containers:i,features:n=30,...l}=t;(0,use_server_handoff_complete.H)()||(n=1);let m=(0,use_owner.i)(e);Y({ownerDocument:m},Boolean(16&n));let c=function Z({ownerDocument:t,container:r,initialFocus:e},o){let u=(0,react.useRef)(null),i=(0,use_is_mounted.t)();return(0,use_watch.q)((()=>{if(!o)return;let n=r.current;n&&(0,micro_task.Y)((()=>{if(!i.current)return;let l=null==t?void 0:t.activeElement;if(null!=e&&e.current){if((null==e?void 0:e.current)===l)return void(u.current=l)}else if(n.contains(l))return void(u.current=l);null!=e&&e.current?(0,focus_management.C5)(e.current):(0,focus_management.jA)(n,focus_management.TO.First)===focus_management.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=null==t?void 0:t.activeElement}))}),[o]),u}({ownerDocument:m,container:e,initialFocus:u},Boolean(2&n));!function $({ownerDocument:t,container:r,containers:e,previousActiveElement:o},u){let i=(0,use_is_mounted.t)();E(null==t?void 0:t.defaultView,"focus",(n=>{if(!u||!i.current)return;let l=P(e);r.current instanceof HTMLElement&&l.add(r.current);let m=o.current;if(!m)return;let c=n.target;c&&c instanceof HTMLElement?S(l,c)?(o.current=c,(0,focus_management.C5)(c)):(n.preventDefault(),n.stopPropagation(),(0,focus_management.C5)(m)):(0,focus_management.C5)(o.current)}),!0)}({ownerDocument:m,container:e,containers:i,previousActiveElement:c},Boolean(8&n));let v=function use_tab_direction_n(){let e=(0,react.useRef)(0);return(0,use_window_event.s)("keydown",(o=>{"Tab"===o.key&&(e.current=o.shiftKey?1:0)}),!0),e}(),y=(0,use_event.z)((s=>{let T=e.current;T&&(0,match.E)(v.current,{[use_tab_direction_s.Forwards]:()=>{(0,focus_management.jA)(T,focus_management.TO.First,{skipElements:[s.relatedTarget]})},[use_tab_direction_s.Backwards]:()=>{(0,focus_management.jA)(T,focus_management.TO.Last,{skipElements:[s.relatedTarget]})}})})),_=(0,use_disposables.G)(),b=(0,react.useRef)(!1),j={ref:o,onKeyDown(s){"Tab"==s.key&&(b.current=!0,_.requestAnimationFrame((()=>{b.current=!1})))},onBlur(s){let T=P(i);e.current instanceof HTMLElement&&T.add(e.current);let d=s.relatedTarget;d instanceof HTMLElement&&"true"!==d.dataset.headlessuiFocusGuard&&(S(T,d)||(b.current?(0,focus_management.jA)(e.current,(0,match.E)(v.current,{[use_tab_direction_s.Forwards]:()=>focus_management.TO.Next,[use_tab_direction_s.Backwards]:()=>focus_management.TO.Previous})|focus_management.TO.WrapAround,{relativeTo:s.target}):s.target instanceof HTMLElement&&(0,focus_management.C5)(s.target)))}};return react.createElement(react.Fragment,null,Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:internal_hidden.A.Focusable}),(0,render.sY)({ourProps:j,theirProps:l,defaultTag:"div",name:"FocusTrap"}),Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:internal_hidden.A.Focusable}))})),focus_trap_ge=Object.assign(z,{features:h}),focus_trap_a=[];function Y({ownerDocument:t},r){let e=function Q(t=!0){let r=(0,react.useRef)(focus_trap_a.slice());return(0,use_watch.q)((([e],[o])=>{!0===o&&!1===e&&(0,micro_task.Y)((()=>{r.current.splice(0)})),!1===o&&!0===e&&(r.current=focus_trap_a.slice())}),[t,focus_trap_a,r]),(0,use_event.z)((()=>{var e;return null!=(e=r.current.find((o=>null!=o&&o.isConnected)))?e:null}))}(r);(0,use_watch.q)((()=>{r||(null==t?void 0:t.activeElement)===(null==t?void 0:t.body)&&(0,focus_management.C5)(e())}),[r]),c((()=>{r&&(0,focus_management.C5)(e())}))}function S(t,r){for(let e of t)if(e.contains(r))return!0;return!1}!function t(n){function e(){"loading"!==document.readyState&&(n(),document.removeEventListener("DOMContentLoaded",e))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",e),e())}((()=>{function t(r){r.target instanceof HTMLElement&&r.target!==document.body&&focus_trap_a[0]!==r.target&&(focus_trap_a.unshift(r.target),focus_trap_a=focus_trap_a.filter((e=>null!=e&&e.isConnected)),focus_trap_a.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})}));var react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");let e=(0,react.createContext)(!1);function portal_force_root_l(){return(0,react.useContext)(e)}function portal_force_root_P(o){return react.createElement(e.Provider,{value:o.force},o.children)}var env=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let U=react.Fragment;let portal_S=react.Fragment,v=(0,react.createContext)(null);let f=(0,react.createContext)(null);function portal_ae(){let p=(0,react.useContext)(f),l=(0,react.useRef)([]),n=(0,use_event.z)((o=>(l.current.push(o),p&&p.register(o),()=>e(o)))),e=(0,use_event.z)((o=>{let t=l.current.indexOf(o);-1!==t&&l.current.splice(t,1),p&&p.unregister(o)})),a=(0,react.useMemo)((()=>({register:n,unregister:e,portals:l})),[n,e,l]);return[l,(0,react.useMemo)((()=>function({children:t}){return react.createElement(f.Provider,{value:a},t)}),[a])]}let D=(0,render.yV)((function N(p,l){let n=p,e=(0,react.useRef)(null),a=(0,use_sync_refs.T)((0,use_sync_refs.h)((u=>{e.current=u})),l),o=(0,use_owner.i)(e),t=function F(p){let l=portal_force_root_l(),n=(0,react.useContext)(v),e=(0,use_owner.i)(p),[a,o]=(0,react.useState)((()=>{if(!l&&null!==n||env.O.isServer)return null;let t=null==e?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(null===e)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)}));return(0,react.useEffect)((()=>{null!==a&&(null!=e&&e.body.contains(a)||null==e||e.body.appendChild(a))}),[a,e]),(0,react.useEffect)((()=>{l||null!==n&&o(n.current)}),[n,o,l]),a}(e),[r]=(0,react.useState)((()=>{var u;return env.O.isServer?null:null!=(u=null==o?void 0:o.createElement("div"))?u:null})),i=(0,react.useContext)(f),C=(0,use_server_handoff_complete.H)();return(0,use_iso_morphic_effect.e)((()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))}),[t,r]),(0,use_iso_morphic_effect.e)((()=>{if(r&&i)return i.register(r)}),[i,r]),c((()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&(null==(u=t.parentElement)||u.removeChild(t)))})),C&&t&&r?(0,react_dom.createPortal)((0,render.sY)({ourProps:{ref:a},theirProps:n,defaultTag:U,name:"Portal"}),r):null})),I=(0,render.yV)((function j(p,l){let{target:n,...e}=p,o={ref:(0,use_sync_refs.T)(l)};return react.createElement(v.Provider,{value:n},(0,render.sY)({ourProps:o,theirProps:e,defaultTag:portal_S,name:"Popover.Group"}))})),portal_pe=Object.assign(D,{Group:I});var description=__webpack_require__("./node_modules/@headlessui/react/dist/components/description/description.js"),open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js");let stack_context_a=(0,react.createContext)((()=>{}));stack_context_a.displayName="StackContext";var stack_context_s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(stack_context_s||{});function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=function x(){return(0,react.useContext)(stack_context_a)}(),o=(0,use_event.z)(((...t)=>{null==r||r(...t),l(...t)}));return(0,use_iso_morphic_effect.e)((()=>{let t=void 0===u||!0===u;return t&&o(0,e,n),()=>{t&&o(1,e,n)}}),[o,e,n,u]),react.createElement(stack_context_a.Provider,{value:o},i)}var use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");const useSyncExternalStoreShimClient_d="function"==typeof Object.is?Object.is:function i(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:u,useEffect:useSyncExternalStoreShimClient_h,useLayoutEffect:useSyncExternalStoreShimClient_f,useDebugValue:p}=react_namespaceObject;function r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!useSyncExternalStoreShimClient_d(c,a)}catch{return!0}}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;const use_sync_external_store_shim_a=(n=>n.useSyncExternalStore)(react_namespaceObject);var disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=(null!=(l=e.defaultView)?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}var platform=__webpack_require__("./node_modules/@headlessui/react/dist/utils/platform.js");function T(){if(!(0,platform.gn)())return{};let l;return{before(){l=window.pageYOffset},after({doc:o,d:t,meta:s}){function i(n){return s.containers.flatMap((e=>e())).some((e=>e.contains(n)))}t.microTask((()=>{if("auto"!==window.getComputedStyle(o.documentElement).scrollBehavior){let e=(0,disposables.k)();e.style(o.documentElement,"scroll-behavior","auto"),t.add((()=>t.microTask((()=>e.dispose()))))}t.style(o.body,"marginTop",`-${l}px`),window.scrollTo(0,0);let n=null;t.addEventListener(o,"click",(e=>{if(e.target instanceof HTMLElement)try{let r=e.target.closest("a");if(!r)return;let{hash:c}=new URL(r.href),a=o.querySelector(c);a&&!i(a)&&(n=a)}catch{}}),!0),t.addEventListener(o,"touchmove",(e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()}),{passive:!1}),t.add((()=>{window.scrollTo(0,window.pageYOffset+l),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)}))}))}}}function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=function store_a(o,r){let t=o(),n=new Set;return{getSnapshot:()=>t,subscribe:e=>(n.add(e),()=>n.delete(e)),dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach((c=>c())))}}}((()=>new Map),{PUSH(e,n){var o;let t=null!=(o=this.get(e))?o:{doc:e,count:0,d:(0,disposables.k)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[T(),adjust_scrollbar_padding_c(),{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}];c.forEach((({before:r})=>null==r?void 0:r(o))),c.forEach((({after:r})=>null==r?void 0:r(o)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function use_document_overflow_p(e,r,n){let f=function use_store_S(t){return use_sync_external_store_shim_a(t.subscribe,t.getSnapshot,t.getSnapshot)}(overflow_store_a),o=e?f.get(e):void 0,i=!!o&&o.count>0;return(0,use_iso_morphic_effect.e)((()=>{if(e&&r)return overflow_store_a.dispatch("PUSH",e,n),()=>overflow_store_a.dispatch("POP",e,n)}),[r,e]),i}overflow_store_a.subscribe((()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o="hidden"===n.get(t.doc),c=0!==t.count;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),0===t.count&&overflow_store_a.dispatch("TEARDOWN",t)}}));let use_inert_u=new Map,use_inert_t=new Map;function use_inert_h(r,l=!0){(0,use_iso_morphic_effect.e)((()=>{var o;if(!l)return;let e="function"==typeof r?r():r.current;if(!e)return;let f=null!=(o=use_inert_t.get(e))?o:0;return use_inert_t.set(e,f+1),0!==f||(use_inert_u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),function a(){var d;if(!e)return;let i=null!=(d=use_inert_t.get(e))?d:1;if(1===i?use_inert_t.delete(e):use_inert_t.set(e,i-1),1!==i)return;let n=use_inert_u.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,use_inert_u.delete(e))}}),[r,l])}var o,_e=((o=_e||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),Ie=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ie||{});let Me={0:(t,e)=>t.titleId===e.id?t:{...t,titleId:e.id}},dialog_I=(0,react.createContext)(null);function b(t){let e=(0,react.useContext)(dialog_I);if(null===e){let o=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,b),o}return e}function Be(t,e){return(0,match.E)(e.type,Me,t,e)}dialog_I.displayName="DialogContext";let Ge=render.AN.RenderStrategy|render.AN.Static;let Ve=(0,render.yV)((function Ne(t,e){var X;let o=(0,use_id.M)(),{id:i=`headlessui-dialog-${o}`,open:n,onClose:l,initialFocus:s,__demoMode:g=!1,...T}=t,[m,h]=(0,react.useState)(0),a=(0,open_closed.oJ)();void 0===n&&null!==a&&(n=(a&open_closed.ZM.Open)===open_closed.ZM.Open);let D=(0,react.useRef)(null),Q=(0,use_sync_refs.T)(D,e),f=(0,use_owner.i)(D),N=t.hasOwnProperty("open")||null!==a,U=t.hasOwnProperty("onClose");if(!N&&!U)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!N)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!U)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof n)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if("function"!=typeof l)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[S,Z]=(0,react.useReducer)(Be,{titleId:null,descriptionId:null,panelRef:(0,react.createRef)()}),P=(0,use_event.z)((()=>l(!1))),W=(0,use_event.z)((r=>Z({type:0,id:r}))),L=!!(0,use_server_handoff_complete.H)()&&(!g&&0===p),F=m>1,Y=null!==(0,react.useContext)(dialog_I),[ee,te]=portal_ae(),{resolveContainers:M,mainTreeNodeRef:k,MainTreeNode:oe}=function use_root_containers_j({defaultContainers:t=[],portals:r,mainTreeNodeRef:u}={}){var c;let o=(0,react.useRef)(null!=(c=null==u?void 0:u.current)?c:null),l=(0,use_owner.i)(o),f=(0,use_event.z)((()=>{var i;let n=[];for(let e of t)null!==e&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(null!=r&&r.current)for(let e of r.current)n.push(e);for(let e of null!=(i=null==l?void 0:l.querySelectorAll("html > *, body > *"))?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(o.current)||n.some((T=>e.contains(T)))||n.push(e));return n}));return{resolveContainers:f,contains:(0,use_event.z)((n=>f().some((i=>i.contains(n))))),mainTreeNodeRef:o,MainTreeNode:(0,react.useMemo)((()=>function(){return null!=u?null:react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:o})}),[o,u])}}({portals:ee,defaultContainers:[null!=(X=S.panelRef.current)?X:D.current]}),re=F?"parent":"leaf",$=null!==a&&(a&open_closed.ZM.Closing)===open_closed.ZM.Closing,ne=!Y&&!$&&L,le=(0,react.useCallback)((()=>{var r,c;return null!=(c=Array.from(null!=(r=null==f?void 0:f.querySelectorAll("body > *"))?r:[]).find((d=>"headlessui-portal-root"!==d.id&&(d.contains(k.current)&&d instanceof HTMLElement))))?c:null}),[k]);use_inert_h(le,ne);let ae=!!F||L,ie=(0,react.useCallback)((()=>{var r,c;return null!=(c=Array.from(null!=(r=null==f?void 0:f.querySelectorAll("[data-headlessui-portal]"))?r:[]).find((d=>d.contains(k.current)&&d instanceof HTMLElement)))?c:null}),[k]);use_inert_h(ie,ae);let se=!(!L||F);(0,use_outside_click.O)(M,P,se);let pe=!(F||0!==p);E(null==f?void 0:f.defaultView,"keydown",(r=>{pe&&(r.defaultPrevented||r.key===keyboard.R.Escape&&(r.preventDefault(),r.stopPropagation(),P()))})),function we(t,e,o=(()=>[document.body])){use_document_overflow_p(t,e,(i=>{var n;return{containers:[...null!=(n=i.containers)?n:[],o]}}))}(f,!($||0!==p||Y),M),(0,react.useEffect)((()=>{if(0!==p||!D.current)return;let r=new ResizeObserver((c=>{for(let d of c){let x=d.target.getBoundingClientRect();0===x.x&&0===x.y&&0===x.width&&0===x.height&&P()}}));return r.observe(D.current),()=>r.disconnect()}),[p,D,P]);let[ue,fe]=(0,description.f)(),ge=(0,react.useMemo)((()=>[{dialogState:p,close:P,setTitleId:W},S]),[p,S,P,W]),J=(0,react.useMemo)((()=>({open:0===p})),[p]),Te={ref:Q,id:i,role:"dialog","aria-modal":0===p||void 0,"aria-labelledby":S.titleId,"aria-describedby":ue};return react.createElement(stack_context_M,{type:"Dialog",enabled:0===p,element:D,onUpdate:(0,use_event.z)(((r,c)=>{"Dialog"===c&&(0,match.E)(r,{[stack_context_s.Add]:()=>h((d=>d+1)),[stack_context_s.Remove]:()=>h((d=>d-1))})}))},react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_pe,null,react.createElement(dialog_I.Provider,{value:ge},react.createElement(portal_pe.Group,{target:D},react.createElement(portal_force_root_P,{force:!1},react.createElement(fe,{slot:J,name:"Dialog.Description"},react.createElement(focus_trap_ge,{initialFocus:s,containers:M,features:L?(0,match.E)(re,{parent:focus_trap_ge.features.RestoreFocus,leaf:focus_trap_ge.features.All&~focus_trap_ge.features.FocusLock}):focus_trap_ge.features.None},react.createElement(te,null,(0,render.sY)({ourProps:Te,theirProps:T,slot:J,defaultTag:"div",features:Ge,visible:0===p,name:"Dialog"}))))))))),react.createElement(oe,null))})),qe=(0,render.yV)((function $e(t,e){let o=(0,use_id.M)(),{id:i=`headlessui-dialog-backdrop-${o}`,...n}=t,[{dialogState:l},s]=b("Dialog.Backdrop"),g=(0,use_sync_refs.T)(e);(0,react.useEffect)((()=>{if(null===s.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[s.panelRef]);let T=(0,react.useMemo)((()=>({open:0===l})),[l]);return react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_pe,null,(0,render.sY)({ourProps:{ref:g,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:"div",name:"Dialog.Backdrop"})))})),ze=(0,render.yV)((function Xe(t,e){let o=(0,use_id.M)(),{id:i=`headlessui-dialog-panel-${o}`,...n}=t,[{dialogState:l},s]=b("Dialog.Panel"),g=(0,use_sync_refs.T)(e,s.panelRef),T=(0,react.useMemo)((()=>({open:0===l})),[l]),m=(0,use_event.z)((a=>{a.stopPropagation()}));return(0,render.sY)({ourProps:{ref:g,id:i,onClick:m},theirProps:n,slot:T,defaultTag:"div",name:"Dialog.Panel"})})),Qe=(0,render.yV)((function We(t,e){let o=(0,use_id.M)(),{id:i=`headlessui-dialog-overlay-${o}`,...n}=t,[{dialogState:l,close:s}]=b("Dialog.Overlay"),g=(0,use_sync_refs.T)(e),T=(0,use_event.z)((a=>{if(a.target===a.currentTarget){if((0,bugs.P)(a.currentTarget))return a.preventDefault();a.preventDefault(),a.stopPropagation(),s()}})),m=(0,react.useMemo)((()=>({open:0===l})),[l]);return(0,render.sY)({ourProps:{ref:g,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:"div",name:"Dialog.Overlay"})})),Ze=(0,render.yV)((function Ke(t,e){let o=(0,use_id.M)(),{id:i=`headlessui-dialog-title-${o}`,...n}=t,[{dialogState:l,setTitleId:s}]=b("Dialog.Title"),g=(0,use_sync_refs.T)(e);(0,react.useEffect)((()=>(s(i),()=>s(null))),[i,s]);let T=(0,react.useMemo)((()=>({open:0===l})),[l]);return(0,render.sY)({ourProps:{ref:g,id:i},theirProps:n,slot:T,defaultTag:"h2",name:"Dialog.Title"})})),_t=Object.assign(Ve,{Backdrop:qe,Panel:ze,Overlay:Qe,Title:Ze,Description:description.d})},"./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XMarkIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);