import {
  hn
} from "./chunk-LE2HILBM.js";
import {
  h
} from "./chunk-63BY5VW5.js";
import {
  t
} from "./chunk-ZFYPC67F.js";
import "./chunk-6YTCN23N.js";
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
  Ea,
  Fb,
  Gr,
  Ib,
  N,
  Nb,
  Ob,
  Pb,
  Rb,
  XB,
  g,
  gc,
  gt,
  i3,
  vC
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/pieDiagram-NIOCPIFQ-DyDaDu7Z.js
function st(t2, a) {
  return a < t2 ? -1 : a > t2 ? 1 : a >= t2 ? 0 : NaN;
}
function ot(t2) {
  return t2;
}
function lt() {
  var t2 = ot, a = st, h2 = null, s = Gr(0), p = Gr(i3), x = Gr(0);
  function i(e) {
    var r, l = (e = vC(e)).length, d, A, m = 0, c = new Array(l), n = new Array(l), v = +s.apply(this, arguments), w = Math.min(i3, Math.max(-i3, p.apply(this, arguments) - v)), f, T = Math.min(Math.abs(w) / l, x.apply(this, arguments)), $ = T * (w < 0 ? -1 : 1), g2;
    for (r = 0; r < l; ++r)
      (g2 = n[c[r] = r] = +t2(e[r], r, e)) > 0 && (m += g2);
    for (a != null ? c.sort(function(y, D) {
      return a(n[y], n[D]);
    }) : h2 != null && c.sort(function(y, D) {
      return h2(e[y], e[D]);
    }), r = 0, A = m ? (w - l * $) / m : 0; r < l; ++r, v = f)
      d = c[r], g2 = n[d], f = v + (g2 > 0 ? g2 * A : 0) + $, n[d] = {
        data: e[d],
        index: r,
        value: g2,
        startAngle: v,
        endAngle: f,
        padAngle: T
      };
    return n;
  }
  return i.value = function(e) {
    return arguments.length ? (t2 = typeof e == "function" ? e : Gr(+e), i) : t2;
  }, i.sortValues = function(e) {
    return arguments.length ? (a = e, h2 = null, i) : a;
  }, i.sort = function(e) {
    return arguments.length ? (h2 = e, a = null, i) : h2;
  }, i.startAngle = function(e) {
    return arguments.length ? (s = typeof e == "function" ? e : Gr(+e), i) : s;
  }, i.endAngle = function(e) {
    return arguments.length ? (p = typeof e == "function" ? e : Gr(+e), i) : p;
  }, i.padAngle = function(e) {
    return arguments.length ? (x = typeof e == "function" ? e : Gr(+e), i) : x;
  }, i;
}
var ct = Cf.pie;
var G = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
};
var b = G.sections;
var N2 = G.showData;
var ut = structuredClone(ct);
var pt = g(() => structuredClone(ut), "getConfig");
var dt = g(() => {
  b = /* @__PURE__ */ new Map(), N2 = G.showData, Fb();
}, "clear");
var gt2 = g(({ label: t2, value: a }) => {
  b.has(t2) || (b.set(t2, a), N.debug(`added new section: ${t2}, with value: ${a}`));
}, "addSection");
var ft = g(() => b, "getSections");
var ht = g((t2) => {
  N2 = t2;
}, "setShowData");
var mt = g(() => N2, "getShowData");
var R = {
  getConfig: pt,
  clear: dt,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  setAccTitle: Ob,
  getAccTitle: Db,
  setAccDescription: Ib,
  getAccDescription: Rb,
  addSection: gt2,
  getSections: ft,
  setShowData: ht,
  getShowData: mt
};
var vt = g((t2, a) => {
  t(t2, a), a.setShowData(t2.showData), t2.sections.map(a.addSection);
}, "populateDb");
var yt = {
  parse: g(async (t2) => {
    const a = await Sy("pie", t2);
    N.debug(a), vt(a, R);
  }, "parse")
};
var St = g((t2) => `
  .pieCircle{
    stroke: ${t2.pieStrokeColor};
    stroke-width : ${t2.pieStrokeWidth};
    opacity : ${t2.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t2.pieOuterStrokeColor};
    stroke-width: ${t2.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t2.pieTitleTextSize};
    fill: ${t2.pieTitleTextColor};
    font-family: ${t2.fontFamily};
  }
  .slice {
    font-family: ${t2.fontFamily};
    fill: ${t2.pieSectionTextColor};
    font-size:${t2.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t2.pieLegendTextColor};
    font-family: ${t2.fontFamily};
    font-size: ${t2.pieLegendTextSize};
  }
`, "getStyles");
var xt = St;
var At = g((t2) => {
  const a = [...t2.entries()].map((s) => ({
    label: s[0],
    value: s[1]
  })).sort((s, p) => p.value - s.value);
  return lt().value(
    (s) => s.value
  )(a);
}, "createPieArcs");
var wt = g((t2, a, h2, s) => {
  N.debug(`rendering pie chart
` + t2);
  const p = s.db, x = gt(), i = gc(p.getConfig(), x.pie), e = 40, r = 18, l = 4, d = 450, A = d, m = XB(a), c = m.append("g");
  c.attr("transform", "translate(" + A / 2 + "," + d / 2 + ")");
  const { themeVariables: n } = x;
  let [v] = Ea(n.pieOuterStrokeWidth);
  v ?? (v = 2);
  const w = i.textPosition, f = Math.min(A, d) / 2 - e, T = hn().innerRadius(0).outerRadius(f), $ = hn().innerRadius(f * w).outerRadius(f * w);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + v / 2).attr("class", "pieOuterCircle");
  const g2 = p.getSections(), y = At(g2), D = [
    n.pie1,
    n.pie2,
    n.pie3,
    n.pie4,
    n.pie5,
    n.pie6,
    n.pie7,
    n.pie8,
    n.pie9,
    n.pie10,
    n.pie11,
    n.pie12
  ], C = h(D);
  c.selectAll("mySlices").data(y).enter().append("path").attr("d", T).attr("fill", (o) => C(o.data.label)).attr("class", "pieCircle");
  let W = 0;
  g2.forEach((o) => {
    W += o;
  }), c.selectAll("mySlices").data(y).enter().append("text").text((o) => (o.data.value / W * 100).toFixed(0) + "%").attr("transform", (o) => "translate(" + $.centroid(o) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(p.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const M = c.selectAll(".legend").data(C.domain()).enter().append("g").attr("class", "legend").attr("transform", (o, k) => {
    const E = r + l, L = E * C.domain().length / 2, _ = 12 * r, B = k * E - L;
    return "translate(" + _ + "," + B + ")";
  });
  M.append("rect").attr("width", r).attr("height", r).style("fill", C).style("stroke", C), M.data(y).append("text").attr("x", r + l).attr("y", r - l).text((o) => {
    const { label: k, value: E } = o.data;
    return p.getShowData() ? `${k} [${E}]` : k;
  });
  const I = Math.max(
    ...M.selectAll("text").nodes().map((o) => (o == null ? void 0 : o.getBoundingClientRect().width) ?? 0)
  ), O = A + e + r + l + I;
  m.attr("viewBox", `0 0 ${O} ${d}`), $f(m, d, O, i.useMaxWidth);
}, "draw");
var Dt = { draw: wt };
var bt = {
  parser: yt,
  db: R,
  renderer: Dt,
  styles: xt
};
export {
  bt as diagram
};
//# sourceMappingURL=pieDiagram-NIOCPIFQ-DyDaDu7Z-YRHPE7E3.js.map
