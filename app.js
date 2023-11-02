const form = document.querySelector(".form-quizz");
let tableauResultes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(document.querySelector('input[name="q1"]:checked').value);
});
