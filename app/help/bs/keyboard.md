---
title: Tasteri i radnje mišem
summary: Svaka tipkovna prečica, radnja mišem, gest touchpada i dodirni gest u ModelCraft-u, grupisani po tome što rade.
keywords: tastatura, prečice, tasteri, miš, touchpad, dodir, gestovi, spisak, ctrl, command, strelice
from: e2348957
---

Ovo su tasteri za guranje i povlačenje, oni s kojima ModelCraft počinje. Za drugi stil, vidi [Modeler tasteri](topic:keyboard#modeler-keys) dolje i [Postavke ModelCraft-a](topic:settings).

Prečice rade kad 3D prikaz ili dugme na alatnoj traci ima fokus. Ako ste upravo upisali u polje panela ili promijenili listu u {{ui:Style}}, prvo kliknite u 3D prikaz, inače će vaši tasteri otići u to polje. Vidi [Tasteri, miševi i touchpadovi](common:keys) za to kako se tasteri pišu na svakom računaru.

## Alati

| Taster | Alat |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} mjerenje |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Slova alata rade samo bez tastera za modifikaciju: {{key:Shift}} uz slovo ne radi ništa, osim dva ispod.

## Model i datoteka

| Taster | Radi |
|---|---|
| {{key:G}} | Napravi komponentu od odabranog |
| {{key:Shift+G}} | Napravi grupu od odabranog |
| {{key:Shift+Z}} | Zumiraj na sve (cijeli model) |
| {{key:Mod+Z}} | Poništi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:Mod+S}} | Spasi (preuzima `.modelcraft` datoteku) |
| {{key:Mod+O}} | Otvori model |
| {{key:Mod+A}} | Odaberi sve (u otvorenoj grupi, ako je jedna otvorena) |
| {{key:Mod+C}} | Kopiraj odabrano |
| {{key:Mod+X}} | Izreži odabrano |
| {{key:Mod+V}} | Zalijepi: kopija prati pokazivač, kliknite gdje treba da ide |
| {{key:Mod+Shift+V}} | Zalijepi na mjesto (odakle je kopirano) |
| {{key:Mod+D}} | Dupliraj: kopija se pomjera s pokazivačem, kliknite da je spustite |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabrano |
| {{key:PageDown}} / {{key:PageUp}} | Sljedeća / prethodna scena |
| {{key:F1}} | Otvara ili zatvara ovu pomoć (također {{ui:Help}} u traci aplikacije; {{key:Esc}} unutar pomoći je zatvara) |
| {{key:Ctrl+Shift+F}} | Režim ekrana: cijeli ekran, zatim skrivene trake, pa normalno (Control i na Mac-u) |

## Esc

{{key:Esc}} se vraća za jedan nivo svaki put kad ga pritisnete:

1. Otkazuje ono što alat radi (linija koja se crta, guranje ili povlačenje, pomjeranje). Sve se vraća.
2. Prebacuje na {{ui:Select}}.
3. Briše odabir.
4. Zatvara grupu koju uređujete.

Takođe zaustavlja scene koje se puštaju. U okviru za vrijednost, {{key:Esc}} briše ono što ste upisali i vraća na prikaz.

## Dok alat radi

| Taster | Radi |
|---|---|
| Cifra, ili jedan od `. , - ' " [ < * /` | Počinje upisivanje u okvir za vrijednost |
| {{key:Enter}} | Primjenjuje ono što ste upisali u okvir za vrijednost |
| {{key:Right}} | Zaključava na crvenu osu (pritisnite ponovo da otključate) |
| {{key:Left}} | Zaključava na zelenu osu |
| {{key:Up}} | Zaključava na plavu osu |
| {{key:Down}} | Zaključava paralelno s posljednjom ivicom preko koje ste prešli prije prvog klika |
| Držite {{key:Shift}} | Zadržava pravac na koji se hvatate, dok je držite |
| {{key:Ctrl}}, {{key:Mod}} ili {{key:Alt}} (Move) | Prebacuje između pomjeranja i kopiranja |

Zaključavanja strelicama rade u {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} i {{ui:Tape}} (kad mjerite od tačke), nakon prvog klika. {{ui:Push/pull}} uvijek se pomjera u pravcu plohe i nema zaključavanja. U {{ui:Rotate}} tasteri sa strelicama nakon prvog klika prikazuju poruku "Locked", ali ne mijenjaju okretanje.

## Strelice u drugo vrijeme

Kad alat nije usred nečega, tasteri sa strelicama pomjeraju kameru:

| Taster | Radi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitira |
| {{key:Shift}} uz strelicu | Pomjera pogled |

## Miš

