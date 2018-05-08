let initialized = false;
window.onload = function() {
  fileinput.onchange = function() {
    var files = this.files;
    var file = URL.createObjectURL(files[0]);
    player.src = file;
    player.play();
    
    if (!initialized) {
      initializeVisualizer($("canvas")[0], $("audio")[0]);
      initialized = true;
    }
    updateSongText(files[0].name);
  }
};