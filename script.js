//localStorage.clear();


let date = new Date().toJSON().slice(0, 10);
let dateFormat = date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4);
let datumStoritve = document.getElementById("datum-storitve-racun");
let datumIzdaje = document.getElementById("datum-izdaje-racun");

datumStoritve.value = dateFormat;
datumIzdaje.value = dateFormat;
