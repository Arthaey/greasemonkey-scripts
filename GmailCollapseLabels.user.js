// ==UserScript==
// @name           Collapse GMail Labels
// @namespace      http://sournote.org/scripts
// @description    Collapses gmail labels to a small box, which expands when hovered over
// @include        http*://mail.google.com/*
// @grant          GM_addStyle
// ==/UserScript==
// Originally from http://userscripts.org/scripts/show/65974

GM_addStyle(".av { width: 5px; text-indent: -9999px; }");
GM_addStyle(".av:hover { width: auto; text-indent: 0px; }");
