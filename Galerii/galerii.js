var angle = 0;
/* JavaScript
Järgmine funktsioon kontrollib nuppu vajutust
Kui vasak nupp on vajutatud, siis töötab else tingimus ning lahutame muutujast "angle" 45 kraadi,
selleks, et pöörata vasakule pildile
Kui parem nupp on vajutatud, siis töötab if tingimus ning liidame muutujale "angle" 45 kraadi,
selleks, et pöörata paremale pildile
Pärast funktsioon leiab muutujat id-ga "spinner" ja annab atribuuti "transform: rotateY("angle"deg);" */
function galleryspin(sign) { 
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}        