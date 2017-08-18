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

    let li = document.querySelectorAll('.item');
    let pause = document.querySelector('.pause');
    let next = document.querySelector('.next');
    let previous = document.querySelector('.previous');
    let active = true;
    let count = 0;
    let idTimer = null;
    let stop = () => {
        pause.innerText = 'play';
        clearInterval(idTimer);
        active = false;
    };
    previous.addEventListener('click', ()=> {
        stop();
        toggle(count -1)
    })
    next.addEventListener('click', ()=> {
        stop();
        toggle(count + 1)
    })
    function toggle(n) {
        li[count].className = 'item';
        count = (n + li.length)% li.length;
        li[count].className = 'item active';
    }


    let play = () => {
        pause.innerText = 'pause'
        active = true;
        idTimer = setInterval(()=> {
            appears()
        }, 2000)
    }
    pause.addEventListener('click', ()=> {
        if(active) {
            stop();
            return;
        }
        play();
    });
    function appears() {
        li[count].classList = 'item';
        count = (count+1)% li.length;
        li[count].classList = 'item active';
    }
    idTimer = setInterval(()=> {
        appears()
    }, 2000);

    $('.owl-carousel').owlCarousel({
        autoWidth: true,
        loop: true,
    /*    center: true,*/
        margin: 0,
        responsive:{
            320:{
                items: 1,
            },
            420:{
                items: 2,
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
            $('.menu-1').toggleClass('display');
    });
/*
    let substrate = document.querySelector('.substrate');
    let buttonClose = document.querySelector('.content-pop-up__exit');
    let buttonExit = document.querySelector('.content-pop-up__close');
    let popUpBody = document.querySelector('.content-pop-up__body');
    let buttonArray = document.querySelectorAll('.project-title__my-search');
    let createImg =(element) => {
        return element.cloneNode(false);
    };
    let addClass = (element) => {
        return element.classList = 'content-pop-up__img';
    };
    let appendImg = (img)=> {
        popUpBody.appendChild(img) ;
    }
    for(let button of buttonArray) {
        button.addEventListener('click', (e)=> {
           let imgOld =  document.querySelector('.content-pop-up__img');
           if(imgOld)
               imgOld.remove();
           if(e.target.parentNode.previousElementSibling.classList.value ==='project-title__img'){
             let elem =  createImg(e.target.parentNode.previousElementSibling);
             let img = addClass(elem);
             appendImg(elem);
           }else{
               let elem =  createImg(e.target.parentNode.parentNode.previousElementSibling);
               let img = addClass(elem);
               appendImg(elem);
           }

            substrate.style.display = 'block';
        });
    }

    let close = () => {
        substrate.style.display = 'none';
    };
    buttonClose.addEventListener('click', close);
    buttonExit.addEventListener('click', close);
    document.body.addEventListener('click', (e)=> {
         if (e.target.classList.value === 'substrate')
             close();
    })*/
/*    let firstImg = $('.toggle-img__first');
    let lastImg = $('.toggle-img__last');
    firstImg.on('click', function (e) {
        $(this).toggleClass('img-active');
        lastImg.toggleClass('img-active');
    });
    lastImg.on('click', function (e) {
        $(this).toggleClass('img-active');
        firstImg.toggleClass('img-active');
    });*/
    $('.owl-carousel').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
        // other options
    });
   let a =  document.querySelector('select').value='';
    console.log(a);

})();