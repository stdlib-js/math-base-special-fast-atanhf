"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=u(function(E,n){
var f=require('@stdlib/math-base-assert-is-infinitef/dist'),s=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-lnf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),q=e(0),a=e(1),c=e(.5);function o(r){return r=e(r),r===q?r:s(r)||f(r)?NaN:e(c*v(e(e(a+r)/e(a-r))))}n.exports=o
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
