// ==UserScript==
// @name         Green Lattice
// @namespace    https://github.com/expyron/GreenLattice
// @version      0.1
// @author       Expyron
// @include        https://www.reddit.com/place
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'green_lattice';
script.src = 'https://raw.githubusercontent.com/Expyron/green_lattice/master/lattice.js';
document.head.appendChild(script);