---
title: Orbit, pan i zumiranje
summary: Krećite se oko modela mišem, touchpadom, zaslonom osjetljivim na dodir ili tipkovnicom te skočite na standardne prikaze.
keywords: orbit, pan, zumiranje, dugi pritisak, tri prsta, dva prsta, tap, kretanje, kamera, prikaz, zakreni prikaz, touchpad, dodir, štipanje, srednja tipka, zumiraj opseg, perspektiva, paralelno, pogled odozgo, iso
from: 10d4d33a
---

Kameru možete pomicati u bilo kojem trenutku, čak i usred crtanja linije ili guranja plohe: alat čeka tamo gdje je stao.

## S mišem s tri tipke

| Za | Učinite ovo |
|---|---|
| Orbit | Povucite srednjom tipkom (pritisnite kotačić) |
| Pan | Povucite desnom tipkom ili držite {{key:Shift}} i povucite srednjom tipkom. Pritiskanje ili otpuštanje {{key:Shift}} tijekom povlačenja prebacuje između Orbit i Pan |
| Zumiranje | Okrenite kotačić. Zumira prema plohi ispod pokazivača, ili prema točki ispod njega na dubini središta prikaza |
| Prikaz cijelog modela | {{key:Shift+Z}} ili {{ui:Opseg}} |

Orbit zakreće prikaz oko dijela modela ispod pokazivača, pa ta točka ostaje na mjestu dok se sve ostalo okreće oko nje. Preko praznog prostora zakreće se oko središta prikaza. Pan zadržava točku koju ste uhvatili ispod pokazivača.

Da uvijek zakrećete oko središta prikaza ili da orbit i pan budu brži ili sporiji, otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, **Orbit i pan**. Brzine vrijede za miš, touchpad, dodir i tipke sa strelicama.

Desni klik bez povlačenja ne čini ništa; ModelCraft nema izbornik na desni klik.

## Bez srednje tipke

Koristite alate kamere na alatnoj traci ili tipkovnicu:

1. Pritisnite {{key:O}} (ili kliknite {{ui:Orbit}}) i povucite lijevom tipkom za zakretanje. Držite {{key:Shift}} tijekom povlačenja za pomicanje (Pan).
2. Pritisnite {{key:H}} (ili kliknite {{ui:Pan}}) i povucite za pomicanje prikaza.
3. Pritisnite {{key:Z}} (ili kliknite {{ui:Zumiranje}}) i povucite prema gore za zumiranje prema unutra, a prema dolje za zumiranje prema van.
4. Pritisnite {{key:Space}} za povratak na {{ui:Odaberi}}, ili pritisnite tipku alata koji želite sljedeći.

Alati kamere zamjenjuju alat koji ste koristili. Da se osvrnete usred operacije bez gubitka alata, koristite tipkovnicu:

- Tipke sa strelicama zakreću prikaz.
- {{key:Shift}} s tipkama sa strelicama pomiče prikaz (Pan).

