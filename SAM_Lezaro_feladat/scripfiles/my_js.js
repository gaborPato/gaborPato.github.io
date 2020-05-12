
//Application Datas:

Death= new BandLogosPictures('Pictures/Death.jpg',"Death band's logo","Egy kultikus death metal banda");


JudasPriest = new BandLogosPictures('Pictures/JudasPriest.jpg',"Priest band's logo","A Heavy Metal egyik nagy klasszikusa");


Megadeth = new BandLogosPictures("Pictures/Megadeth.png","Megadeth band's logo with metallica feature","Egy legendas metál banda a 'Big Four' egyik tagja");

Pantera = new BandLogosPictures('Pictures/Pantera.jpg',"Pantera band's logo","A thrash második vonalának az egyik legjobbja.");

Sepultura = new BandLogosPictures( "Pictures/Sepultura.png","Sepultura band's logo","A thrash hőskorából egy brazil banda");


const bandLogos = [Death, JudasPriest, Megadeth, Pantera, Sepultura];
const activeLetterBorder = '4px solid green';
const inactiveLetterBorder = '2px solid black';



//setStart:
counter = 0;
$('#photoView').append('<img id="main_image" src="' + bandLogos[counter].path + '">');
addLetterImages();
$('#description').text(bandLogos[counter].descr);
changeLetterBorder(counter);


//App LOGiC:

$('.right').click(function () {
    //console.log("click right arrow");
    counter++;
    if (counter==bandLogos.length){
        counter=0;
    }


    $('#main_image').attr('src', bandLogos[counter].path);
    $('#description').html(bandLogos[counter].descr);
    changeLetterBorder(counter);
})
$(".left").click(function () {
    counter--;

    if (counter<0){
        counter=bandLogos.length-1;
    }
    $('#main_image').attr('src', bandLogos[counter].path);
    $('#description').html(bandLogos[counter].descr);
    changeLetterBorder(counter);
})

function addLetterImages() {
    for (i = 0; i < bandLogos.length; i++) {
        $('article').append('<img class="image_letter" onmouseout="letter_mouse_out()" onmouseover="letter_mouseover(this)" onclick="letter_click(this)" src="' + bandLogos[i].path + '">');

    }

}


function letter_click(element) {

    newsrc = $(element).attr('src');
    $('#main_image').attr('src', newsrc);
    for (index = 0; index < bandLogos.length; index++) {
        if (newsrc == bandLogos[index].path) {
            $("#description").html(bandLogos[index].descr);
            changeLetterBorder(index);
            counter=index;

            break;
        }
    }

}

function changeLetterBorder(index) {
    $('.image_letter').css("border", inactiveLetterBorder);

    const letterImage = $('.image_letter');
    $(letterImage[index]).css("border", activeLetterBorder);


}

function letter_mouseover(element){
    
   
    src= $(element).attr('src');
    
    for(i=0 ;i<bandLogos.length;i++){
        if (src== bandLogos[i].path){
            $('#show_title').css('visibility','visible');
            $('#show_title').html(bandLogos[i].title);
        }
    }
    
   
}
 function letter_mouse_out(){
        $("#show_title").css("visibility",'hidden');
    }



