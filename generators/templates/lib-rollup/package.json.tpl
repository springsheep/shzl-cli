{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "module": "lib/index.esm.js",
  "scripts": {
    "dev": "set NODE_ENV=developemnt&& rollup -c rollup.config.js -w",
    "build": "rm -fr lib && set NODE_ENV=production&& rollup -c rollup.config.js",
    "cz": "git add . && git-cz",
    "changelog": "conventional-changelog -p angular -i ./docs/CHANGELOG.md -r -s 0"
  },
  "types": "lib/index.d.ts",
  "author": "tao.xie",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-typescript": "^7.14.5",
    "@rollup/plugin-commonjs": "^19.0.1",
    "@rollup/plugin-dynamic-import-vars": "^1.3.0",
    "@rollup/plugin-node-resolve": "^13.0.2",
    "@typescript-eslint/parser": "^4.28.4",
    "rollup": "^2.53.2",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-eslint": "^7.0.0",
    "rollup-plugin-typescript2": "^0.30.0",
    "typescript": "^4.3.5",
    "commitizen": "^4.2.4",
    "cz-conventional-changelog": "^3.3.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
