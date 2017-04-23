$(document).ready(function() {
    
//Applied when website is in Mobile Mode
    if($(window).width() <= 840){
    
    //Start with all dropdowns closed
        $('.dropdown').toggle();

    //Open a dropdown when it's clicked
        $('.section_head').click(function() {
            var id = $(this).data('description');
            $("#" + id).slideToggle();
            $("." + id).slideToggle();
        });
    }; 
});



//By Ryan Mogol 2017