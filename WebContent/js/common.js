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
    // var datepickerYMD = {
    //     dateFormat: 'yy-mm-dd'
    // }

    // var datepickerYM = {
    //     dateFormat: 'yy-mm'
    // }

    // $('.datepicker-ymd').datepicker(datepickerYMD);
    // $('.datepicker-ym').datepicker(datepickerYM);

});