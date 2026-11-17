---
title: Animirajte kameru i objekte te renderirajte video
summary: Postavite ključeve za kameru te za grupe i komponente na vremenskoj crti, reproducirajte ih u pogledu i renderirajte animaciju u WebM video sa nebom, suncem i materijalima renderera.
keywords: animacija, animirati, vremenska crta, ključni okvir, ključevi, ključ okvira, putanja kamere, prolazak kroz, obilazak, šetnja, prolazak pješke, video, film, webm, renderiraj video, sličice, pokazivač vremena, automatski ključ, ublažavanje, zadrži, scene, niz png, pokret
from: d3a58249
---

**Vremenska crta** pomiče kameru i bilo koju grupu ili komponentu tijekom vremena. Postavljate **ključeve** (gdje se nešto nalazi u određenom trenutku); ModelCraft to glatko pomiče od ključa do ključa. Reproducirajte ga u pogledu, zatim ga renderirajte u video uz isto nebo, sunce, materijale i svjetiljke kao [renderiranu sliku](topic:render).

## Otvorite vremensku crtu

Kliknite {{ui:Pogledi}} u grupi {{ui:Kamera}}, zatim {{ui:Vremenska crta animacije}}. Vremenska crta se otvara ispod pogleda: upravljački elementi na vrhu, zatim redak **Kamera** i redak za svaku grupu ili komponentu koja se pomiče. Romboi su ključevi; crvena linija je **pokazivač vremena**, trenutak prikazan u pogledu.

:::touch
Na telefonu se vremenska crta također otvara ispod pogleda. Njezini upravljački elementi su u jednom retku: prevucite ga u stranu da dođete do ostatka; gumb koji zatvara vremensku crtu ostaje na njegovu kraju.
:::

Povucite klizač (ili kliknite u redak) da pomaknete pokazivač vremena. {{ui:Reproduciraj}} reproducira od pokazivača vremena i pretvara se u {{ui:Pauziraj}} dok svira; kliknite ponovo da zaustavite na tom mjestu. {{key:Space}} radi isto dok je vremenska crta otvorena (kad je zatvorena, Space je i dalje {{ui:Odaberi}}). {{ui:Prethodni ključ}} i {{ui:Sljedeći ključ}} skaču između ključeva. Vlastiti stil može dati reprodukciji i pauzi drugu tipku: {{ui:Postavke}}, zatim izbornici, tipke i miš, naredba *Reproduciraj ili pauziraj animaciju*.

## Pomicanje kamere

1. Pomaknite pokazivač vremena na mjesto gdje snimka počinje (0 s), postavite pogled i kliknite {{ui:Ključ kamere}}.
2. Pomaknite pokazivač vremena kasnije (recimo 4 s), zakrenite, pomaknite ili prošetajte pogled do sljedećeg položaja i ponovno kliknite {{ui:Ključ kamere}}.
3. Dodajte koliko god želite ključeva, zatim kliknite {{ui:Reproduciraj}}.

Kamera glatko prolazi kroz svaki ključ i počinje i završava u mirovanju.

:::tip
Već imate [scene](topic:scenes)? {{ui:Iz scena}} iz njih stvara putanju kamere: zadržava se kod svake scene, zatim ide na sljedeću. Ako vremenska crta uopće nema ključeva, {{ui:Renderiraj video…}} to radi sam, pa su dvije scene ili više dovoljne za video obilaska.
:::

## Pomicanje grupe ili komponente

1. Odaberite grupu ili komponentu (pomiču se samo cijele grupe i komponente; prvo [napravite grupu](topic:groups-components)).
2. Na 0 s kliknite {{ui:Ključ odabira}}.
3. Pomaknite pokazivač vremena kasnije, [pomaknite, zakrenite ili skalirajte](topic:move-copy) grupu tamo gdje treba biti i ponovno kliknite {{ui:Ključ odabira}}.

Klizi, zakreće se i raste između ključeva. Zakreti idu najkraćim putem.

**Automatski ključ** štedi klik iz koraka 3: dok je {{ui:Automatski ključ}} uključen, odabrana grupa ili komponenta koju pomaknete, zakrenete ili skalirate dobiva ključ na pokazivaču vremena sama od sebe (a prvi put i ključ na 0 s, tamo gdje je bila).

:::note
Pomicanje animirane grupe bez ključa traje samo dok se pokazivač vremena ne pomakne: sljedeći put kad reproducirate ili pomičete po vremenu, vraća se tamo gdje su je ključevi postavili. Statusna traka to kaže. Pritisnite {{ui:Ključ odabira}} da to zadržite.
:::

## Promjena ključeva

