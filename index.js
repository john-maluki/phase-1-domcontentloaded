// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  init();
});

const init = () => {
  const p = document.getElementById("text");
  p.textContent = "This is really cool!";
};
