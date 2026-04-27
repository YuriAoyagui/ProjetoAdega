const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (id && id !== 'null') {
    document.getElementById('formEdicao').action = `/atualizar/${id}`;
    fetch(`/api/produtos/${id}`)
        .then(res => res.json())
        .then(p => {
            document.getElementById('nome').value = p.nome;
            document.getElementById('categoria').value = p.categoria;
            document.getElementById('safra').value = p.safra || '';
            document.getElementById('quantidade').value = p.quantidade;
            document.getElementById('preco').value = p.preco;
        })
        .catch(err => console.error("Erro ao carregar:", err));
} else {
    window.location.href = '/listar';
}