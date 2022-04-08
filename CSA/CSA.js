function showOverlay(){
    if(document.querySelector('.hamburger').style.zIndex=="-1"){
        document.querySelector('.hamburger').style.zIndex="1";
        document.querySelector('.hamburger').style.visibility="visible";
        document.querySelector('.videoImage').style.zIndex="1";
        document.querySelector('.videoImage').style.transform="translateX(330px)";
        document.querySelector('.bar1').style.transform="rotate(45deg)";
        document.querySelector('.bar2').style.transform="rotate(-45deg)";
        document.querySelector('.bar3').style.transform="rotate(45deg) translate(5px,-9px)";
    }
    else{
        document.querySelector('.hamburger').style.zIndex="-1";
        document.querySelector('.hamburger').style.visibility="hidden";
        document.querySelector('.videoImage').style.zIndex="0";
        document.querySelector('.videoImage').style.transform="translateX(0px)";
        document.querySelector('.bar1').style.transform="rotate(0deg)";
        document.querySelector('.bar2').style.transform="rotate(0deg)";
        document.querySelector('.bar3').style.transform="rotate(0deg) translate(0)";
    }
}

function DisplayProjects(){
    // document.querySelector('.Projects').style.display="block";
}
function DisplayTeams(){

}
function DisplayAboutUs(){

}
function DisplayContactUs(){

}
