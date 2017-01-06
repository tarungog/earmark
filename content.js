// content.js
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    alert("The window has loaded");
    page_load(); 
});

function remove_games() {
    var parent = document.getElementById("js_1");
    var child = document.getElementsByClassName("_497p _11es");
    var childLength = child.length;
    while(child.length > 0){
        parent.removeChild(child[0]);
    }
}

function page_load() {
    alert("Yo this extension is working af");
    setInterval(function call() {
        var chat = document.getElementById("js_1");
        if (chat) {
            clearInterval(call);
            remove_games();
            document.getElementById("js_1").addEventListener("change", remove_games);
        }   
    }, 10);
}