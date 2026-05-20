// Variável global para saber qual perfil está tentando logar
let perfilAtual = '';

// Função chamada ao clicar em um dos botões de perfil
function selecionarPerfil(perfil, nomeFormatado) {
    perfilAtual = perfil;
    
    // Atualiza o texto do distintivo (badge) no formulário
    document.getElementById('label-perfil-selecionado').innerText = nomeFormatado;
    
    // Esconde a lista de perfis e mostra o formulário de e-mail/senha
    document.getElementById('passo-perfil').classList.add('hidden');
    document.getElementById('passo-formulario').classList.remove('hidden');
}

// Função para o botão "Alterar perfil" caso o usuário clique errado
function voltarParaPerfil() {
    document.getElementById('passo-formulario').classList.add('hidden');
    document.getElementById('passo-perfil').classList.remove('hidden');
}

// Função executada quando o usuário clica em "Entrar no Sistema"
function executarLogin(event) {
    // Evita que a página recarregue sozinha
    event.preventDefault(); 
    
    // Captura os valores digitados tirando os espaços em branco das pontas (.trim())
    const usuario = document.getElementById('input-usuario').value.trim();
    const senha = document.getElementById('input-senha').value;

    // 1. Validação Forte de E-mail (Verifica se tem @ e se termina com algum ponto e letras)
    // Essa Expressão Regular (Regex) valida o formato padrão de e-mails
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(usuario)) {
        alert("⚠️ Por favor, insira um e-mail válido! Exemplo: nome@dominio.com");
        document.getElementById('input-usuario').focus(); // Coloca o cursor de volta no campo
        return; // Para a execução do código aqui se estiver errado
    }

    // 2. Validação de tamanho mínimo da Senha (Segurança básica de faculdade)
    if (senha.length < 6) {
        alert("⚠️ A senha deve conter pelo menos 6 caracteres!");
        document.getElementById('input-senha').focus();
        return; // Para a execução do código
    }

    // Se passou por todas as validações, exibe no console e redireciona
    console.log(`Login válido! Perfil: ${perfilAtual} | Usuário: ${usuario}`);

    // Redirecionamento simulado (Modo de Teste)
    if (perfilAtual === 'admin') {
        window.location.href = './admin.html';
    } else if (perfilAtual === 'professor') {
        window.location.href = './professor.html';
    } else if (perfilAtual === 'aluno') {
        window.location.href = './aluno.html';
    }
}