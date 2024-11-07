let moon=document.getElementById("moon");
let sun=document.getElementById("sun");
let body=document.getElementById("all");
let col=document.querySelector(".row");
let header=document.getElementById("header");
let first=document.getElementById("body");
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");
let show1=document.getElementById("show1");

let show2=document.getElementById("show2");
let show3=document.getElementById("show3");

moon.addEventListener("click",function()
{

 
  body.style.background="black";
  col.style.background="black";
  header.style.background="white";
  first.style.background="black";
  card1.style.background="black";
  card1.style.border="2px solid white";
  card2.style.background="black";
  card2.style.border="2px solid white";
  card3.style.background="black";
  card3.style.border="2px solid white";
  show1.style.background="black";
  show2.style.background="black";
  show3.style.background="black";
   
 
})
sun.addEventListener("click",function()
{
  body.style.background="white";
  col.style.background="white";
  header.style.background="white";
  first.style.background="white";
  card1.style.background="white";

  card2.style.background="white";

  card3.style.background="white";

  show1.style.background="white";
  show2.style.background="white";
  show3.style.background="white";

})
//target the meun
let allbg=document.getElementById("more");//all body
let seemore1=document.getElementById("seemore1");//number one card
let icon1=document.getElementById("closebtn1");
seemore1.addEventListener("click",function()
{

  show1.style.display="flex";
  allbg.style.display="flex";
  
})

icon1.addEventListener("click",function()
{
  show1.style.display="none";
  allbg.style.display="none";

})




let seemore2=document.getElementById("seemore2");//number one card
let icon2=document.getElementById("closebtn2");
seemore2.addEventListener("click",function()
{

  show2.style.display="flex";
  allbg.style.display="flex";
  
})

icon2.addEventListener("click",function()
{
  show2.style.display="none";
  allbg.style.display="none";

})

let seemore3=document.getElementById("seemore3");//number one card
let icon3=document.getElementById("closebtn3");
seemore3.addEventListener("click",function()
{

  show3.style.display="flex";
  allbg.style.display="flex";
  
  
})

icon3.addEventListener("click",function()
{
  show3.style.display="none";
  allbg.style.display="none";

})















