ESERCIZIO - LISTA DELLA SPESA
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for.
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
--------------------------------------------------------------
SVOLGIMENTO: IPOTESI INIZIALI

- creare un Array con la mia lista della spesa;
- creare una variabile LET con indice pari a 0 (posizionamento 0) fuori dal ciclo, dato che tale indice non sarà possibile inserirlo nella condizione di partenza (come accade invece con il ciclo FOR);
- creare ed utilizzare il ciclo While per passare in rassegna gli elementi dell'array.
- all'interno del ciclo, creare una variabile che si agganci all'id della lista presente su html; successivamente aggiungere alla variabile l'elemento html lista "LI" che contenga il singolo elemento della lista spesa; in questo modo si dovrebbe poter stampare la lista sul DOM.
- incrementare il valore di "i" con "i++" per passare all'elemento successivo del ciclo, fino al raggiungimento dell'ultimo elemento dell'array.