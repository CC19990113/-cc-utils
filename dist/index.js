function w(o) {
  let t = 0;
  const r = (s) => {
    t = s, o.innerHTML = `count is ${t}`;
  };
  o.addEventListener("click", () => r(++t)), r(0);
}
const y = (o) => o.toString(), j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toString: y
}, Symbol.toStringTag, { value: "Module" }));
function O(o) {
  const t = /* @__PURE__ */ new Map();
  return o.forEach((r, s) => {
    t.set(s, r);
  }), Object.fromEntries(t.entries());
}
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  gtValue: O
}, Symbol.toStringTag, { value: "Module" }));
function S(o) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new Set();
  function s(e) {
    return typeof e == "object" && e !== null;
  }
  function f(e) {
    if (!s(e))
      return e;
    if (e instanceof Date)
      return new Date(e);
    if (e instanceof RegExp)
      return new RegExp(e.source, e.flags);
    if (typeof e == "function")
      return b(e);
    if (r.has(e))
      throw new Error("Cannot clone object with circular reference");
    r.add(e);
    const i = t.get(e);
    if (i)
      return i;
    if (e instanceof Map) {
      const n = /* @__PURE__ */ new Map();
      return t.set(e, n), e.forEach((c, g) => {
        n.set(g, f(c));
      }), n;
    }
    if (e instanceof Set) {
      const n = /* @__PURE__ */ new Set();
      return t.set(e, n), e.forEach((c) => {
        n.add(f(c));
      }), n;
    }
    const l = Reflect.ownKeys(e), p = Object.getOwnPropertyDescriptors(e), u = Object.create(Object.getPrototypeOf(e), p);
    return t.set(e, u), l.forEach((n) => {
      const c = e[n];
      u[n] = s(c) ? f(c) : c;
    }), r.delete(e), u;
  }
  function b(e) {
    const i = e.toString(), l = i.indexOf("{") + 1, p = i.lastIndexOf("}"), u = i.slice(l, p), n = `return function ${e.name ?? "anonymous"}() { ${u} }`;
    return new Function(n)();
  }
  return f(o);
}
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  deepClone: S
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as arr,
  E as obj,
  w as setupCounter,
  j as str
};
