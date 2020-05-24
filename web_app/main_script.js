var quizQuestions;
var answers;
var nextPic;
var rightAnswer;

initStart();
function initStart(){
    nextPic=0;
    rightAnswer=0;
    quizQuestions= getGameQuestions();
    console.log(quizQuestions);
    answers=get_game_questions(quizQuestions);
    console.log(answers);
    loadDataToHtml();
}
function loadDataToHtml(){
   showResult();
    $('label').css('color','black');
    $('input[name=answ]').prop('checked',false);
    $('img').attr('src',quizQuestions[nextPic].path);
    for (i=0;i<answers.length;i++){
        $('label[for='+i+']').html(answers[nextPic][i]);
        $('label[for='+i+']').prev().val(answers[nextPic][i]);
    }
}




$('#tipp').click(function () {

var checkedTipp= $('input[name=answ]:checked').val();

if (checkedTipp==undefined){
    alert('Jelöld be a tippedet!');
    return;
}
    $('#tipp').prop('disabled',true);
if(checkedTipp==quizQuestions[nextPic].name){
    console.log('helyes tipp');
    rightAnswer++;
}

var allLabels= document.getElementsByTagName('label');
    for (i=0;i<allLabels.length;i++){
         if ( $(allLabels[i]).html()==quizQuestions[nextPic].name){
             $('#label'+i).css('color','green');
         } else {
             $('#label'+i).css('color','red');
         }
    }
    setTimeout(()=>{
        $('#tipp').prop('disabled',false);
        nextPic++;
        if (nextPic<QUESTION_NUMBER){

            loadDataToHtml()
        }else if (nextPic==QUESTION_NUMBER) {
            let command='<button id="new_game" class="control_button new_game_button" onclick="newGameClick()">Új játék</button>';
            $('.button_div').append(command);
            $('#tipp').prop('disabled',true);
            showResult();
        }

    },1700);

});
function newGameClick() {
    console.log("new game click");

    $('#new_game').remove();
    $('#tipp').prop('disabled',false);
    initStart();

}
function showResult() {
    resultCommand='Eredmény: '+nextPic+'/'+rightAnswer;
    $('#result_p').html(resultCommand);
}






