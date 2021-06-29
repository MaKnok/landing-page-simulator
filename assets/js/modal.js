$(document).ready(function(){

  var $button_voltar = $('.ebook-input-btn2');

  	$button_voltar.on("click", function(event) {

    		$(".popup-graybox").fadeOut();

        $("#simulator_form").trigger("reset");
        $("#contract_form").hide();
        $(".simulator-result").hide();
        $(".simulator-card.user-id").hide();
        //$(".cards").css('height','950px');
        //$('#benefits').css('height','1640px');

    });

    $button_close = $('.ebook-cls-btn.close-btn');

    $button_close.on("click", function(event) {

    		$(".popup-graybox").fadeOut();

        $("#simulator_form").trigger("reset");
        $("#contract_form").hide();
        $(".simulator-result").hide();
        $(".simulator-card.user-id").hide();
        //$(".cards").css('height','950px');
        //$('#benefits').css('height','1640px');

    });

});