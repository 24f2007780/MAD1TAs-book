import {
  t
} from "./chunk-ZFYPC67F.js";
import {
  Sy
} from "./chunk-YIBNAT2Y.js";
import "./chunk-ZHTCZNWP.js";
import "./chunk-ZFVRZDKL.js";
import "./chunk-D5X4WG6P.js";
import {
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
  g,
  gc,
  nb,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/diagram-ZTM2IBQH-C5VI6Kgc.js
var x = {
  showLegend: true,
  ticks: 5,
  max: null,
  min: 0,
  graticule: "circle"
};
var w = {
  axes: [],
  curves: [],
  options: x
};
var h = structuredClone(w);
var B = Cf.radar;
var j = g(() => gc({
  ...B,
  ...oe().radar
}), "getConfig");
var b = g(() => h.axes, "getAxes");
var q = g(() => h.curves, "getCurves");
var K = g(() => h.options, "getOptions");
var N2 = g((a) => {
  h.axes = a.map((t2) => ({
    name: t2.name,
    label: t2.label ?? t2.name
  }));
}, "setAxes");
var U = g((a) => {
  h.curves = a.map((t2) => ({
    name: t2.name,
    label: t2.label ?? t2.name,
    entries: X(t2.entries)
  }));
}, "setCurves");
var X = g((a) => {
  if (a[0].axis == null)
    return a.map((e) => e.value);
  const t2 = b();
  if (t2.length === 0)
    throw new Error("Axes must be populated before curves for reference entries");
  return t2.map((e) => {
    const r = a.find((s) => {
      var _a;
      return ((_a = s.axis) == null ? void 0 : _a.$refText) === e.name;
    });
    if (r === void 0)
      throw new Error("Missing entry for axis " + e.label);
    return r.value;
  });
}, "computeCurveEntries");
var Y = g((a) => {
  var _a, _b, _c, _d, _e;
  const t2 = a.reduce(
    (e, r) => (e[r.name] = r, e),
    {}
  );
  h.options = {
    showLegend: ((_a = t2.showLegend) == null ? void 0 : _a.value) ?? x.showLegend,
    ticks: ((_b = t2.ticks) == null ? void 0 : _b.value) ?? x.ticks,
    max: ((_c = t2.max) == null ? void 0 : _c.value) ?? x.max,
    min: ((_d = t2.min) == null ? void 0 : _d.value) ?? x.min,
    graticule: ((_e = t2.graticule) == null ? void 0 : _e.value) ?? x.graticule
  };
}, "setOptions");
var Z = g(() => {
  Fb(), h = structuredClone(w);
}, "clear");
var $ = {
  getAxes: b,
  getCurves: q,
  getOptions: K,
  setAxes: N2,
  setCurves: U,
  setOptions: Y,
  getConfig: j,
  clear: Z,
  setAccTitle: Ob,
  getAccTitle: Db,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  getAccDescription: Rb,
  setAccDescription: Ib
};
var J = g((a) => {
  t(a, $);
  const { axes: t2, curves: e, options: r } = a;
  $.setAxes(t2), $.setCurves(e), $.setOptions(r);
}, "populate");
var Q = {
  parse: g(async (a) => {
    const t2 = await Sy("radar", a);
    N.debug(t2), J(t2);
  }, "parse")
};
var tt = g((a, t2, e, r) => {
  const s = r.db, o = s.getAxes(), i = s.getCurves(), n = s.getOptions(), c = s.getConfig(), d = s.getDiagramTitle(), p = XB(t2), u = et(p, c), g2 = n.max ?? Math.max(...i.map((y) => Math.max(...y.entries))), m = n.min, v = Math.min(c.width, c.height) / 2;
  at(u, o, v, n.ticks, n.graticule), rt(u, o, v, c), M(u, o, i, m, g2, n.graticule, c), T(u, i, n.showLegend, c), u.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -c.height / 2 - c.marginTop);
}, "draw");
var et = g((a, t2) => {
  const e = t2.width + t2.marginLeft + t2.marginRight, r = t2.height + t2.marginTop + t2.marginBottom, s = {
    x: t2.marginLeft + t2.width / 2,
    y: t2.marginTop + t2.height / 2
  };
  return a.attr("viewbox", `0 0 ${e} ${r}`).attr("width", e).attr("height", r), a.append("g").attr("transform", `translate(${s.x}, ${s.y})`);
}, "drawFrame");
var at = g((a, t2, e, r, s) => {
  if (s === "circle")
    for (let o = 0; o < r; o++) {
      const i = e * (o + 1) / r;
      a.append("circle").attr("r", i).attr("class", "radarGraticule");
    }
  else if (s === "polygon") {
    const o = t2.length;
    for (let i = 0; i < r; i++) {
      const n = e * (i + 1) / r, c = t2.map((d, p) => {
        const u = 2 * p * Math.PI / o - Math.PI / 2, g2 = n * Math.cos(u), m = n * Math.sin(u);
        return `${g2},${m}`;
      }).join(" ");
      a.append("polygon").attr("points", c).attr("class", "radarGraticule");
    }
  }
}, "drawGraticule");
var rt = g((a, t2, e, r) => {
  const s = t2.length;
  for (let o = 0; o < s; o++) {
    const i = t2[o].label, n = 2 * o * Math.PI / s - Math.PI / 2;
    a.append("line").attr("x1", 0).attr("y1", 0).attr("x2", e * r.axisScaleFactor * Math.cos(n)).attr("y2", e * r.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), a.append("text").text(i).attr("x", e * r.axisLabelFactor * Math.cos(n)).attr("y", e * r.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
  }
}, "drawAxes");
function M(a, t2, e, r, s, o, i) {
  const n = t2.length, c = Math.min(i.width, i.height) / 2;
  e.forEach((d, p) => {
    if (d.entries.length !== n)
      return;
    const u = d.entries.map((g2, m) => {
      const v = 2 * Math.PI * m / n - Math.PI / 2, y = A(g2, r, s, c), O = y * Math.cos(v), S = y * Math.sin(v);
      return { x: O, y: S };
    });
    o === "circle" ? a.append("path").attr("d", L(u, i.curveTension)).attr("class", `radarCurve-${p}`) : o === "polygon" && a.append("polygon").attr("points", u.map((g2) => `${g2.x},${g2.y}`).join(" ")).attr("class", `radarCurve-${p}`);
  });
}
g(M, "drawCurves");
function A(a, t2, e, r) {
  const s = Math.min(Math.max(a, t2), e);
  return r * (s - t2) / (e - t2);
}
g(A, "relativeRadius");
function L(a, t2) {
  const e = a.length;
  let r = `M${a[0].x},${a[0].y}`;
  for (let s = 0; s < e; s++) {
    const o = a[(s - 1 + e) % e], i = a[s], n = a[(s + 1) % e], c = a[(s + 2) % e], d = {
      x: i.x + (n.x - o.x) * t2,
      y: i.y + (n.y - o.y) * t2
    }, p = {
      x: n.x - (c.x - i.x) * t2,
      y: n.y - (c.y - i.y) * t2
    };
    r += ` C${d.x},${d.y} ${p.x},${p.y} ${n.x},${n.y}`;
  }
  return `${r} Z`;
}
g(L, "closedRoundCurve");
function T(a, t2, e, r) {
  if (!e)
    return;
  const s = (r.width / 2 + r.marginRight) * 3 / 4, o = -(r.height / 2 + r.marginTop) * 3 / 4, i = 20;
  t2.forEach((n, c) => {
    const d = a.append("g").attr("transform", `translate(${s}, ${o + c * i})`);
    d.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${c}`), d.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
  });
}
g(T, "drawLegend");
var st = { draw: tt };
var nt = g((a, t2) => {
  let e = "";
  for (let r = 0; r < a.THEME_COLOR_LIMIT; r++) {
    const s = a[`cScale${r}`];
    e += `
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t2.curveOpacity};
			stroke: ${s};
			stroke-width: ${t2.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t2.curveOpacity};
			stroke: ${s};
		}
		`;
  }
  return e;
}, "genIndexStyles");
var ot = g((a) => {
  const t2 = nb(), e = oe(), r = gc(t2, e.themeVariables), s = gc(r.radar, a);
  return { themeVariables: r, radarOptions: s };
}, "buildRadarStyleOptions");
var it = g(({ radar: a } = {}) => {
  const { themeVariables: t2, radarOptions: e } = ot(a);
  return `
	.radarTitle {
		font-size: ${t2.fontSize};
		color: ${t2.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(t2, e)}
	`;
}, "styles");
var ut = {
  parser: Q,
  db: $,
  renderer: st,
  styles: it
};
export {
  ut as diagram
};
//# sourceMappingURL=diagram-ZTM2IBQH-C5VI6Kgc-E5C6AT7Z.js.map
