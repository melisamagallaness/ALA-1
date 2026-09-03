"# ALA-1-PARTE-2"
Ejercicio 1
Ejercicio 1 - Parte A
Análisis de JavaScript (acotado al Paradigma Estructurado) según los cuatro componentes de Thomas Kuhn:

1. Generalizaciones simbólicas (¿Cuáles son las reglas escritas del lenguaje?)
Son las reglas de sintaxis obligatorias que exige JavaScript para que la computadora entienda el código:

Las variables: El uso obligatorio de las palabras reservadas let y const para almacenar datos.
Corchetes: Abrir y cerrar bloques, bucles, funciones.
Los bloques: El uso de llaves { } para agrupar instrucciones lógicas.
Control de Flujo ->El flujo lógico: Las reglas exactas para escribir condicionales (if, else, switch) y ciclos de repetición (for, while).
La secuencia: La regla de que el programa siempre se lee y ejecuta paso a paso, de arriba hacia abajo.
LLAVES para abrir y cerrar un bloque
Intrucciones se leen de arriba - abajo

2. Creencias de los profesionales (¿Qué características se creen "mejores" que en otros lenguajes?)

Son los motivos prácticos por los que los programadores eligen JavaScript y lo defienden frente a otros lenguajes (como C o Java):

Tipado dinámico: Creen que no obligar al programador a declarar si una variable es número o texto permite escribir programas de manera mucho más rápida.
Es el idioma de la Web: Creen que es superior porque es el único lenguaje que funciona de forma natural en cualquier navegador de internet del mundo, sin instalar nada extra.

3. Valores (Lo que la comunidad considera más importante)
Es la filosofía de los usuarios del lenguaje:
Accesibilidad total: Valoran que para empezar a programar solo hace falta un bloc de notas y un navegador web, logrando una barrera de entrada muy baja para principiantes.
Portabilidad: Valoran que el mismo conocimiento sirva para hacer páginas web, aplicaciones de celular o servidores.

4. Ejemplares (Los problemas a ser resueltos con sus soluciones modelo)
Son los ejemplos típicos y algoritmos clásicos con los que todo el mundo aprende a programar en JavaScript estructurado:

Validaciones: Usar un if/else para chequear si un usuario es mayor de edad antes de permitirle el ingreso a un sitio.
Recorridos: Usar un ciclo for o while para sumar las notas de un estudiante y calcular su promedio final de forma repetitiva y controlada.

Ejercicio 1 - Parte B
Análisis de JavaScript (acotado al Paradigma Estructurado) según los criterios para elegir un lenguaje de programación:

1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?
Sí. JavaScript tiene reglas muy claras estandarizadas bajo el nombre de ECMAScript. Existe documentación oficial y sumamente detallada, siendo MDN Web Docs (de Mozilla) la guía de referencia principal y más utilizada por toda la comunidad.

2. ¿Es posible comprobar el código producido en ese lenguaje?
Sí. Al ser un lenguaje interpretado, el código se puede probar casi al instante ejecutándolo en cualquier navegador web o en entornos como Node.js. Si hay errores de sintaxis o lógica, la consola del navegador los reporta de inmediato, lo que facilita encontrar y corregir fallas.

3. ¿Es confiable?
Es medianamente confiable. Por un lado, maneja bien los errores (por ejemplo, con bloques try/catch para que el programa no se caiga por completo). Sin embargo, como tiene tipado dinámico, es muy común que ocurran errores sorpresa mientras el programa está funcionando (por ejemplo, sumar un número con un texto y obtener resultados inesperados) que en otros lenguajes más estrictos se detectarían antes. Depende del desarrollador.

4. ¿Es ortogonal?
No es muy ortogonal. La ortogonalidad significa que hay pocas reglas y que funcionan igual en todas partes sin excepciones. JavaScript está lleno de casos especiales y combinaciones extrañas que el programador debe memorizar (por ejemplo, la diferencia entre comparar con == o con ===, o los comportamientos curiosos del lenguaje al mezclar diferentes tipos de datos).

5. ¿Cuáles son sus características de consistencia y uniformidad?
Tiene una uniformidad básica (como terminar las instrucciones con ; o agrupar bloques con { }), pero históricamente sufre de algunas inconsistencias. Por ejemplo, la forma de evaluar ciertos datos nulos o vacíos a veces da resultados poco lógicos. Aunque las versiones modernas han mejorado mucho esto, todavía arrastra "rarezas" de sus primeras versiones.

6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?
Es extensible: Sí, de forma masiva. Se puede extender utilizando librerías y módulos externos para hacer casi cualquier cosa.
Tiene subconjuntos: Sí. El más famoso dentro del mismo lenguaje es el "Strict Mode" (modo estricto), que prohíbe usar partes antiguas y problemáticas de JavaScript. También existen lenguajes derivados que funcionan como subconjuntos más estrictos, como TypeScript.

7. El código producido, ¿es transportable?
Sí, es su característica estrella. Un programa escrito en JavaScript estándar es 100% transportable. El mismo código funciona idénticamente en una computadora con Windows, una Mac, un celular, o cualquier navegador web (Chrome, Firefox, Safari) sin necesidad de reescribir ni una sola línea.

