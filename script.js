let item = document.querySelectorAll(".item");
let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

item.forEach((cube) => {

  cube.addEventListener("mousedown", (e) => {
    selectedItem = cube;

    let cubeRect = cube.getBoundingClientRect();
    let containerRect = document
      .querySelector(".items")
      .getBoundingClientRect();

    offsetX = e.clientX - cubeRect.left;
    offsetY = e.clientY - cubeRect.top;

    cube.style.position = "absolute";

    cube.style.left =
      cubeRect.left - containerRect.left + "px";

    cube.style.top =
      cubeRect.top - containerRect.top + "px";
  });

});


document.querySelector(".items").addEventListener("mousemove", (e) => {

  if (selectedItem === null) {
    return;
  }

  let containerRect = document
    .querySelector(".items")
    .getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  let maxX =
    containerRect.width - selectedItem.offsetWidth;

  let maxY =
    containerRect.height - selectedItem.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  selectedItem.style.left = x + "px";
  selectedItem.style.top = y + "px";
});


document.addEventListener("mouseup", (e) => {

  selectedItem = null;

});