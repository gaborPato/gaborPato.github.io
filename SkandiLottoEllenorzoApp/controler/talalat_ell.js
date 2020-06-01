function talalat(szelveny,nyeroszamok) {
    result= new Map();
    for (i=4;i<8;i++){
        result.set(i,0);
    }
  var tal;
    for (const egySorTipp of szelveny) {
        for (const egySorNyeroSzam of nyeroszamok) {
            tal=0;
            for (const huzottSzam of egySorNyeroSzam) {
                if (egySorTipp.includes(huzottSzam)) tal++;
            }
            if (tal>3){
                oldTalalatSzam= result.get(tal);
                actualTalalatSz=oldTalalatSzam+1;
                result.set(tal,actualTalalatSz);

            }
        }
    }
    console.log(result);
    return result;

}