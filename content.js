window.addEventListener("load", function page_load(event){
    window.removeEventListener("load", page_load, false);
    chat_load(); 
});

function remove_games() {
    var child = document.getElementsByClassName("_497p _11es");
    var childLength = child.length;
    while(child.length > 0){
        // removes timestamp from chat
        if (child[0].previousSibling.className == "_497p _2lpt") {
            child[0].parentNode.removeChild(child[0].previousSibling);
        }
        // removes goddamn game notifications
        child[0].parentNode.removeChild(child[0]);
    }
}

function chat_load() {
    setInterval(function call() {
        var chat = document.getElementById("js_1");
        if (chat) {
            clearInterval(call);
            remove_games();
            document.getElementById("js_1").addEventListener("change", remove_games);
        }   
    }, 10);
}