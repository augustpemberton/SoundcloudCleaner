let i = document.querySelector('input'),
    o = document.querySelector('output');

o.innerHTML = i.value;

chrome.storage.sync.get('percentage', function(data) {
	if(typeof data.percentage === "undefined"){
		o.innerHTML = 50;
		i.value = 50;
		chrome.storage.sync.set({"percentage": 50});
	} else {
		o.innerHTML = data.percentage;
    	i.value = data.percentage;
	}
    
  });

// use 'change' instead to see the difference in response
i.addEventListener('input', function () {
  o.innerHTML = i.value;
  chrome.storage.sync.set({"percentage": i.value});
  chrome.runtime.sendMessage("update");
}, false);

