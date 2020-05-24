
const QUESTION_NUMBER= 7;
const ANSWER_NUMBER=3;

class DogBreed {

    constructor(name, path) {
        this.name = name;
        this.path = path;

    }


}

let dog_name = [
    "Ausztrál Kelpi",
    "Abruzzói juhászkutya",
    "Affenpincher",
    "Afgán agár",
    "Afrikai oroszlánkutya",
    "Akita Inu",
    "Alaszkai malamut",
    "Amerikai bulldog",
    "Angol Agár",
    "Angol Bulldog",
    "Argentín dog",
    "Atlaszi hegyikutya",
    "Ausztrál juhászkutya",
    "Ausztrál terrier",
    "Border Collie",

    "Belga juhászkutya",
    "Berni pásztorkutya",
    "Bernáthegyi",
    "Bordeaux-i dog",
    "Boxer",
    "Bullmasztif",

    "Canne corso",
    "Csau Csau",
    "Csivava",

    "Dalmata",
    "Dobbermann",

    "Eszkimókutya",
    "Erdélyi kopó",

    "Fáraókutya",
    "Francia bulldog",

    "Golden Retriver",
    "Grönlandi kutya",

    "Havannai Pincs",
    "Husky",

    "Ír szetter",

    "Jack Russell-terrier",

    "Kárpáti pásztoukuya",
    "Karéliai medvekutya",
    "Kínai kopaszkutya",
    "Komondor",
    "Kuvasz",

    "Labrador Retriver",

    "Magyar Agár",
    "Magyar vizsla",
    "Máltai selyemkutya",
    "Mopsz",
    "Mudi",

    "Nápolyi Masztiff",
    "Német dog",
    "Német juhászkutya",
    "Német spicc",
    "Német vizsla",

    "Olasz kopó",
    "Olasz agár",
    "Orosz fekete terrier",

    "Pekingi palotakutya",
    "Pireneusi Masztiff",
    "Puli",
    "Pumi",



    "Rottweiler",




    "Si-cu",
    "Shar-pei",
    "Skót Juhász",

    "Skót terrier",
    
    "Spániel",
    "Spanyol kopó",
    "Staffordshire bullterrier",
    "Szibériai Husky", 

    "Törpe schnauzer",
    "Tibeti terrier",
    "Tacskó",
    "Törpe pinscer",


    "Törpespicc",


    "Újfullandi",
    "Uszkár",

    "Vizsla",

    "Whippet"

];

