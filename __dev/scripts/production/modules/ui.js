var ui = {
    init: function () {

        this.phoneMask();

        this.initMainGallery();

        this.sliderNews();

        this.sliderActions();

    },
    phoneMask: function () {
        $("input.js-phone-mask").mask("+7(999) 999-99-99");
    },

    initMainGallery : function(){
        $('.js-main-gallery').bxSlider({
            pagerCustom: '#js-bx-pager',
            mode : 'fade',
            speed : 700,
            auto : true
        })
    },
    sliderNews: function(){
        $('.js-list-news').bxSlider({
            speed : 700,
            pager: true,
            moveSlides: 1,
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 470,
            slideMargin: 20
        })
    },
    sliderActions : function(){
        $('.js-list-actions').bxSlider({
            speed : 700,
            moveSlides: 2,
            minSlides: 4,
            slideWidth: 370,
            maxSlides: 4,
            pager : true,
            slideMargin: 0
        })
    }

};
