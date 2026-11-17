---
title: Tipke i radnje mišem
summary: Svaka tipkovna prečica, radnja mišem, gesta na touchpadu i gesta na dodirnom zaslonu u ModelCraftu, grupirano prema tome što rade.
keywords: tipkovnica, prečaci, tipke, tipkanje, miš, touchpad, dodir, geste, podsjetnik, ctrl, naredba, strelice
from: e2348957
---

Ovo su tipke potisni/povuci, one s kojima ModelCraft počinje. Za drugi stil vidi [Tipke Modeler](topic:keyboard#modeler-keys) niže i [Postavke ModelCrafta](topic:settings).

Prečaci rade kad su 3D prikaz ili gumb na alatnoj traci u fokusu. Ako ste upravo upisali u polje na panelu ili promijenili popis u {{ui:Stil}}, najprije kliknite u 3D prikaz, inače tipke idu u to polje. Vidi [Tipke, miševi i touchpadovi](common:keys) za to kako se tipke zapisuju na svakom računalu.

## Alati

| Tipka | Alat |
|---|---|
| {{key:Space}} | {{ui:Odaberi}} |
| {{key:L}} | {{ui:Linija}} |
| {{key:R}} | {{ui:Pravokutnik}} |
| {{key:C}} | {{ui:Kružnica}} |
| {{key:N}} | {{ui:Poligon}} |
| {{key:A}} | {{ui:Luk}} |
| {{key:F}} | {{ui:Odmakni}} |
| {{key:B}} | {{ui:Oboji}} |
| {{key:P}} | {{ui:Potisni/povuci}} |
| {{key:M}} | {{ui:Pomakni}} |
| {{key:Q}} | {{ui:Zakreni}} |
| {{key:S}} | {{ui:Skaliraj}} |
| {{key:E}} | {{ui:Gumica}} |
| {{key:T}} | {{ui:Mjerna vrpca}} za mjerenje |
| {{key:D}} | {{ui:Kota}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zumiranje}} |

Slova za alate rade samo bez tipki za promjenu: {{key:Shift}} uz slovo ne čini ništa, osim dvije tipke ispod.

## Model i datoteka

| Tipka | Radi |
|---|---|
| {{key:G}} | Napravi komponentu od odabira |
| {{key:Shift+G}} | Napravi grupu od odabira |
| {{key:Shift+Z}} | Zumiraj opseg (cijeli model) |
| {{key:Mod+Z}} | Poništi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:Mod+S}} | Spremi (preuzima `.modelcraft` datoteku) |
| {{key:Mod+O}} | Otvori model |
| {{key:Mod+A}} | Odaberi sve (u otvorenoj grupi, ako je otvorena) |
| {{key:Mod+C}} | Kopiraj odabir |
| {{key:Mod+X}} | Izreži odabir |
| {{key:Mod+V}} | Zalijepi: kopija ide za pokazivačem, kliknite gdje ide |
| {{key:Mod+Shift+V}} | Zalijepi na isto mjesto (odakle je kopirano) |
| {{key:Mod+D}} | Dupliciraj: kopija se pomiče s pokazivačem, kliknite da je spustite |
| {{key:Delete}} ili {{key:Backspace}} | Izbriši odabir |
| {{key:PageDown}} / {{key:PageUp}} | Sljedeća / prethodna scena |
| {{key:F1}} | Otvori ili zatvori ovu pomoć (također {{ui:Pomoć}} u traci aplikacije; {{key:Esc}} unutar pomoći je zatvara) |
| {{key:Ctrl+Shift+F}} | Način zaslona: cijeli zaslon, zatim sakrivene trake, zatim normalno (i na Macu Control) |

## Esc

{{key:Esc}} se vraća za jednu razinu svaki put kad ga pritisnete:

1. Poništava ono što alat trenutačno radi (crtanje linije, potiskivanje/povlačenje, pomicanje). Sve se vraća.
2. Prebacuje na {{ui:Odaberi}}.
3. Briše odabir.
4. Zatvara grupu koju uređujete.

