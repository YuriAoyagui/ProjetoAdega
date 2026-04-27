async function carregarRelatorio() {
    try {
        const resposta = await fetch('/api/relatorio-mensal');
        const produtos = await resposta.json();
        let totalQtd = 0, totalInvestido = 0;

        const tabela = document.getElementById('tabela-corpo');
        tabela.innerHTML = produtos.map(p => {
            const subtotal = p.quantidade * p.preco;
            totalQtd += p.quantidade;
            totalInvestido += subtotal;
            return `
                <tr>
                    <td>${p.nome}</td>
                    <td>${p.categoria}</td>
                    <td>${p.quantidade}</td>
                    <td>${p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>${subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                </tr>`;
        }).join('');

        document.getElementById('total-itens').innerText = totalQtd;
        document.getElementById('total-valor').innerText = totalInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } catch (erro) {
        console.error("Erro no relatório:", erro);
    }
}
window.onload = carregarRelatorio;