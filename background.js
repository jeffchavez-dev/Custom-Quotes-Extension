chrome.alarms.create("daily-quote", {
    periodInMinutes: 1440 // Set the alarm to repeat every 24 hours
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "daily-quote") {
      fetchQuote();
    }
  });
  
  function fetchQuote() {
    // Replace with your quote API or data source
    fetch("https://api.example.com/quote")
      .then((response) => response.json())
      .then((data) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { message: "showQuote", quote: data.quote });
        });
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }