var modify = {}

let modifyWantedV = require('../testAssets/modifyWantedValid')

let modifyWantedI = require('../testAssets/modifyWantedInvalid')

//To do these next two tests, you have to change the url in the enterWantedValid and Invalid functions as well as un comment the tests below
let characterTestV = require('../testAssets/enterWantedValid')

let characterTestI = require('../testAssets/enterWantedInvalid')

// Test Plan: https://dmutah.atlassian.net/browse/QO2C-71

module.exports = {
    beforeEach: browser=> {
        modify = browser.page.pageObjects()
        modify.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.0')
    },
    after: browser=> {
        browser.end()
    },
// Valid, Invalid, Period https://dmutah.atlassian.net/browse/QO2C-73

    'Valid Entry' : browser => {
    modify
    modifyWantedV(modify, '0123456789', 'Horatio Hornblower')
    modifyWantedV(modify, '9876546210', 'Bob Sagat')
},
'Invalid Entry' : browser => {
    modifyWantedI(modify, '0123456789')

},
// 'Character Length and Type'
'Valid Entry' : browser => {
    // characterTestV(modify, 'abc12345=', 'ab&', 'abc123456', '1a&', 'M', 'W', '606', '180', 'aa&', 'ab12&', '08/17/1994', '1a&', 'UT', '08/17/1920', 'abc12', 'UT', '08/17/1994')
        },
'Invalid Entry' : browser => {
        //testing character type
        // characterTestI(modify, '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&', '1a&')
        // character length, short
        // characterTestI(modify, '1a&zzzzz', '1', '1a&', '1a', 'm', 'w', '11', ' ', 'aa', '1a&g', '123456789', ' ', 'a', '123456789', '1a&a', 'a', '123456789')
        // Periods
        // characterTestI(modify, '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..')
    
        }



}
