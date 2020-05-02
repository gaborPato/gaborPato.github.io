/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

color = "purple";
number = Math.random() * 200 + 1;
word = ['cool', 'hot'];


if (color == 'purple') {
    console.log("color:" + color);
    $('.north').css("background", color);
}
if (number > 150) {
    $('.east').html("whoah, that's a big number.");
} else if (number > 50) {
    $('.east').html("whoah, that's a medium number.");
} else {
    $('.east').html("that's a little number.");
}
rnd = parseInt(Math.random() * word.length);
switch (word[rnd]) {
    case "cool":
        $(".west").html("Power of DOM");
        break;
    default :
        $(".west").html("Dom of power");
}