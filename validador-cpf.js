let arraycpfdigitado = []
let arraycomcalculoprimeirodigito = []
let arraycomcalculosegundodigito = []

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

function adicionarvalornoarraycpf(validarprimeirodigito){
    arraycpfdigitado.push(validarprimeirodigito);
    multiplicarvaloresdoarraySegundoDigito()
}

function mostrarmensagemcpfinvalido(){
    alert('CPF digito é inválido!!')
}

function multiplicarvaloresdoarraySegundoDigito(){
    let valorcalculo = 11
    let valorresultadocalculo = 0

    for(let indexarraydigitado = 0; indexarraydigitado < arraycpfdigitado.length; indexarraydigitado ++){
        valorresultadocalculo = arraycpfdigitado[indexarraydigitado] * valorcalculo
        
        armazenarvalorescalculoarraysegundodigito(valorresultadocalculo)
        valorcalculo --
    }

    somarvalorescomcalculodosegundodigito()
}

function armazenarvalorescalculoarraysegundodigito(valorresultadocalculo){

    arraycomcalculosegundodigito.push(valorresultadocalculo)
    
}

function somarvalorescomcalculodosegundodigito(){
    const resultadosomaarray = arraycomcalculosegundodigito.reduce((valortotal, valorcorrente) => valortotal + valorcorrente)
    dividirpor11segundodigito(resultadosomaarray)
}

function dividirpor11segundodigito(resultadosomaarray){

    let resultadosegundodigito = 0

    resultadosegundodigito = resultadosomaarray * 10 % 11

    validarsegundodigito(resultadosegundodigito)
}