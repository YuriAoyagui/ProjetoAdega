async function carregarProdutos() {
    try {
        const resposta = await fetch('/api/produtos');
        const produtos = await resposta.json();
        const tabela = document.getElementById('tabela-corpo');

        tabela.innerHTML = produtos.map(p => {
            const estiloQuantidade = p.quantidade <= 5 ? 'style="color: #e74c3c; font-weight: bold;"' : '';
            return `
                <tr>
                    <td>${p.nome}</td>
                    <td>${p.categoria}</td>
                    <td>${p.safra || '-'}</td>
                    <td ${estiloQuantidade}>${p.quantidade}</td>
                    <td>${p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>
                        <div class="acoes-container">
                            <a href="/editar?id=${p.id}" class="btn-acao edit" title="Editar"><i class="fas fa-pen"></i></a>
                            <a href="/deletar/${p.id}" class="btn-acao delete" onclick="return confirm('Excluir ${p.nome}?')"><i class="fas fa-trash"></i></a>
                        </div>
                    </td>
                </tr>`;
        }).join('');
    } catch (erro) {
        console.error("Erro ao carregar lista:", erro);
    }
}
window.onload = carregarProdutos;