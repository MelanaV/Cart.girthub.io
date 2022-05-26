
var ris = ["img/ris1.png", "img/ris2.png", "img/ris3.png", "img/ris4.png", "img/ris5.png", "img/ris6.png"]
pole = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
var p = 0;
var num = 0;
var clp = 1;
var num1 = 0;
var num2 = 0;
var pobeda = 0;
var z1=0;
var z2=0;
function start() {
  p = 0;
  pic2.style.width="200px";
  pic2.style.height="300px";
  
  for (i = 0; i <= 11; i++) {

    num = pole[i];//берем номер элемента картинки из массива
    idImg = document.getElementById("pic" + i);
    idImg.src = "img/kart.png";
  }
    for (var pr = 0; pr <= 11; pr++) {
      z1=Math.floor(Math.random() * 11);
      z2=Math.floor(Math.random() * 11);
      var temp=pole[z1];
      //alert("num1="+z1+"mass="+temp);
     // alert("num2="+z1+"mass="+pole[z2])
       pole[z1]=pole[z2];
       pole[z2]= temp;

  }
//alert(pole);



}
//теперь надо писать функцию щелчка
function clickpic(namber) {
  //alert(ris[pole[namber]]);
  if (clp == 1) {

    idImg = document.getElementById("pic" + namber);
    idImg.src = ris[pole[namber]];
    num1 = namber;
    clp++;
  }
  else {
    idImg = document.getElementById("pic" + namber);
    idImg.src = ris[pole[namber]];
    clp = 1;
    num2 = namber;
    interval = setInterval(udacha, 1000);

  }

}

function udacha() {
//alert("num1="+num1+"  num2="+num2);
  if (pole[num1] == pole[num2]) {
    idImg = document.getElementById("pic" + num1);
    idImg.src = "img/spacer.gif";

    idImg = document.getElementById("pic" + num2);
    idImg.src = "img/spacer.gif";
    pobeda += 2;
    if (pobeda == 12) {
      pic2.style.width="400px";
      pic2.style.height="500px";
      pic2.src="img/winner3.gif";
  


    }
  }
  else {
    idImg = document.getElementById("pic" + num1);
    idImg.src = "img/kart.png";
    idImg = document.getElementById("pic" + num2);
    idImg.src = "img/kart.png";

  }
  clearInterval(interval);

}


