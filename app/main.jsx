// import './stylesheets/main.css';
import React from 'react';
import ReactApp from './components/App';

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<ReactApp />, app);
}
