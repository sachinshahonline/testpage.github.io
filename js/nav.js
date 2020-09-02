$(document).ready(function(){
  $("#slideopen").click(function(){
    $(".slidebar").animate({left: '0px'},700);
  });
});




$(document).ready(function(){
  $("#slideclose").click(function(){
    $(".slidebar").animate({left: '-320px'},700);
  });
});


    function slideshow(){
      var x = document.getElementById('check-class');
      if(x.style.display === "none"){
         x.style.display="block";
    }else{
        x.style.display="none";
        
    }
    
    }

   