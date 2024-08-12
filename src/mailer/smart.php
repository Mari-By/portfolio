<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверка получения данных
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'Не указано';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : 'Не указано';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : 'Не указано';

    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    // $mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                 // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;           // Enable SMTP authentication
    $mail->Username = 'web.testing.mb@gmail.com';        // Наш логин (эл.почта)
    $mail->Password = 'hges tyju infc wqov';        // Наш пароль от ящика
    $mail->SMTPSecure = 'ssl';     // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;           // TCP port to connect to
    
    $mail->setFrom('web.testing.mb@gmail.com', 'Pulse');   // От кого письмо, указать эл.почту
    $mail->addAddress('mariya.sedna@gmail.com');     // Add a recipient

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Данные';
    $mail->Body    = '
        Пользователь оставил данные <br> 
        Имя: ' . $name . ' <br>
        Номер телефона: ' . $phone . '<br>
        E-mail: ' . $email . '';

    if($mail->send()) {
        echo 'Message has been sent';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
} else {
    echo 'Invalid request method.';
}
?>