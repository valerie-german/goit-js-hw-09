var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o),o("iQIUW");const r=document.querySelector(".form");r.querySelector('input[name="delay"]'),r.querySelector('input[name="step"]'),r.querySelector('input[name="amount"]');let l;function u(e,t){setTimeout((()=>{Math.random()>.3?console.log(`${e} Resolve ${t}`):console.log(`${e} Reject ${t}`)}),t)}r.addEventListener("submit",(e=>{e.preventDefault();const[t,n,o]=e.target.elements,r={delay:t.value,step:n.value,amount:o.value};l=r.delay;for(let e=1;e<=r.amount;e+=1)u(e,l),l=Number(l)+Number(r.step)}));
//# sourceMappingURL=03-promises.d811023f.js.map
