var botones = $('.collapseButton')

botones.click(function(){
    $(this).toggleClass('active');
    var next = $(this).next()[0]

    if(next.style.maxHeight){
        next.style.maxHeight = null
    }
    else{
        next.style.maxHeight = next.scrollHeight + 'px'
    }
})