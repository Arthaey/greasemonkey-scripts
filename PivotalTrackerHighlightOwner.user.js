// ==UserScript==
// @name         Highlight Pivotal Tracker Story Owner
// @namespace    http://arthaey.com/
// @version      1.0
// @description  Highlight your own stories
// @author       Arthaey Angosii <arthaey@gmail.com>
// @match        https://www.pivotaltracker.com/n/projects/*
// @grant        none
// ==/UserScript==

(function() {
  const owner = document.querySelector(".AvatarDetails__name").innerText;

  function highlight() {
    document.querySelectorAll(`[title="${owner}"]`).forEach(elem => {
      elem.style.backgroundColor = "#FFEB3B";
    });
  }

  setInterval(highlight, 1000); // in case of new or modified stories
})();
