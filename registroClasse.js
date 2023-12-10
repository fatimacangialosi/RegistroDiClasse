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
document.addEventListener("DOMContentLoaded", function () {
	class Studente {
		nome;
		cognome;
		votiDelloStudente = [];

		constructor(nome, cognome, voti) {
			this.nome = nome;
			this.cognome = cognome;
			this.votiDelloStudente = voti || [];
		}

		toString() {
			return `${this.nome} ${this.cognome}`;
		}

		aggiungiVoto(punteggio, data) {
			const voto = { punteggio, data };
			this.votiDelloStudente.push(voto);
			console.log(
				`Voto aggiunto per ${this.nome} ${this.cognome}: ${punteggio} (${data})`
			);
		}
	}

	class Elenco {
		studenti = [];

		aggiungiStudente(nome, cognome, voti) {
			const studente = new Studente(nome, cognome, voti);
			this.studenti.push(studente);
			this.studenti.sort((a, b) => a.cognome.localeCompare(b.cognome));
			console.log("Elemento aggiunto: " + studente);
		}

		appello() {
			console.log(
				`Gli studenti: ${this.studenti
					.map((studente) => studente.toString())
					.join(", ")}`
			);
		}

		aggiornaStudente(indice, nuovoNome, nuovoCognome, nuoviVoti) {
			if (indice >= 0 && indice < this.studenti.length) {
				const studente = this.studenti[indice];
				studente.nome = nuovoNome;
				studente.cognome = nuovoCognome;
				studente.votiDelloStudente = nuoviVoti;
				console.log(
					`Elemento aggiornato all'indice ${indice}: ${nuovoNome} ${nuovoCognome}`
				);
			} else {
				console.log("Indice non valido. Impossibile aggiornare l'elemento.");
			}
		}

		rimuoviStudente(indice) {
			if (indice >= 0 && indice < this.studenti.length) {
				this.studenti.splice(indice, 1);
				console.log("Elemento rimosso.");
			} else {
				console.log("Indice non valido. Impossibile rimuovere l'elemento.");
			}
		}
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

	elenco.aggiungiStudente(new Studente("fatima", "cangialosi"));
	elenco.aggiungiStudente(new Studente("alberto", "cangialosi"));
	elenco.aggiungiStudente(new Studente("gianmarco", "culò"));

	// Visualizzazione degli elementi
	elenco.appello();
});

/* Rimozione di un elemento
elenco.rimuoviStudente(2);

// Visualizzazione degli elementi dopo la rimozione
elenco.appello();

const studente2 = new Studente("Piero", "Carimi");
studente2.aggiungiVoto(8, "2023-01-10");
studente2.aggiungiVoto(9, "2023-02-15");

console.log(studente2.votiDelloStudente);
*/
