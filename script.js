function go() {
    var app = document.getElementById("app");
    $(".stream__list .lazyLoadingList .lazyLoadingList__list").children().each(function(i,post){
      if(jQuery(post).find("soundContext__repost") != null){
        jQuery(post).remove();
      }
    })
    var containerMutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          if(mutation.type == "childList" && mutation.addedNodes.length > 0 && mutation.addedNodes[0].className == "soundList__item" && mutation.addedNodes[0].innerHTML.includes("reposted by")){
              chrome.storage.sync.get('percentage', function(data) {
                if(Math.random() > 1 - (data.percentage / 100)){
                    mutation.addedNodes[0].remove();
                }
              });
              
          }
      });
    });

    containerMutationObserver.observe(app, {
      childList: true,
      subtree: true,
    });

    

    
}

window.onload=function(){
  if (typeof jQuery == 'undefined') {
    console.log("error loading jquery")
  } else {
    console.log(jQuery);
    go();
  }
  

}


//checkExisting();
