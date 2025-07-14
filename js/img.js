$(function () {
    let li = $('.img-li');
    let leng = li.length;
    let i = 0;

    // 让ul.img-ul覆盖全屏，li绝对定位
    $('.img-ul').css({
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        'pointer-events': 'none',
        'z-index': 10
    });
    li.css({
        position: 'absolute',
        left: '50vw',
        top: '50vh',
        width: '250px',
        height: '350px',
        margin: 0,
        padding: 0,
        transform: 'translate(-50%, -50%) scale(0.5)',
        opacity: 0,
        display: 'block',
        'pointer-events': 'auto'
    });
    li.find('img').css({width: '250px', height: '350px', display: 'block'});

    // 插入左上角按钮（样式与BirthdayCake.html一致）
    if ($('.back-button').length === 0) {
        $('<a>', {
            href: 'index.html',
            text: '返回首页',
            class: 'back-button',
            css: {
                position: 'fixed',
                left: '20px',
                top: '20px',
                'z-index': 1000,
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid #fff',
                padding: '10px 20px',
                'border-radius': '25px',
                color: '#fff',
                'text-decoration': 'none',
                'font-size': '16px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
            },
            mouseenter: function() { $(this).css({'background':'#fff','color':'#2fc6c8'}); },
            mouseleave: function() { $(this).css({'background':'rgba(255,255,255,0.2)','color':'#fff'}); }
        }).appendTo('body');
    }
    if ($('.memory-button').length === 0) {
        $('<a>', {
            href: 'Memories.html',
            text: '开启回忆',
            class: 'memory-button',
            css: {
                position: 'fixed',
                left: '20px',
                top: '80px',
                'z-index': 1000,
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid #fff',
                padding: '10px 20px',
                'border-radius': '25px',
                color: '#fff',
                'text-decoration': 'none',
                'font-size': '16px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
            },
            mouseenter: function() { $(this).css({'background':'#fff','color':'#2fc6c8'}); },
            mouseleave: function() { $(this).css({'background':'rgba(255,255,255,0.2)','color':'#fff'}); }
        }).appendTo('body');
    }

    // 生成更凌乱的随机目标点（四周）
    function getRandomTarget() {
        let maxX = $(window).width() * 0.45;
        let maxY = $(window).height() * 0.45;
        let angle = Math.random() * 2 * Math.PI;
        let radius = Math.random() * 0.8 + 0.2; // 0.2~1倍最大半径
        let x = Math.cos(angle) * maxX * radius;
        let y = Math.sin(angle) * maxY * radius;
        return { x, y };
    }

    function feiru() {
        if ((leng - 1) > i) {
            setTimeout(function () {
                let a = new animateFct(i);
                feiru();
                i++;
            }, 2000);
        } else {
            // 动画结束后，所有图片堆叠回中间
            setTimeout(function() {
                li.each(function(idx, el) {
                    $(el).css({
                        left: '50vw',
                        top: '50vh',
                        transform: 'translate(-50%, -50%) rotate(0deg) scale(1)',
                        opacity: 1,
                        'z-index': 100
                    });
                });
                // 中间下方出现开启回忆按钮
                if ($('.memory-bottom-btn').length === 0) {
                    $('<a>', {
                        href: 'Memories.html',
                        text: '开启回忆',
                        class: 'memory-bottom-btn',
                        css: {
                            position: 'fixed',
                            left: '50%',
                            bottom: '60px',
                            transform: 'translateX(-50%)',
                            'z-index': 1001,
                            background: 'rgba(255,255,255,0.2)',
                            border: '2px solid #fff',
                            padding: '10px 20px',
                            'border-radius': '25px',
                            color: '#fff',
                            'text-decoration': 'none',
                            'font-size': '20px',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            opacity: 0
                        },
                        mouseenter: function() { $(this).css({'background':'#fff','color':'#2fc6c8'}); },
                        mouseleave: function() { $(this).css({'background':'rgba(255,255,255,0.2)','color':'#fff'}); }
                    }).appendTo('body').animate({opacity: 1}, 800);
                }
            }, 1200);
            return;
        }
    }

    function animateFct(i) {
        let { x, y } = getRandomTarget();
        let deg = Math.floor(Math.random() * 120 - 60); // -60~60度
        let z = 1000 + i; // z-index递增，保证新照片在最上面
        li.eq(i).css({
            left: '50vw',
            top: '50vh',
            transform: 'translate(-50%, -50%) scale(0.5)',
            opacity: 0,
            'z-index': z
        });
        li.eq(i).show();
        setTimeout(function() {
            li.eq(i).animate({
                left: `calc(50vw + ${x}px)`,
                top: `calc(50vh + ${y}px)`
            }, 1200);
            li.eq(i).css({
                transition: 'transform 1.2s, opacity 1.2s',
                transform: `translate(-50%, -50%) rotate(${deg}deg) scale(1)`,
                opacity: 1
            });
        }, 100);
    }

    // 直接开始动画
    feiru();
})