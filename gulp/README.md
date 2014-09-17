# gulp

## gulpのインストール（グローバル）
$ npm install -g gulp

## バージョン確認
$ gulp -v

## 作業ディレクトリーへ移動
$ cd \<directory\>

## 初期化
$ npm init  
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (gulp) first-gulp
version: (1.0.0)
description: 初めてのgulp
entry point: (index.js)
test command:
git repository: (git@youkaiantena.github.com:youkaiantena/gulp.git)
keywords:
author: youkaiantena <apple.kitaro@gmail.com>
license: (ISC) MIT
About to write to /youkaiantena/gulp/package.json:

{
  "name": "first-gulp",
  "version": "1.0.0",
  "description": "初めてのgulp",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git@youkaiantena.github.com:youkaiantena/gulp.git"
  },
  "author": "youkaiantena <apple.kitaro@gmail.com>",
  "license": "MIT"
}


Is this ok? (yes)
```

$ npm install --save-dev gulp

