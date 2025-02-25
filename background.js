console.log("Background script running...");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);

  if (request.message === "clicked_browser_action") {
    console.log("Browser action clicked!");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error("Error querying tabs:", chrome.runtime.lastError);
        return;
      }

      if (tabs.length === 0) {
        console.warn("No active tabs found.");
        return;
      }

      chrome.tabs.sendMessage(tabs[0].id, { message: "open_new_tab" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message to content script:", chrome.runtime.lastError);
        } else {
          console.log("Message sent successfully:", response);
        }
      });
    });
  }
});
