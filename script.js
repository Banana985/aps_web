function toggletextbox() {
  let textbox = document.getElementById("my-textbox");
  if(textbox.style.display === "none") {
    textbox.style.display = "block";
  } else {
    textbox.style.display = "none";
  }
}