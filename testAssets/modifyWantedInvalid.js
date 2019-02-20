module.exports = (pageObject, warrantID) => {
    pageObject
        .navigate('http://localhost:3000/#/modify')
        .click('@warrantID')
        .setValue('@warrantID', warrantID)
        .click('@saveButton'),
    pageObject.expect.element('@results').text.to.contain('Errors Received:')
    pageObject.click('@clearButton')
}