"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=u(function(o,n){
var a=require('@stdlib/math-base-assert-is-infinitef/dist'),f=require('@stdlib/math-base-assert-is-nanf/dist'),s=require('@stdlib/math-base-special-lnf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist');function q(r){return r=e(r),r===e(0)?r:f(r)||a(r)?NaN:e(e(.5)*s(e(e(1)+r)/e(e(1)-r)))}n.exports=q
});var v=t();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
