(function(){
    "use strict";

    var $hamburguer = document.getElementById("hamburguer");
    var $menu = document.getElementById("mainMenu");
    $hamburguer.addEventListener("click", showMenu);

    function showMenu(){
        $hamburguer.classList.toggle("hide");
        $menu.classList.toggle("show");
    }
})();