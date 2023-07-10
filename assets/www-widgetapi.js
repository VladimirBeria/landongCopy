(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.W=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={ac:b,mc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function w(a,b,c){a.g=c;return{value:b}}
ta.prototype.C=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function za(a,b){a.g=b;a.o=0}
function Aa(a){a.o=0;var b=a.i.ac;a.i=null;return b}
function Ba(a){a.W=[a.i];a.o=0;a.u=0}
function Ca(a){var b=a.W.splice(0)[0];(b=a.i=a.i||b)?b.mc?a.g=a.o||a.u:void 0!=b.C&&a.u<b.C?(a.g=b.C,a.i=null):a.g=a.u:a.g=0}
function Da(a){this.g=new ta;this.h=a}
function Ea(a,b){ua(a.g);var c=a.g.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ga(a)}a.g.l=null;d.call(a.g,f);return Ga(a)}
function Ga(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.mc)throw b.ac;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ua(a.g);a.g.l?b=Fa(a,a.g.l.next,b,a.g.M):(a.g.M(b),b=Ga(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Fa(a,a.g.l["throw"],b,a.g.M):(va(a.g,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ha(new Da(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.u()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.u=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Eb),reject:g(this.u)}};
b.prototype.Eb=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Ec(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Db(g):this.o(g)}};
b.prototype.Db=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.Fc(h,g):this.o(g)};
b.prototype.u=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Fb();this.W()};
b.prototype.Fb=function(){var g=this;e(function(){if(g.La()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.La=function(){if(this.G)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.W=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.Ec=function(g){var h=this.l();g.rb(h.resolve,h.reject)};
b.prototype.Fc=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.rb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.rb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).rb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).rb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Wa;return Xa.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.g=b===Ib?a:""}
Hb.prototype.toString=function(){return this.g.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb,Lb=C("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=z.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:E("Trident")||E("MSIE")}
function Tb(){return Rb()?Qb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Rb()?0:E("Edge"))||E("Silk")}
;var Ub={};function Vb(a){this.g=Ub===Ub?a:""}
Vb.prototype.toString=function(){return this.g.toString()};function Wb(a){Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;")));return a}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a){return Yb(a.match(Xb)[3]||null)}
function $b(a){var b=a.match(Xb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
var cc=/#|$/;function dc(a,b){var c=a.search(cc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function ec(a){z.setTimeout(function(){throw a;},0)}
;function fc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function kc(a){kc[" "](a);return a}
kc[" "]=function(){};var lc=Rb()?!1:E("Opera"),mc=Sb(),nc=E("Edge"),oc=E("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),pc=-1!=Nb().toLowerCase().indexOf("webkit")&&!E("Edge");function qc(){var a=z.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Nb();if(oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(nc)return/Edge\/([\d\.]+)/.exec(a);if(mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pc)return/WebKit\/(\S+)/.exec(a);if(lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(mc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(z.document&&mc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;var zc=fc()||E("iPod"),Ac=E("iPad");!E("Android")||Tb();Tb();var Bc=E("Safari")&&!(Tb()||(Rb()?0:E("Coast"))||(Rb()?0:E("Opera"))||(Rb()?0:E("Edge"))||(Rb()?Qb("Microsoft Edge"):E("Edg/"))||(Rb()?Qb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(fc()||E("iPad")||E("iPod"));var Cc={},Dc=null;
function Ec(a,b){Oa(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc="undefined"!==typeof Uint8Array,Gc=!mc&&"function"===typeof btoa;var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ic(a,b){if(Hc)return a[Hc]|=b;if(void 0!==a.ja)return a.ja|=b;Object.defineProperties(a,{ja:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jc(a,b){Hc?a[Hc]&&(a[Hc]&=~b):void 0!==a.ja&&(a.ja&=~b)}
function F(a){var b;Hc?b=a[Hc]:b=a.ja;return null==b?0:b}
function Kc(a,b){Hc?a[Hc]=b:void 0!==a.ja?a.ja=b:Object.defineProperties(a,{ja:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Lc(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Kc(a,b);return a}
function Nc(a){Ic(a,1);return a}
function Oc(a,b){Kc(b,(a|0)&-51)}
function Pc(a,b){Kc(b,(a|18)&-41)}
;var Qc={};function Rc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Sc,Tc=Object.freeze(Kc([],23));function Uc(a){if(F(a.L)&2)throw Error();}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor)));return a}
function Xc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Ob===Qc)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Kc(a,e);return new b(a)}}
;function Yc(a){var b=a.g+a.Ea;return a.sa||(a.sa=a.L[b]={})}
function Zc(a,b,c){return-1===b?null:b>=a.g?a.sa?a.sa[b]:void 0:c&&a.sa&&(c=a.sa[b],null!=c)?c:a.L[b+a.Ea]}
function G(a,b,c,d){Uc(a);return $c(a,b,c,d)}
function $c(a,b,c,d){a.h&&(a.h=void 0);if(b>=a.g||d)return Yc(a)[b]=c,a;a.L[b+a.Ea]=c;(c=a.sa)&&b in c&&delete c[b];return a}
function ad(a,b,c,d,e){var f=Zc(a,b,d);Array.isArray(f)||(f=Tc);var g=F(f);g&1||Nc(f);if(e)g&2||Ic(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Jc(f,16):(f=Nc(Array.prototype.slice.call(f)),$c(a,b,f,d))}return f}
function bd(a,b,c,d){Uc(a);(c=cd(a,c))&&c!==b&&null!=d&&$c(a,c,void 0,!1);$c(a,b,d)}
function cd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Zc(a,e)&&(0!==c&&$c(a,c,void 0,!1),c=e)}return c}
function gd(a,b,c){var d=void 0===d?!1:d;var e=Zc(a,c,d);b=Xc(e,b,F(a.L));b!==e&&null!=b&&$c(a,c,b,d);e=b;if(null==e)return e;if(!(F(a.L)&2)){b=e;if(F(b.L)&2){var f=hd(b,!1);f.h=b;b=f}b!==e&&(e=b,$c(a,c,e,d))}return e}
function H(a,b,c,d){Uc(a);null!=d?Wc(d,b):d=void 0;return $c(a,c,d)}
function id(a,b,c,d,e){Uc(a);null!=e?Wc(e,b):e=void 0;bd(a,c,d,e)}
function jd(a,b,c,d){var e=F(a.L);if(e&2)throw Error();var f=!!(e&2),g=ad(a,b,1,void 0,f);if(g!==Tc&&F(g)&4){if(!f){f=Object.isFrozen(g);var h=F(g);e=h&-19;f&&(g=Array.prototype.slice.call(g),h=0,$c(a,b,g));h!==e&&Kc(g,e)}a=g}else{h=g;g=!!(e&2);var k=!!(F(h)&2);f=h;!g&&k&&(h=Array.prototype.slice.call(h));e|=k?2:0;for(var l=0,m=0;l<h.length;l++){var n=Xc(h[l],c,e);void 0!==n&&(k||(k=!!(2&F(n.L))),h[m++]=n)}m<l&&(h.length=m);k=!k;e=F(h);l=e|5;k=k?l|8:l&-9;e!=k&&(h=Lc(h,k));f!==h&&$c(a,b,h);g&&Object.freeze(h);
a=h}c=null!=d?Wc(d,c):new c;a.push(c);F(c.L)&2&&Jc(a,8)}
function kd(a,b){a=Zc(a,b);return null==a?"":a}
function ld(a,b){var c=cd(a,md)===b;return Zc(a,c?b:-1)}
;var nd;function od(a,b){return pd(b)}
function pd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Fc&&null!=a&&a instanceof Uint8Array){if(Gc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ec(a);return a}}return a}
;function qd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:rd(a,b,c,void 0!==d,e,f);else if(Rc(a)){var g={},h;for(h in a)g[h]=qd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function rd(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=qd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function sd(a){return a.Ob===Qc?a.toJSON():pd(a)}
;function td(a,b,c){c=void 0===c?Pc:c;if(null!=a){if(Fc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kc(a,d|18),a;a=rd(a,td,d&4?Pc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Ob===Qc&&(F(a.L)&2||(a=hd(a,!0),Ic(a.L,18)));return a}}
function hd(a,b){var c=a.L,d=[];Ic(d,16);var e=a.constructor.g;e&&d.push(e);e=a.sa;if(e){d.length=c.length;var f={};d[d.length-1]=f}b=b||F(a.L)&2?Pc:Oc;f=a.constructor;F(d);nd=d;d=new f(d);nd=void 0;a.lc&&(d.lc=a.lc.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)G(d,h-a.Ea,td(c[h],f,b),!1);if(e)for(var k in e)a=e[k],c=+k,Number.isNaN(c),G(d,c,td(a,f,b),!0);return d}
;function J(a,b,c){null==a&&(a=nd);nd=void 0;var d=this.constructor.g;if(null==a){a=d?[d]:[];var e=!0;Kc(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=Ic(a,0)|32;e=0!==(16&f);Kc(a,f)}this.Ea=d?0:-1;this.L=a;a:{f=this.L.length;d=f-1;if(f&&(f=this.L[d],Rc(f))){this.sa=f;this.g=d-this.Ea;break a}void 0!==b&&-1<b?(this.g=Math.max(b,d+1-this.Ea),this.sa=void 0):this.g=Number.MAX_VALUE}if(c){b=e&&!0;e=this.g;var g;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.Ea;var h=
a[f];h?ud(h,b):a[f]=Tc}else g||(g=Yc(this)),(h=g[f])?ud(h,b):g[f]=Tc}F(this.L)}
J.prototype.toJSON=function(){var a=this.L,b;Sc?b=a:b=rd(a,sd,void 0,void 0,!1,!1);return b};
function vd(a){Sc=!0;try{return JSON.stringify(a.toJSON(),od)}finally{Sc=!1}}
J.prototype.clone=function(){return hd(this,!1)};
function ud(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kc(a,c|d)}}
J.prototype.Ob=Qc;J.prototype.toString=function(){return this.L.toString()};var wd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function xd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=xd.prototype;q.clone=function(){return new xd(this.x,this.y)};
q.equals=function(a){return a instanceof xd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function yd(a,b){this.width=a;this.height=b}
q=yd.prototype;q.clone=function(){return new yd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ad(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dd[c])c=Dd[c];else{c=String(c);if(!Dd[c]){var f=/function\s+([^\(]+)/m.exec(c);Dd[c]=f?f[1]:"[Anonymous]"}c=Dd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cd(a,b){b||(b={});b[Ed(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ed(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cd(a,b));return c}
function Ed(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Fd;try{new URL("s://g"),Fd=!0}catch(a){Fd=!1}var Gd=Fd;function Hd(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.g:(Na(b),b="type_error:SafeUrl");else{b:if(Gd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Id(a){this.bd=a}
function Jd(a){return new Id(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Kd=[Jd("data"),Jd("http"),Jd("https"),Jd("mailto"),Jd("ftp"),new Id(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ld(a,b){b=void 0===b?Kd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Id&&d.bd(a))return new Hb(a,Ib)}}
function Md(a){var b=void 0===b?Kd:b;return Ld(a,b)||Jb}
;function Nd(a){var b=Od;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Pd(){var a=[];Nd(function(b){a.push(b)});
return a}
var Od={rd:"allow-forms",sd:"allow-modals",td:"allow-orientation-lock",ud:"allow-pointer-lock",vd:"allow-popups",wd:"allow-popups-to-escape-sandbox",xd:"allow-presentation",yd:"allow-same-origin",zd:"allow-scripts",Ad:"allow-top-navigation",Bd:"allow-top-navigation-by-user-activation"},Qd=bb(function(){return Pd()});
function Rd(){var a=Sd(),b={};db(Qd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Sd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Td=(new Date).getTime();function Ud(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Vd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Vd);function Wd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],I=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=I^y&(A^I);var Q=1518500249}else T=y^A^I,Q=1859775393;else 60>p?(T=y&A|I&(y|A),Q=2400959708):(T=y^A^I,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=I;I=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Lc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Xd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Yd(Ud(d),a,c||null)].join(" "):null}
function Yd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Zd(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Zd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Zd(a){var b=Wd();b.update(a);return b.Lc().toLowerCase()}
;var $d={};function ae(a){this.g=a||{cookie:""}}
q=ae.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Lb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Sd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Lb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Lb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var be=new ae("undefined"==typeof document?null:document);function ce(a){return!!$d.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function de(a,b,c,d){(a=z[a])||(a=(new ae(document)).get(b));return a?Xd(a,c,d):null}
function ee(a){var b=void 0===b?!1:b;var c=Ud(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;ce(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new ae(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");ce(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new ae(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Xd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ce(b)&&((b=de("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=de("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var fe="undefined"!==typeof TextEncoder?new TextEncoder:null,ge=fe?function(a){return fe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function he(){this.i=this.i;this.u=this.u}
he.prototype.i=!1;he.prototype.dispose=function(){this.i||(this.i=!0,this.Qa())};
he.prototype.Qa=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function ie(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
ie.prototype.stopPropagation=function(){this.i=!0};
ie.prototype.preventDefault=function(){this.defaultPrevented=!0};var je=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
z.addEventListener("test",c,b);z.removeEventListener("test",c,b)}catch(d){}return a}();function ke(a,b){ie.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
D(ke,ie);var le={2:"touch",3:"pen",4:"mouse"};
ke.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{kc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:le[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&ke.ma.preventDefault.call(this)};
ke.prototype.stopPropagation=function(){ke.ma.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ke.prototype.preventDefault=function(){ke.ma.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(1E6*Math.random()|0);var pe=0;function qe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.vb=e;this.key=++pe;this.jb=this.qb=!1}
function re(a){a.jb=!0;a.listener=null;a.proxy=null;a.src=null;a.vb=null}
;function se(a){this.src=a;this.listeners={};this.g=0}
se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=te(a,b,d,e);-1<g?(b=a[g],c||(b.qb=!1)):(b=new qe(b,this.src,f,!!d,e),b.qb=c,a.push(b));return b};
se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=te(e,b,c,d);return-1<b?(re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ue(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.jb&&f.listener==b&&f.capture==!!c&&f.vb==d)return e}return-1}
;var ve="closure_lm_"+(1E6*Math.random()|0),we={},xe=0;function ye(a,b,c,d,e){if(d&&d.once)ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.Ga(b,c,Pa(d)?!!d.capture:!!d,e):Be(a,b,c,!1,d,e)}
function Be(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=Ce(a);h||(a[ve]=h=new se(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=De();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)je||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xe++}}
function De(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fe;return a}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.g.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Be(a,b,c,!0,d,e)}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Ae(c),a&&a[oe])?a.g.remove(String(b),c,d,e):a&&(a=Ce(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=te(b,c,d,e)),(c=-1<a?b[a]:null)&&He(c))}
function He(a){if("number"!==typeof a&&a&&!a.jb){var b=a.src;if(b&&b[oe])ue(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xe--;(c=Ce(b))?(ue(c,a),0==c.g&&(c.src=null,b[ve]=null)):re(a)}}}
function Ee(a){return a in we?we[a]:we[a]="on"+a}
function Fe(a,b){if(a.jb)a=!0;else{b=new ke(b,this);var c=a.listener,d=a.vb||a.src;a.qb&&He(a);a=c.call(d,b)}return a}
function Ce(a){a=a[ve];return a instanceof se?a:null}
var Ie="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ae(a){if("function"===typeof a)return a;a[Ie]||(a[Ie]=function(b){return a.handleEvent(b)});
return a[Ie]}
;function Je(){he.call(this);this.g=new se(this);this.La=this;this.M=null}
D(Je,he);Je.prototype[oe]=!0;Je.prototype.addEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
Je.prototype.removeEventListener=function(a,b,c,d){Ge(this,a,b,c,d)};
function Ke(a,b){var c=a.M;if(c){var d=[];for(var e=1;c;c=c.M)d.push(c),++e}a=a.La;c=b.type||b;"string"===typeof b?b=new ie(b,a):b instanceof ie?b.target=b.target||a:(e=b,b=new ie(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Le(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Le(g,c,!0,b)&&e,b.i||(e=Le(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Le(g,c,!1,b)&&e}
Je.prototype.Qa=function(){Je.ma.Qa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,re(d[e]);delete a.listeners[c];a.g--}}this.M=null};
Je.prototype.Ga=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Le(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.jb&&g.capture==c){var h=g.listener,k=g.vb||g.src;g.qb&&ue(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Me(a){Je.call(this);var b=this;this.W=this.l=0;this.fa=null!=a?a:{ha:function(e,f){return setTimeout(e,f)},
Oa:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return w(e,Ne(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.W||Oe(this)}
v(Me,Je);function Pe(){var a=Qe;Me.g||(Me.g=new Me(a));return Me.g}
Me.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.fa.Oa(this.W);delete Me.g};
Me.prototype.ba=function(){return this.h};
function Oe(a){a.W=a.fa.ha(function(){var b;return x(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.C(3):w(c,Ne(a),3):w(c,Ne(a),3);Oe(a);c.g=0})},3E4)}
function Ne(a,b){return a.G?a.G:a.G=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.fa.ha(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.G=void 0;a.l&&(a.fa.Oa(a.l),a.l=0);g!==a.h&&(a.h=g,a.h?Ke(a,"networkstatus-online"):Ke(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.C(3)}})})}
;function Re(){this.data_=[];this.g=-1}
Re.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
Re.prototype.get=function(a){return!!this.data_[a]};
function Se(a){-1===a.g&&(a.g=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Te(a){J.call(this,a)}
v(Te,J);function Ue(a){J.call(this,a,-1,Ve)}
v(Ue,J);function We(a,b){return G(a,2,b)}
function Xe(a,b){return G(a,3,b)}
function Ye(a,b){return G(a,4,b)}
function Ze(a,b){return G(a,5,b)}
function $e(a,b){return G(a,9,b)}
function af(a,b){Uc(a);if(null!=b){for(var c=!!b.length,d=0;d<b.length;d++){var e=b[d];Wc(e,Te);c=c&&!(F(e.L)&2)}d=F(b);e=d|1;e=(c?e|8:e&-9)|4;e!=d&&(b=Lc(b,e))}null==b&&(b=Tc);return $c(a,10,b)}
function bf(a,b){return G(a,11,b)}
function cf(a,b){return G(a,1,b)}
function df(a,b){return G(a,7,b)}
var Ve=[10,6];var ef="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function ff(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function gf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function hf(){var a=window;if(!gf(a))return null;var b=ff(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ef).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function jf(a){var b;return bf(af(Ze(We(cf(Ye(df($e(Xe(new Ue,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Te;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function kf(){var a,b;return null!=(b=null==(a=hf())?void 0:a.then(function(c){return jf(c)}))?b:null}
;function lf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
lf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function mf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var nf;function of(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=zd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Xb;c.Xb=null;e()}};
return function(e){d.next={Xb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function pf(){this.h=this.g=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
pf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var qf=new lf(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.g=null}
rf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.g=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Rb()||!E("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(nf||(nf=of()),nf(b)):z.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.g.call(a.scope)}catch(b){ec(b)}mf(qf,a)}tf=!1}
;function yf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
yf.prototype[Symbol.iterator]=function(){return this};
yf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function zf(a,b){return new yf(a,b)}
;function Af(){this.blockSize=-1}
;function Bf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.u=[];this.o=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
D(Bf,Af);Bf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Cf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Bf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.h;d<b;){if(0==f)for(;d<=c;)Cf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Cf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Cf(this,e);f=0;break}}this.h=f;this.l+=b}};
Bf.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Cf(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Df(){}
Df.prototype.next=function(){return Ef};
var Ef={done:!0,value:void 0};function Ff(a){return{value:a,done:!1}}
Df.prototype.ga=function(){return this};function Gf(a){if(a instanceof Hf||a instanceof If||a instanceof Jf)return a;if("function"==typeof a.next)return new Hf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Hf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ga)return new Hf(function(){return a.ga()});
throw Error("Not an iterator or iterable.");}
function Hf(a){this.h=a}
Hf.prototype.ga=function(){return new If(this.h())};
Hf.prototype[Symbol.iterator]=function(){return new Jf(this.h())};
Hf.prototype.g=function(){return new Jf(this.h())};
function If(a){this.h=a}
v(If,Df);If.prototype.next=function(){return this.h.next()};
If.prototype[Symbol.iterator]=function(){return new Jf(this.h)};
If.prototype.g=function(){return new Jf(this.h)};
function Jf(a){Hf.call(this,function(){return a});
this.i=a}
v(Jf,Hf);Jf.prototype.next=function(){return this.i.next()};function Kf(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Kf)for(c=Lf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Lf(a){Mf(a);return a.g.concat()}
q=Kf.prototype;q.has=function(a){return Nf(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Of;Mf(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Of(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Nf(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Mf(this),!0):!1};
function Mf(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Nf(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Nf(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return Nf(this.h,a)?this.h[a]:b};
q.set=function(a,b){Nf(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Lf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Kf(this)};
q.keys=function(){return Gf(this.ga(!0)).g()};
q.values=function(){return Gf(this.ga(!1)).g()};
q.entries=function(){var a=this;return zf(this.keys(),function(b){return[b,a.get(b)]})};
q.ga=function(a){Mf(this);var b=0,c=this.i,d=this,e=new Df;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Ef;var f=d.g[b++];return Ff(a?f:d.h[f])};
return e};
function Nf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Pf=z.JSON.stringify;function Qf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Rf(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.u=this.o=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Sf(b,2,c)},function(c){Sf(b,3,c)})}catch(c){Sf(this,3,c)}}
function Tf(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Tf.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Uf=new lf(function(){return new Tf},function(a){a.reset()});
function Vf(a,b,c){var d=Uf.get();d.i=a;d.h=b;d.context=c;return d}
Rf.prototype.then=function(a,b,c){return Wf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rf.prototype.$goog_Thenable=!0;Rf.prototype.cancel=function(a){if(0==this.g){var b=new Xf(a);vf(function(){Yf(this,b)},this)}};
function Yf(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Yf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Zf(c),$f(c,e,3,b)))}a.i=null}else Sf(a,3,b)}
function ag(a,b){a.h||2!=a.g&&3!=a.g||bg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Wf(a,b,c,d){var e=Vf(null,null,null);e.g=new Rf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Xf?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;ag(a,e);return e.g}
Rf.prototype.W=function(a){this.g=0;Sf(this,2,a)};
Rf.prototype.La=function(a){this.g=0;Sf(this,3,a)};
function Sf(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.W,f=a.La;if(d instanceof Rf){ag(d,Vf(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){cg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,bg(a),3!=b||c instanceof Xf||dg(a,c))}}
function cg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function bg(a){a.o||(a.o=!0,vf(a.M,a))}
function Zf(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Rf.prototype.M=function(){for(var a;a=Zf(this);)$f(this,a,this.g,this.G);this.o=!1};
function $f(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.u;a=a.i)a.u=!1;if(b.g)b.g.i=null,eg(b,c,d);else try{b.l?b.i.call(b.context):eg(b,c,d)}catch(e){fg.call(null,e)}mf(Uf,b)}
function eg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function dg(a,b){a.u=!0;vf(function(){a.u&&fg.call(null,b)})}
var fg=ec;function Xf(a){Za.call(this,a)}
D(Xf,Za);Xf.prototype.name="cancel";function K(a){he.call(this);this.G=1;this.l=[];this.o=0;this.g=[];this.h={};this.M=!!a}
D(K,he);q=K.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.G;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.G=e+3;d.push(e);return e};
function gg(a,b,c){var d=hg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.lb(a)}}
q.lb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.l.push(a),this.g[a+1]=function(){}):(c&&fb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.Ya=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.M)for(e=0;e<c.length;e++){var g=c[e];ig(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.lb(c)}}return 0!=e}return!1};
function ig(a,b,c){vf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.lb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.Qa=function(){K.ma.Qa.call(this);this.clear();this.l.length=0};function jg(a){this.g=a}
jg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Pf(b))};
jg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jg.prototype.remove=function(a){this.g.remove(a)};function kg(a){this.g=a}
D(kg,jg);function lg(a){this.data=a}
function mg(a){return void 0===a||a instanceof lg?a:new lg(a)}
kg.prototype.set=function(a,b){kg.ma.set.call(this,a,mg(b))};
kg.prototype.h=function(a){a=kg.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
kg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ng(a){this.g=a}
D(ng,kg);ng.prototype.set=function(a,b,c){if(b=mg(b)){if(c){if(c<Date.now()){ng.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ng.ma.set.call(this,a,b)};
ng.prototype.h=function(a){var b=ng.ma.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ng.prototype.remove.call(this,a);else return b}};function og(){}
;function pg(){}
D(pg,og);pg.prototype[Symbol.iterator]=function(){return Gf(this.ga(!0)).g()};
pg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function qg(a){this.g=a}
D(qg,pg);q=qg.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ga=function(a){var b=0,c=this.g,d=new Df;d.next=function(){if(b>=c.length)return Ef;var e=c.key(b++);if(a)return Ff(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ff(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function rg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
D(rg,qg);function sg(a,b){this.h=a;this.g=null;var c;if(c=mc)c=!(9<=Number(yc));if(c){tg||(tg=new Kf);this.g=tg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),tg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
D(sg,pg);var ug={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},tg=null;function vg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ug[b]})}
q=sg.prototype;q.set=function(a,b){this.g.setAttribute(vg(a),b);wg(this)};
q.get=function(a){a=this.g.getAttribute(vg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(vg(a));wg(this)};
q.ga=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Df;d.next=function(){if(b>=c.length)return Ef;var e=c[b++];if(a)return Ff(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ff(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);wg(this)};
function wg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function xg(a,b){this.h=a;this.g=b+"::"}
D(xg,pg);xg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
xg.prototype.get=function(a){return this.h.get(this.g+a)};
xg.prototype.remove=function(a){this.h.remove(this.g+a)};
xg.prototype.ga=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Df;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Ff(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},yg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Sb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var zg={Na:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ag={Na:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cc:function(a){return[].concat.apply([],a)}};
M.ld=function(){yg?(M.Ma=Uint8Array,M.na=Uint16Array,M.Dc=Int32Array,M.assign(M,zg)):(M.Ma=Array,M.na=Array,M.Dc=Array,M.assign(M,Ag))};
M.ld();var Bg=!0;try{new Uint8Array(1)}catch(a){Bg=!1}
function Cg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.Ma(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Dg={};Dg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Eg={},Fg,Gg=[],Hg=0;256>Hg;Hg++){Fg=Hg;for(var Ig=0;8>Ig;Ig++)Fg=Fg&1?3988292384^Fg>>>1:Fg>>>1;Gg[Hg]=Fg}Eg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Gg[(a^b[d])&255];return a^-1};var ch={};ch={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function dh(a){for(var b=a.length;0<=--b;)a[b]=0}
var eh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],fh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],gh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],hh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ih=Array(576);dh(ih);var jh=Array(60);dh(jh);var kh=Array(512);dh(kh);var lh=Array(256);dh(lh);var mh=Array(29);dh(mh);var nh=Array(30);dh(nh);function oh(a,b,c,d,e){this.yc=a;this.Qc=b;this.Pc=c;this.Mc=d;this.fd=e;this.fc=a&&a.length}
var ph,qh,rh;function sh(a,b){this.Zb=a;this.Va=0;this.Aa=b}
function th(a,b){a.J[a.pending++]=b&255;a.J[a.pending++]=b>>>8&255}
function N(a,b,c){a.O>16-c?(a.U|=b<<a.O&65535,th(a,a.U),a.U=b>>16-a.O,a.O+=c-16):(a.U|=b<<a.O&65535,a.O+=c)}
function uh(a,b,c){N(a,c[2*b],c[2*b+1])}
function vh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function wh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=vh(d[e]++,e))}
function xh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Fa[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.ta=a.Za=0;a.ca=a.matches=0}
function yh(a){8<a.O?th(a,a.U):0<a.O&&(a.J[a.pending++]=a.U);a.U=0;a.O=0}
function zh(a,b,c){yh(a);th(a,c);th(a,~c);M.Na(a.J,a.window,b,c,a.pending);a.pending+=c}
function Ah(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Bh(a,b,c){for(var d=a.K[c],e=c<<1;e<=a.ra;){e<a.ra&&Ah(b,a.K[e+1],a.K[e],a.depth)&&e++;if(Ah(b,d,a.K[e],a.depth))break;a.K[c]=a.K[e];c=e;e<<=1}a.K[c]=d}
function Ch(a,b,c){var d=0;if(0!==a.ca){do{var e=a.J[a.cb+2*d]<<8|a.J[a.cb+2*d+1];var f=a.J[a.Kb+d];d++;if(0===e)uh(a,f,b);else{var g=lh[f];uh(a,g+256+1,b);var h=eh[g];0!==h&&(f-=mh[g],N(a,f,h));e--;g=256>e?kh[e]:kh[256+(e>>>7)];uh(a,g,c);h=fh[g];0!==h&&(e-=nh[g],N(a,e,h))}}while(d<a.ca)}uh(a,256,b)}
function Dh(a,b){var c=b.Zb,d=b.Aa.yc,e=b.Aa.fc,f=b.Aa.Mc,g,h=-1;a.ra=0;a.Sa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.K[++a.ra]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.ra;){var k=a.K[++a.ra]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.ta--;e&&(a.Za-=d[2*k+1])}b.Va=h;for(g=a.ra>>1;1<=g;g--)Bh(a,c,g);k=f;do g=a.K[1],a.K[1]=a.K[a.ra--],Bh(a,c,1),d=a.K[1],a.K[--a.Sa]=g,a.K[--a.Sa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.K[1]=k++,Bh(a,c,1);while(2<=a.ra);a.K[--a.Sa]=
a.K[1];g=b.Zb;k=b.Va;d=b.Aa.yc;e=b.Aa.fc;f=b.Aa.Qc;var l=b.Aa.Pc,m=b.Aa.fd,n,r=0;for(n=0;15>=n;n++)a.oa[n]=0;g[2*a.K[a.Sa]+1]=0;for(b=a.Sa+1;573>b;b++){var p=a.K[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.oa[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.ta+=A*(n+y);e&&(a.Za+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.oa[n];)n--;a.oa[n]--;a.oa[n+1]+=2;a.oa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.oa[n];0!==p;)d=a.K[--b],d>k||(g[2*d+1]!==n&&(a.ta+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}wh(c,h,a.oa)}
function Eh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Fh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do uh(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(uh(a,l,a.R),g--),uh(a,16,a.R),N(a,g-3,2)):10>=g?(uh(a,17,a.R),N(a,g-3,3)):(uh(a,18,a.R),N(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Gh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var Hh=!1;function Ih(a,b,c){a.J[a.cb+2*a.ca]=b>>>8&255;a.J[a.cb+2*a.ca+1]=b&255;a.J[a.Kb+a.ca]=c&255;a.ca++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(lh[c]+256+1)]++,a.Fa[2*(256>b?kh[b]:kh[256+(b>>>7)])]++);return a.ca===a.gb-1}
;function Jh(a,b){a.msg=ch[b];return b}
function Kh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Lh(a){var b=a.state,c=b.pending;c>a.D&&(c=a.D);0!==c&&(M.Na(a.hb,b.J,b.ib,c,a.Wa),a.Wa+=c,b.ib+=c,a.Tb+=c,a.D-=c,b.pending-=c,0===b.pending&&(b.ib=0))}
function P(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.A.Hb&&(a.A.Hb=Gh(a));Dh(a,a.xb);Dh(a,a.tb);Eh(a,a.X,a.xb.Va);Eh(a,a.Fa,a.tb.Va);Dh(a,a.Vb);for(e=18;3<=e&&0===a.R[2*hh[e]+1];e--);a.ta+=3*(e+1)+14;var f=a.ta+3+7>>>3;var g=a.Za+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)N(a,b?1:0,3),zh(a,c,d);else if(4===a.strategy||g===f)N(a,2+(b?1:0),3),Ch(a,ih,jh);else{N(a,4+(b?1:0),3);c=a.xb.Va+1;d=a.tb.Va+1;e+=1;N(a,c-257,5);N(a,d-1,5);N(a,e-4,4);for(f=0;f<e;f++)N(a,a.R[2*hh[f]+1],
3);Fh(a,a.X,c-1);Fh(a,a.Fa,d-1);Ch(a,a.X,a.Fa)}xh(a);b&&yh(a);a.Z=a.j;Lh(a.A)}
function R(a,b){a.J[a.pending++]=b}
function Mh(a,b){a.J[a.pending++]=b>>>8&255;a.J[a.pending++]=b&255}
function Nh(a,b){var c=a.nc,d=a.j,e=a.aa,f=a.pc,g=a.j>a.S-262?a.j-(a.S-262):0,h=a.window,k=a.Ba,l=a.la,m=a.j+258,n=h[d+e-1],r=h[d+e];a.aa>=a.ec&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Ua=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Oh(a){var b=a.S,c;do{var d=a.Bc-a.m-a.j;if(a.j>=b+(b-262)){M.Na(a.window,a.window,b,b,0);a.Ua-=b;a.j-=b;a.Z-=b;var e=c=a.wb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.A.T)break;e=a.A;c=a.window;f=a.j+a.m;var g=e.T;g>d&&(g=d);0===g?c=0:(e.T-=g,M.Na(c,e.input,e.Ja,g,f),1===e.state.wrap?e.v=Dg(e.v,c,g,f):2===e.state.wrap&&(e.v=Eg(e.v,c,g,f)),e.Ja+=g,e.Ka+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.B=a.window[d],a.B=
(a.B<<a.qa^a.window[d+1])&a.pa;a.Y&&!(a.B=(a.B<<a.qa^a.window[d+3-1])&a.pa,a.la[d&a.Ba]=a.head[a.B],a.head[a.B]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.A.T)}
function Ph(a,b){for(var c;;){if(262>a.m){Oh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.qa^a.window[a.j+3-1])&a.pa,c=a.la[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);0!==c&&a.j-c<=a.S-262&&(a.F=Nh(a,c));if(3<=a.F)if(c=Ih(a,a.j-a.Ua,a.F-3),a.m-=a.F,a.F<=a.Mb&&3<=a.m){a.F--;do a.j++,a.B=(a.B<<a.qa^a.window[a.j+3-1])&a.pa,a.la[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j;while(0!==--a.F);a.j++}else a.j+=a.F,a.F=0,a.B=a.window[a.j],a.B=(a.B<<a.qa^a.window[a.j+1])&a.pa;else c=Ih(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.Y=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Qh(a,b){for(var c,d;;){if(262>a.m){Oh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.qa^a.window[a.j+3-1])&a.pa,c=a.la[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);a.aa=a.F;a.sc=a.Ua;a.F=2;0!==c&&a.aa<a.Mb&&a.j-c<=a.S-262&&(a.F=Nh(a,c),5>=a.F&&(1===a.strategy||3===a.F&&4096<a.j-a.Ua)&&(a.F=2));if(3<=a.aa&&a.F<=a.aa){d=a.j+a.m-3;c=Ih(a,a.j-1-a.sc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.B=(a.B<<a.qa^a.window[a.j+3-1])&a.pa,a.la[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);while(0!==
--a.aa);a.Ha=0;a.F=2;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}else if(a.Ha){if((c=Ih(a,0,a.window[a.j-1]))&&P(a,!1),a.j++,a.m--,0===a.A.D)return 1}else a.Ha=1,a.j++,a.m--}a.Ha&&(Ih(a,0,a.window[a.j-1]),a.Ha=0);a.Y=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Rh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Oh(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.F=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.F=258-(e-d);a.F>a.m&&(a.F=a.m)}3<=a.F?(c=Ih(a,1,a.F-3),a.m-=a.F,a.j+=a.F,a.F=0):(c=Ih(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(P(a,!1),0===a.A.D))return 1}a.Y=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&
(P(a,!1),0===a.A.D)?1:2}
function Sh(a,b){for(var c;;){if(0===a.m&&(Oh(a),0===a.m)){if(0===b)return 1;break}a.F=0;c=Ih(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.Y=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Th(a,b,c,d,e){this.Tc=a;this.ed=b;this.hd=c;this.dd=d;this.Rc=e}
var Uh;Uh=[new Th(0,0,0,0,function(a,b){var c=65535;for(c>a.da-5&&(c=a.da-5);;){if(1>=a.m){Oh(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,P(a,!1),0===a.A.D)return 1;if(a.j-a.Z>=a.S-262&&(P(a,!1),0===a.A.D))return 1}a.Y=0;if(4===b)return P(a,!0),0===a.A.D?3:4;a.j>a.Z&&P(a,!1);return 1}),
new Th(4,4,8,4,Ph),new Th(4,5,16,8,Ph),new Th(4,6,32,32,Ph),new Th(4,4,16,16,Qh),new Th(8,16,32,32,Qh),new Th(8,16,128,128,Qh),new Th(8,32,128,256,Qh),new Th(32,128,258,1024,Qh),new Th(32,258,258,4096,Qh)];
function Vh(){this.A=null;this.status=0;this.J=null;this.wrap=this.pending=this.ib=this.da=0;this.s=null;this.ea=0;this.method=8;this.Ta=-1;this.Ba=this.Ub=this.S=0;this.window=null;this.Bc=0;this.head=this.la=null;this.pc=this.ec=this.strategy=this.level=this.Mb=this.nc=this.aa=this.m=this.Ua=this.j=this.Ha=this.sc=this.F=this.Z=this.qa=this.pa=this.Ib=this.wb=this.B=0;this.X=new M.na(1146);this.Fa=new M.na(122);this.R=new M.na(78);Kh(this.X);Kh(this.Fa);Kh(this.R);this.Vb=this.tb=this.xb=null;this.oa=
new M.na(16);this.K=new M.na(573);Kh(this.K);this.Sa=this.ra=0;this.depth=new M.na(573);Kh(this.depth);this.O=this.U=this.Y=this.matches=this.Za=this.ta=this.cb=this.ca=this.gb=this.Kb=0}
function Wh(a,b){if(!a||!a.state||5<b||0>b)return a?Jh(a,-2):-2;var c=a.state;if(!a.hb||!a.input&&0!==a.T||666===c.status&&4!==b)return Jh(a,0===a.D?-5:-2);c.A=a;var d=c.Ta;c.Ta=b;if(42===c.status)if(2===c.wrap)a.v=0,R(c,31),R(c,139),R(c,8),c.s?(R(c,(c.s.text?1:0)+(c.s.ya?2:0)+(c.s.xa?4:0)+(c.s.name?8:0)+(c.s.comment?16:0)),R(c,c.s.time&255),R(c,c.s.time>>8&255),R(c,c.s.time>>16&255),R(c,c.s.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.s.Qd&255),c.s.xa&&c.s.xa.length&&(R(c,
c.s.xa.length&255),R(c,c.s.xa.length>>8&255)),c.s.ya&&(a.v=Eg(a.v,c.J,c.pending,0)),c.ea=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Ub-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Mh(c,e+(31-e%31));0!==c.j&&(Mh(c,a.v>>>16),Mh(c,a.v&65535));a.v=1}if(69===c.status)if(c.s.xa){for(e=c.pending;c.ea<(c.s.xa.length&65535)&&(c.pending!==c.da||(c.s.ya&&c.pending>
e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Lh(a),e=c.pending,c.pending!==c.da));)R(c,c.s.xa[c.ea]&255),c.ea++;c.s.ya&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e));c.ea===c.s.xa.length&&(c.ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.s.name){e=c.pending;do{if(c.pending===c.da&&(c.s.ya&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Lh(a),e=c.pending,c.pending===c.da)){var f=1;break}f=c.ea<c.s.name.length?c.s.name.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.s.ya&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-
e,e));0===f&&(c.ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.s.comment){e=c.pending;do{if(c.pending===c.da&&(c.s.ya&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e)),Lh(a),e=c.pending,c.pending===c.da)){f=1;break}f=c.ea<c.s.comment.length?c.s.comment.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.s.ya&&c.pending>e&&(a.v=Eg(a.v,c.J,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.s.ya?(c.pending+2>c.da&&Lh(a),c.pending+2<=c.da&&(R(c,a.v&255),R(c,a.v>>8&255),a.v=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Lh(a),0===a.D)return c.Ta=-1,0}else if(0===a.T&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Jh(a,-5);if(666===c.status&&0!==a.T)return Jh(a,-5);if(0!==a.T||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Sh(c,b):3===c.strategy?Rh(c,b):Uh[c.level].Rc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.D&&(c.Ta=-1),0;if(2===d&&(1===b?(N(c,2,3),uh(c,256,ih),16===c.O?(th(c,c.U),c.U=0,c.O=0):8<=c.O&&(c.J[c.pending++]=c.U&255,c.U>>=8,c.O-=
8)):5!==b&&(N(c,0,3),zh(c,0,0),3===b&&(Kh(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Lh(a),0===a.D))return c.Ta=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.v&255),R(c,a.v>>8&255),R(c,a.v>>16&255),R(c,a.v>>24&255),R(c,a.Ka&255),R(c,a.Ka>>8&255),R(c,a.Ka>>16&255),R(c,a.Ka>>24&255)):(Mh(c,a.v>>>16),Mh(c,a.v&65535));Lh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Xh={};Xh=function(){this.input=null;this.Ka=this.T=this.Ja=0;this.hb=null;this.Tb=this.D=this.Wa=0;this.msg="";this.state=null;this.Hb=2;this.v=0};var Yh=Object.prototype.toString;
function Zh(a){if(!(this instanceof Zh))return new Zh(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,Ca:15,gd:8,strategy:0,Ac:""},a||{});a.raw&&0<a.Ca?a.Ca=-a.Ca:a.Uc&&0<a.Ca&&16>a.Ca&&(a.Ca+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.A=new Xh;this.A.D=0;var b=this.A;var c=a.level,d=a.method,e=a.Ca,f=a.gd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Jh(b,-2);else{8===e&&(e=9);var k=new Vh;
b.state=k;k.A=b;k.wrap=h;k.s=null;k.Ub=e;k.S=1<<k.Ub;k.Ba=k.S-1;k.Ib=f+7;k.wb=1<<k.Ib;k.pa=k.wb-1;k.qa=~~((k.Ib+3-1)/3);k.window=new M.Ma(2*k.S);k.head=new M.na(k.wb);k.la=new M.na(k.S);k.gb=1<<f+6;k.da=4*k.gb;k.J=new M.Ma(k.da);k.cb=1*k.gb;k.Kb=3*k.gb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ka=b.Tb=0;b.Hb=2;c=b.state;c.pending=0;c.ib=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.v=2===c.wrap?0:1;c.Ta=0;if(!Hh){d=Array(16);for(f=g=0;28>f;f++)for(mh[f]=g,e=0;e<1<<eh[f];e++)lh[g++]=
f;lh[g-1]=f;for(f=g=0;16>f;f++)for(nh[f]=g,e=0;e<1<<fh[f];e++)kh[g++]=f;for(g>>=7;30>f;f++)for(nh[f]=g<<7,e=0;e<1<<fh[f]-7;e++)kh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)ih[2*e+1]=8,e++,d[8]++;for(;255>=e;)ih[2*e+1]=9,e++,d[9]++;for(;279>=e;)ih[2*e+1]=7,e++,d[7]++;for(;287>=e;)ih[2*e+1]=8,e++,d[8]++;wh(ih,287,d);for(e=0;30>e;e++)jh[2*e+1]=5,jh[2*e]=vh(e,5);ph=new oh(ih,eh,257,286,15);qh=new oh(jh,fh,0,30,15);rh=new oh([],gh,0,19,7);Hh=!0}c.xb=new sh(c.X,ph);c.tb=new sh(c.Fa,qh);c.Vb=new sh(c.R,
rh);c.U=0;c.O=0;xh(c);c=0}else c=Jh(b,-2);0===c&&(b=b.state,b.Bc=2*b.S,Kh(b.head),b.Mb=Uh[b.level].ed,b.ec=Uh[b.level].Tc,b.pc=Uh[b.level].hd,b.nc=Uh[b.level].dd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.F=b.aa=2,b.Ha=0,b.B=0);b=c}}else b=-2;if(0!==b)throw Error(ch[b]);a.header&&(b=this.A)&&b.state&&2===b.state.wrap&&(b.state.s=a.header);if(a.eb){var l;"string"===typeof a.eb?l=Cg(a.eb):"[object ArrayBuffer]"===Yh.call(a.eb)?l=new Uint8Array(a.eb):l=a.eb;a=this.A;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.v=Dg(a.v,f,g,0));l.wrap=0;g>=l.S&&(0===b&&(Kh(l.head),l.j=0,l.Z=0,l.Y=0),c=new M.Ma(l.S),M.Na(c,f,g-l.S,l.S,0),f=c,g=l.S);c=a.T;d=a.Ja;e=a.input;a.T=g;a.Ja=0;a.input=f;for(Oh(l);3<=l.m;){f=l.j;g=l.m-2;do l.B=(l.B<<l.qa^l.window[f+3-1])&l.pa,l.la[f&l.Ba]=l.head[l.B],l.head[l.B]=f,f++;while(--g);l.j=f;l.m=2;Oh(l)}l.j+=l.m;l.Z=l.j;l.Y=l.m;l.m=0;l.F=l.aa=2;l.Ha=0;a.Ja=d;a.input=e;a.T=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ch[b]);this.Hd=!0}}
Zh.prototype.push=function(a,b){var c=this.A,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Cg(a):"[object ArrayBuffer]"===Yh.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ja=0;c.T=c.input.length;do{0===c.D&&(c.hb=new M.Ma(d),c.Wa=0,c.D=d);a=Wh(c,e);if(1!==a&&0!==a)return $h(this,a),this.ended=!0,!1;if(0===c.D||0===c.T&&(4===e||2===e))if("string"===this.options.Ac){var f=M.Sb(c.hb,c.Wa);b=f;f=f.length;if(65537>f&&(b.subarray&&Bg||!b.subarray))b=
String.fromCharCode.apply(null,M.Sb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Sb(c.hb,c.Wa),this.chunks.push(b)}while((0<c.T||0===c.D)&&1!==a);if(4===e)return(c=this.A)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Jh(c,-2):(c.state=null,a=113===d?Jh(c,-3):0)):a=-2,$h(this,a),this.ended=!0,0===a;2===e&&($h(this,0),c.D=0);return!0};
function $h(a,b){0===b&&(a.result="string"===a.options.Ac?a.chunks.join(""):M.cc(a.chunks));a.chunks=[];a.err=b;a.msg=a.A.msg}
;function ai(a){this.name=a}
;var bi=new ai("rawColdConfigGroup");var ci=new ai("rawHotConfigGroup");function di(a){J.call(this,a)}
v(di,J);function ei(a){J.call(this,a)}
v(ei,J);function fi(a){J.call(this,a,-1,gi)}
v(fi,J);var gi=[2];function hi(a){J.call(this,a,-1,ii)}
v(hi,J);hi.prototype.getPlayerType=function(){var a=Zc(this,36);return null==a?0:a};
hi.prototype.setHomeGroupInfo=function(a){return H(this,fi,81,a)};
var ii=[9,66,24,32,86,100,101];function ji(a){J.call(this,a)}
v(ji,J);ji.prototype.getKey=function(){return kd(this,1)};
ji.prototype.ia=function(){return kd(this,2===cd(this,ki)?2:-1)};
var ki=[2,3,4,5,6];function li(a){J.call(this,a,-1,mi)}
v(li,J);var mi=[15,26,28];function ni(a){J.call(this,a,-1,oi)}
v(ni,J);var oi=[5];function pi(a){J.call(this,a)}
v(pi,J);function qi(a){J.call(this,a,-1,ri)}
v(qi,J);qi.prototype.setSafetyMode=function(a){return G(this,5,a)};
var ri=[12];function si(a){J.call(this,a,-1,ti)}
v(si,J);var ti=[12];var ui={Gd:"WEB_DISPLAY_MODE_UNKNOWN",Cd:"WEB_DISPLAY_MODE_BROWSER",Ed:"WEB_DISPLAY_MODE_MINIMAL_UI",Fd:"WEB_DISPLAY_MODE_STANDALONE",Dd:"WEB_DISPLAY_MODE_FULLSCREEN"};function vi(a){J.call(this,a)}
v(vi,J);vi.prototype.getKey=function(){return kd(this,1)};
vi.prototype.ia=function(){return kd(this,2)};function wi(a){J.call(this,a,-1,xi)}
v(wi,J);var xi=[4,5];function yi(a){J.call(this,a)}
v(yi,J);function zi(a){J.call(this,a)}
v(zi,J);var Ai=[2,3,4,5];function Bi(a){J.call(this,a)}
v(Bi,J);function Ci(a){J.call(this,a)}
v(Ci,J);function Di(a){J.call(this,a)}
v(Di,J);function Ei(a){J.call(this,a,-1,Fi)}
v(Ei,J);var Fi=[10,17];function Gi(a){J.call(this,a)}
v(Gi,J);function Hi(a){J.call(this,a)}
v(Hi,J);function Ii(a){J.call(this,a)}
v(Ii,J);function Ji(a){J.call(this,a,475)}
v(Ji,J);
var Ki=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Li(a){J.call(this,a)}
v(Li,J);function Mi(a){J.call(this,a)}
v(Mi,J);Mi.prototype.getPlaylistId=function(){return ld(this,2)};
var md=[1,2];function Ni(a){J.call(this,a,-1,Oi)}
v(Ni,J);var Oi=[3];var Pi=z.window,Qi,Ri,Si=(null==Pi?void 0:null==(Qi=Pi.yt)?void 0:Qi.config_)||(null==Pi?void 0:null==(Ri=Pi.ytcfg)?void 0:Ri.data_)||{};B("yt.config_",Si);function Ti(){var a=arguments;1<a.length?Si[a[0]]=a[1]:1===a.length&&Object.assign(Si,a[0])}
function S(a,b){return a in Si?Si[a]:b}
function Ui(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Vi(){var a=Si.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Wi=[];function Xi(a){Wi.forEach(function(b){return b(a)})}
function Yi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Zi(b)}}:a}
function Zi(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ti("ERRORS",b));Xi(a)}
function $i(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ti("ERRORS",f))}
;function U(a){a=aj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function bj(a,b){a=aj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function aj(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function cj(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var dj=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++dj});var ej={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ej||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.h=a.pageY}}catch(e){}}
function gj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
fj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var hj=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",hj);
function ij(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function jj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var kj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function lj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ij(a,b,c,d);if(e)return e;e=++hj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new fj(h);if(!Ad(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fj(h);
h.currentTarget=a;return c.call(a,h)};
g=Yi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function mj(a,b){"function"===typeof a&&(a=Yi(a));return window.setTimeout(a,b)}
function nj(a,b){"function"===typeof a&&(a=Yi(a));return window.setInterval(a,b)}
;var oj=/^[\w.]*$/,pj={q:!0,search_query:!0};function qj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=rj(f[0]||""),h=rj(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(qj);k.args=[{key:l,value:f[1],query:a,method:sj==m?"unchanged":m}];pj.hasOwnProperty(l)||$i(k)}}return c}
var sj=String(qj);function tj(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function uj(a){"?"==a.charAt(0)&&(a=a.substr(1));return qj(a,"&")}
function vj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=uj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=bc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function wj(a){if(!b)var b=window.location.href;var c=a.match(Xb)[1]||null,d=Zb(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Zb(b)==d&&(Number(b.match(Xb)[4]||null)||null)==(Number(a.match(Xb)[4]||null)||null):!0;return a}
function rj(a){return a&&a.match(oj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function xj(a){var b=yj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Td;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ca){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?wd:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;var k;e.u_h=null==(k=wd.screen)?void 0:k.height;var l;e.u_w=null==(l=wd.screen)?void 0:l.width;var m;e.u_ah=null==(m=wd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=wd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=wd.screen)?void 0:r.colorDepth}catch(ca){}h=b.g;try{var p=h.screenX;var y=h.screenY}catch(ca){}try{var A=h.outerWidth;var I=h.outerHeight}catch(ca){}try{var O=h.innerWidth;var T=h.innerHeight}catch(ca){}try{var Q=h.screenLeft;var xa=h.screenTop}catch(ca){}try{O=h.innerWidth,T=h.innerHeight}catch(ca){}try{var Mc=h.screen.availWidth;var Ia=h.screen.availTop}catch(ca){}p=[Q,xa,p,y,Mc,Ia,A,I,O,T];y=b.g.top;try{var ya=(y||window).document,da=
"CSS1Compat"==ya.compatMode?ya.documentElement:ya.body;var ja=(new yd(da.clientWidth,da.clientHeight)).round()}catch(ca){ja=new yd(-12245933,-12245933)}ya=ja;ja={};var ka=void 0===ka?z:ka;da=new Re;"SVGElement"in ka&&"createElementNS"in ka.document&&da.set(0);y=Rd();y["allow-top-navigation-by-user-activation"]&&da.set(1);y["allow-popups-to-escape-sandbox"]&&da.set(2);ka.crypto&&ka.crypto.subtle&&da.set(3);"TextDecoder"in ka&&"TextEncoder"in ka&&da.set(4);ka=Se(da);ja.bc=ka;ja.bih=ya.height;ja.biw=
ya.width;ja.brdim=p.join();b=b.h;b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!wd.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var yj=new function(){var a=window.document;this.g=window;this.h=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return tj(xj(a))});Date.now();var zj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Aj(){if(!zj)return null;var a=zj();return"open"in a?a:null}
;var Bj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Cj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Vd)),Dj=!1;
function Ej(a,b){b=void 0===b?{}:b;var c=wj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Bj){var f=S(Bj[e]);"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Zb(a)||d&&void 0!==b[e]||!(U("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Zb(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!Zb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Zb(a)||(b["X-YouTube-Ad-Signals"]=tj(xj()));return b}
function Fj(a){var b=window.location.search,c=Zb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&wj(a)&&(c=document.location.hostname);var d=Yb(a.match(Xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=uj(b),f={};db(Cj,function(g){e[g]&&(f[g]=e[g])});
return vj(a,f||{},!1)}
function Gj(a,b){var c=b.format||"JSON";a=Hj(a,b);var d=Ij(a,b),e=!1,f=Jj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Kj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=mj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Hj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=vj(a,b||{},!0);return a}
function Ij(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Zb(a)&&!b.withCredentials&&Zb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=uj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):bc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Dj&&a&&"POST"!=b.method&&(Dj=!0,Zi(Error("AJAX request with postData should use POST")));return e}
function Kj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,$i(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Lj(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Mj(g)})}d&&Nj(e);
return e}
function Nj(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===qb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){z.console&&z.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Vb(d)}else Nj(a[b])}}
function Lj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Mj(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Oj(a,b){b.method="POST";b.postParams||(b.postParams={});return Gj(a,b)}
function Jj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Yi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Aj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=Fj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ej(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Pj=[{Nb:function(a){return"Cannot read property '"+a.key+"'"},
yb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Nb:function(a){return"Cannot call '"+a.key+"'"},
yb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Nb:function(a){return a.key+" is not defined"},
yb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rj={za:[],wa:[{Jc:Qj,weight:500}]};function Qj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sj(){this.wa=[];this.za=[]}
var Tj;function Uj(){if(!Tj){var a=Tj=new Sj;a.za.length=0;a.wa.length=0;Rj.za&&a.za.push.apply(a.za,Rj.za);Rj.wa&&a.wa.push.apply(a.wa,Rj.wa)}return Tj}
;var Vj=new K;function Wj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Xj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Xj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Xj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Yj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Wj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Zj(e+".ve",f,g,h):0;d+=g;d+=Zj(e,a[e],b,c);if(500<d)break}}else c[b]=ak(a),d+=c[b].length;else c[b]=ak(a),d+=c[b].length;return d}
function Zj(a,b,c,d){c+="."+a;a=ak(b);d[c]=a;return c.length+a.length}
function ak(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function bk(){}
;function ck(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var dk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ek={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},fk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},gk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function hk(){var a=z.navigator;return a?a.connection:void 0}
;function ik(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(ik,Error);function jk(){try{return kk(),!0}catch(a){return!1}}
function kk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new ik("Datasync ID not set","unknown");}
;function lk(){}
function mk(a,b){return nk(a,0,b)}
lk.prototype.ha=function(a,b){return nk(a,1,b)};function ok(){lk.apply(this,arguments)}
v(ok,lk);function pk(){ok.g||(ok.g=new ok);return ok.g}
function nk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):mj(a,c||0)}
ok.prototype.Oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ok.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Qe=pk();function qk(a){var b=new rg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new xg(b,a):b:null)||(a=new sg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new ng(a):null;this.h=document.domain||window.location.hostname}
qk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Pf(b))}catch(f){return}else e=escape(b);b=this.h;be.set(""+a,e,{Lb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
qk.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=be.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qk.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;be.remove(""+a,"/",void 0===b?"youtube.com":b)};var rk=function(){var a;return function(){a||(a=new qk("ytidb"));return a}}();
function sk(){var a;return null==(a=rk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var tk=[],uk=!1;function vk(a){uk||(tk.push({type:"ERROR",payload:a}),10<tk.length&&tk.shift())}
function wk(a,b){uk||(tk.push({type:"EVENT",eventType:a,payload:b}),10<tk.length&&tk.shift())}
;function xk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function yk(a){return a.substr(0,a.indexOf(":"))||a}
;var zk=zc||Ac;var Ak={},Bk=(Ak.AUTH_INVALID="No user identifier specified.",Ak.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ak.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ak.MISSING_INDEX="Index not created.",Ak.MISSING_OBJECT_STORES="Object stores not created.",Ak.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ak.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ak.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ak.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ak.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ak.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ak.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ak),Ck={},Dk=(Ck.AUTH_INVALID="ERROR",Ck.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ck.EXPLICIT_ABORT="IGNORED",Ck.IDB_NOT_SUPPORTED="ERROR",Ck.MISSING_INDEX=
"WARNING",Ck.MISSING_OBJECT_STORES="ERROR",Ck.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ck.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ck.QUOTA_EXCEEDED="WARNING",Ck.QUOTA_MAYBE_EXCEEDED="WARNING",Ck.UNKNOWN_ABORT="WARNING",Ck.INCOMPATIBLE_DB_VERSION="WARNING",Ck),Ek={},Fk=(Ek.AUTH_INVALID=!1,Ek.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ek.EXPLICIT_ABORT=!1,Ek.IDB_NOT_SUPPORTED=!1,Ek.MISSING_INDEX=!1,Ek.MISSING_OBJECT_STORES=!1,Ek.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ek.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ek.QUOTA_EXCEEDED=!1,Ek.QUOTA_MAYBE_EXCEEDED=!0,Ek.UNKNOWN_ABORT=!0,Ek.INCOMPATIBLE_DB_VERSION=!1,Ek);function W(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bk[a]:c;d=void 0===d?Dk[a]:d;e=void 0===e?Fk[a]:e;ik.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
v(W,ik);function Gk(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gk.prototype)}
v(Gk,W);function Hk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hk.prototype)}
v(Hk,Error);var Ik=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jk(a,b,c,d){b=yk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new W("QUOTA_EXCEEDED",a);if(Bc&&"UnknownError"===e.name)return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hk)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ik.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Pd:e.name})];e.level="WARNING";return e}
function Kk(a,b,c){var d=sk();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Lk(a){if(!a)throw Error();throw a;}
function Mk(a){return a}
function Nk(a){this.g=a}
function Ok(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Ok.resolve=function(a){return new Ok(new Nk(function(b,c){a instanceof Ok?a.then(b,c):b(a)}))};
Ok.reject=function(a){return new Ok(new Nk(function(b,c){c(a)}))};
Ok.prototype.then=function(a,b){var c=this,d=null!=a?a:Mk,e=null!=b?b:Lk;return new Ok(new Nk(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Pk(c,c,d,f,g)}),c.h.push(function(){Qk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pk(c,c,d,f,g):"REJECTED"===c.state.status&&Qk(c,c,e,f,g)}))};
function Rk(a,b){a.then(void 0,b)}
function Pk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ok?Sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ok?Sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ok?Sk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Uk(a){return new Promise(function(b,c){Tk(a,b,c)})}
function Vk(a){return new Ok(new Nk(function(b,c){Tk(a,b,c)}))}
;function Wk(a,b){return new Ok(new Nk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Xk=window,X=Xk.ytcsi&&Xk.ytcsi.now?Xk.ytcsi.now:Xk.performance&&Xk.performance.timing&&Xk.performance.now&&Xk.performance.timing.navigationStart?function(){return Xk.performance.timing.navigationStart+Xk.performance.now()}:function(){return(new Date).getTime()};function Yk(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(X());this.h=!1}
q=Yk.prototype;q.add=function(a,b,c){return Zk(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Zk(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function $k(a,b,c){a=a.g.createObjectStore(b,c);return new al(a)}
q.delete=function(a,b){return Zk(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Zk(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function bl(a,b,c){return Zk(a,[b],{mode:"readwrite",V:!0},function(d){d=d.objectStore(b);return Vk(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Zk(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(I){switch(I.g){case 1:var O={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){I.C(3);break}g++;k=Math.round(X());wa(I,4);l=a.g.transaction(b,e.mode);O=new cl(l);O=dl(O,d);return w(I,O,6);case 6:return m=I.h,n=Math.round(X()),el(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Aa(I);p=Math.round(X());y=Jk(r,a.g.name,b.join(),a.g.version);
if((A=y instanceof W&&!y.g)||g>=f)el(a,k,p,g,y,b.join(),e),h=y;I.C(2);break;case 3:return I.return(Promise.reject(h))}})}
function el(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&wk("QUOTA_EXCEEDED",{dbName:yk(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),wk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),fl(a,!1,d,f,b,g.tag),vk(e)):fl(a,!0,d,f,b,g.tag)}
function fl(a,b,c,d,e,f){wk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function al(a){this.g=a}
q=al.prototype;q.add=function(a,b){return Vk(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Vk(this.g.clear()).then(function(){})};
function Rl(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Sl(a,b){return Tl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Sl(this,a):Vk(this.g.delete(a))};
q.get=function(a){return Vk(this.g.get(a))};
q.index=function(a){try{return new Ul(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hk(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function Tl(a,b,c){a=a.g.openCursor(b.query,b.direction);return Vl(a).then(function(d){return Wk(d,c)})}
function cl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function dl(a,b){var c=new Promise(function(d,e){try{Rk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
cl.prototype.abort=function(){this.g.abort();this.h=!0;throw new W("EXPLICIT_ABORT");};
cl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new al(a),this.i.set(a,b));return b};
function Ul(a){this.g=a}
q=Ul.prototype;q.delete=function(a){return Wl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Vk(this.g.get(a))};
q.getKey=function(a){return Vk(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function Wl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Vl(a).then(function(d){return Wk(d,c)})}
function Xl(a,b){this.request=a;this.cursor=b}
function Vl(a){return Vk(a).then(function(b){return b?new Xl(a,b):null})}
q=Xl.prototype;q.advance=function(a){this.cursor.advance(a);return Vl(this.request)};
q.continue=function(a){this.cursor.continue(a);return Vl(this.request)};
q.delete=function(){return Vk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ia=function(){return this.cursor.value};
q.update=function(a){return Vk(this.cursor.update(a))};function Yl(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Yk(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Hc,k=c.Ic,l=c.md,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&wk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:yk(a)});var y=f(),A=new cl(g.transaction);m&&
m(y,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){wk("IDB_UNEXPECTEDLY_CLOSED",{dbName:yk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Zl(a,b,c){c=void 0===c?{}:c;return Yl(a,b,c)}
function $l(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Hc)&&c.addEventListener("blocked",function(){e()}),w(g,Uk(c),4);
if(2!=g.g)return za(g,0);f=Aa(g);throw Jk(f,a,"",-1);})}
;function am(a,b){this.name=a;this.options=b;this.i=!0;this.u=this.l=0}
am.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Zl(a,b,c)};
am.prototype.delete=function(a){a=void 0===a?{}:a;return $l(this.name,a)};
function bm(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function cm(a,b){if(!b)throw Kk("openWithToken",yk(a.name));return dm(a)}
function dm(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),w(A,a.h(a.name,a.options.version,d),4);case 4:h=A.h;for(var I=a.options,O=[],T=u(Object.keys(I.Xa)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var xa=I.Xa[Q],Mc=void 0===xa.kd?Number.MAX_VALUE:xa.kd;!(h.g.version>=xa.bb)||h.g.version>=Mc||h.g.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.C(5);break}l=Object.keys(a.options.Xa);m=h.objectStoreNames();
if(a.u<bj("ytidb_reopen_db_retries",0))return a.u++,h.close(),vk(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.l<bj("ytidb_remake_db_retries",1))){A.C(6);break}a.l++;return w(A,a.delete(),7);case 7:return vk(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Gk(m,l);case 5:return A.return(h);case 2:n=Aa(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.C(8);break}return w(A,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,bm(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jk(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw bm(a);if(a.g)return a.g;var d={Ic:function(f){f.close()},
closed:c,md:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var em=new am("YtIdbMeta",{Xa:{databases:{bb:1}},upgrade:function(a,b){b(1)&&$k(a,"databases",{keyPath:"actualName"})}});
function fm(a,b){var c;return x(function(d){if(1==d.g)return w(d,cm(em,b),2);c=d.h;return d.return(Zk(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vk(f.g.put(a,void 0)).then(function(){})})}))})}
function gm(a,b){var c;return x(function(d){if(1==d.g)return a?w(d,cm(em,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function hm(a,b){var c,d;return x(function(e){return 1==e.g?(c=[],w(e,cm(em,b),2)):3!=e.g?(d=e.h,w(e,Zk(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return Tl(f.objectStore("databases"),{},function(g){a(g.ia())&&c.push(g.ia());return g.continue()})}),3)):e.return(c)})}
function im(a){return hm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var jm,km=new function(){}(new function(){});
function lm(){var a,b,c,d;return x(function(e){switch(e.g){case 1:a=sk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zk)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,fm(d,km),4);case 4:return w(e,gm("yt-idb-test-do-not-use",km),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function mm(){if(void 0!==jm)return jm;uk=!0;return jm=lm().then(function(a){uk=!1;var b;if(null!=(b=rk())&&b.g){var c;b={hasSucceededOnce:(null==(c=sk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=rk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function nm(){return C("ytglobal.idbToken_")||void 0}
function om(){var a=nm();return a?Promise.resolve(a):mm().then(function(b){(b=b?km:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Qf;function pm(a){if(!jk())throw a=new W("AUTH_INVALID",{dbName:a}),vk(a),a;var b=kk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function qm(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,om(),2);case 2:g=m.h;if(!g)throw h=Kk("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vk(h),h;xk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:pm(a);wa(m,3);return w(m,fm(k,g),5);case 5:return w(m,Zl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=Aa(m),wa(m,7),w(m,gm(k.actualName,g),9);case 9:za(m,
8);break;case 7:Aa(m);case 8:throw l;}})}
function rm(a,b,c){c=void 0===c?{}:c;return qm(a,b,!1,c)}
function sm(a,b,c){c=void 0===c?{}:c;return qm(a,b,!0,c)}
function tm(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.g)return w(e,om(),2);if(3!=e.g){c=e.h;if(!c)return e.return();xk(a);d=pm(a);return w(e,$l(d.actualName,b),3)}return w(e,gm(d.actualName,c),0)})}
function um(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.g?w(e,$l(d.actualName,b),2):w(e,gm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function vm(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.g)return w(d,om(),2);if(3!=d.g){b=d.h;if(!b)return d.return();xk("LogsDatabaseV2");return w(d,im(b),3)}c=d.h;return w(d,um(c,a,b),0)})}
function wm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.g)return w(d,om(),2);if(3!=d.g){c=d.h;if(!c)return d.return();xk(a);return w(d,$l(a,b),3)}return w(d,gm(a,c),0)})}
;function xm(a,b){am.call(this,a,b);this.options=b;xk(a)}
v(xm,am);function ym(a,b){var c;return function(){c||(c=new xm(a,b));return c}}
xm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Cb?sm:rm)(a,b,Object.assign({},c))};
xm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Cb?wm:tm)(this.name,a)};
function zm(a,b){return ym(a,b)}
;var Am={},Bm=zm("ytGcfConfig",{Xa:(Am.coldConfigStore={bb:1},Am.hotConfigStore={bb:1},Am),Cb:!1,upgrade:function(a,b){b(1)&&(Rl($k(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Rl($k(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Cm(a){return cm(Bm(),a)}
function Dm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:X()},w(g,Cm(c),2);case 2:return e=g.h,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,bl(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Em(a,b,c,d){var e,f,g;return x(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},w(h,Cm(d),2);case 2:return f=h.h,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,bl(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Fm(a){var b,c;return x(function(d){return 1==d.g?w(d,Cm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Zk(b,["coldConfigStore"],{mode:"readwrite",V:!0},function(e){return Wl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
function Gm(a){var b,c;return x(function(d){return 1==d.g?w(d,Cm(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Zk(b,["hotConfigStore"],{mode:"readwrite",V:!0},function(e){return Wl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ia()})}),3)):d.return(c)})}
;function Hm(){this.g=0}
function Im(a,b,c){var d,e,f;return x(function(g){if(1==g.g){if(!U("update_log_event_config"))return g.C(0);c&&(a.h=c,B("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=nm())?c?g.C(4):w(g,Gm(d),5):g.C(0)}4!=g.g&&(e=g.h,c=null==(f=e)?void 0:f.config);return w(g,Dm(c,b,d),0)})}
function Jm(a,b,c){var d,e,f,g;return x(function(h){if(1==h.g){if(!U("update_log_event_config"))return h.C(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=nm())?c?h.C(4):w(h,Fm(d),5):h.C(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.C(0);g=c.configData;return w(h,Em(c,b,g,d),0)})}
;function Km(){return"INNERTUBE_API_KEY"in Si&&"INNERTUBE_API_VERSION"in Si}
function Lm(){return{Vc:S("INNERTUBE_API_KEY"),Wc:S("INNERTUBE_API_VERSION"),Jb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hc:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Xc:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),ic:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),kc:S("INNERTUBE_CONTEXT_HL"),jc:S("INNERTUBE_CONTEXT_GL"),Yc:S("INNERTUBE_HOST_OVERRIDE")||"",ad:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Zc:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Mm(a){var b={client:{hl:a.kc,gl:a.jc,clientName:a.hc,clientVersion:a.ic,configInfo:a.Jb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=cj();0<c.length&&(b.request={internalExperimentFlags:c});Nm(a,void 0,b);Om(void 0,b);Pm(void 0,b);Qm(a,void 0,b);Rm(void 0,b);U("start_sending_config_hash")&&Sm(void 0,b);S("DELEGATED_SESSION_ID")&&
!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(uj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Tm(a){var b=new si,c=new hi;G(c,1,a.kc);G(c,2,a.jc);G(c,16,a.Xc);G(c,17,a.ic);if(a.Jb){var d=a.Jb,e=new di;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,di,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);G(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&G(c,
54,d);d=cj();if(0<d.length){e=new li;for(var f=0;f<d.length;f++){var g=new ji;G(g,1,d[f].key);bd(g,2,ki,d[f].value);jd(e,15,ji,g)}H(b,li,5,e)}Nm(a,c);Om(b);Pm(c);Qm(a,c);Rm(c);U("start_sending_config_hash")&&Sm(c);S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new qi,G(a,3,S("DELEGATED_SESSION_ID")));a=u(Object.entries(uj(S("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===
d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,hi,1,c);return b}
function Nm(a,b,c){a=a.hc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=gd(b,ei,96)||new ei;var d=ck();d=Object.keys(ui).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,ei,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=ck())}
function Om(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=gd(a,ni,7)||new ni,G(b,4,c),H(a,ni,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Pm(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Qm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=gd(b,di,62))?d:new di;G(c,6,a.appInstallData);H(b,di,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Rm(a,b){a:{var c=hk();if(c){var d=dk[c.type||"unknown"]||"CONN_UNKNOWN";c=dk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,ek[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=hk(),d=null!=d&&d.effectiveType?gk.hasOwnProperty(d.effectiveType)?gk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,fk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Um(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Jd||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Id;else{bk.g||(bk.g=new bk);a={};if(c=ee([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Si||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Si&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Sm(a,b){Hm.g||(Hm.g=new Hm);var c=Hm.g;var d=X()-c.g;if(0!==c.g&&d<bj("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.g=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=gd(a,di,62))?g:new di;G(b,1,c);G(b,3,d);G(b,5,e);H(a,di,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Vm=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.lb;K.prototype.publish=K.prototype.Ya;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",Vm);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function Wm(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Vd:a,Ud:b},(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Xm=bj("max_body_size_to_compress",5E5),Ym=bj("min_body_size_to_compress",500),Zm=!0,$m=0,an=0,bn=bj("compression_performance_threshold",250),cn=bj("slow_compressions_before_abandon_count",10);
function dn(a,b,c,d){var e=X(),f={startTime:e,ticks:{},infos:{}};if(Zm)try{try{var g=(new Blob(b.split(""))).size}catch(r){$i(r),g=null}if(null==g||!(g>Xm||g<Ym)){var h=ge(b);var k=k||{};k.Uc=!0;var l=new Zh(k);l.push(h,!0);if(l.err)throw l.msg||ch[l.err];var m=l.result;var n=X();f.ticks.gelc=n;an++;U("disable_compression_due_to_performance_degredation")&&n-e>=bn&&($m++,U("abandon_compression_after_N_slow_zips")?an===bj("compression_disable_point")&&$m>cn&&(Zm=!1):Zm=!1);U("gel_compression_csi_killswitch")||
!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Wm("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){$i(r),d(a,c)}else d(a,c)}
;function en(a){a=Object.assign({},a);delete a.Authorization;var b=ee();if(b){var c=new Bf;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ec(c.digest(),3)}return a}
;var fn;function gn(){fn||(fn=new qk("yt.innertube"));return fn}
function hn(a,b,c,d){if(d)return null;d=gn().get("nextId",!0)||1;var e=gn().get("requests",!0)||{};e[d]={method:a,request:b,authState:en(c),requestTime:Math.round(X())};gn().set("nextId",d+1,86400,!0);gn().set("requests",e,86400,!0);return d}
function jn(a){var b=gn().get("requests",!0)||{};delete b[a];gn().set("requests",b,86400,!0)}
function kn(a){var b=gn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=en(Um(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),ln(a,d.method,e,{}));delete b[c]}}gn().set("requests",b,86400,!0)}}
;function mn(a){this.pb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ra=function(){};
this.now=Date.now;this.fb=!1;var b;this.zc=null!=(b=a.zc)?b:100;var c;this.xc=null!=(c=a.xc)?c:1;var d;this.vc=null!=(d=a.vc)?d:2592E6;var e;this.uc=null!=(e=a.uc)?e:12E4;var f;this.wc=null!=(f=a.wc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.ub=!!a.ub;var h;this.sb=null!=(h=a.sb)?h:.1;var k;this.zb=null!=(k=a.zb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ra&&(this.Ra=a.Ra);a.fb&&(this.fb=a.fb);a.pb&&(this.pb=a.pb);this.I=a.I;this.fa=a.fa;this.N=a.N;this.P=a.P;this.va=a.va;this.Qb=
a.Qb;this.Pb=a.Pb;nn(this)&&(!this.I||this.I("networkless_logging"))&&on(this)}
function on(a){nn(a)&&!a.fb&&(a.g=!0,a.ub&&Math.random()<=a.sb&&a.N.Kc(a.H),pn(a),a.P.ba()&&a.kb(),a.P.Ga(a.Qb,a.kb.bind(a)),a.P.Ga(a.Pb,a.Wb.bind(a)))}
q=mn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(nn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.H).then(function(e){d.id=e;c.P.ba()&&qn(c,d)}).catch(function(e){qn(c,d);
rn(c,e)})}else this.va(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(nn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ba()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.g)return w(k,d.N.set(e,d.H).catch(function(l){rn(d,l)}),2);
f(g,h);k.g=0})}}this.va(a,b,e.skipRetry)}else this.N.set(e,this.H).catch(function(g){d.va(a,b,e.skipRetry);
rn(d,g)})}else this.va(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(nn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Pa(d.id,c.H):e=!0;c.P.Ia&&c.I&&c.I("vss_network_hint")&&c.P.Ia(!0);f(g,h)};
this.va(d.url,d.options);this.N.set(d,this.H).then(function(g){d.id=g;e&&c.N.Pa(d.id,c.H)}).catch(function(g){rn(c,g)})}else this.va(a,b)};
q.kb=function(){var a=this;if(!nn(this))throw Kk("throttleSend");this.h||(this.h=this.fa.ha(function(){var b;return x(function(c){if(1==c.g)return w(c,a.N.dc("NEW",a.H),2);if(3!=c.g)return b=c.h,b?w(c,qn(a,b),3):(a.Wb(),c.return());a.h&&(a.h=0,a.kb());c.g=0})},this.zc))};
q.Wb=function(){this.fa.Oa(this.h);this.h=0};
function qn(a,b){var c,d;return x(function(e){switch(e.g){case 1:if(!nn(a))throw c=Kk("immediateSend"),c;if(void 0===b.id){e.C(2);break}return w(e,a.N.cd(b.id,a.H),3);case 3:(d=e.h)||a.Ra(Error("The request cannot be found in the database."));case 2:if(sn(a,b,a.vc)){e.C(4);break}a.Ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.C(5);break}return w(e,a.N.Pa(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=tn(a,b));if(!b){e.C(0);break}if(!b.skipRetry||
void 0===b.id){e.C(8);break}return w(e,a.N.Pa(b.id,a.H),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.g=0}})}
function tn(a,b){if(!nn(a))throw Kk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.g){case 1:g=un(f);(h=vn(f))&&a.I&&a.I("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zb)){m.C(2);break}if(!a.P.Bb){m.C(3);break}return w(m,a.P.Bb(),3);case 3:if(a.P.ba()){m.C(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.C(6);
break}return w(m,a.N.Rb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.C(8);break}return b.sendCount<a.xc?w(m,a.N.Rb(b.id,a.H,!0,h?!1:void 0),12):w(m,a.N.Pa(b.id,a.H),8);case 12:a.fa.ha(function(){a.P.ba()&&a.kb()},a.wc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.C(2):w(h,a.N.Pa(b.id,a.H),2);a.P.Ia&&a.I&&a.I("vss_network_hint")&&a.P.Ia(!0);d(e,f);h.g=0})};
return b}
function sn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function pn(a){if(!nn(a))throw Kk("retryQueuedRequests");a.N.dc("QUEUED",a.H).then(function(b){b&&!sn(a,b,a.uc)?a.fa.ha(function(){return x(function(c){if(1==c.g)return void 0===b.id?c.C(2):w(c,a.N.Rb(b.id,a.H),2);pn(a);c.g=0})}):a.P.ba()&&a.kb()})}
function rn(a,b){a.Cc&&!a.P.ba()?a.Cc(b):a.handleError(b)}
function nn(a){return!!a.H||a.pb}
function un(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function vn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var wn;
function xn(){if(wn)return wn();var a={};wn=zm("LogsDatabaseV2",{Xa:(a.LogsRequestsStore={bb:2},a),Cb:!1,upgrade:function(b,c,d){c(2)&&$k(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Rl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return wn()}
;function yn(a){return cm(xn(),a)}
function zn(a,b){var c,d,e,f;return x(function(g){if(1==g.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,yn(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,bl(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=X();An(c);return g.return(f)})}
function Bn(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,yn(b),2);if(3!=l.g)return d=l.h,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Zk(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(m){return Wl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ia()&&(k=n.ia(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=X();An(c);return l.return(k)})}
function Cn(a,b){var c;return x(function(d){if(1==d.g)return w(d,yn(b),2);c=d.h;return d.return(Zk(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Dn(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.g)return w(f,yn(b),2);e=f.h;return f.return(Zk(e,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Vk(h.g.put(k,void 0)).then(function(){return k})):Ok.resolve(void 0)})}))})}
function En(a,b){var c;return x(function(d){if(1==d.g)return w(d,yn(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Fn(a){var b,c;return x(function(d){if(1==d.g)return w(d,yn(a),2);b=d.h;c=X()-2592E6;return w(d,Zk(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return Tl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gn(){x(function(a){return w(a,vm(),0)})}
function An(a){U("nwl_csi_killswitch")||Wm("networkless_performance",a,{sampleRate:1})}
;var Hn={},In=zm("ServiceWorkerLogsDatabase",{Xa:(Hn.SWHealthLog={bb:1},Hn),Cb:!0,upgrade:function(a,b){b(1)&&Rl($k(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Jn(a){return cm(In(),a)}
function Kn(a){var b,c;x(function(d){if(1==d.g)return w(d,Jn(a),2);b=d.h;c=X()-2592E6;return w(d,Zk(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return Tl(e.objectStore("SWHealthLog"),{},function(f){if(f.ia().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ln(a){var b;return x(function(c){if(1==c.g)return w(c,Jn(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var Mn={},Nn=0;function On(a){var b=new Image,c=""+Nn++;Mn[c]=b;b.onload=b.onerror=function(){delete Mn[c]};
b.src=a}
;function Pn(){this.g=new Map;this.h=!1}
function Qn(){if(!Pn.g){var a=C("yt.networkRequestMonitor.instance")||new Pn;B("yt.networkRequestMonitor.instance",a);Pn.g=a}return Pn.g}
Pn.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Pn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Pn.prototype.removeParams=function(a){return a.split("?")[0]};
Pn.prototype.removeParams=Pn.prototype.removeParams;Pn.prototype.isEndpointCFR=Pn.prototype.isEndpointCFR;Pn.prototype.requestComplete=Pn.prototype.requestComplete;Pn.getInstance=Qn;var Rn;function Sn(){Rn||(Rn=new qk("yt.offline"));return Rn}
function Tn(a){if(U("offline_error_handling")){var b=Sn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Sn().set("errors",b,2592E3,!0)}}
;function Y(){Je.call(this);var a=this;this.l=!1;this.h=Pe();this.h.Ga("networkstatus-online",function(){if(a.l&&U("offline_error_handling")){var b=Sn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new ik(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Zi(d)}Sn().set("errors",{},2592E3,!0)}}})}
v(Y,Je);function Un(){if(!Y.g){var a=C("yt.networkStatusManager.instance")||new Y;B("yt.networkStatusManager.instance",a);Y.g=a}return Y.g}
q=Y.prototype;q.ba=function(){return this.h.ba()};
q.Ia=function(a){this.h.h=a};
q.Sc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Nc=function(){this.l=!0};
q.Ga=function(a,b){return this.h.Ga(a,b)};
q.Bb=function(a){a=Ne(this.h,a);a.then(function(b){U("use_cfr_monitor")&&Qn().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.Bb;Y.prototype.listen=Y.prototype.Ga;Y.prototype.enableErrorFlushing=Y.prototype.Nc;Y.prototype.getWindowStatus=Y.prototype.Sc;Y.prototype.networkStatusHint=Y.prototype.Ia;Y.prototype.isNetworkAvailable=Y.prototype.ba;Y.getInstance=Un;function Vn(a){a=void 0===a?{}:a;Je.call(this);var b=this;this.h=this.G=0;this.l=Un();var c=C("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.Ab?(this.Ab=a.Ab,c("networkstatus-online",function(){Wn(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Wn(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ke(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ke(b,"publicytnetworkstatus-offline")})))}
v(Vn,Je);Vn.prototype.ba=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Vn.prototype.Ia=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Vn.prototype.Bb=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return U("skip_network_check_if_cfr")&&Qn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ba())})):c?d.return(c(a)):d.return(!0)})};
function Wn(a,b){a.Ab?a.h?(Qe.Oa(a.G),a.G=Qe.ha(function(){a.o!==b&&(Ke(a,b),a.o=b,a.h=X())},a.Ab-(X()-a.h))):(Ke(a,b),a.o=b,a.h=X()):Ke(a,b)}
;var Xn;function Yn(){var a=mn.call;Xn||(Xn=new Vn({Nd:!0,Md:!0}));a.call(mn,this,{N:{Kc:Fn,Pa:En,dc:Bn,cd:Cn,Rb:Dn,set:zn},P:Xn,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;$i(new ik(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Zi(b)},
Ra:$i,va:Zn,now:X,Cc:Tn,fa:pk(),Qb:"publicytnetworkstatus-online",Pb:"publicytnetworkstatus-offline",ub:!0,sb:.1,zb:bj("potential_esf_error_limit",10),I:U,fb:!(jk()&&"www.youtube-nocookie.com"!==Zb(document.location.toString()))});this.i=new Qf;U("networkless_immediately_drop_all_requests")&&Gn();wm("LogsDatabaseV2")}
v(Yn,mn);function $n(){var a=C("yt.networklessRequestController.instance");a||(a=new Yn,B("yt.networklessRequestController.instance",a),U("networkless_logging")&&om().then(function(b){a.H=b;on(a);a.i.resolve();a.ub&&Math.random()<=a.sb&&a.H&&Kn(a.H);U("networkless_immediately_drop_sw_health_store")&&ao(a)}));
return a}
Yn.prototype.writeThenSend=function(a,b){b||(b={});jk()||(this.g=!1);mn.prototype.writeThenSend.call(this,a,b)};
Yn.prototype.sendThenWrite=function(a,b,c){b||(b={});jk()||(this.g=!1);mn.prototype.sendThenWrite.call(this,a,b,c)};
Yn.prototype.sendAndWrite=function(a,b){b||(b={});jk()||(this.g=!1);mn.prototype.sendAndWrite.call(this,a,b)};
Yn.prototype.awaitInitialization=function(){return this.i.promise};
function ao(a){var b;x(function(c){if(!a.H)throw b=Kk("clearSWHealthLogsDb"),b;return c.return(Ln(a.H).catch(function(d){a.handleError(d)}))})}
function Zn(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&bo(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Jj(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Jj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new $a({url:a});if(g.i&&g.h||g.l){var h=Yb(a.match(Xb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==dc(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||On(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),dn(a,b.postBody,b,Gj)):dn(a,JSON.stringify(b.postParams),b,Oj):Gj(a,b)}
function bo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Qn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Qn().requestComplete(a,!0);d(e,f)}}
;var co=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",co);function eo(a){var b=this;this.config_=null;a?this.config_=a:Km()&&(this.config_=Lm());mk(function(){kn(b)},5E3)}
eo.prototype.isReady=function(){!this.config_&&Km()&&(this.config_=Lm());return!!this.config_};
function ln(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=hn(b,c,l,k)),A)){var I=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,xa){jn(A);I(Q,xa)};
c.onFetchSuccess=function(Q,xa){jn(A);O(Q,xa)}}try{if(y&&d.retry&&!d.oc.bypassNetworkless)g.method="POST",d.oc.writeThenSend?$n().writeThenSend(p,g):$n().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));dn(p,T,g,Gj)}else dn(p,JSON.stringify(g.postParams),g,Oj);else U("web_all_payloads_via_jspb")?Gj(p,g):Oj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(jn(A),A=0),$i(Error("An extension is blocking network request."));else throw Q;}A&&mk(function(){kn(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&$i(new ik("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ik("innertube xhrclient not ready",b,c,d);Zi(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Yc)&&(h=f);var k=a.config_.ad||!1,l=Um(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Wc+"/"+b,n={alt:"json"},r=a.config_.Zc&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Vc);var p=vj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
co.isNwlInitialized?mm().then(function(y){e(y)}):e(!1)}
;function fo(a){this.W=a;this.g=null;this.o=0;this.M=null;this.G=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.l=0;this.Db=lj(window,"mousemove",Xa(this.Eb,this));this.Fb=nj(Xa(this.La,this),25)}
D(fo,he);fo.prototype.Eb=function(a){void 0===a.g&&gj(a);var b=a.g;void 0===a.h&&gj(a);this.g=new xd(b,a.h)};
fo.prototype.La=function(){if(this.g){var a=X();if(0!=this.o){var b=this.M,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.h[this.l]=.5<Math.abs((d-this.G)/this.G)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.W();this.G=d}this.o=a;this.M=this.g;this.l=(this.l+1)%4}};
fo.prototype.Qa=function(){window.clearInterval(this.Fb);jj(this.Db)};var go=new Set([174,173,175]),ho={};
function io(){var a={},b=void 0===a.jd?!1:a.jd;a=void 0===a.Oc?!0:a.Oc;if(null==C("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&jo();lj(document,"keydown",jo);lj(document,"keyup",jo);lj(document,"mousedown",jo);lj(document,"mouseup",jo);b?lj(window,"touchmove",function(){ko("touchmove",200)},{passive:!0}):(lj(window,"resize",function(){ko("resize",200)}),a&&lj(window,"scroll",function(){ko("scroll",200)}));
new fo(function(){ko("mouse",100)});
lj(document,"touchstart",jo,{passive:!0});lj(document,"touchend",jo,{passive:!0})}}
function ko(a,b){ho[a]||(ho[a]=!0,Qe.ha(function(){jo();ho[a]=!1},b))}
function jo(a){var b;if(null!=(b=C("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!go.has(null==a?void 0:a.keyCode))null==C("_lact",window)&&io(),a=Date.now(),B("_lact",a,window),-1==C("_fact",window)&&B("_fact",a,window),(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function lo(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var mo=z.ytPubsubPubsubInstance||new K,no=z.ytPubsubPubsubSubscribedKeys||{},oo=z.ytPubsubPubsubTopicToKeys||{},po=z.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.lb;K.prototype.publish=K.prototype.Ya;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",mo);B("ytPubsubPubsubTopicToKeys",oo);B("ytPubsubPubsubIsSynchronous",po);B("ytPubsubPubsubSubscribedKeys",no);var qo=Symbol("injectionDeps");function ro(){this.key=Hm}
function so(){this.h=new Map;this.g=new Map}
so.prototype.resolve=function(a){return a instanceof ro?to(this,a.key,[],!0):to(this,a,[])};
function to(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.pd)var e=d.pd;else if(d.od)e=d[qo]?uo(a,d[qo],c):[],e=d.od.apply(d,ia(e));else if(d.nd){e=d.nd;var f=e[qo]?uo(a,e[qo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Td||a.g.set(b,e);return e}
function uo(a,b,c){return b?b.map(function(d){return d instanceof ro?to(a,d.key,c,!0):to(a,d,c)}):[]}
;var vo;function wo(){this.store={};this.g={}}
wo.prototype.storePayload=function(a,b){a=xo(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
wo.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=yo(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
wo.prototype.extractMatchingEntries=function(a){a=yo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
wo.prototype.getSequenceCount=function(a){a=yo(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function yo(a,b){var c=xo(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&xo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zo(b.auth,g[0])){var h=b.isJspb;zo(void 0===h?"undefined":h?"true":"false",g[1])&&zo(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),zo(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function zo(a,b){return void 0===a||"undefined"===a?!0:a===b}
wo.prototype.getSequenceCount=wo.prototype.getSequenceCount;wo.prototype.extractMatchingEntries=wo.prototype.extractMatchingEntries;wo.prototype.smartExtractMatchingEntries=wo.prototype.smartExtractMatchingEntries;wo.prototype.storePayload=wo.prototype.storePayload;function xo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Ao=bj("initial_gel_batch_timeout",2E3),Bo=bj("gel_queue_timeout_max_ms",6E4),Co=Math.pow(2,16)-1,Do=void 0;function Eo(){this.i=this.g=this.h=0}
var Fo=new Eo,Go=new Eo,Ho,Io=!0,Jo=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Jo);var Ko=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Ko);var Lo={};function Mo(){var a=C("yt.logging.ims");a||(a=new wo,B("yt.logging.ims",a));return a}
function No(a,b){if("log_event"===a.endpoint){Oo(a);var c=Po(a);Lo[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Mo().storePayload(d,a.payload);Qo(b,c,!1,d)}}
function Ro(a,b){if("log_event"===a.endpoint){Oo(void 0,a);var c=Po(a,!0);Lo[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Mo().storePayload(d,a.payload.toJSON());Qo(b,c,!0,d)}}
function Qo(a,b,c,d){c=void 0===c?!1:c;a&&(Do=new a);a=bj("tvhtml5_logging_max_batch_ads_fork")||bj("web_logging_max_batch")||100;var e=X(),f=c?Go.i:Fo.i,g=0;d&&(g=Mo().getSequenceCount(d));g>=a?Ho||(Ho=So(function(){To({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c);Ho=void 0},0)):10<=e-f&&(Uo(c),c?Go.i=e:Fo.i=e)}
function Vo(a,b){if("log_event"===a.endpoint){Oo(a);var c=Po(a),d=new Map;d.set(c,[a.payload]);b&&(Do=new b);return new Rf(function(e,f){Do&&Do.isReady()?Wo(d,Do,e,f,{bypassNetworkless:!0},!0):e()})}}
function Xo(a,b){if("log_event"===a.endpoint){Oo(void 0,a);var c=Po(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Do=new b);return new Rf(function(e){Do&&Do.isReady()?Yo(d,Do,e,{bypassNetworkless:!0},!0):e()})}}
function Po(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Mi;c.videoId?bd(d,1,md,c.videoId):c.playlistId&&bd(d,2,md,c.playlistId);Ko[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Jo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function To(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Rf(function(d,e){c?(Zo(Go.h),Zo(Go.g),Go.g=0):(Zo(Fo.h),Zo(Fo.g),Fo.g=0);if(Do&&Do.isReady()){var f=a,g=c,h=Do;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Mo().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Yo(k,h,d,f)):(k=Mo().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),Wo(l,h,d,e,f));else if(g){e=u(Object.keys(Lo));for(g=e.next();!g.done;g=e.next())l=g.value,g=Mo().extractMatchingEntries({isJspb:!0,
cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Lo[l];Yo(k,h,d,f)}else{k=u(Object.keys(Lo));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Mo().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Lo[g]}Wo(l,h,d,e,f)}}else Uo(c),d()})}
function Uo(a){a=void 0===a?!1:a;if(U("web_gel_timeout_cap")&&(!a&&!Fo.g||a&&!Go.g)){var b=So(function(){To({writeThenSend:!0},void 0,a)},Bo);
a?Go.g=b:Fo.g=b}Zo(a?Go.h:Fo.h);b=S("LOGGING_BATCH_TIMEOUT",bj("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Io&&(b=Ao);b=So(function(){To({writeThenSend:!0},void 0,a)},b);
a?Go.h=b:Fo.h=b}
function Wo(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(X()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={mb:k.mb,Da:k.Da,ab:k.ab,ob:k.ob,nb:k.nb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Da=nb({context:Mm(b.config_||Lm())});if(!Oa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Da.events=m;(m=Jo[l])&&$o(k.Da,l,m);delete Jo[l];k.ab="visitorOnlyApprovedKey"===l;ap(k.Da,g,k.ab);bp(e);k.ob=function(n){U("update_log_event_config")&&Qe.ha(function(){return x(function(r){return w(r,
cp(n),0)})});
h--;h||c()};
k.mb=0;k.nb=function(n){return function(){n.mb++;if(e.bypassNetworkless&&1===n.mb)try{ln(b,"log_event",n.Da,dp({writeThenSend:!0},n.ab,n.ob,n.nb,f)),Io=!1}catch(r){Zi(r),d()}h--;h||c()}}(k);
try{ln(b,"log_event",k.Da,dp(e,k.ab,k.ob,k.nb,f)),Io=!1}catch(n){Zi(n),d()}}}
function Yo(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(X()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Ni;var n=Tm(b.config_||Lm());H(k,si,1,n);m=m?ep(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())jd(k,3,Ji,n.value);(m=Ko[l])&&fp(k,l,m);delete Ko[l];l="visitorOnlyApprovedKey"===l;gp(k,f,l);bp(d);m={startTime:X(),ticks:{},infos:{}};k=vd(k);m.ticks.geljspc=X();U("log_jspb_serialize_latency")&&Wm("gel_jspb_serialize",
m,{sampleRate:.1});l=dp(d,l,function(r){U("update_log_event_config")&&Qe.ha(function(){return x(function(p){return w(p,cp(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;ln(b,"log_event","",l);Io=!1}}
function bp(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function dp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,oc:a,dangerousLogToVisitorSession:b,Ld:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};hp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function ap(a,b,c){hp()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=ip(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gp(a,b,c){hp()||G(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=ip();var d=new Li;G(d,1,b);G(d,2,c);H(a,Li,5,d)}}
function ip(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Co/2));a++;a>Co&&(a=1);Ti("BATCH_CLIENT_COUNTER",a);return a}
function $o(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function fp(a,b,c){if(ld(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,Mi,4,c);a=gd(a,si,1)||new si;c=gd(a,qi,3)||new qi;var e=new pi;G(e,2,b);G(e,1,d);jd(c,12,pi,e);H(a,qi,3,c)}
function ep(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ji(a[c]))}catch(d){Zi(new ik("Transport failed to deserialize "+String(a[c])))}return b}
function Oo(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function hp(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function So(a,b){return U("transport_use_scheduler")?mk(a,b):mj(a,b)}
function Zo(a){U("transport_use_scheduler")?Qe.Oa(a):window.clearTimeout(a)}
function cp(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ci.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[bi.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;vo||(vo=new so);r=vo;return(m=r.resolve.call(r,new ro))?g?e?w(n,Im(m,g,e),2):w(n,Im(m,g),2):n.C(2):n.return()}return l?h?w(n,Jm(m,l,h),0):w(n,Jm(m,l),0):n.C(0)})}
;var jp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",jp);function kp(a){To(void 0,void 0,void 0===a?!1:a)}
function lp(a){jp[a]=a in jp?jp[a]+1:0;return jp[a]}
;var mp=[];
function np(a,b){var c=void 0===c?{}:c;var d=eo;S("ytLoggingEventsDefaultDisabled",!1)&&eo===eo&&(d=null);if(U("web_all_payloads_via_jspb"))c.timestamp||(c.timestamp=X()),mp.push({Rd:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;U("enable_unknown_lact_fix_on_html5")&&io();a=lo();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,
b=c.sequenceGroup,b={index:lp(b),groupKey:b},a.sequence=b,c.endOfSequence&&delete jp[c.sequenceGroup]);(c.sendIsolatedPayload?Vo:No)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var op=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",op);function pp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:eo;b=void 0===b?{}:b;var d=Math.round(b.timestamp||X());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=lo();d=new Ii;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(U("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=lp(e),g=new Hi;G(g,2,f);G(g,1,e);H(d,Hi,3,g);b.endOfSequence&&delete op[b.sequenceGroup]}H(a,Ii,33,d);(b.sendIsolatedPayload?Xo:Ro)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var qp=new Set,rp=0,sp=0,tp=0,up=[],vp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wp(a){try{qp.add(a.message)}catch(b){}rp++}
function xp(){for(var a=u(vp),b=a.next();!b.done;b=a.next()){var c=Nb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function yp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Ui())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Gj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function zp(){var a;return x(function(b){return(a=kf())?b.return(a.then(function(c){c=vd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Ec(d,3)})):b.return(Promise.resolve(null))})}
;var Ap={};function Bp(a){return Ap[a]||(Ap[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cp={},Dp=[],hg=new K,Ep={};function Fp(){for(var a=u(Dp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Bp(b)]:a.getAttribute("data-"+b):null;return c}
function Hp(a){hg.Ya.apply(hg,arguments)}
;var Ip=window;function Jp(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Kp(a,b,c){if(Ip.yt_embedsEnableHouseBrandAndYtCoexistence){Lp||(Lp={},Mp=new Set,lj(window,"message",function(e){Np(a,e)}));
var d=String(Z(a,"host"));Lp[c]={qd:b,Gc:d};Mp.add(d)}else Op||(Op={},lj(window,"message",function(e){return Np(a,e)})),Op[c]=b}
function Np(a,b){if(Ip.yt_embedsEnableHouseBrandAndYtCoexistence){if(Mp.has(b.origin)){try{var c=JSON.parse(b.data)}catch(e){return}var d=Lp[c.id];d&&b.origin===d.Gc&&(b=d.qd,Pp(b),b.Gb(c))}}else if(b.origin===Z(a,"host")){try{d=JSON.parse(b.data)}catch(e){return}if(c=Op[d.id])Pp(c),c.Gb(d)}}
var Op=null,Lp=null,Mp=null;var Qp=window;
function Rp(a,b,c){this.u=this.g=this.h=null;this.i=0;this.G=!1;this.o=[];this.l=null;this.W={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?$b(a.src):"https://www.youtube.com"),this.h=new Jp(b),c||(b=Sp(this,a),this.u=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Cp[this.g.id]=this,window.postMessage){this.l=
new K;Tp(this);b=Z(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ep)Ep.hasOwnProperty(e)&&Up(this,e)}}
function Pp(a){a.G=!0;a.G&&(db(a.o,a.sendMessage,a),a.o.length=0)}
q=Rp.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.Gb=function(a){Vp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Wp(this,a);return this};
function Up(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&Wp(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Cp[this.g.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.u){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.u,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);a=this.id;Ip.yt_embedsEnableHouseBrandAndYtCoexistence?Lp&&(Lp[a]=null):Op&&(Op[a]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&jj(c);this.u=this.g=null};
q.Yb=function(){return{}};
function Xp(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.o.push(b)}
function Vp(a,b,c){a.l.i||(c={target:a,data:c},a.l.Ya(b,c),Hp(a.M+"."+b,c))}
function Sp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Z(a.h,"title"));(b=Z(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.Yb();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=dc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Z(a.h,"host")+("/embed/"+Z(a.h,"videoId"))+"?"+bc(g);Qp.yt_embedsEnableUaChProbe?zp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ld(l.href).toString();Hd(c,Md(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Qp.yt_embedsEnableIframeSrcWithIntent?(Hd(c,Md(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.qc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Tp(a){Kp(a.h,a,a.id);a.i=nj(a.qc.bind(a),250);lj(a.g,"load",function(){window.clearInterval(a.i);a.i=nj(a.qc.bind(a),250)})}
function Wp(a,b){a.W[b]||(a.W[b]=!0,Xp(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[$b(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(gc){if(gc.name&&"SyntaxError"===gc.name){if(!(gc.message&&0<gc.message.indexOf("target origin ''"))){var e=void 0,f=gc;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=rp)){var m=void 0,n=void 0,r=f,p=e,y=Bd(r),A=y.message||"Unknown Error",
I=y.name||"UnknownError",O=y.stack||r.h||"Not available";if(O.startsWith(I+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",xa=y.fileName||"Not available",Mc=O,Ia=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var ya=0;ya<r.args.length&&!(Ia=Yj(r.args[ya],"params."+ya,p,Ia),500<=Ia);ya++);else if(r.hasOwnProperty("params")&&r.params){var da=r.params;if("object"===typeof r.params)for(n in da){if(da[n]){var ja="params."+n,ka=ak(da[n]);p[ja]=ka;Ia+=
ja.length+ka.length;if(500<Ia)break}}else p.params=ak(da)}if(up.length)for(var ca=0;ca<up.length&&!(Ia=Yj(up[ca],"params.context."+ca,p,Ia),500<=Ia);ca++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:I,lineNumber:Q,fileName:xa,stack:Mc,params:p,sampleWeight:1},gl=Number(r.columnNumber);isNaN(gl)||(V.lineNumber=V.lineNumber+":"+gl);if("IGNORED"===r.level)m=0;else a:{for(var hl=Uj(),il=u(hl.za),Jg=il.next();!Jg.done;Jg=il.next()){var jl=
Jg.value;if(V.message&&V.message.match(jl.Od)){m=jl.weight;break a}}for(var kl=u(hl.wa),Kg=kl.next();!Kg.done;Kg=kl.next()){var ll=Kg.value;if(ll.Jc(V)){m=ll.weight;break a}}m=1}V.sampleWeight=m;for(var ml=u(Pj),Lg=ml.next();!Lg.done;Lg=ml.next()){var Mg=Lg.value;if(Mg.yb[V.name])for(var nl=u(Mg.yb[V.name]),Ng=nl.next();!Ng.done;Ng=nl.next()){var ol=Ng.value,me=V.message.match(ol.regexp);if(me){V.params["params.error.original"]=me[0];for(var Og=ol.groups,pl={},hc=0;hc<Og.length;hc++)pl[Og[hc]]=me[hc+
1],V.params["params.error."+Og[hc]]=me[hc+1];V.message=Mg.Nb(pl);break}}}V.params||(V.params={});var ql=Uj();V.params["params.errorServiceSignature"]="msg="+ql.za.length+"&cb="+ql.wa.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(V.params["params.fconst"]="true");var dd=V;window.yterr&&"function"===typeof window.yterr&&window.yterr(dd);
if(0!==dd.sampleWeight&&!qp.has(dd.message))if(h&&U("web_enable_error_204")){var rl=dd;yp(void 0===g?"ERROR":g,rl);wp(rl)}else{var Pg=void 0,Qg=void 0,sl=void 0,tl=void 0,Rg=void 0,L=dd,Bb=g;Bb=void 0===Bb?"ERROR":Bb;if("ERROR"===Bb){Vj.Ya("handleError",L);if(U("record_app_crashed_web")&&0===tp&&1===L.sampleWeight)if(tp++,U("errors_via_jspb")){var cq=new Gi;Rg=G(cq,1,1);if(!U("report_client_error_with_app_crash_ks")){var dq=new Ei,eq=new Di,fq=new Ci,gq=new Bi;var hq=G(gq,1,L.message);var iq=H(fq,
Bi,3,hq);tl=H(eq,Ci,5,iq);sl=H(dq,Di,9,tl);H(Rg,Ei,4,sl)}var ul=new Ji;id(ul,Gi,20,Ki,Rg);pp(ul)}else{var vl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(vl.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});np("appCrashed",vl)}sp++}else"WARNING"===Bb&&Vj.Ya("handleWarning",L);if(U("kevlar_gel_error_routing"))a:{var ed=Bb;if(U("errors_via_jspb")){if(xp())Qg=void 0;else{var ic=new yi;G(ic,1,L.stack);L.fileName&&G(ic,4,L.fileName);var Ua=
L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];if(0!==Ua.length)if(1===Ua.length&&!isNaN(Number(Ua[0]))){var jq=ic,wl=Number(Ua[0]);Na(wl);G(jq,2,wl)}else if(2===Ua.length&&!isNaN(Number(Ua[0]))&&!isNaN(Number(Ua[1]))){var kq=ic,xl=Number(Ua[0]);Na(xl);G(kq,2,xl);var lq=ic,yl=Number(Ua[1]);Na(yl);G(lq,3,yl)}var Cb=new Bi;G(Cb,1,L.message);G(Cb,3,L.name);var mq=Cb,zl=L.sampleWeight;Na(zl);G(mq,6,zl);"ERROR"===ed?G(Cb,2,2):"WARNING"===ed?G(Cb,2,1):G(Cb,2,0);var Sg=new zi;G(Sg,1,!0);id(Sg,
yi,3,Ai,ic);var Db=new wi;G(Db,3,window.location.href);for(var Al=S("FEXP_EXPERIMENTS",[]),Tg=0;Tg<Al.length;Tg++){var Bl=Db,nq=Al[Tg];Uc(Bl);ad(Bl,5,2,!1,!1).push(nq)}var Ug=Ui();if(!Vi()&&Ug)for(var Cl=u(Object.keys(Ug)),Eb=Cl.next();!Eb.done;Eb=Cl.next()){var Dl=Eb.value,Vg=new vi;G(Vg,1,Dl);G(Vg,2,String(Ug[Dl]));jd(Db,4,vi,Vg)}var Wg=L.params;if(Wg){var El=u(Object.keys(Wg));for(Eb=El.next();!Eb.done;Eb=El.next()){var Fl=Eb.value,Xg=new vi;G(Xg,1,"client."+Fl);G(Xg,2,String(Wg[Fl]));jd(Db,4,
vi,Xg)}}var Gl=S("SERVER_NAME"),Hl=S("SERVER_VERSION");if(Gl&&Hl){var Yg=new vi;G(Yg,1,"server.name");G(Yg,2,Gl);jd(Db,4,vi,Yg);var Zg=new vi;G(Zg,1,"server.version");G(Zg,2,Hl);jd(Db,4,vi,Zg)}var ne=new Ci;H(ne,wi,1,Db);H(ne,zi,2,Sg);H(ne,Bi,3,Cb);Qg=ne}var Il=Qg;if(!Il)break a;var Jl=new Ji;id(Jl,Ci,163,Ki,Il);pp(Jl)}else{if(xp())Pg=void 0;else{var fd={stackTrace:L.stack};L.fileName&&(fd.filename=L.fileName);var Va=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Va.length&&(1!==
Va.length||isNaN(Number(Va[0]))?2!==Va.length||isNaN(Number(Va[0]))||isNaN(Number(Va[1]))||(fd.lineNumber=Number(Va[0]),fd.columnNumber=Number(Va[1])):fd.lineNumber=Number(Va[0]));var $g={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===ed?$g.level="ERROR_LEVEL_ERROR":"WARNING"===ed&&($g.level="ERROR_LEVEL_WARNNING");var oq={isObfuscated:!0,browserStackInfo:fd},jc={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(jc.experimentIds=
S("FEXP_EXPERIMENTS"));var ah=Ui();if(!Vi()&&ah)for(var Kl=u(Object.keys(ah)),Fb=Kl.next();!Fb.done;Fb=Kl.next()){var Ll=Fb.value;jc.kvPairs.push({key:Ll,value:String(ah[Ll])})}var bh=L.params;if(bh){var Ml=u(Object.keys(bh));for(Fb=Ml.next();!Fb.done;Fb=Ml.next()){var Nl=Fb.value;jc.kvPairs.push({key:"client."+Nl,value:String(bh[Nl])})}}var Ol=S("SERVER_NAME"),Pl=S("SERVER_VERSION");Ol&&Pl&&(jc.kvPairs.push({key:"server.name",value:Ol}),jc.kvPairs.push({key:"server.version",value:Pl}));Pg={errorMetadata:jc,
stackTrace:oq,logMessage:$g}}var Ql=Pg;if(!Ql)break a;np("clientError",Ql)}if("ERROR"===ed||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")&&(kp(!0),!U("web_fp_via_jspb_and_json")))break b;kp()}}U("suppress_error_204_logging")||yp(Bb,L);wp(L)}}}}}else throw gc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Yp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Zp(a){return 0===a.search("get")||0===a.search("is")}
;function $p(a,b){Rp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
v($p,Rp);q=$p.prototype;q.Yb=function(){var a=Z(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.h,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Gb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":aq(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},bq(this,a.apiInterface),aq(this,a));break;default:Vp(this,b,a)}};
function aq(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Z(a.h,"title"))))}}
function bq(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Yp(c)?this[c]=function(){this.playerInfo={};
this.ka={};Xp(this,c,arguments);return this}:Zp(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Xp(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Z(this.h,"host")+("/embed/"+Z(this.h,"videoId")),b=Number(Z(this.h,"width")),c=Number(Z(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Wb(a);d=Wb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function pq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Gp(a,"videoid");b&&(b={videoId:b,width:Gp(a,"width"),height:Gp(a,"height")},new $p(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Cp[a]});
B("YT.scan",Fp);B("YT.subscribe",function(a,b,c){hg.subscribe(a,b,c);Ep[a]=!0;for(var d in Cp)Cp.hasOwnProperty(d)&&Up(Cp[d],a)});
B("YT.unsubscribe",function(a,b,c){gg(a,b,c)});
B("YT.Player",$p);Rp.prototype.destroy=Rp.prototype.destroy;Rp.prototype.setSize=Rp.prototype.setSize;Rp.prototype.getIframe=Rp.prototype.getIframe;Rp.prototype.addEventListener=Rp.prototype.addEventListener;$p.prototype.getVideoEmbedCode=$p.prototype.getVideoEmbedCode;$p.prototype.getOptions=$p.prototype.getOptions;$p.prototype.getOption=$p.prototype.getOption;
Dp.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);db(gb(a,b),pq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Fp();var qq=z.onYTReady;qq&&qq();var rq=z.onYouTubeIframeAPIReady;rq&&rq();var sq=z.onYouTubePlayerAPIReady;sq&&sq();}).call(this);
