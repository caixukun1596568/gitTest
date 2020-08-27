<?php
header('content-type:text/html;charset="utf-8"');

$response = array("code"=> 0 ,"msg"=> ""); //创建关联数组

$username = $_POST['username'];
$password = $_POST['password'];
$repassword = $_POST['repassword'];
 
if(!$username){
    $response['code'] =1;
    $response['msg'] = '账号不能空 !';
    echo json_encode($response);
    exit;
  }

  if(!$password){
    $response['code'] =2;
    $response['msg'] = '密码不能为空 !';
    echo json_encode($response);
    exit;
  }
  if($password !=$repassword){
    $response['code'] =3;
    $response['msg'] = '密码不一致 !';
    echo json_encode($response);
    exit;
  }


















?>