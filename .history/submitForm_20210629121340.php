<?php

use PHPMailer\PHPMailer\PHPMailer;

require('mail/phpmailer/src/Exception.php');
require('mail/phpmailer/src/PHPMailer.php');
require('mail/phpmailer/src/SMTP.php');

if (
  !empty($_POST['employee_qtd']) && !empty($_POST['money_amount']) && !empty($_POST['award_frequency']) && !empty($_POST['award_calculation_result'])
  && !empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['role']) && !empty($_POST['cnpj']) && !empty($_POST['company'])
  && !empty($_POST['email']) && !empty($_POST['mobile']) && !empty($_POST['phone']) && !empty($_POST['promotional_code'])
) {

  # Sender Data
  $employee_qtd = $_POST['employee_qtd'];
  $money_amount = $_POST['money_amount'];
  $award_frequency = $_POST['award_frequency'];
  $award_calculation_result = $_POST['award_calculation_result'];
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $role = $_POST['role'];
  $cnpj = $_POST['cnpj'];
  $company = $_POST['company'];
  $email = $_POST["email"];
  $mobile = $_POST['mobile'];
  $phone = $_POST['phone'];
  $promotional_code = $_POST['promotional_code'];

  $mail = new PHPMailer;

  $mail->isSMTP();
  $mail->SMTPDebug  = 1;
  $mail->Username = "***********"; // Replace with your mail id
  $mail->Password = "***********"; //Replace with your mail pass
  $mail->SMTPAuth = true;  // authentication enabled
  $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
  $mail->SMTPAutoTLS = false;
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;


  //Recipients
  $mail->setFrom('desbloqueio.epp@gmail.com', 'Multiplicador');
  $mail->addAddress('manuelgomes@alfacomrj.com', 'Manuel');  //add to email  
  $mail->addAddress('marinaknok@elementprepagos.com.br', 'Marina');  //add to email  
  $mail->addReplyTo('manuelgomes@alfacomrj.com', 'Manuel');  //add replay to email

  $mail->isHTML(true);
  $mail->Subject = $first_name . ' entrou em contato pelo Multiplicador';

  $mail->Body =
    '<h2>Informações do Contato</h2>
                     <h4>Quantidade de Colaboradores: ' . $employee_qtd . '</h4>
                     <h4>Volume Financeiro: ' . $money_amount . '</h4>
                     <h4>Frequência de Premiação: ' . $award_frequency . '</h4>
                     <h4>Resultado do Cálculo da Premiação: ' . $award_calculation_result . '</h4>
                     <h4>Nome: ' . $first_name . '</h4>
                     <h4>Sobrenome: ' . $last_name . '</h4>
                     <h4>Cargo: ' . $role . '</h4>
                     <h4>CNPJ: ' . $cnpj . '</h4>
                     <h4>Empresa: ' . $company . '</h4>
                     <h4>E-mail: ' . $email . '</h4>
                     <h4>Celular: ' . $mobile . '</h4>
                     <h4>Telefone: ' . $phone . '</h4>
                     <h4>Código Promocional: ' . $promotional_code . '</h4>
                    ';
  //Info Message
  if (!$mail->send()) {
    $error = "Houve um erro: " . $mail->ErrorInfo;
    echo $error;
  } else {
    echo 'Obrigado! Mensagem enviada com sucesso';
  }
} else {
  echo 'Insira dados válidos';
}
