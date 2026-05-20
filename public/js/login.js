// Função que simula o redirecionamento com base no perfil clicado
function definirPerfil(perfil) {
    if (perfil === 'admin') {
        window.location.href = './admin.html';
    } else if (perfil === 'professor') {
        window.location.href = './professor.html';
    } else if (perfil === 'aluno') {
        window.location.href = './aluno.html';
    }
}