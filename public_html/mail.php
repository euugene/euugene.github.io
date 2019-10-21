<?php

$name = isset($_POST['patient-name']) ? $_POST['patient-name'] : false;

$phone = isset($_POST['phone']) ? $_POST['phone'] : false;

$email = isset($_POST['email']) ? $_POST['email'] : false;

$dob = isset($_POST['dob']) ? $_POST['dob'] : false;

$message = isset($_POST['message']) ? $_POST['message'] : false;

$subject = isset($_POST['subject']) ? $_POST['subject'] : false;

$type = isset($_GET['type']) ? $_GET['type'] : 1;

//$mailSend = 'office@endoferin.com.ua';
$mailSend = 'office@endoferin.com.ua';

if ($type == 1) {
    if ($name && $email && $message) {
        $mes = '<h2>Клиент ' . $name . ' оставил заявку на услугу: '.$subject.'</h2><br>Его данные: <br>E-mail: ' . $email . ' <br>Дата рождения: ' . $dob . '<br>Телефон: ' . $phone . '<br>Комментарий: ' . $message;
        $headers = "Content-type: text/html\r\n";
        if (mail($mailSend, "Новый запрос на Вашем сайте!", $mes, $headers)) {
            echo 'Сообщение успешно отправлено';
        } else {
            echo 'При отправке сообщения произошла ошибка';
        }
        return false;
    }
}
if ($type == 2) {
    if ($email) {
        $mes = '<h2>Клиент ' . $name . ' оставил заявку на подписку </h2><br>Его данные: <br>E-mail: ' . $email;
        $headers = "Content-type: text/html\r\n";
        if (mail($mailSend, "Новый запрос на подписку на Вашем сайте!", $mes, $headers)) {
            echo 'Сообщение успешно отправлено';
        } else {
            echo 'При отправке сообщения произошла ошибка';
        }
        return false;
    }
}


echo 'При отправке сообщения произошла ошибка';
return false;


?>