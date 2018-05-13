// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: 'fir-demo-78788.firebaseapp.com',
    databaseURL: 'https://fir-demo-78788.firebaseio.com',
    projectId: 'fir-demo-78788',
    storageBucket: 'fir-demo-78788.appspot.com',
    messagingSenderId: '252401946361'
  }
};
