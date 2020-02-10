(function () {
  var issue = {
  
      url: 'http://www.qaontime.com/register/client/index.php?folder=5',
      addIssue: '.toolbar > a:nth-child(2)',
      name: 'input[id=field-issues-issueName]',
      assignedTo: 'input[id=field-issues-value1]',
      description: '#field-issues-descriptionText',
      submit: 'input[id=field-issues-okSubmit]',
      bug: '.top-pane > div:nth-child(1) > h2:nth-child(1)'
    }
 
    
  exports.getAll = function () {
    return 'data';
  };

  //other function

  exports.createIssue = async function (driver, name, assignedTo, description) {
    await driver.click(issue.addIssue);
    await driver.setValue(issue.name, name);
    await driver.setValue(issue.assignedTo, assignedTo);
    await driver.setValue(issue.description, description);
    await driver.click(issue.submit);
  };

})();

