// ==UserScript==
// @name Alt+g Youtube Cinema
// @description Alt+g Hides search bar, moves player to top left
// @version 1.1
// @grant none
// @match *youtube.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function(){
	var youtubeTopBarHidden = false;
	document.addEventListener('keydown', function(e) {
		try {
			// pressed alt+g
			if (e.keyCode == 71 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
				if (youtubeTopBarHidden){
					// Clear
					console.log('Unhiding');
					$('div#masthead-container').show()
					const p = $('div#player')
					p.css('position', '')
					p.css('top', '')
					p.css('left', '')
					p.css('z-index', '')
				} else {
					console.log('Hiding');
					$('div#masthead-container').hide()
					const p = $('div#player')
					p.css('position', 'absolute')
					p.css('top', 0)
					p.css('left', 0)
					p.css('z-index', 1000)
				}
				youtubeTopBarHidden = !youtubeTopBarHidden;
			}
		} catch (e){
			console.error(e)
		}
	}, false);
})();
