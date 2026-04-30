const db = require('../config/db');

const produtoController = {
    cadastrar: (req, res) => {
        const { nome, categoria, safra, quantidade, preco } = req.body;
        if (Number(quantidade) <= 0 || Number(preco) <= 0) {
            return res.status(400).send(`
                <script>
                    alert('Erro: quantidade e preço não podem ser zero ou negativos.');
                    window.history.back();
                </script>
            `);
        }
        else if (Number(safra) <= 0) {
            return res.status(400).send(`
                <script>
                    alert('Erro: A safra não podem ser negativos.');
                    window.history.back();
                </script>
            `);
        }
       
        const sql = "INSERT INTO produtos (nome, categoria, safra, quantidade, preco) VALUES (?, ?, ?, ?, ?)";
        
        db.query(sql, [nome, categoria, safra || null, quantidade, preco], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).send(`
                        <script>
                            alert('Produto já cadastrado, Tente novamente!');
                            window.history.back();
                        </script>
                    `);
                }
        
                console.error(err);
                return res.status(500).send("Erro ao cadastrar.");
            }
            res.send("<script>alert('Produto cadastrado com sucesso!'); window.location.href='/listar';</script>");
        });
    },

    listarTodos: (req, res) => {
        db.query("SELECT * FROM produtos ORDER BY nome ASC", (err, results) => {
            if (err) {
                console.error("Erro ao listar:", err);
                return res.status(500).json({ error: "Erro ao buscar produtos" });
            }
            res.json(results);
        });
    },

    buscarPorId: (req, res) => {
        db.query("SELECT * FROM produtos WHERE id = ?", [req.params.id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result[0]);
        });
    },

    atualizar: (req, res) => {
        const { nome, categoria, safra, quantidade, preco } = req.body;
        if (Number(quantidade) <= 0 || Number(preco) <= 0) {
            return res.status(400).send(`
                <script>
                    alert('Erro: Quantidade e Preço não podem ser negativos.');
                    window.history.back();
                </script>
            `);
        }
        else if (Number(safra) <= 0) {
            return res.status(400).send(`
                <script>
                    alert('Erro: A safra não podem ser negativos.');
                    window.history.back();
                </script>
            `);
        }
        const sql = "UPDATE produtos SET nome=?, categoria=?, safra=?, quantidade=?, preco=? WHERE id=?";
        
        db.query(sql, [nome, categoria, safra, quantidade, preco, req.params.id], (err, result) => {
            if (err) {
                console.error("Erro ao atualizar:", err);
                return res.status(500).send("Erro ao atualizar produto.");
            }
            res.redirect('/listar'); 
        });
    },

    deletar: (req, res) => {
        db.query("DELETE FROM produtos WHERE id = ?", [req.params.id], (err, result) => {
            if (err) {
                console.error("Erro ao deletar:", err);
                return res.status(500).send("Erro ao deletar produto.");
            }
            res.redirect('/listar'); 
        });
    },

    historicoHoje: (req, res) => {
        const sql = "SELECT * FROM produtos WHERE DATE(data_criacao) = CURDATE() ORDER BY data_criacao DESC";
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    },

    relatorioMensal: (req, res) => {
        const sql = `SELECT * FROM produtos 
                     WHERE MONTH(data_criacao) = MONTH(CURRENT_DATE()) 
                     AND YEAR(data_criacao) = YEAR(CURRENT_DATE())`;
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    }
};

module.exports = produtoController;