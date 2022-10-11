// Log In Form
const btnSubmit = document.getElementById('btn-submit').addEventListener('click', ajax);


function ajax() {
    // Get inputs values
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;

    // Comprobar que las dos contraseñas son iguales
    const password = document.getElementById('password').value;
    const passwordRepeated = document.getElementById('password-repeated').value;
    
    if(password === passwordRepeated) {

    }   

    // Comprobar cual de los radio buttons esta checkeado
    let isCheckedClient = document.getElementById('client').checked;
    let rol;

    if (isCheckedClient) {
        rol = document.getElementById('client').value;
    } else {
        rol = document.getElementById('gestor').value;
    }

        let newUser = {
            name: name,
            username: username,
            password: password,
            rol: rol,
            action: "sign-up",
        };

        console.log(newUser);
    
       // Object type XMLHttpRequest
        let xhr = new XMLHttpRequest();
        
        // Connection POST method to relative URL 
        xhr.open("POST","../php/server.php");
            
        // Send object objecte user to server (transform to JSON format with function stringify)
        xhr.send(JSON.stringify(newUser));
        
        //quan la sol·licitud està completa, el que fem és:
        xhr.onload = function(){
           
            if (xhr.status != 200) { // analitza l'estado HTTP de la resposta
                
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
            
            } else { // mostra el resultat
                
                //alert(`Se ha registrado correctamente!`); // Resposta del servidor
                let respostaServidor = JSON.parse(xhr.response); //agafem la resposta xhr.response i la passem a format objecte de JavaScript
                console.log(respostaServidor);
                
                document.getElementById("result").innerHTML=respostaServidor;

            }
        }
};