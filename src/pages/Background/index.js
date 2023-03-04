let convertTZContextMenuItem = {
    "id": "convertTz",
    "title": "Convert to local",
    "contexts": ["all"]
};

chrome.contextMenus.create(convertTZContextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
    if (clickData.menuItemId === 'convertTz') {
        // Request convert timezone of element text
        chrome.tabs.sendMessage(tab.id, 'convert_tz_context_menu_click_element_text', { frameId: clickData.frameId }, (response) => {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError);
                alert('An unexpected error occured');
            } else if (!response.ok) {
                alert('Could not convert timezone');
            }
        });
    }
});
