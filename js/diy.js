$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
        'loopTop': false,
        'loopBottom': false,
        // 如有内容超高可加：scrollOverflow: true
        afterLoad: function(anchorLink, index){
            if(index === 1){
                // 强制显示第一屏所有内容
                $('.ly-box01, .ly-txt01, .ly-txt02, .ly-txt01 *, .ly-txt02 *').css('opacity', 1);
            }
        }
    });

    // 第一屏动画大约15秒，自动切换到第二屏
    setTimeout(function(){
        if($.fn.fullpage && typeof $.fn.fullpage.moveSectionDown === 'function'){
            $.fn.fullpage.moveSectionDown();
        }
    }, 15500);
});