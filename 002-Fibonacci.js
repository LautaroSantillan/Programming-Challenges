/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }

    return fib;
}

const primeros50Fibonacci = fibonacci(50);
console.log(primeros50Fibonacci.join(', ')); // Imprime los 50 primeros números de la sucesión de Fibonacci

/* 9/7/2024 */ 