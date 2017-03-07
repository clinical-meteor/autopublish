Package.describe({
  name: 'clinical:autopublish',
  version: '1.0.3',
  summary: 'Autopublish FHIR resources to logged in users (i.e. clinicians)',
  git: 'https://github.com/clinical-meteor/autopublish',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  
  api.addFiles('clinical-autopublish.js');
});
