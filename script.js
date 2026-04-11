function updateCount(happyBtn) {
  // console.log("Button clicked!");
  const countElement = happyBtn.querySelector(".count");
  let currCount = +countElement.textContent.split("/")[0];
  // console.log("Current count:", currCount);
  if (currCount === 10) return;
  currCount++;
  countElement.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");

// const happyBtn = document.querySelector("#happy-btn");

// happyBtn.addEventListener("click", () => {
//   updateCount(happyBtn);
// });

// const confusedBtn = document.querySelector("#confused-btn");

// confusedBtn.addEventListener("click", () => {
//   updateCount(confusedBtn);
// });

// const sadBtn = document.querySelector("#sad-btn");

// sadBtn.addEventListener("click", () => {
//   updateCount(sadBtn);
// });

// const lovingBtn = document.querySelector("#loving-btn");

// lovingBtn.addEventListener("click", () => {
//   updateCount(lovingBtn);
// });
