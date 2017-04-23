$(document).ready(function() {
    
    if($(window).width() <= 840){
    
        $('.dropdown').toggle();

        $('.section_head').click(function() {
            var id = $(this).data('description');
            $("#" + id).slideToggle();
            $("." + id).slideToggle();
        });
    }; 
});