// ==UserScript==
// @name         Green Lattice
// @namespace    https://github.com/expyron/GreenLattice
// @version      0.2
// @author       Expyron
// @include      https://www.reddit.com/place*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==



window.setTimeout(function(){
  console.log("Loading Green Lattice");
  var script = document.createElement('script');
  script.id = 'green_lattice';
  script.src = 'https://expyron.github.io/green_lattice/lattice.js?t=' + (+ new Date());
  document.head.appendChild(script);
}, 2 * 1000);
