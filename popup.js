// content_script.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "showQuote") {
      const quoteContainer = document.createElement("div");
      quoteContainer.classList.add("quote-container"); // Add a CSS class for styling
      quoteContainer.textContent = request.quote;
      document.body.appendChild(quoteContainer);
    }
  });