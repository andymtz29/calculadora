const calcular = () => {
    const input = document.getElementById('num').value;
    const numeros = input.split(',').map(Number);
    
    // Calcular la media
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    const media = suma / numeros.length;
    document.getElementById('resultado-media').innerText = 'La media es: ' + media.toFixed(2);


    let moda = [];
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let apariciones = 0;
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[j] === num) {
                apariciones++;
            }
        }
        if (apariciones > 1 && moda.indexOf(num) === -1) {
            moda.push(num);
        }
    }
    document.getElementById('resultado-moda').innerText = moda.length === 0 ? 'No hay moda' : 'La moda es: ' + moda.join(', ');

    // Calcular la mediana
    numeros.sort((a, b) => a - b);
    const mediana = numeros.length % 2 === 0 ? (numeros[numeros.length / 2 - 1] + numeros[numeros.length / 2]) / 2 : numeros[Math.floor(numeros.length / 2)];
    
    document.getElementById('resultado-mediana').innerText = 'La mediana es: ' + mediana;
}
