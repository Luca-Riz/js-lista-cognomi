
// Mail
//  1.  Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

//------------------------------------------------------------------

// creo una lista di e-mail da verificare

var eMailValide = ['pinco@mail.com', 'pallo@mail.com', 'toni@mail.com', 'bepi@mail.com', 'menego@mail.com'];

// chiedo la mail all'utente

var eMailUser = prompt('Inserisci la tua e-mail');

// controllo che sia sulla lista e stampo un messaggio in base al risultato della verifica

var ok;

for (var i = 0; i < eMailValide.length; i++) {    
    if (eMailValide[i] == eMailUser) {
        var ok = true;
        document.getElementById('mailok').innerHTML += ' nella lista';
    }
}

if (ok != true) {
    document.getElementById('mailok').innerHTML += ' non presente nella lista ammessa, riprovare.';
}



//================================================================

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

// --- inizio bonus ---
var low = cognomeUtente.toLowerCase();
var upp = cognomeUtente.charAt(0).toUpperCase();

var restoLow = low.slice(1);
var cognomeCap = upp+restoLow;

cognomi.push(cognomeCap);
// --- fine bonus ---

// stampo la lista ordinata alfabeticamente

cognomi.sort();
    document.getElementById("cognomi").innerHTML += cognomi;

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

for (var j = 0; j < cognomi.length; j++) {    
    if (cognomi[j] == cognomeCap) {
        j = j + 1;
        document.getElementById("place").innerHTML = 'Il tuo cognome si trova alla ' + j + 'a posizione della lista.';
    }
}

// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

// --- bonus al suo posto, vedere nota sopra ---