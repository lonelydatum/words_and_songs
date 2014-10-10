/*global define*/
define(function(require){
	'use strict';

	var Signals = require('signals');
	var _messageIndex = 0;
	var _messages;
	var _signals = {
		playMessage: new Signals()
	}


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
      height: '1200',
      width: '1700',
      videoId: 'w_DKWlrA24k'
    });



    setInterval(function(){
    	var message = _messages[_messageIndex];
    	if(window.player.getCurrentTime() > message.playAt){
    		_signals.playMessage.dispatch(message);
    		_messageIndex++;

    	}

    },1000)



  }

   function onPlayerReady (event) {
        event.target.playVideo();
        console.log(player);
    }







	var Player = function(messages){
		_messages = messages;
		this.signals = _signals;
	}

	return Player;
});