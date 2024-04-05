//#####################################################
//86 (find elm  by id/tag name/class name /css selct/collection)
// title/body/img/forms/links

let myidelm =document.getElementById("my-div")
let mytagelm =document.getElementsByTagName("div")
let myclasselm =document.getElementsByClassName("my-span")
let myqueryelm =document.querySelector(".special")
let myqueryelm2 =document.querySelector("#my-div")
let myqueryelmOne =document.querySelector(".my-span")
let myqueryelmALL =document.querySelectorAll(".my-span")

console.log(myidelm);
console.log(mytagelm);
console.log(myclasselm);
console.log(myqueryelm);
console.log(myqueryelm2);
console.log(myqueryelmOne);//ici va me donne que le premier donc poir faire le tt ya selctall
console.log(myqueryelmALL);

console.log(document.title);
console.log(document.body);
console.log(document.forms);//all
console.log(document.forms[0].one.value);//one for name
console.log(document.links);//all
console.log(document.links[1].href);



//console.log(mytagelm[index]); je peux faire ca 
//meme je peux changer le contenu de div
//mytagelm[0].innerHTML="chage contenu";


//----------------------------------------------------------------------------------------------



//#####################################################
//87 get set elm content and artibbute
/*cours 87*/
let myelm=document.querySelector(".js")
console.log(myelm)//yrje kima te html
console.log(myelm.textContent)//content li dakhl brk mendouch 3ama9a m3a html

myelm.innerHTML="text from <span>mainn</span> file"
//va ecrit ca en html en class js
myelm.textContent="text from <span>mainn</span> file"
//ici non va lecrir avec tag kima rahi pas de rel avec html
//content brk as a text
document.images[0].src="httpps imanee"
document.images[0].alt="hiiiiiiii"
document.images[0].title="hiiiiiiii"//artibute not exist donc il va le rajouter
document.images[0].className="onee"
//--get
let mylink=document.querySelector(".link")
console.log((mylink.getAttribute("class")))
console.log((mylink.getAttribute("href")))
//---set
console.log((mylink.getAttribute("href")))



//----------------------------------------------------------------------------------------------






//#####################################################
//88 DOM CHECK ARTTIBUTE

console.log(document.getElementsByTagName("p")[0].attributes)
let myp =document.getElementsByTagName("p")[0]

if(myp.hasAttribute("data-src")){
    console.log("fond")
    if(myp.getAttribute("data-src")=== ""){
    myp.removeAttribute("data-src");
    }else{
        myp.setAttribute("data-src"," new-val")
    }
    //si vide remove sinon changes le valeur 
}else{
    console.log(" not fond")
    
}
//-----------------
if(myp.hasAttributes()){//remarque pour boolean avec s
    console.log(`oui has`);
}//
if(document.getElementsByTagName("div")){
    console.log(`div hasnt arrtubete`);
}//div hasnt arrtubete

//#####################################################
// 89 dom(create elm)/comment/textnode/arttubute/appendchild)

let myelm=document.createElement("div")
let myAttr= document.createAttribute("data-src")
let mytext= document.createTextNode("p-one")
let mycomm= document.createComment("this div")


myelm.className="product"
myelm.setAttributeNode(myAttr)//c vide peut etre n9dr nbdlou 9imtou in future
//myelm.dataOsama="test"//non je peux pas  il faut arrtibute
//sinon jutilise lautre methode 
myelm.setAttribute("data-test","testing")//data-test="testing"

// append text to elme (yhat le truc a la fin)
myelm.appendChild(mytext)
// prepend text to elme (yhat le truc au debut )

//append comm to elm

myelm.appendChild(mycomm)
//si je veux ca au debut 
myelm.prepend(mycomm)

//append to the page  body not just console 
/*********************************** 
document.body.appendChild(myelm)
//********************************* 
console.log(myelm)*/



//----------------------------------------------------------------------------------------------




