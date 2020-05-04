/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


counter=0;

$('#addTodo').click(() => {
    todo= $("input").val();
    str='<div><li id="remo'+counter+'">'+todo+'</li><button id="remo'+counter+'" class="delBtn">remove</button></div>';
    $("ul").append(str);
    $("input").val('');
    counter++;
}
    );
    $('ul').on('click','.delBtn',(event) =>{
        
        id=event.target.id;
        id_str='#'+id;
        console.log(id_str);
        $(id_str).remove();
        $(event.target).remove();
        
     
    });
    
   
    
   
    
   // $('ul').removeClass(counter);

