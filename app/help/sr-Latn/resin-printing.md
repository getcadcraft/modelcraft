---
title: Podela na slojeve za štampač smolom
summary: Podelite podlogu za štampu na slojeve za štampač smolom, napravite deo šupljim i dodajte mu oslonce, pregledajte slojeve, sačuvajte datoteku štampača i pronađite ekspoziciju pomoću testa ekspozicije.
keywords: smola, predloži nagib, usisna čašica, sila ljuštenja, ukrepe, štampanje smolom, sla, msla, dlp, slajser, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, šupalj, otvor za vazduh, podloga, oslonci, test ekspozicije, lestvica ekspozicije, kalibracija, slojevi, dodatak
from: 8cc12858
---

Dodaci za smolu dele ono što je na podlozi za štampu na slike slojeva za ekran vašeg štampača i čuvaju datoteku koju štampač čita. Besplatni su, bez zaključanih funkcija, i isključeni su dok ih ne uključite.

:::note
Nijedna datoteka još nije učitana na pravom štampaču. Datoteke su proverene samo čitačima koje ima CadCraft, a oslonci su novi. Proverite slojeve i prvi put pokrenite štampanje ručno.
:::

## Šta ćete uraditi

Podelite deo za smolu na slojeve, proverite slojeve, sačuvajte datoteku i kopirajte je na štampač.

## Koraci

1. Otvorite {{ui:Podešavanja}} › {{ui:Dodaci}} i uključite dodatak za podelu na slojeve smolom i dodatak za format datoteke vašeg štampača (Elegoo GOO, SL1, Chitubox ili Anycubic). Možete i pritisnuti {{ui:Dodaj štampanje smolom}} na kartici faze štampe.
2. Stavite deo na podlogu kao u [Postavljanje stvari na podlogu za štampu](topic:print-stage), pa izaberite {{ui:Smola}} pored **Štampanje sa**.
3. Pod **Podešavanja štampe smolom** izaberite **Štampač** i **Smolu**. Kartica prikazuje veličinu ekrana u pikselima. To su objavljene veličine proizvođača, pa proverite svoj štampač; možete ih menjati pod Prilagođeno.
4. Podesite **Visina sloja (mm)**, **Ekspozicija (s)** i **Ekspozicija donjih slojeva (s)**. Brojevi za svaku smolu su samo polazna tačka.
5. Štiklirajte **Izdubi, sa otvorom za vazduh** ako želite šupalj deo, pa podesite **Zid (mm)** i **Širina otvora (mm)**.
6. Štiklirajte **Oslonci i podloga**, pa izaberite **Gustina oslonaca**: Lagano, Srednje ili Gusto.
7. Izaberite **Format datoteke**. Ako kartica kaže da nijedan format još nije dodat, pritisnite dugme sa natpisom Dodaj i ime formata.
8. Pritisnite {{ui:Pregledaj slojeve}} i pomerite klizač **Sloj**. Plutajući delovi su obeleženi krugom. Red ispod daje broj slojeva, vreme i smolu u mL, gramima i ceni.
9. Pritisnite {{ui:Sačuvaj datoteku za štampu}}, proverite sažetak i pritisnite {{ui:Sačuvaj}}. Kopirajte datoteku na štampač.

## Nagib, usisne čašice, ukrepe i slika sile ljuštenja

Ta četiri su procene na osnovu oblika dela. Nijedna nije isprobana na pravom štampaču, pa ih shvatite kao nagoveštaj i pogledajte slojeve.

1. Pritisnite {{ui:Predloži nagib}} pod **Nagib (stepeni)**. CadCraft proba nagibe od 0 do 60 stepeni i bira onaj sa najmanjim najvećim slojem, najmanjom previsnom površinom i bez usisne čašice. Postavlja **Nagib (stepeni)** i kaže šta je našao. Težine ocene su naše, a ne proizvođača štampača.
2. Posle {{ui:Pregledaj slojeve}}, upozorenje navodi šupljine koje se otvaraju samo ka foliji. Takva šupljina može zadržati vakuum kada se sloj odlepi. Nagnite deo ili dodajte otvor. Udubljenja uža od veličine ćelije navedene u upozorenju se ne vide.
3. Uz uključene **Oslonci i podloga**, štiklirajte **Ukrepi visoke oslonce** da dodate poprečne ukrepe između visokih tankih stubova.
4. Red ispod pregleda daje najveći sloj u cm2. Sila se prikazuje samo ako unesete **Izmereni napon ljuštenja** pod **Donji slojevi, podizanje i brzine**. Bez vašeg izmerenog broja prikazuje se samo površina.

## Pronađite ekspoziciju

1. Uključite dodatak za test ekspozicije u {{ui:Podešavanja}} › {{ui:Dodaci}}.
2. Pritisnite {{ui:Postavi probni deo na podlogu}}.
3. Pritisnite {{ui:Sačuvaj lestvicu ekspozicije}}. Dobijate po jednu datoteku za svaku ekspoziciju, u zip arhivi.
4. Štampajte svaku datoteku istom smolom i zadržite ekspoziciju sa najoštrijim tankim stubovima i otvorenim rupama.

## Napomene

- Podela na slojeve radi u pozadini, pa stranica ostaje upotrebljiva pri velikoj ploči.
- Delovi koji nisu zatvorena čvrsta tela se izostavljaju, i kartica to kaže.
- Ako štampač odbije datoteku, kartica formata ima opcije za ono što format ostavlja otvoreno. Promenite jednu, ponovo sačuvajte i javite nam koja je radila.
- Verzije Anycubic 517 i 518 se ne upisuju.
