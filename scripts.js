// HEADER & FOOTER
document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error("Error loading footer:", error));
});


// canvas animation
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let waveOffset = 0;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const waveHeight = 30; // Height of the wave
    const waveFrequency = 0.02; // Wave frequency
    const waveSpeed = 0.5; // Wave speed

    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        const y =
            Math.sin(x * waveFrequency + waveOffset) * waveHeight +
            canvas.height / 2;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();

    ctx.fillStyle = 'rgba(0, 123, 255, 0.4)'; // Color of the wave
    ctx.fill();

    waveOffset += waveSpeed * 0.05;
    requestAnimationFrame(drawWave);
}

drawWave();
