---
title: Tasteri i radnje mišem
summary: Svaka prečica na tastaturi, radnja mišem, gest na tačpadu i dodirni gest u ModelCraft-u, grupisano prema tome šta rade.
keywords: tastatura, prečice, tasteri, miš, tačpad, dodir, gestovi, podsetnik, ctrl, komanda, strelice, pomeranje, točkić
from: e2348957
---

Ovo su tasteri za guraj/vuci, oni s kojima ModelCraft počinje. Za drugi stil vidi [Modeler tasteri](topic:keyboard#modeler-keys) dole i [Podešavanja programa ModelCraft](topic:settings).

Prečice rade kad 3D prikaz ili dugme na alatnoj traci ima fokus. Ako ste upravo kucali u polje panela ili promenili listu u {{ui:Stil}}, prvo kliknite u 3D prikaz, inače vaši tasteri idu u to polje. Vidi [Tasteri, miševi i tačpadovi](common:keys) za to kako se tasteri pišu na svakom računaru.

## Alatke

| Taster | Alatka |
|---|---|
| {{key:Space}} | {{ui:Izaberi}} |
| {{key:L}} | {{ui:Linija}} |
| {{key:R}} | {{ui:Pravougaonik}} |
| {{key:C}} | {{ui:Krug}} |
| {{key:N}} | {{ui:Poligon}} |
| {{key:A}} | {{ui:Luk}} |
| {{key:F}} | {{ui:Odmak}} |
| {{key:B}} | {{ui:Boji}} |
| {{key:P}} | {{ui:Guraj/vuci}} |
| {{key:M}} | {{ui:Premesti}} |
| {{key:Q}} | {{ui:Rotiraj}} |
| {{key:S}} | {{ui:Skaliraj}} |
| {{key:E}} | {{ui:Gumica}} |
| {{key:T}} | {{ui:Merna traka}} za merenje |
| {{key:D}} | {{ui:Kota}} |
| {{key:O}} | {{ui:Orbitiraj}} |
| {{key:H}} | {{ui:Pomeri pogled}} |
| {{key:Z}} | {{ui:Zumiraj}} |

Slova alatki rade samo bez tastera za izmenu: {{key:Shift}} sa slovom ne radi ništa, osim dva ispod.

## Model i datoteka

| Taster | Radi |
|---|---|
| {{key:G}} | Napravi komponentu od izbora |
| {{key:Shift+G}} | Napravi grupu od izbora |
| {{key:Shift+Z}} | Zumiraj na sve (ceo model) |
| {{key:Mod+Z}} | Opozovi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:Mod+S}} | Sačuvaj (preuzima `.modelcraft` fajl) |
| {{key:Mod+O}} | Otvori model |
| {{key:Mod+A}} | Izaberi sve (u otvorenoj grupi, ako je neka otvorena) |
| {{key:Mod+C}} | Kopiraj izbor |
| {{key:Mod+X}} | Iseci izbor |
| {{key:Mod+V}} | Nalepi: kopija prati pokazivač, kliknite gde ide |
| {{key:Mod+Shift+V}} | Nalepi na mestu (odakle je kopirano) |
| {{key:Mod+D}} | Dupliraj: kopija se kreće s pokazivačem, kliknite da je spustite |
| {{key:Delete}} ili {{key:Backspace}} | Izbriši izbor |
| {{key:PageDown}} / {{key:PageUp}} | Sledeća / prethodna scena |
| {{key:F1}} | Otvori ili zatvori ovu pomoć (takođe {{ui:Pomoć}} na traci aplikacije; {{key:Esc}} unutar pomoći je zatvara) |
| {{key:Ctrl+Shift+F}} | Režim ekrana: ceo ekran, zatim sakrivene trake, zatim normalno (Control i na Mac-u) |

## Esc

{{key:Esc}} vraća za jedan nivo pri svakom pritisku:

