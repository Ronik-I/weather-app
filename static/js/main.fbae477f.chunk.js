(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),o=a.n(r),s=(a(9),a(3)),i=a(0),d="7a747bf83ad8f3a20ecd55111a6dc295",u="https://api.openweathermap.org/data/2.5/";var l=function(){var e,t,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)({}),h=Object(s.a)(l,2),j=h[0],m=h[1],p=function(e){var t=e.getHours(),a=j.timezone;return(t=t-5+Math.floor(a/3600))<0&&(t=24+t),"".concat(t)};return Object(i.jsx)("div",{className:"undefined"!=typeof j.main?(e=Math.round(j.main.temp),t=p(new Date),e<=20?t>=6&&t<18?"app":"app coldnight":t>=6&&t<18?"app warmday":"app warmnight"):"app",children:Object(i.jsxs)("main",{children:[Object(i.jsx)("div",{className:"search-box",children:Object(i.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search here",onChange:function(e){return o(e.target.value)},value:r,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(r,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){m(e),o(""),console.log(e)}))}})}),"undefined"!=typeof j.main?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"location-box",children:[Object(i.jsxs)("div",{className:"location",children:[j.name,",",j.sys.country]}),Object(i.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()],a=e.getDate(),n=["Jnauary","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear(),r=j.timezone,o=Math.floor(r/3600),s=Math.floor((r-3600*o)/60),i=e.getMinutes()-30+s,d=e.getHours()-5+o;return i<0&&(d--,i=60+i),d<0&&(d=24+d),"".concat(d+":"+i," ").concat(t," ").concat(a," ").concat(n," ").concat(c," ")}(new Date)})]}),Object(i.jsxs)("div",{className:"weather-box",children:[Object(i.jsxs)("div",{className:"temp",children:[Math.round(j.main.temp),"\xb0c"]}),Object(i.jsx)("div",{className:"weather",children:j.weather[0].main}),Object(i.jsx)("div",{className:function(e){return"Clouds"===e?"clouds":"Clear"===e?p(new Date)>=6&&p(new Date)<=18?"clear":"moon":"Mist"===e?"mist":"Rain"===e?"rain":"clouds"}(j.weather[0].main)})]})]}):Object(i.jsx)("div",{id:"notfound",children:"City Not Found"})]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.fbae477f.chunk.js.map