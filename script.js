const happyBtn = document.querySelector("#happy-btn");
happyBtn.addEventListener("click", () => {
  console.log("Button clicked!");
  const countElement = happyBtn.querySelector(".count");
  const text = countElement.textContent;
  let currCount = Number(text.split("/")[0]);
  // console.log("Current count:", currCount);
  if (currCount === 10) return;
  currCount++;
  countElement.textContent = `${currCount}/10`;
});
