(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),s=n.n(o),c=(n(30),n(2)),i=n(6),u=n(4),l=n(3),d=(n(31),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){var t=!e.state.collapsed;e.setState({collapsed:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"title",children:t.summary}),Object(d.jsx)("p",{className:"date",children:t.start.dateTime}),Object(d.jsx)("p",{className:"location",children:t.location}),this.state.collapsed?null:Object(d.jsxs)("div",{className:"eventExtra",children:[Object(d.jsx)("a",{href:t.htmlLink,className:"link",target:"_blank",rel:"noreferrer",children:"See details on google calendar"}),Object(d.jsx)("p",{className:"description",children:t.description})]}),Object(d.jsx)("button",{className:"toggleDetails details-btn",onClick:function(){return e.handleClick()},children:this.state.collapsed?"Show details":"Hide details"})]})}}]),n}(a.Component),p=h,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),m=f,b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a.className="",a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),className:this.className,children:this.props.text})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a.className="InfoAlert",a}return n}(b),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a.className="ErrorAlert",a}return n}(b),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.handleFocus=function(t){t.target.select(),e.setState({showSuggestions:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(v,{className:"InfoAlert",text:this.state.infoText}),Object(d.jsx)("label",{htmlFor:"city",children:"Choose city"}),Object(d.jsx)("input",{type:"text",className:"city",id:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:this.handleFocus}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),w=g,y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:32},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>100?e.setState({number:n,infoText:"The number needs to be >1 and <100 !"}):(e.setState({number:n,infoText:""}),e.props.updateListLength(n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"NumberOfEvents",children:[Object(d.jsx)("label",{htmlFor:"numberInput",children:"Limit length of event list to:"}),Object(d.jsx)("input",{type:"number",className:"numberInput",id:"numberInput",value:this.state.number,onChange:this.handleInputChanged}),Object(d.jsx)(j,{className:"ErrorAlert",text:this.state.infoText})]})}}]),n}(a.Component),O=y,x=n(25),k=n(7),S=n.n(k),T=n(8),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];C=JSON.parse(JSON.stringify(C));var N=n(13),Z=n.n(N),I=n(11),E=n.n(I),L=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r,o,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,A(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=20;break}return localStorage.removeItem("access_token"),a=new URLSearchParams(window.location.search),e.next=12,a.get("code");case 12:if(r=e.sent){e.next=19;break}return e.next=16,Z.a.get("https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 16:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 19:return e.abrupt("return",r&&q(r));case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(T.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",C);case 4:return e.next=6,L();case 6:if(!(t=e.sent)){e.next=16;break}return J(),n="https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,Z.a.get(n);case 12:return(a=e.sent).data&&(r=W(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},B=(n(51),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32},e.updateEvents=function(t){M().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e.updateListLength=function(t){e.setState({numberOfEvents:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t,locations:W(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(m,{events:this.state.events.slice(0,this.state.numberOfEvents)}),Object(d.jsx)(O,{updateListLength:this.updateListLength})]})}}]),n}(a.Component)),F=B;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(24).config("dc8eafeabdd840d08c6080b9bd4933b8").install(),s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[53,1,2]]]);
//# sourceMappingURL=main.8d026c12.chunk.js.map