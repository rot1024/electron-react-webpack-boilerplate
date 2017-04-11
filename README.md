# electron-react-webpack-boilerplate

Electron + webpack + Babel + React

REQUIRED: Node.js >= v6

## Getting Started

```sh
git clone https://github.com/rot1024/electron-webpack-react-boilerplate.git
cd electron-webpack-react-boilerplate
npm install # or yarn
```

## Usage

```sh
npm start # start dev server and open app
npm run lint # lint
npm test # test
npm test-watch # watch tests
npm run build # build for production
npm run start-prod # start app in production mode
npm run package # package for current OS
npm run package-all # package for all OS
```

## How to Upgrade Electron

1. Upgrade electron: `yarn upgrade-interactive`
2. Rewrite `"Electron X.X"` and `"node": X.X` on browserslist in `package.json` and `.babelrc` into latest electron and node versions
3. Done!
