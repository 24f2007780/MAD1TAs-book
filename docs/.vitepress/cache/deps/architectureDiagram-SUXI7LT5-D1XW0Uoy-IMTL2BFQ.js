import {
  ea
} from "./chunk-WMQ6IM3A.js";
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
  Ab,
  BT,
  Cf,
  Db,
  Fb,
  Ib,
  In,
  LT,
  N,
  Nb,
  Ob,
  Pb,
  Rb,
  XB,
  dr,
  dt,
  g,
  gc,
  gt,
  oe,
  yx
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/architectureDiagram-SUXI7LT5-D1XW0Uoy.js
var he = { exports: {} };
var fe = { exports: {} };
var ce = { exports: {} };
var dr2 = ce.exports;
var xe;
function vr() {
  return xe || (xe = 1, function(C, X) {
    (function(P, L) {
      C.exports = L();
    })(dr2, function() {
      return (
        /******/
        function(M) {
          var P = {};
          function L(g2) {
            if (P[g2])
              return P[g2].exports;
            var h = P[g2] = {
              /******/
              i: g2,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return M[g2].call(h.exports, h, h.exports, L), h.l = true, h.exports;
          }
          return L.m = M, L.c = P, L.i = function(g2) {
            return g2;
          }, L.d = function(g2, h, a) {
            L.o(g2, h) || Object.defineProperty(g2, h, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: a
              /******/
            });
          }, L.n = function(g2) {
            var h = g2 && g2.__esModule ? (
              /******/
              function() {
                return g2.default;
              }
            ) : (
              /******/
              function() {
                return g2;
              }
            );
            return L.d(h, "a", h), h;
          }, L.o = function(g2, h) {
            return Object.prototype.hasOwnProperty.call(g2, h);
          }, L.p = "", L(L.s = 28);
        }([
          /* 0 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.QUALITY = 1, g2.DEFAULT_CREATE_BENDS_AS_NEEDED = false, g2.DEFAULT_INCREMENTAL = false, g2.DEFAULT_ANIMATION_ON_LAYOUT = true, g2.DEFAULT_ANIMATION_DURING_LAYOUT = false, g2.DEFAULT_ANIMATION_PERIOD = 50, g2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, g2.DEFAULT_GRAPH_MARGIN = 15, g2.NODE_DIMENSIONS_INCLUDE_LABELS = false, g2.SIMPLE_NODE_SIZE = 40, g2.SIMPLE_NODE_HALF_SIZE = g2.SIMPLE_NODE_SIZE / 2, g2.EMPTY_COMPOUND_NODE_SIZE = 40, g2.MIN_EDGE_LENGTH = 1, g2.WORLD_BOUNDARY = 1e6, g2.INITIAL_WORLD_BOUNDARY = g2.WORLD_BOUNDARY / 1e3, g2.WORLD_CENTER_X = 1200, g2.WORLD_CENTER_Y = 900, M.exports = g2;
          },
          /* 1 */
          /***/
          function(M, P, L) {
            var g2 = L(2), h = L(8), a = L(9);
            function r(f, i, v) {
              g2.call(this, v), this.isOverlapingSourceAndTarget = false, this.vGraphObject = v, this.bendpoints = [], this.source = f, this.target = i;
            }
            r.prototype = Object.create(g2.prototype);
            for (var e2 in g2)
              r[e2] = g2[e2];
            r.prototype.getSource = function() {
              return this.source;
            }, r.prototype.getTarget = function() {
              return this.target;
            }, r.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, r.prototype.getLength = function() {
              return this.length;
            }, r.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, r.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, r.prototype.getLca = function() {
              return this.lca;
            }, r.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, r.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, r.prototype.getOtherEnd = function(f) {
              if (this.source === f)
                return this.target;
              if (this.target === f)
                return this.source;
              throw "Node is not incident with this edge";
            }, r.prototype.getOtherEndInGraph = function(f, i) {
              for (var v = this.getOtherEnd(f), t2 = i.getGraphManager().getRoot(); ; ) {
                if (v.getOwner() == i)
                  return v;
                if (v.getOwner() == t2)
                  break;
                v = v.getOwner().getParent();
              }
              return null;
            }, r.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = h.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, r.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, M.exports = r;
          },
          /* 2 */
          /***/
          function(M, P, L) {
            function g2(h) {
              this.vGraphObject = h;
            }
            M.exports = g2;
          },
          /* 3 */
          /***/
          function(M, P, L) {
            var g2 = L(2), h = L(10), a = L(13), r = L(0), e2 = L(16), f = L(5);
            function i(t2, o, s, c) {
              s == null && c == null && (c = o), g2.call(this, c), t2.graphManager != null && (t2 = t2.graphManager), this.estimatedSize = h.MIN_VALUE, this.inclusionTreeDepth = h.MAX_VALUE, this.vGraphObject = c, this.edges = [], this.graphManager = t2, s != null && o != null ? this.rect = new a(o.x, o.y, s.width, s.height) : this.rect = new a();
            }
            i.prototype = Object.create(g2.prototype);
            for (var v in g2)
              i[v] = g2[v];
            i.prototype.getEdges = function() {
              return this.edges;
            }, i.prototype.getChild = function() {
              return this.child;
            }, i.prototype.getOwner = function() {
              return this.owner;
            }, i.prototype.getWidth = function() {
              return this.rect.width;
            }, i.prototype.setWidth = function(t2) {
              this.rect.width = t2;
            }, i.prototype.getHeight = function() {
              return this.rect.height;
            }, i.prototype.setHeight = function(t2) {
              this.rect.height = t2;
            }, i.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, i.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, i.prototype.getCenter = function() {
              return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, i.prototype.getLocation = function() {
              return new f(this.rect.x, this.rect.y);
            }, i.prototype.getRect = function() {
              return this.rect;
            }, i.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, i.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, i.prototype.setRect = function(t2, o) {
              this.rect.x = t2.x, this.rect.y = t2.y, this.rect.width = o.width, this.rect.height = o.height;
            }, i.prototype.setCenter = function(t2, o) {
              this.rect.x = t2 - this.rect.width / 2, this.rect.y = o - this.rect.height / 2;
            }, i.prototype.setLocation = function(t2, o) {
              this.rect.x = t2, this.rect.y = o;
            }, i.prototype.moveBy = function(t2, o) {
              this.rect.x += t2, this.rect.y += o;
            }, i.prototype.getEdgeListToNode = function(t2) {
              var o = [], s = this;
              return s.edges.forEach(function(c) {
                if (c.target == t2) {
                  if (c.source != s) throw "Incorrect edge source!";
                  o.push(c);
                }
              }), o;
            }, i.prototype.getEdgesBetween = function(t2) {
              var o = [], s = this;
              return s.edges.forEach(function(c) {
                if (!(c.source == s || c.target == s)) throw "Incorrect edge source and/or target";
                (c.target == t2 || c.source == t2) && o.push(c);
              }), o;
            }, i.prototype.getNeighborsList = function() {
              var t2 = /* @__PURE__ */ new Set(), o = this;
              return o.edges.forEach(function(s) {
                if (s.source == o)
                  t2.add(s.target);
                else {
                  if (s.target != o)
                    throw "Incorrect incidency!";
                  t2.add(s.source);
                }
              }), t2;
            }, i.prototype.withChildren = function() {
              var t2 = /* @__PURE__ */ new Set(), o, s;
              if (t2.add(this), this.child != null)
                for (var c = this.child.getNodes(), l = 0; l < c.length; l++)
                  o = c[l], s = o.withChildren(), s.forEach(function(T) {
                    t2.add(T);
                  });
              return t2;
            }, i.prototype.getNoOfChildren = function() {
              var t2 = 0, o;
              if (this.child == null)
                t2 = 1;
              else
                for (var s = this.child.getNodes(), c = 0; c < s.length; c++)
                  o = s[c], t2 += o.getNoOfChildren();
              return t2 == 0 && (t2 = 1), t2;
            }, i.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, i.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, i.prototype.scatter = function() {
              var t2, o, s = -r.INITIAL_WORLD_BOUNDARY, c = r.INITIAL_WORLD_BOUNDARY;
              t2 = r.WORLD_CENTER_X + e2.nextDouble() * (c - s) + s;
              var l = -r.INITIAL_WORLD_BOUNDARY, T = r.INITIAL_WORLD_BOUNDARY;
              o = r.WORLD_CENTER_Y + e2.nextDouble() * (T - l) + l, this.rect.x = t2, this.rect.y = o;
            }, i.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t2 = this.getChild();
                if (t2.updateBounds(true), this.rect.x = t2.getLeft(), this.rect.y = t2.getTop(), this.setWidth(t2.getRight() - t2.getLeft()), this.setHeight(t2.getBottom() - t2.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var o = t2.getRight() - t2.getLeft(), s = t2.getBottom() - t2.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(o + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > o ? (this.rect.x -= (this.labelWidth - o) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(o + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(s + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > s ? (this.rect.y -= (this.labelHeight - s) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(s + this.labelHeight));
                }
              }
            }, i.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == h.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, i.prototype.transform = function(t2) {
              var o = this.rect.x;
              o > r.WORLD_BOUNDARY ? o = r.WORLD_BOUNDARY : o < -r.WORLD_BOUNDARY && (o = -r.WORLD_BOUNDARY);
              var s = this.rect.y;
              s > r.WORLD_BOUNDARY ? s = r.WORLD_BOUNDARY : s < -r.WORLD_BOUNDARY && (s = -r.WORLD_BOUNDARY);
              var c = new f(o, s), l = t2.inverseTransformPoint(c);
              this.setLocation(l.x, l.y);
            }, i.prototype.getLeft = function() {
              return this.rect.x;
            }, i.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, i.prototype.getTop = function() {
              return this.rect.y;
            }, i.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, i.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, M.exports = i;
          },
          /* 4 */
          /***/
          function(M, P, L) {
            var g2 = L(0);
            function h() {
            }
            for (var a in g2)
              h[a] = g2[a];
            h.MAX_ITERATIONS = 2500, h.DEFAULT_EDGE_LENGTH = 50, h.DEFAULT_SPRING_STRENGTH = 0.45, h.DEFAULT_REPULSION_STRENGTH = 4500, h.DEFAULT_GRAVITY_STRENGTH = 0.4, h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, h.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, h.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, h.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, h.COOLING_ADAPTATION_FACTOR = 0.33, h.ADAPTATION_LOWER_NODE_LIMIT = 1e3, h.ADAPTATION_UPPER_NODE_LIMIT = 5e3, h.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, h.MAX_NODE_DISPLACEMENT = h.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, h.MIN_REPULSION_DIST = h.DEFAULT_EDGE_LENGTH / 10, h.CONVERGENCE_CHECK_PERIOD = 100, h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, h.MIN_EDGE_LENGTH = 1, h.GRID_CALCULATION_CHECK_PERIOD = 10, M.exports = h;
          },
          /* 5 */
          /***/
          function(M, P, L) {
            function g2(h, a) {
              h == null && a == null ? (this.x = 0, this.y = 0) : (this.x = h, this.y = a);
            }
            g2.prototype.getX = function() {
              return this.x;
            }, g2.prototype.getY = function() {
              return this.y;
            }, g2.prototype.setX = function(h) {
              this.x = h;
            }, g2.prototype.setY = function(h) {
              this.y = h;
            }, g2.prototype.getDifference = function(h) {
              return new DimensionD(this.x - h.x, this.y - h.y);
            }, g2.prototype.getCopy = function() {
              return new g2(this.x, this.y);
            }, g2.prototype.translate = function(h) {
              return this.x += h.width, this.y += h.height, this;
            }, M.exports = g2;
          },
          /* 6 */
          /***/
          function(M, P, L) {
            var g2 = L(2), h = L(10), a = L(0), r = L(7), e2 = L(3), f = L(1), i = L(13), v = L(12), t2 = L(11);
            function o(c, l, T) {
              g2.call(this, T), this.estimatedSize = h.MIN_VALUE, this.margin = a.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = c, l != null && l instanceof r ? this.graphManager = l : l != null && l instanceof Layout && (this.graphManager = l.graphManager);
            }
            o.prototype = Object.create(g2.prototype);
            for (var s in g2)
              o[s] = g2[s];
            o.prototype.getNodes = function() {
              return this.nodes;
            }, o.prototype.getEdges = function() {
              return this.edges;
            }, o.prototype.getGraphManager = function() {
              return this.graphManager;
            }, o.prototype.getParent = function() {
              return this.parent;
            }, o.prototype.getLeft = function() {
              return this.left;
            }, o.prototype.getRight = function() {
              return this.right;
            }, o.prototype.getTop = function() {
              return this.top;
            }, o.prototype.getBottom = function() {
              return this.bottom;
            }, o.prototype.isConnected = function() {
              return this.isConnected;
            }, o.prototype.add = function(c, l, T) {
              if (l == null && T == null) {
                var u = c;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(u) > -1)
                  throw "Node already in graph!";
                return u.owner = this, this.getNodes().push(u), u;
              } else {
                var d = c;
                if (!(this.getNodes().indexOf(l) > -1 && this.getNodes().indexOf(T) > -1))
                  throw "Source or target not in graph!";
                if (!(l.owner == T.owner && l.owner == this))
                  throw "Both owners must be this graph!";
                return l.owner != T.owner ? null : (d.source = l, d.target = T, d.isInterGraph = false, this.getEdges().push(d), l.edges.push(d), T != l && T.edges.push(d), d);
              }
            }, o.prototype.remove = function(c) {
              var l = c;
              if (c instanceof e2) {
                if (l == null)
                  throw "Node is null!";
                if (!(l.owner != null && l.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var T = l.edges.slice(), u, d = T.length, N2 = 0; N2 < d; N2++)
                  u = T[N2], u.isInterGraph ? this.graphManager.remove(u) : u.source.owner.remove(u);
                var F = this.nodes.indexOf(l);
                if (F == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(F, 1);
              } else if (c instanceof f) {
                var u = c;
                if (u == null)
                  throw "Edge is null!";
                if (!(u.source != null && u.target != null))
                  throw "Source and/or target is null!";
                if (!(u.source.owner != null && u.target.owner != null && u.source.owner == this && u.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var A = u.source.edges.indexOf(u), G = u.target.edges.indexOf(u);
                if (!(A > -1 && G > -1))
                  throw "Source and/or target doesn't know this edge!";
                u.source.edges.splice(A, 1), u.target != u.source && u.target.edges.splice(G, 1);
                var F = u.source.owner.getEdges().indexOf(u);
                if (F == -1)
                  throw "Not in owner's edge list!";
                u.source.owner.getEdges().splice(F, 1);
              }
            }, o.prototype.updateLeftTop = function() {
              for (var c = h.MAX_VALUE, l = h.MAX_VALUE, T, u, d, N2 = this.getNodes(), F = N2.length, A = 0; A < F; A++) {
                var G = N2[A];
                T = G.getTop(), u = G.getLeft(), c > T && (c = T), l > u && (l = u);
              }
              return c == h.MAX_VALUE ? null : (N2[0].getParent().paddingLeft != null ? d = N2[0].getParent().paddingLeft : d = this.margin, this.left = l - d, this.top = c - d, new v(this.left, this.top));
            }, o.prototype.updateBounds = function(c) {
              for (var l = h.MAX_VALUE, T = -h.MAX_VALUE, u = h.MAX_VALUE, d = -h.MAX_VALUE, N2, F, A, G, B, U = this.nodes, K = U.length, D = 0; D < K; D++) {
                var at = U[D];
                c && at.child != null && at.updateBounds(), N2 = at.getLeft(), F = at.getRight(), A = at.getTop(), G = at.getBottom(), l > N2 && (l = N2), T < F && (T = F), u > A && (u = A), d < G && (d = G);
              }
              var n = new i(l, u, T - l, d - u);
              l == h.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), U[0].getParent().paddingLeft != null ? B = U[0].getParent().paddingLeft : B = this.margin, this.left = n.x - B, this.right = n.x + n.width + B, this.top = n.y - B, this.bottom = n.y + n.height + B;
            }, o.calculateBounds = function(c) {
              for (var l = h.MAX_VALUE, T = -h.MAX_VALUE, u = h.MAX_VALUE, d = -h.MAX_VALUE, N2, F, A, G, B = c.length, U = 0; U < B; U++) {
                var K = c[U];
                N2 = K.getLeft(), F = K.getRight(), A = K.getTop(), G = K.getBottom(), l > N2 && (l = N2), T < F && (T = F), u > A && (u = A), d < G && (d = G);
              }
              var D = new i(l, u, T - l, d - u);
              return D;
            }, o.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, o.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == h.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, o.prototype.calcEstimatedSize = function() {
              for (var c = 0, l = this.nodes, T = l.length, u = 0; u < T; u++) {
                var d = l[u];
                c += d.calcEstimatedSize();
              }
              return c == 0 ? this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = c / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, o.prototype.updateConnected = function() {
              var c = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var l = new t2(), T = /* @__PURE__ */ new Set(), u = this.nodes[0], d, N2, F = u.withChildren();
              for (F.forEach(function(D) {
                l.push(D), T.add(D);
              }); l.length !== 0; ) {
                u = l.shift(), d = u.getEdges();
                for (var A = d.length, G = 0; G < A; G++) {
                  var B = d[G];
                  if (N2 = B.getOtherEndInGraph(u, this), N2 != null && !T.has(N2)) {
                    var U = N2.withChildren();
                    U.forEach(function(D) {
                      l.push(D), T.add(D);
                    });
                  }
                }
              }
              if (this.isConnected = false, T.size >= this.nodes.length) {
                var K = 0;
                T.forEach(function(D) {
                  D.owner == c && K++;
                }), K == this.nodes.length && (this.isConnected = true);
              }
            }, M.exports = o;
          },
          /* 7 */
          /***/
          function(M, P, L) {
            var g2, h = L(1);
            function a(r) {
              g2 = L(6), this.layout = r, this.graphs = [], this.edges = [];
            }
            a.prototype.addRoot = function() {
              var r = this.layout.newGraph(), e2 = this.layout.newNode(null), f = this.add(r, e2);
              return this.setRootGraph(f), this.rootGraph;
            }, a.prototype.add = function(r, e2, f, i, v) {
              if (f == null && i == null && v == null) {
                if (r == null)
                  throw "Graph is null!";
                if (e2 == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(r) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(r), r.parent != null)
                  throw "Already has a parent!";
                if (e2.child != null)
                  throw "Already has a child!";
                return r.parent = e2, e2.child = r, r;
              } else {
                v = f, i = e2, f = r;
                var t2 = i.getOwner(), o = v.getOwner();
                if (!(t2 != null && t2.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(o != null && o.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t2 == o)
                  return f.isInterGraph = false, t2.add(f, i, v);
                if (f.isInterGraph = true, f.source = i, f.target = v, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, a.prototype.remove = function(r) {
              if (r instanceof g2) {
                var e2 = r;
                if (e2.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(e2 == this.rootGraph || e2.parent != null && e2.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(e2.getEdges());
                for (var i, v = f.length, t2 = 0; t2 < v; t2++)
                  i = f[t2], e2.remove(i);
                var o = [];
                o = o.concat(e2.getNodes());
                var s;
                v = o.length;
                for (var t2 = 0; t2 < v; t2++)
                  s = o[t2], e2.remove(s);
                e2 == this.rootGraph && this.setRootGraph(null);
                var c = this.graphs.indexOf(e2);
                this.graphs.splice(c, 1), e2.parent = null;
              } else if (r instanceof h) {
                if (i = r, i == null)
                  throw "Edge is null!";
                if (!i.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(i.source != null && i.target != null))
                  throw "Source and/or target is null!";
                if (!(i.source.edges.indexOf(i) != -1 && i.target.edges.indexOf(i) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var c = i.source.edges.indexOf(i);
                if (i.source.edges.splice(c, 1), c = i.target.edges.indexOf(i), i.target.edges.splice(c, 1), !(i.source.owner != null && i.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (i.source.owner.getGraphManager().edges.indexOf(i) == -1)
                  throw "Not in owner graph manager's edge list!";
                var c = i.source.owner.getGraphManager().edges.indexOf(i);
                i.source.owner.getGraphManager().edges.splice(c, 1);
              }
            }, a.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, a.prototype.getGraphs = function() {
              return this.graphs;
            }, a.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var r = [], e2 = this.getGraphs(), f = e2.length, i = 0; i < f; i++)
                  r = r.concat(e2[i].getNodes());
                this.allNodes = r;
              }
              return this.allNodes;
            }, a.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, a.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, a.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, a.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var r = [], e2 = this.getGraphs();
                e2.length;
                for (var f = 0; f < e2.length; f++)
                  r = r.concat(e2[f].getEdges());
                r = r.concat(this.edges), this.allEdges = r;
              }
              return this.allEdges;
            }, a.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, a.prototype.setAllNodesToApplyGravitation = function(r) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = r;
            }, a.prototype.getRoot = function() {
              return this.rootGraph;
            }, a.prototype.setRootGraph = function(r) {
              if (r.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = r, r.parent == null && (r.parent = this.layout.newNode("Root node"));
            }, a.prototype.getLayout = function() {
              return this.layout;
            }, a.prototype.isOneAncestorOfOther = function(r, e2) {
              if (!(r != null && e2 != null))
                throw "assert failed";
              if (r == e2)
                return true;
              var f = r.getOwner(), i;
              do {
                if (i = f.getParent(), i == null)
                  break;
                if (i == e2)
                  return true;
                if (f = i.getOwner(), f == null)
                  break;
              } while (true);
              f = e2.getOwner();
              do {
                if (i = f.getParent(), i == null)
                  break;
                if (i == r)
                  return true;
                if (f = i.getOwner(), f == null)
                  break;
              } while (true);
              return false;
            }, a.prototype.calcLowestCommonAncestors = function() {
              for (var r, e2, f, i, v, t2 = this.getAllEdges(), o = t2.length, s = 0; s < o; s++) {
                if (r = t2[s], e2 = r.source, f = r.target, r.lca = null, r.sourceInLca = e2, r.targetInLca = f, e2 == f) {
                  r.lca = e2.getOwner();
                  continue;
                }
                for (i = e2.getOwner(); r.lca == null; ) {
                  for (r.targetInLca = f, v = f.getOwner(); r.lca == null; ) {
                    if (v == i) {
                      r.lca = v;
                      break;
                    }
                    if (v == this.rootGraph)
                      break;
                    if (r.lca != null)
                      throw "assert failed";
                    r.targetInLca = v.getParent(), v = r.targetInLca.getOwner();
                  }
                  if (i == this.rootGraph)
                    break;
                  r.lca == null && (r.sourceInLca = i.getParent(), i = r.sourceInLca.getOwner());
                }
                if (r.lca == null)
                  throw "assert failed";
              }
            }, a.prototype.calcLowestCommonAncestor = function(r, e2) {
              if (r == e2)
                return r.getOwner();
              var f = r.getOwner();
              do {
                if (f == null)
                  break;
                var i = e2.getOwner();
                do {
                  if (i == null)
                    break;
                  if (i == f)
                    return i;
                  i = i.getParent().getOwner();
                } while (true);
                f = f.getParent().getOwner();
              } while (true);
              return f;
            }, a.prototype.calcInclusionTreeDepths = function(r, e2) {
              r == null && e2 == null && (r = this.rootGraph, e2 = 1);
              for (var f, i = r.getNodes(), v = i.length, t2 = 0; t2 < v; t2++)
                f = i[t2], f.inclusionTreeDepth = e2, f.child != null && this.calcInclusionTreeDepths(f.child, e2 + 1);
            }, a.prototype.includesInvalidEdge = function() {
              for (var r, e2 = [], f = this.edges.length, i = 0; i < f; i++)
                r = this.edges[i], this.isOneAncestorOfOther(r.source, r.target) && e2.push(r);
              for (var i = 0; i < e2.length; i++)
                this.remove(e2[i]);
              return false;
            }, M.exports = a;
          },
          /* 8 */
          /***/
          function(M, P, L) {
            var g2 = L(12);
            function h() {
            }
            h.calcSeparationAmount = function(a, r, e2, f) {
              if (!a.intersects(r))
                throw "assert failed";
              var i = new Array(2);
              this.decideDirectionsForOverlappingNodes(a, r, i), e2[0] = Math.min(a.getRight(), r.getRight()) - Math.max(a.x, r.x), e2[1] = Math.min(a.getBottom(), r.getBottom()) - Math.max(a.y, r.y), a.getX() <= r.getX() && a.getRight() >= r.getRight() ? e2[0] += Math.min(r.getX() - a.getX(), a.getRight() - r.getRight()) : r.getX() <= a.getX() && r.getRight() >= a.getRight() && (e2[0] += Math.min(a.getX() - r.getX(), r.getRight() - a.getRight())), a.getY() <= r.getY() && a.getBottom() >= r.getBottom() ? e2[1] += Math.min(r.getY() - a.getY(), a.getBottom() - r.getBottom()) : r.getY() <= a.getY() && r.getBottom() >= a.getBottom() && (e2[1] += Math.min(a.getY() - r.getY(), r.getBottom() - a.getBottom()));
              var v = Math.abs((r.getCenterY() - a.getCenterY()) / (r.getCenterX() - a.getCenterX()));
              r.getCenterY() === a.getCenterY() && r.getCenterX() === a.getCenterX() && (v = 1);
              var t2 = v * e2[0], o = e2[1] / v;
              e2[0] < o ? o = e2[0] : t2 = e2[1], e2[0] = -1 * i[0] * (o / 2 + f), e2[1] = -1 * i[1] * (t2 / 2 + f);
            }, h.decideDirectionsForOverlappingNodes = function(a, r, e2) {
              a.getCenterX() < r.getCenterX() ? e2[0] = -1 : e2[0] = 1, a.getCenterY() < r.getCenterY() ? e2[1] = -1 : e2[1] = 1;
            }, h.getIntersection2 = function(a, r, e2) {
              var f = a.getCenterX(), i = a.getCenterY(), v = r.getCenterX(), t2 = r.getCenterY();
              if (a.intersects(r))
                return e2[0] = f, e2[1] = i, e2[2] = v, e2[3] = t2, true;
              var o = a.getX(), s = a.getY(), c = a.getRight(), l = a.getX(), T = a.getBottom(), u = a.getRight(), d = a.getWidthHalf(), N2 = a.getHeightHalf(), F = r.getX(), A = r.getY(), G = r.getRight(), B = r.getX(), U = r.getBottom(), K = r.getRight(), D = r.getWidthHalf(), at = r.getHeightHalf(), n = false, m = false;
              if (f === v) {
                if (i > t2)
                  return e2[0] = f, e2[1] = s, e2[2] = v, e2[3] = U, false;
                if (i < t2)
                  return e2[0] = f, e2[1] = T, e2[2] = v, e2[3] = A, false;
              } else if (i === t2) {
                if (f > v)
                  return e2[0] = o, e2[1] = i, e2[2] = G, e2[3] = t2, false;
                if (f < v)
                  return e2[0] = c, e2[1] = i, e2[2] = F, e2[3] = t2, false;
              } else {
                var p = a.height / a.width, E = r.height / r.width, y = (t2 - i) / (v - f), I = void 0, w = void 0, R = void 0, W = void 0, x = void 0, q = void 0;
                if (-p === y ? f > v ? (e2[0] = l, e2[1] = T, n = true) : (e2[0] = c, e2[1] = s, n = true) : p === y && (f > v ? (e2[0] = o, e2[1] = s, n = true) : (e2[0] = u, e2[1] = T, n = true)), -E === y ? v > f ? (e2[2] = B, e2[3] = U, m = true) : (e2[2] = G, e2[3] = A, m = true) : E === y && (v > f ? (e2[2] = F, e2[3] = A, m = true) : (e2[2] = K, e2[3] = U, m = true)), n && m)
                  return false;
                if (f > v ? i > t2 ? (I = this.getCardinalDirection(p, y, 4), w = this.getCardinalDirection(E, y, 2)) : (I = this.getCardinalDirection(-p, y, 3), w = this.getCardinalDirection(-E, y, 1)) : i > t2 ? (I = this.getCardinalDirection(-p, y, 1), w = this.getCardinalDirection(-E, y, 3)) : (I = this.getCardinalDirection(p, y, 2), w = this.getCardinalDirection(E, y, 4)), !n)
                  switch (I) {
                    case 1:
                      W = s, R = f + -N2 / y, e2[0] = R, e2[1] = W;
                      break;
                    case 2:
                      R = u, W = i + d * y, e2[0] = R, e2[1] = W;
                      break;
                    case 3:
                      W = T, R = f + N2 / y, e2[0] = R, e2[1] = W;
                      break;
                    case 4:
                      R = l, W = i + -d * y, e2[0] = R, e2[1] = W;
                      break;
                  }
                if (!m)
                  switch (w) {
                    case 1:
                      q = A, x = v + -at / y, e2[2] = x, e2[3] = q;
                      break;
                    case 2:
                      x = K, q = t2 + D * y, e2[2] = x, e2[3] = q;
                      break;
                    case 3:
                      q = U, x = v + at / y, e2[2] = x, e2[3] = q;
                      break;
                    case 4:
                      x = B, q = t2 + -D * y, e2[2] = x, e2[3] = q;
                      break;
                  }
              }
              return false;
            }, h.getCardinalDirection = function(a, r, e2) {
              return a > r ? e2 : 1 + e2 % 4;
            }, h.getIntersection = function(a, r, e2, f) {
              if (f == null)
                return this.getIntersection2(a, r, e2);
              var i = a.x, v = a.y, t2 = r.x, o = r.y, s = e2.x, c = e2.y, l = f.x, T = f.y, u = void 0, d = void 0, N2 = void 0, F = void 0, A = void 0, G = void 0, B = void 0, U = void 0, K = void 0;
              return N2 = o - v, A = i - t2, B = t2 * v - i * o, F = T - c, G = s - l, U = l * c - s * T, K = N2 * G - F * A, K === 0 ? null : (u = (A * U - G * B) / K, d = (F * B - N2 * U) / K, new g2(u, d));
            }, h.angleOfVector = function(a, r, e2, f) {
              var i = void 0;
              return a !== e2 ? (i = Math.atan((f - r) / (e2 - a)), e2 < a ? i += Math.PI : f < r && (i += this.TWO_PI)) : f < r ? i = this.ONE_AND_HALF_PI : i = this.HALF_PI, i;
            }, h.doIntersect = function(a, r, e2, f) {
              var i = a.x, v = a.y, t2 = r.x, o = r.y, s = e2.x, c = e2.y, l = f.x, T = f.y, u = (t2 - i) * (T - c) - (l - s) * (o - v);
              if (u === 0)
                return false;
              var d = ((T - c) * (l - i) + (s - l) * (T - v)) / u, N2 = ((v - o) * (l - i) + (t2 - i) * (T - v)) / u;
              return 0 < d && d < 1 && 0 < N2 && N2 < 1;
            }, h.findCircleLineIntersections = function(a, r, e2, f, i, v, t2) {
              var o = (e2 - a) * (e2 - a) + (f - r) * (f - r), s = 2 * ((a - i) * (e2 - a) + (r - v) * (f - r)), c = (a - i) * (a - i) + (r - v) * (r - v) - t2 * t2, l = s * s - 4 * o * c;
              if (l >= 0) {
                var T = (-s + Math.sqrt(s * s - 4 * o * c)) / (2 * o), u = (-s - Math.sqrt(s * s - 4 * o * c)) / (2 * o), d = null;
                return T >= 0 && T <= 1 ? [T] : u >= 0 && u <= 1 ? [u] : d;
              } else return null;
            }, h.HALF_PI = 0.5 * Math.PI, h.ONE_AND_HALF_PI = 1.5 * Math.PI, h.TWO_PI = 2 * Math.PI, h.THREE_PI = 3 * Math.PI, M.exports = h;
          },
          /* 9 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.sign = function(h) {
              return h > 0 ? 1 : h < 0 ? -1 : 0;
            }, g2.floor = function(h) {
              return h < 0 ? Math.ceil(h) : Math.floor(h);
            }, g2.ceil = function(h) {
              return h < 0 ? Math.floor(h) : Math.ceil(h);
            }, M.exports = g2;
          },
          /* 10 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.MAX_VALUE = 2147483647, g2.MIN_VALUE = -2147483648, M.exports = g2;
          },
          /* 11 */
          /***/
          function(M, P, L) {
            var g2 = /* @__PURE__ */ function() {
              function i(v, t2) {
                for (var o = 0; o < t2.length; o++) {
                  var s = t2[o];
                  s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(v, s.key, s);
                }
              }
              return function(v, t2, o) {
                return t2 && i(v.prototype, t2), o && i(v, o), v;
              };
            }();
            function h(i, v) {
              if (!(i instanceof v))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = function(v) {
              return { value: v, next: null, prev: null };
            }, r = function(v, t2, o, s) {
              return v !== null ? v.next = t2 : s.head = t2, o !== null ? o.prev = t2 : s.tail = t2, t2.prev = v, t2.next = o, s.length++, t2;
            }, e2 = function(v, t2) {
              var o = v.prev, s = v.next;
              return o !== null ? o.next = s : t2.head = s, s !== null ? s.prev = o : t2.tail = o, v.prev = v.next = null, t2.length--, v;
            }, f = function() {
              function i(v) {
                var t2 = this;
                h(this, i), this.length = 0, this.head = null, this.tail = null, v == null ? void 0 : v.forEach(function(o) {
                  return t2.push(o);
                });
              }
              return g2(i, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(t2, o) {
                  return r(o.prev, a(t2), o, this);
                }
              }, {
                key: "insertAfter",
                value: function(t2, o) {
                  return r(o, a(t2), o.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(t2, o) {
                  return r(o.prev, t2, o, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(t2, o) {
                  return r(o, t2, o.next, this);
                }
              }, {
                key: "push",
                value: function(t2) {
                  return r(this.tail, a(t2), null, this);
                }
              }, {
                key: "unshift",
                value: function(t2) {
                  return r(null, a(t2), this.head, this);
                }
              }, {
                key: "remove",
                value: function(t2) {
                  return e2(t2, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return e2(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return e2(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return e2(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return e2(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(t2) {
                  if (t2 <= this.length()) {
                    for (var o = 1, s = this.head; o < t2; )
                      s = s.next, o++;
                    return s.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(t2, o) {
                  if (t2 <= this.length()) {
                    for (var s = 1, c = this.head; s < t2; )
                      c = c.next, s++;
                    c.value = o;
                  }
                }
              }]), i;
            }();
            M.exports = f;
          },
          /* 12 */
          /***/
          function(M, P, L) {
            function g2(h, a, r) {
              this.x = null, this.y = null, h == null && a == null && r == null ? (this.x = 0, this.y = 0) : typeof h == "number" && typeof a == "number" && r == null ? (this.x = h, this.y = a) : h.constructor.name == "Point" && a == null && r == null && (r = h, this.x = r.x, this.y = r.y);
            }
            g2.prototype.getX = function() {
              return this.x;
            }, g2.prototype.getY = function() {
              return this.y;
            }, g2.prototype.getLocation = function() {
              return new g2(this.x, this.y);
            }, g2.prototype.setLocation = function(h, a, r) {
              h.constructor.name == "Point" && a == null && r == null ? (r = h, this.setLocation(r.x, r.y)) : typeof h == "number" && typeof a == "number" && r == null && (parseInt(h) == h && parseInt(a) == a ? this.move(h, a) : (this.x = Math.floor(h + 0.5), this.y = Math.floor(a + 0.5)));
            }, g2.prototype.move = function(h, a) {
              this.x = h, this.y = a;
            }, g2.prototype.translate = function(h, a) {
              this.x += h, this.y += a;
            }, g2.prototype.equals = function(h) {
              if (h.constructor.name == "Point") {
                var a = h;
                return this.x == a.x && this.y == a.y;
              }
              return this == h;
            }, g2.prototype.toString = function() {
              return new g2().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, M.exports = g2;
          },
          /* 13 */
          /***/
          function(M, P, L) {
            function g2(h, a, r, e2) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, h != null && a != null && r != null && e2 != null && (this.x = h, this.y = a, this.width = r, this.height = e2);
            }
            g2.prototype.getX = function() {
              return this.x;
            }, g2.prototype.setX = function(h) {
              this.x = h;
            }, g2.prototype.getY = function() {
              return this.y;
            }, g2.prototype.setY = function(h) {
              this.y = h;
            }, g2.prototype.getWidth = function() {
              return this.width;
            }, g2.prototype.setWidth = function(h) {
              this.width = h;
            }, g2.prototype.getHeight = function() {
              return this.height;
            }, g2.prototype.setHeight = function(h) {
              this.height = h;
            }, g2.prototype.getRight = function() {
              return this.x + this.width;
            }, g2.prototype.getBottom = function() {
              return this.y + this.height;
            }, g2.prototype.intersects = function(h) {
              return !(this.getRight() < h.x || this.getBottom() < h.y || h.getRight() < this.x || h.getBottom() < this.y);
            }, g2.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, g2.prototype.getMinX = function() {
              return this.getX();
            }, g2.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, g2.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, g2.prototype.getMinY = function() {
              return this.getY();
            }, g2.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, g2.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, g2.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, M.exports = g2;
          },
          /* 14 */
          /***/
          function(M, P, L) {
            var g2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
              return typeof a;
            } : function(a) {
              return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
            };
            function h() {
            }
            h.lastID = 0, h.createID = function(a) {
              return h.isPrimitive(a) ? a : (a.uniqueID != null || (a.uniqueID = h.getString(), h.lastID++), a.uniqueID);
            }, h.getString = function(a) {
              return a == null && (a = h.lastID), "Object#" + a;
            }, h.isPrimitive = function(a) {
              var r = typeof a > "u" ? "undefined" : g2(a);
              return a == null || r != "object" && r != "function";
            }, M.exports = h;
          },
          /* 15 */
          /***/
          function(M, P, L) {
            function g2(s) {
              if (Array.isArray(s)) {
                for (var c = 0, l = Array(s.length); c < s.length; c++)
                  l[c] = s[c];
                return l;
              } else
                return Array.from(s);
            }
            var h = L(0), a = L(7), r = L(3), e2 = L(1), f = L(6), i = L(5), v = L(17), t2 = L(29);
            function o(s) {
              t2.call(this), this.layoutQuality = h.QUALITY, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = h.DEFAULT_INCREMENTAL, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, s != null && (this.isRemoteUse = s);
            }
            o.RANDOM_SEED = 1, o.prototype = Object.create(t2.prototype), o.prototype.getGraphManager = function() {
              return this.graphManager;
            }, o.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, o.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, o.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, o.prototype.newGraphManager = function() {
              var s = new a(this);
              return this.graphManager = s, s;
            }, o.prototype.newGraph = function(s) {
              return new f(null, this.graphManager, s);
            }, o.prototype.newNode = function(s) {
              return new r(this.graphManager, s);
            }, o.prototype.newEdge = function(s) {
              return new e2(null, null, s);
            }, o.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, o.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var s;
              return this.checkLayoutSuccess() ? s = false : s = this.layout(), h.ANIMATE === "during" ? false : (s && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, s);
            }, o.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, o.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var s = this.graphManager.getAllEdges(), c = 0; c < s.length; c++)
                  s[c];
                for (var l = this.graphManager.getRoot().getNodes(), c = 0; c < l.length; c++)
                  l[c];
                this.update(this.graphManager.getRoot());
              }
            }, o.prototype.update = function(s) {
              if (s == null)
                this.update2();
              else if (s instanceof r) {
                var c = s;
                if (c.getChild() != null)
                  for (var l = c.getChild().getNodes(), T = 0; T < l.length; T++)
                    update(l[T]);
                if (c.vGraphObject != null) {
                  var u = c.vGraphObject;
                  u.update(c);
                }
              } else if (s instanceof e2) {
                var d = s;
                if (d.vGraphObject != null) {
                  var N2 = d.vGraphObject;
                  N2.update(d);
                }
              } else if (s instanceof f) {
                var F = s;
                if (F.vGraphObject != null) {
                  var A = F.vGraphObject;
                  A.update(F);
                }
              }
            }, o.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = h.QUALITY, this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = h.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, o.prototype.transform = function(s) {
              if (s == null)
                this.transform(new i(0, 0));
              else {
                var c = new v(), l = this.graphManager.getRoot().updateLeftTop();
                if (l != null) {
                  c.setWorldOrgX(s.x), c.setWorldOrgY(s.y), c.setDeviceOrgX(l.x), c.setDeviceOrgY(l.y);
                  for (var T = this.getAllNodes(), u, d = 0; d < T.length; d++)
                    u = T[d], u.transform(c);
                }
              }
            }, o.prototype.positionNodesRandomly = function(s) {
              if (s == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var c, l, T = s.getNodes(), u = 0; u < T.length; u++)
                  c = T[u], l = c.getChild(), l == null || l.getNodes().length == 0 ? c.scatter() : (this.positionNodesRandomly(l), c.updateBounds());
            }, o.prototype.getFlatForest = function() {
              for (var s = [], c = true, l = this.graphManager.getRoot().getNodes(), T = true, u = 0; u < l.length; u++)
                l[u].getChild() != null && (T = false);
              if (!T)
                return s;
              var d = /* @__PURE__ */ new Set(), N2 = [], F = /* @__PURE__ */ new Map(), A = [];
              for (A = A.concat(l); A.length > 0 && c; ) {
                for (N2.push(A[0]); N2.length > 0 && c; ) {
                  var G = N2[0];
                  N2.splice(0, 1), d.add(G);
                  for (var B = G.getEdges(), u = 0; u < B.length; u++) {
                    var U = B[u].getOtherEnd(G);
                    if (F.get(G) != U)
                      if (!d.has(U))
                        N2.push(U), F.set(U, G);
                      else {
                        c = false;
                        break;
                      }
                  }
                }
                if (!c)
                  s = [];
                else {
                  var K = [].concat(g2(d));
                  s.push(K);
                  for (var u = 0; u < K.length; u++) {
                    var D = K[u], at = A.indexOf(D);
                    at > -1 && A.splice(at, 1);
                  }
                  d = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
                }
              }
              return s;
            }, o.prototype.createDummyNodesForBendpoints = function(s) {
              for (var c = [], l = s.source, T = this.graphManager.calcLowestCommonAncestor(s.source, s.target), u = 0; u < s.bendpoints.length; u++) {
                var d = this.newNode(null);
                d.setRect(new Point(0, 0), new Dimension(1, 1)), T.add(d);
                var N2 = this.newEdge(null);
                this.graphManager.add(N2, l, d), c.add(d), l = d;
              }
              var N2 = this.newEdge(null);
              return this.graphManager.add(N2, l, s.target), this.edgeToDummyNodes.set(s, c), s.isInterGraph() ? this.graphManager.remove(s) : T.remove(s), c;
            }, o.prototype.createBendpointsFromDummyNodes = function() {
              var s = [];
              s = s.concat(this.graphManager.getAllEdges()), s = [].concat(g2(this.edgeToDummyNodes.keys())).concat(s);
              for (var c = 0; c < s.length; c++) {
                var l = s[c];
                if (l.bendpoints.length > 0) {
                  for (var T = this.edgeToDummyNodes.get(l), u = 0; u < T.length; u++) {
                    var d = T[u], N2 = new i(d.getCenterX(), d.getCenterY()), F = l.bendpoints.get(u);
                    F.x = N2.x, F.y = N2.y, d.getOwner().remove(d);
                  }
                  this.graphManager.add(l, l.source, l.target);
                }
              }
            }, o.transform = function(s, c, l, T) {
              if (l != null && T != null) {
                var u = c;
                if (s <= 50) {
                  var d = c / l;
                  u -= (c - d) / 50 * (50 - s);
                } else {
                  var N2 = c * T;
                  u += (N2 - c) / 50 * (s - 50);
                }
                return u;
              } else {
                var F, A;
                return s <= 50 ? (F = 9 * c / 500, A = c / 10) : (F = 9 * c / 50, A = -8 * c), F * s + A;
              }
            }, o.findCenterOfTree = function(s) {
              var c = [];
              c = c.concat(s);
              var l = [], T = /* @__PURE__ */ new Map(), u = false, d = null;
              (c.length == 1 || c.length == 2) && (u = true, d = c[0]);
              for (var N2 = 0; N2 < c.length; N2++) {
                var F = c[N2], A = F.getNeighborsList().size;
                T.set(F, F.getNeighborsList().size), A == 1 && l.push(F);
              }
              var G = [];
              for (G = G.concat(l); !u; ) {
                var B = [];
                B = B.concat(G), G = [];
                for (var N2 = 0; N2 < c.length; N2++) {
                  var F = c[N2], U = c.indexOf(F);
                  U >= 0 && c.splice(U, 1);
                  var K = F.getNeighborsList();
                  K.forEach(function(n) {
                    if (l.indexOf(n) < 0) {
                      var m = T.get(n), p = m - 1;
                      p == 1 && G.push(n), T.set(n, p);
                    }
                  });
                }
                l = l.concat(G), (c.length == 1 || c.length == 2) && (u = true, d = c[0]);
              }
              return d;
            }, o.prototype.setGraphManager = function(s) {
              this.graphManager = s;
            }, M.exports = o;
          },
          /* 16 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.seed = 1, g2.x = 0, g2.nextDouble = function() {
              return g2.x = Math.sin(g2.seed++) * 1e4, g2.x - Math.floor(g2.x);
            }, M.exports = g2;
          },
          /* 17 */
          /***/
          function(M, P, L) {
            var g2 = L(5);
            function h(a, r) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            h.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, h.prototype.setWorldOrgX = function(a) {
              this.lworldOrgX = a;
            }, h.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, h.prototype.setWorldOrgY = function(a) {
              this.lworldOrgY = a;
            }, h.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, h.prototype.setWorldExtX = function(a) {
              this.lworldExtX = a;
            }, h.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, h.prototype.setWorldExtY = function(a) {
              this.lworldExtY = a;
            }, h.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, h.prototype.setDeviceOrgX = function(a) {
              this.ldeviceOrgX = a;
            }, h.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, h.prototype.setDeviceOrgY = function(a) {
              this.ldeviceOrgY = a;
            }, h.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, h.prototype.setDeviceExtX = function(a) {
              this.ldeviceExtX = a;
            }, h.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, h.prototype.setDeviceExtY = function(a) {
              this.ldeviceExtY = a;
            }, h.prototype.transformX = function(a) {
              var r = 0, e2 = this.lworldExtX;
              return e2 != 0 && (r = this.ldeviceOrgX + (a - this.lworldOrgX) * this.ldeviceExtX / e2), r;
            }, h.prototype.transformY = function(a) {
              var r = 0, e2 = this.lworldExtY;
              return e2 != 0 && (r = this.ldeviceOrgY + (a - this.lworldOrgY) * this.ldeviceExtY / e2), r;
            }, h.prototype.inverseTransformX = function(a) {
              var r = 0, e2 = this.ldeviceExtX;
              return e2 != 0 && (r = this.lworldOrgX + (a - this.ldeviceOrgX) * this.lworldExtX / e2), r;
            }, h.prototype.inverseTransformY = function(a) {
              var r = 0, e2 = this.ldeviceExtY;
              return e2 != 0 && (r = this.lworldOrgY + (a - this.ldeviceOrgY) * this.lworldExtY / e2), r;
            }, h.prototype.inverseTransformPoint = function(a) {
              var r = new g2(this.inverseTransformX(a.x), this.inverseTransformY(a.y));
              return r;
            }, M.exports = h;
          },
          /* 18 */
          /***/
          function(M, P, L) {
            function g2(t2) {
              if (Array.isArray(t2)) {
                for (var o = 0, s = Array(t2.length); o < t2.length; o++)
                  s[o] = t2[o];
                return s;
              } else
                return Array.from(t2);
            }
            var h = L(15), a = L(4), r = L(0), e2 = L(8), f = L(9);
            function i() {
              h.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
            }
            i.prototype = Object.create(h.prototype);
            for (var v in h)
              i[v] = h[v];
            i.prototype.initParameters = function() {
              h.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, i.prototype.calcIdealEdgeLengths = function() {
              for (var t2, o, s, c, l, T, u, d = this.getGraphManager().getAllEdges(), N2 = 0; N2 < d.length; N2++)
                t2 = d[N2], o = t2.idealLength, t2.isInterGraph && (c = t2.getSource(), l = t2.getTarget(), T = t2.getSourceInLca().getEstimatedSize(), u = t2.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t2.idealLength += T + u - 2 * r.SIMPLE_NODE_SIZE), s = t2.getLca().getInclusionTreeDepth(), t2.idealLength += o * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + l.getInclusionTreeDepth() - 2 * s));
            }, i.prototype.initSpringEmbedder = function() {
              var t2 = this.getAllNodes().length;
              this.incremental ? (t2 > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t2 - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t2 > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (t2 - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, i.prototype.calcSpringForces = function() {
              for (var t2 = this.getAllEdges(), o, s = 0; s < t2.length; s++)
                o = t2[s], this.calcSpringForce(o, o.idealLength);
            }, i.prototype.calcRepulsionForces = function() {
              var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, s, c, l, T, u = this.getAllNodes(), d;
              if (this.useFRGridVariant)
                for (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && t2 && this.updateGrid(), d = /* @__PURE__ */ new Set(), s = 0; s < u.length; s++)
                  l = u[s], this.calculateRepulsionForceOfANode(l, d, t2, o), d.add(l);
              else
                for (s = 0; s < u.length; s++)
                  for (l = u[s], c = s + 1; c < u.length; c++)
                    T = u[c], l.getOwner() == T.getOwner() && this.calcRepulsionForce(l, T);
            }, i.prototype.calcGravitationalForces = function() {
              for (var t2, o = this.getAllNodesToApplyGravitation(), s = 0; s < o.length; s++)
                t2 = o[s], this.calcGravitationalForce(t2);
            }, i.prototype.moveNodes = function() {
              for (var t2 = this.getAllNodes(), o, s = 0; s < t2.length; s++)
                o = t2[s], o.move();
            }, i.prototype.calcSpringForce = function(t2, o) {
              var s = t2.getSource(), c = t2.getTarget(), l, T, u, d;
              if (this.uniformLeafNodeSizes && s.getChild() == null && c.getChild() == null)
                t2.updateLengthSimple();
              else if (t2.updateLength(), t2.isOverlapingSourceAndTarget)
                return;
              l = t2.getLength(), l != 0 && (T = t2.edgeElasticity * (l - o), u = T * (t2.lengthX / l), d = T * (t2.lengthY / l), s.springForceX += u, s.springForceY += d, c.springForceX -= u, c.springForceY -= d);
            }, i.prototype.calcRepulsionForce = function(t2, o) {
              var s = t2.getRect(), c = o.getRect(), l = new Array(2), T = new Array(4), u, d, N2, F, A, G, B;
              if (s.intersects(c)) {
                e2.calcSeparationAmount(s, c, l, a.DEFAULT_EDGE_LENGTH / 2), G = 2 * l[0], B = 2 * l[1];
                var U = t2.noOfChildren * o.noOfChildren / (t2.noOfChildren + o.noOfChildren);
                t2.repulsionForceX -= U * G, t2.repulsionForceY -= U * B, o.repulsionForceX += U * G, o.repulsionForceY += U * B;
              } else
                this.uniformLeafNodeSizes && t2.getChild() == null && o.getChild() == null ? (u = c.getCenterX() - s.getCenterX(), d = c.getCenterY() - s.getCenterY()) : (e2.getIntersection(s, c, T), u = T[2] - T[0], d = T[3] - T[1]), Math.abs(u) < a.MIN_REPULSION_DIST && (u = f.sign(u) * a.MIN_REPULSION_DIST), Math.abs(d) < a.MIN_REPULSION_DIST && (d = f.sign(d) * a.MIN_REPULSION_DIST), N2 = u * u + d * d, F = Math.sqrt(N2), A = (t2.nodeRepulsion / 2 + o.nodeRepulsion / 2) * t2.noOfChildren * o.noOfChildren / N2, G = A * u / F, B = A * d / F, t2.repulsionForceX -= G, t2.repulsionForceY -= B, o.repulsionForceX += G, o.repulsionForceY += B;
            }, i.prototype.calcGravitationalForce = function(t2) {
              var o, s, c, l, T, u, d, N2;
              o = t2.getOwner(), s = (o.getRight() + o.getLeft()) / 2, c = (o.getTop() + o.getBottom()) / 2, l = t2.getCenterX() - s, T = t2.getCenterY() - c, u = Math.abs(l) + t2.getWidth() / 2, d = Math.abs(T) + t2.getHeight() / 2, t2.getOwner() == this.graphManager.getRoot() ? (N2 = o.getEstimatedSize() * this.gravityRangeFactor, (u > N2 || d > N2) && (t2.gravitationForceX = -this.gravityConstant * l, t2.gravitationForceY = -this.gravityConstant * T)) : (N2 = o.getEstimatedSize() * this.compoundGravityRangeFactor, (u > N2 || d > N2) && (t2.gravitationForceX = -this.gravityConstant * l * this.compoundGravityConstant, t2.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant));
            }, i.prototype.isConverged = function() {
              var t2, o = false;
              return this.totalIterations > this.maxIterations / 3 && (o = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t2 = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t2 || o;
            }, i.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, i.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t2, o = this.graphManager.getAllNodes(), s = 0; s < o.length; s++)
                t2 = o[s], t2.noOfChildren = t2.getNoOfChildren();
            }, i.prototype.calcGrid = function(t2) {
              var o = 0, s = 0;
              o = parseInt(Math.ceil((t2.getRight() - t2.getLeft()) / this.repulsionRange)), s = parseInt(Math.ceil((t2.getBottom() - t2.getTop()) / this.repulsionRange));
              for (var c = new Array(o), l = 0; l < o; l++)
                c[l] = new Array(s);
              for (var l = 0; l < o; l++)
                for (var T = 0; T < s; T++)
                  c[l][T] = new Array();
              return c;
            }, i.prototype.addNodeToGrid = function(t2, o, s) {
              var c = 0, l = 0, T = 0, u = 0;
              c = parseInt(Math.floor((t2.getRect().x - o) / this.repulsionRange)), l = parseInt(Math.floor((t2.getRect().width + t2.getRect().x - o) / this.repulsionRange)), T = parseInt(Math.floor((t2.getRect().y - s) / this.repulsionRange)), u = parseInt(Math.floor((t2.getRect().height + t2.getRect().y - s) / this.repulsionRange));
              for (var d = c; d <= l; d++)
                for (var N2 = T; N2 <= u; N2++)
                  this.grid[d][N2].push(t2), t2.setGridCoordinates(c, l, T, u);
            }, i.prototype.updateGrid = function() {
              var t2, o, s = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t2 = 0; t2 < s.length; t2++)
                o = s[t2], this.addNodeToGrid(o, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, i.prototype.calculateRepulsionForceOfANode = function(t2, o, s, c) {
              if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && s || c) {
                var l = /* @__PURE__ */ new Set();
                t2.surrounding = new Array();
                for (var T, u = this.grid, d = t2.startX - 1; d < t2.finishX + 2; d++)
                  for (var N2 = t2.startY - 1; N2 < t2.finishY + 2; N2++)
                    if (!(d < 0 || N2 < 0 || d >= u.length || N2 >= u[0].length)) {
                      for (var F = 0; F < u[d][N2].length; F++)
                        if (T = u[d][N2][F], !(t2.getOwner() != T.getOwner() || t2 == T) && !o.has(T) && !l.has(T)) {
                          var A = Math.abs(t2.getCenterX() - T.getCenterX()) - (t2.getWidth() / 2 + T.getWidth() / 2), G = Math.abs(t2.getCenterY() - T.getCenterY()) - (t2.getHeight() / 2 + T.getHeight() / 2);
                          A <= this.repulsionRange && G <= this.repulsionRange && l.add(T);
                        }
                    }
                t2.surrounding = [].concat(g2(l));
              }
              for (d = 0; d < t2.surrounding.length; d++)
                this.calcRepulsionForce(t2, t2.surrounding[d]);
            }, i.prototype.calcRepulsionRange = function() {
              return 0;
            }, M.exports = i;
          },
          /* 19 */
          /***/
          function(M, P, L) {
            var g2 = L(1), h = L(4);
            function a(e2, f, i) {
              g2.call(this, e2, f, i), this.idealLength = h.DEFAULT_EDGE_LENGTH, this.edgeElasticity = h.DEFAULT_SPRING_STRENGTH;
            }
            a.prototype = Object.create(g2.prototype);
            for (var r in g2)
              a[r] = g2[r];
            M.exports = a;
          },
          /* 20 */
          /***/
          function(M, P, L) {
            var g2 = L(3), h = L(4);
            function a(e2, f, i, v) {
              g2.call(this, e2, f, i, v), this.nodeRepulsion = h.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            a.prototype = Object.create(g2.prototype);
            for (var r in g2)
              a[r] = g2[r];
            a.prototype.setGridCoordinates = function(e2, f, i, v) {
              this.startX = e2, this.finishX = f, this.startY = i, this.finishY = v;
            }, M.exports = a;
          },
          /* 21 */
          /***/
          function(M, P, L) {
            function g2(h, a) {
              this.width = 0, this.height = 0, h !== null && a !== null && (this.height = a, this.width = h);
            }
            g2.prototype.getWidth = function() {
              return this.width;
            }, g2.prototype.setWidth = function(h) {
              this.width = h;
            }, g2.prototype.getHeight = function() {
              return this.height;
            }, g2.prototype.setHeight = function(h) {
              this.height = h;
            }, M.exports = g2;
          },
          /* 22 */
          /***/
          function(M, P, L) {
            var g2 = L(14);
            function h() {
              this.map = {}, this.keys = [];
            }
            h.prototype.put = function(a, r) {
              var e2 = g2.createID(a);
              this.contains(e2) || (this.map[e2] = r, this.keys.push(a));
            }, h.prototype.contains = function(a) {
              return g2.createID(a), this.map[a] != null;
            }, h.prototype.get = function(a) {
              var r = g2.createID(a);
              return this.map[r];
            }, h.prototype.keySet = function() {
              return this.keys;
            }, M.exports = h;
          },
          /* 23 */
          /***/
          function(M, P, L) {
            var g2 = L(14);
            function h() {
              this.set = {};
            }
            h.prototype.add = function(a) {
              var r = g2.createID(a);
              this.contains(r) || (this.set[r] = a);
            }, h.prototype.remove = function(a) {
              delete this.set[g2.createID(a)];
            }, h.prototype.clear = function() {
              this.set = {};
            }, h.prototype.contains = function(a) {
              return this.set[g2.createID(a)] == a;
            }, h.prototype.isEmpty = function() {
              return this.size() === 0;
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAllTo = function(a) {
              for (var r = Object.keys(this.set), e2 = r.length, f = 0; f < e2; f++)
                a.push(this.set[r[f]]);
            }, h.prototype.size = function() {
              return Object.keys(this.set).length;
            }, h.prototype.addAll = function(a) {
              for (var r = a.length, e2 = 0; e2 < r; e2++) {
                var f = a[e2];
                this.add(f);
              }
            }, M.exports = h;
          },
          /* 24 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.multMat = function(h, a) {
              for (var r = [], e2 = 0; e2 < h.length; e2++) {
                r[e2] = [];
                for (var f = 0; f < a[0].length; f++) {
                  r[e2][f] = 0;
                  for (var i = 0; i < h[0].length; i++)
                    r[e2][f] += h[e2][i] * a[i][f];
                }
              }
              return r;
            }, g2.transpose = function(h) {
              for (var a = [], r = 0; r < h[0].length; r++) {
                a[r] = [];
                for (var e2 = 0; e2 < h.length; e2++)
                  a[r][e2] = h[e2][r];
              }
              return a;
            }, g2.multCons = function(h, a) {
              for (var r = [], e2 = 0; e2 < h.length; e2++)
                r[e2] = h[e2] * a;
              return r;
            }, g2.minusOp = function(h, a) {
              for (var r = [], e2 = 0; e2 < h.length; e2++)
                r[e2] = h[e2] - a[e2];
              return r;
            }, g2.dotProduct = function(h, a) {
              for (var r = 0, e2 = 0; e2 < h.length; e2++)
                r += h[e2] * a[e2];
              return r;
            }, g2.mag = function(h) {
              return Math.sqrt(this.dotProduct(h, h));
            }, g2.normalize = function(h) {
              for (var a = [], r = this.mag(h), e2 = 0; e2 < h.length; e2++)
                a[e2] = h[e2] / r;
              return a;
            }, g2.multGamma = function(h) {
              for (var a = [], r = 0, e2 = 0; e2 < h.length; e2++)
                r += h[e2];
              r *= -1 / h.length;
              for (var f = 0; f < h.length; f++)
                a[f] = r + h[f];
              return a;
            }, g2.multL = function(h, a, r) {
              for (var e2 = [], f = [], i = [], v = 0; v < a[0].length; v++) {
                for (var t2 = 0, o = 0; o < a.length; o++)
                  t2 += -0.5 * a[o][v] * h[o];
                f[v] = t2;
              }
              for (var s = 0; s < r.length; s++) {
                for (var c = 0, l = 0; l < r.length; l++)
                  c += r[s][l] * f[l];
                i[s] = c;
              }
              for (var T = 0; T < a.length; T++) {
                for (var u = 0, d = 0; d < a[0].length; d++)
                  u += a[T][d] * i[d];
                e2[T] = u;
              }
              return e2;
            }, M.exports = g2;
          },
          /* 25 */
          /***/
          function(M, P, L) {
            var g2 = /* @__PURE__ */ function() {
              function e2(f, i) {
                for (var v = 0; v < i.length; v++) {
                  var t2 = i[v];
                  t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(f, t2.key, t2);
                }
              }
              return function(f, i, v) {
                return i && e2(f.prototype, i), v && e2(f, v), f;
              };
            }();
            function h(e2, f) {
              if (!(e2 instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = L(11), r = function() {
              function e2(f, i) {
                h(this, e2), (i !== null || i !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var v = void 0;
                f instanceof a ? v = f.size() : v = f.length, this._quicksort(f, 0, v - 1);
              }
              return g2(e2, [{
                key: "_quicksort",
                value: function(i, v, t2) {
                  if (v < t2) {
                    var o = this._partition(i, v, t2);
                    this._quicksort(i, v, o), this._quicksort(i, o + 1, t2);
                  }
                }
              }, {
                key: "_partition",
                value: function(i, v, t2) {
                  for (var o = this._get(i, v), s = v, c = t2; ; ) {
                    for (; this.compareFunction(o, this._get(i, c)); )
                      c--;
                    for (; this.compareFunction(this._get(i, s), o); )
                      s++;
                    if (s < c)
                      this._swap(i, s, c), s++, c--;
                    else return c;
                  }
                }
              }, {
                key: "_get",
                value: function(i, v) {
                  return i instanceof a ? i.get_object_at(v) : i[v];
                }
              }, {
                key: "_set",
                value: function(i, v, t2) {
                  i instanceof a ? i.set_object_at(v, t2) : i[v] = t2;
                }
              }, {
                key: "_swap",
                value: function(i, v, t2) {
                  var o = this._get(i, v);
                  this._set(i, v, this._get(i, t2)), this._set(i, t2, o);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(i, v) {
                  return v > i;
                }
              }]), e2;
            }();
            M.exports = r;
          },
          /* 26 */
          /***/
          function(M, P, L) {
            function g2() {
            }
            g2.svd = function(h) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = h.length, this.n = h[0].length;
              var a = Math.min(this.m, this.n);
              this.s = function(Nt) {
                for (var At = []; Nt-- > 0; )
                  At.push(0);
                return At;
              }(Math.min(this.m + 1, this.n)), this.U = function(Nt) {
                var At = function kt(Gt) {
                  if (Gt.length == 0)
                    return 0;
                  for (var $t = [], Ft = 0; Ft < Gt[0]; Ft++)
                    $t.push(kt(Gt.slice(1)));
                  return $t;
                };
                return At(Nt);
              }([this.m, a]), this.V = function(Nt) {
                var At = function kt(Gt) {
                  if (Gt.length == 0)
                    return 0;
                  for (var $t = [], Ft = 0; Ft < Gt[0]; Ft++)
                    $t.push(kt(Gt.slice(1)));
                  return $t;
                };
                return At(Nt);
              }([this.n, this.n]);
              for (var r = function(Nt) {
                for (var At = []; Nt-- > 0; )
                  At.push(0);
                return At;
              }(this.n), e2 = function(Nt) {
                for (var At = []; Nt-- > 0; )
                  At.push(0);
                return At;
              }(this.m), f = true, i = Math.min(this.m - 1, this.n), v = Math.max(0, Math.min(this.n - 2, this.m)), t2 = 0; t2 < Math.max(i, v); t2++) {
                if (t2 < i) {
                  this.s[t2] = 0;
                  for (var o = t2; o < this.m; o++)
                    this.s[t2] = g2.hypot(this.s[t2], h[o][t2]);
                  if (this.s[t2] !== 0) {
                    h[t2][t2] < 0 && (this.s[t2] = -this.s[t2]);
                    for (var s = t2; s < this.m; s++)
                      h[s][t2] /= this.s[t2];
                    h[t2][t2] += 1;
                  }
                  this.s[t2] = -this.s[t2];
                }
                for (var c = t2 + 1; c < this.n; c++) {
                  if (/* @__PURE__ */ function(Nt, At) {
                    return Nt && At;
                  }(t2 < i, this.s[t2] !== 0)) {
                    for (var l = 0, T = t2; T < this.m; T++)
                      l += h[T][t2] * h[T][c];
                    l = -l / h[t2][t2];
                    for (var u = t2; u < this.m; u++)
                      h[u][c] += l * h[u][t2];
                  }
                  r[c] = h[t2][c];
                }
                if (/* @__PURE__ */ function(Nt, At) {
                  return At;
                }(f, t2 < i))
                  for (var d = t2; d < this.m; d++)
                    this.U[d][t2] = h[d][t2];
                if (t2 < v) {
                  r[t2] = 0;
                  for (var N2 = t2 + 1; N2 < this.n; N2++)
                    r[t2] = g2.hypot(r[t2], r[N2]);
                  if (r[t2] !== 0) {
                    r[t2 + 1] < 0 && (r[t2] = -r[t2]);
                    for (var F = t2 + 1; F < this.n; F++)
                      r[F] /= r[t2];
                    r[t2 + 1] += 1;
                  }
                  if (r[t2] = -r[t2], /* @__PURE__ */ function(Nt, At) {
                    return Nt && At;
                  }(t2 + 1 < this.m, r[t2] !== 0)) {
                    for (var A = t2 + 1; A < this.m; A++)
                      e2[A] = 0;
                    for (var G = t2 + 1; G < this.n; G++)
                      for (var B = t2 + 1; B < this.m; B++)
                        e2[B] += r[G] * h[B][G];
                    for (var U = t2 + 1; U < this.n; U++)
                      for (var K = -r[U] / r[t2 + 1], D = t2 + 1; D < this.m; D++)
                        h[D][U] += K * e2[D];
                  }
                  for (var at = t2 + 1; at < this.n; at++)
                    this.V[at][t2] = r[at];
                }
              }
              var n = Math.min(this.n, this.m + 1);
              i < this.n && (this.s[i] = h[i][i]), this.m < n && (this.s[n - 1] = 0), v + 1 < n && (r[v] = h[v][n - 1]), r[n - 1] = 0;
              {
                for (var m = i; m < a; m++) {
                  for (var p = 0; p < this.m; p++)
                    this.U[p][m] = 0;
                  this.U[m][m] = 1;
                }
                for (var E = i - 1; E >= 0; E--)
                  if (this.s[E] !== 0) {
                    for (var y = E + 1; y < a; y++) {
                      for (var I = 0, w = E; w < this.m; w++)
                        I += this.U[w][E] * this.U[w][y];
                      I = -I / this.U[E][E];
                      for (var R = E; R < this.m; R++)
                        this.U[R][y] += I * this.U[R][E];
                    }
                    for (var W = E; W < this.m; W++)
                      this.U[W][E] = -this.U[W][E];
                    this.U[E][E] = 1 + this.U[E][E];
                    for (var x = 0; x < E - 1; x++)
                      this.U[x][E] = 0;
                  } else {
                    for (var q = 0; q < this.m; q++)
                      this.U[q][E] = 0;
                    this.U[E][E] = 1;
                  }
              }
              for (var V = this.n - 1; V >= 0; V--) {
                if (/* @__PURE__ */ function(Nt, At) {
                  return Nt && At;
                }(V < v, r[V] !== 0))
                  for (var Y = V + 1; Y < a; Y++) {
                    for (var et = 0, z = V + 1; z < this.n; z++)
                      et += this.V[z][V] * this.V[z][Y];
                    et = -et / this.V[V + 1][V];
                    for (var O = V + 1; O < this.n; O++)
                      this.V[O][Y] += et * this.V[O][V];
                  }
                for (var H = 0; H < this.n; H++)
                  this.V[H][V] = 0;
                this.V[V][V] = 1;
              }
              for (var $ = n - 1, _ = Math.pow(2, -52), ht = Math.pow(2, -966); n > 0; ) {
                var J = void 0, Rt = void 0;
                for (J = n - 2; J >= -1 && J !== -1; J--)
                  if (Math.abs(r[J]) <= ht + _ * (Math.abs(this.s[J]) + Math.abs(this.s[J + 1]))) {
                    r[J] = 0;
                    break;
                  }
                if (J === n - 2)
                  Rt = 4;
                else {
                  var Lt = void 0;
                  for (Lt = n - 1; Lt >= J && Lt !== J; Lt--) {
                    var vt = (Lt !== n ? Math.abs(r[Lt]) : 0) + (Lt !== J + 1 ? Math.abs(r[Lt - 1]) : 0);
                    if (Math.abs(this.s[Lt]) <= ht + _ * vt) {
                      this.s[Lt] = 0;
                      break;
                    }
                  }
                  Lt === J ? Rt = 3 : Lt === n - 1 ? Rt = 1 : (Rt = 2, J = Lt);
                }
                switch (J++, Rt) {
                  case 1:
                    {
                      var rt = r[n - 2];
                      r[n - 2] = 0;
                      for (var ut = n - 2; ut >= J; ut--) {
                        var Tt = g2.hypot(this.s[ut], rt), Mt = this.s[ut] / Tt, Dt = rt / Tt;
                        this.s[ut] = Tt, ut !== J && (rt = -Dt * r[ut - 1], r[ut - 1] = Mt * r[ut - 1]);
                        for (var mt = 0; mt < this.n; mt++)
                          Tt = Mt * this.V[mt][ut] + Dt * this.V[mt][n - 1], this.V[mt][n - 1] = -Dt * this.V[mt][ut] + Mt * this.V[mt][n - 1], this.V[mt][ut] = Tt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var xt = r[J - 1];
                      r[J - 1] = 0;
                      for (var St = J; St < n; St++) {
                        var Vt = g2.hypot(this.s[St], xt), Xt = this.s[St] / Vt, Ut = xt / Vt;
                        this.s[St] = Vt, xt = -Ut * r[St], r[St] = Xt * r[St];
                        for (var bt = 0; bt < this.m; bt++)
                          Vt = Xt * this.U[bt][St] + Ut * this.U[bt][J - 1], this.U[bt][J - 1] = -Ut * this.U[bt][St] + Xt * this.U[bt][J - 1], this.U[bt][St] = Vt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Ht = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[n - 1]), Math.abs(this.s[n - 2])), Math.abs(r[n - 2])), Math.abs(this.s[J])), Math.abs(r[J])), Bt = this.s[n - 1] / Ht, S = this.s[n - 2] / Ht, b = r[n - 2] / Ht, k = this.s[J] / Ht, Q = r[J] / Ht, Z = ((S + Bt) * (S - Bt) + b * b) / 2, it = Bt * b * (Bt * b), gt2 = 0;
                      /* @__PURE__ */ (function(Nt, At) {
                        return Nt || At;
                      })(Z !== 0, it !== 0) && (gt2 = Math.sqrt(Z * Z + it), Z < 0 && (gt2 = -gt2), gt2 = it / (Z + gt2));
                      for (var ot = (k + Bt) * (k - Bt) + gt2, tt = k * Q, j = J; j < n - 1; j++) {
                        var dt2 = g2.hypot(ot, tt), wt = ot / dt2, yt = tt / dt2;
                        j !== J && (r[j - 1] = dt2), ot = wt * this.s[j] + yt * r[j], r[j] = wt * r[j] - yt * this.s[j], tt = yt * this.s[j + 1], this.s[j + 1] = wt * this.s[j + 1];
                        for (var It = 0; It < this.n; It++)
                          dt2 = wt * this.V[It][j] + yt * this.V[It][j + 1], this.V[It][j + 1] = -yt * this.V[It][j] + wt * this.V[It][j + 1], this.V[It][j] = dt2;
                        if (dt2 = g2.hypot(ot, tt), wt = ot / dt2, yt = tt / dt2, this.s[j] = dt2, ot = wt * r[j] + yt * this.s[j + 1], this.s[j + 1] = -yt * r[j] + wt * this.s[j + 1], tt = yt * r[j + 1], r[j + 1] = wt * r[j + 1], j < this.m - 1)
                          for (var ft = 0; ft < this.m; ft++)
                            dt2 = wt * this.U[ft][j] + yt * this.U[ft][j + 1], this.U[ft][j + 1] = -yt * this.U[ft][j] + wt * this.U[ft][j + 1], this.U[ft][j] = dt2;
                      }
                      r[n - 2] = ot;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[J] <= 0) {
                        this.s[J] = this.s[J] < 0 ? -this.s[J] : 0;
                        for (var st = 0; st <= $; st++)
                          this.V[st][J] = -this.V[st][J];
                      }
                      for (; J < $ && !(this.s[J] >= this.s[J + 1]); ) {
                        var Ct = this.s[J];
                        if (this.s[J] = this.s[J + 1], this.s[J + 1] = Ct, J < this.n - 1)
                          for (var ct = 0; ct < this.n; ct++)
                            Ct = this.V[ct][J + 1], this.V[ct][J + 1] = this.V[ct][J], this.V[ct][J] = Ct;
                        if (J < this.m - 1)
                          for (var lt = 0; lt < this.m; lt++)
                            Ct = this.U[lt][J + 1], this.U[lt][J + 1] = this.U[lt][J], this.U[lt][J] = Ct;
                        J++;
                      }
                      n--;
                    }
                    break;
                }
              }
              var Wt = { U: this.U, V: this.V, S: this.s };
              return Wt;
            }, g2.hypot = function(h, a) {
              var r = void 0;
              return Math.abs(h) > Math.abs(a) ? (r = a / h, r = Math.abs(h) * Math.sqrt(1 + r * r)) : a != 0 ? (r = h / a, r = Math.abs(a) * Math.sqrt(1 + r * r)) : r = 0, r;
            }, M.exports = g2;
          },
          /* 27 */
          /***/
          function(M, P, L) {
            var g2 = /* @__PURE__ */ function() {
              function r(e2, f) {
                for (var i = 0; i < f.length; i++) {
                  var v = f[i];
                  v.enumerable = v.enumerable || false, v.configurable = true, "value" in v && (v.writable = true), Object.defineProperty(e2, v.key, v);
                }
              }
              return function(e2, f, i) {
                return f && r(e2.prototype, f), i && r(e2, i), e2;
              };
            }();
            function h(r, e2) {
              if (!(r instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = function() {
              function r(e2, f) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                h(this, r), this.sequence1 = e2, this.sequence2 = f, this.match_score = i, this.mismatch_penalty = v, this.gap_penalty = t2, this.iMax = e2.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var o = 0; o < this.iMax; o++) {
                  this.grid[o] = new Array(this.jMax);
                  for (var s = 0; s < this.jMax; s++)
                    this.grid[o][s] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var c = 0; c < this.iMax; c++) {
                  this.tracebackGrid[c] = new Array(this.jMax);
                  for (var l = 0; l < this.jMax; l++)
                    this.tracebackGrid[c][l] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return g2(r, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var f = 1; f < this.jMax; f++)
                    this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [false, false, true];
                  for (var i = 1; i < this.iMax; i++)
                    this.grid[i][0] = this.grid[i - 1][0] + this.gap_penalty, this.tracebackGrid[i][0] = [false, true, false];
                  for (var v = 1; v < this.iMax; v++)
                    for (var t2 = 1; t2 < this.jMax; t2++) {
                      var o = void 0;
                      this.sequence1[v - 1] === this.sequence2[t2 - 1] ? o = this.grid[v - 1][t2 - 1] + this.match_score : o = this.grid[v - 1][t2 - 1] + this.mismatch_penalty;
                      var s = this.grid[v - 1][t2] + this.gap_penalty, c = this.grid[v][t2 - 1] + this.gap_penalty, l = [o, s, c], T = this.arrayAllMaxIndexes(l);
                      this.grid[v][t2] = l[T[0]], this.tracebackGrid[v][t2] = [T.includes(0), T.includes(1), T.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var f = [];
                  for (f.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); f[0]; ) {
                    var i = f[0], v = this.tracebackGrid[i.pos[0]][i.pos[1]];
                    v[0] && f.push({
                      pos: [i.pos[0] - 1, i.pos[1] - 1],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), v[1] && f.push({
                      pos: [i.pos[0] - 1, i.pos[1]],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: "-" + i.seq2
                    }), v[2] && f.push({
                      pos: [i.pos[0], i.pos[1] - 1],
                      seq1: "-" + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), i.pos[0] === 0 && i.pos[1] === 0 && this.alignments.push({
                      sequence1: i.seq1,
                      sequence2: i.seq2
                    }), f.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(f, i) {
                  for (var v = [], t2 = -1; (t2 = f.indexOf(i, t2 + 1)) !== -1; )
                    v.push(t2);
                  return v;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), r;
            }();
            M.exports = a;
          },
          /* 28 */
          /***/
          function(M, P, L) {
            var g2 = function() {
            };
            g2.FDLayout = L(18), g2.FDLayoutConstants = L(4), g2.FDLayoutEdge = L(19), g2.FDLayoutNode = L(20), g2.DimensionD = L(21), g2.HashMap = L(22), g2.HashSet = L(23), g2.IGeometry = L(8), g2.IMath = L(9), g2.Integer = L(10), g2.Point = L(12), g2.PointD = L(5), g2.RandomSeed = L(16), g2.RectangleD = L(13), g2.Transform = L(17), g2.UniqueIDGeneretor = L(14), g2.Quicksort = L(25), g2.LinkedList = L(11), g2.LGraphObject = L(2), g2.LGraph = L(6), g2.LEdge = L(1), g2.LGraphManager = L(7), g2.LNode = L(3), g2.Layout = L(15), g2.LayoutConstants = L(0), g2.NeedlemanWunsch = L(27), g2.Matrix = L(24), g2.SVD = L(26), M.exports = g2;
          },
          /* 29 */
          /***/
          function(M, P, L) {
            function g2() {
              this.listeners = [];
            }
            var h = g2.prototype;
            h.addListener = function(a, r) {
              this.listeners.push({
                event: a,
                callback: r
              });
            }, h.removeListener = function(a, r) {
              for (var e2 = this.listeners.length; e2 >= 0; e2--) {
                var f = this.listeners[e2];
                f.event === a && f.callback === r && this.listeners.splice(e2, 1);
              }
            }, h.emit = function(a, r) {
              for (var e2 = 0; e2 < this.listeners.length; e2++) {
                var f = this.listeners[e2];
                a === f.event && f.callback(r);
              }
            }, M.exports = g2;
          }
          /******/
        ])
      );
    });
  }(ce)), ce.exports;
}
var pr = fe.exports;
var Ie;
function yr() {
  return Ie || (Ie = 1, function(C, X) {
    (function(P, L) {
      C.exports = L(vr());
    })(pr, function(M) {
      return (
        /******/
        (() => {
          var P = {
            /***/
            45: (
              /***/
              (a, r, e2) => {
                var f = {};
                f.layoutBase = e2(551), f.CoSEConstants = e2(806), f.CoSEEdge = e2(767), f.CoSEGraph = e2(880), f.CoSEGraphManager = e2(578), f.CoSELayout = e2(765), f.CoSENode = e2(991), f.ConstraintHandler = e2(902), a.exports = f;
              }
            ),
            /***/
            806: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutConstants;
                function i() {
                }
                for (var v in f)
                  i[v] = f[v];
                i.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH, i.DEFAULT_COMPONENT_SEPERATION = 60, i.TILE = true, i.TILING_PADDING_VERTICAL = 10, i.TILING_PADDING_HORIZONTAL = 10, i.TRANSFORM_ON_CONSTRAINT_HANDLING = true, i.ENFORCE_CONSTRAINTS = true, i.APPLY_LAYOUT = true, i.RELAX_MOVEMENT_ON_CONSTRAINTS = true, i.TREE_REDUCTION_ON_INCREMENTAL = true, i.PURE_INCREMENTAL = i.DEFAULT_INCREMENTAL, a.exports = i;
              }
            ),
            /***/
            767: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutEdge;
                function i(t2, o, s) {
                  f.call(this, t2, o, s);
                }
                i.prototype = Object.create(f.prototype);
                for (var v in f)
                  i[v] = f[v];
                a.exports = i;
              }
            ),
            /***/
            880: (
              /***/
              (a, r, e2) => {
                var f = e2(551).LGraph;
                function i(t2, o, s) {
                  f.call(this, t2, o, s);
                }
                i.prototype = Object.create(f.prototype);
                for (var v in f)
                  i[v] = f[v];
                a.exports = i;
              }
            ),
            /***/
            578: (
              /***/
              (a, r, e2) => {
                var f = e2(551).LGraphManager;
                function i(t2) {
                  f.call(this, t2);
                }
                i.prototype = Object.create(f.prototype);
                for (var v in f)
                  i[v] = f[v];
                a.exports = i;
              }
            ),
            /***/
            765: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayout, i = e2(578), v = e2(880), t2 = e2(991), o = e2(767), s = e2(806), c = e2(902), l = e2(551).FDLayoutConstants, T = e2(551).LayoutConstants, u = e2(551).Point, d = e2(551).PointD, N2 = e2(551).DimensionD, F = e2(551).Layout, A = e2(551).Integer, G = e2(551).IGeometry, B = e2(551).LGraph, U = e2(551).Transform, K = e2(551).LinkedList;
                function D() {
                  f.call(this), this.toBeTiled = {}, this.constraints = {};
                }
                D.prototype = Object.create(f.prototype);
                for (var at in f)
                  D[at] = f[at];
                D.prototype.newGraphManager = function() {
                  var n = new i(this);
                  return this.graphManager = n, n;
                }, D.prototype.newGraph = function(n) {
                  return new v(null, this.graphManager, n);
                }, D.prototype.newNode = function(n) {
                  return new t2(this.graphManager, n);
                }, D.prototype.newEdge = function(n) {
                  return new o(null, null, n);
                }, D.prototype.initParameters = function() {
                  f.prototype.initParameters.call(this, arguments), this.isSubLayout || (s.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = l.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
                }, D.prototype.initSpringEmbedder = function() {
                  f.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
                }, D.prototype.layout = function() {
                  var n = T.DEFAULT_CREATE_BENDS_AS_NEEDED;
                  return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, D.prototype.classicLayout = function() {
                  if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                    if (s.TREE_REDUCTION_ON_INCREMENTAL) {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m = new Set(this.getAllNodes()), p = this.nodesWithGravity.filter(function(I) {
                        return m.has(I);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p);
                    }
                  } else {
                    var n = this.getFlatForest();
                    if (n.length > 0)
                      this.positionNodesRadially(n);
                    else {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m = new Set(this.getAllNodes()), p = this.nodesWithGravity.filter(function(E) {
                        return m.has(E);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p), this.positionNodesRandomly();
                    }
                  }
                  return Object.keys(this.constraints).length > 0 && (c.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), s.APPLY_LAYOUT && this.runSpringEmbedder(), true;
                }, D.prototype.tick = function() {
                  if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                    if (this.prunedNodesAll.length > 0)
                      this.isTreeGrowing = true;
                    else
                      return true;
                  if (this.totalIterations % l.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                    if (this.isConverged())
                      if (this.prunedNodesAll.length > 0)
                        this.isTreeGrowing = true;
                      else
                        return true;
                    this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                  }
                  if (this.isTreeGrowing) {
                    if (this.growTreeIterations % 10 == 0)
                      if (this.prunedNodesAll.length > 0) {
                        this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                        var n = new Set(this.getAllNodes()), m = this.nodesWithGravity.filter(function(y) {
                          return n.has(y);
                        });
                        this.graphManager.setAllNodesToApplyGravitation(m), this.graphManager.updateBounds(), this.updateGrid(), s.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                      } else
                        this.isTreeGrowing = false, this.isGrowthFinished = true;
                    this.growTreeIterations++;
                  }
                  if (this.isGrowthFinished) {
                    if (this.isConverged())
                      return true;
                    this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), s.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                  }
                  var p = !this.isTreeGrowing && !this.isGrowthFinished, E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                  return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(p, E), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                }, D.prototype.getPositionsData = function() {
                  for (var n = this.graphManager.getAllNodes(), m = {}, p = 0; p < n.length; p++) {
                    var E = n[p].rect, y = n[p].id;
                    m[y] = {
                      id: y,
                      x: E.getCenterX(),
                      y: E.getCenterY(),
                      w: E.width,
                      h: E.height
                    };
                  }
                  return m;
                }, D.prototype.runSpringEmbedder = function() {
                  this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                  var n = false;
                  if (l.ANIMATE === "during")
                    this.emit("layoutstarted");
                  else {
                    for (; !n; )
                      n = this.tick();
                    this.graphManager.updateBounds();
                  }
                }, D.prototype.moveNodes = function() {
                  for (var n = this.getAllNodes(), m, p = 0; p < n.length; p++)
                    m = n[p], m.calculateDisplacement();
                  Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                  for (var p = 0; p < n.length; p++)
                    m = n[p], m.move();
                }, D.prototype.initConstraintVariables = function() {
                  var n = this;
                  this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                  for (var m = this.graphManager.getAllNodes(), p = 0; p < m.length; p++) {
                    var E = m[p];
                    this.idToNodeMap.set(E.id, E);
                  }
                  var y = function O(H) {
                    for (var $ = H.getChild().getNodes(), _, ht = 0, J = 0; J < $.length; J++)
                      _ = $[J], _.getChild() == null ? n.fixedNodeSet.has(_.id) && (ht += 100) : ht += O(_);
                    return ht;
                  };
                  if (this.constraints.fixedNodeConstraint) {
                    this.constraints.fixedNodeConstraint.forEach(function($) {
                      n.fixedNodeSet.add($.nodeId);
                    });
                    for (var m = this.graphManager.getAllNodes(), E, p = 0; p < m.length; p++)
                      if (E = m[p], E.getChild() != null) {
                        var I = y(E);
                        I > 0 && (E.fixedNodeWeight = I);
                      }
                  }
                  if (this.constraints.relativePlacementConstraint) {
                    var w = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
                    if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(O) {
                      n.fixedNodesOnHorizontal.add(O), n.fixedNodesOnVertical.add(O);
                    }), this.constraints.alignmentConstraint) {
                      if (this.constraints.alignmentConstraint.vertical)
                        for (var W = this.constraints.alignmentConstraint.vertical, p = 0; p < W.length; p++)
                          this.dummyToNodeForVerticalAlignment.set("dummy" + p, []), W[p].forEach(function(H) {
                            w.set(H, "dummy" + p), n.dummyToNodeForVerticalAlignment.get("dummy" + p).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnHorizontal.add("dummy" + p);
                          });
                      if (this.constraints.alignmentConstraint.horizontal)
                        for (var x = this.constraints.alignmentConstraint.horizontal, p = 0; p < x.length; p++)
                          this.dummyToNodeForHorizontalAlignment.set("dummy" + p, []), x[p].forEach(function(H) {
                            R.set(H, "dummy" + p), n.dummyToNodeForHorizontalAlignment.get("dummy" + p).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnVertical.add("dummy" + p);
                          });
                    }
                    if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.shuffle = function(O) {
                        var H, $, _;
                        for (_ = O.length - 1; _ >= 2 * O.length / 3; _--)
                          H = Math.floor(Math.random() * (_ + 1)), $ = O[_], O[_] = O[H], O[H] = $;
                        return O;
                      }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(O) {
                        if (O.left) {
                          var H = w.has(O.left) ? w.get(O.left) : O.left, $ = w.has(O.right) ? w.get(O.right) : O.right;
                          n.nodesInRelativeHorizontal.includes(H) || (n.nodesInRelativeHorizontal.push(H), n.nodeToRelativeConstraintMapHorizontal.set(H, []), n.dummyToNodeForVerticalAlignment.has(H) ? n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(H).getCenterX())), n.nodesInRelativeHorizontal.includes($) || (n.nodesInRelativeHorizontal.push($), n.nodeToRelativeConstraintMapHorizontal.set($, []), n.dummyToNodeForVerticalAlignment.has($) ? n.nodeToTempPositionMapHorizontal.set($, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get($)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set($, n.idToNodeMap.get($).getCenterX())), n.nodeToRelativeConstraintMapHorizontal.get(H).push({ right: $, gap: O.gap }), n.nodeToRelativeConstraintMapHorizontal.get($).push({ left: H, gap: O.gap });
                        } else {
                          var _ = R.has(O.top) ? R.get(O.top) : O.top, ht = R.has(O.bottom) ? R.get(O.bottom) : O.bottom;
                          n.nodesInRelativeVertical.includes(_) || (n.nodesInRelativeVertical.push(_), n.nodeToRelativeConstraintMapVertical.set(_, []), n.dummyToNodeForHorizontalAlignment.has(_) ? n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(_)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(_).getCenterY())), n.nodesInRelativeVertical.includes(ht) || (n.nodesInRelativeVertical.push(ht), n.nodeToRelativeConstraintMapVertical.set(ht, []), n.dummyToNodeForHorizontalAlignment.has(ht) ? n.nodeToTempPositionMapVertical.set(ht, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(ht)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(ht, n.idToNodeMap.get(ht).getCenterY())), n.nodeToRelativeConstraintMapVertical.get(_).push({ bottom: ht, gap: O.gap }), n.nodeToRelativeConstraintMapVertical.get(ht).push({ top: _, gap: O.gap });
                        }
                      });
                    else {
                      var q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
                      this.constraints.relativePlacementConstraint.forEach(function(O) {
                        if (O.left) {
                          var H = w.has(O.left) ? w.get(O.left) : O.left, $ = w.has(O.right) ? w.get(O.right) : O.right;
                          q.has(H) ? q.get(H).push($) : q.set(H, [$]), q.has($) ? q.get($).push(H) : q.set($, [H]);
                        } else {
                          var _ = R.has(O.top) ? R.get(O.top) : O.top, ht = R.has(O.bottom) ? R.get(O.bottom) : O.bottom;
                          V.has(_) ? V.get(_).push(ht) : V.set(_, [ht]), V.has(ht) ? V.get(ht).push(_) : V.set(ht, [_]);
                        }
                      });
                      var Y = function(H, $) {
                        var _ = [], ht = [], J = new K(), Rt = /* @__PURE__ */ new Set(), Lt = 0;
                        return H.forEach(function(vt, rt) {
                          if (!Rt.has(rt)) {
                            _[Lt] = [], ht[Lt] = false;
                            var ut = rt;
                            for (J.push(ut), Rt.add(ut), _[Lt].push(ut); J.length != 0; ) {
                              ut = J.shift(), $.has(ut) && (ht[Lt] = true);
                              var Tt = H.get(ut);
                              Tt.forEach(function(Mt) {
                                Rt.has(Mt) || (J.push(Mt), Rt.add(Mt), _[Lt].push(Mt));
                              });
                            }
                            Lt++;
                          }
                        }), { components: _, isFixed: ht };
                      }, et = Y(q, n.fixedNodesOnHorizontal);
                      this.componentsOnHorizontal = et.components, this.fixedComponentsOnHorizontal = et.isFixed;
                      var z = Y(V, n.fixedNodesOnVertical);
                      this.componentsOnVertical = z.components, this.fixedComponentsOnVertical = z.isFixed;
                    }
                  }
                }, D.prototype.updateDisplacements = function() {
                  var n = this;
                  if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(z) {
                    var O = n.idToNodeMap.get(z.nodeId);
                    O.displacementX = 0, O.displacementY = 0;
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var m = this.constraints.alignmentConstraint.vertical, p = 0; p < m.length; p++) {
                        for (var E = 0, y = 0; y < m[p].length; y++) {
                          if (this.fixedNodeSet.has(m[p][y])) {
                            E = 0;
                            break;
                          }
                          E += this.idToNodeMap.get(m[p][y]).displacementX;
                        }
                        for (var I = E / m[p].length, y = 0; y < m[p].length; y++)
                          this.idToNodeMap.get(m[p][y]).displacementX = I;
                      }
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var w = this.constraints.alignmentConstraint.horizontal, p = 0; p < w.length; p++) {
                        for (var R = 0, y = 0; y < w[p].length; y++) {
                          if (this.fixedNodeSet.has(w[p][y])) {
                            R = 0;
                            break;
                          }
                          R += this.idToNodeMap.get(w[p][y]).displacementY;
                        }
                        for (var W = R / w[p].length, y = 0; y < w[p].length; y++)
                          this.idToNodeMap.get(w[p][y]).displacementY = W;
                      }
                  }
                  if (this.constraints.relativePlacementConstraint)
                    if (s.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var O = 0;
                          n.dummyToNodeForVerticalAlignment.has(z) ? O = n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(z)[0]).displacementX : O = n.idToNodeMap.get(z).displacementX, n.nodeToRelativeConstraintMapHorizontal.get(z).forEach(function(H) {
                            if (H.right) {
                              var $ = n.nodeToTempPositionMapHorizontal.get(H.right) - n.nodeToTempPositionMapHorizontal.get(z) - O;
                              $ < H.gap && (O -= H.gap - $);
                            } else {
                              var $ = n.nodeToTempPositionMapHorizontal.get(z) - n.nodeToTempPositionMapHorizontal.get(H.left) + O;
                              $ < H.gap && (O += H.gap - $);
                            }
                          }), n.nodeToTempPositionMapHorizontal.set(z, n.nodeToTempPositionMapHorizontal.get(z) + O), n.dummyToNodeForVerticalAlignment.has(z) ? n.dummyToNodeForVerticalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementX = O;
                          }) : n.idToNodeMap.get(z).displacementX = O;
                        }
                      }), this.nodesInRelativeVertical.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var O = 0;
                          n.dummyToNodeForHorizontalAlignment.has(z) ? O = n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(z)[0]).displacementY : O = n.idToNodeMap.get(z).displacementY, n.nodeToRelativeConstraintMapVertical.get(z).forEach(function(H) {
                            if (H.bottom) {
                              var $ = n.nodeToTempPositionMapVertical.get(H.bottom) - n.nodeToTempPositionMapVertical.get(z) - O;
                              $ < H.gap && (O -= H.gap - $);
                            } else {
                              var $ = n.nodeToTempPositionMapVertical.get(z) - n.nodeToTempPositionMapVertical.get(H.top) + O;
                              $ < H.gap && (O += H.gap - $);
                            }
                          }), n.nodeToTempPositionMapVertical.set(z, n.nodeToTempPositionMapVertical.get(z) + O), n.dummyToNodeForHorizontalAlignment.has(z) ? n.dummyToNodeForHorizontalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementY = O;
                          }) : n.idToNodeMap.get(z).displacementY = O;
                        }
                      });
                    else {
                      for (var p = 0; p < this.componentsOnHorizontal.length; p++) {
                        var x = this.componentsOnHorizontal[p];
                        if (this.fixedComponentsOnHorizontal[p])
                          for (var y = 0; y < x.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(x[y]) ? this.dummyToNodeForVerticalAlignment.get(x[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = 0;
                            }) : this.idToNodeMap.get(x[y]).displacementX = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < x.length; y++)
                            if (this.dummyToNodeForVerticalAlignment.has(x[y])) {
                              var Y = this.dummyToNodeForVerticalAlignment.get(x[y]);
                              q += Y.length * this.idToNodeMap.get(Y[0]).displacementX, V += Y.length;
                            } else
                              q += this.idToNodeMap.get(x[y]).displacementX, V++;
                          for (var et = q / V, y = 0; y < x.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(x[y]) ? this.dummyToNodeForVerticalAlignment.get(x[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = et;
                            }) : this.idToNodeMap.get(x[y]).displacementX = et;
                        }
                      }
                      for (var p = 0; p < this.componentsOnVertical.length; p++) {
                        var x = this.componentsOnVertical[p];
                        if (this.fixedComponentsOnVertical[p])
                          for (var y = 0; y < x.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(x[y]) ? this.dummyToNodeForHorizontalAlignment.get(x[y]).forEach(function($) {
                              n.idToNodeMap.get($).displacementY = 0;
                            }) : this.idToNodeMap.get(x[y]).displacementY = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < x.length; y++)
                            if (this.dummyToNodeForHorizontalAlignment.has(x[y])) {
                              var Y = this.dummyToNodeForHorizontalAlignment.get(x[y]);
                              q += Y.length * this.idToNodeMap.get(Y[0]).displacementY, V += Y.length;
                            } else
                              q += this.idToNodeMap.get(x[y]).displacementY, V++;
                          for (var et = q / V, y = 0; y < x.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(x[y]) ? this.dummyToNodeForHorizontalAlignment.get(x[y]).forEach(function(J) {
                              n.idToNodeMap.get(J).displacementY = et;
                            }) : this.idToNodeMap.get(x[y]).displacementY = et;
                        }
                      }
                    }
                }, D.prototype.calculateNodesToApplyGravitationTo = function() {
                  var n = [], m, p = this.graphManager.getGraphs(), E = p.length, y;
                  for (y = 0; y < E; y++)
                    m = p[y], m.updateConnected(), m.isConnected || (n = n.concat(m.getNodes()));
                  return n;
                }, D.prototype.createBendpoints = function() {
                  var n = [];
                  n = n.concat(this.graphManager.getAllEdges());
                  var m = /* @__PURE__ */ new Set(), p;
                  for (p = 0; p < n.length; p++) {
                    var E = n[p];
                    if (!m.has(E)) {
                      var y = E.getSource(), I = E.getTarget();
                      if (y == I)
                        E.getBendpoints().push(new d()), E.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(E), m.add(E);
                      else {
                        var w = [];
                        if (w = w.concat(y.getEdgeListToNode(I)), w = w.concat(I.getEdgeListToNode(y)), !m.has(w[0])) {
                          if (w.length > 1) {
                            var R;
                            for (R = 0; R < w.length; R++) {
                              var W = w[R];
                              W.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(W);
                            }
                          }
                          w.forEach(function(x) {
                            m.add(x);
                          });
                        }
                      }
                    }
                    if (m.size == n.length)
                      break;
                  }
                }, D.prototype.positionNodesRadially = function(n) {
                  for (var m = new u(0, 0), p = Math.ceil(Math.sqrt(n.length)), E = 0, y = 0, I = 0, w = new d(0, 0), R = 0; R < n.length; R++) {
                    R % p == 0 && (I = 0, y = E, R != 0 && (y += s.DEFAULT_COMPONENT_SEPERATION), E = 0);
                    var W = n[R], x = F.findCenterOfTree(W);
                    m.x = I, m.y = y, w = D.radialLayout(W, x, m), w.y > E && (E = Math.floor(w.y)), I = Math.floor(w.x + s.DEFAULT_COMPONENT_SEPERATION);
                  }
                  this.transform(new d(T.WORLD_CENTER_X - w.x / 2, T.WORLD_CENTER_Y - w.y / 2));
                }, D.radialLayout = function(n, m, p) {
                  var E = Math.max(this.maxDiagonalInTree(n), s.DEFAULT_RADIAL_SEPARATION);
                  D.branchRadialLayout(m, null, 0, 359, 0, E);
                  var y = B.calculateBounds(n), I = new U();
                  I.setDeviceOrgX(y.getMinX()), I.setDeviceOrgY(y.getMinY()), I.setWorldOrgX(p.x), I.setWorldOrgY(p.y);
                  for (var w = 0; w < n.length; w++) {
                    var R = n[w];
                    R.transform(I);
                  }
                  var W = new d(y.getMaxX(), y.getMaxY());
                  return I.inverseTransformPoint(W);
                }, D.branchRadialLayout = function(n, m, p, E, y, I) {
                  var w = (E - p + 1) / 2;
                  w < 0 && (w += 180);
                  var R = (w + p) % 360, W = R * G.TWO_PI / 360, x = y * Math.cos(W), q = y * Math.sin(W);
                  n.setCenter(x, q);
                  var V = [];
                  V = V.concat(n.getEdges());
                  var Y = V.length;
                  m != null && Y--;
                  for (var et = 0, z = V.length, O, H = n.getEdgesBetween(m); H.length > 1; ) {
                    var $ = H[0];
                    H.splice(0, 1);
                    var _ = V.indexOf($);
                    _ >= 0 && V.splice(_, 1), z--, Y--;
                  }
                  m != null ? O = (V.indexOf(H[0]) + 1) % z : O = 0;
                  for (var ht = Math.abs(E - p) / Y, J = O; et != Y; J = ++J % z) {
                    var Rt = V[J].getOtherEnd(n);
                    if (Rt != m) {
                      var Lt = (p + et * ht) % 360, vt = (Lt + ht) % 360;
                      D.branchRadialLayout(Rt, n, Lt, vt, y + I, I), et++;
                    }
                  }
                }, D.maxDiagonalInTree = function(n) {
                  for (var m = A.MIN_VALUE, p = 0; p < n.length; p++) {
                    var E = n[p], y = E.getDiagonal();
                    y > m && (m = y);
                  }
                  return m;
                }, D.prototype.calcRepulsionRange = function() {
                  return 2 * (this.level + 1) * this.idealEdgeLength;
                }, D.prototype.groupZeroDegreeMembers = function() {
                  var n = this, m = {};
                  this.memberGroups = {}, this.idToDummyNode = {};
                  for (var p = [], E = this.graphManager.getAllNodes(), y = 0; y < E.length; y++) {
                    var I = E[y], w = I.getParent();
                    this.getNodeDegreeWithChildren(I) === 0 && (w.id == null || !this.getToBeTiled(w)) && p.push(I);
                  }
                  for (var y = 0; y < p.length; y++) {
                    var I = p[y], R = I.getParent().id;
                    typeof m[R] > "u" && (m[R] = []), m[R] = m[R].concat(I);
                  }
                  Object.keys(m).forEach(function(W) {
                    if (m[W].length > 1) {
                      var x = "DummyCompound_" + W;
                      n.memberGroups[x] = m[W];
                      var q = m[W][0].getParent(), V = new t2(n.graphManager);
                      V.id = x, V.paddingLeft = q.paddingLeft || 0, V.paddingRight = q.paddingRight || 0, V.paddingBottom = q.paddingBottom || 0, V.paddingTop = q.paddingTop || 0, n.idToDummyNode[x] = V;
                      var Y = n.getGraphManager().add(n.newGraph(), V), et = q.getChild();
                      et.add(V);
                      for (var z = 0; z < m[W].length; z++) {
                        var O = m[W][z];
                        et.remove(O), Y.add(O);
                      }
                    }
                  });
                }, D.prototype.clearCompounds = function() {
                  var n = {}, m = {};
                  this.performDFSOnCompounds();
                  for (var p = 0; p < this.compoundOrder.length; p++)
                    m[this.compoundOrder[p].id] = this.compoundOrder[p], n[this.compoundOrder[p].id] = [].concat(this.compoundOrder[p].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[p].getChild()), this.compoundOrder[p].child = null;
                  this.graphManager.resetAllNodes(), this.tileCompoundMembers(n, m);
                }, D.prototype.clearZeroDegreeMembers = function() {
                  var n = this, m = this.tiledZeroDegreePack = [];
                  Object.keys(this.memberGroups).forEach(function(p) {
                    var E = n.idToDummyNode[p];
                    if (m[p] = n.tileNodes(n.memberGroups[p], E.paddingLeft + E.paddingRight), E.rect.width = m[p].width, E.rect.height = m[p].height, E.setCenter(m[p].centerX, m[p].centerY), E.labelMarginLeft = 0, E.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var y = E.rect.width, I = E.rect.height;
                      E.labelWidth && (E.labelPosHorizontal == "left" ? (E.rect.x -= E.labelWidth, E.setWidth(y + E.labelWidth), E.labelMarginLeft = E.labelWidth) : E.labelPosHorizontal == "center" && E.labelWidth > y ? (E.rect.x -= (E.labelWidth - y) / 2, E.setWidth(E.labelWidth), E.labelMarginLeft = (E.labelWidth - y) / 2) : E.labelPosHorizontal == "right" && E.setWidth(y + E.labelWidth)), E.labelHeight && (E.labelPosVertical == "top" ? (E.rect.y -= E.labelHeight, E.setHeight(I + E.labelHeight), E.labelMarginTop = E.labelHeight) : E.labelPosVertical == "center" && E.labelHeight > I ? (E.rect.y -= (E.labelHeight - I) / 2, E.setHeight(E.labelHeight), E.labelMarginTop = (E.labelHeight - I) / 2) : E.labelPosVertical == "bottom" && E.setHeight(I + E.labelHeight));
                    }
                  });
                }, D.prototype.repopulateCompounds = function() {
                  for (var n = this.compoundOrder.length - 1; n >= 0; n--) {
                    var m = this.compoundOrder[n], p = m.id, E = m.paddingLeft, y = m.paddingTop, I = m.labelMarginLeft, w = m.labelMarginTop;
                    this.adjustLocations(this.tiledMemberPack[p], m.rect.x, m.rect.y, E, y, I, w);
                  }
                }, D.prototype.repopulateZeroDegreeMembers = function() {
                  var n = this, m = this.tiledZeroDegreePack;
                  Object.keys(m).forEach(function(p) {
                    var E = n.idToDummyNode[p], y = E.paddingLeft, I = E.paddingTop, w = E.labelMarginLeft, R = E.labelMarginTop;
                    n.adjustLocations(m[p], E.rect.x, E.rect.y, y, I, w, R);
                  });
                }, D.prototype.getToBeTiled = function(n) {
                  var m = n.id;
                  if (this.toBeTiled[m] != null)
                    return this.toBeTiled[m];
                  var p = n.getChild();
                  if (p == null)
                    return this.toBeTiled[m] = false, false;
                  for (var E = p.getNodes(), y = 0; y < E.length; y++) {
                    var I = E[y];
                    if (this.getNodeDegree(I) > 0)
                      return this.toBeTiled[m] = false, false;
                    if (I.getChild() == null) {
                      this.toBeTiled[I.id] = false;
                      continue;
                    }
                    if (!this.getToBeTiled(I))
                      return this.toBeTiled[m] = false, false;
                  }
                  return this.toBeTiled[m] = true, true;
                }, D.prototype.getNodeDegree = function(n) {
                  n.id;
                  for (var m = n.getEdges(), p = 0, E = 0; E < m.length; E++) {
                    var y = m[E];
                    y.getSource().id !== y.getTarget().id && (p = p + 1);
                  }
                  return p;
                }, D.prototype.getNodeDegreeWithChildren = function(n) {
                  var m = this.getNodeDegree(n);
                  if (n.getChild() == null)
                    return m;
                  for (var p = n.getChild().getNodes(), E = 0; E < p.length; E++) {
                    var y = p[E];
                    m += this.getNodeDegreeWithChildren(y);
                  }
                  return m;
                }, D.prototype.performDFSOnCompounds = function() {
                  this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                }, D.prototype.fillCompexOrderByDFS = function(n) {
                  for (var m = 0; m < n.length; m++) {
                    var p = n[m];
                    p.getChild() != null && this.fillCompexOrderByDFS(p.getChild().getNodes()), this.getToBeTiled(p) && this.compoundOrder.push(p);
                  }
                }, D.prototype.adjustLocations = function(n, m, p, E, y, I, w) {
                  m += E + I, p += y + w;
                  for (var R = m, W = 0; W < n.rows.length; W++) {
                    var x = n.rows[W];
                    m = R;
                    for (var q = 0, V = 0; V < x.length; V++) {
                      var Y = x[V];
                      Y.rect.x = m, Y.rect.y = p, m += Y.rect.width + n.horizontalPadding, Y.rect.height > q && (q = Y.rect.height);
                    }
                    p += q + n.verticalPadding;
                  }
                }, D.prototype.tileCompoundMembers = function(n, m) {
                  var p = this;
                  this.tiledMemberPack = [], Object.keys(n).forEach(function(E) {
                    var y = m[E];
                    if (p.tiledMemberPack[E] = p.tileNodes(n[E], y.paddingLeft + y.paddingRight), y.rect.width = p.tiledMemberPack[E].width, y.rect.height = p.tiledMemberPack[E].height, y.setCenter(p.tiledMemberPack[E].centerX, p.tiledMemberPack[E].centerY), y.labelMarginLeft = 0, y.labelMarginTop = 0, s.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var I = y.rect.width, w = y.rect.height;
                      y.labelWidth && (y.labelPosHorizontal == "left" ? (y.rect.x -= y.labelWidth, y.setWidth(I + y.labelWidth), y.labelMarginLeft = y.labelWidth) : y.labelPosHorizontal == "center" && y.labelWidth > I ? (y.rect.x -= (y.labelWidth - I) / 2, y.setWidth(y.labelWidth), y.labelMarginLeft = (y.labelWidth - I) / 2) : y.labelPosHorizontal == "right" && y.setWidth(I + y.labelWidth)), y.labelHeight && (y.labelPosVertical == "top" ? (y.rect.y -= y.labelHeight, y.setHeight(w + y.labelHeight), y.labelMarginTop = y.labelHeight) : y.labelPosVertical == "center" && y.labelHeight > w ? (y.rect.y -= (y.labelHeight - w) / 2, y.setHeight(y.labelHeight), y.labelMarginTop = (y.labelHeight - w) / 2) : y.labelPosVertical == "bottom" && y.setHeight(w + y.labelHeight));
                    }
                  });
                }, D.prototype.tileNodes = function(n, m) {
                  var p = this.tileNodesByFavoringDim(n, m, true), E = this.tileNodesByFavoringDim(n, m, false), y = this.getOrgRatio(p), I = this.getOrgRatio(E), w;
                  return I < y ? w = E : w = p, w;
                }, D.prototype.getOrgRatio = function(n) {
                  var m = n.width, p = n.height, E = m / p;
                  return E < 1 && (E = 1 / E), E;
                }, D.prototype.calcIdealRowWidth = function(n, m) {
                  var p = s.TILING_PADDING_VERTICAL, E = s.TILING_PADDING_HORIZONTAL, y = n.length, I = 0, w = 0, R = 0;
                  n.forEach(function(z) {
                    I += z.getWidth(), w += z.getHeight(), z.getWidth() > R && (R = z.getWidth());
                  });
                  var W = I / y, x = w / y, q = Math.pow(p - E, 2) + 4 * (W + E) * (x + p) * y, V = (E - p + Math.sqrt(q)) / (2 * (W + E)), Y;
                  m ? (Y = Math.ceil(V), Y == V && Y++) : Y = Math.floor(V);
                  var et = Y * (W + E) - E;
                  return R > et && (et = R), et += E * 2, et;
                }, D.prototype.tileNodesByFavoringDim = function(n, m, p) {
                  var E = s.TILING_PADDING_VERTICAL, y = s.TILING_PADDING_HORIZONTAL, I = s.TILING_COMPARE_BY, w = {
                    rows: [],
                    rowWidth: [],
                    rowHeight: [],
                    width: 0,
                    height: m,
                    // assume minHeight equals to minWidth
                    verticalPadding: E,
                    horizontalPadding: y,
                    centerX: 0,
                    centerY: 0
                  };
                  I && (w.idealRowWidth = this.calcIdealRowWidth(n, p));
                  var R = function(O) {
                    return O.rect.width * O.rect.height;
                  }, W = function(O, H) {
                    return R(H) - R(O);
                  };
                  n.sort(function(z, O) {
                    var H = W;
                    return w.idealRowWidth ? (H = I, H(z.id, O.id)) : H(z, O);
                  });
                  for (var x = 0, q = 0, V = 0; V < n.length; V++) {
                    var Y = n[V];
                    x += Y.getCenterX(), q += Y.getCenterY();
                  }
                  w.centerX = x / n.length, w.centerY = q / n.length;
                  for (var V = 0; V < n.length; V++) {
                    var Y = n[V];
                    if (w.rows.length == 0)
                      this.insertNodeToRow(w, Y, 0, m);
                    else if (this.canAddHorizontal(w, Y.rect.width, Y.rect.height)) {
                      var et = w.rows.length - 1;
                      w.idealRowWidth || (et = this.getShortestRowIndex(w)), this.insertNodeToRow(w, Y, et, m);
                    } else
                      this.insertNodeToRow(w, Y, w.rows.length, m);
                    this.shiftToLastRow(w);
                  }
                  return w;
                }, D.prototype.insertNodeToRow = function(n, m, p, E) {
                  var y = E;
                  if (p == n.rows.length) {
                    var I = [];
                    n.rows.push(I), n.rowWidth.push(y), n.rowHeight.push(0);
                  }
                  var w = n.rowWidth[p] + m.rect.width;
                  n.rows[p].length > 0 && (w += n.horizontalPadding), n.rowWidth[p] = w, n.width < w && (n.width = w);
                  var R = m.rect.height;
                  p > 0 && (R += n.verticalPadding);
                  var W = 0;
                  R > n.rowHeight[p] && (W = n.rowHeight[p], n.rowHeight[p] = R, W = n.rowHeight[p] - W), n.height += W, n.rows[p].push(m);
                }, D.prototype.getShortestRowIndex = function(n) {
                  for (var m = -1, p = Number.MAX_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] < p && (m = E, p = n.rowWidth[E]);
                  return m;
                }, D.prototype.getLongestRowIndex = function(n) {
                  for (var m = -1, p = Number.MIN_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] > p && (m = E, p = n.rowWidth[E]);
                  return m;
                }, D.prototype.canAddHorizontal = function(n, m, p) {
                  if (n.idealRowWidth) {
                    var E = n.rows.length - 1, y = n.rowWidth[E];
                    return y + m + n.horizontalPadding <= n.idealRowWidth;
                  }
                  var I = this.getShortestRowIndex(n);
                  if (I < 0)
                    return true;
                  var w = n.rowWidth[I];
                  if (w + n.horizontalPadding + m <= n.width) return true;
                  var R = 0;
                  n.rowHeight[I] < p && I > 0 && (R = p + n.verticalPadding - n.rowHeight[I]);
                  var W;
                  n.width - w >= m + n.horizontalPadding ? W = (n.height + R) / (w + m + n.horizontalPadding) : W = (n.height + R) / n.width, R = p + n.verticalPadding;
                  var x;
                  return n.width < m ? x = (n.height + R) / m : x = (n.height + R) / n.width, x < 1 && (x = 1 / x), W < 1 && (W = 1 / W), W < x;
                }, D.prototype.shiftToLastRow = function(n) {
                  var m = this.getLongestRowIndex(n), p = n.rowWidth.length - 1, E = n.rows[m], y = E[E.length - 1], I = y.width + n.horizontalPadding;
                  if (n.width - n.rowWidth[p] > I && m != p) {
                    E.splice(-1, 1), n.rows[p].push(y), n.rowWidth[m] = n.rowWidth[m] - I, n.rowWidth[p] = n.rowWidth[p] + I, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                    for (var w = Number.MIN_VALUE, R = 0; R < E.length; R++)
                      E[R].height > w && (w = E[R].height);
                    m > 0 && (w += n.verticalPadding);
                    var W = n.rowHeight[m] + n.rowHeight[p];
                    n.rowHeight[m] = w, n.rowHeight[p] < y.height + n.verticalPadding && (n.rowHeight[p] = y.height + n.verticalPadding);
                    var x = n.rowHeight[m] + n.rowHeight[p];
                    n.height += x - W, this.shiftToLastRow(n);
                  }
                }, D.prototype.tilingPreLayout = function() {
                  s.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, D.prototype.tilingPostLayout = function() {
                  s.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, D.prototype.reduceTrees = function() {
                  for (var n = [], m = true, p; m; ) {
                    var E = this.graphManager.getAllNodes(), y = [];
                    m = false;
                    for (var I = 0; I < E.length; I++)
                      if (p = E[I], p.getEdges().length == 1 && !p.getEdges()[0].isInterGraph && p.getChild() == null) {
                        if (s.PURE_INCREMENTAL) {
                          var w = p.getEdges()[0].getOtherEnd(p), R = new N2(p.getCenterX() - w.getCenterX(), p.getCenterY() - w.getCenterY());
                          y.push([p, p.getEdges()[0], p.getOwner(), R]);
                        } else
                          y.push([p, p.getEdges()[0], p.getOwner()]);
                        m = true;
                      }
                    if (m == true) {
                      for (var W = [], x = 0; x < y.length; x++)
                        y[x][0].getEdges().length == 1 && (W.push(y[x]), y[x][0].getOwner().remove(y[x][0]));
                      n.push(W), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                    }
                  }
                  this.prunedNodesAll = n;
                }, D.prototype.growTree = function(n) {
                  for (var m = n.length, p = n[m - 1], E, y = 0; y < p.length; y++)
                    E = p[y], this.findPlaceforPrunedNode(E), E[2].add(E[0]), E[2].add(E[1], E[1].source, E[1].target);
                  n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, D.prototype.findPlaceforPrunedNode = function(n) {
                  var m, p, E = n[0];
                  if (E == n[1].source ? p = n[1].target : p = n[1].source, s.PURE_INCREMENTAL)
                    E.setCenter(p.getCenterX() + n[3].getWidth(), p.getCenterY() + n[3].getHeight());
                  else {
                    var y = p.startX, I = p.finishX, w = p.startY, R = p.finishY, W = 0, x = 0, q = 0, V = 0, Y = [W, q, x, V];
                    if (w > 0)
                      for (var et = y; et <= I; et++)
                        Y[0] += this.grid[et][w - 1].length + this.grid[et][w].length - 1;
                    if (I < this.grid.length - 1)
                      for (var et = w; et <= R; et++)
                        Y[1] += this.grid[I + 1][et].length + this.grid[I][et].length - 1;
                    if (R < this.grid[0].length - 1)
                      for (var et = y; et <= I; et++)
                        Y[2] += this.grid[et][R + 1].length + this.grid[et][R].length - 1;
                    if (y > 0)
                      for (var et = w; et <= R; et++)
                        Y[3] += this.grid[y - 1][et].length + this.grid[y][et].length - 1;
                    for (var z = A.MAX_VALUE, O, H, $ = 0; $ < Y.length; $++)
                      Y[$] < z ? (z = Y[$], O = 1, H = $) : Y[$] == z && O++;
                    if (O == 3 && z == 0)
                      Y[0] == 0 && Y[1] == 0 && Y[2] == 0 ? m = 1 : Y[0] == 0 && Y[1] == 0 && Y[3] == 0 ? m = 0 : Y[0] == 0 && Y[2] == 0 && Y[3] == 0 ? m = 3 : Y[1] == 0 && Y[2] == 0 && Y[3] == 0 && (m = 2);
                    else if (O == 2 && z == 0) {
                      var _ = Math.floor(Math.random() * 2);
                      Y[0] == 0 && Y[1] == 0 ? _ == 0 ? m = 0 : m = 1 : Y[0] == 0 && Y[2] == 0 ? _ == 0 ? m = 0 : m = 2 : Y[0] == 0 && Y[3] == 0 ? _ == 0 ? m = 0 : m = 3 : Y[1] == 0 && Y[2] == 0 ? _ == 0 ? m = 1 : m = 2 : Y[1] == 0 && Y[3] == 0 ? _ == 0 ? m = 1 : m = 3 : _ == 0 ? m = 2 : m = 3;
                    } else if (O == 4 && z == 0) {
                      var _ = Math.floor(Math.random() * 4);
                      m = _;
                    } else
                      m = H;
                    m == 0 ? E.setCenter(p.getCenterX(), p.getCenterY() - p.getHeight() / 2 - l.DEFAULT_EDGE_LENGTH - E.getHeight() / 2) : m == 1 ? E.setCenter(p.getCenterX() + p.getWidth() / 2 + l.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, p.getCenterY()) : m == 2 ? E.setCenter(p.getCenterX(), p.getCenterY() + p.getHeight() / 2 + l.DEFAULT_EDGE_LENGTH + E.getHeight() / 2) : E.setCenter(p.getCenterX() - p.getWidth() / 2 - l.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, p.getCenterY());
                  }
                }, a.exports = D;
              }
            ),
            /***/
            991: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutNode, i = e2(551).IMath;
                function v(o, s, c, l) {
                  f.call(this, o, s, c, l);
                }
                v.prototype = Object.create(f.prototype);
                for (var t2 in f)
                  v[t2] = f[t2];
                v.prototype.calculateDisplacement = function() {
                  var o = this.graphManager.getLayout();
                  this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += o.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += o.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += o.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += o.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > o.coolingFactor * o.maxNodeDisplacement && (this.displacementX = o.coolingFactor * o.maxNodeDisplacement * i.sign(this.displacementX)), Math.abs(this.displacementY) > o.coolingFactor * o.maxNodeDisplacement && (this.displacementY = o.coolingFactor * o.maxNodeDisplacement * i.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                }, v.prototype.propogateDisplacementToChildren = function(o, s) {
                  for (var c = this.getChild().getNodes(), l, T = 0; T < c.length; T++)
                    l = c[T], l.getChild() == null ? (l.displacementX += o, l.displacementY += s) : l.propogateDisplacementToChildren(o, s);
                }, v.prototype.move = function() {
                  var o = this.graphManager.getLayout();
                  (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), o.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, v.prototype.setPred1 = function(o) {
                  this.pred1 = o;
                }, v.prototype.getPred1 = function() {
                  return pred1;
                }, v.prototype.getPred2 = function() {
                  return pred2;
                }, v.prototype.setNext = function(o) {
                  this.next = o;
                }, v.prototype.getNext = function() {
                  return next;
                }, v.prototype.setProcessed = function(o) {
                  this.processed = o;
                }, v.prototype.isProcessed = function() {
                  return processed;
                }, a.exports = v;
              }
            ),
            /***/
            902: (
              /***/
              (a, r, e2) => {
                function f(c) {
                  if (Array.isArray(c)) {
                    for (var l = 0, T = Array(c.length); l < c.length; l++)
                      T[l] = c[l];
                    return T;
                  } else
                    return Array.from(c);
                }
                var i = e2(806), v = e2(551).LinkedList, t2 = e2(551).Matrix, o = e2(551).SVD;
                function s() {
                }
                s.handleConstraints = function(c) {
                  var l = {};
                  l.fixedNodeConstraint = c.constraints.fixedNodeConstraint, l.alignmentConstraint = c.constraints.alignmentConstraint, l.relativePlacementConstraint = c.constraints.relativePlacementConstraint;
                  for (var T = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = [], N2 = [], F = c.getAllNodes(), A = 0, G = 0; G < F.length; G++) {
                    var B = F[G];
                    B.getChild() == null && (u.set(B.id, A++), d.push(B.getCenterX()), N2.push(B.getCenterY()), T.set(B.id, B));
                  }
                  l.relativePlacementConstraint && l.relativePlacementConstraint.forEach(function(S) {
                    !S.gap && S.gap != 0 && (S.left ? S.gap = i.DEFAULT_EDGE_LENGTH + T.get(S.left).getWidth() / 2 + T.get(S.right).getWidth() / 2 : S.gap = i.DEFAULT_EDGE_LENGTH + T.get(S.top).getHeight() / 2 + T.get(S.bottom).getHeight() / 2);
                  });
                  var U = function(b, k) {
                    return { x: b.x - k.x, y: b.y - k.y };
                  }, K = function(b) {
                    var k = 0, Q = 0;
                    return b.forEach(function(Z) {
                      k += d[u.get(Z)], Q += N2[u.get(Z)];
                    }), { x: k / b.size, y: Q / b.size };
                  }, D = function(b, k, Q, Z, it) {
                    function gt2(ft, st) {
                      var Ct = new Set(ft), ct = true, lt = false, Wt = void 0;
                      try {
                        for (var Nt = st[Symbol.iterator](), At; !(ct = (At = Nt.next()).done); ct = true) {
                          var kt = At.value;
                          Ct.add(kt);
                        }
                      } catch (Gt) {
                        lt = true, Wt = Gt;
                      } finally {
                        try {
                          !ct && Nt.return && Nt.return();
                        } finally {
                          if (lt)
                            throw Wt;
                        }
                      }
                      return Ct;
                    }
                    var ot = /* @__PURE__ */ new Map();
                    b.forEach(function(ft, st) {
                      ot.set(st, 0);
                    }), b.forEach(function(ft, st) {
                      ft.forEach(function(Ct) {
                        ot.set(Ct.id, ot.get(Ct.id) + 1);
                      });
                    });
                    var tt = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), dt2 = new v();
                    ot.forEach(function(ft, st) {
                      ft == 0 ? (dt2.push(st), Q || (k == "horizontal" ? tt.set(st, u.has(st) ? d[u.get(st)] : Z.get(st)) : tt.set(st, u.has(st) ? N2[u.get(st)] : Z.get(st)))) : tt.set(st, Number.NEGATIVE_INFINITY), Q && j.set(st, /* @__PURE__ */ new Set([st]));
                    }), Q && it.forEach(function(ft) {
                      var st = [];
                      if (ft.forEach(function(lt) {
                        Q.has(lt) && st.push(lt);
                      }), st.length > 0) {
                        var Ct = 0;
                        st.forEach(function(lt) {
                          k == "horizontal" ? (tt.set(lt, u.has(lt) ? d[u.get(lt)] : Z.get(lt)), Ct += tt.get(lt)) : (tt.set(lt, u.has(lt) ? N2[u.get(lt)] : Z.get(lt)), Ct += tt.get(lt));
                        }), Ct = Ct / st.length, ft.forEach(function(lt) {
                          Q.has(lt) || tt.set(lt, Ct);
                        });
                      } else {
                        var ct = 0;
                        ft.forEach(function(lt) {
                          k == "horizontal" ? ct += u.has(lt) ? d[u.get(lt)] : Z.get(lt) : ct += u.has(lt) ? N2[u.get(lt)] : Z.get(lt);
                        }), ct = ct / ft.length, ft.forEach(function(lt) {
                          tt.set(lt, ct);
                        });
                      }
                    });
                    for (var wt = function() {
                      var st = dt2.shift(), Ct = b.get(st);
                      Ct.forEach(function(ct) {
                        if (tt.get(ct.id) < tt.get(st) + ct.gap)
                          if (Q && Q.has(ct.id)) {
                            var lt = void 0;
                            if (k == "horizontal" ? lt = u.has(ct.id) ? d[u.get(ct.id)] : Z.get(ct.id) : lt = u.has(ct.id) ? N2[u.get(ct.id)] : Z.get(ct.id), tt.set(ct.id, lt), lt < tt.get(st) + ct.gap) {
                              var Wt = tt.get(st) + ct.gap - lt;
                              j.get(st).forEach(function(Nt) {
                                tt.set(Nt, tt.get(Nt) - Wt);
                              });
                            }
                          } else
                            tt.set(ct.id, tt.get(st) + ct.gap);
                        ot.set(ct.id, ot.get(ct.id) - 1), ot.get(ct.id) == 0 && dt2.push(ct.id), Q && j.set(ct.id, gt2(j.get(st), j.get(ct.id)));
                      });
                    }; dt2.length != 0; )
                      wt();
                    if (Q) {
                      var yt = /* @__PURE__ */ new Set();
                      b.forEach(function(ft, st) {
                        ft.length == 0 && yt.add(st);
                      });
                      var It = [];
                      j.forEach(function(ft, st) {
                        if (yt.has(st)) {
                          var Ct = false, ct = true, lt = false, Wt = void 0;
                          try {
                            for (var Nt = ft[Symbol.iterator](), At; !(ct = (At = Nt.next()).done); ct = true) {
                              var kt = At.value;
                              Q.has(kt) && (Ct = true);
                            }
                          } catch (Ft) {
                            lt = true, Wt = Ft;
                          } finally {
                            try {
                              !ct && Nt.return && Nt.return();
                            } finally {
                              if (lt)
                                throw Wt;
                            }
                          }
                          if (!Ct) {
                            var Gt = false, $t = void 0;
                            It.forEach(function(Ft, qt) {
                              Ft.has([].concat(f(ft))[0]) && (Gt = true, $t = qt);
                            }), Gt ? ft.forEach(function(Ft) {
                              It[$t].add(Ft);
                            }) : It.push(new Set(ft));
                          }
                        }
                      }), It.forEach(function(ft, st) {
                        var Ct = Number.POSITIVE_INFINITY, ct = Number.POSITIVE_INFINITY, lt = Number.NEGATIVE_INFINITY, Wt = Number.NEGATIVE_INFINITY, Nt = true, At = false, kt = void 0;
                        try {
                          for (var Gt = ft[Symbol.iterator](), $t; !(Nt = ($t = Gt.next()).done); Nt = true) {
                            var Ft = $t.value, qt = void 0;
                            k == "horizontal" ? qt = u.has(Ft) ? d[u.get(Ft)] : Z.get(Ft) : qt = u.has(Ft) ? N2[u.get(Ft)] : Z.get(Ft);
                            var _t = tt.get(Ft);
                            qt < Ct && (Ct = qt), qt > lt && (lt = qt), _t < ct && (ct = _t), _t > Wt && (Wt = _t);
                          }
                        } catch (ie) {
                          At = true, kt = ie;
                        } finally {
                          try {
                            !Nt && Gt.return && Gt.return();
                          } finally {
                            if (At)
                              throw kt;
                          }
                        }
                        var ue = (Ct + lt) / 2 - (ct + Wt) / 2, Kt = true, te = false, ee = void 0;
                        try {
                          for (var jt = ft[Symbol.iterator](), se; !(Kt = (se = jt.next()).done); Kt = true) {
                            var re = se.value;
                            tt.set(re, tt.get(re) + ue);
                          }
                        } catch (ie) {
                          te = true, ee = ie;
                        } finally {
                          try {
                            !Kt && jt.return && jt.return();
                          } finally {
                            if (te)
                              throw ee;
                          }
                        }
                      });
                    }
                    return tt;
                  }, at = function(b) {
                    var k = 0, Q = 0, Z = 0, it = 0;
                    if (b.forEach(function(j) {
                      j.left ? d[u.get(j.left)] - d[u.get(j.right)] >= 0 ? k++ : Q++ : N2[u.get(j.top)] - N2[u.get(j.bottom)] >= 0 ? Z++ : it++;
                    }), k > Q && Z > it)
                      for (var gt2 = 0; gt2 < u.size; gt2++)
                        d[gt2] = -1 * d[gt2], N2[gt2] = -1 * N2[gt2];
                    else if (k > Q)
                      for (var ot = 0; ot < u.size; ot++)
                        d[ot] = -1 * d[ot];
                    else if (Z > it)
                      for (var tt = 0; tt < u.size; tt++)
                        N2[tt] = -1 * N2[tt];
                  }, n = function(b) {
                    var k = [], Q = new v(), Z = /* @__PURE__ */ new Set(), it = 0;
                    return b.forEach(function(gt2, ot) {
                      if (!Z.has(ot)) {
                        k[it] = [];
                        var tt = ot;
                        for (Q.push(tt), Z.add(tt), k[it].push(tt); Q.length != 0; ) {
                          tt = Q.shift();
                          var j = b.get(tt);
                          j.forEach(function(dt2) {
                            Z.has(dt2.id) || (Q.push(dt2.id), Z.add(dt2.id), k[it].push(dt2.id));
                          });
                        }
                        it++;
                      }
                    }), k;
                  }, m = function(b) {
                    var k = /* @__PURE__ */ new Map();
                    return b.forEach(function(Q, Z) {
                      k.set(Z, []);
                    }), b.forEach(function(Q, Z) {
                      Q.forEach(function(it) {
                        k.get(Z).push(it), k.get(it.id).push({ id: Z, gap: it.gap, direction: it.direction });
                      });
                    }), k;
                  }, p = function(b) {
                    var k = /* @__PURE__ */ new Map();
                    return b.forEach(function(Q, Z) {
                      k.set(Z, []);
                    }), b.forEach(function(Q, Z) {
                      Q.forEach(function(it) {
                        k.get(it.id).push({ id: Z, gap: it.gap, direction: it.direction });
                      });
                    }), k;
                  }, E = [], y = [], I = false, w = false, R = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), q = [];
                  if (l.fixedNodeConstraint && l.fixedNodeConstraint.forEach(function(S) {
                    R.add(S.nodeId);
                  }), l.relativePlacementConstraint && (l.relativePlacementConstraint.forEach(function(S) {
                    S.left ? (W.has(S.left) ? W.get(S.left).push({ id: S.right, gap: S.gap, direction: "horizontal" }) : W.set(S.left, [{ id: S.right, gap: S.gap, direction: "horizontal" }]), W.has(S.right) || W.set(S.right, [])) : (W.has(S.top) ? W.get(S.top).push({ id: S.bottom, gap: S.gap, direction: "vertical" }) : W.set(S.top, [{ id: S.bottom, gap: S.gap, direction: "vertical" }]), W.has(S.bottom) || W.set(S.bottom, []));
                  }), x = m(W), q = n(x)), i.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                    if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 1)
                      l.fixedNodeConstraint.forEach(function(S, b) {
                        E[b] = [S.position.x, S.position.y], y[b] = [d[u.get(S.nodeId)], N2[u.get(S.nodeId)]];
                      }), I = true;
                    else if (l.alignmentConstraint)
                      (function() {
                        var S = 0;
                        if (l.alignmentConstraint.vertical) {
                          for (var b = l.alignmentConstraint.vertical, k = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            b[tt].forEach(function(yt) {
                              j.add(yt);
                            });
                            var dt2 = new Set([].concat(f(j)).filter(function(yt) {
                              return R.has(yt);
                            })), wt = void 0;
                            dt2.size > 0 ? wt = d[u.get(dt2.values().next().value)] : wt = K(j).x, b[tt].forEach(function(yt) {
                              E[S] = [wt, N2[u.get(yt)]], y[S] = [d[u.get(yt)], N2[u.get(yt)]], S++;
                            });
                          }, Q = 0; Q < b.length; Q++)
                            k(Q);
                          I = true;
                        }
                        if (l.alignmentConstraint.horizontal) {
                          for (var Z = l.alignmentConstraint.horizontal, it = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            Z[tt].forEach(function(yt) {
                              j.add(yt);
                            });
                            var dt2 = new Set([].concat(f(j)).filter(function(yt) {
                              return R.has(yt);
                            })), wt = void 0;
                            dt2.size > 0 ? wt = d[u.get(dt2.values().next().value)] : wt = K(j).y, Z[tt].forEach(function(yt) {
                              E[S] = [d[u.get(yt)], wt], y[S] = [d[u.get(yt)], N2[u.get(yt)]], S++;
                            });
                          }, gt2 = 0; gt2 < Z.length; gt2++)
                            it(gt2);
                          I = true;
                        }
                        l.relativePlacementConstraint && (w = true);
                      })();
                    else if (l.relativePlacementConstraint) {
                      for (var V = 0, Y = 0, et = 0; et < q.length; et++)
                        q[et].length > V && (V = q[et].length, Y = et);
                      if (V < x.size / 2)
                        at(l.relativePlacementConstraint), I = false, w = false;
                      else {
                        var z = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), H = [];
                        q[Y].forEach(function(S) {
                          W.get(S).forEach(function(b) {
                            b.direction == "horizontal" ? (z.has(S) ? z.get(S).push(b) : z.set(S, [b]), z.has(b.id) || z.set(b.id, []), H.push({ left: S, right: b.id })) : (O.has(S) ? O.get(S).push(b) : O.set(S, [b]), O.has(b.id) || O.set(b.id, []), H.push({ top: S, bottom: b.id }));
                          });
                        }), at(H), w = false;
                        var $ = D(z, "horizontal"), _ = D(O, "vertical");
                        q[Y].forEach(function(S, b) {
                          y[b] = [d[u.get(S)], N2[u.get(S)]], E[b] = [], $.has(S) ? E[b][0] = $.get(S) : E[b][0] = d[u.get(S)], _.has(S) ? E[b][1] = _.get(S) : E[b][1] = N2[u.get(S)];
                        }), I = true;
                      }
                    }
                    if (I) {
                      for (var ht = void 0, J = t2.transpose(E), Rt = t2.transpose(y), Lt = 0; Lt < J.length; Lt++)
                        J[Lt] = t2.multGamma(J[Lt]), Rt[Lt] = t2.multGamma(Rt[Lt]);
                      var vt = t2.multMat(J, t2.transpose(Rt)), rt = o.svd(vt);
                      ht = t2.multMat(rt.V, t2.transpose(rt.U));
                      for (var ut = 0; ut < u.size; ut++) {
                        var Tt = [d[ut], N2[ut]], Mt = [ht[0][0], ht[1][0]], Dt = [ht[0][1], ht[1][1]];
                        d[ut] = t2.dotProduct(Tt, Mt), N2[ut] = t2.dotProduct(Tt, Dt);
                      }
                      w && at(l.relativePlacementConstraint);
                    }
                  }
                  if (i.ENFORCE_CONSTRAINTS) {
                    if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 0) {
                      var mt = { x: 0, y: 0 };
                      l.fixedNodeConstraint.forEach(function(S, b) {
                        var k = { x: d[u.get(S.nodeId)], y: N2[u.get(S.nodeId)] }, Q = S.position, Z = U(Q, k);
                        mt.x += Z.x, mt.y += Z.y;
                      }), mt.x /= l.fixedNodeConstraint.length, mt.y /= l.fixedNodeConstraint.length, d.forEach(function(S, b) {
                        d[b] += mt.x;
                      }), N2.forEach(function(S, b) {
                        N2[b] += mt.y;
                      }), l.fixedNodeConstraint.forEach(function(S) {
                        d[u.get(S.nodeId)] = S.position.x, N2[u.get(S.nodeId)] = S.position.y;
                      });
                    }
                    if (l.alignmentConstraint) {
                      if (l.alignmentConstraint.vertical)
                        for (var xt = l.alignmentConstraint.vertical, St = function(b) {
                          var k = /* @__PURE__ */ new Set();
                          xt[b].forEach(function(it) {
                            k.add(it);
                          });
                          var Q = new Set([].concat(f(k)).filter(function(it) {
                            return R.has(it);
                          })), Z = void 0;
                          Q.size > 0 ? Z = d[u.get(Q.values().next().value)] : Z = K(k).x, k.forEach(function(it) {
                            R.has(it) || (d[u.get(it)] = Z);
                          });
                        }, Vt = 0; Vt < xt.length; Vt++)
                          St(Vt);
                      if (l.alignmentConstraint.horizontal)
                        for (var Xt = l.alignmentConstraint.horizontal, Ut = function(b) {
                          var k = /* @__PURE__ */ new Set();
                          Xt[b].forEach(function(it) {
                            k.add(it);
                          });
                          var Q = new Set([].concat(f(k)).filter(function(it) {
                            return R.has(it);
                          })), Z = void 0;
                          Q.size > 0 ? Z = N2[u.get(Q.values().next().value)] : Z = K(k).y, k.forEach(function(it) {
                            R.has(it) || (N2[u.get(it)] = Z);
                          });
                        }, bt = 0; bt < Xt.length; bt++)
                          Ut(bt);
                    }
                    l.relativePlacementConstraint && function() {
                      var S = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), gt2 = /* @__PURE__ */ new Set(), ot = /* @__PURE__ */ new Set();
                      if (R.forEach(function(Yt) {
                        gt2.add(Yt), ot.add(Yt);
                      }), l.alignmentConstraint) {
                        if (l.alignmentConstraint.vertical)
                          for (var tt = l.alignmentConstraint.vertical, j = function(Et) {
                            k.set("dummy" + Et, []), tt[Et].forEach(function(Ot) {
                              S.set(Ot, "dummy" + Et), k.get("dummy" + Et).push(Ot), R.has(Ot) && gt2.add("dummy" + Et);
                            }), Z.set("dummy" + Et, d[u.get(tt[Et][0])]);
                          }, dt2 = 0; dt2 < tt.length; dt2++)
                            j(dt2);
                        if (l.alignmentConstraint.horizontal)
                          for (var wt = l.alignmentConstraint.horizontal, yt = function(Et) {
                            Q.set("dummy" + Et, []), wt[Et].forEach(function(Ot) {
                              b.set(Ot, "dummy" + Et), Q.get("dummy" + Et).push(Ot), R.has(Ot) && ot.add("dummy" + Et);
                            }), it.set("dummy" + Et, N2[u.get(wt[Et][0])]);
                          }, It = 0; It < wt.length; It++)
                            yt(It);
                      }
                      var ft = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ct = function(Et) {
                        W.get(Et).forEach(function(Ot) {
                          var Jt = void 0, Zt = void 0;
                          Ot.direction == "horizontal" ? (Jt = S.get(Et) ? S.get(Et) : Et, S.get(Ot.id) ? Zt = { id: S.get(Ot.id), gap: Ot.gap, direction: Ot.direction } : Zt = Ot, ft.has(Jt) ? ft.get(Jt).push(Zt) : ft.set(Jt, [Zt]), ft.has(Zt.id) || ft.set(Zt.id, [])) : (Jt = b.get(Et) ? b.get(Et) : Et, b.get(Ot.id) ? Zt = { id: b.get(Ot.id), gap: Ot.gap, direction: Ot.direction } : Zt = Ot, st.has(Jt) ? st.get(Jt).push(Zt) : st.set(Jt, [Zt]), st.has(Zt.id) || st.set(Zt.id, []));
                        });
                      }, ct = true, lt = false, Wt = void 0;
                      try {
                        for (var Nt = W.keys()[Symbol.iterator](), At; !(ct = (At = Nt.next()).done); ct = true) {
                          var kt = At.value;
                          Ct(kt);
                        }
                      } catch (Yt) {
                        lt = true, Wt = Yt;
                      } finally {
                        try {
                          !ct && Nt.return && Nt.return();
                        } finally {
                          if (lt)
                            throw Wt;
                        }
                      }
                      var Gt = m(ft), $t = m(st), Ft = n(Gt), qt = n($t), _t = p(ft), ue = p(st), Kt = [], te = [];
                      Ft.forEach(function(Yt, Et) {
                        Kt[Et] = [], Yt.forEach(function(Ot) {
                          _t.get(Ot).length == 0 && Kt[Et].push(Ot);
                        });
                      }), qt.forEach(function(Yt, Et) {
                        te[Et] = [], Yt.forEach(function(Ot) {
                          ue.get(Ot).length == 0 && te[Et].push(Ot);
                        });
                      });
                      var ee = D(ft, "horizontal", gt2, Z, Kt), jt = D(st, "vertical", ot, it, te), se = function(Et) {
                        k.get(Et) ? k.get(Et).forEach(function(Ot) {
                          d[u.get(Ot)] = ee.get(Et);
                        }) : d[u.get(Et)] = ee.get(Et);
                      }, re = true, ie = false, Ae = void 0;
                      try {
                        for (var de = ee.keys()[Symbol.iterator](), Me; !(re = (Me = de.next()).done); re = true) {
                          var ve = Me.value;
                          se(ve);
                        }
                      } catch (Yt) {
                        ie = true, Ae = Yt;
                      } finally {
                        try {
                          !re && de.return && de.return();
                        } finally {
                          if (ie)
                            throw Ae;
                        }
                      }
                      var qe = function(Et) {
                        Q.get(Et) ? Q.get(Et).forEach(function(Ot) {
                          N2[u.get(Ot)] = jt.get(Et);
                        }) : N2[u.get(Et)] = jt.get(Et);
                      }, pe = true, we = false, Oe = void 0;
                      try {
                        for (var ye = jt.keys()[Symbol.iterator](), De; !(pe = (De = ye.next()).done); pe = true) {
                          var ve = De.value;
                          qe(ve);
                        }
                      } catch (Yt) {
                        we = true, Oe = Yt;
                      } finally {
                        try {
                          !pe && ye.return && ye.return();
                        } finally {
                          if (we)
                            throw Oe;
                        }
                      }
                    }();
                  }
                  for (var Ht = 0; Ht < F.length; Ht++) {
                    var Bt = F[Ht];
                    Bt.getChild() == null && Bt.setCenter(d[u.get(Bt.id)], N2[u.get(Bt.id)]);
                  }
                }, a.exports = s;
              }
            ),
            /***/
            551: (
              /***/
              (a) => {
                a.exports = M;
              }
            )
            /******/
          }, L = {};
          function g2(a) {
            var r = L[a];
            if (r !== void 0)
              return r.exports;
            var e2 = L[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return P[a](e2, e2.exports, g2), e2.exports;
          }
          var h = g2(45);
          return h;
        })()
      );
    });
  }(fe)), fe.exports;
}
var Er = he.exports;
var Re;
function mr() {
  return Re || (Re = 1, function(C, X) {
    (function(P, L) {
      C.exports = L(yr());
    })(Er, function(M) {
      return (
        /******/
        (() => {
          var P = {
            /***/
            658: (
              /***/
              (a) => {
                a.exports = Object.assign != null ? Object.assign.bind(Object) : function(r) {
                  for (var e2 = arguments.length, f = Array(e2 > 1 ? e2 - 1 : 0), i = 1; i < e2; i++)
                    f[i - 1] = arguments[i];
                  return f.forEach(function(v) {
                    Object.keys(v).forEach(function(t2) {
                      return r[t2] = v[t2];
                    });
                  }), r;
                };
              }
            ),
            /***/
            548: (
              /***/
              (a, r, e2) => {
                var f = /* @__PURE__ */ function() {
                  function t2(o, s) {
                    var c = [], l = true, T = false, u = void 0;
                    try {
                      for (var d = o[Symbol.iterator](), N2; !(l = (N2 = d.next()).done) && (c.push(N2.value), !(s && c.length === s)); l = true)
                        ;
                    } catch (F) {
                      T = true, u = F;
                    } finally {
                      try {
                        !l && d.return && d.return();
                      } finally {
                        if (T) throw u;
                      }
                    }
                    return c;
                  }
                  return function(o, s) {
                    if (Array.isArray(o))
                      return o;
                    if (Symbol.iterator in Object(o))
                      return t2(o, s);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  };
                }(), i = e2(140).layoutBase.LinkedList, v = {};
                v.getTopMostNodes = function(t2) {
                  for (var o = {}, s = 0; s < t2.length; s++)
                    o[t2[s].id()] = true;
                  var c = t2.filter(function(l, T) {
                    typeof l == "number" && (l = T);
                    for (var u = l.parent()[0]; u != null; ) {
                      if (o[u.id()])
                        return false;
                      u = u.parent()[0];
                    }
                    return true;
                  });
                  return c;
                }, v.connectComponents = function(t2, o, s, c) {
                  var l = new i(), T = /* @__PURE__ */ new Set(), u = [], d = void 0, N2 = void 0, F = void 0, A = false, G = 1, B = [], U = [], K = function() {
                    var at = t2.collection();
                    U.push(at);
                    var n = s[0], m = t2.collection();
                    m.merge(n).merge(n.descendants().intersection(o)), u.push(n), m.forEach(function(y) {
                      l.push(y), T.add(y), at.merge(y);
                    });
                    for (var p = function() {
                      n = l.shift();
                      var I = t2.collection();
                      n.neighborhood().nodes().forEach(function(x) {
                        o.intersection(n.edgesWith(x)).length > 0 && I.merge(x);
                      });
                      for (var w = 0; w < I.length; w++) {
                        var R = I[w];
                        if (d = s.intersection(R.union(R.ancestors())), d != null && !T.has(d[0])) {
                          var W = d.union(d.descendants());
                          W.forEach(function(x) {
                            l.push(x), T.add(x), at.merge(x), s.has(x) && u.push(x);
                          });
                        }
                      }
                    }; l.length != 0; )
                      p();
                    if (at.forEach(function(y) {
                      o.intersection(y.connectedEdges()).forEach(function(I) {
                        at.has(I.source()) && at.has(I.target()) && at.merge(I);
                      });
                    }), u.length == s.length && (A = true), !A || A && G > 1) {
                      N2 = u[0], F = N2.connectedEdges().length, u.forEach(function(y) {
                        y.connectedEdges().length < F && (F = y.connectedEdges().length, N2 = y);
                      }), B.push(N2.id());
                      var E = t2.collection();
                      E.merge(u[0]), u.forEach(function(y) {
                        E.merge(y);
                      }), u = [], s = s.difference(E), G++;
                    }
                  };
                  do
                    K();
                  while (!A);
                  return c && B.length > 0 && c.set("dummy" + (c.size + 1), B), U;
                }, v.relocateComponent = function(t2, o, s) {
                  if (!s.fixedNodeConstraint) {
                    var c = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, T = Number.POSITIVE_INFINITY, u = Number.NEGATIVE_INFINITY;
                    if (s.quality == "draft") {
                      var d = true, N2 = false, F = void 0;
                      try {
                        for (var A = o.nodeIndexes[Symbol.iterator](), G; !(d = (G = A.next()).done); d = true) {
                          var B = G.value, U = f(B, 2), K = U[0], D = U[1], at = s.cy.getElementById(K);
                          if (at) {
                            var n = at.boundingBox(), m = o.xCoords[D] - n.w / 2, p = o.xCoords[D] + n.w / 2, E = o.yCoords[D] - n.h / 2, y = o.yCoords[D] + n.h / 2;
                            m < c && (c = m), p > l && (l = p), E < T && (T = E), y > u && (u = y);
                          }
                        }
                      } catch (x) {
                        N2 = true, F = x;
                      } finally {
                        try {
                          !d && A.return && A.return();
                        } finally {
                          if (N2)
                            throw F;
                        }
                      }
                      var I = t2.x - (l + c) / 2, w = t2.y - (u + T) / 2;
                      o.xCoords = o.xCoords.map(function(x) {
                        return x + I;
                      }), o.yCoords = o.yCoords.map(function(x) {
                        return x + w;
                      });
                    } else {
                      Object.keys(o).forEach(function(x) {
                        var q = o[x], V = q.getRect().x, Y = q.getRect().x + q.getRect().width, et = q.getRect().y, z = q.getRect().y + q.getRect().height;
                        V < c && (c = V), Y > l && (l = Y), et < T && (T = et), z > u && (u = z);
                      });
                      var R = t2.x - (l + c) / 2, W = t2.y - (u + T) / 2;
                      Object.keys(o).forEach(function(x) {
                        var q = o[x];
                        q.setCenter(q.getCenterX() + R, q.getCenterY() + W);
                      });
                    }
                  }
                }, v.calcBoundingBox = function(t2, o, s, c) {
                  for (var l = Number.MAX_SAFE_INTEGER, T = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER, d = Number.MIN_SAFE_INTEGER, N2 = void 0, F = void 0, A = void 0, G = void 0, B = t2.descendants().not(":parent"), U = B.length, K = 0; K < U; K++) {
                    var D = B[K];
                    N2 = o[c.get(D.id())] - D.width() / 2, F = o[c.get(D.id())] + D.width() / 2, A = s[c.get(D.id())] - D.height() / 2, G = s[c.get(D.id())] + D.height() / 2, l > N2 && (l = N2), T < F && (T = F), u > A && (u = A), d < G && (d = G);
                  }
                  var at = {};
                  return at.topLeftX = l, at.topLeftY = u, at.width = T - l, at.height = d - u, at;
                }, v.calcParentsWithoutChildren = function(t2, o) {
                  var s = t2.collection();
                  return o.nodes(":parent").forEach(function(c) {
                    var l = false;
                    c.children().forEach(function(T) {
                      T.css("display") != "none" && (l = true);
                    }), l || s.merge(c);
                  }), s;
                }, a.exports = v;
              }
            ),
            /***/
            816: (
              /***/
              (a, r, e2) => {
                var f = e2(548), i = e2(140).CoSELayout, v = e2(140).CoSENode, t2 = e2(140).layoutBase.PointD, o = e2(140).layoutBase.DimensionD, s = e2(140).layoutBase.LayoutConstants, c = e2(140).layoutBase.FDLayoutConstants, l = e2(140).CoSEConstants, T = function(d, N2) {
                  var F = d.cy, A = d.eles, G = A.nodes(), B = A.edges(), U = void 0, K = void 0, D = void 0, at = {};
                  d.randomize && (U = N2.nodeIndexes, K = N2.xCoords, D = N2.yCoords);
                  var n = function(x) {
                    return typeof x == "function";
                  }, m = function(x, q) {
                    return n(x) ? x(q) : x;
                  }, p = f.calcParentsWithoutChildren(F, A), E = function W(x, q, V, Y) {
                    for (var et = q.length, z = 0; z < et; z++) {
                      var O = q[z], H = null;
                      O.intersection(p).length == 0 && (H = O.children());
                      var $ = void 0, _ = O.layoutDimensions({
                        nodeDimensionsIncludeLabels: Y.nodeDimensionsIncludeLabels
                      });
                      if (O.outerWidth() != null && O.outerHeight() != null)
                        if (Y.randomize)
                          if (!O.isParent())
                            $ = x.add(new v(V.graphManager, new t2(K[U.get(O.id())] - _.w / 2, D[U.get(O.id())] - _.h / 2), new o(parseFloat(_.w), parseFloat(_.h))));
                          else {
                            var ht = f.calcBoundingBox(O, K, D, U);
                            O.intersection(p).length == 0 ? $ = x.add(new v(V.graphManager, new t2(ht.topLeftX, ht.topLeftY), new o(ht.width, ht.height))) : $ = x.add(new v(V.graphManager, new t2(ht.topLeftX, ht.topLeftY), new o(parseFloat(_.w), parseFloat(_.h))));
                          }
                        else
                          $ = x.add(new v(V.graphManager, new t2(O.position("x") - _.w / 2, O.position("y") - _.h / 2), new o(parseFloat(_.w), parseFloat(_.h))));
                      else
                        $ = x.add(new v(this.graphManager));
                      if ($.id = O.data("id"), $.nodeRepulsion = m(Y.nodeRepulsion, O), $.paddingLeft = parseInt(O.css("padding")), $.paddingTop = parseInt(O.css("padding")), $.paddingRight = parseInt(O.css("padding")), $.paddingBottom = parseInt(O.css("padding")), Y.nodeDimensionsIncludeLabels && ($.labelWidth = O.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, $.labelHeight = O.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, $.labelPosVertical = O.css("text-valign"), $.labelPosHorizontal = O.css("text-halign")), at[O.data("id")] = $, isNaN($.rect.x) && ($.rect.x = 0), isNaN($.rect.y) && ($.rect.y = 0), H != null && H.length > 0) {
                        var J = void 0;
                        J = V.getGraphManager().add(V.newGraph(), $), W(J, H, V, Y);
                      }
                    }
                  }, y = function(x, q, V) {
                    for (var Y = 0, et = 0, z = 0; z < V.length; z++) {
                      var O = V[z], H = at[O.data("source")], $ = at[O.data("target")];
                      if (H && $ && H !== $ && H.getEdgesBetween($).length == 0) {
                        var _ = q.add(x.newEdge(), H, $);
                        _.id = O.id(), _.idealLength = m(d.idealEdgeLength, O), _.edgeElasticity = m(d.edgeElasticity, O), Y += _.idealLength, et++;
                      }
                    }
                    d.idealEdgeLength != null && (et > 0 ? l.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = Y / et : n(d.idealEdgeLength) ? l.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = 50 : l.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = d.idealEdgeLength, l.MIN_REPULSION_DIST = c.MIN_REPULSION_DIST = c.DEFAULT_EDGE_LENGTH / 10, l.DEFAULT_RADIAL_SEPARATION = c.DEFAULT_EDGE_LENGTH);
                  }, I = function(x, q) {
                    q.fixedNodeConstraint && (x.constraints.fixedNodeConstraint = q.fixedNodeConstraint), q.alignmentConstraint && (x.constraints.alignmentConstraint = q.alignmentConstraint), q.relativePlacementConstraint && (x.constraints.relativePlacementConstraint = q.relativePlacementConstraint);
                  };
                  d.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = d.nestingFactor), d.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = c.DEFAULT_GRAVITY_STRENGTH = d.gravity), d.numIter != null && (l.MAX_ITERATIONS = c.MAX_ITERATIONS = d.numIter), d.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = c.DEFAULT_GRAVITY_RANGE_FACTOR = d.gravityRange), d.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH = d.gravityCompound), d.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = d.gravityRangeCompound), d.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.DEFAULT_COOLING_FACTOR_INCREMENTAL = d.initialEnergyOnIncremental), d.tilingCompareBy != null && (l.TILING_COMPARE_BY = d.tilingCompareBy), d.quality == "proof" ? s.QUALITY = 2 : s.QUALITY = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS = c.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = d.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = !d.randomize, l.ANIMATE = c.ANIMATE = s.ANIMATE = d.animate, l.TILE = d.tile, l.TILING_PADDING_VERTICAL = typeof d.tilingPaddingVertical == "function" ? d.tilingPaddingVertical.call() : d.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof d.tilingPaddingHorizontal == "function" ? d.tilingPaddingHorizontal.call() : d.tilingPaddingHorizontal, l.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = true, l.PURE_INCREMENTAL = !d.randomize, s.DEFAULT_UNIFORM_LEAF_NODE_SIZES = d.uniformNodeDimensions, d.step == "transformed" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = true, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = false), d.step == "enforced" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = false), d.step == "cose" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = true), d.step == "all" && (d.randomize ? l.TRANSFORM_ON_CONSTRAINT_HANDLING = true : l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = true), d.fixedNodeConstraint || d.alignmentConstraint || d.relativePlacementConstraint ? l.TREE_REDUCTION_ON_INCREMENTAL = false : l.TREE_REDUCTION_ON_INCREMENTAL = true;
                  var w = new i(), R = w.newGraphManager();
                  return E(R.addRoot(), f.getTopMostNodes(G), w, d), y(w, R, B), I(w, d), w.runLayout(), at;
                };
                a.exports = { coseLayout: T };
              }
            ),
            /***/
            212: (
              /***/
              (a, r, e2) => {
                var f = /* @__PURE__ */ function() {
                  function d(N2, F) {
                    for (var A = 0; A < F.length; A++) {
                      var G = F[A];
                      G.enumerable = G.enumerable || false, G.configurable = true, "value" in G && (G.writable = true), Object.defineProperty(N2, G.key, G);
                    }
                  }
                  return function(N2, F, A) {
                    return F && d(N2.prototype, F), A && d(N2, A), N2;
                  };
                }();
                function i(d, N2) {
                  if (!(d instanceof N2))
                    throw new TypeError("Cannot call a class as a function");
                }
                var v = e2(658), t2 = e2(548), o = e2(657), s = o.spectralLayout, c = e2(816), l = c.coseLayout, T = Object.freeze({
                  // 'draft', 'default' or 'proof' 
                  // - 'draft' only applies spectral layout 
                  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
                  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
                  quality: "default",
                  // Use random node positions at beginning of layout
                  // if this is set to false, then quality option must be "proof"
                  randomize: true,
                  // Whether or not to animate the layout
                  animate: true,
                  // Duration of animation in ms, if enabled
                  animationDuration: 1e3,
                  // Easing of animation, if enabled
                  animationEasing: void 0,
                  // Fit the viewport to the repositioned nodes
                  fit: true,
                  // Padding around layout
                  padding: 30,
                  // Whether to include labels in node dimensions. Valid in "proof" quality
                  nodeDimensionsIncludeLabels: false,
                  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
                  uniformNodeDimensions: false,
                  // Whether to pack disconnected components - valid only if randomize: true
                  packComponents: true,
                  // Layout step - all, transformed, enforced, cose - for debug purpose only
                  step: "all",
                  /* spectral layout options */
                  // False for random, true for greedy
                  samplingType: true,
                  // Sample size to construct distance matrix
                  sampleSize: 25,
                  // Separation amount between nodes
                  nodeSeparation: 75,
                  // Power iteration tolerance
                  piTol: 1e-7,
                  /* CoSE layout options */
                  // Node repulsion (non overlapping) multiplier
                  nodeRepulsion: function(N2) {
                    return 4500;
                  },
                  // Ideal edge (non nested) length
                  idealEdgeLength: function(N2) {
                    return 50;
                  },
                  // Divisor to compute edge forces
                  edgeElasticity: function(N2) {
                    return 0.45;
                  },
                  // Nesting factor (multiplier) to compute ideal edge length for nested edges
                  nestingFactor: 0.1,
                  // Gravity force (constant)
                  gravity: 0.25,
                  // Maximum number of iterations to perform
                  numIter: 2500,
                  // For enabling tiling
                  tile: true,
                  // The function that specifies the criteria for comparing nodes while sorting them during tiling operation.
                  // Takes the node id as a parameter and the default tiling operation is perfomed when this option is not set.
                  tilingCompareBy: void 0,
                  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
                  tilingPaddingVertical: 10,
                  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
                  tilingPaddingHorizontal: 10,
                  // Gravity range (constant) for compounds
                  gravityRangeCompound: 1.5,
                  // Gravity force (constant) for compounds
                  gravityCompound: 1,
                  // Gravity range (constant)
                  gravityRange: 3.8,
                  // Initial cooling factor for incremental layout  
                  initialEnergyOnIncremental: 0.3,
                  /* constraint options */
                  // Fix required nodes to predefined positions
                  // [{nodeId: 'n1', position: {x: 100, y: 200}, {...}]
                  fixedNodeConstraint: void 0,
                  // Align required nodes in vertical/horizontal direction
                  // {vertical: [['n1', 'n2')], ['n3', 'n4']], horizontal: ['n2', 'n4']}
                  alignmentConstraint: void 0,
                  // Place two nodes relatively in vertical/horizontal direction 
                  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}]
                  relativePlacementConstraint: void 0,
                  /* layout event callbacks */
                  ready: function() {
                  },
                  // on layoutready
                  stop: function() {
                  }
                  // on layoutstop
                }), u = function() {
                  function d(N2) {
                    i(this, d), this.options = v({}, T, N2);
                  }
                  return f(d, [{
                    key: "run",
                    value: function() {
                      var F = this, A = this.options, G = A.cy, B = A.eles, U = [], K = [], D = void 0, at = [];
                      A.fixedNodeConstraint && (!Array.isArray(A.fixedNodeConstraint) || A.fixedNodeConstraint.length == 0) && (A.fixedNodeConstraint = void 0), A.alignmentConstraint && (A.alignmentConstraint.vertical && (!Array.isArray(A.alignmentConstraint.vertical) || A.alignmentConstraint.vertical.length == 0) && (A.alignmentConstraint.vertical = void 0), A.alignmentConstraint.horizontal && (!Array.isArray(A.alignmentConstraint.horizontal) || A.alignmentConstraint.horizontal.length == 0) && (A.alignmentConstraint.horizontal = void 0)), A.relativePlacementConstraint && (!Array.isArray(A.relativePlacementConstraint) || A.relativePlacementConstraint.length == 0) && (A.relativePlacementConstraint = void 0);
                      var n = A.fixedNodeConstraint || A.alignmentConstraint || A.relativePlacementConstraint;
                      n && (A.tile = false, A.packComponents = false);
                      var m = void 0, p = false;
                      if (G.layoutUtilities && A.packComponents && (m = G.layoutUtilities("get"), m || (m = G.layoutUtilities()), p = true), B.nodes().length > 0)
                        if (p) {
                          var I = t2.getTopMostNodes(A.eles.nodes());
                          if (D = t2.connectComponents(G, A.eles, I), D.forEach(function(vt) {
                            var rt = vt.boundingBox();
                            at.push({ x: rt.x1 + rt.w / 2, y: rt.y1 + rt.h / 2 });
                          }), A.randomize && D.forEach(function(vt) {
                            A.eles = vt, U.push(s(A));
                          }), A.quality == "default" || A.quality == "proof") {
                            var w = G.collection();
                            if (A.tile) {
                              var R = /* @__PURE__ */ new Map(), W = [], x = [], q = 0, V = { nodeIndexes: R, xCoords: W, yCoords: x }, Y = [];
                              if (D.forEach(function(vt, rt) {
                                vt.edges().length == 0 && (vt.nodes().forEach(function(ut, Tt) {
                                  w.merge(vt.nodes()[Tt]), ut.isParent() || (V.nodeIndexes.set(vt.nodes()[Tt].id(), q++), V.xCoords.push(vt.nodes()[0].position().x), V.yCoords.push(vt.nodes()[0].position().y));
                                }), Y.push(rt));
                              }), w.length > 1) {
                                var et = w.boundingBox();
                                at.push({ x: et.x1 + et.w / 2, y: et.y1 + et.h / 2 }), D.push(w), U.push(V);
                                for (var z = Y.length - 1; z >= 0; z--)
                                  D.splice(Y[z], 1), U.splice(Y[z], 1), at.splice(Y[z], 1);
                              }
                            }
                            D.forEach(function(vt, rt) {
                              A.eles = vt, K.push(l(A, U[rt])), t2.relocateComponent(at[rt], K[rt], A);
                            });
                          } else
                            D.forEach(function(vt, rt) {
                              t2.relocateComponent(at[rt], U[rt], A);
                            });
                          var O = /* @__PURE__ */ new Set();
                          if (D.length > 1) {
                            var H = [], $ = B.filter(function(vt) {
                              return vt.css("display") == "none";
                            });
                            D.forEach(function(vt, rt) {
                              var ut = void 0;
                              if (A.quality == "draft" && (ut = U[rt].nodeIndexes), vt.nodes().not($).length > 0) {
                                var Tt = {};
                                Tt.edges = [], Tt.nodes = [];
                                var Mt = void 0;
                                vt.nodes().not($).forEach(function(Dt) {
                                  if (A.quality == "draft")
                                    if (!Dt.isParent())
                                      Mt = ut.get(Dt.id()), Tt.nodes.push({ x: U[rt].xCoords[Mt] - Dt.boundingbox().w / 2, y: U[rt].yCoords[Mt] - Dt.boundingbox().h / 2, width: Dt.boundingbox().w, height: Dt.boundingbox().h });
                                    else {
                                      var mt = t2.calcBoundingBox(Dt, U[rt].xCoords, U[rt].yCoords, ut);
                                      Tt.nodes.push({ x: mt.topLeftX, y: mt.topLeftY, width: mt.width, height: mt.height });
                                    }
                                  else
                                    K[rt][Dt.id()] && Tt.nodes.push({ x: K[rt][Dt.id()].getLeft(), y: K[rt][Dt.id()].getTop(), width: K[rt][Dt.id()].getWidth(), height: K[rt][Dt.id()].getHeight() });
                                }), vt.edges().forEach(function(Dt) {
                                  var mt = Dt.source(), xt = Dt.target();
                                  if (mt.css("display") != "none" && xt.css("display") != "none")
                                    if (A.quality == "draft") {
                                      var St = ut.get(mt.id()), Vt = ut.get(xt.id()), Xt = [], Ut = [];
                                      if (mt.isParent()) {
                                        var bt = t2.calcBoundingBox(mt, U[rt].xCoords, U[rt].yCoords, ut);
                                        Xt.push(bt.topLeftX + bt.width / 2), Xt.push(bt.topLeftY + bt.height / 2);
                                      } else
                                        Xt.push(U[rt].xCoords[St]), Xt.push(U[rt].yCoords[St]);
                                      if (xt.isParent()) {
                                        var Ht = t2.calcBoundingBox(xt, U[rt].xCoords, U[rt].yCoords, ut);
                                        Ut.push(Ht.topLeftX + Ht.width / 2), Ut.push(Ht.topLeftY + Ht.height / 2);
                                      } else
                                        Ut.push(U[rt].xCoords[Vt]), Ut.push(U[rt].yCoords[Vt]);
                                      Tt.edges.push({ startX: Xt[0], startY: Xt[1], endX: Ut[0], endY: Ut[1] });
                                    } else
                                      K[rt][mt.id()] && K[rt][xt.id()] && Tt.edges.push({ startX: K[rt][mt.id()].getCenterX(), startY: K[rt][mt.id()].getCenterY(), endX: K[rt][xt.id()].getCenterX(), endY: K[rt][xt.id()].getCenterY() });
                                }), Tt.nodes.length > 0 && (H.push(Tt), O.add(rt));
                              }
                            });
                            var _ = m.packComponents(H, A.randomize).shifts;
                            if (A.quality == "draft")
                              U.forEach(function(vt, rt) {
                                var ut = vt.xCoords.map(function(Mt) {
                                  return Mt + _[rt].dx;
                                }), Tt = vt.yCoords.map(function(Mt) {
                                  return Mt + _[rt].dy;
                                });
                                vt.xCoords = ut, vt.yCoords = Tt;
                              });
                            else {
                              var ht = 0;
                              O.forEach(function(vt) {
                                Object.keys(K[vt]).forEach(function(rt) {
                                  var ut = K[vt][rt];
                                  ut.setCenter(ut.getCenterX() + _[ht].dx, ut.getCenterY() + _[ht].dy);
                                }), ht++;
                              });
                            }
                          }
                        } else {
                          var E = A.eles.boundingBox();
                          if (at.push({ x: E.x1 + E.w / 2, y: E.y1 + E.h / 2 }), A.randomize) {
                            var y = s(A);
                            U.push(y);
                          }
                          A.quality == "default" || A.quality == "proof" ? (K.push(l(A, U[0])), t2.relocateComponent(at[0], K[0], A)) : t2.relocateComponent(at[0], U[0], A);
                        }
                      var J = function(rt, ut) {
                        if (A.quality == "default" || A.quality == "proof") {
                          typeof rt == "number" && (rt = ut);
                          var Tt = void 0, Mt = void 0, Dt = rt.data("id");
                          return K.forEach(function(xt) {
                            Dt in xt && (Tt = { x: xt[Dt].getRect().getCenterX(), y: xt[Dt].getRect().getCenterY() }, Mt = xt[Dt]);
                          }), A.nodeDimensionsIncludeLabels && (Mt.labelWidth && (Mt.labelPosHorizontal == "left" ? Tt.x += Mt.labelWidth / 2 : Mt.labelPosHorizontal == "right" && (Tt.x -= Mt.labelWidth / 2)), Mt.labelHeight && (Mt.labelPosVertical == "top" ? Tt.y += Mt.labelHeight / 2 : Mt.labelPosVertical == "bottom" && (Tt.y -= Mt.labelHeight / 2))), Tt == null && (Tt = { x: rt.position("x"), y: rt.position("y") }), {
                            x: Tt.x,
                            y: Tt.y
                          };
                        } else {
                          var mt = void 0;
                          return U.forEach(function(xt) {
                            var St = xt.nodeIndexes.get(rt.id());
                            St != null && (mt = { x: xt.xCoords[St], y: xt.yCoords[St] });
                          }), mt == null && (mt = { x: rt.position("x"), y: rt.position("y") }), {
                            x: mt.x,
                            y: mt.y
                          };
                        }
                      };
                      if (A.quality == "default" || A.quality == "proof" || A.randomize) {
                        var Rt = t2.calcParentsWithoutChildren(G, B), Lt = B.filter(function(vt) {
                          return vt.css("display") == "none";
                        });
                        A.eles = B.not(Lt), B.nodes().not(":parent").not(Lt).layoutPositions(F, A, J), Rt.length > 0 && Rt.forEach(function(vt) {
                          vt.position(J(vt));
                        });
                      } else
                        console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                    }
                  }]), d;
                }();
                a.exports = u;
              }
            ),
            /***/
            657: (
              /***/
              (a, r, e2) => {
                var f = e2(548), i = e2(140).layoutBase.Matrix, v = e2(140).layoutBase.SVD, t2 = function(s) {
                  var c = s.cy, l = s.eles, T = l.nodes(), u = l.nodes(":parent"), d = /* @__PURE__ */ new Map(), N2 = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), A = [], G = [], B = [], U = [], K = [], D = [], at = [], n = [], m = void 0, p = 1e8, E = 1e-9, y = s.piTol, I = s.samplingType, w = s.nodeSeparation, R = void 0, W = function() {
                    for (var b = 0, k = 0, Q = false; k < R; ) {
                      b = Math.floor(Math.random() * m), Q = false;
                      for (var Z = 0; Z < k; Z++)
                        if (U[Z] == b) {
                          Q = true;
                          break;
                        }
                      if (!Q)
                        U[k] = b, k++;
                      else
                        continue;
                    }
                  }, x = function(b, k, Q) {
                    for (var Z = [], it = 0, gt2 = 0, ot = 0, tt = void 0, j = [], dt2 = 0, wt = 1, yt = 0; yt < m; yt++)
                      j[yt] = p;
                    for (Z[gt2] = b, j[b] = 0; gt2 >= it; ) {
                      ot = Z[it++];
                      for (var It = A[ot], ft = 0; ft < It.length; ft++)
                        tt = N2.get(It[ft]), j[tt] == p && (j[tt] = j[ot] + 1, Z[++gt2] = tt);
                      D[ot][k] = j[ot] * w;
                    }
                    if (Q) {
                      for (var st = 0; st < m; st++)
                        D[st][k] < K[st] && (K[st] = D[st][k]);
                      for (var Ct = 0; Ct < m; Ct++)
                        K[Ct] > dt2 && (dt2 = K[Ct], wt = Ct);
                    }
                    return wt;
                  }, q = function(b) {
                    var k = void 0;
                    if (b) {
                      k = Math.floor(Math.random() * m);
                      for (var Z = 0; Z < m; Z++)
                        K[Z] = p;
                      for (var it = 0; it < R; it++)
                        U[it] = k, k = x(k, it, b);
                    } else {
                      W();
                      for (var Q = 0; Q < R; Q++)
                        x(U[Q], Q, b);
                    }
                    for (var gt2 = 0; gt2 < m; gt2++)
                      for (var ot = 0; ot < R; ot++)
                        D[gt2][ot] *= D[gt2][ot];
                    for (var tt = 0; tt < R; tt++)
                      at[tt] = [];
                    for (var j = 0; j < R; j++)
                      for (var dt2 = 0; dt2 < R; dt2++)
                        at[j][dt2] = D[U[dt2]][j];
                  }, V = function() {
                    for (var b = v.svd(at), k = b.S, Q = b.U, Z = b.V, it = k[0] * k[0] * k[0], gt2 = [], ot = 0; ot < R; ot++) {
                      gt2[ot] = [];
                      for (var tt = 0; tt < R; tt++)
                        gt2[ot][tt] = 0, ot == tt && (gt2[ot][tt] = k[ot] / (k[ot] * k[ot] + it / (k[ot] * k[ot])));
                    }
                    n = i.multMat(i.multMat(Z, gt2), i.transpose(Q));
                  }, Y = function() {
                    for (var b = void 0, k = void 0, Q = [], Z = [], it = [], gt2 = [], ot = 0; ot < m; ot++)
                      Q[ot] = Math.random(), Z[ot] = Math.random();
                    Q = i.normalize(Q), Z = i.normalize(Z);
                    for (var tt = E, j = E, dt2 = void 0; ; ) {
                      for (var wt = 0; wt < m; wt++)
                        it[wt] = Q[wt];
                      if (Q = i.multGamma(i.multL(i.multGamma(it), D, n)), b = i.dotProduct(it, Q), Q = i.normalize(Q), tt = i.dotProduct(it, Q), dt2 = Math.abs(tt / j), dt2 <= 1 + y && dt2 >= 1)
                        break;
                      j = tt;
                    }
                    for (var yt = 0; yt < m; yt++)
                      it[yt] = Q[yt];
                    for (j = E; ; ) {
                      for (var It = 0; It < m; It++)
                        gt2[It] = Z[It];
                      if (gt2 = i.minusOp(gt2, i.multCons(it, i.dotProduct(it, gt2))), Z = i.multGamma(i.multL(i.multGamma(gt2), D, n)), k = i.dotProduct(gt2, Z), Z = i.normalize(Z), tt = i.dotProduct(gt2, Z), dt2 = Math.abs(tt / j), dt2 <= 1 + y && dt2 >= 1)
                        break;
                      j = tt;
                    }
                    for (var ft = 0; ft < m; ft++)
                      gt2[ft] = Z[ft];
                    G = i.multCons(it, Math.sqrt(Math.abs(b))), B = i.multCons(gt2, Math.sqrt(Math.abs(k)));
                  };
                  f.connectComponents(c, l, f.getTopMostNodes(T), d), u.forEach(function(S) {
                    f.connectComponents(c, l, f.getTopMostNodes(S.descendants().intersection(l)), d);
                  });
                  for (var et = 0, z = 0; z < T.length; z++)
                    T[z].isParent() || N2.set(T[z].id(), et++);
                  var O = true, H = false, $ = void 0;
                  try {
                    for (var _ = d.keys()[Symbol.iterator](), ht; !(O = (ht = _.next()).done); O = true) {
                      var J = ht.value;
                      N2.set(J, et++);
                    }
                  } catch (S) {
                    H = true, $ = S;
                  } finally {
                    try {
                      !O && _.return && _.return();
                    } finally {
                      if (H)
                        throw $;
                    }
                  }
                  for (var Rt = 0; Rt < N2.size; Rt++)
                    A[Rt] = [];
                  u.forEach(function(S) {
                    for (var b = S.children().intersection(l); b.nodes(":childless").length == 0; )
                      b = b.nodes()[0].children().intersection(l);
                    var k = 0, Q = b.nodes(":childless")[0].connectedEdges().length;
                    b.nodes(":childless").forEach(function(Z, it) {
                      Z.connectedEdges().length < Q && (Q = Z.connectedEdges().length, k = it);
                    }), F.set(S.id(), b.nodes(":childless")[k].id());
                  }), T.forEach(function(S) {
                    var b = void 0;
                    S.isParent() ? b = N2.get(F.get(S.id())) : b = N2.get(S.id()), S.neighborhood().nodes().forEach(function(k) {
                      l.intersection(S.edgesWith(k)).length > 0 && (k.isParent() ? A[b].push(F.get(k.id())) : A[b].push(k.id()));
                    });
                  });
                  var Lt = function(b) {
                    var k = N2.get(b), Q = void 0;
                    d.get(b).forEach(function(Z) {
                      c.getElementById(Z).isParent() ? Q = F.get(Z) : Q = Z, A[k].push(Q), A[N2.get(Q)].push(b);
                    });
                  }, vt = true, rt = false, ut = void 0;
                  try {
                    for (var Tt = d.keys()[Symbol.iterator](), Mt; !(vt = (Mt = Tt.next()).done); vt = true) {
                      var Dt = Mt.value;
                      Lt(Dt);
                    }
                  } catch (S) {
                    rt = true, ut = S;
                  } finally {
                    try {
                      !vt && Tt.return && Tt.return();
                    } finally {
                      if (rt)
                        throw ut;
                    }
                  }
                  m = N2.size;
                  var mt = void 0;
                  if (m > 2) {
                    R = m < s.sampleSize ? m : s.sampleSize;
                    for (var xt = 0; xt < m; xt++)
                      D[xt] = [];
                    for (var St = 0; St < R; St++)
                      n[St] = [];
                    return s.quality == "draft" || s.step == "all" ? (q(I), V(), Y(), mt = { nodeIndexes: N2, xCoords: G, yCoords: B }) : (N2.forEach(function(S, b) {
                      G.push(c.getElementById(b).position("x")), B.push(c.getElementById(b).position("y"));
                    }), mt = { nodeIndexes: N2, xCoords: G, yCoords: B }), mt;
                  } else {
                    var Vt = N2.keys(), Xt = c.getElementById(Vt.next().value), Ut = Xt.position(), bt = Xt.outerWidth();
                    if (G.push(Ut.x), B.push(Ut.y), m == 2) {
                      var Ht = c.getElementById(Vt.next().value), Bt = Ht.outerWidth();
                      G.push(Ut.x + bt / 2 + Bt / 2 + s.idealEdgeLength), B.push(Ut.y);
                    }
                    return mt = { nodeIndexes: N2, xCoords: G, yCoords: B }, mt;
                  }
                };
                a.exports = { spectralLayout: t2 };
              }
            ),
            /***/
            579: (
              /***/
              (a, r, e2) => {
                var f = e2(212), i = function(t2) {
                  t2 && t2("layout", "fcose", f);
                };
                typeof cytoscape < "u" && i(cytoscape), a.exports = i;
              }
            ),
            /***/
            140: (
              /***/
              (a) => {
                a.exports = M;
              }
            )
            /******/
          }, L = {};
          function g2(a) {
            var r = L[a];
            if (r !== void 0)
              return r.exports;
            var e2 = L[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return P[a](e2, e2.exports, g2), e2.exports;
          }
          var h = g2(579);
          return h;
        })()
      );
    });
  }(he)), he.exports;
}
var Tr = mr();
var Nr = yx(Tr);
var Se = {
  L: "left",
  R: "right",
  T: "top",
  B: "bottom"
};
var Fe = {
  L: g((C) => `${C},${C / 2} 0,${C} 0,0`, "L"),
  R: g((C) => `0,${C / 2} ${C},0 ${C},${C}`, "R"),
  T: g((C) => `0,0 ${C},0 ${C / 2},${C}`, "T"),
  B: g((C) => `${C / 2},0 ${C},${C} 0,${C}`, "B")
};
var le = {
  L: g((C, X) => C - X + 2, "L"),
  R: g((C, X) => C - 2, "R"),
  T: g((C, X) => C - X + 2, "T"),
  B: g((C, X) => C - 2, "B")
};
var Lr = g(function(C) {
  return zt(C) ? C === "L" ? "R" : "L" : C === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection");
var be = g(function(C) {
  const X = C;
  return X === "L" || X === "R" || X === "T" || X === "B";
}, "isArchitectureDirection");
var zt = g(function(C) {
  const X = C;
  return X === "L" || X === "R";
}, "isArchitectureDirectionX");
var Qt = g(function(C) {
  const X = C;
  return X === "T" || X === "B";
}, "isArchitectureDirectionY");
var Ce = g(function(C, X) {
  const M = zt(C) && Qt(X), P = Qt(C) && zt(X);
  return M || P;
}, "isArchitectureDirectionXY");
var Cr = g(function(C) {
  const X = C[0], M = C[1], P = zt(X) && Qt(M), L = Qt(X) && zt(M);
  return P || L;
}, "isArchitecturePairXY");
var Ar = g(function(C) {
  return C !== "LL" && C !== "RR" && C !== "TT" && C !== "BB";
}, "isValidArchitectureDirectionPair");
var me = g(function(C, X) {
  const M = `${C}${X}`;
  return Ar(M) ? M : void 0;
}, "getArchitectureDirectionPair");
var Mr = g(function([C, X], M) {
  const P = M[0], L = M[1];
  return zt(P) ? Qt(L) ? [C + (P === "L" ? -1 : 1), X + (L === "T" ? 1 : -1)] : [C + (P === "L" ? -1 : 1), X] : zt(L) ? [C + (L === "L" ? 1 : -1), X + (P === "T" ? 1 : -1)] : [C, X + (P === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair");
var wr = g(function(C) {
  return C === "LT" || C === "TL" ? [1, 1] : C === "BL" || C === "LB" ? [1, -1] : C === "BR" || C === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors");
var Or = g(function(C, X) {
  return Ce(C, X) ? "bend" : zt(C) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment");
var Dr = g(function(C) {
  return C.type === "service";
}, "isArchitectureService");
var xr = g(function(C) {
  return C.type === "junction";
}, "isArchitectureJunction");
var Ue = g((C) => C.data(), "edgeData");
var ne = g((C) => C.data(), "nodeData");
var Ye = Cf.architecture;
var pt = new e(() => ({
  nodes: {},
  groups: {},
  edges: [],
  registeredIds: {},
  config: Ye,
  dataStructures: void 0,
  elements: {}
}));
var Ir = g(() => {
  pt.reset(), Fb();
}, "clear");
var Rr = g(function({
  id: C,
  icon: X,
  in: M,
  title: P,
  iconText: L
}) {
  if (pt.records.registeredIds[C] !== void 0)
    throw new Error(
      `The service id [${C}] is already in use by another ${pt.records.registeredIds[C]}`
    );
  if (M !== void 0) {
    if (C === M)
      throw new Error(`The service [${C}] cannot be placed within itself`);
    if (pt.records.registeredIds[M] === void 0)
      throw new Error(
        `The service [${C}]'s parent does not exist. Please make sure the parent is created before this service`
      );
    if (pt.records.registeredIds[M] === "node")
      throw new Error(`The service [${C}]'s parent is not a group`);
  }
  pt.records.registeredIds[C] = "node", pt.records.nodes[C] = {
    id: C,
    type: "service",
    icon: X,
    iconText: L,
    title: P,
    edges: [],
    in: M
  };
}, "addService");
var Sr = g(() => Object.values(pt.records.nodes).filter(Dr), "getServices");
var Fr = g(function({ id: C, in: X }) {
  pt.records.registeredIds[C] = "node", pt.records.nodes[C] = {
    id: C,
    type: "junction",
    edges: [],
    in: X
  };
}, "addJunction");
var br = g(() => Object.values(pt.records.nodes).filter(xr), "getJunctions");
var Pr = g(() => Object.values(pt.records.nodes), "getNodes");
var Te = g((C) => pt.records.nodes[C], "getNode");
var Gr = g(function({ id: C, icon: X, in: M, title: P }) {
  if (pt.records.registeredIds[C] !== void 0)
    throw new Error(
      `The group id [${C}] is already in use by another ${pt.records.registeredIds[C]}`
    );
  if (M !== void 0) {
    if (C === M)
      throw new Error(`The group [${C}] cannot be placed within itself`);
    if (pt.records.registeredIds[M] === void 0)
      throw new Error(
        `The group [${C}]'s parent does not exist. Please make sure the parent is created before this group`
      );
    if (pt.records.registeredIds[M] === "node")
      throw new Error(`The group [${C}]'s parent is not a group`);
  }
  pt.records.registeredIds[C] = "group", pt.records.groups[C] = {
    id: C,
    icon: X,
    title: P,
    in: M
  };
}, "addGroup");
var Ur = g(() => Object.values(pt.records.groups), "getGroups");
var Yr = g(function({
  lhsId: C,
  rhsId: X,
  lhsDir: M,
  rhsDir: P,
  lhsInto: L,
  rhsInto: g2,
  lhsGroup: h,
  rhsGroup: a,
  title: r
}) {
  if (!be(M))
    throw new Error(
      `Invalid direction given for left hand side of edge ${C}--${X}. Expected (L,R,T,B) got ${M}`
    );
  if (!be(P))
    throw new Error(
      `Invalid direction given for right hand side of edge ${C}--${X}. Expected (L,R,T,B) got ${P}`
    );
  if (pt.records.nodes[C] === void 0 && pt.records.groups[C] === void 0)
    throw new Error(
      `The left-hand id [${C}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  if (pt.records.nodes[X] === void 0 && pt.records.groups[C] === void 0)
    throw new Error(
      `The right-hand id [${X}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  const e2 = pt.records.nodes[C].in, f = pt.records.nodes[X].in;
  if (h && e2 && f && e2 == f)
    throw new Error(
      `The left-hand id [${C}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  if (a && e2 && f && e2 == f)
    throw new Error(
      `The right-hand id [${X}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  const i = {
    lhsId: C,
    lhsDir: M,
    lhsInto: L,
    lhsGroup: h,
    rhsId: X,
    rhsDir: P,
    rhsInto: g2,
    rhsGroup: a,
    title: r
  };
  pt.records.edges.push(i), pt.records.nodes[C] && pt.records.nodes[X] && (pt.records.nodes[C].edges.push(pt.records.edges[pt.records.edges.length - 1]), pt.records.nodes[X].edges.push(pt.records.edges[pt.records.edges.length - 1]));
}, "addEdge");
var Xr = g(() => pt.records.edges, "getEdges");
var Hr = g(() => {
  if (pt.records.dataStructures === void 0) {
    const C = {}, X = Object.entries(pt.records.nodes).reduce((a, [r, e2]) => (a[r] = e2.edges.reduce((f, i) => {
      var _a, _b;
      const v = (_a = Te(i.lhsId)) == null ? void 0 : _a.in, t2 = (_b = Te(i.rhsId)) == null ? void 0 : _b.in;
      if (v && t2 && v !== t2) {
        const o = Or(i.lhsDir, i.rhsDir);
        o !== "bend" && (C[v] ?? (C[v] = {}), C[v][t2] = o, C[t2] ?? (C[t2] = {}), C[t2][v] = o);
      }
      if (i.lhsId === r) {
        const o = me(i.lhsDir, i.rhsDir);
        o && (f[o] = i.rhsId);
      } else {
        const o = me(i.rhsDir, i.lhsDir);
        o && (f[o] = i.lhsId);
      }
      return f;
    }, {}), a), {}), M = Object.keys(X)[0], P = { [M]: 1 }, L = Object.keys(X).reduce(
      (a, r) => r === M ? a : { ...a, [r]: 1 },
      {}
    ), g2 = g((a) => {
      const r = { [a]: [0, 0] }, e2 = [a];
      for (; e2.length > 0; ) {
        const f = e2.shift();
        if (f) {
          P[f] = 1, delete L[f];
          const i = X[f], [v, t2] = r[f];
          Object.entries(i).forEach(([o, s]) => {
            P[s] || (r[s] = Mr(
              [v, t2],
              o
            ), e2.push(s));
          });
        }
      }
      return r;
    }, "BFS"), h = [g2(M)];
    for (; Object.keys(L).length > 0; )
      h.push(g2(Object.keys(L)[0]));
    pt.records.dataStructures = {
      adjList: X,
      spatialMaps: h,
      groupAlignments: C
    };
  }
  return pt.records.dataStructures;
}, "getDataStructures");
var Wr = g((C, X) => {
  pt.records.elements[C] = X;
}, "setElementForId");
var Vr = g((C) => pt.records.elements[C], "getElementById");
var Xe = g(() => gc({
  ...Ye,
  ...oe().architecture
}), "getConfig");
var ge = {
  clear: Ir,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  setAccTitle: Ob,
  getAccTitle: Db,
  setAccDescription: Ib,
  getAccDescription: Rb,
  getConfig: Xe,
  addService: Rr,
  getServices: Sr,
  addJunction: Fr,
  getJunctions: br,
  getNodes: Pr,
  getNode: Te,
  addGroup: Gr,
  getGroups: Ur,
  addEdge: Yr,
  getEdges: Xr,
  setElementForId: Wr,
  getElementById: Vr,
  getDataStructures: Hr
};
function Pt(C) {
  return Xe()[C];
}
g(Pt, "getConfigField");
var zr = g((C, X) => {
  t(C, X), C.groups.map(X.addGroup), C.services.map((M) => X.addService({ ...M, type: "service" })), C.junctions.map((M) => X.addJunction({ ...M, type: "junction" })), C.edges.map(X.addEdge);
}, "populateDb");
var Br = {
  parse: g(async (C) => {
    const X = await Sy("architecture", C);
    N.debug(X), zr(X, ge);
  }, "parse")
};
var $r = g((C) => `
  .edge {
    stroke-width: ${C.archEdgeWidth};
    stroke: ${C.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${C.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${C.archGroupBorderColor};
    stroke-width: ${C.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles");
var kr = $r;
var ae = g((C) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${C}</g>`, "wrapIcon");
var oe2 = {
  prefix: "mermaid-architecture",
  height: 80,
  width: 80,
  icons: {
    database: {
      body: ae(
        '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    server: {
      body: ae(
        '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>'
      )
    },
    disk: {
      body: ae(
        '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>'
      )
    },
    internet: {
      body: ae(
        '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    cloud: {
      body: ae(
        '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    unknown: BT,
    blank: {
      body: ae("")
    }
  }
};
var Zr = g(async function(C, X) {
  const M = Pt("padding"), P = Pt("iconSize"), L = P / 2, g2 = P / 6, h = g2 / 2;
  await Promise.all(
    X.edges().map(async (a) => {
      var _a, _b;
      const {
        source: r,
        sourceDir: e2,
        sourceArrow: f,
        sourceGroup: i,
        target: v,
        targetDir: t2,
        targetArrow: o,
        targetGroup: s,
        label: c
      } = Ue(a);
      let { x: l, y: T } = a[0].sourceEndpoint();
      const { x: u, y: d } = a[0].midpoint();
      let { x: N2, y: F } = a[0].targetEndpoint();
      const A = M + 4;
      if (i && (zt(e2) ? l += e2 === "L" ? -A : A : T += e2 === "T" ? -A : A + 18), s && (zt(t2) ? N2 += t2 === "L" ? -A : A : F += t2 === "T" ? -A : A + 18), !i && ((_a = ge.getNode(r)) == null ? void 0 : _a.type) === "junction" && (zt(e2) ? l += e2 === "L" ? L : -L : T += e2 === "T" ? L : -L), !s && ((_b = ge.getNode(v)) == null ? void 0 : _b.type) === "junction" && (zt(t2) ? N2 += t2 === "L" ? L : -L : F += t2 === "T" ? L : -L), a[0]._private.rscratch) {
        const G = C.insert("g");
        if (G.insert("path").attr("d", `M ${l},${T} L ${u},${d} L${N2},${F} `).attr("class", "edge"), f) {
          const B = zt(e2) ? le[e2](l, g2) : l - h, U = Qt(e2) ? le[e2](T, g2) : T - h;
          G.insert("polygon").attr("points", Fe[e2](g2)).attr("transform", `translate(${B},${U})`).attr("class", "arrow");
        }
        if (o) {
          const B = zt(t2) ? le[t2](N2, g2) : N2 - h, U = Qt(t2) ? le[t2](F, g2) : F - h;
          G.insert("polygon").attr("points", Fe[t2](g2)).attr("transform", `translate(${B},${U})`).attr("class", "arrow");
        }
        if (c) {
          const B = Ce(e2, t2) ? "XY" : zt(e2) ? "X" : "Y";
          let U = 0;
          B === "X" ? U = Math.abs(l - N2) : B === "Y" ? U = Math.abs(T - F) / 1.5 : U = Math.abs(l - N2) / 2;
          const K = G.append("g");
          if (await dr(
            K,
            c,
            {
              useHtmlLabels: false,
              width: U,
              classes: "architecture-service-label"
            },
            gt()
          ), K.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), B === "X")
            K.attr("transform", "translate(" + u + ", " + d + ")");
          else if (B === "Y")
            K.attr("transform", "translate(" + u + ", " + d + ") rotate(-90)");
          else if (B === "XY") {
            const D = me(e2, t2);
            if (D && Cr(D)) {
              const at = K.node().getBoundingClientRect(), [n, m] = wr(D);
              K.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * n * m * 45})`);
              const p = K.node().getBoundingClientRect();
              K.attr(
                "transform",
                `
                translate(${u}, ${d - at.height / 2})
                translate(${n * p.width / 2}, ${m * p.height / 2})
                rotate(${-1 * n * m * 45}, 0, ${at.height / 2})
              `
              );
            }
          }
        }
      }
    })
  );
}, "drawEdges");
var qr = g(async function(C, X) {
  const P = Pt("padding") * 0.75, L = Pt("fontSize"), h = Pt("iconSize") / 2;
  await Promise.all(
    X.nodes().map(async (a) => {
      const r = ne(a);
      if (r.type === "group") {
        const { h: e2, w: f, x1: i, y1: v } = a.boundingBox();
        C.append("rect").attr("x", i + h).attr("y", v + h).attr("width", f).attr("height", e2).attr("class", "node-bkg");
        const t2 = C.append("g");
        let o = i, s = v;
        if (r.icon) {
          const c = t2.append("g");
          c.html(
            `<g>${await In(r.icon, { height: P, width: P, fallbackPrefix: oe2.prefix })}</g>`
          ), c.attr(
            "transform",
            "translate(" + (o + h + 1) + ", " + (s + h + 1) + ")"
          ), o += P, s += L / 2 - 1 - 2;
        }
        if (r.label) {
          const c = t2.append("g");
          await dr(
            c,
            r.label,
            {
              useHtmlLabels: false,
              width: f,
              classes: "architecture-service-label"
            },
            gt()
          ), c.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), c.attr(
            "transform",
            "translate(" + (o + h + 4) + ", " + (s + h + 2) + ")"
          );
        }
      }
    })
  );
}, "drawGroups");
var Jr = g(async function(C, X, M) {
  for (const P of M) {
    const L = X.append("g"), g2 = Pt("iconSize");
    if (P.title) {
      const e2 = L.append("g");
      await dr(
        e2,
        P.title,
        {
          useHtmlLabels: false,
          width: g2 * 1.5,
          classes: "architecture-service-label"
        },
        gt()
      ), e2.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e2.attr("transform", "translate(" + g2 / 2 + ", " + g2 + ")");
    }
    const h = L.append("g");
    if (P.icon)
      h.html(
        `<g>${await In(P.icon, { height: g2, width: g2, fallbackPrefix: oe2.prefix })}</g>`
      );
    else if (P.iconText) {
      h.html(
        `<g>${await In("blank", { height: g2, width: g2, fallbackPrefix: oe2.prefix })}</g>`
      );
      const i = h.append("g").append("foreignObject").attr("width", g2).attr("height", g2).append("div").attr("class", "node-icon-text").attr("style", `height: ${g2}px;`).append("div").html(P.iconText), v = parseInt(
        window.getComputedStyle(i.node(), null).getPropertyValue("font-size").replace(/\D/g, "")
      ) ?? 16;
      i.attr("style", `-webkit-line-clamp: ${Math.floor((g2 - 2) / v)};`);
    } else
      h.append("path").attr("class", "node-bkg").attr("id", "node-" + P.id).attr(
        "d",
        `M0 ${g2} v${-g2} q0,-5 5,-5 h${g2} q5,0 5,5 v${g2} H0 Z`
      );
    L.attr("class", "architecture-service");
    const { width: a, height: r } = L._groups[0][0].getBBox();
    P.width = a, P.height = r, C.setElementForId(P.id, L);
  }
  return 0;
}, "drawServices");
var Qr = g(function(C, X, M) {
  M.forEach((P) => {
    const L = X.append("g"), g2 = Pt("iconSize");
    L.append("g").append("rect").attr("id", "node-" + P.id).attr("fill-opacity", "0").attr("width", g2).attr("height", g2), L.attr("class", "architecture-junction");
    const { width: a, height: r } = L._groups[0][0].getBBox();
    L.width = a, L.height = r, C.setElementForId(P.id, L);
  });
}, "drawJunctions");
LT([
  {
    name: oe2.prefix,
    icons: oe2
  }
]);
ea.use(Nr);
function He(C, X) {
  C.forEach((M) => {
    X.add({
      group: "nodes",
      data: {
        type: "service",
        id: M.id,
        icon: M.icon,
        label: M.title,
        parent: M.in,
        width: Pt("iconSize"),
        height: Pt("iconSize")
      },
      classes: "node-service"
    });
  });
}
g(He, "addServices");
function We(C, X) {
  C.forEach((M) => {
    X.add({
      group: "nodes",
      data: {
        type: "junction",
        id: M.id,
        parent: M.in,
        width: Pt("iconSize"),
        height: Pt("iconSize")
      },
      classes: "node-junction"
    });
  });
}
g(We, "addJunctions");
function Ve(C, X) {
  X.nodes().map((M) => {
    const P = ne(M);
    if (P.type === "group")
      return;
    P.x = M.position().x, P.y = M.position().y, C.getElementById(P.id).attr("transform", "translate(" + (P.x || 0) + "," + (P.y || 0) + ")");
  });
}
g(Ve, "positionNodes");
function ze(C, X) {
  C.forEach((M) => {
    X.add({
      group: "nodes",
      data: {
        type: "group",
        id: M.id,
        icon: M.icon,
        label: M.title,
        parent: M.in
      },
      classes: "node-group"
    });
  });
}
g(ze, "addGroups");
function Be(C, X) {
  C.forEach((M) => {
    const { lhsId: P, rhsId: L, lhsInto: g2, lhsGroup: h, rhsInto: a, lhsDir: r, rhsDir: e2, rhsGroup: f, title: i } = M, v = Ce(M.lhsDir, M.rhsDir) ? "segments" : "straight", t2 = {
      id: `${P}-${L}`,
      label: i,
      source: P,
      sourceDir: r,
      sourceArrow: g2,
      sourceGroup: h,
      sourceEndpoint: r === "L" ? "0 50%" : r === "R" ? "100% 50%" : r === "T" ? "50% 0" : "50% 100%",
      target: L,
      targetDir: e2,
      targetArrow: a,
      targetGroup: f,
      targetEndpoint: e2 === "L" ? "0 50%" : e2 === "R" ? "100% 50%" : e2 === "T" ? "50% 0" : "50% 100%"
    };
    X.add({
      group: "edges",
      data: t2,
      classes: v
    });
  });
}
g(Be, "addEdges");
function $e(C, X, M) {
  const P = g((a, r) => Object.entries(a).reduce(
    (e2, [f, i]) => {
      var _a;
      let v = 0;
      const t2 = Object.entries(i);
      if (t2.length === 1)
        return e2[f] = t2[0][1], e2;
      for (let o = 0; o < t2.length - 1; o++)
        for (let s = o + 1; s < t2.length; s++) {
          const [c, l] = t2[o], [T, u] = t2[s];
          if (((_a = M[c]) == null ? void 0 : _a[T]) === r)
            e2[f] ?? (e2[f] = []), e2[f] = [...e2[f], ...l, ...u];
          else if (c === "default" || T === "default")
            e2[f] ?? (e2[f] = []), e2[f] = [...e2[f], ...l, ...u];
          else {
            const N2 = `${f}-${v++}`;
            e2[N2] = l;
            const F = `${f}-${v++}`;
            e2[F] = u;
          }
        }
      return e2;
    },
    {}
  ), "flattenAlignments"), L = X.map((a) => {
    const r = {}, e2 = {};
    return Object.entries(a).forEach(([f, [i, v]]) => {
      var _a, _b, _c;
      const t2 = ((_a = C.getNode(f)) == null ? void 0 : _a.in) ?? "default";
      r[v] ?? (r[v] = {}), (_b = r[v])[t2] ?? (_b[t2] = []), r[v][t2].push(f), e2[i] ?? (e2[i] = {}), (_c = e2[i])[t2] ?? (_c[t2] = []), e2[i][t2].push(f);
    }), {
      horiz: Object.values(P(r, "horizontal")).filter(
        (f) => f.length > 1
      ),
      vert: Object.values(P(e2, "vertical")).filter(
        (f) => f.length > 1
      )
    };
  }), [g2, h] = L.reduce(
    ([a, r], { horiz: e2, vert: f }) => [
      [...a, ...e2],
      [...r, ...f]
    ],
    [[], []]
  );
  return {
    horizontal: g2,
    vertical: h
  };
}
g($e, "getAlignments");
function ke(C) {
  const X = [], M = g((L) => `${L[0]},${L[1]}`, "posToStr"), P = g((L) => L.split(",").map((g2) => parseInt(g2)), "strToPos");
  return C.forEach((L) => {
    const g2 = Object.fromEntries(
      Object.entries(L).map(([e2, f]) => [M(f), e2])
    ), h = [M([0, 0])], a = {}, r = {
      L: [-1, 0],
      R: [1, 0],
      T: [0, 1],
      B: [0, -1]
    };
    for (; h.length > 0; ) {
      const e2 = h.shift();
      if (e2) {
        a[e2] = 1;
        const f = g2[e2];
        if (f) {
          const i = P(e2);
          Object.entries(r).forEach(([v, t2]) => {
            const o = M([i[0] + t2[0], i[1] + t2[1]]), s = g2[o];
            s && !a[o] && (h.push(o), X.push({
              [Se[v]]: s,
              [Se[Lr(v)]]: f,
              gap: 1.5 * Pt("iconSize")
            }));
          });
        }
      }
    }
  }), X;
}
g(ke, "getRelativeConstraints");
function Ze(C, X, M, P, L, { spatialMaps: g2, groupAlignments: h }) {
  return new Promise((a) => {
    const r = dt("body").append("div").attr("id", "cy").attr("style", "display:none"), e2 = ea({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "straight",
            label: "data(label)",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [0.5],
            // @ts-ignore Incorrect library types
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "node",
          style: {
            // @ts-ignore Incorrect library types
            "compound-sizing-wrt-labels": "include"
          }
        },
        {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${Pt("fontSize")}px`
          }
        },
        {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-group",
          style: {
            // @ts-ignore Incorrect library types
            padding: `${Pt("padding")}px`
          }
        }
      ],
      layout: {
        name: "grid",
        boundingBox: {
          x1: 0,
          x2: 100,
          y1: 0,
          y2: 100
        }
      }
    });
    r.remove(), ze(M, e2), He(C, e2), We(X, e2), Be(P, e2);
    const f = $e(L, g2, h), i = ke(g2), v = e2.layout({
      name: "fcose",
      quality: "proof",
      styleEnabled: false,
      animate: false,
      nodeDimensionsIncludeLabels: false,
      // Adjust the edge parameters if it passes through the border of a group
      // Hacky fix for: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose/issues/67
      idealEdgeLength(t2) {
        const [o, s] = t2.connectedNodes(), { parent: c } = ne(o), { parent: l } = ne(s);
        return c === l ? 1.5 * Pt("iconSize") : 0.5 * Pt("iconSize");
      },
      edgeElasticity(t2) {
        const [o, s] = t2.connectedNodes(), { parent: c } = ne(o), { parent: l } = ne(s);
        return c === l ? 0.45 : 1e-3;
      },
      alignmentConstraint: f,
      relativePlacementConstraint: i
    });
    v.one("layoutstop", () => {
      var _a;
      function t2(o, s, c, l) {
        let T, u;
        const { x: d, y: N2 } = o, { x: F, y: A } = s;
        u = (l - N2 + (d - c) * (N2 - A) / (d - F)) / Math.sqrt(1 + Math.pow((N2 - A) / (d - F), 2)), T = Math.sqrt(Math.pow(l - N2, 2) + Math.pow(c - d, 2) - Math.pow(u, 2));
        const G = Math.sqrt(Math.pow(F - d, 2) + Math.pow(A - N2, 2));
        T = T / G;
        let B = (F - d) * (l - N2) - (A - N2) * (c - d);
        switch (true) {
          case B >= 0:
            B = 1;
            break;
          case B < 0:
            B = -1;
            break;
        }
        let U = (F - d) * (c - d) + (A - N2) * (l - N2);
        switch (true) {
          case U >= 0:
            U = 1;
            break;
          case U < 0:
            U = -1;
            break;
        }
        return u = Math.abs(u) * B, T = T * U, {
          distances: u,
          weights: T
        };
      }
      g(t2, "getSegmentWeights"), e2.startBatch();
      for (const o of Object.values(e2.edges()))
        if ((_a = o.data) == null ? void 0 : _a.call(o)) {
          const { x: s, y: c } = o.source().position(), { x: l, y: T } = o.target().position();
          if (s !== l && c !== T) {
            const u = o.sourceEndpoint(), d = o.targetEndpoint(), { sourceDir: N2 } = Ue(o), [F, A] = Qt(N2) ? [u.x, d.y] : [d.x, u.y], { weights: G, distances: B } = t2(u, d, F, A);
            o.style("segment-distances", B), o.style("segment-weights", G);
          }
        }
      e2.endBatch(), v.run();
    }), v.run(), e2.ready((t2) => {
      N.info("Ready", t2), a(e2);
    });
  });
}
g(Ze, "layoutArchitecture");
var Kr = g(async (C, X, M, P) => {
  const L = P.db, g2 = L.getServices(), h = L.getJunctions(), a = L.getGroups(), r = L.getEdges(), e2 = L.getDataStructures(), f = XB(X), i = f.append("g");
  i.attr("class", "architecture-edges");
  const v = f.append("g");
  v.attr("class", "architecture-services");
  const t2 = f.append("g");
  t2.attr("class", "architecture-groups"), await Jr(L, v, g2), Qr(L, v, h);
  const o = await Ze(g2, h, a, r, L, e2);
  await Zr(i, o), await qr(t2, o), Ve(L, o), Ab(void 0, f, Pt("padding"), Pt("useMaxWidth"));
}, "draw");
var jr = { draw: Kr };
var ai = {
  parser: Br,
  db: ge,
  renderer: jr,
  styles: kr
};
export {
  ai as diagram
};
//# sourceMappingURL=architectureDiagram-SUXI7LT5-D1XW0Uoy-IMTL2BFQ.js.map
