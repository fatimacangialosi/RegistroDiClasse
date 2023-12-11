/* Esercizio di Fatima Cangialosi in JavaScript
Gestione in modo C.R.U.D. la gestione di un registro di classe universitaria,
con persone omonime tipo due Mario Rossi.
Con degli array dinamici in javascript
ci vuole :
*una funziona "aggiungiStudente" che pero' deve inseriserire lo studente
in ordine alfabetico per cognome;
*una funzione Appello che legge tutti gli studenti;
* una funzione che aggiorna in caso di errore corregge o modifica
* una funzione rimuoviStudente()
* 
* 
* Ogni studente nel registro deve avere un nome, un cognome, e una lista di voti. 
* Per ogni voto, dovrai registrare il punteggio ottenuto e la data della verifica.
* Ogni studente nel registro deve avere un nome, un cognome, e una lista di voti. 
* Per ogni voto, dovrai registrare il punteggio ottenuto e la data della verifica.
* 
* */
// modifica del DOM//
/* 	gestione bottoni nella pagina web per aggiungere e togliere student
 */

document
	.getElementById("rimuoviStudenteButton")
	.addEventListener("click", function () {
		var studenti = [
			"fatima cangialosi",
			"alberto cangialosi",
			"chiara ferrara",
		]; // Esempio di lista degli studenti
		var listaStudenti = document.createElement("ul");

		for (var i = 0; i < studenti.length; i++) {
			var studente = document.createElement("li");
			studente.textContent = studenti[i];
			listaStudenti.appendChild(studente);
		}

		document.body.appendChild(listaStudenti);
	});
document.addEventListener("DOMContentLoaded", function () {
	class Studente {
		nome;
		cognome;
		votiDelloStudente = [];

		constructor(nome, cognome, voti) {
			this.nome = nome;
			this.cognome = cognome;
			this.votiDelloStudente = voti || [];
			//// Recupera la stringa JSON dal localStorage con la chiave "studenti"
			const studentiJSON = localStorage.getItem("studenti");
			//// Se la stringa JSON è presente, la converte in un oggetto(altrimenti, imposta un array vuoto [])
			this.studentiJSON = studentiJSON ? JSON.parse(studentiJSON) : [];
		}

		toString() {
			return `${this.nome} ${this.cognome}`;
		}
	}

	class Elenco {
		// ... (codice della classe Elenco)

		salvaLocalStorage() {
			const studentiJSON = JSON.stringify(this.studenti);
			localStorage.setItem("studenti", studentiJSON);
		}
	}
	function mostraMessaggio(messaggio, successo = true) {
		const messaggiElement = document.getElementById("messaggi");
		messaggiElement.innerHTML = `<div class="${
			successo ? "successo" : "errore"
		}">${messaggio}</div>`;
	}

	const elenco = new Elenco();

	// Aggiunta di elementi
	elenco.aggiungiStudente("fatima", "cangialosi", [
		{ punteggio: 8, data: "2023-01-10" },
		{ punteggio: 9, data: "2023-02-15" },
	]);
	elenco.aggiungiStudente("alberto", "cangialosi", [
		{ punteggio: 8, data: "2023-01-10" },
		{ punteggio: 9, data: "2023-02-15" },
	]);
	elenco.aggiungiStudente("gianmarco", "culò", [
		{ punteggio: 10, data: "2023-01-10" },
		{ punteggio: 9, data: "2023-02-15" },
	]);

	// Visualizzazione degli elementi
	elenco.appello();

	// Aggiornamento di un elemento
	elenco.aggiornaStudente(1, "chiara", "ferrara", [
		{ punteggio: 8, data: "2023-01-10" },
		{ punteggio: 9, data: "2023-02-15" },
	]);

	// Visualizzazione degli studenti dopo l'aggiornamento
	elenco.appello();

	elenco.aggiungiStudente("fatima", "cangialosi");
	elenco.aggiungiStudente("alberto", "cangialosi");
	elenco.aggiungiStudente("gianmarco", "culò");

	// Visualizzazione degli elementi
	elenco.appello();
	elenco.salvaLocalStorage();
});
