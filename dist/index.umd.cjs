(function(o,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(o=typeof globalThis<"u"?globalThis:o||self,f(o["cc-tools"]={}))})(this,function(o){"use strict";function f(r){let t=0;const c=s=>{t=s,r.innerHTML=`count is ${t}`};r.addEventListener("click",()=>c(++t)),c(0)}const y=Object.freeze(Object.defineProperty({__proto__:null,toString:r=>r.toString()},Symbol.toStringTag,{value:"Module"}));function S(r){const t=new Map;return r.forEach((c,s)=>{t.set(s,c)}),Object.fromEntries(t.entries())}const O=Object.freeze(Object.defineProperty({__proto__:null,gtValue:S},Symbol.toStringTag,{value:"Module"}));function j(r){const t=new WeakMap,c=new Set;function s(e){return typeof e=="object"&&e!==null}function p(e){if(!s(e))return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e.source,e.flags);if(typeof e=="function")return d(e);if(c.has(e))throw new Error("Cannot clone object with circular reference");c.add(e);const u=t.get(e);if(u)return u;if(e instanceof Map){const n=new Map;return t.set(e,n),e.forEach((i,_)=>{n.set(_,p(i))}),n}if(e instanceof Set){const n=new Set;return t.set(e,n),e.forEach(i=>{n.add(p(i))}),n}const b=Reflect.ownKeys(e),g=Object.getOwnPropertyDescriptors(e),l=Object.create(Object.getPrototypeOf(e),g);return t.set(e,l),b.forEach(n=>{const i=e[n];l[n]=s(i)?p(i):i}),c.delete(e),l}function d(e){const u=e.toString(),b=u.indexOf("{")+1,g=u.lastIndexOf("}"),l=u.slice(b,g),n=`return function ${e.name??"anonymous"}() { ${l} }`;return new Function(n)()}return p(r)}const w=Object.freeze(Object.defineProperty({__proto__:null,deepClone:j},Symbol.toStringTag,{value:"Module"}));o.arr=O,o.obj=w,o.setupCounter=f,o.str=y,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
