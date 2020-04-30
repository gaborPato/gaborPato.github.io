var names=["laci","józsi","feri","barbara"];


document.write(names);
document.write("<br>");


for(i=0;i<names.length;i++){
    document.write(names[i] + "<br>");
}

var rnd=[];

for (var i = 0; i < 10; i++) {
    rnd[i] = Math.random()
    document.write(rnd[i] + "<br>");
    
}