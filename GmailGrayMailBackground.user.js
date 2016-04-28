// ==UserScript==
// @name           Gmail Gray Mail Background
// @namespace      http://arthaey.com/
// @description    Makes the background of emails gray & other parts transparent.
// @include        http*://mail.google.com/*
// @grant          GM_addStyle
// ==/UserScript==

GM_addStyle(".nH .aHU { background-color: #E5E9EC; border-radius: 5px }");
GM_addStyle(".iY .Bu, .TD { background-color: transparent }");
GM_addStyle(".UI .TB { border: none }");
