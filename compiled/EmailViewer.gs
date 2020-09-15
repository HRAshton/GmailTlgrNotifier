// Compiled using ts2gas 3.6.1 (TypeScript 3.8.3)
function doGet(p) {
    try {
        var mailId = p.parameters["msgId"];
        var message = GmailApp.getMessageById(mailId);
        var template = HtmlService.createTemplateFromFile("EmailViewerTemplate");
        template.data = {
            From: message.getFrom(),
            To: message.getTo(),
            Copy: message.getCc(),
            Subject: message.getSubject(),
            Body: message.getBody()
        };
        return template.evaluate();
    }
    catch (_a) {
        return ContentService.createTextOutput("Email not found");
    }
}
