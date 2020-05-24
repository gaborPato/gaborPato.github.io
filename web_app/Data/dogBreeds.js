

const QUESTION_NUMBER = 7;
const ANSWER_NUMBER = 3;
const GROUP_COUNT = 3;

class DogBreed {

    constructor(name, path) {
        this.name = name;
        this.path = path;

    }

}
var dog_name = [

    //group1:
    ["Whipet", "Törpe Spicc", "Törpe Pincher",
        "Tacskó", "Tibeti Terrier", "Törpe Schnauzer",
        "Pekingi Palotakutya", "Orosz Fekete Terrier",
        "Olasz Kopó", "Uszkár", "Spániel", "Skót Terrier",
        "Skót Juhász", "Shar-Pei", "Si-cu", "Német Spicc", "Máltai Selyemkutya",
        "Kínai Kopaszkutya", "Jack Russel Terrier", "Havannai Pincher", "Francia Bulldog", "Fáraókutya",
        "Erdélyi Kopó", "Csivava", "Csau-csau", "Auszrtál Terrier", "Affenpincher"
    ],

    //group2:
    [
        'Afgán Agár', 'Angol Agár', 'Auszrál Juhász', 'Belga Juhász', 'Border Collie',
        'Dalmata', 'Eszkimókutya', 'Golden Retriver', 'Ír szetter', 'Komondor', 'Kuvasz',
        'Labrador', 'Magyar Agár', 'Mopsz', 'Mudi', 'Német Juhász', 'Német Vizsla', 'Olasz Agár', 'Puli'
                , 'Pumi', 'Spanyol Kopó', 'Vizsla'



    ],

    //group3:
    ['Karéliai Medvekutya', 'Kárpáti Pásztor', 'Husky', "Görnlandi Kutya", 'Dobberman', 'Canne Corso'
                , 'Bullmasztif', 'Boxer', 'Bordeauxi Dog', 'Bernáthegyi', 'Berni Pásztor', 'Atlaszi Hegyikutya'
                , "Argentín Dog", 'Angol Bulldog', 'Amerikai Bulldog', 'Alaszkai Malamut', 'Akita Inu', 'Afrikai Oroszlánkutya',
        'Abbrúzoi Juhász', 'Ausztrál Kelpie', 'Nápolyi Massztif', 'Német Dog', 'Pireneusi Masztiff', "Rottweiler",
        'Staffordshire Terrier', 'Újfullandi']



];




var dog_path = [
    ["Data/Pictures/whippet.jpg",
        "Data/Pictures/torpespicc.jpg",
        "Data/Pictures/torpe_pincher.jpg",
        "Data/Pictures/tacsko.jpg",
        "Data/Pictures/tibeti_terrier.jpg",
        "Data/Pictures/torpe_schnauzer.jpeg",
        "Data/Pictures/pekingi_palotakutya.jpg",
        "Data/Pictures/orosz_fek_terrier.jpg",
        "Data/Pictures/olasz_kopo.jpg",
        "Data/Pictures/uszkar.jpg",
        "Data/Pictures/spaniel.jpg",
        "Data/Pictures/skot_terrier.jpg",
        "Data/Pictures/skot_juhasz.jpg",
        "Data/Pictures/shar_pei.jpg",
        "Data/Pictures/si_cu.jpeg",
        "Data/Pictures/nemet_spicc.jpg",
        "Data/Pictures/maltai_selyem.jpg",
        "Data/Pictures/kinai_kopasz.jpg",
        "Data/Pictures/jack_russel.jpg",
        "Data/Pictures/havannai_pincs.jpg",
        "Data/Pictures/francia_bull.jpg",
        "Data/Pictures/farao_ku.jpg",
        "Data/Pictures/erdelyi_kopo.jpg",
        "Data/Pictures/csivava.jpg",
        "Data/Pictures/csau.jpg",
        "Data/Pictures/ausztr_terrier.jpg",
        "Data/Pictures/affenpincher.jpg"]





            , [
                "Data/Pictures/afghan_agar.jpg",
                "Data/Pictures/angol_agar.jpg",
                "Data/Pictures/ausztr_juhasz.jpg",
                "Data/Pictures/belga_juhasz.jpg",
                "Data/Pictures/border_collie.jpg",
                "Data/Pictures/dalmata.jpg",
                "Data/Pictures/eszkimo.jpg",
                "Data/Pictures/golden_retr.jpg",
                "Data/Pictures/ir_szetter.jpg",
                "Data/Pictures/komondor.jpg",
                "Data/Pictures/kuvasz.jpg",
                "Data/Pictures/labrador.jpg",
                "Data/Pictures/magyar_agar.jpg",
                "Data/Pictures/mopsz.jpg",
                "Data/Pictures/mudi.jpg",
                "Data/Pictures/nemet_juhasz.jpg",
                "Data/Pictures/nemet_vizsla.jpg",
                "Data/Pictures/olasz_agar.jpg",
                "Data/Pictures/puli.jpg",
                "Data/Pictures/pumi.jpg",
                "Data/Pictures/spanyol_kopo.jpg",
                "Data/Pictures/vizsla.jpg"],

    ["Data/Pictures/kar_medve_kutya.jpg", "Data/Pictures/karpati_juhasz.jpg", "Data/Pictures/husky.jpeg",

        "Data/Pictures/gorlandi_kutya.jpg", "Data/Pictures/dobberman.jpg", "Data/Pictures/canne_corso.jpeg",
        "Data/Pictures/bullmasztif.jpg", "Data/Pictures/boxer.jpeg", "Data/Pictures/bordoi_dog.jpg", "Data/Pictures/bernathegyi.png",
        "Data/Pictures/berni_pasztor.jpg", "Data/Pictures/atlaszi_hegyikutya.jpg", "Data/Pictures/argentin_dog.jpeg",
        "Data/Pictures/angol_bulldog.jpg", "Data/Pictures/amerikai_bulldog.jpg", "Data/Pictures/alaszkai_malam.jpg",
        "Data/Pictures/akita_inu.jpeg", 'Data/Pictures/afr_oroszl_kutya.jpg', "Data/Pictures/abruzzo_juhasz.jpg",
        "Data/Pictures/australskakelpie.jpg",

        "Data/Pictures/napolyi_masztiff.png",
        "Data/Pictures/nemet_dog.jpg",

        "Data/Pictures/pireneusi_masztif.jpg",

        "Data/Pictures/rottweiler.jpg",

        "Data/Pictures/staffi_terrier.jpg",

        "Data/Pictures/ujfullandi.jpg"

    ]




];

