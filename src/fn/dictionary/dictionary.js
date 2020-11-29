const content = {
  'main menu': {
    eng: 'Main Menu',
    ru: 'Главное меню',
    zh: '主菜单',
  },
  elements: {
    eng: 'Elements',
    ru: 'Элементы',
    zh: '要件',
  },
  close: {
    eng: 'Close',
    ru: 'Закрыть',
    zh: '关闭',
  },
  open: {
    eng: 'Open',
    ru: 'Открыть',
    zh: '打开它',
  },
  import: {
    eng: 'Import',
    ru: 'Импортировать',
    zh: '导入',
  },
  export: {
    eng: 'Export',
    ru: 'Экспортировать',
    zh: '导出',
  },
  'import math expression': {
    eng: 'Import Math Expression',
    ru: 'Импортировать математическое выражение',
    zh: '导入数学表达式',
  },
  'import expression': {
    eng: 'Import Expression',
    ru: 'Импортировать выражение',
    zh: '导入表达式',
  },
  'math expression': {
    eng: 'Math Expression',
    ru: 'Математическое выражение',
    zh: '数学表达式',
  },
  'export as png': {
    eng: 'Export as png',
    ru: 'Экспортировать как png',
    zh: '导出为png',
  },
  'app settings': {
    eng: 'App Settings',
    ru: 'Настройки приложения',
    zh: '应用程序设置',
  },
  'dark ui theme': {
    eng: 'Dark UI theme',
    ru: 'Тёмная тема',
    zh: '黑暗主题',
  },
  math: {
    eng: 'Math',
    ru: 'Математика',
    zh: '数学',
  },
  trigonometry: {
    eng: 'Trigonometry',
    ru: 'Тригонометрия',
    zh: '三角学',
  },
  constant: {
    eng: 'Constant',
    ru: 'Константы',
    zh: '常量',
  },
  variable: {
    eng: 'Variable',
    ru: 'Переменные',
    zh: '变量',
  },
  'element name': {
    eng: 'Element name',
    ru: 'Название элемента',
    zh: '元素名称',
  },
  'absolute value': {
    eng: 'Absolute value',
    ru: 'Модуль числа',
    zh: '绝对值'
  },
  'addition': {
    eng: 'Addition',
    ru: 'Сложение',
    zh: '加成'
  },
  'subtraction': {
    eng: 'Subtraction',
    ru: 'Вычетание',
    zh: '减法'
  },
  'approximation': {
    eng: 'Approximation',
    ru: 'Приближение',
    zh: '近似'
  },
  'cosine': {
    eng: 'Cosine',
    ru: 'Косинус',
    zh: '餘弦'
  },
  'cotangent': {
    eng: 'Cotangent',
    ru: 'Котангенс',
    zh: '餘切'
  },
  'cosecant': {
    eng: 'Cosecant',
    ru: 'Косеканс',
    zh: 'sec割'
  },
  'division': {
    eng: 'Division',
    ru: 'Деление',
    zh: '師'
  },
  'equality': {
    eng: 'Equality',
    ru: 'Равенство',
    zh: '平等'
  },
  'exponent': {
    eng: 'Exponent',
    ru: 'Степень',
    zh: '指數'
  },
  'fraction': {
    eng: 'Fraction',
    ru: 'Дробь',
    zh: '分數'
  },
  'mixed number': {
    eng: 'Mixed Number',
    ru: 'Смешенное число',
    zh: '混合數字'
  },
  'inequality': {
    eng: 'Inequality',
    ru: 'Неравенство',
    zh: '不等式'
  },
  'less than or equal to': {
    eng: 'Less than or equal to',
    ru: 'Меньше или равно',
    zh: '小於或等於'
  },
  'greater than or equal to': {
    eng: 'Greater than or equal to',
    ru: 'Больше или равно',
    zh: '大於或等於'
  },
  'less than': {
    eng: 'Less than',
    ru: 'Меньше',
    zh: '少於'
  },
  'greater than': {
    eng: 'Greater than',
    ru: 'Больше',
    zh: '比...更棒'
  },
  'system': {
    eng: 'System',
    ru: 'Система',
    zh: '系統'
  },
  'integral': {
    eng: 'Integral',
    ru: 'Интеграл',
    zh: '積分'
  },
  'logarithm': {
    eng: 'Logarithm',
    ru: 'Логарифм',
    zh: '對數'
  },
  'mod': {
    eng: 'Mod',
    ru: 'Мода',
    zh: '數模'
  },
  'multiplication': {
    eng: 'Multiplication',
    ru: 'Умножение',
    zh: '乘法'
  },
  'calculate inside first': {
    eng: 'Calculate inside first',
    ru: 'Скобки',
    zh: '首先計算內部'
  },
  'per-mille': {
    eng: 'Per-mille',
    ru: 'Промилле',
    zh: '永久居民'
  },
  'percent': {
    eng: 'Percent',
    ru: 'Проценты',
    zh: '百分率'
  },
  'both plus and minus': {
    eng: 'Both plus and minus',
    ru: 'Плюс-минус',
    zh: '加號和減號'
  },
  'radical' : {
    eng: 'Radical',
    ru: 'Корень',
    zh: '激進'
  },
  'secant': {
    eng: 'Secant',
    ru: 'Секант',
    zh: '割線'
  },
  'sine': {
    eng: 'Sine',
    ru: 'Синус',
    zh: '正弦波'
  },
  'tangent': {
    eng: 'Tangent',
    ru: 'Тангенс',
    zh: '切線'
  },
  'constant': {
    eng: 'constant',
    ru: 'константа',
    zh: '不變'
  },
  'change language': {
    eng: 'Change language',
    ru: 'Язык интерфейса',
    zh: '更改语言'
  }

};

const dictionary = function (key) {
  key = key ? key.toLowerCase() : null;
  const lang = localStorage.lang || 'eng';
  let word = null;

  isComponent(this, addI18n);

  return (content[key][lang]) ? content[key][lang] : content[key]['eng'];
};

const isComponent = function(current, callback) {
  if (typeof current == 'object') callback(current)
  return false;
}
const addI18n = function(component){
  if (!component.$data.i18n){
    if (!window.lang) window.lang = [];
    window.lang.push(component);
  }

  component.$data.i18n = true;
}

export default dictionary;
