(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(7),i=n.n(r),o=(n(13),n(2)),l=n(3),u=n(5),j=n(4),h=(n(14),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={showDetails:!1},e.handleButtonClicked=function(){e.setState({showDetails:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("h2",{className:"summary"}),Object(a.jsx)("p",{className:"description"}),Object(a.jsx)("p",{className:"time"}),Object(a.jsx)("p",{className:"timezone"}),Object(a.jsx)("p",{className:"location"}),Object(a.jsx)("button",{className:"details",onClick:function(){return e.handleButtonClicked()}})]})}}]),n}(c.Component)),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{event:e})},e.id)}))})}}]),n}(c.Component),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{children:Object(a.jsx)("b",{children:"See all cities"})},"all"),";"]})]})}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){}}]),n}(c.Component),d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(b,{}),Object(a.jsx)(h,{}),Object(a.jsx)(p,{})]})}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a0febd28.chunk.js.map