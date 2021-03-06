Package.describe({
  name: 'clinical:autopublish',
  version: '1.2.2',
  summary: 'Autopublish FHIR resources to logged in users (i.e. clinicians)',
  git: 'https://github.com/clinical-meteor/autopublish',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('ddp-rate-limiter@1.0.7');
  api.use('underscore');
  api.use('aldeed:collection2@3.0.0');
  api.use('ecmascript@0.9.0');

  api.use('clinical:hl7-resource-subscription@3.3.6');

  api.addFiles('autopublish.js', ['client', 'server']);
  api.addFiles('security.js', ['server']);

  api.addFiles('lib/PublishingHouse.js');

  api.export('PublishingHouse')
});

Npm.depends({
  "simpl-schema": "1.5.3"
})