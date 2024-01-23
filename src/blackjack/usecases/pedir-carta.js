/**
 * Parametros para pedir carta
 * @param {Array<String>} deck este el deck de las cartas un arrelgo
 * @returns {Array<String>} aqui se almacena las cartas pedidas del arreglo
 */

// Esta función me permite tomar una carta
 export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}