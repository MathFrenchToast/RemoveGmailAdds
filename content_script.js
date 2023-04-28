var logOn = false;

function extlog(mess) {
    if (logOn) console.log(mess);
}

extlog("js content started");

function maskAdds() {
// Put all the javascript code here, that you want to execute after page load.
var elList = document.querySelectorAll("tbody span");
elList.forEach(function(el) {
    if (el.innerHTML.indexOf("Annonce") !== -1) {
        // Do what you like with el
        extlog("found:"+el)
        var tr = el.closest("tr");
        tr.style.display = 'none';
    }
});
}


// On any click in the page remove add
window.addEventListener("click", () => {
    extlog("click detected, will apply method in 1s");
    // give time for content to load
    setTimeout(function(){        
        maskAdds();
    }, 1000);    
});

// if click on extension button is detected in bg script, an event will be received here
browser.runtime.onMessage.addListener((message, sender) => {
    maskAdds();
    return "ok";
});


