export const ADICIONAR_FRASE = "ADICIONAR_FRASE"
export const EXCLUIR_FRASE = "EXCLUIR_FRASE"
//a const foi criada só por preferência de estética visual e não é necessária ser criada, podendo ser adicionada diretamente no case.

const reducer = (estado, acao) => {
    //a função tem acesso ao estado e a ação que está sendo feita, somos nós que definimos a ação
    switch (acao.tipo) {
        //cada ação tem um tipo
        case ADICIONAR_FRASE:
            //faz a validação. A frase está dentro da ação agora
            if(acao.frase.length < 20) {
                alert('Ops... you need at least 20 characters!')
                return estado
              }
              //frases virou nosso estado inicial agora
              if (estado.includes(acao.frase)) {
                alert("You can't add a phrase already added")
                return estado
              }
            return [...estado, acao.frase];
        case EXCLUIR_FRASE:
            //vai retornar um filtro das frases, retorna todas as frases que são diferentes da frase escolhida para deletar
            return estado.filter(frase => frase !== acao.frase)
        default:
            return estado
            //por padrão retorna o estado
    }
}

export default reducer;