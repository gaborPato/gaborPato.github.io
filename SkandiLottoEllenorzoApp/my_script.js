
var lineCounter=0;


function addnewline() {
    lineCounter++;

    var command=' <div  class="szelveny line'+lineCounter+' id="_addeddiv'+lineCounter+'">\n' +
        '        <input type="number" name="num'+lineCounter+'_0" min="1" max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_1" min="1"  max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_2" min="1"  max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_3" min="1"  max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_4" min="1"  max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_5" min="1"  max="35">\n' +
        '        <input type="number" name="num'+lineCounter+'_6" min="1"  max="35">\n' +

        '        <button class="remove_button" onclick="removeClick(this)" id="rem_button'+lineCounter+'">remove</button>\n' +
        '\n' +
        '    </div>'

    $('main').append(command);

}


function removeClick(element) {

    id=element.id;
   number=(id.substring(id.length-1));

    //divId=('#'+'_addeddiv'+number+'').toString();
    divClass=".line"+number;
   console.log(divClass);
   $(divClass).remove();


}
$('#result_button').click(function () {
//szelveny:
    szelveny_divLength= $('.szelveny').length;
   szelveny=[];



for(i=0; i<szelveny_divLength; i++){
szelveny[i]=[];
    for ( j = 0; j <7; j++) {
      inputvalue=$('input[name=num'+i+'_'+j+']').val();
      if(inputvalue=="") continue;
      inputvalue=parseInt(inputvalue);

      szelveny[i][j]=inputvalue;

    }

}
console.log(szelveny);
//nyeröszámok:
winNumber_Div_length=$('.nyeroszam').length;
winNumbers=[];

    for(i=0; i<winNumber_Div_length; i++){
        winNumbers[i]=[];
        for ( j = 0; j <7; j++) {
            inputvalue=$('input[name=nyer_num'+i+'_'+j+']').val();
            if (inputvalue=="") continue;
            inputvalue=parseInt(inputvalue);

            winNumbers[i][j]=inputvalue;

        }

    }
    console.log(winNumbers);

 //   the_coupon= new Szelveny(szelveny);
  //  the_win_numbers= new Nyeroszamok(winNumbers);
    showCalculation(new Szelveny(szelveny),new Nyeroszamok(winNumbers));
});

function showCalculation(szelveny,nyeroszamok) {
   resultMap= talalat(szelveny.szelveny,nyeroszamok.nyeroszamok);
 $('p').remove();
   $('.result_section').css('background','#e8685d');
   $('.result_section').append('<p class="info_p">A szelvény nem nyert. </p>')

   for(i=4;i<8;i++){
       if (resultMap.get(i)>0){

           $('.result_section').css('background','#88fc77');
           $('.info_p').html('Nyerő Szelvény');
           html_command='<p class="talalatok_p">'+i+' találatos: '+resultMap.get(i)+' darab</p>';
           $('.result_section').append(html_command);

       }
   }


}