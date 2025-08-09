/*
BANCO DE DADOS DOS INFOPRODUTOS EM JAVASCRIPT

    1. Dados Aparentes (visíveis ao usuário):
    
        Imagem → Link da Imagem do Produto
        Nome → Inserção Manual
        Preço Atual → Inserção Manual
        Preço Antigo → Inserção Manual
        Valor da Parcela → Gerado por Cálculo Automaticamente
        Preço com Desconto (OFF) → Gerado por Cálculo Automaticamente

    2. Dados Ocultos (uso interno): Estrutura para facilitar os filtros de busca

        Cor → Inserção Manual - Lista
        Coleção → Inserção Manual
        Formato → (Ex.: PDFs, .html)
        Categoria → Inserção Manual - Lista
        Palavras-Chave → Inserção Manual - Lista
        Número de Estrelas → Inserção Manual (Embreve)
        Link da Página de Vendas + Comentário → Inserção Manual
        Outros → Inserção Manual

*/

const todosInfoprodutos = [
    
    // eBook: Arte da Comunicação Oral

    {
        id: 1,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-ebooks/capa-ebook-arte-da-comunicacao-oral.png',
        nome: 'Arte da Comunicação Oral',
        preco_atual: '<sub>R$</sub>17<sup>,99</sup>',
        preco_antigo: 25.00,
        desconto_off: '28% OFF',
        parcelamento: '6x de R$ 2,83 sem juros',

        cores: 'azul, preto, branco',
        colecao: 'azul, preto, branco',
        formato: 'pdf, pdfs, .pdf, .pdfs',
        categoria: 'ebook, ebooks, desenvolvimento pessoal, livro digital, manual eletrônico',
        palavras_chave_livro: 'falar em público, apresentação, fala, expressão de discurso técnicas oratória eficaz, linguagem',
        palavras_chave_ebook: 'livro digital, manual eletrônico, ebook, ebooks',
        pagina_vendas: 'https://sl1nk.com/ebook-comunicacao-oral',
        secao_comentario: 'https://sl1nk.com/ebook-comunicacao-oral#comentario',
        outros: ''
    },

    {
        id: 2,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-ebooks/capa-ebook-arte-da-comunicacao-oral.png',
        nome: 'Arte da Comunicação Oral',
        preco_atual: '<sub>R$</sub>17<sup>,99</sup>',
        preco_antigo: 25.00,
        desconto_off: '28% OFF',
        parcelamento: '6x de R$ 2,83 sem juros',

        cores: 'azul, preto, branco',
        colecao: 'azul, preto, branco',
        formato: 'pdf, pdfs, .pdf, .pdfs',
        categoria: 'ebook, ebooks, desenvolvimento pessoal, livro digital, manual eletrônico',
        palavras_chave_livro: 'falar em público, apresentação, fala, expressão de discurso técnicas oratória eficaz, linguagem',
        palavras_chave_ebook: 'livro digital, manual eletrônico, ebook, ebooks',
        pagina_vendas: 'https://sl1nk.com/ebook-comunicacao-oral',
        secao_comentario: 'https://sl1nk.com/ebook-comunicacao-oral#comentario',
        outros: ''
    }

]

const containerPai = document.getElementById('secao-cards-infoprodutos');

todosInfoprodutos.sort((a, b) => b.id - a.id).forEach(produto => {
    containerPai.innerHTML += `
    <div class="estilo-padrao-cards-infoprodutos">
        <div>
            <img src="${produto.imagem}" alt="capa-infoprodutos" class="estilo-padrao-capas-imagens">
            <div class="configurar-texto-padrao">
                <h1 class="estilo-padrao-nome-infoproduto">${produto.nome}</h1>
                <p class="estilo-padrao-texto-parcelamento">${produto.parcelamento}</p>
            </div>
            <div class="configurar-divs-laterais-inline">
                <div>
                    <span class="configurar-preço-produto">${produto.preco_atual}</span>
                    <span class="estilo-preco-off-padrao">
                        <span>
                            <del class="estilo-especifico-padrao-preco-antigo">R$ ${produto.preco_antigo.toFixed(2).replace('.', ',')}</del> 
                            <span class="estilo-padrao-percentual-off">${produto.desconto_off}</span> 
                        </span>
                    </span>
                    <span class="configurar-avaliacao-padrao">
                        <span>Avaliação</span> <br>
                        <a href="#">
                            <span class="configurar-estrelas-avaliacao">
                                <span class="material-symbols-outlined">star_rate</span>
                                <span class="material-symbols-outlined">star_rate</span>
                                <span class="material-symbols-outlined">star_rate</span>
                                <span class="material-symbols-outlined">star_rate</span>
                                <span class="material-symbols-outlined">star_rate_half</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="configurar-compra-agora">
                    <div id="configurar-icones-interativos">
                        <span class="material-symbols-outlined configurar-icones-padrao" onclick="eventoModalAparente()" title="Marcar como Favorito">favorite</span>
                        <span class="material-symbols-outlined configurar-icones-padrao" onclick="eventoModalAparente()" title="Comentar Sobre Esse Infoproduto">chat</span>
                        <span class="material-symbols-outlined configurar-icones-padrao" onclick="eventoModalAparente()" title="Compartilhar">send</span>
                    </div>
                    <a href="${produto.pagina_vendas}" class="configuracao-padra-botao-saiba-mais">
                        <button>Comprar</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
});

alert('oi')