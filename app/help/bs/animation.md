---
title: Animiraj kameru i objekte te renderuj video
summary: Postavi ključeve za kameru te za grupe i komponente na vremenskoj liniji, pusti ih u prikazu i renderuj animaciju u WebM video sa nebom, suncem i materijalima renderera.
keywords: animacija, animiraj, vremenska linija, ključni kadrovi, ključevi, ključ kadra, putanja kamere, prelet, obilazak, šetnja, video, film, webm, renderuj video, kadrovi, brzina sličica, fps, pokazivač vremena, automatski ključ, ublažavanje, zaglađivanje, zadrži, scene, niz png, kretanje
from: d3a58249
---

**Vremenska linija** pomjera kameru i bilo koju grupu ili komponentu kroz vrijeme. Postavljaš **ključeve** (gdje je nešto u datom trenutku); ModelCraft ga glatko pomjera od ključa do ključa. Pusti je u prikazu, pa je renderuj u video s istim nebom, suncem, materijalima i svjetiljkama kao [renderovana slika](topic:render).

## Otvori vremensku liniju

Klikni {{ui:Pogledi}} u grupi {{ui:Kamera}}, pa {{ui:Vremenska linija animacije}}. Vremenska linija se otvara ispod prikaza: kontrole pri vrhu, zatim red **Kamera** i red za svaku grupu ili komponentu koja se pomjera. Rombovi su ključevi; crvena linija je **pokazivač vremena**, trenutak prikazan u prikazu.

:::touch
Na telefonu se vremenska linija takođe otvara ispod prikaza. Njene kontrole su u jednom redu: prevuci je u stranu da dođeš do ostatka; dugme koje zatvara vremensku liniju ostaje na njenom kraju.
:::

Prevuci klizač (ili klikni u red) da pomjeriš pokazivač vremena. {{ui:Pusti}} pušta od pokazivača vremena i pretvara se u {{ui:Pauziraj}} dok svira; ponovo klikni da zaustaviš na mjestu. {{key:Space}} radi isto dok je vremenska linija otvorena (kad je zatvorena, Space je i dalje Odaberi). {{ui:Prethodni ključ}} i {{ui:Sljedeći ključ}} skaču između ključeva. Vlastiti stil može dati pusti i pauziraj drugu tipku: {{ui:Postavke}}, zatim meniji, tipke i miš, naredba *Pusti ili pauziraj animaciju*.

## Pomjeri kameru

1. Pomjeri pokazivač vremena tamo gdje snimak počinje (0 s), postavi prikaz i klikni {{ui:Ključna kamera}}.
2. Pomjeri pokazivač kasnije (npr. 4 s), okreni, pomjeri ili šetaj prikaz do sljedeće pozicije i ponovo klikni {{ui:Ključna kamera}}.
3. Dodaj koliko god hoćeš ključeva, zatim {{ui:Pusti}}.

Kamera glatko prolazi kroz svaki ključ i počinje i završava u mirovanju.

:::tip
Već imate [scene](topic:scenes)? {{ui:Iz scena}} pravi put kamere od njih: zadržava se na svakoj sceni, pa ide na sljedeću. Ako vremenska linija nema nijedan ključ, {{ui:Renderuj video…}} to radi sam, pa su dvije scene ili više dovoljne za video obilaska.
:::

## Pomjeri grupu ili komponentu

1. Odaberi grupu ili komponentu (pomjeraju se samo cijele grupe i komponente; prvo [napravi grupu](topic:groups-components)).
2. Na 0 s klikni {{ui:Ključ za odabrano}}.
3. Pomjeri pokazivač kasnije, [pomjeri, rotiraj ili skaliraj](topic:move-copy) grupu tamo gdje treba biti i ponovo klikni {{ui:Ključ za odabrano}}.

Klizi se, okreće i raste između svojih ključeva. Okreti idu kraćim putem.

**Automatski ključ** štedi klik iz koraka 3: dok je {{ui:Automatski ključ}} uključen, odabrana grupa ili komponenta koju pomjeriš, rotiraš ili skaliraš dobija ključ na pokazivaču vremena sama od sebe (i, prvi put, ključ na 0 s gdje je bila).

:::note
Pomjeranje animirane grupe bez ključa traje samo dok se pokazivač vremena ne pomjeri: kad ponovo pustiš ili pomjeriš pokazivač, vraća se tamo gdje su je njeni ključevi postavili. Statusna traka to kaže. Pritisni {{ui:Ključ za odabrano}} da zadržiš.
:::

## Izmjena ključeva

