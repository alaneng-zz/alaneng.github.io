# basic-react-boilerplate

This boilerplate assumes you have [nvm](https://github.com/creationix/nvm) installed.  If you do, the correct version of node (as specified by `.nvmrc`) will be used.

## Install nvm (Node Version Manager) if you haven't already
```
# please check the nvm github page for the most recent verion of this script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

## Install the correct version of node with `nvm install`
```
cd path/to/boilerplate
nvm install
```

## Install prerequisite packages
```
npm install
```

## Package scripts

The following scripts are defined in `package.json`, and automatically include `node_modules/.bin` in the `$PATH`, so you use the correct versions of everything.

### Start the webpack-dev-server with react hot loading
```
npm start   # starts the webpack-dev-server with react hot loading
```
Then open [http://localhost:3000/](http://localhost:3000/)


### Build to bundle.js (in order to generate static bundled js)
```
npm run build   # builds the bundle to bundle.js
```

### Watch the sources and write to bundle.js on file change:
```
npm run watch   # watches files and builds when one changes
```
`^C` to quit.
