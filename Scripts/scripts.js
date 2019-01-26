if ($(window).width() > 768) {
  var lastScrollTop = 0;
  $(document).on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
          $('#navBar').fadeOut(1000);
      } else {
          $('#navBar').fadeIn(1000);
      }
      lastScrollTop = st;
  });
  function hideNav() {
    $('#navBar').fadeOut(1000);
  }
}

$(window).resize(function() {
  if ($(window).width() > 768) {
    var lastScrollTop = 0;
    $(document).on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('#navBar').fadeOut(1000);
        } else {
            $('#navBar').fadeIn(1000);
        }
        lastScrollTop = st;
    });
    function hideNav() {
      $('#navBar').fadeOut(1000);
    }
  }
});












function myFunction(x) {
  x.classList.toggle("change");
}

$(".a-link").on('click', function() {
  var x = $(this).attr("href");
  x = x.slice( 1 );
  $(".switch").fadeOut(10);
  $("div#"+x).fadeIn(800);
});
$(function() {

  // contact form animations
  $('.formButton').click(function() {
    $('#email').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#email");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
//^^JS piece taken from https://codepen.io/andrewerrico/pen/Efyrt THANK YOU!


});
function thankYou() {
    alert("Message has been sent, Thank you!");
}
function emailForm() {
  var x = document.getElementById("email");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$(function() {
  $('.a-link').click(function() {
    $('.a-link').removeClass("active");
    $(this).addClass("active");
  })
});



$(window).on('resize', function() {
    if (!eventFired) {
        if ($(window).width() < 960) {
            alert('Less than 960 resize');
        } else {
            alert('More than 960 resize');
        }
    }
});
