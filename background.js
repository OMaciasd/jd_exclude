console.log("Background script running...");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received!");
  if (request.message === "clicked_browser_action") {
    console.log("Browser action clicked!");
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "open_new_tab" });
    });
    }
  });
