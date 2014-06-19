Package.describe ({
  name: 'node-rules',
  summary: 'Node-rules is a forward chaining Rules Engine, packaged for meteor.'
});

Npm.depends ({
  'node-rules': '2.2.3' // Where x.x.x is the version, e.g. 0.3.2
});

Package.on_use (function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

  /*
   * Add files that should be used with this
   * package.
   */
  api.add_files ('meteor-node-rules.js', 'server');

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
  api.export('NodeRules');
});

Package.on_test (function (api) {
  api.use ('node-rules');
  api.use ('tinytest');

  api.add_files ('meteor-node-rules_tests.js');
});
