/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
function gcd(a, b) {
    return (b == 0) ? a : gcd(b, a % b);
}

function calculateAspectRatio(width, height) {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
}

window.onload = function() {
    const img = document.getElementById('image');
    img.onload = function() {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        const aspectRatio = calculateAspectRatio(width, height);
        console.log(`Dimensions: ${width}x${height}`);
        console.log(`Aspect Ratio: ${aspectRatio}`);
    }
}

/* 13/7/2024 */