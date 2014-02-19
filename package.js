Package.describe({
  summary: "Juniper.js allows you to use Parsley.js validation with X-editable forms."
});

Package.on_use(function (api) {
  api.add_files('lib/juniper.min.js', 'client');
  api.add_files('lib/juniper.css', 'client');
});