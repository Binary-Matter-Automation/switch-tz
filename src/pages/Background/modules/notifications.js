
export function createTempNotification(notificationId, title, message, timeout = 2000) {
    chrome.notifications.create(notificationId, {
        type: 'basic',
        iconUrl: 'icon-34.png',
        title,
        message
    }, (notificationId) => {
        setTimeout(() => {
            chrome.notifications.clear(notificationId);
        }, timeout);
    });
}
