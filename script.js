// Seleciona o botão de alternância de tema
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Define o tema padrão como 'dark' se não estiver definido
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

// Função para atualizar o ícone do botão
function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';  // Sol quando está escuro
    } else {
        themeIcon.textContent = '🌙';  // Lua quando está claro
    }
}

// Adiciona evento de clique ao botão
themeToggle.addEventListener('click', () => {
    // Obtém o tema atual
    const actualTheme = html.getAttribute('data-theme');
    // Define o novo tema
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';
    
    // Atualiza o atributo HTML
    html.setAttribute('data-theme', newTheme);
    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);
    // Atualiza o ícone
    updateIcon(newTheme);
});
