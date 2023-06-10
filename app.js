// text edit section
// all html element reference
const textArea = document.getElementById("textArea");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("FontWeight");
const fontFamily = document.getElementById("FontFamily");
const color = document.getElementById("Color");

// textarea input
textArea.addEventListener("change", (e) => {
  textArea.innerText = e.target.value;
});

// font size select input
fontSize.addEventListener("change", (e) => {
  const value = e.target.value;
  textArea.style.fontSize = value;
});

// font family select input
fontFamily.addEventListener("change", (e) => {
  const value = e.target.value;
  textArea.style.fontFamily = value;
});

// font weight select input
fontWeight.addEventListener("change", (e) => {
  const value = e.target.value;
  textArea.style.fontWeight = value;
});

// color select input
color.addEventListener("change", (e) => {
  const value = e.target.value;
  textArea.style.color = value;
});

// light mode and dark mode
const mood = document.getElementById("mood");
const html = document.getElementById("html");
mood.addEventListener("click", () => {
  mood.classList.toggle("fa-moon");
  html.classList.toggle("dark");
});

// mobile light mood and dark mood
const lightMood = document.getElementById("lightMood");
lightMood.addEventListener("click", () => {
  lightMood.classList.toggle("fa-moon");
  html.classList.toggle("dark");
});

// image section

// all html element reference
const imageContainer = document.getElementById("imageContainer");
const imageInput = document.getElementById("imageInput");
const uploadText = document.getElementById("uploadText");
const imageAttachment = document.getElementById("imageAttachment");
const imageSize = document.getElementById("imageSize");
const imagePosition = document.getElementById("imagePosition");
const imageRepeat = document.getElementById("imageRepeat");

// image input
imageInput.addEventListener("change", (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  const photoUrl = URL.createObjectURL(file);

  imageContainer.style.backgroundImage = `url(${photoUrl})`;
  uploadText.style.display = "none";
});

// image repeat select input
imageRepeat.addEventListener("change", (e) => {
  const value = e.target.value;
  imageContainer.style.backgroundRepeat = value;
});

// image attachment select input
imageAttachment.addEventListener("change", (e) => {
  const value = e.target.value;
  imageContainer.style.backgroundAttachment = value;
});

// image size select input
imageSize.addEventListener("change", (e) => {
  const value = e.target.value;
  imageContainer.style.backgroundSize = value;
});

// image position select input
imagePosition.addEventListener("change", (e) => {
  const value = e.target.value;
  imageContainer.style.backgroundPosition = value;
});

// navbar setting
const imageEdit = document.getElementById("imageEdit");
const textEdit = document.getElementById("textEdit");
const textEditButton = document.getElementById("textEditButton");
const imageEditButton = document.getElementById("imageEditButton");

imageEdit.style.display = "none";

imageEditButton.addEventListener("click", () => {
  imageEdit.style.display = "block";
  textEdit.style.display = "none";
});

textEditButton.addEventListener("click", () => {
  imageEdit.style.display = "none";
  textEdit.style.display = "block";
});

// manubar
const manuBar = document.getElementById("menuBar");
const menuIcon = document.getElementById("menuIcon");
const mobileNavbar = document.getElementById("mobileNavbar");

manuBar.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  mobileNavbar.classList.toggle("hidden");
});

// mobile navbar setting
const image = document.getElementById("imageEdit");
const text = document.getElementById("textEdit");
const textButton = document.getElementById("mobileTextEditButton");
const imageButton = document.getElementById("mobileImageEditButton");

image.style.display = "none";

imageButton.addEventListener("click", () => {
  image.style.display = "block";
  text.style.display = "none";
});

textButton.addEventListener("click", () => {
  image.style.display = "none";
  text.style.display = "block";
});
