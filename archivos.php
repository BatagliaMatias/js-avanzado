<?php

foreach($_FILES as $archivo){
    move_uploaded_file($archivo["tmp_name"],$archivo["name"]);
}

?>