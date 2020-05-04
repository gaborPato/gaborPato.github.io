/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
counter=0;
$("#b1").click(( ) =>{
   console.log("click b1 button"); 
});

$("#b2").click(() =>{
    $("#b1").html("changed b1");
});
$("#b3").click(() =>{
    if(counter<1){
         var color= $('input').val();
    $("button").css("background",color);
    counter++;
    }
  
});
