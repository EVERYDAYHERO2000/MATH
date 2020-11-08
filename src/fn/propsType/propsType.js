/*
* Тип size 
* размер элемента
*/
export const size = function (defaultValue) {

  defaultValue = defaultValue || 'm';

  return {
    type: String,
    default: defaultValue,
    validator: function (value) {
      return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
    }
  }
}

/*
* Тип color
* цвет элемента
*/
export const color = function (defaultValue) {

  defaultValue = defaultValue || 'black';
  return {
    type: String,
    default: defaultValue,
    validator: function (value) {
      return ['black', 'primary', 'active', 'content', 'danger', 'success'].indexOf(value) !== -1
    }
  }

}