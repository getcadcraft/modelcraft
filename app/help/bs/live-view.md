---
title: Živi pregled
summary: Prozor pored modela koji ga prikazuje u izgledu u stvarnom vremenu, sa suncem i sjenama, i prati svaku tvoju promjenu; prošetaj kroz njega i postavi doba dana i mjesec.
keywords: dijeljenje, panorama, 360, obilazak, virtualni obilazak, samostalni prikazivač, prikazivač van mreže, slanje klijentu, video, video obilaska, raspršivanje, trava, livada, šuma, stijene, biljke, drveće, gužva, sadi biljke, živi pregled, stvarno vrijeme, render u stvarnom vremenu, hodanje, prvo lice, prezentacija, klijent, drugi ekran, drugi prozor, monitor, doba dana, sunce, sezona, mjesec, sjene, ambijentalna okluzija, refleksije, odbijeno svjetlo, globalno osvjetljenje, webgpu, webgl
from: fca3b0d6
---

{{ui:Izvezi}} › {{ui:Živi pregled}} otvara panel preko aplikacije koji prikazuje model u izgledu u stvarnom vremenu: nebo i sunce sa mjesta i datuma tvog modela, sunčane sjene, izgled i materijale koje si dao površinama, lampe i svjetlo koje se odbija od zidova i podova. Prati šta radiš: okreneš pogled, i on se okrene; promijeniš model, i promjenu pokaže za trenutak. Ništa se ne šalje na internet.

## Otvori ga

1. Izaberi {{ui:Izvezi}} › {{ui:Živi pregled}}. Panel se otvara u donjem desnom uglu.
2. Povuci naslovnu traku da ga pomjeriš, povuci ugao da ga povećaš.
3. {{ui:Novi prozor}} premješta ga u zaseban prozor, za drugi ekran. {{ui:Izvezi}} › {{ui:Živi pregled u novom prozoru}} ga odmah otvara tamo. Ako tvoj pregledač blokira iskačuće prozore, otvara se kao panel.
4. {{ui:Zatvori}} ga zatvara.

## Kontrole

| Kontrola | Šta radi |
|---|---|
| {{ui:Prati pogled}} | Uključeno: živi pregled gleda gdje gleda pogled ModelCraft-a. Hodanje ga isključuje |
| {{ui:Hodaj}} | Prolazak kroz model (dolje) |
| {{ui:Gravitacija}} | Dok hodaš: stojiš na podovima i penješ se stepenicama. Isključeno: letiš |
| {{ui:Vrijeme}} | Sat u danu, od 05:00 do 21:00. Sunce se pomjera dok vučeš |
| {{ui:Mjesec}} | Mjesec (21. u njemu), da vidiš sunce zimi i ljeti |
| {{ui:Kvalitet}} | {{ui:Za ovaj računar}} (šta dobija [tvoj računar](topic:your-machine)), ili {{ui:Nizak}}, {{ui:Srednji}} ili {{ui:Visok}} |

Linija na dnu kaže čime se crta pogled (WebGPU ili WebGL 2), kvalitet i odbijeno svjetlo.

## Prošetaj kroz model

