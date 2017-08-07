# electron-react-webpack-boilerplate

Electron + webpack + Babel + React + CSS Modules + cssnext

REQUIRED: Node.js >= v6 + Yarn

## Getting Started

```sh
git clone https://github.com/your-name/your-project.git
cd your-project
git remote add upstream https://github.com/rot1024/electron-webpack-react-boilerplate.git
git fetch upstream
git merge upstream/master
yarn
```

## Follow This Boilerplate

```sh
git fetch upstream
git merge upstream/master
yarn
```

## Usage

```sh
yarn start # start dev server and open app
yarn run lint # lint
yarn test # test
yarn run test:coverage # test with coverage
yarn run test:watch # watch tests
yarn run test:e2e # e2e test ***
yarn run clean # delete build directory
yarn run build # build for production
yarn run start:prod # start app in production mode ***
yarn run package # package for current OS
yarn run package:all # package for all OS
# ***: you have to exec 'yarn run build' before
```

## How to Upgrade Electron

1. Upgrade electron: `yarn upgrade-interactive`
2. Rewrite `"Electron x.x"` and `"node": "x.x"` on browserslist in `package.json` and `.babelrc` into latest electron and node versions
3. Done!

This operation is going to be unnecessary if babel-preset-env supports to read browserslist config.
