<?php
header("Access-Control-Allow-Origin: *");
$page_content = file_get_contents("php://input", true);
header('Content-Type: application/json');


file_put_contents( dirname(__FILE__) .'/page-content-data.json', $page_content );
//file_put_contents( '/var/www/gks/public/dist/assets/site-data/page-content-data.json', $page_content );
//file_put_contents( './data/page-content-data.json', $page_content );





/*
//if ( file_exists( dirname(__FILE__) .'/page-content-data.json' ) ) {
    //file_put_contents( dirname(__FILE__) .'/page-content-data.json', $page_content );
        //file_put_contents( '/var/www/gks/public/dist/assets/site-data/page-content-data.json', $page_content );
    //echo 'file does exist: ' . dirname(__FILE__) .'/page-content-data.json';
    //print_r($page_content);
//}

else {
    echo 'no file exists';
    //print_r($page_content);
}*/