(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),l=(a(42),a(29)),i=a(30),u=a(36),m=a(35),s=(a(43),a(9)),E=a(7),v=a(13),d=a(32),p=a.n(d);function h(e){var t=Object(v.b)(),a=Object(v.c)((function(e){return e.category})).listcategory;return Object(n.useEffect)((function(){t((function(e){return p.a.get("http://localhost:8080/itdlu/wp-json/wp/v2/categories").then((function(t){e({type:"FETCH_CATEGORY",payload:t.data})})).catch((function(e){throw e}))}))}),[]),c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"header-upper"},c.a.createElement("div",{className:"auto-container"},c.a.createElement("div",{className:"logo-outer"},c.a.createElement("div",{className:"logo"},c.a.createElement(s.b,{to:"/",className:"logo"},c.a.createElement("span",null,"Logo")))))),c.a.createElement("div",{className:"header-lower"},c.a.createElement("div",{className:"auto-container"},c.a.createElement("div",{className:"nav-outer"},c.a.createElement("div",{className:"main-menu"},c.a.createElement("div",{className:"navbar-collapse"},c.a.createElement("ul",{className:"nav-menu"},c.a.createElement("li",{className:"Nav-item"},c.a.createElement(s.b,{to:"/"},"Trang ch\u1ee7")),a&&Object.keys(a).map((function(e,t){return c.a.createElement("li",{className:"Nav-item",key:t},c.a.createElement(s.b,{to:"".concat(a[e].slug)},a[e].name))})))))))))}var f=function(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(h,null),t)};function b(){return c.a.createElement("div",null,"about")}function g(){return c.a.createElement("div",null,"trang ch\u1ee7")}function N(){return c.a.createElement("div",null,"Contact")}var y=function(){return c.a.createElement(f,null,c.a.createElement(E.a,{exact:!0,path:"/",component:g}),c.a.createElement(E.a,{path:"/About",component:b}),c.a.createElement(E.a,{path:"/Contact",component:N}))},j=(a(66),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(s.a,null,c.a.createElement(E.c,null,c.a.createElement(y,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(8),O=a(34),k={listcategory:{}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORY":return{listcategory:t.payload};default:return e}},T=Object(w.c)({category:C}),A=Object(w.d)(T,Object(w.a)(O.a));o.a.render(c.a.createElement(v.a,{store:A},c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b8a97eff.chunk.js.map