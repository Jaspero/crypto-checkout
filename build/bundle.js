var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function a(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function c(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}let d;function h(t){d=t}const p=[];let u;const m=[],f=[],y=[];function g(t){f.push(t)}function v(){const t=new Set;do{for(;p.length;){const t=p.shift();h(t),_(t.$$)}for(;m.length;)m.shift()();for(;f.length;){const e=f.pop();t.has(e)||(e(),t.add(e))}}while(p.length);for(;y.length;)y.pop()();u=null}function _(t){t.fragment&&(t.update(t.dirty),n(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(g))}function w(t,e){t.$$.dirty||(p.push(t),u||(u=Promise.resolve(),u.then(v)),t.$$.dirty={}),t.$$.dirty[e]=!0}function b(r,o,a,l,c,p){const u=d;h(r);const m=o.props||{},f=r.$$={fragment:null,ctx:null,props:p,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:null};let y=!1;f.ctx=a?a(r,m,((t,e)=>{f.ctx&&c(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),y&&w(r,t))})):m,f.update(),y=!0,n(f.before_render),f.fragment=l(f.ctx),o.target&&(o.hydrate?f.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):f.fragment.c(),o.intro&&r.$$.fragment.i&&r.$$.fragment.i(),function(t,s,r){const{fragment:o,on_mount:a,on_destroy:l,after_render:c}=t.$$;o.m(s,r),g((()=>{const s=a.map(e).filter(i);l?l.push(...s):n(s),t.$$.on_mount=[]})),c.forEach(g)}(r,o.target,o.anchor),v()),h(u)}class S extends class{async getPrice(t,e){return 0}async confirmPayment(t,e){return{success:!0,value:t,note:e}}}{constructor(){super(...arguments),this.url="https://api.coincap.io/v2/"}async getPrice(t,e){let s=await fetch(this.url+"assets/"+e);return s=await s.json(),t/s.data.priceUsd}async confirmPayment(t,e){return{success:!0,value:t,note:e}}}
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
const x="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},P=`{{lit-${String(Math.random()).slice(2)}}}`,$=`\x3c!--${P}--\x3e`,T=new RegExp(`${P}|${$}`),N="$lit$";class k{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)E(e[t].name,N)&&n++;for(;n-- >0;){const e=l[a],s=M.exec(e)[2],n=s.toLowerCase()+N,i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(T);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(P)>=0){const n=t.parentNode,i=e.split(T),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=V();else{const t=M.exec(r);null!==t&&E(t[2],N)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-N.length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(V(),t),s.push(t)):t.data=i[r],a+=r}}else if(8===t.nodeType)if(t.data===P){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(V(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(P,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const E=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},A=t=>-1!==t.index,V=()=>document.createComment(""),M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function O(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,133,null,!1);let r=R(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=R(n,r),o=n[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const U=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},R=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(A(e))return s}return-1};
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
const q=new WeakMap,j=t=>"function"==typeof t&&q.has(t),z={},B={};
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
class F{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=x?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,r=0,o=0,a=n.nextNode();for(;r<s.length;)if(i=s[r],A(i)){for(;o<i.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return x&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
	 */const L=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),H=` ${P} `;class I{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=M.exec(t);e+=null===r?t+(s?H:$):t.substr(0,r.index)+r[1]+r[2]+N+r[3]+P}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==L&&(e=L.createHTML(e)),t.innerHTML=e,t}}
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
	 */const W=t=>null===t||!("object"==typeof t||"function"==typeof t),D=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class J{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new K(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!D(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(W(t)||!D(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class K{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===z||W(t)&&t===this.value||(this.value=t,j(t)||(this.committer.dirty=!0))}commit(){for(;j(this.value);){const t=this.value;this.value=z,t(this)}this.value!==z&&this.committer.commit()}}class Q{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(V()),this.endNode=t.appendChild(V())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=V()),t.__insert(this.endNode=V())}insertAfterPart(t){t.__insert(this.startNode=V()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;j(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=z,t(this)}const t=this.__pendingValue;t!==z&&(W(t)?t!==this.value&&this.__commitText(t):t instanceof I?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):D(t)?this.__commitIterable(t):t===B?(this.value=B,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof F&&this.value.template===e)this.value.update(t.values);else{const s=new F(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new Q(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){C(this.startNode.parentNode,t.nextSibling,this.endNode)}}class X{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;j(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=z,t(this)}if(this.__pendingValue===z)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=z}}class G extends J{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Y extends K{}let Z=!1;(()=>{try{const t={get capture(){return Z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class tt{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;j(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=z,t(this)}if(this.__pendingValue===z)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=et(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=z}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const et=t=>t&&(Z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
	 */;function st(t){let e=nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},nt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(P);return s=e.keyString.get(n),void 0===s&&(s=new k(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const nt=new Map,it=new WeakMap;
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
	 */const rt=new
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
class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new G(t,e.slice(1),s).parts}if("@"===i)return[new tt(t,e.slice(1),n.eventContext)];if("?"===i)return[new X(t,e.slice(1),s)];return new J(t,e,s).parts}handleTextExpression(t){return new Q(t)}};
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
	 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ot=(t,...e)=>new I(t,e,"html",rt)
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
	 */,at=(t,e)=>`${t}--${e}`;let lt=!0;void 0===window.ShadyCSS?lt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),lt=!1);const ct=t=>e=>{const s=at(e.type,t);let n=nt.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},nt.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(P);if(i=n.keyString.get(r),void 0===i){const s=e.getTemplateElement();lt&&window.ShadyCSS.prepareTemplateDom(s,t),i=new k(e,s),n.keyString.set(r,i)}return n.stringsArray.set(e.strings,i),i},dt=["html","svg"],ht=new Set,pt=(t,e,s)=>{ht.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{dt.forEach((e=>{const s=nt.get(at(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),O(t,s)}))}))})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=R(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=U(e),s.parentNode.insertBefore(e,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=R(i,o);return}o=R(i,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),O(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const ut={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},mt=(t,e)=>e!==t&&(e==e||t==t),ft={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:mt},yt="finalized";class gt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=ft){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ft}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(yt)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=mt){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||ut,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||ut.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=ft){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}gt.finalized=!0;
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
const vt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),_t=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function wt(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):_t(t,e)}const bt=(t,e,s)=>{Object.defineProperty(e,s,t)},St=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
	@license
	Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/,xt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol();class Pt{constructor(t,e){if(e!==Ct)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(xt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const $t={};class Tt extends gt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),n=[];s.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!xt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Pt(String(e),Ct)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?xt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==$t&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return $t}}Tt.finalized=!0,Tt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=it.has(e),r=lt&&11===e.nodeType&&!!e.host,o=r&&!ht.has(n),a=o?document.createDocumentFragment():e;if(((t,e,s)=>{let n=it.get(e);void 0===n&&(C(e,e.firstChild),it.set(e,n=new Q(Object.assign({templateFactory:st},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:ct(n)},s)),o){const t=it.get(a);it.delete(a);const s=t.value instanceof F?t.value.template:void 0;pt(n,a,s),C(e,e.firstChild),e.appendChild(a),it.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)};
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
const Nt=new WeakMap,kt=(Et=t=>e=>{if(!(e instanceof Q))throw new Error("unsafeHTML can only be used in text bindings");const s=Nt.get(e);if(void 0!==s&&W(t)&&t===s.value&&e.value===s.fragment)return;const n=document.createElement("template");n.innerHTML=t;const i=document.importNode(n.content,!0);e.setValue(i),Nt.set(e,{value:t,fragment:i})},(...t)=>{const e=Et(...t);return q.set(e,!0),e});var Et,At=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let Vt=class extends Tt{constructor(){super(...arguments),this.message="",this.waitForConfirmation=!1,this.hasTime=!0,this.loading=!1,this.paid=!1}get service(){return window.jpCrypto.service}get coins(){return window.jpCrypto.coins}connectedCallback(){super.connectedCallback()}coinsTemp(){const t=t=>ot`<button class="coin" data-id="${t.id}" @click="${this.coinSelected}">
        ${kt(t.icon)}
        <span>${t.label}</span>
      </button>`;return ot`<div class="coins">${this.coins.map((e=>t(e)))}</div>`}payTemp(){return this.hasTime?this.error?ot`
          <div class="error">
            <p>${this.error}</p>
          </div>`:ot`
        <slot name="instructions"></slot>
        <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer>
        <div id="jp-c-qr"></div>
        <div>
          <div>${this.displayedCoinValue}</div>
          <input readonly value="${this.coin.wallet}" />
          <button @click="${()=>this.selectCoin("")}">Back</button>
          <button @click="${()=>this.confirmPay()}">Confirm Payment</button>
        </div>      
      `:ot`
      <div class="time-out">
        <p>Timeout elapsed for this order.</p>
        <button @click="${()=>this.selectCoin(this.coin.id)}">Update Rate</button>
        <button @click="${()=>this.selectCoin("")}">Select Different Coin</button>
      </div>`}paidTemp(){return ot`<slot name="paid"></slot>`}render(){let t;return t=this.paid?this.paidTemp():this.coin?this.payTemp():this.coinsTemp(),ot`
      <button class="close" @click="${this.close}">Close</button>
      <div class="dialog">
        ${this.loading&&ot`<div class="loading"></div>`||""}
        ${t}
      </div>
    `}async coinSelected(t){const e=t.target;await this.selectCoin(e.dataset.id)}async selectCoin(t){this.coin=t?this.coins.find((e=>e.id===t)):null,this.coin&&(this.coinValue=await this.coin.rate(this.value),this.displayedCoinValue=this.coin.format(this.coinValue),this.hasTime=!0,await this.updateComplete,this.renderQr())}renderQr(){new QRCodeStyling({width:300,height:300,data:this.coin.qr(this.coinValue,this.message),image:"data:image/svg+xml;base64,"+window.btoa(this.coin.icon),imageOptions:{margin:10},dotsOptions:{color:this.coin.color,type:"rounded"},backgroundOptions:{color:"#e9ebee"}}).append(this._qrEl)}timeOut(){this.hasTime=!1}close(){this.parentNode.removeChild(this)}async confirmPay(){if(this.waitForConfirmation){const{success:t,error:e}=await this.service.confirmPayment(this.coinValue,this.message);if(!t)return void(this.error=e)}this.dispatchEvent(new CustomEvent("paid",{detail:{coin:this.coin.id,amount:this.coinValue}})),this.paid=!0}};var Mt,Ot;Vt.styles=((t,...e)=>{const s=e.reduce(((e,s,n)=>e+(t=>{if(t instanceof Pt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1]),t[0]);return new Pt(s,Ct)})`
    :host {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
    }
    .dialog {
      position: fixed;
      margin: auto;
      background: white;
      width: 500px;
      height: 500px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    
    .coins {
      display: flex;
      flex-direction: column;
    }
    
    .coin {
      border: none;
      width: 200px;
      display: flex;
      align-items: center;
    }
    
    .coin > span {
      pointer-events: none;
    }
    
    .coin > svg {
      width: 40px;
      height: 40px;
      pointer-events: none;
    }  
  `,At([wt()],Vt.prototype,"message",void 0),At([wt({converter:t=>"true"===t})],Vt.prototype,"waitForConfirmation",void 0),At([wt()],Vt.prototype,"hasTime",void 0),At([wt()],Vt.prototype,"loading",void 0),At([wt()],Vt.prototype,"paid",void 0),At([wt()],Vt.prototype,"error",void 0),At([wt({converter:t=>parseInt(t,10)})],Vt.prototype,"value",void 0),At([wt()],Vt.prototype,"coinValue",void 0),At([wt()],Vt.prototype,"displayedCoinValue",void 0),At([wt()],Vt.prototype,"coin",void 0),At([(Mt="#jp-c-qr",(t,e)=>{const s={get(){return this.renderRoot.querySelector(Mt)},enumerable:!0,configurable:!0};if(Ot){const t="symbol"==typeof e?Symbol():`__${e}`;s.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(Mt)),this[t]}}return void 0!==e?bt(s,t,e):St(s,t)})],Vt.prototype,"_qrEl",void 0),Vt=At([vt("crypto-dialog")],Vt);var Ut=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let Rt=class extends Tt{connectedCallback(){super.connectedCallback();const[t,e]=this.time.split(":").map((t=>parseInt(t,10)));this.total=60*t+e,this.current=this.time,this._timer=setInterval((()=>{this.total-=1;const t=Math.floor(this.total/60),e=this.total%60;this.total?this.current=`${t>9?t:`0${t}`}:${e>9?e:`0${e}`}`:this.dispatchEvent(new CustomEvent("finished"))}),1e3)}disconnectedCallback(){clearInterval(this._timer),super.disconnectedCallback()}render(){return ot`${this.current}`}};Ut([wt()],Rt.prototype,"time",void 0),Ut([wt()],Rt.prototype,"current",void 0),Rt=Ut([vt("crypto-timer")],Rt);class qt{constructor(t,e,s,n,i){this.id=t,this.wallet=e,this.label=s,this.icon=n,this.color=i}qr(t,e){let s=`${this.label.toLowerCase().replace(/ /g,"")}:${this.wallet}?amount=${t}`;return e&&(s+=`&data=${s}`),s}rate(t){return window.jpCrypto.service.getPrice(t,this.label.replace(/ /g,"-").toLowerCase())}format(t){return`${t} ${this.id}`}}const jt=new qt("BTC","","Bitcoin",'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" id="a"/></defs><g fill="none" fill-rule="evenodd"><use fill="#F7931A" xlink:href="#a"/><path d="M31 22c-1 3-5 2-7 1l2-5c1 1 6 1 5 4zm-1 8c-1 3-6 1-8 1l2-5c2 0 7 1 6 4zm6-8c0-3-2-4-5-5l1-4-3-1-1 4-2-1 1-3-2-1-1 4h-2l-3-1-1 2 2 1 1 1-1 5-2 6-1 1-2-1-1 3 3 1h2l-1 4 3 1 1-4h2l-1 4 2 1 1-4c5 1 8 0 9-3s0-5-2-6c1-1 3-2 3-4z" fill="#FFF"/></g></svg>',"#F7931A");const zt=new class extends qt{qr(t,e){let s=`ethereum:${this.wallet}?amount=${t}`;return e&&(s+=`&data=${e}`),s}}("ETH","","Ethereum",'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M25 50a25 25 0 100-50 25 25 0 000 50z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#6B71D6" xlink:href="#a"/><path fill="#E9ECFF" d="M25 9a493 493 0 01-9 16l5 3 5 3 5-3 5-3A692 692 0 0025 9m-9 18l10 14 10-14-10 6-5-3a915 915 0 01-5-3"/></g></svg>',"#6b71d6"),Bt=new qt("BCH","","Bitcoin Cash",'<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#8dc351" r="16"/><path d="M21 11c-1-2-3-3-5-2l-1-3-1 1v2l-1 1-1-3h-1v3l-1 1H8l1 2h2l1 3 1 5v1h-2l1 2 2-1h1l1 3 2-1-1-2a66 66 0 001-1l1 3h2l-1-3c3-1 5-3 4-5 0-3-2-3-3-3v-3zm0 6c0 2-4 3-5 4l-1-4c1-1 5-2 6 0zm-3-5c1 2-2 3-3 3l-1-3c1-1 4-2 4 0z" fill="#fff" fill-rule="nonzero"/></g></svg>',"#8dc351"),Ft=new qt("BSV","","Bitcoin SV",'<svg viewBox="0 0 2499.6 2500" xmlns="http://www.w3.org/2000/svg"><path d="M2500 1250a1250 1250 0 11-2501 0 1250 1250 0 012501 0z" fill="#eab300"/><g fill="#fff"><path d="M1742 944c-17-168-161-224-344-240V472h-141v226l-113 2V472h-141v232l-90 1-195-1v151s104-2 103 0c57 0 75 34 81 62v265l15 1h-15v371c-3 18-13 46-53 46 1 2-103 0-103 0l-28 169h184l101 1v235h141v-233l113 2v231h141v-235c238-13 404-73 425-296 17-180-68-260-203-293 82-41 134-115 122-237zm-198 502c0 176-301 156-397 156v-312c96 0 397-27 397 156zm-66-439c0 160-251 141-331 141V866c80 0 331-26 331 141z"/><path d="M902 1176h21v15h-21z"/></g></svg>',"#eab300"),Lt=new qt("LTC","","Litecoin",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 329 329"><defs/><path fill="#bebebe" d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"/><path fill="#bebebe" d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"/><path fill="#fff" d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"/></svg>',"#bebebe");const Ht=new class extends qt{qr(t,e){return`monero:${this.wallet}?tx_amount=${e}&data=${t}`}}("XMR","","Monero",'<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 0A128 128 0 007 168h38V61l83 83 83-83v107h38A128 128 0 00128 0" fill="#F60"/><path d="M109 163l-36-36v68H19a128 128 0 00218 0h-54v-68l-36 36-19 19-19-19z" fill="#4C4C4C"/></svg>',"#d26e2b");function It(e){var s,i,r,d,h;return{c(){var t,n,o;s=a("main"),i=a("input"),r=l(),(d=a("button")).textContent="Checkout",t=i,n="type",null==(o="number")?t.removeAttribute(n):t.setAttribute(n,o),i.placeholder="Amount",s.className="svelte-13avv6a",h=[c(i,"input",e.input_input_handler),c(d,"click",e.openCheckout)]},m(t,n){!function(t,e,s){t.insertBefore(e,s)}(t,s,n),o(s,i),i.value=e.amount,o(s,r),o(s,d)},p(t,e){t.amount&&(i.value=e.amount)},i:t,o:t,d(t){var e;t&&(e=s).parentNode.removeChild(e),n(h)}}}function Wt(t,e,s){jt.wallet="bc1qk4th7mv0qzfxup5avrecratg24u9e0l56k9x7e",zt.wallet="0x751721F9754A35B4f86BaE06295406ea335eba46",Lt.wallet="LUKqmHBopaX2PS7zndewaEUwWFGZvX3htC",Bt.wallet="qpanrffk9xpymjetvm8pf5pxx95zp5hc7sld6qzyrt",Ft.wallet="1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGUq",Ht.wallet="1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU";const n=(i=[jt,zt,Lt,Bt,Ft,Ht],window.jpCrypto={service:r||new S,coins:i,open:t=>{const e=document.createElement("crypto-dialog");return t.instructionsTemplate&&(e.innerHTML+=`<div slot="instructions">${t.instructionsTemplate}</div>`),t.paidTemplate&&(e.innerHTML+=`<div slot="paid">${t.paidTemplate}</div>`),e.setAttribute("value",t.value.toString()),t.message&&e.setAttribute("message",t.message),t.waitForConfirmation&&e.setAttribute("waitForConfirmation",t.waitForConfirmation),(t.target||document.body).appendChild(e),e}},window.jpCrypto);var i,r;let o=1;return{amount:o,openCheckout:function(){n.open({value:o,message:"crypto-checkout-demo"})},input_input_handler:function(){var t;t=this.value,o=""===t?void 0:+t,s("amount",o)}}}return new class extends class{$destroy(){var e,s;s=!0,(e=this).$$&&(n(e.$$.on_destroy),e.$$.fragment.d(s),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(){}}{constructor(t){super(),b(this,t,Wt,It,r,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
