
jQuery.noConflict();

jQuery( function($) {

	/**
	 * For debug purpose only 
	 */
	function writeToConsole (text) {
		if (typeof console !== 'undefined') {
			console.log(text);    
		} else {
			alert(text);    
		}
	}




	/**
	 *	called once the main page is finished to load.
	 */
	function pageLoaded() {			
		writeToConsole("Page Loaded");
	}

	/* 
	 * Called when the main page is loaded
	 */
	pageLoaded();
}); 