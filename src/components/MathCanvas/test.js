export default [
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
                    type: "e",
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
                type: "pi",
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
    type: "number",
    value: -54,
  },
  {
    type: "division",
  },
  {
    type: "number",
    value: 2,
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
        type: "e",
      },
    ],
  },
  {
    type: "multiplication",
  },
  {
    type: "fractionMixed",
    value: 2,
    numerator: [
      {
        type: "number",
        value: 3,
      },
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
