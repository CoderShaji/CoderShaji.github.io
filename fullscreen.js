document.querySelector('.button').addEventListener('click', () => {
  const element = document.documentElement; // Select the entire document for full-screen
  
  // Request full-screen mode
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) { // Safari support
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge support
    element.msRequestFullscreen();
  }
});
