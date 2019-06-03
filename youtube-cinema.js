// ==UserScript==
// @name     Alt+g Hides Youtube top bar
// @version  1
// @grant    none
// ==/UserScript==

(function(){
	var youtubeTopBarHidden = false;
	document.addEventListener('keydown', function(e) {
		// pressed alt+g
		if (e.keyCode == 71 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
			if (youtubeTopBarHidden){
				// Clear
				console.log('Unhiding');
				document.getElementById('masthead-container').style.display = '';
				document.getElementById('page-manager').style.marginTop = '';
				var p = document.getElementById('primary');
				p.style.padding = '';
				p.style.margin = '';
			} else {
				console.log('Hiding');
				document.getElementById('masthead-container').style.display = 'none';
				document.getElementById('page-manager').style.margin = '0';
				var p = document.getElementById('primary');
				p.style.padding = '0';
				p.style.margin = '0';
			}
			youtubeTopBarHidden = !youtubeTopBarHidden;
		}
	}, false);
})();
