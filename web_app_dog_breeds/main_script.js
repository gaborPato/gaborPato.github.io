var quiz_Answer;
var answers;
var q_counter;
var rightAnswer;
const breedClassIndex=0;
const changableAnswerArrayIndex=1;

initStart();
function initStart(){
    q_counter=0;
    rightAnswer=0;
    quiz_Answer= finalQuizQuestionArray();
    answers=[];
    for (let i = 0; i <quiz_Answer.length ; i++) {
        answers[i]=quiz_Answer[i][changableAnswerArrayIndex];
    }
    console.log(quiz_Answer);
    console.log(answers);


    loadDataToHtml();
}
function loadDataToHtml(){
   showResult();
    $('label').css('color','black');
    $('input[name=answ]').prop('checked',false);
    $('img').attr('src',quiz_Answer[q_counter][breedClassIndex]._dogPicURL);
    for (i=0;i<answers.length;i++){
        $('label[for='+i+']').html(answers[q_counter][i]);
        $('label[for='+i+']').prev().val(answers[q_counter][i]);
    }
}




$('#tipp').click(function () {

var checkedTipp= $('input[name=answ]:checked').val();

if (checkedTipp==undefined){
    alert('Jelöld be a tippedet!');
    return;
}
    $('#tipp').prop('disabled',true);
if(checkedTipp==quiz_Answer[q_counter][breedClassIndex]._breedName){
    console.log('helyes tipp');
    rightAnswer++;
}

var allLabels= document.getElementsByTagName('label');
    for (i=0;i<allLabels.length;i++){
         if ( $(allLabels[i]).html()==quiz_Answer[q_counter][breedClassIndex]._breedName){
             $('#label'+i).css('color','green');
         } else {
             $('#label'+i).css('color','red');
         }
    }
    setTimeout(()=>{
        $('#tipp').prop('disabled',false);
        q_counter++;
        if (q_counter<QUESTION_QUIZ_NUMBER){

            loadDataToHtml()
        }else if (q_counter==QUESTION_QUIZ_NUMBER) {
            let command='<button id="new_game" class="control_button new_game_button" onclick="newGameClick()">Új játék</button>';
            $('.button_div').append(command);
            $('#tipp').prop('disabled',true);
            showResult();
        }

    },700);

});
function newGameClick() {
    console.log("new game click");

    $('#new_game').remove();
    $('#tipp').prop('disabled',false);
    initStart();

}
function showResult() {
    resultCommand='Eredmény: '+q_counter+'/'+rightAnswer;
    $('#result_p').html(resultCommand);
}
 






