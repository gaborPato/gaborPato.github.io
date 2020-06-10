const QUESTION_QUIZ_NUMBER = 10;
const ANSWER_QUIZ_NUMBER = 4;

 class DogBreedsClasses {

    constructor(breedName, dogPicURL) {

        this._breedName = breedName;
        this._dogPicURL = dogPicURL;
    }

}
class PuliGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id="group_puli";
    }
}
class Vizsla_Kopo_SpanielGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id="group_vizsla_kopo_span";
    }
}

class NemetJuhaszGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id="group_nemet_juhasz";
    }
}


class MukiKutyaGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id="group_muki";
    }
}

class AgarGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id='group_agar';
    }
}
class HarciKutyaGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id='group_harci_kutya';
    }
}

var all_dogList = [
    new NemetJuhaszGroup('Német Juhász', 'Data/Pictures/nemet_juhasz.jpg'),
    new Vizsla_Kopo_SpanielGroup('Német Vizsla', "Data/Pictures/nemet_vizsla.jpg"),
    new Vizsla_Kopo_SpanielGroup('Dingó', "Data/Pictures/dingo.jpg"),
    new Vizsla_Kopo_SpanielGroup('Pointer', "Data/Pictures/pointer.jpg"),
    new NemetJuhaszGroup('Border Collie', "Data/Pictures/border_collie.jpg"),
    new NemetJuhaszGroup('Belga Juhász', "Data/Pictures/belga_juhasz.jpg"),
    new PuliGroup('Mudi', "Data/Pictures/mudi.jpg"),
    new PuliGroup('Barbet', "Data/Pictures/barbet.jpg"),
    new PuliGroup('Pumi', "Data/Pictures/pumi.jpg"),
    new Vizsla_Kopo_SpanielGroup('Ír Vizispániel', "Data/Pictures/ir_vizispaniel.jpg"),
    new AgarGroup("Skót Szarvasagár", "https://www.akutya.hu/fajtakepek/eredeti/321skot%20szarvasagar.jpg"),
    new AgarGroup("Whippet", "Data/Pictures/whippet.jpg"),
    new AgarGroup("Magyar Agár", "Data/Pictures/magyar_agar.jpg"),
    new NemetJuhaszGroup('Basenji','https://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23008_basenji-460x290.jpg'),
    new NemetJuhaszGroup('Dalmata',"https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/dalmatiner-spielt.jpg"),
    new NemetJuhaszGroup('Eszkimó Kutya','https://img-01.cdn.amarqt.com/animals/kutya/amerikai-eszkimo-kutya/detailed/2-untitled-798c44f4-3020-47e2-814e-42858442cf18-1.jpg'),
    new NemetJuhaszGroup('Golden Retriver','https://24.p3k.hu/app/uploads/sites/11/2015/10/goldi1-e1445193079804.jpg'),
    new NemetJuhaszGroup('Labrador','https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29150201/Labrador-Retrievers-three-colors.jpg'),
    new NemetJuhaszGroup('Karéliai Medvekutya','Data/Pictures/kar_medve_kutya.jpg'),
    new NemetJuhaszGroup('Kárpáti Pásztor','Data/Pictures/karpati_juhasz.jpg'),
    new NemetJuhaszGroup('Görnlandi Kutya','Data/Pictures/gorlandi_kutya.jpg'),
    new NemetJuhaszGroup('Dobberman',"https://img-03.cdn.amarqt.com/magazine/fajtak/hd/dobermann-fajtastandard-1.jpg"),
    new NemetJuhaszGroup('Atlaszi Hegyikutya','Data/Pictures/atlaszi_hegyikutya.jpg'),
    new NemetJuhaszGroup('Alaszkai Malamut','Data/Pictures/alaszkai_malam.jpg'),
    new NemetJuhaszGroup('Akita Inu','Data/Pictures/akita_inu.jpeg'),
    new Vizsla_Kopo_SpanielGroup('Afrikai Oroszlánkutya','https://img-02.cdn.amarqt.com/kutya/lightbox/rhodesian-ridgeback-1.jpg'),
    new PuliGroup('Abbrúzói Juhász','https://img-02.cdn.amarqt.com/kutya/hd/cane-de-pastore-maremmano-abruzzese.jpg'),
    new NemetJuhaszGroup('Amerikai Akita','https://www.zooplus.hu/magazin/wp-content/uploads/2018/03/american-akita-welpe-1024x731.jpg'),
    new Vizsla_Kopo_SpanielGroup('Olasz Kopó','Data/Pictures/olasz_kopo.jpg'),
    new Vizsla_Kopo_SpanielGroup('Erdélyi Kopó','Data/Pictures/erdelyi_kopo.jpg'),
    new PuliGroup('Bobtail','https://upload.wikimedia.org/wikipedia/commons/9/91/Bobtail_als_Integrationshund.JPG'),
    new Vizsla_Kopo_SpanielGroup('Ausztrál Kilpie','Data/Pictures/australskakelpie.jpg'),
    new PuliGroup('Ausztrál Terrier','https://img-03.cdn.amarqt.com/animals/kutya/ausztral-terrier/lightbox/1-untitled-5257d197-8afd-4484-9e37-7511a8743590-1.jpg'),
    new PuliGroup('Portugál Hegyikutya','https://www.akutya.hu/fajtakepek/eredeti/110portugal%20hegyikutya.jpg'),
    new PuliGroup('Barbet','https://img-05.cdn.amarqt.com/kutya/hd/francia-vizikutya-1.jpg'),
    new PuliGroup('Komondor','Data/Pictures/komondor.jpg'),
    new PuliGroup('Kuvasz','Data/Pictures/kuvasz.jpg'),
    new Vizsla_Kopo_SpanielGroup('Ír szetter','Data/Pictures/ir_szetter.jpg'),
    new PuliGroup('Csau-csau','Data/Pictures/csau.jpg'),
    new PuliGroup('Shar-Pei',"Data/Pictures/shar_pei.jpg"),
    new PuliGroup('Beagle',"Data/Pictures/beagle.jpg"),
    new PuliGroup('Basset Huond',"https://img-05.cdn.amarqt.com/animals/kutya/basset-hound/detailed/1-untitled-31e6b6d2-a014-447b-9364-048b5681656a-1.jpg"),
    new Vizsla_Kopo_SpanielGroup('Portugál Vizikutya',"https://kutyafajtak.hu/kepek/portugal-vizikutya/portugal-vizikutya-04.jpg"),
    new Vizsla_Kopo_SpanielGroup('Spanyol Kopó','Data/Pictures/spanyol_kopo.jpg'),
    new AgarGroup('Afgán Agár','Data/Pictures/afghan_agar.jpg'),
    new AgarGroup('Fáraó Kutya',"Data/Pictures/farao_ku.jpg"),
    new AgarGroup('Angol Agár',"Data/Pictures/angol_agar.jpg"),
    new AgarGroup('Olasz Agár','https://www.kutya-tar.hu/kutyak2/olasz-agar/olasz-agar.jpg'),
    new AgarGroup('Orosz Fekete Terrier','https://www.kutya-tar.hu/kutyak2/orosz-fekete-terrier/orosz-fekete-terrier.jpg'),
    new NemetJuhaszGroup('Ónémetjuhász-kutya','https://i.ytimg.com/vi/jpb3gVfcz8I/hqdefault.jpg'),
   new Vizsla_Kopo_SpanielGroup('Angol Coocker Spaniel','Data/Pictures/ang_cock_spaniel.jpg'),
    new Vizsla_Kopo_SpanielGroup('Field Spániel','https://img-03.cdn.amarqt.com/kutya/hd/field-spaniel-2.jpg'),
    new MukiKutyaGroup('Mopsz','Data/Pictures/mopsz.jpg'),
    new Vizsla_Kopo_SpanielGroup('Angol Toy Spaniel','https://img.point.pet/44554800/544544544/555444866_1.jpg'),
    new MukiKutyaGroup('Tököli Kobor Terrier','Data/Pictures/muki.jpg'),
    new MukiKutyaGroup('Törpe pincser','https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/Zwergpinscher-im-Grass-1024x682.jpg'),
    new Vizsla_Kopo_SpanielGroup('Rövidszőrű Tacskó','https://upload.wikimedia.org/wikipedia/commons/a/a1/Standard-Dachshund.jpg'),
    new Vizsla_Kopo_SpanielGroup('Szálkásszőrű Tacskó','https://img-05.cdn.amarqt.com/kutya/hd/szalkasszoru-torpe-tacsko-2.jpg'),
    new MukiKutyaGroup('Tibeti Terrier','Data/Pictures/tibeti_terrier.jpg'),
    new MukiKutyaGroup('Törpe Spicc','Data/Pictures/torpespicc.jpg'),
    new MukiKutyaGroup('Pekingi Palotakutya','Data/Pictures/pekingi_palotakutya.jpg'),
   
    new MukiKutyaGroup('Skót terrier','Data/Pictures/skot_terrier.jpg'),
    new MukiKutyaGroup('Si-cu','Data/Pictures/si_cu.jpeg'),
    new MukiKutyaGroup('Német Spicc','Data/Pictures/nemet_spicc.jpg'),
    new MukiKutyaGroup('Máltai Selyemkutya','Data/Pictures/maltai_selyem.jpg'),
    new MukiKutyaGroup('Kínai kopaszkutya','Data/Pictures/kinai_kopasz.jpg'),
    new MukiKutyaGroup('Jack Russel terrier','Data/Pictures/jack_russel.jpg'),
    new MukiKutyaGroup('Biever terrier','https://img-03.cdn.amarqt.com/kutya/hd/biewer-yorkshire-terrier-1.jpg'),
    new MukiKutyaGroup('Cairn terrier','https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Cairn-Terrier-2008.PNG/250px-Cairn-Terrier-2008.PNG'),
    new MukiKutyaGroup('Kis oroszlánkutya','https://img-03.cdn.amarqt.com/animals/kutya/kis-oroszlankutya/lightbox/0-untitled-07327384-4abe-4395-acfc-f71b0ccdc17c-1.jpg'),
    new MukiKutyaGroup('Ausztrál selyemszőrű terrier','https://www.kutya-tar.hu/kutyak2/ausztral-selyemszoru-terrier/ausztral-selyemszoru-terrier.jpg'),
    new MukiKutyaGroup('Brüsszerli Giffon','Data/Pictures/brusseeli_griffon.jpg'),
    new MukiKutyaGroup('Drótszörű foxterrier','https://www.haziallat.hu/kutyafajtak/a-drotszoru-foxterrier-orokmozgo-gyerekbarat-kutya/2704/1/foxterrier-foxi-kutya.jpg'),
    new MukiKutyaGroup('Havannai pincser','Data/Pictures/havannai_pincs.jpg'),
    new MukiKutyaGroup('Csivava','Data/Pictures/csivava.jpg'),
    new MukiKutyaGroup('Ausztrál terrier','https://img-01.cdn.amarqt.com/kutya/hd/ausztral-terrier-1.jpg'),
    new MukiKutyaGroup('Affenpincser','Data/Pictures/affenpincher.jpg'),
    new NemetJuhaszGroup('Pomázi Hordócska','Data/Pictures/tipike.jpg'),
    new HarciKutyaGroup('Bernáthegyi','https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/bernhardiner-im-schnee.jpg'),
    new HarciKutyaGroup('Denevérfülű Pit-Nyúl','Data/Pictures/lusy.jpg'),
    new HarciKutyaGroup('Amerikai Bulldog','Data/Pictures/amerikai_bulldog.jpg'),
    new HarciKutyaGroup('Angol Bulldog','Data/Pictures/angol_bulldog.jpg'),
    new HarciKutyaGroup('Argentín Dog','https://www.pet4you.hu/img/big/Dogo_Argentino_2.jpg'),
    new HarciKutyaGroup('Bordauxi Dog','Data/Pictures/bordoi_dog.jpg'),
    new HarciKutyaGroup('Boxer','Data/Pictures/boxer.jpeg'),
    new HarciKutyaGroup('Bullmasztif','https://img-05.cdn.amarqt.com/animals/kutya/bullmasztiff/detailed/2-untitled-2892cbf5-b27b-4fc3-a8ec-8d83cdb74d5f-1.jpg'),
    new HarciKutyaGroup('Canne corso','Data/Pictures/canne_corso.jpeg'),
    new HarciKutyaGroup('Dobberman','Data/Pictures/dobberman.jpg'),
    new HarciKutyaGroup('Nápolyi Masztif','https://www.kutya-tar.hu/kutyak1/napolyi-masztiff/napolyi-masztiff.jpg'),
    new HarciKutyaGroup('Német Dog','Data/Pictures/nemet_dog.jpg'),
    new HarciKutyaGroup('Pireneusi Masztiff','https://static-cdn.arcanum.hu/nfo-resources/kutyatar_pic/kutyatar/k%C3%A9pek/k273.bmp'),
    new HarciKutyaGroup('Rottweiler','https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/rottweiler-gl%C3%BCcklich-1024x682.jpg'),
    new HarciKutyaGroup('Amerikai Stedfodshire Terrier','https://img-03.cdn.amarqt.com/kutya/lightbox/amerikai-staffordshire-terrier-1.jpg'),
    ];



    console.log(all_dogList.length);
 function getAllDogList() {

     return all_dogList;

 }

function getQuizQuestion() {

    result = new Set();
    while (result.size < QUESTION_QUIZ_NUMBER) {
        var rndn = parseInt(Math.random() * all_dogList.length);
        result.add(all_dogList[rndn]);

    }

    return Array.from(result);


}

function makeQuizArray(dogBreedsArray) {
    result = [];
    for (var i = 0; i < dogBreedsArray.length; i++) {
        result[i] = [];
        result[i][0] = dogBreedsArray[i];
        result[i][1] = [];
        result[i][1].push(dogBreedsArray[i]._breedName);

        while (result[i][1].length < ANSWER_QUIZ_NUMBER) {
            let fakeBreed = all_dogList[parseInt(Math.random() * all_dogList.length)];
            if (fakeBreed.id == dogBreedsArray[i].id && !result[i][1].includes(fakeBreed._breedName)) {
                result[i][1].push(fakeBreed._breedName);

            }


        }


        result[i][1].sort(function () {
            return .5 - Math.random();
        })


    }


    return result;
}

function finalQuizQuestionArray() {
return makeQuizArray(getQuizQuestion());
}

//console.log(finalQuizQuestionArray);

