const data = {
  type: 'sum',
  terms: [
    {
      type: 'term',
      action: 'plus',
      expression: {
        type: 'number', 
        value: 2
      }
    },
    {
      type: 'term',
      action: 'minus',
      expression: {
        type: 'parentheses',
        expression: {
          type: 'fraction',
          numerator: {

          },
          denominator: {

          }
        }
      }
    },
    {
      type: 'term',
      action: 'plus', //'minus', 'plus-minus', 'minus-plus'
      expression: {
        type: 'number',
        value: 1
      }
    },
    {
      type: 'term',
      action: 'plus',
      expression: {
        type: 'product',
        factors: [
          {
            type: 'factor',
            action: 'multiply',
            expression: {
              type: 'fraction',
              numerator: {
                type: 'number',
                value: 1
              },
              denominator: {
                type: 'signed',
                sign: 'minus',
                expression: {
                  type: 'number',
                  value: 2
                }
              }
            }
          },
          {
            type: 'factor',
            action: 'multiply',
            expression: {
              type: 'signed',
              sign: 'minus', //'plus', 'plus-minus', 'minus-plus'
              expression: {
                type: 'number',
                value: 54
              }
            }
          },
          {
            type: 'factor',
            action: 'divide',
            expression: {
              type: 'number',
              value: 2
            }
          }
        ]
      }
    },
    {
      type: 'term',
      action: 'minus',
      expression: {
        type: 'product',
        factors: [
          {
            type: 'factor',
            action: 'multiply',
            expression: {
              type: 'sin',
              expression: {
                type: 'parentheses',
                expression: {
                  type: 'sum',
                  terms: [
                    {
                      type: 'term',
                      action: 'plus',
                      expression: {
                        type: 'radical',
                        index: {
                          type: 'number',
                          value: 4
                        },
                        expression: {
                          type: 'number',
                          value: 205
                        }
                      }
                    },
                    {
                      type: 'term',
                      action: 'minus',
                      expression: {
                        type: 'constant',
                        name: 'euler'
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            type: 'factor',
            action: 'multiply',
            expression: {
              type: 'mixedFraction',
              integer: {
                type: "number",
                value: 2,
              },
              numerator: {
                type: "number",
                value: 3,
              },
              denominator: {
                type: "number",
                value: 4,
              },
            }
          }
        ]
      }
    }
  ]
};
