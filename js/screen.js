jQuery(function($)){
  $('html').removeClass('nojs')
  $('html').addClass('hasjs')
 
 
  $(form).ready(function(){
  $(#submitButton).click(function(){
  if(confirm("Are you Sure?")){
  alert("You have been enrolled into the raffle!");
  } else alert("Enrollment was not completeed");
  
  }
  }


}