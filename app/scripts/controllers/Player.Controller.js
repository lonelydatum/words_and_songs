/*global define*/
define(function(require){
	'use strict';

	var Signals = require('signals');
	var Style = require('data/Style');

	var _messageIndex = 0;
	var _messages;
	var _signals = {
		playMessage: new Signals()
	}

  var _timePrev = 0;
  var _timeCurr = 0;

	  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  window.player;
  window.onYouTubePlayerAPIReady = function () {
    window.player = new YT.Player('ytplayer', {

      width: Style.stageWidth,
      height: Style.stageHeight,
      videoId: 'w_DKWlrA24k'
    });

    window.player.addEventListener("onStateChange", onytplayerStateChange);



    setInterval(function(){

      _timePrev = _timeCurr;
      _timeCurr = window.player.getCurrentTime();
      var diff = Math.abs(_timePrev-_timeCurr);
      
    	// console.log(window.player.getCurrentTime());
    	if(diff>2){
    		  var min = {time:99999, messageForNow:null};
    		  _.each(_messages, function(messageItem){
    			var diff = Math.abs(messageItem.playAt - window.player.getCurrentTime());
    			if(diff<min.time){
    				min.time = diff;
    				min.messageForNow = messageItem;
    			}

    		})
    		_messageIndex = min.messageForNow.queue.me;

    	}else{
			var message = _messages[_messageIndex];
			
			if(window.player.getCurrentTime() > message.playAt){
				_signals.playMessage.dispatch(message);
				_messageIndex++;
			}
    	}



    },1000)



  }



   function onytplayerStateChange (event) {
        console.log(event);
        _messageIndex = -1;
    }







	var Player = function(messages){
		_messages = messages;
		this.signals = _signals;
	}

	return Player;
});