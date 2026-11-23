---
title: Rezanje za štampač sa smolom
summary: Razreži podlogu za štampu za štampač sa smolom, izdubi i podupri dio, pregledaj slojeve, spasi datoteku štampača i pronađi ekspoziciju pomoću testa ekspozicije.
keywords: smola, predloži nagib, usisna čaša, sila odvajanja, podupiranje, štampanje smolom, sla, msla, dlp, rezač, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, šuplji, otvor za odzračivanje, plutajuća podloga, oslonci, test ekspozicije, ljestvica ekspozicije, kalibracija, slojevi, dodatak
from: 8cc12858
---

Dodaci za smolu režu ono što je na podlozi za štampu u slike slojeva za ekran tvog štampača i spašavaju datoteku koju štampač čita. Besplatni su, ništa nije zaključano, i isključeni su dok ih ne uključiš.

:::note
Nijedna datoteka još nije učitana na pravom štampaču. Datoteke su provjerene samo vlastitim čitačima CadCrafta, a oslonci su novi. Provjeri slojeve i prvu štampu pokreni ručno.
:::

## Šta ćeš raditi

Razreži dio za smolu, provjeri slojeve, spasi datoteku i kopiraj je na svoj štampač.

## Koraci

1. Otvori {{ui:Postavke}} › {{ui:Dodaci}} i uključi dodatak za rezanje za smolu i dodatak za format datoteke tvog štampača (Elegoo GOO, SL1, Chitubox ili Anycubic). Možeš i pritisnuti {{ui:Dodaj štampanje smolom}} na kartici Faza štampanja.
2. Postavi dio na podlogu kao u [Postavi stvari na podlogu za štampanje](topic:print-stage), zatim odaberi {{ui:Smola}} pored **Štampanje pomoću**.
3. Pod **Postavke štampanja smolom** odaberi svoj **Štampač** i svoju **Smolu**. Kartica prikazuje veličinu ekrana u pikselima. To su objavljene veličine proizvođača, pa provjeri svoju; možeš ih uređivati pod Prilagođeno.
4. Postavi **Visina sloja (mm)**, **Ekspozicija (s)** i **Ekspozicija donjih slojeva (s)**. Brojevi za svaku smolu su samo polazna tačka.
5. Označi **Izdubi, s otvorom za odzračivanje** ako želiš šuplji dio, i postavi **Debljina zida (mm)** i **Širina otvora (mm)**.
6. Označi **Oslonci i plutajuća podloga** i odaberi **Gustinu oslonaca**: Lagana, Srednja ili Teška.
7. Odaberi **Format datoteke**. Ako kartica kaže da nijedan još nije dodan, pritisni dugme sa natpisom Dodaj i naziv formata.
8. Pritisni {{ui:Pregled slojeva}} i pomjeri klizač **Sloj**. Plutajući dijelovi su obilježeni kružnicom. Red ispod daje broj slojeva, vrijeme i smolu u mL, gramima i trošak.
9. Pritisni {{ui:Spasi datoteku za štampanje}}, provjeri sažetak i pritisni {{ui:Spasi}}. Kopiraj datoteku na svoj štampač.

## Nagib, usisne čaše, ukrepe i vrijednost odvajanja

Ova četiri su procjene iz oblika dijela. Nijedna nije isprobana na pravom štampaču, pa ih tretiraj kao nagovještaj i pogledaj slojeve.

1. Pritisni {{ui:Predloži nagib}} pod **Nagib (stepeni)**. CadCraft isprobava nagibe od 0 do 60 stepeni i bira onaj s najmanjim najvećim slojem, najmanjom nagnutom površinom i bez usisne čaše. Postavlja **Nagib (stepeni)** i kaže šta je našao. Težine bodovanja su naše, ne proizvođača štampača.
2. Nakon {{ui:Pregled slojeva}}, upozorenje imenuje šupljine koje se otvaraju samo prema filmu. Takva šupljina može držati vakuum kad se sloj odvoji. Nagni dio ili dodaj otvor. Udubljenja uža od veličine ćelije navedene u upozorenju se ne vide.
3. Kad su **Oslonci i plutajuća podloga** uključeni, označi **Ukrijepi visoke oslonce** da dodaš poprečne ukrepe između visokih tankih stubova.
4. Red ispod pregleda daje najveći sloj u cm2. Prikazuje silu samo ako upišeš **Izmjereni napon odvajanja** pod **Donji slojevi, podizanje i brzine**. Bez tvog izmjerenog broja prikazuje samo površinu.

## Pronađi ekspoziciju

1. Uključi dodatak za test ekspozicije u {{ui:Postavke}} › {{ui:Dodaci}}.
2. Pritisni {{ui:Postavi probni dio na podlogu}}.
3. Pritisni {{ui:Spasi ljestvicu ekspozicije}}. Dobiješ jednu datoteku za svaku ekspoziciju, u zip arhivi.
4. Štampaj svaku datoteku istom smolom i zadrži ekspoziciju s najoštrijim tankim stubovima i otvorenim rupama.

## Napomene

- Rezanje se izvodi u pozadini, pa stranica ostaje upotrebljiva na velikoj ploči.
- Dijelovi koji nisu zatvorena tijela se izostavljaju, a kartica to kaže.
- Ako štampač odbije datoteku, kartica formata ima opcije za ono što format ostavlja otvoreno. Promijeni jednu, ponovo spasi i javi nam koja je radila.
- Verzije Anycubic 517 i 518 se ne zapisuju.
