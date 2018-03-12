Package.describe({
  name: 'clinical:autopublish',
  version: '1.0.13',
  summary: 'Autopublish FHIR resources to logged in users (i.e. clinicians)',
  git: 'https://github.com/clinical-meteor/autopublish',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.5.0');
  api.use('ecmascript@0.9.0');

  api.addFiles('clinical-autopublish.js', ['client', 'server']);
});
