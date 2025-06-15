// Este código ya está incluido en el HTML anterior
// Se repite aquí por si quieres separarlo en otro archivo

// Mensajes para las fotos
 const messages = {
        1: "Eres la mujer más hermosa que mis ojos han visto. Cada vez que te veo en esta foto, mi corazón late más fuerte. Tu belleza ilumina mi mundo.",
        2: "Esta foto me quita el aliento... Tu sensualidad natural es irresistible. Eres la combinación perfecta de elegancia y pasión que siempre soñé.",
        3: "Tu sonrisa es mi droga favorita. Podría pasar horas perdido en esa risa que ilumina hasta el día más oscuro. Eres pura alegría."
    };


// Mostrar mensajes
function showMessage(id) {
    alert(messages[id]);
}

// Control de música
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = '🎵 Pausar Música';
    } else {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Activar Música';
    }
});

// Cuestionario
const loveQuiz = document.getElementById('loveQuiz');
const quizResult = document.getElementById('quizResult');
const responseSummary = document.getElementById('responseSummary');

loveQuiz.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const answers = {
        q1: formData.get('q1'),
        q2: formData.get('q2'),
        q3: formData.get('q3'),
        timestamp: new Date().toLocaleString()
    };
    
    // Mostrar resultados
    responseSummary.innerHTML = `
        <p><strong>¿Te gustó?</strong> ${answers.q1}</p>
        <p><strong>¿Qué piensas de mí?</strong> ${answers.q2}</p>
        <p><strong>¿Sientes interés?</strong> ${answers.q3}</p>
        <p><em>Enviado: ${answers.timestamp}</em></p>
    `;
    
    quizResult.style.display = 'block';
    
    // Mostrar en consola para pruebas
    console.log("Respuestas recibidas:", answers);
    
    // Opcional: Guardar en localStorage
    localStorage.setItem('loveQuizAnswers', JSON.stringify(answers));
});