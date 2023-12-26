const paragraphs = document.querySelectorAll(".paragraph");
const icons = document.querySelectorAll(".icon");

const flag = [false, true, true, true];

paragraphs[0].style.display = "block";
icons[0].src = "assets/images/icon-minus.svg";

icons.forEach(function (icon, index) {
  icon.addEventListener("click", function () {
    paragraphs.forEach(function (p) {
      p.style.display = "none";
    });

    icons.forEach(function (i, iIndex) {
      i.src = "assets/images/icon-plus.svg";

      if (index === iIndex && flag[index]) {
        i.src = "assets/images/icon-minus.svg";
        paragraphs[index].style.display = "block";
        flag[index] = false;
      } else {
        flag[iIndex] = true;
      }
    });
  });
});
