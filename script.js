let items = document.querySelectorAll(".item");
let container = document.querySelector(".items");

let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item) => {

  item.addEventListener("mousedown", (e) => {

    selectedItem = item;

    let itemRect = item.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    offsetX = e.clientX - itemRect.left;
    offsetY = e.clientY - itemRect.top;

    item.style.position = "absolute";

    let x = itemRect.left - containerRect.left;
    let y = itemRect.top - containerRect.top;

    let maxX = container.clientWidth - item.offsetWidth;
    let maxY = container.clientHeight - item.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    item.style.left = x + "px";
    item.style.top = y + "px";
  });

});


container.addEventListener("mousemove", (e) => {

  if (selectedItem === null) {
    return;
  }

  let containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  let maxX = container.clientWidth - selectedItem.offsetWidth;
  let maxY = container.clientHeight - selectedItem.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  selectedItem.style.left = x + "px";
  selectedItem.style.top = y + "px";
});


document.addEventListener("mouseup", () => {

  selectedItem = null;

});