---
title: Pregled modela u VR naočarima
summary: Šetajte model u punoj veličini u VR naočarima, skačite, okrećite se, merite, presecite ga, postavljajte probleme slikom, gledajte ga kao maketu na stolu i sretnite ostale iz žive sesije.
keywords: vr, virtuelna stvarnost, naočare, webxr, xr, uronjenje, quest, oculus, vive, index, pico, šetnja kroz model, teleportacija, pregled dizajna, pregled, merenje, presek, rez, problem, problemi, bcf, model na stolu, maketa, prisustvo, avatari, uživo, zajedno
from: fa2f591a
---

{{ui:Pregled u VR}} stavlja vas unutar modela uz VR naočare, u punoj veličini. Stojite gde je kamera pogleda, na podu ispod nje, okrenuti na istu stranu. Ništa se ne otprema: naočare prikazuju ono što pregledač crta na ovom računaru (ili u pregledaču samih naočara).

## Šta vam treba

- Naočare koje pregledač može da vodi (WebXR): sopstveni pregledač samostalnih naočara, ili Chrome ili Edge na računaru sa povezanim naočarima.
- ModelCraft otvoren na bezbednoj stranici (https), kao što je na ovom sajtu.

Kad nema naočara, {{ui:Pregled u VR}} je neaktivno i kaže zašto.

## Početak

1. Postavite pogled gde želite da počnete: u sobi, ili spolja gledajući zgradu.
2. Kliknite {{ui:Pogledi}} u grupi {{ui:Kamera}}, pa {{ui:Pregled u VR}}.
3. Stavite naočare.

Meni je na zadnjoj strani leve ruke. Pokažite na njega desnim kontrolerom i povucite okidač da izaberete dugme. (Sa samo jednom rukom, meni lebdi ispred mesta odakle ste krenuli.)

## Kako izgleda

Naočare prikazuju model u izgledu [prikaza uživo](topic:live-view): izgled i materijale koje ste dali površima, nebo i sunce sa mesta i datuma vašeg modela sa njegovom senkom, lampe, rasuto bilje i kamenje, i svetlost odbijenu od zidova i podova (računa se na ovom računaru dok gledate i prati vas dok se krećete). Svetlina i preslikavanje prikaza (ACES ili AgX) su oni iz [Renderuj sliku](topic:render). Koliko se crta zavisi od toga šta pregledač naočara ima, kao na računaru; ambijentalna okluzija, refleksije i bloom ostaju na računaru.

## Krećite se

- **Skok:** u {{ui:Premesti}} pokažite na pod i povucite okidač; sletite tamo. Ili gurnite palicu napred da nišanite, pa je pustite da skočite. Možete da sletite samo na podove i tle (površi okrenute nagore), nikad na zid.
- **Okret:** gurnite palicu levo ili desno: okrenete se za 30° svaki put.
- **Hodanje:** u prostoru za kretanje jednostavno hodajte.

## Merenje

Izaberite {{ui:Meri}}, pa povucite okidač na dve tačke. Razdaljina se prikazuje između njih, u jedinicama modela. Tačka blizu ugla privlači se uglu.

## Presecanje

Izaberite {{ui:Presek}} i povucite okidač na površ:

- na zidu (ili bilo čemu što nije pod): sve između vas i te površi se odseca, pa vidite unutra. Ovo najbolje radi spolja, ili preko sobe;
- na podu, odozgo: presek u planu 1.2 m iznad tog poda, tako da zidovi pokazuju svoj donji deo.

{{ui:Obriši}} uklanja presek i merenja. Ako ravan preseka seče model u prikazu kad počnete, naočare počinju sa njim.

## Postavite problem

Izaberite {{ui:Problem}} i povucite okidač tamo gde je problem. Numerisana igla ga obeležava, a ModelCraft čuva problem sa slikom onoga što ste videli i gde ste stajali. Kad napustite VR, problemi su u listi {{ui:Problemi}} desno:

- dugme sa okom pokazuje problem sa mesta gde je postavljen;
- {{ui:Sačuvaj kao BCF}} preuzima sve kao BCF datoteku, koju otvaraju programi za BIM pregled (sa kamerom i slikom);
- čuvaju se i u datoteci `.modelcraft`.

Dodajte komentar problemu kad napustite VR, u BCF programu: pisanje u naočarama još nije napravljeno.

## Pogledajte ga kao maketu na stolu

{{ui:Gornja ploča stola}} smanjuje model da stane na sto ispred vas; šetajte oko njega, ili ga okrećite palicom. {{ui:Puna veličina}} vraća vas tamo gde ste bili.

## Sa drugima, uživo

U [živoj sesiji](topic:work-live), svi u VR-u vide ostale kao glavu i dve ruke u njihovoj boji, sa imenom, i tačku gde svaki pokazuje. Izmene koje neko napravi stižu do vaših naočara za trenutak. Ljudi za stolom još se ne prikazuju u naočarama.

## Izlazak

Izaberite {{ui:Izađi iz VR-a}} (ili skinite naočare i završite tamo). Prikaz na ekranu se pomera tamo gde je bila vaša glava.

:::note
Testirano samo sa emulatorom naočara, još ne sa pravim naočarama. Velik model može da natera naočare da trzaju: prvo sakrijte ono što ne treba ([sakrij i izoluj](topic:hide-isolate)).
:::
