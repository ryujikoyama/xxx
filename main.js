
$(function() {

$('#acMenu a').on('click', function() {
  $(this).next().slideToggle();
});

$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
  $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
})

$('li[href^="html"]').on('click', function () {        // js-btnクラスをクリックすると、
  $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
})

$('li[href^="#"]').on('click', function () {//href属性の中身が#から始まる形だったら
  var href = $(this).attr('href');//href属性の中身を変数に入れる
  var target;//移動先を入れるための変数を作り
  if (href == '#' || href == '') {//取得したhrefの中身が「#だけ」もしくは「空」だったときの処理
    target = $('html');//移動先はページ上部にするためhtmlをjQueryオブジェクトにし変数へ
  } else {//それ以外の場合は
    target = $(href);//取得したhref属性の中身をjQueryオブジェクトにし変数へ
  }
  var posi = target.offset().top; //取得したhrefの上からの距離を取得して変数に入れる
  $('html,body').animate({
    'scrollTop': posi
  }, 800);//animateメソッドで移動
  return false;//URLを書き換えたくないときはa要素の動きを止める
});

$('.slider').slick({
  autoplay: true,
  dots: true,
});



});

