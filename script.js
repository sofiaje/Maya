// let sound = new Audio("./assets/premade_Bella.mp3")
// let btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     sound.play()
// })

let contentwrapper = document.querySelector(".contentwrapper")
let wrapper  = document.querySelector(".wrapper")
let homeBtn = document.getElementById("homeBtn")
let mayaBtn = document.getElementById("mayaBtn")
let scoreBtn = document.getElementById("scoreBtn")


let startBtn = ""







// -------------- helping functions ----------------


//clear element function
function clear(elem) {
  elem.innerHTML = "";
}

//typewriter function
function writeText(text, element) {
  let i = 0;
  const intervalId = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(intervalId);
    }
  }, 55); // Change the delay between characters here (in milliseconds)
}



// -------------- character page ----------------
let cont = `With time running out and the fate of the world hanging 
in the balance, Maya must navigate a treacherous landscape of deceit, danger, and 
discovery to unravel the secrets of the future and save humanity from its own hubris.`

mayaBtn.addEventListener("click", () => {
  clear(contentwrapper);
  wrapper.style.backgroundImage = "none"
  contentwrapper.innerHTML = `<img class="characterImg" src="assets/fullbody.png" alt="character, woman with brown hair, light from behind">
  <div class="text-left">
  <p class="charDesc">Armed with her wits, athleticism, and advanced 
  technology, she embarks on a thrilling adventure to uncover the truth behind the 
  mysterious forces at play. </p>
  </div>`
  writeText(cont, document.querySelector(".charDesc"))
})


// -------------- score page ----------------
scoreBtn.addEventListener("click", () => {
  clear(contentwrapper);
  contentwrapper.innerHTML = `<p>Nothingness</p>`
})


// -------------- first page ----------------

let textPromt = `the world has undergone massive technological advancements, 
but with it, came unforeseen consequences. As society continues to grapple with 
the challenges of this new era, a young woman named Maya finds herself at the 
center of a dangerous conspiracy. `


function loadPage() {
  clear(contentwrapper);
  wrapper.style.backgroundImage = "url(assets/cityalt.png)"
  contentwrapper.innerHTML = `
    <h1>MAYA</h1>
    <div class="text-center">
      <p class="gameDesc">In the year 2057, </p>
    </div>
    <button class="btn start">Start Game</button>
  `;
  writeText(textPromt, document.querySelector(".gameDesc"));
  startBtn = document.querySelector(".start");

  startBtn.addEventListener("click", () => {
    clear(contentwrapper);
    contentwrapper.innerHTML = `<p>Comming soon</p>`
  })
}



homeBtn.addEventListener("click", () => {
  loadPage()
})

loadPage()
