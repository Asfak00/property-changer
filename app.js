const textArea = document.getElementById("textArea");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("fontWeight");
const fontFamily = document.getElementById("fontFamily");
const color = document.getElementById("Color");
const logo = document.getElementById("logo");

textArea.addEventListener("change", (e) => {
  const value = e.target.value;

  fontSize.addEventListener("change", (e) => {
    const colorValue = e.target.value;
    if (colorValue === "10px") {
      value.style.color = "red";
    } else if (colorValue === "30px") {
      logo.style.color = "30px";
    }
  });
});
