var extLogOn = false;

function extlog(mess) {
    if (extLogOn) console.log(mess);
}

extlog("Background started");

function sendMessage(tab) {
    browser.tabs
           .sendMessage(tab.id, 'message in from background')
           .then(response => {
                extlog(response)
           })
           .catch(error => {
               console.error(`Error: ${error}`)
           })
}

browser.browserAction.onClicked.addListener(sendMessage)

