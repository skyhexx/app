(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-46ec"],{39:function(t,e){},"61g/":function(t,e,n){},"8xqQ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TrustAuction=void 0;var r=c(n("14Xm")),i=c(n("D3Ub")),s=c(n("iCc5")),a=c(n("V7oC")),u=n("ewEw");n("kB5k");function c(t){return t&&t.__esModule?t:{default:t}}var o=n("jzF0").Conflux,d=n("LAvi"),l=n("FHO2"),f=e.TrustAuction=function(){function t(){(0,s.default)(this,t),this.conflux=window.confluxJS,this.confluxReader=new o({url:u.confluxProvider,defaultGasPrice:100,defaultGas:2e6}),this.auctionReader=this.confluxReader.Contract({abi:l,address:u.trustAuctionAddress}),this.auctionWriter=this.conflux.Contract({abi:l,address:u.trustAuctionAddress})}var e,n,c,f,h,p,v,A,w,g,x,_,b;return(0,a.default)(t,[{key:"getUserCreateAuctionCount",value:(b=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionCount(e,n).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return b.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(_=(0,i.default)(r.default.mark((function t(e,n,i){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionById(e,n,i).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return _.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(x=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionCount(e,n).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return x.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(g=(0,i.default)(r.default.mark((function t(e,n,i){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionById(e,n,i).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return g.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(w=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.hash(n),t.next=3,this.awaitWraper(this.auctionReader.auctionId(e,i).call());case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return w.apply(this,arguments)})},{key:"getAuctionIndex",value:(A=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.hash(n),t.next=3,this.awaitWraper(this.auctionReader.getAuctionIndex(e,i).call());case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return A.apply(this,arguments)})},{key:"getAuctionCount",value:(v=(0,i.default)(r.default.mark((function t(e){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getAuctionCount(e).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"getAuctionByIndex",value:(p=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.awaitWraper(this.auctionReader.getAuctionByIndex(e,n).call());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return p.apply(this,arguments)})},{key:"getAuctionByDomain",value:(h=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.hash(n),t.next=3,this.auctionReader.getAuctionByTokenId(e,i).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return h.apply(this,arguments)})},{key:"createAuction",value:(f=(0,i.default)(r.default.mark((function t(e,n,i,s){var a;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.hash(n),t.next=3,this.auctionWriter.createAuction(e,a,i,s).sendTransaction({from:this.conflux.defaultAccount}).confirmed();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r){return f.apply(this,arguments)})},{key:"bidAuction",value:(c=(0,i.default)(r.default.mark((function t(e,n,i){var s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=d.hash(n),t.next=3,this.auctionWriter.bidAuction(e,s,i).sendTransaction({from:this.conflux.defaultAccount}).confirmed();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return c.apply(this,arguments)})},{key:"finishAuction",value:(n=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.hash(n),t.next=3,this.auctionWriter.finishAuction(e,i).sendTransaction({from:this.conflux.defaultAccount}).confirmed();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"closeAuction",value:(e=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d.hash(n),t.next=3,this.auctionWriter.closeAuction(e,i).sendTransaction({from:this.conflux.defaultAccount}).confirmed();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"awaitWraper",value:function(t){return t.then((function(t){return t})).catch((function(t){return t}))}}]),t}();e.default=f},A0Vb:function(t,e,n){"use strict";n.r(e);var r=n("sMoi"),i=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e.default=i.a},An3H:function(t,e,n){"use strict";n.r(e);var r=n("rnHH"),i=n("A0Vb");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("IjIV");var a=n("KHd+"),u=Object(a.a)(i.default,r.a,r.b,!1,null,"709c9c49",null);u.options.__file="my_auction.vue",e.default=u.exports},IjIV:function(t,e,n){"use strict";var r=n("61g/");n.n(r).a},P20i:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TrustAuctionService=void 0;var r=d(n("14Xm")),i=d(n("D3Ub")),s=d(n("iCc5")),a=d(n("V7oC")),u=d(n("meUc")),c=n("ewEw"),o=n("kB5k");function d(t){return t&&t.__esModule?t:{default:t}}n("jzF0").Conflux;var l=n("LAvi"),f=n("FHO2"),h=e.TrustAuctionService=function(){function t(e,n){if((0,s.default)(this,t),this.web3=new u.default(window.detectProvider),"BNB"==n?this.web3Reader=new u.default(new u.default.providers.HttpProvider(c.bnbProvider)):"ETH"==n&&(this.web3Reader=new u.default(new u.default.providers.HttpProvider(c.ethProvider))),""!=e)this.account=e;else{var r=this;this.web3.eth.getAccounts((function(t,e){r.account=e[0]}))}this.auctionWriter=new this.web3.eth.Contract(f,c.bnbAuctionAddress),this.auctionReader=new this.web3.eth.Contract(f,c.bnbAuctionAddress),this.defaultGasPrice=2e10}var e,n,d,h,p,v,A,w,g,x,_,b,m;return(0,a.default)(t,[{key:"getUserCreateAuctionCount",value:(m=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserCreateAuctionCount(e,n).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return m.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(b=(0,i.default)(r.default.mark((function t(e,n,i){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserCreateAuctionById(e,n,i).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return b.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(_=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserBiddedAuctionCount(e,n).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return _.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(x=(0,i.default)(r.default.mark((function t(e,n,i){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserBiddedAuctionById(e,n,i).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return x.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(g=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=l.hash(n),t.next=3,this.auctionReader.methods.auctionId(e,i).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return g.apply(this,arguments)})},{key:"getAuctionIndex",value:(w=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=l.hash(n),t.next=3,this.auctionReader.methods.getAuctionIndex(e,i).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return w.apply(this,arguments)})},{key:"getAuctionCount",value:(A=(0,i.default)(r.default.mark((function t(e){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getAuctionCount(e).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return A.apply(this,arguments)})},{key:"getAuctionByIndex",value:(v=(0,i.default)(r.default.mark((function t(e,n){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getAuctionByIndex(e,n).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return v.apply(this,arguments)})},{key:"getAuctionByDomain",value:(p=(0,i.default)(r.default.mark((function t(e,n){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=l.hash(n),t.next=3,this.auctionReader.methods.getAuctionByTokenId(e,i).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return p.apply(this,arguments)})},{key:"createAuction",value:(h=(0,i.default)(r.default.mark((function t(e,n,i,s,a){var u,d,f,h;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=l.hash(n),console.log(e),console.log(u),console.log(i/1),console.log(s),d=this.auctionWriter.methods.createAuction(e,u,new o.BigNumber(i),s),t.next=8,d.estimateGas({value:0,from:this.account,to:c.bnbAuctionAddress});case 8:return f=t.sent,h=this.defaultGasPrice,t.abrupt("return",d.send({from:this.account,gasPrice:h,gas:Math.round(1.1*f)},a));case 11:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r,i){return h.apply(this,arguments)})},{key:"bidAuction",value:(d=(0,i.default)(r.default.mark((function t(e,n,i,s){var a,u,o,d;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.hash(n),u=this.auctionWriter.methods.bidAuction(e,a,i),t.next=4,u.estimateGas({value:0,from:this.account,to:c.bnbAuctionAddress});case 4:return o=t.sent,d=this.defaultGasPrice,t.abrupt("return",u.send({from:this.account,gasPrice:d,gas:Math.round(1.2*o)},s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e,n,r){return d.apply(this,arguments)})},{key:"finishAuction",value:(n=(0,i.default)(r.default.mark((function t(e,n,i){var s,a,u,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=l.hash(n),a=this.auctionWriter.methods.bidAuction(e,s),console.log(a),t.next=5,a.estimateGas({value:0,from:this.account,to:c.bnbAuctionAddress});case 5:return u=t.sent,o=this.defaultGasPrice,t.abrupt("return",a.send({from:this.account,gasPrice:o,gas:Math.round(1.1*u)},i));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return n.apply(this,arguments)})},{key:"closeAuction",value:(e=(0,i.default)(r.default.mark((function t(e,n,i){var s,a,u,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=l.hash(n),a=this.auctionWriter.methods.closeAuction(e,s),t.next=4,a.estimateGas({value:0,from:this.account,to:c.bnbAuctionAddress});case 4:return u=t.sent,o=this.defaultGasPrice,t.abrupt("return",a.send({from:this.account,gasPrice:o,gas:Math.round(1.1*u)},i));case 7:case"end":return t.stop()}}),t,this)}))),function(t,n,r){return e.apply(this,arguments)})},{key:"awaitWraper",value:function(t){return t.then((function(t){return t})).catch((function(t){return t}))}}]),t}();e.default=h},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",c="year",o="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:s,d:i,D:o,h:r,m:n,s:e,ms:t,Q:u}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",A={};A[v]=f;var w=function(t){return t instanceof b},g=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)A[t]&&(r=t),e&&(A[t]=e,r=t);else{var i=t.name;A[i]=t,r=i}return!n&&r&&(v=r),r||!n&&v},x=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},_=p;_.l=g,_.i=w,_.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function f(t){this.$L=g(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return _},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return x(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<x(t)},h.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var d=this,l=!!_.u(u)||u,f=_.p(t),h=function(t,e){var n=_.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(i)},p=function(t,e){return _.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},v=this.$W,A=this.$M,w=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case c:return l?h(1,0):h(31,11);case a:return l?h(1,A):h(0,A+1);case s:var x=this.$locale().weekStart||0,b=(v<x?v+7:v)-x;return h(l?w-b:w+(6-b),A);case i:case o:return p(g+"Hours",0);case r:return p(g+"Minutes",1);case n:return p(g+"Seconds",2);case e:return p(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,u){var d,l=_.p(s),f="set"+(this.$u?"UTC":""),h=(d={},d[i]=f+"Date",d[o]=f+"Date",d[a]=f+"Month",d[c]=f+"FullYear",d[r]=f+"Hours",d[n]=f+"Minutes",d[e]=f+"Seconds",d[t]=f+"Milliseconds",d)[l],p=l===i?this.$D+(u-this.$W):u;if(l===a||l===c){var v=this.clone().set(o,1);v.$d[h](p),v.init(),this.$d=v.set(o,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[_.p(t)]()},h.add=function(t,u){var o,d=this;t=Number(t);var l=_.p(u),f=function(e){var n=x(d);return _.w(n.date(n.date()+Math.round(e*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===i)return f(1);if(l===s)return f(7);var h=(o={},o[n]=6e4,o[r]=36e5,o[e]=1e3,o)[l]||1,p=this.$d.getTime()+t*h;return _.w(p,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=_.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,c=i.weekdays,o=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return _.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:_.s(u+1,2,"0"),MMM:d(i.monthsShort,u,o,3),MMMM:d(o,u),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,c,2),ddd:d(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:_.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||p[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,o,d){var l,f=_.p(o),h=x(t),p=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,A=_.m(this,h);return A=(l={},l[c]=A/12,l[a]=A,l[u]=A/3,l[s]=(v-p)/6048e5,l[i]=(v-p)/864e5,l[r]=v/36e5,l[n]=v/6e4,l[e]=v/1e3,l)[f]||v,d?A:_.a(A)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return A[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return _.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),m=b.prototype;return x.prototype=m,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",c],["$D",o]].forEach((function(t){m[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t(e,b,x),x},x.locale=g,x.isDayjs=w,x.unix=function(t){return x(1e3*t)},x.en=A[v],x.Ls=A,x.p={},x}()},rnHH:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"my-auction"},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app.myAuction")))]),t._v(" "),n("div",{staticClass:"total"})]),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("div",[n("div",{staticClass:"auction-container"},[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:t.$t("auction.mySelling"),name:"first"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.$t("auction.bidder")))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(t.$t("auction.currentPrice")))]),t._v(" "),n("div",{staticClass:"expires"},[t._v(t._s(t.$t("auction.endTime")))]),t._v(" "),n("div",{staticClass:"status"},[t._v(t._s(t.$t("auction.status")))]),t._v(" "),n("div",{staticClass:"operate"},[t._v(t._s(t.$t("auction.operate")))])]),t._v(" "),t._l(t.createdAuctions,(function(e){return t.createdAuctionCount>0?n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"uri"},[t._v(t._s(e.tokenURI))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s("0x0000000000000000000000000000000000000000"==e.bidder?"------":t.subAddress(e.bidder)))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(e.price)+" $")]),t._v(" "),n("div",{staticClass:"expires",class:{endClass:e.isEnd&&0==e.status}},[t._v(t._s(t.timeToDate(e.expires)))]),t._v(" "),n("div",{staticClass:"status"},[0==e.status&&"0x0000000000000000000000000000000000000000"!=e.bidder?n("span",{staticClass:"atAuction"},[e.isEnd||e.isWinner?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))]),t._v(" "),e.isEnd?n("span",[t._v(t._s(t.$t("auction.shouldPay")))]):t._e()]):t._e(),t._v(" "),0==e.status&&"0x0000000000000000000000000000000000000000"==e.bidder?n("span",{staticClass:"atAuction"},[e.isEnd?n("span",[t._v(t._s(t.$t("auction.shouldClose")))]):t._e(),t._v(" "),e.isEnd?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))])]):t._e(),t._v(" "),1==e.status?n("span",{staticClass:"sold"},[t._v(t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==e.status?n("span",{staticClass:"closed"},[t._v(t._s(t.$t("app.closed")))]):t._e()]),t._v(" "),n("div",{staticClass:"operate",staticStyle:{cursor:"pointer"},on:{click:function(n){t.naviAuction(e.tokenURI)}}},[t._v("\n              "+t._s(t.$t("auction.detail"))+"\n            ")])]):t._e()})),t._v(" "),0==t.createdAuctionCount?n("div",{staticClass:"no-data"},[n("span",[t._v(t._s(t.$t("auction.youDontHaveSelling")))])]):t._e(),t._v(" "),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.createdAuctionCount},on:{"current-change":t.handleCreatedAuctionChange}})],2),t._v(" "),n("el-tab-pane",{attrs:{label:t.$t("auction.myBidding"),name:"second"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.$t("auction.bidder")))]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(t.$t("auction.currentPrice")))]),t._v(" "),n("div",{staticClass:"expires"},[t._v(t._s(t.$t("auction.endTime")))]),t._v(" "),n("div",{staticClass:"status"},[t._v(t._s(t.$t("auction.status")))]),t._v(" "),n("div",{staticClass:"operate"},[t._v(t._s(t.$t("auction.operate")))])]),t._v(" "),t._l(t.biddedAuctions,(function(e){return t.biddedAuctionCount>0?n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"uri"},[t._v(t._s(e.tokenURI))]),t._v(" "),n("div",{staticClass:"bidder"},[t._v(t._s(t.subAddress(e.bidder))+"\n              "),e.isWinner&&0==e.status&&e.isEnd?n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionWinner")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"winner"},slot:"reference"})],1)],1):t._e(),t._v(" "),e.isWinner&&0==e.status&&!e.isEnd?n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionHighBidder")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"first"},slot:"reference"})],1)],1):t._e(),t._v(" "),e.isWinner||0!=e.status||e.isEnd?t._e():n("i",{staticStyle:{width:"20px",height:"20px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionSecond")}},[n("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{slot:"reference","icon-class":"second"},slot:"reference"})],1)],1)]),t._v(" "),n("div",{staticClass:"price"},[t._v(t._s(e.price)+" $")]),t._v(" "),n("div",{staticClass:"expires",class:{endClass:e.isEnd&&0==e.status}},[t._v(t._s(t.timeToDate(e.expires)))]),t._v(" "),n("div",{staticClass:"status"},[0==e.status?n("span",{staticClass:"atAuction"},[e.isEnd?t._e():n("span",[t._v(t._s(t.$t("app.atAuction")))]),t._v(" "),e.isEnd&&e.isWinner?n("span",[t._v(t._s(t.$t("auction.shouldPay")))]):t._e(),t._v(" "),e.isEnd&&!e.isWinner?n("span",[t._v(t._s(t.$t("auction.finished")))]):t._e()]):t._e(),t._v(" "),1==e.status?n("span",{staticClass:"sold"},[t._v(t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==e.status?n("span",{staticClass:"closed"},[t._v(t._s(t.$t("app.closed")))]):t._e()]),t._v(" "),n("div",{staticClass:"operate",staticStyle:{cursor:"pointer"},on:{click:function(n){t.naviAuction(e.tokenURI)}}},[t._v("\n              "+t._s(t.$t("auction.detail"))+"\n            ")])]):t._e()})),t._v(" "),0==t.biddedAuctionCount?n("div",{staticClass:"no-data"},[n("span",[t._v(t._s(t.$t("auction.youDontHaveBidding")))])]):t._e(),t._v(" "),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.biddedAuctionCount},on:{"current-change":t.handleBiddedAuctionChange}})],2)],1)],1)])])},i=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},sMoi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=h(n("4d7F")),i=h(n("14Xm")),s=h(n("D3Ub")),a=h(n("Wgwc")),u=h(n("0dc3")),c=h(n("8xqQ")),o=n("ewEw"),d=h(n("YgiN")),l=h(n("P20i")),f=h(n("uQfT"));function h(t){return t&&t.__esModule?t:{default:t}}var p,v,A,w,g,x,_,b,m=n("zGU6").toChecksumAddress;e.default={data:function(){return{activeName:"first",cns:null,trustAuction:null,tns:null,trustAuctionService:null,createdAuctionCount:0,createdAuctions:[],biddedAuctionCount:0,biddedAuctions:[],pageSize:10,endTime:"1603967637"}},computed:{web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==u.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},chainChanged:function(){return this.$store.state.web3.chainType}},created:function(){},mounted:(b=(0,s.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),watch:{createdAuctionCount:function(){this.handleCreatedAuctionChange(1)},biddedAuctionCount:function(){this.handleBiddedAuctionChange(1)},chainChanged:function(){console.log("isConflux changed"),this.$nextTick((function(){this.init()}))}},methods:{init:(_=(0,s.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,this.$nextTick((function(){e.isConflux?(e.cns=new d.default,e.trustAuction=new c.default,e.loadCreatedAuctionCount(),e.loadBiddedAuctionCount()):(f.default,e.tns=new f.default(e.web3Account,e.chainType),e.trustAuctionService=new l.default(e.web3Account,e.chainType),e.loadCreatedAuctionCount(),e.loadBiddedAuctionCount())}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),handleCreatedAuctionChange:function(t){var e=this.createdAuctionCount-(t-1)*this.pageSize,n=this.createdAuctionCount-t*this.pageSize+1;n<1&&(n=1),this.isConflux?this.loadCreatedAuction(e,n):this.loadWeb3CreatedAuction(e,n)},handleBiddedAuctionChange:function(t){var e=this.biddedAuctionCount-(t-1)*this.pageSize,n=this.biddedAuctionCount-t*this.pageSize+1;n<1&&(n=1),this.isConflux?this.loadBiddedAuction(e,n):this.loadWeb3BiddedAuction(e,n)},loadWeb3CreatedAuction:(x=(0,s.default)(i.default.mark((function t(e,n){var a,u,c,d,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),a=[],u=e;u>=n;u--)a.push(u);return console.log(a),c=this,d=a.map(function(){var t=(0,s.default)(i.default.mark((function t(e){var n,r,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.trustAuctionService.getUserCreateAuctionById(o.bnbTokenAddress,l.web3Account,e);case 2:return n=t.sent,(r={}).id=n.id/1,t.next=7,c.tns.tokenURI(n.tokenId);case 7:return r.tokenURI=t.sent,r.bidder=n.bidder,s=n.price/Math.pow(10,18),r.price=s.toFixed(2),r.expires=1e3*n.expiresAt,r.expires<(new Date).getTime()?r.isEnd=!0:r.isEnd=!1,console.log(r.isEnd),r.status=n.status/1,r.expires<0&&(r.expires=0),t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,l)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,r.default.all(d).then((function(t){c.createdAuctions=t,c.closeLoading()}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return x.apply(this,arguments)}),loadCreatedAuction:(g=(0,s.default)(i.default.mark((function t(e,n){var a,u,c,d,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),a=[],u=e;u>=n;u--)a.push(u);return console.log(a),c=this,d=a.map(function(){var t=(0,s.default)(i.default.mark((function t(e){var n,r,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.trustAuction.getUserCreateAuctionById(o.tokenAddress,l.web3Account,e);case 2:return n=t.sent,(r={}).id=n.id/1,t.next=7,c.cns.tokenURI(n.tokenId);case 7:return r.tokenURI=t.sent,r.bidder=n.bidder,s=n.price/Math.pow(10,18),r.price=s.toFixed(2),r.expires=1e3*n.expiresAt,r.expires<(new Date).getTime()?r.isEnd=!0:r.isEnd=!1,console.log(r.isEnd),r.status=n.status/1,r.expires<0&&(r.expires=0),t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,l)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,r.default.all(d).then((function(t){c.createdAuctions=t,c.closeLoading()}));case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return g.apply(this,arguments)}),loadWeb3BiddedAuction:(w=(0,s.default)(i.default.mark((function t(e,n){var a,u,c,d,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),a=[],u=e;u>=n;u--)a.push(u);return console.log(e),console.log(n),console.log(a),c=this,d=a.map(function(){var t=(0,s.default)(i.default.mark((function t(e){var n,r,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.trustAuctionService.getUserBiddedAuctionById(o.bnbTokenAddress,l.web3Account,e);case 2:return n=t.sent,(r={}).id=n.id/1,t.next=7,c.tns.tokenURI(n.tokenId);case 7:return r.tokenURI=t.sent,r.bidder=n.bidder,m(n.bidder)==m(l.web3Account)?r.isWinner=!0:r.isWinner=!1,s=n.price/Math.pow(10,18),r.price=s.toFixed(2),r.expires=1e3*n.expiresAt,r.status=n.status/1,r.expires<(new Date).getTime()?r.isEnd=!0:r.isEnd=!1,r.expires<0&&(r.expires=0),t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,l)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,r.default.all(d).then((function(t){c.biddedAuctions=t,c.closeLoading()}));case 10:case"end":return t.stop()}}),t,this)}))),function(t,e){return w.apply(this,arguments)}),loadBiddedAuction:(A=(0,s.default)(i.default.mark((function t(e,n){var a,u,c,d,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.openLoading(),a=[],u=e;u>=n;u--)a.push(u);return console.log(e),console.log(n),console.log(a),c=this,d=a.map(function(){var t=(0,s.default)(i.default.mark((function t(e){var n,r,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.trustAuction.getUserBiddedAuctionById(o.tokenAddress,l.web3Account,e);case 2:return n=t.sent,(r={}).id=n.id/1,t.next=7,c.cns.tokenURI(n.tokenId);case 7:return r.tokenURI=t.sent,r.bidder=n.bidder,n.bidder==l.web3Account?r.isWinner=!0:r.isWinner=!1,s=n.price/Math.pow(10,18),r.price=s.toFixed(2),r.expires=1e3*n.expiresAt,r.status=n.status/1,r.expires<(new Date).getTime()?r.isEnd=!0:r.isEnd=!1,r.expires<0&&(r.expires=0),t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,l)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,r.default.all(d).then((function(t){c.biddedAuctions=t,c.closeLoading()}));case 10:case"end":return t.stop()}}),t,this)}))),function(t,e){return A.apply(this,arguments)}),loadCreatedAuctionCount:(v=(0,s.default)(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=7;break}return t.next=3,this.trustAuction.getUserCreateAuctionCount(o.tokenAddress,this.web3Account);case 3:e=t.sent,this.createdAuctionCount=e/1,t.next=11;break;case 7:return t.next=9,this.trustAuctionService.getUserCreateAuctionCount(o.bnbTokenAddress,this.web3Account);case 9:n=t.sent,this.createdAuctionCount=n/1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),loadBiddedAuctionCount:(p=(0,s.default)(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=7;break}return t.next=3,this.trustAuction.getUserBiddedAuctionCount(o.tokenAddress,this.web3Account);case 3:e=t.sent,this.biddedAuctionCount=e/1,t.next=11;break;case 7:return t.next=9,this.trustAuctionService.getUserBiddedAuctionCount(o.bnbTokenAddress,this.web3Account);case 9:n=t.sent,this.biddedAuctionCount=n/1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),naviAuction:function(t){this.$router.push({path:"/auction/"+t})},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},subAddress:function(t){return t.slice(0,6)+"..."+t.slice(-4)},timeToDate:function(t){return(0,a.default)(t).format("YYYY-MM-DD hh:mm")},openLoading:function(){var t=this.$t("app.loading");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var e=this;setTimeout((function(){e.closeLoading()}),6e3)},closeLoading:function(){this.loading.close()}}}}}]);