function showAndHideParagraph() {
  let paragraph = document.querySelector(".paragraph");
  let paragraphStyle = getComputedStyle(paragraph);
  if (paragraphStyle.display === "block") {
    paragraph.classList.add("hide");
  } else {
    paragraph.classList.remove("hide");
  }
}
