function filtraOcorrencias (paragrafo){
    return Object.keys(paragrafo).filter(chave  => paragrafo[chave] >1)
}

function montaSaida(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras duplicadas no Parágrafo ${indice +1}: ${duplicadas} \n`
    })
    return textoFinal;
}

export { montaSaida }