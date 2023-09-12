async function obtemEndereço(cep){
        const url=`http://viacep.com.br/ws/${cep}/json`
        try{
            const response=await fetch(url)
            const data=await response.json()
            console.log(data)
             }
}
const logradouro=document.getElementById('logradouro')
const bairro=document.getElementById('bairro')
const estado=document.getElementById('estado')

