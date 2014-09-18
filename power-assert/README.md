# power-assert

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
name: (power-assert) first-power-assert
version: (1.0.0)
description: 初めてのpower-assert
entry point: (index.js)
test command:
git repository: (git@youkaiantena.github.com:youkaiantena/power-assert.git)
keywords:
author: youkaiantena <apple.kitaro@gmail.com>
license: (ISC) MIT
About to write to /youkaiantena/power-assert/package.json:

{
  "name": "first-power-assert",
  "version": "1.0.0",
  "description": "初めてのpower-assert",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git@youkaiantena.github.com:youkaiantena/power-assert.git"
  },
  "author": "youkaiantena <apple.kitaro@gmail.com>",
  "license": "MIT"
}
```

## Mochaのインストール
$ npm install --save-dev mocha

## power-assertのインストール
$ npm install --save-dev power-assert

## intelli-espower-loaderのインストール
$ npm install --save-dev intelli-espower-loader

## テストディレクトリーの作成
$ mkdir test

## テストディレクトリーの設定
$ vi package.json

```
// 下記を追記
"directories": {
  "test": "test/"
}
```

## テストの作成
$ vi test/test.js

```javascript:test/test.js
var assert = require('assert');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});
```

## テストの実行
$ mocha --require intelli-espower-loader