let dog_breed_group0 = [];
let dog_breed_group1 = [];
let dog_breed_group2 = [];


if (dog_name[0].length == dog_path[0].length) {
    for (i = 0; i < dog_name.length; i++) {
        dog_breed_group0.push(new DogBreed(dog_name[0][i], dog_path[0][i]));
    }
} else {
    alert('group0: ' + dog_name[0].length + ' ' + dog_path[0].length);
}

if (dog_name[1].length == dog_path[1].length) {
    for (i = 0; i < dog_name.length; i++) {
        dog_breed_group1.push(new DogBreed(dog_name[1][i], dog_path[1][i]));
    }
} else {
    alert('group1: ' + dog_name[1].length + ' ' + dog_path[1].length);
}

if (dog_name[2].length == dog_path[2].length) {
    for (i = 0; i < dog_name.length; i++) {
        dog_breed_group2.push(new DogBreed(dog_name[2][i], dog_path[2][i]));
    }
} else {
    alert('group2: ' + dog_name[2].length + ' ' + dog_path[2].length);
}


function getGameQuestions() {


        console.log('getGameQ');
    resultSet = new Set();

    do {
        group_rnd = parseInt(Math.random() * GROUP_COUNT);
//        var rnd= parseInt(Math.random()*dogBreeds.length);
//        resultSet.add(dogBreeds[rnd]);
console.log('group_rnd: '+ group_rnd);
        switch (group_rnd) {
            case 0:
                rnd = parseInt(Math.random() * dog_breed_group0.length);
                resultSet.add(dog_breed_group0[rnd]);
                break;

            case 1:

                rnd = parseInt(Math.random() * dog_breed_group1.length);
                resultSet.add(dog_breed_group1[rnd]);

                break;
            default:
                rnd = parseInt(Math.random() * dog_breed_group2.length);
                resultSet.add(dog_breed_group2[rnd]);
                break;
        }


    } while (resultSet.size < QUESTION_NUMBER);

    return Array.from(resultSet);
}
function get_quiz_questions(dogBreedArrayForGame) {
   
    let result = Array.from({length: QUESTION_NUMBER}, () => new Array(ANSWER_NUMBER));

    let tmpSetList = new Set();

    for (i = 0; i < QUESTION_NUMBER; i++) {
        //result[i][0]=(dogBreedArrayForGame[i].name);
        tmpSetList.add(dogBreedArrayForGame[i].name);
        groupcount= getGroupcount(dogBreedArrayForGame[i]);
        console.log('groupcount= '+groupcount);
        do {
            tmpSetList.add(dog_name[groupcount][parseInt(Math.random() * dog_name[groupcount].length)]);
        } while (tmpSetList.size < ANSWER_NUMBER);
        var ind = 0;


        for (e of Array.from(tmpSetList)) {
            result[i][ind++] = e;
        }

        tmpSetList.clear();
    }


    for (let resultElement of result) {
        resultElement.sort(function () {

            return .5 - Math.random();
        });
    }
    return result;

}
function getGroupcount(DogBreedElement){
   
   if(dog_breed_group0.includes(DogBreedElement)) return 0 ;
   if(dog_breed_group1.includes(DogBreedElement)) return 1 ;
   if(dog_breed_group2.includes(DogBreedElement)) return 2 ;
}

