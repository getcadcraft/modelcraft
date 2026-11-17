---
title: Živi prikaz
summary: Prozor pored modela koji ga prikazuje u izgledu u realnom vremenu, sa suncem i senkama, i prati svaku promenu koju napravite; prošetajte kroz njega i podesite doba dana i mesec.
keywords: deli, panorama, 360, obilazak, virtuelni obilazak, samostalni pregledač, pregledač van mreže, slanje klijentu, video, video šetnje, rasipanje, trava, livada, šuma, stene, biljke, drveće, gužva, slikanje biljaka, živi prikaz, realno vreme, render u realnom vremenu, šetnja, prolazak, prezentacija, klijent, drugi ekran, drugi prozor, monitor, doba dana, sunce, sezona, mesec, senke, ambijentalna okluzija, refleksije, odbijeno svetlo, globalno osvetljenje, webgpu, webgl
from: fca3b0d6
---

{{ui:Izvezi}} › {{ui:Živi prikaz}} otvara panel iznad programa koji prikazuje model u izgledu u realnom vremenu: nebo i sunce sa mesta i datuma vašeg modela, senke sunca, izglede i materijale koje ste dali površinama, lampe i svetlo odbijeno od zidova i podova. Prati ono što radite: okrenete prikaz, i on se okreće; promenite model, i promena se prikaže za trenutak. Ništa se ne otprema.

## Otvorite ga

1. Izaberite {{ui:Izvezi}} › {{ui:Živi prikaz}}. Panel se otvara u donjem desnom uglu.
2. Prevucite njegovu naslovnu traku da ga pomerite, povucite ugao da ga povećate.
3. {{ui:Novi prozor}} ga premešta u zaseban prozor, za drugi ekran. {{ui:Izvezi}} › {{ui:Živi prikaz u novom prozoru}} ga odmah otvara tamo. Ako pregledač blokira iskačuće prozore, otvoriće se kao panel.
4. {{ui:Zatvori}} ga zatvara.

## Kontrole

| Kontrola | Šta radi |
|---|---|
| {{ui:Prati pogled}} | Uključeno: živi prikaz gleda gde gleda prikaz ModelCraft-a. Šetnja ga isključuje |
| {{ui:Šetnja}} | Prolazak kroz model (dole) |
| {{ui:Gravitacija}} | Dok šetate: stojite na podovima i penjete se stepenicama. Isključeno: letite |
| {{ui:Vreme}} | Sat u danu, od 05:00 do 21:00. Sunce se pomera dok prevlačite |
| {{ui:Mesec}} | Mesec (21. u njemu), da vidite sunce zimi i leti |
| {{ui:Kvalitet}} | {{ui:Za ovaj računar}} (šta dobija [vaša mašina](topic:your-machine)), ili {{ui:Nizak}}, {{ui:Srednji}} ili {{ui:Visok}} |

Red na dnu kaže šta crta prikaz (WebGPU ili WebGL 2), kvalitet i odbijeno svetlo.

## Šetnja kroz model

1. Okrenite glavni prikaz tamo gde želite da stanete, i izaberite {{ui:Šetnja}}. Stojite na podu ispod tačke gledanja prikaza, visoki 1,6 m.
2. Kliknite živi prikaz, pa koristite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice. Držite {{key:Shift}} za trčanje. Prevucite za gledanje unaokolo.
3. Stepenici do 40 cm se penjete (stepenice); sve više je zid. Zidovi vas zaustavljaju, pa klizite uz njih.
4. Uz {{ui:Gravitacija}} isključeno, letite: {{key:E}} ide gore, {{key:Q}} dole.
5. {{key:Esc}} zaustavlja šetnju.

## Rasuti biljke, stene i ljude

{{ui:Rasuti}} u traci živog prikaza otvara panel rasipanja pored slike. Skup rasipanja raspoređuje stavke iz biblioteke okoline (drveće, žbunje, trava, cveće, stene, ljudi, automobili) preko dela modela. Stavke se crtaju samo u živom prikazu: nisu geometrija u modelu, a glavni prikaz ih ne prikazuje.

1. **Popunite površine:** u ModelCraft-u izaberite površine (ili grupu, kao teren), pa izaberite {{ui:Popuni izbor}}. Skup ih pokriva.
2. **Farbanje:** izaberite {{ui:Boji}}, pa prevucite preko živog prikaza. Sa izabranim površinama boja pada samo na njih; bez izbora pada na sve ispod četkice, uključujući tlo. {{ui:Veličina četkice}} podešava četkicu; {{ui:Gumica}} uklanja obojena mesta.
3. Označite šta da se rasipa. Broj pored svakog je njegova težina: 3 i 1 znače tri prva na svaki jedan drugi.

| Kontrola | Šta radi |
|---|---|
| {{ui:Po m²}} | Koliko stavki ide na svaki kvadratni metar |
| {{ui:Razmak (m)}} | Nijedna stavka nije bliža od ovoga drugim objektima, i nijedna nije ispod krova ili stola. 0 isključuje |
| {{ui:Okretanje (°)}} | Koliko je svaka stavka nasumično okrenuta oko vertikale |
| {{ui:Najstrmije (°)}} | Nijedna stavka tamo gde je površina strmija |
| {{ui:Veličina}} | Najmanja i najveća veličina, kao faktor sopstvene veličine stavke |
| {{ui:Visina od, do (m)}} | Samo između ovih visina (prazno = bilo koja) |
| {{ui:Nagni uz površinu}} | 0 drži stavke uspravno; 1 ih postavlja normalno na nagib |
| {{ui:Seme}}, {{ui:Promeši}} | Isto seme uvek daje isto rasipanje; Promeši bira drugo |

