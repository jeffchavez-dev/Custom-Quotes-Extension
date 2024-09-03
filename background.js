chrome.alarms.create("daily-quote", {
    periodInMinutes: 1440 // Set the alarm to repeat every 24 hours
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "daily-quote") {
      fetchQuote();
    }
  });
  
// background.js
function fetchQuote() {
    // ... fetch quote logic
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: "showQuote", quote: data.quote });
    });
  }