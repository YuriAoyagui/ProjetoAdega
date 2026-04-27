async function carregarHistorico() {
    try {
        const resposta = await fetch('/api/historico-hoje'); 
        const produtos = await resposta.json();
        const tabela = document.getElementById('tabela-historico');

        if (produtos.length === 0) {
            tabela.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align:center; padding: 40px; color: #888;">
                        📅 Nenhuma entrada registrada hoje.
                    </td>
                </tr>`;
            return;
        }

        tabela.innerHTML = produtos.map(p => `
            <tr>
                <td>${p.nome}</td>
                <td>${p.categoria}</td>
                <td>${p.safra || '-'}</td>
                <td>${p.quantidade}</td>
                <td>${p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
        `).join('');
    } catch (erro) {
        console.error("Erro ao carregar histórico:", erro);
        const tabela = document.getElementById('tabela-historico');
        tabela.innerHTML = `<tr><td colspan="5" style="text-align:center; color: #e74c3c;">Erro de conexão.</td></tr>`;
    }
}

window.onload = carregarHistorico;