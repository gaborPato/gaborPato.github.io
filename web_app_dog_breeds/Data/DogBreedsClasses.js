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

all_dogList = [
    new NemetJuhaszGroup('Német Juhász', 'Data/Pictures/nemet_juhasz.jpg'),
    new NemetJuhaszGroup('Német Vizsla', "Data/Pictures/nemet_vizsla.jpg"),
    new NemetJuhaszGroup('Dingó', "Data/Pictures/dingo.jpg"),
    new NemetJuhaszGroup('Pointer', "Data/Pictures/pointer.jpg"),
    new NemetJuhaszGroup('Border Collie', "Data/Pictures/border_collie.jpg"),
    new NemetJuhaszGroup('Belga Juhász', "Data/Pictures/belga_juhasz.jpg"),
    new PuliGroup('Mudi', "Data/Pictures/mudi.jpg"),
    new PuliGroup('Barbet', "Data/Pictures/barbet.jpg"),
    new PuliGroup('Pumi', "Data/Pictures/pumi.jpg"),
    new PuliGroup('Ír Vizispániel', "Data/Pictures/ir_vizispaniel.jpg"),
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
    new NemetJuhaszGroup('Afrikai Oroszlánkutya','https://img-02.cdn.amarqt.com/kutya/lightbox/rhodesian-ridgeback-1.jpg'),
    new PuliGroup('Abbrúzói Juhász','https://img-02.cdn.amarqt.com/kutya/hd/cane-de-pastore-maremmano-abruzzese.jpg'),
    new NemetJuhaszGroup('Amerikai Akita','https://www.zooplus.hu/magazin/wp-content/uploads/2018/03/american-akita-welpe-1024x731.jpg'),
    new NemetJuhaszGroup('Olasz Kopó','Data/Pictures/olasz_kopo.jpg'),
    new NemetJuhaszGroup('Erdélyi Kopó','Data/Pictures/erdelyi_kopo.jpg'),
    new PuliGroup('Bobtail','https://upload.wikimedia.org/wikipedia/commons/9/91/Bobtail_als_Integrationshund.JPG'),
    new PuliGroup('Ausztrál Kilpie','Data/Pictures/australskakelpie.jpg'),
    new PuliGroup('Ausztrál Terrier','https://img-03.cdn.amarqt.com/animals/kutya/ausztral-terrier/lightbox/1-untitled-5257d197-8afd-4484-9e37-7511a8743590-1.jpg'),
    new PuliGroup('Portugál Hegyikutya','https://www.akutya.hu/fajtakepek/eredeti/110portugal%20hegyikutya.jpg'),
    new PuliGroup('Barbet','https://img-05.cdn.amarqt.com/kutya/hd/francia-vizikutya-1.jpg'),
    new PuliGroup('Komondor','Data/Pictures/komondor.jpg'),
    new PuliGroup('Kuvasz','Data/Pictures/komondor.jpg'),
    new PuliGroup('Ír szetter','Data/Pictures/ir_szetter.jpg'),
    new PuliGroup('Csau-csau','Data/Pictures/csau.jpg'),
    new PuliGroup('Shar-Pei',"Data/Pictures/shar_pei.jpg"),
    new PuliGroup('Beagle',"Data/Pictures/beagle.jpg"),
    new PuliGroup('Basset Huond',"https://img-05.cdn.amarqt.com/animals/kutya/basset-hound/detailed/1-untitled-31e6b6d2-a014-447b-9364-048b5681656a-1.jpg"),
    new PuliGroup('Portugál Vizikutya',"https://kutyafajtak.hu/kepek/portugal-vizikutya/portugal-vizikutya-04.jpg"),
    new PuliGroup('Spanyol Kopó','Data/Pictures/spanyol_kopo.jpg'),
    new AgarGroup('Afgán Agár','Data/Pictures/afghan_agar.jpg'),
    new AgarGroup('Fáraó Kutya',"Data/Pictures/farao_ku.jpg"),
    new AgarGroup('Angol Agár',"Data/Pictures/angol_agar.jpg"),
    new AgarGroup('Olasz Agár','https://www.kutya-tar.hu/kutyak2/olasz-agar/olasz-agar.jpg'),
    new AgarGroup('Orosz Fekete Terrier','https://www.kutya-tar.hu/kutyak2/orosz-fekete-terrier/orosz-fekete-terrier.jpg'),
    new NemetJuhaszGroup('Ónémetjuhász-kutya','https://i.ytimg.com/vi/jpb3gVfcz8I/hqdefault.jpg'),




];
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

