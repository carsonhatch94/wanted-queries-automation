module.exports = (pageObject, warrantID, name) => {
    pageObject
        .navigate('http://localhost:3000/#/modify')
        .click('@warrantID')
        .setValue('@warrantID', warrantID)
        .click('@name')
        .setValue('@name', name)
        .click('@saveButton'),
    pageObject.expect.element('@results').text.to.contain('Valid')
    pageObject.click('@clearButton')
}