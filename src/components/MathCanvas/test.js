const data = [
  {
    type: "number",
    value: 2,
  },
  {
    type: "addition",
  },
  {
    type: "number",
    value: 1,
  },
  {
    type: "subtraction",
  },
  {
    type: "parentheses",
    expression: [
      {
        type: "fraction",
        numerator: [
          {
            type: "fraction",
            numerator: [
              {
                type: "number",
                value: 24,
              },
              {
                type: "subtraction",
              },
              {
                type: "fraction",
                numerator: [
                  {
                    type: "number",
                    value: 1,
                  },
                ],
                denominator: [
                  {
                    type: "constE",
                  },
                ],
              },
            ],
            denominator: [
              {
                type: "number",
                value: 1,
              },
              {
                type: "addition",
              },
              {
                type: "fraction",
                numerator: [
                  {
                    type: "number",
                    value: 1,
                  },
                ],
                denominator: [
                  {
                    type: "number",
                    value: 2245,
                  },
                ],
              },
            ],
          },
        ],
        denominator: [
          {
            type: "fraction",
            numerator: [
              {
                type: "number",
                value: 1,
              },
            ],
            denominator: [
              {
                type: "number",
                value: 2,
              },
            ],
          },
          {
            type: "addition",
          },
          {
            type: "parentheses",
            expression: [
              {
                type: "number",
                value: 2,
              },
              {
                type: "subtraction",
              },
              {
                type: "constPi",
              },
            ],
          },
        ],
      },
    ]
  },
  {
    type: "addition",
  },
  {
    type: "fraction",
    numerator: [
      {
        type: "number",
        value: 1,
      },
    ],
    denominator: [
      {
        type: "number",
        value: -2,
      },
    ],
  },
  {
    type: "multiplication",
  },
  {
      type: 'exponent',
      base: [
        {
            type: 'number',
            value: 54
        }
      ],
      exponent: [
        {
            type: 'fraction',
            numerator: [
                {
                    type: 'number',
                    value: 1
                }
            ],
            denominator: [
                {
                    type: 'number',
                    value: 2
                }
            ]
        }
      ]
  },
  {
    type: "division",
  },
  {
    type: "exponent",
    base: [
        {
            type: 'number',
            value: 2
        }
    ],
    exponent: [
        {
            type: 'number',
            value: 5
        }
    ]
  },
  {
    type: "subtraction",
  },
  {
    type: "sin",
    expression: [
      {
        type: "radical",
        index: [
          {
            type: "number",
            value: 4,
          },
        ],
        expression: [
          {
            type: "number",
            value: 205,
          },
        ],
      },
      {
        type: "subtraction",
      },
      {
        type: "constE",
      },
    ],
  },
  {
    type: "multiplication",
  },
  {
    type: "fractionMixed",
    integer: {
        type: 'number',
        value: 2
    },
    numerator: [
      {
          type: 'exponent',
          base: [
              {
                  type: 'number',
                  value: 3  
              }
          ],
          exponent: [
              {
                  type: 'number',
                  value: 2
              }
          ]
      }
    ],
    denominator: [
      {
        type: "number",
        value: 4,
      },
    ],
  },
  {
    type: "subtraction",
  },
  {
    type: "radical",
    index: [
      {
        type: "number",
        value: 3,
      },
    ],
    expression: [
      {
        type: "number",
        value: 1488,
      },
      {
        type: "addition",
      },
      {
        type: "fraction",
        numerator: [
          {
            type: "number",
            value: 78,
          },
          {
            type: "addition",
          },
          {
            type: "cos",
            expression: [
              {
                type: "number",
                value: 56,
              },
            ],
          },
        ],
        denominator: [
          {
            type: "number",
            value: 2,
          },
        ],
      },
    ],
  },
  {
    type: "subtraction",
  },
  {
    type: "radical",
    index: [
      {
        type: "number",
        value: 9,
      },
      {
        type: "multiplication",
      },
      {
        type: "number",
        value: 2,
      },
    ],
    expression: [
      {
        type: "radical",
        expression: [
          {
            type: "number",
            value: 42,
          },
        ],
      },
    ],
  },
];

export default (function(data) {
    
    let counter = 1;

    const setId = function(arr) {

        for (let i in arr) {
            arr[i].id = counter;
            counter++;

            if (arr[i].expression) setId(arr[i].expression);
            if (arr[i].base) setId(arr[i].base);
            if (arr[i].exponent) setId(arr[i].exponent);
            if (arr[i].name == 'radical' && arr[i].index) setId(arr[i].index);
            if (arr[i].numerator) setId(arr[i].numerator);
            if (arr[i].denominator) setId(arr[i].denominator);
        }

    }

    setId(data);

    return data
})(data)