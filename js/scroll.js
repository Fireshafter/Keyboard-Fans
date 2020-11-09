$(document).scroll(function() {

    if($(window).scrollTop() >= 60){
        
        $(".centralNavbarItem img").css("max-height",'30px');
        $("#navbar").css("background-color",'rgba(30, 30, 31, 0.85)');
        $("#navbar").css("padding-top",'10px');
        $("#navbar").css("backdrop-filter",'blur(4px)');
        $('#navbar').css('max-height', '100px');
        
    }else{
        
        $(".centralNavbarItem img").css("max-height",'80px');
        $("#navbar").css("background-color",'transparent');
        $("#navbar").css("padding-top",'70px');
        $("#navbar").css("backdrop-filter",'none');
        $('#navbar').css('max-height', '150px')
        
    }
});