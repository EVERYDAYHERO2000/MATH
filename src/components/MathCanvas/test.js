export default [
    {
        type: 'number',
        value: 2
    },
    {
        type: 'addition'
    },
    {
        type: 'number',
        value: 1
    },
    {
        type: 'subtraction'
    },
    {
        type: 'fraction',
        numerator: [
            {
                type: 'fraction',
                numerator: [
                    {
                        type: 'number',
                        value: 24
                    },
                    {
                        type: 'subtraction'
                    },
                    {
                        type: 'number',
                        value: 5
                    }
                ],
                denominator: [
                    {
                        type: 'number',
                        value: 1
                    },
                    {
                        type: 'addition'
                    },
                    {
                        type: 'number',
                        value: 2245
                    }
                ]
            }
        ],
        denominator: [
            {
                type: 'number',
                value: 2
            }
        ]
    },
    {
        type: 'addition'
    },
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