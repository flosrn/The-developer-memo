import $ from 'jquery';

var accordion = function() {
  // Read out the data attribute for type of accordion
  var data = $(".accordion").attr("data-accordion");

  // start the event Handler
  $(".accordion-header").on("click", function(){
    // Look out for the type of accordion open or close
    if (data === "close") {
      $(".accordion-body").slideUp();
      if ($(this).hasClass("active")) {
        $(this).toggleClass("active");
      }
      else {
        $(".accordion-header").removeClass("active");
        $(this).toggleClass("active");
      }
     }
    else {
      $(this).toggleClass("active");
    }
    $(this).next(".accordion-body").not(":animated").slideToggle();  
  });  
}

// Initialize the accordion in your document.ready function
accordion();
