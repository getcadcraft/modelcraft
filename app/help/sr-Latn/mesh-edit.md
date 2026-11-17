---
title: Uredi mrežu u radnom prostoru Mreža
summary: Izaberi temena, ivice i površine mreže, pomeraj ih, i izvlači, uvlači, kosi, seci, stapaj, popunjavaj i premošćuj ih, sa bilo kojim stilom tastera.
keywords: mreža, režim uređivanja, radni prostor mreže, teme, temena, ivica, ivice, površina, površine, izvlačenje, uvlačenje, zakošavanje, presek petlje, nož, preseci, okretanje, stapanje, rastvori, popuni, popuni mrežom, premosti, podeli, klizanje, proporcionalna izmena, opadanje, radni prostor
from: 92a372dd
---

Radni prostor **Mreža** uređuje [mrežu](topic:meshes) tačku po tačku: njena temena, ivice i površine. Geometrija guraj-povuci ostaje u radnom prostoru **Model**.

## Otvorite

- Izaberite {{ui:Mreža}} u listi {{ui:Radni prostor}} s leve strane trake alata. Izabrana mreža se otvara za uređivanje; izabrana grupa ili komponenta se prvo pretvara u mrežu (jedan korak opoziva).
- Ili dvaput kliknite mrežu, ili, sa tasterima modelera, izaberite je i pritisnite {{key:Tab}}.
- Bez izbora, panel nudi mreže za dodavanje: ravan, pravilnu mrežu, kocku, krug, cilindar, konus, sferu, ico sferu i torus. Nova se pojavi tamo gde prikaz gleda i otvara se za uređivanje.

{{ui:Nazad na Model}} (ili lista, {{key:Tab}} sa tasterima modelera, {{key:Esc}} bez izbora sa tasterima guraj-povuci) vraća na Model sa izabranom mrežom. Dok je radni prostor Mreža otvoren, ostatak modela je izbledeo, a alati crtanja Modela su sklonjeni.

## Izbor

| Radnja | Za |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Izabere temena, ivice ili površine |
| Klik | Izabere jedno; {{key:Shift}}+klik dodaje ili uklanja |
| Prevucite okvir | Izabere ono što je unutra i vidljivo; {{key:Shift}} dodaje, {{key:Ctrl}} uklanja |
| {{key:Alt}}+klik na ivicu, ili dvostruki klik na nju | Njenu petlju ivica (petlju površina u režimu površina; celu ivicu na otvorenoj ivici) |
| {{key:Ctrl}}+{{key:Alt}}+klik na ivicu | Njen prsten ivica |
| Trostruki klik | Sve što je spojeno sa njom |

Grupa {{ui:Izaberi}} takođe ima {{ui:Sve}}, {{ui:Povezano}}, {{ui:Petlja}}, {{ui:Prsten}}, {{ui:Više}} i {{ui:Manje}}.

## Pomeranje, rotiranje, skaliranje

