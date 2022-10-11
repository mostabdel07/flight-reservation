// Log In Form
const btnSubmit = document.getElementById('btn-submit').addEventListener('click', ajax);


function ajax() {
    // Get inputs values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username);
    console.log(password);
    
        let user = {
            username: username,
            password: password,
            action: 'log-in',
        };
    
       // Object type XMLHttpRequest
        let xhr = new XMLHttpRequest();
        
        // Connection POST method to relative URL 
        xhr.open("POST","../php/server.php");
            
        // Send object objecte user to server (transform to JSON format with function stringify)
        xhr.send(JSON.stringify(user));
        
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

// Create coockie
document.cookie = "username=John Doe; expires=Thu, 30 Dec 2022 12:00:00 UTC; path=/"; 