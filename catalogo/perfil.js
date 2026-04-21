// Função para obter parâmetros da URL
function getUrlParams() {
    /* Cria um objeto URLSearchParams com a string de busca da URL */
    const params = new URLSearchParams(window.location.search);
    /* Retorna um objeto com os parâmetros */
    return {
        perfil: params.get('perfil'),
        foto: params.get('foto')
    };
}

// Função para carregar e exibir informações do perfil
function carregarPerfil() {
    /* Obtém os parâmetros da URL */
    const { perfil, foto } = getUrlParams();
    
    // Se houver parâmetros, atualiza a exibição
    if (perfil) {
        /* Atualiza o nome do perfil na navegação */
        document.getElementById('perfil-nome').textContent = perfil;
    }
    
    if (foto) {
        /* Atualiza a foto do perfil na navegação */
        const fotoElement = document.getElementById('perfil-foto');
        // Corrige o caminho relativo (adiciona ../ para voltar um nível de diretório)
        fotoElement.src = foto.startsWith('http') ? foto : '../' + foto;
        fotoElement.alt = `Foto de perfil de ${perfil}`;
    }
}

// Executa a função quando a página carrega
document.addEventListener('DOMContentLoaded', carregarPerfil);
