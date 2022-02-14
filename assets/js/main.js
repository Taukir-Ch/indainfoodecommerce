/*---------------------------------------------
Template name:  taukir-quickstart || html template
Version:        1.0
Author:  MD Taukir CH
Author url:     https://github.com/rajibmehedihasan

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]
----------------------------------------------*/

(function ($) {

    "use strict";
  
  
  
    // data - background
  
    $("[data-background]").each(function () {
  
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  
    })
  
  
  
    // // meanmenu
  
    // $('#mobile-menu').meanmenu({
  
    //   meanMenuContainer: '.mobile-menu',
  
    //   meanScreenWidth: "992"
  
    // });
    $(document).ready(function(){

        $(".hamburger-nav").on("click", function(){
      
          // $(".menu").fadeToggle("slow").toggleClass("menu-hide");
          $(".menu").animate({
            height: 'toggle'
          });
      
        });
      
      });
  
  

  
  
  
  
  })(jQuery);
