Package.describe({
  name: 'steveturner:autoform-wizard-iron-router',
  summary: 'Iron Router bindings for AutoForm Wizard.',
  version: '0.1.3',
  git: 'https://github.com/steveturner/meteor-wizard-iron-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'steveturner:autoform-wizard@0.7.1',
    'iron:router@1.0.0'
  ], 'client');
  
  api.addFiles([
    'client.js'
  ], 'client');
});