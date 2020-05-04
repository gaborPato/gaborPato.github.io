/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


thrashBandsArray= ["Exodus","Metallica","Death Angel","Testament"];
thrashBandsArray.forEach(function (band){
    if(band != 'Metallica'){
        str='<li class="underLine">'+band+'</li>';
    }else{
         str='<li class="underLine"><strong>'+band+'</strong></li>';
    }
    
    
    
    
    $('ol').append(str);
    
    
});
delete(str);
addBlock= {
    title:"added with javascript!",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("title").html(addBlock.title);

str="<p>"+addBlock.text+"</p>";
//('#normal').css();
$("body").append(str);
delete(str);
