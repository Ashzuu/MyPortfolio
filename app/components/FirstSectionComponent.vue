<script setup lang="ts">
import Badge from "~/components/usable/Badge.vue";
import Button from "~/components/usable/Button.vue";


/**
 * Function to launch the animation with all letters show quickly letter by letter
 * @param textToReach The text to reach after the animation
 * @param element The element to change
 * @param startDelay Delay in ms before starting the animation
 */
function rollAndPickAnimation(textToReach: string, element: HTMLElement, startDelay: number = 0) {
  const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let currentLength = 0;
  let randomFrames = 0;
  const maxRandomFrames = 15;

  element.innerText = "";

  setTimeout(() => {
    const interval = setInterval(() => {
      if (currentLength >= textToReach.length) {
        element.innerText = textToReach;
        clearInterval(interval);
        return;
      }

      const revealedText = textToReach.substring(0, currentLength);
      let randomChar = "";

      if (textToReach[currentLength] !== ' ') {
        randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
      } else {
        randomChar = " ";
        randomFrames = maxRandomFrames;
      }

      element.innerText = revealedText + randomChar;

      randomFrames++;
      if (randomFrames > maxRandomFrames) {
        randomFrames = 0;
        currentLength++;
      }
    }, 5);
  }, startDelay);
}

function startAnimationTitleAndShowing(){
  const titlePart = document.getElementById("title-first-part");
  const highlightedTitle = document.getElementById("title-highlighted");
  if (titlePart && highlightedTitle) {
    rollAndPickAnimation("Découvrez mon", titlePart, 0);
    rollAndPickAnimation("Portfolio", highlightedTitle, 800);
  }
  const firstPart = document.getElementById("first-section-container");
  if(firstPart){
    firstPart.style.opacity = "1";
  }
}

if(import.meta.client){
  window.onload = startAnimationTitleAndShowing;
}

</script>

<template>
  <section id="first-section-container">
    <div id="first-section-content">
      <div id="first-section-badge-container">
        <Badge class="primary-color-override">Musique</Badge><Badge class="secondary-color-override">Informatique</Badge>
      </div>
      <h1 id="main-title"><span id="title-first-part"></span><br><span id="title-highlighted" class="synth-wave-color large"></span></h1>
      <p class="description-content">Ce site a pour but de vous montrer mes différentes réalisations informatiques que j'ai pu réaliser tout au long de mon parcours,
      mais aussi parler un peu de moi et mes passions</p>
      <div id="buttons-section-container">
        <Button icon-name="weui:arrow-filled" variant="secondary" link-redirect="#project-title">Découvrir</Button>
        <Button icon-name="material-symbols:search" variant="primary" link-redirect="#contact-section-container">Me contacter</Button>
      </div>
    </div>
  </section>


</template>

<style scoped>
@import url("~/assets/css/primary-section.css");
</style>