export const id=2842;export const ids=[2842,2840];export const modules={79076:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{Yq:()=>u,zB:()=>d});n(54317),n(54895),n(66274),n(85767);var a=n(92840),o=n(45081),r=n(99096),m=n(84656),l=e([a]);a=(l.then?(await l)():l)[0];(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,m.w)(e.time_zone,t)})));const u=(e,t,n)=>c(t,n.time_zone).format(e),c=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,m.w)(e.time_zone,t)}))),d=((0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,m.w)(e.time_zone,t)}))),(e,t,n)=>{var i,a,o,m;const l=s(t,n.time_zone);if(t.date_format===r.ow.language||t.date_format===r.ow.system)return l.format(e);const u=l.formatToParts(e),c=null===(i=u.find((e=>"literal"===e.type)))||void 0===i?void 0:i.value,d=null===(a=u.find((e=>"day"===e.type)))||void 0===a?void 0:a.value,g=null===(o=u.find((e=>"month"===e.type)))||void 0===o?void 0:o.value,h=null===(m=u.find((e=>"year"===e.type)))||void 0===m?void 0:m.value,y=u.at(u.length-1);let w="literal"===(null==y?void 0:y.type)?null==y?void 0:y.value:"";"bg"===t.language&&t.date_format===r.ow.YMD&&(w="");return{[r.ow.DMY]:`${d}${c}${g}${c}${h}${w}`,[r.ow.MDY]:`${g}${c}${d}${c}${h}${w}`,[r.ow.YMD]:`${h}${c}${g}${c}${d}${w}`}[t.date_format]}),s=(0,o.A)(((e,t)=>{const n=e.date_format===r.ow.system?void 0:e.language;return e.date_format===r.ow.language||(e.date_format,r.ow.system),new Intl.DateTimeFormat(n,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,m.w)(e.time_zone,t)})}));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,m.w)(e.time_zone,t)})));i()}catch(e){i(e)}}))},37491:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{r6:()=>d});var a=n(92840),o=n(45081),r=n(79076),m=n(13634),l=n(84656),u=n(49655),c=e([a,r,m]);[a,r,m]=c.then?(await c)():c;const d=(e,t,n)=>s(t,n.time_zone).format(e),s=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)})));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)})));i()}catch(e){i(e)}}))},13634:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{LW:()=>y,Xs:()=>g,fU:()=>u,ie:()=>d});var a=n(92840),o=n(45081),r=n(84656),m=n(49655),l=e([a]);a=(l.then?(await l)():l)[0];const u=(e,t,n)=>c(t,n.time_zone).format(e),c=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),d=(e,t,n)=>s(t,n.time_zone).format(e),s=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),g=(e,t,n)=>h(t,n.time_zone).format(e),h=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),y=(e,t,n)=>w(t,n.time_zone).format(e),w=(0,o.A)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.w)(e.time_zone,t)})));i()}catch(e){i(e)}}))},84656:(e,t,n)=>{n.d(t,{w:()=>c});var i,a,o,r,m,l=n(99096);const u=null!==(i=null===(a=(o=Intl).DateTimeFormat)||void 0===a||null===(r=(m=a.call(o)).resolvedOptions)||void 0===r?void 0:r.call(m).timeZone)&&void 0!==i?i:"UTC",c=(e,t)=>e===l.Wj.local&&"UTC"!==u?u:t},49655:(e,t,n)=>{n.d(t,{J:()=>o});n(53501);var i=n(45081),a=n(99096);const o=(0,i.A)((e=>{if(e.time_format===a.Hg.language||e.time_format===a.Hg.system){const t=e.time_format===a.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===a.Hg.am_pm}))},2842:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{R:()=>c});n(59092),n(26777),n(73842),n(66274),n(98168),n(22836),n(7133),n(10752);var a=n(79076),o=n(37491),r=n(75914),m=n(1695),l=(n(86442),n(70636),n(19263)),u=e([a,o,r]);[a,o,r]=u.then?(await u)():u;const c=(e,t,n,i)=>{const a=t.entity_id,o=t.attributes.device_class,r=(0,l.m)(a),u=n[a],c=null==u?void 0:u.translation_key;return c&&e(`component.${u.platform}.entity.${r}.${c}.state_attributes.${i}.name`)||o&&e(`component.${r}.entity_component.${o}.state_attributes.${i}.name`)||e(`component.${r}.entity_component._.state_attributes.${i}.name`)||(0,m.Z)(i.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS"))};i()}catch(e){i(e)}}))},75914:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{ZV:()=>u});var a=n(92840),o=(n(53501),n(99096)),r=n(27295),m=e([a]);a=(m.then?(await m)():m)[0];const l=e=>{switch(e.number_format){case o.jG.comma_decimal:return["en-US","en"];case o.jG.decimal_comma:return["de","es","it"];case o.jG.space_comma:return["fr","sv","cs"];case o.jG.system:return;default:return e.language}},u=(e,t,n)=>{const i=t?l(t):void 0;return Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)===o.jG.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||(null==t?void 0:t.number_format)!==o.jG.none?"string"==typeof e?e:`${(0,r.L)(e,null==n?void 0:n.maximumFractionDigits).toString()}${"currency"===(null==n?void 0:n.style)?` ${n.currency}`:""}`:new Intl.NumberFormat("en-US",c(e,{...n,useGrouping:!1})).format(Number(e)):new Intl.NumberFormat(i,c(e,n)).format(Number(e))},c=(e,t)=>{const n={maximumFractionDigits:2,...t};if("string"!=typeof e)return n;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;n.minimumFractionDigits=t,n.maximumFractionDigits=t}return n};i()}catch(e){i(e)}}))},27295:(e,t,n)=>{n.d(t,{L:()=>i});const i=(e,t=2)=>Math.round(e*10**t)/10**t},1695:(e,t,n)=>{n.d(t,{Z:()=>i});const i=e=>e.charAt(0).toUpperCase()+e.slice(1)},86442:(e,t,n)=>{n(44186),n(90591),n(26777);const i="^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])";new RegExp(i+"$"),new RegExp(i)},70636:(e,t,n)=>{n(26777)},7133:(e,t,n)=>{n.d(t,{rM:()=>i});n(21950),n(15445),n(24483),n(13478),n(46355),n(14612),n(53691),n(48455),n(8339);new Set(["temperature","current_temperature","target_temperature","target_temp_temp","target_temp_high","target_temp_low","target_temp_step","min_temp","max_temp"]);const i={climate:{humidity:"%",current_humidity:"%",target_humidity_low:"%",target_humidity_high:"%",target_humidity_step:"%",min_humidity:"%",max_humidity:"%"},cover:{current_position:"%",current_tilt_position:"%"},fan:{percentage:"%"},humidifier:{humidity:"%",current_humidity:"%",min_humidity:"%",max_humidity:"%"},light:{color_temp:"mired",max_mireds:"mired",min_mireds:"mired",color_temp_kelvin:"K",min_color_temp_kelvin:"K",max_color_temp_kelvin:"K",brightness:"%"},sun:{azimuth:"°",elevation:"°"},vacuum:{battery_level:"%"},valve:{current_position:"%"},sensor:{battery_level:"%"},media_player:{volume_level:"%"}}},10752:(e,t,n)=>{n(21950),n(71936),n(15445),n(24483),n(13478),n(46355),n(14612),n(53691),n(48455),n(8339);var i=n(5546);n(45805),n(29222);new Set(["clear-night","cloudy","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),new Set(["hail","rainy","pouring"]),new Set(["windy","windy-variant"]),new Set(["snowy","snowy-rainy"]),new Set(["lightning","lightning-rainy"]),i.AH`.rain{fill:var(--weather-icon-rain-color,#30b3ff)}.sun{fill:var(--weather-icon-sun-color,#fdd93c)}.moon{fill:var(--weather-icon-moon-color,#fcf497)}.cloud-back{fill:var(--weather-icon-cloud-back-color,#d4d4d4)}.cloud-front{fill:var(--weather-icon-cloud-front-color,#f9f9f9)}.snow{fill:var(--weather-icon-snow-color,#f9f9f9);stroke:var(--weather-icon-snow-stroke-color,#d4d4d4);stroke-width:1;paint-order:stroke}`},92840:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(21950),n(71936),n(55888),n(8339);var i=n(68079),a=n(11703),o=n(3444),r=n(67558),m=n(86935),l=n(39083),u=n(50644),c=n(29051),d=n(18389),s=n(88514);const e=async()=>{const e=(0,d.wb)(),t=[];(0,o.Z)()&&await Promise.all([n.e(5378),n.e(3964)]).then(n.bind(n,63964)),(0,m.Z)()&&await Promise.all([n.e(3789),n.e(5378),n.e(3833)]).then(n.bind(n,63833)),(0,i.Z)(e)&&t.push(Promise.all([n.e(3789),n.e(5105)]).then(n.bind(n,15105)).then((()=>(0,s.T)()))),(0,a.Z6)(e)&&t.push(Promise.all([n.e(3789),n.e(2713)]).then(n.bind(n,62713))),(0,r.Z)(e)&&t.push(Promise.all([n.e(3789),n.e(3506)]).then(n.bind(n,53506))),(0,l.Z)(e)&&t.push(Promise.all([n.e(3789),n.e(9693)]).then(n.bind(n,49693))),(0,u.Z)(e)&&t.push(Promise.all([n.e(3789),n.e(9596)]).then(n.bind(n,29596)).then((()=>n.e(5224).then(n.t.bind(n,5224,23))))),(0,c.Z)(e)&&t.push(Promise.all([n.e(3789),n.e(317)]).then(n.bind(n,30317))),0!==t.length&&await Promise.all(t).then((()=>(0,s.K)(e)))};await e(),t()}catch(e){t(e)}}),1)},88514:(e,t,n)=>{n.d(t,{K:()=>r,T:()=>m});n(21950),n(55888),n(15445),n(24483),n(13478),n(46355),n(14612),n(53691),n(48455),n(8339);const i=["DateTimeFormat","DisplayNames","ListFormat","NumberFormat","RelativeTimeFormat"],a=new Set,o=async(e,t,n="__addLocaleData")=>{var i;if("function"==typeof(null===(i=Intl[e])||void 0===i?void 0:i[n])){const i=await fetch(`/hacsfiles/frontend/static/locale-data/intl-${e.toLowerCase()}/${t}.json`);i.ok&&Intl[e][n](await i.json())}},r=async e=>{a.has(e)||(a.add(e),await Promise.all(i.map((t=>o(t,e)))))},m=()=>o("DateTimeFormat","add-all-tz","__addTZData")}};
//# sourceMappingURL=2842.lFjFsbrh2XE.js.map