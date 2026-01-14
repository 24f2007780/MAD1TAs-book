import {
  nn
} from "./chunk-ZLWAXMUN.js";
import {
  h
} from "./chunk-63BY5VW5.js";
import {
  t
} from "./chunk-ZFYPC67F.js";
import "./chunk-6YTCN23N.js";
import {
  d
} from "./chunk-TWF5D5TU.js";
import {
  Sy
} from "./chunk-YIBNAT2Y.js";
import "./chunk-ZHTCZNWP.js";
import "./chunk-ZFVRZDKL.js";
import "./chunk-D5X4WG6P.js";
import {
  $f,
  Cf,
  Db,
  Fb,
  Ib,
  N,
  Nb,
  Ob,
  Pb,
  Rb,
  XB,
  Z,
  dt,
  g,
  gc,
  gp,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/diagram-VMROVX33-Bs6dsq6w.js
function Le(t3) {
  var a = 0, l = t3.children, n = l && l.length;
  if (!n) a = 1;
  else for (; --n >= 0; ) a += l[n].value;
  t3.value = a;
}
function $e() {
  return this.eachAfter(Le);
}
function Ae(t3, a) {
  let l = -1;
  for (const n of this)
    t3.call(a, n, ++l, this);
  return this;
}
function Fe(t3, a) {
  for (var l = this, n = [l], o, s, d2 = -1; l = n.pop(); )
    if (t3.call(a, l, ++d2, this), o = l.children)
      for (s = o.length - 1; s >= 0; --s)
        n.push(o[s]);
  return this;
}
function ke(t3, a) {
  for (var l = this, n = [l], o = [], s, d2, h2, g2 = -1; l = n.pop(); )
    if (o.push(l), s = l.children)
      for (d2 = 0, h2 = s.length; d2 < h2; ++d2)
        n.push(s[d2]);
  for (; l = o.pop(); )
    t3.call(a, l, ++g2, this);
  return this;
}
function Ne(t3, a) {
  let l = -1;
  for (const n of this)
    if (t3.call(a, n, ++l, this))
      return n;
}
function Me(t3) {
  return this.eachAfter(function(a) {
    for (var l = +t3(a.data) || 0, n = a.children, o = n && n.length; --o >= 0; ) l += n[o].value;
    a.value = l;
  });
}
function _e(t3) {
  return this.eachBefore(function(a) {
    a.children && a.children.sort(t3);
  });
}
function ze(t3) {
  for (var a = this, l = Ve(a, t3), n = [a]; a !== l; )
    a = a.parent, n.push(a);
  for (var o = n.length; t3 !== l; )
    n.splice(o, 0, t3), t3 = t3.parent;
  return n;
}
function Ve(t3, a) {
  if (t3 === a) return t3;
  var l = t3.ancestors(), n = a.ancestors(), o = null;
  for (t3 = l.pop(), a = n.pop(); t3 === a; )
    o = t3, t3 = l.pop(), a = n.pop();
  return o;
}
function De() {
  for (var t3 = this, a = [t3]; t3 = t3.parent; )
    a.push(t3);
  return a;
}
function Pe() {
  return Array.from(this);
}
function Be() {
  var t3 = [];
  return this.eachBefore(function(a) {
    a.children || t3.push(a);
  }), t3;
}
function Ee() {
  var t3 = this, a = [];
  return t3.each(function(l) {
    l !== t3 && a.push({ source: l.parent, target: l });
  }), a;
}
function* Re() {
  var t3 = this, a, l = [t3], n, o, s;
  do
    for (a = l.reverse(), l = []; t3 = a.pop(); )
      if (yield t3, n = t3.children)
        for (o = 0, s = n.length; o < s; ++o)
          l.push(n[o]);
  while (l.length);
}
function Q(t3, a) {
  t3 instanceof Map ? (t3 = [void 0, t3], a === void 0 && (a = Ie)) : a === void 0 && (a = He);
  for (var l = new Z2(t3), n, o = [l], s, d2, h2, g2; n = o.pop(); )
    if ((d2 = a(n.data)) && (g2 = (d2 = Array.from(d2)).length))
      for (n.children = d2, h2 = g2 - 1; h2 >= 0; --h2)
        o.push(s = d2[h2] = new Z2(d2[h2])), s.parent = n, s.depth = n.depth + 1;
  return l.eachBefore(qe);
}
function We() {
  return Q(this).eachBefore(Oe);
}
function He(t3) {
  return t3.children;
}
function Ie(t3) {
  return Array.isArray(t3) ? t3[1] : null;
}
function Oe(t3) {
  t3.data.value !== void 0 && (t3.value = t3.data.value), t3.data = t3.data.data;
}
function qe(t3) {
  var a = 0;
  do
    t3.height = a;
  while ((t3 = t3.parent) && t3.height < ++a);
}
function Z2(t3) {
  this.data = t3, this.depth = this.height = 0, this.parent = null;
}
Z2.prototype = Q.prototype = {
  constructor: Z2,
  count: $e,
  each: Ae,
  eachAfter: ke,
  eachBefore: Fe,
  find: Ne,
  sum: Me,
  sort: _e,
  path: ze,
  ancestors: De,
  descendants: Pe,
  leaves: Be,
  links: Ee,
  copy: We,
  [Symbol.iterator]: Re
};
function Ge(t3) {
  if (typeof t3 != "function") throw new Error();
  return t3;
}
function q() {
  return 0;
}
function G(t3) {
  return function() {
    return t3;
  };
}
function Xe(t3) {
  t3.x0 = Math.round(t3.x0), t3.y0 = Math.round(t3.y0), t3.x1 = Math.round(t3.x1), t3.y1 = Math.round(t3.y1);
}
function je(t3, a, l, n, o) {
  for (var s = t3.children, d2, h2 = -1, g2 = s.length, c = t3.value && (n - a) / t3.value; ++h2 < g2; )
    d2 = s[h2], d2.y0 = l, d2.y1 = o, d2.x0 = a, d2.x1 = a += d2.value * c;
}
function Ye(t3, a, l, n, o) {
  for (var s = t3.children, d2, h2 = -1, g2 = s.length, c = t3.value && (o - l) / t3.value; ++h2 < g2; )
    d2 = s[h2], d2.x0 = a, d2.x1 = n, d2.y0 = l, d2.y1 = l += d2.value * c;
}
var Ze = (1 + Math.sqrt(5)) / 2;
function Ue(t3, a, l, n, o, s) {
  for (var d2 = [], h2 = a.children, g2, c, u = 0, b = 0, r = h2.length, x, S, v = a.value, p, m, N2, k, V, R, M; u < r; ) {
    x = o - l, S = s - n;
    do
      p = h2[b++].value;
    while (!p && b < r);
    for (m = N2 = p, R = Math.max(S / x, x / S) / (v * t3), M = p * p * R, V = Math.max(N2 / M, M / m); b < r; ++b) {
      if (p += c = h2[b].value, c < m && (m = c), c > N2 && (N2 = c), M = p * p * R, k = Math.max(N2 / M, M / m), k > V) {
        p -= c;
        break;
      }
      V = k;
    }
    d2.push(g2 = { value: p, dice: x < S, children: h2.slice(u, b) }), g2.dice ? je(g2, l, n, o, v ? n += S * p / v : s) : Ye(g2, l, n, v ? l += x * p / v : o, s), v -= p, u = b;
  }
  return d2;
}
var Je = function t2(a) {
  function l(n, o, s, d2, h2) {
    Ue(a, n, o, s, d2, h2);
  }
  return l.ratio = function(n) {
    return t2((n = +n) > 1 ? n : 1);
  }, l;
}(Ze);
function Ke() {
  var t3 = Je, a = false, l = 1, n = 1, o = [0], s = q, d2 = q, h2 = q, g2 = q, c = q;
  function u(r) {
    return r.x0 = r.y0 = 0, r.x1 = l, r.y1 = n, r.eachBefore(b), o = [0], a && r.eachBefore(Xe), r;
  }
  function b(r) {
    var x = o[r.depth], S = r.x0 + x, v = r.y0 + x, p = r.x1 - x, m = r.y1 - x;
    p < S && (S = p = (S + p) / 2), m < v && (v = m = (v + m) / 2), r.x0 = S, r.y0 = v, r.x1 = p, r.y1 = m, r.children && (x = o[r.depth + 1] = s(r) / 2, S += c(r) - x, v += d2(r) - x, p -= h2(r) - x, m -= g2(r) - x, p < S && (S = p = (S + p) / 2), m < v && (v = m = (v + m) / 2), t3(r, S, v, p, m));
  }
  return u.round = function(r) {
    return arguments.length ? (a = !!r, u) : a;
  }, u.size = function(r) {
    return arguments.length ? (l = +r[0], n = +r[1], u) : [l, n];
  }, u.tile = function(r) {
    return arguments.length ? (t3 = Ge(r), u) : t3;
  }, u.padding = function(r) {
    return arguments.length ? u.paddingInner(r).paddingOuter(r) : u.paddingInner();
  }, u.paddingInner = function(r) {
    return arguments.length ? (s = typeof r == "function" ? r : G(+r), u) : s;
  }, u.paddingOuter = function(r) {
    return arguments.length ? u.paddingTop(r).paddingRight(r).paddingBottom(r).paddingLeft(r) : u.paddingTop();
  }, u.paddingTop = function(r) {
    return arguments.length ? (d2 = typeof r == "function" ? r : G(+r), u) : d2;
  }, u.paddingRight = function(r) {
    return arguments.length ? (h2 = typeof r == "function" ? r : G(+r), u) : h2;
  }, u.paddingBottom = function(r) {
    return arguments.length ? (g2 = typeof r == "function" ? r : G(+r), u) : g2;
  }, u.paddingLeft = function(r) {
    return arguments.length ? (c = typeof r == "function" ? r : G(+r), u) : c;
  }, u;
}
var E;
var ne = (E = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = Ob, this.getAccTitle = Db, this.setDiagramTitle = Pb, this.getDiagramTitle = Nb, this.getAccDescription = Rb, this.setAccDescription = Ib;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    const a = Cf, l = oe();
    return gc({
      ...a.treemap,
      ...l.treemap ?? {}
    });
  }
  addNode(a, l) {
    this.nodes.push(a), this.levels.set(a, l), l === 0 && (this.outerNodes.push(a), this.root ?? (this.root = a));
  }
  getRoot() {
    return { name: "", children: this.outerNodes };
  }
  addClass(a, l) {
    const n = this.classes.get(a) ?? { id: a, styles: [], textStyles: [] }, o = l.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    o && o.forEach((s) => {
      gp(s) && ((n == null ? void 0 : n.textStyles) ? n.textStyles.push(s) : n.textStyles = [s]), (n == null ? void 0 : n.styles) ? n.styles.push(s) : n.styles = [s];
    }), this.classes.set(a, n);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(a) {
    var _a;
    return ((_a = this.classes.get(a)) == null ? void 0 : _a.styles) ?? [];
  }
  clear() {
    Fb(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, g(E, "TreeMapDB"), E);
function le(t3) {
  if (!t3.length)
    return [];
  const a = [], l = [];
  return t3.forEach((n) => {
    const o = {
      name: n.name,
      children: n.type === "Leaf" ? void 0 : []
    };
    for (o.classSelector = n == null ? void 0 : n.classSelector, (n == null ? void 0 : n.cssCompiledStyles) && (o.cssCompiledStyles = [n.cssCompiledStyles]), n.type === "Leaf" && n.value !== void 0 && (o.value = n.value); l.length > 0 && l[l.length - 1].level >= n.level; )
      l.pop();
    if (l.length === 0)
      a.push(o);
    else {
      const s = l[l.length - 1].node;
      s.children ? s.children.push(o) : s.children = [o];
    }
    n.type !== "Leaf" && l.push({ node: o, level: n.level });
  }), a;
}
g(le, "buildHierarchy");
var Qe = g((t3, a) => {
  t(t3, a);
  const l = [];
  for (const s of t3.TreemapRows ?? [])
    s.$type === "ClassDefStatement" && a.addClass(s.className ?? "", s.styleText ?? "");
  for (const s of t3.TreemapRows ?? []) {
    const d2 = s.item;
    if (!d2)
      continue;
    const h2 = s.indent ? parseInt(s.indent) : 0, g2 = et(d2), c = d2.classSelector ? a.getStylesForClass(d2.classSelector) : [], u = c.length > 0 ? c.join(";") : void 0, b = {
      level: h2,
      name: g2,
      type: d2.$type,
      value: d2.value,
      classSelector: d2.classSelector,
      cssCompiledStyles: u
    };
    l.push(b);
  }
  const n = le(l), o = g((s, d2) => {
    for (const h2 of s)
      a.addNode(h2, d2), h2.children && h2.children.length > 0 && o(h2.children, d2 + 1);
  }, "addNodesRecursively");
  o(n, 0);
}, "populate");
var et = g((t3) => t3.name ? String(t3.name) : "", "getItemName");
var re = {
  // @ts-expect-error - TreeMapDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: g(async (t3) => {
    var _a;
    try {
      const l = await Sy("treemap", t3);
      N.debug("Treemap AST:", l);
      const n = (_a = re.parser) == null ? void 0 : _a.yy;
      if (!(n instanceof ne))
        throw new Error(
          "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
        );
      Qe(l, n);
    } catch (a) {
      throw N.error("Error parsing treemap:", a), a;
    }
  }, "parse")
};
var tt = 10;
var B = 10;
var X = 25;
var at = g((t3, a, l, n) => {
  const o = n.db, s = o.getConfig(), d2 = s.padding ?? tt, h2 = o.getDiagramTitle(), g2 = o.getRoot(), { themeVariables: c } = oe();
  if (!g2)
    return;
  const u = h2 ? 30 : 0, b = XB(a), r = s.nodeWidth ? s.nodeWidth * B : 960, x = s.nodeHeight ? s.nodeHeight * B : 500, S = r, v = x + u;
  b.attr("viewBox", `0 0 ${S} ${v}`), $f(b, v, S, s.useMaxWidth);
  let p;
  try {
    const e = s.valueFormat || ",";
    if (e === "$0,0")
      p = g((i) => "$" + nn(",")(i), "valueFormat");
    else if (e.startsWith("$") && e.includes(",")) {
      const i = /\.\d+/.exec(e), f = i ? i[0] : "";
      p = g((C) => "$" + nn("," + f)(C), "valueFormat");
    } else if (e.startsWith("$")) {
      const i = e.substring(1);
      p = g((f) => "$" + nn(i || "")(f), "valueFormat");
    } else
      p = nn(e);
  } catch (e) {
    N.error("Error creating format function:", e), p = nn(",");
  }
  const m = h().range([
    "transparent",
    c.cScale0,
    c.cScale1,
    c.cScale2,
    c.cScale3,
    c.cScale4,
    c.cScale5,
    c.cScale6,
    c.cScale7,
    c.cScale8,
    c.cScale9,
    c.cScale10,
    c.cScale11
  ]), N2 = h().range([
    "transparent",
    c.cScalePeer0,
    c.cScalePeer1,
    c.cScalePeer2,
    c.cScalePeer3,
    c.cScalePeer4,
    c.cScalePeer5,
    c.cScalePeer6,
    c.cScalePeer7,
    c.cScalePeer8,
    c.cScalePeer9,
    c.cScalePeer10,
    c.cScalePeer11
  ]), k = h().range([
    c.cScaleLabel0,
    c.cScaleLabel1,
    c.cScaleLabel2,
    c.cScaleLabel3,
    c.cScaleLabel4,
    c.cScaleLabel5,
    c.cScaleLabel6,
    c.cScaleLabel7,
    c.cScaleLabel8,
    c.cScaleLabel9,
    c.cScaleLabel10,
    c.cScaleLabel11
  ]);
  h2 && b.append("text").attr("x", S / 2).attr("y", u / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(h2);
  const V = b.append("g").attr("transform", `translate(0, ${u})`).attr("class", "treemapContainer"), R = Q(g2).sum((e) => e.value ?? 0).sort((e, i) => (i.value ?? 0) - (e.value ?? 0)), ee = Ke().size([r, x]).paddingTop(
    (e) => e.children && e.children.length > 0 ? X + B : 0
  ).paddingInner(d2).paddingLeft((e) => e.children && e.children.length > 0 ? B : 0).paddingRight((e) => e.children && e.children.length > 0 ? B : 0).paddingBottom((e) => e.children && e.children.length > 0 ? B : 0).round(true)(R), se = ee.descendants().filter((e) => e.children && e.children.length > 0), W = V.selectAll(".treemapSection").data(se).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", X).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), W.append("clipPath").attr("id", (e, i) => `clip-section-${a}-${i}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", X), W.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, i) => `treemapSection section${i}`).attr("fill", (e) => m(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", (e) => N2(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = Z({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i.nodeStyles + ";" + i.borderStyles.join(";");
  }), W.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", X / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = "dominant-baseline: middle; font-size: 12px; fill:" + k(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = Z({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).each(function(e) {
    if (e.depth === 0)
      return;
    const i = dt(this), f = e.data.name;
    i.text(f);
    const C = e.x1 - e.x0, $ = 6;
    let A;
    s.showValues !== false && e.value ? A = C - 10 - 30 - 10 - $ : A = C - $ - 6;
    const F = Math.max(15, A), y = i.node();
    if (y.getComputedTextLength() > F) {
      const T = "...";
      let L = f;
      for (; L.length > 0; ) {
        if (L = f.substring(0, L.length - 1), L.length === 0) {
          i.text(T), y.getComputedTextLength() > F && i.text("");
          break;
        }
        if (i.text(L + T), y.getComputedTextLength() <= F)
          break;
      }
    }
  }), s.showValues !== false && W.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", X / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? p(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const i = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + k(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = Z({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  });
  const ie = ee.leaves(), j = V.selectAll(".treemapLeafGroup").data(ie).enter().append("g").attr("class", (e, i) => `treemapNode treemapLeafGroup leaf${i}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  j.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("style", (e) => Z({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("stroke-width", 3), j.append("clipPath").attr("id", (e, i) => `clip-${a}-${i}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), j.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
    const i = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + k(e.data.name) + ";", f = Z({ cssCompiledStyles: e.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, i) => `url(#clip-${a}-${i})`).text((e) => e.data.name).each(function(e) {
    const i = dt(this), f = e.x1 - e.x0, C = e.y1 - e.y0, $ = i.node(), A = 4, D = f - 2 * A, F = C - 2 * A;
    if (D < 10 || F < 10) {
      i.style("display", "none");
      return;
    }
    let y = parseInt(i.style("font-size"), 10);
    const _ = 8, T = 28, L = 0.6, z = 6, H = 2;
    for (; $.getComputedTextLength() > D && y > _; )
      y--, i.style("font-size", `${y}px`);
    let I = Math.max(
      z,
      Math.min(T, Math.round(y * L))
    ), U = y + H + I;
    for (; U > F && y > _ && (y--, I = Math.max(
      z,
      Math.min(T, Math.round(y * L))
    ), !(I < z && y === _)); )
      i.style("font-size", `${y}px`), U = y + H + I;
    i.style("font-size", `${y}px`), ($.getComputedTextLength() > D || y < _ || F < y) && i.style("display", "none");
  }), s.showValues !== false && j.append("text").attr("class", "treemapValue").attr("x", (i) => (i.x1 - i.x0) / 2).attr("y", function(i) {
    return (i.y1 - i.y0) / 2;
  }).attr("style", (i) => {
    const f = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + k(i.data.name) + ";", C = Z({ cssCompiledStyles: i.data.cssCompiledStyles });
    return f + C.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (i, f) => `url(#clip-${a}-${f})`).text((i) => i.value ? p(i.value) : "").each(function(i) {
    const f = dt(this), C = this.parentNode;
    if (!C) {
      f.style("display", "none");
      return;
    }
    const $ = dt(C).select(".treemapLabel");
    if ($.empty() || $.style("display") === "none") {
      f.style("display", "none");
      return;
    }
    const A = parseFloat($.style("font-size")), D = 28, F = 0.6, y = 6, _ = 2, T = Math.max(
      y,
      Math.min(D, Math.round(A * F))
    );
    f.style("font-size", `${T}px`);
    const z = (i.y1 - i.y0) / 2 + A / 2 + _;
    f.attr("y", z);
    const H = i.x1 - i.x0, ce = i.y1 - i.y0 - 4, de = H - 2 * 4;
    f.node().getComputedTextLength() > de || z + T > ce || T < y ? f.style("display", "none") : f.style("display", null);
  });
  const oe2 = s.diagramPadding ?? 8;
  d(b, oe2, "flowchart", (s == null ? void 0 : s.useMaxWidth) || false);
}, "draw");
var nt = g(function(t3, a) {
  return a.db.getClasses();
}, "getClasses");
var lt = { draw: at, getClasses: nt };
var rt = {
  sectionStrokeColor: "black",
  sectionStrokeWidth: "1",
  sectionFillColor: "#efefef",
  leafStrokeColor: "black",
  leafStrokeWidth: "1",
  leafFillColor: "#efefef",
  labelColor: "black",
  labelFontSize: "12px",
  valueFontSize: "10px",
  valueColor: "black",
  titleColor: "black",
  titleFontSize: "14px"
};
var st = g(({
  treemap: t3
} = {}) => {
  const a = gc(rt, t3);
  return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
}, "getStyles");
var it = st;
var gt = {
  parser: re,
  get db() {
    return new ne();
  },
  renderer: lt,
  styles: it
};
export {
  gt as diagram
};
//# sourceMappingURL=diagram-VMROVX33-Bs6dsq6w-34DWUY4Y.js.map
