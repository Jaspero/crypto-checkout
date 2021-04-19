var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(e)}function n(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function a(t,e,s){t.insertBefore(e,s)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function h(t,e,s,i){return t.addEventListener(e,s,i),()=>t.removeEventListener(e,s,i)}let p;function u(t){p=t}const m=[];let f;const g=[],y=[],v=[];function w(t){y.push(t)}function _(){const t=new Set;do{for(;m.length;){const t=m.shift();u(t),b(t.$$)}for(;g.length;)g.shift()();for(;y.length;){const e=y.pop();t.has(e)||(e(),t.add(e))}}while(m.length);for(;v.length;)v.pop()();f=null}function b(t){t.fragment&&(t.update(t.dirty),i(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(w))}function S(t,e){t.$$.dirty||(m.push(t),f||(f=Promise.resolve(),f.then(_)),t.$$.dirty={}),t.$$.dirty[e]=!0}function x(o,r,a,c,l,d){const h=p;u(o);const m=r.props||{},f=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(h?h.$$.context:[]),callbacks:s(),dirty:null};let g=!1;f.ctx=a?a(o,m,((t,e)=>{f.ctx&&l(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),g&&S(o,t))})):m,f.update(),g=!0,i(f.before_render),f.fragment=c(f.ctx),r.target&&(r.hydrate?f.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):f.fragment.c(),r.intro&&o.$$.fragment.i&&o.$$.fragment.i(),function(t,s,o){const{fragment:r,on_mount:a,on_destroy:c,after_render:l}=t.$$;r.m(s,o),w((()=>{const s=a.map(e).filter(n);c?c.push(...s):i(s),t.$$.on_mount=[]})),l.forEach(w)}(o,r.target,r.anchor),_()),u(h)}class C extends class{async getPrice(t,e){return 0}async confirmPayment(t,e){return{success:!0,value:t,note:e}}}{constructor(){super(...arguments),this.url="https://api.coincap.io/v2/"}async getPrice(t,e){let s=await fetch(this.url+"assets/"+e);return s=await s.json(),t/s.data.priceUsd}async confirmPayment(t,e){return{success:!0,value:t,note:e}}}
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
const P="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,k=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},$=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${$}--\x3e`,E=new RegExp(`${$}|${T}`),N="$lit$";class A{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)V(e[t].name,N)&&i++;for(;i-- >0;){const e=c[a],s=z.exec(e)[2],i=s.toLowerCase()+N,n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(E);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf($)>=0){const i=t.parentNode,n=e.split(E),o=n.length-1;for(let e=0;e<o;e++){let s,o=n[e];if(""===o)s=O();else{const t=z.exec(o);null!==t&&V(t[2],N)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-N.length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===n[o]?(i.insertBefore(O(),t),s.push(t)):t.data=n[o],a+=o}}else if(8===t.nodeType)if(t.data===$){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(O(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf($,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const V=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},M=t=>-1!==t.index,O=()=>document.createComment(""),z=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function U(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=j(i),r=i[o],a=-1,c=0;const l=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,o=j(i,o),r=i[o]}l.forEach((t=>t.parentNode.removeChild(t)))}const R=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},j=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(M(e))return s}return-1};
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
const q=new WeakMap,B=t=>"function"==typeof t&&q.has(t),L={},F={};
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
class H{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,o=0,r=0,a=i.nextNode();for(;o<s.length;)if(n=s[o],M(n)){for(;r<n.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return P&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const I=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),W=` ${$} `;class D{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const o=z.exec(t);e+=null===o?t+(s?W:T):t.substr(0,o.index)+o[1]+o[2]+N+o[3]+$}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==I&&(e=I.createHTML(e)),t.innerHTML=e,t}}
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const J=t=>null===t||!("object"==typeof t||"function"==typeof t),K=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Q{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new X(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!K(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(J(t)||!K(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===L||J(t)&&t===this.value||(this.value=t,B(t)||(this.committer.dirty=!0))}commit(){for(;B(this.value);){const t=this.value;this.value=L,t(this)}this.value!==L&&this.committer.commit()}}class G{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(O()),this.endNode=t.appendChild(O())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=O()),t.__insert(this.endNode=O())}insertAfterPart(t){t.__insert(this.startNode=O()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;B(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=L,t(this)}const t=this.__pendingValue;t!==L&&(J(t)?t!==this.value&&this.__commitText(t):t instanceof D?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):K(t)?this.__commitIterable(t):t===F?(this.value=F,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof H&&this.value.template===e)this.value.update(t.values);else{const s=new H(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new G(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){k(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Y{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=L,t(this)}if(this.__pendingValue===L)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=L}}class Z extends Q{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class tt extends X{}let et=!1;(()=>{try{const t={get capture(){return et=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class st{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=L,t(this)}if(this.__pendingValue===L)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=it(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=L}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const it=t=>t&&(et?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */;function nt(t){let e=ot.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ot.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join($);return s=e.keyString.get(i),void 0===s&&(s=new A(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const ot=new Map,rt=new WeakMap;
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const at=new
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new Z(t,e.slice(1),s).parts}if("@"===n)return[new st(t,e.slice(1),i.eventContext)];if("?"===n)return[new Y(t,e.slice(1),s)];return new Q(t,e,s).parts}handleTextExpression(t){return new G(t)}};
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ct=(t,...e)=>new D(t,e,"html",at)
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */,lt=(t,e)=>`${t}--${e}`;let dt=!0;void 0===window.ShadyCSS?dt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),dt=!1);const ht=t=>e=>{const s=lt(e.type,t);let i=ot.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},ot.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join($);if(n=i.keyString.get(o),void 0===n){const s=e.getTemplateElement();dt&&window.ShadyCSS.prepareTemplateDom(s,t),n=new A(e,s),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},pt=["html","svg"],ut=new Set,mt=(t,e,s)=>{ut.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{pt.forEach((e=>{const s=ot.get(lt(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),U(t,s)}))}))})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=j(n),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===s&&(a=R(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===c;){if(a>0){for(;-1!==r;)n[r].index+=a,r=j(n,r);return}r=j(n,r)}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),U(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const ft={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},gt=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:gt},vt="finalized";class wt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=yt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||yt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(vt)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=gt){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||ft,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||ft.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=yt){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}wt.finalized=!0;
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
const _t=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),bt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function St(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):bt(t,e)}const xt=(t,e,s)=>{Object.defineProperty(e,s,t)},Ct=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
	@license
	Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/,Pt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol();class $t{constructor(t,e){if(e!==kt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Pt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Tt={};class Et extends wt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),i=[];s.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Pt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new $t(String(e),kt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Pt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Tt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Tt}}Et.finalized=!0,Et.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=rt.has(e),o=dt&&11===e.nodeType&&!!e.host,r=o&&!ut.has(i),a=r?document.createDocumentFragment():e;if(((t,e,s)=>{let i=rt.get(e);void 0===i&&(k(e,e.firstChild),rt.set(e,i=new G(Object.assign({templateFactory:nt},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:ht(i)},s)),r){const t=rt.get(a);rt.delete(a);const s=t.value instanceof H?t.value.template:void 0;mt(i,a,s),k(e,e.firstChild),e.appendChild(a),rt.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};
/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
const Nt=new WeakMap,At=(Vt=t=>e=>{if(!(e instanceof G))throw new Error("unsafeHTML can only be used in text bindings");const s=Nt.get(e);if(void 0!==s&&J(t)&&t===s.value&&e.value===s.fragment)return;const i=document.createElement("template");i.innerHTML=t;const n=document.importNode(i.content,!0);e.setValue(n),Nt.set(e,{value:t,fragment:n})},(...t)=>{const e=Vt(...t);return q.set(e,!0),e});var Vt,Mt=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Ot=class extends Et{constructor(){super(...arguments),this.waitForConfirmation=!1,this.target=!1,this.closeOnEscape=!0,this.lockCoin=!1,this.message="",this.hasTime=!0,this.loading=!1,this.paid=!1,this.onEsc=t=>{"Escape"===t.key&&this.close()}}get service(){return window.jpCrypto.service}get coins(){return window.jpCrypto.coins}connectedCallback(){this.coin&&this.selectCoin(this.coin).catch(),this.closeOnEscape&&window.addEventListener("keyup",this.onEsc),super.connectedCallback()}disconnectedCallback(){window.removeEventListener("keyup",this.onEsc),super.disconnectedCallback()}coinsTemp(){const t=t=>ct`<button class="cc-coins-button" data-id="${t.id}" @click="${this.coinSelected}">
        ${At(t.icon)}
        ${t.label}
      </button>`;return ct`
      <div class="cc-coins">
        <h1 class="cc-coins-title">Currency</h1>
        <p class="cc-coins-description">Select one crypto currency</p>
        ${this.coins.map((e=>t(e)))}
      </div>
    `}payTemp(){return this.hasTime?this.error?ct`
          <div class="error">
            <p>${this.error}</p>
          </div>`:ct`
        <slot name="instructions"></slot>
        <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer>
        <div id="jp-c-qr"></div>
        <div>
          <div>${this.displayedCoinValue}</div>
          <input readonly value="${this.coin.wallet}" />
          ${this.lockCoin?ct`<button @click="${()=>this.selectCoin("")}">Back</button>`:""}
          <button @click="${()=>this.confirmPay()}">Confirm Payment</button>
        </div>      
      `:ct`
      <div class="time-out">
        <p>Timeout elapsed for this order.</p>
        <button @click="${()=>this.selectCoin(this.coin.id)}">Update Rate</button>
        <button @click="${()=>this.selectCoin("")}">Select Different Coin</button>
      </div>`}paidTemp(){return ct`<slot name="paid"></slot>`}render(){let t;return t=this.paid?this.paidTemp():this.coin?this.payTemp():this.coinsTemp(),this.target?ct`
        ${this.loading&&ct`<div class="loading"></div>`||""}
        ${t}
      `:ct`
      <button class="cc-close" @click="${this.close}" aria-label="Close dialog" title="Close dialog">
        <svg class="cc-close-icon" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"><path d="M16 8l-8 8m8 0L8 8"/></svg>
      </button>
      <article class="cc">
        ${this.loading&&ct`<div class="loading"></div>`||""}
        ${t}
      </article>
    `}async coinSelected(t){const e=t.target;await this.selectCoin(e.dataset.id)}async selectCoin(t){this.coin=t?this.coins.find((e=>e.id===t)):null,this.coin&&(this.coinValue=await this.coin.rate(this.value),this.displayedCoinValue=this.coin.format(this.coinValue),this.hasTime=!0,await this.updateComplete,this.renderQr())}renderQr(){new QRCodeStyling({width:300,height:300,data:this.coin.qr(this.coinValue,this.message),image:"data:image/svg+xml;base64,"+window.btoa(this.coin.icon),imageOptions:{margin:10},dotsOptions:{color:this.coin.color,type:"rounded"},backgroundOptions:{color:"#e9ebee"}}).append(this._qrEl)}timeOut(){this.hasTime=!1}close(){this.parentNode.removeChild(this)}async confirmPay(){if(this.waitForConfirmation){const{success:t,error:e}=await this.service.confirmPayment(this.coinValue,this.message);if(!t)return void(this.error=e)}this.dispatchEvent(new CustomEvent("paid",{detail:{coin:this.coin.id,amount:this.coinValue}})),this.paid=!0}};var zt,Ut;Ot.styles=((t,...e)=>{const s=e.reduce(((e,s,i)=>e+(t=>{if(t instanceof $t)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1]),t[0]);return new $t(s,kt)})`
    :host {
      --size-unit: min(4vw, 16px);

      position: fixed;
      z-index: 2147483647;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: auto;
      background: rgba(0,0,0,.35);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: var(--size-unit);
    }

    .cc {
      margin: auto;
      background: white;
      border-radius: 2em;
      padding: 4em;
      box-shadow: 0 0 .1em rgba(0,0,0,.2), 0 .5em 1em rgba(0,0,0,.1), 0 1em 2em rgba(0,0,0,.05);
    }

    .cc-close {
      position: fixed;
      top: .25em;
      right: .25em;
      padding: 0;
      border: none;
      font-size: inherit;
      cursor: pointer;
      background: white;
      border-radius: 2em;
    }

    .cc-close:hover,
    .cc-close:focus {
      background: #eee;
    }

    .cc-close-icon {
      width: 1.5em;
      height: 1.5em;
      display: block;
    }
    
    .cc-coins {
      display: flex;
      flex-direction: column;
    }

    .cc-coins-title {
      font-size: 1.375em;
      font-weight: bold;
      margin: 0;
    }

    .cc-coins-description {
      font-size: 1em;
      margin: .25em 0 2em;
      opacity: 0.6;
    }
    
    .cc-coins-button {
      font-size: inherit;
      font-family: inherit;
      display: flex;
      align-items: center;
      background: none;
      border-top: .1em solid #ccc;
      border-right: .1em solid #ccc;
      border-bottom: none;
      border-left: .1em solid #ccc;
      padding: 1.5em 4em 1.5em 1.5em;
      cursor: pointer;
    }

    .cc-coins-button:first-of-type {
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
    }
    .cc-coins-button:last-of-type {
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-bottom: .1em solid #ccc;
    }

    .cc-coins-button:hover,
    .cc-coins-button:focus {
      background: #eee;
    }
    
    .cc-coins-button > svg {
      width: 2em;
      height: 2em;
      margin-right: 1em;
    }  
  `,Mt([St({type:Boolean})],Ot.prototype,"waitForConfirmation",void 0),Mt([St({type:Boolean})],Ot.prototype,"target",void 0),Mt([St({type:Boolean})],Ot.prototype,"closeOnEscape",void 0),Mt([St({type:Boolean})],Ot.prototype,"lockCoin",void 0),Mt([St()],Ot.prototype,"message",void 0),Mt([St()],Ot.prototype,"hasTime",void 0),Mt([St()],Ot.prototype,"loading",void 0),Mt([St()],Ot.prototype,"paid",void 0),Mt([St()],Ot.prototype,"error",void 0),Mt([St({converter:t=>parseInt(t,10)})],Ot.prototype,"value",void 0),Mt([St()],Ot.prototype,"coinValue",void 0),Mt([St()],Ot.prototype,"displayedCoinValue",void 0),Mt([St()],Ot.prototype,"coin",void 0),Mt([(zt="#jp-c-qr",(t,e)=>{const s={get(){return this.renderRoot.querySelector(zt)},enumerable:!0,configurable:!0};if(Ut){const t="symbol"==typeof e?Symbol():`__${e}`;s.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(zt)),this[t]}}return void 0!==e?xt(s,t,e):Ct(s,t)})],Ot.prototype,"_qrEl",void 0),Ot=Mt([_t("crypto-checkout")],Ot);var Rt=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let jt=class extends Et{connectedCallback(){super.connectedCallback();const[t,e]=this.time.split(":").map((t=>parseInt(t,10)));this.total=60*t+e,this.current=this.time,this._timer=setInterval((()=>{this.total-=1;const t=Math.floor(this.total/60),e=this.total%60;this.total?this.current=`${t>9?t:`0${t}`}:${e>9?e:`0${e}`}`:this.dispatchEvent(new CustomEvent("finished"))}),1e3)}disconnectedCallback(){clearInterval(this._timer),super.disconnectedCallback()}render(){return ct`${this.current}`}};Rt([St()],jt.prototype,"time",void 0),Rt([St()],jt.prototype,"current",void 0),jt=Rt([_t("crypto-timer")],jt);class qt{constructor(t,e,s,i,n){this.id=t,this.wallet=e,this.label=s,this.icon=i,this.color=n}qr(t,e){let s=`${this.label.toLowerCase().replace(/ /g,"")}:${this.wallet}?amount=${t}`;return e&&(s+=`&data=${s}`),s}rate(t){return window.jpCrypto.service.getPrice(t,this.label.replace(/ /g,"-").toLowerCase())}format(t){return`${t} ${this.id}`}}const Bt=new qt("BTC","","Bitcoin",'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" id="a"/></defs><g fill="none" fill-rule="evenodd"><use fill="#F7931A" xlink:href="#a"/><path d="M31 22c-1 3-5 2-7 1l2-5c1 1 6 1 5 4zm-1 8c-1 3-6 1-8 1l2-5c2 0 7 1 6 4zm6-8c0-3-2-4-5-5l1-4-3-1-1 4-2-1 1-3-2-1-1 4h-2l-3-1-1 2 2 1 1 1-1 5-2 6-1 1-2-1-1 3 3 1h2l-1 4 3 1 1-4h2l-1 4 2 1 1-4c5 1 8 0 9-3s0-5-2-6c1-1 3-2 3-4z" fill="#FFF"/></g></svg>',"#F7931A");const Lt=new class extends qt{qr(t,e){let s=`ethereum:${this.wallet}?amount=${t}`;return e&&(s+=`&data=${e}`),s}}("ETH","","Ethereum",'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M25 50a25 25 0 100-50 25 25 0 000 50z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#6B71D6" xlink:href="#a"/><path fill="#E9ECFF" d="M25 9a493 493 0 01-9 16l5 3 5 3 5-3 5-3A692 692 0 0025 9m-9 18l10 14 10-14-10 6-5-3a915 915 0 01-5-3"/></g></svg>',"#6b71d6"),Ft=new qt("BCH","","Bitcoin Cash",'<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#8dc351" r="16"/><path d="M21 11c-1-2-3-3-5-2l-1-3-1 1v2l-1 1-1-3h-1v3l-1 1H8l1 2h2l1 3 1 5v1h-2l1 2 2-1h1l1 3 2-1-1-2a66 66 0 001-1l1 3h2l-1-3c3-1 5-3 4-5 0-3-2-3-3-3v-3zm0 6c0 2-4 3-5 4l-1-4c1-1 5-2 6 0zm-3-5c1 2-2 3-3 3l-1-3c1-1 4-2 4 0z" fill="#fff" fill-rule="nonzero"/></g></svg>',"#8dc351"),Ht=new qt("BSV","","Bitcoin SV",'<svg viewBox="0 0 2499.6 2500" xmlns="http://www.w3.org/2000/svg"><path d="M2500 1250a1250 1250 0 11-2501 0 1250 1250 0 012501 0z" fill="#eab300"/><g fill="#fff"><path d="M1742 944c-17-168-161-224-344-240V472h-141v226l-113 2V472h-141v232l-90 1-195-1v151s104-2 103 0c57 0 75 34 81 62v265l15 1h-15v371c-3 18-13 46-53 46 1 2-103 0-103 0l-28 169h184l101 1v235h141v-233l113 2v231h141v-235c238-13 404-73 425-296 17-180-68-260-203-293 82-41 134-115 122-237zm-198 502c0 176-301 156-397 156v-312c96 0 397-27 397 156zm-66-439c0 160-251 141-331 141V866c80 0 331-26 331 141z"/><path d="M902 1176h21v15h-21z"/></g></svg>',"#eab300"),It=new qt("LTC","","Litecoin",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 329 329"><defs/><path fill="#bebebe" d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"/><path fill="#bebebe" d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"/><path fill="#fff" d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"/></svg>',"#bebebe");const Wt=new class extends qt{qr(t,e){return`monero:${this.wallet}?tx_amount=${e}&data=${t}`}}("XMR","","Monero",'<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 0A128 128 0 007 168h38V61l83 83 83-83v107h38A128 128 0 00128 0" fill="#F60"/><path d="M109 163l-36-36v68H19a128 128 0 00218 0h-54v-68l-36 36-19 19-19-19z" fill="#4C4C4C"/></svg>',"#d26e2b");function Dt(e){var s,n,o,p,u,m,f,g,y,v,w,_,b;return{c(){var t,i,r;(s=l("a")).innerHTML='<img loading="lazy" width="149" height="149" src="forkme-white.png" alt="Fork me on GitHub" data-recalc-dims="1">',n=d(),(o=l("h1")).textContent="Crypto Checkout",p=d(),(u=l("h2")).textContent="An open-source library for implementing a crypto currency checkout flow in your webapp.",m=d(),f=l("main"),g=l("input"),y=d(),(v=l("button")).textContent="Checkout",w=d(),(_=l("div")).innerHTML='<img src="logo.svg" alt="Jaspero Logo">',s.className="fork svelte-unz472",s.target="_blank",s.href="https://github.com/Jaspero/crypto-checkout",t=g,i="type",null==(r="number")?t.removeAttribute(i):t.setAttribute(i,r),g.placeholder="Amount",f.className="svelte-unz472",_.className="logo svelte-unz472",b=[h(g,"input",e.input_input_handler),h(v,"click",e.openCheckout)]},m(t,i){a(t,s,i),a(t,n,i),a(t,o,i),a(t,p,i),a(t,u,i),a(t,m,i),a(t,f,i),r(f,g),g.value=e.amount,r(f,y),r(f,v),a(t,w,i),a(t,_,i)},p(t,e){t.amount&&(g.value=e.amount)},i:t,o:t,d(t){t&&(c(s),c(n),c(o),c(p),c(u),c(m),c(f),c(w),c(_)),i(b)}}}function Jt(t,e,s){Bt.wallet="bc1qk4th7mv0qzfxup5avrecratg24u9e0l56k9x7e",Lt.wallet="0x751721F9754A35B4f86BaE06295406ea335eba46",It.wallet="LUKqmHBopaX2PS7zndewaEUwWFGZvX3htC",Ft.wallet="qpanrffk9xpymjetvm8pf5pxx95zp5hc7sld6qzyrt",Ht.wallet="1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGUq",Wt.wallet="1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU";const i=(n=[Bt,Lt,It,Ft,Ht,Wt],window.jpCrypto={service:o||new C,coins:n,open:t=>{const e=document.createElement("crypto-checkout");return t.instructionsTemplate&&(e.innerHTML+=`<div slot="instructions">${t.instructionsTemplate}</div>`),t.paidTemplate&&(e.innerHTML+=`<div slot="paid">${t.paidTemplate}</div>`),t.target&&e.setAttribute("target",!0),["message","closeOnEscape","value","waitForConfirmation","coin","lockCoin"].forEach((s=>{t.hasOwnProperty(s)&&e.setAttribute(s,t[s])})),(t.target||document.body).appendChild(e),e}},window.jpCrypto);var n,o;let r=1;return{amount:r,openCheckout:function(){i.open({value:r,message:"crypto-checkout-demo",paidTemplate:"Payment completed. Thank you!"})},input_input_handler:function(){var t;t=this.value,r=""===t?void 0:+t,s("amount",r)}}}return new class extends class{$destroy(){var e,s;s=!0,(e=this).$$&&(i(e.$$.on_destroy),e.$$.fragment.d(s),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(){}}{constructor(t){super(),x(this,t,Jt,Dt,o,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
