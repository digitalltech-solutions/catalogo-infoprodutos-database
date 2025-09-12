/*
BANCO DE DADOS DOS INFOPRODUTOS EM JAVASCRIPT

    1. Dados Aparentes (visíveis ao usuário):
    
        Imagem → Link da Imagem do Produto
        Nome → Inserção Manual
        Preço Atual → Inserção Manual
        Preço Antigo → Inserção Manual
        Valor da Parcela → Inserção Manual
        Preço com Desconto (OFF) → Inserção Manual

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
    {
        id: 1,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-ebooks/comunicacao-oral/capa-ebook-arte-da-comunicacao-oral.png',
        nome: 'Arte da Comunicação Oral',
        preco_atual: '19',
        preco_atual_decimal: ',89',
        preco_antigo: 36.00,
        desconto_off: '40% OFF',
        parcelamento: '2x de R$ 9,94 sem juros',
        cores: 'azul, preto, branco',
        formato: 'pdf, pdfs, .pdf, .pdfs',
        categoria: 'todo, tudo, todos, ebook, ebooks, desenvolvimento pessoal, livro digital, manual eletrônico, crescimento pessoal, motivacional',
        palavras_chave_livro: 'falar em público, apresentação, fala, expressão de discurso técnicas oratória eficaz, linguagem',
        pagina_vendas: 'https://digitalltech-solutions.github.io/landpages-infoprodutos/p%C3%A1ginas-html/ebook-comunicacao-oral.html',
        secao_comentario: 'https://digitalltech-solutions.github.io/landpages-infoprodutos/p%C3%A1ginas-html/ebook-comunicacao-oral.html#comentarios',
        outros: ''
    },
    
    {
        id: 2,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-websites/portfolio-medico-um/mockup-website-portmedico-um.png',
        nome: 'Portfólio Médico Website',
        preco_atual: '49',
        preco_atual_decimal: ',99',
        preco_antigo: 65.00,
        desconto_off: '23% OFF',
        parcelamento: '6x de R$ 8,34 sem juros',
        cores: 'preto, branco, roxo, azul escuro',
        formato: 'html, css, javascript, .html, .css, .javascript, .toml',
        categoria: 'todo, tudo, todos, websites, website, site, sites',
        palavras_chave_livro: 'médico, médica, médicos, médicas, medicina, clínica online, saúde',
        pagina_vendas: 'https://digitalltech-solutions.github.io/landpages-infoprodutos/p%C3%A1ginas-html/portfolio-medico-website.html',
        secao_comentario: 'https://digitalltech-solutions.github.io/landpages-infoprodutos/p%C3%A1ginas-html/portfolio-medico-website.html#comentarios',
        outros: ''
    },

    {
        id: 3,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-ebooks/ebook-disciplina-invencivel/capa-disciplina.png',
        nome: 'O Poder da Disciplina Invencível',
        preco_atual: '17',
        preco_atual_decimal: ',99',
        preco_antigo: 25.00,
        desconto_off: '28% OFF',
        parcelamento: '2x de R$ 9,00 sem juros',
        cores: 'preto, branco, vermelho',
        formato: 'pdf, pdfs, .pdf, .pdfs',
        categoria: 'todo, tudo, todos, desenvolvimento pessoal, livro digital, manual eletrônico, ebook, ebooks, crescimento pessoal, motivacional',
        palavras_chave_livro: 'autocontrole, foco, produtividade, hábitos, rotina, mentalidade vencedora, superação, metas, sucesso, força de vontade, autodisciplina, transformação de vida, mindset, motivação diária, barato',
        pagina_vendas: '',
        secao_comentario: '',
        outros: ''
    },

    {
        id: 4,
        imagem: 'https://digitalltech-solutions.github.io/infoprodutos-imagens/capas-websites/portfolio-advogado-um/mockup-website-portadvogado.png',
        nome: 'Portfólio Website Jurídico',
        preco_atual: '44',
        preco_atual_decimal: ',97',
        preco_antigo: 50.00,
        desconto_off: '10% OFF',
        parcelamento: '6x de R$ 7,50 sem juros',
        cores: '',
        formato: '',
        categoria: 'todo, tudo, todos, websites, website, site, sites',
        palavras_chave_livro: '',
        pagina_vendas: '',
        secao_comentario: '',
        outros: ''
    },
];

const containerPai = document.getElementById('secao-cards-infoprodutos');

// Função para destacar trecho encontrado
function destacarTexto(texto, busca) {
    if (!busca) return texto;
    // Escapa caracteres especiais para evitar erros na regex
    const buscaEscapada = busca.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(buscaEscapada, 'gi');
    return texto.replace(regex, match => `<span style="font-weight:bold; color:#004aad;">${match}</span>`);
}

function renderizarProdutos(produtos, textoBusca = '') {
    containerPai.innerHTML = ''; // Limpa antes de renderizar
    produtos.sort((a, b) => b.id - a.id).forEach(produto => {
        containerPai.innerHTML += `
        <div class="estilo-padrao-cards-infoprodutos elementos-fundo-borda">
            <div>
                <img src="${produto.imagem}" alt="capa-infoprodutos" class="estilo-padrao-capas-imagens">
                <div class="configurar-texto-padrao">
                    <h1 class="estilo-padrao-nome-infoproduto estilo-texto-modo-dark">${destacarTexto(produto.nome, textoBusca)}</h1>
                    <p class="estilo-padrao-texto-parcelamento texto-padrao-dois">${destacarTexto(produto.parcelamento, textoBusca)}</p>
                </div>
                <div class="configurar-divs-laterais-inline">
                    <div>
                        <span class="estilo-preco-off-padrao">
                            <span>
                                <del class="estilo-especifico-padrao-preco-antigo texto-padrao-dois">R$ ${produto.preco_antigo.toFixed(2).replace('.', ',')}</del> 
                                <span class="estilo-padrao-percentual-off texto-padrao-dois">${destacarTexto(produto.desconto_off, textoBusca)}</span> 
                            </span>
                        </span>
                        <span class="configurar-preço-produto estilo-acessibilidade-dislexia estilo-texto-modo-dark"><sub>R$</sub>${destacarTexto(produto.preco_atual, textoBusca)}<sup>${destacarTexto(produto.preco_atual_decimal, textoBusca)}</sup></span>
                        <span class="configurar-avaliacao-padrao">
                            <span>Avaliação</span> <br>
                            <a href="#">
                                <span class="configurar-estrelas-avaliacao">
                                    <span class="material-symbols-outlined texto-padrao-dois">star_rate</span>
                                    <span class="material-symbols-outlined texto-padrao-dois">star_rate</span>
                                    <span class="material-symbols-outlined texto-padrao-dois">star_rate</span>
                                    <span class="material-symbols-outlined texto-padrao-dois">star_rate</span>
                                    <span class="material-symbols-outlined texto-padrao-dois">star_rate_half</span>
                                </span>
                            </a>
                        </span>
                    </div>
                    <div class="configurar-compra-agora">
                        <div id="configurar-icones-interativos">
                            <span class="material-symbols-outlined configurar-icones-padrao estilo-botao-dark-dois" onclick="eventoModalAparente()" title="Marcar como Favorito">favorite</span>
                            <span class="material-symbols-outlined configurar-icones-padrao estilo-botao-dark-dois" onclick="window.location = '${produto.secao_comentario}'" title="Comentar Sobre Esse Infoproduto">chat</span>
                            <span class="material-symbols-outlined configurar-icones-padrao estilo-botao-dark-dois" onclick="eventoModalAparente()" title="Compartilhar">send</span>
                        </div>
                        <a href="${produto.pagina_vendas}" class="configuracao-padra-botao-saiba-mais">
                            <button class='elementos-fundo-borda'>Comprar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

function eventoBarraPesquisa() {
    const textoBusca = document.getElementById('estilo-input-pesquisa').value.toLowerCase().trim();
    const palavrasBusca = textoBusca.split(/\s+/).filter(p => p.length > 0);

    const produtosFiltrados = todosInfoprodutos.filter(produto => {
        const camposParaBuscar = [
            produto.nome,
            produto.preco_atual,
            produto.preco_antigo.toString(),
            produto.desconto_off,
            produto.parcelamento,
            produto.cores,
            produto.formato,
            produto.categoria,
            produto.palavras_chave_livro,
            produto.outros
        ].map(campo => campo.toLowerCase());

        // Verifica se todas as palavras da busca aparecem em pelo menos um dos campos (em qualquer ordem)
        return palavrasBusca.every(palavra => 
            camposParaBuscar.some(campo => campo.includes(palavra))
        );
    });

    renderizarProdutos(produtosFiltrados, textoBusca);

    if(window.document.getElementById('estilo-input-pesquisa').value.length > 0){
        window.document.getElementById('carrossel').style.display = 'none'
    } else {
        window.document.getElementById('carrossel').style.display = 'flex'
    }

    let caixa1 = document.getElementById('caixa-dark');
    let caixa2 = document.getElementById('caixa-dark-dois');

    if(caixa1.checked == true || caixa2.checked == true){
        eventoModoDarkDois();
        eventoModoDark();
    }
}

// Renderiza inicialmente todos os produtos
renderizarProdutos(todosInfoprodutos);

function eventoBarraPesquisaMobile() {
    const textoBusca = document.getElementById('barra-pesquisa-mobile').value.toLowerCase().trim();
    const palavrasBusca = textoBusca.split(/\s+/).filter(p => p.length > 0);

    const produtosFiltrados = todosInfoprodutos.filter(produto => {
        const camposParaBuscar = [
            produto.nome,
            produto.preco_atual,
            produto.preco_antigo.toString(),
            produto.desconto_off,
            produto.parcelamento,
            produto.cores,
            produto.formato,
            produto.categoria,
            produto.palavras_chave_livro,
            produto.outros
        ].map(campo => campo.toLowerCase());

        // Verifica se todas as palavras da busca aparecem em pelo menos um dos campos (em qualquer ordem)
        return palavrasBusca.every(palavra => 
            camposParaBuscar.some(campo => campo.includes(palavra))
        );
    });

    renderizarProdutos(produtosFiltrados, textoBusca);

    let caixa1 = document.getElementById('caixa-dark');
    let caixa2 = document.getElementById('caixa-dark-dois');

    if(caixa1.checked == true || caixa2.checked == true){
        eventoModoDarkDois();
        eventoModoDark();
    }
}

// Renderiza inicialmente todos os produtos
renderizarProdutos(todosInfoprodutos);