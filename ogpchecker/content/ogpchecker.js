var OGPchecker = {
	check: function() {
		var url = "https://developers.facebook.com/tools/debug/og/object?q=";
		url += encodeURI(window.content.document.location.href);
		window.content.document.location.href = url;
	}
};

