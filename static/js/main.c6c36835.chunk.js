(this.webpackJsonplivewire=this.webpackJsonplivewire||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),c=n.n(r),i=(n(23),n(15)),o=n(8),u=n(6),m=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Public page"),l.a.createElement("p",null,"A public page with info for all"))},s=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Private page"),l.a.createElement("p",null,"A priave page with info for authorized user"))};function h(){return l.a.createElement(o.a,{basename:""},l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/public"},"Public Page")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/protected"},"Protected Page"))),l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/public"},l.a.createElement(m,null)),l.a.createElement(u.b,{path:"/login"},l.a.createElement(f,null)),l.a.createElement(d,{path:"/protected"},l.a.createElement(s,null)))))}var E={isAuthenticated:!1,authenticate:function(e){E.isAuthenticated=!0,setTimeout(e,3e3)},signout:function(e){E.isAuthenticated=!1,setTimeout(e,3e3)}};function p(){var e=Object(u.g)();return E.isAuthenticated?l.a.createElement("p",null,"Welcome!"," ",l.a.createElement("button",{onClick:function(){E.signout((function(){return e.push("/")}))}},"Sign out")):l.a.createElement("p",null,"You are not logged in.")}function d(e){var t=e.children,n=Object(i.a)(e,["children"]);return l.a.createElement(u.b,Object.assign({},n,{render:function(e){var n=e.location;return E.isAuthenticated?t:l.a.createElement(u.a,{to:{pathname:"/login",state:{from:n}}})}}))}function f(){var e=Object(u.g)(),t=(Object(u.h)().state||{from:{pathname:"/"}}).from;return l.a.createElement("div",null,l.a.createElement("p",null,"You must log in to view the page at ",t.pathname),l.a.createElement("button",{onClick:function(){E.authenticate((function(){e.replace(t)}))}},"Log in"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6c36835.chunk.js.map