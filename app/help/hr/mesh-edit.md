---
title: Uređivanje mreže u radnom prostoru Mreža
summary: Odaberite vrhove, bridove i plohe mreže, pomaknite ih, izvucite, umetnite, zakosite, prerežite, spojite, ispunite i premostite, s bilo kojim stilom tipki.
keywords: mreža, način uređivanja, radni prostor mreže, vrh, vrhovi, brid, bridovi, ploha, plohe, izvuci, umetni, zakosi, rez petljom, nož, raspolovi, vrti, spoji, otopi, ispuni, ispuna mrežom, premosti, podijeli, klizanje, proporcionalno uređivanje, pad, radni prostor
from: 92a372dd
---

**Radni prostor Mreža** uređuje [mrežu](topic:meshes) točku po točku: njezine vrhove, bridove i plohe. Geometrija guranja i povlačenja ostaje u radnom prostoru **Model**.

## Otvaranje

- Odaberite {{ui:Mreža}} na popisu {{ui:Radni prostor}} s lijeve strane alatne trake. Odabrana mreža se otvara za uređivanje; odabrana grupa ili komponenta prvo se pretvara u mrežu (jedan korak poništavanja).
- Ili dvaput kliknite mrežu, ili je, s tipkama modelara, odaberite i pritisnite {{key:Tab}}.
- Bez odabira, ploča nudi mreže za dodavanje: ravnina, rešetka, kocka, krug, valjak, stožac, sfera, ikosfera i torus. Nova se postavlja tamo gdje gleda prikaz i otvara se za uređivanje.

{{ui:Natrag na Model}} (ili popis, {{key:Tab}} s tipkama modelara, {{key:Esc}} bez odabira s tipkama guranja/povlačenja) vraća na Model s odabranom mrežom. Dok je radni prostor Mreža otvoren, ostatak modela je prigušen, a alati za crtanje modela su sklonjeni.

## Odabir

| Radnja | Za |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Odabir vrhova, bridova ili ploha |
| Klik | Odabir jednog; {{key:Shift}}+klik dodaje ili uklanja |
| Povuci okvir | Odabir onoga što je unutra i vidljivo; {{key:Shift}} dodaje, {{key:Ctrl}} uklanja |
| {{key:Alt}}+klik na brid, ili dvostruki klik na njega | Njegova petlja bridova (petlja ploha u načinu ploha; cijeli rub na otvorenom bridu) |
| {{key:Ctrl}}+{{key:Alt}}+klik na brid | Njegov prsten bridova |
| Trostruki klik | Sve što je spojeno s njim |

Grupa {{ui:Odaberi}} ima još {{ui:Sve}}, {{ui:Povezano}}, {{ui:Petlja}}, {{ui:Prsten}}, {{ui:Više}} i {{ui:Manje}}.

## Pomicanje, zakretanje, skaliranje

