// ==UserScript==
// @name         Green Lattice
// @namespace    https://github.com/expyron/GreenLattice
// @version      0.1
// @author       Expyron
// @include      https://www.reddit.com/place*
// @grant        none
// ==/UserScript==



window.setTimeout(function(){
  console.log("Loading Green Lattice");
  var script = document.createElement('script');
  script.id = 'green_lattice';
  script.src = 'https://expyron.github.io/green_lattice/lattice.js';
  document.head.appendChild(script);
}, 2 * 1000);