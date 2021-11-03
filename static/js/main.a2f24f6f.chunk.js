(this["webpackJsonpignite-react"]=this["webpackJsonpignite-react"]||[]).push([[0],{136:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,b,l,j,g,m,u,p=t(0),h=t.n(p),O=t(72),A=t.n(O),f=t(13),x=t(35),w=t(14),v=t(44),y=t.n(v),E=t(64),I=t(45),k=t.n(I),C="https://api.rawg.io/api/games?key=f1e220559d054b338d52a897c59a2743",S="https://api.rawg.io/api/games/",L="?key=f1e220559d054b338d52a897c59a2743",R=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),U=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),D=(new Date).getFullYear(),G="".concat(D,"-").concat(U,"-").concat(R),N="".concat(D-1,"-").concat(U,"-").concat(R),B="".concat(D+1,"-").concat(U,"-").concat(R),T="&dates=".concat(N,",").concat(G,"&ordering=-rating&page_size=9"),z="&dates=".concat(G,",").concat(B,"&ordering=-released&page_size=9"),H="&dates=".concat(G,"&ordering=-added&page_size=9"),_=function(e){return"".concat(S).concat(e).concat(L)},M=function(e){return"".concat(S).concat(e,"/screenshots").concat(L)},P=function(e){return"".concat(C,"&search=").concat(e,"&page_size=9")},F=t(138),X=t(139),Z=t(137),V=t(55),J=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))},W=t(2),Q=Object(w.b)(Z.a.div)(a||(a=Object(f.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);\n  border-radius: 1rem;\n  text-align: center;\n  overflow: hidden;\n  cursor:pointer;\n  h3{\n    display: block;\n    height:15%;\n  }\n  img{\n    width:100%;\n    min-height:80%;\n    object-fit:cover;\n  }\n"]))),Y=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=a.toString(),i=Object(x.b)();return Object(W.jsx)(Q,{LayoutId:r,onClick:function(){document.body.style.overflow="hidden",i(function(e){return function(){var n=Object(E.a)(y.a.mark((function n(t){var a,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,k.a.get(_(e));case 3:return a=n.sent,n.next=6,k.a.get(M(e));case 6:c=n.sent,t({type:"GAME_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a))},children:Object(W.jsxs)(V.b,{to:"/game/".concat(a),children:[Object(W.jsx)(Z.a.h3,{LayoutId:"title ".concat(r),children:n}),Object(W.jsx)("p",{children:t}),Object(W.jsx)(Z.a.img,{LayoutId:"image ".concat(r),src:J(c,640),alt:n})]})})},K=t(8),q=t.p+"static/media/apple.5757c37e.svg",$=t.p+"static/media/gamepad.c9269ef5.svg",ee=t.p+"static/media/nintendo.f579be04.svg",ne=t.p+"static/media/playstation.18cc4b9c.svg",te=t.p+"static/media/steam.d7b8819f.svg",ae=t.p+"static/media/xbox.3e7db735.svg",ce=Object(w.b)(Z.a.div)(c||(c=Object(f.a)(["\n  width:100%;\n  min-height:100vh;\n  overflow-y: scroll;\n  position:fixed;\n  left:0;\n  top:0;\n  background: rgba(0,0,0,0.5);\n  overflow-x: hidden;\n"]))),re=Object(w.b)(Z.a.div)(r||(r=Object(f.a)(["\n  width:80%;\n  min-height: 100vh;\n  position: absolute;\n  background: white;\n  border-radius: 1rem;\n  padding:2rem 5rem;\n  color:black;\n  left:10%;\n  img{\n    width:100%;\n  }\n"]))),ie=Object(w.b)(Z.a.div)(i||(i=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img{\n    height:1rem;\n    width:1rem;\n    display: inline;\n  }\n"]))),se=Object(w.b)(Z.a.div)(s||(s=Object(f.a)(["\n  text-align: center;\n"]))),oe=Object(w.b)(Z.a.div)(o||(o=Object(f.a)(["\n  display:flex;\n  justify-content: space-evenly;\n  img{\n    margin-left:2rem; \n    height:1.5rem;\n    width:1.5rem;\n  }\n"]))),de=Object(w.b)(Z.a.div)(d||(d=Object(f.a)(["\n  margin-top:3rem;\n  img{\n    width:100%;\n  }\n"]))),be=Object(w.b)(Z.a.div)(b||(b=Object(f.a)(["\n  margin:1rem 0rem;\n  text-align:center;\n"]))),le=function(e){var n=e.pathId,t=Object(K.e)(),a=function(e){switch(e){case"PlayStation 5":case"PlayStation 4":case"PlayStation 3":return ne;case"Xbox One":case"Xbox 360":return ae;case"PC":return te;case"Nintendo Switch":return ee;case"iOS":return q;default:return $}},c=Object(x.c)((function(e){return e.game})),r=c.detail,i=c.screenshot,s=c.isLoading;return Object(W.jsx)(W.Fragment,{children:!s&&Object(W.jsx)(ce,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(W.jsxs)(re,{LayoutId:n,children:[Object(W.jsxs)(ie,{children:[Object(W.jsxs)("div",{className:"rating",children:[Object(W.jsx)("h3",{children:r.name}),Object(W.jsxs)("p",{children:["Rating: ",r.rating]}),function(){for(var e=[],n=1;n<=5;n++)n<=r.rating?e.push(Object(W.jsx)("img",{alt:n,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},n)):e.push(Object(W.jsx)("img",{alt:n,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},n));return e}()]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("h3",{children:"Platforms"}),Object(W.jsx)(oe,{children:r.platforms.map((function(e){return Object(W.jsx)("img",{src:a(e.platform.name),alt:"data.platform.name"},e.platform.id)}))})]})]}),Object(W.jsx)(de,{children:Object(W.jsx)("img",{src:J(r.background_image,1280),alt:r.background_image})}),Object(W.jsx)(be,{children:r.description_raw}),Object(W.jsx)("div",{className:"gallery",children:i.results.map((function(e){return Object(W.jsx)("img",{src:J(e.image,1280),alt:e.image},e.id)}))})]})})})},je=Object(w.b)(Z.a.div)(l||(l=Object(f.a)(["\n  padding:0rem 5rem;\n  overflow: hidden;\n"]))),ge=Object(w.b)(Z.a.div)(j||(j=Object(f.a)(["\n  padding:3rem 0rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));\n  grid-column-gap: 2rem;\n  grid-row-gap: 3rem;\n"]))),me=function(){var e=Object(K.f)().pathname.split("/")[2],n=Object(x.b)();Object(p.useEffect)((function(){n(function(){var e=Object(E.a)(y.a.mark((function e(n){var t,a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(C).concat(T));case 2:return t=e.sent,e.next=5,k.a.get("".concat(C).concat(z));case 5:return a=e.sent,e.next=8,k.a.get("".concat(C).concat(H));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:a.data.results,newGames:c.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(x.c)((function(e){return e.games})),a=t.popular,c=t.upcoming,r=t.newGames,i=t.searched;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(F.a,{type:"crossfade",children:[Object(W.jsx)(X.a,{children:e&&Object(W.jsx)(le,{LayoutId:e})}),i.length?Object(W.jsx)("div",{children:Object(W.jsxs)(je,{className:"searched",children:[Object(W.jsx)("h2",{children:"Searched Games"}),Object(W.jsx)(ge,{children:i.map((function(e){return Object(W.jsx)(Y,{name:e.name,released:e.released,image:e.background_image,id:e.id},e.id)}))})]})}):"",Object(W.jsxs)(je,{children:[Object(W.jsx)("h2",{children:"Popular Games"}),Object(W.jsx)(ge,{children:a.map((function(e){return Object(W.jsx)(Y,{name:e.name,released:e.released,image:e.background_image,id:e.id},e.id)}))})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)("h2",{children:"Upcoming Games"}),Object(W.jsx)(ge,{children:c.map((function(e){return Object(W.jsx)(Y,{name:e.name,released:e.released,image:e.background_image,id:e.id},e.id)}))})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)("h2",{children:"New Games"}),Object(W.jsx)(ge,{children:r.map((function(e){return Object(W.jsx)(Y,{name:e.name,released:e.released,image:e.background_image,id:e.id},e.id)}))})]})]})})},ue=t(105),pe=t.p+"static/media/logo.9b6b8655.svg",he=Object(w.b)(Z.a.div)(g||(g=Object(f.a)(["\n  text-align:center;\n  padding:1.5rem 3rem;\n  input{\n    width:30%;\n    font-size:1.2rem;\n    padding:0.5rem;\n    margin:2rem;\n    border:none;\n    outline:none;\n    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);\n  }\n  button{\n    font-size:1.2rem;\n    padding:0.5rem 1.5rem;\n    border:none;\n    background: #ff7676;\n    color:white;\n    padding-left:-0.6rem;\n    cursor:pointer;\n  }\n"]))),Oe=Object(w.b)(Z.a.div)(m||(m=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor:pointer;\n"]))),Ae=function(){var e=Object(x.b)(),n=Object(p.useState)(""),t=Object(ue.a)(n,2),a=t[0],c=t[1];return Object(W.jsxs)(he,{children:[Object(W.jsxs)(Oe,{onClick:function(){e({type:"CLEAR_SEARCH"})},children:[Object(W.jsx)("img",{src:pe,alt:"logo"}),Object(W.jsx)("h1",{children:"Ignite"})]}),Object(W.jsxs)("form",{className:"search",children:[Object(W.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}}),Object(W.jsx)("button",{type:"submit",onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(E.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(P(t));case 2:a=e.sent,n({type:"SEARCH_GAMES",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},children:"Search"})]})]})},fe=Object(w.a)(u||(u=Object(f.a)(["\n  *{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n  }\n  html{\n    &::--webkit-scrollbar{\n      width:0.5rem;\n      \n    }\n    &::--webkit-scrollbar-thumb{\n      background-color: darkgray;\n    }\n  }\n  body{\n    width:100%;\n    font-family: 'Montserrat',sans-serif;\n  }\n  h2{\n    font-size:2rem;\n    padding-top:2rem;\n    font-family: 'Abril Fatface';\n    font-weight: lighter;\n    color:#333;\n  }\n  h3{\n    font-size: 1rem;\n    padding:1rem 0rem;\n    color:#333;\n  }\n  p{\n    font-size: 1rem;\n    line-height: 200%;\n    color:#696969;\n  }\n  a{\n    text-decoration:none;\n    color:#333;\n  }\n  img{\n    display: block;\n  }\n\n"])));var xe=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(fe,{}),Object(W.jsxs)(K.a,{path:["game/id","/"],children:[Object(W.jsx)(Ae,{}),Object(W.jsx)(me,{})]})]})},we=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,140)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},ve=t(70),ye=t(25),Ee={popular:[],upcoming:[],newGames:[],searched:[]},Ie={detail:{platforms:[]},screenshot:{results:[]},isLoading:!0},ke=Object(ve.b)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ye.a)(Object(ye.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"SEARCH_GAMES":return Object(ye.a)(Object(ye.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCH":return Object(ye.a)(Object(ye.a)({},e),{},{searched:[]});default:return Object(ye.a)({},e)}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GAME_DETAIL":return Object(ye.a)(Object(ye.a)({},e),{},{detail:n.payload.game,screenshot:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(ye.a)(Object(ye.a)({},e),{},{isLoading:!0});default:return Object(ye.a)({},e)}}}),Ce=t(104),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,Le=Object(ve.c)(ke,Se(Object(ve.a)(Ce.a)));A.a.render(Object(W.jsx)(h.a.StrictMode,{children:Object(W.jsx)(x.a,{store:Le,children:Object(W.jsx)(V.a,{children:Object(W.jsx)(xe,{})})})}),document.getElementById("root")),we()}},[[136,1,2]]]);
//# sourceMappingURL=main.a2f24f6f.chunk.js.map