$(document).ready(function(){
    var sortingListPosition = $(".sorting-list").offset().top;

    $('.sorting-list li').click(function() {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $("#" + target).offset().top - 50 // Adjusted for the header height
        }, 800);
    });

    $(window).scroll(function(){
        var newSortingListPosition = Math.max(sortingListPosition, sortingListPosition - $(this).scrollTop());
        $(".sorting-list").css({"top": newSortingListPosition + "px"});
    });
});