1. Okreni glavni pogled tamo gdje želiš stajati i izaberi {{ui:Hodaj}}. Stojiš na podu ispod tačke oka pogleda, visok 1.6 m.
2. Klikni živi pregled, pa koristi {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice. Drži {{key:Shift}} za trčanje. Povuci da pogledaš okolo.
3. Koraci visine do 40 cm se penju (stepenice); sve više od toga je zid. Zidovi te zaustavljaju, a ti klizneš uz njih.
4. Sa isključenom {{ui:Gravitacija}} letiš: {{key:E}} ide gore, {{key:Q}} dolje.
5. {{key:Esc}} zaustavlja hodanje.

## Raspršivanje biljaka, stijena i ljudi

{{ui:Raspršivanje}} u traci živog pregleda otvara panel raspršivanja pored slike. Set raspršivanja širi predmete iz biblioteke okoline (drveće, grmlje, trava, cvijeće, stijene, ljudi, automobili) preko dijela modela. Predmeti se crtaju samo u živom pregledu: nisu geometrija u modelu, a glavni pogled ih ne prikazuje.

1. **Popuni površine:** izaberi površine (ili grupu, kao teren) u ModelCraft-u, pa izaberi {{ui:Popuni odabir}}. Set ih pokriva.
2. **Boji:** izaberi {{ui:Boji}}, pa prevuci preko živog pregleda. Sa odabranim površinama boja pada samo na njih; bez odabira pada na sve što je ispod četkice, uključujući tlo. {{ui:Veličina četkice}} postavlja četkicu; {{ui:Gumica}} uklanja obojena mjesta.
3. Uključi šta raspršiti. Broj pored svakog je njegova težina: 3 i 1 daju tri prvog za svaki jedan drugog.

| Kontrola | Šta radi |
|---|---|
| {{ui:Po m²}} | Koliko predmeta po kvadratnom metru |
| {{ui:Razmak (m)}} | Nijedan predmet nije bliži ovoliko drugim objektima, i nijedan ispod krova ili stola. 0 isključuje |
| {{ui:Rotacija (°)}} | Koliko je svaki predmet nasumično okrenut oko vertikale |
| {{ui:Najstrmije (°)}} | Nema predmeta gdje je površina strmija |
| {{ui:Veličina}} | Najmanja i najveća veličina, kao faktor vlastite veličine predmeta |
| {{ui:Visina od, do (m)}} | Samo između ovih visina (prazno = bilo koja) |
| {{ui:Nagni se prema površini}} | 0 drži predmete uspravno; 1 ih postavlja okomito na nagib |
| {{ui:Sjeme}}, {{ui:Promiješaj}} | Isto sjeme uvijek daje isto raspršivanje; Promiješaj bira drugo |

Setovi se čuvaju u datoteci .modelcraft i prate površine koje pokrivaju kad ih mijenjaš. Najveći broj predmeta koje živi pregled crta određen je nivoom [tvog računara](topic:your-machine): 20 000 za {{ui:Samo procesor}}, 100 000 za {{ui:Grafička kartica, osnovni}}, milion za {{ui:Grafička kartica, visoki}}. Panel kaže koliko je postavljeno od koliko gustina traži: manje ih se postavi kad se dostigne budžet ili gdje ih objekti drže podalje. Bliski predmeti se crtaju kao sami sebe; daleki kao jednostavni oblici u svojim bojama.

:::note
Raspršeni predmeti su u živom pregledu (i u njegovom hodanju, panoramama i samostalnom prikazivaču). Renderovanje slike ih još ne crta.
:::

## Dijeljenje: panorame, obilasci, prikazivač, video

{{ui:Dijeli}} u traci živog pregleda pravi datoteke od živog pregleda. Sve se pravi na ovom računaru; ništa se ne šalje na internet.

| Izbor | Šta dobijaš |
|---|---|
| {{ui:360° panorama}} | 360° slika sa mjesta na kojem stoji pogled (ili gdje hodaš), kao equirectangular PNG koji otvaraju pregledači panorama i većina foto sajtova |
| {{ui:Dodaj ovu stanicu u obilazak}}, pa {{ui:Spasi obilazak}} | Jedna web stranica sa panoramom na svakoj stanici i strelicama ka stanicama koje svaka može vidjeti (zid između skriva strelicu) |
| {{ui:Spasi prikazivač}} | Jedna web stranica sa modelom u ovom izgledu u stvarnom vremenu: okreći ga, prolazi kroz njega, skoči na njegove sačuvane scene. Otvara se van mreže u pregledaču sa WebGPU ili WebGL 2, iz foldera, USB stika ili e-pošte, bez instalacije i bez naloga, i ne učitava ništa sa interneta |
| {{ui:Video staze}} | Putanja kamere sa vremenske linije (ili sačuvane scene redom) kao video u ovom izgledu u stvarnom vremenu, u veličini živog pregleda: WebM ili MP4 gdje pregledač može da ih napravi, inače numerisane slike u ZIP-u |

Veličina panorame prati kvalitet: 1024, 2048 ili 4096 piksela u širinu na Nizak, Srednji i Visok. Datoteka prikazivača je oko 5 MB plus model.

:::note
Obilazak i prikazivač su napravljeni za prikazivanje, ne za uređivanje: čuvaju model onakvim kakav je kad ih spasiš.
:::

## Kvalitet

| | Nizak | Srednji | Visok |
|---|---|---|---|
| Sunčane sjene | jedna mapa sjena | tri kaskade | četiri kaskade |
| Ambijentalna okluzija (kontaktne sjene) | | ✓ | ✓, finije |
| Refleksije na metalu | | | ✓ |
| Bloom (kad ga postavi {{ui:Renderuj sliku…}}) | | ✓ | ✓ |
| Ivice izglađene | FXAA | kroz više okvira (TAA) | kroz više okvira (TAA) |
| Odbijeno svjetlo | grubo | finije | najfinije |

{{ui:Za ovaj računar}} bira Nizak na računaru bez upotrebljive grafičke kartice, Srednji sa ugrađenim grafičkim čipom, Visok sa zasebnom grafičkom karticom. Nizak je namijenjen laptopu sa 8 GB bez grafičke kartice.

## Odbijeno svjetlo

Svjetlo koje se odbija od zida obasjanog suncem na pod, i tamnija unutrašnjost prostorije, računa isti path tracer koji pravi [renderovane slike](topic:render): renderuje malu panoramu u tačkama kroz model, u pozadini na svakom procesorskom jezgru. Dok radi, donja linija kaže {{ui:Odbijeno svjetlo: 40 %}}; kad je gotovo, pogled ga uzima. Nakon promjene počinje ponovo.

:::note
Ovo je aproksimacija za živi pregled, a ne renderovana slika: sitni detalji između tačaka dobijaju odbijeno svjetlo susjednih tačaka. Za gotovu sliku koristi [Renderuj sliku](topic:render).
:::

## Svjetlina i boje

Živi pregled koristi istu svjetlinu, balans bijele, kontrast i transformaciju pogleda (ACES, AgX, filmski ili standardni) kao [Renderuj sliku](topic:render): postavi ih tamo i živi pregled ih prati.

:::note
Pregledači se razlikuju. Gdje pregledač ima WebGPU (Chrome i Edge na Windowsu, macOS i ChromeOS, Safari 26), živi pregled ga koristi; drugdje (većina pregledača na Linuxu, stariji Apple sistemi) koristi WebGL 2 i izgleda isto.
:::
