"use strcit"
i= 0
h=0
m=25
s=0
dh=0
dm=25
ds = 0

function inicio(){
    if(h==dh &&m==dm&&s==ds){
        x = 0
    }
    if(x==0){
        timer = setInterval( () => { tempo() },10 )
        x++
    }else{
        clearInterval(timer)
        x--   
    }
}

function para(){
    clearInterval(timer)
    x--
}

function resetar(){
    clearInterval(timer)
    h=0
    m=0
    s=0
    document.getElementById("saida").innerHTML = "00:00:00"
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



    showtimer= (h < 10 ? '0' + h : h) + ":"+ (m < 10 ? '0' + m : m) + ":" + ( s < 10 ? '0' + s : s)

    document.getElementById("saida").innerHTML = showtimer
    
    return showtimer
}

