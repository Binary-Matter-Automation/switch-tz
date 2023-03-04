import { SwitchTZMessageSubscriber } from './modules/subscriber';


let contextMenuConvertToLocalSubscriber = new SwitchTZMessageSubscriber();

let contextMenuClickedElem;

document.addEventListener('contextmenu', (eventData) => {
    contextMenuClickedElem = eventData.target;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    contextMenuConvertToLocalSubscriber.handleMessageRequest(
        request, contextMenuClickedElem, sendResponse
    );
});
