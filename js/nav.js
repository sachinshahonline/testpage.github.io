$(document).ready(function(){
  $("#slideopen").click(function(){
    $(".slidebar").animate({left: '0px'},700);
  });
});




$(document).ready(function(){
  $("#slideclose").click(function(){
    $(".slidebar").animate({left: '-320px'},700);
      $("#Cakepanel").slideUp(400);
      $("#Orderpanel").slideUp(400);
      $("#CheckMorepannel").slideUp(400);
      $("#Bookingpanel").slideUp(400);
      $("#Signuppanel").slideUp(400);
  });
});


$(document).ready(function(){
  $("#Cake").click(function(){
    $("#Cakepanel").slideToggle(400);
  });
});
 
$(document).ready(function(){
  $("#Order").click(function(){
    $("#Orderpanel").slideToggle(500);
  });
});

$(document).ready(function(){
  $("#CheckMore").click(function(){
    $("#CheckMorepannel").slideToggle(500);
  });
});

$(document).ready(function(){
  $("#Booking").click(function(){
    $("#Bookingpanel").slideToggle(500);
  });
});

$(document).ready(function(){
  $("#Signup").click(function(){
    $("#Signuppanel").slideToggle(500);
  });
});

 /*  function slideshow(){
      var x = document.getElementById('check-class');
      if(x.style.display === "none"){
         x.style.display="block";
    }else{
        x.style.display="none";
        
    }
    
    }
    
*/

   