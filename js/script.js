// Mail
//  1.  Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

//------------------------------------------------------------------

// creo una lista di e-mail da verificare

var eMailValide = ['pinco@mail.com','pallo@mail.com','toni@mail.com','bepi@mail.com','menego@mail.com',]

// chiedo la mail all'utente

var eMailUser = prompt('Inserisci la tua e-mail')

// controllo che sia sulla lista e stampo un messaggio in base al risultato della verifica

for(var i = 0; i < eMailValide.length; i++){
    if (eMailValide[i] == eMailUser) {
        console.log('mail nella lista');
    }  else if {
        console.log('mail non valida');
    }
}






//------------------------------------------------------------------

// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.