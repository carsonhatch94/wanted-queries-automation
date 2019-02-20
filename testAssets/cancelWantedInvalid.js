module.exports = (pageObject, warrantID, reason, dateCancel) => {
    pageObject
        .navigate('http://localhost:3000/#/cancel')
        .click('@warrantID')
        .setValue('@warrantID', warrantID)
        .click('@reasonCancel')
        .setValue('@reasonCancel', reason)
        .click('@dateCancel')
        .setValue('@dateCancel', dateCancel)
        .click('@saveButton'),
    pageObject.expect.element('@results').text.to.contain('Errors Received:')
    pageObject.click('@clearButton')
}