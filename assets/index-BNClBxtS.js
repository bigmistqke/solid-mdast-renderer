(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Hn=(t,e)=>t===e,xt=Symbol("solid-proxy"),We=Symbol("solid-track"),we={equals:Hn};let Vn=Jn;const yt=1,Ie=2,Un={owned:null,cleanups:null,context:null,owner:null};var U=null;let De=null,Yi=null,Q=null,lt=null,It=null,Ee=0;function ee(t,e){const n=Q,i=U,r=t.length===0,o=e===void 0?i:e,l=r?Un:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=r?t:()=>t(()=>ht(()=>Le(l)));U=l,Q=null;try{return zt(a,!0)}finally{Q=n,U=i}}function Et(t,e){e=e?Object.assign({},we,e):we;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Yn(n,r));return[Kn.bind(n),i]}function ot(t,e,n){const i=Fe(t,e,!1,yt);Wt(i)}function rn(t,e,n){Vn=nr;const i=Fe(t,e,!1,yt);i.user=!0,It?It.push(i):Wt(i)}function Z(t,e,n){n=n?Object.assign({},we,n):we;const i=Fe(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Wt(i),Kn.bind(i)}function Ji(t,e=Hn,n){const i=new Map,r=Fe(o=>{const l=t();for(const[a,s]of i.entries())if(e(a,l)!==e(a,o))for(const u of s.values())u.state=yt,u.pure?lt.push(u):It.push(u);return l},void 0,!0,yt);return Wt(r),o=>{const l=Q;if(l){let a;(a=i.get(o))?a.add(l):i.set(o,a=new Set([l])),_e(()=>{a.delete(l),!a.size&&i.delete(o)})}return e(o,r.value)}}function Wn(t){return zt(t,!1)}function ht(t){if(Q===null)return t();const e=Q;Q=null;try{return t()}finally{Q=e}}function ln(t,e,n){const i=Array.isArray(t);let r,o=n&&n.defer;return l=>{let a;if(i){a=Array(t.length);for(let u=0;u<t.length;u++)a[u]=t[u]()}else a=t();if(o)return o=!1,l;const s=ht(()=>e(a,r,l));return r=a,s}}function Xi(t){rn(()=>ht(t))}function _e(t){return U===null||(U.cleanups===null?U.cleanups=[t]:U.cleanups.push(t)),t}function Qe(){return Q}function Qn(){return U}function Gn(t,e){const n=U,i=Q;U=t,Q=null;try{return zt(e,!0)}catch(r){an(r)}finally{U=n,Q=i}}function Zi(t){const e=Q,n=U;return Promise.resolve().then(()=>{Q=e,U=n;let i;return zt(t,!1),Q=U=null,i?i.done:void 0})}function se(t,e){const n=Symbol("context");return{id:n,Provider:rr(n),defaultValue:t}}function ue(t){return U&&U.context&&U.context[t.id]!==void 0?U.context[t.id]:t.defaultValue}function on(t){const e=Z(t),n=Z(()=>Ge(e()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Kn(){if(this.sources&&this.state)if(this.state===yt)Wt(this);else{const t=lt;lt=null,zt(()=>ke(this),!1),lt=t}if(Q){const t=this.observers?this.observers.length:0;Q.sources?(Q.sources.push(this),Q.sourceSlots.push(t)):(Q.sources=[this],Q.sourceSlots=[t]),this.observers?(this.observers.push(Q),this.observerSlots.push(Q.sources.length-1)):(this.observers=[Q],this.observerSlots=[Q.sources.length-1])}return this.value}function Yn(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&zt(()=>{for(let r=0;r<t.observers.length;r+=1){const o=t.observers[r],l=De&&De.running;l&&De.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?lt.push(o):It.push(o),o.observers&&Xn(o)),l||(o.state=yt)}if(lt.length>1e6)throw lt=[],new Error},!1)),e}function Wt(t){if(!t.fn)return;Le(t);const e=Ee;tr(t,t.value,e)}function tr(t,e,n){let i;const r=U,o=Q;Q=U=t;try{i=t.fn(e)}catch(l){return t.pure&&(t.state=yt,t.owned&&t.owned.forEach(Le),t.owned=null),t.updatedAt=n+1,an(l)}finally{Q=o,U=r}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Yn(t,i):t.value=i,t.updatedAt=n)}function Fe(t,e,n,i=yt,r){const o={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:U,context:U?U.context:null,pure:n};return U===null||U!==Un&&(U.owned?U.owned.push(o):U.owned=[o]),o}function ye(t){if(t.state===0)return;if(t.state===Ie)return ke(t);if(t.suspense&&ht(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Ee);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===yt)Wt(t);else if(t.state===Ie){const i=lt;lt=null,zt(()=>ke(t,e[0]),!1),lt=i}}function zt(t,e){if(lt)return t();let n=!1;e||(lt=[]),It?n=!0:It=[],Ee++;try{const i=t();return er(n),i}catch(i){n||(It=null),lt=null,an(i)}}function er(t){if(lt&&(Jn(lt),lt=null),t)return;const e=It;It=null,e.length&&zt(()=>Vn(e),!1)}function Jn(t){for(let e=0;e<t.length;e++)ye(t[e])}function nr(t){let e,n=0;for(e=0;e<t.length;e++){const i=t[e];i.user?t[n++]=i:ye(i)}for(e=0;e<n;e++)ye(t[e])}function ke(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const r=i.state;r===yt?i!==e&&(!i.updatedAt||i.updatedAt<Ee)&&ye(i):r===Ie&&ke(i,e)}}}function Xn(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=Ie,n.pure?lt.push(n):It.push(n),n.observers&&Xn(n))}}function Le(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Le(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function ir(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function an(t,e=U){throw ir(t)}function Ge(t){if(typeof t=="function"&&!t.length)return Ge(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const i=Ge(t[n]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function rr(t,e){return function(i){let r;return ot(()=>r=ht(()=>(U.context={...U.context,[t]:i.value},on(()=>i.children))),void 0),r}}const lr=Symbol("fallback");function fn(t){for(let e=0;e<t.length;e++)t[e]()}function or(t,e,n={}){let i=[],r=[],o=[],l=0,a=e.length>1?[]:null;return _e(()=>fn(o)),()=>{let s=t()||[],u,h;return s[We],ht(()=>{let d=s.length,p,g,y,S,I,C,k,P,z;if(d===0)l!==0&&(fn(o),o=[],i=[],r=[],l=0,a&&(a=[])),n.fallback&&(i=[lr],r[0]=ee(x=>(o[0]=x,n.fallback())),l=1);else if(l===0){for(r=new Array(d),h=0;h<d;h++)i[h]=s[h],r[h]=ee(c);l=d}else{for(y=new Array(d),S=new Array(d),a&&(I=new Array(d)),C=0,k=Math.min(l,d);C<k&&i[C]===s[C];C++);for(k=l-1,P=d-1;k>=C&&P>=C&&i[k]===s[P];k--,P--)y[P]=r[k],S[P]=o[k],a&&(I[P]=a[k]);for(p=new Map,g=new Array(P+1),h=P;h>=C;h--)z=s[h],u=p.get(z),g[h]=u===void 0?-1:u,p.set(z,h);for(u=C;u<=k;u++)z=i[u],h=p.get(z),h!==void 0&&h!==-1?(y[h]=r[u],S[h]=o[u],a&&(I[h]=a[u]),h=g[h],p.set(z,h)):o[u]();for(h=C;h<d;h++)h in y?(r[h]=y[h],o[h]=S[h],a&&(a[h]=I[h],a[h](h))):r[h]=ee(c);r=r.slice(0,l=d),i=s.slice(0)}return r});function c(d){if(o[h]=d,a){const[p,g]=Et(h);return a[h]=g,e(s[h],p)}return e(s[h])}}}function L(t,e){return ht(()=>t(e||{}))}function de(){return!0}const Ke={get(t,e,n){return e===xt?n:t.get(e)},has(t,e){return e===xt?!0:t.has(e)},set:de,deleteProperty:de,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:de,deleteProperty:de}},ownKeys(t){return t.keys()}};function Me(t){return(t=typeof t=="function"?t():t)?t:{}}function ar(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function Zn(...t){let e=!1;for(let l=0;l<t.length;l++){const a=t[l];e=e||!!a&&xt in a,t[l]=typeof a=="function"?(e=!0,Z(a)):a}if(e)return new Proxy({get(l){for(let a=t.length-1;a>=0;a--){const s=Me(t[a])[l];if(s!==void 0)return s}},has(l){for(let a=t.length-1;a>=0;a--)if(l in Me(t[a]))return!0;return!1},keys(){const l=[];for(let a=0;a<t.length;a++)l.push(...Object.keys(Me(t[a])));return[...new Set(l)]}},Ke);const n={},i=Object.create(null);for(let l=t.length-1;l>=0;l--){const a=t[l];if(!a)continue;const s=Object.getOwnPropertyNames(a);for(let u=s.length-1;u>=0;u--){const h=s[u];if(h==="__proto__"||h==="constructor")continue;const c=Object.getOwnPropertyDescriptor(a,h);if(!i[h])i[h]=c.get?{enumerable:!0,configurable:!0,get:ar.bind(n[h]=[c.get.bind(a)])}:c.value!==void 0?c:void 0;else{const d=n[h];d&&(c.get?d.push(c.get.bind(a)):c.value!==void 0&&d.push(()=>c.value))}}}const r={},o=Object.keys(i);for(let l=o.length-1;l>=0;l--){const a=o[l],s=i[a];s&&s.get?Object.defineProperty(r,a,s):r[a]=s?s.value:void 0}return r}function ti(t,...e){if(xt in t){const r=new Set(e.length>1?e.flat():e[0]),o=e.map(l=>new Proxy({get(a){return l.includes(a)?t[a]:void 0},has(a){return l.includes(a)&&a in t},keys(){return l.filter(a=>a in t)}},Ke));return o.push(new Proxy({get(l){return r.has(l)?void 0:t[l]},has(l){return r.has(l)?!1:l in t},keys(){return Object.keys(t).filter(l=>!r.has(l))}},Ke)),o}const n={},i=e.map(()=>({}));for(const r of Object.getOwnPropertyNames(t)){const o=Object.getOwnPropertyDescriptor(t,r),l=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let a=!1,s=0;for(const u of e)u.includes(r)&&(a=!0,l?i[s][r]=o.value:Object.defineProperty(i[s],r,o)),++s;a||(l?n[r]=o.value:Object.defineProperty(n,r,o))}return[...i,n]}const sr=t=>`Stale read from <${t}>.`;function ne(t){const e="fallback"in t&&{fallback:()=>t.fallback};return Z(or(()=>t.each,t.children,e||void 0))}function _t(t){const e=t.keyed,n=Z(()=>t.when,void 0,{equals:(i,r)=>e?i===r:!i==!r});return Z(()=>{const i=n();if(i){const r=t.children;return typeof r=="function"&&r.length>0?ht(()=>r(e?i:()=>{if(!ht(n))throw sr("Show");return t.when})):r}return t.fallback},void 0,void 0)}const ur=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],cr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ur]),hr=new Set(["innerHTML","textContent","innerText","children"]),pr=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),mr=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function dr(t,e){const n=mr[t];return typeof n=="object"?n[e]?n.$:void 0:n}const fr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),gr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),br={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function xr(t,e,n){let i=n.length,r=e.length,o=i,l=0,a=0,s=e[r-1].nextSibling,u=null;for(;l<r||a<o;){if(e[l]===n[a]){l++,a++;continue}for(;e[r-1]===n[o-1];)r--,o--;if(r===l){const h=o<i?a?n[a-1].nextSibling:n[o-a]:s;for(;a<o;)t.insertBefore(n[a++],h)}else if(o===a)for(;l<r;)(!u||!u.has(e[l]))&&e[l].remove(),l++;else if(e[l]===n[o-1]&&n[a]===e[r-1]){const h=e[--r].nextSibling;t.insertBefore(n[a++],e[l++].nextSibling),t.insertBefore(n[--o],h),e[r]=n[o]}else{if(!u){u=new Map;let c=a;for(;c<o;)u.set(n[c],c++)}const h=u.get(e[l]);if(h!=null)if(a<h&&h<o){let c=l,d=1,p;for(;++c<r&&c<o&&!((p=u.get(e[c]))==null||p!==h+d);)d++;if(d>h-a){const g=e[l];for(;a<h;)t.insertBefore(n[a++],g)}else t.replaceChild(n[a++],e[l++])}else l++;else e[l++].remove()}}}const gn="_$DX_DELEGATE";function wr(t,e,n,i={}){let r;return ee(o=>{r=o,e===document?t():H(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{r(),e.textContent=""}}function X(t,e,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=t,l.content.firstChild},o=()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function ei(t,e=window.document){const n=e[gn]||(e[gn]=new Set);for(let i=0,r=t.length;i<r;i++){const o=t[i];n.has(o)||(n.add(o),e.addEventListener(o,Pr))}}function Nt(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function Ir(t,e,n,i){i==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,i)}function it(t,e){e==null?t.removeAttribute("class"):t.className=e}function yr(t,e,n,i){if(i)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=o=>r.call(t,n[1],o))}else t.addEventListener(e,n)}function kr(t,e,n={}){const i=Object.keys(e||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const a=r[o];!a||a==="undefined"||e[a]||(bn(t,a,!1),delete n[a])}for(o=0,l=i.length;o<l;o++){const a=i[o],s=!!e[a];!a||a==="undefined"||n[a]===s||!s||(bn(t,a,!0),n[a]=s)}return n}function Sr(t,e,n){if(!e)return n?Nt(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let r,o;for(o in n)e[o]==null&&i.removeProperty(o),delete n[o];for(o in e)r=e[o],r!==n[o]&&(i.setProperty(o,r),n[o]=r);return n}function Tr(t,e={},n,i){const r={};return ot(()=>r.children=le(t,e.children,r.children)),ot(()=>typeof e.ref=="function"?ni(e.ref,t):e.ref=t),ot(()=>Cr(t,e,n,!0,r,!0)),r}function ni(t,e,n){return ht(()=>t(e,n))}function H(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return le(t,e,i,n);ot(r=>le(t,e(),r,n),i)}function Cr(t,e,n,i,r={},o=!1){e||(e={});for(const l in r)if(!(l in e)){if(l==="children")continue;r[l]=xn(t,l,null,r[l],n,o)}for(const l in e){if(l==="children")continue;const a=e[l];r[l]=xn(t,l,a,r[l],n,o)}}function Ar(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function bn(t,e,n){const i=e.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)t.classList.toggle(i[r],n)}function xn(t,e,n,i,r,o){let l,a,s,u,h;if(e==="style")return Sr(t,n,i);if(e==="classList")return kr(t,n,i);if(n===i)return i;if(e==="ref")o||n(t);else if(e.slice(0,3)==="on:"){const c=e.slice(3);i&&t.removeEventListener(c,i),n&&t.addEventListener(c,n)}else if(e.slice(0,10)==="oncapture:"){const c=e.slice(10);i&&t.removeEventListener(c,i,!0),n&&t.addEventListener(c,n,!0)}else if(e.slice(0,2)==="on"){const c=e.slice(2).toLowerCase(),d=fr.has(c);if(!d&&i){const p=Array.isArray(i)?i[0]:i;t.removeEventListener(c,p)}(d||n)&&(yr(t,c,n,d),d&&ei([c]))}else if(e.slice(0,5)==="attr:")Nt(t,e.slice(5),n);else if((h=e.slice(0,5)==="prop:")||(s=hr.has(e))||!r&&((u=dr(e,t.tagName))||(a=cr.has(e)))||(l=t.nodeName.includes("-")))h&&(e=e.slice(5),a=!0),e==="class"||e==="className"?it(t,n):l&&!a&&!s?t[Ar(e)]=n:t[u||e]=n;else{const c=r&&e.indexOf(":")>-1&&br[e.split(":")[0]];c?Ir(t,c,e,n):Nt(t,pr[e]||e,n)}return n}function Pr(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[e];if(i&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?i.call(n,r,t):i.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function le(t,e,n,i,r){for(;typeof n=="function";)n=n();if(e===n)return n;const o=typeof e,l=i!==void 0;if(t=l&&n[0]&&n[0].parentNode||t,o==="string"||o==="number")if(o==="number"&&(e=e.toString()),l){let a=n[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),n=qt(t,n,i,a)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e;else if(e==null||o==="boolean")n=qt(t,n,i);else{if(o==="function")return ot(()=>{let a=e();for(;typeof a=="function";)a=a();n=le(t,a,n,i)}),()=>n;if(Array.isArray(e)){const a=[],s=n&&Array.isArray(n);if(Ye(a,e,n,r))return ot(()=>n=le(t,a,n,i,!0)),()=>n;if(a.length===0){if(n=qt(t,n,i),l)return n}else s?n.length===0?wn(t,a,i):xr(t,n,a):(n&&qt(t),wn(t,a));n=a}else if(e.nodeType){if(Array.isArray(n)){if(l)return n=qt(t,n,i,e);qt(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function Ye(t,e,n,i){let r=!1;for(let o=0,l=e.length;o<l;o++){let a=e[o],s=n&&n[t.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))r=Ye(t,a,s)||r;else if(u==="function")if(i){for(;typeof a=="function";)a=a();r=Ye(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||r}else t.push(a),r=!0;else{const h=String(a);s&&s.nodeType===3&&s.data===h?t.push(s):t.push(document.createTextNode(h))}}return r}function wn(t,e,n=null){for(let i=0,r=e.length;i<r;i++)t.insertBefore(e[i],n)}function qt(t,e,n,i){if(n===void 0)return t.textContent="";const r=i||document.createTextNode("");if(e.length){let o=!1;for(let l=e.length-1;l>=0;l--){const a=e[l];if(r!==a){const s=a.parentNode===t;!o&&!l?s?t.replaceChild(r,a):t.insertBefore(r,n):s&&a.remove()}else o=!0}}else t.insertBefore(r,n);return[r]}const Er=!1,_r="http://www.w3.org/2000/svg";function Fr(t,e=!1){return e?document.createElementNS(_r,t):document.createElement(t)}function $e(t){const[e,n]=ti(t,["component"]),i=Z(()=>e.component);return Z(()=>{const r=i();switch(typeof r){case"function":return ht(()=>r(n));case"string":const o=gr.has(r),l=Fr(r,o);return Tr(l,n,o),l}})}function ii(){let t=new Set;function e(r){return t.add(r),()=>t.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const a of t)a.listener({...l,from:a.location,retry:s=>{s&&(n=!0),a.navigate(r,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:e,confirm:i}}let Je;function sn(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Je=window.history.state._depth}sn();function Lr(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function vr(t,e){let n=!1;return()=>{const i=Je;sn();const r=i==null?null:Je-i;if(n){n=!1;return}r&&e(r)?(n=!0,window.history.go(-r)):t()}}const zr=/^(?:[a-z0-9]+:)?\/\//i,Or=/^\/+|(\/)\/+$/g,ri="http://sr";function ie(t,e=!1){const n=t.replace(Or,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function ge(t,e,n){if(zr.test(e))return;const i=ie(t),r=n&&ie(n);let o="";return!r||e.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+ie(e,!o)}function Dr(t,e){if(t==null)throw new Error(e);return t}function Mr(t,e){return ie(t).replace(/\/*(\*.*)?$/g,"")+ie(e)}function li(t){const e={};return t.searchParams.forEach((n,i)=>{i in e?Array.isArray(e[i])?e[i].push(n):e[i]=[e[i],n]:e[i]=n}),e}function $r(t,e,n){const[i,r]=t.split("/*",2),o=i.split("/").filter(Boolean),l=o.length;return a=>{const s=a.split("/").filter(Boolean),u=s.length-l;if(u<0||u>0&&r===void 0&&!e)return null;const h={path:l?"":"/",params:{}},c=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const p=o[d],g=p[0]===":",y=g?s[d]:s[d].toLowerCase(),S=g?p.slice(1):p.toLowerCase();if(g&&Re(y,c(S)))h.params[S]=y;else if(g||!Re(y,S))return null;h.path+=`/${y}`}if(r){const d=u?s.slice(-u).join("/"):"";if(Re(d,c(r)))h.params[r]=d;else return null}return h}}function Re(t,e){const n=i=>i===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Rr(t){const[e,n]=t.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function oi(t){const e=new Map,n=Qn();return new Proxy({},{get(i,r){return e.has(r)||Gn(n,()=>e.set(r,Z(()=>t()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())},has(i,r){return r in t()}})}function Nr(t,e){const n=new URLSearchParams(t);Object.entries(e).forEach(([r,o])=>{o==null||o===""||o instanceof Array&&!o.length?n.delete(r):o instanceof Array?(n.delete(r),o.forEach(l=>{n.append(r,String(l))})):n.set(r,String(o))});const i=n.toString();return i?`?${i}`:""}function ai(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),i=t.slice(e.index+e[0].length);const r=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=e[1]),i=i.slice(e[0].length);return ai(i).reduce((o,l)=>[...o,...r.map(a=>a+l)],[])}const Br=100,si=se(),ui=se(),ci=()=>Dr(ue(si),"<A> and 'use' router primitives can be only used inside a Route."),jr=()=>ci().navigatorFactory(),qr=()=>ci().location,Hr=()=>{const t=qr(),e=jr(),n=(i,r)=>{const o=ht(()=>Nr(t.search,i)+t.hash);e(o,{scroll:!1,resolve:!1,...r})};return[t.query,n]};function Vr(t,e=""){const{component:n,preload:i,load:r,children:o,info:l}=t,a=!o||Array.isArray(o)&&!o.length,s={key:t,component:n,preload:i||r,info:l};return hi(t.path).reduce((u,h)=>{for(const c of ai(h)){const d=Mr(e,c);let p=a?d:d.split("/*",1)[0];p=p.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),u.push({...s,originalPath:h,pattern:p,matcher:$r(p,!a,t.matchFilters)})}return u},[])}function Ur(t,e=0){return{routes:t,score:Rr(t[t.length-1])*1e4-e,matcher(n){const i=[];for(let r=t.length-1;r>=0;r--){const o=t[r],l=o.matcher(n);if(!l)return null;i.unshift({...l,route:o})}return i}}}function hi(t){return Array.isArray(t)?t:[t]}function pi(t,e="",n=[],i=[]){const r=hi(t);for(let o=0,l=r.length;o<l;o++){const a=r[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const s=Vr(a,e);for(const u of s){n.push(u);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)pi(a.children,u.pattern,n,i);else{const c=Ur([...n],i.length);i.push(c)}n.pop()}}}return n.length?i:i.sort((o,l)=>l.score-o.score)}function Ne(t,e){for(let n=0,i=t.length;n<i;n++){const r=t[n].matcher(e);if(r)return r}return[]}function Wr(t,e,n){const i=new URL(ri),r=Z(h=>{const c=t();try{return new URL(c,i)}catch{return console.error(`Invalid path ${c}`),h}},i,{equals:(h,c)=>h.href===c.href}),o=Z(()=>r().pathname),l=Z(()=>r().search,!0),a=Z(()=>r().hash),s=()=>"",u=ln(l,()=>li(r()));return{get pathname(){return o()},get search(){return l()},get hash(){return a()},get state(){return e()},get key(){return s()},query:n?n(u):oi(u)}}let Rt;function Qr(){return Rt}function Gr(t,e,n,i={}){const{signal:[r,o],utils:l={}}=t,a=l.parsePath||(F=>F),s=l.renderPath||(F=>F),u=l.beforeLeave||ii(),h=ge("",i.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&o({value:h,replace:!0,scroll:!1});const[c,d]=Et(!1);let p;const g=(F,E)=>{E.value===y()&&E.state===I()||(p===void 0&&d(!0),Rt=F,p=E,Zi(()=>{p===E&&(S(p.value),C(p.state),z[1](B=>B.filter(G=>G.pending)))}).finally(()=>{p===E&&Wn(()=>{Rt=void 0,F==="navigate"&&A(p),d(!1),p=void 0})}))},[y,S]=Et(r().value),[I,C]=Et(r().state),k=Wr(y,I,l.queryWrapper),P=[],z=Et([]),x=Z(()=>typeof i.transformUrl=="function"?Ne(e(),i.transformUrl(k.pathname)):Ne(e(),k.pathname)),M=()=>{const F=x(),E={};for(let B=0;B<F.length;B++)Object.assign(E,F[B].params);return E},q=l.paramsWrapper?l.paramsWrapper(M,e):oi(M),R={pattern:h,path:()=>h,outlet:()=>null,resolvePath(F){return ge(h,F)}};return ot(ln(r,F=>g("native",F),{defer:!0})),{base:R,location:k,params:q,isRouting:c,renderPath:s,parsePath:a,navigatorFactory:_,matches:x,beforeLeave:u,preloadRoute:V,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:z};function b(F,E,B){ht(()=>{if(typeof E=="number"){E&&(l.go?l.go(E):console.warn("Router integration does not support relative routing"));return}const G=!E||E[0]==="?",{replace:W,resolve:et,scroll:m,state:D}={replace:!1,resolve:!G,scroll:!0,...B},K=et?F.resolvePath(E):ge(G&&k.pathname||"",E);if(K===void 0)throw new Error(`Path '${E}' is not a routable path`);if(P.length>=Br)throw new Error("Too many redirects");const f=y();(K!==f||D!==I())&&(Er||u.confirm(K,B)&&(P.push({value:f,replace:W,scroll:m,state:I()}),g("navigate",{value:K,state:D})))})}function _(F){return F=F||ue(ui)||R,(E,B)=>b(F,E,B)}function A(F){const E=P[0];E&&(o({...F,replace:E.replace,scroll:E.scroll}),P.length=0)}function V(F,E){const B=Ne(e(),F.pathname),G=Rt;Rt="preload";for(let W in B){const{route:et,params:m}=B[W];et.component&&et.component.preload&&et.component.preload();const{preload:D}=et;E&&D&&Gn(n(),()=>D({params:m,location:{pathname:F.pathname,search:F.search,hash:F.hash,query:li(F),state:null,key:""},intent:"preload"}))}Rt=G}}function Kr(t,e,n,i){const{base:r,location:o,params:l}=t,{pattern:a,component:s,preload:u}=i().route,h=Z(()=>i().path);s&&s.preload&&s.preload();const c=u?u({params:l,location:o,intent:Rt||"initial"}):void 0;return{parent:e,pattern:a,path:h,outlet:()=>s?L(s,{params:l,location:o,data:c,get children(){return n()}}):n(),resolvePath(p){return ge(r.path(),p,h())}}}const Yr=t=>e=>{const{base:n}=e,i=on(()=>e.children),r=Z(()=>pi(i(),e.base||""));let o;const l=Gr(t,r,()=>o,{base:n,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return t.create&&t.create(l),L(si.Provider,{value:l,get children(){return L(Jr,{routerState:l,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[Z(()=>(o=Qn())&&null),L(Xr,{routerState:l,get branches(){return r()}})]}})}})};function Jr(t){const e=t.routerState.location,n=t.routerState.params,i=Z(()=>t.preload&&ht(()=>{t.preload({params:n,location:e,intent:Qr()||"initial"})}));return L(_t,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:r=>L(r,{params:n,location:e,get data(){return i()},get children(){return t.children}})})}function Xr(t){const e=[];let n;const i=Z(ln(t.routerState.matches,(r,o,l)=>{let a=o&&r.length===o.length;const s=[];for(let u=0,h=r.length;u<h;u++){const c=o&&o[u],d=r[u];l&&c&&d.route.key===c.route.key?s[u]=l[u]:(a=!1,e[u]&&e[u](),ee(p=>{e[u]=p,s[u]=Kr(t.routerState,s[u-1]||t.routerState.base,In(()=>i()[u+1]),()=>{const g=t.routerState.matches();return g[u]??g[0]})}))}return e.splice(r.length).forEach(u=>u()),l&&a?l:(n=s[0],s)}));return In(()=>i()&&n)()}const In=t=>()=>L(_t,{get when(){return t()},keyed:!0,children:e=>L(ui.Provider,{value:e,get children(){return e.outlet()}})}),Zr=t=>{const e=on(()=>t.children);return Zn(t,{get children(){return e()}})};function tl([t,e],n,i){return[t,i?r=>e(i(r)):e]}function el(t){let e=!1;const n=r=>typeof r=="string"?{value:r}:r,i=tl(Et(n(t.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!e&&t.set(r),r));return t.init&&_e(t.init((r=t.get())=>{e=!0,i[1](n(r)),e=!1})),Yr({signal:i,create:t.create,utils:t.utils})}function nl(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function il(t,e){const n=t&&document.getElementById(t);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const rl=new Map;function ll(t=!0,e=!1,n="/_server",i){return r=>{const o=r.base.path(),l=r.navigatorFactory(r.base);let a,s;function u(y){return y.namespaceURI==="http://www.w3.org/2000/svg"}function h(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const S=y.composedPath().find(x=>x instanceof Node&&x.nodeName.toUpperCase()==="A");if(!S||e&&!S.hasAttribute("link"))return;const I=u(S),C=I?S.href.baseVal:S.href;if((I?S.target.baseVal:S.target)||!C&&!S.hasAttribute("state"))return;const P=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||P&&P.includes("external"))return;const z=I?new URL(C,document.baseURI):new URL(C);if(!(z.origin!==window.location.origin||o&&z.pathname&&!z.pathname.toLowerCase().startsWith(o.toLowerCase())))return[S,z]}function c(y){const S=h(y);if(!S)return;const[I,C]=S,k=r.parsePath(C.pathname+C.search+C.hash),P=I.getAttribute("state");y.preventDefault(),l(k,{resolve:!1,replace:I.hasAttribute("replace"),scroll:!I.hasAttribute("noscroll"),state:P?JSON.parse(P):void 0})}function d(y){const S=h(y);if(!S)return;const[I,C]=S;i&&(C.pathname=i(C.pathname)),r.preloadRoute(C,I.getAttribute("preload")!=="false")}function p(y){clearTimeout(a);const S=h(y);if(!S)return s=null;const[I,C]=S;s!==I&&(i&&(C.pathname=i(C.pathname)),a=setTimeout(()=>{r.preloadRoute(C,I.getAttribute("preload")!=="false"),s=I},20))}function g(y){if(y.defaultPrevented)return;let S=y.submitter&&y.submitter.hasAttribute("formaction")?y.submitter.getAttribute("formaction"):y.target.getAttribute("action");if(!S)return;if(!S.startsWith("https://action/")){const C=new URL(S,ri);if(S=r.parsePath(C.pathname+C.search),!S.startsWith(n))return}if(y.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const I=rl.get(S);if(I){y.preventDefault();const C=new FormData(y.target,y.submitter);I.call({r,f:y.target},y.target.enctype==="multipart/form-data"?C:new URLSearchParams(C))}}ei(["click","submit"]),document.addEventListener("click",c),t&&(document.addEventListener("mousemove",p,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",g),_e(()=>{document.removeEventListener("click",c),t&&(document.removeEventListener("mousemove",p),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",g)})}}function ol(t){const e=()=>{const i=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:i+window.location.hash,state:r}},n=ii();return el({get:e,set({value:i,replace:r,scroll:o,state:l}){r?window.history.replaceState(Lr(l),"",i):window.history.pushState(l,"",i),il(decodeURIComponent(window.location.hash.slice(1)),o),sn()},init:i=>nl(window,"popstate",vr(i,r=>{if(r)return!n.confirm(r);{const o=e();return!n.confirm(o.value,{state:o.state})}})),create:ll(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:i=>window.history.go(i),beforeLeave:n}})(t)}const Xe=Symbol("store-raw"),Ut=Symbol("store-node"),Pt=Symbol("store-has"),mi=Symbol("store-self");function di(t){let e=t[xt];if(!e&&(Object.defineProperty(t,xt,{value:e=new Proxy(t,ul)}),!Array.isArray(t))){const n=Object.keys(t),i=Object.getOwnPropertyDescriptors(t);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(t,l,{enumerable:i[l].enumerable,get:i[l].get.bind(e)})}}return e}function Se(t){let e;return t!=null&&typeof t=="object"&&(t[xt]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function oe(t,e=new Set){let n,i,r,o;if(n=t!=null&&t[Xe])return n;if(!Se(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let l=0,a=t.length;l<a;l++)r=t[l],(i=oe(r,e))!==r&&(t[l]=i)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const l=Object.keys(t),a=Object.getOwnPropertyDescriptors(t);for(let s=0,u=l.length;s<u;s++)o=l[s],!a[o].get&&(r=t[o],(i=oe(r,e))!==r&&(t[o]=i))}return t}function Te(t,e){let n=t[e];return n||Object.defineProperty(t,e,{value:n=Object.create(null)}),n}function ae(t,e,n){if(t[e])return t[e];const[i,r]=Et(n,{equals:!1,internal:!0});return i.$=r,t[e]=i}function al(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);return!n||n.get||!n.configurable||e===xt||e===Ut||(delete n.value,delete n.writable,n.get=()=>t[xt][e]),n}function fi(t){Qe()&&ae(Te(t,Ut),mi)()}function sl(t){return fi(t),Reflect.ownKeys(t)}const ul={get(t,e,n){if(e===Xe)return t;if(e===xt)return n;if(e===We)return fi(t),n;const i=Te(t,Ut),r=i[e];let o=r?r():t[e];if(e===Ut||e===Pt||e==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(t,e);Qe()&&(typeof o!="function"||t.hasOwnProperty(e))&&!(l&&l.get)&&(o=ae(i,e,o)())}return Se(o)?di(o):o},has(t,e){return e===Xe||e===xt||e===We||e===Ut||e===Pt||e==="__proto__"?!0:(Qe()&&ae(Te(t,Pt),e)(),e in t)},set(){return!0},deleteProperty(){return!0},ownKeys:sl,getOwnPropertyDescriptor:al};function Ce(t,e,n,i=!1){if(!i&&t[e]===n)return;const r=t[e],o=t.length;n===void 0?(delete t[e],t[Pt]&&t[Pt][e]&&r!==void 0&&t[Pt][e].$()):(t[e]=n,t[Pt]&&t[Pt][e]&&r===void 0&&t[Pt][e].$());let l=Te(t,Ut),a;if((a=ae(l,e,r))&&a.$(()=>n),Array.isArray(t)&&t.length!==o){for(let s=t.length;s<o;s++)(a=l[s])&&a.$();(a=ae(l,"length",o))&&a.$(t.length)}(a=l[mi])&&a.$()}function gi(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i+=1){const r=n[i];Ce(t,r,e[r])}}function cl(t,e){if(typeof e=="function"&&(e=e(t)),e=oe(e),Array.isArray(e)){if(t===e)return;let n=0,i=e.length;for(;n<i;n++){const r=e[n];t[n]!==r&&Ce(t,n,r)}Ce(t,"length",i)}else gi(t,e)}function te(t,e,n=[]){let i,r=t;if(e.length>1){i=e.shift();const l=typeof i,a=Array.isArray(t);if(Array.isArray(i)){for(let s=0;s<i.length;s++)te(t,[i[s]].concat(e),n);return}else if(a&&l==="function"){for(let s=0;s<t.length;s++)i(t[s],s)&&te(t,[s].concat(e),n);return}else if(a&&l==="object"){const{from:s=0,to:u=t.length-1,by:h=1}=i;for(let c=s;c<=u;c+=h)te(t,[c].concat(e),n);return}else if(e.length>1){te(t[i],e,[i].concat(n));return}r=t[i],n=[i].concat(n)}let o=e[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=oe(o),i===void 0||Se(r)&&Se(o)&&!Array.isArray(o)?gi(r,o):Ce(t,i,o))}function hl(...[t,e]){const n=oe(t||{}),i=Array.isArray(n),r=di(n);function o(...l){Wn(()=>{i&&l.length===1?cl(n,l[0]):te(n,l)})}return[r,o]}function bi(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=bi(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function yn(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=bi(t))&&(i&&(i+=" "),i+=e);return i}const pl={"renders heading 1 with 1 asterisk prefix":{input:"# Heading 1",output:"<h1 >Heading 1</h1>"},"renders heading 2 with 2 asterisks prefix":{input:"## Heading 2",output:"<h2 >Heading 2</h2>"},"renders heading 3 with 3 asterisks prefix":{input:"### Heading 3",output:"<h3 >Heading 3</h3>"},"renders heading 4 with 4 asterisks prefix":{input:"#### Heading 4",output:"<h4 >Heading 4</h4>"},"renders heading 5 with 5 asterisks prefix":{input:"##### Heading 5",output:"<h5 >Heading 5</h5>"},"renders heading 6 with 6 asterisks prefix":{input:"###### Heading 6",output:"<h6 >Heading 6</h6>"},"renders heading 1 with = underline":{input:`Heading 1
=========`,output:"<h1 >Heading 1</h1>"},"renders heading 2 with - underline":{input:`Heading 2
---------`,output:"<h2 >Heading 2</h2>"},"renders a simple paragraph":{input:"This is a paragraph.",output:"<p>This is a paragraph.</p>"},"renders multiple paragraphs":{input:`First paragraph.

Second paragraph.`,output:"<p>First paragraph.</p><p>Second paragraph.</p>"},"renders italic text with asterisks":{input:"*italic*",output:"<p><em>italic</em></p>"},"renders italic text with underscores":{input:"_italic_",output:"<p><em>italic</em></p>"},"renders bold text with double asterisks":{input:"**bold**",output:"<p><strong>bold</strong></p>"},"renders bold text with double underscores":{input:"__bold__",output:"<p><strong>bold</strong></p>"},"renders emphasis within paragraph":{input:"This is *italic* and **bold** text.",output:"<p>This is <em>italic</em> and <strong>bold</strong> text.</p>"},"renders bullet list with dashes":{input:`- Item 1
- Item 2
- Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders bullet list with asterisks":{input:`* Item 1
* Item 2
* Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders bullet list with plus signs":{input:`+ Item 1
+ Item 2
+ Item 3`,output:"<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"renders ordered list":{input:`1. First item
2. Second item
3. Third item`,output:"<ol ><li>First item</li><li>Second item</li><li>Third item</li></ol>"},"renders ordered list with different starting numbers":{input:`5. Fifth item
6. Sixth item
7. Seventh item`,output:"<ol ><li>Fifth item</li><li>Sixth item</li><li>Seventh item</li></ol>"},"renders inline code":{input:"`code`",output:"<p><code>code</code></p>"},"renders inline code within paragraph":{input:"Use `console.log()` to debug.",output:"<p>Use <code>console.log()</code> to debug.</p>"},"renders fenced code block":{input:"```\nconst x = 1;\nconsole.log(x);\n```",output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders fenced code block with language":{input:"```javascript\nconst x = 1;\nconsole.log(x);\n```",output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders indented code block":{input:`    const x = 1;
    console.log(x);`,output:`<pre><code>const x = 1;
console.log(x);</code></pre>`},"renders indented code block break":{input:`    const x = 1;
console.log(x);`,output:"<pre><code>const x = 1;</code></pre><p>console.log(x);</p>"},"renders inline link":{input:"[Example.com](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Example.com</a></p>'},"renders autolink":{input:"<https://example.com>",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></p>'},"renders image":{input:"![Alt text](image.jpg)",output:'<p><img src="image.jpg" alt="Alt text"></p>'},"renders blockquote":{input:"> This is a blockquote.",output:"<blockquote><p>This is a blockquote.</p></blockquote>"},"renders multi-line blockquote":{input:`> First line
> Second line`,output:`<blockquote><p>First line
Second line</p></blockquote>`},"renders multi-line blockquote with empty line":{input:`> First line
>
> Second line`,output:"<blockquote><p>First line</p><p>Second line</p></blockquote>"},"renders nested blockquotes":{input:`> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > And this is triple nested`,output:"<blockquote><p>This is a blockquote</p><blockquote><p>This is a nested blockquote</p><blockquote><p>And this is triple nested</p></blockquote></blockquote></blockquote>"},"renders blockquotes with emphasis and links":{input:`> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`,output:'<blockquote><p>This is a <strong>bold</strong> statement with <a href="https://example.com" target="_blank" rel="noopener noreferrer">a link</a></p><p>And this is <em>italic</em> text in the same blockquote</p></blockquote>'},"renders blockquotes with lists":{input:`> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`,output:"<blockquote><p>This blockquote contains a list:</p><ol ><li>First item</li><li>Second item</li><li>Third item</li></ol></blockquote>"},"renders horizontal rule with dashes":{input:"---",output:"<hr>"},"renders horizontal rule with asterisks":{input:"***",output:"<hr>"},"renders horizontal rule with underscores":{input:"___",output:"<hr>"},"handles backslash escapes":{input:"\\*not italic\\*",output:"<p>*not italic*</p>"},"handles escaped characters":{input:"\\# Not a header",output:"<p># Not a header</p>"},"handles HTML entities":{input:"&amp; &lt; &gt;",output:"<p>&amp; &lt; ></p>"},"handles special entities":{input:"&copy; &trade;",output:"<p>© ™</p>"},"handles soft line breaks":{input:`Line one
Line two`,output:`<p>Line one
Line two</p>`},"handles hard line breaks":{input:`Line one  
Line two`,output:"<p>Line one<br>Line two</p>"},"handles complex nested markdown":{input:`# Header

This is a **bold** paragraph with *italic* text and \`code\`.

- List item with [link](https://example.com)
- Another item

> Blockquote with **emphasis**`,output:'<h1 >Header</h1><p>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code>code</code>.</p><ul ><li>List item with <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a></li><li>Another item</li></ul><blockquote><p>Blockquote with <strong>emphasis</strong></p></blockquote>'},"renders deeply nested unordered lists":{input:`- Level 1
  - Level 2
    - Level 3
      - Level 4`,output:"<ul ><li>Level 1<ul ><li>Level 2<ul ><li>Level 3<ul ><li>Level 4</li></ul></li></ul></li></ul></li></ul>"},"renders mixed nested lists (ordered and unordered)":{input:`1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`,output:"<ol ><li>First ordered item<ul ><li>Nested unordered item</li><li>Another nested item</li></ul></li><li>Second ordered item<ol ><li>Nested ordered item</li><li>Another nested ordered item</li></ol></li></ol>"},"renders lists with multiple paragraphs in items":{input:`1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``,output:"<ol ><li><p>First item with multiple paragraphs.</p><p>This is the second paragraph of the first item.</p></li><li><p>Second item with code:</p><pre><code>console.log('Hello from list');</code></pre></li></ol>"},"renders bold within italic":{input:"*This is italic with **bold** inside*",output:"<p><em>This is italic with <strong>bold</strong> inside</em></p>"},"renders italic within bold":{input:"**This is bold with *italic* inside**",output:"<p><strong>This is bold with <em>italic</em> inside</strong></p>"},"renders links with emphasis":{input:"[**Bold link**](https://example.com) and [*italic link*](https://test.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><strong>Bold link</strong></a> and <a href="https://test.com" target="_blank" rel="noopener noreferrer"><em>italic link</em></a></p>'},"renders images within links":{input:"[![Alt text](image.jpg)](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="image.jpg" alt="Alt text"></a></p>'},"renders links in lists":{input:`- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`,output:'<ul ><li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link 1</a></li><li>Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a> for search</li><li>Multiple <a href="https://a.com" target="_blank" rel="noopener noreferrer">links</a> in <a href="https://b.com" target="_blank" rel="noopener noreferrer">one</a> item</li></ul>'},"renders code within links":{input:"[Check out `console.log()`](https://developer.mozilla.org)",output:'<p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Check out <code>console.log()</code></a></p>'},"renders inline code with emphasis markers that should not be processed":{input:"`const **bold** = 'not bold';`",output:"<p><code>const **bold** = 'not bold';</code></p>"},"renders code blocks in lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```",output:"<ol ><li>Install dependencies:<pre><code>npm install</code></pre></li><li>Run the application:<pre><code>npm start</code></pre></li></ol>"},"renders code blocks in nested lists":{input:"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n   1. Run the application:\n      ```javascript\n      npm start\n      ```",output:"<ol ><li><p>Install dependencies:</p><pre><code>npm install</code></pre><ol ><li>Run the application:<pre><code>npm start</code></pre></li></ol></li></ol>"},"renders code blocks in blockquotes":{input:`> Here's an example:
> 
> \`\`\`javascript
> function hello() {
>   return "world";
> }
> \`\`\``,output:`<blockquote><p>Here's an example:</p><pre><code>function hello() {
  return "world";
}</code></pre></blockquote>`},"renders complex document with all features":{input:`# Main Title

This is a **complex document** with *various* elements.

## Features

1. **Lists** with nested items:
   - Unordered nested list
   - Another item with \`inline code\`

2. **Code blocks** with different languages:
   \`\`\`javascript
   function example() {
     return "Hello World";
   }
   \`\`\`

3. **Tables** with complex content

## Quotes and More

> This is a blockquote with **emphasis** and a [link](https://test.com).
> 
> > Nested quote with \`code\`

---

### Final Notes

Check out this image: ![Example](test.jpg)

And this autolink: <https://automatic.link>`,output:`<h1 >Main Title</h1><p>This is a <strong>complex document</strong> with <em>various</em> elements.</p><h2 >Features</h2><ol ><li><strong>Lists</strong> with nested items:<ul ><li>Unordered nested list</li><li>Another item with <code>inline code</code></li></ul></li><li><strong>Code blocks</strong> with different languages:<pre><code>function example() {
  return "Hello World";
}</code></pre></li><li><strong>Tables</strong> with complex content</li></ol><h2 >Quotes and More</h2><blockquote><p>This is a blockquote with <strong>emphasis</strong> and a <a href="https://test.com" target="_blank" rel="noopener noreferrer">link</a>.</p><blockquote><p>Nested quote with <code>code</code></p></blockquote></blockquote><hr><h3 >Final Notes</h3><p>Check out this image: <img src="test.jpg" alt="Example"></p><p>And this autolink: <a href="https://automatic.link" target="_blank" rel="noopener noreferrer">https://automatic.link</a></p>`},"renders edge case with consecutive emphasis":{input:"This has **bold** and **more bold** and *italic* and *more italic* text.",output:"<p>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</p>"},"renders emphasis across line breaks":{input:`This is **bold text that
continues on the next line**`,output:`<p>This is <strong>bold text that
continues on the next line</strong></p>`},"renders mixed list types in complex document":{input:`## Mixed Lists

1. Ordered item one
   - Nested unordered
   - Another nested
     1. Deep nested ordered
     2. Another deep ordered

2. Ordered item two
   > With a blockquote
   > 
   > And **emphasis**

3. Ordered item three with code:
   \`\`\`python
   print("Hello from Python")
   \`\`\``,output:'<h2 >Mixed Lists</h2><ol ><li>Ordered item one<ul ><li>Nested unordered</li><li>Another nested<ol ><li>Deep nested ordered</li><li>Another deep ordered</li></ol></li></ul></li><li>Ordered item two<blockquote><p>With a blockquote</p><p>And <strong>emphasis</strong></p></blockquote></li><li>Ordered item three with code:<pre><code>print("Hello from Python")</code></pre></li></ol>'},"handles unbalanced emphasis markers":{input:"This has **unbalanced bold and *mixed emphasis**",output:"<p>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></p>"},"handles empty code blocks":{input:"```\n```",output:"<pre><code></code></pre>"},"handles code blocks without closing":{input:"```javascript\nconst x = 1;",output:"<pre><code>const x = 1;</code></pre>"},"handles consecutive same emphasis types correctly":{input:"**This is** nested **bold**",output:"<p><strong>This is</strong> nested <strong>bold</strong></p>"},"handles consecutive italic emphasis correctly":{input:"*This is* nested *italic*",output:"<p><em>This is</em> nested <em>italic</em></p>"},"handles triple asterisk emphasis correctly":{input:"***This is*** nested ***bold italic***",output:"<p><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></p>"},"handles proper separated emphasis correctly":{input:"**this** is **bold**",output:"<p><strong>this</strong> is <strong>bold</strong></p>"},"handles links without URLs":{input:"[Link text]()",output:'<p><a href="" target="_blank" rel="noopener noreferrer">Link text</a></p>'},"handles images without src":{input:"![Alt text]()",output:'<p><img src="" alt="Alt text"></p>'},"renders task lists with checkboxes":{input:`- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`,output:"<ul ><li>[x] Completed task</li><li>[ ] Incomplete task</li><li>[x] Another completed task</li></ul>"},"renders nested task lists":{input:`- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`,output:"<ul ><li>[x] Main task<ul ><li>[x] Subtask 1</li><li>[ ] Subtask 2<ul ><li>[x] Sub-subtask</li></ul></li></ul></li></ul>"},"handles large documents efficiently":{input:`## Section 1

This is paragraph 1 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 2

This is paragraph 2 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 3

This is paragraph 3 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 4

This is paragraph 4 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 5

This is paragraph 5 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 6

This is paragraph 6 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 7

This is paragraph 7 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 8

This is paragraph 8 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 9

This is paragraph 9 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 10

This is paragraph 10 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 11

This is paragraph 11 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 12

This is paragraph 12 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 13

This is paragraph 13 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 14

This is paragraph 14 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 15

This is paragraph 15 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 16

This is paragraph 16 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 17

This is paragraph 17 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 18

This is paragraph 18 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 19

This is paragraph 19 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 20

This is paragraph 20 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 21

This is paragraph 21 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 22

This is paragraph 22 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 23

This is paragraph 23 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 24

This is paragraph 24 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 25

This is paragraph 25 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 26

This is paragraph 26 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 27

This is paragraph 27 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 28

This is paragraph 28 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 29

This is paragraph 29 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 30

This is paragraph 30 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 31

This is paragraph 31 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 32

This is paragraph 32 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 33

This is paragraph 33 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 34

This is paragraph 34 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 35

This is paragraph 35 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 36

This is paragraph 36 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 37

This is paragraph 37 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 38

This is paragraph 38 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 39

This is paragraph 39 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 40

This is paragraph 40 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 41

This is paragraph 41 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 42

This is paragraph 42 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 43

This is paragraph 43 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 44

This is paragraph 44 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 45

This is paragraph 45 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 46

This is paragraph 46 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 47

This is paragraph 47 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 48

This is paragraph 48 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 49

This is paragraph 49 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 50

This is paragraph 50 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 51

This is paragraph 51 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 52

This is paragraph 52 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 53

This is paragraph 53 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 54

This is paragraph 54 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 55

This is paragraph 55 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 56

This is paragraph 56 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 57

This is paragraph 57 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 58

This is paragraph 58 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 59

This is paragraph 59 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 60

This is paragraph 60 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 61

This is paragraph 61 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 62

This is paragraph 62 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 63

This is paragraph 63 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 64

This is paragraph 64 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 65

This is paragraph 65 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 66

This is paragraph 66 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 67

This is paragraph 67 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 68

This is paragraph 68 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 69

This is paragraph 69 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 70

This is paragraph 70 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 71

This is paragraph 71 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 72

This is paragraph 72 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 73

This is paragraph 73 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 74

This is paragraph 74 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 75

This is paragraph 75 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 76

This is paragraph 76 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 77

This is paragraph 77 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 78

This is paragraph 78 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 79

This is paragraph 79 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 80

This is paragraph 80 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 81

This is paragraph 81 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 82

This is paragraph 82 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 83

This is paragraph 83 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 84

This is paragraph 84 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 85

This is paragraph 85 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 86

This is paragraph 86 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 87

This is paragraph 87 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 88

This is paragraph 88 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 89

This is paragraph 89 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 90

This is paragraph 90 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 91

This is paragraph 91 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 92

This is paragraph 92 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 93

This is paragraph 93 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 94

This is paragraph 94 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 95

This is paragraph 95 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 96

This is paragraph 96 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 97

This is paragraph 97 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 98

This is paragraph 98 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 99

This is paragraph 99 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

## Section 100

This is paragraph 100 with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3
`,output:"<h2 >Section 1</h2><p>This is paragraph 1 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 2</h2><p>This is paragraph 2 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 3</h2><p>This is paragraph 3 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 4</h2><p>This is paragraph 4 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 5</h2><p>This is paragraph 5 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 6</h2><p>This is paragraph 6 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 7</h2><p>This is paragraph 7 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 8</h2><p>This is paragraph 8 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 9</h2><p>This is paragraph 9 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 10</h2><p>This is paragraph 10 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 11</h2><p>This is paragraph 11 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 12</h2><p>This is paragraph 12 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 13</h2><p>This is paragraph 13 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 14</h2><p>This is paragraph 14 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 15</h2><p>This is paragraph 15 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 16</h2><p>This is paragraph 16 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 17</h2><p>This is paragraph 17 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 18</h2><p>This is paragraph 18 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 19</h2><p>This is paragraph 19 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 20</h2><p>This is paragraph 20 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 21</h2><p>This is paragraph 21 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 22</h2><p>This is paragraph 22 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 23</h2><p>This is paragraph 23 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 24</h2><p>This is paragraph 24 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 25</h2><p>This is paragraph 25 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 26</h2><p>This is paragraph 26 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 27</h2><p>This is paragraph 27 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 28</h2><p>This is paragraph 28 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 29</h2><p>This is paragraph 29 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 30</h2><p>This is paragraph 30 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 31</h2><p>This is paragraph 31 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 32</h2><p>This is paragraph 32 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 33</h2><p>This is paragraph 33 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 34</h2><p>This is paragraph 34 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 35</h2><p>This is paragraph 35 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 36</h2><p>This is paragraph 36 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 37</h2><p>This is paragraph 37 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 38</h2><p>This is paragraph 38 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 39</h2><p>This is paragraph 39 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 40</h2><p>This is paragraph 40 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 41</h2><p>This is paragraph 41 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 42</h2><p>This is paragraph 42 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 43</h2><p>This is paragraph 43 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 44</h2><p>This is paragraph 44 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 45</h2><p>This is paragraph 45 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 46</h2><p>This is paragraph 46 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 47</h2><p>This is paragraph 47 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 48</h2><p>This is paragraph 48 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 49</h2><p>This is paragraph 49 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 50</h2><p>This is paragraph 50 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 51</h2><p>This is paragraph 51 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 52</h2><p>This is paragraph 52 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 53</h2><p>This is paragraph 53 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 54</h2><p>This is paragraph 54 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 55</h2><p>This is paragraph 55 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 56</h2><p>This is paragraph 56 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 57</h2><p>This is paragraph 57 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 58</h2><p>This is paragraph 58 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 59</h2><p>This is paragraph 59 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 60</h2><p>This is paragraph 60 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 61</h2><p>This is paragraph 61 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 62</h2><p>This is paragraph 62 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 63</h2><p>This is paragraph 63 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 64</h2><p>This is paragraph 64 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 65</h2><p>This is paragraph 65 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 66</h2><p>This is paragraph 66 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 67</h2><p>This is paragraph 67 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 68</h2><p>This is paragraph 68 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 69</h2><p>This is paragraph 69 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 70</h2><p>This is paragraph 70 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 71</h2><p>This is paragraph 71 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 72</h2><p>This is paragraph 72 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 73</h2><p>This is paragraph 73 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 74</h2><p>This is paragraph 74 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 75</h2><p>This is paragraph 75 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 76</h2><p>This is paragraph 76 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 77</h2><p>This is paragraph 77 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 78</h2><p>This is paragraph 78 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 79</h2><p>This is paragraph 79 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 80</h2><p>This is paragraph 80 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 81</h2><p>This is paragraph 81 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 82</h2><p>This is paragraph 82 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 83</h2><p>This is paragraph 83 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 84</h2><p>This is paragraph 84 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 85</h2><p>This is paragraph 85 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 86</h2><p>This is paragraph 86 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 87</h2><p>This is paragraph 87 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 88</h2><p>This is paragraph 88 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 89</h2><p>This is paragraph 89 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 90</h2><p>This is paragraph 90 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 91</h2><p>This is paragraph 91 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 92</h2><p>This is paragraph 92 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 93</h2><p>This is paragraph 93 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 94</h2><p>This is paragraph 94 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 95</h2><p>This is paragraph 95 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 96</h2><p>This is paragraph 96 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 97</h2><p>This is paragraph 97 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 98</h2><p>This is paragraph 98 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 99</h2><p>This is paragraph 99 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 100</h2><p>This is paragraph 100 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"},"allows custom paragraph renderer":{input:"Test paragraph",output:"<p>Test paragraph</p>"},"falls back to default renderer when custom not provided":{input:"# Header",output:"<h1 >Header</h1>"},"allows custom emphasis renderer":{input:"This is *custom italic* text",output:"<p>This is <em>custom italic</em> text</p>"},"allows custom link renderer with additional attributes":{input:"[Original Link](https://example.com)",output:'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Original Link</a></p>'},"allows chaining of custom renderers":{input:"**Bold** and *italic* text",output:"<p><strong>Bold</strong> and <em>italic</em> text</p>"},"renders tables with emphasis and links":{input:`| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`,output:'<table><thead><tr><th >Name</th><th >Description</th><th >Link</th></tr></thead><tbody><tr><td ><strong>Bold Name</strong></td><td ><em>Italic description</em></td><td ><a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a></td></tr><tr><td ><del>Deprecated</del></td><td ><code>code example</code></td><td ><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders tables with images":{input:`| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`,output:'<table><thead><tr><th >Icon</th><th >Name</th><th >Description</th></tr></thead><tbody><tr><td ><img src="icon.png" alt="Icon"></td><td >Project</td><td >Main project</td></tr><tr><td ><img src="logo.svg" alt="Logo"></td><td >Brand</td><td >Company brand</td></tr></tbody></table>',extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"handles empty table cells":{input:`| Col1 | Col2 | Col3 |
|------|------|------|
| Data || More |
||Data ||`,output:"<table><thead><tr><th >Col1</th><th >Col2</th><th >Col3</th></tr></thead><tbody><tr><td >Data</td><td ></td><td >More</td></tr><tr><td ></td><td >Data</td><td ></td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders simple table":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:"<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders table with alignment":{input:`| Left | Center | Right |
|:-----|:------:|------:|
| L1   |   C1   |    R1 |`,output:"<table><thead><tr><th >Left</th><th >Center</th><th >Right</th></tr></thead><tbody><tr><td >L1</td><td >C1</td><td >R1</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders standalone table correctly":{input:`| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`,output:"<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough text":{input:"~~strikethrough~~",output:"<p><del>strikethrough</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough within paragraph":{input:"This is ~~deleted~~ text.",output:"<p>This is <del>deleted</del> text.</p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders strikethrough with nested emphasis":{input:"~~This is deleted with **bold** and *italic* text~~",output:"<p><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]},"renders complex nested emphasis combinations":{input:"***This is bold and italic*** with ~~strikethrough **and bold**~~",output:"<p><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></p>",extensions:["gfm"],mdastExtensions:["gfmFromMarkdown"]}};function kn(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}const at=Ot(/[A-Za-z]/),ct=Ot(/[\dA-Za-z]/),ml=Ot(/[#-'*+\--9=?A-Z^-~]/);function Ae(t){return t!==null&&(t<32||t===127)}const Ze=Ot(/\d/),dl=Ot(/[\dA-Fa-f]/),fl=Ot(/[!-/:-@[-`{-~]/);function v(t){return t!==null&&t<-2}function J(t){return t!==null&&(t<0||t===32)}function $(t){return t===-2||t===-1||t===32}const ve=Ot(/\p{P}|\p{S}/u),Bt=Ot(/\s/);function Ot(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function gl(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const un=function(t){if(t==null)return Il;if(typeof t=="function")return ze(t);if(typeof t=="object")return Array.isArray(t)?bl(t):xl(t);if(typeof t=="string")return wl(t);throw new Error("Expected function, string, or object as test")};function bl(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=un(t[n]);return ze(i);function i(...r){let o=-1;for(;++o<e.length;)if(e[o].apply(this,r))return!0;return!1}}function xl(t){const e=t;return ze(n);function n(i){const r=i;let o;for(o in t)if(r[o]!==e[o])return!1;return!0}}function wl(t){return ze(e);function e(n){return n&&n.type===t}}function ze(t){return e;function e(n,i,r){return!!(yl(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function Il(){return!0}function yl(t){return t!==null&&typeof t=="object"&&"type"in t}const xi=[],kl=!0,Sn=!1,Sl="skip";function Tl(t,e,n,i){let r;r=e;const o=un(r),l=1;a(t,void 0,[])();function a(s,u,h){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=xi,g,y,S;if(o(s,u,h[h.length-1]||void 0)&&(p=Cl(n(s,h)),p[0]===Sn))return p;if("children"in s&&s.children){const I=s;if(I.children&&p[0]!==Sl)for(y=-1+l,S=h.concat(I);y>-1&&y<I.children.length;){const C=I.children[y];if(g=a(C,y,S)(),g[0]===Sn)return g;y=typeof g[1]=="number"?g[1]:y+l}}return p}}}function Cl(t){return Array.isArray(t)?t:typeof t=="number"?[kl,t]:t==null?xi:[t]}function Al(t,e,n){const r=un((n||{}).ignore||[]),o=Pl(e);let l=-1;for(;++l<o.length;)Tl(t,"text",a);function a(u,h){let c=-1,d;for(;++c<h.length;){const p=h[c],g=d?d.children:void 0;if(r(p,g?g.indexOf(p):void 0,d))return;d=p}if(d)return s(u,h)}function s(u,h){const c=h[h.length-1],d=o[l][0],p=o[l][1];let g=0;const S=c.children.indexOf(u);let I=!1,C=[];d.lastIndex=0;let k=d.exec(u.value);for(;k;){const P=k.index,z={index:k.index,input:k.input,stack:[...h,u]};let x=p(...k,z);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?d.lastIndex=P+1:(g!==P&&C.push({type:"text",value:u.value.slice(g,P)}),Array.isArray(x)?C.push(...x):x&&C.push(x),g=P+k[0].length,I=!0),!d.global)break;k=d.exec(u.value)}return I?(g<u.value.length&&C.push({type:"text",value:u.value.slice(g)}),c.children.splice(S,1,...C)):C=[u],S+C.length}}function Pl(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([El(r[0]),_l(r[1])])}return e}function El(t){return typeof t=="string"?new RegExp(gl(t),"g"):t}function _l(t){return typeof t=="function"?t:function(){return t}}function Fl(){return{transforms:[Ml],enter:{literalAutolink:Ll,literalAutolinkEmail:Be,literalAutolinkHttp:Be,literalAutolinkWww:Be},exit:{literalAutolink:Dl,literalAutolinkEmail:Ol,literalAutolinkHttp:vl,literalAutolinkWww:zl}}}function Ll(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Be(t){this.config.enter.autolinkProtocol.call(this,t)}function vl(t){this.config.exit.autolinkProtocol.call(this,t)}function zl(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function Ol(t){this.config.exit.autolinkEmail.call(this,t)}function Dl(t){this.exit(t)}function Ml(t){Al(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$l],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Rl]],{ignore:["link","linkReference"]})}function $l(t,e,n,i,r){let o="";if(!wi(r)||(/^w/i.test(e)&&(n=e+n,e="",o="http://"),!Nl(n)))return!1;const l=Bl(n+i);if(!l[0])return!1;const a={type:"link",title:null,url:o+e+l[0],children:[{type:"text",value:e+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function Rl(t,e,n,i){return!wi(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function Nl(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function Bl(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=kn(t,"(");let o=kn(t,")");for(;i!==-1&&r>o;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),o++;return[t,n]}function wi(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||Bt(n)||ve(n))&&(!e||n!==47)}function bt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function jl(){this.buffer()}function ql(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Hl(){this.buffer()}function Vl(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function Ul(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Wl(t){this.exit(t)}function Ql(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=bt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function Gl(t){this.exit(t)}function Kl(){return{enter:{gfmFootnoteCallString:jl,gfmFootnoteCall:ql,gfmFootnoteDefinitionLabelString:Hl,gfmFootnoteDefinition:Vl},exit:{gfmFootnoteCallString:Ul,gfmFootnoteCall:Wl,gfmFootnoteDefinitionLabelString:Ql,gfmFootnoteDefinition:Gl}}}function Yl(){return{canContainEols:["delete"],enter:{strikethrough:Jl},exit:{strikethrough:Xl}}}function Jl(t){this.enter({type:"delete",children:[]},t)}function Xl(t){this.exit(t)}function Pe(t){if(t===null||J(t)||Bt(t))return 1;if(ve(t))return 2}const Zl={};function to(t,e){const n=Zl,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Ii(t,i,r)}function Ii(t,e,n){if(eo(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Tn(t.children,e,n)}return Array.isArray(t)?Tn(t,e,n):""}function Tn(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=Ii(t[r],e,n);return i.join("")}function eo(t){return!!(t&&typeof t=="object")}const Cn=document.createElement("i");function cn(t){const e="&"+t+";";Cn.innerHTML=e;const n=Cn.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function yi(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}const no=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function io(t){return t.replace(no,ro)}function ro(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return yi(n.slice(o?2:1),o?16:10)}return cn(n)||t}function lo(){return{enter:{table:oo,tableData:An,tableHeader:An,tableRow:so},exit:{codeText:uo,table:ao,tableData:je,tableHeader:je,tableRow:je}}}function oo(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function ao(t){this.exit(t),this.data.inTable=void 0}function so(t){this.enter({type:"tableRow",children:[]},t)}function je(t){this.exit(t)}function An(t){this.enter({type:"tableCell",children:[]},t)}function uo(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,co));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function co(t,e){return e==="|"?e:t}function ho(){return{exit:{taskListCheckValueChecked:Pn,taskListCheckValueUnchecked:Pn,paragraph:po}}}function Pn(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function po(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let o=-1,l;for(;++o<r.length;){const a=r[o];if(a.type==="paragraph"){l=a;break}}l===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function mo(){return[Fl(),Kl(),Yl(),lo(),ho()]}function mt(t,e,n,i){const r=t.length;let o=0,l;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)l=Array.from(i),l.unshift(e,n),t.splice(...l);else for(n&&t.splice(e,n);o<i.length;)l=i.slice(o,o+1e4),l.unshift(e,0),t.splice(...l),o+=1e4,e+=1e4}function dt(t,e){return t.length>0?(mt(t,t.length,0,e),t):e}const En={}.hasOwnProperty;function ki(t){const e={};let n=-1;for(;++n<t.length;)fo(e,t[n]);return e}function fo(t,e){let n;for(n in e){const r=(En.call(t,n)?t[n]:void 0)||(t[n]={}),o=e[n];let l;if(o)for(l in o){En.call(r,l)||(r[l]=[]);const a=o[l];go(r[l],Array.isArray(a)?a:a?[a]:[])}}}function go(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);mt(t,0,0,i)}const bo={tokenize:So,partial:!0},Si={tokenize:To,partial:!0},Ti={tokenize:Co,partial:!0},Ci={tokenize:Ao,partial:!0},xo={tokenize:Po,partial:!0},Ai={name:"wwwAutolink",tokenize:yo,previous:Ei},Pi={name:"protocolAutolink",tokenize:ko,previous:_i},Ft={name:"emailAutolink",tokenize:Io,previous:Fi},kt={};function wo(){return{text:kt}}let $t=48;for(;$t<123;)kt[$t]=Ft,$t++,$t===58?$t=65:$t===91&&($t=97);kt[43]=Ft;kt[45]=Ft;kt[46]=Ft;kt[95]=Ft;kt[72]=[Ft,Pi];kt[104]=[Ft,Pi];kt[87]=[Ft,Ai];kt[119]=[Ft,Ai];function Io(t,e,n){const i=this;let r,o;return l;function l(c){return!tn(c)||!Fi.call(i,i.previous)||hn(i.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),a(c))}function a(c){return tn(c)?(t.consume(c),a):c===64?(t.consume(c),s):n(c)}function s(c){return c===46?t.check(xo,h,u)(c):c===45||c===95||ct(c)?(o=!0,t.consume(c),s):h(c)}function u(c){return t.consume(c),r=!0,s}function h(c){return o&&r&&at(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function yo(t,e,n){const i=this;return r;function r(l){return l!==87&&l!==119||!Ei.call(i,i.previous)||hn(i.events)?n(l):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(bo,t.attempt(Si,t.attempt(Ti,o),n),n)(l))}function o(l){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(l)}}function ko(t,e,n){const i=this;let r="",o=!1;return l;function l(c){return(c===72||c===104)&&_i.call(i,i.previous)&&!hn(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),t.consume(c),a):n(c)}function a(c){if(at(c)&&r.length<5)return r+=String.fromCodePoint(c),t.consume(c),a;if(c===58){const d=r.toLowerCase();if(d==="http"||d==="https")return t.consume(c),s}return n(c)}function s(c){return c===47?(t.consume(c),o?u:(o=!0,s)):n(c)}function u(c){return c===null||Ae(c)||J(c)||Bt(c)||ve(c)?n(c):t.attempt(Si,t.attempt(Ti,h),n)(c)}function h(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function So(t,e,n){let i=0;return r;function r(l){return(l===87||l===119)&&i<3?(i++,t.consume(l),r):l===46&&i===3?(t.consume(l),o):n(l)}function o(l){return l===null?n(l):e(l)}}function To(t,e,n){let i,r,o;return l;function l(u){return u===46||u===95?t.check(Ci,s,a)(u):u===null||J(u)||Bt(u)||u!==45&&ve(u)?s(u):(o=!0,t.consume(u),l)}function a(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),l}function s(u){return r||i||!o?n(u):e(u)}}function Co(t,e){let n=0,i=0;return r;function r(l){return l===40?(n++,t.consume(l),r):l===41&&i<n?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?t.check(Ci,e,o)(l):l===null||J(l)||Bt(l)?e(l):(t.consume(l),r)}function o(l){return l===41&&i++,t.consume(l),r}}function Ao(t,e,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(t.consume(a),i):a===38?(t.consume(a),o):a===93?(t.consume(a),r):a===60||a===null||J(a)||Bt(a)?e(a):n(a)}function r(a){return a===null||a===40||a===91||J(a)||Bt(a)?e(a):i(a)}function o(a){return at(a)?l(a):n(a)}function l(a){return a===59?(t.consume(a),i):at(a)?(t.consume(a),l):n(a)}}function Po(t,e,n){return i;function i(o){return t.consume(o),r}function r(o){return ct(o)?n(o):e(o)}}function Ei(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||J(t)}function _i(t){return!at(t)}function Fi(t){return!(t===47||tn(t))}function tn(t){return t===43||t===45||t===46||t===95||ct(t)}function hn(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}function Oe(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const o=t[r].resolveAll;o&&!i.includes(o)&&(e=o(e,n),i.push(o))}return e}const en={name:"attention",resolveAll:Eo,tokenize:_o};function Eo(t,e){let n=-1,i,r,o,l,a,s,u,h;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;s=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const c={...t[i][1].end},d={...t[n][1].start};_n(c,-s),_n(d,s),l={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...t[i][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:d},o={type:s>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:s>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},t[i][1].end={...l.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=dt(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=dt(u,[["enter",r,e],["enter",l,e],["exit",l,e],["enter",o,e]]),u=dt(u,Oe(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=dt(u,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(h=2,u=dt(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):h=0,mt(t,i-1,n-i+3,u),n=i+u.length-h-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function _o(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Pe(i);let o;return l;function l(s){return o=s,t.enter("attentionSequence"),a(s)}function a(s){if(s===o)return t.consume(s),a;const u=t.exit("attentionSequence"),h=Pe(s),c=!h||h===2&&r||n.includes(s),d=!r||r===2&&h||n.includes(i);return u._open=!!(o===42?c:c&&(r||!d)),u._close=!!(o===42?d:d&&(h||!c)),e(s)}}function _n(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const Fo={name:"autolink",tokenize:Lo};function Lo(t,e,n){let i=0;return r;function r(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(p){return at(p)?(t.consume(p),l):p===64?n(p):u(p)}function l(p){return p===43||p===45||p===46||ct(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(t.consume(p),i=0,s):(p===43||p===45||p===46||ct(p))&&i++<32?(t.consume(p),a):(i=0,u(p))}function s(p){return p===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):p===null||p===32||p===60||Ae(p)?n(p):(t.consume(p),s)}function u(p){return p===64?(t.consume(p),h):ml(p)?(t.consume(p),u):n(p)}function h(p){return ct(p)?c(p):n(p)}function c(p){return p===46?(t.consume(p),i=0,h):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):d(p)}function d(p){if((p===45||ct(p))&&i++<63){const g=p===45?d:c;return t.consume(p),g}return n(p)}}function j(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(s){return $(s)?(t.enter(n),a(s)):e(s)}function a(s){return $(s)&&o++<r?(t.consume(s),a):(t.exit(n),e(s))}}const ce={partial:!0,tokenize:vo};function vo(t,e,n){return i;function i(o){return $(o)?j(t,r,"linePrefix")(o):r(o)}function r(o){return o===null||v(o)?e(o):n(o)}}const Li={continuation:{tokenize:Oo},exit:Do,name:"blockQuote",tokenize:zo};function zo(t,e,n){const i=this;return r;function r(l){if(l===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),o}return n(l)}function o(l){return $(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(l))}}function Oo(t,e,n){const i=this;return r;function r(l){return $(l)?j(t,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return t.attempt(Li,e,n)(l)}}function Do(t){t.exit("blockQuote")}const vi={name:"characterEscape",tokenize:Mo};function Mo(t,e,n){return i;function i(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),r}function r(o){return fl(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(o)}}const zi={name:"characterReference",tokenize:$o};function $o(t,e,n){const i=this;let r=0,o,l;return a;function a(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),s}function s(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),o=31,l=ct,h(c))}function u(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,l=dl,h):(t.enter("characterReferenceValue"),o=7,l=Ze,h(c))}function h(c){if(c===59&&r){const d=t.exit("characterReferenceValue");return l===ct&&!cn(i.sliceSerialize(d))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return l(c)&&r++<o?(t.consume(c),h):n(c)}}const Fn={partial:!0,tokenize:No},Ln={concrete:!0,name:"codeFenced",tokenize:Ro};function Ro(t,e,n){const i=this,r={partial:!0,tokenize:z};let o=0,l=0,a;return s;function s(x){return u(x)}function u(x){const M=i.events[i.events.length-1];return o=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,a=x,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),h(x)}function h(x){return x===a?(l++,t.consume(x),h):l<3?n(x):(t.exit("codeFencedFenceSequence"),$(x)?j(t,c,"whitespace")(x):c(x))}function c(x){return x===null||v(x)?(t.exit("codeFencedFence"),i.interrupt?e(x):t.check(Fn,y,P)(x)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),d(x))}function d(x){return x===null||v(x)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(x)):$(x)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),j(t,p,"whitespace")(x)):x===96&&x===a?n(x):(t.consume(x),d)}function p(x){return x===null||v(x)?c(x):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||v(x)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(x)):x===96&&x===a?n(x):(t.consume(x),g)}function y(x){return t.attempt(r,P,S)(x)}function S(x){return t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),I}function I(x){return o>0&&$(x)?j(t,C,"linePrefix",o+1)(x):C(x)}function C(x){return x===null||v(x)?t.check(Fn,y,P)(x):(t.enter("codeFlowValue"),k(x))}function k(x){return x===null||v(x)?(t.exit("codeFlowValue"),C(x)):(t.consume(x),k)}function P(x){return t.exit("codeFenced"),e(x)}function z(x,M,q){let R=0;return b;function b(E){return x.enter("lineEnding"),x.consume(E),x.exit("lineEnding"),_}function _(E){return x.enter("codeFencedFence"),$(E)?j(x,A,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):A(E)}function A(E){return E===a?(x.enter("codeFencedFenceSequence"),V(E)):q(E)}function V(E){return E===a?(R++,x.consume(E),V):R>=l?(x.exit("codeFencedFenceSequence"),$(E)?j(x,F,"whitespace")(E):F(E)):q(E)}function F(E){return E===null||v(E)?(x.exit("codeFencedFence"),M(E)):q(E)}}}function No(t,e,n){const i=this;return r;function r(l){return l===null?n(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),o)}function o(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}const qe={name:"codeIndented",tokenize:jo},Bo={partial:!0,tokenize:qo};function jo(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),j(t,o,"linePrefix",5)(u)}function o(u){const h=i.events[i.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):v(u)?t.attempt(Bo,l,s)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||v(u)?(t.exit("codeFlowValue"),l(u)):(t.consume(u),a)}function s(u){return t.exit("codeIndented"),e(u)}}function qo(t,e,n){const i=this;return r;function r(l){return i.parser.lazy[i.now().line]?n(l):v(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),r):j(t,o,"linePrefix",5)(l)}function o(l){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):v(l)?r(l):n(l)}}const Ho={name:"codeText",previous:Uo,resolve:Vo,tokenize:Wo};function Vo(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function Uo(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Wo(t,e,n){let i=0,r,o;return l;function l(c){return t.enter("codeText"),t.enter("codeTextSequence"),a(c)}function a(c){return c===96?(t.consume(c),i++,a):(t.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(t.enter("space"),t.consume(c),t.exit("space"),s):c===96?(o=t.enter("codeTextSequence"),r=0,h(c)):v(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s):(t.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||v(c)?(t.exit("codeTextData"),s(c)):(t.consume(c),u)}function h(c){return c===96?(t.consume(c),r++,h):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(c)):(o.type="codeTextData",u(c))}}class Qo{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Zt(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Zt(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Zt(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Zt(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Zt(this.left,n.reverse())}}}function Zt(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Oi(t){const e={};let n=-1,i,r,o,l,a,s,u;const h=new Qo(t);for(;++n<h.length;){for(;n in e;)n=e[n];if(i=h.get(n),n&&i[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(s=i[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,Go(h,n)),n=e[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--;)if(l=h.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(r&&(h.get(r)[1].type="lineEndingBlank"),l[1].type="lineEnding",r=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;r&&(i[1].end={...h.get(r)[1].start},a=h.slice(r,n),a.unshift(i),h.splice(r,n-r+1,a))}}return mt(t,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function Go(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const o=[];let l=n._tokenizer;l||(l=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,s=[],u={};let h,c,d=-1,p=n,g=0,y=0;const S=[y];for(;p;){for(;t.get(++r)[1]!==p;);o.push(r),p._tokenizer||(h=i.sliceStream(p),p.next||h.push(null),c&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(y=d+1,S.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),d=S.length;d--;){const I=a.slice(S[d],S[d+1]),C=o.pop();s.push([C,C+I.length-1]),t.splice(C,2,I)}for(s.reverse(),d=-1;++d<s.length;)u[g+s[d][0]]=g+s[d][1],g+=s[d][1]-s[d][0]-1;return u}const Ko={resolve:Jo,tokenize:Xo},Yo={partial:!0,tokenize:Zo};function Jo(t){return Oi(t),t}function Xo(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):v(a)?t.check(Yo,l,o)(a):(t.consume(a),r)}function o(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function l(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function Zo(t,e,n){const i=this;return r;function r(l){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),j(t,o,"linePrefix")}function o(l){if(l===null||v(l))return n(l);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):t.interrupt(i.parser.constructs.flow,n,e)(l)}}function Di(t,e,n,i,r,o,l,a,s){const u=s||Number.POSITIVE_INFINITY;let h=0;return c;function c(I){return I===60?(t.enter(i),t.enter(r),t.enter(o),t.consume(I),t.exit(o),d):I===null||I===32||I===41||Ae(I)?n(I):(t.enter(i),t.enter(l),t.enter(a),t.enter("chunkString",{contentType:"string"}),y(I))}function d(I){return I===62?(t.enter(o),t.consume(I),t.exit(o),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),p(I))}function p(I){return I===62?(t.exit("chunkString"),t.exit(a),d(I)):I===null||I===60||v(I)?n(I):(t.consume(I),I===92?g:p)}function g(I){return I===60||I===62||I===92?(t.consume(I),p):p(I)}function y(I){return!h&&(I===null||I===41||J(I))?(t.exit("chunkString"),t.exit(a),t.exit(l),t.exit(i),e(I)):h<u&&I===40?(t.consume(I),h++,y):I===41?(t.consume(I),h--,y):I===null||I===32||I===40||Ae(I)?n(I):(t.consume(I),I===92?S:y)}function S(I){return I===40||I===41||I===92?(t.consume(I),y):y(I)}}function Mi(t,e,n,i,r,o){const l=this;let a=0,s;return u;function u(p){return t.enter(i),t.enter(r),t.consume(p),t.exit(r),t.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!s||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(t.exit(o),t.enter(r),t.consume(p),t.exit(r),t.exit(i),e):v(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),h):(t.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||v(p)||a++>999?(t.exit("chunkString"),h(p)):(t.consume(p),s||(s=!$(p)),p===92?d:c)}function d(p){return p===91||p===92||p===93?(t.consume(p),a++,c):c(p)}}function $i(t,e,n,i,r,o){let l;return a;function a(d){return d===34||d===39||d===40?(t.enter(i),t.enter(r),t.consume(d),t.exit(r),l=d===40?41:d,s):n(d)}function s(d){return d===l?(t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):(t.enter(o),u(d))}function u(d){return d===l?(t.exit(o),s(l)):d===null?n(d):v(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),j(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===l||d===null||v(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?c:h)}function c(d){return d===l||d===92?(t.consume(d),h):h(d)}}function re(t,e){let n;return i;function i(r){return v(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):$(r)?j(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const ta={name:"definition",tokenize:na},ea={partial:!0,tokenize:ia};function na(t,e,n){const i=this;let r;return o;function o(p){return t.enter("definition"),l(p)}function l(p){return Mi.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=bt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(t.enter("definitionMarker"),t.consume(p),t.exit("definitionMarker"),s):n(p)}function s(p){return J(p)?re(t,u)(p):u(p)}function u(p){return Di(t,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return t.attempt(ea,c,c)(p)}function c(p){return $(p)?j(t,d,"whitespace")(p):d(p)}function d(p){return p===null||v(p)?(t.exit("definition"),i.parser.defined.push(r),e(p)):n(p)}}function ia(t,e,n){return i;function i(a){return J(a)?re(t,r)(a):n(a)}function r(a){return $i(t,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return $(a)?j(t,l,"whitespace")(a):l(a)}function l(a){return a===null||v(a)?e(a):n(a)}}const ra={name:"hardBreakEscape",tokenize:la};function la(t,e,n){return i;function i(o){return t.enter("hardBreakEscape"),t.consume(o),r}function r(o){return v(o)?(t.exit("hardBreakEscape"),e(o)):n(o)}}const oa={name:"headingAtx",resolve:aa,tokenize:sa};function aa(t,e){let n=t.length-2,i=3,r,o;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},o={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},mt(t,i,n-i+1,[["enter",r,e],["enter",o,e],["exit",o,e],["exit",r,e]])),t}function sa(t,e,n){let i=0;return r;function r(h){return t.enter("atxHeading"),o(h)}function o(h){return t.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&i++<6?(t.consume(h),l):h===null||J(h)?(t.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(t.enter("atxHeadingSequence"),s(h)):h===null||v(h)?(t.exit("atxHeading"),e(h)):$(h)?j(t,a,"whitespace")(h):(t.enter("atxHeadingText"),u(h))}function s(h){return h===35?(t.consume(h),s):(t.exit("atxHeadingSequence"),a(h))}function u(h){return h===null||h===35||J(h)?(t.exit("atxHeadingText"),a(h)):(t.consume(h),u)}}const ua=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vn=["pre","script","style","textarea"],ca={concrete:!0,name:"htmlFlow",resolveTo:ma,tokenize:da},ha={partial:!0,tokenize:ga},pa={partial:!0,tokenize:fa};function ma(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function da(t,e,n){const i=this;let r,o,l,a,s;return u;function u(f){return h(f)}function h(f){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(f),c}function c(f){return f===33?(t.consume(f),d):f===47?(t.consume(f),o=!0,y):f===63?(t.consume(f),r=3,i.interrupt?e:m):at(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function d(f){return f===45?(t.consume(f),r=2,p):f===91?(t.consume(f),r=5,a=0,g):at(f)?(t.consume(f),r=4,i.interrupt?e:m):n(f)}function p(f){return f===45?(t.consume(f),i.interrupt?e:m):n(f)}function g(f){const st="CDATA[";return f===st.charCodeAt(a++)?(t.consume(f),a===st.length?i.interrupt?e:A:g):n(f)}function y(f){return at(f)?(t.consume(f),l=String.fromCharCode(f),S):n(f)}function S(f){if(f===null||f===47||f===62||J(f)){const st=f===47,wt=l.toLowerCase();return!st&&!o&&vn.includes(wt)?(r=1,i.interrupt?e(f):A(f)):ua.includes(l.toLowerCase())?(r=6,st?(t.consume(f),I):i.interrupt?e(f):A(f)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(f):o?C(f):k(f))}return f===45||ct(f)?(t.consume(f),l+=String.fromCharCode(f),S):n(f)}function I(f){return f===62?(t.consume(f),i.interrupt?e:A):n(f)}function C(f){return $(f)?(t.consume(f),C):b(f)}function k(f){return f===47?(t.consume(f),b):f===58||f===95||at(f)?(t.consume(f),P):$(f)?(t.consume(f),k):b(f)}function P(f){return f===45||f===46||f===58||f===95||ct(f)?(t.consume(f),P):z(f)}function z(f){return f===61?(t.consume(f),x):$(f)?(t.consume(f),z):k(f)}function x(f){return f===null||f===60||f===61||f===62||f===96?n(f):f===34||f===39?(t.consume(f),s=f,M):$(f)?(t.consume(f),x):q(f)}function M(f){return f===s?(t.consume(f),s=null,R):f===null||v(f)?n(f):(t.consume(f),M)}function q(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||J(f)?z(f):(t.consume(f),q)}function R(f){return f===47||f===62||$(f)?k(f):n(f)}function b(f){return f===62?(t.consume(f),_):n(f)}function _(f){return f===null||v(f)?A(f):$(f)?(t.consume(f),_):n(f)}function A(f){return f===45&&r===2?(t.consume(f),B):f===60&&r===1?(t.consume(f),G):f===62&&r===4?(t.consume(f),D):f===63&&r===3?(t.consume(f),m):f===93&&r===5?(t.consume(f),et):v(f)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(ha,K,V)(f)):f===null||v(f)?(t.exit("htmlFlowData"),V(f)):(t.consume(f),A)}function V(f){return t.check(pa,F,K)(f)}function F(f){return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),E}function E(f){return f===null||v(f)?V(f):(t.enter("htmlFlowData"),A(f))}function B(f){return f===45?(t.consume(f),m):A(f)}function G(f){return f===47?(t.consume(f),l="",W):A(f)}function W(f){if(f===62){const st=l.toLowerCase();return vn.includes(st)?(t.consume(f),D):A(f)}return at(f)&&l.length<8?(t.consume(f),l+=String.fromCharCode(f),W):A(f)}function et(f){return f===93?(t.consume(f),m):A(f)}function m(f){return f===62?(t.consume(f),D):f===45&&r===2?(t.consume(f),m):A(f)}function D(f){return f===null||v(f)?(t.exit("htmlFlowData"),K(f)):(t.consume(f),D)}function K(f){return t.exit("htmlFlow"),e(f)}}function fa(t,e,n){const i=this;return r;function r(l){return v(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),o):n(l)}function o(l){return i.parser.lazy[i.now().line]?n(l):e(l)}}function ga(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(ce,e,n)}}const ba={name:"htmlText",tokenize:xa};function xa(t,e,n){const i=this;let r,o,l;return a;function a(m){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(m),s}function s(m){return m===33?(t.consume(m),u):m===47?(t.consume(m),z):m===63?(t.consume(m),k):at(m)?(t.consume(m),q):n(m)}function u(m){return m===45?(t.consume(m),h):m===91?(t.consume(m),o=0,g):at(m)?(t.consume(m),C):n(m)}function h(m){return m===45?(t.consume(m),p):n(m)}function c(m){return m===null?n(m):m===45?(t.consume(m),d):v(m)?(l=c,G(m)):(t.consume(m),c)}function d(m){return m===45?(t.consume(m),p):c(m)}function p(m){return m===62?B(m):m===45?d(m):c(m)}function g(m){const D="CDATA[";return m===D.charCodeAt(o++)?(t.consume(m),o===D.length?y:g):n(m)}function y(m){return m===null?n(m):m===93?(t.consume(m),S):v(m)?(l=y,G(m)):(t.consume(m),y)}function S(m){return m===93?(t.consume(m),I):y(m)}function I(m){return m===62?B(m):m===93?(t.consume(m),I):y(m)}function C(m){return m===null||m===62?B(m):v(m)?(l=C,G(m)):(t.consume(m),C)}function k(m){return m===null?n(m):m===63?(t.consume(m),P):v(m)?(l=k,G(m)):(t.consume(m),k)}function P(m){return m===62?B(m):k(m)}function z(m){return at(m)?(t.consume(m),x):n(m)}function x(m){return m===45||ct(m)?(t.consume(m),x):M(m)}function M(m){return v(m)?(l=M,G(m)):$(m)?(t.consume(m),M):B(m)}function q(m){return m===45||ct(m)?(t.consume(m),q):m===47||m===62||J(m)?R(m):n(m)}function R(m){return m===47?(t.consume(m),B):m===58||m===95||at(m)?(t.consume(m),b):v(m)?(l=R,G(m)):$(m)?(t.consume(m),R):B(m)}function b(m){return m===45||m===46||m===58||m===95||ct(m)?(t.consume(m),b):_(m)}function _(m){return m===61?(t.consume(m),A):v(m)?(l=_,G(m)):$(m)?(t.consume(m),_):R(m)}function A(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(t.consume(m),r=m,V):v(m)?(l=A,G(m)):$(m)?(t.consume(m),A):(t.consume(m),F)}function V(m){return m===r?(t.consume(m),r=void 0,E):m===null?n(m):v(m)?(l=V,G(m)):(t.consume(m),V)}function F(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||J(m)?R(m):(t.consume(m),F)}function E(m){return m===47||m===62||J(m)?R(m):n(m)}function B(m){return m===62?(t.consume(m),t.exit("htmlTextData"),t.exit("htmlText"),e):n(m)}function G(m){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),W}function W(m){return $(m)?j(t,et,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):et(m)}function et(m){return t.enter("htmlTextData"),l(m)}}const pn={name:"labelEnd",resolveAll:ka,resolveTo:Sa,tokenize:Ta},wa={tokenize:Ca},Ia={tokenize:Aa},ya={tokenize:Pa};function ka(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&mt(t,0,t.length,n),t}function Sa(t,e){let n=t.length,i=0,r,o,l,a;for(;n--;)if(r=t[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(l){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(l=n);const s={type:t[o][1].type==="labelLink"?"link":"image",start:{...t[o][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[o][1].start},end:{...t[l][1].end}},h={type:"labelText",start:{...t[o+i+2][1].end},end:{...t[l-2][1].start}};return a=[["enter",s,e],["enter",u,e]],a=dt(a,t.slice(o+1,o+i+3)),a=dt(a,[["enter",h,e]]),a=dt(a,Oe(e.parser.constructs.insideSpan.null,t.slice(o+i+4,l-3),e)),a=dt(a,[["exit",h,e],t[l-2],t[l-1],["exit",u,e]]),a=dt(a,t.slice(l+1)),a=dt(a,[["exit",s,e]]),mt(t,o,t.length,a),t}function Ta(t,e,n){const i=this;let r=i.events.length,o,l;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(d){return o?o._inactive?c(d):(l=i.parser.defined.includes(bt(i.sliceSerialize({start:o.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelEnd"),s):n(d)}function s(d){return d===40?t.attempt(wa,h,l?h:c)(d):d===91?t.attempt(Ia,h,l?u:c)(d):l?h(d):c(d)}function u(d){return t.attempt(ya,h,c)(d)}function h(d){return e(d)}function c(d){return o._balanced=!0,n(d)}}function Ca(t,e,n){return i;function i(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),r}function r(c){return J(c)?re(t,o)(c):o(c)}function o(c){return c===41?h(c):Di(t,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return J(c)?re(t,s)(c):h(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?$i(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):h(c)}function u(c){return J(c)?re(t,h)(c):h(c)}function h(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function Aa(t,e,n){const i=this;return r;function r(a){return Mi.call(i,t,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(bt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function l(a){return n(a)}}function Pa(t,e,n){return i;function i(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),r}function r(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),e):n(o)}}const Ea={name:"labelStartImage",resolveAll:pn.resolveAll,tokenize:_a};function _a(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),o}function o(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const Fa={name:"labelStartLink",resolveAll:pn.resolveAll,tokenize:La};function La(t,e,n){const i=this;return r;function r(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(l):e(l)}}const He={name:"lineEnding",tokenize:va};function va(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),j(t,e,"linePrefix")}}const be={name:"thematicBreak",tokenize:za};function za(t,e,n){let i=0,r;return o;function o(u){return t.enter("thematicBreak"),l(u)}function l(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),s(u)):i>=3&&(u===null||v(u))?(t.exit("thematicBreak"),e(u)):n(u)}function s(u){return u===r?(t.consume(u),i++,s):(t.exit("thematicBreakSequence"),$(u)?j(t,a,"whitespace")(u):a(u))}}const ut={continuation:{tokenize:$a},exit:Na,name:"list",tokenize:Ma},Oa={partial:!0,tokenize:Ba},Da={partial:!0,tokenize:Ra};function Ma(t,e,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,l=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Ze(p)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),p===42||p===45?t.check(be,n,u)(p):u(p);if(!i.interrupt||p===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),s(p)}return n(p)}function s(p){return Ze(p)&&++l<10?(t.consume(p),s):(!i.interrupt||l<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(t.exit("listItemValue"),u(p)):n(p)}function u(p){return t.enter("listItemMarker"),t.consume(p),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,t.check(ce,i.interrupt?n:h,t.attempt(Oa,d,c))}function h(p){return i.containerState.initialBlankLine=!0,o++,d(p)}function c(p){return $(p)?(t.enter("listItemPrefixWhitespace"),t.consume(p),t.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return i.containerState.size=o+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(p)}}function $a(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(ce,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,j(t,e,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!$(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,l(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(Da,e,l)(a))}function l(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,j(t,t.attempt(ut,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Ra(t,e,n){const i=this;return j(t,r,"listItemIndent",i.containerState.size+1);function r(o){const l=i.events[i.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===i.containerState.size?e(o):n(o)}}function Na(t){t.exit(this.containerState.type)}function Ba(t,e,n){const i=this;return j(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const l=i.events[i.events.length-1];return!$(o)&&l&&l[1].type==="listItemPrefixWhitespace"?e(o):n(o)}}const zn={name:"setextUnderline",resolveTo:ja,tokenize:qa};function ja(t,e){let n=t.length,i,r,o;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!o&&t[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",o?(t.splice(r,0,["enter",l,e]),t.splice(o+1,0,["exit",t[i][1],e]),t[i][1].end={...t[o][1].end}):t[i][1]=l,t.push(["exit",l,e]),t}function qa(t,e,n){const i=this;let r;return o;function o(u){let h=i.events.length,c;for(;h--;)if(i.events[h][1].type!=="lineEnding"&&i.events[h][1].type!=="linePrefix"&&i.events[h][1].type!=="content"){c=i.events[h][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(t.enter("setextHeadingLine"),r=u,l(u)):n(u)}function l(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),$(u)?j(t,s,"lineSuffix")(u):s(u))}function s(u){return u===null||v(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const Ha={tokenize:Ja,partial:!0};function Va(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Ga,continuation:{tokenize:Ka},exit:Ya}},text:{91:{name:"gfmFootnoteCall",tokenize:Qa},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ua,resolveTo:Wa}}}}function Ua(t,e,n){const i=this;let r=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l;for(;r--;){const s=i.events[r][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!l||!l._balanced)return n(s);const u=bt(i.sliceSerialize({start:l.end,end:i.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),e(s))}}function Wa(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",o,e],["enter",l,e],["exit",l,e],["exit",o,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...a),t}function Qa(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!l||c===null||c===91||J(c))return n(c);if(c===93){t.exit("chunkString");const d=t.exit("gfmFootnoteCallString");return r.includes(bt(i.sliceSerialize(d)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return J(c)||(l=!0),o++,t.consume(c),c===92?h:u}function h(c){return c===91||c===92||c===93?(t.consume(c),o++,u):u(c)}}function Ga(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,l=0,a;return s;function s(g){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",h):n(g)}function h(g){if(l>999||g===93&&!a||g===null||g===91||J(g))return n(g);if(g===93){t.exit("chunkString");const y=t.exit("gfmFootnoteDefinitionLabelString");return o=bt(i.sliceSerialize(y)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(g),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),d}return J(g)||(a=!0),l++,t.consume(g),g===92?c:h}function c(g){return g===91||g===92||g===93?(t.consume(g),l++,h):h(g)}function d(g){return g===58?(t.enter("definitionMarker"),t.consume(g),t.exit("definitionMarker"),r.includes(o)||r.push(o),j(t,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return e(g)}}function Ka(t,e,n){return t.check(ce,e,t.attempt(Ha,e,n))}function Ya(t){t.exit("gfmFootnoteDefinition")}function Ja(t,e,n){const i=this;return j(t,r,"gfmFootnoteDefinitionIndent",5);function r(o){const l=i.events[i.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?e(o):n(o)}}function Xa(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(l,a){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},c={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},d=[["enter",h,a],["enter",l[u][1],a],["exit",l[u][1],a],["enter",c,a]],p=a.parser.constructs.insideSpan.null;p&&mt(d,d.length,0,Oe(p,l.slice(u+1,s),a)),mt(d,d.length,0,[["exit",c,a],["enter",l[s][1],a],["exit",l[s][1],a],["exit",h,a]]),mt(l,u-1,s-u+3,d),s=u+d.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function o(l,a,s){const u=this.previous,h=this.events;let c=0;return d;function d(g){return u===126&&h[h.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const y=Pe(u);if(g===126)return c>1?s(g):(l.consume(g),c++,p);if(c<2&&!n)return s(g);const S=l.exit("strikethroughSequenceTemporary"),I=Pe(g);return S._open=!I||I===2&&!!y,S._close=!y||y===2&&!!I,a(g)}}}class Za{constructor(){this.map=[]}add(e,n,i){ts(this,e,n,i)}consume(e){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const o of r)e.push(o);r=i.pop()}this.map.length=0}}function ts(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function es(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function ns(){return{flow:{null:{name:"table",tokenize:is,resolveAll:rs}}}}function is(t,e,n){const i=this;let r=0,o=0,l;return a;function a(b){let _=i.events.length-1;for(;_>-1;){const F=i.events[_][1].type;if(F==="lineEnding"||F==="linePrefix")_--;else break}const A=_>-1?i.events[_][1].type:null,V=A==="tableHead"||A==="tableRow"?x:s;return V===x&&i.parser.lazy[i.now().line]?n(b):V(b)}function s(b){return t.enter("tableHead"),t.enter("tableRow"),u(b)}function u(b){return b===124||(l=!0,o+=1),h(b)}function h(b){return b===null?n(b):v(b)?o>1?(o=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),p):n(b):$(b)?j(t,h,"whitespace")(b):(o+=1,l&&(l=!1,r+=1),b===124?(t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),l=!0,h):(t.enter("data"),c(b)))}function c(b){return b===null||b===124||J(b)?(t.exit("data"),h(b)):(t.consume(b),b===92?d:c)}function d(b){return b===92||b===124?(t.consume(b),c):c(b)}function p(b){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(b):(t.enter("tableDelimiterRow"),l=!1,$(b)?j(t,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):g(b))}function g(b){return b===45||b===58?S(b):b===124?(l=!0,t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),y):z(b)}function y(b){return $(b)?j(t,S,"whitespace")(b):S(b)}function S(b){return b===58?(o+=1,l=!0,t.enter("tableDelimiterMarker"),t.consume(b),t.exit("tableDelimiterMarker"),I):b===45?(o+=1,I(b)):b===null||v(b)?P(b):z(b)}function I(b){return b===45?(t.enter("tableDelimiterFiller"),C(b)):z(b)}function C(b){return b===45?(t.consume(b),C):b===58?(l=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(b),t.exit("tableDelimiterMarker"),k):(t.exit("tableDelimiterFiller"),k(b))}function k(b){return $(b)?j(t,P,"whitespace")(b):P(b)}function P(b){return b===124?g(b):b===null||v(b)?!l||r!==o?z(b):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(b)):z(b)}function z(b){return n(b)}function x(b){return t.enter("tableRow"),M(b)}function M(b){return b===124?(t.enter("tableCellDivider"),t.consume(b),t.exit("tableCellDivider"),M):b===null||v(b)?(t.exit("tableRow"),e(b)):$(b)?j(t,M,"whitespace")(b):(t.enter("data"),q(b))}function q(b){return b===null||b===124||J(b)?(t.exit("data"),M(b)):(t.consume(b),b===92?R:q)}function R(b){return b===92||b===124?(t.consume(b),q):q(b)}}function rs(t,e){let n=-1,i=!0,r=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,s=0,u,h,c;const d=new Za;for(;++n<t.length;){const p=t[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(a=!1,s!==0&&(On(d,e,s,u,h),h=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,e]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,c=void 0,o=[0,0,0,0],l=[0,n+1,0,0],a&&(a=!1,h={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",h,e]])),r=g.type==="tableDelimiterRow"?2:h?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=fe(d,e,o,r,void 0,c),o=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(l[0]=l[1],c=fe(d,e,o,r,void 0,c)),o=l,l=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,o[1]!==0?(l[0]=l[1],c=fe(d,e,o,r,n,c)):l[1]!==0&&(c=fe(d,e,l,r,n,c)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&On(d,e,s,u,h),d.consume(e.events),n=-1;++n<e.events.length;){const p=e.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=es(e.events,n))}return t}function fe(t,e,n,i,r,o){const l=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Vt(e.events,n[0])),t.add(n[0],0,[["exit",o,e]]));const s=Vt(e.events,n[1]);if(o={type:l,start:Object.assign({},s),end:Object.assign({},s)},t.add(n[1],0,[["enter",o,e]]),n[2]!==0){const u=Vt(e.events,n[2]),h=Vt(e.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},h)};if(t.add(n[2],0,[["enter",c,e]]),i!==2){const d=e.events[n[2]],p=e.events[n[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,y=n[3]-n[2]-1;t.add(g,y,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return r!==void 0&&(o.end=Object.assign({},Vt(e.events,r)),t.add(r,0,[["exit",o,e]]),o=void 0),o}function On(t,e,n,i,r){const o=[],l=Vt(e.events,n);r&&(r.end=Object.assign({},l),o.push(["exit",r,e])),i.end=Object.assign({},l),o.push(["exit",i,e]),t.add(n+1,0,o)}function Vt(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const ls={name:"tasklistCheck",tokenize:as};function os(){return{text:{91:ls}}}function as(t,e,n){const i=this;return r;function r(s){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),o)}function o(s){return J(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),a):n(s)}function a(s){return v(s)?e(s):$(s)?t.check({tokenize:ss},e,n)(s):n(s)}}function ss(t,e,n){return j(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function us(t){return ki([wo(),Va(),Xa(t),ns(),os()])}const cs={gfm:us},hs={gfmFromMarkdown:mo},ps={tokenize:ms};function ms(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),j(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),o(a)}function o(a){const s=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(a)}function l(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return v(a)?(t.consume(a),t.exit("chunkText"),o):(t.consume(a),l)}}const ds={tokenize:fs},Dn={tokenize:gs};function fs(t){const e=this,n=[];let i=0,r,o,l;return a;function a(k){if(i<n.length){const P=n[i];return e.containerState=P[1],t.attempt(P[0].continuation,s,u)(k)}return u(k)}function s(k){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&C();const P=e.events.length;let z=P,x;for(;z--;)if(e.events[z][0]==="exit"&&e.events[z][1].type==="chunkFlow"){x=e.events[z][1].end;break}I(i);let M=P;for(;M<e.events.length;)e.events[M][1].end={...x},M++;return mt(e.events,z+1,0,e.events.slice(P)),e.events.length=M,u(k)}return a(k)}function u(k){if(i===n.length){if(!r)return d(k);if(r.currentConstruct&&r.currentConstruct.concrete)return g(k);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Dn,h,c)(k)}function h(k){return r&&C(),I(i),d(k)}function c(k){return e.parser.lazy[e.now().line]=i!==n.length,l=e.now().offset,g(k)}function d(k){return e.containerState={},t.attempt(Dn,p,g)(k)}function p(k){return i++,n.push([e.currentConstruct,e.containerState]),d(k)}function g(k){if(k===null){r&&C(),I(0),t.consume(k);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),y(k)}function y(k){if(k===null){S(t.exit("chunkFlow"),!0),I(0),t.consume(k);return}return v(k)?(t.consume(k),S(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(k),y)}function S(k,P){const z=e.sliceStream(k);if(P&&z.push(null),k.previous=o,o&&(o.next=k),o=k,r.defineSkip(k.start),r.write(z),e.parser.lazy[k.start.line]){let x=r.events.length;for(;x--;)if(r.events[x][1].start.offset<l&&(!r.events[x][1].end||r.events[x][1].end.offset>l))return;const M=e.events.length;let q=M,R,b;for(;q--;)if(e.events[q][0]==="exit"&&e.events[q][1].type==="chunkFlow"){if(R){b=e.events[q][1].end;break}R=!0}for(I(i),x=M;x<e.events.length;)e.events[x][1].end={...b},x++;mt(e.events,q+1,0,e.events.slice(M)),e.events.length=x}}function I(k){let P=n.length;for(;P-- >k;){const z=n[P];e.containerState=z[1],z[0].exit.call(e,t)}n.length=k}function C(){r.write([null]),o=void 0,r=void 0,e.containerState._closeFlow=void 0}}function gs(t,e,n){return j(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const bs={tokenize:xs};function xs(t){const e=this,n=t.attempt(ce,i,t.attempt(this.parser.constructs.flowInitial,r,j(t,t.attempt(this.parser.constructs.flow,r,t.attempt(Ko,r)),"linePrefix")));return n;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const ws={resolveAll:Ni()},Is=Ri("string"),ys=Ri("text");function Ri(t){return{resolveAll:Ni(t==="text"?ks:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],o=n.attempt(r,l,a);return l;function l(h){return u(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),s}function s(h){return u(h)?(n.exit("data"),o(h)):(n.consume(h),s)}function u(h){if(h===null)return!0;const c=r[h];let d=-1;if(c)for(;++d<c.length;){const p=c[d];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function Ni(t){return e;function e(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return t?t(n,i):n}}function ks(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let o=r.length,l=-1,a=0,s;for(;o--;){const u=r[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)s=!0,a++;else if(u!==-1){o++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){const u={type:n===t.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const Ss={42:ut,43:ut,45:ut,48:ut,49:ut,50:ut,51:ut,52:ut,53:ut,54:ut,55:ut,56:ut,57:ut,62:Li},Ts={91:ta},Cs={[-2]:qe,[-1]:qe,32:qe},As={35:oa,42:be,45:[zn,be],60:ca,61:zn,95:be,96:Ln,126:Ln},Ps={38:zi,92:vi},Es={[-5]:He,[-4]:He,[-3]:He,33:Ea,38:zi,42:en,60:[Fo,ba],91:Fa,92:[ra,vi],93:pn,95:en,96:Ho},_s={null:[en,ws]},Fs={null:[42,95]},Ls={null:[]},vs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Fs,contentInitial:Ts,disable:Ls,document:Ss,flow:As,flowInitial:Cs,insideSpan:_s,string:Ps,text:Es},Symbol.toStringTag,{value:"Module"}));function zs(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let l=[],a=[];const s={attempt:M(z),check:M(x),consume:C,enter:k,exit:P,interrupt:M(x,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:t,previous:null,sliceSerialize:d,sliceStream:p,write:c};let h=e.tokenize.call(u,s);return e.resolveAll&&o.push(e),u;function c(_){return l=dt(l,_),S(),l[l.length-1]!==null?[]:(q(e,0),u.events=Oe(o,u.events,u),u.events)}function d(_,A){return Ds(p(_),A)}function p(_){return Os(l,_)}function g(){const{_bufferIndex:_,_index:A,line:V,column:F,offset:E}=i;return{_bufferIndex:_,_index:A,line:V,column:F,offset:E}}function y(_){r[_.line]=_.column,b()}function S(){let _;for(;i._index<l.length;){const A=l[i._index];if(typeof A=="string")for(_=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===_&&i._bufferIndex<A.length;)I(A.charCodeAt(i._bufferIndex));else I(A)}}function I(_){h=h(_)}function C(_){v(_)?(i.line++,i.column=1,i.offset+=_===-3?2:1,b()):_!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===l[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=_}function k(_,A){const V=A||{};return V.type=_,V.start=g(),u.events.push(["enter",V,u]),a.push(V),V}function P(_){const A=a.pop();return A.end=g(),u.events.push(["exit",A,u]),A}function z(_,A){q(_,A.from)}function x(_,A){A.restore()}function M(_,A){return V;function V(F,E,B){let G,W,et,m;return Array.isArray(F)?K(F):"tokenize"in F?K([F]):D(F);function D(tt){return Lt;function Lt(ft){const St=ft!==null&&tt[ft],Tt=ft!==null&&tt.null,Dt=[...Array.isArray(St)?St:St?[St]:[],...Array.isArray(Tt)?Tt:Tt?[Tt]:[]];return K(Dt)(ft)}}function K(tt){return G=tt,W=0,tt.length===0?B:f(tt[W])}function f(tt){return Lt;function Lt(ft){return m=R(),et=tt,tt.partial||(u.currentConstruct=tt),tt.name&&u.parser.constructs.disable.null.includes(tt.name)?wt():tt.tokenize.call(A?Object.assign(Object.create(u),A):u,s,st,wt)(ft)}}function st(tt){return _(et,m),E}function wt(tt){return m.restore(),++W<G.length?f(G[W]):B}}}function q(_,A){_.resolveAll&&!o.includes(_)&&o.push(_),_.resolve&&mt(u.events,A,u.events.length-A,_.resolve(u.events.slice(A),u)),_.resolveTo&&(u.events=_.resolveTo(u.events,u))}function R(){const _=g(),A=u.previous,V=u.currentConstruct,F=u.events.length,E=Array.from(a);return{from:F,restore:B};function B(){i=_,u.previous=A,u.currentConstruct=V,u.events.length=F,a=E,b()}}function b(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function Os(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,o=e.end._bufferIndex;let l;if(n===r)l=[t[n].slice(i,o)];else{if(l=t.slice(n,r),i>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(i):l.shift()}o>0&&l.push(t[r].slice(0,o))}return l}function Ds(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const o=t[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=e?" ":"	";break}case-1:{if(!e&&r)continue;l=" ";break}default:l=String.fromCharCode(o)}r=o===-2,i.push(l)}return i.join("")}function Ms(t){const i={constructs:ki([vs,...(t||{}).extensions||[]]),content:r(ps),defined:[],document:r(ds),flow:r(bs),lazy:{},string:r(Is),text:r(ys)};return i;function r(o){return l;function l(a){return zs(i,o,a)}}}function $s(t){for(;!Oi(t););return t}const Mn=/[\0\t\n\r]/g;function Rs(){let t=1,e="",n=!0,i;return r;function r(o,l,a){const s=[];let u,h,c,d,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,e="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(Mn.lastIndex=c,u=Mn.exec(o),d=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(d),!u){e=o.slice(c);break}if(p===10&&c===d&&i)s.push(-3),i=void 0;else switch(i&&(s.push(-5),i=void 0),c<d&&(s.push(o.slice(c,d)),t+=d-c),p){case 0:{s.push(65533),t++;break}case 9:{for(h=Math.ceil(t/4)*4,s.push(-2);t++<h;)s.push(-1);break}case 10:{s.push(-4),t=1;break}default:i=!0,t=1}c=d+1}return a&&(i&&s.push(-5),e&&s.push(e),s.push(null)),s}}function xe(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?$n(t.position):"start"in t||"end"in t?$n(t):"line"in t||"column"in t?nn(t):""}function nn(t){return Rn(t&&t.line)+":"+Rn(t&&t.column)}function $n(t){return nn(t&&t.start)+"-"+nn(t&&t.end)}function Rn(t){return t&&typeof t=="number"?t:1}const Bi={}.hasOwnProperty;function Ns(t,e,n){return typeof e!="string"&&(n=e,e=void 0),Bs(n)($s(Ms(n).document().write(Rs()(t,e,!0))))}function Bs(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(mn),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(Qt),blockQuote:o(Tt),characterEscape:R,characterReference:R,codeFenced:o(Dt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Dt,l),codeText:o(he,l),codeTextData:R,data:R,codeFlowValue:R,definition:o(pe),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(me),hardBreakEscape:o(Gt),hardBreakTrailing:o(Gt),htmlFlow:o(Kt,l),htmlFlowData:R,htmlText:o(Kt,l),htmlTextData:R,image:o(Yt),label:l,link:o(mn),listItem:o(Ui),listItemValue:d,listOrdered:o(dn,c),listUnordered:o(dn),paragraph:o(Wi),reference:f,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Qt),strong:o(Qi),thematicBreak:o(Ki)},exit:{atxHeading:s(),atxHeadingSequence:z,autolink:s(),autolinkEmail:St,autolinkProtocol:ft,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:wt,characterReferenceMarkerNumeric:wt,characterReferenceValue:tt,characterReference:Lt,codeFenced:s(S),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:b,codeIndented:s(I),codeText:s(E),codeTextData:b,data:b,definition:s(),definitionDestinationString:P,definitionLabelString:C,definitionTitleString:k,emphasis:s(),hardBreakEscape:s(A),hardBreakTrailing:s(A),htmlFlow:s(V),htmlFlowData:b,htmlText:s(F),htmlTextData:b,image:s(G),label:et,labelText:W,lineEnding:_,link:s(B),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:st,resourceDestinationString:m,resourceTitleString:D,resource:K,setextHeading:s(q),setextHeadingLineSequence:M,setextHeadingText:x,strong:s(),thematicBreak:s()}};ji(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(w){let T={type:"root",children:[]};const O={stack:[T],tokenStack:[],config:e,enter:a,exit:u,buffer:l,resume:h,data:n},N=[];let Y=-1;for(;++Y<w.length;)if(w[Y][1].type==="listOrdered"||w[Y][1].type==="listUnordered")if(w[Y][0]==="enter")N.push(Y);else{const gt=N.pop();Y=r(w,gt,Y)}for(Y=-1;++Y<w.length;){const gt=e[w[Y][0]];Bi.call(gt,w[Y][1].type)&&gt[w[Y][1].type].call(Object.assign({sliceSerialize:w[Y][2].sliceSerialize},O),w[Y][1])}if(O.tokenStack.length>0){const gt=O.tokenStack[O.tokenStack.length-1];(gt[1]||Nn).call(O,void 0,gt[0])}for(T.position={start:vt(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:vt(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<e.transforms.length;)T=e.transforms[Y](T)||T;return T}function r(w,T,O){let N=T-1,Y=-1,gt=!1,Mt,Ct,Jt,Xt;for(;++N<=O;){const pt=w[N];switch(pt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{pt[0]==="enter"?Y++:Y--,Xt=void 0;break}case"lineEndingBlank":{pt[0]==="enter"&&(Mt&&!Xt&&!Y&&!Jt&&(Jt=N),Xt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Xt=void 0}if(!Y&&pt[0]==="enter"&&pt[1].type==="listItemPrefix"||Y===-1&&pt[0]==="exit"&&(pt[1].type==="listUnordered"||pt[1].type==="listOrdered")){if(Mt){let jt=N;for(Ct=void 0;jt--;){const At=w[jt];if(At[1].type==="lineEnding"||At[1].type==="lineEndingBlank"){if(At[0]==="exit")continue;Ct&&(w[Ct][1].type="lineEndingBlank",gt=!0),At[1].type="lineEnding",Ct=jt}else if(!(At[1].type==="linePrefix"||At[1].type==="blockQuotePrefix"||At[1].type==="blockQuotePrefixWhitespace"||At[1].type==="blockQuoteMarker"||At[1].type==="listItemIndent"))break}Jt&&(!Ct||Jt<Ct)&&(Mt._spread=!0),Mt.end=Object.assign({},Ct?w[Ct][1].start:pt[1].end),w.splice(Ct||N,0,["exit",Mt,pt[2]]),N++,O++}if(pt[1].type==="listItemPrefix"){const jt={type:"listItem",_spread:!1,start:Object.assign({},pt[1].start),end:void 0};Mt=jt,w.splice(N,0,["enter",jt,pt[2]]),N++,O++,Jt=void 0,Xt=!0}}}return w[T][1]._spread=gt,O}function o(w,T){return O;function O(N){a.call(this,w(N),N),T&&T.call(this,N)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(w,T,O){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([T,O||void 0]),w.position={start:vt(T.start),end:void 0}}function s(w){return T;function T(O){w&&w.call(this,O),u.call(this,O)}}function u(w,T){const O=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==w.type&&(T?T.call(this,w,N[0]):(N[1]||Nn).call(this,w,N[0]));else throw new Error("Cannot close `"+w.type+"` ("+xe({start:w.start,end:w.end})+"): it’s not open");O.position.end=vt(w.end)}function h(){return to(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(w){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function p(){const w=this.resume(),T=this.stack[this.stack.length-1];T.lang=w}function g(){const w=this.resume(),T=this.stack[this.stack.length-1];T.meta=w}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function I(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/(\r?\n|\r)$/g,"")}function C(w){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=bt(this.sliceSerialize(w)).toLowerCase()}function k(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function P(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function z(w){const T=this.stack[this.stack.length-1];if(!T.depth){const O=this.sliceSerialize(w).length;T.depth=O}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function M(w){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function R(w){const O=this.stack[this.stack.length-1].children;let N=O[O.length-1];(!N||N.type!=="text")&&(N=Gi(),N.position={start:vt(w.start),end:void 0},O.push(N)),this.stack.push(N)}function b(w){const T=this.stack.pop();T.value+=this.sliceSerialize(w),T.position.end=vt(w.end)}function _(w){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const O=T.children[T.children.length-1];O.position.end=vt(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(T.type)&&(R.call(this,w),b.call(this,w))}function A(){this.data.atHardBreak=!0}function V(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function F(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function E(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function B(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function G(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function W(w){const T=this.sliceSerialize(w),O=this.stack[this.stack.length-2];O.label=io(T),O.identifier=bt(T).toLowerCase()}function et(){const w=this.stack[this.stack.length-1],T=this.resume(),O=this.stack[this.stack.length-1];if(this.data.inReference=!0,O.type==="link"){const N=w.children;O.children=N}else O.alt=T}function m(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function D(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function K(){this.data.inReference=void 0}function f(){this.data.referenceType="collapsed"}function st(w){const T=this.resume(),O=this.stack[this.stack.length-1];O.label=T,O.identifier=bt(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function wt(w){this.data.characterReferenceType=w.type}function tt(w){const T=this.sliceSerialize(w),O=this.data.characterReferenceType;let N;O?(N=yi(T,O==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=cn(T);const Y=this.stack[this.stack.length-1];Y.value+=N}function Lt(w){const T=this.stack.pop();T.position.end=vt(w.end)}function ft(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(w)}function St(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(w)}function Tt(){return{type:"blockquote",children:[]}}function Dt(){return{type:"code",lang:null,meta:null,value:""}}function he(){return{type:"inlineCode",value:""}}function pe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function me(){return{type:"emphasis",children:[]}}function Qt(){return{type:"heading",depth:0,children:[]}}function Gt(){return{type:"break"}}function Kt(){return{type:"html",value:""}}function Yt(){return{type:"image",title:null,url:"",alt:null}}function mn(){return{type:"link",title:null,url:"",children:[]}}function dn(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function Ui(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function Wi(){return{type:"paragraph",children:[]}}function Qi(){return{type:"strong",children:[]}}function Gi(){return{type:"text",value:""}}function Ki(){return{type:"thematicBreak"}}}function vt(t){return{line:t.line,column:t.column,offset:t.offset}}function ji(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?ji(t,i):js(t,i)}}function js(t,e){let n;for(n in e)if(Bi.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Nn(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+xe({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+xe({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+xe({start:e.start,end:e.end})+") is still open")}function qs(t,e){return function(n,i,r){}}function Bn(t){const e=[];for(let n=0;n<t.style.length;n++){const i=t.style.item(n),r=t.style.getPropertyValue(i);e.push(`${i}: ${r}`)}return e.sort().join("; ")}function qi(t,e,n=""){if(t.nodeType!==e.nodeType)throw new Error(`Node type mismatch at ${n}. Received: '${t.nodeType}', Expected: '${e.nodeType}'`);if(t.nodeName!==e.nodeName)throw new Error(`Node name mismatch at ${n}. Received: '${t.nodeName}', Expected: '${e.nodeName}'`);if(t instanceof HTMLElement&&e instanceof HTMLElement){const i=Bn(t),r=Bn(e);if(i!==r)throw new Error(`Style mismatch at ${n}. Received ${i}, expected ${r}`)}if(t instanceof Element&&e instanceof Element){const i=Array.from(t.attributes).sort((o,l)=>o.name.localeCompare(l.name)),r=Array.from(e.attributes).sort((o,l)=>o.name.localeCompare(l.name));if(i.length!==r.length)throw new Error(`Attribute count mismatch at ${n}. Received: ${i.length}, Expected: ${r.length}`);for(let o=0;o<i.length;o++){const l=i[o],a=r[o];if(l.name!==a.name)throw new Error(`Attribute name mismatch at ${n}. Found '${l.name}', expected '${a.name}'`);if(l.name!=="style"&&l.value!==a.value)throw new Error(`Attribute value mismatch for '${l.name}' at ${n}. Received: '${l.value}', Expected: '${a.value}'`)}}if(t.childNodes.length!==e.childNodes.length)throw new Error(`Child element count mismatch at ${n}. Received: ${t.childNodes.length}, Expected: ${e.childNodes.length}`);for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],o=e.childNodes[i],l=`${n} > ${r instanceof HTMLElement?r.tagName:"TextNode"}:nth-child(${i+1})`;if(r instanceof HTMLElement&&!(o instanceof HTMLElement)||!(r instanceof HTMLElement)&&o instanceof HTMLElement)throw new Error(`Child type mismatch at ${n}. Received: ${r}, Expected: ${o}`);if(r instanceof HTMLElement&&o instanceof HTMLElement)qi(r,o,l);else if(r.textContent!==o.textContent)throw new Error(`Text content mismatch at ${n}. Received: '${t.textContent}', Expected: '${e.textContent}'`)}}var Hs=X("<blockquote>"),Vs=X("<br>"),Us=X("<pre><code>"),Ws=X("<del>"),Qs=X("<em>"),Gs=X("<div>"),Ks=X("<img>"),Ys=X("<code>"),Js=X('<a target=_blank rel="noopener noreferrer">'),Xs=X("<li>"),Zs=X("<p>"),tu=X("<strong>"),eu=X("<thead>"),nu=X("<tbody>"),iu=X("<table>"),ru=X("<tr>"),lu=X("<hr>");const ou=qs(),Hi=se(),Vi=se([]),Ve=se();function au(){return ue(Vi)}function su(){const t=ue(Hi);if(!t)throw new Error("Use useMarkdownProps in a descendant of MdastRenderer");return t}const Ht=t=>{throw new Error(`Did not implement node type yet: ${t.node.type}`)},uu={definition:Ht,footnoteDefinition:Ht,footnoteReference:Ht,imageReference:Ht,linkReference:Ht,yaml:Ht,blockquote(t){return(()=>{var e=Hs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},break:()=>Vs(),code(t){return(()=>{var e=Us(),n=e.firstChild;return H(n,()=>t.node.value),e})()},delete(t){return(()=>{var e=Ws();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},emphasis(t){return(()=>{var e=Qs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},heading(t){return L($e,{get component(){return`h${t.node.depth}`},get children(){return L(rt.Children,{get node(){return t.node}})}})},html(t){return(()=>{var e=Gs();return ot(()=>e.innerHTML=t.node.value),e})()},image(t){return(()=>{var e=Ks();return ot(n=>{var i=t.node.url,r=t.node.alt??"";return i!==n.e&&Nt(e,"src",n.e=i),r!==n.t&&Nt(e,"alt",n.t=r),n},{e:void 0,t:void 0}),e})()},inlineCode(t){return(()=>{var e=Ys();return H(e,()=>t.node.value),e})()},link(t){return(()=>{var e=Js();return H(e,L(ne,{get each(){return t.node.children},children:n=>L(rt.Node,{node:n})})),ot(()=>Nt(e,"href",t.node.url)),e})()},list(t){return L($e,{get component(){return t.node.ordered?"ol":"ul"},get children(){return L(rt.Children,{get node(){return t.node}})}})},listItem(t){return(()=>{var e=Xs();return H(e,L(_t,{get when(){return t.node.spread},get fallback(){return L(rt.Children,{get node(){return t.node.children[0]}})},get children(){return L(rt.Node,{get node(){return t.node.children[0]}})}}),null),H(e,L(ne,{get each(){return t.node.children.slice(1)},children:n=>L(rt.Node,{node:n})}),null),e})()},paragraph(t){return(()=>{var e=Zs();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},strong(t){return(()=>{var e=tu();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},text(t){return Z(()=>t.node.value)},table(t){return(()=>{var e=iu();return H(e,L(Ve.Provider,{value:"head",get children(){var n=eu();return H(n,L(rt.Node,{get node(){return t.node.children[0]}})),n}}),null),H(e,L(Ve.Provider,{value:"body",get children(){var n=nu();return H(n,L(ne,{get each(){return t.node.children.slice(1)},children:i=>L(rt.Node,{node:i})})),n}}),null),e})()},tableCell(t){const e=ue(Ve);return L($e,{component:e==="head"?"th":"td",get children(){return L(rt.Children,{get node(){return t.node}})}})},tableRow(t){return(()=>{var e=ru();return H(e,L(rt.Children,{get node(){return t.node}})),e})()},thematicBreak(){return lu()}},rt={Children(t){return L(ne,{get each(){return"children"in t.node&&Array.isArray(t.node.children)?t.node.children:[]},children:e=>L(rt.Node,{node:e})})},Node(t){const e=su();ou("DefaultNode processing:",t.node);const n=()=>e.renderers?.[t.node.type]??uu[t.node.type];return rn(()=>{if(!n())throw new Error(`No Renderer For ${t.node.type}`)}),L(Vi.Provider,{get value(){return[t.node,...au()]},get children(){return L(_t,{get when(){return n()},keyed:!0,children:i=>L(i,{get node(){return t.node}})})}})}};function Ue(t){const[,e]=ti(t,["markdown","renderers"]),n=Z(()=>Ns(t.markdown,e));return L(Hi.Provider,{value:t,get children(){return L(rt.Children,{get node(){return n()}})}})}const cu="_App_16au9_1",hu="_logo_16au9_5",pu="_header_16au9_11",mu="_link_16au9_22",du="_markdown_16au9_35",fu="_container_16au9_102",gu="_result_16au9_110",bu="_title_16au9_119",xu="_subtitle_16au9_123",nt={App:cu,logo:hu,"logo-spin":"_logo-spin_16au9_1",header:pu,link:mu,markdown:du,container:fu,result:gu,title:bu,subtitle:xu};var wu=X("<div>No snapshot found"),Iu=X("<div><div>✅ MATCH</div><div>HTML matches snapshot"),yu=X("<div><div><div><h3><a>🔗</a> </h3></div><div></div></div><div><div><div>A: Markdown Source</div><pre></pre></div><div><div>B: Actual Result (CSR)</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>C: Expected (SSR Snapshot)</div><div><div>Raw HTML:</div><pre></pre></div><div><div>Rendered:</div><div></div></div></div><div><div>D: Comparison</div><div>"),ku=X("<div>Extensions: "),jn=X("<div>"),Su=X("<div>Mdast Extensions: "),Tu=X("<div><div>❌ MISMATCH</div><div>"),Cu=X("<div><h1>Solid Mdast Markdown Test Viewer</h1><div><h3>Test Statistics</h3><div><span>Total: </span><span>Passed: </span><span>Failed: </span></div></div><div>");const qn=new DOMParser;function Au(t){let e=null;const[n,i]=Et(),[r,o]=Et();return Xi(()=>{o(e.innerHTML);try{qi(qn.parseFromString(e.innerHTML,"text/html").querySelector("body"),qn.parseFromString(t.output,"text/html").querySelector("body")),i({success:!0})}catch(l){i({success:!1,error:l instanceof Error?l.message:`${l}`})}}),rn(()=>{const l=n();l&&t.onResult(l)}),(()=>{var l=yu(),a=l.firstChild,s=a.firstChild,u=s.firstChild,h=u.firstChild;h.nextSibling;var c=s.nextSibling,d=a.nextSibling,p=d.firstChild,g=p.firstChild,y=g.nextSibling,S=p.nextSibling,I=S.firstChild,C=I.nextSibling,k=C.firstChild,P=k.nextSibling,z=C.nextSibling,x=z.firstChild,M=x.nextSibling,q=S.nextSibling,R=q.firstChild,b=R.nextSibling,_=b.firstChild,A=_.nextSibling,V=b.nextSibling,F=V.firstChild,E=F.nextSibling,B=q.nextSibling,G=B.firstChild,W=G.nextSibling;a.style.setProperty("padding","12px 16px"),a.style.setProperty("border-bottom","1px solid #ddd"),a.style.setProperty("display","flex"),a.style.setProperty("justify-content","space-between"),a.style.setProperty("align-items","center"),H(u,()=>t.title,null),c.style.setProperty("padding","4px 12px"),c.style.setProperty("border-radius","16px"),c.style.setProperty("color","white"),c.style.setProperty("font-weight","bold"),c.style.setProperty("font-size","12px"),H(c,()=>n()?.success?"PASS":"FAIL"),d.style.setProperty("display","grid"),d.style.setProperty("grid-template-columns","1fr 2fr 2fr 1fr"),d.style.setProperty("min-height","200px"),p.style.setProperty("padding","16px"),p.style.setProperty("border-right","1px solid #eee"),p.style.setProperty("overflow-x","hidden"),y.style.setProperty("margin","0"),y.style.setProperty("padding","8px"),y.style.setProperty("background","#f8f8f8"),y.style.setProperty("border-radius","4px"),y.style.setProperty("font-size","12px"),y.style.setProperty("white-space","pre-wrap"),y.style.setProperty("word-wrap","break-word"),y.style.setProperty("border","1px solid #e0e0e0"),y.style.setProperty("max-height","160px"),y.style.setProperty("overflow","auto"),H(y,()=>t.input),H(p,L(_t,{get when(){return t.extensions},children:m=>[(()=>{var D=ku();return ot(()=>it(D,nt.subtitle)),D})(),(()=>{var D=jn();return H(D,L(Ue,{get markdown(){return m().map(K=>`- \`${K}\``).join(`
`)}})),ot(()=>it(D,nt.markdown)),D})()]}),null),H(p,L(_t,{get when(){return t.mdastExtensions},children:m=>[(()=>{var D=Su();return ot(()=>it(D,nt.subtitle)),D})(),(()=>{var D=jn();return H(D,L(Ue,{get markdown(){return m().map(K=>`- \`${K}\``).join(`
`)}})),ot(()=>it(D,nt.markdown)),D})()]}),null),S.style.setProperty("padding","16px"),S.style.setProperty("border-right","1px solid #eee"),S.style.setProperty("overflow-x","hidden"),C.style.setProperty("margin-bottom","8px"),P.style.setProperty("margin","0"),P.style.setProperty("padding","6px"),P.style.setProperty("border-radius","3px"),P.style.setProperty("font-size","10px"),P.style.setProperty("word-wrap","break-word"),P.style.setProperty("border","1px solid #e0e0e0"),P.style.setProperty("max-height","60px"),P.style.setProperty("overflow","auto"),H(P,r);var et=e;return typeof et=="function"?ni(et,M):e=M,H(M,L(Ue,{get markdown(){return t.input},get extensions(){return t.extensions?.map(m=>cs[m]())},get mdastExtensions(){return t.mdastExtensions?.map(m=>hs[m]())}})),q.style.setProperty("padding","16px"),q.style.setProperty("border-right","1px solid #eee"),q.style.setProperty("overflow-x","hidden"),b.style.setProperty("margin-bottom","8px"),A.style.setProperty("margin","0"),A.style.setProperty("padding","6px"),A.style.setProperty("border-radius","3px"),A.style.setProperty("font-size","10px"),A.style.setProperty("word-wrap","break-word"),A.style.setProperty("border","1px solid #e0e0e0"),A.style.setProperty("max-height","60px"),A.style.setProperty("overflow","auto"),H(A,()=>t.output),H(V,L(_t,{get when(){return t.output==="No snapshot found"},get children(){var m=wu();return m.style.setProperty("color","#999"),m.style.setProperty("font-style","italic"),m.style.setProperty("text-align","center"),m}}),null),B.style.setProperty("padding","16px"),B.style.setProperty("overflow-x","hidden"),W.style.setProperty("padding","8px"),W.style.setProperty("border-radius","4px"),W.style.setProperty("min-height","40px"),W.style.setProperty("border","1px solid #e0e0e0"),W.style.setProperty("text-align","center"),W.style.setProperty("display","flex"),W.style.setProperty("align-items","center"),W.style.setProperty("justify-content","center"),W.style.setProperty("flex-direction","column"),W.style.setProperty("gap","8px"),H(W,L(_t,{get when(){return n()?.success},get fallback(){return(()=>{var m=Tu(),D=m.firstChild,K=D.nextSibling;return m.style.setProperty("color","#d32f2f"),D.style.setProperty("font-weight","bold"),D.style.setProperty("margin-bottom","4px"),K.style.setProperty("font-size","12px"),H(K,()=>n()?.error??"Oopsie"),m})()},get children(){var m=Iu(),D=m.firstChild,K=D.nextSibling;return m.style.setProperty("color","#2e7d32"),D.style.setProperty("font-weight","bold"),D.style.setProperty("margin-bottom","4px"),K.style.setProperty("font-size","12px"),m}})),ot(m=>{var D=nt.result,K=n()?.success?"1px solid #ddd":"2px solid #ff6b6b",f=n()?.success?"#e8f5e8":"#ffe6e6",st=nt.title,wt=`/?t=${t.title}`,tt=n()?.success?"#4caf50":"#f44336",Lt=nt.subtitle,ft=nt.subtitle,St=nt.subtitle,Tt=nt.subtitle,Dt=yn(nt.container,nt.markdown),he=nt.subtitle,pe=nt.subtitle,me=nt.subtitle,Qt=yn(nt.container,nt.markdown),Gt=t.output!=="No snapshot found"?t.output:"",Kt=nt.subtitle,Yt=n()?.success?"#e8f5e8":"#ffe6e6";return D!==m.e&&it(l,m.e=D),K!==m.t&&((m.t=K)!=null?l.style.setProperty("border",K):l.style.removeProperty("border")),f!==m.a&&((m.a=f)!=null?a.style.setProperty("background",f):a.style.removeProperty("background")),st!==m.o&&it(u,m.o=st),wt!==m.i&&Nt(h,"href",m.i=wt),tt!==m.n&&((m.n=tt)!=null?c.style.setProperty("background",tt):c.style.removeProperty("background")),Lt!==m.s&&it(g,m.s=Lt),ft!==m.h&&it(I,m.h=ft),St!==m.r&&it(k,m.r=St),Tt!==m.d&&it(x,m.d=Tt),Dt!==m.l&&it(M,m.l=Dt),he!==m.u&&it(R,m.u=he),pe!==m.c&&it(_,m.c=pe),me!==m.w&&it(F,m.w=me),Qt!==m.m&&it(E,m.m=Qt),Gt!==m.f&&(E.innerHTML=m.f=Gt),Kt!==m.y&&it(G,m.y=Kt),Yt!==m.g&&((m.g=Yt)!=null?W.style.setProperty("background",Yt):W.style.removeProperty("background")),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),l})()}function Pu(){const[t]=Hr(),[e,n]=hl({}),i=Z(()=>{const o=Object.values(e),l=o.length,a=o.filter(u=>u.success).length,s=l-a;return{total:l,passed:a,failed:s}}),r=Ji(()=>t.t,(o,l)=>l===void 0?!0:Array.isArray(l)?!!o.includes(l[0]??""):o.includes(l));return(()=>{var o=Cu(),l=o.firstChild,a=l.nextSibling,s=a.firstChild,u=s.nextSibling,h=u.firstChild;h.firstChild;var c=h.nextSibling;c.firstChild;var d=c.nextSibling;d.firstChild;var p=a.nextSibling;return o.style.setProperty("padding","20px"),o.style.setProperty("font-family","system-ui, -apple-system, sans-serif"),o.style.setProperty("max-width","1400px"),o.style.setProperty("margin","0 auto"),a.style.setProperty("margin-bottom","20px"),a.style.setProperty("padding","16px"),a.style.setProperty("background","#f5f5f5"),a.style.setProperty("border-radius","8px"),s.style.setProperty("margin","0 0 10px 0"),u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),H(h,()=>i().total,null),c.style.setProperty("color","green"),H(c,()=>i().passed,null),d.style.setProperty("color","red"),H(d,()=>i().failed,null),p.style.setProperty("display","grid"),p.style.setProperty("gap","20px"),H(p,L(ne,{get each(){return Object.entries(pl)},children:([g,y])=>L(_t,{get when(){return r(g)},get children(){return L(Au,Zn(y,{title:g,onResult:S=>n(g,S)}))}})})),o})()}function Eu(){return L(ol,{get base(){return"solid-mdast-renderer"},get children(){return L(Zr,{path:"/",component:Pu})}})}wr(()=>L(Eu,{}),document.getElementById("root"));
