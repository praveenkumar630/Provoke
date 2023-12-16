// Replace 'YOUR_API_KEY' with your YouTube Data API key
const API_KEY = 'YOUR_API_KEY';
const VIDEO_ID = 'YOUR_UNLISTED_VIDEO_ID'; // Replace with your unlisted video ID

// Load the YouTube IFrame Player API code asynchronously
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player; // The YouTube player object

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-container', {
    height: '360',
    width: '640',
    videoId: VIDEO_ID,
    playerVars: {
      'autoplay': 1, // Autoplay video
      'controls': 1, // Show video controls
      'fs': 0, // Disable fullscreen button
      'rel': 0, // Disable related videos
      'modestbranding': 1 // YouTube logo will not be shown in the control bar
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Do something when the player is ready, if needed
}