{{ui:Premesti}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} počinju od pokazivača: pomerite ga, pa kliknite ili pritisnite {{key:Enter}} da spustite izbor, ili {{key:Esc}} da otkažete. {{key:X}}, {{key:Y}} ili {{key:Z}} (ili strelice) zaključavaju osu. Ukucajte rastojanje, ugao ili faktor za tačnu vrednost; [proračuni](topic:value-box#calculations) takođe rade.

**Proporcionalna izmena** ({{ui:Proporcionalno}}, ili panel): temena blizu izbora prate pomeranje, a manje što su dalje, do dosega koji podesite, sa opadanjem koje izaberete. Uključite {{ui:Samo duž mreže}} da merite duž ivica, a ne pravo.

{{ui:Kliznu}} pomera izabranu petlju ivica duž susednih ivica.

## Promena oblika

| Alat | Radi |
|---|---|
| {{ui:Izvuci}} | Izvlači izabrane površine duž njihove normale, sa novim bočnim površinama (ili pravi površine od otvorenih ivica na obodu). Ukucajte rastojanje |
| {{ui:Uvuci}} | Pojas unutar obrisa izabranih površina; pritisnite {{key:I}} ponovo za svaku površinu posebno |
| {{ui:Zakosi}} | Seče izabrane ivice (ili, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, temena) na zadatoj širini; točkić ili tasteri plus i minus dodaju segmente za zaobljenu ivicu |
| {{ui:Presek petlje}} | Pokažite na ivicu: nove petlje preko prstena četvorouglih površina; točkić određuje koliko; klik seče |
| {{ui:Nož}} | Kliknite tačke na ivicama ili uglovima; {{key:Enter}} seče pravo preko površina između njih, onako kako ih vidite |
| {{ui:Preseci}} | Nacrtajte liniju na ekranu: izabrane površine (ili sve) se seku duž nje |
| {{ui:Okreni}} | Okreće izabrane površine ili otvorene ivice oko plave ose u koracima (točkić ih određuje); pun obrt zatvara |
| {{ui:Podeli}} | Seče izabrane ivice na pola; cele površine postaju mreža |
| {{ui:Stopi}} | Izabrana temena postaju jedno, u njihovom središtu |
| {{ui:Rastvori}} | Uklanja izbor, ali zadržava površinu: površine se spajaju |
| {{ui:Popuni}} | Površina preko izabranog otvorenog oboda (ili između dve otvorene ivice) |
| {{ui:Popuni mrežom}} | Popunjava otvoreni obod sa parnim brojem ivica mrežom četvorouglova |
| {{ui:Premosti}} | Spaja dve izabrane otvorene petlje ivica površinama |
| {{ui:Nabor}} | Koliko oštre ostaju izabrane ivice kad se mreža zaglađuje površinom podele: pomerite od središta, koristite točkić (koraci od 0.1) ili ukucajte vrednost od 0 do 1. Panel prikazuje nabor izabranih ivica i prima ukucanu vrednost. Ivice sa naborom se crtaju magentom |
| {{ui:Obrni}}, {{ui:Zaglađivanje}}, {{ui:Izbriši}} | Okreću površine naopako; zaglađuju temena prema susedima; brišu prema režimu izbora |

Svaka je jedan korak opoziva. Koordinate teksture, boje i težine prelaze na nove površine i temena.

## Ponovno mreženje

{{ui:Ponovo mrežiraj}} pravi celu mrežu iznova kao ravnomerne trouglove jedne veličine, zatražene kad je pritisnete (manje je finije i sporije). Zatvara rupe, spaja delove koji se preklapaju i ujednačava mrežu koju je vajanje rastegnulo. Oštre ivice izlaze malo zaobljene. UV-ovi, boja i nabori počinju iznova. Jedan korak opoziva.

## Retopologija

Da napravite novu, čišću mrežu preko detaljne (vajanje, skeniranje), izaberite detaljnu pod {{ui:Retopologija}} › **Gradi na** u panelu, pa:

- **Prikači pomerene tačke na nju:** tačke koje pomerate i ivice koje izvlačite sleću na njenu površinu.
- **Stavi izabrane tačke na nju** pomera izabrane tačke na nju odmah (jedan korak opoziva).
- **Prikaži ivice ove mreže ispred** crta mrežu koju gradite preko površine, da je vidite.

## Podesi poslednju operaciju

Posle {{ui:Uvuci}}, {{ui:Zakosi}}, {{ui:Presek petlje}}, {{ui:Podeli}}, {{ui:Zaglađivanje}}, {{ui:Popuni mrežom}} ili {{ui:Okreni}}, panel prikazuje njena podešavanja (širina, segmenti, profil, preseci…). Promenite jedno i operacija se ponovo izvodi od početka, i dalje kao jedan korak opoziva.

## Tasteri

| | Tasteri guraj-povuci | Tasteri modelera |
|---|---|---|
| Premesti, rotiraj, skaliraj | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvaput klizi) |
| Izvuci, uvuci | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Izbriši | {{key:E}} ili {{key:Delete}} | {{key:X}} ili {{key:Delete}} |
| Nabor | {{key:Shift+C}} | {{key:Shift+E}} |
| Izaberi sve, poništi izbor, invertuj | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oboje | {{key:Ctrl+B}} zakos, {{key:Ctrl+R}} presek petlje, {{key:K}} nož | isto, i {{key:F}} popuni, {{key:M}} stopi, {{key:Ctrl+X}} rastvori, {{key:L}} / {{key:Ctrl+L}} povezano, {{key:Alt+N}} obrni, {{key:O}} proporcionalno, {{key:Shift+V}} klizanje temena |

Videti još [Mreže](topic:meshes), [Modifikatori na mreži](topic:modifiers) i [Još nije napravljeno](topic:not-built-yet).
