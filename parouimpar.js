function parouimpar(){
    let = numero = Number(prompt('Qual o seu número?'))

    if(numero < 0){
        alert('Somente numeros positivos')
        parouimpar()
    }else if(numero % 2 == 0){
        alert('O número é par')
    }else{
        alert('O número é impar')
    }
}
window.onload = parouimpar()