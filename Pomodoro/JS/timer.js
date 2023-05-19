hora = document.getElementsById("hora")
minuto = document.getElementsById("minuto")
segundo = document.getElementsById("segundo")
function iniciar(){  
    h=0
    m=25
    s=0
    timer = setInterval( () => { tempo() },1000 )
    }

function para(){
    clearInterval(timer)
}

function resetar(){
    clearInterval(timer)
    h=0
    m=0
    s=0
    hora.innerHTML = (h < 10 ? '0' + h : h)
    minuto.innerHTML = (m < 10 ? '0' + m : m)
    segundo.innerHTML = ( s < 10 ? '0' + s : s)   
}

function minutos(){
    if(m==0){
        m==59
    }
    else{
        m--
    }
}

function segundos(){
    if(s==0){
        s=59
    }
    else{
        s--
    }    
}

function tempo(){
    if(h>0||m>0||s>0){
        segundos()
        if(s==0){
            minutos()
            if(m==0){
                if(h>0){
                h--
                }
            }
        }
    }
    else{
        clearInterval(timer)
    }
    hora.innerHTML = (h < 10 ? '0' + h : h)
    minuto.innerHTML = (m < 10 ? '0' + m : m)
    segundo.innerHTML = ( s < 10 ? '0' + s : s)   
}

