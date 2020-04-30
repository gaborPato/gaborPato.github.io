function changePhoto() {
var src= document.getElementById("image").src ;

//alert(src);

if (src.endsWith("stalin.jpg") ){
    document.getElementById("image").src = "orban.jpeg";

}else {
    document.getElementById("image"). src = "stalin.jpg";
}

}