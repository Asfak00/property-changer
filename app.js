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
