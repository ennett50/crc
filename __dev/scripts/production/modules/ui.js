var ui = {
    init: function () {
        setTimeout(doRefreshUI, 10);

        this.phoneMask();

        this.initMainGallery();
	    this.initCatalogGallery();

        this.sliderNews();

        this.sliderActions();
        this.sliderDetail();

        this.catalogFilter();

        this.elementsForm();

        this.tabs()

        $('.js-comapare-column .compare-findings-item').each(function(e){
            var parentHeight = $(this).outerHeight();
            $('.compare-findings-item[data-index="'+e+'"]').css({
                height: parentHeight
            });
        });


    },
    phoneMask: function () {
        $("input.js-phone-mask").mask("+7(999) 999-99-99");
    },

    initMainGallery: function () {
        $('.js-main-gallery').bxSlider({
            pagerCustom: '#js-bx-pager',
            mode: 'fade',
            speed: 700,
            auto: true
        })
    },
	initCatalogGallery: function () {
		$('.js-gallery').bxSlider({
			pagerCustom: '#js-bx-pager',
			mode: 'fade',
			speed: 700,
			auto: false,
			controls: false
		})
	},
    sliderNews: function () {
        $('.js-list-news').bxSlider({
            speed: 700,
            pager: true,
            moveSlides: 1,
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 470,
            slideMargin: 20
        })
    },
    sliderActions: function () {
        $('.js-list-actions').bxSlider({
            speed: 700,
            moveSlides: 2,
            minSlides: 4,
            slideWidth: 370,
            maxSlides: 4,
            pager: true,
            slideMargin: 0
        })
    },
    sliderDetail: function () {
        $('.js-list-detail').bxSlider({
            speed: 700,
            moveSlides: 1,
            minSlides: 3,
            slideWidth: 260,
            maxSlides: 3,
            pager: true,
            slideMargin: 0
        })
    },

    catalogFilter: function () {

        $('.js-filter-category').each(function () {
            $(this).on('click', function () {
                var textToggleBtn, toggleContent;
                toggleContent = $(this).next();
                $(this).toggleClass('__active');
                toggleContent.toggleClass('__active');

            });
        });

        var _Link = $.noUiSlider.Link;
        $('[data-filter-slider]').each(function () {
            var $siderBlock = $(this);
            var $slider = $siderBlock.find('[data-filter-slider-element~="line"]');
            var $lowerTarget = $siderBlock.find('[data-filter-slider-element~="link-lower"]');
            var $upperTarget = $siderBlock.find('[data-filter-slider-element~="link-upper"]');

            var range = {
                min: parseFloat($siderBlock.attr('data-filter-slider-min')),
                max: parseFloat($siderBlock.attr('data-filter-slider-max'))
            };
            var step = parseFloat($siderBlock.attr('data-filter-slider-step'));
            var startValues = [
                ($siderBlock.find('[data-filter-slider-element~="start-lower"]').val() || 0),
                ($siderBlock.find('[data-filter-slider-element~="start-upper"]').val() || 0)
            ];

            var sliderOptions = {
                connect: true,
                start: startValues,
                range: range,
                step: step,
                serialization: {
                    lower: [
                        new _Link({
                            target: $lowerTarget,
                            format: {
                                decimals: 0,
                                thousand: ' '
                            }
                        })
                    ],
                    upper: [
                        new _Link({
                            target: $upperTarget,
                            format: {
                                decimals: 0,
                                thousand: ' '
                            }
                        })
                    ]
                }
            };

            $slider.noUiSlider(sliderOptions);
        });
    },
    elementsForm : function(){
        var form;

        form = function() {
            $('input[type="checkbox"]:not(._inited):not(._default)').each(function() {
                $(this).addClass('_inited').button().button("widget").addClass('ui-type-checkbox');
            });
            $('input[type="radio"]:not(._inited):not(._default)').each(function() {
                $(this).addClass('_inited').button().button("widget").addClass('ui-type-radio');
            });
            $('select:not(._inited):not(._default)').each(function() {
                return $(this).addClass('_inited').selectmenu();
            });
        };

        doRefreshUI(form);
    },
    tabs : function() {
        $('body').on('click', '.js-tabs a[href][data-tabs]', function(e) {

            var $group, $groupTargets, $tab, $target;
            e.preventDefault();
            $tab = $(this);

            $('.js-tabs a, [data-tabs-group]').removeClass('__current');
            $('[data-tabs-group="' + $tab.attr('data-tabs') + '"]').addClass('__current');
            $tab.addClass('__current');
        });
    }

};


window.DoList = function() {
    var _list, _this;
    _list = {};
    _this = function(func, oneCall) {
        var fn, id, idEvent;
        if (func == null) {
            func = false;
        }
        if (oneCall == null) {
            oneCall = false;
        }
        if (func) {
            if (typeof func === 'function') {
                id = window.getRandom();
                while (_list[id] != null) {
                    id = window.getRandom();
                }
                _list[id] = func;
                _list[id].isOneCall = oneCall;
                return id;
            }
        } else if (func === false) {
            for (idEvent in _list) {
                fn = _list[idEvent];
                if (typeof fn === 'function') {
                    fn();
                    if (fn.isOneCall) {
                        _this.remove(idEvent);
                    }
                }
            }
        }
    };
    _this.remove = function(idEvent) {
        if (_list[idEvent] != null) {
            return delete _list[idEvent];
        }
    };
    _this.getList = function() {
        return _list;
    };
    return _this;
};
window.getRandom = function(min, max) {
    if (!min) {
        min = 0;
    }
    if (!max) {
        max = min + 999999999;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.doRefreshUI = DoList();