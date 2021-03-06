// Generated by CoffeeScript 1.9.2

/*! Abasis 0.0.1 //// MIT Licence //// http://abasis.richplastow.com/ */

(function() {
  var Abasis, ª, ªA, ªB, ªE, ªF, ªI, ªN, ªO, ªR, ªS, ªU, ªV, ªX, ªclone, ªex, ªhas, ªpopulate, ªretrieve, ªtype;

  ªI = 'Abasis';

  ªV = '0.0.1';

  ªA = 'array';

  ªB = 'boolean';

  ªE = 'error';

  ªF = 'function';

  ªN = 'number';

  ªO = 'object';

  ªR = 'regexp';

  ªS = 'string';

  ªU = 'undefined';

  ªX = 'null';

  ª = console.log.bind(console);

  ªex = function(x, a, b) {
    var pos;
    if (-1 === (pos = a.indexOf(x))) {
      return x;
    } else {
      return b.charAt(pos);
    }
  };

  ªhas = function(h, n, t, f) {
    if (t == null) {
      t = true;
    }
    if (f == null) {
      f = false;
    }
    if (-1 !== h.indexOf(n)) {
      return t;
    } else {
      return f;
    }
  };

  ªtype = function(x) {
    return {}.toString.call(x).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  };

  ªretrieve = function(instances, identifier) {
    var instance;
    instance = instances[identifier];
    if (!instance) {
      switch (typeof identifier) {
        case ªS:
          throw new Error("'" + identifier + "' does not exist");
          break;
        case ªN:
          throw new Error("`" + identifier + "` does not exist");
          break;
        case ªU:
          throw new Error("`identifier` is `undefined`");
          break;
        default:
          throw new Error("`identifier` is type '" + (ªtype(identifier)) + "'");
      }
    }
    return instance;
  };

  ªpopulate = function(candidate, subject, rules, updating) {
    var errors, i, j, key, len, len1, rule, test, type, use, value;
    if (ªO !== ªtype(candidate)) {
      throw new Error("`candidate` is type '" + (ªtype(candidate)) + "' not 'object'");
    }
    errors = [];
    for (i = 0, len = rules.length; i < len; i++) {
      rule = rules[i];
      key = rule[0], use = rule[1], type = rule[2], test = rule[3];
      value = candidate[key];
      if (void 0 === value) {
        if (updating || void 0 !== use) {
          continue;
        } else {
          errors.push("Missing field '" + key + "' is mandatory");
        }
      } else if (type !== ªtype(value)) {
        errors.push("Field '" + key + "' is type '" + (ªtype(value)) + "' not '" + type + "'");
      } else if (!test.test(value)) {
        errors.push("Field '" + key + "' is '" + value + "' which fails " + ('' + test));
      }
    }
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }
    for (j = 0, len1 = rules.length; j < len1; j++) {
      rule = rules[j];
      key = rule[0], use = rule[1], type = rule[2], test = rule[3];
      value = candidate[key];
      if (void 0 === value) {
        if (void 0 === subject[key]) {
          subject[key] = use;
        }
      } else {
        subject[key] = value;
      }
    }
  };

  ªclone = function(subject, rules) {
    var i, key, len, out, rule;
    out = {};
    for (i = 0, len = rules.length; i < len; i++) {
      rule = rules[i];
      key = ªS === typeof rule ? rule : rule[0];
      out[key] = subject[key];
    }
    return out;
  };

  Abasis = (function() {
    Abasis.prototype.I = ªI;

    Abasis.prototype.toString = function() {
      return "[object " + this.I + "]";
    };

    Abasis.prototype._api = [['id', 'abasis_000', ªS, RegExp("^" + (ªI.toLowerCase()) + "_[-_0-9a-z]{1,10}$")]];

    function Abasis(config) {
      if (config == null) {
        config = {};
      }
      ªpopulate(config, this, this._api);
    }

    Abasis.prototype.clone = function() {
      return ªclone(this, ['id', 'path', 'order']);
    };

    Abasis.prototype.destructor = function() {};

    Abasis.prototype.gs = function(a, b) {
      var obj;
      switch (arguments.length) {
        case 0:
          return ªclone(this, this._api);
        case 1:
          switch (ªtype(a)) {
            case ªS:
              return this[a];
            case ªO:
              return ªpopulate(a, this, this._api, true);
          }
          break;
        case 2:
          obj = {};
          obj[a] = b;
          return this.gs(obj);
      }
    };

    return Abasis;

  })();

  if (ªF === typeof define && define.amd) {
    define(function() {
      return Abasis;
    });
  } else if (ªO === typeof module && module && module.exports) {
    module.exports = Abasis;
  } else {
    this[ªI] = Abasis;
  }

}).call(this);
