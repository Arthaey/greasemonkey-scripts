// ==UserScript==
// @name         Highlight Pivotal Tracker Story Owner
// @namespace    http://arthaey.com/
// @version      1.1
// @description  Highlight your own stories
// @author       Arthaey Angosii <arthaey@gmail.com>
// @match        https://www.pivotaltracker.com/n/projects/*
// @grant        none
// ==/UserScript==

(function() {
  let intervalId;
  const initialHighlightDelay = 1000;
  const checkForUpdatesDelay = 10000;

  function run() {
    const profileButton = document.querySelector(".Dropdown button");
    if (profileButton) {
      profileButton.click();
      const owner = document.querySelector(".AvatarDetails__name").innerText;
      profileButton.click();

      const highlightOwner = function() { highlight(owner) };
      clearInterval(intervalId);
      setTimeout(highlightOwner, initialHighlightDelay);
      setInterval(highlightOwner, checkForUpdatesDelay);
    }
  }

  function highlight(owner) {
    if (!owner) return;
    const stories = document.querySelectorAll(`[title="${owner}"]`);
    stories.forEach(elem => elem.style.backgroundColor = "#FFEB3B");
  }

  intervalId = setInterval(run, 500); // takes a moment to load

})();
