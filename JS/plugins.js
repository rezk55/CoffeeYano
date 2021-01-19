//if click button of search or icon we will go to home
$("#btn-search").click(function() {
    $("html,body").animate({
            scrollTop: 0,
        },
        600
    );
});

//active pages
var flagesPages = {
    activeHome: false,
    activeAbout: false,
    activeProducts: false,
    activeBlog: false,
    activeContact: false,
};

function activePage(variableName, id) {
    //down flagesPages
    for (var flage in flagesPages) {
        flagesPages[flage] = false;
    }
    //up flagePage that active
    flagesPages[variableName] = true;

    //remove active class from all pages
    $("#nav-home").removeClass("activeClass");
    $("#nav-about").removeClass("activeClass");
    $("#nav-products").removeClass("activeClass");
    $("#nav-blog").removeClass("activeClass");
    $("#nav-contact").removeClass("activeClass");

    //add active class to page that active
    $(id).addClass("activeClass");
}

//home
$("#nav-home").click(function() {
    activePage("activeHome", "#nav-home");
});

//about
$("#nav-about").click(function() {
    activePage("activeAbout", "#nav-about");
});

//products
$("#nav-products").click(function() {
    activePage("activeProducts", "#nav-products");
});

//blog
$("#nav-blog").click(function() {
    activePage("activeBlog", "#nav-blog");
});

//contact
$("#nav-contact").click(function() {
    activePage("activeContact", "#nav-contact");
});

//scroll up
var scrollButton = $("#scroll-top");

$(window).scroll(function() {
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
});
scrollButton.click(function() {
    $("html,body").animate({
            scrollTop: 0,
        },
        600
    );
});

//scrollspy
$(window).scroll(function() {

    var scrollWindow = $(window).scrollTop();
    if (scrollWindow == 0) {
        activePage("activeHome", "#nav-home");
    } else if (scrollWindow > 762 && scrollWindow <= 1364) {
        activePage("activeAbout", "#nav-about");
    } else if (scrollWindow > 1364 && scrollWindow <= 3915) {
        //active
        activePage("activeProducts", "#nav-products");

    } else if (scrollWindow > 3915 && scrollWindow <= 4125) {
        activePage("activeBlog", "#nav-blog");
    } else if (scrollWindow > 4125) {
        activePage("activeContact", "#nav-contact");
    }

});