# Origin Sandbox

> Cloned from [Component Library Playground](https://github.com/alanbsmith/component-library-playground).

## Overview

This is a simple starter to get you up and running with Styled Components. This is intended to provide:

* a lightweight Webpack config (for development and production)
* configuration for theming and fetching fonts from a CDN
* helpful tooling for development workflow
  * Test setup with Jest and Enzyme
  * ESLint / Stylelint

## Up & Running

Install dependencies:

```bash
yarn install
```

Fire up a development server:

```bash
yarn dev
```

Once the server is running, you can visit `http://localhost:8080/` in your browser.

## Linting

```bash
npm i -g eslint eslint-watch
```

or if you need permissions:

```bash
sudo npm i -g eslint eslint-watch
```

To run the linter once:

```bash
yarn lint
```

To run the watch task:

```bash
yarn lint:watch
```

## Testing

We're using Jest Snapshots for our initial test setup, though Enzyme and Expect are also available. The basic test setup lives in `./__tests__`. The main configuration for Jest lives in `package.json`.

Jest also gives us a test coverage tool for free, the setup is in `package.json`. Everything is set to 90% coverage by default, but your welcome to update that as needed.

To run the tests once:

```bash
yarn test
```

To run the watch script (for only relevant test files):

```bash
yarn test:watch
```

To run the watch script (for all test files):

```bash
yarn test:watchAll
```

To view the coverage report:

```bash
yarn test:coverage:report
```

## Review

If you'd like to run the linters and tests at once (this is a nice check to run before pushing to Github or deploys), you can run:

```bash
yarn review
```

## Production Build

To build your production assets and run the server:

```bash
yarn start
```

## Changelog

Looking for a particular version? View the [Changelog](CHANGELOG.mb)

## License

[MIT](LICENSE)

## Deplying to Heroku

This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_

```bash
heroku login
heroku create -a name-of-your-app
git push heroku master
heroku open
```

Heroku will follow the `build` command in your `package.json` and compile assets with `webpack.prod.config.js`. It runs the Express web server in `server.js`.

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).
