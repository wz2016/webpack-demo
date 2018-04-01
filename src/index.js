import _ from 'lodash';
import printMe from './print.js';

async function getComponent() {
  var element = document.createElement('div');
  // var btn = document.createElement('button');
  //
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  //
  //
  // btn.innerHTML = 'Click me';
  // btn.onclick = printMe;
  //
  // element.appendChild(btn);

  // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

// document.body.appendChild(component());
//
// getComponent().then(commponent => {
//   document.body.appendChild(commponent);
// })
//
getComponent().then(component => {
  document.body.appendChild(component);
});
