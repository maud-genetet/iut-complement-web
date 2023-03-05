<?php
$id=$_GET["fruits"];

if ($id=="pomme"){
	$arr = array ("name"=>"pomme","category"=>"fruit", "vitamine"=>"10");
	echo json_encode($arr);
}
else if ($id=="poireau"){
	$arr = array ("name"=>"poireau","category"=>"legume","vitamine"=>"20");
	 echo json_encode($arr);
}

else if ($id=="courgette"){
	$arr = array ("name"=>"courgette","category"=>"legume","vitamine"=>"10");
	 echo json_encode($arr);
}

else if ($id=="cerise"){
	$arr = array ("name"=>"cerise","category"=>"fruit","vitamine"=>"40");
	 echo json_encode($arr);
}

?>