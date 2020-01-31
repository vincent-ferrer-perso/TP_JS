//var nbLigne = document.getElementById("nbLigne");

function aparaitre() {
    $('#damier').fadeIn(800).css('display', 'flex');
    $('.p').fadeIn(800);
    $('.i').fadeIn(800);
}

function disparaitre() {
    $('#damier').fadeOut(800).css('display', 'flex');
    $('.p').fadeOut(800);
    $('.i').fadeOut(800);
}

function clignoter() {
    for(i=0;i < 10; ++i) {
        $('.p').fadeOut(250);
        $('.i').fadeOut(250);
        $('#damier').fadeOut(250);
        $('.p').fadeIn(250);
        $('.i').fadeIn(250);
        $('#damier').fadeIn(250).css('display', 'flex');
    }
}

function construire(nbLigne){
    $('#damier div').remove();
    let nbCase = nbLigne*50;
    $('#damier').css('width',nbCase.toString()+'px');
    for (l=0;l<nbLigne;++l){
        if (l%2 == 0){
            for (c = 0; c < nbLigne; ++c){
                if (c%2 == 0) {
                    $("#damier").append('<div class="i" />');
                } else {
                    $("#damier").append('<div class="p" />');
                }
            }
        } else {
            for (c = 0; c < nbLigne; ++c){
                if (c%2 == 0) {
                    $("#damier").append('<div class="p" />');
                } else {
                    $("#damier").append('<div class="i" />');
                }
            }
        }
    }
    aparaitre();
}

(function () {
    $(document).ready(function () {
        console.log("dom pret");
      //  console.log(nbLigne);
    });
})();
