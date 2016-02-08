var ui = {
    init: function () {

        this.phoneMask();

        this.initMainGallery();

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
    }

};
