(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),o=n(2),i=n(4),s=n(3),u=n(1),m=n(5),d=n(9),f=n.n(d),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/Z79rSy82LB9BxDyaa/lastExec/results?token=u8HqK39BcB8PKAFsjMtb9Bnnh").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e.sort(function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})}).then(function(e){for(var t=0;t<e.length;t++)e[t].date=new Date(1e3*e[t].date);return e}).then(function(t){e.setState({data:t}),console.log(t)})}},{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return r.a.createElement("div",{class:"box"},r.a.createElement("span",{class:""},r.a.createElement("b",null,"Latest EV News")),r.a.createElement("hr",null),this.state.data.map(function(e){return r.a.createElement("a",{onclick:"ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');",target:"_blank",class:"item",href:e.link,rel:"noopener noreferrer"},r.a.createElement("div",{key:e.text,class:"newsItem"},r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:"",class:"newsImage"})),r.a.createElement("div",null,r.a.createElement("p",null,e.text.substring(0,e.text.indexOf("http")),"\xa0",r.a.createElement("span",{class:"source"},r.a.createElement("i",null,e.source)))),r.a.createElement("div",{class:"newsItemRight"},r.a.createElement("p",{class:"time"},r.a.createElement(f.a,{date:e.date})))))}))}}]),t}(r.a.Component),h=(n(18),n(6)),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"box"},r.a.createElement("p",{class:""},r.a.createElement("b",null,"Other Guides")),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"https://sunboxlabs.com/200-apartment-solar-system/",rel:"noopener noreferrer"},"Project: $200 Off-Grid Solar For Apartments"),"\xa0"),r.a.createElement("li",null,r.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"https://sunboxlabs.com/burning-man-solar/",rel:"noopener noreferrer"},"Project: Burning Man System"),"\xa0"),r.a.createElement("li",null,r.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"https://sunboxlabs.com/what-will-solar-run/",rel:"noopener noreferrer"},"Project: Low-energy devices for an off-grid home"),"\xa0"),r.a.createElement("li",null,r.a.createElement("a",{onclick:"ga('send', 'event', 'Article', 'clicked', 'textlinks');",target:"_blank",href:"https://sunboxlabs.com/200-solar-lithium-update/",rel:"noopener noreferrer"},"Simplified 100W Lithium System"),"\xa0")))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"box",id:"theForm"},r.a.createElement("p",{class:""},r.a.createElement("b",null,"Add your EV Listing:")),r.a.createElement("form",{action:"https://formspree.io/hello@sunboxlabs.com",method:"POST",id:"formspree"},r.a.createElement("input",{type:"text",placeholder:"Your Car",name:"name"}),"\xa0",r.a.createElement("input",{type:"email",placeholder:"your email",name:"_replyto"}),"\xa0",r.a.createElement("button",{type:"submit",value:"Submit"},r.a.createElement("b",null,"+ Submit"))))}}]),t}(r.a.Component),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e)))._getRandomColor=n._getRandomColor.bind(Object(h.a)(Object(h.a)(n))),n.state={data:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/dqChEgEi92GTiNG9a/lastExec/results?token=p7r3cZrnv5BnGn9c4kC7PpcPT").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){for(var t=e,n=0;n<e.length;n++)t[n].price=parseInt(t[n].price.replace(",","").replace("$","")),t[n].link="https://www.edmunds.com"+t[n].link;return t}).then(function(e){return e.push({name:"NEW Tesla Model 3",price:"42900",image:"https://www.tesla.com/tesla_theme/assets/img/model3/hero-img--touch.jpg?20170801",link:"https://3.tesla.com/model3/design#battery"},{name:"NEW Tesla Model S",price:"85000",image:"https://i0.wp.com/eastwest.thegadgetman.org.uk/wp-content/uploads/2017/07/tesla256.png?fit=256%2C256&ssl=1",link:"https://www.tesla.com/modelx/design#battery"},{name:"NEW Tesla Model X",price:"88000",image:"https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",link:"https://www.tesla.com/models/design#battery"}),e}).then(function(e){return e=e.filter(function(e,t,n){return t===n.findIndex(function(t){return t.name===e.name})})}).then(function(e){return e.sort(function(e,t){return e.price-t.price})}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return r.a.createElement("div",{class:"box"},r.a.createElement("p",{class:""},r.a.createElement("b",null,"NEW Electric Vehicle Prices (updated daily)")),this.state.data.map(function(e){return r.a.createElement("a",{href:"https://www.edmunds.com"+e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{key:e.name,style:{flex:1}},r.a.createElement("img",{src:e.image,class:"carImage",alt:"Used Car Image"})),r.a.createElement("div",{style:{flex:1}},r.a.createElement("span",{class:"carPrice"},"$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",{key:e.name,style:{flex:4}},r.a.createElement("div",{class:"carName"},e.name.replace("USED","")))),r.a.createElement("hr",null))}))}}]),t}(r.a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e)))._getRandomColor=n._getRandomColor.bind(Object(h.a)(Object(h.a)(n))),n.state={data:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/ssxDRduoSE3XdkzLv/lastExec/results?token=vDBYC8EeGdBZpYPrrrXLEjmwF").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e=e.filter(function(e,t,n){return t===n.findIndex(function(t){return t.name===e.name})})}).then(function(e){for(var t=e,n=0;n<e.length;n++)t[n].price=parseInt(t[n].price.replace(",","").replace("$",""));return t.sort(function(e,t){return e.price-t.price})}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return r.a.createElement("div",{class:"box"},r.a.createElement("p",{class:""},r.a.createElement("b",null,"USED Electric Vehicle Prices (updated daily)")),this.state.data.map(function(e){return r.a.createElement("a",{href:"https://www.edmunds.com"+e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{key:e.name,style:{flex:1}},r.a.createElement("img",{src:e.image,class:"carImage",alt:"Used Car Image"})),r.a.createElement("div",{style:{flex:1}},r.a.createElement("span",{class:"carPrice"},"$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",{key:e.name,style:{flex:4}},r.a.createElement("div",{class:"carName"},e.name.replace("USED","")))),r.a.createElement("hr",null))}))}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("uas");var t=document.getElementById("myInput").value;console.log(t),this.ref.push({email:t}),document.getElementById("theForm").style.display="none"}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(E,null))}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onError",value:function(e){console.log(e)}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"navbar"},r.a.createElement("span",null,r.a.createElement("img",{src:"/electron.png",alt:""}),"\xa0",r.a.createElement("span",{class:"title"},r.a.createElement("b",null,"electrification"))," ",r.a.createElement("span",{class:"subtitle"},"EV News & The world's first electric vehicle marketplace"),r.a.createElement("a",{class:"AppButton title time",href:"https://itunes.apple.com/us/app/id1445602414",target:"blank"},"Get the App"))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"news"},r.a.createElement(p,null)),r.a.createElement("div",{class:"listings"},r.a.createElement(k,null))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"));var w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var O=document.getElementById("root");O.hasChildNodes()?Object(l.hydrate)(r.a.createElement(y,null),O):Object(l.render)(r.a.createElement(y,null),O),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.2fac05cb.chunk.js.map