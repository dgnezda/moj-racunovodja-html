//localStorage.clear();

let date = new Date().toJSON().slice(0, 10);
let dateFormat = date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4);
let datumStoritve = document.getElementById("datum-storitve-racun");
let datumIzdaje = document.getElementById("datum-izdaje-racun");

datumStoritve.value = dateFormat;
datumIzdaje.value = dateFormat;


function submitForm() {
    // SHRANI PODATKE O IZDAJATELJU
    localStorage.setItem("naziv-izdajatelja", document.getElementById("naziv-izdajatelja").value);
    localStorage.setItem("ulica-izdajatelja", document.getElementById("ulica-izdajatelja").value);
    localStorage.setItem("postna-izdajatelja", document.getElementById("postna-izdajatelja").value);
    localStorage.setItem("mesto-izdajatelja", document.getElementById("mesto-izdajatelja").value);
    localStorage.setItem("davcna-izdajatelja", document.getElementById("davcna-izdajatelja").value);
    localStorage.setItem("maticna-izdajatelja", document.getElementById("maticna-izdajatelja").value);
    localStorage.setItem("trr-izdajatelja", document.getElementById("trr-izdajatelja").value);
    localStorage.setItem("banka-izdajatelja", document.getElementById("banka-izdajatelja").value);
    localStorage.setItem("bic-izdajatelja", document.getElementById("bic-izdajatelja").value);
    
    // SHRANI FILEPATH DO NALOŽENEGA PODPISA IN LOGOTIPA
    /*const logotip = document.getElementById('logotip-izdajatelja');
    const logotipURL = window.URL.createObjectURL(logotip);
    localStorage.setItem('logotip-izdajatelja', logotipURL); 
    const podpis = document.getElementById('podpis-izdajatelja');
    const podpisURL = window.URL.createObjectURL(podpis)
    localStorage.setItem('podpis-izdajatelja', podpisURL); */

    // SHRANI PODATKE O PREJEMNIKU
    localStorage.setItem("naziv-prejemnika", document.getElementById("naziv-prejemnika").value);
    localStorage.setItem("ulica-prejemnika", document.getElementById("ulica-prejemnika").value);
    localStorage.setItem("postna-prejemnika", document.getElementById("postna-prejemnika").value);
    localStorage.setItem("mesto-prejemnika", document.getElementById("mesto-prejemnika").value);
    localStorage.setItem("davcna-prejemnika", document.getElementById("davcna-prejemnika").value);
    localStorage.setItem("maticna-prejemnika", document.getElementById("maticna-prejemnika").value);

    // SHRANI PODATKE O RACUNU
    localStorage.setItem("stevilka-racun", document.getElementById("stevilka-racun").value);
    localStorage.setItem("datum-storitve-racun", document.getElementById("datum-storitve-racun").value);
    localStorage.setItem("datum-izdaje-racun", document.getElementById("datum-izdaje-racun").value);
    localStorage.setItem("kolicina-racun", document.getElementById("kolicina-racun").value);
    localStorage.setItem("znesek-racun", document.getElementById("znesek-racun").value);
    localStorage.setItem("opis-racun", document.getElementById("opis-racun").value);

    localStorage.setItem("zacetni-text-racun", document.getElementById("zacetni-text-racun").value);
    localStorage.setItem("zakljucni-text-racun", document.getElementById("zakljucni-text-racun").value);
    localStorage.setItem("vpis-mziks-racun", document.getElementById("vpis-mziks-racun").value);
  }