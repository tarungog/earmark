// content.js

function remove_games() 
{
    var parent = document.getElementById("js_1");
    var child = document.getElementsByClassName("_497p _11es");
    var childLength = child.length;
    while(child.length > 0){
        parent.removeChild(child[0]);
    }
}

document.getElementById("js_1").onchange  = remove_games;
window.onload = removeChild;