function playPauseVideo(){document.querySelectorAll("video").forEach((function(e){e.muted=!1;var o=e.play();void 0!==o&&o.then((function(o){new IntersectionObserver((function(o){o.forEach((function(o){1===o.intersectionRatio||e.paused||e.pause()}))}),{threshold:.2}).observe(e)}))}))}playPauseVideo();
//# sourceMappingURL=index.c87e854e.js.map
