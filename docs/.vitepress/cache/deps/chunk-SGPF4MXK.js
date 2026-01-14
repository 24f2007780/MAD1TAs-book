import {
  J,
  N,
  nn,
  tn
} from "./chunk-ZLWAXMUN.js";
import {
  t
} from "./chunk-6YTCN23N.js";
import {
  Ih,
  Zl,
  nr,
  t2,
  wn
} from "./chunk-SCO4KOO5.js";

// node_modules/vitepress-mermaid-preview/dist/linear-IfFQ3oxZ.js
function g(n, r) {
  return n == null || r == null ? NaN : n < r ? -1 : n > r ? 1 : n >= r ? 0 : NaN;
}
function B(n, r) {
  return n == null || r == null ? NaN : r < n ? -1 : r > n ? 1 : r >= n ? 0 : NaN;
}
function R(n) {
  let r, t3, e;
  n.length !== 2 ? (r = g, t3 = (o, c) => g(n(o), c), e = (o, c) => n(o) - c) : (r = n === g || n === B ? n : I, t3 = n, e = n);
  function u(o, c, i = 0, h = o.length) {
    if (i < h) {
      if (r(c, c) !== 0) return h;
      do {
        const l = i + h >>> 1;
        t3(o[l], c) < 0 ? i = l + 1 : h = l;
      } while (i < h);
    }
    return i;
  }
  function f(o, c, i = 0, h = o.length) {
    if (i < h) {
      if (r(c, c) !== 0) return h;
      do {
        const l = i + h >>> 1;
        t3(o[l], c) <= 0 ? i = l + 1 : h = l;
      } while (i < h);
    }
    return i;
  }
  function a(o, c, i = 0, h = o.length) {
    const l = u(o, c, i, h - 1);
    return l > i && e(o[l - 1], c) > -e(o[l], c) ? l - 1 : l;
  }
  return { left: u, center: a, right: f };
}
function I() {
  return 0;
}
function O(n) {
  return n === null ? NaN : +n;
}
var V = R(g);
var $ = V.right;
R(O).center;
var x = Math.sqrt(50);
var L = Math.sqrt(10);
var T = Math.sqrt(2);
function v(n, r, t3) {
  const e = (r - n) / Math.max(0, t3), u = Math.floor(Math.log10(e)), f = e / Math.pow(10, u), a = f >= x ? 10 : f >= L ? 5 : f >= T ? 2 : 1;
  let o, c, i;
  return u < 0 ? (i = Math.pow(10, -u) / a, o = Math.round(n * i), c = Math.round(r * i), o / i < n && ++o, c / i > r && --c, i = -i) : (i = Math.pow(10, u) * a, o = Math.round(n / i), c = Math.round(r / i), o * i < n && ++o, c * i > r && --c), c < o && 0.5 <= t3 && t3 < 2 ? v(n, r, t3 * 2) : [o, c, i];
}
function C(n, r, t3) {
  if (r = +r, n = +n, t3 = +t3, !(t3 > 0)) return [];
  if (n === r) return [n];
  const e = r < n, [u, f, a] = e ? v(r, n, t3) : v(n, r, t3);
  if (!(f >= u)) return [];
  const o = f - u + 1, c = new Array(o);
  if (e)
    if (a < 0) for (let i = 0; i < o; ++i) c[i] = (f - i) / -a;
    else for (let i = 0; i < o; ++i) c[i] = (f - i) * a;
  else if (a < 0) for (let i = 0; i < o; ++i) c[i] = (u + i) / -a;
  else for (let i = 0; i < o; ++i) c[i] = (u + i) * a;
  return c;
}
function y(n, r, t3) {
  return r = +r, n = +n, t3 = +t3, v(n, r, t3)[2];
}
function E(n, r, t3) {
  r = +r, n = +n, t3 = +t3;
  const e = r < n, u = e ? y(r, n, t3) : y(n, r, t3);
  return (e ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function G(n, r) {
  r || (r = []);
  var t3 = n ? Math.min(r.length, n.length) : 0, e = r.slice(), u;
  return function(f) {
    for (u = 0; u < t3; ++u) e[u] = n[u] * (1 - f) + r[u] * f;
    return e;
  };
}
function H(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function J2(n, r) {
  var t3 = r ? r.length : 0, e = n ? Math.min(t3, n.length) : 0, u = new Array(e), f = new Array(t3), a;
  for (a = 0; a < e; ++a) u[a] = d(n[a], r[a]);
  for (; a < t3; ++a) f[a] = r[a];
  return function(o) {
    for (a = 0; a < e; ++a) f[a] = u[a](o);
    return f;
  };
}
function K(n, r) {
  var t3 = /* @__PURE__ */ new Date();
  return n = +n, r = +r, function(e) {
    return t3.setTime(n * (1 - e) + r * e), t3;
  };
}
function Q(n, r) {
  var t3 = {}, e = {}, u;
  (n === null || typeof n != "object") && (n = {}), (r === null || typeof r != "object") && (r = {});
  for (u in r)
    u in n ? t3[u] = d(n[u], r[u]) : e[u] = r[u];
  return function(f) {
    for (u in t3) e[u] = t3[u](f);
    return e;
  };
}
function d(n, r) {
  var t3 = typeof r, e;
  return r == null || t3 === "boolean" ? Zl(r) : (t3 === "number" ? nr : t3 === "string" ? (e = wn(r)) ? (r = e, Ih) : t2 : r instanceof wn ? Ih : r instanceof Date ? K : H(r) ? G : Array.isArray(r) ? J2 : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? Q : nr)(n, r);
}
function U(n, r) {
  return n = +n, r = +r, function(t3) {
    return Math.round(n * (1 - t3) + r * t3);
  };
}
function W(n) {
  return Math.max(0, -J(Math.abs(n)));
}
function X(n, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(J(r) / 3))) * 3 - J(Math.abs(n)));
}
function Y(n, r) {
  return n = Math.abs(n), r = Math.abs(r) - n, Math.max(0, J(r) - J(n)) + 1;
}
function Z(n) {
  return function() {
    return n;
  };
}
function _(n) {
  return +n;
}
var A = [0, 1];
function m(n) {
  return n;
}
function N2(n, r) {
  return (r -= n = +n) ? function(t3) {
    return (t3 - n) / r;
  } : Z(isNaN(r) ? NaN : 0.5);
}
function b(n, r) {
  var t3;
  return n > r && (t3 = n, n = r, r = t3), function(e) {
    return Math.max(n, Math.min(r, e));
  };
}
function nn2(n, r, t3) {
  var e = n[0], u = n[1], f = r[0], a = r[1];
  return u < e ? (e = N2(u, e), f = t3(a, f)) : (e = N2(e, u), f = t3(f, a)), function(o) {
    return f(e(o));
  };
}
function rn(n, r, t3) {
  var e = Math.min(n.length, r.length) - 1, u = new Array(e), f = new Array(e), a = -1;
  for (n[e] < n[0] && (n = n.slice().reverse(), r = r.slice().reverse()); ++a < e; )
    u[a] = N2(n[a], n[a + 1]), f[a] = t3(r[a], r[a + 1]);
  return function(o) {
    var c = $(n, o, 1, e) - 1;
    return f[c](u[c](o));
  };
}
function en(n, r) {
  return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function tn2() {
  var n = A, r = A, t3 = d, e, u, f, a = m, o, c, i;
  function h() {
    var s = Math.min(n.length, r.length);
    return a !== m && (a = b(n[0], n[s - 1])), o = s > 2 ? rn : nn2, c = i = null, l;
  }
  function l(s) {
    return s == null || isNaN(s = +s) ? f : (c || (c = o(n.map(e), r, t3)))(e(a(s)));
  }
  return l.invert = function(s) {
    return a(u((i || (i = o(r, n.map(e), nr)))(s)));
  }, l.domain = function(s) {
    return arguments.length ? (n = Array.from(s, _), h()) : n.slice();
  }, l.range = function(s) {
    return arguments.length ? (r = Array.from(s), h()) : r.slice();
  }, l.rangeRound = function(s) {
    return r = Array.from(s), t3 = U, h();
  }, l.clamp = function(s) {
    return arguments.length ? (a = s ? true : m, h()) : a !== m;
  }, l.interpolate = function(s) {
    return arguments.length ? (t3 = s, h()) : t3;
  }, l.unknown = function(s) {
    return arguments.length ? (f = s, l) : f;
  }, function(s, S) {
    return e = s, u = S, h();
  };
}
function un() {
  return tn2()(m, m);
}
function an(n, r, t3, e) {
  var u = E(n, r, t3), f;
  switch (e = N(e ?? ",f"), e.type) {
    case "s": {
      var a = Math.max(Math.abs(n), Math.abs(r));
      return e.precision == null && !isNaN(f = X(u, a)) && (e.precision = f), tn(e, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      e.precision == null && !isNaN(f = Y(u, Math.max(Math.abs(n), Math.abs(r)))) && (e.precision = f - (e.type === "e"));
      break;
    }
    case "f":
    case "%": {
      e.precision == null && !isNaN(f = W(u)) && (e.precision = f - (e.type === "%") * 2);
      break;
    }
  }
  return nn(e);
}
function on(n) {
  var r = n.domain;
  return n.ticks = function(t3) {
    var e = r();
    return C(e[0], e[e.length - 1], t3 ?? 10);
  }, n.tickFormat = function(t3, e) {
    var u = r();
    return an(u[0], u[u.length - 1], t3 ?? 10, e);
  }, n.nice = function(t3) {
    t3 == null && (t3 = 10);
    var e = r(), u = 0, f = e.length - 1, a = e[u], o = e[f], c, i, h = 10;
    for (o < a && (i = a, a = o, o = i, i = u, u = f, f = i); h-- > 0; ) {
      if (i = y(a, o, t3), i === c)
        return e[u] = a, e[f] = o, r(e);
      if (i > 0)
        a = Math.floor(a / i) * i, o = Math.ceil(o / i) * i;
      else if (i < 0)
        a = Math.ceil(a * i) / i, o = Math.floor(o * i) / i;
      else
        break;
      c = i;
    }
    return n;
  }, n;
}
function fn() {
  var n = un();
  return n.copy = function() {
    return en(n, fn());
  }, t.apply(n, arguments), on(n);
}

export {
  R,
  E,
  en,
  un,
  fn
};
//# sourceMappingURL=chunk-SGPF4MXK.js.map
