function scrapeTableAndSendData() {
  const table = document.querySelector('.ContributionCalendar-grid.js-calendar-graph-table');
  console.log('table', table);

  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({tableData: table.innerHTML}, function(response) {
      console.log(response);
    });
  }
}

// Run the scraping and data sending function when the page is loaded
window.addEventListener('load', scrapeTableAndSendData);