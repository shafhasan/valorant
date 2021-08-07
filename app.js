//Agent slides
const agentSlides = n => showAgentSlides(agentSlideIndex += n);

const showAgentSlides = n => {
  const slides = document.getElementsByClassName('agents');
  if (n > slides.length) {
    agentSlideIndex = 1;
  }
  if (n < 1) {
    agentSlideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[agentSlideIndex - 1].style.display = "block";
}

let agentSlideIndex = 1;
showAgentSlides(agentSlideIndex);

//Gun slides
const gunSlides = n => showGunSlides(gunSlideIndex += n);

const showGunSlides = n => {
  const slides = document.getElementsByClassName('guns');
  if (n > slides.length) {
    gunSlideIndex = 1;
  }
  if (n < 1) {
    gunSlideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[gunSlideIndex - 1].style.display = "block";
}

let gunSlideIndex = 1;
showGunSlides(gunSlideIndex);

//Map slides
const mapSlides = n => showMapSlides(mapSlideIndex += n);

const showMapSlides = n => {
  const slides = document.getElementsByClassName('maps');
  if (n > slides.length) {
    mapSlideIndex = 1;
  }
  if (n < 1) {
    mapSlideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[mapSlideIndex - 1].style.display = "block";
}

let mapSlideIndex = 1;
showMapSlides(mapSlideIndex);