  // Array of sentences to display
  /**/
 //the first timing beta
    //const timing =[3130,4140,7100,5450,5340,6820,6640,5220,6680,7630,3490,1600,4990,7430,7680,6730,6140,6590,9120,3460,5420,7280,7900,4410,7940,6670,8680,5530,6580,7310,100000];
    const timing2 =[3130,4140,7100,5450,5290,7100,6340,5220,6400,3290,4390,2900,6940,7650,7600,6850,5900,6490,8560,4200,5850,6550,7900,4200,7820,6800,8400,4300,4600,4700,5130,7090,6900,200000];
  const textContainer = document.getElementById("text-container");
  let sentenceIndex = 0;
  let charIndex = 0;
  let audio=document.getElementById("audio");
  let button = document.querySelector(".button")
  let loading = document.querySelector(".loader");
  audio.hidden=true;
  button.hidden=true;
  let video = document.querySelector(".video");
  video.playbackRate=0.5;
  audio.addEventListener("canplaythrough",()=>{
    loading.hidden=true;
    button.hidden=false;
   
  })

 button.addEventListener("click",()=>{
    button.hidden=true;
      audio.play();
    showSentence();
    
  })

  
  function showSentence() {
    textContainer.textContent= sentences[sentenceIndex];
    textContainer.classList.add("fade-in");
    //fade in starts here
    setTimeout(() => {
      textContainer.classList.remove("fade-in");
      textContainer.classList.add("fade-out");
  
      // Fade out here
      setTimeout(() => {
        textContainer.classList.remove("fade-out");
        sentenceIndex++;
  
        // Sentence Loop
        if (sentenceIndex < sentences.length) {
          showSentence();
        } else {
          sentenceIndex = 0;//Don't get it yet is necessary
        }
      }, 1000); // fade out ends here the timing to match 1s in css
    }, timing2[sentenceIndex]-1000); // Visibility time
  }
  

