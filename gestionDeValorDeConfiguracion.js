// Gestion de un Valor de configuracion.
// Supongamos que tenemos un sistema que carga un valor de configuracion desde tres posibles fuentes.

// Fuente 1 = La configuracion definida por el usuario.
// Fuente 2 = Un valor predeterminado
// Fuente 3 = Si ninguna de las anteriores se aplica, mostrar un error.

// Declaracion de las variables

let configuracionUsuario // Esta variable no tiene valor asignado por lo tanto es undefined.
let configuracionPredeterminada= "Modo Oscuro" ; // Este es el valor predeterminado.
let configuracionFinal = null; // Se va a usar para almacenar la informacion final.

// Verificar y asignar el valor final.

if (configuracionUsuario !== undefined && configuracionUsuario !== null){
  // Si el usuario ha definido una configuracion valida.
  configuracionFinal = configuracionUsuario;
} else if (configuracionPredeterminada !== null && configuracionPredeterminada !== undefined) {
  // Si NO hay configuracion de usuario, usamos la predeterminada.
  configuracionFinal = configuracionPredeterminada;
} else {
  // Si no hay configuracion de usuario ni predeterminada, mostramos un error.
  console.error("Error: No hay configuracion predeterminada");
}


// Mostramos los resultados

if (configuracionFinal!== null){
    console.log("Configuracion aplicada: ", configuracionFinal)
} else{
    console.log("No se puedo aplicar la configuracion")
}

// Si una variable NO es undefined y NO es null, entonces que es ?
// Es una variable con valor.

// Explicacion del codigo.

//1- Variables Iniciales:

// configuracionUsuario : Esta undefined porque no se le ha asignado un valor.
// configuracionPredeterminada : Tiene un valor valido, "Modo Oscuro".
// configuracionFinal : Se inicializa como null para indicar que aun no se ha decidido.

//2- Logica con condicionales.

// Primera condicion: Verifica si configuracionUsuario tiene un valor valido (es decir, no es undefined ni null)
// Segunda condicion: Si no hay configuracion de usuario, verifica si la configuracion predeterminada no es null ni undefined y se le asigna a configuracionFinal)
// Tercera condicion: Si ninguna fuente tiene un valor vlaido, mustra un error en la consola.
 
//3- Resultado

// Si alguna de las condiciones es valida, muestra la configuracion aplicada.
// Si no, indica que no se puedo aplicar la configuracion.



