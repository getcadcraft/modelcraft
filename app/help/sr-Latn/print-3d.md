---
title: Priprema modela za 3D štampu
summary: Proverite da je model zatvoren i da su površi okrenute kako treba, pogledajte njegovu veličinu, podnožje i nagibe, popravite šta nije u redu i preuzmite ga kao STL ili 3MF za vaš slicer.
keywords: 3d štampa, 3d štampanje, štampač, štampa, slicer, stl, 3mf, vodonepropusno, zatvoreno, mnogostruko, čvrsto telo, rupe, naopako, nagib, podrške, podnožje, podloga, milimetri, izvoz, popravi, popravka, izdubi, veličina podloge, početnik, debljina zida, alati za štampu
from: 948e19af
---

Slicer za 3D štampač traži zatvoren oblik: bez rupa, sa svim površima okrenutim napolje i ničim što ne prolazi kroz sebe. {{ui:Izvezi}} › {{ui:Proveri za 3D štampanje (STL ili 3MF)…}} proverava upravo to pre nego što preuzmete datoteku.

## Provera i preuzimanje

1. Izaberite šta želite da štampate: jednu ili više grupa ili komponenti, ili neke površi. Ako ništa nije izabrano, štampa se sve što se vidi.
2. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}, pa {{ui:Proveri za 3D štampanje (STL ili 3MF)…}}.

   Dijalog počinje jednim redom: „Spremno za štampu”, koliko stvari treba popraviti pre štampe, ili koliko treba prvo pogledati. Svaki problem ima tri dela: šta nije u redu, zašto je to važno i šta da se uradi. Zatim dolaze veličina u milimetrima, zapremina, broj trouglova i vaša podloga štampača.

3. Ako dijalog navodi stvari za popravku, kliknite {{ui:Popravi što može da se popravi}} (vidi dole). Provera se ponovo pokreće sama.
4. Kliknite {{ui:Preuzmi 3MF}} ili {{ui:Preuzmi STL}}.

Štampa se ono što vidite: skrivene površi, skrivene grupe i komponente, i sve na skrivenoj oznaci se izostavljaju. Veličine su uvek u milimetrima, jedinici koju slicer-i očekuju, bez obzira na jedinicu koju model prikazuje.

:::tip
Prvo birajte 3MF ako ga vaš slicer čita: čuva boje i jedinice. STL nema ni jedno ni drugo, a slicer-i pretpostavljaju milimetre.
:::

## Šta provera traži

Ovo zaustavlja štampu ili je kvari, i dijalog kaže „Nije spremno za štampu”:

| Problem | Šta znači | Šta da se uradi |
|---|---|---|
| Površ samo s jedne strane | Rupa: ivica ima površ s jedne strane i ništa s druge | Nacrtajte nedostajuću površ (linija preko praznine je često zatvori), ili koristite {{ui:Popravi}} (dole) |
| Deljena sa tri ili više površi | Površi se sastaju u peraju ili zidu unutar tela | Obrišite unutrašnju površ |
| Površi okrenute u suprotnim smerovima | Neke površi gledaju unutra, neke spolja | Izaberite površi koje gledaju unutra i kliknite {{ui:Obrni površinu}} u {{ui:Podaci o entitetu}} |
| Naopako | Ceo zatvoreni deo gleda unutra | Izaberite njegove površi i obrnite ih |
| Prolazi kroz sebe | Jedan deo se savija kroz sebe | {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Presek sa modelom}}, pa obrišite ono unutra. Vidi [Presek površi](topic:intersect) |

Ovo su upozorenja: model se štampa, ali pogledajte prvo.

- **Odvojeni delovi se preklapaju** ili **sastaju se površ na površ**: slicer-i ih obično spoje u jedno. Za čistiju datoteku, spojite ih s {{ui:Čvrsta tela}} › {{ui:Spoj}}. Vidi [Alati za čvrsta tela](topic:solids).
- **Ništa ne leži ravno na dnu**: okrenite model tako da površ naleže na podlogu, inače će slicer dodati podrške ili raft.
- **Nagnut više od 45° od uspravnog**: te površi trebaju podršku. Dijalog kaže koliki deo površine to je.
- **Manje od 1 mm u širini**: verovatno je modelovano u pogrešnoj jedinici. Proverite jedinicu u statusnoj traci.

Šupalj deo (zatvorena ljuska unutar druge) je u redu: njegove površi gledaju u šupljinu, a njegova zapremina se oduzima.

## Popravljanje problema

Pod **Gde su problemi**, dijalog imenuje svaku grupu ili komponentu koja ima nešto loše (labavi delovi van grupe navode se kao „Površi van grupe”), uz to šta nije u redu u njoj. Komponenta postavljena više puta navodi se jednom: popravka nje popravlja svaku kopiju.

- {{ui:Prikaz}} otvara tu grupu i bira ivice i površi koje nisu u redu, da budu istaknute.
- {{ui:Popravi što može da se popravi}} popravlja sve odjednom: zatvara rupe čije ivice leže ravno, uklanja površi unutar oblika i labave ivice, i okreće površi kako treba spolja. To je jedan korak: {{key:Mod+Z}} ga opoziva. Provera se zatim ponovo pokreće i prikazuje šta je ostalo.

Šta ne može da popravi (rupa čije ivice ne leže ravno, deo koji prolazi kroz sebe) ostaje na listi uz šta da se uradi ručno. {{ui:Popravka}} pod **Alati za štampu** ide dalje: zatvara rupe koje nisu ravne, uklanja labave delove i udvostručene površi, i navodi svaku popravku. Vidi [Podrške, debljina zida, izdubljivanje i popravka](topic:print-tools#repair). Možete popraviti i jednu grupu odjednom: izaberite je, pa upotrebite {{ui:Prikaži probleme}} i {{ui:Popravi}} u {{ui:Podaci o entitetu}}. Vidi [Alati za čvrsta tela](topic:solids).

## Šupalo telo

{{ui:Izdubi}} pod **Alati za štampu** izdubljuje deo na debljinu zida koju zadate, sa rupama za odvod gde kliknete. Vidi [Izdubi](topic:print-tools#hollow).

Šupljinu možete nacrtati i sami: zatvorena grupa unutar dela, koja ga ne dodiruje, sa svim površima obrnutim tako da gledaju u šupljinu. Provera je računa kao šupljinu i oduzima njenu zapreminu; ne navodi se kao nešto što treba popraviti.

## Podloga vašeg štampača

Izaberite veličinu podloge vašeg štampača u {{ui:Podešavanja}} › {{ui:ModelCraft}} › {{ui:Podloga 3D štampača}}. Provera tada upozorava kad je model veći od podloge, okrenut na bilo koji način. Vidi [Podešavanja](topic:settings#3d-printer-bed).

## Alati za štampu

Ispod nalaza dijaloga, **Alati za štampu** otvara {{ui:Pregled podrške}} (gde idu podrške i koliko otprilike), {{ui:Debljina zida}} (zidovi pretanki za štampu), {{ui:Izdubi}} i {{ui:Popravka}}. Vidi [Podrške, debljina zida, izdubljivanje i popravka](topic:print-tools). {{ui:Podeli za štampu}} seče model prevelik za podlogu na delove sa spojnicama i numerisanim spojevima: vidi [Podeli veliki model za štampu](topic:print-split).

## Nije proveravano

Provera ne seče: sitne detalje koje vaš mlaznik ne može da nacrta i prave podrške su stvar vašeg slicer-a. Vidi [Još nije napravljeno](topic:not-built-yet#3d-printing).
