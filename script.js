let display = document.getElementById('display')

function adicionar(num){
    let ultimoCaracter = display.value.charAt(display.value.length - 1)
    let operadores = ['+', '-', '/', '+']

    if(display.value.includes('Error')) {
        display.value = ''
    }

    if(!(operadores.includes(ultimoCaracter) && operadores.includes(num))){
        display.value += num
    }

}

function calcular(){
    try{
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
    }

}

function limparTudo(){
    display.value = ''
}

function apagar(){
    if(display.value.includes('Error')) {
        display.value = ''
    }
    display.value = display.value.slice(0,-1)
}