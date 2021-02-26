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
}