let dog_path = [
"Data/Pictures/australskakelpie.jpg",
    "Data/Pictures/abruzzo_juhasz.jpg",
    "Data/Pictures/affenpincher.jpg",
    "Data/Pictures/afghan_agar.jpg",
    'Data/Pictures/afr_oroszl_kutya.jpg',
    "Data/Pictures/akita_inu.jpeg",
    "Data/Pictures/alaszkai_malam.jpg",
    "Data/Pictures/amerikai_bulldog.jpg",
    " Data/Pictures/angol_agar.jpg",
    "Data/Pictures/angol_bulldog.jpg",
    "Data/Pictures/argentin_dog.jpeg",
    "Data/Pictures/atlaszi_hegyikutya.jpg",
    "Data/Pictures/ausztr_juhasz.jpg",
    "Data/Pictures/ausztr_terrier.jpg",
    "Data/Pictures/border_collie.jpg",
    "Data/Pictures/belga_juhasz.jpg",
    "Data/Pictures/berni_pasztor.jpg",
    "Data/Pictures/bernathegyi.png",

    "Data/Pictures/bordoi_dog.jpg",
    "Data/Pictures/boxer.jpg",
    "Data/Pictures/bullmasztif.jpg",

    "Data/Pictures/canne_corso.jpeg",
    "Data/Pictures/csau.jpg",
    "Data/Pictures/csivava.jpg",

    "Data/Pictures/dalmata.jpg",
    "Data/Pictures/dobberman.jpg",
    "Data/Pictures/eszkimo.jpg",
    "Data/Pictures/erdelyi_kopo.jpg",


    "Data/Pictures/farao_ku.jpg",
    "Data/Pictures/francia_bull.jpg",

    "Data/Pictures/golden_retr.jpg",
    "Data/Pictures/gorlandi_kutya.jpg",

    "Data/Pictures/havannai_pincs.png",
    "Data/Pictures/husky.jpeg",

    "Data/Pictures/ir_szetter.jpg",

    "Data/Pictures/jack_russel.jpg",
    "Data/Pictures/karpati_juhasz.jpg",
    "Data/Pictures/kar_medve_kutya.jpg",

    "Data/Pictures/kinai_kopasz.jpg",
    "Data/Pictures/komondor.jpg",
    "Data/Pictures/kuvasz.jpg",

    "Data/Pictures/labrador.jpg",

    "Data/Pictures/magyar_agar.jpg",
    "Data/Pictures/magyar_vizsla.jpg",
    "Data/Pictures/maltai_selyem.jpg",
    "Data/Pictures/mopsz.jpg",
    "Data/Pictures/mudi.jpg",

    "Data/Pictures/napolyi_masztiff.png",
    "Data/Pictures/nemet_dog.jpg",
    "Data/Pictures/nemet_juhasz.jpg",
    "Data/Pictures/nemet_spicc.jpg",
    "Data/Pictures/nemet_vizsla.jpg",

    "Data/Pictures/olasz_agar.jpg",
    "Data/Pictures/olasz_kopo.jpg",
    "Data/Pictures/orosz_fek_terrier.jpg",

    "Data/Pictures/pekingi_palotakutya.jpg",
    "Data/Pictures/pireneusi_masztif.jpg",
    "Data/Pictures/puli.jpg",
    "Data/Pictures/pumi.jpg",

    "Data/Pictures/rottweiler.jpg",


    "Data/Pictures/si_cu.jpeg",
    "Data/Pictures/shar_pei.jpg",
    "Data/Pictures/skot_juhasz.jpg",
    "Data/Pictures/skot_terrier.jpg",
    "Data/Pictures/spaniel.jpg",
    "Data/Pictures/spanyol_kopo.jpg",
    "Data/Pictures/staffi_terrier.jpg",
    "Data/Pictures/sziberiai_husky.jpg",



    "Data/Pictures/torpe_schnauzer.jpeg",
    "Data/Pictures/tibeti_terrier.jpg",
    "Data/Pictures/tacsko.jpg",
    "Data/Pictures/torpe_pincher.jpg",
    "Data/Pictures/torpespicc.jpg",
    "Data/Pictures/ujfullandi.jpg",
    "Data/Pictures/uszkar.jpg",
    "Data/Pictures/vizsla.jpeg",
    "Data/Pictures/whippet.jpg"


];
dogBreeds = [];
if (dog_name.length == dog_path.length) {
    for (i = 0; i < dog_name.length; i++) {
        dogBreeds.push(new DogBreed(dog_name[i], dog_path[i]));
       // $('body').append('<p>'+dogBreeds[i].name+'&nbsp;&nbsp;&nbsp;&nbsp;'+dogBreeds[i].path+'</p>');
    }
  console.log(dogBreeds);
} else {
    alert("dog_name: " + dog_name.length+" dog_path: "+dog_path.length);
}

function getDogbreds(){
    return dogBreeds;
}

function getGameQuestions(){

    resultSet= new Set();

    do {

        var rnd= parseInt(Math.random()*dogBreeds.length);
        resultSet.add(dogBreeds[rnd]);


    }while (resultSet.size<QUESTION_NUMBER);

  return Array.from(resultSet);
}
function get_game_questions(dogBreedArrayForGame) {
    let result=Array.from({length:QUESTION_NUMBER},()=> new Array(ANSWER_NUMBER));

   let tmpSetList= new Set();

   for (i=0;i<QUESTION_NUMBER;i++){
      //result[i][0]=(dogBreedArrayForGame[i].name);
     tmpSetList.add(dogBreedArrayForGame[i].name);
       do {
           tmpSetList.add(dog_name[parseInt(Math.random()*dog_name.length)]);
       }while (tmpSetList.size<ANSWER_NUMBER);
     var  ind=0;


        for (e of Array.from(tmpSetList)){
            result[i][ind++]=e;

       }

       tmpSetList.clear();
   }


    for (let resultElement of result) {
        resultElement.sort(function () {

            return .5-Math.random();
        })
    }
   return result;

}

