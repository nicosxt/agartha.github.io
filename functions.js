console.log("this js is connectedd");

var allItems = document.getElementsByClassName("showItem");
var sendEmail = document.getElementById("sendEmail");
// function showItem(id) {
//     var e = document.getElementById(id);
//     console.log("toggle item now");
//     e.style.display = 'block';
// }

// function hideItem(id){
//     var e = document.getElementById(id);
//     console.log("hide item now");
//     e.style.display = 'none';
// }

function toggleItem(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }

    for(var i=0; i<allItems.length; i++){
        if(allItems[i].id != id){
            allItems[i].style.display = 'none';
        }
    }
}