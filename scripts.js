document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = [
        'https://i.ibb.co/nmgd8gX/imagen1.png',
        
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Imagen especial';
        img.classList.add('w-full', 'h-auto', 'rounded-lg', 'shadow-md');
        gallery.appendChild(img);
    });

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(error => {
        console.log('Error al reproducir música de fondo:', error);
    });

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const specialMessage = document.createElement('div');
    specialMessage.id = 'specialMessage';
    specialMessage.innerHTML = '<p>Sabía que ibas a decir que sí 😎</p>';
    document.body.appendChild(specialMessage);

    yesButton.addEventListener('click', () => {
        specialMessage.style.display = 'block';
    });

    noButton.addEventListener('mouseover', () => {
        const container = document.querySelector('.noButtonContainer');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const randomX = Math.random() * (containerRect.width - buttonRect.width);
        const randomY = Math.random() * (containerRect.height - buttonRect.height);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    const soundHover = new Audio('audio/mp3/hover-sound.mp3');
    const soundClick = new Audio('audio/mp3/click-sound.mp3');

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            soundHover.play().catch(error => {
                console.log('Error al reproducir sonido de hover:', error);
            });
        });

        button.addEventListener('click', () => {
            soundClick.play().catch(error => {
                console.log('Error al reproducir sonido de click:', error);
            });
        });
    });
});
