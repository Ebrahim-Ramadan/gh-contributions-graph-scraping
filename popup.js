chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('Received message:', message);
    if (message.table) {
        displayTableData(message.table);
    }
});
