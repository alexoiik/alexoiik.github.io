// Cursor JS:
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", customizeCursor);
function customizeCursor(e) {
  cursor.style.top = e.pageY + "px"; 
  cursor.style.left = e.pageX + "px";
}