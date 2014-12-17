define(function(require) {
  var $ = require('jquery');
  var Signals = require('signals');
  var Style = require('data/Style');



  var player = {
    signalLoaded: new Signals(),
    playVideo: function(container, videoId) {
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        window.onYouTubeIframeAPIReady = function() {
          player.loadPlayer(container, videoId);
        };


        $.getScript('//www.youtube.com/iframe_api');
      } else {
        player.loadPlayer(container, videoId);
      }
    },

    loadPlayer: function(container, videoId) {

      window.player = new YT.Player(container, {
        videoId: videoId,
        width: Style.stageWidth,
        height: Style.stageHeight,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showInfo: 0
        }
      });

      player.signalLoaded.dispatch(window.player);
    }
  };

  return player;
});
