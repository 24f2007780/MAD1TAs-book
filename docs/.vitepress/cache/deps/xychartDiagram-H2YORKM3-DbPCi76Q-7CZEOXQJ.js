import {
  fn
} from "./chunk-SGPF4MXK.js";
import "./chunk-ZLWAXMUN.js";
import {
  h
} from "./chunk-63BY5VW5.js";
import {
  t
} from "./chunk-6YTCN23N.js";
import {
  $f,
  Cf,
  Db,
  ET,
  Er,
  Fb,
  Ib,
  N,
  Nb,
  Ob,
  Pb,
  Rb,
  XB,
  _C,
  g,
  gc,
  nb,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/xychartDiagram-H2YORKM3-DbPCi76Q.js
function Ri(e, t2, i) {
  e = +e, t2 = +t2, i = (n = arguments.length) < 2 ? (t2 = e, e = 0, 1) : n < 3 ? 1 : +i;
  for (var s = -1, n = Math.max(0, Math.ceil((t2 - e) / i)) | 0, r = new Array(n); ++s < n; )
    r[s] = e + s * i;
  return r;
}
function yt() {
  var e = h().unknown(void 0), t2 = e.domain, i = e.range, s = 0, n = 1, r, g2, m = false, p = 0, k = 0, v = 0.5;
  delete e.unknown;
  function C() {
    var b = t2().length, E = n < s, D = E ? n : s, P = E ? s : n;
    r = (P - D) / Math.max(1, b - p + k * 2), m && (r = Math.floor(r)), D += (P - D - r * (b - p)) * v, g2 = r * (1 - p), m && (D = Math.round(D), g2 = Math.round(g2));
    var I = Ri(b).map(function(y) {
      return D + r * y;
    });
    return i(E ? I.reverse() : I);
  }
  return e.domain = function(b) {
    return arguments.length ? (t2(b), C()) : t2();
  }, e.range = function(b) {
    return arguments.length ? ([s, n] = b, s = +s, n = +n, C()) : [s, n];
  }, e.rangeRound = function(b) {
    return [s, n] = b, s = +s, n = +n, m = true, C();
  }, e.bandwidth = function() {
    return g2;
  }, e.step = function() {
    return r;
  }, e.round = function(b) {
    return arguments.length ? (m = !!b, C()) : m;
  }, e.padding = function(b) {
    return arguments.length ? (p = Math.min(1, k = +b), C()) : p;
  }, e.paddingInner = function(b) {
    return arguments.length ? (p = Math.min(1, b), C()) : p;
  }, e.paddingOuter = function(b) {
    return arguments.length ? (k = +b, C()) : k;
  }, e.align = function(b) {
    return arguments.length ? (v = Math.max(0, Math.min(1, b)), C()) : v;
  }, e.copy = function() {
    return yt(t2(), [s, n]).round(m).paddingInner(p).paddingOuter(k).align(v);
  }, t.apply(C(), arguments);
}
var bt = function() {
  var e = g(function(F, h2, u, x) {
    for (u = u || {}, x = F.length; x--; u[F[x]] = h2) ;
    return u;
  }, "o"), t2 = [1, 10, 12, 14, 16, 18, 19, 21, 23], i = [2, 6], s = [1, 3], n = [1, 5], r = [1, 6], g2 = [1, 7], m = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], p = [1, 25], k = [1, 26], v = [1, 28], C = [1, 29], b = [1, 30], E = [1, 31], D = [1, 32], P = [1, 33], I = [1, 34], y = [1, 35], _ = [1, 36], c = [1, 37], W = [1, 43], z = [1, 42], U = [1, 47], X = [1, 50], l = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], L = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], S = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], R = [1, 64], $ = {
    trace: g(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "XYCHART", 8: "CHART_ORIENTATION", 10: "title", 12: "X_AXIS", 14: "Y_AXIS", 16: "LINE", 18: "BAR", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "SQUARE_BRACES_START", 26: "SQUARE_BRACES_END", 27: "NUMBER_WITH_DECIMAL", 28: "COMMA", 31: "ARROW_DELIMITER", 34: "NEWLINE", 35: "SEMI", 36: "EOF", 38: "STR", 39: "MD_STR", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "PLUS", 45: "EQUALS", 46: "MULT", 47: "DOT", 48: "BRKT", 49: "MINUS", 50: "UNDERSCORE" },
    productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
    performAction: g(function(h2, u, x, d, w, o, at) {
      var f = o.length - 1;
      switch (w) {
        case 5:
          d.setOrientation(o[f]);
          break;
        case 9:
          d.setDiagramTitle(o[f].text.trim());
          break;
        case 12:
          d.setLineData({ text: "", type: "text" }, o[f]);
          break;
        case 13:
          d.setLineData(o[f - 1], o[f]);
          break;
        case 14:
          d.setBarData({ text: "", type: "text" }, o[f]);
          break;
        case 15:
          d.setBarData(o[f - 1], o[f]);
          break;
        case 16:
          this.$ = o[f].trim(), d.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = o[f].trim(), d.setAccDescription(this.$);
          break;
        case 19:
          this.$ = o[f - 1];
          break;
        case 20:
          this.$ = [Number(o[f - 2]), ...o[f]];
          break;
        case 21:
          this.$ = [Number(o[f])];
          break;
        case 22:
          d.setXAxisTitle(o[f]);
          break;
        case 23:
          d.setXAxisTitle(o[f - 1]);
          break;
        case 24:
          d.setXAxisTitle({ type: "text", text: "" });
          break;
        case 25:
          d.setXAxisBand(o[f]);
          break;
        case 26:
          d.setXAxisRangeData(Number(o[f - 2]), Number(o[f]));
          break;
        case 27:
          this.$ = o[f - 1];
          break;
        case 28:
          this.$ = [o[f - 2], ...o[f]];
          break;
        case 29:
          this.$ = [o[f]];
          break;
        case 30:
          d.setYAxisTitle(o[f]);
          break;
        case 31:
          d.setYAxisTitle(o[f - 1]);
          break;
        case 32:
          d.setYAxisTitle({ type: "text", text: "" });
          break;
        case 33:
          d.setYAxisRangeData(Number(o[f - 2]), Number(o[f]));
          break;
        case 37:
          this.$ = { text: o[f], type: "text" };
          break;
        case 38:
          this.$ = { text: o[f], type: "text" };
          break;
        case 39:
          this.$ = { text: o[f], type: "markdown" };
          break;
        case 40:
          this.$ = o[f];
          break;
        case 41:
          this.$ = o[f - 1] + "" + o[f];
          break;
      }
    }, "anonymous"),
    table: [e(t2, i, { 3: 1, 4: 2, 7: 4, 5: s, 34: n, 35: r, 36: g2 }), { 1: [3] }, e(t2, i, { 4: 2, 7: 4, 3: 8, 5: s, 34: n, 35: r, 36: g2 }), e(t2, i, { 4: 2, 7: 4, 6: 9, 3: 10, 5: s, 8: [1, 11], 34: n, 35: r, 36: g2 }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, e(m, [2, 34]), e(m, [2, 35]), e(m, [2, 36]), { 1: [2, 1] }, e(t2, i, { 4: 2, 7: 4, 3: 21, 5: s, 34: n, 35: r, 36: g2 }), { 1: [2, 3] }, e(m, [2, 5]), e(t2, [2, 7], { 4: 22, 34: n, 35: r, 36: g2 }), { 11: 23, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 39, 13: 38, 24: W, 27: z, 29: 40, 30: 41, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 45, 15: 44, 27: U, 33: 46, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 49, 17: 48, 24: X, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 11: 52, 17: 51, 24: X, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, { 20: [1, 53] }, { 22: [1, 54] }, e(l, [2, 18]), { 1: [2, 2] }, e(l, [2, 8]), e(l, [2, 9]), e(L, [2, 37], { 40: 55, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }), e(L, [2, 38]), e(L, [2, 39]), e(S, [2, 40]), e(S, [2, 42]), e(S, [2, 43]), e(S, [2, 44]), e(S, [2, 45]), e(S, [2, 46]), e(S, [2, 47]), e(S, [2, 48]), e(S, [2, 49]), e(S, [2, 50]), e(S, [2, 51]), e(l, [2, 10]), e(l, [2, 22], { 30: 41, 29: 56, 24: W, 27: z }), e(l, [2, 24]), e(l, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, e(l, [2, 11]), e(l, [2, 30], { 33: 60, 27: U }), e(l, [2, 32]), { 31: [1, 61] }, e(l, [2, 12]), { 17: 62, 24: X }, { 25: 63, 27: R }, e(l, [2, 14]), { 17: 65, 24: X }, e(l, [2, 16]), e(l, [2, 17]), e(S, [2, 41]), e(l, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, e(l, [2, 31]), { 27: [1, 69] }, e(l, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, e(l, [2, 15]), e(l, [2, 26]), e(l, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: p, 39: k, 40: 27, 41: v, 42: C, 43: b, 44: E, 45: D, 46: P, 47: I, 48: y, 49: _, 50: c }, e(l, [2, 33]), e(l, [2, 19]), { 25: 73, 27: R }, { 26: [2, 28] }, { 26: [2, 20] }],
    defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
    parseError: g(function(h2, u) {
      if (u.recoverable)
        this.trace(h2);
      else {
        var x = new Error(h2);
        throw x.hash = u, x;
      }
    }, "parseError"),
    parse: g(function(h2) {
      var u = this, x = [0], d = [], w = [null], o = [], at = this.table, f = "", lt = 0, It = 0, hi = 2, Mt = 1, li = o.slice.call(arguments, 1), T = Object.create(this.lexer), Y = { yy: {} };
      for (var dt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, dt) && (Y.yy[dt] = this.yy[dt]);
      T.setInput(h2, Y.yy), Y.yy.lexer = T, Y.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
      var ft = T.yylloc;
      o.push(ft);
      var ci = T.options && T.options.ranges;
      typeof Y.yy.parseError == "function" ? this.parseError = Y.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ui(V) {
        x.length = x.length - 2 * V, w.length = w.length - V, o.length = o.length - V;
      }
      g(ui, "popStack");
      function Vt() {
        var V;
        return V = d.pop() || T.lex() || Mt, typeof V != "number" && (V instanceof Array && (d = V, V = d.pop()), V = u.symbols_[V] || V), V;
      }
      g(Vt, "lex");
      for (var M, H, B, pt, q = {}, ct, O, Bt, ut; ; ) {
        if (H = x[x.length - 1], this.defaultActions[H] ? B = this.defaultActions[H] : ((M === null || typeof M > "u") && (M = Vt()), B = at[H] && at[H][M]), typeof B > "u" || !B.length || !B[0]) {
          var mt = "";
          ut = [];
          for (ct in at[H])
            this.terminals_[ct] && ct > hi && ut.push("'" + this.terminals_[ct] + "'");
          T.showPosition ? mt = "Parse error on line " + (lt + 1) + `:
` + T.showPosition() + `
Expecting ` + ut.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : mt = "Parse error on line " + (lt + 1) + ": Unexpected " + (M == Mt ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(mt, {
            text: T.match,
            token: this.terminals_[M] || M,
            line: T.yylineno,
            loc: ft,
            expected: ut
          });
        }
        if (B[0] instanceof Array && B.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + H + ", token: " + M);
        switch (B[0]) {
          case 1:
            x.push(M), w.push(T.yytext), o.push(T.yylloc), x.push(B[1]), M = null, It = T.yyleng, f = T.yytext, lt = T.yylineno, ft = T.yylloc;
            break;
          case 2:
            if (O = this.productions_[B[1]][1], q.$ = w[w.length - O], q._$ = {
              first_line: o[o.length - (O || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (O || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, ci && (q._$.range = [
              o[o.length - (O || 1)].range[0],
              o[o.length - 1].range[1]
            ]), pt = this.performAction.apply(q, [
              f,
              It,
              lt,
              Y.yy,
              B[1],
              w,
              o
            ].concat(li)), typeof pt < "u")
              return pt;
            O && (x = x.slice(0, -1 * O * 2), w = w.slice(0, -1 * O), o = o.slice(0, -1 * O)), x.push(this.productions_[B[1]][0]), w.push(q.$), o.push(q._$), Bt = at[x[x.length - 2]][x[x.length - 1]], x.push(Bt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Et = function() {
    var F = {
      EOF: 1,
      parseError: g(function(u, x) {
        if (this.yy.parser)
          this.yy.parser.parseError(u, x);
        else
          throw new Error(u);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: g(function(h2, u) {
        return this.yy = u || this.yy || {}, this._input = h2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: g(function() {
        var h2 = this._input[0];
        this.yytext += h2, this.yyleng++, this.offset++, this.match += h2, this.matched += h2;
        var u = h2.match(/(?:\r\n?|\n).*/g);
        return u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h2;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: g(function(h2) {
        var u = h2.length, x = h2.split(/(?:\r\n?|\n)/g);
        this._input = h2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u), this.offset -= u;
        var d = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: x ? (x.length === d.length ? this.yylloc.first_column : 0) + d[d.length - x.length].length - x[0].length : this.yylloc.first_column - u
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - u]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: g(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: g(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: g(function(h2) {
        this.unput(this.match.slice(h2));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: g(function() {
        var h2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (h2.length > 20 ? "..." : "") + h2.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: g(function() {
        var h2 = this.match;
        return h2.length < 20 && (h2 += this._input.substr(0, 20 - h2.length)), (h2.substr(0, 20) + (h2.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: g(function() {
        var h2 = this.pastInput(), u = new Array(h2.length + 1).join("-");
        return h2 + this.upcomingInput() + `
` + u + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: g(function(h2, u) {
        var x, d, w;
        if (this.options.backtrack_lexer && (w = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), d = h2[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h2[0].length
        }, this.yytext += h2[0], this.match += h2[0], this.matches = h2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(h2[0].length), this.matched += h2[0], x = this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), x)
          return x;
        if (this._backtrack) {
          for (var o in w)
            this[o] = w[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: g(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var h2, u, x, d;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), o = 0; o < w.length; o++)
          if (x = this._input.match(this.rules[w[o]]), x && (!u || x[0].length > u[0].length)) {
            if (u = x, d = o, this.options.backtrack_lexer) {
              if (h2 = this.test_match(x, w[o]), h2 !== false)
                return h2;
              if (this._backtrack) {
                u = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return u ? (h2 = this.test_match(u, w[d]), h2 !== false ? h2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: g(function() {
        var u = this.next();
        return u || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: g(function(u) {
        this.conditionStack.push(u);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: g(function() {
        var u = this.conditionStack.length - 1;
        return u > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: g(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: g(function(u) {
        return u = this.conditionStack.length - 1 - Math.abs(u || 0), u >= 0 ? this.conditionStack[u] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: g(function(u) {
        this.begin(u);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: g(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: g(function(u, x, d, w) {
        switch (d) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return this.popState(), 34;
          case 3:
            return this.popState(), 34;
          case 4:
            return 34;
          case 5:
            break;
          case 6:
            return 10;
          case 7:
            return this.pushState("acc_title"), 19;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.pushState("acc_descr"), 21;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 5;
          case 15:
            return 8;
          case 16:
            return this.pushState("axis_data"), "X_AXIS";
          case 17:
            return this.pushState("axis_data"), "Y_AXIS";
          case 18:
            return this.pushState("axis_band_data"), 24;
          case 19:
            return 31;
          case 20:
            return this.pushState("data"), 16;
          case 21:
            return this.pushState("data"), 18;
          case 22:
            return this.pushState("data_inner"), 24;
          case 23:
            return 27;
          case 24:
            return this.popState(), 26;
          case 25:
            this.popState();
            break;
          case 26:
            this.pushState("string");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            return "STR";
          case 29:
            return 24;
          case 30:
            return 26;
          case 31:
            return 43;
          case 32:
            return "COLON";
          case 33:
            return 44;
          case 34:
            return 28;
          case 35:
            return 45;
          case 36:
            return 46;
          case 37:
            return 48;
          case 38:
            return 50;
          case 39:
            return 47;
          case 40:
            return 41;
          case 41:
            return 49;
          case 42:
            return 42;
          case 43:
            break;
          case 44:
            return 35;
          case 45:
            return 36;
        }
      }, "anonymous"),
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [27, 28], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true } }
    };
    return F;
  }();
  $.lexer = Et;
  function N2() {
    this.yy = {};
  }
  return g(N2, "Parser"), N2.prototype = $, $.Parser = N2, new N2();
}();
bt.parser = bt;
var Ti = bt;
function At(e) {
  return e.type === "bar";
}
g(At, "isBarPlot");
function _t(e) {
  return e.type === "band";
}
g(_t, "isBandAxisData");
function G(e) {
  return e.type === "linear";
}
g(G, "isLinearAxisData");
var j;
var Ht = (j = class {
  constructor(t2) {
    this.parentGroup = t2;
  }
  getMaxDimension(t2, i) {
    if (!this.parentGroup)
      return {
        width: t2.reduce((r, g2) => Math.max(g2.length, r), 0) * i,
        height: i
      };
    const s = {
      width: 0,
      height: 0
    }, n = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
    for (const r of t2) {
      const g2 = ET(n, 1, r), m = g2 ? g2.width : r.length * i, p = g2 ? g2.height : i;
      s.width = Math.max(s.width, m), s.height = Math.max(s.height, p);
    }
    return n.remove(), s;
  }
}, g(j, "TextDimensionCalculatorWithFont"), j);
var Ft = 0.7;
var Ot = 0.2;
var Q;
var Ut = (Q = class {
  constructor(t2, i, s, n) {
    this.axisConfig = t2, this.title = i, this.textDimensionCalculator = s, this.axisThemeConfig = n, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left", this.showTitle = false, this.showLabel = false, this.showTick = false, this.showAxisLine = false, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left";
  }
  setRange(t2) {
    this.range = t2, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = t2[1] - t2[0] : this.boundingRect.width = t2[1] - t2[0], this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(t2) {
    this.axisPosition = t2, this.setRange(this.range);
  }
  getTickDistance() {
    const t2 = this.getRange();
    return Math.abs(t2[0] - t2[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(
      this.getTickValues().map((t2) => t2.toString()),
      this.axisConfig.labelFontSize
    );
  }
  recalculateOuterPaddingToDrawBar() {
    Ft * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(Ft * this.getTickDistance() / 2)), this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(t2) {
    let i = t2.height;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = Ot * t2.width;
      this.outerPadding = Math.min(s.width / 2, n);
      const r = s.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = s.height, r <= i && (i -= r, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width, this.boundingRect.height = t2.height - i;
  }
  calculateSpaceIfDrawnVertical(t2) {
    let i = t2.width;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = Ot * t2.height;
      this.outerPadding = Math.min(s.height / 2, n);
      const r = s.width + this.axisConfig.labelPadding * 2;
      r <= i && (i -= r, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width - i, this.boundingRect.height = t2.height;
  }
  calculateSpace(t2) {
    return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(t2) : this.calculateSpaceIfDrawnHorizontally(t2), this.recalculateScale(), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  getDrawableElementsForLeftAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "axisl-line"],
        data: [
          {
            path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["left-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        y: this.getScaleValue(i),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "middle",
        horizontalPos: "right"
      }))
    }), this.showTick) {
      const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${i},${this.getScaleValue(s)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(s)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["left-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.axisConfig.titlePadding,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 270,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForBottomAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i + this.axisConfig.tickLength}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.range[0] + (this.range[1] - this.range[0]) / 2,
          y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForTopAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["top-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(s)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["top-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.axisConfig.titlePadding,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElements() {
    if (this.axisPosition === "left")
      return this.getDrawableElementsForLeftAxis();
    if (this.axisPosition === "right")
      throw Error("Drawing of right axis is not implemented");
    return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
  }
}, g(Q, "BaseAxis"), Q);
var K;
var Di = (K = class extends Ut {
  constructor(t2, i, s, n, r) {
    super(t2, n, r, i), this.categories = s, this.scale = yt().domain(this.categories).range(this.getRange());
  }
  setRange(t2) {
    super.setRange(t2);
  }
  recalculateScale() {
    this.scale = yt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5), N.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(t2) {
    return this.scale(t2) ?? this.getRange()[0];
  }
}, g(K, "BandAxis"), K);
var Z;
var vi = (Z = class extends Ut {
  constructor(t2, i, s, n, r) {
    super(t2, n, r, i), this.domain = s, this.scale = fn().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    const t2 = [...this.domain];
    this.axisPosition === "left" && t2.reverse(), this.scale = fn().domain(t2).range(this.getRange());
  }
  getScaleValue(t2) {
    return this.scale(t2);
  }
}, g(Z, "LinearAxis"), Z);
function wt(e, t2, i, s) {
  const n = new Ht(s);
  return _t(e) ? new Di(
    t2,
    i,
    e.categories,
    e.title,
    n
  ) : new vi(
    t2,
    i,
    [e.min, e.max],
    e.title,
    n
  );
}
g(wt, "getAxis");
var J;
var Pi = (J = class {
  constructor(t2, i, s, n) {
    this.textDimensionCalculator = t2, this.chartConfig = i, this.chartData = s, this.chartThemeConfig = n, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this.showChartTitle = false;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    const i = this.textDimensionCalculator.getMaxDimension(
      [this.chartData.title],
      this.chartConfig.titleFontSize
    ), s = Math.max(i.width, t2.width), n = i.height + 2 * this.chartConfig.titlePadding;
    return i.width <= s && i.height <= n && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = s, this.boundingRect.height = n, this.showChartTitle = true), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    const t2 = [];
    return this.showChartTitle && t2.push({
      groupTexts: ["chart-title"],
      type: "text",
      data: [
        {
          fontSize: this.chartConfig.titleFontSize,
          text: this.chartData.title,
          verticalPos: "middle",
          horizontalPos: "center",
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.chartThemeConfig.titleColor,
          rotation: 0
        }
      ]
    }), t2;
  }
}, g(J, "ChartTitle"), J);
function $t(e, t2, i, s) {
  const n = new Ht(s);
  return new Pi(n, e, t2, i);
}
g($t, "getChartTitleComponent");
var tt;
var Li = (tt = class {
  constructor(t2, i, s, n, r) {
    this.plotData = t2, this.xAxis = i, this.yAxis = s, this.orientation = n, this.plotIndex = r;
  }
  getDrawableElement() {
    const t2 = this.plotData.data.map((s) => [
      this.xAxis.getScaleValue(s[0]),
      this.yAxis.getScaleValue(s[1])
    ]);
    let i;
    return this.orientation === "horizontal" ? i = _C().y((s) => s[0]).x((s) => s[1])(t2) : i = _C().x((s) => s[0]).y((s) => s[1])(t2), i ? [
      {
        groupTexts: ["plot", `line-plot-${this.plotIndex}`],
        type: "path",
        data: [
          {
            path: i,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }
        ]
      }
    ] : [];
  }
}, g(tt, "LinePlot"), tt);
var it;
var Ei = (it = class {
  constructor(t2, i, s, n, r, g2) {
    this.barData = t2, this.boundingRect = i, this.xAxis = s, this.yAxis = n, this.orientation = r, this.plotIndex = g2;
  }
  getDrawableElement() {
    const t2 = this.barData.data.map((r) => [
      this.xAxis.getScaleValue(r[0]),
      this.yAxis.getScaleValue(r[1])
    ]), s = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - 0.05), n = s / 2;
    return this.orientation === "horizontal" ? [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((r) => ({
          x: this.boundingRect.x,
          y: r[0] - n,
          height: s,
          width: r[1] - this.boundingRect.x,
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ] : [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((r) => ({
          x: r[0] - n,
          y: r[1],
          width: s,
          height: this.boundingRect.y + this.boundingRect.height - r[1],
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ];
  }
}, g(it, "BarPlot"), it);
var et;
var Ii = (et = class {
  constructor(t2, i, s) {
    this.chartConfig = t2, this.chartData = i, this.chartThemeConfig = s, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  setAxes(t2, i) {
    this.xAxis = t2, this.yAxis = i;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    return this.boundingRect.width = t2.width, this.boundingRect.height = t2.height, {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis))
      throw Error("Axes must be passed to render Plots");
    const t2 = [];
    for (const [i, s] of this.chartData.plots.entries())
      switch (s.type) {
        case "line":
          {
            const n = new Li(
              s,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
        case "bar":
          {
            const n = new Ei(
              s,
              this.boundingRect,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
      }
    return t2;
  }
}, g(et, "BasePlot"), et);
function qt(e, t2, i) {
  return new Ii(e, t2, i);
}
g(qt, "getPlotComponent");
var st;
var Mi = (st = class {
  constructor(t2, i, s, n) {
    this.chartConfig = t2, this.chartData = i, this.componentStore = {
      title: $t(t2, i, s, n),
      plot: qt(t2, i, s),
      xAxis: wt(
        i.xAxis,
        t2.xAxis,
        {
          titleColor: s.xAxisTitleColor,
          labelColor: s.xAxisLabelColor,
          tickColor: s.xAxisTickColor,
          axisLineColor: s.xAxisLineColor
        },
        n
      ),
      yAxis: wt(
        i.yAxis,
        t2.yAxis,
        {
          titleColor: s.yAxisTitleColor,
          labelColor: s.yAxisLabelColor,
          tickColor: s.yAxisTickColor,
          axisLineColor: s.yAxisLineColor
        },
        n
      )
    };
  }
  calculateVerticalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, r = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), g2 = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), m = this.componentStore.plot.calculateSpace({
      width: r,
      height: g2
    });
    t2 -= m.width, i -= m.height, m = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), n = m.height, i -= m.height, this.componentStore.xAxis.setAxisPosition("bottom"), m = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= m.height, this.componentStore.yAxis.setAxisPosition("left"), m = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), s = m.width, t2 -= m.width, t2 > 0 && (r += t2, t2 = 0), i > 0 && (g2 += i, i = 0), this.componentStore.plot.calculateSpace({
      width: r,
      height: g2
    }), this.componentStore.plot.setBoundingBoxXY({ x: s, y: n }), this.componentStore.xAxis.setRange([s, s + r]), this.componentStore.xAxis.setBoundingBoxXY({ x: s, y: n + g2 }), this.componentStore.yAxis.setRange([n, n + g2]), this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: n }), this.chartData.plots.some((p) => At(p)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, r = 0, g2 = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), m = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), p = this.componentStore.plot.calculateSpace({
      width: g2,
      height: m
    });
    t2 -= p.width, i -= p.height, p = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), s = p.height, i -= p.height, this.componentStore.xAxis.setAxisPosition("left"), p = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), t2 -= p.width, n = p.width, this.componentStore.yAxis.setAxisPosition("top"), p = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= p.height, r = s + p.height, t2 > 0 && (g2 += t2, t2 = 0), i > 0 && (m += i, i = 0), this.componentStore.plot.calculateSpace({
      width: g2,
      height: m
    }), this.componentStore.plot.setBoundingBoxXY({ x: n, y: r }), this.componentStore.yAxis.setRange([n, n + g2]), this.componentStore.yAxis.setBoundingBoxXY({ x: n, y: s }), this.componentStore.xAxis.setRange([r, r + m]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: r }), this.chartData.plots.some((k) => At(k)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateSpace() {
    this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    this.calculateSpace();
    const t2 = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (const i of Object.values(this.componentStore))
      t2.push(...i.getDrawableElements());
    return t2;
  }
}, g(st, "Orchestrator"), st);
var nt;
var Vi = (nt = class {
  static build(t2, i, s, n) {
    return new Mi(t2, i, s, n).getDrawableElement();
  }
}, g(nt, "XYChartBuilder"), nt);
var ot = 0;
var Gt;
var rt = Tt();
var ht = Rt();
var A = Dt();
var Ct = ht.plotColorPalette.split(",").map((e) => e.trim());
var gt = false;
var kt = false;
function Rt() {
  const e = nb(), t2 = oe();
  return gc(e.xyChart, t2.themeVariables.xyChart);
}
g(Rt, "getChartDefaultThemeConfig");
function Tt() {
  const e = oe();
  return gc(
    Cf.xyChart,
    e.xyChart
  );
}
g(Tt, "getChartDefaultConfig");
function Dt() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: 1 / 0,
      max: -1 / 0
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
g(Dt, "getChartDefaultData");
function xt(e) {
  const t2 = oe();
  return Er(e.trim(), t2);
}
g(xt, "textSanitizer");
function jt(e) {
  Gt = e;
}
g(jt, "setTmpSVGG");
function Qt(e) {
  e === "horizontal" ? rt.chartOrientation = "horizontal" : rt.chartOrientation = "vertical";
}
g(Qt, "setOrientation");
function Kt(e) {
  A.xAxis.title = xt(e.text);
}
g(Kt, "setXAxisTitle");
function vt(e, t2) {
  A.xAxis = { type: "linear", title: A.xAxis.title, min: e, max: t2 }, gt = true;
}
g(vt, "setXAxisRangeData");
function Zt(e) {
  A.xAxis = {
    type: "band",
    title: A.xAxis.title,
    categories: e.map((t2) => xt(t2.text))
  }, gt = true;
}
g(Zt, "setXAxisBand");
function Jt(e) {
  A.yAxis.title = xt(e.text);
}
g(Jt, "setYAxisTitle");
function ti(e, t2) {
  A.yAxis = { type: "linear", title: A.yAxis.title, min: e, max: t2 }, kt = true;
}
g(ti, "setYAxisRangeData");
function ii(e) {
  const t2 = Math.min(...e), i = Math.max(...e), s = G(A.yAxis) ? A.yAxis.min : 1 / 0, n = G(A.yAxis) ? A.yAxis.max : -1 / 0;
  A.yAxis = {
    type: "linear",
    title: A.yAxis.title,
    min: Math.min(s, t2),
    max: Math.max(n, i)
  };
}
g(ii, "setYAxisRangeFromPlotData");
function Pt(e) {
  let t2 = [];
  if (e.length === 0)
    return t2;
  if (!gt) {
    const i = G(A.xAxis) ? A.xAxis.min : 1 / 0, s = G(A.xAxis) ? A.xAxis.max : -1 / 0;
    vt(Math.min(i, 1), Math.max(s, e.length));
  }
  if (kt || ii(e), _t(A.xAxis) && (t2 = A.xAxis.categories.map((i, s) => [i, e[s]])), G(A.xAxis)) {
    const i = A.xAxis.min, s = A.xAxis.max, n = (s - i) / (e.length - 1), r = [];
    for (let g2 = i; g2 <= s; g2 += n)
      r.push(`${g2}`);
    t2 = r.map((g2, m) => [g2, e[m]]);
  }
  return t2;
}
g(Pt, "transformDataWithoutCategory");
function Lt(e) {
  return Ct[e === 0 ? 0 : e % Ct.length];
}
g(Lt, "getPlotColorFromPalette");
function ei(e, t2) {
  const i = Pt(t2);
  A.plots.push({
    type: "line",
    strokeFill: Lt(ot),
    strokeWidth: 2,
    data: i
  }), ot++;
}
g(ei, "setLineData");
function si(e, t2) {
  const i = Pt(t2);
  A.plots.push({
    type: "bar",
    fill: Lt(ot),
    data: i
  }), ot++;
}
g(si, "setBarData");
function ni() {
  if (A.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return A.title = Nb(), Vi.build(rt, A, ht, Gt);
}
g(ni, "getDrawableElem");
function ai() {
  return ht;
}
g(ai, "getChartThemeConfig");
function oi() {
  return rt;
}
g(oi, "getChartConfig");
function ri() {
  return A;
}
g(ri, "getXYChartData");
var Bi = g(function() {
  Fb(), ot = 0, rt = Tt(), A = Dt(), ht = Rt(), Ct = ht.plotColorPalette.split(",").map((e) => e.trim()), gt = false, kt = false;
}, "clear");
var Wi = {
  getDrawableElem: ni,
  clear: Bi,
  setAccTitle: Ob,
  getAccTitle: Db,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  getAccDescription: Rb,
  setAccDescription: Ib,
  setOrientation: Qt,
  setXAxisTitle: Kt,
  setXAxisRangeData: vt,
  setXAxisBand: Zt,
  setYAxisTitle: Jt,
  setYAxisRangeData: ti,
  setLineData: ei,
  setBarData: si,
  setTmpSVGG: jt,
  getChartThemeConfig: ai,
  getChartConfig: oi,
  getXYChartData: ri
};
var zi = g((e, t2, i, s) => {
  const n = s.db, r = n.getChartThemeConfig(), g2 = n.getChartConfig(), m = n.getXYChartData().plots[0].data.map((y) => y[1]);
  function p(y) {
    return y === "top" ? "text-before-edge" : "middle";
  }
  g(p, "getDominantBaseLine");
  function k(y) {
    return y === "left" ? "start" : y === "right" ? "end" : "middle";
  }
  g(k, "getTextAnchor");
  function v(y) {
    return `translate(${y.x}, ${y.y}) rotate(${y.rotation || 0})`;
  }
  g(v, "getTextTransformation"), N.debug(`Rendering xychart chart
` + e);
  const C = XB(t2), b = C.append("g").attr("class", "main"), E = b.append("rect").attr("width", g2.width).attr("height", g2.height).attr("class", "background");
  $f(C, g2.height, g2.width, true), C.attr("viewBox", `0 0 ${g2.width} ${g2.height}`), E.attr("fill", r.backgroundColor), n.setTmpSVGG(C.append("g").attr("class", "mermaid-tmp-group"));
  const D = n.getDrawableElem(), P = {};
  function I(y) {
    let _ = b, c = "";
    for (const [W] of y.entries()) {
      let z = b;
      W > 0 && P[c] && (z = P[c]), c += y[W], _ = P[c], _ || (_ = P[c] = z.append("g").attr("class", y[W]));
    }
    return _;
  }
  g(I, "getGroup");
  for (const y of D) {
    if (y.data.length === 0)
      continue;
    const _ = I(y.groupTexts);
    switch (y.type) {
      case "rect":
        if (_.selectAll("rect").data(y.data).enter().append("rect").attr("x", (c) => c.x).attr("y", (c) => c.y).attr("width", (c) => c.width).attr("height", (c) => c.height).attr("fill", (c) => c.fill).attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth), g2.showDataLabel)
          if (g2.chartOrientation === "horizontal") {
            let c = function(l, L) {
              const { data: S, label: R } = l;
              return L * R.length * W <= S.width - 10;
            };
            g(c, "fitsHorizontally");
            const W = 0.7, z = y.data.map((l, L) => ({ data: l, label: m[L].toString() })).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
              const { data: L } = l;
              let S = L.height * 0.7;
              for (; !c(l, S) && S > 0; )
                S -= 1;
              return S;
            }), X = Math.floor(Math.min(...U));
            _.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width - 10).attr("y", (l) => l.data.y + l.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
          } else {
            let c = function(l, L, S) {
              const { data: R, label: $ } = l, N2 = L * $.length * 0.7, F = R.x + R.width / 2, h2 = F - N2 / 2, u = F + N2 / 2, x = h2 >= R.x && u <= R.x + R.width, d = R.y + S + L <= R.y + R.height;
              return x && d;
            };
            g(c, "fitsInBar");
            const W = 10, z = y.data.map((l, L) => ({ data: l, label: m[L].toString() })).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
              const { data: L, label: S } = l;
              let R = L.width / (S.length * 0.7);
              for (; !c(l, R, W) && R > 0; )
                R -= 1;
              return R;
            }), X = Math.floor(Math.min(...U));
            _.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width / 2).attr("y", (l) => l.data.y + W).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
          }
        break;
      case "text":
        _.selectAll("text").data(y.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (c) => c.fill).attr("font-size", (c) => c.fontSize).attr("dominant-baseline", (c) => p(c.verticalPos)).attr("text-anchor", (c) => k(c.horizontalPos)).attr("transform", (c) => v(c)).text((c) => c.text);
        break;
      case "path":
        _.selectAll("path").data(y.data).enter().append("path").attr("d", (c) => c.path).attr("fill", (c) => c.fill ? c.fill : "none").attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth);
        break;
    }
  }
}, "draw");
var Fi = {
  draw: zi
};
var Hi = {
  parser: Ti,
  db: Wi,
  renderer: Fi
};
export {
  Hi as diagram
};
//# sourceMappingURL=xychartDiagram-H2YORKM3-DbPCi76Q-7CZEOXQJ.js.map
