const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculadora Básica");

rl.question('Ingresa el primer número: ', (input1) => {
  const num1 = parseFloat(input1);

  rl.question('Ingresa la operación (+, -, *, /): ', (operador) => {
    rl.question('Ingresa el segundo número: ', (input2) => {
      const num2 = parseFloat(input2);

      // Validación de entradas numéricas
      if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Ambos operandos deben ser números válidos.');
        rl.close();
        return;
      }

      let resultado;
      let operacionValida = true;

      switch (operador.trim()) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log('Error: No es posible dividir por cero.');
            operacionValida = false;
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          console.log('Error: Operador no válido. Usa +, -, * o /.');
          operacionValida = false;
          break;
      }

      if (operacionValida) {
        console.log('--------------------------------');
        console.log(`Resultado: ${num1}${operador} ${num2} =${resultado}`);
        console.log('--------------------------------');
      }

      rl.close();
    });
  });
});