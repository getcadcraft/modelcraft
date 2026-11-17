---
title: Orbitiraj, pomeri pogled i zumiraj
summary: Krećite se oko modela mišem, touchpad-om, ekranom osetljivim na dodir ili tastaturom, i skočite na standardne poglede.
keywords: orbitiraj, pomeri pogled, zumiraj, dug pritisak, tri prsta, dva prsta, dodir, navigacija, kamera, pogled, rotiraj pogled, touchpad, štipanje, srednje dugme, zumiraj sve, perspektiva, paralelno, pogled odozgo, iso
from: 10d4d33a
---

Kameru možete pomerati bilo kad, čak i usred crtanja linije ili guranja površi: alat čeka tamo gde je stao.

## Sa mišem sa tri dugmeta

| Za | Uradite ovo |
|---|---|
| Orbitiranje | Prevucite srednjim dugmetom (pritisnite točkić) |
| Pomeranje pogleda | Prevucite desnim dugmetom, ili držite {{key:Shift}} i prevucite srednjim dugmetom. Pritiskanje ili otpuštanje {{key:Shift}} tokom prevlačenja prebacuje između orbitiranja i pomeranja |
| Zumiranje | Okrenite točkić. Zumira prema površi ispod pokazivača, ili prema tački ispod njega na dubini središta pogleda |
| Vidi ceo model | {{key:Shift+Z}} ili {{ui:Sve}} |

Orbitiranje okreće pogled oko dela modela ispod pokazivača, pa ta tačka ostaje na mestu dok se sve ostalo okreće oko nje. Nad praznim prostorom okreće se oko središta pogleda. Pomeranje zadržava tačku koju ste uhvatili ispod pokazivača.

