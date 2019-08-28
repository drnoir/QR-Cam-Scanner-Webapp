// on click functions for artifact facts / popups 

$(document).ready(function(){

  $(".image-dot").click(function(){
    $("p.infobox").empty();
    $("p.infobox").append("This is the fuselage of the toxic waste ....");
  });


  $(".image-dot2").click(function(){
    $("p.infobox").empty();
    // $(".infobox1").hide();
    // $("#open")[0].play();
    // $(".infobox2").show();
    $("p.infobox").append("This is blablablllba ....");
});

//  WORKING ON Click hide div
// $('container').click(function(){
//   $('.infobox1','infobox2').hide();
//  });

});