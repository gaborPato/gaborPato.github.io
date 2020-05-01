class dog{

    countofeet=4;
}
class muki extends dog{



     counter=0;
     ugat() {
        document.write( " 4 lábam van és nüuhögök");
    }
}
muki= new muki();
muki.ugat();

$('h1').html('this is done by <em>javascript</em>!');
$('p').css('border','1px solid red');
/*var  h3= document.getElementsByTagName("h3");
h3[0].style.color="blue";*/
$('h3').css('color','yellow');
$('p').css('padding',"10px");
//$('p').toggleClass('blue-bb')
$('.blue-bb').css('background','purple');

 
function newNumber(){
    muki.counter++;
    r=parseInt(Math.random()*10+1);
    $('#szn').html(r);
    $('main').append('<p style="font-size: 30px;">'+muki.counter+'. new number avaiable</p>');
    
}
function addFunction(){
    string= '<p>this text added_p</p>';
    $('main').append(string);
}

$('#add_p_btn').click(function (){
    $('main').append('<p>this test is from p append click</p>')
});



$('#remove_btn').click(function (){
   $('p:last-child').remove(); 
});

colors= ['yellow','red','green','black'];
//for (var item in colors) {
//    $('main').append('<div class="box"></div>');
//    $('.box:last-child').css('backgrond',item);
//}
colors.forEach(function (color){
     $('main').append('<div class="box"></div>');
     console.log(color);
     $('.box:last-child').css('background',color);
});
//$('.box').css('background','yellow');