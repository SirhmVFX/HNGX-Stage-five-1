chrome.tabs.onUpdated.addListener((tabId, chnageInfo, tab) => {
  if (chnageInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./content.js"],
      })
      .then(() => {
        console.log("content script injected");
      })
      .catch((err) => console.log(err, "error in backgound"));
  }
});
