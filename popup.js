// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Check if the request is for the table data
    if (request.tableData) {
      // Display the table data in the ghcontributions element
      const ghContributions = document.getElementById('ghcontributions');
      ghContributions.innerHTML = request.tableData;
    }
  });