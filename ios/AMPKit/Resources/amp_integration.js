/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() { var k=this,l=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a){return"function"==m(a)},aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
aa:ba;return p.apply(null,arguments)},r=function(a,b){function c(){}c.prototype=b.prototype;a.ra=b.prototype;a.prototype=new c;a.qa=function(a,c,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[c].apply(a,h)}};var t;a:{var u=k.navigator;if(u){var w=u.userAgent;if(w){t=w;break a}}t=""};var x=function(a,b){this.v=a;this.w=b;this.s=0;this.o=null},y=function(a){var b;0<a.s?(a.s--,b=a.o,a.o=b.next,b.next=null):b=a.v();return b},z=function(a,b){a.w(b);100>a.s&&(a.s++,b.next=a.o,a.o=b)};var A=function(a){k.setTimeout(function(){throw a;},0)},B,ca=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==t.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+
b.location.host,a=p(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==t.indexOf("Trident")&&-1==t.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.cb;c.cb=null;a()}};return function(a){d.next={cb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var D=new x(function(){return new C},function(a){a.reset()}),da=function(){var a=E,b=null;a.o&&(b=a.o,a.o=a.o.next,a.o||(a.s=null),b.next=null);return b},C=function(){this.next=this.s=this.o=null};C.prototype.set=function(a,b){this.o=a;this.s=b;this.next=null};C.prototype.reset=function(){this.next=this.s=this.o=null};var H=function(a,b){F||ea();G||(F(),G=!0);var c=E,d=y(D);d.set(a,b);c.s?c.s.next=d:c.o=d;c.s=d},F,ea=function(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);F=function(){a.then(I)}}else F=function(){var a=I,c;!(c=!n(k.setImmediate))&&(c=k.Window&&k.Window.prototype)&&(c=-1==t.indexOf("Edge")&&k.Window.prototype.setImmediate==k.setImmediate);c?(B||(B=ca()),B(a)):k.setImmediate(a)}},G=!1,E=new function(){this.s=this.o=null},I=function(){for(var a=null;a=da();){try{a.o.call(a.s)}catch(b){A(b)}z(D,
a)}G=!1};var K=function(a,b){this.o=0;this.T=void 0;this.v=this.s=this.R=null;this.w=this.S=!1;if(a!=l)try{var c=this;a.call(b,function(a){J(c,2,a)},function(a){J(c,3,a)})}catch(d){J(this,3,d)}},L=function(){this.next=this.v=this.s=this.w=this.o=null;this.R=!1};L.prototype.reset=function(){this.v=this.s=this.w=this.o=null;this.R=!1};
var M=new x(function(){return new L},function(a){a.reset()}),N=function(a,b,c){var d=y(M);d.w=a;d.s=b;d.v=c;return d},fa=function(){var a=new K(l);J(a,2,void 0);return a},ga=function(a){return new K(function(b,c){c(a)})};K.prototype.then=function(a,b,c){return O(this,n(a)?a:null,n(b)?b:null,c)};K.prototype.then=K.prototype.then;K.prototype.$goog_Thenable=!0;
var ha=function(a,b){O(a,null,b,void 0)},Q=function(a,b){a.s||2!=a.o&&3!=a.o||P(a);a.v?a.v.next=b:a.s=b;a.v=b},O=function(a,b,c,d){var e=N(null,null,null);e.o=new K(function(a,h){e.w=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){h(q)}}:a;e.s=c?function(b){try{var e=c.call(d,b);a(e)}catch(q){h(q)}}:h});e.o.R=a;Q(a,e);return e.o};K.prototype.V=function(a){this.o=0;J(this,2,a)};K.prototype.W=function(a){this.o=0;J(this,3,a)};
var J=function(a,b,c){if(0==a.o){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.o=1;var d;a:{var e=c,f=a.V,h=a.W;if(e instanceof K)Q(e,N(f||l,h||null,a)),d=!0;else{var g;if(e)try{g=!!e.$goog_Thenable}catch(q){g=!1}else g=!1;if(g)e.then(f,h,a),d=!0;else{g=typeof e;if("object"==g&&null!=e||"function"==g)try{var v=e.then;if(n(v)){ia(e,v,f,h,a);d=!0;break a}}catch(q){h.call(a,q);d=!0;break a}d=!1}}}d||(a.T=c,a.o=b,a.R=null,P(a),3!=b||ja(a,c))}},ia=function(a,b,c,d,e){var f=!1,h=function(a){f||
(f=!0,c.call(e,a))},g=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,h,g)}catch(v){g(v)}},P=function(a){a.S||(a.S=!0,H(a.U,a))},ka=function(a){var b=null;a.s&&(b=a.s,a.s=b.next,b.next=null);a.s||(a.v=null);return b};K.prototype.U=function(){for(var a=null;a=ka(this);){var b=this.o,c=this.T;if(3==b&&a.s&&!a.R)for(var d=void 0,d=this;d&&d.w;d=d.R)d.w=!1;if(a.o)a.o.R=null,R(a,b,c);else try{a.R?a.w.call(a.v):R(a,b,c)}catch(e){S.call(null,e)}z(M,a)}this.S=!1};
var R=function(a,b,c){2==b?a.w.call(a.v,c):a.s&&a.s.call(a.v,c)},ja=function(a,b){a.w=!0;H(function(){a.w&&S.call(null,b)})},S=A;var T=function(a){this.R=a;this.T={};this.w=null};T.prototype.W=function(a,b){this.sendMessage(U(a,b))};T.prototype.v=function(a,b){var c=U(a,null);c.error=b;this.sendMessage(c)};var U=function(a,b){var c={type:"s"};c.data=b;for(var d=["app","channelid","requestid","name"],e=0;e<d.length;e++){var f=d[e];c[f]=a[f]}return c},V=function(a,b,c,d){T.call(this,a);this.ka=b;this.$=c;this.U=0;this.V=!!d;this.o={};this.s=[]};r(V,T);
V.prototype.S=function(a){if("q"==a.type){var b;var c=a.name,d=this.T[c];d||(d=this.w);d?(b=!!a.rsvp,c=d(c,a.data,b),b&&(c?c.then(this.W.bind(this,a),this.v.bind(this,a)):this.v(a,"invalid response from handler")),b=!0):b=!1;b||a.rsvp&&this.v(a,"no handler found")}else if(b=a.requestid,c=this.o[b])delete this.o[b],a.hasOwnProperty("error")?c.reject(a.error):c.resolve(a.data)};var la=function(a,b,c){for(var d=0;d<a.s.length;d++){var e=a.s[d];if(e.name==b){e.ma=c;return}}a.s.push({name:b,ma:c})};
V.prototype.sendMessage=function(a){this.ka.postMessage(a,this.$)};var W=function(a,b,c,d){if(!a.V)return la(a,b,c),fa();var e=a.U++,f={type:"q"};f.data=c;f.app="__AMPHTML__";f.channelid=a.R;f.requestid=e;f.name=b;var h;d&&(f.rsvp=!0,h=new K(function(a,b){this.o[e]={resolve:a,reject:b}}.bind(a)));try{a.sendMessage(f)}catch(g){if(h)a.o[e].reject(g),delete a.o[e];else throw g;}return h};var X=function(a,b,c){if(window.webkit&&window.webkit.messageHandlers&&(a=window.webkit.messageHandlers[a])){V.call(this,b,a,c,!0);b=this.S.bind(this);c=["gws","amp","doc","messaging","receiveMessage"];a=k;c[0]in a||!a.execScript||a.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?a[d]?a=a[d]:a=a[d]={}:a[d]=b}};r(X,V);var Y=function(a){window.viewerState=a},Z=function(a,b,c){var d=window;this.o=c;Y("channelPending");ha(W(this.o,"channelOpen",{},!0).then(p(function(c){if(c)c=p(a.receiveMessage,a),this.o.w=c,a.setMessageDeliverer(p(this.v,this),b),d.addEventListener("unload",p(this.s,this)),Y("channelOpen");else return ga(c)},this)),function(a){Y("channelFailedToOpen: "+a)})};Z.prototype.v=function(a,b,c){return W(this.o,a,b,c)};Z.prototype.s=function(){W(this.o,"unloaded",!0)};(function(a){(window.AMP=window.AMP||[]).push(function(b){try{var c=b.viewer;Y("initializing");var d=c.getParam("origin");new Z(c,d,a)}catch(e){throw e.stack?Y(e.stack):Y(String(e)),e;}})})(new X("amp",0,"origin")); })()