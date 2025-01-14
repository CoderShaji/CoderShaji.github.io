

button.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  }

  // Start your main functionality after fullscreen is enabled
  startFunctionality();
});

function startFunctionality() {
  // Your existing code to play audio or start animations
  console.log("Fullscreen enabled, starting functionality...");
  // Example: audio.play(); typeSentence();
}
