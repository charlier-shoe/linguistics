/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(b,f,a){(function(){function d(){var a=window.location.href.split("#")[0];return a.substring(0,a.lastIndexOf("/"))}function c(a){var b={},c=[],d,e;if(a)for(d in c=a.split("\x26"),c)e=c[d].split(/\=(.+)?/),a=e[0],a.length&&(b[a]||(b[a]=[]),e=e[1]&&decodeURIComponent(e[1].replace(/\+/g," ")),b[a].push(e));return b}function e(a,c){var d;c&&a.uo&&(b.l.hm(c),a.uo.every(function(a){return a.rj===c?(d=a,!1):!0}));return d}function g(){return window.location.href.split("#")[0].replace(A+
"/","")}function h(a){return a.Xl?h(a.Xl)+"."+a.fe:a.fe}function k(a){return a?k(a.Xl)+a.bB().rj+"/":"/"}function l(a,b){var c;a.mg.every(function(a){return a.Yl&&a.Yl!==b?!0:(c=a,!1)});return c}function m(){return P[0]&&P[0].cancel}function n(a){var c=a.charAt(0);a=a.slice(1);if("0"===c)a=decodeURIComponent(a);else if("1"===c)a=b.gQ.Mna(a);else throw Error("Error retrieving bookmarkable data. Format is invalid");return JSON.parse(a)}function p(a,c){if(c&&0<Object.getOwnPropertyNames(c).length){var d;
d=-1===a.indexOf("?")?"?":"\x26";var e=a,f=JSON.stringify(c),g=encodeURIComponent(f),f=b.gQ.qna(f),h=!1,k="oj_Router\x3d";f.length<=g.length&&(h=!0);k=h?k+("1"+f):k+("0"+g);if(1024<k.length)throw Error("Size of bookmarkable data is too big.");a=e+(d+k)}return a}function r(a,b,c){var d;a.mg.every(function(a){return a.Yl&&a.Yl!==c||!a.Sj(b)?!0:(d=a,!1)});return d}function s(a,b){var c=[],d=[],e=a,f=b.split("/"),g,h,k;for(f.splice(0,1);e;)d.unshift(e),e=e.Xl;for(;g=f.shift();){e=d.shift();if(!e){if(e=
r(h,g,k),!e){C=b;break}}else if(!e.Sj(g))throw Error('Invalid path "'+b+'". State id "'+g+'" does not exist on router "'+e.fe+'".');c.push({Fc:e,Vu:g});h=e;k=g}e=!0;for(d=c.length-1;0<=d&&e;d--)c[d].Vu===c[d].Fc.rk?c[d].Vu=null:e=!1;return c}function q(a,c){var d=!0,e=Promise.resolve(!0),f=a.bB(),g,h;if(f){for(g=0;g<a.mg.length;g++)if(d=q(a.mg[g],c),!d)return!1;g=f.XE&&f.XE.canExit?f.XE.canExit:f.hw;if("function"===typeof g){try{h=g()}catch(k){return b.r.error("Error when executing canExit callback: %s",
k.message),!1}h&&h.then?e=h:(h||b.r.info("canExit is false for state %s",f.rj),d=h)}}c.push(e);return d}function t(a){var c;if(!a)return Promise.resolve(!m());c=[];return q(a,c)?Promise.all(c).then(function(a){var c;for(c=0;c<a.length;c++)if(!a[c])return b.r.info("CanExit promise at position %s returned false.",String(c)),!1;return!m()}):Promise.resolve(!1)}function w(a,c){b.r.info("Start _canEnter.");var d=!0,e=Promise.resolve(!0),f=[];a.every(function(a){var c,g;if(c=a.Fc.Sj(a.value))if(a=c.gw,
"function"===typeof a){try{g=a()}catch(h){return b.r.error("Error when executing canEnter callback: %s",h.message),d=!1}if(g&&g.then)e=g;else if(d=g,!d)return b.r.info("canEnter is false for state: %s",c.rj),!1}f.push(e);return!0});return!d||m()?Promise.resolve({PD:[]}):Promise.all(f).then(function(d){var e;for(e=0;e<d.length;e++)if(!d[e])return b.r.info("CanEnter promise at position %s returned false.",String(e)),{PD:[]};return{PD:a,origin:c}})}function x(a,c){var d=a.Fc.Sj(a.Fc.Ff()),e=a.value?
a.Fc.Sj(a.value):void 0;return Promise.resolve().then(function(){b.r.info("Updating state of %s to %s.",h(a.Fc),a.value)}).then(d?d.Aw:void 0).then(function(){var b=a.Fc,d,e,f;if("popState"===c){e=b.Rt.length;for(d=e-1;0<=d;d--)if(b.Rt[d]===a.value){f=!0;b.Rt.splice(d,e-d);break}1===e-d&&(b.tx="back")}f||(delete b.tx,b.Rt.push(b.Ff()));b.Ff(a.value)}).then(e?e.zw:void 0)}function v(a){var c;c=Promise.resolve().then(function(){b.r.info("Entering _updateAll.");b.Ya.FD=!0});a.PD.forEach(function(b){c=
c.then(function(){if(!m())return x(b,a.origin)})});return c.then(function(){var c=0<a.PD.length&&!m();b.Ya.FD=!1;b.r.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(a){b.Ya.FD=!1;return Promise.reject(a)})}function u(a){var c={},d,e=a.split("?")[1]||"";b.r.info("Parsing: %s",a);a=E.vy(a);if(e=e.split("oj_Router\x3d")[1])e=e.split("\x26")[0],c=n(e);if(b.r.option("level")===b.r.Wr)for(d in b.r.info("Bookmarkable data: "),c)b.r.info("   { router: %s, value: %s }",d,c[d]);a=E.parse(a).filter(function(a){var b=
c[a.Fc.fe];b&&(a.Fc.kj=b);return a.value!==a.Fc.Ff()});b.r.option("level")===b.r.Wr&&(b.r.info("Potential changes are: "),a.forEach(function(a){b.r.info("   { router: %s, value: %s }",h(a.Fc),a.value)}));return a}function y(a,b){var c;try{c=u(a)}catch(d){return Promise.reject(d)}return w(c,b).then(v)}function B(a){b.r.info("\x3e\x3e Executing: path\x3d%s, url\x3d%s, origin\x3d%s",a.path,a.url,a.origin);return void 0!==a.url?"sync"===a.origin?y(a.url):t(a.Fc).then(function(b){return b?y(a.url,a.origin):
{hasChanged:!1}}):a.Fc.Nea(a.path||null,a.replace)}function L(){var a=P[0];b.r.info("\x3e\x3e Resolving: path\x3d%s, url\x3d%s",a.path,a.url);a.cancel?(b.r.info("\x3e\x3e Cancelled: path\x3d%s, url\x3d%s",a.path,a.url),a=Promise.resolve({hasChanged:!1})):a=B(a);return a.then(function(a){var c=P.shift();b.r.info("\x3e\x3e Done with: path\x3d%s, url\x3d%s",c.path,c.url);b.Ya.mu.dispatch(a);return a},function(a){P=[];b.Ya.mu.dispatch({hasChanged:!1});return Promise.reject(a)})}function F(a){var c;c=
P.push(a);b.r.info("\x3e\x3e Queue transition for path\x3d%s, url\x3d%s",a.path,a.url);1===c?Q=L():(a=P[c-2],a.url||a.Ona||(b.r.info("\x3e\x3e Cancelling: path\x3d%s",a.path),a.cancel=!0),Q=Q.then(L));return Q}function G(){var a,c,d=null;b.r.info("Handling popState event with URL: %s",window.location.href);for(a=0;a<K.mg.length;a++)if(c=K.mg[a],K.Ff()&&K.Ff()===c.Yl){d=c;break}F({Fc:d,url:g(),origin:"popState"}).then(null,function(a){b.r.error("Error while changing state in handlePopState: %s",a.message)})}
function D(){J||(E||(E=new b.Ya.vP),A||(A=d()),window.addEventListener("popstate",G,!1),b.r.info("Initializing rootInstance."),b.r.info("Base URL is %s",A),b.r.info("This page is %s",z),b.r.info("Current URL is %s",window.location.href),J=!0)}var A,z=function(){var a="",b=window.location.pathname;-1!==b.indexOf(".html",b.length-5)&&(a=b.split("/").pop());return a}(),E,J=!1,C,P=[],Q;b.Ya=function(a,b,c){var d=this;this.fe=a;this.Yl=c||(b?b.Ff():void 0);this.Xl=b;this.mg=[];this.kj=void 0;this.Ff=f.observable();
this.Lla=f.pureComputed({read:function(){return this.Ff()},write:function(a){this.go(a).then(null,function(a){throw a;})},owner:d});this.uo=null;this.rk=void 0;this.bB=f.pureComputed(function(){return f.ignoreDependencies(d.Sj,d,[d.Ff()])});this.Wba=f.pureComputed(function(){var a,b=f.ignoreDependencies(d.Sj,d,[d.Ff()]);b&&(a=b.value);return a});this.tx=void 0;this.Rt=[];this.cia=Object.create(null,{name:{value:f.pureComputed(function(){var a,b;b=this.Ff()||this.rk||this.uo[0];if(b=this.Sj(b))a=b.value,
a&&"string"===typeof a||(a=b.rj);return a},d),enumerable:!0},params:{value:Object.create(null,{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:d,enumerable:!0},direction:{get:function(){return d.tx},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,{attached:{value:function(a){var b=a.valueAccessor().params.ojRouter.parentRouter.bB();b&&(b.XE=a.viewModel)}}}),enumerable:!0}});Object.defineProperties(this,{parent:{value:this.Xl,
enumerable:!0}})};o_("Router",b.Ya,b);Object.defineProperties(b.Ya.prototype,{name:{get:function(){return this.fe},enumerable:!0},states:{get:function(){return this.uo},enumerable:!0},stateId:{get:function(){return this.Lla},enumerable:!0},currentState:{get:function(){return this.bB},enumerable:!0},currentValue:{get:function(){return this.Wba},enumerable:!0},defaultStateId:{get:function(){return this.rk},set:function(a){this.rk=a},enumerable:!0},moduleConfig:{get:function(){return this.cia},enumerable:!0}});
var K=new b.Ya("root",void 0,void 0);b.Ya.prototype.O2=function(a){var b;a&&"string"===typeof a&&(a=a.trim(),0<a.length&&this.mg.every(function(c){return c.fe===a?(b=c,!1):!0}));return b};b.b.g("Router.prototype.getChildRouter",{O2:b.Ya.prototype.O2});b.Ya.prototype.k2=function(a,c){var d,e;b.l.hm(a);c=c||this.Ff();a=encodeURIComponent(a.trim());for(d=0;d<this.mg.length;d++){e=this.mg[d];if(e.fe===a)throw Error('Invalid router name "'+a+'", it already exists.');if(e.Yl===c)throw Error('Cannot create more than one child router for parent state id "'+
e.Yl+'".');}d=new b.Ya(a,this,c);this.mg.push(d);return d};b.b.g("Router.prototype.createChildRouter",{k2:b.Ya.prototype.k2});b.Ya.prototype.Sj=function(a){return e(this,a)};b.Ya.prototype.e2=function(a){this.Ff(void 0);delete this.rk;this.tx=void 0;this.Rt=[];"function"===typeof a?(this.uo=null,this.Sj=a):(this.uo=[],delete this.Sj,Object.keys(a).forEach(function(c){var d=a[c];this.uo.push(new b.bs(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.rk=c)},this));return this};b.b.g("Router.prototype.configure",
{e2:b.Ya.prototype.e2});b.Ya.prototype.v3=function(a){return this.Sj(a)};b.b.g("Router.prototype.getState",{v3:b.Ya.prototype.v3});b.Ya.prototype.go=function(a){D();return F({Fc:this,path:a,origin:"go"})};b.b.g("Router.prototype.go",{go:b.Ya.prototype.go});b.Ya.prototype.Nea=function(a,c){function d(a){return a?y(f.replace(/^\//,"")).then(function(a){if(a.hasChanged){var d=A+f;b.r.info("%s URL to %s",c?"Replacing":"Pushing",d);window.history[c?"replaceState":"pushState"](null,"",d)}return a}):{hasChanged:!1}}
var e,f,q;e=!0;if(a)if("string"===typeof a)0<a.length&&(e=!1);else return Promise.reject(Error("Invalid object type for state id."));if(e&&(a=this.rk||null,!a))return b.r.option("level")===b.r.Wr&&b.r.info("Undefined state id with no default id on router %s",h(this)),Promise.resolve({hasChanged:!1});e="/"===a.charAt(0)?a:k(this.Xl)+a;b.r.info("Destination path: %s",e);try{q=s(this,e)}catch(l){return Promise.reject(l)}f=E.T1(q);b.r.option("level")===b.r.Wr&&b.r.info("Going to URL %s on router %s",
f,h(this));q="/"+E.vy(g()).replace(z,"");return c||E.vy(f)!==q?(b.r.info("Deferred mode or new URL is different."),t(this).then(d)):Promise.resolve({hasChanged:!1})};b.Ya.prototype.F5=function(a){this.kj=a;a={};for(var b=this;b;)b.kj&&(a[b.fe]=b.kj),b=b.Xl;for(var b=this,c,d,e;b;){for(d=0;d<b.mg.length;d++)if(e=b.mg[d],b.Ff()&&b.Ff()===e.Yl){e.kj&&(a[e.fe]=e.kj);c=e;break}b=c;c=void 0}c=A+"/"+E.vy(g());c=p(c,a);window.history.replaceState(null,"",c)};b.b.g("Router.prototype.store",{F5:b.Ya.prototype.F5});
b.Ya.prototype.j5=function(){return this.kj};b.b.g("Router.prototype.retrieve",{j5:b.Ya.prototype.j5});b.Ya.prototype.Au=function(){for(var a,c;0<this.mg.length;)this.mg[0].Au();if(this.Xl){a=this.Xl.mg;for(c=0;c<a.length;c++)if(a[c].fe===this.fe){a.splice(c,1);break}delete this.Yl}else A="",E={},this.fe="root",window.removeEventListener("popstate",G),b.Ya.mu.removeAll(),J=!1;delete this.tx;this.Rt=[];this.uo=null;delete this.rk;delete this.kj};b.b.g("Router.prototype.dispose",{Au:b.Ya.prototype.Au});
b.Ya.mu=new a.Signal;b.Ya.FD=!1;Object.defineProperties(b.Ya,{rootInstance:{value:K,enumerable:!0},transitionedToState:{value:b.Ya.mu,enumerable:!0}});b.Ya.Gb={};o_("Router.defaults",b.Ya.Gb,b);Object.defineProperties(b.Ya.Gb,{urlAdapter:{get:function(){E||(E=new b.Ya.vP);return E},set:function(a){if(J)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");E=a},enumerable:!0,ME:!1},baseUrl:{get:function(){A||(A=d());return A},set:function(a){if(J)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");
A=a.replace(/\/$/,"")},enumerable:!0,ME:!1},rootInstanceName:{get:function(){return K.fe},set:function(a){if(J)throw Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");b.l.hm(a);K.fe=encodeURIComponent(a.trim())},enumerable:!0,ME:!1}});b.Ya.oP=function(){var a;D();b.r.info("Entering sync.");if(C)return a={Fc:K,path:C,Ona:!0,replace:!0},C=void 0,F(a);if(b.Ya.FD)return b.r.info("Sync called while updating, waiting for updates to end."),new Promise(function(a){b.Ya.mu.addOnce(function(c){b.r.info("Sync updates done.");
a(c)})});a={Fc:K,url:g(),origin:"sync"};return F(a)};o_("Router.sync",b.Ya.oP,b);b.Ya.vP=function(){this.parse=function(a){var b=K;a=a.split("/");var c=[],d;do(d=a.shift())&&(0===d.length||/\.html$/i.test(d))&&(d=void 0),d=d||b.rk,c.push({value:d,Fc:b}),b=l(b,d);while(b);return c};this.T1=function(a){var c="",d={};a.forEach(function(a){a.Vu&&(c+="/"+a.Vu);a.Fc.hsa&&(d[a.Fc.fe]=a.Fc.kj)});""===c&&(c="/"+z);try{c=p(c,d)}catch(e){b.r.error("Error while building URL: %s",e)}return c};this.vy=function(a){return a.split("?")[0]};
this.m3=function(a){var b=a.indexOf("?"),d=null;-1!==b&&(d=a.substr(b+1));return c(d)}};o_("Router.urlPathAdapter",b.Ya.vP,b);b.Ya.Kqa=function(){this.parse=function(a){a=this.m3(a);var b=K,c=[],d;do{if(d=a[b.fe])d=d[0],delete a[b.fe];d=d||b.rk;c.push({value:d,Fc:b});b=l(b,d)}while(b);return c};this.T1=function(a){var c="/"+z,d={},e="?";a.forEach(function(a){a.Vu&&(c+=e+a.Fc.fe+"\x3d"+a.Vu,e="\x26");a.Fc.kj&&(d[a.Fc.fe]=a.Fc.kj)});try{c=p(c,d)}catch(f){b.r.error("Error while building URL: %s",f)}return c};
this.vy=function(a){var b=a.indexOf("oj_Router\x3d");return-1!==b?a.substr(0,b-1):a};this.m3=function(a){var b=a.indexOf("?"),d=null,d={};-1!==b&&(d=a.substr(b+1),d=c(d));return d}};o_("Router.urlParamAdapter",b.Ya.Kqa,b);return K})();(function(){function a(b,c){if(null===b)return"";var d,e,f={},g={},h="",q=2,t=3,w=2,x="",v=0,u=0,y,B,L,F=b.length;for(L=0;L<F;L++)if(y=b[L],Object.prototype.hasOwnProperty.call(f,y)||(f[y]=t++,g[y]=!0),B=h+y,Object.prototype.hasOwnProperty.call(f,B))h=B;else{if(Object.prototype.hasOwnProperty.call(g,
h)){if(256>h.charCodeAt(0)){for(d=w;d--;)v<<=1,5==u?(u=0,x+=c(v),v=0):u++;e=h.charCodeAt(0);d=8}else{e=1;for(d=w;d--;)v=v<<1|e,5==u?(u=0,x+=c(v),v=0):u++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)v=v<<1|e&1,5==u?(u=0,x+=c(v),v=0):u++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);delete g[h]}else for(e=f[h],d=w;d--;)v=v<<1|e&1,5==u?(u=0,x+=c(v),v=0):u++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);f[B]=t++;h=String(y)}if(""!==h){if(Object.prototype.hasOwnProperty.call(g,h)){if(256>h.charCodeAt(0)){for(d=w;d--;)v<<=1,
5==u?(u=0,x+=c(v),v=0):u++;e=h.charCodeAt(0);d=8}else{e=1;for(d=w;d--;)v=v<<1|e,5==u?(u=0,x+=c(v),v=0):u++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)v=v<<1|e&1,5==u?(u=0,x+=c(v),v=0):u++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);delete g[h]}else for(e=f[h],d=w;d--;)v=v<<1|e&1,5==u?(u=0,x+=c(v),v=0):u++,e>>=1;q--;0==q&&w++}e=2;for(d=w;d--;)v=v<<1|e&1,5==u?(u=0,x+=c(v),v=0):u++,e>>=1;for(;;)if(v<<=1,5==u){x+=c(v);break}else u++;return x}function c(a,b){for(var c=[],d=4,f=4,g=3,h="",q="",t,w,x,v,u,y={val:b(0),
position:32,index:1},q=0;3>q;q+=1)c[q]=q;h=0;x=Math.pow(2,2);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*v,v<<=1;switch(h){case 0:h=0;x=Math.pow(2,8);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*v,v<<=1;u=e(h);break;case 1:h=0;x=Math.pow(2,16);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*v,v<<=1;u=e(h);
break;case 2:return""}for(t=q=c[3]=u;;){if(y.index>a)return"";h=0;x=Math.pow(2,g);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*v,v<<=1;switch(u=h){case 0:h=0;x=Math.pow(2,8);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*v,v<<=1;c[f++]=e(h);u=f-1;d--;break;case 1:h=0;x=Math.pow(2,16);for(v=1;v!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),
h|=(0<w?1:0)*v,v<<=1;c[f++]=e(h);u=f-1;d--;break;case 2:return q}0==d&&(d=Math.pow(2,g),g++);if(c[u])h=c[u];else if(u===f)h=t+t[0];else return null;q+=h;c[f++]=t+h[0];d--;t=h;0==d&&(d=Math.pow(2,g),g++)}}b.gQ={qna:function(b){return null===b?"":a(b,function(a){return f.charAt(a)})},Mna:function(a){return null===a?"":""===a?null:c(a.length,function(b){var c=f;b=a.charAt(b);var d;h||(h={});if(!h[c])for(h[c]={},d=0;d<c.length;d++)h[c][c[d]]=d;return h[c][b]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
h})();(function(){b.bs=function(a,c,e){c=c||{};b.l.hm(a);this.rj=encodeURIComponent(a.trim());(this.gw=c.canEnter)&&b.l.tu(this.gw);(this.zw=c.enter)&&b.l.tu(this.zw);(this.hw=c.canExit)&&b.l.tu(this.hw);(this.Aw=c.exit)&&b.l.tu(this.Aw);this.A1=c.value;this.MY=c.label;this.XC=e;this.XE=void 0;Object.defineProperties(this,{id:{value:this.rj,enumerable:!0},value:{get:function(){return this.A1},set:function(a){this.A1=a},enumerable:!0},label:{get:function(){return this.MY},set:function(a){this.MY=a},
enumerable:!0},canEnter:{get:function(){return this.gw},set:function(a){this.gw=a},enumerable:!0},enter:{get:function(){return this.zw},set:function(a){this.zw=a},enumerable:!0},canExit:{get:function(){return this.hw},set:function(a){this.hw=a},enumerable:!0},exit:{get:function(){return this.Aw},set:function(a){this.Aw=a},enumerable:!0}})};o_("RouterState",b.bs,b);b.bs.prototype.go=function(){return this.XC?this.XC.go(this.rj):(b.Ya.mu.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};
b.b.g("RouterState.prototype.go",{go:b.bs.prototype.go});b.bs.prototype.Z3=function(){if(!this.XC)throw Error("Router is not defined for this RouterState object.");return this.XC.Ff()===this.rj};b.b.g("RouterState.prototype.isCurrent",{Z3:b.bs.prototype.Z3})})()});