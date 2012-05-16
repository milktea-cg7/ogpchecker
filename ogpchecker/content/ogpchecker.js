var OGPchecker = {
	check: function() {
		var url = 'https://developers.facebook.com/tools/debug/og/object?q=' + window._content.document.location.href;
		window._content.document.location.href = url;
	}
};

