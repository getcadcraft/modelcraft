---
title: Uredi mrežu u radnom prostoru Mreža
summary: Odaberi vrhove, ivice i površine mreže, pomjeraj ih, i izvuci, uvuci, zaobli, presijeci, spoji, popuni i premosti ih, sa bilo kojim stilom tipki.
keywords: mreža, režim uređivanja, radni prostor mreže, vrh, vrhovi, ivica, ivice, površina, površine, izvuci, uvuci, zaobli, rez petlje, nož, razdvoji, zavrti, spoji, rastvori, popuni, mrežasto popunjavanje, most, dijeljenje, kliži, proporcionalno, opadanje, radni prostor
from: 92a372dd
---

Radni prostor **Mreža** uređuje [mrežu](topic:meshes) tačku po tačku: njene vrhove, ivice i površine. Geometrija guraj-povuci ostaje u radnom prostoru **Model**.

## Otvori ga

- Izaberi {{ui:Mreža}} na listi {{ui:Radni prostor}} lijevo na traci alata. Odabrana mreža se otvara za uređivanje; odabrana grupa ili komponenta se prvo pretvara u mrežu (jedan korak poništavanja).
- Ili dvaput klikni mrežu, ili, sa tipkama modelera, odaberi je i pritisni {{key:Tab}}.
- Bez odabira, panel nudi mreže za dodavanje: ravan, rešetka, kocka, krug, cilindar, konus, sfera, ico sfera i torus. Nova ide tamo gdje gleda pogled i otvara se za uređivanje.

{{ui:Nazad na Model}} (ili spisak, {{key:Tab}} sa tipkama modelera, {{key:Esc}} bez odabira sa tipkama guraj-povuci) vraća na Model sa odabranom mrežom. Dok je radni prostor Mreža otvoren, ostatak modela je izbljeđen, a alati za crtanje modela su sklonjeni.

## Odabir

| Radnja | Za |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Odaberi vrhove, ivice ili površine |
| Klik | Odaberi jedan; {{key:Shift}}+klik dodaje ili uklanja |
| Prevuci okvir | Odaberi šta je unutra i vidljivo; {{key:Shift}} dodaje, {{key:Ctrl}} uklanja |
| {{key:Alt}}+klik na ivicu, ili dvostruki klik na nju | Njena petlja ivica (petlja površina u režimu površina; cijela granica na otvorenoj ivici) |
| {{key:Ctrl}}+{{key:Alt}}+klik na ivicu | Njen prsten ivica |
| Trostruki klik | Sve što je spojeno uz nju |

Grupa {{ui:Odaberi}} takođe ima {{ui:Sve}}, {{ui:Povezano}}, {{ui:Petlja}}, {{ui:Prsten}}, {{ui:Više}} i {{ui:Manje}}.

## Pomjeri, rotiraj, skaliraj

