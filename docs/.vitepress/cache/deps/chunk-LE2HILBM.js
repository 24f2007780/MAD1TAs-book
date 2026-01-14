import {
  Gr,
  Hh,
  JF,
  KF,
  QF,
  ZF,
  e3,
  ec,
  i3,
  n3,
  qh,
  r3,
  s3,
  t3,
  wC
} from "./chunk-SCO4KOO5.js";

// node_modules/vitepress-mermaid-preview/dist/arc-aavUJmbb.js
function cn(l) {
  return l.innerRadius;
}
function yn(l) {
  return l.outerRadius;
}
function gn(l) {
  return l.startAngle;
}
function dn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, h, I, D, v, A, C, a) {
  var O = I - l, i = D - h, n = C - v, d = a - A, u = d * O - n * i;
  if (!(u * u < qh))
    return u = (n * (h - A) - d * (l - v)) / u, [l + u * O, h + u * i];
}
function W(l, h, I, D, v, A, C) {
  var a = l - I, O = h - D, i = (C ? A : -A) / r3(a * a + O * O), n = i * O, d = -i * a, u = l + n, s = h + d, f = I + n, c = D + d, F = (u + f) / 2, t = (s + c) / 2, m = f - u, g = c - s, R = m * m + g * g, T = v - A, P = u * c - f * s, S = (g < 0 ? -1 : 1) * r3(JF(0, T * T * R - P * P)), j = (P * g - m * S) / R, z = (-P * m - g * S) / R, w = (P * g + m * S) / R, p = (-P * m + g * S) / R, x = j - F, e = z - t, r = w - F, G = p - t;
  return x * x + e * e > r * r + G * G && (j = w, z = p), {
    cx: j,
    cy: z,
    x01: -n,
    y01: -d,
    x11: j * (v / T - 1),
    y11: z * (v / T - 1)
  };
}
function hn() {
  var l = cn, h = yn, I = Gr(0), D = null, v = gn, A = dn, C = mn, a = null, O = wC(i);
  function i() {
    var n, d, u = +l.apply(this, arguments), s = +h.apply(this, arguments), f = v.apply(this, arguments) - Hh, c = A.apply(this, arguments) - Hh, F = KF(c - f), t = c > f;
    if (a || (a = n = O()), s < u && (d = s, s = u, u = d), !(s > qh)) a.moveTo(0, 0);
    else if (F > i3 - qh)
      a.moveTo(s * QF(f), s * e3(f)), a.arc(0, 0, s, f, c, !t), u > qh && (a.moveTo(u * QF(c), u * e3(c)), a.arc(0, 0, u, c, f, t));
    else {
      var m = f, g = c, R = f, T = c, P = F, S = F, j = C.apply(this, arguments) / 2, z = j > qh && (D ? +D.apply(this, arguments) : r3(u * u + s * s)), w = t3(KF(s - u) / 2, +I.apply(this, arguments)), p = w, x = w, e, r;
      if (z > qh) {
        var G = s3(z / u * e3(j)), M = s3(z / s * e3(j));
        (P -= G * 2) > qh ? (G *= t ? 1 : -1, R += G, T -= G) : (P = 0, R = T = (f + c) / 2), (S -= M * 2) > qh ? (M *= t ? 1 : -1, m += M, g -= M) : (S = 0, m = g = (f + c) / 2);
      }
      var J = s * QF(m), K = s * e3(m), N = u * QF(T), Q = u * e3(T);
      if (w > qh) {
        var U = s * QF(g), V = s * e3(g), X = u * QF(R), Y = u * e3(R), E;
        if (F < ec)
          if (E = pn(J, K, X, Y, U, V, N, Q)) {
            var Z = J - E[0], $ = K - E[1], b = U - E[0], k = V - E[1], nn = 1 / e3(n3((Z * b + $ * k) / (r3(Z * Z + $ * $) * r3(b * b + k * k))) / 2), en = r3(E[0] * E[0] + E[1] * E[1]);
            p = t3(w, (u - en) / (nn - 1)), x = t3(w, (s - en) / (nn + 1));
          } else
            p = x = 0;
      }
      S > qh ? x > qh ? (e = W(X, Y, J, K, s, x, t), r = W(U, V, N, Q, s, x, t), a.moveTo(e.cx + e.x01, e.cy + e.y01), x < w ? a.arc(e.cx, e.cy, x, ZF(e.y01, e.x01), ZF(r.y01, r.x01), !t) : (a.arc(e.cx, e.cy, x, ZF(e.y01, e.x01), ZF(e.y11, e.x11), !t), a.arc(0, 0, s, ZF(e.cy + e.y11, e.cx + e.x11), ZF(r.cy + r.y11, r.cx + r.x11), !t), a.arc(r.cx, r.cy, x, ZF(r.y11, r.x11), ZF(r.y01, r.x01), !t))) : (a.moveTo(J, K), a.arc(0, 0, s, m, g, !t)) : a.moveTo(J, K), !(u > qh) || !(P > qh) ? a.lineTo(N, Q) : p > qh ? (e = W(N, Q, U, V, u, -p, t), r = W(J, K, X, Y, u, -p, t), a.lineTo(e.cx + e.x01, e.cy + e.y01), p < w ? a.arc(e.cx, e.cy, p, ZF(e.y01, e.x01), ZF(r.y01, r.x01), !t) : (a.arc(e.cx, e.cy, p, ZF(e.y01, e.x01), ZF(e.y11, e.x11), !t), a.arc(0, 0, u, ZF(e.cy + e.y11, e.cx + e.x11), ZF(r.cy + r.y11, r.cx + r.x11), t), a.arc(r.cx, r.cy, p, ZF(r.y11, r.x11), ZF(r.y01, r.x01), !t))) : a.arc(0, 0, u, T, R, t);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2, d = (+v.apply(this, arguments) + +A.apply(this, arguments)) / 2 - ec / 2;
    return [QF(d) * n, e3(d) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : Gr(+n), i) : l;
  }, i.outerRadius = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : Gr(+n), i) : h;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (I = typeof n == "function" ? n : Gr(+n), i) : I;
  }, i.padRadius = function(n) {
    return arguments.length ? (D = n == null ? null : typeof n == "function" ? n : Gr(+n), i) : D;
  }, i.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : Gr(+n), i) : v;
  }, i.endAngle = function(n) {
    return arguments.length ? (A = typeof n == "function" ? n : Gr(+n), i) : A;
  }, i.padAngle = function(n) {
    return arguments.length ? (C = typeof n == "function" ? n : Gr(+n), i) : C;
  }, i.context = function(n) {
    return arguments.length ? (a = n ?? null, i) : a;
  }, i;
}

export {
  hn
};
//# sourceMappingURL=chunk-LE2HILBM.js.map
