function A(A,t,e,i){var s,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(A,t,e,i);else for(var r=A.length-1;r>=0;r--)(s=A[r])&&(n=(o<3?s(n):o>3?s(t,e,n):s(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(A,t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=A,this.t=t}get styleSheet(){let A=this.o;const t=this.t;if(e&&void 0===A){const e=void 0!==t&&1===t.length;e&&(A=s.get(t)),void 0===A&&((this.o=A=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(t,A))}return A}toString(){return this.cssText}}const n=(A,...t)=>{const e=1===A.length?A[0]:t.reduce(((t,e,i)=>t+(A=>{if(!0===A._$cssResult$)return A.cssText;if("number"==typeof A)return A;throw Error("Value passed to 'css' function must be a 'css' function result: "+A+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+A[i+1]),A[0]);return new o(e,A,i)},r=e?A=>A:A=>A instanceof CSSStyleSheet?(A=>{let t="";for(const e of A.cssRules)t+=e.cssText;return(A=>new o("string"==typeof A?A:A+"",void 0,i))(t)})(A):A
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",B=l.reactiveElementPolyfillSupport,E={toAttribute(A,t){switch(t){case Boolean:A=A?d:null;break;case Object:case Array:A=null==A?A:JSON.stringify(A)}return A},fromAttribute(A,t){let e=A;switch(t){case Boolean:e=null!==A;break;case Number:e=null===A?null:Number(A);break;case Object:case Array:try{e=JSON.parse(A)}catch(A){e=null}}return e}},Q=(A,t)=>t!==A&&(t==t||A==A),h={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:Q};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(A){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(A)}static get observedAttributes(){this.finalize();const A=[];return this.elementProperties.forEach(((t,e)=>{const i=this._$Ep(e,t);void 0!==i&&(this._$Ev.set(i,e),A.push(i))})),A}static createProperty(A,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(A,t),!t.noAccessor&&!this.prototype.hasOwnProperty(A)){const e="symbol"==typeof A?Symbol():"__"+A,i=this.getPropertyDescriptor(A,e,t);void 0!==i&&Object.defineProperty(this.prototype,A,i)}}static getPropertyDescriptor(A,t,e){return{get(){return this[t]},set(i){const s=this[A];this[t]=i,this.requestUpdate(A,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(A){return this.elementProperties.get(A)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const A=Object.getPrototypeOf(this);if(A.finalize(),void 0!==A.h&&(this.h=[...A.h]),this.elementProperties=new Map(A.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const A=this.properties,t=[...Object.getOwnPropertyNames(A),...Object.getOwnPropertySymbols(A)];for(const e of t)this.createProperty(e,A[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(A){const t=[];if(Array.isArray(A)){const e=new Set(A.flat(1/0).reverse());for(const A of e)t.unshift(r(A))}else void 0!==A&&t.push(r(A));return t}static _$Ep(A,t){const e=t.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof A?A.toLowerCase():void 0}u(){var A;this._$E_=new Promise((A=>this.enableUpdating=A)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(A=this.constructor.h)||void 0===A||A.forEach((A=>A(this)))}addController(A){var t,e;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(A),void 0!==this.renderRoot&&this.isConnected&&(null===(e=A.hostConnected)||void 0===e||e.call(A))}removeController(A){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(A)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((A,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var A;const i=null!==(A=this.shadowRoot)&&void 0!==A?A:this.attachShadow(this.constructor.shadowRootOptions);return((A,i)=>{e?A.adoptedStyleSheets=i.map((A=>A instanceof CSSStyleSheet?A:A.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,A.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var A;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(A=this._$ES)||void 0===A||A.forEach((A=>{var t;return null===(t=A.hostConnected)||void 0===t?void 0:t.call(A)}))}enableUpdating(A){}disconnectedCallback(){var A;null===(A=this._$ES)||void 0===A||A.forEach((A=>{var t;return null===(t=A.hostDisconnected)||void 0===t?void 0:t.call(A)}))}attributeChangedCallback(A,t,e){this._$AK(A,e)}_$EO(A,t,e=h){var i;const s=this.constructor._$Ep(A,e);if(void 0!==s&&!0===e.reflect){const o=(void 0!==(null===(i=e.converter)||void 0===i?void 0:i.toAttribute)?e.converter:E).toAttribute(t,e.type);this._$El=A,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(A,t){var e;const i=this.constructor,s=i._$Ev.get(A);if(void 0!==s&&this._$El!==s){const A=i.getPropertyOptions(s),o="function"==typeof A.converter?{fromAttribute:A.converter}:void 0!==(null===(e=A.converter)||void 0===e?void 0:e.fromAttribute)?A.converter:E;this._$El=s,this[s]=o.fromAttribute(t,A.type),this._$El=null}}requestUpdate(A,t,e){let i=!0;void 0!==A&&(((e=e||this.constructor.getPropertyOptions(A)).hasChanged||Q)(this[A],t)?(this._$AL.has(A)||this._$AL.set(A,t),!0===e.reflect&&this._$El!==A&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(A,e))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(A){Promise.reject(A)}const A=this.scheduleUpdate();return null!=A&&await A,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var A;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((A,t)=>this[t]=A)),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),null===(A=this._$ES)||void 0===A||A.forEach((A=>{var t;return null===(t=A.hostUpdate)||void 0===t?void 0:t.call(A)})),this.update(e)):this._$Ek()}catch(A){throw t=!1,this._$Ek(),A}t&&this._$AE(e)}willUpdate(A){}_$AE(A){var t;null===(t=this._$ES)||void 0===t||t.forEach((A=>{var t;return null===(t=A.hostUpdated)||void 0===t?void 0:t.call(A)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(A)),this.updated(A)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(A){return!0}update(A){void 0!==this._$EC&&(this._$EC.forEach(((A,t)=>this._$EO(t,this[t],A))),this._$EC=void 0),this._$Ek()}updated(A){}firstUpdated(A){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==B||B({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const v=window,p=v.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:A=>A}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,f="?"+C,y=`<${f}>`,I=document,b=(A="")=>I.createComment(A),w=A=>null===A||"object"!=typeof A&&"function"!=typeof A,L=Array.isArray,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,S=/>/g,H=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,M=/"/g,z=/^(?:script|style|textarea|title)$/i,k=(A=>(t,...e)=>({_$litType$:A,strings:t,values:e}))(1),x=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),X=new WeakMap,j=I.createTreeWalker(I,129,null,!1),U=(A,t)=>{const e=A.length-1,i=[];let s,o=2===t?"<svg>":"",n=V;for(let t=0;t<e;t++){const e=A[t];let r,a,l=-1,c=0;for(;c<e.length&&(n.lastIndex=c,a=n.exec(e),null!==a);)c=n.lastIndex,n===V?"!--"===a[1]?n=P:void 0!==a[1]?n=S:void 0!==a[2]?(z.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=H):void 0!==a[3]&&(n=H):n===H?">"===a[0]?(n=null!=s?s:V,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,r=a[1],n=void 0===a[3]?H:'"'===a[3]?M:O):n===M||n===O?n=H:n===P||n===S?n=V:(n=H,s=void 0);const d=n===H&&A[t+1].startsWith("/>")?" ":"";o+=n===V?e+y:l>=0?(i.push(r),e.slice(0,l)+"$lit$"+e.slice(l)+C+d):e+C+(-2===l?(i.push(void 0),t):d)}const r=o+(A[e]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(A)||!A.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(r):r,i]};class W{constructor({strings:A,_$litType$:t},e){let i;this.parts=[];let s=0,o=0;const n=A.length-1,r=this.parts,[a,l]=U(A,t);if(this.el=W.createElement(a,e),j.currentNode=this.el.content,2===t){const A=this.el.content,t=A.firstChild;t.remove(),A.append(...t.childNodes)}for(;null!==(i=j.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const A=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(C)){const e=l[o++];if(A.push(t),void 0!==e){const A=i.getAttribute(e.toLowerCase()+"$lit$").split(C),t=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:t[2],strings:A,ctor:"."===t[1]?G:"?"===t[1]?Y:"@"===t[1]?J:Z})}else r.push({type:6,index:s})}for(const t of A)i.removeAttribute(t)}if(z.test(i.tagName)){const A=i.textContent.split(C),t=A.length-1;if(t>0){i.textContent=p?p.emptyScript:"";for(let e=0;e<t;e++)i.append(A[e],b()),j.nextNode(),r.push({type:2,index:++s});i.append(A[t],b())}}}else if(8===i.nodeType)if(i.data===f)r.push({type:2,index:s});else{let A=-1;for(;-1!==(A=i.data.indexOf(C,A+1));)r.push({type:7,index:s}),A+=C.length-1}s++}}static createElement(A,t){const e=I.createElement("template");return e.innerHTML=A,e}}function D(A,t,e=A,i){var s,o,n,r;if(t===x)return t;let a=void 0!==i?null===(s=e._$Co)||void 0===s?void 0:s[i]:e._$Cl;const l=w(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===l?a=void 0:(a=new l(A),a._$AT(A,e,i)),void 0!==i?(null!==(n=(r=e)._$Co)&&void 0!==n?n:r._$Co=[])[i]=a:e._$Cl=a),void 0!==a&&(t=D(A,a._$AS(A,t.values),a,i)),t}class R{constructor(A,t){this.u=[],this._$AN=void 0,this._$AD=A,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(A){var t;const{el:{content:e},parts:i}=this._$AD,s=(null!==(t=null==A?void 0:A.creationScope)&&void 0!==t?t:I).importNode(e,!0);j.currentNode=s;let o=j.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new T(o,o.nextSibling,this,A):1===a.type?t=new a.ctor(o,a.name,a.strings,this,A):6===a.type&&(t=new K(o,this,A)),this.u.push(t),a=i[++r]}n!==(null==a?void 0:a.index)&&(o=j.nextNode(),n++)}return s}p(A){let t=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(A,e,t),t+=e.strings.length-2):e._$AI(A[t])),t++}}class T{constructor(A,t,e,i){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=A,this._$AB=t,this._$AM=e,this.options=i,this._$Cm=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var A,t;return null!==(t=null===(A=this._$AM)||void 0===A?void 0:A._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let A=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===A.nodeType&&(A=t.parentNode),A}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(A,t=this){A=D(this,A,t),w(A)?A===N||null==A||""===A?(this._$AH!==N&&this._$AR(),this._$AH=N):A!==this._$AH&&A!==x&&this.g(A):void 0!==A._$litType$?this.$(A):void 0!==A.nodeType?this.T(A):(A=>L(A)||"function"==typeof(null==A?void 0:A[Symbol.iterator]))(A)?this.k(A):this.g(A)}O(A,t=this._$AB){return this._$AA.parentNode.insertBefore(A,t)}T(A){this._$AH!==A&&(this._$AR(),this._$AH=this.O(A))}g(A){this._$AH!==N&&w(this._$AH)?this._$AA.nextSibling.data=A:this.T(I.createTextNode(A)),this._$AH=A}$(A){var t;const{values:e,_$litType$:i}=A,s="number"==typeof i?this._$AC(A):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.p(e);else{const A=new R(s,this),t=A.v(this.options);A.p(e),this.T(t),this._$AH=A}}_$AC(A){let t=X.get(A.strings);return void 0===t&&X.set(A.strings,t=new W(A)),t}k(A){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let e,i=0;for(const s of A)i===t.length?t.push(e=new T(this.O(b()),this.O(b()),this,this.options)):e=t[i],e._$AI(s),i++;i<t.length&&(this._$AR(e&&e._$AB.nextSibling,i),t.length=i)}_$AR(A=this._$AA.nextSibling,t){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,t);A&&A!==this._$AB;){const t=A.nextSibling;A.remove(),A=t}}setConnected(A){var t;void 0===this._$AM&&(this._$Cm=A,null===(t=this._$AP)||void 0===t||t.call(this,A))}}class Z{constructor(A,t,e,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=A,this.name=t,this._$AM=i,this.options=s,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(A,t=this,e,i){const s=this.strings;let o=!1;if(void 0===s)A=D(this,A,t,0),o=!w(A)||A!==this._$AH&&A!==x,o&&(this._$AH=A);else{const i=A;let n,r;for(A=s[0],n=0;n<s.length-1;n++)r=D(this,i[e+n],t,n),r===x&&(r=this._$AH[n]),o||(o=!w(r)||r!==this._$AH[n]),r===N?A=N:A!==N&&(A+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!i&&this.j(A)}j(A){A===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=A?A:"")}}class G extends Z{constructor(){super(...arguments),this.type=3}j(A){this.element[this.name]=A===N?void 0:A}}const q=p?p.emptyScript:"";class Y extends Z{constructor(){super(...arguments),this.type=4}j(A){A&&A!==N?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends Z{constructor(A,t,e,i,s){super(A,t,e,i,s),this.type=5}_$AI(A,t=this){var e;if((A=null!==(e=D(this,A,t,0))&&void 0!==e?e:N)===x)return;const i=this._$AH,s=A===N&&i!==N||A.capture!==i.capture||A.once!==i.once||A.passive!==i.passive,o=A!==N&&(i===N||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,A),this._$AH=A}handleEvent(A){var t,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==e?e:this.element,A):this._$AH.handleEvent(A)}}class K{constructor(A,t,e){this.element=A,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(A){D(this,A)}}const F=v.litHtmlPolyfillSupport;null==F||F(W,T),(null!==(u=v.litHtmlVersions)&&void 0!==u?u:v.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $,_;class AA extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var A,t;const e=super.createRenderRoot();return null!==(A=(t=this.renderOptions).renderBefore)&&void 0!==A||(t.renderBefore=e.firstChild),e}update(A){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(A),this._$Do=((A,t,e)=>{var i,s;const o=null!==(i=null==e?void 0:e.renderBefore)&&void 0!==i?i:t;let n=o._$litPart$;if(void 0===n){const A=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new T(t.insertBefore(b(),A),A,void 0,null!=e?e:{})}return n._$AI(A),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var A;super.connectedCallback(),null===(A=this._$Do)||void 0===A||A.setConnected(!0)}disconnectedCallback(){var A;super.disconnectedCallback(),null===(A=this._$Do)||void 0===A||A.setConnected(!1)}render(){return x}}AA.finalized=!0,AA._$litElement$=!0,null===($=globalThis.litElementHydrateSupport)||void 0===$||$.call(globalThis,{LitElement:AA});const tA=globalThis.litElementPolyfillSupport;null==tA||tA({LitElement:AA}),(null!==(_=globalThis.litElementVersions)&&void 0!==_?_:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const eA=(A,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,A)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,A)}};function iA(A){return(t,e)=>void 0!==e?((A,t,e)=>{t.constructor.createProperty(e,A)})(A,t,e):eA(A,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function sA(A){return iA({...A,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oA;null===(oA=window.HTMLSlotElement)||void 0===oA||oA.prototype.assignedElements;const nA="sonos-card-dispatch-event-",rA=nA+"active-player",aA=nA+"request-player",lA=nA+"show-section",cA=nA+"call-media-started",dA=nA+"call-media-done",BA=nA+"play-dir",EA=nA+"browse-up",QA=nA+"browse-state",hA=nA+"media-item-selected",gA=n`
  .list {
    --mdc-theme-primary: var(--accent-color);
    --mdc-list-vertical-padding: 0px;
    overflow: hidden;
  }
`,uA=n`
  .title {
    color: var(--secondary-text-color);
    font-weight: bold;
    padding: 0 0.5rem;
    text-overflow-ellipsis: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;function vA(A,t,e){const i=A.states[e].attributes.friendly_name||"";return t.entityNameRegexToReplace?i.replace(new RegExp(t.entityNameRegexToReplace,"g"),t.entityNameReplacement||""):i}function pA(A){return A.attributes.sonos_group||A.attributes.group_members}function mA(A){window.dispatchEvent(new CustomEvent(lA,{detail:A}))}function CA(A){return"playing"===A}function fA(A){const t=A.attributes;return`${t.media_artist||""} - ${t.media_title||""}`.replace(/^ - /g,"")}function yA(A,t){var e;const i=[A.entity,...Object.keys(A.members)].sort();if(null===(e=t.predefinedGroups)||void 0===e?void 0:e.length){const A=t.predefinedGroups.find((A=>A.entities.sort().toString()===i.toString()));if(A)return A.name}return[A.roomName,...Object.values(A.members)].join(" + ")}function IA(A){const t=new CustomEvent(rA,{bubbles:!0,composed:!0,detail:{entityId:A}});window.dispatchEvent(t)}function bA(A){const t=new CustomEvent(hA,{bubbles:!0,composed:!0,detail:A});window.dispatchEvent(t)}const wA=40;function LA(A){return A?A/100*wA:wA}var VA="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",PA="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",SA="M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z",HA="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",OA="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",MA="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z",zA="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kA=1,xA=2,NA=A=>(...t)=>({_$litDirective$:A,values:t});class XA{constructor(A){}get _$AU(){return this._$AM._$AU}_$AT(A,t,e){this._$Ct=A,this._$AM=t,this._$Ci=e}_$AS(A,t){return this.update(A,t)}update(A,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jA=NA(class extends XA{constructor(A){var t;if(super(A),A.type!==kA||"style"!==A.name||(null===(t=A.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(A){return Object.keys(A).reduce(((t,e)=>{const i=A[e];return null==i?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(A,[t]){const{style:e}=A.element;if(void 0===this.vt){this.vt=new Set;for(const A in t)this.vt.add(A);return this.render(t)}this.vt.forEach((A=>{null==t[A]&&(this.vt.delete(A),A.includes("-")?e.removeProperty(A):e[A]="")}));for(const A in t){const i=t[A];null!=i&&(this.vt.add(A),A.includes("-")?e.setProperty(A,i):e[A]=i)}return x}});function UA(A,t,e){return k`<ha-icon-button
    @click="${t}"
    .path=${A}
    style="${jA(Object.assign({"--mdc-icon-button-size":(null==e?void 0:e.big)?"6rem":"3rem","--mdc-icon-size":(null==e?void 0:e.big)?"6rem":"2rem"},null==e?void 0:e.additionalStyle))}"
  ></ha-icon-button>`}class WA extends AA{constructor(){super(...arguments),this.prev=async()=>await this.mediaControlService.prev(this.entityId),this.play=async()=>await this.mediaControlService.play(this.entityId),this.pause=async()=>await this.mediaControlService.pause(this.entityId),this.next=async()=>await this.mediaControlService.next(this.entityId),this.shuffle=async()=>{var A;return await this.mediaControlService.shuffle(this.entityId,!(null===(A=this.entity)||void 0===A?void 0:A.attributes.shuffle))},this.repeat=async()=>{var A;return await this.mediaControlService.repeat(this.entityId,null===(A=this.entity)||void 0===A?void 0:A.attributes.repeat)},this.volDown=async()=>await this.mediaControlService.volumeDown(this.entityId,this.members),this.volUp=async()=>await this.mediaControlService.volumeUp(this.entityId,this.members)}render(){({config:this.config,hass:this.hass,entityId:this.entityId,entity:this.entity,hassService:this.hassService,mediaControlService:this.mediaControlService}=this.store),this.members=this.store.groups[this.entityId].members,this.isGroup=pA(this.entity).length>1;const A=CA(this.entity.state);return k`
      <div class="main" id="mediaControls">
        <div class="icons">
          ${this.config.showVolumeUpAndDownButtons?UA(MA,this.volDown):""}
          ${UA(this.shuffleIcon(),this.shuffle)} ${UA("M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",this.prev)}
          ${UA(A?"M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z":"M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",A?this.pause:this.play,{big:!0})}
          ${UA("M16,18H18V6H16M6,18L14.5,12L6,6V18Z",this.next)} ${UA(this.repeatIcon(),this.repeat)}
          ${this.config.showVolumeUpAndDownButtons?UA(zA,this.volUp):""}
        </div>
        <sonos-volume .store=${this.store} .entityId=${this.entityId} .members=${this.members}></sonos-volume>
      </div>
    `}shuffleIcon(){var A;return(null===(A=this.entity)||void 0===A?void 0:A.attributes.shuffle)?"M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z":"M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16"}repeatIcon(){var A;const t=null===(A=this.entity)||void 0===A?void 0:A.attributes.repeat;return"all"===t?"M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z":"one"===t?"M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z":"M2,5.27L3.28,4L20,20.72L18.73,22L15.73,19H7V22L3,18L7,14V17H13.73L7,10.27V11H5V8.27L2,5.27M17,13H19V17.18L17,15.18V13M17,5V2L21,6L17,10V7H8.82L6.82,5H17Z"}static get styles(){return n`
      .main {
        margin: 0.25rem;
        padding: 0.5rem;
        overflow: hidden auto;
      }
      .icons {
        justify-content: center;
        display: flex;
        align-items: center;
      }
    `}}A([iA()],WA.prototype,"store",void 0),A([iA()],WA.prototype,"entity",void 0),A([sA()],WA.prototype,"timerToggleShowAllVolumes",void 0),customElements.define("sonos-player-controls",WA);class DA extends AA{render(){({config:this.config,hass:this.hass,entity:this.entity}=this.store);const A=this.entity.attributes,t=yA(this.store.groups[this.entity.entity_id],this.config);let e=this.config.labelWhenNoMediaIsSelected?this.config.labelWhenNoMediaIsSelected:"No media selected";return A.media_title&&(e=fA(this.entity)),k` <div class="info">
      <div class="entity">${t}</div>
      <div class="song">${e}</div>
      <div class="artist-album">${A.media_album_name}</div>
      <sonos-progress .store=${this.store}></sonos-progress>
    </div>`}static get styles(){return n`
      .info {
        margin: 0.25rem;
        padding: 0.5rem 3.5rem;
        text-align: center;
      }

      .entity {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .song {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.15rem;
        font-weight: 400;
        color: var(--accent-color);
      }

      .artist-album {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        font-weight: 300;
        color: var(--secondary-text-color);
      }
    `}}A([iA()],DA.prototype,"store",void 0),customElements.define("sonos-player-header",DA);class RA extends AA{disconnectedCallback(){this.tracker&&(clearInterval(this.tracker),this.tracker=void 0),super.disconnectedCallback()}render(){var A;({config:this.config,hass:this.hass,entity:this.entity,entityId:this.entityId}=this.store),this.entity=this.hass.states[this.entityId];const t=(null===(A=this.entity)||void 0===A?void 0:A.attributes.media_duration)||0;return t>0?(this.trackProgress(),k`
        <div class="progress">
          <span>${TA(this.playingProgress)}</span>
          <div class="bar">
            <paper-progress value="${this.playingProgress}" max="${t}"></paper-progress>
          </div>
          <span> -${TA(t-this.playingProgress)}</span>
        </div>
      `):k``}trackProgress(){var A,t,e;const i=(null===(A=this.entity)||void 0===A?void 0:A.attributes.media_position)||0,s=CA(null===(t=this.entity)||void 0===t?void 0:t.state),o=(null===(e=this.entity)||void 0===e?void 0:e.attributes.media_position_updated_at)||0;this.playingProgress=s?i+(Date.now()-new Date(o).getTime())/1e3:i,this.tracker||(this.tracker=setInterval((()=>this.trackProgress()),1e3)),s||(clearInterval(this.tracker),this.tracker=void 0)}static get styles(){return n`
      .progress {
        width: 100%;
        font-size: x-small;
        display: flex;
        --paper-progress-active-color: lightgray;
      }

      .bar {
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 5px;
      }

      paper-progress {
        flex-grow: 1;
        --paper-progress-active-color: var(--accent-color);
      }
    `}}A([iA()],RA.prototype,"store",void 0),A([sA()],RA.prototype,"playingProgress",void 0);const TA=A=>{const t=new Date(1e3*A).toISOString().substring(11,19);return t.startsWith("00:")?t.substring(3):t};customElements.define("sonos-progress",RA);class ZA extends AA{render(){({config:this.config,hass:this.hass,mediaControlService:this.mediaControlService}=this.store);const A=100*this.hass.states[this.entityId].attributes.volume_level;let t=100;A<20&&this.config.dynamicVolumeSlider&&(t=30);const e=this.members&&Object.keys(this.members).length?!Object.keys(this.members).some((A=>!this.hass.states[A].attributes.is_volume_muted)):this.hass.states[this.entityId].attributes.is_volume_muted;return k`
      <div class="volume">
        ${UA(e?"M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z":"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",(async()=>await this.mediaControlService.volumeMute(this.entityId,!e,this.members)))}
        <div class="volume-slider">
          <ha-control-slider .value="${A}" max=${t} @value-changed=${this.volumeChanged}> </ha-control-slider>
          <div class="volume-level">
            <div style="flex: ${A}">0%</div>
            ${A>=t/10&&A<=100-t/10?k` <div class="percentage">${Math.round(A)}%</div>`:""}
            <div style="flex: ${t-A};text-align: right">${t}%</div>
          </div>
        </div>
      </div>
    `}async volumeChanged(A){const t=function(A){var t;return Number.parseInt(null===(t=null==A?void 0:A.target)||void 0===t?void 0:t.value)}(A);return await this.setVolume(t)}async setVolume(A){return await this.mediaControlService.volumeSet(this.entityId,A,this.members)}static get styles(){return n`
      ha-control-slider {
        --control-slider-color: var(--accent-color);
      }

      .volume {
        display: flex;
        flex: 1;
      }

      .volume-slider {
        flex: 1;
        padding-right: 0.6rem;
      }

      .volume-level {
        font-size: x-small;
        display: flex;
      }
      .percentage {
        flex: 2;
        font-weight: bold;
        font-size: 12px;
      }
    `}}A([iA()],ZA.prototype,"store",void 0),A([iA()],ZA.prototype,"entityId",void 0),A([iA()],ZA.prototype,"members",void 0),A([iA()],ZA.prototype,"volumeClicked",void 0),customElements.define("sonos-volume",ZA);class GA extends AA{render(){return({config:this.config,entity:this.entity,entityId:this.entityId}=this.store),k`
      <div class="row">
        <sonos-player-header .store=${this.store}></sonos-player-header>
        <div class="artwork" style="background-image: ${this.getBackgroundImage()}"></div>
        <sonos-player-controls style="overflow-y:auto" .store=${this.store}></sonos-player-controls>
      </div>
    `}getBackgroundImage(){let A=`url(${"TV"===this.entity.attributes.media_title?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAJZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAARAAAAWodpAAQAAAABAAAAbAAAAAAAAABiAAAAAQAAAGIAAAABd3d3Lmlua3NjYXBlLm9yZwAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAA+uiskAAAAAlwSFlzAAAPEgAADxIBIZvyMwAAAi1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+d3d3Lmlua3NjYXBlLm9yZzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj45ODwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+OTg8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrH52sKAAA/4klEQVR4Ae3dCZAc13nY8dfHzOwNYAHiJAACIMAD4iFRlE3JsSSrSrLiWLEdQ7FNy5KllBLHRcV27NiupFKoVBLfsUNVJVVWJNqMFCuCY7ssu2jZkgWVbFG2RJGmSIgkTuIGcew1uztHH/m+Hiw0A+wxs9Mz093zb2mJObpfv/frmXlfv379njEsCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggkAgBKxG5IBMI9JnA29520L3zzbn1VjW3xbeDET8IQjNgT7rF0oWP//bBCeEIM0ZifehnD67zRga22BWzRn54bCewi2GueuHYV6pXDx8+6GWsvBQHgcQLEAAk/hCRwawJ/MQv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AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBGIQ+P9v6JX0ZgeS/gAAAABJRU5ErkJggg==":"data:image/png;base64,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AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIEGFvj/AdpNbG+v3HHWAAAAAElFTkSuQmCC"})`;const t=this.getArtworkImage();return t&&(A=`url(${t}), ${A}`),A}getArtworkImage(){const A=this.config.artworkHostname||"",{media_title:t,media_content_id:e,entity_picture:i}=this.entity.attributes;let s=i?A+i:i;const o=this.config.mediaArtworkOverrides;if(o){let A=o.find((A=>t&&t===A.mediaTitleEquals||e&&e===A.mediaContentIdEquals));A||(A=o.find((A=>!s&&A.ifMissing))),(null==A?void 0:A.imageUrl)&&(s=A.imageUrl)}return s}static get styles(){return n`
      .hoverable:focus,
      .hoverable:hover {
        color: var(--accent-color);
      }

      .hoverable:active {
        color: var(--primary-color);
      }

      .row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100%;
      }

      .artwork {
        align-self: center;
        flex-grow: 1;
        flex-shrink: 0;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    `}}A([iA()],GA.prototype,"store",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qA=(A,t,e)=>{for(const e of t)if(e[0]===A)return(0,e[1])();return null==e?void 0:e()};class YA{constructor(A,t){this.hass=A,this.sectionOnCreate=t}async callMediaService(A,t){window.dispatchEvent(new CustomEvent(cA,{bubbles:!0,composed:!0,detail:{section:this.sectionOnCreate}}));try{await this.hass.callService("media_player",A,t)}finally{window.dispatchEvent(new CustomEvent(dA,{bubbles:!0,composed:!0}))}}async browseMedia(A,t,e){return await this.hass.callWS({type:"media_player/browse_media",entity_id:A,media_content_id:e,media_content_type:t})}async getRelatedSwitchEntities(A){return new Promise((async(t,e)=>{const i={type:"render_template",template:"{{ device_entities(device_id('"+A+"')) }}"};try{const A=await this.hass.connection.subscribeMessage((e=>{A(),t(e.result.filter((A=>A.indexOf("switch")>-1)))}),i)}catch(A){e(A)}}))}async toggle(A){await this.hass.callService("homeassistant","toggle",{entity_id:A})}}function JA(A=[],t){return null==t?void 0:t.filter((t=>-1===["media-source://tts","media-source://camera"].indexOf(t.media_content_id||"")&&-1===A.indexOf(t.title)))}class KA{constructor(A,t){this.hass=A,this.hassService=t}async getRoot(A,t){return JA(t,(await this.hassService.browseMedia(A)).children)||[]}async getDir(A,t,e){try{return JA(e,(await this.hassService.browseMedia(A,t.media_content_type,t.media_content_id)).children)||[]}catch(A){return console.error(A),[]}}async getAllFavorites(A,t){if(!A.length)return[];let e=(await Promise.all(A.map((A=>this.getFavoritesForPlayer(A,t))))).flatMap((A=>A));return e=this.removeDuplicates(e),e.length?e:this.getFavoritesFromStates(A)}removeDuplicates(A){return A.filter(((A,t,e)=>t===e.findIndex((t=>t.title===A.title))))}async getFavoritesForPlayer(A,t){var e;const i=null===(e=(await this.hassService.browseMedia(A,"favorites","")).children)||void 0===e?void 0:e.map((t=>this.hassService.browseMedia(A,t.media_content_type,t.media_content_id)));return(i?await Promise.all(i):[]).flatMap((A=>JA(t,A.children)||[]))}getFavoritesFromStates(A){console.log("Custom Sonos Card: found no favorites with thumbnails, trying with titles only");let t=A.map((A=>this.hass.states[A])).flatMap((A=>A.attributes.hasOwnProperty("source_list")?A.attributes.source_list:[]));return t=[...new Set(t)],t.length||console.log("Custom Sonos Card: No favorites found"),t.map((A=>({title:A})))}}class FA{constructor(A,t){this.hassService=t,this.hass=A}async join(A,t){await this.hassService.callMediaService("join",{entity_id:A,group_members:t})}async unjoin(A){await this.hassService.callMediaService("unjoin",{entity_id:A})}async createGroup(A,t){let e;A=this.ignoreUnavailableEntities(A);for(const i of Object.values(t))if(A.indexOf(i.entity)>-1){if(CA(i.state))return void await this.modifyExistingGroup(i,A);e=e||i}if(e)await this.modifyExistingGroup(e,A);else{const t=A[0];IA(t),await this.join(t,A)}}ignoreUnavailableEntities(A){return A.filter((A=>{var t;return"unavailable"!==(null===(t=this.hass.states[A])||void 0===t?void 0:t.state)}))}async modifyExistingGroup(A,t){const e=Object.keys(A.members).filter((A=>-1===t.indexOf(A)));(null==e?void 0:e.length)&&await this.unjoin(e),IA(A.entity),await this.join(A.entity,t)}async pause(A){await this.hassService.callMediaService("media_pause",{entity_id:A})}async prev(A){await this.hassService.callMediaService("media_previous_track",{entity_id:A})}async next(A){await this.hassService.callMediaService("media_next_track",{entity_id:A})}async play(A){await this.hassService.callMediaService("media_play",{entity_id:A})}async shuffle(A,t){await this.hassService.callMediaService("shuffle_set",{entity_id:A,shuffle:t})}async repeat(A,t){const e="all"===t?"one":"one"===t?"off":"all";await this.hassService.callMediaService("repeat_set",{entity_id:A,repeat:e})}async volumeDown(A,t={}){await this.hassService.callMediaService("volume_down",{entity_id:A});for(const A in t)await this.hassService.callMediaService("volume_down",{entity_id:A})}async volumeUp(A,t={}){await this.hassService.callMediaService("volume_up",{entity_id:A});for(const A in t)await this.hassService.callMediaService("volume_up",{entity_id:A})}async volumeSet(A,t,e){const i=t/100;await this.hassService.callMediaService("volume_set",{entity_id:A,volume_level:i});for(const A in e)await this.hassService.callMediaService("volume_set",{entity_id:A,volume_level:i})}async volumeMute(A,t,e){await this.hassService.callMediaService("volume_mute",{entity_id:A,is_volume_muted:t});for(const A in e)await this.hassService.callMediaService("volume_mute",{entity_id:A,is_volume_muted:t})}async setSource(A,t){await this.hassService.callMediaService("select_source",{source:t,entity_id:A})}async playMedia(A,t){await this.hassService.callMediaService("play_media",{entity_id:A,media_content_id:t.media_content_id,media_content_type:t.media_content_type})}}class $A{constructor(A,t,e){var i;this.hass=A,this.config=t,this.mediaPlayers=this.getMediaPlayers(),this.groups=this.createPlayerGroups(this.mediaPlayers),this.entityId=e||this.determineEntityId(this.groups),this.entity=this.hass.states[this.entityId];const s=null===(i=this.config.sections)||void 0===i?void 0:i[0];this.hassService=new YA(this.hass,s),this.mediaControlService=new FA(this.hass,this.hassService),this.mediaBrowseService=new KA(this.hass,this.hassService)}getMediaPlayers(){return this.config.entities?[...new Set(this.config.entities)].filter((A=>this.hass.states[A])):Object.values(this.hass.states).filter(pA).map((A=>A.entity_id)).sort()}createPlayerGroups(A){const t=A.filter((t=>this.createGroupMasters(t,A))).map((t=>this.createGroupArray(t,A)));return Object.fromEntries(t.map((A=>[A.entity,A])))}createGroupMasters(A,t){const e=this.hass.states[A];try{const i=pA(e).filter((A=>t.indexOf(A)>-1)),s=(null==i?void 0:i.length)>1,o=s&&i&&i[0]===A;return!s||o}catch(A){return console.error("Failed to determine group master",JSON.stringify(e),A),!1}}createGroupArray(A,t){const e=this.hass.states[A];try{const i=pA(e).filter((e=>e!==A&&t.indexOf(e)>-1));return{entity:A,state:e.state,roomName:vA(this.hass,this.config,A),members:this.createGroupMembers(i)}}catch(A){return console.error("Failed to create group",JSON.stringify(e),A),{}}}createGroupMembers(A){return Object.fromEntries(A.map((A=>[A,vA(this.hass,this.config,A)])))}determineEntityId(A){const t=this.config.entityId||(window.location.href.indexOf("#")>0?window.location.href.replace(/.*#/g,""):"");let e;for(const i in A)if(i===t)e=i;else for(const s in A[i].members)s===t&&(e=i);if(!e)for(const t in A)CA(A[t].state)&&(e=t);return e||(e=Object.keys(A)[0]),e}}var _A;!function(A){A.MEDIA_BROWSER="media browser",A.GROUPS="groups",A.PLAYER="player",A.GROUPING="grouping",A.VOLUMES="volumes"}(_A||(_A={}));const{GROUPING:At,GROUPS:tt,MEDIA_BROWSER:et,PLAYER:it,VOLUMES:st}=_A;class ot extends AA{render(){return k`
      ${this.sectionButton("M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",it)}${this.sectionButton(OA,et)}
      ${this.sectionButton("M14,10A3,3 0 0,0 11,13A3,3 0 0,0 14,16A3,3 0 0,0 17,13A3,3 0 0,0 14,10M14,18A5,5 0 0,1 9,13A5,5 0 0,1 14,8A5,5 0 0,1 19,13A5,5 0 0,1 14,18M14,2A2,2 0 0,1 16,4A2,2 0 0,1 14,6A2,2 0 0,1 12,4A2,2 0 0,1 14,2M19,0H9A2,2 0 0,0 7,2V18A2,2 0 0,0 9,20H19A2,2 0 0,0 21,18V2A2,2 0 0,0 19,0M5,22H17V24H5A2,2 0 0,1 3,22V4H5",tt)} ${this.sectionButton("M6,22H18L12,16M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H7V17H3V5H21V17H17V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",At)}
      ${this.sectionButton("M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z",st)}
    `}sectionButton(A,t){var e;return!this.config.sections||(null===(e=this.config.sections)||void 0===e?void 0:e.indexOf(t))>-1?UA(A,(()=>mA(t)),{additionalStyle:Object.assign({padding:"1rem"},this.section===t&&{color:"var(--accent-color)"})}):k``}static get styles(){return n`
      :host {
        display: flex;
        justify-content: space-between;
      }
    `}}var nt,rt;A([iA()],ot.prototype,"config",void 0),A([iA()],ot.prototype,"section",void 0),customElements.define("sonos-footer",ot),function(A){A.language="language",A.system="system",A.comma_decimal="comma_decimal",A.decimal_comma="decimal_comma",A.space_comma="space_comma",A.none="none"}(nt||(nt={})),function(A){A.language="language",A.system="system",A.am_pm="12",A.twenty_four="24"}(rt||(rt={}));var at;class lt extends AA{setConfig(A){this.config=JSON.parse(JSON.stringify(A))}static get styles(){return n`
      ha-svg-icon {
        margin: 5px;
      }
      ha-control-button {
        white-space: nowrap;
      }
      ha-control-button-group {
        margin: 5px;
      }
      div {
        margin-top: 20px;
      }
    `}configChanged(){!function(A,t,e,i){i=i||{},e=null==e?{}:e;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=e,A.dispatchEvent(s)}(this,"config-changed",{config:this.config}),this.requestUpdate()}dispatchClose(){return this.dispatchEvent(new CustomEvent("closed"))}}A([iA()],lt.prototype,"config",void 0),A([iA()],lt.prototype,"hass",void 0),A([iA()],lt.prototype,"store",void 0),function(A){A.GENERAL="General",A.ENTITIES="Entities",A.ADVANCED="Advanced",A.ARTWORK="Artwork"}(at||(at={}));const ct=[{name:"hideGroupCurrentTrack",selector:{boolean:{}}},{name:"dynamicVolumeSlider",selector:{boolean:{}}},{type:"string",name:"labelWhenNoMediaIsSelected"},{type:"string",name:"labelForTheAllVolumesSlider"},{type:"string",name:"artworkHostname"},{name:"mediaBrowserShowTitleForThumbnailIcons",selector:{boolean:{}}}];customElements.define("sonos-card-advanced-editor",class extends lt{render(){return k`
      <sonos-card-editor-form .schema=${ct} .store=${this.store}></sonos-card-editor-form>
      <p>
        The following needs to be configured using code (YAML): 
        <ul>
          <li>customSources</li>
          <li>customThumbnailIfMissing</li>
          <li>mediaBrowserTitlesToIgnore</li>
        </ul>
      </p>
    `}});class dt extends lt{render(){return k``}}A([iA()],dt.prototype,"index",void 0),customElements.define("sonos-card-custom-source-editor",dt);const Bt=[{type:"multi_select",options:{player:"Player","media browser":"Media Browser",groups:"Groups",grouping:"Grouping",volumes:"Volumes"},name:"sections"},{type:"integer",name:"mediaBrowserItemsPerRow",default:1,required:!0,valueMin:1,valueMax:30},{type:"string",name:"title"},{name:"showVolumeUpAndDownButtons",selector:{boolean:{}}},{type:"integer",name:"widthPercentage",default:100,required:!0},{type:"integer",name:"heightPercentage",default:100,required:!0}];customElements.define("sonos-card-general-editor",class extends lt{render(){return k` <sonos-card-editor-form .schema=${Bt} .store=${this.store}></sonos-card-editor-form> `}});const Et=[{type:"string",name:"entityNameRegexToReplace"},{type:"string",name:"entityNameReplacement"}],Qt=[{name:"entityId",help:"Not needed, but forces this player to be the selected one on loading the card (overrides url param etc)",selector:{entity:{multiple:!1,filter:{integration:"sonos",domain:"media_player"}}}},{name:"entities",help:"Not needed, unless you don't want to include all of them",selector:{entity:{multiple:!0,filter:{integration:"sonos",domain:"media_player"}}}}];class ht extends lt{render(){({config:this.config,hass:this.hass}=this.store);const A=this.config.predefinedGroups;return this.editGroup>-1?k`<sonos-card-predefined-group-editor
          .index=${this.editGroup}
          .store=${this.store}
          @closed=${()=>this.editGroup=-1}
        ></sonos-card-predefined-group-editor>`:k`
          <sonos-card-editor-form .schema=${Qt} .store=${this.store}></sonos-card-editor-form>
          <div>
            Predefined Groups
            <ha-control-button-group>
              ${null==A?void 0:A.map(((A,t)=>k`
                  <ha-control-button @click="${()=>this.editGroup=t}">
                    ${A.name}<ha-svg-icon .path=${SA} label="Edit Group"></ha-svg-icon>
                  </ha-control-button>
                `))}
              <ha-control-button @click="${()=>this.editGroup=A?A.length:0}">
                Add group<ha-svg-icon .path=${HA} label="Add Group"></ha-svg-icon>
              </ha-control-button>
            </ha-control-button-group>
          </div>

          <div>
            Entity Renaming
            <sonos-card-editor-form .schema=${Et} .store=${this.store}></sonos-card-editor-form>
          </div>
        `}}A([sA()],ht.prototype,"editGroup",void 0),customElements.define("sonos-card-entities-editor",ht);class gt extends lt{render(){var A;({config:this.config,hass:this.hass}=this.store);const t=(null===(A=this.config.predefinedGroups)||void 0===A?void 0:A[this.index||0])||{name:"",entities:[]};return k`
      Add/Edit Predefined Group
      <sonos-card-editor-form
        .data=${t}
        .schema=${[{type:"string",name:"name",required:!0},{name:"entities",selector:{entity:{multiple:!0,filter:{integration:"sonos",domain:"media_player"}}}}]}
        .store=${this.store}
        .changed=${A=>this.groupChanged(A,this.index)}
      ></sonos-card-editor-form>
      <ha-control-button-group>
        <ha-control-button @click="${this.dispatchClose}">
          OK<ha-svg-icon .path=${VA} label="OK"></ha-svg-icon>
        </ha-control-button>
        ${t.name?k`<ha-control-button
              @click="${()=>{var A;this.config.predefinedGroups=null===(A=this.config.predefinedGroups)||void 0===A?void 0:A.filter(((A,t)=>t!==this.index)),this.index=-1,this.configChanged(),this.dispatchClose()}}"
            >
              Delete<ha-svg-icon .path=${PA} label="Delete"></ha-svg-icon>
            </ha-control-button>`:""}
      </ha-control-button-group>
    `}groupChanged(A,t){const e=A.detail.value;let i=this.config.predefinedGroups;Array.isArray(i)||(i=[]),i[t]?i[t]=e:i=[...i,e],this.config.predefinedGroups=i,this.configChanged()}}A([iA()],gt.prototype,"index",void 0),customElements.define("sonos-card-predefined-group-editor",gt);class ut extends lt{render(){({config:this.config,hass:this.hass}=this.store);const A=this.config.mediaArtworkOverrides;return this.editItem>-1?k`<sonos-card-artwork-override-editor
          .index=${this.editItem}
          .store=${this.store}
          @closed=${()=>this.editItem=-1}
        ></sonos-card-artwork-override-editor>`:k`
          <div>
            Artwork Overrides
            <ha-control-button-group>
              ${null==A?void 0:A.map(((A,t)=>{const e=A.mediaTitleEquals||A.mediaContentIdEquals||A.ifMissing&&"if missing"||t;return k`
                  <ha-control-button @click="${()=>this.editItem=t}">
                    ${e}<ha-svg-icon .path=${SA} label="Edit"></ha-svg-icon>
                  </ha-control-button>
                `}))}
              <ha-control-button @click="${()=>this.editItem=A?A.length:0}">
                Add<ha-svg-icon .path=${HA} label="Add"></ha-svg-icon>
              </ha-control-button>
            </ha-control-button-group>
          </div>
        `}}A([sA()],ut.prototype,"editItem",void 0),customElements.define("sonos-card-artwork-overrides-editor",ut);const vt={ifMissing:!1};class pt extends lt{render(){var A;({config:this.config,hass:this.hass}=this.store);const t=null===(A=this.config.mediaArtworkOverrides)||void 0===A?void 0:A[this.index||0];return k`
      Add/Edit Artwork Override
      <sonos-card-editor-form
        .data=${t||vt}
        .schema=${[{name:"ifMissing",selector:{boolean:{}}},{name:"mediaTitleEquals",type:"string"},{name:"mediaContentIdEquals",type:"string"},{name:"imageUrl",type:"string"}]}
        .store=${this.store}
        .changed=${A=>this.changed(A,this.index)}
      ></sonos-card-editor-form>
      <ha-control-button-group>
        <ha-control-button @click="${this.dispatchClose}">
          OK<ha-svg-icon .path=${VA} label="OK"></ha-svg-icon>
        </ha-control-button>
        ${t?k`<ha-control-button
              @click="${()=>{var A;this.config.mediaArtworkOverrides=null===(A=this.config.mediaArtworkOverrides)||void 0===A?void 0:A.filter(((A,t)=>t!==this.index)),this.index=-1,this.configChanged(),this.dispatchClose()}}"
            >
              Delete<ha-svg-icon .path=${PA} label="Delete"></ha-svg-icon>
            </ha-control-button>`:""}
      </ha-control-button-group>
    `}changed(A,t){const e=A.detail.value;let i=this.config.mediaArtworkOverrides;Array.isArray(i)||(i=[]),i[t]?i[t]=e:i=[...i,e],this.config.mediaArtworkOverrides=i,this.configChanged()}}A([iA()],pt.prototype,"index",void 0),customElements.define("sonos-card-artwork-override-editor",pt);class mt extends lt{render(){return({config:this.config,hass:this.hass}=this.store),k`
      <ha-form
        .data=${this.data||this.config}
        .schema=${this.schema}
        .computeLabel=${Ct}
        .hass=${this.hass}
        @value-changed=${this.changed||this.valueChanged}
      ></ha-form>
    `}valueChanged(A){const t=A.detail.value;this.config=Object.assign(Object.assign({},this.config),t),this.configChanged()}}function Ct(A){let t=A.name.replace(/([A-Z])/g," $1");return t=t.charAt(0).toUpperCase()+t.slice(1),t+(A.help?` (${A.help})`:"")}A([iA()],mt.prototype,"schema",void 0),A([iA()],mt.prototype,"data",void 0),A([iA()],mt.prototype,"changed",void 0),customElements.define("sonos-card-editor-form",mt);const{GENERAL:ft,ENTITIES:yt,ADVANCED:It,ARTWORK:bt}=at;class wt extends lt{constructor(){super(...arguments),this.configArea=ft}render(){return this.store=new $A(this.hass,this.config),this.config.sections&&0!==this.config.sections.length||(this.config.sections=[_A.PLAYER,_A.VOLUMES,_A.GROUPS,_A.GROUPING,_A.MEDIA_BROWSER]),k`
      <ha-control-button-group>
        ${[ft,yt,bt,It].map((A=>k`
            <ha-control-button
              style=${this.configAreaStyle(A)}
              @click="${()=>this.configArea=A}"
            >
              ${A}
            </ha-control-button>
          `))}
      </ha-control-button-group>

      ${this.subEditor()}
    `}subEditor(){return qA(this.configArea,[[ft,()=>k`<sonos-card-general-editor .store=${this.store}></sonos-card-general-editor>`],[yt,()=>k`<sonos-card-entities-editor .store=${this.store}></sonos-card-entities-editor>`],[It,()=>k`<sonos-card-advanced-editor .store=${this.store}></sonos-card-advanced-editor>`],[bt,()=>k`<sonos-card-artwork-overrides-editor .store=${this.store}></sonos-card-artwork-overrides-editor>`]])}configAreaStyle(A){return this.configArea===A?jA({"--control-button-background-color":"var(--primary-color)"}):""}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Lt(A,t,e){return A?t():null==e?void 0:e()}A([sA()],wt.prototype,"configArea",void 0),customElements.define("sonos-card-editor",wt);const{GROUPING:Vt,GROUPS:Pt,MEDIA_BROWSER:St,PLAYER:Ht,VOLUMES:Ot}=_A;class Mt extends AA{constructor(){super(...arguments),this.showSectionListener=A=>{const t=A.detail;(!this.config.sections||this.config.sections.indexOf(t)>-1)&&(this.section=t)},this.callMediaStartedListener=A=>{this.showLoader||this.config.sections&&A.detail.section!==this.section||(this.cancelLoader=!1,setTimeout((()=>{this.cancelLoader||(this.showLoader=!0,this.loaderTimestamp=Date.now())}),300))},this.callMediaDoneListener=()=>{this.cancelLoader=!0;const A=Date.now()-this.loaderTimestamp;this.showLoader&&(A<1e3?setTimeout((()=>this.showLoader=!1),1e3-A):this.showLoader=!1)},this.entityIdListener=A=>{const t=A.detail.entityId;t!==this.entityId&&(this.entityId=t,this.requestUpdate())}}render(){this.createStore();let A=LA(this.config.heightPercentage);const t=this.config.sections,e=!t||t.length>1,i=e?A-5:A,s=this.config.title;return A=s?A+2:A,k`
      <ha-card style="${this.haCardStyle(A)}">
        <div class="loader" ?hidden="${!this.showLoader}">
          <ha-circular-progress active="" progress="0"></ha-circular-progress>
        </div>
        ${s?k`<div class="title">${s}</div>`:k``}
        <div class="content" style="${this.contentStyle(i)}">
          ${qA(this.section,[[Ht,()=>k` <sonos-player .store=${this.store}></sonos-player>`],[Pt,()=>k` <sonos-groups .store=${this.store}></sonos-groups>`],[Vt,()=>k`<sonos-grouping .store=${this.store}></sonos-grouping>`],[St,()=>k` <sonos-media-browser .store=${this.store}></sonos-media-browser>`],[Ot,()=>k` <sonos-volumes .store=${this.store}></sonos-volumes>`]])}
        </div>
        ${Lt(e,(()=>k`<sonos-footer style=${this.footerStyle()} .config="${this.config}" .section="${this.section}">
            </sonos-footer>`))}
      </ha-card>
    `}createStore(){this.entityId?this.store=new $A(this.hass,this.config,this.entityId):(this.store=new $A(this.hass,this.config),this.entityId=this.store.entityId)}getCardSize(){return 3}static getConfigElement(){return document.createElement("sonos-card-editor")}connectedCallback(){super.connectedCallback(),window.addEventListener(lA,this.showSectionListener),window.addEventListener(cA,this.callMediaStartedListener),window.addEventListener(dA,this.callMediaDoneListener),function(A){window.addEventListener(rA,A);const t=new CustomEvent(aA,{bubbles:!0,composed:!0});window.dispatchEvent(t)}(this.entityIdListener)}disconnectedCallback(){var A;window.removeEventListener(lA,this.showSectionListener),window.removeEventListener(cA,this.callMediaStartedListener),window.removeEventListener(dA,this.callMediaDoneListener),A=this.entityIdListener,window.removeEventListener(rA,A),super.disconnectedCallback()}haCardStyle(A){const t=LA(this.config.widthPercentage);return jA({color:"var(--secondary-text-color)",height:`${A}rem`,minWidth:"20rem",maxWidth:`${t}rem`})}footerStyle(){return jA({height:"5rem",paddingBottom:"1rem"})}contentStyle(A){return jA({overflowY:"auto",height:`${A}rem`})}setConfig(A){const t=JSON.parse(JSON.stringify(A));for(const[A,e]of Object.entries(t))Array.isArray(e)&&0===e.length&&delete t[A];const e=t.sections;this.section=e?e.indexOf(Ht)>-1?Ht:e.indexOf(St)>-1?St:e.indexOf(Pt)>-1?Pt:e.indexOf(Vt)>-1?Vt:Ot:Ht,this.config=t}static get styles(){return n`
      .loader {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        --mdc-theme-primary: var(--accent-color);
      }
      .title {
        margin: 0.4rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--secondary-text-color);
      }
    `}}function zt(A,t,e){return k`
    <ha-control-button @click="${A}" style=${jA({width:"fit-content","--control-button-background-color":"var(--accent-color)","--control-button-icon-color":"var(--secondary-text-color)"})}>
      <ha-icon .icon=${t} style=${jA({padding:"1rem"})}></ha-icon>
      ${e?k`<span style=${jA({paddingRight:"1rem",fontWeight:"bold"})}>${e}</span>`:""}
    </ha-control-button>
  `}A([iA({attribute:!1})],Mt.prototype,"hass",void 0),A([iA()],Mt.prototype,"config",void 0),A([sA()],Mt.prototype,"section",void 0),A([sA()],Mt.prototype,"store",void 0),A([sA()],Mt.prototype,"showLoader",void 0),A([sA()],Mt.prototype,"loaderTimestamp",void 0),A([sA()],Mt.prototype,"cancelLoader",void 0),A([sA()],Mt.prototype,"entityId",void 0);class kt extends AA{render(){({config:this.config,hass:this.hass,groups:this.groups,entityId:this.entityId,mediaControlService:this.mediaControlService,mediaPlayers:this.mediaPlayers}=this.store);const A=this.mediaPlayers.filter((A=>A!==this.entityId&&this.groups[this.entityId].members[A])),t=this.mediaPlayers.filter((A=>A!==this.entityId&&!this.groups[this.entityId].members[A]));return k`
      <div class="buttons">
        ${Lt(t.length,(()=>zt((async()=>await this.mediaControlService.join(this.entityId,t)),"mdi:checkbox-multiple-marked-outline","")))}
        ${Lt(A.length,(()=>zt((async()=>await this.mediaControlService.unjoin(A)),"mdi:minus-box-multiple-outline","")))}
        ${Lt(this.config.predefinedGroups&&!0,(()=>this.renderPredefinedGroups()))}
      </div>
      <mwc-list multi class="list">
        ${this.mediaPlayers.map((A=>this.getGroupingItem(A))).map((A=>k`<mwc-list-item
              ?activated="${A.isSelected}"
              ?disabled="${A.isSelected&&!A.isGrouped}"
              @click="${async()=>await this.itemClickAction(A)}"
            >
              <ha-icon
                .icon="${A.isSelected?"mdi:checkbox-marked-outline":"mdi:checkbox-blank-outline"}"
              ></ha-icon>
              <span class="item">${A.name}</span>
            </mwc-list-item>`))}
      </mwc-list>
    `}getGroupingItem(A){const t=A===this.entityId,e=this.groups[this.entityId].members;return{isMain:t,isSelected:t||void 0!==e[A],isGrouped:Object.keys(e).length>0,name:vA(this.hass,this.config,A),entity:A}}async itemClickAction({isSelected:A,entity:t,isMain:e}){if(A){if(e){IA(Object.keys(this.groups[this.entityId].members)[0])}await this.mediaControlService.unjoin([t])}else await this.mediaControlService.join(this.entityId,[t])}renderPredefinedGroups(){var A;return null===(A=this.config.predefinedGroups)||void 0===A?void 0:A.filter((A=>A.entities.length>1)).map((A=>zt((async()=>await this.mediaControlService.createGroup(A.entities,this.groups)),"mdi:speaker-multiple",A.name)))}static get styles(){return[n`
        .buttons {
          margin: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .item {
          color: var(--secondary-text-color);
          font-weight: bold;
        }
      `,gA]}}A([iA()],kt.prototype,"store",void 0);class xt extends AA{constructor(){super(...arguments),this.selected=!1,this.dispatchEntityIdEvent=()=>{if(this.selected){IA(this.group.entity)}}}connectedCallback(){super.connectedCallback(),window.addEventListener(aA,this.dispatchEntityIdEvent)}disconnectedCallback(){window.removeEventListener(aA,this.dispatchEntityIdEvent),super.disconnectedCallback()}render(){({config:this.config,hass:this.hass}=this.store);const A=this.config.hideGroupCurrentTrack?"":fA(this.hass.states[this.group.entity]),t=yA(this.group,this.config);this.dispatchEntityIdEvent();const e=this.hass.states[this.group.entity].attributes.icon;return k`
      <mwc-list-item
        hasMeta
        ?selected="${this.selected}"
        ?activated="${this.selected}"
        @click="${()=>this.handleGroupClicked()}"
      >
        <div class="row">
          <ha-icon .icon=${e} ?hidden=${!e}></ha-icon>
          <div class="text">
            <span class="speakers">${t}</span>
            <span class="song-title">${A}</span>
          </div>
        </div>

        ${Lt(CA(this.group.state),(()=>k`
            <div class="bars" slot="meta">
              <div></div>
              <div></div>
              <div></div>
            </div>
          `))}
      </mwc-list-item>
    `}handleGroupClicked(){if(!this.selected){this.selected=!0;const A=window.location.href.replace(/#.*/g,"");window.location.replace(`${A}#${this.group.entity}`),this.dispatchEntityIdEvent(),mA(_A.PLAYER)}}static get styles(){return n`
      @keyframes sound {
        0% {
          opacity: 0.35;
          height: 0.15rem;
        }
        100% {
          opacity: 1;
          height: 1rem;
        }
      }

      mwc-list-item {
        height: fit-content;
        margin: 1rem;
        border-radius: 1rem;
        background: var(--secondary-background-color);
      }

      .row {
        display: flex;
        margin: 1rem 0;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .speakers {
        white-space: initial;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--secondary-text-color);
      }

      .song-title {
        font-size: 0.9rem;
        font-weight: bold;
      }

      ha-icon {
        --mdc-icon-size: 3rem;
        margin-right: 1rem;
      }

      .bars {
        width: 0.55rem;
        position: relative;
        margin-left: 1rem;
      }

      .bars > div {
        background: var(--secondary-text-color);
        bottom: 0.05rem;
        height: 0.15rem;
        position: absolute;
        width: 0.15rem;
        animation: sound 0ms -800ms linear infinite alternate;
        display: block;
      }

      .bars > div:first-child {
        left: 0.05rem;
        animation-duration: 474ms;
      }

      .bars > div:nth-child(2) {
        left: 0.25rem;
        animation-duration: 433ms;
      }

      .bars > div:last-child {
        left: 0.45rem;
        animation-duration: 407ms;
      }
    `}}A([iA()],xt.prototype,"store",void 0),A([iA()],xt.prototype,"selected",void 0),customElements.define("sonos-group",xt);class Nt extends AA{render(){return({config:this.config,hass:this.hass,groups:this.groups,entityId:this.entityId}=this.store),k`
      <mwc-list activatable class="list">
        ${Object.values(this.groups).map((A=>{const t=this.entityId===A.entity;return k` <sonos-group .store=${this.store} .group=${A} .selected="${t}"></sonos-group> `}))}
      </mwc-list>
    `}static get styles(){return gA}}A([iA()],Nt.prototype,"store",void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt=(A,t)=>{var e,i;const s=A._$AN;if(void 0===s)return!1;for(const A of s)null===(i=(e=A)._$AO)||void 0===i||i.call(e,t,!1),Xt(A,t);return!0},jt=A=>{let t,e;do{if(void 0===(t=A._$AM))break;e=t._$AN,e.delete(A),A=t}while(0===(null==e?void 0:e.size))},Ut=A=>{for(let t;t=A._$AM;A=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(A))break;e.add(A),Rt(t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(A){void 0!==this._$AN?(jt(this),this._$AM=A,Ut(this)):this._$AM=A}function Dt(A,t=!1,e=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(i))for(let A=e;A<i.length;A++)Xt(i[A],!1),jt(i[A]);else null!=i&&(Xt(i,!1),jt(i));else Xt(this,A)}const Rt=A=>{var t,e,i,s;A.type==xA&&(null!==(t=(i=A)._$AP)&&void 0!==t||(i._$AP=Dt),null!==(e=(s=A)._$AQ)&&void 0!==e||(s._$AQ=Wt))};class Tt extends XA{constructor(){super(...arguments),this._$AN=void 0}_$AT(A,t,e){super._$AT(A,t,e),Ut(this),this.isConnected=A._$AU}_$AO(A,t=!0){var e,i;A!==this.isConnected&&(this.isConnected=A,A?null===(e=this.reconnected)||void 0===e||e.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(Xt(this,A),jt(this))}setValue(A){if((A=>void 0===A.strings)(this._$Ct))this._$Ct._$AI(A,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=A,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zt{constructor(A){this.Y=A}disconnect(){this.Y=void 0}reconnect(A){this.Y=A}deref(){return this.Y}}class Gt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var A;null!==(A=this.Z)&&void 0!==A||(this.Z=new Promise((A=>this.q=A)))}resume(){var A;null===(A=this.q)||void 0===A||A.call(this),this.Z=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=A=>!(A=>null===A||"object"!=typeof A&&"function"!=typeof A)(A)&&"function"==typeof A.then;const Yt=NA(class extends Tt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new Zt(this),this._$CX=new Gt}render(...A){var t;return null!==(t=A.find((A=>!qt(A))))&&void 0!==t?t:x}update(A,t){const e=this._$Cyt;let i=e.length;this._$Cyt=t;const s=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let A=0;A<t.length&&!(A>this._$Cwt);A++){const n=t[A];if(!qt(n))return this._$Cwt=A,n;A<i&&n===e[A]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then((async A=>{for(;o.get();)await o.get();const t=s.deref();if(void 0!==t){const e=t._$Cyt.indexOf(n);e>-1&&e<t._$Cwt&&(t._$Cwt=e,t.setValue(A))}})))}return x}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Jt="data:image/png;base64,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";function Kt(A,t){const e=A.some((A=>A.thumbnail));return A.map((A=>{const i=function(A,t,e){var i,s;let o=A.thumbnail;return o?(null==o?void 0:o.match(/https:\/\/brands\.home-assistant\.io\/.+\/logo.png/))&&(o=null==o?void 0:o.replace("logo.png","icon.png")):(o=null===(i=t.customThumbnailIfMissing)||void 0===i?void 0:i[A.title],e&&!o&&(o=(null===(s=t.customThumbnailIfMissing)||void 0===s?void 0:s.default)||Jt)),o||""}(A,t,e);return Object.assign(Object.assign({},A),{thumbnail:i,showFolderIcon:A.can_expand&&!i})}))}function Ft(A,t){return k`
    <style>
      .button:nth-of-type(${t+1}) .thumbnail {
        background-image: url(${A});
      }
    </style>
  `}function $t(A,t=!0){return k`
    <div class="thumbnail" ?hidden="${!A.thumbnail}"></div>
    <ha-icon class="folder" .icon=${"mdi:folder-music"} ?hidden="${!A.showFolderIcon}"></ha-icon>
    <div class="title" ?hidden="${!t}">${A.title}</div>
  `}class _t extends AA{render(){return({config:this.config}=this.store),k`
      <mwc-list multi class="list">
        ${Kt(this.items,this.config).map(((A,t)=>k`
            ${Ft(A.thumbnail,t)}
            <mwc-list-item class="button" @click="${()=>bA(A)}">
              <div class="row">${$t(A)}</div>
            </mwc-list-item>
          `))}
      </mwc-list>
    `}static get styles(){return[n`
        .button {
          --icon-width: 35px;
          height: 40px;
        }

        .row {
          display: flex;
        }

        .thumbnail {
          width: var(--icon-width);
          height: var(--icon-width);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left;
        }

        .folder {
          width: var(--icon-width);
          --mdc-icon-size: 100%;
        }

        .title {
          font-size: 1.1rem;
          align-self: center;
          flex: 1;
        }
      `,uA,gA]}}A([iA()],_t.prototype,"store",void 0),A([iA()],_t.prototype,"items",void 0),customElements.define("sonos-media-browser-list",_t);class Ae extends AA{render(){return({config:this.config}=this.store),k`
      <style>
        :host {
          --items-per-row: ${this.config.mediaBrowserItemsPerRow};
        }
      </style>
      <div class="icons">
        ${Kt(this.items,this.config).map(((A,t)=>k`
              ${Ft(A.thumbnail,t)}
              <ha-control-button class="button" @click="${()=>bA(A)}">
                ${$t(A,!A.thumbnail||!!this.config.mediaBrowserShowTitleForThumbnailIcons)}
              </ha-control-button>
            `))}
      </div>
    `}static get styles(){return[n`
        .icons {
          display: flex;
          flex-wrap: wrap;
        }

        .button {
          --margin: 1%;
          --width: calc(100% / var(--items-per-row) - var(--margin) * 2);
          width: var(--width);
          height: var(--width);
          margin: var(--margin);
        }

        .thumbnail {
          width: 100%;
          padding-bottom: 100%;
          margin: 0 6%;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }

        .folder {
          margin: 5% 15% 25% 15%;
          --mdc-icon-size: 100%;
        }

        .title {
          font-size: 0.8rem;
          position: absolute;
          width: 100%;
          line-height: 160%;
          bottom: 0;
          background-color: #ffffffbb;
        }
      `,uA]}}A([iA()],Ae.prototype,"store",void 0),A([iA()],Ae.prototype,"items",void 0),customElements.define("sonos-media-browser-icons",Ae);class te extends AA{constructor(){super(...arguments),this.browseMedia=!0}render(){const A=this.browseMedia?"M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M12,14.5V5.5L18,10L12,14.5Z":this.mediaBrowserDir?"M13.5 21C9.36 21 6 17.64 6 13.5V11H2L8 4L14 11H10V13.5C10 15.43 11.57 17 13.5 17H21V21H13.5Z":OA;return k`
      <div class="play">
        ${this.browseCanPlay?UA("M8,5.14V19.14L19,12.14L8,5.14Z",(()=>window.dispatchEvent(new CustomEvent(BA))),{additionalStyle:{padding:"0.5rem"}}):""}
      </div>
      <div class="title">${this.title}</div>
      ${UA(A,(()=>window.dispatchEvent(new CustomEvent(EA))),{additionalStyle:{padding:"0.5rem",flex:"1",textAlign:"right"}})}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener(QA,(A=>{const t=A.detail;this.browseCanPlay=t.canPlay,this.browseMedia=!t.browse,this.mediaBrowserDir=t.currentDir,this.title=t.title}))}static get styles(){return n`
      :host {
        display: flex;
        justify-content: space-between;
      }
      .play {
        flex: 1;
      }
      .title {
        flex: 6;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}}A([iA()],te.prototype,"config",void 0),A([sA()],te.prototype,"browseCanPlay",void 0),A([sA()],te.prototype,"browseMedia",void 0),A([sA()],te.prototype,"mediaBrowserDir",void 0),A([sA()],te.prototype,"title",void 0),customElements.define("sonos-media-browser-header",te);const ee="custom-sonos-card_currentDir";class ie extends AA{constructor(){super(...arguments),this.parentDirs=[],this.playDirListener=async()=>{await this.playItem(this.currentDir)},this.browseClickedListener=async()=>{this.browseClicked()},this.onMediaItemSelected=A=>{const t=A.detail;t.can_expand?(this.currentDir&&this.parentDirs.push(this.currentDir),this.setCurrentDir(t)):t.can_play&&(this.playItem(t),setTimeout((()=>mA(_A.PLAYER)),1e3))}}connectedCallback(){super.connectedCallback(),window.addEventListener(BA,this.playDirListener),window.addEventListener(EA,this.browseClickedListener),window.addEventListener(hA,this.onMediaItemSelected)}disconnectedCallback(){window.removeEventListener(BA,this.playDirListener),window.removeEventListener(EA,this.browseClickedListener),window.removeEventListener(hA,this.onMediaItemSelected),super.disconnectedCallback()}render(){({config:this.config,hass:this.hass,mediaPlayers:this.mediaPlayers,mediaControlService:this.mediaControlService,mediaBrowseService:this.mediaBrowseService,entityId:this.entityId}=this.store);const A=localStorage.getItem(ee);if(A){const t=JSON.parse(A);t!==this.currentDir&&(this.currentDir=t,this.browse=!0,this.dispatchBrowseState())}return k`
      <sonos-media-browser-header .config=${this.config}></sonos-media-browser-header>
      ${""!==this.entityId&&Yt((this.browse?this.loadMediaDir(this.currentDir):this.getAllFavorites()).then((A=>this.config.mediaBrowserItemsPerRow>1?k`<sonos-media-browser-icons .items=${A} .store=${this.store}></sonos-media-browser-icons>`:k` <sonos-media-browser-list .items=${A} .store=${this.store}></sonos-media-browser-list>`)))}
    `}firstUpdated(){this.dispatchBrowseState()}dispatchBrowseState(){var A;const t=this.browse?this.currentDir?this.currentDir.title:"Media Browser":"All Favorites";window.dispatchEvent(new CustomEvent(QA,{detail:{canPlay:null===(A=this.currentDir)||void 0===A?void 0:A.can_play,browse:this.browse,currentDir:this.currentDir,title:t}}))}browseClicked(){this.parentDirs.length?this.setCurrentDir(this.parentDirs.pop()):this.currentDir?this.setCurrentDir(void 0):(this.browse=!this.browse,this.dispatchBrowseState())}setCurrentDir(A){this.currentDir=A,A?localStorage.setItem(ee,JSON.stringify(A)):localStorage.removeItem(ee),this.dispatchBrowseState()}async playItem(A){A.media_content_type||A.media_content_id?await this.mediaControlService.playMedia(this.entityId,A):await this.mediaControlService.setSource(this.entityId,A.title)}async getAllFavorites(){var A,t,e,i;let s=await this.mediaBrowseService.getAllFavorites(this.mediaPlayers,this.config.mediaBrowserTitlesToIgnore);return s=s.sort(((A,t)=>A.title.localeCompare(t.title,"en",{sensitivity:"base"}))),[...(null===(t=null===(A=this.config.customSources)||void 0===A?void 0:A[this.entityId])||void 0===t?void 0:t.map(ie.createSource))||[],...(null===(i=null===(e=this.config.customSources)||void 0===e?void 0:e.all)||void 0===i?void 0:i.map(ie.createSource))||[],...s]}static createSource(A){return Object.assign(Object.assign({},A),{can_play:!0})}async loadMediaDir(A){return await(A?this.mediaBrowseService.getDir(this.entityId,A,this.config.mediaBrowserTitlesToIgnore):this.mediaBrowseService.getRoot(this.entityId,this.config.mediaBrowserTitlesToIgnore))}}A([iA()],ie.prototype,"store",void 0),A([sA()],ie.prototype,"browse",void 0),A([sA()],ie.prototype,"currentDir",void 0);class se extends AA{constructor(){super(...arguments),this.showSwitches={}}render(){({config:this.config,hass:this.hass,mediaControlService:this.mediaControlService,entity:this.entity}=this.store);const A=pA(this.entity);return k`
      ${Lt(A.length>1,(()=>this.volumeWithName(this.entity.entity_id,this.config.labelForTheAllVolumesSlider?this.config.labelForTheAllVolumesSlider:"All",this.store.groups[this.entity.entity_id].members)))}
      ${A.map((A=>this.volumeWithName(A,vA(this.hass,this.config,A))))}
    `}volumeWithName(A,t,e){return k` <div class="row">
      <div class="volume-name">
        <div class="volume-name-text">${t}</div>
      </div>
      <div class="slider-row">
        ${this.config.showVolumeUpAndDownButtons?UA(MA,(async()=>await this.mediaControlService.volumeDown(A))):""}

        <sonos-volume .store=${this.store} .entityId=${A} .members=${e}></sonos-volume>
        ${this.config.showVolumeUpAndDownButtons?UA(zA,(async()=>await this.mediaControlService.volumeUp(A))):""}
        ${Lt(!e,(()=>UA(this.showSwitches[A]?"M22.12 21.46L2.4 1.73L1.12 3L4 5.87L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11C4.53 11.34 4.5 11.67 4.5 12S4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.38 18.72 15.83 18.45 16.26 18.14L20.85 22.73L22.12 21.46M12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 11.5 8.62 11.08 8.79 10.67L13.33 15.21C12.92 15.39 12.5 15.5 12 15.5M11.74 8.53L8.56 5.35C8.75 5.25 8.93 5.15 9.13 5.07L9.5 2.42C9.54 2.18 9.75 2 10 2H14C14.25 2 14.46 2.18 14.5 2.42L14.87 5.07C15.5 5.32 16.04 5.66 16.56 6.05L19.05 5.05C19.27 4.96 19.54 5.05 19.66 5.27L21.66 8.73C21.78 8.95 21.73 9.22 21.54 9.37L19.43 11C19.47 11.34 19.5 11.67 19.5 12S19.47 12.65 19.43 12.97L21.54 14.63C21.73 14.78 21.78 15.05 21.66 15.27L20.5 17.29L15.47 12.26C15.5 12.18 15.5 12.09 15.5 12C15.5 10.07 13.93 8.5 12 8.5C11.91 8.5 11.83 8.5 11.74 8.53Z":"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",(()=>{this.showSwitches[A]=!this.showSwitches[A],this.requestUpdate()}))))}
      </div>
      <div class="switches">
        ${Lt(!e&&this.showSwitches[A],(()=>Yt(this.getAdditionalSwitches(A))))}
      </div>
    </div>`}getAdditionalSwitches(A){const t=this.store.hassService;return t.getRelatedSwitchEntities(A).then((A=>A.map((A=>{const e="on"===this.hass.states[A].state?jA({color:"var(--accent-color)"}):"";return k`
          <ha-icon
            @click="${()=>t.toggle(A)}"
            style="${e}"
            .icon=${this.hass.states[A].attributes.icon||""}
          ></ha-icon>
        `}))))}static get styles(){return n`
      .row {
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        padding-right: 1rem;
      }

      .row:not(:first-child) {
        border-top: solid var(--secondary-background-color);
      }

      .switches {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .volume-name {
        flex: 1;
        overflow: hidden;
        flex-direction: column;
        text-align: center;
      }

      .volume-name-text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.1rem;
        font-weight: bold;
      }

      .slider-row {
        display: flex;
      }

      sonos-volume {
        flex: 4;
      }
    `}}A([iA()],se.prototype,"store",void 0),A([sA()],se.prototype,"showSwitches",void 0),customElements.define("sonos-volumes",se);const oe=A=>"Sonos"+(A?` (${A})`:""),ne=A=>"Media player for your Sonos speakers"+(A?` (${A})`:"");window.customCards.push({type:"sonos-card",name:oe(),description:ne(),preview:!0},{type:"sonos-grouping",name:oe("Grouping section"),description:ne("Grouping section"),preview:!0},{type:"sonos-groups",name:oe("Groups section"),description:ne("Groups section"),preview:!0},{type:"sonos-media-browser",name:oe("Media Browser section"),description:ne("Media Browser section"),preview:!0},{type:"sonos-player",name:oe("Player section"),description:"Media player for your Sonos speakers (Player section)",preview:!0}),customElements.define("sonos-card",Mt),customElements.define("sonos-grouping",kt),customElements.define("sonos-groups",Nt),customElements.define("sonos-media-browser",ie),customElements.define("sonos-player",GA);
