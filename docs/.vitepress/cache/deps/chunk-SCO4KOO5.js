import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useAttrs,
  useCssVars,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-LE5NDSFD.js";
import {
  __publicField
} from "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/component-D1GmXNq6.js
function yx(e11) {
  return e11 && e11.__esModule && Object.prototype.hasOwnProperty.call(e11, "default") ? e11.default : e11;
}
var hs = { exports: {} };
var xx = hs.exports;
var oh;
function bx() {
  return oh || (oh = 1, function(e11, t) {
    (function(r, i) {
      e11.exports = i();
    })(xx, function() {
      var r = 1e3, i = 6e4, n = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", c = "day", h3 = "week", u = "month", f = "quarter", d = "year", p = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(M) {
        var $ = ["th", "st", "nd", "rd"], A = M % 100;
        return "[" + M + ($[(A - 20) % 10] || $[A] || $[0]) + "]";
      } }, w = function(M, $, A) {
        var P = String(M);
        return !P || P.length >= $ ? M : "" + Array($ + 1 - P.length).join(A) + M;
      }, v = { s: w, z: function(M) {
        var $ = -M.utcOffset(), A = Math.abs($), P = Math.floor(A / 60), R = A % 60;
        return ($ <= 0 ? "+" : "-") + w(P, 2, "0") + ":" + w(R, 2, "0");
      }, m: function M($, A) {
        if ($.date() < A.date()) return -M(A, $);
        var P = 12 * (A.year() - $.year()) + (A.month() - $.month()), R = $.clone().add(P, u), q = A - R < 0, Y = $.clone().add(P + (q ? -1 : 1), u);
        return +(-(P + (A - R) / (q ? R - Y : Y - R)) || 0);
      }, a: function(M) {
        return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
      }, p: function(M) {
        return { M: u, y: d, w: h3, d: c, D: p, h: l, m: a, s: o, ms: s, Q: f }[M] || String(M || "").toLowerCase().replace(/s$/, "");
      }, u: function(M) {
        return M === void 0;
      } }, C = "en", S = {};
      S[C] = x;
      var T = "$isDayjsObject", O = function(M) {
        return M instanceof D || !(!M || !M[T]);
      }, k = function M($, A, P) {
        var R;
        if (!$) return C;
        if (typeof $ == "string") {
          var q = $.toLowerCase();
          S[q] && (R = q), A && (S[q] = A, R = q);
          var Y = $.split("-");
          if (!R && Y.length > 1) return M(Y[0]);
        } else {
          var U = $.name;
          S[U] = $, R = U;
        }
        return !P && R && (C = R), R || !P && C;
      }, E = function(M, $) {
        if (O(M)) return M.clone();
        var A = typeof $ == "object" ? $ : {};
        return A.date = M, A.args = arguments, new D(A);
      }, L = v;
      L.l = k, L.i = O, L.w = function(M, $) {
        return E(M, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
      };
      var D = function() {
        function M(A) {
          this.$L = k(A.locale, null, true), this.parse(A), this.$x = this.$x || A.x || {}, this[T] = true;
        }
        var $ = M.prototype;
        return $.parse = function(A) {
          this.$d = function(P) {
            var R = P.date, q = P.utc;
            if (R === null) return /* @__PURE__ */ new Date(NaN);
            if (L.u(R)) return /* @__PURE__ */ new Date();
            if (R instanceof Date) return new Date(R);
            if (typeof R == "string" && !/Z$/i.test(R)) {
              var Y = R.match(y);
              if (Y) {
                var U = Y[2] - 1 || 0, rt = (Y[7] || "0").substring(0, 3);
                return q ? new Date(Date.UTC(Y[1], U, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, rt)) : new Date(Y[1], U, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, rt);
              }
            }
            return new Date(R);
          }(A), this.init();
        }, $.init = function() {
          var A = this.$d;
          this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
        }, $.$utils = function() {
          return L;
        }, $.isValid = function() {
          return this.$d.toString() !== m;
        }, $.isSame = function(A, P) {
          var R = E(A);
          return this.startOf(P) <= R && R <= this.endOf(P);
        }, $.isAfter = function(A, P) {
          return E(A) < this.startOf(P);
        }, $.isBefore = function(A, P) {
          return this.endOf(P) < E(A);
        }, $.$g = function(A, P, R) {
          return L.u(A) ? this[P] : this.set(R, A);
        }, $.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, $.valueOf = function() {
          return this.$d.getTime();
        }, $.startOf = function(A, P) {
          var R = this, q = !!L.u(P) || P, Y = L.p(A), U = function(lt, ct) {
            var Ct = L.w(R.$u ? Date.UTC(R.$y, ct, lt) : new Date(R.$y, ct, lt), R);
            return q ? Ct : Ct.endOf(c);
          }, rt = function(lt, ct) {
            return L.w(R.toDate()[lt].apply(R.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ct)), R);
          }, J = this.$W, ut = this.$M, it = this.$D, Bt = "set" + (this.$u ? "UTC" : "");
          switch (Y) {
            case d:
              return q ? U(1, 0) : U(31, 11);
            case u:
              return q ? U(1, ut) : U(0, ut + 1);
            case h3:
              var I = this.$locale().weekStart || 0, xt = (J < I ? J + 7 : J) - I;
              return U(q ? it - xt : it + (6 - xt), ut);
            case c:
            case p:
              return rt(Bt + "Hours", 0);
            case l:
              return rt(Bt + "Minutes", 1);
            case a:
              return rt(Bt + "Seconds", 2);
            case o:
              return rt(Bt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, $.endOf = function(A) {
          return this.startOf(A, false);
        }, $.$set = function(A, P) {
          var R, q = L.p(A), Y = "set" + (this.$u ? "UTC" : ""), U = (R = {}, R[c] = Y + "Date", R[p] = Y + "Date", R[u] = Y + "Month", R[d] = Y + "FullYear", R[l] = Y + "Hours", R[a] = Y + "Minutes", R[o] = Y + "Seconds", R[s] = Y + "Milliseconds", R)[q], rt = q === c ? this.$D + (P - this.$W) : P;
          if (q === u || q === d) {
            var J = this.clone().set(p, 1);
            J.$d[U](rt), J.init(), this.$d = J.set(p, Math.min(this.$D, J.daysInMonth())).$d;
          } else U && this.$d[U](rt);
          return this.init(), this;
        }, $.set = function(A, P) {
          return this.clone().$set(A, P);
        }, $.get = function(A) {
          return this[L.p(A)]();
        }, $.add = function(A, P) {
          var R, q = this;
          A = Number(A);
          var Y = L.p(P), U = function(ut) {
            var it = E(q);
            return L.w(it.date(it.date() + Math.round(ut * A)), q);
          };
          if (Y === u) return this.set(u, this.$M + A);
          if (Y === d) return this.set(d, this.$y + A);
          if (Y === c) return U(1);
          if (Y === h3) return U(7);
          var rt = (R = {}, R[a] = i, R[l] = n, R[o] = r, R)[Y] || 1, J = this.$d.getTime() + A * rt;
          return L.w(J, this);
        }, $.subtract = function(A, P) {
          return this.add(-1 * A, P);
        }, $.format = function(A) {
          var P = this, R = this.$locale();
          if (!this.isValid()) return R.invalidDate || m;
          var q = A || "YYYY-MM-DDTHH:mm:ssZ", Y = L.z(this), U = this.$H, rt = this.$m, J = this.$M, ut = R.weekdays, it = R.months, Bt = R.meridiem, I = function(ct, Ct, Lt, ue) {
            return ct && (ct[Ct] || ct(P, q)) || Lt[Ct].slice(0, ue);
          }, xt = function(ct) {
            return L.s(U % 12 || 12, ct, "0");
          }, lt = Bt || function(ct, Ct, Lt) {
            var ue = ct < 12 ? "AM" : "PM";
            return Lt ? ue.toLowerCase() : ue;
          };
          return q.replace(b, function(ct, Ct) {
            return Ct || function(Lt) {
              switch (Lt) {
                case "YY":
                  return String(P.$y).slice(-2);
                case "YYYY":
                  return L.s(P.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return L.s(J + 1, 2, "0");
                case "MMM":
                  return I(R.monthsShort, J, it, 3);
                case "MMMM":
                  return I(it, J);
                case "D":
                  return P.$D;
                case "DD":
                  return L.s(P.$D, 2, "0");
                case "d":
                  return String(P.$W);
                case "dd":
                  return I(R.weekdaysMin, P.$W, ut, 2);
                case "ddd":
                  return I(R.weekdaysShort, P.$W, ut, 3);
                case "dddd":
                  return ut[P.$W];
                case "H":
                  return String(U);
                case "HH":
                  return L.s(U, 2, "0");
                case "h":
                  return xt(1);
                case "hh":
                  return xt(2);
                case "a":
                  return lt(U, rt, true);
                case "A":
                  return lt(U, rt, false);
                case "m":
                  return String(rt);
                case "mm":
                  return L.s(rt, 2, "0");
                case "s":
                  return String(P.$s);
                case "ss":
                  return L.s(P.$s, 2, "0");
                case "SSS":
                  return L.s(P.$ms, 3, "0");
                case "Z":
                  return Y;
              }
              return null;
            }(ct) || Y.replace(":", "");
          });
        }, $.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, $.diff = function(A, P, R) {
          var q, Y = this, U = L.p(P), rt = E(A), J = (rt.utcOffset() - this.utcOffset()) * i, ut = this - rt, it = function() {
            return L.m(Y, rt);
          };
          switch (U) {
            case d:
              q = it() / 12;
              break;
            case u:
              q = it();
              break;
            case f:
              q = it() / 3;
              break;
            case h3:
              q = (ut - J) / 6048e5;
              break;
            case c:
              q = (ut - J) / 864e5;
              break;
            case l:
              q = ut / n;
              break;
            case a:
              q = ut / i;
              break;
            case o:
              q = ut / r;
              break;
            default:
              q = ut;
          }
          return R ? q : L.a(q);
        }, $.daysInMonth = function() {
          return this.endOf(u).$D;
        }, $.$locale = function() {
          return S[this.$L];
        }, $.locale = function(A, P) {
          if (!A) return this.$L;
          var R = this.clone(), q = k(A, P, true);
          return q && (R.$L = q), R;
        }, $.clone = function() {
          return L.w(this.$d, this);
        }, $.toDate = function() {
          return new Date(this.valueOf());
        }, $.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, $.toISOString = function() {
          return this.$d.toISOString();
        }, $.toString = function() {
          return this.$d.toUTCString();
        }, M;
      }(), F = D.prototype;
      return E.prototype = F, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", c], ["$M", u], ["$y", d], ["$D", p]].forEach(function(M) {
        F[M[1]] = function($) {
          return this.$g($, M[0], M[1]);
        };
      }), E.extend = function(M, $) {
        return M.$i || (M($, D, E), M.$i = true), E;
      }, E.locale = k, E.isDayjs = O, E.unix = function(M) {
        return E(1e3 * M);
      }, E.en = S[C], E.Ls = S, E.p = {}, E;
    });
  }(hs)), hs.exports;
}
var wx = bx();
var vx = yx(wx);
var us = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e11) => e11 >= 255 ? 255 : e11 < 0 ? 0 : e11,
    g: (e11) => e11 >= 255 ? 255 : e11 < 0 ? 0 : e11,
    b: (e11) => e11 >= 255 ? 255 : e11 < 0 ? 0 : e11,
    h: (e11) => e11 % 360,
    s: (e11) => e11 >= 100 ? 100 : e11 < 0 ? 0 : e11,
    l: (e11) => e11 >= 100 ? 100 : e11 < 0 ? 0 : e11,
    a: (e11) => e11 >= 1 ? 1 : e11 < 0 ? 0 : e11
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e11) => {
    const t = e11 / 255;
    return e11 > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e11, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e11 + (t - e11) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e11 + (t - e11) * (2 / 3 - r) * 6 : e11),
  hsl2rgb: ({ h: e11, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e11 /= 360, t /= 100, r /= 100;
    const n = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - n;
    switch (i) {
      case "r":
        return us.hue2rgb(s, n, e11 + 1 / 3) * 255;
      case "g":
        return us.hue2rgb(s, n, e11) * 255;
      case "b":
        return us.hue2rgb(s, n, e11 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e11, g: t, b: r }, i) => {
    e11 /= 255, t /= 255, r /= 255;
    const n = Math.max(e11, t, r), s = Math.min(e11, t, r), o = (n + s) / 2;
    if (i === "l")
      return o * 100;
    if (n === s)
      return 0;
    const a = n - s, l = o > 0.5 ? a / (2 - n - s) : a / (n + s);
    if (i === "s")
      return l * 100;
    switch (n) {
      case e11:
        return ((t - r) / a + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e11) / a + 2) * 60;
      case r:
        return ((e11 - t) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var Cx = {
  /* API */
  clamp: (e11, t, r) => t > r ? Math.min(t, Math.max(r, e11)) : Math.min(r, Math.max(t, e11)),
  round: (e11) => Math.round(e11 * 1e10) / 1e10
};
var kx = {
  /* API */
  dec2hex: (e11) => {
    const t = Math.round(e11).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
};
var at = {
  channel: us,
  lang: Cx,
  unit: kx
};
var rr = {};
for (let e11 = 0; e11 <= 255; e11++)
  rr[e11] = at.unit.dec2hex(e11);
var Ht = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var _x = class {
  constructor() {
    this.type = Ht.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = Ht.ALL;
  }
  is(t) {
    return this.type === t;
  }
};
var Sx = class {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = false, this.data = t, this.type = new _x();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = false, this.data = t, this.type.type = Ht.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: n } = t;
    r === void 0 && (t.h = at.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = at.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = at.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: n } = t;
    r === void 0 && (t.r = at.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = at.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = at.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(Ht.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(Ht.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(Ht.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(Ht.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(Ht.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(Ht.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(Ht.RGB), this.changed = true, this.data.r = t;
  }
  set g(t) {
    this.type.set(Ht.RGB), this.changed = true, this.data.g = t;
  }
  set b(t) {
    this.type.set(Ht.RGB), this.changed = true, this.data.b = t;
  }
  set h(t) {
    this.type.set(Ht.HSL), this.changed = true, this.data.h = t;
  }
  set s(t) {
    this.type.set(Ht.HSL), this.changed = true, this.data.s = t;
  }
  set l(t) {
    this.type.set(Ht.HSL), this.changed = true, this.data.l = t;
  }
  set a(t) {
    this.changed = true, this.data.a = t;
  }
};
var da = new Sx({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var ti = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e11) => {
    if (e11.charCodeAt(0) !== 35)
      return;
    const t = e11.match(ti.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), n = r.length, s = n % 4 === 0, o = n > 4, a = o ? 1 : 17, l = o ? 8 : 4, c = s ? 0 : -1, h3 = o ? 255 : 15;
    return da.set({
      r: (i >> l * (c + 3) & h3) * a,
      g: (i >> l * (c + 2) & h3) * a,
      b: (i >> l * (c + 1) & h3) * a,
      a: s ? (i & h3) * a / 255 : 1
    }, e11);
  },
  stringify: (e11) => {
    const { r: t, g: r, b: i, a: n } = e11;
    return n < 1 ? `#${rr[Math.round(t)]}${rr[Math.round(r)]}${rr[Math.round(i)]}${rr[Math.round(n * 255)]}` : `#${rr[Math.round(t)]}${rr[Math.round(r)]}${rr[Math.round(i)]}`;
  }
};
var vr = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e11) => {
    const t = e11.match(vr.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return at.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return at.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return at.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return at.channel.clamp.h(parseFloat(e11));
  },
  /* API */
  parse: (e11) => {
    const t = e11.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e11.match(vr.re);
    if (!r)
      return;
    const [, i, n, s, o, a] = r;
    return da.set({
      h: vr._hue2deg(i),
      s: at.channel.clamp.s(parseFloat(n)),
      l: at.channel.clamp.l(parseFloat(s)),
      a: o ? at.channel.clamp.a(a ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, e11);
  },
  stringify: (e11) => {
    const { h: t, s: r, l: i, a: n } = e11;
    return n < 1 ? `hsla(${at.lang.round(t)}, ${at.lang.round(r)}%, ${at.lang.round(i)}%, ${n})` : `hsl(${at.lang.round(t)}, ${at.lang.round(r)}%, ${at.lang.round(i)}%)`;
  }
};
var ln = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e11) => {
    e11 = e11.toLowerCase();
    const t = ln.colors[e11];
    if (t)
      return ti.parse(t);
  },
  stringify: (e11) => {
    const t = ti.stringify(e11);
    for (const r in ln.colors)
      if (ln.colors[r] === t)
        return r;
  }
};
var Ji = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e11) => {
    const t = e11.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e11.match(Ji.re);
    if (!r)
      return;
    const [, i, n, s, o, a, l, c, h3] = r;
    return da.set({
      r: at.channel.clamp.r(n ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: at.channel.clamp.g(o ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: at.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: c ? at.channel.clamp.a(h3 ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e11);
  },
  stringify: (e11) => {
    const { r: t, g: r, b: i, a: n } = e11;
    return n < 1 ? `rgba(${at.lang.round(t)}, ${at.lang.round(r)}, ${at.lang.round(i)}, ${at.lang.round(n)})` : `rgb(${at.lang.round(t)}, ${at.lang.round(r)}, ${at.lang.round(i)})`;
  }
};
var Me = {
  /* VARIABLES */
  format: {
    keyword: ln,
    hex: ti,
    rgb: Ji,
    rgba: Ji,
    hsl: vr,
    hsla: vr
  },
  /* API */
  parse: (e11) => {
    if (typeof e11 != "string")
      return e11;
    const t = ti.parse(e11) || Ji.parse(e11) || vr.parse(e11) || ln.parse(e11);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e11}"`);
  },
  stringify: (e11) => !e11.changed && e11.color ? e11.color : e11.type.is(Ht.HSL) || e11.data.r === void 0 ? vr.stringify(e11) : e11.a < 1 || !Number.isInteger(e11.r) || !Number.isInteger(e11.g) || !Number.isInteger(e11.b) ? Ji.stringify(e11) : ti.stringify(e11)
};
var cf = (e11, t) => {
  const r = Me.parse(e11);
  for (const i in t)
    r[i] = at.channel.clamp[i](t[i]);
  return Me.stringify(r);
};
var cn = (e11, t, r = 0, i = 1) => {
  if (typeof e11 != "number")
    return cf(e11, { a: t });
  const n = da.set({
    r: at.channel.clamp.r(e11),
    g: at.channel.clamp.g(t),
    b: at.channel.clamp.b(r),
    a: at.channel.clamp.a(i)
  });
  return Me.stringify(n);
};
var Tx = (e11) => {
  const { r: t, g: r, b: i } = Me.parse(e11), n = 0.2126 * at.channel.toLinear(t) + 0.7152 * at.channel.toLinear(r) + 0.0722 * at.channel.toLinear(i);
  return at.lang.round(n);
};
var Bx = (e11) => Tx(e11) >= 0.5;
var Ln = (e11) => !Bx(e11);
var hf = (e11, t, r) => {
  const i = Me.parse(e11), n = i[t], s = at.channel.clamp[t](n + r);
  return n !== s && (i[t] = s), Me.stringify(i);
};
var H = (e11, t) => hf(e11, "l", t);
var et = (e11, t) => hf(e11, "l", -t);
var B = (e11, t) => {
  const r = Me.parse(e11), i = {};
  for (const n in t)
    t[n] && (i[n] = r[n] + t[n]);
  return cf(e11, i);
};
var Lx = (e11, t, r = 50) => {
  const { r: i, g: n, b: s, a: o } = Me.parse(e11), { r: a, g: l, b: c, a: h3 } = Me.parse(t), u = r / 100, f = u * 2 - 1, d = o - h3, m = ((f * d === -1 ? f : (f + d) / (1 + f * d)) + 1) / 2, y = 1 - m, b = i * m + a * y, x = n * m + l * y, w = s * m + c * y, v = o * u + h3 * (1 - u);
  return cn(b, x, w, v);
};
var W = (e11, t = 100) => {
  const r = Me.parse(e11);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, Lx(r, e11, t);
};
var {
  entries: uf,
  setPrototypeOf: lh,
  isFrozen: Ax,
  getPrototypeOf: Ex,
  getOwnPropertyDescriptor: Mx
} = Object;
var {
  freeze: Qt,
  seal: me,
  create: ff
} = Object;
var {
  apply: Ao,
  construct: Eo
} = typeof Reflect < "u" && Reflect;
Qt || (Qt = function(t) {
  return t;
});
me || (me = function(t) {
  return t;
});
Ao || (Ao = function(t, r, i) {
  return t.apply(r, i);
});
Eo || (Eo = function(t, r) {
  return new t(...r);
});
var Xn = Jt(Array.prototype.forEach);
var $x = Jt(Array.prototype.lastIndexOf);
var ch = Jt(Array.prototype.pop);
var Ri = Jt(Array.prototype.push);
var Fx = Jt(Array.prototype.splice);
var fs = Jt(String.prototype.toLowerCase);
var Za = Jt(String.prototype.toString);
var hh = Jt(String.prototype.match);
var Pi = Jt(String.prototype.replace);
var Ox = Jt(String.prototype.indexOf);
var Dx = Jt(String.prototype.trim);
var xe = Jt(Object.prototype.hasOwnProperty);
var Gt = Jt(RegExp.prototype.test);
var Ni = Ix(TypeError);
function Jt(e11) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
      i[n - 1] = arguments[n];
    return Ao(e11, t, i);
  };
}
function Ix(e11) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Eo(e11, r);
  };
}
function ht(e11, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fs;
  lh && lh(e11, null);
  let i = t.length;
  for (; i--; ) {
    let n = t[i];
    if (typeof n == "string") {
      const s = r(n);
      s !== n && (Ax(t) || (t[i] = s), n = s);
    }
    e11[n] = true;
  }
  return e11;
}
function Rx(e11) {
  for (let t = 0; t < e11.length; t++)
    xe(e11, t) || (e11[t] = null);
  return e11;
}
function We(e11) {
  const t = ff(null);
  for (const [r, i] of uf(e11))
    xe(e11, r) && (Array.isArray(i) ? t[r] = Rx(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = We(i) : t[r] = i);
  return t;
}
function zi(e11, t) {
  for (; e11 !== null; ) {
    const i = Mx(e11, t);
    if (i) {
      if (i.get)
        return Jt(i.get);
      if (typeof i.value == "function")
        return Jt(i.value);
    }
    e11 = Ex(e11);
  }
  function r() {
    return null;
  }
  return r;
}
var uh = Qt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Qa = Qt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var Ja = Qt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var Px = Qt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var to = Qt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var Nx = Qt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var fh = Qt(["#text"]);
var dh = Qt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
var eo = Qt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var ph = Qt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Kn = Qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var zx = me(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var Wx = me(/<%[\w\W]*|[\w\W]*%>/gm);
var qx = me(/\$\{[\w\W]*/gm);
var Hx = me(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var jx = me(/^aria-[\-\w]+$/);
var df = me(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var Ux = me(/^(?:\w+script|data):/i);
var Yx = me(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var pf = me(/^html$/i);
var Gx = me(/^[a-z][.\w]*(-[.\w]+)+$/i);
var gh = Object.freeze({
  __proto__: null,
  ARIA_ATTR: jx,
  ATTR_WHITESPACE: Yx,
  CUSTOM_ELEMENT: Gx,
  DATA_ATTR: Hx,
  DOCTYPE_NAME: pf,
  ERB_EXPR: Wx,
  IS_ALLOWED_URI: df,
  IS_SCRIPT_OR_DATA: Ux,
  MUSTACHE_EXPR: zx,
  TMPLIT_EXPR: qx
});
var Wi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
var Vx = function() {
  return typeof window > "u" ? null : window;
};
var Xx = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const n = "data-tt-policy-suffix";
  r && r.hasAttribute(n) && (i = r.getAttribute(n));
  const s = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
var mh = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function gf() {
  let e11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vx();
  const t = (tt) => gf(tt);
  if (t.version = "3.2.6", t.removed = [], !e11 || !e11.document || e11.document.nodeType !== Wi.document || !e11.Element)
    return t.isSupported = false, t;
  let {
    document: r
  } = e11;
  const i = r, n = i.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: a,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h3 = e11.NamedNodeMap || e11.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: d
  } = e11, p = l.prototype, m = zi(p, "cloneNode"), y = zi(p, "remove"), b = zi(p, "nextSibling"), x = zi(p, "childNodes"), w = zi(p, "parentNode");
  if (typeof o == "function") {
    const tt = r.createElement("template");
    tt.content && tt.content.ownerDocument && (r = tt.content.ownerDocument);
  }
  let v, C = "";
  const {
    implementation: S,
    createNodeIterator: T,
    createDocumentFragment: O,
    getElementsByTagName: k
  } = r, {
    importNode: E
  } = i;
  let L = mh();
  t.isSupported = typeof uf == "function" && typeof w == "function" && S && S.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: F,
    TMPLIT_EXPR: M,
    DATA_ATTR: $,
    ARIA_ATTR: A,
    IS_SCRIPT_OR_DATA: P,
    ATTR_WHITESPACE: R,
    CUSTOM_ELEMENT: q
  } = gh;
  let {
    IS_ALLOWED_URI: Y
  } = gh, U = null;
  const rt = ht({}, [...uh, ...Qa, ...Ja, ...to, ...fh]);
  let J = null;
  const ut = ht({}, [...dh, ...eo, ...ph, ...Kn]);
  let it = Object.seal(ff(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), Bt = null, I = null, xt = true, lt = true, ct = false, Ct = true, Lt = false, ue = true, Yt = false, Wn = false, Ha = false, Wr = false, qn = false, Hn = false, Wc = true, qc = false;
  const Z0 = "user-content-";
  let ja = true, $i = false, qr = {}, Hr = null;
  const Hc = ht({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let jc = null;
  const Uc = ht({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ua = null;
  const Yc = ht({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jn = "http://www.w3.org/1998/Math/MathML", Un = "http://www.w3.org/2000/svg", De = "http://www.w3.org/1999/xhtml";
  let jr = De, Ya = false, Ga = null;
  const Q0 = ht({}, [jn, Un, De], Za);
  let Yn = ht({}, ["mi", "mo", "mn", "ms", "mtext"]), Gn = ht({}, ["annotation-xml"]);
  const J0 = ht({}, ["title", "style", "font", "a", "script"]);
  let Fi = null;
  const tx = ["application/xhtml+xml", "text/html"], ex = "text/html";
  let Rt = null, Ur = null;
  const rx = r.createElement("form"), Gc = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Va = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ur && Ur === _)) {
      if ((!_ || typeof _ != "object") && (_ = {}), _ = We(_), Fi = // eslint-disable-next-line unicorn/prefer-includes
      tx.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? ex : _.PARSER_MEDIA_TYPE, Rt = Fi === "application/xhtml+xml" ? Za : fs, U = xe(_, "ALLOWED_TAGS") ? ht({}, _.ALLOWED_TAGS, Rt) : rt, J = xe(_, "ALLOWED_ATTR") ? ht({}, _.ALLOWED_ATTR, Rt) : ut, Ga = xe(_, "ALLOWED_NAMESPACES") ? ht({}, _.ALLOWED_NAMESPACES, Za) : Q0, Ua = xe(_, "ADD_URI_SAFE_ATTR") ? ht(We(Yc), _.ADD_URI_SAFE_ATTR, Rt) : Yc, jc = xe(_, "ADD_DATA_URI_TAGS") ? ht(We(Uc), _.ADD_DATA_URI_TAGS, Rt) : Uc, Hr = xe(_, "FORBID_CONTENTS") ? ht({}, _.FORBID_CONTENTS, Rt) : Hc, Bt = xe(_, "FORBID_TAGS") ? ht({}, _.FORBID_TAGS, Rt) : We({}), I = xe(_, "FORBID_ATTR") ? ht({}, _.FORBID_ATTR, Rt) : We({}), qr = xe(_, "USE_PROFILES") ? _.USE_PROFILES : false, xt = _.ALLOW_ARIA_ATTR !== false, lt = _.ALLOW_DATA_ATTR !== false, ct = _.ALLOW_UNKNOWN_PROTOCOLS || false, Ct = _.ALLOW_SELF_CLOSE_IN_ATTR !== false, Lt = _.SAFE_FOR_TEMPLATES || false, ue = _.SAFE_FOR_XML !== false, Yt = _.WHOLE_DOCUMENT || false, Wr = _.RETURN_DOM || false, qn = _.RETURN_DOM_FRAGMENT || false, Hn = _.RETURN_TRUSTED_TYPE || false, Ha = _.FORCE_BODY || false, Wc = _.SANITIZE_DOM !== false, qc = _.SANITIZE_NAMED_PROPS || false, ja = _.KEEP_CONTENT !== false, $i = _.IN_PLACE || false, Y = _.ALLOWED_URI_REGEXP || df, jr = _.NAMESPACE || De, Yn = _.MATHML_TEXT_INTEGRATION_POINTS || Yn, Gn = _.HTML_INTEGRATION_POINTS || Gn, it = _.CUSTOM_ELEMENT_HANDLING || {}, _.CUSTOM_ELEMENT_HANDLING && Gc(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (it.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck), _.CUSTOM_ELEMENT_HANDLING && Gc(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (it.attributeNameCheck = _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (it.allowCustomizedBuiltInElements = _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Lt && (lt = false), qn && (Wr = true), qr && (U = ht({}, fh), J = [], qr.html === true && (ht(U, uh), ht(J, dh)), qr.svg === true && (ht(U, Qa), ht(J, eo), ht(J, Kn)), qr.svgFilters === true && (ht(U, Ja), ht(J, eo), ht(J, Kn)), qr.mathMl === true && (ht(U, to), ht(J, ph), ht(J, Kn))), _.ADD_TAGS && (U === rt && (U = We(U)), ht(U, _.ADD_TAGS, Rt)), _.ADD_ATTR && (J === ut && (J = We(J)), ht(J, _.ADD_ATTR, Rt)), _.ADD_URI_SAFE_ATTR && ht(Ua, _.ADD_URI_SAFE_ATTR, Rt), _.FORBID_CONTENTS && (Hr === Hc && (Hr = We(Hr)), ht(Hr, _.FORBID_CONTENTS, Rt)), ja && (U["#text"] = true), Yt && ht(U, ["html", "head", "body"]), U.table && (ht(U, ["tbody"]), delete Bt.tbody), _.TRUSTED_TYPES_POLICY) {
        if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ni('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ni('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = _.TRUSTED_TYPES_POLICY, C = v.createHTML("");
      } else
        v === void 0 && (v = Xx(d, n)), v !== null && typeof C == "string" && (C = v.createHTML(""));
      Qt && Qt(_), Ur = _;
    }
  }, Vc = ht({}, [...Qa, ...Ja, ...Px]), Xc = ht({}, [...to, ...Nx]), ix = function(_) {
    let z = w(_);
    (!z || !z.tagName) && (z = {
      namespaceURI: jr,
      tagName: "template"
    });
    const V = fs(_.tagName), _t = fs(z.tagName);
    return Ga[_.namespaceURI] ? _.namespaceURI === Un ? z.namespaceURI === De ? V === "svg" : z.namespaceURI === jn ? V === "svg" && (_t === "annotation-xml" || Yn[_t]) : !!Vc[V] : _.namespaceURI === jn ? z.namespaceURI === De ? V === "math" : z.namespaceURI === Un ? V === "math" && Gn[_t] : !!Xc[V] : _.namespaceURI === De ? z.namespaceURI === Un && !Gn[_t] || z.namespaceURI === jn && !Yn[_t] ? false : !Xc[V] && (J0[V] || !Vc[V]) : !!(Fi === "application/xhtml+xml" && Ga[_.namespaceURI]) : false;
  }, ke = function(_) {
    Ri(t.removed, {
      element: _
    });
    try {
      w(_).removeChild(_);
    } catch {
      y(_);
    }
  }, Yr = function(_, z) {
    try {
      Ri(t.removed, {
        attribute: z.getAttributeNode(_),
        from: z
      });
    } catch {
      Ri(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(_), _ === "is")
      if (Wr || qn)
        try {
          ke(z);
        } catch {
        }
      else
        try {
          z.setAttribute(_, "");
        } catch {
        }
  }, Kc = function(_) {
    let z = null, V = null;
    if (Ha)
      _ = "<remove></remove>" + _;
    else {
      const Mt = hh(_, /^[\r\n\t ]+/);
      V = Mt && Mt[0];
    }
    Fi === "application/xhtml+xml" && jr === De && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const _t = v ? v.createHTML(_) : _;
    if (jr === De)
      try {
        z = new f().parseFromString(_t, Fi);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = S.createDocument(jr, "template", null);
      try {
        z.documentElement.innerHTML = Ya ? C : _t;
      } catch {
      }
    }
    const Wt = z.body || z.documentElement;
    return _ && V && Wt.insertBefore(r.createTextNode(V), Wt.childNodes[0] || null), jr === De ? k.call(z, Yt ? "html" : "body")[0] : Yt ? z.documentElement : Wt;
  }, Zc = function(_) {
    return T.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Xa = function(_) {
    return _ instanceof u && (typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || !(_.attributes instanceof h3) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function");
  }, Qc = function(_) {
    return typeof a == "function" && _ instanceof a;
  };
  function Ie(tt, _, z) {
    Xn(tt, (V) => {
      V.call(t, _, z, Ur);
    });
  }
  const Jc = function(_) {
    let z = null;
    if (Ie(L.beforeSanitizeElements, _, null), Xa(_))
      return ke(_), true;
    const V = Rt(_.nodeName);
    if (Ie(L.uponSanitizeElement, _, {
      tagName: V,
      allowedTags: U
    }), ue && _.hasChildNodes() && !Qc(_.firstElementChild) && Gt(/<[/\w!]/g, _.innerHTML) && Gt(/<[/\w!]/g, _.textContent) || _.nodeType === Wi.progressingInstruction || ue && _.nodeType === Wi.comment && Gt(/<[/\w]/g, _.data))
      return ke(_), true;
    if (!U[V] || Bt[V]) {
      if (!Bt[V] && eh(V) && (it.tagNameCheck instanceof RegExp && Gt(it.tagNameCheck, V) || it.tagNameCheck instanceof Function && it.tagNameCheck(V)))
        return false;
      if (ja && !Hr[V]) {
        const _t = w(_) || _.parentNode, Wt = x(_) || _.childNodes;
        if (Wt && _t) {
          const Mt = Wt.length;
          for (let te = Mt - 1; te >= 0; --te) {
            const Re = m(Wt[te], true);
            Re.__removalCount = (_.__removalCount || 0) + 1, _t.insertBefore(Re, b(_));
          }
        }
      }
      return ke(_), true;
    }
    return _ instanceof l && !ix(_) || (V === "noscript" || V === "noembed" || V === "noframes") && Gt(/<\/no(script|embed|frames)/i, _.innerHTML) ? (ke(_), true) : (Lt && _.nodeType === Wi.text && (z = _.textContent, Xn([D, F, M], (_t) => {
      z = Pi(z, _t, " ");
    }), _.textContent !== z && (Ri(t.removed, {
      element: _.cloneNode()
    }), _.textContent = z)), Ie(L.afterSanitizeElements, _, null), false);
  }, th = function(_, z, V) {
    if (Wc && (z === "id" || z === "name") && (V in r || V in rx))
      return false;
    if (!(lt && !I[z] && Gt($, z))) {
      if (!(xt && Gt(A, z))) {
        if (!J[z] || I[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(eh(_) && (it.tagNameCheck instanceof RegExp && Gt(it.tagNameCheck, _) || it.tagNameCheck instanceof Function && it.tagNameCheck(_)) && (it.attributeNameCheck instanceof RegExp && Gt(it.attributeNameCheck, z) || it.attributeNameCheck instanceof Function && it.attributeNameCheck(z)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && it.allowCustomizedBuiltInElements && (it.tagNameCheck instanceof RegExp && Gt(it.tagNameCheck, V) || it.tagNameCheck instanceof Function && it.tagNameCheck(V)))
          ) return false;
        } else if (!Ua[z]) {
          if (!Gt(Y, Pi(V, R, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && _ !== "script" && Ox(V, "data:") === 0 && jc[_])) {
              if (!(ct && !Gt(P, Pi(V, R, "")))) {
                if (V)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, eh = function(_) {
    return _ !== "annotation-xml" && hh(_, q);
  }, rh = function(_) {
    Ie(L.beforeSanitizeAttributes, _, null);
    const {
      attributes: z
    } = _;
    if (!z || Xa(_))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: J,
      forceKeepAttr: void 0
    };
    let _t = z.length;
    for (; _t--; ) {
      const Wt = z[_t], {
        name: Mt,
        namespaceURI: te,
        value: Re
      } = Wt, Oi = Rt(Mt), Ka = Re;
      let qt = Mt === "value" ? Ka : Dx(Ka);
      if (V.attrName = Oi, V.attrValue = qt, V.keepAttr = true, V.forceKeepAttr = void 0, Ie(L.uponSanitizeAttribute, _, V), qt = V.attrValue, qc && (Oi === "id" || Oi === "name") && (Yr(Mt, _), qt = Z0 + qt), ue && Gt(/((--!?|])>)|<\/(style|title)/i, qt)) {
        Yr(Mt, _);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        Yr(Mt, _);
        continue;
      }
      if (!Ct && Gt(/\/>/i, qt)) {
        Yr(Mt, _);
        continue;
      }
      Lt && Xn([D, F, M], (nh) => {
        qt = Pi(qt, nh, " ");
      });
      const ih = Rt(_.nodeName);
      if (!th(ih, Oi, qt)) {
        Yr(Mt, _);
        continue;
      }
      if (v && typeof d == "object" && typeof d.getAttributeType == "function" && !te)
        switch (d.getAttributeType(ih, Oi)) {
          case "TrustedHTML": {
            qt = v.createHTML(qt);
            break;
          }
          case "TrustedScriptURL": {
            qt = v.createScriptURL(qt);
            break;
          }
        }
      if (qt !== Ka)
        try {
          te ? _.setAttributeNS(te, Mt, qt) : _.setAttribute(Mt, qt), Xa(_) ? ke(_) : ch(t.removed);
        } catch {
          Yr(Mt, _);
        }
    }
    Ie(L.afterSanitizeAttributes, _, null);
  }, nx = function tt(_) {
    let z = null;
    const V = Zc(_);
    for (Ie(L.beforeSanitizeShadowDOM, _, null); z = V.nextNode(); )
      Ie(L.uponSanitizeShadowNode, z, null), Jc(z), rh(z), z.content instanceof s && tt(z.content);
    Ie(L.afterSanitizeShadowDOM, _, null);
  };
  return t.sanitize = function(tt) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, V = null, _t = null, Wt = null;
    if (Ya = !tt, Ya && (tt = "<!-->"), typeof tt != "string" && !Qc(tt))
      if (typeof tt.toString == "function") {
        if (tt = tt.toString(), typeof tt != "string")
          throw Ni("dirty is not a string, aborting");
      } else
        throw Ni("toString is not a function");
    if (!t.isSupported)
      return tt;
    if (Wn || Va(_), t.removed = [], typeof tt == "string" && ($i = false), $i) {
      if (tt.nodeName) {
        const Re = Rt(tt.nodeName);
        if (!U[Re] || Bt[Re])
          throw Ni("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (tt instanceof a)
      z = Kc("<!---->"), V = z.ownerDocument.importNode(tt, true), V.nodeType === Wi.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? z = V : z.appendChild(V);
    else {
      if (!Wr && !Lt && !Yt && // eslint-disable-next-line unicorn/prefer-includes
      tt.indexOf("<") === -1)
        return v && Hn ? v.createHTML(tt) : tt;
      if (z = Kc(tt), !z)
        return Wr ? null : Hn ? C : "";
    }
    z && Ha && ke(z.firstChild);
    const Mt = Zc($i ? tt : z);
    for (; _t = Mt.nextNode(); )
      Jc(_t), rh(_t), _t.content instanceof s && nx(_t.content);
    if ($i)
      return tt;
    if (Wr) {
      if (qn)
        for (Wt = O.call(z.ownerDocument); z.firstChild; )
          Wt.appendChild(z.firstChild);
      else
        Wt = z;
      return (J.shadowroot || J.shadowrootmode) && (Wt = E.call(i, Wt, true)), Wt;
    }
    let te = Yt ? z.outerHTML : z.innerHTML;
    return Yt && U["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Gt(pf, z.ownerDocument.doctype.name) && (te = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + te), Lt && Xn([D, F, M], (Re) => {
      te = Pi(te, Re, " ");
    }), v && Hn ? v.createHTML(te) : te;
  }, t.setConfig = function() {
    let tt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Va(tt), Wn = true;
  }, t.clearConfig = function() {
    Ur = null, Wn = false;
  }, t.isValidAttribute = function(tt, _, z) {
    Ur || Va({});
    const V = Rt(tt), _t = Rt(_);
    return th(V, _t, z);
  }, t.addHook = function(tt, _) {
    typeof _ == "function" && Ri(L[tt], _);
  }, t.removeHook = function(tt, _) {
    if (_ !== void 0) {
      const z = $x(L[tt], _);
      return z === -1 ? void 0 : Fx(L[tt], z, 1)[0];
    }
    return ch(L[tt]);
  }, t.removeHooks = function(tt) {
    L[tt] = [];
  }, t.removeAllHooks = function() {
    L = mh();
  }, t;
}
var fi = gf();
var mf = Object.defineProperty;
var g = (e11, t) => mf(e11, "name", { value: t, configurable: true });
var Kx = (e11, t) => {
  for (var r in t)
    mf(e11, r, { get: t[r], enumerable: true });
};
var Pe = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var N = {
  trace: g((...e11) => {
  }, "trace"),
  debug: g((...e11) => {
  }, "debug"),
  info: g((...e11) => {
  }, "info"),
  warn: g((...e11) => {
  }, "warn"),
  error: g((...e11) => {
  }, "error"),
  fatal: g((...e11) => {
  }, "fatal")
};
var Fl = g(function(e11 = "fatal") {
  let t = Pe.fatal;
  typeof e11 == "string" ? e11.toLowerCase() in Pe && (t = Pe[e11]) : typeof e11 == "number" && (t = e11), N.trace = () => {
  }, N.debug = () => {
  }, N.info = () => {
  }, N.warn = () => {
  }, N.error = () => {
  }, N.fatal = () => {
  }, t <= Pe.fatal && (N.fatal = console.error ? console.error.bind(console, fe("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", fe("FATAL"))), t <= Pe.error && (N.error = console.error ? console.error.bind(console, fe("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", fe("ERROR"))), t <= Pe.warn && (N.warn = console.warn ? console.warn.bind(console, fe("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", fe("WARN"))), t <= Pe.info && (N.info = console.info ? console.info.bind(console, fe("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", fe("INFO"))), t <= Pe.debug && (N.debug = console.debug ? console.debug.bind(console, fe("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", fe("DEBUG"))), t <= Pe.trace && (N.trace = console.debug ? console.debug.bind(console, fe("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", fe("TRACE")));
}, "setLogLevel");
var fe = g((e11) => `%c${vx().format("ss.SSS")} : ${e11} : `, "format");
var yf = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var hn = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var Zx = /\s*%%.*\n/gm;
var ii;
var xf = (ii = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, g(ii, "UnknownDiagramError"), ii);
var Ar = {};
var Ol = g(function(e11, t) {
  e11 = e11.replace(yf, "").replace(hn, "").replace(Zx, `
`);
  for (const [r, { detector: i }] of Object.entries(Ar))
    if (i(e11, t))
      return r;
  throw new xf(
    `No diagram type detected matching given configuration for text: ${e11}`
  );
}, "detectType");
var Mo = g((...e11) => {
  for (const { id: t, detector: r, loader: i } of e11)
    bf(t, r, i);
}, "registerLazyLoadedDiagrams");
var bf = g((e11, t, r) => {
  Ar[e11] && N.warn(`Detector with key ${e11} already exists. Overwriting.`), Ar[e11] = { detector: t, loader: r }, N.debug(`Detector with key ${e11} added${r ? " with loader" : ""}`);
}, "addDetector");
var Qx = g((e11) => Ar[e11].loader, "getDiagramLoader");
var $o = g((e11, t, { depth: r = 2, clobber: i = false } = {}) => {
  const n = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e11) ? (t.forEach((s) => $o(e11, s, n)), e11) : Array.isArray(t) && Array.isArray(e11) ? (t.forEach((s) => {
    e11.includes(s) || e11.push(s);
  }), e11) : e11 === void 0 || r <= 0 ? e11 != null && typeof e11 == "object" && typeof t == "object" ? Object.assign(e11, t) : t : (t !== void 0 && typeof e11 == "object" && typeof t == "object" && Object.keys(t).forEach((s) => {
    typeof t[s] == "object" && (e11[s] === void 0 || typeof e11[s] == "object") ? (e11[s] === void 0 && (e11[s] = Array.isArray(t[s]) ? [] : {}), e11[s] = $o(e11[s], t[s], { depth: r - 1, clobber: i })) : (i || typeof e11[s] != "object" && typeof t[s] != "object") && (e11[s] = t[s]);
  }), e11);
}, "assignWithDepth");
var zt = $o;
var pa = "#ffffff";
var ga = "#f2f2f2";
var Vt = g((e11, t) => t ? B(e11, { s: -40, l: 10 }) : B(e11, { s: -40, l: -10 }), "mkBorder");
var ni;
var Jx = (ni = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || B(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || B(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Vt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Vt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Vt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Vt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || W(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || W(this.tertiaryColor), this.lineColor = this.lineColor || W(this.background), this.arrowheadColor = this.arrowheadColor || W(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || et(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || W(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || H(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || et(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || B(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || B(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || B(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || B(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || B(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || B(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || B(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || B(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || B(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || W(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || H(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || et(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || B(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || B(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || B(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || B(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || B(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || B(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || B(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || B(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || B(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || B(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || B(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || B(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || B(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || B(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || B(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || B(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || B(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: ((_a3 = this.radar) == null ? void 0 : _a3.axisColor) || this.lineColor,
      axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
      axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
      curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
      curveStrokeWidth: ((_e2 = this.radar) == null ? void 0 : _e2.curveStrokeWidth) || 2,
      graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_h2 = this.radar) == null ? void 0 : _h2.graticuleOpacity) || 0.3,
      legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
      legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || B(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || B(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || B(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || B(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || B(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || B(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ln(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_k2 = this.xyChart) == null ? void 0 : _k2.backgroundColor) || this.background,
      titleColor: ((_l2 = this.xyChart) == null ? void 0 : _l2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_m2 = this.xyChart) == null ? void 0 : _m2.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_o2 = this.xyChart) == null ? void 0 : _o2.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_p2 = this.xyChart) == null ? void 0 : _p2.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_r2 = this.xyChart) == null ? void 0 : _r2.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_s2 = this.xyChart) == null ? void 0 : _s2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_t = this.xyChart) == null ? void 0 : _t.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_u2 = this.xyChart) == null ? void 0 : _u2.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || B(this.primaryColor, { h: -30 }), this.git4 = this.git4 || B(this.primaryColor, { h: -60 }), this.git5 = this.git5 || B(this.primaryColor, { h: -90 }), this.git6 = this.git6 || B(this.primaryColor, { h: 60 }), this.git7 = this.git7 || B(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || W(this.git0), this.gitInv1 = this.gitInv1 || W(this.git1), this.gitInv2 = this.gitInv2 || W(this.git2), this.gitInv3 = this.gitInv3 || W(this.git3), this.gitInv4 = this.gitInv4 || W(this.git4), this.gitInv5 = this.gitInv5 || W(this.git5), this.gitInv6 = this.gitInv6 || W(this.git6), this.gitInv7 = this.gitInv7 || W(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pa, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(ni, "Theme"), ni);
var tb = g((e11) => {
  const t = new Jx();
  return t.calculate(e11), t;
}, "getThemeVariables");
var si;
var eb = (si = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = H(this.primaryColor, 16), this.tertiaryColor = B(this.primaryColor, { h: -160 }), this.primaryBorderColor = W(this.background), this.secondaryBorderColor = Vt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Vt(this.tertiaryColor, this.darkMode), this.primaryTextColor = W(this.primaryColor), this.secondaryTextColor = W(this.secondaryColor), this.tertiaryTextColor = W(this.tertiaryColor), this.lineColor = W(this.background), this.textColor = W(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = H(W("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = cn(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = et("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = et(this.sectionBkgColor, 10), this.taskBorderColor = cn(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = cn(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    this.secondBkg = H(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = H(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = H(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = B(this.primaryColor, { h: 64 }), this.fillType3 = B(this.secondaryColor, { h: 64 }), this.fillType4 = B(this.primaryColor, { h: -64 }), this.fillType5 = B(this.secondaryColor, { h: -64 }), this.fillType6 = B(this.primaryColor, { h: 128 }), this.fillType7 = B(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || B(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || B(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || B(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || B(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || B(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || B(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || B(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || B(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || B(this.primaryColor, { h: 330 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || W(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10);
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || B(this.mainBkg, { h: 30, s: -30, l: -(-10 + t * 4) }), this["surfacePeer" + t] = this["surfacePeer" + t] || B(this.mainBkg, { h: 30, s: -30, l: -(-7 + t * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || B(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || B(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || B(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || B(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || B(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || B(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ln(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c2 = this.xyChart) == null ? void 0 : _c2.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d2 = this.xyChart) == null ? void 0 : _d2.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e2 = this.xyChart) == null ? void 0 : _e2.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f2 = this.xyChart) == null ? void 0 : _f2.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g2 = this.xyChart) == null ? void 0 : _g2.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h2 = this.xyChart) == null ? void 0 : _h2.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: ((_l2 = this.radar) == null ? void 0 : _l2.axisColor) || this.lineColor,
      axisStrokeWidth: ((_m2 = this.radar) == null ? void 0 : _m2.axisStrokeWidth) || 2,
      axisLabelFontSize: ((_n2 = this.radar) == null ? void 0 : _n2.axisLabelFontSize) || 12,
      curveOpacity: ((_o2 = this.radar) == null ? void 0 : _o2.curveOpacity) || 0.5,
      curveStrokeWidth: ((_p2 = this.radar) == null ? void 0 : _p2.curveStrokeWidth) || 2,
      graticuleColor: ((_q = this.radar) == null ? void 0 : _q.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_r2 = this.radar) == null ? void 0 : _r2.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_s2 = this.radar) == null ? void 0 : _s2.graticuleOpacity) || 0.3,
      legendBoxSize: ((_t = this.radar) == null ? void 0 : _t.legendBoxSize) || 12,
      legendFontSize: ((_u2 = this.radar) == null ? void 0 : _u2.legendFontSize) || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = H(this.secondaryColor, 20), this.git1 = H(this.pie2 || this.secondaryColor, 20), this.git2 = H(this.pie3 || this.tertiaryColor, 20), this.git3 = H(this.pie4 || B(this.primaryColor, { h: -30 }), 20), this.git4 = H(this.pie5 || B(this.primaryColor, { h: -60 }), 20), this.git5 = H(this.pie6 || B(this.primaryColor, { h: -90 }), 10), this.git6 = H(this.pie7 || B(this.primaryColor, { h: 60 }), 10), this.git7 = H(this.pie8 || B(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || W(this.git0), this.gitInv1 = this.gitInv1 || W(this.git1), this.gitInv2 = this.gitInv2 || W(this.git2), this.gitInv3 = this.gitInv3 || W(this.git3), this.gitInv4 = this.gitInv4 || W(this.git4), this.gitInv5 = this.gitInv5 || W(this.git5), this.gitInv6 = this.gitInv6 || W(this.git6), this.gitInv7 = this.gitInv7 || W(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || W(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || W(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || H(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || H(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(si, "Theme"), si);
var rb = g((e11) => {
  const t = new eb();
  return t.calculate(e11), t;
}, "getThemeVariables");
var ai;
var ib = (ai = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = B(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = B(this.primaryColor, { h: -160 }), this.primaryBorderColor = Vt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Vt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Vt(this.tertiaryColor, this.darkMode), this.primaryTextColor = W(this.primaryColor), this.secondaryTextColor = W(this.secondaryColor), this.tertiaryTextColor = W(this.tertiaryColor), this.lineColor = W(this.background), this.textColor = W(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = cn(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || B(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || B(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || B(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || B(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || B(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || B(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || B(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || B(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || B(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || B(this["cScale" + t], { h: 180 });
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || B(this.mainBkg, { h: 30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || B(this.mainBkg, { h: 30, l: -(7 + t * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || W(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || W(this.labelTextColor);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = B(this.primaryColor, { h: 64 }), this.fillType3 = B(this.secondaryColor, { h: 64 }), this.fillType4 = B(this.primaryColor, { h: -64 }), this.fillType5 = B(this.secondaryColor, { h: -64 }), this.fillType6 = B(this.primaryColor, { h: 128 }), this.fillType7 = B(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || B(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || B(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || B(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || B(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || B(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || B(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || B(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || B(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || B(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || B(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || B(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || B(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || B(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || B(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || B(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || B(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ln(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: ((_a3 = this.radar) == null ? void 0 : _a3.axisColor) || this.lineColor,
      axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
      axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
      curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
      curveStrokeWidth: ((_e2 = this.radar) == null ? void 0 : _e2.curveStrokeWidth) || 2,
      graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_h2 = this.radar) == null ? void 0 : _h2.graticuleOpacity) || 0.3,
      legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
      legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((_k2 = this.xyChart) == null ? void 0 : _k2.backgroundColor) || this.background,
      titleColor: ((_l2 = this.xyChart) == null ? void 0 : _l2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_m2 = this.xyChart) == null ? void 0 : _m2.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_o2 = this.xyChart) == null ? void 0 : _o2.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_p2 = this.xyChart) == null ? void 0 : _p2.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_r2 = this.xyChart) == null ? void 0 : _r2.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_s2 = this.xyChart) == null ? void 0 : _s2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_t = this.xyChart) == null ? void 0 : _t.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_u2 = this.xyChart) == null ? void 0 : _u2.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || B(this.primaryColor, { h: -30 }), this.git4 = this.git4 || B(this.primaryColor, { h: -60 }), this.git5 = this.git5 || B(this.primaryColor, { h: -90 }), this.git6 = this.git6 || B(this.primaryColor, { h: 60 }), this.git7 = this.git7 || B(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || et(W(this.git0), 25), this.gitInv1 = this.gitInv1 || W(this.git1), this.gitInv2 = this.gitInv2 || W(this.git2), this.gitInv3 = this.gitInv3 || W(this.git3), this.gitInv4 = this.gitInv4 || W(this.git4), this.gitInv5 = this.gitInv5 || W(this.git5), this.gitInv6 = this.gitInv6 || W(this.git6), this.gitInv7 = this.gitInv7 || W(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || W(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || W(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pa, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ga;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(ai, "Theme"), ai);
var nb = g((e11) => {
  const t = new ib();
  return t.calculate(e11), t;
}, "getThemeVariables");
var oi;
var sb = (oi = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = H("#cde498", 10), this.primaryBorderColor = Vt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Vt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Vt(this.tertiaryColor, this.darkMode), this.primaryTextColor = W(this.primaryColor), this.secondaryTextColor = W(this.secondaryColor), this.tertiaryTextColor = W(this.primaryColor), this.lineColor = W(this.background), this.textColor = W(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    this.actorBorder = et(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || B(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || B(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || B(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || B(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || B(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || B(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || B(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || B(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || B(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || B(this["cScale" + t], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || B(this.mainBkg, { h: 30, s: -30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || B(this.mainBkg, { h: 30, s: -30, l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = B(this.primaryColor, { h: 64 }), this.fillType3 = B(this.secondaryColor, { h: 64 }), this.fillType4 = B(this.primaryColor, { h: -64 }), this.fillType5 = B(this.secondaryColor, { h: -64 }), this.fillType6 = B(this.primaryColor, { h: 128 }), this.fillType7 = B(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || B(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || B(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || B(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || B(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || B(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || B(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || B(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || B(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || B(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || B(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || B(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || B(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || B(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || B(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || B(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ln(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: ((_a3 = this.radar) == null ? void 0 : _a3.axisColor) || this.lineColor,
      axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
      axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
      curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
      curveStrokeWidth: ((_e2 = this.radar) == null ? void 0 : _e2.curveStrokeWidth) || 2,
      graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_h2 = this.radar) == null ? void 0 : _h2.graticuleOpacity) || 0.3,
      legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
      legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((_k2 = this.xyChart) == null ? void 0 : _k2.backgroundColor) || this.background,
      titleColor: ((_l2 = this.xyChart) == null ? void 0 : _l2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_m2 = this.xyChart) == null ? void 0 : _m2.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_o2 = this.xyChart) == null ? void 0 : _o2.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_p2 = this.xyChart) == null ? void 0 : _p2.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_r2 = this.xyChart) == null ? void 0 : _r2.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_s2 = this.xyChart) == null ? void 0 : _s2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_t = this.xyChart) == null ? void 0 : _t.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_u2 = this.xyChart) == null ? void 0 : _u2.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || B(this.primaryColor, { h: -30 }), this.git4 = this.git4 || B(this.primaryColor, { h: -60 }), this.git5 = this.git5 || B(this.primaryColor, { h: -90 }), this.git6 = this.git6 || B(this.primaryColor, { h: 60 }), this.git7 = this.git7 || B(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || W(this.git0), this.gitInv1 = this.gitInv1 || W(this.git1), this.gitInv2 = this.gitInv2 || W(this.git2), this.gitInv3 = this.gitInv3 || W(this.git3), this.gitInv4 = this.gitInv4 || W(this.git4), this.gitInv5 = this.gitInv5 || W(this.git5), this.gitInv6 = this.gitInv6 || W(this.git6), this.gitInv7 = this.gitInv7 || W(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || W(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || W(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pa, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(oi, "Theme"), oi);
var ab = g((e11) => {
  const t = new sb();
  return t.calculate(e11), t;
}, "getThemeVariables");
var li;
var ob = (li = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = H(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = B(this.primaryColor, { h: -160 }), this.primaryBorderColor = Vt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Vt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Vt(this.tertiaryColor, this.darkMode), this.primaryTextColor = W(this.primaryColor), this.secondaryTextColor = W(this.secondaryColor), this.tertiaryTextColor = W(this.tertiaryColor), this.lineColor = W(this.background), this.textColor = W(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2;
    this.secondBkg = H(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || W(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || B(this.mainBkg, { l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || B(this.mainBkg, { l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = H(this.contrast, 30), this.sectionBkgColor2 = H(this.contrast, 30), this.taskBorderColor = et(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = H(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = et(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = B(this.primaryColor, { h: 64 }), this.fillType3 = B(this.secondaryColor, { h: 64 }), this.fillType4 = B(this.primaryColor, { h: -64 }), this.fillType5 = B(this.secondaryColor, { h: -64 }), this.fillType6 = B(this.primaryColor, { h: 128 }), this.fillType7 = B(this.secondaryColor, { h: 128 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || B(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || B(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || B(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || B(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || B(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || B(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ln(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c2 = this.xyChart) == null ? void 0 : _c2.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d2 = this.xyChart) == null ? void 0 : _d2.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e2 = this.xyChart) == null ? void 0 : _e2.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f2 = this.xyChart) == null ? void 0 : _f2.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g2 = this.xyChart) == null ? void 0 : _g2.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h2 = this.xyChart) == null ? void 0 : _h2.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: ((_l2 = this.radar) == null ? void 0 : _l2.axisColor) || this.lineColor,
      axisStrokeWidth: ((_m2 = this.radar) == null ? void 0 : _m2.axisStrokeWidth) || 2,
      axisLabelFontSize: ((_n2 = this.radar) == null ? void 0 : _n2.axisLabelFontSize) || 12,
      curveOpacity: ((_o2 = this.radar) == null ? void 0 : _o2.curveOpacity) || 0.5,
      curveStrokeWidth: ((_p2 = this.radar) == null ? void 0 : _p2.curveStrokeWidth) || 2,
      graticuleColor: ((_q = this.radar) == null ? void 0 : _q.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((_r2 = this.radar) == null ? void 0 : _r2.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_s2 = this.radar) == null ? void 0 : _s2.graticuleOpacity) || 0.3,
      legendBoxSize: ((_t = this.radar) == null ? void 0 : _t.legendBoxSize) || 12,
      legendFontSize: ((_u2 = this.radar) == null ? void 0 : _u2.legendFontSize) || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = et(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || B(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || B(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || B(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || B(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || B(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || W(this.git0), this.gitInv1 = this.gitInv1 || W(this.git1), this.gitInv2 = this.gitInv2 || W(this.git2), this.gitInv3 = this.gitInv3 || W(this.git3), this.gitInv4 = this.gitInv4 || W(this.git4), this.gitInv5 = this.gitInv5 || W(this.git5), this.gitInv6 = this.gitInv6 || W(this.git6), this.gitInv7 = this.gitInv7 || W(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pa, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(li, "Theme"), li);
var lb = g((e11) => {
  const t = new ob();
  return t.calculate(e11), t;
}, "getThemeVariables");
var Ge = {
  base: {
    getThemeVariables: tb
  },
  dark: {
    getThemeVariables: rb
  },
  default: {
    getThemeVariables: nb
  },
  forest: {
    getThemeVariables: ab
  },
  neutral: {
    getThemeVariables: lb
  }
};
var _e = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: false
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false,
    hideEmptyMembersBox: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: true,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: false,
    showTitle: true,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  kanban: {
    useMaxWidth: true,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    parallelCommits: false,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: true,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: true,
    padding: 8
  },
  packet: {
    useMaxWidth: true,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: true,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: true,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  radar: {
    useMaxWidth: true,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: false,
  forceLegacyMathML: false,
  deterministicIds: false,
  fontSize: 16,
  markdownAutoWrap: true,
  suppressErrorRendering: false
};
var wf = {
  ..._e,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: false,
    nodePlacementStrategy: "BRANDES_KOEPF"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ge.default.getThemeVariables(),
  sequence: {
    ..._e.sequence,
    messageFont: g(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: g(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: g(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: false
  },
  gantt: {
    ..._e.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ..._e.c4,
    useWidth: void 0,
    personFont: g(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ..._e.flowchart,
      inheritDir: false
      // default to legacy behavior
    },
    external_personFont: g(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: g(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: g(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: g(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: g(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: g(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: g(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: g(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: g(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: g(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: g(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: g(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: g(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: g(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: g(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: g(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: g(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: g(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: g(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: g(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: g(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ..._e.pie,
    useWidth: 984
  },
  xyChart: {
    ..._e.xyChart,
    useWidth: void 0
  },
  requirement: {
    ..._e.requirement,
    useWidth: void 0
  },
  packet: {
    ..._e.packet
  },
  radar: {
    ..._e.radar
  },
  treemap: {
    useMaxWidth: true,
    padding: 10,
    diagramPadding: 8,
    showValues: true,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  }
};
var vf = g((e11, t = "") => Object.keys(e11).reduce((r, i) => Array.isArray(e11[i]) ? r : typeof e11[i] == "object" && e11[i] !== null ? [...r, t + i, ...vf(e11[i], "")] : [...r, t + i], []), "keyify");
var cb = new Set(vf(wf, ""));
var Cf = wf;
var Es = g((e11) => {
  if (N.debug("sanitizeDirective called with", e11), !(typeof e11 != "object" || e11 == null)) {
    if (Array.isArray(e11)) {
      e11.forEach((t) => Es(t));
      return;
    }
    for (const t of Object.keys(e11)) {
      if (N.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !cb.has(t) || e11[t] == null) {
        N.debug("sanitize deleting key: ", t), delete e11[t];
        continue;
      }
      if (typeof e11[t] == "object") {
        N.debug("sanitizing object", t), Es(e11[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (N.debug("sanitizing css option", t), e11[t] = hb(e11[t]));
    }
    if (e11.themeVariables)
      for (const t of Object.keys(e11.themeVariables)) {
        const r = e11.themeVariables[t];
        (r == null ? void 0 : r.match) && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e11.themeVariables[t] = "");
      }
    N.debug("After sanitization", e11);
  }
}, "sanitizeDirective");
var hb = g((e11) => {
  let t = 0, r = 0;
  for (const i of e11) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e11;
}, "sanitizeCss");
var di = Object.freeze(Cf);
var ne = zt({}, di);
var kf;
var pi = [];
var un = zt({}, di);
var ma = g((e11, t) => {
  let r = zt({}, e11), i = {};
  for (const n of t)
    Tf(n), i = zt(i, n);
  if (r = zt(r, i), i.theme && i.theme in Ge) {
    const n = zt({}, kf), s = zt(
      n.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Ge && (r.themeVariables = Ge[r.theme].getThemeVariables(s));
  }
  return un = r, Bf(un), un;
}, "updateCurrentConfig");
var ub = g((e11) => (ne = zt({}, di), ne = zt(ne, e11), e11.theme && Ge[e11.theme] && (ne.themeVariables = Ge[e11.theme].getThemeVariables(e11.themeVariables)), ma(ne, pi), ne), "setSiteConfig");
var fb = g((e11) => {
  kf = zt({}, e11);
}, "saveConfigFromInitialize");
var db = g((e11) => (ne = zt(ne, e11), ma(ne, pi), ne), "updateSiteConfig");
var _f = g(() => zt({}, ne), "getSiteConfig");
var Sf = g((e11) => (Bf(e11), zt(un, e11), oe()), "setConfig");
var oe = g(() => zt({}, un), "getConfig");
var Tf = g((e11) => {
  e11 && (["secure", ...ne.secure ?? []].forEach((t) => {
    Object.hasOwn(e11, t) && (N.debug(`Denied attempt to modify a secure key ${t}`, e11[t]), delete e11[t]);
  }), Object.keys(e11).forEach((t) => {
    t.startsWith("__") && delete e11[t];
  }), Object.keys(e11).forEach((t) => {
    typeof e11[t] == "string" && (e11[t].includes("<") || e11[t].includes(">") || e11[t].includes("url(data:")) && delete e11[t], typeof e11[t] == "object" && Tf(e11[t]);
  }));
}, "sanitize");
var pb = g((e11) => {
  var _a3;
  Es(e11), e11.fontFamily && !((_a3 = e11.themeVariables) == null ? void 0 : _a3.fontFamily) && (e11.themeVariables = {
    ...e11.themeVariables,
    fontFamily: e11.fontFamily
  }), pi.push(e11), ma(ne, pi);
}, "addDirective");
var Ms = g((e11 = ne) => {
  pi = [], ma(e11, pi);
}, "reset");
var gb = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var yh = {};
var mb = g((e11) => {
  yh[e11] || (N.warn(gb[e11]), yh[e11] = true);
}, "issueWarning");
var Bf = g((e11) => {
  e11 && (e11.lazyLoadedDiagrams || e11.loadExternalDiagramsAtStartup) && mb("LAZY_LOAD_DEPRECATED");
}, "checkConfig");
var An = /<br\s*\/?>/gi;
var yb = g((e11) => e11 ? Ef(e11).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows");
var xb = /* @__PURE__ */ (() => {
  let e11 = false;
  return () => {
    e11 || (Lf(), e11 = true);
  };
})();
function Lf() {
  const e11 = "data-temp-href-target";
  fi.addHook("beforeSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e11, t.getAttribute("target") ?? "");
  }), fi.addHook("afterSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute(e11) && (t.setAttribute("target", t.getAttribute(e11) ?? ""), t.removeAttribute(e11), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
g(Lf, "setupDompurifyHooks");
var Af = g((e11) => (xb(), fi.sanitize(e11)), "removeScript");
var xh = g((e11, t) => {
  var _a3;
  if (((_a3 = t.flowchart) == null ? void 0 : _a3.htmlLabels) !== false) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" ? e11 = Af(e11) : r !== "loose" && (e11 = Ef(e11), e11 = e11.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e11 = e11.replace(/=/g, "&equals;"), e11 = Cb(e11));
  }
  return e11;
}, "sanitizeMore");
var Er = g((e11, t) => e11 && (t.dompurifyConfig ? e11 = fi.sanitize(xh(e11, t), t.dompurifyConfig).toString() : e11 = fi.sanitize(xh(e11, t), {
  FORBID_TAGS: ["style"]
}).toString(), e11), "sanitizeText");
var bb = g((e11, t) => typeof e11 == "string" ? Er(e11, t) : e11.flat().map((r) => Er(r, t)), "sanitizeTextOrArray");
var wb = g((e11) => An.test(e11), "hasBreaks");
var vb = g((e11) => e11.split(An), "splitBreaks");
var Cb = g((e11) => e11.replace(/#br#/g, "<br/>"), "placeholderToBreak");
var Ef = g((e11) => e11.replace(An, "#br#"), "breakToPlaceholder");
var Mf = g((e11) => {
  let t = "";
  return e11 && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl");
var Dt = g((e11) => !(e11 === false || ["false", "null", "0"].includes(String(e11).trim().toLowerCase())), "evaluate");
var kb = g(function(...e11) {
  const t = e11.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax");
var _b = g(function(...e11) {
  const t = e11.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin");
var bh = g(function(e11) {
  const t = e11.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    if (n === "," && i > 0 && i + 1 < t.length) {
      const s = t[i - 1], o = t[i + 1];
      Sb(s, o) && (n = s + "," + o, i++, r.pop());
    }
    r.push(Tb(n));
  }
  return r.join("");
}, "parseGenericTypes");
var Fo = g((e11, t) => Math.max(0, e11.split(t).length - 1), "countOccurrence");
var Sb = g((e11, t) => {
  const r = Fo(e11, "~"), i = Fo(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets");
var Tb = g((e11) => {
  const t = Fo(e11, "~");
  let r = false;
  if (t <= 1)
    return e11;
  t % 2 !== 0 && e11.startsWith("~") && (e11 = e11.substring(1), r = true);
  const i = [...e11];
  let n = i.indexOf("~"), s = i.lastIndexOf("~");
  for (; n !== -1 && s !== -1 && n !== s; )
    i[n] = "<", i[s] = ">", n = i.indexOf("~"), s = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet");
var wh = g(() => window.MathMLElement !== void 0, "isMathMLSupported");
var Oo = /\$\$(.*)\$\$/g;
var gi = g((e11) => {
  var _a3;
  return (((_a3 = e11.match(Oo)) == null ? void 0 : _a3.length) ?? 0) > 0;
}, "hasKatex");
var YF = g(async (e11, t) => {
  var _a3;
  e11 = await Dl(e11, t);
  const r = document.createElement("div");
  r.innerHTML = e11, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", (_a3 = document.querySelector("body")) == null ? void 0 : _a3.insertAdjacentElement("beforeend", r);
  const n = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), n;
}, "calculateMathMLDimensions");
var Dl = g(async (e11, t) => {
  if (!gi(e11))
    return e11;
  if (!(wh() || t.legacyMathML || t.forceLegacyMathML))
    return e11.replace(Oo, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-CUSbq6rG-JSN3E5DC.js"), i = t.forceLegacyMathML || !wh() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e11.split(An).map(
      (n) => gi(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`
    ).join("").replace(
      Oo,
      (n, s) => r.renderToString(s, {
        throwOnError: true,
        displayMode: true,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatex");
var Ti = {
  getRows: yb,
  sanitizeText: Er,
  sanitizeTextOrArray: bb,
  hasBreaks: wb,
  splitBreaks: vb,
  lineBreakRegex: An,
  removeScript: Af,
  getUrl: Mf,
  evaluate: Dt,
  getMax: kb,
  getMin: _b
};
var Bb = g(function(e11, t) {
  for (let r of t)
    e11.attr(r[0], r[1]);
}, "d3Attrs");
var Lb = g(function(e11, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e11), i.set("width", t)), i;
}, "calculateSvgSizeAttrs");
var $f = g(function(e11, t, r, i) {
  const n = Lb(t, r, i);
  Bb(e11, n);
}, "configureSvgSize");
var Ab = g(function(e11, t, r, i) {
  const n = t.node().getBBox(), s = n.width, o = n.height;
  N.info(`SVG bounds: ${s}x${o}`, n);
  let a = 0, l = 0;
  N.info(`Graph bounds: ${a}x${l}`, e11), a = s + r * 2, l = o + r * 2, N.info(`Calculated bounds: ${a}x${l}`), $f(t, l, a, i);
  const c = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox");
var ds = {};
var Eb = g((e11, t, r) => {
  let i = "";
  return e11 in ds && ds[e11] ? i = ds[e11](r) : N.warn(`No theme found for ${e11}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles");
var Mb = g((e11, t) => {
  t !== void 0 && (ds[e11] = t);
}, "addStylesForDiagram");
var $b = Eb;
var Ff = {};
Kx(Ff, {
  clear: () => Fb,
  getAccDescription: () => Rb,
  getAccTitle: () => Db,
  getDiagramTitle: () => Nb,
  setAccDescription: () => Ib,
  setAccTitle: () => Ob,
  setDiagramTitle: () => Pb
});
var Il = "";
var Rl = "";
var Pl = "";
var Nl = g((e11) => Er(e11, oe()), "sanitizeText");
var Fb = g(() => {
  Il = "", Pl = "", Rl = "";
}, "clear");
var Ob = g((e11) => {
  Il = Nl(e11).replace(/^\s+/g, "");
}, "setAccTitle");
var Db = g(() => Il, "getAccTitle");
var Ib = g((e11) => {
  Pl = Nl(e11).replace(/\n\s+/g, `
`);
}, "setAccDescription");
var Rb = g(() => Pl, "getAccDescription");
var Pb = g((e11) => {
  Rl = Nl(e11);
}, "setDiagramTitle");
var Nb = g(() => Rl, "getDiagramTitle");
var vh = N;
var zb = Fl;
var gt = oe;
var GF = Sf;
var VF = di;
var ya = g((e11) => Er(e11, gt()), "sanitizeText");
var Wb = Ab;
var qb = g(() => Ff, "getCommonDb");
var $s = {};
var Fs = g((e11, t, r) => {
  var _a3;
  $s[e11] && vh.warn(`Diagram with id ${e11} already registered. Overwriting.`), $s[e11] = t, r && bf(e11, r), Mb(e11, t.styles), (_a3 = t.injectUtils) == null ? void 0 : _a3.call(
    t,
    vh,
    zb,
    gt,
    ya,
    Wb,
    qb(),
    () => {
    }
  );
}, "registerDiagram");
var Do = g((e11) => {
  if (e11 in $s)
    return $s[e11];
  throw new Hb(e11);
}, "getDiagram");
var ci;
var Hb = (ci = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, g(ci, "DiagramNotFoundError"), ci);
function zl(e11) {
  return typeof e11 > "u" || e11 === null;
}
g(zl, "isNothing");
function Of(e11) {
  return typeof e11 == "object" && e11 !== null;
}
g(Of, "isObject");
function Df(e11) {
  return Array.isArray(e11) ? e11 : zl(e11) ? [] : [e11];
}
g(Df, "toArray");
function If(e11, t) {
  var r, i, n, s;
  if (t)
    for (s = Object.keys(t), r = 0, i = s.length; r < i; r += 1)
      n = s[r], e11[n] = t[n];
  return e11;
}
g(If, "extend");
function Rf(e11, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e11;
  return r;
}
g(Rf, "repeat");
function Pf(e11) {
  return e11 === 0 && Number.NEGATIVE_INFINITY === 1 / e11;
}
g(Pf, "isNegativeZero");
var jb = zl;
var Ub = Of;
var Yb = Df;
var Gb = Rf;
var Vb = Pf;
var Xb = If;
var Ot = {
  isNothing: jb,
  isObject: Ub,
  toArray: Yb,
  repeat: Gb,
  isNegativeZero: Vb,
  extend: Xb
};
function Wl(e11, t) {
  var r = "", i = e11.reason || "(unknown reason)";
  return e11.mark ? (e11.mark.name && (r += 'in "' + e11.mark.name + '" '), r += "(" + (e11.mark.line + 1) + ":" + (e11.mark.column + 1) + ")", !t && e11.mark.snippet && (r += `

` + e11.mark.snippet), i + " " + r) : i;
}
g(Wl, "formatError");
function mi(e11, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e11, this.mark = t, this.message = Wl(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
g(mi, "YAMLException$1");
mi.prototype = Object.create(Error.prototype);
mi.prototype.constructor = mi;
mi.prototype.toString = g(function(t) {
  return this.name + ": " + Wl(this, t);
}, "toString");
var se = mi;
function ps(e11, t, r, i, n) {
  var s = "", o = "", a = Math.floor(n / 2) - 1;
  return i - t > a && (s = " ... ", t = i - a + s.length), r - i > a && (o = " ...", r = i + a - o.length), {
    str: s + e11.slice(t, r).replace(/\t/g, "→") + o,
    pos: i - t + s.length
    // relative position
  };
}
g(ps, "getLine");
function gs(e11, t) {
  return Ot.repeat(" ", t - e11.length) + e11;
}
g(gs, "padStart");
function Nf(e11, t) {
  if (t = Object.create(t || null), !e11.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], n = [], s, o = -1; s = r.exec(e11.buffer); )
    n.push(s.index), i.push(s.index + s[0].length), e11.position <= s.index && o < 0 && (o = i.length - 2);
  o < 0 && (o = i.length - 1);
  var a = "", l, c, h3 = Math.min(e11.line + t.linesAfter, n.length).toString().length, u = t.maxLength - (t.indent + h3 + 3);
  for (l = 1; l <= t.linesBefore && !(o - l < 0); l++)
    c = ps(
      e11.buffer,
      i[o - l],
      n[o - l],
      e11.position - (i[o] - i[o - l]),
      u
    ), a = Ot.repeat(" ", t.indent) + gs((e11.line - l + 1).toString(), h3) + " | " + c.str + `
` + a;
  for (c = ps(e11.buffer, i[o], n[o], e11.position, u), a += Ot.repeat(" ", t.indent) + gs((e11.line + 1).toString(), h3) + " | " + c.str + `
`, a += Ot.repeat("-", t.indent + h3 + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(o + l >= n.length); l++)
    c = ps(
      e11.buffer,
      i[o + l],
      n[o + l],
      e11.position - (i[o] - i[o + l]),
      u
    ), a += Ot.repeat(" ", t.indent) + gs((e11.line + l + 1).toString(), h3) + " | " + c.str + `
`;
  return a.replace(/\n$/, "");
}
g(Nf, "makeSnippet");
var Kb = Nf;
var Zb = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var Qb = [
  "scalar",
  "sequence",
  "mapping"
];
function zf(e11) {
  var t = {};
  return e11 !== null && Object.keys(e11).forEach(function(r) {
    e11[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
g(zf, "compileStyleAliases");
function Wf(e11, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (Zb.indexOf(r) === -1)
      throw new se('Unknown option "' + r + '" is met in definition of "' + e11 + '" YAML type.');
  }), this.options = t, this.tag = e11, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return true;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || false, this.styleAliases = zf(t.styleAliases || null), Qb.indexOf(this.kind) === -1)
    throw new se('Unknown kind "' + this.kind + '" is specified for "' + e11 + '" YAML type.');
}
g(Wf, "Type$1");
var jt = Wf;
function Io(e11, t) {
  var r = [];
  return e11[t].forEach(function(i) {
    var n = r.length;
    r.forEach(function(s, o) {
      s.tag === i.tag && s.kind === i.kind && s.multi === i.multi && (n = o);
    }), r[n] = i;
  }), r;
}
g(Io, "compileList");
function qf() {
  var e11 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(n) {
    n.multi ? (e11.multi[n.kind].push(n), e11.multi.fallback.push(n)) : e11[n.kind][n.tag] = e11.fallback[n.tag] = n;
  }
  for (g(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e11;
}
g(qf, "compileMap");
function Os(e11) {
  return this.extend(e11);
}
g(Os, "Schema$1");
Os.prototype.extend = g(function(t) {
  var r = [], i = [];
  if (t instanceof jt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new se("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(s) {
    if (!(s instanceof jt))
      throw new se("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new se("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new se("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(s) {
    if (!(s instanceof jt))
      throw new se("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Os.prototype);
  return n.implicit = (this.implicit || []).concat(r), n.explicit = (this.explicit || []).concat(i), n.compiledImplicit = Io(n, "implicit"), n.compiledExplicit = Io(n, "explicit"), n.compiledTypeMap = qf(n.compiledImplicit, n.compiledExplicit), n;
}, "extend");
var Jb = Os;
var t1 = new jt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: g(function(e11) {
    return e11 !== null ? e11 : "";
  }, "construct")
});
var e1 = new jt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: g(function(e11) {
    return e11 !== null ? e11 : [];
  }, "construct")
});
var r1 = new jt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: g(function(e11) {
    return e11 !== null ? e11 : {};
  }, "construct")
});
var i1 = new Jb({
  explicit: [
    t1,
    e1,
    r1
  ]
});
function Hf(e11) {
  if (e11 === null) return true;
  var t = e11.length;
  return t === 1 && e11 === "~" || t === 4 && (e11 === "null" || e11 === "Null" || e11 === "NULL");
}
g(Hf, "resolveYamlNull");
function jf() {
  return null;
}
g(jf, "constructYamlNull");
function Uf(e11) {
  return e11 === null;
}
g(Uf, "isNull");
var n1 = new jt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Hf,
  construct: jf,
  predicate: Uf,
  represent: {
    canonical: g(function() {
      return "~";
    }, "canonical"),
    lowercase: g(function() {
      return "null";
    }, "lowercase"),
    uppercase: g(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: g(function() {
      return "Null";
    }, "camelcase"),
    empty: g(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function Yf(e11) {
  if (e11 === null) return false;
  var t = e11.length;
  return t === 4 && (e11 === "true" || e11 === "True" || e11 === "TRUE") || t === 5 && (e11 === "false" || e11 === "False" || e11 === "FALSE");
}
g(Yf, "resolveYamlBoolean");
function Gf(e11) {
  return e11 === "true" || e11 === "True" || e11 === "TRUE";
}
g(Gf, "constructYamlBoolean");
function Vf(e11) {
  return Object.prototype.toString.call(e11) === "[object Boolean]";
}
g(Vf, "isBoolean");
var s1 = new jt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Yf,
  construct: Gf,
  predicate: Vf,
  represent: {
    lowercase: g(function(e11) {
      return e11 ? "true" : "false";
    }, "lowercase"),
    uppercase: g(function(e11) {
      return e11 ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: g(function(e11) {
      return e11 ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function Xf(e11) {
  return 48 <= e11 && e11 <= 57 || 65 <= e11 && e11 <= 70 || 97 <= e11 && e11 <= 102;
}
g(Xf, "isHexCode");
function Kf(e11) {
  return 48 <= e11 && e11 <= 55;
}
g(Kf, "isOctCode");
function Zf(e11) {
  return 48 <= e11 && e11 <= 57;
}
g(Zf, "isDecCode");
function Qf(e11) {
  if (e11 === null) return false;
  var t = e11.length, r = 0, i = false, n;
  if (!t) return false;
  if (n = e11[r], (n === "-" || n === "+") && (n = e11[++r]), n === "0") {
    if (r + 1 === t) return true;
    if (n = e11[++r], n === "b") {
      for (r++; r < t; r++)
        if (n = e11[r], n !== "_") {
          if (n !== "0" && n !== "1") return false;
          i = true;
        }
      return i && n !== "_";
    }
    if (n === "x") {
      for (r++; r < t; r++)
        if (n = e11[r], n !== "_") {
          if (!Xf(e11.charCodeAt(r))) return false;
          i = true;
        }
      return i && n !== "_";
    }
    if (n === "o") {
      for (r++; r < t; r++)
        if (n = e11[r], n !== "_") {
          if (!Kf(e11.charCodeAt(r))) return false;
          i = true;
        }
      return i && n !== "_";
    }
  }
  if (n === "_") return false;
  for (; r < t; r++)
    if (n = e11[r], n !== "_") {
      if (!Zf(e11.charCodeAt(r)))
        return false;
      i = true;
    }
  return !(!i || n === "_");
}
g(Qf, "resolveYamlInteger");
function Jf(e11) {
  var t = e11, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
g(Jf, "constructYamlInteger");
function td(e11) {
  return Object.prototype.toString.call(e11) === "[object Number]" && e11 % 1 === 0 && !Ot.isNegativeZero(e11);
}
g(td, "isInteger");
var a1 = new jt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Qf,
  construct: Jf,
  predicate: td,
  represent: {
    binary: g(function(e11) {
      return e11 >= 0 ? "0b" + e11.toString(2) : "-0b" + e11.toString(2).slice(1);
    }, "binary"),
    octal: g(function(e11) {
      return e11 >= 0 ? "0o" + e11.toString(8) : "-0o" + e11.toString(8).slice(1);
    }, "octal"),
    decimal: g(function(e11) {
      return e11.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: g(function(e11) {
      return e11 >= 0 ? "0x" + e11.toString(16).toUpperCase() : "-0x" + e11.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var o1 = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ed(e11) {
  return !(e11 === null || !o1.test(e11) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e11[e11.length - 1] === "_");
}
g(ed, "resolveYamlFloat");
function rd(e11) {
  var t, r;
  return t = e11.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
g(rd, "constructYamlFloat");
var l1 = /^[-+]?[0-9]+e/;
function id(e11, t) {
  var r;
  if (isNaN(e11))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e11)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e11)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Ot.isNegativeZero(e11))
    return "-0.0";
  return r = e11.toString(10), l1.test(r) ? r.replace("e", ".e") : r;
}
g(id, "representYamlFloat");
function nd(e11) {
  return Object.prototype.toString.call(e11) === "[object Number]" && (e11 % 1 !== 0 || Ot.isNegativeZero(e11));
}
g(nd, "isFloat");
var c1 = new jt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ed,
  construct: rd,
  predicate: nd,
  represent: id,
  defaultStyle: "lowercase"
});
var sd = i1.extend({
  implicit: [
    n1,
    s1,
    a1,
    c1
  ]
});
var h1 = sd;
var ad = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var od = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function ld(e11) {
  return e11 === null ? false : ad.exec(e11) !== null || od.exec(e11) !== null;
}
g(ld, "resolveYamlTimestamp");
function cd(e11) {
  var t, r, i, n, s, o, a, l = 0, c = null, h3, u, f;
  if (t = ad.exec(e11), t === null && (t = od.exec(e11)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4])
    return new Date(Date.UTC(r, i, n));
  if (s = +t[4], o = +t[5], a = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h3 = +t[10], u = +(t[11] || 0), c = (h3 * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, n, s, o, a, l)), c && f.setTime(f.getTime() - c), f;
}
g(cd, "constructYamlTimestamp");
function hd(e11) {
  return e11.toISOString();
}
g(hd, "representYamlTimestamp");
var u1 = new jt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: ld,
  construct: cd,
  instanceOf: Date,
  represent: hd
});
function ud(e11) {
  return e11 === "<<" || e11 === null;
}
g(ud, "resolveYamlMerge");
var f1 = new jt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: ud
});
var ql = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function fd(e11) {
  if (e11 === null) return false;
  var t, r, i = 0, n = e11.length, s = ql;
  for (r = 0; r < n; r++)
    if (t = s.indexOf(e11.charAt(r)), !(t > 64)) {
      if (t < 0) return false;
      i += 6;
    }
  return i % 8 === 0;
}
g(fd, "resolveYamlBinary");
function dd(e11) {
  var t, r, i = e11.replace(/[\r\n=]/g, ""), n = i.length, s = ql, o = 0, a = [];
  for (t = 0; t < n; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(i.charAt(t));
  return r = n % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
g(dd, "constructYamlBinary");
function pd(e11) {
  var t = "", r = 0, i, n, s = e11.length, o = ql;
  for (i = 0; i < s; i++)
    i % 3 === 0 && i && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e11[i];
  return n = s % 3, n === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : n === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : n === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
g(pd, "representYamlBinary");
function gd(e11) {
  return Object.prototype.toString.call(e11) === "[object Uint8Array]";
}
g(gd, "isBinary");
var d1 = new jt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: fd,
  construct: dd,
  predicate: gd,
  represent: pd
});
var p1 = Object.prototype.hasOwnProperty;
var g1 = Object.prototype.toString;
function md(e11) {
  if (e11 === null) return true;
  var t = [], r, i, n, s, o, a = e11;
  for (r = 0, i = a.length; r < i; r += 1) {
    if (n = a[r], o = false, g1.call(n) !== "[object Object]") return false;
    for (s in n)
      if (p1.call(n, s))
        if (!o) o = true;
        else return false;
    if (!o) return false;
    if (t.indexOf(s) === -1) t.push(s);
    else return false;
  }
  return true;
}
g(md, "resolveYamlOmap");
function yd(e11) {
  return e11 !== null ? e11 : [];
}
g(yd, "constructYamlOmap");
var m1 = new jt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: md,
  construct: yd
});
var y1 = Object.prototype.toString;
function xd(e11) {
  if (e11 === null) return true;
  var t, r, i, n, s, o = e11;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (i = o[t], y1.call(i) !== "[object Object]" || (n = Object.keys(i), n.length !== 1)) return false;
    s[t] = [n[0], i[n[0]]];
  }
  return true;
}
g(xd, "resolveYamlPairs");
function bd(e11) {
  if (e11 === null) return [];
  var t, r, i, n, s, o = e11;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    i = o[t], n = Object.keys(i), s[t] = [n[0], i[n[0]]];
  return s;
}
g(bd, "constructYamlPairs");
var x1 = new jt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: xd,
  construct: bd
});
var b1 = Object.prototype.hasOwnProperty;
function wd(e11) {
  if (e11 === null) return true;
  var t, r = e11;
  for (t in r)
    if (b1.call(r, t) && r[t] !== null)
      return false;
  return true;
}
g(wd, "resolveYamlSet");
function vd(e11) {
  return e11 !== null ? e11 : {};
}
g(vd, "constructYamlSet");
var w1 = new jt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: wd,
  construct: vd
});
var Cd = h1.extend({
  implicit: [
    u1,
    f1
  ],
  explicit: [
    d1,
    m1,
    x1,
    w1
  ]
});
var lr = Object.prototype.hasOwnProperty;
var Ds = 1;
var kd = 2;
var _d = 3;
var Is = 4;
var ro = 1;
var v1 = 2;
var Ch = 3;
var C1 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var k1 = /[\x85\u2028\u2029]/;
var _1 = /[,\[\]\{\}]/;
var Sd = /^(?:!|!!|![a-z\-]+!)$/i;
var Td = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Ro(e11) {
  return Object.prototype.toString.call(e11);
}
g(Ro, "_class");
function we(e11) {
  return e11 === 10 || e11 === 13;
}
g(we, "is_EOL");
function or(e11) {
  return e11 === 9 || e11 === 32;
}
g(or, "is_WHITE_SPACE");
function Xt(e11) {
  return e11 === 9 || e11 === 32 || e11 === 10 || e11 === 13;
}
g(Xt, "is_WS_OR_EOL");
function Cr(e11) {
  return e11 === 44 || e11 === 91 || e11 === 93 || e11 === 123 || e11 === 125;
}
g(Cr, "is_FLOW_INDICATOR");
function Bd(e11) {
  var t;
  return 48 <= e11 && e11 <= 57 ? e11 - 48 : (t = e11 | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
g(Bd, "fromHexCode");
function Ld(e11) {
  return e11 === 120 ? 2 : e11 === 117 ? 4 : e11 === 85 ? 8 : 0;
}
g(Ld, "escapedHexLen");
function Ad(e11) {
  return 48 <= e11 && e11 <= 57 ? e11 - 48 : -1;
}
g(Ad, "fromDecimalCode");
function Po(e11) {
  return e11 === 48 ? "\0" : e11 === 97 ? "\x07" : e11 === 98 ? "\b" : e11 === 116 || e11 === 9 ? "	" : e11 === 110 ? `
` : e11 === 118 ? "\v" : e11 === 102 ? "\f" : e11 === 114 ? "\r" : e11 === 101 ? "\x1B" : e11 === 32 ? " " : e11 === 34 ? '"' : e11 === 47 ? "/" : e11 === 92 ? "\\" : e11 === 78 ? "" : e11 === 95 ? " " : e11 === 76 ? "\u2028" : e11 === 80 ? "\u2029" : "";
}
g(Po, "simpleEscapeSequence");
function Ed(e11) {
  return e11 <= 65535 ? String.fromCharCode(e11) : String.fromCharCode(
    (e11 - 65536 >> 10) + 55296,
    (e11 - 65536 & 1023) + 56320
  );
}
g(Ed, "charFromCodepoint");
var Md = new Array(256);
var $d = new Array(256);
for (pr = 0; pr < 256; pr++)
  Md[pr] = Po(pr) ? 1 : 0, $d[pr] = Po(pr);
var pr;
function Fd(e11, t) {
  this.input = e11, this.filename = t.filename || null, this.schema = t.schema || Cd, this.onWarning = t.onWarning || null, this.legacy = t.legacy || false, this.json = t.json || false, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e11.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
g(Fd, "State$1");
function Hl(e11, t) {
  var r = {
    name: e11.filename,
    buffer: e11.input.slice(0, -1),
    // omit trailing \0
    position: e11.position,
    line: e11.line,
    column: e11.position - e11.lineStart
  };
  return r.snippet = Kb(r), new se(t, r);
}
g(Hl, "generateError");
function Q(e11, t) {
  throw Hl(e11, t);
}
g(Q, "throwError");
function pn(e11, t) {
  e11.onWarning && e11.onWarning.call(null, Hl(e11, t));
}
g(pn, "throwWarning");
var kh = {
  YAML: g(function(t, r, i) {
    var n, s, o;
    t.version !== null && Q(t, "duplication of %YAML directive"), i.length !== 1 && Q(t, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), n === null && Q(t, "ill-formed argument of the YAML directive"), s = parseInt(n[1], 10), o = parseInt(n[2], 10), s !== 1 && Q(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && pn(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: g(function(t, r, i) {
    var n, s;
    i.length !== 2 && Q(t, "TAG directive accepts exactly two arguments"), n = i[0], s = i[1], Sd.test(n) || Q(t, "ill-formed tag handle (first argument) of the TAG directive"), lr.call(t.tagMap, n) && Q(t, 'there is a previously declared suffix for "' + n + '" tag handle'), Td.test(s) || Q(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      Q(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[n] = s;
  }, "handleTagDirective")
};
function Ve(e11, t, r, i) {
  var n, s, o, a;
  if (t < r) {
    if (a = e11.input.slice(t, r), i)
      for (n = 0, s = a.length; n < s; n += 1)
        o = a.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || Q(e11, "expected valid JSON character");
    else C1.test(a) && Q(e11, "the stream contains non-printable characters");
    e11.result += a;
  }
}
g(Ve, "captureSegment");
function No(e11, t, r, i) {
  var n, s, o, a;
  for (Ot.isObject(r) || Q(e11, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), o = 0, a = n.length; o < a; o += 1)
    s = n[o], lr.call(t, s) || (t[s] = r[s], i[s] = true);
}
g(No, "mergeMappings");
function kr(e11, t, r, i, n, s, o, a, l) {
  var c, h3;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h3 = n.length; c < h3; c += 1)
      Array.isArray(n[c]) && Q(e11, "nested arrays are not supported inside keys"), typeof n == "object" && Ro(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && Ro(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (c = 0, h3 = s.length; c < h3; c += 1)
        No(e11, t, s[c], r);
    else
      No(e11, t, s, r);
  else
    !e11.json && !lr.call(r, n) && lr.call(t, n) && (e11.line = o || e11.line, e11.lineStart = a || e11.lineStart, e11.position = l || e11.position, Q(e11, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: s
    }) : t[n] = s, delete r[n];
  return t;
}
g(kr, "storeMappingPair");
function xa(e11) {
  var t;
  t = e11.input.charCodeAt(e11.position), t === 10 ? e11.position++ : t === 13 ? (e11.position++, e11.input.charCodeAt(e11.position) === 10 && e11.position++) : Q(e11, "a line break is expected"), e11.line += 1, e11.lineStart = e11.position, e11.firstTabInLine = -1;
}
g(xa, "readLineBreak");
function At(e11, t, r) {
  for (var i = 0, n = e11.input.charCodeAt(e11.position); n !== 0; ) {
    for (; or(n); )
      n === 9 && e11.firstTabInLine === -1 && (e11.firstTabInLine = e11.position), n = e11.input.charCodeAt(++e11.position);
    if (t && n === 35)
      do
        n = e11.input.charCodeAt(++e11.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (we(n))
      for (xa(e11), n = e11.input.charCodeAt(e11.position), i++, e11.lineIndent = 0; n === 32; )
        e11.lineIndent++, n = e11.input.charCodeAt(++e11.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e11.lineIndent < r && pn(e11, "deficient indentation"), i;
}
g(At, "skipSeparationSpace");
function En(e11) {
  var t = e11.position, r;
  return r = e11.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e11.input.charCodeAt(t + 1) && r === e11.input.charCodeAt(t + 2) && (t += 3, r = e11.input.charCodeAt(t), r === 0 || Xt(r)));
}
g(En, "testDocumentSeparator");
function ba(e11, t) {
  t === 1 ? e11.result += " " : t > 1 && (e11.result += Ot.repeat(`
`, t - 1));
}
g(ba, "writeFoldedLines");
function Od(e11, t, r) {
  var i, n, s, o, a, l, c, h3, u = e11.kind, f = e11.result, d;
  if (d = e11.input.charCodeAt(e11.position), Xt(d) || Cr(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (n = e11.input.charCodeAt(e11.position + 1), Xt(n) || r && Cr(n)))
    return false;
  for (e11.kind = "scalar", e11.result = "", s = o = e11.position, a = false; d !== 0; ) {
    if (d === 58) {
      if (n = e11.input.charCodeAt(e11.position + 1), Xt(n) || r && Cr(n))
        break;
    } else if (d === 35) {
      if (i = e11.input.charCodeAt(e11.position - 1), Xt(i))
        break;
    } else {
      if (e11.position === e11.lineStart && En(e11) || r && Cr(d))
        break;
      if (we(d))
        if (l = e11.line, c = e11.lineStart, h3 = e11.lineIndent, At(e11, false, -1), e11.lineIndent >= t) {
          a = true, d = e11.input.charCodeAt(e11.position);
          continue;
        } else {
          e11.position = o, e11.line = l, e11.lineStart = c, e11.lineIndent = h3;
          break;
        }
    }
    a && (Ve(e11, s, o, false), ba(e11, e11.line - l), s = o = e11.position, a = false), or(d) || (o = e11.position + 1), d = e11.input.charCodeAt(++e11.position);
  }
  return Ve(e11, s, o, false), e11.result ? true : (e11.kind = u, e11.result = f, false);
}
g(Od, "readPlainScalar");
function Dd(e11, t) {
  var r, i, n;
  if (r = e11.input.charCodeAt(e11.position), r !== 39)
    return false;
  for (e11.kind = "scalar", e11.result = "", e11.position++, i = n = e11.position; (r = e11.input.charCodeAt(e11.position)) !== 0; )
    if (r === 39)
      if (Ve(e11, i, e11.position, true), r = e11.input.charCodeAt(++e11.position), r === 39)
        i = e11.position, e11.position++, n = e11.position;
      else
        return true;
    else we(r) ? (Ve(e11, i, n, true), ba(e11, At(e11, false, t)), i = n = e11.position) : e11.position === e11.lineStart && En(e11) ? Q(e11, "unexpected end of the document within a single quoted scalar") : (e11.position++, n = e11.position);
  Q(e11, "unexpected end of the stream within a single quoted scalar");
}
g(Dd, "readSingleQuotedScalar");
function Id(e11, t) {
  var r, i, n, s, o, a;
  if (a = e11.input.charCodeAt(e11.position), a !== 34)
    return false;
  for (e11.kind = "scalar", e11.result = "", e11.position++, r = i = e11.position; (a = e11.input.charCodeAt(e11.position)) !== 0; ) {
    if (a === 34)
      return Ve(e11, r, e11.position, true), e11.position++, true;
    if (a === 92) {
      if (Ve(e11, r, e11.position, true), a = e11.input.charCodeAt(++e11.position), we(a))
        At(e11, false, t);
      else if (a < 256 && Md[a])
        e11.result += $d[a], e11.position++;
      else if ((o = Ld(a)) > 0) {
        for (n = o, s = 0; n > 0; n--)
          a = e11.input.charCodeAt(++e11.position), (o = Bd(a)) >= 0 ? s = (s << 4) + o : Q(e11, "expected hexadecimal character");
        e11.result += Ed(s), e11.position++;
      } else
        Q(e11, "unknown escape sequence");
      r = i = e11.position;
    } else we(a) ? (Ve(e11, r, i, true), ba(e11, At(e11, false, t)), r = i = e11.position) : e11.position === e11.lineStart && En(e11) ? Q(e11, "unexpected end of the document within a double quoted scalar") : (e11.position++, i = e11.position);
  }
  Q(e11, "unexpected end of the stream within a double quoted scalar");
}
g(Id, "readDoubleQuotedScalar");
function Rd(e11, t) {
  var r = true, i, n, s, o = e11.tag, a, l = e11.anchor, c, h3, u, f, d, p = /* @__PURE__ */ Object.create(null), m, y, b, x;
  if (x = e11.input.charCodeAt(e11.position), x === 91)
    h3 = 93, d = false, a = [];
  else if (x === 123)
    h3 = 125, d = true, a = {};
  else
    return false;
  for (e11.anchor !== null && (e11.anchorMap[e11.anchor] = a), x = e11.input.charCodeAt(++e11.position); x !== 0; ) {
    if (At(e11, true, t), x = e11.input.charCodeAt(e11.position), x === h3)
      return e11.position++, e11.tag = o, e11.anchor = l, e11.kind = d ? "mapping" : "sequence", e11.result = a, true;
    r ? x === 44 && Q(e11, "expected the node content, but found ','") : Q(e11, "missed comma between flow collection entries"), y = m = b = null, u = f = false, x === 63 && (c = e11.input.charCodeAt(e11.position + 1), Xt(c) && (u = f = true, e11.position++, At(e11, true, t))), i = e11.line, n = e11.lineStart, s = e11.position, Mr(e11, t, Ds, false, true), y = e11.tag, m = e11.result, At(e11, true, t), x = e11.input.charCodeAt(e11.position), (f || e11.line === i) && x === 58 && (u = true, x = e11.input.charCodeAt(++e11.position), At(e11, true, t), Mr(e11, t, Ds, false, true), b = e11.result), d ? kr(e11, a, p, y, m, b, i, n, s) : u ? a.push(kr(e11, null, p, y, m, b, i, n, s)) : a.push(m), At(e11, true, t), x = e11.input.charCodeAt(e11.position), x === 44 ? (r = true, x = e11.input.charCodeAt(++e11.position)) : r = false;
  }
  Q(e11, "unexpected end of the stream within a flow collection");
}
g(Rd, "readFlowCollection");
function Pd(e11, t) {
  var r, i, n = ro, s = false, o = false, a = t, l = 0, c = false, h3, u;
  if (u = e11.input.charCodeAt(e11.position), u === 124)
    i = false;
  else if (u === 62)
    i = true;
  else
    return false;
  for (e11.kind = "scalar", e11.result = ""; u !== 0; )
    if (u = e11.input.charCodeAt(++e11.position), u === 43 || u === 45)
      ro === n ? n = u === 43 ? Ch : v1 : Q(e11, "repeat of a chomping mode identifier");
    else if ((h3 = Ad(u)) >= 0)
      h3 === 0 ? Q(e11, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? Q(e11, "repeat of an indentation width identifier") : (a = t + h3 - 1, o = true);
    else
      break;
  if (or(u)) {
    do
      u = e11.input.charCodeAt(++e11.position);
    while (or(u));
    if (u === 35)
      do
        u = e11.input.charCodeAt(++e11.position);
      while (!we(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (xa(e11), e11.lineIndent = 0, u = e11.input.charCodeAt(e11.position); (!o || e11.lineIndent < a) && u === 32; )
      e11.lineIndent++, u = e11.input.charCodeAt(++e11.position);
    if (!o && e11.lineIndent > a && (a = e11.lineIndent), we(u)) {
      l++;
      continue;
    }
    if (e11.lineIndent < a) {
      n === Ch ? e11.result += Ot.repeat(`
`, s ? 1 + l : l) : n === ro && s && (e11.result += `
`);
      break;
    }
    for (i ? or(u) ? (c = true, e11.result += Ot.repeat(`
`, s ? 1 + l : l)) : c ? (c = false, e11.result += Ot.repeat(`
`, l + 1)) : l === 0 ? s && (e11.result += " ") : e11.result += Ot.repeat(`
`, l) : e11.result += Ot.repeat(`
`, s ? 1 + l : l), s = true, o = true, l = 0, r = e11.position; !we(u) && u !== 0; )
      u = e11.input.charCodeAt(++e11.position);
    Ve(e11, r, e11.position, false);
  }
  return true;
}
g(Pd, "readBlockScalar");
function zo(e11, t) {
  var r, i = e11.tag, n = e11.anchor, s = [], o, a = false, l;
  if (e11.firstTabInLine !== -1) return false;
  for (e11.anchor !== null && (e11.anchorMap[e11.anchor] = s), l = e11.input.charCodeAt(e11.position); l !== 0 && (e11.firstTabInLine !== -1 && (e11.position = e11.firstTabInLine, Q(e11, "tab characters must not be used in indentation")), !(l !== 45 || (o = e11.input.charCodeAt(e11.position + 1), !Xt(o)))); ) {
    if (a = true, e11.position++, At(e11, true, -1) && e11.lineIndent <= t) {
      s.push(null), l = e11.input.charCodeAt(e11.position);
      continue;
    }
    if (r = e11.line, Mr(e11, t, _d, false, true), s.push(e11.result), At(e11, true, -1), l = e11.input.charCodeAt(e11.position), (e11.line === r || e11.lineIndent > t) && l !== 0)
      Q(e11, "bad indentation of a sequence entry");
    else if (e11.lineIndent < t)
      break;
  }
  return a ? (e11.tag = i, e11.anchor = n, e11.kind = "sequence", e11.result = s, true) : false;
}
g(zo, "readBlockSequence");
function Nd(e11, t, r) {
  var i, n, s, o, a, l, c = e11.tag, h3 = e11.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, p = null, m = null, y = false, b = false, x;
  if (e11.firstTabInLine !== -1) return false;
  for (e11.anchor !== null && (e11.anchorMap[e11.anchor] = u), x = e11.input.charCodeAt(e11.position); x !== 0; ) {
    if (!y && e11.firstTabInLine !== -1 && (e11.position = e11.firstTabInLine, Q(e11, "tab characters must not be used in indentation")), i = e11.input.charCodeAt(e11.position + 1), s = e11.line, (x === 63 || x === 58) && Xt(i))
      x === 63 ? (y && (kr(e11, u, f, d, p, null, o, a, l), d = p = m = null), b = true, y = true, n = true) : y ? (y = false, n = true) : Q(e11, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e11.position += 1, x = i;
    else {
      if (o = e11.line, a = e11.lineStart, l = e11.position, !Mr(e11, r, kd, false, true))
        break;
      if (e11.line === s) {
        for (x = e11.input.charCodeAt(e11.position); or(x); )
          x = e11.input.charCodeAt(++e11.position);
        if (x === 58)
          x = e11.input.charCodeAt(++e11.position), Xt(x) || Q(e11, "a whitespace character is expected after the key-value separator within a block mapping"), y && (kr(e11, u, f, d, p, null, o, a, l), d = p = m = null), b = true, y = false, n = false, d = e11.tag, p = e11.result;
        else if (b)
          Q(e11, "can not read an implicit mapping pair; a colon is missed");
        else
          return e11.tag = c, e11.anchor = h3, true;
      } else if (b)
        Q(e11, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e11.tag = c, e11.anchor = h3, true;
    }
    if ((e11.line === s || e11.lineIndent > t) && (y && (o = e11.line, a = e11.lineStart, l = e11.position), Mr(e11, t, Is, true, n) && (y ? p = e11.result : m = e11.result), y || (kr(e11, u, f, d, p, m, o, a, l), d = p = m = null), At(e11, true, -1), x = e11.input.charCodeAt(e11.position)), (e11.line === s || e11.lineIndent > t) && x !== 0)
      Q(e11, "bad indentation of a mapping entry");
    else if (e11.lineIndent < t)
      break;
  }
  return y && kr(e11, u, f, d, p, null, o, a, l), b && (e11.tag = c, e11.anchor = h3, e11.kind = "mapping", e11.result = u), b;
}
g(Nd, "readBlockMapping");
function zd(e11) {
  var t, r = false, i = false, n, s, o;
  if (o = e11.input.charCodeAt(e11.position), o !== 33) return false;
  if (e11.tag !== null && Q(e11, "duplication of a tag property"), o = e11.input.charCodeAt(++e11.position), o === 60 ? (r = true, o = e11.input.charCodeAt(++e11.position)) : o === 33 ? (i = true, n = "!!", o = e11.input.charCodeAt(++e11.position)) : n = "!", t = e11.position, r) {
    do
      o = e11.input.charCodeAt(++e11.position);
    while (o !== 0 && o !== 62);
    e11.position < e11.length ? (s = e11.input.slice(t, e11.position), o = e11.input.charCodeAt(++e11.position)) : Q(e11, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Xt(o); )
      o === 33 && (i ? Q(e11, "tag suffix cannot contain exclamation marks") : (n = e11.input.slice(t - 1, e11.position + 1), Sd.test(n) || Q(e11, "named tag handle cannot contain such characters"), i = true, t = e11.position + 1)), o = e11.input.charCodeAt(++e11.position);
    s = e11.input.slice(t, e11.position), _1.test(s) && Q(e11, "tag suffix cannot contain flow indicator characters");
  }
  s && !Td.test(s) && Q(e11, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    Q(e11, "tag name is malformed: " + s);
  }
  return r ? e11.tag = s : lr.call(e11.tagMap, n) ? e11.tag = e11.tagMap[n] + s : n === "!" ? e11.tag = "!" + s : n === "!!" ? e11.tag = "tag:yaml.org,2002:" + s : Q(e11, 'undeclared tag handle "' + n + '"'), true;
}
g(zd, "readTagProperty");
function Wd(e11) {
  var t, r;
  if (r = e11.input.charCodeAt(e11.position), r !== 38) return false;
  for (e11.anchor !== null && Q(e11, "duplication of an anchor property"), r = e11.input.charCodeAt(++e11.position), t = e11.position; r !== 0 && !Xt(r) && !Cr(r); )
    r = e11.input.charCodeAt(++e11.position);
  return e11.position === t && Q(e11, "name of an anchor node must contain at least one character"), e11.anchor = e11.input.slice(t, e11.position), true;
}
g(Wd, "readAnchorProperty");
function qd(e11) {
  var t, r, i;
  if (i = e11.input.charCodeAt(e11.position), i !== 42) return false;
  for (i = e11.input.charCodeAt(++e11.position), t = e11.position; i !== 0 && !Xt(i) && !Cr(i); )
    i = e11.input.charCodeAt(++e11.position);
  return e11.position === t && Q(e11, "name of an alias node must contain at least one character"), r = e11.input.slice(t, e11.position), lr.call(e11.anchorMap, r) || Q(e11, 'unidentified alias "' + r + '"'), e11.result = e11.anchorMap[r], At(e11, true, -1), true;
}
g(qd, "readAlias");
function Mr(e11, t, r, i, n) {
  var s, o, a, l = 1, c = false, h3 = false, u, f, d, p, m, y;
  if (e11.listener !== null && e11.listener("open", e11), e11.tag = null, e11.anchor = null, e11.kind = null, e11.result = null, s = o = a = Is === r || _d === r, i && At(e11, true, -1) && (c = true, e11.lineIndent > t ? l = 1 : e11.lineIndent === t ? l = 0 : e11.lineIndent < t && (l = -1)), l === 1)
    for (; zd(e11) || Wd(e11); )
      At(e11, true, -1) ? (c = true, a = s, e11.lineIndent > t ? l = 1 : e11.lineIndent === t ? l = 0 : e11.lineIndent < t && (l = -1)) : a = false;
  if (a && (a = c || n), (l === 1 || Is === r) && (Ds === r || kd === r ? m = t : m = t + 1, y = e11.position - e11.lineStart, l === 1 ? a && (zo(e11, y) || Nd(e11, y, m)) || Rd(e11, m) ? h3 = true : (o && Pd(e11, m) || Dd(e11, m) || Id(e11, m) ? h3 = true : qd(e11) ? (h3 = true, (e11.tag !== null || e11.anchor !== null) && Q(e11, "alias node should not have any properties")) : Od(e11, m, Ds === r) && (h3 = true, e11.tag === null && (e11.tag = "?")), e11.anchor !== null && (e11.anchorMap[e11.anchor] = e11.result)) : l === 0 && (h3 = a && zo(e11, y))), e11.tag === null)
    e11.anchor !== null && (e11.anchorMap[e11.anchor] = e11.result);
  else if (e11.tag === "?") {
    for (e11.result !== null && e11.kind !== "scalar" && Q(e11, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e11.kind + '"'), u = 0, f = e11.implicitTypes.length; u < f; u += 1)
      if (p = e11.implicitTypes[u], p.resolve(e11.result)) {
        e11.result = p.construct(e11.result), e11.tag = p.tag, e11.anchor !== null && (e11.anchorMap[e11.anchor] = e11.result);
        break;
      }
  } else if (e11.tag !== "!") {
    if (lr.call(e11.typeMap[e11.kind || "fallback"], e11.tag))
      p = e11.typeMap[e11.kind || "fallback"][e11.tag];
    else
      for (p = null, d = e11.typeMap.multi[e11.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (e11.tag.slice(0, d[u].tag.length) === d[u].tag) {
          p = d[u];
          break;
        }
    p || Q(e11, "unknown tag !<" + e11.tag + ">"), e11.result !== null && p.kind !== e11.kind && Q(e11, "unacceptable node kind for !<" + e11.tag + '> tag; it should be "' + p.kind + '", not "' + e11.kind + '"'), p.resolve(e11.result, e11.tag) ? (e11.result = p.construct(e11.result, e11.tag), e11.anchor !== null && (e11.anchorMap[e11.anchor] = e11.result)) : Q(e11, "cannot resolve a node with !<" + e11.tag + "> explicit tag");
  }
  return e11.listener !== null && e11.listener("close", e11), e11.tag !== null || e11.anchor !== null || h3;
}
g(Mr, "composeNode");
function Hd(e11) {
  var t = e11.position, r, i, n, s = false, o;
  for (e11.version = null, e11.checkLineBreaks = e11.legacy, e11.tagMap = /* @__PURE__ */ Object.create(null), e11.anchorMap = /* @__PURE__ */ Object.create(null); (o = e11.input.charCodeAt(e11.position)) !== 0 && (At(e11, true, -1), o = e11.input.charCodeAt(e11.position), !(e11.lineIndent > 0 || o !== 37)); ) {
    for (s = true, o = e11.input.charCodeAt(++e11.position), r = e11.position; o !== 0 && !Xt(o); )
      o = e11.input.charCodeAt(++e11.position);
    for (i = e11.input.slice(r, e11.position), n = [], i.length < 1 && Q(e11, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; or(o); )
        o = e11.input.charCodeAt(++e11.position);
      if (o === 35) {
        do
          o = e11.input.charCodeAt(++e11.position);
        while (o !== 0 && !we(o));
        break;
      }
      if (we(o)) break;
      for (r = e11.position; o !== 0 && !Xt(o); )
        o = e11.input.charCodeAt(++e11.position);
      n.push(e11.input.slice(r, e11.position));
    }
    o !== 0 && xa(e11), lr.call(kh, i) ? kh[i](e11, i, n) : pn(e11, 'unknown document directive "' + i + '"');
  }
  if (At(e11, true, -1), e11.lineIndent === 0 && e11.input.charCodeAt(e11.position) === 45 && e11.input.charCodeAt(e11.position + 1) === 45 && e11.input.charCodeAt(e11.position + 2) === 45 ? (e11.position += 3, At(e11, true, -1)) : s && Q(e11, "directives end mark is expected"), Mr(e11, e11.lineIndent - 1, Is, false, true), At(e11, true, -1), e11.checkLineBreaks && k1.test(e11.input.slice(t, e11.position)) && pn(e11, "non-ASCII line breaks are interpreted as content"), e11.documents.push(e11.result), e11.position === e11.lineStart && En(e11)) {
    e11.input.charCodeAt(e11.position) === 46 && (e11.position += 3, At(e11, true, -1));
    return;
  }
  if (e11.position < e11.length - 1)
    Q(e11, "end of the stream or a document separator is expected");
  else
    return;
}
g(Hd, "readDocument");
function jl(e11, t) {
  e11 = String(e11), t = t || {}, e11.length !== 0 && (e11.charCodeAt(e11.length - 1) !== 10 && e11.charCodeAt(e11.length - 1) !== 13 && (e11 += `
`), e11.charCodeAt(0) === 65279 && (e11 = e11.slice(1)));
  var r = new Fd(e11, t), i = e11.indexOf("\0");
  for (i !== -1 && (r.position = i, Q(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Hd(r);
  return r.documents;
}
g(jl, "loadDocuments");
function S1(e11, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = jl(e11, r);
  if (typeof t != "function")
    return i;
  for (var n = 0, s = i.length; n < s; n += 1)
    t(i[n]);
}
g(S1, "loadAll$1");
function jd(e11, t) {
  var r = jl(e11, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new se("expected a single document in the stream, but found more");
  }
}
g(jd, "load$1");
var T1 = jd;
var B1 = {
  load: T1
};
var Ud = Object.prototype.toString;
var Yd = Object.prototype.hasOwnProperty;
var Ul = 65279;
var L1 = 9;
var gn = 10;
var A1 = 13;
var E1 = 32;
var M1 = 33;
var $1 = 34;
var Wo = 35;
var F1 = 37;
var O1 = 38;
var D1 = 39;
var I1 = 42;
var Gd = 44;
var R1 = 45;
var Rs = 58;
var P1 = 61;
var N1 = 62;
var z1 = 63;
var W1 = 64;
var Vd = 91;
var Xd = 93;
var q1 = 96;
var Kd = 123;
var H1 = 124;
var Zd = 125;
var Ut = {};
Ut[0] = "\\0";
Ut[7] = "\\a";
Ut[8] = "\\b";
Ut[9] = "\\t";
Ut[10] = "\\n";
Ut[11] = "\\v";
Ut[12] = "\\f";
Ut[13] = "\\r";
Ut[27] = "\\e";
Ut[34] = '\\"';
Ut[92] = "\\\\";
Ut[133] = "\\N";
Ut[160] = "\\_";
Ut[8232] = "\\L";
Ut[8233] = "\\P";
var j1 = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var U1 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Qd(e11, t) {
  var r, i, n, s, o, a, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), n = 0, s = i.length; n < s; n += 1)
    o = i[n], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), l = e11.compiledTypeMap.fallback[o], l && Yd.call(l.styleAliases, a) && (a = l.styleAliases[a]), r[o] = a;
  return r;
}
g(Qd, "compileStyleMap");
function Jd(e11) {
  var t, r, i;
  if (t = e11.toString(16).toUpperCase(), e11 <= 255)
    r = "x", i = 2;
  else if (e11 <= 65535)
    r = "u", i = 4;
  else if (e11 <= 4294967295)
    r = "U", i = 8;
  else
    throw new se("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Ot.repeat("0", i - t.length) + t;
}
g(Jd, "encodeHex");
var Y1 = 1;
var mn = 2;
function tp(e11) {
  this.schema = e11.schema || Cd, this.indent = Math.max(1, e11.indent || 2), this.noArrayIndent = e11.noArrayIndent || false, this.skipInvalid = e11.skipInvalid || false, this.flowLevel = Ot.isNothing(e11.flowLevel) ? -1 : e11.flowLevel, this.styleMap = Qd(this.schema, e11.styles || null), this.sortKeys = e11.sortKeys || false, this.lineWidth = e11.lineWidth || 80, this.noRefs = e11.noRefs || false, this.noCompatMode = e11.noCompatMode || false, this.condenseFlow = e11.condenseFlow || false, this.quotingType = e11.quotingType === '"' ? mn : Y1, this.forceQuotes = e11.forceQuotes || false, this.replacer = typeof e11.replacer == "function" ? e11.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
g(tp, "State");
function qo(e11, t) {
  for (var r = Ot.repeat(" ", t), i = 0, n = -1, s = "", o, a = e11.length; i < a; )
    n = e11.indexOf(`
`, i), n === -1 ? (o = e11.slice(i), i = a) : (o = e11.slice(i, n + 1), i = n + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
g(qo, "indentString");
function Ps(e11, t) {
  return `
` + Ot.repeat(" ", e11.indent * t);
}
g(Ps, "generateNextLine");
function ep(e11, t) {
  var r, i, n;
  for (r = 0, i = e11.implicitTypes.length; r < i; r += 1)
    if (n = e11.implicitTypes[r], n.resolve(t))
      return true;
  return false;
}
g(ep, "testImplicitResolving");
function yn(e11) {
  return e11 === E1 || e11 === L1;
}
g(yn, "isWhitespace");
function yi(e11) {
  return 32 <= e11 && e11 <= 126 || 161 <= e11 && e11 <= 55295 && e11 !== 8232 && e11 !== 8233 || 57344 <= e11 && e11 <= 65533 && e11 !== Ul || 65536 <= e11 && e11 <= 1114111;
}
g(yi, "isPrintable");
function Ho(e11) {
  return yi(e11) && e11 !== Ul && e11 !== A1 && e11 !== gn;
}
g(Ho, "isNsCharOrWhitespace");
function jo(e11, t, r) {
  var i = Ho(e11), n = i && !yn(e11);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e11 !== Gd && e11 !== Vd && e11 !== Xd && e11 !== Kd && e11 !== Zd) && e11 !== Wo && !(t === Rs && !n) || Ho(t) && !yn(t) && e11 === Wo || t === Rs && n
  );
}
g(jo, "isPlainSafe");
function rp(e11) {
  return yi(e11) && e11 !== Ul && !yn(e11) && e11 !== R1 && e11 !== z1 && e11 !== Rs && e11 !== Gd && e11 !== Vd && e11 !== Xd && e11 !== Kd && e11 !== Zd && e11 !== Wo && e11 !== O1 && e11 !== I1 && e11 !== M1 && e11 !== H1 && e11 !== P1 && e11 !== N1 && e11 !== D1 && e11 !== $1 && e11 !== F1 && e11 !== W1 && e11 !== q1;
}
g(rp, "isPlainSafeFirst");
function ip(e11) {
  return !yn(e11) && e11 !== Rs;
}
g(ip, "isPlainSafeLast");
function Jr(e11, t) {
  var r = e11.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e11.length && (i = e11.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
g(Jr, "codePointAt");
function Yl(e11) {
  var t = /^\n* /;
  return t.test(e11);
}
g(Yl, "needIndentIndicator");
var np = 1;
var Uo = 2;
var sp = 3;
var ap = 4;
var Zr = 5;
function op(e11, t, r, i, n, s, o, a) {
  var l, c = 0, h3 = null, u = false, f = false, d = i !== -1, p = -1, m = rp(Jr(e11, 0)) && ip(Jr(e11, e11.length - 1));
  if (t || o)
    for (l = 0; l < e11.length; c >= 65536 ? l += 2 : l++) {
      if (c = Jr(e11, l), !yi(c))
        return Zr;
      m = m && jo(c, h3, a), h3 = c;
    }
  else {
    for (l = 0; l < e11.length; c >= 65536 ? l += 2 : l++) {
      if (c = Jr(e11, l), c === gn)
        u = true, d && (f = f || // Foldable line = too long, and not more-indented.
        l - p - 1 > i && e11[p + 1] !== " ", p = l);
      else if (!yi(c))
        return Zr;
      m = m && jo(c, h3, a), h3 = c;
    }
    f = f || d && l - p - 1 > i && e11[p + 1] !== " ";
  }
  return !u && !f ? m && !o && !n(e11) ? np : s === mn ? Zr : Uo : r > 9 && Yl(e11) ? Zr : o ? s === mn ? Zr : Uo : f ? ap : sp;
}
g(op, "chooseScalarStyle");
function lp(e11, t, r, i, n) {
  e11.dump = function() {
    if (t.length === 0)
      return e11.quotingType === mn ? '""' : "''";
    if (!e11.noCompatMode && (j1.indexOf(t) !== -1 || U1.test(t)))
      return e11.quotingType === mn ? '"' + t + '"' : "'" + t + "'";
    var s = e11.indent * Math.max(1, r), o = e11.lineWidth === -1 ? -1 : Math.max(Math.min(e11.lineWidth, 40), e11.lineWidth - s), a = i || e11.flowLevel > -1 && r >= e11.flowLevel;
    function l(c) {
      return ep(e11, c);
    }
    switch (g(l, "testAmbiguity"), op(
      t,
      a,
      e11.indent,
      o,
      l,
      e11.quotingType,
      e11.forceQuotes && !i,
      n
    )) {
      case np:
        return t;
      case Uo:
        return "'" + t.replace(/'/g, "''") + "'";
      case sp:
        return "|" + Yo(t, e11.indent) + Go(qo(t, s));
      case ap:
        return ">" + Yo(t, e11.indent) + Go(qo(cp(t, o), s));
      case Zr:
        return '"' + hp(t) + '"';
      default:
        throw new se("impossible error: invalid scalar style");
    }
  }();
}
g(lp, "writeScalar");
function Yo(e11, t) {
  var r = Yl(e11) ? String(t) : "", i = e11[e11.length - 1] === `
`, n = i && (e11[e11.length - 2] === `
` || e11 === `
`), s = n ? "+" : i ? "" : "-";
  return r + s + `
`;
}
g(Yo, "blockHeader");
function Go(e11) {
  return e11[e11.length - 1] === `
` ? e11.slice(0, -1) : e11;
}
g(Go, "dropEndingNewline");
function cp(e11, t) {
  for (var r = /(\n+)([^\n]*)/g, i = function() {
    var c = e11.indexOf(`
`);
    return c = c !== -1 ? c : e11.length, r.lastIndex = c, Vo(e11.slice(0, c), t);
  }(), n = e11[0] === `
` || e11[0] === " ", s, o; o = r.exec(e11); ) {
    var a = o[1], l = o[2];
    s = l[0] === " ", i += a + (!n && !s && l !== "" ? `
` : "") + Vo(l, t), n = s;
  }
  return i;
}
g(cp, "foldString");
function Vo(e11, t) {
  if (e11 === "" || e11[0] === " ") return e11;
  for (var r = / [^ ]/g, i, n = 0, s, o = 0, a = 0, l = ""; i = r.exec(e11); )
    a = i.index, a - n > t && (s = o > n ? o : a, l += `
` + e11.slice(n, s), n = s + 1), o = a;
  return l += `
`, e11.length - n > t && o > n ? l += e11.slice(n, o) + `
` + e11.slice(o + 1) : l += e11.slice(n), l.slice(1);
}
g(Vo, "foldLine");
function hp(e11) {
  for (var t = "", r = 0, i, n = 0; n < e11.length; r >= 65536 ? n += 2 : n++)
    r = Jr(e11, n), i = Ut[r], !i && yi(r) ? (t += e11[n], r >= 65536 && (t += e11[n + 1])) : t += i || Jd(r);
  return t;
}
g(hp, "escapeString");
function up(e11, t, r) {
  var i = "", n = e11.tag, s, o, a;
  for (s = 0, o = r.length; s < o; s += 1)
    a = r[s], e11.replacer && (a = e11.replacer.call(r, String(s), a)), ($e(e11, t, a, false, false) || typeof a > "u" && $e(e11, t, null, false, false)) && (i !== "" && (i += "," + (e11.condenseFlow ? "" : " ")), i += e11.dump);
  e11.tag = n, e11.dump = "[" + i + "]";
}
g(up, "writeFlowSequence");
function Xo(e11, t, r, i) {
  var n = "", s = e11.tag, o, a, l;
  for (o = 0, a = r.length; o < a; o += 1)
    l = r[o], e11.replacer && (l = e11.replacer.call(r, String(o), l)), ($e(e11, t + 1, l, true, true, false, true) || typeof l > "u" && $e(e11, t + 1, null, true, true, false, true)) && ((!i || n !== "") && (n += Ps(e11, t)), e11.dump && gn === e11.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e11.dump);
  e11.tag = s, e11.dump = n || "[]";
}
g(Xo, "writeBlockSequence");
function fp(e11, t, r) {
  var i = "", n = e11.tag, s = Object.keys(r), o, a, l, c, h3;
  for (o = 0, a = s.length; o < a; o += 1)
    h3 = "", i !== "" && (h3 += ", "), e11.condenseFlow && (h3 += '"'), l = s[o], c = r[l], e11.replacer && (c = e11.replacer.call(r, l, c)), $e(e11, t, l, false, false) && (e11.dump.length > 1024 && (h3 += "? "), h3 += e11.dump + (e11.condenseFlow ? '"' : "") + ":" + (e11.condenseFlow ? "" : " "), $e(e11, t, c, false, false) && (h3 += e11.dump, i += h3));
  e11.tag = n, e11.dump = "{" + i + "}";
}
g(fp, "writeFlowMapping");
function dp(e11, t, r, i) {
  var n = "", s = e11.tag, o = Object.keys(r), a, l, c, h3, u, f;
  if (e11.sortKeys === true)
    o.sort();
  else if (typeof e11.sortKeys == "function")
    o.sort(e11.sortKeys);
  else if (e11.sortKeys)
    throw new se("sortKeys must be a boolean or a function");
  for (a = 0, l = o.length; a < l; a += 1)
    f = "", (!i || n !== "") && (f += Ps(e11, t)), c = o[a], h3 = r[c], e11.replacer && (h3 = e11.replacer.call(r, c, h3)), $e(e11, t + 1, c, true, true, true) && (u = e11.tag !== null && e11.tag !== "?" || e11.dump && e11.dump.length > 1024, u && (e11.dump && gn === e11.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e11.dump, u && (f += Ps(e11, t)), $e(e11, t + 1, h3, true, u) && (e11.dump && gn === e11.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e11.dump, n += f));
  e11.tag = s, e11.dump = n || "{}";
}
g(dp, "writeBlockMapping");
function Ko(e11, t, r) {
  var i, n, s, o, a, l;
  for (n = r ? e11.explicitTypes : e11.implicitTypes, s = 0, o = n.length; s < o; s += 1)
    if (a = n[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e11.tag = a.representName(t) : e11.tag = a.tag : e11.tag = "?", a.represent) {
        if (l = e11.styleMap[a.tag] || a.defaultStyle, Ud.call(a.represent) === "[object Function]")
          i = a.represent(t, l);
        else if (Yd.call(a.represent, l))
          i = a.represent[l](t, l);
        else
          throw new se("!<" + a.tag + '> tag resolver accepts not "' + l + '" style');
        e11.dump = i;
      }
      return true;
    }
  return false;
}
g(Ko, "detectType");
function $e(e11, t, r, i, n, s, o) {
  e11.tag = null, e11.dump = r, Ko(e11, r, false) || Ko(e11, r, true);
  var a = Ud.call(e11.dump), l = i, c;
  i && (i = e11.flowLevel < 0 || e11.flowLevel > t);
  var h3 = a === "[object Object]" || a === "[object Array]", u, f;
  if (h3 && (u = e11.duplicates.indexOf(r), f = u !== -1), (e11.tag !== null && e11.tag !== "?" || f || e11.indent !== 2 && t > 0) && (n = false), f && e11.usedDuplicates[u])
    e11.dump = "*ref_" + u;
  else {
    if (h3 && f && !e11.usedDuplicates[u] && (e11.usedDuplicates[u] = true), a === "[object Object]")
      i && Object.keys(e11.dump).length !== 0 ? (dp(e11, t, e11.dump, n), f && (e11.dump = "&ref_" + u + e11.dump)) : (fp(e11, t, e11.dump), f && (e11.dump = "&ref_" + u + " " + e11.dump));
    else if (a === "[object Array]")
      i && e11.dump.length !== 0 ? (e11.noArrayIndent && !o && t > 0 ? Xo(e11, t - 1, e11.dump, n) : Xo(e11, t, e11.dump, n), f && (e11.dump = "&ref_" + u + e11.dump)) : (up(e11, t, e11.dump), f && (e11.dump = "&ref_" + u + " " + e11.dump));
    else if (a === "[object String]")
      e11.tag !== "?" && lp(e11, e11.dump, t, s, l);
    else {
      if (a === "[object Undefined]")
        return false;
      if (e11.skipInvalid) return false;
      throw new se("unacceptable kind of an object to dump " + a);
    }
    e11.tag !== null && e11.tag !== "?" && (c = encodeURI(
      e11.tag[0] === "!" ? e11.tag.slice(1) : e11.tag
    ).replace(/!/g, "%21"), e11.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e11.dump = c + " " + e11.dump);
  }
  return true;
}
g($e, "writeNode");
function pp(e11, t) {
  var r = [], i = [], n, s;
  for (Ns(e11, r, i), n = 0, s = i.length; n < s; n += 1)
    t.duplicates.push(r[i[n]]);
  t.usedDuplicates = new Array(s);
}
g(pp, "getDuplicateReferences");
function Ns(e11, t, r) {
  var i, n, s;
  if (e11 !== null && typeof e11 == "object")
    if (n = t.indexOf(e11), n !== -1)
      r.indexOf(n) === -1 && r.push(n);
    else if (t.push(e11), Array.isArray(e11))
      for (n = 0, s = e11.length; n < s; n += 1)
        Ns(e11[n], t, r);
    else
      for (i = Object.keys(e11), n = 0, s = i.length; n < s; n += 1)
        Ns(e11[i[n]], t, r);
}
g(Ns, "inspectNode");
function G1(e11, t) {
  t = t || {};
  var r = new tp(t);
  r.noRefs || pp(e11, r);
  var i = e11;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), $e(r, 0, i, true, true) ? r.dump + `
` : "";
}
g(G1, "dump$1");
function V1(e11, t) {
  return function() {
    throw new Error("Function yaml." + e11 + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
g(V1, "renamed");
var X1 = sd;
var K1 = B1.load;
var de = {
  aggregation: 18,
  extension: 18,
  composition: 18,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
};
function tn(e11, t) {
  if (e11 === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e11 = St(e11), t = St(t);
  const [r, i] = [e11.x, e11.y], [n, s] = [t.x, t.y], o = n - r, a = s - i;
  return { angle: Math.atan(a / o), deltaX: o, deltaY: a };
}
g(tn, "calculateDeltaAndAngle");
var St = g((e11) => Array.isArray(e11) ? { x: e11[0], y: e11[1] } : e11, "pointTransformer");
var Z1 = g((e11) => ({
  x: g(function(t, r, i) {
    let n = 0;
    const s = St(i[0]).x < St(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(de, e11.arrowTypeStart)) {
      const { angle: d, deltaX: p } = tn(i[0], i[1]);
      n = de[e11.arrowTypeStart] * Math.cos(d) * (p >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(de, e11.arrowTypeEnd)) {
      const { angle: d, deltaX: p } = tn(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = de[e11.arrowTypeEnd] * Math.cos(d) * (p >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      St(t).x - St(i[i.length - 1]).x
    ), a = Math.abs(
      St(t).y - St(i[i.length - 1]).y
    ), l = Math.abs(St(t).x - St(i[0]).x), c = Math.abs(St(t).y - St(i[0]).y), h3 = de[e11.arrowTypeStart], u = de[e11.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && a < u) {
      let d = u + f - o;
      d *= s === "right" ? -1 : 1, n -= d;
    }
    if (l < h3 && l > 0 && c < h3) {
      let d = h3 + f - l;
      d *= s === "right" ? -1 : 1, n += d;
    }
    return St(t).x + n;
  }, "x"),
  y: g(function(t, r, i) {
    let n = 0;
    const s = St(i[0]).y < St(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(de, e11.arrowTypeStart)) {
      const { angle: d, deltaY: p } = tn(i[0], i[1]);
      n = de[e11.arrowTypeStart] * Math.abs(Math.sin(d)) * (p >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(de, e11.arrowTypeEnd)) {
      const { angle: d, deltaY: p } = tn(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = de[e11.arrowTypeEnd] * Math.abs(Math.sin(d)) * (p >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      St(t).y - St(i[i.length - 1]).y
    ), a = Math.abs(
      St(t).x - St(i[i.length - 1]).x
    ), l = Math.abs(St(t).y - St(i[0]).y), c = Math.abs(St(t).x - St(i[0]).x), h3 = de[e11.arrowTypeStart], u = de[e11.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && a < u) {
      let d = u + f - o;
      d *= s === "up" ? -1 : 1, n -= d;
    }
    if (l < h3 && l > 0 && c < h3) {
      let d = h3 + f - l;
      d *= s === "up" ? -1 : 1, n += d;
    }
    return St(t).y + n;
  }, "y")
}), "getLineFunctionsWithOffset");
var Gl = g(({
  flowchart: e11
}) => {
  var _a3, _b2;
  const t = ((_a3 = e11 == null ? void 0 : e11.subGraphTitleMargin) == null ? void 0 : _a3.top) ?? 0, r = ((_b2 = e11 == null ? void 0 : e11.subGraphTitleMargin) == null ? void 0 : _b2.bottom) ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
var Q1 = g((e11) => {
  const { handDrawnSeed: t } = gt();
  return {
    fill: e11,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e11,
    seed: t
  };
}, "solidStateFill");
var Bi = g((e11) => {
  const t = J1([...e11.cssCompiledStyles || [], ...e11.cssStyles || []]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles");
var J1 = g((e11) => {
  const t = /* @__PURE__ */ new Map();
  return e11.forEach((r) => {
    const [i, n] = r.split(":");
    t.set(i.trim(), n == null ? void 0 : n.trim());
  }), t;
}, "styles2Map");
var gp = g((e11) => e11 === "color" || e11 === "font-size" || e11 === "font-family" || e11 === "font-weight" || e11 === "font-style" || e11 === "text-decoration" || e11 === "text-align" || e11 === "text-transform" || e11 === "line-height" || e11 === "letter-spacing" || e11 === "word-spacing" || e11 === "text-shadow" || e11 === "text-overflow" || e11 === "white-space" || e11 === "word-wrap" || e11 === "word-break" || e11 === "overflow-wrap" || e11 === "hyphens", "isLabelStyle");
var Z = g((e11) => {
  const { stylesArray: t } = Bi(e11), r = [], i = [], n = [], s = [];
  return t.forEach((o) => {
    const a = o[0];
    gp(a) ? r.push(o.join(":") + " !important") : (i.push(o.join(":") + " !important"), a.includes("stroke") && n.push(o.join(":") + " !important"), a === "fill" && s.push(o.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: n,
    backgroundStyles: s
  };
}, "styles2String");
var X = g((e11, t) => {
  var _a3;
  const { themeVariables: r, handDrawnSeed: i } = gt(), { nodeBorder: n, mainBkg: s } = r, { stylesMap: o } = Bi(e11);
  return Object.assign(
    {
      roughness: 0.7,
      fill: o.get("fill") || s,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: o.get("stroke") || n,
      seed: i,
      strokeWidth: ((_a3 = o.get("stroke-width")) == null ? void 0 : _a3.replace("px", "")) || 1.3,
      fillLineDash: [0, 0]
    },
    t
  );
}, "userNodeOverrides");
var qi = {};
var $t = {};
var _h;
function tw() {
  return _h || (_h = 1, Object.defineProperty($t, "__esModule", { value: true }), $t.BLANK_URL = $t.relativeFirstCharacters = $t.whitespaceEscapeCharsRegex = $t.urlSchemeRegex = $t.ctrlCharactersRegex = $t.htmlCtrlEntityRegex = $t.htmlEntitiesRegex = $t.invalidProtocolRegex = void 0, $t.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, $t.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, $t.htmlCtrlEntityRegex = /&(newline|tab);/gi, $t.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, $t.urlSchemeRegex = /^.+(:|&colon;)/gim, $t.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, $t.relativeFirstCharacters = [".", "/"], $t.BLANK_URL = "about:blank"), $t;
}
var Sh;
function ew() {
  if (Sh) return qi;
  Sh = 1, Object.defineProperty(qi, "__esModule", { value: true }), qi.sanitizeUrl = void 0;
  var e11 = tw();
  function t(o) {
    return e11.relativeFirstCharacters.indexOf(o[0]) > -1;
  }
  function r(o) {
    var a = o.replace(e11.ctrlCharactersRegex, "");
    return a.replace(e11.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(o) {
    return URL.canParse(o);
  }
  function n(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }
  function s(o) {
    if (!o)
      return e11.BLANK_URL;
    var a, l = n(o.trim());
    do
      l = r(l).replace(e11.htmlCtrlEntityRegex, "").replace(e11.ctrlCharactersRegex, "").replace(e11.whitespaceEscapeCharsRegex, "").trim(), l = n(l), a = l.match(e11.ctrlCharactersRegex) || l.match(e11.htmlEntitiesRegex) || l.match(e11.htmlCtrlEntityRegex) || l.match(e11.whitespaceEscapeCharsRegex);
    while (a && a.length > 0);
    var c = l;
    if (!c)
      return e11.BLANK_URL;
    if (t(c))
      return c;
    var h3 = c.trimStart(), u = h3.match(e11.urlSchemeRegex);
    if (!u)
      return c;
    var f = u[0].toLowerCase().trim();
    if (e11.invalidProtocolRegex.test(f))
      return e11.BLANK_URL;
    var d = h3.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return d;
    if (f === "http:" || f === "https:") {
      if (!i(d))
        return e11.BLANK_URL;
      var p = new URL(d);
      return p.protocol = p.protocol.toLowerCase(), p.hostname = p.hostname.toLowerCase(), p.toString();
    }
    return d;
  }
  return qi.sanitizeUrl = s, qi;
}
var rw = ew();
var iw = { value: () => {
} };
function mp() {
  for (var e11 = 0, t = arguments.length, r = {}, i; e11 < t; ++e11) {
    if (!(i = arguments[e11] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ms(r);
}
function ms(e11) {
  this._ = e11;
}
function nw(e11, t) {
  return e11.trim().split(/^|\s+/).map(function(r) {
    var i = "", n = r.indexOf(".");
    if (n >= 0 && (i = r.slice(n + 1), r = r.slice(0, n)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ms.prototype = mp.prototype = {
  constructor: ms,
  on: function(e11, t) {
    var r = this._, i = nw(e11 + "", r), n, s = -1, o = i.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((n = (e11 = i[s]).type) && (n = sw(r[n], e11.name))) return n;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < o; )
      if (n = (e11 = i[s]).type) r[n] = Th(r[n], e11.name, t);
      else if (t == null) for (n in r) r[n] = Th(r[n], e11.name, null);
    return this;
  },
  copy: function() {
    var e11 = {}, t = this._;
    for (var r in t) e11[r] = t[r].slice();
    return new ms(e11);
  },
  call: function(e11, t) {
    if ((n = arguments.length - 2) > 0) for (var r = new Array(n), i = 0, n, s; i < n; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e11)) throw new Error("unknown type: " + e11);
    for (s = this._[e11], i = 0, n = s.length; i < n; ++i) s[i].value.apply(t, r);
  },
  apply: function(e11, t, r) {
    if (!this._.hasOwnProperty(e11)) throw new Error("unknown type: " + e11);
    for (var i = this._[e11], n = 0, s = i.length; n < s; ++n) i[n].value.apply(t, r);
  }
};
function sw(e11, t) {
  for (var r = 0, i = e11.length, n; r < i; ++r)
    if ((n = e11[r]).name === t)
      return n.value;
}
function Th(e11, t, r) {
  for (var i = 0, n = e11.length; i < n; ++i)
    if (e11[i].name === t) {
      e11[i] = iw, e11 = e11.slice(0, i).concat(e11.slice(i + 1));
      break;
    }
  return r != null && e11.push({ name: t, value: r }), e11;
}
var Zo = "http://www.w3.org/1999/xhtml";
var Bh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wa(e11) {
  var t = e11 += "", r = t.indexOf(":");
  return r >= 0 && (t = e11.slice(0, r)) !== "xmlns" && (e11 = e11.slice(r + 1)), Bh.hasOwnProperty(t) ? { space: Bh[t], local: e11 } : e11;
}
function aw(e11) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Zo && t.documentElement.namespaceURI === Zo ? t.createElement(e11) : t.createElementNS(r, e11);
  };
}
function ow(e11) {
  return function() {
    return this.ownerDocument.createElementNS(e11.space, e11.local);
  };
}
function yp(e11) {
  var t = wa(e11);
  return (t.local ? ow : aw)(t);
}
function lw() {
}
function Vl(e11) {
  return e11 == null ? lw : function() {
    return this.querySelector(e11);
  };
}
function cw(e11) {
  typeof e11 != "function" && (e11 = Vl(e11));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var s = t[n], o = s.length, a = i[n] = new Array(o), l, c, h3 = 0; h3 < o; ++h3)
      (l = s[h3]) && (c = e11.call(l, l.__data__, h3, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[h3] = c);
  return new he(i, this._parents);
}
function hw(e11) {
  return e11 == null ? [] : Array.isArray(e11) ? e11 : Array.from(e11);
}
function uw() {
  return [];
}
function xp(e11) {
  return e11 == null ? uw : function() {
    return this.querySelectorAll(e11);
  };
}
function fw(e11) {
  return function() {
    return hw(e11.apply(this, arguments));
  };
}
function dw(e11) {
  typeof e11 == "function" ? e11 = fw(e11) : e11 = xp(e11);
  for (var t = this._groups, r = t.length, i = [], n = [], s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (i.push(e11.call(l, l.__data__, c, o)), n.push(l));
  return new he(i, n);
}
function bp(e11) {
  return function() {
    return this.matches(e11);
  };
}
function wp(e11) {
  return function(t) {
    return t.matches(e11);
  };
}
var pw = Array.prototype.find;
function gw(e11) {
  return function() {
    return pw.call(this.children, e11);
  };
}
function mw() {
  return this.firstElementChild;
}
function yw(e11) {
  return this.select(e11 == null ? mw : gw(typeof e11 == "function" ? e11 : wp(e11)));
}
var xw = Array.prototype.filter;
function bw() {
  return Array.from(this.children);
}
function ww(e11) {
  return function() {
    return xw.call(this.children, e11);
  };
}
function vw(e11) {
  return this.selectAll(e11 == null ? bw : ww(typeof e11 == "function" ? e11 : wp(e11)));
}
function Cw(e11) {
  typeof e11 != "function" && (e11 = bp(e11));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var s = t[n], o = s.length, a = i[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && e11.call(l, l.__data__, c, s) && a.push(l);
  return new he(i, this._parents);
}
function vp(e11) {
  return new Array(e11.length);
}
function kw() {
  return new he(this._enter || this._groups.map(vp), this._parents);
}
function zs(e11, t) {
  this.ownerDocument = e11.ownerDocument, this.namespaceURI = e11.namespaceURI, this._next = null, this._parent = e11, this.__data__ = t;
}
zs.prototype = {
  constructor: zs,
  appendChild: function(e11) {
    return this._parent.insertBefore(e11, this._next);
  },
  insertBefore: function(e11, t) {
    return this._parent.insertBefore(e11, t);
  },
  querySelector: function(e11) {
    return this._parent.querySelector(e11);
  },
  querySelectorAll: function(e11) {
    return this._parent.querySelectorAll(e11);
  }
};
function _w(e11) {
  return function() {
    return e11;
  };
}
function Sw(e11, t, r, i, n, s) {
  for (var o = 0, a, l = t.length, c = s.length; o < c; ++o)
    (a = t[o]) ? (a.__data__ = s[o], i[o] = a) : r[o] = new zs(e11, s[o]);
  for (; o < l; ++o)
    (a = t[o]) && (n[o] = a);
}
function Tw(e11, t, r, i, n, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), h3 = t.length, u = s.length, f = new Array(h3), d;
  for (a = 0; a < h3; ++a)
    (l = t[a]) && (f[a] = d = o.call(l, l.__data__, a, t) + "", c.has(d) ? n[a] = l : c.set(d, l));
  for (a = 0; a < u; ++a)
    d = o.call(e11, s[a], a, s) + "", (l = c.get(d)) ? (i[a] = l, l.__data__ = s[a], c.delete(d)) : r[a] = new zs(e11, s[a]);
  for (a = 0; a < h3; ++a)
    (l = t[a]) && c.get(f[a]) === l && (n[a] = l);
}
function Bw(e11) {
  return e11.__data__;
}
function Lw(e11, t) {
  if (!arguments.length) return Array.from(this, Bw);
  var r = t ? Tw : Sw, i = this._parents, n = this._groups;
  typeof e11 != "function" && (e11 = _w(e11));
  for (var s = n.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var h3 = i[c], u = n[c], f = u.length, d = Aw(e11.call(h3, h3 && h3.__data__, c, i)), p = d.length, m = a[c] = new Array(p), y = o[c] = new Array(p), b = l[c] = new Array(f);
    r(h3, u, m, y, b, d, t);
    for (var x = 0, w = 0, v, C; x < p; ++x)
      if (v = m[x]) {
        for (x >= w && (w = x + 1); !(C = y[w]) && ++w < p; ) ;
        v._next = C || null;
      }
  }
  return o = new he(o, i), o._enter = a, o._exit = l, o;
}
function Aw(e11) {
  return typeof e11 == "object" && "length" in e11 ? e11 : Array.from(e11);
}
function Ew() {
  return new he(this._exit || this._groups.map(vp), this._parents);
}
function Mw(e11, t, r) {
  var i = this.enter(), n = this, s = this.exit();
  return typeof e11 == "function" ? (i = e11(i), i && (i = i.selection())) : i = i.append(e11 + ""), t != null && (n = t(n), n && (n = n.selection())), r == null ? s.remove() : r(s), i && n ? i.merge(n).order() : n;
}
function $w(e11) {
  for (var t = e11.selection ? e11.selection() : e11, r = this._groups, i = t._groups, n = r.length, s = i.length, o = Math.min(n, s), a = new Array(n), l = 0; l < o; ++l)
    for (var c = r[l], h3 = i[l], u = c.length, f = a[l] = new Array(u), d, p = 0; p < u; ++p)
      (d = c[p] || h3[p]) && (f[p] = d);
  for (; l < n; ++l)
    a[l] = r[l];
  return new he(a, this._parents);
}
function Fw() {
  for (var e11 = this._groups, t = -1, r = e11.length; ++t < r; )
    for (var i = e11[t], n = i.length - 1, s = i[n], o; --n >= 0; )
      (o = i[n]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Ow(e11) {
  e11 || (e11 = Dw);
  function t(u, f) {
    return u && f ? e11(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, n = new Array(i), s = 0; s < i; ++s) {
    for (var o = r[s], a = o.length, l = n[s] = new Array(a), c, h3 = 0; h3 < a; ++h3)
      (c = o[h3]) && (l[h3] = c);
    l.sort(t);
  }
  return new he(n, this._parents).order();
}
function Dw(e11, t) {
  return e11 < t ? -1 : e11 > t ? 1 : e11 >= t ? 0 : NaN;
}
function Iw() {
  var e11 = arguments[0];
  return arguments[0] = this, e11.apply(null, arguments), this;
}
function Rw() {
  return Array.from(this);
}
function Pw() {
  for (var e11 = this._groups, t = 0, r = e11.length; t < r; ++t)
    for (var i = e11[t], n = 0, s = i.length; n < s; ++n) {
      var o = i[n];
      if (o) return o;
    }
  return null;
}
function Nw() {
  let e11 = 0;
  for (const t of this) ++e11;
  return e11;
}
function zw() {
  return !this.node();
}
function Ww(e11) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var n = t[r], s = 0, o = n.length, a; s < o; ++s)
      (a = n[s]) && e11.call(a, a.__data__, s, n);
  return this;
}
function qw(e11) {
  return function() {
    this.removeAttribute(e11);
  };
}
function Hw(e11) {
  return function() {
    this.removeAttributeNS(e11.space, e11.local);
  };
}
function jw(e11, t) {
  return function() {
    this.setAttribute(e11, t);
  };
}
function Uw(e11, t) {
  return function() {
    this.setAttributeNS(e11.space, e11.local, t);
  };
}
function Yw(e11, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e11) : this.setAttribute(e11, r);
  };
}
function Gw(e11, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e11.space, e11.local) : this.setAttributeNS(e11.space, e11.local, r);
  };
}
function Vw(e11, t) {
  var r = wa(e11);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? Hw : qw : typeof t == "function" ? r.local ? Gw : Yw : r.local ? Uw : jw)(r, t));
}
function Cp(e11) {
  return e11.ownerDocument && e11.ownerDocument.defaultView || e11.document && e11 || e11.defaultView;
}
function Xw(e11) {
  return function() {
    this.style.removeProperty(e11);
  };
}
function Kw(e11, t, r) {
  return function() {
    this.style.setProperty(e11, t, r);
  };
}
function Zw(e11, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e11) : this.style.setProperty(e11, i, r);
  };
}
function Qw(e11, t, r) {
  return arguments.length > 1 ? this.each((t == null ? Xw : typeof t == "function" ? Zw : Kw)(e11, t, r ?? "")) : xi(this.node(), e11);
}
function xi(e11, t) {
  return e11.style.getPropertyValue(t) || Cp(e11).getComputedStyle(e11, null).getPropertyValue(t);
}
function Jw(e11) {
  return function() {
    delete this[e11];
  };
}
function tv(e11, t) {
  return function() {
    this[e11] = t;
  };
}
function ev(e11, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e11] : this[e11] = r;
  };
}
function rv(e11, t) {
  return arguments.length > 1 ? this.each((t == null ? Jw : typeof t == "function" ? ev : tv)(e11, t)) : this.node()[e11];
}
function kp(e11) {
  return e11.trim().split(/^|\s+/);
}
function Xl(e11) {
  return e11.classList || new _p(e11);
}
function _p(e11) {
  this._node = e11, this._names = kp(e11.getAttribute("class") || "");
}
_p.prototype = {
  add: function(e11) {
    var t = this._names.indexOf(e11);
    t < 0 && (this._names.push(e11), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e11) {
    var t = this._names.indexOf(e11);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e11) {
    return this._names.indexOf(e11) >= 0;
  }
};
function Sp(e11, t) {
  for (var r = Xl(e11), i = -1, n = t.length; ++i < n; ) r.add(t[i]);
}
function Tp(e11, t) {
  for (var r = Xl(e11), i = -1, n = t.length; ++i < n; ) r.remove(t[i]);
}
function iv(e11) {
  return function() {
    Sp(this, e11);
  };
}
function nv(e11) {
  return function() {
    Tp(this, e11);
  };
}
function sv(e11, t) {
  return function() {
    (t.apply(this, arguments) ? Sp : Tp)(this, e11);
  };
}
function av(e11, t) {
  var r = kp(e11 + "");
  if (arguments.length < 2) {
    for (var i = Xl(this.node()), n = -1, s = r.length; ++n < s; ) if (!i.contains(r[n])) return false;
    return true;
  }
  return this.each((typeof t == "function" ? sv : t ? iv : nv)(r, t));
}
function ov() {
  this.textContent = "";
}
function lv(e11) {
  return function() {
    this.textContent = e11;
  };
}
function cv(e11) {
  return function() {
    var t = e11.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hv(e11) {
  return arguments.length ? this.each(e11 == null ? ov : (typeof e11 == "function" ? cv : lv)(e11)) : this.node().textContent;
}
function uv() {
  this.innerHTML = "";
}
function fv(e11) {
  return function() {
    this.innerHTML = e11;
  };
}
function dv(e11) {
  return function() {
    var t = e11.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function pv(e11) {
  return arguments.length ? this.each(e11 == null ? uv : (typeof e11 == "function" ? dv : fv)(e11)) : this.node().innerHTML;
}
function gv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function mv() {
  return this.each(gv);
}
function yv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xv() {
  return this.each(yv);
}
function bv(e11) {
  var t = typeof e11 == "function" ? e11 : yp(e11);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function wv() {
  return null;
}
function vv(e11, t) {
  var r = typeof e11 == "function" ? e11 : yp(e11), i = t == null ? wv : typeof t == "function" ? t : Vl(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Cv() {
  var e11 = this.parentNode;
  e11 && e11.removeChild(this);
}
function kv() {
  return this.each(Cv);
}
function _v() {
  var e11 = this.cloneNode(false), t = this.parentNode;
  return t ? t.insertBefore(e11, this.nextSibling) : e11;
}
function Sv() {
  var e11 = this.cloneNode(true), t = this.parentNode;
  return t ? t.insertBefore(e11, this.nextSibling) : e11;
}
function Tv(e11) {
  return this.select(e11 ? Sv : _v);
}
function Bv(e11) {
  return arguments.length ? this.property("__data__", e11) : this.node().__data__;
}
function Lv(e11) {
  return function(t) {
    e11.call(this, t, this.__data__);
  };
}
function Av(e11) {
  return e11.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Ev(e11) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, n = t.length, s; r < n; ++r)
        s = t[r], (!e11.type || s.type === e11.type) && s.name === e11.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++i] = s;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function Mv(e11, t, r) {
  return function() {
    var i = this.__on, n, s = Lv(t);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((n = i[o]).type === e11.type && n.name === e11.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = s, n.options = r), n.value = t;
          return;
        }
    }
    this.addEventListener(e11.type, s, r), n = { type: e11.type, name: e11.name, value: t, listener: s, options: r }, i ? i.push(n) : this.__on = [n];
  };
}
function $v(e11, t, r) {
  var i = Av(e11 + ""), n, s = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, h3; l < c; ++l)
        for (n = 0, h3 = a[l]; n < s; ++n)
          if ((o = i[n]).type === h3.type && o.name === h3.name)
            return h3.value;
    }
    return;
  }
  for (a = t ? Mv : Ev, n = 0; n < s; ++n) this.each(a(i[n], t, r));
  return this;
}
function Bp(e11, t, r) {
  var i = Cp(e11), n = i.CustomEvent;
  typeof n == "function" ? n = new n(t, r) : (n = i.document.createEvent("Event"), r ? (n.initEvent(t, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(t, false, false)), e11.dispatchEvent(n);
}
function Fv(e11, t) {
  return function() {
    return Bp(this, e11, t);
  };
}
function Ov(e11, t) {
  return function() {
    return Bp(this, e11, t.apply(this, arguments));
  };
}
function Dv(e11, t) {
  return this.each((typeof t == "function" ? Ov : Fv)(e11, t));
}
function* Iv() {
  for (var e11 = this._groups, t = 0, r = e11.length; t < r; ++t)
    for (var i = e11[t], n = 0, s = i.length, o; n < s; ++n)
      (o = i[n]) && (yield o);
}
var Lp = [null];
function he(e11, t) {
  this._groups = e11, this._parents = t;
}
function Mn() {
  return new he([[document.documentElement]], Lp);
}
function Rv() {
  return this;
}
he.prototype = Mn.prototype = {
  constructor: he,
  select: cw,
  selectAll: dw,
  selectChild: yw,
  selectChildren: vw,
  filter: Cw,
  data: Lw,
  enter: kw,
  exit: Ew,
  join: Mw,
  merge: $w,
  selection: Rv,
  order: Fw,
  sort: Ow,
  call: Iw,
  nodes: Rw,
  node: Pw,
  size: Nw,
  empty: zw,
  each: Ww,
  attr: Vw,
  style: Qw,
  property: rv,
  classed: av,
  text: hv,
  html: pv,
  raise: mv,
  lower: xv,
  append: bv,
  insert: vv,
  remove: kv,
  clone: Tv,
  datum: Bv,
  on: $v,
  dispatch: Dv,
  [Symbol.iterator]: Iv
};
function dt(e11) {
  return typeof e11 == "string" ? new he([[document.querySelector(e11)]], [document.documentElement]) : new he([[e11]], Lp);
}
function Kl(e11, t, r) {
  e11.prototype = t.prototype = r, r.constructor = e11;
}
function Ap(e11, t) {
  var r = Object.create(e11.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function $n() {
}
var xn = 0.7;
var Ws = 1 / xn;
var ei = "\\s*([+-]?\\d+)\\s*";
var bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var Pv = /^#([0-9a-f]{3,8})$/;
var Nv = new RegExp(`^rgb\\(${ei},${ei},${ei}\\)$`);
var zv = new RegExp(`^rgb\\(${Ee},${Ee},${Ee}\\)$`);
var Wv = new RegExp(`^rgba\\(${ei},${ei},${ei},${bn}\\)$`);
var qv = new RegExp(`^rgba\\(${Ee},${Ee},${Ee},${bn}\\)$`);
var Hv = new RegExp(`^hsl\\(${bn},${Ee},${Ee}\\)$`);
var jv = new RegExp(`^hsla\\(${bn},${Ee},${Ee},${bn}\\)$`);
var Lh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Kl($n, wn, {
  copy(e11) {
    return Object.assign(new this.constructor(), this, e11);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ah,
  // Deprecated! Use color.formatHex.
  formatHex: Ah,
  formatHex8: Uv,
  formatHsl: Yv,
  formatRgb: Eh,
  toString: Eh
});
function Ah() {
  return this.rgb().formatHex();
}
function Uv() {
  return this.rgb().formatHex8();
}
function Yv() {
  return Ep(this).formatHsl();
}
function Eh() {
  return this.rgb().formatRgb();
}
function wn(e11) {
  var t, r;
  return e11 = (e11 + "").trim().toLowerCase(), (t = Pv.exec(e11)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Mh(t) : r === 3 ? new ae(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Zn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Zn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Nv.exec(e11)) ? new ae(t[1], t[2], t[3], 1) : (t = zv.exec(e11)) ? new ae(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Wv.exec(e11)) ? Zn(t[1], t[2], t[3], t[4]) : (t = qv.exec(e11)) ? Zn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Hv.exec(e11)) ? Oh(t[1], t[2] / 100, t[3] / 100, 1) : (t = jv.exec(e11)) ? Oh(t[1], t[2] / 100, t[3] / 100, t[4]) : Lh.hasOwnProperty(e11) ? Mh(Lh[e11]) : e11 === "transparent" ? new ae(NaN, NaN, NaN, 0) : null;
}
function Mh(e11) {
  return new ae(e11 >> 16 & 255, e11 >> 8 & 255, e11 & 255, 1);
}
function Zn(e11, t, r, i) {
  return i <= 0 && (e11 = t = r = NaN), new ae(e11, t, r, i);
}
function Gv(e11) {
  return e11 instanceof $n || (e11 = wn(e11)), e11 ? (e11 = e11.rgb(), new ae(e11.r, e11.g, e11.b, e11.opacity)) : new ae();
}
function Qo(e11, t, r, i) {
  return arguments.length === 1 ? Gv(e11) : new ae(e11, t, r, i ?? 1);
}
function ae(e11, t, r, i) {
  this.r = +e11, this.g = +t, this.b = +r, this.opacity = +i;
}
Kl(ae, Qo, Ap($n, {
  brighter(e11) {
    return e11 = e11 == null ? Ws : Math.pow(Ws, e11), new ae(this.r * e11, this.g * e11, this.b * e11, this.opacity);
  },
  darker(e11) {
    return e11 = e11 == null ? xn : Math.pow(xn, e11), new ae(this.r * e11, this.g * e11, this.b * e11, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ae(Tr(this.r), Tr(this.g), Tr(this.b), qs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $h,
  // Deprecated! Use color.formatHex.
  formatHex: $h,
  formatHex8: Vv,
  formatRgb: Fh,
  toString: Fh
}));
function $h() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function Vv() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fh() {
  const e11 = qs(this.opacity);
  return `${e11 === 1 ? "rgb(" : "rgba("}${Tr(this.r)}, ${Tr(this.g)}, ${Tr(this.b)}${e11 === 1 ? ")" : `, ${e11})`}`;
}
function qs(e11) {
  return isNaN(e11) ? 1 : Math.max(0, Math.min(1, e11));
}
function Tr(e11) {
  return Math.max(0, Math.min(255, Math.round(e11) || 0));
}
function _r(e11) {
  return e11 = Tr(e11), (e11 < 16 ? "0" : "") + e11.toString(16);
}
function Oh(e11, t, r, i) {
  return i <= 0 ? e11 = t = r = NaN : r <= 0 || r >= 1 ? e11 = t = NaN : t <= 0 && (e11 = NaN), new be(e11, t, r, i);
}
function Ep(e11) {
  if (e11 instanceof be) return new be(e11.h, e11.s, e11.l, e11.opacity);
  if (e11 instanceof $n || (e11 = wn(e11)), !e11) return new be();
  if (e11 instanceof be) return e11;
  e11 = e11.rgb();
  var t = e11.r / 255, r = e11.g / 255, i = e11.b / 255, n = Math.min(t, r, i), s = Math.max(t, r, i), o = NaN, a = s - n, l = (s + n) / 2;
  return a ? (t === s ? o = (r - i) / a + (r < i) * 6 : r === s ? o = (i - t) / a + 2 : o = (t - r) / a + 4, a /= l < 0.5 ? s + n : 2 - s - n, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new be(o, a, l, e11.opacity);
}
function Xv(e11, t, r, i) {
  return arguments.length === 1 ? Ep(e11) : new be(e11, t, r, i ?? 1);
}
function be(e11, t, r, i) {
  this.h = +e11, this.s = +t, this.l = +r, this.opacity = +i;
}
Kl(be, Xv, Ap($n, {
  brighter(e11) {
    return e11 = e11 == null ? Ws : Math.pow(Ws, e11), new be(this.h, this.s, this.l * e11, this.opacity);
  },
  darker(e11) {
    return e11 = e11 == null ? xn : Math.pow(xn, e11), new be(this.h, this.s, this.l * e11, this.opacity);
  },
  rgb() {
    var e11 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e11) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, n = 2 * r - i;
    return new ae(
      io(e11 >= 240 ? e11 - 240 : e11 + 120, n, i),
      io(e11, n, i),
      io(e11 < 120 ? e11 + 240 : e11 - 120, n, i),
      this.opacity
    );
  },
  clamp() {
    return new be(Dh(this.h), Qn(this.s), Qn(this.l), qs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e11 = qs(this.opacity);
    return `${e11 === 1 ? "hsl(" : "hsla("}${Dh(this.h)}, ${Qn(this.s) * 100}%, ${Qn(this.l) * 100}%${e11 === 1 ? ")" : `, ${e11})`}`;
  }
}));
function Dh(e11) {
  return e11 = (e11 || 0) % 360, e11 < 0 ? e11 + 360 : e11;
}
function Qn(e11) {
  return Math.max(0, Math.min(1, e11 || 0));
}
function io(e11, t, r) {
  return (e11 < 60 ? t + (r - t) * e11 / 60 : e11 < 180 ? r : e11 < 240 ? t + (r - t) * (240 - e11) / 60 : t) * 255;
}
var Zl = (e11) => () => e11;
function Mp(e11, t) {
  return function(r) {
    return e11 + r * t;
  };
}
function Kv(e11, t, r) {
  return e11 = Math.pow(e11, r), t = Math.pow(t, r) - e11, r = 1 / r, function(i) {
    return Math.pow(e11 + i * t, r);
  };
}
function XF(e11, t) {
  var r = t - e11;
  return r ? Mp(e11, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Zl(isNaN(e11) ? t : e11);
}
function Zv(e11) {
  return (e11 = +e11) == 1 ? $p : function(t, r) {
    return r - t ? Kv(t, r, e11) : Zl(isNaN(t) ? r : t);
  };
}
function $p(e11, t) {
  var r = t - e11;
  return r ? Mp(e11, r) : Zl(isNaN(e11) ? t : e11);
}
var Ih = function e(t) {
  var r = Zv(t);
  function i(n, s) {
    var o = r((n = Qo(n)).r, (s = Qo(s)).r), a = r(n.g, s.g), l = r(n.b, s.b), c = $p(n.opacity, s.opacity);
    return function(h3) {
      return n.r = o(h3), n.g = a(h3), n.b = l(h3), n.opacity = c(h3), n + "";
    };
  }
  return i.gamma = e, i;
}(1);
function nr(e11, t) {
  return e11 = +e11, t = +t, function(r) {
    return e11 * (1 - r) + t * r;
  };
}
var Jo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var no = new RegExp(Jo.source, "g");
function Qv(e11) {
  return function() {
    return e11;
  };
}
function Jv(e11) {
  return function(t) {
    return e11(t) + "";
  };
}
function t2(e11, t) {
  var r = Jo.lastIndex = no.lastIndex = 0, i, n, s, o = -1, a = [], l = [];
  for (e11 = e11 + "", t = t + ""; (i = Jo.exec(e11)) && (n = no.exec(t)); )
    (s = n.index) > r && (s = t.slice(r, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (n = n[0]) ? a[o] ? a[o] += n : a[++o] = n : (a[++o] = null, l.push({ i: o, x: nr(i, n) })), r = no.lastIndex;
  return r < t.length && (s = t.slice(r), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? Jv(l[0].x) : Qv(t) : (t = l.length, function(c) {
    for (var h3 = 0, u; h3 < t; ++h3) a[(u = l[h3]).i] = u.x(c);
    return a.join("");
  });
}
var Rh = 180 / Math.PI;
var tl = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Fp(e11, t, r, i, n, s) {
  var o, a, l;
  return (o = Math.sqrt(e11 * e11 + t * t)) && (e11 /= o, t /= o), (l = e11 * r + t * i) && (r -= e11 * l, i -= t * l), (a = Math.sqrt(r * r + i * i)) && (r /= a, i /= a, l /= a), e11 * i < t * r && (e11 = -e11, t = -t, l = -l, o = -o), {
    translateX: n,
    translateY: s,
    rotate: Math.atan2(t, e11) * Rh,
    skewX: Math.atan(l) * Rh,
    scaleX: o,
    scaleY: a
  };
}
var Jn;
function e2(e11) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e11 + "");
  return t.isIdentity ? tl : Fp(t.a, t.b, t.c, t.d, t.e, t.f);
}
function r2(e11) {
  return e11 == null || (Jn || (Jn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jn.setAttribute("transform", e11), !(e11 = Jn.transform.baseVal.consolidate())) ? tl : (e11 = e11.matrix, Fp(e11.a, e11.b, e11.c, e11.d, e11.e, e11.f));
}
function Op(e11, t, r, i) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function s(c, h3, u, f, d, p) {
    if (c !== u || h3 !== f) {
      var m = d.push("translate(", null, t, null, r);
      p.push({ i: m - 4, x: nr(c, u) }, { i: m - 2, x: nr(h3, f) });
    } else (u || f) && d.push("translate(" + u + t + f + r);
  }
  function o(c, h3, u, f) {
    c !== h3 ? (c - h3 > 180 ? h3 += 360 : h3 - c > 180 && (c += 360), f.push({ i: u.push(n(u) + "rotate(", null, i) - 2, x: nr(c, h3) })) : h3 && u.push(n(u) + "rotate(" + h3 + i);
  }
  function a(c, h3, u, f) {
    c !== h3 ? f.push({ i: u.push(n(u) + "skewX(", null, i) - 2, x: nr(c, h3) }) : h3 && u.push(n(u) + "skewX(" + h3 + i);
  }
  function l(c, h3, u, f, d, p) {
    if (c !== u || h3 !== f) {
      var m = d.push(n(d) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: nr(c, u) }, { i: m - 2, x: nr(h3, f) });
    } else (u !== 1 || f !== 1) && d.push(n(d) + "scale(" + u + "," + f + ")");
  }
  return function(c, h3) {
    var u = [], f = [];
    return c = e11(c), h3 = e11(h3), s(c.translateX, c.translateY, h3.translateX, h3.translateY, u, f), o(c.rotate, h3.rotate, u, f), a(c.skewX, h3.skewX, u, f), l(c.scaleX, c.scaleY, h3.scaleX, h3.scaleY, u, f), c = h3 = null, function(d) {
      for (var p = -1, m = f.length, y; ++p < m; ) u[(y = f[p]).i] = y.x(d);
      return u.join("");
    };
  };
}
var i2 = Op(e2, "px, ", "px)", "deg)");
var n2 = Op(r2, ", ", ")", ")");
var bi = 0;
var en = 0;
var Hi = 0;
var Dp = 1e3;
var Hs;
var rn;
var js = 0;
var $r = 0;
var va = 0;
var vn = typeof performance == "object" && performance.now ? performance : Date;
var Ip = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e11) {
  setTimeout(e11, 17);
};
function Ql() {
  return $r || (Ip(s2), $r = vn.now() + va);
}
function s2() {
  $r = 0;
}
function Us() {
  this._call = this._time = this._next = null;
}
Us.prototype = Rp.prototype = {
  constructor: Us,
  restart: function(e11, t, r) {
    if (typeof e11 != "function") throw new TypeError("callback is not a function");
    r = (r == null ? Ql() : +r) + (t == null ? 0 : +t), !this._next && rn !== this && (rn ? rn._next = this : Hs = this, rn = this), this._call = e11, this._time = r, el();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, el());
  }
};
function Rp(e11, t, r) {
  var i = new Us();
  return i.restart(e11, t, r), i;
}
function a2() {
  Ql(), ++bi;
  for (var e11 = Hs, t; e11; )
    (t = $r - e11._time) >= 0 && e11._call.call(void 0, t), e11 = e11._next;
  --bi;
}
function Ph() {
  $r = (js = vn.now()) + va, bi = en = 0;
  try {
    a2();
  } finally {
    bi = 0, l2(), $r = 0;
  }
}
function o2() {
  var e11 = vn.now(), t = e11 - js;
  t > Dp && (va -= t, js = e11);
}
function l2() {
  for (var e11, t = Hs, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e11 = t, t = t._next) : (r = t._next, t._next = null, t = e11 ? e11._next = r : Hs = r);
  rn = e11, el(i);
}
function el(e11) {
  if (!bi) {
    en && (en = clearTimeout(en));
    var t = e11 - $r;
    t > 24 ? (e11 < 1 / 0 && (en = setTimeout(Ph, e11 - vn.now() - va)), Hi && (Hi = clearInterval(Hi))) : (Hi || (js = vn.now(), Hi = setInterval(o2, Dp)), bi = 1, Ip(Ph));
  }
}
function Nh(e11, t, r) {
  var i = new Us();
  return t = t == null ? 0 : +t, i.restart((n) => {
    i.stop(), e11(n + t);
  }, t, r), i;
}
var c2 = mp("start", "end", "cancel", "interrupt");
var h2 = [];
var Pp = 0;
var zh = 1;
var rl = 2;
var ys = 3;
var Wh = 4;
var il = 5;
var xs = 6;
function Ca(e11, t, r, i, n, s) {
  var o = e11.__transition;
  if (!o) e11.__transition = {};
  else if (r in o) return;
  u2(e11, r, {
    name: t,
    index: i,
    // For context during callback.
    group: n,
    // For context during callback.
    on: c2,
    tween: h2,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Pp
  });
}
function Jl(e11, t) {
  var r = Ce(e11, t);
  if (r.state > Pp) throw new Error("too late; already scheduled");
  return r;
}
function Fe(e11, t) {
  var r = Ce(e11, t);
  if (r.state > ys) throw new Error("too late; already running");
  return r;
}
function Ce(e11, t) {
  var r = e11.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function u2(e11, t, r) {
  var i = e11.__transition, n;
  i[t] = r, r.timer = Rp(s, 0, r.time);
  function s(c) {
    r.state = zh, r.timer.restart(o, r.delay, r.time), r.delay <= c && o(c - r.delay);
  }
  function o(c) {
    var h3, u, f, d;
    if (r.state !== zh) return l();
    for (h3 in i)
      if (d = i[h3], d.name === r.name) {
        if (d.state === ys) return Nh(o);
        d.state === Wh ? (d.state = xs, d.timer.stop(), d.on.call("interrupt", e11, e11.__data__, d.index, d.group), delete i[h3]) : +h3 < t && (d.state = xs, d.timer.stop(), d.on.call("cancel", e11, e11.__data__, d.index, d.group), delete i[h3]);
      }
    if (Nh(function() {
      r.state === ys && (r.state = Wh, r.timer.restart(a, r.delay, r.time), a(c));
    }), r.state = rl, r.on.call("start", e11, e11.__data__, r.index, r.group), r.state === rl) {
      for (r.state = ys, n = new Array(f = r.tween.length), h3 = 0, u = -1; h3 < f; ++h3)
        (d = r.tween[h3].value.call(e11, e11.__data__, r.index, r.group)) && (n[++u] = d);
      n.length = u + 1;
    }
  }
  function a(c) {
    for (var h3 = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = il, 1), u = -1, f = n.length; ++u < f; )
      n[u].call(e11, h3);
    r.state === il && (r.on.call("end", e11, e11.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = xs, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e11.__transition;
  }
}
function f2(e11, t) {
  var r = e11.__transition, i, n, s = true, o;
  if (r) {
    t = t == null ? null : t + "";
    for (o in r) {
      if ((i = r[o]).name !== t) {
        s = false;
        continue;
      }
      n = i.state > rl && i.state < il, i.state = xs, i.timer.stop(), i.on.call(n ? "interrupt" : "cancel", e11, e11.__data__, i.index, i.group), delete r[o];
    }
    s && delete e11.__transition;
  }
}
function d2(e11) {
  return this.each(function() {
    f2(this, e11);
  });
}
function p2(e11, t) {
  var r, i;
  return function() {
    var n = Fe(this, e11), s = n.tween;
    if (s !== r) {
      i = r = s;
      for (var o = 0, a = i.length; o < a; ++o)
        if (i[o].name === t) {
          i = i.slice(), i.splice(o, 1);
          break;
        }
    }
    n.tween = i;
  };
}
function g2(e11, t, r) {
  var i, n;
  if (typeof r != "function") throw new Error();
  return function() {
    var s = Fe(this, e11), o = s.tween;
    if (o !== i) {
      n = (i = o).slice();
      for (var a = { name: t, value: r }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === t) {
          n[l] = a;
          break;
        }
      l === c && n.push(a);
    }
    s.tween = n;
  };
}
function m2(e11, t) {
  var r = this._id;
  if (e11 += "", arguments.length < 2) {
    for (var i = Ce(this.node(), r).tween, n = 0, s = i.length, o; n < s; ++n)
      if ((o = i[n]).name === e11)
        return o.value;
    return null;
  }
  return this.each((t == null ? p2 : g2)(r, e11, t));
}
function tc(e11, t, r) {
  var i = e11._id;
  return e11.each(function() {
    var n = Fe(this, i);
    (n.value || (n.value = {}))[t] = r.apply(this, arguments);
  }), function(n) {
    return Ce(n, i).value[t];
  };
}
function Np(e11, t) {
  var r;
  return (typeof t == "number" ? nr : t instanceof wn ? Ih : (r = wn(t)) ? (t = r, Ih) : t2)(e11, t);
}
function y2(e11) {
  return function() {
    this.removeAttribute(e11);
  };
}
function x2(e11) {
  return function() {
    this.removeAttributeNS(e11.space, e11.local);
  };
}
function b2(e11, t, r) {
  var i, n = r + "", s;
  return function() {
    var o = this.getAttribute(e11);
    return o === n ? null : o === i ? s : s = t(i = o, r);
  };
}
function w2(e11, t, r) {
  var i, n = r + "", s;
  return function() {
    var o = this.getAttributeNS(e11.space, e11.local);
    return o === n ? null : o === i ? s : s = t(i = o, r);
  };
}
function v2(e11, t, r) {
  var i, n, s;
  return function() {
    var o, a = r(this), l;
    return a == null ? void this.removeAttribute(e11) : (o = this.getAttribute(e11), l = a + "", o === l ? null : o === i && l === n ? s : (n = l, s = t(i = o, a)));
  };
}
function C2(e11, t, r) {
  var i, n, s;
  return function() {
    var o, a = r(this), l;
    return a == null ? void this.removeAttributeNS(e11.space, e11.local) : (o = this.getAttributeNS(e11.space, e11.local), l = a + "", o === l ? null : o === i && l === n ? s : (n = l, s = t(i = o, a)));
  };
}
function k2(e11, t) {
  var r = wa(e11), i = r === "transform" ? n2 : Np;
  return this.attrTween(e11, typeof t == "function" ? (r.local ? C2 : v2)(r, i, tc(this, "attr." + e11, t)) : t == null ? (r.local ? x2 : y2)(r) : (r.local ? w2 : b2)(r, i, t));
}
function _2(e11, t) {
  return function(r) {
    this.setAttribute(e11, t.call(this, r));
  };
}
function S2(e11, t) {
  return function(r) {
    this.setAttributeNS(e11.space, e11.local, t.call(this, r));
  };
}
function T2(e11, t) {
  var r, i;
  function n() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && S2(e11, s)), r;
  }
  return n._value = t, n;
}
function B2(e11, t) {
  var r, i;
  function n() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && _2(e11, s)), r;
  }
  return n._value = t, n;
}
function L2(e11, t) {
  var r = "attr." + e11;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = wa(e11);
  return this.tween(r, (i.local ? T2 : B2)(i, t));
}
function A2(e11, t) {
  return function() {
    Jl(this, e11).delay = +t.apply(this, arguments);
  };
}
function E2(e11, t) {
  return t = +t, function() {
    Jl(this, e11).delay = t;
  };
}
function M2(e11) {
  var t = this._id;
  return arguments.length ? this.each((typeof e11 == "function" ? A2 : E2)(t, e11)) : Ce(this.node(), t).delay;
}
function $2(e11, t) {
  return function() {
    Fe(this, e11).duration = +t.apply(this, arguments);
  };
}
function F2(e11, t) {
  return t = +t, function() {
    Fe(this, e11).duration = t;
  };
}
function O2(e11) {
  var t = this._id;
  return arguments.length ? this.each((typeof e11 == "function" ? $2 : F2)(t, e11)) : Ce(this.node(), t).duration;
}
function D2(e11, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Fe(this, e11).ease = t;
  };
}
function I2(e11) {
  var t = this._id;
  return arguments.length ? this.each(D2(t, e11)) : Ce(this.node(), t).ease;
}
function R2(e11, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Fe(this, e11).ease = r;
  };
}
function P2(e11) {
  if (typeof e11 != "function") throw new Error();
  return this.each(R2(this._id, e11));
}
function N2(e11) {
  typeof e11 != "function" && (e11 = bp(e11));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var s = t[n], o = s.length, a = i[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && e11.call(l, l.__data__, c, s) && a.push(l);
  return new Xe(i, this._parents, this._name, this._id);
}
function z2(e11) {
  if (e11._id !== this._id) throw new Error();
  for (var t = this._groups, r = e11._groups, i = t.length, n = r.length, s = Math.min(i, n), o = new Array(i), a = 0; a < s; ++a)
    for (var l = t[a], c = r[a], h3 = l.length, u = o[a] = new Array(h3), f, d = 0; d < h3; ++d)
      (f = l[d] || c[d]) && (u[d] = f);
  for (; a < i; ++a)
    o[a] = t[a];
  return new Xe(o, this._parents, this._name, this._id);
}
function W2(e11) {
  return (e11 + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function q2(e11, t, r) {
  var i, n, s = W2(t) ? Jl : Fe;
  return function() {
    var o = s(this, e11), a = o.on;
    a !== i && (n = (i = a).copy()).on(t, r), o.on = n;
  };
}
function H2(e11, t) {
  var r = this._id;
  return arguments.length < 2 ? Ce(this.node(), r).on.on(e11) : this.each(q2(r, e11, t));
}
function j2(e11) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e11) return;
    t && t.removeChild(this);
  };
}
function U2() {
  return this.on("end.remove", j2(this._id));
}
function Y2(e11) {
  var t = this._name, r = this._id;
  typeof e11 != "function" && (e11 = Vl(e11));
  for (var i = this._groups, n = i.length, s = new Array(n), o = 0; o < n; ++o)
    for (var a = i[o], l = a.length, c = s[o] = new Array(l), h3, u, f = 0; f < l; ++f)
      (h3 = a[f]) && (u = e11.call(h3, h3.__data__, f, a)) && ("__data__" in h3 && (u.__data__ = h3.__data__), c[f] = u, Ca(c[f], t, r, f, c, Ce(h3, r)));
  return new Xe(s, this._parents, t, r);
}
function G2(e11) {
  var t = this._name, r = this._id;
  typeof e11 != "function" && (e11 = xp(e11));
  for (var i = this._groups, n = i.length, s = [], o = [], a = 0; a < n; ++a)
    for (var l = i[a], c = l.length, h3, u = 0; u < c; ++u)
      if (h3 = l[u]) {
        for (var f = e11.call(h3, h3.__data__, u, l), d, p = Ce(h3, r), m = 0, y = f.length; m < y; ++m)
          (d = f[m]) && Ca(d, t, r, m, f, p);
        s.push(f), o.push(h3);
      }
  return new Xe(s, o, t, r);
}
var V2 = Mn.prototype.constructor;
function X2() {
  return new V2(this._groups, this._parents);
}
function K2(e11, t) {
  var r, i, n;
  return function() {
    var s = xi(this, e11), o = (this.style.removeProperty(e11), xi(this, e11));
    return s === o ? null : s === r && o === i ? n : n = t(r = s, i = o);
  };
}
function zp(e11) {
  return function() {
    this.style.removeProperty(e11);
  };
}
function Z2(e11, t, r) {
  var i, n = r + "", s;
  return function() {
    var o = xi(this, e11);
    return o === n ? null : o === i ? s : s = t(i = o, r);
  };
}
function Q2(e11, t, r) {
  var i, n, s;
  return function() {
    var o = xi(this, e11), a = r(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e11), xi(this, e11))), o === l ? null : o === i && l === n ? s : (n = l, s = t(i = o, a));
  };
}
function J2(e11, t) {
  var r, i, n, s = "style." + t, o = "end." + s, a;
  return function() {
    var l = Fe(this, e11), c = l.on, h3 = l.value[s] == null ? a || (a = zp(t)) : void 0;
    (c !== r || n !== h3) && (i = (r = c).copy()).on(o, n = h3), l.on = i;
  };
}
function tC(e11, t, r) {
  var i = (e11 += "") == "transform" ? i2 : Np;
  return t == null ? this.styleTween(e11, K2(e11, i)).on("end.style." + e11, zp(e11)) : typeof t == "function" ? this.styleTween(e11, Q2(e11, i, tc(this, "style." + e11, t))).each(J2(this._id, e11)) : this.styleTween(e11, Z2(e11, i, t), r).on("end.style." + e11, null);
}
function eC(e11, t, r) {
  return function(i) {
    this.style.setProperty(e11, t.call(this, i), r);
  };
}
function rC(e11, t, r) {
  var i, n;
  function s() {
    var o = t.apply(this, arguments);
    return o !== n && (i = (n = o) && eC(e11, o, r)), i;
  }
  return s._value = t, s;
}
function iC(e11, t, r) {
  var i = "style." + (e11 += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, rC(e11, t, r ?? ""));
}
function nC(e11) {
  return function() {
    this.textContent = e11;
  };
}
function sC(e11) {
  return function() {
    var t = e11(this);
    this.textContent = t ?? "";
  };
}
function aC(e11) {
  return this.tween("text", typeof e11 == "function" ? sC(tc(this, "text", e11)) : nC(e11 == null ? "" : e11 + ""));
}
function oC(e11) {
  return function(t) {
    this.textContent = e11.call(this, t);
  };
}
function lC(e11) {
  var t, r;
  function i() {
    var n = e11.apply(this, arguments);
    return n !== r && (t = (r = n) && oC(n)), t;
  }
  return i._value = e11, i;
}
function cC(e11) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e11 == null) return this.tween(t, null);
  if (typeof e11 != "function") throw new Error();
  return this.tween(t, lC(e11));
}
function hC() {
  for (var e11 = this._name, t = this._id, r = Wp(), i = this._groups, n = i.length, s = 0; s < n; ++s)
    for (var o = i[s], a = o.length, l, c = 0; c < a; ++c)
      if (l = o[c]) {
        var h3 = Ce(l, t);
        Ca(l, e11, r, c, o, {
          time: h3.time + h3.delay + h3.duration,
          delay: 0,
          duration: h3.duration,
          ease: h3.ease
        });
      }
  return new Xe(i, this._parents, e11, r);
}
function uC() {
  var e11, t, r = this, i = r._id, n = r.size();
  return new Promise(function(s, o) {
    var a = { value: o }, l = { value: function() {
      --n === 0 && s();
    } };
    r.each(function() {
      var c = Fe(this, i), h3 = c.on;
      h3 !== e11 && (t = (e11 = h3).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), n === 0 && s();
  });
}
var fC = 0;
function Xe(e11, t, r, i) {
  this._groups = e11, this._parents = t, this._name = r, this._id = i;
}
function Wp() {
  return ++fC;
}
var Ne = Mn.prototype;
Xe.prototype = {
  constructor: Xe,
  select: Y2,
  selectAll: G2,
  selectChild: Ne.selectChild,
  selectChildren: Ne.selectChildren,
  filter: N2,
  merge: z2,
  selection: X2,
  transition: hC,
  call: Ne.call,
  nodes: Ne.nodes,
  node: Ne.node,
  size: Ne.size,
  empty: Ne.empty,
  each: Ne.each,
  on: H2,
  attr: k2,
  attrTween: L2,
  style: tC,
  styleTween: iC,
  text: aC,
  textTween: cC,
  remove: U2,
  tween: m2,
  delay: M2,
  duration: O2,
  ease: I2,
  easeVarying: P2,
  end: uC,
  [Symbol.iterator]: Ne[Symbol.iterator]
};
function dC(e11) {
  return ((e11 *= 2) <= 1 ? e11 * e11 * e11 : (e11 -= 2) * e11 * e11 + 2) / 2;
}
var pC = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: dC
};
function gC(e11, t) {
  for (var r; !(r = e11.__transition) || !(r = r[t]); )
    if (!(e11 = e11.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function mC(e11) {
  var t, r;
  e11 instanceof Xe ? (t = e11._id, e11 = e11._name) : (t = Wp(), (r = pC).time = Ql(), e11 = e11 == null ? null : e11 + "");
  for (var i = this._groups, n = i.length, s = 0; s < n; ++s)
    for (var o = i[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && Ca(l, e11, t, c, o, r || gC(l, t));
  return new Xe(i, this._parents, e11, t);
}
Mn.prototype.interrupt = d2;
Mn.prototype.transition = mC;
var nl = Math.PI;
var sl = 2 * nl;
var xr = 1e-6;
var yC = sl - xr;
function qp(e11) {
  this._ += e11[0];
  for (let t = 1, r = e11.length; t < r; ++t)
    this._ += arguments[t] + e11[t];
}
function xC(e11) {
  let t = Math.floor(e11);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e11}`);
  if (t > 15) return qp;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let n = 1, s = i.length; n < s; ++n)
      this._ += Math.round(arguments[n] * r) / r + i[n];
  };
}
var bC = class {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? qp : xC(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, n) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +n}`;
  }
  bezierCurveTo(t, r, i, n, s, o) {
    this._append`C${+t},${+r},${+i},${+n},${this._x1 = +s},${this._y1 = +o}`;
  }
  arcTo(t, r, i, n, s) {
    if (t = +t, r = +r, i = +i, n = +n, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let o = this._x1, a = this._y1, l = i - t, c = n - r, h3 = o - t, u = a - r, f = h3 * h3 + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > xr) if (!(Math.abs(u * l - c * h3) > xr) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = i - o, p = n - a, m = l * l + c * c, y = d * d + p * p, b = Math.sqrt(m), x = Math.sqrt(f), w = s * Math.tan((nl - Math.acos((m + f - y) / (2 * b * x))) / 2), v = w / x, C = w / b;
      Math.abs(v - 1) > xr && this._append`L${t + v * h3},${r + v * u}`, this._append`A${s},${s},0,0,${+(u * d > h3 * p)},${this._x1 = t + C * l},${this._y1 = r + C * c}`;
    }
  }
  arc(t, r, i, n, s, o) {
    if (t = +t, r = +r, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(n), l = i * Math.sin(n), c = t + a, h3 = r + l, u = 1 ^ o, f = o ? n - s : s - n;
    this._x1 === null ? this._append`M${c},${h3}` : (Math.abs(this._x1 - c) > xr || Math.abs(this._y1 - h3) > xr) && this._append`L${c},${h3}`, i && (f < 0 && (f = f % sl + sl), f > yC ? this._append`A${i},${i},0,1,${u},${t - a},${r - l}A${i},${i},0,1,${u},${this._x1 = c},${this._y1 = h3}` : f > xr && this._append`A${i},${i},0,${+(f >= nl)},${u},${this._x1 = t + i * Math.cos(s)},${this._y1 = r + i * Math.sin(s)}`);
  }
  rect(t, r, i, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+n}h${-i}Z`;
  }
  toString() {
    return this._;
  }
};
function Gr(e11) {
  return function() {
    return e11;
  };
}
var KF = Math.abs;
var ZF = Math.atan2;
var QF = Math.cos;
var JF = Math.max;
var t3 = Math.min;
var e3 = Math.sin;
var r3 = Math.sqrt;
var qh = 1e-12;
var ec = Math.PI;
var Hh = ec / 2;
var i3 = 2 * ec;
function n3(e11) {
  return e11 > 1 ? 0 : e11 < -1 ? ec : Math.acos(e11);
}
function s3(e11) {
  return e11 >= 1 ? Hh : e11 <= -1 ? -Hh : Math.asin(e11);
}
function wC(e11) {
  let t = 3;
  return e11.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e11;
  }, () => new bC(t);
}
function vC(e11) {
  return typeof e11 == "object" && "length" in e11 ? e11 : Array.from(e11);
}
function Hp(e11) {
  this._context = e11;
}
Hp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e11, t);
        break;
    }
  }
};
function Ys(e11) {
  return new Hp(e11);
}
function CC(e11) {
  return e11[0];
}
function kC(e11) {
  return e11[1];
}
function _C(e11, t) {
  var r = Gr(true), i = null, n = Ys, s = null, o = wC(a);
  e11 = typeof e11 == "function" ? e11 : e11 === void 0 ? CC : Gr(e11), t = typeof t == "function" ? t : t === void 0 ? kC : Gr(t);
  function a(l) {
    var c, h3 = (l = vC(l)).length, u, f = false, d;
    for (i == null && (s = n(d = o())), c = 0; c <= h3; ++c)
      !(c < h3 && r(u = l[c], c, l)) === f && ((f = !f) ? s.lineStart() : s.lineEnd()), f && s.point(+e11(u, c, l), +t(u, c, l));
    if (d) return s = null, d + "" || null;
  }
  return a.x = function(l) {
    return arguments.length ? (e11 = typeof l == "function" ? l : Gr(+l), a) : e11;
  }, a.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Gr(+l), a) : t;
  }, a.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Gr(!!l), a) : r;
  }, a.curve = function(l) {
    return arguments.length ? (n = l, i != null && (s = n(i)), a) : n;
  }, a.context = function(l) {
    return arguments.length ? (l == null ? i = s = null : s = n(i = l), a) : i;
  }, a;
}
var jp = class {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
};
function Up(e11) {
  return new jp(e11, true);
}
function Yp(e11) {
  return new jp(e11, false);
}
function cr() {
}
function Gs(e11, t, r) {
  e11._context.bezierCurveTo(
    (2 * e11._x0 + e11._x1) / 3,
    (2 * e11._y0 + e11._y1) / 3,
    (e11._x0 + 2 * e11._x1) / 3,
    (e11._y0 + 2 * e11._y1) / 3,
    (e11._x0 + 4 * e11._x1 + t) / 6,
    (e11._y0 + 4 * e11._y1 + r) / 6
  );
}
function ka(e11) {
  this._context = e11;
}
ka.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Gs(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Gs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e11, this._y0 = this._y1, this._y1 = t;
  }
};
function bs(e11) {
  return new ka(e11);
}
function Gp(e11) {
  this._context = e11;
}
Gp.prototype = {
  areaStart: cr,
  areaEnd: cr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e11, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e11, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e11, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e11) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Gs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e11, this._y0 = this._y1, this._y1 = t;
  }
};
function SC(e11) {
  return new Gp(e11);
}
function Vp(e11) {
  this._context = e11;
}
Vp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e11) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      default:
        Gs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e11, this._y0 = this._y1, this._y1 = t;
  }
};
function TC(e11) {
  return new Vp(e11);
}
function Xp(e11, t) {
  this._basis = new ka(e11), this._beta = t;
}
Xp.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e11 = this._x, t = this._y, r = e11.length - 1;
    if (r > 0)
      for (var i = e11[0], n = t[0], s = e11[r] - i, o = t[r] - n, a = -1, l; ++a <= r; )
        l = a / r, this._basis.point(
          this._beta * e11[a] + (1 - this._beta) * (i + l * s),
          this._beta * t[a] + (1 - this._beta) * (n + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e11, t) {
    this._x.push(+e11), this._y.push(+t);
  }
};
var BC = function e4(t) {
  function r(i) {
    return t === 1 ? new ka(i) : new Xp(i, t);
  }
  return r.beta = function(i) {
    return e4(+i);
  }, r;
}(0.85);
function Vs(e11, t, r) {
  e11._context.bezierCurveTo(
    e11._x1 + e11._k * (e11._x2 - e11._x0),
    e11._y1 + e11._k * (e11._y2 - e11._y0),
    e11._x2 + e11._k * (e11._x1 - t),
    e11._y2 + e11._k * (e11._y1 - r),
    e11._x2,
    e11._y2
  );
}
function rc(e11, t) {
  this._context = e11, this._k = (1 - t) / 6;
}
rc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Vs(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
        break;
      case 1:
        this._point = 2, this._x1 = e11, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        Vs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var Kp = function e5(t) {
  function r(i) {
    return new rc(i, t);
  }
  return r.tension = function(i) {
    return e5(+i);
  }, r;
}(0);
function ic(e11, t) {
  this._context = e11, this._k = (1 - t) / 6;
}
ic.prototype = {
  areaStart: cr,
  areaEnd: cr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e11, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e11, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e11, this._y5 = t;
        break;
      default:
        Vs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var LC = function e6(t) {
  function r(i) {
    return new ic(i, t);
  }
  return r.tension = function(i) {
    return e6(+i);
  }, r;
}(0);
function nc(e11, t) {
  this._context = e11, this._k = (1 - t) / 6;
}
nc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Vs(this, e11, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var AC = function e7(t) {
  function r(i) {
    return new nc(i, t);
  }
  return r.tension = function(i) {
    return e7(+i);
  }, r;
}(0);
function sc(e11, t, r) {
  var i = e11._x1, n = e11._y1, s = e11._x2, o = e11._y2;
  if (e11._l01_a > qh) {
    var a = 2 * e11._l01_2a + 3 * e11._l01_a * e11._l12_a + e11._l12_2a, l = 3 * e11._l01_a * (e11._l01_a + e11._l12_a);
    i = (i * a - e11._x0 * e11._l12_2a + e11._x2 * e11._l01_2a) / l, n = (n * a - e11._y0 * e11._l12_2a + e11._y2 * e11._l01_2a) / l;
  }
  if (e11._l23_a > qh) {
    var c = 2 * e11._l23_2a + 3 * e11._l23_a * e11._l12_a + e11._l12_2a, h3 = 3 * e11._l23_a * (e11._l23_a + e11._l12_a);
    s = (s * c + e11._x1 * e11._l23_2a - t * e11._l12_2a) / h3, o = (o * c + e11._y1 * e11._l23_2a - r * e11._l12_2a) / h3;
  }
  e11._context.bezierCurveTo(i, n, s, o, e11._x2, e11._y2);
}
function Zp(e11, t) {
  this._context = e11, this._alpha = t;
}
Zp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    if (e11 = +e11, t = +t, this._point) {
      var r = this._x2 - e11, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        sc(this, e11, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var Qp = function e8(t) {
  function r(i) {
    return t ? new Zp(i, t) : new rc(i, 0);
  }
  return r.alpha = function(i) {
    return e8(+i);
  }, r;
}(0.5);
function Jp(e11, t) {
  this._context = e11, this._alpha = t;
}
Jp.prototype = {
  areaStart: cr,
  areaEnd: cr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e11, t) {
    if (e11 = +e11, t = +t, this._point) {
      var r = this._x2 - e11, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e11, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e11, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e11, this._y5 = t;
        break;
      default:
        sc(this, e11, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var EC = function e9(t) {
  function r(i) {
    return t ? new Jp(i, t) : new ic(i, 0);
  }
  return r.alpha = function(i) {
    return e9(+i);
  }, r;
}(0.5);
function tg(e11, t) {
  this._context = e11, this._alpha = t;
}
tg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    if (e11 = +e11, t = +t, this._point) {
      var r = this._x2 - e11, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        sc(this, e11, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
var MC = function e10(t) {
  function r(i) {
    return t ? new tg(i, t) : new nc(i, 0);
  }
  return r.alpha = function(i) {
    return e10(+i);
  }, r;
}(0.5);
function eg(e11) {
  this._context = e11;
}
eg.prototype = {
  areaStart: cr,
  areaEnd: cr,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e11, t) {
    e11 = +e11, t = +t, this._point ? this._context.lineTo(e11, t) : (this._point = 1, this._context.moveTo(e11, t));
  }
};
function $C(e11) {
  return new eg(e11);
}
function jh(e11) {
  return e11 < 0 ? -1 : 1;
}
function Uh(e11, t, r) {
  var i = e11._x1 - e11._x0, n = t - e11._x1, s = (e11._y1 - e11._y0) / (i || n < 0 && -0), o = (r - e11._y1) / (n || i < 0 && -0), a = (s * n + o * i) / (i + n);
  return (jh(s) + jh(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(a)) || 0;
}
function Yh(e11, t) {
  var r = e11._x1 - e11._x0;
  return r ? (3 * (e11._y1 - e11._y0) / r - t) / 2 : t;
}
function so(e11, t, r) {
  var i = e11._x0, n = e11._y0, s = e11._x1, o = e11._y1, a = (s - i) / 3;
  e11._context.bezierCurveTo(i + a, n + a * t, s - a, o - a * r, s, o);
}
function Xs(e11) {
  this._context = e11;
}
Xs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        so(this, this._t0, Yh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e11, t) {
    var r = NaN;
    if (e11 = +e11, t = +t, !(e11 === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, so(this, Yh(this, r = Uh(this, e11, t)), r);
          break;
        default:
          so(this, this._t0, r = Uh(this, e11, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e11, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function rg(e11) {
  this._context = new ig(e11);
}
(rg.prototype = Object.create(Xs.prototype)).point = function(e11, t) {
  Xs.prototype.point.call(this, t, e11);
};
function ig(e11) {
  this._context = e11;
}
ig.prototype = {
  moveTo: function(e11, t) {
    this._context.moveTo(t, e11);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e11, t) {
    this._context.lineTo(t, e11);
  },
  bezierCurveTo: function(e11, t, r, i, n, s) {
    this._context.bezierCurveTo(t, e11, i, r, s, n);
  }
};
function ng(e11) {
  return new Xs(e11);
}
function sg(e11) {
  return new rg(e11);
}
function ag(e11) {
  this._context = e11;
}
ag.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e11 = this._x, t = this._y, r = e11.length;
    if (r)
      if (this._line ? this._context.lineTo(e11[0], t[0]) : this._context.moveTo(e11[0], t[0]), r === 2)
        this._context.lineTo(e11[1], t[1]);
      else
        for (var i = Gh(e11), n = Gh(t), s = 0, o = 1; o < r; ++s, ++o)
          this._context.bezierCurveTo(i[0][s], n[0][s], i[1][s], n[1][s], e11[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e11, t) {
    this._x.push(+e11), this._y.push(+t);
  }
};
function Gh(e11) {
  var t, r = e11.length - 1, i, n = new Array(r), s = new Array(r), o = new Array(r);
  for (n[0] = 0, s[0] = 2, o[0] = e11[0] + 2 * e11[1], t = 1; t < r - 1; ++t) n[t] = 1, s[t] = 4, o[t] = 4 * e11[t] + 2 * e11[t + 1];
  for (n[r - 1] = 2, s[r - 1] = 7, o[r - 1] = 8 * e11[r - 1] + e11[r], t = 1; t < r; ++t) i = n[t] / s[t - 1], s[t] -= i, o[t] -= i * o[t - 1];
  for (n[r - 1] = o[r - 1] / s[r - 1], t = r - 2; t >= 0; --t) n[t] = (o[t] - n[t + 1]) / s[t];
  for (s[r - 1] = (e11[r] + n[r - 1]) / 2, t = 0; t < r - 1; ++t) s[t] = 2 * e11[t + 1] - n[t + 1];
  return [n, s];
}
function og(e11) {
  return new ag(e11);
}
function _a(e11, t) {
  this._context = e11, this._t = t;
}
_a.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e11, t) {
    switch (e11 = +e11, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e11, t) : this._context.moveTo(e11, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e11, t);
        else {
          var r = this._x * (1 - this._t) + e11 * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e11, this._y = t;
  }
};
function lg(e11) {
  return new _a(e11, 0.5);
}
function cg(e11) {
  return new _a(e11, 0);
}
function hg(e11) {
  return new _a(e11, 1);
}
function nn(e11, t, r) {
  this.k = e11, this.x = t, this.y = r;
}
nn.prototype = {
  constructor: nn,
  scale: function(e11) {
    return e11 === 1 ? this : new nn(this.k * e11, this.x, this.y);
  },
  translate: function(e11, t) {
    return e11 === 0 & t === 0 ? this : new nn(this.k, this.x + this.k * e11, this.y + this.k * t);
  },
  apply: function(e11) {
    return [e11[0] * this.k + this.x, e11[1] * this.k + this.y];
  },
  applyX: function(e11) {
    return e11 * this.k + this.x;
  },
  applyY: function(e11) {
    return e11 * this.k + this.y;
  },
  invert: function(e11) {
    return [(e11[0] - this.x) / this.k, (e11[1] - this.y) / this.k];
  },
  invertX: function(e11) {
    return (e11 - this.x) / this.k;
  },
  invertY: function(e11) {
    return (e11 - this.y) / this.k;
  },
  rescaleX: function(e11) {
    return e11.copy().domain(e11.range().map(this.invertX, this).map(e11.invert, e11));
  },
  rescaleY: function(e11) {
    return e11.copy().domain(e11.range().map(this.invertY, this).map(e11.invert, e11));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
nn.prototype;
var ug = typeof global == "object" && global && global.Object === Object && global;
var FC = typeof self == "object" && self && self.Object === Object && self;
var Oe = ug || FC || Function("return this")();
var Ks = Oe.Symbol;
var fg = Object.prototype;
var OC = fg.hasOwnProperty;
var DC = fg.toString;
var ji = Ks ? Ks.toStringTag : void 0;
function IC(e11) {
  var t = OC.call(e11, ji), r = e11[ji];
  try {
    e11[ji] = void 0;
    var i = true;
  } catch {
  }
  var n = DC.call(e11);
  return i && (t ? e11[ji] = r : delete e11[ji]), n;
}
var RC = Object.prototype;
var PC = RC.toString;
function NC(e11) {
  return PC.call(e11);
}
var zC = "[object Null]";
var WC = "[object Undefined]";
var Vh = Ks ? Ks.toStringTag : void 0;
function Li(e11) {
  return e11 == null ? e11 === void 0 ? WC : zC : Vh && Vh in Object(e11) ? IC(e11) : NC(e11);
}
function Ir(e11) {
  var t = typeof e11;
  return e11 != null && (t == "object" || t == "function");
}
var qC = "[object AsyncFunction]";
var HC = "[object Function]";
var jC = "[object GeneratorFunction]";
var UC = "[object Proxy]";
function ac(e11) {
  if (!Ir(e11))
    return false;
  var t = Li(e11);
  return t == HC || t == jC || t == qC || t == UC;
}
var ao = Oe["__core-js_shared__"];
var Xh = function() {
  var e11 = /[^.]+$/.exec(ao && ao.keys && ao.keys.IE_PROTO || "");
  return e11 ? "Symbol(src)_1." + e11 : "";
}();
function YC(e11) {
  return !!Xh && Xh in e11;
}
var GC = Function.prototype;
var VC = GC.toString;
function Rr(e11) {
  if (e11 != null) {
    try {
      return VC.call(e11);
    } catch {
    }
    try {
      return e11 + "";
    } catch {
    }
  }
  return "";
}
var XC = /[\\^$.*+?()[\]{}|]/g;
var KC = /^\[object .+?Constructor\]$/;
var ZC = Function.prototype;
var QC = Object.prototype;
var JC = ZC.toString;
var tk = QC.hasOwnProperty;
var ek = RegExp(
  "^" + JC.call(tk).replace(XC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rk(e11) {
  if (!Ir(e11) || YC(e11))
    return false;
  var t = ac(e11) ? ek : KC;
  return t.test(Rr(e11));
}
function ik(e11, t) {
  return e11 == null ? void 0 : e11[t];
}
function Pr(e11, t) {
  var r = ik(e11, t);
  return rk(r) ? r : void 0;
}
var Cn = Pr(Object, "create");
function nk() {
  this.__data__ = Cn ? Cn(null) : {}, this.size = 0;
}
function sk(e11) {
  var t = this.has(e11) && delete this.__data__[e11];
  return this.size -= t ? 1 : 0, t;
}
var ak = "__lodash_hash_undefined__";
var ok = Object.prototype;
var lk = ok.hasOwnProperty;
function ck(e11) {
  var t = this.__data__;
  if (Cn) {
    var r = t[e11];
    return r === ak ? void 0 : r;
  }
  return lk.call(t, e11) ? t[e11] : void 0;
}
var hk = Object.prototype;
var uk = hk.hasOwnProperty;
function fk(e11) {
  var t = this.__data__;
  return Cn ? t[e11] !== void 0 : uk.call(t, e11);
}
var dk = "__lodash_hash_undefined__";
function pk(e11, t) {
  var r = this.__data__;
  return this.size += this.has(e11) ? 0 : 1, r[e11] = Cn && t === void 0 ? dk : t, this;
}
function Fr(e11) {
  var t = -1, r = e11 == null ? 0 : e11.length;
  for (this.clear(); ++t < r; ) {
    var i = e11[t];
    this.set(i[0], i[1]);
  }
}
Fr.prototype.clear = nk;
Fr.prototype.delete = sk;
Fr.prototype.get = ck;
Fr.prototype.has = fk;
Fr.prototype.set = pk;
function gk() {
  this.__data__ = [], this.size = 0;
}
function Sa(e11, t) {
  return e11 === t || e11 !== e11 && t !== t;
}
function Ta(e11, t) {
  for (var r = e11.length; r--; )
    if (Sa(e11[r][0], t))
      return r;
  return -1;
}
var mk = Array.prototype;
var yk = mk.splice;
function xk(e11) {
  var t = this.__data__, r = Ta(t, e11);
  if (r < 0)
    return false;
  var i = t.length - 1;
  return r == i ? t.pop() : yk.call(t, r, 1), --this.size, true;
}
function bk(e11) {
  var t = this.__data__, r = Ta(t, e11);
  return r < 0 ? void 0 : t[r][1];
}
function wk(e11) {
  return Ta(this.__data__, e11) > -1;
}
function vk(e11, t) {
  var r = this.__data__, i = Ta(r, e11);
  return i < 0 ? (++this.size, r.push([e11, t])) : r[i][1] = t, this;
}
function Qe(e11) {
  var t = -1, r = e11 == null ? 0 : e11.length;
  for (this.clear(); ++t < r; ) {
    var i = e11[t];
    this.set(i[0], i[1]);
  }
}
Qe.prototype.clear = gk;
Qe.prototype.delete = xk;
Qe.prototype.get = bk;
Qe.prototype.has = wk;
Qe.prototype.set = vk;
var kn = Pr(Oe, "Map");
function Ck() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (kn || Qe)(),
    string: new Fr()
  };
}
function kk(e11) {
  var t = typeof e11;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e11 !== "__proto__" : e11 === null;
}
function Ba(e11, t) {
  var r = e11.__data__;
  return kk(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function _k(e11) {
  var t = Ba(this, e11).delete(e11);
  return this.size -= t ? 1 : 0, t;
}
function Sk(e11) {
  return Ba(this, e11).get(e11);
}
function Tk(e11) {
  return Ba(this, e11).has(e11);
}
function Bk(e11, t) {
  var r = Ba(this, e11), i = r.size;
  return r.set(e11, t), this.size += r.size == i ? 0 : 1, this;
}
function fr(e11) {
  var t = -1, r = e11 == null ? 0 : e11.length;
  for (this.clear(); ++t < r; ) {
    var i = e11[t];
    this.set(i[0], i[1]);
  }
}
fr.prototype.clear = Ck;
fr.prototype.delete = _k;
fr.prototype.get = Sk;
fr.prototype.has = Tk;
fr.prototype.set = Bk;
var Lk = "Expected a function";
function Fn(e11, t) {
  if (typeof e11 != "function" || t != null && typeof t != "function")
    throw new TypeError(Lk);
  var r = function() {
    var i = arguments, n = t ? t.apply(this, i) : i[0], s = r.cache;
    if (s.has(n))
      return s.get(n);
    var o = e11.apply(this, i);
    return r.cache = s.set(n, o) || s, o;
  };
  return r.cache = new (Fn.Cache || fr)(), r;
}
Fn.Cache = fr;
function Ak() {
  this.__data__ = new Qe(), this.size = 0;
}
function Ek(e11) {
  var t = this.__data__, r = t.delete(e11);
  return this.size = t.size, r;
}
function Mk(e11) {
  return this.__data__.get(e11);
}
function $k(e11) {
  return this.__data__.has(e11);
}
var Fk = 200;
function Ok(e11, t) {
  var r = this.__data__;
  if (r instanceof Qe) {
    var i = r.__data__;
    if (!kn || i.length < Fk - 1)
      return i.push([e11, t]), this.size = ++r.size, this;
    r = this.__data__ = new fr(i);
  }
  return r.set(e11, t), this.size = r.size, this;
}
function Ai(e11) {
  var t = this.__data__ = new Qe(e11);
  this.size = t.size;
}
Ai.prototype.clear = Ak;
Ai.prototype.delete = Ek;
Ai.prototype.get = Mk;
Ai.prototype.has = $k;
Ai.prototype.set = Ok;
var Zs = function() {
  try {
    var e11 = Pr(Object, "defineProperty");
    return e11({}, "", {}), e11;
  } catch {
  }
}();
function oc(e11, t, r) {
  t == "__proto__" && Zs ? Zs(e11, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e11[t] = r;
}
function al(e11, t, r) {
  (r !== void 0 && !Sa(e11[t], r) || r === void 0 && !(t in e11)) && oc(e11, t, r);
}
function Dk(e11) {
  return function(t, r, i) {
    for (var n = -1, s = Object(t), o = i(t), a = o.length; a--; ) {
      var l = o[++n];
      if (r(s[l], l, s) === false)
        break;
    }
    return t;
  };
}
var Ik = Dk();
var dg = typeof exports == "object" && exports && !exports.nodeType && exports;
var Kh = dg && typeof module == "object" && module && !module.nodeType && module;
var Rk = Kh && Kh.exports === dg;
var Zh = Rk ? Oe.Buffer : void 0;
var Qh = Zh ? Zh.allocUnsafe : void 0;
function Pk(e11, t) {
  if (t)
    return e11.slice();
  var r = e11.length, i = Qh ? Qh(r) : new e11.constructor(r);
  return e11.copy(i), i;
}
var Jh = Oe.Uint8Array;
function Nk(e11) {
  var t = new e11.constructor(e11.byteLength);
  return new Jh(t).set(new Jh(e11)), t;
}
function zk(e11, t) {
  var r = t ? Nk(e11.buffer) : e11.buffer;
  return new e11.constructor(r, e11.byteOffset, e11.length);
}
function Wk(e11, t) {
  var r = -1, i = e11.length;
  for (t || (t = Array(i)); ++r < i; )
    t[r] = e11[r];
  return t;
}
var tu = Object.create;
var qk = /* @__PURE__ */ function() {
  function e11() {
  }
  return function(t) {
    if (!Ir(t))
      return {};
    if (tu)
      return tu(t);
    e11.prototype = t;
    var r = new e11();
    return e11.prototype = void 0, r;
  };
}();
function pg(e11, t) {
  return function(r) {
    return e11(t(r));
  };
}
var gg = pg(Object.getPrototypeOf, Object);
var Hk = Object.prototype;
function La(e11) {
  var t = e11 && e11.constructor, r = typeof t == "function" && t.prototype || Hk;
  return e11 === r;
}
function jk(e11) {
  return typeof e11.constructor == "function" && !La(e11) ? qk(gg(e11)) : {};
}
function On(e11) {
  return e11 != null && typeof e11 == "object";
}
var Uk = "[object Arguments]";
function eu(e11) {
  return On(e11) && Li(e11) == Uk;
}
var mg = Object.prototype;
var Yk = mg.hasOwnProperty;
var Gk = mg.propertyIsEnumerable;
var Qs = eu(/* @__PURE__ */ function() {
  return arguments;
}()) ? eu : function(e11) {
  return On(e11) && Yk.call(e11, "callee") && !Gk.call(e11, "callee");
};
var Js = Array.isArray;
var Vk = 9007199254740991;
function yg(e11) {
  return typeof e11 == "number" && e11 > -1 && e11 % 1 == 0 && e11 <= Vk;
}
function Aa(e11) {
  return e11 != null && yg(e11.length) && !ac(e11);
}
function Xk(e11) {
  return On(e11) && Aa(e11);
}
function Kk() {
  return false;
}
var xg = typeof exports == "object" && exports && !exports.nodeType && exports;
var ru = xg && typeof module == "object" && module && !module.nodeType && module;
var Zk = ru && ru.exports === xg;
var iu = Zk ? Oe.Buffer : void 0;
var Qk = iu ? iu.isBuffer : void 0;
var lc = Qk || Kk;
var Jk = "[object Object]";
var t_ = Function.prototype;
var e_ = Object.prototype;
var bg = t_.toString;
var r_ = e_.hasOwnProperty;
var i_ = bg.call(Object);
function n_(e11) {
  if (!On(e11) || Li(e11) != Jk)
    return false;
  var t = gg(e11);
  if (t === null)
    return true;
  var r = r_.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && bg.call(r) == i_;
}
var s_ = "[object Arguments]";
var a_ = "[object Array]";
var o_ = "[object Boolean]";
var l_ = "[object Date]";
var c_ = "[object Error]";
var h_ = "[object Function]";
var u_ = "[object Map]";
var f_ = "[object Number]";
var d_ = "[object Object]";
var p_ = "[object RegExp]";
var g_ = "[object Set]";
var m_ = "[object String]";
var y_ = "[object WeakMap]";
var x_ = "[object ArrayBuffer]";
var b_ = "[object DataView]";
var w_ = "[object Float32Array]";
var v_ = "[object Float64Array]";
var C_ = "[object Int8Array]";
var k_ = "[object Int16Array]";
var __ = "[object Int32Array]";
var S_ = "[object Uint8Array]";
var T_ = "[object Uint8ClampedArray]";
var B_ = "[object Uint16Array]";
var L_ = "[object Uint32Array]";
var kt = {};
kt[w_] = kt[v_] = kt[C_] = kt[k_] = kt[__] = kt[S_] = kt[T_] = kt[B_] = kt[L_] = true;
kt[s_] = kt[a_] = kt[x_] = kt[o_] = kt[b_] = kt[l_] = kt[c_] = kt[h_] = kt[u_] = kt[f_] = kt[d_] = kt[p_] = kt[g_] = kt[m_] = kt[y_] = false;
function A_(e11) {
  return On(e11) && yg(e11.length) && !!kt[Li(e11)];
}
function E_(e11) {
  return function(t) {
    return e11(t);
  };
}
var wg = typeof exports == "object" && exports && !exports.nodeType && exports;
var fn = wg && typeof module == "object" && module && !module.nodeType && module;
var M_ = fn && fn.exports === wg;
var oo = M_ && ug.process;
var nu = function() {
  try {
    var e11 = fn && fn.require && fn.require("util").types;
    return e11 || oo && oo.binding && oo.binding("util");
  } catch {
  }
}();
var su = nu && nu.isTypedArray;
var cc = su ? E_(su) : A_;
function ol(e11, t) {
  if (!(t === "constructor" && typeof e11[t] == "function") && t != "__proto__")
    return e11[t];
}
var $_ = Object.prototype;
var F_ = $_.hasOwnProperty;
function O_(e11, t, r) {
  var i = e11[t];
  (!(F_.call(e11, t) && Sa(i, r)) || r === void 0 && !(t in e11)) && oc(e11, t, r);
}
function D_(e11, t, r, i) {
  var n = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var a = t[s], l = void 0;
    l === void 0 && (l = e11[a]), n ? oc(r, a, l) : O_(r, a, l);
  }
  return r;
}
function I_(e11, t) {
  for (var r = -1, i = Array(e11); ++r < e11; )
    i[r] = t(r);
  return i;
}
var R_ = 9007199254740991;
var P_ = /^(?:0|[1-9]\d*)$/;
function vg(e11, t) {
  var r = typeof e11;
  return t = t ?? R_, !!t && (r == "number" || r != "symbol" && P_.test(e11)) && e11 > -1 && e11 % 1 == 0 && e11 < t;
}
var N_ = Object.prototype;
var z_ = N_.hasOwnProperty;
function W_(e11, t) {
  var r = Js(e11), i = !r && Qs(e11), n = !r && !i && lc(e11), s = !r && !i && !n && cc(e11), o = r || i || n || s, a = o ? I_(e11.length, String) : [], l = a.length;
  for (var c in e11)
    (t || z_.call(e11, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vg(c, l))) && a.push(c);
  return a;
}
function q_(e11) {
  var t = [];
  if (e11 != null)
    for (var r in Object(e11))
      t.push(r);
  return t;
}
var H_ = Object.prototype;
var j_ = H_.hasOwnProperty;
function U_(e11) {
  if (!Ir(e11))
    return q_(e11);
  var t = La(e11), r = [];
  for (var i in e11)
    i == "constructor" && (t || !j_.call(e11, i)) || r.push(i);
  return r;
}
function Cg(e11) {
  return Aa(e11) ? W_(e11, true) : U_(e11);
}
function Y_(e11) {
  return D_(e11, Cg(e11));
}
function G_(e11, t, r, i, n, s, o) {
  var a = ol(e11, r), l = ol(t, r), c = o.get(l);
  if (c) {
    al(e11, r, c);
    return;
  }
  var h3 = s ? s(a, l, r + "", e11, t, o) : void 0, u = h3 === void 0;
  if (u) {
    var f = Js(l), d = !f && lc(l), p = !f && !d && cc(l);
    h3 = l, f || d || p ? Js(a) ? h3 = a : Xk(a) ? h3 = Wk(a) : d ? (u = false, h3 = Pk(l, true)) : p ? (u = false, h3 = zk(l, true)) : h3 = [] : n_(l) || Qs(l) ? (h3 = a, Qs(a) ? h3 = Y_(a) : (!Ir(a) || ac(a)) && (h3 = jk(l))) : u = false;
  }
  u && (o.set(l, h3), n(h3, l, i, s, o), o.delete(l)), al(e11, r, h3);
}
function kg(e11, t, r, i, n) {
  e11 !== t && Ik(t, function(s, o) {
    if (n || (n = new Ai()), Ir(s))
      G_(e11, t, o, r, kg, i, n);
    else {
      var a = i ? i(ol(e11, o), s, o + "", e11, t, n) : void 0;
      a === void 0 && (a = s), al(e11, o, a);
    }
  }, Cg);
}
function _g(e11) {
  return e11;
}
function V_(e11, t, r) {
  switch (r.length) {
    case 0:
      return e11.call(t);
    case 1:
      return e11.call(t, r[0]);
    case 2:
      return e11.call(t, r[0], r[1]);
    case 3:
      return e11.call(t, r[0], r[1], r[2]);
  }
  return e11.apply(t, r);
}
var au = Math.max;
function X_(e11, t, r) {
  return t = au(t === void 0 ? e11.length - 1 : t, 0), function() {
    for (var i = arguments, n = -1, s = au(i.length - t, 0), o = Array(s); ++n < s; )
      o[n] = i[t + n];
    n = -1;
    for (var a = Array(t + 1); ++n < t; )
      a[n] = i[n];
    return a[t] = r(o), V_(e11, this, a);
  };
}
function K_(e11) {
  return function() {
    return e11;
  };
}
var Z_ = Zs ? function(e11, t) {
  return Zs(e11, "toString", {
    configurable: true,
    enumerable: false,
    value: K_(t),
    writable: true
  });
} : _g;
var Q_ = 800;
var J_ = 16;
var tS = Date.now;
function eS(e11) {
  var t = 0, r = 0;
  return function() {
    var i = tS(), n = J_ - (i - r);
    if (r = i, n > 0) {
      if (++t >= Q_)
        return arguments[0];
    } else
      t = 0;
    return e11.apply(void 0, arguments);
  };
}
var rS = eS(Z_);
function iS(e11, t) {
  return rS(X_(e11, t, _g), e11 + "");
}
function nS(e11, t, r) {
  if (!Ir(r))
    return false;
  var i = typeof t;
  return (i == "number" ? Aa(r) && vg(t, r.length) : i == "string" && t in r) ? Sa(r[t], e11) : false;
}
function sS(e11) {
  return iS(function(t, r) {
    var i = -1, n = r.length, s = n > 1 ? r[n - 1] : void 0, o = n > 2 ? r[2] : void 0;
    for (s = e11.length > 3 && typeof s == "function" ? (n--, s) : void 0, o && nS(r[0], r[1], o) && (s = n < 3 ? void 0 : s, n = 1), t = Object(t); ++i < n; ) {
      var a = r[i];
      a && e11(t, a, i, s);
    }
    return t;
  });
}
var aS = sS(function(e11, t, r) {
  kg(e11, t, r);
});
var oS = "​";
var lS = {
  curveBasis: bs,
  curveBasisClosed: SC,
  curveBasisOpen: TC,
  curveBumpX: Up,
  curveBumpY: Yp,
  curveBundle: BC,
  curveCardinalClosed: LC,
  curveCardinalOpen: AC,
  curveCardinal: Kp,
  curveCatmullRomClosed: EC,
  curveCatmullRomOpen: MC,
  curveCatmullRom: Qp,
  curveLinear: Ys,
  curveLinearClosed: $C,
  curveMonotoneX: ng,
  curveMonotoneY: sg,
  curveNatural: og,
  curveStep: lg,
  curveStepAfter: hg,
  curveStepBefore: cg
};
var cS = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var hS = g(function(e11, t) {
  const r = Sg(e11, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const o = r.map((a) => a.args);
    Es(o), i = zt(i, [...o]);
  } else
    i = r.args;
  if (!i)
    return;
  let n = Ol(e11, t);
  const s = "config";
  return i[s] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), i[n] = i[s], delete i[s]), i;
}, "detectInit");
var Sg = g(function(e11, t = null) {
  var _a3, _b2;
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${cS.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e11 = e11.trim().replace(r, "").replace(/'/gm, '"'), N.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e11}`
    );
    let i;
    const n = [];
    for (; (i = hn.exec(e11)) !== null; )
      if (i.index === hn.lastIndex && hn.lastIndex++, i && !t || t && ((_a3 = i[1]) == null ? void 0 : _a3.match(t)) || t && ((_b2 = i[2]) == null ? void 0 : _b2.match(t))) {
        const s = i[1] ? i[1] : i[2], o = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        n.push({ type: s, args: o });
      }
    return n.length === 0 ? { type: e11, args: null } : n.length === 1 ? n[0] : n;
  } catch (r) {
    return N.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e11}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective");
var uS = g(function(e11) {
  return e11.replace(hn, "");
}, "removeDirectives");
var fS = g(function(e11, t) {
  for (const [r, i] of t.entries())
    if (i.match(e11))
      return r;
  return -1;
}, "isSubstringInArray");
function hc(e11, t) {
  if (!e11)
    return t;
  const r = `curve${e11.charAt(0).toUpperCase() + e11.slice(1)}`;
  return lS[r] ?? t;
}
g(hc, "interpolateToCurve");
function Tg(e11, t) {
  const r = e11.trim();
  if (r)
    return t.securityLevel !== "loose" ? rw.sanitizeUrl(r) : r;
}
g(Tg, "formatUrl");
var dS = g((e11, ...t) => {
  const r = e11.split("."), i = r.length - 1, n = r[i];
  let s = window;
  for (let o = 0; o < i; o++)
    if (s = s[r[o]], !s) {
      N.error(`Function name: ${e11} not found in window`);
      return;
    }
  s[n](...t);
}, "runFunc");
function uc(e11, t) {
  return !e11 || !t ? 0 : Math.sqrt(Math.pow(t.x - e11.x, 2) + Math.pow(t.y - e11.y, 2));
}
g(uc, "distance");
function Bg(e11) {
  let t, r = 0;
  e11.forEach((n) => {
    r += uc(n, t), t = n;
  });
  const i = r / 2;
  return fc(e11, i);
}
g(Bg, "traverseEdge");
function Lg(e11) {
  return e11.length === 1 ? e11[0] : Bg(e11);
}
g(Lg, "calcLabelPosition");
var ou = g((e11, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e11 * r) / r;
}, "roundNumber");
var fc = g((e11, t) => {
  let r, i = t;
  for (const n of e11) {
    if (r) {
      const s = uc(n, r);
      if (s === 0)
        return r;
      if (s < i)
        i -= s;
      else {
        const o = i / s;
        if (o <= 0)
          return r;
        if (o >= 1)
          return { x: n.x, y: n.y };
        if (o > 0 && o < 1)
          return {
            x: ou((1 - o) * r.x + o * n.x, 5),
            y: ou((1 - o) * r.y + o * n.y, 5)
          };
      }
    }
    r = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint");
var pS = g((e11, t, r) => {
  N.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const n = fc(t, 25), s = e11 ? 10 : 5, o = Math.atan2(t[0].y - n.y, t[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(o) * s + (t[0].x + n.x) / 2, a.y = -Math.cos(o) * s + (t[0].y + n.y) / 2, a;
}, "calcCardinalityPosition");
function Ag(e11, t, r) {
  const i = structuredClone(r);
  N.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const n = 25 + e11, s = fc(i, n), o = 10 + e11 * 0.5, a = Math.atan2(i[0].y - s.y, i[0].x - s.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(a + Math.PI) * o + (i[0].x + s.x) / 2, l.y = -Math.cos(a + Math.PI) * o + (i[0].y + s.y) / 2) : t === "end_right" ? (l.x = Math.sin(a - Math.PI) * o + (i[0].x + s.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * o + (i[0].y + s.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(a) * o + (i[0].x + s.x) / 2 - 5, l.y = -Math.cos(a) * o + (i[0].y + s.y) / 2 - 5) : (l.x = Math.sin(a) * o + (i[0].x + s.x) / 2, l.y = -Math.cos(a) * o + (i[0].y + s.y) / 2), l;
}
g(Ag, "calcTerminalLabelPosition");
function Eg(e11) {
  let t = "", r = "";
  for (const i of e11)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
g(Eg, "getStylesFromArray");
var lu = 0;
var gS = g(() => (lu++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + lu), "generateId");
function Mg(e11) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let n = 0; n < e11; n++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
g(Mg, "makeRandomHex");
var mS = g((e11) => Mg(e11.length), "random");
var yS = g(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj");
var xS = g(function(e11, t) {
  const r = t.text.replace(Ti.lineBreakRegex, " "), [, i] = Ea(t.fontSize), n = e11.append("text");
  n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", i), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
  const s = n.append("tspan");
  return s.attr("x", t.x + t.textMargin * 2), s.attr("fill", t.fill), s.text(r), n;
}, "drawSimpleText");
var bS = Fn(
  (e11, t, r) => {
    if (!e11 || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Ti.lineBreakRegex.test(e11)))
      return e11;
    const i = e11.split(" ").filter(Boolean), n = [];
    let s = "";
    return i.forEach((o, a) => {
      const l = Ke(`${o} `, r), c = Ke(s, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: d } = wS(o, t, "-", r);
        n.push(s, ...f), s = d;
      } else c + l >= t ? (n.push(s), s = o) : s = [s, o].filter(Boolean).join(" ");
      a + 1 === i.length && n.push(s);
    }), n.filter((o) => o !== "").join(r.joinWith);
  },
  (e11, t, r) => `${e11}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
);
var wS = Fn(
  (e11, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const n = [...e11], s = [];
    let o = "";
    return n.forEach((a, l) => {
      const c = `${o}${a}`;
      if (Ke(c, i) >= t) {
        const u = l + 1, f = n.length === u, d = `${c}${r}`;
        s.push(f ? c : d), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: s, remainingWord: o };
  },
  (e11, t, r = "-", i) => `${e11}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function $g(e11, t) {
  return dc(e11, t).height;
}
g($g, "calculateTextHeight");
function Ke(e11, t) {
  return dc(e11, t).width;
}
g(Ke, "calculateTextWidth");
var dc = Fn(
  (e11, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = t;
    if (!e11)
      return { width: 0, height: 0 };
    const [, s] = Ea(r), o = ["sans-serif", i], a = e11.split(Ti.lineBreakRegex), l = [], c = dt("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h3 = c.append("svg");
    for (const f of o) {
      let d = 0;
      const p = { width: 0, height: 0, lineHeight: 0 };
      for (const m of a) {
        const y = yS();
        y.text = m || oS;
        const b = xS(h3, y).style("font-size", s).style("font-weight", n).style("font-family", f), x = (b._groups || b)[0][0].getBBox();
        if (x.width === 0 && x.height === 0)
          throw new Error("svg element not in render tree");
        p.width = Math.round(Math.max(p.width, x.width)), d = Math.round(x.height), p.height += d, p.lineHeight = Math.round(Math.max(p.lineHeight, d));
      }
      l.push(p);
    }
    h3.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e11, t) => `${e11}${t.fontSize}${t.fontWeight}${t.fontFamily}`
);
var hi;
var vS = (hi = class {
  constructor(t = false, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, g(hi, "InitIDGenerator"), hi);
var ts;
var CS = g(function(e11) {
  return ts = ts || document.createElement("div"), e11 = escape(e11).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), ts.innerHTML = e11, unescape(ts.textContent);
}, "entityDecode");
function pc(e11) {
  return "str" in e11;
}
g(pc, "isDetailedError");
var kS = g((e11, t, r, i) => {
  var _a3;
  if (!i)
    return;
  const n = (_a3 = e11.node()) == null ? void 0 : _a3.getBBox();
  n && e11.append("text").text(i).attr("text-anchor", "middle").attr("x", n.x + n.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle");
var Ea = g((e11) => {
  if (typeof e11 == "number")
    return [e11, e11 + "px"];
  const t = parseInt(e11 ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e11 === String(t) ? [t, e11 + "px"] : [t, e11];
}, "parseFontSize");
function gc(e11, t) {
  return aS({}, e11, t);
}
g(gc, "cleanAndMerge");
var Ae = {
  assignWithDepth: zt,
  wrapLabel: bS,
  calculateTextHeight: $g,
  calculateTextWidth: Ke,
  calculateTextDimensions: dc,
  cleanAndMerge: gc,
  detectInit: hS,
  detectDirective: Sg,
  isSubstringInArray: fS,
  interpolateToCurve: hc,
  calcLabelPosition: Lg,
  calcCardinalityPosition: pS,
  calcTerminalLabelPosition: Ag,
  formatUrl: Tg,
  getStylesFromArray: Eg,
  generateId: gS,
  random: mS,
  runFunc: dS,
  entityDecode: CS,
  insertTitle: kS,
  parseFontSize: Ea,
  InitIDGenerator: vS
};
var _S = g(function(e11) {
  let t = e11;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities");
var Nr = g(function(e11) {
  return e11.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var a3 = g((e11, t, {
  counter: r = 0,
  prefix: i,
  suffix: n
}, s) => s || `${i ? `${i}_` : ""}${e11}_${t}_${r}${n ? `_${n}` : ""}`, "getEdgeId");
function Zt(e11) {
  return e11 ?? null;
}
g(Zt, "handleUndefinedAttr");
var SS = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var ta = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var Fg = Object.freeze({
  ...SS,
  ...ta
});
var TS = Object.freeze({
  ...Fg,
  body: "",
  hidden: false
});
var BS = Object.freeze({
  width: null,
  height: null
});
var LS = Object.freeze({
  // Dimensions
  ...BS,
  // Transformations
  ...ta
});
var AS = (e11, t, r, i = "") => {
  const n = e11.split(":");
  if (e11.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const a = n.pop(), l = n.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: a
    };
    return lo(c) ? c : null;
  }
  const s = n[0], o = s.split("-");
  if (o.length > 1) {
    const a = {
      provider: i,
      prefix: o.shift(),
      name: o.join("-")
    };
    return lo(a) ? a : null;
  }
  if (r && i === "") {
    const a = {
      provider: i,
      prefix: "",
      name: s
    };
    return lo(a, r) ? a : null;
  }
  return null;
};
var lo = (e11, t) => e11 ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e11.prefix === "" || e11.prefix) && e11.name) : false;
function ES(e11, t) {
  const r = {};
  !e11.hFlip != !t.hFlip && (r.hFlip = true), !e11.vFlip != !t.vFlip && (r.vFlip = true);
  const i = ((e11.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function cu(e11, t) {
  const r = ES(e11, t);
  for (const i in TS)
    i in ta ? i in e11 && !(i in r) && (r[i] = ta[i]) : i in t ? r[i] = t[i] : i in e11 && (r[i] = e11[i]);
  return r;
}
function MS(e11, t) {
  const r = e11.icons, i = e11.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function s(o) {
    if (r[o])
      return n[o] = [];
    if (!(o in n)) {
      n[o] = null;
      const a = i[o] && i[o].parent, l = a && s(a);
      l && (n[o] = [a].concat(l));
    }
    return n[o];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(s), n;
}
function hu(e11, t, r) {
  const i = e11.icons, n = e11.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function o(a) {
    s = cu(
      i[a] || n[a],
      s
    );
  }
  return o(t), r.forEach(o), cu(e11, s);
}
function $S(e11, t) {
  if (e11.icons[t])
    return hu(e11, t, []);
  const r = MS(e11, [t])[t];
  return r ? hu(e11, t, r) : null;
}
var FS = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var OS = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function uu(e11, t, r) {
  if (t === 1)
    return e11;
  if (r = r || 100, typeof e11 == "number")
    return Math.ceil(e11 * t * r) / r;
  if (typeof e11 != "string")
    return e11;
  const i = e11.split(FS);
  if (i === null || !i.length)
    return e11;
  const n = [];
  let s = i.shift(), o = OS.test(s);
  for (; ; ) {
    if (o) {
      const a = parseFloat(s);
      isNaN(a) ? n.push(s) : n.push(Math.ceil(a * t * r) / r);
    } else
      n.push(s);
    if (s = i.shift(), s === void 0)
      return n.join("");
    o = !o;
  }
}
function DS(e11, t = "defs") {
  let r = "";
  const i = e11.indexOf("<" + t);
  for (; i >= 0; ) {
    const n = e11.indexOf(">", i), s = e11.indexOf("</" + t);
    if (n === -1 || s === -1)
      break;
    const o = e11.indexOf(">", s);
    if (o === -1)
      break;
    r += e11.slice(n + 1, s).trim(), e11 = e11.slice(0, i).trim() + e11.slice(o + 1);
  }
  return {
    defs: r,
    content: e11
  };
}
function IS(e11, t) {
  return e11 ? "<defs>" + e11 + "</defs>" + t : t;
}
function RS(e11, t, r) {
  const i = DS(e11);
  return IS(i.defs, t + i.content + r);
}
var PS = (e11) => e11 === "unset" || e11 === "undefined" || e11 === "none";
function NS(e11, t) {
  const r = {
    ...Fg,
    ...e11
  }, i = {
    ...LS,
    ...t
  }, n = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let s = r.body;
  [r, i].forEach((m) => {
    const y = [], b = m.hFlip, x = m.vFlip;
    let w = m.rotate;
    b ? x ? w += 2 : (y.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), y.push("scale(-1 1)"), n.top = n.left = 0) : x && (y.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), y.push("scale(1 -1)"), n.top = n.left = 0);
    let v;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        v = n.height / 2 + n.top, y.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        v = n.width / 2 + n.left, y.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (n.left !== n.top && (v = n.left, n.left = n.top, n.top = v), n.width !== n.height && (v = n.width, n.width = n.height, n.height = v)), y.length && (s = RS(
      s,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const o = i.width, a = i.height, l = n.width, c = n.height;
  let h3, u;
  o === null ? (u = a === null ? "1em" : a === "auto" ? c : a, h3 = uu(u, l / c)) : (h3 = o === "auto" ? l : o, u = a === null ? uu(h3, c / l) : a === "auto" ? c : a);
  const f = {}, d = (m, y) => {
    PS(y) || (f[m] = y.toString());
  };
  d("width", h3), d("height", u);
  const p = [n.left, n.top, l, c];
  return f.viewBox = p.join(" "), {
    attributes: f,
    viewBox: p,
    body: s
  };
}
var zS = /\sid="(\S+)"/g;
var WS = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var qS = 0;
function HS(e11, t = WS) {
  const r = [];
  let i;
  for (; i = zS.exec(e11); )
    r.push(i[1]);
  if (!r.length)
    return e11;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((s) => {
    const o = typeof t == "function" ? t(s) : t + (qS++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e11 = e11.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + o + n + "$3"
    );
  }), e11 = e11.replace(new RegExp(n, "g"), ""), e11;
}
function jS(e11, t) {
  let r = e11.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e11 + "</svg>";
}
function mc() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var zr = mc();
function Og(e11) {
  zr = e11;
}
var dn = { exec: () => null };
function yt(e11, t = "") {
  let r = typeof e11 == "string" ? e11 : e11.source, i = { replace: (n, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(Kt.caret, "$1"), r = r.replace(n, o), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var Kt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e11) => new RegExp(`^( {0,3}${e11})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e11) => new RegExp(`^ {0,${Math.min(3, e11 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e11) => new RegExp(`^ {0,${Math.min(3, e11 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e11) => new RegExp(`^ {0,${Math.min(3, e11 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e11) => new RegExp(`^ {0,${Math.min(3, e11 - 1)}}#`), htmlBeginRegex: (e11) => new RegExp(`^ {0,${Math.min(3, e11 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var US = /^(?:[ \t]*(?:\n|$))+/;
var YS = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var GS = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var Dn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var VS = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var yc = /(?:[*+-]|\d{1,9}[.)])/;
var Dg = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var Ig = yt(Dg).replace(/bull/g, yc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var XS = yt(Dg).replace(/bull/g, yc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var xc = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var KS = /^[^\n]+/;
var bc = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var ZS = yt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", bc).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var QS = yt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, yc).getRegex();
var Ma = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var wc = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var JS = yt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", wc).replace("tag", Ma).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var Rg = yt(xc).replace("hr", Dn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ma).getRegex();
var tT = yt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Rg).getRegex();
var vc = { blockquote: tT, code: YS, def: ZS, fences: GS, heading: VS, hr: Dn, html: JS, lheading: Ig, list: QS, newline: US, paragraph: Rg, table: dn, text: KS };
var fu = yt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Dn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ma).getRegex();
var eT = { ...vc, lheading: XS, table: fu, paragraph: yt(xc).replace("hr", Dn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", fu).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ma).getRegex() };
var rT = { ...vc, html: yt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", wc).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: dn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: yt(xc).replace("hr", Dn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ig).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var iT = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var nT = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var Pg = /^( {2,}|\\)\n(?!\s*$)/;
var sT = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var $a = /[\p{P}\p{S}]/u;
var Cc = /[\s\p{P}\p{S}]/u;
var Ng = /[^\s\p{P}\p{S}]/u;
var aT = yt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Cc).getRegex();
var zg = /(?!~)[\p{P}\p{S}]/u;
var oT = /(?!~)[\s\p{P}\p{S}]/u;
var lT = /(?:[^\s\p{P}\p{S}]|~)/u;
var cT = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g;
var Wg = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var hT = yt(Wg, "u").replace(/punct/g, $a).getRegex();
var uT = yt(Wg, "u").replace(/punct/g, zg).getRegex();
var qg = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var fT = yt(qg, "gu").replace(/notPunctSpace/g, Ng).replace(/punctSpace/g, Cc).replace(/punct/g, $a).getRegex();
var dT = yt(qg, "gu").replace(/notPunctSpace/g, lT).replace(/punctSpace/g, oT).replace(/punct/g, zg).getRegex();
var pT = yt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ng).replace(/punctSpace/g, Cc).replace(/punct/g, $a).getRegex();
var gT = yt(/\\(punct)/, "gu").replace(/punct/g, $a).getRegex();
var mT = yt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var yT = yt(wc).replace("(?:-->|$)", "-->").getRegex();
var xT = yt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", yT).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var ea = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var bT = yt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ea).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var Hg = yt(/^!?\[(label)\]\[(ref)\]/).replace("label", ea).replace("ref", bc).getRegex();
var jg = yt(/^!?\[(ref)\](?:\[\])?/).replace("ref", bc).getRegex();
var wT = yt("reflink|nolink(?!\\()", "g").replace("reflink", Hg).replace("nolink", jg).getRegex();
var kc = { _backpedal: dn, anyPunctuation: gT, autolink: mT, blockSkip: cT, br: Pg, code: nT, del: dn, emStrongLDelim: hT, emStrongRDelimAst: fT, emStrongRDelimUnd: pT, escape: iT, link: bT, nolink: jg, punctuation: aT, reflink: Hg, reflinkSearch: wT, tag: xT, text: sT, url: dn };
var vT = { ...kc, link: yt(/^!?\[(label)\]\((.*?)\)/).replace("label", ea).getRegex(), reflink: yt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ea).getRegex() };
var ll = { ...kc, emStrongRDelimAst: dT, emStrongLDelim: uT, url: yt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
var CT = { ...ll, br: yt(Pg).replace("{2,}", "*").getRegex(), text: yt(ll.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var es = { normal: vc, gfm: eT, pedantic: rT };
var Ui = { normal: kc, gfm: ll, breaks: CT, pedantic: vT };
var kT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var du = (e11) => kT[e11];
function Se(e11, t) {
  if (t) {
    if (Kt.escapeTest.test(e11)) return e11.replace(Kt.escapeReplace, du);
  } else if (Kt.escapeTestNoEncode.test(e11)) return e11.replace(Kt.escapeReplaceNoEncode, du);
  return e11;
}
function pu(e11) {
  try {
    e11 = encodeURI(e11).replace(Kt.percentDecode, "%");
  } catch {
    return null;
  }
  return e11;
}
function gu(e11, t) {
  var _a3;
  let r = e11.replace(Kt.findPipe, (s, o, a) => {
    let l = false, c = o;
    for (; --c >= 0 && a[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(Kt.splitPipe), n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((_a3 = i.at(-1)) == null ? void 0 : _a3.trim()) && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; n < i.length; n++) i[n] = i[n].trim().replace(Kt.slashPipe, "|");
  return i;
}
function Yi(e11, t, r) {
  let i = e11.length;
  if (i === 0) return "";
  let n = 0;
  for (; n < i && e11.charAt(i - n - 1) === t; )
    n++;
  return e11.slice(0, i - n);
}
function _T(e11, t) {
  if (e11.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e11.length; i++) if (e11[i] === "\\") i++;
  else if (e11[i] === t[0]) r++;
  else if (e11[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function mu(e11, t, r, i, n) {
  let s = t.href, o = t.title || null, a = e11[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = true;
  let l = { type: e11[0].charAt(0) === "!" ? "image" : "link", raw: r, href: s, title: o, text: a, tokens: i.inlineTokens(a) };
  return i.state.inLink = false, l;
}
function ST(e11, t, r) {
  let i = e11.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let n = i[1];
  return t.split(`
`).map((s) => {
    let o = s.match(r.other.beginningSpace);
    if (o === null) return s;
    let [a] = o;
    return a.length >= n.length ? s.slice(n.length) : s;
  }).join(`
`);
}
var ra = class {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = t || zr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : Yi(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], n = ST(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: n };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let n = Yi(i, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (i = n.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: Yi(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = Yi(r[0], `
`).split(`
`), n = "", s = "", o = [];
      for (; i.length > 0; ) {
        let a = false, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), a = true;
        else if (!a) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h3 = l.join(`
`), u = h3.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${h3}` : h3, s = s ? `${s}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(u, o, true), this.lexer.state.top = f, i.length === 0) break;
        let d = o.at(-1);
        if ((d == null ? void 0 : d.type) === "code") break;
        if ((d == null ? void 0 : d.type) === "blockquote") {
          let p = d, m = p.raw + `
` + i.join(`
`), y = this.blockquote(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - p.raw.length) + y.raw, s = s.substring(0, s.length - p.text.length) + y.text;
          break;
        } else if ((d == null ? void 0 : d.type) === "list") {
          let p = d, m = p.raw + `
` + i.join(`
`), y = this.list(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - d.raw.length) + y.raw, s = s.substring(0, s.length - p.raw.length) + y.raw, i = m.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: o, text: s };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), n = i.length > 1, s = { type: "list", raw: "", ordered: n, start: n ? +i.slice(0, -1) : "", loose: false, items: [] };
      i = n ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = n ? i : "[*+-]");
      let o = this.rules.other.listItemRegex(i), a = false;
      for (; t; ) {
        let c = false, h3 = "", u = "";
        if (!(r = o.exec(t)) || this.rules.block.hr.test(t)) break;
        h3 = r[0], t = t.substring(h3.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), d = t.split(`
`, 1)[0], p = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : p ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), p && this.rules.other.blankLine.test(d) && (h3 += d + `
`, t = t.substring(d.length + 1), c = true), !c) {
          let x = this.rules.other.nextBulletRegex(m), w = this.rules.other.hrRegex(m), v = this.rules.other.fencesBeginRegex(m), C = this.rules.other.headingBeginRegex(m), S = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let T = t.split(`
`, 1)[0], O;
            if (d = T, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), O = d) : O = d.replace(this.rules.other.tabCharGlobal, "    "), v.test(d) || C.test(d) || S.test(d) || x.test(d) || w.test(d)) break;
            if (O.search(this.rules.other.nonSpaceChar) >= m || !d.trim()) u += `
` + O.slice(m);
            else {
              if (p || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || C.test(f) || w.test(f)) break;
              u += `
` + d;
            }
            !p && !d.trim() && (p = true), h3 += T + `
`, t = t.substring(T.length + 1), f = O.slice(m);
          }
        }
        s.loose || (a ? s.loose = true : this.rules.other.doubleBlankLine.test(h3) && (a = true));
        let y = null, b;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (b = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), s.items.push({ type: "list_item", raw: h3, task: !!y, checked: b, loose: false, text: u, tokens: [] }), s.raw += h3;
      }
      let l = s.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      s.raw = s.raw.trimEnd();
      for (let c = 0; c < s.items.length; c++) if (this.lexer.state.top = false, s.items[c].tokens = this.lexer.blockTokens(s.items[c].text, []), !s.loose) {
        let h3 = s.items[c].tokens.filter((f) => f.type === "space"), u = h3.length > 0 && h3.some((f) => this.rules.other.anyLine.test(f.raw));
        s.loose = u;
      }
      if (s.loose) for (let c = 0; c < s.items.length; c++) s.items[c].loose = true;
      return s;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: true, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: n, title: s };
    }
  }
  table(t) {
    var _a3;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = gu(r[1]), n = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = ((_a3 = r[3]) == null ? void 0 : _a3.trim()) ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === n.length) {
      for (let a of n) this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < i.length; a++) o.header.push({ text: i[a], tokens: this.lexer.inline(i[a]), header: true, align: o.align[a] });
      for (let a of s) o.rows.push(gu(a, o.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: false, align: o.align[c] })));
      return o;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let o = Yi(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0) return;
      } else {
        let o = _T(r[2], "()");
        if (o === -2) return;
        if (o > -1) {
          let a = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + o;
          r[2] = r[2].substring(0, o), r[0] = r[0].substring(0, a).trim(), r[3] = "";
        }
      }
      let n = r[2], s = "";
      if (this.options.pedantic) {
        let o = this.rules.other.pedanticHrefTitle.exec(n);
        o && (n = o[1], s = o[3]);
      } else s = r[3] ? r[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), mu(r, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let n = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = r[n.toLowerCase()];
      if (!s) {
        let o = i[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return mu(i, s, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!n || n[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let s = [...n[0]].length - 1, o, a, l = s, c = 0, h3 = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h3.lastIndex = 0, r = r.slice(-1 * t.length + s); (n = h3.exec(r)) != null; ) {
        if (o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !o) continue;
        if (a = [...o].length, n[3] || n[4]) {
          l += a;
          continue;
        } else if ((n[5] || n[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + c);
        let u = [...n[0]][0].length, f = t.slice(0, s + n.index + u + a);
        if (Math.min(s, a) % 2) {
          let p = f.slice(1, -1);
          return { type: "em", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(i), s = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return n && s && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, n;
      return r[2] === "@" ? (i = r[1], n = "mailto:" + i) : (i = r[1], n = i), { type: "link", raw: r[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    var _a3;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, n;
      if (r[2] === "@") i = r[0], n = "mailto:" + i;
      else {
        let s;
        do
          s = r[0], r[0] = ((_a3 = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : _a3[0]) ?? "";
        while (s !== r[0]);
        i = r[0], r[1] === "www." ? n = "http://" + r[0] : n = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
};
var Ue = class cl {
  constructor(t) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || zr, this.options.tokenizer = this.options.tokenizer || new ra(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { other: Kt, block: es.normal, inline: Ui.normal };
    this.options.pedantic ? (r.block = es.pedantic, r.inline = Ui.pedantic) : this.options.gfm && (r.block = es.gfm, this.options.breaks ? r.inline = Ui.breaks : r.inline = Ui.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: es, inline: Ui };
  }
  static lex(t, r) {
    return new cl(r).lex(t);
  }
  static lexInline(t, r) {
    return new cl(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Kt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = false) {
    var _a3, _b2, _c2;
    for (this.options.pedantic && (t = t.replace(Kt.tabCharGlobal, "    ").replace(Kt.spaceLine, "")); t; ) {
      let n;
      if ((_b2 = (_a3 = this.options.extensions) == null ? void 0 : _a3.block) == null ? void 0 : _b2.some((o) => (n = o.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), true) : false)) continue;
      if (n = this.tokenizer.space(t)) {
        t = t.substring(n.raw.length);
        let o = r.at(-1);
        n.raw.length === 1 && o !== void 0 ? o.raw += `
` : r.push(n);
        continue;
      }
      if (n = this.tokenizer.code(t)) {
        t = t.substring(n.raw.length);
        let o = r.at(-1);
        (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.at(-1).src = o.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.list(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.html(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.def(t)) {
        t = t.substring(n.raw.length);
        let o = r.at(-1);
        (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title });
        continue;
      }
      if (n = this.tokenizer.table(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      let s = t;
      if ((_c2 = this.options.extensions) == null ? void 0 : _c2.startBlock) {
        let o = 1 / 0, a = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, a), typeof l == "number" && l >= 0 && (o = Math.min(o, l));
        }), o < 1 / 0 && o >= 0 && (s = t.substring(0, o + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(s))) {
        let o = r.at(-1);
        i && (o == null ? void 0 : o.type) === "paragraph" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : r.push(n), i = s.length !== t.length, t = t.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(t)) {
        t = t.substring(n.raw.length);
        let o = r.at(-1);
        (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : r.push(n);
        continue;
      }
      if (t) {
        let o = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else throw new Error(o);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var _a3, _b2, _c2;
    let i = t, n = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) a.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = false, o = "";
    for (; t; ) {
      s || (o = ""), s = false;
      let a;
      if ((_b2 = (_a3 = this.options.extensions) == null ? void 0 : _a3.inline) == null ? void 0 : _b2.some((c) => (a = c.call({ lexer: this }, t, r)) ? (t = t.substring(a.raw.length), r.push(a), true) : false)) continue;
      if (a = this.tokenizer.escape(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.link(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(a.raw.length);
        let c = r.at(-1);
        a.type === "text" && (c == null ? void 0 : c.type) === "text" ? (c.raw += a.raw, c.text += a.text) : r.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.br(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.del(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(t))) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      let l = t;
      if ((_c2 = this.options.extensions) == null ? void 0 : _c2.startInline) {
        let c = 1 / 0, h3 = t.slice(1), u;
        this.options.extensions.startInline.forEach((f) => {
          u = f.call({ lexer: this }, h3), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
      }
      if (a = this.tokenizer.inlineText(l)) {
        t = t.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), s = true;
        let c = r.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += a.raw, c.text += a.text) : r.push(a);
        continue;
      }
      if (t) {
        let c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return r;
  }
};
var ia = class {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = t || zr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    var _a3;
    let n = (_a3 = (r || "").match(Kt.notSpaceStart)) == null ? void 0 : _a3[0], s = t.replace(Kt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Se(n) + '">' + (i ? s : Se(s, true)) + `</code></pre>
` : "<pre><code>" + (i ? s : Se(s, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, n = "";
    for (let a = 0; a < t.items.length; a++) {
      let l = t.items[a];
      n += this.listitem(l);
    }
    let s = r ? "ol" : "ul", o = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + o + `>
` + n + "</" + s + `>
`;
  }
  listitem(t) {
    var _a3;
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? ((_a3 = t.tokens[0]) == null ? void 0 : _a3.type) === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + Se(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: true }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let s = 0; s < t.header.length; s++) i += this.tablecell(t.header[s]);
    r += this.tablerow({ text: i });
    let n = "";
    for (let s = 0; s < t.rows.length; s++) {
      let o = t.rows[s];
      i = "";
      for (let a = 0; a < o.length; a++) i += this.tablecell(o[a]);
      n += this.tablerow({ text: i });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Se(t, true)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let n = this.parser.parseInline(i), s = pu(t);
    if (s === null) return n;
    t = s;
    let o = '<a href="' + t + '"';
    return r && (o += ' title="' + Se(r) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: t, title: r, text: i, tokens: n }) {
    n && (i = this.parser.parseInline(n, this.parser.textRenderer));
    let s = pu(t);
    if (s === null) return Se(i);
    t = s;
    let o = `<img src="${t}" alt="${i}"`;
    return r && (o += ` title="${Se(r)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Se(t.text);
  }
};
var _c = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
};
var Ye = class hl {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = t || zr, this.options.renderer = this.options.renderer || new ia(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _c();
  }
  static parse(t, r) {
    return new hl(r).parse(t);
  }
  static parseInline(t, r) {
    return new hl(r).parseInline(t);
  }
  parse(t, r = true) {
    var _a3, _b2;
    let i = "";
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      if ((_b2 = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b2[s.type]) {
        let a = s, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += l || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "space": {
          i += this.renderer.space(o);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(o);
          continue;
        }
        case "code": {
          i += this.renderer.code(o);
          continue;
        }
        case "table": {
          i += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          i += this.renderer.list(o);
          continue;
        }
        case "html": {
          i += this.renderer.html(o);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, l = this.renderer.text(a);
          for (; n + 1 < t.length && t[n + 1].type === "text"; ) a = t[++n], l += `
` + this.renderer.text(a);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: true }] }) : i += l;
          continue;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    var _a3, _b2;
    let i = "";
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      if ((_b2 = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b2[s.type]) {
        let a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "escape": {
          i += r.text(o);
          break;
        }
        case "html": {
          i += r.html(o);
          break;
        }
        case "link": {
          i += r.link(o);
          break;
        }
        case "image": {
          i += r.image(o);
          break;
        }
        case "strong": {
          i += r.strong(o);
          break;
        }
        case "em": {
          i += r.em(o);
          break;
        }
        case "codespan": {
          i += r.codespan(o);
          break;
        }
        case "br": {
          i += r.br(o);
          break;
        }
        case "del": {
          i += r.del(o);
          break;
        }
        case "text": {
          i += r.text(o);
          break;
        }
        default: {
          let a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
};
var _a2;
var ws = (_a2 = class {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = t || zr;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  provideLexer() {
    return this.block ? Ue.lex : Ue.lexInline;
  }
  provideParser() {
    return this.block ? Ye.parse : Ye.parseInline;
  }
}, __publicField(_a2, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a2);
var TT = class {
  constructor(...t) {
    __publicField(this, "defaults", mc());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", Ye);
    __publicField(this, "Renderer", ia);
    __publicField(this, "TextRenderer", _c);
    __publicField(this, "Lexer", Ue);
    __publicField(this, "Tokenizer", ra);
    __publicField(this, "Hooks", ws);
    this.use(...t);
  }
  walkTokens(t, r) {
    var _a3, _b2;
    let i = [];
    for (let n of t) switch (i = i.concat(r.call(this, n)), n.type) {
      case "table": {
        let s = n;
        for (let o of s.header) i = i.concat(this.walkTokens(o.tokens, r));
        for (let o of s.rows) for (let a of o) i = i.concat(this.walkTokens(a.tokens, r));
        break;
      }
      case "list": {
        let s = n;
        i = i.concat(this.walkTokens(s.items, r));
        break;
      }
      default: {
        let s = n;
        ((_b2 = (_a3 = this.defaults.extensions) == null ? void 0 : _a3.childTokens) == null ? void 0 : _b2[s.type]) ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
          let a = s[o].flat(1 / 0);
          i = i.concat(this.walkTokens(a, r));
        }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let n = { ...i };
      if (n.async = this.defaults.async || n.async || false, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          let o = r.renderers[s.name];
          o ? r.renderers[s.name] = function(...a) {
            let l = s.renderer.apply(this, a);
            return l === false && (l = o.apply(this, a)), l;
          } : r.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let o = r[s.level];
          o ? o.unshift(s.tokenizer) : r[s.level] = [s.tokenizer], s.start && (s.level === "block" ? r.startBlock ? r.startBlock.push(s.start) : r.startBlock = [s.start] : s.level === "inline" && (r.startInline ? r.startInline.push(s.start) : r.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (r.childTokens[s.name] = s.childTokens);
      }), n.extensions = r), i.renderer) {
        let s = this.defaults.renderer || new ia(this.defaults);
        for (let o in i.renderer) {
          if (!(o in s)) throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o)) continue;
          let a = o, l = i.renderer[a], c = s[a];
          s[a] = (...h3) => {
            let u = l.apply(s, h3);
            return u === false && (u = c.apply(s, h3)), u || "";
          };
        }
        n.renderer = s;
      }
      if (i.tokenizer) {
        let s = this.defaults.tokenizer || new ra(this.defaults);
        for (let o in i.tokenizer) {
          if (!(o in s)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          let a = o, l = i.tokenizer[a], c = s[a];
          s[a] = (...h3) => {
            let u = l.apply(s, h3);
            return u === false && (u = c.apply(s, h3)), u;
          };
        }
        n.tokenizer = s;
      }
      if (i.hooks) {
        let s = this.defaults.hooks || new ws();
        for (let o in i.hooks) {
          if (!(o in s)) throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o)) continue;
          let a = o, l = i.hooks[a], c = s[a];
          ws.passThroughHooks.has(o) ? s[a] = (h3) => {
            if (this.defaults.async) return Promise.resolve(l.call(s, h3)).then((f) => c.call(s, f));
            let u = l.call(s, h3);
            return c.call(s, u);
          } : s[a] = (...h3) => {
            let u = l.apply(s, h3);
            return u === false && (u = c.apply(s, h3)), u;
          };
        }
        n.hooks = s;
      }
      if (i.walkTokens) {
        let s = this.defaults.walkTokens, o = i.walkTokens;
        n.walkTokens = function(a) {
          let l = [];
          return l.push(o.call(this, a)), s && (l = l.concat(s.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return Ue.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return Ye.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let n = { ...i }, s = { ...this.defaults, ...n }, o = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && n.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = t);
      let a = s.hooks ? s.hooks.provideLexer() : t ? Ue.lex : Ue.lexInline, l = s.hooks ? s.hooks.provideParser() : t ? Ye.parse : Ye.parseInline;
      if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r).then((c) => a(c, s)).then((c) => s.hooks ? s.hooks.processAllTokens(c) : c).then((c) => s.walkTokens ? Promise.all(this.walkTokens(c, s.walkTokens)).then(() => c) : c).then((c) => l(c, s)).then((c) => s.hooks ? s.hooks.postprocess(c) : c).catch(o);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let c = a(r, s);
        s.hooks && (c = s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
        let h3 = l(c, s);
        return s.hooks && (h3 = s.hooks.postprocess(h3)), h3;
      } catch (c) {
        return o(c);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let n = "<p>An error occurred:</p><pre>" + Se(i.message + "", true) + "</pre>";
        return r ? Promise.resolve(n) : n;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
};
var Or = new TT();
function mt(e11, t) {
  return Or.parse(e11, t);
}
mt.options = mt.setOptions = function(e11) {
  return Or.setOptions(e11), mt.defaults = Or.defaults, Og(mt.defaults), mt;
};
mt.getDefaults = mc;
mt.defaults = zr;
mt.use = function(...e11) {
  return Or.use(...e11), mt.defaults = Or.defaults, Og(mt.defaults), mt;
};
mt.walkTokens = function(e11, t) {
  return Or.walkTokens(e11, t);
};
mt.parseInline = Or.parseInline;
mt.Parser = Ye;
mt.parser = Ye.parse;
mt.Renderer = ia;
mt.TextRenderer = _c;
mt.Lexer = Ue;
mt.lexer = Ue.lex;
mt.Tokenizer = ra;
mt.Hooks = ws;
mt.parse = mt;
mt.options;
mt.setOptions;
mt.use;
mt.walkTokens;
mt.parseInline;
Ye.parse;
Ue.lex;
function Ug(e11) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e11 == "string" ? [e11] : e11);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = i.reduce(function(a, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? a.concat(c.map(function(h3) {
      var u, f;
      return (f = (u = h3.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : a;
  }, []);
  if (n.length) {
    var s = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    i = i.map(function(a) {
      return a.replace(s, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var o = i[0];
  return t.forEach(function(a, l) {
    var c = o.match(/(?:^|\n)( *)$/), h3 = c ? c[1] : "", u = a;
    typeof a == "string" && a.includes(`
`) && (u = String(a).split(`
`).map(function(f, d) {
      return d === 0 ? f : "" + h3 + f;
    }).join(`
`)), o += u + i[l + 1];
  }), o;
}
var BT = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
};
var ul = /* @__PURE__ */ new Map();
var Yg = /* @__PURE__ */ new Map();
var LT = g((e11) => {
  for (const t of e11) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (N.debug("Registering icon pack:", t.name), "loader" in t)
      Yg.set(t.name, t.loader);
    else if ("icons" in t)
      ul.set(t.name, t.icons);
    else
      throw N.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks");
var Gg = g(async (e11, t) => {
  const r = AS(e11, true, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e11}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e11}`);
  let n = ul.get(i);
  if (!n) {
    const o = Yg.get(i);
    if (!o)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      n = { ...await o(), prefix: i }, ul.set(i, n);
    } catch (a) {
      throw N.error(a), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const s = $S(n, r.name);
  if (!s)
    throw new Error(`Icon not found: ${e11}`);
  return s;
}, "getRegisteredIconData");
var AT = g(async (e11) => {
  try {
    return await Gg(e11), true;
  } catch {
    return false;
  }
}, "isIconAvailable");
var In = g(async (e11, t, r) => {
  let i;
  try {
    i = await Gg(e11, t == null ? void 0 : t.fallbackPrefix);
  } catch (o) {
    N.error(o), i = BT;
  }
  const n = NS(i, t);
  return jS(HS(n.body), {
    ...n.attributes,
    ...r
  });
}, "getIconSVG");
function Vg(e11, { markdownAutoWrap: t }) {
  const i = e11.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), n = Ug(i);
  return t === false ? n.replace(/ /g, "&nbsp;") : n;
}
g(Vg, "preprocessMarkdown");
function Xg(e11, t = {}) {
  const r = Vg(e11, t), i = mt.lexer(r), n = [[]];
  let s = 0;
  function o(a, l = "normal") {
    a.type === "text" ? a.text.split(`
`).forEach((h3, u) => {
      u !== 0 && (s++, n.push([])), h3.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && n[s].push({ content: f, type: l });
      });
    }) : a.type === "strong" || a.type === "em" ? a.tokens.forEach((c) => {
      o(c, a.type);
    }) : a.type === "html" && n[s].push({ content: a.text, type: "normal" });
  }
  return g(o, "processNode"), i.forEach((a) => {
    var _a3;
    a.type === "paragraph" ? (_a3 = a.tokens) == null ? void 0 : _a3.forEach((l) => {
      o(l);
    }) : a.type === "html" && n[s].push({ content: a.text, type: "normal" });
  }), n;
}
g(Xg, "markdownToLines");
function Kg(e11, { markdownAutoWrap: t } = {}) {
  const r = mt.lexer(e11);
  function i(n) {
    var _a3, _b2, _c2;
    return n.type === "text" ? t === false ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(_a3 = n.tokens) == null ? void 0 : _a3.map(i).join("")}</strong>` : n.type === "em" ? `<em>${(_b2 = n.tokens) == null ? void 0 : _b2.map(i).join("")}</em>` : n.type === "paragraph" ? `<p>${(_c2 = n.tokens) == null ? void 0 : _c2.map(i).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : `Unsupported markdown: ${n.type}`;
  }
  return g(i, "output"), r.map(i).join("");
}
g(Kg, "markdownToHTML");
function Zg(e11) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e11)].map((t) => t.segment) : [...e11];
}
g(Zg, "splitTextToChars");
function Qg(e11, t) {
  const r = Zg(t.content);
  return Sc(e11, [], r, t.type);
}
g(Qg, "splitWordToFitWidth");
function Sc(e11, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [n, ...s] = r, o = [...t, n];
  return e11([{ content: o.join(""), type: i }]) ? Sc(e11, o, s, i) : (t.length === 0 && n && (t.push(n), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
g(Sc, "splitWordToFitWidthRecursion");
function Jg(e11, t) {
  if (e11.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return na(e11, t);
}
g(Jg, "splitLineToFitWidth");
function na(e11, t, r = [], i = []) {
  if (e11.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let n = "";
  e11[0].content === " " && (n = " ", e11.shift());
  const s = e11.shift() ?? { content: " ", type: "normal" }, o = [...i];
  if (n !== "" && o.push({ content: n, type: "normal" }), o.push(s), t(o))
    return na(e11, t, r, o);
  if (i.length > 0)
    r.push(i), e11.unshift(s);
  else if (s.content) {
    const [a, l] = Qg(t, s);
    r.push([a]), l.content && e11.unshift(l);
  }
  return na(e11, t, r);
}
g(na, "splitLineToFitWidthRecursion");
function fl(e11, t) {
  t && e11.attr("style", t);
}
g(fl, "applyStyle");
async function tm(e11, t, r, i, n = false) {
  const s = e11.append("foreignObject");
  s.attr("width", `${10 * r}px`), s.attr("height", `${10 * r}px`);
  const o = s.append("xhtml:div");
  let a = t.label;
  t.label && gi(t.label) && (a = await Dl(t.label.replace(Ti.lineBreakRegex, `
`), gt()));
  const l = t.isNode ? "nodeLabel" : "edgeLabel", c = o.append("span");
  c.html(a), fl(c, t.labelStyle), c.attr("class", `${l} ${i}`), fl(o, t.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && o.attr("class", "labelBkg");
  let h3 = o.node().getBoundingClientRect();
  return h3.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), h3 = o.node().getBoundingClientRect()), s.node();
}
g(tm, "addHtmlSpan");
function Fa(e11, t, r) {
  return e11.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
}
g(Fa, "createTspan");
function em(e11, t, r) {
  const i = e11.append("text"), n = Fa(i, 1, t);
  Oa(n, r);
  const s = n.node().getComputedTextLength();
  return i.remove(), s;
}
g(em, "computeWidthOfText");
function ET(e11, t, r) {
  var _a3;
  const i = e11.append("text"), n = Fa(i, 1, t);
  Oa(n, [{ content: r, type: "normal" }]);
  const s = (_a3 = n.node()) == null ? void 0 : _a3.getBoundingClientRect();
  return s && i.remove(), s;
}
g(ET, "computeDimensionOfText");
function rm(e11, t, r, i = false) {
  const s = t.append("g"), o = s.insert("rect").attr("class", "background").attr("style", "stroke: none"), a = s.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r) {
    const h3 = g((f) => em(s, 1.1, f) <= e11, "checkWidth"), u = h3(c) ? [c] : Jg(c, h3);
    for (const f of u) {
      const d = Fa(a, l, 1.1);
      Oa(d, f), l++;
    }
  }
  if (i) {
    const c = a.node().getBBox(), h3 = 2;
    return o.attr("x", c.x - h3).attr("y", c.y - h3).attr("width", c.width + 2 * h3).attr("height", c.height + 2 * h3), s.node();
  } else
    return a.node();
}
g(rm, "createFormattedText");
function Oa(e11, t) {
  e11.text(""), t.forEach((r, i) => {
    const n = e11.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? n.text(r.content) : n.text(" " + r.content);
  });
}
g(Oa, "updateTextContentAndStyles");
async function im(e11) {
  const t = [];
  e11.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (i, n, s) => (t.push(
    (async () => {
      const o = `${n}:${s}`;
      return await AT(o) ? await In(o, void 0, { class: "label-icon" }) : `<i class='${ya(i).replace(":", " ")}'></i>`;
    })()
  ), i));
  const r = await Promise.all(t);
  return e11.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => r.shift() ?? "");
}
g(im, "replaceIconSubstring");
var dr = g(async (e11, t = "", {
  style: r = "",
  isTitle: i = false,
  classes: n = "",
  useHtmlLabels: s = true,
  isNode: o = true,
  width: a = 200,
  addSvgBackground: l = false
} = {}, c) => {
  if (N.debug(
    "XYZ createText",
    t,
    r,
    i,
    n,
    s,
    o,
    "addSvgBackground: ",
    l
  ), s) {
    const h3 = Kg(t, c), u = await im(Nr(h3)), f = t.replace(/\\\\/g, "\\"), d = {
      isNode: o,
      label: gi(t) ? f : u,
      labelStyle: r.replace("fill:", "color:")
    };
    return await tm(e11, d, a, n, l);
  } else {
    const h3 = t.replace(/<br\s*\/?>/g, "<br/>"), u = Xg(h3.replace("<br>", "<br/>"), c), f = rm(
      a,
      e11,
      u,
      t ? l : false
    );
    if (o) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      dt(f).attr("style", d);
    } else {
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      dt(f).select("rect").attr("style", d.replace(/background:/g, "fill:"));
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      dt(f).select("text").attr("style", p);
    }
    return f;
  }
}, "createText");
function co(e11, t, r) {
  if (e11 && e11.length) {
    const [i, n] = t, s = Math.PI / 180 * r, o = Math.cos(s), a = Math.sin(s);
    for (const l of e11) {
      const [c, h3] = l;
      l[0] = (c - i) * o - (h3 - n) * a + i, l[1] = (c - i) * a + (h3 - n) * o + n;
    }
  }
}
function MT(e11, t) {
  return e11[0] === t[0] && e11[1] === t[1];
}
function $T(e11, t, r, i = 1) {
  const n = r, s = Math.max(t, 0.1), o = e11[0] && e11[0][0] && typeof e11[0][0] == "number" ? [e11] : e11, a = [0, 0];
  if (n) for (const c of o) co(c, a, n);
  const l = function(c, h3, u) {
    const f = [];
    for (const x of c) {
      const w = [...x];
      MT(w[0], w[w.length - 1]) || w.push([w[0][0], w[0][1]]), w.length > 2 && f.push(w);
    }
    const d = [];
    h3 = Math.max(h3, 0.1);
    const p = [];
    for (const x of f) for (let w = 0; w < x.length - 1; w++) {
      const v = x[w], C = x[w + 1];
      if (v[1] !== C[1]) {
        const S = Math.min(v[1], C[1]);
        p.push({ ymin: S, ymax: Math.max(v[1], C[1]), x: S === v[1] ? v[0] : C[0], islope: (C[0] - v[0]) / (C[1] - v[1]) });
      }
    }
    if (p.sort((x, w) => x.ymin < w.ymin ? -1 : x.ymin > w.ymin ? 1 : x.x < w.x ? -1 : x.x > w.x ? 1 : x.ymax === w.ymax ? 0 : (x.ymax - w.ymax) / Math.abs(x.ymax - w.ymax)), !p.length) return d;
    let m = [], y = p[0].ymin, b = 0;
    for (; m.length || p.length; ) {
      if (p.length) {
        let x = -1;
        for (let w = 0; w < p.length && !(p[w].ymin > y); w++) x = w;
        p.splice(0, x + 1).forEach((w) => {
          m.push({ s: y, edge: w });
        });
      }
      if (m = m.filter((x) => !(x.edge.ymax <= y)), m.sort((x, w) => x.edge.x === w.edge.x ? 0 : (x.edge.x - w.edge.x) / Math.abs(x.edge.x - w.edge.x)), (u !== 1 || b % h3 == 0) && m.length > 1) for (let x = 0; x < m.length; x += 2) {
        const w = x + 1;
        if (w >= m.length) break;
        const v = m[x].edge, C = m[w].edge;
        d.push([[Math.round(v.x), y], [Math.round(C.x), y]]);
      }
      y += u, m.forEach((x) => {
        x.edge.x = x.edge.x + u * x.edge.islope;
      }), b++;
    }
    return d;
  }(o, s, i);
  if (n) {
    for (const c of o) co(c, a, -n);
    (function(c, h3, u) {
      const f = [];
      c.forEach((d) => f.push(...d)), co(f, h3, u);
    })(l, a, -n);
  }
  return l;
}
function Rn(e11, t) {
  var r;
  const i = t.hachureAngle + 90;
  let n = t.hachureGap;
  n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
  let s = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (s = n), $T(e11, n, i, s || 1);
}
var Tc = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Rn(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const n of t) i.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], r));
    return i;
  }
};
function Da(e11) {
  const t = e11[0], r = e11[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
var FT = class extends Tc {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const n = Rn(t, Object.assign({}, r, { hachureGap: i })), s = Math.PI / 180 * r.hachureAngle, o = [], a = 0.5 * i * Math.cos(s), l = 0.5 * i * Math.sin(s);
    for (const [c, h3] of n) Da([c, h3]) && o.push([[c[0] - a, c[1] + l], [...h3]], [[c[0] + a, c[1] - l], [...h3]]);
    return { type: "fillSketch", ops: this.renderLines(o, r) };
  }
};
var OT = class extends Tc {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), n = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), s = this._fillPolygons(t, n);
    return i.ops = i.ops.concat(s.ops), i;
  }
};
var DT = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Rn(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let n = r.hachureGap;
    n < 0 && (n = 4 * r.strokeWidth), n = Math.max(n, 0.1);
    let s = r.fillWeight;
    s < 0 && (s = r.strokeWidth / 2);
    const o = n / 4;
    for (const a of t) {
      const l = Da(a), c = l / n, h3 = Math.ceil(c) - 1, u = l - h3 * n, f = (a[0][0] + a[1][0]) / 2 - n / 4, d = Math.min(a[0][1], a[1][1]);
      for (let p = 0; p < h3; p++) {
        const m = d + u + p * n, y = f - o + 2 * Math.random() * o, b = m - o + 2 * Math.random() * o, x = this.helper.ellipse(y, b, s, s, r);
        i.push(...x.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
};
var IT = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Rn(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, n = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, s = [];
    return t.forEach((o) => {
      const a = Da(o), l = Math.floor(a / (i + n)), c = (a + n - l * (i + n)) / 2;
      let h3 = o[0], u = o[1];
      h3[0] > u[0] && (h3 = o[1], u = o[0]);
      const f = Math.atan((u[1] - h3[1]) / (u[0] - h3[0]));
      for (let d = 0; d < l; d++) {
        const p = d * (i + n), m = p + i, y = [h3[0] + p * Math.cos(f) + c * Math.cos(f), h3[1] + p * Math.sin(f) + c * Math.sin(f)], b = [h3[0] + m * Math.cos(f) + c * Math.cos(f), h3[1] + m * Math.sin(f) + c * Math.sin(f)];
        s.push(...this.helper.doubleLineOps(y[0], y[1], b[0], b[1], r));
      }
    }), s;
  }
};
var RT = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, n = r.zigzagOffset < 0 ? i : r.zigzagOffset, s = Rn(t, r = Object.assign({}, r, { hachureGap: i + n }));
    return { type: "fillSketch", ops: this.zigzagLines(s, n, r) };
  }
  zigzagLines(t, r, i) {
    const n = [];
    return t.forEach((s) => {
      const o = Da(s), a = Math.round(o / (2 * r));
      let l = s[0], c = s[1];
      l[0] > c[0] && (l = s[1], c = s[0]);
      const h3 = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < a; u++) {
        const f = 2 * u * r, d = 2 * (u + 1) * r, p = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h3), l[1] + f * Math.sin(h3)], y = [l[0] + d * Math.cos(h3), l[1] + d * Math.sin(h3)], b = [m[0] + p * Math.cos(h3 + Math.PI / 4), m[1] + p * Math.sin(h3 + Math.PI / 4)];
        n.push(...this.helper.doubleLineOps(m[0], m[1], b[0], b[1], i), ...this.helper.doubleLineOps(b[0], b[1], y[0], y[1], i));
      }
    }), n;
  }
};
var ee = {};
var PT = class {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
};
var NT = 0;
var ho = 1;
var yu = 2;
var rs = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function uo(e11, t) {
  return e11.type === t;
}
function Bc(e11) {
  const t = [], r = function(o) {
    const a = new Array();
    for (; o !== ""; ) if (o.match(/^([ \t\r\n,]+)/)) o = o.substr(RegExp.$1.length);
    else if (o.match(/^([aAcChHlLmMqQsStTvVzZ])/)) a[a.length] = { type: NT, text: RegExp.$1 }, o = o.substr(RegExp.$1.length);
    else {
      if (!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      a[a.length] = { type: ho, text: `${parseFloat(RegExp.$1)}` }, o = o.substr(RegExp.$1.length);
    }
    return a[a.length] = { type: yu, text: "" }, a;
  }(e11);
  let i = "BOD", n = 0, s = r[n];
  for (; !uo(s, yu); ) {
    let o = 0;
    const a = [];
    if (i === "BOD") {
      if (s.text !== "M" && s.text !== "m") return Bc("M0,0" + e11);
      n++, o = rs[s.text], i = s.text;
    } else uo(s, ho) ? o = rs[i] : (n++, o = rs[s.text], i = s.text);
    if (!(n + o < r.length)) throw new Error("Path data ended short");
    for (let l = n; l < n + o; l++) {
      const c = r[l];
      if (!uo(c, ho)) throw new Error("Param not a number: " + i + "," + c.text);
      a[a.length] = +c.text;
    }
    if (typeof rs[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: a };
      t.push(l), n += o, s = r[n], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function nm(e11) {
  let t = 0, r = 0, i = 0, n = 0;
  const s = [];
  for (const { key: o, data: a } of e11) switch (o) {
    case "M":
      s.push({ key: "M", data: [...a] }), [t, r] = a, [i, n] = a;
      break;
    case "m":
      t += a[0], r += a[1], s.push({ key: "M", data: [t, r] }), i = t, n = r;
      break;
    case "L":
      s.push({ key: "L", data: [...a] }), [t, r] = a;
      break;
    case "l":
      t += a[0], r += a[1], s.push({ key: "L", data: [t, r] });
      break;
    case "C":
      s.push({ key: "C", data: [...a] }), t = a[4], r = a[5];
      break;
    case "c": {
      const l = a.map((c, h3) => h3 % 2 ? c + r : c + t);
      s.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      s.push({ key: "Q", data: [...a] }), t = a[2], r = a[3];
      break;
    case "q": {
      const l = a.map((c, h3) => h3 % 2 ? c + r : c + t);
      s.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      s.push({ key: "A", data: [...a] }), t = a[5], r = a[6];
      break;
    case "a":
      t += a[5], r += a[6], s.push({ key: "A", data: [a[0], a[1], a[2], a[3], a[4], t, r] });
      break;
    case "H":
      s.push({ key: "H", data: [...a] }), t = a[0];
      break;
    case "h":
      t += a[0], s.push({ key: "H", data: [t] });
      break;
    case "V":
      s.push({ key: "V", data: [...a] }), r = a[0];
      break;
    case "v":
      r += a[0], s.push({ key: "V", data: [r] });
      break;
    case "S":
      s.push({ key: "S", data: [...a] }), t = a[2], r = a[3];
      break;
    case "s": {
      const l = a.map((c, h3) => h3 % 2 ? c + r : c + t);
      s.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      s.push({ key: "T", data: [...a] }), t = a[0], r = a[1];
      break;
    case "t":
      t += a[0], r += a[1], s.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      s.push({ key: "Z", data: [] }), t = i, r = n;
  }
  return s;
}
function sm(e11) {
  const t = [];
  let r = "", i = 0, n = 0, s = 0, o = 0, a = 0, l = 0;
  for (const { key: c, data: h3 } of e11) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h3] }), [i, n] = h3, [s, o] = h3;
        break;
      case "C":
        t.push({ key: "C", data: [...h3] }), i = h3[4], n = h3[5], a = h3[2], l = h3[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h3] }), [i, n] = h3;
        break;
      case "H":
        i = h3[0], t.push({ key: "L", data: [i, n] });
        break;
      case "V":
        n = h3[0], t.push({ key: "L", data: [i, n] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - a), f = n + (n - l)) : (u = i, f = n), t.push({ key: "C", data: [u, f, ...h3] }), a = h3[0], l = h3[1], i = h3[2], n = h3[3];
        break;
      }
      case "T": {
        const [u, f] = h3;
        let d = 0, p = 0;
        r === "Q" || r === "T" ? (d = i + (i - a), p = n + (n - l)) : (d = i, p = n);
        const m = i + 2 * (d - i) / 3, y = n + 2 * (p - n) / 3, b = u + 2 * (d - u) / 3, x = f + 2 * (p - f) / 3;
        t.push({ key: "C", data: [m, y, b, x, u, f] }), a = d, l = p, i = u, n = f;
        break;
      }
      case "Q": {
        const [u, f, d, p] = h3, m = i + 2 * (u - i) / 3, y = n + 2 * (f - n) / 3, b = d + 2 * (u - d) / 3, x = p + 2 * (f - p) / 3;
        t.push({ key: "C", data: [m, y, b, x, d, p] }), a = u, l = f, i = d, n = p;
        break;
      }
      case "A": {
        const u = Math.abs(h3[0]), f = Math.abs(h3[1]), d = h3[2], p = h3[3], m = h3[4], y = h3[5], b = h3[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, n, y, b, y, b] }), i = y, n = b) : (i !== y || n !== b) && (am(i, n, y, b, u, f, d, p, m).forEach(function(x) {
          t.push({ key: "C", data: x });
        }), i = y, n = b);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = s, n = o;
    }
    r = c;
  }
  return t;
}
function Gi(e11, t, r) {
  return [e11 * Math.cos(r) - t * Math.sin(r), e11 * Math.sin(r) + t * Math.cos(r)];
}
function am(e11, t, r, i, n, s, o, a, l, c) {
  const h3 = (u = o, Math.PI * u / 180);
  var u;
  let f = [], d = 0, p = 0, m = 0, y = 0;
  if (c) [d, p, m, y] = c;
  else {
    [e11, t] = Gi(e11, t, -h3), [r, i] = Gi(r, i, -h3);
    const F = (e11 - r) / 2, M = (t - i) / 2;
    let $ = F * F / (n * n) + M * M / (s * s);
    $ > 1 && ($ = Math.sqrt($), n *= $, s *= $);
    const A = n * n, P = s * s, R = A * P - A * M * M - P * F * F, q = A * M * M + P * F * F, Y = (a === l ? -1 : 1) * Math.sqrt(Math.abs(R / q));
    m = Y * n * M / s + (e11 + r) / 2, y = Y * -s * F / n + (t + i) / 2, d = Math.asin(parseFloat(((t - y) / s).toFixed(9))), p = Math.asin(parseFloat(((i - y) / s).toFixed(9))), e11 < m && (d = Math.PI - d), r < m && (p = Math.PI - p), d < 0 && (d = 2 * Math.PI + d), p < 0 && (p = 2 * Math.PI + p), l && d > p && (d -= 2 * Math.PI), !l && p > d && (p -= 2 * Math.PI);
  }
  let b = p - d;
  if (Math.abs(b) > 120 * Math.PI / 180) {
    const F = p, M = r, $ = i;
    p = l && p > d ? d + 120 * Math.PI / 180 * 1 : d + 120 * Math.PI / 180 * -1, f = am(r = m + n * Math.cos(p), i = y + s * Math.sin(p), M, $, n, s, o, 0, l, [p, F, m, y]);
  }
  b = p - d;
  const x = Math.cos(d), w = Math.sin(d), v = Math.cos(p), C = Math.sin(p), S = Math.tan(b / 4), T = 4 / 3 * n * S, O = 4 / 3 * s * S, k = [e11, t], E = [e11 + T * w, t - O * x], L = [r + T * C, i - O * v], D = [r, i];
  if (E[0] = 2 * k[0] - E[0], E[1] = 2 * k[1] - E[1], c) return [E, L, D].concat(f);
  {
    f = [E, L, D].concat(f);
    const F = [];
    for (let M = 0; M < f.length; M += 3) {
      const $ = Gi(f[M][0], f[M][1], h3), A = Gi(f[M + 1][0], f[M + 1][1], h3), P = Gi(f[M + 2][0], f[M + 2][1], h3);
      F.push([$[0], $[1], A[0], A[1], P[0], P[1]]);
    }
    return F;
  }
}
var zT = { randOffset: function(e11, t) {
  return nt(e11, t);
}, randOffsetWithRange: function(e11, t, r) {
  return sa(e11, t, r);
}, ellipse: function(e11, t, r, i, n) {
  const s = lm(r, i, n);
  return dl(e11, t, n, s).opset;
}, doubleLineOps: function(e11, t, r, i, n) {
  return hr(e11, t, r, i, n, true);
} };
function om(e11, t, r, i, n) {
  return { type: "path", ops: hr(e11, t, r, i, n) };
}
function vs(e11, t, r) {
  const i = (e11 || []).length;
  if (i > 2) {
    const n = [];
    for (let s = 0; s < i - 1; s++) n.push(...hr(e11[s][0], e11[s][1], e11[s + 1][0], e11[s + 1][1], r));
    return t && n.push(...hr(e11[i - 1][0], e11[i - 1][1], e11[0][0], e11[0][1], r)), { type: "path", ops: n };
  }
  return i === 2 ? om(e11[0][0], e11[0][1], e11[1][0], e11[1][1], r) : { type: "path", ops: [] };
}
function WT(e11, t, r, i, n) {
  return function(s, o) {
    return vs(s, true, o);
  }([[e11, t], [e11 + r, t], [e11 + r, t + i], [e11, t + i]], n);
}
function xu(e11, t) {
  if (e11.length) {
    const r = typeof e11[0][0] == "number" ? [e11] : e11, i = is(r[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : is(r[0], 1.5 * (1 + 0.22 * t.roughness), vu(t));
    for (let s = 1; s < r.length; s++) {
      const o = r[s];
      if (o.length) {
        const a = is(o, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : is(o, 1.5 * (1 + 0.22 * t.roughness), vu(t));
        for (const c of a) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && n.push(c);
      }
    }
    return { type: "path", ops: i.concat(n) };
  }
  return { type: "path", ops: [] };
}
function lm(e11, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e11 / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), s = 2 * Math.PI / n;
  let o = Math.abs(e11 / 2), a = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return o += nt(o * l, r), a += nt(a * l, r), { increment: s, rx: o, ry: a };
}
function dl(e11, t, r, i) {
  const [n, s] = Cu(i.increment, e11, t, i.rx, i.ry, 1, i.increment * sa(0.1, sa(0.4, 1, r), r), r);
  let o = aa(n, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [a] = Cu(i.increment, e11, t, i.rx, i.ry, 1.5, 0, r), l = aa(a, null, r);
    o = o.concat(l);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: o } };
}
function bu(e11, t, r, i, n, s, o, a, l) {
  const c = e11, h3 = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += nt(0.01 * u, l), f += nt(0.01 * f, l);
  let d = n, p = s;
  for (; d < 0; ) d += 2 * Math.PI, p += 2 * Math.PI;
  p - d > 2 * Math.PI && (d = 0, p = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (p - d) / 2), b = ku(y, c, h3, u, f, d, p, 1, l);
  if (!l.disableMultiStroke) {
    const x = ku(y, c, h3, u, f, d, p, 1.5, l);
    b.push(...x);
  }
  return o && (a ? b.push(...hr(c, h3, c + u * Math.cos(d), h3 + f * Math.sin(d), l), ...hr(c, h3, c + u * Math.cos(p), h3 + f * Math.sin(p), l)) : b.push({ op: "lineTo", data: [c, h3] }, { op: "lineTo", data: [c + u * Math.cos(d), h3 + f * Math.sin(d)] })), { type: "path", ops: b };
}
function wu(e11, t) {
  const r = sm(nm(Bc(e11))), i = [];
  let n = [0, 0], s = [0, 0];
  for (const { key: o, data: a } of r) switch (o) {
    case "M":
      s = [a[0], a[1]], n = [a[0], a[1]];
      break;
    case "L":
      i.push(...hr(s[0], s[1], a[0], a[1], t)), s = [a[0], a[1]];
      break;
    case "C": {
      const [l, c, h3, u, f, d] = a;
      i.push(...qT(l, c, h3, u, f, d, s, t)), s = [f, d];
      break;
    }
    case "Z":
      i.push(...hr(s[0], s[1], n[0], n[1], t)), s = [n[0], n[1]];
  }
  return { type: "path", ops: i };
}
function fo(e11, t) {
  const r = [];
  for (const i of e11) if (i.length) {
    const n = t.maxRandomnessOffset || 0, s = i.length;
    if (s > 2) {
      r.push({ op: "move", data: [i[0][0] + nt(n, t), i[0][1] + nt(n, t)] });
      for (let o = 1; o < s; o++) r.push({ op: "lineTo", data: [i[o][0] + nt(n, t), i[o][1] + nt(n, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Vr(e11, t) {
  return function(r, i) {
    let n = r.fillStyle || "hachure";
    if (!ee[n]) switch (n) {
      case "zigzag":
        ee[n] || (ee[n] = new FT(i));
        break;
      case "cross-hatch":
        ee[n] || (ee[n] = new OT(i));
        break;
      case "dots":
        ee[n] || (ee[n] = new DT(i));
        break;
      case "dashed":
        ee[n] || (ee[n] = new IT(i));
        break;
      case "zigzag-line":
        ee[n] || (ee[n] = new RT(i));
        break;
      default:
        n = "hachure", ee[n] || (ee[n] = new Tc(i));
    }
    return ee[n];
  }(t, zT).fillPolygons(e11, t);
}
function vu(e11) {
  const t = Object.assign({}, e11);
  return t.randomizer = void 0, e11.seed && (t.seed = e11.seed + 1), t;
}
function cm(e11) {
  return e11.randomizer || (e11.randomizer = new PT(e11.seed || 0)), e11.randomizer.next();
}
function sa(e11, t, r, i = 1) {
  return r.roughness * i * (cm(r) * (t - e11) + e11);
}
function nt(e11, t, r = 1) {
  return sa(-e11, e11, t, r);
}
function hr(e11, t, r, i, n, s = false) {
  const o = s ? n.disableMultiStrokeFill : n.disableMultiStroke, a = pl(e11, t, r, i, n, true, false);
  if (o) return a;
  const l = pl(e11, t, r, i, n, true, true);
  return a.concat(l);
}
function pl(e11, t, r, i, n, s, o) {
  const a = Math.pow(e11 - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(a);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h3 = n.maxRandomnessOffset || 0;
  h3 * h3 * 100 > a && (h3 = l / 10);
  const u = h3 / 2, f = 0.2 + 0.2 * cm(n);
  let d = n.bowing * n.maxRandomnessOffset * (i - t) / 200, p = n.bowing * n.maxRandomnessOffset * (e11 - r) / 200;
  d = nt(d, n, c), p = nt(p, n, c);
  const m = [], y = () => nt(u, n, c), b = () => nt(h3, n, c), x = n.preserveVertices;
  return o ? m.push({ op: "move", data: [e11 + (x ? 0 : y()), t + (x ? 0 : y())] }) : m.push({ op: "move", data: [e11 + (x ? 0 : nt(h3, n, c)), t + (x ? 0 : nt(h3, n, c))] }), o ? m.push({ op: "bcurveTo", data: [d + e11 + (r - e11) * f + y(), p + t + (i - t) * f + y(), d + e11 + 2 * (r - e11) * f + y(), p + t + 2 * (i - t) * f + y(), r + (x ? 0 : y()), i + (x ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [d + e11 + (r - e11) * f + b(), p + t + (i - t) * f + b(), d + e11 + 2 * (r - e11) * f + b(), p + t + 2 * (i - t) * f + b(), r + (x ? 0 : b()), i + (x ? 0 : b())] }), m;
}
function is(e11, t, r) {
  if (!e11.length) return [];
  const i = [];
  i.push([e11[0][0] + nt(t, r), e11[0][1] + nt(t, r)]), i.push([e11[0][0] + nt(t, r), e11[0][1] + nt(t, r)]);
  for (let n = 1; n < e11.length; n++) i.push([e11[n][0] + nt(t, r), e11[n][1] + nt(t, r)]), n === e11.length - 1 && i.push([e11[n][0] + nt(t, r), e11[n][1] + nt(t, r)]);
  return aa(i, null, r);
}
function aa(e11, t, r) {
  const i = e11.length, n = [];
  if (i > 3) {
    const s = [], o = 1 - r.curveTightness;
    n.push({ op: "move", data: [e11[1][0], e11[1][1]] });
    for (let a = 1; a + 2 < i; a++) {
      const l = e11[a];
      s[0] = [l[0], l[1]], s[1] = [l[0] + (o * e11[a + 1][0] - o * e11[a - 1][0]) / 6, l[1] + (o * e11[a + 1][1] - o * e11[a - 1][1]) / 6], s[2] = [e11[a + 1][0] + (o * e11[a][0] - o * e11[a + 2][0]) / 6, e11[a + 1][1] + (o * e11[a][1] - o * e11[a + 2][1]) / 6], s[3] = [e11[a + 1][0], e11[a + 1][1]], n.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
  } else i === 3 ? (n.push({ op: "move", data: [e11[1][0], e11[1][1]] }), n.push({ op: "bcurveTo", data: [e11[1][0], e11[1][1], e11[2][0], e11[2][1], e11[2][0], e11[2][1]] })) : i === 2 && n.push(...pl(e11[0][0], e11[0][1], e11[1][0], e11[1][1], r, true, true));
  return n;
}
function Cu(e11, t, r, i, n, s, o, a) {
  const l = [], c = [];
  if (a.roughness === 0) {
    e11 /= 4, c.push([t + i * Math.cos(-e11), r + n * Math.sin(-e11)]);
    for (let h3 = 0; h3 <= 2 * Math.PI; h3 += e11) {
      const u = [t + i * Math.cos(h3), r + n * Math.sin(h3)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + n * Math.sin(0)]), c.push([t + i * Math.cos(e11), r + n * Math.sin(e11)]);
  } else {
    const h3 = nt(0.5, a) - Math.PI / 2;
    c.push([nt(s, a) + t + 0.9 * i * Math.cos(h3 - e11), nt(s, a) + r + 0.9 * n * Math.sin(h3 - e11)]);
    const u = 2 * Math.PI + h3 - 0.01;
    for (let f = h3; f < u; f += e11) {
      const d = [nt(s, a) + t + i * Math.cos(f), nt(s, a) + r + n * Math.sin(f)];
      l.push(d), c.push(d);
    }
    c.push([nt(s, a) + t + i * Math.cos(h3 + 2 * Math.PI + 0.5 * o), nt(s, a) + r + n * Math.sin(h3 + 2 * Math.PI + 0.5 * o)]), c.push([nt(s, a) + t + 0.98 * i * Math.cos(h3 + o), nt(s, a) + r + 0.98 * n * Math.sin(h3 + o)]), c.push([nt(s, a) + t + 0.9 * i * Math.cos(h3 + 0.5 * o), nt(s, a) + r + 0.9 * n * Math.sin(h3 + 0.5 * o)]);
  }
  return [c, l];
}
function ku(e11, t, r, i, n, s, o, a, l) {
  const c = s + nt(0.1, l), h3 = [];
  h3.push([nt(a, l) + t + 0.9 * i * Math.cos(c - e11), nt(a, l) + r + 0.9 * n * Math.sin(c - e11)]);
  for (let u = c; u <= o; u += e11) h3.push([nt(a, l) + t + i * Math.cos(u), nt(a, l) + r + n * Math.sin(u)]);
  return h3.push([t + i * Math.cos(o), r + n * Math.sin(o)]), h3.push([t + i * Math.cos(o), r + n * Math.sin(o)]), aa(h3, null, l);
}
function qT(e11, t, r, i, n, s, o, a) {
  const l = [], c = [a.maxRandomnessOffset || 1, (a.maxRandomnessOffset || 1) + 0.3];
  let h3 = [0, 0];
  const u = a.disableMultiStroke ? 1 : 2, f = a.preserveVertices;
  for (let d = 0; d < u; d++) d === 0 ? l.push({ op: "move", data: [o[0], o[1]] }) : l.push({ op: "move", data: [o[0] + (f ? 0 : nt(c[0], a)), o[1] + (f ? 0 : nt(c[0], a))] }), h3 = f ? [n, s] : [n + nt(c[d], a), s + nt(c[d], a)], l.push({ op: "bcurveTo", data: [e11 + nt(c[d], a), t + nt(c[d], a), r + nt(c[d], a), i + nt(c[d], a), h3[0], h3[1]] });
  return l;
}
function Vi(e11) {
  return [...e11];
}
function _u(e11, t = 0) {
  const r = e11.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(Vi(e11[0]), Vi(e11[1]), Vi(e11[2]), Vi(e11[2]));
  else {
    const n = [];
    n.push(e11[0], e11[0]);
    for (let a = 1; a < e11.length; a++) n.push(e11[a]), a === e11.length - 1 && n.push(e11[a]);
    const s = [], o = 1 - t;
    i.push(Vi(n[0]));
    for (let a = 1; a + 2 < n.length; a++) {
      const l = n[a];
      s[0] = [l[0], l[1]], s[1] = [l[0] + (o * n[a + 1][0] - o * n[a - 1][0]) / 6, l[1] + (o * n[a + 1][1] - o * n[a - 1][1]) / 6], s[2] = [n[a + 1][0] + (o * n[a][0] - o * n[a + 2][0]) / 6, n[a + 1][1] + (o * n[a][1] - o * n[a + 2][1]) / 6], s[3] = [n[a + 1][0], n[a + 1][1]], i.push(s[1], s[2], s[3]);
    }
  }
  return i;
}
function Cs(e11, t) {
  return Math.pow(e11[0] - t[0], 2) + Math.pow(e11[1] - t[1], 2);
}
function HT(e11, t, r) {
  const i = Cs(t, r);
  if (i === 0) return Cs(e11, t);
  let n = ((e11[0] - t[0]) * (r[0] - t[0]) + (e11[1] - t[1]) * (r[1] - t[1])) / i;
  return n = Math.max(0, Math.min(1, n)), Cs(e11, br(t, r, n));
}
function br(e11, t, r) {
  return [e11[0] + (t[0] - e11[0]) * r, e11[1] + (t[1] - e11[1]) * r];
}
function gl(e11, t, r, i) {
  const n = i || [];
  if (function(a, l) {
    const c = a[l + 0], h3 = a[l + 1], u = a[l + 2], f = a[l + 3];
    let d = 3 * h3[0] - 2 * c[0] - f[0];
    d *= d;
    let p = 3 * h3[1] - 2 * c[1] - f[1];
    p *= p;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, d < m && (d = m), p < y && (p = y), d + p;
  }(e11, t) < r) {
    const a = e11[t + 0];
    n.length ? (s = n[n.length - 1], o = a, Math.sqrt(Cs(s, o)) > 1 && n.push(a)) : n.push(a), n.push(e11[t + 3]);
  } else {
    const l = e11[t + 0], c = e11[t + 1], h3 = e11[t + 2], u = e11[t + 3], f = br(l, c, 0.5), d = br(c, h3, 0.5), p = br(h3, u, 0.5), m = br(f, d, 0.5), y = br(d, p, 0.5), b = br(m, y, 0.5);
    gl([l, f, m, b], 0, r, n), gl([b, y, p, u], 0, r, n);
  }
  var s, o;
  return n;
}
function jT(e11, t) {
  return oa(e11, 0, e11.length, t);
}
function oa(e11, t, r, i, n) {
  const s = n || [], o = e11[t], a = e11[r - 1];
  let l = 0, c = 1;
  for (let h3 = t + 1; h3 < r - 1; ++h3) {
    const u = HT(e11[h3], o, a);
    u > l && (l = u, c = h3);
  }
  return Math.sqrt(l) > i ? (oa(e11, t, c + 1, i, s), oa(e11, c, r, i, s)) : (s.length || s.push(o), s.push(a)), s;
}
function po(e11, t = 0.15, r) {
  const i = [], n = (e11.length - 1) / 3;
  for (let s = 0; s < n; s++)
    gl(e11, 3 * s, t, i);
  return r && r > 0 ? oa(i, 0, i.length, r) : i;
}
var le = "none";
var la = class {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: false, disableMultiStrokeFill: false, preserveVertices: false, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, n, s) {
    const o = this._o(s);
    return this._d("line", [om(t, r, i, n, o)], o);
  }
  rectangle(t, r, i, n, s) {
    const o = this._o(s), a = [], l = WT(t, r, i, n, o);
    if (o.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + n], [t, r + n]];
      o.fillStyle === "solid" ? a.push(fo([c], o)) : a.push(Vr([c], o));
    }
    return o.stroke !== le && a.push(l), this._d("rectangle", a, o);
  }
  ellipse(t, r, i, n, s) {
    const o = this._o(s), a = [], l = lm(i, n, o), c = dl(t, r, o, l);
    if (o.fill) if (o.fillStyle === "solid") {
      const h3 = dl(t, r, o, l).opset;
      h3.type = "fillPath", a.push(h3);
    } else a.push(Vr([c.estimatedPoints], o));
    return o.stroke !== le && a.push(c.opset), this._d("ellipse", a, o);
  }
  circle(t, r, i, n) {
    const s = this.ellipse(t, r, i, i, n);
    return s.shape = "circle", s;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [vs(t, false, i)], i);
  }
  arc(t, r, i, n, s, o, a = false, l) {
    const c = this._o(l), h3 = [], u = bu(t, r, i, n, s, o, a, true, c);
    if (a && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = true;
      const d = bu(t, r, i, n, s, o, true, false, f);
      d.type = "fillPath", h3.push(d);
    } else h3.push(function(f, d, p, m, y, b, x) {
      const w = f, v = d;
      let C = Math.abs(p / 2), S = Math.abs(m / 2);
      C += nt(0.01 * C, x), S += nt(0.01 * S, x);
      let T = y, O = b;
      for (; T < 0; ) T += 2 * Math.PI, O += 2 * Math.PI;
      O - T > 2 * Math.PI && (T = 0, O = 2 * Math.PI);
      const k = (O - T) / x.curveStepCount, E = [];
      for (let L = T; L <= O; L += k) E.push([w + C * Math.cos(L), v + S * Math.sin(L)]);
      return E.push([w + C * Math.cos(O), v + S * Math.sin(O)]), E.push([w, v]), Vr([E], x);
    }(t, r, i, n, s, o, c));
    return c.stroke !== le && h3.push(u), this._d("arc", h3, c);
  }
  curve(t, r) {
    const i = this._o(r), n = [], s = xu(t, i);
    if (i.fill && i.fill !== le) if (i.fillStyle === "solid") {
      const o = xu(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(o.ops) });
    } else {
      const o = [], a = t;
      if (a.length) {
        const l = typeof a[0][0] == "number" ? [a] : a;
        for (const c of l) c.length < 3 ? o.push(...c) : c.length === 3 ? o.push(...po(_u([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : o.push(...po(_u(c), 10, (1 + i.roughness) / 2));
      }
      o.length && n.push(Vr([o], i));
    }
    return i.stroke !== le && n.push(s), this._d("curve", n, i);
  }
  polygon(t, r) {
    const i = this._o(r), n = [], s = vs(t, true, i);
    return i.fill && (i.fillStyle === "solid" ? n.push(fo([t], i)) : n.push(Vr([t], i))), i.stroke !== le && n.push(s), this._d("polygon", n, i);
  }
  path(t, r) {
    const i = this._o(r), n = [];
    if (!t) return this._d("path", n, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = i.fill && i.fill !== "transparent" && i.fill !== le, o = i.stroke !== le, a = !!(i.simplification && i.simplification < 1), l = function(h3, u, f) {
      const d = sm(nm(Bc(h3))), p = [];
      let m = [], y = [0, 0], b = [];
      const x = () => {
        b.length >= 4 && m.push(...po(b, u)), b = [];
      }, w = () => {
        x(), m.length && (p.push(m), m = []);
      };
      for (const { key: C, data: S } of d) switch (C) {
        case "M":
          w(), y = [S[0], S[1]], m.push(y);
          break;
        case "L":
          x(), m.push([S[0], S[1]]);
          break;
        case "C":
          if (!b.length) {
            const T = m.length ? m[m.length - 1] : y;
            b.push([T[0], T[1]]);
          }
          b.push([S[0], S[1]]), b.push([S[2], S[3]]), b.push([S[4], S[5]]);
          break;
        case "Z":
          x(), m.push([y[0], y[1]]);
      }
      if (w(), !f) return p;
      const v = [];
      for (const C of p) {
        const S = jT(C, f);
        S.length && v.push(S);
      }
      return v;
    }(t, 1, a ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = wu(t, i);
    if (s) if (i.fillStyle === "solid") if (l.length === 1) {
      const h3 = wu(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(h3.ops) });
    } else n.push(fo(l, i));
    else n.push(Vr(l, i));
    return o && (a ? l.forEach((h3) => {
      n.push(vs(h3, false, i));
    }) : n.push(c)), this._d("path", n, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const n of t.ops) {
      const s = typeof r == "number" && r >= 0 ? n.data.map((o) => +o.toFixed(r)) : n.data;
      switch (n.op) {
        case "move":
          i += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          i += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          i += `L${s[0]} ${s[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, n = [];
    for (const s of r) {
      let o = null;
      switch (s.type) {
        case "path":
          o = { d: this.opsToPath(s), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: le };
          break;
        case "fillPath":
          o = { d: this.opsToPath(s), stroke: le, strokeWidth: 0, fill: i.fill || le };
          break;
        case "fillSketch":
          o = this.fillSketch(s, i);
      }
      o && n.push(o);
    }
    return n;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || le, strokeWidth: i, fill: le };
  }
  _mergedShape(t) {
    return t.filter((r, i) => i === 0 || r.op !== "move");
  }
};
var UT = class {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new la(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.ctx, s = t.options.fixedDecimalPlaceDigits;
    for (const o of r) switch (o.type) {
      case "path":
        n.save(), n.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, n.lineWidth = i.strokeWidth, i.strokeLineDash && n.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (n.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(n, o, s), n.restore();
        break;
      case "fillPath": {
        n.save(), n.fillStyle = i.fill || "";
        const a = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(n, o, s, a), n.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(n, o, i);
    }
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = n, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, n = "nonzero") {
    t.beginPath();
    for (const s of r.ops) {
      const o = typeof i == "number" && i >= 0 ? s.data.map((a) => +a.toFixed(i)) : s.data;
      switch (s.op) {
        case "move":
          t.moveTo(o[0], o[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "lineTo":
          t.lineTo(o[0], o[1]);
      }
    }
    r.type === "fillPath" ? t.fill(n) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, n, s) {
    const o = this.gen.line(t, r, i, n, s);
    return this.draw(o), o;
  }
  rectangle(t, r, i, n, s) {
    const o = this.gen.rectangle(t, r, i, n, s);
    return this.draw(o), o;
  }
  ellipse(t, r, i, n, s) {
    const o = this.gen.ellipse(t, r, i, n, s);
    return this.draw(o), o;
  }
  circle(t, r, i, n) {
    const s = this.gen.circle(t, r, i, n);
    return this.draw(s), s;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, n, s, o, a = false, l) {
    const c = this.gen.arc(t, r, i, n, s, o, a, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
};
var ns = "http://www.w3.org/2000/svg";
var YT = class {
  constructor(t, r) {
    this.svg = t, this.gen = new la(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, s = n.createElementNS(ns, "g"), o = t.options.fixedDecimalPlaceDigits;
    for (const a of r) {
      let l = null;
      switch (a.type) {
        case "path":
          l = n.createElementNS(ns, "path"), l.setAttribute("d", this.opsToPath(a, o)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = n.createElementNS(ns, "path"), l.setAttribute("d", this.opsToPath(a, o)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(n, a, i);
      }
      l && s.appendChild(l);
    }
    return s;
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2);
    const s = t.createElementNS(ns, "path");
    return s.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), s.setAttribute("stroke", i.fill || ""), s.setAttribute("stroke-width", n + ""), s.setAttribute("fill", "none"), i.fillLineDash && s.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), s;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, n, s) {
    const o = this.gen.line(t, r, i, n, s);
    return this.draw(o);
  }
  rectangle(t, r, i, n, s) {
    const o = this.gen.rectangle(t, r, i, n, s);
    return this.draw(o);
  }
  ellipse(t, r, i, n, s) {
    const o = this.gen.ellipse(t, r, i, n, s);
    return this.draw(o);
  }
  circle(t, r, i, n) {
    const s = this.gen.circle(t, r, i, n);
    return this.draw(s);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, n, s, o, a = false, l) {
    const c = this.gen.arc(t, r, i, n, s, o, a, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
};
var G = { canvas: (e11, t) => new UT(e11, t), svg: (e11, t) => new YT(e11, t), generator: (e11) => new la(e11), newSeed: () => la.newSeed() };
var ot = g(async (e11, t, r) => {
  var _a3, _b2;
  let i;
  const n = t.useHtmlLabels || Dt((_a3 = gt()) == null ? void 0 : _a3.htmlLabels);
  r ? i = r : i = "node default";
  const s = e11.insert("g").attr("class", i).attr("id", t.domId || t.id), o = s.insert("g").attr("class", "label").attr("style", Zt(t.labelStyle));
  let a;
  t.label === void 0 ? a = "" : a = typeof t.label == "string" ? t.label : t.label[0];
  const l = await dr(o, Er(Nr(a), gt()), {
    useHtmlLabels: n,
    width: t.width || ((_b2 = gt().flowchart) == null ? void 0 : _b2.wrappingWidth),
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h3 = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (n) {
    const u = l.children[0], f = dt(l), d = u.getElementsByTagName("img");
    if (d) {
      const p = a.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function b() {
              if (m.style.display = "flex", m.style.flexDirection = "column", p) {
                const x = gt().fontSize ? gt().fontSize : window.getComputedStyle(document.body).fontSize, w = 5, [v = Cf.fontSize] = Ea(x), C = v * w + "px";
                m.style.minWidth = C, m.style.maxWidth = C;
              } else
                m.style.width = "100%";
              y(m);
            }
            g(b, "setupImage"), setTimeout(() => {
              m.complete && b();
            }), m.addEventListener("error", b), m.addEventListener("load", b);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  }
  return n ? o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : o.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: s, bbox: c, halfPadding: h3, label: o };
}, "labelHelper");
var go = g(async (e11, t, r) => {
  var _a3, _b2, _c2, _d2, _e2, _f2;
  const i = r.useHtmlLabels || Dt((_b2 = (_a3 = gt()) == null ? void 0 : _a3.flowchart) == null ? void 0 : _b2.htmlLabels), n = e11.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), s = await dr(n, Er(Nr(t), gt()), {
    useHtmlLabels: i,
    width: r.width || ((_d2 = (_c2 = gt()) == null ? void 0 : _c2.flowchart) == null ? void 0 : _d2.wrappingWidth),
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let o = s.getBBox();
  const a = r.padding / 2;
  if (Dt((_f2 = (_e2 = gt()) == null ? void 0 : _e2.flowchart) == null ? void 0 : _f2.htmlLabels)) {
    const l = s.children[0], c = dt(s);
    o = l.getBoundingClientRect(), c.attr("width", o.width), c.attr("height", o.height);
  }
  return i ? n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : n.attr("transform", "translate(0, " + -o.height / 2 + ")"), r.centerLabel && n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), n.insert("rect", ":first-child"), { shapeSvg: e11, bbox: o, halfPadding: a, label: n };
}, "insertLabel");
var K = g((e11, t) => {
  const r = t.node().getBBox();
  e11.width = r.width, e11.height = r.height;
}, "updateNodeBounds");
var st = g((e11, t) => (e11.look === "handDrawn" ? "rough-node" : "node") + " " + e11.cssClasses + " " + (t || ""), "getNodeClasses");
function pt(e11) {
  const t = e11.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
g(pt, "createPathFromPoints");
function ur(e11, t, r, i, n, s) {
  const o = [], l = r - e11, c = i - t, h3 = l / s, u = 2 * Math.PI / h3, f = t + c / 2;
  for (let d = 0; d <= 50; d++) {
    const p = d / 50, m = e11 + p * l, y = f + n * Math.sin(u * (m - e11));
    o.push({ x: m, y });
  }
  return o;
}
g(ur, "generateFullSineWavePoints");
function Lc(e11, t, r, i, n, s) {
  const o = [], a = n * Math.PI / 180, h3 = (s * Math.PI / 180 - a) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = a + u * h3, d = e11 + r * Math.cos(f), p = t + r * Math.sin(f);
    o.push({ x: -d, y: -p });
  }
  return o;
}
g(Lc, "generateCirclePoints");
var GT = g((e11, t) => {
  var r = e11.x, i = e11.y, n = t.x - r, s = t.y - i, o = e11.width / 2, a = e11.height / 2, l, c;
  return Math.abs(s) * o > Math.abs(n) * a ? (s < 0 && (a = -a), l = s === 0 ? 0 : a * n / s, c = a) : (n < 0 && (o = -o), l = o, c = n === 0 ? 0 : o * s / n), { x: r + l, y: i + c };
}, "intersectRect");
var Ei = GT;
function hm(e11, t) {
  t && e11.attr("style", t);
}
g(hm, "applyStyle");
async function um(e11) {
  const t = dt(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div");
  let i = e11.label;
  e11.label && gi(e11.label) && (i = await Dl(e11.label.replace(Ti.lineBreakRegex, `
`), gt()));
  const n = e11.isNode ? "nodeLabel" : "edgeLabel";
  return r.html(
    '<span class="' + n + '" ' + (e11.labelStyle ? 'style="' + e11.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
    ">" + i + "</span>"
  ), hm(r, e11.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
g(um, "addHtmlLabel");
var VT = g(async (e11, t, r, i) => {
  let n = e11 || "";
  if (typeof n == "object" && (n = n[0]), Dt(gt().flowchart.htmlLabels)) {
    n = n.replace(/\\n|\n/g, "<br />"), N.info("vertexText" + n);
    const s = {
      isNode: i,
      label: Nr(n).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (a) => `<i class='${a.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await um(s);
  } else {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "text");
    s.setAttribute("style", t.replace("color:", "fill:"));
    let o = [];
    typeof n == "string" ? o = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? o = n : o = [];
    for (const a of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = a.trim(), s.appendChild(l);
    }
    return s;
  }
}, "createLabel");
var Sr = VT;
var Je = g((e11, t, r, i, n) => [
  "M",
  e11 + n,
  t,
  // Move to the first point
  "H",
  e11 + r - n,
  // Draw horizontal line to the beginning of the right corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e11 + r,
  t + n,
  // Draw arc to the right top corner
  "V",
  t + i - n,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e11 + r - n,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e11 + n,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e11,
  t + i - n,
  // Draw arc to the left bottom corner
  "V",
  t + n,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e11 + n,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD");
var fm = g(async (e11, t) => {
  N.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: s, clusterBorder: o } = i, { labelStyles: a, nodeStyles: l, borderStyles: c, backgroundStyles: h3 } = Z(t), u = e11.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Dt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), p = await dr(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true
  });
  let m = p.getBBox();
  if (Dt(r.flowchart.htmlLabels)) {
    const T = p.children[0], O = dt(p);
    m = T.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height, x = t.x - y / 2, w = t.y - b / 2;
  N.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const T = G.svg(u), O = X(t, {
      roughness: 0.7,
      fill: s,
      // fill: 'red',
      stroke: o,
      fillWeight: 3,
      seed: n
    }), k = T.path(Je(x, w, y, b, 0), O);
    v = u.insert(() => (N.debug("Rough node insert CXC", k), k), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h3.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", x).attr("y", w).attr("width", y).attr("height", b);
  const { subGraphTitleTopMargin: C } = Gl(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + C})`
  ), a) {
    const T = d.select("span");
    T && T.attr("style", a);
  }
  const S = v.node().getBBox();
  return t.offsetX = 0, t.width = S.width, t.height = S.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(T) {
    return Ei(t, T);
  }, { cluster: u, labelBBox: m };
}, "rect");
var XT = g((e11, t) => {
  const r = e11.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), n = 0 * t.padding, s = n / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - s).attr("y", t.y - t.height / 2 - s).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
  const o = i.node().getBBox();
  return t.width = o.width, t.height = o.height, t.intersect = function(a) {
    return Ei(t, a);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup");
var KT = g(async (e11, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: n } = r, { altBackground: s, compositeBackground: o, compositeTitleBackground: a, nodeBorder: l } = i, c = e11.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h3 = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const d = u.node().appendChild(await Sr(t.label, t.labelStyle, void 0, true));
  let p = d.getBBox();
  if (Dt(r.flowchart.htmlLabels)) {
    const k = d.children[0], E = dt(d);
    p = k.getBoundingClientRect(), E.attr("width", p.width), E.attr("height", p.height);
  }
  const m = 0 * t.padding, y = m / 2, b = (t.width <= p.width + t.padding ? p.width + t.padding : t.width) + m;
  t.width <= p.width + t.padding ? t.diff = (b - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height + m, w = t.height + m - p.height - 6, v = t.x - b / 2, C = t.y - x / 2;
  t.width = b;
  const S = t.y - t.height / 2 - y + p.height + 2;
  let T;
  if (t.look === "handDrawn") {
    const k = t.cssClasses.includes("statediagram-cluster-alt"), E = G.svg(c), L = t.rx || t.ry ? E.path(Je(v, C, b, x, 10), {
      roughness: 0.7,
      fill: a,
      fillStyle: "solid",
      stroke: l,
      seed: n
    }) : E.rectangle(v, C, b, x, { seed: n });
    T = c.insert(() => L, ":first-child");
    const D = E.rectangle(v, S, b, w, {
      fill: k ? s : o,
      fillStyle: k ? "hachure" : "solid",
      stroke: l,
      seed: n
    });
    T = c.insert(() => L, ":first-child"), f = c.insert(() => D);
  } else
    T = h3.insert("rect", ":first-child"), T.attr("class", "outer").attr("x", v).attr("y", C).attr("width", b).attr("height", x).attr("data-look", t.look), f.attr("class", "inner").attr("x", v).attr("y", S).attr("width", b).attr("height", w);
  u.attr(
    "transform",
    `translate(${t.x - p.width / 2}, ${C + 1 - (Dt(r.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const O = T.node().getBBox();
  return t.height = O.height, t.offsetX = 0, t.offsetY = p.height - t.padding / 2, t.labelBBox = p, t.intersect = function(k) {
    return Ei(t, k);
  }, { cluster: c, labelBBox: p };
}, "roundedWithTitle");
var ZT = g(async (e11, t) => {
  N.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: s, clusterBorder: o } = i, { labelStyles: a, nodeStyles: l, borderStyles: c, backgroundStyles: h3 } = Z(t), u = e11.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Dt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), p = await dr(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true,
    width: t.width
  });
  let m = p.getBBox();
  if (Dt(r.flowchart.htmlLabels)) {
    const T = p.children[0], O = dt(p);
    m = T.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height, x = t.x - y / 2, w = t.y - b / 2;
  N.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const T = G.svg(u), O = X(t, {
      roughness: 0.7,
      fill: s,
      // fill: 'red',
      stroke: o,
      fillWeight: 4,
      seed: n
    }), k = T.path(Je(x, w, y, b, t.rx), O);
    v = u.insert(() => (N.debug("Rough node insert CXC", k), k), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h3.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", x).attr("y", w).attr("width", y).attr("height", b);
  const { subGraphTitleTopMargin: C } = Gl(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + C})`
  ), a) {
    const T = d.select("span");
    T && T.attr("style", a);
  }
  const S = v.node().getBBox();
  return t.offsetX = 0, t.width = S.width, t.height = S.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(T) {
    return Ei(t, T);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection");
var QT = g((e11, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: n } = r, { nodeBorder: s } = i, o = e11.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), a = o.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h3 = t.height + l, u = t.x - c / 2, f = t.y - h3 / 2;
  t.width = c;
  let d;
  if (t.look === "handDrawn") {
    const y = G.svg(o).rectangle(u, f, c, h3, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: s,
      seed: n
    });
    d = o.insert(() => y, ":first-child");
  } else
    d = a.insert("rect", ":first-child"), d.attr("class", "divider").attr("x", u).attr("y", f).attr("width", c).attr("height", h3).attr("data-look", t.look);
  const p = d.node().getBBox();
  return t.height = p.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Ei(t, m);
  }, { cluster: o, labelBBox: {} };
}, "divider");
var JT = fm;
var tB = {
  rect: fm,
  squareRect: JT,
  roundedWithTitle: KT,
  noteGroup: XT,
  divider: QT,
  kanbanSection: ZT
};
var dm = /* @__PURE__ */ new Map();
var eB = g(async (e11, t) => {
  const r = t.shape || "rect", i = await tB[r](e11, t);
  return dm.set(t.id, i), i;
}, "insertCluster");
var f3 = g(() => {
  dm = /* @__PURE__ */ new Map();
}, "clear");
function pm(e11, t) {
  return e11.intersect(t);
}
g(pm, "intersectNode");
var rB = pm;
function gm(e11, t, r, i) {
  var n = e11.x, s = e11.y, o = n - i.x, a = s - i.y, l = Math.sqrt(t * t * a * a + r * r * o * o), c = Math.abs(t * r * o / l);
  i.x < n && (c = -c);
  var h3 = Math.abs(t * r * a / l);
  return i.y < s && (h3 = -h3), { x: n + c, y: s + h3 };
}
g(gm, "intersectEllipse");
var mm = gm;
function ym(e11, t, r) {
  return mm(e11, t, t, r);
}
g(ym, "intersectCircle");
var iB = ym;
function xm(e11, t, r, i) {
  var n, s, o, a, l, c, h3, u, f, d, p, m, y, b, x;
  if (n = t.y - e11.y, o = e11.x - t.x, l = t.x * e11.y - e11.x * t.y, f = n * r.x + o * r.y + l, d = n * i.x + o * i.y + l, !(f !== 0 && d !== 0 && ml(f, d)) && (s = i.y - r.y, a = r.x - i.x, c = i.x * r.y - r.x * i.y, h3 = s * e11.x + a * e11.y + c, u = s * t.x + a * t.y + c, !(h3 !== 0 && u !== 0 && ml(h3, u)) && (p = n * a - s * o, p !== 0)))
    return m = Math.abs(p / 2), y = o * c - a * l, b = y < 0 ? (y - m) / p : (y + m) / p, y = s * l - n * c, x = y < 0 ? (y - m) / p : (y + m) / p, { x: b, y: x };
}
g(xm, "intersectLine");
function ml(e11, t) {
  return e11 * t > 0;
}
g(ml, "sameSign");
var nB = xm;
function bm(e11, t, r) {
  let i = e11.x, n = e11.y, s = [], o = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h3) {
    o = Math.min(o, h3.x), a = Math.min(a, h3.y);
  }) : (o = Math.min(o, t.x), a = Math.min(a, t.y));
  let l = i - e11.width / 2 - o, c = n - e11.height / 2 - a;
  for (let h3 = 0; h3 < t.length; h3++) {
    let u = t[h3], f = t[h3 < t.length - 1 ? h3 + 1 : 0], d = nB(
      e11,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    d && s.push(d);
  }
  return s.length ? (s.length > 1 && s.sort(function(h3, u) {
    let f = h3.x - r.x, d = h3.y - r.y, p = Math.sqrt(f * f + d * d), m = u.x - r.x, y = u.y - r.y, b = Math.sqrt(m * m + y * y);
    return p < b ? -1 : p === b ? 0 : 1;
  }), s[0]) : e11;
}
g(bm, "intersectPolygon");
var sB = bm;
var j = {
  node: rB,
  circle: iB,
  ellipse: mm,
  polygon: sB,
  rect: Ei
};
function wm(e11, t) {
  const { labelStyles: r } = Z(t);
  t.labelStyle = r;
  const i = st(t);
  let n = i;
  i || (n = "anchor");
  const s = e11.insert("g").attr("class", n).attr("id", t.domId || t.id), o = 1, { cssStyles: a } = t, l = G.svg(s), c = X(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h3 = l.circle(0, 0, o * 2, c), u = s.insert(() => h3, ":first-child");
  return u.attr("class", "anchor").attr("style", Zt(a)), K(t, u), t.intersect = function(f) {
    return N.info("Circle intersect", t, o, f), j.circle(t, o, f);
  }, s;
}
g(wm, "anchor");
function yl(e11, t, r, i, n, s, o) {
  const l = (e11 + r) / 2, c = (t + i) / 2, h3 = Math.atan2(i - t, r - e11), u = (r - e11) / 2, f = (i - t) / 2, d = u / n, p = f / s, m = Math.sqrt(d ** 2 + p ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), b = l + y * s * Math.sin(h3) * (o ? -1 : 1), x = c - y * n * Math.cos(h3) * (o ? -1 : 1), w = Math.atan2((t - x) / s, (e11 - b) / n);
  let C = Math.atan2((i - x) / s, (r - b) / n) - w;
  o && C < 0 && (C += 2 * Math.PI), !o && C > 0 && (C -= 2 * Math.PI);
  const S = [];
  for (let T = 0; T < 20; T++) {
    const O = T / 19, k = w + O * C, E = b + n * Math.cos(k), L = x + s * Math.sin(k);
    S.push({ x: E, y: L });
  }
  return S;
}
g(yl, "generateArcPoints");
async function vm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = s.width + t.padding + 20, a = s.height + t.padding, l = a / 2, c = l / (2.5 + a / 50), { cssStyles: h3 } = t, u = [
    { x: o / 2, y: -a / 2 },
    { x: -o / 2, y: -a / 2 },
    ...yl(-o / 2, -a / 2, -o / 2, a / 2, c, l, false),
    { x: o / 2, y: a / 2 },
    ...yl(o / 2, a / 2, o / 2, -a / 2, c, l, true)
  ], f = G.svg(n), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = pt(u), m = f.path(p, d), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h3 && t.look !== "handDrawn" && y.selectAll("path").attr("style", h3), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), K(t, y), t.intersect = function(b) {
    return j.polygon(t, u, b);
  }, n;
}
g(vm, "bowTieRect");
function tr(e11, t, r, i) {
  return e11.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
g(tr, "insertPolygonShape");
async function Cm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = s.height + t.padding, a = 12, l = s.width + t.padding + a, c = 0, h3 = l, u = -o, f = 0, d = [
    { x: c + a, y: u },
    { x: h3, y: u },
    { x: h3, y: f },
    { x: c, y: f },
    { x: c, y: u + a },
    { x: c + a, y: u }
  ];
  let p;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = G.svg(n), b = X(t, {}), x = pt(d), w = y.path(x, b);
    p = n.insert(() => w, ":first-child").attr("transform", `translate(${-l / 2}, ${o / 2})`), m && p.attr("style", m);
  } else
    p = tr(n, l, o, d);
  return i && p.attr("style", i), K(t, p), t.intersect = function(y) {
    return j.polygon(t, d, y);
  }, n;
}
g(Cm, "card");
function km(e11, t) {
  const { nodeStyles: r } = Z(t);
  t.label = "";
  const i = e11.insert("g").attr("class", st(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, s = Math.max(28, t.width ?? 0), o = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ], a = G.svg(i), l = X(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = pt(o), h3 = a.path(c, l), u = i.insert(() => h3, ":first-child");
  return n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return j.polygon(t, o, f);
  }, i;
}
g(km, "choice");
async function _m(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, halfPadding: o } = await ot(e11, t, st(t)), a = s.width / 2 + o;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h3 = G.svg(n), u = X(t, {}), f = h3.circle(0, 0, a * 2, u);
    l = n.insert(() => f, ":first-child"), l.attr("class", "basic label-container").attr("style", Zt(c));
  } else
    l = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", a).attr("cx", 0).attr("cy", 0);
  return K(t, l), t.intersect = function(h3) {
    return N.info("Circle intersect", t, a, h3), j.circle(t, a, h3);
  }, n;
}
g(_m, "circle");
function Sm(e11) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e11 * 2, n = { x: i / 2 * t, y: i / 2 * r }, s = { x: -(i / 2) * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: -(i / 2) * r }, a = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${s.x},${s.y} L ${a.x},${a.y}
                   M ${n.x},${n.y} L ${o.x},${o.y}`;
}
g(Sm, "createLine");
function Tm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r, t.label = "";
  const n = e11.insert("g").attr("class", st(t)).attr("id", t.domId ?? t.id), s = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: o } = t, a = G.svg(n), l = X(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = a.circle(0, 0, s * 2, l), h3 = Sm(s), u = a.path(h3, l), f = n.insert(() => c, ":first-child");
  return f.insert(() => u), o && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), K(t, f), t.intersect = function(d) {
    return N.info("crossedCircle intersect", t, { radius: s, point: d }), j.circle(t, s, d);
  }, n;
}
g(Tm, "crossedCircle");
function qe(e11, t, r, i = 100, n = 0, s = 180) {
  const o = [], a = n * Math.PI / 180, h3 = (s * Math.PI / 180 - a) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = a + u * h3, d = e11 + r * Math.cos(f), p = t + r * Math.sin(f);
    o.push({ x: -d, y: -p });
  }
  return o;
}
g(qe, "generateCirclePoints");
async function Bm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = s.width + (t.padding ?? 0), l = s.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h3 } = t, u = [
    ...qe(a / 2, -l / 2, c, 30, -90, 0),
    { x: -a / 2 - c, y: c },
    ...qe(a / 2 + c * 2, -c, c, 20, -180, -270),
    ...qe(a / 2 + c * 2, c, c, 20, -90, -180),
    { x: -a / 2 - c, y: -l / 2 },
    ...qe(a / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: a / 2, y: -l / 2 - c },
    { x: -a / 2, y: -l / 2 - c },
    ...qe(a / 2, -l / 2, c, 20, -90, 0),
    { x: -a / 2 - c, y: -c },
    ...qe(a / 2 + a * 0.1, -c, c, 20, -180, -270),
    ...qe(a / 2 + a * 0.1, c, c, 20, -90, -180),
    { x: -a / 2 - c, y: l / 2 },
    ...qe(a / 2, l / 2, c, 20, 0, 90),
    { x: -a / 2, y: l / 2 + c },
    { x: a / 2, y: l / 2 + c }
  ], d = G.svg(n), p = X(t, { fill: "none" });
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const y = pt(u).replace("Z", ""), b = d.path(y, p), x = pt(f), w = d.path(x, { ...p }), v = n.insert("g", ":first-child");
  return v.insert(() => w, ":first-child").attr("stroke-opacity", 0), v.insert(() => b, ":first-child"), v.attr("class", "text"), h3 && t.look !== "handDrawn" && v.selectAll("path").attr("style", h3), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${c}, 0)`), o.attr(
    "transform",
    `translate(${-a / 2 + c - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, v), t.intersect = function(C) {
    return j.polygon(t, f, C);
  }, n;
}
g(Bm, "curlyBraceLeft");
function He(e11, t, r, i = 100, n = 0, s = 180) {
  const o = [], a = n * Math.PI / 180, h3 = (s * Math.PI / 180 - a) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = a + u * h3, d = e11 + r * Math.cos(f), p = t + r * Math.sin(f);
    o.push({ x: d, y: p });
  }
  return o;
}
g(He, "generateCirclePoints");
async function Lm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = s.width + (t.padding ?? 0), l = s.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h3 } = t, u = [
    ...He(a / 2, -l / 2, c, 20, -90, 0),
    { x: a / 2 + c, y: -c },
    ...He(a / 2 + c * 2, -c, c, 20, -180, -270),
    ...He(a / 2 + c * 2, c, c, 20, -90, -180),
    { x: a / 2 + c, y: l / 2 },
    ...He(a / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: -a / 2, y: -l / 2 - c },
    { x: a / 2, y: -l / 2 - c },
    ...He(a / 2, -l / 2, c, 20, -90, 0),
    { x: a / 2 + c, y: -c },
    ...He(a / 2 + c * 2, -c, c, 20, -180, -270),
    ...He(a / 2 + c * 2, c, c, 20, -90, -180),
    { x: a / 2 + c, y: l / 2 },
    ...He(a / 2, l / 2, c, 20, 0, 90),
    { x: a / 2, y: l / 2 + c },
    { x: -a / 2, y: l / 2 + c }
  ], d = G.svg(n), p = X(t, { fill: "none" });
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const y = pt(u).replace("Z", ""), b = d.path(y, p), x = pt(f), w = d.path(x, { ...p }), v = n.insert("g", ":first-child");
  return v.insert(() => w, ":first-child").attr("stroke-opacity", 0), v.insert(() => b, ":first-child"), v.attr("class", "text"), h3 && t.look !== "handDrawn" && v.selectAll("path").attr("style", h3), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-c}, 0)`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, v), t.intersect = function(C) {
    return j.polygon(t, f, C);
  }, n;
}
g(Lm, "curlyBraceRight");
function Pt(e11, t, r, i = 100, n = 0, s = 180) {
  const o = [], a = n * Math.PI / 180, h3 = (s * Math.PI / 180 - a) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = a + u * h3, d = e11 + r * Math.cos(f), p = t + r * Math.sin(f);
    o.push({ x: -d, y: -p });
  }
  return o;
}
g(Pt, "generateCirclePoints");
async function Am(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = s.width + (t.padding ?? 0), l = s.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h3 } = t, u = [
    ...Pt(a / 2, -l / 2, c, 30, -90, 0),
    { x: -a / 2 - c, y: c },
    ...Pt(a / 2 + c * 2, -c, c, 20, -180, -270),
    ...Pt(a / 2 + c * 2, c, c, 20, -90, -180),
    { x: -a / 2 - c, y: -l / 2 },
    ...Pt(a / 2, l / 2, c, 20, 0, 90)
  ], f = [
    ...Pt(-a / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: a / 2 - c / 2, y: c },
    ...Pt(-a / 2 - c / 2, -c, c, 20, 0, 90),
    ...Pt(-a / 2 - c / 2, c, c, 20, -90, 0),
    { x: a / 2 - c / 2, y: -c },
    ...Pt(-a / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], d = [
    { x: a / 2, y: -l / 2 - c },
    { x: -a / 2, y: -l / 2 - c },
    ...Pt(a / 2, -l / 2, c, 20, -90, 0),
    { x: -a / 2 - c, y: -c },
    ...Pt(a / 2 + c * 2, -c, c, 20, -180, -270),
    ...Pt(a / 2 + c * 2, c, c, 20, -90, -180),
    { x: -a / 2 - c, y: l / 2 },
    ...Pt(a / 2, l / 2, c, 20, 0, 90),
    { x: -a / 2, y: l / 2 + c },
    { x: a / 2 - c - c / 2, y: l / 2 + c },
    ...Pt(-a / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: a / 2 - c / 2, y: c },
    ...Pt(-a / 2 - c / 2, -c, c, 20, 0, 90),
    ...Pt(-a / 2 - c / 2, c, c, 20, -90, 0),
    { x: a / 2 - c / 2, y: -c },
    ...Pt(-a / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], p = G.svg(n), m = X(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const b = pt(u).replace("Z", ""), x = p.path(b, m), v = pt(f).replace("Z", ""), C = p.path(v, m), S = pt(d), T = p.path(S, { ...m }), O = n.insert("g", ":first-child");
  return O.insert(() => T, ":first-child").attr("stroke-opacity", 0), O.insert(() => x, ":first-child"), O.insert(() => C, ":first-child"), O.attr("class", "text"), h3 && t.look !== "handDrawn" && O.selectAll("path").attr("style", h3), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(${c - c / 4}, 0)`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, O), t.intersect = function(k) {
    return j.polygon(t, d, k);
  }, n;
}
g(Am, "curlyBraces");
async function Em(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = 80, a = 20, l = Math.max(o, (s.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h3 = c / 2, { cssStyles: u } = t, f = G.svg(n), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = l, m = c, y = p - h3, b = m / 4, x = [
    { x: y, y: 0 },
    { x: b, y: 0 },
    { x: 0, y: m / 2 },
    { x: b, y: m },
    { x: y, y: m },
    ...Lc(-y, -m / 2, h3, 50, 270, 90)
  ], w = pt(x), v = f.path(w, d), C = n.insert(() => v, ":first-child");
  return C.attr("class", "basic label-container"), u && t.look !== "handDrawn" && C.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && C.selectChildren("path").attr("style", i), C.attr("transform", `translate(${-l / 2}, ${-c / 2})`), K(t, C), t.intersect = function(S) {
    return j.polygon(t, x, S);
  }, n;
}
g(Em, "curvedTrapezoid");
var aB = g((e11, t, r, i, n, s) => [
  `M${e11},${t + s}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `a${n},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD");
var oB = g((e11, t, r, i, n, s) => [
  `M${e11},${t + s}`,
  `M${e11 + r},${t + s}`,
  `a${n},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD");
var lB = g((e11, t, r, i, n, s) => [`M${e11 - r / 2},${-i / 2}`, `a${n},${s} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function Mm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + t.padding, t.width ?? 0), l = a / 2, c = l / (2.5 + a / 50), h3 = Math.max(s.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = G.svg(n), p = oB(0, 0, a, h3, l, c), m = lB(0, c, a, h3, l, c), y = d.path(p, X(t, {})), b = d.path(m, X(t, { fill: "none" }));
    u = n.insert(() => b, ":first-child"), u = n.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), f && u.attr("style", f);
  } else {
    const d = aB(0, 0, a, h3, l, c);
    u = n.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", Zt(f)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-a / 2}, ${-(h3 / 2 + c)})`), K(t, u), o.attr(
    "transform",
    `translate(${-(s.width / 2) - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + (t.padding ?? 0) / 1.5 - (s.y - (s.top ?? 0))})`
  ), t.intersect = function(d) {
    const p = j.rect(t, d), m = p.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(p.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, d.y - (t.y ?? 0) > 0 && (y = -y), p.y += y;
    }
    return p;
  }, n;
}
g(Mm, "cylinder");
async function $m(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = s.width + t.padding, l = s.height + t.padding, c = l * 0.2, h3 = -a / 2, u = -l / 2 - c / 2, { cssStyles: f } = t, d = G.svg(n), p = X(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const m = [
    { x: h3, y: u + c },
    { x: -h3, y: u + c },
    { x: -h3, y: -u },
    { x: h3, y: -u },
    { x: h3, y: u },
    { x: -h3, y: u },
    { x: -h3, y: u + c }
  ], y = d.polygon(
    m.map((x) => [x.x, x.y]),
    p
  ), b = n.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${h3 + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, b), t.intersect = function(x) {
    return j.rect(t, x);
  }, n;
}
g($m, "dividedRectangle");
async function Fm(e11, t) {
  var _a3, _b2;
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, halfPadding: o } = await ot(e11, t, st(t)), l = s.width / 2 + o + 5, c = s.width / 2 + o;
  let h3;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = G.svg(n), d = X(t, { roughness: 0.2, strokeWidth: 2.5 }), p = X(t, { roughness: 0.2, strokeWidth: 1.5 }), m = f.circle(0, 0, l * 2, d), y = f.circle(0, 0, c * 2, p);
    h3 = n.insert("g", ":first-child"), h3.attr("class", Zt(t.cssClasses)).attr("style", Zt(u)), (_a3 = h3.node()) == null ? void 0 : _a3.appendChild(m), (_b2 = h3.node()) == null ? void 0 : _b2.appendChild(y);
  } else {
    h3 = n.insert("g", ":first-child");
    const f = h3.insert("circle", ":first-child"), d = h3.insert("circle");
    h3.attr("class", "basic label-container").attr("style", i), f.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), d.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return K(t, h3), t.intersect = function(f) {
    return N.info("DoubleCircle intersect", t, l, f), j.circle(t, l, f);
  }, n;
}
g(Fm, "doublecircle");
function Om(e11, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Z(t);
  t.label = "", t.labelStyle = i;
  const s = e11.insert("g").attr("class", st(t)).attr("id", t.domId ?? t.id), o = 7, { cssStyles: a } = t, l = G.svg(s), { nodeBorder: c } = r, h3 = X(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h3.roughness = 0);
  const u = l.circle(0, 0, o * 2, h3), f = s.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), a && a.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), n && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), K(t, f), t.intersect = function(d) {
    return N.info("filledCircle intersect", t, { radius: o, point: d }), j.circle(t, o, d);
  }, s;
}
g(Om, "filledCircle");
async function Dm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = s.width + (t.padding ?? 0), l = a + s.height, c = a + s.height, h3 = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, f = G.svg(n), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = pt(h3), m = f.path(p, d), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = a, t.height = l, K(t, y), o.attr(
    "transform",
    `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (s.y - (s.top ?? 0))})`
  ), t.intersect = function(b) {
    return N.info("Triangle intersect", t, h3, b), j.polygon(t, h3, b);
  }, n;
}
g(Dm, "flippedTriangle");
function Im(e11, t, { dir: r, config: { state: i, themeVariables: n } }) {
  const { nodeStyles: s } = Z(t);
  t.label = "";
  const o = e11.insert("g").attr("class", st(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t;
  let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), c = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  r === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), c = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  const h3 = -1 * l / 2, u = -1 * c / 2, f = G.svg(o), d = X(t, {
    stroke: n.lineColor,
    fill: n.lineColor
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = f.rectangle(h3, u, l, c, d), m = o.insert(() => p, ":first-child");
  a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), s && t.look !== "handDrawn" && m.selectAll("path").attr("style", s), K(t, m);
  const y = (i == null ? void 0 : i.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(b) {
    return j.rect(t, b);
  }, o;
}
g(Im, "forkJoin");
async function Rm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const n = 80, s = 50, { shapeSvg: o, bbox: a } = await ot(e11, t, st(t)), l = Math.max(n, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h3 = c / 2, { cssStyles: u } = t, f = G.svg(o), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h3, y: -c / 2 },
    ...Lc(-l / 2 + h3, 0, h3, 50, 90, 270),
    { x: l / 2 - h3, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = pt(p), y = f.path(m, d), b = o.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container"), u && t.look !== "handDrawn" && b.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), K(t, b), t.intersect = function(x) {
    return N.info("Pill intersect", t, { radius: h3, point: x }), j.polygon(t, p, x);
  }, o;
}
g(Rm, "halfRoundedRectangle");
var cB = g((e11, t, r, i, n) => [
  `M${e11 + n},${t}`,
  `L${e11 + r - n},${t}`,
  `L${e11 + r},${t - i / 2}`,
  `L${e11 + r - n},${t - i}`,
  `L${e11 + n},${t - i}`,
  `L${e11},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function Pm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = 4, a = s.height + t.padding, l = a / o, c = s.width + 2 * l + t.padding, h3 = [
    { x: l, y: 0 },
    { x: c - l, y: 0 },
    { x: c, y: -a / 2 },
    { x: c - l, y: -a },
    { x: l, y: -a },
    { x: 0, y: -a / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = G.svg(n), p = X(t, {}), m = cB(0, 0, c, a, l), y = d.path(m, p);
    u = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${a / 2})`), f && u.attr("style", f);
  } else
    u = tr(n, c, a, h3);
  return i && u.attr("style", i), t.width = c, t.height = a, K(t, u), t.intersect = function(d) {
    return j.polygon(t, h3, d);
  }, n;
}
g(Pm, "hexagon");
async function Nm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: n } = await ot(e11, t, st(t)), s = Math.max(30, (t == null ? void 0 : t.width) ?? 0), o = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: a } = t, l = G.svg(n), c = X(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h3 = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: 0, y: o },
    { x: s, y: o }
  ], u = pt(h3), f = l.path(u, c), d = n.insert(() => f, ":first-child");
  return d.attr("class", "basic label-container"), a && t.look !== "handDrawn" && d.selectChildren("path").attr("style", a), i && t.look !== "handDrawn" && d.selectChildren("path").attr("style", i), d.attr("transform", `translate(${-s / 2}, ${-o / 2})`), K(t, d), t.intersect = function(p) {
    return N.info("Pill intersect", t, { points: h3 }), j.polygon(t, h3, p);
  }, n;
}
g(Nm, "hourglass");
async function zm(e11, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Z(t);
  t.labelStyle = n;
  const s = t.assetHeight ?? 48, o = t.assetWidth ?? 48, a = Math.max(s, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(a, l ?? 0);
  const { shapeSvg: c, bbox: h3, label: u } = await ot(e11, t, "icon-shape default"), f = t.pos === "t", d = a, p = a, { nodeBorder: m } = r, { stylesMap: y } = Bi(t), b = -p / 2, x = -d / 2, w = t.label ? 8 : 0, v = G.svg(c), C = X(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const S = v.rectangle(b, x, p, d, C), T = Math.max(p, h3.width), O = d + h3.height + w, k = v.rectangle(-T / 2, -O / 2, T, O, {
    ...C,
    fill: "transparent",
    stroke: "none"
  }), E = c.insert(() => S, ":first-child"), L = c.insert(() => k);
  if (t.icon) {
    const D = c.append("g");
    D.html(
      `<g>${await In(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`
    );
    const F = D.node().getBBox(), M = F.width, $ = F.height, A = F.x, P = F.y;
    D.attr(
      "transform",
      `translate(${-M / 2 - A},${f ? h3.height / 2 + w / 2 - $ / 2 - P : -h3.height / 2 - w / 2 - $ / 2 - P})`
    ), D.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h3.width / 2 - (h3.x - (h3.left ?? 0))},${f ? -O / 2 : O / 2 - h3.height})`
  ), E.attr(
    "transform",
    `translate(0,${f ? h3.height / 2 + w / 2 : -h3.height / 2 - w / 2})`
  ), K(t, L), t.intersect = function(D) {
    if (N.info("iconSquare intersect", t, D), !t.label)
      return j.rect(t, D);
    const F = t.x ?? 0, M = t.y ?? 0, $ = t.height ?? 0;
    let A = [];
    return f ? A = [
      { x: F - h3.width / 2, y: M - $ / 2 },
      { x: F + h3.width / 2, y: M - $ / 2 },
      { x: F + h3.width / 2, y: M - $ / 2 + h3.height + w },
      { x: F + p / 2, y: M - $ / 2 + h3.height + w },
      { x: F + p / 2, y: M + $ / 2 },
      { x: F - p / 2, y: M + $ / 2 },
      { x: F - p / 2, y: M - $ / 2 + h3.height + w },
      { x: F - h3.width / 2, y: M - $ / 2 + h3.height + w }
    ] : A = [
      { x: F - p / 2, y: M - $ / 2 },
      { x: F + p / 2, y: M - $ / 2 },
      { x: F + p / 2, y: M - $ / 2 + d },
      { x: F + h3.width / 2, y: M - $ / 2 + d },
      { x: F + h3.width / 2 / 2, y: M + $ / 2 },
      { x: F - h3.width / 2, y: M + $ / 2 },
      { x: F - h3.width / 2, y: M - $ / 2 + d },
      { x: F - p / 2, y: M - $ / 2 + d }
    ], j.polygon(t, A, D);
  }, c;
}
g(zm, "icon");
async function Wm(e11, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Z(t);
  t.labelStyle = n;
  const s = t.assetHeight ?? 48, o = t.assetWidth ?? 48, a = Math.max(s, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(a, l ?? 0);
  const { shapeSvg: c, bbox: h3, label: u } = await ot(e11, t, "icon-shape default"), f = 20, d = t.label ? 8 : 0, p = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: b } = Bi(t), x = G.svg(c), w = X(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const v = b.get("fill");
  w.stroke = v ?? y;
  const C = c.append("g");
  t.icon && C.html(
    `<g>${await In(t.icon, {
      height: a,
      width: a,
      fallbackPrefix: ""
    })}</g>`
  );
  const S = C.node().getBBox(), T = S.width, O = S.height, k = S.x, E = S.y, L = Math.max(T, O) * Math.SQRT2 + f * 2, D = x.circle(0, 0, L, w), F = Math.max(L, h3.width), M = L + h3.height + d, $ = x.rectangle(-F / 2, -M / 2, F, M, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), A = c.insert(() => D, ":first-child"), P = c.insert(() => $);
  return C.attr(
    "transform",
    `translate(${-T / 2 - k},${p ? h3.height / 2 + d / 2 - O / 2 - E : -h3.height / 2 - d / 2 - O / 2 - E})`
  ), C.attr("style", `color: ${b.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h3.width / 2 - (h3.x - (h3.left ?? 0))},${p ? -M / 2 : M / 2 - h3.height})`
  ), A.attr(
    "transform",
    `translate(0,${p ? h3.height / 2 + d / 2 : -h3.height / 2 - d / 2})`
  ), K(t, P), t.intersect = function(R) {
    return N.info("iconSquare intersect", t, R), j.rect(t, R);
  }, c;
}
g(Wm, "iconCircle");
async function qm(e11, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Z(t);
  t.labelStyle = n;
  const s = t.assetHeight ?? 48, o = t.assetWidth ?? 48, a = Math.max(s, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(a, l ?? 0);
  const { shapeSvg: c, bbox: h3, halfPadding: u, label: f } = await ot(
    e11,
    t,
    "icon-shape default"
  ), d = t.pos === "t", p = a + u * 2, m = a + u * 2, { nodeBorder: y, mainBkg: b } = r, { stylesMap: x } = Bi(t), w = -m / 2, v = -p / 2, C = t.label ? 8 : 0, S = G.svg(c), T = X(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const O = x.get("fill");
  T.stroke = O ?? b;
  const k = S.path(Je(w, v, m, p, 5), T), E = Math.max(m, h3.width), L = p + h3.height + C, D = S.rectangle(-E / 2, -L / 2, E, L, {
    ...T,
    fill: "transparent",
    stroke: "none"
  }), F = c.insert(() => k, ":first-child").attr("class", "icon-shape2"), M = c.insert(() => D);
  if (t.icon) {
    const $ = c.append("g");
    $.html(
      `<g>${await In(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`
    );
    const A = $.node().getBBox(), P = A.width, R = A.height, q = A.x, Y = A.y;
    $.attr(
      "transform",
      `translate(${-P / 2 - q},${d ? h3.height / 2 + C / 2 - R / 2 - Y : -h3.height / 2 - C / 2 - R / 2 - Y})`
    ), $.attr("style", `color: ${x.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h3.width / 2 - (h3.x - (h3.left ?? 0))},${d ? -L / 2 : L / 2 - h3.height})`
  ), F.attr(
    "transform",
    `translate(0,${d ? h3.height / 2 + C / 2 : -h3.height / 2 - C / 2})`
  ), K(t, M), t.intersect = function($) {
    if (N.info("iconSquare intersect", t, $), !t.label)
      return j.rect(t, $);
    const A = t.x ?? 0, P = t.y ?? 0, R = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: A - h3.width / 2, y: P - R / 2 },
      { x: A + h3.width / 2, y: P - R / 2 },
      { x: A + h3.width / 2, y: P - R / 2 + h3.height + C },
      { x: A + m / 2, y: P - R / 2 + h3.height + C },
      { x: A + m / 2, y: P + R / 2 },
      { x: A - m / 2, y: P + R / 2 },
      { x: A - m / 2, y: P - R / 2 + h3.height + C },
      { x: A - h3.width / 2, y: P - R / 2 + h3.height + C }
    ] : q = [
      { x: A - m / 2, y: P - R / 2 },
      { x: A + m / 2, y: P - R / 2 },
      { x: A + m / 2, y: P - R / 2 + p },
      { x: A + h3.width / 2, y: P - R / 2 + p },
      { x: A + h3.width / 2 / 2, y: P + R / 2 },
      { x: A - h3.width / 2, y: P + R / 2 },
      { x: A - h3.width / 2, y: P - R / 2 + p },
      { x: A - m / 2, y: P - R / 2 + p }
    ], j.polygon(t, q, $);
  }, c;
}
g(qm, "iconRounded");
async function Hm(e11, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Z(t);
  t.labelStyle = n;
  const s = t.assetHeight ?? 48, o = t.assetWidth ?? 48, a = Math.max(s, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(a, l ?? 0);
  const { shapeSvg: c, bbox: h3, halfPadding: u, label: f } = await ot(
    e11,
    t,
    "icon-shape default"
  ), d = t.pos === "t", p = a + u * 2, m = a + u * 2, { nodeBorder: y, mainBkg: b } = r, { stylesMap: x } = Bi(t), w = -m / 2, v = -p / 2, C = t.label ? 8 : 0, S = G.svg(c), T = X(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const O = x.get("fill");
  T.stroke = O ?? b;
  const k = S.path(Je(w, v, m, p, 0.1), T), E = Math.max(m, h3.width), L = p + h3.height + C, D = S.rectangle(-E / 2, -L / 2, E, L, {
    ...T,
    fill: "transparent",
    stroke: "none"
  }), F = c.insert(() => k, ":first-child"), M = c.insert(() => D);
  if (t.icon) {
    const $ = c.append("g");
    $.html(
      `<g>${await In(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`
    );
    const A = $.node().getBBox(), P = A.width, R = A.height, q = A.x, Y = A.y;
    $.attr(
      "transform",
      `translate(${-P / 2 - q},${d ? h3.height / 2 + C / 2 - R / 2 - Y : -h3.height / 2 - C / 2 - R / 2 - Y})`
    ), $.attr("style", `color: ${x.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h3.width / 2 - (h3.x - (h3.left ?? 0))},${d ? -L / 2 : L / 2 - h3.height})`
  ), F.attr(
    "transform",
    `translate(0,${d ? h3.height / 2 + C / 2 : -h3.height / 2 - C / 2})`
  ), K(t, M), t.intersect = function($) {
    if (N.info("iconSquare intersect", t, $), !t.label)
      return j.rect(t, $);
    const A = t.x ?? 0, P = t.y ?? 0, R = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: A - h3.width / 2, y: P - R / 2 },
      { x: A + h3.width / 2, y: P - R / 2 },
      { x: A + h3.width / 2, y: P - R / 2 + h3.height + C },
      { x: A + m / 2, y: P - R / 2 + h3.height + C },
      { x: A + m / 2, y: P + R / 2 },
      { x: A - m / 2, y: P + R / 2 },
      { x: A - m / 2, y: P - R / 2 + h3.height + C },
      { x: A - h3.width / 2, y: P - R / 2 + h3.height + C }
    ] : q = [
      { x: A - m / 2, y: P - R / 2 },
      { x: A + m / 2, y: P - R / 2 },
      { x: A + m / 2, y: P - R / 2 + p },
      { x: A + h3.width / 2, y: P - R / 2 + p },
      { x: A + h3.width / 2 / 2, y: P + R / 2 },
      { x: A - h3.width / 2, y: P + R / 2 },
      { x: A - h3.width / 2, y: P - R / 2 + p },
      { x: A - m / 2, y: P - R / 2 + p }
    ], j.polygon(t, q, $);
  }, c;
}
g(Hm, "iconSquare");
async function jm(e11, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
  const n = Number(i.naturalWidth.toString().replace("px", "")), s = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = n / s;
  const { labelStyles: o } = Z(t);
  t.labelStyle = o;
  const a = r == null ? void 0 : r.wrappingWidth;
  t.defaultWidth = r == null ? void 0 : r.wrappingWidth;
  const l = Math.max(
    t.label ? a ?? 0 : 0,
    (t == null ? void 0 : t.assetWidth) ?? n
  ), c = t.constraint === "on" && (t == null ? void 0 : t.assetHeight) ? t.assetHeight * t.imageAspectRatio : l, h3 = t.constraint === "on" ? c / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? s;
  t.width = Math.max(c, a ?? 0);
  const { shapeSvg: u, bbox: f, label: d } = await ot(e11, t, "image-shape default"), p = t.pos === "t", m = -c / 2, y = -h3 / 2, b = t.label ? 8 : 0, x = G.svg(u), w = X(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const v = x.rectangle(m, y, c, h3, w), C = Math.max(c, f.width), S = h3 + f.height + b, T = x.rectangle(-C / 2, -S / 2, C, S, {
    ...w,
    fill: "none",
    stroke: "none"
  }), O = u.insert(() => v, ":first-child"), k = u.insert(() => T);
  if (t.img) {
    const E = u.append("image");
    E.attr("href", t.img), E.attr("width", c), E.attr("height", h3), E.attr("preserveAspectRatio", "none"), E.attr(
      "transform",
      `translate(${-c / 2},${p ? S / 2 - h3 : -S / 2})`
    );
  }
  return d.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${p ? -h3 / 2 - f.height / 2 - b / 2 : h3 / 2 - f.height / 2 + b / 2})`
  ), O.attr(
    "transform",
    `translate(0,${p ? f.height / 2 + b / 2 : -f.height / 2 - b / 2})`
  ), K(t, k), t.intersect = function(E) {
    if (N.info("iconSquare intersect", t, E), !t.label)
      return j.rect(t, E);
    const L = t.x ?? 0, D = t.y ?? 0, F = t.height ?? 0;
    let M = [];
    return p ? M = [
      { x: L - f.width / 2, y: D - F / 2 },
      { x: L + f.width / 2, y: D - F / 2 },
      { x: L + f.width / 2, y: D - F / 2 + f.height + b },
      { x: L + c / 2, y: D - F / 2 + f.height + b },
      { x: L + c / 2, y: D + F / 2 },
      { x: L - c / 2, y: D + F / 2 },
      { x: L - c / 2, y: D - F / 2 + f.height + b },
      { x: L - f.width / 2, y: D - F / 2 + f.height + b }
    ] : M = [
      { x: L - c / 2, y: D - F / 2 },
      { x: L + c / 2, y: D - F / 2 },
      { x: L + c / 2, y: D - F / 2 + h3 },
      { x: L + f.width / 2, y: D - F / 2 + h3 },
      { x: L + f.width / 2 / 2, y: D + F / 2 },
      { x: L - f.width / 2, y: D + F / 2 },
      { x: L - f.width / 2, y: D - F / 2 + h3 },
      { x: L - c / 2, y: D - F / 2 + h3 }
    ], j.polygon(t, M, E);
  }, u;
}
g(jm, "imageSquare");
async function Um(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), a = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * a / 6, y: -a },
    { x: -3 * a / 6, y: -a }
  ];
  let c;
  const { cssStyles: h3 } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(n), f = X(t, {}), d = pt(l), p = u.path(d, f);
    c = n.insert(() => p, ":first-child").attr("transform", `translate(${-o / 2}, ${a / 2})`), h3 && c.attr("style", h3);
  } else
    c = tr(n, o, a, l);
  return i && c.attr("style", i), t.width = o, t.height = a, K(t, c), t.intersect = function(u) {
    return j.polygon(t, l, u);
  }, n;
}
g(Um, "inv_trapezoid");
async function Pn(e11, t, r) {
  const { labelStyles: i, nodeStyles: n } = Z(t);
  t.labelStyle = i;
  const { shapeSvg: s, bbox: o } = await ot(e11, t, st(t)), a = Math.max(o.width + r.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(o.height + r.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), c = -a / 2, h3 = -l / 2;
  let u, { rx: f, ry: d } = t;
  const { cssStyles: p } = t;
  if ((r == null ? void 0 : r.rx) && r.ry && (f = r.rx, d = r.ry), t.look === "handDrawn") {
    const m = G.svg(s), y = X(t, {}), b = f || d ? m.path(Je(c, h3, a, l, f || 0), y) : m.rectangle(c, h3, a, l, y);
    u = s.insert(() => b, ":first-child"), u.attr("class", "basic label-container").attr("style", Zt(p));
  } else
    u = s.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", n).attr("rx", Zt(f)).attr("ry", Zt(d)).attr("x", c).attr("y", h3).attr("width", a).attr("height", l);
  return K(t, u), t.intersect = function(m) {
    return j.rect(t, m);
  }, s;
}
g(Pn, "drawRect");
async function Ym(e11, t) {
  const { shapeSvg: r, bbox: i, label: n } = await ot(e11, t, "label"), s = r.insert("rect", ":first-child");
  return s.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), n.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), K(t, s), t.intersect = function(l) {
    return j.rect(t, l);
  }, r;
}
g(Ym, "labelRect");
async function Gm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = Math.max(s.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), a = Math.max(s.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o + 3 * a / 6, y: 0 },
    { x: o, y: -a },
    { x: -(3 * a) / 6, y: -a }
  ];
  let c;
  const { cssStyles: h3 } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(n), f = X(t, {}), d = pt(l), p = u.path(d, f);
    c = n.insert(() => p, ":first-child").attr("transform", `translate(${-o / 2}, ${a / 2})`), h3 && c.attr("style", h3);
  } else
    c = tr(n, o, a, l);
  return i && c.attr("style", i), t.width = o, t.height = a, K(t, c), t.intersect = function(u) {
    return j.polygon(t, l, u);
  }, n;
}
g(Gm, "lean_left");
async function Vm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = Math.max(s.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), a = Math.max(s.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: -3 * a / 6, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * a / 6, y: -a },
    { x: 0, y: -a }
  ];
  let c;
  const { cssStyles: h3 } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(n), f = X(t, {}), d = pt(l), p = u.path(d, f);
    c = n.insert(() => p, ":first-child").attr("transform", `translate(${-o / 2}, ${a / 2})`), h3 && c.attr("style", h3);
  } else
    c = tr(n, o, a, l);
  return i && c.attr("style", i), t.width = o, t.height = a, K(t, c), t.intersect = function(u) {
    return j.polygon(t, l, u);
  }, n;
}
g(Vm, "lean_right");
function Xm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.label = "", t.labelStyle = r;
  const n = e11.insert("g").attr("class", st(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, o = Math.max(35, (t == null ? void 0 : t.width) ?? 0), a = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, c = [
    { x: o, y: 0 },
    { x: 0, y: a + l / 2 },
    { x: o - 2 * l, y: a + l / 2 },
    { x: 0, y: 2 * a },
    { x: o, y: a - l / 2 },
    { x: 2 * l, y: a - l / 2 }
  ], h3 = G.svg(n), u = X(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = pt(c), d = h3.path(f, u), p = n.insert(() => d, ":first-child");
  return s && t.look !== "handDrawn" && p.selectAll("path").attr("style", s), i && t.look !== "handDrawn" && p.selectAll("path").attr("style", i), p.attr("transform", `translate(-${o / 2},${-a})`), K(t, p), t.intersect = function(m) {
    return N.info("lightningBolt intersect", t, m), j.polygon(t, c, m);
  }, n;
}
g(Xm, "lightningBolt");
var hB = g((e11, t, r, i, n, s, o) => [
  `M${e11},${t + s}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `a${n},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e11},${t + s + o}`,
  `a${n},${s} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD");
var uB = g((e11, t, r, i, n, s, o) => [
  `M${e11},${t + s}`,
  `M${e11 + r},${t + s}`,
  `a${n},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${s} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e11},${t + s + o}`,
  `a${n},${s} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD");
var fB = g((e11, t, r, i, n, s) => [`M${e11 - r / 2},${-i / 2}`, `a${n},${s} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function Km(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0), t.width ?? 0), l = a / 2, c = l / (2.5 + a / 50), h3 = Math.max(s.height + c + (t.padding ?? 0), t.height ?? 0), u = h3 * 0.1;
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const p = G.svg(n), m = uB(0, 0, a, h3, l, c, u), y = fB(0, c, a, h3, l, c), b = X(t, {}), x = p.path(m, b), w = p.path(y, b);
    n.insert(() => w, ":first-child").attr("class", "line"), f = n.insert(() => x, ":first-child"), f.attr("class", "basic label-container"), d && f.attr("style", d);
  } else {
    const p = hB(0, 0, a, h3, l, c, u);
    f = n.insert("path", ":first-child").attr("d", p).attr("class", "basic label-container").attr("style", Zt(d)).attr("style", i);
  }
  return f.attr("label-offset-y", c), f.attr("transform", `translate(${-a / 2}, ${-(h3 / 2 + c)})`), K(t, f), o.attr(
    "transform",
    `translate(${-(s.width / 2) - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + c - (s.y - (s.top ?? 0))})`
  ), t.intersect = function(p) {
    const m = j.rect(t, p), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let b = c * c * (1 - y * y / (l * l));
      b > 0 && (b = Math.sqrt(b)), b = c - b, p.y - (t.y ?? 0) > 0 && (b = -b), m.y += b;
    }
    return m;
  }, n;
}
g(Km, "linedCylinder");
async function Zm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h3 = l + c, { cssStyles: u } = t, f = G.svg(n), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = [
    { x: -a / 2 - a / 2 * 0.1, y: -h3 / 2 },
    { x: -a / 2 - a / 2 * 0.1, y: h3 / 2 },
    ...ur(
      -a / 2 - a / 2 * 0.1,
      h3 / 2,
      a / 2 + a / 2 * 0.1,
      h3 / 2,
      c,
      0.8
    ),
    { x: a / 2 + a / 2 * 0.1, y: -h3 / 2 },
    { x: -a / 2 - a / 2 * 0.1, y: -h3 / 2 },
    { x: -a / 2, y: -h3 / 2 },
    { x: -a / 2, y: h3 / 2 * 1.1 },
    { x: -a / 2, y: -h3 / 2 }
  ], m = f.polygon(
    p.map((b) => [b.x, b.y]),
    d
  ), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) + a / 2 * 0.1 / 2 - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, y), t.intersect = function(b) {
    return j.polygon(t, p, b);
  }, n;
}
g(Zm, "linedWaveEdgedRect");
async function Qm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h3 = -a / 2, u = -l / 2, { cssStyles: f } = t, d = G.svg(n), p = X(t, {}), m = [
    { x: h3 - c, y: u + c },
    { x: h3 - c, y: u + l + c },
    { x: h3 + a - c, y: u + l + c },
    { x: h3 + a - c, y: u + l },
    { x: h3 + a, y: u + l },
    { x: h3 + a, y: u + l - c },
    { x: h3 + a + c, y: u + l - c },
    { x: h3 + a + c, y: u - c },
    { x: h3 + c, y: u - c },
    { x: h3 + c, y: u },
    { x: h3, y: u },
    { x: h3, y: u + c }
  ], y = [
    { x: h3, y: u + c },
    { x: h3 + a - c, y: u + c },
    { x: h3 + a - c, y: u + l },
    { x: h3 + a, y: u + l },
    { x: h3 + a, y: u },
    { x: h3, y: u }
  ];
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const b = pt(m), x = d.path(b, p), w = pt(y), v = d.path(w, { ...p, fill: "none" }), C = n.insert(() => v, ":first-child");
  return C.insert(() => x, ":first-child"), C.attr("class", "basic label-container"), f && t.look !== "handDrawn" && C.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(s.width / 2) - c - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + c - (s.y - (s.top ?? 0))})`
  ), K(t, C), t.intersect = function(S) {
    return j.polygon(t, m, S);
  }, n;
}
g(Qm, "multiRect");
async function Jm(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h3 = l + c, u = -a / 2, f = -h3 / 2, d = 5, { cssStyles: p } = t, m = ur(
    u - d,
    f + h3 + d,
    u + a - d,
    f + h3 + d,
    c,
    0.8
  ), y = m == null ? void 0 : m[m.length - 1], b = [
    { x: u - d, y: f + d },
    { x: u - d, y: f + h3 + d },
    ...m,
    { x: u + a - d, y: y.y - d },
    { x: u + a, y: y.y - d },
    { x: u + a, y: y.y - 2 * d },
    { x: u + a + d, y: y.y - 2 * d },
    { x: u + a + d, y: f - d },
    { x: u + d, y: f - d },
    { x: u + d, y: f },
    { x: u, y: f },
    { x: u, y: f + d }
  ], x = [
    { x: u, y: f + d },
    { x: u + a - d, y: f + d },
    { x: u + a - d, y: y.y - d },
    { x: u + a, y: y.y - d },
    { x: u + a, y: f },
    { x: u, y: f }
  ], w = G.svg(n), v = X(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const C = pt(b), S = w.path(C, v), T = pt(x), O = w.path(T, v), k = n.insert(() => S, ":first-child");
  return k.insert(() => O), k.attr("class", "basic label-container"), p && t.look !== "handDrawn" && k.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), k.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-(s.width / 2) - d - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + d - c / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, k), t.intersect = function(E) {
    return j.polygon(t, b, E);
  }, n;
}
g(Jm, "multiWaveEdgedRectangle");
async function ty(e11, t, { config: { themeVariables: r } }) {
  var _a3;
  const { labelStyles: i, nodeStyles: n } = Z(t);
  t.labelStyle = i, t.useHtmlLabels || ((_a3 = oe().flowchart) == null ? void 0 : _a3.htmlLabels) !== false || (t.centerLabel = true);
  const { shapeSvg: o, bbox: a, label: l } = await ot(e11, t, st(t)), c = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h3 = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), u = -c / 2, f = -h3 / 2, { cssStyles: d } = t, p = G.svg(o), m = X(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = p.rectangle(u, f, c, h3, m), b = o.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container"), d && t.look !== "handDrawn" && b.selectAll("path").attr("style", d), n && t.look !== "handDrawn" && b.selectAll("path").attr("style", n), l.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), K(t, b), t.intersect = function(x) {
    return j.rect(t, x);
  }, o;
}
g(ty, "note");
var dB = g((e11, t, r) => [
  `M${e11 + r / 2},${t}`,
  `L${e11 + r},${t - r / 2}`,
  `L${e11 + r / 2},${t - r}`,
  `L${e11},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function ey(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = s.width + t.padding, a = s.height + t.padding, l = o + a, c = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let h3;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = G.svg(n), d = X(t, {}), p = dB(0, 0, l), m = f.path(p, d);
    h3 = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`), u && h3.attr("style", u);
  } else
    h3 = tr(n, l, l, c);
  return i && h3.attr("style", i), K(t, h3), t.intersect = function(f) {
    return N.debug(
      `APA12 Intersect called SPLIT
point:`,
      f,
      `
node:
`,
      t,
      `
res:`,
      j.polygon(t, c, f)
    ), j.polygon(t, c, f);
  }, n;
}
g(ey, "question");
async function ry(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = -a / 2, h3 = -l / 2, u = h3 / 2, f = [
    { x: c + u, y: h3 },
    { x: c, y: 0 },
    { x: c + u, y: -h3 },
    { x: -c, y: -h3 },
    { x: -c, y: h3 }
  ], { cssStyles: d } = t, p = G.svg(n), m = X(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = pt(f), b = p.path(y, m), x = n.insert(() => b, ":first-child");
  return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), x.attr("transform", `translate(${-u / 2},0)`), o.attr(
    "transform",
    `translate(${-u / 2 - s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`
  ), K(t, x), t.intersect = function(w) {
    return j.polygon(t, f, w);
  }, n;
}
g(ry, "rect_left_inv_arrow");
async function iy(e11, t) {
  var _a3, _b2;
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  let n;
  t.cssClasses ? n = "node " + t.cssClasses : n = "node default";
  const s = e11.insert("g").attr("class", n).attr("id", t.domId || t.id), o = s.insert("g"), a = s.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h3 = a.node().appendChild(await Sr(c, t.labelStyle, true, true));
  let u = { width: 0, height: 0 };
  if (Dt((_b2 = (_a3 = gt()) == null ? void 0 : _a3.flowchart) == null ? void 0 : _b2.htmlLabels)) {
    const O = h3.children[0], k = dt(h3);
    u = O.getBoundingClientRect(), k.attr("width", u.width), k.attr("height", u.height);
  }
  N.info("Text 2", l);
  const f = l || [], d = h3.getBBox(), p = a.node().appendChild(
    await Sr(
      f.join ? f.join("<br/>") : f,
      t.labelStyle,
      true,
      true
    )
  ), m = p.children[0], y = dt(p);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const b = (t.padding || 0) / 2;
  dt(p).attr(
    "transform",
    "translate( " + (u.width > d.width ? 0 : (d.width - u.width) / 2) + ", " + (d.height + b + 5) + ")"
  ), dt(h3).attr(
    "transform",
    "translate( " + (u.width < d.width ? 0 : -(d.width - u.width) / 2) + ", 0)"
  ), u = a.node().getBBox(), a.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - b + 3) + ")"
  );
  const x = u.width + (t.padding || 0), w = u.height + (t.padding || 0), v = -u.width / 2 - b, C = -u.height / 2 - b;
  let S, T;
  if (t.look === "handDrawn") {
    const O = G.svg(s), k = X(t, {}), E = O.path(
      Je(v, C, x, w, t.rx || 0),
      k
    ), L = O.line(
      -u.width / 2 - b,
      -u.height / 2 - b + d.height + b,
      u.width / 2 + b,
      -u.height / 2 - b + d.height + b,
      k
    );
    T = s.insert(() => (N.debug("Rough node insert CXC", E), L), ":first-child"), S = s.insert(() => (N.debug("Rough node insert CXC", E), E), ":first-child");
  } else
    S = o.insert("rect", ":first-child"), T = o.insert("line"), S.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - b).attr("y", -u.height / 2 - b).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), T.attr("class", "divider").attr("x1", -u.width / 2 - b).attr("x2", u.width / 2 + b).attr("y1", -u.height / 2 - b + d.height + b).attr("y2", -u.height / 2 - b + d.height + b);
  return K(t, S), t.intersect = function(O) {
    return j.rect(t, O);
  }, s;
}
g(iy, "rectWithTitle");
async function ny(e11, t) {
  const r = {
    rx: 5,
    ry: 5,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return Pn(e11, t, r);
}
g(ny, "roundedRect");
async function sy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h3 = -s.width / 2 - a, u = -s.height / 2 - a, { cssStyles: f } = t, d = G.svg(n), p = X(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const m = [
    { x: h3, y: u },
    { x: h3 + l + 8, y: u },
    { x: h3 + l + 8, y: u + c },
    { x: h3 - 8, y: u + c },
    { x: h3 - 8, y: u },
    { x: h3, y: u },
    { x: h3, y: u + c }
  ], y = d.polygon(
    m.map((x) => [x.x, x.y]),
    p
  ), b = n.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container").attr("style", Zt(f)), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (s.x - (s.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (s.y - (s.top ?? 0))})`
  ), K(t, b), t.intersect = function(x) {
    return j.rect(t, x);
  }, n;
}
g(sy, "shadedProcess");
async function ay(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -a / 2, h3 = -l / 2, { cssStyles: u } = t, f = G.svg(n), d = X(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = [
    { x: c, y: h3 },
    { x: c, y: h3 + l },
    { x: c + a, y: h3 + l },
    { x: c + a, y: h3 - l / 2 }
  ], m = pt(p), y = f.path(m, d), b = n.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container"), u && t.look !== "handDrawn" && b.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), b.attr("transform", `translate(0, ${l / 4})`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) - (s.x - (s.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (s.y - (s.top ?? 0))})`
  ), K(t, b), t.intersect = function(x) {
    return j.polygon(t, p, x);
  }, n;
}
g(ay, "slopedRect");
async function oy(e11, t) {
  const r = {
    rx: 0,
    ry: 0,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return Pn(e11, t, r);
}
g(oy, "squareRect");
async function ly(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = s.height + t.padding, a = s.width + o / 4 + t.padding;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h3 = G.svg(n), u = X(t, {}), f = Je(-a / 2, -o / 2, a, o, o / 2), d = h3.path(f, u);
    l = n.insert(() => d, ":first-child"), l.attr("class", "basic label-container").attr("style", Zt(c));
  } else
    l = n.insert("rect", ":first-child"), l.attr("class", "basic label-container").attr("style", i).attr("rx", o / 2).attr("ry", o / 2).attr("x", -a / 2).attr("y", -o / 2).attr("width", a).attr("height", o);
  return K(t, l), t.intersect = function(h3) {
    return j.rect(t, h3);
  }, n;
}
g(ly, "stadium");
async function cy(e11, t) {
  return Pn(e11, t, {
    rx: 5,
    ry: 5
  });
}
g(cy, "state");
function hy(e11, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Z(t);
  t.labelStyle = i;
  const { cssStyles: s } = t, { lineColor: o, stateBorder: a, nodeBorder: l } = r, c = e11.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h3 = G.svg(c), u = X(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = h3.circle(0, 0, 14, {
    ...u,
    stroke: o,
    strokeWidth: 2
  }), d = a ?? l, p = h3.circle(0, 0, 5, {
    ...u,
    fill: d,
    stroke: d,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => f, ":first-child");
  return m.insert(() => p), s && m.selectAll("path").attr("style", s), n && m.selectAll("path").attr("style", n), K(t, m), t.intersect = function(y) {
    return j.circle(t, 7, y);
  }, c;
}
g(hy, "stateEnd");
function uy(e11, t, { config: { themeVariables: r } }) {
  const { lineColor: i } = r, n = e11.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let s;
  if (t.look === "handDrawn") {
    const a = G.svg(n).circle(0, 0, 14, Q1(i));
    s = n.insert(() => a), s.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    s = n.insert("circle", ":first-child"), s.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return K(t, s), t.intersect = function(o) {
    return j.circle(t, 7, o);
  }, n;
}
g(uy, "stateStart");
async function fy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = ((t == null ? void 0 : t.padding) || 0) / 2, a = s.width + t.padding, l = s.height + t.padding, c = -s.width / 2 - o, h3 = -s.height / 2 - o, u = [
    { x: 0, y: 0 },
    { x: a, y: 0 },
    { x: a, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: a + 8, y: 0 },
    { x: a + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const f = G.svg(n), d = X(t, {}), p = f.rectangle(c - 8, h3, a + 16, l, d), m = f.line(c, h3, c, h3 + l, d), y = f.line(c + a, h3, c + a, h3 + l, d);
    n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
    const b = n.insert(() => p, ":first-child"), { cssStyles: x } = t;
    b.attr("class", "basic label-container").attr("style", Zt(x)), K(t, b);
  } else {
    const f = tr(n, a, l, u);
    i && f.attr("style", i), K(t, f);
  }
  return t.intersect = function(f) {
    return j.polygon(t, u, f);
  }, n;
}
g(fy, "subroutine");
async function dy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), a = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -o / 2, c = -a / 2, h3 = 0.2 * a, u = 0.2 * a, { cssStyles: f } = t, d = G.svg(n), p = X(t, {}), m = [
    { x: l - h3 / 2, y: c },
    { x: l + o + h3 / 2, y: c },
    { x: l + o + h3 / 2, y: c + a },
    { x: l - h3 / 2, y: c + a }
  ], y = [
    { x: l + o - h3 / 2, y: c + a },
    { x: l + o + h3 / 2, y: c + a },
    { x: l + o + h3 / 2, y: c + a - u }
  ];
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const b = pt(m), x = d.path(b, p), w = pt(y), v = d.path(w, { ...p, fillStyle: "solid" }), C = n.insert(() => v, ":first-child");
  return C.insert(() => x, ":first-child"), C.attr("class", "basic label-container"), f && t.look !== "handDrawn" && C.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), K(t, C), t.intersect = function(S) {
    return j.polygon(t, m, S);
  }, n;
}
g(dy, "taggedRect");
async function py(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h3 = 0.2 * a, u = 0.2 * l, f = l + c, { cssStyles: d } = t, p = G.svg(n), m = X(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -a / 2 - a / 2 * 0.1, y: f / 2 },
    ...ur(
      -a / 2 - a / 2 * 0.1,
      f / 2,
      a / 2 + a / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: a / 2 + a / 2 * 0.1, y: -f / 2 },
    { x: -a / 2 - a / 2 * 0.1, y: -f / 2 }
  ], b = -a / 2 + a / 2 * 0.1, x = -f / 2 - u * 0.4, w = [
    { x: b + a - h3, y: (x + l) * 1.4 },
    { x: b + a, y: x + l - u },
    { x: b + a, y: (x + l) * 0.9 },
    ...ur(
      b + a,
      (x + l) * 1.3,
      b + a - h3,
      (x + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], v = pt(y), C = p.path(v, m), S = pt(w), T = p.path(S, {
    ...m,
    fillStyle: "solid"
  }), O = n.insert(() => T, ":first-child");
  return O.insert(() => C, ":first-child"), O.attr("class", "basic label-container"), d && t.look !== "handDrawn" && O.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, O), t.intersect = function(k) {
    return j.polygon(t, y, k);
  }, n;
}
g(py, "taggedWaveEdgedRectangle");
async function gy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = Math.max(s.width + t.padding, (t == null ? void 0 : t.width) || 0), a = Math.max(s.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -o / 2, c = -a / 2, h3 = n.insert("rect", ":first-child");
  return h3.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", o).attr("height", a), K(t, h3), t.intersect = function(u) {
    return j.rect(t, u);
  }, n;
}
g(gy, "text");
var pB = g((e11, t, r, i, n, s) => `M${e11},${t}
    a${n},${s} 0,0,1 0,${-i}
    l${r},0
    a${n},${s} 0,0,1 0,${i}
    M${r},${-i}
    a${n},${s} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD");
var gB = g((e11, t, r, i, n, s) => [
  `M${e11},${t}`,
  `M${e11 + r},${t}`,
  `a${n},${s} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${n},${s} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD");
var mB = g((e11, t, r, i, n, s) => [`M${e11 + r / 2},${-i / 2}`, `a${n},${s} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function my(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o, halfPadding: a } = await ot(
    e11,
    t,
    st(t)
  ), l = t.look === "neo" ? a * 2 : a, c = s.height + l, h3 = c / 2, u = h3 / (2.5 + c / 50), f = s.width + u + l, { cssStyles: d } = t;
  let p;
  if (t.look === "handDrawn") {
    const m = G.svg(n), y = gB(0, 0, f, c, u, h3), b = mB(0, 0, f, c, u, h3), x = m.path(y, X(t, {})), w = m.path(b, X(t, { fill: "none" }));
    p = n.insert(() => w, ":first-child"), p = n.insert(() => x, ":first-child"), p.attr("class", "basic label-container"), d && p.attr("style", d);
  } else {
    const m = pB(0, 0, f, c, u, h3);
    p = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Zt(d)).attr("style", i), p.attr("class", "basic label-container"), d && p.selectAll("path").attr("style", d), i && p.selectAll("path").attr("style", i);
  }
  return p.attr("label-offset-x", u), p.attr("transform", `translate(${-f / 2}, ${c / 2} )`), o.attr(
    "transform",
    `translate(${-(s.width / 2) - u - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`
  ), K(t, p), t.intersect = function(m) {
    const y = j.rect(t, m), b = y.y - (t.y ?? 0);
    if (h3 != 0 && (Math.abs(b) < (t.height ?? 0) / 2 || Math.abs(b) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let x = u * u * (1 - b * b / (h3 * h3));
      x != 0 && (x = Math.sqrt(Math.abs(x))), x = u - x, m.x - (t.x ?? 0) > 0 && (x = -x), y.x += x;
    }
    return y;
  }, n;
}
g(my, "tiltedCylinder");
async function yy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = s.width + t.padding, a = s.height + t.padding, l = [
    { x: -3 * a / 6, y: 0 },
    { x: o + 3 * a / 6, y: 0 },
    { x: o, y: -a },
    { x: 0, y: -a }
  ];
  let c;
  const { cssStyles: h3 } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(n), f = X(t, {}), d = pt(l), p = u.path(d, f);
    c = n.insert(() => p, ":first-child").attr("transform", `translate(${-o / 2}, ${a / 2})`), h3 && c.attr("style", h3);
  } else
    c = tr(n, o, a, l);
  return i && c.attr("style", i), t.width = o, t.height = a, K(t, c), t.intersect = function(u) {
    return j.polygon(t, l, u);
  }, n;
}
g(yy, "trapezoid");
async function xy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = 60, a = 20, l = Math.max(o, s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: h3 } = t, u = G.svg(n), f = X(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const d = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], p = pt(d), m = u.path(p, f), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h3 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h3), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), K(t, y), t.intersect = function(b) {
    return j.polygon(t, d, b);
  }, n;
}
g(xy, "trapezoidalPentagon");
async function by(e11, t) {
  var _a3;
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Dt((_a3 = gt().flowchart) == null ? void 0 : _a3.htmlLabels), l = s.width + (t.padding ?? 0), c = l + s.height, h3 = l + s.height, u = [
    { x: 0, y: 0 },
    { x: h3, y: 0 },
    { x: h3 / 2, y: -c }
  ], { cssStyles: f } = t, d = G.svg(n), p = X(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const m = pt(u), y = d.path(m, p), b = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), t.width = l, t.height = c, K(t, b), o.attr(
    "transform",
    `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${c / 2 - (s.height + (t.padding ?? 0) / (a ? 2 : 1) - (s.y - (s.top ?? 0)))})`
  ), t.intersect = function(x) {
    return N.info("Triangle intersect", t, u, x), j.polygon(t, u, x);
  }, n;
}
g(by, "triangle");
async function wy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 8, h3 = l + c, { cssStyles: u } = t, d = 70 - a, p = d > 0 ? d / 2 : 0, m = G.svg(n), y = X(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = [
    { x: -a / 2 - p, y: h3 / 2 },
    ...ur(
      -a / 2 - p,
      h3 / 2,
      a / 2 + p,
      h3 / 2,
      c,
      0.8
    ),
    { x: a / 2 + p, y: -h3 / 2 },
    { x: -a / 2 - p, y: -h3 / 2 }
  ], x = pt(b), w = m.path(x, y), v = n.insert(() => w, ":first-child");
  return v.attr("class", "basic label-container"), u && t.look !== "handDrawn" && v.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-a / 2 + (t.padding ?? 0) - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (s.y - (s.top ?? 0))})`
  ), K(t, v), t.intersect = function(C) {
    return j.polygon(t, b, C);
  }, n;
}
g(wy, "waveEdgedRectangle");
async function vy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s } = await ot(e11, t, st(t)), o = 100, a = 50, l = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h3 = l / c;
  let u = l, f = c;
  u > f * h3 ? f = u / h3 : u = f * h3, u = Math.max(u, o), f = Math.max(f, a);
  const d = Math.min(f * 0.2, f / 4), p = f + d * 2, { cssStyles: m } = t, y = G.svg(n), b = X(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const x = [
    { x: -u / 2, y: p / 2 },
    ...ur(-u / 2, p / 2, u / 2, p / 2, d, 1),
    { x: u / 2, y: -p / 2 },
    ...ur(u / 2, -p / 2, -u / 2, -p / 2, d, -1)
  ], w = pt(x), v = y.path(w, b), C = n.insert(() => v, ":first-child");
  return C.attr("class", "basic label-container"), m && t.look !== "handDrawn" && C.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), K(t, C), t.intersect = function(S) {
    return j.polygon(t, x, S);
  }, n;
}
g(vy, "waveRectangle");
async function Cy(e11, t) {
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: s, label: o } = await ot(e11, t, st(t)), a = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h3 = -a / 2, u = -l / 2, { cssStyles: f } = t, d = G.svg(n), p = X(t, {}), m = [
    { x: h3 - c, y: u - c },
    { x: h3 - c, y: u + l },
    { x: h3 + a, y: u + l },
    { x: h3 + a, y: u - c }
  ], y = `M${h3 - c},${u - c} L${h3 + a},${u - c} L${h3 + a},${u + l} L${h3 - c},${u + l} L${h3 - c},${u - c}
                M${h3 - c},${u} L${h3 + a},${u}
                M${h3},${u - c} L${h3},${u + l}`;
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const b = d.path(y, p), x = n.insert(() => b, ":first-child");
  return x.attr("transform", `translate(${c / 2}, ${c / 2})`), x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(s.width / 2) + c / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + c / 2 - (s.y - (s.top ?? 0))})`
  ), K(t, x), t.intersect = function(w) {
    return j.polygon(t, m, w);
  }, n;
}
g(Cy, "windowPane");
async function Ac(e11, t) {
  var _a3, _b2, _c2, _d2, _e2;
  const r = t;
  if (r.alias && (t.label = r.alias), t.look === "handDrawn") {
    const { themeVariables: rt } = oe(), { background: J } = rt, ut = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${J}`]
    };
    await Ac(e11, ut);
  }
  const i = oe();
  t.useHtmlLabels = i.htmlLabels;
  let n = ((_a3 = i.er) == null ? void 0 : _a3.diagramPadding) ?? 10, s = ((_b2 = i.er) == null ? void 0 : _b2.entityPadding) ?? 6;
  const { cssStyles: o } = t, { labelStyles: a, nodeStyles: l } = Z(t);
  if (r.attributes.length === 0 && t.label) {
    const rt = {
      rx: 0,
      ry: 0,
      labelPaddingX: n,
      labelPaddingY: n * 1.5
    };
    Ke(t.label, i) + rt.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const J = await Pn(e11, t, rt);
    if (!Dt(i.htmlLabels)) {
      const ut = J.select("text"), it = (_c2 = ut.node()) == null ? void 0 : _c2.getBBox();
      ut.attr("transform", `translate(${-it.width / 2}, 0)`);
    }
    return J;
  }
  i.htmlLabels || (n *= 1.25, s *= 1.25);
  let c = st(t);
  c || (c = "node default");
  const h3 = e11.insert("g").attr("class", c).attr("id", t.domId || t.id), u = await Qr(h3, t.label ?? "", i, 0, 0, ["name"], a);
  u.height += s;
  let f = 0;
  const d = [], p = [];
  let m = 0, y = 0, b = 0, x = 0, w = true, v = true;
  for (const rt of r.attributes) {
    const J = await Qr(
      h3,
      rt.type,
      i,
      0,
      f,
      ["attribute-type"],
      a
    );
    m = Math.max(m, J.width + n);
    const ut = await Qr(
      h3,
      rt.name,
      i,
      0,
      f,
      ["attribute-name"],
      a
    );
    y = Math.max(y, ut.width + n);
    const it = await Qr(
      h3,
      rt.keys.join(),
      i,
      0,
      f,
      ["attribute-keys"],
      a
    );
    b = Math.max(b, it.width + n);
    const Bt = await Qr(
      h3,
      rt.comment,
      i,
      0,
      f,
      ["attribute-comment"],
      a
    );
    x = Math.max(x, Bt.width + n);
    const I = Math.max(J.height, ut.height, it.height, Bt.height) + s;
    p.push({ yOffset: f, rowHeight: I }), f += I;
  }
  let C = 4;
  b <= n && (w = false, b = 0, C--), x <= n && (v = false, x = 0, C--);
  const S = h3.node().getBBox();
  if (u.width + n * 2 - (m + y + b + x) > 0) {
    const rt = u.width + n * 2 - (m + y + b + x);
    m += rt / C, y += rt / C, b > 0 && (b += rt / C), x > 0 && (x += rt / C);
  }
  const T = m + y + b + x, O = G.svg(h3), k = X(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  let E = 0;
  p.length > 0 && (E = p.reduce((rt, J) => rt + ((J == null ? void 0 : J.rowHeight) ?? 0), 0));
  const L = Math.max(S.width + n * 2, (t == null ? void 0 : t.width) || 0, T), D = Math.max((E ?? 0) + u.height, (t == null ? void 0 : t.height) || 0), F = -L / 2, M = -D / 2;
  h3.selectAll("g:not(:first-child)").each((rt, J, ut) => {
    const it = dt(ut[J]), Bt = it.attr("transform");
    let I = 0, xt = 0;
    if (Bt) {
      const ct = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Bt);
      ct && (I = parseFloat(ct[1]), xt = parseFloat(ct[2]), it.attr("class").includes("attribute-name") ? I += m : it.attr("class").includes("attribute-keys") ? I += m + y : it.attr("class").includes("attribute-comment") && (I += m + y + b));
    }
    it.attr(
      "transform",
      `translate(${F + n / 2 + I}, ${xt + M + u.height + s / 2})`
    );
  }), h3.select(".name").attr("transform", "translate(" + -u.width / 2 + ", " + (M + s / 2) + ")");
  const $ = O.rectangle(F, M, L, D, k), A = h3.insert(() => $, ":first-child").attr("style", o.join("")), { themeVariables: P } = oe(), { rowEven: R, rowOdd: q, nodeBorder: Y } = P;
  d.push(0);
  for (const [rt, J] of p.entries()) {
    const it = (rt + 1) % 2 === 0 && J.yOffset !== 0, Bt = O.rectangle(F, u.height + M + (J == null ? void 0 : J.yOffset), L, J == null ? void 0 : J.rowHeight, {
      ...k,
      fill: it ? R : q,
      stroke: Y
    });
    h3.insert(() => Bt, "g.label").attr("style", o.join("")).attr("class", `row-rect-${it ? "even" : "odd"}`);
  }
  let U = O.line(F, u.height + M, L + F, u.height + M, k);
  h3.insert(() => U).attr("class", "divider"), U = O.line(m + F, u.height + M, m + F, D + M, k), h3.insert(() => U).attr("class", "divider"), w && (U = O.line(
    m + y + F,
    u.height + M,
    m + y + F,
    D + M,
    k
  ), h3.insert(() => U).attr("class", "divider")), v && (U = O.line(
    m + y + b + F,
    u.height + M,
    m + y + b + F,
    D + M,
    k
  ), h3.insert(() => U).attr("class", "divider"));
  for (const rt of d)
    U = O.line(
      F,
      u.height + M + rt,
      L + F,
      u.height + M + rt,
      k
    ), h3.insert(() => U).attr("class", "divider");
  if (K(t, A), l && t.look !== "handDrawn") {
    const J = (_e2 = (_d2 = l.split(";")) == null ? void 0 : _d2.filter((ut) => ut.includes("stroke"))) == null ? void 0 : _e2.map((ut) => `${ut}`).join("; ");
    h3.selectAll("path").attr("style", J ?? ""), h3.selectAll(".row-rect-even path").attr("style", l);
  }
  return t.intersect = function(rt) {
    return j.rect(t, rt);
  }, h3;
}
g(Ac, "erBox");
async function Qr(e11, t, r, i = 0, n = 0, s = [], o = "") {
  const a = e11.insert("g").attr("class", `label ${s.join(" ")}`).attr("transform", `translate(${i}, ${n})`).attr("style", o);
  t !== bh(t) && (t = bh(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = a.node().appendChild(
    await dr(
      a,
      t,
      {
        width: Ke(t, r) + 100,
        style: o,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h3 = l.children[0];
    for (h3.textContent = h3.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h3.childNodes[0]; )
      h3 = h3.childNodes[0], h3.textContent = h3.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (Dt(r.htmlLabels)) {
    const h3 = l.children[0];
    h3.style.textAlign = "start";
    const u = dt(l);
    c = h3.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
g(Qr, "addText");
async function ky(e11, t, r, i, n = r.class.padding ?? 12) {
  const s = i ? 0 : 3, o = e11.insert("g").attr("class", st(t)).attr("id", t.domId || t.id);
  let a = null, l = null, c = null, h3 = null, u = 0, f = 0, d = 0;
  if (a = o.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const x = t.annotations[0];
    await sn(a, { text: `«${x}»` }, 0), u = a.node().getBBox().height;
  }
  l = o.insert("g").attr("class", "label-group text"), await sn(l, t, 0, ["font-weight: bolder"]);
  const p = l.node().getBBox();
  f = p.height, c = o.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const x of t.members) {
    const w = await sn(c, x, m, [x.parseClassifier()]);
    m += w + s;
  }
  d = c.node().getBBox().height, d <= 0 && (d = n / 2), h3 = o.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const x of t.methods) {
    const w = await sn(h3, x, y, [x.parseClassifier()]);
    y += w + s;
  }
  let b = o.node().getBBox();
  if (a !== null) {
    const x = a.node().getBBox();
    a.attr("transform", `translate(${-x.width / 2})`);
  }
  return l.attr("transform", `translate(${-p.width / 2}, ${u})`), b = o.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + n * 2})`
  ), b = o.node().getBBox(), h3.attr(
    "transform",
    `translate(0, ${u + f + (d ? d + n * 4 : n * 2)})`
  ), b = o.node().getBBox(), { shapeSvg: o, bbox: b };
}
g(ky, "textHelper");
async function sn(e11, t, r, i = []) {
  const n = e11.insert("g").attr("class", "label").attr("style", i.join("; ")), s = oe();
  let o = "useHtmlLabels" in t ? t.useHtmlLabels : Dt(s.htmlLabels) ?? true, a = "";
  "text" in t ? a = t.text : a = t.label, !o && a.startsWith("\\") && (a = a.substring(1)), gi(a) && (o = true);
  const l = await dr(
    n,
    ya(Nr(a)),
    {
      width: Ke(a, s) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o
    },
    s
  );
  let c, h3 = 1;
  if (o) {
    const u = l.children[0], f = dt(l);
    h3 = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h3 += u.innerHTML.split("<mrow>").length - 1);
    const d = u.getElementsByTagName("img");
    if (d) {
      const p = a.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function b() {
              var _a3;
              if (m.style.display = "flex", m.style.flexDirection = "column", p) {
                const x = ((_a3 = s.fontSize) == null ? void 0 : _a3.toString()) ?? window.getComputedStyle(document.body).fontSize, v = parseInt(x, 10) * 5 + "px";
                m.style.minWidth = v, m.style.maxWidth = v;
              } else
                m.style.width = "100%";
              y(m);
            }
            g(b, "setupImage"), setTimeout(() => {
              m.complete && b();
            }), m.addEventListener("error", b), m.addEventListener("load", b);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && dt(l).selectAll("tspan").attr("font-weight", ""), h3 = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = a[0] + a.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), a[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return n.attr("transform", "translate(0," + (-c.height / (2 * h3) + r) + ")"), c.height;
}
g(sn, "addText");
async function _y(e11, t) {
  var _a3, _b2;
  const r = gt(), i = r.class.padding ?? 12, n = i, s = t.useHtmlLabels ?? Dt(r.htmlLabels) ?? true, o = t;
  o.annotations = o.annotations ?? [], o.members = o.members ?? [], o.methods = o.methods ?? [];
  const { shapeSvg: a, bbox: l } = await ky(e11, t, r, s, n), { labelStyles: c, nodeStyles: h3 } = Z(t);
  t.labelStyle = c, t.cssStyles = o.styles || "";
  const u = ((_a3 = o.styles) == null ? void 0 : _a3.join(";")) || h3 || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const f = o.members.length === 0 && o.methods.length === 0 && !((_b2 = r.class) == null ? void 0 : _b2.hideEmptyMembersBox), d = G.svg(a), p = X(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  o.members.length === 0 && o.methods.length === 0 ? y += n : o.members.length > 0 && o.methods.length === 0 && (y += n * 2);
  const b = -m / 2, x = -y / 2, w = d.rectangle(
    b - i,
    x - i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (f ? i * 2 : o.members.length === 0 && o.methods.length === 0 ? -i : 0),
    p
  ), v = a.insert(() => w, ":first-child");
  v.attr("class", "basic label-container");
  const C = v.node().getBBox();
  a.selectAll(".text").each((k, E, L) => {
    var _a4;
    const D = dt(L[E]), F = D.attr("transform");
    let M = 0;
    if (F) {
      const R = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(F);
      R && (M = parseFloat(R[2]));
    }
    let $ = M + x + i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0);
    s || ($ -= 4);
    let A = b;
    (D.attr("class").includes("label-group") || D.attr("class").includes("annotation-group")) && (A = -((_a4 = D.node()) == null ? void 0 : _a4.getBBox().width) / 2 || 0, a.selectAll("text").each(function(P, R, q) {
      window.getComputedStyle(q[R]).textAnchor === "middle" && (A = 0);
    })), D.attr("transform", `translate(${A}, ${$})`);
  });
  const S = a.select(".annotation-group").node().getBBox().height - (f ? i / 2 : 0) || 0, T = a.select(".label-group").node().getBBox().height - (f ? i / 2 : 0) || 0, O = a.select(".members-group").node().getBBox().height - (f ? i / 2 : 0) || 0;
  if (o.members.length > 0 || o.methods.length > 0 || f) {
    const k = d.line(
      C.x,
      S + T + x + i,
      C.x + C.width,
      S + T + x + i,
      p
    );
    a.insert(() => k).attr("class", "divider").attr("style", u);
  }
  if (f || o.members.length > 0 || o.methods.length > 0) {
    const k = d.line(
      C.x,
      S + T + O + x + n * 2 + i,
      C.x + C.width,
      S + T + O + x + i + n * 2,
      p
    );
    a.insert(() => k).attr("class", "divider").attr("style", u);
  }
  if (o.look !== "handDrawn" && a.selectAll("path").attr("style", u), v.select(":nth-child(2)").attr("style", u), a.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? a.selectAll("span").attr("style", t.labelStyle) : a.selectAll("span").attr("style", u), !s) {
    const k = RegExp(/color\s*:\s*([^;]*)/), E = k.exec(u);
    if (E) {
      const L = E[0].replace("color", "fill");
      a.selectAll("tspan").attr("style", L);
    } else if (c) {
      const L = k.exec(c);
      if (L) {
        const D = L[0].replace("color", "fill");
        a.selectAll("tspan").attr("style", D);
      }
    }
  }
  return K(t, v), t.intersect = function(k) {
    return j.rect(t, k);
  }, a;
}
g(_y, "classBox");
async function Sy(e11, t) {
  var _a3, _b2;
  const { labelStyles: r, nodeStyles: i } = Z(t);
  t.labelStyle = r;
  const n = t, s = t, o = 20, a = 20, l = "verifyMethod" in t, c = st(t), h3 = e11.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await Te(
    h3,
    `&lt;&lt;${n.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await Te(h3, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = u;
  const d = await Te(
    h3,
    n.name,
    f,
    t.labelStyle + "; font-weight: bold;"
  );
  if (f += d + a, l) {
    const S = await Te(
      h3,
      `${n.requirementId ? `id: ${n.requirementId}` : ""}`,
      f,
      t.labelStyle
    );
    f += S;
    const T = await Te(
      h3,
      `${n.text ? `Text: ${n.text}` : ""}`,
      f,
      t.labelStyle
    );
    f += T;
    const O = await Te(
      h3,
      `${n.risk ? `Risk: ${n.risk}` : ""}`,
      f,
      t.labelStyle
    );
    f += O, await Te(
      h3,
      `${n.verifyMethod ? `Verification: ${n.verifyMethod}` : ""}`,
      f,
      t.labelStyle
    );
  } else {
    const S = await Te(
      h3,
      `${s.type ? `Type: ${s.type}` : ""}`,
      f,
      t.labelStyle
    );
    f += S, await Te(
      h3,
      `${s.docRef ? `Doc Ref: ${s.docRef}` : ""}`,
      f,
      t.labelStyle
    );
  }
  const p = (((_a3 = h3.node()) == null ? void 0 : _a3.getBBox().width) ?? 200) + o, m = (((_b2 = h3.node()) == null ? void 0 : _b2.getBBox().height) ?? 200) + o, y = -p / 2, b = -m / 2, x = G.svg(h3), w = X(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const v = x.rectangle(y, b, p, m, w), C = h3.insert(() => v, ":first-child");
  if (C.attr("class", "basic label-container").attr("style", i), h3.selectAll(".label").each((S, T, O) => {
    const k = dt(O[T]), E = k.attr("transform");
    let L = 0, D = 0;
    if (E) {
      const A = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(E);
      A && (L = parseFloat(A[1]), D = parseFloat(A[2]));
    }
    const F = D - m / 2;
    let M = y + o / 2;
    (T === 0 || T === 1) && (M = L), k.attr("transform", `translate(${M}, ${F + o})`);
  }), f > u + d + a) {
    const S = x.line(
      y,
      b + u + d + a,
      y + p,
      b + u + d + a,
      w
    );
    h3.insert(() => S).attr("style", i);
  }
  return K(t, C), t.intersect = function(S) {
    return j.rect(t, S);
  }, h3;
}
g(Sy, "requirementBox");
async function Te(e11, t, r, i = "") {
  if (t === "")
    return 0;
  const n = e11.insert("g").attr("class", "label").attr("style", i), s = gt(), o = s.htmlLabels ?? true, a = await dr(
    n,
    ya(Nr(t)),
    {
      width: Ke(t, s) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o,
      style: i
    },
    s
  );
  let l;
  if (o) {
    const c = a.children[0], h3 = dt(a);
    l = c.getBoundingClientRect(), h3.attr("width", l.width), h3.attr("height", l.height);
  } else {
    const c = a.children[0];
    for (const h3 of c.children)
      h3.textContent = h3.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h3.setAttribute("style", i);
    l = a.getBBox(), l.height += 6;
  }
  return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
g(Te, "addText");
var yB = g((e11) => {
  switch (e11) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Ty(e11, t, { config: r }) {
  var _a3, _b2;
  const { labelStyles: i, nodeStyles: n } = Z(t);
  t.labelStyle = i || "";
  const s = 10, o = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: a,
    bbox: l,
    label: c
  } = await ot(e11, t, st(t)), h3 = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && ((_a3 = r == null ? void 0 : r.kanban) == null ? void 0 : _a3.ticketBaseUrl) && (u = (_b2 = r == null ? void 0 : r.kanban) == null ? void 0 : _b2.ticketBaseUrl.replace("#TICKET#", t.ticket), f = a.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const d = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: false
  };
  let p, m;
  f ? { label: p, bbox: m } = await go(
    f,
    "ticket" in t && t.ticket || "",
    d
  ) : { label: p, bbox: m } = await go(
    a,
    "ticket" in t && t.ticket || "",
    d
  );
  const { label: y, bbox: b } = await go(
    a,
    "assigned" in t && t.assigned || "",
    d
  );
  t.width = o;
  const x = 10, w = (t == null ? void 0 : t.width) || 0, v = Math.max(m.height, b.height) / 2, C = Math.max(l.height + x * 2, (t == null ? void 0 : t.height) || 0) + v, S = -w / 2, T = -C / 2;
  c.attr(
    "transform",
    "translate(" + (h3 - w / 2) + ", " + (-v - l.height / 2) + ")"
  ), p.attr(
    "transform",
    "translate(" + (h3 - w / 2) + ", " + (-v + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h3 + w / 2 - b.width - 2 * s) + ", " + (-v + l.height / 2) + ")"
  );
  let O;
  const { rx: k, ry: E } = t, { cssStyles: L } = t;
  if (t.look === "handDrawn") {
    const D = G.svg(a), F = X(t, {}), M = k || E ? D.path(Je(S, T, w, C, k || 0), F) : D.rectangle(S, T, w, C, F);
    O = a.insert(() => M, ":first-child"), O.attr("class", "basic label-container").attr("style", L || null);
  } else {
    O = a.insert("rect", ":first-child"), O.attr("class", "basic label-container __APA__").attr("style", n).attr("rx", k ?? 5).attr("ry", E ?? 5).attr("x", S).attr("y", T).attr("width", w).attr("height", C);
    const D = "priority" in t && t.priority;
    if (D) {
      const F = a.append("line"), M = S + 2, $ = T + Math.floor((k ?? 0) / 2), A = T + C - Math.floor((k ?? 0) / 2);
      F.attr("x1", M).attr("y1", $).attr("x2", M).attr("y2", A).attr("stroke-width", "4").attr("stroke", yB(D));
    }
  }
  return K(t, O), t.height = C, t.intersect = function(D) {
    return j.rect(t, D);
  }, a;
}
g(Ty, "kanbanItem");
var xB = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: oy
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: ny
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: ly
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: fy
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Mm
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: _m
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: ey
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Pm
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: Vm
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: Gm
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: yy
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: Um
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Fm
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: gy
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Cm
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: sy
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: uy
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: hy
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Im
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Nm
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Bm
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Lm
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Am
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: Xm
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: wy
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Rm
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: my
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: Km
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Em
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: $m
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: by
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Cy
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Om
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: xy
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Dm
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: ay
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: Jm
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: Qm
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: vm
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Tm
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: py
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: dy
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: vy
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: ry
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: Zm
  }
];
var bB = g(() => {
  const t = [
    ...Object.entries({
      // States
      state: cy,
      choice: km,
      note: ty,
      // Rectangles
      rectWithTitle: iy,
      labelRect: Ym,
      // Icons
      iconSquare: Hm,
      iconCircle: Wm,
      icon: zm,
      iconRounded: qm,
      imageSquare: jm,
      anchor: wm,
      // Kanban diagram
      kanbanItem: Ty,
      // class diagram
      classBox: _y,
      // er diagram
      erBox: Ac,
      // Requirement diagram
      requirementBox: Sy
    }),
    ...xB.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((n) => [n, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap");
var By = bB();
function wB(e11) {
  return e11 in By;
}
g(wB, "isValidShape");
var Ia = /* @__PURE__ */ new Map();
async function Ly(e11, t, r) {
  let i, n;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const s = t.shape ? By[t.shape] : void 0;
  if (!s)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let o;
    r.config.securityLevel === "sandbox" ? o = "_top" : t.linkTarget && (o = t.linkTarget || "_blank"), i = e11.insert("svg:a").attr("xlink:href", t.link).attr("target", o ?? null), n = await s(i, t, r);
  } else
    n = await s(e11, t, r), i = n;
  return t.tooltip && n.attr("title", t.tooltip), Ia.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
g(Ly, "insertNode");
var d3 = g((e11, t) => {
  Ia.set(t.id, e11);
}, "setNodeElem");
var p3 = g(() => {
  Ia.clear();
}, "clear");
var g3 = g((e11) => {
  const t = Ia.get(e11.id);
  N.trace(
    "Transforming node",
    e11.diff,
    e11,
    "translate(" + (e11.x - e11.width / 2 - 5) + ", " + e11.width / 2 + ")"
  );
  const r = 8, i = e11.diff || 0;
  return e11.clusterNode ? t.attr(
    "transform",
    "translate(" + (e11.x + i - e11.width / 2) + ", " + (e11.y - e11.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e11.x + ", " + e11.y + ")"), i;
}, "positionNode");
var vB = g((e11, t, r, i, n, s) => {
  t.arrowTypeStart && Su(e11, "start", t.arrowTypeStart, r, i, n, s), t.arrowTypeEnd && Su(e11, "end", t.arrowTypeEnd, r, i, n, s);
}, "addEdgeMarkers");
var CB = {
  arrow_cross: { type: "cross", fill: false },
  arrow_point: { type: "point", fill: true },
  arrow_barb: { type: "barb", fill: true },
  arrow_circle: { type: "circle", fill: false },
  aggregation: { type: "aggregation", fill: false },
  extension: { type: "extension", fill: false },
  composition: { type: "composition", fill: true },
  dependency: { type: "dependency", fill: true },
  lollipop: { type: "lollipop", fill: false },
  only_one: { type: "onlyOne", fill: false },
  zero_or_one: { type: "zeroOrOne", fill: false },
  one_or_more: { type: "oneOrMore", fill: false },
  zero_or_more: { type: "zeroOrMore", fill: false },
  requirement_arrow: { type: "requirement_arrow", fill: false },
  requirement_contains: { type: "requirement_contains", fill: false }
};
var Su = g((e11, t, r, i, n, s, o) => {
  var _a3;
  const a = CB[r];
  if (!a) {
    N.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l = a.type, h3 = `${n}_${s}-${l}${t === "start" ? "Start" : "End"}`;
  if (o && o.trim() !== "") {
    const u = o.replace(/[^\dA-Za-z]/g, "_"), f = `${h3}_${u}`;
    if (!document.getElementById(f)) {
      const d = document.getElementById(h3);
      if (d) {
        const p = d.cloneNode(true);
        p.id = f, p.querySelectorAll("path, circle, line").forEach((y) => {
          y.setAttribute("stroke", o), a.fill && y.setAttribute("fill", o);
        }), (_a3 = d.parentNode) == null ? void 0 : _a3.appendChild(p);
      }
    }
    e11.attr(`marker-${t}`, `url(${i}#${f})`);
  } else
    e11.attr(`marker-${t}`, `url(${i}#${h3})`);
}, "addEdgeMarker");
var ca = /* @__PURE__ */ new Map();
var Nt = /* @__PURE__ */ new Map();
var m3 = g(() => {
  ca.clear(), Nt.clear();
}, "clear");
var Xi = g((e11) => e11 ? e11.reduce((r, i) => r + ";" + i, "") : "", "getLabelStyles");
var kB = g(async (e11, t) => {
  let r = Dt(gt().flowchart.htmlLabels);
  const i = await dr(e11, t.label, {
    style: Xi(t.labelStyle),
    useHtmlLabels: r,
    addSvgBackground: true,
    isNode: false
  });
  N.info("abc82", t, t.labelType);
  const n = e11.insert("g").attr("class", "edgeLabel"), s = n.insert("g").attr("class", "label");
  s.node().appendChild(i);
  let o = i.getBBox();
  if (r) {
    const l = i.children[0], c = dt(i);
    o = l.getBoundingClientRect(), c.attr("width", o.width), c.attr("height", o.height);
  }
  s.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), ca.set(t.id, n), t.width = o.width, t.height = o.height;
  let a;
  if (t.startLabelLeft) {
    const l = await Sr(
      t.startLabelLeft,
      Xi(t.labelStyle)
    ), c = e11.insert("g").attr("class", "edgeTerminals"), h3 = c.insert("g").attr("class", "inner");
    a = h3.node().appendChild(l);
    const u = l.getBBox();
    h3.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), Nt.get(t.id) || Nt.set(t.id, {}), Nt.get(t.id).startLeft = c, an(a, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const l = await Sr(
      t.startLabelRight,
      Xi(t.labelStyle)
    ), c = e11.insert("g").attr("class", "edgeTerminals"), h3 = c.insert("g").attr("class", "inner");
    a = c.node().appendChild(l), h3.node().appendChild(l);
    const u = l.getBBox();
    h3.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), Nt.get(t.id) || Nt.set(t.id, {}), Nt.get(t.id).startRight = c, an(a, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const l = await Sr(t.endLabelLeft, Xi(t.labelStyle)), c = e11.insert("g").attr("class", "edgeTerminals"), h3 = c.insert("g").attr("class", "inner");
    a = h3.node().appendChild(l);
    const u = l.getBBox();
    h3.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), Nt.get(t.id) || Nt.set(t.id, {}), Nt.get(t.id).endLeft = c, an(a, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const l = await Sr(t.endLabelRight, Xi(t.labelStyle)), c = e11.insert("g").attr("class", "edgeTerminals"), h3 = c.insert("g").attr("class", "inner");
    a = h3.node().appendChild(l);
    const u = l.getBBox();
    h3.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), Nt.get(t.id) || Nt.set(t.id, {}), Nt.get(t.id).endRight = c, an(a, t.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function an(e11, t) {
  gt().flowchart.htmlLabels && e11 && (e11.style.width = t.length * 9 + "px", e11.style.height = "12px");
}
g(an, "setTerminalWidth");
var _B = g((e11, t) => {
  N.debug("Moving label abc88 ", e11.id, e11.label, ca.get(e11.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = gt(), { subGraphTitleTotalMargin: n } = Gl(i);
  if (e11.label) {
    const s = ca.get(e11.id);
    let o = e11.x, a = e11.y;
    if (r) {
      const l = Ae.calcLabelPosition(r);
      N.debug(
        "Moving label " + e11.label + " from (",
        o,
        ",",
        a,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (o = l.x, a = l.y);
    }
    s.attr("transform", `translate(${o}, ${a + n / 2})`);
  }
  if (e11.startLabelLeft) {
    const s = Nt.get(e11.id).startLeft;
    let o = e11.x, a = e11.y;
    if (r) {
      const l = Ae.calcTerminalLabelPosition(e11.arrowTypeStart ? 10 : 0, "start_left", r);
      o = l.x, a = l.y;
    }
    s.attr("transform", `translate(${o}, ${a})`);
  }
  if (e11.startLabelRight) {
    const s = Nt.get(e11.id).startRight;
    let o = e11.x, a = e11.y;
    if (r) {
      const l = Ae.calcTerminalLabelPosition(
        e11.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      o = l.x, a = l.y;
    }
    s.attr("transform", `translate(${o}, ${a})`);
  }
  if (e11.endLabelLeft) {
    const s = Nt.get(e11.id).endLeft;
    let o = e11.x, a = e11.y;
    if (r) {
      const l = Ae.calcTerminalLabelPosition(e11.arrowTypeEnd ? 10 : 0, "end_left", r);
      o = l.x, a = l.y;
    }
    s.attr("transform", `translate(${o}, ${a})`);
  }
  if (e11.endLabelRight) {
    const s = Nt.get(e11.id).endRight;
    let o = e11.x, a = e11.y;
    if (r) {
      const l = Ae.calcTerminalLabelPosition(e11.arrowTypeEnd ? 10 : 0, "end_right", r);
      o = l.x, a = l.y;
    }
    s.attr("transform", `translate(${o}, ${a})`);
  }
}, "positionEdgeLabel");
var SB = g((e11, t) => {
  const r = e11.x, i = e11.y, n = Math.abs(t.x - r), s = Math.abs(t.y - i), o = e11.width / 2, a = e11.height / 2;
  return n >= o || s >= a;
}, "outsideNode");
var TB = g((e11, t, r) => {
  N.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e11.x} y:${e11.y} w:${e11.width} h:${e11.height}`);
  const i = e11.x, n = e11.y, s = Math.abs(i - r.x), o = e11.width / 2;
  let a = r.x < t.x ? o - s : o + s;
  const l = e11.height / 2, c = Math.abs(t.y - r.y), h3 = Math.abs(t.x - r.x);
  if (Math.abs(n - t.y) * o > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - n : n - l - t.y;
    a = h3 * u / c;
    const f = {
      x: r.x < t.x ? r.x + a : r.x - h3 + a,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return a === 0 && (f.x = t.x, f.y = t.y), h3 === 0 && (f.x = t.x), c === 0 && (f.y = t.y), N.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h3}, r ${a}`, f), f;
  } else {
    r.x < t.x ? a = t.x - o - i : a = i - o - t.x;
    let u = c * a / h3, f = r.x < t.x ? r.x + h3 - a : r.x - h3 + a, d = r.y < t.y ? r.y + u : r.y - u;
    return N.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h3}, r ${a}`, { _x: f, _y: d }), a === 0 && (f = t.x, d = t.y), h3 === 0 && (f = t.x), c === 0 && (d = t.y), { x: f, y: d };
  }
}, "intersection");
var Tu = g((e11, t) => {
  N.warn("abc88 cutPathAtIntersect", e11, t);
  let r = [], i = e11[0], n = false;
  return e11.forEach((s) => {
    if (N.info("abc88 checking point", s, t), !SB(t, s) && !n) {
      const o = TB(t, i, s);
      N.debug("abc88 inside", s, i, o), N.debug("abc88 intersection", o, t);
      let a = false;
      r.forEach((l) => {
        a = a || l.x === o.x && l.y === o.y;
      }), r.some((l) => l.x === o.x && l.y === o.y) ? N.warn("abc88 no intersect", o, r) : r.push(o), n = true;
    } else
      N.warn("abc88 outside", s, i), i = s, n || r.push(s);
  }), N.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Ay(e11) {
  const t = [], r = [];
  for (let i = 1; i < e11.length - 1; i++) {
    const n = e11[i - 1], s = e11[i], o = e11[i + 1];
    (n.x === s.x && s.y === o.y && Math.abs(s.x - o.x) > 5 && Math.abs(s.y - n.y) > 5 || n.y === s.y && s.x === o.x && Math.abs(s.x - n.x) > 5 && Math.abs(s.y - o.y) > 5) && (t.push(s), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
g(Ay, "extractCornerPoints");
var Bu = g(function(e11, t, r) {
  const i = t.x - e11.x, n = t.y - e11.y, s = Math.sqrt(i * i + n * n), o = r / s;
  return { x: t.x - o * i, y: t.y - o * n };
}, "findAdjacentPoint");
var BB = g(function(e11) {
  const { cornerPointPositions: t } = Ay(e11), r = [];
  for (let i = 0; i < e11.length; i++)
    if (t.includes(i)) {
      const n = e11[i - 1], s = e11[i + 1], o = e11[i], a = Bu(n, o, 5), l = Bu(s, o, 5), c = l.x - a.x, h3 = l.y - a.y;
      r.push(a);
      const u = Math.sqrt(2) * 2;
      let f = { x: o.x, y: o.y };
      if (Math.abs(s.x - n.x) > 10 && Math.abs(s.y - n.y) >= 10) {
        N.debug(
          "Corner point fixing",
          Math.abs(s.x - n.x),
          Math.abs(s.y - n.y)
        );
        const d = 5;
        o.x === a.x ? f = {
          x: c < 0 ? a.x - d + u : a.x + d - u,
          y: h3 < 0 ? a.y - u : a.y + u
        } : f = {
          x: c < 0 ? a.x - u : a.x + u,
          y: h3 < 0 ? a.y - d + u : a.y + d - u
        };
      } else
        N.debug(
          "Corner point skipping fixing",
          Math.abs(s.x - n.x),
          Math.abs(s.y - n.y)
        );
      r.push(f, l);
    } else
      r.push(e11[i]);
  return r;
}, "fixCorners");
var LB = g(function(e11, t, r, i, n, s, o) {
  var _a3;
  const { handDrawnSeed: a } = gt();
  let l = t.points, c = false;
  const h3 = n;
  var u = s;
  const f = [];
  for (const k in t.cssCompiledStyles)
    gp(k) || f.push(t.cssCompiledStyles[k]);
  u.intersect && h3.intersect && (l = l.slice(1, t.points.length - 1), l.unshift(h3.intersect(l[0])), N.debug(
    "Last point APA12",
    t.start,
    "-->",
    t.end,
    l[l.length - 1],
    u,
    u.intersect(l[l.length - 1])
  ), l.push(u.intersect(l[l.length - 1]))), t.toCluster && (N.info("to cluster abc88", r.get(t.toCluster)), l = Tu(t.points, r.get(t.toCluster).node), c = true), t.fromCluster && (N.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(l, null, 2)
  ), l = Tu(l.reverse(), r.get(t.fromCluster).node).reverse(), c = true);
  let d = l.filter((k) => !Number.isNaN(k.y));
  d = BB(d);
  let p = bs;
  switch (p = Ys, t.curve) {
    case "linear":
      p = Ys;
      break;
    case "basis":
      p = bs;
      break;
    case "cardinal":
      p = Kp;
      break;
    case "bumpX":
      p = Up;
      break;
    case "bumpY":
      p = Yp;
      break;
    case "catmullRom":
      p = Qp;
      break;
    case "monotoneX":
      p = ng;
      break;
    case "monotoneY":
      p = sg;
      break;
    case "natural":
      p = og;
      break;
    case "step":
      p = lg;
      break;
    case "stepAfter":
      p = hg;
      break;
    case "stepBefore":
      p = cg;
      break;
    default:
      p = bs;
  }
  const { x: m, y } = Z1(t), b = _C().x(m).y(y).curve(p);
  let x;
  switch (t.thickness) {
    case "normal":
      x = "edge-thickness-normal";
      break;
    case "thick":
      x = "edge-thickness-thick";
      break;
    case "invisible":
      x = "edge-thickness-invisible";
      break;
    default:
      x = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      x += " edge-pattern-solid";
      break;
    case "dotted":
      x += " edge-pattern-dotted";
      break;
    case "dashed":
      x += " edge-pattern-dashed";
      break;
    default:
      x += " edge-pattern-solid";
  }
  let w, v = b(d);
  const C = Array.isArray(t.style) ? t.style : t.style ? [t.style] : [];
  let S = C.find((k) => k == null ? void 0 : k.startsWith("stroke:"));
  if (t.look === "handDrawn") {
    const k = G.svg(e11);
    Object.assign([], d);
    const E = k.path(v, {
      roughness: 0.3,
      seed: a
    });
    x += " transition", w = dt(E).select("path").attr("id", t.id).attr("class", " " + x + (t.classes ? " " + t.classes : "")).attr("style", C ? C.reduce((D, F) => D + ";" + F, "") : "");
    let L = w.attr("d");
    w.attr("d", L), e11.node().appendChild(w.node());
  } else {
    const k = f.join(";"), E = C ? C.reduce((F, M) => F + M + ";", "") : "";
    let L = "";
    t.animate && (L = " edge-animation-fast"), t.animation && (L = " edge-animation-" + t.animation);
    const D = k ? k + ";" + E + ";" : E;
    w = e11.append("path").attr("d", v).attr("id", t.id).attr(
      "class",
      " " + x + (t.classes ? " " + t.classes : "") + (L ?? "")
    ).attr("style", D), S = (_a3 = D.match(/stroke:([^;]+)/)) == null ? void 0 : _a3[1];
  }
  let T = "";
  (gt().flowchart.arrowMarkerAbsolute || gt().state.arrowMarkerAbsolute) && (T = Mf(true)), N.info("arrowTypeStart", t.arrowTypeStart), N.info("arrowTypeEnd", t.arrowTypeEnd), vB(w, t, T, o, i, S);
  let O = {};
  return c && (O.updatedPath = l), O.originalPath = t.points, O;
}, "insertEdge");
var AB = g((e11, t, r, i) => {
  t.forEach((n) => {
    UB[n](e11, r, i);
  });
}, "insertMarkers");
var EB = g((e11, t, r) => {
  N.trace("Making markers for ", r), e11.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
var MB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
var $B = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
var FB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
var OB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e11.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
var DB = g((e11, t, r) => {
  e11.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e11.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
var IB = g((e11, t, r) => {
  e11.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e11.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
var RB = g((e11, t, r) => {
  e11.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e11.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
var PB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var NB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one");
var zB = g((e11, t, r) => {
  const i = e11.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const n = e11.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one");
var WB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e11.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more");
var qB = g((e11, t, r) => {
  const i = e11.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const n = e11.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more");
var HB = g((e11, t, r) => {
  e11.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow");
var jB = g((e11, t, r) => {
  const i = e11.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains");
var UB = {
  extension: EB,
  composition: MB,
  aggregation: $B,
  dependency: FB,
  lollipop: OB,
  point: DB,
  circle: IB,
  cross: RB,
  barb: PB,
  only_one: NB,
  zero_or_one: zB,
  one_or_more: WB,
  zero_or_more: qB,
  requirement_arrow: HB,
  requirement_contains: jB
};
var YB = AB;
var GB = {
  common: Ti,
  getConfig: oe,
  insertCluster: eB,
  insertEdge: LB,
  insertEdgeLabel: kB,
  insertMarkers: YB,
  insertNode: Ly,
  interpolateToCurve: hc,
  labelHelper: ot,
  log: N,
  positionEdgeLabel: _B
};
var _n = {};
var Ey = g((e11) => {
  for (const t of e11)
    _n[t.name] = t;
}, "registerLayoutLoaders");
var VB = g(() => {
  Ey([
    {
      name: "dagre",
      loader: g(async () => await import("./dagre-JOIXM2OF--buugMtu-P3VCGK5D.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
VB();
var y3 = g(async (e11, t) => {
  if (!(e11.layoutAlgorithm in _n))
    throw new Error(`Unknown layout algorithm: ${e11.layoutAlgorithm}`);
  const r = _n[e11.layoutAlgorithm];
  return (await r.loader()).render(e11, t, GB, {
    algorithm: r.algorithm
  });
}, "render");
var x3 = g((e11 = "", { fallback: t = "dagre" } = {}) => {
  if (e11 in _n)
    return e11;
  if (t in _n)
    return N.warn(`Layout algorithm ${e11} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e11} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
var Lu = {
  name: "mermaid",
  version: "11.9.0",
  description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
  type: "module",
  module: "./dist/mermaid.core.mjs",
  types: "./dist/mermaid.d.ts",
  exports: {
    ".": {
      types: "./dist/mermaid.d.ts",
      import: "./dist/mermaid.core.mjs",
      default: "./dist/mermaid.core.mjs"
    },
    "./*": "./*"
  },
  keywords: [
    "diagram",
    "markdown",
    "flowchart",
    "sequence diagram",
    "gantt",
    "class diagram",
    "git graph",
    "mindmap",
    "packet diagram",
    "c4 diagram",
    "er diagram",
    "pie chart",
    "pie diagram",
    "quadrant chart",
    "requirement diagram",
    "graph"
  ],
  scripts: {
    clean: "rimraf dist",
    dev: "pnpm -w dev",
    "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
    "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
    "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
    "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
    "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
    "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
    "docs:spellcheck": 'cspell "src/docs/**/*.md"',
    "docs:release-version": "tsx scripts/update-release-version.mts",
    "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
    "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
    "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
    checkCircle: "npx madge --circular ./src",
    prepublishOnly: "pnpm docs:verify-version"
  },
  repository: {
    type: "git",
    url: "https://github.com/mermaid-js/mermaid"
  },
  author: "Knut Sveidqvist",
  license: "MIT",
  standard: {
    ignore: [
      "**/parser/*.js",
      "dist/**/*.js",
      "cypress/**/*.js"
    ],
    globals: [
      "page"
    ]
  },
  dependencies: {
    "@braintree/sanitize-url": "^7.0.4",
    "@iconify/utils": "^2.1.33",
    "@mermaid-js/parser": "workspace:^",
    "@types/d3": "^7.4.3",
    cytoscape: "^3.29.3",
    "cytoscape-cose-bilkent": "^4.1.0",
    "cytoscape-fcose": "^2.2.0",
    d3: "^7.9.0",
    "d3-sankey": "^0.12.3",
    "dagre-d3-es": "7.0.11",
    dayjs: "^1.11.13",
    dompurify: "^3.2.5",
    katex: "^0.16.22",
    khroma: "^2.1.0",
    "lodash-es": "^4.17.21",
    marked: "^16.0.0",
    roughjs: "^4.6.6",
    stylis: "^4.3.6",
    "ts-dedent": "^2.2.0",
    uuid: "^11.1.0"
  },
  devDependencies: {
    "@adobe/jsonschema2md": "^8.0.2",
    "@iconify/types": "^2.0.0",
    "@types/cytoscape": "^3.21.9",
    "@types/cytoscape-fcose": "^2.2.4",
    "@types/d3-sankey": "^0.12.4",
    "@types/d3-scale": "^4.0.9",
    "@types/d3-scale-chromatic": "^3.1.0",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-shape": "^3.1.7",
    "@types/jsdom": "^21.1.7",
    "@types/katex": "^0.16.7",
    "@types/lodash-es": "^4.17.12",
    "@types/micromatch": "^4.0.9",
    "@types/stylis": "^4.2.7",
    "@types/uuid": "^10.0.0",
    ajv: "^8.17.1",
    canvas: "^3.1.0",
    chokidar: "3.6.0",
    concurrently: "^9.1.2",
    "csstree-validator": "^4.0.1",
    globby: "^14.0.2",
    jison: "^0.4.18",
    "js-base64": "^3.7.7",
    jsdom: "^26.1.0",
    "json-schema-to-typescript": "^15.0.4",
    micromatch: "^4.0.8",
    "path-browserify": "^1.0.1",
    prettier: "^3.5.2",
    remark: "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    rimraf: "^6.0.1",
    "start-server-and-test": "^2.0.10",
    "type-fest": "^4.35.0",
    typedoc: "^0.27.8",
    "typedoc-plugin-markdown": "^4.4.2",
    typescript: "~5.7.3",
    "unist-util-flatmap": "^1.0.0",
    "unist-util-visit": "^5.0.0",
    vitepress: "^1.0.2",
    "vitepress-plugin-search": "1.0.4-alpha.22"
  },
  files: [
    "dist/",
    "README.md"
  ],
  publishConfig: {
    access: "public"
  }
};
var XB = g((e11) => {
  var _a3;
  const { securityLevel: t } = gt();
  let r = dt("body");
  if (t === "sandbox") {
    const s = ((_a3 = dt(`#i${e11}`).node()) == null ? void 0 : _a3.contentDocument) ?? document;
    r = dt(s.body);
  }
  return r.select(`#${e11}`);
}, "selectSvgElement");
var My = "comm";
var $y = "rule";
var Fy = "decl";
var KB = "@import";
var ZB = "@namespace";
var QB = "@keyframes";
var JB = "@layer";
var Oy = Math.abs;
var Ec = String.fromCharCode;
function Dy(e11) {
  return e11.trim();
}
function ks(e11, t, r) {
  return e11.replace(t, r);
}
function tL(e11, t, r) {
  return e11.indexOf(t, r);
}
function ri(e11, t) {
  return e11.charCodeAt(t) | 0;
}
function wi(e11, t, r) {
  return e11.slice(t, r);
}
function Le(e11) {
  return e11.length;
}
function eL(e11) {
  return e11.length;
}
function ss(e11, t) {
  return t.push(e11), e11;
}
var Ra = 1;
var vi = 1;
var Iy = 0;
var ye = 0;
var Et = 0;
var Mi = "";
function Mc(e11, t, r, i, n, s, o, a) {
  return { value: e11, root: t, parent: r, type: i, props: n, children: s, line: Ra, column: vi, length: o, return: "", siblings: a };
}
function rL() {
  return Et;
}
function iL() {
  return Et = ye > 0 ? ri(Mi, --ye) : 0, vi--, Et === 10 && (vi = 1, Ra--), Et;
}
function ve() {
  return Et = ye < Iy ? ri(Mi, ye++) : 0, vi++, Et === 10 && (vi = 1, Ra++), Et;
}
function ar() {
  return ri(Mi, ye);
}
function _s() {
  return ye;
}
function Pa(e11, t) {
  return wi(Mi, e11, t);
}
function Sn(e11) {
  switch (e11) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nL(e11) {
  return Ra = vi = 1, Iy = Le(Mi = e11), ye = 0, [];
}
function sL(e11) {
  return Mi = "", e11;
}
function mo(e11) {
  return Dy(Pa(ye - 1, xl(e11 === 91 ? e11 + 2 : e11 === 40 ? e11 + 1 : e11)));
}
function aL(e11) {
  for (; (Et = ar()) && Et < 33; )
    ve();
  return Sn(e11) > 2 || Sn(Et) > 3 ? "" : " ";
}
function oL(e11, t) {
  for (; --t && ve() && !(Et < 48 || Et > 102 || Et > 57 && Et < 65 || Et > 70 && Et < 97); )
    ;
  return Pa(e11, _s() + (t < 6 && ar() == 32 && ve() == 32));
}
function xl(e11) {
  for (; ve(); )
    switch (Et) {
      case e11:
        return ye;
      case 34:
      case 39:
        e11 !== 34 && e11 !== 39 && xl(Et);
        break;
      case 40:
        e11 === 41 && xl(e11);
        break;
      case 92:
        ve();
        break;
    }
  return ye;
}
function lL(e11, t) {
  for (; ve() && e11 + Et !== 57; )
    if (e11 + Et === 84 && ar() === 47)
      break;
  return "/*" + Pa(t, ye - 1) + "*" + Ec(e11 === 47 ? e11 : ve());
}
function cL(e11) {
  for (; !Sn(ar()); )
    ve();
  return Pa(e11, ye);
}
function hL(e11) {
  return sL(Ss("", null, null, null, [""], e11 = nL(e11), 0, [0], e11));
}
function Ss(e11, t, r, i, n, s, o, a, l) {
  for (var c = 0, h3 = 0, u = o, f = 0, d = 0, p = 0, m = 1, y = 1, b = 1, x = 0, w = "", v = n, C = s, S = i, T = w; y; )
    switch (p = x, x = ve()) {
      case 40:
        if (p != 108 && ri(T, u - 1) == 58) {
          tL(T += ks(mo(x), "&", "&\f"), "&\f", Oy(c ? a[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += mo(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += aL(p);
        break;
      case 92:
        T += oL(_s() - 1, 7);
        continue;
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            ss(uL(lL(ve(), _s()), t, r, l), l), (Sn(p || 1) == 5 || Sn(ar() || 1) == 5) && Le(T) && wi(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      case 123 * m:
        a[c++] = Le(T) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            y = 0;
          case 59 + h3:
            b == -1 && (T = ks(T, /\f/g, "")), d > 0 && (Le(T) - u || m === 0 && p === 47) && ss(d > 32 ? Eu(T + ";", i, r, u - 1, l) : Eu(ks(T, " ", "") + ";", i, r, u - 2, l), l);
            break;
          case 59:
            T += ";";
          default:
            if (ss(S = Au(T, t, r, c, h3, n, a, w, v = [], C = [], u, s), s), x === 123)
              if (h3 === 0)
                Ss(T, t, S, S, v, s, u, a, C);
              else {
                switch (f) {
                  case 99:
                    if (ri(T, 3) === 110) break;
                  case 108:
                    if (ri(T, 2) === 97) break;
                  default:
                    h3 = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                h3 ? Ss(e11, S, S, i && ss(Au(e11, S, S, 0, 0, n, a, w, n, v = [], u, C), C), n, C, u, a, i ? v : C) : Ss(T, S, S, S, [""], C, 0, a, C);
              }
        }
        c = h3 = d = 0, m = b = 1, w = T = "", u = o;
        break;
      case 58:
        u = 1 + Le(T), d = p;
      default:
        if (m < 1) {
          if (x == 123)
            --m;
          else if (x == 125 && m++ == 0 && iL() == 125)
            continue;
        }
        switch (T += Ec(x), x * m) {
          case 38:
            b = h3 > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            a[c++] = (Le(T) - 1) * b, b = 1;
            break;
          case 64:
            ar() === 45 && (T += mo(ve())), f = ar(), h3 = u = Le(w = T += cL(_s())), x++;
            break;
          case 45:
            p === 45 && Le(T) == 2 && (m = 0);
        }
    }
  return s;
}
function Au(e11, t, r, i, n, s, o, a, l, c, h3, u) {
  for (var f = n - 1, d = n === 0 ? s : [""], p = eL(d), m = 0, y = 0, b = 0; m < i; ++m)
    for (var x = 0, w = wi(e11, f + 1, f = Oy(y = o[m])), v = e11; x < p; ++x)
      (v = Dy(y > 0 ? d[x] + " " + w : ks(w, /&\f/g, d[x]))) && (l[b++] = v);
  return Mc(e11, t, r, n === 0 ? $y : a, l, c, h3, u);
}
function uL(e11, t, r, i) {
  return Mc(e11, t, r, My, Ec(rL()), wi(e11, 2, -2), 0, i);
}
function Eu(e11, t, r, i, n) {
  return Mc(e11, t, r, Fy, wi(e11, 0, i), wi(e11, i + 1, -1), i, n);
}
function bl(e11, t) {
  for (var r = "", i = 0; i < e11.length; i++)
    r += t(e11[i], i, e11, t) || "";
  return r;
}
function fL(e11, t, r, i) {
  switch (e11.type) {
    case JB:
      if (e11.children.length) break;
    case KB:
    case ZB:
    case Fy:
      return e11.return = e11.return || e11.value;
    case My:
      return "";
    case QB:
      return e11.return = e11.value + "{" + bl(e11.children, i) + "}";
    case $y:
      if (!Le(e11.value = e11.props.join(","))) return "";
  }
  return Le(r = bl(e11.children, i)) ? e11.return = e11.value + "{" + r + "}" : "";
}
var dL = pg(Object.keys, Object);
var pL = Object.prototype;
var gL = pL.hasOwnProperty;
function mL(e11) {
  if (!La(e11))
    return dL(e11);
  var t = [];
  for (var r in Object(e11))
    gL.call(e11, r) && r != "constructor" && t.push(r);
  return t;
}
var wl = Pr(Oe, "DataView");
var vl = Pr(Oe, "Promise");
var Cl = Pr(Oe, "Set");
var kl = Pr(Oe, "WeakMap");
var Mu = "[object Map]";
var yL = "[object Object]";
var $u = "[object Promise]";
var Fu = "[object Set]";
var Ou = "[object WeakMap]";
var Du = "[object DataView]";
var xL = Rr(wl);
var bL = Rr(kn);
var wL = Rr(vl);
var vL = Rr(Cl);
var CL = Rr(kl);
var wr = Li;
(wl && wr(new wl(new ArrayBuffer(1))) != Du || kn && wr(new kn()) != Mu || vl && wr(vl.resolve()) != $u || Cl && wr(new Cl()) != Fu || kl && wr(new kl()) != Ou) && (wr = function(e11) {
  var t = Li(e11), r = t == yL ? e11.constructor : void 0, i = r ? Rr(r) : "";
  if (i)
    switch (i) {
      case xL:
        return Du;
      case bL:
        return Mu;
      case wL:
        return $u;
      case vL:
        return Fu;
      case CL:
        return Ou;
    }
  return t;
});
var kL = "[object Map]";
var _L = "[object Set]";
var SL = Object.prototype;
var TL = SL.hasOwnProperty;
function Iu(e11) {
  if (e11 == null)
    return true;
  if (Aa(e11) && (Js(e11) || typeof e11 == "string" || typeof e11.splice == "function" || lc(e11) || cc(e11) || Qs(e11)))
    return !e11.length;
  var t = wr(e11);
  if (t == kL || t == _L)
    return !e11.size;
  if (La(e11))
    return !mL(e11).length;
  for (var r in e11)
    if (TL.call(e11, r))
      return false;
  return true;
}
var Ry = "c4";
var BL = g((e11) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e11), "detector");
var LL = g(async () => {
  const { diagram: e11 } = await import("./c4Diagram-6F6E4RAY-DsDgAl3Y-5LV66NGO.js");
  return { id: Ry, diagram: e11 };
}, "loader");
var AL = {
  id: Ry,
  detector: BL,
  loader: LL
};
var EL = AL;
var Py = "flowchart";
var ML = g((e11, t) => {
  var _a3, _b2;
  return ((_a3 = t == null ? void 0 : t.flowchart) == null ? void 0 : _a3.defaultRenderer) === "dagre-wrapper" || ((_b2 = t == null ? void 0 : t.flowchart) == null ? void 0 : _b2.defaultRenderer) === "elk" ? false : /^\s*graph/.test(e11);
}, "detector");
var $L = g(async () => {
  const { diagram: e11 } = await import("./flowDiagram-KYDEHFYC-DDTSQTR4-2UZN6QD4.js");
  return { id: Py, diagram: e11 };
}, "loader");
var FL = {
  id: Py,
  detector: ML,
  loader: $L
};
var OL = FL;
var Ny = "flowchart-v2";
var DL = g((e11, t) => {
  var _a3, _b2, _c2;
  return ((_a3 = t == null ? void 0 : t.flowchart) == null ? void 0 : _a3.defaultRenderer) === "dagre-d3" ? false : (((_b2 = t == null ? void 0 : t.flowchart) == null ? void 0 : _b2.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e11) && ((_c2 = t == null ? void 0 : t.flowchart) == null ? void 0 : _c2.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(e11));
}, "detector");
var IL = g(async () => {
  const { diagram: e11 } = await import("./flowDiagram-KYDEHFYC-DDTSQTR4-2UZN6QD4.js");
  return { id: Ny, diagram: e11 };
}, "loader");
var RL = {
  id: Ny,
  detector: DL,
  loader: IL
};
var PL = RL;
var zy = "er";
var NL = g((e11) => /^\s*erDiagram/.test(e11), "detector");
var zL = g(async () => {
  const { diagram: e11 } = await import("./erDiagram-3M52JZNH-BYY_Jtwe-NSP677T3.js");
  return { id: zy, diagram: e11 };
}, "loader");
var WL = {
  id: zy,
  detector: NL,
  loader: zL
};
var qL = WL;
var Wy = "gitGraph";
var HL = g((e11) => /^\s*gitGraph/.test(e11), "detector");
var jL = g(async () => {
  const { diagram: e11 } = await import("./gitGraphDiagram-GW3U2K7C-DzFCvp_L-E7UKB4KS.js");
  return { id: Wy, diagram: e11 };
}, "loader");
var UL = {
  id: Wy,
  detector: HL,
  loader: jL
};
var YL = UL;
var qy = "gantt";
var GL = g((e11) => /^\s*gantt/.test(e11), "detector");
var VL = g(async () => {
  const { diagram: e11 } = await import("./ganttDiagram-EK5VF46D-DRSxKQgg-SHSYTFQN.js");
  return { id: qy, diagram: e11 };
}, "loader");
var XL = {
  id: qy,
  detector: GL,
  loader: VL
};
var KL = XL;
var Hy = "info";
var ZL = g((e11) => /^\s*info/.test(e11), "detector");
var QL = g(async () => {
  const { diagram: e11 } = await import("./infoDiagram-LHK5PUON-nE-pCc48-CMQWIOG7.js");
  return { id: Hy, diagram: e11 };
}, "loader");
var JL = {
  id: Hy,
  detector: ZL,
  loader: QL
};
var jy = "pie";
var tA = g((e11) => /^\s*pie/.test(e11), "detector");
var eA = g(async () => {
  const { diagram: e11 } = await import("./pieDiagram-NIOCPIFQ-DyDaDu7Z-YRHPE7E3.js");
  return { id: jy, diagram: e11 };
}, "loader");
var rA = {
  id: jy,
  detector: tA,
  loader: eA
};
var Uy = "quadrantChart";
var iA = g((e11) => /^\s*quadrantChart/.test(e11), "detector");
var nA = g(async () => {
  const { diagram: e11 } = await import("./quadrantDiagram-2OG54O6I-DslAdQ0S-OPJB3Y65.js");
  return { id: Uy, diagram: e11 };
}, "loader");
var sA = {
  id: Uy,
  detector: iA,
  loader: nA
};
var aA = sA;
var Yy = "xychart";
var oA = g((e11) => /^\s*xychart-beta/.test(e11), "detector");
var lA = g(async () => {
  const { diagram: e11 } = await import("./xychartDiagram-H2YORKM3-DbPCi76Q-7CZEOXQJ.js");
  return { id: Yy, diagram: e11 };
}, "loader");
var cA = {
  id: Yy,
  detector: oA,
  loader: lA
};
var hA = cA;
var Gy = "requirement";
var uA = g((e11) => /^\s*requirement(Diagram)?/.test(e11), "detector");
var fA = g(async () => {
  const { diagram: e11 } = await import("./requirementDiagram-QOLK2EJ7-ZPyBt5ri-NYP26BES.js");
  return { id: Gy, diagram: e11 };
}, "loader");
var dA = {
  id: Gy,
  detector: uA,
  loader: fA
};
var pA = dA;
var Vy = "sequence";
var gA = g((e11) => /^\s*sequenceDiagram/.test(e11), "detector");
var mA = g(async () => {
  const { diagram: e11 } = await import("./sequenceDiagram-SKLFT4DO-DjZvEgZk-XNHW2QRF.js");
  return { id: Vy, diagram: e11 };
}, "loader");
var yA = {
  id: Vy,
  detector: gA,
  loader: mA
};
var xA = yA;
var Xy = "class";
var bA = g((e11, t) => {
  var _a3;
  return ((_a3 = t == null ? void 0 : t.class) == null ? void 0 : _a3.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(e11);
}, "detector");
var wA = g(async () => {
  const { diagram: e11 } = await import("./classDiagram-M3E45YP4-D7puVazK-ZBOR5GEF.js");
  return { id: Xy, diagram: e11 };
}, "loader");
var vA = {
  id: Xy,
  detector: bA,
  loader: wA
};
var CA = vA;
var Ky = "classDiagram";
var kA = g((e11, t) => {
  var _a3;
  return /^\s*classDiagram/.test(e11) && ((_a3 = t == null ? void 0 : t.class) == null ? void 0 : _a3.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(e11);
}, "detector");
var _A = g(async () => {
  const { diagram: e11 } = await import("./classDiagram-v2-YAWTLIQI-D7puVazK-IWAZPSVN.js");
  return { id: Ky, diagram: e11 };
}, "loader");
var SA = {
  id: Ky,
  detector: kA,
  loader: _A
};
var TA = SA;
var Zy = "state";
var BA = g((e11, t) => {
  var _a3;
  return ((_a3 = t == null ? void 0 : t.state) == null ? void 0 : _a3.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(e11);
}, "detector");
var LA = g(async () => {
  const { diagram: e11 } = await import("./stateDiagram-MI5ZYTHO-BGIYLWqZ-TRGHTG6X.js");
  return { id: Zy, diagram: e11 };
}, "loader");
var AA = {
  id: Zy,
  detector: BA,
  loader: LA
};
var EA = AA;
var Qy = "stateDiagram";
var MA = g((e11, t) => {
  var _a3;
  return !!(/^\s*stateDiagram-v2/.test(e11) || /^\s*stateDiagram/.test(e11) && ((_a3 = t == null ? void 0 : t.state) == null ? void 0 : _a3.defaultRenderer) === "dagre-wrapper");
}, "detector");
var $A = g(async () => {
  const { diagram: e11 } = await import("./stateDiagram-v2-5AN5P6BG-CqP6cMGQ-WVCWX5ND.js");
  return { id: Qy, diagram: e11 };
}, "loader");
var FA = {
  id: Qy,
  detector: MA,
  loader: $A
};
var OA = FA;
var Jy = "journey";
var DA = g((e11) => /^\s*journey/.test(e11), "detector");
var IA = g(async () => {
  const { diagram: e11 } = await import("./journeyDiagram-EWQZEKCU-BjR7C_P7-L65RTQSS.js");
  return { id: Jy, diagram: e11 };
}, "loader");
var RA = {
  id: Jy,
  detector: DA,
  loader: IA
};
var PA = RA;
var NA = g((e11, t, r) => {
  N.debug(`rendering svg for syntax error
`);
  const i = XB(t), n = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), $f(i, 100, 512, true), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw");
var t0 = { draw: NA };
var zA = t0;
var WA = {
  db: {},
  renderer: t0,
  parser: {
    parse: g(() => {
    }, "parse")
  }
};
var qA = WA;
var e0 = "flowchart-elk";
var HA = g((e11, t = {}) => {
  var _a3;
  return (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(e11) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(e11) && ((_a3 = t == null ? void 0 : t.flowchart) == null ? void 0 : _a3.defaultRenderer) === "elk" ? (t.layout = "elk", true) : false
  );
}, "detector");
var jA = g(async () => {
  const { diagram: e11 } = await import("./flowDiagram-KYDEHFYC-DDTSQTR4-2UZN6QD4.js");
  return { id: e0, diagram: e11 };
}, "loader");
var UA = {
  id: e0,
  detector: HA,
  loader: jA
};
var YA = UA;
var r0 = "timeline";
var GA = g((e11) => /^\s*timeline/.test(e11), "detector");
var VA = g(async () => {
  const { diagram: e11 } = await import("./timeline-definition-MYPXXCX6-BVYgM50r-FBCD2ZBX.js");
  return { id: r0, diagram: e11 };
}, "loader");
var XA = {
  id: r0,
  detector: GA,
  loader: VA
};
var KA = XA;
var i0 = "mindmap";
var ZA = g((e11) => /^\s*mindmap/.test(e11), "detector");
var QA = g(async () => {
  const { diagram: e11 } = await import("./mindmap-definition-6CBA2TL7-BFDwf-B3-OMCVPUK3.js");
  return { id: i0, diagram: e11 };
}, "loader");
var JA = {
  id: i0,
  detector: ZA,
  loader: QA
};
var tE = JA;
var n0 = "kanban";
var eE = g((e11) => /^\s*kanban/.test(e11), "detector");
var rE = g(async () => {
  const { diagram: e11 } = await import("./kanban-definition-ZSS6B67P-CmNuHNwG-KVBEXAZW.js");
  return { id: n0, diagram: e11 };
}, "loader");
var iE = {
  id: n0,
  detector: eE,
  loader: rE
};
var nE = iE;
var s0 = "sankey";
var sE = g((e11) => /^\s*sankey-beta/.test(e11), "detector");
var aE = g(async () => {
  const { diagram: e11 } = await import("./sankeyDiagram-4UZDY2LN-DWXFNu-K-IXKEU4GY.js");
  return { id: s0, diagram: e11 };
}, "loader");
var oE = {
  id: s0,
  detector: sE,
  loader: aE
};
var lE = oE;
var a0 = "packet";
var cE = g((e11) => /^\s*packet(-beta)?/.test(e11), "detector");
var hE = g(async () => {
  const { diagram: e11 } = await import("./diagram-5UYTHUR4-BExwa3aw-ZQHP5W2O.js");
  return { id: a0, diagram: e11 };
}, "loader");
var uE = {
  id: a0,
  detector: cE,
  loader: hE
};
var o0 = "radar";
var fE = g((e11) => /^\s*radar-beta/.test(e11), "detector");
var dE = g(async () => {
  const { diagram: e11 } = await import("./diagram-ZTM2IBQH-C5VI6Kgc-E5C6AT7Z.js");
  return { id: o0, diagram: e11 };
}, "loader");
var pE = {
  id: o0,
  detector: fE,
  loader: dE
};
var l0 = "block";
var gE = g((e11) => /^\s*block-beta/.test(e11), "detector");
var mE = g(async () => {
  const { diagram: e11 } = await import("./blockDiagram-6J76NXCF-u4N2vHGm-HXY6JCDI.js");
  return { id: l0, diagram: e11 };
}, "loader");
var yE = {
  id: l0,
  detector: gE,
  loader: mE
};
var xE = yE;
var c0 = "architecture";
var bE = g((e11) => /^\s*architecture/.test(e11), "detector");
var wE = g(async () => {
  const { diagram: e11 } = await import("./architectureDiagram-SUXI7LT5-D1XW0Uoy-IMTL2BFQ.js");
  return { id: c0, diagram: e11 };
}, "loader");
var vE = {
  id: c0,
  detector: bE,
  loader: wE
};
var CE = vE;
var h0 = "treemap";
var kE = g((e11) => /^\s*treemap/.test(e11), "detector");
var _E = g(async () => {
  const { diagram: e11 } = await import("./diagram-VMROVX33-Bs6dsq6w-34DWUY4Y.js");
  return { id: h0, diagram: e11 };
}, "loader");
var SE = {
  id: h0,
  detector: kE,
  loader: _E
};
var Ru = false;
var Na = g(() => {
  Ru || (Ru = true, Fs("error", qA, (e11) => e11.toLowerCase().trim() === "error"), Fs(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: g(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: g(() => {
        }, "draw")
      },
      parser: {
        parse: g(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: g(() => null, "init")
      // no op
    },
    (e11) => e11.toLowerCase().trimStart().startsWith("---")
  ), Mo(YA, tE, CE), Mo(
    EL,
    nE,
    TA,
    CA,
    qL,
    KL,
    JL,
    rA,
    pA,
    xA,
    PL,
    OL,
    KA,
    YL,
    OA,
    EA,
    PA,
    aA,
    lE,
    uE,
    hA,
    xE,
    pE,
    SE
  ));
}, "addDiagrams");
var TE = g(async () => {
  N.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(Ar).map(async ([r, { detector: i, loader: n }]) => {
      if (n)
        try {
          Do(r);
        } catch {
          try {
            const { diagram: s, id: o } = await n();
            Fs(o, s, i);
          } catch (s) {
            throw N.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete Ar[r], s;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    N.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      N.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams");
var BE = "graphics-document document";
function u0(e11, t) {
  e11.attr("role", BE), t !== "" && e11.attr("aria-roledescription", t);
}
g(u0, "setA11yDiagramInfo");
function f0(e11, t, r, i) {
  if (e11.insert !== void 0) {
    if (r) {
      const n = `chart-desc-${i}`;
      e11.attr("aria-describedby", n), e11.insert("desc", ":first-child").attr("id", n).text(r);
    }
    if (t) {
      const n = `chart-title-${i}`;
      e11.attr("aria-labelledby", n), e11.insert("title", ":first-child").attr("id", n).text(t);
    }
  }
}
g(f0, "addSVGa11yTitleDescription");
var Lr;
var _l = (Lr = class {
  constructor(t, r, i, n, s) {
    this.type = t, this.text = r, this.db = i, this.parser = n, this.renderer = s;
  }
  static async fromText(t, r = {}) {
    var _a3, _b2;
    const i = oe(), n = Ol(t, i);
    t = _S(t) + `
`;
    try {
      Do(n);
    } catch {
      const c = Qx(n);
      if (!c)
        throw new xf(`Diagram ${n} not found.`);
      const { id: h3, diagram: u } = await c();
      Fs(h3, u);
    }
    const { db: s, parser: o, renderer: a, init: l } = Do(n);
    return o.parser && (o.parser.yy = s), (_a3 = s.clear) == null ? void 0 : _a3.call(s), l == null ? void 0 : l(i), r.title && ((_b2 = s.setDiagramTitle) == null ? void 0 : _b2.call(s, r.title)), await o.parse(t), new Lr(n, t, s, o, a);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, g(Lr, "Diagram"), Lr);
var Pu = [];
var LE = g(() => {
  Pu.forEach((e11) => {
    e11();
  }), Pu = [];
}, "attachFunctions");
var AE = g((e11) => e11.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function d0(e11) {
  const t = e11.match(yf);
  if (!t)
    return {
      text: e11,
      metadata: {}
    };
  let r = K1(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: X1
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e11.slice(t[0].length),
    metadata: i
  };
}
g(d0, "extractFrontMatter");
var EE = g((e11) => e11.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText");
var ME = g((e11) => {
  const { text: t, metadata: r } = d0(e11), { displayMode: i, title: n, config: s = {} } = r;
  return i && (s.gantt || (s.gantt = {}), s.gantt.displayMode = i), { title: n, config: s, text: t };
}, "processFrontmatter");
var $E = g((e11) => {
  const t = Ae.detectInit(e11) ?? {}, r = Ae.detectDirective(e11, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : (r == null ? void 0 : r.type) === "wrap" && (t.wrap = true), {
    text: uS(e11),
    directive: t
  };
}, "processDirectives");
function $c(e11) {
  const t = EE(e11), r = ME(t), i = $E(r.text), n = gc(r.config, i.directive);
  return e11 = AE(i.text), {
    code: e11,
    title: r.title,
    config: n
  };
}
g($c, "preprocessDiagram");
function p0(e11) {
  const t = new TextEncoder().encode(e11), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
g(p0, "toBase64");
var FE = 5e4;
var OE = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var DE = "sandbox";
var IE = "loose";
var RE = "http://www.w3.org/2000/svg";
var PE = "http://www.w3.org/1999/xlink";
var NE = "http://www.w3.org/1999/xhtml";
var zE = "100%";
var WE = "100%";
var qE = "border:0;margin:0;";
var HE = "margin:0";
var jE = "allow-top-navigation-by-user-activation allow-popups";
var UE = 'The "iframe" tag is not supported by your browser.';
var YE = ["foreignobject"];
var GE = ["dominant-baseline"];
function Fc(e11) {
  const t = $c(e11);
  return Ms(), pb(t.config ?? {}), t;
}
g(Fc, "processAndSetConfigs");
async function g0(e11, t) {
  Na();
  try {
    const { code: r, config: i } = Fc(e11);
    return { diagramType: (await y0(r)).type, config: i };
  } catch (r) {
    if (t == null ? void 0 : t.suppressErrors)
      return false;
    throw r;
  }
}
g(g0, "parse");
var Nu = g((e11, t, r = []) => `
.${e11} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles");
var VE = g((e11, t = /* @__PURE__ */ new Map()) => {
  var _a3;
  let r = "";
  if (e11.themeCSS !== void 0 && (r += `
${e11.themeCSS}`), e11.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e11.fontFamily}}`), e11.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e11.altFontFamily}}`), t instanceof Map) {
    const o = e11.htmlLabels ?? ((_a3 = e11.flowchart) == null ? void 0 : _a3.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((a) => {
      Iu(a.styles) || o.forEach((l) => {
        r += Nu(a.id, l, a.styles);
      }), Iu(a.textStyles) || (r += Nu(
        a.id,
        "tspan",
        ((a == null ? void 0 : a.textStyles) || []).map((l) => l.replace("color", "fill"))
      ));
    });
  }
  return r;
}, "createCssStyles");
var XE = g((e11, t, r, i) => {
  const n = VE(e11, r), s = $b(t, n, e11.themeVariables);
  return bl(hL(`${i}{${s}}`), fL);
}, "createUserStyles");
var KE = g((e11 = "", t, r) => {
  let i = e11;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Nr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode");
var ZE = g((e11 = "", t) => {
  var _a3, _b2;
  const r = ((_b2 = (_a3 = t == null ? void 0 : t.viewBox) == null ? void 0 : _a3.baseVal) == null ? void 0 : _b2.height) ? t.viewBox.baseVal.height + "px" : WE, i = p0(`<body style="${HE}">${e11}</body>`);
  return `<iframe style="width:${zE};height:${r};${qE}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${jE}">
  ${UE}
</iframe>`;
}, "putIntoIFrame");
var zu = g((e11, t, r, i, n) => {
  const s = e11.append("div");
  s.attr("id", r), i && s.attr("style", i);
  const o = s.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", RE);
  return n && o.attr("xmlns:xlink", n), o.append("g"), e11;
}, "appendDivSvgG");
function Sl(e11, t) {
  return e11.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
g(Sl, "sandboxedIframe");
var QE = g((e11, t, r, i) => {
  var _a3, _b2, _c2;
  (_a3 = e11.getElementById(t)) == null ? void 0 : _a3.remove(), (_b2 = e11.getElementById(r)) == null ? void 0 : _b2.remove(), (_c2 = e11.getElementById(i)) == null ? void 0 : _c2.remove();
}, "removeExistingElements");
var JE = g(async function(e11, t, r) {
  var _a3, _b2, _c2, _d2, _e2, _f2;
  Na();
  const i = Fc(t);
  t = i.code;
  const n = oe();
  N.debug(n), t.length > ((n == null ? void 0 : n.maxTextSize) ?? FE) && (t = OE);
  const s = "#" + e11, o = "i" + e11, a = "#" + o, l = "d" + e11, c = "#" + l, h3 = g(() => {
    const F = dt(f ? a : c).node();
    F && "remove" in F && F.remove();
  }, "removeTempElements");
  let u = dt("body");
  const f = n.securityLevel === DE, d = n.securityLevel === IE, p = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const D = Sl(dt(r), o);
      u = dt(D.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = dt(r);
    zu(u, e11, l, `font-family: ${p}`, PE);
  } else {
    if (QE(document, e11, l, o), f) {
      const D = Sl(dt("body"), o);
      u = dt(D.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = dt("body");
    zu(u, e11, l);
  }
  let m, y;
  try {
    m = await _l.fromText(t, { title: i.title });
  } catch (D) {
    if (n.suppressErrorRendering)
      throw h3(), D;
    m = await _l.fromText("error"), y = D;
  }
  const b = u.select(c).node(), x = m.type, w = b.firstChild, v = w.firstChild, C = (_b2 = (_a3 = m.renderer).getClasses) == null ? void 0 : _b2.call(_a3, t, m), S = XE(n, x, C, s), T = document.createElement("style");
  T.innerHTML = S, w.insertBefore(T, v);
  try {
    await m.renderer.draw(t, e11, Lu.version, m);
  } catch (D) {
    throw n.suppressErrorRendering ? h3() : zA.draw(t, e11, Lu.version), D;
  }
  const O = u.select(`${c} svg`), k = (_d2 = (_c2 = m.db).getAccTitle) == null ? void 0 : _d2.call(_c2), E = (_f2 = (_e2 = m.db).getAccDescription) == null ? void 0 : _f2.call(_e2);
  x0(x, O, k, E), u.select(`[id="${e11}"]`).selectAll("foreignobject > *").attr("xmlns", NE);
  let L = u.select(c).node().innerHTML;
  if (N.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), L = KE(L, f, Dt(n.arrowMarkerAbsolute)), f) {
    const D = u.select(c + " svg").node();
    L = ZE(L, D);
  } else d || (L = fi.sanitize(L, {
    ADD_TAGS: YE,
    ADD_ATTR: GE,
    HTML_INTEGRATION_POINTS: { foreignobject: true }
  }));
  if (LE(), y)
    throw y;
  return h3(), {
    diagramType: x,
    svg: L,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function m0(e11 = {}) {
  var _a3;
  const t = zt({}, e11);
  (t == null ? void 0 : t.fontFamily) && !((_a3 = t.themeVariables) == null ? void 0 : _a3.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), fb(t), (t == null ? void 0 : t.theme) && t.theme in Ge ? t.themeVariables = Ge[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ge.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? ub(t) : _f();
  Fl(r.logLevel), Na();
}
g(m0, "initialize");
var y0 = g((e11, t = {}) => {
  const { code: r } = $c(e11);
  return _l.fromText(r, t);
}, "getDiagramFromText");
function x0(e11, t, r, i) {
  u0(t, e11), f0(t, r, i, t.attr("id"));
}
g(x0, "addA11yInfo");
var Dr = Object.freeze({
  render: JE,
  parse: g0,
  getDiagramFromText: y0,
  initialize: m0,
  getConfig: oe,
  setConfig: Sf,
  getSiteConfig: _f,
  updateSiteConfig: db,
  reset: g(() => {
    Ms();
  }, "reset"),
  globalReset: g(() => {
    Ms(di);
  }, "globalReset"),
  defaultConfig: di
});
Fl(oe().logLevel);
Ms(oe());
var tM = g((e11, t, r) => {
  N.warn(e11), pc(e11) ? (r && r(e11.str, e11.hash), t.push({ ...e11, message: e11.str, error: e11 })) : (r && r(e11), e11 instanceof Error && t.push({
    str: e11.message,
    message: e11.message,
    hash: e11.name,
    error: e11
  }));
}, "handleError");
var b0 = g(async function(e11 = {
  querySelector: ".mermaid"
}) {
  try {
    await eM(e11);
  } catch (t) {
    if (pc(t) && N.error(t.str), Ze.parseError && Ze.parseError(t), !e11.suppressErrors)
      throw N.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run");
var eM = g(async function({ postRenderCallback: e11, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = Dr.getConfig();
  N.debug(`${e11 ? "" : "No "}Callback function found`);
  let n;
  if (r)
    n = r;
  else if (t)
    n = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  N.debug(`Found ${n.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (N.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), Dr.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const s = new Ae.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let o;
  const a = [];
  for (const l of Array.from(n)) {
    if (N.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${s.next()}`;
    o = l.innerHTML, o = Ug(Ae.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h3 = Ae.detectInit(o);
    h3 && N.debug("Detected early reinit: ", h3);
    try {
      const { svg: u, bindFunctions: f } = await k0(c, o, l);
      l.innerHTML = u, e11 && await e11(c), f && f(l);
    } catch (u) {
      tM(u, a, Ze.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
}, "runThrowsErrors");
var w0 = g(function(e11) {
  Dr.initialize(e11);
}, "initialize");
var rM = g(async function(e11, t, r) {
  N.warn("mermaid.init is deprecated. Please use run instead."), e11 && w0(e11);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await b0(i);
}, "init");
var iM = g(async (e11, {
  lazyLoad: t = true
} = {}) => {
  Na(), Mo(...e11), t === false && await TE();
}, "registerExternalDiagrams");
var v0 = g(function() {
  if (Ze.startOnLoad) {
    const { startOnLoad: e11 } = Dr.getConfig();
    e11 && Ze.run().catch((t) => N.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", v0, false);
var nM = g(function(e11) {
  Ze.parseError = e11;
}, "setParseErrorHandler");
var ha = [];
var yo = false;
var C0 = g(async () => {
  if (!yo) {
    for (yo = true; ha.length > 0; ) {
      const e11 = ha.shift();
      if (e11)
        try {
          await e11();
        } catch (t) {
          N.error("Error executing queue", t);
        }
    }
    yo = false;
  }
}, "executeQueue");
var sM = g(async (e11, t) => new Promise((r, i) => {
  const n = g(() => new Promise((s, o) => {
    Dr.parse(e11, t).then(
      (a) => {
        s(a), r(a);
      },
      (a) => {
        var _a3;
        N.error("Error parsing", a), (_a3 = Ze.parseError) == null ? void 0 : _a3.call(Ze, a), o(a), i(a);
      }
    );
  }), "performCall");
  ha.push(n), C0().catch(i);
}), "parse");
var k0 = g((e11, t, r) => new Promise((i, n) => {
  const s = g(() => new Promise((o, a) => {
    Dr.render(e11, t, r).then(
      (l) => {
        o(l), i(l);
      },
      (l) => {
        var _a3;
        N.error("Error parsing", l), (_a3 = Ze.parseError) == null ? void 0 : _a3.call(Ze, l), a(l), n(l);
      }
    );
  }), "performCall");
  ha.push(s), C0().catch(n);
}), "render");
var aM = g(() => Object.keys(Ar).map((e11) => ({
  id: e11
})), "getRegisteredDiagramsMetadata");
var Ze = {
  startOnLoad: true,
  mermaidAPI: Dr,
  parse: sM,
  render: k0,
  init: rM,
  run: b0,
  registerExternalDiagrams: iM,
  registerLayoutLoaders: Ey,
  initialize: w0,
  parseError: void 0,
  contentLoaded: v0,
  setParseErrorHandler: nM,
  detectType: Ol,
  registerIconPacks: LT,
  getRegisteredDiagramsMetadata: aM
};
var Wu = Ze;
function oM(e11) {
  navigator.clipboard.writeText(e11);
}
var gr = /* @__PURE__ */ new Map();
var xo = /* @__PURE__ */ new Map();
var ce = /* @__PURE__ */ new Map();
var on = /* @__PURE__ */ new Map();
var bo = /* @__PURE__ */ new Map();
var qu = /* @__PURE__ */ new WeakMap();
var ze = /* @__PURE__ */ new Set();
function lM(e11) {
  if (on.has(e11))
    return on.get(e11);
  if ((/* @__PURE__ */ new Set(["script", "style", "meta", "link", "noscript", "template"])).has(e11)) {
    const o = {};
    return on.set(e11, o), o;
  }
  let r = document.getElementById("snapdom-sandbox");
  r || (r = document.createElement("div"), r.id = "snapdom-sandbox", r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "-9999px", r.style.width = "0", r.style.height = "0", r.style.overflow = "hidden", document.body.appendChild(r));
  const i = document.createElement(e11);
  i.style.all = "initial", r.appendChild(i);
  const n = getComputedStyle(i), s = {};
  for (let o of n)
    s[o] = n.getPropertyValue(o);
  return r.removeChild(i), on.set(e11, s), s;
}
function Tl(e11, t, r = false) {
  const i = [], n = lM(t);
  for (let [s, o] of Object.entries(e11))
    if (!r)
      o && i.push(`${s}:${o}`);
    else {
      const a = n[s];
      o && o !== a && i.push(`${s}:${o}`);
    }
  return i.sort().join(";");
}
function cM(e11) {
  const t = /* @__PURE__ */ new Set();
  return e11.nodeType !== Node.ELEMENT_NODE && e11.nodeType !== Node.DOCUMENT_FRAGMENT_NODE ? [] : (e11.tagName && t.add(e11.tagName.toLowerCase()), typeof e11.querySelectorAll == "function" && e11.querySelectorAll("*").forEach((r) => t.add(r.tagName.toLowerCase())), Array.from(t));
}
function hM(e11) {
  const t = /* @__PURE__ */ new Map();
  for (let i of e11) {
    const n = on.get(i);
    if (!n) continue;
    const s = Object.entries(n).map(([o, a]) => `${o}:${a};`).sort().join("");
    t.has(s) || t.set(s, []), t.get(s).push(i);
  }
  let r = "";
  for (let [i, n] of t.entries())
    r += `${n.join(",")} { ${i} }
`;
  return r;
}
function uM(e11) {
  const t = new Set(e11.values()), r = /* @__PURE__ */ new Map();
  let i = 1;
  for (const n of t)
    r.set(n, `c${i++}`);
  return r;
}
async function _0(e11, t = {}) {
  var _a3;
  const i = (_a3 = e11.match(/url\(["']?(.*?)["']?\)/)) == null ? void 0 : _a3[1], n = /^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(e11);
  if (i) {
    const s = Ic(i);
    if (xo.has(s))
      return t.skipInline ? void 0 : `url(${xo.get(s)})`;
    {
      const o = await Dc(s, { useProxy: t.useProxy });
      return xo.set(s, o), t.skipInline ? void 0 : `url("${o}")`;
    }
  }
  return e11;
}
function Ki(e11, { fast: t = false } = {}) {
  if (t) return e11();
  "requestIdleCallback" in window ? requestIdleCallback(e11, { timeout: 50 }) : setTimeout(e11, 1);
}
function Oc(e11, t = null) {
  if (!(e11 instanceof Element))
    return window.getComputedStyle(e11, t);
  let r = qu.get(e11);
  if (r || (r = /* @__PURE__ */ new Map(), qu.set(e11, r)), !r.has(t)) {
    const i = window.getComputedStyle(e11, t);
    r.set(t, i);
  }
  return r.get(t);
}
function fM(e11) {
  let t = e11.replace(/^['"]|['"]$/g, "");
  if (t.startsWith("\\"))
    try {
      return String.fromCharCode(parseInt(t.replace("\\", ""), 16));
    } catch {
      return t;
    }
  return t;
}
function S0(e11) {
  const t = e11.indexOf("url(");
  if (t === -1) return null;
  let r = e11.slice(t + 4).trim();
  return r.endsWith(")") && (r = r.slice(0, -1).trim()), (r.startsWith('"') && r.endsWith('"') || r.startsWith("'") && r.endsWith("'")) && (r = r.slice(1, -1)), r;
}
function Dc(e11, { timeout: t = 3e3, useProxy: r = "" } = {}) {
  function i(l) {
    try {
      return new URL(l, window.location.href).origin === window.location.origin ? "use-credentials" : "anonymous";
    } catch {
      return "anonymous";
    }
  }
  async function n(l) {
    const c = (h3) => fetch(h3, {
      mode: "cors",
      credentials: i(h3) === "use-credentials" ? "include" : "omit"
    }).then((u) => u.blob()).then((u) => new Promise((f, d) => {
      const p = new FileReader();
      p.onloadend = () => {
        const m = p.result;
        if (typeof m != "string" || !m.startsWith("data:image/")) {
          d(new Error("Invalid image data URL"));
          return;
        }
        f(m);
      }, p.onerror = () => d(new Error("FileReader error")), p.readAsDataURL(u);
    }));
    try {
      return await c(l);
    } catch {
      if (r && typeof r == "string") {
        const u = r.replace(/\/$/, "") + Ic(l);
        try {
          return await c(u);
        } catch {
          throw console.error(`[SnapDOM - fetchImage] Proxy fallback failed for: ${l}`), new Error("CORS restrictions prevented image capture (even via proxy)");
        }
      } else
        throw console.error(`[SnapDOM - fetchImage] No valid proxy URL provided for fallback: ${l}`), new Error("Fetch fallback failed and no proxy provided");
    }
  }
  const s = i(e11);
  return console.log(`[SnapDOM - fetchImage] Start loading image: ${e11} with crossOrigin=${s}`), gr.has(e11) ? (console.log(`[SnapDOM - fetchImage] Cache hit for: ${e11}`), Promise.resolve(gr.get(e11))) : e11.startsWith("data:image/") ? (gr.set(e11, e11), Promise.resolve(e11)) : /\.svg(\?.*)?$/i.test(e11) ? (async () => {
    try {
      const c = await (await fetch(e11, {
        mode: "cors",
        credentials: s === "use-credentials" ? "include" : "omit"
      })).text(), h3 = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`;
      return gr.set(e11, h3), h3;
    } catch {
      return n(e11);
    }
  })() : new Promise((l, c) => {
    const h3 = setTimeout(() => {
      console.log(`[SnapDOM - fetchImage] Timeout after ${t}ms for image: ${e11}`), c(new Error("Image load timed out"));
    }, t), u = new Image();
    u.crossOrigin = s, u.onload = async () => {
      clearTimeout(h3);
      try {
        await u.decode();
        const f = document.createElement("canvas");
        f.width = u.width, f.height = u.height, f.getContext("2d").drawImage(u, 0, 0, f.width, f.height);
        const p = f.toDataURL("image/png");
        gr.set(e11, p), l(p);
      } catch {
        try {
          const f = await n(e11);
          gr.set(e11, f), l(f);
        } catch (f) {
          c(f);
        }
      }
    }, u.onerror = async () => {
      clearTimeout(h3), console.error(`[SnapDOM - fetchImage] Image failed to load: ${e11}`);
      try {
        const f = await n(e11);
        gr.set(e11, f), l(f);
      } catch (f) {
        c(f);
      }
    }, u.src = e11;
  });
}
function Hu(e11) {
  const t = {};
  for (let r of e11)
    t[r] = e11.getPropertyValue(r);
  return t;
}
function T0() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function dM(e11) {
  if (!e11 || e11 === "none") return "";
  let t = e11.replace(/translate[XY]?\([^)]*\)/g, "");
  return t = t.replace(/matrix\(([^)]+)\)/g, (r, i) => {
    const n = i.split(",").map((s) => s.trim());
    return n.length !== 6 ? `matrix(${i})` : (n[4] = "0", n[5] = "0", `matrix(${n.join(", ")})`);
  }), t = t.replace(/matrix3d\(([^)]+)\)/g, (r, i) => {
    const n = i.split(",").map((s) => s.trim());
    return n.length !== 16 ? `matrix3d(${i})` : (n[12] = "0", n[13] = "0", `matrix3d(${n.join(", ")})`);
  }), t.trim().replace(/\s{2,}/g, " ");
}
function Ic(e11) {
  if (/%[0-9A-Fa-f]{2}/.test(e11)) return e11;
  try {
    return encodeURI(e11);
  } catch {
    return e11;
  }
}
function B0(e11) {
  const t = [];
  let r = 0, i = 0;
  for (let n = 0; n < e11.length; n++) {
    const s = e11[n];
    s === "(" && r++, s === ")" && r--, s === "," && r === 0 && (t.push(e11.slice(i, n).trim()), i = n + 1);
  }
  return t.push(e11.slice(i).trim()), t;
}
var wo = /* @__PURE__ */ new WeakMap();
var vo = /* @__PURE__ */ new Map();
function pM(e11) {
  const t = {};
  for (let r = 0; r < e11.length; r++) {
    const i = e11[r];
    let n = e11.getPropertyValue(i);
    (i === "background-image" || i === "content") && n.includes("url(") && !n.includes("data:") && (n = "none"), t[i] = n;
  }
  return t;
}
function ju(e11, t, r, i, n) {
  var _a3;
  if (e11.tagName === "STYLE") return;
  i.has(e11) || i.set(e11, Oc(e11));
  const s = i.get(e11);
  if (!wo.has(e11)) {
    const h3 = pM(s);
    wo.set(e11, h3);
  }
  const o = wo.get(e11), a = Object.entries(o).sort(([h3], [u]) => h3.localeCompare(u)).map(([h3, u]) => `${h3}:${u}`).join(";");
  if (vo.has(a)) {
    r.set(t, vo.get(a));
    return;
  }
  const l = ((_a3 = e11.tagName) == null ? void 0 : _a3.toLowerCase()) || "div", c = Tl(o, l, n);
  vo.set(a, c), r.set(t, c);
}
function gM(e11) {
  return e11.nodeType === Node.ELEMENT_NODE && e11.tagName === "SLOT";
}
function Ts(e11, t, r, i, n, s = {}, o) {
  var _a3, _b2;
  if (e11.nodeType === Node.TEXT_NODE || e11.nodeType !== Node.ELEMENT_NODE) return e11.cloneNode(true);
  if (e11.getAttribute("data-capture") === "exclude") {
    const l = document.createElement("div"), c = e11.getBoundingClientRect();
    return l.style.cssText = `display: inline-block; width: ${c.width}px; height: ${c.height}px; visibility: hidden;`, l;
  }
  if (s.exclude && Array.isArray(s.exclude))
    for (const l of s.exclude)
      try {
        if ((_a3 = e11.matches) == null ? void 0 : _a3.call(e11, l)) {
          const c = document.createElement("div"), h3 = e11.getBoundingClientRect();
          return c.style.cssText = `display: inline-block; width: ${h3.width}px; height: ${h3.height}px; visibility: hidden;`, c;
        }
      } catch (c) {
        console.warn(`Invalid selector in exclude option: ${l}`, c);
      }
  if (typeof s.filter == "function")
    try {
      if (!s.filter(e11, o || e11)) {
        const l = document.createElement("div"), c = e11.getBoundingClientRect();
        return l.style.cssText = `display: inline-block; width: ${c.width}px; height: ${c.height}px; visibility: hidden;`, l;
      }
    } catch (l) {
      console.warn("Error in filter function:", l);
    }
  if (e11.tagName === "IFRAME") {
    const l = document.createElement("div");
    return l.textContent = "", l.style.cssText = `width: ${e11.offsetWidth}px; height: ${e11.offsetHeight}px; background-image: repeating-linear-gradient(45deg, #ddd, #ddd 5px, #f9f9f9 5px, #f9f9f9 10px);display: flex;align-items: center;justify-content: center;font-size: 12px;color: #555; border: 1px solid #aaa;`, l;
  }
  if (e11.getAttribute("data-capture") === "placeholder") {
    const l = e11.cloneNode(false);
    i.set(l, e11), ju(e11, l, t, r, n);
    const c = document.createElement("div");
    return c.textContent = e11.getAttribute("data-placeholder-text") || "", c.style.cssText = "color: #666;font-size: 12px;text-align: center;line-height: 1.4;padding: 0.5em;box-sizing: border-box;", l.appendChild(c), l;
  }
  if (e11.tagName === "CANVAS") {
    const l = e11.toDataURL(), c = document.createElement("img");
    return c.src = l, c.width = e11.width, c.height = e11.height, c.style.display = "inline-block", c.style.width = e11.style.width || `${e11.width}px`, c.style.height = e11.style.height || `${e11.height}px`, c;
  }
  const a = e11.cloneNode(false);
  if (i.set(a, e11), e11 instanceof HTMLInputElement)
    a.value = e11.value, a.setAttribute("value", e11.value), e11.checked !== void 0 && (a.checked = e11.checked, e11.checked && a.setAttribute("checked", ""));
  else if (e11 instanceof HTMLTextAreaElement) {
    const l = e11.getBoundingClientRect();
    a.textContent = e11.value, a.style.width = `${l.width}px`, a.style.height = `${l.height}px`;
  } else e11 instanceof HTMLSelectElement && (a.value = e11.value, Array.from(a.options).forEach((l) => {
    l.value === e11.value ? l.setAttribute("selected", "") : l.removeAttribute("selected");
  }));
  if (ju(e11, a, t, r, n), gM(e11)) {
    const l = ((_b2 = e11.assignedNodes) == null ? void 0 : _b2.call(e11, { flatten: true })) || [], c = l.length > 0 ? l : Array.from(e11.childNodes), h3 = document.createDocumentFragment();
    for (const u of c) {
      const f = Ts(u, t, r, i, n, s, o || e11);
      f && h3.appendChild(f);
    }
    return h3;
  } else if (!(e11 instanceof HTMLTextAreaElement)) {
    const l = e11.shadowRoot ? e11.shadowRoot.childNodes : e11.childNodes;
    for (const c of l) {
      const h3 = Ts(c, t, r, i, n, s, o || e11);
      h3 && a.appendChild(h3);
    }
    if (e11.shadowRoot && e11.childNodes.length > 0 && !e11.shadowRoot.querySelector("slot")) {
      const c = document.createDocumentFragment();
      for (const h3 of e11.childNodes) {
        const u = Ts(h3, t, r, i, n, s, o || e11);
        u && c.appendChild(u);
      }
      a.appendChild(c);
    }
  }
  return a;
}
var mM = [
  // /uicons/i,
  /font\s*awesome/i,
  /material\s*icons/i,
  /ionicons/i,
  /glyphicons/i,
  /feather/i,
  /bootstrap\s*icons/i,
  /remix\s*icons/i,
  /heroicons/i,
  /layui/i,
  /lucide/i
];
var Bl = [];
function yM(e11) {
  const t = Array.isArray(e11) ? e11 : [e11];
  for (const r of t)
    r instanceof RegExp ? Bl.push(r) : typeof r == "string" ? Bl.push(new RegExp(r, "i")) : console.warn("[snapdom] Ignored invalid iconFont value:", r);
}
function ir(e11) {
  const t = typeof e11 == "string" ? e11 : "", r = [...mM, ...Bl];
  for (const i of r)
    if (i instanceof RegExp && i.test(t)) return true;
  return !!(/icon/i.test(t) || /glyph/i.test(t) || /symbols/i.test(t) || /feather/i.test(t) || /fontawesome/i.test(t));
}
async function xM(e11, t, r, i = 32, n = "#000") {
  t = t.replace(/^['"]+|['"]+$/g, "");
  const s = window.devicePixelRatio || 1, a = document.createElement("canvas").getContext("2d");
  a.font = r ? `${r} ${i}px "${t}"` : `${i}px "${t}"`;
  const l = a.measureText(e11), c = l.actualBoundingBoxAscent || i * 0.8, h3 = l.actualBoundingBoxDescent || i * 0.2, u = c + h3, f = l.width, d = document.createElement("canvas");
  d.width = Math.ceil(f * s), d.height = Math.ceil(u * s);
  const p = d.getContext("2d");
  return p.scale(s, s), p.font = a.font, p.textAlign = "left", p.textBaseline = "alphabetic", p.fillStyle = n, p.fillText(e11, 0, c), d.toDataURL();
}
function L0(e11) {
  return Array.from(document.styleSheets).some((t) => t.href === e11);
}
function bM(e11) {
  return new Promise((t) => {
    if (L0(e11)) return t(null);
    const r = document.createElement("link");
    r.rel = "stylesheet", r.href = e11, r.setAttribute("data-snapdom", "injected-import"), r.onload = () => t(r), r.onerror = () => t(null), document.head.appendChild(r);
  });
}
async function wM({ preCached: e11 = false } = {}) {
  if (ce.has("fonts-embed-css")) {
    if (e11) {
      const s = document.createElement("style");
      s.setAttribute("data-snapdom", "embedFonts"), s.textContent = ce.get("fonts-embed-css"), document.head.appendChild(s);
    }
    return ce.get("fonts-embed-css");
  }
  const t = /@import\s+url\(["']?([^"')]+)["']?\)/g, r = [];
  for (const s of document.querySelectorAll("style")) {
    const o = s.textContent || "", a = Array.from(o.matchAll(t));
    for (const l of a) {
      const c = l[1];
      ir(c) || L0(c) || r.push(c);
    }
  }
  await Promise.all(r.map(bM));
  const i = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter((s) => s.href);
  let n = "";
  for (const s of i)
    try {
      const a = await (await fetch(s.href)).text();
      if (ir(s.href) || ir(a)) continue;
      const l = /url\((["']?)([^"')]+)\1\)/g, c = await Promise.all(
        Array.from(a.matchAll(l)).map(async (u) => {
          let f = S0(u[0]);
          if (!f) return null;
          let d = f;
          if (!d.startsWith("http") && !d.startsWith("data:") && (d = new URL(d, s.href).href), ir(d)) return null;
          if (ce.has(d))
            return ze.add(d), { original: u[0], inlined: `url(${ce.get(d)})` };
          if (ze.has(d)) return null;
          try {
            const m = await (await fetch(d)).blob(), y = await new Promise((b) => {
              const x = new FileReader();
              x.onload = () => b(x.result), x.readAsDataURL(m);
            });
            return ce.set(d, y), ze.add(d), { original: u[0], inlined: `url(${y})` };
          } catch {
            return console.warn("[snapdom] Failed to fetch font resource:", d), null;
          }
        })
      );
      let h3 = a;
      for (const u of c)
        u && (h3 = h3.replace(u.original, u.inlined));
      n += h3 + `
`;
    } catch {
      console.warn("[snapdom] Failed to fetch CSS:", s.href);
    }
  for (const s of document.styleSheets)
    try {
      if (!s.href || i.every((o) => o.href !== s.href)) {
        for (const o of s.cssRules)
          if (o.type === CSSRule.FONT_FACE_RULE) {
            const a = o.style.getPropertyValue("src"), l = o.style.getPropertyValue("font-family");
            if (!a || ir(l)) continue;
            const c = /url\((["']?)([^"')]+)\1\)/g;
            let h3 = a;
            const u = Array.from(a.matchAll(c));
            for (const f of u) {
              let d = f[2].trim();
              if (!d) continue;
              let p = d;
              if (!p.startsWith("http") && !p.startsWith("data:") && (p = new URL(p, s.href || location.href).href), !ir(p)) {
                if (ce.has(p)) {
                  ze.add(p), h3 = h3.replace(f[0], `url(${ce.get(p)})`);
                  continue;
                }
                if (!ze.has(p))
                  try {
                    const y = await (await fetch(p)).blob(), b = await new Promise((x) => {
                      const w = new FileReader();
                      w.onload = () => x(w.result), w.readAsDataURL(y);
                    });
                    ce.set(p, b), ze.add(p), h3 = h3.replace(f[0], `url(${b})`);
                  } catch {
                    console.warn("[snapdom] Failed to fetch font URL:", p);
                  }
              }
            }
            n += `@font-face {
  font-family: ${l};
  src: ${h3};
  font-style: ${o.style.getPropertyValue("font-style") || "normal"};
  font-weight: ${o.style.getPropertyValue("font-weight") || "normal"};
}
`;
          }
      }
    } catch (o) {
      console.warn("[snapdom] Cannot access stylesheet", s.href, o);
    }
  for (const s of document.fonts)
    if (s.family && s.status === "loaded" && s._snapdomSrc) {
      if (ir(s.family)) continue;
      let o = s._snapdomSrc;
      if (!o.startsWith("data:")) {
        if (ce.has(s._snapdomSrc))
          o = ce.get(s._snapdomSrc), ze.add(s._snapdomSrc);
        else if (!ze.has(s._snapdomSrc))
          try {
            const l = await (await fetch(s._snapdomSrc)).blob();
            o = await new Promise((c) => {
              const h3 = new FileReader();
              h3.onload = () => c(h3.result), h3.readAsDataURL(l);
            }), ce.set(s._snapdomSrc, o), ze.add(s._snapdomSrc);
          } catch {
            console.warn("[snapdom] Failed to fetch dynamic font src:", s._snapdomSrc);
            continue;
          }
      }
      n += `@font-face {
  font-family: '${s.family}';
  src: url(${o});
  font-style: ${s.style || "normal"};
  font-weight: ${s.weight || "normal"};
}
`;
    }
  if (n && (ce.set("fonts-embed-css", n), e11)) {
    const s = document.createElement("style");
    s.setAttribute("data-snapdom", "embedFonts"), s.textContent = n, document.head.appendChild(s);
  }
  return n;
}
async function A0(e11, t, r, i, n, s = false, o) {
  var _a3;
  if (!(e11 instanceof Element) || !(t instanceof Element)) return;
  for (const c of ["::before", "::after", "::first-letter"])
    try {
      const h3 = Oc(e11, c);
      if (!h3 || typeof h3[Symbol.iterator] != "function") continue;
      if (c === "::first-letter") {
        const b = getComputedStyle(e11);
        if (!(h3.color !== b.color || h3.fontSize !== b.fontSize || h3.fontWeight !== b.fontWeight)) continue;
        const w = Array.from(t.childNodes).find(
          (D) => D.nodeType === Node.TEXT_NODE && D.textContent && D.textContent.trim().length > 0
        );
        if (!w) continue;
        const v = w.textContent, S = (_a3 = v.match(/^([^\p{L}\p{N}\s]*[\p{L}\p{N}](?:['’])?)/u)) == null ? void 0 : _a3[0], T = v.slice((S == null ? void 0 : S.length) || 0);
        if (!S || /[\uD800-\uDFFF]/.test(S)) continue;
        const O = document.createElement("span");
        O.textContent = S, O.dataset.snapdomPseudo = "::first-letter";
        const k = Hu(h3), E = Tl(k, "span", n);
        r.set(O, E);
        const L = document.createTextNode(T);
        t.replaceChild(L, w), t.insertBefore(O, L);
        continue;
      }
      const u = h3.getPropertyValue("content"), f = h3.getPropertyValue("background-image"), d = h3.getPropertyValue("background-color"), p = u !== "none", m = f && f !== "none", y = d && d !== "transparent" && d !== "rgba(0, 0, 0, 0)";
      if (p || m || y) {
        const b = h3.getPropertyValue("font-family"), x = parseInt(h3.getPropertyValue("font-size")) || 32, w = parseInt(h3.getPropertyValue("font-weight")) || false, v = h3.getPropertyValue("color") || "#000", C = document.createElement("span");
        C.dataset.snapdomPseudo = c;
        const S = Hu(h3), T = Tl(S, "span", n);
        r.set(C, T);
        const O = ir(b), k = fM(u);
        if (O && k.length === 1) {
          const D = document.createElement("img");
          D.src = await xM(k, b, w, x, v), D.style = `width:${x}px;height:auto;object-fit:contain;`, C.appendChild(D);
        } else if (k.startsWith("url(")) {
          const D = S0(k);
          if (D && D.trim() !== "")
            try {
              const F = document.createElement("img"), M = await Dc(Ic(D, { useProxy: o }));
              F.src = M, F.style = `width:${x}px;height:auto;object-fit:contain;`, C.appendChild(F);
            } catch (F) {
              console.error(`[snapdom] Error in pseudo ${c} for`, e11, F);
            }
        } else !O && k && k !== "none" && (C.textContent = k);
        if (m)
          try {
            const D = B0(f), F = await Promise.all(
              D.map((M) => _0(M))
            );
            C.style.backgroundImage = F.join(", ");
          } catch (D) {
            console.warn(`[snapdom] Failed to inline background-image for ${c}`, D);
          }
        if (y && (C.style.backgroundColor = d), !(C.childNodes.length > 0 || C.textContent && C.textContent.trim() !== "" || m || y)) continue;
        c === "::before" ? t.insertBefore(C, t.firstChild) : t.appendChild(C);
      }
    } catch (h3) {
      console.warn(`[snapdom] Failed to capture ${c} for`, e11, h3);
    }
  const a = Array.from(e11.children), l = Array.from(t.children).filter((c) => !c.dataset.snapdomPseudo);
  for (let c = 0; c < Math.min(a.length, l.length); c++)
    await A0(
      a[c],
      l[c],
      r,
      i,
      n,
      s,
      o
    );
}
function vM(e11) {
  if (!e11) return;
  const t = document.querySelectorAll("svg > defs");
  t.length && e11.querySelectorAll("svg").forEach((r) => {
    const i = r.querySelectorAll("use");
    if (!i.length) return;
    const n = /* @__PURE__ */ new Set();
    if (i.forEach((o) => {
      const a = o.getAttribute("xlink:href") || o.getAttribute("href");
      a && a.startsWith("#") && n.add(a.slice(1));
    }), !n.size) return;
    const s = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    for (const o of n)
      for (const a of t) {
        const l = a.querySelector(`#${CSS.escape(o)}`);
        if (l) {
          s.appendChild(l.cloneNode(true));
          break;
        }
      }
    s.childNodes.length && r.insertBefore(s, r.firstChild);
  });
}
async function CM(e11, t = false, r = false, i = {}) {
  var _a3;
  const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new Map();
  let a;
  try {
    a = Ts(e11, n, s, o, t, i, e11);
  } catch (c) {
    throw console.warn("deepClone failed:", c), c;
  }
  try {
    await A0(e11, a, n, s, t, r, i.useProxy);
  } catch (c) {
    console.warn("inlinePseudoElements failed:", c);
  }
  try {
    vM(a);
  } catch (c) {
    console.warn("inlineExternalDef failed:", c);
  }
  let l = "";
  if (t) {
    const c = uM(n);
    l = Array.from(c.entries()).map(([h3, u]) => `.${u}{${h3}}`).join("");
    for (const [h3, u] of n.entries()) {
      if (h3.tagName === "STYLE") continue;
      const f = c.get(u);
      f && h3.classList.add(f);
      const d = (_a3 = h3.style) == null ? void 0 : _a3.backgroundImage;
      h3.removeAttribute("style"), d && d !== "none" && (h3.style.backgroundImage = d);
    }
  } else
    for (const [c, h3] of n.entries())
      c.tagName !== "STYLE" && c.setAttribute("style", h3.replace(/;/g, "; "));
  for (const [c, h3] of o.entries()) {
    const u = h3.scrollLeft, f = h3.scrollTop;
    if ((u || f) && c instanceof HTMLElement) {
      c.style.overflow = "hidden", c.style.scrollbarWidth = "none", c.style.msOverflowStyle = "none";
      const p = document.createElement("div");
      for (p.style.transform = `translate(${-u}px, ${-f}px)`, p.style.willChange = "transform", p.style.display = "inline-block", p.style.width = "100%"; c.firstChild; )
        p.appendChild(c.firstChild);
      c.appendChild(p);
    }
  }
  if (e11 === o.get(a)) {
    const c = s.get(e11) || window.getComputedStyle(e11);
    s.set(e11, c);
    const h3 = dM(c.transform);
    a.style.margin = "0", a.style.position = "static", a.style.top = "auto", a.style.left = "auto", a.style.right = "auto", a.style.bottom = "auto", a.style.zIndex = "auto", a.style.float = "none", a.style.clear = "none", a.style.transform = h3 || "";
  }
  for (const [c, h3] of o.entries())
    h3.tagName === "PRE" && (c.style.marginTop = "0", c.style.marginBlockStart = "0");
  return { clone: a, classCSS: l, styleCache: s };
}
async function kM(e11, t = {}) {
  const r = Array.from(e11.querySelectorAll("img")), i = async (n) => {
    const s = n.src;
    try {
      const o = await Dc(s, { useProxy: t.useProxy });
      n.src = o, n.width || (n.width = n.naturalWidth || 100), n.height || (n.height = n.naturalHeight || 100);
    } catch {
      const o = document.createElement("div");
      o.style = `width: ${n.width || 100}px; height: ${n.height || 100}px; background: #ccc; display: inline-block; text-align: center; line-height: ${n.height || 100}px; color: #666; font-size: 12px;`, o.innerText = "img", n.replaceWith(o);
    }
  };
  for (let n = 0; n < r.length; n += 4) {
    const s = r.slice(n, n + 4).map(i);
    await Promise.allSettled(s);
  }
}
async function _M(e11, t, r, i = {}) {
  const n = [[e11, t]], s = [
    "background-image",
    "mask",
    "mask-image",
    "-webkit-mask-image",
    "mask-source",
    "mask-box-image-source",
    "mask-border-source",
    "-webkit-mask-box-image-source"
  ];
  for (; n.length; ) {
    const [o, a] = n.shift(), l = r.get(o) || Oc(o);
    r.has(o) || r.set(o, l);
    for (const f of s) {
      const d = l.getPropertyValue(f);
      if (!d || d === "none") continue;
      const p = B0(d), m = await Promise.all(
        p.map((y) => _0(y, i))
      );
      m.some((y) => y && y !== "none" && !/^url\(undefined/.test(y)) && a.style.setProperty(f, m.join(", "));
    }
    const c = l.getPropertyValue("background-color");
    c && c !== "transparent" && c !== "rgba(0, 0, 0, 0)" && (a.style.backgroundColor = c);
    const h3 = Array.from(o.children), u = Array.from(a.children);
    for (let f = 0; f < Math.min(h3.length, u.length); f++)
      n.push([h3[f], u[f]]);
  }
}
async function SM(e11, t = {}) {
  if (!e11) throw new Error("Element cannot be null or undefined");
  const { compress: r = true, embedFonts: i = false, fast: n = true, scale: s = 1, useProxy: o = "" } = t;
  let a, l, c, h3 = "", u = "", f, d;
  if ({ clone: a, classCSS: l, styleCache: c } = await CM(e11, r, i, t), await new Promise((m) => {
    Ki(async () => {
      await kM(a, t), m();
    }, { fast: n });
  }), await new Promise((m) => {
    Ki(async () => {
      await _M(e11, a, c, t), m();
    }, { fast: n });
  }), i && await new Promise((m) => {
    Ki(async () => {
      h3 = await wM(), m();
    }, { fast: n });
  }), r) {
    const m = cM(a).sort(), y = m.join(",");
    bo.has(y) ? u = bo.get(y) : await new Promise((b) => {
      Ki(() => {
        u = hM(m), bo.set(y, u), b();
      }, { fast: n });
    });
  }
  await new Promise((m) => {
    Ki(() => {
      const y = e11.getBoundingClientRect();
      let b = y.width, x = y.height;
      const w = Number.isFinite(t.width), v = Number.isFinite(t.height), C = typeof s == "number" && s !== 1;
      if (!C) {
        const F = y.width / y.height;
        w && v ? (b = t.width, x = t.height) : w ? (b = t.width, x = b / F) : v && (x = t.height, b = x * F);
      }
      if (b = Math.ceil(b), x = Math.ceil(x), a.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), a.style.transformOrigin = "top left", !C && (w || v)) {
        const F = y.width, M = y.height, $ = b / F, A = x / M, P = a.style.transform || "", R = `scale(${$}, ${A})`;
        a.style.transform = `${R} ${P}`.trim();
      } else C && T0() && (a.style.scale = `${s}`);
      const S = "http://www.w3.org/2000/svg", T = document.createElementNS(S, "foreignObject");
      T.setAttribute("width", "100%"), T.setAttribute("height", "100%");
      const O = document.createElement("style");
      O.textContent = u + h3 + "svg{overflow:visible;}" + l, T.appendChild(O), T.appendChild(a);
      const E = new XMLSerializer().serializeToString(T);
      d = `<svg xmlns="${S}" width="${b}" height="${x}" viewBox="0 0 ${b} ${x}">` + E + "</svg>", f = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`, m();
    }, { fast: n });
  });
  const p = document.getElementById("snapdom-sandbox");
  return p && p.style.position === "absolute" && p.remove(), f;
}
async function TM(e11, { dpr: t = 1, scale: r = 1 }) {
  const i = new Image();
  return i.src = e11, await i.decode(), T0 ? (i.width = i.width * r, i.height = i.height * r) : (i.width = i.width / r, i.height = i.height / r), i;
}
async function E0(e11, { dpr: t = 1, scale: r = 1 } = {}) {
  const i = new Image();
  i.src = e11, await i.decode();
  const n = document.createElement("canvas"), s = i.width * r, o = i.height * r;
  n.width = Math.ceil(s * t), n.height = Math.ceil(o * t);
  const a = n.getContext("2d");
  return a.scale(t, t), a.drawImage(i, 0, 0, s, o), n.style.width = `${s}px`, n.style.height = `${o}px`, n;
}
async function M0(e11, {
  type: t = "svg",
  scale: r = 1,
  backgroundColor: i = "#fff",
  quality: n
} = {}) {
  const s = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp"
  }[t] || "image/png";
  if (t === "svg") {
    const a = decodeURIComponent(e11.split(",")[1]);
    return new Blob([a], { type: "image/svg+xml" });
  }
  const o = await Rc(e11, { dpr: 1, scale: r }, i);
  return new Promise((a) => {
    o.toBlob((l) => a(l), `${s}`, n);
  });
}
async function Rc(e11, { dpr: t = 1, scale: r = 1 }, i) {
  const n = await E0(e11, { dpr: t, scale: r });
  if (!i) return n;
  const s = document.createElement("canvas");
  s.width = n.width, s.height = n.height;
  const o = s.getContext("2d");
  return o.fillStyle = i, o.fillRect(0, 0, s.width, s.height), o.drawImage(n, 0, 0), s;
}
async function Co(e11, { dpr: t = 1, scale: r = 1, backgroundColor: i = "#fff", quality: n }, s = "png") {
  const o = await Rc(e11, { dpr: t, scale: r }, i), a = new Image();
  return a.src = o.toDataURL(`image/${s}`, n), await a.decode(), a.style.width = `${o.width / t}px`, a.style.height = `${o.height / t}px`, a;
}
async function BM(e11, { dpr: t = 1, scale: r = 1, backgroundColor: i = "#fff", format: n = "png", filename: s = "capture" } = {}) {
  if (n === "svg") {
    const f = await M0(e11), d = URL.createObjectURL(f), p = document.createElement("a");
    p.href = d, p.download = `${s}.svg`, p.click(), URL.revokeObjectURL(d);
    return;
  }
  const o = ["jpg", "jpeg", "webp"].includes(n) ? "#fff" : void 0, l = await Rc(e11, { dpr: t, scale: r }, i ?? o), c = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp"
  }[n] || "image/png", h3 = l.toDataURL(c), u = document.createElement("a");
  u.href = h3, u.download = `${s}.${n}`, u.click();
}
async function It(e11, t = {}) {
  if (t = { scale: 1, ...t }, !e11) throw new Error("Element cannot be null or undefined");
  return t.iconFonts && yM(t.iconFonts), await It.capture(e11, t);
}
It.capture = async (e11, t = {}) => {
  const r = await SM(e11, t), i = window.devicePixelRatio || 1, n = t.scale || 1;
  return {
    url: r,
    options: t,
    toRaw: () => r,
    toImg: () => TM(r, { dpr: i, scale: n }),
    toCanvas: () => E0(r, { dpr: i, scale: n }),
    toBlob: (s) => M0(r, { scale: n, ...s }),
    toPng: (s) => Co(r, { dpr: i, scale: n, ...s }, "png"),
    toJpg: (s) => Co(r, { dpr: i, scale: n, ...s }, "jpeg"),
    toWebp: (s) => Co(r, { dpr: i, scale: n, ...s }, "webp"),
    download: ({ format: s = "png", filename: o = "capture", backgroundColor: a } = {}) => BM(r, { dpr: i, scale: n, backgroundColor: a, format: s, filename: o })
  };
};
It.toRaw = async (e11, t) => (await It.capture(e11, t)).toRaw();
It.toImg = async (e11, t) => (await It.capture(e11, t)).toImg();
It.toCanvas = async (e11, t) => (await It.capture(e11, t)).toCanvas();
It.toBlob = async (e11, t) => (await It.capture(e11, t)).toBlob(t);
It.toPng = async (e11, t) => (await It.capture(e11, t)).toPng(t);
It.toJpg = async (e11, t) => (await It.capture(e11, t)).toJpg(t);
It.toWebp = async (e11, t) => (await It.capture(e11, t)).toWebp(t);
It.download = async (e11, t = {}) => {
  const {
    format: r = "png",
    filename: i = "capture",
    backgroundColor: n,
    ...s
  } = t;
  return await (await It.capture(e11, s)).download({ format: r, filename: i, backgroundColor: n });
};
function Nn(e11) {
  return getCurrentScope() ? (onScopeDispose(e11), true) : false;
}
var za = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var LM = (e11) => e11 != null;
var AM = Object.prototype.toString;
var $0 = (e11) => AM.call(e11) === "[object Object]";
var EM = () => {
};
var Uu = MM();
function MM() {
  var e11, t;
  return za && ((e11 = window == null ? void 0 : window.navigator) == null ? void 0 : e11.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function $M(...e11) {
  if (e11.length !== 1)
    return toRef(...e11);
  const t = e11[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: EM }))) : ref(t);
}
function Br(e11) {
  return Array.isArray(e11) ? e11 : [e11];
}
function FM(e11) {
  return getCurrentInstance();
}
function OM(e11, t = true, r) {
  FM() ? onMounted(e11, r) : t ? e11() : nextTick(e11);
}
function F0(e11, t, r) {
  return watch(
    e11,
    t,
    {
      ...r,
      immediate: true
    }
  );
}
var O0 = za ? window : void 0;
var DM = za ? window.document : void 0;
function ua(e11) {
  var t;
  const r = toValue(e11);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function Yu(...e11) {
  const t = [], r = () => {
    t.forEach((a) => a()), t.length = 0;
  }, i = (a, l, c, h3) => (a.addEventListener(l, c, h3), () => a.removeEventListener(l, c, h3)), n = computed(() => {
    const a = Br(toValue(e11[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), s = F0(
    () => {
      var a, l;
      return [
        (l = (a = n.value) == null ? void 0 : a.map((c) => ua(c))) != null ? l : [O0].filter((c) => c != null),
        Br(toValue(n.value ? e11[1] : e11[0])),
        Br(unref(n.value ? e11[2] : e11[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(n.value ? e11[3] : e11[2])
      ];
    },
    ([a, l, c, h3]) => {
      if (r(), !(a == null ? void 0 : a.length) || !(l == null ? void 0 : l.length) || !(c == null ? void 0 : c.length))
        return;
      const u = $0(h3) ? { ...h3 } : h3;
      t.push(
        ...a.flatMap(
          (f) => l.flatMap(
            (d) => c.map((p) => i(f, d, p, u))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    s(), r();
  };
  return Nn(r), o;
}
function IM() {
  const e11 = shallowRef(false), t = getCurrentInstance();
  return t && onMounted(() => {
    e11.value = true;
  }, t), e11;
}
function D0(e11) {
  const t = IM();
  return computed(() => (t.value, !!e11()));
}
function RM(e11, t, r = {}) {
  const { window: i = O0, ...n } = r;
  let s;
  const o = D0(() => i && "MutationObserver" in i), a = () => {
    s && (s.disconnect(), s = void 0);
  }, l = computed(() => {
    const f = toValue(e11), d = Br(f).map(ua).filter(LM);
    return new Set(d);
  }), c = watch(
    () => l.value,
    (f) => {
      a(), o.value && f.size && (s = new MutationObserver(t), f.forEach((d) => s.observe(d, n)));
    },
    { immediate: true, flush: "post" }
  ), h3 = () => s == null ? void 0 : s.takeRecords(), u = () => {
    c(), a();
  };
  return Nn(u), {
    isSupported: o,
    stop: u,
    takeRecords: h3
  };
}
var Gu = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function PM(e11, t = {}) {
  const {
    document: r = DM,
    autoExit: i = false
  } = t, n = computed(() => {
    var x;
    return (x = ua(e11)) != null ? x : r == null ? void 0 : r.documentElement;
  }), s = shallowRef(false), o = computed(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((x) => r && x in r || n.value && x in n.value)), a = computed(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((x) => r && x in r || n.value && x in n.value)), l = computed(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((x) => r && x in r || n.value && x in n.value)), c = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((x) => r && x in r), h3 = D0(() => n.value && r && o.value !== void 0 && a.value !== void 0 && l.value !== void 0), u = () => c ? (r == null ? void 0 : r[c]) === n.value : false, f = () => {
    if (l.value) {
      if (r && r[l.value] != null)
        return r[l.value];
      {
        const x = n.value;
        if ((x == null ? void 0 : x[l.value]) != null)
          return !!x[l.value];
      }
    }
    return false;
  };
  async function d() {
    if (!(!h3.value || !s.value)) {
      if (a.value)
        if ((r == null ? void 0 : r[a.value]) != null)
          await r[a.value]();
        else {
          const x = n.value;
          (x == null ? void 0 : x[a.value]) != null && await x[a.value]();
        }
      s.value = false;
    }
  }
  async function p() {
    if (!h3.value || s.value)
      return;
    f() && await d();
    const x = n.value;
    o.value && (x == null ? void 0 : x[o.value]) != null && (await x[o.value](), s.value = true);
  }
  async function m() {
    await (s.value ? d() : p());
  }
  const y = () => {
    const x = f();
    (!x || x && u()) && (s.value = x);
  }, b = { capture: false, passive: true };
  return Yu(r, Gu, y, b), Yu(() => ua(n), Gu, y, b), OM(y, false), i && Nn(d), {
    isSupported: h3,
    isFullscreen: s,
    enter: p,
    exit: d,
    toggle: m
  };
}
var NM = za ? window : void 0;
function zM(e11) {
  var t;
  const r = toValue(e11);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function WM(...e11) {
  const t = [], r = () => {
    t.forEach((a) => a()), t.length = 0;
  }, i = (a, l, c, h3) => (a.addEventListener(l, c, h3), () => a.removeEventListener(l, c, h3)), n = computed(() => {
    const a = Br(toValue(e11[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), s = F0(
    () => {
      var a, l;
      return [
        (l = (a = n.value) == null ? void 0 : a.map((c) => zM(c))) != null ? l : [NM].filter((c) => c != null),
        Br(toValue(n.value ? e11[1] : e11[0])),
        Br(unref(n.value ? e11[2] : e11[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(n.value ? e11[3] : e11[2])
      ];
    },
    ([a, l, c, h3]) => {
      if (r(), !(a == null ? void 0 : a.length) || !(l == null ? void 0 : l.length) || !(c == null ? void 0 : c.length))
        return;
      const u = $0(h3) ? { ...h3 } : h3;
      t.push(
        ...a.flatMap(
          (f) => l.flatMap(
            (d) => c.map((p) => i(f, d, p, u))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    s(), r();
  };
  return Nn(r), o;
}
var qM = defineComponent({
  name: "UseFullscreen",
  props: ["as"],
  setup(e11, { slots: t }) {
    const r = shallowRef(), i = reactive(PM(r));
    return () => {
      if (t.default)
        return h(e11.as || "div", { ref: r }, t.default(i));
    };
  }
});
function ko(e11) {
  return typeof Window < "u" && e11 instanceof Window ? e11.document.documentElement : typeof Document < "u" && e11 instanceof Document ? e11.documentElement : e11;
}
function I0(e11) {
  const t = window.getComputedStyle(e11);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e11.clientWidth < e11.scrollWidth || t.overflowY === "auto" && e11.clientHeight < e11.scrollHeight)
    return true;
  {
    const r = e11.parentNode;
    return !r || r.tagName === "BODY" ? false : I0(r);
  }
}
function HM(e11) {
  const t = e11 || window.event, r = t.target;
  return I0(r) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
var _o = /* @__PURE__ */ new WeakMap();
function jM(e11, t = false) {
  const r = shallowRef(t);
  let i = null, n = "";
  watch($M(e11), (a) => {
    const l = ko(toValue(a));
    if (l) {
      const c = l;
      if (_o.get(c) || _o.set(c, c.style.overflow), c.style.overflow !== "hidden" && (n = c.style.overflow), c.style.overflow === "hidden")
        return r.value = true;
      if (r.value)
        return c.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const s = () => {
    const a = ko(toValue(e11));
    !a || r.value || (Uu && (i = WM(
      a,
      "touchmove",
      (l) => {
        HM(l);
      },
      { passive: false }
    )), a.style.overflow = "hidden", r.value = true);
  }, o = () => {
    const a = ko(toValue(e11));
    !a || !r.value || (Uu && (i == null ? void 0 : i()), a.style.overflow = n, _o.delete(a), r.value = false);
  };
  return Nn(o), computed({
    get() {
      return r.value;
    },
    set(a) {
      a ? s() : o();
    }
  });
}
function UM() {
  let e11 = false;
  const t = shallowRef(false);
  return (r, i) => {
    if (t.value = i.value, e11)
      return;
    e11 = true;
    const n = jM(r, i.value);
    watch(t, (s) => n.value = s);
  };
}
UM();
var Ll = 1;
var YM = class {
  constructor() {
    __publicField(this, "subscribers");
    __publicField(this, "toasts");
    __publicField(this, "dismissedToasts");
    __publicField(this, "subscribe", (e11) => (this.subscribers.push(e11), () => {
      const t = this.subscribers.indexOf(e11);
      this.subscribers.splice(t, 1);
    }));
    __publicField(this, "publish", (e11) => {
      this.subscribers.forEach((t) => t(e11));
    });
    __publicField(this, "addToast", (e11) => {
      this.publish(e11), this.toasts = [...this.toasts, e11];
    });
    __publicField(this, "create", (e11) => {
      var _a3;
      const { message: t, ...r } = e11, i = typeof e11.id == "number" || e11.id && ((_a3 = e11.id) == null ? void 0 : _a3.length) > 0 ? e11.id : Ll++, n = this.toasts.find((o) => o.id === i), s = e11.dismissible === void 0 ? true : e11.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), n ? this.toasts = this.toasts.map((o) => o.id === i ? (this.publish({
        ...o,
        ...e11,
        id: i,
        title: t
      }), {
        ...o,
        ...e11,
        id: i,
        dismissible: s,
        title: t
      }) : o) : this.addToast({
        title: t,
        ...r,
        dismissible: s,
        id: i
      }), i;
    });
    __publicField(this, "dismiss", (e11) => (e11 ? (this.dismissedToasts.add(e11), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
      id: e11,
      dismiss: true
    })))) : this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({
        id: t.id,
        dismiss: true
      }));
    }), e11));
    __publicField(this, "message", (e11, t) => this.create({
      ...t,
      message: e11,
      type: "default"
    }));
    __publicField(this, "error", (e11, t) => this.create({
      ...t,
      type: "error",
      message: e11
    }));
    __publicField(this, "success", (e11, t) => this.create({
      ...t,
      type: "success",
      message: e11
    }));
    __publicField(this, "info", (e11, t) => this.create({
      ...t,
      type: "info",
      message: e11
    }));
    __publicField(this, "warning", (e11, t) => this.create({
      ...t,
      type: "warning",
      message: e11
    }));
    __publicField(this, "loading", (e11, t) => this.create({
      ...t,
      type: "loading",
      message: e11
    }));
    __publicField(this, "promise", (e11, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({
        ...t,
        promise: e11,
        type: "loading",
        message: t.loading,
        description: typeof t.description != "function" ? t.description : void 0
      }));
      const i = Promise.resolve(e11 instanceof Function ? e11() : e11);
      let n = r !== void 0, s;
      const o = i.then(async (l) => {
        if (s = ["resolve", l], isVNode(l))
          n = false, this.create({
            id: r,
            type: "default",
            message: l
          });
        else if (VM(l) && !l.ok) {
          n = false;
          const h3 = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, u = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description, d = typeof h3 == "object" && !isVNode(h3) ? h3 : {
            message: h3 || "",
            id: r || ""
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...d
          });
        } else if (l instanceof Error) {
          n = false;
          const h3 = typeof t.error == "function" ? await t.error(l) : t.error, u = typeof t.description == "function" ? await t.description(l) : t.description, d = typeof h3 == "object" && !isVNode(h3) ? h3 : {
            message: h3 || "",
            id: r || ""
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...d
          });
        } else if (t.success !== void 0) {
          n = false;
          const h3 = typeof t.success == "function" ? await t.success(l) : t.success, u = typeof t.description == "function" ? await t.description(l) : t.description, d = typeof h3 == "object" && !isVNode(h3) ? h3 : {
            message: h3 || "",
            id: r || ""
          };
          this.create({
            id: r,
            type: "success",
            description: u,
            ...d
          });
        }
      }).catch(async (l) => {
        if (s = ["reject", l], t.error !== void 0) {
          n = false;
          const c = typeof t.error == "function" ? await t.error(l) : t.error, h3 = typeof t.description == "function" ? await t.description(l) : t.description, f = typeof c == "object" && !isVNode(c) ? c : {
            message: c || "",
            id: r || ""
          };
          this.create({
            id: r,
            type: "error",
            description: h3,
            ...f
          });
        }
      }).finally(() => {
        var _a3;
        n && (this.dismiss(r), r = void 0), (_a3 = t.finally) == null ? void 0 : _a3.call(t);
      }), a = () => new Promise((l, c) => o.then(() => s[0] === "reject" ? c(s[1]) : l(s[1])).catch(c));
      return typeof r != "string" && typeof r != "number" ? { unwrap: a } : Object.assign(r, { unwrap: a });
    });
    __publicField(this, "custom", (e11, t) => {
      const r = (t == null ? void 0 : t.id) || Ll++;
      return this.publish({
        component: e11,
        id: r,
        ...t
      }), r;
    });
    __publicField(this, "getActiveToasts", () => this.toasts.filter((e11) => !this.dismissedToasts.has(e11.id)));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
};
var re = new YM();
function GM(e11, t) {
  const r = (t == null ? void 0 : t.id) || Ll++;
  return re.create({
    message: e11,
    id: r,
    type: "default",
    ...t
  }), r;
}
var VM = (e11) => e11 && typeof e11 == "object" && "ok" in e11 && typeof e11.ok == "boolean" && "status" in e11 && typeof e11.status == "number";
var XM = GM;
var KM = () => re.toasts;
var ZM = () => re.getActiveToasts();
var as = Object.assign(XM, {
  success: re.success,
  info: re.info,
  warning: re.warning,
  error: re.error,
  custom: re.custom,
  message: re.message,
  promise: re.promise,
  dismiss: re.dismiss,
  loading: re.loading
}, {
  getHistory: KM,
  getToasts: ZM
});
function os(e11) {
  return e11.label !== void 0;
}
var QM = 3;
var R0 = "24px";
var P0 = "16px";
var Vu = 4e3;
var JM = 356;
var t$ = 14;
var e$ = 45;
var N0 = 200;
function r$() {
  const e11 = ref(false);
  return watchEffect(() => {
    const t = () => {
      e11.value = document.hidden;
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }), { isDocumentHidden: e11 };
}
function er(...e11) {
  return e11.filter(Boolean).join(" ");
}
function i$(e11) {
  const [t, r] = e11.split("-"), i = [];
  return t && i.push(t), r && i.push(r), i;
}
function n$(e11, t) {
  const r = {};
  return [e11, t].forEach((i, n) => {
    const s = n === 1, o = s ? "--mobile-offset" : "--offset", a = s ? P0 : R0;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((h3) => {
        r[`${o}-${h3}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof i == "number" || typeof i == "string" ? l(i) : typeof i == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      i[c] === void 0 ? r[`${o}-${c}`] = a : r[`${o}-${c}`] = typeof i[c] == "number" ? `${i[c]}px` : i[c];
    }) : l(a);
  }), r;
}
var s$ = [
  "data-rich-colors",
  "data-styled",
  "data-mounted",
  "data-promise",
  "data-swiped",
  "data-removed",
  "data-visible",
  "data-y-position",
  "data-x-position",
  "data-index",
  "data-front",
  "data-swiping",
  "data-dismissible",
  "data-type",
  "data-invert",
  "data-swipe-out",
  "data-swipe-direction",
  "data-expanded"
];
var a$ = ["aria-label", "data-disabled"];
var o$ = defineComponent({
  __name: "Toast",
  props: {
    toast: {},
    toasts: {},
    index: {},
    swipeDirections: {},
    expanded: { type: Boolean },
    invert: { type: Boolean },
    heights: {},
    gap: {},
    position: {},
    visibleToasts: {},
    expandByDefault: { type: Boolean },
    closeButton: { type: Boolean },
    interacting: { type: Boolean },
    style: {},
    cancelButtonStyle: {},
    actionButtonStyle: {},
    duration: {},
    class: {},
    unstyled: { type: Boolean },
    descriptionClass: {},
    loadingIcon: {},
    classes: {},
    icons: {},
    closeButtonAriaLabel: {},
    defaultRichColors: { type: Boolean }
  },
  emits: [
    "update:heights",
    "update:height",
    "removeToast"
  ],
  setup(e11, { emit: t }) {
    const r = e11, i = t, n = ref(null), s = ref(null), o = ref(false), a = ref(false), l = ref(false), c = ref(false), h3 = ref(false), u = ref(0), f = ref(0), d = ref(r.toast.duration || r.duration || Vu), p = ref(null), m = ref(null), y = computed(() => r.index === 0), b = computed(() => r.index + 1 <= r.visibleToasts), x = computed(() => r.toast.type), w = computed(() => r.toast.dismissible !== false), v = computed(() => r.toast.class || ""), C = computed(() => r.descriptionClass || ""), S = computed(() => {
      const I = r.toast.position || r.position, lt = r.heights.filter((ct) => ct.position === I).findIndex((ct) => ct.toastId === r.toast.id);
      return lt >= 0 ? lt : 0;
    }), T = computed(() => {
      const I = r.toast.position || r.position;
      return r.heights.filter((lt) => lt.position === I).reduce((lt, ct, Ct) => Ct >= S.value ? lt : lt + ct.height, 0);
    }), O = computed(() => S.value * r.gap + T.value || 0), k = computed(() => r.toast.closeButton ?? r.closeButton), E = computed(() => r.toast.duration || r.duration || Vu), L = ref(0), D = ref(0), F = ref(null), M = computed(() => r.position.split("-")), $ = computed(() => M.value[0]), A = computed(() => M.value[1]), P = computed(() => typeof r.toast.title != "string"), R = computed(() => typeof r.toast.description != "string"), { isDocumentHidden: q } = r$(), Y = computed(() => x.value && x.value === "loading");
    onMounted(() => {
      o.value = true, d.value = E.value;
    }), watchEffect(async () => {
      if (!o.value || !m.value) return;
      await nextTick();
      const I = m.value, xt = I.style.height;
      I.style.height = "auto";
      const lt = I.getBoundingClientRect().height;
      I.style.height = xt, f.value = lt, i("update:height", {
        toastId: r.toast.id,
        height: lt,
        position: r.toast.position || r.position
      });
    });
    function U() {
      a.value = true, u.value = O.value, setTimeout(() => {
        i("removeToast", r.toast);
      }, N0);
    }
    function rt() {
      var _a3, _b2;
      if (Y.value || !w.value) return {};
      U(), (_b2 = (_a3 = r.toast).onDismiss) == null ? void 0 : _b2.call(_a3, r.toast);
    }
    function J(I) {
      Y.value || !w.value || (p.value = /* @__PURE__ */ new Date(), u.value = O.value, I.target.setPointerCapture(I.pointerId), I.target.tagName !== "BUTTON" && (l.value = true, F.value = {
        x: I.clientX,
        y: I.clientY
      }));
    }
    function ut() {
      var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
      if (c.value || !w.value) return;
      F.value = null;
      const I = Number(((_a3 = m.value) == null ? void 0 : _a3.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), xt = Number(((_b2 = m.value) == null ? void 0 : _b2.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), lt = (/* @__PURE__ */ new Date()).getTime() - (((_c2 = p.value) == null ? void 0 : _c2.getTime()) || 0), ct = n.value === "x" ? I : xt, Ct = Math.abs(ct) / lt;
      if (Math.abs(ct) >= e$ || Ct > 0.11) {
        u.value = O.value, (_e2 = (_d2 = r.toast).onDismiss) == null ? void 0 : _e2.call(_d2, r.toast), n.value === "x" ? s.value = I > 0 ? "right" : "left" : s.value = xt > 0 ? "down" : "up", U(), c.value = true;
        return;
      } else
        (_f2 = m.value) == null ? void 0 : _f2.style.setProperty("--swipe-amount-x", "0px"), (_g2 = m.value) == null ? void 0 : _g2.style.setProperty("--swipe-amount-y", "0px");
      h3.value = false, l.value = false, n.value = null;
    }
    function it(I) {
      var _a3, _b2, _c2, _d2;
      if (!F.value || !w.value || (((_b2 = (_a3 = window == null ? void 0 : window.getSelection()) == null ? void 0 : _a3.toString()) == null ? void 0 : _b2.length) ?? false)) return;
      const lt = I.clientY - F.value.y, ct = I.clientX - F.value.x, Ct = r.swipeDirections ?? i$(r.position);
      !n.value && (Math.abs(ct) > 1 || Math.abs(lt) > 1) && (n.value = Math.abs(ct) > Math.abs(lt) ? "x" : "y");
      let Lt = {
        x: 0,
        y: 0
      };
      const ue = (Yt) => 1 / (1.5 + Math.abs(Yt) / 20);
      if (n.value === "y") {
        if (Ct.includes("top") || Ct.includes("bottom")) if (Ct.includes("top") && lt < 0 || Ct.includes("bottom") && lt > 0) Lt.y = lt;
        else {
          const Yt = lt * ue(lt);
          Lt.y = Math.abs(Yt) < Math.abs(lt) ? Yt : lt;
        }
      } else if (n.value === "x" && (Ct.includes("left") || Ct.includes("right")))
        if (Ct.includes("left") && ct < 0 || Ct.includes("right") && ct > 0) Lt.x = ct;
        else {
          const Yt = ct * ue(ct);
          Lt.x = Math.abs(Yt) < Math.abs(ct) ? Yt : ct;
        }
      (Math.abs(Lt.x) > 0 || Math.abs(Lt.y) > 0) && (h3.value = true), (_c2 = m.value) == null ? void 0 : _c2.style.setProperty("--swipe-amount-x", `${Lt.x}px`), (_d2 = m.value) == null ? void 0 : _d2.style.setProperty("--swipe-amount-y", `${Lt.y}px`);
    }
    onMounted(() => {
      if (o.value = true, !m.value) return;
      const I = m.value.getBoundingClientRect().height;
      f.value = I;
      const xt = [{
        toastId: r.toast.id,
        height: I,
        position: r.toast.position
      }, ...r.heights];
      i("update:heights", xt);
    }), onBeforeUnmount(() => {
      m.value && i("removeToast", r.toast);
    }), watchEffect((I) => {
      if (r.toast.promise && x.value === "loading" || r.toast.duration === 1 / 0 || r.toast.type === "loading") return;
      let xt;
      const lt = () => {
        if (D.value < L.value) {
          const Ct = (/* @__PURE__ */ new Date()).getTime() - L.value;
          d.value = d.value - Ct;
        }
        D.value = (/* @__PURE__ */ new Date()).getTime();
      }, ct = () => {
        d.value !== 1 / 0 && (L.value = (/* @__PURE__ */ new Date()).getTime(), xt = setTimeout(() => {
          var _a3, _b2;
          (_b2 = (_a3 = r.toast).onAutoClose) == null ? void 0 : _b2.call(_a3, r.toast), U();
        }, d.value));
      };
      r.expanded || r.interacting || q.value ? lt() : ct(), I(() => {
        clearTimeout(xt);
      });
    }), watch(() => r.toast.delete, (I) => {
      I !== void 0 && I && U();
    }, { deep: true });
    function Bt() {
      l.value = false, n.value = null, F.value = null;
    }
    return (I, xt) => {
      var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t, _u2, _v2, _w2, _x2, _y2, _z, _A2;
      return openBlock(), createElementBlock("li", {
        tabindex: "0",
        ref_key: "toastRef",
        ref: m,
        class: normalizeClass(unref(er)(r.class, v.value, (_a3 = I.classes) == null ? void 0 : _a3.toast, (_b2 = I.toast.classes) == null ? void 0 : _b2.toast, (_c2 = I.classes) == null ? void 0 : _c2[x.value], (_e2 = (_d2 = I.toast) == null ? void 0 : _d2.classes) == null ? void 0 : _e2[x.value])),
        "data-sonner-toast": "",
        "data-rich-colors": I.toast.richColors ?? I.defaultRichColors,
        "data-styled": !(I.toast.component || ((_f2 = I.toast) == null ? void 0 : _f2.unstyled) || I.unstyled),
        "data-mounted": o.value,
        "data-promise": !!I.toast.promise,
        "data-swiped": h3.value,
        "data-removed": a.value,
        "data-visible": b.value,
        "data-y-position": $.value,
        "data-x-position": A.value,
        "data-index": I.index,
        "data-front": y.value,
        "data-swiping": l.value,
        "data-dismissible": w.value,
        "data-type": x.value,
        "data-invert": I.toast.invert || I.invert,
        "data-swipe-out": c.value,
        "data-swipe-direction": s.value,
        "data-expanded": !!(I.expanded || I.expandByDefault && o.value),
        style: normalizeStyle({
          "--index": I.index,
          "--toasts-before": I.index,
          "--z-index": I.toasts.length - I.index,
          "--offset": `${a.value ? u.value : O.value}px`,
          "--initial-height": I.expandByDefault ? "auto" : `${f.value}px`,
          ...I.style,
          ...r.toast.style
        }),
        onDragend: Bt,
        onPointerdown: J,
        onPointerup: ut,
        onPointermove: it
      }, [k.value && !I.toast.component && x.value !== "loading" ? (openBlock(), createElementBlock("button", {
        key: 0,
        "aria-label": I.closeButtonAriaLabel || "Close toast",
        "data-disabled": Y.value,
        "data-close-button": "true",
        class: normalizeClass(unref(er)((_g2 = I.classes) == null ? void 0 : _g2.closeButton, (_i = (_h2 = I.toast) == null ? void 0 : _h2.classes) == null ? void 0 : _i.closeButton)),
        onClick: rt
      }, [((_j = I.icons) == null ? void 0 : _j.close) ? (openBlock(), createBlock(resolveDynamicComponent((_k2 = I.icons) == null ? void 0 : _k2.close), { key: 0 })) : renderSlot(I.$slots, "close-icon", { key: 1 })], 10, a$)) : createCommentVNode("v-if", true), I.toast.component ? (openBlock(), createBlock(resolveDynamicComponent(I.toast.component), mergeProps({ key: 1 }, I.toast.componentProps, { onCloseToast: rt }), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        x.value !== "default" || I.toast.icon || I.toast.promise ? (openBlock(), createElementBlock("div", {
          key: 0,
          "data-icon": "",
          class: normalizeClass(unref(er)((_l2 = I.classes) == null ? void 0 : _l2.icon, (_n2 = (_m2 = I.toast) == null ? void 0 : _m2.classes) == null ? void 0 : _n2.icon))
        }, [I.toast.icon ? (openBlock(), createBlock(resolveDynamicComponent(I.toast.icon), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [x.value === "loading" ? renderSlot(I.$slots, "loading-icon", { key: 0 }) : x.value === "success" ? renderSlot(I.$slots, "success-icon", { key: 1 }) : x.value === "error" ? renderSlot(I.$slots, "error-icon", { key: 2 }) : x.value === "warning" ? renderSlot(I.$slots, "warning-icon", { key: 3 }) : x.value === "info" ? renderSlot(I.$slots, "info-icon", { key: 4 }) : createCommentVNode("v-if", true)], 64))], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          "data-content": "",
          class: normalizeClass(unref(er)((_o2 = I.classes) == null ? void 0 : _o2.content, (_q = (_p2 = I.toast) == null ? void 0 : _p2.classes) == null ? void 0 : _q.content))
        }, [createBaseVNode("div", {
          "data-title": "",
          class: normalizeClass(unref(er)((_r2 = I.classes) == null ? void 0 : _r2.title, (_s2 = I.toast.classes) == null ? void 0 : _s2.title))
        }, [P.value ? (openBlock(), createBlock(resolveDynamicComponent(I.toast.title), normalizeProps(mergeProps({ key: 0 }, I.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(I.toast.title), 1)], 64))], 2), I.toast.description ? (openBlock(), createElementBlock("div", {
          key: 0,
          "data-description": "",
          class: normalizeClass(unref(er)(I.descriptionClass, C.value, (_t = I.classes) == null ? void 0 : _t.description, (_u2 = I.toast.classes) == null ? void 0 : _u2.description))
        }, [R.value ? (openBlock(), createBlock(resolveDynamicComponent(I.toast.description), normalizeProps(mergeProps({ key: 0 }, I.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(I.toast.description), 1)], 64))], 2)) : createCommentVNode("v-if", true)], 2),
        I.toast.cancel ? (openBlock(), createElementBlock("button", {
          key: 1,
          style: normalizeStyle(I.toast.cancelButtonStyle || I.cancelButtonStyle),
          class: normalizeClass(unref(er)((_v2 = I.classes) == null ? void 0 : _v2.cancelButton, (_w2 = I.toast.classes) == null ? void 0 : _w2.cancelButton)),
          "data-button": "",
          "data-cancel": "",
          onClick: xt[0] || (xt[0] = (lt) => {
            var _a4, _b3;
            unref(os)(I.toast.cancel) && w.value && ((_b3 = (_a4 = I.toast.cancel).onClick) == null ? void 0 : _b3.call(_a4, lt), U());
          })
        }, toDisplayString(unref(os)(I.toast.cancel) ? (_x2 = I.toast.cancel) == null ? void 0 : _x2.label : I.toast.cancel), 7)) : createCommentVNode("v-if", true),
        I.toast.action ? (openBlock(), createElementBlock("button", {
          key: 2,
          style: normalizeStyle(I.toast.actionButtonStyle || I.actionButtonStyle),
          class: normalizeClass(unref(er)((_y2 = I.classes) == null ? void 0 : _y2.actionButton, (_z = I.toast.classes) == null ? void 0 : _z.actionButton)),
          "data-button": "",
          "data-action": "",
          onClick: xt[1] || (xt[1] = (lt) => {
            var _a4, _b3;
            unref(os)(I.toast.action) && ((_b3 = (_a4 = I.toast.action).onClick) == null ? void 0 : _b3.call(_a4, lt), !lt.defaultPrevented && U());
          })
        }, toDisplayString(unref(os)(I.toast.action) ? (_A2 = I.toast.action) == null ? void 0 : _A2.label : I.toast.action), 7)) : createCommentVNode("v-if", true)
      ], 64))], 46, s$);
    };
  }
});
var l$ = o$;
var zn = (e11, t) => {
  const r = e11.__vccOpts || e11;
  for (const [i, n] of t) r[i] = n;
  return r;
};
var c$ = {};
var h$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stoke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function u$(e11, t) {
  return openBlock(), createElementBlock("svg", h$, t[0] || (t[0] = [createBaseVNode("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }, null, -1), createBaseVNode("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }, null, -1)]));
}
var f$ = zn(c$, [["render", u$]]);
var d$ = ["data-visible"];
var p$ = { class: "sonner-spinner" };
var g$ = defineComponent({
  __name: "Loader",
  props: { visible: { type: Boolean } },
  setup(e11) {
    const t = Array(12).fill(0);
    return (r, i) => (openBlock(), createElementBlock("div", {
      class: "sonner-loading-wrapper",
      "data-visible": r.visible
    }, [createBaseVNode("div", p$, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(t), (n) => (openBlock(), createElementBlock("div", {
      key: `spinner-bar-${n}`,
      class: "sonner-loading-bar"
    }))), 128))])], 8, d$));
  }
});
var m$ = g$;
var y$ = {};
var x$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function b$(e11, t) {
  return openBlock(), createElementBlock("svg", x$, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var w$ = zn(y$, [["render", b$]]);
var v$ = {};
var C$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function k$(e11, t) {
  return openBlock(), createElementBlock("svg", C$, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var _$ = zn(v$, [["render", k$]]);
var S$ = {};
var T$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function B$(e11, t) {
  return openBlock(), createElementBlock("svg", T$, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var L$ = zn(S$, [["render", B$]]);
var A$ = {};
var E$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function M$(e11, t) {
  return openBlock(), createElementBlock("svg", E$, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var $$ = zn(A$, [["render", M$]]);
var F$ = ["aria-label"];
var O$ = [
  "data-sonner-theme",
  "dir",
  "data-theme",
  "data-rich-colors",
  "data-y-position",
  "data-x-position",
  "data-lifted"
];
var D$ = typeof window < "u" && typeof document < "u";
function I$() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e11 = document.documentElement.getAttribute("dir");
  return e11 === "auto" || !e11 ? window.getComputedStyle(document.documentElement).direction : e11;
}
var R$ = defineComponent({
  name: "Toaster",
  inheritAttrs: false,
  __name: "Toaster",
  props: {
    invert: {
      type: Boolean,
      default: false
    },
    theme: { default: "light" },
    position: { default: "bottom-right" },
    hotkey: { default: () => ["altKey", "KeyT"] },
    richColors: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    },
    duration: {},
    gap: { default: t$ },
    visibleToasts: { default: QM },
    closeButton: {
      type: Boolean,
      default: false
    },
    toastOptions: { default: () => ({}) },
    class: { default: "" },
    style: {},
    offset: { default: R0 },
    mobileOffset: { default: P0 },
    dir: { default: "auto" },
    swipeDirections: {},
    icons: {},
    containerAriaLabel: { default: "Notifications" }
  },
  setup(e11) {
    const t = e11, r = useAttrs(), i = ref([]);
    function n(k, E) {
      return i.value.filter((L) => !L.position && E === 0 || L.position === k);
    }
    const s = computed(() => {
      const k = i.value.filter((E) => E.position).map((E) => E.position);
      return k.length > 0 ? Array.from(new Set([t.position].concat(k))) : [t.position];
    }), o = computed(() => {
      const k = {};
      return s.value.forEach((E) => {
        k[E] = i.value.filter((L) => L.position === E);
      }), k;
    }), a = ref([]), l = ref(false), c = ref(false), h3 = ref(t.theme !== "system" ? t.theme : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), u = ref(null), f = ref(null), d = ref(false), p = t.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    function m(k) {
      var _a3;
      ((_a3 = i.value.find((E) => E.id === k.id)) == null ? void 0 : _a3.delete) || re.dismiss(k.id), i.value = i.value.filter(({ id: E }) => E !== k.id), setTimeout(() => {
        i.value.find((E) => E.id === k.id) || (a.value = a.value.filter((E) => E.toastId !== k.id));
      }, N0 + 50);
    }
    function y(k) {
      var _a3, _b2;
      d.value && !((_b2 = (_a3 = k.currentTarget) == null ? void 0 : _a3.contains) == null ? void 0 : _b2.call(_a3, k.relatedTarget)) && (d.value = false, f.value && (f.value.focus({ preventScroll: true }), f.value = null));
    }
    function b(k) {
      k.target instanceof HTMLElement && k.target.dataset.dismissible === "false" || d.value || (d.value = true, f.value = k.relatedTarget);
    }
    function x(k) {
      k.target && k.target instanceof HTMLElement && k.target.dataset.dismissible === "false" || (c.value = true);
    }
    watchEffect((k) => {
      const E = re.subscribe((L) => {
        if (L.dismiss) {
          requestAnimationFrame(() => {
            i.value = i.value.map((D) => D.id === L.id ? {
              ...D,
              delete: true
            } : D);
          });
          return;
        }
        nextTick(() => {
          const D = i.value.findIndex((F) => F.id === L.id);
          D !== -1 ? i.value = [
            ...i.value.slice(0, D),
            {
              ...i.value[D],
              ...L
            },
            ...i.value.slice(D + 1)
          ] : i.value = [L, ...i.value];
        });
      });
      k(E);
    }), watchEffect((k) => {
      if (typeof window > "u") return;
      if (t.theme !== "system") {
        h3.value = t.theme;
        return;
      }
      const E = window.matchMedia("(prefers-color-scheme: dark)"), L = (F) => {
        h3.value = F ? "dark" : "light";
      };
      L(E.matches);
      const D = (F) => {
        L(F.matches);
      };
      try {
        E.addEventListener("change", D);
      } catch {
        E.addListener(D);
      }
      k(() => {
        try {
          E.removeEventListener("change", D);
        } catch {
          E.removeListener(D);
        }
      });
    }), watchEffect(() => {
      u.value && f.value && (f.value.focus({ preventScroll: true }), f.value = null, d.value = false);
    }), watchEffect(() => {
      i.value.length <= 1 && (l.value = false);
    }), watchEffect((k) => {
      function E(L) {
        const D = t.hotkey.every(($) => L[$] || L.code === $), F = Array.isArray(u.value) ? u.value[0] : u.value;
        D && (l.value = true, F == null ? void 0 : F.focus());
        const M = document.activeElement === u.value || (F == null ? void 0 : F.contains(document.activeElement));
        L.code === "Escape" && M && (l.value = false);
      }
      D$ && (document.addEventListener("keydown", E), k(() => {
        document.removeEventListener("keydown", E);
      }));
    });
    function w() {
      l.value = true;
    }
    function v() {
      c.value || (l.value = false);
    }
    function C() {
      l.value = false;
    }
    function S() {
      c.value = false;
    }
    function T(k) {
      a.value = k;
    }
    function O(k) {
      const E = a.value.findIndex((L) => L.toastId === k.toastId);
      if (E !== -1) a.value[E] = k;
      else {
        const L = a.value.findIndex((D) => D.position === k.position);
        L !== -1 ? a.value.splice(L, 0, k) : a.value.unshift(k);
      }
    }
    return (k, E) => (openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" Remove item from normal navigation flow, only available via hotkey "), createBaseVNode("section", {
      "aria-label": `${k.containerAriaLabel} ${unref(p)}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false"
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (L, D) => {
      var _a3;
      return openBlock(), createElementBlock("ol", mergeProps({
        key: L,
        ref_for: true,
        ref_key: "listRef",
        ref: u,
        "data-sonner-toaster": "",
        "data-sonner-theme": h3.value,
        class: t.class,
        dir: k.dir === "auto" ? I$() : k.dir,
        tabIndex: -1,
        "data-theme": k.theme,
        "data-rich-colors": k.richColors,
        "data-y-position": L.split("-")[0],
        "data-x-position": L.split("-")[1],
        "data-lifted": l.value && i.value.length > 1 && !k.expand,
        style: {
          "--front-toast-height": `${((_a3 = a.value[0]) == null ? void 0 : _a3.height) || 0}px`,
          "--width": `${unref(JM)}px`,
          "--gap": `${k.gap}px`,
          ...k.style,
          ...unref(r).style,
          ...unref(n$)(k.offset, k.mobileOffset)
        }
      }, k.$attrs, {
        onBlur: y,
        onFocus: b,
        onMouseenter: w,
        onMousemove: w,
        onMouseleave: v,
        onDragend: C,
        onPointerdown: x,
        onPointerup: S
      }), [(openBlock(true), createElementBlock(Fragment, null, renderList(n(L, D), (F, M) => {
        var _a4, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
        return openBlock(), createBlock(l$, {
          key: F.id,
          heights: a.value,
          icons: k.icons,
          index: M,
          toast: F,
          defaultRichColors: k.richColors,
          duration: ((_a4 = k.toastOptions) == null ? void 0 : _a4.duration) ?? k.duration,
          class: normalizeClass(((_b2 = k.toastOptions) == null ? void 0 : _b2.class) ?? ""),
          descriptionClass: (_c2 = k.toastOptions) == null ? void 0 : _c2.descriptionClass,
          invert: k.invert,
          visibleToasts: k.visibleToasts,
          closeButton: ((_d2 = k.toastOptions) == null ? void 0 : _d2.closeButton) ?? k.closeButton,
          interacting: c.value,
          position: L,
          style: normalizeStyle((_e2 = k.toastOptions) == null ? void 0 : _e2.style),
          unstyled: (_f2 = k.toastOptions) == null ? void 0 : _f2.unstyled,
          classes: (_g2 = k.toastOptions) == null ? void 0 : _g2.classes,
          cancelButtonStyle: (_h2 = k.toastOptions) == null ? void 0 : _h2.cancelButtonStyle,
          actionButtonStyle: (_i = k.toastOptions) == null ? void 0 : _i.actionButtonStyle,
          "close-button-aria-label": (_j = k.toastOptions) == null ? void 0 : _j.closeButtonAriaLabel,
          toasts: o.value[L],
          expandByDefault: k.expand,
          gap: k.gap,
          expanded: l.value,
          swipeDirections: t.swipeDirections,
          "onUpdate:heights": T,
          "onUpdate:height": O,
          onRemoveToast: m
        }, {
          "close-icon": withCtx(() => [renderSlot(k.$slots, "close-icon", {}, () => [createVNode(f$)])]),
          "loading-icon": withCtx(() => [renderSlot(k.$slots, "loading-icon", {}, () => [createVNode(m$, { visible: F.type === "loading" }, null, 8, ["visible"])])]),
          "success-icon": withCtx(() => [renderSlot(k.$slots, "success-icon", {}, () => [createVNode(w$)])]),
          "error-icon": withCtx(() => [renderSlot(k.$slots, "error-icon", {}, () => [createVNode($$)])]),
          "warning-icon": withCtx(() => [renderSlot(k.$slots, "warning-icon", {}, () => [createVNode(L$)])]),
          "info-icon": withCtx(() => [renderSlot(k.$slots, "info-icon", {}, () => [createVNode(_$)])]),
          _: 2
        }, 1032, [
          "heights",
          "icons",
          "index",
          "toast",
          "defaultRichColors",
          "duration",
          "class",
          "descriptionClass",
          "invert",
          "visibleToasts",
          "closeButton",
          "interacting",
          "position",
          "style",
          "unstyled",
          "classes",
          "cancelButtonStyle",
          "actionButtonStyle",
          "close-button-aria-label",
          "toasts",
          "expandByDefault",
          "gap",
          "expanded",
          "swipeDirections"
        ]);
      }), 128))], 16, O$);
    }), 128))], 8, F$)], 2112));
  }
});
var P$ = R$;
var z0 = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var Wa = (e11, t, r, i = "") => {
  const n = e11.split(":");
  if (e11.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const a = n.pop(), l = n.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: a
    };
    return t && !Bs(c) ? null : c;
  }
  const s = n[0], o = s.split("-");
  if (o.length > 1) {
    const a = {
      provider: i,
      prefix: o.shift(),
      name: o.join("-")
    };
    return t && !Bs(a) ? null : a;
  }
  if (r && i === "") {
    const a = {
      provider: i,
      prefix: "",
      name: s
    };
    return t && !Bs(a, r) ? null : a;
  }
  return null;
};
var Bs = (e11, t) => e11 ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e11.prefix === "" || e11.prefix) && e11.name) : false;
var W0 = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var fa = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var qa = Object.freeze({
  ...W0,
  ...fa
});
var Al = Object.freeze({
  ...qa,
  body: "",
  hidden: false
});
function N$(e11, t) {
  const r = {};
  !e11.hFlip != !t.hFlip && (r.hFlip = true), !e11.vFlip != !t.vFlip && (r.vFlip = true);
  const i = ((e11.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Xu(e11, t) {
  const r = N$(e11, t);
  for (const i in Al)
    i in fa ? i in e11 && !(i in r) && (r[i] = fa[i]) : i in t ? r[i] = t[i] : i in e11 && (r[i] = e11[i]);
  return r;
}
function z$(e11, t) {
  const r = e11.icons, i = e11.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function s(o) {
    if (r[o])
      return n[o] = [];
    if (!(o in n)) {
      n[o] = null;
      const a = i[o] && i[o].parent, l = a && s(a);
      l && (n[o] = [a].concat(l));
    }
    return n[o];
  }
  return Object.keys(r).concat(Object.keys(i)).forEach(s), n;
}
function W$(e11, t, r) {
  const i = e11.icons, n = e11.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function o(a) {
    s = Xu(
      i[a] || n[a],
      s
    );
  }
  return o(t), r.forEach(o), Xu(e11, s);
}
function q0(e11, t) {
  const r = [];
  if (typeof e11 != "object" || typeof e11.icons != "object")
    return r;
  e11.not_found instanceof Array && e11.not_found.forEach((n) => {
    t(n, null), r.push(n);
  });
  const i = z$(e11);
  for (const n in i) {
    const s = i[n];
    s && (t(n, W$(e11, n, s)), r.push(n));
  }
  return r;
}
var q$ = {
  provider: "",
  aliases: {},
  not_found: {},
  ...W0
};
function So(e11, t) {
  for (const r in t)
    if (r in e11 && typeof e11[r] != typeof t[r])
      return false;
  return true;
}
function H0(e11) {
  if (typeof e11 != "object" || e11 === null)
    return null;
  const t = e11;
  if (typeof t.prefix != "string" || !e11.icons || typeof e11.icons != "object" || !So(e11, q$))
    return null;
  const r = t.icons;
  for (const n in r) {
    const s = r[n];
    if (
      // Name cannot be empty
      !n || // Must have body
      typeof s.body != "string" || // Check other props
      !So(
        s,
        Al
      )
    )
      return null;
  }
  const i = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const n in i) {
    const s = i[n], o = s.parent;
    if (
      // Name cannot be empty
      !n || // Parent must be set and point to existing icon
      typeof o != "string" || !r[o] && !i[o] || // Check other props
      !So(
        s,
        Al
      )
    )
      return null;
  }
  return t;
}
var Ku = /* @__PURE__ */ Object.create(null);
function H$(e11, t) {
  return {
    provider: e11,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Ci(e11, t) {
  const r = Ku[e11] || (Ku[e11] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = H$(e11, t));
}
function j0(e11, t) {
  return H0(t) ? q0(t, (r, i) => {
    i ? e11.icons[r] = i : e11.missing.add(r);
  }) : [];
}
function j$(e11, t, r) {
  try {
    if (typeof r.body == "string")
      return e11.icons[t] = { ...r }, true;
  } catch {
  }
  return false;
}
var Tn = false;
function U0(e11) {
  return typeof e11 == "boolean" && (Tn = e11), Tn;
}
function U$(e11) {
  const t = typeof e11 == "string" ? Wa(e11, true, Tn) : e11;
  if (t) {
    const r = Ci(t.provider, t.prefix), i = t.name;
    return r.icons[i] || (r.missing.has(i) ? null : void 0);
  }
}
function Y$(e11, t) {
  const r = Wa(e11, true, Tn);
  if (!r)
    return false;
  const i = Ci(r.provider, r.prefix);
  return t ? j$(i, r.name, t) : (i.missing.add(r.name), true);
}
function G$(e11, t) {
  if (typeof e11 != "object")
    return false;
  if (typeof t != "string" && (t = e11.provider || ""), Tn && !t && !e11.prefix) {
    let n = false;
    return H0(e11) && (e11.prefix = "", q0(e11, (s, o) => {
      Y$(s, o) && (n = true);
    })), n;
  }
  const r = e11.prefix;
  if (!Bs({
    prefix: r,
    name: "a"
  }))
    return false;
  const i = Ci(t, r);
  return !!j0(i, e11);
}
var Y0 = Object.freeze({
  width: null,
  height: null
});
var G0 = Object.freeze({
  // Dimensions
  ...Y0,
  // Transformations
  ...fa
});
var V$ = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var X$ = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Zu(e11, t, r) {
  if (t === 1)
    return e11;
  if (r = r || 100, typeof e11 == "number")
    return Math.ceil(e11 * t * r) / r;
  if (typeof e11 != "string")
    return e11;
  const i = e11.split(V$);
  if (i === null || !i.length)
    return e11;
  const n = [];
  let s = i.shift(), o = X$.test(s);
  for (; ; ) {
    if (o) {
      const a = parseFloat(s);
      isNaN(a) ? n.push(s) : n.push(Math.ceil(a * t * r) / r);
    } else
      n.push(s);
    if (s = i.shift(), s === void 0)
      return n.join("");
    o = !o;
  }
}
function K$(e11, t = "defs") {
  let r = "";
  const i = e11.indexOf("<" + t);
  for (; i >= 0; ) {
    const n = e11.indexOf(">", i), s = e11.indexOf("</" + t);
    if (n === -1 || s === -1)
      break;
    const o = e11.indexOf(">", s);
    if (o === -1)
      break;
    r += e11.slice(n + 1, s).trim(), e11 = e11.slice(0, i).trim() + e11.slice(o + 1);
  }
  return {
    defs: r,
    content: e11
  };
}
function Z$(e11, t) {
  return e11 ? "<defs>" + e11 + "</defs>" + t : t;
}
function Q$(e11, t, r) {
  const i = K$(e11);
  return Z$(i.defs, t + i.content + r);
}
var J$ = (e11) => e11 === "unset" || e11 === "undefined" || e11 === "none";
function tF(e11, t) {
  const r = {
    ...qa,
    ...e11
  }, i = {
    ...G0,
    ...t
  }, n = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let s = r.body;
  [r, i].forEach((m) => {
    const y = [], b = m.hFlip, x = m.vFlip;
    let w = m.rotate;
    b ? x ? w += 2 : (y.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), y.push("scale(-1 1)"), n.top = n.left = 0) : x && (y.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), y.push("scale(1 -1)"), n.top = n.left = 0);
    let v;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        v = n.height / 2 + n.top, y.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        v = n.width / 2 + n.left, y.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (n.left !== n.top && (v = n.left, n.left = n.top, n.top = v), n.width !== n.height && (v = n.width, n.width = n.height, n.height = v)), y.length && (s = Q$(
      s,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const o = i.width, a = i.height, l = n.width, c = n.height;
  let h3, u;
  o === null ? (u = a === null ? "1em" : a === "auto" ? c : a, h3 = Zu(u, l / c)) : (h3 = o === "auto" ? l : o, u = a === null ? Zu(h3, c / l) : a === "auto" ? c : a);
  const f = {}, d = (m, y) => {
    J$(y) || (f[m] = y.toString());
  };
  d("width", h3), d("height", u);
  const p = [n.left, n.top, l, c];
  return f.viewBox = p.join(" "), {
    attributes: f,
    viewBox: p,
    body: s
  };
}
var eF = /\sid="(\S+)"/g;
var rF = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var iF = 0;
function nF(e11, t = rF) {
  const r = [];
  let i;
  for (; i = eF.exec(e11); )
    r.push(i[1]);
  if (!r.length)
    return e11;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((s) => {
    const o = typeof t == "function" ? t(s) : t + (iF++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e11 = e11.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + o + n + "$3"
    );
  }), e11 = e11.replace(new RegExp(n, "g"), ""), e11;
}
var El = /* @__PURE__ */ Object.create(null);
function sF(e11, t) {
  El[e11] = t;
}
function Ml(e11) {
  return El[e11] || El[""];
}
function Pc(e11) {
  let t;
  if (typeof e11.resources == "string")
    t = [e11.resources];
  else if (t = e11.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e11.path || "/",
    // URL length limit
    maxURL: e11.maxURL || 500,
    // Timeout before next host is used.
    rotate: e11.rotate || 750,
    // Timeout before failing query.
    timeout: e11.timeout || 5e3,
    // Randomise default API end point.
    random: e11.random === true,
    // Start index
    index: e11.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e11.dataAfterTimeout !== false
  };
}
var Nc = /* @__PURE__ */ Object.create(null);
var Zi = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var Ls = [];
for (; Zi.length > 0; )
  Zi.length === 1 || Math.random() > 0.5 ? Ls.push(Zi.shift()) : Ls.push(Zi.pop());
Nc[""] = Pc({
  resources: ["https://api.iconify.design"].concat(Ls)
});
function aF(e11, t) {
  const r = Pc(t);
  return r === null ? false : (Nc[e11] = r, true);
}
function zc(e11) {
  return Nc[e11];
}
var oF = () => {
  let e11;
  try {
    if (e11 = fetch, typeof e11 == "function")
      return e11;
  } catch {
  }
};
var Qu = oF();
function lF(e11, t) {
  const r = zc(e11);
  if (!r)
    return 0;
  let i;
  if (!r.maxURL)
    i = 0;
  else {
    let n = 0;
    r.resources.forEach((o) => {
      n = Math.max(n, o.length);
    });
    const s = t + ".json?icons=";
    i = r.maxURL - n - r.path.length - s.length;
  }
  return i;
}
function cF(e11) {
  return e11 === 404;
}
var hF = (e11, t, r) => {
  const i = [], n = lF(e11, t), s = "icons";
  let o = {
    type: s,
    provider: e11,
    prefix: t,
    icons: []
  }, a = 0;
  return r.forEach((l, c) => {
    a += l.length + 1, a >= n && c > 0 && (i.push(o), o = {
      type: s,
      provider: e11,
      prefix: t,
      icons: []
    }, a = l.length), o.icons.push(l);
  }), i.push(o), i;
};
function uF(e11) {
  if (typeof e11 == "string") {
    const t = zc(e11);
    if (t)
      return t.path;
  }
  return "/";
}
var fF = (e11, t, r) => {
  if (!Qu) {
    r("abort", 424);
    return;
  }
  let i = uF(t.provider);
  switch (t.type) {
    case "icons": {
      const s = t.prefix, a = t.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      i += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = t.uri;
      i += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let n = 503;
  Qu(e11 + i).then((s) => {
    const o = s.status;
    if (o !== 200) {
      setTimeout(() => {
        r(cF(o) ? "abort" : "next", o);
      });
      return;
    }
    return n = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? r("abort", s) : r("next", n);
      });
      return;
    }
    setTimeout(() => {
      r("success", s);
    });
  }).catch(() => {
    r("next", n);
  });
};
var dF = {
  prepare: hF,
  send: fF
};
function pF(e11) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e11.sort((n, s) => n.provider !== s.provider ? n.provider.localeCompare(s.provider) : n.prefix !== s.prefix ? n.prefix.localeCompare(s.prefix) : n.name.localeCompare(s.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e11.forEach((n) => {
    if (i.name === n.name && i.prefix === n.prefix && i.provider === n.provider)
      return;
    i = n;
    const s = n.provider, o = n.prefix, a = n.name, l = r[s] || (r[s] = /* @__PURE__ */ Object.create(null)), c = l[o] || (l[o] = Ci(s, o));
    let h3;
    a in c.icons ? h3 = t.loaded : o === "" || c.missing.has(a) ? h3 = t.missing : h3 = t.pending;
    const u = {
      provider: s,
      prefix: o,
      name: a
    };
    h3.push(u);
  }), t;
}
function V0(e11, t) {
  e11.forEach((r) => {
    const i = r.loaderCallbacks;
    i && (r.loaderCallbacks = i.filter((n) => n.id !== t));
  });
}
function gF(e11) {
  e11.pendingCallbacksFlag || (e11.pendingCallbacksFlag = true, setTimeout(() => {
    e11.pendingCallbacksFlag = false;
    const t = e11.loaderCallbacks ? e11.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = false;
    const i = e11.provider, n = e11.prefix;
    t.forEach((s) => {
      const o = s.icons, a = o.pending.length;
      o.pending = o.pending.filter((l) => {
        if (l.prefix !== n)
          return true;
        const c = l.name;
        if (e11.icons[c])
          o.loaded.push({
            provider: i,
            prefix: n,
            name: c
          });
        else if (e11.missing.has(c))
          o.missing.push({
            provider: i,
            prefix: n,
            name: c
          });
        else
          return r = true, true;
        return false;
      }), o.pending.length !== a && (r || V0([e11], s.id), s.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        s.abort
      ));
    });
  }));
}
var mF = 0;
function yF(e11, t, r) {
  const i = mF++, n = V0.bind(null, r, i);
  if (!t.pending.length)
    return n;
  const s = {
    id: i,
    icons: t,
    callback: e11,
    abort: n
  };
  return r.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(s);
  }), n;
}
function xF(e11, t = true, r = false) {
  const i = [];
  return e11.forEach((n) => {
    const s = typeof n == "string" ? Wa(n, t, r) : n;
    s && i.push(s);
  }), i;
}
var bF = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function wF(e11, t, r, i) {
  const n = e11.resources.length, s = e11.random ? Math.floor(Math.random() * n) : e11.index;
  let o;
  if (e11.random) {
    let S = e11.resources.slice(0);
    for (o = []; S.length > 1; ) {
      const T = Math.floor(Math.random() * S.length);
      o.push(S[T]), S = S.slice(0, T).concat(S.slice(T + 1));
    }
    o = o.concat(S);
  } else
    o = e11.resources.slice(s).concat(e11.resources.slice(0, s));
  const a = Date.now();
  let l = "pending", c = 0, h3, u = null, f = [], d = [];
  typeof i == "function" && d.push(i);
  function p() {
    u && (clearTimeout(u), u = null);
  }
  function m() {
    l === "pending" && (l = "aborted"), p(), f.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), f = [];
  }
  function y(S, T) {
    T && (d = []), typeof S == "function" && d.push(S);
  }
  function b() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: c,
      queriesPending: f.length,
      subscribe: y,
      abort: m
    };
  }
  function x() {
    l = "failed", d.forEach((S) => {
      S(void 0, h3);
    });
  }
  function w() {
    f.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), f = [];
  }
  function v(S, T, O) {
    const k = T !== "success";
    switch (f = f.filter((E) => E !== S), l) {
      case "pending":
        break;
      case "failed":
        if (k || !e11.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (T === "abort") {
      h3 = O, x();
      return;
    }
    if (k) {
      h3 = O, f.length || (o.length ? C() : x());
      return;
    }
    if (p(), w(), !e11.random) {
      const E = e11.resources.indexOf(S.resource);
      E !== -1 && E !== e11.index && (e11.index = E);
    }
    l = "completed", d.forEach((E) => {
      E(O);
    });
  }
  function C() {
    if (l !== "pending")
      return;
    p();
    const S = o.shift();
    if (S === void 0) {
      if (f.length) {
        u = setTimeout(() => {
          p(), l === "pending" && (w(), x());
        }, e11.timeout);
        return;
      }
      x();
      return;
    }
    const T = {
      status: "pending",
      resource: S,
      callback: (O, k) => {
        v(T, O, k);
      }
    };
    f.push(T), c++, u = setTimeout(C, e11.rotate), r(S, t, T.callback);
  }
  return setTimeout(C), b;
}
function X0(e11) {
  const t = {
    ...bF,
    ...e11
  };
  let r = [];
  function i() {
    r = r.filter((a) => a().status === "pending");
  }
  function n(a, l, c) {
    const h3 = wF(
      t,
      a,
      l,
      (u, f) => {
        i(), c && c(u, f);
      }
    );
    return r.push(h3), h3;
  }
  function s(a) {
    return r.find((l) => a(l)) || null;
  }
  return {
    query: n,
    find: s,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: i
  };
}
function Ju() {
}
var To = /* @__PURE__ */ Object.create(null);
function vF(e11) {
  if (!To[e11]) {
    const t = zc(e11);
    if (!t)
      return;
    const r = X0(t), i = {
      config: t,
      redundancy: r
    };
    To[e11] = i;
  }
  return To[e11];
}
function CF(e11, t, r) {
  let i, n;
  if (typeof e11 == "string") {
    const s = Ml(e11);
    if (!s)
      return r(void 0, 424), Ju;
    n = s.send;
    const o = vF(e11);
    o && (i = o.redundancy);
  } else {
    const s = Pc(e11);
    if (s) {
      i = X0(s);
      const o = e11.resources ? e11.resources[0] : "", a = Ml(o);
      a && (n = a.send);
    }
  }
  return !i || !n ? (r(void 0, 424), Ju) : i.query(t, n, r)().abort;
}
function tf() {
}
function kF(e11) {
  e11.iconsLoaderFlag || (e11.iconsLoaderFlag = true, setTimeout(() => {
    e11.iconsLoaderFlag = false, gF(e11);
  }));
}
function _F(e11) {
  const t = [], r = [];
  return e11.forEach((i) => {
    (i.match(z0) ? t : r).push(i);
  }), {
    valid: t,
    invalid: r
  };
}
function Qi(e11, t, r) {
  function i() {
    const n = e11.pendingIcons;
    t.forEach((s) => {
      n && n.delete(s), e11.icons[s] || e11.missing.add(s);
    });
  }
  if (r && typeof r == "object")
    try {
      if (!j0(e11, r).length) {
        i();
        return;
      }
    } catch (n) {
      console.error(n);
    }
  i(), kF(e11);
}
function ef(e11, t) {
  e11 instanceof Promise ? e11.then((r) => {
    t(r);
  }).catch(() => {
    t(null);
  }) : t(e11);
}
function SF(e11, t) {
  e11.iconsToLoad ? e11.iconsToLoad = e11.iconsToLoad.concat(t).sort() : e11.iconsToLoad = t, e11.iconsQueueFlag || (e11.iconsQueueFlag = true, setTimeout(() => {
    e11.iconsQueueFlag = false;
    const { provider: r, prefix: i } = e11, n = e11.iconsToLoad;
    if (delete e11.iconsToLoad, !n || !n.length)
      return;
    const s = e11.loadIcon;
    if (e11.loadIcons && (n.length > 1 || !s)) {
      ef(
        e11.loadIcons(n, i, r),
        (h3) => {
          Qi(e11, n, h3);
        }
      );
      return;
    }
    if (s) {
      n.forEach((h3) => {
        const u = s(h3, i, r);
        ef(u, (f) => {
          const d = f ? {
            prefix: i,
            icons: {
              [h3]: f
            }
          } : null;
          Qi(e11, [h3], d);
        });
      });
      return;
    }
    const { valid: o, invalid: a } = _F(n);
    if (a.length && Qi(e11, a, null), !o.length)
      return;
    const l = i.match(z0) ? Ml(r) : null;
    if (!l) {
      Qi(e11, o, null);
      return;
    }
    l.prepare(r, i, o).forEach((h3) => {
      CF(r, h3, (u) => {
        Qi(e11, h3.icons, u);
      });
    });
  }));
}
var TF = (e11, t) => {
  const r = xF(e11, true, U0()), i = pF(r);
  if (!i.pending.length) {
    let l = true;
    return t && setTimeout(() => {
      l && t(
        i.loaded,
        i.missing,
        i.pending,
        tf
      );
    }), () => {
      l = false;
    };
  }
  const n = /* @__PURE__ */ Object.create(null), s = [];
  let o, a;
  return i.pending.forEach((l) => {
    const { provider: c, prefix: h3 } = l;
    if (h3 === a && c === o)
      return;
    o = c, a = h3, s.push(Ci(c, h3));
    const u = n[c] || (n[c] = /* @__PURE__ */ Object.create(null));
    u[h3] || (u[h3] = []);
  }), i.pending.forEach((l) => {
    const { provider: c, prefix: h3, name: u } = l, f = Ci(c, h3), d = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    d.has(u) || (d.add(u), n[c][h3].push(u));
  }), s.forEach((l) => {
    const c = n[l.provider][l.prefix];
    c.length && SF(l, c);
  }), t ? yF(t, i, s) : tf;
};
function BF(e11, t) {
  const r = {
    ...e11
  };
  for (const i in t) {
    const n = t[i], s = typeof n;
    i in Y0 ? (n === null || n && (s === "string" || s === "number")) && (r[i] = n) : s === typeof r[i] && (r[i] = i === "rotate" ? n % 4 : n);
  }
  return r;
}
var LF = /[\s,]+/;
function AF(e11, t) {
  t.split(LF).forEach((r) => {
    switch (r.trim()) {
      case "horizontal":
        e11.hFlip = true;
        break;
      case "vertical":
        e11.vFlip = true;
        break;
    }
  });
}
function EF(e11, t = 0) {
  const r = e11.replace(/^-?[0-9.]*/, "");
  function i(n) {
    for (; n < 0; )
      n += 4;
    return n % 4;
  }
  if (r === "") {
    const n = parseInt(e11);
    return isNaN(n) ? 0 : i(n);
  } else if (r !== e11) {
    let n = 0;
    switch (r) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let s = parseFloat(e11.slice(0, e11.length - r.length));
      return isNaN(s) ? 0 : (s = s / n, s % 1 === 0 ? i(s) : 0);
    }
  }
  return t;
}
function MF(e11, t) {
  let r = e11.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e11 + "</svg>";
}
function $F(e11) {
  return e11.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function FF(e11) {
  return "data:image/svg+xml," + $F(e11);
}
function OF(e11) {
  return 'url("' + FF(e11) + '")';
}
var rf = {
  ...G0,
  inline: false
};
var DF = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  role: "img"
};
var IF = {
  display: "inline-block"
};
var $l = {
  backgroundColor: "currentColor"
};
var K0 = {
  backgroundColor: "transparent"
};
var nf = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
var sf = {
  webkitMask: $l,
  mask: $l,
  background: K0
};
for (const e11 in sf) {
  const t = sf[e11];
  for (const r in nf)
    t[e11 + r] = nf[r];
}
var As = {};
["horizontal", "vertical"].forEach((e11) => {
  const t = e11.slice(0, 1) + "Flip";
  As[e11 + "-flip"] = t, As[e11.slice(0, 1) + "-flip"] = t, As[e11 + "Flip"] = t;
});
function af(e11) {
  return e11 + (e11.match(/^[-0-9.]+$/) ? "px" : "");
}
var of = (e11, t) => {
  const r = BF(rf, t), i = { ...DF }, n = t.mode || "svg", s = {}, o = t.style, a = typeof o == "object" && !(o instanceof Array) ? o : {};
  for (let m in t) {
    const y = t[m];
    if (y !== void 0)
      switch (m) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          r[m] = y === true || y === "true" || y === 1;
          break;
        case "flip":
          typeof y == "string" && AF(r, y);
          break;
        case "color":
          s.color = y;
          break;
        case "rotate":
          typeof y == "string" ? r[m] = EF(y) : typeof y == "number" && (r[m] = y);
          break;
        case "ariaHidden":
        case "aria-hidden":
          y !== true && y !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const b = As[m];
          b ? (y === true || y === "true" || y === 1) && (r[b] = true) : rf[m] === void 0 && (i[m] = y);
        }
      }
  }
  const l = tF(e11, r), c = l.attributes;
  if (r.inline && (s.verticalAlign = "-0.125em"), n === "svg") {
    i.style = {
      ...s,
      ...a
    }, Object.assign(i, c);
    let m = 0, y = t.id;
    return typeof y == "string" && (y = y.replace(/-/g, "_")), i.innerHTML = nF(l.body, y ? () => y + "ID" + m++ : "iconifyVue"), h("svg", i);
  }
  const { body: h3, width: u, height: f } = e11, d = n === "mask" || (n === "bg" ? false : h3.indexOf("currentColor") !== -1), p = MF(h3, {
    ...c,
    width: u + "",
    height: f + ""
  });
  return i.style = {
    ...s,
    "--svg": OF(p),
    width: af(c.width),
    height: af(c.height),
    ...IF,
    ...d ? $l : K0,
    ...a
  }, h("span", i);
};
U0(true);
sF("", dF);
if (typeof document < "u" && typeof window < "u") {
  const e11 = window;
  if (e11.IconifyPreload !== void 0) {
    const t = e11.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((i) => {
      try {
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !G$(i)) && console.error(r);
      } catch {
        console.error(r);
      }
    });
  }
  if (e11.IconifyProviders !== void 0) {
    const t = e11.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let r in t) {
        const i = "IconifyProviders[" + r + "] is invalid.";
        try {
          const n = t[r];
          if (typeof n != "object" || !n || n.resources === void 0)
            continue;
          aF(r, n) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
var RF = {
  ...qa,
  body: ""
};
var Xr = defineComponent((e11, { emit: t }) => {
  const r = ref(null);
  function i() {
    var _a3, _b2;
    r.value && ((_b2 = (_a3 = r.value).abort) == null ? void 0 : _b2.call(_a3), r.value = null);
  }
  const n = ref(!!e11.ssr), s = ref(""), o = shallowRef(null);
  function a() {
    const c = e11.icon;
    if (typeof c == "object" && c !== null && typeof c.body == "string")
      return s.value = "", {
        data: c
      };
    let h3;
    if (typeof c != "string" || (h3 = Wa(c, false, true)) === null)
      return null;
    let u = U$(h3);
    if (!u) {
      const p = r.value;
      return (!p || p.name !== c) && (u === null ? r.value = {
        name: c
      } : r.value = {
        name: c,
        abort: TF([h3], l)
      }), null;
    }
    i(), s.value !== c && (s.value = c, nextTick(() => {
      t("load", c);
    }));
    const f = e11.customise;
    if (f) {
      u = Object.assign({}, u);
      const p = f(u.body, h3.name, h3.prefix, h3.provider);
      typeof p == "string" && (u.body = p);
    }
    const d = ["iconify"];
    return h3.prefix !== "" && d.push("iconify--" + h3.prefix), h3.provider !== "" && d.push("iconify--" + h3.provider), { data: u, classes: d };
  }
  function l() {
    var _a3;
    const c = a();
    c ? c.data !== ((_a3 = o.value) == null ? void 0 : _a3.data) && (o.value = c) : o.value = null;
  }
  return n.value ? l() : onMounted(() => {
    n.value = true, l();
  }), watch(() => e11.icon, l), onUnmounted(i), () => {
    const c = o.value;
    if (!c)
      return of(RF, e11);
    let h3 = e11;
    return c.classes && (h3 = {
      ...e11,
      class: c.classes.join(" ")
    }), of({
      ...qa,
      ...c.data
    }, h3);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
});
var PF = { class: "mermaid-container" };
var NF = ["innerHTML"];
var zF = { class: "mermaid-toolbar" };
var WF = ["onClick"];
var qF = defineComponent({
  __name: "MermaidChart",
  props: {
    code: { default: "" },
    showToolbar: { default: "0" }
  },
  setup(e11) {
    useCssVars((x) => ({
      "378117fc": f.value
    }));
    const t = e11, r = computed(() => decodeURIComponent(t.code)), i = ref(), n = ref(), s = ref({ x: 0, y: 0 }), o = ref({ x: 0, y: 0 }), a = ref(false);
    function l() {
      var _a3;
      const x = (_a3 = n.value) == null ? void 0 : _a3.querySelector("svg");
      x && (x.style.transform = `translate(${s.value.x}px, ${s.value.y}px) scale(${f.value})`);
    }
    function c(x) {
      a.value = true, o.value = { x: x.clientX, y: x.clientY }, document.body.style.userSelect = "none";
      const { x: w, y: v } = s.value;
      function C(T) {
        if (!a.value) return;
        const O = T.clientX - o.value.x, k = T.clientY - o.value.y;
        s.value = { x: w + O, y: v + k }, l();
      }
      function S() {
        a.value = false, document.body.style.userSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", S);
      }
      window.addEventListener("mousemove", C), window.addEventListener("mouseup", S);
    }
    async function h3() {
      if (!n.value) return;
      n.value.innerHTML = "", await Wu.initialize({
        startOnLoad: false,
        theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
        securityLevel: "loose"
        // 允许点击交互
      });
      const x = Math.random().toString(36).substring(2, 15), { svg: w } = await Wu.render(
        `mermaid-${x}`,
        r.value,
        n.value
      );
      i.value = w, nextTick(() => {
        var _a3;
        const v = (_a3 = n.value) == null ? void 0 : _a3.querySelector("svg");
        v && (v.style.cursor = "grab", v.onmousedown = c, l());
      });
    }
    async function u() {
      if (n.value)
        try {
          const x = await It(n.value, {
            scale: 2,
            quality: 1,
            backgroundColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--vp-c-bg-soft")
          });
          console.log("result:", x), await x.download({ format: "png", filename: "mermaid-chart" }), as.success("图表下载成功！");
        } catch (x) {
          console.error("下载失败:", x), as.error("下载失败，请重试");
        }
    }
    const f = ref(1);
    function d() {
      f.value *= 1.1, l();
    }
    function p() {
      f.value /= 1.1, l();
    }
    function m() {
      f.value = 1, s.value = { x: 0, y: 0 }, l();
    }
    async function y() {
      if (r.value)
        try {
          oM(r.value), as.success("代码复制成功！");
        } catch (x) {
          console.error("复制失败:", x), as.error("复制失败，请重试");
        }
    }
    RM(
      n,
      async () => {
        await h3(), m();
      },
      {
        attributes: true,
        // 监听属性
        attributeFilter: ["class"]
        // 只关心这几个
      }
    );
    const b = ref();
    return onMounted(() => {
      h3(), typeof window < "u" && window.MutationObserver && (b.value = new MutationObserver((x) => {
        for (const w of x)
          if (w.attributeName === "class" && w.target === document.documentElement) {
            h3();
            break;
          }
      }), b.value.observe(document.documentElement, {
        attributes: true
      })), typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        h3();
      }), typeof window < "u" && window.addEventListener("resize", () => {
        m();
      });
    }), (x, w) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", PF, [
        createVNode(unref(qM), null, {
          default: withCtx(({ toggle: v, isFullscreen: C }) => [
            createBaseVNode("div", {
              ref_key: "mermaidRef",
              ref: n,
              class: normalizeClass(["mermaid", C && "mermaid-fullscreen"]),
              innerHTML: i.value
            }, null, 10, NF),
            withDirectives(createBaseVNode("div", zF, [
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "放大",
                onClick: d
              }, [
                createVNode(unref(Xr), { icon: "lucide:zoom-in" })
              ]),
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "缩小",
                onClick: p
              }, [
                createVNode(unref(Xr), { icon: "lucide:zoom-out" })
              ]),
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "适应屏幕",
                onClick: m
              }, [
                createVNode(unref(Xr), { icon: "lucide:maximize-2" })
              ]),
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "复制代码",
                onClick: y
              }, [
                createVNode(unref(Xr), { icon: "lucide:copy" })
              ]),
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "下载图表",
                onClick: u
              }, [
                createVNode(unref(Xr), { icon: "lucide:download" })
              ]),
              createBaseVNode("button", {
                class: "toolbar-btn",
                title: "全屏",
                onClick: v
              }, [
                createVNode(unref(Xr), {
                  icon: C ? "lucide:minimize-2" : "lucide:maximize"
                }, null, 8, ["icon"])
              ], 8, WF)
            ], 512), [
              [vShow, Number(t.showToolbar) === 1]
            ])
          ]),
          _: 1
        })
      ]),
      createVNode(unref(P$), {
        position: "top-right",
        "rich-colors": ""
      })
    ], 64));
  }
});
var HF = (e11, t) => {
  const r = e11.__vccOpts || e11;
  for (const [i, n] of t)
    r[i] = n;
  return r;
};
var jF = HF(qF, [["__scopeId", "data-v-a54f082c"]]);
function b3(e11) {
  e11.component("MermaidChart", jF);
}

export {
  yx,
  vx,
  at,
  Me,
  cn,
  Ln,
  H,
  et,
  g,
  Kx,
  N,
  zt,
  nb,
  Cf,
  oe,
  An,
  Er,
  Mf,
  Dt,
  bh,
  gi,
  YF,
  Dl,
  Ti,
  $f,
  Ab,
  Ff,
  Fb,
  Ob,
  Db,
  Ib,
  Rb,
  Pb,
  Nb,
  gt,
  GF,
  VF,
  Wb,
  X1,
  K1,
  Z1,
  Gl,
  gp,
  Z,
  rw,
  dt,
  Kl,
  Ap,
  $n,
  wn,
  Gv,
  ae,
  Zl,
  XF,
  $p,
  Ih,
  nr,
  t2,
  Gr,
  KF,
  ZF,
  QF,
  JF,
  t3,
  e3,
  r3,
  qh,
  ec,
  Hh,
  i3,
  n3,
  s3,
  wC,
  vC,
  _C,
  bs,
  Ks,
  Li,
  Ir,
  ac,
  Sa,
  fr,
  Fn,
  Ai,
  oc,
  Ik,
  Pk,
  Jh,
  Nk,
  zk,
  Wk,
  gg,
  La,
  jk,
  On,
  Qs,
  Js,
  yg,
  Aa,
  Xk,
  lc,
  E_,
  nu,
  cc,
  O_,
  D_,
  vg,
  W_,
  Cg,
  _g,
  X_,
  K_,
  rS,
  iS,
  nS,
  sS,
  aS,
  oS,
  Eg,
  gS,
  mS,
  bS,
  $g,
  Ke,
  Ea,
  gc,
  Ae,
  Nr,
  a3,
  BT,
  LT,
  In,
  ET,
  im,
  dr,
  K,
  eB,
  f3,
  wB,
  Ly,
  d3,
  p3,
  g3,
  m3,
  kB,
  _B,
  LB,
  YB,
  y3,
  x3,
  Lu,
  XB,
  mL,
  Cl,
  wr,
  Iu,
  b3
};
/*! Bundled license information:

vitepress-mermaid-preview/dist/component-D1GmXNq6.js:
  (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
  (*! Bundled license information:
  
  js-yaml/dist/js-yaml.mjs:
    (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-SCO4KOO5.js.map
