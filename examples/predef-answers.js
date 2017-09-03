/**
 * Predefined answers example
 */

'use strict';
var inquirer = require('..');

var age = 30;

var first_name = [{
  type: 'input',
  name: 'first_name',
  message: 'What\'s your first name'
}];

var last_name = [{
  type: 'input',
  name: 'last_name',
  message: 'What\'s your last name',
  default: function () {
    return 'Doe';
  }
}];

inquirer.prompt(first_name, { age: age }).then(function (first) {
  inquirer.prompt(last_name, first  ).then(function (fullname) {
    console.log(JSON.stringify(fullname, null, '  '));
  });
});
