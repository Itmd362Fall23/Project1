jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
});
 
 
  $(document).ready(function(){
    $("#submit").click(function(){
      if(confirm("Are you ready to enter the Raffle?")){
      alert("You have been enrolled into the raffle!");}
      else alert("Enrollment has not worked");
  
  });
  });

