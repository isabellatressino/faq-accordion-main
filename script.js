const questions = document.querySelectorAll("h2");
const containers = document.querySelectorAll(".container");
const icons = document.querySelectorAll(".icon");

containers[0].classList.add("active");
icons[0].classList.add("icon-change");

questions.forEach(function (question, i) {
  question.addEventListener("click", function () {
    containers[i].classList.toggle("active");
    icons[i].classList.toggle("icon-change");
  });
});