Također zaustavlja reprodukciju scena. U polju vrijednosti {{key:Esc}} briše ono što ste upisali i vraća na prikaz.

## Dok alat radi

| Tipka | Radi |
|---|---|
| Znamenka ili jedan od znakova `. , - ' " [ < * /` | Počinje upisivanje u polje vrijednosti |
| {{key:Enter}} | Primjenjuje upisano u polju vrijednosti |
| {{key:Right}} | Zaključava na crvenu os (pritisnite ponovno za otključavanje) |
| {{key:Left}} | Zaključava na zelenu os |
| {{key:Up}} | Zaključava na plavu os |
| {{key:Down}} | Zaključava paralelno s posljednjim bridom preko kojeg ste prešli prije prvog klika |
| Držite {{key:Shift}} | Zadržava smjer na koji ste uhvaćeni dok držite |
| {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}} (Pomakni) | Prebacuje između pomicanja i kopiranja |

Zaključavanja strelicama rade u {{ui:Linija}}, {{ui:Pravokutnik}}, {{ui:Kružnica}}, {{ui:Poligon}}, {{ui:Pomakni}}, {{ui:Skaliraj}} i {{ui:Mjerna vrpca}} (kad mjerite od točke), nakon prvog klika. {{ui:Potisni/povuci}} uvijek se pomiče duž smjera plohe i nema zaključavanja. U {{ui:Zakreni}} strelice nakon prvog klika prikazuju poruku "Zaključano", ali ne mijenjaju zakret.

## Strelice u drugim trenucima

Kad alat nije usred nečega, strelice pomiču kameru:

| Tipka | Radi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | {{ui:Orbit}} |
| {{key:Shift}} sa strelicom | {{ui:Pan}} |

## Miš

| Radnja | Radi |
|---|---|
| Klik | Koristi trenutačni alat |
| Pritisnite, povucite, otpustite | Isto kao dva klika (za alate za crtanje); odabir okvirom (za {{ui:Odaberi}}); brisanje usput (za {{ui:Gumica}}) |
| Dvostruki klik | {{ui:Odaberi}}: ploha s bridovima, brid s plohama, otvara grupu; prazan prostor zatvara grupu. {{ui:Potisni/povuci}}: ponavlja posljednju udaljenost |
| Trostruki klik | {{ui:Odaberi}}: sve povezano |
| {{key:Shift}} + klik | {{ui:Odaberi}}: uključuje i isključuje iz odabira |
| {{key:Mod}} + klik | {{ui:Odaberi}}: dodaje u odabir |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Odaberi}}: uklanja iz odabira |
| Povlačenje srednjom tipkom | Orbit, s bilo kojim alatom |
| {{key:Shift}} + povlačenje srednjom tipkom | Pan, s bilo kojim alatom |
| Povlačenje desnom tipkom | Pan, s bilo kojim alatom |
| Kotačić | Zumiranje prema pokazivaču |

Nema izbornika na desni klik.

## Touchpad

Što radi dvoprsto prevlačenje ovisi o {{ui:Postavke}} › {{ui:ModelCraft}} › Pomicanje:

| Gesta | Touchpad (ili izvedeno) | Kotačić miša |
|---|---|---|
| Dvoprsto prevlačenje | Orbit | Zumiranje prema pokazivaču |
| {{key:Shift}} + dvoprsto prevlačenje | Pan | Zumiranje |
| Stiskanje | Zumiranje prema pokazivaču | Zumiranje prema pokazivaču |
| Dvoprsto pritiskanje i povlačenje (sekundarni klik zadržan) | Pan | Pan |

