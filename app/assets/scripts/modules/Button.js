import $ from 'jquery';

/*====================================================================================================
                                      Propriété display                      
======================================================================================================*/

$(".btn__1-1").click(function() {
  $(".box__section-1").removeClass("box__section-1--clicked");
});
$(".btn__1-2").click(function() {
  $(".box__section-1").addClass("box__section-1--clicked");
});

/*====================================================================================================
                                Centrer un élément horizontalement                       
======================================================================================================*/
$("button").click(function() {
  /* ----------------------------------------------
              Bouton "Non centré"
  ------------------------------------------------*/
  if ($(this).hasClass("btn__2-1")) {
    // Box
    $(".box__2-1").removeClass("box__2-1--clicked");
    $(".box__2-2").removeClass("box__2-2--clicked");
    $(".box-container__2-1").removeClass("box-container__2-1--clicked");
    $(".box__2-3").removeClass("box__2-3--clicked");
    $(".box-container__2-4").removeClass("box-container__2-4--clicked");
    // Text
    $(".text__2-1").addClass("text__2-1--clicked");  
    $(".text__2-2").removeClass("text__2-2--clicked"); 
    $(".text__2-3").removeClass("text__2-3--clicked"); 
    $(".text__2-4").removeClass("text__2-4--clicked");
    $(".text__2-5").removeClass("text__2-5--clicked");
  }
  /* -----------------------------------------------
         Bouton "Centrer avec un text-align"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__2-2")) {
    // Box
    $(".box__2-1").addClass("box__2-1--clicked");
    $(".box-container__2-1").addClass("box-container__2-1--clicked");
    // Text
    $(".text__2-1").removeClass("text__2-1--clicked");  
    $(".text__2-2").addClass("text__2-2--clicked"); 
    $(".text__2-3").removeClass("text__2-3--clicked"); 
    $(".text__2-4").removeClass("text__2-4--clicked");
    $(".text__2-5").removeClass("text__2-5--clicked");
  }
  /* -----------------------------------------------
         Bouton "Centrer avec margin"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__2-3")) {
    // Box
    $(".box__2-2").addClass("box__2-2--clicked");
    // Text
    $(".text__2-1").removeClass("text__2-1--clicked");  
    $(".text__2-2").removeClass("text__2-2--clicked"); 
    $(".text__2-3").addClass("text__2-3--clicked"); 
    $(".text__2-4").removeClass("text__2-4--clicked"); 
    $(".text__2-5").removeClass("text__2-5--clicked");
  }
  /* -----------------------------------------------
             Bouton "Centrer un absolute"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__2-4")) {
    // Box
    $(".box__2-3").addClass("box__2-3--clicked");
    // Text
    $(".text__2-1").removeClass("text__2-1--clicked");  
    $(".text__2-2").removeClass("text__2-2--clicked"); 
    $(".text__2-3").removeClass("text__2-3--clicked"); 
    $(".text__2-4").addClass("text__2-4--clicked"); 
    $(".text__2-5").removeClass("text__2-5--clicked");
  }
  /* -----------------------------------------------
         Bouton "Centrer avec flexbox"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__2-5")) {
    // Box
    $(".box-container__2-4").addClass("box-container__2-4--clicked");
    // Text
    $(".text__2-1").removeClass("text__2-1--clicked");  
    $(".text__2-2").removeClass("text__2-2--clicked"); 
    $(".text__2-3").removeClass("text__2-3--clicked"); 
    $(".text__2-4").removeClass("text__2-4--clicked");
    $(".text__2-5").addClass("text__2-5--clicked");
  }
});
/*====================================================================================================
                                Centrer un élément verticalement                        
======================================================================================================*/
$("button").click(function() {
  /* -----------------------------------------------
                  Bouton "Non centré"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__3-1")) {
    // Box
    $(".box__3-1").removeClass("box__3-1--clicked");
    $(".box__3-2").removeClass("box__3-2--clicked");
    $(".box-container__3-3").removeClass("box-container__3-3--clicked");
    $(".box__3-4").removeClass("box__3-4--clicked");
    // Text
    $(".text__3-1").addClass("text__3-1--clicked");  
    $(".text__3-2").removeClass("text__3-2--clicked"); 
    $(".text__3-3").removeClass("text__3-3--clicked"); 
    $(".text__3-4").removeClass("text__3-4--clicked");
    $(".text__3-5").removeClass("text__3-5--clicked");
  }
  /* -----------------------------------------------
         Bouton "Centrer sur une ligne"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__3-2")) {
    // Box
    $(".box__3-1").addClass("box__3-1--clicked");
    // Text
    $(".text__3-1").removeClass("text__3-1--clicked");  
    $(".text__3-2").addClass("text__3-2--clicked"); 
    $(".text__3-3").removeClass("text__3-3--clicked"); 
    $(".text__3-4").removeClass("text__3-4--clicked");
    $(".text__3-5").removeClass("text__3-5--clicked");
  }
  /* -----------------------------------------------
              Bouton "Centrer avec margin"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__3-3")) {
    // Box
    $(".box__3-2").addClass("box__3-2--clicked");
    // Text
    $(".text__3-1").removeClass("text__3-1--clicked");  
    $(".text__3-2").removeClass("text__3-2--clicked"); 
    $(".text__3-3").addClass("text__3-3--clicked"); 
    $(".text__3-4").removeClass("text__3-4--clicked"); 
    $(".text__3-5").removeClass("text__3-5--clicked");
  }
  /* -----------------------------------------------
         Bouton "Centrer avec flexbox"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__3-4")) {
    // Box
    $(".box-container__3-3").addClass("box-container__3-3--clicked");
    // Text
    $(".text__3-1").removeClass("text__3-1--clicked");  
    $(".text__3-2").removeClass("text__3-2--clicked"); 
    $(".text__3-3").removeClass("text__3-3--clicked"); 
    $(".text__3-4").addClass("text__3-4--clicked"); 
    $(".text__3-5").removeClass("text__3-5--clicked");
  }
  /* -----------------------------------------------
              Bouton "Centrer un absolute"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__3-5")) {
    // Box
    $(".box__3-4").addClass("box__3-4--clicked");
    // Text
    $(".text__3-1").removeClass("text__3-1--clicked");  
    $(".text__3-2").removeClass("text__3-2--clicked"); 
    $(".text__3-3").removeClass("text__3-3--clicked"); 
    $(".text__3-4").removeClass("text__3-4--clicked"); 
    $(".text__3-5").addClass("text__3-5--clicked"); 
  }
});
/*====================================================================================================
                                      Positionner un element                        
======================================================================================================*/
$("button").click(function() {
  /* -----------------------------------------------
                  Bouton "static"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__4-1")) {
    // Box
    $(".box__4-2").removeClass("box__4-2--clicked");    
    $(".box__4-2").removeClass("box__4-2--clicked-2"); 
    $(".box__4-2").removeClass("box__4-2--clicked-3"); 
    // Text
    $(".text__4-1").addClass("text__4-1--clicked");  
    $(".text__4-2").removeClass("text__4-2--clicked"); 
    $(".text__4-3").removeClass("text__4-3--clicked"); 
    $(".text__4-4").removeClass("text__4-4--clicked"); 
  }
  /* -----------------------------------------------
                  Bouton "relative"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__4-2")) {
    // Box
    $(".box__4-2").removeClass("box__4-2--clicked-2");
    $(".box__4-2").removeClass("box__4-2--clicked-3");
    $(".box__4-2").addClass("box__4-2--clicked"); 
    // Text
    $(".text__4-1").removeClass("text__4-1--clicked");     
    $(".text__4-2").addClass("text__4-2--clicked"); 
    $(".text__4-3").removeClass("text__4-3--clicked");     
    $(".text__4-4").removeClass("text__4-4--clicked");  
  }
  /* -----------------------------------------------
                    Bouton "fixed"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__4-3")) {
    // Box
    $(".box__4-2").removeClass("box__4-2--clicked");      
    $(".box__4-2").removeClass("box__4-2--clicked-3");      
    $(".box__4-2").addClass("box__4-2--clicked-2");      
    // Text
    $(".text__4-1").removeClass("text__4-1--clicked");     
    $(".text__4-2").removeClass("text__4-2--clicked"); 
    $(".text__4-3").addClass("text__4-3--clicked");
    $(".text__4-4").removeClass("text__4-4--clicked");      
  }
  /* -----------------------------------------------
                  Bouton "absolute"
  -------------------------------------------------*/
  if ($(this).hasClass("btn__4-4")) {
    // Box
    $(".box__4-2").removeClass("box__4-2--clicked");      
    $(".box__4-2").removeClass("box__4-2--clicked-2");      
    $(".box__4-2").addClass("box__4-2--clicked-3");      
    // Text
    $(".text__4-1").removeClass("text__4-1--clicked");     
    $(".text__4-2").removeClass("text__4-2--clicked"); 
    $(".text__4-3").removeClass("text__4-3--clicked"); 
    $(".text__4-4").addClass("text__4-4--clicked");     
  }
});

// class Button {
//   constructor(btn, box2, text1, text2, text3, text4) {
//     this.btn = btn;
//     this.box2 = box2;
//     this.text1 = text1;
//     this.text2 = text2; 
//     this.text3 = text3;
//     this.text4 = text4;
//     this.events();
//   }

//   events() {
//     $("button").click(function() {
//       if ($(this).hasClass(this.btn)) {
//         this.box2.removeClass("box__3-2--clicked-2");
//         this.box2.removeClass("box__3-2--clicked-3");
//         this.box2.addClass("box__3-2--clicked");

//         this.text1.removeClass("text__3-1--clicked");
//         this.text2.addClass("text__3-2--clicked");
//         this.text3.removeClass("text__3-3--clicked");
//         this.text4.removeClass("text__3-4--clicked");
//       }
//     });
//   }
// }