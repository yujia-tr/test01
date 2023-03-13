(function () {
  // AOS
  AOS.init({
  });

  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
    // スマートフォン
  }
  else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // タブレット
  }
  else {
    // PC
    luxy.init();
  }

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
  let winW =window.innerHeight;

  $('.heading-title').on('inview', function () {
    $(this).toggleClass('isActive');
  });

  $(window).on('scroll', function(){
    if ($(this).scrollTop() >= winW) {
      $('.header-button').addClass('active');
      $('.pagetop').addClass('active');

    }
    else {
      $('.header-button').removeClass('active');
      $('.pagetop').removeClass('active');
    }
  });
});

//ヘッダーの表示・非表示
$(function () {
  var flag = 1;
  //windowサイズの取得
  $(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 768;
    if (winW <= devW) {
          flag = 1;
    }
    else {
        flag = 0;
    }
  });
  //windowサイズによってのヘッダーメニューを開く
  $('.header-button').on('click', function () {
    if (flag == 1) {
      $('.menu-container').addClass('active');
      $('body').css('overflow-y', 'hidden');
      $('.menu-heading').addClass('isActive');
    }
    else if (flag == 0) {
      $('#header').addClass('active');
    }
  });
});

//ヘッダーメニュー　閉じる
$(function () {
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

//ヘッダーメニュー モーダルを閉じる
$(function(){
	$('.menu-close').on('click',function(){	
		$('.menu-container').removeClass('active');
    $('body').css('overflow-y','auto');
    $('.menu-heading').removeClass('isActive');
  });

  $('.menu-link').on('click',function(){	
		$('.menu-container').removeClass('active');
    $('body').css('overflow-y','auto');
    $('.menu-heading').removeClass('isActive');
  });
});

//アルバム　モーダルウィンドウ
$(function(){
	// var open = $('.modal-open'),
	// 	close = $('.modal-close'),
	// 	container = $('.modal-container');

    $('.modal-open').on('click', function () {
      $('.modal-container').addClass('active');
      $('body').css('overflow-y', 'hidden');
      $('.modal-heading').addClass('isActive');
    });
    
	//閉じるボタン　モーダルを閉じる
	$('.modal-close').on('click',function(){	
		$('.modal-container').removeClass('active');
    $('body').css('overflow-y','auto');
    $('.modal-heading').removeClass('isActive');
  });

  //モーダル内リンク押下時　モーダル閉じる
  $('.modal-link').on('click',function(){	
		$('.modal-container').removeClass('active');
    $('body').css('overflow-y','auto');
    $('.modal-heading').removeClass('isActive');
  });

	//モーダルの外側　モーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-content').length) {
			container.removeClass('active');
      $('body').css('overflow-y','auto');
      $('.modal-heading').removeClass('isActive');
		}
	});
});
