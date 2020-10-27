export const Greek = function (n, isCapitalize) {
    let name = '';

    switch (n.toLowerCase()) {
        case 'a':
            name = 'α';
            break;
        case 'b':
            name = 'β';
            break;
        case 'c':
            name = 'γ';
            break;
        case 'd':
            name = 'δ';
            break;
        case 'e':
            name = 'ε';
            break;
        case 'z':
            name = 'ζ';
            break;
        case 'h':
            name = 'η';
            break;
        case 'q':
            name = 'θ';
            break;
        case 'i':
            name = 'ι';
            break;
        case 'k':
            name = 'κ';
            break;
        case 'l':
            name = 'λ';
            break;
        case 'm':
            name = 'μ';
            break;
        case 'n':
            name = 'ν';
            break;
        case 'g':
            name = 'ξ';
            break;
        case 'o':
            name = 'ο';
            break;
        case 'p':
            name = 'π';
            break;
        case 'r':
            name = 'ρ';
            break;
        case 's':
            name = 'ς';
            break;
        case 't':
            name = 'τ';
            break;
        case 'f':
            name = 'φ';
            break;
        case 'x':
            name = 'χ';
            break;
        case 'y':
            name = 'ψ';
            break;
        case 'w':
            name = 'ω';
            break;
    }

    return (isCapitalize) ? name.toUpperCase() : name
}

export const Constant = function(n) {
    let constant = {};

    switch ((n+'').toLowerCase()) {
        case '0':
            constant = {
                sign: '0',
                value: 0
            }
            break;
        case '1':
            constant = {
                sign: '1',
                value: 1
            }
            break;
        case 'pi':
            constant = {
                sign: 'π',
                value: 3.141592653589793
            }
            break;
        case 'tau':
                constant = {
                    sign: 'τ',
                    value: 6.283185307179586
                }
                break;    
        case 'e':
            constant = {
                sign: 'e',
                value: 2.718281828459045
            } 
            break;
        case 'gamma':
            constant = {
                sign: 'γ',
                value: 0.577215664901532 
            } 
            break;
        case 'phi':
            constant = {
                sign: 'φ',
                value: 1.618033988749894
            }
            break;
        case 'bernstein':
            constant = {
                sign: 'β',
                value: 0.280169499023869
            }
            break;                     
    }
    return constant;
}

export const MathSign = function(n){
    let sign = {}

    switch (n) {
        case '*':
            sign = {
                code: '*',
                default: '⋅',
                school: '×'
            }
            break;
        case '/':
            sign = {
                code: '/',
                default: ':',
                school: '÷'
            } 
            break;
        case 'integral':
            sign = {
                code: '∫',
                default: '∫',
                school: '∫'
            } 
            break;           
    }

    return sign
}