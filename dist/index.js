"use strict";var f=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(u){throw (i=0, u)}};};var t=f(function(O,n){
var s=require('@stdlib/math-base-assert-is-infinitef/dist'),v=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-special-lnf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),c=e(0),a=e(1),o=e(.5);function N(r){return r=e(r),r===c?r:v(r)||s(r)?NaN:e(o*q(e(e(a+r)/e(a-r))))}n.exports=N
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
