$(document).ready(function() {
  $("#conversion-form").on('submit', function(e) {

    e.preventDefault();

    var employee_qtd = $('#employee-qtd').val();
    var money_amount = $('#money-amount').val();
    var award_frequency = $('#award-frequency').val();
    var award_calculation_result = $('#award-calculation-result').val();
    var first_name = $('#first-name').val();
    var last_name = $('#last-name').val();
    var role = $('#role').val();
    var cnpj = $('#cnpj').val();
    var company = $('#company').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var phone = $('#phone').val();
    var promotional_code = $('#promotional-code').val();
    

    var dataString = 'employee_qtd=' + employee_qtd + '&money_amount=' + money_amount + '&award_frequency=' + award_frequency +
    '&award_calculation_result=' + award_calculation_result + '&first_name=' + first_name + '&last_name=' + last_name +
    '&role=' + role + '&cnpj=' + cnpj + '&company=' + company + '&email=' + email + '&mobile=' + mobile +
    '&phone=' + phone + '&promotional_code=' + promotional_code;

    $.ajax({
      type: "POST",
      url: "submitForm.php",
      data: dataString,
      success: function(result) {

          alert(result);
          console.log(dataString);
          
      }
    });

    /*var employee_qtd = $('#employee-qtd').val();
    var money_amount = $('#money-amount').val();
    var award_frequency = $('#award-frequency').val();
    var award_calculation_result = $('#award-calculation-result').val();
    var first_name = $('#first-name').val();
    var last_name = $('#last-name').val();
    var role = $('#role').val();
    var cnpj = $('#cnpj').val();
    var company = $('#company').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var phone = $('#phone').val();
    var promotional_code = $('#promotional-code').val();
    var button = $("#button-contratar").val();

    var dataString = 'employee_qtd =' + employee_qtd + '&money_amount =' + money_amount + '&award_frequency =' + award_frequency +
    '&award_calculation_result =' + award_calculation_result + '&first_name =' + first_name + '&last_name =' + last_name +
    '&role  =' + role + '&cnpj  =' + cnpj + '&company  =' + company + '&email  =' + email + '&mobile  =' + mobile +
    '&phone  =' + phone + '&promotional_code  =' + promotional_code + '&button  =' + button;
    

  if (employee_qtd == '' || money_amount == '' || award_frequency == '' || award_calculation_result == '' || first_name == '' || last_name == '' ||
  role == '' || cnpj == '' || company == '' || email == '' || mobile == '' || phone == '' || promotional_code == '') { 
      alert("Preencha todos os campos.");
  }
  // AJAX Code To Submit Form.
  else {
    
    // AJAX Code To Submit Form. 
    $.ajax({
              type: "POST",
              url: "submitForm.php",
              data: dataString,
              cache: false,
              success: function() {
                  $("#conversion-form")[0].reset();      
                  console.log(dataString);
                  alert("Enviado com Sucesso")
                  
              }
    });

  }  
      return false;*/
  });
});