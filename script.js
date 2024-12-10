const btn = document.getElementById("btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", tglRED);

const tglRED = () => {
  h1.classList.toggle("red");
};
