import {
  $,
  An,
  B,
  Ln,
  Ot,
  Qn,
  Y,
  bn,
  m,
  tt,
  yn
} from "./chunk-D5X4WG6P.js";
import {
  Aa,
  Cg,
  Ir,
  Js,
  O_,
  Sa,
  _g,
  iS,
  nS,
  vg
} from "./chunk-SCO4KOO5.js";

// node_modules/vitepress-mermaid-preview/dist/_basePickBy-XITLGQxL.js
var R = /\s/;
function G(n) {
  for (var r = n.length; r-- && R.test(n.charAt(r)); )
    ;
  return r;
}
var H = /^\s+/;
function L(n) {
  return n && n.slice(0, G(n) + 1).replace(H, "");
}
var o = NaN;
var W = /^[-+]0x[0-9a-f]+$/i;
var X = /^0b[01]+$/i;
var Y2 = /^0o[0-7]+$/i;
var q = parseInt;
function z(n) {
  if (typeof n == "number")
    return n;
  if (B(n))
    return o;
  if (Ir(n)) {
    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Ir(r) ? r + "" : r;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = L(n);
  var t = X.test(n);
  return t || Y2.test(n) ? q(n.slice(2), t ? 2 : 8) : W.test(n) ? o : +n;
}
var v = 1 / 0;
var C = 17976931348623157e292;
function K(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = z(n), n === v || n === -v) {
    var r = n < 0 ? -1 : 1;
    return r * C;
  }
  return n === n ? n : 0;
}
function Q(n) {
  var r = K(n), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
function fn(n) {
  var r = n == null ? 0 : n.length;
  return r ? Ot(n) : [];
}
var b = Object.prototype;
var U = b.hasOwnProperty;
var dn = iS(function(n, r) {
  n = Object(n);
  var t = -1, i = r.length, a = i > 2 ? r[2] : void 0;
  for (a && nS(r[0], r[1], a) && (i = 1); ++t < i; )
    for (var f = r[t], e = Cg(f), s = -1, d = e.length; ++s < d; ) {
      var u = e[s], h = n[u];
      (h === void 0 || Sa(h, b[u]) && !U.call(n, u)) && (n[u] = f[u]);
    }
  return n;
});
function un(n) {
  var r = n == null ? 0 : n.length;
  return r ? n[r - 1] : void 0;
}
function D(n) {
  return function(r, t, i) {
    var a = Object(r);
    if (!Aa(r)) {
      var f = Ln(t);
      r = $(r), t = function(s) {
        return f(a[s], s, a);
      };
    }
    var e = n(r, t, i);
    return e > -1 ? a[f ? r[e] : e] : void 0;
  };
}
var J = Math.max;
function Z(n, r, t) {
  var i = n == null ? 0 : n.length;
  if (!i)
    return -1;
  var a = t == null ? 0 : Q(t);
  return a < 0 && (a = J(i + a, 0)), Qn(n, Ln(r), a);
}
var hn = D(Z);
function V(n, r) {
  var t = -1, i = Aa(n) ? Array(n.length) : [];
  return Y(n, function(a, f, e) {
    i[++t] = r(a, f, e);
  }), i;
}
function gn(n, r) {
  var t = Js(n) ? bn : V;
  return t(n, Ln(r));
}
var j = Object.prototype;
var k = j.hasOwnProperty;
function nn(n, r) {
  return n != null && k.call(n, r);
}
function mn(n, r) {
  return n != null && tt(n, r, nn);
}
function rn(n, r) {
  return n < r;
}
function tn(n, r, t) {
  for (var i = -1, a = n.length; ++i < a; ) {
    var f = n[i], e = r(f);
    if (e != null && (s === void 0 ? e === e && !B(e) : t(e, s)))
      var s = e, d = f;
  }
  return d;
}
function on(n) {
  return n && n.length ? tn(n, _g, rn) : void 0;
}
function an(n, r, t, i) {
  if (!Ir(n))
    return n;
  r = An(r, n);
  for (var a = -1, f = r.length, e = f - 1, s = n; s != null && ++a < f; ) {
    var d = m(r[a]), u = t;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return n;
    if (a != e) {
      var h = s[d];
      u = void 0, u === void 0 && (u = Ir(h) ? h : vg(r[a + 1]) ? [] : {});
    }
    O_(s, d, u), s = s[d];
  }
  return n;
}
function vn(n, r, t) {
  for (var i = -1, a = r.length, f = {}; ++i < a; ) {
    var e = r[i], s = yn(n, e);
    t(s, e) && an(f, An(e, n), s);
  }
  return f;
}

export {
  K,
  Q,
  fn,
  dn,
  un,
  hn,
  V,
  gn,
  mn,
  rn,
  tn,
  on,
  vn
};
//# sourceMappingURL=chunk-ZFVRZDKL.js.map
