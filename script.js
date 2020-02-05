//var nbLigne = document.getElementById("nbLigne");
/*
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

        let css;
        $('#damier div').hover(function(){
            css = $(this).css("background-color")
            $(this).css("background-color", "blue");
        }, function(){
            $(this).css("background-color", css);
        });

    });
})();
*/
/* correction damier */

class Damier {

    constructor(id, ligne) {
        this.ligne = ligne;

        let joueurEnCours = 1;

        let css_cell = {
            'display': 'inline-block',
            'min-width': '30px',
            'min-height': '30px',
            'margin': '0',
            'padding': '0',
            'text-align':'center',
            'line-height':'30px'

        };


        let css_white = {
            'background-color': 'white',
            'color': 'black'
        };

        let css_black = {
            'background-color': 'black',
            'color': 'white'
        };

        let tab = [];

        let css_damier = {
            'width': ligne*30,
            'border':'solid green 10px',
            'margin-left':'auto',
            'margin-right':'auto'
        }

        $('#damier').css(css_damier);
        for (let y=0; y<ligne; y++) {
            let line = $('<div></div>');
            for(let x=0; x<ligne;x++){
                let cell = $('<div>&nbsp;</div>').css(css_cell);
                cell.css((x + y) % 2 ? css_white : css_black);
                cell.data('x',x);
                cell.data('x',y);
                cell.data('statut',false)
                line.append(cell);
                let old_css;
                cell.hover(function(){
                    old_css = $(this).css("background-color")
                    $(this).css("background-color", "brown");
                }, function(){
                    $(this).css("background-color", old_css);
                });

                cell.click(function() {
                    if(!$(this).data('statut')) {
                        if (joueurEnCours == 1) {
                            $(this).html('X');
                            joueurEnCours = 2;
                            console.log("J1 a joué");
                            $('#joueurEnCours').html('Le tour de J2');
                        } else {
                            $(this).html('0');
                            joueurEnCours = 1;
                            console.log("J2 a joué");
                            $('#joueurEnCours').html('Le tour de J1');
                        }
                        $(this).data('statut',true);
                    } else {
                        $('#joueurEnCours').append(" Case impossible");
                    }
                });


            }
            $(id).append(line);
        }
    }
}



(function() {
    $(document).ready( function(){
        new Damier('#damier', 20);
    })
})();