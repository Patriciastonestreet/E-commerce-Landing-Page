

function openTabs(evt, tabName){
   var i, tabContent, openBlinks;
    tabContent = document.getElementsByClassName("tabContent");
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    openBlinks = document.getElementsByClassName("openBlinks");
    for(i = 0; i < openBlinks.length; i++){
        openBlinks[i].className= openBlinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
