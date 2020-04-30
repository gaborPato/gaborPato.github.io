let a = 10;
let b= 2;
result= a*b;
console.log(result);
if (a*b>20){
    console.log("result>20");

}else{
    console.log("result<=20");
}
println("hello te ló")
println("result eredménye :" + result);



function println(arg) {
    document.writeln("<h1>"+arg+ "</h1>");

}
function clickName() {
    var name = document.getElementById("name").value;
    var message= document.getElementById("message").innerHTML="Hello " + name;

}