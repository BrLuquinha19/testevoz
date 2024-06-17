// Função para ler a mensagem em voz alta
function speakMessage() {
    // Verifica se o navegador suporta a API de Síntese de Voz
    if ('speechSynthesis' in window) {
        // Obtém a mensagem a ser lida
        const message = document.getElementById('message').textContent;
        
        // Cria um novo objeto SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(message);
        
        // Define o idioma da fala (opcional, mas recomendável)
        utterance.lang = 'pt-BR';
        
        // Usa a síntese de voz para falar a mensagem
        window.speechSynthesis.speak(utterance);
    } else {
        // Se a API não for suportada, exibe um alerta
        alert('Desculpe, seu navegador não suporta a síntese de voz.');
    }
}

// Chama a função speakMessage assim que a página é carregada
window.onload = speakMessage;
