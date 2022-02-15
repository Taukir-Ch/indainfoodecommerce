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
  
  
  
        var $signupForm = $( '#SignupForm' );
        
        $signupForm.validate({
            errorElement: 'em',
            submitHandler: function (form) { 
                alert('submitted');
                form.submit();
            }
        });
        
        $signupForm.formToWizard({
            submitButton: 'SaveAccount',
            nextBtnClass: 'btn btn-primary next',
            prevBtnClass: 'btn btn-default prev',
            buttonTag:    'button',
            validateBeforeNext: function(form, step) {
                var stepIsValid = true;
                var validator = form.validate();
                $(':input', step).each( function(index) {
                    var xy = validator.element(this);
                    stepIsValid = stepIsValid && (typeof xy == 'undefined' || xy);
                });
                return stepIsValid;
            },
            progress: function (i, count) {
                $('#progress-complete').width(''+(i/count*100)+'%');
            }
        });
    
  
        function myMap() {
          var mapProp= {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
          };
          var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
          }
  
  
  
  })(jQuery);
