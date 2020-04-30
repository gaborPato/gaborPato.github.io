

function changeStyle() {

    var paragraphs= document.getElementsByTagName("p");
    var rndElementIndex=Math.floor(Math.random()*paragraphs.length);
    for (i=0; i<paragraphs.length;i++){
        if(i==rndElementIndex){
            paragraphs.item(i).style.color=getRandomrgb();
        }else {
            paragraphs.item(i).style.color="black";
        }
    }


}

function getRandomrgb() {
r= Math.floor(Math.random()*256) ;
g= Math.floor(Math.random()*256)  ;
b= Math.floor(Math.random()*256) ;

console.log(r+","+g+","+b)

return "rgb("+r +", "+g+ ", "+b +")"
}
