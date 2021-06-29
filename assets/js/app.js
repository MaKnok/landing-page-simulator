

	function currencyFormat(event) {

  		var decimal_value = '';
  		var typed_value = $('#money_vol').val();
  		typed_value = Number(typed_value);

  		decimal_value = 'R$ ' + typed_value
  				.toFixed(2) // always two decimal digits
  				.replace('.', ',') // replace decimal point character with ,
  				.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  
  		console.log(decimal_value);

	}	

	$(document).ready(function($) {

  		var $simulator = $('#money_amount');
  		var $input = $simulator.find("input");

  		$input.on("keyup",function(event){

  			var selection = window.getSelection().toString();
  			if (selection !== ''){
  				return;
  			}

  			if ($.inArray(event.keyCode, [38,40,37,39]) !== -1){
  				return;
  			}

  			var $this = $(this).mask('000.000.000.000.000,00' , { reverse : true});
			  var input = $this.val();
            
           /* var input = input.replace(/[\D\s\._\-]+/g, "");
                    input = input ? parseInt( input, 10 ) : 0;*/

                    $this.val( function() {
                        return ( input === 0 ) ? "" :  input/*input.toLocaleString("pt-BR")*/;
                    } );
        } );
        
        /**
         * ==================================
         * When Simulator Form Submitted
         * ==================================
         */

        var $form_simulator = $('#simulator_form');

        $form_simulator.on( "submit", function( event ) {
            
            var $this = $( this );
            var arr = $this.serializeArray();
        
            for (var i = 0; i < arr.length; i++) {
                    arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
            };
            
            console.log( arr );
            
            event.preventDefault();

            var money_amount = $('#money_vol').val();
            var people_qtd = $('#people_qtd').val();
            var frequency = $("input[name='selector']:checked").val();
            var _form = $(this);
            var _form_contratar = $('.form-contratar');
	          var _display_result = $('.simulator-result', _form);
            var _ps_services = $('.ps-services', _form);
            var _frame_contratar = $('.simulator-card.user-id');

            var _qtd_colaboradores = $('#employee-qtd');
            var _vol_financeiro = $('#money-amount');
            var _frequencia_premiacao = $('#award-frequency');
            var _resultado_final = $('#award-calculation-result');

            var _cards = $('.cards');
            var _benefits = $('#benefits');
      

            money_amount = money_amount.replace(/[\D\s\._\-]+/g, "");
            money_amount = money_amount ? parseInt( money_amount ) : 0;
            var regex =(new RegExp("(.*)\\w{2}"));
            money_amount = regex.exec(money_amount);
            money_amount = money_amount[1];
            money_amount = parseFloat( money_amount );

            //money_amount = money_amount ? parseFloat( money_amount) : 0;


            people_qtd = people_qtd.replace(/[\D\s\._\-]+/g, "");
            people_qtd = parseInt( people_qtd );

            user_result = 30 + parseFloat(money_amount) + parseInt(people_qtd) * 10//card value;
            tax_value = (5/100) * user_result;
            tax_value = tax_value.toFixed(2);
            tax_value = parseFloat(tax_value);
            final_result = parseFloat(user_result) + parseFloat(tax_value)/*.toFixed(2)*/;

            decimal_value_result = 'R$ ' + final_result
  				  .toFixed(2) // always two decimal digits
  				  .replace('.', ',') // replace decimal point character with ,
  				  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

            money_amount_result = 'R$ ' + parseFloat(money_amount)
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

            console.log(user_result);

            _display_result
				    .text(decimal_value_result)
				    .show();

            _ps_services
            .text('* Todos os serviços com NF incluídos - emissão, envio e cargas')
            .show();

            _form_contratar.show();
            _frame_contratar.show();

            _qtd_colaboradores.val(people_qtd);
            _qtd_colaboradores.show();
            $("#employee-qtd").prop("readonly",true);

            _vol_financeiro.val(money_amount_result);
            _vol_financeiro.show();
            $("#money-amount").prop("readonly",true);

            _frequencia_premiacao.val(frequency);
            _frequencia_premiacao.show();
            $("#award-frequency").prop("readonly",true);

            _resultado_final.val(decimal_value_result);
            _resultado_final.show();
            $("award-calculation-result").prop("readonly",true);
            
        });

        var $form_contratar = $('.form-contratar');

        //$form_contratar.on("submit", function(e) {

            //e.preventDefault();

            //$.post('post.php', $(this).serialize(), function(response){
                //$('.notification-popup-sec').html(response);
            //$('.popup-graybox').fadeIn();
            //});

        //});

    });

 






