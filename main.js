$(document).ready(function(){
    $('.slider-2000').slick({

});
});


(()=>{
    let iconSearch = document.querySelector('.my-search');
    let blockShow = document.querySelector('.drop-search');
    iconSearch.addEventListener('click', ()=> {


        if(blockShow.style.display === 'flex'){
            blockShow.style.display = 'none';
        }else{
            blockShow.style.display = 'flex';
        }
    });
    $('body').on('click', (e) => {
        console.log(e);
        if(!e.target.classList.contains(...[ 'fa-search', 'my-search']) && !e.target.classList.contains('search-my')) {
            blockShow.style.display = 'none';
        }
    });

    $('.owl-carousel').owlCarousel({

        loop: true,

        margin: 0,
        responsive:{
            320:{
                items: 1,
            },
            420:{
                items: 2,
            },
            1024:{
                items: 3
            },
            1200:{
                items:6,
            }
        }
    });
    $( "#accordion" ).accordion({
        collapsible: true,
        icons: { "header": "ui-icon-plusthick", "activeHeader": "ui-icon-minus" },
        heightStyle: 'content'
    });
    let toggleMenu = $('.toggle-menu');
        toggleMenu.on('click', () => {
            toggleMenu.find('i').toggleClass('fa-bars');
            toggleMenu.find('i').toggleClass('fa-chevron-down');
            $('.menu-1').toggleClass('display')
    });

    $('.owl-carousel').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
    });


})();
