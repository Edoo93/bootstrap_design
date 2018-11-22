$(window).scroll(()=>{
    if($(this).scrollTop() > 200){
        $('.navbar').css('background', '#D50000');
        $('.nav-item').css('line-height', '0px');
        $('.navbar').css('transition', '700ms 100ms ease-in-out');
    }else{
        $('.navbar').css('transition', '700ms 100ms ease-in-out');
        $('.navbar').css('background', 'rgb(0,0,0,0.05)');
        $('.nav-item').css('line-height', '27px');
    }
});

//Self invoked function that changes the title of the page when user is not focused on the page
//Interesting concept
(() => {
    var pageTitle = $('title').text();
    
    $(window).blur(() =>{
        $('title').text('Bootstrap site!');
    });

    $(window).focus(() =>{
        $('title').text(pageTitle);
    });
})();