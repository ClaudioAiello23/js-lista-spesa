'use strict';

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

  let i = 0;
  console.log('LA MIA LISTA DELLA SPESA:');

  while (i < myShoppingList.length){
    
    console.log(myShoppingList[i]);
    i++;

    const finalList = document.getElementById('shopping_list');
    finalList.innerHTML += `<li>${myShoppingList[i]}</li>`;
    
  }









