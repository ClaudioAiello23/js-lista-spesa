'use strict';

// Creo una variabile di tipo Arrey (lista) che contiene la mia lista
const myShoppingList = [
    'Nutella',
    'Pan grattato',
    'Pizza Buitoni',
    'Burro', 
    'Sacchetti umido',
    'Vino Primitivo di Manduria',
    'Birra Heineken', 
    'KitKat', 
    'Biscotti Krumiri', 
    'Focaccine', 
    'Detersivo piatti', 
    'Sugo Mutti', 
    'Gelati Sammontana', 
    'Cuori di pane Mulino Bianco', 
    'Maionese', 
    'Penne Barilla', 
    'TicTac colored', 
    'Vasetto miele', 
    'Acqua Ferrarelle',
    'Acqua Levissima',
    'Uovo Pasqua Kinder',
    'Cartucce stampante Epson',
    'Figurine Calciatori Panini'
];

// Creo una variabile LET "indice" con valore di partenza = posizione 0 (Nutella);
    let i = 0;


/*Creo un ciclo while impostando che fino a quando l'indice "i" è minore della
lunghezza dell'Array, si crei da console e su html la lista della spesa;
inserisco la dicitura "i++" per incrementare successivamente il valore di "i"
fino a raggiungere la lunghezza dell'Array (per poi fermarsi)*/
while (i < myShoppingList.length){

    console.log(myShoppingList[i]);
    const finalList = document.getElementById('shopping_list');
    finalList.innerHTML += `<li>${myShoppingList[i]}</li>`;
    i++;

}



/*Stesso risultato (alternativo) con il ciclo DO-WHILE commentato 
(testato e funzionante)*/

//   do {

//     console.log(myShoppingList[i]);
//     const finalList = document.getElementById('shopping_list');
//     finalList.innerHTML += `<li>${myShoppingList[i]}</li>`;
//     i++;
    
//   } while (i < myShoppingList.length);








