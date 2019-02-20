var wanted = {}

let cancelWantedV = require('../testAssets/cancelWantedValid')

let cancelWantedI = require('../testAssets/cancelWantedInvalid')

// Test Plan: https://dmutah.atlassian.net/browse/QO2C-71

module.exports = {
    beforeEach: browser=> {
        wanted = browser.page.pageObjects()
        wanted.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.0')
    },
    after: browser=> {
        browser.end()
    },
// Valid, Invalid, Period https://dmutah.atlassian.net/browse/QO2C-72
'Valid Entry' : browser => {
    wanted
    cancelWantedV(wanted, '0123456789', 'abcde', '12/31/2020')
    cancelWantedV(wanted, '9876543210', 'qwerty', '12/31/2030')
    },
'Invalid Entry' : browser => {
    cancelWantedI(wanted, '012345678', 'abcd', '12/31/1899')
    cancelWantedI(wanted, '01234567890', 'kmdegnqwaepmsfjvhfreqiimdsgfghpshofdyewjrdksruvagqiomsurjneqpghfvrbcuzmrzpxajityyvviomrgmmweozrmobwntyrwyfszjduqlidlacrqfqufiailqdjkypxhcwajxbqdnkrauepjtfprbphghrrnpspuscnjqelpkhkqmhbwrfwgt', '12/31/99999')
    cancelWantedI(wanted, '0123456789', '.....', '11/11/2011')
}

}