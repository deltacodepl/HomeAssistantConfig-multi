export const id=7442;export const ids=[7442];export const modules={44387:(e,t,i)=>{i.d(t,{K:()=>s});const s=(e,t,i,s,r)=>e.connection.subscribeMessage(r,{type:"threshold/start_preview",flow_id:t,flow_type:i,user_input:s})},87442:(e,t,i)=>{i.a(e,(async(e,s)=>{try{i.r(t);var r=i(62659),o=i(76504),d=i(80792),n=(i(21950),i(55888),i(8339),i(5546)),a=i(196),u=i(44387),l=i(98498),h=i(11355),v=i(33167),c=e([l]);l=(c.then?(await c)():c)[0];(0,r.A)([(0,a.EM)("flow-preview-threshold")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"flowType",value:void 0},{kind:"field",key:"handler",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"stepId",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"flowId",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"stepData",value:void 0},{kind:"field",decorators:[(0,a.wk)()],key:"_preview",value:void 0},{kind:"field",decorators:[(0,a.wk)()],key:"_error",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.A)((0,d.A)(i.prototype),"disconnectedCallback",this).call(this),this._unsub&&(this._unsub.then((e=>e())),this._unsub=void 0)}},{kind:"method",key:"willUpdate",value:function(e){e.has("stepData")&&this._debouncedSubscribePreview()}},{kind:"method",key:"render",value:function(){return this._error?n.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:n.qy`<entity-preview-row .hass="${this.hass}" .stateObj="${this._preview}"></entity-preview-row>`}},{kind:"field",key:"_setPreview",value(){return e=>{const t=(new Date).toISOString();this._preview={entity_id:`${this.stepId}.___flow_preview___`,last_changed:t,last_updated:t,context:{id:"",parent_id:null,user_id:null},...e}}}},{kind:"field",key:"_debouncedSubscribePreview",value(){return(0,h.s)((()=>{this._subscribePreview()}),250)}},{kind:"method",key:"_subscribePreview",value:async function(){if(this._unsub&&((await this._unsub)(),this._unsub=void 0),"repair_flow"!==this.flowType)try{this._unsub=(0,u.K)(this.hass,this.flowId,this.flowType,this.stepData,this._setPreview),await this._unsub,(0,v.r)(this,"set-flow-errors",{errors:{}})}catch(e){"string"==typeof e.message?this._error=e.message:(this._error=void 0,(0,v.r)(this,"set-flow-errors",e.message)),this._unsub=void 0,this._preview=void 0}}}]}}),n.WF);s()}catch(e){s(e)}}))}};
//# sourceMappingURL=7442.O7Pa9WOC5AI.js.map