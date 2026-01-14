import {
  a
} from "./chunk-ZHTCZNWP.js";
import {
  Q,
  dn,
  fn,
  gn,
  hn,
  mn,
  on,
  un,
  vn
} from "./chunk-ZFVRZDKL.js";
import {
  $,
  $t,
  En,
  Et,
  I,
  Ie,
  It,
  Ln,
  Ot,
  Pt,
  St,
  Tn,
  Vn,
  Xn,
  Y,
  _t,
  bn,
  dt,
  yr,
  zn
} from "./chunk-D5X4WG6P.js";
import {
  Aa,
  D_,
  E_,
  Ir,
  Iu,
  Js,
  La,
  Li,
  O_,
  On,
  Xk,
  _g,
  ac,
  iS,
  nu,
  oc,
  sS
} from "./chunk-SCO4KOO5.js";
import {
  __publicField
} from "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/mermaid-parser.core-N8bHQHCN.js
var bc = Object.prototype;
var Oc = bc.hasOwnProperty;
var ke = sS(function(n, e) {
  if (La(e) || Aa(e)) {
    D_(e, $(e), n);
    return;
  }
  for (var t in e)
    Oc.call(e, t) && O_(n, t, e[t]);
});
function wl(n, e, t) {
  var r = -1, i = n.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = n[r + e];
  return s;
}
function Qn(n) {
  for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
    var s = n[e];
    s && (i[r++] = s);
  }
  return i;
}
function Pc(n, e, t, r) {
  for (var i = -1, s = n == null ? 0 : n.length; ++i < s; ) {
    var a2 = n[i];
    e(r, a2, t(a2), n);
  }
  return r;
}
function Mc(n, e, t, r) {
  return Y(n, function(i, s, a2) {
    e(r, i, t(i), a2);
  }), r;
}
function Dc(n, e) {
  return function(t, r) {
    var i = Js(t) ? Pc : Mc, s = e ? e() : {};
    return i(t, n, Ln(r), s);
  };
}
var Fc = 200;
function Gc(n, e, t, r) {
  var i = -1, s = Vn, a2 = true, o = n.length, l = [], u = e.length;
  if (!o)
    return l;
  e.length >= Fc && (s = En, a2 = false, e = new I(e));
  e:
    for (; ++i < o; ) {
      var c = n[i], d = c;
      if (c = c !== 0 ? c : 0, a2 && d === d) {
        for (var h = u; h--; )
          if (e[h] === d)
            continue e;
        l.push(c);
      } else s(e, d, r) || l.push(c);
    }
  return l;
}
var fi = iS(function(n, e) {
  return Xk(n) ? Gc(n, Ot(e, 1, Xk, true)) : [];
});
function Q2(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Q(e), wl(n, e < 0 ? 0 : e, r)) : [];
}
function qn(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Q(e), e = r - e, wl(n, 0, e < 0 ? 0 : e)) : [];
}
function Uc(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (!e(n[t], t, n))
      return false;
  return true;
}
function Bc(n, e) {
  var t = true;
  return Y(n, function(r, i, s) {
    return t = !!e(r, i, s), t;
  }), t;
}
function Oe(n, e, t) {
  var r = Js(n) ? Uc : Bc;
  return r(n, Ln(e));
}
function Pe(n) {
  return n && n.length ? n[0] : void 0;
}
function Ee(n, e) {
  return Ot(gn(n, e));
}
var Vc = Object.prototype;
var Kc = Vc.hasOwnProperty;
var Wc = Dc(function(n, e, t) {
  Kc.call(n, t) ? n[t].push(e) : oc(n, t, [e]);
});
var Hc = "[object String]";
function he(n) {
  return typeof n == "string" || !Js(n) && On(n) && Li(n) == Hc;
}
var jc = Math.max;
function de(n, e, t, r) {
  n = Aa(n) ? n : St(n), t = t ? Q(t) : 0;
  var i = n.length;
  return t < 0 && (t = jc(i + t, 0)), he(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && zn(n, e, t) > -1;
}
function Ta(n, e, t) {
  var r = n == null ? 0 : n.length;
  if (!r)
    return -1;
  var i = 0;
  return zn(n, e, i);
}
var zc = "[object RegExp]";
function qc(n) {
  return On(n) && Li(n) == zc;
}
var Ra = nu && nu.isRegExp;
var Xe = Ra ? E_(Ra) : qc;
var Yc = "Expected a function";
function Xc(n) {
  if (typeof n != "function")
    throw new TypeError(Yc);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !n.call(this);
      case 1:
        return !n.call(this, e[0]);
      case 2:
        return !n.call(this, e[0], e[1]);
      case 3:
        return !n.call(this, e[0], e[1], e[2]);
    }
    return !n.apply(this, e);
  };
}
function Me(n, e) {
  if (n == null)
    return {};
  var t = bn(yr(n), function(r) {
    return [r];
  });
  return e = Ln(e), vn(n, t, function(r, i) {
    return e(r, i[0]);
  });
}
function hi(n, e) {
  var t = Js(n) ? Tn : dt;
  return t(n, Xc(Ln(e)));
}
function Jc(n, e) {
  var t;
  return Y(n, function(r, i, s) {
    return t = e(r, i, s), !t;
  }), !!t;
}
function Ll(n, e, t) {
  var r = Js(n) ? Ie : Jc;
  return r(n, Ln(e));
}
function Vs(n) {
  return n && n.length ? Pt(n) : [];
}
function Qc(n, e) {
  return n && n.length ? Pt(n, Ln(e)) : [];
}
function ae(n) {
  return typeof n == "object" && n !== null && typeof n.$type == "string";
}
function Ue(n) {
  return typeof n == "object" && n !== null && typeof n.$refText == "string";
}
function Zc(n) {
  return typeof n == "object" && n !== null && typeof n.name == "string" && typeof n.type == "string" && typeof n.path == "string";
}
function Ir2(n) {
  return typeof n == "object" && n !== null && ae(n.container) && Ue(n.reference) && typeof n.message == "string";
}
var _l = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t)
      return true;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[t];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, t);
      return r[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    const t = this.allSubtypes[e];
    if (t)
      return t;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
};
function Yn(n) {
  return typeof n == "object" && n !== null && Array.isArray(n.content);
}
function bl(n) {
  return typeof n == "object" && n !== null && typeof n.tokenType == "object";
}
function Ol(n) {
  return Yn(n) && typeof n.fullText == "string";
}
var Z = class _Z {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let t = 0, r = e.next();
    for (; !r.done; )
      t++, r = e.next();
    return t;
  }
  toArray() {
    const e = [], t = this.iterator();
    let r;
    do
      r = t.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    const r = this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new _Z(() => ({ first: this.startFn(), firstDone: false, iterator: e[Symbol.iterator]() }), (t) => {
      let r;
      if (!t.firstDone) {
        do
          if (r = this.nextFn(t.first), !r.done)
            return r;
        while (!r.done);
        t.firstDone = true;
      }
      do
        if (r = t.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return ve;
    });
  }
  join(e = ",") {
    const t = this.iterator();
    let r = "", i, s = false;
    do
      i = t.next(), i.done || (s && (r += e), r += ed(i.value)), s = true;
    while (!i.done);
    return r;
  }
  indexOf(e, t = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return false;
      r = t.next();
    }
    return true;
  }
  some(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return true;
      r = t.next();
    }
    return false;
  }
  forEach(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; )
      e(i.value, r), i = t.next(), r++;
  }
  map(e) {
    return new _Z(this.startFn, (t) => {
      const { done: r, value: i } = this.nextFn(t);
      return r ? ve : { done: false, value: e(i) };
    });
  }
  filter(e) {
    return new _Z(this.startFn, (t) => {
      let r;
      do
        if (r = this.nextFn(t), !r.done && e(r.value))
          return r;
      while (!r.done);
      return ve;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    const r = this.iterator();
    let i = t, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(this.iterator(), e, t);
  }
  recursiveReduce(e, t, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, t, r);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = t.next();
    }
  }
  findIndex(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = t.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (r.value === e)
        return true;
      r = t.next();
    }
    return false;
  }
  flatMap(e) {
    return new _Z(() => ({ this: this.startFn() }), (t) => {
      do {
        if (t.iterator) {
          const s = t.iterator.next();
          if (s.done)
            t.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(t.this);
        if (!r) {
          const s = e(i);
          if (Kr(s))
            t.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
        }
      } while (t.iterator);
      return ve;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const t = e > 1 ? this.flat(e - 1) : this;
    return new _Z(() => ({ this: t.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a2 = r.iterator.next();
          if (a2.done)
            r.iterator = void 0;
          else
            return a2;
        }
        const { done: i, value: s } = t.nextFn(r.this);
        if (!i)
          if (Kr(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
      } while (r.iterator);
      return ve;
    });
  }
  head() {
    const t = this.iterator().next();
    if (!t.done)
      return t.value;
  }
  tail(e = 1) {
    return new _Z(() => {
      const t = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(t).done)
          return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new _Z(() => ({ size: 0, state: this.startFn() }), (t) => (t.size++, t.size > e ? ve : this.nextFn(t.state)));
  }
  distinct(e) {
    return new _Z(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (t) => {
      let r;
      do
        if (r = this.nextFn(t.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!t.set.has(i))
            return t.set.add(i), r;
        }
      while (!r.done);
      return ve;
    });
  }
  exclude(e, t) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = t ? t(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = t ? t(i) : i;
      return !r.has(s);
    });
  }
};
function ed(n) {
  return typeof n == "string" ? n : typeof n > "u" ? "undefined" : typeof n.toString == "function" ? n.toString() : Object.prototype.toString.call(n);
}
function Kr(n) {
  return !!n && typeof n[Symbol.iterator] == "function";
}
var td = new Z(() => {
}, () => ve);
var ve = Object.freeze({ done: true, value: void 0 });
function ee(...n) {
  if (n.length === 1) {
    const e = n[0];
    if (e instanceof Z)
      return e;
    if (Kr(e))
      return new Z(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number")
      return new Z(() => ({ index: 0 }), (t) => t.index < e.length ? { done: false, value: e[t.index++] } : ve);
  }
  return n.length > 1 ? new Z(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const t = e.iterator.next();
        if (!t.done)
          return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: false, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < n.length) {
        const t = n[e.collIndex++];
        Kr(t) ? e.iterator = t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < n.length);
    return ve;
  }) : td;
}
var Ks = class extends Z {
  constructor(e, t, r) {
    super(() => ({
      iterators: (r == null ? void 0 : r.includeRoot) ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
      pruned: false
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = false); i.iterators.length > 0; ) {
        const a2 = i.iterators[i.iterators.length - 1].next();
        if (a2.done)
          i.iterators.pop();
        else
          return i.iterators.push(t(a2.value)[Symbol.iterator]()), a2;
      }
      return ve;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = true;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
};
var rs;
(function(n) {
  function e(s) {
    return s.reduce((a2, o) => a2 + o, 0);
  }
  n.sum = e;
  function t(s) {
    return s.reduce((a2, o) => a2 * o, 0);
  }
  n.product = t;
  function r(s) {
    return s.reduce((a2, o) => Math.min(a2, o));
  }
  n.min = r;
  function i(s) {
    return s.reduce((a2, o) => Math.max(a2, o));
  }
  n.max = i;
})(rs || (rs = {}));
function is(n) {
  return new Ks(n, (e) => Yn(e) ? e.content : [], { includeRoot: true });
}
function nd(n, e) {
  for (; n.container; )
    if (n = n.container, n === e)
      return true;
  return false;
}
function ss(n) {
  return {
    start: {
      character: n.startColumn - 1,
      line: n.startLine - 1
    },
    end: {
      character: n.endColumn,
      // endColumn uses the correct index
      line: n.endLine - 1
    }
  };
}
function Wr(n) {
  if (!n)
    return;
  const { offset: e, end: t, range: r } = n;
  return {
    range: r,
    offset: e,
    end: t,
    length: t - e
  };
}
var je;
(function(n) {
  n[n.Before = 0] = "Before", n[n.After = 1] = "After", n[n.OverlapFront = 2] = "OverlapFront", n[n.OverlapBack = 3] = "OverlapBack", n[n.Inside = 4] = "Inside", n[n.Outside = 5] = "Outside";
})(je || (je = {}));
function rd(n, e) {
  if (n.end.line < e.start.line || n.end.line === e.start.line && n.end.character <= e.start.character)
    return je.Before;
  if (n.start.line > e.end.line || n.start.line === e.end.line && n.start.character >= e.end.character)
    return je.After;
  const t = n.start.line > e.start.line || n.start.line === e.start.line && n.start.character >= e.start.character, r = n.end.line < e.end.line || n.end.line === e.end.line && n.end.character <= e.end.character;
  return t && r ? je.Inside : t ? je.OverlapBack : r ? je.OverlapFront : je.Outside;
}
function id(n, e) {
  return rd(n, e) > je.After;
}
var sd = /^[\w\p{L}]$/u;
function ad(n, e) {
  if (n) {
    const t = od(n, true);
    if (t && va(t, e))
      return t;
    if (Ol(n)) {
      const r = n.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = n.content[i];
        if (va(s, e))
          return s;
      }
    }
  }
}
function va(n, e) {
  return bl(n) && e.includes(n.tokenType.name);
}
function od(n, e = true) {
  for (; n.container; ) {
    const t = n.container;
    let r = t.content.indexOf(n);
    for (; r > 0; ) {
      r--;
      const i = t.content[r];
      if (e || !i.hidden)
        return i;
    }
    n = t;
  }
}
var Pl = class extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
};
function Zn(n) {
  throw new Error("Error! The input value was not handled.");
}
var ar = "AbstractRule";
var or = "AbstractType";
var Ni = "Condition";
var Aa2 = "TypeDefinition";
var wi = "ValueLiteral";
var dn2 = "AbstractElement";
function ld(n) {
  return M.isInstance(n, dn2);
}
var lr = "ArrayLiteral";
var ur = "ArrayType";
var fn2 = "BooleanLiteral";
function ud(n) {
  return M.isInstance(n, fn2);
}
var hn2 = "Conjunction";
function cd(n) {
  return M.isInstance(n, hn2);
}
var pn = "Disjunction";
function dd(n) {
  return M.isInstance(n, pn);
}
var cr = "Grammar";
var Li2 = "GrammarImport";
var mn2 = "InferredType";
function Ml(n) {
  return M.isInstance(n, mn2);
}
var gn2 = "Interface";
function Dl(n) {
  return M.isInstance(n, gn2);
}
var _i = "NamedArgument";
var yn = "Negation";
function fd(n) {
  return M.isInstance(n, yn);
}
var dr = "NumberLiteral";
var fr = "Parameter";
var Tn2 = "ParameterReference";
function hd(n) {
  return M.isInstance(n, Tn2);
}
var Rn = "ParserRule";
function we(n) {
  return M.isInstance(n, Rn);
}
var hr = "ReferenceType";
var Nr = "ReturnType";
function pd(n) {
  return M.isInstance(n, Nr);
}
var vn2 = "SimpleType";
function md(n) {
  return M.isInstance(n, vn2);
}
var pr = "StringLiteral";
var It2 = "TerminalRule";
function Et2(n) {
  return M.isInstance(n, It2);
}
var An = "Type";
function Fl(n) {
  return M.isInstance(n, An);
}
var bi = "TypeAttribute";
var mr = "UnionType";
var En2 = "Action";
function pi(n) {
  return M.isInstance(n, En2);
}
var kn = "Alternatives";
function Gl(n) {
  return M.isInstance(n, kn);
}
var $n = "Assignment";
function mt(n) {
  return M.isInstance(n, $n);
}
var xn = "CharacterRange";
function gd(n) {
  return M.isInstance(n, xn);
}
var Sn = "CrossReference";
function Ws(n) {
  return M.isInstance(n, Sn);
}
var Cn = "EndOfFile";
function yd(n) {
  return M.isInstance(n, Cn);
}
var In = "Group";
function Hs(n) {
  return M.isInstance(n, In);
}
var Nn = "Keyword";
function gt(n) {
  return M.isInstance(n, Nn);
}
var wn = "NegatedToken";
function Td(n) {
  return M.isInstance(n, wn);
}
var Ln2 = "RegexToken";
function Rd(n) {
  return M.isInstance(n, Ln2);
}
var _n = "RuleCall";
function yt(n) {
  return M.isInstance(n, _n);
}
var bn2 = "TerminalAlternatives";
function vd(n) {
  return M.isInstance(n, bn2);
}
var On2 = "TerminalGroup";
function Ad(n) {
  return M.isInstance(n, On2);
}
var Pn = "TerminalRuleCall";
function Ed(n) {
  return M.isInstance(n, Pn);
}
var Mn = "UnorderedGroup";
function Ul(n) {
  return M.isInstance(n, Mn);
}
var Dn = "UntilToken";
function kd(n) {
  return M.isInstance(n, Dn);
}
var Fn = "Wildcard";
function $d(n) {
  return M.isInstance(n, Fn);
}
var Bl = class extends _l {
  getAllTypes() {
    return [dn2, ar, or, En2, kn, lr, ur, $n, fn2, xn, Ni, hn2, Sn, pn, Cn, cr, Li2, In, mn2, gn2, Nn, _i, wn, yn, dr, fr, Tn2, Rn, hr, Ln2, Nr, _n, vn2, pr, bn2, On2, It2, Pn, An, bi, Aa2, mr, Mn, Dn, wi, Fn];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case En2:
      case kn:
      case $n:
      case xn:
      case Sn:
      case Cn:
      case In:
      case Nn:
      case wn:
      case Ln2:
      case _n:
      case bn2:
      case On2:
      case Pn:
      case Mn:
      case Dn:
      case Fn:
        return this.isSubtype(dn2, t);
      case lr:
      case dr:
      case pr:
        return this.isSubtype(wi, t);
      case ur:
      case hr:
      case vn2:
      case mr:
        return this.isSubtype(Aa2, t);
      case fn2:
        return this.isSubtype(Ni, t) || this.isSubtype(wi, t);
      case hn2:
      case pn:
      case yn:
      case Tn2:
        return this.isSubtype(Ni, t);
      case mn2:
      case gn2:
      case An:
        return this.isSubtype(or, t);
      case Rn:
        return this.isSubtype(ar, t) || this.isSubtype(or, t);
      case It2:
        return this.isSubtype(ar, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return or;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return ar;
      case "Grammar:usedGrammars":
        return cr;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return fr;
      case "TerminalRuleCall:rule":
        return It2;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case dn2:
        return {
          name: dn2,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case lr:
        return {
          name: lr,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "elementType" }
          ]
        };
      case fn2:
        return {
          name: fn2,
          properties: [
            { name: "true", defaultValue: false }
          ]
        };
      case hn2:
        return {
          name: hn2,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case pn:
        return {
          name: pn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: false },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case Li2:
        return {
          name: Li2,
          properties: [
            { name: "path" }
          ]
        };
      case mn2:
        return {
          name: mn2,
          properties: [
            { name: "name" }
          ]
        };
      case gn2:
        return {
          name: gn2,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case _i:
        return {
          name: _i,
          properties: [
            { name: "calledByName", defaultValue: false },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case yn:
        return {
          name: yn,
          properties: [
            { name: "value" }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "value" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "name" }
          ]
        };
      case Tn2:
        return {
          name: Tn2,
          properties: [
            { name: "parameter" }
          ]
        };
      case Rn:
        return {
          name: Rn,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "definition" },
            { name: "entry", defaultValue: false },
            { name: "fragment", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: false }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "referenceType" }
          ]
        };
      case Nr:
        return {
          name: Nr,
          properties: [
            { name: "name" }
          ]
        };
      case vn2:
        return {
          name: vn2,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case pr:
        return {
          name: pr,
          properties: [
            { name: "value" }
          ]
        };
      case It2:
        return {
          name: It2,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: false },
            { name: "hidden", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case An:
        return {
          name: An,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case bi:
        return {
          name: bi,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case mr:
        return {
          name: mr,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case En2:
        return {
          name: En2,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case kn:
        return {
          name: kn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case $n:
        return {
          name: $n,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case xn:
        return {
          name: xn,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case Sn:
        return {
          name: Sn,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: false },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case Cn:
        return {
          name: Cn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case In:
        return {
          name: In,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case Nn:
        return {
          name: Nn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case wn:
        return {
          name: wn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Ln2:
        return {
          name: Ln2,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case _n:
        return {
          name: _n,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case bn2:
        return {
          name: bn2,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case On2:
        return {
          name: On2,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Pn:
        return {
          name: Pn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case Mn:
        return {
          name: Mn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Dn:
        return {
          name: Dn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Fn:
        return {
          name: Fn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
};
var M = new Bl();
function xd(n) {
  for (const [e, t] of Object.entries(n))
    e.startsWith("$") || (Array.isArray(t) ? t.forEach((r, i) => {
      ae(r) && (r.$container = n, r.$containerProperty = e, r.$containerIndex = i);
    }) : ae(t) && (t.$container = n, t.$containerProperty = e));
}
function mi(n, e) {
  let t = n;
  for (; t; ) {
    if (e(t))
      return t;
    t = t.$container;
  }
}
function Ze(n) {
  const t = as(n).$document;
  if (!t)
    throw new Error("AST node has no document.");
  return t;
}
function as(n) {
  for (; n.$container; )
    n = n.$container;
  return n;
}
function js(n, e) {
  if (!n)
    throw new Error("Node must be an AstNode.");
  const t = e == null ? void 0 : e.range;
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = n[i];
        if (ae(s)) {
          if (r.keyIndex++, Ea(s, t))
            return { done: false, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a2 = r.arrayIndex++, o = s[a2];
            if (ae(o) && Ea(o, t))
              return { done: false, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return ve;
  });
}
function er(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Ks(n, (t) => js(t, e));
}
function wt(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Ks(n, (t) => js(t, e), { includeRoot: true });
}
function Ea(n, e) {
  var t;
  if (!e)
    return true;
  const r = (t = n.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return r ? id(r, e) : false;
}
function Vl(n) {
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        const r = n[t];
        if (Ue(r))
          return e.keyIndex++, { done: false, value: { reference: r, container: n, property: t } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (Ue(s))
              return { done: false, value: { reference: s, container: n, property: t, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return ve;
  });
}
function Sd(n, e) {
  const t = n.getTypeMetaData(e.$type), r = e;
  for (const i of t.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = Kl(i.defaultValue));
}
function Kl(n) {
  return Array.isArray(n) ? [...n.map(Kl)] : n;
}
function w(n) {
  return n.charCodeAt(0);
}
function Oi(n, e) {
  Array.isArray(n) ? n.forEach(function(t) {
    e.push(t);
  }) : e.push(n);
}
function ln(n, e) {
  if (n[e] === true)
    throw "duplicate flag " + e;
  n[e], n[e] = true;
}
function Ct(n) {
  if (n === void 0)
    throw Error("Internal Error - Should never get here!");
  return true;
}
function Cd() {
  throw Error("Internal Error - Should never get here!");
}
function ka(n) {
  return n.type === "Character";
}
var Hr = [];
for (let n = w("0"); n <= w("9"); n++)
  Hr.push(n);
var jr = [w("_")].concat(Hr);
for (let n = w("a"); n <= w("z"); n++)
  jr.push(n);
for (let n = w("A"); n <= w("Z"); n++)
  jr.push(n);
var $a = [
  w(" "),
  w("\f"),
  w(`
`),
  w("\r"),
  w("	"),
  w("\v"),
  w("	"),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w("\u2028"),
  w("\u2029"),
  w(" "),
  w(" "),
  w("　"),
  w("\uFEFF")
];
var Id = /[0-9a-fA-F]/;
var gr = /[0-9]/;
var Nd = /[1-9]/;
var Wl = class {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const t = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          ln(r, "global");
          break;
        case "i":
          ln(r, "ignoreCase");
          break;
        case "m":
          ln(r, "multiLine");
          break;
        case "u":
          ln(r, "unicode");
          break;
        case "y":
          ln(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: t,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], t = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(t) };
  }
  alternative() {
    const e = [], t = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(t) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        Ct(t);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: r,
          loc: this.loc(e)
        };
    }
    return Cd();
  }
  quantifier(e = false) {
    let t;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === true && t === void 0)
          return;
        Ct(t);
        break;
    }
    if (!(e === true && t === void 0) && Ct(t))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = this.loc(r), t;
  }
  atom() {
    let e;
    const t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), Ct(e))
      return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: true,
      value: [w(`
`), w("\r"), w("\u2028"), w("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, t = false;
    switch (this.popChar()) {
      case "d":
        e = Hr;
        break;
      case "D":
        e = Hr, t = true;
        break;
      case "s":
        e = $a;
        break;
      case "S":
        e = $a, t = true;
        break;
      case "w":
        e = jr;
        break;
      case "W":
        e = jr, t = true;
        break;
    }
    if (Ct(e))
      return { type: "Set", value: e, complement: t };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = w("\f");
        break;
      case "n":
        e = w(`
`);
        break;
      case "r":
        e = w("\r");
        break;
      case "t":
        e = w("	");
        break;
      case "v":
        e = w("\v");
        break;
    }
    if (Ct(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === false)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: w("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: w(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: w(e) };
    }
  }
  characterClass() {
    const e = [];
    let t = false;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, ka(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, ka(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          Oi(r.value, e), e.push(w("-")), Oi(i.value, e);
      } else
        Oi(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: t, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), { type: "Character", value: w("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = true;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const t = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (Nd.test(e) === false)
      throw Error("Expecting a positive integer");
    for (; gr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (gr.test(e) === false)
      throw Error("Expecting an integer");
    for (; gr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: w(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return gr.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return true;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch {
      return false;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (Id.test(s) === false)
        throw Error("Expecting a HexDecimal digits");
      t += s;
    }
    return { type: "Character", value: parseInt(t, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
};
var gi = class {
  visitChildren(e) {
    for (const t in e) {
      const r = e[t];
      e.hasOwnProperty(t) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
};
var wd = /\r?\n/gm;
var Ld = new Wl();
var _d = class extends gi {
  constructor() {
    super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = false, this.regex = e, this.startRegexp = "", this.isStarting = true, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = false, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const t = String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = true), e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const r = yi(t);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const t = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(t);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const t = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
};
var Pi = new _d();
function bd(n) {
  try {
    return typeof n == "string" && (n = new RegExp(n)), n = n.toString(), Pi.reset(n), Pi.visit(Ld.pattern(n)), Pi.multiline;
  } catch {
    return false;
  }
}
var Od = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function os(n) {
  const e = typeof n == "string" ? new RegExp(n) : n;
  return Od.some((t) => e.test(t));
}
function yi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Pd(n) {
  return Array.prototype.map.call(n, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : yi(e)).join("");
}
function Md(n, e) {
  const t = Dd(n), r = e.match(t);
  return !!r && r[0].length > 0;
}
function Dd(n) {
  typeof n == "string" && (n = new RegExp(n));
  const e = n, t = n.source;
  let r = 0;
  function i() {
    let s = "", a2;
    function o(u) {
      s += t.substr(r, u), r += u;
    }
    function l(u) {
      s += "(?:" + t.substr(r, u) + "|$)", r += u;
    }
    for (; r < t.length; )
      switch (t[r]) {
        case "\\":
          switch (t[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? t[r + 2] === "{" ? l(t.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(t.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(t.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a2 = /\[(?:\\.|.)*?\]/g, a2.lastIndex = r, a2 = a2.exec(t) || [], l(a2[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a2 = /\{\d+,?\d*\}/g, a2.lastIndex = r, a2 = a2.exec(t), a2 ? o(a2[0].length) : l(1);
          break;
        case "(":
          if (t[r + 1] === "?")
            switch (t[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a2 = r, r += 3, i(), s += t.substr(a2, r - a2);
                break;
              case "<":
                switch (t[r + 3]) {
                  case "=":
                  case "!":
                    a2 = r, r += 4, i(), s += t.substr(a2, r - a2);
                    break;
                  default:
                    o(t.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), n.flags);
}
function Fd(n) {
  return n.rules.find((e) => we(e) && e.entry);
}
function Gd(n) {
  return n.rules.filter((e) => Et2(e) && e.hidden);
}
function Hl(n, e) {
  const t = /* @__PURE__ */ new Set(), r = Fd(n);
  if (!r)
    return new Set(n.rules);
  const i = [r].concat(Gd(n));
  for (const a2 of i)
    jl(a2, t, e);
  const s = /* @__PURE__ */ new Set();
  for (const a2 of n.rules)
    (t.has(a2.name) || Et2(a2) && a2.hidden) && s.add(a2);
  return s;
}
function jl(n, e, t) {
  e.add(n.name), er(n).forEach((r) => {
    if (yt(r) || t) {
      const i = r.rule.ref;
      i && !e.has(i.name) && jl(i, e, t);
    }
  });
}
function Ud(n) {
  if (n.terminal)
    return n.terminal;
  if (n.type.ref) {
    const e = ql(n.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
function Bd(n) {
  return n.hidden && !os(Xs(n));
}
function Vd(n, e) {
  return !n || !e ? [] : zs(n, e, n.astNode, true);
}
function zl(n, e, t) {
  if (!n || !e)
    return;
  const r = zs(n, e, n.astNode, true);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function zs(n, e, t, r) {
  if (!r) {
    const i = mi(n.grammarSource, mt);
    if (i && i.feature === e)
      return [n];
  }
  return Yn(n) && n.astNode === t ? n.content.flatMap((i) => zs(i, e, t, false)) : [];
}
function Kd(n, e, t) {
  if (!n)
    return;
  const r = Wd(n, e, n == null ? void 0 : n.astNode);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function Wd(n, e, t) {
  if (n.astNode !== t)
    return [];
  if (gt(n.grammarSource) && n.grammarSource.value === e)
    return [n];
  const r = is(n).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a2 = i.value;
      a2.astNode === t ? gt(a2.grammarSource) && a2.grammarSource.value === e && s.push(a2) : r.prune();
    }
  while (!i.done);
  return s;
}
function Hd(n) {
  var e;
  const t = n.astNode;
  for (; t === ((e = n.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = mi(n.grammarSource, mt);
    if (r)
      return r;
    n = n.container;
  }
}
function ql(n) {
  let e = n;
  return Ml(e) && (pi(e.$container) ? e = e.$container.$container : we(e.$container) ? e = e.$container : Zn(e.$container)), Yl(n, e, /* @__PURE__ */ new Map());
}
function Yl(n, e, t) {
  var r;
  function i(s, a2) {
    let o;
    return mi(s, mt) || (o = Yl(a2, a2, t)), t.set(n, o), o;
  }
  if (t.has(n))
    return t.get(n);
  t.set(n, void 0);
  for (const s of er(e)) {
    if (mt(s) && s.feature.toLowerCase() === "name")
      return t.set(n, s), s;
    if (yt(s) && we(s.rule.ref))
      return i(s, s.rule.ref);
    if (md(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Xl(n) {
  return Jl(n, /* @__PURE__ */ new Set());
}
function Jl(n, e) {
  if (e.has(n))
    return true;
  e.add(n);
  for (const t of er(n))
    if (yt(t)) {
      if (!t.rule.ref || we(t.rule.ref) && !Jl(t.rule.ref, e))
        return false;
    } else {
      if (mt(t))
        return false;
      if (pi(t))
        return false;
    }
  return !!n.definition;
}
function qs(n) {
  if (n.inferredType)
    return n.inferredType.name;
  if (n.dataType)
    return n.dataType;
  if (n.returnType) {
    const e = n.returnType.ref;
    if (e) {
      if (we(e))
        return e.name;
      if (Dl(e) || Fl(e))
        return e.name;
    }
  }
}
function Ys(n) {
  var e;
  if (we(n))
    return Xl(n) ? n.name : (e = qs(n)) !== null && e !== void 0 ? e : n.name;
  if (Dl(n) || Fl(n) || pd(n))
    return n.name;
  if (pi(n)) {
    const t = jd(n);
    if (t)
      return t;
  } else if (Ml(n))
    return n.name;
  throw new Error("Cannot get name of Unknown Type");
}
function jd(n) {
  var e;
  if (n.inferredType)
    return n.inferredType.name;
  if (!((e = n.type) === null || e === void 0) && e.ref)
    return Ys(n.type.ref);
}
function zd(n) {
  var e, t, r;
  return Et2(n) ? (t = (e = n.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (r = qs(n)) !== null && r !== void 0 ? r : n.name;
}
function Xs(n) {
  const e = {
    s: false,
    i: false,
    u: false
  }, t = rn(n.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(t, r);
}
var Js2 = /[\s\S]/.source;
function rn(n, e) {
  if (vd(n))
    return qd(n);
  if (Ad(n))
    return Yd(n);
  if (gd(n))
    return Qd(n);
  if (Ed(n)) {
    const t = n.rule.ref;
    if (!t)
      throw new Error("Missing rule reference.");
    return qe(rn(t.definition), {
      cardinality: n.cardinality,
      lookahead: n.lookahead
    });
  } else {
    if (Td(n))
      return Jd(n);
    if (kd(n))
      return Xd(n);
    if (Rd(n)) {
      const t = n.regex.lastIndexOf("/"), r = n.regex.substring(1, t), i = n.regex.substring(t + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), qe(r, {
        cardinality: n.cardinality,
        lookahead: n.lookahead,
        wrap: false
      });
    } else {
      if ($d(n))
        return qe(Js2, {
          cardinality: n.cardinality,
          lookahead: n.lookahead
        });
      throw new Error(`Invalid terminal element: ${n == null ? void 0 : n.$type}`);
    }
  }
}
function qd(n) {
  return qe(n.elements.map((e) => rn(e)).join("|"), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Yd(n) {
  return qe(n.elements.map((e) => rn(e)).join(""), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Xd(n) {
  return qe(`${Js2}*?${rn(n.terminal)}`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Jd(n) {
  return qe(`(?!${rn(n.terminal)})${Js2}*?`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Qd(n) {
  return n.right ? qe(`[${Mi(n.left)}-${Mi(n.right)}]`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: false
  }) : qe(Mi(n.left), {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: false
  });
}
function Mi(n) {
  return yi(n.value);
}
function qe(n, e) {
  var t;
  return (e.wrap !== false || e.lookahead) && (n = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${n})`), e.cardinality ? `${n}${e.cardinality}` : n;
}
function Zd(n) {
  const e = [], t = n.Grammar;
  for (const r of t.rules)
    Et2(r) && Bd(r) && bd(Xs(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: sd
  };
}
function ls(n) {
  console && console.error && console.error(`Error: ${n}`);
}
function Ql(n) {
  console && console.warn && console.warn(`Warning: ${n}`);
}
function Zl(n) {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = n();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: t };
}
function eu(n) {
  function e() {
  }
  e.prototype = n;
  const t = new e();
  function r() {
    return typeof t.bar;
  }
  return r(), r(), n;
}
function ef(n) {
  return tf(n) ? n.LABEL : n.name;
}
function tf(n) {
  return he(n.LABEL) && n.LABEL !== "";
}
var Be = class {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), $t(this.definition, (t) => {
      t.accept(e);
    });
  }
};
var ue = class extends Be {
  constructor(e) {
    super([]), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
};
var sn = class extends Be {
  constructor(e) {
    super(e.definition), this.orgText = "", ke(this, Me(e, (t) => t !== void 0));
  }
};
var pe = class extends Be {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = false, ke(this, Me(e, (t) => t !== void 0));
  }
};
var ne = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
var xe = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
var Se = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
var W = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
var me = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
var ge = class extends Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, ke(this, Me(e, (t) => t !== void 0));
  }
};
var G = class {
  constructor(e) {
    this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
};
function nf(n) {
  return gn(n, wr);
}
function wr(n) {
  function e(t) {
    return gn(t, wr);
  }
  if (n instanceof ue) {
    const t = {
      type: "NonTerminal",
      name: n.nonTerminalName,
      idx: n.idx
    };
    return he(n.label) && (t.label = n.label), t;
  } else {
    if (n instanceof pe)
      return {
        type: "Alternative",
        definition: e(n.definition)
      };
    if (n instanceof ne)
      return {
        type: "Option",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof xe)
      return {
        type: "RepetitionMandatory",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof Se)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: n.idx,
        separator: wr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof me)
      return {
        type: "RepetitionWithSeparator",
        idx: n.idx,
        separator: wr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof W)
      return {
        type: "Repetition",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof ge)
      return {
        type: "Alternation",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof G) {
      const t = {
        type: "Terminal",
        name: n.terminalType.name,
        label: ef(n.terminalType),
        idx: n.idx
      };
      he(n.label) && (t.terminalLabel = n.label);
      const r = n.terminalType.PATTERN;
      return n.terminalType.PATTERN && (t.pattern = Xe(r) ? r.source : r), t;
    } else {
      if (n instanceof sn)
        return {
          type: "Rule",
          name: n.name,
          orgText: n.orgText,
          definition: e(n.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
var an = class {
  visit(e) {
    const t = e;
    switch (t.constructor) {
      case ue:
        return this.visitNonTerminal(t);
      case pe:
        return this.visitAlternative(t);
      case ne:
        return this.visitOption(t);
      case xe:
        return this.visitRepetitionMandatory(t);
      case Se:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case me:
        return this.visitRepetitionWithSeparator(t);
      case W:
        return this.visitRepetition(t);
      case ge:
        return this.visitAlternation(t);
      case G:
        return this.visitTerminal(t);
      case sn:
        return this.visitRule(t);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
};
function rf(n) {
  return n instanceof pe || n instanceof ne || n instanceof W || n instanceof xe || n instanceof Se || n instanceof me || n instanceof G || n instanceof sn;
}
function zr(n, e = []) {
  return n instanceof ne || n instanceof W || n instanceof me ? true : n instanceof ge ? Ll(n.definition, (r) => zr(r, e)) : n instanceof ue && de(e, n) ? false : n instanceof Be ? (n instanceof ue && e.push(n), Oe(n.definition, (r) => zr(r, e))) : false;
}
function sf(n) {
  return n instanceof ge;
}
function Ge(n) {
  if (n instanceof ue)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Se)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof W)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
var Ti = class {
  walk(e, t = []) {
    $t(e.definition, (r, i) => {
      const s = Q2(e.definition, i + 1);
      if (r instanceof ue)
        this.walkProdRef(r, s, t);
      else if (r instanceof G)
        this.walkTerminal(r, s, t);
      else if (r instanceof pe)
        this.walkFlat(r, s, t);
      else if (r instanceof ne)
        this.walkOption(r, s, t);
      else if (r instanceof xe)
        this.walkAtLeastOne(r, s, t);
      else if (r instanceof Se)
        this.walkAtLeastOneSep(r, s, t);
      else if (r instanceof me)
        this.walkManySep(r, s, t);
      else if (r instanceof W)
        this.walkMany(r, s, t);
      else if (r instanceof ge)
        this.walkOr(r, s, t);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
  }
  walkFlat(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkOption(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, r) {
    const i = xa(e, t, r);
    this.walk(e, i);
  }
  walkMany(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkManySep(e, t, r) {
    const i = xa(e, t, r);
    this.walk(e, i);
  }
  walkOr(e, t, r) {
    const i = t.concat(r);
    $t(e.definition, (s) => {
      const a2 = new pe({ definition: [s] });
      this.walk(a2, i);
    });
  }
};
function xa(n, e, t) {
  return [
    new ne({
      definition: [
        new G({ terminalType: n.separator })
      ].concat(n.definition)
    })
  ].concat(e, t);
}
function tr(n) {
  if (n instanceof ue)
    return tr(n.referencedRule);
  if (n instanceof G)
    return lf(n);
  if (rf(n))
    return af(n);
  if (sf(n))
    return of(n);
  throw Error("non exhaustive match");
}
function af(n) {
  let e = [];
  const t = n.definition;
  let r = 0, i = t.length > r, s, a2 = true;
  for (; i && a2; )
    s = t[r], a2 = zr(s), e = e.concat(tr(s)), r = r + 1, i = t.length > r;
  return Vs(e);
}
function of(n) {
  const e = gn(n.definition, (t) => tr(t));
  return Vs(fn(e));
}
function lf(n) {
  return [n.terminalType];
}
var tu = "_~IN~_";
var uf = class extends Ti {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
    const i = df(e.referencedRule, e.idx) + this.topProd.name, s = t.concat(r), a2 = new pe({ definition: s }), o = tr(a2);
    this.follows[i] = o;
  }
};
function cf(n) {
  const e = {};
  return $t(n, (t) => {
    const r = new uf(t).startWalking();
    ke(e, r);
  }), e;
}
function df(n, e) {
  return n.name + e + tu;
}
var Lr = {};
var ff = new Wl();
function Ri(n) {
  const e = n.toString();
  if (Lr.hasOwnProperty(e))
    return Lr[e];
  {
    const t = ff.pattern(e);
    return Lr[e] = t, t;
  }
}
function hf() {
  Lr = {};
}
var nu2 = "Complement Sets are not supported for first char optimization";
var qr = `Unable to use "first char" lexer optimizations:
`;
function pf(n, e = false) {
  try {
    const t = Ri(n);
    return us(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === nu2)
      e && Ql(`${qr}	Unable to optimize: < ${n.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), ls(`${qr}
	Failed parsing: < ${n.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function us(n, e, t) {
  switch (n.type) {
    case "Disjunction":
      for (let i = 0; i < n.value.length; i++)
        us(n.value[i], e, t);
      break;
    case "Alternative":
      const r = n.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a2 = s;
        switch (a2.type) {
          case "Character":
            yr2(a2.value, e, t);
            break;
          case "Set":
            if (a2.complement === true)
              throw Error(nu2);
            $t(a2.value, (l) => {
              if (typeof l == "number")
                yr2(l, e, t);
              else {
                const u = l;
                if (t === true)
                  for (let c = u.from; c <= u.to; c++)
                    yr2(c, e, t);
                else {
                  for (let c = u.from; c <= u.to && c < Un; c++)
                    yr2(c, e, t);
                  if (u.to >= Un) {
                    const c = u.from >= Un ? u.from : Un, d = u.to, h = et(c), f = et(d);
                    for (let m = h; m <= f; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            us(a2.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a2.quantifier !== void 0 && a2.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a2.type === "Group" && cs(a2) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          a2.type !== "Group" && o === false
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return St(e);
}
function yr2(n, e, t) {
  const r = et(n);
  e[r] = r, t === true && mf(n, e);
}
function mf(n, e) {
  const t = String.fromCharCode(n), r = t.toUpperCase();
  if (r !== t) {
    const i = et(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = t.toLowerCase();
    if (i !== t) {
      const s = et(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function Sa(n, e) {
  return hn(n.value, (t) => {
    if (typeof t == "number")
      return de(e, t);
    {
      const r = t;
      return hn(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function cs(n) {
  const e = n.quantifier;
  return e && e.atLeast === 0 ? true : n.value ? Js(n.value) ? Oe(n.value, cs) : cs(n.value) : false;
}
var gf = class extends gi {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = false;
  }
  visitChildren(e) {
    if (this.found !== true) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    de(this.targetCharCodes, e.value) && (this.found = true);
  }
  visitSet(e) {
    e.complement ? Sa(e, this.targetCharCodes) === void 0 && (this.found = true) : Sa(e, this.targetCharCodes) !== void 0 && (this.found = true);
  }
};
function Qs(n, e) {
  if (e instanceof RegExp) {
    const t = Ri(e), r = new gf(n);
    return r.visit(t), r.found;
  } else
    return hn(e, (t) => de(n, t.charCodeAt(0))) !== void 0;
}
var Tt = "PATTERN";
var Gn = "defaultMode";
var Tr = "modes";
var ru = typeof new RegExp("(?:)").sticky == "boolean";
function yf(n, e) {
  e = dn(e, {
    useSticky: ru,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (E, R) => R()
  });
  const t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    Uf();
  });
  let r;
  t("Reject Lexer.NA", () => {
    r = hi(n, (E) => E[Tt] === fe.NA);
  });
  let i = false, s;
  t("Transform Patterns", () => {
    i = false, s = gn(r, (E) => {
      const R = E[Tt];
      if (Xe(R)) {
        const C = R.source;
        return C.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        C !== "^" && C !== "$" && C !== "." && !R.ignoreCase ? C : C.length === 2 && C[0] === "\\" && // not a meta character
        !de([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], C[1]) ? C[1] : e.useSticky ? Ia(R) : Ca(R);
      } else {
        if (ac(R))
          return i = true, { exec: R };
        if (typeof R == "object")
          return i = true, R;
        if (typeof R == "string") {
          if (R.length === 1)
            return R;
          {
            const C = R.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), F = new RegExp(C);
            return e.useSticky ? Ia(F) : Ca(F);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a2, o, l, u, c;
  t("misc mapping", () => {
    a2 = gn(r, (E) => E.tokenTypeIdx), o = gn(r, (E) => {
      const R = E.GROUP;
      if (R !== fe.SKIPPED) {
        if (he(R))
          return R;
        if (Et(R))
          return false;
        throw Error("non exhaustive match");
      }
    }), l = gn(r, (E) => {
      const R = E.LONGER_ALT;
      if (R)
        return Js(R) ? gn(R, (F) => Ta(r, F)) : [Ta(r, R)];
    }), u = gn(r, (E) => E.PUSH_MODE), c = gn(r, (E) => mn(E, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    const E = au(e.lineTerminatorCharacters);
    d = gn(r, (R) => false), e.positionTracking !== "onlyOffset" && (d = gn(r, (R) => mn(R, "LINE_BREAKS") ? !!R.LINE_BREAKS : su(R, E) === false && Qs(E, R.PATTERN)));
  });
  let h, f, m, g;
  t("Misc Mapping #2", () => {
    h = gn(r, iu), f = gn(s, Df), m = It(r, (E, R) => {
      const C = R.GROUP;
      return he(C) && C !== fe.SKIPPED && (E[C] = []), E;
    }, {}), g = gn(s, (E, R) => ({
      pattern: s[R],
      longerAlt: l[R],
      canLineTerminator: d[R],
      isCustom: h[R],
      short: f[R],
      group: o[R],
      push: u[R],
      pop: c[R],
      tokenTypeIdx: a2[R],
      tokenType: r[R]
    }));
  });
  let A = true, T = [];
  return e.safeMode || t("First Char Optimization", () => {
    T = It(r, (E, R, C) => {
      if (typeof R.PATTERN == "string") {
        const F = R.PATTERN.charCodeAt(0), ie = et(F);
        Di(E, ie, g[C]);
      } else if (Js(R.START_CHARS_HINT)) {
        let F;
        $t(R.START_CHARS_HINT, (ie) => {
          const Le = typeof ie == "string" ? ie.charCodeAt(0) : ie, ye = et(Le);
          F !== ye && (F = ye, Di(E, ye, g[C]));
        });
      } else if (Xe(R.PATTERN))
        if (R.PATTERN.unicode)
          A = false, e.ensureOptimizations && ls(`${qr}	Unable to analyze < ${R.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const F = pf(R.PATTERN, e.ensureOptimizations);
          Iu(F) && (A = false), $t(F, (ie) => {
            Di(E, ie, g[C]);
          });
        }
      else
        e.ensureOptimizations && ls(`${qr}	TokenType: <${R.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), A = false;
      return E;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: T,
    hasCustom: i,
    canBeOptimized: A
  };
}
function Tf(n, e) {
  let t = [];
  const r = vf(n);
  t = t.concat(r.errors);
  const i = Af(r.valid), s = i.valid;
  return t = t.concat(i.errors), t = t.concat(Rf(s)), t = t.concat(Nf(s)), t = t.concat(wf(s, e)), t = t.concat(Lf(s)), t;
}
function Rf(n) {
  let e = [];
  const t = _t(n, (r) => Xe(r[Tt]));
  return e = e.concat(kf(t)), e = e.concat(Sf(t)), e = e.concat(Cf(t)), e = e.concat(If(t)), e = e.concat($f(t)), e;
}
function vf(n) {
  const e = _t(n, (i) => !mn(i, Tt)), t = gn(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: H.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = fi(n, e);
  return { errors: t, valid: r };
}
function Af(n) {
  const e = _t(n, (i) => {
    const s = i[Tt];
    return !Xe(s) && !ac(s) && !mn(s, "exec") && !he(s);
  }), t = gn(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: H.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = fi(n, e);
  return { errors: t, valid: r };
}
var Ef = /[^\\][$]/;
function kf(n) {
  class e extends gi {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(s) {
      this.found = true;
    }
  }
  const t = _t(n, (i) => {
    const s = i.PATTERN;
    try {
      const a2 = Ri(s), o = new e();
      return o.visit(a2), o.found;
    } catch {
      return Ef.test(s.source);
    }
  });
  return gn(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function $f(n) {
  const e = _t(n, (r) => r.PATTERN.test(""));
  return gn(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: H.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
var xf = /[^\\[][\^]|^\^/;
function Sf(n) {
  class e extends gi {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(s) {
      this.found = true;
    }
  }
  const t = _t(n, (i) => {
    const s = i.PATTERN;
    try {
      const a2 = Ri(s), o = new e();
      return o.visit(a2), o.found;
    } catch {
      return xf.test(s.source);
    }
  });
  return gn(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function Cf(n) {
  const e = _t(n, (r) => {
    const i = r[Tt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return gn(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: H.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function If(n) {
  const e = [];
  let t = gn(n, (s) => It(n, (a2, o) => (s.PATTERN.source === o.PATTERN.source && !de(e, o) && o.PATTERN !== fe.NA && (e.push(o), a2.push(o)), a2), []));
  t = Qn(t);
  const r = _t(t, (s) => s.length > 1);
  return gn(r, (s) => {
    const a2 = gn(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Pe(s).PATTERN}<-has been used in all of the following Token Types: ${a2.join(", ")} <-`,
      type: H.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function Nf(n) {
  const e = _t(n, (r) => {
    if (!mn(r, "GROUP"))
      return false;
    const i = r.GROUP;
    return i !== fe.SKIPPED && i !== fe.NA && !he(i);
  });
  return gn(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: H.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function wf(n, e) {
  const t = _t(n, (i) => i.PUSH_MODE !== void 0 && !de(e, i.PUSH_MODE));
  return gn(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: H.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function Lf(n) {
  const e = [], t = It(n, (r, i, s) => {
    const a2 = i.PATTERN;
    return a2 === fe.NA || (he(a2) ? r.push({ str: a2, idx: s, tokenType: i }) : Xe(a2) && bf(a2) && r.push({ str: a2.source, idx: s, tokenType: i })), r;
  }, []);
  return $t(n, (r, i) => {
    $t(t, ({ str: s, idx: a2, tokenType: o }) => {
      if (i < a2 && _f(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: H.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function _f(n, e) {
  if (Xe(e)) {
    const t = e.exec(n);
    return t !== null && t.index === 0;
  } else {
    if (ac(e))
      return e(n, 0, [], {});
    if (mn(e, "exec"))
      return e.exec(n, 0, [], {});
    if (typeof e == "string")
      return e === n;
    throw Error("non exhaustive match");
  }
}
function bf(n) {
  return hn([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (t) => n.source.indexOf(t) !== -1) === void 0;
}
function Ca(n) {
  const e = n.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${n.source})`, e);
}
function Ia(n) {
  const e = n.ignoreCase ? "iy" : "y";
  return new RegExp(`${n.source}`, e);
}
function Of(n, e, t) {
  const r = [];
  return mn(n, Gn) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Gn + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), mn(n, Tr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Tr + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), mn(n, Tr) && mn(n, Gn) && !mn(n.modes, n.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Gn}: <${n.defaultMode}>which does not exist
`,
    type: H.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), mn(n, Tr) && $t(n.modes, (i, s) => {
    $t(i, (a2, o) => {
      if (Et(a2))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: H.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (mn(a2, "LONGER_ALT")) {
        const l = Js(a2.LONGER_ALT) ? a2.LONGER_ALT : [a2.LONGER_ALT];
        $t(l, (u) => {
          !Et(u) && !de(i, u) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a2.name}> outside of mode <${s}>
`,
            type: H.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function Pf(n, e, t) {
  const r = [];
  let i = false;
  const s = Qn(fn(St(n.modes))), a2 = hi(s, (l) => l[Tt] === fe.NA), o = au(t);
  return e && $t(a2, (l) => {
    const u = su(l, o);
    if (u !== false) {
      const d = {
        message: Gf(l, u),
        type: u.issue,
        tokenType: l
      };
      r.push(d);
    } else
      mn(l, "LINE_BREAKS") ? l.LINE_BREAKS === true && (i = true) : Qs(o, l.PATTERN) && (i = true);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: H.NO_LINE_BREAKS_FLAGS
  }), r;
}
function Mf(n) {
  const e = {}, t = $(n);
  return $t(t, (r) => {
    const i = n[r];
    if (Js(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function iu(n) {
  const e = n.PATTERN;
  if (Xe(e))
    return false;
  if (ac(e))
    return true;
  if (mn(e, "exec"))
    return true;
  if (he(e))
    return false;
  throw Error("non exhaustive match");
}
function Df(n) {
  return he(n) && n.length === 1 ? n.charCodeAt(0) : false;
}
var Ff = {
  // implements /\n|\r\n?/g.test
  test: function(n) {
    const e = n.length;
    for (let t = this.lastIndex; t < e; t++) {
      const r = n.charCodeAt(t);
      if (r === 10)
        return this.lastIndex = t + 1, true;
      if (r === 13)
        return n.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, true;
    }
    return false;
  },
  lastIndex: 0
};
function su(n, e) {
  if (mn(n, "LINE_BREAKS"))
    return false;
  if (Xe(n.PATTERN)) {
    try {
      Qs(e, n.PATTERN);
    } catch (t) {
      return {
        issue: H.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return false;
  } else {
    if (he(n.PATTERN))
      return false;
    if (iu(n))
      return { issue: H.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Gf(n, e) {
  if (e.issue === H.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${n.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === H.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${n.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function au(n) {
  return gn(n, (t) => he(t) ? t.charCodeAt(0) : t);
}
function Di(n, e, t) {
  n[e] === void 0 ? n[e] = [t] : n[e].push(t);
}
var Un = 256;
var _r = [];
function et(n) {
  return n < Un ? n : _r[n];
}
function Uf() {
  if (Iu(_r)) {
    _r = new Array(65536);
    for (let n = 0; n < 65536; n++)
      _r[n] = n > 255 ? 255 + ~~(n / 255) : n;
  }
}
function nr(n, e) {
  const t = n.tokenTypeIdx;
  return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
function Yr(n, e) {
  return n.tokenTypeIdx === e.tokenTypeIdx;
}
var Na = 1;
var ou = {};
function rr(n) {
  const e = Bf(n);
  Vf(e), Wf(e), Kf(e), $t(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
function Bf(n) {
  let e = a(n), t = n, r = true;
  for (; r; ) {
    t = Qn(fn(gn(t, (s) => s.CATEGORIES)));
    const i = fi(t, e);
    e = e.concat(i), Iu(i) ? r = false : t = i;
  }
  return e;
}
function Vf(n) {
  $t(n, (e) => {
    uu(e) || (ou[Na] = e, e.tokenTypeIdx = Na++), wa(e) && !Js(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), wa(e) || (e.CATEGORIES = []), Hf(e) || (e.categoryMatches = []), jf(e) || (e.categoryMatchesMap = {});
  });
}
function Kf(n) {
  $t(n, (e) => {
    e.categoryMatches = [], $t(e.categoryMatchesMap, (t, r) => {
      e.categoryMatches.push(ou[r].tokenTypeIdx);
    });
  });
}
function Wf(n) {
  $t(n, (e) => {
    lu([], e);
  });
}
function lu(n, e) {
  $t(n, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = true;
  }), $t(e.CATEGORIES, (t) => {
    const r = n.concat(e);
    de(r, t) || lu(r, t);
  });
}
function uu(n) {
  return mn(n, "tokenTypeIdx");
}
function wa(n) {
  return mn(n, "CATEGORIES");
}
function Hf(n) {
  return mn(n, "categoryMatches");
}
function jf(n) {
  return mn(n, "categoryMatchesMap");
}
function zf(n) {
  return mn(n, "tokenTypeIdx");
}
var ds = {
  buildUnableToPopLexerModeMessage(n) {
    return `Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(n, e, t, r, i) {
    return `unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var H;
(function(n) {
  n[n.MISSING_PATTERN = 0] = "MISSING_PATTERN", n[n.INVALID_PATTERN = 1] = "INVALID_PATTERN", n[n.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", n[n.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", n[n.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", n[n.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", n[n.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", n[n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", n[n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", n[n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", n[n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", n[n.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", n[n.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", n[n.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", n[n.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", n[n.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", n[n.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", n[n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(H || (H = {}));
var Bn = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: ds,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(Bn);
var fe = class {
  constructor(e, t = Bn) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const a2 = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a2}--> <${i}>`);
        const { time: o, value: l } = Zl(s), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a2}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof t == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = ke({}, Bn, t);
    const r = this.config.traceInitPerf;
    r === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Bn.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = Ff;
        else if (this.config.lineTerminatorCharacters === Bn.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), Js(e) ? i = {
          modes: { defaultMode: a(e) },
          defaultMode: Gn
        } : (s = false, i = a(e));
      }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Of(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Pf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, $t(i.modes, (o, l) => {
        i.modes[l] = hi(o, (u) => Et(u));
      });
      const a2 = $(i.modes);
      if ($t(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Tf(o, a2));
          }), Iu(this.lexerDefinitionErrors)) {
            rr(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = yf(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = ke({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !Iu(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = gn(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      $t(this.lexerDefinitionWarning, (o) => {
        Ql(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (ru ? (this.chopInput = _g, this.match = this.matchWithTest) : (this.updateLastIndex = Xn, this.match = this.matchWithExec), s && (this.handleModes = Xn), this.trackStartLines === false && (this.computeNewColumn = _g), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = Xn), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = It(this.canModeBeOptimized, (l, u, c) => (u === false && l.push(c), l), []);
        if (t.ensureOptimizations && !Iu(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        hf();
      }), this.TRACE_INIT("toFastProperties", () => {
        eu(this);
      });
    });
  }
  tokenize(e, t = this.defaultMode) {
    if (!Iu(this.lexerDefinitionErrors)) {
      const i = gn(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, t) {
    let r, i, s, a2, o, l, u, c, d, h, f, m, g, A, T;
    const E = e, R = E.length;
    let C = 0, F = 0;
    const ie = this.hasCustom ? 0 : Math.floor(e.length / 10), Le = new Array(ie), ye = [];
    let Fe = this.trackStartLines ? 1 : void 0, Ce = this.trackStartLines ? 1 : void 0;
    const k = Mf(this.emptyGroups), y = this.trackStartLines, S = this.config.lineTerminatorsPattern;
    let x = 0, b = [], _ = [];
    const L = [], Te = [];
    Object.freeze(Te);
    let q;
    function K() {
      return b;
    }
    function ct(se) {
      const Ie2 = et(se), St2 = _[Ie2];
      return St2 === void 0 ? Te : St2;
    }
    const pc = (se) => {
      if (L.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      se.tokenType.PUSH_MODE === void 0) {
        const Ie2 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(se);
        ye.push({
          offset: se.startOffset,
          line: se.startLine,
          column: se.startColumn,
          length: se.image.length,
          message: Ie2
        });
      } else {
        L.pop();
        const Ie2 = un(L);
        b = this.patternIdxToConfig[Ie2], _ = this.charCodeToPatternIdxToConfig[Ie2], x = b.length;
        const St2 = this.canModeBeOptimized[Ie2] && this.config.safeMode === false;
        _ && St2 ? q = ct : q = K;
      }
    };
    function fa(se) {
      L.push(se), _ = this.charCodeToPatternIdxToConfig[se], b = this.patternIdxToConfig[se], x = b.length, x = b.length;
      const Ie2 = this.canModeBeOptimized[se] && this.config.safeMode === false;
      _ && Ie2 ? q = ct : q = K;
    }
    fa.call(this, t);
    let _e;
    const ha = this.config.recoveryEnabled;
    for (; C < R; ) {
      l = null;
      const se = E.charCodeAt(C), Ie2 = q(se), St2 = Ie2.length;
      for (r = 0; r < St2; r++) {
        _e = Ie2[r];
        const Re = _e.pattern;
        u = null;
        const Ve = _e.short;
        if (Ve !== false ? se === Ve && (l = Re) : _e.isCustom === true ? (T = Re.exec(E, C, Le, k), T !== null ? (l = T[0], T.payload !== void 0 && (u = T.payload)) : l = null) : (this.updateLastIndex(Re, C), l = this.match(Re, e, C)), l !== null) {
          if (o = _e.longerAlt, o !== void 0) {
            const Qe = o.length;
            for (s = 0; s < Qe; s++) {
              const Ke = b[o[s]], dt2 = Ke.pattern;
              if (c = null, Ke.isCustom === true ? (T = dt2.exec(E, C, Le, k), T !== null ? (a2 = T[0], T.payload !== void 0 && (c = T.payload)) : a2 = null) : (this.updateLastIndex(dt2, C), a2 = this.match(dt2, e, C)), a2 && a2.length > l.length) {
                l = a2, u = c, _e = Ke;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, h = _e.group, h !== void 0 && (f = _e.tokenTypeIdx, m = this.createTokenInstance(l, C, f, _e.tokenType, Fe, Ce, d), this.handlePayload(m, u), h === false ? F = this.addToken(Le, F, m) : k[h].push(m)), e = this.chopInput(e, d), C = C + d, Ce = this.computeNewColumn(Ce, d), y === true && _e.canLineTerminator === true) {
          let Re = 0, Ve, Qe;
          S.lastIndex = 0;
          do
            Ve = S.test(l), Ve === true && (Qe = S.lastIndex - 1, Re++);
          while (Ve === true);
          Re !== 0 && (Fe = Fe + Re, Ce = d - Qe, this.updateTokenEndLineColumnLocation(m, h, Qe, Re, Fe, Ce, d));
        }
        this.handleModes(_e, pc, fa, m);
      } else {
        const Re = C, Ve = Fe, Qe = Ce;
        let Ke = ha === false;
        for (; Ke === false && C < R; )
          for (e = this.chopInput(e, 1), C++, i = 0; i < x; i++) {
            const dt2 = b[i], Ii = dt2.pattern, pa = dt2.short;
            if (pa !== false ? E.charCodeAt(C) === pa && (Ke = true) : dt2.isCustom === true ? Ke = Ii.exec(E, C, Le, k) !== null : (this.updateLastIndex(Ii, C), Ke = Ii.exec(e) !== null), Ke === true)
              break;
          }
        if (g = C - Re, Ce = this.computeNewColumn(Ce, g), A = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E, Re, g, Ve, Qe), ye.push({
          offset: Re,
          line: Ve,
          column: Qe,
          length: g,
          message: A
        }), ha === false)
          break;
      }
    }
    return this.hasCustom || (Le.length = F), {
      tokens: Le,
      groups: k,
      errors: ye
    };
  }
  handleModes(e, t, r, i) {
    if (e.pop === true) {
      const s = e.push;
      t(i), s !== void 0 && r.call(this, s);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, t, r, i, s, a2, o) {
    let l, u;
    t !== void 0 && (l = r === o - 1, u = l ? -1 : 0, i === 1 && l === true || (e.endLine = s + u, e.endColumn = a2 - 1 + -u));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, r, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, r, i, s, a2) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: a2,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, t, r, i, s, a2, o) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a2,
      endColumn: a2 + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, r) {
    return e.push(r), t;
  }
  addTokenUsingMemberAccess(e, t, r) {
    return e[t] = r, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, r) {
    return e.test(t) === true ? t.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    const r = e.exec(t);
    return r !== null ? r[0] : null;
  }
};
fe.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
fe.NA = /NOT_APPLICABLE/;
function Lt(n) {
  return cu(n) ? n.LABEL : n.name;
}
function cu(n) {
  return he(n.LABEL) && n.LABEL !== "";
}
var qf = "parent";
var La2 = "categories";
var _a = "label";
var ba = "group";
var Oa = "push_mode";
var Pa = "pop_mode";
var Ma = "longer_alt";
var Da = "line_breaks";
var Fa = "start_chars_hint";
function du(n) {
  return Yf(n);
}
function Yf(n) {
  const e = n.pattern, t = {};
  if (t.name = n.name, Et(e) || (t.PATTERN = e), mn(n, qf))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return mn(n, La2) && (t.CATEGORIES = n[La2]), rr([t]), mn(n, _a) && (t.LABEL = n[_a]), mn(n, ba) && (t.GROUP = n[ba]), mn(n, Pa) && (t.POP_MODE = n[Pa]), mn(n, Oa) && (t.PUSH_MODE = n[Oa]), mn(n, Ma) && (t.LONGER_ALT = n[Ma]), mn(n, Da) && (t.LINE_BREAKS = n[Da]), mn(n, Fa) && (t.START_CHARS_HINT = n[Fa]), t;
}
var tt = du({ name: "EOF", pattern: fe.NA });
rr([tt]);
function Zs(n, e, t, r, i, s, a2, o) {
  return {
    image: e,
    startOffset: t,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a2,
    endColumn: o,
    tokenTypeIdx: n.tokenTypeIdx,
    tokenType: n
  };
}
function fu(n, e) {
  return nr(n, e);
}
var Nt = {
  buildMismatchTokenMessage({ expected: n, actual: e, previous: t, ruleName: r }) {
    return `Expecting ${cu(n) ? `--> ${Lt(n)} <--` : `token of type --> ${n.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: n, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + n.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: n, actual: e, previous: t, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Pe(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = It(n, (h, f) => h.concat(f), []), u = gn(l, (h) => `[${gn(h, (f) => Lt(f)).join(", ")}]`), d = `one of these possible Token sequences:
${gn(u, (h, f) => `  ${f + 1}. ${h}`).join(`
`)}`;
      return s + d + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: n, actual: e, customUserDescription: t, ruleName: r }) {
    const i = "Expecting: ", a2 = `
but found: '` + Pe(e).image + "'";
    if (t)
      return i + t + a2;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${gn(n, (u) => `[${gn(u, (c) => Lt(c)).join(",")}]`).join(" ,")}>`;
      return i + l + a2;
    }
  }
};
Object.freeze(Nt);
var Xf = {
  buildRuleNotFoundError(n, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + n.name + "<-";
  }
};
var pt = {
  buildDuplicateFoundError(n, e) {
    function t(c) {
      return c instanceof G ? c.terminalType.name : c instanceof ue ? c.nonTerminalName : "";
    }
    const r = n.name, i = Pe(e), s = i.idx, a2 = Ge(i), o = t(i), l = s > 0;
    let u = `->${a2}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(n) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(n) {
    const e = gn(n.prefixPath, (i) => Lt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    return `Ambiguous alternatives: <${n.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(n) {
    const e = gn(n.prefixPath, (i) => Lt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(n) {
    let e = Ge(n.repetition);
    return n.repetition.idx !== 0 && (e += n.repetition.idx), `The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(n) {
    return "deprecated";
  },
  buildEmptyAlternationError(n) {
    return `Ambiguous empty alternative: <${n.emptyChoiceIdx + 1}> in <OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(n) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(n) {
    const e = n.topLevelRule.name, t = gn(n.leftRecursionPath, (s) => s.name), r = `${e} --> ${t.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(n) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(n) {
    let e;
    return n.topLevelRule instanceof sn ? e = n.topLevelRule.name : e = n.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`;
  }
};
function Jf(n, e) {
  const t = new Qf(n, e);
  return t.resolveRefs(), t.errors;
}
var Qf = class extends an {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    $t(St(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const t = this.nameToTopRule[e.nonTerminalName];
    if (t)
      e.referencedRule = t;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
};
var Zf = class extends Ti {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = a(this.path.ruleStack).reverse(), this.occurrenceStack = a(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, t = []) {
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = t.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    Iu(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
};
var eh = class extends Zf {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = t.concat(r), s = new pe({ definition: i });
      this.possibleTokTypes = tr(s), this.found = true;
    }
  }
};
var vi = class extends Ti {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
};
var th = class extends vi {
  walkMany(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, t, r);
  }
};
var Ga = class extends vi {
  walkManySep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, t, r);
  }
};
var nh = class extends vi {
  walkAtLeastOne(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, t, r);
  }
};
var Ua = class extends vi {
  walkAtLeastOneSep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, t, r);
  }
};
function fs(n, e, t = []) {
  t = a(t);
  let r = [], i = 0;
  function s(o) {
    return o.concat(Q2(n, i + 1));
  }
  function a2(o) {
    const l = fs(s(o), e, t);
    return r.concat(l);
  }
  for (; t.length < e && i < n.length; ) {
    const o = n[i];
    if (o instanceof pe)
      return a2(o.definition);
    if (o instanceof ue)
      return a2(o.definition);
    if (o instanceof ne)
      r = a2(o.definition);
    else if (o instanceof xe) {
      const l = o.definition.concat([
        new W({
          definition: o.definition
        })
      ]);
      return a2(l);
    } else if (o instanceof Se) {
      const l = [
        new pe({ definition: o.definition }),
        new W({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a2(l);
    } else if (o instanceof me) {
      const l = o.definition.concat([
        new W({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a2(l);
    } else if (o instanceof W) {
      const l = o.definition.concat([
        new W({
          definition: o.definition
        })
      ]);
      r = a2(l);
    } else {
      if (o instanceof ge)
        return $t(o.definition, (l) => {
          Iu(l.definition) === false && (r = a2(l.definition));
        }), r;
      if (o instanceof G)
        t.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: t,
    suffixDef: Q2(n, i)
  }), r;
}
function hu(n, e, t, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a2 = "EXIT_ALTERNATIVE";
  let o = false;
  const l = e.length, u = l - r - 1, c = [], d = [];
  for (d.push({
    idx: -1,
    def: n,
    ruleStack: [],
    occurrenceStack: []
  }); !Iu(d); ) {
    const h = d.pop();
    if (h === a2) {
      o && un(d).idx <= u && d.pop();
      continue;
    }
    const f = h.def, m = h.idx, g = h.ruleStack, A = h.occurrenceStack;
    if (Iu(f))
      continue;
    const T = f[0];
    if (T === i) {
      const E = {
        idx: m,
        def: Q2(f),
        ruleStack: qn(g),
        occurrenceStack: qn(A)
      };
      d.push(E);
    } else if (T instanceof G)
      if (m < l - 1) {
        const E = m + 1, R = e[E];
        if (t(R, T.terminalType)) {
          const C = {
            idx: E,
            def: Q2(f),
            ruleStack: g,
            occurrenceStack: A
          };
          d.push(C);
        }
      } else if (m === l - 1)
        c.push({
          nextTokenType: T.terminalType,
          nextTokenOccurrence: T.idx,
          ruleStack: g,
          occurrenceStack: A
        }), o = true;
      else
        throw Error("non exhaustive match");
    else if (T instanceof ue) {
      const E = a(g);
      E.push(T.nonTerminalName);
      const R = a(A);
      R.push(T.idx);
      const C = {
        idx: m,
        def: T.definition.concat(s, Q2(f)),
        ruleStack: E,
        occurrenceStack: R
      };
      d.push(C);
    } else if (T instanceof ne) {
      const E = {
        idx: m,
        def: Q2(f),
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(E), d.push(a2);
      const R = {
        idx: m,
        def: T.definition.concat(Q2(f)),
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(R);
    } else if (T instanceof xe) {
      const E = new W({
        definition: T.definition,
        idx: T.idx
      }), R = T.definition.concat([E], Q2(f)), C = {
        idx: m,
        def: R,
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(C);
    } else if (T instanceof Se) {
      const E = new G({
        terminalType: T.separator
      }), R = new W({
        definition: [E].concat(T.definition),
        idx: T.idx
      }), C = T.definition.concat([R], Q2(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(F);
    } else if (T instanceof me) {
      const E = {
        idx: m,
        def: Q2(f),
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(E), d.push(a2);
      const R = new G({
        terminalType: T.separator
      }), C = new W({
        definition: [R].concat(T.definition),
        idx: T.idx
      }), F = T.definition.concat([C], Q2(f)), ie = {
        idx: m,
        def: F,
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(ie);
    } else if (T instanceof W) {
      const E = {
        idx: m,
        def: Q2(f),
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(E), d.push(a2);
      const R = new W({
        definition: T.definition,
        idx: T.idx
      }), C = T.definition.concat([R], Q2(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: A
      };
      d.push(F);
    } else if (T instanceof ge)
      for (let E = T.definition.length - 1; E >= 0; E--) {
        const R = T.definition[E], C = {
          idx: m,
          def: R.definition.concat(Q2(f)),
          ruleStack: g,
          occurrenceStack: A
        };
        d.push(C), d.push(a2);
      }
    else if (T instanceof pe)
      d.push({
        idx: m,
        def: T.definition.concat(Q2(f)),
        ruleStack: g,
        occurrenceStack: A
      });
    else if (T instanceof sn)
      d.push(rh(T, m, g, A));
    else
      throw Error("non exhaustive match");
  }
  return c;
}
function rh(n, e, t, r) {
  const i = a(t);
  i.push(n.name);
  const s = a(r);
  return s.push(1), {
    idx: e,
    def: n.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var B;
(function(n) {
  n[n.OPTION = 0] = "OPTION", n[n.REPETITION = 1] = "REPETITION", n[n.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", n[n.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", n[n.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", n[n.ALTERNATION = 5] = "ALTERNATION";
})(B || (B = {}));
function ea(n) {
  if (n instanceof ne || n === "Option")
    return B.OPTION;
  if (n instanceof W || n === "Repetition")
    return B.REPETITION;
  if (n instanceof xe || n === "RepetitionMandatory")
    return B.REPETITION_MANDATORY;
  if (n instanceof Se || n === "RepetitionMandatoryWithSeparator")
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (n instanceof me || n === "RepetitionWithSeparator")
    return B.REPETITION_WITH_SEPARATOR;
  if (n instanceof ge || n === "Alternation")
    return B.ALTERNATION;
  throw Error("non exhaustive match");
}
function Ba(n) {
  const { occurrence: e, rule: t, prodType: r, maxLookahead: i } = n, s = ea(r);
  return s === B.ALTERNATION ? Ai(e, t, i) : Ei(e, t, s, i);
}
function ih(n, e, t, r, i, s) {
  const a2 = Ai(n, e, t), o = gu(a2) ? Yr : nr;
  return s(a2, r, o, i);
}
function sh(n, e, t, r, i, s) {
  const a2 = Ei(n, e, i, t), o = gu(a2) ? Yr : nr;
  return s(a2[0], o, r);
}
function ah(n, e, t, r) {
  const i = n.length, s = Oe(n, (a2) => Oe(a2, (o) => o.length === 1));
  if (e)
    return function(a2) {
      const o = gn(a2, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const u = n[l], c = u.length, d = o[l];
        if (!(d !== void 0 && d.call(this) === false))
          e: for (let h = 0; h < c; h++) {
            const f = u[h], m = f.length;
            for (let g = 0; g < m; g++) {
              const A = this.LA(g + 1);
              if (t(A, f[g]) === false)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a2 = gn(n, (l) => fn(l)), o = It(a2, (l, u, c) => ($t(u, (d) => {
      mn(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = c), $t(d.categoryMatches, (h) => {
        mn(l, h) || (l[h] = c);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a2 = 0; a2 < i; a2++) {
        const o = n[a2], l = o.length;
        e: for (let u = 0; u < l; u++) {
          const c = o[u], d = c.length;
          for (let h = 0; h < d; h++) {
            const f = this.LA(h + 1);
            if (t(f, c[h]) === false)
              continue e;
          }
          return a2;
        }
      }
    };
}
function oh(n, e, t) {
  const r = Oe(n, (s) => s.length === 1), i = n.length;
  if (r && !t) {
    const s = fn(n);
    if (s.length === 1 && Iu(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a2 = It(s, (o, l, u) => (o[l.tokenTypeIdx] = true, $t(l.categoryMatches, (c) => {
        o[c] = true;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a2[o.tokenTypeIdx] === true;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a2 = n[s], o = a2.length;
        for (let l = 0; l < o; l++) {
          const u = this.LA(l + 1);
          if (e(u, a2[l]) === false)
            continue e;
        }
        return true;
      }
      return false;
    };
}
var lh = class extends Ti {
  constructor(e, t, r) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = r.concat(i), true) : false;
  }
  walkOption(e, t, r) {
    this.checkIsTarget(e, B.OPTION, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOne(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOneSep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
  walkMany(e, t, r) {
    this.checkIsTarget(e, B.REPETITION, t, r) || super.walkOption(e, t, r);
  }
  walkManySep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
};
var pu = class extends an {
  constructor(e, t, r) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, B.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, B.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, B.ALTERNATION);
  }
};
function Va(n) {
  const e = new Array(n);
  for (let t = 0; t < n; t++)
    e[t] = [];
  return e;
}
function Fi(n) {
  let e = [""];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = [];
    for (let s = 0; s < e.length; s++) {
      const a2 = e[s];
      i.push(a2 + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a2 + l);
      }
    }
    e = i;
  }
  return e;
}
function uh(n, e, t) {
  for (let r = 0; r < n.length; r++) {
    if (r === t)
      continue;
    const i = n[r];
    for (let s = 0; s < e.length; s++) {
      const a2 = e[s];
      if (i[a2] === true)
        return false;
    }
  }
  return true;
}
function mu(n, e) {
  const t = gn(n, (a2) => fs([a2], 1)), r = Va(t.length), i = gn(t, (a2) => {
    const o = {};
    return $t(a2, (l) => {
      const u = Fi(l.partialPath);
      $t(u, (c) => {
        o[c] = true;
      });
    }), o;
  });
  let s = t;
  for (let a2 = 1; a2 <= e; a2++) {
    const o = s;
    s = Va(o.length);
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      for (let c = 0; c < u.length; c++) {
        const d = u[c].partialPath, h = u[c].suffixDef, f = Fi(d);
        if (uh(i, f, l) || Iu(h) || d.length === e) {
          const g = r[l];
          if (hs(g, d) === false) {
            g.push(d);
            for (let A = 0; A < f.length; A++) {
              const T = f[A];
              i[l][T] = true;
            }
          }
        } else {
          const g = fs(h, a2 + 1, d);
          s[l] = s[l].concat(g), $t(g, (A) => {
            const T = Fi(A.partialPath);
            $t(T, (E) => {
              i[l][E] = true;
            });
          });
        }
      }
    }
  }
  return r;
}
function Ai(n, e, t, r) {
  const i = new pu(n, B.ALTERNATION, r);
  return e.accept(i), mu(i.result, t);
}
function Ei(n, e, t, r) {
  const i = new pu(n, t);
  e.accept(i);
  const s = i.result, o = new lh(e, n, t).startWalking(), l = new pe({ definition: s }), u = new pe({ definition: o });
  return mu([l, u], r);
}
function hs(n, e) {
  e: for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (r.length === e.length) {
      for (let i = 0; i < r.length; i++) {
        const s = e[i], a2 = r[i];
        if ((s === a2 || a2.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === false)
          continue e;
      }
      return true;
    }
  }
  return false;
}
function ch(n, e) {
  return n.length < e.length && Oe(n, (t, r) => {
    const i = e[r];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
function gu(n) {
  return Oe(n, (e) => Oe(e, (t) => Oe(t, (r) => Iu(r.categoryMatches))));
}
function dh(n) {
  const e = n.lookaheadStrategy.validate({
    rules: n.rules,
    tokenTypes: n.tokenTypes,
    grammarName: n.grammarName
  });
  return gn(e, (t) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
function fh(n, e, t, r) {
  const i = Ee(n, (l) => hh(l, t)), s = xh(n, e, t), a2 = Ee(n, (l) => Ah(l, t)), o = Ee(n, (l) => gh(l, n, r, t));
  return i.concat(s, a2, o);
}
function hh(n, e) {
  const t = new mh();
  n.accept(t);
  const r = t.allProductions, i = Wc(r, ph), s = Me(i, (o) => o.length > 1);
  return gn(St(s), (o) => {
    const l = Pe(o), u = e.buildDuplicateFoundError(n, o), c = Ge(l), d = {
      message: u,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: n.name,
      dslName: c,
      occurrence: l.idx
    }, h = yu(l);
    return h && (d.parameter = h), d;
  });
}
function ph(n) {
  return `${Ge(n)}_#_${n.idx}_#_${yu(n)}`;
}
function yu(n) {
  return n instanceof G ? n.terminalType.name : n instanceof ue ? n.nonTerminalName : "";
}
var mh = class extends an {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
};
function gh(n, e, t, r) {
  const i = [];
  if (It(e, (a2, o) => o.name === n.name ? a2 + 1 : a2, 0) > 1) {
    const a2 = r.buildDuplicateRuleNameError({
      topLevelRule: n,
      grammarName: t
    });
    i.push({
      message: a2,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: n.name
    });
  }
  return i;
}
function yh(n, e, t) {
  const r = [];
  let i;
  return de(e, n) || (i = `Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: n
  })), r;
}
function Tu(n, e, t, r = []) {
  const i = [], s = br(e.definition);
  if (Iu(s))
    return [];
  {
    const a2 = n.name;
    de(s, n) && i.push({
      message: t.buildLeftRecursionError({
        topLevelRule: n,
        leftRecursionPath: r
      }),
      type: ce.LEFT_RECURSION,
      ruleName: a2
    });
    const l = fi(s, r.concat([n])), u = Ee(l, (c) => {
      const d = a(r);
      return d.push(c), Tu(n, c, t, d);
    });
    return i.concat(u);
  }
}
function br(n) {
  let e = [];
  if (Iu(n))
    return e;
  const t = Pe(n);
  if (t instanceof ue)
    e.push(t.referencedRule);
  else if (t instanceof pe || t instanceof ne || t instanceof xe || t instanceof Se || t instanceof me || t instanceof W)
    e = e.concat(br(t.definition));
  else if (t instanceof ge)
    e = fn(gn(t.definition, (s) => br(s.definition)));
  else if (!(t instanceof G)) throw Error("non exhaustive match");
  const r = zr(t), i = n.length > 1;
  if (r && i) {
    const s = Q2(n);
    return e.concat(br(s));
  } else
    return e;
}
var ta = class extends an {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
};
function Th(n, e) {
  const t = new ta();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => {
    const a2 = qn(s.definition);
    return Ee(a2, (o, l) => {
      const u = hu([o], [], nr, 1);
      return Iu(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: n,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: n.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function Rh(n, e, t) {
  const r = new ta();
  n.accept(r);
  let i = r.alternations;
  return i = hi(i, (a2) => a2.ignoreAmbiguities === true), Ee(i, (a2) => {
    const o = a2.idx, l = a2.maxLookahead || e, u = Ai(o, n, l, a2), c = kh(u, a2, n, t), d = $h(u, a2, n, t);
    return c.concat(d);
  });
}
var vh = class extends an {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
};
function Ah(n, e) {
  const t = new ta();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: n,
        alternation: s
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: n.name,
      occurrence: s.idx
    }
  ] : []);
}
function Eh(n, e, t) {
  const r = [];
  return $t(n, (i) => {
    const s = new vh();
    i.accept(s);
    const a2 = s.allProductions;
    $t(a2, (o) => {
      const l = ea(o), u = o.maxLookahead || e, c = o.idx, h = Ei(c, i, l, u)[0];
      if (Iu(fn(h))) {
        const f = t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: f,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function kh(n, e, t, r) {
  const i = [], s = It(n, (o, l, u) => (e.definition[u].ignoreAmbiguities === true || $t(l, (c) => {
    const d = [u];
    $t(n, (h, f) => {
      u !== f && hs(h, c) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[f].ignoreAmbiguities !== true && d.push(f);
    }), d.length > 1 && !hs(i, c) && (i.push(c), o.push({
      alts: d,
      path: c
    }));
  }), o), []);
  return gn(s, (o) => {
    const l = gn(o.alts, (c) => c + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function $h(n, e, t, r) {
  const i = It(n, (a2, o, l) => {
    const u = gn(o, (c) => ({ idx: l, path: c }));
    return a2.concat(u);
  }, []);
  return Qn(Ee(i, (a2) => {
    if (e.definition[a2.idx].ignoreAmbiguities === true)
      return [];
    const l = a2.idx, u = a2.path, c = _t(i, (h) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[h.idx].ignoreAmbiguities !== true && h.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      ch(h.path, u)
    ));
    return gn(c, (h) => {
      const f = [h.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: f,
          prefixPath: h.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: m,
        alternatives: f
      };
    });
  }));
}
function xh(n, e, t) {
  const r = [], i = gn(e, (s) => s.name);
  return $t(n, (s) => {
    const a2 = s.name;
    if (de(i, a2)) {
      const o = t.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a2
      });
    }
  }), r;
}
function Sh(n) {
  const e = dn(n, {
    errMsgProvider: Xf
  }), t = {};
  return $t(n.rules, (r) => {
    t[r.name] = r;
  }), Jf(t, e.errMsgProvider);
}
function Ch(n) {
  return n = dn(n, {
    errMsgProvider: pt
  }), fh(n.rules, n.tokenTypes, n.errMsgProvider, n.grammarName);
}
var Ru = "MismatchedTokenException";
var vu = "NoViableAltException";
var Au = "EarlyExitException";
var Eu = "NotAllInputParsedException";
var ku = [
  Ru,
  vu,
  Au,
  Eu
];
Object.freeze(ku);
function Xr(n) {
  return de(ku, n.name);
}
var ki = class extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
};
var $u = class extends ki {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = Ru;
  }
};
var Ih = class extends ki {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = vu;
  }
};
var Nh = class extends ki {
  constructor(e, t) {
    super(e, t), this.name = Eu;
  }
};
var wh = class extends ki {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = Au;
  }
};
var Gi = {};
var xu = "InRuleRecoveryException";
var Lh = class extends Error {
  constructor(e) {
    super(e), this.name = xu;
  }
};
var _h = class {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = mn(e, "recoveryEnabled") ? e.recoveryEnabled : Je.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = bh);
  }
  getTokenToInsert(e) {
    const t = Zs(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = true, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return true;
  }
  tryInRepetitionRecovery(e, t, r, i) {
    const s = this.findReSyncTokenType(), a2 = this.exportLexerState(), o = [];
    let l = false;
    const u = this.LA(1);
    let c = this.LA(1);
    const d = () => {
      const h = this.LA(0), f = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: h,
        ruleName: this.getCurrRuleFullName()
      }), m = new $u(f, u, this.LA(0));
      m.resyncedTokens = qn(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(c, i)) {
        d();
        return;
      } else if (r.call(this)) {
        d(), e.apply(this, t);
        return;
      } else this.tokenMatcher(c, s) ? l = true : (c = this.SKIP_TOKEN(), this.addToResyncTokens(c, o));
    this.importLexerState(a2);
  }
  shouldInRepetitionRecoveryBeTried(e, t, r) {
    return !(r === false || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, t) {
    const r = this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new Lh("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || Iu(t))
      return false;
    const r = this.LA(1);
    return hn(t, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : false;
  }
  isInCurrentRuleReSyncSet(e) {
    const t = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(t);
    return de(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let t = this.LA(1), r = 2;
    for (; ; ) {
      const i = hn(e, (s) => fu(t, s));
      if (i !== void 0)
        return i;
      t = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Gi;
    const e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return gn(e, (r, i) => i === 0 ? Gi : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: t[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = gn(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return fn(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Gi)
      return [tt];
    const t = e.ruleName + e.idxInCallingRule + tu + e.inRule;
    return this.resyncFollows[t];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, tt) || t.push(e), t;
  }
  reSyncTo(e) {
    const t = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === false; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, t);
    return qn(t);
  }
  attemptInRepetitionRecovery(e, t, r, i, s, a2, o) {
  }
  getCurrentGrammarPath(e, t) {
    const r = this.getHumanReadableRuleStack(), i = a(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return gn(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
};
function bh(n, e, t, r, i, s, a2) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const h = this.getCurrRuleFullName(), f = this.getGAstProductions()[h];
    l = new s(f, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let u = l.token, c = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && u === void 0 && (u = tt, c = 1), !(u === void 0 || c === void 0) && this.shouldInRepetitionRecoveryBeTried(u, c, a2) && this.tryInRepetitionRecovery(n, e, t, u);
}
var Oh = 4;
var it = 8;
var Su = 1 << it;
var Cu = 2 << it;
var ps = 3 << it;
var ms = 4 << it;
var gs = 5 << it;
var Or = 6 << it;
function Ui(n, e, t) {
  return t | e | n;
}
var na = class {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : Je.maxLookahead;
  }
  validate(e) {
    const t = this.validateNoLeftRecursion(e.rules);
    if (Iu(t)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...r,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (t) => Tu(t, t, pt));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (t) => Th(t, pt));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return Ee(e, (r) => Rh(r, t, pt));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return Eh(e, t, pt);
  }
  buildLookaheadForAlternation(e) {
    return ih(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, ah);
  }
  buildLookaheadForOptional(e) {
    return sh(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, ea(e.prodType), oh);
  }
};
var Ph = class {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = mn(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Je.dynamicTokensEnabled, this.maxLookahead = mn(e, "maxLookahead") ? e.maxLookahead : Je.maxLookahead, this.lookaheadStrategy = mn(e, "lookaheadStrategy") ? e.lookaheadStrategy : new na({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    $t(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a2, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = Dh(t);
        $t(r, (u) => {
          const c = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${Ge(u)}${c}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: t,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), h = Ui(this.fullRuleNameToShort[t.name], Su, u.idx);
            this.setLaFuncCache(h, d);
          });
        }), $t(i, (u) => {
          this.computeLookaheadFunc(t, u.idx, ps, "Repetition", u.maxLookahead, Ge(u));
        }), $t(s, (u) => {
          this.computeLookaheadFunc(t, u.idx, Cu, "Option", u.maxLookahead, Ge(u));
        }), $t(a2, (u) => {
          this.computeLookaheadFunc(t, u.idx, ms, "RepetitionMandatory", u.maxLookahead, Ge(u));
        }), $t(o, (u) => {
          this.computeLookaheadFunc(t, u.idx, Or, "RepetitionMandatoryWithSeparator", u.maxLookahead, Ge(u));
        }), $t(l, (u) => {
          this.computeLookaheadFunc(t, u.idx, gs, "RepetitionWithSeparator", u.maxLookahead, Ge(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, r, i, s, a2) {
    this.TRACE_INIT(`${a2}${t === 0 ? "" : t}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = Ui(this.fullRuleNameToShort[e.name], r, t);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, t) {
    const r = this.getLastExplicitRuleShortName();
    return Ui(r, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
};
var Mh = class extends an {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
};
var Rr = new Mh();
function Dh(n) {
  Rr.reset(), n.accept(Rr);
  const e = Rr.dslMethods;
  return Rr.reset(), e;
}
function Ka(n, e) {
  isNaN(n.startOffset) === true ? (n.startOffset = e.startOffset, n.endOffset = e.endOffset) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset);
}
function Wa(n, e) {
  isNaN(n.startOffset) === true ? (n.startOffset = e.startOffset, n.startColumn = e.startColumn, n.startLine = e.startLine, n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine);
}
function Fh(n, e, t) {
  n.children[t] === void 0 ? n.children[t] = [e] : n.children[t].push(e);
}
function Gh(n, e, t) {
  n.children[e] === void 0 ? n.children[e] = [t] : n.children[e].push(t);
}
var Uh = "name";
function Iu2(n, e) {
  Object.defineProperty(n, Uh, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: e
  });
}
function Bh(n, e) {
  const t = $(n), r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i], a2 = n[s], o = a2.length;
    for (let l = 0; l < o; l++) {
      const u = a2[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function Vh(n, e) {
  const t = function() {
  };
  Iu2(t, n + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (Js(i) && (i = i[0]), !Et(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = Wh(this, e);
      if (!Iu(i)) {
        const s = gn(i, (a2) => a2.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return t.prototype = r, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
function Kh(n, e, t) {
  const r = function() {
  };
  Iu2(r, n + "BaseSemanticsWithDefaults");
  const i = Object.create(t.prototype);
  return $t(e, (s) => {
    i[s] = Bh;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var ys;
(function(n) {
  n[n.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", n[n.MISSING_METHOD = 1] = "MISSING_METHOD";
})(ys || (ys = {}));
function Wh(n, e) {
  return Hh(n, e);
}
function Hh(n, e) {
  const t = _t(e, (i) => ac(n[i]) === false), r = gn(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
    type: ys.MISSING_METHOD,
    methodName: i
  }));
  return Qn(r);
}
var jh = class {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = mn(e, "nodeLocationTracking") ? e.nodeLocationTracking : Je.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = Xn, this.cstFinallyStateUpdate = Xn, this.cstPostTerminal = Xn, this.cstPostNonTerminal = Xn, this.cstPostRule = Xn;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Wa, this.setNodeLocationFromNode = Wa, this.cstPostRule = Xn, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Xn, this.setNodeLocationFromNode = Xn, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Ka, this.setNodeLocationFromNode = Ka, this.cstPostRule = Xn, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Xn, this.setNodeLocationFromNode = Xn, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = Xn, this.setNodeLocationFromNode = Xn, this.cstPostRule = Xn, this.setInitialNodeLocation = Xn;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const t = this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? (r.endOffset = t.endOffset, r.endLine = t.endLine, r.endColumn = t.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? r.endOffset = t.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Fh(r, t, e), this.setNodeLocationFromToken(r.location, t);
  }
  cstPostNonTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Gh(r, t, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (Et(this.baseCstVisitorConstructor)) {
      const e = Vh(this.className, $(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Et(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = Kh(this.className, $(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
};
var zh = class {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== true)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Qr;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Qr : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
};
var qh = class {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, r) {
    return this.consumeInternal(t, e, r);
  }
  subrule(e, t, r) {
    return this.subruleInternal(t, e, r);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t, r = Zr) {
    if (de(this.definedRulesNames, e)) {
      const a2 = {
        message: pt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a2);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, t, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t, r = Zr) {
    const i = yh(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, t, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, t), true;
      } catch (i) {
        if (Xr(i))
          return false;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return nf(St(this.gastProductionsCache));
  }
};
var Yh = class {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Yr, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, mn(t, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (Js(e)) {
      if (Iu(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (Js(e))
      this.tokensMap = It(e, (s, a2) => (s[a2.name] = a2, s), {});
    else if (mn(e, "modes") && Oe(fn(St(e.modes)), zf)) {
      const s = fn(St(e.modes)), a2 = Vs(s);
      this.tokensMap = It(a2, (o, l) => (o[l.name] = l, o), {});
    } else if (Ir(e))
      this.tokensMap = a(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = tt;
    const r = mn(e, "modes") ? fn(St(e.modes)) : St(e), i = Oe(r, (s) => Iu(s.categoryMatches));
    this.tokenMatcher = i ? Yr : nr, rr(St(this.tokensMap));
  }
  defineRule(e, t, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = mn(r, "resyncEnabled") ? r.resyncEnabled : Zr.resyncEnabled, s = mn(r, "recoveryValueFunc") ? r.recoveryValueFunc : Zr.recoveryValueFunc, a2 = this.ruleShortNameIdx << Oh + it;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a2] = e, this.fullRuleNameToShort[e] = a2;
    let o;
    return this.outputCst === true ? o = function(...c) {
      try {
        this.ruleInvocationStateUpdate(a2, e, this.subruleIdx), t.apply(this, c);
        const d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...c) {
      try {
        return this.ruleInvocationStateUpdate(a2, e, this.subruleIdx), t.apply(this, c);
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: t });
  }
  invokeRuleCatch(e, t, r) {
    const i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (Xr(e)) {
      const a2 = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a2.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = true, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = true, a2.partialCstResult = l;
          }
          throw a2;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a2;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Cu, t);
    return this.optionInternalLogic(e, t, r);
  }
  optionInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a2 = e.GATE;
      if (a2 !== void 0) {
        const o = i;
        i = () => a2.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === true)
      return s.call(this);
  }
  atLeastOneInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(ms, e);
    return this.atLeastOneInternalLogic(e, t, r);
  }
  atLeastOneInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const a2 = t.GATE;
      if (a2 !== void 0) {
        const o = i;
        i = () => a2.call(this) && o.call(this);
      }
    } else
      s = t;
    if (i.call(this) === true) {
      let a2 = this.doSingleRepetition(s);
      for (; i.call(this) === true && a2 === true; )
        a2 = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, ms, e, nh);
  }
  atLeastOneSepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Or, e);
    this.atLeastOneSepFirstInternalLogic(e, t, r);
  }
  atLeastOneSepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === true) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Ua
      ], o, Or, e, Ua);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(ps, e);
    return this.manyInternalLogic(e, t, r);
  }
  manyInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const o = t.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = t;
    let a2 = true;
    for (; i.call(this) === true && a2 === true; )
      a2 = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, t],
      i,
      ps,
      e,
      th,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a2
    );
  }
  manySepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(gs, e);
    this.manySepFirstInternalLogic(e, t, r);
  }
  manySepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === true) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Ga
      ], o, gs, e, Ga);
    }
  }
  repetitionSepSecondInternal(e, t, r, i, s) {
    for (; r(); )
      this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      r,
      i,
      s
    ], r, Or, e, s);
  }
  doSingleRepetition(e) {
    const t = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Su, t), i = Js(e) ? e : e.DEF, a2 = this.getLaFuncFromCache(r).call(this, i);
    if (a2 !== void 0)
      return i[a2].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new Nh(t, e));
    }
  }
  subruleInternal(e, t, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = t, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, t, r) {
    throw Xr(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === true ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new $u(i, t, s));
  }
  consumeInternalRecovery(e, t, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === xu ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, t = a(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), tt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
};
var Xh = class {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = mn(e, "errorMessageProvider") ? e.errorMessageProvider : Je.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Xr(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: a(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return a(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, t, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = Ei(e, s, t, this.maxLookahead)[0], l = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      l.push(this.LA(c));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new wh(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, t) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = Ai(e, i, this.maxLookahead), a2 = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a2.push(this.LA(u));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a2,
      previous: o,
      customUserDescription: t,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Ih(l, this.LA(1), o));
  }
};
var Jh = class {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    const r = this.gastProductionsCache[e];
    if (Et(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return hu([r], t, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const t = Pe(e.ruleStack), i = this.getGAstProductions()[t];
    return new eh(i, e).startWalking();
  }
};
var $i = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze($i);
var Ha = true;
var ja = Math.pow(2, it) - 1;
var Nu = du({ name: "RECORDING_PHASE_TOKEN", pattern: fe.NA });
rr([Nu]);
var wu = Zs(
  Nu,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(wu);
var Qh = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
var Zh = class {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${t}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${t}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${t}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${t}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${t}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${t}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, t, r) {
        return this.consumeInternalRecord(t, e, r);
      }, this.subrule = function(e, t, r) {
        return this.subruleInternalRecord(t, e, r);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let t = 0; t < 10; t++) {
        const r = t > 0 ? t : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, t) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Qr;
  }
  topLevelRuleRecord(e, t) {
    try {
      const r = new sn({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), t.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== true)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, t) {
    return un2.call(this, ne, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    un2.call(this, xe, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    un2.call(this, Se, t, e, Ha);
  }
  manyInternalRecord(e, t) {
    un2.call(this, W, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    un2.call(this, me, t, e, Ha);
  }
  orInternalRecord(e, t) {
    return ep.call(this, e, t);
  }
  subruleInternalRecord(e, t, r) {
    if (Jr(t), !e || mn(e, "ruleName") === false) {
      const o = new Error(`<SUBRULE${za(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = true, o;
    }
    const i = un(this.recordingProdStack), s = e.ruleName, a2 = new ue({
      idx: t,
      nonTerminalName: s,
      label: r == null ? void 0 : r.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a2), this.outputCst ? Qh : $i;
  }
  consumeInternalRecord(e, t, r) {
    if (Jr(t), !uu(e)) {
      const a2 = new Error(`<CONSUME${za(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a2.KNOWN_RECORDER_ERROR = true, a2;
    }
    const i = un(this.recordingProdStack), s = new G({
      idx: t,
      terminalType: e,
      label: r == null ? void 0 : r.LABEL
    });
    return i.definition.push(s), wu;
  }
};
function un2(n, e, t, r = false) {
  Jr(t);
  const i = un(this.recordingProdStack), s = ac(e) ? e : e.DEF, a2 = new n({ definition: [], idx: t });
  return r && (a2.separator = e.SEP), mn(e, "MAX_LOOKAHEAD") && (a2.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a2), s.call(this), i.definition.push(a2), this.recordingProdStack.pop(), $i;
}
function ep(n, e) {
  Jr(e);
  const t = un(this.recordingProdStack), r = Js(n) === false, i = r === false ? n : n.DEF, s = new ge({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && n.IGNORE_AMBIGUITIES === true
  });
  mn(n, "MAX_LOOKAHEAD") && (s.maxLookahead = n.MAX_LOOKAHEAD);
  const a2 = Ll(i, (o) => ac(o.GATE));
  return s.hasPredicates = a2, t.definition.push(s), $t(i, (o) => {
    const l = new pe({ definition: [] });
    s.definition.push(l), mn(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : mn(o, "GATE") && (l.ignoreAmbiguities = true), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), $i;
}
function za(n) {
  return n === 0 ? "" : `${n}`;
}
function Jr(n) {
  if (n < 0 || n > ja) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${n}>
	Idx value must be a none negative value smaller than ${ja + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = true, e;
  }
}
var tp = class {
  initPerformanceTracer(e) {
    if (mn(e, "traceInitPerf")) {
      const t = e.traceInitPerf, r = typeof t == "number";
      this.traceInitMaxIdent = r ? t : 1 / 0, this.traceInitPerf = r ? t > 0 : t;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Je.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = Zl(t), a2 = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a2(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return t();
  }
};
function np(n, e) {
  e.forEach((t) => {
    const r = t.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(n.prototype, i, s) : n.prototype[i] = t.prototype[i];
    });
  });
}
var Qr = Zs(tt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Qr);
var Je = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: Nt,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
});
var Zr = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: true
});
var ce;
(function(n) {
  n[n.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", n[n.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", n[n.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", n[n.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", n[n.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", n[n.LEFT_RECURSION = 5] = "LEFT_RECURSION", n[n.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", n[n.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", n[n.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", n[n.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", n[n.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", n[n.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", n[n.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", n[n.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
function qa(n = void 0) {
  return function() {
    return n;
  };
}
var ir = class _ir {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = true;
      const t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        eu(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), $t(this.definedRulesNames, (i) => {
            const a2 = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a2);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = Sh({
          rules: St(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (Iu(r) && this.skipValidations === false) {
          const i = Ch({
            rules: St(this.gastProductionsCache),
            tokenTypes: St(this.tokensMap),
            errMsgProvider: pt,
            grammarName: t
          }), s = dh({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: St(this.gastProductionsCache),
            tokenTypes: St(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), Iu(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = cf(St(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: St(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(St(this.gastProductionsCache));
      })), !_ir.DEFER_DEFINITION_ERRORS_HANDLING && !Iu(this.definitionErrors))
        throw e = gn(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    const r = this;
    if (r.initErrorHandler(t), r.initLexerAdapter(), r.initLooksAhead(t), r.initRecognizerEngine(e, t), r.initRecoverable(t), r.initTreeBuilder(t), r.initContentAssist(), r.initGastRecorder(t), r.initPerformanceTracer(t), mn(t, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = mn(t, "skipValidations") ? t.skipValidations : Je.skipValidations;
  }
};
ir.DEFER_DEFINITION_ERRORS_HANDLING = false;
np(ir, [
  _h,
  Ph,
  jh,
  zh,
  Yh,
  qh,
  Xh,
  Jh,
  Zh,
  tp
]);
var rp = class extends ir {
  constructor(e, t = Je) {
    const r = a(t);
    r.outputCst = false, super(e, r);
  }
};
function Qt(n, e, t) {
  return `${n.name}_${e}_${t}`;
}
var nt = 1;
var ip = 2;
var Lu = 4;
var _u = 5;
var sr = 7;
var sp = 8;
var ap = 9;
var op = 10;
var lp = 11;
var bu = 12;
var ra = class {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return false;
  }
};
var ia = class extends ra {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
};
var Ou = class extends ra {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return true;
  }
};
var sa = class extends ra {
  constructor(e, t, r) {
    super(e), this.rule = t, this.followState = r;
  }
  isEpsilon() {
    return true;
  }
};
function up(n) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  cp(e, n);
  const t = n.length;
  for (let r = 0; r < t; r++) {
    const i = n[r], s = kt(e, i, i);
    s !== void 0 && Ap(e, i, s);
  }
  return e;
}
function cp(n, e) {
  const t = e.length;
  for (let r = 0; r < t; r++) {
    const i = e[r], s = X(n, i, void 0, {
      type: ip
    }), a2 = X(n, i, void 0, {
      type: sr
    });
    s.stop = a2, n.ruleToStartState.set(i, s), n.ruleToStopState.set(i, a2);
  }
}
function Pu(n, e, t) {
  return t instanceof G ? aa(n, e, t.terminalType, t) : t instanceof ue ? vp(n, e, t) : t instanceof ge ? mp(n, e, t) : t instanceof ne ? gp(n, e, t) : t instanceof W ? dp(n, e, t) : t instanceof me ? fp(n, e, t) : t instanceof xe ? hp(n, e, t) : t instanceof Se ? pp(n, e, t) : kt(n, e, t);
}
function dp(n, e, t) {
  const r = X(n, e, t, {
    type: _u
  });
  st(n, r);
  const i = on2(n, e, r, t, kt(n, e, t));
  return Du(n, e, t, i);
}
function fp(n, e, t) {
  const r = X(n, e, t, {
    type: _u
  });
  st(n, r);
  const i = on2(n, e, r, t, kt(n, e, t)), s = aa(n, e, t.separator, t);
  return Du(n, e, t, i, s);
}
function hp(n, e, t) {
  const r = X(n, e, t, {
    type: Lu
  });
  st(n, r);
  const i = on2(n, e, r, t, kt(n, e, t));
  return Mu(n, e, t, i);
}
function pp(n, e, t) {
  const r = X(n, e, t, {
    type: Lu
  });
  st(n, r);
  const i = on2(n, e, r, t, kt(n, e, t)), s = aa(n, e, t.separator, t);
  return Mu(n, e, t, i, s);
}
function mp(n, e, t) {
  const r = X(n, e, t, {
    type: nt
  });
  st(n, r);
  const i = gn(t.definition, (a2) => Pu(n, e, a2));
  return on2(n, e, r, t, ...i);
}
function gp(n, e, t) {
  const r = X(n, e, t, {
    type: nt
  });
  st(n, r);
  const i = on2(n, e, r, t, kt(n, e, t));
  return yp(n, e, t, i);
}
function kt(n, e, t) {
  const r = _t(gn(t.definition, (i) => Pu(n, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : Rp(n, r);
}
function Mu(n, e, t, r, i) {
  const s = r.left, a2 = r.right, o = X(n, e, t, {
    type: lp
  });
  st(n, o);
  const l = X(n, e, t, {
    type: bu
  });
  return s.loopback = o, l.loopback = o, n.decisionMap[Qt(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = o, j(a2, o), i === void 0 ? (j(o, s), j(o, l)) : (j(o, l), j(o, i.left), j(i.right, s)), {
    left: s,
    right: l
  };
}
function Du(n, e, t, r, i) {
  const s = r.left, a2 = r.right, o = X(n, e, t, {
    type: op
  });
  st(n, o);
  const l = X(n, e, t, {
    type: bu
  }), u = X(n, e, t, {
    type: ap
  });
  return o.loopback = u, l.loopback = u, j(o, s), j(o, l), j(a2, u), i !== void 0 ? (j(u, l), j(u, i.left), j(i.right, s)) : j(u, o), n.decisionMap[Qt(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = o, {
    left: o,
    right: l
  };
}
function yp(n, e, t, r) {
  const i = r.left, s = r.right;
  return j(i, s), n.decisionMap[Qt(e, "Option", t.idx)] = i, r;
}
function st(n, e) {
  return n.decisionStates.push(e), e.decision = n.decisionStates.length - 1, e.decision;
}
function on2(n, e, t, r, ...i) {
  const s = X(n, e, r, {
    type: sp,
    start: t
  });
  t.end = s;
  for (const o of i)
    o !== void 0 ? (j(t, o.left), j(o.right, s)) : j(t, s);
  const a2 = {
    left: t,
    right: s
  };
  return n.decisionMap[Qt(e, Tp(r), r.idx)] = t, a2;
}
function Tp(n) {
  if (n instanceof ge)
    return "Alternation";
  if (n instanceof ne)
    return "Option";
  if (n instanceof W)
    return "Repetition";
  if (n instanceof me)
    return "RepetitionWithSeparator";
  if (n instanceof xe)
    return "RepetitionMandatory";
  if (n instanceof Se)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function Rp(n, e) {
  const t = e.length;
  for (let s = 0; s < t - 1; s++) {
    const a2 = e[s];
    let o;
    a2.left.transitions.length === 1 && (o = a2.left.transitions[0]);
    const l = o instanceof sa, u = o, c = e[s + 1].left;
    a2.left.type === nt && a2.right.type === nt && o !== void 0 && (l && u.followState === a2.right || o.target === a2.right) ? (l ? u.followState = c : o.target = c, Ep(n, a2.right)) : j(a2.right, c);
  }
  const r = e[0], i = e[t - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function aa(n, e, t, r) {
  const i = X(n, e, r, {
    type: nt
  }), s = X(n, e, r, {
    type: nt
  });
  return oa(i, new ia(s, t)), {
    left: i,
    right: s
  };
}
function vp(n, e, t) {
  const r = t.referencedRule, i = n.ruleToStartState.get(r), s = X(n, e, t, {
    type: nt
  }), a2 = X(n, e, t, {
    type: nt
  }), o = new sa(i, r, a2);
  return oa(s, o), {
    left: s,
    right: a2
  };
}
function Ap(n, e, t) {
  const r = n.ruleToStartState.get(e);
  j(r, t.left);
  const i = n.ruleToStopState.get(e);
  return j(t.right, i), {
    left: r,
    right: i
  };
}
function j(n, e) {
  const t = new Ou(e);
  oa(n, t);
}
function X(n, e, t, r) {
  const i = Object.assign({
    atn: n,
    production: t,
    epsilonOnlyTransitions: false,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: n.states.length
  }, r);
  return n.states.push(i), i;
}
function oa(n, e) {
  n.transitions.length === 0 && (n.epsilonOnlyTransitions = e.isEpsilon()), n.transitions.push(e);
}
function Ep(n, e) {
  n.states.splice(n.states.indexOf(e), 1);
}
var ei = {};
var Ts = class {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const t = Fu(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return gn(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const t in this.map)
      e += t + ":";
    return e;
  }
};
function Fu(n, e = true) {
  return `${e ? `a${n.alt}` : ""}s${n.state.stateNumber}:${n.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
function kp(n, e) {
  const t = {};
  return (r) => {
    const i = r.toString();
    let s = t[i];
    return s !== void 0 || (s = {
      atnStartState: n,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
var Gu = class {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "";
    const t = this.predicates.length;
    for (let r = 0; r < t; r++)
      e += this.predicates[r] === true ? "1" : "0";
    return e;
  }
};
var Ya = new Gu();
var $p = class extends na {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (r) => console.log(r);
  }
  initialize(e) {
    this.atn = up(e.rules), this.dfas = xp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: t, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a2 = this.dfas, o = this.logging, l = Qt(r, "Alternation", t), c = this.atn.decisionMap[l].decision, d = gn(Ba({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: r
    }), (h) => gn(h, (f) => f[0]));
    if (Xa(d, false) && !s) {
      const h = It(d, (f, m, g) => ($t(m, (A) => {
        A && (f[A.tokenTypeIdx] = g, $t(A.categoryMatches, (T) => {
          f[T] = g;
        }));
      }), f), {});
      return i ? function(f) {
        var m;
        const g = this.LA(1), A = h[g.tokenTypeIdx];
        if (f !== void 0 && A !== void 0) {
          const T = (m = f[A]) === null || m === void 0 ? void 0 : m.GATE;
          if (T !== void 0 && T.call(this) === false)
            return;
        }
        return A;
      } : function() {
        const f = this.LA(1);
        return h[f.tokenTypeIdx];
      };
    } else return i ? function(h) {
      const f = new Gu(), m = h === void 0 ? 0 : h.length;
      for (let A = 0; A < m; A++) {
        const T = h == null ? void 0 : h[A].GATE;
        f.set(A, T === void 0 || T.call(this));
      }
      const g = Bi.call(this, a2, c, f, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const h = Bi.call(this, a2, c, Ya, o);
      return typeof h == "number" ? h : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: t, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a2 = this.dfas, o = this.logging, l = Qt(r, i, t), c = this.atn.decisionMap[l].decision, d = gn(Ba({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: r
    }), (h) => gn(h, (f) => f[0]));
    if (Xa(d) && d[0][0] && !s) {
      const h = d[0], f = fn(h);
      if (f.length === 1 && Iu(f[0].categoryMatches)) {
        const g = f[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = It(f, (g, A) => (A !== void 0 && (g[A.tokenTypeIdx] = true, $t(A.categoryMatches, (T) => {
          g[T] = true;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      const h = Bi.call(this, a2, c, Ya, o);
      return typeof h == "object" ? false : h === 0;
    };
  }
};
function Xa(n, e = true) {
  const t = /* @__PURE__ */ new Set();
  for (const r of n) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return false;
      }
      const a2 = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a2)
        if (t.has(o)) {
          if (!i.has(o))
            return false;
        } else
          t.add(o), i.add(o);
    }
  }
  return true;
}
function xp(n) {
  const e = n.decisionStates.length, t = Array(e);
  for (let r = 0; r < e; r++)
    t[r] = kp(n.decisionStates[r], r);
  return t;
}
function Bi(n, e, t, r) {
  const i = n[e](t);
  let s = i.start;
  if (s === void 0) {
    const o = Mp(i.atnStartState);
    s = Bu(i, Uu(o)), i.start = s;
  }
  return Sp.apply(this, [i, s, t, r]);
}
function Sp(n, e, t, r) {
  let i = e, s = 1;
  const a2 = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = _p(i, o);
    if (l === void 0 && (l = Cp.apply(this, [n, i, o, s, t, r])), l === ei)
      return Lp(a2, i, o);
    if (l.isAcceptState === true)
      return l.prediction;
    i = l, a2.push(o), o = this.LA(s++);
  }
}
function Cp(n, e, t, r, i, s) {
  const a2 = bp(e.configs, t, i);
  if (a2.size === 0)
    return Ja(n, e, t, ei), ei;
  let o = Uu(a2);
  const l = Pp(a2, i);
  if (l !== void 0)
    o.isAcceptState = true, o.prediction = l, o.configs.uniqueAlt = l;
  else if (Up(a2)) {
    const u = on(a2.alts);
    o.isAcceptState = true, o.prediction = u, o.configs.uniqueAlt = u, Ip.apply(this, [n, r, a2.alts, s]);
  }
  return o = Ja(n, e, t, o), o;
}
function Ip(n, e, t, r) {
  const i = [];
  for (let u = 1; u <= e; u++)
    i.push(this.LA(u).tokenType);
  const s = n.atnStartState, a2 = s.rule, o = s.production, l = Np({
    topLevelRule: a2,
    ambiguityIndices: t,
    production: o,
    prefixPath: i
  });
  r(l);
}
function Np(n) {
  const e = gn(n.prefixPath, (i) => Lt(i)).join(", "), t = n.production.idx === 0 ? "" : n.production.idx;
  let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(", ")}> in <${wp(n.production)}${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function wp(n) {
  if (n instanceof ue)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Se)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof W)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function Lp(n, e, t) {
  const r = Ee(e.configs.elements, (s) => s.state.transitions), i = Qc(r.filter((s) => s instanceof ia).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: n
  };
}
function _p(n, e) {
  return n.edges[e.tokenTypeIdx];
}
function bp(n, e, t) {
  const r = new Ts(), i = [];
  for (const a2 of n.elements) {
    if (t.is(a2.alt) === false)
      continue;
    if (a2.state.type === sr) {
      i.push(a2);
      continue;
    }
    const o = a2.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const u = a2.state.transitions[l], c = Op(u, e);
      c !== void 0 && r.add({
        state: c,
        alt: a2.alt,
        stack: a2.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new Ts();
    for (const a2 of r.elements)
      ti(a2, s);
  }
  if (i.length > 0 && !Fp(s))
    for (const a2 of i)
      s.add(a2);
  return s;
}
function Op(n, e) {
  if (n instanceof ia && fu(e, n.tokenType))
    return n.target;
}
function Pp(n, e) {
  let t;
  for (const r of n.elements)
    if (e.is(r.alt) === true) {
      if (t === void 0)
        t = r.alt;
      else if (t !== r.alt)
        return;
    }
  return t;
}
function Uu(n) {
  return {
    configs: n,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
function Ja(n, e, t, r) {
  return r = Bu(n, r), e.edges[t.tokenTypeIdx] = r, r;
}
function Bu(n, e) {
  if (e === ei)
    return e;
  const t = e.configs.key, r = n.states[t];
  return r !== void 0 ? r : (e.configs.finalize(), n.states[t] = e, e);
}
function Mp(n) {
  const e = new Ts(), t = n.transitions.length;
  for (let r = 0; r < t; r++) {
    const s = {
      state: n.transitions[r].target,
      alt: r,
      stack: []
    };
    ti(s, e);
  }
  return e;
}
function ti(n, e) {
  const t = n.state;
  if (t.type === sr) {
    if (n.stack.length > 0) {
      const i = [...n.stack], a2 = {
        state: i.pop(),
        alt: n.alt,
        stack: i
      };
      ti(a2, e);
    } else
      e.add(n);
    return;
  }
  t.epsilonOnlyTransitions || e.add(n);
  const r = t.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = t.transitions[i], a2 = Dp(n, s);
    a2 !== void 0 && ti(a2, e);
  }
}
function Dp(n, e) {
  if (e instanceof Ou)
    return {
      state: e.target,
      alt: n.alt,
      stack: n.stack
    };
  if (e instanceof sa) {
    const t = [...n.stack, e.followState];
    return {
      state: e.target,
      alt: n.alt,
      stack: t
    };
  }
}
function Fp(n) {
  for (const e of n.elements)
    if (e.state.type === sr)
      return true;
  return false;
}
function Gp(n) {
  for (const e of n.elements)
    if (e.state.type !== sr)
      return false;
  return true;
}
function Up(n) {
  if (Gp(n))
    return true;
  const e = Bp(n.elements);
  return Vp(e) && !Kp(e);
}
function Bp(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const r = Fu(t, false);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[t.alt] = true;
  }
  return e;
}
function Vp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length > 1)
      return true;
  return false;
}
function Kp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length === 1)
      return true;
  return false;
}
var Qa;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(Qa || (Qa = {}));
var Rs;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(Rs || (Rs = {}));
var Za;
(function(n) {
  n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(Za || (Za = {}));
var ni;
(function(n) {
  n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(ni || (ni = {}));
var P;
(function(n) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = ni.MAX_VALUE), i === Number.MAX_VALUE && (i = ni.MAX_VALUE), { line: r, character: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  n.is = t;
})(P || (P = {}));
var O;
(function(n) {
  function e(r, i, s, a2) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a2))
      return { start: P.create(r, i), end: P.create(s, a2) };
    if (P.is(r) && P.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a2}]`);
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.start) && P.is(i.end);
  }
  n.is = t;
})(O || (O = {}));
var ri;
(function(n) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && O.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  n.is = t;
})(ri || (ri = {}));
var eo;
(function(n) {
  function e(r, i, s, a2) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a2 };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && O.is(i.targetRange) && p.string(i.targetUri) && O.is(i.targetSelectionRange) && (O.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  n.is = t;
})(eo || (eo = {}));
var vs;
(function(n) {
  function e(r, i, s, a2) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a2
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  n.is = t;
})(vs || (vs = {}));
var to;
(function(n) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && O.is(i.range) && vs.is(i.color);
  }
  n.is = t;
})(to || (to = {}));
var no;
(function(n) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || en.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, en.is));
  }
  n.is = t;
})(no || (no = {}));
var ro;
(function(n) {
  n.Comment = "comment", n.Imports = "imports", n.Region = "region";
})(ro || (ro = {}));
var io;
(function(n) {
  function e(r, i, s, a2, o, l) {
    const u = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (u.startCharacter = s), p.defined(a2) && (u.endCharacter = a2), p.defined(o) && (u.kind = o), p.defined(l) && (u.collapsedText = l), u;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  n.is = t;
})(io || (io = {}));
var As;
(function(n) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && ri.is(i.location) && p.string(i.message);
  }
  n.is = t;
})(As || (As = {}));
var so;
(function(n) {
  n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
})(so || (so = {}));
var ao;
(function(n) {
  n.Unnecessary = 1, n.Deprecated = 2;
})(ao || (ao = {}));
var oo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && p.string(r.href);
  }
  n.is = e;
})(oo || (oo = {}));
var ii;
(function(n) {
  function e(r, i, s, a2, o, l) {
    let u = { range: r, message: i };
    return p.defined(s) && (u.severity = s), p.defined(a2) && (u.code = a2), p.defined(o) && (u.source = o), p.defined(l) && (u.relatedInformation = l), u;
  }
  n.create = e;
  function t(r) {
    var i;
    let s = r;
    return p.defined(s) && O.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, As.is));
  }
  n.is = t;
})(ii || (ii = {}));
var Zt;
(function(n) {
  function e(r, i, ...s) {
    let a2 = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a2.arguments = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  n.is = t;
})(Zt || (Zt = {}));
var en;
(function(n) {
  function e(s, a2) {
    return { range: s, newText: a2 };
  }
  n.replace = e;
  function t(s, a2) {
    return { range: { start: s, end: s }, newText: a2 };
  }
  n.insert = t;
  function r(s) {
    return { range: s, newText: "" };
  }
  n.del = r;
  function i(s) {
    const a2 = s;
    return p.objectLiteral(a2) && p.string(a2.newText) && O.is(a2.range);
  }
  n.is = i;
})(en || (en = {}));
var Es;
(function(n) {
  function e(r, i, s) {
    const a2 = { label: r };
    return i !== void 0 && (a2.needsConfirmation = i), s !== void 0 && (a2.description = s), a2;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  n.is = t;
})(Es || (Es = {}));
var tn;
(function(n) {
  function e(t) {
    const r = t;
    return p.string(r);
  }
  n.is = e;
})(tn || (tn = {}));
var lo;
(function(n) {
  function e(s, a2, o) {
    return { range: s, newText: a2, annotationId: o };
  }
  n.replace = e;
  function t(s, a2, o) {
    return { range: { start: s, end: s }, newText: a2, annotationId: o };
  }
  n.insert = t;
  function r(s, a2) {
    return { range: s, newText: "", annotationId: a2 };
  }
  n.del = r;
  function i(s) {
    const a2 = s;
    return en.is(a2) && (Es.is(a2.annotationId) || tn.is(a2.annotationId));
  }
  n.is = i;
})(lo || (lo = {}));
var ks;
(function(n) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && Is.is(i.textDocument) && Array.isArray(i.edits);
  }
  n.is = t;
})(ks || (ks = {}));
var $s;
(function(n) {
  function e(r, i, s) {
    let a2 = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a2.options = i), s !== void 0 && (a2.annotationId = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || tn.is(i.annotationId));
  }
  n.is = t;
})($s || ($s = {}));
var xs;
(function(n) {
  function e(r, i, s, a2) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a2 !== void 0 && (o.annotationId = a2), o;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || tn.is(i.annotationId));
  }
  n.is = t;
})(xs || (xs = {}));
var Ss;
(function(n) {
  function e(r, i, s) {
    let a2 = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a2.options = i), s !== void 0 && (a2.annotationId = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || tn.is(i.annotationId));
  }
  n.is = t;
})(Ss || (Ss = {}));
var Cs;
(function(n) {
  function e(t) {
    let r = t;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? $s.is(i) || xs.is(i) || Ss.is(i) : ks.is(i)));
  }
  n.is = e;
})(Cs || (Cs = {}));
var uo;
(function(n) {
  function e(r) {
    return { uri: r };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  n.is = t;
})(uo || (uo = {}));
var co;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  n.is = t;
})(co || (co = {}));
var Is;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  n.is = t;
})(Is || (Is = {}));
var fo;
(function(n) {
  function e(r, i, s, a2) {
    return { uri: r, languageId: i, version: s, text: a2 };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  n.is = t;
})(fo || (fo = {}));
var Ns;
(function(n) {
  n.PlainText = "plaintext", n.Markdown = "markdown";
  function e(t) {
    const r = t;
    return r === n.PlainText || r === n.Markdown;
  }
  n.is = e;
})(Ns || (Ns = {}));
var Xn2;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(t) && Ns.is(r.kind) && p.string(r.value);
  }
  n.is = e;
})(Xn2 || (Xn2 = {}));
var ho;
(function(n) {
  n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
})(ho || (ho = {}));
var po;
(function(n) {
  n.PlainText = 1, n.Snippet = 2;
})(po || (po = {}));
var mo;
(function(n) {
  n.Deprecated = 1;
})(mo || (mo = {}));
var go;
(function(n) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i && p.string(i.newText) && O.is(i.insert) && O.is(i.replace);
  }
  n.is = t;
})(go || (go = {}));
var yo;
(function(n) {
  n.asIs = 1, n.adjustIndentation = 2;
})(yo || (yo = {}));
var To;
(function(n) {
  function e(t) {
    const r = t;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  n.is = e;
})(To || (To = {}));
var Ro;
(function(n) {
  function e(t) {
    return { label: t };
  }
  n.create = e;
})(Ro || (Ro = {}));
var vo;
(function(n) {
  function e(t, r) {
    return { items: t || [], isIncomplete: !!r };
  }
  n.create = e;
})(vo || (vo = {}));
var si;
(function(n) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  n.fromPlainText = e;
  function t(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  n.is = t;
})(si || (si = {}));
var Ao;
(function(n) {
  function e(t) {
    let r = t;
    return !!r && p.objectLiteral(r) && (Xn2.is(r.contents) || si.is(r.contents) || p.typedArray(r.contents, si.is)) && (t.range === void 0 || O.is(t.range));
  }
  n.is = e;
})(Ao || (Ao = {}));
var Eo;
(function(n) {
  function e(t, r) {
    return r ? { label: t, documentation: r } : { label: t };
  }
  n.create = e;
})(Eo || (Eo = {}));
var ko;
(function(n) {
  function e(t, r, ...i) {
    let s = { label: t };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  n.create = e;
})(ko || (ko = {}));
var $o;
(function(n) {
  n.Text = 1, n.Read = 2, n.Write = 3;
})($o || ($o = {}));
var xo;
(function(n) {
  function e(t, r) {
    let i = { range: t };
    return p.number(r) && (i.kind = r), i;
  }
  n.create = e;
})(xo || (xo = {}));
var So;
(function(n) {
  n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
})(So || (So = {}));
var Co;
(function(n) {
  n.Deprecated = 1;
})(Co || (Co = {}));
var Io;
(function(n) {
  function e(t, r, i, s, a2) {
    let o = {
      name: t,
      kind: r,
      location: { uri: s, range: i }
    };
    return a2 && (o.containerName = a2), o;
  }
  n.create = e;
})(Io || (Io = {}));
var No;
(function(n) {
  function e(t, r, i, s) {
    return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
  }
  n.create = e;
})(No || (No = {}));
var wo;
(function(n) {
  function e(r, i, s, a2, o, l) {
    let u = {
      name: r,
      detail: i,
      kind: s,
      range: a2,
      selectionRange: o
    };
    return l !== void 0 && (u.children = l), u;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && O.is(i.range) && O.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  n.is = t;
})(wo || (wo = {}));
var Lo;
(function(n) {
  n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll";
})(Lo || (Lo = {}));
var ai;
(function(n) {
  n.Invoked = 1, n.Automatic = 2;
})(ai || (ai = {}));
var _o;
(function(n) {
  function e(r, i, s) {
    let a2 = { diagnostics: r };
    return i != null && (a2.only = i), s != null && (a2.triggerKind = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, ii.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === ai.Invoked || i.triggerKind === ai.Automatic);
  }
  n.is = t;
})(_o || (_o = {}));
var bo;
(function(n) {
  function e(r, i, s) {
    let a2 = { title: r }, o = true;
    return typeof i == "string" ? (o = false, a2.kind = i) : Zt.is(i) ? a2.command = i : a2.edit = i, o && s !== void 0 && (a2.kind = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, ii.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Zt.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || Cs.is(i.edit));
  }
  n.is = t;
})(bo || (bo = {}));
var Oo;
(function(n) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && O.is(i.range) && (p.undefined(i.command) || Zt.is(i.command));
  }
  n.is = t;
})(Oo || (Oo = {}));
var Po;
(function(n) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  n.is = t;
})(Po || (Po = {}));
var Mo;
(function(n) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && O.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  n.is = t;
})(Mo || (Mo = {}));
var Do;
(function(n) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && O.is(i.range) && (i.parent === void 0 || n.is(i.parent));
  }
  n.is = t;
})(Do || (Do = {}));
var Fo;
(function(n) {
  n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator";
})(Fo || (Fo = {}));
var Go;
(function(n) {
  n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
})(Go || (Go = {}));
var Uo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  n.is = e;
})(Uo || (Uo = {}));
var Bo;
(function(n) {
  function e(r, i) {
    return { range: r, text: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && O.is(i.range) && p.string(i.text);
  }
  n.is = t;
})(Bo || (Bo = {}));
var Vo;
(function(n) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && O.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  n.is = t;
})(Vo || (Vo = {}));
var Ko;
(function(n) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && O.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  n.is = t;
})(Ko || (Ko = {}));
var Wo;
(function(n) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.defined(i) && O.is(r.stoppedLocation);
  }
  n.is = t;
})(Wo || (Wo = {}));
var ws;
(function(n) {
  n.Type = 1, n.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  n.is = e;
})(ws || (ws = {}));
var Ls;
(function(n) {
  function e(r) {
    return { value: r };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || Xn2.is(i.tooltip)) && (i.location === void 0 || ri.is(i.location)) && (i.command === void 0 || Zt.is(i.command));
  }
  n.is = t;
})(Ls || (Ls = {}));
var Ho;
(function(n) {
  function e(r, i, s) {
    const a2 = { position: r, label: i };
    return s !== void 0 && (a2.kind = s), a2;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && P.is(i.position) && (p.string(i.label) || p.typedArray(i.label, Ls.is)) && (i.kind === void 0 || ws.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, en.is) && (i.tooltip === void 0 || p.string(i.tooltip) || Xn2.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  n.is = t;
})(Ho || (Ho = {}));
var jo;
(function(n) {
  function e(t) {
    return { kind: "snippet", value: t };
  }
  n.createSnippet = e;
})(jo || (jo = {}));
var zo;
(function(n) {
  function e(t, r, i, s) {
    return { insertText: t, filterText: r, range: i, command: s };
  }
  n.create = e;
})(zo || (zo = {}));
var qo;
(function(n) {
  function e(t) {
    return { items: t };
  }
  n.create = e;
})(qo || (qo = {}));
var Yo;
(function(n) {
  n.Invoked = 0, n.Automatic = 1;
})(Yo || (Yo = {}));
var Xo;
(function(n) {
  function e(t, r) {
    return { range: t, text: r };
  }
  n.create = e;
})(Xo || (Xo = {}));
var Jo;
(function(n) {
  function e(t, r) {
    return { triggerKind: t, selectedCompletionInfo: r };
  }
  n.create = e;
})(Jo || (Jo = {}));
var Qo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && Rs.is(r.uri) && p.string(r.name);
  }
  n.is = e;
})(Qo || (Qo = {}));
var Zo;
(function(n) {
  function e(s, a2, o, l) {
    return new Wp(s, a2, o, l);
  }
  n.create = e;
  function t(s) {
    let a2 = s;
    return !!(p.defined(a2) && p.string(a2.uri) && (p.undefined(a2.languageId) || p.string(a2.languageId)) && p.uinteger(a2.lineCount) && p.func(a2.getText) && p.func(a2.positionAt) && p.func(a2.offsetAt));
  }
  n.is = t;
  function r(s, a2) {
    let o = s.getText(), l = i(a2, (c, d) => {
      let h = c.range.start.line - d.range.start.line;
      return h === 0 ? c.range.start.character - d.range.start.character : h;
    }), u = o.length;
    for (let c = l.length - 1; c >= 0; c--) {
      let d = l[c], h = s.offsetAt(d.range.start), f = s.offsetAt(d.range.end);
      if (f <= u)
        o = o.substring(0, h) + d.newText + o.substring(f, o.length);
      else
        throw new Error("Overlapping edit");
      u = h;
    }
    return o;
  }
  n.applyEdits = r;
  function i(s, a2) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), u = s.slice(o);
    i(l, a2), i(u, a2);
    let c = 0, d = 0, h = 0;
    for (; c < l.length && d < u.length; )
      a2(l[c], u[d]) <= 0 ? s[h++] = l[c++] : s[h++] = u[d++];
    for (; c < l.length; )
      s[h++] = l[c++];
    for (; d < u.length; )
      s[h++] = u[d++];
    return s;
  }
})(Zo || (Zo = {}));
var Wp = class {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, r = true;
      for (let i = 0; i < t.length; i++) {
        r && (e.push(i), r = false);
        let s = t.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      r && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), r = 0, i = t.length;
    if (i === 0)
      return P.create(0, e);
    for (; r < i; ) {
      let a2 = Math.floor((r + i) / 2);
      t[a2] > e ? i = a2 : r = a2 + 1;
    }
    let s = r - 1;
    return P.create(s, e - t[s]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(n) {
  const e = Object.prototype.toString;
  function t(f) {
    return typeof f < "u";
  }
  n.defined = t;
  function r(f) {
    return typeof f > "u";
  }
  n.undefined = r;
  function i(f) {
    return f === true || f === false;
  }
  n.boolean = i;
  function s(f) {
    return e.call(f) === "[object String]";
  }
  n.string = s;
  function a2(f) {
    return e.call(f) === "[object Number]";
  }
  n.number = a2;
  function o(f, m, g) {
    return e.call(f) === "[object Number]" && m <= f && f <= g;
  }
  n.numberRange = o;
  function l(f) {
    return e.call(f) === "[object Number]" && -2147483648 <= f && f <= 2147483647;
  }
  n.integer = l;
  function u(f) {
    return e.call(f) === "[object Number]" && 0 <= f && f <= 2147483647;
  }
  n.uinteger = u;
  function c(f) {
    return e.call(f) === "[object Function]";
  }
  n.func = c;
  function d(f) {
    return f !== null && typeof f == "object";
  }
  n.objectLiteral = d;
  function h(f, m) {
    return Array.isArray(f) && f.every(m);
  }
  n.typedArray = h;
})(p || (p = {}));
var Hp = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Ku(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const t = new la();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    const r = new _s(e.startOffset, e.image.length, ss(e), e.tokenType, !t);
    return r.grammarSource = t, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const t = e.container;
    if (t) {
      const r = t.content.indexOf(e);
      r >= 0 && t.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const t = [];
    for (const s of e) {
      const a2 = new _s(s.startOffset, s.image.length, ss(s), s.tokenType, true);
      a2.root = this.rootNode, t.push(a2);
    }
    let r = this.current, i = false;
    if (r.content.length > 0) {
      r.content.push(...t);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...t), i = true;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    const t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    const r = this.nodeStack.pop();
    (r == null ? void 0 : r.content.length) === 0 && this.removeNode(r);
  }
};
var Vu = class {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var e, t;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
};
var _s = class extends Vu {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, r, i, s = false) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = r;
  }
};
var la = class extends Vu {
  constructor() {
    super(...arguments), this.content = new ua(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = t;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: P.create(0, 0), end: P.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const t = this.content[e];
      if (!t.hidden)
        return t;
    }
    return this.content[this.content.length - 1];
  }
};
var ua = class _ua extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, _ua.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t, ...r) {
    return this.addParents(r), super.splice(e, t, ...r);
  }
  addParents(e) {
    for (const t of e)
      t.container = this.parent;
  }
};
var Ku = class extends la {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
};
var bs = Symbol("Datatype");
function Vi(n) {
  return n.$type === bs;
}
var el = "​";
var Wu = (n) => n.endsWith(el) ? n : n + el;
var Hu = class {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const t = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new Xp(t, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
};
var jp = class extends Hu {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Hp(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Wu(e.name), this.startImplementation(r, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Xl(e))
        return bs;
      {
        const t = qs(e);
        return t ?? e.name;
      }
    }
  }
  parse(e, t = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i)
      throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a2 = { $type: e };
        this.stack.push(a2), e === bs && (a2.value = "");
      }
      let s;
      try {
        s = t(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const t = this.lexerResult.hidden;
    if (!t.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < t.length; i++)
      if (t[i].startOffset > r)
        return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, r) {
    const i = this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a2 = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), u = this.current;
      if (o) {
        const c = gt(r) ? i.image : this.converter.convert(i.image, a2);
        this.assign(o.operator, o.feature, c, a2, l);
      } else if (Vi(u)) {
        let c = i.image;
        gt(r) || (c = this.converter.convert(c, a2).toString()), u.value += c;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, r, i, s) {
    let a2;
    !this.isRecording() && !r && (a2 = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && a2 && a2.length > 0 && this.performSubruleAssignment(o, i, a2);
  }
  performSubruleAssignment(e, t, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a2 = this.current;
      if (Vi(a2))
        a2.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a2);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let r = this.current;
      if (t.feature && t.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(t.operator, t.feature, r, r.$cstNode, false);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return xd(e), this.nodeBuilder.construct(e), this.stack.pop(), Vi(e) ? this.converter.convert(e.value, e.$cstNode) : (Sd(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const t = mi(e, mt);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? Ws(t.terminal) : false
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, r, i, s) {
    const a2 = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a2, t, i, r) : o = r, e) {
      case "=": {
        a2[t] = o;
        break;
      }
      case "?=": {
        a2[t] = true;
        break;
      }
      case "+=":
        Array.isArray(a2[t]) || (a2[t] = []), a2[t].push(o);
    }
  }
  assignWithoutOverride(e, t) {
    for (const [i, s] of Object.entries(t)) {
      const a2 = e[i];
      a2 === void 0 ? e[i] = s : Array.isArray(a2) && Array.isArray(s) && (s.push(...a2), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
};
var zp = class {
  buildMismatchTokenMessage(e) {
    return Nt.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Nt.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Nt.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Nt.buildEarlyExitMessage(e);
  }
};
var ju = class extends zp {
  buildMismatchTokenMessage({ expected: e, actual: t }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
};
var qp = class extends Hu {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const t = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    const r = this.wrapper.DEFINE_RULE(Wu(e.name), this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      const r = this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, r) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const t = this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
};
var Yp = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new ju()
};
var Xp = class extends rp {
  constructor(e, t) {
    const r = t && "maxLookahead" in t;
    super(e, Object.assign(Object.assign(Object.assign({}, Yp), { lookaheadStrategy: r ? new na({ maxLookahead: t.maxLookahead }) : new $p({
      // If validations are skipped, don't log the lookahead warnings
      logging: t.skipValidations ? () => {
      } : void 0
    }) }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, r) {
    return this.subrule(e, t, {
      ARGS: [r]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
};
function zu(n, e, t) {
  return Jp({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, n), e;
}
function Jp(n, e) {
  const t = Hl(e, false), r = ee(e.rules).filter(we).filter((i) => t.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, n), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    n.parser.rule(i, Rt(s, i.definition));
  }
}
function Rt(n, e, t = false) {
  let r;
  if (gt(e))
    r = im(n, e);
  else if (pi(e))
    r = Qp(n, e);
  else if (mt(e))
    r = Rt(n, e.terminal);
  else if (Ws(e))
    r = qu(n, e);
  else if (yt(e))
    r = Zp(n, e);
  else if (Gl(e))
    r = tm(n, e);
  else if (Ul(e))
    r = nm(n, e);
  else if (Hs(e))
    r = rm(n, e);
  else if (yd(e)) {
    const i = n.consume++;
    r = () => n.parser.consume(i, tt, e);
  } else
    throw new Pl(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Yu(n, t ? void 0 : oi(e), r, e.cardinality);
}
function Qp(n, e) {
  const t = Ys(e);
  return () => n.parser.action(t, e);
}
function Zp(n, e) {
  const t = e.rule.ref;
  if (we(t)) {
    const r = n.subrule++, i = t.fragment, s = e.arguments.length > 0 ? em(t, e.arguments) : () => ({});
    return (a2) => n.parser.subrule(r, Xu(n, t), i, e, s(a2));
  } else if (Et2(t)) {
    const r = n.consume++, i = Os(n, t.name);
    return () => n.parser.consume(r, i, e);
  } else if (t)
    Zn();
  else
    throw new Pl(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function em(n, e) {
  const t = e.map((r) => ze(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < t.length; s++) {
      const a2 = n.parameters[s], o = t[s];
      i[a2.name] = o(r);
    }
    return i;
  };
}
function ze(n) {
  if (dd(n)) {
    const e = ze(n.left), t = ze(n.right);
    return (r) => e(r) || t(r);
  } else if (cd(n)) {
    const e = ze(n.left), t = ze(n.right);
    return (r) => e(r) && t(r);
  } else if (fd(n)) {
    const e = ze(n.value);
    return (t) => !e(t);
  } else if (hd(n)) {
    const e = n.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === true;
  } else if (ud(n)) {
    const e = !!n.true;
    return () => e;
  }
  Zn();
}
function tm(n, e) {
  if (e.elements.length === 1)
    return Rt(n, e.elements[0]);
  {
    const t = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Rt(n, i, true)
      }, a2 = oi(i);
      a2 && (s.GATE = ze(a2)), t.push(s);
    }
    const r = n.or++;
    return (i) => n.parser.alternatives(r, t.map((s) => {
      const a2 = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a2.GATE = () => o(i)), a2;
    }));
  }
}
function nm(n, e) {
  if (e.elements.length === 1)
    return Rt(n, e.elements[0]);
  const t = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Rt(n, o, true)
    }, u = oi(o);
    u && (l.GATE = ze(u)), t.push(l);
  }
  const r = n.or++, i = (o, l) => {
    const u = l.getRuleStack().join("-");
    return `uGroup_${o}_${u}`;
  }, s = (o) => n.parser.alternatives(r, t.map((l, u) => {
    const c = { ALT: () => true }, d = n.parser;
    c.ALT = () => {
      if (l.ALT(o), !d.isRecording()) {
        const f = i(r, d);
        d.unorderedGroups.get(f) || d.unorderedGroups.set(f, []);
        const m = d.unorderedGroups.get(f);
        typeof (m == null ? void 0 : m[u]) > "u" && (m[u] = true);
      }
    };
    const h = l.GATE;
    return h ? c.GATE = () => h(o) : c.GATE = () => {
      const f = d.unorderedGroups.get(i(r, d));
      return !(f == null ? void 0 : f[u]);
    }, c;
  })), a2 = Yu(n, oi(e), s, "*");
  return (o) => {
    a2(o), n.parser.isRecording() || n.parser.unorderedGroups.delete(i(r, n.parser));
  };
}
function rm(n, e) {
  const t = e.elements.map((r) => Rt(n, r));
  return (r) => t.forEach((i) => i(r));
}
function oi(n) {
  if (Hs(n))
    return n.guardCondition;
}
function qu(n, e, t = e.terminal) {
  if (t)
    if (yt(t) && we(t.rule.ref)) {
      const r = t.rule.ref, i = n.subrule++;
      return (s) => n.parser.subrule(i, Xu(n, r), false, e, s);
    } else if (yt(t) && Et2(t.rule.ref)) {
      const r = n.consume++, i = Os(n, t.rule.ref.name);
      return () => n.parser.consume(r, i, e);
    } else if (gt(t)) {
      const r = n.consume++, i = Os(n, t.value);
      return () => n.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = ql(e.type.ref), i = r == null ? void 0 : r.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Ys(e.type.ref));
    return qu(n, e, i);
  }
}
function im(n, e) {
  const t = n.consume++, r = n.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => n.parser.consume(t, r, e);
}
function Yu(n, e, t, r) {
  const i = e && ze(e);
  if (!r)
    if (i) {
      const s = n.or++;
      return (a2) => n.parser.alternatives(s, [
        {
          ALT: () => t(a2),
          GATE: () => i(a2)
        },
        {
          ALT: qa(),
          GATE: () => !i(a2)
        }
      ]);
    } else
      return t;
  if (r === "*") {
    const s = n.many++;
    return (a2) => n.parser.many(s, {
      DEF: () => t(a2),
      GATE: i ? () => i(a2) : void 0
    });
  } else if (r === "+") {
    const s = n.many++;
    if (i) {
      const a2 = n.or++;
      return (o) => n.parser.alternatives(a2, [
        {
          ALT: () => n.parser.atLeastOne(s, {
            DEF: () => t(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: qa(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a2) => n.parser.atLeastOne(s, {
        DEF: () => t(a2)
      });
  } else if (r === "?") {
    const s = n.optional++;
    return (a2) => n.parser.optional(s, {
      DEF: () => t(a2),
      GATE: i ? () => i(a2) : void 0
    });
  } else
    Zn();
}
function Xu(n, e) {
  const t = sm(n, e), r = n.parser.getRule(t);
  if (!r)
    throw new Error(`Rule "${t}" not found."`);
  return r;
}
function sm(n, e) {
  if (we(e))
    return e.name;
  if (n.ruleNames.has(e))
    return n.ruleNames.get(e);
  {
    let t = e, r = t.$container, i = e.$type;
    for (; !we(r); )
      (Hs(r) || Gl(r) || Ul(r)) && (i = r.elements.indexOf(t).toString() + ":" + i), t = r, r = r.$container;
    return i = r.name + ":" + i, n.ruleNames.set(e, i), i;
  }
}
function Os(n, e) {
  const t = n.tokens[e];
  if (!t)
    throw new Error(`Token "${e}" not found."`);
  return t;
}
function am(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new qp(n);
  return zu(e, r, t.definition), r.finalize(), r;
}
function om(n) {
  const e = lm(n);
  return e.finalize(), e;
}
function lm(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new jp(n);
  return zu(e, r, t.definition);
}
var Ju = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    const r = ee(Hl(e, false)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, t);
    return i.forEach((a2) => {
      const o = a2.PATTERN;
      typeof o == "object" && o && "test" in o && os(o) ? s.unshift(a2) : s.push(a2);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Et2).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    const t = Xs(e), r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = true), e.hidden && (i.GROUP = os(t) ? fe.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const t = new RegExp(e, e.flags + "y");
    return (r, i) => (t.lastIndex = i, t.exec(r));
  }
  buildKeywordTokens(e, t, r) {
    return e.filter(we).flatMap((i) => er(i).filter(gt)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(r == null ? void 0 : r.caseInsensitive)));
  }
  buildKeywordToken(e, t, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = true), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(Pd(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((r, i) => {
      const s = i == null ? void 0 : i.PATTERN;
      return (s == null ? void 0 : s.source) && Md("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
};
var Qu = class {
  convert(e, t) {
    let r = t.grammarSource;
    if (Ws(r) && (r = Ud(r)), yt(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, t, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return We.convertInt(t);
      case "STRING":
        return We.convertString(t);
      case "ID":
        return We.convertID(t);
    }
    switch ((i = zd(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return We.convertNumber(t);
      case "boolean":
        return We.convertBoolean(t);
      case "bigint":
        return We.convertBigint(t);
      case "date":
        return We.convertDate(t);
      default:
        return t;
    }
  }
};
var We;
(function(n) {
  function e(u) {
    let c = "";
    for (let d = 1; d < u.length - 1; d++) {
      const h = u.charAt(d);
      if (h === "\\") {
        const f = u.charAt(++d);
        c += t(f);
      } else
        c += h;
    }
    return c;
  }
  n.convertString = e;
  function t(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  function r(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  n.convertID = r;
  function i(u) {
    return parseInt(u);
  }
  n.convertInt = i;
  function s(u) {
    return BigInt(u);
  }
  n.convertBigint = s;
  function a2(u) {
    return new Date(u);
  }
  n.convertDate = a2;
  function o(u) {
    return Number(u);
  }
  n.convertNumber = o;
  function l(u) {
    return u.toLowerCase() === "true";
  }
  n.convertBoolean = l;
})(We || (We = {}));
var ft = {};
var vr = {};
var tl;
function Zu() {
  if (tl) return vr;
  tl = 1, Object.defineProperty(vr, "__esModule", { value: true });
  let n;
  function e() {
    if (n === void 0)
      throw new Error("No runtime abstraction layer installed");
    return n;
  }
  return function(t) {
    function r(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      n = i;
    }
    t.install = r;
  }(e || (e = {})), vr.default = e, vr;
}
var J = {};
var nl;
function um() {
  if (nl) return J;
  nl = 1, Object.defineProperty(J, "__esModule", { value: true }), J.stringArray = J.array = J.func = J.error = J.number = J.string = J.boolean = void 0;
  function n(o) {
    return o === true || o === false;
  }
  J.boolean = n;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  J.string = e;
  function t(o) {
    return typeof o == "number" || o instanceof Number;
  }
  J.number = t;
  function r(o) {
    return o instanceof Error;
  }
  J.error = r;
  function i(o) {
    return typeof o == "function";
  }
  J.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  J.array = s;
  function a2(o) {
    return s(o) && o.every((l) => e(l));
  }
  return J.stringArray = a2, J;
}
var ht = {};
var rl;
function ec() {
  if (rl) return ht;
  rl = 1, Object.defineProperty(ht, "__esModule", { value: true }), ht.Emitter = ht.Event = void 0;
  const n = Zu();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (ht.Event = e = {}));
  class t {
    add(s, a2 = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a2), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a2) });
    }
    remove(s, a2 = null) {
      if (!this._callbacks)
        return;
      let o = false;
      for (let l = 0, u = this._callbacks.length; l < u; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a2) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = true;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a2 = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let u = 0, c = o.length; u < c; u++)
        try {
          a2.push(o[u].apply(l[u], s));
        } catch (d) {
          (0, n.default)().console.error(d);
        }
      return a2;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class r {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a2, o) => {
        this._callbacks || (this._callbacks = new t()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a2);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a2), l.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return ht.Emitter = r, r._noop = function() {
  }, ht;
}
var il;
function cm() {
  if (il) return ft;
  il = 1, Object.defineProperty(ft, "__esModule", { value: true }), ft.CancellationTokenSource = ft.CancellationToken = void 0;
  const n = Zu(), e = um(), t = ec();
  var r;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: t.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: t.Event.None
    });
    function l(u) {
      const c = u;
      return c && (c === o.None || c === o.Cancelled || e.boolean(c.isCancellationRequested) && !!c.onCancellationRequested);
    }
    o.is = l;
  })(r || (ft.CancellationToken = r = {}));
  const i = Object.freeze(function(o, l) {
    const u = (0, n.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      u.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new t.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a2 {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = r.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = r.None;
    }
  }
  return ft.CancellationTokenSource = a2, ft;
}
var V = cm();
function dm() {
  return new Promise((n) => {
    typeof setImmediate > "u" ? setTimeout(n, 0) : setImmediate(n);
  });
}
var Pr = 0;
var fm = 10;
function hm() {
  return Pr = performance.now(), new V.CancellationTokenSource();
}
var li = Symbol("OperationCancelled");
function xi(n) {
  return n === li;
}
async function Ae(n) {
  if (n === V.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - Pr >= fm && (Pr = e, await dm(), Pr = performance.now()), n.isCancellationRequested)
    throw li;
}
var ca = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (t(r), this);
    });
  }
};
var Jn = class _Jn {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    for (const r of e)
      if (_Jn.isIncremental(r)) {
        const i = nc(r.range), s = this.offsetAt(i.start), a2 = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a2, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const c = sl(r.text, false, s);
        if (l - o === c.length)
          for (let h = 0, f = c.length; h < f; h++)
            u[h + o + 1] = c[h];
        else
          c.length < 1e4 ? u.splice(o + 1, l - o, ...c) : this._lineOffsets = u = u.slice(0, o + 1).concat(c, u.slice(l + 1));
        const d = r.text.length - (a2 - s);
        if (d !== 0)
          for (let h = o + 1 + c.length, f = u.length; h < f; h++)
            u[h] = u[h] + d;
      } else if (_Jn.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = sl(this._content, true)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const t = this.getLineOffsets();
    let r = 0, i = t.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a2 = Math.floor((r + i) / 2);
      t[a2] > e ? i = a2 : r = a2 + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
  }
  offsetAt(e) {
    const t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = t[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && tc(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
};
var Ps;
(function(n) {
  function e(i, s, a2, o) {
    return new Jn(i, s, a2, o);
  }
  n.create = e;
  function t(i, s, a2) {
    if (i instanceof Jn)
      return i.update(s, a2), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  n.update = t;
  function r(i, s) {
    const a2 = i.getText(), o = Ms(s.map(pm), (c, d) => {
      const h = c.range.start.line - d.range.start.line;
      return h === 0 ? c.range.start.character - d.range.start.character : h;
    });
    let l = 0;
    const u = [];
    for (const c of o) {
      const d = i.offsetAt(c.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && u.push(a2.substring(l, d)), c.newText.length && u.push(c.newText), l = i.offsetAt(c.range.end);
    }
    return u.push(a2.substr(l)), u.join("");
  }
  n.applyEdits = r;
})(Ps || (Ps = {}));
function Ms(n, e) {
  if (n.length <= 1)
    return n;
  const t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  Ms(r, e), Ms(i, e);
  let s = 0, a2 = 0, o = 0;
  for (; s < r.length && a2 < i.length; )
    e(r[s], i[a2]) <= 0 ? n[o++] = r[s++] : n[o++] = i[a2++];
  for (; s < r.length; )
    n[o++] = r[s++];
  for (; a2 < i.length; )
    n[o++] = i[a2++];
  return n;
}
function sl(n, e, t = 0) {
  const r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    const s = n.charCodeAt(i);
    tc(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function tc(n) {
  return n === 13 || n === 10;
}
function nc(n) {
  const e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function pm(n) {
  const e = nc(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var rc;
(() => {
  var n = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a2(l, u) {
      for (var c, d = "", h = 0, f = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) c = l.charCodeAt(g);
        else {
          if (c === 47) break;
          c = 47;
        }
        if (c === 47) {
          if (!(f === g - 1 || m === 1)) if (f !== g - 1 && m === 2) {
            if (d.length < 2 || h !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
              if (d.length > 2) {
                var A = d.lastIndexOf("/");
                if (A !== d.length - 1) {
                  A === -1 ? (d = "", h = 0) : h = (d = d.slice(0, A)).length - 1 - d.lastIndexOf("/"), f = g, m = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", h = 0, f = g, m = 0;
                continue;
              }
            }
            u && (d.length > 0 ? d += "/.." : d = "..", h = 2);
          } else d.length > 0 ? d += "/" + l.slice(f + 1, g) : d = l.slice(f + 1, g), h = g - f - 1;
          f = g, m = 0;
        } else c === 46 && m !== -1 ? ++m : m = -1;
      }
      return d;
    }
    var o = { resolve: function() {
      for (var l, u = "", c = false, d = arguments.length - 1; d >= -1 && !c; d--) {
        var h;
        d >= 0 ? h = arguments[d] : (l === void 0 && (l = process.cwd()), h = l), s(h), h.length !== 0 && (u = h + "/" + u, c = h.charCodeAt(0) === 47);
      }
      return u = a2(u, !c), c ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var u = l.charCodeAt(0) === 47, c = l.charCodeAt(l.length - 1) === 47;
      return (l = a2(l, !u)).length !== 0 || u || (l = "."), l.length > 0 && c && (l += "/"), u ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, u = 0; u < arguments.length; ++u) {
        var c = arguments[u];
        s(c), c.length > 0 && (l === void 0 ? l = c : l += "/" + c);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, u) {
      if (s(l), s(u), l === u || (l = o.resolve(l)) === (u = o.resolve(u))) return "";
      for (var c = 1; c < l.length && l.charCodeAt(c) === 47; ++c) ;
      for (var d = l.length, h = d - c, f = 1; f < u.length && u.charCodeAt(f) === 47; ++f) ;
      for (var m = u.length - f, g = h < m ? h : m, A = -1, T = 0; T <= g; ++T) {
        if (T === g) {
          if (m > g) {
            if (u.charCodeAt(f + T) === 47) return u.slice(f + T + 1);
            if (T === 0) return u.slice(f + T);
          } else h > g && (l.charCodeAt(c + T) === 47 ? A = T : T === 0 && (A = 0));
          break;
        }
        var E = l.charCodeAt(c + T);
        if (E !== u.charCodeAt(f + T)) break;
        E === 47 && (A = T);
      }
      var R = "";
      for (T = c + A + 1; T <= d; ++T) T !== d && l.charCodeAt(T) !== 47 || (R.length === 0 ? R += ".." : R += "/..");
      return R.length > 0 ? R + u.slice(f + A) : (f += A, u.charCodeAt(f) === 47 && ++f, u.slice(f));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var u = l.charCodeAt(0), c = u === 47, d = -1, h = true, f = l.length - 1; f >= 1; --f) if ((u = l.charCodeAt(f)) === 47) {
        if (!h) {
          d = f;
          break;
        }
      } else h = false;
      return d === -1 ? c ? "/" : "." : c && d === 1 ? "//" : l.slice(0, d);
    }, basename: function(l, u) {
      if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var c, d = 0, h = -1, f = true;
      if (u !== void 0 && u.length > 0 && u.length <= l.length) {
        if (u.length === l.length && u === l) return "";
        var m = u.length - 1, g = -1;
        for (c = l.length - 1; c >= 0; --c) {
          var A = l.charCodeAt(c);
          if (A === 47) {
            if (!f) {
              d = c + 1;
              break;
            }
          } else g === -1 && (f = false, g = c + 1), m >= 0 && (A === u.charCodeAt(m) ? --m == -1 && (h = c) : (m = -1, h = g));
        }
        return d === h ? h = g : h === -1 && (h = l.length), l.slice(d, h);
      }
      for (c = l.length - 1; c >= 0; --c) if (l.charCodeAt(c) === 47) {
        if (!f) {
          d = c + 1;
          break;
        }
      } else h === -1 && (f = false, h = c + 1);
      return h === -1 ? "" : l.slice(d, h);
    }, extname: function(l) {
      s(l);
      for (var u = -1, c = 0, d = -1, h = true, f = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) d === -1 && (h = false, d = m + 1), g === 46 ? u === -1 ? u = m : f !== 1 && (f = 1) : u !== -1 && (f = -1);
        else if (!h) {
          c = m + 1;
          break;
        }
      }
      return u === -1 || d === -1 || f === 0 || f === 1 && u === d - 1 && u === c + 1 ? "" : l.slice(u, d);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return function(u, c) {
        var d = c.dir || c.root, h = c.base || (c.name || "") + (c.ext || "");
        return d ? d === c.root ? d + h : d + "/" + h : h;
      }(0, l);
    }, parse: function(l) {
      s(l);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return u;
      var c, d = l.charCodeAt(0), h = d === 47;
      h ? (u.root = "/", c = 1) : c = 0;
      for (var f = -1, m = 0, g = -1, A = true, T = l.length - 1, E = 0; T >= c; --T) if ((d = l.charCodeAt(T)) !== 47) g === -1 && (A = false, g = T + 1), d === 46 ? f === -1 ? f = T : E !== 1 && (E = 1) : f !== -1 && (E = -1);
      else if (!A) {
        m = T + 1;
        break;
      }
      return f === -1 || g === -1 || E === 0 || E === 1 && f === g - 1 && f === m + 1 ? g !== -1 && (u.base = u.name = m === 0 && h ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && h ? (u.name = l.slice(1, f), u.base = l.slice(1, g)) : (u.name = l.slice(m, f), u.base = l.slice(m, g)), u.ext = l.slice(f, g)), m > 0 ? u.dir = l.slice(0, m - 1) : h && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a2 = e[i] = { exports: {} };
    return n[i](a2, a2.exports, t), a2.exports;
  }
  t.d = (i, s) => {
    for (var a2 in s) t.o(s, a2) && !t.o(i, a2) && Object.defineProperty(i, a2, { enumerable: true, get: s[a2] });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: true });
  };
  var r = {};
  (() => {
    let i;
    t.r(r), t.d(r, { URI: () => h, Utils: () => Ce }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a2 = /^\//, o = /^\/\//;
    function l(k, y) {
      if (!k.scheme && y) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
      if (k.scheme && !s.test(k.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (k.path) {
        if (k.authority) {
          if (!a2.test(k.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(k.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", c = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class h {
      constructor(y, S, x, b, _, L = false) {
        __publicField(this, "scheme");
        __publicField(this, "authority");
        __publicField(this, "path");
        __publicField(this, "query");
        __publicField(this, "fragment");
        typeof y == "object" ? (this.scheme = y.scheme || u, this.authority = y.authority || u, this.path = y.path || u, this.query = y.query || u, this.fragment = y.fragment || u) : (this.scheme = /* @__PURE__ */ function(Te, q) {
          return Te || q ? Te : "file";
        }(y, L), this.authority = S || u, this.path = function(Te, q) {
          switch (Te) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== c && (q = c + q) : q = c;
          }
          return q;
        }(this.scheme, x || u), this.query = b || u, this.fragment = _ || u, l(this, L));
      }
      static isUri(y) {
        return y instanceof h || !!y && typeof y.authority == "string" && typeof y.fragment == "string" && typeof y.path == "string" && typeof y.query == "string" && typeof y.scheme == "string" && typeof y.fsPath == "string" && typeof y.with == "function" && typeof y.toString == "function";
      }
      get fsPath() {
        return E(this);
      }
      with(y) {
        if (!y) return this;
        let { scheme: S, authority: x, path: b, query: _, fragment: L } = y;
        return S === void 0 ? S = this.scheme : S === null && (S = u), x === void 0 ? x = this.authority : x === null && (x = u), b === void 0 ? b = this.path : b === null && (b = u), _ === void 0 ? _ = this.query : _ === null && (_ = u), L === void 0 ? L = this.fragment : L === null && (L = u), S === this.scheme && x === this.authority && b === this.path && _ === this.query && L === this.fragment ? this : new m(S, x, b, _, L);
      }
      static parse(y, S = false) {
        const x = d.exec(y);
        return x ? new m(x[2] || u, ie(x[4] || u), ie(x[5] || u), ie(x[7] || u), ie(x[9] || u), S) : new m(u, u, u, u, u);
      }
      static file(y) {
        let S = u;
        if (i && (y = y.replace(/\\/g, c)), y[0] === c && y[1] === c) {
          const x = y.indexOf(c, 2);
          x === -1 ? (S = y.substring(2), y = c) : (S = y.substring(2, x), y = y.substring(x) || c);
        }
        return new m("file", S, y, u, u);
      }
      static from(y) {
        const S = new m(y.scheme, y.authority, y.path, y.query, y.fragment);
        return l(S, true), S;
      }
      toString(y = false) {
        return R(this, y);
      }
      toJSON() {
        return this;
      }
      static revive(y) {
        if (y) {
          if (y instanceof h) return y;
          {
            const S = new m(y);
            return S._formatted = y.external, S._fsPath = y._sep === f ? y.fsPath : null, S;
          }
        }
        return y;
      }
    }
    const f = i ? 1 : void 0;
    class m extends h {
      constructor() {
        super(...arguments);
        __publicField(this, "_formatted", null);
        __publicField(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = E(this)), this._fsPath;
      }
      toString(y = false) {
        return y ? R(this, true) : (this._formatted || (this._formatted = R(this, false)), this._formatted);
      }
      toJSON() {
        const y = { $mid: 1 };
        return this._fsPath && (y.fsPath = this._fsPath, y._sep = f), this._formatted && (y.external = this._formatted), this.path && (y.path = this.path), this.scheme && (y.scheme = this.scheme), this.authority && (y.authority = this.authority), this.query && (y.query = this.query), this.fragment && (y.fragment = this.fragment), y;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function A(k, y, S) {
      let x, b = -1;
      for (let _ = 0; _ < k.length; _++) {
        const L = k.charCodeAt(_);
        if (L >= 97 && L <= 122 || L >= 65 && L <= 90 || L >= 48 && L <= 57 || L === 45 || L === 46 || L === 95 || L === 126 || y && L === 47 || S && L === 91 || S && L === 93 || S && L === 58) b !== -1 && (x += encodeURIComponent(k.substring(b, _)), b = -1), x !== void 0 && (x += k.charAt(_));
        else {
          x === void 0 && (x = k.substr(0, _));
          const Te = g[L];
          Te !== void 0 ? (b !== -1 && (x += encodeURIComponent(k.substring(b, _)), b = -1), x += Te) : b === -1 && (b = _);
        }
      }
      return b !== -1 && (x += encodeURIComponent(k.substring(b))), x !== void 0 ? x : k;
    }
    function T(k) {
      let y;
      for (let S = 0; S < k.length; S++) {
        const x = k.charCodeAt(S);
        x === 35 || x === 63 ? (y === void 0 && (y = k.substr(0, S)), y += g[x]) : y !== void 0 && (y += k[S]);
      }
      return y !== void 0 ? y : k;
    }
    function E(k, y) {
      let S;
      return S = k.authority && k.path.length > 1 && k.scheme === "file" ? `//${k.authority}${k.path}` : k.path.charCodeAt(0) === 47 && (k.path.charCodeAt(1) >= 65 && k.path.charCodeAt(1) <= 90 || k.path.charCodeAt(1) >= 97 && k.path.charCodeAt(1) <= 122) && k.path.charCodeAt(2) === 58 ? k.path[1].toLowerCase() + k.path.substr(2) : k.path, i && (S = S.replace(/\//g, "\\")), S;
    }
    function R(k, y) {
      const S = y ? T : A;
      let x = "", { scheme: b, authority: _, path: L, query: Te, fragment: q } = k;
      if (b && (x += b, x += ":"), (_ || b === "file") && (x += c, x += c), _) {
        let K = _.indexOf("@");
        if (K !== -1) {
          const ct = _.substr(0, K);
          _ = _.substr(K + 1), K = ct.lastIndexOf(":"), K === -1 ? x += S(ct, false, false) : (x += S(ct.substr(0, K), false, false), x += ":", x += S(ct.substr(K + 1), false, true)), x += "@";
        }
        _ = _.toLowerCase(), K = _.lastIndexOf(":"), K === -1 ? x += S(_, false, true) : (x += S(_.substr(0, K), false, true), x += _.substr(K));
      }
      if (L) {
        if (L.length >= 3 && L.charCodeAt(0) === 47 && L.charCodeAt(2) === 58) {
          const K = L.charCodeAt(1);
          K >= 65 && K <= 90 && (L = `/${String.fromCharCode(K + 32)}:${L.substr(3)}`);
        } else if (L.length >= 2 && L.charCodeAt(1) === 58) {
          const K = L.charCodeAt(0);
          K >= 65 && K <= 90 && (L = `${String.fromCharCode(K + 32)}:${L.substr(2)}`);
        }
        x += S(L, true, false);
      }
      return Te && (x += "?", x += S(Te, false, false)), q && (x += "#", x += y ? q : A(q, false, false)), x;
    }
    function C(k) {
      try {
        return decodeURIComponent(k);
      } catch {
        return k.length > 3 ? k.substr(0, 3) + C(k.substr(3)) : k;
      }
    }
    const F = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ie(k) {
      return k.match(F) ? k.replace(F, (y) => C(y)) : k;
    }
    var Le = t(470);
    const ye = Le.posix || Le, Fe = "/";
    var Ce;
    (function(k) {
      k.joinPath = function(y, ...S) {
        return y.with({ path: ye.join(y.path, ...S) });
      }, k.resolvePath = function(y, ...S) {
        let x = y.path, b = false;
        x[0] !== Fe && (x = Fe + x, b = true);
        let _ = ye.resolve(x, ...S);
        return b && _[0] === Fe && !y.authority && (_ = _.substring(1)), y.with({ path: _ });
      }, k.dirname = function(y) {
        if (y.path.length === 0 || y.path === Fe) return y;
        let S = ye.dirname(y.path);
        return S.length === 1 && S.charCodeAt(0) === 46 && (S = ""), y.with({ path: S });
      }, k.basename = function(y) {
        return ye.basename(y.path);
      }, k.extname = function(y) {
        return ye.extname(y.path);
      };
    })(Ce || (Ce = {}));
  })(), rc = r;
})();
var { URI: vt, Utils: cn } = rc;
var rt;
(function(n) {
  n.basename = cn.basename, n.dirname = cn.dirname, n.extname = cn.extname, n.joinPath = cn.joinPath, n.resolvePath = cn.resolvePath;
  function e(i, s) {
    return (i == null ? void 0 : i.toString()) === (s == null ? void 0 : s.toString());
  }
  n.equals = e;
  function t(i, s) {
    const a2 = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a2.split("/").filter((f) => f.length > 0), u = o.split("/").filter((f) => f.length > 0);
    let c = 0;
    for (; c < l.length && l[c] === u[c]; c++)
      ;
    const d = "../".repeat(l.length - c), h = u.slice(c).join("/");
    return d + h;
  }
  n.relative = t;
  function r(i) {
    return vt.parse(i.toString()).toString();
  }
  n.normalize = r;
})(rt || (rt = {}));
var U;
(function(n) {
  n[n.Changed = 0] = "Changed", n[n.Parsed = 1] = "Parsed", n[n.IndexedContent = 2] = "IndexedContent", n[n.ComputedScopes = 3] = "ComputedScopes", n[n.Linked = 4] = "Linked", n[n.IndexedReferences = 5] = "IndexedReferences", n[n.Validated = 6] = "Validated";
})(U || (U = {}));
var mm = class {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, t = V.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, t);
  }
  fromTextDocument(e, t, r) {
    return t = t ?? vt.parse(e.uri), V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromString(e, t, r) {
    return V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromModel(e, t) {
    return this.create(t, { $model: e });
  }
  create(e, t, r) {
    if (typeof t == "string") {
      const i = this.parse(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      const i = { value: t.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  async createAsync(e, t, r) {
    if (typeof t == "string") {
      const i = await this.parseAsync(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      const i = await this.parseAsync(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, t, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a2 = this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        get textDocument() {
          return a2();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a2 = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a2 ? a2.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a2)
      Object.defineProperty(e, "textDocument", {
        value: a2
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, t), e.parseResult.value.$document = e), e.state = U.Parsed, e;
  }
  parse(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, r);
  }
  parseAsync(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r);
  }
  createTextDocumentGetter(e, t) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = Ps.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
};
var gm = class {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ee(this.documentMap.values());
  }
  addDocument(e) {
    const t = e.uri.toString();
    if (this.documentMap.has(t))
      throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    const t = e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(r), r);
  }
  createDocument(e, t, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(t, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = U.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (r.state = U.Changed, this.documentMap.delete(t)), r;
  }
};
var Ki = Symbol("ref_resolving");
var ym = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, t = V.CancellationToken.None) {
    for (const r of wt(e.parseResult.value))
      await Ae(t), Vl(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Ki;
      try {
        const s = this.getCandidate(e);
        if (Ir2(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a2 = this.loadAstNode(s);
          i._ref = a2 ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a2 = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a2}` });
      }
      t.references.push(i);
    }
  }
  unlink(e) {
    for (const t of e.references)
      delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, t, r, i) {
    const s = this, a2 = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ae(this._ref))
          return this._ref;
        if (Zc(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a2, container: e, property: t }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Ki;
          const l = as(e).$document, u = s.getLinkedNode({ reference: a2, container: e, property: t });
          if (u.error && l && l.state < U.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = u.node) !== null && o !== void 0 ? o : u.error, this._nodeDescription = u.descr, l == null ? void 0 : l.references.push(this);
        } else if (this._ref === Ki)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return Ir2(this._ref) ? this._ref : void 0;
      }
    };
    return a2;
  }
  getLinkedNode(e) {
    var t;
    try {
      const r = this.getCandidate(e);
      if (Ir2(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (t = r.message) !== null && t !== void 0 ? t : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const t = this.langiumDocuments().getDocument(e.documentUri);
    if (t)
      return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    const r = as(e.container).$document;
    r && r.state < U.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: t });
  }
};
function Tm(n) {
  return typeof n.name == "string";
}
var Rm = class {
  getName(e) {
    if (Tm(e))
      return e.name;
  }
  getNameNode(e) {
    return zl(e.$cstNode, "name");
  }
};
var vm = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const t = Hd(e), r = e.astNode;
      if (t && r) {
        const i = r[t.feature];
        if (Ue(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (Ue(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || nd(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const t = this.findDeclaration(e);
    if (t == null ? void 0 : t.$cstNode) {
      const r = this.nameProvider.getNameNode(t);
      return r ?? t.$cstNode;
    }
  }
  findReferences(e, t) {
    const r = [];
    if (t.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = i.filter((s) => rt.equals(s.sourceUri, t.documentUri))), r.push(...i), ee(r);
  }
  getReferenceToSelf(e) {
    const t = this.nameProvider.getNameNode(e);
    if (t) {
      const r = Ze(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Wr(t),
        local: true
      };
    }
  }
};
var ui = class {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.add(t, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return rs.sum(ee(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, t) {
    if (t === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(t);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), true;
      }
      return false;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var t;
    return (t = this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, t) {
    if (t === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(t) >= 0 : false;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((t, r) => t.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ee(this.map.entries()).flatMap(([e, t]) => t.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ee(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ee(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ee(this.map.entries());
  }
};
var al = class {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.set(t, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const t = this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), true) : false;
  }
};
var Am = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, t = V.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, t, r = js, i = V.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, t);
    for (const a2 of r(e))
      await Ae(i), this.exportNode(a2, s, t);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, t, r) {
    const i = this.nameProvider.getName(e);
    i && t.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, t = V.CancellationToken.None) {
    const r = e.parseResult.value, i = new ui();
    for (const s of er(r))
      await Ae(t), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, t, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, t));
    }
  }
};
var ol = class {
  constructor(e, t, r) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : false;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const t = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (t)
      return t;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
};
var Em = class {
  constructor(e, t, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : false;
    for (const s of e) {
      const a2 = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a2, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    const t = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(t);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ee(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
};
var ic = class {
  constructor() {
    this.toDispose = [], this.isDisposed = false;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
};
var km = class extends ic {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (t) {
      const r = t();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
};
var $m = class extends ic {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, r);
  }
  get(e, t, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(t))
      return i.get(t);
    if (r) {
      const s = r();
      return i.set(t, s), s;
    } else
      return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const t = this.converter(e);
      this.cache.delete(t);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const t = this.converter(e);
    let r = this.cache.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(t, r)), r;
  }
};
var xm = class extends km {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, t) {
    super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
};
var Sm = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new xm(e.shared);
  }
  getScope(e) {
    const t = [], r = this.reflection.getReferenceType(e), i = Ze(e.container).precomputedScopes;
    if (i) {
      let a2 = e.container;
      do {
        const o = i.get(a2);
        o.length > 0 && t.push(ee(o).filter((l) => this.reflection.isSubtype(l.type, r))), a2 = a2.$container;
      } while (a2);
    }
    let s = this.getGlobalScope(r, e);
    for (let a2 = t.length - 1; a2 >= 0; a2--)
      s = this.createScope(t[a2], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, t, r) {
    return new ol(ee(e), t, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, t, r) {
    const i = ee(e).map((s) => {
      const a2 = this.nameProvider.getName(s);
      if (a2)
        return this.descriptions.createDescription(s, a2);
    }).nonNullable();
    return new ol(i, t, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new Em(this.indexManager.allElements(e)));
  }
};
function Cm(n) {
  return typeof n.$comment == "string";
}
function ll(n) {
  return typeof n == "object" && !!n && ("$ref" in n || "$error" in n);
}
var Im = class {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    const r = t ?? {}, i = t == null ? void 0 : t.replacer, s = (o, l) => this.replacer(o, l, r), a2 = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = Ze(e), JSON.stringify(e, a2, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    const r = t ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, t, { refText: r, sourceText: i, textRegions: s, comments: a2, uriConverter: o }) {
    var l, u, c, d;
    if (!this.ignoreProperties.has(e))
      if (Ue(t)) {
        const h = t.ref, f = r ? t.$refText : void 0;
        if (h) {
          const m = Ze(h);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, t) : g = m.uri.toString());
          const A = this.astNodeLocator.getAstNodePath(h);
          return {
            $ref: `${g}#${A}`,
            $refText: f
          };
        } else
          return {
            $error: (u = (l = t.error) === null || l === void 0 ? void 0 : l.message) !== null && u !== void 0 ? u : "Could not resolve reference",
            $refText: f
          };
      } else if (ae(t)) {
        let h;
        if (s && (h = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t)), (!e || t.$document) && (h == null ? void 0 : h.$textRegion) && (h.$textRegion.documentURI = (c = this.currentDocument) === null || c === void 0 ? void 0 : c.uri.toString())), i && !e && (h ?? (h = Object.assign({}, t)), h.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), a2) {
          h ?? (h = Object.assign({}, t));
          const f = this.commentProvider.getComment(t);
          f && (h.$comment = f.replace(/\r/g, ""));
        }
        return h ?? t;
      } else
        return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const t = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = t(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a2 = Vd(e.$cstNode, s).map(t);
        a2.length !== 0 && (i[s] = a2);
      }), e;
    }
  }
  linkNode(e, t, r, i, s, a2) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let c = 0; c < u.length; c++) {
          const d = u[c];
          ll(d) ? u[c] = this.reviveReference(e, l, t, d, r) : ae(d) && this.linkNode(d, t, r, e, l, c);
        }
      else ll(u) ? e[l] = this.reviveReference(e, l, t, u, r) : ae(u) && this.linkNode(u, t, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a2;
  }
  reviveReference(e, t, r, i, s) {
    let a2 = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ae(l))
        return a2 || (a2 = this.nameProvider.getName(l)), {
          $refText: a2 ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a2 ?? ""
      };
      return l.error = {
        container: e,
        property: t,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, t, r) {
    try {
      const i = t.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, t.substring(1));
        return l || "Could not resolve path: " + t;
      }
      if (i < 0) {
        const l = r ? r(t) : vt.parse(t), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + t;
      }
      const s = r ? r(t.substring(0, i)) : vt.parse(t.substring(0, i)), a2 = this.langiumDocuments.getDocument(s);
      if (!a2)
        return "Could not find document for URI: " + t;
      if (i === t.length - 1)
        return a2.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a2.parseResult.value, t.substring(i + 1));
      return o || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
};
var Nm = class {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    const t = e.LanguageMetaData;
    for (const r of t.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = rt.extname(e), a2 = this.fileExtensionMap.get(s);
    if (!a2)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a2;
  }
  hasServices(e) {
    try {
      return this.getServices(e), true;
    } catch {
      return false;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
};
function Vn2(n) {
  return { code: n };
}
var ci;
(function(n) {
  n.all = ["fast", "slow", "built-in"];
})(ci || (ci = {}));
var wm = class {
  constructor(e) {
    this.entries = new ui(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, t = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a2 = s;
      if (Array.isArray(a2))
        for (const o of a2) {
          const l = {
            check: this.wrapValidationException(o, t),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a2 == "function") {
        const o = {
          check: this.wrapValidationException(a2, t),
          category: r
        };
        this.addEntry(i, o);
      } else
        Zn();
    }
  }
  wrapValidationException(e, t) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(t, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, t, r, i) {
    try {
      await e();
    } catch (s) {
      if (xi(s))
        throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a2 = s instanceof Error ? s.message : String(s);
      r("error", `${t}: ${a2}`, { node: i });
    }
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, t);
  }
  getChecks(e, t) {
    let r = ee(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return t && (r = r.filter((i) => t.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, t = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, t = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, r) {
    return async (i, s, a2, o) => {
      await this.handleException(() => e.call(r, i, s, a2, o), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
};
var Lm = class {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, t = {}, r = V.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await Ae(r), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === be.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === be.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === be.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, t, r));
    } catch (a2) {
      if (xi(a2))
        throw a2;
      console.error("An error occurred during validation:", a2);
    }
    return await Ae(r), s;
  }
  processLexingErrors(e, t, r) {
    var i, s, a2;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const u = (a2 = l.severity) !== null && a2 !== void 0 ? a2 : "error", c = {
        severity: Wi(u),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: bm(u),
        source: this.getSource()
      };
      t.push(c);
    }
  }
  processParsingErrors(e, t, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a2 = i.previousToken;
          if (isNaN(a2.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a2.endLine - 1, character: a2.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = ss(i.token);
      if (s) {
        const a2 = {
          severity: Wi("error"),
          range: s,
          message: i.message,
          data: Vn2(be.ParsingError),
          source: this.getSource()
        };
        t.push(a2);
      }
    }
  }
  processLinkingErrors(e, t, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a2 = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: be.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(this.toDiagnostic("error", s.message, a2));
      }
    }
  }
  async validateAst(e, t, r = V.CancellationToken.None) {
    const i = [], s = (a2, o, l) => {
      i.push(this.toDiagnostic(a2, o, l));
    };
    return await this.validateAstBefore(e, t, s, r), await this.validateAstNodes(e, t, s, r), await this.validateAstAfter(e, t, s, r), i;
  }
  async validateAstBefore(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a2 = this.validationRegistry.checksBefore;
    for (const o of a2)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, r, i = V.CancellationToken.None) {
    await Promise.all(wt(e).map(async (s) => {
      await Ae(i);
      const a2 = this.validationRegistry.getChecks(s.$type, t.categories);
      for (const o of a2)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a2 = this.validationRegistry.checksAfter;
    for (const o of a2)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, r) {
    return {
      message: t,
      range: _m(r),
      severity: Wi(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
};
function _m(n) {
  if (n.range)
    return n.range;
  let e;
  return typeof n.property == "string" ? e = zl(n.node.$cstNode, n.property, n.index) : typeof n.keyword == "string" && (e = Kd(n.node.$cstNode, n.keyword, n.index)), e ?? (e = n.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Wi(n) {
  switch (n) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
function bm(n) {
  switch (n) {
    case "error":
      return Vn2(be.LexingError);
    case "warning":
      return Vn2(be.LexingWarning);
    case "info":
      return Vn2(be.LexingInfo);
    case "hint":
      return Vn2(be.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
var be;
(function(n) {
  n.LexingError = "lexing-error", n.LexingWarning = "lexing-warning", n.LexingInfo = "lexing-info", n.LexingHint = "lexing-hint", n.ParsingError = "parsing-error", n.LinkingError = "linking-error";
})(be || (be = {}));
var Om = class {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, r) {
    const i = r ?? Ze(e);
    t ?? (t = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!t)
      throw new Error(`Node at path ${s} has no name.`);
    let a2;
    const o = () => {
      var l;
      return a2 ?? (a2 = Wr((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o();
      },
      selectionSegment: Wr(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
};
var Pm = class {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, t = V.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of wt(i))
      await Ae(t), Vl(s).filter((a2) => !Ir2(a2)).forEach((a2) => {
        const o = this.createDescription(a2);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const t = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!t || !r)
      return;
    const i = Ze(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: Wr(r),
      local: rt.equals(t.documentUri, i)
    };
  }
};
var Mm = class {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const t = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return t + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: t }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a2 = s.indexOf(this.indexSeparator);
      if (a2 > 0) {
        const o = s.substring(0, a2), l = parseInt(s.substring(a2 + 1)), u = i[o];
        return u == null ? void 0 : u[l];
      }
      return i[s];
    }, e);
  }
};
var Dm = ec();
var Fm = class {
  constructor(e) {
    this._ready = new ca(), this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new Dm.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, r;
    this.workspaceConfig = (r = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && r !== void 0 ? r : false;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const t = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: t.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const t = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      const r = e.settings[t];
      this.updateSectionConfiguration(t, r), this.onConfigurationSectionUpdateEmitter.fire({ section: t, configuration: r });
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, t) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
};
var zn2;
(function(n) {
  function e(t) {
    return {
      dispose: async () => await t()
    };
  }
  n.create = e;
})(zn2 || (zn2 = {}));
var Gm = class {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new ui(), this.documentPhaseListeners = new ui(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = U.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, t = {}, r = V.CancellationToken.None) {
    var i, s;
    for (const a2 of e) {
      const o = a2.uri.toString();
      if (a2.state === U.Validated) {
        if (typeof t.validation == "boolean" && t.validation)
          a2.state = U.IndexedReferences, a2.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof t.validation == "object") {
          const l = this.buildState.get(o), u = (i = l == null ? void 0 : l.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            const d = ((s = t.validation.categories) !== null && s !== void 0 ? s : ci.all).filter((h) => !u.includes(h));
            d.length > 0 && (this.buildState.set(o, {
              completed: false,
              options: {
                validation: Object.assign(Object.assign({}, t.validation), { categories: d })
              },
              result: l.result
            }), a2.state = U.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = U.Changed, await this.emitUpdate(e.map((a2) => a2.uri), []), await this.buildDocuments(e, t, r);
  }
  async update(e, t, r = V.CancellationToken.None) {
    this.currentState = U.Changed;
    for (const a2 of t)
      this.langiumDocuments.deleteDocument(a2), this.buildState.delete(a2.toString()), this.indexManager.remove(a2);
    for (const a2 of e) {
      if (!this.langiumDocuments.invalidateDocument(a2)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a2);
        l.state = U.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a2.toString());
    }
    const i = ee(e).concat(t).map((a2) => a2.toString()).toSet();
    this.langiumDocuments.all.filter((a2) => !i.has(a2.uri.toString()) && this.shouldRelink(a2, i)).forEach((a2) => {
      this.serviceRegistry.getServices(a2.uri).references.Linker.unlink(a2), a2.state = Math.min(a2.state, U.ComputedScopes), a2.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await Ae(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a2) => {
      var o;
      return a2.state < U.Linked || !(!((o = this.buildState.get(a2.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, t) {
    await Promise.all(this.updateListeners.map((r) => r(e, t)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let t = 0, r = e.length - 1;
    for (; t < r; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); )
        t++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      t < r && ([e[t], e[r]] = [e[r], e[t]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, t) {
    return e.references.some((r) => r.error !== void 0) ? true : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), zn2.create(() => {
      const t = this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, t, r) {
    this.prepareBuild(e, t), await this.runCancelable(e, U.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, U.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, U.ComputedScopes, r, async (s) => {
      const a2 = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a2.computeLocalScopes(s, r);
    }), await this.runCancelable(e, U.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, U.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, U.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a2 = this.buildState.get(s.uri.toString());
      a2 && (a2.completed = true);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, t) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: false,
        options: t,
        result: s == null ? void 0 : s.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, t, r, i) {
    const s = e.filter((o) => o.state < t);
    for (const o of s)
      await Ae(r), await i(o), o.state = t, await this.notifyDocumentPhase(o, t, r);
    const a2 = e.filter((o) => o.state === t);
    await this.notifyBuildPhase(a2, t, r), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), zn2.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), zn2.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, r) {
    let i;
    if (t && "path" in t ? i = t : r = t, r ?? (r = V.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(li) : new Promise((s, a2) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const u = this.langiumDocuments.getDocument(i);
          s(u == null ? void 0 : u.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a2(li);
      });
    });
  }
  async notifyDocumentPhase(e, t, r) {
    const s = this.documentPhaseListeners.get(t).slice();
    for (const a2 of s)
      try {
        await a2(e, r);
      } catch (o) {
        if (!xi(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, t, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(t).slice();
    for (const a2 of s)
      await Ae(r), await a2(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, t) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a2 = this.getBuildOptions(e).validation, o = typeof a2 == "object" ? a2 : void 0, l = await s.validateDocument(e, o, t);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const u = this.buildState.get(e.uri.toString());
    if (u) {
      (r = u.result) !== null && r !== void 0 || (u.result = {});
      const c = (i = o == null ? void 0 : o.categories) !== null && i !== void 0 ? i : ci.all;
      u.result.validationChecks ? u.result.validationChecks.push(...c) : u.result.validationChecks = [...c];
    }
  }
  getBuildOptions(e) {
    var t, r;
    return (r = (t = this.buildState.get(e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && r !== void 0 ? r : {};
  }
};
var Um = class {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new $m(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    const r = Ze(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a2) => {
        rt.equals(a2.targetUri, r) && a2.targetPath === t && i.push(a2);
      });
    }), ee(i);
  }
  allElements(e, t) {
    let r = ee(this.symbolIndex.keys());
    return t && (r = r.filter((i) => !t || t.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var r;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, t));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const t = e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, t) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && t.has(i.targetUri.toString())) : false;
  }
};
var Bm = class {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new ca(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], t);
    });
  }
  async initializeWorkspace(e, t = V.CancellationToken.None) {
    const r = await this.performStartup(e);
    await Ae(t), await this.documentBuilder.build(r, this.initialBuildOptions, t);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const t = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return vt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, t, r, i) {
    const s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(s.map(async (a2) => {
      if (this.includeEntry(e, a2, r)) {
        if (a2.isDirectory)
          await this.traverseFolder(e, a2.uri, r, i);
        else if (a2.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a2.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, t, r) {
    const i = rt.basename(t.uri);
    if (i.startsWith("."))
      return false;
    if (t.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      const s = rt.extname(t.uri);
      return r.includes(s);
    }
    return false;
  }
};
var Vm = class {
  buildUnexpectedCharactersMessage(e, t, r, i, s) {
    return ds.buildUnexpectedCharactersMessage(e, t, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return ds.buildUnableToPopLexerModeMessage(e);
  }
};
var Km = { mode: "full" };
var Wm = class {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const t = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(t);
    const r = ul(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new fe(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, t = Km) {
    var r, i, s;
    const a2 = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a2.tokens,
      errors: a2.errors,
      hidden: (r = a2.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (ul(e))
      return e;
    const t = sc(e) ? Object.values(e.modes).flat() : e, r = {};
    return t.forEach((i) => r[i.name] = i), r;
  }
};
function Hm(n) {
  return Array.isArray(n) && (n.length === 0 || "name" in n[0]);
}
function sc(n) {
  return n && "modes" in n && "defaultMode" in n;
}
function ul(n) {
  return !Hm(n) && !sc(n);
}
function jm(n, e, t) {
  let r, i;
  typeof n == "string" ? (i = e, r = t) : (i = n.range.start, r = e), i || (i = P.create(0, 0));
  const s = ac2(n), a2 = da(r), o = Ym({
    lines: s,
    position: i,
    options: a2
  });
  return eg({
    index: 0,
    tokens: o,
    position: i
  });
}
function zm(n, e) {
  const t = da(e), r = ac2(n);
  if (r.length === 0)
    return false;
  const i = r[0], s = r[r.length - 1], a2 = t.start, o = t.end;
  return !!(a2 == null ? void 0 : a2.exec(i)) && !!(o == null ? void 0 : o.exec(s));
}
function ac2(n) {
  let e = "";
  return typeof n == "string" ? e = n : e = n.text, e.split(wd);
}
var cl = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
var qm = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function Ym(n) {
  var e, t, r;
  const i = [];
  let s = n.position.line, a2 = n.position.character;
  for (let o = 0; o < n.lines.length; o++) {
    const l = o === 0, u = o === n.lines.length - 1;
    let c = n.lines[o], d = 0;
    if (l && n.options.start) {
      const f = (e = n.options.start) === null || e === void 0 ? void 0 : e.exec(c);
      f && (d = f.index + f[0].length);
    } else {
      const f = (t = n.options.line) === null || t === void 0 ? void 0 : t.exec(c);
      f && (d = f.index + f[0].length);
    }
    if (u) {
      const f = (r = n.options.end) === null || r === void 0 ? void 0 : r.exec(c);
      f && (c = c.substring(0, f.index));
    }
    if (c = c.substring(0, Zm(c)), Ds(c, d) >= c.length) {
      if (i.length > 0) {
        const f = P.create(s, a2);
        i.push({
          type: "break",
          content: "",
          range: O.create(f, f)
        });
      }
    } else {
      cl.lastIndex = d;
      const f = cl.exec(c);
      if (f) {
        const m = f[0], g = f[1], A = P.create(s, a2 + d), T = P.create(s, a2 + d + m.length);
        i.push({
          type: "tag",
          content: g,
          range: O.create(A, T)
        }), d += m.length, d = Ds(c, d);
      }
      if (d < c.length) {
        const m = c.substring(d), g = Array.from(m.matchAll(qm));
        i.push(...Xm(g, m, s, a2 + d));
      }
    }
    s++, a2 = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function Xm(n, e, t, r) {
  const i = [];
  if (n.length === 0) {
    const s = P.create(t, r), a2 = P.create(t, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: O.create(s, a2)
    });
  } else {
    let s = 0;
    for (const o of n) {
      const l = o.index, u = e.substring(s, l);
      u.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: O.create(P.create(t, s + r), P.create(t, l + r))
      });
      let c = u.length + 1;
      const d = o[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: O.create(P.create(t, s + c + r), P.create(t, s + c + d.length + r))
      }), c += d.length, o.length === 4) {
        c += o[2].length;
        const h = o[3];
        i.push({
          type: "text",
          content: h,
          range: O.create(P.create(t, s + c + r), P.create(t, s + c + h.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: O.create(P.create(t, s + c + r), P.create(t, s + c + r))
        });
      s = l + o[0].length;
    }
    const a2 = e.substring(s);
    a2.length > 0 && i.push({
      type: "text",
      content: a2,
      range: O.create(P.create(t, s + r), P.create(t, s + r + a2.length))
    });
  }
  return i;
}
var Jm = /\S/;
var Qm = /\s*$/;
function Ds(n, e) {
  const t = n.substring(e).match(Jm);
  return t ? e + t.index : n.length;
}
function Zm(n) {
  const e = n.match(Qm);
  if (e && typeof e.index == "number")
    return e.index;
}
function eg(n) {
  var e, t, r, i;
  const s = P.create(n.position.line, n.position.character);
  if (n.tokens.length === 0)
    return new dl([], O.create(s, s));
  const a2 = [];
  for (; n.index < n.tokens.length; ) {
    const u = tg(n, a2[a2.length - 1]);
    u && a2.push(u);
  }
  const o = (t = (e = a2[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, l = (i = (r = a2[a2.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new dl(a2, O.create(o, l));
}
function tg(n, e) {
  const t = n.tokens[n.index];
  if (t.type === "tag")
    return lc(n, false);
  if (t.type === "text" || t.type === "inline-tag")
    return oc2(n);
  ng(t, e), n.index++;
}
function ng(n, e) {
  if (e) {
    const t = new cc("", n.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
function oc2(n) {
  let e = n.tokens[n.index];
  const t = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(rg(n)), r = e, e = n.tokens[n.index];
  return new Fs(i, O.create(t.range.start, r.range.end));
}
function rg(n) {
  return n.tokens[n.index].type === "inline-tag" ? lc(n, true) : uc(n);
}
function lc(n, e) {
  const t = n.tokens[n.index++], r = t.content.substring(1), i = n.tokens[n.index];
  if ((i == null ? void 0 : i.type) === "text")
    if (e) {
      const s = uc(n);
      return new ji(r, new Fs([s], s.range), e, O.create(t.range.start, s.range.end));
    } else {
      const s = oc2(n);
      return new ji(r, s, e, O.create(t.range.start, s.range.end));
    }
  else {
    const s = t.range;
    return new ji(r, new Fs([], s), e, s);
  }
}
function uc(n) {
  const e = n.tokens[n.index++];
  return new cc(e.content, e.range);
}
function da(n) {
  if (!n)
    return da({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: t, line: r } = n;
  return {
    start: Hi(e, true),
    end: Hi(t, false),
    line: Hi(r, true)
  };
}
function Hi(n, e) {
  if (typeof n == "string" || typeof n == "object") {
    const t = typeof n == "string" ? yi(n) : n.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else
    return n;
}
var dl = class {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const t of this.elements)
      if (e.length === 0)
        e = t.toString();
      else {
        const r = t.toString();
        e += fl(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (const r of this.elements)
      if (t.length === 0)
        t = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        t += fl(t) + i;
      }
    return t.trim();
  }
};
var ji = class {
  constructor(e, t, r, i) {
    this.name = e, this.content = t, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const t = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, r;
    return (r = (t = e == null ? void 0 : e.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const t = this.content.toMarkdown(e);
    if (this.inline) {
      const s = ig(this.name, t, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? r = "*" : (e == null ? void 0 : e.tag) === "bold" ? r = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
};
function ig(n, e, t) {
  var r, i;
  if (n === "linkplain" || n === "linkcode" || n === "link") {
    const s = e.indexOf(" ");
    let a2 = e;
    if (s > 0) {
      const l = Ds(e, s);
      a2 = e.substring(l), e = e.substring(0, s);
    }
    return (n === "linkcode" || n === "link" && t.link === "code") && (a2 = `\`${a2}\``), (i = (r = t.renderLink) === null || r === void 0 ? void 0 : r.call(t, e, a2)) !== null && i !== void 0 ? i : sg(e, a2);
  }
}
function sg(n, e) {
  try {
    return vt.parse(n, true), `[${e}](${n})`;
  } catch {
    return n;
  }
}
var Fs = class {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      const r = this.inlines[t], i = this.inlines[t + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      t += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
};
var cc = class {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
};
function fl(n) {
  return n.endsWith(`
`) ? `
` : `

`;
}
var ag = class {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const t = this.commentProvider.getComment(e);
    if (t && zm(t))
      return jm(t).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, t, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      const a2 = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a2},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    const i = Ze(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === t);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((i) => i.name === t);
  }
};
var og = class {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return Cm(e) ? e.$comment : (t = ad(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
};
var lg = class {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(this.syncParser.parse(e));
  }
};
var ug = class {
  constructor() {
    this.previousTokenSource = new V.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e) {
    this.cancelWrite();
    const t = hm();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, r = V.CancellationToken.None) {
    const i = new ca(), s = {
      action: t,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = false, await Promise.all(e.map(async ({ action: t, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => t(i));
        r.resolve(s);
      } catch (s) {
        xi(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
};
var cg = class {
  constructor(e) {
    this.grammarElementIdMap = new al(), this.tokenTypeIdMap = new al(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((t) => Object.assign(Object.assign({}, t), { message: t.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of wt(e))
      t.set(i, {});
    if (e.$cstNode)
      for (const i of is(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a2 = [];
          r[i] = a2;
          for (const o of s)
            ae(o) ? a2.push(this.dehydrateAstNode(o, t)) : Ue(o) ? a2.push(this.dehydrateReference(o, t)) : a2.push(o);
        } else ae(s) ? r[i] = this.dehydrateAstNode(s, t) : Ue(s) ? r[i] = this.dehydrateReference(s, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, t) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = t.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, t) {
    const r = t.cstNodes.get(e);
    return Ol(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = t.astNodes.get(e.astNode), Yn(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, t)) : bl(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const t = e.value, r = this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(t, r)
    };
  }
  createHydrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of wt(e))
      t.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of is(e.$cstNode)) {
        let a2;
        "fullText" in s ? (a2 = new Ku(s.fullText), i = a2) : "content" in s ? a2 = new la() : "tokenType" in s && (a2 = this.hydrateCstLeafNode(s)), a2 && (r.set(s, a2), a2.root = i);
      }
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  hydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = t.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a2 = [];
          r[i] = a2;
          for (const o of s)
            ae(o) ? a2.push(this.setParent(this.hydrateAstNode(o, t), r)) : Ue(o) ? a2.push(this.hydrateReference(o, r, i, t)) : a2.push(o);
        } else ae(s) ? r[i] = this.setParent(this.hydrateAstNode(s, t), r) : Ue(s) ? r[i] = this.hydrateReference(s, r, i, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, r, i) {
    return this.linker.buildReference(t, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t, r = 0) {
    const i = t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = t.astNodes.get(e.astNode), Yn(i))
      for (const s of e.content) {
        const a2 = this.hydrateCstNode(s, t, r++);
        i.content.push(a2);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const t = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a2 = e.startColumn, o = e.endLine, l = e.endColumn, u = e.hidden;
    return new _s(r, i, {
      start: {
        line: s,
        character: a2
      },
      end: {
        line: o,
        character: l
      }
    }, t, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const t of wt(this.grammar))
      ld(t) && this.grammarElementIdMap.set(t, e++);
  }
};
function at(n) {
  return {
    documentation: {
      CommentProvider: (e) => new og(e),
      DocumentationProvider: (e) => new ag(e)
    },
    parser: {
      AsyncParser: (e) => new lg(e),
      GrammarConfig: (e) => Zd(e),
      LangiumParser: (e) => om(e),
      CompletionParser: (e) => am(e),
      ValueConverter: () => new Qu(),
      TokenBuilder: () => new Ju(),
      Lexer: (e) => new Wm(e),
      ParserErrorMessageProvider: () => new ju(),
      LexerErrorMessageProvider: () => new Vm()
    },
    workspace: {
      AstNodeLocator: () => new Mm(),
      AstNodeDescriptionProvider: (e) => new Om(e),
      ReferenceDescriptionProvider: (e) => new Pm(e)
    },
    references: {
      Linker: (e) => new ym(e),
      NameProvider: () => new Rm(),
      ScopeProvider: (e) => new Sm(e),
      ScopeComputation: (e) => new Am(e),
      References: (e) => new vm(e)
    },
    serializer: {
      Hydrator: (e) => new cg(e),
      JsonSerializer: (e) => new Im(e)
    },
    validation: {
      DocumentValidator: (e) => new Lm(e),
      ValidationRegistry: (e) => new wm(e)
    },
    shared: () => n.shared
  };
}
function ot(n) {
  return {
    ServiceRegistry: (e) => new Nm(e),
    workspace: {
      LangiumDocuments: (e) => new gm(e),
      LangiumDocumentFactory: (e) => new mm(e),
      DocumentBuilder: (e) => new Gm(e),
      IndexManager: (e) => new Um(e),
      WorkspaceManager: (e) => new Bm(e),
      FileSystemProvider: (e) => n.fileSystemProvider(e),
      WorkspaceLock: () => new ug(),
      ConfigurationProvider: (e) => new Fm(e)
    }
  };
}
var hl;
(function(n) {
  n.merge = (e, t) => di(di({}, e), t);
})(hl || (hl = {}));
function oe(n, e, t, r, i, s, a2, o, l) {
  const u = [n, e, t, r, i, s, a2, o, l].reduce(di, {});
  return dc(u);
}
var dg = Symbol("isProxy");
function dc(n, e) {
  const t = new Proxy({}, {
    deleteProperty: () => false,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === dg ? true : ml(r, i, n, e || t),
    getOwnPropertyDescriptor: (r, i) => (ml(r, i, n, e || t), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in n,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(n)]
    // used by for..in
  });
  return t;
}
var pl = Symbol();
function ml(n, e, t, r) {
  if (e in n) {
    if (n[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: n[e] });
    if (n[e] === pl)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return n[e];
  } else if (e in t) {
    const i = t[e];
    n[e] = pl;
    try {
      n[e] = typeof i == "function" ? i(r) : dc(i, r);
    } catch (s) {
      throw n[e] = s instanceof Error ? s : void 0, s;
    }
    return n[e];
  } else
    return;
}
function di(n, e) {
  if (e) {
    for (const [t, r] of Object.entries(e))
      if (r !== void 0) {
        const i = n[t];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? n[t] = di(i, r) : n[t] = r;
      }
  }
  return n;
}
var fg = class {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
};
var lt = {
  fileSystemProvider: () => new fg()
};
var hg = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: false,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
};
var pg = {
  AstReflection: () => new Bl()
};
function mg() {
  const n = oe(ot(lt), pg), e = oe(at({ shared: n }), hg);
  return n.ServiceRegistry.register(e), e;
}
function $t2(n) {
  var e;
  const t = mg(), r = t.serializer.JsonSerializer.deserialize(n);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(r, vt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var gg = Object.defineProperty;
var v = (n, e) => gg(n, "name", { value: e, configurable: true });
var gl = "Statement";
var Mr = "Architecture";
function yg(n) {
  return De.isInstance(n, Mr);
}
v(yg, "isArchitecture");
var Ar = "Axis";
var Kn = "Branch";
function Tg(n) {
  return De.isInstance(n, Kn);
}
v(Tg, "isBranch");
var Er = "Checkout";
var kr = "CherryPicking";
var zi = "ClassDefStatement";
var Wn = "Commit";
function Rg(n) {
  return De.isInstance(n, Wn);
}
v(Rg, "isCommit");
var qi = "Curve";
var Yi = "Edge";
var Xi = "Entry";
var Hn = "GitGraph";
function vg(n) {
  return De.isInstance(n, Hn);
}
v(vg, "isGitGraph");
var Ji = "Group";
var Dr = "Info";
function Ag(n) {
  return De.isInstance(n, Dr);
}
v(Ag, "isInfo");
var $r = "Item";
var Qi = "Junction";
var jn = "Merge";
function Eg(n) {
  return De.isInstance(n, jn);
}
v(Eg, "isMerge");
var Zi = "Option";
var Fr = "Packet";
function kg(n) {
  return De.isInstance(n, Fr);
}
v(kg, "isPacket");
var Gr = "PacketBlock";
function $g(n) {
  return De.isInstance(n, Gr);
}
v($g, "isPacketBlock");
var Ur = "Pie";
function xg(n) {
  return De.isInstance(n, Ur);
}
v(xg, "isPie");
var Br = "PieSection";
function Sg(n) {
  return De.isInstance(n, Br);
}
v(Sg, "isPieSection");
var es = "Radar";
var ts = "Service";
var Vr = "Treemap";
function Cg(n) {
  return De.isInstance(n, Vr);
}
v(Cg, "isTreemap");
var ns = "TreemapRow";
var xr = "Direction";
var Sr = "Leaf";
var Cr = "Section";
var _t2;
var fc = (_t2 = class extends _l {
  getAllTypes() {
    return [Mr, Ar, Kn, Er, kr, zi, Wn, qi, xr, Yi, Xi, Hn, Ji, Dr, $r, Qi, Sr, jn, Zi, Fr, Gr, Ur, Br, es, Cr, ts, gl, Vr, ns];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case Kn:
      case Er:
      case kr:
      case Wn:
      case jn:
        return this.isSubtype(gl, t);
      case xr:
        return this.isSubtype(Hn, t);
      case Sr:
      case Cr:
        return this.isSubtype($r, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Entry:axis":
        return Ar;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case Mr:
        return {
          name: Mr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case Kn:
        return {
          name: Kn,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case Er:
        return {
          name: Er,
          properties: [
            { name: "branch" }
          ]
        };
      case kr:
        return {
          name: kr,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case zi:
        return {
          name: zi,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      case Wn:
        return {
          name: Wn,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case qi:
        return {
          name: qi,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case Yi:
        return {
          name: Yi,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: false },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: false },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: false },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: false },
            { name: "title" }
          ]
        };
      case Xi:
        return {
          name: Xi,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case Hn:
        return {
          name: Hn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ji:
        return {
          name: Ji,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Dr:
        return {
          name: Dr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case $r:
        return {
          name: $r,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      case Qi:
        return {
          name: Qi,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case jn:
        return {
          name: jn,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case Zi:
        return {
          name: Zi,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: false }
          ]
        };
      case Fr:
        return {
          name: Fr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Gr:
        return {
          name: Gr,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Ur:
        return {
          name: Ur,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: false },
            { name: "title" }
          ]
        };
      case Br:
        return {
          name: Br,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case es:
        return {
          name: es,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case ts:
        return {
          name: ts,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Vr:
        return {
          name: Vr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      case ns:
        return {
          name: ns,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      case xr:
        return {
          name: xr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Sr:
        return {
          name: Sr,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      case Cr:
        return {
          name: Cr,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, v(_t2, "MermaidAstReflection"), _t2);
var De = new fc();
var yl;
var Ig = v(() => yl ?? (yl = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar");
var Tl;
var Ng = v(() => Tl ?? (Tl = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar");
var Rl;
var wg = v(() => Rl ?? (Rl = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar");
var vl;
var Lg = v(() => vl ?? (vl = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar");
var Al;
var _g2 = v(() => Al ?? (Al = $t2(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar");
var El;
var bg = v(() => El ?? (El = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar");
var kl;
var Og = v(() => kl ?? (kl = $t2(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar");
var Pg = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Mg = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Dg = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Fg = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Gg = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Ug = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Bg = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var xt = {
  AstReflection: v(() => new fc(), "AstReflection")
};
var Vg = {
  Grammar: v(() => Ig(), "Grammar"),
  LanguageMetaData: v(() => Pg, "LanguageMetaData"),
  parser: {}
};
var Kg = {
  Grammar: v(() => Ng(), "Grammar"),
  LanguageMetaData: v(() => Mg, "LanguageMetaData"),
  parser: {}
};
var Wg = {
  Grammar: v(() => wg(), "Grammar"),
  LanguageMetaData: v(() => Dg, "LanguageMetaData"),
  parser: {}
};
var Hg = {
  Grammar: v(() => Lg(), "Grammar"),
  LanguageMetaData: v(() => Fg, "LanguageMetaData"),
  parser: {}
};
var jg = {
  Grammar: v(() => _g2(), "Grammar"),
  LanguageMetaData: v(() => Gg, "LanguageMetaData"),
  parser: {}
};
var zg = {
  Grammar: v(() => bg(), "Grammar"),
  LanguageMetaData: v(() => Ug, "LanguageMetaData"),
  parser: {}
};
var qg = {
  Grammar: v(() => Og(), "Grammar"),
  LanguageMetaData: v(() => Bg, "LanguageMetaData"),
  parser: {}
};
var Yg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/;
var Xg = /accTitle[\t ]*:([^\n\r]*)/;
var Jg = /title([\t ][^\n\r]*|)/;
var Qg = {
  ACC_DESCR: Yg,
  ACC_TITLE: Xg,
  TITLE: Jg
};
var bt;
var Si = (bt = class extends Qu {
  runConverter(e, t, r) {
    let i = this.runCommonConverter(e, t, r);
    return i === void 0 && (i = this.runCustomConverter(e, t, r)), i === void 0 ? super.runConverter(e, t, r) : i;
  }
  runCommonConverter(e, t, r) {
    const i = Qg[e.name];
    if (i === void 0)
      return;
    const s = i.exec(t);
    if (s !== null) {
      if (s[1] !== void 0)
        return s[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (s[2] !== void 0)
        return s[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, v(bt, "AbstractMermaidValueConverter"), bt);
var Ot2;
var Ci = (Ot2 = class extends Si {
  runCustomConverter(e, t, r) {
  }
}, v(Ot2, "CommonValueConverter"), Ot2);
var Pt2;
var ut = (Pt2 = class extends Ju {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, t, r) {
    const i = super.buildKeywordTokens(e, t, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, v(Pt2, "AbstractMermaidTokenBuilder"), Pt2);
var Mt;
Mt = class extends ut {
}, v(Mt, "CommonTokenBuilder");
var Dt;
var Zg = (Dt = class extends ut {
  constructor() {
    super(["gitGraph"]);
  }
}, v(Dt, "GitGraphTokenBuilder"), Dt);
var ey = {
  parser: {
    TokenBuilder: v(() => new Zg(), "TokenBuilder"),
    ValueConverter: v(() => new Ci(), "ValueConverter")
  }
};
function ty(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    jg,
    ey
  );
  return e.ServiceRegistry.register(t), { shared: e, GitGraph: t };
}
v(ty, "createGitGraphServices");
var Ft;
var ny = (Ft = class extends ut {
  constructor() {
    super(["info", "showInfo"]);
  }
}, v(Ft, "InfoTokenBuilder"), Ft);
var ry = {
  parser: {
    TokenBuilder: v(() => new ny(), "TokenBuilder"),
    ValueConverter: v(() => new Ci(), "ValueConverter")
  }
};
function iy(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    Vg,
    ry
  );
  return e.ServiceRegistry.register(t), { shared: e, Info: t };
}
v(iy, "createInfoServices");
var Gt;
var sy = (Gt = class extends ut {
  constructor() {
    super(["packet"]);
  }
}, v(Gt, "PacketTokenBuilder"), Gt);
var ay = {
  parser: {
    TokenBuilder: v(() => new sy(), "TokenBuilder"),
    ValueConverter: v(() => new Ci(), "ValueConverter")
  }
};
function oy(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    Kg,
    ay
  );
  return e.ServiceRegistry.register(t), { shared: e, Packet: t };
}
v(oy, "createPacketServices");
var Ut;
var ly = (Ut = class extends ut {
  constructor() {
    super(["pie", "showData"]);
  }
}, v(Ut, "PieTokenBuilder"), Ut);
var Bt;
var uy = (Bt = class extends Si {
  runCustomConverter(e, t, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return t.replace(/"/g, "").trim();
  }
}, v(Bt, "PieValueConverter"), Bt);
var cy = {
  parser: {
    TokenBuilder: v(() => new ly(), "TokenBuilder"),
    ValueConverter: v(() => new uy(), "ValueConverter")
  }
};
function dy(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    Wg,
    cy
  );
  return e.ServiceRegistry.register(t), { shared: e, Pie: t };
}
v(dy, "createPieServices");
var Vt;
var fy = (Vt = class extends ut {
  constructor() {
    super(["architecture"]);
  }
}, v(Vt, "ArchitectureTokenBuilder"), Vt);
var Kt;
var hy = (Kt = class extends Si {
  runCustomConverter(e, t, r) {
    if (e.name === "ARCH_ICON")
      return t.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return t.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return t.replace(/[[\]]/g, "").trim();
  }
}, v(Kt, "ArchitectureValueConverter"), Kt);
var py = {
  parser: {
    TokenBuilder: v(() => new fy(), "TokenBuilder"),
    ValueConverter: v(() => new hy(), "ValueConverter")
  }
};
function my(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    Hg,
    py
  );
  return e.ServiceRegistry.register(t), { shared: e, Architecture: t };
}
v(my, "createArchitectureServices");
var Wt;
var gy = (Wt = class extends ut {
  constructor() {
    super(["radar-beta"]);
  }
}, v(Wt, "RadarTokenBuilder"), Wt);
var yy = {
  parser: {
    TokenBuilder: v(() => new gy(), "TokenBuilder"),
    ValueConverter: v(() => new Ci(), "ValueConverter")
  }
};
function Ty(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    zg,
    yy
  );
  return e.ServiceRegistry.register(t), { shared: e, Radar: t };
}
v(Ty, "createRadarServices");
var Ht;
var Ry = (Ht = class extends ut {
  constructor() {
    super(["treemap"]);
  }
}, v(Ht, "TreemapTokenBuilder"), Ht);
var vy = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
var jt;
var Ay = (jt = class extends Si {
  runCustomConverter(e, t, r) {
    if (e.name === "NUMBER2")
      return parseFloat(t.replace(/,/g, ""));
    if (e.name === "SEPARATOR")
      return t.substring(1, t.length - 1);
    if (e.name === "STRING2")
      return t.substring(1, t.length - 1);
    if (e.name === "INDENTATION")
      return t.length;
    if (e.name === "ClassDef") {
      if (typeof t != "string")
        return t;
      const i = vy.exec(t);
      if (i)
        return {
          $type: "ClassDefStatement",
          className: i[1],
          styleText: i[2] || void 0
        };
    }
  }
}, v(jt, "TreemapValueConverter"), jt);
function hc(n) {
  const e = n.validation.TreemapValidator, t = n.validation.ValidationRegistry;
  if (t) {
    const r = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    t.register(r, e);
  }
}
v(hc, "registerValidationChecks");
var zt;
var Ey = (zt = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(e, t) {
    let r;
    for (const i of e.TreemapRows)
      i.item && (r === void 0 && // Check if this is a root node (no indentation)
      i.indent === void 0 ? r = 0 : i.indent === void 0 ? t("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }) : r !== void 0 && r >= parseInt(i.indent, 10) && t("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }));
  }
}, v(zt, "TreemapValidator"), zt);
var ky = {
  parser: {
    TokenBuilder: v(() => new Ry(), "TokenBuilder"),
    ValueConverter: v(() => new Ay(), "ValueConverter")
  },
  validation: {
    TreemapValidator: v(() => new Ey(), "TreemapValidator")
  }
};
function $y(n = lt) {
  const e = oe(
    ot(n),
    xt
  ), t = oe(
    at({ shared: e }),
    qg,
    ky
  );
  return e.ServiceRegistry.register(t), hc(t), { shared: e, Treemap: t };
}
v($y, "createTreemapServices");
var He = {};
var xy = {
  info: v(async () => {
    const { createInfoServices: n } = await import("./info-63CPKGFF-mz_46UGY-MDUYMDJG.js"), e = n().Info.parser.LangiumParser;
    He.info = e;
  }, "info"),
  packet: v(async () => {
    const { createPacketServices: n } = await import("./packet-HUATNLJX-CSoA_VAe-IWOCEKZL.js"), e = n().Packet.parser.LangiumParser;
    He.packet = e;
  }, "packet"),
  pie: v(async () => {
    const { createPieServices: n } = await import("./pie-WTHONI2E-DZdRB7ZD-A2P6YDFT.js"), e = n().Pie.parser.LangiumParser;
    He.pie = e;
  }, "pie"),
  architecture: v(async () => {
    const { createArchitectureServices: n } = await import("./architecture-O4VJ6CD3-DDeerTBY-URVIJKOW.js"), e = n().Architecture.parser.LangiumParser;
    He.architecture = e;
  }, "architecture"),
  gitGraph: v(async () => {
    const { createGitGraphServices: n } = await import("./gitGraph-ZV4HHKMB-CFJnVQyH-2ABRS6Q5.js"), e = n().GitGraph.parser.LangiumParser;
    He.gitGraph = e;
  }, "gitGraph"),
  radar: v(async () => {
    const { createRadarServices: n } = await import("./radar-NJJJXTRR-CSKbR8EX-EMJCCF6G.js"), e = n().Radar.parser.LangiumParser;
    He.radar = e;
  }, "radar"),
  treemap: v(async () => {
    const { createTreemapServices: n } = await import("./treemap-75Q7IDZK-CIjD8Ibx-CQZ36OUT.js"), e = n().Treemap.parser.LangiumParser;
    He.treemap = e;
  }, "treemap")
};
async function Sy(n, e) {
  const t = xy[n];
  if (!t)
    throw new Error(`Unknown diagram type: ${n}`);
  He[n] || await t();
  const i = He[n].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new Cy(i);
  return i.value;
}
v(Sy, "parse");
var qt;
var Cy = (qt = class extends Error {
  constructor(e) {
    const t = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${t} ${r}`), this.result = e;
  }
}, v(qt, "MermaidParseError"), qt);

export {
  ey,
  ty,
  ry,
  iy,
  ay,
  oy,
  cy,
  dy,
  py,
  my,
  yy,
  Ty,
  ky,
  $y,
  Sy
};
//# sourceMappingURL=chunk-YIBNAT2Y.js.map
