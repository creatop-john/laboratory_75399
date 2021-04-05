AOS.init({
    duration: 900, // values from 0 to 3000, with step 50ms
});



// let $body = document.querySelector('body');
(function() {
    'use strict';
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:980px)');
    // keep track of swiper instances to destroy later
    let mySwiper;
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    const breakpointChecker = function() {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return enableSwiper();
        }
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const enableSwiper = function() {
        mySwiper = new Swiper('.hero-nav-swiper', {
            // loop: true,
            // slidesPerView: 'auto',
            // centeredSlides: true,
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            paginationClickable: true,
            slidesPerView: 3,
            spaceBetween: 0,
            // Responsive breakpoints
            navigation: {
                nextEl: '.next-hero-nav',
                prevEl: '.prev-hero-nav',
            },
            breakpoints: {

                // when window width is >= 480px
                // when window width is >= 480px
                360: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                480: {
                    slidesPerView: 6,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                740: {
                    slidesPerView: 8,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                980: {
                    slidesPerView: 10,
                    spaceBetween: 10
                }
            }
        });
    };
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
})(); /* IIFE end */


//公司簡介頁面快速導覽
const content = document.querySelector('.main-content');
const insertTarget = document.querySelector('.scrollnavhere');
scrollnav.init(content, {
    sections: '.fz-B',
    insertTarget: insertTarget,
    insertLocation: 'append',
    speed: 1000


});


//數字計算
document.addEventListener('aos:in:countStart', ({
    detail
}) => {
    $('.num-count-animate').each(function(index, element) {
        // 切換年度後，countup 動畫
        var count = $(this).data('count'),
            myid = $(this).data('id'),
            duration = $(this).data('time');
        animateValue(myid, 0, count, duration);

    })
});


function animateValue(id, start, end, duration) {
    var partCount;
    var range = end - start;
    var current;

    if (end > 250) {
        range = 250;
        current = end - 250;
    } else {
        range = end - start;
        current = start;
    }

    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    console.log(id + ' >>> stepTime = ' + stepTime + ' / range = ' + range + ' / increment = ' + increment);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}






const swiper_idx_compony = new Swiper('.swiper-idx-compony', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.next-idx-compony',
        prevEl: '.prev-idx-compony',
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     576: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     740: {
    //         slidesPerView: 3,
    //         spaceBetween: 20
    //     },
    //     1100: {
    //         slidesPerView: 4,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 640px
    //     1500: {
    //         slidesPerView: 5,
    //         spaceBetween: 30,
    //     }
    // }
});

const swiper_idx_article = new Swiper('.swiper-idx-article', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.next-idx-article',
        prevEl: '.prev-idx-article',
    },

});

const swiper_fix_article = new Swiper('.swiper-fix-article', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.next-fix-article',
        prevEl: '.prev-fix-article',
    },
    pagination: {
        el: '.page-article',
        type: 'bullets',
    },

});

const swiper_partner = new Swiper('.swiper-partner', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    loop: true,
    slidesPerView: 3,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 5,
        },
        980: {
            slidesPerView: 6,
        },
        // when window width is >= 640px
        1500: {
            slidesPerView: 9,

        },
        1800: {
            slidesPerView: 12,
        }
    }
});


$(function() {
    $body = $('body');
    $('.nav-toggle').on('click', function() {
        $body.toggleClass('nav-open');
        return false;
    });
    $('.search-toggle').on('click', function() {
        $body.toggleClass('search-bar-show');
        $('#headerSearch').focus();
        return false;
    });
    //var nowSearchOpen = 0;

    $('.close-search-bar').on('click', function() {
        $body.removeClass('search-bar-show');
        return false;
    })

    $body.on('click', function(e) {
        var abc = $(e.target);
        if (abc.hasClass('closeOptions')) {
            //console.log('yes');
        } else {
            //console.log('no');
            $body.removeClass('search-bar-show');
        }

    })




})