# Flickr Feeds Fetcher by Jakub Żywiec

### Online demo

I encourage you to view the online demo I pushed into my [private server](pitahaja.usermd.net/demo_flickr/index.html).

### Running up the project

1. Project could be run with dev expressJS-based server I prepared for development purposes (and not to kill the API ;)), or standard way using flickr API.
2. Which will be opened is decided in `.env` file, which is **REQUIRED** to be created. You can just copy `.env.sample` which is in repository.
3. In `.env` file, you can decide which server to run by setting `USE_DEV_SERVER` to either `true` or `false`. Please note that dev server will work only when `NODE_ENV` has value `development`, so setting `USE_DEV_SERVER=true` without `NODE_ENV=development` will result in using flicker API eventually.
4. If you want to check the dev server, please run `npm run server:dev` before running `npm run react:dev`.
5. Command `npm run react:build` builds production version, which should be generated into `dist` catalog and will use flickr API. Please set the `NODE_ENV=production` before building.
6. Did I mention you need to run `npm install` beforehand? ;)

### Errors

Running built version locally may result in [security warning](https://stackoverflow.com/questions/11768221/firefox-websocket-security-issue/12042843#12042843). In that case, please make sure you're running the app in server environment.

### What I weren't able to finish

- Writing missing tests
- Setting up Storybook
- WAI-Aria accesibility attributes adding
- Potentially dynamic imports and Suspense
- A few TODOs
- ...and probably so much more :)
