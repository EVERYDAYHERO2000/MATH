import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

const mathParser = function (exp, options) {
  exp = exp ? exp.replace(/\s/g, '') : '';
  options = options || {
    latex: false,
  };

  let result = null;

  if (options.latex) {
    exp = exp
      .replace(/\\frac{([^}]+)}{([^}]+)}/g, 'frac($1,$2)') // fractions
      .replace(/\\left\(/g, '(') // open parenthesis
      .replace(/\\right\)/g, ')') // close parenthesis
      .replace(/[^\(](floor|ceil|(sin|cos|tan|sec|csc|cot)h?)\(([^\(\)]+)\)[^\)]/g, '($&)') // functions
      .replace(/([^(floor|ceil|(sin|cos|tan|sec|csc|cot)h?|\+|\-|\*|\/)])\(/g, '$1*(')
      .replace(/\)([\w])/g, ')*$1')
      .replace(/([0-9])([A-Za-z])/g, '$1*$2');
  }

  const node = math.parse(exp);

  function parse(exp) {
    let result = {};

    //operators
    if (exp.type == 'OperatorNode') {
      if (exp.fn == 'add') {
        result.type = 'sum';
        result.terms = getExpression('args');
        result.action = 'plus';
      } else if (exp.fn == 'subtract') {
        result.type = 'sum';
        result.terms = getExpression('args');
        result.action = 'minus';
      } else if (exp.fn == 'multiply') {
        result.type = 'product';
        result.factors = getExpression('args');
        result.action = 'multiply';
      } else if (exp.fn == 'divide') {
        result.type = 'product';
        result.factors = getExpression('args');
        result.action = 'divide';
      } else if (exp.fn == 'pow') {
        result.type = 'power';
        result.base = getExpression(0);
        result.exponent = getExpression(1);
      }

      //function
    } else if (exp.type == 'FunctionNode') {
      if (exp.fn.name == 'sqrt') {
        result.type = 'radical';
        result.expression = getExpression('args');
      } else if (exp.fn.name == 'sin') {
        result.type = 'sin';
        result.expression = getExpression('args');
      } else if (exp.fn.name == 'cos') {
        result.type = 'cos';
        result.expression = getExpression('args');
      } else if (exp.fn.name == 'frac') {
        result.type = 'fraction';
        result.numerator = getExpression(0);
        result.denominator = getExpression(1);
      }

      //numbers
    } else if (exp.type == 'ConstantNode') {
      result.value = exp.value;
      result.type = 'number';

      //vars and const
    } else if (exp.type == 'SymbolNode') {
      if (math[exp.name]) {
        result.type = 'constant';
        result.value = math[exp.name];
      } else {
        result.type = 'variable';
      }
      result.name = exp.name;

      //parenthesis
    } else if (exp.type == 'ParenthesisNode') {
      result.type = 'parentheses';
      result.expression = getExpression('content');
    }

    function getExpression(key) {
      let result = [];
      if (typeof key == 'string') {
        if (Array.isArray(exp[key])) {
          for (let token of exp[key]) {
            result.push(parse(token));
          }
        } else {
          result.push(parse(exp[key]));
        }
      } else if (typeof key == 'number') {
        result = parse(exp.args[key]);
      }
      return result;
    }

    return result;
  }

  result = parse(node);

  return {
    expression: exp,
    result: result,
  };
};

export default mathParser;
