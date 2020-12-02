import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

const mathParser = function (exp, options) {
  exp = exp ? exp.trim() : '';

  options = options || {
    latex: false,
  };

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

  const node = getNode(exp);

  function getNode(exp) {
    let parsed;

    try {
      parsed = math.parse(exp);
    } catch (e) {
      if (Number(e.char)) {
        const newExp = exp.slice(0,e.char - 1) + 'empty' + exp.slice(e.char - 1);
        console.log('newExp', newExp);
        parsed = getNode(newExp);
      }
    } finally {
      return parsed;
    }
  }

  function getTerms(exp) {
    const terms = parse(exp);
    if (terms.type === 'sum') {
      return terms.terms;
    }
    return [
      {
        type: 'term',
        action: 'plus',
        expression: terms,
      },
    ];
  }

  function parse(exp) {
    let result = {};

    console.log(exp);

    //operators
    if (exp.type == 'OperatorNode') {
      if (exp.fn == 'add') {
        result.type = 'sum';
        result.terms = getTerms(exp.args[0]);
        result.terms.push({
          type: 'term',
          action: 'plus',
          expression: parse(exp.args[1]),
        });
      } else if (exp.fn == 'subtract') {
        result.type = 'sum';
        result.terms = getTerms(exp.args[0]);
        result.terms.push({
          type: 'term',
          action: 'minus',
          expression: parse(exp.args[1]),
        });
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

      //empty, numbers
    } else if (exp.type == 'ConstantNode') {
      if (isNaN(Number(exp.value))) {
        result.type = 'empty';
      } else {
        result.type = 'number';
        result.value = exp.value;
      }

      //vars and const
    } else if (exp.type == 'SymbolNode') {
      if (math[exp.name]) {
        result.type = 'constant';
        result.value = math[exp.name];
        result.name = exp.name;
      } else if (exp.name === 'empty') {
        result.type = 'empty';
      } else {
        result.type = 'variable';
        result.name = exp.name;
      }

      //parenthesis
    } else if (exp.type == 'ParenthesisNode') {
      result.type = 'parentheses';
      result.expression = getExpression('content');
    }

    function getExpression(key, prevToken) {
      let result = [];
      prevToken = prevToken || null;
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


  const result = parse(node);


  return {
    expression: exp,
    result: result,
  };
};

export default mathParser;