Da uvek orbitirate oko središta pogleda, ili da orbitiranje i pomeranje budu brži ili sporiji, otvorite {{ui:Podešavanja}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, **Orbitiranje i pomeranje**. Brzine važe za miš, touchpad, dodir i strelice na tastaturi.

Desni klik bez prevlačenja ne radi ništa; ModelCraft nema meni na desni klik.

## Bez srednjeg dugmeta

Koristite alate za kameru na traci ili tastaturu:

1. Pritisnite {{key:O}} (ili kliknite {{ui:Orbitiraj}}) i prevucite levim dugmetom da orbitirate. Držite {{key:Shift}} tokom prevlačenja da pomerate.
2. Pritisnite {{key:H}} (ili kliknite {{ui:Pomeri pogled}}) i prevucite da pomerate.
3. Pritisnite {{key:Z}} (ili kliknite {{ui:Zumiraj}}) i prevucite gore da zumirate, dole da odzumirate.
4. Pritisnite {{key:Space}} da se vratite na {{ui:Izaberi}}, ili pritisnite taster alata koji želite sledeći.

Alati za kameru zamenjuju alat koji ste koristili. Da se ogledate usred operacije bez gubljenja nje, koristite tastaturu:

- Strelice orbitiraju.
- {{key:Shift}} sa strelicama pomera.

Dok je alat za crtanje usred operacije (posle prvog klika), strelice zaključavaju pravce umesto da orbitiraju. Vidi [Zaključivanje i hvatanje](topic:inference#lock-a-direction).

## Na touchpad-u

Najlakše: otvorite {{ui:Podešavanja}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavite Skrolovanje na **Touchpad** (ili ostavite na „Sam odredi”). Onda prevucite dvema prstima da orbitirate, držite {{key:Shift}} i prevucite da pomerate, i štipnite za zumiranje — bez dugmadi kamere. Vidi [Podešavanja ModelCraft-a](topic:settings#scrolling-mouse-wheel-or-trackpad).

Sa Skrolovanje postavljenim na **Točkić miša**:

:::mac
- **Zumiranje:** skrolujte dvama prstima, ili štipnite. Oba zumiraju prema pokazivaču.
- **Pomeranje:** pritisnite dvama prstima (sekundarni klik) i držite prste dok prevlačite. Uključite „Sekundarni klik” u **Podešavanjima sistema**, pa **Touchpad**, ako dvoprsti klik ne radi.
- **Orbitiranje:** pritisnite {{key:O}} i prevucite jednim prstom, ili koristite strelice.
- Držanje {{key:Ctrl}} dok kliknete možda se ne računa kao desni klik u ModelCraft-u, zavisno od pregledača: može da deluje kao klik uz držanje {{key:Ctrl}}. Za pomeranje koristite dvoprsti pritisak.
:::

:::windows linux
- **Zumiranje:** skrolujte dvama prstima. Štipanje takođe zumira tamo gde upravljački program touchpad-a šalje to kao skrolovanje s {{key:Ctrl}}.
- **Pomeranje:** prevucite desnim dugmetom (na mnogim touchpad-ovima pritisnite donji desni ugao i prevucite), ili pritisnite {{key:H}} i prevucite.
- **Orbitiranje:** pritisnite {{key:O}} i prevucite, ili koristite strelice.
:::

Sa Točkić miša, skrolovanje dvama prstima zumira; ne pomera. To je suprotno od mnogih veb stranica, i tako se točkić miša ponaša u većini 3D modelara.

:::tip
{{key:Space}} bira alat {{ui:Izaberi}} u ModelCraft-u. Držanje {{key:Space}} i prevlačenje ne pomera pogled, kao u nekim drugim aplikacijama.
:::

## Na ekranu osetljivom na dodir

:::touch
- **Jedan prst** koristi trenutni alat: **dodir** za klik, **pritisak i prevlačenje** za crtanje ili vučenje.
- Dok je prst alata spušten, **lupa** iznad njega pokazuje šta je ispod prsta, pa vidite krajnju tačku, središte ili ivicu na koju se hvata pre nego što podignete.
- **Zadržite mirno** pola sekunde da završite ono što alat radi, kao što to radi {{key:Enter}}: krivu ili lanac linija. Bez ičega u toku, zadržavanje mirno pa prevlačenje istim prstom **orbitira** dok ga ne podignete.
- **Dva prsta** prevučena zajedno **pomeraju**; **štipanje** zumira. Oba rade u jednom pokretu.
- **Tri prsta** prevučena zajedno **orbitiraju**.
- Da ih zamenite (dva prsta orbitiraju, tri pomeraju), otvorite {{ui:Podešavanja}}, karticu {{ui:ModelCraft}}, Ekran osetljiv na dodir.
- Stavljanje drugog prsta **otkazuje** ono što je započeo prvi prst (napola nacrtan pravougaonik, guranje/vučenje u toku). Podignite prste i počnite ponovo.
- Mala traka na dnu prikaza ima **Gotovo** ({{key:Enter}}), **Otkaži** ({{key:Esc}}) i **Opozovi**, za kada nema tastature.
- Hvatanje i biranje dosežu malo dalje nego sa mišem, a dugmad su veća, pa prst može da ih pogodi.
:::

:::mouse
Na ekranu osetljivom na dodir, jedan prst koristi trenutni alat (dodir za klik, zadržavanje mirno za završetak, ili zadržavanje mirno pa prevlačenje za orbitiranje), dva prsta pomeraju i štipanje zumira, tri prsta orbitiraju, a mala traka nudi Gotovo, Otkaži i Opozovi.
:::

## Standardni pogledi

1. Kliknite {{ui:Pogledi}} na desnom kraju trake.
2. Izaberite {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Spredaj}}, {{ui:Desno}}, {{ui:Pozadi}}, {{ui:Levo}} ili {{ui:Dole}}.

Pogled se okreće u tom smeru i uklapa ceo model. {{ui:Spredaj}} gleda na sever, duž zelene ose; {{ui:Gore}} gleda pravo nadole, sa severom na vrhu.

Kocka pogleda u gornjem desnom uglu prikaza radi isto u jednom kliku, plus ivice i uglovi, prsten kompasa za okretanje modela i dugme za početak. Vidi [Kocka pogleda](topic:view-cube).

## Perspektiva i paralelna projekcija

Izaberite {{ui:Pogledi}}, pa {{ui:Perspektiva}}. Potvrdna oznaka znači da je perspektiva uključena. Kad je isključena, pogled je paralelna (ortogonalna) projekcija: linije koje su paralelne u modelu ostaju paralelne na ekranu, što vam treba za izglede iz {{ui:Spredaj}} ili {{ui:Desno}}. Statusna traka piše „Perspektiva.” ili „Paralelna projekcija.”

Svaka scena pamti da li je bila u perspektivi. Vidi [Čuvanje pogleda kao scena](topic:scenes).
