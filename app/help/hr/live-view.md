---
title: Prikaz uživo
summary: Prozor uz model koji ga prikazuje u stvarnom vremenu, sa suncem i sjenama, i prati svaku vašu promjenu; prođite kroz njega i postavite doba dana i mjesec.
keywords: dijeljenje, panorama, 360, obilazak, virtualni obilazak, samostalni preglednik, izvanmrežni preglednik, slanje klijentu, video, video obilaska, raspršivanje, trava, livada, šuma, stijene, biljke, drveće, gužva, sadnja biljaka, prikaz uživo, stvarno vrijeme, render u stvarnom vremenu, obilazak, hodanje, prvo lice, prezentacija, klijent, drugi zaslon, drugi prozor, monitor, doba dana, sunce, godišnje doba, mjesec, sjene, ambijentalna okluzija, odrazi, odbijeno svjetlo, globalno osvjetljenje, webgpu, webgl
from: fca3b0d6
---

{{ui:Izvezi}} › {{ui:Prikaz uživo}} otvara ploču preko aplikacije koja prikazuje model u izgledu stvarnog vremena: nebo i sunce s mjesta i datuma vašeg modela, sunčane sjene, izglede i materijale koje ste dali plohama, svjetiljke i svjetlo odbijeno od zidova i podova. Prati ono što radite: zakrenete li prikaz, i ona se zakreće; promijenite li model, pokaže promjenu nakon trenutka. Ništa se ne učitava.

## Otvaranje

1. Odaberite {{ui:Izvezi}} › {{ui:Prikaz uživo}}. Ploča se otvara u donjem desnom kutu.
2. Povucite traku naslova da je pomaknete, a kut da je povećate.
3. {{ui:Novi prozor}} premješta je u vlastiti prozor, za drugi zaslon. {{ui:Izvezi}} › {{ui:Prikaz uživo u novom prozoru}} otvara je odmah tamo. Ako preglednik blokira skočne prozore, otvorit će se kao ploča.
4. {{ui:Zatvori}} je zatvara.

## Kontrole

| Kontrola | Što radi |
|---|---|
| {{ui:Prati prikaz}} | Uključeno: prikaz uživo gleda kamo gleda prikaz programa ModelCraft. Hodanje to isključuje |
| {{ui:Hodaj}} | Prolazak kroz model (dolje) |
| {{ui:Gravitacija}} | Tijekom hodanja: stojite na podovima i penjete se stubama. Isključeno: letite |
| {{ui:Vrijeme}} | Sat u danu, od 05:00 do 21:00. Sunce se pomiče dok povlačite |
| {{ui:Mjesec}} | Mjesec (21. u njemu), da vidite sunce zimi i ljeti |
| {{ui:Kvaliteta}} | {{ui:Za ovo računalo}} (što dobiva [vaše računalo](topic:your-machine)), ili {{ui:Niska}}, {{ui:Srednja}} ili {{ui:Visoka}} |

Redak na dnu kaže što crta prikaz (WebGPU ili WebGL 2), kvalitetu i odbijeno svjetlo.

## Prolazak kroz model

1. Zakrenite glavni prikaz tamo gdje želite stajati i odaberite {{ui:Hodaj}}. Stojite na podu ispod očne točke prikaza, visoki 1,6 m.
2. Kliknite prikaz uživo, zatim koristite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili tipke sa strelicama. Držite {{key:Shift}} za trčanje. Povucite za gledanje naokolo.
3. Stepenice do 40 cm savladavaju se; sve više je zid. Zidovi vas zaustavljaju i klizite uz njih.
4. Uz isključenu {{ui:Gravitaciju}} letite: {{key:E}} ide gore, {{key:Q}} dolje.
5. {{key:Esc}} zaustavlja hodanje.

## Raspršite biljke, stijene i ljude

{{ui:Raspršivanje}} u traci prikaza uživo otvara ploču raspršivanja uz sliku. Set raspršivanja raspoređuje stavke iz biblioteke okoline (drveće, grmlje, trava, cvijeće, stijene, ljudi, automobili) preko dijela modela. Stavke se crtaju samo u prikazu uživo: nisu geometrija modela, a glavni prikaz ih ne prikazuje.

1. **Ispunite plohe:** odaberite plohe (ili grupu, poput terena) u ModelCraftu, zatim odaberite {{ui:Ispuni odabir}}. Set ih pokriva.
2. **Oslikajte:** odaberite {{ui:Oboji}}, zatim povucite preko prikaza uživo. S odabranim plohama boja pada samo na njih; bez odabira pada na sve ispod kista, uključujući tlo. {{ui:Veličina kista}} postavlja kist; {{ui:Gumica}} uklanja obojena mjesta.
3. Označite što raspršiti. Broj pored svake je njezina težina: 3 i 1 daju tri prve za svaku drugu.