| Radnja | Radi |
|---|---|
| Klik | Koristi trenutni alat |
| Pritisak, prevlačenje, otpuštanje | Isto kao dva klika (za alate za crtanje); odabir okvirom (za {{ui:Select}}); briše usput (za {{ui:Eraser}}) |
| Dvostruki klik | {{ui:Select}}: ploha s ivicama, ivica s plohama, otvara grupu; prazan prostor zatvara grupu. {{ui:Push/pull}}: ponavlja posljednju udaljenost |
| Trostruki klik | {{ui:Select}}: sve povezano |
| {{key:Shift}} + klik | {{ui:Select}}: uključuje ili isključuje iz odabira |
| {{key:Mod}} + klik | {{ui:Select}}: dodaje u odabir |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Select}}: uklanja iz odabira |
| Prevlačenje srednjim dugmetom | Orbitira, s bilo kojim alatom |
| {{key:Shift}} + prevlačenje srednjim dugmetom | Pomjera pogled, s bilo kojim alatom |
| Prevlačenje desnim dugmetom | Pomjera pogled, s bilo kojim alatom |
| Točkić | Zumira prema pokazivaču |

Nema kontekstnog menija desnim klikom.

## Touchpad

Što radi dvoprstni prevlak zavisi od {{ui:Settings}} › {{ui:ModelCraft}} › Pomicanje:

| Gest | Touchpad (ili izvedeno) | Točkić miša |
|---|---|---|
| Dvoprstni prevlak | Orbitira | Zumira prema pokazivaču |
| {{key:Shift}} + dvoprstni prevlak | Pomjera pogled | Zumira |
| Štipanje | Zumira prema pokazivaču | Zumira prema pokazivaču |
| Dvoprstni pritisak i prevlačenje (držan sekundarni klik) | Pomjera pogled | Pomjera pogled |

Vidi [Orbitiranje, pomjeranje i zumiranje](topic:orbit-pan-zoom#on-a-trackpad) i [Postavke ModelCraft-a](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler tasteri

Uz {{ui:Settings}} › {{ui:ModelCraft}} › Controls postavljeno na Modeler stil:

| Taster | Radi |
|---|---|
| {{key:W}} ili {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (ekstrudiranje) |
| {{key:T}} | {{ui:Tape}} mjerenje |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Odmah pomjera odabrano, od pokazivača |
| {{key:R}} | Rotira odabrano oko svoje sredine (plava osa) |
| {{key:S}} | Skalira odabrano oko sredine |
| {{key:X}} / {{key:Y}} / {{key:Z}} dok pomjerate ili rotirate | Zaključava crvenu / zelenu / plavu osu (ponovo za otključavanje) |
| Klik ili {{key:Enter}} | Spušta |
| {{key:Esc}} ili desni klik | Vraća na mjesto |
| {{key:Shift+D}} | Dupliraj i pomjeri kopiju |
| {{key:X}} ili {{key:Delete}} | Briše odabrano |
| {{key:A}} / {{key:Alt+A}} | Odaberi sve / ne odaberi ništa |
| {{key:Tab}} | Otvara odabranu grupu ili komponentu; ponovo zatvara |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Napravi grupu / napravi komponentu |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Pogled sprijeda / s desne / odozgo ({{key:Mod}} za pozadi / lijevo / odozdo) |
| Numpad {{key:5}} | Perspektiva uključena ili isključena |
| Numpad {{key:.}} | Zumiraj na odabrano |
| {{key:Home}} ili {{key:Shift+C}} | Zumiraj na sve |
| {{key:Shift+Tab}} | Hvatanje uključeno ili isključeno |
| Prevlačenje srednjim dugmetom / uz {{key:Shift}} / uz {{key:Mod}} | Orbitira / pomjera pogled / zumira |
| {{key:Alt}} + prevlačenje / {{key:Alt+Shift}} + prevlačenje | Orbitira / pomjera pogled (ne treba srednje dugme) |

Kopiranje, lijepljenje, poništavanje, spašavanje i otvaranje zadržavaju tastere navedene gore. Upisane vrijednosti, okvir za vrijednost i {{ui:Push/pull}} rade isto u oba stila.

## Ekran osjetljiv na dodir

| Gest | Radi |
|---|---|
| Dodir | Klik trenutnim alatom |
| Dvostruki dodir | Dvostruki klik |
| Pritisak, prevlačenje, podizanje | Isto kao pritisak, prevlačenje, otpuštanje mišem |
| Dva prsta: štipanje | Zumira |
| Dva prsta: pomjeranje zajedno | Pomjera pogled (Settings › ModelCraft › Touch screen ga može učiniti orbitiranjem) |
| Tri prsta: pomjeranje zajedno | Orbitira (pomjera pogled kad dva prsta orbitiraju) |
| Držite jedan prst mirno | Završava alat, kao {{key:Enter}}; kad se ništa ne dešava, zatim prevucite za orbitiranje |
| Drugi prst tokom radnje jednim prstom | Otkazuje tu radnju |
| Alat {{ui:Orbit}}, zatim prevlačenje jednim prstom | Orbitira |

Da upišete vrijednost na ekranu osjetljivom na dodir, dodirnite okvir za vrijednost dolje, upišite i pritisnite Enter (ili Idi) na tastaturi.

## Gdje je Pomjeri

{{ui:Move}} je u alatu {{ui:Move}}, taster {{key:M}}: odaberite što pomjerate, kliknite baznu tačku, pa drugu tačku ili upišite rastojanje. Vidi [Pomjeranje, kopiranje i pravljenje nizova](topic:move-copy).
