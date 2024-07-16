/*! For license information please see 1552.DIeDK23Mr5U.js.LICENSE.txt */
"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[1552],{53449:function(e,i,t){t.d(i,{Y:function(){return f}});var r,a,o=t(36683),n=t(89231),c=t(29864),l=t(83647),s=t(76513),d=t(196),p=t(66123),h=t(6238),v=(t(69466),t(4187),t(75658),t(68113),t(66274),t(85038),t(85767),t(8600),t(5546)),u=t(52162),y=function(e){function i(){var e;return(0,n.A)(this,i),(e=(0,c.A)(this,i)).internals=e.attachInternals(),v.S$||(e.addEventListener("focusin",e.updateTabIndices.bind(e)),e.addEventListener("update-focus",e.updateTabIndices.bind(e)),e.addEventListener("keydown",e.handleKeyDown.bind(e)),e.internals.role="toolbar"),e}return(0,l.A)(i,e),(0,o.A)(i,[{key:"chips",get:function(){return this.childElements.filter((function(e){return e instanceof u.v}))}},{key:"render",value:function(){return(0,v.qy)(r||(r=(0,h.A)(['<slot @slotchange="','"></slot>'])),this.updateTabIndices)}},{key:"handleKeyDown",value:function(e){var i="ArrowLeft"===e.key,t="ArrowRight"===e.key,r="Home"===e.key,a="End"===e.key;if(i||t||r||a){var o=this.chips;if(!(o.length<2)){if(e.preventDefault(),r||a)return o[r?0:o.length-1].focus({trailing:a}),void this.updateTabIndices();var n="rtl"===getComputedStyle(this).direction?i:t,c=o.find((function(e){return e.matches(":focus-within")}));if(!c)return(n?o[0]:o[o.length-1]).focus({trailing:!n}),void this.updateTabIndices();for(var l=o.indexOf(c),s=n?l+1:l-1;s!==l;){s>=o.length?s=0:s<0&&(s=o.length-1);var d=o[s];if(!d.disabled||d.alwaysFocusable){d.focus({trailing:!n}),this.updateTabIndices();break}n?s++:s--}}}}},{key:"updateTabIndices",value:function(){var e,i,t=this.chips,r=(0,p.A)(t);try{for(r.s();!(i=r.n()).done;){var a=i.value,o=a.alwaysFocusable||!a.disabled;a.matches(":focus-within")&&o?e=a:(o&&!e&&(e=a),a.tabIndex=-1)}}catch(n){r.e(n)}finally{r.f()}e&&(e.tabIndex=0)}}])}(v.WF);(0,s.__decorate)([(0,d.KN)()],y.prototype,"childElements",void 0);var m=(0,v.AH)(a||(a=(0,h.A)([":host{display:flex;flex-wrap:wrap;gap:8px}"]))),f=function(e){function i(){return(0,n.A)(this,i),(0,c.A)(this,i,arguments)}return(0,l.A)(i,e),(0,o.A)(i)}(y);f.styles=[m],f=(0,s.__decorate)([(0,d.EM)("md-chip-set")],f)},39050:function(e,i,t){t.d(i,{U:function(){return k}});var r,a,o,n,c=t(36683),l=t(89231),s=t(29864),d=t(83647),p=t(76513),h=t(196),v=t(6238),u=t(76504),y=t(80792),m=(t(43859),t(5546)),f=t(96865),g=t(30207),b=function(e){function i(){var e;return(0,l.A)(this,i),(e=(0,s.A)(this,i,arguments)).avatar=!1,e.href="",e.target="",e.removeOnly=!1,e.selected=!1,e}return(0,d.A)(i,e),(0,c.A)(i,[{key:"primaryId",get:function(){return this.href?"link":this.removeOnly?"":"button"}},{key:"rippleDisabled",get:function(){return!this.href&&this.disabled}},{key:"primaryAction",get:function(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}},{key:"getContainerClasses",value:function(){return Object.assign(Object.assign({},(0,u.A)((0,y.A)(i.prototype),"getContainerClasses",this).call(this)),{},{avatar:this.avatar,disabled:!this.href&&this.disabled,link:!!this.href,selected:this.selected,"has-trailing":!0})}},{key:"renderPrimaryAction",value:function(e){var i=this.ariaLabel;return this.href?(0,m.qy)(r||(r=(0,v.A)([' <a class="primary action" id="link" aria-label="','" href="','" target="','">',"</a> "])),i||m.s6,this.href,this.target||m.s6,e):this.removeOnly?(0,m.qy)(a||(a=(0,v.A)([' <span class="primary action" aria-label="','"> '," </span> "])),i||m.s6,e):(0,m.qy)(o||(o=(0,v.A)([' <button class="primary action" id="button" aria-label="','" ?disabled="','" type="button">',"</button> "])),i||m.s6,this.disabled&&!this.alwaysFocusable,e)}},{key:"renderTrailingAction",value:function(e){return(0,g.h)({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&this.disabled,tabbable:this.removeOnly})}}])}(f.M);(0,p.__decorate)([(0,h.MZ)({type:Boolean})],b.prototype,"avatar",void 0),(0,p.__decorate)([(0,h.MZ)()],b.prototype,"href",void 0),(0,p.__decorate)([(0,h.MZ)()],b.prototype,"target",void 0),(0,p.__decorate)([(0,h.MZ)({type:Boolean,attribute:"remove-only"})],b.prototype,"removeOnly",void 0),(0,p.__decorate)([(0,h.MZ)({type:Boolean,reflect:!0})],b.prototype,"selected",void 0),(0,p.__decorate)([(0,h.P)(".trailing.action")],b.prototype,"trailingAction",void 0);var _=(0,m.AH)(n||(n=(0,v.A)([":host{--_container-height:var(--md-input-chip-container-height, 32px);--_disabled-label-text-color:var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color:var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity:var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font:var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height:var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size:var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight:var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color:var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color:var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color:var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color:var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity:var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color:var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width:var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color:var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color:var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity:var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color:var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color:var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color:var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color:var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color:var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity:var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color:var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color:var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color:var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity:var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape:var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size:var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity:var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color:var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity:var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size:var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color:var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color:var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color:var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color:var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color:var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color:var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color:var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color:var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color:var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity:var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color:var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color:var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color:var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color:var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color:var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color:var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color:var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color:var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start:var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end:var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end:var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start:var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space:var(--md-input-chip-leading-space, 16px);--_trailing-space:var(--md-input-chip-trailing-space, 16px);--_icon-label-space:var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space:var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space:var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start:var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end:var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end:var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start:var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors:active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}"]))),A=t(22159),x=t(25348),w=t(80299),k=function(e){function i(){return(0,l.A)(this,i),(0,s.A)(this,i,arguments)}return(0,d.A)(i,e),(0,c.A)(i)}(b);k.styles=[x.R,w.R,A.R,_],k=(0,p.__decorate)([(0,h.EM)("md-input-chip")],k)},96865:function(e,i,t){t.d(i,{M:function(){return u}});var r,a=t(6238),o=t(89231),n=t(36683),c=t(29864),l=t(76504),s=t(80792),d=t(83647),p=t(5546),h=t(52162),v="aria-label-remove",u=function(e){function i(){var e;return(0,o.A)(this,i),(e=(0,c.A)(this,i)).handleTrailingActionFocus=e.handleTrailingActionFocus.bind(e),p.S$||e.addEventListener("keydown",e.handleKeyDown.bind(e)),e}return(0,d.A)(i,e),(0,n.A)(i,[{key:"ariaLabelRemove",get:function(){if(this.hasAttribute(v))return this.getAttribute(v);var e=this.ariaLabel;return"Remove ".concat(e||this.label)},set:function(e){e!==this.ariaLabelRemove&&(null===e?this.removeAttribute(v):this.setAttribute(v,e),this.requestUpdate())}},{key:"focus",value:function(e){(this.alwaysFocusable||!this.disabled)&&null!=e&&e.trailing&&this.trailingAction?this.trailingAction.focus(e):(0,l.A)((0,s.A)(i.prototype),"focus",this).call(this,e)}},{key:"renderContainerContent",value:function(){return(0,p.qy)(r||(r=(0,a.A)([" "," "," "])),(0,l.A)((0,s.A)(i.prototype),"renderContainerContent",this).call(this),this.renderTrailingAction(this.handleTrailingActionFocus))}},{key:"handleKeyDown",value:function(e){var i,t,r="ArrowLeft"===e.key,a="ArrowRight"===e.key;if((r||a)&&this.primaryAction&&this.trailingAction){var o="rtl"===getComputedStyle(this).direction?r:a,n=null===(i=this.primaryAction)||void 0===i?void 0:i.matches(":focus-within"),c=null===(t=this.trailingAction)||void 0===t?void 0:t.matches(":focus-within");if(!(o&&c||!o&&n))e.preventDefault(),e.stopPropagation(),(o?this.trailingAction:this.primaryAction).focus()}}},{key:"handleTrailingActionFocus",value:function(){var e=this.primaryAction,i=this.trailingAction;e&&i&&(e.tabIndex=-1,i.addEventListener("focusout",(function(){e.tabIndex=0}),{once:!0}))}}])}(h.v)},22159:function(e,i,t){t.d(i,{R:function(){return o}});var r,a=t(6238),o=(0,t(5546).AH)(r||(r=(0,a.A)([".selected{--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors:active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}"])))},80299:function(e,i,t){t.d(i,{R:function(){return o}});var r,a=t(6238),o=(0,t(5546).AH)(r||(r=(0,a.A)([".trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors:active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}"])))},30207:function(e,i,t){t.d(i,{h:function(){return n}});var r,a=t(6238),o=(t(74431),t(87515),t(5546));function n(e){var i=e.ariaLabel,t=e.disabled,n=e.focusListener,l=e.tabbable,s=void 0!==l&&l;return(0,o.qy)(r||(r=(0,a.A)([' <button class="trailing action" aria-label="','" tabindex="','" @click="','" @focus="','"> <md-focus-ring part="trailing-focus-ring"></md-focus-ring> <md-ripple ?disabled="','"></md-ripple> <span class="trailing icon" aria-hidden="true"> <slot name="remove-trailing-icon"> <svg viewBox="0 96 960 960"> <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/> </svg> </slot> </span> <span class="touch"></span> </button> '])),i,s?o.s6:-1,c,n,t)}function c(e){this.disabled||(e.stopPropagation(),!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove())}},29083:function(e,i,t){t.d(i,{u:function(){return u}});var r=t(22481),a=t(66123),o=t(89231),n=t(36683),c=t(69427),l=t(29864),s=t(83647),d=(t(27934),t(21950),t(63243),t(68113),t(56262),t(8339),t(75393)),p=t(41611),h=t(70283),v=function(e,i,t){for(var r=new Map,a=i;a<=t;a++)r.set(e[a],a);return r},u=(0,p.u$)(function(e){function i(e){var t;if((0,o.A)(this,i),t=(0,l.A)(this,i,[e]),e.type!==p.OA.CHILD)throw Error("repeat() can only be used in text expressions");return(0,c.A)(t)}return(0,s.A)(i,e),(0,n.A)(i,[{key:"ct",value:function(e,i,t){var r;void 0===t?t=i:void 0!==i&&(r=i);var o,n=[],c=[],l=0,s=(0,a.A)(e);try{for(s.s();!(o=s.n()).done;){var d=o.value;n[l]=r?r(d,l):l,c[l]=t(d,l),l++}}catch(p){s.e(p)}finally{s.f()}return{values:c,keys:n}}},{key:"render",value:function(e,i,t){return this.ct(e,i,t).values}},{key:"update",value:function(e,i){var t,a=(0,r.A)(i,3),o=a[0],n=a[1],c=a[2],l=(0,h.cN)(e),s=this.ct(o,n,c),p=s.values,u=s.keys;if(!Array.isArray(l))return this.ut=u,p;for(var y,m,f=null!==(t=this.ut)&&void 0!==t?t:this.ut=[],g=[],b=0,_=l.length-1,A=0,x=p.length-1;b<=_&&A<=x;)if(null===l[b])b++;else if(null===l[_])_--;else if(f[b]===u[A])g[A]=(0,h.lx)(l[b],p[A]),b++,A++;else if(f[_]===u[x])g[x]=(0,h.lx)(l[_],p[x]),_--,x--;else if(f[b]===u[x])g[x]=(0,h.lx)(l[b],p[x]),(0,h.Dx)(e,g[x+1],l[b]),b++,x--;else if(f[_]===u[A])g[A]=(0,h.lx)(l[_],p[A]),(0,h.Dx)(e,l[b],l[_]),_--,A++;else if(void 0===y&&(y=v(u,A,x),m=v(f,b,_)),y.has(f[b]))if(y.has(f[_])){var w=m.get(u[A]),k=void 0!==w?l[w]:null;if(null===k){var L=(0,h.Dx)(e,l[b]);(0,h.lx)(L,p[A]),g[A]=L}else g[A]=(0,h.lx)(k,p[A]),(0,h.Dx)(e,l[b],k),l[w]=null;A++}else(0,h.KO)(l[_]),_--;else(0,h.KO)(l[b]),b++;for(;A<=x;){var T=(0,h.Dx)(e,g[x+1]);(0,h.lx)(T,p[A]),g[A++]=T}for(;b<=_;){var C=l[b++];null!==C&&(0,h.KO)(C)}return this.ut=u,(0,h.mY)(e,g),d.c0}}])}(p.WL))}}]);
//# sourceMappingURL=1552.DIeDK23Mr5U.js.map