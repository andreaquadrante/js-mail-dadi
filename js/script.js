// CREO UN ARRAY DELLE EMAIL VALIDE
var mailList = ['andrea@qmail.it', 'quadrante@qmail.it', 'gitquad@qmail.it', 'itsmeandrea@qmail.it', 'boolean@qmail.it'];

// CHIEDO ALL'UTENTE DI INSERIRE LA SUA EMAIL
var getMail = prompt('Inserisci il tuo indirizzo email');

// DEFINISCO GLI ELEMENTI DA VISUALIZZARE NELL'HTML
var userMailEl = document.getElementById('userMail');
var resultEl = document.getElementById('result');

// DEFINISCO UN MESSAGGIO PREDEFINITO PER L'UTENTE
var message = 'Spiacenti. Non abbiamo trovato la tua email.';

// DENIFISCO LE CONDIZIONI
for (var i = 0; i < mailList.length; i++) {
  if (mailList[i] == getMail) {
    message = 'Benissimo! La tua email è presente nella lista.';
    resultEl.classList.add('found');
  } else {
    resultEl.classList.add('notFound');
  }
}

// IMPOSTO LA VISUALIZZAZIONE DEL RISULTATO FINALE
console.log(message);
userMailEl.innerHTML = 'Hai inserito: ' + getMail;
resultEl.innerHTML = message;