1. Poništava ono što alat u tom trenutku radi (liniju koja se crta, guranje/vučenje, premeštanje). Sve se vraća.
2. Prebacuje na {{ui:Izaberi}}.
3. Briše izbor.
4. Zatvara grupu koju uređujete.

Zaustavlja i puštanje scena. U polju za vrednost, {{key:Esc}} briše ono što ste ukucali i vraća na prikaz.

## Dok alat radi

| Taster | Radi |
|---|---|
| Cifra, ili jedan od `. , - ' " [ < * /` | Počinje kucanje u polju za vrednost |
| {{key:Enter}} | Primenjuje ono što ste ukucali u polju za vrednost |
| {{key:Right}} | Zaključava na crvenu osu (ponovo pritisnite za otključavanje) |
| {{key:Left}} | Zaključava na zelenu osu |
| {{key:Up}} | Zaključava na plavu osu |
| {{key:Down}} | Zaključava paralelno s poslednjom ivicom preko koje ste prešli pre prvog klika |
| Držite {{key:Shift}} | Drži pravac na koji ste uhvaćeni, dok je držite |
| {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}} (Premesti) | Prebacuje između premeštanja i kopiranja |

Zaključavanja strelicama rade u {{ui:Linija}}, {{ui:Pravougaonik}}, {{ui:Krug}}, {{ui:Poligon}}, {{ui:Premesti}}, {{ui:Skaliraj}} i {{ui:Merna traka}} (kad merite od tačke), posle prvog klika. {{ui:Guraj/vuci}} uvek se kreće duž pravca površi i nema zaključavanja. U {{ui:Rotiraj}} strelice posle prvog klika prikazuju poruku „Zaključano“, ali ne menjaju okretanje.

## Strelice u drugim prilikama

Kad nijedan alat nije usred nečega, strelice pomeraju kameru:

| Taster | Radi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitira |
| {{key:Shift}} sa strelicom | Pomera pogled |

## Miš

| Radnja | Radi |
|---|---|
| Klik | Koristi trenutni alat |
| Pritisni, prevuci, otpusti | Isto kao dva klika (za alate za crtanje); izbor pravougaonikom (za {{ui:Izaberi}}); briše usput (za {{ui:Gumica}}) |
| Dvostruki klik | {{ui:Izaberi}}: površ sa svojim ivicama, ivica sa svojim površima, otvara grupu; prazan prostor zatvara grupu. {{ui:Guraj/vuci}}: ponavlja poslednju daljinu |
| Trostruki klik | {{ui:Izaberi}}: sve povezano |
| {{key:Shift}} + klik | {{ui:Izaberi}}: uključuje i isključuje iz izbora |
| {{key:Mod}} + klik | {{ui:Izaberi}}: dodaje u izbor |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Izaberi}}: uklanja iz izbora |
| Prevlačenje srednjim dugmetom | Orbitira, sa bilo kojim alatom |
| {{key:Shift}} + prevlačenje srednjim dugmetom | Pomera pogled, sa bilo kojim alatom |
| Prevlačenje desnim dugmetom | Pomera pogled, sa bilo kojim alatom |
| Točkić miša | Zumira ka pokazivaču |

Nema kontekstnog menija desnim klikom.

## Tačpad

Šta radi dvoprstni pomak zavisi od {{ui:Podešavanja}} › {{ui:ModelCraft}} › Pomeranje:

| Gest | Tačpad (ili izračunato) | Točkić miša |
|---|---|---|
| Dvoprstni pomak | Orbitira | Zumira ka pokazivaču |
| {{key:Shift}} + dvoprstni pomak | Pomera pogled | Zumira |
| Štipanje | Zumira ka pokazivaču | Zumira ka pokazivaču |
| Dvoprstni pritisak i prevlačenje (držan sekundarni klik) | Pomera pogled | Pomera pogled |

