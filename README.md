## はじめに
作成する時点での最新のパッケージをインストールしてください。
package.jsonのdevDependenciesを削除した上で下記を実施してください
```
npm install --save-dev webpack webpack-cli webpack-dev-server npm-run-all sass
```

```
npm run bundle
```


```
npm start
```

## webpack dev server
main.jsが存在しないと何故か機能しないことを確認しています。
`npm start`をする前に`npm run bundle`を実施してください。