
function verificar() {
    var msg = document.getElementById("res")
    var agora = new Date()
    var hj = agora.getFullYear()
    var anos =Number(document.getElementById("txtano").value)

    var sex = document.getElementsByName("radsex")
    var genero= " "
    var img = document.createElement("img")
    img.setAttribute("id","foto")

    var idade =Number(hj-anos)

    if(idade == 0 || anos >= hj||anos == 0){
        alert("[ERRO]Verifique os dados e tente novamente!")
    }

    if(sex[0].checked){
        //Homem
        genero = "Homem"
        if(idade>=0&&idade<=12){
            //criança
            img.setAttribute("src","foto-bebe-homem.png")
        }else if(idade<=21){
            //jovem
            img.setAttribute("src","foto-jovem.png")
        }
        else if(idade<=59){
            //adulto
            img.setAttribute("src","foto-adulto-homem.png")
        }else if (idade>59){
            //idoso
            img.setAttribute("src","foto-idoso.png")
        }
    }else if(sex[1].checked){
        //Mulher
        genero = "Mulher"
        if(idade>=0&&idade<=12){
            //criança
            img.setAttribute("src","foto-bebe-mulher.png")
        }else if(idade<=21){
            //jovem
            img.setAttribute("src","foto-jovem-mulher.png")
        }
        else if(idade<=59){
            //adulto
            img.setAttribute("src","foto-adulto-mulher.png")
        }else if (idade>59){
            //idoso
            img.setAttribute("src","foto-idosa.png")
        }
    }
    msg.innerHTML = ("Detectamos " + genero + " com " + idade + " anos.")
   msg.appendChild(img)//iserindo um elemento (img)
}
    function relogio(){
    var relogio = document.getElementById("hora")
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    relogio.innerHTML = (horas +" : " + minutos )
    relogio.style.color=("black")
    }
    relogio()
    