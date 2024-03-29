# Bowerの使い方

## Bowerのインストール
$ npm install -g bower

## バージョン確認
$ bower -v

## Bowerを使用する場所に移動
$ cd \<directory\>

## 初期化
$ bower init
```
[?] May bower anonymously report usage statistics to improve the tool over time? No
[?] name: first bower
[?] version: 0.0.0
[?] description: 初めてのBower
[?] main file:
[?] what types of modules does this package expose?
[?] keywords:
[?] authors: youkaiantena <apple.kitaro@gmail.com>
[?] license: MIT
[?] homepage:
[?] set currently installed components as dependencies? Yes
[?] add commonly ignored files to ignore list? Yes
[?] would you like to mark this package as private which prevents it from being accidentally published to the registr[?] would you like to mark this package as private which prevents it from being accidentally published to the registry? Yes

{
  name: 'first bower',
  version: '0.0.0',
  authors: [
    'youkaiantena <apple.kitaro@gmail.com>'
  ],
  description: '初めてのBower',
  license: 'MIT',
  private: true,
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}

[?] Looks good? Yes
```

## ライブラリのインストール

### オプションについて

開発版の場合は `--save-dev` 製品版は `--save` を指定する。

### バージョン指定無し（ex: jQuery）

$ bower install --save-dev jquery

### バージョン指定あり（ex: jQuery）

$ bower install --save-dev jquery#1.11.x

## Gulpとの連携

### Gulpのインストール

$ npm init  
$ npm install --save-dev gulp

### プラグインのインストール

$ npm install --save-dev gulp-uglify
