import {
  Sy
} from "./chunk-YIBNAT2Y.js";
import "./chunk-ZHTCZNWP.js";
import "./chunk-ZFVRZDKL.js";
import "./chunk-D5X4WG6P.js";
import {
  $f,
  Lu,
  N,
  XB,
  g
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/infoDiagram-LHK5PUON-nE-pCc48.js
var v = {
  parse: g(async (r) => {
    const a = await Sy("info", r);
    N.debug(a);
  }, "parse")
};
var d = {
  version: Lu.version + ""
};
var c = g(() => d.version, "getVersion");
var m = {
  getVersion: c
};
var l = g((r, a, n) => {
  N.debug(`rendering info diagram
` + r);
  const t = XB(a);
  $f(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
var f = { draw: l };
var b = {
  parser: v,
  db: m,
  renderer: f
};
export {
  b as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-nE-pCc48-CMQWIOG7.js.map