Vidi [Orbitiranje, pomeranje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad) i [Podešavanja programa ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler tasteri

Uz {{ui:Podešavanja}} › {{ui:ModelCraft}} › Upravljanje podešeno na Modeler stil:

| Taster | Radi |
|---|---|
| {{key:W}} ili {{key:Space}} | {{ui:Izaberi}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linija}} / {{ui:Pravougaonik}} / {{ui:Krug}} / {{ui:Poligon}} |
| {{key:E}} | {{ui:Guraj/vuci}} (izvlačenje) |
| {{key:T}} | {{ui:Merna traka}} za merenje |
| {{key:D}} | {{ui:Kota}} |
| {{key:G}} | Odmah premesti izbor, od pokazivača |
| {{key:R}} | Rotira izbor oko njegove sredine (plava osa) |
| {{key:S}} | Skalira izbor oko njegove sredine |
| {{key:X}} / {{key:Y}} / {{key:Z}} dok premeštate ili rotirate | Zaključava crvenu / zelenu / plavu osu (ponovo za otključavanje) |
| Klik ili {{key:Enter}} | Spušta ga |
| {{key:Esc}} ili desni klik | Vraća ga nazad |
| {{key:Shift+D}} | Dupliraj i pomeri kopiju |
| {{key:X}} ili {{key:Delete}} | Briše izbor |
| {{key:A}} / {{key:Alt+A}} | Izaberi sve / ne izaberi ništa |
| {{key:Tab}} | Otvara izabranu grupu ili komponentu; ponovo je zatvara |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Napravi grupu / napravi komponentu |
| Numerička tastatura {{key:1}} / {{key:3}} / {{key:7}} | Prednji / desni / gornji pogled ({{key:Mod}} za zadnji / levi / donji) |
| Numerička tastatura {{key:5}} | Perspektiva uključena ili isključena |
| Numerička tastatura {{key:.}} | Zumira na izbor |
| {{key:Home}} ili {{key:Shift+C}} | Zumiraj na sve |
| {{key:Shift+Tab}} | Hvatanje uključeno ili isključeno |
| Prevlačenje srednjim dugmetom / sa {{key:Shift}} / sa {{key:Mod}} | Orbitira / pomera pogled / zumira |
| {{key:Alt}} + prevlačenje / {{key:Alt+Shift}} + prevlačenje | Orbitira / pomera pogled (bez srednjeg dugmeta) |

Kopiranje, nalepljivanje, opozivanje, čuvanje i otvaranje zadržavaju tastere navedene gore. Unete vrednosti, polje za vrednost i {{ui:Guraj/vuci}} rade isto u oba stila.

## Ekran osetljiv na dodir

| Gest | Radi |
|---|---|
| Dodir | Klik sa trenutnim alatom |
| Dvostruki dodir | Dvostruki klik |
| Pritisni, prevuci, podigni | Isto kao pritisni, prevuci, otpusti mišem |
| Dva prsta: štipanje | Zumira |
| Dva prsta: pomeranje zajedno | Pomera pogled ({{ui:Podešavanja}} › {{ui:ModelCraft}} › Ekran osetljiv na dodir može da ga načini Orbitiranjem) |
| Tri prsta: pomeranje zajedno | Orbitira (Pomera pogled kad dva prsta orbitiraju) |
| Držite jedan prst mirno | Završava alat, kao {{key:Enter}}; kad se ništa ne dešava, zatim prevucite da orbitirate |
| Drugi prst tokom radnje jednim prstom | Poništava tu radnju |
| Alat {{ui:Orbitiraj}}, pa prevucite jedan prst | Orbitira |

Da unesete vrednost na ekranu osetljivom na dodir, dodirnite polje za vrednost dole, ukucajte i pritisnite Enter (ili Go) na tastaturi.

## Gde se nalazi Premesti

{{ui:Premesti}} je u alatki {{ui:Premesti}}, taster {{key:M}}: izaberite šta da premestite, kliknite početnu tačku, pa drugu tačku ili upišite rastojanje. Vidi [Premeštanje, kopiranje i nizovi](topic:move-copy).
