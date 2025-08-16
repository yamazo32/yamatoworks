// // toggle button
// $(function() {
// 	$('#menubtn').click(function() {
// 		$('#menu').slideToggle();
// 	});
// });

// //ページ トップへの矢印がフェードイン
// $(document).ready(function() {
// 	var pagetop = $('.pagetop');
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 500) {
// 			pagetop.fadeIn();
// 		} else {
// 			pagetop.fadeOut();
// 		}
// 	});
// 	//pagetop.click(function () {
// 	//	$('body, html').animate({ scrollTop: 0 }, 500);
// 	//	return false;
// 	//});
// });

// // ページ内スルスルスクロール
// $(function(){
// 	$('a[href^=#]').click(function(){
// 		var speed = 500;
// 		var href= $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$("html, body").animate({scrollTop:position}, speed, "swing");
// 		return false;
// 	});
// });

// // jquery.easy-rollover.js
// $(function(){
//     $('img').hover(function(){
//         $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
//           }, function(){
//              if (!$(this).hasClass('currentPage')) {
//              $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
//         }
//    });
// });



document.addEventListener('DOMContentLoaded', () => {
  // ✅ トグルボタン（メニューの開閉）
  const menubtn = document.getElementById('menubtn');
  const menu = document.getElementById('menu');

  if (menubtn && menu) {
    menubtn.addEventListener('click', () => {
      // スライドっぽい挙動を再現（簡易版）
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  }

  // ✅ ページトップボタンの表示・非表示
  const pagetop = document.querySelector('.pagetop');

  if (pagetop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        pagetop.style.opacity = '1';
        pagetop.style.pointerEvents = 'auto';
      } else {
        pagetop.style.opacity = '0';
        pagetop.style.pointerEvents = 'none';
      }
    });

    pagetop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ✅ スムーススクロール（ページ内アンカーリンク）
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href === '#' || href === '' ? 'html' : href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ✅ ロールオーバー（画像 _off / _on 切り替え）
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const originalSrc = img.getAttribute('src');
    if (!originalSrc || !originalSrc.includes('_off')) return;

    const hoverSrc = originalSrc.replace('_off', '_on');

    img.addEventListener('mouseenter', () => {
      img.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseleave', () => {
      if (!img.classList.contains('currentPage')) {
        img.setAttribute('src', originalSrc);
      }
    });
  });
});