| Kontrola | Što radi |
|---|---|
| {{ui:Po m²}} | Koliko stavki po kvadratnom metru |
| {{ui:Drži razmak (m)}} | Ništa bliže od ovoga drugim objektima, i ništa pod krovom ili stolom. 0 isključuje |
| {{ui:Zakretanje (°)}} | Koliko se svaka stavka nasumično zakreće oko okomice |
| {{ui:Najstrmije (°)}} | Nema stavki gdje je površina strmija od ovoga |
| {{ui:Veličina}} | Najmanja i najveća veličina, kao faktor vlastite veličine stavke |
| {{ui:Visina od, do (m)}} | Samo između ovih visina (prazno = bilo koja) |
| {{ui:Naginji se s površinom}} | 0 drži stavke uspravne; 1 ih postavlja okomito na nagib |
| {{ui:Sjeme}}, {{ui:Promiješaj}} | Isto sjeme uvijek daje isto raspršivanje; Promiješaj bira drugo |

Setovi se spremaju u datoteku .modelcraft i prate plohe koje pokrivaju kad ih mijenjate. Koliko stavki prikaz uživo najviše crta ovisi o razini [vašeg računala](topic:your-machine): 20 000 za {{ui:Samo procesor}}, 100 000 za {{ui:Grafička kartica, osnovna}}, milijun za {{ui:Grafička kartica, visoka}}. Ploča kaže koliko je postavljeno od koliko gustoća traži: manje se postavlja kad se dosegne proračun ili kad ih objekti drže podalje. Stavke blizu kamere crtaju se kao same sebe; udaljene kao jednostavni oblici u svojim bojama.

:::note
Raspršene stavke su u prikazu uživo (i u njegovu hodanju, panoramama i samostalnom pregledniku). Renderiranje slike ih još ne crta.
:::

## Dijeljenje: panorame, obilasci, preglednik, video

{{ui:Dijeli}} u traci prikaza uživo pravi datoteke iz prikaza uživo. Sve se izrađuje na ovom računalu; ništa se ne učitava.

| Izbor | Što dobivate |
|---|---|
| {{ui:Panorama 360°}} | Slika 360° s mjesta gdje stoji prikaz (ili gdje hodate), kao ekvirektangularni PNG koji otvaraju preglednici panorama i većina fotografskih stranica |
| {{ui:Dodaj ovo mjesto u obilazak}}, zatim {{ui:Spremi obilazak}} | Jedna web stranica s panoramom na svakom mjestu i strelicama do mjesta koje svako može vidjeti (zid između sakriva strelicu) |
| {{ui:Spremi preglednik}} | Jedna web stranica s modelom u ovom izgledu stvarnog vremena: okrenete ga, prođete kroz njega, skočite na njegove spremljene scene. Otvara se izvanmrežno u pregledniku s WebGPU ili WebGL 2, iz mape, USB-a ili e-pošte, bez instalacije i računa, i ne učitava ništa s interneta |
| {{ui:Video putanje}} | Putanja kamere s vremenske trake (ili spremljene scene redom) kao video u ovom izgledu stvarnog vremena, u veličini prikaza uživo: WebM ili MP4 gdje preglednik može, inače numerirane slike u ZIP-u |

Veličina panorame prati kvalitetu: 1024, 2048 ili 4096 piksela u širinu za Nisku, Srednju i Visoku. Datoteka preglednika je oko 5 MB plus model.

:::note
Obilazak i preglednik izrađeni su za prikazivanje, ne za uređivanje: čuvaju model kakav je bio kad ih spremite.
:::

## Kvaliteta

| | Niska | Srednja | Visoka |
|---|---|---|---|
| Sunčane sjene | jedna mapa sjena | tri kaskade | četiri kaskade |
| Ambijentalna okluzija (kontaktne sjene) | | ✓ | ✓, finije |
| Odrazi u metalu | | | ✓ |
| Bloom (kad ga Renderiraj sliku postavi) | | ✓ | ✓ |
| Izglađeni bridovi | FXAA | kroz nekoliko okvira (TAA) | kroz nekoliko okvira (TAA) |
| Odbijeno svjetlo | grubo | finije | najfinije |

{{ui:Za ovo računalo}} bira Nisku na računalu bez upotrebljive grafičke kartice, Srednju s ugrađenim grafičkim čipom, a Visoku s odvojenom grafičkom karticom. Niska je namijenjena prijenosnom računalu od 8 GB bez grafičke kartice.

## Odbijeno svjetlo

Svjetlo koje se od osunčanog zida odbija na pod, i tamnija unutrašnjost sobe, računa isti praćač putanja koji izrađuje [renderirane slike](topic:render): renderira male panorame u točkama kroz model, u pozadini na svakoj jezgri procesora. Dok radi, donji redak kaže {{ui:Odbijeno svjetlo: 40 %}}; kad je gotovo, prikaz ga preuzima. Nakon promjene počinje ispočetka.

:::note
Ovo je aproksimacija za prikaz uživo, a ne renderirana slika: sitni detalji između točaka dobivaju odbijeno svjetlo susjednih točaka. Za gotovu sliku koristite [Renderiraj sliku](topic:render).
:::

## Svjetlina i boje

Prikaz uživo koristi istu svjetlinu, balans bijele, kontrast i preslikavanje pogleda (ACES, AgX, filmski ili standardni) kao [Renderiraj sliku](topic:render): postavite ih tamo i prikaz uživo ih slijedi.

:::note
Preglednici se razlikuju. Gdje preglednik ima WebGPU (Chrome i Edge na Windowsu, macOS-u i ChromeOS-u, Safari 26), prikaz uživo ga koristi; inače (većina preglednika na Linuxu, stariji Apple sustavi) koristi WebGL 2 i izgleda isto.
:::
