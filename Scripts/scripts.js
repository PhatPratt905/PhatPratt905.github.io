function myFunction(x) {
  x.classList.toggle("change");
}

$(".a-link").on('click', function() {
  var x = $(this).attr("href");
  x = x.slice( 1 );
  $(".switch").fadeOut(10);
  $("div#"+x).fadeIn(800);
});
