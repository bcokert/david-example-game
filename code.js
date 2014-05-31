/* This is the code for the game */

/* Force the code not to run until the page and the graphics are loaded */
$(document).ready(function() {
    /* Find all things with class="cell", and give them a random number */
    var min = 2;
    var max = 8;
    $('.cell').text(Math.floor(Math.random() * (max - min + 1)) + min);

    /* Setup a click hander, so that a certain function is run when you click */
    $('.cell').click(function(event) {
        var clicked_cell = $(event.target);
        clicked_cell.text(parseInt(clicked_cell.text()) + 1);
    });
});
