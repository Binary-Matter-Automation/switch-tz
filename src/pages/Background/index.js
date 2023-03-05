import { createTempNotification } from "./modules/notifications";

let convertTZContextMenuItem = {
    "id": "convertTz",
    "title": "Convert to local",
    "contexts": ["all"]
};

chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create(convertTZContextMenuItem);
});

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
    if (clickData.menuItemId === 'convertTz') {
        // Request convert timezone of element text
        chrome.tabs.sendMessage(tab.id, 'convert_tz_context_menu_click_element_text', { frameId: clickData.frameId }, (response) => {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError);
                createTempNotification(
                    `CONTENT_SCRIPT_NOT_LOADED_${tab.id}`,
                    'Unexpected Error',
                    'Please reload page and try again'
                );
            } else if (!response.ok) {
                createTempNotification(
                    `CONVERT_TZ_ERROR_${tab.id}`,
                    'Convert datetime failed',
                    'Please reload page and try again'
                );
            }
        });
    }
});
