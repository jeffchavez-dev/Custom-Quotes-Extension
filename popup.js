chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "showQuote") {
      document.getElementById("quote").textContent = request.quote;
    }
  });