Vidi [Orbit, pomicanje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad) i [Postavke ModelCrafta](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tipke Modeler

Uz {{ui:Postavke}} › {{ui:ModelCraft}} › Upravljanje postavljeno na stil Modeler:

| Tipka | Radi |
|---|---|
| {{key:W}} ili {{key:Space}} | {{ui:Odaberi}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linija}} / {{ui:Pravokutnik}} / {{ui:Kružnica}} / {{ui:Poligon}} |
| {{key:E}} | {{ui:Potisni/povuci}} (izvlačenje) |
| {{key:T}} | {{ui:Mjerna vrpca}} za mjerenje |
| {{key:D}} | {{ui:Kota}} |
| {{key:G}} | Odmah pomiče odabir, od pokazivača |
| {{key:R}} | Zakreće odabir oko njegove sredine (plava os) |
| {{key:S}} | Skalira odabir oko njegove sredine |
| {{key:X}} / {{key:Y}} / {{key:Z}} dok pomičete ili zakrećete | Zaključava crvenu / zelenu / plavu os (ponovno za otključavanje) |
| Klik ili {{key:Enter}} | Spušta ga na mjesto |
| {{key:Esc}} ili desni klik | Vraća ga na staro mjesto |
| {{key:Shift+D}} | Dupliciraj i pomakni kopiju |
| {{key:X}} ili {{key:Delete}} | Izbriši odabir |
| {{key:A}} / {{key:Alt+A}} | Odaberi sve / ništa |
| {{key:Tab}} | Otvori odabranu grupu ili komponentu; ponovno za zatvaranje |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Napravi grupu / napravi komponentu |
| Numerička tipkovnica {{key:1}} / {{key:3}} / {{key:7}} | Prednji / desni / gornji pogled ({{key:Mod}} za stražnji / lijevi / donji) |
| Numerička tipkovnica {{key:5}} | Perspektiva uključena ili isključena |
| Numerička tipkovnica {{key:.}} | Zumiraj na odabir |
| {{key:Home}} ili {{key:Shift+C}} | Zumiraj opseg |
| {{key:Shift+Tab}} | Hvatanje uključeno ili isključeno |
| Povlačenje srednjom tipkom / s {{key:Shift}} / s {{key:Mod}} | Orbit / Pan / Zumiranje |
| {{key:Alt}} + povlačenje / {{key:Alt+Shift}} + povlačenje | Orbit / Pan (bez srednje tipke) |

Kopiranje, lijepljenje, poništavanje, spremanje i otvaranje zadržavaju tipke navedene gore. Upisane vrijednosti, polje vrijednosti i {{ui:Potisni/povuci}} rade jednako u oba stila.

## Dodirni zaslon

| Gesta | Radi |
|---|---|
| Dodir | Klik s trenutačnim alatom |
| Dvostruki dodir | Dvostruki klik |
| Pritisnite, povucite, podignite | Isto kao pritisak, povlačenje i otpuštanje mišem |
| Dva prsta: stiskanje | Zumiranje |
| Dva prsta: pomicanje zajedno | Pan ({{ui:Postavke}} › {{ui:ModelCraft}} › Dodirni zaslon može to učiniti Orbit) |
| Tri prsta: pomicanje zajedno | Orbit (Pan kad dva prsta okreću) |
| Držite jedan prst mirno | Završava alat, kao {{key:Enter}}; kad se ništa ne događa, zatim povucite za Orbit |
| Drugi prst tijekom radnje jednim prstom | Poništava tu radnju |
| Alat {{ui:Orbit}}, zatim povucite jedan prst | Orbit |

Za upisivanje vrijednosti na dodirnom zaslonu dodirnite polje vrijednosti na dnu, upišite i pritisnite tipku Enter (ili Go) na tipkovnici.

## Gdje je Pomakni

{{ui:Pomakni}} je u alatu {{ui:Pomakni}}, tipka {{key:M}}: odaberite što pomaknuti, kliknite baznu točku, zatim drugu točku ili upišite udaljenost. Vidi [Pomicanje, kopiranje i nizovi](topic:move-copy).
