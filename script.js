const container = document.querySelector(".items");
const items = document.querySelectorAll(".item");

items.forEach(function(item) {

    item.addEventListener("mousedown", function(event) {

        event.preventDefault();

        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        let offsetX = event.clientX - itemRect.left;
        let offsetY = event.clientY - itemRect.top;

        item.style.position = "absolute";
        item.style.zIndex = "10";

        function moveItem(event) {

            let newLeft =
                event.clientX - containerRect.left - offsetX;

            let newTop =
                event.clientY - containerRect.top - offsetY;

            // Keep cube inside container
            const maxLeft =
                container.clientWidth - item.offsetWidth;

            const maxTop =
                container.clientHeight - item.offsetHeight;

            if (newLeft < 0) {
                newLeft = 0;
            }

            if (newTop < 0) {
                newTop = 0;
            }

            if (newLeft > maxLeft) {
                newLeft = maxLeft;
            }

            if (newTop > maxTop) {
                newTop = maxTop;
            }

            item.style.left = newLeft + "px";
            item.style.top = newTop + "px";
        }

        function stopMoving() {

            document.removeEventListener(
                "mousemove",
                moveItem
            );

            document.removeEventListener(
                "mouseup",
                stopMoving
            );

            item.style.zIndex = "1";
        }

        document.addEventListener(
            "mousemove",
            moveItem
        );

        document.addEventListener(
            "mouseup",
            stopMoving
        );

    });

});