/*global define*/
define(function(require) {
  'use strict';

  var Signals = require('signals');
  var Style = require('data/Style');
  var yt = require('yt');



  var _messageIndex = 0;
  var _messages;
  var _signals = {
    playMessage: new Signals()
  }

  var _timePrev = 0;
  var _timeCurr = 0;
  var _setIntervalID


  function startTicking() {


    _setIntervalID = setInterval(function() {
      _timePrev = _timeCurr;
      _timeCurr = window.player.getCurrentTime();
      var diff = Math.abs(_timePrev - _timeCurr);



      if (diff < .7) {
        var m = getClosest(_timeCurr)
        if(m){
          dispatch(m);
        }
      }
    }, 500)
  }



  function getClosest(currentTime){
    var res;
    var tempSmallestDiff = {diff:999, message:{}};
    _.each(_messages, function(messageItem) {
      var diff = currentTime - messageItem.playAt;
      if(diff > 0 && messageItem.virgin){
        if(diff<1.5){
          res = messageItem;
          messageItem.virgin = false;
          return false;
        }
      }
    })

    return res;

  }



  function userSeeked() {
    var min = {
      time: 99999,
      messageForNow: null
    };
    _.each(_messages, function(messageItem) {
      var diff = Math.abs(messageItem.playAt - window.player.getCurrentTime());
      if (diff < min.time) {
        min.time = diff;
        min.messageForNow = messageItem;
      }
    })
    _messageIndex = min.messageForNow.queue.me;
  }





  function dispatch(message) {

    _signals.playMessage.dispatch(message);
    _messageIndex++;
  }



  var Player = function(messages) {
    _messages = messages;
    this.signals = _signals;


    yt.signalLoaded.add(function(){
      startTicking();
      window.player.addEventListener("onStateChange", function(e){
        if(e.data===0){
          clearInterval(_setIntervalID);
          dispatch(_messages[0]);
        }else if(e.data===1){
          _.each(_messages, function(item){
            item.virgin = true;

          })
          dispatch(_messages[1]);
            startTicking();
        }
      });
    })
    yt.playVideo('ytplayer', 'Z3sXVxqDbFk');


  }

  return Player;
});