- **Odaberi ključ** klikom na njegov romb: pokazivač vremena ide na njega.
- **Pomjeri ključ** prevlačenjem romba duž njegovog reda, ili tipkama {{key:Left}} i {{key:Right}} (jedan kadar; uz {{key:Shift}}, deset).
- **Obriši** pomoću {{ui:Izbriši ključ}} (odabrani ključ, ili svaki ključ na pokazivaču vremena) ili tipkom {{key:Delete}} na odabranom rombu.
- **Kako se kreće dalje**, za odabrani ključ: {{ui:Zaglađivanje}} (kriva kroz okolne ključeve), {{ui:Ravnomjerno}} (prava linija jedne brzine), {{ui:Usporeno na početku i kraju}} (dolazi u mirovanje na ovom ključu) ili {{ui:Zadrži}} (stoji dok ne dođe sljedeći ključ).
- **Dužina (s)** podešava koliko traje animacija; ključ postavljen nakon kraja ga produžava. Da je skratiš, prvo pomjeri ili obriši ključeve iza novog kraja.
- **×** na redu grupe zaustavlja njeno animiranje.

Vremenska linija ima svoje {{ui:Poništi}} i {{ui:Ponovi}}: {{key:Mod+Z}} poništava promjene modela, a ne ključeve. Animacija se čuva u datoteci `.modelcraft`. Zatvaranje vremenske linije vraća pokretne grupe na njihovu prvu pozu.

## Renderuj video

1. Klikni {{ui:Renderuj video}} na vremenskoj liniji (ili {{ui:Izvezi}} › {{ui:Renderuj video…}}).
2. Odaberi {{ui:Veličina}}, {{ui:Brzina sličica}}, {{ui:Kvalitet svakog kadra}} i {{ui:Datoteka}}.
3. Klikni {{ui:Renderuj video}}. Svaki kadar se prikazuje dok se pravi, uz preostalo vrijeme.
4. Kad je gotovo, klikni {{ui:Spasi video}}.

{{ui:Zaustavi}} (ili {{key:Esc}}) završava ranije; {{ui:Spasi video}} tada čuva već napravljene kadrove kao kraći video.

Nebo, sunce, materijali, svjetiljke i svjetlina su oni podešeni u {{ui:Renderuj sliku…}}: postavi ih tamo prvo, provjeravajući nepomičnu sliku. Svaki kadar se renderuje na ovom računaru; ništa se ne šalje.

| Podešavanje | Šta radi |
|---|---|
| {{ui:Veličina}} | 480p, 720p HD, 1080p Full HD, ili oblik prikaza (do 1920 piksela široko) |
| {{ui:Brzina sličica}} | 24, 25, 30 ili 60 sličica u sekundi. Dvostruko više sličica traje dvostruko duže |
| {{ui:Kvalitet svakog kadra}} | {{ui:Brzo}} (4 prolaza), {{ui:Nacrt}} (16) ili {{ui:Dobro}} (64): više prolaza daje glađe sjenke i ivice |
| {{ui:Datoteka}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} gdje ga pregledač može zapisati, ili {{ui:PNG slike, jedna po kadru (ZIP)}} za programe za montažu videa (i za pregledače bez video enkodera) |

:::tip
Video od 10 sekundi na 30 sličica u sekundi ima 301 kadar. Prvo probaj {{ui:Brzo}} na 480p da provjeriš kretanje, zatim renderuj {{ui:Nacrt}} ili {{ui:Dobro}} u većoj veličini.
:::

WebM se pušta u pregledačima i VLC-u, a programi za montažu ga pretvaraju. {{ui:MP4 video (H.264)}} se nudi gdje pregledač može da ga zapiše. {{ui:Renderuj video}} koristi brzi renderer; da bi praćenjem putanje svjetlosti renderovao svaki kadar, odaberi {{ui:Dodaj ovu animaciju u red}} u istom dijalogu: kadrovi se renderuju u [redu za renderovanje](topic:render#the-render-queue), što zahtijeva WebGPU.

:::firefox safari
Renderovanje videa zahtijeva pregledač koji sam enkodira video (WebCodecs): novije verzije Chrome, Edge, Firefox i Safari 17 to rade. Bez toga, odaberi {{ui:PNG slike, jedna po kadru (ZIP)}}.
:::

## Stvari koje treba znati

- Pomjeraju se samo cijele grupe i komponente. Lica, ivice, vrijeme sunca i stil se još ne mijenjaju tokom vremena.
- {{ui:Izvezi animaciju}} pod [Scene](topic:scenes) i dalje bilježi prikaz kakav je na ekranu, u stvarnom vremenu; {{ui:Renderuj video}} renderuje svaki kadar sa nebom, sjenama i materijalima.
