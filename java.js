
var img0 = 'meryem1.png';

var h11 =document.getElementById("h11");
function javab1(){
   let number1= parseFloat(document.getElementById("n1").value);
   let number2= parseFloat(document.getElementById("n2").value);

  h11.innerHTML=number1 - number2 ;
h11.style.color= 'green';
}


function javab2(){
   let number1= parseFloat(document.getElementById("n1").value);
   let number2= parseFloat(document.getElementById("n2").value);

  h11.innerHTML=number1 + number2 ;
h11.style.color= 'green';
}

function javab3(){
   let number1= parseFloat(document.getElementById("n1").value);
   let number2= parseFloat(document.getElementById("n2").value);

  h11.innerHTML=number1 * number2 ;
h11.style.color= 'green';
}
function javab4(){
    let number1= parseFloat(document.getElementById("n1").value);
    let number2= parseFloat(document.getElementById("n2").value);
 
   h11.innerHTML=number1 / number2;
 h11.style.color= 'green';
 }

function p1(){
  document.getElementById("meryem1").setAttribute("id","meryem0");
}
function p2(){
  document.getElementById("meryem2").setAttribute("id","meryem00");
}

//////////////////////////////
var sinav =document.querySelector(".sinav")
var form1 =document.getElementById("form_1")
var sinav_button =document.getElementById("sinav_button")
function sinav0(){
  document.querySelector(".sinav").classList.toggle("active")
  document.getElementById("form_1").classList.toggle("hidden")
 
  var footer1 = document.querySelector(".footer1")
  footer1.setAttribute("id","footer1")
sinav_button.setAttribute("class","sinav_button")
document.querySelector(".sinav").setAttribute("id","sinav0")

}
//////////////////////////
conter1 = 0;
 j01 = 3;
var h31=document.getElementById("h31")
function j11(){
  var j1 =document.getElementById("j1").value;
  conter1 = conter1+5
if(j1 == j01 ){
   h31.textContent = '9 - 6 = 3'+' ✅ ' + conter1 +": puan"
document.getElementById("soru1").classList.add("hidden")
}
else{ 
  h31.innerHTML='9 - 6 = '+j1 + '❌'+ 0 +": puan " 
document.getElementById("soru1").classList.add("hidden")
}
}
////////////////////////////
/////////////////////////
conter2 = 0;
 j02 = 12;
var h32=document.getElementById("h32")
function j22(){
  var j2 =document.getElementById("j2").value;
  conter2 = conter2+5
if(j2 == j02 ){
   h32.textContent = '7 + 5 = 12'+' ✅' +conter2 +": puan"
document.getElementById("soru2").classList.add("hidden")
}
else{ 
  h32.innerHTML='7 + 5 ='+ j2 + '❌'+0 +": puan " 
document.getElementById("soru2").classList.add("hidden")
}
}
////////////////////////////
///////////////////////////////
conter3 = 0;
 j03 = 17;
var h33=document.getElementById("h33")
function j33(){
  var j3 =document.getElementById("j3").value;
  conter3 = conter3+5
if(j3 == j03 ){
   h33.textContent = '9 + 8 = 17'+ '✅'+ conter3 +": puan"
document.getElementById("soru3").classList.add("hidden")
}
else{ 
  h33.innerHTML='9 + 8 = '+j3 +'❌' + 0 +": puan " 
document.getElementById("soru3").classList.add("hidden")
}
}

///////////////////////////////
conter4 = 0;
 j04 = 3;
var h34=document.getElementById("h34")
function j44(){
  var j4 =document.getElementById("j4").value;
  conter4 = conter4+5
if(j4 == j04 ){
   h34.textContent = '8 - 5 = 3' + '✅'+ conter4 +": puan"
document.getElementById("soru4").classList.add("hidden")
}
else{ 
  h34.innerHTML='8 - 5 ='+j4+ '❌'+  0 +": puan " 
document.getElementById("soru4").classList.add("hidden")
}
}
////////////////////////////
///////////////////////////////
conter5 = 0;
 j05 = 9;
var h35=document.getElementById("h35")
function j55(){
  var j5 =document.getElementById("j5").value;
  conter5 = conter5+5
if(j5 == j05 ){
   h35.textContent = '3 + 6 = 9'+'✅'+ conter5 +": puan"
document.getElementById("soru5").classList.add("hidden")
}
else{ 
  h35.innerHTML='6 + 3 ='+j5+ '❌'+ 0 +": puan " 
document.getElementById("soru5").classList.add("hidden")
}
}
////////////////////////////
conter6 = 0;
 j06 = 11;
var h36=document.getElementById("h36")
function j66(){
  var j6 =document.getElementById("j6").value;
  conter6 = conter6+5
if(j6 == j06 ){
   h36.textContent = '7 + 4 = 11'+'✅'+ conter6 +": puan"
document.getElementById("soru6").classList.add("hidden")
}
else{ 
  h36.innerHTML='7 + 4 = '+j6+'❌' + 0 +": puan " 
document.getElementById("soru6").classList.add("hidden")
}
}
////////////////////////////
conter7 = 0;
 j07 = 1;
var h37=document.getElementById("h37")
function j77(){
  var j7 =document.getElementById("j7").value;
  conter7 = conter7+5
if(j7 == j07 ){
   h37.textContent = '10 - 9 = 1'+'✅'+ conter7 +": puan"
document.getElementById("soru7").classList.add("hidden")
}
else{ 
  h37.innerHTML='10 - 9 = '+j7+'❌' + 0 +": puan " 
document.getElementById("soru7").classList.add("hidden")
}
}
////////////////////////////
conter8 = 0;
 j08 = 4;
var h38=document.getElementById("h38")
function j88(){
  var j8 =document.getElementById("j8").value;
  conter8 = conter8+5
if(j8 == j08 ){
   h38.textContent = '8 - 4 = 4'+'✅'+ conter8 +": puan"
document.getElementById("soru8").classList.add("hidden")
}
else{ 
  h38.innerHTML='8 - 4 = '+j8+'❌' + 0 +": puan " 
document.getElementById("soru8").classList.add("hidden")
}
}
////////////////////////////
conter9 = 0;
 j09 = 9;
var h39=document.getElementById("h39")
function j99(){
  var j9 =document.getElementById("j9").value;
  conter9 = conter9+5
if(j9 == j09 ){
   h39.textContent = '5 + 4 = 9'+'✅'+ conter9 +": puan"
document.getElementById("soru9").classList.add("hidden")
}
else{ 
  h39.innerHTML='5 + 4 = '+j9+'❌' + 0 +": puan " 
document.getElementById("soru9").classList.add("hidden")
}
}
////////////////////////////
conter10 = 0;
 j010 = 4;
var h310=document.getElementById("h310")
function j1010(){
  var j10 =document.getElementById("j10").value;
  conter10 = conter10+5
if(j10 == j010 ){
   h310.textContent = '10 - 6 = 4'+'✅'+ conter10 +": puan"
document.getElementById("soru10").classList.add("hidden")
}
else{ 
  h310.innerHTML='10 - 6 =' +j10 +'❌' + 0 +": puan " 
document.getElementById("soru10").classList.add("hidden")
}
}

var time =document.getElementById("time");
    var date = new Date();
    time.innerHTML = parseInt(date.getFullYear());