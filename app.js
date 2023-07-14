// document.getElementById("sub1").innerText="Hello World<i>";
// document.getElementById("sub1").innerHTML="<i>Hello World<i>";
// var a=document.getElementById("1");
// document.getElementById("2").innerHTML="Hello"+a.innerText ;


function change(){
    var img= document.getElementById("bulb");
    if(img.src.match("off-removebg")){
        img.src="on-removebg-preview.png";
    }
    else{

        img.src="off-removebg-preview.png";
    }
}