document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('drugi').addEventListener('click', clickHandler);
})
function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}
var activeTabId;
doInCurrentTab( function(tab){ activeTabId = tab.id } );
function clickHandler(e) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "m1_to_m0.js"});
    });
   
}