Dok je alat za crtanje usred operacije (nakon prvog klika), tipke sa strelicama zaključavaju smjerove umjesto zakretanja. Vidi [Zaključivanje i hvatanje](topic:inference#lock-a-direction).

## Na touchpadu

Najlakši način: otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavite Listanje na **Touchpad** (ili ostavite na „Sam odredi“). Zatim prijeđite s dva prsta za zakretanje, držite {{key:Shift}} i prijeđite za pomicanje, a štipnite za zumiranje, bez gumba kamere. Vidi [postavke ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Uz Listanje postavljeno na **Kotačić miša**:

:::mac
- **Zumiranje:** listajte s dva prsta ili štipnite. Oboje zumira prema pokazivaču.
- **Pan:** pritisnite s dva prsta (sekundarni klik) i držite prste spuštene dok povlačite. Uključite „Sekundarni klik“ u **Postavkama sustava**, zatim **Trackpad**, ako klik s dva prsta ne radi.
- **Orbit:** pritisnite {{key:O}} i povucite jednim prstom, ili koristite tipke sa strelicama.
- Držanje {{key:Ctrl}} dok klikate možda se ne računa kao desni klik u ModelCraftu, ovisno o pregledniku: može djelovati kao klik uz držanje {{key:Ctrl}}. Za pomicanje (Pan) koristite pritisak s dva prsta.
:::

:::windows linux
- **Zumiranje:** listajte s dva prsta. Štipanje također zumira tamo gdje upravljački program touchpada šalje to kao listanje uz {{key:Ctrl}}.
- **Pan:** povucite desnom tipkom (na mnogim touchpadovima pritisnite donji desni kut i povucite), ili pritisnite {{key:H}} i povucite.
- **Orbit:** pritisnite {{key:O}} i povucite, ili koristite tipke sa strelicama.
:::

Uz Kotačić miša, listanje s dva prsta zumira; ne pomiče prikaz. To je suprotno od mnogih web-stranica, a tako se kotačić miša ponaša u većini 3D modelara.

:::tip
{{key:Space}} odabire alat {{ui:Odaberi}} u ModelCraftu. Držanje {{key:Space}} i povlačenje ne pomiče prikaz, kao što čini u nekim drugim aplikacijama.
:::

## Na zaslonu osjetljivom na dodir

:::touch
- **Jedan prst** koristi trenutačni alat: **dodirnite** za klik, **pritisnite i povucite** za crtanje ili povlačenje.
- Dok je prst alata za crtanje spušten, iznad njega **lupa** prikazuje što je ispod prsta, pa možete vidjeti krajnju točku, polovište ili brid na koji se hvata prije podizanja.
- **Držite mirno** pola sekunde da završite što alat radi, kao što to čini {{key:Enter}}: krivulju ili lanac linija. Kad se ništa ne događa, držanje mirno pa povlačenje istim prstom **zakreće** prikaz dok ga ne podignete.
- **Dva prsta** povučena zajedno **pomiču** prikaz (Pan); **štipnite** za zumiranje. Oboje radi u jednom pokretu.
- **Tri prsta** povučena zajedno **zakreću** (Orbit).
- Da ih zamijenite (dva prsta zakreću, tri pomiču), otvorite {{ui:Postavke}}, karticu {{ui:ModelCraft}}, Zaslon osjetljiv na dodir.
- Spuštanje drugog prsta **otkazuje** ono što je započeo prvi prst (pola nacrtan pravokutnik, potiskivanje u tijeku). Podignite prste i počnite ponovno.
- Mala traka na dnu prikaza ima **Gotovo** ({{key:Enter}}), **Odustani** ({{key:Esc}}) i **Poništi**, za slučaj kad nema tipkovnice.
- Hvatanje i odabir sežu malo dalje nego s mišem, a gumbi su veći da ih prst pogodi.
:::

:::mouse
Na zaslonu osjetljivom na dodir jedan prst koristi trenutačni alat (dodir za klik, držanje mirno za završetak, ili držanje mirno i povlačenje za zakretanje), dva prsta pomiču prikaz (Pan) i štipaju za zumiranje, tri prsta zakreću, a mala traka nudi Gotovo, Odustani i Poništi.
:::

## Standardni prikazi

1. Kliknite {{ui:Pogledi}} na desnom kraju alatne trake.
2. Odaberite {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Desno}}, {{ui:Straga}}, {{ui:Lijevo}} ili {{ui:Dolje}}.

Prikaz se okreće u taj smjer i prilagođava se cijelom modelu. {{ui:Naprijed}} gleda prema sjeveru, duž zelene osi; {{ui:Gore}} gleda ravno dolje sa sjeverom prema gore.

Kocka prikaza u gornjem desnom kutu prikaza čini isto jednim klikom, plus bridove i kutove, prsten kompasa za okretanje modela i gumb početne. Vidi [Kocka prikaza](topic:view-cube).

## Perspektiva i paralelna projekcija

Odaberite {{ui:Pogledi}}, zatim {{ui:Perspektiva}}. Kvačica znači da je perspektiva uključena. Kad je isključena, prikaz je paralelna (ortografska) projekcija: linije koje su paralelne u modelu ostaju paralelne na zaslonu, što želite za nacrte iz {{ui:Naprijed}} ili {{ui:Desno}}. Statusna traka kaže „Perspektiva.“ ili „Paralelna projekcija.“

Svaka scena pamti je li bila u perspektivi. Vidi [Spremanje prikaza kao scene](topic:scenes).
