(this.webpackJsonpcurrency_course=this.webpackJsonpcurrency_course||[]).push([[0],{19:function(e,r,n){e.exports={blockCourse:"CurrentlyCurrencyCourse_blockCourse___5dwR",blockCurrentlyCourse:"CurrentlyCurrencyCourse_blockCurrentlyCourse__3Xi7K",blockText:"CurrentlyCurrencyCourse_blockText__3xIlG"}},20:function(e,r,n){e.exports={app:"MainApp_app__2YCjs",currentlyCurrency:"MainApp_currentlyCurrency__37GDb",convertCurrency:"MainApp_convertCurrency__HGtqD",chartCurrency:"MainApp_chartCurrency__2dKCO"}},222:function(e,r,n){"use strict";n.r(r);var t=n(0),c=n.n(t),u=n(31),a=n.n(u),o=(n(97),n(98),n(18)),s=n(19),i=n.n(s),l=n(8),C=n.n(l),d=n(3),y=n(11),f=n.n(y),p=n(32),m=n(89),b=n(77),E=n(78).create({baseURL:"http://www.nbrb.by/api/exrates/"}),_=function(e){return E.get("rates/".concat(e))},v=function(e,r,n){return E.get("rates/Dynamics/".concat(e,"?startDate=").concat(r,"&endDate=").concat(n))},D=function(e,r,n,t,c){return((e*r*c).toFixed(2)/(n*t).toFixed(2)).toFixed(2)};function I(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?I(n,!0).forEach((function(r){Object(b.a)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var O={currencies:[{currencyId:145,currencyAbbreviation:"",currencyName:""}],currenciesCourses:[{currencyId:145,scale:0,course:0,date:""}],currencyCourseToPeriod:[{currencyId:145,course:0,date:""},{currencyId:145,course:1,date:""}],selectedCurrencyId:145,selectedCurrencyUpId:145,selectedCurrencyDownId:145,amountCurrencyUp:1,amountCurrencyDown:1,startDate:"",endDate:""},g=function(e){return{type:"GET_CURRENCY_COURSE",dataCurrency:e}},w=function(e,r){return{type:"GET_CURRENCY_COURSE_TO_PERIOD",id:e,dataCurrencyToPeriod:r}},k=function(e){return{type:"SET_SELECTED_CURRENCY",id:e}},U=function(e){return{type:"SET_SELECTED_CURRENCY_UP",id:e}},T=function(e){return{type:"SET_SELECTED_CURRENCY_DOWN",id:e}},R=function(e,r){return{type:"SET_AMOUNT_CURRENCY",amountUp:e,amountDown:r}},N=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0;return function(){var u=Object(p.a)(f.a.mark((function u(a,o){var s;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,_(e);case 3:200===(s=u.sent).status&&(a(g(s.data)),""===r?a(k(e)):"up"===r?(a(U(e)),x(a,o().currenciesCourses.currenciesCourses,r,n,e,c)):"down"===r&&(a(T(e)),x(a,o().currenciesCourses.currenciesCourses,r,n,t,e))),u.next=9;break;case 7:u.prev=7,u.t0=u.catch(0);case 9:case"end":return u.stop()}}),u,null,[[0,7]])})));return function(e,r){return u.apply(this,arguments)}}()},S=function(e,r,n){return function(){var t=Object(p.a)(f.a.mark((function t(c){var u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e,r,n);case 3:200===(u=t.sent).status&&c(w(e,u.data)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,r,n,t,c,u){var a=+r.find((function(e){return e.currencyId===+c})).scale,o=+r.find((function(e){return e.currencyId===+c})).course,s=+r.find((function(e){return e.currencyId===+u})).scale,i=+r.find((function(e){return e.currencyId===+u})).course;if("up"===n){var l=D(+t,o,i,a,s);c===u&&(l=t),e(R(+t,+l))}else{var C=D(+t,i,o,s,a);c===u&&(C=t),e(R(+C,+t))}},P=n(79),j=n.n(P),A=function(e){return c.a.createElement("select",{defaultValue:e.selectedCurrencyId,className:j.a.select,onChange:function(r){return e.changeCurrency(r)},onBlur:function(r){return e.changeCurrency(r)}},e.currencies.map((function(e){return c.a.createElement("option",{key:e.currencyId,value:e.currencyId},e.currencyAbbreviation)})))},Y=function(e){return c.a.createElement("input",{type:"number",min:"0",value:e.amountCurrency,onChange:function(r){return e.changeAmountCurrency(r,"up",e.selectedCurrencyUpId,e.selectedCurrencyDownId)}})},L=Object(d.b)((function(e){return{currencies:e.currenciesCourses.currencies,currenciesCourses:e.currenciesCourses.currenciesCourses,selectedCurrencyId:e.currenciesCourses.selectedCurrencyId,startDate:e.currenciesCourses.startDate,endDate:e.currenciesCourses.endDate}}),{setCurrencies:function(){return function(){var e=Object(p.a)(f.a.mark((function e(r){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("currencies");case 3:200===(n=e.sent).status&&(t=n.data.filter((function(e){return new Date(e.Cur_DateEnd)>new Date})),r({type:"GET_CURRENCIES",dataCurrencies:t})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},setCurrencyCourse:N,getCurrencyCourseToPeriod:S})((function(e){var r=Object(t.useState)(!1),n=Object(o.a)(r,2),u=n[0],a=n[1];Object(t.useEffect)((function(){e.setCurrencies(),e.setCurrencyCourse(145)}),[e.currencies.length]),Object(t.useEffect)((function(){e.getCurrencyCourseToPeriod(e.selectedCurrencyId,e.startDate,e.endDate)}),[e.selectedCurrencyId]);var s=e.currenciesCourses.find((function(r){return r.currencyId===+e.selectedCurrencyId})).course,l=e.currenciesCourses.find((function(r){return r.currencyId===+e.selectedCurrencyId})).scale,d=e.currencies.find((function(r){return r.currencyId===+e.selectedCurrencyId})).currencyAbbreviation;return c.a.createElement("div",null,c.a.createElement("div",{className:C()(i.a.blockCourse,i.a.blockText)},c.a.createElement("div",null,"CURRENCY"),c.a.createElement("div",null,"COURSE"),u&&c.a.createElement(A,{currencies:e.currencies,selectedCurrencyId:e.selectedCurrencyId,changeCurrency:function(r){return function(r){a(!1),e.setCurrencyCourse(r.currentTarget.value)}(r)}})||c.a.createElement("div",{className:i.a.blockCurrentlyCourse,onClick:function(){return a(!0)}},"".concat(d," (").concat(l,")")),c.a.createElement("div",{className:i.a.blockCurrentlyCourse},s)))})),M=n(4),G=n.n(M),F=Object(d.b)((function(e){return{currencies:e.currenciesCourses.currencies,currenciesCourses:e.currenciesCourses.currenciesCourses,selectedCurrencyUpId:e.currenciesCourses.selectedCurrencyUpId,selectedCurrencyDownId:e.currenciesCourses.selectedCurrencyDownId,amountCurrencyUp:e.currenciesCourses.amountCurrencyUp,amountCurrencyDown:e.currenciesCourses.amountCurrencyDown}}),{setCurrencyCourse:N,setAmountCurrency:function(e,r,n,t){return function(c,u){x(c,u().currenciesCourses.currenciesCourses,e,r,n,t)}}})((function(e){var r=Object(t.useState)(!1),n=Object(o.a)(r,2),u=n[0],a=n[1],s=Object(t.useState)(!1),i=Object(o.a)(s,2),l=i[0],d=i[1],y=e.currencies.find((function(r){return r.currencyId===+e.selectedCurrencyUpId})).currencyAbbreviation,f=e.currencies.find((function(r){return r.currencyId===+e.selectedCurrencyDownId})).currencyAbbreviation,p=e.currenciesCourses.find((function(r){return r.currencyId===+e.selectedCurrencyUpId})).scale,m=e.currenciesCourses.find((function(r){return r.currencyId===+e.selectedCurrencyDownId})).scale,b=function(r,n,t,c){e.setAmountCurrency(n,+r.currentTarget.value,t,c)};return c.a.createElement("div",null,c.a.createElement("div",{className:C()(G.a.blockText,G.a.blockConvertCurrency)},c.a.createElement("div",{className:C()(G.a.textConvert)},"CONVERT CURRENCY"),c.a.createElement("div",{className:C()(G.a.currencyUp)},u&&c.a.createElement(A,{currencies:e.currencies,selectedCurrencyId:e.selectedCurrencyUpId,changeCurrency:function(r){return function(r){a(!1),e.setCurrencyCourse(r.currentTarget.value,"up",e.amountCurrencyUp,e.selectedCurrencyUpId,e.selectedCurrencyDownId)}(r)}})||c.a.createElement("div",{className:G.a.blockCurrentlyCourseText,onClick:function(){return a(!0)}},"".concat(y," (").concat(p,")"))),c.a.createElement("div",{className:C()(G.a.countUp)},c.a.createElement(Y,{amountCurrency:e.amountCurrencyUp,selectedCurrencyUpId:e.selectedCurrencyUpId,selectedCurrencyDownId:e.selectedCurrencyDownId,changeAmountCurrency:function(r){return b(r,"up",e.selectedCurrencyUpId,e.selectedCurrencyDownId)}})),c.a.createElement("div",{className:C()(G.a.currencyDown)},l&&c.a.createElement(A,{currencies:e.currencies,selectedCurrencyId:e.selectedCurrencyDownId,changeCurrency:function(r){return function(r){d(!1),e.setCurrencyCourse(r.currentTarget.value,"down",e.amountCurrencyDown,e.selectedCurrencyUpId,e.selectedCurrencyDownId)}(r)}})||c.a.createElement("div",{className:G.a.blockCurrentlyCourseText,onClick:function(){return d(!0)}},"".concat(f," (").concat(m,")"))),c.a.createElement("div",{className:C()(G.a.countDown)},c.a.createElement(Y,{amountCurrency:e.amountCurrencyDown,selectedCurrencyUpId:e.selectedCurrencyUpId,selectedCurrencyDownId:e.selectedCurrencyDownId,changeAmountCurrency:function(r){return b(r,"down",e.selectedCurrencyUpId,e.selectedCurrencyDownId)}}))))})),B=n(80),J=n(82),z=n(83),V=n(90),W=n(84),q=n(17),K=n(91),X=n(85),H=n.n(X),$=n(48),Q=n.n($),Z=(n(221),n(86)),ee=n.n(Z),re=function(e){function r(e){var n;return Object(J.a)(this,r),(n=Object(V.a)(this,Object(W.a)(r).call(this,e))).handleDayClick=n.handleDayClick.bind(Object(q.a)(n)),n.handleResetClick=n.handleResetClick.bind(Object(q.a)(n)),n.state=n.getInitialState(),n}return Object(K.a)(r,e),Object(z.a)(r,[{key:"getInitialState",value:function(){return{from:void 0,to:void 0}}},{key:"handleDayClick",value:function(e){var r=$.DateUtils.addDayToRange(e,this.state);if(this.setState(r),r.from&&r.to){var n=new Date(r.from),t=new Date(r.to),c="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate()),u="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate());this.props.setPeriod(c,u),this.props.getCurrencyCourseToPeriod(this.props.selectedCurrencyId,c,u)}}},{key:"handleResetClick",value:function(){this.setState(this.getInitialState())}},{key:"render",value:function(){var e=this.state,r=e.from,n=e.to,t={start:r,end:n};return c.a.createElement("div",{className:ee.a.period},c.a.createElement("p",null,!r&&!n&&"Please select the first day.",r&&!n&&"Please select the last day.",r&&n&&"Selected from ".concat(r.toLocaleDateString()," to\n                ").concat(n.toLocaleDateString())," ",r&&n&&c.a.createElement("button",{className:"link",onClick:this.handleResetClick},"Reset")),c.a.createElement(Q.a,{className:"Selectable",numberOfMonths:this.props.numberOfMonths,selectedDays:[r,{from:r,to:n}],modifiers:t,onDayClick:this.handleDayClick}),c.a.createElement(H.a,null,c.a.createElement("style",null,"\n  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    background-color: #f0f8ff !important;\n    color: #4a90e2;\n  }\n  .Selectable .DayPicker-Day {\n    border-radius: 0 !important;\n  }\n  .Selectable .DayPicker-Day--start {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .Selectable .DayPicker-Day--end {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .Selectable {\n    color: #ffffff;\n  }\n")))}}]),r}(c.a.Component);re.defaultProps={numberOfMonths:3};var ne=Object(d.b)((function(e){return{selectedCurrencyId:e.currenciesCourses.selectedCurrencyId}}),{getCurrencyCourseToPeriod:S,setPeriod:function(e,r){return function(n){n(function(e,r){return{type:"SET_PERIOD",startDate:e,endDate:r}}(e,r))}}})(re),te=n(87),ce=n.n(te),ue={title:{display:!0,text:"Currency course",fontFamily:"a_LCDNova",fontColor:"rgb(255, 255, 255, 1)",fontSize:26},legend:{labels:{fontFamily:"a_LCDNova",fontColor:"rgb(255, 255, 255, 1)",fontSize:15}},animation:{duration:3e3},scales:{xAxes:[{gridLines:{color:"rgb(255, 255, 255, 0.3)"},ticks:{fontColor:"rgb(255, 255, 255, 1)"}}],yAxes:[{gridLines:{color:"rgb(255, 255, 255, 0.3)"},ticks:{fontColor:"rgb(255, 255, 255, 1)"}}]}},ae=Object(d.b)((function(e){return{currencyCourseToPeriod:e.currenciesCourses.currencyCourseToPeriod}}),null)((function(e){return c.a.createElement("div",null,c.a.createElement(B.a,{data:(r=e.currencyCourseToPeriod,{labels:r.map((function(e){return e.date})),datasets:[{label:"Currency course",borderColor:"rgb(255, 255, 255, 1)",backgroundColor:"rgb(255, 255, 255, 0.1)",data:r.map((function(e){return e.course}))}]}),options:ue,width:"300",height:"100"}),c.a.createElement("div",{className:ce.a.period},c.a.createElement(ne,null)));var r})),oe=n(20),se=n.n(oe),ie=function(e){return c.a.createElement("div",{className:se.a.app},c.a.createElement("div",{className:se.a.currentlyCurrency},c.a.createElement(L,null)),c.a.createElement("div",{className:se.a.convertCurrency},c.a.createElement(F,null)),c.a.createElement("div",{className:se.a.chartCurrency},c.a.createElement(ae,null)))},le=n(10),Ce=n(88),de=Object(le.c)({currenciesCourses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"GET_CURRENCIES":return h({},e,{currencies:r.dataCurrencies.map((function(e){return{currencyId:e.Cur_ID,currencyAbbreviation:e.Cur_Abbreviation,currencyName:e.Cur_Name_Eng}}))});case"GET_CURRENCY_COURSE":return h({},e,{currenciesCourses:[].concat(Object(m.a)(e.currenciesCourses),[{currencyId:r.dataCurrency.Cur_ID,scale:r.dataCurrency.Cur_Scale,course:r.dataCurrency.Cur_OfficialRate,date:r.dataCurrency.Date}]).filter((function(e){return e.course>0}))});case"SET_SELECTED_CURRENCY":return h({},e,{selectedCurrencyId:r.id});case"SET_SELECTED_CURRENCY_UP":return h({},e,{selectedCurrencyUpId:r.id});case"SET_SELECTED_CURRENCY_DOWN":return h({},e,{selectedCurrencyDownId:r.id});case"SET_AMOUNT_CURRENCY":return h({},e,{amountCurrencyUp:r.amountUp,amountCurrencyDown:r.amountDown});case"GET_CURRENCY_COURSE_TO_PERIOD":return h({},e,{currencyCourseToPeriod:r.dataCurrencyToPeriod.map((function(e){return{currencyId:e.Cur_ID,course:e.Cur_OfficialRate,date:e.Date.slice(0,10)}}))});case"SET_PERIOD":return h({},e,{startDate:r.startDate,endDate:r.endDate});default:return e}}}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,fe=Object(le.e)(de,ye(Object(le.a)(Ce.a)));var pe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,{store:fe},c.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,r,n){e.exports={blockConvertCurrency:"ConvertCurrency_blockConvertCurrency__VbE0a",textConvert:"ConvertCurrency_textConvert__3BJUq",currencyUp:"ConvertCurrency_currencyUp__1xC5F",countUp:"ConvertCurrency_countUp__YK9dJ",currencyDown:"ConvertCurrency_currencyDown__30qtN",countDown:"ConvertCurrency_countDown__20IBu",blockText:"ConvertCurrency_blockText__3HmMz",blockCurrentlyCourseText:"ConvertCurrency_blockCurrentlyCourseText__32vu1"}},79:function(e,r,n){e.exports={select:"CommonComponents_select__1owSI"}},86:function(e,r,n){e.exports={period:"Period_period__25Mpy"}},87:function(e,r,n){e.exports={period:"ChartCurrency_period__2BJhz"}},92:function(e,r,n){e.exports=n(222)},97:function(e,r,n){},98:function(e,r,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.e3f02373.chunk.js.map