(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategoria,a=r.a.useState(""),n=Object(u.a)(a,2),c=n[0],i=n[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(l.a)(e))})),i(""))}},r.a.createElement("input",{className:"input is-primary",type:"text",value:c,onChange:function(e){i(e.target.value)}}))},m=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"cardd animate__animated animate__bounce animate__delay"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},s=a(4),d=a.n(s),p=a(7),f=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=5GSb8HedavvGgMXxM28qI9LR4yJ25gn0"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.Category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),i&&r.a.createElement("p",null,"loading..."),r.a.createElement("div",{className:"card-grid animate__animated animate__bounce animate__delay"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},v=function(){var e=r.a.useState(["One Punch"]),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(o,{setCategoria:n}),r.a.createElement("hr",null),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(g,{key:e,Category:e})}))))};a(15),a(16);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.3ab7473d.chunk.js.map