/*função para convertr moedas*/

async function obtemTaxas(moedaOrigem, moedaDestino){
        const url=`http://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
        try{
            const response=await fetch(url)
            const data=await response.json()
            //console.log(data)
            let retorno=data[`${moedaOrigem}${moedaDestino}`].bid
            return retorno
        } catch(error){
            console.log(error)
            return null
        }
}
async function calculaConversao(valor, moedaOrigem, moedaDestino){
    const valorNumerico=parseFloat(valor)
    if (!isNaN(valorNumerico)) {//NaN=Not an Number
        resultado.textContent= "O valor tem que ser um número válido!" //aspas tanto a simples quanto a normal é só para texto
    }
    if (moedaOrigem && moedaDestino && moedaOrigem!== moedaDestino){
        const taxaConversao=await obtemTaxas(moedaOrigem, moedaDestino)
        const valorConvertido=(valorNumerico*taxaConversao).toFixed(2)
        resultado.textContent= `O valor convertido é ${moedaDestino} ${moedaConvertido}` //crase é para texto com string
    } else {
       resultado.textContent= ''
    }

}
const moedaOrigem=document.getElementById('moedaOrigem')
const moedaDestino=document.getElementById('moedaDestino')
const valor=document.getElementById('valor')
const resultado=document.getElementById('resultaddo')

moedaOrigem.addEventListener('change', calculaConversao(valor.value,moedaOrigem.value,moedaDestino.value))
moedaDestino.addEventListener('change', calculaConversao(valor.value,moedaOrigem.value,moedaDestino.value))
valor.addEventListener('input', calculaConversao(valor.value, moedaOrigem.value, moedaDestino.value))