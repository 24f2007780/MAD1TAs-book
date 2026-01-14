import {
  e
} from "./chunk-2M6XZVQP.js";
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
  Ae,
  Cf,
  Db,
  Fb,
  Ib,
  N,
  Nb,
  Ob,
  Pb,
  Rb,
  Ti,
  Wb,
  dt,
  g,
  gc,
  gt,
  mS,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/gitGraphDiagram-GW3U2K7C-DzFCvp_L.js
var p = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
var hr = Cf.gitGraph;
var I = g(() => gc({
  ...hr,
  ...oe().gitGraph
}), "getConfig");
var c = new e(() => {
  const t2 = I(), r = t2.mainBranchName, s = t2.mainBranchOrder;
  return {
    mainBranchName: r,
    commits: /* @__PURE__ */ new Map(),
    head: null,
    branchConfig: /* @__PURE__ */ new Map([[r, { name: r, order: s }]]),
    branches: /* @__PURE__ */ new Map([[r, null]]),
    currBranch: r,
    direction: "LR",
    seq: 0,
    options: {}
  };
});
function A() {
  return mS({ length: 7 });
}
g(A, "getID");
function F(t2, r) {
  const s = /* @__PURE__ */ Object.create(null);
  return t2.reduce((n, e2) => {
    const a = r(e2);
    return s[a] || (s[a] = true, n.push(e2)), n;
  }, []);
}
g(F, "uniqBy");
var lr = g(function(t2) {
  c.records.direction = t2;
}, "setDirection");
var $r = g(function(t2) {
  N.debug("options str", t2), t2 = t2 == null ? void 0 : t2.trim(), t2 = t2 || "{}";
  try {
    c.records.options = JSON.parse(t2);
  } catch (r) {
    N.error("error while parsing gitGraph options", r.message);
  }
}, "setOptions");
var fr = g(function() {
  return c.records.options;
}, "getOptions");
var gr = g(function(t2) {
  let r = t2.msg, s = t2.id;
  const n = t2.type;
  let e2 = t2.tags;
  N.info("commit", r, s, n, e2), N.debug("Entering commit:", r, s, n, e2);
  const a = I();
  s = Ti.sanitizeText(s, a), r = Ti.sanitizeText(r, a), e2 = e2 == null ? void 0 : e2.map((o) => Ti.sanitizeText(o, a));
  const d = {
    id: s || c.records.seq + "-" + A(),
    message: r,
    seq: c.records.seq++,
    type: n ?? p.NORMAL,
    tags: e2 ?? [],
    parents: c.records.head == null ? [] : [c.records.head.id],
    branch: c.records.currBranch
  };
  c.records.head = d, N.info("main branch", a.mainBranchName), c.records.commits.has(d.id) && N.warn(`Commit ID ${d.id} already exists`), c.records.commits.set(d.id, d), c.records.branches.set(c.records.currBranch, d.id), N.debug("in pushCommit " + d.id);
}, "commit");
var yr = g(function(t2) {
  let r = t2.name;
  const s = t2.order;
  if (r = Ti.sanitizeText(r, I()), c.records.branches.has(r))
    throw new Error(
      `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`
    );
  c.records.branches.set(r, c.records.head != null ? c.records.head.id : null), c.records.branchConfig.set(r, { name: r, order: s }), z(r), N.debug("in createBranch");
}, "branch");
var ur = g((t2) => {
  let r = t2.branch, s = t2.id;
  const n = t2.type, e2 = t2.tags, a = I();
  r = Ti.sanitizeText(r, a), s && (s = Ti.sanitizeText(s, a));
  const d = c.records.branches.get(c.records.currBranch), o = c.records.branches.get(r), f = d ? c.records.commits.get(d) : void 0, h = o ? c.records.commits.get(o) : void 0;
  if (f && h && f.branch === r)
    throw new Error(`Cannot merge branch '${r}' into itself.`);
  if (c.records.currBranch === r) {
    const i = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, i;
  }
  if (f === void 0 || !f) {
    const i = new Error(
      `Incorrect usage of "merge". Current branch (${c.records.currBranch})has no commits`
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["commit"]
    }, i;
  }
  if (!c.records.branches.has(r)) {
    const i = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") does not exist"
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: [`branch ${r}`]
    }, i;
  }
  if (h === void 0 || !h) {
    const i = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") has no commits"
    );
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ['"commit"']
    }, i;
  }
  if (f === h) {
    const i = new Error('Incorrect usage of "merge". Both branches have same head');
    throw i.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, i;
  }
  if (s && c.records.commits.has(s)) {
    const i = new Error(
      'Incorrect usage of "merge". Commit with id:' + s + " already exists, use different custom id"
    );
    throw i.hash = {
      text: `merge ${r} ${s} ${n} ${e2 == null ? void 0 : e2.join(" ")}`,
      token: `merge ${r} ${s} ${n} ${e2 == null ? void 0 : e2.join(" ")}`,
      expected: [
        `merge ${r} ${s}_UNIQUE ${n} ${e2 == null ? void 0 : e2.join(" ")}`
      ]
    }, i;
  }
  const $ = o || "", g2 = {
    id: s || `${c.records.seq}-${A()}`,
    message: `merged branch ${r} into ${c.records.currBranch}`,
    seq: c.records.seq++,
    parents: c.records.head == null ? [] : [c.records.head.id, $],
    branch: c.records.currBranch,
    type: p.MERGE,
    customType: n,
    customId: !!s,
    tags: e2 ?? []
  };
  c.records.head = g2, c.records.commits.set(g2.id, g2), c.records.branches.set(c.records.currBranch, g2.id), N.debug(c.records.branches), N.debug("in mergeBranch");
}, "merge");
var xr = g(function(t2) {
  let r = t2.id, s = t2.targetId, n = t2.tags, e2 = t2.parent;
  N.debug("Entering cherryPick:", r, s, n);
  const a = I();
  if (r = Ti.sanitizeText(r, a), s = Ti.sanitizeText(s, a), n = n == null ? void 0 : n.map((f) => Ti.sanitizeText(f, a)), e2 = Ti.sanitizeText(e2, a), !r || !c.records.commits.has(r)) {
    const f = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw f.hash = {
      text: `cherryPick ${r} ${s}`,
      token: `cherryPick ${r} ${s}`,
      expected: ["cherry-pick abc"]
    }, f;
  }
  const d = c.records.commits.get(r);
  if (d === void 0 || !d)
    throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  if (e2 && !(Array.isArray(d.parents) && d.parents.includes(e2)))
    throw new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
  const o = d.branch;
  if (d.type === p.MERGE && !e2)
    throw new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
  if (!s || !c.records.commits.has(s)) {
    if (o === c.records.currBranch) {
      const g2 = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw g2.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g2;
    }
    const f = c.records.branches.get(c.records.currBranch);
    if (f === void 0 || !f) {
      const g2 = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`
      );
      throw g2.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g2;
    }
    const h = c.records.commits.get(f);
    if (h === void 0 || !h) {
      const g2 = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`
      );
      throw g2.hash = {
        text: `cherryPick ${r} ${s}`,
        token: `cherryPick ${r} ${s}`,
        expected: ["cherry-pick abc"]
      }, g2;
    }
    const $ = {
      id: c.records.seq + "-" + A(),
      message: `cherry-picked ${d == null ? void 0 : d.message} into ${c.records.currBranch}`,
      seq: c.records.seq++,
      parents: c.records.head == null ? [] : [c.records.head.id, d.id],
      branch: c.records.currBranch,
      type: p.CHERRY_PICK,
      tags: n ? n.filter(Boolean) : [
        `cherry-pick:${d.id}${d.type === p.MERGE ? `|parent:${e2}` : ""}`
      ]
    };
    c.records.head = $, c.records.commits.set($.id, $), c.records.branches.set(c.records.currBranch, $.id), N.debug(c.records.branches), N.debug("in cherryPick");
  }
}, "cherryPick");
var z = g(function(t2) {
  if (t2 = Ti.sanitizeText(t2, I()), c.records.branches.has(t2)) {
    c.records.currBranch = t2;
    const r = c.records.branches.get(c.records.currBranch);
    r === void 0 || !r ? c.records.head = null : c.records.head = c.records.commits.get(r) ?? null;
  } else {
    const r = new Error(
      `Trying to checkout branch which is not yet created. (Help try using "branch ${t2}")`
    );
    throw r.hash = {
      text: `checkout ${t2}`,
      token: `checkout ${t2}`,
      expected: [`branch ${t2}`]
    }, r;
  }
}, "checkout");
function H(t2, r, s) {
  const n = t2.indexOf(r);
  n === -1 ? t2.push(s) : t2.splice(n, 1, s);
}
g(H, "upsert");
function P(t2) {
  const r = t2.reduce((e2, a) => e2.seq > a.seq ? e2 : a, t2[0]);
  let s = "";
  t2.forEach(function(e2) {
    e2 === r ? s += "	*" : s += "	|";
  });
  const n = [s, r.id, r.seq];
  for (const e2 in c.records.branches)
    c.records.branches.get(e2) === r.id && n.push(e2);
  if (N.debug(n.join(" ")), r.parents && r.parents.length == 2 && r.parents[0] && r.parents[1]) {
    const e2 = c.records.commits.get(r.parents[0]);
    H(t2, r, e2), r.parents[1] && t2.push(c.records.commits.get(r.parents[1]));
  } else {
    if (r.parents.length == 0)
      return;
    if (r.parents[0]) {
      const e2 = c.records.commits.get(r.parents[0]);
      H(t2, r, e2);
    }
  }
  t2 = F(t2, (e2) => e2.id), P(t2);
}
g(P, "prettyPrintCommitHistory");
var pr = g(function() {
  N.debug(c.records.commits);
  const t2 = N2()[0];
  P([t2]);
}, "prettyPrint");
var mr = g(function() {
  c.reset(), Fb();
}, "clear");
var br = g(function() {
  return [...c.records.branchConfig.values()].map((r, s) => r.order !== null && r.order !== void 0 ? r : {
    ...r,
    order: parseFloat(`0.${s}`)
  }).sort((r, s) => (r.order ?? 0) - (s.order ?? 0)).map(({ name: r }) => ({ name: r }));
}, "getBranchesAsObjArray");
var wr = g(function() {
  return c.records.branches;
}, "getBranches");
var vr = g(function() {
  return c.records.commits;
}, "getCommits");
var N2 = g(function() {
  const t2 = [...c.records.commits.values()];
  return t2.forEach(function(r) {
    N.debug(r.id);
  }), t2.sort((r, s) => r.seq - s.seq), t2;
}, "getCommitsArray");
var Cr = g(function() {
  return c.records.currBranch;
}, "getCurrentBranch");
var Er = g(function() {
  return c.records.direction;
}, "getDirection");
var Tr = g(function() {
  return c.records.head;
}, "getHead");
var S = {
  commitType: p,
  getConfig: I,
  setDirection: lr,
  setOptions: $r,
  getOptions: fr,
  commit: gr,
  branch: yr,
  merge: ur,
  cherryPick: xr,
  checkout: z,
  //reset,
  prettyPrint: pr,
  clear: mr,
  getBranchesAsObjArray: br,
  getBranches: wr,
  getCommits: vr,
  getCommitsArray: N2,
  getCurrentBranch: Cr,
  getDirection: Er,
  getHead: Tr,
  setAccTitle: Ob,
  getAccTitle: Db,
  getAccDescription: Rb,
  setAccDescription: Ib,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb
};
var Br = g((t2, r) => {
  t(t2, r), t2.dir && r.setDirection(t2.dir);
  for (const s of t2.statements)
    Lr(s, r);
}, "populate");
var Lr = g((t2, r) => {
  const n = {
    Commit: g((e2) => r.commit(kr(e2)), "Commit"),
    Branch: g((e2) => r.branch(Mr(e2)), "Branch"),
    Merge: g((e2) => r.merge(Ir(e2)), "Merge"),
    Checkout: g((e2) => r.checkout(Rr(e2)), "Checkout"),
    CherryPicking: g((e2) => r.cherryPick(Gr(e2)), "CherryPicking")
  }[t2.$type];
  n ? n(t2) : N.error(`Unknown statement type: ${t2.$type}`);
}, "parseStatement");
var kr = g((t2) => ({
  id: t2.id,
  msg: t2.message ?? "",
  type: t2.type !== void 0 ? p[t2.type] : p.NORMAL,
  tags: t2.tags ?? void 0
}), "parseCommit");
var Mr = g((t2) => ({
  name: t2.name,
  order: t2.order ?? 0
}), "parseBranch");
var Ir = g((t2) => ({
  branch: t2.branch,
  id: t2.id ?? "",
  type: t2.type !== void 0 ? p[t2.type] : void 0,
  tags: t2.tags ?? void 0
}), "parseMerge");
var Rr = g((t2) => t2.branch, "parseCheckout");
var Gr = g((t2) => {
  var _a;
  return {
    id: t2.id,
    targetId: "",
    tags: ((_a = t2.tags) == null ? void 0 : _a.length) === 0 ? void 0 : t2.tags,
    parent: t2.parent
  };
}, "parseCherryPicking");
var Or = {
  parse: g(async (t2) => {
    const r = await Sy("gitGraph", t2);
    N.debug(r), Br(r, S);
  }, "parse")
};
var qr = gt();
var v = qr == null ? void 0 : qr.gitGraph;
var L = 10;
var k = 40;
var E = 4;
var T = 2;
var M = 8;
var b = /* @__PURE__ */ new Map();
var w = /* @__PURE__ */ new Map();
var O = 30;
var R = /* @__PURE__ */ new Map();
var q = [];
var B = 0;
var u = "LR";
var Ar = g(() => {
  b.clear(), w.clear(), R.clear(), B = 0, q = [], u = "LR";
}, "clear");
var W = g((t2) => {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return (typeof t2 == "string" ? t2.split(/\\n|\n|<br\s*\/?>/gi) : t2).forEach((n) => {
    const e2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    e2.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e2.setAttribute("dy", "1em"), e2.setAttribute("x", "0"), e2.setAttribute("class", "row"), e2.textContent = n.trim(), r.appendChild(e2);
  }), r;
}, "drawText");
var j = g((t2) => {
  let r, s, n;
  return u === "BT" ? (s = g((e2, a) => e2 <= a, "comparisonFunc"), n = 1 / 0) : (s = g((e2, a) => e2 >= a, "comparisonFunc"), n = 0), t2.forEach((e2) => {
    var _a, _b;
    const a = u === "TB" || u == "BT" ? (_a = w.get(e2)) == null ? void 0 : _a.y : (_b = w.get(e2)) == null ? void 0 : _b.x;
    a !== void 0 && s(a, n) && (r = e2, n = a);
  }), r;
}, "findClosestParent");
var _r = g((t2) => {
  let r = "", s = 1 / 0;
  return t2.forEach((n) => {
    const e2 = w.get(n).y;
    e2 <= s && (r = n, s = e2);
  }), r || void 0;
}, "findClosestParentBT");
var Hr = g((t2, r, s) => {
  let n = s, e2 = s;
  const a = [];
  t2.forEach((d) => {
    const o = r.get(d);
    if (!o)
      throw new Error(`Commit not found for key ${d}`);
    o.parents.length ? (n = Dr(o), e2 = Math.max(n, e2)) : a.push(o), Fr(o, n);
  }), n = e2, a.forEach((d) => {
    zr(d, n, s);
  }), t2.forEach((d) => {
    const o = r.get(d);
    if (o == null ? void 0 : o.parents.length) {
      const f = _r(o.parents);
      n = w.get(f).y - k, n <= e2 && (e2 = n);
      const h = b.get(o.branch).pos, $ = n - L;
      w.set(o.id, { x: h, y: $ });
    }
  });
}, "setParallelBTPos");
var Pr = g((t2) => {
  var _a;
  const r = j(t2.parents.filter((n) => n !== null));
  if (!r)
    throw new Error(`Closest parent not found for commit ${t2.id}`);
  const s = (_a = w.get(r)) == null ? void 0 : _a.y;
  if (s === void 0)
    throw new Error(`Closest parent position not found for commit ${t2.id}`);
  return s;
}, "findClosestParentPos");
var Dr = g((t2) => Pr(t2) + k, "calculateCommitPosition");
var Fr = g((t2, r) => {
  const s = b.get(t2.branch);
  if (!s)
    throw new Error(`Branch not found for commit ${t2.id}`);
  const n = s.pos, e2 = r + L;
  return w.set(t2.id, { x: n, y: e2 }), { x: n, y: e2 };
}, "setCommitPosition");
var zr = g((t2, r, s) => {
  const n = b.get(t2.branch);
  if (!n)
    throw new Error(`Branch not found for commit ${t2.id}`);
  const e2 = r + s, a = n.pos;
  w.set(t2.id, { x: a, y: e2 });
}, "setRootPosition");
var Nr = g((t2, r, s, n, e2, a) => {
  if (a === p.HIGHLIGHT)
    t2.append("rect").attr("x", s.x - 10).attr("y", s.y - 10).attr("width", 20).attr("height", 20).attr(
      "class",
      `commit ${r.id} commit-highlight${e2 % M} ${n}-outer`
    ), t2.append("rect").attr("x", s.x - 6).attr("y", s.y - 6).attr("width", 12).attr("height", 12).attr(
      "class",
      `commit ${r.id} commit${e2 % M} ${n}-inner`
    );
  else if (a === p.CHERRY_PICK)
    t2.append("circle").attr("cx", s.x).attr("cy", s.y).attr("r", 10).attr("class", `commit ${r.id} ${n}`), t2.append("circle").attr("cx", s.x - 3).attr("cy", s.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("circle").attr("cx", s.x + 3).attr("cy", s.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("line").attr("x1", s.x + 3).attr("y1", s.y + 1).attr("x2", s.x).attr("y2", s.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`), t2.append("line").attr("x1", s.x - 3).attr("y1", s.y + 1).attr("x2", s.x).attr("y2", s.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${n}`);
  else {
    const d = t2.append("circle");
    if (d.attr("cx", s.x), d.attr("cy", s.y), d.attr("r", r.type === p.MERGE ? 9 : 10), d.attr("class", `commit ${r.id} commit${e2 % M}`), a === p.MERGE) {
      const o = t2.append("circle");
      o.attr("cx", s.x), o.attr("cy", s.y), o.attr("r", 6), o.attr(
        "class",
        `commit ${n} ${r.id} commit${e2 % M}`
      );
    }
    a === p.REVERSE && t2.append("path").attr(
      "d",
      `M ${s.x - 5},${s.y - 5}L${s.x + 5},${s.y + 5}M${s.x - 5},${s.y + 5}L${s.x + 5},${s.y - 5}`
    ).attr("class", `commit ${n} ${r.id} commit${e2 % M}`);
  }
}, "drawCommitBullet");
var Sr = g((t2, r, s, n) => {
  var _a;
  if (r.type !== p.CHERRY_PICK && (r.customId && r.type === p.MERGE || r.type !== p.MERGE) && (v == null ? void 0 : v.showCommitLabel)) {
    const e2 = t2.append("g"), a = e2.insert("rect").attr("class", "commit-label-bkg"), d = e2.append("text").attr("x", n).attr("y", s.y + 25).attr("class", "commit-label").text(r.id), o = (_a = d.node()) == null ? void 0 : _a.getBBox();
    if (o && (a.attr("x", s.posWithOffset - o.width / 2 - T).attr("y", s.y + 13.5).attr("width", o.width + 2 * T).attr("height", o.height + 2 * T), u === "TB" || u === "BT" ? (a.attr("x", s.x - (o.width + 4 * E + 5)).attr("y", s.y - 12), d.attr("x", s.x - (o.width + 4 * E)).attr("y", s.y + o.height - 12)) : d.attr("x", s.posWithOffset - o.width / 2), v.rotateCommitLabel))
      if (u === "TB" || u === "BT")
        d.attr(
          "transform",
          "rotate(-45, " + s.x + ", " + s.y + ")"
        ), a.attr(
          "transform",
          "rotate(-45, " + s.x + ", " + s.y + ")"
        );
      else {
        const f = -7.5 - (o.width + 10) / 25 * 9.5, h = 10 + o.width / 25 * 8.5;
        e2.attr(
          "transform",
          "translate(" + f + ", " + h + ") rotate(-45, " + n + ", " + s.y + ")"
        );
      }
  }
}, "drawCommitLabel");
var Wr = g((t2, r, s, n) => {
  var _a;
  if (r.tags.length > 0) {
    let e2 = 0, a = 0, d = 0;
    const o = [];
    for (const f of r.tags.reverse()) {
      const h = t2.insert("polygon"), $ = t2.append("circle"), g2 = t2.append("text").attr("y", s.y - 16 - e2).attr("class", "tag-label").text(f), i = (_a = g2.node()) == null ? void 0 : _a.getBBox();
      if (!i)
        throw new Error("Tag bbox not found");
      a = Math.max(a, i.width), d = Math.max(d, i.height), g2.attr("x", s.posWithOffset - i.width / 2), o.push({
        tag: g2,
        hole: $,
        rect: h,
        yOffset: e2
      }), e2 += 20;
    }
    for (const { tag: f, hole: h, rect: $, yOffset: g2 } of o) {
      const i = d / 2, y = s.y - 19.2 - g2;
      if ($.attr("class", "tag-label-bkg").attr(
        "points",
        `
      ${n - a / 2 - E / 2},${y + T}  
      ${n - a / 2 - E / 2},${y - T}
      ${s.posWithOffset - a / 2 - E},${y - i - T}
      ${s.posWithOffset + a / 2 + E},${y - i - T}
      ${s.posWithOffset + a / 2 + E},${y + i + T}
      ${s.posWithOffset - a / 2 - E},${y + i + T}`
      ), h.attr("cy", y).attr("cx", n - a / 2 + E / 2).attr("r", 1.5).attr("class", "tag-hole"), u === "TB" || u === "BT") {
        const x = n + g2;
        $.attr("class", "tag-label-bkg").attr(
          "points",
          `
        ${s.x},${x + 2}
        ${s.x},${x - 2}
        ${s.x + L},${x - i - 2}
        ${s.x + L + a + 4},${x - i - 2}
        ${s.x + L + a + 4},${x + i + 2}
        ${s.x + L},${x + i + 2}`
        ).attr("transform", "translate(12,12) rotate(45, " + s.x + "," + n + ")"), h.attr("cx", s.x + E / 2).attr("cy", x).attr("transform", "translate(12,12) rotate(45, " + s.x + "," + n + ")"), f.attr("x", s.x + 5).attr("y", x + 3).attr("transform", "translate(14,14) rotate(45, " + s.x + "," + n + ")");
      }
    }
  }
}, "drawCommitTags");
var jr = g((t2) => {
  switch (t2.customType ?? t2.type) {
    case p.NORMAL:
      return "commit-normal";
    case p.REVERSE:
      return "commit-reverse";
    case p.HIGHLIGHT:
      return "commit-highlight";
    case p.MERGE:
      return "commit-merge";
    case p.CHERRY_PICK:
      return "commit-cherry-pick";
    default:
      return "commit-normal";
  }
}, "getCommitClassType");
var Yr = g((t2, r, s, n) => {
  const e2 = { x: 0, y: 0 };
  if (t2.parents.length > 0) {
    const a = j(t2.parents);
    if (a) {
      const d = n.get(a) ?? e2;
      return r === "TB" ? d.y + k : r === "BT" ? (n.get(t2.id) ?? e2).y - k : d.x + k;
    }
  } else
    return r === "TB" ? O : r === "BT" ? (n.get(t2.id) ?? e2).y - k : 0;
  return 0;
}, "calculatePosition");
var Kr = g((t2, r, s) => {
  var _a, _b;
  const n = u === "BT" && s ? r : r + L, e2 = u === "TB" || u === "BT" ? n : (_a = b.get(t2.branch)) == null ? void 0 : _a.pos, a = u === "TB" || u === "BT" ? (_b = b.get(t2.branch)) == null ? void 0 : _b.pos : n;
  if (a === void 0 || e2 === void 0)
    throw new Error(`Position were undefined for commit ${t2.id}`);
  return { x: a, y: e2, posWithOffset: n };
}, "getCommitPosition");
var D = g((t2, r, s) => {
  if (!v)
    throw new Error("GitGraph config not found");
  const n = t2.append("g").attr("class", "commit-bullets"), e2 = t2.append("g").attr("class", "commit-labels");
  let a = u === "TB" || u === "BT" ? O : 0;
  const d = [...r.keys()], o = (v == null ? void 0 : v.parallelCommits) ?? false, f = g(($, g2) => {
    var _a, _b;
    const i = (_a = r.get($)) == null ? void 0 : _a.seq, y = (_b = r.get(g2)) == null ? void 0 : _b.seq;
    return i !== void 0 && y !== void 0 ? i - y : 0;
  }, "sortKeys");
  let h = d.sort(f);
  u === "BT" && (o && Hr(h, r, a), h = h.reverse()), h.forEach(($) => {
    var _a;
    const g2 = r.get($);
    if (!g2)
      throw new Error(`Commit not found for key ${$}`);
    o && (a = Yr(g2, u, a, w));
    const i = Kr(g2, a, o);
    if (s) {
      const y = jr(g2), x = g2.customType ?? g2.type, _ = ((_a = b.get(g2.branch)) == null ? void 0 : _a.index) ?? 0;
      Nr(n, g2, i, y, _, x), Sr(e2, g2, i, a), Wr(e2, g2, i, a);
    }
    u === "TB" || u === "BT" ? w.set(g2.id, { x: i.x, y: i.posWithOffset }) : w.set(g2.id, { x: i.posWithOffset, y: i.y }), a = u === "BT" && o ? a + k : a + k + L, a > B && (B = a);
  });
}, "drawCommits");
var Ur = g((t2, r, s, n, e2) => {
  const d = (u === "TB" || u === "BT" ? s.x < n.x : s.y < n.y) ? r.branch : t2.branch, o = g((h) => h.branch === d, "isOnBranchToGetCurve"), f = g((h) => h.seq > t2.seq && h.seq < r.seq, "isBetweenCommits");
  return [...e2.values()].some((h) => f(h) && o(h));
}, "shouldRerouteArrow");
var G = g((t2, r, s = 0) => {
  const n = t2 + Math.abs(t2 - r) / 2;
  if (s > 5)
    return n;
  if (q.every((d) => Math.abs(d - n) >= 10))
    return q.push(n), n;
  const a = Math.abs(t2 - r);
  return G(t2, r - a / 5, s + 1);
}, "findLane");
var Vr = g((t2, r, s, n) => {
  var _a, _b, _c, _d, _e;
  const e2 = w.get(r.id), a = w.get(s.id);
  if (e2 === void 0 || a === void 0)
    throw new Error(`Commit positions not found for commits ${r.id} and ${s.id}`);
  const d = Ur(r, s, e2, a, n);
  let o = "", f = "", h = 0, $ = 0, g2 = (_a = b.get(s.branch)) == null ? void 0 : _a.index;
  s.type === p.MERGE && r.id !== s.parents[0] && (g2 = (_b = b.get(r.branch)) == null ? void 0 : _b.index);
  let i;
  if (d) {
    o = "A 10 10, 0, 0, 0,", f = "A 10 10, 0, 0, 1,", h = 10, $ = 10;
    const y = e2.y < a.y ? G(e2.y, a.y) : G(a.y, e2.y), x = e2.x < a.x ? G(e2.x, a.x) : G(a.x, e2.x);
    u === "TB" ? e2.x < a.x ? i = `M ${e2.x} ${e2.y} L ${x - h} ${e2.y} ${f} ${x} ${e2.y + $} L ${x} ${a.y - h} ${o} ${x + $} ${a.y} L ${a.x} ${a.y}` : (g2 = (_c = b.get(r.branch)) == null ? void 0 : _c.index, i = `M ${e2.x} ${e2.y} L ${x + h} ${e2.y} ${o} ${x} ${e2.y + $} L ${x} ${a.y - h} ${f} ${x - $} ${a.y} L ${a.x} ${a.y}`) : u === "BT" ? e2.x < a.x ? i = `M ${e2.x} ${e2.y} L ${x - h} ${e2.y} ${o} ${x} ${e2.y - $} L ${x} ${a.y + h} ${f} ${x + $} ${a.y} L ${a.x} ${a.y}` : (g2 = (_d = b.get(r.branch)) == null ? void 0 : _d.index, i = `M ${e2.x} ${e2.y} L ${x + h} ${e2.y} ${f} ${x} ${e2.y - $} L ${x} ${a.y + h} ${o} ${x - $} ${a.y} L ${a.x} ${a.y}`) : e2.y < a.y ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${y - h} ${o} ${e2.x + $} ${y} L ${a.x - h} ${y} ${f} ${a.x} ${y + $} L ${a.x} ${a.y}` : (g2 = (_e = b.get(r.branch)) == null ? void 0 : _e.index, i = `M ${e2.x} ${e2.y} L ${e2.x} ${y + h} ${f} ${e2.x + $} ${y} L ${a.x - h} ${y} ${o} ${a.x} ${y - $} L ${a.x} ${a.y}`);
  } else
    o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, u === "TB" ? (e2.x < a.x && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${o} ${e2.x + $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${f} ${a.x} ${e2.y + $} L ${a.x} ${a.y}`), e2.x > a.x && (o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${f} ${e2.x - $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x + h} ${e2.y} ${o} ${a.x} ${e2.y + $} L ${a.x} ${a.y}`), e2.x === a.x && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`)) : u === "BT" ? (e2.x < a.x && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${f} ${e2.x + $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}`), e2.x > a.x && (o = "A 20 20, 0, 0, 0,", f = "A 20 20, 0, 0, 1,", h = 20, $ = 20, s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${o} ${e2.x - $} ${a.y} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}`), e2.x === a.x && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`)) : (e2.y < a.y && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${f} ${a.x} ${e2.y + $} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y - h} ${o} ${e2.x + $} ${a.y} L ${a.x} ${a.y}`), e2.y > a.y && (s.type === p.MERGE && r.id !== s.parents[0] ? i = `M ${e2.x} ${e2.y} L ${a.x - h} ${e2.y} ${o} ${a.x} ${e2.y - $} L ${a.x} ${a.y}` : i = `M ${e2.x} ${e2.y} L ${e2.x} ${a.y + h} ${f} ${e2.x + $} ${a.y} L ${a.x} ${a.y}`), e2.y === a.y && (i = `M ${e2.x} ${e2.y} L ${a.x} ${a.y}`));
  if (i === void 0)
    throw new Error("Line definition not found");
  t2.append("path").attr("d", i).attr("class", "arrow arrow" + g2 % M);
}, "drawArrow");
var Xr = g((t2, r) => {
  const s = t2.append("g").attr("class", "commit-arrows");
  [...r.keys()].forEach((n) => {
    const e2 = r.get(n);
    e2.parents && e2.parents.length > 0 && e2.parents.forEach((a) => {
      Vr(s, r.get(a), e2, r);
    });
  });
}, "drawArrows");
var Jr = g((t2, r) => {
  const s = t2.append("g");
  r.forEach((n, e2) => {
    var _a;
    const a = e2 % M, d = (_a = b.get(n.name)) == null ? void 0 : _a.pos;
    if (d === void 0)
      throw new Error(`Position not found for branch ${n.name}`);
    const o = s.append("line");
    o.attr("x1", 0), o.attr("y1", d), o.attr("x2", B), o.attr("y2", d), o.attr("class", "branch branch" + a), u === "TB" ? (o.attr("y1", O), o.attr("x1", d), o.attr("y2", B), o.attr("x2", d)) : u === "BT" && (o.attr("y1", B), o.attr("x1", d), o.attr("y2", O), o.attr("x2", d)), q.push(d);
    const f = n.name, h = W(f), $ = s.insert("rect"), i = s.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + a);
    i.node().appendChild(h);
    const y = h.getBBox();
    $.attr("class", "branchLabelBkg label" + a).attr("rx", 4).attr("ry", 4).attr("x", -y.width - 4 - ((v == null ? void 0 : v.rotateCommitLabel) === true ? 30 : 0)).attr("y", -y.height / 2 + 8).attr("width", y.width + 18).attr("height", y.height + 4), i.attr(
      "transform",
      "translate(" + (-y.width - 14 - ((v == null ? void 0 : v.rotateCommitLabel) === true ? 30 : 0)) + ", " + (d - y.height / 2 - 1) + ")"
    ), u === "TB" ? ($.attr("x", d - y.width / 2 - 10).attr("y", 0), i.attr("transform", "translate(" + (d - y.width / 2 - 5) + ", 0)")) : u === "BT" ? ($.attr("x", d - y.width / 2 - 10).attr("y", B), i.attr("transform", "translate(" + (d - y.width / 2 - 5) + ", " + B + ")")) : $.attr("transform", "translate(-19, " + (d - y.height / 2) + ")");
  });
}, "drawBranches");
var Qr = g(function(t2, r, s, n, e2) {
  return b.set(t2, { pos: r, index: s }), r += 50 + (e2 ? 40 : 0) + (u === "TB" || u === "BT" ? n.width / 2 : 0), r;
}, "setBranchPosition");
var Zr = g(function(t2, r, s, n) {
  if (Ar(), N.debug("in gitgraph renderer", t2 + `
`, "id:", r, s), !v)
    throw new Error("GitGraph config not found");
  const e2 = v.rotateCommitLabel ?? false, a = n.db;
  R = a.getCommits();
  const d = a.getBranchesAsObjArray();
  u = a.getDirection();
  const o = dt(`[id="${r}"]`);
  let f = 0;
  d.forEach((h, $) => {
    var _a;
    const g2 = W(h.name), i = o.append("g"), y = i.insert("g").attr("class", "branchLabel"), x = y.insert("g").attr("class", "label branch-label");
    (_a = x.node()) == null ? void 0 : _a.appendChild(g2);
    const _ = g2.getBBox();
    f = Qr(h.name, f, $, _, e2), x.remove(), y.remove(), i.remove();
  }), D(o, R, false), v.showBranches && Jr(o, d), Xr(o, R), D(o, R, true), Ae.insertTitle(
    o,
    "gitTitleText",
    v.titleTopMargin ?? 0,
    a.getDiagramTitle()
  ), Wb(
    void 0,
    o,
    v.diagramPadding,
    v.useMaxWidth
  );
}, "draw");
var re = {
  draw: Zr
};
var ee = g((t2) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (r) => `
        .branch-label${r} { fill: ${t2["gitBranchLabel" + r]}; }
        .commit${r} { stroke: ${t2["git" + r]}; fill: ${t2["git" + r]}; }
        .commit-highlight${r} { stroke: ${t2["gitInv" + r]}; fill: ${t2["gitInv" + r]}; }
        .label${r}  { fill: ${t2["git" + r]}; }
        .arrow${r} { stroke: ${t2["git" + r]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t2.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t2.commitLabelFontSize}; fill: ${t2.commitLabelColor};}
  .commit-label-bkg { font-size: ${t2.commitLabelFontSize}; fill: ${t2.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t2.tagLabelFontSize}; fill: ${t2.tagLabelColor};}
  .tag-label-bkg { fill: ${t2.tagLabelBackground}; stroke: ${t2.tagLabelBorder}; }
  .tag-hole { fill: ${t2.textColor}; }

  .commit-merge {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
  }
  .commit-reverse {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t2.primaryColor};
    fill: ${t2.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor};
  }
`, "getStyles");
var te = ee;
var ce = {
  parser: Or,
  db: S,
  renderer: re,
  styles: te
};
export {
  ce as diagram
};
//# sourceMappingURL=gitGraphDiagram-GW3U2K7C-DzFCvp_L-E7UKB4KS.js.map