- **Odaberite ključ** klikom na njegov romb: pokazivač vremena ide na njega.
- **Pomaknite ključ** povlačenjem romba duž njegova retka ili tipkama {{key:Left}} i {{key:Right}} (jedna sličica; uz {{key:Shift}}, deset).
- **Izbrišite** s {{ui:Izbriši ključ}} (odabrani ključ ili svaki ključ na pokazivaču vremena) ili {{key:Delete}} na odabranom rombu.
- **Kako se kreće dalje**, za odabrani ključ: {{ui:Zagladi}} (krivulja kroz ključeve oko njega), {{ui:Ravnomjerno}} (ravna linija jednom brzinom), {{ui:Sporo na početku i kraju}} (dolazi u mirovanje na ovom ključu) ili {{ui:Zadrži}} (ostaje na mjestu do sljedećeg ključa).
- **{{ui:Duljina (s)}}** postavlja koliko animacija traje; ključ postavljen nakon kraja je produljuje. Da je skratite, prvo pomaknite ili izbrišite ključeve iza novog kraja.
- **×** na retku grupe prestaje je animirati.

Vremenska crta ima vlastiti {{ui:Poništi}} i {{ui:Ponovi}}: poništavanje modela ({{key:Mod+Z}}) mijenja model, a ne ključeve. Animacija se sprema u datoteku `.modelcraft`. Zatvaranje vremenske crte vraća pokretne grupe na njihovu prvu pozu.

## Renderiranje videa

1. Kliknite {{ui:Renderiraj video}} na vremenskoj crti (ili {{ui:Izvezi}} › {{ui:Renderiraj video…}}).
2. Odaberite {{ui:Veličina}}, {{ui:Brzina sličica}}, {{ui:Kvaliteta svake sličice}} i {{ui:Datoteka}}.
3. Kliknite {{ui:Renderiraj video}}. Svaka sličica se prikazuje kako nastaje, uz preostalo vrijeme.
4. Kad završi, kliknite {{ui:Spremi video}}.

{{ui:Zaustavi}} (ili {{key:Esc}}) prekida ranije; {{ui:Spremi video}} tada zadržava već napravljene sličice kao kraći video.

Nebo, sunce, materijali, svjetiljke i svjetlina su oni koje ste postavili u {{ui:Renderiraj sliku…}}: postavite ih tamo prvo, provjeravajući jednu nepomičnu sliku. Svaka sličica se renderira na ovom računalu; ništa se ne učitava.

| Postavka | Što radi |
|---|---|
| {{ui:Veličina}} | 480p, 720p HD, 1080p Full HD ili vlastiti oblik pogleda (do 1920 piksela u širinu) |
| {{ui:Brzina sličica}} | 24, 25, 30 ili 60 sličica u sekundi. Dvostruko više sličica traje dvostruko dulje |
| {{ui:Kvaliteta svake sličice}} | {{ui:Brzo}} (4 prolaza), {{ui:Radno}} (16) ili {{ui:Dobro}} (64): više prolaza daje glatkije sjene i rubove |
| {{ui:Datoteka}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} gdje preglednik može to zapisati, ili {{ui:PNG slike, po jedna za sličicu (ZIP)}} za uređivače videa (i za preglednike bez kodera za video) |

:::tip
Video od 10 sekundi pri 30 sličica u sekundi ima 301 sličicu. Prvo isprobajte {{ui:Brzo}} pri 480p da provjerite kretanje, zatim renderirajte {{ui:Radno}} ili {{ui:Dobro}} u većoj veličini.
:::

WebM se reproducira u preglednicima i VLC-u, a uređivači videa ga pretvaraju. {{ui:MP4 video (H.264)}} se nudi gdje ga preglednik može zapisati. {{ui:Renderiraj video}} koristi brzi renderer; da obradite svaku sličicu path tracingom, odaberite {{ui:Dodaj ovu animaciju u red}} u istom dijaloškom okviru: sličice se renderiraju u [redu za renderiranje](topic:render#the-render-queue), koji zahtijeva WebGPU.

:::firefox safari
Renderiranje videa treba preglednik koji sam kodira video (WebCodecs): novije verzije Chromea, Edgea, Firefoxa i Safarija 17 to mogu. Bez toga odaberite {{ui:PNG slike, po jedna za sličicu (ZIP)}}.
:::

## Što treba znati

- Pomiču se samo cijele grupe i komponente. Plohe, bridovi, vrijeme sunca i stil se još ne mijenjaju tijekom vremena.
- {{ui:Izvezi animaciju}} pod [Scene](topic:scenes) još bilježi pogled kakav je na zaslonu, u stvarnom vremenu; {{ui:Renderiraj video}} renderira svaku sličicu sa nebom, sjenama i materijalima.
