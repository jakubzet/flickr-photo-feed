# Flickr Feeds Fetcher by Jakub Żywiec

## Running up the project

1. Project could be run with dev express-based server I prepared, or standard way using flickr API.
2. Which will be opened is decided in `.env` file, which NEEDS to be created. You can just copy `.env.sample` which is in repository.
3. In `.env` file, you can decide which server to run by setting `USE_DEV_SERVER` to either `true` or `false`. Please note that dev server will work only when `NODE_ENV` has value `development`, so setting `USE_DEV_SERVER=true` without `NODE_ENV=development` will result in using flicker API eventually.
4. If you're using dev server, please run `npm run server:dev` before running either `npm run react:dev` or `npm run react:start`.
5. Did I mention you need to run `npm install` beforehand? ;)

## What I weren't able to finish

- Writing missing tests
- Setting up Storybook
- WAI-Aria accesibility attributes adding
- Potentially dynamic imports and Suspense
- A few TODOs
- ...and probably so much more :)
