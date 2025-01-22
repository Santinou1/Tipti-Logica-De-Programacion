// Undefined y Null

// Undefined: Hace referia a una variable que fue declarada PERO no se le asigno un valor.

// Null: Representa una ausencia INTENCIONAL de un valor. Es algo que nosotros como programadores asignamos para poder indicar que la variable esta "vacia".

let sinValor;
console.log("Soy la variable sinValor= ",  sinValor);
let valorNulo = null;
console.log("Soy la variable valorNulo= ", valorNulo);


// Definiciones Tecnicas.

// Tipo de Dato (undefined) = Es un tipo de dato primitivo y tambien el valor predeterminado para variables no inicializadas.
// Tipo de Dato (null) = Es un tipo primitivo y un valor asignable.

// Significado (undefined) = Representa la "ausencia de valor inicial" o "no definido"
// Significado (null) = Representa "ausencia intencionada de valor".

// ¿Quien lo asigna? (undefined) = Generalmente lo asigna Javascript de manera automatica.
// ¿Quien lo asigna? (null) = Lo asigna el programador de forma explicita.

// Comparacoin entre undefined y null.


console.log(null == undefined)
console.log(null === undefined)


// Usos Comunes.

// Situacion A.

// Variable aun NO definida o inicializada. 
// ¿Que Usamos?
// undefined
// let usuario; 


// Situacion B.

// Valor faltante en un formulario.
// ¿Que usamos?
// null
// let direccion = null // No tiene direccion por ahora, pero podria tenerlo mas tarde.



