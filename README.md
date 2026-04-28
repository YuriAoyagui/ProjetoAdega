# Projeto Adega

## 🍷 Nome e descrição
O **Projeto Adega** é um sistema web desenvolvido para o gerenciamento de estoque de uma adega.

Seu principal objetivo é facilitar o controle de entradas, saídas e acompanhamento dos produtos armazenados, oferecendo uma visão clara do estoque atual e de indicadores mensais para apoio na tomada de decisão.

O sistema foi criado pensando no **proprietário da adega**, priorizando simplicidade, rapidez e organização operacional.

## 🛠️ Tecnologias usadas
A stack completa utilizada neste projeto inclui:
### Back-end
- Node.js
- Express.js
- MySQL
- mysql2
- .env

### Front-end
- HTML5
- CSS3
- JavaScript

### Versionamento
- Git
- GitHub

### Arquitetura
- Monolito modular

## 📌 Pré-requisitos
Antes de iniciar o projeto, certifique-se de que possui instalado:

- **Node.js** (versão LTS recomendada)
- **npm** (instalado junto com Node.js)
- **MySQL Workbench**
- **Visual Studio Code** (recomendado)
- Navegador atualizado (Google Chrome, Microsoft Edge ou FireFox)

### Verificar se o Node.js e npm está instalado

Abra o **terminal** e execute:

```bash
node -v


npm -v
```

## ⚙️ Como instalar
Siga os passos abaixo para configurar o projeto na sua máquina:
1. Clone o repositório para a pasta do seu servidor local:
   ```bash
   git clone https://github.com/YuriAoyagui/ProjetoAdega.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd ProjetoAdega
   ```
3. Instale todas as dependências
   ```bash
   npm install
   ```
    Se o terminal der erro de "scripts desabilitados", use:
    ```bash
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
    ```
    Faça novamente o **npm install**

4. Configurar o banco de dados MySQL
   Abra o MySQL Workbench e execute os passos abaixo.
   **Importar o arquivo SQL**
   - Vá em Server > Data Import
   - Selecione Import from Self-Contained File
   - Escolha o arquivo:
   ```
      database/banco.sql
   ```
   - Clique em Start Import

## ▶️ Como executar
Antes de executar o projeto, configure o arquivo .env.exemplo de acordo com as informações do seu banco.
```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```
No final, renomeie o arquivo para .env (este será o definitivo)

Abra o **terminal** e execute:
```bash
node server.js
```
Se tudo estiver correto, aparecerá:
```bash
Servidor rodando em http://localhost:3000
Conectado ao banco de dados MySQL
```
Depois acesse no navegador:
**http://localhost:3000**

## 📜 Scripts disponíveis
```bash
   npm install      # Instala as dependências do projeto
   node server.js   # Inicia o servidor
```

## 📁 Estrutura de pastas

```text
```bash
ProjetoAdega/
│── database/                  # Arquivos relacionados ao banco de dados
│   └── banco.sql                
│
│── public/                    # Arquivos públicos acessados pelo navegador
│   ├── css/                   # Folhas de estilo do sistema
│   │   ├── cadastro.css        
│   │   ├── edit.css            
│   │   ├── listar.css          
│   │   ├── relatorio.css      
│   │   └── style.css          
│   │
│   └── js/                    # Scripts front-end
│       ├── edit.js            
│       ├── historico.js        
│       ├── listar.js          
│       ├── relatorio.js        
│       └── reposicao.js        
│
│── src/                       # Código principal da aplicação
│   ├── config/                # Configurações do banco de dados
│   │   └── db.js            
│   │
│   ├── controllers/           # Regras de negócio
│   │   └── produtoController.js
│   │
│   ├── routes/                # Rotas da API
│   │   └── produtoRoutes.js
│   │
│   └── views/                 # Telas HTML do sistema
│       ├── cadastro.html
│       ├── edit.html
│       ├── historico.html
│       ├── index.html
│       ├── listar.html
│       ├── relatorio.html
│       └── reposicao.html
|
│── .env.exemplo              # Arquivo de configuração do banco
│── .gitignore                # Arquivos ignorados pelo Git
│── package-lock.json         # Controle de versões das dependências
│── package.json              # Dependências e scripts npm
│── README.md                 # Documentação do projeto
│── server.js                 # Arquivo principal do servidor
```

## 🤝 Como Contribuir
- ## Crie uma Branch
```bash
git checkout -b nome-da-branch
```
- ## Adicione as alterações feitas
```bash
    git add .
```
- ## Faça o Commit
```bash
    git commit -m "feat: descrição da alteração"
```
- ## Envie para o GitHub
```bash
    git push origin nome-da-branch
```
- ## Realize o Pull Request (passo a passo)
1. Abrir Pull Request no GitHub
2. Solicitar revisão
3. Aprovação da equipe
4. Merge para main
5. Delete a branch

- ## Regras de commit
```bash
   feat: nova funcionalidade
   fix: correção de erro
   docs: documentação
   refactor: melhoria interna
   test: adição de testes
   chores: manutenção geral
```

## 📄 Licença e Autores
Projeto acadêmico desenvolvido para fins educacionais
## Autores
- Yuri Aoyagui
- Gabriel Lima
- Guilherme Lopes
## Licença
Uso acadêmico e interno