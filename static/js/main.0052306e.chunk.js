(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(37)},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),l=t.n(o),c=(t(25),t(4)),s=t(3),m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement(c.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Currency Exchange Rates"))),r.a.createElement("div",{className:"container py-3"},e.children),r.a.createElement("footer",{className:"p-3 bg-light"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("a",{className:"badge badge-dark",href:"https://github.com/Altcademy/exchange-rate-site",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r.a.createElement("div",null,r.a.createElement("span",{className:"mr-3 text-secondary"},"Built by ",r.a.createElement("a",{href:"https://www.altcademy.com",target:"_blank",rel:"noopener noreferrer"},"Altcademy")," with \u2615 and \ud83d\udc9c"))))},i=t(5),u=t(6),b=t(8),h=t(7),y=t(9),g={AUD:{symbol:"$",name:"Australian dollar"},BGN:{symbol:"\u043b\u0432",name:"Bulgarian lev"},BRL:{symbol:"R$",name:"Brazilian real"},CAD:{symbol:"$",name:"Canadian dollar"},CHF:{symbol:"Fr",name:"Swiss franc"},CNY:{symbol:"\xa5",name:"Chinese yuan"},CZK:{symbol:"K\u010d",name:"Czech koruna"},DKK:{symbol:"kr",name:"Danish krone"},EUR:{symbol:"\u20ac",name:"Euro"},GBP:{symbol:"\xa3",name:"British pound"},HKD:{symbol:"$",name:"Hong Kong dollar"},HRK:{symbol:"kn",name:"Croatian kuna"},HUF:{symbol:"Ft",name:"Hungarian forint"},IDR:{symbol:"Rp",name:"Indonesian rupiah"},ILS:{symbol:"\u20aa",name:"Israeli new shekel"},INR:{symbol:"\u20b9",name:"Indian rupee"},ISK:{symbol:"kr",name:"Icelandic kr\xf3na"},JPY:{symbol:"\xa5",name:"Japanese yen"},KRW:{symbol:"\u20a9",name:"South Korean won"},MXN:{symbol:"$",name:"Mexican peso"},MYR:{symbol:"RM",name:"Malaysian ringgit"},NOK:{symbol:"kr",name:"Norwegian krone"},NZD:{symbol:"$",name:"New Zealand dollar"},PHP:{symbol:"\u20b1",name:"Philippine peso"},PLN:{symbol:"z\u0142",name:"Polish z\u0142oty "},RON:{symbol:"lei",name:"Romanian leu"},RUB:{symbol:"\u20bd",name:"Russian ruble"},SEK:{symbol:"kr",name:"Swedish krona"},SGD:{symbol:"$",name:"Singapore dollar"},THB:{symbol:"\u0e3f",name:"Thai baht"},TRY:{symbol:"\u20ba",name:"Turkish lira"},USD:{symbol:"$",name:"United States dollar"},ZAR:{symbol:"R",name:"South African rand"}},f=function(e){if(e.ok)return e;throw new Error("Request was either a 404 or 500")},d=function(e){return e.json()},p=function(e){var a=e.base,t=e.rates;return t?r.a.createElement("table",{className:"table table-sm bg-light mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col",className:"text-right pr-4 py-2"},"1.00 ",a))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.acronym},r.a.createElement("td",{className:"pl-4 py-2"},e.name," ",r.a.createElement("small",null,"(",e.acronym,")")),r.a.createElement("td",{className:"text-right pr-4 py-2"},r.a.createElement(c.b,{to:"/currencyconverter?base=".concat(a,"&quote=").concat(e.acronym)},e.rate.toFixed(6))))}))):null},v=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(b.a)(this,Object(h.a)(a).call(this))).changeBase=function(a){e.setState({base:a.target.value}),e.getRatesData(a.target.value)},e.getRatesData=function(a){e.setState({loading:!0}),fetch("https://api.frankfurter.app/latest?from=".concat(a)).then(f).then(d).then(function(t){if(t.error)throw new Error(t.error);var n=Object.keys(t.rates).filter(function(e){return e!==a}).map(function(e){return{acronym:e,rate:t.rates[e],name:g[e].name,symbol:g[e].symbol}});e.setState({rates:n,loading:!1})}).catch(function(e){return console.error(e.message)})},e.state={base:"USD",rates:null,loading:!0},e}return Object(y.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getRatesData(this.state.base)}},{key:"render",value:function(){var e=this.state,a=e.base,t=e.rates,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"p-3 bg-light form-inline justify-content-center"},r.a.createElement("h3",{className:"mb-2"},"Base currency: ",r.a.createElement("b",{className:"mr-2"},"1")),r.a.createElement("select",{value:a,onChange:this.changeBase,className:"form-control form-control-lg mb-2",disabled:n},Object.keys(g).map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(p,{base:a,rates:t}))}}]),a}(r.a.Component),E=t(19),N=t.n(E),k=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(b.a)(this,Object(h.a)(a).call(this,e))).getRate=function(e,a){t.setState({loading:!0}),fetch("https://api.frankfurter.app/latest?from=".concat(e,"&to=").concat(a)).then(f).then(d).then(function(e){if(e.error)throw new Error(e.error);var n=e.rates[a];t.setState({rate:n,baseValue:1,quoteValue:Number((1*n).toFixed(3)),loading:!1})}).catch(function(e){return console.error(e.message)})},t.getHistoricalRates=function(e,a){var n=(new Date).toISOString().split("T")[0],r=new Date((new Date).getTime()-2592e6).toISOString().split("T")[0];fetch("https://api.frankfurter.app/".concat(r,"..").concat(n,"?from=").concat(e,"&to=").concat(a)).then(f).then(d).then(function(n){if(n.error)throw new Error(n.error);var r=Object.keys(n.rates),o=Object.values(n.rates).map(function(e){return e[a]}),l="".concat(e,"/").concat(a);t.buildChart(r,o,l)}).catch(function(e){return console.error(e.message)})},t.buildChart=function(e,a,n){t.chartRef.current.getContext("2d");"undefined"!==typeof t.chart&&t.chart.destroy(),t.chart=new N.a(t.chartRef.current.getContext("2d"),{type:"line",data:{labels:e,datasets:[{label:n,data:a,fill:!1,tension:0}]},options:{responsive:!0}})},t.changeBaseAcronym=function(e){var a=e.target.value;t.setState({baseAcronym:a}),t.getRate(a,t.state.quoteAcronym),t.getHistoricalRates(a,t.state.quoteAcronym)},t.changeBaseValue=function(e){var a=t.convert(e.target.value,t.state.rate,t.toQuote);t.setState({baseValue:e.target.value,quoteValue:a})},t.changeQuoteAcronym=function(e){var a=e.target.value;t.setState({quoteAcronym:a}),t.getRate(t.state.baseAcronym,a),t.getHistoricalRates(t.state.baseAcronym,a)},t.changeQuoteValue=function(e){var a=t.convert(e.target.value,t.state.rate,t.toBase);t.setState({quoteValue:e.target.value,baseValue:a})};var n=new URLSearchParams(e.location.search);return t.state={rate:0,baseAcronym:n.get("base")||"USD",baseValue:0,quoteAcronym:n.get("quote")||"JPY",quoteValue:0,loading:!1},t.chartRef=r.a.createRef(),t}return Object(y.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,a=e.baseAcronym,t=e.quoteAcronym;this.getRate(a,t),this.getHistoricalRates(a,t)}},{key:"toBase",value:function(e,a){return e*(1/a)}},{key:"toQuote",value:function(e,a){return e*a}},{key:"convert",value:function(e,a,t){var n=parseFloat(e);return Number.isNaN(n)?"":t(n,a).toFixed(3)}},{key:"render",value:function(){var e=this.state,a=e.rate,t=e.baseAcronym,n=e.baseValue,o=e.quoteAcronym,l=e.quoteValue,c=e.loading,s=Object.keys(g).map(function(e){return r.a.createElement("option",{key:e,value:e},e)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center p-3"},r.a.createElement("h2",{className:"mb-2"},"Currency Converter"),r.a.createElement("h4",null,"1 ",t," to 1 ",o," = ",a.toFixed(4)," ",g[o].name)),r.a.createElement("form",{className:"form-row p-3 mb-4 bg-light justify-content-center"},r.a.createElement("div",{className:"form-group col-md-5 mb-0"},r.a.createElement("select",{value:t,onChange:this.changeBaseAcronym,className:"form-control form-control-lg mb-2",disabled:c},s),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},g[t].symbol)),r.a.createElement("input",{id:"base",className:"form-control form-control-lg",value:n,onChange:this.changeBaseValue,type:"number"})),r.a.createElement("small",{className:"text-secondary"},g[t].name)),r.a.createElement("div",{className:"col-md-2 py-3 d-flex justify-content-center align-items-center"},r.a.createElement("h3",null,"=")),r.a.createElement("div",{className:"form-group col-md-5 mb-0"},r.a.createElement("select",{value:o,onChange:this.changeQuoteAcronym,className:"form-control form-control-lg mb-2",disabled:c},s),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},g[o].symbol)),r.a.createElement("input",{id:"quote",className:"form-control form-control-lg",value:l,onChange:this.changeQuoteValue,type:"number"})),r.a.createElement("small",{className:"text-secondary"},g[o].name))),r.a.createElement("canvas",{ref:this.chartRef}))}}]),a}(r.a.Component),w=(t(36),function(){return r.a.createElement(c.a,{basename:"/exchange-rate-site"},r.a.createElement(m,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:v}),r.a.createElement(s.a,{path:"/currencyconverter",component:k}),r.a.createElement(s.a,{render:function(){return r.a.createElement("h1",null,"404 Not found")}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.0052306e.chunk.js.map