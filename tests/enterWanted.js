var enter = {}

let enterWantedV = require('../testAssets/enterWantedValid')

let enterWantedI = require('../testAssets/enterWantedInvalid')

// Test Plan: https://dmutah.atlassian.net/browse/QO2C-71

module.exports = {
    beforeEach: browser=> {
        enter = browser.page.pageObjects()
        enter.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.0')
    },
    after: browser=> {
        browser.end()
    },
//Valid, Invalid, Period https://dmutah.atlassian.net/browse/QO2C-74
'Valid Entry' : browser => {
    enterWantedV(enter, 'abc12345=', 'ab&', 'abc123456', '1a&', 'M', 'W', '606', '180', 'aa&', 'ab12&', '08/17/1994', '1a&', 'UT', '08/17/1920', 'abc12', 'UT', '08/17/1994')
    },
'Invalid Entry' : browser => {
    //testing character type
    enterWantedI(enter, '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&')
    // character length, short
    enterWantedI(enter, '1a&zzzzz', '1', '1a&', '1a', 'm', 'w', '11', ' ', 'aa', '1a&g', '123456789', ' ', 'a', '123456789', '1a&a', 'a', '123456789')
    // Periods
    enterWantedI(enter, '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..')

    }
}