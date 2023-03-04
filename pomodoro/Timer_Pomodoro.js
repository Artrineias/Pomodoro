"use strcit"

h=0
m=0
s=0

function inicio(){
    if(s==0){
        x = 0
    }
    if(x==0){
        timer = setInterval( () => { tempo() },1000 )
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
function tempo(){
    s++
    if(s==60){
        s=0
        m++
        if(m==60){
            m=0
            h++
        }
    }

    showtimer= (h < 10 ? '0' + h : h) + ":"+ (m < 10 ? '0' + m : m) + ":" + ( s < 10 ? '0' + s : s)

    document.getElementById("saida").innerHTML = showtimer
    
    return showtimer
}
