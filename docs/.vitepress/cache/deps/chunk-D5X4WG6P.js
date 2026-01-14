import {
  Aa,
  Ai,
  Cg,
  Cl,
  D_,
  E_,
  Fn,
  Ik,
  Ir,
  Jh,
  Js,
  Ks,
  Li,
  Nk,
  O_,
  On,
  Pk,
  Qs,
  Sa,
  W_,
  Wk,
  _g,
  cc,
  fr,
  gg,
  jk,
  lc,
  mL,
  nu,
  vg,
  wr,
  yg,
  zk
} from "./chunk-SCO4KOO5.js";

// node_modules/vitepress-mermaid-preview/dist/_baseUniq-CZHCFN8s.js
var Zn = "[object Symbol]";
function B(n) {
  return typeof n == "symbol" || On(n) && Li(n) == Zn;
}
function bn(n, r) {
  for (var e = -1, t = n == null ? 0 : n.length, f = Array(t); ++e < t; )
    f[e] = r(n[e], e, n);
  return f;
}
var Q = Ks ? Ks.prototype : void 0;
var J = Q ? Q.toString : void 0;
function dn(n) {
  if (typeof n == "string")
    return n;
  if (Js(n))
    return bn(n, dn) + "";
  if (B(n))
    return J ? J.call(n) : "";
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function Xn() {
}
function pn(n, r) {
  for (var e = -1, t = n == null ? 0 : n.length; ++e < t && r(n[e], e, n) !== false; )
    ;
  return n;
}
function Qn(n, r, e, t) {
  for (var f = n.length, i = e + -1; ++i < f; )
    if (r(n[i], i, n))
      return i;
  return -1;
}
function Jn(n) {
  return n !== n;
}
function Wn(n, r, e) {
  for (var t = e - 1, f = n.length; ++t < f; )
    if (n[t] === r)
      return t;
  return -1;
}
function zn(n, r, e) {
  return r === r ? Wn(n, r, e) : Qn(n, Jn, e);
}
function Vn(n, r) {
  var e = n == null ? 0 : n.length;
  return !!e && zn(n, r, 0) > -1;
}
function $(n) {
  return Aa(n) ? W_(n) : mL(n);
}
var kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var nr = /^\w*$/;
function N(n, r) {
  if (Js(n))
    return false;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || B(n) ? true : nr.test(n) || !kn.test(n) || r != null && n in Object(r);
}
var rr = 500;
function er(n) {
  var r = Fn(n, function(t) {
    return e.size === rr && e.clear(), t;
  }), e = r.cache;
  return r;
}
var tr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var ir = /\\(\\)?/g;
var fr2 = er(function(n) {
  var r = [];
  return n.charCodeAt(0) === 46 && r.push(""), n.replace(tr, function(e, t, f, i) {
    r.push(f ? i.replace(ir, "$1") : t || e);
  }), r;
});
function ar(n) {
  return n == null ? "" : dn(n);
}
function An(n, r) {
  return Js(n) ? n : N(n, r) ? [n] : fr2(ar(n));
}
function m(n) {
  if (typeof n == "string" || B(n))
    return n;
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function yn(n, r) {
  r = An(r, n);
  for (var e = 0, t = r.length; n != null && e < t; )
    n = n[m(r[e++])];
  return e && e == t ? n : void 0;
}
function sr(n, r, e) {
  var t = n == null ? void 0 : yn(n, r);
  return t === void 0 ? e : t;
}
function K(n, r) {
  for (var e = -1, t = r.length, f = n.length; ++e < t; )
    n[f + e] = r[e];
  return n;
}
var W = Ks ? Ks.isConcatSpreadable : void 0;
function ur(n) {
  return Js(n) || Qs(n) || !!(W && n && n[W]);
}
function Ot(n, r, e, t, f) {
  var i = -1, a = n.length;
  for (e || (e = ur), f || (f = []); ++i < a; ) {
    var s = n[i];
    e(s) ? K(f, s) : t || (f[f.length] = s);
  }
  return f;
}
function or(n, r, e, t) {
  var f = -1, i = n == null ? 0 : n.length;
  for (t && i && (e = n[++f]); ++f < i; )
    e = r(e, n[f], f, n);
  return e;
}
function gr(n, r) {
  return n && D_(r, $(r), n);
}
function lr(n, r) {
  return n && D_(r, Cg(r), n);
}
function Tn(n, r) {
  for (var e = -1, t = n == null ? 0 : n.length, f = 0, i = []; ++e < t; ) {
    var a = n[e];
    r(a, e, n) && (i[f++] = a);
  }
  return i;
}
function hn() {
  return [];
}
var cr = Object.prototype;
var br = cr.propertyIsEnumerable;
var z = Object.getOwnPropertySymbols;
var j = z ? function(n) {
  return n == null ? [] : (n = Object(n), Tn(z(n), function(r) {
    return br.call(n, r);
  }));
} : hn;
function dr(n, r) {
  return D_(n, j(n), r);
}
var pr = Object.getOwnPropertySymbols;
var wn = pr ? function(n) {
  for (var r = []; n; )
    K(r, j(n)), n = gg(n);
  return r;
} : hn;
function Ar(n, r) {
  return D_(n, wn(n), r);
}
function On2(n, r, e) {
  var t = r(n);
  return Js(n) ? t : K(t, e(n));
}
function G(n) {
  return On2(n, $, j);
}
function yr(n) {
  return On2(n, Cg, wn);
}
var Tr = Object.prototype;
var hr = Tr.hasOwnProperty;
function wr2(n) {
  var r = n.length, e = new n.constructor(r);
  return r && typeof n[0] == "string" && hr.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
function Or(n, r) {
  var e = r ? Nk(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var $r = /\w*$/;
function _r(n) {
  var r = new n.constructor(n.source, $r.exec(n));
  return r.lastIndex = n.lastIndex, r;
}
var V = Ks ? Ks.prototype : void 0;
var k = V ? V.valueOf : void 0;
function Sr(n) {
  return k ? Object(k.call(n)) : {};
}
var Er = "[object Boolean]";
var Ir2 = "[object Date]";
var Pr = "[object Map]";
var vr = "[object Number]";
var Lr = "[object RegExp]";
var Rr = "[object Set]";
var xr = "[object String]";
var mr = "[object Symbol]";
var Mr = "[object ArrayBuffer]";
var Cr = "[object DataView]";
var Fr = "[object Float32Array]";
var Dr = "[object Float64Array]";
var Gr = "[object Int8Array]";
var Ur = "[object Int16Array]";
var Br = "[object Int32Array]";
var Nr = "[object Uint8Array]";
var Kr = "[object Uint8ClampedArray]";
var jr = "[object Uint16Array]";
var Hr = "[object Uint32Array]";
function qr(n, r, e) {
  var t = n.constructor;
  switch (r) {
    case Mr:
      return Nk(n);
    case Er:
    case Ir2:
      return new t(+n);
    case Cr:
      return Or(n, e);
    case Fr:
    case Dr:
    case Gr:
    case Ur:
    case Br:
    case Nr:
    case Kr:
    case jr:
    case Hr:
      return zk(n, e);
    case Pr:
      return new t();
    case vr:
    case xr:
      return new t(n);
    case Lr:
      return _r(n);
    case Rr:
      return new t();
    case mr:
      return Sr(n);
  }
}
var Yr = "[object Map]";
function Zr(n) {
  return On(n) && wr(n) == Yr;
}
var nn = nu && nu.isMap;
var Xr = nn ? E_(nn) : Zr;
var Qr = "[object Set]";
function Jr(n) {
  return On(n) && wr(n) == Qr;
}
var rn = nu && nu.isSet;
var Wr = rn ? E_(rn) : Jr;
var zr = 1;
var Vr = 2;
var kr = 4;
var $n = "[object Arguments]";
var ne = "[object Array]";
var re = "[object Boolean]";
var ee = "[object Date]";
var te = "[object Error]";
var _n = "[object Function]";
var ie = "[object GeneratorFunction]";
var fe = "[object Map]";
var ae = "[object Number]";
var Sn = "[object Object]";
var se = "[object RegExp]";
var ue = "[object Set]";
var oe = "[object String]";
var ge = "[object Symbol]";
var le = "[object WeakMap]";
var ce = "[object ArrayBuffer]";
var be = "[object DataView]";
var de = "[object Float32Array]";
var pe = "[object Float64Array]";
var Ae = "[object Int8Array]";
var ye = "[object Int16Array]";
var Te = "[object Int32Array]";
var he = "[object Uint8Array]";
var we = "[object Uint8ClampedArray]";
var Oe = "[object Uint16Array]";
var $e = "[object Uint32Array]";
var g = {};
g[$n] = g[ne] = g[ce] = g[be] = g[re] = g[ee] = g[de] = g[pe] = g[Ae] = g[ye] = g[Te] = g[fe] = g[ae] = g[Sn] = g[se] = g[ue] = g[oe] = g[ge] = g[he] = g[we] = g[Oe] = g[$e] = true;
g[te] = g[_n] = g[le] = false;
function C(n, r, e, t, f, i) {
  var a, s = r & zr, u = r & Vr, b = r & kr;
  if (a !== void 0)
    return a;
  if (!Ir(n))
    return n;
  var l = Js(n);
  if (l) {
    if (a = wr2(n), !s)
      return Wk(n, a);
  } else {
    var o = wr(n), c = o == _n || o == ie;
    if (lc(n))
      return Pk(n, s);
    if (o == Sn || o == $n || c && !f) {
      if (a = u || c ? {} : jk(n), !s)
        return u ? Ar(n, lr(a, n)) : dr(n, gr(a, n));
    } else {
      if (!g[o])
        return f ? n : {};
      a = qr(n, o, s);
    }
  }
  i || (i = new Ai());
  var h = i.get(n);
  if (h)
    return h;
  i.set(n, a), Wr(n) ? n.forEach(function(d) {
    a.add(C(d, r, e, d, n, i));
  }) : Xr(n) && n.forEach(function(d, p) {
    a.set(p, C(d, r, e, p, n, i));
  });
  var A = b ? u ? yr : G : u ? Cg : $, y = l ? void 0 : A(n);
  return pn(y || n, function(d, p) {
    y && (p = d, d = n[p]), O_(a, p, C(d, r, e, p, n, i));
  }), a;
}
var _e = "__lodash_hash_undefined__";
function Se(n) {
  return this.__data__.set(n, _e), this;
}
function Ee(n) {
  return this.__data__.has(n);
}
function I(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new fr(); ++r < e; )
    this.add(n[r]);
}
I.prototype.add = I.prototype.push = Se;
I.prototype.has = Ee;
function Ie(n, r) {
  for (var e = -1, t = n == null ? 0 : n.length; ++e < t; )
    if (r(n[e], e, n))
      return true;
  return false;
}
function En(n, r) {
  return n.has(r);
}
var Pe = 1;
var ve = 2;
function In(n, r, e, t, f, i) {
  var a = e & Pe, s = n.length, u = r.length;
  if (s != u && !(a && u > s))
    return false;
  var b = i.get(n), l = i.get(r);
  if (b && l)
    return b == r && l == n;
  var o = -1, c = true, h = e & ve ? new I() : void 0;
  for (i.set(n, r), i.set(r, n); ++o < s; ) {
    var A = n[o], y = r[o];
    if (t)
      var d = a ? t(y, A, o, r, n, i) : t(A, y, o, n, r, i);
    if (d !== void 0) {
      if (d)
        continue;
      c = false;
      break;
    }
    if (h) {
      if (!Ie(r, function(p, O) {
        if (!En(h, O) && (A === p || f(A, p, e, t, i)))
          return h.push(O);
      })) {
        c = false;
        break;
      }
    } else if (!(A === y || f(A, y, e, t, i))) {
      c = false;
      break;
    }
  }
  return i.delete(n), i.delete(r), c;
}
function Le(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(t, f) {
    e[++r] = [f, t];
  }), e;
}
function H(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(t) {
    e[++r] = t;
  }), e;
}
var Re = 1;
var xe = 2;
var me = "[object Boolean]";
var Me = "[object Date]";
var Ce = "[object Error]";
var Fe = "[object Map]";
var De = "[object Number]";
var Ge = "[object RegExp]";
var Ue = "[object Set]";
var Be = "[object String]";
var Ne = "[object Symbol]";
var Ke = "[object ArrayBuffer]";
var je = "[object DataView]";
var en = Ks ? Ks.prototype : void 0;
var F = en ? en.valueOf : void 0;
function He(n, r, e, t, f, i, a) {
  switch (e) {
    case je:
      if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
        return false;
      n = n.buffer, r = r.buffer;
    case Ke:
      return !(n.byteLength != r.byteLength || !i(new Jh(n), new Jh(r)));
    case me:
    case Me:
    case De:
      return Sa(+n, +r);
    case Ce:
      return n.name == r.name && n.message == r.message;
    case Ge:
    case Be:
      return n == r + "";
    case Fe:
      var s = Le;
    case Ue:
      var u = t & Re;
      if (s || (s = H), n.size != r.size && !u)
        return false;
      var b = a.get(n);
      if (b)
        return b == r;
      t |= xe, a.set(n, r);
      var l = In(s(n), s(r), t, f, i, a);
      return a.delete(n), l;
    case Ne:
      if (F)
        return F.call(n) == F.call(r);
  }
  return false;
}
var qe = 1;
var Ye = Object.prototype;
var Ze = Ye.hasOwnProperty;
function Xe(n, r, e, t, f, i) {
  var a = e & qe, s = G(n), u = s.length, b = G(r), l = b.length;
  if (u != l && !a)
    return false;
  for (var o = u; o--; ) {
    var c = s[o];
    if (!(a ? c in r : Ze.call(r, c)))
      return false;
  }
  var h = i.get(n), A = i.get(r);
  if (h && A)
    return h == r && A == n;
  var y = true;
  i.set(n, r), i.set(r, n);
  for (var d = a; ++o < u; ) {
    c = s[o];
    var p = n[c], O = r[c];
    if (t)
      var Z = a ? t(O, p, c, r, n, i) : t(p, O, c, n, r, i);
    if (!(Z === void 0 ? p === O || f(p, O, e, t, i) : Z)) {
      y = false;
      break;
    }
    d || (d = c == "constructor");
  }
  if (y && !d) {
    var P = n.constructor, v = r.constructor;
    P != v && "constructor" in n && "constructor" in r && !(typeof P == "function" && P instanceof P && typeof v == "function" && v instanceof v) && (y = false);
  }
  return i.delete(n), i.delete(r), y;
}
var Qe = 1;
var tn = "[object Arguments]";
var fn = "[object Array]";
var L = "[object Object]";
var Je = Object.prototype;
var an = Je.hasOwnProperty;
function We(n, r, e, t, f, i) {
  var a = Js(n), s = Js(r), u = a ? fn : wr(n), b = s ? fn : wr(r);
  u = u == tn ? L : u, b = b == tn ? L : b;
  var l = u == L, o = b == L, c = u == b;
  if (c && lc(n)) {
    if (!lc(r))
      return false;
    a = true, l = false;
  }
  if (c && !l)
    return i || (i = new Ai()), a || cc(n) ? In(n, r, e, t, f, i) : He(n, r, u, e, t, f, i);
  if (!(e & Qe)) {
    var h = l && an.call(n, "__wrapped__"), A = o && an.call(r, "__wrapped__");
    if (h || A) {
      var y = h ? n.value() : n, d = A ? r.value() : r;
      return i || (i = new Ai()), f(y, d, e, t, i);
    }
  }
  return c ? (i || (i = new Ai()), Xe(n, r, e, t, f, i)) : false;
}
function q(n, r, e, t, f) {
  return n === r ? true : n == null || r == null || !On(n) && !On(r) ? n !== n && r !== r : We(n, r, e, t, q, f);
}
var ze = 1;
var Ve = 2;
function ke(n, r, e, t) {
  var f = e.length, i = f;
  if (n == null)
    return !i;
  for (n = Object(n); f--; ) {
    var a = e[f];
    if (a[2] ? a[1] !== n[a[0]] : !(a[0] in n))
      return false;
  }
  for (; ++f < i; ) {
    a = e[f];
    var s = a[0], u = n[s], b = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in n))
        return false;
    } else {
      var l = new Ai(), o;
      if (!(o === void 0 ? q(b, u, ze | Ve, t, l) : o))
        return false;
    }
  }
  return true;
}
function Pn(n) {
  return n === n && !Ir(n);
}
function nt(n) {
  for (var r = $(n), e = r.length; e--; ) {
    var t = r[e], f = n[t];
    r[e] = [t, f, Pn(f)];
  }
  return r;
}
function vn(n, r) {
  return function(e) {
    return e == null ? false : e[n] === r && (r !== void 0 || n in Object(e));
  };
}
function rt(n) {
  var r = nt(n);
  return r.length == 1 && r[0][2] ? vn(r[0][0], r[0][1]) : function(e) {
    return e === n || ke(e, n, r);
  };
}
function et(n, r) {
  return n != null && r in Object(n);
}
function tt(n, r, e) {
  r = An(r, n);
  for (var t = -1, f = r.length, i = false; ++t < f; ) {
    var a = m(r[t]);
    if (!(i = n != null && e(n, a)))
      break;
    n = n[a];
  }
  return i || ++t != f ? i : (f = n == null ? 0 : n.length, !!f && yg(f) && vg(a, f) && (Js(n) || Qs(n)));
}
function it(n, r) {
  return n != null && tt(n, r, et);
}
var ft = 1;
var at = 2;
function st(n, r) {
  return N(n) && Pn(r) ? vn(m(n), r) : function(e) {
    var t = sr(e, n);
    return t === void 0 && t === r ? it(e, n) : q(r, t, ft | at);
  };
}
function ut(n) {
  return function(r) {
    return r == null ? void 0 : r[n];
  };
}
function ot(n) {
  return function(r) {
    return yn(r, n);
  };
}
function gt(n) {
  return N(n) ? ut(m(n)) : ot(n);
}
function Ln(n) {
  return typeof n == "function" ? n : n == null ? _g : typeof n == "object" ? Js(n) ? st(n[0], n[1]) : rt(n) : gt(n);
}
function lt(n, r) {
  return n && Ik(n, r, $);
}
function ct(n, r) {
  return function(e, t) {
    if (e == null)
      return e;
    if (!Aa(e))
      return n(e, t);
    for (var f = e.length, i = -1, a = Object(e); ++i < f && t(a[i], i, a) !== false; )
      ;
    return e;
  };
}
var Y = ct(lt);
function bt(n) {
  return typeof n == "function" ? n : _g;
}
function $t(n, r) {
  var e = Js(n) ? pn : Y;
  return e(n, bt(r));
}
function dt(n, r) {
  var e = [];
  return Y(n, function(t, f, i) {
    r(t, f, i) && e.push(t);
  }), e;
}
function _t(n, r) {
  var e = Js(n) ? Tn : dt;
  return e(n, Ln(r));
}
function pt(n, r) {
  return bn(r, function(e) {
    return n[e];
  });
}
function St(n) {
  return n == null ? [] : pt(n, $(n));
}
function Et(n) {
  return n === void 0;
}
function At(n, r, e, t, f) {
  return f(n, function(i, a, s) {
    e = t ? (t = false, i) : r(e, i, a, s);
  }), e;
}
function It(n, r, e) {
  var t = Js(n) ? or : At, f = arguments.length < 3;
  return t(n, Ln(r), e, f, Y);
}
var yt = 1 / 0;
var Tt = Cl && 1 / H(new Cl([, -0]))[1] == yt ? function(n) {
  return new Cl(n);
} : Xn;
var ht = 200;
function Pt(n, r, e) {
  var t = -1, f = Vn, i = n.length, a = true, s = [], u = s;
  if (i >= ht) {
    var b = r ? null : Tt(n);
    if (b)
      return H(b);
    a = false, f = En, u = new I();
  } else
    u = r ? [] : s;
  n:
    for (; ++t < i; ) {
      var l = n[t], o = r ? r(l) : l;
      if (l = l !== 0 ? l : 0, a && o === o) {
        for (var c = u.length; c--; )
          if (u[c] === o)
            continue n;
        r && u.push(o), s.push(l);
      } else f(u, o, e) || (u !== s && u.push(o), s.push(l));
    }
  return s;
}

export {
  B,
  bn,
  Xn,
  Qn,
  zn,
  Vn,
  $,
  ar,
  An,
  m,
  yn,
  Ot,
  Tn,
  yr,
  C,
  I,
  Ie,
  En,
  tt,
  it,
  Ln,
  lt,
  Y,
  bt,
  $t,
  dt,
  _t,
  St,
  Et,
  It,
  Pt
};
//# sourceMappingURL=chunk-D5X4WG6P.js.map
