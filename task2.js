document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.querySelector('.main-content');
    const welcomeText = "Welcome to Doll Lash Lounge";
    const taglineText = "Where every blink tells a story 🎀";
    
    
    mainContent.classList.add('hidden');

    
    enterButton.addEventListener('click', () => {
        intro.style.transition = 'opacity 1s ease';
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            showTypingEffect(welcomeText, taglineText);
        }, 1000); 
    });

    
    function showTypingEffect(welcomeText, taglineText) {
        mainContent.classList.remove('hidden'); 
        typeText(document.getElementById('welcome-text'), welcomeText, 0, () => {
            typeText(document.getElementById('tagline-text'), taglineText, 0);
        });
    }

    
    function typeText(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text[index];
            element.style.opacity = 1;
            setTimeout(() => typeText(element, text, index + 1, callback), 100);
        } else if (callback) {
            callback();
        }
    }

    
    const layers = document.querySelectorAll('.parallax-layer');

    function fadeInLayers() {
        const scrollTop = window.scrollY + window.innerHeight; 
        layers.forEach(layer => {
            const layerTop = layer.offsetTop;
            if (scrollTop >= layerTop + window.innerHeight / 4) { 
                layer.classList.add('fade-in');
            }
        });
    }

    
    window.addEventListener('scroll', () => {
        fadeInLayers();
        
        const scrollTop = window.scrollY;
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5; 
            layer.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    });
});
