
var utilizadores = new Array();

window.addEventListener("load", function () {
        if (sessionStorage.hasOwnProperty("utilizadores")) {
            utilizadores = JSON.parse(sessionStorage.getItem("utilizadores"))
            console.log(utilizadores);
        }
    })

var submit1 = document.getElementById("sub");
submit1.addEventListener("click", function (event) {
        event.preventDefault();
        email1 = document.getElementById("email_usuario").value
        senha1 = document.getElementById("senha_usuario").value
        nome1 = document.getElementById("Nome").value
     
       saveLogin(nome1,email1,senha1);
       alert("Cadastro efetuado");
       console.log(utilizadores)
       window.location.href= './index.html';

       });

function saveLogin(nome, email, senha){
    if (sessionStorage.hasOwnProperty("utilizadores")) {
        utilizadores = JSON.parse(sessionStorage.getItem("utilizadores"))
      }
      /* Adiciona um novo valor no array criado */
      utilizadores.push(createUser(nome,email,senha));
      /* Salva o item */
      sessionStorage.setItem("utilizadores", JSON.stringify(utilizadores))
      /* Exibe o resultado */
}
    

function login(){
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    var loginUser = utilizadores.map((item, i) => {
        if(email.value == item.email && senha.value == item.senha){
            return{
                    emails: item.email,
                    senhas: item.senha,
                    position: i
            }
        }
    });
    if(loginUser.length==0){
        alert("Usuário não encontrado")
    }

    console.log(loginUser)
    var count= 0;
    for(let i=0; i<loginUser.length; i++){
        if(loginUser[i] != undefined){
            console.log(email.value, loginUser[i].emails, senha.value, loginUser[i].senhas)
            if(email.value == loginUser[i].emails && senha.value == loginUser[i].senhas){
                alert("Sucesso")
            }else{
                alert("E-mail ou senha incorretos.");
            }
        } 
        if (loginUser[i] === undefined){
            count+=1;
        }
        console.log(count)
        if(count== loginUser.length){
            alert("Usuário não encontrado")
        }
    }
}


function createUser(nome_,email_,senha_){
    var user = {
        nome: nome_,
        email: email_,
        senha: senha_
    }
    return user;
}