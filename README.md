# electron-react-webpack-boilerplate

Electron + webpack + Babel + React

REQUIRED: Node.js >= v6 + Yarn

## Getting Started

```sh
git clone https://github.com/rot1024/electron-webpack-react-boilerplate.git
cd electron-webpack-react-boilerplate
yarn
```

## Usage

```sh
yarn start # start dev server and open app
yarn run lint # lint
yarn test # test
yarn run test-watch # watch tests
yarn run build # build for production
yarn run start-prod # start app in production mode
yarn run package # package for current OS
yarn run package-all # package for all OS
```

## How to Upgrade Electron

1. Upgrade electron: `yarn upgrade-interactive`
2. Rewrite `"Electron x.x"` and `"node": x.x` on browserslist in `package.json` and `.babelrc` into latest electron and node versions
3. Done!
