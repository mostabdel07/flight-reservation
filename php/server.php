<?php
    
    //recollim el que ens entra, en aquest cas, des de JavaScript
    $info = file_get_contents('php://input');

   //el que ens vé des de JavaScript ho passem de format JSON 
   //a variable de PHP (mitjançant la funció json_decode)
    $user = json_decode($info);//<-- això seria el que ens vindria des de JavaScript
    //var_dump($info);
    $username = $user->{'username'};//recoges ese valor
    $password = $user->{'password'};
    $rol = $user->{'rol'};
    $action = $user->{'action'};

    $users = ["mostafa" => "mosta123", "alumne" => "alumne"];//<-- això seria una variable array de php
	$rols = ["mostafa" => "gestor", "alumne" => "client"];

    if($action === 'log-in'){
        // Comprobation
       $response = "error";
       if(array_key_exists($username, $users)){
           if($password == $users[$username]){
                $response=$rols[$username];
           }
       }
       echo json_encode($response);

    } else if ($action === 'sign-up') {
        // Crear un array y insertar los datos
        array_push($users, $username, $password);
        array_push($rols, $username, $rol);

        $response = "Registrado";
        echo json_encode($response);
    }

    
	

	
	//enviem aquest vector $ar amb l'echo, però abans passem l'array de format 
	//variable PHP a format JSON (mitjançant la funció json_encode)
