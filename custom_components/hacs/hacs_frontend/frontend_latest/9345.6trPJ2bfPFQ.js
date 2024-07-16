export const id=9345;export const ids=[9345];export const modules={39345:(e,i,t)=>{t.r(i),t.d(i,{HaFormString:()=>r});var d=t(62659),n=(t(86176),t(98809),t(53501),t(21950),t(8339),t(5546)),a=t(196),l=t(33167);t(96396),t(59373);const o=["password","secret","token"];let r=(0,d.A)([(0,a.EM)("ha-form-string")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"localizeBaseKey",value:()=>"ui.components.selectors.text"},{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"data",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.wk)()],key:"unmaskedPassword",value:()=>!1},{kind:"field",decorators:[(0,a.P)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e,i;return n.qy` <ha-textfield .type="${this.isPassword?this.unmaskedPassword?"text":"password":this.stringType}" .label="${this.label}" .value="${this.data||""}" .helper="${this.helper}" helperPersistent .disabled="${this.disabled}" .required="${this.schema.required}" .autoValidate="${this.schema.required}" .name="${this.schema.name}" .autocomplete="${this.schema.autocomplete}" .suffix="${this.isPassword?n.qy`<div style="width:24px"></div>`:null===(e=this.schema.description)||void 0===e?void 0:e.suffix}" .validationMessage="${this.schema.required?null===(i=this.localize)||void 0===i?void 0:i.call(this,"ui.common.error_required"):void 0}" @input="${this._valueChanged}" @change="${this._valueChanged}"></ha-textfield> ${this.renderIcon()} `}},{kind:"method",key:"renderIcon",value:function(){var e;return this.isPassword?n.qy` <ha-icon-button toggles .label="${null===(e=this.localize)||void 0===e?void 0:e.call(this,`${this.localizeBaseKey}.${this.unmaskedPassword?"hide_password":"show_password"}`)}" @click="${this.toggleUnmaskedPassword}" .path="${this.unmaskedPassword?"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z":"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}"></ha-icon-button> `:n.s6}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"toggleUnmaskedPassword",value:function(){this.unmaskedPassword=!this.unmaskedPassword}},{kind:"method",key:"_valueChanged",value:function(e){let i=e.target.value;this.data!==i&&(""!==i||this.schema.required||(i=void 0),(0,l.r)(this,"value-changed",{value:i}))}},{kind:"get",key:"stringType",value:function(){if(this.schema.format){if(["email","url"].includes(this.schema.format))return this.schema.format;if("fqdnurl"===this.schema.format)return"url"}return"text"}},{kind:"get",key:"isPassword",value:function(){return o.some((e=>this.schema.name.includes(e)))}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`:host{display:block;position:relative}:host([own-margin]){margin-bottom:5px}ha-textfield{display:block}ha-icon-button{position:absolute;top:8px;right:8px;inset-inline-start:initial;inset-inline-end:8px;--mdc-icon-button-size:40px;--mdc-icon-size:20px;color:var(--secondary-text-color);direction:var(--direction)}`}}]}}),n.WF)},59373:(e,i,t)=>{var d=t(62659),n=t(76504),a=t(80792),l=(t(21950),t(8339),t(94400)),o=t(65050),r=t(5546),s=t(196),c=t(46531);(0,d.A)([(0,s.EM)("ha-textfield")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"iconTrailing",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,s.P)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,n.A)((0,a.A)(t.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,i=!1){const t=i?"trailing":"leading";return r.qy` <span class="mdc-text-field__icon mdc-text-field__icon--${t}" tabindex="${i?1:-1}"> <slot name="${t}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[o.R,r.AH`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}`,"rtl"===c.G.document.dir?r.AH`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`:r.AH``]}]}}),l.J)}};
//# sourceMappingURL=9345.6trPJ2bfPFQ.js.map