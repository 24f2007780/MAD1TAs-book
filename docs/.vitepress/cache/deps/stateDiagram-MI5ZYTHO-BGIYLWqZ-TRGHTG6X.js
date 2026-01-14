import {
  Be,
  Me,
  Ue
} from "./chunk-EAFE4STA.js";
import {
  ot
} from "./chunk-57YO6OB4.js";
import {
  L
} from "./chunk-OHTV2T7H.js";
import "./chunk-KGIDCT5E.js";
import "./chunk-TWF5D5TU.js";
import "./chunk-ZFVRZDKL.js";
import "./chunk-D5X4WG6P.js";
import {
  $f,
  Ae,
  Mf,
  N,
  Ti,
  _C,
  bs,
  dt,
  g,
  gt
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/stateDiagram-MI5ZYTHO-BGIYLWqZ.js
var X = g((e) => e.append("circle").attr("class", "start-state").attr("r", gt().state.sizeUnit).attr("cx", gt().state.padding + gt().state.sizeUnit).attr("cy", gt().state.padding + gt().state.sizeUnit), "drawStartState");
var D = g((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", gt().state.textHeight).attr("class", "divider").attr("x2", gt().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
var Y = g((e, i) => {
  const d = e.append("text").attr("x", 2 * gt().state.padding).attr("y", gt().state.textHeight + 2 * gt().state.padding).attr("font-size", gt().state.fontSize).attr("class", "state-title").text(i.id), c = d.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", gt().state.padding).attr("y", gt().state.padding).attr("width", c.width + 2 * gt().state.padding).attr("height", c.height + 2 * gt().state.padding).attr("rx", gt().state.radius), d;
}, "drawSimpleState");
var I = g((e, i) => {
  const d = g(function(g2, m, B) {
    const E = g2.append("tspan").attr("x", 2 * gt().state.padding).text(m);
    B || E.attr("dy", gt().state.textHeight);
  }, "addTspan"), n = e.append("text").attr("x", 2 * gt().state.padding).attr("y", gt().state.textHeight + 1.3 * gt().state.padding).attr("font-size", gt().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), l = n.height, x = e.append("text").attr("x", gt().state.padding).attr(
    "y",
    l + gt().state.padding * 0.4 + gt().state.dividerMargin + gt().state.textHeight
  ).attr("class", "state-description");
  let a = true, s = true;
  i.descriptions.forEach(function(g2) {
    a || (d(x, g2, s), s = false), a = false;
  });
  const w = e.append("line").attr("x1", gt().state.padding).attr("y1", gt().state.padding + l + gt().state.dividerMargin / 2).attr("y2", gt().state.padding + l + gt().state.dividerMargin / 2).attr("class", "descr-divider"), p = x.node().getBBox(), o = Math.max(p.width, n.width);
  return w.attr("x2", o + 3 * gt().state.padding), e.insert("rect", ":first-child").attr("x", gt().state.padding).attr("y", gt().state.padding).attr("width", o + 2 * gt().state.padding).attr("height", p.height + l + 2 * gt().state.padding).attr("rx", gt().state.radius), e;
}, "drawDescrState");
var $ = g((e, i, d) => {
  const c = gt().state.padding, n = 2 * gt().state.padding, l = e.node().getBBox(), x = l.width, a = l.x, s = e.append("text").attr("x", 0).attr("y", gt().state.titleShift).attr("font-size", gt().state.fontSize).attr("class", "state-title").text(i.id), p = s.node().getBBox().width + n;
  let o = Math.max(p, x);
  o === x && (o = o + n);
  let g2;
  const m = e.node().getBBox();
  i.doc, g2 = a - c, p > x && (g2 = (x - o) / 2 + c), Math.abs(a - m.x) < c && p > x && (g2 = a - (p - x) / 2);
  const B = 1 - gt().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", g2).attr("y", B).attr("class", d ? "alt-composit" : "composit").attr("width", o).attr(
    "height",
    m.height + gt().state.textHeight + gt().state.titleShift + 1
  ).attr("rx", "0"), s.attr("x", g2 + c), p <= x && s.attr("x", a + (o - n) / 2 - p / 2 + c), e.insert("rect", ":first-child").attr("x", g2).attr(
    "y",
    gt().state.titleShift - gt().state.textHeight - gt().state.padding
  ).attr("width", o).attr("height", gt().state.textHeight * 3).attr("rx", gt().state.radius), e.insert("rect", ":first-child").attr("x", g2).attr(
    "y",
    gt().state.titleShift - gt().state.textHeight - gt().state.padding
  ).attr("width", o).attr("height", m.height + 3 + 2 * gt().state.textHeight).attr("rx", gt().state.radius), e;
}, "addTitleAndBox");
var q = g((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", gt().state.sizeUnit + gt().state.miniPadding).attr(
  "cx",
  gt().state.padding + gt().state.sizeUnit + gt().state.miniPadding
).attr(
  "cy",
  gt().state.padding + gt().state.sizeUnit + gt().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", gt().state.sizeUnit).attr("cx", gt().state.padding + gt().state.sizeUnit + 2).attr("cy", gt().state.padding + gt().state.sizeUnit + 2)), "drawEndState");
var Z = g((e, i) => {
  let d = gt().state.forkWidth, c = gt().state.forkHeight;
  if (i.parentId) {
    let n = d;
    d = c, c = n;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", d).attr("height", c).attr("x", gt().state.padding).attr("y", gt().state.padding);
}, "drawForkJoinState");
var j = g((e, i, d, c) => {
  let n = 0;
  const l = c.append("text");
  l.style("text-anchor", "start"), l.attr("class", "noteText");
  let x = e.replace(/\r\n/g, "<br/>");
  x = x.replace(/\n/g, "<br/>");
  const a = x.split(Ti.lineBreakRegex);
  let s = 1.25 * gt().state.noteMargin;
  for (const w of a) {
    const p = w.trim();
    if (p.length > 0) {
      const o = l.append("tspan");
      if (o.text(p), s === 0) {
        const g2 = o.node().getBBox();
        s += g2.height;
      }
      n += s, o.attr("x", i + gt().state.noteMargin), o.attr("y", d + n + 1.25 * gt().state.noteMargin);
    }
  }
  return { textWidth: l.node().getBBox().width, textHeight: n };
}, "_drawLongText");
var K = g((e, i) => {
  i.attr("class", "state-note");
  const d = i.append("rect").attr("x", 0).attr("y", gt().state.padding), c = i.append("g"), { textWidth: n, textHeight: l } = j(e, 0, 0, c);
  return d.attr("height", l + 2 * gt().state.noteMargin), d.attr("width", n + gt().state.noteMargin * 2), d;
}, "drawNote");
var L2 = g(function(e, i) {
  const d = i.id, c = {
    id: d,
    label: i.id,
    width: 0,
    height: 0
  }, n = e.append("g").attr("id", d).attr("class", "stateGroup");
  i.type === "start" && X(n), i.type === "end" && q(n), (i.type === "fork" || i.type === "join") && Z(n, i), i.type === "note" && K(i.note.text, n), i.type === "divider" && D(n), i.type === "default" && i.descriptions.length === 0 && Y(n, i), i.type === "default" && i.descriptions.length > 0 && I(n, i);
  const l = n.node().getBBox();
  return c.width = l.width + 2 * gt().state.padding, c.height = l.height + 2 * gt().state.padding, c;
}, "drawState");
var R = 0;
var Q = g(function(e, i, d) {
  const c = g(function(s) {
    switch (s) {
      case Me.relationType.AGGREGATION:
        return "aggregation";
      case Me.relationType.EXTENSION:
        return "extension";
      case Me.relationType.COMPOSITION:
        return "composition";
      case Me.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  i.points = i.points.filter((s) => !Number.isNaN(s.y));
  const n = i.points, l = _C().x(function(s) {
    return s.x;
  }).y(function(s) {
    return s.y;
  }).curve(bs), x = e.append("path").attr("d", l(n)).attr("id", "edge" + R).attr("class", "transition");
  let a = "";
  if (gt().state.arrowMarkerAbsolute && (a = Mf(true)), x.attr(
    "marker-end",
    "url(" + a + "#" + c(Me.relationType.DEPENDENCY) + "End)"
  ), d.title !== void 0) {
    const s = e.append("g").attr("class", "stateLabel"), { x: w, y: p } = Ae.calcLabelPosition(i.points), o = Ti.getRows(d.title);
    let g2 = 0;
    const m = [];
    let B = 0, E = 0;
    for (let u = 0; u <= o.length; u++) {
      const h = s.append("text").attr("text-anchor", "middle").text(o[u]).attr("x", w).attr("y", p + g2), y = h.node().getBBox();
      B = Math.max(B, y.width), E = Math.min(E, y.x), N.info(y.x, w, p + g2), g2 === 0 && (g2 = h.node().getBBox().height, N.info("Title height", g2, p)), m.push(h);
    }
    let k = g2 * o.length;
    if (o.length > 1) {
      const u = (o.length - 1) * g2 * 0.5;
      m.forEach((h, y) => h.attr("y", p + y * g2 - u)), k = g2 * o.length;
    }
    const r = s.node().getBBox();
    s.insert("rect", ":first-child").attr("class", "box").attr("x", w - B / 2 - gt().state.padding / 2).attr("y", p - k / 2 - gt().state.padding / 2 - 3.5).attr("width", B + gt().state.padding).attr("height", k + gt().state.padding), N.info(r);
  }
  R++;
}, "drawEdge");
var b;
var T = {};
var V = g(function() {
}, "setConf");
var tt = g(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers");
var et = g(function(e, i, d, c) {
  b = gt().state;
  const n = gt().securityLevel;
  let l;
  n === "sandbox" && (l = dt("#i" + i));
  const x = n === "sandbox" ? dt(l.nodes()[0].contentDocument.body) : dt("body"), a = n === "sandbox" ? l.nodes()[0].contentDocument : document;
  N.debug("Rendering diagram " + e);
  const s = x.select(`[id='${i}']`);
  tt(s);
  const w = c.db.getRootDoc();
  A(w, s, void 0, false, x, a, c);
  const p = b.padding, o = s.node().getBBox(), g2 = o.width + p * 2, m = o.height + p * 2, B = g2 * 1.75;
  $f(s, m, B, b.useMaxWidth), s.attr(
    "viewBox",
    `${o.x - b.padding}  ${o.y - b.padding} ` + g2 + " " + m
  );
}, "draw");
var at = g((e) => e ? e.length * b.fontSizeFactor : 1, "getLabelWidth");
var A = g((e, i, d, c, n, l, x) => {
  const a = new L({
    compound: true,
    multigraph: true
  });
  let s, w = true;
  for (s = 0; s < e.length; s++)
    if (e[s].stmt === "relation") {
      w = false;
      break;
    }
  d ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: w ? 1 : b.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: w ? 1 : b.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const p = x.db.getStates(), o = x.db.getRelations(), g2 = Object.keys(p);
  for (const r of g2) {
    const u = p[r];
    d && (u.parentId = d);
    let h;
    if (u.doc) {
      let y = i.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = A(u.doc, y, u.id, !c, n, l, x);
      {
        y = $(y, u, c);
        let v = y.node().getBBox();
        h.width = v.width, h.height = v.height + b.padding / 2, T[u.id] = { y: b.compositTitleSize };
      }
    } else
      h = L2(i, u, a);
    if (u.note) {
      const y = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, v = L2(i, y, a);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", v), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", v)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  N.debug("Count=", a.nodeCount(), a);
  let m = 0;
  o.forEach(function(r) {
    m++, N.debug("Setting edge", r), a.setEdge(
      r.id1,
      r.id2,
      {
        relation: r,
        width: at(r.title),
        height: b.labelHeight * Ti.getRows(r.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), ot(a), N.debug("Graph after layout", a.nodes());
  const B = i.node();
  a.nodes().forEach(function(r) {
    r !== void 0 && a.node(r) !== void 0 ? (N.warn("Node " + r + ": " + JSON.stringify(a.node(r))), n.select("#" + B.id + " #" + r).attr(
      "transform",
      "translate(" + (a.node(r).x - a.node(r).width / 2) + "," + (a.node(r).y + (T[r] ? T[r].y : 0) - a.node(r).height / 2) + " )"
    ), n.select("#" + B.id + " #" + r).attr("data-x-shift", a.node(r).x - a.node(r).width / 2), l.querySelectorAll("#" + B.id + " #" + r + " .divider").forEach((h) => {
      const y = h.parentElement;
      let v = 0, M = 0;
      y && (y.parentElement && (v = y.parentElement.getBBox().width), M = parseInt(y.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", v - M - 8);
    })) : N.debug("No Node " + r + ": " + JSON.stringify(a.node(r)));
  });
  let E = B.getBBox();
  a.edges().forEach(function(r) {
    r !== void 0 && a.edge(r) !== void 0 && (N.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(a.edge(r))), Q(i, a.edge(r), a.edge(r).relation));
  }), E = B.getBBox();
  const k = {
    id: d || "root",
    label: d || "root",
    width: 0,
    height: 0
  };
  return k.width = E.width + 2 * b.padding, k.height = E.height + 2 * b.padding, N.debug("Doc rendered", k, a), k;
}, "renderDoc");
var it = {
  setConf: V,
  draw: et
};
var ot2 = {
  parser: Be,
  get db() {
    return new Me(1);
  },
  renderer: it,
  styles: Ue,
  init: g((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  ot2 as diagram
};
//# sourceMappingURL=stateDiagram-MI5ZYTHO-BGIYLWqZ-TRGHTG6X.js.map
