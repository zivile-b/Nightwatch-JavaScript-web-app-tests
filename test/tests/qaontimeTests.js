const datajs = require('../pages/data.js');
const utils = require('../helper/utils.js');
const issue = require('../pages/issue.js');
let data = datajs.getAll();

module.exports = {
  before: function (driver) {
    driver.maximizeWindow();
    // open landng page
    driver.url(driver.globals.web_url); 
  },

  after: function (driver) {
    driver.end();
  },
  
  'Should be able to login': function (driver) {
    driver.url(driver.globals.web_url);
        
    driver.setValue(data.home.user, 'YourText');
    driver.setValue(data.home.pass, 'YourText');
    driver.click('#field-login-loginSubmit');

    // wait and assert success message.

    driver.assert.containsText('div[id=site-name]', 'WebIssues');
  },

  'Should be able to create issue': async function (driver) {
    
    driver.url(data.issue.url);
    await driver.click(data.issue.addIssue);
    await driver.setValue(data.issue.name, 'YourText');
    await driver.setValue(data.issue.assignedTo, 'YourText');
    await driver.setValue(data.issue.description, 'Description text');
    await driver.click(data.issue.submit);
  
    // wait and assert success message.
    driver.assert.containsText(data.issue.bug, 'Bugs')
  },

  'Should be able to create issue by function': async function (driver) {
    let name = 'YourText';
    let assignedTo = 'YourText';
    let description = 'YourText';
    await issue.createIssue(driver, name, assignedTo, description);

    // wait and assert success message.
    driver.assert.containsText(data.issue.bug, 'Bugs')
  }
}
