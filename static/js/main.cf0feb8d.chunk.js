(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(83),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"409dbc5d-12bf-4998-9ed9-d1150968a119"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},136:function(e,t,n){e.exports=n(223)},223:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(44),c=n.n(i),u=(n(50),n(7)),o=n(22),s=n(17),l=n(59),d=n(74),f={},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;arguments.length>1&&arguments[1];return e},m=[{id:1,name:"\u0410\u043d\u0434\u0440\u0435\u0439",age:29},{id:2,name:"\u0412\u0430\u043b\u0435\u0440\u0430",age:30},{id:3,name:"\u041b\u044e\u0441\u044f",age:79},{id:4,name:"\u0421\u0430\u043d\u044f",age:29},{id:5,name:"\u041a\u0430\u0442\u044f",age:24},{id:6,name:"\u0412\u043e\u043b\u043e\u0434\u044f",age:59}],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;arguments.length>1&&arguments[1];return e},h=[{link:"/profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},{link:"/friends",text:"\u0414\u0440\u0443\u0437\u044c\u044f"},{link:"/dialogs",text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},{link:"/music",text:"\u041c\u0443\u0437\u044b\u043a\u0430"},{link:"/news",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},{link:"/settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;arguments.length>1&&arguments[1];return e},E=n(81),b=n(25),O=n(84),S=n(80),w=n(4),_=n.n(w),k=n(8),y=n(6),j={initialized:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(y.a)({},e,{initialized:!0});default:return e}},T=Object(s.c)({profilePage:l.b,dialogsPage:d.a,sideBar:p,friendsData:g,navigationsData:v,usersPage:E.a,auth:b.a,form:S.a,app:C}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,I=Object(s.e)(T,N(Object(s.a)(O.a))),L=n(20),x=n(32),D=n(33),P=n(34),U=n(35),A=n(43),R=n(5),G=n.n(R),z=function(e){return r.a.createElement("nav",{className:G.a.nav},r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/profile",activeClassName:G.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/friends",activeClassName:G.a.activeLink},"\u0414\u0440\u0443\u0437\u044c\u044f")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/users",activeClassName:G.a.activeLink},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/dialogs",activeClassName:G.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/music",activeClassName:G.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/news",activeClassName:G.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),r.a.createElement("div",{className:"".concat(G.a.item," ").concat(G.a.active)},r.a.createElement(u.b,{to:"/settings",activeClassName:G.a.activeLink},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))},F=n(56),M=n.n(F),B=function(e){return r.a.createElement("header",{className:M.a.header},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",alt:""}),r.a.createElement("div",{className:M.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438")):r.a.createElement(u.b,{to:"/login"},"Login")))},W=function(e){Object(U.a)(n,e);var t=Object(P.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return r.a.createElement(B,this.props)}}]),n}(r.a.Component),H=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:b.d})(W),J=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(e,t))}},X=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,294))})),K=r.a.lazy((function(){return n.e(6).then(n.bind(null,300))})),Y=r.a.lazy((function(){return n.e(8).then(n.bind(null,295))})),Z=r.a.lazy((function(){return n.e(9).then(n.bind(null,296))})),Q=r.a.lazy((function(){return n.e(10).then(n.bind(null,297))})),V=r.a.lazy((function(){return n.e(11).then(n.bind(null,298))})),$=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,301))})),q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,299))})),ee=function(e){Object(U.a)(n,e);var t=Object(P.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(u.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(H,null),r.a.createElement(z,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(L.b,{path:"/profile/:userId?",render:J(q)}),r.a.createElement(L.b,{path:"/dialogs",render:J($)}),r.a.createElement(L.b,{path:"/users",render:J(K)}),r.a.createElement(L.b,{path:"/friends",render:J(Y)}),r.a.createElement(L.b,{path:"/music",render:J(Z)}),r.a.createElement(L.b,{path:"/news",render:J(Q)}),r.a.createElement(L.b,{path:"/settings",render:J(V)}),r.a.createElement(L.b,{path:"/login",render:J(X)})))):r.a.createElement(A.a,null)}}]),n}(a.Component),te=Object(s.d)(L.f,Object(o.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(k.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(b.b)());case 2:n=e.sent,Promise.all([n]).then((function(){t({type:"INITIALIZED_SUCCESS"})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ee),ne=function(){return r.a.createElement(u.a,null,r.a.createElement(o.a,{store:I},r.a.createElement(te,null)))};c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var a=n(4),r=n.n(a),i=n(8),c=n(6),u=n(12),o=n(45),s="social-network/auth/SET_AUTH_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},d=function(e,t,n,a){return{type:s,payload:{userId:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,c=a.login,o=a.email,t(d(i,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?i(f()):(s=c.data.messages.length>0?c.data.messages[0]:"Email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439",i(Object(o.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)({},e,{},t.payload);default:return e}}},43:function(e,t,n){"use strict";var a=n(86),r=n.n(a),i=n(0),c=n.n(i);t.a=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:r.a,alt:""}))}},5:function(e,t,n){e.exports={nav:"NavBar_nav__3SLh7",item:"NavBar_item__1rXSJ",activeLink:"NavBar_activeLink__3Ebbx"}},50:function(e,t,n){},56:function(e,t,n){e.exports={header:"Header_header__69Knd",loginBlock:"Header_loginBlock__1zQii"}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m}));var a=n(4),r=n.n(a),i=n(8),c=n(26),u=n(6),o=n(12),s={postsData:[{id:1,message:"hello, how u feel?",img:"https://clck.ru/MDDf7",likeCounts:0},{id:2,message:"where my money?",img:"https://clck.ru/MDDgs",likeCounts:95},{id:3,message:"i need help",img:"https://clck.ru/MDDj5",likeCounts:110},{id:4,message:"i want use props",img:"https://clck.ru/MDDid",likeCounts:11}],profile:null,status:""},l=function(e){return{type:"ADD_POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPostText,img:"https://clck.ru/MDDf7",likeCounts:0};return Object(u.a)({},e,{postsData:[].concat(Object(c.a)(e.postsData),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"DELETE_POST":return Object(u.a)({},e,{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(26),r=n(6),i={dialogsData:[{id:1,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:2,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:3,name:"\u041b\u044e\u0441\u044f"},{id:4,name:"\u0416\u0435\u043d\u044f"},{id:5,name:"\u041a\u0430\u0442\u044f"},{id:6,name:"\u0412\u043e\u043b\u043e\u0434\u044f"}],messagesData:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"Yo"},{id:3,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430"},{id:4,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:5,message:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0448\u044c?"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},81:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return b}));var a=n(4),r=n.n(a),i=n(8),c=n(26),u=n(6),o=n(12),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(u.a)({},e,{},a):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},d=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(i(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(e){return{type:"FOLLOW_SUCCESS",userId:e}},p=function(e){return{type:"UNFOLLOW_SUCCESS",userId:e}},m=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},g=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),a(m(e)),n.next=4,o.c.getUsers(e,t);case 4:i=n.sent,a(g(!1)),a({type:"SET_USERS",users:i.items}),a({type:"SET_TOTAL_USERS_COUNT",count:i.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,o.c.follow.bind(e),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,o.c.unfollow.bind(e),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW_SUCCESS":return Object(u.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW_SUCCESS":return Object(u.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(u.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(u.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(u.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(u.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},86:function(e,t,n){e.exports=n.p+"static/media/preloader.2a1a00a4.svg"}},[[136,2,3]]]);
//# sourceMappingURL=main.cf0feb8d.chunk.js.map