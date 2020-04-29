$(function(){
    /* 메뉴 */
    var navHeight = $('#site-navigation').height()+1;
    $('#site-navigation>.nav-menu>.menu-item.has-child').hover(
        function(e){
            e.stopPropagation();
            var submenu = $(this).children('.sub-menu');
            submenu.css('top', navHeight+'px');
            submenu.slideDown(400, function(){
                submenu.removeClass('hidden');
            });
        },
        function(e){
            e.stopPropagation();
            var submenu = $(this).children('.sub-menu');
            submenu.slideUp(400, function(){
                submenu.addClass('hidden');
            });
        }
    );

    /* 메뉴 모달 검색창 */
    $('#search-ico').on('click', function(e){
        e.preventDefault();
        $($(this).data('target')).fadeIn(function(){
            $(this).removeClass('hidden');
        });
    });

    $('.modal .close').on('click', function(){
        $(this).parents('.modal').fadeOut(function(){
            $(this).parents('.modal').addClass('hidden');
        });
    });


    $('input.number-only').on('keyup', function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });

    /* 후원 상세페이지 */
    $('.campaign-tab-nav .tab-item a').on('click', function(e){
        e.preventDefault();
        $('.campaign-tab-nav .tab-item').removeClass('active');
        $('.campaign-tab-content .tab-content-item').removeClass('active');

        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('active');
    });

    $('a.qna-title').on('click', function(e){
        e.preventDefault();
        $($(this).attr('href')).toggleClass('hidden');
    });

});