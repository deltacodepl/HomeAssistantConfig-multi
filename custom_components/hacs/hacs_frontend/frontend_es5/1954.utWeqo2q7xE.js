"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[1954],{6759:function(e,i,t){var n,a=t(6238),r=t(36683),o=t(89231),d=t(29864),s=t(83647),l=t(8364),u=(t(77052),t(650),t(43859),t(5546)),c=t(196),h=t(33167);t(22560),(0,l.A)([(0,c.EM)("ha-duration-input")],(function(e,i){var t=function(i){function t(){var i;(0,o.A)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return i=(0,d.A)(this,t,[].concat(a)),e(i),i}return(0,s.A)(t,i),(0,r.A)(t)}(i);return{F:t,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"enableMillisecond",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"enableDay",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.P)("paper-time-input",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return(0,u.qy)(n||(n=(0,a.A)([' <ha-base-time-input .label="','" .helper="','" .required="','" .autoValidate="','" .disabled="','" errorMessage="Required" enableSecond .enableMillisecond="','" .enableDay="','" format="24" .days="','" .hours="','" .minutes="','" .seconds="','" .milliseconds="','" @value-changed="','" noHoursLimit dayLabel="dd" hourLabel="hh" minLabel="mm" secLabel="ss" millisecLabel="ms"></ha-base-time-input> '])),this.label,this.helper,this.required,this.required,this.disabled,this.enableMillisecond,this.enableDay,this._days,this._hours,this._minutes,this._seconds,this._milliseconds,this._durationChanged)}},{kind:"get",key:"_days",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.days?Number(this.data.days):0}},{kind:"get",key:"_hours",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.hours?Number(this.data.hours):0}},{kind:"get",key:"_minutes",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.minutes?Number(this.data.minutes):0}},{kind:"get",key:"_seconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.seconds?Number(this.data.seconds):0}},{kind:"get",key:"_milliseconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.milliseconds?Number(this.data.milliseconds):0}},{kind:"method",key:"_durationChanged",value:function(e){e.stopPropagation();var i,t=Object.assign({},e.detail.value);(this.enableMillisecond||t.milliseconds?t.milliseconds>999&&(t.seconds+=Math.floor(t.milliseconds/1e3),t.milliseconds%=1e3):delete t.milliseconds,t.seconds>59&&(t.minutes+=Math.floor(t.seconds/60),t.seconds%=60),t.minutes>59&&(t.hours+=Math.floor(t.minutes/60),t.minutes%=60),this.enableDay&&t.hours>24)&&(t.days=(null!==(i=t.days)&&void 0!==i?i:0)+Math.floor(t.hours/24),t.hours%=24);(0,h.r)(this,"value-changed",{value:t})}}]}}),u.WF)},24304:function(e,i,t){t.r(i),t.d(i,{HaTimeDuration:function(){return h}});var n,a=t(6238),r=t(36683),o=t(89231),d=t(29864),s=t(83647),l=t(8364),u=(t(77052),t(5546)),c=t(196),h=(t(6759),(0,l.A)([(0,c.EM)("ha-selector-duration")],(function(e,i){var t=function(i){function t(){var i;(0,o.A)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return i=(0,d.A)(this,t,[].concat(a)),e(i),i}return(0,s.A)(t,i),(0,r.A)(t)}(i);return{F:t,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){var e;return(0,u.qy)(n||(n=(0,a.A)([' <ha-duration-input .label="','" .helper="','" .data="','" .disabled="','" .required="','" ?enableDay="','"></ha-duration-input> '])),this.label,this.helper,this.value,this.disabled,this.required,null===(e=this.selector.duration)||void 0===e?void 0:e.enable_day)}}]}}),u.WF))},1617:function(e,i,t){var n=t(127),a=t(39787),r=t(94905),o=t(95124),d=t(78708),s=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,c=d("lastIndexOf"),h=u||!c;e.exports=h?function(e){if(u)return n(l,this,arguments)||0;var i=a(this),t=o(i);if(0===t)return-1;var d=t-1;for(arguments.length>1&&(d=s(d,r(arguments[1]))),d<0&&(d=t+d);d>=0;d--)if(d in i&&i[d]===e)return d||0;return-1}:l},69015:function(e,i,t){var n=t(94905),a=t(83841),r=t(43972),o=RangeError;e.exports=function(e){var i=a(r(this)),t="",d=n(e);if(d<0||d===1/0)throw new o("Wrong number of repetitions");for(;d>0;(d>>>=1)&&(i+=i))1&d&&(t+=i);return t}},87759:function(e,i,t){var n=t(87568),a=t(1617);n({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})}}]);
//# sourceMappingURL=1954.utWeqo2q7xE.js.map