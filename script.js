var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}

let btn = document.getElementById("btn");
let btnText=document.getElementById("btnText");
let btnIcon=document.getElementById("btnIcon");
let logo3=document.getElementById("logo3");

btn.onclick=function(){
  document.body.classList.toggle("white-theme");
  if(document.body.classList.contains("white-theme")){
    btnIcon.className=" fa-solid fa-moon";
    btnText.innerHTML="Dark";
    logo3.src="images/logo3.png";
    
  }
  else{
    btnIcon.className="fa-solid fa-sun";
    btnText.innerHTML="Light";
    logo3.src="images/logo2.png";
  }
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}