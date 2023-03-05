<?php

srand((float)microtime() * 1000000);
$nom = $_GET["nom"];


$data = array();
if ($nom != null) {
    if (strcmp("lacanau", $_GET["nom"]) === 0 or strcmp("toutes", $_GET["nom"]) === 0) {    
        $data[]= ["ville" => "lacanau", "vente" => 400];
    }
    if (strcmp("biarritz", $_GET["nom"]) === 0 or strcmp("toutes", $_GET["nom"]) === 0) {
        $data[]=["ville" => "biarritz", "vente" => 500];
    }
    if (strcmp("nice", $_GET["nom"]) === 0 or strcmp("toutes", $_GET["nom"]) === 0) { 
        $data[]=["ville" => "nice", "vente" => 300];
    }  
    echo json_encode($data);
}
 else {
    echo json_encode("Planche inconnue");
}
?>