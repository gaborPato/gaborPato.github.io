

function changeStyle() {

    var text= document.getElementById("para1").style.color = getRandomrgb();
    var text = document.getElementById("para1").style.backgroundColor = getRandomrgb();
    rnd=Math.random();
    if(rnd<0.4){
        var text= document.getElementById("para1").style.fontStyle = "italic";
    }else {
        var text= document.getElementById("para1").style.fontStyle = "normal";

    }
    size=(Math.random()*90+101);
    var text= document.getElementById("para1").style.fontSize=size+"%";  //""+Math.random()*50+1001+"%";
}

function getRandomrgb() {
r= Math.floor(Math.random()*256) ;
g= Math.floor(Math.random()*256)  ;
b= Math.floor(Math.random()*256) ;

console.log(""+r+","+g+","+b)

return "rgb("+r +", "+g+ ", "+b +")"
}
