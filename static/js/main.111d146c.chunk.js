(this.webpackJsonpwwwest=this.webpackJsonpwwwest||[]).push([[0],{39:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=a(6),s=a(9),l=a(24),u=function(){return{type:"SIGN_OUT"}},m=(a(48),function(){return r.a.createElement("div",{className:"error"},"The username or password you entered is incorrect")}),d={login:function(e){return{type:"SIGN_IN",payload:e}},signOut:u},p=Object(o.b)((function(e){return{auth:e.auth}}),d)((function(e){var t=e.auth,a=e.login,i=e.signOut,c=Object(n.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),E=p[0],f=p[1];return t.isLogged?r.a.createElement("div",{className:"signOut"},r.a.createElement("button",{onClick:function(){return i()}},"Sign Out")):r.a.createElement("div",{className:"SignIn"},r.a.createElement("div",{className:"hint"},r.a.createElement("span",null,"username: admin"),"1",r.a.createElement("span",null,"pass: 12345")),r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Username",value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:E,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{className:"main_btn",type:"submit",onClick:function(e){e.preventDefault(),a({username:s,password:E})}},"Sign In")),t.error?r.a.createElement(m,null):null)})),E=function(){return r.a.createElement(p,null)},f=a(15),g=a(16),h=a(18),b=a(17),v=a(19),_=(a(49),a(50),function(e){return r.a.createElement("div",{className:"news__item"},r.a.createElement("a",{href:e.url,className:"news__link"},r.a.createElement("h2",{className:"news__title"},e.name)),r.a.createElement("p",{className:"news__description"},e.description))}),N=a(36),w=a.n(N),O=function(){return function(e){return w.a.get("https://newsapi.org/v2/top-headlines?country=ua&apiKey=116bdf14f7054172ba6bae76c24847b1").then(e({type:"GET_NEWS"})).then((function(t){console.log(t.data.articles),e({type:"GET_NEWS_SUCCESS",payload:t.data.articles})})).catch((function(e){throw e}))}},S=(a(68),function(){return r.a.createElement("div",{className:"Spinner"},"Loading.........")}),y=(a(69),function(){return r.a.createElement("div",null,"Error!")}),j=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.fetchAllNews()},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.items,t=e.loading,a=e.news,n=e.error;return t?r.a.createElement(S,null):n?r.a.createElement(y,null):r.a.createElement("div",{className:"news__list"},a.map((function(e,t){return r.a.createElement(_,{key:t,name:e.title,description:e.description,url:e.url})})))}}]),t}(n.Component),C=Object(o.b)((function(e){return{items:e.news}}),(function(e){return{fetchAllNews:function(){return e(O())}}}))(j),L=function(){return r.a.createElement(C,null)},q=function(){return r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum eos earum odit quia facere possimus nesciunt corporis ipsum assumenda aliquid quas tenetur libero atque quasi itaque omnis, nemo cupiditate esse veritatis excepturi? Quia ipsa mollitia nobis ipsam earum enim corrupti rerum delectus minus odio! Commodi id assumenda illum enim quisquam eveniet maiores error molestiae iure pariatur nostrum, perspiciatis laboriosam dolor doloremque quasi quas obcaecati odio ratione reprehenderit ipsa nihil sunt! Eaque alias, quo debitis vel at, illum amet veritatis officiis voluptate eius corrupti blanditiis dolore fugit error nemo earum sequi praesentium, quidem ut qui? Nobis quas praesentium officia enim.")},I=a(7),k=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(I.b,{to:"/news"},r.a.createElement("button",{className:"main_btn"},"To news")))};a(71),a(72);var G={signOut:u},T=Object(o.b)((function(e){return{auth:e.auth}}),G)((function(e){var t=e.auth,a=e.signOut;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wr"},r.a.createElement("div",{className:"header__content"},r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",{className:"header__list"},r.a.createElement("li",{className:"header__list_item"},r.a.createElement(I.c,{to:"/",activeClassName:"selected",exact:!0},"Home")),r.a.createElement("li",{className:"header__list_item"},r.a.createElement(I.c,{to:"/news",activeClassName:"selected"},"News")),r.a.createElement("li",{className:"header__list_item"},r.a.createElement(I.c,{to:"/profile",activeClassName:"selected"},"Profile")),r.a.createElement((function(){return t.isLogged?r.a.createElement("div",{className:"signOut"},r.a.createElement("button",{className:"main_btn",onClick:function(){return a()}},"Sign Out")):r.a.createElement("li",{className:"header__list_item"},r.a.createElement(I.c,{to:"/login",activeClassName:"selected"},"Login"))}),null))))))})),A={checkLocalStorage:function(){return{type:"CHECK_LOCAL_STORAGE"}}},U=Object(s.g)(Object(o.b)((function(e){return{auth:e.auth}}),A)((function(e){e.auth;var t=e.checkLocalStorage;return Object(n.useEffect)((function(){"true"===localStorage.getItem("isLogged")&&t()}),[t]),r.a.createElement("main",{role:"main"},r.a.createElement(T,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/profile"},"true"===localStorage.getItem("isLogged")?r.a.createElement(q,null):r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{path:"/",component:k,exact:!0}),r.a.createElement(s.b,{path:"/login",component:E}),r.a.createElement(s.b,{path:"/news",component:L})))}))),x=a(3),W=Object(x.a)(),D=a(10),H=a(38),K={news:[],loading:!1,error:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS":return{news:[],loading:!0,error:!1};case"GET_NEWS_SUCCESS":return{news:t.payload,loading:!1,error:!1};case"GET_NEWS_FAILURE":return{news:[],loading:!1,error:!0};default:return e}},J={isLogged:!1,error:!1},P=function(){return"true"===localStorage.getItem("isLogged")?{isLogged:!0,error:!1}:{isLogged:!1,error:!1}},B=function(e,t){return"admin"===t.username&&"12345"===t.password?(localStorage.setItem("isLogged",!0),W.push("/"),{isLogged:!0,error:!1}):{isLogged:!1,error:!0}},F=function(){return localStorage.setItem("isLogged",!1),{isLogged:!1,error:!1}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return B(0,t.payload);case"SIGN_OUT":return F();case"CHECK_LOCAL_STORAGE":return P();default:return e}},Q=Object(D.c)({news:R,auth:M}),V=Object(D.d)(Q,Object(D.a)(H.a)),z=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(y,null):this.props.children}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,{store:V},r.a.createElement(z,null,r.a.createElement(I.a,{basename:"/",history:W},r.a.createElement(U,null)))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.111d146c.chunk.js.map