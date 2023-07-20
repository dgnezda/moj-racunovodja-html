// USTVARI NASLOV DOKUMENTA
document.getElementById('title').innerHTML = 'Račun št. ' + localStorage.getItem('stevilka-racun');

// USTVARI PODATKE IZDAJATELJA
document.getElementById('naziv-izdajatelja-tmp').innerHTML = localStorage.getItem('naziv-izdajatelja');
document.getElementById('ulica-izdajatelja-tmp').innerHTML = localStorage.getItem('ulica-izdajatelja');
document.getElementById('postna-izdajatelja-tmp').innerHTML = localStorage.getItem('postna-izdajatelja');
document.getElementById('mesto-izdajatelja-tmp').innerHTML = localStorage.getItem('mesto-izdajatelja');
document.getElementById('davcna-izdajatelja-tmp').innerHTML = 'DŠ: ' + localStorage.getItem('davcna-izdajatelja');
document.getElementById('maticna-izdajatelja-tmp').innerHTML = 'MŠ: ' + localStorage.getItem('maticna-izdajatelja');
document.getElementById('trr-izdajatelja-tmp').innerHTML = 'TRR: ' + localStorage.getItem('trr-izdajatelja');
document.getElementById('banka-izdajatelja-tmp').innerHTML = 'Banka: ' + localStorage.getItem('banka-izdajatelja');
document.getElementById('bic-izdajatelja-tmp').innerHTML = 'BIC/SWIFT: ' + localStorage.getItem('bic-izdajatelja');

// USTVARI PODATKE PREJEMNIKA
document.getElementById('naziv-prejemnika-tmp').innerHTML = localStorage.getItem('naziv-prejemnika');
document.getElementById('ulica-prejemnika-tmp').innerHTML = localStorage.getItem('ulica-prejemnika');
document.getElementById('postna-prejemnika-tmp').innerHTML = localStorage.getItem('postna-prejemnika');
document.getElementById('mesto-prejemnika-tmp').innerHTML = localStorage.getItem('mesto-prejemnika');
document.getElementById('davcna-prejemnika-tmp').innerHTML = 'DŠ: ' + localStorage.getItem('davcna-prejemnika');
document.getElementById('maticna-prejemnika-tmp').innerHTML = 'MŠ: ' + localStorage.getItem('maticna-prejemnika');

// USTVARI PODATKE RAČUNA
const znesek = localStorage.getItem('znesek-racun') + ' €';
document.getElementById("cena-tmp").value = znesek;
document.getElementById('stevilka-racun-tmp').innerHTML = 'Št. računa: ' + localStorage.getItem('stevilka-racun');
document.getElementById('datum-storitve-racun-tmp').innerHTML = 'Datum storitve: ' + localStorage.getItem('datum-storitve-racun');
document.getElementById('datum-izdaje-racun-tmp').innerHTML = 'Datum izdaje: ' + localStorage.getItem('datum-izdaje-racun');
document.getElementById('kolicina-racun-tmp').innerHTML = 'Količina: ' + localStorage.getItem('kolicina-racun') + ' (kos)';
document.getElementById('znesek-racun-tmp').innerHTML = 'Znesek: ' + znesek;
document.getElementById('opis-racun-tmp').innerHTML = 'Namen: ' + localStorage.getItem('opis-racun');

// USVARI UVODNI, ZAKLJUČNI TEKST
document.getElementById('zacetni-text-racun-tmp').innerHTML = localStorage.getItem('zacetni-text-racun');
document.getElementById('zakljucni-text-racun-tmp').innerHTML = localStorage.getItem('zakljucni-text-racun');
document.getElementById('vpis-mziks-racun-tmp').innerHTML = "Vpis v razvid MZIKŠ pod številko " + localStorage.getItem('vpis-mziks-racun');

// IZPOLNI TABELE
document.getElementById('znesek-1').innerHTML = znesek;
document.getElementById('znesek-2').innerHTML = znesek;
document.getElementById('znesek-3').innerHTML = znesek;
document.getElementById('opis-tmp').innerHTML = localStorage.getItem('opis-racun')
document.getElementById('cena-tmp').innerHTML = znesek;
document.getElementById('vrednost-tmp').innerHTML = znesek;

// DODAJ SLIKE (podpis, logotip)

//document.getElementById('podpis-izdajatelja-tmp').setAttribute("src", localStorage.getItem('podpis-izdajatelja'));
//document.getElementById('logotip-izdajatelja-tmp').setAttribute("src", localStorage.getItem('logotip-izdajatelja'));
