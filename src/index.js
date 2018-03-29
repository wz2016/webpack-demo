// using webpack to generate html home page and creat app.bundle.js for business logic
import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

// document.body.appendChild(component());

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();

    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
