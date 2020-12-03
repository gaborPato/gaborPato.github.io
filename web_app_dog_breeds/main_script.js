var quiz_Answer;
var answers;
var q_counter;
var rightAnswer;

const breedClassIndex=0;
const changableAnswerArrayIndex=1;

const dailyColor='rgb(221, 235, 228)';
const nightColor='rgb(95, 99, 97)';
const darkYellow='rgb(199, 196, 50)';
var labelGreen;
var labelRed;
const bca='background-color';


$('body').css(bca,dailyColor);

$('#actualy_pictures').click(function () {

    if($('body').css(bca) == dailyColor){
        $('body').css(bca,nightColor);
        // $('label').css('color','yellow');
    }else {
        $('body').css(bca,dailyColor);

    }
    changeLabelColor();
});

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
   changeLabelColor();
   // $('label').css('color','black');
    $('input[name=answ]').prop('checked',false);
    $('img').attr('src',quiz_Answer[q_counter][breedClassIndex]._dogPicURL);


    for (i=0;i<answers.length;i++){
        $('label[for='+i+']').html(answers[q_counter][i]);
        $('label[for='+i+']').prev().val(answers[q_counter][i]);
    }
}

function changeLabelColor(){
    $('label').css('color','black');
    labelGreen='green';
    labelRed='red';

    if ($('body').css(bca)==nightColor){
        $('label').css('color',darkYellow);
        labelGreen='#9beb8d';
        labelRed='#e6757e';
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
             $('#label'+i).css('color',labelGreen);
         } else {
             $('#label'+i).css('color',labelRed);
         }
    }
    setTimeout(()=>{
        $('#tipp').prop('disabled',false);
        q_counter++;
        if (q_counter<QUESTION_QUIZ_NUMBER){

            loadDataToHtml();
            $('#actualy_pictures').hide();
        }else if (q_counter==QUESTION_QUIZ_NUMBER) {
            let command='<button id="new_game" class="control_button new_game_button" onclick="newGameClick()">Új játék</button>';
            $('.button_div').append(command);
            $('#tipp').prop('disabled',true);
            showResult();
        }

    },800);

});
function newGameClick() {
    console.log("new game click");

    $('#new_game').remove();
    $('#tipp').prop('disabled',false);
    initStart();

}
function showResult() {
    resultCommand='Eredmény: '+q_counter+'/'+rightAnswer;
    $(`#result_p`).html(resultCommand);
}
 






