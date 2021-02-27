let arraycpfdigitado = []
let arraycomcalculoprimeirodigito = []

function capturarcpfdigitado(){
    let cpfdigitado = document.getElementById('txtNumero').value
    montararrayprimeirodigito(cpfdigitado)
}

function montararrayprimeirodigito(cpfdigitado){
    let cpfdigitadoformatado = cpfdigitado.substring(0,9)

    for(let indexfor = 0; indexfor < cpfdigitadoformatado.length; indexfor++){
        arraycpfdigitado.push(cpfdigitadoformatado.substring(indexfor, indexfor + 1))
    }

    multiplicarvaloresdoarray()
}

function multiplicarvaloresdoarray(){
    let valorcalculo = 10
    let valorresultadocalculo = 0

    for(let indexarraydigitado = 0; indexarraydigitado < arraycpfdigitado.length; indexarraydigitado ++){
        valorresultadocalculo = arraycpfdigitado[indexarraydigitado] * valorcalculo
        
        armazenarvalorescalculoarraynovo(valorresultadocalculo)
        valorcalculo --
    }

    somarvalorescomcalculodosdigitos()
}

function armazenarvalorescalculoarraynovo(valorresultadocalculo){

    arraycomcalculoprimeirodigito.push(valorresultadocalculo)
    
}

function somarvalorescomcalculodosdigitos(){
    const resultadosomaarray = arraycomcalculoprimeirodigito.reduce((valortotal, valorcorrente) => valortotal + valorcorrente)
    dividirpor11(resultadosomaarray)
}

function dividirpor11(resultadosomaarray){
    let restodivisao = 0
    restodivisao = resultadosomaarray % 11

    calcularprimeirodigito(restodivisao)
}

function calcularprimeirodigito(restodivisao){

    let valorprimeirodigito = 0

    if(restodivisao < 10)
        valorprimeirodigito = 11 - restodivisao
    
    validarprimeirodigito(valorprimeirodigito)
}

function validarprimeirodigito(validarprimeirodigito){
    let primeirodigitodigitado = document.getElementById('txtNumero').value.substring(9,10)

    if(primeirodigitodigitado == validarprimeirodigito)
        adicionarvalornoarraycpf(validarprimeirodigito)
    else   
        mostrarmensagemcpfinvalido()
}