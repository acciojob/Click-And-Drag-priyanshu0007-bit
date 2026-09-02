const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");

let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(function(item) {

    item.addEventListener("mousedown", function(e) {

        selectedItem = e.currentTarget;

        const itemRect = selectedItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        offsetX = e.clientX - itemRect.left;
        offsetY = e.clientY - itemRect.top;

        selectedItem.style.position = "absolute";

        selectedItem.style.left =
            (itemRect.left - containerRect.left) + "px";

        selectedItem.style.top =
            (itemRect.top - containerRect.top) + "px";
    });

});


container.addEventListener("mousemove", function(e) {

    if (selectedItem === null) {
        return;
    }

    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    const maxX = container.clientWidth - selectedItem.offsetWidth;
    const maxY = container.clientHeight - selectedItem.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    selectedItem.style.left = x + "px";
    selectedItem.style.top = y + "px";
});


document.addEventListener("mouseup", function() {

    selectedItem = null;

});