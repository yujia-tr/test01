(function () {
  // AOS
  AOS.init({
  });

  luxy.init();

  // FancyBox
  $('[data-fancybox]').fancybox({
    loop: true, // 複数画像表示時に最初と最後をループさせる
    toolbar: false, // ツールバーの非表示
    smallBtn: true, // 小さいCloseボタン利用する
    iframe: { // iframe 関連の処理 
      preload: false //iframeのプリロードをしない
    }
  });


  // Pagetop
  $('#pagetop').on('click', (e) => {

    let $target = $(e.target);

  });

  // execute above function
  // initPhotoSwipeFromDOM('.my-gallery');


  //ヘッダー表示
  // $(window).scroll(function () {
  //   var headerH = $('.content').outerHeight(true);
  //   var scroll = $(window).scrollTop();
  //   if (scroll >= headerH){
  //       $('#header').addClass('fixed');
  //     }else{
  //       $('#header').removeClass('fixed');
  //     }
  // });

})();

//ページ内リンク スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var duration = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, duration, 'swing');
    return false;
  });
});

//スクロールによる見出しアニメーション
$(function () {
  // $(window).on('scroll', function () {
  //   $('.heading-title').each(function () {
  //     let position = $(this).offset().top;
  //     let scroll = $(window).scrollTop();
  //     let windowHeight = $(window).height();
  //     if (scroll > position - windowHeight - 150) {
  //       $(this).addClass('isActive');
  //     }
  //     else {
  //       $(this).removeClass('isActive');
  //     }
  //   });
  // });

  $('.heading-title').on('inview', function () {
    $(this).toggleClass('isActive');
  });

});

//ヘッダーの表示・非表示
$(function () {
  $('.header-button').on('click', function () {
    $('#header').toggleClass('active');
  });

  $('.header-gnav ul li a').on('click', function () {
    $('#header').removeClass('active');
  });

  $('.header-logo').on('click', function () {
    $('#header').removeClass('active');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('#header').length) {
      $('#header').removeClass('active');
    }
  });

  $(window).on('scroll', function () {
    if ($('#header').hasClass('active')) {
      $('#header').removeClass('active');
    }
  });
});
