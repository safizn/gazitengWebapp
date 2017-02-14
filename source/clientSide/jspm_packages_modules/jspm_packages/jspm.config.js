SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "bower:": "jspm_packages/bower/",
    "github:": "jspm_packages/github/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  babelOptions: {
    "presets": [
      "babel-preset-es2015-script"
    ]
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "bower:*.json",
    "github:*/*.json"
  ],
  map: {
    "accessibility-developer-tools": "bower:accessibility-developer-tools@2.10.0",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "async": "bower:async@2.0.1",
    "babel-preset-es2015-nostrict": "npm:babel-preset-es2015-nostrict@6.6.2",
    "babel-preset-es2015-script": "npm:babel-preset-es2015-script@1.0.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "contextify": "npm:contextify@0.1.15",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.27",
    "desandro/imagesloaded": "github:desandro/imagesloaded@4.1.0",
    "desandro/masonry": "github:desandro/masonry@4.1.1",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fancybox": "bower:fancybox@2.1.5",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "html": "github:Hypercubed/systemjs-plugin-html@0.0.8",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.0",
    "hydrolysis": "bower:hydrolysis@1.24.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jquery": "bower:jquery@3.1.0",
    "jquery/jquery-mousewheel": "github:jquery/jquery-mousewheel@3.1.13",
    "jqueryOne": "bower:jquery@1.12.4",
    "jqueryTwo": "bower:jquery@2.2.4",
    "jsbn": "npm:jsbn@0.1.0",
    "kamens/jQuery-menu-aim": "github:kamens/jQuery-menu-aim@master",
    "lodash": "bower:lodash@4.15.0",
    "masonry": "bower:masonry@4.1.1",
    "modernizr": "bower:modernizr@3.3.1",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "page": "bower:page@1.7.1",
    "path": "npm:jspm-nodelibs-path@0.2.0",
    "photoswipe": "bower:photoswipe@4.1.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "scrollmagic": "bower:scrollmagic@2.0.5",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.0",
    "viljamis/ResponsiveSlides.js": "github:viljamis/ResponsiveSlides.js@master",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "bower:photoswipe@4.1.1": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.27"
      }
    },
    "npm:contextify@0.1.15": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "bower:outlayer@2.1.0": {
      "map": {
        "get-size": "bower:get-size@2.0.2",
        "fizzy-ui-utils": "bower:fizzy-ui-utils@2.0.3",
        "ev-emitter": "bower:ev-emitter@1.0.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:Hypercubed/systemjs-plugin-html@0.0.8": {
      "map": {
        "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.22"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:babel-preset-es2015-script@1.0.0": {
      "map": {
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.11.4",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.11.4"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.11.4": {
      "map": {
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
        "private": "npm:private@0.1.6",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babylon": "npm:babylon@6.9.1",
        "babel-core": "npm:babel-core@6.13.2"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "regexpu-core": "npm:regexpu-core@2.0.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-traverse": "npm:babel-traverse@6.13.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.10.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.11.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-helper-function-name@6.8.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-helper-replace-supers@6.8.0": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-helper-regex@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:babel-types@6.13.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "lodash": "npm:lodash@4.15.0",
        "to-fast-properties": "npm:to-fast-properties@1.0.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babylon": "npm:babylon@6.9.1",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:babel-helper-define-map@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-traverse@6.13.0": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babylon": "npm:babylon@6.9.1",
        "lodash": "npm:lodash@4.15.0",
        "invariant": "npm:invariant@2.2.1",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "globals": "npm:globals@8.18.0",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:babel-helper-call-delegate@6.8.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5",
        "regenerate": "npm:regenerate@1.3.1"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-helper-hoist-variables@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-core@6.13.2": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.13.0",
        "babel-types": "npm:babel-types@6.13.0",
        "babylon": "npm:babylon@6.9.1",
        "debug": "npm:debug@2.2.0",
        "lodash": "npm:lodash@4.15.0",
        "private": "npm:private@0.1.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "path-exists": "npm:path-exists@1.0.0",
        "slash": "npm:slash@1.0.0",
        "babel-register": "npm:babel-register@6.11.6",
        "json5": "npm:json5@0.4.0",
        "babel-helpers": "npm:babel-helpers@6.8.0",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "minimatch": "npm:minimatch@3.0.3",
        "babel-generator": "npm:babel-generator@6.11.4",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:babel-register@6.11.6": {
      "map": {
        "babel-core": "npm:babel-core@6.13.2",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "core-js": "npm:core-js@2.4.1",
        "lodash": "npm:lodash@4.15.0",
        "path-exists": "npm:path-exists@1.0.0",
        "home-or-tmp": "npm:home-or-tmp@1.0.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:babel-helpers@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:babel-generator@6.11.4": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0",
        "lodash": "npm:lodash@4.15.0",
        "source-map": "npm:source-map@0.5.6",
        "detect-indent": "npm:detect-indent@3.0.1"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "get-stdin": "npm:get-stdin@4.0.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:babel-preset-es2015-nostrict@6.6.2": {
      "map": {
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.11.4",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.11.5",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.11.4"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "map": {
        "babel-types": "npm:babel-types@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.11.5": {
      "map": {
        "babel-types": "npm:babel-types@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.11.3",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.11.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.13.0"
      }
    },
    "bower:masonry@4.1.1": {
      "map": {
        "get-size": "bower:get-size@2.0.2",
        "outlayer": "bower:outlayer@2.1.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:babylon@6.9.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "bower:fizzy-ui-utils@2.0.3": {
      "map": {
        "desandro-matches-selector": "bower:desandro-matches-selector@2.0.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.0": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    }
  }
});