//#####################################################
//90 DOM example advanced crate elm 
//practice product with heading and  paraghraphe 
//faire 100 elm

for(let i=0;i<100;i++){
let myelm =document.createElement("div")
let myh=document.createElement("h3")
let myp=document.createElement("p")
let mytexth3= document.createTextNode("tetx h " +(i+1))
let mytextp= document.createTextNode("tetx p" + (i+1))

myelm.className="product";
myelm.appendChild(myh);
myh.appendChild(mytexth3);

myelm.appendChild(myp);
myp.appendChild(mytextp);



document.body.appendChild(myelm)
}
console.log(myelm);

//#####################################################v
//91 DOM [deal with children ]
//children childnodes/firstchild/lastchild /firstelmchild/lastelmchild 


let myelem= document.querySelector("div")
console.log(myelem)
console.log(myelem.children)//the child of that parent (myelem)
// p/span just ya pas de text 
console.log(myelem.children[0])// le premier fils 
console.log(myelem.childNodes)// ya 7 elem parce que les espaces sont 
//des text yhsbhm mm si ya pas de text 


console.log(myelem.childNodes[0])//hello div ndkhl ltext njibha 
console.log(myelem.firstChild)//hellow div si jai pose le comme lwl haydli comm
console.log(myelem.lastChild)//hellow
console.log(myelem.firstElementChild)//awl elm mendouch rel yfwt comm w text <p>hi p</>
console.log(myelem.lastElementChild)//<span>





//----------------------------------------------------------------------------------------------






//#####################################################v
//92 DOM [EVENT]
//click use events in html on js
//-----onclick---oncontextmenu---onmouseenter--onmouseleave
//----onscroll--onresize---onfocus--onblur--onsubmit

let mybtn=document.getElementById("bt")

mybtn.onclick =function() {
    console.log("clicked");
}
/***ontextmenu**********************************
--> hadi ki ncliker droite matkhrjlich kima te goole kima deive ana ndir options khlaf
pour le site*/


//***onmouseenter*********************************
/*--> min ngisou say taffichger clicked 
let mybtn=document.getElementById("bt")

mybtn.onmouseenter=function() {
    console.log("clicked");
}*/
//***onmouseleave*********************************
/*--> ki nclicker mkan walou ki nrj3 mngisouch tafficher clicked 
let mybtn=document.getElementById("bt")

mybtn.onmouseleave=function() {
    console.log("clicked");
}

//***onscroll*********************************
/*--> ki ndir scrolling tafficher clicked 

window.onscroll = function(){
    console.log("SCROLL")//pour marche il faut cree un scroll avec css 
}
*/
/*onresize*********************************
window.onresize = function(){
    console.log("SCROLL")
}*/
//***onfocus*********************************
//***onblur********check lma ytlE mn field*************************
//***onsubmit*******avant de faire moi je check if dar kolch shih**************************


//----------------------------------------------------------------------------------------------

//#####################################################v
//93 [events]
//--validate form pratice
//--prevent default

/*
document.links[0].onmouseenter=function(event){
    console.log(event)
}//ici va afficher des infos sur ca et lun (type="mouseenter")
*/

let userinput=document.querySelector("[name='username']");
let ageinput=document.querySelector("[name='age']");

/*.forms[0].onsubmit =function(e){
}//comme ca va envoyer les donnes 
*/
document.forms[0].onsubmit = function(e){
    let uservalid= false;
    let agevalid = false;

  //  console.log(userinput.value);
  //  console.log(ageinput.value.length);

if(userinput.value !== "" && userinput.value.length<=10){
   // console.log("valide");
   uservalid =true;}

if(ageinput.value !== "" ){
    agevalid = true;
 }

    if(uservalid === false || agevalid === false ){
        e.preventDefault();
    }

};


document.links[0].onclick =function(event){
    console.log(event);
event.preventDefault();//man3 tasarf event sma mvh hayrouh lgoogle
//ida cht info (type="click"),returnvalue false
}








//#####################################################v