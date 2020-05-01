/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var name1 = ['laci', 'jani', 'emőke'];
if (name1[2].length > 5) {
    console.log("a harmadik elem több mint 5 karakter");

} else {
    console.log("a harmadik elem nem több mint 5 karakter");
}

name1[0] = 'gabor';

name1.push('lali');
console.log(name1);

if (name1.length > 4) {
    console.log("több mint 4 elelm");
} else {
    console.log("nincs több mint 4 elelm");
}

myColorsObject = {

    myColors: ["red", "green", "hupilila"]

};
myColorsObject.hasManyColors = myColorsObject.myColors.length > 3;
console.log(myColorsObject.hasManyColors);

var blockC = 10;

for (i = 0; i < blockC; ) {
    console.log(i++);
}
blockC = 11;
for (i = 1; i < blockC; ) {
    console.log(i++);
}
blockC = 21;
for (i = 0; i < blockC; ) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
console.log('sdfsdfsdf');
printNum = (n)=>{
    result="";
    for(i=1;i<=n;i++) {
         result+= i+",";
         if(i==n){
          result= result.substring(0,result.length-1);
         }
         
         
    }
    console.log(result);
   
}
printNum(20);

function printArray(array){
    if(array instanceof Array){
        for(i=0;i<array.length;i++){
            console.log(array[i]);
        }
    }else{
        console.log("not array");
    }
}
printArray([1,7,8]);
//a=[1,3];
//console.log([] instanceof Array)  ;

[2,"huhuhu",6].forEach((n) =>{
    console.log(n);
});