import _ from 'lodash';
// index.js
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack1'], ' ');

  return element;
}

document.body.appendChild(component());
