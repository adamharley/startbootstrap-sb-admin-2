$(function() {
    $('#side-menu').metisMenu();

    // Loads the correct sidebar on window load,
    // collapses the sidebar on window resize.
    // Sets the min-height of #page-wrapper to window size
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((window.innerHeight > 0) ? window.innerHeight : screen.height) - 1;
        height = height - topOffset;
        if (height < 1) {
            height = 1;
        } else if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var element = $('ul.nav a').filter(function() {
        return this.href == location;
    }).addClass('active').parent();

    while (element.is('li')) {
        element = element.parent().addClass('in').parent();
    }
});
