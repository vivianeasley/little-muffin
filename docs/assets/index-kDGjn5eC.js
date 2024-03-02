var et=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var S=(t,e,n)=>(et(t,e,"read from private field"),n?n.call(t):e.get(t)),R=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},z=(t,e,n,o)=>(et(t,e,"write to private field"),o?o.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Tt={BASE_URL:"/little-muffin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const nt=t=>{let e;const n=new Set,o=(l,a)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const f=e;e=a??(typeof u!="object"||u===null)?u:Object.assign({},e,u),n.forEach(p=>p(e,f))}},i=()=>e,c={setState:o,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(Tt?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(o,i,c),c},kt=t=>t?nt(t):nt;var T=window.CustomEvent;(!T||typeof T=="object")&&(T=function(e,n){n=n||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail||null),o},T.prototype=window.Event.prototype);function ct(t,e){var n="on"+e.type.toLowerCase();return typeof t[n]=="function"&&t[n](e),t.dispatchEvent(e)}function xt(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),n=function(o,i){return!(e[o]===void 0||e[o]===i)};if(e.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||e.isolation==="isolate"||e.position==="fixed"||e.webkitOverflowScrolling==="touch")return!0;t=t.parentElement}return!1}function x(t){for(;t;){if(t.localName==="dialog")return t;t.parentElement?t=t.parentElement:t.parentNode?t=t.parentNode.host:t=null}return null}function ut(t){for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}function Nt(t,e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1}function j(t){return!t||!t.hasAttribute("method")?!1:t.getAttribute("method").toLowerCase()==="dialog"}function dt(t){var e=["button","input","keygen","select","textarea"],n=e.map(function(s){return s+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=t.querySelector(n.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var i=t.querySelectorAll("*"),r=0;r<i.length&&!(i[r].tagName&&i[r].shadowRoot&&(o=dt(i[r].shadowRoot),o));r++);return o}function ot(t){return t.isConnected||document.body.contains(t)}function ft(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var n=m.formSubmitter;if(!n){var o=t.target,i="getRootNode"in o&&o.getRootNode()||document;n=i.activeElement}return!n||n.form!==e?null:n}function Ot(t){if(!t.defaultPrevented){var e=t.target,n=m.imagemapUseValue,o=ft(t);n===null&&o&&(n=o.value);var i=x(e);if(i){var r=o&&o.getAttribute("formmethod")||e.getAttribute("method");r==="dialog"&&(t.preventDefault(),n!=null?i.close(n):i.close())}}}function ht(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",Ot,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window){var e=new MutationObserver(this.maybeHideModal.bind(this));e.observe(t,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,o=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),i,r=function(s){if(s.target===t){var c="DOMNodeRemoved";n|=s.type.substr(0,c.length)===c,window.clearTimeout(i),i=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){t.addEventListener(s,r)})}Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}ht.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ot(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),m.dm.removeDialog(this))},setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var n=document.createEvent("MouseEvents");n.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(n),t.stopPropagation()},focus_:function(){var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=dt(this.dialog_)),ut(document.activeElement),t&&t.focus()},updateZIndex:function(t,e){if(t<e)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ot(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!m.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");xt(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,m.needsCentering(this.dialog_)?(m.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),t!==void 0&&(this.dialog_.returnValue=t);var e=new T("close",{bubbles:!1,cancelable:!1});ct(this.dialog_,e)}};var m={};m.reposition=function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,n=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,n)+"px"};m.isInlinePositionSetByStylesheet=function(t){for(var e=0;e<document.styleSheets.length;++e){var n=document.styleSheets[e],o=null;try{o=n.cssRules}catch{}if(o)for(var i=0;i<o.length;++i){var r=o[i],s=null;try{s=document.querySelectorAll(r.selectorText)}catch{}if(!(!s||!Nt(s,t))){var c=r.style.getPropertyValue("top"),l=r.style.getPropertyValue("bottom");if(c&&c!=="auto"||l&&l!=="auto")return!0}}}return!1};m.needsCentering=function(t){var e=window.getComputedStyle(t);return e.position!=="absolute"||t.style.top!=="auto"&&t.style.top!==""||t.style.bottom!=="auto"&&t.style.bottom!==""?!1:!m.isInlinePositionSetByStylesheet(t)};m.forceRegisterDialog=function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),t.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new ht(t)};m.registerDialog=function(t){t.showModal||m.forceRegisterDialog(t)};m.DialogManager=function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(e){var n=[];e.forEach(function(o){for(var i=0,r;r=o.removedNodes[i];++i){if(r instanceof Element)r.localName==="dialog"&&n.push(r);else continue;n=n.concat(r.querySelectorAll("dialog"))}}),n.length&&t(n)}))};m.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};m.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};m.DialogManager.prototype.updateStacking=function(){for(var t=this.zIndexHigh_,e=0,n;n=this.pendingDialogStack[e];++e)n.updateZIndex(--t,--t),e===0&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];if(o){var i=o.dialog.parentNode||document.body;i.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};m.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=x(t);){for(var e=0,n;n=this.pendingDialogStack[e];++e)if(n.dialog===t)return e===0;t=t.parentElement}return!1};m.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),ut(e),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],o=n.dialog,i=o.compareDocumentPosition(e);return i&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}};m.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,t.keyCode===27){t.preventDefault(),t.stopPropagation();var e=new T("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&ct(n.dialog,e)&&n.dialog.close()}else t.keyCode===9&&(this.forwardTab_=!t.shiftKey)};m.DialogManager.prototype.checkDOM_=function(t){var e=this.pendingDialogStack.slice();e.forEach(function(n){t.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};m.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=e?!1:(this.pendingDialogStack.unshift(t)===1&&this.blockDocument(),this.updateStacking(),!0)};m.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);e!==-1&&(this.pendingDialogStack.splice(e,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};m.dm=new m.DialogManager;m.formSubmitter=null;m.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var it=document.createElement("form");if(it.setAttribute("method","dialog"),it.method!=="dialog"){var M=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(M){var At=M.get;M.get=function(){return j(this)?"dialog":At.call(this)};var It=M.set;M.set=function(t){return typeof t=="string"&&t.toLowerCase()==="dialog"?this.setAttribute("method",t):It.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",M)}}document.addEventListener("click",function(t){if(m.formSubmitter=null,m.imagemapUseValue=null,!t.defaultPrevented){var e=t.target;if("composedPath"in t){var n=t.composedPath();e=n.shift()||e}if(!(!e||!j(e.form))){var o=e.type==="submit"&&["button","input"].indexOf(e.localName)>-1;if(!o){if(!(e.localName==="input"&&e.type==="image"))return;m.imagemapUseValue=t.offsetX+","+t.offsetY}var i=x(e);i&&(m.formSubmitter=e)}}},!1),document.addEventListener("submit",function(t){var e=t.target,n=x(e);if(!n){var o=ft(t),i=o&&o.getAttribute("formmethod")||e.getAttribute("method");i==="dialog"&&t.preventDefault()}});var Pt=HTMLFormElement.prototype.submit,Lt=function(){if(!j(this))return Pt.call(this);var t=x(this);t&&t.close()};HTMLFormElement.prototype.submit=Lt}var Ct={BASE_URL:"/little-muffin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function mt(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var r;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),c=(r=n.getItem(i))!=null?r:null;return c instanceof Promise?c.then(s):s(c)},setItem:(i,r)=>n.setItem(i,JSON.stringify(r,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const N=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(o){return N(o)(n)},catch(o){return this}}}catch(n){return{then(o){return this},catch(o){return N(o)(n)}}}},$t=(t,e)=>(n,o,i)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:d=>d,version:0,merge:(d,y)=>({...y,...d}),...e},s=!1;const c=new Set,l=new Set;let a;try{a=r.getStorage()}catch{}if(!a)return t((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...d)},o,i);const u=N(r.serialize),f=()=>{const d=r.partialize({...o()});let y;const h=u({state:d,version:r.version}).then(w=>a.setItem(r.name,w)).catch(w=>{y=w});if(y)throw y;return h},p=i.setState;i.setState=(d,y)=>{p(d,y),f()};const b=t((...d)=>{n(...d),f()},o,i);let v;const g=()=>{var d;if(!a)return;s=!1,c.forEach(h=>h(o()));const y=((d=r.onRehydrateStorage)==null?void 0:d.call(r,o()))||void 0;return N(a.getItem.bind(a))(r.name).then(h=>{if(h)return r.deserialize(h)}).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==r.version){if(r.migrate)return r.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return v=r.merge(h,(w=o())!=null?w:b),n(v,!0),f()}).then(()=>{y==null||y(v,void 0),s=!0,l.forEach(h=>h(v))}).catch(h=>{y==null||y(void 0,h)})};return i.persist={setOptions:d=>{r={...r,...d},d.getStorage&&(a=d.getStorage())},clearStorage:()=>{a==null||a.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:d=>(c.add(d),()=>{c.delete(d)}),onFinishHydration:d=>(l.add(d),()=>{l.delete(d)})},g(),v||b},Ht=(t,e)=>(n,o,i)=>{let r={storage:mt(()=>localStorage),partialize:g=>g,version:0,merge:(g,d)=>({...d,...g}),...e},s=!1;const c=new Set,l=new Set;let a=r.storage;if(!a)return t((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...g)},o,i);const u=()=>{const g=r.partialize({...o()});return a.setItem(r.name,{state:g,version:r.version})},f=i.setState;i.setState=(g,d)=>{f(g,d),u()};const p=t((...g)=>{n(...g),u()},o,i);let b;const v=()=>{var g,d;if(!a)return;s=!1,c.forEach(h=>{var w;return h((w=o())!=null?w:p)});const y=((d=r.onRehydrateStorage)==null?void 0:d.call(r,(g=o())!=null?g:p))||void 0;return N(a.getItem.bind(a))(r.name).then(h=>{if(h)if(typeof h.version=="number"&&h.version!==r.version){if(r.migrate)return r.migrate(h.state,h.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return h.state}).then(h=>{var w;return b=r.merge(h,(w=o())!=null?w:p),n(b,!0),u()}).then(()=>{y==null||y(b,void 0),b=o(),s=!0,l.forEach(h=>h(b))}).catch(h=>{y==null||y(void 0,h)})};return i.persist={setOptions:g=>{r={...r,...g},g.storage&&(a=g.storage)},clearStorage:()=>{a==null||a.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:g=>(c.add(g),()=>{c.delete(g)}),onFinishHydration:g=>(l.add(g),()=>{l.delete(g)})},r.skipHydration||v(),b||p},Ft=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Ct?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),$t(t,e)):Ht(t,e),Rt=Ft,C=[10,25,45,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800,840,880,920,960,1e3,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1440,1480,1520,1560,1600,1640,1680,1720,1760,1800,1840,1880,1920,1960,2e3,2040,2080,2120,2160,2200,2240,2280,2320,2360,2400,2440,2480,2520,2560,2600,2640,2680,2720,2760,2800,2840,2880,2920,2960,3e3,3040,3080,3120,3160,3200,3240,3280,3320,3360,3400,3440,3480,3520,3560,3600,3640,3680,3720,3760,3800,3840],L=t=>{for(let e=0;e<C.length;e++)if(t<C[e])return e},zt={muffinLvl:1,muffinXP:0,weeklyXP:0,muffin:1,muffinTimestamp:void 0,sinceMuffinTimestamp:void 0},jt=86400,J=kt(Rt((t,e)=>({state:{...zt},addPoints:n=>{const o=e().state;if(o.muffinXP+=n,o.sinceMuffinTimestamp||(o.sinceMuffinTimestamp=Date.now()),Date.now()-o.muffinTimestamp>jt){const r=Math.floor(Date.now()-o.muffinTimestamp);o.muffin-=r,o.muffin<1&&(o.muffin=1)}o.muffinTimestamp=Date.now();const i=L(o.muffinXP);if(o.muffinXP+=n,o.muffinLvl=L(o.muffinXP),i<L(o.muffinXP)&&o.muffin<5&&o.muffin++,o.muffinXP>=C[C.length-2]&&alert(`You have won "I'm just a little muffin"! You have reached max level and will not be able to level again without the game exploding. Please create a new character. Honestly, I had no idea somone would play this enough to reach this level. Congratulations!`),n===30){window.confettiBomb(),new Audio("./lvl.mp3").play();const s=document.getElementById("dialog-level-up");m.registerDialog(s),s.showModal()}else new Audio("./xp.mp3").play();t({state:o})},resetGame:()=>{const n=e().state;n.image=void 0,n.muffinLvl=1,n.muffinXP=0,n.muffin=1,n.muffinTimestamp=void 0,n.sinceMuffinTimestamp=void 0,t({state:n})}}),{name:"little-muffin-storage",storage:mt(()=>localStorage)})),{isArray:V}=Array,{getPrototypeOf:Bt,getOwnPropertyDescriptor:Xt}=Object,Wt="http://www.w3.org/2000/svg",_=[],pt=()=>document.createRange(),Z=(t,e,n)=>(t.set(e,n),n),Kt=(t,e)=>{let n;do n=Xt(t,e);while(!n&&(t=Bt(t)));return n},Ut=(t,e,n)=>({c:t,e,l:n}),Yt=()=>({n:null}),Gt=(t,e,n,o)=>({v:t,u:e,t:n,n:o}),B=(t,e,n,o="")=>({t,p:e,u:n,n:o}),Y=t=>({s:t,t:null,n:null,d:_}),qt=(t,e)=>({n:t,d:e}),Jt=2,Vt=3,G=8,Zt=11;/*! (c) Andrea Giammarchi - ISC */const{setPrototypeOf:Qt}=Object,te=t=>{function e(n){return Qt(n,new.target.prototype)}return e.prototype=t.prototype,e};let D;const ee=(t,e,n)=>(D||(D=pt()),n?D.setStartAfter(t):D.setStartBefore(t),D.setEndAfter(e),D.deleteContents(),t),q=({firstChild:t,lastChild:e},n)=>ee(t,e,n);let gt=!1;const ne=(t,e)=>gt&&t.nodeType===Zt?1/e<0?e?q(t,!0):t.lastChild:e?t.valueOf():t.firstChild:t;var E,O;class oe extends te(DocumentFragment){constructor(n){const o=[...n.childNodes];super(n);R(this,E,void 0);R(this,O,void 0);z(this,E,o),z(this,O,o.length),gt=!0}get firstChild(){return S(this,E)[0]}get lastChild(){return S(this,E).at(-1)}get parentNode(){return S(this,E)[0].parentNode}remove(){q(this,!1)}replaceWith(n){q(this,!0).replaceWith(n)}valueOf(){return this.childNodes.length!==S(this,O)&&this.replaceChildren(...S(this,E)),this}}E=new WeakMap,O=new WeakMap;const ie=(t,e)=>e.reduceRight(re,t),re=(t,e)=>t.childNodes[e],bt=t=>(e,n)=>{const{c:o,e:i,l:r}=t(e,n),s=o.cloneNode(!0);let c,l,a=i.length,u=a?i.slice(0):_;for(;a--;){const{t:f,p,u:b,n:v}=i[a],g=p===l?c:c=ie(s,l=p),d=f===G?b():b;u[a]=Gt(d(g,n[a],v,_),d,g,v)}return qt(r===1?s.firstChild||c:new oe(s),u)},se=/^(?:plaintext|script|style|textarea|title|xmp)$/i,ae=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;/*! (c) Andrea Giammarchi - ISC */const le=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,ce=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,ue=/[\x01\x02]/g,de=(t,e,n)=>{let o=0;return t.join("").trim().replace(le,(i,r,s,c)=>`<${r}${s.replace(ce,"=$2$1").trimEnd()}${c?n||ae.test(r)?" /":`></${r}`:""}>`).replace(ue,i=>i===""?`<!--${e+o++}-->`:e+o++)},fe=(t,e,n,o,i)=>{const r=n.length;let s=e.length,c=r,l=0,a=0,u=null;for(;l<s||a<c;)if(s===l){const f=c<r?a?o(n[a-1],-0).nextSibling:o(n[c-a],0):i;for(;a<c;)t.insertBefore(o(n[a++],1),f)}else if(c===a)for(;l<s;)(!u||!u.has(e[l]))&&t.removeChild(o(e[l],-1)),l++;else if(e[l]===n[a])l++,a++;else if(e[s-1]===n[c-1])s--,c--;else if(e[l]===n[c-1]&&n[a]===e[s-1]){const f=o(e[--s],-1).nextSibling;t.insertBefore(o(n[a++],1),o(e[l++],-1).nextSibling),t.insertBefore(o(n[--c],1),f),e[s]=n[c]}else{if(!u){u=new Map;let f=a;for(;f<c;)u.set(n[f],f++)}if(u.has(e[l])){const f=u.get(e[l]);if(a<f&&f<c){let p=l,b=1;for(;++p<s&&p<c&&u.get(e[p])===f+b;)b++;if(b>f-a){const v=o(e[l],0);for(;a<f;)t.insertBefore(o(n[a++],1),v)}else t.replaceChild(o(n[a++],1),o(e[l++],-1))}else l++}else t.removeChild(o(e[l++],-1))}return n},yt=(t,e,n)=>t.setAttribute(e,n),H=(t,e)=>t.removeAttribute(e),he=(t,e)=>{for(const n in e){const o=e[n],i=n==="role"?n:`aria-${n}`;o==null?H(t,i):yt(t,i,o)}return e},me=()=>_e;let A;const pe=(t,e,n)=>{n=n.slice(1),A||(A=new WeakMap);const o=A.get(t)||Z(A,t,{});let i=o[n];return i&&i[0]&&t.removeEventListener(n,...i),i=V(e)?e:[e,!1],o[n]=i,i[0]&&t.addEventListener(n,...i),e};function ge(t,e){const n=this.n||(this.n=t);switch(typeof e){case"string":case"number":case"boolean":{n!==t&&n.replaceWith(this.n=t),this.n.data=e;break}case"object":case"undefined":{e==null?(this.n=t).data="":this.n=e.valueOf(),n.replaceWith(this.n);break}}return e}const rt=()=>ge.bind(Yt()),be=(t,e)=>Q(t,e,e==null?"class":"className"),ye=(t,e)=>{const{dataset:n}=t;for(const o in e)e[o]==null?delete n[o]:n[o]=e[o];return e},F=(t,e,n)=>t[n]=e,ve=(t,e,n)=>F(t,e,n.slice(1)),Q=(t,e,n)=>e==null?(H(t,n),e):F(t,e,n),vt=(t,e)=>(typeof e=="function"?e(t):e.current=t,e),X=(t,e,n)=>(e==null?H(t,n):yt(t,n,e),e),we=(t,e)=>e==null?Q(t,e,"style"):F(t.style,e,"cssText"),Ee=(t,e,n)=>(t.toggleAttribute(n.slice(1),e),e),_e=(t,e,n,o)=>fe(t.parentNode,o,e.length?e:_,ne,t),Se=new Map([["aria",he],["class",be],["data",ye],["ref",vt],["style",we]]),Me=(t,e,n)=>{var o;switch(e[0]){case".":return ve;case"?":return Ee;case"@":return pe;default:return n||"ownerSVGElement"in t?e==="ref"?vt:X:Se.get(e)||(e in t?e.startsWith("on")?F:(o=Kt(t,e))!=null&&o.set?Q:X:X)}},De=(t,e)=>(t.textContent=e??"",e);let I=document.createElement("template"),W,K;const Te=(t,e)=>{if(e)return W||(W=document.createElementNS(Wt,"svg"),K=pt(),K.selectNodeContents(W)),K.createContextualFragment(t);I.innerHTML=t;const{content:n}=I;return I=I.cloneNode(!1),n},U=t=>{const e=[];let n;for(;n=t.parentNode;)e.push(e.indexOf.call(n.childNodes,t)),t=n;return e},ke=(t,e,n)=>{const o=Te(de(t,k,n),n),{length:i}=t;let r=!1,s=_;if(i>1){const l=document.createTreeWalker(o,129),a=[];let u=0,f=`${k}${u++}`;for(s=[];u<i;){const p=l.nextNode();if(p.nodeType===G){if(p.data===f){let b=V(e[u-1])?me:rt;b===rt?a.push(p):r=!0,s.push(B(G,U(p),b)),f=`${k}${u++}`}}else{let b;for(;p.hasAttribute(f);){b||(b=U(p));const v=p.getAttribute(f);s.push(B(Jt,b,Me(p,v,n),v)),H(p,f),f=`${k}${u++}`}se.test(p.localName)&&p.textContent.trim()===`<!--${f}-->`&&(s.push(B(Vt,b||U(p),De)),f=`${k}${u++}`)}}for(u=0;u<a.length;u++)a[u].replaceWith(document.createTextNode(""))}const c=o.childNodes.length;return Z(wt,t,Ut(o,s,c===1&&r?0:c))},wt=new WeakMap,k="isµ",Et=t=>(e,n)=>wt.get(e)||ke(e,n,t),xe=bt(Et(!1)),Ne=bt(Et(!0)),_t=(t,{s:e,t:n,v:o})=>{o.length&&t.s===_&&(t.s=[]);const i=St(t,o);if(t.t!==n){const{n:r,d:s}=(e?Ne:xe)(n,o);t.t=n,t.n=r,t.d=s}else{const{d:r}=t;for(let s=0;s<i;s++){const c=o[s],l=r[s],{v:a}=l;if(c!==a){const{u,t:f,n:p}=l;l.v=u(f,c,p,a)}}}return t.n},St=({s:t},e)=>{const{length:n}=e;for(let o=0;o<n;o++){const i=e[o];i instanceof Mt?e[o]=_t(t[o]||(t[o]=Y(_)),i):V(i)?St(t[o]||(t[o]=Y([])),i):t[o]=null}return n<t.length&&t.splice(n),n};class Mt{constructor(e,n,o){this.s=e,this.t=n,this.v=o}}const st=new WeakMap,Oe=(t,e)=>{const n=st.get(t)||Z(st,t,Y(_));return n.n!==_t(n,typeof e=="function"?e():e)&&t.replaceChildren(n.n),t};/*! (c) Andrea Giammarchi - MIT */const Ae=t=>(e,...n)=>new Mt(t,e,n),$=Ae(!1),{getState:tt}=J,Ie=tt().state,P=tt().addPoints,Pe=tt().resetGame,Le=()=>$`
<div>
  <div class="nes-container muffin-wrapper">
    <img class="muffin-img" src=${`./little-muffin/muffins/${Ie.muffin}.png`} />
    <div>
      <div>
      <button type="button" class="nes-btn is-success muffin-button" onclick=${()=>P(5)}>
      <span class="muffin-coin">5x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Just a little muffin</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>P(10)}>
      <span class="muffin-coin">10x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Why a little muffin?</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>P(15)}>
      <span class="muffin-coin">15x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Mean to a muffin?</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>P(30)}>
      <span class="muffin-coin">30x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Muffin compassion!</span>
      </button>
      <div onclick=${()=>{const t=document.getElementById("dialog-help");m.registerDialog(t),t.showModal()}}>
        Help?
      </div>
    </div>
  </div>
  <dialog class="nes-dialog" id="dialog-help">
      <form method="dialog">
          <p class="title">How to play "I'm just a little muffin"</p>
          <p>
            <b>Just a little muffin (5 points):</b><br/>
            If you have done something and you are feeling bad about yourself, ashamed, or guilty, cut yourself a break and say to yourself "I'm just a little muffin". This can also be applied to other people. Someone cuts you off in traffic. Try to say "They're just a little muffin" and score 5 points!
          </p>
          <p>
          <b>Why a little muffin (10 points):</b><br/>
            Explain why you or someone else is just a little muffin. For example you spent too much time on your phone and now feel bad about yourself. Tell yourself, "I'm just a little muffin seeking dopamine. I'm doing my best".
          </p>
          <p>
          <b>Mean to a muffin? (15 points):</b><br/>
            If you've thought mean things about yourself or had an inner voice say mean or judgmental things to you, instead reframe it. Would you say those things to someone you loved? Would someone who you cared about deserve that? 
          </p>
          <p>
          <b>Muffin compassion! (30 points):</b><br/>
            Talk to yourself with compassion as you would talk to someone you cared deeply about. Talk with undertsanding, support, and love.
          </p>
          <p>
            <button onclick=${Pe}>Reset Game</button>
          </p>
          <menu class="dialog-menu">
              <button class="nes-btn is-primary" onclick=${()=>console.log("done")}>Thanks!</button>
          </menu>
      </form>
  </dialog>
  <div>
</div>

`,at=["You're amazing! Keep at it!","You are good person who deserves love!","You're 1 in a million. Keep up the good work."],{getState:Ce}=J,lt=Ce().state,$e=()=>$`
    <div class="game-wrapper">
        <div class="background"></div>
        <header>
            <div class="stats">
                <span><i class="nes-icon coin is-small"></i></i> XP:${lt.muffinXP}</span>
                <span><i class="nes-icon is-small star"></i> LVL:${L(lt.muffinXP)}</span>
            </div>
        </header>
        <main>
            ${$`${Le()}`}
        </main>
        <dialog class="nes-dialog" id="dialog-level-up">
            <form method="dialog">
            <p class="title">You are doing great!</p>
            <p>${at[Math.floor(Math.random()*at.length)]}</p>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary">Yay</button>
            </menu>
            </form>
        </dialog>

    </div>
`,He=document.querySelector("#app"),{subscribe:Fe,getState:Re}=J;Re().state;window.addEventListener("load",Dt);Fe(Dt);async function Dt(){Oe(He,$`${$e()}`)}
