"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[8353,5980],{83599:function(e,r,t){t.r(r),t.d(r,{HaQrCode:function(){return g}});var a,n,i,o=t(6238),d=t(36683),c=t(89231),s=t(29864),l=t(83647),u=t(8364),h=t(76504),v=t(80792),k=(t(77052),t(36724),t(650),t(43618),t(98168),t(5546)),f=t(196),m=t(28345),y=(t(91074),t(26709)),g=(0,u.A)([(0,f.EM)("ha-qr-code")],(function(e,r){var t=function(r){function t(){var r;(0,c.A)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=(0,s.A)(this,t,[].concat(n)),e(r),r}return(0,l.A)(t,r),(0,d.A)(t)}(r);return{F:t,d:[{kind:"field",decorators:[(0,f.MZ)()],key:"data",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:"error-correction-level"})],key:"errorCorrectionLevel",value:function(){return"medium"}},{kind:"field",decorators:[(0,f.MZ)({type:Number})],key:"width",value:function(){return 4}},{kind:"field",decorators:[(0,f.MZ)({type:Number})],key:"scale",value:function(){return 4}},{kind:"field",decorators:[(0,f.MZ)({type:Number})],key:"margin",value:function(){return 4}},{kind:"field",decorators:[(0,f.MZ)({type:Number})],key:"maskPattern",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:"center-image"})],key:"centerImage",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,f.P)("canvas")],key:"_canvas",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(0,h.A)((0,v.A)(t.prototype),"willUpdate",this).call(this,e),(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel"))&&this._error&&(this._error=void 0)}},{kind:"method",key:"updated",value:function(e){var r=this,t=this._canvas;if(t&&this.data&&(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel")||e.has("centerImage"))){var a=getComputedStyle(this),n=a.getPropertyValue("--rgb-primary-text-color"),i=a.getPropertyValue("--rgb-card-background-color"),o=(0,y.v2)(n.split(",").map((function(e){return parseInt(e,10)}))),d=(0,y.v2)(i.split(",").map((function(e){return parseInt(e,10)})));if(m.toCanvas(t,this.data,{errorCorrectionLevel:this.errorCorrectionLevel||(this.centerImage?"Q":"M"),width:this.width,scale:this.scale,margin:this.margin,maskPattern:this.maskPattern,color:{light:d,dark:o}}).catch((function(e){r._error=e.message})),this.centerImage){var c=this._canvas.getContext("2d"),s=new Image;s.src=this.centerImage,s.onload=function(){null==c||c.drawImage(s,.375*t.width,.375*t.height,t.width/4,t.height/4)}}}}},{kind:"method",key:"render",value:function(){return this.data?this._error?(0,k.qy)(a||(a=(0,o.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):(0,k.qy)(n||(n=(0,o.A)(["<canvas></canvas>"]))):k.s6}},{kind:"field",static:!0,key:"styles",value:function(){return(0,k.AH)(i||(i=(0,o.A)([":host{display:block}"])))}}]}}),k.WF)},48353:function(e,r,t){t.r(r),t.d(r,{HaSelectorQRCode:function(){return v}});var a,n,i=t(6238),o=t(36683),d=t(89231),c=t(29864),s=t(83647),l=t(8364),u=(t(77052),t(5546)),h=t(196),v=(t(83599),(0,l.A)([(0,h.EM)("ha-selector-qr_code")],(function(e,r){var t=function(r){function t(){var r;(0,d.A)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=(0,c.A)(this,t,[].concat(n)),e(r),r}return(0,s.A)(t,r),(0,o.A)(t)}(r);return{F:t,d:[{kind:"field",decorators:[(0,h.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"method",key:"render",value:function(){var e,r,t,n;return(0,u.qy)(a||(a=(0,i.A)(['<ha-qr-code .data="','" .scale="','" .errorCorrectionLevel="','" .centerImage="','"></ha-qr-code>'])),null===(e=this.selector.qr_code)||void 0===e?void 0:e.data,null===(r=this.selector.qr_code)||void 0===r?void 0:r.scale,null===(t=this.selector.qr_code)||void 0===t?void 0:t.error_correction_level,null===(n=this.selector.qr_code)||void 0===n?void 0:n.center_image)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,u.AH)(n||(n=(0,i.A)(["ha-qr-code{text-align:center}"])))}}]}}),u.WF))}}]);
//# sourceMappingURL=8353.lzz0KcTkiNM.js.map