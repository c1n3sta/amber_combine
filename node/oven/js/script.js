$(function () {
  $(".temperature").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function( event, ui ) {
      $(".amount").html( ui.value );
      console.log(1 + ' ' + ui.value)
    }
  });
  $(".amount").html($(".temperature").slider("value"));
});