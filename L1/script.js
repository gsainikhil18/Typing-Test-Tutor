const typingText = document.querySelector(".sample-text p"),
  inpField = document.querySelector(".main-box .input-field"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span");

let timer,
  maxTime = 60,
  timeLeft = maxTime;
let charIndex = (mistakes = 0);

function randomParagraph() {
  console.log(Math.random());
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  console.log(paragraphs.length);

  paragraphs[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
  mistakeTag = document.querySelector(".mistake span");
}


// function initTimer() {
//   if (timeLeft > 0) {
//     timeLeft--;
//     timeTag.innerText = timeLeft;
//   } else {
//     clearInterval(timer);
//   }
// }
randomParagraph();
inpField.addEventListener("input", initTyping);
