import _ from 'underscore';
//Export le dice exporta toda la funcion a otro archivo
                        //Esta funcion es para crear deck
 //export const sma = 'sma rc';

 /**
  * Estos son los parametros pricipales para crear el deck
  * @param {Array<String>} tiposDeCarta  Ejemplo : ['C','D','H','S'];
  * @param {Array<String>} tiposEspeciales  Ejemplo : ['A','J','Q','K']
  * @returns {Array<String>} retorna un nuevo deck de cartas
  */
 //Funcion crea el deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDecarta es obligatorio como un arreglo de strings');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de strings');
    
    let deck         = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
/*
export default crearDeck;*/
//Esta es otra forma de exportar cosas pero solo puede haber una por archivo