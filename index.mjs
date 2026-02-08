// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinitef@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-lnf@v0.0.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.3-esm/index.mjs";var n=i(0),m=i(1),r=i(.5);function a(a){return(a=i(a))===n?a:t(a)||s(a)?NaN:i(r*e(i(i(m+a)/i(m-a))))}export{a as default};
//# sourceMappingURL=index.mjs.map
