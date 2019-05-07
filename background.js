chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    updateBadge();
});

function updateBadge(){
	chrome.storage.sync.get('percentage', function(data) {
		chrome.browserAction.setBadgeBackgroundColor({ color: [0, 160, 0, 150] });
		if(data.percentage == null){
			chrome.browserAction.setBadgeText({text: '50%'});
		} else {
			chrome.browserAction.setBadgeText({text: data.percentage + "%"});
		}
	});
}

updateBadge();