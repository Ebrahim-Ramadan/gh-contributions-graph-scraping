const displayTableData = () => {
    const dataContainer = document.getElementById('ghcontributions');
    dataContainer.textContent = 'kkkkk';
}

  
// Function to scrape the table and send the data to the extension popup
function scrapeTableAndSendData() {
    const table = document.querySelector('.ContributionCalendar-grid.js-calendar-graph-table');
    console.log('table', table);
    if (table) {
      const rows = Array.from(table.querySelectorAll('tr'));
      const tableData = rows.map(row =>
        Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim())
      );
      // Send the table data to the extension popup
      chrome.runtime.sendMessage({ table });
    }
  }
  
  // Run the scraping and data sending function when the page is loaded
  window.addEventListener('load', scrapeTableAndSendData);
  