import { pedirCarta,valorCarta,crearCartaHTML } from "./";

/**
 * Parametros del turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora nececsita para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} deck 
 */


// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck=[] ) => {

    if(!puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw  new Error('Argumento puntos html es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
     
        //Funcion crear carta
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
