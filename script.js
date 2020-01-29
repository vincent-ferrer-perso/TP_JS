(function () {
   $(document).ready(function () {
       console.log("dom pret");
       $('.p').fadeIn(500);
       $('.i').fadeIn(500);

       $('.p').append(
           $('.i').css('display', 'flex')
       )
       $('.i').fadeIn(500);
       /*
       for(i=0;i < 10; ++i) {
            $(".p").fadeOut(50);
            $(".i").fadeOut(50);
            $(".p").fadeIn(50);
            $(".i").fadeIn(50);
       }
       */



   });
})();
