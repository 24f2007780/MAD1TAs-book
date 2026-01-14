import {
  ot
} from "./chunk-57YO6OB4.js";
import {
  L
} from "./chunk-OHTV2T7H.js";
import {
  a
} from "./chunk-ZHTCZNWP.js";
import {
  gn
} from "./chunk-ZFVRZDKL.js";
import {
  Et
} from "./chunk-D5X4WG6P.js";
import {
  Gl,
  K,
  LB,
  Ly,
  N,
  YB,
  _B,
  d3,
  eB,
  f3,
  g,
  g3,
  gt,
  kB,
  m3,
  p3
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/dagre-JOIXM2OF--buugMtu.js
function h(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: ee(e),
    edges: ne(e)
  };
  return Et(e.graph()) || (t.value = a(e.graph())), t;
}
function ee(e) {
  return gn(e.nodes(), function(t) {
    var n = e.node(t), a2 = e.parent(t), i = { v: t };
    return Et(n) || (i.value = n), Et(a2) || (i.parent = a2), i;
  });
}
function ne(e) {
  return gn(e.edges(), function(t) {
    var n = e.edge(t), a2 = { v: t.v, w: t.w };
    return Et(t.name) || (a2.name = t.name), Et(n) || (a2.value = n), a2;
  });
}
var d = /* @__PURE__ */ new Map();
var y = /* @__PURE__ */ new Map();
var J = /* @__PURE__ */ new Map();
var te = g(() => {
  y.clear(), J.clear(), d.clear();
}, "clear");
var D = g((e, t) => {
  const n = y.get(t) || [];
  return N.trace("In isDescendant", t, " ", e, " = ", n.includes(e)), n.includes(e);
}, "isDescendant");
var se = g((e, t) => {
  const n = y.get(t) || [];
  return N.info("Descendants of ", t, " is ", n), N.info("Edge is ", e), e.v === t || e.w === t ? false : n ? n.includes(e.v) || D(e.v, t) || D(e.w, t) || n.includes(e.w) : (N.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster");
var G = g((e, t, n, a2) => {
  N.warn(
    "Copying children of ",
    e,
    "root",
    a2,
    "data",
    t.node(e),
    a2
  );
  const i = t.children(e) || [];
  e !== a2 && i.push(e), N.warn("Copying (nodes) clusterId", e, "nodes", i), i.forEach((o) => {
    if (t.children(o).length > 0)
      G(o, t, n, a2);
    else {
      const l = t.node(o);
      N.info("cp ", o, " to ", a2, " with parent ", e), n.setNode(o, l), a2 !== t.parent(o) && (N.warn("Setting parent", o, t.parent(o)), n.setParent(o, t.parent(o))), e !== a2 && o !== e ? (N.debug("Setting parent", o, e), n.setParent(o, e)) : (N.info("In copy ", e, "root", a2, "data", t.node(e), a2), N.debug(
        "Not Setting parent for node=",
        o,
        "cluster!==rootId",
        e !== a2,
        "node!==clusterId",
        o !== e
      ));
      const u = t.edges(o);
      N.debug("Copying Edges", u), u.forEach((c) => {
        N.info("Edge", c);
        const m = t.edge(c.v, c.w, c.name);
        N.info("Edge data", m, a2);
        try {
          se(c, a2) ? (N.info("Copying as ", c.v, c.w, m, c.name), n.setEdge(c.v, c.w, m, c.name), N.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : N.info(
            "Skipping copy of edge ",
            c.v,
            "-->",
            c.w,
            " rootId: ",
            a2,
            " clusterId:",
            e
          );
        } catch (v) {
          N.error(v);
        }
      });
    }
    N.debug("Removing node", o), t.removeNode(o);
  });
}, "copy");
var R = g((e, t) => {
  const n = t.children(e);
  let a2 = [...n];
  for (const i of n)
    J.set(i, e), a2 = [...a2, ...R(i, t)];
  return a2;
}, "extractDescendants");
var re = g((e, t, n) => {
  const a2 = e.edges().filter((c) => c.v === t || c.w === t), i = e.edges().filter((c) => c.v === n || c.w === n), o = a2.map((c) => ({ v: c.v === t ? n : c.v, w: c.w === t ? t : c.w })), l = i.map((c) => ({ v: c.v, w: c.w }));
  return o.filter((c) => l.some((m) => c.v === m.v && c.w === m.w));
}, "findCommonEdges");
var C = g((e, t, n) => {
  const a2 = t.children(e);
  if (N.trace("Searching children of id ", e, a2), a2.length < 1)
    return e;
  let i;
  for (const o of a2) {
    const l = C(o, t, n), u = re(t, n, l);
    if (l)
      if (u.length > 0)
        i = l;
      else
        return l;
  }
  return i;
}, "findNonClusterChild");
var k = g((e) => !d.has(e) || !d.get(e).externalConnections ? e : d.has(e) ? d.get(e).id : e, "getAnchorId");
var ie = g((e, t) => {
  if (!e || t > 10) {
    N.debug("Opting out, no graph ");
    return;
  } else
    N.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (N.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      C(n, e, n)
    ), y.set(n, R(n, e)), d.set(n, { id: C(n, e, n), clusterData: e.node(n) }));
  }), e.nodes().forEach(function(n) {
    const a2 = e.children(n), i = e.edges();
    a2.length > 0 ? (N.debug("Cluster identified", n, y), i.forEach((o) => {
      const l = D(o.v, n), u = D(o.w, n);
      l ^ u && (N.warn("Edge: ", o, " leaves cluster ", n), N.warn("Descendants of XXX ", n, ": ", y.get(n)), d.get(n).externalConnections = true);
    })) : N.debug("Not a cluster ", n, y);
  });
  for (let n of d.keys()) {
    const a2 = d.get(n).id, i = e.parent(a2);
    i !== n && d.has(i) && !d.get(i).externalConnections && (d.get(n).id = i);
  }
  e.edges().forEach(function(n) {
    const a2 = e.edge(n);
    N.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), N.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let i = n.v, o = n.w;
    if (N.warn(
      "Fix XXX",
      d,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      d.get(n.v),
      " --- ",
      d.get(n.w)
    ), d.get(n.v) || d.get(n.w)) {
      if (N.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), i = k(n.v), o = k(n.w), e.removeEdge(n.v, n.w, n.name), i !== n.v) {
        const l = e.parent(i);
        d.get(l).externalConnections = true, a2.fromCluster = n.v;
      }
      if (o !== n.w) {
        const l = e.parent(o);
        d.get(l).externalConnections = true, a2.toCluster = n.w;
      }
      N.warn("Fix Replacing with XXX", i, o, n.name), e.setEdge(i, o, a2, n.name);
    }
  }), N.warn("Adjusted Graph", h(e)), T(e, 0), N.trace(d);
}, "adjustClustersAndEdges");
var T = g((e, t) => {
  var _a, _b;
  if (N.warn("extractor - ", t, h(e), e.children("D")), t > 10) {
    N.error("Bailing out");
    return;
  }
  let n = e.nodes(), a2 = false;
  for (const i of n) {
    const o = e.children(i);
    a2 = a2 || o.length > 0;
  }
  if (!a2) {
    N.debug("Done, no node has children", e.nodes());
    return;
  }
  N.debug("Nodes = ", n, t);
  for (const i of n)
    if (N.debug(
      "Extracting node",
      i,
      d,
      d.has(i) && !d.get(i).externalConnections,
      !e.parent(i),
      e.node(i),
      e.children("D"),
      " Depth ",
      t
    ), !d.has(i))
      N.debug("Not a cluster", i, t);
    else if (!d.get(i).externalConnections && e.children(i) && e.children(i).length > 0) {
      N.warn(
        "Cluster without external connections, without a parent and with children",
        i,
        t
      );
      let l = e.graph().rankdir === "TB" ? "LR" : "TB";
      ((_b = (_a = d.get(i)) == null ? void 0 : _a.clusterData) == null ? void 0 : _b.dir) && (l = d.get(i).clusterData.dir, N.warn("Fixing dir", d.get(i).clusterData.dir, l));
      const u = new L({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: l,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      N.warn("Old graph before copy", h(e)), G(i, e, u, i), e.setNode(i, {
        clusterNode: true,
        id: i,
        clusterData: d.get(i).clusterData,
        label: d.get(i).label,
        graph: u
      }), N.warn("New graph after copy node: (", i, ")", h(u)), N.debug("Old graph after copy", h(e));
    } else
      N.warn(
        "Cluster ** ",
        i,
        " **not meeting the criteria !externalConnections:",
        !d.get(i).externalConnections,
        " no parent: ",
        !e.parent(i),
        " children ",
        e.children(i) && e.children(i).length > 0,
        e.children("D"),
        t
      ), N.debug(d);
  n = e.nodes(), N.warn("New list of nodes", n);
  for (const i of n) {
    const o = e.node(i);
    N.warn(" Now next level", i, o), (o == null ? void 0 : o.clusterNode) && T(o.graph, t + 1);
  }
}, "extractor");
var M = g((e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign([], t);
  return t.forEach((a2) => {
    const i = e.children(a2), o = M(e, i);
    n = [...n, ...o];
  }), n;
}, "sorter");
var oe = g((e) => M(e, e.children()), "sortNodesByHierarchy");
var j = g(async (e, t, n, a2, i, o) => {
  N.warn("Graph in recursive render:XAX", h(t), i);
  const l = t.graph().rankdir;
  N.trace("Dir in recursive render - dir:", l);
  const u = e.insert("g").attr("class", "root");
  t.nodes() ? N.info("Recursive render XXX", t.nodes()) : N.info("No nodes found for", t), t.edges().length > 0 && N.info("Recursive edges", t.edge(t.edges()[0]));
  const c = u.insert("g").attr("class", "clusters"), m = u.insert("g").attr("class", "edgePaths"), v = u.insert("g").attr("class", "edgeLabels"), X = u.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(f) {
      const s = t.node(f);
      if (i !== void 0) {
        const g2 = JSON.parse(JSON.stringify(i.clusterData));
        N.trace(
          `Setting data for parent cluster XXX
 Node.id = `,
          f,
          `
 data=`,
          g2.height,
          `
Parent cluster`,
          i.height
        ), t.setNode(i.id, g2), t.parent(f) || (N.trace("Setting parent", f, i.id), t.setParent(f, i.id, g2));
      }
      if (N.info("(Insert) Node XXX" + f + ": " + JSON.stringify(t.node(f))), s == null ? void 0 : s.clusterNode) {
        N.info("Cluster identified XBX", f, s.width, t.node(f));
        const { ranksep: g2, nodesep: E } = t.graph();
        s.graph.setGraph({
          ...s.graph.graph(),
          ranksep: g2 + 25,
          nodesep: E
        });
        const N2 = await j(
          X,
          s.graph,
          n,
          a2,
          t.node(f),
          o
        ), x = N2.elem;
        K(s, x), s.diff = N2.diff || 0, N.info(
          "New compound node after recursive render XAX",
          f,
          "width",
          // node,
          s.width,
          "height",
          s.height
          // node.x,
          // node.y
        ), d3(x, s);
      } else
        t.children(f).length > 0 ? (N.trace(
          "Cluster - the non recursive path XBX",
          f,
          s.id,
          s,
          s.width,
          "Graph:",
          t
        ), N.trace(C(s.id, t)), d.set(s.id, { id: C(s.id, t), node: s })) : (N.trace("Node - the non recursive path XAX", f, X, t.node(f), l), await Ly(X, t.node(f), { config: o, dir: l }));
    })
  ), await g(async () => {
    const f = t.edges().map(async function(s) {
      const g2 = t.edge(s.v, s.w, s.name);
      N.info("Edge " + s.v + " -> " + s.w + ": " + JSON.stringify(s)), N.info("Edge " + s.v + " -> " + s.w + ": ", s, " ", JSON.stringify(t.edge(s))), N.info(
        "Fix",
        d,
        "ids:",
        s.v,
        s.w,
        "Translating: ",
        d.get(s.v),
        d.get(s.w)
      ), await kB(v, g2);
    });
    await Promise.all(f);
  }, "processEdges")(), N.info("Graph before layout:", JSON.stringify(h(t))), N.info("############################################# XXX"), N.info("###                Layout                 ### XXX"), N.info("############################################# XXX"), ot(t), N.info("Graph after layout:", JSON.stringify(h(t)));
  let O = 0, { subGraphTitleTotalMargin: S } = Gl(o);
  return await Promise.all(
    oe(t).map(async function(f) {
      var _a;
      const s = t.node(f);
      if (N.info(
        "Position XBX => " + f + ": (" + s.x,
        "," + s.y,
        ") width: ",
        s.width,
        " height: ",
        s.height
      ), s == null ? void 0 : s.clusterNode)
        s.y += S, N.info(
          "A tainted cluster node XBX1",
          f,
          s.id,
          s.width,
          s.height,
          s.x,
          s.y,
          t.parent(f)
        ), d.get(s.id).node = s, g3(s);
      else if (t.children(f).length > 0) {
        N.info(
          "A pure cluster node XBX1",
          f,
          s.id,
          s.x,
          s.y,
          s.width,
          s.height,
          t.parent(f)
        ), s.height += S, t.node(s.parentId);
        const g2 = (s == null ? void 0 : s.padding) / 2 || 0, E = ((_a = s == null ? void 0 : s.labelBBox) == null ? void 0 : _a.height) || 0, N2 = E - g2 || 0;
        N.debug("OffsetY", N2, "labelHeight", E, "halfPadding", g2), await eB(c, s), d.get(s.id).node = s;
      } else {
        const g2 = t.node(s.parentId);
        s.y += S / 2, N.info(
          "A regular node XBX1 - using the padding",
          s.id,
          "parent",
          s.parentId,
          s.width,
          s.height,
          s.x,
          s.y,
          "offsetY",
          s.offsetY,
          "parent",
          g2,
          g2 == null ? void 0 : g2.offsetY,
          s
        ), g3(s);
      }
    })
  ), t.edges().forEach(function(f) {
    const s = t.edge(f);
    N.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(s), s), s.points.forEach((x) => x.y += S / 2);
    const g2 = t.node(f.v);
    var E = t.node(f.w);
    const N2 = LB(m, s, d, n, g2, E, a2);
    _B(s, N2);
  }), t.nodes().forEach(function(f) {
    const s = t.node(f);
    N.info(f, s.type, s.diff), s.isGroup && (O = s.diff);
  }), N.warn("Returning from recursive render XAX", u, O), { elem: u, diff: O };
}, "recursiveRender");
var ge = g(async (e, t) => {
  var _a, _b, _c, _d, _e, _f;
  const n = new L({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: e.direction,
    nodesep: ((_a = e.config) == null ? void 0 : _a.nodeSpacing) || ((_c = (_b = e.config) == null ? void 0 : _b.flowchart) == null ? void 0 : _c.nodeSpacing) || e.nodeSpacing,
    ranksep: ((_d = e.config) == null ? void 0 : _d.rankSpacing) || ((_f = (_e = e.config) == null ? void 0 : _e.flowchart) == null ? void 0 : _f.rankSpacing) || e.rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), a2 = t.select("g");
  YB(a2, e.markers, e.type, e.diagramId), p3(), m3(), f3(), te(), e.nodes.forEach((o) => {
    n.setNode(o.id, { ...o }), o.parentId && n.setParent(o.id, o.parentId);
  }), N.debug("Edges:", e.edges), e.edges.forEach((o) => {
    if (o.start === o.end) {
      const l = o.start, u = l + "---" + l + "---1", c = l + "---" + l + "---2", m = n.node(l);
      n.setNode(u, {
        domId: u,
        id: u,
        parentId: m.parentId,
        labelStyle: "",
        label: "",
        padding: 0,
        shape: "labelRect",
        // shape: 'rect',
        style: "",
        width: 10,
        height: 10
      }), n.setParent(u, m.parentId), n.setNode(c, {
        domId: c,
        id: c,
        parentId: m.parentId,
        labelStyle: "",
        padding: 0,
        // shape: 'rect',
        shape: "labelRect",
        label: "",
        style: "",
        width: 10,
        height: 10
      }), n.setParent(c, m.parentId);
      const v = structuredClone(o), X = structuredClone(o), p = structuredClone(o);
      v.label = "", v.arrowTypeEnd = "none", v.id = l + "-cyclic-special-1", X.arrowTypeStart = "none", X.arrowTypeEnd = "none", X.id = l + "-cyclic-special-mid", p.label = "", m.isGroup && (v.fromCluster = l, p.toCluster = l), p.id = l + "-cyclic-special-2", p.arrowTypeStart = "none", n.setEdge(l, u, v, l + "-cyclic-special-0"), n.setEdge(u, c, X, l + "-cyclic-special-1"), n.setEdge(c, l, p, l + "-cyc<lic-special-2");
    } else
      n.setEdge(o.start, o.end, { ...o }, o.id);
  }), N.warn("Graph at first:", JSON.stringify(h(n))), ie(n), N.warn("Graph after XAX:", JSON.stringify(h(n)));
  const i = gt();
  await j(
    a2,
    n,
    e.type,
    e.diagramId,
    void 0,
    i
  );
}, "render");
export {
  ge as render
};
//# sourceMappingURL=dagre-JOIXM2OF--buugMtu-P3VCGK5D.js.map
