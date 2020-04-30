function changeStyle() {

var paragraph = document.getElementsByClassName("para");


var changeText1= paragraph[0].innerHTML;

    var changeText2= paragraph[1].innerHTML;
    var result = document.getElementById("result").innerHTML=changeText1+" " + changeText2;
}