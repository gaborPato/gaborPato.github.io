/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





//addThings(45," program lang");
a= Math.random();

i=0;
do{
    b= parseInt(Math.random()*10,10);
    document.write(b);
    br();
    i++;
    
}while(i<10);
br();
document.write("a = " +a);
result=osztas(a,2);
br();
document.write(result); 
br();
document.write( parseInt(result,10) );
br();
if(result==3.5){
    document.write("result = " + result);
}else if (result>3.5) {
    document.write("result is too big");
}else{
    document.write("result is too small");
}





function addThings(int,string){
    var value= int + string;
    alert(value);
    
}
function saySome () {
    document.write("this is a function");
}

function osztas(n1,n2) {
    
    return n1/n2 ;
    
}

function br(){
    document.write("<br>");
}




