const form = document.querySelector(".form-quizz");
let tableResults = [];
const responses = ["b", "b", "c", "a", "a"];
const emoji = ["✔️", "👎", "👀", "😭", "✨"];
const titleResult = document.querySelector(".results h2");
const scoresResults = document.querySelector(".scores");
const helpResults = document.querySelector(".help");
const allQuestions = document.querySelectorAll(".question-card");
let verifTable = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Récupération de la 1ère value (1ère question)
  //console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 6; i++) {
    tableResults.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(tableResults);
  verifFunc(tableResults);
  tableResults = [];
});

function verifFunc(tabResultats) {
  for (let a = 0; a < 5; a++) {
    if (tabResultats[a] === responses[a]) {
      verifTable.push(true);
    } else {
      verifTable.push(false);
    }
  }
  //console.log(verifTable);
  showResults(verifTable);
  colorFonction(verifTable);
  verifTable = [];
}

function showResults(tabCheck) {
  const nbErrors = tabCheck.filter((el) => el !== true).length;
  //console.log(nbErrors);

  switch (nbErrors) {
    case 0:
      titleResult.innerText = "✔️Bravo, tu es un.e vrai.e Fan !!!✔️";
      helpResults.innerText = "";
      scoresResults.innerText = "Cinq Bonnes Réponses";
      break;
    case 1:
      titleResult.innerText = "✨Tu y es presque !✨";
      helpResults.innerText = "Réponds à la question en Rouge";
      scoresResults.innerText = "4/5";
      break;

    case 2:
      titleResult.innerText = "👀Encore Quelques petites lacunes👀";
      helpResults.innerText = "Retentes ta chance dans les zones rouges";
      scoresResults.innerText = "3/5";
      break;

    case 3:
      titleResult.innerText = "😭Ceci n'est pas un score acceptable...😭";
      helpResults.innerText = "Retentes ta chance dans les zones rouges";
      scoresResults.innerText = "2/5";
      break;

    case 4:
      titleResult.innerText = "👎Nul : Tu le fait Exprès !!?? 👎";
      helpResults.innerText = "Retentes ta chance dans les zones rouges";
      scoresResults.innerText = "Une seule bonne réponse...";
      break;

    case 5:
      titleResult.innerText = "😡Pfffff, Tu as répondu au hasard : Avoue !😡";
      helpResults.innerText = "Reprends tout du début^^";
      scoresResults.innerText = "0/5";
      break;

    default:
      "Oups, cas innatendu";
  }
}

function colorFonction(tabValBool) {
  for (let j = 0; j < tabValBool.length; j++) {
    if (tabValBool[j] === true) {
      allQuestions[j].style.background = "lightgreen";
    } else {
      allQuestions[j].style.background = "#B6111D";
      allQuestions[j].classList.add("fail");

      setTimeout(() => {
        allQuestions[j].classList.remove("fail");
      }, 500);
    }
  }
}

allQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "rgb(1, 51, 63)";
  });
});
