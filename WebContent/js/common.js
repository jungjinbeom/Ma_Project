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
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
=======

>>>>>>> project_J

    $('input.number-only').on('keyup', function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });

    /* 후원 상세페이지 */
<<<<<<< HEAD
    $('a.btn-donate').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#donate").offset().top
        });
    });

    $('a.add-wishlist').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('added-this');
    });

    $('.campaign-tab-nav .tab-item a').on('click', function(e){
        e.preventDefault();
        
        $('html,body').animate({
            scrollTop: $("#donate").offset().top
        });

=======
    $('.campaign-tab-nav .tab-item a').on('click', function(e){
        e.preventDefault();
>>>>>>> project_J
        $('.campaign-tab-nav .tab-item').removeClass('active');
        $('.campaign-tab-content .tab-content-item').removeClass('active');

        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('active');
    });

    $('a.qna-title').on('click', function(e){
        e.preventDefault();
        $($(this).attr('href')).toggleClass('hidden');
    });

<<<<<<< HEAD
    //소셜공유
    var clipboard = new ClipboardJS('.copy_url');
	clipboard.on('success', function(e) {
		alert('URL이 복사되었습니다.');
	    e.clearSelection();
	});
	clipboard.on('error', function() {
		alert('이 브라우저는 지원하지 않습니다.');
    });
    
    $('.btn-share-sns').on('click', function(){
        var sns = $(this).data('sns');
        var url = $(this).data('url');
        var text = $(this).data('text');

        var w = 720;
        var h = 350;

        switch(sns){
            case 'facebook':
                $.post('https://graph.facebook.com', {id:encodeURI(url),scrape:true});
                window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), 'charitree_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
                break;
            case 'twitter':
                window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url), 'charitree_share', 'width='+w+',height='+h+',left='+(screen.availWidth-w)*0.5+',top='+(screen.availHeight-h)*0.5);
                break;
            case 'kakaotalk':
                var share_img_src = $('meta[property="og:image"]').last().attr('content');
                if(share_img_src){
                    Kakao.Link.sendDefault({
                        objectType: 'feed',
                        content: {
                            title: text,
                            imageUrl: share_img_src,
                            link: {
                                mobileWebUrl: url,
                                webUrl: url
                            }
                        }
                    });
                }
                else{
                    alert('카카오톡 링크에 표시할 이미지를 설정해주세요.');
                }
                break;
        }
    });
});

/** 캠페인 상세 폼 유효성 검사 **/
//코멘트
function campaign_comment_validation(){
    if($('textarea[name=campaign_comment]').val().length == 0){
        alert('내용을 입력해주세요');
        return false;
    }
}
//문의
function campaign_qna_validation(){
    if($('input[name=qna_title]').val().length == 0){
        alert('제목을 입력해주세요');
        return false;
    }
    if($('textarea[name=qna_question]').val().length == 0){
        alert('문의내용을 입력해주세요');
        return false;
    }
}
>>>>>>> 31f03afeaac7276b42c0a030c37a732289c38f33
=======
});
>>>>>>> project_J
