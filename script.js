let item = document.querySelectorAll(".item");
let container = document.querySelector(".items");

let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

item.forEach((cube) => {

  cube.addEventListener("mousedown", (e) => {

    selectedItem = cube;

    let cubeRect = cube.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    offsetX = e.clientX - cubeRect.left;
    offsetY = e.clientY - cubeRect.top;

    cube.style.position = "absolute";

    // Calculate the cube's current position
    let x = cubeRect.left - containerRect.left;
    let y = cubeRect.top - containerRect.top;

    // Maximum allowed position
    let maxX = container.clientWidth - cube.offsetWidth;
    let maxY = container.clientHeight - cube.offsetHeight;

    // Keep initial position inside container
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    cube.style.left = x + "px";
    cube.style.top = y + "px";
  });

});


container.addEventListener("mousemove", (e) => {

  if (selectedItem === null) {
    return;
  }

  let containerRect = container.getBoundingClientRect();

  // Calculate new position
  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Maximum allowed position
  let maxX = container.clientWidth - selectedItem.offsetWidth;
  let maxY = container.clientHeight - selectedItem.offsetHeight;

  // Boundary check
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  // Move cube
  selectedItem.style.left = x + "px";
  selectedItem.style.top = y + "px";
});


document.addEventListener("mouseup", () => {

  selectedItem = null;

});