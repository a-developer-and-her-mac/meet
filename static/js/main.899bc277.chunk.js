(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),o=n.n(r),s=n(58),c=n.n(s),i=(n(191),n(9)),u=n(13),l=n(11),h=n(10),d=(n(192),n(193),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1,buttonText:"Details"},e.handleButtonClicked=function(){e.state.showDetails?e.setState({showDetails:!1,buttonText:"Details"}):e.setState({showDetails:!0,buttonText:"Hide details"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return this.state.showDetails?Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("h2",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"time",children:t.start.dateTime}),Object(a.jsx)("p",{className:"timezone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsxs)("a",{href:t.htmlLink,className:"eventLink",target:"_blank",rel:"noreferrer",children:["See event on Google Calendar ",Object(a.jsx)("i",{className:"arrow left"})]}),Object(a.jsx)("p",{className:"description",children:t.description}),Object(a.jsx)("button",{className:"details-btn",onClick:function(){return e.handleButtonClicked()},children:this.state.buttonText})]}):Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("h2",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"time",children:t.start.dateTime}),Object(a.jsx)("p",{className:"timezone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsx)("button",{className:"details-btn",onClick:function(){return e.handleButtonClicked()},children:this.state.buttonText})]})}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(p,{text:this.state.infoText}),Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;if(!(n<=32))return e.setState({numberOfEvents:n,errorText:"Please select a number between 1 and 32"});e.setState({numberOfEvents:n,errorText:""}),e.props.updateEvents(null,n)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"NumberOfEvents",children:[Object(a.jsx)(b,{text:this.state.errorText}),Object(a.jsx)("input",{type:"text",className:"eventNumber",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(r.Component),g=n(163),w=n(14),O=function(e){var t=e.events,n=Object(r.useState)([]),o=Object(g.a)(n,2),s=o[0],c=o[1];Object(r.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(a.jsx)(w.d,{height:400,children:Object(a.jsx)(w.c,{width:400,height:400,children:Object(a.jsx)(w.b,{data:s,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#790c5a",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},x=n(21),y=n.n(x),k=n(44),S=n(164),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],N=n(90),C=n.n(N),E=n(45),Z=n.n(E),A=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},W=function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return Z.a.done(),e.abrupt("return",T);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://wyqhkyib07.execute-api.us-west-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,C.a.get(a);case 16:return(r=e.sent).data&&(o=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://wyqhkyib07.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://wyqhkyib07.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",infoAlert:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?D().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):D().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine||this.setState({infoAlert:"You are offline. Data has been loaded from the cache."}),D().then((function(t){e.mounted&&e.setState({events:t,locations:A(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=(e.locations,e.numberOfEvents,e.events);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"App-title",children:Object(a.jsx)("span",{className:"circle-sketch-highlight",children:"Meet App"})}),Object(a.jsx)("h2",{className:"CitySearch-title",children:"Choose your nearest city"}),Object(a.jsx)(v,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)("h2",{children:"Number of events:"}),Object(a.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(O,{events:t}),Object(a.jsx)(w.d,{height:400,children:Object(a.jsxs)(w.f,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(w.a,{}),Object(a.jsx)(w.h,{type:"category",dataKey:"city",name:"city"}),Object(a.jsx)(w.i,{type:"number",dataKey:"number",name:"event number"}),Object(a.jsx)(w.g,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(w.e,{data:this.getData(),fill:"#790c5a"})]})})]}),Object(a.jsx)(p,{text:this.state.infoAlert}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=n(162);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}(),B.config("1dd3a9ed688f46e68abd5f1182d62e4e").install()}},[[388,1,2]]]);
//# sourceMappingURL=main.899bc277.chunk.js.map