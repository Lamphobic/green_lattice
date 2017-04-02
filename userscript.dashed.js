// ==UserScript==
// @name         Green Lattice (dashed)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Green Lattice cleaner (dashed fork)
// @author       Expyron, dashed
// @include      https://www.reddit.com/place*
// @updateURL    https://dashed.github.io/green_lattice/userscript.dashed.js
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_addStyle
// @grant   GM_xmlhttpRequest
// ==/UserScript==
(function() {
    window.setTimeout(function(){
        console.log("Loading Green Lattice (dashed)");
        var script = document.createElement('script');
        script.id = 'green_lattice';
        script.src = 'https://dashed.github.io/green_lattice/lattice.js?t=' + (+ new Date());
        document.head.appendChild(script);
    }, 2 * 1000);
})();
