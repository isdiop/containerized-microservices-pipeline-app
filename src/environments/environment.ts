// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serviceEndpoint: 'http://localhost:4201/',
  appInsights: {
    instrumentationKey: 'e7d39fb3-9522-4298-9c12-4748fdcd6f50'
  },
  appVersion: ''
};
