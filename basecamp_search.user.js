// ==UserScript==
// @name           Basecamp Search
// @namespace      uk.org.longwayaround
// @description    Adds a search field to basecamp to search the current project
// @include        https://astun.basecamphq.com/projects/*
// ==/UserScript==

(function() {
    var prjNum = window.location.pathname.split('/')[2];
    var header = document.getElementById('Header');
    var input = document.createElement('input');
    input.id = 'search';
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.right = '23px';
    input.style.top = '24px';
    input.style.width = '232px';
    header.appendChild(input);
    input.addEventListener('keyup',function(e) {
	if (e.keyCode == 13) {
	    window.location.href='/projects/' + prjNum + '/search?scope=all&terms=' + input.value;
	}
    },false);
})();
