import {
  L
} from "./chunk-OHTV2T7H.js";
import {
  l
} from "./chunk-4WOSXGHD.js";
import {
  t
} from "./chunk-4B6V3DTX.js";
import {
  a
} from "./chunk-ZHTCZNWP.js";
import "./chunk-D5X4WG6P.js";
import {
  $f,
  Ae,
  Dt,
  Eg,
  Er,
  Fb,
  Gl,
  Mf,
  N,
  Nr,
  Ti,
  Z1,
  _C,
  bs,
  cn,
  dr,
  dt,
  g,
  gt,
  im,
  oe
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/blockDiagram-6J76NXCF-u4N2vHGm.js
var yt = function() {
  var e = g(function(D, y, g2, f) {
    for (g2 = g2 || {}, f = D.length; f--; g2[D[f]] = y) ;
    return g2;
  }, "o"), t2 = [1, 7], s = [1, 13], n = [1, 14], i = [1, 15], a2 = [1, 19], r = [1, 16], l2 = [1, 17], c = [1, 18], u = [8, 30], h = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47], x = [1, 23], w = [1, 24], b = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47], S = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47], E = [1, 49], k = {
    trace: g(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, block: 31, NODE_ID: 32, nodeShapeNLabel: 33, dirList: 34, DIR: 35, NODE_DSTART: 36, NODE_DEND: 37, BLOCK_ARROW_START: 38, BLOCK_ARROW_END: 39, classDef: 40, CLASSDEF_ID: 41, CLASSDEF_STYLEOPTS: 42, DEFAULT: 43, class: 44, CLASSENTITY_IDS: 45, STYLECLASS: 46, style: 47, STYLE_ENTITY_IDS: 48, STYLE_DEFINITION_DATA: 49, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACELINE", 5: "NL", 7: "SPACE", 8: "EOF", 10: "BLOCK_DIAGRAM_KEY", 15: "LINK", 16: "START_LINK", 17: "LINK_LABEL", 18: "STR", 21: "SPACE_BLOCK", 27: "SIZE", 28: "COLUMNS", 29: "id-block", 30: "end", 31: "block", 32: "NODE_ID", 35: "DIR", 36: "NODE_DSTART", 37: "NODE_DEND", 38: "BLOCK_ARROW_START", 39: "BLOCK_ARROW_END", 40: "classDef", 41: "CLASSDEF_ID", 42: "CLASSDEF_STYLEOPTS", 43: "DEFAULT", 44: "class", 45: "CLASSENTITY_IDS", 46: "STYLECLASS", 47: "style", 48: "STYLE_ENTITY_IDS", 49: "STYLE_DEFINITION_DATA" },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [34, 1], [34, 2], [33, 3], [33, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: g(function(y, g2, f, m, v, o, W) {
      var p = o.length - 1;
      switch (v) {
        case 4:
          m.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          m.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          m.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          m.getLogger().debug("Rule: hierarchy: ", o[p - 1]), m.setHierarchy(o[p - 1]);
          break;
        case 8:
          m.getLogger().debug("Stop NL ");
          break;
        case 9:
          m.getLogger().debug("Stop EOF ");
          break;
        case 10:
          m.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          m.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          m.getLogger().debug("Rule: statement: ", o[p]), typeof o[p].length == "number" ? this.$ = o[p] : this.$ = [o[p]];
          break;
        case 13:
          m.getLogger().debug("Rule: statement #2: ", o[p - 1]), this.$ = [o[p - 1]].concat(o[p]);
          break;
        case 14:
          m.getLogger().debug("Rule: link: ", o[p], y), this.$ = { edgeTypeStr: o[p], label: "" };
          break;
        case 15:
          m.getLogger().debug("Rule: LABEL link: ", o[p - 3], o[p - 1], o[p]), this.$ = { edgeTypeStr: o[p], label: o[p - 1] };
          break;
        case 18:
          const I = parseInt(o[p]), Z = m.generateId();
          this.$ = { id: Z, type: "space", label: "", width: I, children: [] };
          break;
        case 23:
          m.getLogger().debug("Rule: (nodeStatement link node) ", o[p - 2], o[p - 1], o[p], " typestr: ", o[p - 1].edgeTypeStr);
          const V = m.edgeStrToEdgeData(o[p - 1].edgeTypeStr);
          this.$ = [
            { id: o[p - 2].id, label: o[p - 2].label, type: o[p - 2].type, directions: o[p - 2].directions },
            { id: o[p - 2].id + "-" + o[p].id, start: o[p - 2].id, end: o[p].id, label: o[p - 1].label, type: "edge", directions: o[p].directions, arrowTypeEnd: V, arrowTypeStart: "arrow_open" },
            { id: o[p].id, label: o[p].label, type: m.typeStr2Type(o[p].typeStr), directions: o[p].directions }
          ];
          break;
        case 24:
          m.getLogger().debug("Rule: nodeStatement (abc88 node size) ", o[p - 1], o[p]), this.$ = { id: o[p - 1].id, label: o[p - 1].label, type: m.typeStr2Type(o[p - 1].typeStr), directions: o[p - 1].directions, widthInColumns: parseInt(o[p], 10) };
          break;
        case 25:
          m.getLogger().debug("Rule: nodeStatement (node) ", o[p]), this.$ = { id: o[p].id, label: o[p].label, type: m.typeStr2Type(o[p].typeStr), directions: o[p].directions, widthInColumns: 1 };
          break;
        case 26:
          m.getLogger().debug("APA123", this ? this : "na"), m.getLogger().debug("COLUMNS: ", o[p]), this.$ = { type: "column-setting", columns: o[p] === "auto" ? -1 : parseInt(o[p]) };
          break;
        case 27:
          m.getLogger().debug("Rule: id-block statement : ", o[p - 2], o[p - 1]), m.generateId(), this.$ = { ...o[p - 2], type: "composite", children: o[p - 1] };
          break;
        case 28:
          m.getLogger().debug("Rule: blockStatement : ", o[p - 2], o[p - 1], o[p]);
          const at = m.generateId();
          this.$ = { id: at, type: "composite", label: "", children: o[p - 1] };
          break;
        case 29:
          m.getLogger().debug("Rule: node (NODE_ID separator): ", o[p]), this.$ = { id: o[p] };
          break;
        case 30:
          m.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", o[p - 1], o[p]), this.$ = { id: o[p - 1], label: o[p].label, typeStr: o[p].typeStr, directions: o[p].directions };
          break;
        case 31:
          m.getLogger().debug("Rule: dirList: ", o[p]), this.$ = [o[p]];
          break;
        case 32:
          m.getLogger().debug("Rule: dirList: ", o[p - 1], o[p]), this.$ = [o[p - 1]].concat(o[p]);
          break;
        case 33:
          m.getLogger().debug("Rule: nodeShapeNLabel: ", o[p - 2], o[p - 1], o[p]), this.$ = { typeStr: o[p - 2] + o[p], label: o[p - 1] };
          break;
        case 34:
          m.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", o[p - 3], o[p - 2], " #3:", o[p - 1], o[p]), this.$ = { typeStr: o[p - 3] + o[p], label: o[p - 2], directions: o[p - 1] };
          break;
        case 35:
        case 36:
          this.$ = { type: "classDef", id: o[p - 1].trim(), css: o[p].trim() };
          break;
        case 37:
          this.$ = { type: "applyClass", id: o[p - 1].trim(), styleClass: o[p].trim() };
          break;
        case 38:
          this.$ = { type: "applyStyles", id: o[p - 1].trim(), stylesStr: o[p].trim() };
          break;
      }
    }, "anonymous"),
    table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 11: 3, 13: 4, 19: 5, 20: 6, 21: t2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: s, 29: n, 31: i, 32: a2, 40: r, 44: l2, 47: c }, { 8: [1, 20] }, e(u, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 21: t2, 28: s, 29: n, 31: i, 32: a2, 40: r, 44: l2, 47: c }), e(h, [2, 16], { 14: 22, 15: x, 16: w }), e(h, [2, 17]), e(h, [2, 18]), e(h, [2, 19]), e(h, [2, 20]), e(h, [2, 21]), e(h, [2, 22]), e(b, [2, 25], { 27: [1, 25] }), e(h, [2, 26]), { 19: 26, 26: 12, 32: a2 }, { 11: 27, 13: 4, 19: 5, 20: 6, 21: t2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: s, 29: n, 31: i, 32: a2, 40: r, 44: l2, 47: c }, { 41: [1, 28], 43: [1, 29] }, { 45: [1, 30] }, { 48: [1, 31] }, e(S, [2, 29], { 33: 32, 36: [1, 33], 38: [1, 34] }), { 1: [2, 7] }, e(u, [2, 13]), { 26: 35, 32: a2 }, { 32: [2, 14] }, { 17: [1, 36] }, e(b, [2, 24]), { 11: 37, 13: 4, 14: 22, 15: x, 16: w, 19: 5, 20: 6, 21: t2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: s, 29: n, 31: i, 32: a2, 40: r, 44: l2, 47: c }, { 30: [1, 38] }, { 42: [1, 39] }, { 42: [1, 40] }, { 46: [1, 41] }, { 49: [1, 42] }, e(S, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, e(b, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, e(h, [2, 28]), e(h, [2, 35]), e(h, [2, 36]), e(h, [2, 37]), e(h, [2, 38]), { 37: [1, 47] }, { 34: 48, 35: E }, { 15: [1, 50] }, e(h, [2, 27]), e(S, [2, 33]), { 39: [1, 51] }, { 34: 52, 35: E, 39: [2, 31] }, { 32: [2, 15] }, e(S, [2, 34]), { 39: [2, 32] }],
    defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
    parseError: g(function(y, g2) {
      if (g2.recoverable)
        this.trace(y);
      else {
        var f = new Error(y);
        throw f.hash = g2, f;
      }
    }, "parseError"),
    parse: g(function(y) {
      var g2 = this, f = [0], m = [], v = [null], o = [], W = this.table, p = "", I = 0, Z = 0, V = 2, at = 1, ne = o.slice.call(arguments, 1), z = Object.create(this.lexer), q = { yy: {} };
      for (var gt2 in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, gt2) && (q.yy[gt2] = this.yy[gt2]);
      z.setInput(y, q.yy), q.yy.lexer = z, q.yy.parser = this, typeof z.yylloc > "u" && (z.yylloc = {});
      var ut = z.yylloc;
      o.push(ut);
      var le = z.options && z.options.ranges;
      typeof q.yy.parseError == "function" ? this.parseError = q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ce(P) {
        f.length = f.length - 2 * P, v.length = v.length - P, o.length = o.length - P;
      }
      g(ce, "popStack");
      function Dt2() {
        var P;
        return P = m.pop() || z.lex() || at, typeof P != "number" && (P instanceof Array && (m = P, P = m.pop()), P = g2.symbols_[P] || P), P;
      }
      g(Dt2, "lex");
      for (var F, J, H, pt, Q = {}, st, G, Nt, it; ; ) {
        if (J = f[f.length - 1], this.defaultActions[J] ? H = this.defaultActions[J] : ((F === null || typeof F > "u") && (F = Dt2()), H = W[J] && W[J][F]), typeof H > "u" || !H.length || !H[0]) {
          var ft = "";
          it = [];
          for (st in W[J])
            this.terminals_[st] && st > V && it.push("'" + this.terminals_[st] + "'");
          z.showPosition ? ft = "Parse error on line " + (I + 1) + `:
` + z.showPosition() + `
Expecting ` + it.join(", ") + ", got '" + (this.terminals_[F] || F) + "'" : ft = "Parse error on line " + (I + 1) + ": Unexpected " + (F == at ? "end of input" : "'" + (this.terminals_[F] || F) + "'"), this.parseError(ft, {
            text: z.match,
            token: this.terminals_[F] || F,
            line: z.yylineno,
            loc: ut,
            expected: it
          });
        }
        if (H[0] instanceof Array && H.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + J + ", token: " + F);
        switch (H[0]) {
          case 1:
            f.push(F), v.push(z.yytext), o.push(z.yylloc), f.push(H[1]), F = null, Z = z.yyleng, p = z.yytext, I = z.yylineno, ut = z.yylloc;
            break;
          case 2:
            if (G = this.productions_[H[1]][1], Q.$ = v[v.length - G], Q._$ = {
              first_line: o[o.length - (G || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (G || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, le && (Q._$.range = [
              o[o.length - (G || 1)].range[0],
              o[o.length - 1].range[1]
            ]), pt = this.performAction.apply(Q, [
              p,
              Z,
              I,
              q.yy,
              H[1],
              v,
              o
            ].concat(ne)), typeof pt < "u")
              return pt;
            G && (f = f.slice(0, -1 * G * 2), v = v.slice(0, -1 * G), o = o.slice(0, -1 * G)), f.push(this.productions_[H[1]][0]), v.push(Q.$), o.push(Q._$), Nt = W[f[f.length - 2]][f[f.length - 1]], f.push(Nt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, B = function() {
    var D = {
      EOF: 1,
      parseError: g(function(g2, f) {
        if (this.yy.parser)
          this.yy.parser.parseError(g2, f);
        else
          throw new Error(g2);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: g(function(y, g2) {
        return this.yy = g2 || this.yy || {}, this._input = y, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: g(function() {
        var y = this._input[0];
        this.yytext += y, this.yyleng++, this.offset++, this.match += y, this.matched += y;
        var g2 = y.match(/(?:\r\n?|\n).*/g);
        return g2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), y;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: g(function(y) {
        var g2 = y.length, f = y.split(/(?:\r\n?|\n)/g);
        this._input = y + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g2), this.offset -= g2;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), f.length - 1 && (this.yylineno -= f.length - 1);
        var v = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: f ? (f.length === m.length ? this.yylloc.first_column : 0) + m[m.length - f.length].length - f[0].length : this.yylloc.first_column - g2
        }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - g2]), this.yyleng = this.yytext.length, this;
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
      less: g(function(y) {
        this.unput(this.match.slice(y));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: g(function() {
        var y = this.matched.substr(0, this.matched.length - this.match.length);
        return (y.length > 20 ? "..." : "") + y.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: g(function() {
        var y = this.match;
        return y.length < 20 && (y += this._input.substr(0, 20 - y.length)), (y.substr(0, 20) + (y.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: g(function() {
        var y = this.pastInput(), g2 = new Array(y.length + 1).join("-");
        return y + this.upcomingInput() + `
` + g2 + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: g(function(y, g2) {
        var f, m, v;
        if (this.options.backtrack_lexer && (v = {
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
        }, this.options.ranges && (v.yylloc.range = this.yylloc.range.slice(0))), m = y[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + y[0].length
        }, this.yytext += y[0], this.match += y[0], this.matches = y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(y[0].length), this.matched += y[0], f = this.performAction.call(this, this.yy, this, g2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), f)
          return f;
        if (this._backtrack) {
          for (var o in v)
            this[o] = v[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: g(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var y, g2, f, m;
        this._more || (this.yytext = "", this.match = "");
        for (var v = this._currentRules(), o = 0; o < v.length; o++)
          if (f = this._input.match(this.rules[v[o]]), f && (!g2 || f[0].length > g2[0].length)) {
            if (g2 = f, m = o, this.options.backtrack_lexer) {
              if (y = this.test_match(f, v[o]), y !== false)
                return y;
              if (this._backtrack) {
                g2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return g2 ? (y = this.test_match(g2, v[m]), y !== false ? y : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: g(function() {
        var g2 = this.next();
        return g2 || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: g(function(g2) {
        this.conditionStack.push(g2);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: g(function() {
        var g2 = this.conditionStack.length - 1;
        return g2 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: g(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: g(function(g2) {
        return g2 = this.conditionStack.length - 1 - Math.abs(g2 || 0), g2 >= 0 ? this.conditionStack[g2] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: g(function(g2) {
        this.begin(g2);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: g(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: g(function(g2, f, m, v) {
        switch (m) {
          case 0:
            return 10;
          case 1:
            return g2.getLogger().debug("Found space-block"), 31;
          case 2:
            return g2.getLogger().debug("Found nl-block"), 31;
          case 3:
            return g2.getLogger().debug("Found space-block"), 29;
          case 4:
            g2.getLogger().debug(".", f.yytext);
            break;
          case 5:
            g2.getLogger().debug("_", f.yytext);
            break;
          case 6:
            return 5;
          case 7:
            return f.yytext = -1, 28;
          case 8:
            return f.yytext = f.yytext.replace(/columns\s+/, ""), g2.getLogger().debug("COLUMNS (LEX)", f.yytext), 28;
          case 9:
            this.pushState("md_string");
            break;
          case 10:
            return "MD_STR";
          case 11:
            this.popState();
            break;
          case 12:
            this.pushState("string");
            break;
          case 13:
            g2.getLogger().debug("LEX: POPPING STR:", f.yytext), this.popState();
            break;
          case 14:
            return g2.getLogger().debug("LEX: STR end:", f.yytext), "STR";
          case 15:
            return f.yytext = f.yytext.replace(/space\:/, ""), g2.getLogger().debug("SPACE NUM (LEX)", f.yytext), 21;
          case 16:
            return f.yytext = "1", g2.getLogger().debug("COLUMNS (LEX)", f.yytext), 21;
          case 17:
            return 43;
          case 18:
            return "LINKSTYLE";
          case 19:
            return "INTERPOLATE";
          case 20:
            return this.pushState("CLASSDEF"), 40;
          case 21:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 22:
            return this.popState(), this.pushState("CLASSDEFID"), 41;
          case 23:
            return this.popState(), 42;
          case 24:
            return this.pushState("CLASS"), 44;
          case 25:
            return this.popState(), this.pushState("CLASS_STYLE"), 45;
          case 26:
            return this.popState(), 46;
          case 27:
            return this.pushState("STYLE_STMNT"), 47;
          case 28:
            return this.popState(), this.pushState("STYLE_DEFINITION"), 48;
          case 29:
            return this.popState(), 49;
          case 30:
            return this.pushState("acc_title"), "acc_title";
          case 31:
            return this.popState(), "acc_title_value";
          case 32:
            return this.pushState("acc_descr"), "acc_descr";
          case 33:
            return this.popState(), "acc_descr_value";
          case 34:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            this.popState();
            break;
          case 36:
            return "acc_descr_multiline_value";
          case 37:
            return 30;
          case 38:
            return this.popState(), g2.getLogger().debug("Lex: (("), "NODE_DEND";
          case 39:
            return this.popState(), g2.getLogger().debug("Lex: (("), "NODE_DEND";
          case 40:
            return this.popState(), g2.getLogger().debug("Lex: ))"), "NODE_DEND";
          case 41:
            return this.popState(), g2.getLogger().debug("Lex: (("), "NODE_DEND";
          case 42:
            return this.popState(), g2.getLogger().debug("Lex: (("), "NODE_DEND";
          case 43:
            return this.popState(), g2.getLogger().debug("Lex: (-"), "NODE_DEND";
          case 44:
            return this.popState(), g2.getLogger().debug("Lex: -)"), "NODE_DEND";
          case 45:
            return this.popState(), g2.getLogger().debug("Lex: (("), "NODE_DEND";
          case 46:
            return this.popState(), g2.getLogger().debug("Lex: ]]"), "NODE_DEND";
          case 47:
            return this.popState(), g2.getLogger().debug("Lex: ("), "NODE_DEND";
          case 48:
            return this.popState(), g2.getLogger().debug("Lex: ])"), "NODE_DEND";
          case 49:
            return this.popState(), g2.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 50:
            return this.popState(), g2.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 51:
            return this.popState(), g2.getLogger().debug("Lex: )]"), "NODE_DEND";
          case 52:
            return this.popState(), g2.getLogger().debug("Lex: )"), "NODE_DEND";
          case 53:
            return this.popState(), g2.getLogger().debug("Lex: ]>"), "NODE_DEND";
          case 54:
            return this.popState(), g2.getLogger().debug("Lex: ]"), "NODE_DEND";
          case 55:
            return g2.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 36;
          case 56:
            return g2.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 36;
          case 57:
            return g2.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 36;
          case 58:
            return g2.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 59:
            return g2.getLogger().debug("Lex: ((("), this.pushState("NODE"), 36;
          case 60:
            return g2.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 61:
            return g2.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 62:
            return g2.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 63:
            return g2.getLogger().debug("Lexc: >"), this.pushState("NODE"), 36;
          case 64:
            return g2.getLogger().debug("Lexa: (["), this.pushState("NODE"), 36;
          case 65:
            return g2.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 66:
            return this.pushState("NODE"), 36;
          case 67:
            return this.pushState("NODE"), 36;
          case 68:
            return this.pushState("NODE"), 36;
          case 69:
            return this.pushState("NODE"), 36;
          case 70:
            return this.pushState("NODE"), 36;
          case 71:
            return this.pushState("NODE"), 36;
          case 72:
            return this.pushState("NODE"), 36;
          case 73:
            return g2.getLogger().debug("Lexa: ["), this.pushState("NODE"), 36;
          case 74:
            return this.pushState("BLOCK_ARROW"), g2.getLogger().debug("LEX ARR START"), 38;
          case 75:
            return g2.getLogger().debug("Lex: NODE_ID", f.yytext), 32;
          case 76:
            return g2.getLogger().debug("Lex: EOF", f.yytext), 8;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            this.pushState("md_string");
            break;
          case 79:
            return "NODE_DESCR";
          case 80:
            this.popState();
            break;
          case 81:
            g2.getLogger().debug("Lex: Starting string"), this.pushState("string");
            break;
          case 82:
            g2.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
            break;
          case 83:
            return g2.getLogger().debug("LEX: NODE_DESCR:", f.yytext), "NODE_DESCR";
          case 84:
            g2.getLogger().debug("LEX POPPING"), this.popState();
            break;
          case 85:
            g2.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
            break;
          case 86:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (right): dir:", f.yytext), "DIR";
          case 87:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (left):", f.yytext), "DIR";
          case 88:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (x):", f.yytext), "DIR";
          case 89:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (y):", f.yytext), "DIR";
          case 90:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (up):", f.yytext), "DIR";
          case 91:
            return f.yytext = f.yytext.replace(/^,\s*/, ""), g2.getLogger().debug("Lex (down):", f.yytext), "DIR";
          case 92:
            return f.yytext = "]>", g2.getLogger().debug("Lex (ARROW_DIR end):", f.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
          case 93:
            return g2.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
          case 94:
            return g2.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 95:
            return g2.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 96:
            return g2.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 97:
            return g2.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 98:
            return g2.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 99:
            return g2.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
          case 100:
            this.pushState("md_string");
            break;
          case 101:
            return g2.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
          case 102:
            return this.popState(), g2.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
          case 103:
            return this.popState(), g2.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 104:
            return this.popState(), g2.getLogger().debug("Lex: LINK", f.yytext), 15;
          case 105:
            return g2.getLogger().debug("Lex: COLON", f.yytext), f.yytext = f.yytext.slice(1), 27;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block\s+)/, /^(?:block\n+)/, /^(?:block:)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: { STYLE_DEFINITION: { rules: [29], inclusive: false }, STYLE_STMNT: { rules: [28], inclusive: false }, CLASSDEFID: { rules: [23], inclusive: false }, CLASSDEF: { rules: [21, 22], inclusive: false }, CLASS_STYLE: { rules: [26], inclusive: false }, CLASS: { rules: [25], inclusive: false }, LLABEL: { rules: [100, 101, 102, 103, 104], inclusive: false }, ARROW_DIR: { rules: [86, 87, 88, 89, 90, 91, 92], inclusive: false }, BLOCK_ARROW: { rules: [77, 82, 85], inclusive: false }, NODE: { rules: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81], inclusive: false }, md_string: { rules: [10, 11, 79, 80], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [13, 14, 83, 84], inclusive: false }, acc_descr_multiline: { rules: [35, 36], inclusive: false }, acc_descr: { rules: [33], inclusive: false }, acc_title: { rules: [31], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105], inclusive: true } }
    };
    return D;
  }();
  k.lexer = B;
  function _() {
    this.yy = {};
  }
  return g(_, "Parser"), _.prototype = k, k.Parser = _, new _();
}();
yt.parser = yt;
var ve = yt;
var X = /* @__PURE__ */ new Map();
var St = [];
var bt = /* @__PURE__ */ new Map();
var Bt = "color";
var Ct = "fill";
var Ee = "bgFill";
var Pt = ",";
var _e = gt();
var ct = /* @__PURE__ */ new Map();
var De = g((e) => Ti.sanitizeText(e, _e), "sanitizeText");
var Ne = g(function(e, t2 = "") {
  let s = ct.get(e);
  s || (s = { id: e, styles: [], textStyles: [] }, ct.set(e, s)), t2 == null ? void 0 : t2.split(Pt).forEach((n) => {
    const i = n.replace(/([^;]*);/, "$1").trim();
    if (RegExp(Bt).exec(n)) {
      const r = i.replace(Ct, Ee).replace(Bt, Ct);
      s.textStyles.push(r);
    }
    s.styles.push(i);
  });
}, "addStyleClass");
var Te = g(function(e, t2 = "") {
  const s = X.get(e);
  t2 != null && (s.styles = t2.split(Pt));
}, "addStyle2Node");
var Be = g(function(e, t2) {
  e.split(",").forEach(function(s) {
    let n = X.get(s);
    if (n === void 0) {
      const i = s.trim();
      n = { id: i, type: "na", children: [] }, X.set(i, n);
    }
    n.classes || (n.classes = []), n.classes.push(t2);
  });
}, "setCssClass");
var Yt = g((e, t2) => {
  const s = e.flat(), n = [];
  for (const i of s) {
    if (i.label && (i.label = De(i.label)), i.type === "classDef") {
      Ne(i.id, i.css);
      continue;
    }
    if (i.type === "applyClass") {
      Be(i.id, (i == null ? void 0 : i.styleClass) ?? "");
      continue;
    }
    if (i.type === "applyStyles") {
      (i == null ? void 0 : i.stylesStr) && Te(i.id, i == null ? void 0 : i.stylesStr);
      continue;
    }
    if (i.type === "column-setting")
      t2.columns = i.columns ?? -1;
    else if (i.type === "edge") {
      const a2 = (bt.get(i.id) ?? 0) + 1;
      bt.set(i.id, a2), i.id = a2 + "-" + i.id, St.push(i);
    } else {
      i.label || (i.type === "composite" ? i.label = "" : i.label = i.id);
      const a2 = X.get(i.id);
      if (a2 === void 0 ? X.set(i.id, i) : (i.type !== "na" && (a2.type = i.type), i.label !== i.id && (a2.label = i.label)), i.children && Yt(i.children, i), i.type === "space") {
        const r = i.width ?? 1;
        for (let l2 = 0; l2 < r; l2++) {
          const c = a(i);
          c.id = c.id + "-" + l2, X.set(c.id, c), n.push(c);
        }
      } else a2 === void 0 && n.push(i);
    }
  }
  t2.children = n;
}, "populateBlockDatabase");
var kt = [];
var et = { id: "root", type: "composite", children: [], columns: -1 };
var Ce = g(() => {
  N.debug("Clear called"), Fb(), et = { id: "root", type: "composite", children: [], columns: -1 }, X = /* @__PURE__ */ new Map([["root", et]]), kt = [], ct = /* @__PURE__ */ new Map(), St = [], bt = /* @__PURE__ */ new Map();
}, "clear");
function Ht(e) {
  switch (N.debug("typeStr2Type", e), e) {
    case "[]":
      return "square";
    case "()":
      return N.debug("we have a round"), "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
g(Ht, "typeStr2Type");
function Kt(e) {
  switch (N.debug("typeStr2Type", e), e) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
g(Kt, "edgeTypeStr2Type");
function Xt(e) {
  switch (e.trim()) {
    case "--x":
      return "arrow_cross";
    case "--o":
      return "arrow_circle";
    default:
      return "arrow_point";
  }
}
g(Xt, "edgeStrToEdgeData");
var It = 0;
var Ie = g(() => (It++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + It), "generateId");
var Oe = g((e) => {
  et.children = e, Yt(e, et), kt = et.children;
}, "setHierarchy");
var Re = g((e) => {
  const t2 = X.get(e);
  return t2 ? t2.columns ? t2.columns : t2.children ? t2.children.length : -1 : -1;
}, "getColumns");
var ze = g(() => [...X.values()], "getBlocksFlat");
var Ae2 = g(() => kt || [], "getBlocks");
var Me = g(() => St, "getEdges");
var Fe = g((e) => X.get(e), "getBlock");
var We = g((e) => {
  X.set(e.id, e);
}, "setBlock");
var Pe = g(() => N, "getLogger");
var Ye = g(function() {
  return ct;
}, "getClasses");
var He = {
  getConfig: g(() => oe().block, "getConfig"),
  typeStr2Type: Ht,
  edgeTypeStr2Type: Kt,
  edgeStrToEdgeData: Xt,
  getLogger: Pe,
  getBlocksFlat: ze,
  getBlocks: Ae2,
  getEdges: Me,
  setHierarchy: Oe,
  getBlock: Fe,
  setBlock: We,
  getColumns: Re,
  getClasses: Ye,
  clear: Ce,
  generateId: Ie
};
var Ke = He;
var nt = g((e, t2) => {
  const s = t, n = s(e, "r"), i = s(e, "g"), a2 = s(e, "b");
  return cn(n, i, a2, t2);
}, "fade");
var Xe = g((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${nt(e.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${nt(e.mainBkg, 0.5)};
    fill: ${nt(e.clusterBkg, 0.5)};
    stroke: ${nt(e.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${l()}
`, "getStyles");
var Ue = Xe;
var je = g((e, t2, s, n) => {
  t2.forEach((i) => {
    rr[i](e, s, n);
  });
}, "insertMarkers");
var Ve = g((e, t2, s) => {
  N.trace("Making markers for ", s), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-extensionStart").attr("class", "marker extension " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-extensionEnd").attr("class", "marker extension " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
var Ge = g((e, t2, s) => {
  e.append("defs").append("marker").attr("id", s + "_" + t2 + "-compositionStart").attr("class", "marker composition " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-compositionEnd").attr("class", "marker composition " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
var Ze = g((e, t2, s) => {
  e.append("defs").append("marker").attr("id", s + "_" + t2 + "-aggregationStart").attr("class", "marker aggregation " + t2).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-aggregationEnd").attr("class", "marker aggregation " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
var qe = g((e, t2, s) => {
  e.append("defs").append("marker").attr("id", s + "_" + t2 + "-dependencyStart").attr("class", "marker dependency " + t2).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-dependencyEnd").attr("class", "marker dependency " + t2).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
var Je = g((e, t2, s) => {
  e.append("defs").append("marker").attr("id", s + "_" + t2 + "-lollipopStart").attr("class", "marker lollipop " + t2).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", s + "_" + t2 + "-lollipopEnd").attr("class", "marker lollipop " + t2).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
var Qe = g((e, t2, s) => {
  e.append("marker").attr("id", s + "_" + t2 + "-pointEnd").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", s + "_" + t2 + "-pointStart").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
var $e = g((e, t2, s) => {
  e.append("marker").attr("id", s + "_" + t2 + "-circleEnd").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", s + "_" + t2 + "-circleStart").attr("class", "marker " + t2).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
var tr = g((e, t2, s) => {
  e.append("marker").attr("id", s + "_" + t2 + "-crossEnd").attr("class", "marker cross " + t2).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", s + "_" + t2 + "-crossStart").attr("class", "marker cross " + t2).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
var er = g((e, t2, s) => {
  e.append("defs").append("marker").attr("id", s + "_" + t2 + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var rr = {
  extension: Ve,
  composition: Ge,
  aggregation: Ze,
  dependency: qe,
  lollipop: Je,
  point: Qe,
  circle: $e,
  cross: tr,
  barb: er
};
var ar = je;
var _a, _b;
var C = ((_b = (_a = gt()) == null ? void 0 : _a.block) == null ? void 0 : _b.padding) ?? 8;
function Ut(e, t2) {
  if (e === 0 || !Number.isInteger(e))
    throw new Error("Columns must be an integer !== 0.");
  if (t2 < 0 || !Number.isInteger(t2))
    throw new Error("Position must be a non-negative integer." + t2);
  if (e < 0)
    return { px: t2, py: 0 };
  if (e === 1)
    return { px: 0, py: t2 };
  const s = t2 % e, n = Math.floor(t2 / e);
  return { px: s, py: n };
}
g(Ut, "calculateBlockPosition");
var sr = g((e) => {
  let t2 = 0, s = 0;
  for (const n of e.children) {
    const { width: i, height: a2, x: r, y: l2 } = n.size ?? { width: 0, height: 0, x: 0, y: 0 };
    N.debug(
      "getMaxChildSize abc95 child:",
      n.id,
      "width:",
      i,
      "height:",
      a2,
      "x:",
      r,
      "y:",
      l2,
      n.type
    ), n.type !== "space" && (i > t2 && (t2 = i / (e.widthInColumns ?? 1)), a2 > s && (s = a2));
  }
  return { width: t2, height: s };
}, "getMaxChildSize");
function ot(e, t2, s = 0, n = 0) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  N.debug(
    "setBlockSizes abc95 (start)",
    e.id,
    (_a2 = e == null ? void 0 : e.size) == null ? void 0 : _a2.x,
    "block width =",
    e == null ? void 0 : e.size,
    "siblingWidth",
    s
  ), ((_b2 = e == null ? void 0 : e.size) == null ? void 0 : _b2.width) || (e.size = {
    width: s,
    height: n,
    x: 0,
    y: 0
  });
  let i = 0, a2 = 0;
  if (((_c = e.children) == null ? void 0 : _c.length) > 0) {
    for (const b of e.children)
      ot(b, t2);
    const r = sr(e);
    i = r.width, a2 = r.height, N.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", i, a2);
    for (const b of e.children)
      b.size && (N.debug(
        `abc95 Setting size of children of ${e.id} id=${b.id} ${i} ${a2} ${JSON.stringify(b.size)}`
      ), b.size.width = i * (b.widthInColumns ?? 1) + C * ((b.widthInColumns ?? 1) - 1), b.size.height = a2, b.size.x = 0, b.size.y = 0, N.debug(
        `abc95 updating size of ${e.id} children child:${b.id} maxWidth:${i} maxHeight:${a2}`
      ));
    for (const b of e.children)
      ot(b, t2, i, a2);
    const l2 = e.columns ?? -1;
    let c = 0;
    for (const b of e.children)
      c += b.widthInColumns ?? 1;
    let u = e.children.length;
    l2 > 0 && l2 < c && (u = l2);
    const h = Math.ceil(c / u);
    let x = u * (i + C) + C, w = h * (a2 + C) + C;
    if (x < s) {
      N.debug(
        `Detected to small sibling: abc95 ${e.id} siblingWidth ${s} siblingHeight ${n} width ${x}`
      ), x = s, w = n;
      const b = (s - u * C - C) / u, S = (n - h * C - C) / h;
      N.debug("Size indata abc88", e.id, "childWidth", b, "maxWidth", i), N.debug("Size indata abc88", e.id, "childHeight", S, "maxHeight", a2), N.debug("Size indata abc88 xSize", u, "padding", C);
      for (const E of e.children)
        E.size && (E.size.width = b, E.size.height = S, E.size.x = 0, E.size.y = 0);
    }
    if (N.debug(
      `abc95 (finale calc) ${e.id} xSize ${u} ySize ${h} columns ${l2}${e.children.length} width=${Math.max(x, ((_d = e.size) == null ? void 0 : _d.width) || 0)}`
    ), x < (((_e2 = e == null ? void 0 : e.size) == null ? void 0 : _e2.width) || 0)) {
      x = ((_f = e == null ? void 0 : e.size) == null ? void 0 : _f.width) || 0;
      const b = l2 > 0 ? Math.min(e.children.length, l2) : e.children.length;
      if (b > 0) {
        const S = (x - b * C - C) / b;
        N.debug("abc95 (growing to fit) width", e.id, x, (_g = e.size) == null ? void 0 : _g.width, S);
        for (const E of e.children)
          E.size && (E.size.width = S);
      }
    }
    e.size = {
      width: x,
      height: w,
      x: 0,
      y: 0
    };
  }
  N.debug(
    "setBlockSizes abc94 (done)",
    e.id,
    (_h = e == null ? void 0 : e.size) == null ? void 0 : _h.x,
    (_i = e == null ? void 0 : e.size) == null ? void 0 : _i.width,
    (_j = e == null ? void 0 : e.size) == null ? void 0 : _j.y,
    (_k = e == null ? void 0 : e.size) == null ? void 0 : _k.height
  );
}
g(ot, "setBlockSizes");
function vt(e, t2) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  N.debug(
    `abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(_a2 = e == null ? void 0 : e.size) == null ? void 0 : _a2.x} y: ${(_b2 = e == null ? void 0 : e.size) == null ? void 0 : _b2.y} width: ${(_c = e == null ? void 0 : e.size) == null ? void 0 : _c.width}`
  );
  const s = e.columns ?? -1;
  if (N.debug("layoutBlocks columns abc95", e.id, "=>", s, e), e.children && // find max width of children
  e.children.length > 0) {
    const n = ((_e2 = (_d = e == null ? void 0 : e.children[0]) == null ? void 0 : _d.size) == null ? void 0 : _e2.width) ?? 0, i = e.children.length * n + (e.children.length - 1) * C;
    N.debug("widthOfChildren 88", i, "posX");
    let a2 = 0;
    N.debug("abc91 block?.size?.x", e.id, (_f = e == null ? void 0 : e.size) == null ? void 0 : _f.x);
    let r = ((_g = e == null ? void 0 : e.size) == null ? void 0 : _g.x) ? ((_h = e == null ? void 0 : e.size) == null ? void 0 : _h.x) + (-((_i = e == null ? void 0 : e.size) == null ? void 0 : _i.width) / 2 || 0) : -C, l2 = 0;
    for (const c of e.children) {
      const u = e;
      if (!c.size)
        continue;
      const { width: h, height: x } = c.size, { px: w, py: b } = Ut(s, a2);
      if (b != l2 && (l2 = b, r = ((_j = e == null ? void 0 : e.size) == null ? void 0 : _j.x) ? ((_k = e == null ? void 0 : e.size) == null ? void 0 : _k.x) + (-((_l = e == null ? void 0 : e.size) == null ? void 0 : _l.width) / 2 || 0) : -C, N.debug("New row in layout for block", e.id, " and child ", c.id, l2)), N.debug(
        `abc89 layout blocks (child) id: ${c.id} Pos: ${a2} (px, py) ${w},${b} (${(_m = u == null ? void 0 : u.size) == null ? void 0 : _m.x},${(_n = u == null ? void 0 : u.size) == null ? void 0 : _n.y}) parent: ${u.id} width: ${h}${C}`
      ), u.size) {
        const S = h / 2;
        c.size.x = r + C + S, N.debug(
          `abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${r} new startingPosX${c.size.x} ${S} padding=${C} width=${h} halfWidth=${S} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${h * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`
        ), r = c.size.x + S, c.size.y = u.size.y - u.size.height / 2 + b * (x + C) + x / 2 + C, N.debug(
          `abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${r}${C}${S}=>x:${c.size.x}y:${c.size.y}${c.widthInColumns}(width * (child?.w || 1)) / 2${h * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`
        );
      }
      c.children && vt(c), a2 += (c == null ? void 0 : c.widthInColumns) ?? 1, N.debug("abc88 columnsPos", c, a2);
    }
  }
  N.debug(
    `layout blocks (<==layoutBlocks) ${e.id} x: ${(_o = e == null ? void 0 : e.size) == null ? void 0 : _o.x} y: ${(_p = e == null ? void 0 : e.size) == null ? void 0 : _p.y} width: ${(_q = e == null ? void 0 : e.size) == null ? void 0 : _q.width}`
  );
}
g(vt, "layoutBlocks");
function Et(e, { minX: t2, minY: s, maxX: n, maxY: i } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (e.size && e.id !== "root") {
    const { x: a2, y: r, width: l2, height: c } = e.size;
    a2 - l2 / 2 < t2 && (t2 = a2 - l2 / 2), r - c / 2 < s && (s = r - c / 2), a2 + l2 / 2 > n && (n = a2 + l2 / 2), r + c / 2 > i && (i = r + c / 2);
  }
  if (e.children)
    for (const a2 of e.children)
      ({ minX: t2, minY: s, maxX: n, maxY: i } = Et(a2, { minX: t2, minY: s, maxX: n, maxY: i }));
  return { minX: t2, minY: s, maxX: n, maxY: i };
}
g(Et, "findBounds");
function jt(e) {
  const t2 = e.getBlock("root");
  if (!t2)
    return;
  ot(t2, e, 0, 0), vt(t2), N.debug("getBlocks", JSON.stringify(t2, null, 2));
  const { minX: s, minY: n, maxX: i, maxY: a2 } = Et(t2), r = a2 - n, l2 = i - s;
  return { x: s, y: n, width: l2, height: r };
}
g(jt, "layout");
function wt(e, t2) {
  t2 && e.attr("style", t2);
}
g(wt, "applyStyle");
function Vt(e) {
  const t2 = dt(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), s = t2.append("xhtml:div"), n = e.label, i = e.isNode ? "nodeLabel" : "edgeLabel", a2 = s.append("span");
  return a2.html(n), wt(a2, e.labelStyle), a2.attr("class", i), wt(s, e.labelStyle), s.style("display", "inline-block"), s.style("white-space", "nowrap"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), t2.node();
}
g(Vt, "addHtmlLabel");
var ir = g(async (e, t2, s, n) => {
  let i = e || "";
  if (typeof i == "object" && (i = i[0]), Dt(gt().flowchart.htmlLabels)) {
    i = i.replace(/\\n|\n/g, "<br />"), N.debug("vertexText" + i);
    const a2 = await im(Nr(i)), r = {
      isNode: n,
      label: a2,
      labelStyle: t2.replace("fill:", "color:")
    };
    return Vt(r);
  } else {
    const a2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a2.setAttribute("style", t2.replace("color:", "fill:"));
    let r = [];
    typeof i == "string" ? r = i.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(i) ? r = i : r = [];
    for (const l2 of r) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), c.setAttribute("dy", "1em"), c.setAttribute("x", "0"), s ? c.setAttribute("class", "title-row") : c.setAttribute("class", "row"), c.textContent = l2.trim(), a2.appendChild(c);
    }
    return a2;
  }
}, "createLabel");
var K = ir;
var nr = g((e, t2, s, n, i) => {
  t2.arrowTypeStart && Ot(e, "start", t2.arrowTypeStart, s, n, i), t2.arrowTypeEnd && Ot(e, "end", t2.arrowTypeEnd, s, n, i);
}, "addEdgeMarkers");
var lr = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
};
var Ot = g((e, t2, s, n, i, a2) => {
  const r = lr[s];
  if (!r) {
    N.warn(`Unknown arrow type: ${s}`);
    return;
  }
  const l2 = t2 === "start" ? "Start" : "End";
  e.attr(`marker-${t2}`, `url(${n}#${i}_${a2}-${r}${l2})`);
}, "addEdgeMarker");
var mt = {};
var M = {};
var cr = g(async (e, t2) => {
  const s = gt(), n = Dt(s.flowchart.htmlLabels), i = t2.labelType === "markdown" ? dr(
    e,
    t2.label,
    {
      style: t2.labelStyle,
      useHtmlLabels: n,
      addSvgBackground: true
    },
    s
  ) : await K(t2.label, t2.labelStyle), a2 = e.insert("g").attr("class", "edgeLabel"), r = a2.insert("g").attr("class", "label");
  r.node().appendChild(i);
  let l2 = i.getBBox();
  if (n) {
    const u = i.children[0], h = dt(i);
    l2 = u.getBoundingClientRect(), h.attr("width", l2.width), h.attr("height", l2.height);
  }
  r.attr("transform", "translate(" + -l2.width / 2 + ", " + -l2.height / 2 + ")"), mt[t2.id] = a2, t2.width = l2.width, t2.height = l2.height;
  let c;
  if (t2.startLabelLeft) {
    const u = await K(t2.startLabelLeft, t2.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), M[t2.id] || (M[t2.id] = {}), M[t2.id].startLeft = h, tt(c, t2.startLabelLeft);
  }
  if (t2.startLabelRight) {
    const u = await K(t2.startLabelRight, t2.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    c = h.node().appendChild(u), x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), M[t2.id] || (M[t2.id] = {}), M[t2.id].startRight = h, tt(c, t2.startLabelRight);
  }
  if (t2.endLabelLeft) {
    const u = await K(t2.endLabelLeft, t2.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), h.node().appendChild(u), M[t2.id] || (M[t2.id] = {}), M[t2.id].endLeft = h, tt(c, t2.endLabelLeft);
  }
  if (t2.endLabelRight) {
    const u = await K(t2.endLabelRight, t2.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    c = x.node().appendChild(u);
    const w = u.getBBox();
    x.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), h.node().appendChild(u), M[t2.id] || (M[t2.id] = {}), M[t2.id].endRight = h, tt(c, t2.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function tt(e, t2) {
  gt().flowchart.htmlLabels && e && (e.style.width = t2.length * 9 + "px", e.style.height = "12px");
}
g(tt, "setTerminalWidth");
var or = g((e, t2) => {
  N.debug("Moving label abc88 ", e.id, e.label, mt[e.id], t2);
  let s = t2.updatedPath ? t2.updatedPath : t2.originalPath;
  const n = gt(), { subGraphTitleTotalMargin: i } = Gl(n);
  if (e.label) {
    const a2 = mt[e.id];
    let r = e.x, l2 = e.y;
    if (s) {
      const c = Ae.calcLabelPosition(s);
      N.debug(
        "Moving label " + e.label + " from (",
        r,
        ",",
        l2,
        ") to (",
        c.x,
        ",",
        c.y,
        ") abc88"
      ), t2.updatedPath && (r = c.x, l2 = c.y);
    }
    a2.attr("transform", `translate(${r}, ${l2 + i / 2})`);
  }
  if (e.startLabelLeft) {
    const a2 = M[e.id].startLeft;
    let r = e.x, l2 = e.y;
    if (s) {
      const c = Ae.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", s);
      r = c.x, l2 = c.y;
    }
    a2.attr("transform", `translate(${r}, ${l2})`);
  }
  if (e.startLabelRight) {
    const a2 = M[e.id].startRight;
    let r = e.x, l2 = e.y;
    if (s) {
      const c = Ae.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        s
      );
      r = c.x, l2 = c.y;
    }
    a2.attr("transform", `translate(${r}, ${l2})`);
  }
  if (e.endLabelLeft) {
    const a2 = M[e.id].endLeft;
    let r = e.x, l2 = e.y;
    if (s) {
      const c = Ae.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", s);
      r = c.x, l2 = c.y;
    }
    a2.attr("transform", `translate(${r}, ${l2})`);
  }
  if (e.endLabelRight) {
    const a2 = M[e.id].endRight;
    let r = e.x, l2 = e.y;
    if (s) {
      const c = Ae.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", s);
      r = c.x, l2 = c.y;
    }
    a2.attr("transform", `translate(${r}, ${l2})`);
  }
}, "positionEdgeLabel");
var hr = g((e, t2) => {
  const s = e.x, n = e.y, i = Math.abs(t2.x - s), a2 = Math.abs(t2.y - n), r = e.width / 2, l2 = e.height / 2;
  return i >= r || a2 >= l2;
}, "outsideNode");
var dr2 = g((e, t2, s) => {
  N.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t2)}
  insidePoint : ${JSON.stringify(s)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const n = e.x, i = e.y, a2 = Math.abs(n - s.x), r = e.width / 2;
  let l2 = s.x < t2.x ? r - a2 : r + a2;
  const c = e.height / 2, u = Math.abs(t2.y - s.y), h = Math.abs(t2.x - s.x);
  if (Math.abs(i - t2.y) * r > Math.abs(n - t2.x) * c) {
    let x = s.y < t2.y ? t2.y - c - i : i - c - t2.y;
    l2 = h * x / u;
    const w = {
      x: s.x < t2.x ? s.x + l2 : s.x - h + l2,
      y: s.y < t2.y ? s.y + u - x : s.y - u + x
    };
    return l2 === 0 && (w.x = t2.x, w.y = t2.y), h === 0 && (w.x = t2.x), u === 0 && (w.y = t2.y), N.debug(`abc89 topp/bott calc, Q ${u}, q ${x}, R ${h}, r ${l2}`, w), w;
  } else {
    s.x < t2.x ? l2 = t2.x - r - n : l2 = n - r - t2.x;
    let x = u * l2 / h, w = s.x < t2.x ? s.x + h - l2 : s.x - h + l2, b = s.y < t2.y ? s.y + x : s.y - x;
    return N.debug(`sides calc abc89, Q ${u}, q ${x}, R ${h}, r ${l2}`, { _x: w, _y: b }), l2 === 0 && (w = t2.x, b = t2.y), h === 0 && (w = t2.x), u === 0 && (b = t2.y), { x: w, y: b };
  }
}, "intersection");
var Rt = g((e, t2) => {
  N.debug("abc88 cutPathAtIntersect", e, t2);
  let s = [], n = e[0], i = false;
  return e.forEach((a2) => {
    if (!hr(t2, a2) && !i) {
      const r = dr2(t2, n, a2);
      let l2 = false;
      s.forEach((c) => {
        l2 = l2 || c.x === r.x && c.y === r.y;
      }), s.some((c) => c.x === r.x && c.y === r.y) || s.push(r), i = true;
    } else
      n = a2, i || s.push(a2);
  }), s;
}, "cutPathAtIntersect");
var gr = g(function(e, t2, s, n, i, a2, r) {
  let l2 = s.points;
  N.debug("abc88 InsertEdge: edge=", s, "e=", t2);
  let c = false;
  const u = a2.node(t2.v);
  var h = a2.node(t2.w);
  (h == null ? void 0 : h.intersect) && (u == null ? void 0 : u.intersect) && (l2 = l2.slice(1, s.points.length - 1), l2.unshift(u.intersect(l2[0])), l2.push(h.intersect(l2[l2.length - 1]))), s.toCluster && (N.debug("to cluster abc88", n[s.toCluster]), l2 = Rt(s.points, n[s.toCluster].node), c = true), s.fromCluster && (N.debug("from cluster abc88", n[s.fromCluster]), l2 = Rt(l2.reverse(), n[s.fromCluster].node).reverse(), c = true);
  const x = l2.filter((y) => !Number.isNaN(y.y));
  let w = bs;
  s.curve && (i === "graph" || i === "flowchart") && (w = s.curve);
  const { x: b, y: S } = Z1(s), E = _C().x(b).y(S).curve(w);
  let k;
  switch (s.thickness) {
    case "normal":
      k = "edge-thickness-normal";
      break;
    case "thick":
      k = "edge-thickness-thick";
      break;
    case "invisible":
      k = "edge-thickness-thick";
      break;
    default:
      k = "";
  }
  switch (s.pattern) {
    case "solid":
      k += " edge-pattern-solid";
      break;
    case "dotted":
      k += " edge-pattern-dotted";
      break;
    case "dashed":
      k += " edge-pattern-dashed";
      break;
  }
  const B = e.append("path").attr("d", E(x)).attr("id", s.id).attr("class", " " + k + (s.classes ? " " + s.classes : "")).attr("style", s.style);
  let _ = "";
  (gt().flowchart.arrowMarkerAbsolute || gt().state.arrowMarkerAbsolute) && (_ = Mf(true)), nr(B, s, _, r, i);
  let D = {};
  return c && (D.updatedPath = l2), D.originalPath = s.points, D;
}, "insertEdge");
var ur = g((e) => {
  const t2 = /* @__PURE__ */ new Set();
  for (const s of e)
    switch (s) {
      case "x":
        t2.add("right"), t2.add("left");
        break;
      case "y":
        t2.add("up"), t2.add("down");
        break;
      default:
        t2.add(s);
        break;
    }
  return t2;
}, "expandAndDeduplicateDirections");
var pr = g((e, t2, s) => {
  const n = ur(e), i = 2, a2 = t2.height + 2 * s.padding, r = a2 / i, l2 = t2.width + 2 * r + s.padding, c = s.padding / 2;
  return n.has("right") && n.has("left") && n.has("up") && n.has("down") ? [
    // Bottom
    { x: 0, y: 0 },
    { x: r, y: 0 },
    { x: l2 / 2, y: 2 * c },
    { x: l2 - r, y: 0 },
    { x: l2, y: 0 },
    // Right
    { x: l2, y: -a2 / 3 },
    { x: l2 + 2 * c, y: -a2 / 2 },
    { x: l2, y: -2 * a2 / 3 },
    { x: l2, y: -a2 },
    // Top
    { x: l2 - r, y: -a2 },
    { x: l2 / 2, y: -a2 - 2 * c },
    { x: r, y: -a2 },
    // Left
    { x: 0, y: -a2 },
    { x: 0, y: -2 * a2 / 3 },
    { x: -2 * c, y: -a2 / 2 },
    { x: 0, y: -a2 / 3 }
  ] : n.has("right") && n.has("left") && n.has("up") ? [
    { x: r, y: 0 },
    { x: l2 - r, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - r, y: -a2 },
    { x: r, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("right") && n.has("left") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: r, y: -a2 },
    { x: l2 - r, y: -a2 },
    { x: l2, y: 0 }
  ] : n.has("right") && n.has("up") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: -r },
    { x: l2, y: -a2 + r },
    { x: 0, y: -a2 }
  ] : n.has("left") && n.has("up") && n.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: -r },
    { x: 0, y: -a2 + r },
    { x: l2, y: -a2 }
  ] : n.has("right") && n.has("left") ? [
    { x: r, y: 0 },
    { x: r, y: -c },
    { x: l2 - r, y: -c },
    { x: l2 - r, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - r, y: -a2 },
    { x: l2 - r, y: -a2 + c },
    { x: r, y: -a2 + c },
    { x: r, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("up") && n.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -c },
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -a2 + c },
    { x: 0, y: -a2 + c },
    // Top of arrow
    { x: l2 / 2, y: -a2 },
    { x: l2, y: -a2 + c },
    // Top of right vertical bar
    { x: l2 - r, y: -a2 + c },
    { x: l2 - r, y: -c },
    { x: l2, y: -c }
  ] : n.has("right") && n.has("up") ? [
    { x: 0, y: 0 },
    { x: l2, y: -r },
    { x: 0, y: -a2 }
  ] : n.has("right") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: 0 },
    { x: 0, y: -a2 }
  ] : n.has("left") && n.has("up") ? [
    { x: l2, y: 0 },
    { x: 0, y: -r },
    { x: l2, y: -a2 }
  ] : n.has("left") && n.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: 0 },
    { x: l2, y: -a2 }
  ] : n.has("right") ? [
    { x: r, y: -c },
    { x: r, y: -c },
    { x: l2 - r, y: -c },
    { x: l2 - r, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - r, y: -a2 },
    { x: l2 - r, y: -a2 + c },
    // top left corner of arrow
    { x: r, y: -a2 + c },
    { x: r, y: -a2 + c }
  ] : n.has("left") ? [
    { x: r, y: 0 },
    { x: r, y: -c },
    // Two points, the right corners
    { x: l2 - r, y: -c },
    { x: l2 - r, y: -a2 + c },
    { x: r, y: -a2 + c },
    { x: r, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("up") ? [
    // Bottom center
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -a2 + c },
    { x: 0, y: -a2 + c },
    // Top of arrow
    { x: l2 / 2, y: -a2 },
    { x: l2, y: -a2 + c },
    // Top of right vertical bar
    { x: l2 - r, y: -a2 + c },
    { x: l2 - r, y: -c }
  ] : n.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -c },
    { x: r, y: -c },
    // Left top over vertical section
    { x: r, y: -a2 + c },
    { x: l2 - r, y: -a2 + c },
    { x: l2 - r, y: -c },
    { x: l2, y: -c }
  ] : [{ x: 0, y: 0 }];
}, "getArrowPoints");
function Gt(e, t2) {
  return e.intersect(t2);
}
g(Gt, "intersectNode");
var fr = Gt;
function Zt(e, t2, s, n) {
  var i = e.x, a2 = e.y, r = i - n.x, l2 = a2 - n.y, c = Math.sqrt(t2 * t2 * l2 * l2 + s * s * r * r), u = Math.abs(t2 * s * r / c);
  n.x < i && (u = -u);
  var h = Math.abs(t2 * s * l2 / c);
  return n.y < a2 && (h = -h), { x: i + u, y: a2 + h };
}
g(Zt, "intersectEllipse");
var qt = Zt;
function Jt(e, t2, s) {
  return qt(e, t2, t2, s);
}
g(Jt, "intersectCircle");
var xr = Jt;
function Qt(e, t2, s, n) {
  var i, a2, r, l2, c, u, h, x, w, b, S, E, k, B, _;
  if (i = t2.y - e.y, r = e.x - t2.x, c = t2.x * e.y - e.x * t2.y, w = i * s.x + r * s.y + c, b = i * n.x + r * n.y + c, !(w !== 0 && b !== 0 && Lt(w, b)) && (a2 = n.y - s.y, l2 = s.x - n.x, u = n.x * s.y - s.x * n.y, h = a2 * e.x + l2 * e.y + u, x = a2 * t2.x + l2 * t2.y + u, !(h !== 0 && x !== 0 && Lt(h, x)) && (S = i * l2 - a2 * r, S !== 0)))
    return E = Math.abs(S / 2), k = r * u - l2 * c, B = k < 0 ? (k - E) / S : (k + E) / S, k = a2 * c - i * u, _ = k < 0 ? (k - E) / S : (k + E) / S, { x: B, y: _ };
}
g(Qt, "intersectLine");
function Lt(e, t2) {
  return e * t2 > 0;
}
g(Lt, "sameSign");
var yr = Qt;
var br = $t;
function $t(e, t2, s) {
  var n = e.x, i = e.y, a2 = [], r = Number.POSITIVE_INFINITY, l2 = Number.POSITIVE_INFINITY;
  typeof t2.forEach == "function" ? t2.forEach(function(S) {
    r = Math.min(r, S.x), l2 = Math.min(l2, S.y);
  }) : (r = Math.min(r, t2.x), l2 = Math.min(l2, t2.y));
  for (var c = n - e.width / 2 - r, u = i - e.height / 2 - l2, h = 0; h < t2.length; h++) {
    var x = t2[h], w = t2[h < t2.length - 1 ? h + 1 : 0], b = yr(
      e,
      s,
      { x: c + x.x, y: u + x.y },
      { x: c + w.x, y: u + w.y }
    );
    b && a2.push(b);
  }
  return a2.length ? (a2.length > 1 && a2.sort(function(S, E) {
    var k = S.x - s.x, B = S.y - s.y, _ = Math.sqrt(k * k + B * B), D = E.x - s.x, y = E.y - s.y, g2 = Math.sqrt(D * D + y * y);
    return _ < g2 ? -1 : _ === g2 ? 0 : 1;
  }), a2[0]) : e;
}
g($t, "intersectPolygon");
var wr = g((e, t2) => {
  var s = e.x, n = e.y, i = t2.x - s, a2 = t2.y - n, r = e.width / 2, l2 = e.height / 2, c, u;
  return Math.abs(a2) * r > Math.abs(i) * l2 ? (a2 < 0 && (l2 = -l2), c = a2 === 0 ? 0 : l2 * i / a2, u = l2) : (i < 0 && (r = -r), c = r, u = i === 0 ? 0 : r * a2 / i), { x: s + c, y: n + u };
}, "intersectRect");
var mr = wr;
var N2 = {
  node: fr,
  circle: xr,
  ellipse: qt,
  polygon: br,
  rect: mr
};
var A = g(async (e, t2, s, n) => {
  const i = gt();
  let a2;
  const r = t2.useHtmlLabels || Dt(i.flowchart.htmlLabels);
  s ? a2 = s : a2 = "node default";
  const l2 = e.insert("g").attr("class", a2).attr("id", t2.domId || t2.id), c = l2.insert("g").attr("class", "label").attr("style", t2.labelStyle);
  let u;
  t2.labelText === void 0 ? u = "" : u = typeof t2.labelText == "string" ? t2.labelText : t2.labelText[0];
  const h = c.node();
  let x;
  t2.labelType === "markdown" ? x = dr(
    c,
    Er(Nr(u), i),
    {
      useHtmlLabels: r,
      width: t2.width || i.flowchart.wrappingWidth,
      classes: "markdown-node-label"
    },
    i
  ) : x = h.appendChild(
    await K(
      Er(Nr(u), i),
      t2.labelStyle,
      false,
      n
    )
  );
  let w = x.getBBox();
  const b = t2.padding / 2;
  if (Dt(i.flowchart.htmlLabels)) {
    const S = x.children[0], E = dt(x), k = S.getElementsByTagName("img");
    if (k) {
      const B = u.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...k].map(
          (_) => new Promise((D) => {
            function y() {
              if (_.style.display = "flex", _.style.flexDirection = "column", B) {
                const g2 = i.fontSize ? i.fontSize : window.getComputedStyle(document.body).fontSize, m = parseInt(g2, 10) * 5 + "px";
                _.style.minWidth = m, _.style.maxWidth = m;
              } else
                _.style.width = "100%";
              D(_);
            }
            g(y, "setupImage"), setTimeout(() => {
              _.complete && y();
            }), _.addEventListener("error", y), _.addEventListener("load", y);
          })
        )
      );
    }
    w = S.getBoundingClientRect(), E.attr("width", w.width), E.attr("height", w.height);
  }
  return r ? c.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")") : c.attr("transform", "translate(0, " + -w.height / 2 + ")"), t2.centerLabel && c.attr("transform", "translate(" + -w.width / 2 + ", " + -w.height / 2 + ")"), c.insert("rect", ":first-child"), { shapeSvg: l2, bbox: w, halfPadding: b, label: c };
}, "labelHelper");
var T = g((e, t2) => {
  const s = t2.node().getBBox();
  e.width = s.width, e.height = s.height;
}, "updateNodeBounds");
function U(e, t2, s, n) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t2 / 2 + "," + s / 2 + ")");
}
g(U, "insertPolygonShape");
var Lr = g(async (e, t2) => {
  t2.useHtmlLabels || gt().flowchart.htmlLabels || (t2.centerLabel = true);
  const { shapeSvg: n, bbox: i, halfPadding: a2 } = await A(
    e,
    t2,
    "node " + t2.classes,
    true
  );
  N.info("Classes = ", t2.classes);
  const r = n.insert("rect", ":first-child");
  return r.attr("rx", t2.rx).attr("ry", t2.ry).attr("x", -i.width / 2 - a2).attr("y", -i.height / 2 - a2).attr("width", i.width + t2.padding).attr("height", i.height + t2.padding), T(t2, r), t2.intersect = function(l2) {
    return N2.rect(t2, l2);
  }, n;
}, "note");
var Sr = Lr;
var zt = g((e) => e ? " " + e : "", "formatClass");
var Y = g((e, t2) => `${t2 || "node default"}${zt(e.classes)} ${zt(
  e.class
)}`, "getClassesFromNode");
var At = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = i + a2, l2 = [
    { x: r / 2, y: 0 },
    { x: r, y: -r / 2 },
    { x: r / 2, y: -r },
    { x: 0, y: -r / 2 }
  ];
  N.info("Question main (Circle)");
  const c = U(s, r, r, l2);
  return c.attr("style", t2.style), T(t2, c), t2.intersect = function(u) {
    return N.warn("Intersect called"), N2.polygon(t2, l2, u);
  }, s;
}, "question");
var kr = g((e, t2) => {
  const s = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), n = 28, i = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -n / 2 },
    { x: -n / 2, y: 0 }
  ];
  return s.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(r) {
      return r.x + "," + r.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t2.width = 28, t2.height = 28, t2.intersect = function(r) {
    return N2.circle(t2, 14, r);
  }, s;
}, "choice");
var vr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = 4, a2 = n.height + t2.padding, r = a2 / i, l2 = n.width + 2 * r + t2.padding, c = [
    { x: r, y: 0 },
    { x: l2 - r, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - r, y: -a2 },
    { x: r, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ], u = U(s, l2, a2, c);
  return u.attr("style", t2.style), T(t2, u), t2.intersect = function(h) {
    return N2.polygon(t2, c, h);
  }, s;
}, "hexagon");
var Er2 = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(e, t2, void 0, true), i = 2, a2 = n.height + 2 * t2.padding, r = a2 / i, l2 = n.width + 2 * r + t2.padding, c = pr(t2.directions, n, t2), u = U(s, l2, a2, c);
  return u.attr("style", t2.style), T(t2, u), t2.intersect = function(h) {
    return N2.polygon(t2, c, h);
  }, s;
}, "block_arrow");
var _r = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: -a2 / 2, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -a2 },
    { x: -a2 / 2, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ];
  return U(s, i, a2, r).attr("style", t2.style), t2.width = i + a2, t2.height = a2, t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "rect_left_inv_arrow");
var Dr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(e, t2, Y(t2), true), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: -2 * a2 / 6, y: 0 },
    { x: i - a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "lean_right");
var Nr2 = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: 2 * a2 / 6, y: 0 },
    { x: i + a2 / 6, y: 0 },
    { x: i - 2 * a2 / 6, y: -a2 },
    { x: -a2 / 6, y: -a2 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "lean_left");
var Tr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: -2 * a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: 0 },
    { x: i - a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "trapezoid");
var Br = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: a2 / 6, y: 0 },
    { x: i - a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: -a2 },
    { x: -2 * a2 / 6, y: -a2 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "inv_trapezoid");
var Cr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: 0, y: 0 },
    { x: i + a2 / 2, y: 0 },
    { x: i, y: -a2 / 2 },
    { x: i + a2 / 2, y: -a2 },
    { x: 0, y: -a2 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "rect_right_inv_arrow");
var Ir = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = i / 2, r = a2 / (2.5 + i / 50), l2 = n.height + r + t2.padding, c = "M 0," + r + " a " + a2 + "," + r + " 0,0,0 " + i + " 0 a " + a2 + "," + r + " 0,0,0 " + -i + " 0 l 0," + l2 + " a " + a2 + "," + r + " 0,0,0 " + i + " 0 l 0," + -l2, u = s.attr("label-offset-y", r).insert("path", ":first-child").attr("style", t2.style).attr("d", c).attr("transform", "translate(" + -i / 2 + "," + -(l2 / 2 + r) + ")");
  return T(t2, u), t2.intersect = function(h) {
    const x = N2.rect(t2, h), w = x.x - t2.x;
    if (a2 != 0 && (Math.abs(w) < t2.width / 2 || Math.abs(w) == t2.width / 2 && Math.abs(x.y - t2.y) > t2.height / 2 - r)) {
      let b = r * r * (1 - w * w / (a2 * a2));
      b != 0 && (b = Math.sqrt(b)), b = r - b, h.y - t2.y > 0 && (b = -b), x.y += b;
    }
    return x;
  }, s;
}, "cylinder");
var Or = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n, halfPadding: i } = await A(
    e,
    t2,
    "node " + t2.classes + " " + t2.class,
    true
  ), a2 = s.insert("rect", ":first-child"), r = t2.positioned ? t2.width : n.width + t2.padding, l2 = t2.positioned ? t2.height : n.height + t2.padding, c = t2.positioned ? -r / 2 : -n.width / 2 - i, u = t2.positioned ? -l2 / 2 : -n.height / 2 - i;
  if (a2.attr("class", "basic label-container").attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("x", c).attr("y", u).attr("width", r).attr("height", l2), t2.props) {
    const h = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(a2, t2.props.borders, r, l2), h.delete("borders")), h.forEach((x) => {
      N.warn(`Unknown node property ${x}`);
    });
  }
  return T(t2, a2), t2.intersect = function(h) {
    return N2.rect(t2, h);
  }, s;
}, "rect");
var Rr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n, halfPadding: i } = await A(
    e,
    t2,
    "node " + t2.classes,
    true
  ), a2 = s.insert("rect", ":first-child"), r = t2.positioned ? t2.width : n.width + t2.padding, l2 = t2.positioned ? t2.height : n.height + t2.padding, c = t2.positioned ? -r / 2 : -n.width / 2 - i, u = t2.positioned ? -l2 / 2 : -n.height / 2 - i;
  if (a2.attr("class", "basic cluster composite label-container").attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("x", c).attr("y", u).attr("width", r).attr("height", l2), t2.props) {
    const h = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(a2, t2.props.borders, r, l2), h.delete("borders")), h.forEach((x) => {
      N.warn(`Unknown node property ${x}`);
    });
  }
  return T(t2, a2), t2.intersect = function(h) {
    return N2.rect(t2, h);
  }, s;
}, "composite");
var zr = g(async (e, t2) => {
  const { shapeSvg: s } = await A(e, t2, "label", true);
  N.trace("Classes = ", t2.class);
  const n = s.insert("rect", ":first-child"), i = 0, a2 = 0;
  if (n.attr("width", i).attr("height", a2), s.attr("class", "label edgeLabel"), t2.props) {
    const r = new Set(Object.keys(t2.props));
    t2.props.borders && (ht(n, t2.props.borders, i, a2), r.delete("borders")), r.forEach((l2) => {
      N.warn(`Unknown node property ${l2}`);
    });
  }
  return T(t2, n), t2.intersect = function(r) {
    return N2.rect(t2, r);
  }, s;
}, "labelRect");
function ht(e, t2, s, n) {
  const i = [], a2 = g((l2) => {
    i.push(l2, 0);
  }, "addBorder"), r = g((l2) => {
    i.push(0, l2);
  }, "skipBorder");
  t2.includes("t") ? (N.debug("add top border"), a2(s)) : r(s), t2.includes("r") ? (N.debug("add right border"), a2(n)) : r(n), t2.includes("b") ? (N.debug("add bottom border"), a2(s)) : r(s), t2.includes("l") ? (N.debug("add left border"), a2(n)) : r(n), e.attr("stroke-dasharray", i.join(" "));
}
g(ht, "applyNodePropertyBorders");
var Ar = g(async (e, t2) => {
  let s;
  t2.classes ? s = "node " + t2.classes : s = "node default";
  const n = e.insert("g").attr("class", s).attr("id", t2.domId || t2.id), i = n.insert("rect", ":first-child"), a2 = n.insert("line"), r = n.insert("g").attr("class", "label"), l2 = t2.labelText.flat ? t2.labelText.flat() : t2.labelText;
  let c = "";
  typeof l2 == "object" ? c = l2[0] : c = l2, N.info("Label text abc79", c, l2, typeof l2 == "object");
  const u = r.node().appendChild(await K(c, t2.labelStyle, true, true));
  let h = { width: 0, height: 0 };
  if (Dt(gt().flowchart.htmlLabels)) {
    const E = u.children[0], k = dt(u);
    h = E.getBoundingClientRect(), k.attr("width", h.width), k.attr("height", h.height);
  }
  N.info("Text 2", l2);
  const x = l2.slice(1, l2.length);
  let w = u.getBBox();
  const b = r.node().appendChild(
    await K(
      x.join ? x.join("<br/>") : x,
      t2.labelStyle,
      true,
      true
    )
  );
  if (Dt(gt().flowchart.htmlLabels)) {
    const E = b.children[0], k = dt(b);
    h = E.getBoundingClientRect(), k.attr("width", h.width), k.attr("height", h.height);
  }
  const S = t2.padding / 2;
  return dt(b).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width > w.width ? 0 : (w.width - h.width) / 2) + ", " + (w.height + S + 5) + ")"
  ), dt(u).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width < w.width ? 0 : -(w.width - h.width) / 2) + ", 0)"
  ), h = r.node().getBBox(), r.attr(
    "transform",
    "translate(" + -h.width / 2 + ", " + (-h.height / 2 - S + 3) + ")"
  ), i.attr("class", "outer title-state").attr("x", -h.width / 2 - S).attr("y", -h.height / 2 - S).attr("width", h.width + t2.padding).attr("height", h.height + t2.padding), a2.attr("class", "divider").attr("x1", -h.width / 2 - S).attr("x2", h.width / 2 + S).attr("y1", -h.height / 2 - S + w.height + S).attr("y2", -h.height / 2 - S + w.height + S), T(t2, i), t2.intersect = function(E) {
    return N2.rect(t2, E);
  }, n;
}, "rectWithTitle");
var Mr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.height + t2.padding, a2 = n.width + i / 4 + t2.padding, r = s.insert("rect", ":first-child").attr("style", t2.style).attr("rx", i / 2).attr("ry", i / 2).attr("x", -a2 / 2).attr("y", -i / 2).attr("width", a2).attr("height", i);
  return T(t2, r), t2.intersect = function(l2) {
    return N2.rect(t2, l2);
  }, s;
}, "stadium");
var Fr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n, halfPadding: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), a2 = s.insert("circle", ":first-child");
  return a2.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", n.width / 2 + i).attr("width", n.width + t2.padding).attr("height", n.height + t2.padding), N.info("Circle main"), T(t2, a2), t2.intersect = function(r) {
    return N.info("Circle intersect", t2, n.width / 2 + i, r), N2.circle(t2, n.width / 2 + i, r);
  }, s;
}, "circle");
var Wr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n, halfPadding: i } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), a2 = 5, r = s.insert("g", ":first-child"), l2 = r.insert("circle"), c = r.insert("circle");
  return r.attr("class", t2.class), l2.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", n.width / 2 + i + a2).attr("width", n.width + t2.padding + a2 * 2).attr("height", n.height + t2.padding + a2 * 2), c.attr("style", t2.style).attr("rx", t2.rx).attr("ry", t2.ry).attr("r", n.width / 2 + i).attr("width", n.width + t2.padding).attr("height", n.height + t2.padding), N.info("DoubleCircle main"), T(t2, l2), t2.intersect = function(u) {
    return N.info("DoubleCircle intersect", t2, n.width / 2 + i + a2, u), N2.circle(t2, n.width / 2 + i + a2, u);
  }, s;
}, "doublecircle");
var Pr = g(async (e, t2) => {
  const { shapeSvg: s, bbox: n } = await A(
    e,
    t2,
    Y(t2, void 0),
    true
  ), i = n.width + t2.padding, a2 = n.height + t2.padding, r = [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -a2 },
    { x: 0, y: -a2 },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: i + 8, y: 0 },
    { x: i + 8, y: -a2 },
    { x: -8, y: -a2 },
    { x: -8, y: 0 }
  ], l2 = U(s, i, a2, r);
  return l2.attr("style", t2.style), T(t2, l2), t2.intersect = function(c) {
    return N2.polygon(t2, r, c);
  }, s;
}, "subroutine");
var Yr = g((e, t2) => {
  const s = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), n = s.insert("circle", ":first-child");
  return n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), T(t2, n), t2.intersect = function(i) {
    return N2.circle(t2, 7, i);
  }, s;
}, "start");
var Mt = g((e, t2, s) => {
  const n = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id);
  let i = 70, a2 = 10;
  s === "LR" && (i = 10, a2 = 70);
  const r = n.append("rect").attr("x", -1 * i / 2).attr("y", -1 * a2 / 2).attr("width", i).attr("height", a2).attr("class", "fork-join");
  return T(t2, r), t2.height = t2.height + t2.padding / 2, t2.width = t2.width + t2.padding / 2, t2.intersect = function(l2) {
    return N2.rect(t2, l2);
  }, n;
}, "forkJoin");
var Hr = g((e, t2) => {
  const s = e.insert("g").attr("class", "node default").attr("id", t2.domId || t2.id), n = s.insert("circle", ":first-child"), i = s.insert("circle", ":first-child");
  return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), n.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), T(t2, i), t2.intersect = function(a2) {
    return N2.circle(t2, 7, a2);
  }, s;
}, "end");
var Kr = g(async (e, t2) => {
  var _a2;
  const s = t2.padding / 2, n = 4, i = 8;
  let a2;
  t2.classes ? a2 = "node " + t2.classes : a2 = "node default";
  const r = e.insert("g").attr("class", a2).attr("id", t2.domId || t2.id), l2 = r.insert("rect", ":first-child"), c = r.insert("line"), u = r.insert("line");
  let h = 0, x = n;
  const w = r.insert("g").attr("class", "label");
  let b = 0;
  const S = (_a2 = t2.classData.annotations) == null ? void 0 : _a2[0], E = t2.classData.annotations[0] ? "«" + t2.classData.annotations[0] + "»" : "", k = w.node().appendChild(await K(E, t2.labelStyle, true, true));
  let B = k.getBBox();
  if (Dt(gt().flowchart.htmlLabels)) {
    const v = k.children[0], o = dt(k);
    B = v.getBoundingClientRect(), o.attr("width", B.width), o.attr("height", B.height);
  }
  t2.classData.annotations[0] && (x += B.height + n, h += B.width);
  let _ = t2.classData.label;
  t2.classData.type !== void 0 && t2.classData.type !== "" && (gt().flowchart.htmlLabels ? _ += "&lt;" + t2.classData.type + "&gt;" : _ += "<" + t2.classData.type + ">");
  const D = w.node().appendChild(await K(_, t2.labelStyle, true, true));
  dt(D).attr("class", "classTitle");
  let y = D.getBBox();
  if (Dt(gt().flowchart.htmlLabels)) {
    const v = D.children[0], o = dt(D);
    y = v.getBoundingClientRect(), o.attr("width", y.width), o.attr("height", y.height);
  }
  x += y.height + n, y.width > h && (h = y.width);
  const g2 = [];
  t2.classData.members.forEach(async (v) => {
    const o = v.getDisplayDetails();
    let W = o.displayText;
    gt().flowchart.htmlLabels && (W = W.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const p = w.node().appendChild(
      await K(
        W,
        o.cssStyle ? o.cssStyle : t2.labelStyle,
        true,
        true
      )
    );
    let I = p.getBBox();
    if (Dt(gt().flowchart.htmlLabels)) {
      const Z = p.children[0], V = dt(p);
      I = Z.getBoundingClientRect(), V.attr("width", I.width), V.attr("height", I.height);
    }
    I.width > h && (h = I.width), x += I.height + n, g2.push(p);
  }), x += i;
  const f = [];
  if (t2.classData.methods.forEach(async (v) => {
    const o = v.getDisplayDetails();
    let W = o.displayText;
    gt().flowchart.htmlLabels && (W = W.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const p = w.node().appendChild(
      await K(
        W,
        o.cssStyle ? o.cssStyle : t2.labelStyle,
        true,
        true
      )
    );
    let I = p.getBBox();
    if (Dt(gt().flowchart.htmlLabels)) {
      const Z = p.children[0], V = dt(p);
      I = Z.getBoundingClientRect(), V.attr("width", I.width), V.attr("height", I.height);
    }
    I.width > h && (h = I.width), x += I.height + n, f.push(p);
  }), x += i, S) {
    let v = (h - B.width) / 2;
    dt(k).attr(
      "transform",
      "translate( " + (-1 * h / 2 + v) + ", " + -1 * x / 2 + ")"
    ), b = B.height + n;
  }
  let m = (h - y.width) / 2;
  return dt(D).attr(
    "transform",
    "translate( " + (-1 * h / 2 + m) + ", " + (-1 * x / 2 + b) + ")"
  ), b += y.height + n, c.attr("class", "divider").attr("x1", -h / 2 - s).attr("x2", h / 2 + s).attr("y1", -x / 2 - s + i + b).attr("y2", -x / 2 - s + i + b), b += i, g2.forEach((v) => {
    dt(v).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * x / 2 + b + i / 2) + ")"
    );
    const o = v == null ? void 0 : v.getBBox();
    b += ((o == null ? void 0 : o.height) ?? 0) + n;
  }), b += i, u.attr("class", "divider").attr("x1", -h / 2 - s).attr("x2", h / 2 + s).attr("y1", -x / 2 - s + i + b).attr("y2", -x / 2 - s + i + b), b += i, f.forEach((v) => {
    dt(v).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * x / 2 + b) + ")"
    );
    const o = v == null ? void 0 : v.getBBox();
    b += ((o == null ? void 0 : o.height) ?? 0) + n;
  }), l2.attr("style", t2.style).attr("class", "outer title-state").attr("x", -h / 2 - s).attr("y", -(x / 2) - s).attr("width", h + t2.padding).attr("height", x + t2.padding), T(t2, l2), t2.intersect = function(v) {
    return N2.rect(t2, v);
  }, r;
}, "class_box");
var Ft = {
  rhombus: At,
  composite: Rr,
  question: At,
  rect: Or,
  labelRect: zr,
  rectWithTitle: Ar,
  choice: kr,
  circle: Fr,
  doublecircle: Wr,
  stadium: Mr,
  hexagon: vr,
  block_arrow: Er2,
  rect_left_inv_arrow: _r,
  lean_right: Dr,
  lean_left: Nr2,
  trapezoid: Tr,
  inv_trapezoid: Br,
  rect_right_inv_arrow: Cr,
  cylinder: Ir,
  start: Yr,
  end: Hr,
  note: Sr,
  subroutine: Pr,
  fork: Mt,
  join: Mt,
  class_box: Kr
};
var lt = {};
var te = g(async (e, t2, s) => {
  let n, i;
  if (t2.link) {
    let a2;
    gt().securityLevel === "sandbox" ? a2 = "_top" : t2.linkTarget && (a2 = t2.linkTarget || "_blank"), n = e.insert("svg:a").attr("xlink:href", t2.link).attr("target", a2), i = await Ft[t2.shape](n, t2, s);
  } else
    i = await Ft[t2.shape](e, t2, s), n = i;
  return t2.tooltip && i.attr("title", t2.tooltip), t2.class && i.attr("class", "node default " + t2.class), lt[t2.id] = n, t2.haveCallback && lt[t2.id].attr("class", lt[t2.id].attr("class") + " clickable"), n;
}, "insertNode");
var Xr = g((e) => {
  const t2 = lt[e.id];
  N.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const s = 8, n = e.diff || 0;
  return e.clusterNode ? t2.attr(
    "transform",
    "translate(" + (e.x + n - e.width / 2) + ", " + (e.y - e.height / 2 - s) + ")"
  ) : t2.attr("transform", "translate(" + e.x + ", " + e.y + ")"), n;
}, "positionNode");
function _t(e, t2, s = false) {
  var _a2, _b2, _c;
  const n = e;
  let i = "default";
  (((_a2 = n == null ? void 0 : n.classes) == null ? void 0 : _a2.length) || 0) > 0 && (i = ((n == null ? void 0 : n.classes) ?? []).join(" ")), i = i + " flowchart-label";
  let a2 = 0, r = "", l2;
  switch (n.type) {
    case "round":
      a2 = 5, r = "rect";
      break;
    case "composite":
      a2 = 0, r = "composite", l2 = 0;
      break;
    case "square":
      r = "rect";
      break;
    case "diamond":
      r = "question";
      break;
    case "hexagon":
      r = "hexagon";
      break;
    case "block_arrow":
      r = "block_arrow";
      break;
    case "odd":
      r = "rect_left_inv_arrow";
      break;
    case "lean_right":
      r = "lean_right";
      break;
    case "lean_left":
      r = "lean_left";
      break;
    case "trapezoid":
      r = "trapezoid";
      break;
    case "inv_trapezoid":
      r = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      r = "rect_left_inv_arrow";
      break;
    case "circle":
      r = "circle";
      break;
    case "ellipse":
      r = "ellipse";
      break;
    case "stadium":
      r = "stadium";
      break;
    case "subroutine":
      r = "subroutine";
      break;
    case "cylinder":
      r = "cylinder";
      break;
    case "group":
      r = "rect";
      break;
    case "doublecircle":
      r = "doublecircle";
      break;
    default:
      r = "rect";
  }
  const c = Eg((n == null ? void 0 : n.styles) ?? []), u = n.label, h = n.size ?? { width: 0, height: 0, x: 0, y: 0 };
  return {
    labelStyle: c.labelStyle,
    shape: r,
    labelText: u,
    rx: a2,
    ry: a2,
    class: i,
    style: c.style,
    id: n.id,
    directions: n.directions,
    width: h.width,
    height: h.height,
    x: h.x,
    y: h.y,
    positioned: s,
    intersect: void 0,
    type: n.type,
    padding: l2 ?? ((_c = (_b2 = oe()) == null ? void 0 : _b2.block) == null ? void 0 : _c.padding) ?? 0
  };
}
g(_t, "getNodeFromBlock");
async function ee(e, t2, s) {
  const n = _t(t2, s, false);
  if (n.type === "group")
    return;
  const i = oe(), a2 = await te(e, n, { config: i }), r = a2.node().getBBox(), l2 = s.getBlock(n.id);
  l2.size = { width: r.width, height: r.height, x: 0, y: 0, node: a2 }, s.setBlock(l2), a2.remove();
}
g(ee, "calculateBlockSize");
async function re(e, t2, s) {
  const n = _t(t2, s, true);
  if (s.getBlock(n.id).type !== "space") {
    const a2 = oe();
    await te(e, n, { config: a2 }), t2.intersect = n == null ? void 0 : n.intersect, Xr(n);
  }
}
g(re, "insertBlockPositioned");
async function dt2(e, t2, s, n) {
  for (const i of t2)
    await n(e, i, s), i.children && await dt2(e, i.children, s, n);
}
g(dt2, "performOperations");
async function ae(e, t2, s) {
  await dt2(e, t2, s, ee);
}
g(ae, "calculateBlockSizes");
async function se(e, t2, s) {
  await dt2(e, t2, s, re);
}
g(se, "insertBlocks");
async function ie(e, t2, s, n, i) {
  const a2 = new L({
    multigraph: true,
    compound: true
  });
  a2.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const r of s)
    r.size && a2.setNode(r.id, {
      width: r.size.width,
      height: r.size.height,
      intersect: r.intersect
    });
  for (const r of t2)
    if (r.start && r.end) {
      const l2 = n.getBlock(r.start), c = n.getBlock(r.end);
      if ((l2 == null ? void 0 : l2.size) && (c == null ? void 0 : c.size)) {
        const u = l2.size, h = c.size, x = [
          { x: u.x, y: u.y },
          { x: u.x + (h.x - u.x) / 2, y: u.y + (h.y - u.y) / 2 },
          { x: h.x, y: h.y }
        ];
        gr(
          e,
          { v: r.start, w: r.end, name: r.id },
          {
            ...r,
            arrowTypeEnd: r.arrowTypeEnd,
            arrowTypeStart: r.arrowTypeStart,
            points: x,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          },
          void 0,
          "block",
          a2,
          i
        ), r.label && (await cr(e, {
          ...r,
          label: r.label,
          labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
          arrowTypeEnd: r.arrowTypeEnd,
          arrowTypeStart: r.arrowTypeStart,
          points: x,
          classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
        }), or(
          { ...r, x: x[1].x, y: x[1].y },
          {
            originalPath: x
          }
        ));
      }
    }
}
g(ie, "insertEdges");
var Ur = g(function(e, t2) {
  return t2.db.getClasses();
}, "getClasses");
var jr = g(async function(e, t2, s, n) {
  const { securityLevel: i, block: a2 } = oe(), r = n.db;
  let l2;
  i === "sandbox" && (l2 = dt("#i" + t2));
  const c = i === "sandbox" ? dt(l2.nodes()[0].contentDocument.body) : dt("body"), u = i === "sandbox" ? c.select(`[id="${t2}"]`) : dt(`[id="${t2}"]`);
  ar(u, ["point", "circle", "cross"], n.type, t2);
  const x = r.getBlocks(), w = r.getBlocksFlat(), b = r.getEdges(), S = u.insert("g").attr("class", "block");
  await ae(S, x, r);
  const E = jt(r);
  if (await se(S, x, r), await ie(S, b, w, r, t2), E) {
    const k = E, B = Math.max(1, Math.round(0.125 * (k.width / k.height))), _ = k.height + B + 10, D = k.width + 10, { useMaxWidth: y } = a2;
    $f(u, _, D, !!y), N.debug("Here Bounds", E, k), u.attr(
      "viewBox",
      `${k.x - 5} ${k.y - 5} ${k.width + 10} ${k.height + 10}`
    );
  }
}, "draw");
var Vr = {
  draw: jr,
  getClasses: Ur
};
var $r = {
  parser: ve,
  db: Ke,
  renderer: Vr,
  styles: Ue
};
export {
  $r as diagram
};
//# sourceMappingURL=blockDiagram-6J76NXCF-u4N2vHGm-HXY6JCDI.js.map
