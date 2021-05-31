// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

//------------------------------------------------------------------

// creo array

var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']

// chiedo all’utente il cognome e lo inserisco nell'array

var cognomeUtente = prompt('Inserisci il tuo cognome');
    cognomi.push(cognomeUtente);

// stampo la lista ordinata alfabeticamente

cognomi.sort();
    document.getElementById("cognomi").innerHTML = cognomi;

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var a = cognomi.indexOf(cognomeUtente) + 1;
    document.getElementById("place").innerHTML = 'Il tuo cognome si trova alla ' + a + 'a posizione della lista';


// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

