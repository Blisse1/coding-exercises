$(function(){
    console.log($("h1").html());
    console.log($("li").hasClass("elemento9"));
    $("<h2>Dominando métodos jQuery</h2>").insertAfter("h1").addClass("subtitulo");
    $("p").clone().insertAfter("ul").attr("class", "segundo");    

    $(".hide").click(function(){
      $(".elemento1").hide();  
      $(".elemento2").hide();  
      $(".elemento3").hide();  
      $(".elemento4").hide();  
      $(".elemento5").hide();  
      $(".elemento6").hide();  
      $(".elemento7").hide();  
    });
    $(".show").click(function(){
      $(".elemento1").show();  
      $(".elemento2").show();  
      $(".elemento3").show();  
      $(".elemento4").show();  
      $(".elemento5").show();  
      $(".elemento6").show();  
      $(".elemento7").show();  
    });
})
