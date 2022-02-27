<?php
date_default_timezone_set('Asia/Taipei');
ini_set('date.timezone','Asia/Taipei');
//ini_set("display_errors", 1);
//error_reporting('all');
#header("content-type:text/html;charset=utf-8");
session_name("pqisess");
session_id();
session_start();

require_once("lib/class.phpmailer.php");
require_once("lib/class.smtp.php");
$r = $_POST;
$err = 0;
$err += count($r) < 1 ? 1 : 0;
$err += !empty($r['gtInfo']) ? 1 : $err;
foreach ($r as $k => $v) {
    if ($k == 'comments' || $k == "gtInfo") {
        continue;
    }
    $err += empty($v) ? 1 : 0;
}
if (empty($r['code']) || empty($_SESSION['pqicode']) || ($r['code'] != $_SESSION['pqicode']) ) {
    $err++;
}
if (
    $err > 0
    ) {
    echo "<html>\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";
    echo "\n<script type='text/javascript'>alert('Required Fields is empty!!');history.back();</script></head>";
    echo "\n</html>";
    exit;
}

$name = 'PQI Computex website';
$webEmail = 'gtwebga@gmail.com';
// $webEmail = 'sales@pqigroup.com';
//$webEmail = 'Teresa.Liu@pqigroup.com';

$mailBody = '<html><body><style> html,body { font-family:"microsoft yahei; arial;" font-size:14px; } </style>';
$mailBody .= '<table width=640px border>';
$mailBody .= '<tr><th align=left>Company Name:</th><td>' . $r['companyName'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Phone No.:</th><td>' . $r['phoneNo'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Company Website:</th><td>' . $r['companyWebsite'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Biz Type:</th><td>' . $r['bizType'] . '</td></tr>';
$mailBody .= '<tr><th align=left>What kind of PQI\'s products are you interested in?</th><td>' . @implode(",", $r['products']) . '</td></tr>';
$mailBody .= '<tr><th align=left>Your Region:</th><td>' . $r['region'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Country:</th><td>' . $r['country'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Name:</th><td>' . $r['name'] . '</td></tr>';
$mailBody .= '<tr><th align=left>E-mail:</th><td>' . $r['email'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Department:</th><td>' . $r['department'] . '</td></tr>';
$mailBody .= '<tr><th align=left>Comments:</th><td>' . $r['comments'] . '</td></tr>';
$mailBody .= '</table>';
$mailBody .= '</body>';
$mailBody .= '</html>';

$mail = new PHPMailer();
$mail->From     = $webEmail;
$mail->FromName = $name;
$mail->Sender   = '';

$mail->isHTML();
$mail->ContentType   = "text/html";
$mail->CharSet   = 'UTF-8';
$mail->Subject   = '[Inquiry notification] Computex 2018';
$mail->AddReplyTo($webEmail, $name);
$mail->Body    = $mailBody;
$mail->AddAddress($webEmail);
$mail->AddCC('e199288@gtmc.com.tw');
$mail->AddBCC('dora199288@gmail.com');
// $mail->AddCC('Teresa.Liu@pqigroup.com');
// $mail->AddBCC('miki@gtmc.com.tw');
// $mail->AddBCC('jeff.wang@gtmc.com.tw');
// $mail->AddBCC('hydra@gtmc.com.tw');
// $mail->AddBCC('katesh@adup.com.tw');
// $mail->AddBCC('vivian_huang@adup.com.tw');
// $mail->AddBCC('whs@manufacture.com.tw');
echo $mail->Send();
$mail->ClearAddresses();
$mail->ClearAttachments();
// echo "<html>\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";
// echo "\n<script type='text/javascript'>alert('Thanks!');history.back();</script></head>";
// echo "\n</html>";
?>