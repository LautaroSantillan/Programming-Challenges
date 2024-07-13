/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function calcularArea(poligono) {
    switch (poligono.tipo) {
        case 'triangulo':
            return (poligono.base * poligono.altura) / 2;
        case 'cuadrado':
            return poligono.lado * poligono.lado;
        case 'rectangulo':
            return poligono.base * poligono.altura;
        default:
            return null; // Polígono no soportado
    }
}

// Ejemplos de uso

const triangulo = { tipo: 'triangulo', base: 5, altura: 10 };
const cuadrado = { tipo: 'cuadrado', lado: 4 };
const rectangulo = { tipo: 'rectangulo', base: 8, altura: 6 };

console.log(`Área del triángulo: ${calcularArea(triangulo)}`); // 25
console.log(`Área del cuadrado: ${calcularArea(cuadrado)}`); // 16
console.log(`Área del rectángulo: ${calcularArea(rectangulo)}`); // 48

/* 12/7/2024 */