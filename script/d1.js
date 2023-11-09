const tombolaArray = Array.from({ length: 90 }, (_, i) => i + 1);


const creaTabellone = function () {
    const tabelloneContainer = document.getElementById("tabellone"); 

    for (let i = 1; i <= 90; i++) {
      const containerNumeri = document.createElement("div");
      const cellaNumeri = document.createElement("h3"); 
      cellaNumeri.textContent = i; 
      containerNumeri.appendChild(cellaNumeri); 
      tabelloneContainer.appendChild(containerNumeri); 
      containerNumeri.classList.add("cella")
    }
  }
  

function estraiNumeroRandom() {
  if (tombolaArray.length === 0) {
    alert("Hai estratto tutti i numeri!");
    return;
  }
  const numeroRandom = Math.floor(Math.random() * tombolaArray.length);
  const numeroEstratto = tombolaArray[numeroRandom];
  tombolaArray.splice(numeroRandom, 1);
return numeroEstratto;
}


function cliccaEstrai() {
  const numeroEstratto = estraiNumeroRandom();
  document.getElementById("estrazione").textContent = "Numero estratto: " + numeroEstratto;
  const tombola = document.getElementById("tabellone")
  const selezionaCella = tombola.querySelector(" h3:contains('" + numeroEstratto + "')").parentElement; //ho trovato questa soluzione su stack overflow, ma non funziona, per cui le celle corrispondenti ai numeri estratti non si evidenziano
  selezionaCella.classList.add("estratto");
}







  creaTabellone();

  document.getElementById("estrai").addEventListener("click", cliccaEstrai);


