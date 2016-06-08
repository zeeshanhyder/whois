var hideThis = function(){
    var $elem = document.querySelector(".message-hey");
    var $wrapper = document.querySelector(".wrapper");
    
    $elem.className+=" hidden";
    $wrapper.className+=" fade-in";
}