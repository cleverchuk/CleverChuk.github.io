$(document).ready(function () {
    $("#ssk").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#sps").click(function () {
        $('html, body').animate({
            scrollTop: $("#school_projects").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#pps").click(function () {
        $('html, body').animate({
            scrollTop: $("#personal_projects").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#edu").click(function () {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#awd").click(function () {
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#xpr").click(function () {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll_top_btn").style.display = "block";
    } else {
        document.getElementById("scroll_top_btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);

}