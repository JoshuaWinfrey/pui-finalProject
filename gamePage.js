function initDragula(){
    dragula([document.querySelector('#dragParent')]);
}

document.addEventListener("DOMContentLoaded", function () {
    var dragThings = document.querySelectorAll('.dragThing');

    dragThings.forEach(function (dragThing) {
        dragThing.addEventListener('click', function () {
            // Remove the 'selected' class from all elements
            dragThings.forEach(function (element) {
                element.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked element
            dragThing.classList.add('selected');
        });
    });
});