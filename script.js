   const textElement = document.getElementById('typewriter');
        const phrases = ['Software Developer', 'Laravel Expert', 'React Developer', 'Python Enthusiast'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2500);
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }

        document.addEventListener('DOMContentLoaded', type);

        // Scroll Reveal
        window.addEventListener('scroll', reveal);

        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                if(revealTop < windowHeight - 150) {
                    el.classList.add('active');
                }
            });
        }