---
title: Animiraj kameru i objekte i renderuj video
summary: Postavite ključeve za kameru i za grupe i komponente na vremenskoj liniji, pustite ih u prozoru pogleda i renderujte animaciju u WebM video sa nebom, suncem i materijalima renderera.
keywords: animacija, animirati, vremenska linija, ključni kadar, ključevi, putanja kamere, prelet, obilazak, šetnja, video, film, webm, renderuj video, kadrovi, broj kadrova, fps, pokazivač vremena, automatski ključ, ublažavanje, zadrži, glatko, scene, PNG niz, kretanje
from: d3a58249
---

**Vremenska linija** pomera kameru i bilo koju grupu ili komponentu tokom vremena. Postavljate **ključeve** (gde se nešto nalazi u datom trenutku); ModelCraft ga glatko pomera od ključa do ključa. Pustite je u prozoru pogleda, pa je renderujte u video sa istim nebom, suncem, materijalima i svetiljkama kao [renderovana slika](topic:render).

## Otvaranje vremenske linije

Kliknite {{ui:Pogledi}} u grupi {{ui:Kamera}}, pa {{ui:Vremenska linija animacije}}. Vremenska linija se otvara ispod prikaza: kontrole pri vrhu, zatim red **Kamera** i red za svaku grupu ili komponentu koja se pomera. Romboidi su ključevi; crvena linija je **pokazivač vremena**, trenutak prikazan u prozoru pogleda.

:::touch
Na telefonu se vremenska linija takođe otvara ispod prikaza. Njene kontrole su u jednom redu: prevucite ga u stranu da dođete do ostalih; dugme koje zatvara vremensku liniju ostaje na njenom kraju.
:::

Prevucite klizač (ili kliknite u red) da pomerite pokazivač vremena. {{ui:Pusti}} pušta od pokazivača vremena i menja se u {{ui:Pauziraj}} dok se pušta; ponovo kliknite da zaustavite tamo gde jeste. {{key:Space}} radi isto dok je vremenska linija otvorena (kada je zatvorena, Space je i dalje {{ui:Izaberi}}). {{ui:Prethodni ključ}} i {{ui:Sledeći ključ}} skaču između ključeva. Sopstveni stil može dati pušti/pauziraj drugi taster: {{ui:Podešavanja}}, zatim meni, tasteri i miš, komanda *Pusti ili pauziraj animaciju*.

## Pomeranje kamere

1. Pomerite pokazivač vremena na mesto gde snimak počinje (0 s), podesite prikaz i kliknite {{ui:Ključ kamere}}.
2. Pomerite pokazivač vremena kasnije (recimo 4 s), orbitirajte, pomerajte pogled ili prošetajte do sledećeg položaja i ponovo kliknite {{ui:Ključ kamere}}.
3. Dodajte koliko god želite ključeva, pa {{ui:Pusti}}.

Kamera glatko prolazi kroz svaki ključ i počinje i završava u mirovanju.

:::tip
Već imate [scene](topic:scenes)? {{ui:Iz scena}} pravi putanju kamere iz njih: zadržava se kod svake scene, pa se pomera do sledeće. Ako vremenska linija nema nijedan ključ, {{ui:Renderuj video…}} to radi sam, pa su dve scene ili više dovoljne za video obilaska.
:::

## Pomeranje grupe ili komponente

1. Izaberite grupu ili komponentu (pomeraju se samo cele grupe i komponente; prvo [napravite grupu](topic:groups-components)).
2. Na 0 s kliknite {{ui:Ključ za izabrano}}.
3. Pomerite pokazivač vremena kasnije, [pomerite, rotirajte ili skalirajte](topic:move-copy) grupu tamo gde treba da bude, i ponovo kliknite {{ui:Ključ za izabrano}}.

Ona klizi, okreće se i raste između svojih ključeva. Okretanja idu kraćim putem.

**Automatski ključ** štedi klik iz koraka 3: dok je {{ui:Automatski ključ}} uključen, izabrana grupa ili komponenta koju pomerate, rotirate ili skalirate sama dobija ključ na pokazivaču vremena (i, prvi put, ključ na 0 s tamo gde je bila).

:::note
Pomeranje animirane grupe bez ključa traje samo dok se pokazivač vremena ne pomeri: sledeći put kada pustite ili prevlačite pokazivač, vraća se tamo gde su je njeni ključevi postavili. Statusna traka to kaže. Pritisnite {{ui:Ključ za izabrano}} da je zadržite.
:::

## Menjanje ključeva

