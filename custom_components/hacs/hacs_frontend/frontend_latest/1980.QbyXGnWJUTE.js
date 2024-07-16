export const id=1980;export const ids=[1980];export const modules={77222:(e,i,t)=>{function a(e){const i=e.language||"en";return e.translationMetadata.translations[i]&&e.translationMetadata.translations[i].isRTL||!1}function n(e){return s(a(e))}function s(e){return e?"rtl":"ltr"}t.d(i,{Vc:()=>n,qC:()=>a})},66494:(e,i,t)=>{var a=t(62659),n=(t(21950),t(8339),t(58068)),s=t(5546),o=t(196),l=t(75538);(0,a.A)([(0,o.EM)("ha-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[l.R,s.AH`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),n.$)},38333:(e,i,t)=>{var a=t(62659),n=t(76504),s=t(80792),o=(t(21950),t(55888),t(8339),t(5546)),l=t(87565),r=t(56220),d=t(45592),c=t(196),h=t(33167);(0,a.A)([(0,c.EM)("ha-check-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"onChange",value:async function(e){(0,n.A)((0,s.A)(t.prototype),"onChange",this).call(this,e),(0,h.r)(this,e.type)}},{kind:"field",static:!0,key:"styles",value:()=>[d.R,r.R,o.AH`:host{--mdc-theme-secondary:var(--primary-color)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,16px);margin-inline-start:0px;direction:var(--direction)}.mdc-deprecated-list-item__meta{flex-shrink:0;direction:var(--direction);margin-inline-start:auto;margin-inline-end:0}.mdc-deprecated-list-item__graphic{margin-top:var(--check-list-item-graphic-margin-top)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-inline-start:0;margin-inline-end:var(--mdc-list-item-graphic-margin,32px)}`]}]}}),l.h)},7233:(e,i,t)=>{var a=t(62659),n=(t(21950),t(8339),t(5546)),s=t(196);t(29222);(0,a.A)([(0,s.EM)("ha-tip")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"render",value:function(){return this.hass?n.qy` <ha-svg-icon .path="${"M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"}"></ha-svg-icon> <span class="prefix">${this.hass.localize("ui.panel.config.tips.tip")}</span> <span class="text"><slot></slot></span> `:n.s6}},{kind:"field",static:!0,key:"styles",value:()=>n.AH`:host{display:block;text-align:center}.text{direction:var(--direction);margin-left:2px;margin-inline-start:2px;margin-inline-end:initial;color:var(--secondary-text-color)}.prefix{font-weight:500}`}]}}),n.WF)},1980:(e,i,t)=>{t.a(e,(async(e,a)=>{try{t.r(i);var n=t(62659),s=(t(21950),t(71936),t(55888),t(66274),t(85038),t(84531),t(15445),t(24483),t(13478),t(46355),t(14612),t(53691),t(48455),t(8339),t(99791)),o=(t(29805),t(23981),t(5546)),l=t(196),r=t(29083),d=t(33167),c=t(77222),h=t(93728),m=t(92462),u=t(31447),p=t(43799),g=(t(66494),t(38333),t(73279),t(88762),t(32714),t(29222),t(7233),t(64794)),_=(t(74992),t(32872)),v=e([g]);g=(v.then?(await v)():v)[0];const f="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",y="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";(0,n.A)([(0,l.EM)("dialog-media-manage")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_currentItem",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_uploading",value:()=>!1},{kind:"field",decorators:[(0,l.wk)()],key:"_deleting",value:()=>!1},{kind:"field",decorators:[(0,l.wk)()],key:"_selected",value:()=>new Set},{kind:"field",key:"_filesChanged",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._refreshMedia()}},{kind:"method",key:"closeDialog",value:function(){this._filesChanged&&this._params.onClose&&this._params.onClose(),this._params=void 0,this._currentItem=void 0,this._uploading=!1,this._deleting=!1,this._filesChanged=!1,(0,d.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,i;if(!this._params)return o.s6;const t=(null===(e=this._currentItem)||void 0===e||null===(e=e.children)||void 0===e?void 0:e.filter((e=>!e.can_expand)))||[];let a=0;return o.qy` <ha-dialog open scrimClickAction escapeKeyAction hideActions flexContent .heading="${this._params.currentItem.title}" @closed="${this.closeDialog}"> <ha-dialog-header slot="heading"> ${0===this._selected.size?o.qy` <span slot="title"> ${this.hass.localize("ui.components.media-browser.file_management.title")} </span> <ha-media-upload-button .disabled="${this._deleting}" .hass="${this.hass}" .currentItem="${this._params.currentItem}" @uploading="${this._startUploading}" @media-refresh="${this._doneUploading}" slot="actionItems"></ha-media-upload-button> ${this._uploading?"":o.qy` <ha-icon-button .label="${this.hass.localize("ui.dialogs.generic.close")}" .path="${f}" dialogAction="close" slot="navigationIcon" dir="${(0,c.Vc)(this.hass)}"></ha-icon-button> `} `:o.qy` <ha-button class="danger" slot="title" .disabled="${this._deleting}" .label="${this.hass.localize("ui.components.media-browser.file_management."+(this._deleting?"deleting":"delete"),{count:this._selected.size})}" @click="${this._handleDelete}"> <ha-svg-icon .path="${y}" slot="icon"></ha-svg-icon> </ha-button> ${this._deleting?"":o.qy` <ha-button slot="actionItems" .label="${"Deselect all"}" @click="${this._handleDeselectAll}"> <ha-svg-icon .path="${f}" slot="icon"></ha-svg-icon> </ha-button> `} `} </ha-dialog-header> ${this._currentItem?t.length?o.qy` <mwc-list multi @selected="${this._handleSelected}"> ${(0,r.u)(t,(e=>e.media_content_id),(e=>{const i=o.qy` <ha-svg-icon slot="graphic" .path="${h.EC["directory"===e.media_class&&e.children_media_class||e.media_class].icon}"></ha-svg-icon> `;return o.qy` <ha-check-list-item ${(0,s.i0)({id:e.media_content_id,skipInitial:!0})} graphic="icon" .disabled="${this._uploading||this._deleting}" .selected="${this._selected.has(a++)}" .item="${e}"> ${i} ${e.title} </ha-check-list-item> `}))} </mwc-list> `:o.qy`<div class="no-items"> <p> ${this.hass.localize("ui.components.media-browser.file_management.no_items")} </p> ${null!==(i=this._currentItem)&&void 0!==i&&null!==(i=i.children)&&void 0!==i&&i.length?o.qy`<span class="folders">${this.hass.localize("ui.components.media-browser.file_management.folders_not_supported")}</span>`:""} </div>`:o.qy` <div class="refresh"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `} ${(0,_.x)(this.hass,"hassio")?o.qy`<ha-tip .hass="${this.hass}"> ${this.hass.localize("ui.components.media-browser.file_management.tip_media_storage",{storage:o.qy`<a href="/config/storage" @click="${this.closeDialog}"> ${this.hass.localize("ui.components.media-browser.file_management.tip_storage_panel").toLowerCase()} </a>`})} </ha-tip>`:o.s6} </ha-dialog> `}},{kind:"method",key:"_handleSelected",value:function(e){this._selected=e.detail.index}},{kind:"method",key:"_startUploading",value:function(){this._uploading=!0,this._filesChanged=!0}},{kind:"method",key:"_doneUploading",value:function(){this._uploading=!1,this._refreshMedia()}},{kind:"method",key:"_handleDeselectAll",value:function(){this._selected.size&&(this._selected=new Set)}},{kind:"method",key:"_handleDelete",value:async function(){if(!await(0,u.dk)(this,{text:this.hass.localize("ui.components.media-browser.file_management.confirm_delete",{count:this._selected.size}),warning:!0}))return;this._filesChanged=!0,this._deleting=!0;const e=[];let i=0;this._currentItem.children.forEach((t=>{t.can_expand||this._selected.has(i++)&&e.push(t)}));try{await Promise.all(e.map((async e=>{await(0,m.WI)(this.hass,e.media_content_id),this._currentItem={...this._currentItem,children:this._currentItem.children.filter((i=>i!==e))}})))}finally{this._deleting=!1,this._selected=new Set}}},{kind:"method",key:"_refreshMedia",value:async function(){this._selected=new Set,this._currentItem=void 0,this._currentItem=await(0,m.Fn)(this.hass,this._params.currentItem.media_content_id)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.nA,o.AH`ha-dialog{--dialog-z-index:9;--dialog-content-padding:0}@media (min-width:800px){ha-dialog{--mdc-dialog-max-width:800px;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-max-height:calc(100vh - 72px)}}ha-dialog-header ha-button,ha-dialog-header ha-media-upload-button{--mdc-theme-primary:var(--primary-text-color);margin:6px;display:block}.danger{--mdc-theme-primary:var(--error-color)}ha-svg-icon[slot=icon]{vertical-align:middle}ha-tip{margin:16px}ha-svg-icon[slot=icon]{margin-inline-start:0px!important;margin-inline-end:8px!important;direction:var(--direction)}.refresh{display:flex;height:200px;justify-content:center;align-items:center}.no-items{text-align:center;padding:16px}.folders{color:var(--secondary-text-color);font-style:italic}`]}}]}}),o.WF);a()}catch(e){a(e)}}))},74992:(e,i,t)=>{var a=t(62659),n=(t(21950),t(55888),t(8339),t(58068),t(5546)),s=t(196),o=t(33167),l=t(92462),r=t(31447);t(73279),t(29222);(0,a.A)([(0,s.EM)("ha-media-upload-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"currentItem",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_uploading",value:()=>0},{kind:"method",key:"render",value:function(){return this.currentItem&&(0,l.Jz)(this.currentItem.media_content_id||"")?n.qy` <mwc-button .label="${this._uploading>0?this.hass.localize("ui.components.media-browser.file_management.uploading",{count:this._uploading}):this.hass.localize("ui.components.media-browser.file_management.add_media")}" .disabled="${this._uploading>0}" @click="${this._startUpload}"> ${this._uploading>0?n.qy` <ha-circular-progress size="small" indeterminate area-label="Uploading" slot="icon"></ha-circular-progress> `:n.qy` <ha-svg-icon .path="${"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}" slot="icon"></ha-svg-icon> `} </mwc-button> `:n.s6}},{kind:"method",key:"_startUpload",value:async function(){if(this._uploading>0)return;const e=document.createElement("input");e.type="file",e.accept="audio/*,video/*,image/*",e.multiple=!0,e.addEventListener("change",(async()=>{(0,o.r)(this,"uploading");const i=e.files;document.body.removeChild(e);const t=this.currentItem.media_content_id;for(let e=0;e<i.length;e++){this._uploading=i.length-e;try{await(0,l.VA)(this.hass,t,i[e])}catch(e){(0,r.K$)(this,{text:this.hass.localize("ui.components.media-browser.file_management.upload_failed",{reason:e.message||e})});break}}this._uploading=0,(0,o.r)(this,"media-refresh")}),{once:!0}),e.style.display="none",document.body.append(e),e.click()}},{kind:"field",static:!0,key:"styles",value:()=>n.AH`mwc-button{--mdc-button-disabled-ink-color:--mdc-theme-primary}ha-circular-progress[slot=icon],ha-svg-icon[slot=icon]{vertical-align:middle}ha-svg-icon[slot=icon]{margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction)}`}]}}),n.WF)}};
//# sourceMappingURL=1980.QbyXGnWJUTE.js.map