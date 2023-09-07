const input = document.querySelector("input");
const button = document.getElementById("btn-get-started");
const error = document.querySelector(".error");

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const email = input.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!emailPattern.test(email) || input.value === "") {
    error.style.display = "flex";
  } else {
    error.style.display = "none";
  }
}