{{ui:Pomakni}}, {{ui:Zakreni}} i {{ui:Skaliraj}} kreću od pokazivača: pomaknite ga, zatim kliknite ili pritisnite {{key:Enter}} da spustite odabir, ili {{key:Esc}} za poništavanje. {{key:X}}, {{key:Y}} ili {{key:Z}} (ili tipke sa strelicama) zaključavaju os. Upišite udaljenost, kut ili faktor za točan iznos; [proračuni](topic:value-box#calculations) također rade.

**Proporcionalno uređivanje** ({{ui:Proporcionalno}}, ili u ploči): vrhovi blizu odabira prate pomak, a što su dalje, to manje, do dosega koji postavite, s padom koji odaberete. Uključite {{ui:Samo duž mreže}} da mjerite duž bridova, a ne ravno.

{{ui:Klizanje}} pomiče odabranu petlju bridova duž susjednih bridova.

## Promjena oblika

| Alat | Što radi |
|---|---|
| {{ui:Izvuci}} | Izvlači odabrane plohe duž njihove normale, s novim bočnim plohama (ili stvara plohe iz rubnih bridova na otvoru). Upišite udaljenost |
| {{ui:Umetni}} | Pojas unutar obrisa odabranih ploha; pritisnite {{key:I}} ponovno za svaku plohu zasebno |
| {{ui:Zakosi}} | Reže odabrane bridove (ili, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vrhove) na određenoj širini; kotačić ili tipke plus i minus dodaju segmente za zaobljeni brid |
| {{ui:Rez petljom}} | Pokažite brid: nove petlje preko prstena četverokutnih ploha; kotačić određuje koliko rezova; kliknite za rez |
| {{ui:Nož}} | Kliknite točke na bridovima ili kutovima; {{key:Enter}} reže ravno preko ploha među njima, kako ih vidite |
| {{ui:Raspolovi}} | Nacrtajte liniju na zaslonu: odabrane plohe (ili sve) se režu duž nje |
| {{ui:Vrti}} | Okreće odabrane plohe ili otvorene bridove oko plave osi u koracima (kotačić ih postavlja); puni okretaj zatvara |
| {{ui:Podijeli}} | Reže odabrane bridove na dva; cijele plohe postaju rešetka |
| {{ui:Spoji}} | Odabrani vrhovi postaju jedan, u njihovom središtu |
| {{ui:Otopi}} | Uklanja odabir, ali čuva površinu: plohe se spajaju |
| {{ui:Ispuni}} | Ploha preko odabranog otvorenog ruba (ili između dva otvorena brida) |
| {{ui:Ispuna mrežom}} | Ispunjava otvoreni rub s parnim brojem bridova rešetkom četverokuta |
| {{ui:Most}} | Spaja dvije odabrane otvorene petlje bridova plohama |
| {{ui:Žlijeb}} | Koliko oštri ostaju odabrani bridovi kad se mreža zagladi podjelom površine: pomaknite se od središta, koristite kotačić (koraci od 0.1) ili upišite 0 do 1. Ploča pokazuje žlijeb odabranih bridova i prima upisanu vrijednost. Žlijebljeni bridovi crtaju se magenta bojom |
| {{ui:Preokreni}}, {{ui:Zagladi}}, {{ui:Izbriši}} | Okreću plohe; zaglađuju vrhove prema susjedima; brišu prema načinu odabira |

Svaka je jedan korak poništavanja. Koordinate teksture, boje i težine prate nove plohe i vrhove.

## Ponovno mrežiranje

{{ui:Remesh}} ponovno izrađuje cijelu mrežu kao ravnomjerne trokute jedne veličine, zatražene kad ga pritisnete (manje je finije i sporije). Zatvara rupe, spaja dijelove koji se preklapaju i izjednačuje mrežu koju je oblikovanje rastegnulo. Oštri bridovi postaju vrlo malo zaobljeni. UV-ovi, boja i žlijebovi počinju iznova. Jedan korak poništavanja.

## Retopologija

Za izradu nove, čišće mreže preko detaljne (skulpture, skena) odaberite detaljnu pod {{ui:Retopologija}} › **Izradi na** u ploči, zatim:

- **Hvatanje pomaknutih točaka na nju:** točke koje pomičete i bridovi koje izvlačite slijeću na njezinu površinu.
- **Stavi odabrane točke na nju** odmah pomiče odabrane točke na nju (jedan korak poništavanja).
- **Prikaži bridove ove mreže sprijeda** crta mrežu koju gradite preko površine, da je vidite.

## Prilagodba zadnje radnje

Nakon {{ui:Umetni}}, {{ui:Zakosi}}, {{ui:Rez petljom}}, {{ui:Podijeli}}, {{ui:Zagladi}}, {{ui:Ispuna mrežom}} ili {{ui:Vrti}}, ploča prikazuje njezine postavke (širina, segmenti, profil, rezovi …). Promijenite jednu i radnja se ponovno izvodi od početka, i dalje kao jedan korak poništavanja.

## Tipke

| | Tipke guranja/povlačenja | Tipke modelara |
|---|---|---|
| Pomakni, zakreni, skaliraj | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvaput klizi) |
| Izvuci, umetni | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Izbriši | {{key:E}} ili {{key:Delete}} | {{key:X}} ili {{key:Delete}} |
| Žlijeb | {{key:Shift+C}} | {{key:Shift+E}} |
| Odaberi sve, ništa, obrni | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oboje | {{key:Ctrl+B}} zakosi, {{key:Ctrl+R}} rez petljom, {{key:K}} nož | isto, i {{key:F}} ispuni, {{key:M}} spoji, {{key:Ctrl+X}} otopi, {{key:L}} / {{key:Ctrl+L}} povezano, {{key:Alt+N}} preokreni, {{key:O}} proporcionalno, {{key:Shift+V}} klizanje vrha |

Vidi također [Mreže](topic:meshes), [Modifikatori na mreži](topic:modifiers) i [Još nije izrađeno](topic:not-built-yet).
