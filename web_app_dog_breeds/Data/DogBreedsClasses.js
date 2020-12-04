const QUESTION_QUIZ_NUMBER = 10;
const ANSWER_QUIZ_NUMBER = 4;
const URL_END = "?raw=true"

class DogBreedsClasses {

    constructor(breedName, dogPicURL) {

        this._breedName = breedName;
        this._dogPicURL = dogPicURL;
    }

}

class PuliGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = "group_puli";
    }
}

class Vizsla_Kopo_SpanielGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = "group_vizsla_kopo_span";
    }
}

class NemetJuhaszGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = "group_nemet_juhasz";
    }
}


class MukiKutyaGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = "group_muki";
    }
}

class AgarGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = 'group_agar';
    }
}

class HarciKutyaGroup extends DogBreedsClasses {
    constructor(breedName, dogPicURL) {
        super(breedName, dogPicURL);
        this.id = 'group_harci_kutya';
    }
}

var all_dogList = [
    new NemetJuhaszGroup('Német Juhász', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/nemet_juhasz.jpg?raw=true'),
    new Vizsla_Kopo_SpanielGroup('Német Vizsla', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/nemet_vizsla.jpg?raw=true"),
    new Vizsla_Kopo_SpanielGroup('Amerikai Rókakopó', 'https://img-04.cdn.amarqt.com/kutya/hd/amerikai-rokakopo-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Dingó', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/dingo.jpg?raw=true"),
    new Vizsla_Kopo_SpanielGroup('Pointer', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/pointer.jpg?raw=true"),
    new NemetJuhaszGroup('Border Collie', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/border_collie.jpg?raw=true"),
    new NemetJuhaszGroup('Belga Juhász', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/belga_juhasz.jpg?raw=true"),
    new PuliGroup('Mudi', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/mudi.jpg"+URL_END),
    new PuliGroup('Barbet', "https://img-04.cdn.amarqt.com/animals/kutya/francia-vizikutya/lightbox/1-barbet-0450e49e-48e8-47b0-b7a0-86fd9235e530-1.jpg"),
    new PuliGroup('Pumi', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/pumi.jpg"+URL_END),
    new Vizsla_Kopo_SpanielGroup('Ír Vizispániel', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/ir_vizispaniel.jpg"+URL_END),
    new AgarGroup("Skót Szarvasagár", "https://www.akutya.hu/fajtakepek/eredeti/321skot%20szarvasagar.jpg"),
    new AgarGroup("Azawakh", "https://www.toppont.hu/wp-content/uploads/2019/05/6-46.jpg"),
    new AgarGroup("Whippet", "https://www.zooplus.hu/magazin/wp-content/uploads/2017/04/whippet-im-grass-1024x681.jpeg"),
    new AgarGroup("Magyar Agár", "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/magyar_agar.jpg"+URL_END),
    new NemetJuhaszGroup('Basenji', 'https://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23008_basenji-460x290.jpg'),
    new NemetJuhaszGroup('Dalmata', "https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/dalmatiner-spielt.jpg"),
    new NemetJuhaszGroup('Eszkimó Kutya', 'https://img-01.cdn.amarqt.com/animals/kutya/amerikai-eszkimo-kutya/detailed/2-untitled-798c44f4-3020-47e2-814e-42858442cf18-1.jpg'),
    new NemetJuhaszGroup('Golden Retriver', 'https://24.p3k.hu/app/uploads/sites/11/2015/10/goldi1-e1445193079804.jpg'),
    new NemetJuhaszGroup('Labrador', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29150201/Labrador-Retrievers-three-colors.jpg'),
    new NemetJuhaszGroup('Karéliai Medvekutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/kar_medve_kutya.jpg'+URL_END),
    new NemetJuhaszGroup('Kárpáti Pásztor', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/karpati_juhasz.jpg'+URL_END),
    new NemetJuhaszGroup('Görnlandi Kutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/gorlandi_kutya.jpg'+URL_END),
    new NemetJuhaszGroup('Dobberman', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/dobberman.jpg"+URL_END),
    new NemetJuhaszGroup('Atlaszi Hegyikutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/atlaszi_hegyikutya.jpg'+URL_END),
    new NemetJuhaszGroup('Alaszkai Malamut', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/alaszkai_malam.jpg'+URL_END),
    new NemetJuhaszGroup('Akita Inu', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/akita_inu.jpeg'+URL_END),
    new NemetJuhaszGroup('Hokkaidó', 'https://www.kutya-tar.hu/kutyak2/hokkaido/hokkaido.jpg'),
    new Vizsla_Kopo_SpanielGroup('Afrikai Oroszlánkutya', 'https://img-02.cdn.amarqt.com/kutya/lightbox/rhodesian-ridgeback-1.jpg'),
    new PuliGroup('Abbrúzói Juhász', 'https://img-02.cdn.amarqt.com/kutya/hd/cane-de-pastore-maremmano-abruzzese.jpg'),
    new NemetJuhaszGroup('Amerikai Akita', 'https://www.zooplus.hu/magazin/wp-content/uploads/2018/03/american-akita-welpe-1024x731.jpg'),
    new Vizsla_Kopo_SpanielGroup('Olasz Kopó', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/olasz_kopo.jpg'+URL_END),
    new Vizsla_Kopo_SpanielGroup('Erdélyi Kopó', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/erdelyi_kopo.jpg'+URL_END),
    new PuliGroup('Bobtail', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Bobtail_als_Integrationshund.JPG'),
    new Vizsla_Kopo_SpanielGroup('Ausztrál Kelpie', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/australskakelpie.jpg'+URL_END),

    new PuliGroup('Portugál Hegyikutya', 'https://www.akutya.hu/fajtakepek/eredeti/110portugal%20hegyikutya.jpg'),
    new PuliGroup('Barbet', 'https://img-05.cdn.amarqt.com/kutya/hd/francia-vizikutya-1.jpg'),
    new PuliGroup('Komondor', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/komondor.jpg'+URL_END),
    new PuliGroup('Kuvasz', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/kuvasz.jpg'+URL_END),
    new Vizsla_Kopo_SpanielGroup('Ír szetter', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/ir_szetter.jpg'+URL_END),
    new Vizsla_Kopo_SpanielGroup('Sussexi Spániel', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/sussex_spaniel.jpg'+URL_END),
    new PuliGroup('Csau-csau', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/csau.jpg'+URL_END),
    new PuliGroup('Shar-Pei', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/shar_pei.jpg"+URL_END),
    new Vizsla_Kopo_SpanielGroup('Beagle', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/beagle.jpg"+URL_END),
    new PuliGroup('Puli', "https://www.zooplus.hu/magazin/wp-content/uploads/2019/01/Puli.jpg"),
    new PuliGroup('Basset Huond', "https://img-05.cdn.amarqt.com/animals/kutya/basset-hound/detailed/1-untitled-31e6b6d2-a014-447b-9364-048b5681656a-1.jpg"),
    new Vizsla_Kopo_SpanielGroup('Portugál Vizikutya', "https://kutyafajtak.hu/kepek/portugal-vizikutya/portugal-vizikutya-04.jpg"),
    new Vizsla_Kopo_SpanielGroup('Spanyol Kopó', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/spanyol_kopo.jpg'+URL_END),
    new AgarGroup('Afgán Agár', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/afghan_agar.jpg'+URL_END),
    new AgarGroup('Fáraó Kutya', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/farao_ku.jpg"+URL_END),
    new AgarGroup('Angol Agár', "https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/angol_agar.jpg"+URL_END),
    new AgarGroup('Olasz Agár', 'https://www.kutya-tar.hu/kutyak2/olasz-agar/olasz-agar.jpg'),
    new AgarGroup('Orosz Fekete Terrier', 'https://www.kutya-tar.hu/kutyak2/orosz-fekete-terrier/orosz-fekete-terrier.jpg'),
    new NemetJuhaszGroup('Ónémetjuhász-kutya', 'https://i.ytimg.com/vi/jpb3gVfcz8I/hqdefault.jpg'),
    new Vizsla_Kopo_SpanielGroup('Angol Coocker Spaniel', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/ang_cock_spaniel.jpg'+URL_END),
    new Vizsla_Kopo_SpanielGroup('Field Spániel', 'https://img-03.cdn.amarqt.com/kutya/hd/field-spaniel-2.jpg'),
    new Vizsla_Kopo_SpanielGroup('Tiroli Kopó', 'https://img-05.cdn.amarqt.com/animals/kutya/tiroli-kopo/lightbox/0-untitled-6d0605c5-0bc5-458c-a129-6a23d397d501-1.jpg'),
    new MukiKutyaGroup('Mopsz', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/mopsz.jpg'+URL_END),
    new Vizsla_Kopo_SpanielGroup('Angol Toy Spaniel', 'https://img.point.pet/44554800/544544544/555444866_1.jpg'),
    new MukiKutyaGroup('Tököli Kobor Terrier', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/muki.jpg'+URL_END),
    new MukiKutyaGroup('Törpe pincser', 'https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/Zwergpinscher-im-Grass-1024x682.jpg'),
    new Vizsla_Kopo_SpanielGroup('Rövidszőrű Tacskó', 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Standard-Dachshund.jpg'),
    new Vizsla_Kopo_SpanielGroup('Szálkásszőrű Tacskó', 'https://img-05.cdn.amarqt.com/kutya/hd/szalkasszoru-torpe-tacsko-2.jpg'),
    new MukiKutyaGroup('Tibeti Terrier', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/tibeti_terrier.jpg'+URL_END),
    new MukiKutyaGroup('Törpe Spicc', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/torpespicc.jpg'+URL_END),

 /*   new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),
    new MukiKutyaGroup("errortest","blabla.jpg"),*/
    new MukiKutyaGroup('Cseh Terrier', 'https://www.kutya-tar.hu/kutyak1/cseh-terrier/cseh-terrier-01.jpg'),
    new MukiKutyaGroup('Pekingi Palotakutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/pekingi_palotakutya.jpg'+URL_END),
    new MukiKutyaGroup('Skót terrier', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/skot_terrier.jpg'+URL_END),
    new MukiKutyaGroup('Si-cu', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/si_cu.jpeg'+URL_END),
    new MukiKutyaGroup('Német Spicc', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/nemet_spicc.jpg'+URL_END),
    new MukiKutyaGroup('Máltai Selyemkutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/maltai_selyem.jpg'+URL_END),
    new MukiKutyaGroup('Kínai kopaszkutya', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/kinai_kopasz.jpg'+URL_END),
    new MukiKutyaGroup('Jack Russel terrier', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/jack_russel.jpg'+URL_END),
    new MukiKutyaGroup('Biever terrier', 'https://img-03.cdn.amarqt.com/kutya/hd/biewer-yorkshire-terrier-1.jpg'),
    new MukiKutyaGroup('Cairn terrier', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Cairn-Terrier-2008.PNG/250px-Cairn-Terrier-2008.PNG'),
    new MukiKutyaGroup('Kis oroszlánkutya', 'https://img-03.cdn.amarqt.com/animals/kutya/kis-oroszlankutya/lightbox/0-untitled-07327384-4abe-4395-acfc-f71b0ccdc17c-1.jpg'),
    new MukiKutyaGroup('Ausztrál selyemszőrű terrier', 'https://www.kutya-tar.hu/kutyak2/ausztral-selyemszoru-terrier/ausztral-selyemszoru-terrier.jpg'),
    new MukiKutyaGroup('Brüsszerli Giffon', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/brusseeli_griffon.jpg'+URL_END),
    new MukiKutyaGroup('Drótszörű foxterrier', 'https://www.haziallat.hu/kutyafajtak/a-drotszoru-foxterrier-orokmozgo-gyerekbarat-kutya/2704/1/foxterrier-foxi-kutya.jpg'),
    new MukiKutyaGroup('Havannai pincser', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/havannai_pincs.jpg'+URL_END),
    new MukiKutyaGroup('Csivava', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/csivava.jpg'+URL_END),
    new MukiKutyaGroup('Ausztrál terrier', 'https://img-01.cdn.amarqt.com/kutya/hd/ausztral-terrier-1.jpg'),
    new MukiKutyaGroup('Affenpincser', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/affenpincher.jpg'+URL_END),
    new NemetJuhaszGroup('Pomázi Hordócska', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/tipike.jpg'+URL_END),
    new HarciKutyaGroup('Bernáthegyi', 'https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/bernhardiner-im-schnee.jpg'),
    new HarciKutyaGroup('Denevérfülű Pit-Nyúl', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/lusy.jpg'+URL_END),
    new HarciKutyaGroup('Amerikai Bulldog', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/amerikai_bulldog.jpg'+URL_END),
    new HarciKutyaGroup('Angol Bulldog', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/angol_bulldog.jpg'+URL_END),
    new HarciKutyaGroup('Argentín Dog', 'https://www.pet4you.hu/img/big/Dogo_Argentino_2.jpg'),
    new HarciKutyaGroup('Bordauxi Dog', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/bordoi_dog.jpg'+URL_END),
    new HarciKutyaGroup('Boxer', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/boxer.jpeg'+URL_END),
    new HarciKutyaGroup('Bullmasztif', 'https://img-05.cdn.amarqt.com/animals/kutya/bullmasztiff/detailed/2-untitled-2892cbf5-b27b-4fc3-a8ec-8d83cdb74d5f-1.jpg'),
    new HarciKutyaGroup('Canne corso', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/canne_corso.jpeg'+URL_END),
    new HarciKutyaGroup('Dobberman', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/dobberman.jpg'+URL_END),
    new HarciKutyaGroup('Nápolyi Masztif', 'https://www.kutya-tar.hu/kutyak1/napolyi-masztiff/napolyi-masztiff.jpg'),
    new HarciKutyaGroup('Német Dog', 'https://github.com/gaborPato/gaborPato.github.io/blob/master/DogsForGame/nemet_dog.jpg'+URL_END),
    new HarciKutyaGroup('Pireneusi Masztiff', 'https://static-cdn.arcanum.hu/nfo-resources/kutyatar_pic/kutyatar/k%C3%A9pek/k273.bmp'),
    new HarciKutyaGroup('Rottweiler', 'https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/rottweiler-gl%C3%BCcklich-1024x682.jpg'),
    new HarciKutyaGroup('Amerikai Stedfodshire Terrier', 'https://img-03.cdn.amarqt.com/kutya/lightbox/amerikai-staffordshire-terrier-1.jpg'),
    new MukiKutyaGroup('Ausztrál selyemszőrű terrier', 'https://www.kutya-tar.hu/kutyak2/ausztral-selyemszoru-terrier/ausztral-selyemszoru-terrier.jpg'),
    new MukiKutyaGroup('Yorkshire terrier', 'https://img-03.cdn.amarqt.com/kutya/lightbox/yorkshire-terrier-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Boykin Spániel', 'https://www.dogbreedslist.info/uploads/allimg/dog-pictures/Boykin-Spaniel-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Orosz Spániel', 'https://c.pxhere.com/photos/28/0e/welsh_springer_spaniel_dog_pet_canine_nature_outside-1128944.jpg!s'),
    new Vizsla_Kopo_SpanielGroup('Francia Spániel', 'https://www.kutya-tar.hu/kutyak2/francia-spaniel/francia-spaniel.jpg'),
    new Vizsla_Kopo_SpanielGroup('Pikárdiai Spániel', 'https://img-03.cdn.amarqt.com/kutya/hd/pikardiai-spaniel-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Pikárdiai Kék Spániel', 'https://img-04.cdn.amarqt.com/kutya/hd/pikardiai-kek-spaniel-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Billy', 'https://img-02.cdn.amarqt.com/kutya/hd/billy-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Finn Kopó', 'https://img-05.cdn.amarqt.com/animals/kutya/finn-kopo/lightbox/1-untitled-bb547953-6bac-4f22-a4fa-5f1457b85094-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Szlovák Kopó', 'https://img-05.cdn.amarqt.com/kutya/hd/szlovak-kopo-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Vidravadász Kopó', 'https://img-01.cdn.amarqt.com/kutya/hd/vidrakopo-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Szávavölgyi Kopó', 'https://img-05.cdn.amarqt.com/animals/kutya/szavavolgyi-kopo/lightbox/0-untitled-a4eb0516-c86f-400a-a131-9ee15427c67a-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Halden Kopó', 'https://img-02.cdn.amarqt.com/kutya/hd/halden-kopo-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Artois-i Kopó', 'https://img-02.cdn.amarqt.com/animals/kutya/artois-i-kopo/lightbox/0-untitled-a96e4ccc-e856-4306-ba04-5c612da57c8b-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Angol Véreb', 'https://img-03.cdn.amarqt.com/animals/kutya/angol-vereb/detailed/0-untitled-dcb4ff98-9491-4a0b-a3ac-cf160ea41772-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Angol Rókakopó', 'https://www.akutya.hu/fajtakepek/eredeti/390angol%20rokakopo.jpg'),
    new Vizsla_Kopo_SpanielGroup('Bajor Hegyi Véreb', 'https://img-04.cdn.amarqt.com/kutya/hd/bajor-hegyi-vereb-1.jpg'),
    new Vizsla_Kopo_SpanielGroup('Burgosi Vizsla', 'https://img-03.cdn.amarqt.com/kutya/hd/burgosi-vizsla-1.jpg'),
    new MukiKutyaGroup('Bolognai Pincs', 'https://img-02.cdn.amarqt.com/magazine/fajtak/big/bolognese-fajtastandard-1.jpg'),
    new HarciKutyaGroup('Brazil Masztiff', 'https://img-05.cdn.amarqt.com/kutya/hd/brazil-masztiff-1.jpg'),
    new HarciKutyaGroup('Amerikai Bandog', 'https://kutyafajtak.hu/kepek/amerikai-bandog-kutya/amerikai-bandog-kutya-02.jpg'),
    new PuliGroup('Bergamoi Juhász', 'https://img-02.cdn.amarqt.com/kutya/lightbox/bergamoi-juhaszkutya-1.jpg'),
    new PuliGroup('Délorosz Juhász', 'https://img-01.cdn.amarqt.com/kutya/hd/delorosz-juhaszkutya-1.jpg'),

    new MukiKutyaGroup("Japán spicc", "https://img-02.cdn.amarqt.com/kutya/hd/japan-spitz-2.jpg"),
    new MukiKutyaGroup("Pomerániai törpe spicc", "https://img-02.cdn.amarqt.com/animals/kutya/pomeraniai-torpe-spitz/detailed/2-untitled-80c4adff-9be7-479f-9105-43a1a35f6c3c-1.jpg"),
    new MukiKutyaGroup("Szamolyéd spicc", "https://2.bp.blogspot.com/-F8FA3MWnhCM/WmMcn-5-U8I/AAAAAAAAATM/0CcOcRt-9V4UcUsRWesAiFoKohXOWqu9wCLcBGAs/s1600/1200-15079775-samoyed-dog-in-garden.jpg"),
    new MukiKutyaGroup("Finn spicc", "https://static-cdn.arcanum.hu/nfo-resources/kutyatar_pic/kutyatar/k%C3%A9pek/k117.bmp"),
];

function getAllDogList() {



    return all_dogList;

}

var newDogList = [


]






        ;

function getNewDogList() {

//    result = [];
//   
//    for (var i = 0; i < newDogList.length; i++) {
//        testImage = new Image();
//        testImage.src = newDogList[i]._dogPicURL;
//      
//       if(testImage.complete){
//           result.push(newDogList[i]);
//       }else {
//            console.log(i +' .error image ');
//        }
//
//    }
//    return result;

    return newDogList;

}

console.log(all_dogList.length);


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

