{
	"name": "1-click timer plus",
	"description": "The easiest way to set several times with an intuitive user interface",
	"version": "0.1",
	"browser_action": {
		"default_icon": "images/popupicon.png",
		"default_title": "1-click timer plus",
		"default_popup": "index.html"
	},
	"permissions": [
		"background",
		"notifications"
	],
	"icons":{
		"16":"images/logo16.png",
		"48":"images/logo48.png",
		"128":"images/logo128.png"
	},
	"background": {
		"page": "background.html"
	}
}