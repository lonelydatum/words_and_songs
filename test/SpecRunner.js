require.config({
  baseUrl: '../app/scripts',
  paths: {
    'signals'        : '../bower_components/signals/dist/signals',
    'jquery'        : '../bower_components/jquery/jquery',
    'mocha'         : '../../test/lib/mocha/mocha',
    'chai'          : '../../test/lib/chai',
    '_spec'          : '../../test/spec/'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai']
  },
  // urlArgs: 'bust=' + (new Date()).getTime()
});

define(function(require) {
  var chai = require('chai');
  var mochas = require('mocha');

  // require('jquery');
  // require('chai-jquery');

  // Chai




  // chai.use(chaiJquery);

  mocha.setup('bdd');
  // mocha.bail(false);

  require([
    '_spec/Story.test',
    '_spec/Message.test',
    '_spec/Word.test',
    '_spec/Letter.test',
    '_spec/Font.test'
     ], function(require) {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });



});