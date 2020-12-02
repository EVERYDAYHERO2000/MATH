import content from './words.js';

const dictionary = function (key) {
  key = key ? key.toLowerCase() : null;
  const lang = localStorage.lang || 'eng';
  let word = null;

  isComponent(this, addI18n);

  if (content[key]) {
    if (content[key][lang]) {
      word = content[key][lang];
    } else {
      word = content[key]['eng']
    }
  } else {
    word = key;
  }
  return word;
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
