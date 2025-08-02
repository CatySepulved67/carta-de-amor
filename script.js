let userInput = '';
let bubbleInterval;

function checkName() {
    const nameInput = document.getElementById('name-input').value.trim();
    userInput = nameInput;
    if (nameInput.toLowerCase() === 'amor') {
        alert('¡Has abierto mi corazón, ' + userInput + '!');
        showPage('letter-page');
    } else {
        alert('Por favor, escribe "Amor" para abrir la carta.');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (bubbleInterval) {
        clearInterval(bubbleInterval);
        bubbleInterval = null;
        document.querySelectorAll('.heart, .bubble').forEach(el => el.remove());
    }
}

function showSongPage() {
    showPage('song-page');
}

function showLogin() {
    const audio = document.getElementById('background-audio');
    const loginOverlay = document.getElementById('login-overlay');
    loginOverlay.style.display = 'flex';
    audio.play();
    document.getElementById('romantic-image').style.display = 'block';
    document.getElementById('romantic-phrase').style.display = 'block';
    createHeartsAndBubbles();
}

function createHeartsAndBubbles() {
    const phrases = Array.from(document.querySelectorAll('.love-phrases p')).map(p => p.textContent);
    if (bubbleInterval) clearInterval(bubbleInterval);
    bubbleInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${10 + Math.random() * 4}s`;
        document.body.appendChild(heart);
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${12 + Math.random() * 2}s`;
        document.body.appendChild(bubble);
        setTimeout(() => {
            heart.remove();
            bubble.remove();
        }, 14000);
    }, 1000);
}