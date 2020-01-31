(function () {
    $(document).ready(function () {
        console.log("dom pret");

        for (l=0;l<10;++l){
            if (l%2 == 0){
                for (c = 0; c < 10; ++c){
                    if (c%2 == 0) {
                        $("#damier").append('<div class="i" />');
                    } else {
                        $("#damier").append('<div class="p" />');
                    }
                }
            } else {
                for (c = 0; c < 10; ++c){
                    if (c%2 == 0) {
                        $("#damier").append('<div class="p" />');
                    } else {
                        $("#damier").append('<div class="i" />');
                    }
                }
            }
        }
        $('#damier').fadeIn(800).css('display', 'flex');
        $('.p').fadeIn(800);
        $('.i').fadeIn(800);


        /* clignotement
        for(i=0;i < 10; ++i) {
            $('.p').fadeOut(250);
            $('.i').fadeOut(250);
            $('#damier').fadeOut(250);
            $('.p').fadeIn(250);
            $('.i').fadeIn(250);
            $('#damier').fadeIn(250).css('display', 'flex');
        }*/

    });
})();
