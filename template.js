const words = new URLSearchParams(window.location.search);

// USTVARI NASLOV DOKUMENTA
document.getElementById('title').innerHTML = 'Račun št. ' + words.get('stevilka-racun');

// USTVARI PODATKE IZDAJATELJA
document.getElementById('naziv-izdajatelja-tmp').innerHTML = words.get('naziv-izdajatelja');
document.getElementById('ulica-izdajatelja-tmp').innerHTML = words.get('ulica-izdajatelja');
document.getElementById('postna-izdajatelja-tmp').innerHTML = words.get('postna-izdajatelja');
document.getElementById('mesto-izdajatelja-tmp').innerHTML = words.get('mesto-izdajatelja');
document.getElementById('davcna-izdajatelja-tmp').innerHTML = 'DŠ: ' + words.get('davcna-izdajatelja');
document.getElementById('maticna-izdajatelja-tmp').innerHTML = 'MŠ: ' + words.get('maticna-izdajatelja');
document.getElementById('trr-izdajatelja-tmp').innerHTML = 'TRR: ' + words.get('trr-izdajatelja');
document.getElementById('banka-izdajatelja-tmp').innerHTML = 'Banka: ' + words.get('banka-izdajatelja');
document.getElementById('bic-izdajatelja-tmp').innerHTML = 'BIC/SWIFT: ' + words.get('bic-izdajatelja');

// USTVARI PODATKE PREJEMNIKA
document.getElementById('naziv-prejemnika-tmp').innerHTML = words.get('naziv-prejemnika');
document.getElementById('ulica-prejemnika-tmp').innerHTML = words.get('ulica-prejemnika');
document.getElementById('postna-prejemnika-tmp').innerHTML = words.get('postna-prejemnika');
document.getElementById('mesto-prejemnika-tmp').innerHTML = words.get('mesto-prejemnika');
document.getElementById('davcna-prejemnika-tmp').innerHTML = 'DŠ: ' + words.get('davcna-prejemnika');
document.getElementById('maticna-prejemnika-tmp').innerHTML = 'MŠ: ' + words.get('maticna-prejemnika');

// USTVARI PODATKE RAČUNA
const znesek = words.get('znesek-racun') + ' €';
document.getElementById("cena-tmp").value = znesek;
document.getElementById('stevilka-racun-tmp').innerHTML = 'Št. računa: ' + words.get('stevilka-racun');
document.getElementById('datum-storitve-racun-tmp').innerHTML = 'Datum storitve: ' + words.get('datum-storitve-racun');
document.getElementById('datum-izdaje-racun-tmp').innerHTML = 'Datum izdaje: ' + words.get('datum-izdaje-racun');
document.getElementById('kolicina-racun-tmp').innerHTML = 'Količina: ' + words.get('kolicina-racun') + ' (kos)';
document.getElementById('znesek-racun-tmp').innerHTML = 'Znesek: ' + znesek;
document.getElementById('opis-racun-tmp').innerHTML = 'Namen: ' + words.get('opis-racun');

// USVARI UVODNI, ZAKLJUČNI TEKST
document.getElementById('zacetni-text-racun-tmp').innerHTML = words.get('zacetni-text-racun');
document.getElementById('zakljucni-text-racun-tmp').innerHTML = words.get('zakljucni-text-racun');
document.getElementById('vpis-mziks-racun-tmp').innerHTML = "Vpis v razvid MZIKŠ pod številko " + words.get('vpis-mziks-racun');

// IZPOLNI TABELE
document.getElementById('znesek-1').innerHTML = znesek;
document.getElementById('znesek-2').innerHTML = znesek;
document.getElementById('znesek-3').innerHTML = znesek;
document.getElementById('opis-tmp').innerHTML = words.get('opis-racun')
document.getElementById('cena-tmp').innerHTML = znesek;
document.getElementById('vrednost-tmp').innerHTML = znesek;

// DODAJ SLIKE (podpis, logotip)


/*
//document.getElementById('podpis-izdajatelja-tmp').setAttribute("src", localStorage.getItem('podpis-izdajatelja'));
//document.getElementById('logotip-izdajatelja-tmp').setAttribute("src", localStorage.getItem('logotip-izdajatelja'));
*/