- **Izaberite ključ** klikom na njegov romb: pokazivač vremena ide na njega.
- **Pomerite ključ** prevlačenjem njegovog romba duž reda, ili tasterima {{key:Left}} i {{key:Right}} (jedan kadar; uz {{key:Shift}}, deset).
- **Obrišite** pomoću {{ui:Izbriši ključ}} (izabrani ključ ili svaki ključ na pokazivaču vremena) ili tasterom {{key:Delete}} na izabranom romboidu.
- **Kako se nastavlja**, za izabrani ključ: {{ui:Zaglađivanje}} (kriva kroz ključeve oko njega), {{ui:Ravnomerno}} (prava linija stalnom brzinom), {{ui:Usporavanje na početku i kraju}} (dolazi u mirovanje na ovom ključu) ili {{ui:Zadrži}} (ostaje na mestu do sledećeg ključa).
- **Dužina (s)** određuje koliko traje animacija; ključ postavljen posle kraja je produžava. Da je skratite, prvo pomerite ili obrišite ključeve iza novog kraja.
- **×** u redu grupe prestaje da je animira.

Vremenska linija ima sopstvene {{ui:Opozovi}} i {{ui:Ponovi}}: opoziv modela ({{key:Mod+Z}}) menja model, a ne ključeve. Animacija se čuva u datoteci `.modelcraft`. Zatvaranje vremenske linije vraća pokretne grupe na njihov prvi položaj.

## Renderovanje videa

1. Kliknite {{ui:Renderuj video}} na vremenskoj liniji (ili {{ui:Izvezi}} › {{ui:Renderuj video…}}).
2. Izaberite {{ui:Veličina}}, {{ui:Broj kadrova}}, {{ui:Kvalitet svakog kadra}} i {{ui:Datoteka}}.
3. Kliknite {{ui:Renderuj video}}. Svaki kadar se prikazuje dok se pravi, sa preostalim vremenom.
4. Kada završi, kliknite {{ui:Sačuvaj video}}.

{{ui:Zaustavi}} (ili {{key:Esc}}) završava ranije; {{ui:Sačuvaj video}} zatim čuva već napravljene kadrove kao kraći video.

Nebo, sunce, materijali, svetiljke i svetlina su oni podešeni u {{ui:Renderuj sliku…}}: podesite ih najpre tamo, proverom jedne slike. Svaki kadar se renderuje na ovom računaru; ništa se ne otprema.

| Podešavanje | Šta radi |
|---|---|
| {{ui:Veličina}} | 480p, 720p HD, 1080p Full HD ili sopstveni oblik prikaza (do 1920 piksela u širinu) |
| {{ui:Broj kadrova}} | 24, 25, 30 ili 60 kadrova u sekundi. Dvostruko više kadrova traje dvostruko duže |
| {{ui:Kvalitet svakog kadra}} | {{ui:Brzo}} (4 prolaza), {{ui:Nacrt}} (16) ili {{ui:Dobro}} (64): više prolaza daje glatkije senke i ivice |
| {{ui:Datoteka}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} gde pregledač može da ga upiše, ili {{ui:PNG slike, jedna po kadru (ZIP)}} za programe za obradu videa (i za pregledače bez enkodera videa) |

:::tip
Video od 10 sekundi na 30 kadrova u sekundi ima 301 kadar. Najpre probajte {{ui:Brzo}} na 480p da proverite kretanje, pa renderujte {{ui:Nacrt}} ili {{ui:Dobro}} na većoj veličini.
:::

WebM se pušta u pregledačima i VLC-u, a programi za obradu videa ga konvertuju. {{ui:MP4 video (H.264)}} se nudi tamo gde pregledač može da ga upiše. {{ui:Renderuj video}} koristi brzi renderer; da bi se svaki kadar renderovao praćenjem putanje zraka, izaberite {{ui:Dodaj ovu animaciju u red}} u istom dijalogu: kadrovi se renderuju u [redu za renderovanje](topic:render#the-render-queue), što zahteva WebGPU.

:::firefox safari
Renderovanje videa zahteva pregledač koji sam enkodira video (WebCodecs): skorašnji Chrome, Edge, Firefox i Safari 17 to rade. Bez toga izaberite {{ui:PNG slike, jedna po kadru (ZIP)}}.
:::

## Stvari koje treba znati

- Pomeraju se samo cele grupe i komponente. Strane, ivice, vreme sunca i stil se još ne menjaju tokom vremena.
- {{ui:Izvezi animaciju}} pod [Scene](topic:scenes) i dalje snima prikaz kakav je na ekranu, u realnom vremenu; {{ui:Renderuj video}} renderuje svaki kadar sa nebom, senkama i materijalima.
