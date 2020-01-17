$(function() {
  $(".header__burger").on("click", function(event) {
    $(".header__burger,.header__menu").toggleClass("active");
  });
  
  
  $(".product__content-tabs-wrapper .tab ").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(".product__content-tabs-wrapper, .settings__tabs")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".product__content-tabs-wrapper .tabs, .settings__tabs .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });



  $('.preloader').fadeOut('slow');
    $('.chart').each(function(){
    $(this).easyPieChart({
            
            animate: 2000,
            lineCap:'butt',
            scaleColor: false,
            barColor: '#fff',
            trackColor: 'transparent',
            lineWidth: 10
        });
    });
    
  
   
});

