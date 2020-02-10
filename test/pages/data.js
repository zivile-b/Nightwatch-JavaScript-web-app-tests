(function () {
  var data = {
    home: {
      url: '/',
      aboutUsMenu: '.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-10',
      user: 'input[id=field-login-login]',
      pass: 'input[id=field-login-password]'
    },
    search: {
      url: 'http://www.qaontime.com/register/client/index.php?folder=5',
      aboutUsMenu: '.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-10',
      searchINP : 'input[id=field-search-searchBox]',
      searchBTN : 'input[id=field-search-searchSubmit]',
      searchKT: '.row-3274 > td:nth-child(2) > a:nth-child(2)'
    },
    issue: {
      url: 'http://www.qaontime.com/register/client/index.php?folder=5',
      addIssue: '.toolbar > a:nth-child(2)',
      name: 'input[id=field-issues-issueName]',
      assignedTo: 'input[id=field-issues-value1]',
      description: '#field-issues-descriptionText',
      submit: 'input[id=field-issues-okSubmit]',
      bug: '.top-pane > div:nth-child(1) > h2:nth-child(1)'
    },
 
    about: {
      url: '/about-us',
      headerTitle: '.entry-header.group'
    },
    contact: {
      url: '/contact',
      firstNameField: '.smFieldFirstName.smform-control.smform-field-sizelarge.required',
      lastNameField: '.smFieldLastName.smform-control.smform-field-sizelarge.required',
      emailField: '.smform-control.smform-controllabelpos.required.smform-field-sizemedium',
      messageField: '.smform-control.smform-controllabelpos.smform-field-sizelarge.smform-control.smform-controllabelpostextarea',
      submitButton: '.smform-submit',
      successMessage: '.smform-ajax-msg'
    }

  };
  exports.getAll = function () {
    return data;
  };

})();