Skupovi se čuvaju u datoteci .modelcraft i prate površine koje pokrivaju kad ih menjate. Koliko stavki živi prikaz crta najviše zavisi od nivoa [vaše mašine](topic:your-machine): 20 000 za {{ui:Samo procesor}}, 100 000 za {{ui:Grafička kartica, osnovni}}, milion za {{ui:Grafička kartica, visok}}. Panel kaže koliko je postavljeno od koliko gustina traži: manje se postavlja kad se dostigne budžet, ili gde ih objekti drže podalje. Stavke blizu kamere crtaju se kao same sebe; udaljene kao jednostavni oblici u svojim bojama.

:::note
Rasute stavke su u živom prikazu (i u njegovoj šetnji, panoramama i samostalnom pregledaču). Renderovanje slike ih još ne crta.
:::

## Deli: panorame, obilasci, pregledač, video

{{ui:Podeli}} u traci živog prikaza pravi datoteke od živog prikaza. Sve se pravi na ovom računaru; ništa se ne otprema.

| Izbor | Šta dobijate |
|---|---|
| {{ui:360° panorama}} | Slika od 360° sa mesta gde prikaz stoji (ili gde šetate), kao PNG equirectangular koji otvaraju pregledači panorama i većina sajtova sa fotografijama |
| {{ui:Dodaj ovo mesto u obilazak}}, zatim {{ui:Sačuvaj obilazak}} | Jedna veb stranica sa panoramom na svakom mestu i strelicama ka mestima koja svako može da vidi (zid između sakriva strelicu) |
| {{ui:Sačuvaj pregledač}} | Jedna veb stranica sa modelom u ovom izgledu u realnom vremenu: okrećete ga, šetate kroz njega, skačete na sačuvane scene. Otvara se van mreže u pregledaču sa WebGPU ili WebGL 2, iz fascikle, sa USB memorije ili iz e-pošte, bez instalacije i naloga, i ne učitava ništa sa interneta |
| {{ui:Video putanje}} | Putanja kamere sa vremenske linije (ili sačuvane scene redom) kao video u ovom izgledu u realnom vremenu, veličine živog prikaza: WebM ili MP4 tamo gde pregledač može da ih napravi, inače numerisane slike u ZIP-u |

Veličina panorame prati kvalitet: 1024, 2048 ili 4096 piksela u širinu na Nizak, Srednji i Visok. Datoteka pregledača ima oko 5 MB plus model.

:::note
Obilazak i pregledač su napravljeni za prikazivanje, ne za izmene: čuvaju model onakav kakav je kad ih sačuvate.
:::

## Kvalitet

| | Nizak | Srednji | Visok |
|---|---|---|---|
| Sunčane senke | jedna mapa senki | tri kaskade | četiri kaskade |
| Ambijentalna okluzija (kontaktne senke) | | ✓ | ✓, finija |
| Refleksije na metalu | | | ✓ |
| Bloom (kad ga Renderuj sliku postavi) | | ✓ | ✓ |
| Izglađene ivice | FXAA | preko više kadrova (TAA) | preko više kadrova (TAA) |
| Odbijeno svetlo | grublje | finije | najfinije |

{{ui:Za ovaj računar}} bira Nizak na računaru bez upotrebljive grafičke kartice, Srednji sa ugrađenim grafičkim čipom, Visok sa zasebnom grafičkom karticom. Nizak je namenjen laptopu od 8 GB bez grafičke kartice.

## Odbijeno svetlo

Svetlo koje se odbija od zida okupanog suncem na pod, i tamnija unutrašnjost prostorije, računa isti path tracer koji pravi [renderovane slike](topic:render): renderuje malu panoramu u tačkama kroz model, u pozadini na svakom procesorskom jezgru. Dok radi, donja linija kaže {{ui:Odbijeno svetlo: 40 %}}; kad je spremno, prikaz ga uzima. Posle promene počinje ponovo.

:::note
Ovo je aproksimacija za živi prikaz, a ne renderovana slika: sitni detalji između tačaka dobijaju odbijeno svetlo od obližnjih tačaka. Za gotovu sliku koristite [Renderuj sliku](topic:render).
:::

## Svetlina i boje

Živi prikaz koristi istu svetlinu, balans bele, kontrast i transformaciju prikaza (ACES, AgX, filmic ili standardni) kao [Renderuj sliku](topic:render): podesite ih tamo, i živi prikaz ih prati.

:::note
Pregledači se razlikuju. Gde pregledač ima WebGPU (Chrome i Edge na Windows-u, macOS-u i ChromeOS-u, Safari 26), živi prikaz ga koristi; drugde (većina pregledača na Linux-u, stariji Apple sistemi) koristi WebGL 2 i izgleda isto.
:::
