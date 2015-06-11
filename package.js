Package.describe({
  name: 'forwarder:autoform-wizard-iron-router',
  summary: 'Flow Router bindings for AutoForm Wizard.',
  version: '0.1.0',
  git: 'https://github.com/forwarder/meteor-wizard-iron-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'forwarder:autoform-wizard@0.7.0',
    'iron:router'
  ], 'client');
  
  api.addFiles([
    'client.js'
  ], 'client');
});