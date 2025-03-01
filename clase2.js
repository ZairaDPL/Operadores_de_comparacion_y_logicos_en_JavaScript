/*Para ver como funciona cada ejercicio solo descomentalo y comenta lo que no quieras ocupar*/

//EJEMPLO: Funcionamiento de dos iguales comparan que el valor sin importar el tipo
// console.log( 10 == '10');

//EJEMPLO: Funcionamiento de tres iguales comparan que el valor y tipo de dato sea el mismo
// console.log(10 === 10);

//EJEMPLO DE UN if, else if
/* if(10 > 20)
    console.log('10 mayor que 5')
else if (20 < 30)
    console.log('20 menor que 30')
else if (5 == 5)
    console.log('5 igual a 5') */

/* EJEMPLO: AND (&&) Evalua más de una condición pero ambas deben ser verdaderas
para que sea true y una de ellas no se cumple dara false */
// console.log(10 === 11 && 20 === 20)

/* EJEMPLO:  OR (||) Evalua más de una condición basta con que una condición se 
cumpla para que se true si ninguna de las dos se cumple dara false */
// console.log(10 === 10 || 20 === 20)
// console.log(10 === 11 || 20 === 20)

/* EJERCICIO DE CLASE 
EJERCICIO 1
Hacer un app que se encargue de validar si la persona es apta para recibir la 
licencia de conducir.
Validar que el usuario haya aprobado el examen teorico practico y tenga buena visión */

/* let teorico = false;
let practico = true;
let vista = true;

if (teorico === true && practico === true && vista === true)
    alert('Felicidades tienes tu licencia de conducir');
else if(practico === false)
    alert('Fallaste no aprobaste el examen practico, intentalo de nuevo');
else if(vista === false)
    alert('No puedes obteener la licencia debido a temas de la vista');
else if (teorico === false)
    alert('No acreditaste el examen teorico estudia un poco más');
else
    alert('Contacta al administración'); */
//importante dejar else por usuario


/*EJERCICIO 2
App para validar entrada al parque tematico
1. Edad y altura, tener 12 años o más y medir más de 140cm
2. Pago o pase, debe haber hecho el pago de $20 o tener un pase VIP
3. Condición de salud, no debe tener restricciones medicas
4. Acompañamiento, si el visitante es menor de 16 años debe estar acompañado
por un adulto*/

//Pedir datos al usuario y guardarlos en la app

let edad = Number(prompt('Ingresa tu edad'));
let altura = Number(prompt('Ingresa tu altura en cm'));

//Impresion para verificación en pruebas
//console.log()

//if validar edad y altura
if(edad >= 12 && altura >= 140){
    //preguntar depues de que se valida la primera restricción para no tener datos no nescesarios
    //funcion toLocaleLowerCase() para convertir las entradas de texto a minusculas
    let pago = prompt('Hiciste el pago de la entrada? si - no').toLocaleLowerCase();
    let pase = prompt('Tienes un pase VIP? si - no').toLocaleLowerCase();
    let salud = prompt('Tienes alguna condición medica? si - no').toLocaleLowerCase();
    //validar edad para saber si tiene que estar compañado
    if(edad < 16){
        let acompanante = prompt('Eres menor de 16, ¿Te acompaña un adulto? si - no').toLocaleLowerCase();
        //verificar que va un acompañante
        if(acompanante === 'si'){
            //verificar pago, pase y salud
            if(pago === 'si' || pase === 'si' && salud === 'no')
                console.log('Puedes ingresar al parque con tu acompañante ¡BIENVENIDO!');
            else if(pago === 'no' || pase === 'no')
                console.log('No tienes un pago y un pase no puedes ingresar');
            else
                console.log("No puedes ingresar por tu condición de salud");
        }
        else
            console.log('ya que eres menor de 16 debes estar acompañado de un adulto para ingresas');
    }
    else{
        //verificar pago, pase y salud para los que no necesitan acompañante
        if(pago === 'si' || pase === 'si' && salud === 'no')
            console.log('Puedes ingresar al parque ¡BIENVENIDO!');
        else if(pago === 'no' || pase === 'no')
            console.log('No tienes un pago y un pase no puedes ingresar');
        else
            console.log("No puedes ingresar por tu condición de salud");
    }
}
else
    console.log('No cumples con la edad y altura requeridos');