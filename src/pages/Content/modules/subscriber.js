
export class SwitchTZMessageSubscriber {
    constructor() { }

    convertToLocal(datetime) {
        let localDatetime = new Date(datetime);
        return localDatetime.toString();
    }

    handleMessageRequest(request, element, sendResponseCallback) {
        switch (request) {
            case 'convert_tz_context_menu_click_element_text':
                element.innerText = this.convertToLocal(element.innerText);
                sendResponseCallback({ 'ok': true });
        }
    }
}
