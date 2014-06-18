/*
 * Test this package by running this command from you app
 * folder:
 * 
 * > meteor test-packages node-rules
 *
 */

Tinytest.add('node-rules - main test', function (test) {
  test.isTrue(NodeRules != undefined,'NodeRules cannot be undefined');
});
