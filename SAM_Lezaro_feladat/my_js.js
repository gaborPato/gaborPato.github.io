/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Application Datas:
Death = {
    path: "Pictures/Death.jpg",
    title: `Death band's logo`
}

JudasPriest = {
    path: 'Pictures/JudasPriest.jpg',
    title: "Priest band's logo"

}
Megadeth = {
    path: "Pictures/Megadeth.png",
    title: "Megadeth band's logo with metallica feature"
}
Pantera = {
    path: 'Pictures/Pantera.jpg',
    title: "Pantera band's logo"
}
Sepultura = {
    path: "Pictures/Sepultura.png",
    title: "Sepultura band's logo"
}

const bandLogos = [Death, JudasPriest, Megadeth, Pantera, Sepultura];
const activeLetterBorder = '4px solid green';
const inactiveLetterBorder = '2px solid black';



//setStart:
counter = 0;
$('#photoView').append('<img id="main_image" src="' + bandLogos[counter].path + '">');
addLetterImages();
$('#title').text(bandLogos[counter].title);
changeLetterBorder(counter);


//App LOGiC:

$('.right').click(function () {
    //console.log("click right arrow");
    counter++;
    if (counter==bandLogos.length){
        counter=0;
    }


    $('#main_image').attr('src', bandLogos[counter].path);
    $('#title').html(bandLogos[counter].title);
    changeLetterBorder(counter);
})
$(".left").click(function () {
    counter--;

    if (counter<0){
        counter=bandLogos.length-1;
    }
    $('#main_image').attr('src', bandLogos[counter].path);
    $('#title').html(bandLogos[counter].title);
    changeLetterBorder(counter);
})

function addLetterImages() {
    for (i = 0; i < bandLogos.length; i++) {
        $('article').append('<img class="image_letter" onclick="letter_click(this)" src="' + bandLogos[i].path + '">');

    }

}


function letter_click(element) {

    newsrc = $(element).attr('src');
    $('#main_image').attr('src', newsrc);
    for (index = 0; index < bandLogos.length; index++) {
        if (newsrc == bandLogos[index].path) {
            $("#title").html(bandLogos[index].title);
            changeLetterBorder(index);
            counter=index;

            break;
        }
    }

}

function changeLetterBorder(index) {
    $('.image_letter').css("border", inactiveLetterBorder);

    const li = $('.image_letter');
    $(li[index]).css("border", activeLetterBorder);


}

