{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cz": "git add . && git-cz",
	"changelog": "conventional-changelog -p angular -i ./CHANGELOG.md -s"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@dcloudio/uni-ui": "^1.3.0",
    "axios": "^0.21.1",
    "is-promise": "^4.0.0",
    "uni-crazy-router": "0.0.31",
    "uni-read-pages": "^1.0.5",
    "vuex-persist": "^3.1.3"
  },
  "devDependencies": {
    "commitizen": "4.2.3",
    "cz-conventional-changelog": "3.3.0"
  },
  "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
      }
    }
}
