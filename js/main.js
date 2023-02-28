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

  const finalList = document.getElementById('shopping_list');

  while (i < myShoppingList.length){
    
    
    console.log(myShoppingList[i]);
    i++;
    
    const listItems = document.createElement('li');
    listItems.append(myShoppingList[i]);
    console.log(listItems);
    finalList.append(listItems);

  }







