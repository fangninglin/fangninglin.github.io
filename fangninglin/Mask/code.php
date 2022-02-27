<?php
session_name("pqisess");
session_id();
session_start();
// Create a blank image with a specific width and height
$width = 130;
$height = 30;
$im = imagecreatetruecolor($width, $height);

$transparent=imagecolorallocate($im, 253, 253, 253);
// Fill the image with a specific color, white in this case
imagefilledrectangle($im, 0, 0, $width, $height, $transparent);

// Random generate a 6-digit number and draw it on the image
//$randNum = rand(10000, 99999);

$color = imagecolorallocate($im, mt_rand(250,255), mt_rand(250,255), mt_rand(250,255));
imagefilledrectangle($im, 0, $height, $width, 0, $color);

for ($i = 0; $i < 6; $i++) {
    $color = imagecolorallocate($im, mt_rand(0,156), mt_rand(0,156), mt_rand(0,156));
    imageline($im, mt_rand(0, $width), mt_rand(0, $height), mt_rand(0, $width), mt_rand(0, $height), $color);
}
for ($i = 0; $i < 100; $i++) {
    $color = imagecolorallocate($im, mt_rand(200,255), mt_rand(200,255), mt_rand(200,255));
    imagestring($im, mt_rand(1, 5), mt_rand(0, $width), mt_rand(0, $height), '*', $color);
}

$_x = $width / 5;
$mm = '';
for ($i = 0; $i < 5; $i++) {
    $randNum = rand(1, 9);
    $mm .= $randNum;
    $fontcolor = imagecolorallocate($im, mt_rand(0, 156), mt_rand(0,156), mt_rand(0,156));
    imagettftext($im, 20, mt_rand(-30,30), $_x * $i + mt_rand(1, 5) + 1, $height / 1.4, $fontcolor, 'cambria.ttc', $randNum);
}

header("content-type:image/png");
imagepng($im);
imagedestroy($im);
$_SESSION['pqicode'] = $mm;
exit;