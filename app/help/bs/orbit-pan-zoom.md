---
title: Orbita, pomjeranje pogleda i zumiranje
summary: Kreći se oko modela mišem, touchpadom, ekranom osjetljivim na dodir ili tastaturom i skoči na standardne poglede.
keywords: orbita, pomjeri pogled, zumiraj, dugi pritisak, tri prsta, dva prsta, dodir, navigacija, kamera, pogled, rotiraj pogled, touchpad, prstohvat, srednje dugme, zumiraj na obuhvat, perspektiva, paralelno, pogled odozgo, izometrija
from: 10d4d33a
---

Kameru možeš pomjeriti u bilo kojem trenutku, čak i usred crtanja linije ili guranja plohe: alat čeka tamo gdje je stao.

## S mišem s tri dugmeta

| Za | Uradi ovo |
|---|---|
| Orbitiranje | Prevuci srednjim dugmetom (pritisni točkić) |
| Pomjeranje pogleda | Prevuci desnim dugmetom, ili drži {{key:Shift}} i prevuci srednjim dugmetom. Pritiskanje ili puštanje {{key:Shift}} tokom prevlačenja prebacuje između orbite i pomjeranja |
| Zumiranje | Okreni točkić. Zumira prema plohi ispod pokazivača, ili prema tački ispod njega na dubini središta pogleda |
| Vidi cijeli model | {{key:Shift+Z}} ili {{ui:Extents}} |

Orbita okreće pogled oko dijela modela ispod pokazivača, tako da ta tačka ostaje na mjestu dok se sve ostalo okreće oko nje. Preko praznog prostora okreće se oko središta pogleda. Pomjeranje pogleda zadržava tačku koju si zgrabio ispod pokazivača.

