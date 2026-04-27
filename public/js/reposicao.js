async function carregarReposicao() {
    try {
        const resposta = await fetch('/api/produtos');
        const produtos = await resposta.json();
        const tabela = document.getElementById('tabela-reposicao');

        // Filtra apenas produtos com quantidade <= 5
        const itensCriticos = produtos.filter(p => p.quantidade <= 5);

        if (itensCriticos.length === 0) {
            tabela.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align:center; padding: 40px; color: #27ae60;">
                        <i class="fas fa-check-circle" style="font-size: 1.5rem; display: block; margin-bottom: 10px;"></i>
                        Tudo em dia! Nenhum item precisa de reposição imediata.
                    </td>
                </tr>`;
            return;
        }

        tabela.innerHTML = itensCriticos.map(p => `
            <tr>
                <td>${p.nome}</td>
                <td>${p.categoria}</td>
                <td>${p.safra || '-'}</td>
                <td style="color: #e74c3c; font-weight: bold;">
                    <i class="fas fa-exclamation-triangle"></i> ${p.quantidade}
                </td>
                <td>${p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
        `).join('');
    } catch (erro) {
        console.error("Erro ao carregar reposição:", erro);
        const tabela = document.getElementById('tabela-reposicao');
        tabela.innerHTML = `<tr><td colspan="5" style="text-align:center; color: #e74c3c;">Erro ao conectar com o servidor.</td></tr>`;
    }
}

window.onload = carregarReposicao;