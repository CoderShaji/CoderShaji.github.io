  // Array of sentences to display
  /**/
 
  const sentences = [
    "In the vast realm of probabilities",
    "The chances of being alive are incredibly slim",
    "One in 400 trillion, Add to that the nearly impossible odds that",
    "The Earth orbits the sun at precisely the right distance to make life possible,",
    "Within a narrow habitable zone, and the chances grow even smaller.",
    "Now, throw in the odds of crossing paths with someone among 8 billion people"
    ,"And the probability becomes so small that it feels like a miracle",
    "And yet,\n against all these impossible odds\n YOU came into my life."
    ,"You made it brighter, more meaningful \nso much better than I ever deserved"
    ,"But here's the truth:\nI failed you",
    "I didn't give you the love, respect and gratitude you deserved.",
    "For that, I am so deeply sorry\n You're my miracle,\nand I'll always regret not showing you how much you truly mean to me"
    ,"You are the most beautiful person I've ever seen, You are just like the moon shining in the dark",
    "Everyone marvels at the beauty of the moon\n it's quite glow,it's gentle presence in the night sky."
    ,"Everyone seems to love the moon.But not me. To me, the moon is just a reflection."
    ,"\n A pale imitation of something far more radiant,Because I've seen what other's haven't."
    ," I have seen the SUN,I've seen YOU,Your soul, your heart, your light. "
    ,"The warmth you bring,The fire you carry,the way you shine even when the world around you feels cold and dim.",
    "I've felt the wrath of your storms when I've deserved it. ",
    "I've felt the silence of your absence when I failed to be there for you.",
    "And I've realized something: the sun is far more profound than the moon could ever be."
    ,"And yet, I this lowly earthling, ignored your brilliance, your warmth, your light."
    ,"I hurt you when you were already battling your own storms.",
    "I wasn't there when you needed me, and I can't take that back, no matter how much I wish I could."
    ,"For years, You've been my best friend, my anchor, my guide, and my greatest blessing."
    ,"You deserved so much better from me. I'm sorry, from the depths of my heart, for the times I ignored you,"
    ,"For the times I didn't prioritize you,"
    ,"and for the pain I caused you when you needed my support the most."
    ,"You are more than beautiful, more than extraordinary, you are irreplaceable,"
    ,"YOU ARE IMPECCABLE"
];

  const textContainer = document.getElementById("text-container");
  let sentenceIndex = 0;
  let charIndex = 0;
  let audio=document.getElementById("audio");
  let button = document.getElementById("button");
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
    typeSentence();
    
  })
  function typeSentence() {
      
    if (charIndex < sentences[sentenceIndex].length) {
      // Add the next character to the container
      textContainer.textContent += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeSentence, 100); // Adjust typing speed here
    } else {
      // Pause before starting the next sentence
      setTimeout(deleteSentence, 1000); // Wait 1 second before deleting
    }
  }
  
    function deleteSentence() {
    if (charIndex > 0) {
      // Remove the last character from the container
      textContainer.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteSentence, 0); // Adjust deleting speed here
    } else {
      // Move to the next sentence
      if(sentenceIndex<sentences.length-1)
    {
        sentenceIndex = (sentenceIndex + 1) // Loop through sentences
        setTimeout(typeSentence, 500); // Start typing the next sentence
      }
    }
  }

  // Start the animation
  