Da uvijek orbitiraš oko središta pogleda, ili da orbita i pomjeranje budu brži ili sporiji, otvori {{ui:Settings}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, **Orbita i pomjeranje**. Brzine važe za miš, touchpad, dodir i strelice na tastaturi.

Desni klik bez prevlačenja ne radi ništa; ModelCraft nema meni na desni klik.

## Bez srednjeg dugmeta

Koristi alate za kameru na traci s alatima ili tastaturu:

1. Pritisni {{key:O}} (ili klikni {{ui:Orbit}}) i prevuci lijevim dugmetom da orbitiraš. Drži {{key:Shift}} tokom prevlačenja da pomjeriš pogled.
2. Pritisni {{key:H}} (ili klikni {{ui:Pan}}) i prevuci da pomjeriš pogled.
3. Pritisni {{key:Z}} (ili klikni {{ui:Zoom}}) i prevuci nagore da zumiraš, nadolje da odzumiraš.
4. Pritisni {{key:Space}} da se vratiš na {{ui:Select}}, ili pritisni tipku alata koji želiš sljedeći.

Alati za kameru zamjenjuju alat koji si koristio. Da pogledaš oko sebe usred operacije bez gubljenja nje, koristi tastaturu:

- Strelice orbitiraju.
- {{key:Shift}} sa strelicama pomjera pogled.

Dok je alat za crtanje usred operacije (nakon prvog klika), strelice zaključavaju smjerove umjesto da orbitiraju. Vidi [Vođenje i hvatanje](topic:inference#lock-a-direction).

## Na touchpadu

Najlakši način: otvori {{ui:Settings}} ({{key:Mod+,}}), karticu {{ui:ModelCraft}}, i postavi Skrolovanje na **Touchpad** (ili ostavi na „Sam utvrdi”). Zatim prevuci s dva prsta da orbitiraš, drži {{key:Shift}} i prevuci da pomjeriš pogled, a prstohvatom zumiraj — bez dugmadi za kameru. Vidi [Postavke ModelCraft-a](topic:settings#scrolling-mouse-wheel-or-trackpad).

Sa Skrolovanjem postavljenim na **Točkić miša**:

:::mac
- **Zumiranje:** skroluj s dva prsta, ili prstohvatom. Oba zumiraju prema pokazivaču.
- **Pomjeranje:** pritisni s dva prsta (sekundarni klik) i drži prste dok prevlačiš. Uključi „Sekundarni klik” u **Postavkama sistema**, zatim **Touchpad**, ako klik s dva prsta ne radi.
- **Orbita:** pritisni {{key:O}} i prevuci jednim prstom, ili koristi strelice.
- Držanje {{key:Ctrl}} dok klikneš možda se ne računa kao desni klik u ModelCraft-u, zavisno od pregledača: može djelovati kao klik s {{key:Ctrl}} držanim. Za pomjeranje koristi pritisak s dva prsta.
:::

:::windows linux
- **Zumiranje:** skroluj s dva prsta. Prstohvat također zumira tamo gdje upravljački program touchpada šalje to kao skrol s {{key:Ctrl}}.
- **Pomjeranje:** prevuci desnim dugmetom (na mnogim touchpadovima pritisni donji desni ugao i prevuci), ili pritisni {{key:H}} i prevuci.
- **Orbita:** pritisni {{key:O}} i prevuci, ili koristi strelice.
:::

Sa točkićem miša, skrolovanje s dva prsta zumira; ne pomjera pogled. To je suprotno od mnogih web stranica, i tako se točkić miša ponaša u većini 3D modelara.

:::tip
{{key:Space}} bira alat {{ui:Select}} u ModelCraft-u. Držanje {{key:Space}} i prevlačenje ne pomjera pogled, kao u nekim drugim aplikacijama.
:::

## Na ekranu osjetljivom na dodir

:::touch
- **Jedan prst** koristi trenutni alat: **dodirni** za klik, **pritisni i prevuci** za crtanje ili prevlačenje.
- Dok je prst alata za crtanje spušten, **lupa** iznad njega pokazuje šta je ispod prsta, tako da vidiš krajnju tačku, središnju tačku ili ivicu na koju se hvata prije nego što podigneš.
- **Drži mirno** pola sekunde da završiš što alat radi, kao što to radi {{key:Enter}}: krivu ili lanac linija. Kada se ništa ne dešava, držanje mirno i zatim prevlačenje istim prstom **orbitira** dok ga ne podigneš.
- **Dva prsta** prevučena zajedno **pomjeraju** pogled; **prstohvat** za zumiranje. Oba rade u jednom potezu.
- **Tri prsta** prevučena zajedno **orbitiraju**.
- Da ih zamijeniš (dva prsta orbitiraju, tri pomjeraju), otvori {{ui:Settings}}, karticu {{ui:ModelCraft}}, Ekran osjetljiv na dodir.
- Spuštanje drugog prsta **otkazuje** ono što je započeo prvi prst (pola nacrtanog pravougaonika, guranje u toku). Podigni prste i počni ponovo.
- Mala traka na dnu pogleda ima **Završi** ({{key:Enter}}), **Otkaži** ({{key:Esc}}) i **Poništi**, za slučaj kada nema tastature.
- Hvatanje i odabir sežu malo dalje nego s mišem, a dugmad su veća, pa prst može pogoditi.
:::

:::mouse
Na ekranu osjetljivom na dodir, jedan prst koristi trenutni alat (dodirni za klik, drži mirno da završiš, ili drži mirno i prevuci da orbitiraš), dva prsta pomjeraju i prstohvatom zumiraju, tri prsta orbitiraju, a mala traka nudi Završi, Otkaži i Poništi.
:::

## Standardni pogledi

1. Klikni {{ui:Views}} na desnom kraju trake s alatima.
2. Izaberi {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} ili {{ui:Bottom}}.

Pogled se okreće u taj smjer i prilagođava se cijelom modelu. {{ui:Front}} gleda na sjever, duž zelene ose; {{ui:Top}} gleda pravo dolje sa sjeverom gore.

Kocka pogleda u gornjem desnom uglu pogleda radi isto u jednom kliku, plus ivice i uglove, prsten kompasa za okretanje modela i dugme za početak. Vidi [Kocka pogleda](topic:view-cube).

## Perspektiva i paralelna projekcija

Izaberi {{ui:Views}}, pa {{ui:Perspective}}. Kvačica znači da je perspektiva uključena. Kada je isključena, pogled je paralelna (ortogonalna) projekcija: linije koje su paralelne u modelu ostaju paralelne na ekranu, što želiš za nacrte iz {{ui:Front}} ili {{ui:Right}}. Statusna traka kaže „Perspektiva.” ili „Paralelna projekcija.”

Svaka scena pamti da li je bila u perspektivi. Vidi [Čuvanje pogleda kao scena](topic:scenes).
