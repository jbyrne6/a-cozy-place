$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#collapseSpan').text(document.getElementById('sidebar').className == 'active' ? '>' : '<');
    });
});

$(document).ready(function () {
    $('#submitImage').on('click', function () {
        // change the background image
        let imageLink = document.getElementById("imageInput").value;
        $('.bg').css('background-image', 'url(' + imageLink + ')');
    });
});

$(document).ready(function () {
    $('#submitMusic').on('click', function () {
        // change the background image
        let musicLink = document.getElementById("musicInput").value;
        musicLink = musicLink.substring(musicLink.indexOf("=") + 1);
        musicLink = "https://www.youtube.com/embed/" + musicLink;
        $('.embededMusic').css('src', musicLink);
    });
});

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}
