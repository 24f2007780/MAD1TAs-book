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
  g,
  gc,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/diagram-5UYTHUR4-BExwa3aw.js
var m = {
  packet: []
};
var v = structuredClone(m);
var L = Cf.packet;
var Y = g(() => {
  const t2 = gc({
    ...L,
    ...oe().packet
  });
  return t2.showBits && (t2.paddingY += 10), t2;
}, "getConfig");
var H = g(() => v.packet, "getPacket");
var I = g((t2) => {
  t2.length > 0 && v.packet.push(t2);
}, "pushWord");
var M = g(() => {
  Fb(), v = structuredClone(m);
}, "clear");
var u = {
  pushWord: I,
  getPacket: H,
  getConfig: Y,
  clear: M,
  setAccTitle: Ob,
  getAccTitle: Db,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  getAccDescription: Rb,
  setAccDescription: Ib
};
var O = 1e4;
var q = g((t2) => {
  t(t2, u);
  let e = -1, o = [], s = 1;
  const { bitsPerRow: n } = u.getConfig();
  for (let { start: a, end: r, bits: c, label: f } of t2.blocks) {
    if (a !== void 0 && r !== void 0 && r < a)
      throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);
    if (a ?? (a = e + 1), a !== e + 1)
      throw new Error(
        `Packet block ${a} - ${r ?? a} is not contiguous. It should start from ${e + 1}.`
      );
    if (c === 0)
      throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);
    for (r ?? (r = a + (c ?? 1) - 1), c ?? (c = r - a + 1), e = r, N.debug(`Packet block ${a} - ${e} with label ${f}`); o.length <= n + 1 && u.getPacket().length < O; ) {
      const [d, p] = G({ start: a, end: r, bits: c, label: f }, s, n);
      if (o.push(d), d.end + 1 === s * n && (u.pushWord(o), o = [], s++), !p)
        break;
      ({ start: a, end: r, bits: c, label: f } = p);
    }
  }
  u.pushWord(o);
}, "populate");
var G = g((t2, e, o) => {
  if (t2.start === void 0)
    throw new Error("start should have been set during first phase");
  if (t2.end === void 0)
    throw new Error("end should have been set during first phase");
  if (t2.start > t2.end)
    throw new Error(`Block start ${t2.start} is greater than block end ${t2.end}.`);
  if (t2.end + 1 <= e * o)
    return [t2, void 0];
  const s = e * o - 1, n = e * o;
  return [
    {
      start: t2.start,
      end: s,
      label: t2.label,
      bits: s - t2.start
    },
    {
      start: n,
      end: t2.end,
      label: t2.label,
      bits: t2.end - n
    }
  ];
}, "getNextFittingBlock");
var K = {
  parse: g(async (t2) => {
    const e = await Sy("packet", t2);
    N.debug(e), q(e);
  }, "parse")
};
var R = g((t2, e, o, s) => {
  const n = s.db, a = n.getConfig(), { rowHeight: r, paddingY: c, bitWidth: f, bitsPerRow: d } = a, p = n.getPacket(), l = n.getDiagramTitle(), k = r + c, g2 = k * (p.length + 1) - (l ? 0 : r), b = f * d + 2, h = XB(e);
  h.attr("viewbox", `0 0 ${b} ${g2}`), $f(h, g2, b, a.useMaxWidth);
  for (const [C, $] of p.entries())
    U(h, $, C, a);
  h.append("text").text(l).attr("x", b / 2).attr("y", g2 - k / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw");
var U = g((t2, e, o, { rowHeight: s, paddingX: n, paddingY: a, bitWidth: r, bitsPerRow: c, showBits: f }) => {
  const d = t2.append("g"), p = o * (s + a) + a;
  for (const l of e) {
    const k = l.start % c * r + 1, g2 = (l.end - l.start + 1) * r - n;
    if (d.append("rect").attr("x", k).attr("y", p).attr("width", g2).attr("height", s).attr("class", "packetBlock"), d.append("text").attr("x", k + g2 / 2).attr("y", p + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(l.label), !f)
      continue;
    const b = l.end === l.start, h = p - 2;
    d.append("text").attr("x", k + (b ? g2 / 2 : 0)).attr("y", h).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", b ? "middle" : "start").text(l.start), b || d.append("text").attr("x", k + g2).attr("y", h).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(l.end);
  }
}, "drawWord");
var X = { draw: R };
var j = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
};
var J = g(({ packet: t2 } = {}) => {
  const e = gc(j, t2);
  return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
}, "styles");
var tt = {
  parser: K,
  db: u,
  renderer: X,
  styles: J
};
export {
  tt as diagram
};
//# sourceMappingURL=diagram-5UYTHUR4-BExwa3aw-ZQHP5W2O.js.map
