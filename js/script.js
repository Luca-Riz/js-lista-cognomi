
// Mail
//  1.  Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

//------------------------------------------------------------------

// creo una lista di e-mail da verificare

var eMailValide = ['pinco@mail.com', 'pallo@mail.com', 'toni@mail.com', 'bepi@mail.com', 'menego@mail.com']

// chiedo la mail all'utente

var eMailUser = prompt('Inserisci la tua e-mail')

// controllo che sia sulla lista e stampo un messaggio in base al risultato della verifica

var ok;

for (var i = 0; i < eMailValide.length; i++) {    
    if (eMailValide[i] == eMailUser) {
        var ok = true;
        document.getElementById('mailok').innerHTML += ' nella lista';
    }
}

if ( ok != true) {
    document.getElementById('mailok').innerHTML += ' non presente nella lista ammessa, riprovare.';
}

