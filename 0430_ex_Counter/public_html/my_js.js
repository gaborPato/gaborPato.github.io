/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


numT= $("h2").text();
console.log(numT);
num= parseInt(numT);

$('#count_minus').click(() =>{
    
    num--;
    $('h2').html(num);
    
});

$('#count_plus').click(() => {
   
    num++;
    $('h2').html(num);
});