{{ui:Pomjeri}}, {{ui:Rotiraj}} i {{ui:Skaliraj}} počinju od pokazivača: pomjeri ga, pa klikni ili pritisni {{key:Enter}} da spustiš odabir, ili {{key:Esc}} da otkažeš. {{key:X}}, {{key:Y}} ili {{key:Z}} (ili strelice) zaključavaju osu. Upiši udaljenost, ugao ili faktor za tačnu vrijednost; i [proračuni](topic:value-box#calculations) rade.

**Proporcionalno uređivanje** ({{ui:Proporcionalno}}, ili panel): vrhovi blizu odabira prate pomjeranje, a manje što su dalje, do dosega koji postaviš, sa opadanjem koje izabereš. Uključi {{ui:Samo duž mreže}} da se mjeri duž ivica, a ne pravo.

{{ui:Kliži}} pomjera odabranu petlju ivica duž ivica pored nje.

## Promijeni oblik

| Alat | Radi |
|---|---|
| {{ui:Izvuci}} | Izvlači odabrane površine duž njihove normale, sa novim bočnim površinama (ili pravi površine od otvorenih ivica granice). Upiši udaljenost |
| {{ui:Uvuci}} | Pojas unutar obrisa odabranih površina; pritisni {{key:I}} ponovo za svaku površinu posebno |
| {{ui:Zaobli}} | Zaobljuje odabrane ivice (ili, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vrhove) na zadatu širinu; točkić ili tipke plus i minus dodaju segmente za zaobljenu ivicu |
| {{ui:Novi rez petlje}} | Pokaži na ivicu: nove petlje preko prstena četvorougaonih površina; točkić određuje koliko; klikni da presiječeš |
| {{ui:Nož}} | Klikni tačke na ivicama ili uglovima; {{key:Enter}} presijeca ravno preko površina između njih, kako ih vidiš |
| {{ui:Razdvoji}} | Nacrtaj liniju na ekranu: odabrane površine (ili sve) se sijeku duž nje |
| {{ui:Zavrti}} | Okreće odabrane površine ili otvorene ivice oko plave ose u koracima (točkić ih određuje); pun obrt zatvara |
| {{ui:Dijeljenje}} | Dijeli odabrane ivice na dvoje; cijele površine postaju rešetka |
| {{ui:Spoji}} | Odabrani vrhovi postaju jedan, u svom središtu |
| {{ui:Rastvori}} | Uklanja odabir, ali čuva površinu: površine se spajaju |
| {{ui:Popuni}} | Površina preko odabrane otvorene granice (ili između dvije otvorene ivice) |
| {{ui:Mrežasto popunjavanje}} | Popunjava otvorenu granicu sa parnim brojem ivica mrežom četvorouglova |
| {{ui:Most}} | Spaja dvije odabrane otvorene petlje ivica površinama |
| {{ui:Žlijeb}} | Koliko oštre ostaju odabrane ivice kad se mreža zagladi površinom dijeljenja: pomjeri od središta, koristi točkić (koraci od 0.1) ili upiši 0 do 1. Panel pokazuje žlijeb odabranih ivica i prima upisanu vrijednost. Ivice sa žlijebom su obojene magentom |
| {{ui:Okretanje}}, {{ui:Zaglađivanje}}, {{ui:Izbriši}} | Okreće površine, zaglađuje vrhove prema susjedima, briše prema režimu odabira |

Svaka je jedan korak poništavanja. Koordinate teksture, boje i težine prelaze na nove površine i vrhove.

## Ponovo mrežiraj

{{ui:Ponovo mrežiraj}} pravi cijelu mrežu iznova kao ravnomjerne trouglove jedne veličine, zatraženo kad pritisneš (manje je finije i sporije). Zatvara rupe, spaja dijelove koji se preklapaju i izjednačava mrežu koju je oblikovanje rastegnulo. Oštre ivice dobiju vrlo malo zaobljenje. UV-ovi, boja i žlijebovi počinju iznova. Jedan korak poništavanja.

## Retopologija

Da napraviš novu, čišću mrežu preko detaljne (skulpture, skena), u panelu izaberi detaljnu pod {{ui:Retopologija}} › **Gradi na**, pa:

- **Priljubi pomjerene tačke na nju:** tačke koje pomjeriš i ivice koje izvučeš sjedaju na njenu površinu.
- **Stavi odabrane tačke na nju** odmah pomjera odabrane tačke na nju (jedan korak poništavanja).
- **Prikaži ivice ove mreže ispred** crta mrežu koju gradiš preko površine, da je vidiš.

## Podesi zadnju operaciju

Poslije {{ui:Uvuci}}, {{ui:Zaobli}}, {{ui:Novi rez petlje}}, {{ui:Dijeljenje}}, {{ui:Zaglađivanje}}, {{ui:Mrežasto popunjavanje}} ili {{ui:Zavrti}}, panel pokazuje njene postavke (širina, segmenti, profil, rezovi …). Promijeni jednu i operacija se ponovo radi od početka, i dalje kao jedan korak poništavanja.

## Tipke

| | Tipke guraj-povuci | Tipke modelera |
|---|---|---|
| Pomjeri, rotiraj, skaliraj | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvaput kliže) |
| Izvuci, uvuci | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Izbriši | {{key:E}} ili {{key:Delete}} | {{key:X}} ili {{key:Delete}} |
| Žlijeb | {{key:Shift+C}} | {{key:Shift+E}} |
| Odaberi sve, ništa, invertuj | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oboje | {{key:Ctrl+B}} zaobli, {{key:Ctrl+R}} rez petlje, {{key:K}} nož | isto, i {{key:F}} popuni, {{key:M}} spoji, {{key:Ctrl+X}} rastvori, {{key:L}} / {{key:Ctrl+L}} povezano, {{key:Alt+N}} okreni, {{key:O}} proporcionalno, {{key:Shift+V}} klizanje vrha |

Pogledaj također [Mreže](topic:meshes), [Modifikatori na mreži](topic:modifiers) i [Još nije napravljeno](topic:not-built-yet).
